import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import SmartWizardClient from '@/components/products/SmartWizardClient';
import SmartWizardSeoContent, { getSmartWizardFaqs } from '@/components/products/SmartWizardSeoContent';

const url = 'https://zlendorealty.com/products/smart-wizard';

export const metadata: Metadata = {
  title: 'AI Floor Plan Generator – 5 Plans from Your Plot Size',
  description: 'Free AI floor plan generator: enter your plot size, setbacks, rooms and priorities and get five ranked floor plans you can edit in 2D and 3D.',
  alternates: {
    canonical: url,
    languages: {
      en: url,
      'en-IN': 'https://zlendorealty.com/in/products/smart-wizard',
      'x-default': url,
    },
  },
  openGraph: {
    title: 'AI Floor Plan Generator – 5 Plans from Your Plot Size',
    description: 'Use the Zlendo Realty AI floor plan generator to turn plot size and room needs into five ranked floor plans.',
    url,
    siteName: 'Zlendo Realty',
    type: 'website',
  },
};

export default function SmartWizardPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zlendo Realty Smart Wizard',
    serviceType: 'AI-assisted home planning',
    url,
    description: 'An AI-assisted home planning service that turns plot constraints, room requirements and design priorities into five ranked concepts.',
    provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getSmartWizardFaqs('global').map((f) => ({
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
        <SmartWizardSeoContent region="global" />
      </SmartWizardClient>
    </>
  );
}
