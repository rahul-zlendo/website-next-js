import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design and Build Services & Remote Home Planning | Zlendo Realty',
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
    title: 'Design and Build Services & Remote Home Planning | Zlendo Realty',
    description:
      'Bridge the distance with transparent design. Manage international and remote projects with absolute clarity, ensuring your NRI clients feel present at every step.',
    url: 'https://app.zlendorealty.com/in/business/nri-remote-planning',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI & Remote Home Planning Solutions | Zlendo Realty',
    description: 'Empower your NRI clients with 3D visualization and seamless remote collaboration for home design projects.',
  },
  alternates: {
    canonical: '/business/nri-remote-planning',
  },
};

export default function NRIRemotePlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
