import type { Metadata, ResolvingMetadata } from 'next';
import CostEstimatorClient from './CostEstimatorClient';
import { client } from '@/lib/sanity/client';
import { costEstimatorPageQuery } from '@/lib/sanity/queries';

interface PageProps {
  params: Promise<{ country: string }>;
}

/**
 * Generate dynamic metadata for the Cost Estimator page from Sanity content.
 */
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { country: countryCode } = await params;
  const data = await client.fetch(costEstimatorPageQuery);
  const country = countryCode.toUpperCase();

  return {
    title: data?.seoTitle || `Smart Construction Cost Estimator ${country}`,
    description: data?.seoDescription || 'Estimate residential construction costs accurately with AI-driven insights.',
    keywords: [
      'construction cost calculator',
      'home building estimate',
      'cost estimator india',
      'real-time construction costs',
    ],
    openGraph: {
      title: data?.seoTitle,
      description: data?.seoDescription,
      type: 'website',
    },
    alternates: {
      canonical: `https://zlendorealty.com/${countryCode}/products/cost-estimator`,
    },
  };
}

export default async function CostEstimatorPage() {
  const cms = await client.fetch(costEstimatorPageQuery);

  // FAQ Schema for SEO
  const resolvedFaqs = cms?.faqs?.map((f: any) => ({
    q: f.question,
    a: f.answer
  })) || [
    {
        q: "What does this tool provide?",
        a: "This tool provides an estimated project cost based on your house plan design, helping with early budgeting and financial planning before construction."
    },
    {
        q: "How is the cost calculated?",
        a: "The estimate is calculated based on total built-up area, layout complexity, and selected materials, offering a practical cost overview for residential building plans."
    },
    {
        q: "Can I adjust the design to match my budget?",
        a: "Yes. When you modify your layout or materials, the estimated cost updates automatically, helping balance design decisions with budget limits."
    },
    {
        q: "Is this the final construction cost?",
        a: "No. The amount shown is an approximate estimate for planning purposes. However, it provides strong financial clarity before engaging civil and architectural design services."
    },
    {
        q: "Does it include interiors in the estimate?",
        a: "Yes. Depending on your selections, the estimate can reflect both structural components and basic interior features."
    },
    {
        q: "Why is this useful before hiring a contractor?",
        a: "It helps you understand realistic pricing ranges, reducing the risk of over-quoting and improving confidence while discussing costs with contractors or builders."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "name": cms?.faqTitle || "Smart Cost Estimator FAQs",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CostEstimatorClient cms={cms} resolvedFaqs={resolvedFaqs} />
    </>
  );
}

