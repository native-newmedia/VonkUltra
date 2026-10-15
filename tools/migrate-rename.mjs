#!/usr/bin/env node
// Moves Mograph doc pages and images from old fuse stems to new ones, rewrites references.
// Usage: node tools/migrate-rename.mjs [--apply] [--manifest PATH]   (dry run by default)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const apply = argv.includes('--apply');
const mi = argv.indexOf('--manifest');
const MANIFEST = mi >= 0 ? argv[mi + 1] : path.resolve(SITE, '../../Mograph/_Alignment/rename_manifest.json');

const stems = { ...JSON.parse(fs.readFileSync(MANIFEST, 'utf8')).stems };
// renames made after the manifest was written (filename -> FUSE_NAME)
for (const f of ['vArray', 'vScriptVal', 'vJSON']) {
  stems[f + 'Convert2D-3D'] = f + 'Convert2D_3D';
  stems[f + 'RenderTaperedPath'] = f + 'TaperedShape';
  stems[f + 'PathSubDivide'] = f + 'SubDividePath';
}
stems['vJSONShapeText'] = 'vJSONShapeTextArray';

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const rx = new RegExp('(?<![A-Za-z0-9_])(' + Object.keys(stems).sort((a, b) => b.length - a.length).map(esc).join('|') + ')(?![A-Za-z0-9_])', 'g');

const SKIP = new Set(['node_modules', '.docusaurus', 'build', 'preview', '.git']);
const TEXT = new Set(['.md', '.mdx', '.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.svg', '.html', '.yml']);
const walk = (d, out = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
};

const files = [...walk(path.join(SITE, 'docs')), ...walk(path.join(SITE, 'static')), ...walk(path.join(SITE, 'src')),
  ...['sidebars.js', 'docusaurus.config.js'].map(f => path.join(SITE, f)).filter(fs.existsSync)];

// file moves: basename (minus extension) is an old stem
const moves = [], clashes = [];
const taken = new Set(files);
for (const f of files) {
  const ext = path.extname(f), base = path.basename(f, ext);
  if (!(base in stems) || !/docs[\\/]reference[\\/]mograph|static[\\/]img[\\/]reference[\\/]mograph/.test(f)) continue;
  const dst = path.join(path.dirname(f), stems[base] + ext);
  if (taken.has(dst) && !(dst in Object.fromEntries(moves))) { clashes.push([f, dst]); continue; }
  moves.push([f, dst]); taken.add(dst);
}
const clashed = new Set(clashes.map(c => c[0]));
const ORPHANS = path.resolve(SITE, '..', '_rename_orphans');

// reference rewrites (done on the file's final content, before moving)
const rewrites = [];
for (const f of files) {
  if (!TEXT.has(path.extname(f).toLowerCase()) || clashed.has(f)) continue;
  const t = fs.readFileSync(f, 'utf8');
  const n = (t.match(rx) || []).length;
  if (n) rewrites.push([f, n, t]);
}

const rel = p => path.relative(SITE, p);
const pages = moves.filter(m => m[0].endsWith('.md')).length;
console.log(`${apply ? 'APPLY' : 'DRY RUN'}: ${moves.length} file moves (${pages} pages, ${moves.length - pages} images), ` +
  `${rewrites.length} files with references (${rewrites.reduce((a, r) => a + r[1], 0)} refs), ${clashes.length} clashes`);
const report = ['MOVES', ...moves.map(([a, b]) => `  ${rel(a)} -> ${path.basename(b)}`), '', 'CLASHES (target already exists; old file moved to ../_rename_orphans on apply)',
  ...clashes.map(([a, b]) => `  ${rel(a)} -> ${rel(b)}`), '', 'REWRITES', ...rewrites.map(r => `  ${rel(r[0])}: ${r[1]}`)];
const unmapped = [];
const docsPages = files.filter(f => /docs[\\/]reference[\\/]mograph/.test(f) && f.endsWith('.md') && /^v(Array|ScriptVal|JSON)/.test(path.basename(f)));
const newNames = new Set(Object.values(stems));
for (const f of docsPages) { const b = path.basename(f, '.md'); if (!(b in stems) && !newNames.has(b)) unmapped.push(rel(f)); }
report.push('', 'PAGES WITH NO MANIFEST ENTRY (unchanged names)', ...unmapped.map(u => '  ' + u));
fs.writeFileSync(path.join(SITE, 'tools', 'migrate-rename-report.txt'), report.join('\n') + '\n');
console.log(`report: tools/migrate-rename-report.txt (${unmapped.length} pages keep their name)`);

if (apply) {
  for (const [f, , t] of rewrites) fs.writeFileSync(f, t.replace(rx, m => stems[m]));
  for (const [a, b] of moves) fs.renameSync(a, b);
  for (const [a] of clashes) { const d = path.join(ORPHANS, rel(a)); fs.mkdirSync(path.dirname(d), { recursive: true }); fs.renameSync(a, d); }
  console.log('done');
}
