// Import the current Core pages (docs/reference/core) into content/core/<Tool>.yml.
// Core text is unverified legacy: the Docsify lead block is kept whole in legacy_text, the
// mechanical split (first sentence = tagline, rest = description) is Phase 1 of the Core plan,
// and the per-parameter text from the 18 Sep content pass is keyed by control ID.
// Usage: node migrate/03-core-pages.mjs [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { VU_ROOT, walkFuses, normKey } from '../lib/ops.mjs';
import { parseFuse, shouldSkipParam } from '../lib/extract.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.resolve(ROOT, '..');
const PAGES = path.join(SITE, 'docs/reference/core');
const OUT = path.join(ROOT, 'content/core');
const DRY = process.argv.includes('--dry-run');
fs.mkdirSync(OUT, { recursive: true });

// Core fuses: every top-level folder under Vonk Ultra except Mograph and VonkUltra-Core
const fuses = new Map();
for (const e of fs.readdirSync(VU_ROOT, { withFileTypes: true })) {
  if (!e.isDirectory() || /^(Mograph|VonkUltra-Core|_.*|\..*)$/.test(e.name)) continue;
  for (const f of walkFuses(path.join(VU_ROOT, e.name))) {
    const name = (fs.readFileSync(f, 'utf8').match(/FUSE_NAME\s*=\s*"([^"]+)"/) || [])[1] || path.basename(f, '.fuse');
    const rel = path.relative(path.join(VU_ROOT, e.name), f).split(path.sep);
    fuses.set(name, { file: f, datatype: e.name, function: rel.length > 1 ? rel[0] : 'General' });
  }
}

const unesc = (s) => s.replace(/\\\|/g, '|').replace(/&lt;/g, '<').replace(/&#123;/g, '{').replace(/&#125;/g, '}');

function splitLead(lead) {
  const text = lead.replace(/\s+/g, ' ').trim();
  if (!text) return { tagline: null, rest: '' };
  const m = text.match(/^.{1,200}?[.!?](?=\s|$)/);
  if (m) return { tagline: m[0].trim(), rest: text.slice(m[0].length).trim() };
  if (text.length <= 160) return { tagline: text, rest: '' };
  const cut = text.slice(0, 160); const sp = cut.lastIndexOf(' ');
  const t = (sp > 40 ? cut.slice(0, sp) : cut).trim();
  return { tagline: t, rest: text.slice(t.length).trim() };
}

function walkPages(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkPages(p));
    else if (/^v.*\.md$/.test(e.name)) out.push(p);
  }
  return out;
}

const stats = { pages: 0, noFuse: [], paramsMatched: 0, paramsOrphan: 0 };
for (const page of walkPages(PAGES).sort()) {
  const src = fs.readFileSync(page, 'utf8');
  const tool = path.basename(page, '.md');
  const fz = fuses.get(tool);
  stats.pages++;
  if (!fz) { stats.noFuse.push(tool); continue; }

  const afterTitle = src.split(new RegExp(`^# ${tool}\\s*$`, 'm'))[1] || '';
  const lead = (afterTitle.split('<div className="node-badge-row">')[0] || '').trim();
  const { tagline, rest } = splitLead(lead);

  // parameter rows (main table and the "more parameters" details table)
  const rows = [];
  for (const line of src.split('\n')) {
    if (!line.startsWith('|') || line.startsWith('|---') || line.startsWith('| Parameter')) continue;
    const c = line.replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map((x) => x.trim());
    if (c.length >= 4) rows.push({ label: c[0].replace(/\\\|/g, '|'), desc: unesc(c.slice(3).join('|')) });
  }
  const fuseParams = parseFuse(fz.file, '', '').params.filter((p) => p.id && !p.dynamic && !shouldSkipParam(p));
  const pool = new Map();
  for (const p of fuseParams) { const k = normKey(p.label); if (!pool.has(k)) pool.set(k, []); pool.get(k).push(p.id); }
  const params = {}; const orphans = [];
  for (const r of rows) {
    const ids = pool.get(normKey(r.label));
    const id = ids?.shift();
    if (id && r.desc && r.desc !== '—') { params[id] = r.desc; stats.paramsMatched++; } else if (!id) { orphans.push(r.label); stats.paramsOrphan++; }
  }

  const connections = [];
  for (const m of src.matchAll(/<TabItem value="[^"]*" label="([^"]*)"[^>]*>\s*```\n([\s\S]*?)```/g)) {
    connections.push({ label: m[1], lines: m[2].split('\n').map((l) => l.trim()).filter(Boolean) });
  }
  const related = [...src.matchAll(/<a className="node-chip" href="[^"]*">([^<]+)<\/a>/g)].map((m) => ({ name: m[1] }));

  const rec = {
    tool,
    datatype: fz.datatype,
    function: fz.function,
    legacy_names: [],
    curated: {
      tagline,
      overview: null,
      description: rest ? [rest] : [],
      features: [],
      connections,
      difficulty: null,
      related,
      params,
    },
    legacy_text: lead || null,
    status: {
      source: 'docsify',
      state: 'imported-unverified',
      lead_words: lead ? lead.split(/\s+/).length : 0,
      params_source: 'content-pass-2026-09-18',
      reviewed_hash: null,
      ...(orphans.length ? { page_only_params: orphans } : {}),
    },
  };
  if (!DRY) fs.writeFileSync(path.join(OUT, `${tool}.yml`), yaml.dump(rec, { lineWidth: 100, noRefs: true }));
}
console.log(JSON.stringify({ ...stats, noFuse: stats.noFuse.length ? stats.noFuse : 0 }));
