import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/temp',
        ],
      },
    ],
    sitemap: [
      'https://zlendorealty.com/sitemap.xml',           // Main site (dynamic, auto-updated)
      'https://zlendorealty.com/blog/sitemap.xml',      // WordPress blog sitemap
    ],
  };
}
