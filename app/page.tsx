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
      'x-default': 'https://zlendorealty.com/in',
    },
  },
};

// Safety-net fallback: if middleware rewrite somehow doesn't intercept,
// redirect to /in (primary market). In practice, middleware's rewrite() runs first,
// so this component rarely renders.
export default function RootPage() {
  redirect('/in');
}
