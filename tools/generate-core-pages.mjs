#!/usr/bin/env node
/**
 * Batch generator for the Core node reference pages.
 *
 * Sources:
 *   - Fuses (authoritative param data): Reactor Deploy top-level Core data-type
 *     folders under "Vonk Ultra" (excludes Mograph/, XML/, VonkUltra-Core/)
 *   - Docsify mega-pages (core-*.md): descriptions + connection examples
 *   - Images: local static batch first, Docsify clone as fallback
 *
 * Output:
 *   - One MDX page per node -> docs/reference/core/<DataType>/<Function>/v<Node>.md
 *   - Data-type _category_.json files get positions (existing files updated)
 *   - Function-folder _category_.json files (only if missing)
 *   - Obsolete "migration in progress" overview.md placeholders get hidden
 *
 * Notes:
 *   - core-scriptval.md lists node names at H3 (no function-group layer) — the
 *     mega-page parser handles both H3 and H4 node headings.
 *   - core-comps.md is intentionally never read (no 'Comps' data type).
 *
 * Usage:
 *   node tools/generate-core-pages.mjs
 *   node tools/generate-core-pages.mjs --dry-run
 *   node tools/generate-core-pages.mjs --cats Text,Point
 *   node tools/generate-core-pages.mjs --limit 10
 *   node tools/generate-core-pages.mjs --force
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const DOCS_REF = path.join(SITE_ROOT, 'docs', 'reference', 'core');
const STATIC_IMG = path.join(SITE_ROOT, 'static', 'img', 'reference', 'core');

const VU_ROOT = '/Users/dunlewis/Reactor/Deploy/Fuses/Kartaverse/Vonk Ultra';
const DOCSIFY_DOCS = '/Users/dunlewis/Documents/Fusion/VonkUltra/VonkUltra/docs';
const CLONE_IMG = path.join(DOCSIFY_DOCS, 'Images', 'Nodes');

// Order mirrors the IA plan §2 Core list; display labels (folders are lowercase).
const CORE_CATEGORY_ORDER = ['3D', 'Array', 'Base64', 'CBOR', 'Color', 'FileSystem', 'Gradient', 'Guide', 'Image', 'JSON', 'Matrix', 'Meta', 'MTLX', 'Number', 'Point', 'ScriptVal', 'Shape', 'Text', 'USD', 'Vector', 'YAML'];
const EXCLUDE_DIRS = new Set(['Mograph', 'XML', 'VonkUltra-Core']);

// ---------------------------------------------------------------- CLI args
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const FORCE = args.includes('--force');
const catsArg = argValue('--cats');
const CATS = catsArg ? catsArg.split(',').map((s) => s.trim()) : CORE_CATEGORY_ORDER;
const LIMIT = Number(argValue('--limit') || 0);

function argValue(name) {
  const i = args.indexOf(name);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : undefined;
}

// ---------------------------------------------------------------- Lua-ish parsing helpers
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
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) return s.slice(1, -1);
  return s;
}

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
  const re = /MBTNC_AddButton\s*=\s*("[^"]*"|'[^']*')/g;
  let m;
  while ((m = re.exec(raw)) !== null) buttons.push(unquote(m[1]));
  return buttons;
}

// ---------------------------------------------------------------- Fuse parser
function parseFuse(filePath, dataType, functionName) {
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
  return { name, category: dataType, function: functionName, file: filePath, regsDesc: regsDesc.trim(), params };
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
  const dt = tbl.LINKID_DataType;
  if (dt === 'Number') return tbl.INP_Integer === 'true' ? 'Integer' : 'Float';
  const control = tbl.INPID_InputControl;
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
  if (p.INPID_InputControl === 'LabelControl') return true;
  if (/^UISeparator/i.test(p.id) || /^UISeparator/i.test(p.label)) return true;
  if (p.INP_Passive === 'true' && p.IC_NoLabel === 'true' && p.label === '') return true;
  return false;
}

// ---------------------------------------------------------------- Mega-page parser
// Handles both `#### vNode` (standard) and `### vNode` (core-scriptval outlier) node headings.
function parseMegaPage(dataType) {
  const file = path.join(DOCSIFY_DOCS, `core-${dataType.toLowerCase()}.md`);
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
    const m4 = line.match(/^####\s+(v\w+)/);
    const m3 = line.match(/^###\s+(v\w+)/);
    if (m4) { closeNode(); cur = m4[1]; nodes[cur] = nodes[cur] || { desc: '', connections: [] }; continue; }
    // H3 node heading (core-scriptval style) — only when it names a v-prefixed node
    if (m3 && !/^###\s+(Animate|Create|Modify|Logic|Utility|Shapes?|Render|IO|Flow)/.test(line)) {
      closeNode(); cur = m3[1]; nodes[cur] = nodes[cur] || { desc: '', connections: [] }; continue;
    }
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
    const catDir = path.join(VU_ROOT, cat);
    if (!fs.existsSync(catDir)) { console.warn(`  ! data-type dir missing: ${catDir}`); continue; }
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
function imageFor(name, dataType) {
  const dir = dataType.toLowerCase();
  const candidates = [name, name.replace(/_/g, '-')];
  for (const cand of candidates) {
    const staticPath = path.join(STATIC_IMG, dir, `${cand}.png`);
    if (fs.existsSync(staticPath)) return { path: staticPath, url: `/VonkUltra/img/reference/core/${dir}/${cand}.png`, source: 'static' };
  }
  for (const cand of candidates) {
    const clonePath = path.join(CLONE_IMG, `${cand}.png`);
    if (fs.existsSync(clonePath)) return { path: clonePath, url: `/VonkUltra/img/reference/core/${dir}/${cand}.png`, source: 'clone' };
  }
  return null;
}

// ---------------------------------------------------------------- Emit helpers
const escPipe = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

/** Make prose safe for MDX: bare `<` is parsed as JSX, and `{ }` as expressions. */
function mdxSafe(s) {
  return String(s ?? '')
    .replace(/</g, '&lt;')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}');
}

