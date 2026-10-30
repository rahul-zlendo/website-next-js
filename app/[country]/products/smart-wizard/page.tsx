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
  const defaultFaqs = [
    { q: "What does the Smart Wizard do?", a: "<p>It compares five home layout concepts based on your plot and room preferences.</p>" },
    { q: "Is there a free trial?", a: "<p>Yes, you can try the comparison for free before signing up.</p>" },
    { q: "How many concepts are shown?", a: "<p>Five predefined concepts are displayed.</p>" },
    { q: "Can I edit the layouts?", a: "<p>Yes, you can customize each layout after selection.</p>" },
    { q: "Is it available in India?", a: "<p>Yes, with region‑specific pricing and Vastu compliance.</p>" },
    { q: "What are the export options?", a: "<p>Export plans as PDFs or share via link.</p>" }
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zlendo Realty Smart Wizard',
    serviceType: 'Home layout concept comparison',
    url,
    description: 'A home planning tool that ranks five predefined concepts using selected plot and room preferences.',
    provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
    image: 'https://zlendorealty.com/assets/smart-wizard/og-image.webp',
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
