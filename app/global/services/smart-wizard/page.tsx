import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import SmartWizardClient from '@/components/products/SmartWizardClient';

const url = 'https://zlendorealty.com/services/smart-wizard';

export const metadata: Metadata = {
  title: 'AI Smart Wizard – Generate Home Plan Ideas | Zlendo Realty',
  description: 'Enter your plot size, setbacks, built-up area, rooms and priorities. Get five ranked AI home-plan suggestions and continue designing in 2D and 3D.',
  alternates: {
    canonical: url,
    languages: {
      en: url,
      'en-IN': 'https://zlendorealty.com/in/services/smart-wizard',
      'x-default': url,
    },
  },
  openGraph: {
    title: 'AI Smart Wizard – Five Home Plan Ideas From One Brief',
    description: 'Turn plot constraints and room needs into five ranked planning directions with Zlendo Realty.',
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

  return (
    <>
      <JsonLd schema={schema} />
      <SmartWizardClient />
    </>
  );
}
