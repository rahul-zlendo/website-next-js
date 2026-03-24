'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import {
    CheckCircle2, ArrowRight, TrendingUp, AlertTriangle,
    Lightbulb, Users, Building2, XCircle
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
});

export default function BuilderAndPromoterPage() {
    const { getPath } = useCountry();

    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/10 selection:text-zlendo-teal">

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-zlendo-teal/5 via-white to-zlendo-orange/5">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-zlendo-teal/8 blur-[140px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zlendo-orange/6 blur-[120px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

                <div className="container-custom px-6 lg:px-12 pt-32 pb-20 relative z-10 text-center">
                    {/* Badge */}
                    <motion.div
                        {...fadeUp(0)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg shadow-black/5 border border-black/5 mb-8"
                    >
                        <Building2 className="w-4 h-4 text-zlendo-teal" />
                        <span className="text-xs font-black uppercase tracking-[0.18em] text-zlendo-teal">Builder & Promoter</span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        {...fadeUp(0.05)}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-zlendo-grey-dark leading-[1.05] tracking-tight max-w-4xl mx-auto"
                    >
                        Close Deals Faster with{' '}
                        <span className="text-zlendo-teal italic">Visual Confidence.</span>
                    </motion.h1>

                    {/* H2 / Subtitle */}
                    <motion.p
                        {...fadeUp(0.1)}
                        className="mt-6 text-xl md:text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed opacity-80"
                    >
                        Empower your buyers to visualize their future home instantly, reducing sales friction and accelerating your commission cycle.
                    </motion.p>

                    {/* CTAs
                    <motion.div
                        {...fadeUp(0.15)}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href={getPath('/business')}
                            className="inline-flex items-center gap-3 bg-zlendo-teal text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-zlendo-teal/25 group"
                        >
                            Start Business Trial
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href={getPath('/contact')}
                            className="inline-flex items-center gap-3 bg-white border-2 border-black/10 text-zlendo-grey-dark px-10 py-4 rounded-2xl font-black text-lg hover:border-zlendo-teal hover:text-zlendo-teal transition-all"
                        >
                            Schedule a Demo
                        </Link>
                    </motion.div> */}
                </div>
            </section>

            {/* ── SUCCESS STORY: ADDRESSING THE SALES GAP ────────────────── */}
            <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
                <div className="container-custom max-w-5xl mx-auto">

                    <motion.div {...fadeUp()} className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 bg-zlendo-teal/10 text-zlendo-teal text-xs font-black uppercase tracking-widest rounded-full mb-5">
                            Success Story
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight">
                            Addressing the Sales Gap
                        </h2>
                    </motion.div>

                    {/* ── THE CHALLENGE ── */}
                    <div className="grid lg:grid-cols-2 gap-10 mb-16">
                        <motion.div
                            {...fadeUp(0.1)}
                            className="bg-red-50 border border-red-100 rounded-3xl p-8 lg:p-10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark">The Challenge</h3>
                            </div>

                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                <span className="font-black text-zlendo-grey-dark">Sneha</span>, a mid-sized builder in Hyderabad,
                                faced repeated delays in closing deals. Buyers struggled to understand standard floor plans and couldn&apos;t
                                visualize how spaces would look once completed.
                            </p>
                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-6">
                                For renovation projects, clients were hesitant because they couldn&apos;t clearly see the final outcome.
                                This led to:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Endless design clarifications',
                                    'Delayed approvals',
                                    'Price negotiations due to uncertainty',
                                    'Lost sales opportunities',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                                        <span className="text-[15px] font-semibold text-zlendo-grey-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* ── THE SOLUTION ── */}
                        <motion.div
                            {...fadeUp(0.15)}
                            className="bg-zlendo-teal/5 border border-zlendo-teal/15 rounded-3xl p-8 lg:p-10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-zlendo-teal/15 rounded-xl flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-zlendo-teal" />
                                </div>
                                <h3 className="text-xl font-black text-zlendo-grey-dark">The Solution</h3>
                            </div>

                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-4">
                                Sneha started using <span className="font-black text-zlendo-teal">Zlendo Realty AI Floor Plan & Interior Design Software</span> to present:
                            </p>
                            <ul className="space-y-2 mb-6">
                                {[
                                    'Detailed 2D architectural layouts',
                                    'Realistic 3D interior walkthrough views',
                                    'Renovation transformation concepts',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal flex-shrink-0" />
                                        <span className="text-[15px] font-semibold text-zlendo-grey-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-4">
                                Now, buyers instantly understand:
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Room sizes', 'Layout flow', 'Furniture fit', 'Overall aesthetic'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal flex-shrink-0" />
                                        <span className="text-[15px] font-semibold text-zlendo-grey-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-zlendo-grey-medium font-medium leading-relaxed mb-4">
                                Even remote clients review designs confidently, resulting in:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    'Faster approvals',
                                    'Reduced revisions',
                                    'Higher client trust',
                                    'Improved sales conversion',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-zlendo-teal flex-shrink-0" />
                                        <span className="text-[15px] font-semibold text-zlendo-grey-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── WHY BUILDERS CHOOSE ZLENDO ──────────────────────────────── */}
            <section className="py-16 lg:py-20 px-6 lg:px-12 bg-zlendo-mint/10">
                <div className="container-custom max-w-5xl mx-auto">
                    <motion.div {...fadeUp()} className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-zlendo-teal/10 text-zlendo-teal text-xs font-black uppercase tracking-widest rounded-full mb-5">
                            Why Choose Zlendo Realty
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight">
                            Why Builders & Developers{' '}
                            <span className="text-zlendo-teal">Choose Zlendo Realty</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { text: 'Convert inquiries into confirmed bookings faster', icon: TrendingUp },
                            { text: 'Showcase under-construction projects with clarity', icon: Building2 },
                            { text: 'Sell renovation concepts before starting work', icon: Lightbulb },
                            { text: 'Reduce site visit dependency', icon: ArrowRight },
                            { text: 'Improve client confidence and satisfaction', icon: Users },
                        ].map(({ text, icon: Icon }, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i * 0.08)}
                                className="bg-white rounded-2xl border border-black/5 p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 bg-zlendo-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5 text-zlendo-teal" />
                                </div>
                                <p className="text-[15px] font-bold text-zlendo-grey-dark leading-snug mt-1">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── READY CTA ────────────────────────────────────────────────── */}
            <section className="py-16 lg:py-24 px-6 lg:px-12 bg-zlendo-grey-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zlendo-teal/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zlendo-orange/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

                <div className="container-custom max-w-3xl mx-auto text-center relative z-10">
                    <motion.div {...fadeUp()}>
                        <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-xs font-black uppercase tracking-widest rounded-full mb-6">
                            Ready to Boost Your Project Sales?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                            Turn your plans into powerful{' '}
                            <span className="text-zlendo-teal">visual selling tools.</span>
                        </h2>
                        <p className="text-xl text-white/60 font-medium mb-10">
                            Join hundreds of builders across India already using Zlendo Realty to close faster.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href={getPath('/business')}
                                className="inline-flex items-center gap-3 bg-zlendo-teal text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-zlendo-teal/30 group"
                            >
                                Start Business Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={getPath('/contact')}
                                className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white/15 transition-all"
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
