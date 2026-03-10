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
          '/register',
          '/user-profile',
          '/vastu-campaign',
        ],
      },
    ],
    sitemap: [
      'https://zlendorealty.com/sitemap.xml',
      'https://zlendorealty.com/blog/sitemap.xml',
    ],
    host: 'https://zlendorealty.com',
  };
}
