#!/usr/bin/env node
/**
 * Sets a clean one-line intro for every Level-3 (function group) generated-index
 * page, matching the copy used on the Level-2 cards. Updates the `description`
 * in each function folder's `_category_.json`.
 *
 * Usage: node tools/update-function-descriptions.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FUNCTION_CONFIG } from '../src/data/categoryConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(__dirname, '..');
const FAMILIES = [
  path.join(SITE, 'docs', 'reference', 'mograph'),
  path.join(SITE, 'docs', 'reference', 'core'),
];

let updated = 0;
for (const familyRoot of FAMILIES) {
  for (const dt of fs.readdirSync(familyRoot)) {
    const dtDir = path.join(familyRoot, dt);
    if (!fs.statSync(dtDir).isDirectory()) continue;
    for (const fn of fs.readdirSync(dtDir)) {
      const fnDir = path.join(dtDir, fn);
      if (!fs.statSync(fnDir).isDirectory()) continue;
      const catFile = path.join(fnDir, '_category_.json');
      if (!fs.existsSync(catFile)) continue;
      const json = JSON.parse(fs.readFileSync(catFile, 'utf8'));
      if (json.label && FUNCTION_CONFIG[json.label]) {
        json.link = json.link || {};
        json.link.description = FUNCTION_CONFIG[json.label].desc;
        fs.writeFileSync(catFile, JSON.stringify(json, null, 2) + '\n');
        updated++;
      }
    }
  }
}
console.log(`Updated ${updated} function-group descriptions`);
