import Link from 'next/link';
import {
    ArrowRight,
    Award,
    BrainCircuit,
    Building2,
    CheckCircle2,
    Clock3,
    GraduationCap,
    Hammer,
    Lightbulb,
    Medal,
    Presentation,
    Trophy,
    Users,
} from 'lucide-react';

interface WorkshopsPageProps {
    prefix?: '' | '/in';
}

const experiences = [
    {
        number: '01',
        timeOfDay: 'Morning',
        icon: BrainCircuit,
        title: 'Future of Design',
        subtitle: 'PropTech & Spatial AI',
        duration: '1.5–2 hours',
        description: 'An interactive industry session—not a lecture—that connects today’s classroom learning with the technologies reshaping architecture, engineering, and construction.',
        topics: [
            'Spatial AI',
            'Generative AI in architecture',
            'AI-assisted design',
            '2D-to-3D workflows',
            'Visualization',
            'Digital twins',
            'AI agents & MCP',
            'The future of AEC technology',
        ],
        outcome: 'Students understand emerging technologies they may not currently encounter in their curriculum.',
        accent: 'teal',
    },
    {
        number: '02',
        timeOfDay: 'Mid-day',
        icon: Hammer,
        title: 'Build with AI',
        subtitle: 'Hands-On Design Workshop',
        duration: '2.5–3 hours',
        description: 'Every participant receives a real-world client requirement and works through the design journey with guidance from Zlendo’s architect and Spatial AI/Product team.',
        topics: [
            'Client brief',
            'Floor plan',
            '3D development',
            'AI-assisted design',
            'Elevation or interior',
            'Rendering',
            'Walkthrough',
        ],
        outcome: 'Every participant creates something tangible during the workshop.',
        accent: 'orange',
    },
    {
        number: '03',
        timeOfDay: 'Afternoon',
        icon: Trophy,
        title: 'AI Design Challenge',
        subtitle: 'Create. Compete. Present.',
        duration: '2–2.5 hours',
        description: 'Students receive a surprise architectural problem statement and limited time to solve it using Zlendo Realty and what they learned during the day.',
        topics: [
            'Design',
            'Visualize',
            'Submit',
            'Top-team presentations',
            'Architect jury',
            'Winner recognition',
            'Participant certificates',
        ],
        outcome: 'Students apply the day’s learning to a practical problem and receive industry feedback.',
        accent: 'violet',
    },
] as const;

const dayTimeline = [
    {
        label: 'Morning',
        title: 'Future of Design',
        description: 'Discover what’s next',
        icon: BrainCircuit,
    },
    {
        label: 'Mid-day',
        title: 'Build with AI',
        description: 'Learn by doing',
        icon: Hammer,
    },
    {
        label: 'Afternoon',
        title: 'AI Design Challenge',
        description: 'Create. Compete. Present.',
        icon: Trophy,
    },
];

const differentiators = [
    {
        icon: Lightbulb,
        title: 'Industry context, not another lecture',
        description: 'Students see how Spatial AI, PropTech, digital twins, and AI agents connect to the future of AEC.',
    },
    {
        icon: Building2,
        title: 'A real requirement, not a feature demo',
        description: 'The central workshop is built around solving a client brief. Zlendo Realty is the design environment, while learning by building remains the focus.',
    },
    {
        icon: Users,
        title: 'Guidance from a multidisciplinary team',
        description: 'Zlendo’s architect and Spatial AI/Product team guide students through design decisions, technology, and presentation.',
    },
    {
        icon: Medal,
        title: 'Recognition and industry feedback',
        description: 'Participants receive certificates, top teams present to an architect jury, and winners receive dedicated recognition.',
    },
];

