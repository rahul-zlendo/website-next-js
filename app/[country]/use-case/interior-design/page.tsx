'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';

export default function InteriorDesignPage() {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-teal';
    const bgAccentClass = 'bg-zlendo-teal/5';

    const caseStudy1 = {
        title: 'Interior Design',
        subtitle: 'First-Time Homebuyer',
        icon: Sparkles,
        challenge: {
            title: 'The Uncertainty of First-Time Ownership',
            description: 'Ramesh, a 29-year-old professional, struggled with flat, technical builder plans. He couldn\'t visualize if a sofa would block movement or if wardrobes would make bedrooms feel cramped. This lack of spatial clarity led to hesitation and the fear of making expensive, permanent mistakes.'
        },
        solution: {
            title: '3D Visualization & Space Planning',
            description: 'Using Zlendo Realty, Ramesh transformed his 2D plan into a realistic 3D apartment. He explored layout options, checked walking clearance, and rearranged furniture instantly. This removed the guesswork, allowing him to finalize his plan with complete peace of mind before execution.'
        },
        stats: [
            { label: 'Spatial Errors Avoided', value: '100%' },
            { label: 'Planning Time Reduced', value: '60%' }
        ],
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
    };

    const caseStudy2 = {
        title: 'Interior Design',
        subtitle: 'Compact WFH Living',
        icon: Sparkles,
        challenge: {
            title: 'The Work-From-Home Struggle',
            description: 'A young professional couple in a compact 2BHK found their home cluttered and stressful after transitioning to full-time remote work. Desks in the living room caused noise issues, while work equipment in the bedroom affected rest. They feared losing comfort while trying to improve productivity in their limited space.'
        },
        solution: {
            title: 'Digital Layout Optimization',
            description: 'With Zlendo Realty, the couple digitally tested multiple layout possibilities. They analyzed desk placements for movement and lighting, and reviewed storage options through realistic walkthroughs. This created a dedicated work zone without sacrificing the openness or comfort of their daily living space.'
        },
        stats: [
            { label: 'Productivity Lift', value: '40%' },
            { label: 'Space Utilization', value: '100%' }
        ],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    };

    return (
        <div className="bg-white selection:bg-zlendo-teal/10">
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
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>Individual Solution</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            Curate Your Perfect <br /><span className={`text-${accentColorClass} italic`}>Interior Lifestyle.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            From first-time homebuyers to remote professionals, see how we transform spatial uncertainty into design confidence.
                        </motion.p>
                    </div>
                </section>

                {/* Case Study 1 */}
                <CaseStudySection
                    data={caseStudy1}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Divider */}
                <div className="container-custom">
                    <div className="h-px bg-black/5 mx-auto w-full max-w-4xl" />
                </div>

                {/* Case Study 2 */}
                <CaseStudySection
                    data={caseStudy2}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                    reverse={true}
                />

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className={`text-${accentColorClass} italic`}>Experience the Future?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                Get Started for Free
                            </a>
                            <Link
                                href={paths.enterpriseDemo}
                                className="btn-orange py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
