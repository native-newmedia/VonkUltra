#!/usr/bin/env node
/**
 * Installs the Core screenshot "cards" from static/img/reference/vonk-core/
 * into the per-data-type image folders (static/img/reference/core/<DataType>/).
 *
 * The node pages already reference /VonkUltra/img/reference/core/<DataType>/<name>.png,
 * so once a card is copied there it is served automatically — no page regeneration.
 *
 * Also reports: cards with no matching node page, and Core nodes still without a card.
 *
 * Usage: node tools/install-core-cards.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const CORE_DOCS = path.join(SITE_ROOT, 'docs', 'reference', 'core');
const CARDS = path.join(SITE_ROOT, 'static', 'img', 'reference', 'vonk-core');
const CORE_IMG = path.join(SITE_ROOT, 'static', 'img', 'reference', 'core');

// node name -> data-type folder (from the existing node pages)
const nodeType = new Map();
for (const dt of fs.readdirSync(CORE_DOCS)) {
  const dtDir = path.join(CORE_DOCS, dt);
  if (!fs.statSync(dtDir).isDirectory()) continue;
  for (const fn of fs.readdirSync(dtDir)) {
    const fnDir = path.join(dtDir, fn);
    if (!fs.statSync(fnDir).isDirectory()) continue;
    for (const f of fs.readdirSync(fnDir)) {
      if (f.endsWith('.md') && !f.startsWith('_')) nodeType.set(f.replace(/\.md$/, ''), dt);
    }
  }
}

let copied = 0;
let overwritten = 0;
const orphans = [];
const cardNames = new Set();

for (const f of fs.readdirSync(CARDS)) {
  if (!f.endsWith('.png')) continue;
  const name = f.replace(/\.png$/, '');
  cardNames.add(name);
  const dt = nodeType.get(name);
  if (!dt) { orphans.push(name); continue; }
  const targetDir = path.join(CORE_IMG, dt);
  fs.mkdirSync(targetDir, { recursive: true });
  const target = path.join(targetDir, f);
  if (fs.existsSync(target)) overwritten++;
  fs.copyFileSync(path.join(CARDS, f), target);
  copied++;
}

const missingCards = [];
for (const [name, dt] of nodeType) {
  if (!cardNames.has(name)) missingCards.push(`${dt}/${name}`);
}

console.log(`Copied ${copied} cards into static/img/reference/core/ (${overwritten} overwrote an existing image).`);
if (orphans.length) console.log(`Cards with no matching node page (skipped): ${orphans.join(', ')}`);
if (missingCards.length) console.log(`Core nodes WITHOUT a card:\n  ${missingCards.join('\n  ')}`);
