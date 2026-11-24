import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import SmartWizardClient from '@/components/products/SmartWizardClient';
import SmartWizardSeoContent, { getSmartWizardFaqs } from '@/components/products/SmartWizardSeoContent';
import { createPageMetadata } from '@/lib/seo/metadata';

const url = 'https://zlendorealty.com/products/smart-wizard';

export const metadata: Metadata = createPageMetadata({
  title: 'Smart Wizard – Compare 5 Floor Plan Concepts',
  description: 'Explore five predefined home layout concepts ranked by selected plot and room preferences. Compare schematic previews for free, then explore the Zlendo Realty design tools.',
  path: '/products/smart-wizard',
  ogImage: {
    url: 'https://zlendorealty.com/assets/Home-Page/plan-design.webp',
    width: 1200,
    height: 675,
    alt: 'Zlendo Realty Smart Wizard Floor Plan Concepts',
    type: 'image/webp',
  },
});

export default function SmartWizardPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zlendo Realty Smart Wizard',
    serviceType: 'Home layout concept comparison',
    url,
    description: 'A home planning tool that ranks five predefined concepts using selected plot and room preferences.',
    provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
    image: 'https://zlendorealty.com/assets/Home-Page/plan-design.webp',
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
