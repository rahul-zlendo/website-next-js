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
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getClient(false).fetch(comparePageQuery, { slug }).catch(() => null);
  const defaults = getCompareDefaults(slug);
  const title = cms?.seoTitle ?? defaults.seoTitle;
  const description = cms?.seoDescription ?? defaults.seoDescription;
  return createPageMetadata({
    title,
    description,
    path: `/compare/${slug}`,
    keywords: cms?.seoKeywords ?? defaults.seoKeywords,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
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

// ── Default content by slug (identical to [country] version) ─────────────────

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
      zlendoPros: ['INR pricing for Indian budget realities', 'AI Vastu analysis on every floor plan', '60-second photorealistic renders', 'Integrated construction cost estimation', 'VR studio for immersive client presentations', 'India-based customer support'],
      zlendoCons: ['Smaller furniture catalog than Foyr Neo', 'Mood board tools less mature', 'Global brand recognition still growing'],
      competitorPros: ['Strong mood board and material library', 'Good international reputation', 'Clean UI for interior designers'],
      competitorCons: ['No vastu feature', 'USD-only pricing (expensive in INR)', 'No India-specific pricing or support', 'No construction cost estimation', 'No 2D-to-3D AI conversion'],
      verdictTitle: 'Verdict: Zlendo Realty is the better choice for India-based design professionals',
      verdictBody: 'For interior designers, architects, and vastu consultants working in India, Zlendo Realty outperforms Foyr Neo on the factors that matter most: India pricing, vastu integration, AI automation, and construction cost estimation. Foyr Neo remains a solid choice for professionals primarily focused on mood boards and international design presentations, but for the Indian market, Zlendo Realty is the more practical and cost-effective solution.',
      whoShouldChooseZlendo: 'Indian interior designers who need vastu compliance. Architects who deliver construction cost estimates alongside designs. Design professionals who want INR pricing. Anyone who converts 2D floor plans to 3D frequently.',
      whoShouldChooseCompetitor: 'Interior designers who primarily create international-style mood boards. Professionals who work exclusively on global projects and do not need vastu. Studios with existing Foyr Neo workflows where switching cost is high.',
      faqs: [
        { question: 'Is Foyr Neo available in India?', answer: 'Yes, Foyr Neo is accessible in India via its web platform. However, pricing is in USD only — there is no India-specific pricing tier. For Indian professionals, this makes Foyr Neo significantly more expensive than Zlendo Realty, which offers INR-based plans.' },
        { question: 'Does Foyr Neo have vastu analysis?', answer: 'No. Foyr Neo does not offer any vastu analysis or vastu compliance checking. This is one of the key advantages of Zlendo Realty for the Indian market — its dedicated AI Vastu module analyses floor plans against Vastu Shastra principles automatically.' },
        { question: 'Which is better for 3D rendering, Foyr Neo or Zlendo Realty?', answer: "Both platforms offer photorealistic 3D rendering. Zlendo Realty's AI render engine produces results in under 60 seconds, while Foyr Neo's rendering is generally considered high quality but requires more manual setup." },
        { question: 'Can I create floor plans in Foyr Neo?', answer: "Yes, Foyr Neo includes a floor plan editor. However, it lacks the AI-powered 2D-to-3D conversion that Zlendo Realty offers — in Foyr Neo, you build the 3D model manually from your floor plan." },
        { question: 'How does Foyr Neo pricing compare to Zlendo Realty in India?', answer: 'Foyr Neo charges $49–$149/month in USD, which converts to approximately ₹4,100–₹12,400/month. Zlendo Realty offers plans starting from ₹999/month.' },
        { question: 'Is Zlendo Realty as good as Foyr Neo for client presentations?', answer: "Zlendo Realty includes virtual walkthroughs, VR studio support, and photorealistic renders. Foyr Neo has mature mood board features that Zlendo is still developing." },
        { question: 'Does Foyr Neo offer construction cost estimation?', answer: "No. Foyr Neo is a visualization-only platform — it does not include construction cost estimation or BOQ generation. Zlendo Realty's integrated cost estimator is a significant differentiator." },
        { question: 'Can I switch from Foyr Neo to Zlendo Realty?', answer: "Yes. Zlendo Realty's team offers onboarding support for professionals migrating from other platforms. Your existing floor plan files (PDF, DWG, images) can be uploaded directly to Zlendo's AI 2D-to-3D converter." },
      ],
      ctaTitle: 'Try Zlendo Realty Free for 14 Days',
      ctaBody: 'No credit card required. Full access to every feature including AI Vastu analysis. Cancel anytime.',
      seoTitle: 'Zlendo Realty vs Foyr Neo (2025): Best Interior Design Software for India?',
      seoDescription: 'Detailed comparison of Zlendo Realty vs Foyr Neo for Indian designers. Compare pricing in INR, vastu features, AI tools, 3D rendering, and India support.',
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
        { category: 'AI & Automation', winner: 'zlendo', explanation: "RoomSketcher launched in 2012 — before modern AI — and has limited automation. Zlendo Realty's AI tools are a generation ahead." },
        { category: 'India Market Fit', winner: 'zlendo', explanation: 'RoomSketcher has no India-specific features — no vastu, no INR pricing, no India construction standards. Zlendo Realty is built for India.' },
        { category: 'Professional Grade Tools', winner: 'zlendo', explanation: 'Zlendo Realty targets architecture professionals. RoomSketcher is primarily a consumer tool.' },
        { category: 'Real Estate Use Case', winner: 'competitor', explanation: 'RoomSketcher has a well-developed real estate snapshot product for property listings.' },
        { category: 'Ease of Use', winner: 'tie', explanation: 'Both platforms are web-based with no installation. RoomSketcher is simpler; Zlendo has more features.' },
      ],
      zlendoPros: ['AI 2D-to-3D conversion in seconds', 'Built-in vastu analysis', 'INR pricing for India', 'Construction cost estimation', 'VR studio', 'Architect-grade tools'],
      zlendoCons: ['More complex than RoomSketcher', 'Real estate-specific listing tools less developed'],
      competitorPros: ['Simple, easy to learn', 'Good for real estate listings', 'Established since 2012'],
      competitorCons: ['No AI features', 'No vastu', 'USD-only pricing', 'No cost estimation', 'No VR', 'Limited for professional architects'],
      verdictTitle: 'Verdict: Zlendo Realty for professionals, RoomSketcher for simple floor plans',
      verdictBody: "RoomSketcher is excellent for homeowners sketching a floor plan. But for professional architects and designers in India, Zlendo Realty's AI automation, vastu, and India pricing make it the clear professional choice.",
      whoShouldChooseZlendo: 'Professional architects and interior designers. Construction companies needing cost estimation. Indian professionals who require vastu. Anyone who needs AI-powered 2D-to-3D conversion.',
      whoShouldChooseCompetitor: 'Homeowners sketching a simple layout. Real estate agents needing property listing floor plans. Non-professionals who want the simplest possible tool.',
      faqs: [
        { question: 'Is RoomSketcher free?', answer: "RoomSketcher offers a free account with limited features. Paid plans start at $49/month (USD) — approximately ₹4,100/month. Zlendo Realty starts at ₹999/month with AI tools and vastu." },
        { question: 'Can RoomSketcher do 3D design?', answer: "Yes, but the 3D model must be built manually — there is no AI 2D-to-3D conversion like Zlendo Realty offers." },
        { question: 'Does RoomSketcher work in India?', answer: 'RoomSketcher is accessible from India but has no India-specific features — no vastu, USD pricing, and no India construction standards.' },
        { question: 'Which is better for architects?', answer: 'Zlendo Realty is the clear choice. RoomSketcher is primarily designed for consumers.' },
        { question: 'Does RoomSketcher have vastu?', answer: "No. Zlendo Realty's dedicated AI Vastu module can analyse floor plans against Vastu Shastra principles automatically." },
        { question: 'Can I import RoomSketcher files into Zlendo Realty?', answer: "Yes — export as PDF or image from RoomSketcher and upload to Zlendo Realty's AI 2D-to-3D converter." },
      ],
      ctaTitle: 'Try Zlendo Realty Free for 14 Days',
      ctaBody: 'Professional AI design tools starting at ₹999/month. No credit card required.',
      seoTitle: 'Zlendo Realty vs RoomSketcher (2025): Best Floor Plan Software for India?',
      seoDescription: 'Compare Zlendo Realty vs RoomSketcher for Indian designers. AI tools, vastu analysis, INR pricing vs USD — find the best floor plan software for India.',
      seoKeywords: ['roomsketcher alternative india', 'zlendo vs roomsketcher', 'floor plan software india'],
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
        { category: 'India Data Privacy', winner: 'zlendo', explanation: 'Coohom is operated by Kujiale, a Chinese company, with data stored on Chinese servers. Zlendo Realty stores data in India and the EU.' },
        { category: 'Vastu & India-Specific Features', winner: 'zlendo', explanation: "Coohom has zero vastu functionality. Zlendo Realty's AI Vastu module is the only major design platform offering automated vastu analysis." },
        { category: 'Furniture & Product Catalog', winner: 'competitor', explanation: "Coohom's 10M+ 3D models is a key strength. Zlendo Realty's catalog is growing." },
        { category: 'Construction & Cost', winner: 'zlendo', explanation: "Zlendo's integrated BOQ and cost estimator is not available in Coohom." },
        { category: 'India Pricing', winner: 'zlendo', explanation: "Coohom's paid plans are USD-only. Zlendo offers INR pricing." },
      ],
      zlendoPros: ['Data stored in India/EU', 'AI Vastu analysis', 'INR pricing', 'Construction cost estimation', 'AI 2D-to-3D conversion', 'India-based support'],
      zlendoCons: ['Smaller furniture catalog', 'No permanent free tier'],
      competitorPros: ['10M+ furniture models', 'Permanent free tier', 'Large Asian user community', 'Good rendering'],
      competitorCons: ['China-based data storage', 'No vastu', 'USD-only pricing', 'No cost estimation', 'No AI 2D-to-3D'],
      verdictTitle: 'Verdict: Zlendo Realty for India professionals, Coohom for furniture-heavy visualization',
      verdictBody: "Coohom's free tier and massive furniture catalog make it attractive. But for Indian professionals, Zlendo Realty addresses critical gaps: data privacy, vastu compliance, India pricing, and cost estimation.",
      whoShouldChooseZlendo: 'Indian professionals where data privacy and compliance matter. Architects who need vastu. Anyone delivering cost estimates. Professionals who want INR pricing.',
      whoShouldChooseCompetitor: 'Interior designers who need the widest possible furniture catalog. Professionals who want a permanent free tier. Furniture-heavy visualization projects.',
      faqs: [
        { question: 'Is Coohom available in India?', answer: 'Coohom is accessible in India but is operated by a Chinese company with servers in China, raising data privacy concerns for enterprise clients.' },
        { question: 'Is Coohom free?', answer: 'Coohom has a permanent free tier. Paid plans start at ~$39/month (USD). Zlendo Realty offers a 14-day free trial with plans from ₹999/month.' },
        { question: 'Does Coohom support vastu?', answer: "No. Coohom has no vastu analysis. Zlendo Realty's AI Vastu module is unique in the market." },
        { question: "Is Coohom's data stored in India?", answer: 'No — data is stored in China. Zlendo Realty stores data in India and the EU.' },
        { question: 'Which has better rendering?', answer: "Both offer photorealistic renders. Zlendo Realty's AI render engine completes in under 60 seconds." },
        { question: "Can I use Coohom's furniture models in Zlendo Realty?", answer: "Not directly — both platforms have separate catalogs. Zlendo Realty's library is growing." },
      ],
      ctaTitle: 'Try Zlendo Realty Free for 14 Days',
      ctaBody: 'India-based servers. INR pricing. AI Vastu analysis. No credit card required.',
      seoTitle: 'Zlendo Realty vs Coohom (2025): Which Is Better for Indian Interior Designers?',
      seoDescription: 'Compare Zlendo Realty vs Coohom for Indian designers. Data privacy, vastu analysis, India pricing, and AI tools — complete 2025 comparison.',
      seoKeywords: ['coohom alternative india', 'zlendo vs coohom', 'interior design software india data privacy'],
    },
    'best-foyr-neo-alternatives': {
      pageType: 'alternatives',
      heroTitle: '5 Best Foyr Neo Alternatives for Indian Designers (2025)',
      heroBadge: "Buyer's Guide",
      heroSubtitle: "Looking for a Foyr Neo alternative? We've compared the top options on price, India support, vastu features, and AI capabilities.",
      alternativesIntro: 'Foyr Neo is a capable interior design tool, but many Indian design professionals find it does not fully address their needs — particularly around vastu compliance, India pricing, and AI automation. Here are the top alternatives ranked for the Indian market.',
      alternatives: [
        { name: 'Zlendo Realty', tagline: 'Best overall Foyr Neo alternative for India', bestFor: 'Indian architects, interior designers, and vastu consultants', pricing: '₹999–₹4,999/month', pros: ['AI Vastu analysis — unique in the market', 'INR pricing (50–80% cheaper than Foyr Neo)', '60-second AI renders', 'Construction cost estimation', '2D-to-3D AI conversion'], cons: ['Smaller mood board tools than Foyr Neo'], verdict: 'Zlendo Realty is the top Foyr Neo alternative for Indian professionals. It addresses every gap Foyr Neo has for the Indian market: vastu, INR pricing, AI automation, and construction cost estimation.' },
        { name: 'RoomSketcher', tagline: 'Simpler alternative for basic floor plans', bestFor: 'Homeowners and real estate agents', pricing: '$49–$99/month (USD)', pros: ['Easy to use', 'Good floor plan renders', 'Established since 2012'], cons: ['No vastu', 'No AI features', 'USD pricing', 'Not professional-grade'], verdict: 'RoomSketcher is a step-down option for users who find Foyr Neo too complex, but lacks AI and India-specific features.' },
        { name: 'Coohom', tagline: 'Alternative for furniture-heavy visualization', bestFor: 'Interior designers focused on furniture catalogs', pricing: 'Free – $39+/month', pros: ['10M+ furniture models', 'Free tier available', 'Good renders'], cons: ['China-based data storage', 'No vastu', 'USD pricing'], verdict: "Coohom's free tier and furniture catalog make it worth considering, but data privacy concerns are real for India." },
        { name: 'SketchUp', tagline: 'Professional 3D modelling alternative', bestFor: 'Architects needing precise 3D modelling', pricing: '$119–$299/year', pros: ['Industry-standard 3D', 'Large plugin ecosystem', 'Precise modelling'], cons: ['Steep learning curve', 'No vastu', 'No AI automation', 'Expensive'], verdict: 'SketchUp is for precision 3D modelling professionals, not a direct Foyr Neo replacement.' },
        { name: 'Planner 5D', tagline: 'Consumer-friendly alternative', bestFor: 'Homeowners and non-professionals', pricing: 'Free – $9.99/month', pros: ['Very affordable', 'Easy to use', 'Good for beginners'], cons: ['Not professional grade', 'No vastu', 'No India support'], verdict: 'Planner 5D is an entry-level tool — not suitable for professional designers.' },
      ],
      faqs: [
        { question: 'What is the best free Foyr Neo alternative?', answer: 'Coohom offers a permanent free tier. For professional India use, Zlendo Realty offers the best 14-day full-access trial.' },
        { question: 'Is there a Foyr Neo alternative with vastu?', answer: 'Yes — Zlendo Realty is the only major design software with built-in AI Vastu analysis.' },
        { question: 'Which Foyr Neo alternative has the best AI features?', answer: 'Zlendo Realty: AI 2D-to-3D conversion, 60-second AI renders, and AI Vastu analysis.' },
        { question: 'Can I get an INR-priced Foyr Neo alternative?', answer: 'Yes. Zlendo Realty offers INR pricing from ₹999/month.' },
        { question: 'Is Foyr Neo made in India?', answer: 'Yes, Foyr Neo is India-based (Bengaluru, 2020). Despite this, it lacks vastu and INR pricing.' },
      ],
      ctaTitle: 'The Best Foyr Neo Alternative is Already Here',
      ctaBody: 'Zlendo Realty — built for India. AI Vastu, INR pricing, 60-second renders. Try free for 14 days.',
      seoTitle: '5 Best Foyr Neo Alternatives for Indian Designers (2025)',
      seoDescription: 'Looking for Foyr Neo alternatives? Compare the top 5 options for Indian interior designers — with vastu, INR pricing, and AI features. Zlendo Realty ranked #1.',
      seoKeywords: ['foyr neo alternatives', 'foyr neo alternative india', 'best interior design software india 2025'],
    },
    'best-roomsketcher-alternatives': {
      pageType: 'alternatives',
      heroTitle: '5 Best RoomSketcher Alternatives for India (2025)',
      heroBadge: "Buyer's Guide",
      heroSubtitle: 'Need a RoomSketcher alternative with AI, vastu, or professional-grade tools? These are the best options for Indian design professionals.',
      alternativesIntro: 'RoomSketcher has been a popular floor plan tool since 2012, but it was designed in a pre-AI era and lacks India-specific features that modern Indian professionals need. Here are the best alternatives.',
      alternatives: [
        { name: 'Zlendo Realty', tagline: 'Best professional RoomSketcher alternative for India', bestFor: 'Indian architects, interior designers, and vastu consultants', pricing: '₹999–₹4,999/month', pros: ['AI 2D-to-3D conversion', 'AI Vastu analysis', 'INR pricing', 'Construction cost estimation', 'VR studio'], cons: ['More features to learn than RoomSketcher'], verdict: 'Zlendo Realty offers every feature RoomSketcher has, plus AI automation, vastu, cost estimation, and India-appropriate pricing.' },
        { name: 'Coohom', tagline: 'Furniture-focused alternative with a free tier', bestFor: 'Interior designers who need a large furniture catalog', pricing: 'Free – $39+/month', pros: ['10M+ furniture models', 'Free permanent tier', 'Good render quality'], cons: ['China-based data storage', 'No vastu', 'USD pricing'], verdict: "Coohom steps up from RoomSketcher's simplicity. The free tier is attractive, though data privacy is a concern for Indian enterprise users." },
        { name: 'Foyr Neo', tagline: 'Interior design with mood board focus', bestFor: 'Interior designers wanting advanced mood boards', pricing: '$49–$149/month (USD)', pros: ['Dedicated mood board tools', 'Strong material library', 'Good client presentation UI'], cons: ['No vastu', 'USD-only pricing', 'No AI 2D-to-3D'], verdict: 'Foyr Neo is a step up for professional interior designers, particularly for mood boards. Shares the same gaps as RoomSketcher: no vastu, USD pricing.' },
        { name: 'SketchUp', tagline: 'Professional 3D modelling for architects', bestFor: 'Architects who need precision 3D structural modelling', pricing: '$119–$299/year', pros: ['Industry-standard 3D', 'Extensive plugin ecosystem', 'High precision'], cons: ['Steep learning curve', 'Not an interior design tool per se', 'No vastu'], verdict: 'SketchUp is for architectural 3D modelling professionals, not a like-for-like RoomSketcher alternative.' },
        { name: 'Planner 5D', tagline: 'Easiest and most affordable alternative', bestFor: 'Homeowners and non-professionals', pricing: 'Free – $9.99/month', pros: ['Very easy to use', 'Affordable', 'Works on mobile'], cons: ['Not professional grade', 'No vastu', 'No AI automation'], verdict: 'Planner 5D is a consumer tool comparable to RoomSketcher in simplicity but more affordable.' },
      ],
      faqs: [
        { question: 'What is the best RoomSketcher alternative for India?', answer: "Zlendo Realty — it offers everything RoomSketcher has plus AI 2D-to-3D, AI Vastu, cost estimation, and INR pricing." },
        { question: 'Is there a free RoomSketcher alternative?', answer: 'Coohom and Planner 5D both offer permanent free tiers. Zlendo Realty offers a 14-day full-access trial.' },
        { question: 'Which RoomSketcher alternative has vastu?', answer: 'Only Zlendo Realty has built-in AI Vastu analysis.' },
        { question: 'Is RoomSketcher good for architects?', answer: 'RoomSketcher is primarily designed for consumers. Professional architects need Zlendo Realty or SketchUp.' },
        { question: 'Can I import my RoomSketcher files into another tool?', answer: "Export from RoomSketcher as PDF or image, then import into Zlendo Realty's AI converter for automatic 3D generation." },
      ],
      ctaTitle: 'The Best RoomSketcher Alternative for India',
      ctaBody: 'Zlendo Realty — AI floor planning, vastu analysis, and 60-second renders. Try free for 14 days.',
      seoTitle: '5 Best RoomSketcher Alternatives for India (2025)',
      seoDescription: 'Looking for RoomSketcher alternatives? Compare the top 5 options for Indian designers — with AI tools, vastu analysis, and INR pricing. Zlendo Realty ranked #1.',
      seoKeywords: ['roomsketcher alternatives', 'roomsketcher alternative india', 'floor plan software india'],
    },
  };

  return map[slug] ?? map['zlendo-vs-foyr-neo'];
}
