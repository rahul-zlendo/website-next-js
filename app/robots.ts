import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog', '/blog/', '/help-center', '/help-center/'],
        disallow: [
          '/api/',
          '/*?page=*',
          '/*&page=*',
          '/search',
          '/temp',
        ],
      },
    ],
    sitemap: 'https://zlendorealty.com/sitemap.xml',
  };
}

