import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

/**
 * Swizzled @theme/Logo.
 *
 * Identical to the upstream component, except the brand wordmark is split into
 * two tones: the first word ("Kartaverse") takes the brand gold, the rest
 * ("Vonk Ultra") keeps the default text colour. The split is done on the first
 * space of `themeConfig.navbar.title`, so the wording stays config-driven —
 * change the title and the colouring follows.
 *
 * Upstream source: @docusaurus/theme-classic/lib/theme/Logo/index.js
 */

function LogoThemedImage({logo, alt, imageClassName}) {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };
  const themedImage = (
    <ThemedImage
      className={logo.className}
      sources={sources}
      height={logo.height}
      width={logo.width}
      alt={alt}
      style={logo.style}
    />
  );
  return imageClassName ? (
    <div className={imageClassName}>{themedImage}</div>
  ) : (
    themedImage
  );
}

function BrandTitle({title, className}) {
  const [first, ...rest] = title.split(' ');
  const remainder = rest.join(' ');
  return (
    <b className={className}>
      <span className="brand-gold">{first}</span>
      {remainder ? ` ${remainder}` : ''}
    </b>
  );
}

export default function Logo(props) {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();
  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo?.href || '/');
  // If a visible title is shown, the logo is decorative, so fall back to an
  // empty alt rather than repeating the site name.
  const fallbackAlt = navbarTitle ? '' : title;
  const alt = logo?.alt ?? fallbackAlt;
  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && {target: logo.target})}>
      {logo && (
        <LogoThemedImage
          logo={logo}
          alt={alt}
          imageClassName={imageClassName}
        />
      )}
      {navbarTitle != null && (
        <BrandTitle title={navbarTitle} className={titleClassName} />
      )}
    </Link>
  );
}
