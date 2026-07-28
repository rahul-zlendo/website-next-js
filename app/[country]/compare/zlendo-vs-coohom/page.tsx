import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import ComparisonClient from '@/components/compare/ComparisonClient';
import JsonLd from '@/components/common/JsonLd';
import { comparisonData } from '@/components/compare/comparisonData';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const cleanPath = `/${country}/compare/zlendo-vs-coohom`;

    return createPageMetadata({
        title: 'Zlendo Realty vs. Coohom: Professional 3D Design Comparison',
        description: 'See why interior designers and builders are switching from Coohom to Zlendo Realty. Get unlimited 8K renders and instant AI 2D-to-3D floor planning.',
        path: cleanPath,
        keywords: ['Zlendo Realty vs Coohom', 'Coohom alternative', 'AI floor planner', '3D home design software', 'unlimited rendering software'],
    });
}

export default async function Page({ params }: Props) {
    const { country } = await params;
    const pageUrl = `https://zlendorealty.com/${country}/compare/zlendo-vs-coohom`;
    const data = comparisonData.coohom;

    // Schema markup for comparison page
    const compareSchema = {
        "@context": "https://schema.org",
        "@type": "ProductCompareDocument",
        "name": "Zlendo Realty vs Coohom Comparison",
        "description": "Comparison of Zlendo Realty and Coohom interior design software, highlighting speed, rendering quality, pricing transparency, and cost estimation capabilities.",
        "url": pageUrl,
        "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Zlendo Realty",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <JsonLd schema={compareSchema} />
            <JsonLd schema={faqSchema} />
            <ComparisonClient competitor="coohom" />
        </>
    );
}
