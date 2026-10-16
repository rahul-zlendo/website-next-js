import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Determine environment (dev or prod)
  const env = process.env.NEXT_PUBLIC_ENV || 'prod';

  const isStaging = env === 'dev';

  if (isStaging) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: [],
      host: 'https://staging.zlendorealty.com',
    };
  }

  // Production rules
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/temp/',
          // Authenticated app surface — block across every locale prefix
          // (clean URLs rewrite to /global, India users see /in).
          '/user-profile',
          '/in/user-profile',
          '/global/user-profile',
        ],
      },
      {
        // AI answer engines (AEO): explicitly welcomed so Zlendo content can be
        // cited in ChatGPT, Claude, Perplexity, and Google AI Overviews. Same
        // private paths stay blocked. Revisit this policy as the space evolves.
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/api/', '/temp/', '/user-profile', '/in/user-profile', '/global/user-profile'],
      },
    ],
    sitemap: [
      'https://zlendorealty.com/sitemap.xml',
    ],
    host: 'https://zlendorealty.com',
  };
}
