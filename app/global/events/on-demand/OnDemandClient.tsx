'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Clock, ArrowRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const onDemandLectures = [
    {
        id: 1,
        title: 'The Future of AI in Architecture & Civil Engineering',
        category: 'Architecture',
        duration: '45 mins',
        date: 'August 12, 2026',
        image: '/assets/global/interior-design-consultation.webp',
        link: '#'
    },
    {
        id: 2,
        title: 'Mastering the 2D to 3D Conversion Engine',
        category: 'Workflow',
        duration: '60 mins',
        date: 'July 28, 2026',
        image: '/assets/2d-to-3d/after-render.webp',
        link: '#'
    },
    {
        id: 3,
        title: 'Vastu Optimization Using Zlendo AI',
        category: 'AI Planning',
        duration: '35 mins',
        date: 'July 15, 2026',
        image: '/assets/use-case/modern-architecture-studio.jpg',
        link: '#'
    },
    {
        id: 4,
        title: 'Client Presentations That Win Tenders',
        category: 'Business',
        duration: '50 mins',
        date: 'June 30, 2026',
        image: '/assets/design-presentation/hero-dashboard.webp',
        link: '#'
    },
];

export default function OnDemandClient() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Architecture', 'Workflow', 'AI Planning', 'Business'];

    const filteredLectures = onDemandLectures.filter(l => filter === 'All' || l.category === filter);

    return (
        <div className="min-h-screen bg-[#F6F7F9] font-nunito">

            {/* HERO SECTION */}
            <section className="relative py-24 bg-zlendo-grey-dark text-white border-y-[6px] border-zlendo-teal overflow-hidden">
                {/* Abstract Background Layer */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom px-4 relative z-10 text-center max-w-4xl mx-auto">
                    <Link href="/events" className="inline-flex items-center gap-2 text-teal-300 font-bold hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest border border-zlendo-teal/50 bg-zlendo-teal/20 px-4 py-2 rounded-full">
                        <ChevronLeft className="w-4 h-4" /> Back to Upcoming Events
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-md">
                        On-Demand <span className="text-zlendo-teal">Webinars</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
                        Catch up on all the masterclasses, product Deep Dives, and live workflows you might have missed.
                    </p>
                </div>
            </section>

            {/* FILTER & GRID SECTION */}
            <section className="py-16 md:py-24">
                <div className="container-custom px-4 max-w-7xl mx-auto">

                    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm md:text-base border transition-all ${filter === cat
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-lg scale-105'
                                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredLectures.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={item.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 group flex flex-col"
                            >
                                {/* 16:9 Video Thumbnail aspect ratio */}
                                <div className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-zlendo-teal group-hover:border-transparent">
                                            <PlayCircle className="w-8 h-8 text-white fill-white/10" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
                                        {item.duration}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-black uppercase tracking-wider text-zlendo-teal bg-zlendo-teal/10 px-3 py-1 rounded-md">
                                            {item.category}
                                        </span>
                                        <span className="text-sm font-bold text-slate-400 flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" /> {item.date}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-zlendo-grey-dark leading-snug mb-6 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <div className="mt-auto">
                                        <Link
                                            href={item.link}
                                            className="inline-flex w-full justify-center items-center gap-2 bg-slate-50 border border-slate-200 text-slate-800 font-bold px-6 py-4 rounded-xl hover:bg-zlendo-teal hover:border-zlendo-teal hover:text-white transition-all group/btn"
                                        >
                                            Watch Recording <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredLectures.length === 0 && (
                        <div className="text-center py-20 text-slate-400 font-bold">
                            No on-demand webinars found in this category.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
