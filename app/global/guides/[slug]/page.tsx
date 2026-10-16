// Global version of the guides page — mirrors [country]/guides/[slug]/page.tsx
// with path set to /guides/[slug] (no country prefix).
import { Metadata } from 'next';
import { getClient } from '@/lib/sanity/client';
import { articlePageQuery } from '@/lib/sanity/queries';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import ArticlePageClient, { ArticleDefaults } from '@/components/pages/ArticlePageClient';
import JsonLd from '@/components/common/JsonLd';
import { SIGNUP_URL } from '@/lib/config/env';

export const revalidate = 60;

const KNOWN_SLUGS = [
  'vastu-design-software',
  'how-to-create-floor-plan-online',
  '9d-visualization',
];

export async function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getClient(false).fetch(articlePageQuery, { slug }).catch(() => null);
  const defaults = getArticleDefaults(slug);
  const title = cms?.seoTitle ?? defaults.seoTitle;
  const description = cms?.seoDescription ?? defaults.seoDescription;
  return createPageMetadata({
    title,
    description,
    path: `/guides/${slug}`,
    keywords: cms?.seoKeywords ?? defaults.seoKeywords,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { isEnabled: preview } = await draftMode();
  const cms = await getClient(preview).fetch(articlePageQuery, { slug }).catch(() => null);
  const defaults = getArticleDefaults(slug);

  const title = cms?.seoTitle ?? defaults.seoTitle;
  const description = cms?.seoDescription ?? defaults.seoDescription;
  const faqs = (cms?.faqs?.length ? cms.faqs : defaults.faqs) as Array<{ question: string; answer: string }>;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Organization', name: 'Zlendo Realty' },
    publisher: {
      '@type': 'Organization',
      name: 'Zlendo Realty',
      url: 'https://zlendorealty.com',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={faqSchema} />
      <ArticlePageClient cms={cms} slug={slug} defaults={defaults} signupUrl={SIGNUP_URL} />
    </>
  );
}

// ── Default content (re-exported from [country] version for DRY) ─────────────
// Keeping inline here to avoid cross-app-directory imports which Next.js may not
// handle correctly across route segments.

function getArticleDefaults(slug: string): ArticleDefaults {
  const map: Record<string, ArticleDefaults> = {
    'vastu-design-software': {
      articleType: 'guide',
      heroBadge: 'Complete Guide 2025',
      heroTitle: 'Vastu Design Software:',
      heroTitleHighlight: 'The Complete Guide',
      heroSubtitle: 'Everything you need to know about AI-powered vastu analysis software — how it works, what to look for, and which tools are best for Indian architects and interior designers.',
      heroCtaLabel: 'Try Zlendo Realty Free',
      keyTakeaways: [
        'Vastu Shastra is followed in 70%+ of Indian home-building decisions',
        'AI vastu software can analyse a floor plan in under 60 seconds',
        'Zlendo Realty is the only major design platform with built-in AI vastu analysis',
        'Vastu compliance can increase a property\'s resale value by 10–15% in the Indian market',
        'Traditional vastu consultants charge ₹5,000–₹50,000 per project — AI reduces this cost significantly',
      ],
      stats: [
        { value: '70%', label: 'Indian homes built with vastu principles' },
        { value: '60s', label: 'Time to analyse a floor plan with AI vastu' },
        { value: '₹50K', label: 'Traditional vastu consultant fees saved per project' },
        { value: '15%', label: 'Property value uplift from vastu compliance in India' },
      ],
      sections: [
        { heading: 'What Is Vastu Shastra?', body: 'Vastu Shastra is India\'s ancient architectural science that aligns a building\'s design with the five elements — earth, water, fire, air, and space. Originating over 5,000 years ago from Vedic traditions, vastu principles dictate the ideal orientation, room placement, door/window positions, and spatial proportions for homes and commercial buildings. In modern India, vastu compliance is a commercial reality. Over 70% of Indian homebuyers factor vastu compliance into their purchasing decisions.' },
        { heading: 'Why Vastu Design Software Matters in 2025', body: 'Traditional vastu consultations require a qualified consultant to manually assess a floor plan — a process that can take days and cost ₹5,000–₹50,000 per project. AI-powered vastu design software analyses floor plans in seconds, flags compliance issues, and suggests corrections automatically.' },
        { heading: 'What to Look For in Vastu Design Software', body: 'Key criteria: (1) Automated analysis. (2) Specific vastu rules coverage — direction mapping, room placement, entrance analysis, five-element balancing. (3) Actionable corrections. (4) Integration with your design workflow. (5) Accuracy — verify the software\'s vastu rulebook against established Vastu Shastra texts.' },
        { heading: 'How AI Vastu Analysis Works', body: "AI vastu software uses machine learning trained on Vastu Shastra principles to evaluate floor plan images or CAD files. In Zlendo Realty's implementation, the AI vastu module analyses a 2D floor plan in under 60 seconds and produces a detailed vastu report including zone mapping, compliance percentage, and room-by-room recommendations." },
        { heading: "Zlendo Realty: India's Only Integrated Vastu Design Platform", body: 'Most design software — including Foyr Neo, RoomSketcher, and Coohom — have zero vastu capability. Zlendo Realty is the only major design platform with built-in AI Vastu analysis, working directly within the design environment in real time.' },
        { heading: 'Vastu Design Software Pricing in India', body: "Standalone vastu analysis tools charge ₹500–₹2,000 per report. Traditional consultants charge ₹5,000–₹50,000 per project. Zlendo Realty's integrated approach includes vastu analysis from ₹999/month — savings of ₹2 lakh+ annually for firms with 5+ projects per month." },
      ],
      faqs: [
        { question: 'What is the best vastu design software in India?', answer: 'Zlendo Realty is the only major design platform with built-in AI Vastu analysis. Other tools — Foyr Neo, RoomSketcher, Coohom — have no vastu capability.' },
        { question: 'Can AI software replace a vastu consultant?', answer: 'AI vastu software significantly reduces the need for manual vastu consultations for standard residential projects. For complex projects, a human expert can add cultural context.' },
        { question: 'Is vastu compliance a legal requirement in India?', answer: 'Vastu compliance is not a legal requirement — it is a cultural and commercial expectation. Non-compliance can reduce sale price or extend time on market.' },
        { question: 'How accurate is AI vastu analysis?', answer: "Zlendo Realty's AI Vastu module is trained on Vastu Shastra principles covering all major zones, directions, and element placements, with room-level specificity." },
        { question: 'How long does vastu analysis take?', answer: "Traditional consultants: 1–3 days. Zlendo Realty's AI module: under 60 seconds." },
        { question: "Does Zlendo Realty's vastu tool work for commercial buildings?", answer: "The vastu analysis handles both residential and commercial properties, though residential analysis is the most mature feature." },
      ],
      ctaTitle: 'Analyse Your Floor Plan for Vastu in 60 Seconds',
      ctaBody: "Zlendo Realty is India's only major design platform with built-in AI Vastu analysis. Try free for 14 days.",
      ctaLabel: 'Start Free Trial',
      seoTitle: 'Vastu Design Software: Complete Guide 2025 | Zlendo Realty',
      seoDescription: 'Complete guide to vastu design software in India. Learn how AI vastu analysis works, what to look for, and why Zlendo Realty is the only platform with built-in vastu.',
      seoKeywords: ['vastu design software', 'ai vastu analysis', 'vastu software india'],
    },

    'how-to-create-floor-plan-online': {
      articleType: 'how-to',
      heroBadge: 'Step-by-Step Guide',
      heroTitle: 'How to Create a Floor Plan Online:',
      heroTitleHighlight: 'Complete Step-by-Step Guide',
      heroSubtitle: 'A practical guide to creating professional 2D and 3D floor plans online — from uploading an existing plan to designing from scratch.',
      heroCtaLabel: 'Try Zlendo Realty Free',
      keyTakeaways: [
        'You can create a professional floor plan online in under 30 minutes using AI tools',
        'AI 2D-to-3D conversion eliminates hours of manual 3D modelling',
        'Online floor plan tools start from ₹999/month — far cheaper than traditional CAD software',
        'A floor plan with 3D preview increases client approval rates by up to 80%',
        'No architectural training is required to use modern AI floor plan tools',
      ],
      stats: [
        { value: '30min', label: 'To create a professional floor plan with AI tools' },
        { value: '80%', label: 'Faster client approval with 3D floor plans vs 2D' },
        { value: '₹999', label: 'Starting monthly cost for AI floor plan software' },
        { value: '3×', label: 'More projects completed per month with AI tools' },
      ],
      sections: [
        { heading: 'Step 1: Choose Your Floor Plan Method', body: 'Two starting points: (A) Upload an existing floor plan — PDF, DWG, or image. (B) Draw from scratch using the online editor with smart snap features.' },
        { heading: 'Step 2: Set the Right Dimensions and Scale', body: 'Set your site dimensions before placing rooms. Standard Indian 2BHK: 800–1,200 sq ft. 3BHK: 1,200–1,800 sq ft. Standard wall thickness: 230mm exterior, 115mm interior.' },
        { heading: 'Step 3: Place Rooms and Walls', body: 'Start with exterior walls, then interior room dividers. Per vastu: kitchen in the east/south-east, bathrooms in the west/north-west, bedrooms in the private zone.' },
        { heading: 'Step 4: Add Doors, Windows, and Openings', body: 'Main entrance should face north, east, or north-east per vastu. Standard Indian door widths: main 1,050–1,200mm, internal 900mm, bathroom 750mm.' },
        { heading: 'Step 5: Convert to 3D (the AI Step)', body: "Once the 2D floor plan is complete, click convert. In Zlendo Realty, AI generates a full 3D model in under 60 seconds — replacing hours of manual 3D modelling in traditional tools." },
        { heading: 'Step 6: Customise and Add Furnishings', body: 'Place furniture starting with largest pieces. Add ceiling heights (standard 2,750mm in India), flooring materials, and wall finishes. Vastu tip: avoid beds under beams, keep north-east corner light.' },
        { heading: 'Step 7: Generate Renders and Share', body: "Generate photorealistic renders with Zlendo Realty's 60-second AI render engine. Share via direct link — no download required. Export floor plan, renders, and vastu report in one package." },
      ],
      faqs: [
        { question: 'What is the best free floor plan software?', answer: 'Coohom and Planner 5D have permanent free plans. Zlendo Realty offers a 14-day full-access trial.' },
        { question: 'Can I create a floor plan on my phone?', answer: 'Most professional tools are optimised for desktop. Zlendo Realty works on tablets but a desktop is recommended for accuracy.' },
        { question: 'How long does it take to create a floor plan?', answer: 'With AI tools: 20–40 minutes from scratch, or 5–10 minutes from an uploaded sketch. The 3D conversion adds under 2 minutes.' },
        { question: 'Do I need to know architecture to create a floor plan?', answer: 'No. Modern AI floor plan tools are designed for non-architects.' },
        { question: 'What file formats can I import?', answer: "PDF, JPEG/PNG, and DWG/DXF. Zlendo Realty's AI processes all these formats automatically." },
        { question: 'How do I add vastu to my floor plan?', answer: "Zlendo Realty's AI Vastu module analyses your floor plan in real time as you design. Other tools require a separate vastu consultation." },
      ],
      ctaTitle: 'Create Your First Floor Plan in 30 Minutes',
      ctaBody: 'Zlendo Realty — AI 2D-to-3D conversion, vastu analysis, and 60-second renders. Free for 14 days.',
      ctaLabel: 'Start Free Trial',
      seoTitle: 'How to Create a Floor Plan Online: Step-by-Step Guide 2025',
      seoDescription: 'Complete step-by-step guide to creating professional floor plans online. Learn how to use AI tools to create 2D & 3D floor plans in under 30 minutes.',
      seoKeywords: ['how to create floor plan online', 'online floor plan maker india', 'ai floor plan tool'],
    },

    '9d-visualization': {
      articleType: 'explainer',
      heroBadge: 'Zlendo Realty Explainer',
      heroTitle: 'What Is 9D Visualization?',
      heroTitleHighlight: "Zlendo Realty's Complete Explainer",
      heroSubtitle: "9D Visualization is Zlendo Realty's proprietary design philosophy that combines nine dimensions of a project — from 2D plans to virtual reality — into a single unified workflow.",
      heroCtaLabel: 'Experience 9D Visualization Free',
      keyTakeaways: [
        '9D Visualization is a Zlendo Realty-coined term for a 9-layer design intelligence system',
        'It integrates 2D drafting, 3D modelling, AI rendering, vastu analysis, VR, cost estimation, and more into one platform',
        'Traditional design workflows require 4–6 separate software tools — 9D replaces them all',
        '9D-enabled presentations have an 80%+ client approval rate in first-meeting scenarios',
        'The 9 dimensions cover the complete journey from concept sketch to construction budget',
      ],
      stats: [
        { value: '9', label: 'Design dimensions in one platform' },
        { value: '6×', label: 'Fewer tools needed vs traditional workflow' },
        { value: '80%', label: 'Client approval rate at first meeting' },
        { value: '60s', label: 'AI render time at any 9D dimension' },
      ],
      sections: [
        { heading: 'Dimension 1: 2D Floor Planning', body: "The foundation of every design project. Zlendo Realty's 2D planning environment includes intelligent wall snapping, auto-dimensioning, and drag-and-drop placement. Changes propagate automatically to all other dimensions." },
        { heading: 'Dimension 2: 3D Model Conversion', body: 'AI converts the 2D plan to a navigable 3D model in under 60 seconds. No manual extrusion, no separate 3D software — replacing hours of work in SketchUp or AutoCAD 3D.' },
        { heading: 'Dimension 3: AI Rendering', body: "One-click process delivering studio-quality photorealistic renders in 60 seconds. Multiple style options — contemporary, traditional Indian, minimalist — generated in minutes." },
        { heading: 'Dimension 4: Virtual Walkthrough', body: 'Interactive first-person browser experience. No app, no VR headset. Full 360° movement, clickable room labels, real-time dimension overlays. Consistently drives first-meeting client approvals.' },
        { heading: 'Dimension 5: VR Immersion', body: "For high-value projects, Zlendo Realty's VR Studio enables the walkthrough via VR headset at 1:1 scale. Particularly powerful for luxury residential and developer show-flat experiences." },
        { heading: 'Dimension 6: Vastu Analysis', body: "India-specific and unique to Zlendo Realty. AI Vastu module analyses the floor plan against Vastu Shastra principles in real time. No other major design platform offers integrated vastu analysis." },
        { heading: 'Dimension 7: Cost Estimation', body: "Integrated BOQ converts 3D geometry into construction cost estimates based on current Indian market rates. Delivers complete design-plus-budget packages in a single client presentation." },
        { heading: 'Dimension 8: Material & Style Customisation', body: 'Real-time material and style customisation on the 3D model. Switch styles in seconds — flooring, wall paint, tile patterns, furniture — with instant visual feedback.' },
        { heading: 'Dimension 9: Client Collaboration & Sharing', body: "Shareable project links (no client login required), annotation tools, version history, and one-click export of floor plans, renders, vastu reports, and BOQ documents." },
        { heading: 'Why 9D Is Better Than Multi-Tool Workflows', body: 'Traditional workflows require 4–6 separate tools with manual handoffs introducing time loss and version mismatches. In the 9D framework, all dimensions are connected in real time — change the floor plan and renders, vastu report, and cost estimate all update automatically.' },
      ],
      faqs: [
        { question: 'Who invented 9D Visualization?', answer: "9D Visualization is a proprietary concept developed by Zlendo Realty, describing its 9-layer design intelligence system." },
        { question: 'What does 9D mean in design?', answer: "Each 'D' represents one dimension: 2D drafting, 3D conversion, AI renders, virtual walkthroughs, VR immersion, vastu analysis, cost estimation, material styling, and client collaboration." },
        { question: 'Is 9D Visualization the same as VR?', answer: "VR is Dimension 5 of the nine. 9D Visualization is the broader integrated framework covering all nine dimensions." },
        { question: 'What software supports 9D Visualization?', answer: "Zlendo Realty is the only platform implementing all nine dimensions in a single integrated workflow." },
        { question: 'What industries use 9D Visualization?', answer: '9D Visualization is used in residential architecture, commercial interior design, real estate development, and construction project planning across India.' },
      ],
      ctaTitle: 'Experience All 9 Dimensions',
      ctaTitleHighlight: 'Free for 14 Days',
      ctaBody: '2D floor planning, AI 3D conversion, photorealistic renders, vastu analysis, VR studio, and cost estimation — all in one platform.',
      ctaLabel: 'Start Free Trial',
      seoTitle: "What Is 9D Visualization? Zlendo Realty's Complete Explainer",
      seoDescription: "9D Visualization is Zlendo Realty's proprietary 9-layer design framework combining 2D plans, 3D conversion, AI renders, VR, vastu analysis, and cost estimation.",
      seoKeywords: ['9d visualization', 'zlendo realty 9d', '9d design software'],
    },
  };

  return map[slug] ?? map['vastu-design-software'];
}
