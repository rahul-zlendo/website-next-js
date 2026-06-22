import { redirect } from 'next/navigation';
import { Metadata } from 'next';

// Prevent static prerendering — middleware rewrites / → /global at runtime
// (the global homepage is served at the bare domain for everyone; India
// visitors get a suggestion banner, not a redirect), so this page component
// never actually executes in production.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://zlendorealty.com',
    languages: {
      'en-IN': 'https://zlendorealty.com/in',
      'en': 'https://zlendorealty.com',
      'x-default': 'https://zlendorealty.com',
    },
  },
};

// Safety-net fallback: if the middleware rewrite somehow doesn't intercept,
// render the global homepage at the canonical bare-domain URL. In practice,
// middleware's rewrite() runs first, so this component rarely renders.
export default function RootPage() {
  redirect('/global');
}
