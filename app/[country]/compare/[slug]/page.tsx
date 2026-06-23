import { Metadata } from 'next';
import { getClient } from '@/lib/sanity/client';
import { comparePageQuery } from '@/lib/sanity/queries';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import ComparePageClient, { ComparePageDefaults } from '@/components/pages/ComparePageClient';
import JsonLd from '@/components/common/JsonLd';
import { SIGNUP_URL } from '@/lib/config/env';

export const revalidate = 60;

const KNOWN_SLUGS = [
  'zlendo-vs-foyr-neo',
  'zlendo-vs-roomsketcher',
  'zlendo-vs-coohom',
  'best-foyr-neo-alternatives',
  'best-roomsketcher-alternatives',
];

export async function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ country: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, slug } = await params;
  const cms = await getClient(false).fetch(comparePageQuery, { slug }).catch(() => null);
  const defaults = getCompareDefaults(slug);
  const title = cms?.seoTitle ?? defaults.seoTitle;
  const description = cms?.seoDescription ?? defaults.seoDescription;
  const path = country === 'global' ? `/compare/${slug}` : `/${country}/compare/${slug}`;
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
  const cms = await getClient(preview).fetch(comparePageQuery, { slug }).catch(() => null);
  const defaults = getCompareDefaults(slug);

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
      <JsonLd schema={faqSchema} />
      <ComparePageClient cms={cms} slug={slug} defaults={defaults} signupUrl={SIGNUP_URL} />
    </>
  );
}

// ── Default content by slug ──────────────────────────────────────────────────

