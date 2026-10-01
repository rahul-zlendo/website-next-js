import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { twoDTo3DPageQuery } from '@/lib/sanity/queries';
import TwoDTo3DClient from './TwoDTo3DClient';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

// Revalidate every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const path = isGlobal ? '/products/2d-to-3d' : '/in/products/2d-to-3d';

    // Fetch SEO data from Sanity
    let cmsSeo: Record<string, any> | null = null;
    try {
        cmsSeo = await getClient(false).fetch(twoDTo3DPageQuery);
    } catch { /* fallback */ }

    let title = cmsSeo?.seoTitle || "2D to 3D Converter - Instant Architectural Visualization";
    const description = cmsSeo?.seoDescription || "Instantly convert 2D floor plans into interactive 3D models. Best online 3D home design software for architects, builders, and individuals. Start free today!";

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
            url: 'https://zlendorealty.com/assets/2d-to-3d/after-render.webp',
            width: 1200,
            height: 630,
            alt: 'Zlendo Realty 2D to 3D Converter',
            type: 'image/webp',
        },
    });
}

export default async function TwoDToThreeDPage({ params }: Props) {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/products/2d-to-3d' : '/in/products/2d-to-3d';
    const fullUrl = `https://zlendorealty.com${cleanPath}`;

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

    // SEO Optimized steps
    const defaultSteps = [
        {
            title: 'Upload Floor Plan',
            desc: 'Simply upload your 2D floor plan in JPG, PNG, or PDF format. Our AI recognizes the layout immediately.',
            image: '/assets/2d-to-3d/upload-floorplan.webp',
            alt: 'Upload 2D floor plan sketch for AI 3D conversion'
        },
        {
            title: 'AI Processing',
            desc: 'Advanced algorithms convert lines and shapes into 3D walls, doors, and windows in seconds.',
            image: '/assets/Home-Page/2d-to-3d-convertor.webp',
            alt: 'AI-powered automatic floor plan to 3D model conversion'
        },
        {
            title: 'Furnish & Decorate',
            desc: 'Drag and drop furniture from our massive 3D library to style the room to your taste.',
            image: '/assets/2d-to-3d/furnish.webp',
            alt: 'Customizing 3D interior design with furniture and materials'
        },
        {
            title: 'Render & Export',
            desc: 'Generate 4K renderings or export the model to other CAD software for further refinement.',
            image: '/assets/Home-Page/3d-export-toolkit.webp',
            alt: 'Exporting high-quality 3D renders for real estate presentation'
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

    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Zlendo Realty 2D to 3D Converter",
        "applicationCategory": "DesignApplication",
        "applicationSubCategory": "3D Home Design Software",
        "operatingSystem": "Web",
        "url": fullUrl,
        "description": "AI-powered 2D to 3D conversion software that transforms floor plans, sketches, PDFs, and architectural drawings into immersive 3D home designs, walkthroughs, and realistic visualizations instantly.",
        "image": "https://zlendorealty.com/favicon.ico",
        "softwareVersion": "1.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free online 2D to 3D conversion tool"
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
            "AI-powered 2D to 3D conversion",
            "Floor plan to 3D visualization",
            "PDF and image upload support",
            "Interactive 3D walkthroughs",
            "Smart room detection",
            "Automatic wall and door generation",
            "High-fidelity 3D rendering",
            "Editable 3D layouts",
            "Export-ready 3D models",
            "Realistic materials and lighting"
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
            <JsonLd schema={faqSchema} />
            <TwoDTo3DClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}

