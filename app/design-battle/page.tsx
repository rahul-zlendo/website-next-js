import type { Metadata } from 'next';
import DesignBattleClient from './DesignBattleClient';
import './design-battle.css';

export const metadata: Metadata = {
  title: 'Zlendo Realty Design Battle | PropTech Competition for Architecture Students & Colleges',
  description:
    'Bring the Zlendo Realty Design Battle to your college. Students and faculty experience modern PropTech, AI-assisted design, 2D-to-3D visualization, interactive walkthroughs, competitions, prizes and certification.',
  keywords: [
    'Zlendo Realty Design Battle',
    'architecture competition India',
    'architecture student competition',
    'PropTech workshop for colleges',
    'architectural design competition',
    '2D to 3D architecture',
    'architecture college event',
    'student design challenge',
    'architecture technology workshop',
  ],
  alternates: { canonical: 'https://zlendorealty.com/design-battle' },
  openGraph: {
    title: 'Zlendo Realty Design Battle',
    description: 'Where student creativity meets the future of PropTech.',
    url: 'https://zlendorealty.com/design-battle',
    siteName: 'Zlendo Realty',
    type: 'website',
    images: [{ url: '/design-battle-og.png', width: 2048, height: 1152, alt: 'Zlendo Realty Design Battle — Design Beyond Imagination' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zlendo Realty Design Battle',
    description: 'Where student creativity meets the future of PropTech.',
    images: ['/design-battle-og.png'],
  },
};

export default function DesignBattlePage() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'Zlendo Realty Design Battle',
    description:
      'A college-focused architecture and PropTech design competition with workshops, immersive visualization and recognition.',
    organizer: {
      '@type': 'Organization',
      name: 'Zlendo Realty',
      url: 'https://zlendorealty.com',
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <DesignBattleClient />
    </>
  );
}
