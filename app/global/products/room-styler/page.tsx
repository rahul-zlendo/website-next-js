import React from 'react';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Room Styler - AI-driven Interior Design | Zlendo Realty',
  description: 'AI-driven interior design at your fingertips. Visualize different styles, furniture layouts, and color palettes instantly.',
};

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
        image: "/assets/room-styler/scandinavian.jpg",
        ctaText: "Start Styling Free",
        ctaLink: "/register",
        ctaSubtext: "14 days, full access. No credit card.",
        secondaryCtaText: "Explore Styles",
        secondaryCtaLink: "/viewalltemplates",
        secondaryCtaSubtext: "Browse 10,000+ real-world assets."
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
            image: "/assets/2d-to-3d/upload-floorplan.png"
          },
          {
            number: "2",
            title: "Choose Style",
            description: "Select from our curated list of interior design styles or create your own custom mood board.",
            image: "/assets/room-styler/scandinavian.jpg"
          },
          {
            number: "3",
            title: "AI Composition",
            description: "Our AI engine intuitively arranges furniture and decor to match the selected style perfectly.",
            image: "/assets/Home-Page/ai-room-inspirtion.png"
          },
          {
            number: "4",
            title: "Finalize Look",
            description: "Adjust individual items and generate a high-quality photorealistic image.",
            image: "/assets/Home-Page/living-room/scandinavian-style.jpg"
          }
        ]
      },
      {
        _type: 'globalFeatureDetail',
        heading: "Instant style transfer. *Zero rendering wait time.*",
        bullets: [
          "Apply Modern, Boho, Minimalist, or Industrial themes with one click.",
          "Automatically swaps flooring, wall paints, and textures.",
          "Maintains accurate spatial scaling for all 10,000+ furniture items."
        ],
        statValue: "10,000+",
        statLabel: "Real-world furniture items available immediately",
        image: "/assets/Home-Page/living-room/scandinavian-style.jpg",
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
          link: "/register"
        },
        secondaryCta: {
          text: "Book a Demo",
          subtext: "See it in action.",
          link: "/contact"
        },
        frictionLine: "No credit card required  ·  Cancel anytime  ·  10k+ Assets"
      }
    ];

    return (
      <main className="min-h-screen">
        <SectionRenderer sections={fallbackSections} />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <SectionRenderer sections={pageData.sections} />
    </main>
  );
};

export default GlobalRoomStylerPage;
