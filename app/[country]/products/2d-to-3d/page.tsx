import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { twoDTo3DPageQuery } from '@/lib/sanity/queries';
import TwoDTo3DClient from './TwoDTo3DClient';

// Revalidate every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    // Fetch SEO data from Sanity
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cmsSeo: Record<string, any> | null = null;
    try {
        cmsSeo = await getClient(false).fetch(twoDTo3DPageQuery);
    } catch { /* fallback */ }

    const title = cmsSeo?.seoTitle || "2D to 3D Converter - Instant Architectural Visualization";
    const description = cmsSeo?.seoDescription || "Instantly convert 2D floor plans into interactive 3D models. Best online 3D home design software for architects, builders, and individuals. Start free today!";

    return {
        title,
        description,
        alternates: {
            canonical: `https://zlendorealty.com/${country}/products/2d-to-3d`,
        },
        openGraph: {
            title,
            description,
            url: `https://zlendorealty.com/${country}/products/2d-to-3d`,
            siteName: 'Zlendo Realty',
            images: [
                {
                    url: 'https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&q=80&w=1200', // Default ogImage
                    width: 1200,
                    height: 630,
                    alt: 'Zlendo Realty 2D to 3D Converter',
                },
            ],
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function TwoDToThreeDPage() {
    const { isEnabled: preview } = await draftMode();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cms: Record<string, any> | null = await getClient(preview).fetch(twoDTo3DPageQuery).catch(() => null);

    const defaultFaqs = [
        {
            q: "What does the 2D to 3D converter do?",
            a: "The 2D to 3D converter automatically transforms 2D house plan designs into realistic 3D house designs, helping users clearly visualize layout, structure, and spatial flow through accurate 3D architectural visualization."
        },
        {
            q: "What file formats are supported?",
            a: "You can upload JPG, PNG, scanned drawings, and PDF floor plans. These files can be converted into editable layouts using our online home plan services and 3D design services in India."
        },
        {
            q: "Do I need to redraw the plan?",
            a: "No. Simply upload your existing house plan or drawing. The system converts it automatically, saving time and effort during the home plan design process."
        },
        {
            q: "How accurate is the conversion?",
            a: "The converted model closely follows your original house plan layout and room proportions. You can manually refine dimensions and details to finalize precise residential building plans."
        },
        {
            q: "Can I edit the 3D model after conversion?",
            a: "Yes. The converted design remains fully editable. You can customize layouts, walls, and interiors to create a truly custom 3D house design."
        },
        {
            q: "Who typically uses this feature?",
            a: "This feature is widely used by homeowners, architects, builders, and real estate professionals for planning, presentation, and professional architectural design services."
        }
    ];

    const defaultSteps = [
        {
            title: 'Upload Floor Plan',
            desc: 'Simply upload your 2D floor plan in JPG, PNG, or PDF format. Our AI recognizes the layout immediately.',
            image: '/assets/2d-to-3d/upload-floorplan.png'
        },
        {
            title: 'AI Processing',
            desc: 'Advanced algorithms convert lines and shapes into 3D walls, doors, and windows in seconds.',
            image: '/assets/Home-Page/2d-to-3d-convertor.png'
        },
        {
            title: 'Furnish & Decorate',
            desc: 'Drag and drop furniture from our massive 3D library to style the room to your taste.',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Render & Export',
            desc: 'Generate 4K renderings or export the model to other CAD software for further refinement.',
            image: '/assets/Home-Page/3d-export-toolkit.png'
        }
    ];

    const defaultFeatures = [
        { title: 'AI Wall Detection', desc: 'Automatically identifies walls, windows, and doors with 99% accuracy.' },
        { title: 'Real-Time Editing', desc: 'Modify the generated 3D model instantly in your browser.' },
        { title: 'DWG/PDF Import', desc: 'Support for professional CAD formats and hand-drawn sketches.' },
        { title: 'Cloud Rendering', desc: 'High-speed cloud rendering for photorealistic outputs.' }
    ];

    // Merge CMS values over static defaults
    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: { question: string; answer: string }) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const resolvedSteps = cms?.steps?.length
        ? cms.steps.map((s: { title: string; desc: string; image: string }) => ({ title: s.title, desc: s.desc, image: s.image }))
        : defaultSteps;

    const resolvedFeatures = cms?.features?.length
        ? cms.features.map((f: { title: string; desc: string }) => ({ title: f.title, desc: f.desc }))
        : defaultFeatures;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Zlendo Realty Products 2D to 3D Converter - Frequently Asked Questions",
        "mainEntity": resolvedFaqs.map(faq => ({
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
            <TwoDTo3DClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}

