import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { apiSuitePageQuery } from '@/lib/sanity/queries';
import APISuiteClient from './APISuiteClient';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();

    let cmsSeo: any = null;
    try {
        cmsSeo = await getClient(preview).fetch(apiSuitePageQuery);
    } catch { /* fallback */ }

    let title = cmsSeo?.seoTitle || "Zlendo Realty API Suite - Enterprise Prop-Tech Solutions";
    const description = cmsSeo?.seoDescription || "Integrate our core 2D-to-3D, costing, and styling engines directly into your own applications.";

    const isGlobal = country === 'global';
    const path = isGlobal ? '/products/api-suite' : '/in/products/api-suite';

    if (country === 'in') {
        if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
        else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
        else title += ' Online';
    }
    return createPageMetadata({
        title,
        description,
        path: path,
        ogImage: {
            url: 'https://zlendorealty.com/assets/api-suite/hero-api.webp',
            width: 1200,
            height: 630,
            alt: 'Zlendo Realty API Suite',
            type: 'image/webp',
        },
    });
}

export default async function APISuitePage({ params }: Props) {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/products/api-suite' : '/in/products/api-suite';
    const fullUrl = `https://zlendorealty.com${cleanPath}`;
    const { isEnabled: preview } = await draftMode();
    const cms: any = await getClient(preview).fetch(apiSuitePageQuery).catch(() => null);

    const defaultFaqs = [
        { q: "What kind of projects can I build with the API?", a: "You can build custom prop-tech apps, automate floor plan conversions, or embed our 3D viewer directly into your real estate marketplace." },
        { q: "Is there a free tier for developers?", a: "Yes, our developer sandbox is completely free to test API endpoints before moving to a production environment." },
        { q: "How do webhooks work with the engine?", a: "Webhooks allow your application to receive instant JSON payloads when a render completes or a 2D floor plan finishes converting." },
        { q: "Can I white-label the 3D viewer?", a: "Absolutely. Our enterprise tier allows you to strip all Zlendo Realty branding and inject your own custom UI on top of our canvas." }
    ];

    const defaultSteps = [
        {
            title: 'Get API Key',
            desc: 'Sign up and generate your secure API credentials.',
            image: '/assets/api-suite/api-key.webp',
            alt: 'Secure API key generation for Zlendo Realty enterprise suite'
        },
        {
            title: 'Read Docs',
            desc: 'Explore our interactive API documentation.',
            image: '/assets/api-suite/read-docs.webp',
            alt: 'Interactive API documentation for developers integrating 3D engine'
        },
        {
            title: 'Connect',
            desc: 'Use our SDKs to connect your app to Zlendo Realty.',
            image: '/assets/api-suite/connect.webp',
            alt: 'Connecting developer application to Zlendo Realty cloud API'
        },
        {
            title: 'Go Live',
            desc: 'Launch your powered-up application to the world.',
            image: '/assets/api-suite/go-live.webp',
            alt: 'Launching enterprise prop-tech application with Zlendo Realty API'
        }
    ];

    const defaultFeatures = [
        { title: 'Restful API', desc: 'Easy to integrate endpoints with comprehensive documentation.' },
        { title: 'White Label', desc: 'Serve the experience under your own brand identity.' },
        { title: 'Scalable Infrastructure', desc: 'Built to handle millions of requests securely.' },
        { title: 'Webhooks', desc: 'Real-time event notifications for your app.' }
    ];

    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: any) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const resolvedSteps = cms?.steps?.length ? cms.steps : defaultSteps;
    const resolvedFeatures = cms?.features?.length ? cms.features : defaultFeatures;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Zlendo Realty Products API Suite - Frequently Asked Questions",
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
        "name": "Zlendo Realty API Suite",
        "applicationCategory": "DeveloperApplication",
        "applicationSubCategory": "Design Engine API",
        "operatingSystem": "Web",
        "url": fullUrl,
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

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
            <JsonLd schema={faqSchema} />
            <APISuiteClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}
