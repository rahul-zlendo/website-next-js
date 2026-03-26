import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { Sparkles, PenTool, Zap, Layers, Home } from 'lucide-react';
import { getClient } from '@/lib/sanity/client';
import { floorPlannerPageQuery } from '@/lib/sanity/queries';
import FloorPlannerClient from './FloorPlannerClient';

const BASE_URL = 'https://zlendorealty.com';
const COUNTRY = 'in';

// Revalidate every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

// Helper to build country-prefixed paths
function getPath(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (cleanPath === '/') return `/${COUNTRY}`;
    return `/${COUNTRY}${cleanPath}`;
}

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    let cmsSeo: Record<string, any> | null = null;
    try {
        cmsSeo = await getClient(false).fetch(floorPlannerPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cmsSeo?.seoTitle ?? 'Zlendo Realty Products Floor Planer - Design Your Home in 3D';
    const seoDesc = cmsSeo?.seoDescription ?? 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI. Experience your space before a single brick is laid.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/products/floor-planner`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
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
        "name": cms?.seoTitle ?? "Zlendo Realty Products Floor Planer - Frequently Asked Questions",
        "mainEntity": resolvedFaqs.map((faq: { q: string; a: string }) => ({
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
