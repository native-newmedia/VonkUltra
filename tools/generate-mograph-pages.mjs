#!/usr/bin/env node
/**
 * Batch generator for the Mograph node reference pages.
 *
 * Sources:
 *   - Fuses (authoritative param data): Reactor Deploy Mograph tree
 *   - Docsify mega-pages (descriptions + connection examples): read-only clone
 *   - Images: local static batch first, Docsify clone as fallback
 *
 * Output:
 *   - One MDX page per node -> docs/reference/mograph/<Cat>/<Function>/v<Node>.md
 *   - _category_.json per data-type and per function folder (only if missing)
 *   - Existing rich Array pages (the fuses.ts 20) are MOVED into function
 *     subfolders and their Related-node chip links rewritten, content preserved.
 *
 * Usage:
 *   node tools/generate-mograph-pages.mjs                 # full run
 *   node tools/generate-mograph-pages.mjs --dry-run       # summary only, no writes
 *   node tools/generate-mograph-pages.mjs --cats Number,Matrix,HTML
 *   node tools/generate-mograph-pages.mjs --limit 5
 *   node tools/generate-mograph-pages.mjs --skip-retrofit
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_ROOT = path.resolve(__dirname, '..');
const DOCS_REF = path.join(SITE_ROOT, 'docs', 'reference', 'mograph');
const STATIC_IMG = path.join(SITE_ROOT, 'static', 'img', 'reference', 'mograph');

const FUSE_ROOT = process.env.FUSE_ROOT || '/Users/dunlewis/Reactor/Deploy/Fuses/Kartaverse/Vonk Ultra/Mograph';
const DOCSIFY_DOCS = '/Users/dunlewis/Documents/Fusion/VonkUltra/VonkUltra/docs';
const CLONE_IMG = path.join(DOCSIFY_DOCS, 'Images', 'Nodes');

const CATEGORY_ORDER = ['Array', 'HTML', 'JSON', 'Matrix', 'Number', 'ScriptVal'];
const FUNCTION_ORDER = ['Accumulate', 'Animate', 'Create', 'Logic', 'Modify', 'OBJ', 'ShapeRender', 'Shapes', 'Temporal', 'Utility'];

// ---------------------------------------------------------------- CLI args
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const SKIP_RETROFIT = args.includes('--skip-retrofit');
const FORCE = args.includes('--force');
const catsArg = argValue('--cats');
const CATS = catsArg ? catsArg.split(',').map((s) => s.trim()) : CATEGORY_ORDER;
const LIMIT = Number(argValue('--limit') || 0);

// Short, single-line summary for frontmatter `description`. Docusaurus falls
// back to the raw first paragraph when this is absent, which is fine for a
// one-sentence node but dumps the entire lead onto the function-group
// overview page's auto-generated node cards for any node with a longer
// writeup. Mirrors the Core generator's shortDescription().
function shortDescription(raw, maxLen = 160) {
  const text = String(raw ?? '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  const sentence = text.match(/^.{1,200}?[.!?](?=\s|$)/);
  if (sentence && sentence[0].length <= maxLen + 40) return sentence[0].trim();
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

function argValue(name) {
  const i = args.indexOf(name);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
}

// ---------------------------------------------------------------- Lua-ish parsing helpers
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
function parseFuse(filePath, relCategory, relFunction) {
  const text = fs.readFileSync(filePath, 'utf8');
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
    params.push({ label, id, raw: args[2], ...tbl });
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

// ---------------------------------------------------------------- Mega-page parser
function parseMegaPage(category) {
  const file = path.join(DOCSIFY_DOCS, `mograph-${category.toLowerCase()}.md`);
  if (!fs.existsSync(file)) return {};
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const nodes = {};
  let cur = null;
  let descLines = [];
  let exampleLines = [];
  let inExample = false;

  const flushExample = () => {
    if (cur && exampleLines.some((l) => l.trim())) {
      if (!nodes[cur].connections) nodes[cur].connections = [];
      nodes[cur].connections.push(exampleLines.join('\n'));
    }
    exampleLines = [];
    inExample = false;
  };
  const closeNode = () => {
    if (cur) nodes[cur].desc = descLines.join(' ').replace(/\s+/g, ' ').trim();
    descLines = [];
    flushExample();
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const hm = line.match(/^####\s+(v\w+)/);
    if (hm) { closeNode(); cur = hm[1]; nodes[cur] = nodes[cur] || { desc: '', connections: [] }; continue; }
    if (/^###\s/.test(line)) { closeNode(); cur = null; continue; }
    if (!cur) continue;
    const t = line.trim();
    if (inExample) {
      if (/^\s{4}/.test(line) || line === '' || /^v\w+.*->/.test(t)) exampleLines.push(line);
      else { flushExample(); if (t) descLines.push(t); }
      continue;
    }
    if (/Example Node Connections/i.test(t)) { inExample = true; continue; }
    if (/^!\[/.test(t)) continue;
    if (/^v\w+.*->/.test(t)) { inExample = true; exampleLines.push(line); continue; }
    if (t) descLines.push(t);
  }
  closeNode();
  return nodes;
}

// ---------------------------------------------------------------- Collect fuses
function collectFuses() {
  const fuses = [];
  for (const cat of CATS) {
    const catDir = path.join(FUSE_ROOT, cat);
    if (!fs.existsSync(catDir)) { console.warn(`  ! category dir missing: ${catDir}`); continue; }
    const walk = (dir, relFn) => {
      for (const entry of fs.readdirSync(dir)) {
        const p = path.join(dir, entry);
        if (fs.statSync(p).isDirectory()) walk(p, entry);
        else if (entry.endsWith('.fuse')) fuses.push(parseFuse(p, cat, relFn || 'Utility'));
      }
    };
    walk(catDir, '');
  }
  return fuses;
}

// ---------------------------------------------------------------- Image
function imageFor(name, category) {
  // Static image dirs are lowercase (static/img/reference/mograph/<cat>/); URL casing must match for case-sensitive hosting.
  const dir = category.toLowerCase();
  // Fuse names may use `_` where the image file uses `-` (e.g. vArrayConvert2D_3D -> vArrayConvert2D-3D.png)
  const candidates = [name, name.replace(/_/g, '-')];
  for (const cand of candidates) {
    const staticPath = path.join(STATIC_IMG, dir, `${cand}.png`);
    if (fs.existsSync(staticPath)) return { path: staticPath, url: `/VonkUltra/img/reference/mograph/${dir}/${cand}.png`, source: 'static' };
  }
  for (const cand of candidates) {
    const clonePath = path.join(CLONE_IMG, `${cand}.png`);
    if (fs.existsSync(clonePath)) return { path: clonePath, url: `/VonkUltra/img/reference/mograph/${dir}/${cand}.png`, source: 'clone' };
  }
  return null;
}

// ---------------------------------------------------------------- Emit helpers
function escPipe(s) {
  return String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function relativeLink(fromDir, toPath) {
  const rel = path.relative(fromDir, toPath);
  let out = rel.split(path.sep).join('/');
  if (!out.startsWith('.') && !out.startsWith('/')) out = './' + out;
  return out;
}

function emitCategoryJson(category, functions) {
  const writeIfMissing = (p, obj) => {
    if (!fs.existsSync(p)) fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n');
  };
  const catPos = CATEGORY_ORDER.indexOf(category);
  writeIfMissing(path.join(DOCS_REF, category, '_category_.json'), {
    label: category,
    position: catPos >= 0 ? catPos + 1 : 99,
    link: { type: 'generated-index', description: `${category} node reference.` },
  });
  for (const fn of functions) {
    const dir = path.join(DOCS_REF, category, fn);
    fs.mkdirSync(dir, { recursive: true });
    writeIfMissing(path.join(dir, '_category_.json'), {
      label: fn,
      position: FUNCTION_ORDER.includes(fn) ? FUNCTION_ORDER.indexOf(fn) + 1 : 99,
      link: { type: 'generated-index', description: `${category} / ${fn} nodes.` },
    });
  }
}

function relatedFor(node, megaRec, allNodes, knownNodes) {
  const refs = new Set();
  for (const block of megaRec.connections || []) {
    for (const m of block.matchAll(/\b(v\w+)/g)) {
      const r = m[1];
      if (r !== node.name && knownNodes.has(r)) refs.add(r);
    }
  }
  if (!refs.size) {
    const siblings = (allNodes.get(node.category)?.funcs.get(node.function) || [])
      .map((f) => f.name)
      .filter((n) => n !== node.name)
      .slice(0, 4);
    for (const s of siblings) refs.add(s);
  }
  return [...refs].slice(0, 6).map((r) => {
    const target = knownNodes.get(r);
    const href = relativeLink(path.join(node.category, node.function), path.join(target.category, target.function, r));
    return { name: r, href };
  });
}


/** Parameters section (first 5 rows, rest in a <details>). descOf(p) may supply a description from the summaries. */
function paramsSectionFor(node, descOf) {
  const visibleParams = node.params.filter((p) => !shouldSkipParam(p));
  const tableHead = `| Parameter | Type | Default | Description |\n|---|---|---|---|\n`;
  const row = (p) => {
    const type = paramType(p);
    const desc = p.desc || (descOf && descOf(p)) || '—';
    const mdx = desc.replace(/</g, '&lt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;'); // keep MDX from reading <, { as JSX
    return `| ${escPipe(p.label || p.id)} | ${type} | \`${formatDefault(p, type)}\` | ${escPipe(mdx)} |`;
  };
  let paramsSection = '';
  if (visibleParams.length) {
    const first = visibleParams.slice(0, 5);
    const rest = visibleParams.slice(5);
    paramsSection += `## Parameters\n\n${tableHead}${first.map(row).join('\n')}\n`;
    if (rest.length) {
      paramsSection += `\n<details>\n<summary>+${rest.length} more parameters</summary>\n\n${tableHead}${rest.map(row).join('\n')}\n\n</details>\n`;
    }
  }
  return paramsSection;
}

