// Fuse extractor for the content pipeline.
// Derived from tools/generate-mograph-pages.mjs (same parsing, same type mapping).
// Change from the original: Lua comments are stripped once, up front. The old
// per-character comment skip lost every parameter after a commented-out
// self:AddInput(...) block (52 fuses affected).
import fs from 'node:fs';
import path from 'node:path';

/** Replace Lua comments with spaces (newlines kept so offsets stay stable). Strings and long brackets are left alone. */
export function stripLuaComments(text) {
  const out = text.split('');
  let i = 0;
  const n = text.length;
  const blank = (a, b) => { for (let k = a; k < b; k++) if (out[k] !== '\n' && out[k] !== '\r') out[k] = ' '; };
  const longOpen = (idx) => { const m = /^\[(=*)\[/.exec(text.slice(idx, idx + 40)); return m ? m[1].length : -1; };
  while (i < n) {
    const c = text[i];
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n && text[j] !== c && text[j] !== '\n') { if (text[j] === '\\') j++; j++; }
      i = j + 1;
      continue;
    }
    if (c === '[') {
      const lvl = longOpen(i);
      if (lvl >= 0) {
        const close = ']' + '='.repeat(lvl) + ']';
        const e = text.indexOf(close, i + lvl + 2);
        i = e < 0 ? n : e + close.length;
        continue;
      }
    }
    if (c === '-' && text[i + 1] === '-') {
      const lvl = text[i + 2] === '[' ? longOpen(i + 2) : -1;
      let end;
      if (lvl >= 0) {
        const close = ']' + '='.repeat(lvl) + ']';
        const e = text.indexOf(close, i + 2 + lvl + 2);
        end = e < 0 ? n : e + close.length;
      } else {
        const nl = text.indexOf('\n', i);
        end = nl < 0 ? n : nl;
      }
      blank(i, end);
      i = end;
      continue;
    }
    i++;
  }
  return out.join('');
}

/** Skip to just after the end of a Lua string starting at strStart (" ' or [[ ). */
function skipLuaString(text, strStart) {
  const c = text[strStart];
  if (c === '"' || c === "'") {
    let i = strStart + 1;
    while (i < text.length) {
      if (text[i] === '\\') { i += 2; continue; }
      if (text[i] === c) return i + 1;
      i++;
    }
  } else if (text.startsWith('[[', strStart)) {
    const end = text.indexOf(']]', strStart + 2);
    return end >= 0 ? end + 2 : text.length;
  }
  return strStart + 1;
}

/** Extract the top-level args inside `self:AddInput( ... )`. startIdx points at '('. */
function parseAddInputArgs(text, startIdx) {
  let i = startIdx + 1;
  const args = [];
  let cur = '';
  let depth = 0;
  let inString = false;
  let quote = '';
  while (i < text.length) {
    const c = text[i];
    if (text.startsWith('[[', i)) {
      const end = text.indexOf(']]', i + 2);
      cur += text.slice(i, end + 2);
      i = end + 2;
      continue;
    }
    if (inString) {
      cur += c;
      if (c === '\\') { cur += text[i + 1] || ''; i += 2; continue; }
      if (c === quote) inString = false;
      i++;
      continue;
    }
    if (c === '"' || c === "'") { inString = true; quote = c; cur += c; i++; continue; }
    if (text.startsWith('--', i)) {
      const nl = text.indexOf('\n', i);
      i = nl === -1 ? text.length : nl + 1;
      continue;
    }
    if (c === '(' || c === '{') { depth++; cur += c; i++; continue; }
    if (c === ')' || c === '}') {
      if (depth === 0 && c === ')') {
        if (cur.trim()) args.push(cur.trim());
        return { args, nextIdx: i + 1 };
      }
      depth--; cur += c; i++; continue;
    }
    if (c === ',' && depth === 0) { args.push(cur.trim()); cur = ''; i++; continue; }
    cur += c;
    i++;
  }
  return { args, nextIdx: i };
}

function textStartsLongBracket(text, idx) {
  return text.startsWith('[[', idx) || text.startsWith('[=', idx);
}

