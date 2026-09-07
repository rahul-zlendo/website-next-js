'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowLeft, Clock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface PlaylistVideo {
    videoId: string;
    title: string;
    duration: string;
    views: number;
    customThumbnail?: string;
}

export default function TutorialsClient({ cms }: { cms: any }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [autoplay, setAutoplay] = useState(false);
    const pathname = usePathname();
    const isIndiaSite = pathname?.startsWith('/in');

    // Default Playlist Data with new provided videos
    const defaultVideos: PlaylistVideo[] = [
        { videoId: 'PIO09xkPPVk', title: "How to Login & Create Projects | Complete Dashboard Walkthrough", duration: "2:54", views: 154, customThumbnail: '/assets/tutorials/login-to-dashboard-thimbnail.png' },
        { videoId: 'oXqyg98QfA4', title: "Getting Started Tutorial | Create Your First Project, Explore the Complete Interface", duration: "4:40", views: 243, customThumbnail: '/assets/tutorials/start-from-scratch-thumbnail.png' },
        { videoId: 'j7W91eWQHC4', title: "Template-Based Project | Complete Tutorial | Create & Customize Projects in Minutes", duration: "1:22", views: 189, customThumbnail: '/assets/tutorials/project-teamplates-thumbnail.png' },
        { videoId: '-zs128gfZAQ', title: "Turn Any 2D Floor Plan into 3D in Minutes! | Complete Import Guide", duration: "7:04", views: 320, customThumbnail: '/assets/tutorials/2d-upload-thumbnail.png' },
        { videoId: 'UhX8KTyhCZ4', title: "Turn Any Floor Plan into a Stunning 3D Visuals in Minutes", duration: "2:16", views: 210, customThumbnail: '/assets/tutorials/3d-model-editor-thumbnail.jpg' },
        { videoId: 'u1sEdZqZNZ8', title: "Master Wall Editing in Minutes! | Complete Wall Editor Guide", duration: "4:18", views: 145, customThumbnail: '/assets/tutorials/wall-editor-and-wall-properties-thumbnail.png' },
        { videoId: 'XxU6clslj5I', title: "Doors & Windows Tutorial | Place, Edit & Customize Doors, Windows & Openings", duration: "3:33", views: 178, customThumbnail: '/assets/tutorials/doors_windows_tutorial-thumbnail.png' },
        { videoId: 'WigNfsSR_iw', title: "Floor Editor Tutorial | Apply Wood, Tiles, Marble & Custom Paving Patterns", duration: "2:01", views: 198, customThumbnail: '/assets/tutorials/floor-editor-thumbnail.png' },
        { videoId: 'wEtK0Kh7T14', title: "Transform Plain Walls into Stunning Feature Walls! | Complete Tutorial", duration: "4:14", views: 167, customThumbnail: '/assets/tutorials/wall-customization-thumbnail.png' },
        { videoId: 'IgmtY6aUngw', title: "How to Create & Customize Staircases | Straight, L & U Staircase Tutorial", duration: "1:43", views: 234, customThumbnail: '/assets/tutorials/staircase-thumbnail.png' },
        { videoId: 'qKyIxNNMOjk', title: "Multiple Floors & Basement Tutorial | Create Multi-Storey Buildings Step-by-Step", duration: "2:47", views: 289, customThumbnail: '/assets/tutorials/multiple-floor-thumbnail.png' },
        { videoId: 'h-waaJmdNdI', title: "Redesign Any Room with AI in Seconds! | AI Inspiration Complete Guide", duration: "1:29", views: 432, customThumbnail: '/assets/tutorials/ai-inspiration-thumbnail.png' },
        { videoId: '-LHxMptWzRU', title: "Using The Vaastu feature in Zlendo Realty | Complete Tutorial", duration: "1:30", views: 156, customThumbnail: '/assets/tutorials/vastu-thumbnail.png' },
        { videoId: 'EgzImgoCdpY', title: "Design a Perfect Compound Wall & Entrance in Minutes! | Complete Tutorial", duration: "5:22", views: 134, customThumbnail: '/assets/tutorials/compound-wall-thumbnail.png' },
        { videoId: 'I0Oh4O87w9A', title: "Basement, Plot Area & Setback Tutorial | Create Site Boundaries Step-by-Step", duration: "2:03", views: 112, customThumbnail: '/assets/tutorials/basement-plto-area-thumbnail.png' },
        { videoId: '3dLFR6ddI4k', title: "Know Your Project Cost Before You Build! & Share Your Designs with the Community!", duration: "2:13", views: 190, customThumbnail: '/assets/tutorials/cost-estimation-thumbnail.png' },
        { videoId: 'J1uSywQuNyc', title: "Create Stunning 4K Renders in Minutes! | Complete Rendering Tutorial", duration: "8:24", views: 378, customThumbnail: '/assets/tutorials/render-image-thumbnail.png' },
        { videoId: 'N17BBHGLNdg', title: "Create Stunning 4K Walkthrough Videos Without Any Editing!", duration: "5:40", views: 345, customThumbnail: '/assets/tutorials/video-render-tutorial-thumbnail.png' },
        { videoId: '7DvTU6_V-to', title: "3D Walkthrough Mode Tutorial | Complete Walkthrough, Camera, Lighting & HDR Settings", duration: "4:29", views: 401, customThumbnail: '/assets/tutorials/3d-walk-mode-thumbnail-1.png' },
        { videoId: 'nc8VSLzl850', title: "Export Professional Floor Plans Like an Expert! | Complete Tutorial", duration: "4:01", views: 145, customThumbnail: '/assets/tutorials/export-plans-thumbnail.png' },
    ];

    const playlistVideos = cms?.videos || defaultVideos;
    const playlistId = cms?.playlistId || '';
    const playlistTitle = cms?.playlistTitle || 'Complete Guide Series 2026';
    const activeVideo = activeIndex !== null ? playlistVideos[activeIndex] : playlistVideos[0];

    const embedSrc = (videoId: string, autoplay = false) =>
        `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;

    const handleVideoSelect = (index: number) => {
        setAutoplay(true);
        setActiveIndex(index);
        window.scrollTo({ top: 100, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white font-nunito pt-12">
            <div className="container-custom px-4 lg:px-8 pb-14 max-w-7xl mx-auto">

                {activeIndex === null ? (
                    <>

                        {/* ── Page Heading ── */}
                        < div className="text-center mb-12">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[28px] md:text-[42px] lg:text-[56px] font-black text-zlendo-teal mb-4"
                            >
                                {cms?.heroTitleHighlight || "Tutorials"}
                                {isIndiaSite && <span className="sr-only"> Videos</span>}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-zlendo-grey-medium font-medium opacity-70 max-w-2xl mx-auto"
                            >
                                {cms?.heroDesc || "Step-by-step video guides to help you get the most out of Zlendo Realty — from floor planning to stunning 3D renders."}
                            </motion.p>
                        </div>

                        {/* ── GRID VIEW (Library) ── */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <div>
                                {/* <h2 className="text-2xl font-black text-slate-900 mb-6">{playlistTitle}</h2> */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {playlistVideos.map((video: PlaylistVideo, idx: number) => (
                                        <div
                                            key={idx}
                                            onClick={() => handleVideoSelect(idx)}
                                            className="group cursor-pointer flex flex-col"
                                        >
                                            <div className="aspect-video w-full rounded-2xl overflow-hidden relative mb-4 bg-slate-100 border border-slate-200 shadow-sm group-hover:shadow-xl transition-all duration-300">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={video.customThumbnail || `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all scale-100 group-hover:scale-110 shadow-xl group-hover:bg-black/80">
                                                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                                                    {video.duration}
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-slate-900 line-clamp-2 text-sm leading-snug group-hover:text-zlendo-teal transition-colors">
                                                {video.title}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                ) : (
                    /* ── PLAYER VIEW (Playlist mode) ── */
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <button
                            onClick={() => setActiveIndex(null)}
                            className="inline-flex items-center gap-2 text-zlendo-teal font-black text-sm bg-teal-50/50 hover:bg-teal-50 px-5 py-2.5 rounded-xl transition-all border border-teal-100 hover:border-teal-200 shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to all tutorials
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
                                        key={activeVideo.videoId}
                                        src={embedSrc(activeVideo.videoId, autoplay)}
                                        title={activeVideo.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    />
                                </motion.div>

                                <div className="mt-6">
                                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                                        {activeVideo.title}
                                    </h1>
                                    <div className="flex items-center gap-4 mt-3 text-sm text-slate-500 font-medium">
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {activeVideo.duration}</span>
                                    </div>
                                </div>
                            </div>

                            {/* ── RIGHT: Playlist sidebar ── */}
                            <div className="w-full lg:w-96 flex-shrink-0">
                                <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/40">
                                    <div className="p-5 border-b border-slate-100 bg-slate-50">
                                        <h2 className="font-black text-slate-900 text-lg leading-snug">
                                            Zlendo Realty Tutorials
                                        </h2>
                                        <p className="text-sm text-slate-500 font-bold mt-1">
                                            {activeIndex + 1} / {playlistVideos.length} modules
                                        </p>
                                    </div>

                                    <div className="overflow-y-auto max-h-[600px] p-2">
                                        {playlistVideos.map((video: PlaylistVideo, index: number) => {
                                            const isActive = index === activeIndex;
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => handleVideoSelect(index)}
                                                    className={`w-full flex items-start gap-3 p-2 rounded-xl text-left transition-all mb-1
                                                        ${isActive ? 'bg-teal-50 border border-teal-100 shadow-sm' : 'hover:bg-slate-50 border border-transparent'}`}
                                                >
                                                    <div className="relative w-28 aspect-video flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/60 group">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src={video.customThumbnail || `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                                                            alt={video.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        {isActive && (
                                                            <div className="absolute inset-0 bg-teal-900/50 flex items-center justify-center backdrop-blur-[1px]">
                                                                <Play className="w-5 h-5 text-white fill-white" />
                                                            </div>
                                                        )}
                                                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
                                                            {video.duration}
                                                        </div>
                                                    </div>

                                                    <div className="flex-1 min-w-0 flex flex-col justify-center pt-0.5">
                                                        <p className={`text-[13px] font-bold line-clamp-2 leading-tight
                                                            ${isActive ? 'text-teal-900' : 'text-slate-700'}`}>
                                                            {video.title}
                                                        </p>
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
        </div >
    );
}