/** Generic text for the common input sockets that the summaries do not list as rows. */
const SOCKET_DESC = {
  'Input': 'Data to process.',
  'Data': 'Data to process.',
  'Input A': 'First input.',
  'Input B': 'Second input.',
  'Mask': 'Mask with one 0 or 1 value per element.',
  'Mask A': 'First mask, one 0 or 1 value per element.',
  'Mask B': 'Second mask, one 0 or 1 value per element.',
  'Points': 'Point positions.',
  'Edges': 'Edges that connect the points.',
  'Mesh Points': 'Points of the mesh that the input is compared with.',
};
function socketDesc(p) {
  if (p.LINK_Main === undefined) return null;
  if (p.label === 'Input' && p.LINKID_DataType === 'Image') return 'Image that the result is drawn onto.';
  return SOCKET_DESC[p.label] || null;
}

/** Parameter descriptions from _fuse-clean-pilot/<fn>/<node>_summary.md, keyed by normalised name. Grouped rows
 *  ("Offset X / Y / Z", "Shape Color (Red, Green, Blue)") are expanded to the single controls. */
const SUMMARY_DIR = path.resolve(SITE_ROOT, '..', '_fuse-clean-pilot');
const normName = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
function loadSummary(nodeName) {
  if (!fs.existsSync(SUMMARY_DIR)) return null;
  for (const d of fs.readdirSync(SUMMARY_DIR)) {
    const f = path.join(SUMMARY_DIR, d, `${nodeName}_summary.md`);
    if (!fs.existsSync(f)) continue;
    const map = new Map();
    const put = (n, d2) => { if (!map.has(normName(n))) map.set(normName(n), d2); };
    for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
      if (!line.startsWith('|') || line.startsWith('|---') || line.startsWith('| Parameter')) continue;
      const c = line.replace(/^\||\|$/g, '').split('|').map((x) => x.trim());
      if (c.length < 4 || !c[3] || c[3] === '—') continue;
      const [name, , , desc] = c;
      put(name, desc);
      const grp = name.match(/^(.*?)\s*\((.*,.*)\)$/);
      if (grp) for (const x of grp[2].split(',')) { put(x.trim(), desc); put(`${grp[1]} ${x.trim()}`, desc); }
      if (name.includes(' / ')) {
        const parts = name.split(' / ').map((x) => x.trim());
        const stem = parts[0].includes(' ') ? parts[0].slice(0, parts[0].lastIndexOf(' ')) : '';
        for (const x of parts) put(stem && !x.includes(' ') ? `${stem} ${x}` : x, desc);
      }
    }
    return map;
  }
  return null;
}

