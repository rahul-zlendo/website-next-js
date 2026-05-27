'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import JsonLd from '@/components/common/JsonLd';
import {
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Play,
  Building2,
  HardHat,
  Hammer,
  Home,
  MousePointerClick,
  Quote
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

// Helper component for the Before/After Slider
const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-[#FAFAFC] cursor-ew-resize select-none border border-black/5 shadow-2xl"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* Base Image (3D Render - After) */}
      <div className="absolute inset-0">
        <img
          src="/assets/2d-to-3d/after-render.webp"
          alt="3D Render After"
          loading="lazy"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Overlay Image (2D Plan - Before) with Clip Path */}
      <div
        className="absolute inset-0 border-r-2 border-white/80"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-white">
          <img
            src="/assets/2d-to-3d/before-plan.webp"
            alt="2D Floor Plan Before"
            loading="lazy"
            className="w-full h-full object-cover opacity-80 pointer-events-none grayscale brightness-110"
          />
          {/* Add Blueprint-style grid underneath to simulate 2D mapping */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center -ml-0.5"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-black/10">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-black/40 rounded-full" />
            <div className="w-1.5 h-1.5 bg-black/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white font-bold text-sm tracking-wider uppercase pointer-events-none">
        2D Floor Plan
      </div>
      <div className="absolute top-6 right-6 px-4 py-2 bg-zlendo-teal text-white font-bold text-sm tracking-wider uppercase pointer-events-none shadow-[0_4px_20px_rgba(0,191,154,0.3)]">
        3D Live Presentation
      </div>
    </div>
  );
};

