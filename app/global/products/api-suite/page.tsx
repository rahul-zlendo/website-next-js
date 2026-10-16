import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import GlobalApiSuiteClient from './GlobalApiSuiteClient';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

export const metadata: Metadata = createPageMetadata({
    title: 'Enterprise Design API Suite | Zlendo Global',
    description: 'Integrate the worlds most powerful 2D-to-3D design engine into your platform. Photorealistic rendering, spatial AI, and automated styling at enterprise scale.',
    path: '/products/api-suite',
});

const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zlendo Realty API Suite",
    "applicationCategory": "DeveloperApplication",
    "applicationSubCategory": "Design Engine API",
    "operatingSystem": "Web",
    "url": "https://zlendorealty.com/products/api-suite",
    "description": "Enterprise API suite that lets prop-tech platforms integrate Zlendo Realty's 2D-to-3D conversion, photorealistic rendering, spatial AI, and automated styling engines directly into their own applications.",
    "image": "https://zlendorealty.com/favicon.ico",
    "softwareVersion": "1.0",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free developer access with paid enterprise usage tiers"
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
        "RESTful API endpoints",
        "White-label integration",
        "Scalable cloud infrastructure",
        "Real-time webhooks",
        "2D to 3D conversion engine",
        "Photorealistic rendering API",
        "Automated interior styling"
    ]
};

export default function ApiSuitePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
            <GlobalApiSuiteClient />
        </>
    );
}
