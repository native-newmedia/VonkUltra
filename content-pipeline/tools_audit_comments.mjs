// Lists fuses where the comment fix changes the extracted parameters.
// Usage: node tools_audit_comments.mjs "<Vonk Ultra root>"
import fs from 'node:fs';
import path from 'node:path';
import { parseFuse, shouldSkipParam } from './lib/extract.mjs';
const root = process.argv[2];
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (!/^(node_modules|__deleteMe|_Cleanup|\.git)$/.test(e.name)) walk(p); }
    else if (e.name.endsWith('.fuse')) files.push(p);
  }
})(root);
let changed = 0;
for (const f of files) {
  const live = (o) => parseFuse(f, '', '', o).params.filter((p) => !shouldSkipParam(p)).map((p) => p.id);
  const a = live({ strip: false }), b = live({});
  if (a.join() !== b.join()) { changed++; console.log(`${path.relative(root, f)}  old=${a.length} new=${b.length}  recovered: ${b.filter((x) => !a.includes(x)).join(', ')}`); }
}
console.log(`${files.length} fuses, ${changed} changed`);
