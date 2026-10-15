// Page renderer: record (content/*.yml) + current fuse -> Docusaurus MDX page.
import fs from 'node:fs';
import path from 'node:path';
import { parseFuse, shouldSkipParam, paramType, formatDefault } from './extract.mjs';

const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const mdx = (s) => String(s ?? '').replace(/</g, '&lt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'example';

export function shortDescription(raw, maxLen = 160) {
  const text = String(raw ?? '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  const sentence = text.match(/^.{1,200}?[.!?](?=\s|$)/);
  if (sentence && sentence[0].length <= maxLen + 40) return sentence[0].trim();
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const last = cut.lastIndexOf(' ');
  return `${(last > 40 ? cut.slice(0, last) : cut).trim()}…`;
}

/** Swap the family prefix in example text so one shared Array-written record serves all three families. */
export function forFamily(text, family) {
  if (!family || !['Array', 'ScriptVal', 'JSON'].includes(family)) return text;
  return text.replace(/\bv(Array|ScriptVal|JSON)(?=[A-Z])/g, `v${family}`);
}

/** Generic text for common input sockets (same table the old generator used). */
const SOCKET_DESC = {
  'Input': 'Data to process.', 'Data': 'Data to process.', 'Input A': 'First input.', 'Input B': 'Second input.',
  'Mask': 'Mask with one 0 or 1 value per element.', 'Mask A': 'First mask, one 0 or 1 value per element.',
  'Mask B': 'Second mask, one 0 or 1 value per element.', 'Points': 'Point positions.', 'Edges': 'Edges that connect the points.',
  'Mesh Points': 'Points of the mesh that the input is compared with.',
};
function socketDesc(p) {
  if (p.LINK_Main === undefined) return '';
  if (p.label === 'Input' && p.LINKID_DataType === 'Image') return 'Image that the result is drawn onto.';
  return SOCKET_DESC[p.label] || '';
}

export function paramRows(fuseFile, record) {
  const out = [];
  for (const p of parseFuse(fuseFile, '', '').params) {
    if (shouldSkipParam(p) || p.dynamic) continue;
    const type = paramType(p);
    out.push({
      id: p.id, label: p.label || p.id, type, def: formatDefault(p, type),
      desc: record.curated.params?.[p.id] || socketDesc(p),
    });
  }
  return out;
}

/**
 * ctx: { name, kind: 'mograph'|'core', family|datatype, fuseFile, record, position, imageUrl, relatedHref(name)->href|null }
 */
export function renderPage(ctx) {
  const { name, record, fuseFile } = ctx;
  const c = record.curated;
  const rows = paramRows(fuseFile, record);
  const fam = ctx.kind === 'mograph' ? ctx.family : null;
  const tagline = forFamily(c.tagline || '', fam);
  const head = `| Parameter | Type | Default | Description |\n|---|---|---|---|\n`;
  const row = (p) => `| ${esc(p.label)} | ${p.type} | \`${esc(p.def)}\` | ${esc(mdx(forFamily(p.desc, fam))) || '—'} |`;

  const badges = [];
  if (c.difficulty) badges.push(`  <span className="node-badge node-badge--${String(c.difficulty).toLowerCase()}">${c.difficulty}</span>`);
  if (ctx.kind === 'mograph') {
    badges.push(`  <span className="node-badge">Mograph / ${ctx.family}</span>`);
    const all = ['Array', 'ScriptVal', 'JSON'];
    for (const b of all.includes(ctx.family) ? [ctx.family, ...all.filter((x) => x !== ctx.family)] : [ctx.family]) badges.push(`  <span className="node-badge">${b}</span>`);
  } else {
    badges.push(`  <span className="node-badge">Core / ${ctx.datatype}</span>`, `  <span className="node-badge">${ctx.datatype}</span>`);
  }

  let params = '';
  if (rows.length) {
    params = `## Parameters\n\n${head}${rows.slice(0, 5).map(row).join('\n')}\n`;
    if (rows.length > 5) params += `\n<details>\n<summary>+${rows.length - 5} more parameters</summary>\n\n${head}${rows.slice(5).map(row).join('\n')}\n\n</details>\n`;
  }

  const full = (c.description || []).filter(Boolean);
  const fullBlock = full.length ? `<details>\n<summary>Read the full description</summary>\n\n${full.map((p) => mdx(forFamily(p, fam))).join('\n\n')}\n\n</details>\n` : '';

  let conn = '';
  if (c.connections?.length) {
    const tabs = c.connections.map((b, i) => `<TabItem value="${slug(b.label)}" label="${b.label}"${i === 0 ? ' default' : ''}>\n\n\`\`\`\n${forFamily(b.lines.join('\n'), fam)}\n\`\`\`\n\n</TabItem>`).join('\n');
    conn = `## Example Connections\n\n<Tabs>\n${tabs}\n</Tabs>\n`;
  }

  const chips = (c.related || [])
    .map((r) => (fam ? { ...r, name: forFamily(r.name, fam) } : r))
    .map((r) => ({ name: r.name, href: ctx.relatedHref?.(r.name) }))
    .filter((r) => r.href);
  const related = chips.length ? `## Related Nodes\n\n<div className="node-chip-row">\n${chips.map((r) => `  <a className="node-chip" href="${r.href}">${r.name}</a>`).join('\n')}\n</div>\n` : '';

  const shot = ctx.imageUrl ? `<div className="node-screenshot">\n  <img src="${ctx.imageUrl}" alt="${name} node" />\n</div>\n` : `{/* No screenshot available for ${name} yet. */}\n`;
  const front = `---\nsidebar_position: ${ctx.position ?? 1}\ntitle: ${name}\ndescription: ${JSON.stringify(shortDescription(tagline))}\n---\n`;
  const overview = c.overview ? `${mdx(forFamily(c.overview, fam))}\n\n` : '';
  const pending = rows.some((r) => !r.desc) ? ' Some parameter text is pending.' : '';
  return `${front}\nimport Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n# ${name}\n\n${mdx(tagline)}\n\n<div className="node-badge-row">\n${badges.join('\n')}\n</div>\n\n${shot}\n${overview}${params}\n${fullBlock}\n${conn}\n${related}\n{/*\nRendered from content-pipeline record (${record.status?.state || 'unknown'}).${pending}\n*/}\n`;
}
