// Mark records as human-reviewed and store the fuse hash. Usage: node mark-reviewed.mjs mograph/Buffer core/v3DToFile ...
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { mographTools, VU_ROOT, walkFuses, fuseHash } from './lib/ops.mjs';
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const tools = new Map(mographTools().map((t) => [t.name, t.file]));
for (const e of fs.readdirSync(VU_ROOT, { withFileTypes: true })) {
  if (!e.isDirectory() || /^(Mograph|VonkUltra-Core|_.*|\..*)$/.test(e.name)) continue;
  for (const f of walkFuses(path.join(VU_ROOT, e.name))) tools.set((fs.readFileSync(f, 'utf8').match(/FUSE_NAME\s*=\s*"([^"]+)"/) || [])[1] || path.basename(f, '.fuse'), f);
}
for (const key of process.argv.slice(2)) {
  const file = path.join(ROOT, 'content', `${key}.yml`);
  const rec = yaml.load(fs.readFileSync(file, 'utf8'));
  const names = rec.tools ? Object.values(rec.tools) : [rec.tool];
  rec.status.state = 'reviewed';
  rec.status.reviewed_hash = fuseHash(names.map((n) => tools.get(n)));
  fs.writeFileSync(file, yaml.dump(rec, { lineWidth: 100, noRefs: true }));
  console.log('reviewed', key, rec.status.reviewed_hash);
}
