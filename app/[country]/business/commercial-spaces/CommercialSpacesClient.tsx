'use client';

import { motion } from 'framer-motion';
import { Building2, TrendingUp, Layout, Home, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '@/app/[country]/components/FaqAccordion';
import JsonLd from '@/components/common/JsonLd';

interface CommercialSpacesClientProps {
    cms: any;
}

export default function CommercialSpacesClient({ cms }: CommercialSpacesClientProps) {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-orange';
    const bgAccentClass = 'bg-zlendo-orange/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        document.title = cms?.seoTitle ?? 'Commercial Spaces';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'From startup offices to flagship retail stores, ensure every square foot is optimized for productivity and brand identity.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'commercial spaces, office design, retail layout, business interiors, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Building2, TrendingUp, Layout, Home, Sparkles };
    const CaseStudyIcon = iconMap[cms?.caseStudyIcon] || Building2;

    const caseStudyData = {
        title: cms?.caseStudyTitle ?? 'Commercial Spaces',
        subtitle: cms?.caseStudySubtitle ?? 'Interior Firm Story',
        icon: CaseStudyIcon,
        challenge: {
            title: cms?.challengeTitle ?? 'Layout Confusion & Crowded Workspaces',
            description: cms?.challengeDescription ?? 'Rohit, founder of a commercial interior firm, struggled with clients who couldn\'t understand technical drawings. This led to layouts being approved without clarity on workstation spacing or aisle width. Once execution started, workstations felt crowded and walkways were blocked, causing clients to request late-stage changes that led to material waste and project delays.'
        },
        solution: {
            title: cms?.solutionTitle ?? 'Functional Space Optimization',
            description: cms?.solutionDescription ?? 'Rohit integrated Zlendo Realty to create clear 2D layouts and realistic 3D views before execution. Clients could clearly see seating layouts, circulation paths, and storage zones. By reviewing different options early, decisions were finalized before site work began, leading to predictable timelines and improved project profitability.'
        },
        stats: cms?.stats?.length ? cms.stats : [
            { label: 'Execution Changes', value: '-85%' },
            { label: 'Design Finalization', value: '3x Faster' }
        ],
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : '/assets/use-cases/commercial/commercial-office.webp',
        imageAlt: cms?.caseStudyImage?.alt || 'Zlendo Realty Commercial and Office Space 3D Design Software'
    };

    const faqs = [
        { q: "Can we visualize retail store layouts with exact dimensions?", a: "Yes, Zlendo Realty supports millimeter-accurate 2D to 3D conversions, perfect for retail shelving, window displays, and point-of-sale setups." },
        { q: "Is the platform suitable for multi-floor office designs?", a: "Absolutely. Our platform is well-suited for scalable commercial projects, including multi-floor offices with varied seating arrangements." },
        { q: "How does this help our clients understand our proposal?", a: "By generating 3D walkthroughs instantly, your commercial clients can experience the spatial dynamics—such as desk spacing and circulation paths—before any materials are ordered." },
        { q: "Do you have commercial furniture in the 3D library?", a: "Yes, our native library includes an extensive range of commercial-grade fixtures, office desks, lighting, and retail shelving." }
    ];

    const commercialSchema = {
        '@context': 'https://schema.org/',
        '@type': 'WebPage',
        'name': 'Zlendo Realty for Commercial Spaces',
        'description': 'From startup offices to flagship retail stores, ensure every square foot is optimized for productivity and brand identity.',
        'mainEntity': {
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.q,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.a
                }
            }))
        }
    };

    return (
        <div className="bg-white selection:bg-zlendo-orange/10">
            <JsonLd schema={commercialSchema} />
            <div className="min-h-screen relative pt-12">
                {/* Global Background Accents */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
                    style={{ backgroundImage: `radial-gradient(var(--${accentColorClass}) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                />

                {/* Hero Section */}
                <section className="section-padding py-12 relative overflow-hidden">
                    <div className="container-custom relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${bgAccentClass} border border-${accentColorClass}/10 mb-8`}
                        >
                            <TrendingUp className={`w-4 h-4 text-${accentColorClass}`} />
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>
                                {cms?.heroBadgeText ?? 'Business Solution'}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            {cms?.heroTitle ?? 'Design High-Performance'} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Commercial Environments.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'From startup offices to flagship retail stores, ensure every square foot is optimized for productivity and brand identity.'}
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Section */}
                <CaseStudySection
                    data={caseStudyData}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Helpful Links Section (Redesigned) */}
                <section className="py-10 lg:py-14 bg-white relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-zlendo-orange/[0.02] to-transparent pointer-events-none" />
                    <div className="container-custom max-w-6xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-14">
                            <span className="inline-block px-4 py-1.5 bg-zlendo-orange/10 text-zlendo-orange text-xs font-black uppercase tracking-[0.2em] rounded-full mb-5">
                                End-to-End Capabilities
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight tracking-tight">
                                Expand Your <span className="text-zlendo-orange italic">Commercial Expertise</span>
                            </h3>
                            <p className="text-lg text-zlendo-grey-medium font-medium mt-4 max-w-2xl mx-auto">
                                Seamlessly transition from spatial planning to photorealistic client presentations using our integrated toolset.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { title: 'AI Floor Planner', desc: 'Instantly generate 2D to 3D commercial floor plans with exact dimensions.', link: '/in/products/floor-planner', bg: 'from-orange-50 to-white', icon: Layout },
                                { title: 'Commercial Renders', desc: 'Create 4K photorealistic interior visuals that sell retail concepts fast.', link: '/in/products/realistic-renders', bg: 'from-amber-50 to-white', icon: Sparkles },
                                { title: 'Exterior Design', desc: 'Showcase shopfronts and building facades with dynamic daylight simulation.', link: '/in/products/interiors-exteriors', bg: 'from-yellow-50 to-white', icon: Building2 }
                            ].map((item, i) => (
                                <Link key={i} href={item.link} className="group relative block overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                    <div className="relative p-10 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-black/5 mb-8 group-hover:scale-110 transition-transform duration-500">
                                                <item.icon className="w-6 h-6 text-zlendo-orange" />
                                            </div>
                                            <h4 className="text-2xl font-black text-zlendo-grey-dark mb-3">{item.title}</h4>
                                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-8">{item.desc}</p>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-sm font-bold text-zlendo-orange group/btn">
                                            Discover Module
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-10 md:py-14 bg-zlendo-grey-light/30">
                    <div className="container-custom max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-black text-center text-zlendo-grey-dark mb-10 leading-tight">Common Questions</h2>
                        <FaqAccordion faqs={faqs} />
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            {cms?.ctaTitle ?? 'Ready to '}
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.ctaTitleHighlight ?? 'Scale Your Business?'}
                            </span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {cms?.ctaPrimaryLabel ?? 'Start Business Trial'}
                            </a>
                            <Link
                                href={paths.enterpriseDemo}
                                className="btn-orange py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                {cms?.ctaSecondaryLabel ?? 'Schedule a Demo'}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

