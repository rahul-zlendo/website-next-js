import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/*?page=*',
          '/*&page=*',
          '/search',
          '/temp',
        ],
      },
    ],
    sitemap: 'https://app.zlendorealty.com/sitemap.xml',
  };
}
