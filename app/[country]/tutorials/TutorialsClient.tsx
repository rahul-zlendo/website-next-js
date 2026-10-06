'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface PlaylistVideo {
    videoId: string;
    title: string;
    duration: string;
    views: number;
    customThumbnail?: string;
    description?: string;
}

export default function TutorialsClient({ cms }: { cms: any }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [autoplay, setAutoplay] = useState(false);
    const pathname = usePathname();
    const isIndiaSite = pathname?.startsWith('/in');

    const defaultVideos: PlaylistVideo[] = [
        { videoId: 'PIO09xkPPVk', title: "How to Login & Create Projects | Complete Dashboard Walkthrough", duration: "2:54", views: 154, customThumbnail: '/assets/tutorials/login-to-dashboard-thimbnail.png', description: "Learn how to easily access your account, navigate the central dashboard, and set up your very first design project." },
        { videoId: 'oXqyg98QfA4', title: "Getting Started Tutorial | Create Your First Project, Explore the Complete Interface", duration: "4:40", views: 243, customThumbnail: '/assets/tutorials/start-from-scratch-thumbnail.png', description: "Familiarize yourself with the core design tools, UI layout, and essential settings to kick off your project from scratch." },
        { videoId: 'j7W91eWQHC4', title: "Template-Based Project | Complete Tutorial | Create & Customize Projects in Minutes", duration: "1:22", views: 189, customThumbnail: '/assets/tutorials/project-teamplates-thumbnail.png', description: "Save hours of work by utilizing pre-built templates. Discover how to rapidly customize existing layouts for your specific needs." },
        { videoId: 'Gwhh654mlR4', title: "Smart Wizard + AI Inspiration Tutorial | Generate & Furnish Homes with AI | Zlendo Realty", duration: "3:45", views: 0, customThumbnail: '/assets/tutorials/smart-wizard-ai-inspiration-thumbnail.png', description: "Harness the power of AI to instantly generate entire home layouts and automatically furnish interior rooms using the Smart Wizard." },
        { videoId: '-zs128gfZAQ', title: "Turn Any 2D Floor Plan into 3D in Minutes! | Complete Import Guide", duration: "7:04", views: 320, customThumbnail: '/assets/tutorials/2d-upload-thumbnail.png', description: "Watch our step-by-step guide on importing flat 2D drawings and letting the system automatically convert them into interactive 3D environments." },
        { videoId: 'twcAEdydgUw', title: "Convert 2D Floor Plans to 3D in Seconds | Zlendo Realty Tutorial", duration: "0:40", views: 22, customThumbnail: '/assets/tutorials/2d-to-3d-in-seconds.png', description: "In this tutorial, you'll see how easy it is to create a floor plan in 2D and generate a realistic 3D structure with just a few clicks. Whether you're an architect, interior designer, builder, or homeowner, this feature helps you visualize your designs before construction begins." },
        { videoId: 'UhX8KTyhCZ4', title: "Placement of Assets Tutorial | Place, Move & Customize 3D Furniture and Models | Zlendo Realty", duration: "2:16", views: 210, customThumbnail: '/assets/tutorials/3d-model-editor-thumbnail.jpg', description: "Master the 3D model editor object controls. Learn to accurately place, rotate, scale, and customize furniture within your spaces." },
        { videoId: 'u1sEdZqZNZ8', title: "Master Wall Editing in Minutes! | Complete Wall Editor Guide", duration: "4:18", views: 145, customThumbnail: '/assets/tutorials/wall-editor-and-wall-properties-thumbnail.png', description: "Take total structural control. This tutorial covers wall properties, thickness, custom heights, and advanced splitting techniques." },
        { videoId: 'XxU6clslj5I', title: "Doors & Windows Tutorial | Place, Edit & Customize Doors, Windows & Openings", duration: "3:33", views: 178, customThumbnail: '/assets/tutorials/doors_windows_tutorial-thumbnail.png', description: "Learn how to intelligently snap doors, windows, and custom openings into your walls while adjusting dimensions and frame styles." },
        { videoId: 'WigNfsSR_iw', title: "Floor Editor Tutorial | Apply Wood, Tiles, Marble & Custom Paving Patterns", duration: "2:01", views: 198, customThumbnail: '/assets/tutorials/floor-editor-thumbnail.png', description: "Elevate your interiors. Discover how to customize floor zoning, apply detailed textures like marble, and modify tiling patterns." },
        { videoId: 'wEtK0Kh7T14', title: "Transform Plain Walls into Stunning Feature Walls! | Complete Tutorial", duration: "4:14", views: 167, customThumbnail: '/assets/tutorials/wall-customization-thumbnail.png', description: "Go beyond basic paint. Learn how to design elegant feature walls using custom paneling, unique wallpaper textures, and materiality." },
        { videoId: 'c2aP5NF2WWM', title: "How to Create a CURVE Wall (Not an Arc Wall) in Zlendo Realty | Complete Tutorial", duration: "1:01", views: 0, customThumbnail: '/assets/tutorials/curve-wall-thumbnail.png', description: "Want to create a smooth curved wall instead of using the standard Arc Wall tool in Zlendo Realty? In this tutorial, you'll learn exactly how to create beautiful curved walls quickly and accurately using the Build tools." },
        { videoId: '-Tc_64ymuk4', title: "How to Create & Customize Staircases | Straight, L & U Staircase Tutorial", duration: "1:43", views: 234, customThumbnail: '/assets/tutorials/staircase-thumbnail.png', description: "Connect multiple levels seamlessly. Explore the staircase generator to construct custom Straight, L-shaped, and U-shaped stairs." },
        { videoId: 'qKyIxNNMOjk', title: "Multiple Floors & Basement Tutorial | Create Multi-Storey Buildings Step-by-Step", duration: "2:47", views: 289, customThumbnail: '/assets/tutorials/multiple-floor-thumbnail.png', description: "Expand your designs vertically! Learn the correct workflow for adding multiple storeys and designing foundational basement levels." },
        { videoId: 'vmHYJwMRTfc', title: "How to Create Roofs in Zlendo Realty | Manual & AI Roof Generator Tutorial | Zlendo Realty", duration: "1:58", views: 0, customThumbnail: '/assets/tutorials/manual-ai-roof-design.png', description: "In this tutorial, you'll discover how to build standard roofs step by step, customize roof properties, and generate roofs instantly using AI. You'll also learn when to use standard roofs versus curved roofs for different architectural designs." },
        { videoId: 'RdBxWJtX4-M', title: "Redesign Any Room with AI in Seconds! | AI Inspiration Complete Guide", duration: "1:29", views: 432, customThumbnail: '/assets/tutorials/ai-inspiration-thumbnail.png', description: "Stuck on styling? Use the AI Inspiration tool to rapidly swap out aesthetics, colors, and interior design themes in seconds." },
        { videoId: '-LHxMptWzRU', title: "Using The Vaastu feature in Zlendo Realty | Complete Tutorial", duration: "1:30", views: 156, customThumbnail: '/assets/tutorials/vastu-thumbnail.png', description: "Ensure ultimate harmony in your plans. Watch how to run automated Vastu checks and optimize room placements according to traditional principles." },
        { videoId: 'EgzImgoCdpY', title: "Design a Compound Wall & Main Entrance Steps in Minutes | Complete Tutorial | Zlendo Realty", duration: "5:22", views: 134, customThumbnail: '/assets/tutorials/compound-wall-thumbnail.png', description: "Finalize the exterior structure. We show you exactly how to draft beautiful compound perimeter walls and construct grand entrance steps." },
        { videoId: 'I0Oh4O87w9A', title: "Basement, Plot Area & Setback Tutorial | Create Site Boundaries Step-by-Step", duration: "2:03", views: 112, customThumbnail: '/assets/tutorials/basement-plto-area-thumbnail.png', description: "Establish your fundamental property lines. Learn to properly define plot areas, implement accurate setbacks, and lay out site boundaries." },
        { videoId: 'Tp4yQkGuLc4', title: "Know Your Project Cost Before You Build! | Complete Cost Estimation Guide | Zlendo Realty", duration: "1:27", views: 190, customThumbnail: '/assets/tutorials/cost-estimation-thumbnail.png', description: "Never guess your budget again. Discover how to automatically extract BOQs and dynamic cost estimations directly from your 3D model." },
        { videoId: '3dLFR6ddI4k', title: "Share Your Designs with the Community! | Complete Publishing Guide | Zlendo Realty", duration: "2:13", views: 190, customThumbnail: '/assets/tutorials/community-post-thumbnail.png', description: "Showcase your portfolio! Learn the best practices for publishing your completed design projects directly into the Zlendo community gallery." },
        { videoId: 'J1uSywQuNyc', title: "Create Stunning 4K Renders in Minutes! | Complete Rendering Tutorial", duration: "8:24", views: 378, customThumbnail: '/assets/tutorials/render-image-thumbnail.png', description: "Transform raw models into photorealistic masterpieces. This deep dive covers everything about setting up and processing stunning 4K images." },
        { videoId: 'N17BBHGLNdg', title: "Create Stunning 4K Walkthrough Videos Without Any Editing!", duration: "5:40", views: 345, customThumbnail: '/assets/tutorials/video-render-tutorial-thumbnail.png', description: "Produce cinematic architectural presentations. Learn how to set keyframes and render buttery smooth 4K video walkthroughs effortlessly." },
        { videoId: '0cQB0Jfblww', title: "3D Walkthrough Mode Tutorial | Complete Walkthrough, Camera, Lighting & HDR Settings", duration: "4:29", views: 401, customThumbnail: '/assets/tutorials/3d-walk-mode-thumbnail-1.png', description: "Fine-tune the immersive experience. Adjust HDR environments, configure atmospheric lighting, and master in-engine camera controls." },
        { videoId: 'nc8VSLzl850', title: "Export Professional Floor Plans Like an Expert! | Complete Tutorial", duration: "4:01", views: 145, customThumbnail: '/assets/tutorials/export-plans-thumbnail.png', description: "Prepare your work for construction teams. Learn how to format, annotate, and export crisp, professional-grade 2D floor plan documents." },
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

                                <div className="mt-6 bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
                                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                                        {activeVideo.title}
                                    </h1>
                                    <p className="text-slate-600 text-base font-medium mt-3 leading-relaxed">
                                        {activeVideo.description || "Master Zlendo Realty's intelligent AI design tools with this step-by-step tutorial."}
                                    </p>
                                    <div className="flex items-center gap-4 mt-4 mb-6 pb-6 border-b border-black/5 text-sm text-slate-500 font-bold">
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {activeVideo.duration}</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl border border-black/5">
                                        <div className="max-w-xl">
                                            <h3 className="font-black text-slate-900 text-lg mb-1.5">Put this into practice today</h3>
                                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                                Open the studio and try these latest tools on your own project for free!
                                            </p>
                                        </div>
                                        <a
                                            href="https://app.zlendorealty.com/signup"
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

