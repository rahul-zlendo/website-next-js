'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Sparkles, CheckCircle2, Video, ArrowRight,
    Briefcase, BarChart3, Layers, TrendingUp, Smartphone
} from 'lucide-react';
import BusinessDemoForm from '../components/BusinessDemoForm';
import BusinessFeatureTabs from '../components/BusinessFeatureTabs';
import { urlFor } from '@/lib/sanity/image';

const heroIcons = [Layers, Video, Smartphone, BarChart3];
const personaIcons = [Briefcase, Layers, Sparkles, BarChart3];

interface BusinessClientProps {
    cms: any;
    country: string;
}

export default function BusinessClient({ cms, country }: BusinessClientProps) {
    const [hasDemoHash, setHasDemoHash] = useState(false);

    useEffect(() => {
        const checkHash = () => {
            setHasDemoHash(window.location.hash === '#demo-form');
        };

        checkHash();
        window.addEventListener('hashchange', checkHash);
        return () => window.removeEventListener('hashchange', checkHash);
    }, []);

    const getPath = (path: string): string => {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        if (cleanPath === '/') return `/${country}`;
        return `/${country}${cleanPath}`;
    };

    // Fallback data
    const heroFeatures = cms?.heroFeatures?.length > 0 ? cms.heroFeatures : [
        {
            title: "Intelligent 2D Planning",
            desc: "Sketch floor plans with AI-assisted accuracy.",
            bg: "bg-[#FF6820]/10",
            iconColor: "text-[#FF6820]",
            borderColor: "hover:border-[#FF6820]/30",
            textColor: "text-zlendo-grey-dark"
        },
        {
            title: "Immersive 3D Mastery",
            desc: "4K–8K walkthroughs that wow clients instantly.",
            bg: "bg-white",
            iconColor: "text-zlendo-grey-medium",
            borderColor: "hover:border-[#FF6820]/20",
            textColor: "text-zlendo-grey-dark",
        },
        {
            title: "AR Sales Booster",
            desc: "Close deals faster with on-the-spot Augmented Realty.",
            bg: "bg-[#000080]/5",
            iconColor: "text-[#000080]",
            borderColor: "hover:border-[#000080]/30",
            textColor: "text-[#000080]"
        },
        {
            title: "Real-time Costing",
            desc: "Instant BOQ and dynamic budget estimates.",
            bg: "bg-[#128807]/10",
            iconColor: "text-[#128807]",
            borderColor: "hover:border-[#128807]/30",
            textColor: "text-[#128807]"
        }
    ];

    const featureContent = cms?.industryFeatures?.length > 0 ? 
        cms.industryFeatures.reduce((acc: any, item: any) => {
            acc[item.industryName] = {
                title: item.industryName,
                features: item.features.map((f: any) => ({
                    title: f.title,
                    desc: f.desc,
                    image: f.mediaUrl || (f.image ? urlFor(f.image).url() : '')
                }))
            };
            return acc;
        }, {}) : {
        'Interior Design Companies': {
            title: 'Interior Design Companies',
            features: [
                { title: '2D-3D', desc: 'Convert sketches into editable 3D models instantly with AI-powered precision.', image: '/assets/business/2d-to-3d.webm' },
                { title: 'Estimation quote for interiors', desc: 'Generate accurate BOQs and professional quotations in seconds as you design.', image: '/assets/business/cost-estimation.webm' },
                { title: '360 Walkthrough', desc: "Immersive VR experiences that let clients experience their future home before it's built.", image: '/assets/business/360-walkthrough.webm' }
            ]
        },
        'Architects': {
            title: 'Architects',
            features: [
                { title: 'High-End Visualization', desc: 'Create photo-realistic 8K renders and cinematic walkthroughs for large-scale projects.', image: '/assets/business/image-render.webm' },
                { title: 'Detailed BIM Support', desc: 'Integrate architectural details and structural elements into a unified cloud model.', image: '/assets/business/bim-support.webm' },
                { title: 'Sunlight & Shadow Analysis', desc: 'Simulate real-world environment conditions to optimize building performance.', image: '/assets/business/sunlight-shadow-analysis.webm' }
            ]
        },
        'Realtors for Marketing': {
            title: 'Realtors for Marketing',
            features: [
                { title: 'Marketing Content Packs', desc: 'Generate high-quality images and social media layouts to attract potential buyers.', image: '/assets/business/marketing-content-packs.webm' },
                { title: 'Interactive Sales Tool', desc: 'Enable sales teams to customize interiors on-the-fly during client presentations.', image: '/assets/business/interactive-sales-tool.webm' },
                { title: 'AR Home Preview', desc: 'Let buyers visualize future homes on empty sites using advanced Augmented Reality.', image: '/assets/business/ar.webm' }
            ]
        },
        'Experience Centers': {
            title: 'Experience Centers',
            features: [
                { title: 'Digital Showroom', desc: 'Replace physical sample flats with cost-effective, high-impact digital experiences.', image: '/assets/business/digital-showroom.webm' },
                { title: 'Multi-Terminal Sync', desc: 'Synchronize designs across multiple screens and devices for a seamless visitor journey.', image: '/assets/business/multi-terminal-sync.webm' },
                { title: 'Visitor Analytics', desc: 'Track which designs and layouts resonate most with your prospects.', image: '/assets/business/visitors-analytics.webm' }
            ]
        },
        'Civil Contractors': {
            title: 'Civil Contractors',
            features: [
                { title: 'Production Drawings', desc: 'Auto-generate accurate 2D CAD drawings from your 3D models for site execution.', image: '/assets/business/2d-cad-drawing.webm' },
                { title: 'Material Optimization', desc: 'Maximize yield and reduce wastage with intelligent panel nesting and material lists.', image: '/assets/business/material-optimization.webm' },
                { title: 'Project Coordination', desc: 'One source of truth for all stakeholders to minimize errors during construction.', image: '/assets/business/project-coordination.webm' }
            ]
        },
        'Paint industry': {
            title: 'Paint industry',
            features: [
                { title: 'Color Visualization', desc: 'Accurately simulate thousands of shades and textures in realistic lighting.', image: '/assets/business/color-visualization.webm' },
                { title: 'Quantity Calculator', desc: 'Automatically estimate the amount of paint required based on wall area.', image: '/assets/business/quantity-calculator.webm' },
                { title: 'Trend Forecasting', desc: 'Showcase seasonal color palettes and design trends to inspire customers.', image: '/assets/business/trend-forecasting.webm' }
            ]
        },
        'False Ceiling': {
            title: 'False Ceiling',
            features: [
                { title: 'Ceiling Design Library', desc: 'Access a vast library of modern false ceiling patterns and configurations.', image: '/assets/business/ceiling-design-library.webm' },
                { title: 'Lighting Integration', desc: 'Visualize COB lights, strip lights, and chandeliers within your ceiling designs.', image: '/assets/business/lighting-integration.webm' },
                { title: 'Installation Guides', desc: 'Generate detailed layout plans for precise on-site installation.', image: '/assets/business/installation-guides.webm' }
            ]
        }
    };

    const personas = cms?.personas?.length > 0 ? cms.personas.map((p: any) => ({
        ...p,
        link: getPath(p.link)
    })) : [
        { title: 'Developers', desc: 'Sell units faster directly from the site office without sample flats.', link: getPath('/products/virtual-walkthrough') },
        { title: 'Architects', desc: 'Visualize designs instantly and get client approvals in record time.', link: getPath('/products/2d-to-3d') },
        { title: 'Interior Firms', desc: 'Scale your design capacity with AI-driven layout tools.', link: getPath('/products/floor-planner') },
        { title: 'Marketing Teams', desc: 'Generate 4K renders and videos for brochures on demand.', link: getPath('/products/realistic-renders') },
    ];

    const checkmarks = cms?.checkmarks || [
        'Localized library with Indian furniture brands',
        'Dedicated support team based in India',
        'INR Pricing & GST Compliant Billing',
    ];

    return (
        <div className="bg-white selection:bg-zlendo-orange/10 selection:text-zlendo-orange">
            <div className="min-h-screen relative overflow-hidden font-nunito">
                {/* Visual Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zlendo-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zlendo-teal/5 blur-[120px] rounded-full translate-y-1/4 -translate-x-1/4 -z-10" />

                {/* Hero Section */}
                <section className={`container-custom text-center mb-8 md:mb-12 px-4 ${hasDemoHash ? 'pt-32 lg:pt-48' : 'py-8 lg:py-12'} overflow-visible relative z-10 transition-all duration-300`}>
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white shadow-xl shadow-black/5 border border-black/5 mb-8">
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#FF6820]">{cms?.badgeText1 || "Built in India."}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#128807]">{cms?.badgeText2 || "Built for India."}</span>
                    </div>

                    <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito text-zlendo-teal leading-[0.95] mb-6 md:mb-8 max-w-5xl mx-auto tracking-tighter">
                        {cms?.heroTitle || "India's Leading"}{' '}
                        <span className="text-zlendo-orange italic">{cms?.heroTitleHighlight || "All-in-One Cloud Platform"}</span> <br />
                        <span className="text-2xl md:text-5xl block mt-2 tracking-normal">{cms?.heroTitleBottom || "for Designers, Architects & Interior Experts"}</span>
                    </h1>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8 mt-8 relative">
                        {heroFeatures.map((feature: any, i: number) => {
                            const Icon = heroIcons[i % heroIcons.length];
                            return (
                                <div
                                    key={i}
                                    className={`p-6 rounded-[32px] border border-black/[0.03] ${feature.bg} shadow-sm backdrop-blur-sm group ${feature.borderColor} transition-all text-left`}
                                >
                                    <div className={`w-12 h-12 ${i === 1 ? 'bg-gray-100' : 'bg-white/80'} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                                        <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                                    </div>
                                    <h3 className={`text-lg font-black font-nunito mb-2 ${feature.textColor} leading-tight`}>{feature.title}</h3>
                                    <p className={`text-xs font-bold opacity-70 leading-relaxed ${feature.textColor === 'text-[#128807]' ? 'text-[#128807]' : feature.textColor === 'text-[#000080]' ? 'text-[#000080]' : 'text-zlendo-grey-medium'}`}>{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mb-8">
                        <p className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark/80 tracking-tight">
                            {cms?.heroDescPrefix1 || "Design"}{' '}
                            <span className="text-zlendo-orange italic">{cms?.heroDescHighlight1 || "faster"}</span>
                            {cms?.heroDescPrefix2 || ", present"}{' '}
                            <span className="text-zlendo-orange italic">{cms?.heroDescHighlight2 || "smarter"}</span>
                            {cms?.heroDescPrefix3 || ", and build with"}{' '}
                            <span className="text-zlendo-orange italic">{cms?.heroDescHighlight3 || "confidence"}</span>.
                        </p>
                        <p className="text-lg font-bold text-zlendo-grey-medium mt-2 opacity-60">{cms?.heroSubDesc || "Everything you need, right from your browser."}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative mb-10">
                        <a
                            href="#demo-form"
                            className="relative bg-zlendo-orange text-white px-12 py-5 rounded-[24px] font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-zlendo-orange/30 group flex items-center gap-3 active:scale-95 text-center"
                        >
                            <span className="relative z-10">{cms?.heroCtaLabel || "Book your Demo"}</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                        </a>
                    </div>

                    {/* Feature Checkmarks */}
                    <div className="mt-0 flex flex-wrap justify-center gap-x-12 gap-y-4">
                        {checkmarks.map((item: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-zlendo-grey-dark/60">
                                <CheckCircle2 className="w-4 h-4 text-zlendo-orange" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* One Platform Showcase */}
                <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-zlendo-mint/10">
                    <div className="container-custom">
                        <div className="text-center max-w-4xl mx-auto mb-10">
                            <h2 className="text-4xl sm:text-6xl font-black font-nunito text-zlendo-grey-dark leading-tight">
                                {cms?.platformTitle || "One Platform."}{' '}
                                <span className="text-zlendo-teal">{cms?.platformTitleHighlight || "Infinite Possibilities."}</span>
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium mt-4 max-w-2xl mx-auto">
                                {cms?.platformSubtitle || "From first sketch to final finish, Zlendo Realty unifies your entire design and sales workflow."}
                            </p>
                            <a href="#demo-form" className="mt-8 group relative inline-flex items-center gap-3 px-8 py-3 bg-white border border-zlendo-teal/20 rounded-full shadow-lg shadow-zlendo-teal/10 hover:shadow-xl hover:shadow-zlendo-teal/20 hover:border-zlendo-teal text-zlendo-teal font-black text-lg transition-all">
                                <span className="relative z-10">{cms?.platformCtaLabel || "Book Free Demo"}</span>
                                <div className="w-8 h-8 rounded-full bg-zlendo-teal/10 flex items-center justify-center group-hover:bg-zlendo-teal group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        </div>

                        <div className="relative rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white max-w-6xl mx-auto bg-black">
                            <div className="relative pt-[56.25%] w-full">
                                <iframe
                                    src={cms?.platformVideoUrl || "https://www.youtube.com/embed/ij_yZ-sNrOY?autoplay=1&mute=1&loop=1&playlist=ij_yZ-sNrOY&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"}
                                    title="Zlendo Realty Enterprise Dashboard"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-black/10 rounded-[20px] md:rounded-[38px]" />
                        </div>
                    </div>
                </section>

                {/* Tabbed Features (Client Island) */}
                <BusinessFeatureTabs featureContent={featureContent} />

                {/* ROI Spotlight */}
                <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-zlendo-mint/10">
                    <div className="container-custom">
                        <div className="bg-white rounded-[60px] p-12 md:p-20 border border-black/5 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-bold text-sm uppercase tracking-wider mb-8">
                                        <TrendingUp className="w-4 h-4" />
                                        <span>{cms?.roiBadge || "Enterprise Case Study"}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight mb-8">
                                        {cms?.roiTitle || "Real Results."} <br />
                                        <span className="text-zlendo-teal">{cms?.roiTitleHighlight || "Real ROI."}</span>
                                    </h3>
                                    <p className="text-xl text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                        {cms?.roiDesc1 || "Apex Developers saved ₹15Cr by replacing physical sample flats with Zlendo Realty Digital Experience Centers."}
                                    </p>
                                    <p className="text-lg text-zlendo-grey-dark font-medium leading-relaxed mb-10">
                                        {cms?.roiDesc2 || "With hyper-realistic 8K walkthroughs, they closed 24 units with NRI buyers who never visited the site. This shift eliminated the need for heavy upfront capital and accelerated their sales cycle by 38%."}
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 md:gap-6 border-t border-black/5 pt-8">
                                        {(cms?.roiStats || [
                                            { value: '38%', label: 'Faster Velocity' },
                                            { value: '₹15Cr', label: 'Capex Saved' },
                                            { value: '12x', label: 'Digital ROI' }
                                        ]).map((stat: any, i: number) => (
                                            <div key={i} className="space-y-1 text-center md:text-left">
                                                <div className={`text-xl md:text-3xl lg:text-4xl font-black font-nunito ${i === 2 ? 'text-zlendo-teal' : 'text-zlendo-grey-dark'}`}>{stat.value}</div>
                                                <div className="text-[9px] md:text-[10px] lg:text-xs font-bold text-zlendo-grey-medium uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zlendo-grey-dark/80 to-transparent opacity-60 z-10" />
                                    <img
                                        src={cms?.roiImage ? urlFor(cms.roiImage).url() : "/assets/business/apex-developer.png"}
                                        alt={cms?.roiImage?.alt || "Apex Developers Dashboard"}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-8 left-8 z-20">
                                        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{cms?.roiProjectLabel || "Project"}</p>
                                        <p className="text-white text-xl font-black font-nunito">{cms?.roiProjectName || "Apex Grandeur, Gurugram"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Built for Every Professional */}
                <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-zlendo-grey-dark relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="container-custom relative z-10">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-[48px] font-black font-nunito text-white leading-tight">
                                {cms?.personasTitle || "Built for"}{' '}
                                <span className="text-zlendo-orange">{cms?.personasTitleHighlight || "Every Professional."}</span>
                            </h2>
                            <p className="text-xl text-white/60 font-medium mt-4 max-w-2xl mx-auto">
                                {cms?.personasSubtitle || "Zlendo Realty empowers the entire real estate ecosystem."}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {personas.map((persona: any, i: number) => {
                                const Icon = personaIcons[i % personaIcons.length];
                                return (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[30px] hover:bg-white/10 transition-colors group">
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-zlendo-orange group-hover:text-white transition-all">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-black font-nunito text-white mb-3">{persona.title}</h3>
                                        <p className="text-white/60 font-medium leading-relaxed">
                                            {persona.desc}
                                        </p>
                                        <Link href={persona.link} className="mt-8 flex items-center gap-2 text-zlendo-teal font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all cursor-pointer inline-flex">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Demo Form Section */}
                <section id="demo-form" className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#0f172a] text-white relative overflow-hidden scroll-mt-24">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-5xl mx-auto space-y-10">
                            <div className="text-center">
                                <div className="flex justify-center gap-2 items-center text-white/80 font-bold uppercase tracking-widest text-sm mb-4 bg-white/5 w-fit mx-auto px-4 py-1.5 rounded-full border border-white/5">
                                    <CheckCircle2 className="w-5 h-5" /> {cms?.demoBadge || "Trusted by 500+ Indian Enterprises"}
                                </div>
                                <h2 className="text-3xl md:text-[48px] font-black font-nunito leading-none mb-4 drop-shadow-sm">
                                    {cms?.demoTitle || "See Zlendo Realty in"}{' '}
                                    <span className="text-white italic">{cms?.demoTitleHighlight || "Action."}</span>
                                </h2>
                                <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto leading-relaxed">
                                    {cms?.demoSubtitle || "Schedule a customized demo to see how you can save costs and accelerate sales."}
                                </p>
                            </div>

                            {/* Client Island: Demo Form */}
                            <BusinessDemoForm />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
