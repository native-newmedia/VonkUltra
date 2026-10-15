/**
 * Customized DocCard (Level-3 generated-index pages).
 *
 * On function-group index pages (e.g. 3D → Flow) each node card used to show the
 * group's text glyph, faded via `.doc-group-icon`. They now show the same SVG
 * artwork as that group's Level-2 card (Core_Flow.svg for Flow), so the group reads
 * the same at both levels; the light tint of `.doc-group-icon` is kept so the node
 * cards stay visually subordinate to the group cards above them. The glyph/emoji
 * remain only as a fallback for non-group items or an undetermined family.
 *
 * Everything else is the stock Docusaurus behaviour.
 */
import React from 'react';
import {
  useDocById,
  findFirstSidebarItemLink,
  useCurrentSidebarCategory,
  useSidebarBreadcrumbs,
} from '@docusaurus/plugin-content-docs/client';
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Link from '@docusaurus/Link';
import Layout from '@theme/DocCard/Layout';
import { FUNCTION_CONFIG, familyFromHref, functionGroupArtwork } from '@site/src/data/categoryConfig';

// label -> config ({icon, color}) for every function group (Mograph + Core)
const FUNCTION_GROUP_ICONS = Object.fromEntries(
  Object.entries(FUNCTION_CONFIG).map(([label, cfg]) => [label, cfg.icon]),
);

function getFallbackEmojiIcon(item) {
  if (item.type === 'category') {
    return '🗃';
  }
  return isInternalUrl(item.href) ? '📄️' : '🔗';
}

function getIconTitleProps(item) {
  const extracted = extractLeadingEmoji(item.label);
  return {
    icon: extracted.emoji ?? getFallbackEmojiIcon(item),
    title: extracted.rest.trim(),
  };
}

function CardCategory({item}) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      {...getIconTitleProps(item)}
    />
  );
}

function CardLink({item}) {
  const doc = useDocById(item.docId ?? undefined);
  const currentCategory = useCurrentSidebarCategory();
  const breadcrumbs = useSidebarBreadcrumbs() || [];
  // The family is an ancestor of this group in the sidebar (Core → 3D → Flow),
  // because a group's own href is /docs/category/<slug> and carries no family.
  const family = breadcrumbs.map((crumb) => familyFromHref(crumb.href)).find(Boolean);
  const group = currentCategory ? FUNCTION_CONFIG[currentCategory.label] : null;
  const artwork = currentCategory
    ? functionGroupArtwork(family, currentCategory.label)
    : null;
  const description = item.description ?? doc?.description ?? '';
  return (
    // Same card structure as the Level-2 category cards (.cat-card) so the
    // node list on Level-3 pages looks identical to the overviews above it.
    <Link href={item.href} className="cat-card">
      <span
        className={`doc-group-icon ${
          group ? `doc-group-icon--${group.color}` : 'doc-group-icon--default'
        }`}>
        {artwork ? (
          <span
            className="cat-card-icon-glyph"
            style={{'--cat-card-icon': `url("${artwork}")`}}
          />
        ) : (
          group ? group.icon : getFallbackEmojiIcon(item)
        )}
      </span>
      <span className="cat-card-body">
        <span className="cat-card-title">{item.label}</span>
        {description && <span className="cat-card-desc">{description}</span>}
      </span>
    </Link>
  );
}

export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
