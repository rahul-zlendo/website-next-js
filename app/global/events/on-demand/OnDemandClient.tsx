'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Play, Clock, ArrowRight, ChevronLeft, Lock, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '@/lib/store/hooks';
import { SIGNUP_URL, LOGIN_URL } from '@/lib/constants/urls';

interface OnDemandLecture {
    videoId: string;
    title: string;
    category: string;
    duration: string;
    date: string;
    link?: string;
}

interface OnDemandClientProps {
    data?: {
        seoTitle?: string;
        seoDescription?: string;
        heroTitlePrefix?: string;
        heroTitleHighlight?: string;
        heroDesc?: string;
        lectures?: OnDemandLecture[];
    };
}

export default function OnDemandClient({ data }: OnDemandClientProps) {
    const pathname = usePathname();
    const isIndia = pathname?.startsWith('/in');
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Architecture', 'Workflow', 'AI Planning', 'Business'];

    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);
    const [showAuthPrompt, setShowAuthPrompt] = useState(false);

    const handlePlayVideo = (videoId: string | undefined) => {
        if (!videoId) return;
        if (isAuthenticated && user) {
            setPlayingVideo(videoId);
        } else {
            setShowAuthPrompt(true);
        }
    };

    const lecturesList = data?.lectures || [];

    const filteredLectures = lecturesList.filter(l => filter === 'All' || l.category === filter);

    return (
        <div className="min-h-screen bg-[#F6F7F9] font-nunito">

            {/* HERO SECTION */}
            <section className="relative py-24 bg-zlendo-grey-dark text-white border-y-[6px] border-zlendo-teal overflow-hidden">
                {/* Abstract Background Layer */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom px-4 relative z-10 text-center max-w-4xl mx-auto">
                    <Link href={isIndia ? "/in/events" : "/events"} className="inline-flex items-center gap-2 text-teal-300 font-bold hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest border border-zlendo-teal/50 bg-zlendo-teal/20 px-4 py-2 rounded-full">
                        <ChevronLeft className="w-4 h-4" /> Back to Upcoming Events
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-md">
                        {data?.heroTitlePrefix || 'On-Demand'} <span className="text-zlendo-teal">{data?.heroTitleHighlight || 'Webinars'}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
                        {data?.heroDesc || 'Catch up on all the masterclasses, product Deep Dives, and live workflows you might have missed.'}
                    </p>
                </div>
            </section>

            {/* FILTER & GRID OR PLAYER VIEW */}
            <section className="py-16 md:py-24">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    {!playingVideo ? (
                        <>
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
                                        key={item.videoId || index}
                                        className="bg-white rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 group flex flex-col"
                                    >
                                        <div
                                            className="relative aspect-video bg-slate-900 overflow-hidden flex-shrink-0 group/video cursor-pointer"
                                            onClick={() => handlePlayVideo(item.videoId)}
                                        >
                                            <div className="absolute inset-0 bg-slate-900">
                                                {item.videoId && (
                                                    <img
                                                        src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover opacity-60 group-hover/video:scale-105 transition-transform duration-500"
                                                    />
                                                )}
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-zlendo-teal rounded-full flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform">
                                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 pointer-events-none">
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
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {filteredLectures.length === 0 && (
                                <div className="text-center py-20 text-slate-400 font-bold">
                                    No on-demand webinars found in this category.
                                </div>
                            )}
                        </>
                    ) : (
                        /* ── PLAYER VIEW (Playlist mode) ── */
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <button
                                onClick={() => setPlayingVideo(null)}
                                className="inline-flex items-center gap-2 text-zlendo-teal font-black text-sm bg-teal-50/50 hover:bg-teal-50 px-5 py-2.5 rounded-xl transition-all border border-teal-100 hover:border-teal-200 shadow-sm"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to all webinars
                            </button>

                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                {/* ── LEFT: Video player ── */}
                                <div className="flex-1 min-w-0 w-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-slate-800"
                                    >
                                        <iframe
                                            key={playingVideo}
                                            src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
                                            title={lecturesList.find(l => l.videoId === playingVideo)?.title || 'Video'}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="w-full h-full border-0"
                                        />
                                    </motion.div>

                                    <div className="mt-6 bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-black uppercase tracking-wider text-zlendo-teal bg-zlendo-teal/10 px-3 py-1 rounded-md">
                                                {lecturesList.find(l => l.videoId === playingVideo)?.category}
                                            </span>
                                        </div>
                                        <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                                            {lecturesList.find(l => l.videoId === playingVideo)?.title}
                                        </h1>
                                        <div className="flex items-center gap-4 mt-3 mb-6 pb-6 border-b border-black/5 text-sm text-slate-500 font-bold">
                                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {lecturesList.find(l => l.videoId === playingVideo)?.duration}</span>
                                        </div>

                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl border border-black/5">
                                            <div className="max-w-xl">
                                                <h3 className="font-black text-slate-900 text-lg mb-1.5">Put this into practice today</h3>
                                                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                                    Open the studio and try these techniques on your own project for free!
                                                </p>
                                            </div>
                                            <a
                                                href={SIGNUP_URL}
                                                className="shrink-0 w-full md:w-auto px-8 py-3.5 bg-zlendo-teal text-white rounded-xl font-black text-sm hover:scale-105 hover:bg-teal-600 transition-all shadow-lg shadow-zlendo-teal/20 flex items-center justify-center gap-2 group"
                                            >
                                                Start For Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* ── RIGHT: Playlist sidebar ── */}
                                <div className="w-full lg:w-96 flex-shrink-0">
                                    <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/40">
                                        <div className="p-5 border-b border-slate-100 bg-slate-50">
                                            <h2 className="font-black text-slate-900 text-lg leading-snug">
                                                On-Demand Webinars
                                            </h2>
                                            <p className="text-sm text-slate-500 font-bold mt-1">
                                                {filteredLectures.length} available sessions
                                            </p>
                                        </div>

                                        <div className="overflow-y-auto max-h-[600px] p-2">
                                            {filteredLectures.map((video, index) => {
                                                const isActive = video.videoId === playingVideo;
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => setPlayingVideo(video.videoId)}
                                                        className={`w-full flex items-start gap-3 p-2 rounded-xl text-left transition-all mb-1
                                                            ${isActive ? 'bg-teal-50 border border-teal-100 shadow-sm' : 'hover:bg-slate-50 border border-transparent'}`}
                                                    >
                                                        <div className="relative w-28 aspect-video flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 group">
                                                            <img
                                                                src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                                                                alt={video.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            {isActive && (
                                                                <div className="absolute inset-0 bg-teal-900/50 flex items-center justify-center backdrop-blur-[1px]">
                                                                    <Play className="w-5 h-5 text-white fill-white" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1 min-w-0 py-1">
                                                            <h4 className={`font-bold text-sm leading-snug line-clamp-2 ${isActive ? 'text-teal-900' : 'text-slate-800'}`}>
                                                                {video.title}
                                                            </h4>
                                                            <span className="text-xs font-bold text-slate-500 mt-1 block">
                                                                {video.duration}
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Auth Prompt Modal */}
            <AnimatePresence>
                {showAuthPrompt && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                            onClick={() => setShowAuthPrompt(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-sm bg-white rounded-[32px] overflow-hidden shadow-2xl z-10 p-8 text-center border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-zlendo-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Lock className="w-8 h-8 text-zlendo-teal" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-3">Authentication Required</h3>
                            <p className="text-slate-600 font-medium mb-8 leading-relaxed text-sm">
                                To watch our exclusive on-demand webinar videos, you need to log in or create a free Zlendo Realty account.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Link
                                    href={SIGNUP_URL}
                                    className="w-full bg-zlendo-teal text-white font-black py-4 rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-zlendo-teal/20"
                                >
                                    Create Free Account
                                </Link>
                                <Link
                                    href={LOGIN_URL}
                                    className="w-full bg-slate-50 text-slate-800 font-black py-4 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
                                >
                                    Log In
                                </Link>
                                <button
                                    onClick={() => setShowAuthPrompt(false)}
                                    className="text-slate-400 font-bold text-sm mt-3 hover:text-slate-700 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
