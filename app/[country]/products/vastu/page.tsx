import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { vastuPageQuery } from '@/lib/sanity/queries';
import VastuClient from './VastuClient';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/common/JsonLd';

interface PageProps {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(vastuPageQuery).catch(() => null);

    const isGlobal = country === 'global';
    const path = isGlobal ? '/products/vastu' : `/${country}/products/vastu`;

    return createPageMetadata({
        title: cms?.seoTitle || 'Vastu Optimizer - Align Your Home with Ancient Wisdom',
        description: cms?.seoDescription || 'Combine modern design with Vastu Shastra principles. Our automated analysis ensures your home brings health, wealth, and harmony.',
        path: path,
    });
}

export default async function VastuPage({ params }: PageProps) {
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

    return (
        <>
            <JsonLd schema={faqSchema} />
            <VastuClient 
                cms={cms} 
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}

