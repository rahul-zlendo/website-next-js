import React from 'react';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';

async function getGlobalHomePage() {
  const query = `*[_type == "globalPage" && slug.current == "home"][0]`;
  return await getClient().fetch(query);
}

const GlobalHomePage = async () => {
  const pageData = await getGlobalHomePage();

  // If Sanity is empty, show the premium content provided in the brief as a fallback
  if (!pageData) {
    const fallbackSections = [
      {
        _type: 'globalHero',
        badge: 'Global Homepage — Premium Edition',
        heading: [
          {
            _key: 'h1',
            _type: 'block',
            children: [
              {
                _key: 'c1',
                _type: 'span',
                text: "From concept to client approval. "
              },
              {
                _key: 'c2',
                _type: 'span',
                marks: ['strong'],
                text: "In a single session."
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ],
        subheading: "Zlendo Realty is the complete design-to-client workflow for architecture and interior design professionals. Upload a floor plan. Generate a photorealistic render. Walk your client through the space. Produce a cost estimate. All in one platform, all before the meeting ends.",
        ctaText: "Start your free trial",
        ctaLink: "/in",
        ctaSubtext: "14 days, full access. No credit card.",
        secondaryCtaText: "Watch a 3-minute walkthrough",
        secondaryCtaLink: "/in",
        secondaryCtaSubtext: "See a real project, start to finish."
      },
      {
        _type: 'globalLogoStrip',
        title: 'Industry Leaders & Recognition',
        logos: [
          { name: 'G2 Leader' },
          { name: 'Capterra' },
          { name: 'Dezeen' },
          { name: 'Architectural Digest' },
          { name: 'Wallpaper' }
        ]
      },
      {
        _type: 'globalOutcomes',
        outcomes: [
          { value: '3x', label: 'More projects closed per month' },
          { value: '60s', label: 'Average render time' },
          { value: '82%', label: 'Fewer client revision cycles' },
          { value: '40+', label: 'Countries using Zlendo Realty' }
        ]
      },
      {
        _type: 'globalTemplateGallery',
      },
      {
        _type: 'globalProblem',
        heading: "The tools haven't *kept up with the work.*",
        subheading: "Architecture and design have never demanded more, yet professionals are still stuck waiting hours for renders and switching between disconnected tools. Zlendo Realty eliminates the gap between design and visualization.",
        problems: [
          {
            title: "The fragmentation tax",
            description: "Stop switching between four different apps for modeling, rendering, walkthroughs, and costs. Every tool switch is a lost hour."
          },
          {
            title: "The visualisation gap",
            description: "2D plans and static renders don't put people inside a space. Walkthroughs do. Stop letting clients guess what you designed."
          },
          {
            title: "The estimate problem",
            description: "Estimates should be connected to your design, not a separate spreadsheet. When the design changes, the budget should too."
          }
        ],
        closeText: "This isn't a software problem. It's a practice problem. And Zlendo Realty is the solution."
      },
      {
        _type: 'globalSolution',
        heading: "One platform. *Every step from concept to contract.*",
        intro: "Zlendo Realty is a complete professional workflow designed for the moment that matters most: when your client decides to trust you with the project.",
        steps: [
          {
            number: "01",
            title: "2D to 3D in two minutes",
            description: "Upload any floor plan — DWG, PDF, or image — and Zlendo Realty generates a fully navigable 3D model automatically.",
            image: '/images/global/step-01.png'
          },
          {
            number: "02",
            title: "Studio-quality renders instantly",
            description: "Generate photorealistic renders with physically accurate lighting and shadow detail in under 60 seconds.",
            image: '/images/global/step-02.png'
          },
          {
            number: "03",
            title: "Immersive 3D walkthroughs",
            description: "Send a live walking tour that works in any browser. Let clients explore their space on any device before you sign.",
            image: '/images/global/step-03.png'
          },
          {
            number: "04",
            title: "Connected cost estimation",
            description: "Generate an itemised Bill of Quantities directly from your model. When you change the design, the budget updates.",
            image: '/images/global/step-04.png'
          }
        ],
        closeText: "The best client meetings end with a decision, not a follow-up."
      },
      {
        _type: 'globalComparison',
        heading: "What your practice looks like *with and without Zlendo Realty.*",
        rows: [
          { feature: 'Floor plan to 3D model', before: '2–4 days manual work', after: 'Under 2 minutes, automatic' },
          { feature: 'Photorealistic render', before: '4–8 hrs wait time', after: '60 seconds, instant' },
          { feature: 'Client walkthrough', before: 'Static PDFs or recorded video', after: 'Live, interactive browser link' },
          { feature: 'Cost estimate', before: 'Manual disconnected spreadsheet', after: 'Auto-generated, design-linked' },
          { feature: 'Project capacity', before: 'Capped by prep time', after: '3× throughput, same team' }
        ],
        footerText: "The hours lost to conversion, export, and manual updates are an invisible tax on your practice. Zlendo Realty eliminates it."
      },
      {
        _type: 'globalSocialProof',
        heading: "What professionals at the *top of their field say.*",
        testimonials: [
          {
            quote: "We cut our pre-pitch preparation time from three days to an afternoon. Our close rate on new projects has climbed from 55% to over 80% since we made the switch.",
            author: "Principal Architect, Award-winning Studio, London"
          },
          {
            quote: "I was sceptical, but Zlendo Realty is the first tool that actually fits into a professional workflow. The 60-second render alone justified the subscription.",
            author: "Senior Interior Designer, Residential Studio, New York"
          },
          {
            quote: "We used to lose weeks between concept and client approval. Now we presents in 3D and projects are approved that day. It has fundamentally changed our capacity.",
            author: "Design Director, Commercial Firm, Amsterdam"
          }
        ]
      },
      {
        _type: 'globalWhoItIsFor',
        heading: "Built for professionals who *present, pitch, and win.*",
        segments: [
          {
            title: "Architects",
            features: [
              "From DWG to client-ready 3D in minutes",
              "Render every elevation with accurate sun angles",
              "Integrates with your existing CAD workflow"
            ]
          },
          {
            title: "Interior designers",
            features: [
              "Real-time material switching in 3D",
              "Mood board to render in one session",
              "Shareable client link — no login required"
            ]
          },
          {
            title: "Contractors & developers",
            features: [
              "Visualise before you build to eliminate disputes",
              "Connect design changes to live cost impact",
              "Win bids with interactive 3D presentations"
            ]
          },
          {
            title: "Design agencies",
            features: [
              "Multi-seat plans with shared project access",
              "White-label presentations under your brand",
              "Dedicated account manager for teams"
            ]
          }
        ]
      },
      {
        _type: 'globalFinalCTA',
        heading: "Your next client meeting could be the one where they *say yes in the room.*",
        subheading: "The only question is whether you'll have the tools to make it happen.",
        primaryCta: {
          text: "Start your free trial",
          subtext: "14 days. Full access. No card.",
          link: "/in"
        },
        secondaryCta: {
          text: "Book a studio demo",
          subtext: "30 min with a product expert.",
          link: "/in"
        },
        tertiaryCta: {
          text: "Talk to our team",
          subtext: "For studios of 10 or more.",
          link: "/in"
        },
        frictionLine: "No credit card required for the trial  ·  Cancel anytime  ·  Works with your existing DWG files  ·  GDPR compliant  ·  Data hosted in the EU and US"
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

export default GlobalHomePage;
