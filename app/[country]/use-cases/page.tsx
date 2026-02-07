'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, TrendingUp, Clock, ShieldCheck, MapPin, Building2, Layout } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';

const ModernIndianHomeImg = '/assets/use-case/modern-indian-home-interior.jpg';
const ModernArchStudioImg = '/assets/use-case/modern-architecture-studio.jpg';

/**
 * Use Cases Page - Client Component
 * 
 * Note: SEO metadata is handled in the layout.tsx file since this is a client component.
 * Migrated from src/pages/UseCasesPage.tsx to Next.js App Router.
 */

export default function UseCasesPage() {
    const { getPath } = useCountry();

    return (
        <div className="bg-white selection:bg-zlendo-teal/10">
            <div className="min-h-screen relative pt-12">
                {/* Global Background Accents */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(#00A884 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Hero Section */}
                <section className="section-padding py-12 relative overflow-hidden">
                    <div className="container-custom relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/5 border border-zlendo-teal/10 mb-8"
                        >
                            <TrendingUp className="w-4 h-4 text-zlendo-teal" />
                            <span className="text-xs font-black text-zlendo-teal uppercase tracking-[0.2em]">Industry Solutions</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl font-black font-nunito text-zlendo-grey-dark leading-none tracking-tighter mb-8"
                        >
                            Localized Precision. <br />
                            <span className="text-zlendo-teal italic">Global Standards.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-zlendo-grey-medium font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Solving the specific challenges of the Indian construction landscape—from trust-gaps in local labor to slow design-to-build approvals.
                        </motion.p>
                    </div>
                </section>

                {/* Use Case 1: The Indian Individual Builder */}
                <section className="section-padding py-12 relative overflow-hidden">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-zlendo-teal/10 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-[60px] overflow-hidden border border-black/5 shadow-2xl shadow-black/[0.05]">
                                    <img
                                        src={ModernIndianHomeImg}
                                        alt="Modern Indian Home Interior"
                                        className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute bottom-10 left-10 py-3 px-6 bg-white/90 backdrop-blur-md rounded-2xl flex items-center gap-3 border border-black/5 shadow-xl">
                                        <MapPin className="w-4 h-4 text-zlendo-teal" />
                                        <span className="text-sm font-black text-zlendo-grey-dark uppercase tracking-widest text-wrap">Residential Builder: Ravi, Bengaluru</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-10"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center text-zlendo-teal">
                                            <Quote className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-black text-zlendo-teal uppercase tracking-[0.3em]">Individual Home Builder</span>
                                    </div>
                                    <h2 className="text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight tracking-tight">
                                        Eliminating the <span className="text-zlendo-teal italic">"Trust Deficit".</span>
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="p-8 rounded-[40px] bg-zlendo-mint/10 border border-zlendo-teal/10">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-zlendo-grey-medium mb-4">The Challenge</h4>
                                        <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed">
                                            Ravi, a tech professional in Bengaluru, was building his dream home on a 30x40 site. He struggled with local contractors providing vague "per sqft" quotes that didn't specify material grades. He feared hidden costs and had difficulty explaining to his family how the "Modern Ethnic" pooja room would look.
                                        </p>
                                    </div>

                                    <div className="p-8 rounded-[40px] bg-white border border-black/5 shadow-xl shadow-black/[0.02]">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-zlendo-teal mb-4">The Solution</h4>
                                        <p className="text-lg text-zlendo-grey-dark font-medium leading-relaxed">
                                            Zlendo Realty processed Ravi's basic architectural sketch into a comprehensive **Itemized BOQ** based on Bengaluru's current Schedule of Rates (SOR). We provided an **8K Immersive Walkthrough** that showcased the exact light-play in the living area and pooja room, ensuring family consensus before the first brick was laid.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 rounded-3xl bg-zlendo-teal text-white flex flex-col justify-center">
                                        <span className="text-3xl font-black font-nunito">₹12.5L</span>
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">Saved in Procurement</span>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-zlendo-grey-dark text-white flex flex-col justify-center">
                                        <span className="text-3xl font-black font-nunito">100%</span>
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">Quote Transparency</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Use Case 2: The Modern Architect Studio */}
                <section className="section-padding py-12 bg-zlendo-mint/5 relative overflow-hidden rounded-[100px_100px_0_0]">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1 space-y-10"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-zlendo-orange/10 flex items-center justify-center text-zlendo-orange">
                                            <Layout className="w-6 h-6" />
                                        </div>
                                        <span className="text-sm font-black text-zlendo-orange uppercase tracking-[0.3em]">Boutique Architectural Studio</span>
                                    </div>
                                    <h2 className="text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight tracking-tight">
                                        From Drafting to <span className="text-zlendo-orange italic">Delight.</span>
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="p-8 rounded-[40px] bg-zlendo-orange/5 border border-zlendo-orange/10">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-zlendo-grey-medium mb-4">The Challenge</h4>
                                        <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed">
                                            Ananya, principal architect at a Mumbai-based studio, spent 60% of her time managing client revisions and manual drafting. Clients often "backed out" when the contractor's final bid came in 30% higher than her rough initial estimates, leading to wasted design hours.
                                        </p>
                                    </div>

                                    <div className="p-8 rounded-[40px] bg-white border border-black/5 shadow-xl shadow-black/[0.02]">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-zlendo-orange mb-4">The Solution</h4>
                                        <p className="text-lg text-zlendo-grey-dark font-medium leading-relaxed">
                                            Ananya integrated Zlendo Realty into her design pipeline. She now uploads floor plans to get **Automated BOQs and 8K Walkthroughs** in 48 hours. She uses Zlendo Realty's "Resource Selector" to show clients real-time cost impacts of material changes (e.g., Italian Marble vs Vitrified Tiles), closing the "Estimate Gap" instantly.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div className="flex flex-col gap-1">
                                        <Clock className="w-6 h-6 text-zlendo-orange mb-2" />
                                        <span className="text-2xl font-black font-nunito">5x</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zlendo-grey-medium">Faster Approvals</span>
                                    </div>
                                    <div className="flex flex-col gap-1 border-x border-black/5 px-6">
                                        <TrendingUp className="w-6 h-6 text-zlendo-orange mb-2" />
                                        <span className="text-2xl font-black font-nunito">300%</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zlendo-grey-medium">Studio Capacity</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <ShieldCheck className="w-6 h-6 text-zlendo-orange mb-2" />
                                        <span className="text-2xl font-black font-nunito">0%</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zlendo-grey-medium">Budget Surprises</span>
                                    </div>
                                </div>

                                <Link
                                    href={getPath('/business')}
                                    className="btn-orange py-5 px-10 text-lg w-full sm:w-auto flex items-center justify-center gap-3 text-center"
                                >
                                    Scale My Studio <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2 relative group"
                            >
                                <div className="absolute -inset-4 bg-zlendo-orange/10 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-[60px] overflow-hidden border border-black/5 shadow-2xl shadow-black/[0.05]">
                                    <img
                                        src={ModernArchStudioImg}
                                        alt="Modern Architecture Studio"
                                        className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-10 right-10 py-3 px-6 bg-zlendo-grey-dark/90 backdrop-blur-md rounded-2xl flex items-center gap-3 border border-white/10 shadow-xl">
                                        <Building2 className="w-4 h-4 text-zlendo-orange" />
                                        <span className="text-sm font-black text-white uppercase tracking-widest">Architect Workflow: Ananya, Mumbai</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="section-padding py-12 bg-zlendo-grey-dark relative overflow-hidden rounded-[80px_80px_0_0]">
                    <div className="absolute inset-0 bg-zlendo-teal/5 blur-[100px]" />
                    <div className="container-custom relative z-10 text-center space-y-12">
                        <h2 className="text-5xl sm:text-7xl font-black font-nunito text-white leading-tight tracking-tight max-w-4xl mx-auto">
                            Ready to <span className="text-zlendo-teal italic">Standardize Excellence?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href={SIGNUP_URL}
                                className="btn-primary py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                I am Building a Home
                            </a>
                            <Link
                                href={getPath('/business')}
                                className="btn-orange py-5 px-12 text-lg rounded-3xl text-center"
                            >
                                I am an Architect / Developer
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
