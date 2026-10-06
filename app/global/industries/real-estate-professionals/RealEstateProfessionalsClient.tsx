'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight, Home, LayoutDashboard, MonitorPlay, Sofa,
    Image as ImageIcon, Target, Maximize, Zap, Sparkles, Box, PhoneCall, TrendingUp, Handshake, Users
} from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function RealEstateProfessionalsClient() {
    return (
        <div className="bg-white font-nunito selection:bg-zlendo-teal/20 selection:text-zlendo-teal overflow-hidden border-t border-slate-100">
            {/* HERO SECTION - Unique split design with blurred image background elements */}
            <section className="relative pt-10 pb-12 md:pt-16 md:pb-16 overflow-hidden bg-slate-900 border-b border-black/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zlendo-teal/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zlendo-teal/30 to-transparent" />

                <div className="container-custom px-4 relative z-10 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zlendo-teal/30 bg-zlendo-teal/10 mb-6 backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-teal-400" />
                                <span className="text-xs font-black tracking-widest text-teal-400 uppercase">For Agents & Brokers</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                AI Property Visualization for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zlendo-teal to-blue-400">Real Estate Professionals</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                                Show Properties. Inspire Buyers. Win More Attention.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="https://app.zlendorealty.com/signup" className="w-full sm:w-auto px-8 py-4 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-400 transition-all shadow-[0_10px_30px_rgba(45,212,191,0.2)] flex items-center justify-center gap-2">
                                    Make Your Listings Stand Out <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
                                    Talk to an Expert
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative w-full h-[400px] lg:h-[550px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700 group">
                            <Image src="/assets/global/interior-design-walkthrough-client.webp" alt="Real Estate Professional interacting with virtual property staging" fill priority className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none" />

                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-zlendo-teal flex items-center justify-center shrink-0">
                                        <Home className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-lg">Instant Property Transformation</p>
                                        <p className="text-slate-300 text-sm font-medium">From empty room to highly desirable listing.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INTRO: Visuals Make immense difference */}
            <section className="py-10 md:py-16 bg-white relative overflow-hidden">
                <div className="container-custom px-4 max-w-5xl mx-auto text-center">
                    <motion.div {...fadeUp} className="space-y-6">
                        <span className="text-teal-500 font-black tracking-widest uppercase text-sm">Property Visualization Tools</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Great Visuals Make the Difference Between Being Noticed and Being Overlooked</h2>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto">
                            Zlendo Realty helps real estate professionals transform floor plans, empty rooms, and property concepts into engaging visual experiences that help buyers and renters understand a space before they visit.
                        </p>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
                            Create 3D floor plans, virtually style interiors, generate realistic property visuals, and deliver immersive walkthrough experiences—all without depending on complex visualization processes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* THE CHALLENGE - Dark/Light asymmetric cards */}
            <section className="py-10 md:py-16 bg-slate-50 border-y border-slate-100">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <motion.div {...fadeUp} className="lg:col-span-5 relative h-[500px] rounded-[32px] overflow-hidden shadow-2xl group border border-slate-200">
                            <Image src="/assets/business/installation-guide.webp" alt="Comparing empty rooms to visualized styled rooms for real estate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Make Property Listings Easier to See, Understand, and Remember
                            </h3>
                            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                                <p>Today's property buyers expect more than a few photographs and a basic floor plan. They want to understand how a property looks, how spaces connect, how rooms could be furnished, and what it might feel like to live there.</p>
                                <p>For agents and brokers, however, creating high-quality visual content for every listing can be time-consuming and expensive. <strong className="text-slate-900">Zlendo Realty simplifies the process.</strong></p>
                                <div className="p-4 bg-teal-50 border border-teal-100 rounded-2xl relative text-slate-800 italic">
                                    <Zap className="absolute top-4 right-4 w-5 h-5 text-teal-400 opacity-50" />
                                    Our AI-powered property visualization tools help turn existing property information into compelling visual content that can be used across listings, presentations, property portals, social media, rental marketing, and buyer communications.
                                </div>
                                <p>Whether you're marketing a vacant apartment, presenting a new property, promoting a rental, or helping a buyer understand a floor plan, Zlendo Realty gives you more visual options without adding complicated production workflows.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* HOW ZLENDO HELPS - Dynamic masonry/bento grid feel */}
            <section className="py-10 md:py-16 bg-white">
                <div className="container-custom px-4 max-w-7xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-teal-500 font-black tracking-[0.2em] uppercase text-sm mb-4 block">How Zlendo Realty Helps</span>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">Turn Property Information Into Powerful Visual Experiences</h2>
                        <p className="text-lg text-slate-500 font-medium mt-4">Give your team AI-powered tools to create visual content throughout the property marketing journey.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "2D Floor Plans to 3D",
                                desc: "Transform traditional 2D floor plans into easier-to-understand 3D visualizations. Help prospects understand room layouts and spatial relationships.",
                                list: ["Understand layouts easily", "Explore different perspectives", "Visualize relationships", "See potential before visiting"],
                                icon: Box,
                                linkUrl: "/products/2d-to-3d",
                                linkText: "Explore 2D to 3D"
                            },
                            {
                                title: "Virtually Style Empty Rooms",
                                desc: "Give vacant spaces more visual appeal with AI. Show prospects how an empty room could look with furniture, décor, and different design approaches.",
                                list: ["Vacant properties", "Rental properties", "Unfurnished homes", "Pre-sale marketing"],
                                icon: Sofa,
                                linkUrl: "/products/room-styler",
                                linkText: "Explore Room Styler"
                            },
                            {
                                title: "Create Realistic Property Visuals",
                                desc: "Turn property concepts and spaces into realistic visuals that can strengthen your marketing materials and showcase the property atmosphere.",
                                list: ["Interiors & Exteriors", "Room designs", "Atmosphere & Vibe", "Furnishing possibilities"],
                                icon: ImageIcon,
                                linkUrl: "/products/realistic-renders",
                                linkText: "View Authentic Renders"
                            },
                            {
                                title: "Generate Immersive Walkthroughs",
                                desc: "Provide prospects with a more engaging way to explore a property remotely. Help buyers understand the flow and feel before navigating an in-person visit.",
                                list: ["Remote viewings", "Pre-visit filtering", "Digital property portals", "Buyer presentations"],
                                icon: MonitorPlay,
                                linkUrl: "/products/virtual-walkthrough",
                                linkText: "Experience Walkthroughs"
                            },
                            {
                                title: "Create Better Presentations",
                                desc: "Bring multiple visual assets together to create stronger presentations for buyers, sellers, landlords, and investors instead of relying solely on static photographs.",
                                list: ["Listing presentations", "Investor decks", "Landlord updates", "Client marketing packets"],
                                icon: LayoutDashboard,
                                linkUrl: "/business",
                                linkText: "Explore Business Solutions"
                            },
                            {
                                title: "Scale Your Marketing Efforts",
                                desc: "Repurpose your generated 3D visuals, walkthroughs, and styled rooms into high-converting campaigns to attract more buyers automatically.",
                                list: ["Social media campaigns", "Property portal listings", "Email newsletters", "Digital advertisements"],
                                icon: Target,
                                linkUrl: "/products",
                                linkText: "Explore Full Suite"
                            }
                        ].map((item, idx) => (
                            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="bg-slate-50 border border-slate-100 rounded-[28px] p-8 hover:border-teal-300 hover:bg-white hover:shadow-xl hover:shadow-teal-500/10 transition-all group flex flex-col h-full">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-teal-600 flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow">{item.desc}</p>
                                <div className="bg-white/60 p-4 rounded-xl border border-slate-100 mb-6">
                                    <ul className="space-y-2">
                                        {item.list.map((li, i) => (
                                            <li key={i} className="flex items-center gap-2 text-base text-slate-700 font-bold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" /> {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href={item.linkUrl} className="inline-flex items-center gap-2 text-teal-600 font-black hover:text-teal-700 transition-colors mt-auto">
                                    {item.linkText} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI VISUALIZATION TOOLS BUILT FOR RE - Dedicated Tool Sections */}
            <section className="py-10 md:py-16 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zlendo-teal/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="container-custom px-4 max-w-6xl mx-auto relative z-10">
                    <motion.div {...fadeUp} className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-teal-400 font-black tracking-widest uppercase text-sm mb-4 block">Product Suite</span>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight">AI Visualization Tools Built for Real Estate Professionals</h2>
                    </motion.div>

                    <div className="space-y-24">
                        {/* Tool 1 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div {...fadeUp} className="order-2 lg:order-1 relative h-[350px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                                <Image src="/assets/global/luxury-blueprint.webp" alt="2D to 3D Floor Plan Converter" fill className="object-cover" />
                            </motion.div>
                            <motion.div {...fadeUp} className="order-1 lg:order-2 space-y-6">
                                <h3 className="text-3xl font-black">2D to 3D Converter</h3>
                                <p className="text-xl text-teal-300 font-bold">Turn floor plans into visual property experiences.</p>
                                <p className="text-slate-300 leading-relaxed font-medium">Convert traditional 2D floor plans into 3D representations that make property layouts easier for prospects to understand. Perfect for residential listings, apartments, new developments, rental properties, and buyer presentations.</p>
                                <div className="bg-slate-800/50 p-4 border-l-2 border-teal-400 rounded-r-xl">
                                    <strong className="text-white block mb-1">Business Value:</strong>
                                    <span className="text-slate-400 text-sm">Help prospects understand properties faster and give your listings an additional visual asset beyond standard photography.</span>
                                </div>
                                <Link href="/products/2d-to-3d" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-colors">
                                    Convert Floor Plans to 3D <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Tool 2 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div {...fadeUp} className="space-y-6">
                                <h3 className="text-3xl font-black">Smart Room Styler</h3>
                                <p className="text-xl text-teal-300 font-bold">Show buyers what an empty room could become.</p>
                                <p className="text-slate-300 leading-relaxed font-medium">Use AI-powered room styling to transform empty or basic interiors into more visually engaging spaces. Demonstrate different furniture arrangements, styles, and room possibilities without physically staging the property.</p>
                                <div className="bg-slate-800/50 p-4 border-l-2 border-teal-400 rounded-r-xl">
                                    <strong className="text-white block mb-1">Business Value:</strong>
                                    <span className="text-slate-400 text-sm">Reduce dependence on physical staging while helping prospects visualize how a property could look when furnished.</span>
                                </div>
                                <Link href="/products/room-styler" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-colors">
                                    Explore Smart Room Styler <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div {...fadeUp} className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                                <Image src="/assets/global/luxury-living-room.webp" alt="Virtual Staging Smart Room Styler" fill className="object-cover" />
                            </motion.div>
                        </div>

                        {/* Tool 3 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div {...fadeUp} className="order-2 lg:order-1 relative h-[350px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                                <Image src="/assets/global/villa-night.webp" alt="Realistic Renders for Real Estate" fill className="object-cover" />
                            </motion.div>
                            <motion.div {...fadeUp} className="order-1 lg:order-2 space-y-6">
                                <h3 className="text-3xl font-black">Realistic Renders</h3>
                                <p className="text-xl text-teal-300 font-bold">Create realistic visuals that make properties easier to imagine.</p>
                                <p className="text-slate-300 leading-relaxed font-medium">Generate high-quality property visuals that communicate interiors, exteriors, materials, lighting, and atmosphere more effectively. Use across presentations, websites, advertisements, and social media.</p>
                                <div className="bg-slate-800/50 p-4 border-l-2 border-teal-400 rounded-r-xl">
                                    <strong className="text-white block mb-1">Business Value:</strong>
                                    <span className="text-slate-400 text-sm">Give prospects a stronger visual impression and create more professional-looking marketing content.</span>
                                </div>
                                <Link href="/products/realistic-renders" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-colors">
                                    Create Realistic Property Visuals <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Tool 4 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div {...fadeUp} className="space-y-6">
                                <h3 className="text-3xl font-black">Virtual Walkthrough</h3>
                                <p className="text-xl text-teal-300 font-bold">Let prospects experience properties remotely.</p>
                                <p className="text-slate-300 leading-relaxed font-medium">Create immersive walkthrough experiences that allow potential buyers and renters to explore a property digitally. Help prospects understand room connections and movement before arranging a physical viewing.</p>
                                <div className="bg-slate-800/50 p-4 border-l-2 border-teal-400 rounded-r-xl">
                                    <strong className="text-white block mb-1">Business Value:</strong>
                                    <span className="text-slate-400 text-sm">Make remote property exploration more engaging and help prospects make more informed decisions.</span>
                                </div>
                                <Link href="/products/virtual-walkthrough" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-colors">
                                    Create a Virtual Walkthrough <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div {...fadeUp} className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-black flex items-center justify-center">
                                <Image src="/assets/global/interior-design-walkthrough-client.webp" alt="Virtual Walkthrough for Real Estate Professionals" fill className="object-cover opacity-60" />
                                <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur border border-white/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">
                                    <MonitorPlay className="w-8 h-8 text-white ml-1" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Efficiency section */}
            <section className="py-10 md:py-16 bg-teal-50/50">
                <div className="container-custom px-4 max-w-6xl mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-teal-500 font-black tracking-widest uppercase text-sm block mb-4">Marketing Efficiency</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">Turn Better Property Visualization Into Better Marketing Efficiency</h2>
                        <p className="text-lg text-slate-600 font-medium">For real estate professionals, visualization isn't simply about making a property look attractive. It can help make the property marketing process more efficient.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: "Lower Visualization Costs", desc: "Reduce dependence on multiple external visualization workflows for every property.", icon: TrendingUp },
                            { title: "Faster Marketing Launches", desc: "Create additional visual assets quickly when properties come onto the market.", icon: Zap },
                            { title: "More Content From Assets", desc: "A single floor plan or property concept can become multiple visual marketing assets.", icon: Maximize },
                            { title: "Better Buyer Communication", desc: "Use visual content to explain properties instead of relying entirely on verbal descriptions.", icon: Users },
                            { title: "Content Reuse Opportunities", desc: "Assets support Portals → Website → Social → Presentations → Ads → Sales Materials.", icon: Target },
                            { title: "Maximize Overall ROI", desc: "Create more property marketing content without proportionally increasing workload.", icon: Sparkles }
                        ].map((item, idx) => (
                            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center group hover:border-teal-300 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 mx-auto bg-teal-50 rounded-xl text-teal-600 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-black text-slate-800 text-lg mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp} className="text-center">
                        <p className="text-slate-500 text-sm max-w-2xl mx-auto mb-6 italic">* Actual ROI will vary depending on property volume, workflows, visualization costs, and channels.</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 shadow-xl transition-all">
                            Talk to an Expert <PhoneCall className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* PARTNERSHIP CTA */}
            <section className="py-10 md:py-16 bg-white border-y border-slate-100 text-center">
                <div className="container-custom px-4 max-w-4xl mx-auto">
                    <motion.div {...fadeUp} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                        <Handshake className="w-8 h-8" />
                    </motion.div>
                    <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Partner With Zlendo Realty to Scale Property Visualization</motion.h2>
                    <motion.p {...fadeUp} className="text-lg text-slate-600 font-medium mb-10 leading-relaxed max-w-3xl mx-auto">
                        Whether you're an independent agent, growing brokerage, property consultant, or real estate marketing team, Zlendo Realty can support your property visualization needs. Create a more consistent visual workflow across your property portfolio.
                    </motion.p>
                    <motion.div {...fadeUp}>
                        <Link href="/partners" className="inline-flex items-center gap-2 px-10 py-5 bg-teal-500 text-white rounded-2xl font-black text-lg hover:bg-teal-400 hover:scale-105 shadow-[0_10px_30px_rgba(45,212,191,0.2)] transition-all">
                            Partner With Zlendo Realty <ArrowRight className="w-5 h-5" />
                        </Link>
                        <p className="mt-4 text-slate-500 font-bold">Let's build a more visual property marketing workflow for your business.</p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE REQUEST FINAL CTA - Floating Premium Component */}
            <section className="py-10 md:py-16 bg-slate-50">
                <div className="container-custom px-4 max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-10 md:p-16 text-center shadow-2xl shadow-slate-900/20 relative overflow-hidden border border-slate-700">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zlendo-teal/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                            <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                                Keep Your Property Marketing Moving Without Interruptions
                            </motion.h2>
                            <motion.p {...fadeUp} className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                                Property marketing doesn't stop. New listings arrive, properties change, campaigns launch, and buyers need information quickly. Zlendo Realty helps real estate professionals maintain a more efficient visualization workflow.
                            </motion.p>
                            <motion.p {...fadeUp} className="text-base text-slate-400 font-medium leading-relaxed pb-4">
                                Whether you're preparing one property or managing a growing portfolio, our visualization solutions can help you create more engaging property experiences without making visualization a bottleneck.
                            </motion.p>

                            <motion.div {...fadeUp}>
                                <h3 className="text-xl font-bold text-teal-400 mb-6 italic">Need help with your next property listing? Let's discuss your requirements.</h3>
                                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-zlendo-teal text-white rounded-2xl font-black text-lg hover:scale-105 hover:bg-teal-400 shadow-[0_10px_30px_rgba(45,212,191,0.3)] transition-all">
                                    Request a Visualization Service <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