function getCompareDefaults(slug: string): ComparePageDefaults {
  const map: Record<string, ComparePageDefaults> = {
    'zlendo-vs-foyr-neo': {
      pageType: 'comparison',
      heroTitle: 'Zlendo Realty vs Foyr Neo (2025): Best Interior Design Software for India?',
      heroBadge: 'Zlendo Realty Wins for India',
      heroSubtitle: 'A comprehensive comparison of Zlendo Realty and Foyr Neo across price, vastu, AI features, and India-specific capabilities.',
      heroCtaLabel: 'Try Zlendo Realty Free',
      competitorName: 'Foyr Neo',
      competitorTagline: 'AI-powered interior design for professionals',
      competitorFounded: '2020',
      competitorPricing: '$49–$149/month (USD only)',
      competitorBestFor: 'Interior designers wanting mood boards and client presentations',
      zlendoPricing: '₹999–₹4,999/month (INR pricing available)',
      zlendoBestFor: 'Indian interior designers, architects, and vastu consultants',
      comparisonRows: [
        { feature: 'Vastu AI Analysis', zlendo: '✅ Yes — dedicated Vastu module', competitor: '❌ Not available' },
        { feature: 'India INR Pricing', zlendo: '✅ Yes', competitor: '❌ USD only' },
        { feature: '2D to 3D AI Conversion', zlendo: '✅ Instant AI conversion', competitor: '⚠️ Manual 3D creation' },
        { feature: 'Construction Cost Estimator', zlendo: '✅ Built-in BOQ tool', competitor: '❌ Not available' },
        { feature: 'Photorealistic Renders', zlendo: '✅ 60-second AI renders', competitor: '✅ Good quality renders' },
        { feature: 'Virtual Walkthrough', zlendo: '✅ Browser-based 3D tour', competitor: '✅ 360° panorama' },
        { feature: 'VR Studio Support', zlendo: '✅ VR headset compatible', competitor: '❌ Not available' },
        { feature: 'Mood Boards', zlendo: '⚠️ Basic inspiration tools', competitor: '✅ Dedicated mood board tool' },
        { feature: 'Free Trial', zlendo: '✅ 14-day full access', competitor: '✅ 14-day trial' },
        { feature: 'India Customer Support', zlendo: '✅ India-based support', competitor: '⚠️ Global support, no India office' },
      ],
      winnerSections: [
        { category: 'India Market Fit', winner: 'zlendo', explanation: 'Zlendo Realty is built for India — INR pricing, vastu integration, and India-specific design templates make it the natural choice for Indian professionals.' },
        { category: 'AI & Automation', winner: 'zlendo', explanation: "Zlendo's 2D-to-3D AI conversion and 60-second render engine significantly outpace Foyr Neo's manual 3D workflow." },
        { category: 'Vastu Integration', winner: 'zlendo', explanation: "Foyr Neo has zero vastu capability. Zlendo's dedicated AI Vastu module analyses floor plans against Vastu Shastra principles automatically." },
        { category: 'Mood Boards & Inspiration', winner: 'competitor', explanation: "Foyr Neo's dedicated mood board and material inspiration tools are more developed than Zlendo's current offering." },
        { category: 'Construction & Cost', winner: 'zlendo', explanation: "Zlendo's integrated BOQ and cost estimator is a unique feature — Foyr Neo is purely a visualization tool with no cost estimation." },
      ],
      zlendoPros: [
        'INR pricing for Indian budget realities',
        'AI Vastu analysis on every floor plan',
        '60-second photorealistic renders',
        'Integrated construction cost estimation',
        'VR studio for immersive client presentations',
        'India-based customer support',
      ],
      zlendoCons: [
        'Smaller furniture catalog than Foyr Neo',
        'Mood board tools less mature',
        'Global brand recognition still growing',
      ],
      competitorPros: [
        'Strong mood board and material library',
        'Good international reputation',
        'Clean UI for interior designers',
      ],
      competitorCons: [
        'No vastu feature',
        'USD-only pricing (expensive in INR)',
        'No India-specific pricing or support',
        'No construction cost estimation',
        'No 2D-to-3D AI conversion',
      ],
      verdictTitle: 'Verdict: Zlendo Realty is the better choice for India-based design professionals',
      verdictBody:
        'For interior designers, architects, and vastu consultants working in India, Zlendo Realty outperforms Foyr Neo on the factors that matter most: India pricing, vastu integration, AI automation, and construction cost estimation. Foyr Neo remains a solid choice for professionals primarily focused on mood boards and international design presentations, but for the Indian market, Zlendo Realty is the more practical and cost-effective solution.',
      whoShouldChooseZlendo:
        'Indian interior designers who need vastu compliance. Architects who deliver construction cost estimates alongside designs. Design professionals who want INR pricing. Anyone who converts 2D floor plans to 3D frequently.',
      whoShouldChooseCompetitor:
        'Interior designers who primarily create international-style mood boards. Professionals who work exclusively on global projects and do not need vastu. Studios with existing Foyr Neo workflows where switching cost is high.',
      faqs: [
        {
          question: 'Is Foyr Neo available in India?',
          answer:
            'Yes, Foyr Neo is accessible in India via its web platform. However, pricing is in USD only — there is no India-specific pricing tier. For Indian professionals, this makes Foyr Neo significantly more expensive than Zlendo Realty, which offers INR-based plans.',
        },
        {
          question: 'Does Foyr Neo have vastu analysis?',
          answer:
            "No. Foyr Neo does not offer any vastu analysis or vastu compliance checking. This is one of the key advantages of Zlendo Realty for the Indian market — its dedicated AI Vastu module analyses floor plans against Vastu Shastra principles automatically.",
        },
        {
          question: 'Which is better for 3D rendering, Foyr Neo or Zlendo Realty?',
          answer:
            "Both platforms offer photorealistic 3D rendering. Zlendo Realty's AI render engine produces results in under 60 seconds, while Foyr Neo's rendering is generally considered high quality but requires more manual setup. For speed and automation, Zlendo has the edge.",
        },
        {
          question: 'Can I create floor plans in Foyr Neo?',
          answer:
            'Yes, Foyr Neo includes a floor plan editor. However, it lacks the AI-powered 2D-to-3D conversion that Zlendo Realty offers — in Foyr Neo, you build the 3D model manually from your floor plan, which is a slower workflow.',
        },
        {
          question: 'How does Foyr Neo pricing compare to Zlendo Realty in India?',
          answer:
            'Foyr Neo charges $49–$149/month in USD, which converts to approximately ₹4,100–₹12,400/month at current rates. Zlendo Realty offers plans starting from ₹999/month, making it significantly more accessible for Indian design professionals.',
        },
        {
          question: 'Is Zlendo Realty as good as Foyr Neo for client presentations?',
          answer:
            "Zlendo Realty includes virtual walkthroughs, VR studio support, and photorealistic renders — all strong client presentation tools. Foyr Neo has mature mood board features that Zlendo is still developing. For Indian clients who respond to 3D walkthroughs and vastu compliance documents, Zlendo Realty's presentation toolkit is highly competitive.",
        },
        {
          question: 'Does Foyr Neo offer construction cost estimation?',
          answer:
            "No. Foyr Neo is a visualization-only platform — it does not include construction cost estimation or bill of quantities (BOQ) generation. Zlendo Realty's integrated cost estimator is a significant differentiator for professionals who deliver complete project packages to clients.",
        },
        {
          question: 'Can I switch from Foyr Neo to Zlendo Realty?',
          answer:
            "Yes. Zlendo Realty's team offers onboarding support for professionals migrating from other platforms. Your existing floor plan files (PDF, DWG, images) can be uploaded directly to Zlendo's AI 2D-to-3D converter.",
        },
      ],
      ctaTitle: 'Try Zlendo Realty Free for 14 Days',
      ctaBody: 'No credit card required. Full access to every feature including AI Vastu analysis. Cancel anytime.',
      seoTitle: 'Zlendo Realty vs Foyr Neo (2025): Best Interior Design Software for India?',
      seoDescription:
        'Detailed comparison of Zlendo Realty vs Foyr Neo for Indian designers. Compare pricing in INR, vastu features, AI tools, 3D rendering, and India support.',
      seoKeywords: ['foyr neo alternative india', 'zlendo vs foyr neo', 'interior design software india', 'vastu design software'],
    },

    'zlendo-vs-roomsketcher': {
      pageType: 'comparison',
      heroTitle: 'Zlendo Realty vs RoomSketcher (2025): Best Floor Plan Software for India?',
      heroBadge: 'Zlendo Wins for AI & India Market',
      heroSubtitle: 'Comparing Zlendo Realty and RoomSketcher on AI features, India pricing, vastu analysis, and professional-grade tools.',
      heroCtaLabel: 'Try Zlendo Realty Free',
      competitorName: 'RoomSketcher',
      competitorTagline: 'Easy-to-use home design and floor plan tool',
      competitorFounded: '2012',
      competitorPricing: '$49–$99/month (USD only)',
      competitorBestFor: 'Homeowners and real estate agents needing simple floor plans',
      zlendoPricing: '₹999–₹4,999/month (INR pricing)',
      zlendoBestFor: 'Indian architects, interior designers, and builders needing AI-powered 3D design',
      comparisonRows: [
        { feature: 'AI 2D to 3D Conversion', zlendo: '✅ Instant AI', competitor: '❌ Manual 3D build' },
        { feature: 'Vastu AI Analysis', zlendo: '✅ Dedicated module', competitor: '❌ Not available' },
        { feature: 'India INR Pricing', zlendo: '✅ Yes', competitor: '❌ USD only' },
        { feature: 'Photorealistic Renders', zlendo: '✅ 60-second AI renders', competitor: '✅ High-quality renders' },
        { feature: 'Construction Cost Estimator', zlendo: '✅ BOQ tool built-in', competitor: '❌ Not available' },
        { feature: 'Virtual Walkthrough', zlendo: '✅ Interactive 3D tour', competitor: '✅ 360° panorama' },
        { feature: 'Professional CAD Tools', zlendo: '✅ Architect-grade precision', competitor: '⚠️ Basic floor plan tools' },
        { feature: 'Real Estate Snapshots', zlendo: '⚠️ Standard renders', competitor: '✅ Dedicated real estate feature' },
        { feature: 'VR Headset Support', zlendo: '✅ VR Studio', competitor: '❌ Not available' },
        { feature: 'Free Trial', zlendo: '✅ 14-day full access', competitor: '✅ 7-day trial' },
      ],
      winnerSections: [
        { category: 'AI & Automation', winner: 'zlendo', explanation: "RoomSketcher launched in 2012 — before modern AI — and has limited automation. Zlendo Realty's AI 2D-to-3D conversion, AI render engine, and AI Vastu analysis are a generation ahead." },
        { category: 'India Market Fit', winner: 'zlendo', explanation: 'RoomSketcher has no India-specific features — no vastu, no INR pricing, no India construction cost standards. Zlendo Realty is built specifically for the Indian design and construction market.' },
        { category: 'Professional Grade Tools', winner: 'zlendo', explanation: 'Zlendo Realty targets architecture and construction professionals. RoomSketcher is primarily a consumer and real estate tool — it lacks the precision and professional workflow features that architects need.' },
        { category: 'Real Estate Use Case', winner: 'competitor', explanation: 'RoomSketcher has a well-developed real estate snapshot product specifically for property listings. If your primary use case is generating floor plans for property listings, RoomSketcher has strong dedicated tools.' },
        { category: 'Ease of Use', winner: 'tie', explanation: 'Both platforms are web-based with no software installation. RoomSketcher has a simpler interface suited to non-professionals. Zlendo Realty has more features but maintains an intuitive workflow.' },
      ],
      zlendoPros: [
        'AI 2D-to-3D conversion in seconds',
        'Built-in vastu analysis',
        'INR pricing for India',
        'Construction cost estimation',
        'VR studio for immersive presentations',
        'Architect-grade professional tools',
      ],
      zlendoCons: ['More complex feature set than RoomSketcher', 'Real estate-specific listing tools less developed'],
      competitorPros: [
        'Simple, easy to learn',
        'Good for real estate property listings',
        'Established platform since 2012',
        'Good floor plan photo renders',
      ],
      competitorCons: [
        'No AI features',
        'No vastu',
        'USD-only pricing',
        'No construction cost estimation',
        'No VR support',
        'Limited for professional architects',
      ],
      verdictTitle: 'Verdict: Zlendo Realty for professionals, RoomSketcher for simple floor plans',
      verdictBody:
        "RoomSketcher built its reputation on simplicity — it is an excellent tool for homeowners who want to sketch a floor plan or real estate agents who need property layout images. But for professional architects, interior designers, and builders in India, it falls short. Zlendo Realty's AI automation, vastu integration, and India-specific pricing make it the professional choice. The 13-year technology gap between the platforms is also significant — RoomSketcher was designed in a pre-AI world.",
      whoShouldChooseZlendo:
        'Professional architects and interior designers. Construction companies needing cost estimation. Indian professionals who require vastu compliance. Anyone who needs AI-powered 2D-to-3D conversion.',
      whoShouldChooseCompetitor:
        'Homeowners sketching a simple layout. Real estate agents needing property listing floor plans. Non-professionals who want the simplest possible tool.',
      faqs: [
        {
          question: 'Is RoomSketcher free?',
          answer:
            "RoomSketcher offers a free account with limited features. The paid plans start at $49/month (USD), which is approximately ₹4,100/month. Zlendo Realty's plans start at ₹999/month and include more advanced features including AI tools and vastu analysis.",
        },
        {
          question: 'Can RoomSketcher do 3D design?',
          answer:
            "Yes, RoomSketcher has 3D visualization. However, the 3D model must be built manually from your floor plan — there is no AI-powered automatic 2D-to-3D conversion like Zlendo Realty offers. This makes the workflow significantly slower.",
        },
        {
          question: 'Does RoomSketcher work in India?',
          answer:
            'RoomSketcher is accessible from India but has no India-specific features. It uses USD pricing, has no vastu analysis, and does not account for Indian construction standards. Zlendo Realty is built specifically for the Indian design and construction market.',
        },
        {
          question: 'Which is better for architects — Zlendo Realty or RoomSketcher?',
          answer:
            'Zlendo Realty is the clear choice for professional architects. RoomSketcher is primarily designed for consumers and real estate agents. Zlendo offers architect-grade precision tools, AI 2D-to-3D conversion, construction cost estimation, and VR studio — features RoomSketcher does not have.',
        },
        {
          question: 'Does RoomSketcher have vastu?',
          answer:
            "No. RoomSketcher has no vastu analysis capability. This is a significant gap for India-based designers. Zlendo Realty's dedicated AI Vastu module can analyse floor plans against Vastu Shastra principles automatically.",
        },
        {
          question: 'Can I export from RoomSketcher and import to Zlendo Realty?',
          answer:
            "You can export your floor plans from RoomSketcher as PDF or image files and upload them to Zlendo Realty's AI 2D-to-3D converter, which will generate a 3D model automatically.",
        },
      ],
      ctaTitle: 'Try Zlendo Realty Free for 14 Days',
      ctaBody: 'Professional AI design tools starting at ₹999/month. No credit card required.',
      seoTitle: 'Zlendo Realty vs RoomSketcher (2025): Best Floor Plan Software for India?',
      seoDescription:
        'Compare Zlendo Realty vs RoomSketcher for Indian designers. AI tools, vastu analysis, INR pricing vs USD — find the best floor plan software for India.',
      seoKeywords: ['roomsketcher alternative india', 'zlendo vs roomsketcher', 'floor plan software india', 'ai floor plan tool india'],
    },

    'zlendo-vs-coohom': {
      pageType: 'comparison',
      heroTitle: 'Zlendo Realty vs Coohom (2025): Which Is Better for Indian Interior Designers?',
      heroBadge: 'Zlendo Wins for India Privacy & Vastu',
      heroSubtitle: 'A complete comparison of Zlendo Realty and Coohom on data privacy, vastu features, pricing in India, and AI capabilities.',
      heroCtaLabel: 'Try Zlendo Realty Free',
      competitorName: 'Coohom',
      competitorTagline: "Interior design software with the world's largest furniture catalog",
      competitorFounded: '2011',
      competitorPricing: 'Freemium — paid plans from $39/month (USD)',
      competitorBestFor: 'Interior designers focused on furniture visualization with large catalogs',
      zlendoPricing: '₹999–₹4,999/month (INR pricing)',
      zlendoBestFor: 'Indian architects, interior designers, and vastu consultants',
      comparisonRows: [
        { feature: 'Data Stored in India', zlendo: '✅ India/EU servers', competitor: '❌ China-based servers' },
        { feature: 'Vastu AI Analysis', zlendo: '✅ Dedicated AI module', competitor: '❌ Not available' },
        { feature: 'India INR Pricing', zlendo: '✅ Yes', competitor: '❌ USD only' },
        { feature: 'Furniture Catalog Size', zlendo: '⚠️ Growing catalog', competitor: '✅ 10M+ 3D models' },
        { feature: 'AI 2D to 3D Conversion', zlendo: '✅ Instant AI', competitor: '⚠️ Manual workflow' },
        { feature: 'Photorealistic Renders', zlendo: '✅ 60-second renders', competitor: '✅ High-quality renders' },
        { feature: 'Construction Cost Estimator', zlendo: '✅ BOQ built-in', competitor: '❌ Not available' },
        { feature: 'Virtual Walkthrough', zlendo: '✅ Browser-based', competitor: '✅ 720° panorama' },
        { feature: 'India Customer Support', zlendo: '✅ India-based team', competitor: '⚠️ English support, longer response times reported' },
        { feature: 'Free Plan', zlendo: '✅ 14-day trial', competitor: '✅ Permanent free tier' },
      ],
      winnerSections: [
        { category: 'India Data Privacy', winner: 'zlendo', explanation: 'Coohom is operated by Kujiale, a Chinese company, with data stored on Chinese servers. For Indian government projects, enterprise clients, and privacy-conscious businesses, this is a significant concern. Zlendo Realty stores data in India and the EU.' },
        { category: 'Vastu & India-Specific Features', winner: 'zlendo', explanation: "Coohom has zero vastu functionality. Zlendo Realty's AI Vastu module is unique — no other major design software offers automated vastu analysis. This is a decisive advantage for the Indian market." },
        { category: 'Furniture & Product Catalog', winner: 'competitor', explanation: "Coohom's catalog of 10M+ 3D models is exceptional and one of its key strengths. Zlendo Realty's catalog is growing but cannot match Coohom's scale today." },
        { category: 'Construction & Cost', winner: 'zlendo', explanation: "Zlendo's integrated BOQ and cost estimator is not available in Coohom. For professionals who deliver full project packages including cost estimates, Zlendo is the only choice." },
        { category: 'India Pricing', winner: 'zlendo', explanation: "Coohom's paid plans are USD-only. Zlendo Realty offers INR pricing, making it significantly more cost-effective for Indian professionals." },
      ],
      zlendoPros: [
        'Data stored in India/EU — no China data concern',
        'AI Vastu analysis',
        'INR pricing',
        'Construction cost estimation',
        'AI 2D-to-3D conversion',
        'India-based customer support',
      ],
      zlendoCons: ['Smaller furniture catalog than Coohom', 'No permanent free tier (14-day trial only)'],
      competitorPros: [
        '10M+ furniture and product 3D models',
        'Permanent free tier available',
        'Large user community in Asia',
        'Good rendering quality',
      ],
      competitorCons: [
        'China-based data storage — privacy concern for India',
        'No vastu analysis',
        'USD-only pricing',
        'No construction cost estimation',
        'No AI 2D-to-3D conversion',
        'Support response times from India can be slower',
      ],
      verdictTitle: 'Verdict: Zlendo Realty for India professionals, Coohom for furniture-heavy visualization',
      verdictBody:
        "Coohom's free tier and massive furniture catalog make it attractive. But for Indian design professionals working on real projects, Zlendo Realty addresses critical gaps: data privacy (China vs India/EU servers), vastu compliance, India pricing, and construction cost estimation. If your work involves government or enterprise clients in India, data residency may be a compliance requirement that makes Coohom unsuitable.",
      whoShouldChooseZlendo:
        'Indian professionals where data privacy and compliance matter. Architects and designers who need vastu. Anyone delivering construction cost estimates. Professionals who want INR pricing.',
      whoShouldChooseCompetitor:
        'Interior designers who need access to the widest possible furniture catalog. Professionals who want a permanent free tier to experiment. Designers who primarily work on furniture-heavy visualization projects.',
      faqs: [
        {
          question: 'Is Coohom available in India?',
          answer:
            'Coohom is accessible in India and has a user base there, particularly among interior designers. However, it is operated by a Chinese company with servers in China, which raises data privacy concerns for Indian enterprise clients and government projects.',
        },
        {
          question: 'Is Coohom free?',
          answer:
            'Coohom offers a permanent free tier with limited features. Paid plans are available from approximately $39/month (USD). Zlendo Realty offers a 14-day free trial with full access, with plans starting at ₹999/month (INR).',
        },
        {
          question: 'Does Coohom support vastu?',
          answer:
            "No. Coohom has no vastu analysis capability. This is a major gap for Indian interior designers and architects where vastu compliance is a standard client requirement. Zlendo Realty's AI Vastu module is unique in the market.",
        },
        {
          question: "Is Coohom's data stored in India?",
          answer:
            'No. Coohom is operated by Kujiale, a Chinese company, and user data is processed and stored on servers in China. For Indian businesses with data residency requirements or enterprise/government clients, this may be a compliance concern. Zlendo Realty stores data in India and the EU.',
        },
        {
          question: 'Which has better rendering, Coohom or Zlendo Realty?',
          answer:
            "Both platforms offer photorealistic rendering. Coohom is known for high-quality furniture visualization. Zlendo Realty's AI render engine produces results in under 60 seconds and excels at architectural and interior renders. The quality is comparable; the speed advantage belongs to Zlendo.",
        },
        {
          question: "Can I use Coohom's furniture models in Zlendo Realty?",
          answer:
            "Not directly. Both platforms have their own furniture catalogs. Zlendo Realty's catalog is growing, and users can also add custom furniture. The gap in catalog size between the two platforms is narrowing as Zlendo Realty continues to expand its library.",
        },
      ],
      ctaTitle: 'Try Zlendo Realty Free for 14 Days',
      ctaBody: 'India-based servers. INR pricing. AI Vastu analysis. No credit card required.',
      seoTitle: 'Zlendo Realty vs Coohom (2025): Which Is Better for Indian Interior Designers?',
      seoDescription:
        'Compare Zlendo Realty vs Coohom for Indian designers. Data privacy, vastu analysis, India pricing, and AI tools — complete 2025 comparison.',
      seoKeywords: ['coohom alternative india', 'zlendo vs coohom', 'interior design software india data privacy', 'vastu software india'],
    },

    'best-foyr-neo-alternatives': {
      pageType: 'alternatives',
      heroTitle: '5 Best Foyr Neo Alternatives for Indian Designers (2025)',
      heroBadge: "Buyer's Guide",
      heroSubtitle:
        "Looking for a Foyr Neo alternative? We've compared the top options on price, India support, vastu features, and AI capabilities.",
      alternativesIntro:
        'Foyr Neo is a capable interior design tool, but many Indian design professionals find it does not fully address their needs — particularly around vastu compliance, India pricing, and AI automation. Here are the top alternatives ranked for the Indian market.',
      alternatives: [
        {
          name: 'Zlendo Realty',
          tagline: 'Best overall Foyr Neo alternative for India',
          bestFor: 'Indian architects, interior designers, and vastu consultants',
          pricing: '₹999–₹4,999/month',
          pros: [
            'AI Vastu analysis — unique in the market',
            'INR pricing (50–80% cheaper than Foyr Neo)',
            '60-second AI renders',
            'Construction cost estimation',
            '2D-to-3D AI conversion',
          ],
          cons: ['Smaller mood board tools than Foyr Neo'],
          verdict:
            'Zlendo Realty is the top Foyr Neo alternative for Indian professionals. It addresses every gap Foyr Neo has for the Indian market: vastu, INR pricing, AI automation, and construction cost estimation.',
        },
        {
          name: 'RoomSketcher',
          tagline: 'Simpler alternative for basic floor plans',
          bestFor: 'Homeowners and real estate agents wanting simple layouts',
          pricing: '$49–$99/month (USD)',
          pros: ['Easy to use', 'Good floor plan photo renders', 'Established platform since 2012'],
          cons: ['No vastu', 'No AI features', 'USD pricing', 'Not professional-grade'],
          verdict:
            'RoomSketcher is a good step-down option for users who find Foyr Neo too complex, but it lacks AI and India-specific features.',
        },
        {
          name: 'Coohom',
          tagline: 'Alternative for furniture-heavy visualization',
          bestFor: 'Interior designers focused on furniture catalogs',
          pricing: 'Free – $39+/month',
          pros: ['10M+ furniture models', 'Free tier available', 'Good renders'],
          cons: ['China-based data storage', 'No vastu', 'USD pricing', 'No India support'],
          verdict:
            "Coohom's free tier and huge furniture catalog make it worth considering, but data privacy concerns and the lack of vastu are significant drawbacks for India.",
        },
        {
          name: 'SketchUp',
          tagline: 'Professional 3D modelling alternative',
          bestFor: 'Architects and engineers who need precise 3D modelling',
          pricing: '$119–$299/year',
          pros: ['Industry-standard 3D tool', 'Large plugin ecosystem', 'Precise modelling'],
          cons: ['Steep learning curve', 'No vastu', 'No AI automation', 'Expensive'],
          verdict:
            'SketchUp is for professionals who need precision 3D modelling, not a direct Foyr Neo replacement. Better for structural work than interior design visualization.',
        },
        {
          name: 'Planner 5D',
          tagline: 'Consumer-friendly alternative',
          bestFor: 'Homeowners and non-professionals',
          pricing: 'Free – $9.99/month',
          pros: ['Very affordable', 'Easy to use', 'Good for beginners'],
          cons: ['Not professional grade', 'No vastu', 'Limited export options', 'No India support'],
          verdict:
            'Planner 5D is an entry-level tool — fine for homeowners but not suitable for professional interior designers or architects.',
        },
      ],
      faqs: [
        {
          question: 'What is the best free Foyr Neo alternative?',
          answer:
            'Coohom offers a permanent free tier with basic design capabilities. For professional use in India, Zlendo Realty offers the most comprehensive 14-day free trial with full feature access.',
        },
        {
          question: 'Is there a Foyr Neo alternative with vastu?',
          answer:
            'Yes — Zlendo Realty is the only major design software with built-in AI Vastu analysis. No other Foyr Neo alternative — including RoomSketcher, Coohom, or SketchUp — offers vastu compliance checking.',
        },
        {
          question: 'Which Foyr Neo alternative has the best AI features?',
          answer:
            "Zlendo Realty offers the most AI automation: AI 2D-to-3D conversion, 60-second AI renders, and AI Vastu analysis. Most other Foyr Neo alternatives (RoomSketcher, Planner 5D) were built before AI became mainstream and have limited automation.",
        },
        {
          question: 'Can I get an INR-priced Foyr Neo alternative?',
          answer:
            "Yes. Zlendo Realty offers INR-denominated pricing starting from ₹999/month, which is significantly more affordable than Foyr Neo's USD pricing for Indian professionals.",
        },
        {
          question: 'Is Foyr Neo made in India?',
          answer:
            'Yes, Foyr Neo is an Indian company founded in 2020 and headquartered in Bengaluru. Despite being India-based, the platform lacks India-specific features like vastu analysis and does not offer INR pricing.',
        },
      ],
      ctaTitle: 'The Best Foyr Neo Alternative is Already Here',
      ctaBody: 'Zlendo Realty — built for India. AI Vastu, INR pricing, 60-second renders. Try free for 14 days.',
      seoTitle: '5 Best Foyr Neo Alternatives for Indian Designers (2025)',
      seoDescription:
        'Looking for Foyr Neo alternatives? Compare the top 5 options for Indian interior designers — with vastu, INR pricing, and AI features. Zlendo Realty ranked #1.',
      seoKeywords: ['foyr neo alternatives', 'foyr neo alternative india', 'best interior design software india 2025', 'design software with vastu'],
    },

    'best-roomsketcher-alternatives': {
      pageType: 'alternatives',
      heroTitle: '5 Best RoomSketcher Alternatives for India (2025)',
      heroBadge: "Buyer's Guide",
      heroSubtitle:
        'Need a RoomSketcher alternative with AI, vastu, or professional-grade tools? These are the best options for Indian design professionals.',
      alternativesIntro:
        'RoomSketcher has been a popular floor plan tool since 2012, but it was designed in a pre-AI era and lacks India-specific features that modern Indian professionals need. Here are the best alternatives.',
      alternatives: [
        {
          name: 'Zlendo Realty',
          tagline: 'Best professional RoomSketcher alternative for India',
          bestFor: 'Indian architects, interior designers, and vastu consultants',
          pricing: '₹999–₹4,999/month',
          pros: [
            'AI 2D-to-3D conversion — instant vs manual in RoomSketcher',
            'AI Vastu analysis',
            'INR pricing (much cheaper than RoomSketcher in USD)',
            'Construction cost estimation',
            'VR studio support',
          ],
          cons: ['More features to learn than RoomSketcher'],
          verdict:
            'Zlendo Realty is the top RoomSketcher alternative for Indian professionals. It offers every feature RoomSketcher has, plus AI automation, vastu, cost estimation, and India-appropriate pricing.',
        },
        {
          name: 'Coohom',
          tagline: 'Furniture-focused alternative with a free tier',
          bestFor: 'Interior designers who need a large furniture catalog',
          pricing: 'Free – $39+/month',
          pros: ['10M+ furniture models', 'Free permanent tier', 'Good render quality', 'More professional than RoomSketcher'],
          cons: ['China-based data storage', 'No vastu', 'USD pricing', 'Manual 3D workflow'],
          verdict:
            "Coohom steps up from RoomSketcher's simplicity and adds a much larger furniture library. The free tier makes it attractive, though the data privacy concern is real for Indian enterprise users.",
        },
        {
          name: 'Foyr Neo',
          tagline: 'Interior design alternative with mood board focus',
          bestFor: 'Interior designers who want advanced mood boards and material libraries',
          pricing: '$49–$149/month (USD)',
          pros: ['Dedicated mood board tools', 'Strong material library', 'Good client presentation UI'],
          cons: ['No vastu', 'USD-only pricing', 'More expensive than RoomSketcher', 'No AI 2D-to-3D'],
          verdict:
            'Foyr Neo is a step up from RoomSketcher for professional interior designers, particularly for mood board creation. But it shares the same gaps: no vastu, USD-only pricing.',
        },
        {
          name: 'SketchUp',
          tagline: 'Professional 3D modelling for architects',
          bestFor: 'Architects who need precision 3D structural modelling',
          pricing: '$119–$299/year',
          pros: ['Industry-standard 3D tool', 'Extensive plugin ecosystem', 'High precision'],
          cons: ['Steep learning curve', 'Not an interior design tool per se', 'No vastu', 'No AI features'],
          verdict:
            'SketchUp is for architectural 3D modelling professionals, not a like-for-like RoomSketcher alternative. If you need professional-grade 3D rather than simple floor plans, SketchUp is worth considering.',
        },
        {
          name: 'Planner 5D',
          tagline: 'Easiest and most affordable alternative',
          bestFor: 'Homeowners and non-professionals who want the simplest tool',
          pricing: 'Free – $9.99/month',
          pros: ['Very easy to use', 'Affordable', 'Works on mobile'],
          cons: ['Not professional grade', 'No vastu', 'Limited for architects', 'No AI automation'],
          verdict:
            'Planner 5D is a consumer tool comparable to RoomSketcher in simplicity but more affordable. Neither is suitable for professional architectural or interior design work.',
        },
      ],
      faqs: [
        {
          question: 'What is the best RoomSketcher alternative for India?',
          answer:
            "Zlendo Realty is the best RoomSketcher alternative for Indian professionals. It offers everything RoomSketcher provides — floor planning, 3D visualization, renders — plus features RoomSketcher lacks entirely: AI 2D-to-3D conversion, AI Vastu analysis, construction cost estimation, and INR pricing.",
        },
        {
          question: 'Is there a free RoomSketcher alternative?',
          answer:
            'Coohom and Planner 5D both offer permanent free tiers. Zlendo Realty offers a 14-day free trial with full access. For professional use, paid plans provide significantly better results.',
        },
        {
          question: 'Which RoomSketcher alternative has vastu?',
          answer:
            'Only Zlendo Realty has built-in AI Vastu analysis among RoomSketcher alternatives. Coohom, Foyr Neo, SketchUp, and Planner 5D have no vastu capability.',
        },
        {
          question: 'Is RoomSketcher good for architects?',
          answer:
            'RoomSketcher is primarily designed for consumers and real estate agents. Professional architects need more precision and features than RoomSketcher provides. Zlendo Realty and SketchUp are better choices for architectural professionals.',
        },
        {
          question: 'Can I import my RoomSketcher files into another tool?',
          answer:
            "You can export your RoomSketcher floor plans as PDF or image files and import them into Zlendo Realty's AI converter, which will automatically generate a 3D model from your existing 2D plan.",
        },
      ],
      ctaTitle: 'The Best RoomSketcher Alternative for India',
      ctaBody: 'Zlendo Realty — AI floor planning, vastu analysis, and 60-second renders. Try free for 14 days.',
      seoTitle: '5 Best RoomSketcher Alternatives for India (2025)',
      seoDescription:
        'Looking for RoomSketcher alternatives? Compare the top 5 options for Indian designers — with AI tools, vastu analysis, and INR pricing. Zlendo Realty ranked #1.',
      seoKeywords: ['roomsketcher alternatives', 'roomsketcher alternative india', 'floor plan software india', 'best design software india 2025'],
    },
  };

  return map[slug] ?? map['zlendo-vs-foyr-neo'];
}