function relativeLink(fromDir, toPath) {
  const rel = path.relative(fromDir, toPath);
  let out = rel.split(path.sep).join('/');
  if (!out.startsWith('.') && !out.startsWith('/')) out = './' + out;
  return out;
}

function dirFor(dataType) {
  return dataType.toLowerCase();
}

/** Ensure a data-type category exists and carries the correct position + generated-index link. */
function ensureDataTypeCategory(dataType) {
  const dir = path.join(DOCS_REF, dirFor(dataType));
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, '_category_.json');
  let existing = {};
  if (fs.existsSync(file)) {
    try { existing = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { /* ignore */ }
  }
  const position = CORE_CATEGORY_ORDER.indexOf(dataType) + 1;
  existing.label = existing.label || dataType;
  existing.position = position;
  existing.link = existing.link || { type: 'generated-index', description: `${dataType} nodes.` };
  fs.writeFileSync(file, JSON.stringify(existing, null, 2) + '\n');
}

function ensureFunctionCategory(dataType, functionName) {
  const dir = path.join(DOCS_REF, dirFor(dataType), functionName);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, '_category_.json');
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify({
      label: functionName,
      position: 1,
      link: { type: 'generated-index', description: `${dataType} / ${functionName} nodes.` },
    }, null, 2) + '\n');
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
    const siblings = (allNodes.get(node.category)?.get(node.function) || [])
      .map((f) => f.name)
      .filter((n) => n !== node.name)
      .slice(0, 4);
    for (const s of siblings) refs.add(s);
  }
  return [...refs].slice(0, 6).map((r) => {
    const target = knownNodes.get(r);
    const href = relativeLink(path.join(dirFor(node.category), node.function), path.join(dirFor(target.category), target.function, r));
    return { name: r, href };
  });
}

