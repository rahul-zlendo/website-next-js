import {
    Box, Sparkles, Calculator, Ruler, Video, Cpu
} from 'lucide-react';

const UploadFloorplanImg = '/assets/upload-floorplan.png';

export const productData = {
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
