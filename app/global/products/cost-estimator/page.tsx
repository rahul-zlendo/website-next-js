'use client';

import React, { useState } from 'react';
import { useCountry } from "@/lib/context/CountryContext";
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, BarChart, FileText, ArrowRight, ChevronDown } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';

export default function CostEstimatorPage() {
    const { country } = useCountry();
    const isIndiaSite = typeof country !== "undefined" ? country === "in" : false;
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white text-[#222222] font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Zlendo Realty Smart Cost Estimator",
                    "applicationCategory": "BusinessApplication",
                    "applicationSubCategory": "Construction Cost Estimation Software",
                    "operatingSystem": "Web",
                    "url": "https://zlendorealty.com/products/cost-estimator",
                    "description": "AI-powered construction cost estimation software that provides engineering-grade building cost analysis using soil conditions, seismic zones, local material rates, labor costs, and real-time market data for accurate home construction budgeting.",
                    "image": "https://zlendorealty.com/favicon.ico",
                    "softwareVersion": "1.0",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Free construction cost estimation tool for individual homeowners" },
                    "aggregateRating": ZLENDO_AGGREGATE_RATING,
                    "creator": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "publisher": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "featureList": ["AI-powered construction cost estimation", "Engineering-grade BOQ generation", "Real-time material price analysis", "Soil type cost adjustment", "Seismic zone calculation", "Foundation cost estimation", "Labor and material breakdown", "Component-wise budget analysis", "City-based construction pricing", "Material comparison and impact analysis", "Construction quality benchmarking", "Transparent budget recommendations", "Instant home building cost reports", "Budget optimization insights"]
                })
            }} />
            <main>
                <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAFC]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,191,154,0.05)_0%,transparent_60%)] pointer-events-none" />

                    <div className="container-custom px-4 relative z-20 text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 bg-white shadow-sm mb-8"
                        >
                            <Calculator className="w-4 h-4 text-zlendo-teal" />
                            <span className="text-xs font-bold tracking-widest text-zlendo-teal uppercase">Live BOQ Generation</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[44px] md:text-[60px] lg:text-[76px] tracking-tight font-black leading-[1.05] mb-6 text-[#111]"
                        >
                            Zero Surprises.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-500">
                                Perfect Budgeting.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-[#666] font-medium leading-relaxed mb-10 max-w-3xl mx-auto"
                        >
                            Instantly link your 3D design models to real-world material costs and labor estimates. Watch your Bill of Quantities generate live as you build.
                        </motion.p>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                            <a
                                href={SIGNUP_URL}
                                className="inline-flex items-center justify-center px-12 py-5 bg-[#111111] text-white rounded-xl font-bold text-xl hover:bg-[#333] transition-all gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                            >
                                Estimate Costs For Free
                            </a>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 border-t border-black/5 bg-white">
                    <div className="container-custom px-4 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: BarChart, title: "Live Updates", desc: "Change a wall material in 3D and watch the project cost update instantly." },
                            { icon: FileText, title: "Exportable BoQ", desc: "Generate professional Excel and PDF Bill of Quantities ready for contractor bidding." },
                            { icon: Calculator, title: "Regional Pricing", desc: "Adjust rates automatically based on local labor charts and material scarcity." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white border border-black/[0.05] p-10 rounded-[2rem] hover:border-zlendo-teal/30 hover:shadow-[0_20px_40px_rgba(0,191,154,0.05)] transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-zlendo-teal/10 flex items-center justify-center mb-6">
                                    <f.icon className="w-8 h-8 text-zlendo-teal" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-[#111]">{f.title}</h3>
                                <p className="text-[#666] font-medium leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* LOCALIZED PROCUREMENT DATA */}
                <section className="py-12 bg-[#FAFAFC] border-t border-black/5">
                    <div className="container-custom px-4 text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100/50 text-orange-600 font-bold text-xs uppercase mb-6 border border-orange-200">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Real-Time Procurement Insights
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6 tracking-tight">Track Local Material Rates{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                        <p className="text-xl text-[#666] font-medium leading-relaxed mb-16">
                            A major hurdle in reliable construction estimation is volatile raw material pricing. Zlendo Realty solves this by monitoring hyper-local market indices. Whether cement rates surge or steel prices drop, our estimator automatically calibrates its baseline to give you the most accurate real-time procurement insights available, drastically reducing the chances of unforeseen budget overruns.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-black text-2xl text-[#111] mb-3">Live Cost Indices</h3>
                                <p className="text-[#666] font-medium leading-relaxed">We stream daily aggregate pricing for Cement, TMT Steel Rebars, Sand, and Bricks directly from regional wholesale pipelines to ensure accurate baselines.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-black text-2xl text-[#111] mb-3">Labor Variability</h3>
                                <p className="text-[#666] font-medium leading-relaxed">Labor shortage impacts costs. We calculate daily wage fluctuations mapped strictly to standard government minimum wages and local contractor markup averages.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-black text-2xl text-[#111] mb-3">Brand Grade Maps</h3>
                                <p className="text-[#666] font-medium leading-relaxed">Select between Tier A, B, and C brands for piping and electrical. See exactly how switching from local pipes to premium CPVC impacts the final plumbing BOQ.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-12 border-t border-black/5 bg-[#FAFAFC]">
                    <div className="container-custom px-6 max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 text-[#111]">Frequently Asked Questions{isIndiaSite && <span className="sr-only"> (India)</span>}</h2>
                        <div className="space-y-4">
                            {[
                                { q: "How exact is the cost estimation?", a: "Our AI engine factors in live local material indices, localized labor wages, and even specific soil types for calculating isolated versus pile foundations. Thus providing engineering-grade granular estimates rather than generic sq.ft estimates." },
                                { q: "Can I export my BoQ to my contractor?", a: "Yes, you can generate detailed Bill of Quantities (BoQ) PDFs or Excel files perfectly formatted for contractor procurement or bank loan approvals." }
                            ].map((faq, i) => (
                                <div key={i} className="border border-black/[0.05] rounded-2xl overflow-hidden hover:bg-white transition-colors bg-white/50">
                                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left">
                                        <span className="text-xl font-bold text-[#111]">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#999] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                                                <p className="px-8 pb-8 text-[#666] font-medium">{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
