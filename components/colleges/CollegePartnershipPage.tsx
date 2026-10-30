import Link from 'next/link';
import {
    ArrowRight,
    Award,
    BookOpenCheck,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    FlaskConical,
    GraduationCap,
    Handshake,
    Laptop,
    LayoutDashboard,
    Lightbulb,
    MonitorPlay,
    Presentation,
    School,
    ShieldCheck,
    Sparkles,
    Trophy,
    Users,
    Waypoints,
    Wrench,
    Zap,
} from 'lucide-react';

interface CollegePartnershipPageProps {
    prefix?: '' | '/in';
}

const studentJourney = [
    {
        year: 'Year 1',
        phase: 'Discover',
        title: 'Build digital foundations',
        description: 'Understand PropTech, Spatial AI, responsible AI, client requirements, floor-planning fundamentals, and digital visualization.',
        outcome: 'Create a first guided spatial-design project.',
        icon: Lightbulb,
        accent: 'teal',
    },
    {
        year: 'Year 2',
        phase: 'Create',
        title: 'Model and visualize',
        description: 'Move through 2D-to-3D workflows, AI-assisted layouts, interiors, exteriors, elevations, rendering, and walkthroughs.',
        outcome: 'Turn design concepts into presentation-ready 3D work.',
        icon: Wrench,
        accent: 'orange',
    },
    {
        year: 'Year 3',
        phase: 'Collaborate',
        title: 'Solve practical problems',
        description: 'Work in teams on industry-inspired briefs, multidisciplinary studios, design reviews, digital twins, and innovation challenges.',
        outcome: 'Defend design decisions and respond to professional feedback.',
        icon: Users,
        accent: 'violet',
    },
    {
        year: 'Final Year',
        phase: 'Practice',
        title: 'Prepare for professional work',
        description: 'Strengthen capstones and portfolios through architect reviews, selected live briefs, final presentations, and industry showcases.',
        outcome: 'Graduate with reviewed, portfolio-ready project experience.',
        icon: BriefcaseBusiness,
        accent: 'blue',
    },
] as const;

const accentClasses = {
    teal: {
        icon: 'bg-zlendo-teal/10 text-zlendo-teal',
        badge: 'bg-zlendo-teal/10 text-[#147c7a]',
        border: 'border-zlendo-teal/30',
        dot: 'bg-zlendo-teal',
    },
    orange: {
        icon: 'bg-orange-100 text-orange-600',
        badge: 'bg-orange-50 text-orange-700',
        border: 'border-orange-200',
        dot: 'bg-orange-500',
    },
    violet: {
        icon: 'bg-violet-100 text-violet-600',
        badge: 'bg-violet-50 text-violet-700',
        border: 'border-violet-200',
        dot: 'bg-violet-500',
    },
    blue: {
        icon: 'bg-blue-100 text-blue-600',
        badge: 'bg-blue-50 text-blue-700',
        border: 'border-blue-200',
        dot: 'bg-blue-500',
    },
} as const;

const partnershipPillars = [
    {
        icon: Laptop,
        title: 'Academic Platform Access',
        description: 'Institution-linked access for students and faculty to create, visualize, collaborate, and present academic projects with Zlendo Realty.',
    },
    {
        icon: BookOpenCheck,
        title: 'Curriculum Integration',
        description: 'Semester briefs, assignment templates, learning paths, evaluation rubrics, and curriculum-mapping support for faculty.',
    },
    {
        icon: MonitorPlay,
        title: 'Continuous Learning',
        description: 'College webinars, Future of AEC Day, year-specific workshops, technology updates, and access to recorded learning sessions.',
    },
    {
        icon: Handshake,
        title: 'Architect Mentorship',
        description: 'Project reviews, office hours, design critiques, and guidance from Zlendo Realty architects and Spatial AI/Product specialists.',
    },
    {
        icon: Award,
        title: 'Skills & Recognition',
        description: 'Structured project milestones, completion certificates, challenge recognition, digital showcases, and portfolio development.',
    },
    {
        icon: Waypoints,
        title: 'Industry Pathways',
        description: 'Selected live-project exposure, capstone collaboration, research opportunities, and consideration for internships or project roles.',
    },
];

