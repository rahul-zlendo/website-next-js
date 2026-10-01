'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle, ArrowRight, Zap, Target } from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import JsonLd from '@/components/common/JsonLd';
import { ZLENDO_AGGREGATE_RATING } from '@/lib/utils/structuredData';
import FAQ from '@/components/global/sections/FAQ';

export default function VastuOptimizerPage() {
    const faqData = {
        title: "Frequently Asked Questions",
        faqs: [
            {
                question: "What is the Vastu Optimizer?",
                answer: "The Vastu Optimizer provides layout recommendations based on traditional Vastu house plan design principles, helping align home planning with spatial harmony using modern architectural analysis."
            },
            {
                question: "Is it mandatory to use?",
                answer: "No. Using Vastu suggestions is completely optional. You decide which recommendations to follow while designing your home."
            },
            {
                question: "What suggestions does it provide?",
                answer: "It suggests room placements, door alignments, and directional balances in accordance with ancient Vastu Shastra principles adapted for modern structures."
            },
            {
                question: "Does it work for commercial spaces globally?",
                answer: "Yes! While Vastu roots stem from ancient traditions, our AI maps directional energy flows applicable universally across independent houses, apartments, and global commercial properties."
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Vastu Shastra Optimizer - Frequently Asked Questions",
        "mainEntity": faqData.faqs.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        }))
    };

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Zlendo Realty Vastu Optimizer",
        "image": "https://zlendorealty.com/assets/vastu-product/hero-vastu.webp",
        "description": "An AI-powered online Vastu compliance checker and floor plan optimizer that helps align home planning with traditional Vastu Shastra principles.",
        "brand": {
            "@type": "Brand",
            "name": "Zlendo Realty"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://zlendorealty.com/products/vastu",
            "priceCurrency": "USD",
            "price": "0"
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#222222] font-nunito selection:bg-orange-500/20 selection:text-orange-600">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Zlendo Realty Vastu Optimizer",
                    "applicationCategory": "LifestyleApplication",
                    "applicationSubCategory": "Vastu Analysis Software",
                    "operatingSystem": "Web",
                    "url": "https://zlendorealty.com/products/vastu",
                    "description": "AI-powered Vastu analysis software that evaluates floor plans using Vastu Shastra principles, generates energy heatmaps, provides directional analysis, identifies layout imbalances, and suggests practical remedies for healthier and harmonious living spaces.",
                    "image": "https://zlendorealty.com/favicon.ico",
                    "softwareVersion": "1.0",
                    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Free AI-powered Vastu analysis and optimization tool" },
                    "aggregateRating": ZLENDO_AGGREGATE_RATING,
                    "creator": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "publisher": { "@type": "Organization", "name": "Zlendo Realty", "url": "https://zlendorealty.com" },
                    "featureList": ["AI-powered Vastu analysis", "Floor plan energy heatmaps", "Directional alignment checks", "Room-wise Vastu scorecard", "Compass orientation analysis", "Vastu compliance scoring", "Energy imbalance detection", "Non-destructive remedy suggestions", "Satellite-based directional mapping", "Apartment and home Vastu evaluation", "AI-generated layout correction suggestions", "Health and harmony optimization insights"]
                })
            }} />
            <JsonLd schema={faqSchema} />
            <JsonLd schema={productSchema} />

            <main>
                {/* HERO SECTION */}
                <section className="container-custom px-4 py-8 lg:py-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-xl space-y-8">
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 bg-white shadow-sm">
                            <Compass className="w-4 h-4 text-[#F97316]" />
                            <span className="text-xs font-bold tracking-widest text-[#F97316] uppercase">Vastu Shastra AI</span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[44px] md:text-[60px] lg:text-[76px] tracking-tight font-black leading-[1.05] text-[#111]">
                            Vastu Optimizer:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#FCD884]">
                                Global Harmony.
                            </span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-[#666] font-medium leading-relaxed">
                            Analyze your digital 3D floor plans instantly for spatial compliance. Harmonize global architecture through ancient directional science.
                        </motion.p>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-4">
                            <a href={SIGNUP_URL} className="inline-flex items-center justify-center px-10 py-5 bg-[#111111] text-white rounded-xl font-black text-xl hover:bg-[#333] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] gap-3 group">
                                Start Your Analysis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_60%)] pointer-events-none" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {[
                                { title: "Directional Zoning", desc: "Automated analysis of core rooms, kitchens, and entrance placements." },
                                { title: "Vastu Score Matrix", desc: "Real-time compliance percentage evaluating total plan harmony." },
                                { title: "Remedy Suggestions", desc: "Non-destructive adjustments to neutralize architectural imbalances." },
                                { title: "Element Balancing", desc: "Global heatmap projections for Earth, Water, Fire, Air, and Space." }
                            ].map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (i * 0.1) }} className="bg-white border border-black/[0.05] shadow-[0_10px_20px_rgba(0,0,0,0.02)] p-8 rounded-[2xl] hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(249,115,22,0.05)] transition-all">
                                    <CheckCircle className="w-8 h-8 text-orange-500 mb-6" />
                                    <h3 className="text-xl font-black mb-2 text-[#111]">{f.title}</h3>
                                    <p className="text-[#666] font-medium leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO CONTENT SECTION */}
                <section className="bg-slate-50 py-24 border-y border-black/5 overflow-hidden">
                    <div className="container-custom px-4 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-center mb-16 max-w-3xl mx-auto"
                        >
                            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-bold tracking-widest uppercase text-xs rounded-full mb-6">
                                Ancient Science Meets AI
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight mb-6">
                                Evaluate Floor Plans With the Most Advanced AI Vastu Checker
                            </h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Establishing spatial harmony is critical for residential and commercial architecture everywhere in the world. Our <strong>online AI Vastu analysis tool</strong> processes standard architectural floor plans directly in the cloud to cross-reference them against core directional geometry principles.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mt-20">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl lg:text-4xl font-black text-zlendo-grey-dark leading-tight">
                                    How Global Architecture Leverages Vastu Principles
                                </h2>
                                <div className="w-16 h-1 mt-4 bg-orange-500 rounded-full"></div>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed mt-6">
                                    Whether you are designing an apartment suite or a large-scale layout, directional alignments—such as positioning the kitchen towards the Southeast (Fire element)—influence energy flows.
                                </p>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    Zlendo Realty's optimizer acts as an on-demand consultant. It checks overlapping geometric footprints and generates interactive visualizations that instantly notify designers and architects of potential imbalances before finalizing a blueprint.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-6"
                            >
                                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-150"></div>
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                                        <Target className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-800 mb-3">Live Orientation Matrix</h3>
                                    <p className="text-slate-600 font-medium text-base leading-relaxed">Automatically maps your structure to North, South, East, and West compass properties to deduce core zones instantly.</p>
                                </div>

                                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-150"></div>
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                                        <Zap className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-800 mb-3">Instant Corrective Remedies</h3>
                                    <p className="text-slate-600 font-medium text-base leading-relaxed">Recommends simple, non-structural changes such as furniture rotations or color modifications to offset weak quadrants.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <FAQ data={faqData} />

            </main>
        </div>
    );
}
