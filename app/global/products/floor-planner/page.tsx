import React from 'react';
import { getClient } from '@/lib/sanity/client';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SIGNUP_URL } from '@/lib/config/env';

export const metadata: Metadata = {
  title: 'Floor Planner Online – AI 2D & 3D Floor Plan Maker | Zlendo Realty',
  description: "Create accurate 2D and 3D floor plans online with Zlendo Realty’s AI floor planner. Design, visualize, customize and export house plans in minutes.",
  openGraph: {
    title: 'Floor Planner Online – AI 2D & 3D Floor Plan Maker | Zlendo Realty',
    description: "Create accurate 2D and 3D floor plans online with Zlendo Realty’s AI floor planner. Design, visualize, customize and export house plans in minutes.",
    url: 'https://zlendorealty.com/products/floor-planner',
    siteName: 'Zlendo Realty',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://zlendorealty.com/products/floor-planner',
    languages: {
      'en': 'https://zlendorealty.com/products/floor-planner',
      'en-IN': 'https://zlendorealty.com/in/products/floor-planner',
      'x-default': 'https://zlendorealty.com/products/floor-planner',
    },
  },
};

async function getGlobalPage(slug: string) {
  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  return await getClient().fetch(query, { slug });
}

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zlendo Realty AI Floor Planner",
  "applicationCategory": "DesignApplication",
  "applicationSubCategory": "Floor Planning Software",
  "operatingSystem": "Web",
  "url": "https://zlendorealty.com/products/floor-planner",
  "description": "AI-powered floor planning software that helps users create accurate 2D house plans, instantly convert them into immersive 3D designs, personalize layouts, and generate walkthrough-ready architectural visualizations.",
  "image": "https://zlendorealty.com/favicon.ico",
  "softwareVersion": "1.0",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "14-day free trial with full access and no credit card required"
  },
  "aggregateRating": ZLENDO_AGGREGATE_RATING,
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
    "2D floor plan drafting",
    "Instant 3D conversion",
    "AI-powered layout generation",
    "Live 3D preview",
    "Virtual walkthroughs",
    "Auto-dimensioning",
    "Multi-story planning",
    "CAD export support",
    "Drag-and-drop furniture placement",
    "Architectural visualization"
  ]
};

const SeoContent = () => (
  <section className="py-10 md:py-16 bg-white border-t border-black/5">
    <div className="container-custom px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-black text-[#111] mb-6">Powerful AI Floor Planning Made Simple</h2>
      <div className="text-lg text-[#666] font-medium leading-relaxed space-y-6 text-left md:text-center">
        <p>Design accurate floor plans online with Zlendo Realty&apos;s AI-powered floor planner. Create detailed 2D house plans, convert them into realistic 3D spaces, customize rooms and furniture, and visualize your design before construction.</p>
        <p>Whether you&apos;re a homeowner, architect, interior designer, builder, or real estate professional, our online floor planner makes it easy to create, edit, visualize, and share professional floor plans.</p>
      </div>
    </div>
  </section>
);