const annualCalendar = [
    {
        icon: Laptop,
        label: 'Academic opening',
        title: 'Platform onboarding',
        description: 'Faculty and student setup, orientation, and the first guided project.',
    },
    {
        icon: MonitorPlay,
        label: 'Each semester',
        title: 'Webinars & skill clinics',
        description: 'Emerging AEC topics, workflow updates, and focused practical sessions.',
    },
    {
        icon: GraduationCap,
        label: 'By student level',
        title: 'Year-specific workshops',
        description: 'Learning experiences designed around each cohort’s academic maturity.',
    },
    {
        icon: Zap,
        label: 'Annual flagship',
        title: 'Future of AEC Day',
        description: 'Spatial AI, hands-on design, and an architect-juried innovation challenge.',
    },
    {
        icon: Presentation,
        label: 'Project milestones',
        title: 'Reviews & capstone clinics',
        description: 'Structured feedback from faculty, architects, and product specialists.',
    },
    {
        icon: Trophy,
        label: 'Year-end',
        title: 'Showcase & recognition',
        description: 'Design Battle, student exhibitions, certificates, and project awards.',
    },
];

const projectWorkflow = [
    'Client brief',
    'Research & planning',
    'Design development',
    '3D visualization',
    'Architect review',
    'Presentation & reflection',
];

const benefitGroups = [
    {
        icon: GraduationCap,
        audience: 'For students',
        title: 'Build confidence through practice',
        benefits: [
            'Use modern Spatial AI and PropTech workflows',
            'Create portfolio-ready academic projects',
            'Receive architect and industry feedback',
            'Collaborate on multidisciplinary challenges',
            'Gain exposure to selected professional briefs',
        ],
    },
    {
        icon: Presentation,
        audience: 'For faculty',
        title: 'Bring industry context into teaching',
        benefits: [
            'Curriculum and assignment-mapping support',
            'Faculty onboarding and train-the-trainer sessions',
            'Reusable briefs, tutorials, and assessment resources',
            'Access to emerging-technology briefings',
            'A direct feedback channel with Zlendo Realty',
        ],
    },
    {
        icon: School,
        audience: 'For institutions',
        title: 'Create a visible innovation ecosystem',
        benefits: [
            'Structured student engagement across academic years',
            'Industry-supported workshops and project reviews',
            'Student showcases and co-branded initiatives',
            'Research and innovation collaboration opportunities',
            'Measurable participation and project outcomes',
        ],
    },
];

const partnershipModels = [
    {
        name: 'Academic Access Partner',
        description: 'A strong starting point for platform-led classroom learning.',
        icon: Laptop,
        features: [
            'Student and faculty platform access',
            'Digital onboarding and tutorials',
            'Recorded webinars and learning resources',
            'Guided starter projects',
            'Completion recognition',
        ],
    },
    {
        name: 'Academic Studio Partner',
        description: 'A continuous, curriculum-connected learning partnership.',
        icon: Building2,
        featured: true,
        features: [
            'Everything in Academic Access',
            'Curriculum-mapping support',
            'Year-specific workshops',
            'Future of AEC Day',
            'Architect project reviews',
            'Design Battle and student showcase',
        ],
    },
    {
        name: 'Strategic Innovation Partner',
        description: 'A deeper collaboration for advanced projects and innovation.',
        icon: FlaskConical,
        features: [
            'Everything in Academic Studio',
            'Capstone collaboration',
            'Selected live-project opportunities',
            'Research and co-innovation initiatives',
            'Student ambassador program',
            'Innovation Lab or Centre of Excellence pathway',
        ],
    },
];

