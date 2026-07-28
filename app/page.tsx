import { redirect } from 'next/navigation';
import { Metadata } from 'next';

// Prevent static prerendering — middleware rewrites / → /in at runtime,
// so this page component never actually executes in production.
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
// serve the GLOBAL homepage — matching `/`'s canonical (en / x-default) and the
// new no-geo-redirect model. In practice middleware's rewrite() runs first, so
// this rarely executes. (Was redirect('/in') under the old India-default model.)
export default function RootPage() {
  redirect('/global');
}
