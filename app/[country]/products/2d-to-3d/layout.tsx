import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2D to 3D House Plan Converter | Zlendo Realty – Try Free',
  description:
    'Convert 2D house plans into realistic 3D visuals instantly. Visualize layouts before construction begins. Explore free sample plans with Zlendo Realty.',
  keywords: [
    'free 2d to 3d floor plan converter',
    '3d floor plan design',
    '2d house plan design',
    'online 3d house design',
    'modern house elevation 3d',
    '3d architectural visualization',
  ],
  openGraph: {
    title: 'Instant 2D to 3D House Plan Conversion',
    description:
      'Turn flat drawings into immersive 3D home designs. Ideal for residential planning and client presentations. Start free with Zlendo Realty.',
    url: 'https://app.zlendorealty.com/in/products/2d-to-3d',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zlendo Realty - 2D to 3D Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2D to 3D Home Plan Converter',
    description: 'Instantly transform floor plans into lifelike 3D visuals. Start your free trial.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/products/2d-to-3d',
  },
};

export default function TwoDToThreeDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