const faqs = [
    {
        question: 'What is Zlendo Realty – Future of AEC Day?',
        answer: 'It is a one-day college experience combining an interactive future-of-design session, a hands-on AI design workshop, and a timed innovation challenge. The program connects Spatial AI and PropTech concepts with practical design work.',
    },
    {
        question: 'Who is the program designed for?',
        answer: 'The experience is designed for students in architecture, interior design, civil engineering, construction, and related built-environment programs. We coordinate with the college to understand the participants’ level before the event.',
    },
    {
        question: 'Is this a Zlendo Realty product demonstration?',
        answer: 'No. Students use Zlendo Realty during the activities, but the focus is learning by building: interpreting a requirement, developing a design, visualizing it, and presenting the result.',
    },
    {
        question: 'What will students create?',
        answer: 'During the guided workshop, participants move from a client brief through floor planning, 3D development, AI-assisted design, elevation or interior work, rendering, and walkthrough creation. The exact brief can be aligned with the student group.',
    },
    {
        question: 'Are certificates included?',
        answer: 'Yes. The experience includes participant certificates, with additional recognition for the winning teams in the AI Design Challenge.',
    },
    {
        question: 'How can our college request a Future of AEC Day?',
        answer: 'Contact Zlendo Realty with your institution, department, student level, approximate participant count, facilities available, and preferred dates. Our team will coordinate the most suitable plan with your faculty.',
    },
];

const accentClasses = {
    teal: {
        icon: 'bg-zlendo-teal/10 text-zlendo-teal',
        chip: 'bg-zlendo-teal/10 text-[#147c7a]',
        line: 'bg-zlendo-teal',
    },
    orange: {
        icon: 'bg-orange-100 text-orange-600',
        chip: 'bg-orange-50 text-orange-700',
        line: 'bg-orange-500',
    },
    violet: {
        icon: 'bg-violet-100 text-violet-600',
        chip: 'bg-violet-50 text-violet-700',
        line: 'bg-violet-500',
    },
} as const;

