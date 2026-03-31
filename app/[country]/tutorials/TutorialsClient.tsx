'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface PlaylistVideo {
    videoId: string;
    title: string;
    duration: string;
    views: number;
}

export default function TutorialsClient({ cms }: { cms: any }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    // Default Playlist Data
    const defaultVideos: PlaylistVideo[] = [
        { videoId: 'saVzirqnut4', title: "Sign In, Dashboard & Getting Started | Beginner Guide | Zlendo Realty 2026", duration: "0:38", views: 47 },
        { videoId: 'vhAb793zJRw', title: "Create a New Project | Beginner's Lesson | Zlendo Realty 2026", duration: "1:13", views: 31 },
        { videoId: 'UWc1_eqLTuQ', title: "Start From Scratch | Beginner Guide | Zlendo Realty 2026", duration: "0:31", views: 26 },
        { videoId: 'zv960dSglN8', title: "Default Room Shapes | Quick Design Tutorial | Zlendo Realty 2026", duration: "0:17", views: 16 },
        { videoId: 'PRYv8BC3ua8', title: "Edit Wall Height & Thickness | Beginner Guide | Zlendo Realty 2026", duration: "3:12", views: 14 },
        { videoId: 'RmHr1Y6XsAM', title: "Add Doors & Windows | Beginner Guide | Zlendo Realty 2026", duration: "5:36", views: 12 },
        { videoId: 'ruDuzBVLWaE', title: "Furniture Placement | Beginner Tutorial | Zlendo Realty 2026", duration: "2:15", views: 10 },
        { videoId: 'UjdX3-VY08o', title: "Generate Vastu Report | Beginner Guide | Zlendo Realty 2026", duration: "5:00", views: 9 },
        { videoId: 'zUdc7DZRdSw', title: "360° Design Walkthrough | 3D Explore Guide | Zlendo Realty 2026", duration: "6:39", views: 8 },
        { videoId: 'UzB6lrn3QNs', title: "AI Inspiration | Beginner Tutorial | Zlendo Realty 2026", duration: "4:14", views: 7 },
        { videoId: 'YPIC4mUya_0', title: "Apply Materials & Textures | Floors, Walls & Ceilings | Zlendo Realty 2026", duration: "6:15", views: 6 },
        { videoId: '0EkPlJWrbrw', title: "Add & Manage Multiple Floors | Beginner Tutorial | Zlendo Realty 2026", duration: "5:45", views: 5 },
        { videoId: 'PC8hoEKoCGA', title: "Cost Estimation | Budget Planning | Zlendo Realty 2026", duration: "4:20", views: 5 },
        { videoId: 'ToEv_rpssXk', title: "Video Render Tutorial | Camera Path & Settings Explained | Zlendo Realty 2026", duration: "8:10", views: 4 },
        { videoId: 'jcPO8u0t81g', title: "Image Rendering Explained | Screenshot & 4K Render | Zlendo Realty 2026", duration: "6:50", views: 3 },
    ];

    const playlistVideos = cms?.videos || defaultVideos;
    const playlistId = cms?.playlistId || 'PLetnELr5c_JVwUtuFKM9wGjGKrKPrGmsa';
    const playlistTitle = cms?.playlistTitle || 'Beginner Guide | Zlendo Realty 2026';
    const activeVideo = playlistVideos[activeIndex] || playlistVideos[0];

    const embedSrc = (videoId: string, autoplay = false) =>
        `https://www.youtube.com/embed/${videoId}?list=${playlistId}&autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;

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
                    className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-teal mb-4"
                >
                    {cms?.heroTitleHighlight || "Tutorials"}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-zlendo-grey-medium font-medium opacity-70 max-w-2xl mx-auto mb-8"
                >
                    {cms?.heroDesc || "Step-by-step video guides to help you get the most out of Zlendo Realty — from floor planning to stunning 3D renders."}
                </motion.p>
            </div>

            {/* Main content */}
            <div className="container-custom px-6 lg:px-12 pb-14">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* ── LEFT: Video player ─────────────────────────────────── */}
                    <div className="flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black"
                        >
                            <iframe
                                key={activeVideo.videoId}
                                src={embedSrc(activeVideo.videoId, autoplay)}
                                title={activeVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        </motion.div>

                        <div className="mt-5">
                            <h1 className="text-xl md:text-2xl font-black text-zlendo-grey-dark leading-tight">
                                {activeVideo.title}
                            </h1>
                        </div>
                    </div>

                    {/* ── RIGHT: Playlist sidebar ────────────────────────────── */}
                    <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
                        <div className="bg-gray-50 rounded-2xl border border-black/5 overflow-hidden">
                            <div className="p-4 border-b border-black/5">
                                <h2 className="font-black text-zlendo-grey-dark text-[15px] leading-snug">
                                    {playlistTitle}
                                </h2>
                                <p className="text-[12px] text-zlendo-grey-medium font-semibold opacity-50 mt-1">
                                    {playlistVideos.length} videos
                                </p>
                            </div>

                            <div className="overflow-y-auto max-h-[500px]">
                                {playlistVideos.map((video: PlaylistVideo, index: number) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleVideoSelect(index)}
                                            className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-all
                                                ${isActive ? 'bg-zlendo-teal/10' : 'hover:bg-gray-100'}`}
                                        >
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                                ${isActive ? 'bg-zlendo-teal' : 'bg-gray-200'}`}>
                                                {isActive ? (
                                                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                                                ) : (
                                                    <span className="text-[11px] font-black text-gray-500">
                                                        {index + 1}
                                                    </span>
                                                )}
                                            </div>

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
