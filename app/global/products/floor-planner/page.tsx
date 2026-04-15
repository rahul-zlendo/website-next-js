import React from 'react';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zlendo Realty Products Floor Planer - Design Your Home in 3D',
  description: 'Create professional 2D and 3D floor plans in minutes with Zlendo Realty AI. Experience your space before a single brick is laid.',
};

async function getGlobalPage(slug: string) {
  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  return await getClient().fetch(query, { slug });
}

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
                text: "Draft professional plans. "
              },
              {
                _key: 'c2',
                _type: 'span',
                marks: ['strong'],
                text: "Visualize instantly in 3D."
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        subheading: "Create accurate 2D house plans and watch them come to life in realistic 3D architecture. Built for individuals and professionals who demand speed without sacrificing precision.",
        image: "/assets/floor-planner/3d-sketch.png",
        ctaText: "Start Designing Free",
        ctaLink: "/register",
        ctaSubtext: "14 days, full access. No credit card.",
        secondaryCtaText: "View Gallery",
        secondaryCtaLink: "/viewalltemplates",
        secondaryCtaSubtext: "Explore existing templates."
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
            image: "/assets/floor-planner/2d-sketch.png"
          },
          {
            number: "2",
            title: "AI Conversion",
            description: "Our proprietary engine instantly lifts your 2D lines into a fully structured 3D environment without any manual modeling.",
            image: "/assets/Home-Page/2d-to-3d-convertor.png"
          },
          {
            number: "3",
            title: "Personalize",
            description: "Drag and drop thousands of parametric doors, windows, and high-end furniture items to match your exact taste.",
            image: "/assets/Home-Page/ai-room-inspirtion.png"
          },
          {
            number: "4",
            title: "Live Immersive Experience",
            description: "Take virtual walkthroughs and export your architectural house plans to share securely with contractors or clients.",
            image: "/assets/Home-Page/3d-export-toolkit.png"
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
        image: "/assets/floor-planner/3d-sketch.png",
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
            title: "Vastu Integration",
            description: "Built-in guidelines ensure your home plan aligns with Vastu principles.",
            icon: "Compass"
          },
          {
            title: "Live 3D Preview",
            description: "Toggle instantly between 2D technical drawings and 3D perspectives.",
            icon: "Eye"
          },
          {
            title: "Seamless Export",
            description: "Convert your finished plans to professional CAD formats.",
            icon: "Layers"
          }
        ]
      },
      {
        _type: 'globalFAQ',
        title: "Frequently Asked Questions",
        faqs: [
          {
            question: "What is the AI Floor Planner used for?",
            answer: "The AI Floor Planner helps create accurate house plans and residential home plans digitally. Using professional floor plan design services, you can design rooms, walls, doors, and windows while visualizing the layout through realistic 3D house design and 3D architectural visualization."
          },
          {
            question: "Do I need architectural knowledge to use it?",
            answer: "No. Our platform is designed as a home plan designer online, making it easy for beginners to create layouts using intuitive online home plan services without any architectural background."
          },
          {
            question: "Can I change the layout after creating the plan?",
            answer: "Yes. You can modify your 2D house plan design anytime by resizing rooms, moving walls, or adjusting layouts. All changes are updated instantly, helping finalize accurate residential building plans."
          },
          {
            question: "Does it show a real-time 3D preview?",
            answer: "Yes. The design updates instantly with a live 3D floor plan design, allowing you to experience realistic space planning through advanced 3D architectural visualization."
          },
          {
            question: "Can I share this with architects or contractors?",
            answer: "Yes. You can save and share your architectural house plans and 3D layouts with architects, engineers, or contractors, supporting smooth coordination during civil and architectural design services."
          },
          {
            question: "Can I save multiple design options?",
            answer: "Yes. You can store multiple versions of your custom floor plans online and compare layouts before finalizing the most suitable option for your modern custom home plans or residential project."
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
          link: "/register"
        },
        secondaryCta: {
          text: "Book a Demo",
          subtext: "30 min with a product expert.",
          link: "/contact"
        },
        frictionLine: "No credit card required  ·  Cancel anytime  ·  DWG compatible  ·  GDPR compliant"
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

export default GlobalFloorPlannerPage;
