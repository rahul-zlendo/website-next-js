import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import ComparisonClient from '@/components/compare/ComparisonClient';
import JsonLd from '@/components/common/JsonLd';

export const metadata: Metadata = createPageMetadata({
    title: 'Zlendo Realty vs. Planner 5D: Professional Design Made Simple',
    description: 'Compare Zlendo Realty and Planner 5D side-by-side. Get professional 8K renders, robust API integrations, and developer white-labeling features.',
    path: '/compare/zlendo-realty-vs-planner5d',
    keywords: ['Zlendo Realty vs Planner 5D', 'Planner 5D alternative', 'professional 3D interior design', 'prop-tech API suite', 'white-label home plan software'],
});

export default function Page() {
    const compareSchema = {
        "@context": "https://schema.org",
        "@type": "ProductCompareDocument",
        "name": "Zlendo Realty vs Planner 5D Comparison",
        "description": "Comparison of Zlendo Realty and Planner 5D design software, highlighting professional visual fidelity, catalog freedom, white-label APIs, and CAD vector exports.",
        "url": "https://zlendorealty.com/compare/zlendo-realty-vs-planner5d",
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
            <ComparisonClient competitor="planner5d" />
        </>
    );
}
