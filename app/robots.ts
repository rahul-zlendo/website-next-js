import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/register',
          '/vastu-campaign',
        ],
        disallow: [
          '/api/',
          '/user-profile',
        ],
      },
    ],
    sitemap: [
      'https://zlendorealty.com/sitemap.xml',
    ],
    // host: 'https://zlendorealty.com',
  };
}