export const collegePartnershipFaqs = [
    {
        question: 'Which academic programs can participate?',
        answer: 'The partnership is designed for architecture, civil engineering, interior design, construction, real estate, and related AEC programs. The learning pathway can be adapted to degree, diploma, and postgraduate cohorts.',
    },
    {
        question: 'Does Zlendo Realty replace the college curriculum?',
        answer: 'No. Zlendo Realty supports the existing curriculum by connecting academic concepts with digital workflows, practical projects, visualization, collaboration, and industry feedback. Faculty remain responsible for academic delivery and assessment.',
    },
    {
        question: 'Can the partnership be adapted to a three-year or semester-based program?',
        answer: 'Yes. The first-year-to-final-year pathway is a flexible framework. Zlendo Realty and the faculty team can map relevant activities to the institution’s actual program length, subjects, and learning outcomes.',
    },
    {
        question: 'Will every student work on a live client project?',
        answer: 'Live-project opportunities are selective and depend on project availability, client permission, student readiness, faculty involvement, and confidentiality requirements. Simulated industry briefs can be used when a live project is not suitable.',
    },
    {
        question: 'Are internships or placements guaranteed?',
        answer: 'No. High-performing students may be considered for available internships, project roles, mentorship programs, or talent referrals, but participation in the academic partnership does not guarantee employment or placement.',
    },
    {
        question: 'How does a college begin the partnership?',
        answer: 'The college can submit its institution, department, student cohorts, approximate participant count, facilities, academic goals, and preferred timeline. Zlendo Realty will then recommend a suitable partnership model and implementation roadmap.',
    },
];

