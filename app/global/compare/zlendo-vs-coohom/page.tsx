import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import ComparisonClient from '@/components/compare/ComparisonClient';
import JsonLd from '@/components/common/JsonLd';

export const metadata: Metadata = createPageMetadata({
    title: 'Zlendo Realty vs. Coohom: Professional 3D Design Comparison',
    description: 'See why interior designers and builders are switching from Coohom to Zlendo Realty. Get unlimited 8K renders and instant AI 2D-to-3D floor planning.',
    path: '/compare/zlendo-vs-coohom',
    keywords: ['Zlendo Realty vs Coohom', 'Coohom alternative', 'AI floor planner', '3D home design software', 'unlimited rendering software'],
});

export default function Page() {
    const compareSchema = {
        "@context": "https://schema.org",
        "@type": "ProductCompareDocument",
        "name": "Zlendo Realty vs Coohom Comparison",
        "description": "Comparison of Zlendo Realty and Coohom interior design software, highlighting speed, rendering quality, pricing transparency, and cost estimation capabilities.",
        "url": "https://zlendorealty.com/compare/zlendo-vs-coohom",
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
            <ComparisonClient competitor="coohom" />
        </>
    );
}
