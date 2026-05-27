import type { Metadata } from 'next';
import VirtualWalkthroughClient from '../../../[country]/products/virtual-walkthrough/VirtualWalkthroughClient';
import { client } from '@/lib/sanity/client';
import { virtualWalkthroughPageQuery } from '@/lib/sanity/queries';
import JsonLd from '@/components/common/JsonLd';

import { createPageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const data = await client.fetch(virtualWalkthroughPageQuery);

  return createPageMetadata({
    title: data?.seoTitle || `Professional 360° Virtual Walkthroughs for Interior Design - Zlendo Realty`,
    description: data?.seoDescription || `Improve your design presentations with Zlendo's 360 Walkthrough tool. Offer clients realistic, interactive tours to effectively communicate your vision.`,
    path: '/products/virtual-walkthrough',
  });
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

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zlendo Realty Virtual Walkthrough",
    "applicationCategory": "DesignApplication",
    "applicationSubCategory": "Virtual Reality Architectural Visualization Software",
    "operatingSystem": "Web",
    "url": "https://zlendorealty.com/products/vastu",
    "description": "AI-powered virtual walkthrough software that transforms 2D floor plans into immersive 3D experiences with cinematic visualization, 360-degree navigation, realistic lighting, interactive room exploration, and real-time architectural walkthroughs before construction begins.",
    "image": "https://zlendorealty.com/favicon.ico",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free AI-powered virtual walkthrough and 3D visualization platform"
    },
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
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      </head>
      <JsonLd schema={faqSchema} />
      <VirtualWalkthroughClient cms={cms} resolvedFaqs={resolvedFaqs} country={country} />
    </>
  );
}