export default function CollegePartnershipPage({ prefix = '' }: CollegePartnershipPageProps) {
    const contactPath = `${prefix}/contact`;
    const workshopPath = `${prefix}/colleges/workshops`;

    return (
        <div className="overflow-hidden bg-white font-nunito text-zlendo-grey-dark">
            <section className="relative isolate min-h-[760px] overflow-hidden bg-[#102b31] px-4 py-24 text-white md:py-32">
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(34,163,161,0.38),transparent_34%),radial-gradient(circle_at_85%_78%,rgba(248,148,31,0.24),transparent_31%)]" />
                <div className="absolute inset-0 -z-10 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:48px_48px]" />

                <div className="container-custom mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
                    <div>
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                            <Handshake className="h-4 w-4 text-[#63d7d3]" />
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-white/90">Zlendo Realty Academic Partnership</span>
                        </div>

                        <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                            From first year to{' '}
                            <span className="block bg-gradient-to-r from-[#52d3cf] to-[#f8a43a] bg-clip-text text-transparent">first client.</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-xl font-black leading-8 text-white md:text-2xl">Learn. Build. Collaborate. Graduate industry-ready.</p>
                        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-200">
                            Make Spatial AI, PropTech, and real-world design workflows part of every AEC student’s academic journey—with one platform connecting classroom projects, continuous learning, architect mentorship, and professional exposure.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link href={contactPath} className="inline-flex items-center justify-center gap-2 rounded-full bg-zlendo-teal px-7 py-4 text-base font-black text-white shadow-xl shadow-black/20 transition-transform hover:-translate-y-1">
                                Become an Academic Partner <ArrowRight className="h-5 w-5" />
                            </Link>
                            <a href="#journey" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-black text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                                Explore the Student Journey <ArrowRight className="h-5 w-5 rotate-90" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="absolute -inset-10 rounded-full bg-zlendo-teal/20 blur-3xl" />
                        <div className="relative rounded-[36px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                            <div className="mb-7 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#63d7d3]">The academic journey</p>
                                    <h2 className="mt-2 text-2xl font-black">One platform. Every year.</h2>
                                </div>
                                <div className="rounded-2xl bg-white/10 p-3"><GraduationCap className="h-7 w-7 text-[#f8a43a]" /></div>
                            </div>

                            <div className="relative space-y-3 before:absolute before:bottom-8 before:left-[21px] before:top-8 before:w-px before:bg-white/20">
                                {studentJourney.map((item, index) => (
                                    <div key={item.year} className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                                        <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zlendo-teal text-sm font-black">0{index + 1}</span>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#63d7d3]">{item.year}</p>
                                            <p className="font-black text-white">{item.phase}</p>
                                            <p className="truncate text-xs font-medium text-slate-300">{item.title}</p>
                                        </div>
                                        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/35" />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-zlendo-teal/30 to-orange-400/20 p-4">
                                <Sparkles className="h-6 w-6 shrink-0 text-[#f8a43a]" />
                                <p className="text-sm font-bold text-white/90">Projects become skills. Skills become portfolios. Portfolios open possibilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">The partnership ecosystem</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">More than platform access</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">A continuous academic system connecting technology, curriculum, faculty, industry professionals, practical projects, and student recognition.</p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {partnershipPillars.map((pillar, index) => (
                            <article key={pillar.title} className="group relative rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-zlendo-teal/30 hover:shadow-xl">
                                <span className="absolute right-6 top-5 text-5xl font-black text-slate-50">0{index + 1}</span>
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-zlendo-teal/10 text-zlendo-teal transition-transform group-hover:scale-110">
                                    <pillar.icon className="h-7 w-7" />
                                </div>
                                <h3 className="relative mt-6 text-xl font-black">{pillar.title}</h3>
                                <p className="relative mt-3 leading-7 text-slate-600">{pillar.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="journey" className="scroll-mt-28 bg-[#f4f8f8] px-4 py-20 md:py-28">
                <div className="container-custom mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[.72fr_1.28fr]">
                    <div className="lg:sticky lg:top-32">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">First year to graduation</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">A learning pathway that grows with the student</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">The four-stage framework can be mapped to four-year, three-year, diploma, postgraduate, or semester-based programs.</p>
                        <div className="mt-8 rounded-2xl border border-zlendo-teal/20 bg-zlendo-teal/5 p-5">
                            <div className="flex gap-3">
                                <LayoutDashboard className="mt-0.5 h-5 w-5 shrink-0 text-zlendo-teal" />
                                <p className="text-sm font-bold leading-6 text-slate-700">Faculty retain control of academic delivery and assessment. Zlendo Realty strengthens the curriculum with workflows, projects, resources, and industry context.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative space-y-6 before:absolute before:bottom-12 before:left-6 before:top-12 before:w-px before:bg-slate-300 md:before:left-8">
                        {studentJourney.map((item, index) => {
                            const colors = accentClasses[item.accent];
                            return (
                                <article key={item.year} className={`relative ml-4 rounded-[30px] border bg-white p-7 shadow-sm md:ml-8 md:p-9 ${colors.border}`}>
                                    <span className={`absolute -left-[25px] top-10 h-4 w-4 rounded-full border-4 border-[#f4f8f8] md:-left-[41px] ${colors.dot}`} />
                                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${colors.icon}`}><item.icon className="h-7 w-7" /></div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] ${colors.badge}`}>{item.year}</span>
                                                <span className="text-sm font-black text-slate-400">{item.phase}</span>
                                            </div>
                                            <h3 className="mt-4 text-2xl font-black md:text-3xl">{item.title}</h3>
                                            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                                            <div className="mt-5 flex gap-3 border-t border-slate-100 pt-5">
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-zlendo-teal" />
                                                <p className="font-bold text-slate-700"><span className="text-zlendo-teal">Outcome:</span> {item.outcome}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Always-on engagement</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">A visible rhythm throughout the academic year</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">The final calendar is agreed with each institution, replacing occasional events with a predictable learning journey.</p>
                    </div>

                    <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-zlendo-teal/30 to-transparent lg:block" />
                        {annualCalendar.map((item, index) => (
                            <article key={item.title} className="relative rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102b31] text-white"><item.icon className="h-6 w-6" /></div>
                                    <span className="text-4xl font-black text-slate-100">0{index + 1}</span>
                                </div>
                                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-zlendo-teal">{item.label}</p>
                                <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link href={workshopPath} className="inline-flex items-center gap-2 font-black text-zlendo-teal hover:underline">Explore Future of AEC Day <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#102b31] px-4 py-20 text-white md:py-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,163,161,.22),transparent_33%)]" />
                <div className="container-custom relative mx-auto max-w-7xl">
                    <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-orange-400/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-300"><ShieldCheck className="h-4 w-4" /> Selective professional exposure</div>
                            <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">Work alongside Zlendo Realty architects</h2>
                            <p className="mt-5 text-lg leading-8 text-slate-300">Eligible students can contribute to suitable live or industry-simulated briefs under faculty and professional supervision.</p>
                            <div className="mt-7 space-y-3">
                                {['Project availability and student readiness', 'Faculty supervision and defined responsibilities', 'Client consent, confidentiality, and IP safeguards', 'Portfolio use only with appropriate permission'].map((item) => (
                                    <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#63d7d3]" /><p className="font-medium text-slate-200">{item}</p></div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[34px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#63d7d3]">Guided project workflow</p>
                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {projectWorkflow.map((step, index) => (
                                    <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zlendo-teal text-xs font-black">0{index + 1}</span>
                                        <p className="font-black text-white">{step}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-sm font-medium leading-6 text-slate-400">Live-project participation is not guaranteed and depends on project suitability, availability, approvals, and selection criteria.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f8f8] px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Shared value</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Designed for the whole academic ecosystem</h2>
                    </div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        {benefitGroups.map((group) => (
                            <article key={group.audience} className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zlendo-teal/10 text-zlendo-teal"><group.icon className="h-7 w-7" /></div>
                                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-zlendo-teal">{group.audience}</p>
                                <h3 className="mt-2 text-2xl font-black">{group.title}</h3>
                                <div className="mt-6 space-y-4">
                                    {group.benefits.map((benefit) => (
                                        <div key={benefit} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-zlendo-teal" /><p className="text-sm font-semibold leading-6 text-slate-600">{benefit}</p></div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Partnership pathways</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Start at the level that fits your institution</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">Final scope, delivery frequency, access, and commercial terms are agreed with each academic partner.</p>
                    </div>

                    <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
                        {partnershipModels.map((model) => (
                            <article key={model.name} className={`relative flex flex-col rounded-[32px] border p-7 md:p-8 ${model.featured ? 'border-zlendo-teal bg-[#102b31] text-white shadow-2xl lg:-translate-y-4' : 'border-slate-200 bg-white text-zlendo-grey-dark shadow-sm'}`}>
                                {model.featured && <span className="absolute right-6 top-6 rounded-full bg-zlendo-teal px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white">Recommended</span>}
                                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${model.featured ? 'bg-white/10 text-[#63d7d3]' : 'bg-zlendo-teal/10 text-zlendo-teal'}`}><model.icon className="h-7 w-7" /></div>
                                <h3 className="mt-7 text-2xl font-black">{model.name}</h3>
                                <p className={`mt-3 leading-7 ${model.featured ? 'text-slate-300' : 'text-slate-600'}`}>{model.description}</p>
                                <div className={`my-7 h-px ${model.featured ? 'bg-white/10' : 'bg-slate-100'}`} />
                                <div className="space-y-4">
                                    {model.features.map((feature) => (
                                        <div key={feature} className="flex gap-3"><CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${model.featured ? 'text-[#63d7d3]' : 'text-zlendo-teal'}`} /><p className={`text-sm font-semibold leading-6 ${model.featured ? 'text-slate-200' : 'text-slate-600'}`}>{feature}</p></div>
                                    ))}
                                </div>
                                <Link href={contactPath} className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-black ${model.featured ? 'bg-zlendo-teal text-white' : 'bg-slate-100 text-zlendo-grey-dark hover:bg-zlendo-teal hover:text-white'}`}>Discuss this pathway <ArrowRight className="h-4 w-4" /></Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f8f8] px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Frequently asked questions</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Planning an academic partnership</h2>
                    </div>
                    <div className="mt-12 space-y-4">
                        {collegePartnershipFaqs.map((faq) => (
                            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-md">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black">{faq.question}<span className="text-2xl font-light text-zlendo-teal transition-transform group-open:rotate-45">+</span></summary>
                                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 md:py-28">
                <div className="container-custom relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-br from-zlendo-teal to-[#136b75] px-6 py-16 text-center text-white shadow-2xl md:px-12 md:py-20">
                    <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border-[32px] border-white/10" />
                    <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[36px] border-white/10" />
                    <div className="relative z-10 mx-auto max-w-3xl">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15"><Handshake className="h-8 w-8" /></div>
                        <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-white/80">Build a continuous academic journey</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Prepare the next generation of AEC professionals.</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Tell us about your institution, programs, student cohorts, facilities, academic goals, and preferred timeline. We’ll recommend a partnership roadmap that fits.</p>
                        <Link href={contactPath} className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-zlendo-teal shadow-xl transition-transform hover:-translate-y-1">Become a Zlendo Realty Academic Partner <ArrowRight className="h-5 w-5" /></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
