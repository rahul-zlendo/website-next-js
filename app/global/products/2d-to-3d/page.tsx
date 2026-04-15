import React from 'react';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Floor Plan - 2D to 3D Conversion | Zlendo Realty',
  description: 'Convert 2D floor plans to 3D models and studio-quality renders instantly. Revolutionize your architectural workflow with AI-powered visualization.',
};

async function getGlobalPage(slug: string) {
  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  return await getClient().fetch(query, { slug });
}

const GlobalAiFloorPlanPage = async () => {
  const slug = "products/2d-to-3d";
  const pageData = await getGlobalPage(slug);

  // If Sanity is empty, show the premium content provided in the brief as a fallback
  if (!pageData) {
    const fallbackSections = [
      {
        _type: 'globalProductHero',
        badge: 'Instant 3D Visualization — Premium',
        heading: [
          {
            _key: 'h1',
            _type: 'block',
            children: [
              {
                _key: 'c1',
                _type: 'span',
                text: "Replace your "
              },
              {
                _key: 'c2',
                _type: 'span',
                marks: ['strong'],
                text: "fragmented design workflow."
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        subheading: "From a 2D floor plan to fully navigable 3D models, studio-grade renders, immersive client walkthroughs, and precise cost estimates — all in one unified session.",
        image: "/assets/products/premium_3d_architecture_hero.png",
        ctaText: "Start for Free",
        ctaLink: "/register",
        ctaSubtext: "14 days, full access. No credit card.",
        secondaryCtaText: "Watch Video",
        secondaryCtaLink: "#",
        secondaryCtaSubtext: "See the 2-minute reality demo."
      },
      {
        _type: 'globalHowItWorks',
        heading: "How It Works",
        subheading: "Four simple steps to your dream result.",
        steps: [
          {
            number: "1",
            title: "Upload Floor Plan",
            description: "Simply upload your 2D floor plan in JPG, PNG, or PDF format. Our AI recognizes the layout immediately.",
            image: "/assets/products/step_1_upload.png"
          },
          {
            number: "2",
            title: "AI Processing",
            description: "Advanced algorithms convert lines and shapes into 3D walls, doors, and windows in seconds.",
            image: "/assets/products/step_2_ai_processing.png"
          },
          {
            number: "3",
            title: "Furnish & Decorate",
            description: "Drag and drop furniture from our massive 3D library to style the room to your taste.",
            image: "/assets/products/step_3_furnish.png"
          },
          {
            number: "4",
            title: "Render & Export",
            description: "Generate 4K renderings or export the model to other CAD software for further refinement.",
            image: "/assets/products/step_4_export.png"
          }
        ]
      },
      {
        _type: 'globalFeatureDetail',
        heading: "Professional 2D to 3D. *Without the manual labor.*",
        bullets: [
          "Import any DWG, PDF, or image — no redrawing required.",
          "Automatic wall, door, and window detection with 99% accuracy.",
          "Maintain architectural precision for complex residential layouts."
        ],
        statValue: "Under 2 minutes",
        statLabel: "vs. 2–4 days manual work",
        image: "/assets/products/2d_to_3d_detail_visual.png",
        imageAtRight: true
      },
      {
        _type: 'globalFeatures',
        title: "Platform Highlights",
        subtitle: "Everything you need to move from 2D concepts to 3D reality in one unified platform.",
        features: [
          {
            title: "AI Wall Detection",
            description: "Automatically identifies walls, windows, and doors with 99% accuracy.",
            icon: "ShieldCheck"
          },
          {
            title: "Real-Time Editing",
            description: "Modify the generated 3D model instantly in your browser.",
            icon: "Zap"
          },
          {
            title: "DWG/PDF Import",
            description: "Support for professional CAD formats and hand-drawn sketches.",
            icon: "FileText"
          },
          {
            title: "Cloud Rendering",
            description: "High-speed cloud rendering for photorealistic outputs.",
            icon: "Cloud"
          }
        ]
      },

      {
        _type: 'globalFAQ',
        title: "Frequently Asked Questions",
        faqs: [
          {
            question: "Is there a steep learning curve?",
            answer: "Zero to interactive 3D in 10 minutes. Our AI handles the technical lifting so you can focus on design aesthetics rather than manual modeling."
          },
          {
            question: "How is the render quality?",
            answer: "Studio-grade photorealism. Physically accurate lighting and textures that rival hours of manual V-Ray or Enscape work, delivered in 60 seconds."
          },
          {
            question: "How accurate are the cost estimates?",
            answer: "100% design-linked. Bill of Quantities updates live with every wall move or material change, eliminating human error in calculations."
          },
          {
            question: "Is my data secure?",
            answer: "Enterprise-grade encryption. Your proprietary designs are hosted on secure, GDPR-compliant servers in the EU and US with strict access controls."
          },
          {
            question: "Can my whole team use it?",
            answer: "Built for collaboration. Multi-seat plans allow your entire studio to work on, share, and present from one unified project library."
          }
        ]
      },
      {
        _type: 'globalFinalCTA',
        heading: "Close your next project *before the first meeting ends.*",
        subheading: "The best client meetings end with a decision, not a follow-up.",
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

export default GlobalAiFloorPlanPage;
