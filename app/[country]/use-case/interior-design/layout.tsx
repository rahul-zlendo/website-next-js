import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Use Cases | Zlendo Realty',
  description:
    'Explore how Zlendo Realty helps homeowners and professionals visualize and optimize interior spaces through photorealistic 3D experiences.',
  keywords: [
    'interior design',
    '3d visualization',
    'space planning',
    'home office setup',
    'zlendo realty',
    'interior design software',
    '3d interior design',
    'virtual interior design',
  ],
  openGraph: {
    title: 'Interior Design Use Cases | Zlendo Realty',
    description:
      'Transform spatial uncertainty into design confidence with Zlendo Realty. Real stories from first-time homebuyers to remote professionals.',
    url: 'https://app.zlendorealty.com/in/use-case/interior-design',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty - Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Use Cases | Zlendo Realty',
    description: 'See how Zlendo Realty transforms interior design with 3D visualization and space planning.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/use-case/interior-design',
  },
};

export default function InteriorDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
