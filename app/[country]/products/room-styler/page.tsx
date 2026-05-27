import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { roomStylerPageQuery } from '@/lib/sanity/queries';
import RoomStylerClient from './RoomStylerClient';
import JsonLd from '@/components/common/JsonLd';

const ScandinavianImg = '/assets/room-styler/scandinavian.webp';
const UploadRoomImg = '/assets/2d-to-3d/upload-floorplan.webp';
const AIInspirationImg = '/assets/Home-Page/ai-room-inspirtion.webp';
const FinalRenderImg = '/assets/Home-Page/living-room/scandinavian-style.webp';

interface PageProps {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(roomStylerPageQuery).catch(() => null);

    const isGlobal = country === 'global';
    const path = isGlobal ? '/products/room-styler' : `/${country}/products/room-styler`;

    return createPageMetadata({
        title: cms?.seoTitle || 'Smart Room Styler - AI-driven Interior Design',
        description: cms?.seoDescription || 'AI-driven interior design at your fingertips. Visualize different styles, furniture layouts, and color palettes instantly.',
        path: path,
    });
}

export default async function RoomStylerPage({ params }: PageProps) {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/products/room-styler' : `/${country}/products/room-styler`;
    const fullUrl = `https://zlendorealty.com${cleanPath}`;

    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(roomStylerPageQuery).catch(() => null);

    const defaultFaqs = [
        {
            q: "What does Smart Room Styler do?",
            a: "Smart Room Styler automatically suggests furniture layouts, colors, lighting, and décor to help you visualize beautiful interiors using realistic interior 3D design services and advanced 3D architectural visualization."
        },
        {
            q: "Can I choose the design style?",
            a: "Yes. You can select from multiple styles such as modern, traditional, minimal, and contemporary. The system adapts the design to match your preferred interior theme."
        },
        {
            q: "Can I change the suggested furniture?",
            a: "Yes. All elements remain fully customizable. You can modify furniture placement, décor, and layout to create a personalized interior using custom 3D house design tools."
        },
        {
            q: "Does it work for all rooms?",
            a: "Yes. Smart Room Styler supports living rooms, bedrooms, kitchens, home offices, and more, making it suitable for complete residential 3D design services."
        },
        {
            q: "Does it force me to buy products?",
            a: "No. The tool is purely for visual inspiration and planning. It helps you explore interior ideas through 3D design visualization without any purchase obligation."
        },
        {
            q: "Is it useful if I already have ideas?",
            a: "Yes. It helps refine, compare, and validate your ideas visually using realistic 3D rendering, improving clarity before final execution."
        }
    ];

    const defaultSteps = [
        {
            title: 'Select Room',
            desc: 'Choose an existing room model or upload a photo of your empty space.',
            image: UploadRoomImg,
            alt: 'Select room for interior customization and design editing'
        },
        {
            title: 'Choose Style',
            desc: 'Select from our curated list of interior design styles or create your own custom mood board.',
            image: ScandinavianImg,
            alt: 'Choose interior design style for personalized home layout'
        },
        {
            title: 'AI Composition',
            desc: 'Our AI engine arranges furniture and decor to match the selected style perfectly.',
            image: AIInspirationImg,
            alt: 'AI composition creating realistic interior and architectural layouts'
        },
        {
            title: 'Finalize Look',
            desc: 'Adjust individual items and generate a high-quality photorealistic image.',
            image: FinalRenderImg,
            alt: 'Finalize home design with materials, textures, and visual styling'
        }
    ];

    const defaultFeatures = [
        { title: 'Style Transfer', desc: 'Apply "Modern", "Boho", or "Industrial" themes with one click.' },
        { title: 'Furniture Catalog', desc: 'Access 1000+ real-world furniture items to place in your room.' },
        { title: 'Lighting Simulation', desc: 'See how your room looks at sunrise, sunset, or night.' },
        { title: 'Material Swapping', desc: 'Instantly change flooring, wall paints, and textures.' }
    ];

    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: any) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const resolvedSteps = cms?.steps?.length ? cms.steps : defaultSteps;
    const resolvedFeatures = cms?.features?.length ? cms.features : defaultFeatures;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Zlendo Realty Products Smart Room Styler - Frequently Asked Questions",
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
        "name": "Zlendo Realty Smart Room Styler",
        "applicationCategory": "DesignApplication",
        "applicationSubCategory": "AI Interior Design Software",
        "operatingSystem": "Web",
        "url": fullUrl,
        "description": "AI-powered room styling software that helps homeowners, architects, and interior designers instantly redesign rooms with smart furniture placement, realistic materials, color themes, and immersive 3D visualizations.",
        "image": "https://zlendorealty.com/favicon.ico",
        "softwareVersion": "1.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free online AI room styling and interior visualization tool"
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
            "AI-powered room styling",
            "Instant interior redesign",
            "Smart furniture arrangement",
            "Realistic material previews",
            "Color palette customization",
            "3D room visualization",
            "Interactive walkthroughs",
            "Modern and traditional style themes",
            "Drag-and-drop interior editing",
            "Photorealistic rendering"
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
            <JsonLd schema={faqSchema} />
            <RoomStylerClient
                cms={cms}
                resolvedFaqs={resolvedFaqs}
                resolvedSteps={resolvedSteps}
                resolvedFeatures={resolvedFeatures}
            />
        </>
    );
}

