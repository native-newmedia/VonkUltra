/**
 * Customized DocCard (Level-3 generated-index pages).
 *
 * On function-group index pages (e.g. Array → Animate), each node card used to
 * show the default 📄️ emoji. Now, when the current sidebar category is a known
 * function group, doc cards show that group's icon from the Level-2 overview
 * (◐ Animate, + Create, …) rendered smaller and 50% faded via `.doc-group-icon`.
 *
 * Everything else is the stock Docusaurus behaviour.
 */
import React from 'react';
import {
  useDocById,
  findFirstSidebarItemLink,
  useCurrentSidebarCategory,
} from '@docusaurus/plugin-content-docs/client';
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Link from '@docusaurus/Link';
import Layout from '@theme/DocCard/Layout';
import { FUNCTION_CONFIG } from '@site/src/data/categoryConfig';

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
  const group = currentCategory ? FUNCTION_CONFIG[currentCategory.label] : null;
  const description = item.description ?? doc?.description ?? '';
  return (
    // Same card structure as the Level-2 category cards (.cat-card) so the
    // node list on Level-3 pages looks identical to the overviews above it.
    <Link href={item.href} className="cat-card">
      <span
        className={`doc-group-icon ${
          group ? `doc-group-icon--${group.color}` : 'doc-group-icon--default'
        }`}>
        {group ? group.icon : getFallbackEmojiIcon(item)}
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
