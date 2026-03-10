import type { Metadata } from 'next';
import { Outfit, Nunito } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import { Providers } from './providers';
import { generateOrganizationSchema, generateWebSiteSchema, generateSoftwareApplicationSchema } from '@/lib/utils/structuredData';

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
    'property design software',
    'home design software',
    'construction planning software',
  ],
  authors: [{ name: 'Zlendo Realty' }],
  metadataBase: new URL('https://zlendorealty.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zlendorealty.com/in',
    title: 'Zlendo Realty | AI Home & Office Design Software',
    description:
      'AI-powered 3D home design and floor planning software for architects, builders, interior designers, and vastu consultants.',
    siteName: 'Zlendo Realty',
    images: [
      {
        url: 'https://zlendorealty.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty — AI Home & Office Design Software',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zlendo Realty | AI Home & Office Design Software',
    description:
      'AI-powered 3D home design and floor planning software. Start free today.',
    images: ['https://zlendorealty.com/og-image.jpg'],
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
  verification: {
    google: 'G9MCKLpx7ABNxlkbXgWMQNuI8wOMktCrT89TVv78C-c',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();
  const softwareAppSchema = generateSoftwareApplicationSchema();

  return (
    <html lang="en" className={`${outfit.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        {/* Fallback for older social scrapers */}
        <link rel="image_src" href="https://zlendorealty.com/og-image.jpg" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBBNR2XS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PBBNR2XS');
            `,
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
