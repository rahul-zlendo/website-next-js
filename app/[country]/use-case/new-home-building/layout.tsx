import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Home Plans & Modern House Elevation | Zlendo Realty',
  description:
    'Design your dream home with custom home plans and modern house elevation designs. See your new build in 3D before a single brick is laid.',
  keywords: [
    'custom home plans',
    'modern house plans',
    'villa house plan design',
    'small house plan design',
    'eco friendly home plans',
    'turnkey design solutions',
    'new home building',
    '3d home visualization',
    'home construction planning',
  ],
  openGraph: {
    title: 'Custom Home Plans & Modern House Elevation | Zlendo Realty',
    description:
      'Build your dream from the ground up. Visualize every detail of your new home construction to ensure a perfect build with Zlendo Realty.',
    url: 'https://zlendorealty.com/in/use-case/new-home-building',
    siteName: 'Zlendo Realty',
    images: [
      {
        url: 'https://zlendorealty.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty - New Home Building',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Home Plans & Modern House Elevation | Zlendo Realty',
    description: 'Design your dream home with custom home plans and see your new build in 3D before construction begins.',
  },
  alternates: {
    canonical: 'https://zlendorealty.com/in/use-case/new-home-building',
    languages: {
      'en-IN': 'https://zlendorealty.com/in/use-case/new-home-building',
      'x-default': 'https://zlendorealty.com/in/use-case/new-home-building',
    },
  },
};

export default function NewHomeBuildingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
