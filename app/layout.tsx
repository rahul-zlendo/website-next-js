import type { Metadata } from 'next';
import { Outfit, Nunito } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { generateOrganizationSchema } from '@/lib/utils/structuredData';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Zlendo Realty | Free 3D Home Design & Planning Tool',
    template: '%s | Zlendo Realty',
  },
  description:
    'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
  keywords: [
    '3D home design',
    'floor planning software',
    'interior design',
    'home remodeling',
    'virtual walkthrough',
    'cost estimator',
    'vastu',
    'room styler',
  ],
  authors: [{ name: 'Zlendo Realty' }],
  metadataBase: new URL('https://zlendorealty.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zlendorealty.com',
    title: 'Zlendo Realty | Free 3D Home Design & Planning Tool',
    description:
      'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
    siteName: 'Zlendo Realty',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zlendo Realty | Free 3D Home Design & Planning Tool',
    description:
      'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${outfit.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
