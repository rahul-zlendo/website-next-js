'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// ─── Real playlist data from "Beginner Guide | Zlendo Realty 2026" ───────────
// playlistIndex = 0-based position in the YouTube playlist
// Update duration/views as needed — titles match your actual playlist
const PLAYLIST_ID = 'PLetnELr5c_JVwUtuFKM9wGjGKrKPrGmsa';

interface PlaylistVideo {
    index: number;
    title: string;
    duration: string;
    views: number;
}

const playlistVideos: PlaylistVideo[] = [
    { index: 0, title: "Sign In, Dashboard & Getting Started | Beginner Guide | Zlendo Realty 2026", duration: "0:38", views: 47 },
    { index: 1, title: "Create a New Project | Beginner's Lesson | Zlendo Realty 2026", duration: "1:13", views: 31 },
    { index: 2, title: "Start From Scratch | Beginner Guide | Zlendo Realty 2026", duration: "0:31", views: 26 },
    { index: 3, title: "Default Room Shapes | Quick Design Tutorial | Zlendo Realty 2026", duration: "0:17", views: 16 },
    { index: 4, title: "Set Your Preferences | Beginner's Lesson | Zlendo Realty 2026", duration: "3:12", views: 14 },
    { index: 5, title: "Draw a Floor Plan | Beginner's Lesson | Zlendo Realty 2026", duration: "5:36", views: 12 },
    { index: 6, title: "Decorate Interior with AI Templates | Beginner's Lesson | Zlendo Realty 2026", duration: "2:15", views: 10 },
    { index: 7, title: "Find and Place Models | Beginner's Lesson | Zlendo Realty 2026", duration: "5:00", views: 9 },
    { index: 8, title: "Get High-Quality Renders | Beginner's Lesson | Zlendo Realty 2026", duration: "6:39", views: 8 },
    { index: 9, title: "Export Your Projects | Beginner's Lesson | Zlendo Realty 2026", duration: "4:14", views: 7 },
    { index: 10, title: "Apply Materials & Textures | Floors, Walls & Ceilings | Zlendo Realty 2026", duration: "6:15", views: 6 },
    { index: 11, title: "AI Inspiration | Beginner Tutorial | Zlendo Realty 2026", duration: "5:45", views: 5 },
    { index: 12, title: "Smart Floor Planning Made Simple | Zlendo Realty 2026", duration: "4:20", views: 5 },
    { index: 13, title: "Create Realistic Renders & Walkthroughs | Zlendo Realty 2026", duration: "8:10", views: 4 },
    { index: 14, title: "Build Your Dream Home | Zlendo Realty 2026", duration: "6:50", views: 3 },
];

const PLAYLIST_TITLE = 'Beginner Guide | Zlendo Realty 2026';

// Build embed URL for the selected playlist position
// autoplay=0 on initial load (user must press play)
// autoplay=1 only when user explicitly clicks a different video in the sidebar
const embedSrc = (index: number, autoplay = false) =>
    `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&index=${index}&autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;

// ─── Page ────────────────────────────────────────────────────────────────────
export default function TutorialsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    const activeVideo = playlistVideos[activeIndex];

    const handleVideoSelect = (index: number) => {
        setAutoplay(true);
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen bg-white font-nunito pt-20">

            {/* ── Page Heading ── */}
            <div className="container-custom px-6 lg:px-12 py-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-grey-dark mb-4"
                >
                    Tutorials
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-zlendo-grey-medium font-medium opacity-70 max-w-2xl mx-auto mb-8"
                >
                    Step-by-step video guides to help you get the most out of Zlendo Realty — from floor planning to stunning 3D renders.
                </motion.p>
            </div>

            {/* Breadcrumb */}
            <div className="container-custom px-6 lg:px-12 py-5">
                <nav className="flex items-center gap-2 text-sm text-zlendo-grey-medium font-semibold flex-wrap">
                    <span>Home</span>
                    <span className="opacity-30">&gt;</span>
                    <span className="text-zlendo-teal">Beginner&apos;s Guide</span>
                    <span className="opacity-30">&gt;</span>
                    <span className="text-zlendo-grey-dark font-bold line-clamp-1 max-w-xs lg:max-w-md">
                        {PLAYLIST_TITLE}
                    </span>
                </nav>
            </div>


            {/* Main content */}
            <div className="container-custom px-6 lg:px-12 pb-14">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* ── LEFT: Video player ─────────────────────────────────── */}
                    <div className="flex-1 min-w-0">
                        {/* iframe embed */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
                        >
                            <iframe
                                src={embedSrc(activeIndex, autoplay)}
                                title={activeVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </motion.div>

                        {/* Video title & meta */}
                        <div className="mt-5">
                            <h1 className="text-xl md:text-2xl font-black text-zlendo-grey-dark leading-tight">
                                {activeVideo.title}
                            </h1>
                            <p className="mt-2 text-sm text-zlendo-grey-medium font-semibold opacity-50">
                                {activeVideo.views} views
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT: Playlist sidebar ────────────────────────────── */}
                    <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
                        <div className="bg-gray-50 rounded-2xl border border-black/5 overflow-hidden">
                            {/* Sidebar header */}
                            <div className="p-4 border-b border-black/5">
                                <h2 className="font-black text-zlendo-grey-dark text-[15px] leading-snug">
                                    {PLAYLIST_TITLE}
                                </h2>
                                <p className="text-[12px] text-zlendo-grey-medium font-semibold opacity-50 mt-1">
                                    {playlistVideos.length} videos
                                </p>
                            </div>

                            {/* Playlist items */}
                            <div className="overflow-y-auto max-h-[500px]">
                                {playlistVideos.map((video) => {
                                    const isActive = video.index === activeIndex;
                                    return (
                                        <button
                                            key={video.index}
                                            onClick={() => handleVideoSelect(video.index)}
                                            className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-all
                                                ${isActive ? 'bg-zlendo-teal/10' : 'hover:bg-gray-100'}`}
                                        >
                                            {/* Play / index indicator */}
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                                ${isActive ? 'bg-zlendo-teal' : 'bg-gray-200'}`}>
                                                {isActive ? (
                                                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                                                ) : (
                                                    <span className="text-[11px] font-black text-gray-500">
                                                        {video.index + 1}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title + duration */}
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-[13px] font-bold line-clamp-2 leading-snug
                                                    ${isActive ? 'text-zlendo-teal' : 'text-zlendo-grey-dark'}`}>
                                                    {video.title}
                                                </p>
                                                <p className="text-[11px] text-zlendo-grey-medium font-semibold opacity-50 mt-0.5">
                                                    {video.duration}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
