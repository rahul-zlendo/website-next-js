import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { apiSuitePageQuery } from '@/lib/sanity/queries';
import APISuiteClient from './APISuiteClient';

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

    const title = cmsSeo?.seoTitle || "Zlendo Realty API Suite - Enterprise Prop-Tech Solutions";
    const description = cmsSeo?.seoDescription || "Integrate our core 2D-to-3D, costing, and styling engines directly into your own applications.";

    return {
        title,
        description,
        alternates: {
            canonical: `https://zlendorealty.com/${country}/products/api-suite`,
        },
    };
}

export default async function APISuitePage({ params }: Props) {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms: any = await getClient(preview).fetch(apiSuitePageQuery).catch(() => null);

    const defaultFaqs = [
        { q: "Is this tool free to use?", a: "Yes! You can start for free and design your first project without any credit card. Premium textures and high-res renders are available in paid plans." },
        { q: "Do I need to install any software?", a: "No, Zlendo Realty runs entirely in your browser. It works smoothly on Chrome, Firefox, and Safari on both Windows and Mac." },
        { q: "Can I import my own CAD files?", a: "Absolutely. We support DXF, DWG, JPG, PNG, and PDF formats for seamless import." },
        { q: "How accurately are the costs estimated?", a: "Our cost engine is updated weekly with local market rates for materials and labor, ensuring 95%+ accuracy for your zip code." }
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <APISuiteClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}
