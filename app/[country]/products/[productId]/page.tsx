'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Box, Sparkles, Calculator, Ruler, Video, Cpu, ArrowRight,
    CheckCircle2, Play, Zap, Upload, Image as ImageIcon,
    ChevronDown, Star, ShieldCheck, ThumbsUp, X
} from 'lucide-react';
import { SIGNUP_URL } from '@/lib/constants/urls';
import { useCountry } from '@/lib/context/CountryContext';
// Images from public folder are referenced as /assets/... not @/public/assets/...
const DashboardInterfaceImg = '/assets/dashboard-interface.png';
const UploadFloorplanImg = '/assets/upload-floorplan.png';

// Extended Product Data to fit the new rich template
const productData = {
    '2d-to-3d': {
        title: 'Instant 2D to 3D Conversion',
        subtitle: 'The Best Free 2D Floor Planner & 3D Converter',
        headerDesc: 'Turn flat sketches into living spaces in seconds. Upload any floor plan image or PDF and watch our AI instantly construct a fully interactive 3D model.',
        icon: Box,
        gradient: 'from-blue-500 to-cyan-400',
        heroImage: 'https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&q=80&w=2400',
        tagline: 'Instant 3D Visualization',
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
                image: UploadFloorplanImg
            },
            {
                title: 'AI Processing',
                desc: 'Advanced algorithms convert lines and shapes into 3D walls, doors, and windows in seconds.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Furnish & Decorate',
                desc: 'Drag and drop furniture from our massive 3D library to style the room to your taste.',
                image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Render & Export',
                desc: 'Generate 4K renderings or export the model to other CAD software for further refinement.',
                image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
            }
        ]
    },
    'room-styler': {
        title: 'Smart Room Styler',
        subtitle: 'AI-driven interior design at your fingertips',
        headerDesc: 'Visualize different styles, furniture layouts, and color palettes instantly. Let AI be your personal interior designer.',
        icon: Sparkles,
        gradient: 'from-purple-500 to-pink-400',
        heroImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2400',
        tagline: 'AI-Powered Interior Styling',
        features: [
            { title: 'Style Transfer', desc: 'Apply "Modern", "Boho", or "Industrial" themes with one click.' },
            { title: 'Furniture Catalog', desc: 'Access 10,000+ real-world furniture items to place in your room.' },
            { title: 'Lighting Simulation', desc: 'See how your room looks at sunrise, sunset, or night.' },
            { title: 'Material Swapping', desc: 'Instantly change flooring, wall paints, and textures.' }
        ],
        steps: [
            {
                title: 'Select Room',
                desc: 'Choose an existing room model or upload a photo of your empty space.',
                image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Choose Style',
                desc: 'Select from our curated list of interior design styles or create your own custom mood board.',
                image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2400'
            },
            {
                title: 'AI Composition',
                desc: 'Our AI engine arranges furniture and decor to match the selected style perfectly.',
                image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Finalize Look',
                desc: 'Adjust individual items and generate a high-quality photorealistic image.',
                image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=800'
            }
        ]
    },
    'cost-estimator': {
        title: 'Smart Cost Estimator',
        subtitle: 'Know your budget before you build',
        headerDesc: 'Get precise, location-based cost estimates for your construction or renovation project. Avoid surprises and stay on budget.',
        icon: Calculator,
        gradient: 'from-emerald-500 to-green-400',
        heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2400',
        tagline: 'Engineering-Grade Accuracy',
        features: [
            { title: 'Dynamic BOQ', desc: 'Generate a detailed Bill of Quantities automatically.' },
            { title: 'Local Pricing', desc: 'Material and labor rates calibrated to your specific city.' },
            { title: 'Scenario Planning', desc: 'Compare costs for different finishes and materials instantly.' },
            { title: 'Vendor Matching', desc: 'Connect with local suppliers who match your estimated budget.' }
        ],
        steps: [
            {
                title: 'Input Project Details',
                desc: 'Enter the area size, location, and type of construction or renovation.',
                image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Select Finishes',
                desc: 'Choose your preferred quality of materials (Economy, Premium, Luxury).',
                image: 'https://images.unsplash.com/photo-1621293954908-05d45d35e23a?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Calculate Cost',
                desc: 'Our engine computes labor, material, and overhead costs in real-time.',
                image: 'https://images.unsplash.com/photo-1554224154-260327c00c40?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Download Report',
                desc: 'Get a comprehensive PDF report to share with contractors or banks.',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
            }
        ]
    },
    'vastu': {
        title: 'Vastu Optimizer',
        subtitle: 'Align your home with ancient wisdom',
        headerDesc: 'Combine modern design with Vastu Shastra principles. Our automated analysis ensures your home brings health, wealth, and melody.',
        icon: Ruler,
        gradient: 'from-amber-500 to-orange-400',
        heroImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=2400',
        tagline: 'Vastu-Compliant Design Logic',
        features: [
            { title: 'Energy Mapping', desc: 'Visual heatmap of Vastu zones in your floor plan.' },
            { title: 'Remedy Suggestions', desc: 'Non-destructive fixes for existing Vastu defects.' },
            { title: 'Directional Check', desc: 'Precise compass alignment using satellite data.' },
            { title: 'Scorecard', desc: 'Get a Vastu compliance score for every room.' }
        ],
        steps: [
            {
                title: 'Upload Floor Plan',
                desc: 'Upload your layout and orient it towards North.',
                image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Analyze',
                desc: 'AI scans the placement of rooms, doors, and furniture.',
                image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'View Issues',
                desc: 'Identify problem areas affecting health or wealth.',
                image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800'
            },
            {
                title: 'Apply Remedies',
                desc: 'Implement suggested changes and improved layout.',
                image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800'
            }
        ]
    },
    'vr-studio': {
        title: '8K VR Studio',
        subtitle: 'Experience your future home today',
        headerDesc: 'Step inside your design with hyper-realistic VR. Compatible with Meta Quest, Apple Vision Pro, and web browsers.',
        icon: Video,
        gradient: 'from-indigo-500 to-violet-400',
        heroImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=2400',
        tagline: 'Next-Gen Real Estate Visualization',
        features: [
            { title: 'Immersive Walkthrough', desc: 'Full 6DOF movement within your designed space.' },
            { title: 'Material Swapping', desc: 'Change floors and walls in real-time while in VR.' },
            { title: 'Cloud Rendering', desc: 'Stream high-fidelity visuals without a powerful PC.' },
            { title: 'Multi-User', desc: 'Invite clients to walk through the design with you.' }
        ],
        steps: [
            { title: 'Import Model', desc: 'Load your 3D model into our VR engine.', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800' },
            { title: 'Configure Environment', desc: 'Set lighting, weather, and time of day.', image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff8c367?auto=format&fit=crop&q=80&w=800' },
            { title: 'Generate Link', desc: 'Create a shareable web link for instant access.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
            { title: 'Enter VR', desc: 'Put on your headset and step inside.', image: 'https://images.unsplash.com/photo-1626387200548-bf8ed410ebc3?auto=format&fit=crop&q=80&w=800' }
        ]
    },
    'api-suite': {
        title: 'Zlendo Realty API Suite',
        subtitle: 'Power your prop-tech platform',
        headerDesc: 'Integrate our core 2D-to-3D, costing, and styling engines directly into your own applications.',
        icon: Cpu,
        gradient: 'from-slate-800 to-slate-600',
        heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2400',
        tagline: 'Enterprise API Solutions',
        features: [
            { title: 'Restful API', desc: 'Easy to integrate endpoints with comprehensive documentation.' },
            { title: 'White Label', desc: 'Serve the experience under your own brand identity.' },
            { title: 'Scalable Infrastructure', desc: 'Built to handle millions of requests securely.' },
            { title: 'Webhooks', desc: 'Real-time event notifications for your app.' }
        ],
        steps: [
            { title: 'Get API Key', desc: 'Sign up and generate your secure API credentials.', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800' },
            { title: 'Read Docs', desc: 'Explore our interactive API documentation.', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800' },
            { title: 'Connect', desc: 'Use our SDKs to connect your app to Zlendo Realty.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800' },
            { title: 'Go Live', desc: 'Launch your powered-up application to the world.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
        ]
    }
};

const faqs = [
    { q: "Is this tool free to use?", a: "Yes! You can start for free and design your first project without any credit card. Premium textuers and high-res renders are available in paid plans." },
    { q: "Do I need to install any software?", a: "No, Zlendo Realty runs entirely in your browser. It works smoothly on Chrome, Firefox, and Safari on both Windows and Mac." },
    { q: "Can I import my own CAD files?", a: "Absolutely. We support DXF, DWG, JPG, PNG, and PDF formats for seamless import." },
    { q: "How accurately are the costs estimated?", a: "Our cost engine is updated weekly with local market rates for materials and labor, ensuring 95%+ accuracy for your zip code." }
];

export default function ProductPage() {
    const { getPath } = useCountry();
    const router = useRouter();
    const params = useParams();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const productId = params.productId as string;
    const product = productData[productId as keyof typeof productData];

    useEffect(() => {
        if (!product) {
            router.push(`/${params.country}`);
        }
    }, [product, router, params.country]);

    if (!product) return null;

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
                            {product.tagline && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8"
                                >
                                    <Sparkles className="w-4 h-4 text-zlendo-teal animate-pulse" />
                                    <span className="text-xs font-black uppercase tracking-widest text-zlendo-grey-dark">{product.tagline}</span>
                                </motion.div>
                            )}

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
                                        { label: 'DWG', angle: 144, color: 'bg-yellow-100 text-yellow-700' },
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
                                src={DashboardInterfaceImg}
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
                                {i === 0 && (
                                    <a href={SIGNUP_URL} className="text-zlendo-teal font-black hover:underline flex items-center gap-2">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                                <div className="absolute inset-0 bg-slate-100 rounded-[3rem] transform rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-500" />
                                <img
                                    src={typeof step.image === 'string' ? step.image : (step.image as { src: string }).src}
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

            {/* 6. TEMPLATES GALLERY (Static Placeholder) */}
            <section className="py-16 bg-white">
                <div className="container-custom px-6">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-black text-zlendo-grey-dark mb-2">Popular Templates</h2>
                            <p className="text-slate-500 font-medium">Get started quickly with pre-made designs</p>
                        </div>
                        <Link href={getPath('/template-detail')} className="text-zlendo-teal font-black hover:underline hidden md:block">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <Link href={getPath('/template-detail')} key={item} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                                <img
                                    src={`https://images.unsplash.com/photo-${item === 1 ? '1600607687939-ce8a6c25118c' : item === 2 ? '1600566753190-17f0baa2a6c3' : '1600210492486-724fe5c67fb0'}?auto=format&fit=crop&q=80&w=800`}
                                    alt="Template"
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Modern Apartment {item}</h4>
                                        <div className="text-xs font-black bg-white text-black px-3 py-1 rounded mt-2 inline-block">Edit Template</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. COMPARISON TABLE */}
            <section className="py-16 bg-slate-50">
                <div className="container-custom px-6 max-w-5xl">
                    <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-10">Compare with others</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b-2 border-slate-200 w-1/3">Features</th>
                                    <th className="p-4 border-b-2 border-zlendo-teal text-zlendo-teal font-black text-xl text-center shadow-[0_4px_0_0_rgba(13,148,136,0.1)] bg-white rounded-t-xl">Zlendo Realty</th>
                                    <th className="p-4 border-b-2 border-slate-200 text-slate-400 font-bold text-center">Typical CAD</th>
                                    <th className="p-4 border-b-2 border-slate-200 text-slate-400 font-bold text-center">Agencies</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600 font-medium">
                                {[
                                    ['Time to Result', '30 Seconds', 'Hours', 'Days'],
                                    ['Ease of Use', 'Beginner Friendly', 'Expert', 'None'],
                                    ['Cost', 'Free to Start', '$$$', '$$$$'],
                                    ['AI Assistance', 'Included', 'Plugin needed', 'N/A'],
                                    ['Cloud Storage', 'Unlimited', 'Local', 'Mixed']
                                ].map(([feat, us, them1, them2], idx) => (
                                    <tr key={idx} className="hover:bg-white transition-colors">
                                        <td className="p-4 border-b border-slate-200 font-bold text-slate-800">{feat}</td>
                                        <td className="p-4 border-b border-slate-200 text-center font-black text-zlendo-teal bg-white border-x border-slate-100">{us}</td>
                                        <td className="p-4 border-b border-slate-200 text-center text-slate-400">{them1}</td>
                                        <td className="p-4 border-b border-slate-200 text-center text-slate-400">{them2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
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

            {/* 9. FINAL CTA */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container-custom px-6 text-center">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-[3rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-black font-nunito mb-6">Start designing for free</h2>
                            <p className="text-xl text-white/80 font-medium mb-10">
                                Join over 4 million users who are already designing their dream homes with Zlendo Realty.
                            </p>
                            <a
                                href={SIGNUP_URL}
                                className="px-10 py-5 bg-white text-blue-600 rounded-xl font-black text-xl hover:shadow-lg hover:scale-105 transition-all inline-block"
                            >
                                Create Free Account
                            </a>
                        </div>
                        {/* Decor */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400 opacity-20 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2" />
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
                                src="https://www.youtube.com/embed/ttZcXOgmrNY?si=owt_VUM5YrmjDIYx&autoplay=1"
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

// Note: Since this is a client component ('use client'), metadata should be handled in a layout.tsx file
// or via useEffect to update document.title and meta tags dynamically
