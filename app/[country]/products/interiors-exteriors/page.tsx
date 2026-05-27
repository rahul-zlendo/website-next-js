import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { interiorsExteriorsPageQuery } from '@/lib/sanity/queries';
import InteriorsExteriorsClient from './InteriorsExteriorsClient';
import JsonLd from '@/components/common/JsonLd';

const ModernPathwayImg = '/assets/interior-exterior/modern-pathway.webp';

interface PageProps {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(interiorsExteriorsPageQuery).catch(() => null);

    const isGlobal = country === 'global';
    const path = isGlobal ? '/products/interiors-exteriors' : `/${country}/products/interiors-exteriors`;

    return createPageMetadata({
        title: cms?.seoTitle || 'Interiors & Exteriors - Indian Homes. Indian Lifestyles.',
        description: cms?.seoDescription || 'Experience interior and exterior design intelligence that respects your culture, climate, and religious preferences across India.',
        path: path,
    });
}

export default async function InteriorsExteriorsPage({ params }: PageProps) {
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(interiorsExteriorsPageQuery).catch(() => null);

    const indianStates = [
        'Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Telangana', 'Andhra Pradesh', 'Delhi', 'Rajasthan', 'Punjab', 'West Bengal'
    ];

    const regionalDetails: Record<string, any> = {
        'Tamil Nadu': {
            climateTitle: 'Tropical Humidity',
            climateDesc: 'Ventilation-focused layouts with high ceilings and heat-reflective roof tiles.',
            cultureTitle: 'Traditional Courtyard',
            cultureDesc: 'Integration of Thinnai (porch) and Mutram (central courtyard) elements.'
        },
        'Kerala': {
            climateTitle: 'Monsoon Ready',
            climateDesc: 'Sloped roofs for heavy rain and laterite stone textures for humid durability.',
            cultureTitle: 'Nalukettu Logic',
            cultureDesc: 'Traditional wooden joinery and open verandas for cross-ventilation.'
        },
        'Karnataka': {
            climateTitle: 'Plateau Climate',
            climateDesc: 'Natural granite finishes and thermal-mass walls for cool nights and warm days.',
            cultureTitle: 'Functional Elegance',
            cultureDesc: 'Integration of stone-based entryways and decorative puja mantapas.'
        },
        'Maharashtra': {
            climateTitle: 'Coastal & Ghats',
            climateDesc: 'Corrosion-resistant metal fittings and stone cladding for varied weather.',
            cultureTitle: 'Urban Synergy',
            cultureDesc: 'Space-saving multi-functional rooms and modern-traditional fusion balconies.'
        },
        'Telangana': {
            climateTitle: 'Deccan Heat',
            climateDesc: 'Deep eaves and sun-shading pergolas to maintain cool indoor temperatures.',
            cultureTitle: 'Vibrant Layouts',
            cultureDesc: 'Grand entrances and spacious living areas for festive gatherings.'
        },
        'Andhra Pradesh': {
            climateTitle: 'Coastal Resilience',
            climateDesc: 'Salt-air resistant materials and wind-protected terrace designs.',
            cultureTitle: 'Vastu Excellence',
            cultureDesc: 'Precision-aligned layouts optimized for traditional prosperity principles.'
        },
        'Delhi': {
            climateTitle: 'Extreme Seasonal',
            climateDesc: 'Insulated double-glazed windows and thermal wall layering for hot & cold extremes.',
            cultureTitle: 'Metro Chic',
            cultureDesc: 'Sleek luxury finishes with maximized natural light and smart storage.'
        },
        'Rajasthan': {
            climateTitle: 'Arid Heat',
            climateDesc: 'Traditional Jali patterns for air cooling and thick sandstone walls.',
            cultureTitle: 'Royal Majesty',
            cultureDesc: 'Arch-based entryways and majestic courtyards inspired by Haveli styles.'
        },
        'Punjab': {
            climateTitle: 'Agricultural Hub',
            climateDesc: 'Large windows for winter sun and expansive farm-house style ventilation.',
            cultureTitle: 'Grand Scales',
            cultureDesc: 'Heirloom-friendly kitchen designs and large guest-receiving areas.'
        },
        'West Bengal': {
            climateTitle: 'Riverine Humidity',
            climateDesc: 'Raised plinths and breathable lime-plaster finishes for marshy areas.',
            cultureTitle: 'Artistic Heritage',
            cultureDesc: 'Terracotta tile accents and dedicated spaces for artistic displays.'
        }
    };

    const defaultInteriorCards = [
        {
            title: 'Walls & Finishes',
            features: ['Regional textures (Stone, Marble)', 'Climate-tested exterior paints', 'Designer wall cladding (PVC/Wood)', 'Indian-inspired decals & murals'],
            colorClass: 'teal'
        },
        {
            title: 'Essential Furniture',
            features: ['Custom-fit Wardrobes & TV Units', 'Traditional & Modern Pooja Units', 'Compact Dining & Crockery Units', 'Multipurpose Seating (Diwan/Sofa)'],
            colorClass: 'orange'
        },
        {
            title: 'Decorative Touches',
            features: ['Handpicked Indian Art Frames', 'Custom Lighting (Jhumars/Sconces)', 'Traditional Accent Walls', 'Rugs & Soft Furnishings'],
            colorClass: 'purple'
        }
    ];

    const defaultLandscapeCards = [
        { title: 'Courtyard Zen', desc: 'Indoor-outdoor living with native plants.', img: '/assets/interior-exterior/courtyard-zen.webp' },
        { title: 'Traditional Elements', desc: 'Tulsi maadam and stone statues.', img: '/assets/interior-exterior/traditional-elements.webp' },
        { title: 'Modern Pathways', desc: 'Stone paving and lawn integration.', img: ModernPathwayImg },
        { title: 'Leisure Spaces', desc: 'Garden swings and custom seating.', img: '/assets/interior-exterior/leisure-spaces.webp' }
    ];

    const defaultCulturePoints = [
        { title: 'Pooja Room Placement', desc: 'Vastu-compliant directions and specialized units designed for sacred spaces in every home.', colorTheme: 'teal' },
        { title: 'Traditional Motifs', desc: 'Integration of religious symbols and cultural art forms that hold deep personal meaning.', colorTheme: 'orange' },
        { title: 'Regional Rituals', desc: 'Spatial planning that considers local traditions like swing placement or entry-way rituals.', colorTheme: 'purple' }
    ];

    const defaultFaqs = [
        {
            q: "What does this feature help with?",
            a: "This feature helps you visualize both interior and exterior aspects of a building through realistic 3D architectural visualization, providing a complete design preview before construction."
        },
        {
            q: "Can I preview the building exterior?",
            a: "Yes. You can view elevations and external appearance using detailed 3D home elevation design and exterior elevation design, helping you make confident design decisions."
        },
        {
            q: "Does it support regional styles?",
            a: "Yes. Designs can be adapted to match local architectural preferences, making it ideal for Indian house plan design and region-specific residential projects."
        },
        {
            q: "Can I try different materials and colors?",
            a: "Yes. You can experiment with finishes, textures, and color combinations using realistic 3D rendering, helping finalize exterior and elevation designs accurately."
        },
        {
            q: "How does this help practically?",
            a: "Early 3D building visualization helps identify design issues in advance, reducing costly changes during construction and improving execution accuracy."
        },
        {
            q: "Can I share visuals with others?",
            a: "Yes. You can easily share design visuals with family members, clients, or stakeholders, making reviews and approvals faster and smoother."
        }
    ];

    const resolvedStates = cms?.regionalStates?.length ? cms.regionalStates.map((s: any) => s.state) : indianStates;
    const resolvedDetails = cms?.regionalStates?.length
        ? Object.fromEntries(cms.regionalStates.map((s: any) => [s.state, s]))
        : regionalDetails;

    const resolvedInteriorCards = cms?.interiorCards?.length ? cms.interiorCards : defaultInteriorCards;
    const resolvedLandscapeCards = cms?.landscapeCards?.length ? cms.landscapeCards : defaultLandscapeCards;
    const resolvedCulturePoints = cms?.culturePoints?.length ? cms.culturePoints : defaultCulturePoints;
    const resolvedFaqs = cms?.faqs?.length
        ? cms.faqs.map((f: any) => ({ q: f.question, a: f.answer }))
        : defaultFaqs;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Zlendo Realty Products Interiors & Exteriors - Frequently Asked Questions",
        "mainEntity": resolvedFaqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/products/interiors-exteriors' : `/${country}/products/interiors-exteriors`;
    const fullUrl = `https://zlendorealty.com${cleanPath}`;

    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Zlendo Realty Interiors & Exteriors",
        "applicationCategory": "DesignApplication",
        "applicationSubCategory": "AI Interior and Exterior Design Software",
        "operatingSystem": "Web",
        "url": fullUrl,
        "description": "AI-powered interior and exterior home design software that helps homeowners, architects, and builders create realistic 3D visualizations, customize layouts, explore materials, generate photorealistic renders, and preview immersive walkthroughs instantly.",
        "image": "https://zlendorealty.com/favicon.ico",
        "softwareVersion": "1.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free online AI-powered interior and exterior design platform"
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
            "AI-powered interior design",
            "Exterior elevation visualization",
            "2D to 3D conversion",
            "Photorealistic rendering",
            "Interactive virtual walkthroughs",
            "Material and texture customization",
            "Furniture and decor placement",
            "Landscape visualization",
            "Lighting and shadow simulation",
            "Modern and traditional design themes",
            "Real-time design previews",
            "Export-ready architectural visuals"
        ]
    };

    return (
        <>
            <JsonLd schema={faqSchema} />
            <JsonLd schema={softwareApplicationSchema} />
            <InteriorsExteriorsClient
                cms={cms}
                resolvedStates={resolvedStates}
                resolvedDetails={resolvedDetails}
                resolvedInteriorCards={resolvedInteriorCards}
                resolvedLandscapeCards={resolvedLandscapeCards}
                resolvedCulturePoints={resolvedCulturePoints}
                resolvedFaqs={resolvedFaqs}
            />
        </>
    );
}

