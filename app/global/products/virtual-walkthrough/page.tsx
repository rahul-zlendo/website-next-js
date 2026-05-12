import type { Metadata } from 'next';
import VirtualWalkthroughClient from '../../../[country]/products/virtual-walkthrough/VirtualWalkthroughClient';
import { client } from '@/lib/sanity/client';
import { virtualWalkthroughPageQuery } from '@/lib/sanity/queries';
import JsonLd from '@/components/common/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(virtualWalkthroughPageQuery);

  return {
    title: data?.seoTitle || `Professional 360° Virtual Walkthroughs for Interior Design - Zlendo Realty`,
    description: data?.seoDescription || `Improve your design presentations with Zlendo's 360 Walkthrough tool. Offer clients realistic, interactive tours to effectively communicate your vision.`,
    keywords: [
      '3d virtual walkthrough',
      'immersive vr tours',
      '360 property visualization',
      '8k walkthrough rendering',
    ],
    openGraph: {
      title: data?.seoTitle,
      description: data?.seoDescription,
      type: 'website',
    },
    alternates: {
      canonical: `https://zlendorealty.com/global/products/virtual-walkthrough`,
    },
  };
}

export default async function GlobalVirtualWalkthroughPage() {
  const cms = await client.fetch(virtualWalkthroughPageQuery);
  const country = 'global';

  // FAQ Schema for SEO
  const resolvedFaqs = cms?.faqs?.map((f: any) => ({
    q: f.question,
    a: f.answer
  })) || [
    {
        q: "What is a virtual tour?",
        a: "A virtual tour is an interactive digital experience that simulates visiting a physical location. It allows users to explore a space remotely, providing a sense of the environment and its layout."
    },
    {
        q: "How to create a virtual tour?",
        a: "First design your interior concepts using the platform's tools. Once the design is complete, use the 360 Walkthrough feature to generate an immersive tour."
    },
    {
        q: "How do 360 Walkthroughs work?",
        a: "360 Walkthroughs work by using high-resolution 360-degree renders and advanced technology to create an immersive virtual environment. Users can navigate through this environment, exploring every corner of the designed space."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "name": cms?.faqTitle || "360 Walkthrough FAQs",
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
