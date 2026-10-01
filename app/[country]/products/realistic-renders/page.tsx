import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import RealisticRendersClient from './RealisticRendersClient';
import { client } from '@/lib/sanity/client';
import { realisticRendersPageQuery } from '@/lib/sanity/queries';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

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

  let title = data?.seoTitle || `Realistic Renders | 8K Interior Visualization`;
  if (countryCode === 'in') {
    if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
    else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
    else title += ' Online';
  }

  return createPageMetadata({
    title: title,
    description: data?.seoDescription || 'Experience your future home with 8K photorealism and intelligent light simulation.',
    path: path,
    ogImage: {
      url: 'https://zlendorealty.com/assets/realistic-renders/hero-renders.webp',
      width: 1200,
      height: 630,
      alt: 'Zlendo Realty Realistic Renders',
      type: 'image/webp',
    },
  });
}

export default async function RealisticRendersPage({ params }: PageProps) {
  const { country: countryCode } = await params;
  const isGlobal = countryCode === 'global';
  const cleanPath = isGlobal ? '/products/realistic-renders' : `/${countryCode}/products/realistic-renders`;
  const fullUrl = `https://zlendorealty.com${cleanPath}`;

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

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zlendo Realty Realistic Renders",
    "applicationCategory": "DesignApplication",
    "applicationSubCategory": "Photorealistic Rendering Software",
    "operatingSystem": "Web",
    "url": fullUrl,
    "description": "AI-powered photorealistic rendering software that creates ultra-realistic 4K and 8K architectural visualizations with ray-traced lighting, cinematic depth of field, realistic materials, global illumination, and immersive interior and exterior scenes.",
    "image": "https://zlendorealty.com/favicon.ico",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free AI-powered realistic rendering platform for architectural visualization"
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
      "AI-powered photorealistic rendering",
      "4K and 8K architectural visualization",
      "Ray-traced lighting simulation",
      "Global illumination rendering",
      "Physically based materials",
      "Cinematic depth of field",
      "Interior and exterior rendering",
      "Time-of-day sunlight simulation",
      "Realistic shadow and reflection rendering",
      "Professional camera angle controls",
      "Ultra-fast cloud rendering",
      "Marketing-ready architectural visuals",
      "Client presentation render generation",
      "Photorealistic texture mapping"
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <JsonLd schema={faqSchema} />
      <RealisticRendersClient cms={cms} resolvedFaqs={resolvedFaqs} />
    </>
  );
}

