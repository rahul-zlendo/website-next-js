import React from 'react';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import AiWorkflowsSection from '@/components/global/sections/AiWorkflowsSection';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';
import { SIGNUP_URL } from '@/lib/config/env';

export const metadata: Metadata = createPageMetadata({
  title: 'Smart Room Styler - AI-driven Interior Design | Zlendo Realty',
  description: 'AI-driven interior design at your fingertips. Visualize different styles, furniture layouts, and color palettes instantly.',
  path: '/products/room-styler',
});

async function getGlobalPage(slug: string) {
  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  return await getClient().fetch(query, { slug });
}

const GlobalRoomStylerPage = async () => {
  const slug = "products/room-styler";
  const pageData = await getGlobalPage(slug);

  // If Sanity is empty, show the premium content as fallback
  if (!pageData) {
    const fallbackSections = [
      {
        _type: 'globalProductHero',
        badge: 'Smart Interior Design',
        heading: [
          {
            _key: 'h1',
            _type: 'block',
            children: [
              {
                _key: 'c1',
                _type: 'span',
                text: "Style any room. "
              },
              {
                _key: 'c2',
                _type: 'span',
                marks: ['strong'],
                text: "Instantly."
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        subheading: "Smart Room Styler automatically suggests furniture layouts, colors, lighting, and décor. Visualize beautiful interiors using realistic 3D design and explore endless interior ideas.",
        image: "/assets/room-styler/scandinavian.webp",
        ctaText: "Start Styling Free",
        ctaLink: SIGNUP_URL,
        ctaSubtext: "14 days, full access. No credit card.",
        secondaryCtaText: "Request Your Demo",
        secondaryCtaLink: "/business#demo-form",
        secondaryCtaSubtext: "Schedule a 1-on-1 platform tour."
      },
      {
        _type: 'globalHowItWorks',
        heading: "Intelligent Design in Four Steps",
        subheading: "From empty space to photorealistic render in seconds.",
        steps: [
          {
            number: "1",
            title: "Select Room",
            description: "Choose an existing room model or upload a photo of your empty space.",
            image: "/assets/2d-to-3d/upload-floorplan.webp"
          },
          {
            number: "2",
            title: "Choose Style",
            description: "Select from our curated list of interior design styles or create your own custom mood board.",
            image: "/assets/room-styler/scandinavian.webp"
          },
          {
            number: "3",
            title: "AI Composition",
            description: "Our AI engine intuitively arranges furniture and decor to match the selected style perfectly.",
            image: "/assets/Home-Page/ai-room-inspirtion.webp"
          },
          {
            number: "4",
            title: "Finalize Look",
            description: "Adjust individual items and generate a high-quality photorealistic image.",
            image: "/assets/Home-Page/living-room/scandinavian-style.webp"
          }
        ]
      },
      {
        _type: 'globalFeatureDetail',
        heading: "Instant style transfer. *Zero rendering wait time.*",
        bullets: [
          "Apply Modern, Boho, Minimalist, or Industrial themes with one click.",
          "Automatically swaps flooring, wall paints, and textures.",
          "Maintains accurate spatial scaling for all 1000+ furniture items."
        ],
        statValue: "1000+",
        statLabel: "Real-world furniture items available immediately",
        image: "/assets/Home-Page/living-room/scandinavian-style.webp",
        imageAtRight: false
      },
      {
        _type: 'globalFeatures',
        title: "Interior Design Toolkit",
        subtitle: "Everything you need to perfect a space visually.",
        features: [
          {
            title: "Style Transfer",
            description: "Apply completely different design themes globally with a single click.",
            icon: "Sparkles"
          },
          {
            title: "Furniture Catalog",
            description: "Access our massive library of true-to-scale, shoppable decor items.",
            icon: "Layers"
          },
          {
            title: "Lighting Simulation",
            description: "See exactly how your room looks at sunrise, sunset, or under night lighting.",
            icon: "Zap"
          },
          {
            title: "Material Swapping",
            description: "Instantly change flooring, wall paints, fabrics, and textures.",
            icon: "ShieldCheck"
          }
        ]
      },
      {
        _type: 'globalFAQ',
        title: "Frequently Asked Questions",
        faqs: [
          {
            question: "What does Smart Room Styler do?",
            answer: "Smart Room Styler automatically suggests furniture layouts, colors, lighting, and décor to help you visualize beautiful interiors using realistic interior 3D design services and advanced 3D architectural visualization."
          },
          {
            question: "Can I choose the design style?",
            answer: "Yes. You can select from multiple styles such as modern, traditional, minimal, and contemporary. The system adapts the design to match your preferred interior theme."
          },
          {
            question: "Can I change the suggested furniture?",
            answer: "Yes. All elements remain fully customizable. You can modify furniture placement, décor, and layout to create a personalized interior using custom 3D house design tools."
          },
          {
            question: "Does it work for all rooms?",
            answer: "Yes. Smart Room Styler supports living rooms, bedrooms, kitchens, home offices, and more, making it suitable for complete residential 3D design services."
          },
          {
            question: "Does it force me to buy products?",
            answer: "No. The tool is purely for visual inspiration and planning. It helps you explore interior ideas through 3D design visualization without any purchase obligation."
          },
          {
            question: "Is it useful if I already have ideas?",
            answer: "Yes. It helps refine, compare, and validate your ideas visually using realistic 3D rendering, improving clarity before final execution."
          }
        ]
      },
      {
        _type: 'globalFinalCTA',
        heading: "Start styling your space *perfectly.*",
        subheading: "Visualize endless combinations before making a single purchase.",
        primaryCta: {
          text: "Start Free Trial",
          subtext: "14 days. Full access. No card.",
          link: SIGNUP_URL
        },
        secondaryCta: {
          text: "Book a Demo",
          subtext: "See it in action.",
          link: "/business#demo-form"
        },
        frictionLine: "No credit card required  ·  Cancel anytime  ·  10k+ Assets"
      }
    ];

    const softwareApplicationSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Zlendo Realty Smart Room Styler",
      "applicationCategory": "DesignApplication",
      "applicationSubCategory": "AI Interior Design Software",
      "operatingSystem": "Web",
      "url": "https://zlendorealty.com/products/room-styler",
      "description": "AI-powered room styling software that helps homeowners, architects, and interior designers instantly redesign rooms with smart furniture placement, realistic materials, color themes, and immersive 3D visualizations.",
      "image": "https://zlendorealty.com/favicon.ico",
      "softwareVersion": "1.0",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free online AI room styling and interior visualization tool"
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
        <main className="min-h-screen">
          {fallbackSections.length > 0 && <SectionRenderer sections={[fallbackSections[0]]} />}
          <AiWorkflowsSection />
          {fallbackSections.length > 1 && <SectionRenderer sections={fallbackSections.slice(1)} />}
        </main>
      </>
    );
  }

  const sections = pageData?.sections || [];

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zlendo Realty Smart Room Styler",
    "applicationCategory": "DesignApplication",
    "applicationSubCategory": "AI Interior Design Software",
    "operatingSystem": "Web",
    "url": "https://zlendorealty.com/products/room-styler",
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
      <main className="min-h-screen">
        {sections.length > 0 && <SectionRenderer sections={[sections[0]]} />}
        <AiWorkflowsSection />
        {sections.length > 1 && <SectionRenderer sections={sections.slice(1)} />}
      </main>
    </>
  );
};

export default GlobalRoomStylerPage;
