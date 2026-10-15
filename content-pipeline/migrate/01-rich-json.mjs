// Import the 20 legacy rich page JSONs into content/mograph/<Op>.yml.
// Usage: node migrate/01-rich-json.mjs [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { MOGRAPH, mographTools, resolveName, matchParams } from '../lib/ops.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const SRC = path.join(ROOT, 'legacy/_WebDocs/_output');
const OUT = path.join(ROOT, 'content/mograph');
const DRY = process.argv.includes('--dry-run');
const stems = JSON.parse(fs.readFileSync(path.join(MOGRAPH, '_Alignment/rename_manifest.json'), 'utf8')).stems;

// Manual: legacy tools whose names the rename manifest does not cover (matched by parameter set).
const MANUAL = { vArrayCreate: 'vArrayCreateRange', vArrayMerge: 'vArrayMergeTrim' };
const tools = mographTools();
const current = new Set(tools.map((t) => t.name));
const byName = new Map(tools.map((t) => [t.name, t]));
fs.mkdirSync(OUT, { recursive: true });
const report = [];

for (const f of fs.readdirSync(SRC).filter((n) => /^v.*_page\.json$/.test(n)).sort()) {
  const j = JSON.parse(fs.readFileSync(path.join(SRC, f), 'utf8'));
  const name = MANUAL[j.name] || resolveName(j.name, stems, current);
  const tool = byName.get(name);
  if (!tool) { report.push(`SKIP ${j.name}: no current tool`); continue; }
  const rel = (n) => resolveName(n, stems, current);
  const { matched, orphans, currentIds } = matchParams(j.parameters || [], tool.file);
  const missing = currentIds.filter((id) => !matched[id]);
  const rec = {
    operation: tool.op,
    tools: Object.fromEntries(['Array', 'ScriptVal', 'JSON'].map((fam) => [fam, `v${fam}${tool.op}`])),
    legacy_names: j.name === name ? [] : [j.name],
    curated: {
      tagline: j.tagline || null,
      overview: j.overview || null,
      description: j.description || [],
      features: j.features || [],
      connections: j.connections || [],
      difficulty: j.difficulty || null,
      related: (j.related || []).map((r) => ({ name: rel(r.name), desc: r.desc })),
      params: matched,
    },
    status: { source: 'rich-json', state: 'imported', reviewed_hash: null },
  };
  report.push(`${tool.op}: params matched ${Object.keys(matched).length}/${currentIds.length}` +
    (orphans.length ? `, legacy-only: ${orphans.join('; ')}` : '') + (missing.length ? `, no text: ${missing.join(', ')}` : ''));
  if (!DRY) fs.writeFileSync(path.join(OUT, `${tool.op}.yml`), yaml.dump(rec, { lineWidth: 100, noRefs: true }));
}
console.log(report.join('\n'));
