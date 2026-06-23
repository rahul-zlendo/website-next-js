import { Metadata } from 'next';
import { getClient } from '@/lib/sanity/client';
import { segmentPageQuery } from '@/lib/sanity/queries';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import SegmentPageClient, { SegmentDefaults } from '@/components/pages/SegmentPageClient';
import JsonLd from '@/components/common/JsonLd';
import { SIGNUP_URL } from '@/lib/config/env';

export const revalidate = 60;

const KNOWN_SLUGS = ['interior-designers', 'architects', 'vastu-consultants'];

export async function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ country: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, slug } = await params;
  const cms = await getClient(false).fetch(segmentPageQuery, { slug }).catch(() => null);
  const defaults = getSegmentDefaults(slug);
  const title = cms?.seoTitle ?? defaults.seoTitle;
  const description = cms?.seoDescription ?? defaults.seoDescription;
  const path = country === 'global' ? `/for/${slug}` : `/${country}/for/${slug}`;
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
  const cms = await getClient(preview).fetch(segmentPageQuery, { slug }).catch(() => null);
  const defaults = getSegmentDefaults(slug);
  const path = country === 'global' ? `/for/${slug}` : `/${country}/for/${slug}`;

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zlendo Realty',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    url: `https://zlendorealty.com${path}`,
    description: cms?.seoDescription ?? defaults.seoDescription,
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'INR',
      description: '14-day free trial with full access',
    },
    creator: {
      '@type': 'Organization',
      name: 'Zlendo Realty',
      url: 'https://zlendorealty.com',
    },
  };

  const faqs = (cms?.faqs?.length ? cms.faqs : defaults.faqs) as Array<{ question: string; answer: string }>;
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
      <JsonLd schema={softwareSchema} />
      <JsonLd schema={faqSchema} />
      <SegmentPageClient cms={cms} slug={slug} defaults={defaults} signupUrl={SIGNUP_URL} />
    </>
  );
}

// ── Default content by slug ───────────────────────────────────────────────────

