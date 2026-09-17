// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// ── Preview builds (VONK_PREVIEW=1) ──────────────────────────────────────────
// A preview is the SAME build as production, with two reviewer-only differences:
// a dated dismissible announcement bar, and a `noindex, nofollow` meta tag so a
// half-finished site can't get into search results. See both below.
//
//   VONK_PREVIEW=1 npm run build -- --out-dir preview/VonkUltra
//
// ⚠️ url/baseUrl are deliberately NOT flipped for previews. The obvious move is
// `baseUrl: '/'` so a root-hosted reviewer host (Netlify Drop, Vercel) works — but
// 992 built pages hardcode `/VonkUltra/img/...` (every node screenshot and the 27
// data-type SVG icons), because those paths are literal strings in the docs and
// JSX, not derived from baseUrl. So a root-hosted build renders with EVERY image
// 404ing, while a build served under /VonkUltra/ renders correctly wherever it is
// hosted. Hence the `--out-dir preview/VonkUltra` above: drop the `preview/`
// folder and share the resulting .../VonkUltra/ URL. That also makes the preview
// exercise the exact same base path as the real deployment.
//
// ⚠️ Declared OUT here on purpose. `config` below is an object literal, so the
// same `const` inside it is a syntax error: "ParseError: Unexpected keyword
// 'const'" — which Docusaurus reports only as "could not load module at path …".
const preview = process.env.VONK_PREVIEW === '1';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kartaverse Vonk Ultra',
  tagline: 'A new era of no-code creativity inside Blackmagic Fusion.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: false,
  },

  // Mermaid theme for rendering node graph diagrams in docs
  themes: [
    '@docusaurus/theme-mermaid',
    // Site-wide full-text search, self-contained (no external account, no
    // approval wait) — restores the search the Docsify site had.
    // See migration-plan.md §2 and §5 step 8.
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },

  // Google Fonts: IBM Plex Sans for headings + body, IBM Plex Mono for code,
  // tables, counts and labels. The two faces share the same design DNA, which
  // is what makes prose-to-code transitions feel seamless.
  //
  // Do NOT reintroduce a `wdth` axis here. Google Fonts rejects most
  // `wdth,wght@...` forms with HTTP 400, and a rejected URL fails completely
  // silently: no console error, no build failure, just a fallback font.
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap',
      type: 'text/css',
    },
  ],

  // Set the production url of your site here.
  // ⚠️ This must match where the site is ACTUALLY served — canonical URLs, the
  // sitemap and the og:image are all built from it.
  // ⚠️ The repo is named `VonkUltra`, NOT something like `VonkUltra-docs`, and that is
  // load-bearing: a GitHub Pages PROJECT site is served at /<repo>/, and both the
  // baseUrl below and the hardcoded /VonkUltra/img/... paths in 992 built pages must
  // agree with that path. A differently-named repo silently 404s every image. Keeping
  // the name also means a later transfer into the kartaverse org preserves the URL.
  // TODO: flip to https://kartaverse.github.io (+ custom domain) at launch
  // (migration-plan.md §6).
  url: 'https://native-newmedia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // ⚠️ Do NOT set this to '/' to "fix" a root-hosted preview. 992 built pages
  // hardcode /VonkUltra/img/..., so that renders with every image 404ing. Serve
  // previews under this same subpath instead (see the preview note above).
  baseUrl: '/VonkUltra/',

  // GitHub pages deployment config. Must match the repo the Action deploys from;
  // flips to 'kartaverse' when the repo is transferred at launch.
  organizationName: 'native-newmedia', // GitHub org/user name.
  projectName: 'VonkUltra', // Repo name.

  // Flipped from 'warn' to 'throw' as the launch-gate QA check
  // (remaining-work.md §D): a broken internal link now FAILS the build instead of
  // printing a warning nobody reads. Verified clean first — a full build of all
  // 995 pages produced 0 broken-link warnings, so this costs nothing today and
  // catches regressions from here on. If it ever blocks a legitimate build, the
  // message names the source page and the target.
  onBrokenLinks: 'throw',

  // Preview-only: keep the throwaway reviewer host out of search engines. An
  // indexed half-built site competes with the real docs once it launches, and
  // static/robots.txt is only advisory — this meta tag is what actually drops
  // the pages. Production builds are deliberately NOT noindexed.
  // (Docusaurus 3 has no `themeConfig.metadata`; `headTags` is the real key.)
  headTags: preview
    ? [
        {
          tagName: 'meta',
          attributes: {name: 'robots', content: 'noindex, nofollow'},
        },
      ]
    : [],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // `editUrl` is deliberately UNSET. These docs live in
          // VonkUltra_Documentation, which is not a git repo, so pointing it at
          // github.com/kartaverse/VonkUltra/tree/main/ put an "Edit this page"
          // link on all 995 pages that resolves into the wrong tree — or 404s.
          // That is a bad look during a review, where the reviewer may well try
          // it. Restore it when the repo-strategy decision lands
          // (migration-plan.md §6) and the content is actually committed there.
        },
        // No blog section in the current IA plan (content-plan.md) —
        // disabled rather than left with unused sample posts.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card for link previews (og:image) — the same asset the Docsify
      // site used: 1440x1120. NOTE: larger than the 1200x630 most platforms
      // crop to; fine as-is, but a 1.91:1 re-cut would be sharper.
      image: 'img/vonkultra-social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      // Preview-only, dismissible, DATED. It states the known gaps ON the site,
      // so they read as roadmap rather than defects and the reviewer doesn't have
      // to be told by email. Absent from production builds.
      // The id carries the date on purpose: Docusaurus remembers a dismissed bar
      // per id, so a later build with a new id re-shows the (updated) message
      // instead of staying hidden.
      // Note for review: `respectPrefersColorScheme: true` above means the
      // REVIEWER'S OS setting picks the initial theme, so both light and dark
      // have to hold up — not just the dark mode most of this work was done in.
      ...(preview
        ? {
            announcementBar: {
              id: 'preview-2026-09-17',
              content:
                'Preview build · 17 Sep 2026 — the structure is complete; parameter descriptions and Related Nodes are still being written.',
              backgroundColor: '#ffcb6b',
              textColor: '#131820',
              isCloseable: true,
            },
          }
        : {}),
      mermaid: {
        theme: {
          light: 'default',
          dark: 'dark',
        },
        options: {
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'linear',
            padding: 8,
            nodeSpacing: 40,
            rankSpacing: 50,
          },
        },
      },
      navbar: {
        title: 'Kartaverse Vonk Ultra',
        logo: {
          alt: 'Kartaverse Vonk Ultra logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'right',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'right',
            label: 'Reference',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'right',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialsSidebar',
            position: 'right',
            label: 'Tutorials',
          },
          {
            href: 'https://github.com/kartaverse/VonkUltra',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // 4 items per column, deliberately. Infima lays the columns out as equal
        // flex shares (`col` → `flex: 1 0 0`), so the widths line up whatever we
        // put here — item COUNT is what decides whether the columns share a
        // bottom edge. Adding or removing a link in one column without matching
        // the others is what makes the footer look lopsided.
        links: [
          {
            title: 'Vonk Ultra',
            items: [
              {label: 'Getting Started', to: '/docs/getting-started/introduction'},
              {label: 'Reference', to: '/docs/reference'},
              {label: 'Install (Reactor)', to: '/docs/getting-started/install'},
              // Points at the tutorials section landing page (sidebar_position 1),
              // i.e. the same target the navbar's 'Tutorials' docSidebar item
              // resolves to. NOT /docs/guides/overview — that route exists but the
              // page is still a `:::note Placeholder` stub, so it is a dead end.
              {label: 'Tutorials', to: '/docs/tutorials/video-tutorials'},
            ],
          },
          {
            title: 'Connect',
            items: [
              {label: 'Email', href: 'mailto:andrew@andrewhazelden.com'},
              {label: 'GitHub', href: 'https://github.com/AndrewHazelden'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrewhazelden/'},
              {label: 'Medium Blog', href: 'https://medium.com/@andrewhazelden'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Instagram', href: 'https://www.instagram.com/vonkultra/'},
              {label: 'Facebook Group', href: 'https://www.facebook.com/groups/kartavr'},
              {label: 'Google Group', href: 'https://groups.google.com/g/kartaverse/'},
              {label: 'Reddit Group', href: 'https://www.reddit.com/r/Kartaverse/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kartaverse. Vonk Ultra is GPL-3.0 licensed. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['lua'],
      },
    }),
};

export default config;
