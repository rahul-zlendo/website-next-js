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
    default: 'Zlendo Realty | Free 3D Home Design & Floor Planning Software',
    template: '%s | Zlendo Realty',
  },
  description:
    'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
  keywords: [
    'civil plan software',
    'interior design software',
    '2d floor plan software',
    '3d interior design software',
    'architectural design software',
    'building plan design software',
    'professional civil design software',
    'real estate design software',
    'home design software',
    'construction planning software',
  ],
  authors: [{ name: 'Zlendo Realty' }],
  metadataBase: new URL('https://zlendorealty.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zlendorealty.com/in',
    title: 'Zlendo Realty | Free 3D Home Design & Floor Planning Software',
    description:
      'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
    siteName: 'Zlendo Realty',
    images: [
      {
        url: 'https://zlendorealty.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty | Free 3D Home Design & Floor Planning Software',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zlendo Realty | Free 3D Home Design & Floor Planning Software',
    description:
      'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
    images: ['https://zlendorealty.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
  manifest: '/site.webmanifest',
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
        {/* Fallback for older social scrapers */}
        <link rel="image_src" href="https://zlendorealty.com/og-image.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
