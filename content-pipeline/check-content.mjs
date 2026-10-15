// Quality and staleness checks over content/ records. Usage: node check-content.mjs [--strict]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { mographTools, VU_ROOT, walkFuses, fuseHash, sockets, normKey } from './lib/ops.mjs';
import { paramRows } from './lib/render.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const STRICT = process.argv.includes('--strict');
const BANNED = /\b(seamless(ly)?|powerful|leverag(e|es|ing)|robust|effortless(ly)?|elevate|unlock(s|ing)?|dive into|crafted|game[- ]changer|swiss army knife|cutting[- ]edge|the foundation for|essential)\b/i;
const issues = []; const counts = { state: {}, noTagline: 0, paramsMissing: 0, records: 0 };
const seen = new Set();
const add = (rec, kind, msg) => { const k = rec + kind + msg; if (!seen.has(k)) { seen.add(k); issues.push({ rec, kind, msg }); } };

const tools = new Map(mographTools().map((t) => [t.name, t]));
const coreFuse = new Map();
for (const e of fs.readdirSync(VU_ROOT, { withFileTypes: true })) {
  if (!e.isDirectory() || /^(Mograph|VonkUltra-Core|_.*|\..*)$/.test(e.name)) continue;
  for (const f of walkFuses(path.join(VU_ROOT, e.name))) coreFuse.set((fs.readFileSync(f, 'utf8').match(/FUSE_NAME\s*=\s*"([^"]+)"/) || [])[1] || path.basename(f, '.fuse'), f);
}
const fuseOf = (name) => tools.get(name)?.file || coreFuse.get(name);

function check(rec, files, label) {
  counts.records++;
  const c = rec.curated; const st = rec.status || {};
  counts.state[st.state] = (counts.state[st.state] || 0) + 1;
  if (!c.tagline) { counts.noTagline++; add(label, 'tagline', 'missing'); }
  else if (c.tagline.length > 160) add(label, 'tagline', `${c.tagline.length} chars (max 160)`);
  if (c.features?.length && c.features.length !== 4) add(label, 'features', `${c.features.length} tiles (expected 4)`);
  if (st.state === 'reviewed') {
    if (!c.overview) add(label, 'overview', 'missing on reviewed record');
    if ((c.connections || []).length < 2) add(label, 'connections', 'fewer than 2 examples on reviewed record');
  }
  // parameter coverage, per fuse file
  for (const f of files) {
    const missing = paramRows(f, rec).filter((r) => !r.desc).map((r) => r.id);
    if (missing.length) { counts.paramsMissing += missing.length; add(label, 'params', `no text: ${missing.join(', ')}`); }
    const ids = new Set(paramRows(f, { curated: { params: {} } }).map((r) => r.id));
    const dead = Object.keys(c.params || {}).filter((id) => ![...ids].includes(id) && !files.some((g) => paramRows(g, { curated: { params: {} } }).some((r) => r.id === id)));
    if (dead.length) add(label, 'params', `text for removed controls: ${dead.join(', ')}`);
    // stale mention of a removed Show Input
    if (!ids.has('ShowInput') && Object.values(c.params || {}).concat(c.description || [], c.overview || '').some((t) => /show input/i.test(t))) add(label, 'stale', 'mentions Show Input, which this tool no longer has');
  }
  // connection examples: tool names and sockets must exist today
  for (const b of c.connections || []) for (const line of b.lines) for (const m of line.matchAll(/\b(v[A-Za-z0-9]+)\.([A-Za-z0-9_]+)/g)) {
    const names = new Set([m[1], ...['Array', 'ScriptVal', 'JSON'].map((f) => m[1].replace(/^v(Array|ScriptVal|JSON)/, `v${f}`))]);
    const real = [...names].find((n) => fuseOf(n));
    if (!real) { add(label, 'connection', `unknown tool ${m[1]}`); continue; }
    if (!sockets(fuseOf(real)).has(normKey(m[2]))) add(label, 'connection', `${m[1]}.${m[2]}: no such socket`);
  }
  for (const r of c.related || []) if (!fuseOf(r.name) && !fuseOf(r.name.replace(/^v(Array|ScriptVal|JSON)/, 'vArray'))) add(label, 'related', `unknown tool ${r.name}`);
  // prose rules
  const prose = [c.tagline, c.overview, ...(c.description || []), ...Object.values(c.params || {}), ...(c.features || []).flatMap((f) => [f.title, f.desc])].filter(Boolean).join(' \n ');
  if (/—/.test(prose)) add(label, 'prose', `em dash x${(prose.match(/—/g) || []).length}`);
  const b = prose.match(BANNED); if (b) add(label, 'prose', `banned word: ${b[0]}`);
  // staleness
  if (st.reviewed_hash && st.reviewed_hash !== fuseHash(files)) add(label, 'stale', 'fuse changed since review');
}

for (const f of fs.readdirSync(path.join(ROOT, 'content/mograph'))) {
  const rec = yaml.load(fs.readFileSync(path.join(ROOT, 'content/mograph', f), 'utf8'));
  const files = Object.values(rec.tools).map((n) => fuseOf(n)).filter(Boolean);
  if (files.length !== Object.keys(rec.tools).length) add(rec.operation, 'tools', 'a listed tool has no fuse');
  check(rec, files, `mograph/${rec.operation}`);
}
for (const f of fs.readdirSync(path.join(ROOT, 'content/core'))) {
  const rec = yaml.load(fs.readFileSync(path.join(ROOT, 'content/core', f), 'utf8'));
  const fz = fuseOf(rec.tool);
  if (!fz) { add(rec.tool, 'tools', 'no fuse'); continue; }
  check(rec, [fz], `core/${rec.tool}`);
}

const byKind = {}; for (const i of issues) byKind[i.kind] = (byKind[i.kind] || 0) + 1;
fs.mkdirSync(path.join(ROOT, '_report'), { recursive: true });
fs.writeFileSync(path.join(ROOT, '_report/check.md'), `# Content check\n\n${JSON.stringify({ counts, byKind }, null, 1)}\n\n` + issues.map((i) => `- ${i.rec} [${i.kind}] ${i.msg}`).join('\n') + '\n');
console.log(JSON.stringify({ counts, byKind }));
if (STRICT && issues.length) process.exit(1);
