// Render all pages from content/ records. Default: write to _render/ for diffing; --apply writes into docs/.
// Usage: node render-pages.mjs [--apply] [--only Name1,Name2]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { mographTools } from './lib/ops.mjs';
import { renderPage } from './lib/render.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(ROOT, '..');
const DOCS = path.join(SITE, 'docs/reference');
const APPLY = process.argv.includes('--apply');
const onlyArg = process.argv.indexOf('--only');
const ONLY = onlyArg > 0 ? new Set(process.argv[onlyArg + 1].split(',')) : null;
const OUT = APPLY ? DOCS : path.join(ROOT, '_render');

// where each page lives today (so output paths, sidebar positions and links stay stable)
const pages = new Map();
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/^v.*\.md$/.test(e.name)) {
      const pos = (fs.readFileSync(p, 'utf8').match(/^sidebar_position:\s*(\d+)/m) || [])[1];
      pages.set(e.name.replace(/\.md$/, ''), { file: p, rel: path.relative(DOCS, p), position: pos ? Number(pos) : 1 });
    }
  }
})(DOCS);

const hrefFrom = (fromRel) => (name) => {
  const t = pages.get(name); if (!t) return null;
  const href = path.relative(path.dirname(fromRel), t.rel).replace(/\.md$/, '').split(path.sep).join('/');
  return href.startsWith('.') ? href : `./${href}`;
};
const load = (f) => yaml.load(fs.readFileSync(f, 'utf8'));
let n = 0, skipped = 0;
const write = (rel, text) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, text); n++; };
const imageUrl = (kind, sub, name) => fs.existsSync(path.join(SITE, 'static/img/reference', kind, sub, `${name}.png`)) ? `/VonkUltra/img/reference/${kind}/${sub}/${name}.png` : null;

// Mograph
const mdir = path.join(ROOT, 'content/mograph');
const records = new Map(fs.readdirSync(mdir).map((f) => [f.replace(/\.yml$/, ''), load(path.join(mdir, f))]));
for (const t of mographTools()) {
  if (ONLY && !ONLY.has(t.name)) continue;
  const pg = pages.get(t.name);
  const rec = records.get(t.op);
  if (!pg || !rec) { skipped++; continue; }
  write(pg.rel, renderPage({ name: t.name, kind: 'mograph', family: t.family, fuseFile: t.file, record: rec, position: pg.position,
    imageUrl: imageUrl('mograph', t.family.toLowerCase(), t.name), relatedHref: hrefFrom(pg.rel) }));
}
// Core
const cdir = path.join(ROOT, 'content/core');
const { VU_ROOT, walkFuses } = await import('./lib/ops.mjs');
const coreFuse = new Map();
for (const e of fs.readdirSync(VU_ROOT, { withFileTypes: true })) {
  if (!e.isDirectory() || /^(Mograph|VonkUltra-Core|_.*|\..*)$/.test(e.name)) continue;
  for (const f of walkFuses(path.join(VU_ROOT, e.name))) coreFuse.set((fs.readFileSync(f, 'utf8').match(/FUSE_NAME\s*=\s*"([^"]+)"/) || [])[1] || path.basename(f, '.fuse'), f);
}
for (const f of fs.readdirSync(cdir)) {
  const rec = load(path.join(cdir, f)); const name = rec.tool;
  if (ONLY && !ONLY.has(name)) continue;
  const pg = pages.get(name); const fz = coreFuse.get(name);
  if (!pg || !fz) { skipped++; continue; }
  write(pg.rel, renderPage({ name, kind: 'core', datatype: rec.datatype, fuseFile: fz, record: rec, position: pg.position,
    imageUrl: imageUrl('core', rec.datatype.toLowerCase(), name), relatedHref: hrefFrom(pg.rel) }));
}
console.log(`${APPLY ? 'applied' : 'rendered'} ${n} pages to ${OUT}, skipped ${skipped}`);
