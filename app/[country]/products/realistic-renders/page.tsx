'use client';

import { useState } from 'react';
import {
    Sun,
    Moon,
    Camera,
    Image as ImageIcon,
    Sliders,
    Monitor,
    Layers,
    Clock,
    CheckCircle2,
    ArrowRight,
    Play,
    ChevronDown,
    Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SIGNUP_URL, designLibrary } from '@/lib/constants/urls';

const HumanEyeLevelImg = '/assets/realistic-renders/human-eye-level.jpg';
const InteriorImg = '/assets/realistic-renders/interior.jpg';
const DayImg = '/assets/realistic-renders/day_render.png';
const NightImg = '/assets/realistic-renders/night_render.png';

export default function RealisticRendersPage() {
    const [timeOfDay, setTimeOfDay] = useState<'morning' | 'day' | 'evening' | 'night'>('day');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    // Lighting simulation data
    const lightingStates = {
        morning: {
            bg: 'bg-orange-50',
            accent: 'text-orange-500',
            desc: 'Soft, warm morning light entering from the East.',
            img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2000'
        },
        day: {
            bg: 'bg-blue-50',
            accent: 'text-blue-500',
            desc: 'Bright, neutral daylight for true color accuracy.',
            img: DayImg
        },
        evening: {
            bg: 'bg-amber-50',
            accent: 'text-amber-600',
            desc: 'Golden hour warmth with dramatic long shadows.',
            img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2000'
        },
        night: {
            bg: 'bg-slate-900',
            accent: 'text-purple-400',
            desc: 'Artificial lighting ambience and exterior glow.',
            img: NightImg
        }
    };

    return (
        <div className={`font-nunito transition-colors duration-700 ${timeOfDay === 'night' ? 'bg-slate-950 text-white' : 'bg-white text-zlendo-grey-dark'}`}>
            <main>
                {/* 1. HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                    {/* Dynamic Background Image based on Time of Day */}
                    <div className="absolute inset-0 z-0 transition-opacity duration-1000">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2400"
                            className={`w-full h-full object-cover transition-all duration-1000 ${timeOfDay === 'night' ? 'opacity-30' : 'opacity-100'}`}
                            alt="Hero Background"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b ${timeOfDay === 'night' ? 'from-slate-950/80 via-slate-950/60 to-slate-950' : 'from-white/90 via-white/40 to-white/90'}`} />
                    </div>

                    <div className="container-custom px-4 relative z-10 w-full">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8 mx-auto"
                            >
                                <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">Next-Gen Rendering Engine</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8"
                            >
                                See Your Home<br />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${timeOfDay === 'night' ? 'from-purple-400 to-blue-400' : 'from-zlendo-teal to-blue-600'}`}>
                                    The Way It Will Really Look.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={`text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed ${timeOfDay === 'night' ? 'text-slate-300' : 'text-zlendo-grey-medium'}`}
                            >
                                Experience 8K photorealism with intelligent light simulation. No guesswork—just crystal clear, emotional visuals.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <a
                                    href={SIGNUP_URL}
                                    className={`px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-2 ${timeOfDay === 'night' ? 'bg-white text-slate-900' : 'bg-zlendo-teal text-white shadow-zlendo-teal/30'}`}
                                >
                                    Generate Photorealistic View <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href={designLibrary}
                                    className={`px-10 py-5 rounded-2xl font-bold text-xl border hover:bg-white/10 transition-all flex items-center gap-2 ${timeOfDay === 'night' ? 'text-white border-white/20' : 'bg-white text-zlendo-grey-dark border-slate-200'}`}
                                >
                                    <Play className="w-5 h-5 fill-current" /> View Gallery
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. TRUE PHOTOREALISM */}
                <section className={`py-20 overflow-hidden ${timeOfDay === 'night' ? 'bg-slate-900' : 'bg-white'}`}>
                    <div className="container-custom px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
                                <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=2000"
                                        alt="Photorealistic Living Room"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-white">
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Material Quality</div>
                                        <div className="font-black text-xl">Velvet & Marble Texture</div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="space-y-8">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg font-bold text-xs uppercase ${timeOfDay === 'night' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                    <Layers className="w-4 h-4" />
                                    <span>Core Differentiator</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                    Images that look like <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Photographs.</span>
                                </h2>
                                <p className={`text-xl font-medium leading-relaxed ${timeOfDay === 'night' ? 'text-slate-400' : 'text-zlendo-grey-medium'}`}>
                                    Forget cartoonish 3D models. Our advanced ray-tracing engine simulates how light interacts with real-world materials—capturing the softness of fabric, the sheen of hardwood, and the transparency of glass.
                                </p>

                                <ul className="space-y-6">
                                    {[
                                        { title: 'Physically Based Materials', desc: 'Imperfections, roughness, and reflection mapped accurately.' },
                                        { title: 'Global Illumination', desc: 'Light bounces naturally off walls and floors.' },
                                        { title: 'Depth of Field', desc: 'Cinematic focus blurring for artistic compositions.' }
                                    ].map((item, i) => (
                                        <motion.li
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            key={i}
                                            className="flex gap-4"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-500">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black mb-1">{item.title}</h4>
                                                <p className={`text-sm font-medium ${timeOfDay === 'night' ? 'text-slate-500' : 'text-slate-500'}`}>{item.desc}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CAMERA CONTROL */}
                <section className={`py-20 ${timeOfDay === 'night' ? 'bg-slate-950/50' : 'bg-slate-50'}`}>
                    <div className="container-custom px-4 text-center max-w-4xl mx-auto mb-16">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg font-bold text-xs uppercase mb-6 ${timeOfDay === 'night' ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                            <Camera className="w-4 h-4" />
                            <span>Professional Composition</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Good visualization is about <span className="text-purple-500">Perspective.</span></h2>
                        <p className={`text-xl font-medium ${timeOfDay === 'night' ? 'text-slate-400' : 'text-zlendo-grey-medium opacity-80'}`}>
                            Frame your rooms like a professional photographer. Control height, angle, and focal length to tell the right story.
                        </p>
                    </div>

                    <div className="container-custom px-4 grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Human Eye-Level', desc: 'Experience the room as if walking through it.', img: HumanEyeLevelImg },
                            { title: 'Wide Angle', desc: 'Capture the full scale of small spaces easily.', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800' },
                            { title: 'Top-Down Plan', desc: 'Understand flow and furniture layout clearly.', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800' }
                        ].map((cam, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`rounded-[32px] p-4 border transition-all ${timeOfDay === 'night' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-slate-100 hover:shadow-xl'}`}
                            >
                                <div className="h-48 rounded-2xl overflow-hidden mb-6">
                                    <img src={cam.img} alt={cam.title} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-black mb-2 px-2">{cam.title}</h3>
                                <p className={`text-sm px-2 ${timeOfDay === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>{cam.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 4. LIGHT & TIME SIMULATION */}
                <section className={`py-24 transition-colors duration-1000 ${lightingStates[timeOfDay].bg}`}>
                    <div className="container-custom px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg font-bold text-xs uppercase mb-6 bg-white/50 backdrop-blur-sm border border-black/5 ${lightingStates[timeOfDay].accent}`}>
                                    <Clock className="w-4 h-4" />
                                    <span>Time-of-day Simulation</span>
                                </div>
                                <h2 className={`text-4xl md:text-6xl font-black mb-6 leading-tight ${timeOfDay === 'night' ? 'text-white' : 'text-zlendo-grey-dark'}`}>
                                    Light Changes <br />
                                    <span className={lightingStates[timeOfDay].accent}>Everything.</span>
                                </h2>
                                <p className={`text-xl font-medium mb-10 ${timeOfDay === 'night' ? 'text-slate-300' : 'text-zlendo-grey-medium'}`}>
                                    Don't build in the dark. Simulate exactly how sunlight moves across your floor plan throughout the day.
                                </p>

                                {/* Time Toggles */}
                                <div className="space-y-4">
                                    <div className="text-sm font-black uppercase tracking-widest opacity-50 mb-4">Choose Your Moment</div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {(Object.keys(lightingStates) as Array<keyof typeof lightingStates>).map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setTimeOfDay(time)}
                                                className={`p-4 rounded-xl border-2 font-bold capitalize transition-all flex flex-col items-center gap-2 ${timeOfDay === time
                                                    ? 'border-current bg-white/20 shadow-lg scale-105 ' + lightingStates[time].accent
                                                    : 'border-transparent bg-black/5 hover:bg-black/10 text-slate-500'
                                                    }`}
                                            >
                                                {time === 'morning' && <Sun className="w-5 h-5" />}
                                                {time === 'day' && <Sun className="w-5 h-5" />}
                                                {time === 'evening' && <Sun className="w-5 h-5" />}
                                                {time === 'night' && <Moon className="w-5 h-5" />}
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                    <p className={`mt-6 p-6 rounded-2xl border font-medium text-lg italic transition-all ${timeOfDay === 'night' ? 'bg-white/10 border-white/10 text-slate-200' : 'bg-white border-white/50 text-slate-600'}`}>
                                        "{lightingStates[timeOfDay].desc}"
                                    </p>
                                </div>
                            </div>

                            <motion.div
                                key={timeOfDay}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="order-1 lg:order-2 relative"
                            >
                                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                                    <img
                                        src={lightingStates[timeOfDay].img}
                                        alt={`${timeOfDay} view`}
                                        className="w-full h-full object-cover aspect-square"
                                    />
                                </div>
                                <div className={`absolute -bottom-6 -left-6 px-8 py-4 rounded-2xl shadow-xl font-black text-xl backdrop-blur-xl border ${timeOfDay === 'night' ? 'bg-slate-800/80 text-white border-slate-700' : 'bg-white/90 text-zlendo-grey-dark border-white'}`}>
                                    {timeOfDay === 'night' ? 'Artificial Lighting ON' : 'Natural Sunlight'}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. RENDERING QUALITY */}
                <section className={`py-20 ${timeOfDay === 'night' ? 'bg-slate-900 border-t border-white/5' : 'bg-white border-t border-slate-100'}`}>
                    <div className="container-custom px-4 text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Quality for Every Purpose</h2>
                        <p className={`text-xl font-medium ${timeOfDay === 'night' ? 'text-slate-400' : 'text-zlendo-grey-medium'}`}>
                            Speed or Perfection? Choose the rendering tier that fits your workflow.
                        </p>
                    </div>

                    <div className="container-custom px-4 grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Preview Draft', res: '1K Resolution', time: '< 10 Seconds', use: 'Quick layout checks', icon: Monitor },
                            { title: 'Standard HD', res: '4K Resolution', time: '~ 2 Minutes', use: 'Client presentations', icon: ImageIcon },
                            { title: 'Ultra Photoreal', res: '8K Resolution', time: '~ 5 Minutes', use: 'Marketing & Print', icon: Sliders }
                        ].map((tier, i) => (
                            <div
                                key={i}
                                className={`p-8 rounded-[32px] border relative overflow-hidden group ${timeOfDay === 'night' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl ${timeOfDay === 'night' ? 'bg-white/10 text-white' : 'bg-white shadow-md text-zlendo-teal'}`}>
                                    <tier.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black mb-2">{tier.title}</h3>
                                <div className="text-sm font-bold opacity-60 uppercase tracking-widest mb-6">{tier.res}</div>

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-bold opacity-80">
                                        <Clock className="w-4 h-4" /> {tier.time}
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold opacity-80">
                                        <CheckCircle2 className="w-4 h-4" /> {tier.use}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. WHO THIS IS FOR */}
                <section className={`py-20 ${timeOfDay === 'night' ? 'bg-slate-950/50' : 'bg-slate-50'}`}>
                    <div className="container-custom px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-black mb-4">Who Needs This Level of Detail?</h2>
                                <div className="space-y-6">
                                    {[
                                        { role: 'Homeowners', desc: 'Secure peace of mind before buying expensive materials.' },
                                        { role: 'Architects', desc: 'Win client approvals faster with undeniable visuals.' },
                                        { role: 'Interior Designers', desc: 'Showcase mood, lighting, and texture accurately.' },
                                        { role: 'Real Estate Marketing', desc: 'Sell pre-construction properties with 8K visuals.' }
                                    ].map((user, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${timeOfDay === 'night' ? 'bg-white/10' : 'bg-white shadow-md'}`}>
                                                <div className={`w-3 h-3 rounded-full ${timeOfDay === 'night' ? 'bg-blue-400' : 'bg-zlendo-teal'}`} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black">{user.role}</h4>
                                                <p className={`text-sm ${timeOfDay === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>{user.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600" alt="Interior design" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Home design" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
                                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" alt="Living space" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                                    <img src={InteriorImg} alt="Interior style" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. FINAL CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className={`absolute inset-0 opacity-20 pointer-events-none ${timeOfDay === 'night' ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-zlendo-teal to-blue-500'}`} />
                    <div className="container-custom px-4 text-center relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                Ready to see your future home?
                            </h2>
                            <p className="text-xl md:text-2xl font-medium mb-12 opacity-80 max-w-2xl mx-auto">
                                Start capturing photorealistic memories of your design today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a
                                    href={SIGNUP_URL}
                                    className={`px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all text-center ${timeOfDay === 'night' ? 'bg-white text-slate-950' : 'bg-zlendo-teal text-white shadow-zlendo-teal/30'}`}
                                >
                                    Start Rendering Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 8. FAQ */}
                <section className={`py-16 ${timeOfDay === 'night' ? 'bg-slate-900 border-t border-white/5' : 'bg-white border-t border-slate-100'}`}>
                    <div className="container-custom px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-center mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className={`border rounded-2xl overflow-hidden transition-colors ${timeOfDay === 'night' ? 'border-white/10 hover:border-white/20' : 'border-slate-200 hover:border-slate-300'}`}>
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent"
                                    >
                                        <span className={`text-lg font-bold ${timeOfDay === 'night' ? 'text-white' : 'text-zlendo-grey-dark'}`}>{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden bg-white/5"
                                            >
                                                <p className={`px-6 pb-6 pt-2 font-medium leading-relaxed ${timeOfDay === 'night' ? 'text-slate-400' : 'text-slate-600'}`}>
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

            </main>
        </div>
    );
}

const faqs = [
    {
        q: "What are realistic renders?",
        a: "Realistic renders are high-quality 3D rendering images that closely resemble real photographs. They show how the final space is expected to look after completion."
    },
    {
        q: "Why are they useful?",
        a: "They help you visualize the final outcome before construction begins, improving clarity and confidence in design decisions through photorealistic 3D rendering."
    },
    {
        q: "Can I use them for marketing?",
        a: "Yes. These visuals are ideal for brochures, websites, and property listings, making them valuable for real estate design services and marketing presentations."
    },
    {
        q: "Do they include lighting and shadows?",
        a: "Yes. The renders simulate natural lighting, shadows, reflections, and textures, delivering highly detailed architectural 3D rendering services."
    },
    {
        q: "Can I generate renders for all rooms?",
        a: "Yes. You can create renders for any room or area individually, supporting complete residential 3D design services."
    },
    {
        q: "Can I download these images?",
        a: "Yes. All renders are downloadable and shareable, making them easy to use across digital and print platforms."
    }
];