function renderPage(node, mega, opts) {
  const { category, function: fn, name } = node;
  const megaRec = mega[name] || {};
  const lead = mdxSafe(megaRec.desc || node.regsDesc || `The ${name} node in the Vonk Ultra Core ${category} toolkit.`);

  const badges = [`Core / ${category}`, category];
  const badgeHtml = badges.map((b) => `  <span className="node-badge">${b}</span>`).join('\n');

  const img = opts.images[name];
  const screenshot = img
    ? `<div className="node-screenshot">\n  <img src="${img.url}" alt="${name} node" />\n</div>\n`
    : `{/* No screenshot available for ${name} yet. */}\n`;

  const visibleParams = node.params.filter((p) => !shouldSkipParam(p));
  const tableHead = `| Parameter | Type | Default | Description |\n|---|---|---|---|\n`;
  const row = (p) => {
    const type = paramType(p);
    return `| ${escPipe(mdxSafe(p.label || p.id))} | ${type} | \`${formatDefault(p, type)}\` | ${escPipe(mdxSafe(p.desc || '—'))} |`;
  };
  let paramsSection = '';
  if (visibleParams.length) {
    const first = visibleParams.slice(0, 5);
    const rest = visibleParams.slice(5);
    paramsSection += `## Parameters\n\n${tableHead}${first.map(row).join('\n')}\n`;
    if (rest.length) paramsSection += `\n<details>\n<summary>+${rest.length} more parameters</summary>\n\n${tableHead}${rest.map(row).join('\n')}\n\n</details>\n`;
  }

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

  return `---
sidebar_position: ${opts.position}
title: ${name}
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ${name}

${lead}

<div className="node-badge-row">
${badgeHtml}
</div>

${screenshot}
${paramsSection}
${connectionsSection}
${relatedSection}
{/*
Generated page — node: ${name} (Core/${category}/${fn}).
Source: fuse ${path.basename(node.file)} + Docsify mega-page. Param descriptions pending the content pass (content-plan.md §6).
*/}
`;
}

// ---------------------------------------------------------------- Run
const fuses = collectFuses();
console.log(`Parsed ${fuses.length} fuses (data types: ${[...new Set(fuses.map((f) => f.category))].join(', ')})\n`);

const allNodes = new Map();
for (const f of fuses) {
  if (!allNodes.has(f.category)) allNodes.set(f.category, new Map());
  if (!allNodes.get(f.category).has(f.function)) allNodes.get(f.category).set(f.function, []);
  allNodes.get(f.category).get(f.function).push(f);
}
const knownNodes = new Map();
for (const f of fuses) knownNodes.set(f.name, f);

const megaCache = {};
for (const cat of CATS) megaCache[cat] = parseMegaPage(cat);

const stats = { generated: 0, skipped: 0, imagesStatic: 0, imagesCloned: 0, imagesMissing: [] };
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
  const funcs = [...allNodes.get(cat).keys()].sort(); // alphabetical within data type
  if (!DRY_RUN) ensureDataTypeCategory(cat);
  for (const fn of funcs) {
    if (!DRY_RUN) ensureFunctionCategory(cat, fn);
    for (const node of allNodes.get(cat).get(fn)) {
      if (LIMIT && stats.generated >= LIMIT) break outer;
      const targetFile = path.join(DOCS_REF, dirFor(cat), fn, `${node.name}.md`);
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
        const dir = path.join(DOCS_REF, dirFor(cat), fn);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, `${node.name}.md`), page);
        if (img && img.source === 'clone') {
          const target = path.join(STATIC_IMG, dirFor(cat), `${node.name}.png`);
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
    for (const fn of info.keys()) {
      const dir = path.join(DOCS_REF, dirFor(cat), fn);
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

// hide obsolete 'Migration in progress' overview placeholders
if (!DRY_RUN) {
  for (const cat of CATS) {
    const overviewPath = path.join(DOCS_REF, dirFor(cat), 'overview.md');
    if (fs.existsSync(overviewPath)) {
      const target = path.join(DOCS_REF, dirFor(cat), '_overview.legacy.md');
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
console.log(`Images: ${stats.imagesStatic} static + ${stats.imagesCloned} cloned from Docsify, ${stats.imagesMissing.length} missing`);
if (stats.imagesMissing.length) console.log(`Missing images:\n  ${stats.imagesMissing.join('\n  ')}`);
if (DRY_RUN) console.log('\n(dry run — nothing written)');