function renderPage(node, mega, opts) {
  const { category, function: fn, name } = node;
  const megaRec = mega[name] || {};
  const lead = megaRec.desc || node.regsDesc || `The ${name} node in the Vonk Ultra ${category} toolkit.`;
  const frontDesc = shortDescription(lead);

  const badges = [`Mograph / ${category}`, category];
  if (category === 'Array') badges.push('ScriptVal', 'JSON');
  else if (category === 'JSON') badges.push('ScriptVal', 'Array');
  else if (category === 'ScriptVal') badges.push('Array', 'JSON');
  const badgeHtml = badges.map((b) => `  <span className="node-badge">${b}</span>`).join('\n');

  const img = opts.images[name];
  const screenshot = img
    ? `<div className="node-screenshot">\n  <img src="${img.url}" alt="${name} node" />\n</div>\n`
    : `{/* No screenshot available for ${name} yet. */}\n`;

  const paramsSection = paramsSectionFor(node);

  let connectionsSection = '';
  if (megaRec.connections && megaRec.connections.length) {
    const tabs = megaRec.connections
      .map((block, i) => `<TabItem value="example-${i + 1}" label="Example ${i + 1}"${i === 0 ? ' default' : ''}>\n\n\`\`\`\n${block.trim()}\n\`\`\`\n\n</TabItem>`)
      .join('\n');
    connectionsSection = `## Example Connections\n\n<Tabs>\n${tabs}\n</Tabs>\n`;
  }

  let relatedSection = '';
  const related = relatedFor(node, megaRec, opts.allNodes, opts.knownNodes);
  if (related.length) {
    const chips = related.map((r) => `  <a className="node-chip" href="${r.href}">${r.name}</a>`).join('\n');
    relatedSection = `## Related Nodes\n\n<div className="node-chip-row">\n${chips}\n</div>\n`;
  }

  const frontmatter = `---\nsidebar_position: ${opts.position}\ntitle: ${name}\ndescription: ${JSON.stringify(frontDesc)}\n---\n`;
  return `${frontmatter}\nimport Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n# ${name}\n\n${lead}\n\n<div className="node-badge-row">\n${badgeHtml}\n</div>\n\n${screenshot}\n${paramsSection}\n${connectionsSection}\n${relatedSection}\n{/*\nGenerated page — node: ${name} (${category}/${fn}).\nSource: fuse ${path.basename(node.file)} + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).\n*/}\n`;
}