function splitTopLevel(str) {
  const parts = [];
  let cur = '';
  let depth = 0;
  let inString = false;
  let quote = '';
  let i = 0;
  while (i < str.length) {
    const c = str[i];
    if (textStartsLongBracket(str, i)) { cur += str.slice(i, skipLuaString(str, i)); i = skipLuaString(str, i); continue; }
    if (inString) {
      cur += c;
      if (c === '\\') { cur += str[i + 1] || ''; i += 2; continue; }
      if (c === quote) inString = false;
      i++;
      continue;
    }
    if (c === '"' || c === "'") { inString = true; quote = c; cur += c; i++; continue; }
    if (c === '{' || c === '(') depth++;
    else if (c === '}' || c === ')') depth--;
    else if (c === ',' && depth === 0) { parts.push(cur.trim()); cur = ''; i++; continue; }
    cur += c;
    i++;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

function findTopLevelEq(str) {
  let depth = 0;
  let inString = false;
  let quote = '';
  let i = 0;
  while (i < str.length) {
    const c = str[i];
    if (inString) { if (c === '\\') { i += 2; continue; } if (c === quote) inString = false; i++; continue; }
    if (c === '"' || c === "'") { inString = true; quote = c; i++; continue; }
    if (c === '{' || c === '(') depth++;
    else if (c === '}' || c === ')') depth--;
    else if (c === '=' && depth === 0 && str[i + 1] !== '=') return i;
    i++;
  }
  return -1;
}

function unquote(s) {
  if (!s) return s;
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

/** Parse a simple key/value Lua table body into an object (values kept raw). */
function parseLuaTable(body) {
  const out = {};
  if (!body) return out;
  let i = body.indexOf('{');
  if (i === -1) return out;
  let depth = 0;
  let j = i;
  let inString = false;
  let quote = '';
  for (; j < body.length; j++) {
    const c = body[j];
    if (textStartsLongBracket(body, j)) { j = skipLuaString(body, j) - 1; continue; }
    if (inString) { if (c === '\\') { j++; continue; } if (c === quote) inString = false; continue; }
    if (c === '"' || c === "'") { inString = true; quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) { j++; break; } }
  }
  const inner = body.slice(i + 1, j - 1);
  for (const entry of splitTopLevel(inner)) {
    const eq = findTopLevelEq(entry);
    if (eq === -1) continue;
    const key = entry.slice(0, eq).trim().replace(/^["']|["']$/g, '');
    out[key] = unquote(entry.slice(eq + 1).trim());
  }
  return out;
}

function extractButtons(raw) {
  const buttons = [];
  // MBTNC_AddButton = MultiButtonControl option labels; CCS_AddString = ComboControl
  // (dropdown) option labels — both list options in declaration order, matching the
  // numeric index stored as the parameter's value/default.
  const re = /(?:MBTNC_AddButton|CCS_AddString)\s*=\s*("[^"]*"|'[^']*')/g;
  let m;
  while ((m = re.exec(raw)) !== null) buttons.push(unquote(m[1]));
  return buttons;
}

// ---------------------------------------------------------------- Fuse parser
export function parseFuse(filePath, relCategory, relFunction, opts = {}) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const text = opts.strip === false ? raw : stripLuaComments(raw);
  const nameMatch = text.match(/FUSE_NAME\s*=\s*"([^"]+)"/);
  const name = nameMatch ? nameMatch[1] : path.basename(filePath, '.fuse');
  const regsDesc = (text.match(/REGS_OpDescription\s*=\s*"([^"]*)"/) || [])[1] || '';
  const params = [];
  let idx = 0;
  while (idx < text.length) {
    const hit = text.indexOf('self:AddInput(', idx);
    if (hit === -1) break;
    const { args, nextIdx } = parseAddInputArgs(text, hit + 'self:AddInput'.length);
    idx = nextIdx;
    if (args.length < 3) continue;
    const label = unquote(args[0]);
    const id = unquote(args[1]);
    const tbl = parseLuaTable(args[2]);
    // dynamic: ID built in a loop ("Text" .. i); the renderer should collapse these into one row
    params.push({ label, id, dynamic: /\.\./.test(args[0] + args[1]), raw: args[2], ...tbl });
  }
  return { name, category: relCategory, function: relFunction, file: filePath, regsDesc: regsDesc.trim(), params };
}

// ---------------------------------------------------------------- Type mapping
const CONTROL_TYPE = {
  ScrewControl: 'Float', SliderControl: 'Float', RangeControl: 'Range',
  MultiButtonControl: 'Dropdown', CheckboxControl: 'Checkbox', TextControl: 'Text',
  FontControl: 'Font', ColorControl: 'Color', PointControl: 'Point',
  FuIDControl: 'FuID', ComboControl: 'Dropdown', FloatControl: 'Float', IntegerControl: 'Integer',
  LabelControl: null,
};

function paramType(tbl) {
  const control = tbl.INPID_InputControl;
  // Dropdowns (ComboControl/MultiButtonControl) store their selection as a plain
  // Number under the hood, so the Number/Integer check below would otherwise win
  // first and silently discard the option labels — check for these explicitly
  // before falling through to the datatype-based logic.
  if (control === 'ComboControl' || control === 'MultiButtonControl') return 'Dropdown';
  const dt = tbl.LINKID_DataType;
  // Numeric data types: honour the integer flag before the control widget.
  if (dt === 'Number') return tbl.INP_Integer === 'true' ? 'Integer' : 'Float';
  if (control && CONTROL_TYPE[control] != null) return CONTROL_TYPE[control];
  if (dt === 'Text') return 'Text';
  if (dt === 'FuID') return 'FuID';
  if (dt === 'Color') return 'Color';
  return dt || 'Float';
}

function formatDefault(tbl, type) {
  if (tbl.INP_Default === undefined) return '—';
  const raw = unquote(String(tbl.INP_Default));
  if (type === 'Checkbox') return raw === '1' || raw === 'true' ? 'On' : 'Off';
  if (type === 'Dropdown' || tbl.INPID_InputControl === 'MultiButtonControl') {
    const buttons = extractButtons(tbl.raw);
    const d = Number(raw);
    if (buttons.length && Number.isFinite(d) && buttons[d] !== undefined) return buttons[d];
    return raw;
  }
  return raw;
}

function shouldSkipParam(p) {
  if (p.id === 'ConnectionLabel' || p.label === 'ConnectionLabel') return true;
  if (p.INPID_InputControl === 'LabelControl' || p.INPID_InputControl === 'SeparatorControl') return true;
  if (/^UISeparator/i.test(p.id) || /^UISeparator/i.test(p.label)) return true;
  if (p.INP_Passive === 'true' && p.IC_NoLabel === 'true' && p.label === '') return true;
  return false;
}

export { shouldSkipParam, paramType, formatDefault, extractButtons, parseLuaTable, CONTROL_TYPE };
