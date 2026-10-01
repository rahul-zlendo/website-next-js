import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { vastuPageQuery } from '@/lib/sanity/queries';
import VastuClient from './VastuClient';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

interface PageProps {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(vastuPageQuery).catch(() => null);

    const isGlobal = country === 'global';
    const path = isGlobal ? '/products/vastu' : '/in/products/vastu';

    let seoTitle = cms?.seoTitle || 'Vastu-Compliant House Plans & Floor Designs | Zlendo Realty';

    // Clean up brand name duplication if present in the CMS
    if (seoTitle.includes('Zlendo Realty – Design Now | Zlendo Realty') ||
        seoTitle.includes('Zlendo Realty - Design Now | Zlendo Realty') ||
        seoTitle.includes('Design Now | Zlendo Realty')) {
        seoTitle = 'Vastu House Plans & Vastu-Compliant Home Designs | Zlendo Realty';
    } else if (seoTitle.includes('Zlendo Realty') && (seoTitle.match(/Zlendo Realty/g) || []).length > 1) {
        // Strip duplicate trailing brand name
        seoTitle = seoTitle.replace(/\s*\|\s*Zlendo Realty\s*$/, '').trim();
    }

    const seoDescription = cms?.seoDescription || 'Create Vastu-compliant house plans online with Zlendo Realty’s Vastu Optimizer. Instantly analyze and correct layouts, room placement, and main entrances.';

    if (country === 'in') {
        if (seoTitle.endsWith(' | Zlendo Realty')) seoTitle = seoTitle.replace(' | Zlendo Realty', ' - Zlendo Portal');
        else if (seoTitle.endsWith(')')) seoTitle = seoTitle.replace(')', ' Guide)');
        else seoTitle += ' Online';
    }
    return createPageMetadata({
        title: seoTitle,
        description: seoDescription,
        path: path,
        ogImage: {
            url: 'https://zlendorealty.com/assets/vastu-product/hero-vastu.webp',
            width: 1200,
            height: 630,
            alt: 'Zlendo Realty Vastu Optimizer',
            type: 'image/webp',
        },
    });
}

export default async function VastuPage({ params }: PageProps) {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(vastuPageQuery).catch(() => null);

    const defaultFaqs = [
        {
            q: "What is the Vastu Optimizer?",
            a: "The Vastu Optimizer provides layout recommendations based on traditional Vastu house plan design principles, helping align home planning with cultural and regional preferences."
        },
        {
            q: "Is it mandatory to use?",
            a: "No. Using Vastu suggestions is completely optional. You decide which recommendations to follow while designing your home."
        },
        {
            q: "What suggestions does it provide?",
            a: "It may suggest entrance direction, room placement, and orientation based on commonly followed Indian house plan design guidelines."
        },
        {
            q: "Can I ignore some suggestions?",
            a: "Yes. All recommendations are advisory only. You retain full control over your final house plan layout."
        },
        {
            q: "Is it useful for apartments?",
            a: "Yes. The Vastu Optimizer works for apartments, villas, and independent homes, adapting to different residential layouts."
        },
        {
            q: "Will it force layout changes?",
            a: "No. The tool never enforces changes. It only provides guidance — final design decisions are always yours."
        }
    ];

    const defaultSteps = [
        { title: 'Upload Floor Plan', desc: 'Upload your layout and orient it towards North.', image: '/assets/vastu/upload-plan.webp' },
        { title: 'Analyze', desc: 'AI scans the placement of rooms, doors, and furniture.', image: '/assets/floor-planner/3d-sketch.webp' },
        { title: 'View Issues', desc: 'Identify problem areas affecting health or wealth.', image: '/assets/floor-planner/2d-sketch.webp' },
        { title: 'Apply Remedies', desc: 'Implement suggested changes and improved layout.', image: '/assets/2d-to-3d/dashboard-interface.webp' }
    ];

    const defaultFeatures = [
        { title: 'Energy Mapping', desc: 'Visual heatmap of Vastu zones in your floor plan.' },
        { title: 'Remedy Suggestions', desc: 'Non-destructive fixes for existing Vastu defects.' },
        { title: 'Directional Check', desc: 'Precise compass alignment using satellite data.' },
        { title: 'Scorecard', desc: 'Get a Vastu compliance score for every room.' }
    ];

    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: any) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const resolvedSteps = cms?.steps?.length ? cms.steps : defaultSteps;
    const resolvedFeatures = cms?.features?.length ? cms.features : defaultFeatures;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Zlendo Realty Products Vastu Optimizer - Frequently Asked Questions",
        "mainEntity": resolvedFaqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Zlendo Realty Vastu Optimizer",
        "image": "https://zlendorealty.com/assets/vastu-product/hero-vastu.webp",
        "description": "An AI-powered online Vastu compliance checker and floor plan optimizer that helps align home planning with traditional Vastu Shastra principles.",
        "brand": {
            "@type": "Brand",
            "name": "Zlendo Realty"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://zlendorealty.com/${country}/products/vastu`,
            "priceCurrency": "INR",
            "price": "0",
            "valueAddedService": {
                "@type": "Service",
                "name": "AI Vastu Analysis"
            }
        }
    };

    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Zlendo Realty Vastu Optimizer",
        "applicationCategory": "LifestyleApplication",
        "applicationSubCategory": "Vastu Analysis Software",
        "operatingSystem": "Web",
        "url": `https://zlendorealty.com/${country}/products/vastu`,
        "description": "AI-powered Vastu analysis software that evaluates floor plans using Vastu Shastra principles, generates energy heatmaps, provides directional analysis, identifies layout imbalances, and suggests practical remedies for healthier and harmonious living spaces.",
        "image": "https://zlendorealty.com/favicon.ico",
        "softwareVersion": "1.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free AI-powered Vastu analysis and optimization tool"
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
            "AI-powered Vastu analysis",
            "Floor plan energy heatmaps",
            "Directional alignment checks",
            "Room-wise Vastu scorecard",
            "Compass orientation analysis",
            "Vastu compliance scoring",
            "Energy imbalance detection",
            "Non-destructive remedy suggestions",
            "Satellite-based directional mapping",
            "Apartment and home Vastu evaluation",
            "AI-generated layout correction suggestions",
            "Health and harmony optimization insights"
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
            <JsonLd schema={faqSchema} />
            <JsonLd schema={productSchema} />
            <VastuClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}

