// Import the remaining Mograph text sources into content/mograph/<Op>.yml:
//   - _fuse-clean-pilot/<fn>/<tool>_summary.md  (tagline, overview, parameter text)
//   - Docsify mega-pages mograph-<family>.md    (lead text kept as legacy_text, connection examples)
// Existing records (from 01-rich-json) keep their curated text; only gaps are filled.
// Usage: node migrate/02-mograph-text.mjs [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { mographTools, FAMILIES, normKey } from '../lib/ops.mjs';
import { parseFuse, shouldSkipParam } from '../lib/extract.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'content/mograph');
const SUMMARY_DIR = path.join(ROOT, 'legacy/fuse-clean-pilot');
const DOCSIFY = process.env.DOCSIFY_DOCS || '/Users/dunlewis/Documents/Fusion/VonkUltra/VonkUltra/docs';
const DRY = process.argv.includes('--dry-run');
fs.mkdirSync(OUT, { recursive: true });

// ---- summaries
function readSummary(toolName) {
  for (const d of fs.readdirSync(SUMMARY_DIR)) {
    const f = path.join(SUMMARY_DIR, d, `${toolName}_summary.md`);
    if (!fs.existsSync(f)) continue;
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    const paras = []; let cur = [];
    const rows = new Map();
    const put = (n, v) => { if (!rows.has(normKey(n))) rows.set(normKey(n), v); };
    for (const line of lines.slice(1)) {
      if (line.startsWith('|')) {
        if (line.startsWith('|---') || line.startsWith('| Parameter')) continue;
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
        continue;
      }
      if (/^Connections:/i.test(line.trim())) continue;
      if (!line.trim()) { if (cur.length) paras.push(cur.join(' ')); cur = []; } else cur.push(line.trim());
    }
    if (cur.length) paras.push(cur.join(' '));
    return { tagline: paras[0] || null, overview: paras[1] || null, rows };
  }
  return null;
}

// ---- Docsify mega pages (same parser as generate-mograph-pages.mjs)
function parseMega(family) {
  const file = path.join(DOCSIFY, `mograph-${family.toLowerCase()}.md`);
  if (!fs.existsSync(file)) return {};
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const nodes = {}; let cur = null, desc = [], ex = [], inEx = false;
  const flushEx = () => { if (cur && ex.some((l) => l.trim())) (nodes[cur].connections ||= []).push(ex.join('\n')); ex = []; inEx = false; };
  const close = () => { if (cur) nodes[cur].desc = desc.join(' ').replace(/\s+/g, ' ').trim(); desc = []; flushEx(); };
  for (const line of lines) {
    const hm = line.match(/^####\s+(v\w+)/);
    if (hm) { close(); cur = hm[1]; nodes[cur] ||= { desc: '', connections: [] }; continue; }
    if (/^###\s/.test(line)) { close(); cur = null; continue; }
    if (!cur) continue;
    const t = line.trim();
    if (inEx) { if (/^\s{4}/.test(line) || line === '' || /^v\w+.*->/.test(t)) ex.push(line); else { flushEx(); if (t) desc.push(t); } continue; }
    if (/Example Node Connections/i.test(t)) { inEx = true; continue; }
    if (/^!\[/.test(t)) continue;
    if (/^v\w+.*->/.test(t)) { inEx = true; ex.push(line); continue; }
    if (t) desc.push(t);
  }
  close();
  return nodes;
}
const mega = Object.fromEntries(['Array', 'ScriptVal', 'JSON', 'Matrix', 'Number', 'HTML'].map((f) => [f, parseMega(f)]));

// ---- group tools by operation
const ops = new Map();
for (const t of mographTools()) { if (!ops.has(t.op)) ops.set(t.op, []); ops.get(t.op).push(t); }
const stats = { created: 0, filled: 0, noSummary: 0 };

for (const [op, tools] of [...ops].sort()) {
  const file = path.join(OUT, `${op}.yml`);
  const rec = fs.existsSync(file) ? yaml.load(fs.readFileSync(file, 'utf8')) : {
    operation: op,
    tools: Object.fromEntries(tools.map((t) => [t.family, t.name])),
    legacy_names: [],
    curated: { tagline: null, overview: null, description: [], features: [], connections: [], difficulty: null, related: [], params: {} },
    status: { source: 'summary', state: 'imported', reviewed_hash: null },
  };
  const isNew = !fs.existsSync(file);
  const order = [...tools].sort((a, b) => (FAMILIES.indexOf(a.family) - FAMILIES.indexOf(b.family)));
  for (const t of order) {
    const sum = readSummary(t.name);
    if (!sum) { stats.noSummary++; }
    else {
      rec.curated.tagline ||= sum.tagline;
      rec.curated.overview ||= sum.overview;
      for (const p of parseFuse(t.file, '', '').params) {
        if (!p.id || p.dynamic || shouldSkipParam(p)) continue;
        if (rec.curated.params[p.id]) continue;
        const d = sum.rows.get(normKey(p.label)) || sum.rows.get(normKey(p.id));
        if (d) rec.curated.params[p.id] = d;
      }
    }
    const m = mega[t.family]?.[t.name];
    if (m) {
      if (m.desc && !rec.legacy_text) rec.legacy_text = m.desc;
      if (m.connections?.length && !rec.curated.connections.length) {
        rec.curated.connections = m.connections.map((b, i) => ({ label: `Example ${i + 1}`, lines: b.split('\n').map((l) => l.trim()).filter(Boolean) }));
        rec.status.connections_source = 'docsify';
      }
    }
  }
  if (isNew) stats.created++; else stats.filled++;
  if (!DRY) fs.writeFileSync(file, yaml.dump(rec, { lineWidth: 100, noRefs: true }));
}
console.log(JSON.stringify({ operations: ops.size, ...stats }));
