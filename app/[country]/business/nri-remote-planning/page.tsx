'use client';

import { motion } from 'framer-motion';
import { Globe, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';

export default function NRIRemotePlanningPage() {
    const { getPath } = useCountry();
    const accentColorClass = 'zlendo-orange';
    const bgAccentClass = 'bg-zlendo-orange/5';

    const caseStudyArjun = {
        title: 'NRI & Remote Planning',
        subtitle: 'Design-Build Firm Story',
        icon: Globe,
        challenge: {
            title: 'Distance Gaps & Communication Barriers',
            description: 'Arjun, who ran a design-build firm in Chennai, struggled with NRI and remote clients who couldn\'t visit sites. Relying on calls and 2D drawings led to slow feedback cycles and delayed approvals. Clients felt disconnected and unsure about room sizes and furniture placement, leading to late-stage changes and costly rework that strained trust.'
        },
        solution: {
            title: 'Digital Transparency & Global Collaboration',
            description: 'Arjun used Zlendo Realty to share detailed 2D layouts and realistic 3D views online. This allowed clients and their families in different locations to review designs together and understand spatial flow instantly. Improved transparency led to quicker feedback and significantly fewer execution-stage changes, keeping projects on track and clients informed.'
        },
        stats: [
            { label: 'Approval Speed', value: '3x Faster' },
            { label: 'Rework Reduction', value: '90%' }
        ],
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200'
    };

    return (
        <div className="bg-white selection:bg-zlendo-orange/10">
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
                            <span className={`text-xs font-black text-${accentColorClass} uppercase tracking-[0.2em]`}>Business Solution</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            Bridge the Distance with <br /><span className={`text-${accentColorClass} italic`}>Transparent Design.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Manage international and remote projects with absolute clarity, ensuring your NRI clients feel present at every step of the journey.
                        </motion.p>
                    </div>
                </section>

                {/* Case Study Arjun */}
                <CaseStudySection
                    data={caseStudyArjun}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className={`text-${accentColorClass} italic`}>Go Global?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                Start Business Trial
                            </a>
                            <Link
                                href={getPath('/business')}
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
