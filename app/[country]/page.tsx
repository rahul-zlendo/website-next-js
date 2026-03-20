import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Sparkles, Eye, Ruler, Calculator, Box, Image as ImageIcon, Video, Palette, Compass, Layers, Calendar } from 'lucide-react';
import { designLibrary, SIGNUP_URL } from '@/lib/constants/urls';
import FaqAccordion from './components/FaqAccordion';
import DesignTemplateGallery from './components/DesignTemplateGallery';

const BASE_URL = 'https://zlendorealty.com';
const COUNTRY = 'in';

// Helper to build country-prefixed paths (server-side equivalent of getPath)
function getPath(path: string): string {
  // If it's an absolute URL, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') return `/${COUNTRY}`;
  return `/${COUNTRY}${cleanPath}`;
}

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  if (country === 'in') {
    return {
      title: {
        absolute: 'AI Home & Office Design Software for Builders and Architects',
      },
      description: 'Zlendo Realty AI Floor Planner and 2D-to-3D Designs in Minutes. All-in-One Software for Architects, Builders, Interior Designers, and Vastu Consultants. Start Your Free Trial Now!',
      openGraph: {
        title: 'AI-Powered Home & Office Design Software | Zlendo Realty',
        description: 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI. The all-in-one design software for Architects, Builders, Interior designers, and Vastu Consultants. Start your free trial today!',
        url: `${BASE_URL}/in`,
        siteName: 'Zlendo Realty',
        images: [
          {
            url: `${BASE_URL}/og-image.jpg`,
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
        title: 'AI-Powered Home & Office Design Software | Zlendo Realty',
        description: 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI.',
        images: [`${BASE_URL}/og-image.jpg`],
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

const faqSchema = {
  '@context': 'https://schema.org/',
  '@type': 'FAQPage',
  'name': 'Zlendo Realty Frequently Asked Questions',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Who can use Zlendo Realty?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Zlendo Realty can be used by homeowners, architects, students, builders, and property professionals. It supports both beginners and experienced users involved in home planning and design.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is it beginner friendly?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. The platform is designed to be easy to use and does not require any technical, architectural, or design background.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Does it work on mobile?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Zlendo Realty works seamlessly across mobile phones, tablets, and desktop devices, allowing access anytime and anywhere.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is my data secure?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Your designs and project data remain private unless you choose to share them. Strong data security measures are maintained.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Can it be used for professional work?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. The platform is suitable for professional projects, client presentations, and property planning, and is widely used for architectural design services and project visualization.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is support available?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Dedicated customer support is available to assist users whenever help is needed.',
      },
    },
  ],
};

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

export default function Page() {
  return (
    <>
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white font-nunito selection:bg-zlendo-teal/10">
        <main className="pt-8 md:pt-14">

          {/* ───────────────── HERO SECTION ───────────────── */}
          <section className="container-custom text-center mb-10 md:mb-16 px-4 overflow-visible relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-zlendo-teal/10 blur-[120px] rounded-full -z-10" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-3">
              <Sparkles className="w-4 h-4 text-zlendo-teal" />
              <span className="text-xs font-black text-zlendo-teal uppercase tracking-[0.2em]">Create with Confidence</span>
            </div>

            <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito text-zlendo-grey-dark leading-[1.1] md:leading-[1.05] mb-3 md:mb-4 max-w-5xl mx-auto tracking-tight md:tracking-tighter">
              Design Smarter. <span className="text-zlendo-teal italic"> Build Faster.</span> Deliver Better.
            </h1>

            <p className="text-base md:text-lg text-zlendo-grey-medium font-bold max-w-3xl mx-auto mb-5 leading-relaxed opacity-90">
              Powerful Civil Plan &amp; Interior Design Software for Professionals and Individuals.
              Zlendo Realty helps you create accurate 2D plans, stunning 3D designs, and complete interior layouts—all from one easy-to-use platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SIGNUP_URL}
                className="bg-zlendo-teal text-white px-8 py-3.5 rounded-[20px] font-black text-base hover:scale-105 transition-all shadow-2xl shadow-zlendo-teal/30 group flex items-center gap-2"
              >
                Design Home for Free <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href={`/${COUNTRY}/business#demo-form`}
                className="bg-white text-zlendo-grey-dark px-8 py-3.5 rounded-[20px] font-black text-base border border-black/10 hover:bg-gray-50 hover:scale-105 transition-all shadow-xl group flex items-center gap-2"
              >
                Schedule Your Business Demo <Calendar className="w-6 h-6 text-zlendo-grey-medium group-hover:text-zlendo-teal transition-colors" />
              </Link>
            </div>
          </section>

          {/* ───────────────── 9D INTELLIGENCE HUB ───────────────── */}
          <section className="py-16 md:py-24 relative bg-white overflow-hidden border-b border-black/[0.03]">
            <div className="container-custom px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-3">
                  <div className="w-2 h-2 rounded-full bg-zlendo-teal animate-pulse" />
                  <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-[0.3em]">Proprietary 9D Framework</span>
                </div>
                <h2 className="text-3xl md:text-[48px] font-black font-nunito text-zlendo-grey-dark mb-3 md:mb-4 leading-[1] tracking-tighter">
                  The <span className="text-zlendo-teal">Intelligence</span> behind <br />
                  your dream home.
                </h2>
                <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-60 leading-relaxed max-w-2xl mx-auto">
                  Swipe to explore how our 9D engine guarantees total peace of mind.
                </p>
              </div>

              {/* Horizontal Scroll Container — static HTML cards */}
              <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 md:px-0 md:mx-0 snap-x snap-mandatory scrollbar-hide">
                {intelligenceDimensions.map((dim) => {
                  const Icon = iconMap[dim.iconName] || Sparkles;
                  return (
                    <div
                      key={dim.id}
                      className="min-w-[85vw] md:min-w-[400px] snap-center rounded-[32px] md:rounded-[40px] bg-white border border-black/[0.04] shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-500"
                    >
                      {/* Gradient Header */}
                      <div className={`h-20 sm:h-40 bg-gradient-to-br ${dim.bg} relative overflow-hidden p-3 sm:p-8`}>
                        <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-white/20 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 flex justify-between items-start">
                          <div className="bg-white/20 backdrop-blur-md px-1.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-white font-black text-[9px] sm:text-xs uppercase tracking-normal sm:tracking-widest border border-white/20">
                            {dim.id} Dimension
                          </div>
                          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg text-zlendo-teal">
                            <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                          </div>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-8 relative">
                        <div className="relative z-10 mt-2">
                          <h3 className="text-2xl font-black font-nunito text-zlendo-grey-dark mb-2">{dim.title}</h3>
                          <div className="text-1xl font-bold text-zlendo-teal uppercase tracking-wider mb-4">{dim.benefit}</div>
                          <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-8 min-h-[80px]">
                            {dim.longDesc}
                          </p>
                          <Link href={dim.link} className="w-full py-4 rounded-xl border-2 border-dashed border-black/5 font-bold text-zlendo-grey-medium hover:border-zlendo-teal hover:text-zlendo-teal transition-colors flex items-center justify-center gap-2 group-hover:bg-zlendo-teal/5 text-center">
                            {dim.cta} <ArrowRight className="w-4 h-4 ml-2 inline" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="min-w-[20px] md:hidden" />
              </div>
            </div>
          </section>

          {/* ───────────────── DESIGN TEMPLATES (Client Island) ───────────────── */}
          <DesignTemplateGallery />

          {/* ───────────────── HOW TO DESIGN ───────────────── */}
          <section className="container-custom mb-10 md:mb-16 px-4 text-center">
            <div className="max-w-4xl mx-auto mb-6">
              <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-6">
                How to design a home online for free
              </h2>
              <p className="text-xl text-zlendo-grey-medium font-bold opacity-80 leading-relaxed">
                Design your 2BHK, pooja room, or bungalow easily with Zlendo Realty. Get Vastu-friendly plans &amp; realistic 3D views!
              </p>
            </div>
          </section>

          {/* ───────────────── FEATURE SECTIONS ───────────────── */}
          {features.map((feature) => (
            <section key={feature.section} className="container-custom mb-16 md:mb-24 px-4">
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xs uppercase tracking-widest mb-3 border border-zlendo-teal/20">
                    {feature.section}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-zlendo-grey-medium font-bold opacity-70 mb-5 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {feature.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-left max-w-lg mx-auto lg:mx-0">
                    {feature.howItWorks.map((step) => (
                      <li key={step} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-zlendo-teal" />
                        </div>
                        <span className="text-base font-bold text-zlendo-grey-dark opacity-80">{step}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 text-zlendo-teal font-black text-lg group hover:gap-4 transition-all"
                  >
                    {feature.cta} <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Image */}
                <div className="flex-1 w-full relative perspective-1000">
                  <div className={`absolute top-0 w-full h-full bg-black/[0.03] rounded-[32px] border border-black/[0.05] -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8 z-0 transition-transform duration-700 ${feature.reverse ? 'translate-x-4 md:translate-x-8' : ''}`} />
                  <div className="relative z-10 bg-white rounded-[32px] border border-black/[0.08] shadow-2xl overflow-hidden p-3">
                    <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-black/[0.05] flex items-center px-6 gap-2 z-20">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="mx-auto w-1/3 h-2 rounded-full bg-gray-100" />
                    </div>
                    <div className="mt-12 rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3] group relative">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* ───────────────── COMPARISON SECTION ───────────────── */}
          <section className="bg-white py-16 md:py-28 relative rounded-[60px] md:rounded-[100px_100px_0_0] overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-full bg-[#FAFFFD]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-zlendo-teal/10 to-blue-200/20 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-100 to-orange-100 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container-custom relative z-10 px-4">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-6">
                  <ShieldCheck className="w-4 h-4 text-zlendo-teal" />
                  <span className="text-[10px] font-black text-zlendo-teal uppercase tracking-[0.3em]">Peace of Mind</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-8 tracking-tighter leading-[0.9]">
                  Your Dream Design <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">made Easy</span>
                </h2>
                <p className="text-xl md:text-2xl text-zlendo-grey-medium font-bold max-w-2xl mx-auto leading-relaxed opacity-80 text-center">
                  Why 12,000+ modern homeowners chose Zlendo Realty over traditional guesswork.
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  {comparisonRows.map((row, i) => (
                    <div
                      key={i}
                      className="group relative bg-white rounded-[40px] p-8 md:p-10 border border-black/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,168,132,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${row.img} opacity-10 blur-[40px] rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`} />

                      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                        <div className="flex items-start justify-between">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${row.img} flex items-center justify-center text-white shadow-lg shrink-0`}>
                            {i === 0 && <Layers className="w-8 h-8" />}
                            {i === 1 && <Palette className="w-8 h-8" />}
                            {i === 2 && <Box className="w-8 h-8" />}
                            {i === 3 && <Zap className="w-8 h-8" />}
                          </div>
                          <h4 className="text-2xl font-black font-nunito text-zlendo-grey-dark ml-6 md:ml-0">{row.title}</h4>
                        </div>

                        <div className="space-y-4">
                          <div className="p-4 rounded-2xl bg-red-50 border border-red-100/50">
                            <div className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1 opacity-70">Old Way</div>
                            <div className="text-lg font-bold text-red-900/60 line-through decoration-red-300 text-left">{row.trad}</div>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-zlendo-teal rounded-full" />
                            <div className="pl-4 text-left">
                              <div className="text-[10px] font-black uppercase text-zlendo-teal tracking-widest mb-1">Zlendo Realty Way</div>
                              <div className="text-xl font-black text-zlendo-grey-dark">{row.zlendo}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ───────────────── FINAL CTA ───────────────── */}
          <section className="bg-white pt-12 pb-8 md:pt-24 md:pb-24 px-4">
            <div className="container-custom max-w-6xl">
              <div className="bg-white border border-gray-100 rounded-[32px] md:rounded-[48px] p-3 md:p-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                <div className="flex-1 text-center md:text-left space-y-3 md:space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight">
                    Start designing your house <br className="hidden md:block" />
                    with <span className="text-emerald-500">Zlendo Realty</span>
                  </h2>
                  <p className="text-xl font-bold text-zlendo-grey-medium max-w-lg mx-auto md:mx-0 opacity-70">
                    Draw a floor plan and create a 3D home design in 10 min.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <a
                      href={SIGNUP_URL}
                      className="bg-[#1AE16C] text-zlendo-grey-dark px-10 py-5 rounded-full font-black text-lg shadow-[0_10px_30px_rgba(26,225,108,0.3)] hover:scale-105 active:scale-95 transition-all inline-block"
                    >
                      Get Started For Free
                    </a>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-md">
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
                    alt="Zlendo Realty Designer Illustration"
                    className="w-full h-auto drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ───────────────── FAQ SECTION ───────────────── */}
          <section className="py-20 md:py-32 bg-white">
            <div className="container-custom px-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-center text-zlendo-grey-dark mb-12">Frequently Asked Questions</h2>
              <FaqAccordion faqs={faqs} />
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
// ok