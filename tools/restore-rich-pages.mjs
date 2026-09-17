#!/usr/bin/env node
/**
 * Restores the 20 rich Array node pages (the fuses.ts set) from the vMograph
 * `_output/<node>_page.json` exports, writing them into their function
 * subfolders under docs/reference/mograph/Array/<Function>/.
 *
 * These pages carry curated content (long descriptions, parameter descriptions,
 * connection examples, related nodes, difficulty) that the thin generated pages
 * don't have. Run this AFTER generate-mograph-pages.mjs so the rich pages win.
 *
 * Usage: node tools/restore-rich-pages.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const DOCS_REF = path.join(SITE_ROOT, 'docs', 'reference', 'mograph');
const OUTPUT_DIR = '/Users/dunlewis/Documents/Fusion/vMographDev/develop/__InDocumentation/_WebDocs/_output';
const STATIC_BASE = '/VonkUltra/img/reference/mograph';

// location map: node name -> relative dir (e.g. Array/Modify)
const locMap = new Map();
for (const cat of fs.readdirSync(DOCS_REF)) {
  const catDir = path.join(DOCS_REF, cat);
  if (!fs.statSync(catDir).isDirectory()) continue;
  for (const fn of fs.readdirSync(catDir)) {
    const fnDir = path.join(catDir, fn);
    if (!fs.statSync(fnDir).isDirectory()) continue;
    for (const f of fs.readdirSync(fnDir)) {
      if (f.endsWith('.md') && !f.startsWith('_')) locMap.set(f.replace(/\.md$/, ''), path.join(cat, fn));
    }
  }
}

const DIFF_CLASS = { beginner: 'beginner', intermediate: 'intermediate', advanced: 'advanced' };
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'example';
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

function render(json) {
  const name = json.name;
  const cat = 'Array';
  const fn = json.category || 'Modify';
  const imgUrl = `${STATIC_BASE}/${cat.toLowerCase()}/${name}.png`;

  const badges = [];
  const diff = String(json.difficulty || '').toLowerCase();
  if (DIFF_CLASS[diff]) badges.push(`  <span className="node-badge node-badge--${DIFF_CLASS[diff]}">${json.difficulty}</span>`);
  badges.push(
    `  <span className="node-badge">Mograph / ${cat}</span>`,
    `  <span className="node-badge">${cat}</span>`,
    `  <span className="node-badge">ScriptVal</span>`,
    `  <span className="node-badge">JSON</span>`,
  );
  const badgeHtml = badges.join('\n');

  const params = json.parameters || [];
  const head = `| Parameter | Type | Default | Description |\n|---|---|---|---|\n`;
  const row = (p) => `| ${esc(p.name || p.id)} | ${esc(p.type)} | \`${esc(p.default ?? '—')}\` | ${esc(p.description || '—')} |`;
  let paramsSection = '';
  if (params.length) {
    const first = params.slice(0, 5);
    const rest = params.slice(5);
    paramsSection = `## Parameters\n\n${head}${first.map(row).join('\n')}\n`;
    if (rest.length) paramsSection += `\n<details>\n<summary>+${rest.length} more parameters</summary>\n\n${head}${rest.map(row).join('\n')}\n\n</details>\n`;
  }

  const descPara = (json.description || []).join('\n\n');
  const descSection = descPara ? `\n<details>\n<summary>Read the full description</summary>\n\n${descPara}\n\n</details>\n` : '';

  const conns = json.connections || [];
  let connSection = '';
  if (conns.length) {
    const tabs = conns
      .map((c, i) => `<TabItem value="${slug(c.label || `Example ${i + 1}`)}" label="${c.label || `Example ${i + 1}`}"${i === 0 ? ' default' : ''}>\n\n\`\`\`\n${c.lines.join('\n')}\n\`\`\`\n\n</TabItem>`)
      .join('\n');
    connSection = `## Example Connections\n\n<Tabs>\n${tabs}\n</Tabs>\n`;
  }

  const relNames = (json.related || []).map((r) => (typeof r === 'string' ? r : r.name));
  let relSection = '';
  if (relNames.length) {
    const chips = relNames
      .map((r) => {
        const loc = locMap.get(r);
        if (!loc) return `  <a className="node-chip">${r}</a>`;
        const rel = path.relative(path.join(cat, fn), path.join(loc, r)).split(path.sep).join('/');
        const href = rel.startsWith('.') ? rel : `./${rel}`;
        return `  <a className="node-chip" href="${href}">${r}</a>`;
      })
      .join('\n');
    relSection = `## Related Nodes\n\n<div className="node-chip-row">\n${chips}\n</div>\n`;
  }

  return `---
sidebar_position: 0
title: ${name}
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ${name}

${json.tagline || json.overview || ''}

<div className="node-badge-row">
${badgeHtml}
</div>

<div className="node-screenshot">
  <img src="${imgUrl}" alt="${name} node" />
</div>

${json.overview || ''}

${paramsSection}${descSection}
${connSection}
${relSection}
{/*
Rich page restored from _output/${name}_page.json. Source of truth: fuses.ts / vonkultratools data model.
*/}
`;
}

const restored = [];
for (const f of fs.readdirSync(OUTPUT_DIR)) {
  const m = f.match(/^(vArray\w+)_page\.json$/);
  if (!m) continue;
  const json = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, f), 'utf8'));
  const fn = json.category || 'Modify';
  const dir = path.join(DOCS_REF, 'Array', fn);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${json.name}.md`), render(json));
  restored.push(json.name);
}

// sequential sidebar_position within each function folder (alphabetical)
const dirs = new Set(restored.map((n) => path.join(DOCS_REF, 'Array', (JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, `${n}_page.json`), 'utf8')).category || 'Modify'))));
for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_')).sort();
  files.forEach((f, i) => {
    const fp = path.join(dir, f);
    let body = fs.readFileSync(fp, 'utf8');
    body = body.replace(/^sidebar_position:\s*\d+$/m, `sidebar_position: ${i + 1}`);
    fs.writeFileSync(fp, body);
  });
}

console.log(`Restored ${restored.length} rich pages:\n  ${restored.join('\n  ')}`);
