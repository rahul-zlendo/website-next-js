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
    title: country === 'in' ? 'Smart Wizard India – Compare 5 Floor Plan Concepts' : 'Smart Wizard – Compare 5 Floor Plan Concepts',
    description: 'Explore five predefined home layout concepts ranked by selected plot and room preferences. Compare schematic previews for free, then explore the Zlendo Realty design tools.',
    path: `/${country}/products/smart-wizard`,
  });
}

export default async function SmartWizardCountryPage({ params }: PageProps) {
  const { country } = await params;
  const region = country === 'in' ? 'in' : 'global';
  const url = `https://zlendorealty.com/${country}/products/smart-wizard`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zlendo Realty Smart Wizard',
    serviceType: 'Home layout concept comparison',
    url,
    description: 'A home planning tool that ranks five predefined concepts using selected plot and room preferences.',
    provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getSmartWizardFaqs(region).map((f) => ({
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
        <SmartWizardSeoContent region={region} />
      </SmartWizardClient>
    </>
  );
}
