import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import SmartWizardClient from '@/components/products/SmartWizardClient';
import SmartWizardSeoContent, { getSmartWizardFaqs } from '@/components/products/SmartWizardSeoContent';
import { createPageMetadata } from '@/lib/seo/metadata';

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  return createPageMetadata({
    title: 'AI Floor Plan Generator India – House Plans by Plot Size & Vastu',
    description: 'Free AI floor plan generator for Indian plots: enter plot size, setbacks, rooms, pooja room and Vastu priority, and get five ranked house plans to edit in 2D and 3D.',
    path: `/${country}/products/smart-wizard`,
  });
}

export default async function SmartWizardCountryPage({ params }: PageProps) {
  const { country } = await params;
  const url = `https://zlendorealty.com/${country}/products/smart-wizard`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zlendo Realty Smart Wizard',
    serviceType: 'AI-assisted home planning',
    url,
    description: 'An AI-assisted home planning service for plot-aware residential concepts.',
    provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getSmartWizardFaqs('in').map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <JsonLd schema={schema} />
      <JsonLd schema={faqSchema} />
      <SmartWizardClient>
        <SmartWizardSeoContent region={country === 'in' ? 'in' : 'global'} />
      </SmartWizardClient>
    </>
  );
}