export default function WorkshopsPage({ prefix = '' }: WorkshopsPageProps) {
    const contactPath = `${prefix}/contact`;

    return (
        <div className="overflow-hidden bg-white font-nunito text-zlendo-grey-dark">
            <section className="relative isolate min-h-[720px] overflow-hidden bg-[#102b31] px-4 py-24 text-white md:py-32">
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_20%,rgba(34,163,161,0.38),transparent_35%),radial-gradient(circle_at_86%_75%,rgba(248,148,31,0.24),transparent_30%)]" />
                <div className="absolute inset-0 -z-10 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />

                <div className="container-custom mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
                    <div>
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                            <GraduationCap className="h-4 w-4 text-[#52d3cf]" />
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-white/90">A one-day college experience</span>
                        </div>

                        <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#63d7d3] md:text-base">Zlendo Realty presents</p>
                        <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                            Future of
                            <span className="bg-gradient-to-r from-[#52d3cf] to-[#f8a43a] bg-clip-text text-transparent"> AEC Day</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-xl font-black leading-8 text-white md:text-2xl">
                            Spatial AI <span className="text-white/40">•</span> PropTech <span className="text-white/40">•</span> Hands-On Design <span className="text-white/40">•</span> Innovation Challenge
                        </p>
                        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-200">
                            One day that takes students from discovering the future of design to building with AI—and then applying what they learned in a high-energy architectural challenge.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href={contactPath}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-zlendo-teal px-7 py-4 text-base font-black text-white shadow-xl shadow-black/20 transition-transform hover:-translate-y-1"
                            >
                                Request a One-Day Workshop <ArrowRight className="h-5 w-5" />
                            </Link>
                            <a
                                href="#experience"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-black text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                            >
                                Explore the Experience <ArrowRight className="h-5 w-5 rotate-90" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="absolute -inset-8 rounded-full bg-zlendo-teal/20 blur-3xl" />
                        <div className="relative rounded-[36px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                            <div className="mb-7 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#52d3cf]">One-day journey</p>
                                    <h2 className="mt-2 text-2xl font-black">Discover → Build → Compete</h2>
                                </div>
                                <div className="rounded-2xl bg-white/10 p-3">
                                    <Presentation className="h-7 w-7 text-[#f8a43a]" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                {dayTimeline.map((item, index) => (
                                    <div key={item.title} className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zlendo-teal text-sm font-black">0{index + 1}</span>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#63d7d3]">{item.label}</p>
                                            <p className="mt-0.5 font-black text-slate-100">{item.title}</p>
                                            <p className="text-xs font-medium text-slate-300">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                                <Award className="h-6 w-6 shrink-0 text-[#f8a43a]" />
                                <p className="text-sm font-bold text-white/90">Participant certificates + winner recognition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="scroll-mt-28 px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">The one-day experience</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Three experiences. One connected journey.</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Each part builds on the one before it: understand emerging AEC technology, learn through a guided project, and apply the learning under challenge conditions.
                        </p>
                    </div>

                    <div className="mt-16 space-y-8">
                        {experiences.map((experience) => {
                            const colors = accentClasses[experience.accent];
                            return (
                                <article key={experience.number} className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:p-12">
                                    <div className={`absolute inset-x-0 top-0 h-1.5 ${colors.line}`} />
                                    <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
                                        <div>
                                            <div className="flex items-start justify-between gap-4">
                                                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colors.icon}`}>
                                                    <experience.icon className="h-8 w-8" />
                                                </div>
                                                <span className="text-6xl font-black text-slate-100 md:text-7xl">{experience.number}</span>
                                            </div>
                                            <p className="mt-7 text-xs font-black uppercase tracking-[0.22em] text-zlendo-teal">{experience.timeOfDay}</p>
                                            <h3 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{experience.title}</h3>
                                            <p className="mt-2 text-xl font-black text-slate-500">{experience.subtitle}</p>
                                            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600">
                                                <Clock3 className="h-4 w-4" /> {experience.duration}
                                            </div>
                                            <p className="mt-6 text-lg leading-8 text-slate-600">{experience.description}</p>
                                        </div>

                                        <div className="rounded-[26px] bg-slate-50 p-6 md:p-8">
                                            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">What students explore</p>
                                            <div className="mt-5 flex flex-wrap gap-2.5">
                                                {experience.topics.map((topic) => (
                                                    <span key={topic} className={`rounded-full px-3.5 py-2 text-sm font-bold ${colors.chip}`}>{topic}</span>
                                                ))}
                                            </div>
                                            <div className="mt-8 border-t border-slate-200 pt-7">
                                                <div className="flex gap-3">
                                                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-zlendo-teal" />
                                                    <div>
                                                        <p className="text-xs font-black uppercase tracking-[0.18em] text-zlendo-teal">Outcome</p>
                                                        <p className="mt-2 text-lg font-bold leading-7 text-slate-700">{experience.outcome}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f8f8] px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="grid items-start gap-14 lg:grid-cols-[.75fr_1.25fr]">
                        <div className="lg:sticky lg:top-32">
                            <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Why colleges choose it</p>
                            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">More than a workshop. A complete AEC learning day.</h2>
                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                The format is designed to introduce emerging technology without losing sight of design thinking, practical application, or student creativity.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            {differentiators.map((item) => (
                                <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zlendo-teal/10 p-3 text-zlendo-teal">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-black leading-7">{item.title}</h3>
                                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-6xl">
                    <div className="rounded-[38px] bg-[#102b31] p-8 text-white md:p-12 lg:p-14">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.85fr]">
                            <div>
                                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#63d7d3]">Built around “learn by building”</p>
                                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">One real-world client requirement. One complete design journey.</h2>
                                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                    Students do not simply watch Zlendo features. They make decisions, develop an idea, produce visuals, and communicate a solution while our team guides the process.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {['Brief', 'Floor plan', '3D', 'AI design', 'Elevation / Interior', 'Rendering', 'Walkthrough', 'Presentation'].map((step, index) => (
                                    <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#63d7d3]">Step {index + 1}</p>
                                        <p className="mt-1 font-black text-white">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f8f8] px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Frequently asked questions</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Planning your Future of AEC Day</h2>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 open:shadow-md">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black">
                                    {faq.question}
                                    <span className="text-2xl font-light text-zlendo-teal transition-transform group-open:rotate-45">+</span>
                                </summary>
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
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                            <GraduationCap className="h-8 w-8" />
                        </div>
                        <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-white/80">For colleges and universities</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Bring the Future of AEC Day to your campus.</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
                            Share your institution, department, student level, approximate participant count, facilities, and preferred dates. Zlendo Realty will coordinate the one-day workshop with your faculty team.
                        </p>
                        <Link
                            href={contactPath}
                            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-zlendo-teal shadow-xl transition-transform hover:-translate-y-1"
                        >
                            Request Future of AEC Day <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
