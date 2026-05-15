import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VirtualWalkthroughClient from './VirtualWalkthroughClient';
import { client } from '@/lib/sanity/client';
import { virtualWalkthroughPageQuery } from '@/lib/sanity/queries';
import JsonLd from '@/components/common/JsonLd';

interface PageProps {
  params: Promise<{ country: string }>;
}

/**
 * Generate dynamic metadata for the Virtual Walkthrough page from Sanity content.
 */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { country: countryCode } = await params;
  const data = await client.fetch(virtualWalkthroughPageQuery);
  const isGlobal = countryCode === 'global';
  const path = isGlobal ? '/products/virtual-walkthrough' : `/${countryCode}/products/virtual-walkthrough`;

  return createPageMetadata({
    title: data?.seoTitle || `3D Virtual Walkthrough for Homes | Immersive VR Tours`,
    description: data?.seoDescription || 'Experience immersive 3D virtual walkthroughs that showcase space, flow, and finishes. Close deals faster with 8K cinematic storytelling.',
    path: path,
  });
}

export default async function VirtualWalkthroughPage({ params }: PageProps) {
  const { country: countryInParams } = await params;
  const cms = await client.fetch(virtualWalkthroughPageQuery);
  const country = countryInParams || 'in';

  // FAQ Schema for SEO
  const resolvedFaqs = cms?.faqs?.map((f: any) => ({
    q: f.question,
    a: f.answer
  })) || [
    {
        q: "What is a virtual walkthrough?",
        a: "A virtual walkthrough allows you to experience the design as if you are walking inside the space, offering an immersive 3D walkthrough visualization before construction."
    },
    {
        q: "Do I need VR equipment?",
        a: "No. The walkthrough works on normal mobile phones, tablets, and computers. No special VR devices are required."
    },
    {
        q: "Can I explore all rooms?",
        a: "Yes. You can move freely through the entire layout using an interactive 3D walkthrough, giving a complete understanding of space and flow."
    },
    {
        q: "Can I share the walkthrough?",
        a: "Yes. You can easily share the virtual walkthrough link with family members, clients, or stakeholders to support reviews and approvals."
    },
    {
        q: "How does it help before construction?",
        a: "Early 3D walkthrough rendering helps identify layout and circulation issues in advance, reducing design mistakes and rework during construction."
    },
    {
        q: "Does it update with design changes?",
        a: "Yes. The virtual walkthrough design updates automatically whenever changes are made, ensuring you always view the latest version."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "name": cms?.faqTitle || "Virtual Walkthrough FAQs",
    "mainEntity": resolvedFaqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <JsonLd schema={faqSchema} />
      <VirtualWalkthroughClient cms={cms} resolvedFaqs={resolvedFaqs} country={country} />
    </>
  );
}