// ---------------------------------------------------------------- Retrofit existing rich pages
function retrofitExisting(existingPages, allNodes, knownNodePaths) {
  const moved = [];
  const cleaned = [];
  for (const [name, rec] of existingPages) {
    const node = allNodes.get('Array')?.all?.find((n) => n.name === name);
    if (!node) { console.warn(`  ! retrofit: no fuse record for ${name}`); continue; }
    const target = path.join(DOCS_REF, 'Array', node.function, `${name}.md`);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    if (!fs.existsSync(target) || FORCE) {
      let body = fs.readFileSync(rec.file, 'utf8');
      body = body.replace(/<a className="node-chip" href="([^"]+)">(v\w+)<\/a>/g, (m, href, chipName) => {
        const t = knownNodePaths.get(chipName);
        if (!t) return m;
        const rel = relativeLink(path.join('Array', node.function), t);
        return `<a className="node-chip" href="${rel}">${chipName}</a>`;
      });
      body = body.replace(/^sidebar_position:\s*\d+$/m, 'sidebar_position: 0');
      fs.writeFileSync(target, body);
      moved.push({ from: rec.file, to: target, name });
    }
    // Once the page is safe in its subfolder, remove the flat original (stale duplicate).
    if (fs.existsSync(target) && fs.existsSync(rec.file)) {
      fs.rmSync(rec.file);
      cleaned.push(name);
    }
  }
  return { moved, cleaned };
}

