'use client';

import Link from 'next/link';
import {
    Layout, Upload, PenTool, Home, ArrowRight,
    CheckCircle2, Sparkles, Zap, Layers, User, Briefcase
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '../../components/FaqAccordion';

interface FloorPlannerClientProps {
    cms: any;
    resolvedFaqs: any[];
    resolvedWorkflowSteps: any[];
    resolvedDraftingFeatures: any[];
    resolvedTemplateTags: any[];
}

const TwoDSketchImg = '/assets/floor-planner/2d-sketch.webp';
const ThreeDSketchImg = '/assets/floor-planner/3d-sketch.webp';

export default function FloorPlannerClient({ 
    cms, 
    resolvedFaqs, 
    resolvedWorkflowSteps, 
    resolvedDraftingFeatures, 
    resolvedTemplateTags 
}: FloorPlannerClientProps) {
    
    // Resolve labels and static text from CMS or defaults
    const heroBadge = cms?.heroBadgeText ?? 'AI-First Design Engine';
    const heroTitle = cms?.heroTitle ?? 'Design. Visualize.';
    const heroHighlight = cms?.heroTitleHighlight ?? 'Experience.';
    const heroSubtitlePath1 = cms?.heroSubtitle ?? 'Your Home — Before a Single Brick Is Laid.';
    const heroSubtitlePath2 = cms?.heroSubtitleAfter ?? "Experience the world's most advanced AI floor planner, built for Indian homes.";
    const heroPrimaryLabel = cms?.heroPrimaryCtaLabel ?? 'Design Your Home';
    const heroSecondaryLabel = cms?.heroSecondaryCtaLabel ?? 'Request Your Demo';
    
    const workflowTitle = cms?.workflowSectionTitle ?? 'From Imagination to Realty';
    const workflowSubtitle = cms?.workflowSectionSubtitle ?? 'A seamless journey powered by artificial intelligence.';
    
    const draftingTitle = cms?.draftingSectionTitle ?? 'Draw like a pro. No degree required.';
    const draftingDesc = cms?.draftingSectionDescription ?? 'Our intelligent snapping system and AI-assisted drafting make drawing floor plans as easy as sketching on a napkin. Define exact dimensions to the millimeter.';
    const draftingButtonLabel = cms?.draftingButtonLabel ?? 'Try Drafting Now';

    const magicTitle = cms?.magicSectionTitle ?? "Don't draw. Just upload.";
    const magicSubtitle = cms?.magicSectionSubtitle ?? 'Our proprietary Vision AI understands your hand-drawn sketches or architect PDFs and converts them into editable 3D models in seconds.';
    
    const templatesTitle = cms?.templatesSectionTitle ?? 'Ready-made templates for Indian Families.';
    const templatesSubtitle = cms?.templatesSectionSubtitle ?? "Don't start from scratch. Choose from thousands of pre-designed layouts optimized for 2BHK, 3BHK, and villa configurations tailored to modern homes.";
    const templatesButtonLabel = cms?.templatesButtonLabel ?? 'Explore Templates';

    const faqTitle = cms?.faqSectionTitle ?? 'Frequently Asked Questions';

    const iconMap: any = { Sparkles, PenTool, Zap, Layers, Home };

    return (
        <div className="bg-white min-h-screen font-nunito pt-4 selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fafafa]">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-zlendo-teal/10 via-purple-100 to-transparent rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-orange-100 via-pink-100 to-transparent rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
                    <div className="absolute inset-0 opacity-[0.4]"
                        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />
                </div>

                <div className="container-custom px-6 relative z-10 w-full pt-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8">
                            <Sparkles className="w-4 h-4 text-zlendo-teal" />
                            <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">{heroBadge}</span>
                        </div>

                        <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito text-zlendo-grey-dark mb-8 leading-[1.05] tracking-tight">
                            {heroTitle}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-600">{heroHighlight}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-zlendo-grey-medium font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                            {heroSubtitlePath1}<br />
                            <span className="opacity-60 text-base md:text-lg">{heroSubtitlePath2}</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <a
                                href={SIGNUP_URL}
                                className="px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-xl shadow-[0_20px_40px_-10px_rgba(13,148,136,0.3)] hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 group text-center"
                            >
                                {heroPrimaryLabel} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href={`/in/business#demo-form`}
                                className="px-10 py-5 bg-white text-zlendo-grey-dark border border-black/5 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:border-black/10 transition-all flex items-center gap-2 text-center"
                            >
                                {heroSecondaryLabel}
                            </Link>
                        </div>

                        {/* Dashboard Preview */}
                        <div className="relative mx-auto max-w-6xl">
                            <div className="relative rounded-t-[32px] overflow-hidden shadow-2xl border-x-8 border-t-8 border-white bg-slate-900 aspect-[16/9] mx-4 md:mx-0 ring-1 ring-black/10">
                                <img
                                    src={urlFor(cms?.heroImageUrl).url() || "/assets/floor-planner/hero-floor-planner.webp"}
                                    alt="Zlendo Realty Floor Planner Interface"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE WORKFLOW */}
            <section className="pt-20 pb-8 md:py-20 bg-white relative z-20">
                <div className="container-custom px-6">
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <span className="text-zlendo-teal font-black uppercase tracking-widest text-xs mb-4 block">{cms?.workflowBadgeText ?? 'The Workflow'}</span>
                        <h2 className="text-3xl md:text-5xl font-black font-nunito text-zlendo-grey-dark mb-6">{workflowTitle}</h2>
                        <p className="text-xl text-zlendo-grey-medium font-medium">{workflowSubtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10" />
                        {resolvedWorkflowSteps.map((item, i) => {
                            const Icon = iconMap[item.iconName] || Sparkles;
                            return (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:border-zlendo-teal group-hover:scale-110 transition-all duration-300 relative z-10">
                                        <Icon className="w-8 h-8 text-zlendo-grey-medium group-hover:text-zlendo-teal transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-black text-zlendo-grey-dark mb-2">{item.title}</h3>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. PRECISION DRAFTING */}
            <section className="py-20 bg-slate-50 overflow-hidden relative">
                <div className="container-custom px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                                <PenTool className="w-3 h-3" /> {cms?.draftingBadgeText ?? 'Precision Tools'}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 leading-tight">
                                {draftingTitle}
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed">
                                {draftingDesc}
                            </p>

                            <ul className="space-y-6 mb-12">
                                {resolvedDraftingFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={SIGNUP_URL}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-black text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-500/20 group"
                            >
                                {draftingButtonLabel} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20 blur-3xl rounded-full" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img src={urlFor(cms?.draftingImageUrl).url() || "/assets/floor-planner/drafting.webp"} alt="Zlendo Realty Drafting Tool Interface" className="w-full h-auto" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MAGIC MOMENT - UPLOAD */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal opacity-20 blur-[120px] rounded-full" />

                <div className="container-custom px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zlendo-teal/20 text-zlendo-teal border border-zlendo-teal/30 font-bold text-xs uppercase tracking-widest mb-6">
                            <Zap className="w-3 h-3" /> {cms?.magicBadgeText ?? 'The Magic'}
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black font-nunito mb-8">
                            {magicTitle}
                        </h2>
                        <p className="text-2xl text-slate-300 font-medium leading-relaxed">
                            {magicSubtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Input */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                            <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">{cms?.magicInputLabel ?? 'Input'}</div>
                            <img src={urlFor(cms?.magicInputImage).url() || TwoDSketchImg} alt="Hand-drawn floor plan sketch" className="rounded-xl w-full opacity-80" />
                            <div className="mt-4 text-center font-black text-xl">{cms?.magicInputTitle ?? 'Your Sketch'}</div>
                        </div>

                        {/* Process */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-1 bg-gradient-to-b from-transparent via-zlendo-teal to-transparent h-24 md:h-1" />
                            <div className="w-20 h-20 rounded-full bg-zlendo-teal flex items-center justify-center shadow-[0_0_40px_rgba(13,148,136,0.6)]">
                                <Upload className="w-8 h-8 text-white" />
                            </div>
                            <div className="mt-4 font-black text-zlendo-teal text-xl">{cms?.magicProcessTitle ?? 'AI Processing'}</div>
                            <div className="text-sm font-bold text-slate-500">{cms?.magicProcessSubtitle ?? '~0.8 Seconds'}</div>
                        </div>

                        {/* Output */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                            <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">{cms?.magicOutputLabel ?? 'Result'}</div>
                            <img src={urlFor(cms?.magicOutputImage).url() || ThreeDSketchImg} alt="AI-generated 3D model from sketch" className="rounded-xl w-full" />
                            <div className="mt-4 text-center font-black text-xl">{cms?.magicOutputTitle ?? 'Interactive 3D'}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ARCHITECT TEMPLATES */}
            <section className="py-20 bg-white">
                <div className="container-custom px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src={urlFor(cms?.templatesImage1).url() || "/assets/floor-planner/template-1.webp"} className="rounded-3xl shadow-lg mt-12 w-full" alt={cms?.templatesImage1?.alt || "Indian Home Design 1"} loading="lazy" />
                                <img src={urlFor(cms?.templatesImage2).url() || "/assets/floor-planner/template-2.webp"} className="rounded-3xl shadow-lg w-full" alt={cms?.templatesImage2?.alt || "Indian Home Design 2"} loading="lazy" />
                            </div>
                            {/* Floating Vastu Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3">
                                <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                                    <Layout className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="font-black text-zlendo-grey-dark">{cms?.templatesBadgeTitle ?? 'Vastu Compliant'}</div>
                                    <div className="text-xs font-bold text-slate-400">{cms?.templatesBadgeSubtitle ?? '100+ Templates'}</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest mb-6">
                                <Home className="w-3 h-3" /> {cms?.templatesBadgeText ?? 'Built for India'}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 leading-tight">
                                {templatesTitle}
                            </h2>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed">
                                {templatesSubtitle}
                            </p>
                            <div className="flex flex-wrap gap-4 mb-10">
                                {resolvedTemplateTags.map(tag => (
                                    <span key={tag} className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 font-bold hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href="/in/viewalltemplates" className="px-8 py-4 bg-zlendo-grey-dark text-white rounded-xl font-bold hover:bg-black transition-colors inline-block text-center">
                                {templatesButtonLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SPLIT CTA */}
            <section className="pt-24 pb-4 md:py-24 bg-slate-50">
                <div className="container-custom px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-zlendo-grey-dark mb-4">{cms?.ctaSectionTitle ?? 'Choose your path'}</h2>
                        <p className="text-xl text-slate-500 font-medium">{cms?.ctaSectionSubtitle ?? 'Tailored experiences for every need.'}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Individual Card */}
                        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100 hover:border-zlendo-teal/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <User className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-zlendo-teal/10 text-zlendo-teal flex items-center justify-center mb-6">
                                    <User className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-zlendo-grey-dark mb-4">{cms?.individualCardTitle ?? 'Homeowners'}</h3>
                                <p className="text-slate-500 font-medium mb-8 min-h-[80px]">
                                    {cms?.individualCardDesc ?? 'Design your dream home, visualize renovations, and get cost estimates in minutes.'}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {(cms?.individualCardFeatures ?? ['Free for personal use', '1 Project included', 'Basic 4K Renders']).map((f: string) => (
                                        <li key={f} className="flex items-center gap-3 font-bold text-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-zlendo-teal" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={SIGNUP_URL}
                                    className="w-full py-4 rounded-xl bg-zlendo-teal text-white font-black text-lg hover:bg-zlendo-teal-dark transition-colors inline-block text-center"
                                >
                                    {cms?.individualCardCta ?? 'Start Designing Free'}
                                </a>
                            </div>
                        </div>

                        {/* Enterprise Card */}
                        <div className="bg-slate-900 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Briefcase className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 border border-white/10">
                                    <Briefcase className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">{cms?.businessCardTitle ?? 'Architects & Builders'}</h3>
                                <p className="text-slate-400 font-medium mb-8 min-h-[80px]">
                                    {cms?.businessCardDesc ?? 'Scale your business with high-speed rendering, white-labeled client portals, and collaborative tools.'}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {(cms?.businessCardFeatures ?? ['Unlimited Projects', '8K & VR Walkthroughs', 'Team Collaboration']).map((f: string) => (
                                        <li key={f} className="flex items-center gap-3 font-bold text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/in/business#demo-form`}
                                    className="w-full py-4 rounded-xl bg-white text-slate-900 font-black text-lg hover:bg-slate-200 transition-colors inline-block text-center"
                                >
                                    {cms?.businessCardCta ?? 'Request Enterprise Demo'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-16 bg-white">
                <div className="container-custom px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">{faqTitle}</h2>
                    <FaqAccordion faqs={resolvedFaqs} />
                </div>
            </section>
        </div>
    );
}
