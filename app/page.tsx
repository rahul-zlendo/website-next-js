import { Metadata } from 'next';

// Root / is rewritten to /in by middleware (NextResponse.rewrite).
// This page should never actually render directly, but we export metadata
// as a safety net — if a crawler somehow lands here without middleware,
// the canonical and hreflang tags correctly point to /in.

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://zlendorealty.com/in',
    languages: {
      'en-IN': 'https://zlendorealty.com/in',
      'x-default': 'https://zlendorealty.com/in',
    },
  },
};

// Re-export the /in home page component.
// Since middleware rewrites / → /in, this acts as a fallback.
export { default } from './[country]/page';
