// Operation model: one Mograph operation exists once per family (Array, ScriptVal, JSON).
// Record key = tool name without the family prefix, e.g. vArrayBuffer -> "Buffer".
import fs from 'node:fs';
import path from 'node:path';
import { parseFuse, shouldSkipParam } from './extract.mjs';

export const VU_ROOT = process.env.VU_ROOT || '/Users/dunlewis/Reactor/Deploy/Fuses/Kartaverse/Vonk Ultra';
export const MOGRAPH = path.join(VU_ROOT, 'Mograph');
export const FAMILIES = ['Array', 'ScriptVal', 'JSON'];
export const OTHER_MOGRAPH = ['Matrix', 'Number', 'HTML'];

export function walkFuses(dir) {
  const out = [];
  (function w(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { if (!/^(node_modules|__deleteMe|_.*|tool-cards|node-diagrams|\.git)$/.test(e.name)) w(p); }
      else if (e.name.endsWith('.fuse')) out.push(p);
    }
  })(dir);
  return out;
}

/** All current Mograph tools: { name, family, category, file, op } */
export function mographTools() {
  const tools = [];
  for (const fam of [...FAMILIES, ...OTHER_MOGRAPH]) {
    const famDir = path.join(MOGRAPH, fam);
    if (!fs.existsSync(famDir)) continue;
    for (const f of walkFuses(famDir)) {
      const rel = path.relative(famDir, f).split(path.sep);
      const category = rel.length > 1 ? rel[0] : 'General';
      const name = (fs.readFileSync(f, 'utf8').match(/FUSE_NAME\s*=\s*"([^"]+)"/) || [])[1] || path.basename(f, '.fuse');
      const op = FAMILIES.includes(fam) ? name.replace(new RegExp(`^v${fam}`), '') : name.replace(/^v/, '');
      tools.push({ name, family: fam, category, file: f, op });
    }
  }
  return tools;
}

export const normKey = (s) => String(s ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');

/** Follow rename_manifest stems until the name exists today. */
export function resolveName(name, stems, current) {
  let n = name;
  for (let i = 0; i < 8 && !current.has(n) && stems[n]; i++) n = stems[n];
  return n;
}

/** Match legacy parameter entries (id/name) to current control IDs of a fuse. */
export function matchParams(legacyParams, fuseFile) {
  const cur = parseFuse(fuseFile, '', '').params.filter((p) => p.id && !p.dynamic && !shouldSkipParam(p));
  const byId = new Map(cur.map((p) => [normKey(p.id), p.id]));
  const byLabel = new Map(cur.map((p) => [normKey(p.label), p.id]));
  const matched = {}, orphans = [];
  for (const lp of legacyParams) {
    const id = byId.get(normKey(lp.id)) || byLabel.get(normKey(lp.name || lp.label));
    if (id && lp.description) matched[id] = lp.description; else if (!id) orphans.push(lp.name || lp.id);
  }
  return { matched, orphans, currentIds: cur.map((p) => p.id) };
}

import crypto from 'node:crypto';
import { stripLuaComments } from './extract.mjs';
/** Hash of the fuse source(s) behind a record (comments stripped, whitespace collapsed). */
export function fuseHash(files) {
  const h = crypto.createHash('sha1');
  for (const f of [...files].sort()) h.update(stripLuaComments(fs.readFileSync(f, 'utf8')).replace(/\s+/g, ' '));
  return h.digest('hex').slice(0, 12);
}

/** Input IDs/labels and output names of a fuse, for checking connection examples. */
export function sockets(file) {
  const text = stripLuaComments(fs.readFileSync(file, 'utf8'));
  const names = new Set();
  for (const p of parseFuse(file, '', '').params) { if (p.id) names.add(normKey(p.id)); if (p.label) names.add(normKey(p.label)); }
  for (const m of text.matchAll(/self:AddOutput\(\s*"([^"]*)"\s*,\s*"([^"]*)"/g)) { names.add(normKey(m[1])); names.add(normKey(m[2])); }
  return names;
}
