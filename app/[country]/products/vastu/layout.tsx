import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vastu-Compliant House Plans | Zlendo Realty – Design Now',
  description: 'Create vastu-optimized house plans blending tradition and modern design. Perfect for harmonious, functional homes. Design your house now.',
  keywords: 'vastu house plan design, free vastu house plan layout, free vastu living room layout tips, vastu planner online, home energy flow, vastu compliant house design',
  openGraph: {
    title: 'Smart Vastu Optimized Home Planning',
    description: 'Scientifically mapped vastu principles integrated into modern layouts. Sign up now with Zlendo Realty.',
    url: 'https://app.zlendorealty.com/in/products/vastu',
    siteName: 'Zlendo Realty',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty - Vastu Optimizer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vastu Meets Modern Home Design',
    description: 'Create vastu-compliant layouts easily. Start free today.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/in/products/vastu',
  },
};

export default function VastuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
