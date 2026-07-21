import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import ComparisonsHub from '@/components/compare/ComparisonsHub';
import JsonLd from '@/components/common/JsonLd';
import { COMPARE_INDEX } from '@/lib/compare/compareIndex';

const BASE_URL = 'https://zlendorealty.com';

export const metadata: Metadata = createPageMetadata({
  title: 'Compare Zlendo Realty vs Coohom, Foyr Neo, Maket & More (2026)',
  description:
    'Side-by-side comparisons and best-of guides for AI floor plan and home design software — Zlendo Realty vs Coohom, Foyr Neo, Maket, Snaptrude, Planner 5D, SketchUp & RoomSketcher.',
  path: '/compare',
  keywords: ['zlendo realty comparison', 'ai floor plan software comparison', 'best home design software'],
});

export default function Page() {
  const prefix = '/compare';
  const hubUrl = `${BASE_URL}${prefix}`;

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Zlendo Realty comparisons and best-of guides',
    itemListElement: COMPARE_INDEX.flatMap((g) => g.entries).map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.title,
      url: `${hubUrl}/${entry.slug}`,
    })),
  };

  return (
    <>
      <JsonLd schema={itemListSchema} />
      <ComparisonsHub prefix={prefix} />
    </>
  );
}
