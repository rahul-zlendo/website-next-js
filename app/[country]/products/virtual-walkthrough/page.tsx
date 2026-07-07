import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VirtualWalkthroughClient from './VirtualWalkthroughClient';
import { client } from '@/lib/sanity/client';
import { virtualWalkthroughPageQuery } from '@/lib/sanity/queries';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

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
    ogImage: {
      url: 'https://zlendorealty.com/assets/virtual-walkthrough/hero-walkthrough.webp',
      width: 1200,
      height: 630,
      alt: 'Zlendo Realty Virtual Walkthrough',
      type: 'image/webp',
    },
  });
}

export default async function VirtualWalkthroughPage({ params }: PageProps) {
  const { country: countryInParams } = await params;
  const cms = await client.fetch(virtualWalkthroughPageQuery);
  const country = countryInParams || 'in';
  const isGlobal = countryInParams === 'global';
  const cleanPath = isGlobal ? '/products/virtual-walkthrough' : `/${country}/products/virtual-walkthrough`;
  const fullUrl = `https://zlendorealty.com${cleanPath}`;

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

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zlendo Realty Virtual Walkthrough",
    "applicationCategory": "DesignApplication",
    "applicationSubCategory": "Virtual Reality Architectural Visualization Software",
    "operatingSystem": "Web",
    "url": fullUrl,
    "description": "AI-powered virtual walkthrough software that transforms 2D floor plans into immersive 3D experiences with cinematic visualization, 360-degree navigation, realistic lighting, interactive room exploration, and real-time architectural walkthroughs before construction begins.",
    "image": "https://zlendorealty.com/favicon.ico",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free AI-powered virtual walkthrough and 3D visualization platform"
    },
    "aggregateRating": ZLENDO_AGGREGATE_RATING,
    "creator": {
      "@type": "Organization",
      "name": "Zlendo Realty",
      "url": "https://zlendorealty.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zlendo Realty",
      "url": "https://zlendorealty.com"
    },
    "featureList": [
      "AI-powered virtual walkthrough generation",
      "Interactive 3D property exploration",
      "360-degree immersive navigation",
      "Real-time room walkthroughs",
      "Cinematic architectural visualization",
      "Photorealistic lighting simulation",
      "VR-ready property experiences",
      "Floor plan to walkthrough conversion",
      "Interior and exterior virtual tours",
      "Client-ready property presentations",
      "Cross-device virtual tour support",
      "Realistic spatial visualization",
      "Interactive property previews",
      "Immersive real estate storytelling"
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <JsonLd schema={faqSchema} />
      <VirtualWalkthroughClient cms={cms} resolvedFaqs={resolvedFaqs} country={country} />
    </>
  );
}