function getSegmentDefaults(slug: string): SegmentDefaults {
  const map: Record<string, SegmentDefaults> = {
    'interior-designers': {
      heroBadge: 'For Interior Designers',
      heroTitle: 'Interior Design Software',
      heroTitleHighlight: "Built for India's Top Designers",
      heroSubtitle:
        'Zlendo Realty gives interior designers AI-powered 3D visualization, photorealistic renders in 60 seconds, and vastu analysis — all in one platform. Stop paying for 4 separate tools.',
      heroCtaLabel: 'Start Free Trial',
      painPointsTitle: "The problems every Indian interior designer knows",
      painPoints: [
        {
          title: 'Renders take hours',
          desc: 'Traditional rendering software requires hours of setup, lighting adjustments, and processing time. Clients want to see the design now — not tomorrow.',
          iconName: 'Clock',
        },
        {
          title: 'Vastu is a separate manual process',
          desc: 'Clients always ask about vastu. Currently you either hire a separate vastu consultant (₹5,000–₹50,000 per project) or do it manually — both slow and expensive.',
          iconName: 'Compass',
        },
        {
          title: "You're paying for 4+ different tools",
          desc: 'Floor plan software, 3D modelling tool, renderer, mood board tool — separate subscriptions, separate logins, and constant file export/import between them.',
          iconName: 'Package',
        },
      ],
      featuresTitle: 'Everything an interior designer needs, in one platform',
      features: [
        {
          title: '60-second AI photorealistic renders',
          desc: 'Upload a floor plan or draw in Zlendo Realty, click render — and receive a studio-quality image in under 60 seconds. No GPU setup, no overnight renders.',
        },
        {
          title: 'AI Vastu analysis built in',
          desc: 'Every floor plan you create or upload is automatically analysed against Vastu Shastra principles. Get a compliance report, zone map, and specific recommendations — no separate consultant needed.',
        },
        {
          title: '3D virtual walkthroughs',
          desc: 'Send clients a link to walk through their space in 3D before a single wall is built. Works in any browser — no app download, no VR headset required for basic walkthroughs.',
        },
        {
          title: 'Material and style customisation',
          desc: 'Apply flooring, wall colours, materials, and furnishings in real time. Show clients 5 style options in the same meeting — Scandinavian, contemporary, traditional Indian, and more.',
        },
        {
          title: 'Client presentation ready',
          desc: 'Export professional presentation packages — renders, floor plans, vastu report, and walkthrough link — in one click. Impress clients with everything they need to make a decision.',
        },
        {
          title: 'INR pricing starting ₹999/month',
          desc: 'No USD conversion, no surprise charges. Zlendo Realty is priced for Indian design professionals — not the global market.',
        },
      ],
      workflowTitle: 'Your complete project workflow in Zlendo Realty',
      workflowSteps: [
        {
          step: '01',
          title: 'Upload or draw the floor plan',
          desc: "Upload the client's existing floor plan (PDF, DWG, image) or draw from scratch. AI auto-detects walls and rooms.",
        },
        {
          step: '02',
          title: 'Run vastu analysis',
          desc: 'AI Vastu module checks the plan automatically. Review the compliance report and make adjustments if needed.',
        },
        {
          step: '03',
          title: 'Generate the 3D model',
          desc: 'Click convert — AI generates a fully navigable 3D model from the 2D plan in under 60 seconds.',
        },
        {
          step: '04',
          title: 'Style and furnish',
          desc: 'Place furniture, apply materials, adjust finishes. Show the client multiple style options in real time.',
        },
        {
          step: '05',
          title: 'Render and present',
          desc: 'Generate photorealistic renders and a virtual walkthrough link. Share the complete package with the client — design approved in the same meeting.',
        },
      ],
      stats: [
        { value: '60s', label: 'Average render time' },
        { value: '80%', label: 'Client approval at first meeting' },
        { value: '3×', label: 'More projects per month' },
        { value: '₹999', label: 'Starting monthly cost' },
      ],
      faqs: [
        {
          question: 'Does Zlendo Realty work for interior designers without architecture training?',
          answer:
            "Yes. Zlendo Realty is designed to be intuitive for interior designers at all levels. The AI 2D-to-3D conversion, smart snapping, and auto-dimensioning handle the technical complexity — you focus on design.",
        },
        {
          question: 'Can I show clients multiple style options in one meeting?',
          answer:
            'Yes. Material and style customisation is real-time in Zlendo Realty. You can switch between style options (contemporary, traditional Indian, minimalist) in seconds during a client meeting, without any re-rendering required.',
        },
        {
          question: 'How does Zlendo Realty replace my vastu consultant?',
          answer:
            "Zlendo Realty's AI Vastu module analyses every floor plan automatically against Vastu Shastra principles. It produces a compliance report with zone mapping, compliance percentage, and room-by-room recommendations. For standard residential projects, this covers the vastu check your clients need without a separate consultant fee.",
        },
        {
          question: 'How much does Zlendo Realty cost for interior designers?',
          answer:
            'Zlendo Realty offers INR-denominated plans starting at ₹999/month. This is significantly more affordable than buying separate tools for floor planning, 3D modelling, rendering, and vastu analysis — which can total ₹5,000–₹15,000/month combined.',
        },
        {
          question: 'Can clients walk through the design before it is built?',
          answer:
            "Yes. Zlendo Realty generates a shareable virtual walkthrough link that clients can open in any browser — no app download, no VR headset required. They can walk through the designed space in 3D, with full 360° movement.",
        },
      ],
      ctaTitle: 'Start your 14-day free trial — no credit card required',
      ctaBody: 'Join 12,000+ Indian design professionals using Zlendo Realty. Full access for 14 days. Cancel anytime.',
      seoTitle: 'Interior Design Software for Indian Designers | Zlendo Realty',
      seoDescription:
        'Zlendo Realty for interior designers — AI vastu analysis, 60-second renders, 3D walkthroughs, and INR pricing. Everything you need in one platform. Free trial.',
      seoKeywords: ['interior design software india', 'interior designer tools india', 'vastu software interior designer', 'ai interior design software india'],
    },

    'architects': {
      heroBadge: 'For Architects',
      heroTitle: 'Architecture Software',
      heroTitleHighlight: "Built for Indian Architects",
      heroSubtitle:
        'Zlendo Realty gives architects AI-powered 2D-to-3D conversion, integrated construction cost estimation, and vastu analysis — reducing the design-to-presentation workflow from days to hours.',
      heroCtaLabel: 'Start Free Trial',
      painPointsTitle: "The bottlenecks every Indian architect faces",
      painPoints: [
        {
          title: 'CAD to 3D takes hours',
          desc: 'Converting a 2D AutoCAD plan to a 3D model in SketchUp or 3ds Max takes 2–8 hours. Every revision starts the clock again. AI should handle this in seconds.',
          iconName: 'Zap',
        },
        {
          title: 'No integrated cost estimation',
          desc: 'Cost estimation is a separate manual process — export dimensions from CAD, build a BOQ spreadsheet, update rates manually. A complete cost estimate takes 1–2 days.',
          iconName: 'Calculator',
        },
        {
          title: 'Vastu requires a separate consultant',
          desc: 'Most clients in India expect vastu compliance. Coordinating with a separate vastu consultant adds time and cost (₹5,000–₹50,000 per project) to every project.',
          iconName: 'Users',
        },
      ],
      featuresTitle: 'Professional architecture tools, built for the Indian market',
      features: [
        {
          title: 'AI 2D-to-3D conversion in 60 seconds',
          desc: 'Upload a DWG, PDF, or hand sketch — AI automatically converts it to a fully navigable 3D model. What takes hours in SketchUp takes under a minute in Zlendo Realty.',
        },
        {
          title: 'Integrated BOQ and cost estimation',
          desc: "Zlendo Realty's cost estimator reads room areas and volumes from the 3D model and generates a detailed Bill of Quantities based on current Indian market rates. Deliver design-plus-budget in one presentation.",
        },
        {
          title: 'AI Vastu analysis',
          desc: 'Every floor plan is automatically checked against Vastu Shastra principles. The AI produces a zone map, compliance percentage, and room-by-room recommendations — no separate vastu consultant required.',
        },
        {
          title: 'VR Studio for immersive client presentations',
          desc: "For high-value projects, Zlendo Realty's VR Studio lets clients walk through the design at 1:1 scale in a VR headset. Significantly stronger than a 2D plan or even a 3D render for winning client approval.",
        },
        {
          title: 'Precision drafting tools',
          desc: 'Architect-grade 2D drafting with millimetre precision, intelligent wall snapping, auto-dimensioning, multi-story support, and accurate room area calculations throughout.',
        },
        {
          title: 'Client presentation in one package',
          desc: 'Export a complete package — 2D plans, 3D renders, virtual walkthrough link, vastu compliance report, and cost estimate — in one click. Everything a client needs to approve the design.',
        },
      ],
      workflowTitle: 'Complete architecture workflow in Zlendo Realty',
      workflowSteps: [
        {
          step: '01',
          title: 'Import or draft the floor plan',
          desc: 'Upload existing DWG/PDF or use the precision 2D editor. AI auto-detects walls, rooms, and openings.',
        },
        {
          step: '02',
          title: 'AI 2D-to-3D conversion',
          desc: 'One-click AI conversion generates a full 3D model from the 2D plan in under 60 seconds.',
        },
        {
          step: '03',
          title: 'Run vastu analysis',
          desc: 'AI Vastu module delivers a compliance report with zone mapping and room-by-room recommendations automatically.',
        },
        {
          step: '04',
          title: 'Generate cost estimate',
          desc: 'The BOQ tool reads 3D model geometry and generates a construction cost estimate with current India market rates.',
        },
        {
          step: '05',
          title: 'Present to client',
          desc: 'Share 3D renders, a virtual walkthrough link, the vastu report, and the cost estimate in one package. Get approval in the same meeting.',
        },
      ],
      stats: [
        { value: '60s', label: 'CAD to 3D model time' },
        { value: '95%', label: 'BOQ accuracy vs manual estimation' },
        { value: '2×', label: 'Faster project delivery' },
        { value: '₹999', label: 'Starting monthly cost' },
      ],
      faqs: [
        {
          question: 'Can Zlendo Realty import AutoCAD DWG files?',
          answer:
            "Yes. Zlendo Realty accepts DWG, DXF, PDF, and image files. The AI converter processes these files and generates an editable 3D model. This is the fastest way to convert existing CAD drawings to 3D presentations.",
        },
        {
          question: 'How accurate is the cost estimation in Zlendo Realty?',
          answer:
            "Zlendo Realty's BOQ tool uses current Indian market rates for materials and labour. The cost estimate is derived from the actual 3D model geometry — room areas, wall areas, and volumes — making it significantly more accurate than spreadsheet-based estimates.",
        },
        {
          question: 'Does Zlendo Realty work for commercial architecture projects?',
          answer:
            'Yes. Zlendo Realty supports both residential and commercial floor plan design. The 2D drafting tools, 3D conversion, and cost estimation work for offices, retail spaces, and mixed-use developments. The vastu analysis is optimised for residential but the AI handles commercial vastu principles as well.',
        },
        {
          question: 'Is Zlendo Realty a replacement for AutoCAD?',
          answer:
            "Zlendo Realty is not a replacement for AutoCAD's full structural and technical drawing capabilities. It is best used alongside AutoCAD — import your DWG into Zlendo Realty for 3D visualization, vastu checking, cost estimation, and client presentations.",
        },
        {
          question: 'How does the VR Studio work for client presentations?',
          answer:
            "Zlendo Realty's VR Studio converts the 3D model into a VR-compatible experience for Meta Quest and other standard VR headsets. Clients put on the headset and walk through their future building at 1:1 scale. This is particularly effective for luxury residential clients and developer show-flats.",
        },
      ],
      ctaTitle: 'Start your 14-day free trial — no credit card required',
      ctaBody: 'Join Indian architects using Zlendo Realty to deliver faster, more impressive client presentations. Cancel anytime.',
      seoTitle: 'Architecture Software for Indian Architects | Zlendo Realty',
      seoDescription:
        'Zlendo Realty for architects — AI 2D-to-3D conversion in 60 seconds, integrated BOQ cost estimation, AI vastu analysis, and VR studio. Free 14-day trial.',
      seoKeywords: ['architecture software india', 'cad to 3d conversion india', 'ai architecture software', 'building cost estimator india', 'vastu architect software'],
    },

    'vastu-consultants': {
      heroBadge: 'For Vastu Consultants',
      heroTitle: 'Vastu Software',
      heroTitleHighlight: "Built for Professional Vastu Consultants",
      heroSubtitle:
        'Zlendo Realty gives vastu consultants AI-powered floor plan analysis, instant 3D visualization of compliant and non-compliant layouts, and client-ready vastu reports — in under 60 seconds per analysis.',
      heroCtaLabel: 'Start Free Trial',
      painPointsTitle: "The challenges every vastu consultant faces",
      painPoints: [
        {
          title: 'Manual analysis takes hours',
          desc: 'Manually checking a floor plan against vastu zones, directions, and element placements takes 2–4 hours per project — or days if revisions are needed.',
          iconName: 'Clock',
        },
        {
          title: 'Difficult to visualize corrections for clients',
          desc: "Clients don't always understand what 'move the kitchen to the south-east' looks like in practice. Showing a marked-up 2D plan isn't enough — clients need to see the correction in 3D.",
          iconName: 'Eye',
        },
        {
          title: 'No integrated design tool',
          desc: 'Vastu consultants typically work separately from the design software — checking PDFs or prints, adding manual annotations. There is no tool that connects vastu analysis directly to the design.',
          iconName: 'Package',
        },
      ],
      featuresTitle: 'Professional vastu tools in an integrated design platform',
      features: [
        {
          title: 'AI vastu analysis in 60 seconds',
          desc: 'Upload any floor plan (PDF, DWG, image) and receive a complete vastu analysis in under 60 seconds — direction mapping, zone compliance, element placement, entrance analysis, and an overall vastu score.',
        },
        {
          title: 'Instant 3D visualization of corrections',
          desc: "When the vastu analysis flags an issue — e.g. kitchen in the north — Zlendo Realty's 3D viewer instantly shows both the non-compliant and corrected layouts side by side. Clients understand corrections immediately.",
        },
        {
          title: 'Client-ready vastu compliance reports',
          desc: 'Generate professional vastu compliance reports with zone mapping, direction overlays, compliance percentage, and room-by-room recommendations. Share as PDF or direct link — no formatting required.',
        },
        {
          title: 'Complete floor plan editing',
          desc: 'Suggest and apply vastu corrections directly in the design tool. Adjust room positions, entrance direction, and space proportions — then re-run the vastu analysis to confirm compliance.',
        },
        {
          title: 'Multiple project management',
          desc: 'Manage multiple client projects simultaneously. Each project stores the original plan, vastu analysis, corrections, and compliance report — with full version history.',
        },
        {
          title: 'INR pricing for Indian professionals',
          desc: 'Zlendo Realty is priced for Indian professionals — starting at ₹999/month. Handle 5+ vastu consultations per month and the platform cost is a fraction of a single traditional consultation fee.',
        },
      ],
      workflowTitle: 'Complete vastu consultation workflow in Zlendo Realty',
      workflowSteps: [
        {
          step: '01',
          title: 'Upload the client floor plan',
          desc: "Upload the client's floor plan (PDF, DWG, image scan). AI auto-detects walls, rooms, and openings.",
        },
        {
          step: '02',
          title: 'Run AI vastu analysis',
          desc: 'AI analyses the floor plan against Vastu Shastra principles in under 60 seconds. Review the zone map, vastu score, and violation list.',
        },
        {
          step: '03',
          title: 'Visualize corrections in 3D',
          desc: 'Use the 3D view to show clients exactly what each correction looks like before implementing it. Compare compliant vs non-compliant layouts side by side.',
        },
        {
          step: '04',
          title: 'Apply and re-check',
          desc: 'Make vastu corrections directly in the design tool. Re-run the vastu analysis to confirm the updated floor plan achieves compliance.',
        },
        {
          step: '05',
          title: 'Deliver the vastu report',
          desc: 'Generate and share a professional vastu compliance report — zone map, compliance percentage, corrections applied, and recommendations. Share as PDF or direct client link.',
        },
      ],
      stats: [
        { value: '60s', label: 'Floor plan analysis time' },
        { value: '5×', label: 'More consultations per month vs manual' },
        { value: '100%', label: 'Vastu compliance achievable per project' },
        { value: '₹999', label: 'Starting monthly cost' },
      ],
      faqs: [
        {
          question: 'How does AI vastu analysis compare to manual vastu checking?',
          answer:
            "AI vastu analysis in Zlendo Realty covers direction mapping, room placement against all eight zones, entrance orientation, five-element balancing, and beam/column placement. It identifies the same violations a qualified vastu consultant would identify in a manual review, in under 60 seconds instead of hours.",
        },
        {
          question: 'Can I customise the vastu analysis rules?',
          answer:
            "Zlendo Realty's AI Vastu module uses an established Vastu Shastra rulebook covering the major schools of vastu. The core rules are standardised — the system aims for accuracy and consistency across analyses.",
        },
        {
          question: 'Can I use Zlendo Realty to create corrected floor plans for clients?',
          answer:
            'Yes. After the vastu analysis, you can make corrections directly in the 2D floor plan editor — adjusting room positions, entrance direction, and spatial proportions. The vastu analysis re-runs on the corrected plan automatically.',
        },
        {
          question: 'Can I share vastu reports with clients directly?',
          answer:
            "Yes. Zlendo Realty generates sharable vastu compliance reports as PDFs or direct links. Clients can view the zone map, vastu score, violation list, and corrections applied — without needing to log in to Zlendo Realty.",
        },
        {
          question: 'Does Zlendo Realty handle vastu for apartments and plotted homes?',
          answer:
            "Yes. The AI Vastu module handles both apartment units (where external orientation is fixed) and plotted homes (where full site orientation is possible). The analysis accounts for the difference in constraint between the two property types.",
        },
      ],
      ctaTitle: 'Start your 14-day free trial — no credit card required',
      ctaBody: 'AI vastu analysis in 60 seconds. Client-ready reports. 3D visualization of corrections. Full access for 14 days.',
      seoTitle: 'Vastu Consultant Software | AI Vastu Analysis | Zlendo Realty',
      seoDescription:
        "Zlendo Realty for vastu consultants — AI vastu analysis in 60 seconds, 3D visualization of corrections, and professional vastu compliance reports. Free 14-day trial.",
      seoKeywords: ['vastu consultant software', 'ai vastu analysis tool', 'vastu software india', 'vastu floor plan analysis', 'vastu compliance software'],
    },
  };

  return map[slug] ?? map['interior-designers'];
}
