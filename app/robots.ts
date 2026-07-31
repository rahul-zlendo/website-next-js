import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
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
