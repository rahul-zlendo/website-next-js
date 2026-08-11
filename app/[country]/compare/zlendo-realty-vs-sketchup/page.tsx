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
    const isGlobal = country === "global";
    const cleanPath = `/${country}/compare/zlendo-realty-vs-sketchup`;

    return createPageMetadata({
        title: isGlobal ? 'Zlendo Realty vs. SketchUp: Fast AI-Driven Spatial Design' : `Zlendo Realty vs. SketchUp: Fast AI-Driven Spatial Design Online`,
        description: 'Skip the steep 100-hour learning curve of SketchUp. Design instantly with Zlendo Realty’s native cloud rendering, AI styling, and automatic costing.',
        path: cleanPath,
        keywords: ['Zlendo Realty vs SketchUp', 'SketchUp alternative', 'easy 3D home modeling', 'automated cost estimation', 'native cloud rendering'],
    });
}

export default async function Page({ params }: Props) {
    const { country } = await params;
    const pageUrl = `https://zlendorealty.com/${country}/compare/zlendo-realty-vs-sketchup`;
    const data = comparisonData.sketchup;

    const compareSchema = {
        "@context": "https://schema.org",
        "@type": "ProductCompareDocument",
        "name": "Zlendo Realty vs SketchUp Comparison",
        "description": "Comparison of Zlendo Realty and SketchUp, demonstrating the benefit of automated AI spatial styling and costing over manual geometry-based modeling.",
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
            <ComparisonClient competitor="sketchup" />
        </>
    );
}
