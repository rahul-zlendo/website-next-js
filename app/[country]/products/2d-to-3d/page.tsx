import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { correctLegacyProductCopy } from '@/lib/seo/product-copy';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { twoDTo3DPageQuery } from '@/lib/sanity/queries';
import TwoDTo3DClient from './TwoDTo3DClient';
import JsonLd from '@/components/common/JsonLd';

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

    const title = cmsSeo?.seoTitle || '2D to 3D Floor Plan Converter | Zlendo Realty';
    const description = correctLegacyProductCopy(cmsSeo?.seoDescription) || 'Turn a supported 2D floor plan into a 3D home view. Explore upload formats, editable layouts, example results and conversion limits with Zlendo Realty.';

    return createPageMetadata({
        title,
        description,
        path: path,
        ogImage: {
            url: 'https://zlendorealty.com/assets/2d-to-3d/after-render.webp',
            width: 1200,
            height: 800,
            alt: 'Zlendo Realty 2D to 3D Floor Plan Converter Before & After Render',
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
            a: "The 2D to 3D converter automatically transforms 2D house plan designs, sketches, and architectural blueprints into realistic 3D home designs. Users can visualize room volumes, circulation flow, and structural layout through real-time 3D walkthroughs."
        },
        {
            q: "What file formats are supported for upload?",
            a: "You can upload architectural floor plans in PDF, JPG, and PNG formats. Clean black-and-white line drawings yield the highest detection accuracy. Direct DWG file upload is currently on our product roadmap."
        },
        {
            q: "How accurate is the automated 3D conversion?",
            a: "Our Vision AI recognizes wall outlines, openings, and room boundaries with high fidelity. Because real-world scans can vary in line quality and resolution, we recommend reviewing wall positions, doors, and room dimensions in our browser editor before using the layout for construction or client presentations."
        },
        {
            q: "What export formats are supported, and what are the plan limits?",
            a: "Free trial accounts include interactive WebGL 3D walkthrough previews and 1 active project draft. Paid plans allow exporting scaled 2D layout PDFs, high-resolution PNG renders, 4K presentation images, and 2D DXF vector CAD files compatible with AutoCAD and Revit."
        },
        {
            q: "What is included in the free trial?",
            a: "We offer a 14-day free trial with full drafting access, automated 2D-to-3D wall generation, and interactive 3D walkthroughs without requiring a credit card. Paid subscriptions for CAD export and 4K rendering start at ₹499/month for India users (detailed on /in/plans)."
        },
        {
            q: "How do Instant Budgets and cost estimates work in India?",
            a: "Instant Budgets provide indicative cost ranges based on standard regional material rates (CPWD and market benchmarks in metro India). These estimates reflect editable room area and fixture quantities, but exclude site-specific structural masonry, civil labor, local taxes, and custom joinery. A qualified contractor should always verify final project estimates."
        }
    ];

    // SEO Optimized steps
    const defaultSteps = [
        {
            title: 'Upload Floor Plan',
            desc: 'Upload your 2D floor plan in PDF, JPG, or PNG format. Our Vision AI scans wall geometry and structural openings in ~15–30 seconds.',
            image: '/assets/2d-to-3d/upload-floorplan.webp',
            alt: 'Upload 2D floor plan sketch for AI 3D conversion'
        },
        {
            title: 'AI 3D Wall Generation',
            desc: 'AI extrudes lines into 3D walls, doors, and windows in ~30–90 seconds. You can review and refine parametric dimensions directly in the browser.',
            image: '/assets/Home-Page/2d-to-3d-convertor.webp',
            alt: 'AI-powered automatic floor plan to 3D model conversion'
        },
        {
            title: 'Furnish & Decorate',
            desc: 'Drag and drop furniture and fixtures from our library of 10,000+ assets tailored to modern and Indian residential layouts.',
            image: '/assets/2d-to-3d/furnish.webp',
            alt: 'Customizing 3D interior design with furniture and materials'
        },
        {
            title: 'Export Scaled CAD & 4K Renders',
            desc: 'Export client-ready deliverables: scaled PDF prints, 2D DXF CAD files for AutoCAD/Revit, or photorealistic 4K renders on Pro plans.',
            image: '/assets/Home-Page/3d-export-toolkit.webp',
            alt: 'Exporting high-quality 3D renders and CAD files for real estate presentation'
        }
    ];

    const defaultFeatures = [
        { title: 'AI Wall Detection', desc: 'Identifies walls, windows, and doors from PDF, JPG, and PNG uploads. Review and adjust geometry before finalizing.' },
        { title: 'Real-Time 3D Editing', desc: 'Modify walls, adjust room heights, and customize floor finishes instantly in your browser.' },
        { title: 'CAD & PDF Export', desc: 'Export completed models to scaled 2D DXF vector CAD and high-resolution PDF documents.' },
        { title: 'Photorealistic Cloud Rendering', desc: 'High-speed cloud rendering produces 4K presentation images and 360° virtual tours.' }
    ];

    // Merge CMS values over static defaults
    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: { question: string; answer: string }) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const resolvedSteps = cms?.steps?.length
        ? cms.steps.map((s: { title: string; desc: string; image: string }) => ({ title: s.title, desc: s.desc, image: s.image }))
        : defaultSteps;

    const resolvedFeatures = cms?.features?.length
        ? cms.features.map((f: { title: string; desc: string }) => ({ title: correctLegacyProductCopy(f.title), desc: correctLegacyProductCopy(f.desc) }))
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
        "description": "AI-powered 2D to 3D conversion software that transforms floor plans, sketches, PDFs, and architectural drawings into immersive 3D home designs, walkthroughs, and realistic visualizations.",
        "image": "https://zlendorealty.com/assets/2d-to-3d/after-render.webp",
        "softwareVersion": "1.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": isGlobal ? "USD" : "INR",
            "description": "14-day free trial with full drafting access and 3D preview. Paid CAD export and 4K rendering plans start at ₹499/mo (details on /in/plans)."
        },
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
            "PDF, JPG and PNG upload support",
            "Interactive 3D walkthroughs",
            "Smart room detection",
            "Automatic wall and door generation",
            "High-fidelity 3D rendering",
            "Editable 3D layouts",
            "Export to scaled PDF and DXF CAD formats",
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

