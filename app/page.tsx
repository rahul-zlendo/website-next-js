import { Metadata } from 'next';
import GlobalHomePage from './global/page';
import GlobalLayout from './global/layout';

// Prevent static prerendering — middleware rewrites / → /in at runtime,
// so this page component never actually executes in production.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'AI & 3D Home Design Software – Virtual Home Design Online',
  description: 'Zlendo Realty is AI home design software and 3D home design software in one: turn floor plans into 3D models, renders and virtual home design walkthroughs online.',
  alternates: {
    canonical: 'https://zlendorealty.com',
    languages: {
      'en-IN': 'https://zlendorealty.com/in',
      'en': 'https://zlendorealty.com',
      'x-default': 'https://zlendorealty.com',
    },
  },
};

export default async function RootPage(props: any) {
  // Call the async page component directly as a function to bypass JSX async restrictions
  // or Next.js page-import boundary issues.
  const page = await GlobalHomePage();

  // Wrap with the GlobalLayout so that Header, Footer, and Floating interfaces are rendered.
  // We await this as well to maintain clean Server Component extraction.
  const layout = await GlobalLayout({ children: page });

  return layout;
}
