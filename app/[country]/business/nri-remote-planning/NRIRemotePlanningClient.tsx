'use client';

import { motion } from 'framer-motion';
import { Globe, TrendingUp, Layout, Home, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';
import { urlFor } from '@/lib/sanity/image';
import FaqAccordion from '@/app/[country]/components/FaqAccordion';
import JsonLd from '@/components/common/JsonLd';

interface NRIRemotePlanningClientProps {
    cms: any;
}

export default function NRIRemotePlanningClient({ cms }: NRIRemotePlanningClientProps) {
    const { paths, getPath } = useCountry();
    const accentColorClass = 'zlendo-orange';
    const bgAccentClass = 'bg-zlendo-orange/5';

    // Set document title and meta tags for SEO from CMS or defaults
    useEffect(() => {
        document.title = cms?.seoTitle ?? 'NRI & Remote Planning';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', cms?.seoDescription ?? 'Manage international and remote projects with absolute clarity, ensuring your NRI clients feel present at every step of the journey.');
        }
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', cms?.seoKeywords ?? 'nri remote planning, virtual design consultation, remote project management, global design collaboration, zlendo realty');
        }
    }, [cms]);

    const iconMap: any = { Globe, TrendingUp, Layout, Home, Sparkles };
    const CaseStudyIcon = iconMap[cms?.caseStudyIcon] || Globe;

    const caseStudyData = {
        title: cms?.caseStudyTitle ?? 'NRI & Remote Planning',
        subtitle: cms?.caseStudySubtitle ?? 'Design-Build Firm Story',
        icon: CaseStudyIcon,
        challenge: {
            title: cms?.challengeTitle ?? 'Distance Gaps & Communication Barriers',
            description: cms?.challengeDescription ?? 'Arjun, who ran a design-build firm in Chennai, struggled with NRI and remote clients who couldn\'t visit sites. Relying on calls and 2D drawings led to slow feedback cycles and delayed approvals. Clients felt disconnected and unsure about room sizes and furniture placement, leading to late-stage changes and costly rework that strained trust.'
        },
        solution: {
            title: cms?.solutionTitle ?? 'Digital Transparency & Global Collaboration',
            description: cms?.solutionDescription ?? 'Arjun used Zlendo Realty to share detailed 2D layouts and realistic 3D views online. This allowed clients and their families in different locations to review designs together and understand spatial flow instantly. Improved transparency led to quicker feedback and significantly fewer execution-stage changes, keeping projects on track and clients informed.'
        },
        stats: cms?.stats?.length ? cms.stats : [
            { label: 'Approval Speed', value: '3x Faster' },
            { label: 'Rework Reduction', value: '90%' }
        ],
        image: cms?.caseStudyImage ? urlFor(cms.caseStudyImage).url() : '/assets/use-cases/nri/remote-planning.webp',
        imageAlt: cms?.caseStudyImage?.alt || 'Zlendo Realty Virtual Collaboration for NRI Remote Planning'
    };

    const faqs = [
        { q: "Can my overseas clients view the 3D designs without an app?", a: "Yes, Zlendo Realty generates universal web links. Clients can walk through their property via any standard browser on mobile or desktop." },
        { q: "How does real-time collaboration work remotely?", a: "You can update materials, moving furniture, and adjust lighting. Refreshing the shared link immediately shows these updates to your clients across the globe." },
        { q: "Is the interface understandable for non-technical users?", a: "Absolutely. The viewer experience is as intuitive as navigating a video game or virtual tour, removing any learning curves for your NRI clients." },
        { q: "Does this replace the need for physical sample materials?", a: "While physical samples are tactile, our 4K photorealistic renders allow clients to see exactly how materials interact with natural light, heavily reducing the need to mail physical material boards." }
    ];

    const nriSchema = {
        '@context': 'https://schema.org/',
        '@type': 'WebPage',
        'name': 'Zlendo Realty for NRI & Remote Planning',
        'description': 'Manage international and remote projects with absolute clarity, ensuring your NRI clients feel present at every step of the journey.',
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
            <JsonLd schema={nriSchema} />
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
                            {cms?.heroTitle ?? 'Bridge the Distance with'} <br />
                            <span className={`text-${accentColorClass} italic`}>
                                {cms?.heroTitleHighlight ?? 'Transparent Design.'}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            {cms?.heroParagraph ?? 'Manage international and remote projects with absolute clarity, ensuring your NRI clients feel present at every step of the journey.'}
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Section */}
                <CaseStudySection
                    data={caseStudyData}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Helpful Links Section */}
                <section className="py-10 bg-white relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-zlendo-orange/[0.02] to-transparent pointer-events-none" />
                    <div className="container-custom max-w-6xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-14">
                            <span className="inline-block px-4 py-1.5 bg-zlendo-orange/10 text-zlendo-orange text-xs font-black uppercase tracking-[0.2em] rounded-full mb-5">
                                End-to-End Capabilities
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight tracking-tight">
                                Complete <span className="text-zlendo-orange italic">Remote Management</span>
                            </h3>
                            <p className="text-lg text-zlendo-grey-medium font-medium mt-4 max-w-2xl mx-auto">
                                Combine our specialized modules to capture every detail for clients located anywhere in the world.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { title: 'AI Floor Planner', desc: 'Convert blueprints to interactive 3D homes instantly.', link: '/in/products/floor-planner', bg: 'from-orange-50 to-white', icon: Layout },
                                { title: 'Realistic Renders', desc: 'Produce high-quality visual updates to keep clients informed.', link: '/in/products/realistic-renders', bg: 'from-amber-50 to-white', icon: Sparkles },
                                { title: 'Exterior Design', desc: 'Present majestic building facades and landscapes.', link: '/in/products/interiors-exteriors', bg: 'from-yellow-50 to-white', icon: Home }
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
                                {cms?.ctaTitleHighlight ?? 'Go Global?'}
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
                                href={getPath('/business')}
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

