import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import ComparisonClient from '@/components/compare/ComparisonClient';
import JsonLd from '@/components/common/JsonLd';

export const metadata: Metadata = createPageMetadata({
    title: 'Zlendo Realty vs. SketchUp: Fast AI-Driven Spatial Design',
    description: 'Skip the steep 100-hour learning curve of SketchUp. Design instantly with Zlendo Realty’s native cloud rendering, AI styling, and automatic costing.',
    path: '/compare/zlendo-realty-vs-sketchup',
    keywords: ['Zlendo Realty vs SketchUp', 'SketchUp alternative', 'easy 3D home modeling', 'automated cost estimation', 'native cloud rendering'],
});

export default function Page() {
    const compareSchema = {
        "@context": "https://schema.org",
        "@type": "ProductCompareDocument",
        "name": "Zlendo Realty vs SketchUp Comparison",
        "description": "Comparison of Zlendo Realty and SketchUp, demonstrating the benefit of automated AI spatial styling and costing over manual geometry-based modeling.",
        "url": "https://zlendorealty.com/compare/zlendo-realty-vs-sketchup",
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

    return (
        <>
            <JsonLd schema={compareSchema} />
            <ComparisonClient competitor="sketchup" />
        </>
    );
}
