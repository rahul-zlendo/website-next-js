import type { Metadata } from 'next';
import { Outfit, Nunito } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import { Providers } from './providers';
import { generateOrganizationSchema, generateWebSiteSchema, generateSoftwareApplicationSchema, generateLocalBusinessSchema, getStructuredDataScript, generatePlansSchema } from '@/lib/utils/structuredData';

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
    template: '%s',
  },
  description:
    'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',

  authors: [{ name: 'Zlendo Realty' }],
  metadataBase: new URL('https://zlendorealty.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zlendorealty.com',
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
  // NOTE: deliberately NO `alternates` here.
  //
  // Next.js inherits metadata from parent segments, so a root-level
  // `alternates.canonical` is silently adopted by every page that doesn't
  // declare its own — which made `/viewalltemplates` canonicalise to the
  // homepage and told Google to fold it away. The homepage sets its own
  // canonical in app/page.tsx and app/global/page.tsx; every other route must
  // set its own via localeAlternates() / indiaOnlyAlternates() in
  // lib/seo/metadata.ts. Do not reintroduce a canonical at this level.
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

import { headers } from 'next/headers';
import { enableGTM } from '@/lib/config/env';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const pathname = headersList.get('x-pathname') || '';

  // Global if host is zlendorealty.com (without .in)
  const isGlobal = host.includes('zlendorealty.com') && !host.includes('.in');

  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();
  const softwareAppSchema = generateSoftwareApplicationSchema(isGlobal);
  const localBusinessSchema = generateLocalBusinessSchema();

  // Dynamically attach specific JSON-LD schemas based on pathname
  let plansSchema: any = null;
  if (pathname.includes('/plans')) {
    const isIndiaPlans = pathname.startsWith('/in');
    plansSchema = generatePlansSchema(isGlobal, isIndiaPlans ? 'in' : 'global');
  }

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getStructuredDataScript(localBusinessSchema) }}
        />
        {plansSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(plansSchema) }}
          />
        )}
        <link rel="image_src" href="https://zlendorealty.com/og-image.jpg" />
        {enableGTM === 'prod' && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-9ZSCR4TS9W"
            ></script>
            <script
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() { dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config', 'G-9ZSCR4TS9W');
                `,
              }}
            />
            <script
              id="gtm-script"
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
            <script
              id="clarity-script"
              dangerouslySetInnerHTML={{
                __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "xggelem96e");
              `,
              }}
            />
          </>
        )}
      </head>
      <body>
        {enableGTM === 'prod' && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PBBNR2XS"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
