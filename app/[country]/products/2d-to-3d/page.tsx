'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Box, Sparkles,
    CheckCircle2, Play, Zap, Upload, Image as ImageIcon,
    ChevronDown, Star, ShieldCheck, ThumbsUp, X
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';

export default function TwoDToThreeDPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const product = {
        title: 'Instant 2D to 3D Conversion',
        subtitle: 'The Best Free 2D Floor Planner & 3D Converter',
        headerDesc: 'Turn flat sketches into living spaces in seconds. Upload any floor plan image or PDF and watch our AI instantly construct a fully interactive 3D model.',
        icon: Box,
        gradient: 'from-blue-500 to-cyan-400',
        heroImage: 'https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&q=80&w=2400',
        features: [
            { title: 'AI Wall Detection', desc: 'Automatically identifies walls, windows, and doors with 99% accuracy.' },
            { title: 'Real-Time Editing', desc: 'Modify the generated 3D model instantly in your browser.' },
            { title: 'DWG/PDF Import', desc: 'Support for professional CAD formats and hand-drawn sketches.' },
            { title: 'Cloud Rendering', desc: 'High-speed cloud rendering for photorealistic outputs.' }
        ],
        steps: [
            {
                title: 'Upload Floor Plan',
                desc: 'Simply upload your 2D floor plan in JPG, PNG, or PDF format. Our AI recognizes the layout immediately.',
                image: '/assets/2d-to-3d/upload-floorplan.png'
            },
            {
                title: 'AI Processing',
                desc: 'Advanced algorithms convert lines and shapes into 3D walls, doors, and windows in seconds.',
                image: '/assets/Home-Page/2d-to-3d-convertor.png'
            },
            {
                title: 'Furnish & Decorate',
                desc: 'Drag and drop furniture from our massive 3D library to style the room to your taste.',
                image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Render & Export',
                desc: 'Generate 4K renderings or export the model to other CAD software for further refinement.',
                image: '/assets/Home-Page/3d-export-toolkit.png'
            }
        ]
    };

    const faqs = [
        {
            q: "What does the 2D to 3D converter do?",
            a: "The 2D to 3D converter automatically transforms 2D house plan designs into realistic 3D house designs, helping users clearly visualize layout, structure, and spatial flow through accurate 3D architectural visualization."
        },
        {
            q: "What file formats are supported?",
            a: "You can upload JPG, PNG, scanned drawings, and PDF floor plans. These files can be converted into editable layouts using our online home plan services and 3D design services in India."
        },
        {
            q: "Do I need to redraw the plan?",
            a: "No. Simply upload your existing house plan or drawing. The system converts it automatically, saving time and effort during the home plan design process."
        },
        {
            q: "How accurate is the conversion?",
            a: "The converted model closely follows your original house plan layout and room proportions. You can manually refine dimensions and details to finalize precise residential building plans."
        },
        {
            q: "Can I edit the 3D model after conversion?",
            a: "Yes. The converted design remains fully editable. You can customize layouts, walls, and interiors to create a truly custom 3D house design."
        },
        {
            q: "Who typically uses this feature?",
            a: "This feature is widely used by homeowners, architects, builders, and real estate professionals for planning, presentation, and professional architectural design services."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-nunito pt-4">
            {/* 1. HERO SECTION */}
            <section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="container-custom px-6 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="max-w-2xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">Instant 3D Visualization</span>
                            </motion.div>

                            <h1 className="text-4xl lg:text-6xl font-black font-nunito text-zlendo-grey-dark mb-6 leading-[1.1]">
                                {product.subtitle}
                            </h1>
                            <p className="text-xl text-zlendo-grey-medium font-medium mb-10 leading-relaxed max-w-lg">
                                {product.headerDesc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <a
                                    href={SIGNUP_URL}
                                    className="px-8 py-4 bg-zlendo-teal hover:bg-zlendo-teal-dark text-white rounded-xl font-black text-lg shadow-xl shadow-zlendo-teal/20 transition-all hover:scale-105 flex items-center justify-center"
                                >
                                    Start for Free
                                </a>
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="px-8 py-4 bg-white border-2 border-slate-200 text-zlendo-grey-dark rounded-xl font-bold text-lg hover:border-zlendo-teal/30 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <Play className="w-5 h-5 fill-current" /> Watch Video
                                </button>
                            </div>

                            <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="flex items-center gap-1">
                                    <ShieldCheck className="w-5 h-5 text-zlendo-teal" />
                                    <span className="font-bold text-sm">Enterprise Ready</span>
                                </div>
                                <div className="h-4 w-px bg-slate-300" />
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                                    <span className="font-bold text-sm">4.9/5 Rating</span>
                                </div>
                                <div className="h-4 w-px bg-slate-300" />
                                <div className="flex items-center gap-1">
                                    <ThumbsUp className="w-5 h-5 text-blue-500" />
                                    <span className="font-bold text-sm">Editor's Choice</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5">
                                <img
                                    src={product.heroImage}
                                    alt={product.title}
                                    className="w-full h-auto object-cover"
                                />
                                {/* Overlay UI Mockups */}
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50 animate-bounce-slow hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${product.gradient} text-white`}>
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-500 uppercase">Processing</div>
                                            <div className="text-lg font-black text-slate-800">Done</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Blurs */}
                            <div className={`absolute -inset-10 bg-gradient-to-tr ${product.gradient} opacity-20 blur-[100px] -z-10`} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. SMART UPLOAD ZONE */}
            <section className="py-16 bg-slate-50 relative overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                />

                <div className="container-custom px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div
                            className="group relative cursor-pointer"
                        >
                            <a href={SIGNUP_URL} className="absolute inset-0 z-20" />
                            {/* Animated Glow Effect behind the box */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-zlendo-teal via-blue-500 to-purple-500 rounded-[2.5rem] opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />

                            {/* Main Dropzone Container */}
                            <div className="relative bg-white rounded-[2rem] border-2 border-dashed border-slate-300 group-hover:border-zlendo-teal transition-all duration-300 p-10 md:p-16 flex flex-col items-center text-center overflow-hidden">

                                {/* Scanning Beam Animation */}
                                <motion.div
                                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zlendo-teal to-transparent opacity-0 group-hover:opacity-100"
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Floating Icons Container */}
                                <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-zlendo-teal/5 rounded-full animate-ping-slow" />
                                    <div className="w-20 h-20 bg-zlendo-teal/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Upload className="w-10 h-10 text-zlendo-teal" />
                                    </div>

                                    {/* Orbiting File Types */}
                                    {[
                                        { label: 'JPG', angle: 0, color: 'bg-blue-100 text-blue-600' },
                                        { label: 'PDF', angle: 72, color: 'bg-red-100 text-red-600' },
                                        { label: 'DWG', angle: 144, color: 'bg-yellow-101 text-yellow-700' },
                                        { label: 'PNG', angle: 216, color: 'bg-green-100 text-green-600' },
                                        { label: 'DXF', angle: 288, color: 'bg-purple-100 text-purple-600' }
                                    ].map((file) => (
                                        <motion.div
                                            key={file.label}
                                            className={`absolute ${file.color} text-[10px] font-black px-2 py-1 rounded-md shadow-sm border border-white/50`}
                                            initial={{ x: 0, y: 0 }}
                                            animate={{
                                                x: Math.cos(file.angle * (Math.PI / 180)) * 60,
                                                y: Math.sin(file.angle * (Math.PI / 180)) * 60
                                            }}
                                            whileHover={{ scale: 1.2, zIndex: 10 }}
                                        >
                                            {file.label}
                                        </motion.div>
                                    ))}
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black font-nunito text-zlendo-grey-dark mb-4 group-hover:text-zlendo-teal transition-colors">
                                    Upload your floor plan
                                </h2>
                                <p className="text-lg text-slate-500 font-medium mb-8 max-w-lg">
                                    Drag & drop your 2D sketch, image, or CAD file here to instantly generate a 3D model.
                                </p>

                                <button className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-bold text-lg shadow-lg shadow-zlendo-teal/20 group-hover:scale-105 transition-transform flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5" /> Select File to Upload
                                </button>

                                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-400">
                                    <ShieldCheck className="w-4 h-4" /> Secure SSL Encryption
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. DARK 'HOW TO' SECTION */}
            <section className="bg-zlendo-grey-dark text-white py-12 lg:py-20 overflow-hidden">
                <div className="container-custom px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-10 bg-zlendo-teal opacity-20 blur-[80px] rounded-full" />
                            <img
                                src="/assets/2d-to-3d/dashboard-interface.png"
                                alt="Dashboard Interface"
                                className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-black font-nunito mb-6">
                                Master your design <br /> in minutes.
                            </h2>
                            <p className="text-xl text-white/60 mb-10 leading-relaxed font-medium">
                                Our intuitive interface makes complex tasks simple. Whether you are dragging walls or estimating costs, everything happens in real-time.
                            </p>
                            <a
                                href={SIGNUP_URL}
                                className="px-8 py-4 bg-zlendo-teal text-white rounded-xl font-black hover:bg-white hover:text-zlendo-teal transition-colors inline-block"
                            >
                                Create Project Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ZIG-ZAG STEPS */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="container-custom px-6 text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-black text-zlendo-grey-dark mb-4">How It Works</h2>
                    <p className="text-xl text-zlendo-grey-medium font-medium">Four simple steps to your dream result.</p>
                </div>

                <div className="container-custom px-6 space-y-24">
                    {product.steps?.map((step, i) => (
                        <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center group">
                            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zlendo-teal/10 text-zlendo-teal font-black text-xl mb-6 ring-4 ring-white shadow-lg">
                                    {i + 1}
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black text-zlendo-grey-dark mb-6">{step.title}</h3>
                                <p className="text-lg text-zlendo-grey-medium leading-relaxed font-medium mb-8">
                                    {step.desc}
                                </p>
                            </div>
                            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                                <div className="absolute inset-0 bg-slate-100 rounded-[3rem] transform rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-500" />
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="relative z-10 w-full rounded-[2rem] shadow-xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. FEATURES GRID */}
            <section className="py-12 bg-slate-50 border-y border-slate-200">
                <div className="container-custom px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {product.features.map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white mb-6 shadow-md`}>
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-black text-zlendo-grey-dark mb-3 leading-tight">{feature.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section className="py-16 bg-white">
                <div className="container-custom px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent"
                                >
                                    <span className="text-lg font-bold text-zlendo-grey-dark">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden bg-slate-50"
                                        >
                                            <p className="px-6 pb-6 pt-2 text-slate-600 font-medium leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVideoOpen(false)}
                        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video border border-white/10"
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/ttZcXOgmrNY?autoplay=1"
                                title="Product Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
