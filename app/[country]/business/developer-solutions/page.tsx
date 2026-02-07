'use client';

import { motion } from 'framer-motion';
import { Cpu, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
import CaseStudySection from '@/components/common/CaseStudySection';

export default function DeveloperSolutionsPage() {
    const { paths } = useCountry();
    const accentColorClass = 'zlendo-orange';
    const bgAccentClass = 'bg-zlendo-orange/5';

    const caseStudyBusiness = {
        title: 'Developer Solutions',
        subtitle: 'Realistic Renders for Design Presentation',
        icon: Cpu,
        challenge: {
            title: 'The Presentation Gap',
            description: 'A marketing and design business struggled to present design ideas to clients in a clear and convincing way. Traditional 2D drawings and basic 3D diagrams took days to prepare yet failed to show colors, lighting, and textures. This lack of clarity led to repeated explanations, misunderstood intent, and long revision cycles that slowed down project delivery.'
        },
        solution: {
            title: 'High-Impact Visual Storytelling',
            description: 'By adopting Zlendo Realty\'s Realistic Renders, the team created lifelike interior and exterior visuals in record time. These renders clearly showcased finishes and spatial mood from the first presentation. Clients understood the final look instantly, which minimized back-and-forth discussions, limited unnecessary revisions, and significantly accelerated project approvals.'
        },
        stats: [
            { label: 'Approval Speed', value: '3x Faster' },
            { label: 'Revision Reduction', value: '75%' }
        ],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
    };

    const caseStudyDeveloper = {
        title: 'Developer Solutions',
        subtitle: 'Speeding Up Sales Through Buyer Understanding',
        icon: Cpu,
        challenge: {
            title: 'The Visualization Barrier',
            description: 'A real estate developer marketing under-construction apartments found that technical floor plans and brochures were difficult for buyers to understand. Buyers struggled to visualize room sizes, furniture fit, and practicality. This uncertainty led to long verbal explanations from sales teams, hesitant buyers, and slowed booking decisions.'
        },
        solution: {
            title: 'Immersive Sales Walkthroughs',
            description: 'The developer used Zlendo Realty to create clear 2D layouts and realistic 3D views. Sales teams used visual walkthroughs to show exactly how furniture, storage, and movement would work in real life. This visual clarity reduced confusion, focused sales conversations, and allowed buyers to make confident booking decisions much faster.'
        },
        stats: [
            { label: 'Booking Timeline', value: '2x Faster' },
            { label: 'Buyer Confidence', value: '100%' }
        ],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200'
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
                            Present with Clarity. <br /><span className={`text-${accentColorClass} italic`}>Sell with Confidence.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Transform complex design concepts into hyper-realistic visual experiences that eliminate confusion and accelerate project lifecycles.
                        </motion.p>
                    </div>
                </section>

                {/* Case Study 1 */}
                <CaseStudySection
                    data={caseStudyBusiness}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                />

                {/* Divider */}
                <div className="container-custom">
                    <div className="h-px bg-black/5 mx-auto w-full max-w-4xl" />
                </div>

                {/* Case Study 2 */}
                <CaseStudySection
                    data={caseStudyDeveloper}
                    accentColorClass={accentColorClass}
                    bgAccentClass={bgAccentClass}
                    reverse={true}
                />

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className={`absolute inset-0 bg-${accentColorClass}/5 blur-[100px]`} />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className={`text-${accentColorClass} italic`}>Standardize Excellence?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-orange py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                Start Business Trial
                            </a>
                            <Link
                                href={paths.enterpriseDemo}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
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
