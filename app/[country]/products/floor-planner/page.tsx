import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import { Sparkles, PenTool, Zap, Layers, Home } from 'lucide-react';
import { getClient } from '@/lib/sanity/client';
import { floorPlannerPageQuery } from '@/lib/sanity/queries';
import FloorPlannerClient from './FloorPlannerClient';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';
import Head from 'next/head'

const BASE_URL = 'https://zlendorealty.com';

// Revalidate every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    let cmsSeo: Record<string, any> | null = null;
    try {
        cmsSeo = await getClient(false).fetch(floorPlannerPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cmsSeo?.seoTitle ?? 'AI Floor Planner – Create 2D & 3D Floor Plans Online | Zlendo Realty';
    const seoDesc = cmsSeo?.seoDescription ?? "Design accurate 2D & 3D floor plans in minutes with Zlendo Realty's AI floor planner. No experience needed. Auto-dimensioning, live 3D preview & easy export. Start free today.";

    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? `/products/floor-planner` : `/${country}/products/floor-planner`;

    return createPageMetadata({
        title: seoTitle,
        description: seoDesc,
        path: cleanPath,
        ogImage: {
            url: 'https://zlendorealty.com/assets/floor-planner/3d-sketch.webp',
            width: 1200,
            height: 630,
            alt: 'Zlendo Realty AI Floor Planner',
            type: 'image/webp',
        },
    });
}

// Static Defaults
const defaultFaqs = [
    {
        q: "What is the AI Floor Planner used for?",
        a: "The AI Floor Planner helps create accurate house plans and residential home plans digitally. Using professional floor plan design services, you can design rooms, walls, doors, and windows while visualizing the layout through realistic 3D house design and 3D architectural visualization."
    },
    {
        q: "Do I need architectural knowledge to use it?",
        a: "No. Our platform is designed as a home plan designer online, making it easy for beginners to create layouts using intuitive online home plan services without any architectural background."
    },
    {
        q: "Can I change the layout after creating the plan?",
        a: "Yes. You can modify your 2D house plan design anytime by resizing rooms, moving walls, or adjusting layouts. All changes are updated instantly, helping finalize accurate residential building plans."
    },
    {
        q: "Does it show a real-time 3D preview?",
        a: "Yes. The design updates instantly with a live 3D floor plan design, allowing you to experience realistic space planning through advanced 3D architectural visualization."
    },
    {
        q: "Can I share this with architects or contractors?",
        a: "Yes. You can save and share your architectural house plans and 3D layouts with architects, engineers, or contractors, supporting smooth coordination during civil and architectural design services."
    },
    {
        q: "Can I save multiple design options?",
        a: "Yes. You can store multiple versions of your custom floor plans online and compare layouts before finalizing the most suitable option for your modern custom home plans or residential project."
    }
];

const defaultWorkflowSteps = [
    { title: 'Imagine', desc: 'Concept', iconName: 'Sparkles' },
    { title: 'Design', desc: 'Layout', iconName: 'PenTool' },
    { title: 'Convert', desc: 'AI Processing', iconName: 'Zap' },
    { title: 'Customize', desc: 'Personalize', iconName: 'Layers' },
    { title: 'Experience', desc: 'Live Immersive', iconName: 'Home' },
];

const defaultDraftingFeatures = [
    'Intelligent Wall Snapping',
    'Auto-Dimensioning',
    'Drag & Drop Doors/Windows',
    'Multi-Story Support'
];

const defaultTemplateTags = ['3BHK North Facing', '2BHK Compact', 'Luxury Villa', 'Pooja Room Added'];

export default async function Page({ params }: Props) {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? `/products/floor-planner` : `/${country}/products/floor-planner`;
    const fullUrl = `${BASE_URL}${cleanPath}`;
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(floorPlannerPageQuery).catch(() => null);

    // Merge CMS values over static defaults
    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: { question: string; answer: string }) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const resolvedWorkflowSteps = cms?.workflowSteps?.length
        ? cms.workflowSteps
        : defaultWorkflowSteps;

    const resolvedDraftingFeatures = cms?.draftingFeatures?.length
        ? cms.draftingFeatures
        : defaultDraftingFeatures;

    const resolvedTemplateTags = cms?.templateTags?.length
        ? cms.templateTags
        : defaultTemplateTags;

    // Structured Data for SEO
    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": cms?.seoTitle ?? "Zlendo Realty Products Floor Planner - Frequently Asked Questions",
        "mainEntity": resolvedFaqs.map((faq: { q: string; a: string }) => ({
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
        "name": "Zlendo Realty AI Floor Planner",
        "applicationCategory": "DesignApplication",
        "applicationSubCategory": "Floor Planning Software",
        "operatingSystem": "Web",
        "url": fullUrl,
        "description": "AI-powered floor planning software that helps users create accurate 2D house plans, instantly convert them into immersive 3D designs, personalize layouts, and generate walkthrough-ready architectural visualizations.",
        "image": "https://zlendorealty.com/favicon.ico",
        "softwareVersion": "1.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "14-day free trial with full access and no credit card required"
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
            "2D floor plan drafting",
            "Instant 3D conversion",
            "AI-powered layout generation",
            "Live 3D preview",
            "Virtual walkthroughs",
            "Auto-dimensioning",
            "Multi-story planning",
            "CAD export support",
            "Drag-and-drop furniture placement",
            "Architectural visualization"
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
            <JsonLd schema={faqSchema} />
            <FloorPlannerClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedWorkflowSteps={resolvedWorkflowSteps}
                resolvedDraftingFeatures={resolvedDraftingFeatures}
                resolvedTemplateTags={resolvedTemplateTags}
            />
        </>
    );
}
