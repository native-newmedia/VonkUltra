#!/usr/bin/env node
/**
 * Wires up the 3-level overview for Core:
 *   - docs/reference/core/index.md            (L1, family -> data types)
 *   - docs/reference/core/<type>/index.md     (L2, data type -> function groups)
 *   - rewires each data type's _category_.json to link to its index doc
 *
 * Usage: node tools/setup-core-overview.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(__dirname, '..');
const CORE_DOCS = path.join(SITE, 'docs', 'reference', 'core');

// folder name -> display label (matches docs/reference/core/*)
const TYPES = {
  '3d': '3D', 'array': 'Array', 'base64': 'Base64', 'cbor': 'CBOR', 'color': 'Color',
  'filesystem': 'FileSystem', 'gradient': 'Gradient', 'guide': 'Guide', 'image': 'Image',
  'json': 'JSON', 'matrix': 'Matrix', 'meta': 'Meta', 'mtlx': 'MTLX', 'number': 'Number',
  'point': 'Point', 'scriptval': 'ScriptVal', 'shape': 'Shape', 'text': 'Text',
  'usd': 'USD', 'vector': 'Vector', 'xml': 'XML', 'yaml': 'YAML',
};

function indexDoc(label, intro) {
  return `---
sidebar_position: 1
title: ${label}
---

import CategoryCards from '@site/src/components/CategoryCards';

# ${label}

${intro}

<CategoryCards ${label === 'Core' ? 'variant="types" ' : ''}/>
`;
}

function linkTo(catId) {
  return JSON.stringify({ label: 'X', position: 1, link: { type: 'doc', id: catId } }, null, 2);
}

// L1 — Core family index
fs.writeFileSync(path.join(CORE_DOCS, 'index.md'), indexDoc('Core', 'Core node reference, grouped by data type.'));

let rewired = 0;
for (const [dir, label] of Object.entries(TYPES)) {
  const typeDir = path.join(CORE_DOCS, dir);
  if (!fs.existsSync(typeDir)) continue;
  // L2 — data-type index
  fs.writeFileSync(path.join(typeDir, 'index.md'), indexDoc(label, `${label} nodes, grouped by function.`));
  // rewire _category_.json link
  const catFile = path.join(typeDir, '_category_.json');
  if (fs.existsSync(catFile)) {
    const json = JSON.parse(fs.readFileSync(catFile, 'utf8'));
    json.link = { type: 'doc', id: `reference/core/${dir}/index` };
    fs.writeFileSync(catFile, JSON.stringify(json, null, 2) + '\n');
    rewired++;
  }
}

// Core root _category_.json -> L1 index doc
const coreCat = path.join(CORE_DOCS, '_category_.json');
if (fs.existsSync(coreCat)) {
  const json = JSON.parse(fs.readFileSync(coreCat, 'utf8'));
  json.link = { type: 'doc', id: 'reference/core/index' };
  fs.writeFileSync(coreCat, JSON.stringify(json, null, 2) + '\n');
}

console.log(`Created Core L1 index + ${Object.keys(TYPES).length} L2 indexes, rewired ${rewired} data-type categories.`);
