import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import RealisticRendersClient from './RealisticRendersClient';
import { client } from '@/lib/sanity/client';
import { realisticRendersPageQuery } from '@/lib/sanity/queries';
import JsonLd from '@/components/common/JsonLd';

interface PageProps {
  params: Promise<{ country: string }>;
}

/**
 * Generate dynamic metadata for the Realistic Renders page from Sanity content.
 */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { country: countryCode } = await params;
  const data = await client.fetch(realisticRendersPageQuery);
  const isGlobal = countryCode === 'global';
  const path = isGlobal ? '/products/realistic-renders' : `/${countryCode}/products/realistic-renders`;

  return createPageMetadata({
    title: data?.seoTitle || `Realistic Renders | 8K Interior Visualization`,
    description: data?.seoDescription || 'Experience your future home with 8K photorealism and intelligent light simulation.',
    path: path,
  });
}

export default async function RealisticRendersPage() {
  const cms = await client.fetch(realisticRendersPageQuery);

  // FAQ Schema for SEO
  const resolvedFaqs = cms?.faqs?.map((f: any) => ({
    q: f.question,
    a: f.answer
  })) || [
    {
        q: "What are realistic renders?",
        a: "Realistic renders are high-quality 3D rendering images that closely resemble real photographs. They show how the final space is expected to look after completion."
    },
    {
        q: "Why are they useful?",
        a: "They help you visualize the final outcome before construction begins, improving clarity and confidence in design decisions through photorealistic 3D rendering."
    },
    {
        q: "Can I use them for marketing?",
        a: "Yes. These visuals are ideal for brochures, websites, and property listings, making them valuable for real estate design services and marketing presentations."
    },
    {
        q: "Do they include lighting and shadows?",
        a: "Yes. The renders simulate natural lighting, shadows, reflections, and textures, delivering highly detailed architectural 3D rendering services."
    },
    {
        q: "Can I generate renders for all rooms?",
        a: "Yes. You can create renders for any room or area individually, supporting complete residential 3D design services."
    },
    {
        q: "Can I download these images?",
        a: "Yes. All renders are downloadable and shareable, making them easy to use across digital and print platforms."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "name": cms?.faqTitle || "Photorealistic Rendering FAQs",
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
      <RealisticRendersClient cms={cms} resolvedFaqs={resolvedFaqs} />
    </>
  );
}

