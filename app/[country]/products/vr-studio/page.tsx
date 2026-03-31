import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { vrStudioPageQuery } from '@/lib/sanity/queries';
import VRStudioClient from './VRStudioClient';

export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();

    let cmsSeo: any = null;
    try {
        cmsSeo = await getClient(preview).fetch(vrStudioPageQuery);
    } catch { /* fallback */ }

    const title = cmsSeo?.seoTitle || "8K VR Studio - Immersive Home Experiences | Zlendo Realty";
    const description = cmsSeo?.seoDescription || "Step inside your design with hyper-realistic VR. Compatible with Meta Quest, Apple Vision Pro, and web browsers.";

    return {
        title,
        description,
        alternates: {
            canonical: `https://zlendorealty.com/${country}/products/vr-studio`,
        },
    };
}

export default async function VRStudioPage({ params }: Props) {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms: any = await getClient(preview).fetch(vrStudioPageQuery).catch(() => null);

    const defaultFaqs = [
        { q: "Is this tool free to use?", a: "Yes! You can start for free and design your first project without any credit card. Premium textures and high-res renders are available in paid plans." },
        { q: "Do I need to install any software?", a: "No, Zlendo Realty runs entirely in your browser. It works smoothly on Chrome, Firefox, and Safari on both Windows and Mac." },
        { q: "Can I import my own CAD files?", a: "Absolutely. We support DXF, DWG, JPG, PNG, and PDF formats for seamless import." },
        { q: "How accurately are the costs estimated?", a: "Our cost engine is updated weekly with local market rates for materials and labor, ensuring 95%+ accuracy for your zip code." }
    ];

    const defaultSteps = [
        { title: 'Import Model', desc: 'Load your 3D model into our VR engine.', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800' },
        { title: 'Configure Environment', desc: 'Set lighting, weather, and time of day.', image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff8c367?auto=format&fit=crop&q=80&w=800' },
        { title: 'Generate Link', desc: 'Create a shareable web link for instant access.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
        { title: 'Enter VR', desc: 'Put on your headset and step inside.', image: 'https://images.unsplash.com/photo-1626387200548-bf8ed410ebc3?auto=format&fit=crop&q=80&w=800' }
    ];

    const defaultFeatures = [
        { title: 'Immersive Walkthrough', desc: 'Full 6DOF movement within your designed space.' },
        { title: 'Material Swapping', desc: 'Change floors and walls in real-time while in VR.' },
        { title: 'Cloud Rendering', desc: 'Stream high-fidelity visuals without a powerful PC.' },
        { title: 'Multi-User', desc: 'Invite clients to walk through the design with you.' }
    ];

    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: any) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const resolvedSteps = cms?.steps?.length ? cms.steps : defaultSteps;
    const resolvedFeatures = cms?.features?.length ? cms.features : defaultFeatures;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Zlendo Realty Products VR Studio - Frequently Asked Questions",
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
            <VRStudioClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}