// ---------------------------------------------------------------- Run
const fuses = collectFuses();
console.log(`Parsed ${fuses.length} fuses (categories: ${[...new Set(fuses.map((f) => f.category))].join(', ')})\n`);

const allNodes = new Map();
for (const f of fuses) {
  if (!allNodes.has(f.category)) allNodes.set(f.category, { funcs: new Map(), all: [] });
  if (!allNodes.get(f.category).funcs.has(f.function)) allNodes.get(f.category).funcs.set(f.function, []);
  allNodes.get(f.category).funcs.get(f.function).push(f);
  allNodes.get(f.category).all.push(f);
}
const knownNodes = new Map();
const knownNodePaths = new Map();
for (const f of fuses) { knownNodes.set(f.name, f); knownNodePaths.set(f.name, path.join(f.category, f.function, f.name)); }


// ---------------------------------------------------------------- --refresh-params
// Rebuild only the Parameters section of existing generated pages (those still carrying the "pending" note)
// from the current fuses, filling descriptions from the summaries. Lead, examples and related nodes are kept.
if (args.includes('--refresh-params')) {
  const st = { pages: 0, changed: 0, rich: 0, nopage: 0, filled: 0, empty: 0 };
  for (const f of fuses) {
    if (!CATS.includes(f.category)) continue;
    const file = path.join(DOCS_REF, f.category, f.function, `${f.name}.md`);
    if (!fs.existsSync(file)) { st.nopage++; continue; }
    const text = fs.readFileSync(file, 'utf8');
    if (!text.includes('Param descriptions pending the content pass')) { st.rich++; continue; }
    st.pages++;
    const sum = loadSummary(f.name);
    const section = paramsSectionFor(f, (p) => (sum && sum.get(normName(p.label || p.id))) || socketDesc(p));
    st.filled += (section.match(/\| (?!—)[^|\n]+ \|\n/g) || []).length;
    st.empty += (section.match(/\| — \|\n/g) || []).length;
    const m = text.match(/## Parameters\n[\s\S]*?(?=\n## |\n\{\/\*)/);
    let out;
    if (m) out = text.replace(m[0], section.replace(/\n+$/, '\n'));
    else if (section) out = text.replace(/(\n## Example Connections|\n## Related Nodes|\n\{\/\*)/, `\n${section}$1`);
    else out = text;
    if (out !== text) { st.changed++; if (!DRY_RUN) fs.writeFileSync(file, out); }
  }
  console.log(`Refresh params: ${st.pages} pending pages, ${st.changed} changed, ${st.rich} curated pages left alone, ${st.nopage} nodes without a page`);
  console.log(`Rows with a description: ${st.filled}, still "—": ${st.empty}`);
  process.exit(0);
}

const megaCache = {};
for (const cat of CATS) megaCache[cat] = parseMegaPage(cat);

// existing rich pages in the flat array folder
const existingPages = new Map();
const arrayDocsDir = path.join(DOCS_REF, 'Array');
if (fs.existsSync(arrayDocsDir)) {
  for (const f of fs.readdirSync(arrayDocsDir)) {
    if (!f.endsWith('.md') || f.startsWith('_') || ['overview.md', 'index.md'].includes(f)) continue;
    existingPages.set(f.replace(/\.md$/, ''), { file: path.join(arrayDocsDir, f) });
  }
}
console.log(`Existing rich pages to retrofit: ${existingPages.size}\n`);

const stats = { generated: 0, retrofitted: 0, skipped: 0, imagesStatic: 0, imagesCloned: 0, imagesMissing: [] };
const movedRetrofit = [];

if (!SKIP_RETROFIT && !DRY_RUN && existingPages.size) {
  const res = retrofitExisting(existingPages, allNodes, knownNodePaths);
  movedRetrofit.push(...res.moved);
  stats.retrofitted = movedRetrofit.length;
  console.log(`Retrofitted ${stats.retrofitted} rich pages (${movedRetrofit.map((m) => m.name).join(', ')})\n`);
  if (res.cleaned.length) console.log(`Removed stale flat originals: ${res.cleaned.length}\n`);
}

const seenRetrofit = new Set([...existingPages.keys()]);
const positionCounter = new Map();
function nextPosition(cat, fn) {
  const key = `${cat}/${fn}`;
  const n = (positionCounter.get(key) || 0) + 1;
  positionCounter.set(key, n);
  return n;
}

outer:
for (const cat of CATS) {
  if (!allNodes.has(cat)) continue;
  const funcs = [...allNodes.get(cat).funcs.keys()];
  if (!DRY_RUN) emitCategoryJson(cat, funcs);
  for (const fn of funcs) {
    for (const node of allNodes.get(cat).funcs.get(fn)) {
      if (LIMIT && stats.generated >= LIMIT) break outer;
      if (seenRetrofit.has(node.name)) continue;
      const targetFile = path.join(DOCS_REF, cat, fn, `${node.name}.md`);
      if (!FORCE && fs.existsSync(targetFile)) { stats.skipped++; continue; }
      const img = imageFor(node.name, cat);
      if (img && img.source === 'static') stats.imagesStatic++;
      if (img && img.source === 'clone') stats.imagesCloned++;
      if (!img) stats.imagesMissing.push(`${cat}/${fn}/${node.name}`);
      const page = renderPage(node, megaCache[cat], {
        position: nextPosition(cat, fn),
        images: { [node.name]: img },
        allNodes,
        knownNodes,
      });
      if (!DRY_RUN) {
        const dir = path.join(DOCS_REF, cat, fn);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, `${node.name}.md`), page);
        if (img && img.source === 'clone') {
          const target = path.join(STATIC_IMG, cat, `${node.name}.png`);
          fs.mkdirSync(path.dirname(target), { recursive: true });
          if (!fs.existsSync(target)) fs.copyFileSync(img.path, target);
        }
      }
      stats.generated++;
    }
  }
}

// final pass: sequential sidebar_position within each function folder
if (!DRY_RUN) {
  for (const cat of CATS) {
    const info = allNodes.get(cat);
    if (!info) continue;
    for (const fn of info.funcs.keys()) {
      const dir = path.join(DOCS_REF, cat, fn);
      if (!fs.existsSync(dir)) continue;
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort();
      files.forEach((f, i) => {
        const fp = path.join(dir, f);
        let body = fs.readFileSync(fp, 'utf8');
        body = body.replace(/^sidebar_position:\s*\d+$/m, `sidebar_position: ${i + 1}`);
        fs.writeFileSync(fp, body);
      });
    }
  }
}

// hide obsolete 'Migration in progress' overview placeholders (now replaced by generated indexes)
if (!DRY_RUN) {
  for (const cat of CATS) {
    const overviewPath = path.join(DOCS_REF, cat, 'overview.md');
    if (fs.existsSync(overviewPath)) {
      const target = path.join(DOCS_REF, cat, '_overview.legacy.md');
      if (!fs.existsSync(target)) {
        fs.renameSync(overviewPath, target);
        console.log(`Hidden obsolete overview: ${cat}/overview.md -> _overview.legacy.md`);
      }
    }
  }
}

console.log('=== Summary ===');
console.log(`Generated pages: ${stats.generated}`);
if (stats.skipped) console.log(`Skipped existing pages: ${stats.skipped}`);
console.log(`Retrofitted rich pages: ${stats.retrofitted}`);
console.log(`Images: ${stats.imagesStatic} static + ${stats.imagesCloned} cloned from Docsify, ${stats.imagesMissing.length} missing`);
if (stats.imagesMissing.length) console.log(`Missing images:\n  ${stats.imagesMissing.join('\n  ')}`);
if (DRY_RUN) console.log('\n(dry run — nothing written)');
