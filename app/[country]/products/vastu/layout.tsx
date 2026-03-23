import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vastu-Compliant House Plans',
  description: 'Create vastu-optimized house plans blending tradition and modern design. Perfect for harmonious, functional homes. Design your house now.',
  keywords: 'vastu house plan design, free vastu house plan layout, free vastu living room layout tips, vastu planner online, home energy flow, vastu compliant house design',
  openGraph: {
    title: 'Smart Vastu Optimized Home Planning',
    description: 'Scientifically mapped vastu principles integrated into modern layouts. Sign up now with Zlendo Realty.',
    url: 'https://zlendorealty.com/in/products/vastu',
    siteName: 'Zlendo Realty',
    images: [
      {
        url: 'https://zlendorealty.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty - Vastu Optimizer',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vastu Meets Modern Home Design',
    description: 'Create vastu-compliant layouts easily. Start free today.',
    images: ['https://zlendorealty.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://zlendorealty.com/in/products/vastu',
    languages: {
      'en-IN': 'https://zlendorealty.com/in/products/vastu',
      'x-default': 'https://zlendorealty.com/in/products/vastu',
    },
  },
};

export default function VastuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