const GlobalFloorPlannerPage = async () => {
  const slug = "products/floor-planner";
  const pageData = await getGlobalPage(slug);

  // If Sanity is empty, show the premium content provided in the brief as a fallback
  if (!pageData) {
    const fallbackSections = [
      {
        _type: 'globalProductHero',
        badge: 'Intelligent Floor Planning',
        heading: [
          {
            _key: 'h1',
            _type: 'block',
            children: [
              {
                _key: 'c1',
                _type: 'span',
                text: "AI Floor Planner "
              },
              {
                _key: 'c2',
                _type: 'span',
                marks: ['strong'],
                text: "Design 2D & 3D Floor Plans"
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        subheading: "Create accurate floor plans online with our AI-powered floor planner. Design, customize, and visualize your space in 2D and 3D—all in one place.",
        image: "/assets/floor-planner/3d-sketch.webp",
        ctaText: "Start Designing Free",
        ctaLink: SIGNUP_URL,
        ctaSubtext: "14 days, full access. No credit card.",
        secondaryCtaText: "Request Your Demo",
        secondaryCtaLink: "/business#demo-form",
        secondaryCtaSubtext: "Schedule a 1-on-1 platform tour."
      },
      {
        _type: 'globalHowItWorks',
        heading: "From Concept to Immersive Experience",
        subheading: "We've removed the friction from spatial design.",
        steps: [
          {
            number: "1",
            title: "Imagine & Layout",
            description: "Start with a blank canvas or import a rough sketch. Use intelligent tools like auto-dimensioning and wall snapping to draft precise 2D layouts.",
            image: "/assets/floor-planner/2d-sketch.webp"
          },
          {
            number: "2",
            title: "AI Conversion",
            description: "Our proprietary engine instantly lifts your 2D lines into a fully structured 3D environment without any manual modeling.",
            image: "/assets/Home-Page/2d-to-3d-convertor.webp"
          },
          {
            number: "3",
            title: "Personalize",
            description: "Drag and drop thousands of parametric doors, windows, and high-end furniture items to match your exact taste.",
            image: "/assets/Home-Page/ai-room-inspirtion.webp"
          },
          {
            number: "4",
            title: "Live Immersive Experience",
            description: "Take virtual walkthroughs and export your architectural house plans to share securely with contractors or clients.",
            image: "/assets/Home-Page/3d-export-toolkit.webp"
          }
        ]
      },
      {
        _type: 'globalFeatureDetail',
        heading: "Precision drafting. *No architectural degree required.*",
        bullets: [
          "Intelligent Wall Snapping for perfect 90-degree corners.",
          "Auto-Dimensioning ensures every room meets exact specifications.",
          "Multi-Story Support for complex residential building plans.",
          "Drag & Drop structural elements directly into your workspace."
        ],
        statValue: "10 Minutes",
        statLabel: "Average time to full 3D layout",
        image: "/assets/floor-planner/3d-sketch.webp",
        imageAtRight: true
      },
      {
        _type: 'globalFeatures',
        title: "Drafting Excellence",
        subtitle: "Everything you need to plan residential spaces with confidence.",
        features: [
          {
            title: "Smart Dimensioning",
            description: "Real-time measurements update automatically as you adjust walls.",
            icon: "Ruler"
          },
          {
            title: "Multi-Story Planning",
            description: "Design complex multi-level residential layouts with seamless floor-to-floor alignment.",
            icon: "Box"
          },
          {
            title: "Live 3D Preview",
            description: "Toggle instantly between 2D technical drawings and 3D perspectives.",
            icon: "Eye"
          },
          {
            title: "Seamless Export",
            description: "Convert your finished plans to professional CAD formats.",
            icon: "Download"
          }
        ]
      },
      {
        _type: 'globalFAQ',
        title: "Frequently Asked Questions About Floor Planners",
        faqs: [
          {
            question: "What is a floor planner?",
            answer: "A floor planner is a digital tool that allows you to create and visualize the layout of a home, apartment, office, or other space. It can be used to plan rooms, walls, doors, windows, furniture, and dimensions."
          },
          {
            question: "Is there an AI floor planner I can use online?",
            answer: "Yes. Zlendo Realty offers an AI-powered floor planner that lets you create 2D layouts and convert them into 3D environments online."
          },
          {
            question: "Can I create a floor plan online without architectural experience?",
            answer: "Yes. Zlendo Realty is designed for both beginners and professionals. Intelligent features such as wall snapping, automatic dimensioning, and drag-and-drop elements simplify the floor planning process."
          },
          {
            question: "Can I create both 2D and 3D floor plans?",
            answer: "Yes. You can create a 2D floor plan and switch to a 3D view to visualize your design and understand the space more clearly."
          },
          {
            question: "Can I create multi-story floor plans?",
            answer: "Yes. The floor planner supports multi-story residential layouts, allowing you to create and manage multiple levels within a project."
          },
          {
            question: "Can I edit my floor plan after creating it?",
            answer: "Yes. You can modify walls, dimensions, rooms, doors, windows, furniture, and other design elements as your project evolves."
          },
          {
            question: "Can I share my floor plan with an architect or contractor?",
            answer: "Yes. Completed plans can be exported and shared with architects, contractors, clients, and other project stakeholders."
          },
          {
            question: "Is Zlendo Realty's floor planner free?",
            answer: "Zlendo Realty currently offers a 14-day free trial with full access and no credit card requirement, according to the product page."
          }
        ]
      },
      {
        _type: 'globalFinalCTA',
        heading: "Design your custom home *today.*",
        subheading: "Join 12,000+ modern homeowners who chose Zlendo Realty over traditional guesswork.",
        primaryCta: {
          text: "Start Free Trial",
          subtext: "14 days. Full access. No card.",
          link: SIGNUP_URL
        },
        secondaryCta: {
          text: "Book a Demo",
          subtext: "30 min with a product expert.",
          link: "/business#demo-form"
        },
        frictionLine: "No credit card required  ·  Cancel anytime  ·  DWG compatible  ·  GDPR compliant"
      }
    ];

    const fallbackFaqSection: any = fallbackSections.find((s: any) => s._type === 'globalFAQ');
    const faqSchema = fallbackFaqSection ? {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "name": "Zlendo Realty Floor Planner - Frequently Asked Questions",
      "mainEntity": fallbackFaqSection.faqs.map((f: { question: string; answer: string }) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    } : null;

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        {faqSchema && <JsonLd schema={faqSchema} />}
        <main className="min-h-screen">
          <SectionRenderer sections={fallbackSections} />
          <SeoContent />
        </main>
      </>
    );
  }

  const cmsFaqSection: any = pageData.sections?.find((s: any) => s._type === 'globalFAQ');
  const cmsFaqSchema = cmsFaqSection?.faqs?.length ? {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "name": "Zlendo Realty Floor Planner - Frequently Asked Questions",
    "mainEntity": cmsFaqSection.faqs.map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      {cmsFaqSchema && <JsonLd schema={cmsFaqSchema} />}
      <main className="min-h-screen">
        <SectionRenderer sections={pageData.sections} />
        <SeoContent />
      </main>
    </>
  );
};

export default GlobalFloorPlannerPage;
