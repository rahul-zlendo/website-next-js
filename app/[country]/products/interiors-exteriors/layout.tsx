import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior & Exterior Home Design | Zlendo Realty – Free Demo',
  description:
    'Design climate-responsive interiors and stunning exteriors tailored to Indian lifestyles. Create cohesive residential home plans. Book a free demo today.',
  keywords: [
    'interior design software',
    'exterior home design',
    'home elevation design',
    '3d interior exterior design',
    'house design tool',
  ],
  openGraph: {
    title: 'Elegant Interior & Exterior Home Design',
    description:
      'From façade to floor layout, design homes with cultural and climate alignment. Get expert help with Zlendo Realty.',
  },
  twitter: {
    title: 'Interior & Exterior Home Design',
    description: 'Cohesive, culture-ready residential designs. Start your free trial.',
  },
};

export default function InteriorsExteriorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
