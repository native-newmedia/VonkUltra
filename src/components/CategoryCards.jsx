import React from 'react';
import Link from '@docusaurus/Link';
import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';
import {
  TYPE_CONFIG,
  FUNCTION_CONFIG,
  familyFromHref,
  functionGroupArtwork,
} from '@site/src/data/categoryConfig';

/**
 * Card grid for a category's overview page. Reads the current sidebar category
 * (so counts + links stay in sync with the docs automatically) and renders one
 * card per subcategory with an icon pill, name, item count and a one-line
 * description. Plain CSS classes live in src/css/custom.css.
 *
 * Usage:
 *   <CategoryCards variant="types" family="Core" />  // Level 1 (family -> data types)
 *   <CategoryCards />                                 // Level 2 (data type -> function groups)
 *
 * Every card now shows real SVG artwork, resolved by functionGroupArtwork in
 * src/data/categoryConfig.js — which substitutes Core's file for the Mograph groups
 * that have no file of their own. The artwork has its baked-in tile background
 * stripped out, so the colour comes from the CSS tile (.cat-card-icon--<color>) and
 * only the line art is masked in, painted in currentColor. A card falls back to its
 * text glyph only when the family can't be determined. `family` is only needed for
 * Level 1; otherwise it is inferred from the current sidebar category's href
 * (…/reference/<family>/<data type>/).
 */
export default function CategoryCards({ variant = 'functions', family }) {
  const category = useCurrentSidebarCategory();
  const items = (category && category.items) || [];
  const config = variant === 'types' ? TYPE_CONFIG : FUNCTION_CONFIG;
  const resolvedFamily = family || familyFromHref(category?.href);
  // Level-1 data types all have artwork named by convention, so the URL is built
  // directly; Level-2 groups go through functionGroupArtwork, which stands in Core's
  // file for the Mograph groups that have no file of their own.
  const svgFor =
    variant === 'types'
      ? (label) => `/VonkUltra/img/icons/${resolvedFamily}_${label.replace(/\s+/g, '')}.svg`
      : (label) => functionGroupArtwork(resolvedFamily, label);

  const cards = items
    .map((item) => {
      const cfg = config[item.label] || {};
      const count = item.items?.length ?? 1;
      const svg = resolvedFamily ? svgFor(item.label) : null;
      return { label: item.label, href: item.href, count, icon: cfg.icon || item.label, color: cfg.color || 'default', desc: cfg.desc || '', svg };
    })
    .filter((c) => c.href);

  if (!cards.length) return null;

  return (
    <div className="cat-cards">
      {cards.map((c) => (
        <Link key={c.label} className="cat-card" to={c.href}>
          <span className={`cat-card-icon cat-card-icon--${c.color}`}>
            {c.svg ? (
              <span
                className="cat-card-icon-glyph"
                style={{'--cat-card-icon': `url("${c.svg}")`}}
              />
            ) : (
              c.icon
            )}
          </span>
          <span className="cat-card-body">
            <span className="cat-card-title">
              {c.label}
              <span className="cat-card-count">
                {c.count} item{c.count === 1 ? '' : 's'}
              </span>
            </span>
            {c.desc && <span className="cat-card-desc">{c.desc}</span>}
          </span>
        </Link>
      ))}
    </div>
  );
}
