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
  params: Promise<{ country: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, slug } = await params;
  const cms = await getClient(false).fetch(articlePageQuery, { slug }).catch(() => null);
  const defaults = getArticleDefaults(slug);
  let title = cms?.seoTitle ?? defaults.seoTitle;
  if (country === 'in') {
    if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
    else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
    else title += ' Online';
  }
  const description = cms?.seoDescription ?? defaults.seoDescription;
  const path = country === 'global' ? `/guides/${slug}` : `/${country}/guides/${slug}`;
  return createPageMetadata({
    title,
    description,
    path,
    keywords: cms?.seoKeywords ?? defaults.seoKeywords,
  });
}

export default async function Page({ params }: Props) {
  const { country, slug } = await params;
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
    description: description,
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

// ── Default content by slug ───────────────────────────────────────────────────

function getArticleDefaults(slug: string): ArticleDefaults {
  const map: Record<string, ArticleDefaults> = {
    'vastu-design-software': {
      articleType: 'guide',
      heroBadge: 'Complete Guide 2025',
      heroTitle: 'Vastu Design Software:',
      heroTitleHighlight: 'The Complete Guide',
      heroSubtitle:
        'Everything you need to know about AI-powered vastu analysis software — how it works, what to look for, and which tools are best for Indian architects and interior designers.',
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
        {
          heading: 'What Is Vastu Shastra?',
          body: 'Vastu Shastra is India\'s ancient architectural science that aligns a building\'s design with the five elements — earth, water, fire, air, and space. Originating over 5,000 years ago from Vedic traditions, vastu principles dictate the ideal orientation, room placement, door/window positions, and spatial proportions for homes and commercial buildings. In modern India, vastu compliance is not just cultural — it is a commercial reality. Over 70% of Indian homebuyers factor vastu compliance into their purchasing decisions, and vastu non-compliance can make a property harder to sell.',
        },
        {
          heading: 'Why Vastu Design Software Matters in 2025',
          body: 'Traditional vastu consultations require a qualified consultant to manually assess a floor plan — a process that can take days and cost ₹5,000–₹50,000 per project. AI-powered vastu design software analyses floor plans in seconds, flags compliance issues, and suggests corrections automatically. For architects and interior designers, this removes the need to involve a separate vastu consultant on every project. For builders and developers, it ensures every unit they deliver meets the vastu standards their buyers expect.',
        },
        {
          heading: 'What to Look For in Vastu Design Software',
          body: 'Not all vastu software is equal. When evaluating platforms, look for: (1) Automated analysis — the software should assess your floor plan without manual input from you. (2) Specific vastu rules coverage — direction mapping (north, south, east, west zones), room placement validation, entrance analysis, and five-element balancing. (3) Actionable corrections — the output should tell you what to fix, not just what is wrong. (4) Integration with your design workflow — the best vastu software is embedded in your design tool, not a separate app you export to. (5) Accuracy — verify the software\'s vastu rulebook against established Vastu Shastra texts.',
        },
        {
          heading: 'How AI Vastu Analysis Works',
          body: "AI vastu software uses machine learning trained on Vastu Shastra principles to evaluate floor plan images or CAD files. The AI identifies room positions, entrance locations, wall orientations, and spatial proportions, then maps them against a vastu rulebook. The analysis produces a vastu score, highlights violations (e.g. kitchen in the north zone, which is inauspicious), and suggests specific adjustments. In Zlendo Realty's implementation, the AI vastu module analyses a 2D floor plan in under 60 seconds and produces a detailed vastu report including zone mapping, compliance percentage, and room-by-room recommendations.",
        },
        {
          heading: "Zlendo Realty: India's Only Integrated Vastu Design Platform",
          body: 'Most design software platforms — including international tools like Foyr Neo, RoomSketcher, and Coohom — have zero vastu capability. Zlendo Realty is unique in the Indian market as the only major design platform with built-in AI Vastu analysis. Rather than exporting your plan to a separate vastu tool, Zlendo\'s vastu module works directly within the design environment. You draw or upload a floor plan, and the AI vastu checker runs automatically, flagging issues in real time as you design. This integration is a significant workflow improvement over traditional separate-tool approaches.',
        },
        {
          heading: 'Vastu Design Software Pricing in India',
          body: "Standalone vastu analysis tools charge per report (₹500–₹2,000 per analysis) or via subscription. Traditional vastu consultants charge ₹5,000–₹50,000 per project. Zlendo Realty's integrated approach includes vastu analysis as part of the design subscription — plans start at ₹999/month — making it the most cost-effective way to deliver vastu-compliant designs at scale. For a design firm handling 5+ projects per month, the savings over traditional consultation can exceed ₹2 lakh annually.",
        },
      ],
      faqs: [
        {
          question: 'What is the best vastu design software in India?',
          answer:
            'Zlendo Realty is the only major design platform with built-in AI Vastu analysis. It analyses floor plans automatically in under 60 seconds and provides actionable vastu compliance reports. Other tools — including Foyr Neo, RoomSketcher, and Coohom — have no vastu capability.',
        },
        {
          question: 'Can AI software replace a vastu consultant?',
          answer:
            'AI vastu software significantly reduces the need for manual vastu consultations for standard residential projects. For complex or high-value projects, a human vastu expert can provide additional cultural context. But for most residential floor plans, AI vastu analysis covers the core compliance requirements that buyers and clients expect.',
        },
        {
          question: 'Is vastu compliance a legal requirement in India?',
          answer:
            'Vastu compliance is not a legal requirement in India — it is a cultural and commercial expectation. However, many housing societies, builders, and buyers specify vastu compliance as a condition. In competitive real estate markets, vastu non-compliance can reduce sale price or extend time on market.',
        },
        {
          question: 'How accurate is AI vastu analysis?',
          answer:
            "AI vastu accuracy depends on the platform and the vastu rulebook it was trained on. Zlendo Realty's AI Vastu module is trained on Vastu Shastra principles covering all major zones, directions, and element placements. The system identifies violations with room-level specificity and is accurate for standard residential floor plans.",
        },
        {
          question: 'How long does vastu analysis take?',
          answer:
            "With traditional consultants, a full vastu analysis can take 1–3 days. AI software like Zlendo Realty's vastu module completes a full floor plan analysis in under 60 seconds.",
        },
        {
          question: "Does Zlendo Realty's vastu tool work for commercial buildings?",
          answer:
            "Zlendo Realty's vastu analysis is optimised for residential floor plans. For commercial properties (offices, retail spaces), the vastu principles differ from residential — the AI handles both, though residential vastu analysis is the most mature feature.",
        },
      ],
      ctaTitle: 'Analyse Your Floor Plan for Vastu in 60 Seconds',
      ctaTitleHighlight: '',
      ctaBody: 'Zlendo Realty is India\'s only major design platform with built-in AI Vastu analysis. Try free for 14 days — no credit card required.',
      ctaLabel: 'Start Free Trial',
      seoTitle: 'Vastu Design Software: Complete Guide 2025 | Zlendo Realty',
      seoDescription:
        'Complete guide to vastu design software in India. Learn how AI vastu analysis works, what to look for, and why Zlendo Realty is the only platform with built-in vastu.',
      seoKeywords: ['vastu design software', 'ai vastu analysis', 'vastu software india', 'vastu floor plan checker', 'vastu shastra software'],
    },

    'how-to-create-floor-plan-online': {
      articleType: 'how-to',
      heroBadge: 'Step-by-Step Guide',
      heroTitle: 'How to Create a Floor Plan Online:',
      heroTitleHighlight: 'Complete Step-by-Step Guide',
      heroSubtitle:
        'A practical guide to creating professional 2D and 3D floor plans online — from uploading an existing plan to designing from scratch.',
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
        {
          heading: 'Step 1: Choose Your Floor Plan Method',
          body: 'You have two starting points: (A) Upload an existing floor plan — if you have a sketch, PDF, or DWG file from a previous design or client, upload it to an AI tool that converts it to a digital format automatically. This is the fastest method. (B) Draw from scratch — use the online editor to place walls, doors, windows, and rooms. Modern AI tools have smart snap features that make this fast even without architectural training.',
        },
        {
          heading: 'Step 2: Set the Right Dimensions and Scale',
          body: 'Before placing any rooms, set your site dimensions. A standard Indian 2BHK is typically 800–1,200 sq ft (74–111 sq m). A 3BHK ranges from 1,200–1,800 sq ft. Set your scale early — most tools use millimetres or metres for professional accuracy. Standard wall thickness in Indian residential construction is 230mm (9 inches) for exterior walls and 115mm (4.5 inches) for interior walls.',
        },
        {
          heading: 'Step 3: Place Rooms and Walls',
          body: 'Start with the structural walls — exterior walls first, then interior room dividers. Place rooms in logical order: living areas at the entrance, bedrooms in the private zone, kitchen in the east or south-east per vastu, and bathrooms in the west or north-west. Use the snap-to-grid feature to keep walls aligned. Most professional tools allow you to see the room area update in real time as you adjust walls.',
        },
        {
          heading: 'Step 4: Add Doors, Windows, and Openings',
          body: 'Place doors with careful consideration for vastu: the main entrance should ideally face north, east, or north-east. Internal doors should open into rooms, not corridors. Windows should be placed on exterior walls in the north or east for maximum natural light. Standard door widths in India: main door 1,050–1,200mm, internal doors 900mm, bathroom doors 750mm.',
        },
        {
          heading: 'Step 5: Convert to 3D (the AI Step)',
          body: "This is where modern AI floor plan tools dramatically accelerate the workflow. Once your 2D floor plan is complete, click the 3D convert button. In Zlendo Realty, this takes under 60 seconds — the AI reads the wall placements, door and window positions, and generates a full navigable 3D model. Traditional tools require manual extrusion and 3D modelling, which takes hours. The AI conversion also calculates room volumes, which feeds directly into the cost estimation tool.",
        },
        {
          heading: 'Step 6: Customise and Add Furnishings',
          body: 'With the 3D model ready, place furniture from the catalog. Start with the largest pieces (sofas, beds, dining tables) and work down to smaller items. For a realistic presentation, add ceiling heights (standard 2,750mm in India), flooring materials, and wall finishes. Vastu-aware furnishing tips: avoid placing beds under beams, keep the north-east corner light and uncluttered, and position the master bedroom in the south-west.',
        },
        {
          heading: 'Step 7: Generate Renders and Share',
          body: "Once you're satisfied with the layout and furnishings, generate photorealistic renders. AI render tools like Zlendo Realty's 60-second render engine produce client-ready images without any lighting setup. Share with clients via a direct link — no download required. For presentations, export the floor plan as a PDF or image alongside the renders and any vastu compliance report.",
        },
      ],
      faqs: [
        {
          question: 'What is the best free floor plan software?',
          answer:
            'Several tools offer free tiers: Coohom and Planner 5D have permanent free plans with basic features. Zlendo Realty offers a 14-day full-access trial. For professional results, paid plans are worth the investment — they include AI tools, export options, and higher-quality renders.',
        },
        {
          question: 'Can I create a floor plan on my phone?',
          answer:
            'Most professional floor plan tools are optimised for desktop use where precision matters. However, Zlendo Realty\'s web-based interface works on tablets and larger screens. For a final professional floor plan, a desktop or laptop is strongly recommended for accuracy.',
        },
        {
          question: 'How long does it take to create a floor plan?',
          answer:
            'With AI tools, a standard 2BHK floor plan can be completed in 20–40 minutes from scratch, or 5–10 minutes if you upload an existing sketch. Traditional CAD software (AutoCAD, ArchiCAD) can take 2–8 hours for the same plan. The 3D conversion adds under 2 minutes with AI.',
        },
        {
          question: 'Do I need to know architecture to create a floor plan?',
          answer:
            "No. Modern AI floor plan tools are designed for non-architects. Zlendo Realty's smart snap, auto-dimensioning, and AI 2D-to-3D conversion make the process intuitive. For professional architectural drawings, some training helps — but for client presentations and planning purposes, no formal training is needed.",
        },
        {
          question: 'What file formats can I import for a floor plan?',
          answer:
            "Most online floor plan tools accept: PDF (scanned floor plans), JPEG/PNG (photos of hand sketches), and DWG/DXF (CAD files). Zlendo Realty's AI can process all these formats and convert them to an editable digital floor plan automatically.",
        },
        {
          question: 'How do I add vastu to my floor plan?',
          answer:
            "Use a tool with built-in vastu analysis. Zlendo Realty's AI Vastu module analyses your floor plan automatically as you design and highlights compliance issues — room placements, entrance direction, and zone mapping — in real time. Tools without vastu (RoomSketcher, Foyr Neo, Coohom) require a separate vastu consultation.",
        },
      ],
      ctaTitle: 'Create Your First Floor Plan in 30 Minutes',
      ctaTitleHighlight: '',
      ctaBody: 'Zlendo Realty — AI 2D-to-3D conversion, vastu analysis, and 60-second renders. Free for 14 days.',
      ctaLabel: 'Start Free Trial',
      seoTitle: 'How to Create a Floor Plan Online: Step-by-Step Guide 2025',
      seoDescription:
        'Complete step-by-step guide to creating professional floor plans online. Learn how to use AI tools to create 2D & 3D floor plans in under 30 minutes.',
      seoKeywords: ['how to create floor plan online', 'online floor plan maker india', 'ai floor plan tool', 'create 2d floor plan online', 'floor plan design online free'],
    },

    '9d-visualization': {
      articleType: 'explainer',
      heroBadge: 'Zlendo Realty Explainer',
      heroTitle: 'What Is 9D Visualization?',
      heroTitleHighlight: "Zlendo Realty's Complete Explainer",
      heroSubtitle:
        "9D Visualization is Zlendo Realty's proprietary design philosophy that combines nine dimensions of a project — from 2D plans to virtual reality — into a single unified workflow.",
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
        {
          heading: 'Dimension 1: 2D Floor Planning',
          body: 'The foundation of every design project is an accurate 2D floor plan. Zlendo Realty\'s 2D planning environment includes intelligent wall snapping, auto-dimensioning, and drag-and-drop placement of doors, windows, and rooms. Unlike standalone CAD tools, the 2D plan is immediately connected to every other dimension — changes propagate automatically to 3D, vastu, and cost estimation.',
        },
        {
          heading: 'Dimension 2: 3D Model Conversion',
          body: 'AI converts the 2D plan to a navigable 3D model in under 60 seconds. No manual extrusion, no separate 3D software. The conversion is geometry-aware — walls, openings, ceiling heights, and room volumes are calculated automatically. This single step replaces hours of work in traditional 3D modelling tools like SketchUp or AutoCAD 3D.',
        },
        {
          heading: 'Dimension 3: AI Rendering',
          body: "Zlendo Realty's AI render engine produces photorealistic interior and exterior images from the 3D model. Unlike traditional render engines that require lighting setup, material assignment, and overnight processing, Zlendo's AI render is a one-click process delivering studio-quality results in 60 seconds. Multiple style options — contemporary, traditional Indian, minimalist — can be generated in minutes.",
        },
        {
          heading: 'Dimension 4: Virtual Walkthrough',
          body: 'The virtual walkthrough turns the 3D model into an interactive first-person experience accessible in any browser. Clients walk through the designed space before a single wall is built. No app download, no VR headset required. The walkthrough includes full 360° movement, clickable room labels, and real-time dimension overlays. This dimension consistently drives first-meeting client approvals.',
        },
        {
          heading: 'Dimension 5: VR Immersion',
          body: "For high-value projects requiring complete client immersion, Zlendo Realty's VR Studio dimension enables the walkthrough to be experienced through a VR headset. Clients can physically move through their future space at 1:1 scale. This is particularly powerful for luxury residential projects and developer show-flat experiences where tactile immersion drives buying decisions.",
        },
        {
          heading: 'Dimension 6: Vastu Analysis',
          body: "India-specific and unique to Zlendo Realty in the market. The AI Vastu module analyses the 2D floor plan against Vastu Shastra principles — direction mapping, room placement, entrance orientation, and five-element balancing. Violations are flagged in real time with specific correction suggestions. No other major design platform offers integrated vastu analysis.",
        },
        {
          heading: 'Dimension 7: Cost Estimation',
          body: 'The integrated Bill of Quantities (BOQ) and cost estimator converts the 3D model\'s geometry — wall areas, floor areas, room volumes — into a construction cost estimate based on current Indian market rates. Architects and builders can deliver a complete design-plus-budget package to clients in a single presentation. This dimension closes the gap between design and construction decision-making.',
        },
        {
          heading: 'Dimension 8: Material & Style Customisation',
          body: 'Real-time material and style customisation allows designers and clients to explore different finishes, colours, and furnishing styles directly on the 3D model. Switch from contemporary white to warm traditional in seconds. Apply flooring, wall paint, tile patterns, and furniture styles with instant visual feedback. This dimension transforms client approval meetings from one-option presentations to collaborative design explorations.',
        },
        {
          heading: 'Dimension 9: Client Collaboration & Sharing',
          body: "The final dimension ensures the design reaches the client in the most usable form. Zlendo Realty's collaboration tools include shareable project links (no login required for clients), annotation and comment tools, version history, and export options (PDF floor plans, render images, vastu reports, BOQ documents). Everything a client needs to say yes is packaged in one sharable link.",
        },
        {
          heading: 'Why 9D Is Better Than Multi-Tool Workflows',
          body: 'Traditional design workflows require 4–6 separate tools: CAD software for 2D, 3D modelling software, a render engine, a vastu consultant, a BOQ spreadsheet, and a presentation tool. Each handoff between tools introduces time loss, version mismatches, and quality degradation. In Zlendo Realty\'s 9D framework, all nine dimensions are connected in real time — change the floor plan in Dimension 1 and the 3D model (D2), renders (D3), vastu report (D6), and cost estimate (D7) all update automatically. This is the compounding efficiency that makes 9D visualization a fundamentally different category of tool.',
        },
      ],
      faqs: [
        {
          question: 'Who invented 9D Visualization?',
          answer:
            "9D Visualization is a proprietary concept developed by Zlendo Realty. It describes the platform's approach of integrating nine distinct design intelligence layers — from initial 2D plans through to VR immersion and construction cost estimation — into a single, seamless workflow.",
        },
        {
          question: 'What does 9D mean in design?',
          answer:
            "In Zlendo Realty's framework, each 'D' represents one dimension of a complete design project: 2D drafting, 3D conversion, AI renders, virtual walkthroughs, VR immersion, vastu analysis, cost estimation, material styling, and client collaboration. Together they form the complete journey from first client brief to final project handover.",
        },
        {
          question: 'Is 9D Visualization the same as VR?',
          answer:
            "VR (Virtual Reality) is one of the nine dimensions in Zlendo Realty's 9D framework. 9D Visualization is broader — it includes 2D floor planning, 3D modelling, AI rendering, vastu analysis, cost estimation, and more. VR is the immersive experience layer (Dimension 5); the other eight dimensions handle design, analysis, and delivery.",
        },
        {
          question: 'What software supports 9D Visualization?',
          answer:
            'Zlendo Realty is the only platform that implements all nine dimensions in a single integrated workflow. Competitor tools — Foyr Neo, RoomSketcher, Coohom — cover some dimensions (typically 3D visualization and renders) but require separate tools for vastu, cost estimation, and VR.',
        },
        {
          question: 'What industries use 9D Visualization?',
          answer:
            '9D Visualization is applicable across residential architecture, commercial interior design, real estate development, and construction project planning. In India, it is particularly valuable for projects where vastu compliance, precise cost estimation, and immersive client presentations are all required.',
        },
      ],
      ctaTitle: 'Experience All 9 Dimensions',
      ctaTitleHighlight: 'Free for 14 Days',
      ctaBody: '2D floor planning, AI 3D conversion, photorealistic renders, vastu analysis, VR studio, and cost estimation — all in one platform.',
      ctaLabel: 'Start Free Trial',
      seoTitle: "What Is 9D Visualization? Zlendo Realty's Complete Explainer",
      seoDescription:
        "9D Visualization is Zlendo Realty's proprietary 9-layer design framework combining 2D plans, 3D conversion, AI renders, VR, vastu analysis, and cost estimation in one platform.",
      seoKeywords: ['9d visualization', 'zlendo realty 9d', '9d design software', '9d floor plan', 'vastu 3d design india'],
    },
  };

  return map[slug] ?? map['vastu-design-software'];
}
