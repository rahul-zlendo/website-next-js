import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design and Build Services & Remote Home Planning',
  description:
    'Experience seamless design and build services from anywhere in the world. Zlendo Realty empowers NRI home planning with 3D property visualization and global collaboration.',
  keywords: [
    'design and build services',
    'nri home planning',
    'remote home planning',
    'architectural design company',
    'complete home design solutions',
    'virtual reality house walkthrough',
    'nri property design',
    'remote property planning',
    'global home design',
    'zlendo realty',
  ],
  openGraph: {
    title: 'Design and Build Services & Remote Home Planning',
    description:
      'Bridge the distance with transparent design. Manage international and remote projects with absolute clarity, ensuring your NRI clients feel present at every step.',
    url: 'https://zlendorealty.com/in/business/nri-remote-planning',
    siteName: 'Zlendo Realty',
    images: [
      {
        url: 'https://zlendorealty.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty - NRI Remote Home Planning',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI & Remote Home Planning Solutions',
    description: 'Empower your NRI clients with 3D visualization and seamless remote collaboration for home design projects.',
  },
  alternates: {
    canonical: 'https://zlendorealty.com/in/business/nri-remote-planning',
    languages: {
      'en-IN': 'https://zlendorealty.com/in/business/nri-remote-planning',
      'x-default': 'https://zlendorealty.com/in/business/nri-remote-planning',
    },
  },
};

export default function NRIRemotePlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

