// Merge AI-pass drafts into records. Usage: node apply-curated.mjs _drafts/Helix.yml [...]
// A draft holds `operation` (Mograph) or `tool` (Core), `curated`, optional `note`.
// The curated block is replaced; legacy_text and other fields are kept. State becomes `ai`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PROMPT_VERSION = (fs.readFileSync(path.join(ROOT, 'PROMPT.md'), 'utf8').match(/^Version:\s*(\S+)/m) || [])[1] || 'unversioned';
for (const f of process.argv.slice(2)) {
  const d = yaml.load(fs.readFileSync(f, 'utf8'));
  const file = d.operation ? path.join(ROOT, 'content/mograph', `${d.operation}.yml`) : path.join(ROOT, 'content/core', `${d.tool}.yml`);
  const rec = yaml.load(fs.readFileSync(file, 'utf8'));
  rec.curated = { ...rec.curated, ...d.curated, params: { ...rec.curated.params, ...(d.curated.params || {}) } };
  rec.status = { ...rec.status, source: 'ai', state: 'ai', prompt_version: PROMPT_VERSION, reviewed_hash: null, ...(d.note ? { note: d.note } : {}) };
  fs.writeFileSync(file, yaml.dump(rec, { lineWidth: 100, noRefs: true }));
  console.log('applied', path.basename(f), '->', path.relative(ROOT, file));
}
