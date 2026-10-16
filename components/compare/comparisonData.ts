export interface FeatureComparisonRow {
    featureName: string;
    zlendoValue: string | boolean;
    competitorValue: string | boolean;
    description: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ComparisonDetails {
    competitorKey: string;
    competitorName: string;
    title: string;
    subtitle: string;
    tagline: string;
    summaryText: string;
    valueProps: {
        title: string;
        description: string;
        iconName: string;
    }[];
    metrics: {
        label: string;
        zlendoValue: string;
        competitorValue: string;
        zlendoScore: number; // 0 to 100
        competitorScore: number; // 0 to 100
    }[];
    tableData: FeatureComparisonRow[];
    faqs: FAQItem[];
}

export const comparisonData: Record<string, ComparisonDetails> = {
    coohom: {
        competitorKey: 'coohom',
        competitorName: 'Coohom',
        title: 'Zlendo Realty vs. Coohom',
        subtitle: 'The intelligent choice for high-performance spatial design and marketing.',
        tagline: 'Zlendo Realty vs Coohom',
        summaryText: 'While Coohom is a well-known tool, professionals are switching to Zlendo Realty for its instant AI-powered layout generation, lightning-fast 8K rendering with transparent pricing, and region-specific cost calculations that require zero heavy hardware.',
        valueProps: [
            {
                title: 'Instant AI 2D-to-3D Lifting',
                description: 'Upload any blueprint, hand-drawn sketch, or PDF. Zlendo Realty’s proprietary AI lifts it into a textured 3D environment in 30 seconds. Coohom relies on manual tracing or slow paid lifting services.',
                iconName: 'Sparkles'
            },
            {
                title: 'Unlimited High-Res Renders',
                description: 'Get transparent flat-rate pricing with unlimited premium rendering. Say goodbye to Coohom’s complicated credit-purchasing models and resolution-based paywalls.',
                iconName: 'Zap'
            },
            {
                title: 'Hardware-Agnostic Web Performance',
                description: 'Run full 3D interactive designs and walkthroughs on any standard laptop, tablet, or smartphone. Zlendo Realty’s cloud-rendering pipeline uses 80% less local CPU/RAM than Coohom’s heavy in-browser graphics engine.',
                iconName: 'Laptop'
            },
            {
                title: 'Integrated Localization & Pricing',
                description: 'Calculate real-time project estimates instantly based on local market rates for materials and labor. Zlendo is a true design-to-sales engine, whereas Coohom is purely visual.',
                iconName: 'Calculator'
            }
        ],
        metrics: [
            {
                label: 'AI Automation Speed',
                zlendoValue: '30 Seconds',
                competitorValue: 'Manual / Slow',
                zlendoScore: 98,
                competitorScore: 40
            },
            {
                label: 'Pricing & Render Credits',
                zlendoValue: 'Unlimited (Flat Rate)',
                competitorValue: 'Pay-per-render Credits',
                zlendoScore: 95,
                competitorScore: 35
            },
            {
                label: 'Mobile & Tablet Usability',
                zlendoValue: 'Excellent / Fully Responsive',
                competitorValue: 'Extremely Limited / Laggy',
                zlendoScore: 90,
                competitorScore: 50
            },
            {
                label: 'Localization (Cost Estimation)',
                zlendoValue: '95%+ Accurate Local Rates',
                competitorValue: 'None / Visual Only',
                zlendoScore: 96,
                competitorScore: 10
            }
        ],
        tableData: [
            {
                featureName: 'AI Blueprint Conversion',
                zlendoValue: true,
                competitorValue: 'Limited / Paid',
                description: 'Converts JPG/PNG/PDF blueprints into furnished 3D plans instantly.'
            },
            {
                featureName: '8K Hyper-Realistic Rendering',
                zlendoValue: 'Unlimited in Pro plans',
                competitorValue: 'Costs extra credits',
                description: 'Ultra-HD renderings with realistic global illumination and raytracing.'
            },
            {
                featureName: 'Project Cost Estimating',
                zlendoValue: true,
                competitorValue: false,
                description: 'Automatic pricing breakdown for materials, labor, and local taxes.'
            },
            {
                featureName: 'System Requirements',
                zlendoValue: 'Any device (Browser-based)',
                competitorValue: 'Requires high-end PC/RAM',
                description: 'Web-optimized design system that does not lag on average devices.'
            },
            {
                featureName: 'White-Label Prop-Tech APIs',
                zlendoValue: true,
                competitorValue: 'Enterprise only ($$$$)',
                description: 'Developer APIs to integrate the 3D studio directly into your own app.'
            },
            {
                featureName: '1-Click VR Walkthroughs',
                zlendoValue: true,
                competitorValue: 'Complex setup',
                description: 'Generate web links compatible with Apple Vision Pro and Meta Quest instantly.'
            }
        ],
        faqs: [
            {
                question: 'Why should I switch from Coohom to Zlendo Realty?',
                answer: 'Zlendo Realty offers faster AI tools, unlimited rendering packages without credit paywalls, built-in cost estimation, and much better performance on standard computers. If you want a smoother workflow that translates visuals into real sales figures, Zlendo is the superior choice.'
            },
            {
                question: 'Does Zlendo Realty support my existing files?',
                answer: 'Yes! You can easily import DXF, DWG, JPG, PNG, and PDF files. Zlendo Realty is fully compatible with professional workflows.'
            },
            {
                question: 'How does Zlendo’s rendering pricing compare to Coohom?',
                answer: 'Coohom uses a complex credit-based pricing system where high-resolution (4K/8K) renders constantly cost extra. Zlendo Realty offers transparent flat-rate subscriptions with unlimited premium renders, letting you design and present without counting pennies.'
            }
        ]
    },
    planner5d: {
        competitorKey: 'planner5d',
        competitorName: 'Planner 5D',
        title: 'Zlendo Realty vs. Planner 5D',
        subtitle: 'Professional-grade architecture & design power without the consumer limitations.',
        tagline: 'Zlendo Realty vs Planner 5D',
        summaryText: 'Planner 5D is designed primarily for casual consumer DIY hobbyists. Zlendo Realty provides a premium, high-fidelity platform for professionals, architects, real estate developers, and designers who need elite 8K visuals, enterprise integration, and client-winning presentation tools.',
        valueProps: [
            {
                title: 'High-Fidelity 8K Renders',
                description: 'Impress high-end clients with photo-realistic renders featuring physical material properties, natural lighting, and raytracing. Avoid the generic, cartoonish look of Planner 5D.',
                iconName: 'Image'
            },
            {
                title: 'No Paywalls on Catalog Assets',
                description: 'Access a massive, curated library of premium designer furniture, smart lighting, and high-end textures. Zlendo includes everything in your subscription, without the aggressive upselling and locked items seen in Planner 5D.',
                iconName: 'ShieldCheck'
            },
            {
                title: 'Robust Prop-Tech API Suite',
                description: 'Embed our spatial engine directly into your commercial real estate website or e-commerce store with white-labeled, high-performance developer APIs. Planner 5D is a closed playground.',
                iconName: 'Cpu'
            },
            {
                title: 'Professional CAD & PDF Export',
                description: 'Export accurate, auto-dimensioned blueprint vectors in DWG, DXF, and PDF formats for contractors and engineers. Perfect for actual civil planning.',
                iconName: 'Layers'
            }
        ],
        metrics: [
            {
                label: 'Visual Output Quality',
                zlendoValue: 'Hyper-Realistic 8K',
                competitorValue: 'Basic / Stylized',
                zlendoScore: 99,
                competitorScore: 55
            },
            {
                label: 'Asset Library Access',
                zlendoValue: '100% Unlocked in Pro',
                competitorValue: 'Microtransactions / Paywalled',
                zlendoScore: 97,
                competitorScore: 40
            },
            {
                label: 'Professional CAD Exports',
                zlendoValue: 'Fully Vectorized (DWG/DXF)',
                competitorValue: 'Basic Image / Simplified PDF',
                zlendoScore: 94,
                competitorScore: 45
            },
            {
                label: 'Commercial Customizability',
                zlendoValue: 'Full White-Labeling & APIs',
                competitorValue: 'Consumer app only',
                zlendoScore: 95,
                competitorScore: 20
            }
        ],
        tableData: [
            {
                featureName: 'Rendering Engine',
                zlendoValue: '8K Hyper-Realistic (Raytraced)',
                competitorValue: 'Low-Fidelity Consumer Render',
                description: 'Elite raytracing vs. basic lighting models suitable mainly for hobbyists.'
            },
            {
                featureName: 'Watermark-Free Presentation',
                zlendoValue: true,
                competitorValue: 'Paid unlock per image',
                description: 'Share your designs cleanly under your own professional banner.'
            },
            {
                featureName: 'Prop-Tech API Suite',
                zlendoValue: true,
                competitorValue: false,
                description: 'APIs for custom configurators, 3D listing tours, and white-label tools.'
            },
            {
                featureName: 'Catalog Item Pricing',
                zlendoValue: 'All inclusive',
                competitorValue: 'Locked behind micro-paywalls',
                description: 'No nickel-and-diming for placing specialized furniture or high-end textures.'
            },
            {
                featureName: 'Auto-Dimension Snapping',
                zlendoValue: true,
                competitorValue: 'Basic',
                description: 'Intelligent measurements that update dynamically for architectural plans.'
            },
            {
                featureName: '1-Click Apple Vision Pro / Quest Sharing',
                zlendoValue: true,
                competitorValue: 'Not supported',
                description: 'Generate immersive spatial computing assets instantly for clients.'
            }
        ],
        faqs: [
            {
                question: 'Is Zlendo Realty suitable for professional architects and designers?',
                answer: 'Absolutely. Unlike Planner 5D, which is built for casual DIY users, Zlendo Realty is packed with professional-grade features including DWG/DXF vector exports, 8K ultra-realistic raytraced renders, customizable client branding, and direct developer APIs.'
            },
            {
                question: 'Does Zlendo Realty lock furniture assets behind microtransactions?',
                answer: 'No. We believe in creative freedom. Once you subscribe to our professional plan, you get unrestricted access to our entire premium catalog of over 50,000 textures and models with no hidden fees.'
            },
            {
                question: 'Can I white-label my designs for my real estate agency?',
                answer: 'Yes! Zlendo Realty allows you to brand interactive links and PDF reports with your own logo, colors, and business info, giving your clients a premium branded experience.'
            }
        ]
    },
    sketchup: {
        competitorKey: 'sketchup',
        competitorName: 'SketchUp',
        title: 'Zlendo Realty vs. SketchUp',
        subtitle: 'Instant AI-driven spatial design without the steep learning curve.',
        tagline: 'Zlendo Realty vs SketchUp',
        summaryText: 'SketchUp is a general-purpose 3D modeling tool that requires hours of manual drafting, expensive third-party rendering plugins, and high-end workstation PCs. Zlendo Realty is purpose-built for spatial design, offering native cloud-rendering, AI-assisted planning, and built-in costing in one seamless, easy-to-use web app.',
        valueProps: [
            {
                title: 'No 100-Hour Learning Curve',
                description: 'Forget complex coordinate systems and polygon modeling tools. Zlendo Realty uses smart, architectural drag-and-drop mechanics, making you a pro-designer from Day 1.',
                iconName: 'Clock'
            },
            {
                title: 'Native Cloud Rendering (No Plugins Needed)',
                description: 'Get beautiful hyper-realistic renders straight out of your browser. No need to purchase, configure, and learn expensive rendering plugins like V-Ray, Lumion, or Enscape.',
                iconName: 'Tv'
            },
            {
                title: 'Instant 1-Click AI Furnishing',
                description: 'Use our AI Room Styler to instantly furnish and decorate empty spaces based on selected design themes. Skip the tedious process of searching, importing, and placing individual objects manually.',
                iconName: 'Sparkles'
            },
            {
                title: 'Automatic Cost Estimating',
                description: 'Generate comprehensive bill of materials (BOM) and cost estimates instantly as you design. SketchUp requires manual, error-prone spreadsheets or complex external extension math.',
                iconName: 'Calculator'
            }
        ],
        metrics: [
            {
                label: 'Ease of Use (Time to Master)',
                zlendoValue: 'Under 10 Minutes',
                competitorValue: '100+ Hours (Very High)',
                zlendoScore: 98,
                competitorScore: 30
            },
            {
                label: 'Built-In Photo-Real Rendering',
                zlendoValue: 'Included (Native Cloud)',
                competitorValue: 'Requires Expensive Plugins',
                zlendoScore: 96,
                competitorScore: 20
            },
            {
                label: 'AI Design Automation',
                zlendoValue: 'Fully Integrated',
                competitorValue: 'None / Manual Only',
                zlendoScore: 98,
                competitorScore: 15
            },
            {
                label: 'Total Cost of Software + Rendering',
                zlendoValue: 'Extremely Affordable All-in-One',
                competitorValue: 'Very Expensive Combined Subscriptions',
                zlendoScore: 95,
                competitorScore: 40
            }
        ],
        tableData: [
            {
                featureName: 'AI 2D-to-3D Conversion',
                zlendoValue: true,
                competitorValue: false,
                description: 'Upload blueprints and instantly get an aligned 3D model vs. tracing walls manually from scratch.'
            },
            {
                featureName: 'Built-in Photo-Real Renders',
                zlendoValue: true,
                competitorValue: 'Requires plugin ($600/yr extra)',
                description: 'One-click hyper-realistic lighting directly in browser vs. complex exterior rendering setups.'
            },
            {
                featureName: 'Automatic Bill of Materials',
                zlendoValue: true,
                competitorValue: 'Manual calculations',
                description: 'Tracks material quantities and costs automatically as you draw walls and select finishes.'
            },
            {
                featureName: 'Smart Asset Placement',
                zlendoValue: 'AI snaps items dynamically',
                competitorValue: 'Completely manual coordinates',
                description: 'Doors and windows snap to walls instantly, updating openings automatically.'
            },
            {
                featureName: 'Device Compatibility',
                zlendoValue: 'Runs smoothly on any browser',
                competitorValue: 'Requires heavy GPU desktop installation',
                description: 'Works beautifully on Chromebooks, iPads, and standard business laptops.'
            },
            {
                featureName: 'Client Shareable Web Links',
                zlendoValue: true,
                competitorValue: 'Requires file viewer download',
                description: 'Clients can walk through designs interactively in 3D right from their smartphones.'
            }
        ],
        faqs: [
            {
                question: 'Do I need a powerful workstation computer to run Zlendo Realty?',
                answer: 'No! Unlike SketchUp, which requires high-end graphics cards (GPUs) and fast processors to handle complex 3D files and renderings, Zlendo Realty handles all the complex rendering computations in the cloud. It runs fluidly in any standard web browser on Windows, Mac, iPad, or even Chromebooks.'
            },
            {
                question: 'How does Zlendo Realty compare in price to SketchUp?',
                answer: 'SketchUp requires a recurring annual subscription ($349+), plus you must buy rendering engines like V-Ray ($600/year) and separate asset libraries. Zlendo Realty offers a highly cost-effective, all-in-one monthly or annual plan that includes professional design tools, a massive furniture catalog, and high-fidelity cloud rendering.'
            },
            {
                question: 'Can I import my existing CAD files into Zlendo Realty?',
                answer: 'Yes. You can import DXF, DWG, PDF, and image blueprints directly. Zlendo’s AI will automatically convert them into interactive, fully customizable 3D designs, letting you easily transition your traditional pipeline into the AI era.'
            }
        ]
    }
};