export default function TwoDToThreeDPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zlendo Realty 2D to 3D Converter",
    "applicationCategory": "DesignApplication",
    "applicationSubCategory": "3D Home Design Software",
    "operatingSystem": "Web",
    "url": "https://zlendorealty.com/products/2d-to-3d",
    "description": "AI-powered 2D to 3D conversion software that transforms floor plans, sketches, PDFs, and architectural drawings into immersive 3D home designs, walkthroughs, and realistic visualizations instantly.",
    "image": "https://zlendorealty.com/favicon.ico",
    "softwareVersion": "1.0",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free online 2D to 3D conversion tool"
    },
    "creator": {
      "@type": "Organization",
      "name": "Zlendo Realty",
      "url": "https://zlendorealty.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zlendo Realty",
      "url": "https://zlendorealty.com"
    },
    "featureList": [
      "AI-powered 2D to 3D conversion",
      "Floor plan to 3D visualization",
      "PDF and image upload support",
      "Interactive 3D walkthroughs",
      "Smart room detection",
      "Automatic wall and door generation",
      "High-fidelity 3D rendering",
      "Editable 3D layouts",
      "Export-ready 3D models",
      "Realistic materials and lighting"
    ]
  };



  const [activeUseCase, setActiveUseCase] = useState(0);
  const useCases = [
    { title: 'Architects', icon: Building2, img: '/assets/2d-to-3d/before-plan.webp', outcome: 'Stop rendering. Start presenting.' },
    { title: 'Civil Engineers', icon: HardHat, img: '/assets/2d-to-3d/engineers.webp', outcome: 'Bridge the gap between blueprints and reality instantly.' },
    { title: 'Builders', icon: Hammer, img: '/assets/2d-to-3d/builders.webp', outcome: 'Show clients exactly what they are paying for to eliminate disputes.' },
    { title: 'Homeowners', icon: Home, img: '/assets/2d-to-3d/homeowners.webp', outcome: 'Visualize your dream home clearly before the first brick is laid.' }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111] font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <main>
        {/* 1. HERO (Visual Impact First) */}
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
          <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-60">
            {/* Simulated cinematic sequence: 2D plan morphing into 3D walkthrough */}
            {/* We use a high quality video background to show speed + wow factor */}
            <img
              src="/assets/2d-to-3d/hero-visual.webp"
              className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
              alt="Cinematic Architectural Render"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>

          <div className="relative z-10 container-custom px-4 text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Upload a 2D Plan. <br className="hidden md:block" />
                Present in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400">3D Reality.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto drop-shadow-xl">
                From flat sketch to immersive client presentation in under 60 seconds.
              </p>
              <div className="pt-8">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-xl rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  Try Instantly <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. LIVE TRANSFORMATION SECTION (The Slider) */}
        <section className="py-32 bg-white relative -mt-10 rounded-t-[3rem] z-20">
          <div className="container-custom px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-[#111] mb-6">See the transformation live</h2>
            <p className="text-xl text-[#666] font-medium mb-16">Drag the slider to watch flat diagrams become emotional spaces instantly.</p>

            <BeforeAfterSlider />
          </div>
        </section>

        {/* 3. FEATURE-AS-EXPERIENCE (No Text Blocks) */}
        <section className="py-24 bg-[#FAFAFC] overflow-hidden">
          <div className="container-custom px-4 space-y-32">
            {/* UX Feature 1: AI Floor Plan Detection */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px", once: true }}
                className="order-2 lg:order-1 relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-black/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,191,154,0.05)_0%,transparent_70%)] rounded-[2.5rem]" />
                <img src="/assets/2d-to-3d/blueprint-scan.webp" className="w-full rounded-2xl opacity-90" alt="Blueprint" loading="lazy" />
                {/* Scanning animation line */}
                <div className="absolute top-8 bottom-8 w-1 bg-zlendo-teal shadow-[0_0_20px_#00bf9a] animate-[scan_3s_ease-in-out_infinite]" style={{ left: '50%' }} />
              </motion.div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-[#111] leading-tight">Drop a PDF.<br />We read the walls.</h2>
                <p className="text-xl text-[#666] font-bold">100% automated layout recognition.</p>
              </div>
            </div>

            {/* UX Feature 2: Instant 3D + Walkthrough */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-[#111] leading-tight">Close the deal.<br />Inside the model.</h2>
                <p className="text-xl text-[#666] font-bold">Generate a stunning presentation link instantly.</p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px", once: true }}
                className="relative rounded-[2.5rem] bg-slate-900 p-4 shadow-2xl overflow-hidden aspect-video group"
              >
                <img src="/assets/2d-to-3d/presentation-walkthrough.webp" className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-[10s] group-hover:scale-110" alt="3D Presentation" loading="lazy" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <Play className="w-8 h-8 text-white fill-white ml-2" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* UX Feature 3: 2D to 3D Transformation Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1 space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-[1.1] tracking-tight">
                  From Plan to Reality.<br />
                  <span className="text-zlendo-teal">In Seconds.</span>
                </h2>
                <p className="text-xl text-[#666] font-medium leading-relaxed">
                  Turn uploaded layouts into client-ready 3D spaces instantly — with walls, rooms, structure, lighting, and depth automatically understood.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    "Auto wall detection",
                    "Instant 3D generation",
                    "Client-ready output"
                  ].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-sm font-bold text-[#333]">
                      <CheckCircle2 className="w-4 h-4 text-zlendo-teal" />
                      {badge}
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <a href={SIGNUP_URL} className="inline-flex items-center gap-2 px-8 py-4 bg-zlendo-teal text-white font-black text-lg rounded-full hover:bg-[#00a685] transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(0,191,154,0.3)] hover:scale-105 group">
                    See 2D to 3D in action <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Animated Visual Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px", once: true }}
                className="order-1 lg:order-2 relative aspect-[4/3] bg-white rounded-[2.5rem] p-3 md:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-black/5 group overflow-hidden"
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-50 shadow-inner">
                  {/* 2D Base Image */}
                  <img src="/assets/2d-to-3d/before-plan.webp" alt="2D Floor Plan" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

                  {/* 3D Reveal Image */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img src="/assets/2d-to-3d/after-render.webp" alt="3D Render" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2s] ease-out" />
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay group-hover:bg-black/0 transition-colors duration-500" />
                  </motion.div>

                  {/* Glowing Slider Line */}
                  <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-zlendo-teal shadow-[0_0_15px_#00bf9a,0_0_30px_#00bf9a]"
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Center Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-white rounded-full shadow-[0_0_20px_#00bf9a]" />
                  </motion.div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-black/5 rounded-lg shadow-sm text-[10px] md:text-xs font-bold text-slate-500 z-10 uppercase tracking-widest pointer-events-none">
                    2D Floor Plan
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 bg-zlendo-teal text-white rounded-lg shadow-lg text-[10px] md:text-xs font-bold z-10 uppercase tracking-widest pointer-events-none"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                  >
                    AI 3D Model
                  </motion.div>

                  <motion.div
                    className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-4 py-2 bg-[#111] text-white rounded-xl shadow-2xl text-xs md:text-sm font-black z-10 flex items-center gap-2 border border-white/10 pointer-events-none"
                    animate={{ opacity: [0, 1, 0], y: [10, 0, 10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-zlendo-teal" /> Ready to Present
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. BEFORE vs AFTER (High Conversion Metric Showdown) */}
        <section className="py-32 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zlendo-teal/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="container-custom px-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">The Treditional way is bleeding your profit.</h2>
          </div>

          <div className="container-custom px-4 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-0 relative">
              {/* VS Badge in Middle on Desktop */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full items-center justify-center z-20 shadow-2xl">
                <span className="font-black text-[#111] text-xl italic">VS</span>
              </div>

              {/* Before */}
              <div className="bg-white/5 border border-white/10 p-12 md:rounded-l-[3rem] md:rounded-r-none rounded-[2.5rem]">
                <h3 className="text-2xl font-bold text-slate-400 mb-8">Manual CAD + Rendering</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-lg font-medium">Draw Floorplan</span>
                    <span className="text-xl font-black text-red-400">4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-lg font-medium">Model 3D Extrusions</span>
                    <span className="text-xl font-black text-red-400">8 Hours</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-lg font-medium">Render Engine Wait</span>
                    <span className="text-xl font-black text-red-400">12 Hours</span>
                  </div>
                  <div className="pt-4 text-left">
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Time to Client Presentation</div>
                    <div className="text-5xl font-black text-white opacity-50">3 Days</div>
                  </div>
                </div>
              </div>

              {/* After (Zlendo) */}
              <div className="bg-zlendo-teal border border-zlendo-teal p-12 md:rounded-r-[3rem] md:rounded-l-none rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]" />
                <h3 className="text-2xl font-black text-white mb-8">The Zlendo Realty Workflow</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-lg font-bold">Upload PDF</span>
                    <span className="text-xl font-black text-[#013f33]">10 Sec</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-lg font-bold">AI Extrusion</span>
                    <span className="text-xl font-black text-[#013f33]">30 Sec</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-lg font-bold">Auto Photorealism</span>
                    <span className="text-xl font-black text-[#013f33]">Instant</span>
                  </div>
                  <div className="pt-4 text-left">
                    <div className="text-sm font-bold text-[#013f33] uppercase tracking-widest mb-1">Time to Client Presentation</div>
                    <div className="text-5xl font-black text-white drop-shadow-md">Under 60 Min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. USE CASE SEGMENTS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom px-4 max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
              {useCases.map((uc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveUseCase(i)}
                  className={`px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all flex items-center gap-2 md:gap-3 ${activeUseCase === i ? 'bg-[#111] text-white shadow-xl scale-105' : 'bg-[#FAFAFC] text-[#666] hover:bg-black/5 border border-black/5'}`}
                >
                  <uc.icon className="w-4 h-4 md:w-5 md:h-5" />
                  {uc.title}
                </button>
              ))}
            </div>

            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-black aspect-[4/5] sm:aspect-video md:aspect-[21/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUseCase}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img src={useCases[activeUseCase].img} alt={useCases[activeUseCase].title} className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-12 md:p-20">
                    <h3 className="text-3xl md:text-5xl font-black text-white max-w-2xl leading-tight">
                      {useCases[activeUseCase].outcome}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 6. WALKTHROUGH EXPERIENCE (Emotion & Space) */}
        <section className="py-32 bg-[#FAFAFC] border-y border-black/5 overflow-hidden">
          <div className="container-custom px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6">Don't show flat images. <br />Show them their future home.</h2>
            <div className="relative w-full max-w-5xl mx-auto mt-16 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-white group aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fvAFH25rWlY?autoplay=0&rel=0&showinfo=0"
                title="Zlendo Realty 2D to 3D Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 7. ROI SECTION (Critical Business Value) */}
        <section className="py-32 bg-white">
          <div className="container-custom px-4 text-center max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-zlendo-teal uppercase tracking-widest mb-4">The Business Impact</h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#111] leading-tight mb-20">
              Stop selling design.<br />Start selling certainty.
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-[#FAFAFC] border border-black/5">
                <div className="text-6xl font-black text-[#111] mb-4">60%</div>
                <div className="text-xl font-bold text-[#111] mb-2">Faster Approvals</div>
                <p className="text-[#666] font-medium">Clients say "yes" faster when they can virtually experience the space.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#FAFAFC] border border-black/5">
                <div className="text-6xl font-black text-[#111] mb-4">3x</div>
                <div className="text-xl font-bold text-[#111] mb-2">Project Capacity</div>
                <p className="text-[#666] font-medium">Automate rendering to free up your architects for high-value design work.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#FAFAFC] border border-black/5">
                <div className="text-6xl font-black text-[#111] mb-4">20%</div>
                <div className="text-xl font-bold text-[#111] mb-2">Higher Bump in Fees</div>
                <p className="text-[#666] font-medium">Premium presentations allow you to command premium prices effortlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SOCIAL PROOF */}
        <section className="py-24 bg-[#FAFAFC] border-t border-black/5">
          <div className="container-custom px-4 text-center max-w-4xl mx-auto">
            <Quote className="w-16 h-16 text-zlendo-teal/30 mx-auto mb-8" />
            <h2 className="text-2xl md:text-4xl font-black text-[#111] leading-snug mb-12">
              "Zlendo Realty is the first tool that actually fits into a professional workflow. We win bids on the spot now."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <img src="/assets/2d-to-3d/testimonial-sarah.webp" alt="Sarah J" className="w-16 h-16 rounded-full grayscale opacity-80" loading="lazy" />
              <div className="text-left">
                <div className="font-black text-[#111] text-lg">Sarah Jenkins</div>
                <div className="text-[#666] font-medium">Principal Architect, DesignStudio NY</div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-32 bg-[#111] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,154,0.15)_0%,transparent_70%)]" />
          <div className="container-custom px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-8">
              Design. Render.<br />Close Clients — in Minutes.
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-xl mx-auto">
              Join the fastest-growing professional design platform today.
            </p>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-3 px-12 py-6 bg-zlendo-teal text-white font-black text-2xl rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(0,191,154,0.3)] hover:scale-105"
            >
              Start Free Trial
            </a>
            <p className="mt-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
