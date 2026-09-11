import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import SmartWizardClient from '@/components/products/SmartWizardClient';
import { createPageMetadata } from '@/lib/seo/metadata';

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  return createPageMetadata({
    title: 'AI Smart Wizard – Generate 5 Home Plan Ideas | Zlendo Realty',
    description: 'Enter plot size, setbacks, built-up area, parking and room needs. Compare five ranked AI planning suggestions and continue in editable 2D and 3D.',
    path: `/${country}/services/smart-wizard`,
  });
}

export default async function SmartWizardCountryPage({ params }: PageProps) {
  const { country } = await params;
  const url = `https://zlendorealty.com/${country}/services/smart-wizard`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zlendo Realty Smart Wizard',
    serviceType: 'AI-assisted home planning',
    url,
    description: 'An AI-assisted home planning service for plot-aware residential concepts.',
    provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
  };

  return (
    <>
      <JsonLd schema={schema} />
      <SmartWizardClient />
    </>
  );
}
