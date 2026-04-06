import { Metadata } from 'next';
import Link from 'next/link';
import { draftMode } from 'next/headers';
import { ArrowRight, Zap, ShieldCheck, Sparkles, Eye, Ruler, Calculator, Box, Image as ImageIcon, Video, Palette, Compass, Layers, Calendar } from 'lucide-react';
import { designLibrary, SIGNUP_URL } from '@/lib/constants/urls';
import HomeClient from './HomeClient';
import { getClient } from '@/lib/sanity/client';
import { homePageQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';

const BASE_URL = 'https://zlendorealty.com';
const COUNTRY = 'in';

// Revalidate every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

// Helper to build country-prefixed paths (server-side equivalent of getPath)
function getPath(path: string): string {
  // If it's an absolute URL, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Prevent duplicate country prefix if already present
  if (cleanPath.startsWith(`/${COUNTRY}/`) || cleanPath === `/${COUNTRY}`) {
    return cleanPath;
  }

  if (cleanPath === '/') return `/${COUNTRY}`;
  return `/${COUNTRY}${cleanPath}`;
}

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  // Fetch SEO data from Sanity
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cmsSeo: Record<string, any> | null = null;
  try {
    cmsSeo = await getClient(false).fetch(homePageQuery);
  } catch { /* fallback to defaults */ }

  if (country === 'in') {
    const seoTitle = cmsSeo?.seoTitle ?? 'AI Home & Office Design Software for Builders and Architects';
    const seoDesc = cmsSeo?.seoDescription ?? 'Zlendo Realty AI Floor Planner and 2D-to-3D Designs in Minutes. All-in-One Software for Architects, Builders, Interior Designers, and Vastu Consultants. Start Your Free Trial Now!';
    const ogTitle = cmsSeo?.ogTitle ?? 'AI-Powered Home & Office Design Software';
    const ogDesc = cmsSeo?.ogDescription ?? 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI. The all-in-one design software for Architects, Builders, Interior designers, and Vastu Consultants. Start your free trial today!';
    const ogImg = urlFor(cmsSeo?.ogImage).url() || `${BASE_URL}/og-image.jpg`;

    return {
      title: {
        absolute: seoTitle,
      },
      description: seoDesc,
      openGraph: {
        title: ogTitle,
        description: ogDesc,
        url: `${BASE_URL}/in`,
        siteName: 'Zlendo Realty',
        images: [
          {
            url: ogImg,
            width: 1200,
            height: 630,
            alt: 'Zlendo Realty AI Design Software',
            type: 'image/jpeg',
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: ogTitle,
        description: ogDesc,
        images: [ogImg],
      },
      alternates: {
        canonical: `${BASE_URL}/in`,
        languages: {
          'en-IN': `${BASE_URL}/in`,
          'x-default': `${BASE_URL}/in`,
        },
      },
    };
  }

  return {
    title: 'Zlendo Realty | Free 3D Home Design & Floor Planning Software',
    description: 'Free 3D Home Design & Floor Planning Software. Explore powerful tools and resources to design your perfect space',
  };
}

// ── Static Data ──────────────────────────────────────────────────────────────

// faqSchema is now generated dynamically from CMS data (see inside Page component)

const faqs = [
  {
    q: "Who can use Zlendo Realty?",
    a: "Zlendo Realty can be used by homeowners, architects, students, builders, and real estate professionals. It supports both beginners and experienced users involved in home planning and design."
  },
  {
    q: "Is it beginner friendly?",
    a: "Yes. The platform is designed to be easy to use and does not require any technical, architectural, or design background."
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. Zlendo Realty works seamlessly across mobile phones, tablets, and desktop devices, allowing access anytime and anywhere."
  },
  {
    q: "Is my data secure?",
    a: "Yes. Your designs and project data remain private unless you choose to share them. Strong data security measures are maintained."
  },
  {
    q: "Can it be used for professional work?",
    a: "Yes. The platform is suitable for professional projects, client presentations, and real estate planning, and is widely used for architectural design services and project visualization."
  },
  {
    q: "Is support available?",
    a: "Yes. Dedicated customer support is available to assist users whenever help is needed."
  }
];

const intelligenceDimensions = [
  {
    id: '1D',
    title: 'Floor Plan Drafting',
    shortDesc: 'Precision 2D Layouts',
    longDesc: 'Create professional-grade floor plans with exact dimensions. Our intelligent drafting tool auto-corrects alignments and suggests standard room sizes.',
    iconName: 'Ruler',
    color: 'text-blue-500',
    bg: 'bg-blue-500',
    benefit: 'Zero-Error Planning',
    cta: 'Create Your Plan',
    link: getPath('/products/floor-planner'),
  },
  {
    id: '2D',
    title: 'Instant 3D Conversion',
    shortDesc: 'One-Click Transformation',
    longDesc: 'Watch your 2D sketch instantly rise into a 3D structural model. Walls, windows, and doors are automatically generated in seconds.',
    iconName: 'Box',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500',
    benefit: 'Instant Visualization',
    cta: 'Start Convert to 3D',
    link: getPath('/products/2d-to-3d'),
  },
  {
    id: '3D',
    title: 'Interactive Walkthrough',
    shortDesc: 'Immersive Exploration',
    longDesc: 'Walk through your future home as if you were there. Open doors, inspect corners, and feel the space in first-person view.',
    iconName: 'Eye',
    color: 'text-zlendo-teal',
    bg: 'bg-zlendo-teal',
    benefit: 'True-to-Life Experience',
    cta: 'Experience It Live',
    link: getPath('/products/virtual-walkthrough'),
  },
  {
    id: '4D',
    title: 'Photorealistic Rendering',
    shortDesc: '4K Visualization',
    longDesc: 'Generate magazine-quality static renders with ray-traced lighting, shadows, and reflections to see the true beauty of your design.',
    iconName: 'Image',
    color: 'text-purple-500',
    bg: 'bg-purple-500',
    benefit: 'Stunning Presentation',
    cta: 'Start Render Realistic',
    link: getPath('/products/realistic-renders'),
  },
  {
    id: '5D',
    title: 'Cinematic Video',
    shortDesc: 'Automated Tours',
    longDesc: 'Create smooth, cinematic video tours of your property automatically. Perfect for presentations and social media sharing.',
    iconName: 'Video',
    color: 'text-pink-500',
    bg: 'bg-pink-500',
    benefit: 'Engaging Storytelling',
    cta: 'Build Video Tour',
    link: getPath('/products/realistic-renders'),
  },
  {
    id: '6D',
    title: 'Cost Engine',
    shortDesc: 'Real-Time BOQ',
    longDesc: 'Get an instant Bill of Quantities (BOQ) with local pricing. Know accurately how much cement, steel, and paint you need.',
    iconName: 'Calculator',
    color: 'text-emerald-600',
    bg: 'bg-emerald-600',
    benefit: 'Budget Certainty',
    cta: 'Check Project Cost',
    link: getPath('/products/cost-estimator'),
  },
  {
    id: '7D',
    title: 'Material Library',
    shortDesc: 'Infinite Customization',
    longDesc: 'Access thousands of real-world materials. Swap tiles, paints, and fabrics instantly to find the perfect combination.',
    iconName: 'Palette',
    color: 'text-amber-500',
    bg: 'bg-amber-500',
    benefit: 'Design Freedom',
    cta: 'Explore Materials',
    link: getPath(designLibrary),
  },
  {
    id: '8D',
    title: 'AI Style Inspiration',
    shortDesc: 'Generative Design',
    longDesc: 'Stuck on ideas? Let our AI suggest themes like "Modern Minimalist" or "Traditional Warm" tailored to your room layout.',
    iconName: 'Sparkles',
    color: 'text-rose-500',
    bg: 'bg-rose-500',
    benefit: 'Instant Creativity',
    cta: 'Get AI Ideas',
    link: getPath('/products/floor-planner'),
  },
  {
    id: '9D',
    title: 'Vastu Recommendations',
    shortDesc: 'Ancient Wisdom',
    longDesc: 'Get instant AI-driven Vastu compliance scores. Detect energy imbalances and receive corrective suggestions for harmony.',
    iconName: 'Compass',
    color: 'text-orange-500',
    bg: 'bg-orange-500',
    benefit: 'Energy Harmony',
    cta: 'Run Vastu Check',
    link: getPath('/products/vastu'),
  }
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Ruler, Box, Eye, Image: ImageIcon, Video, Calculator, Palette, Sparkles, Compass,
};

const features = [
  {
    section: 'Plan & Design',
    title: '2D to 3D Converter',
    description: 'Zlendo Realty converts simple floor plans into structured, walkable 3D environments without manual modeling.',
    howItWorks: ['Upload Plan', 'Interpret Layout', 'Generate 3D Model', 'Ready for Exploration'],
    cta: 'Experience the Converter',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    reverse: false
  },
  {
    section: 'Visualize',
    title: 'AI Room Inspiration',
    description: 'Inspiration is generated based on actual room context, not generic templates.',
    howItWorks: ['Understand Room Context', 'Generate Relevant Inspirations', 'Preview in Context', 'Apply Selectively'],
    cta: 'Start Designing with AI',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    reverse: true
  },
  {
    section: 'Share',
    title: '3D Export Toolkit',
    description: 'Design outputs are prepared for communication and downstream use.',
    howItWorks: ['Select Design Version', 'Choose Export Format', 'Export or Share', 'Reuse Across Workflows'],
    cta: 'Try It Now',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    reverse: false
  }
];

const comparisonRows = [
  {
    title: "Instant Transformation",
    trad: "Staring at flat 2D plans",
    zlendo: "Immersive 8K Walkthroughs",
    img: "from-purple-500 to-pink-400",
  },
  {
    title: "Smart Customization",
    trad: "Vague per-sqft estimates",
    zlendo: "Real-time Material & Budget",
    img: "from-blue-500 to-cyan-400",
  },
  {
    title: "Construction Clarity",
    trad: "On-site guesswork & errors",
    zlendo: "Precision Digital Twin",
    img: "from-green-500 to-emerald-400",
  },
  {
    title: "Unmatched Speed",
    trad: "Weeks for a single render",
    zlendo: "Full 3D Tour in 30 Seconds",
    img: "from-orange-500 to-amber-400",
  }
];

// ── Page Component (Server Component — renders real HTML) ────────────────────

export default async function Page() {
  // Fetch CMS content (falls back to static data if no document is published yet)
  const { isEnabled: preview } = await draftMode();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cms: Record<string, any> | null = await getClient(preview).fetch(homePageQuery).catch(() => null);

  // Merge CMS values over static defaults
  const resolvedFaqs = cms?.faqs?.length
    ? cms.faqs.map((f: { question: string; answer: string }) => ({ q: f.question, a: f.answer }))
    : faqs;

  const resolvedFeatures = cms?.features?.length ? cms.features : features;
  const resolvedComparisonRows = cms?.comparisonRows?.length
    ? cms.comparisonRows.map((r: { title: string; oldWay: string; newWay: string; gradient: string }) => ({
      title: r.title,
      trad: r.oldWay,
      zlendo: r.newWay,
      img: r.gradient ?? 'from-purple-500 to-pink-400',
    }))
    : comparisonRows;

  const resolvedIntelligence = cms?.intelligenceDimensions?.length
    ? cms.intelligenceDimensions.map((d: {
      id: string; title: string; shortDesc: string; longDesc: string;
      benefit: string; cta: string; link: string; iconName: string; colorClass: string; bgClass: string;
    }) => ({
      id: d.id, title: d.title, shortDesc: d.shortDesc, longDesc: d.longDesc,
      benefit: d.benefit, cta: d.cta, link: d.link,
      iconName: d.iconName, color: d.colorClass, bg: d.bgClass,
    }))
    : intelligenceDimensions;

  const heroTitle = cms?.heroTitle ?? 'Design Smarter.';
  const heroHighlight = cms?.heroTitleHighlight ?? 'Build Faster.';
  const heroAfter = cms?.heroTitleAfter ?? 'Deliver Better.';
  const heroSubtitleText = cms?.heroSubtitle ?? 'Powerful Civil Plan & Interior Design Software for Professionals and Individuals. Zlendo Realty helps you create accurate 2D plans, stunning 3D designs, and complete interior layouts—all from one easy-to-use platform.';
  const heroPrimaryLabel = cms?.heroPrimaryCtaLabel ?? 'Design Home for Free';
  const heroSecondaryLabel = cms?.heroSecondaryCtaLabel ?? 'Schedule Your Business Demo';
  const faqTitle = cms?.faqSectionTitle ?? 'Frequently Asked Questions';
  const ctaTitle = cms?.ctaTitle ?? 'Start designing your house with Zlendo Realty';
  const ctaSubtitle = cms?.ctaSubtitle ?? 'Draw a floor plan and create a 3D home design in 10 min.';
  const ctaButtonLabel = cms?.ctaButtonLabel ?? 'Get Started For Free';
  const howToTitle = cms?.howToSectionTitle ?? 'How to design a home online for free';

  const templatesTitle = cms?.templatesSectionTitle;
  const templatesHighlight = cms?.templatesSectionTitleHighlight;
  const templatesSubtitle = cms?.templatesSectionSubtitle;
  const templatesButton = cms?.templatesButtonLabel;
  const templatesNoData = cms?.templatesNoDataText;

  const badgeText = cms?.heroBadgeText ?? 'Create with Confidence';
  const heroPrimaryLink = cms?.heroPrimaryCtaLink ?? SIGNUP_URL;
  const heroSecondaryLink = cms?.heroSecondaryCtaLink ?? `/${COUNTRY}/business#demo-form`;
  const intelligenceBadge = cms?.intelligenceBadgeText ?? 'Proprietary 9D Framework';
  const intelligenceTitle = cms?.intelligenceSectionTitle ?? 'The Intelligence';
  const intelligenceHighlight = cms?.intelligenceSectionTitleHighlight ?? 'behind';
  const intelligenceAfter = cms?.intelligenceSectionTitleAfter ?? 'your dream home.';
  const intelligenceSubtitle = cms?.intelligenceSectionSubtitle ?? 'Swipe to explore how our 9D engine guarantees total peace of mind.';
  const comparisonBadge = cms?.comparisonBadgeText ?? 'Peace of Mind';
  const comparisonTitle = cms?.comparisonTitle ?? 'Your Dream Design';
  const comparisonHighlight = cms?.comparisonTitleHighlight ?? 'made Easy';
  const comparisonSubtitle = cms?.comparisonSubtitle ?? 'Why 12,000+ modern homeowners chose Zlendo Realty over traditional guesswork.';
  const ctaImageUrl = cms?.ctaImageUrl ?? 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800';
  const ctaLink = cms?.ctaButtonLink ?? SIGNUP_URL;
  const comparisonOldWayLabel = cms?.comparisonOldWayLabel ?? 'Old Way';
  const comparisonNewWayLabel = cms?.comparisonNewWayLabel ?? 'Zlendo Realty Way';
  const dimensionSuffix = cms?.dimensionSuffix ?? 'Dimension';

  // Build FAQ structured data dynamically from CMS
  const faqSchema = {
    '@context': 'https://schema.org/',
    '@type': 'FAQPage',
    'name': 'Zlendo Realty Frequently Asked Questions',
    'mainEntity': resolvedFaqs.map((faq: { q: string; a: string }) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };

  // Icon map for comparison rows
  const comparisonIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Layers, Palette, Box, Zap,
  };

  return (
    <>
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomeClient
        cms={cms}
        resolvedFaqs={resolvedFaqs}
        resolvedFeatures={resolvedFeatures}
        resolvedComparisonRows={resolvedComparisonRows}
        resolvedIntelligence={resolvedIntelligence}
      />
    </>
  );
}
// ok