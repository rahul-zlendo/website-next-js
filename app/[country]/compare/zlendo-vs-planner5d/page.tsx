import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import ComparisonClient from '@/components/compare/ComparisonClient';
import JsonLd from '@/components/common/JsonLd';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const cleanPath = `/${country}/compare/zlendo-vs-planner5d`;

    return createPageMetadata({
        title: 'Zlendo Realty vs. Planner 5D: Professional Design Made Simple',
        description: 'Compare Zlendo Realty and Planner 5D side-by-side. Get professional 8K renders, robust API integrations, and developer white-labeling features.',
        path: cleanPath,
        keywords: ['Zlendo Realty vs Planner 5D', 'Planner 5D alternative', 'professional 3D interior design', 'prop-tech API suite', 'white-label home plan software'],
    });
}

export default async function Page({ params }: Props) {
    const { country } = await params;
    const pageUrl = `https://zlendorealty.com/${country}/compare/zlendo-vs-planner5d`;

    const compareSchema = {
        "@context": "https://schema.org",
        "@type": "ProductCompareDocument",
        "name": "Zlendo Realty vs Planner 5D Comparison",
        "description": "Comparison of Zlendo Realty and Planner 5D design software, highlighting professional visual fidelity, catalog freedom, white-label APIs, and CAD vector exports.",
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

    return (
        <>
            <JsonLd schema={compareSchema} />
            <ComparisonClient competitor="planner5d" />
        </>
    );
}
