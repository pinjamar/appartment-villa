import React, { useEffect } from 'react';
import { siteConfig, content } from '../data/content';

type Props = {
  currentLanguage: 'hr' | 'en';
  pageSeo?: {
    title?: string;
    description?: string;
    image?: string;
    canonical?: string;
    jsonLd?: object;
  };
};

function upsertMeta(
  name: string,
  content: string,
  attr: 'name' | 'property' = 'name',
) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function SEO({ currentLanguage, pageSeo }: Props) {
  useEffect(() => {
    const title =
      pageSeo?.title ||
      `${siteConfig.siteName[currentLanguage]} - ${siteConfig.tagline[currentLanguage]}`;
    const description =
      pageSeo?.description || siteConfig.tagline[currentLanguage];
    const image = pageSeo?.image || siteConfig.seo.defaultImage;
    const siteUrl = siteConfig.seo.siteUrl.replace(/\/$/, '');
    const canonical =
      pageSeo?.canonical || `${siteUrl}${window.location.pathname}`;

    document.title = title;

    upsertMeta('description', description);
    upsertMeta('og:title', title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:image', image, 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('twitter:card', 'summary_large_image', 'name');
    upsertMeta('twitter:site', siteConfig.seo.twitterHandle, 'name');
    upsertMeta('twitter:title', title, 'name');
    upsertMeta('twitter:description', description, 'name');
    upsertMeta('twitter:image', image, 'name');

    // canonical
    let linkCanonical = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;

    // hreflang alternates for supported languages (hr -> /hr/, en -> root)
    const langs: Array<'hr' | 'en'> = ['hr', 'en'];
    langs.forEach((lang) => {
      const href = lang === 'hr' ? `${siteUrl}/hr/` : `${siteUrl}/`;
      const selector = `link[rel="alternate"][hreflang="${lang}"]`;
      let link = document.head.querySelector(
        selector,
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        document.head.appendChild(link);
      }
      link.href = href;
    });

    // x-default alternate
    let xdef = document.head.querySelector(
      'link[rel="alternate"][hreflang="x-default"]',
    ) as HTMLLinkElement | null;
    if (!xdef) {
      xdef = document.createElement('link');
      xdef.rel = 'alternate';
      xdef.hreflang = 'x-default';
      document.head.appendChild(xdef);
    }
    xdef.href = `${siteUrl}/`;

    // og:locale
    upsertMeta(
      'og:locale',
      currentLanguage === 'hr' ? 'hr_HR' : 'en_US',
      'property',
    );

    // JSON-LD
    const ldId = 'seo-json-ld';
    let ld = document.head.querySelector(
      `#${ldId}`,
    ) as HTMLScriptElement | null;
    const reviews = content.reviews[currentLanguage]?.items || [];
    const ratingSum = reviews.reduce((s, r) => s + (r.rating || 0), 0);
    const ratingAvg = reviews.length
      ? +(ratingSum / reviews.length).toFixed(1)
      : undefined;

    const jsonLd = pageSeo?.jsonLd || {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: siteConfig.siteName[currentLanguage],
      description,
      image: [image],
      url: siteUrl,
      telephone: siteConfig.contact.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressLocality: 'Korčula',
        addressCountry: 'HR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.contact.coordinates.lat,
        longitude: siteConfig.contact.coordinates.lng,
      },
      ...(ratingAvg
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: ratingAvg,
              reviewCount: reviews.length,
            },
          }
        : {}),
    };

    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(jsonLd);

    return () => {
      // keep head clean: do not remove elements because other pages might rely on them
    };
  }, [currentLanguage, pageSeo]);

  return null;
}
