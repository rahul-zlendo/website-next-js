import Link from 'next/link';
import {
    ArrowRight,
    Award,
    BadgeCheck,
    BookOpenCheck,
    BrainCircuit,
    BriefcaseBusiness,
    CheckCircle2,
    CirclePlay,
    ClipboardCheck,
    FileCheck2,
    GraduationCap,
    Hourglass,
    Laptop,
    LockKeyhole,
    Presentation,
    QrCode,
    School,
    ShieldCheck,
    Trophy,
    Users,
} from 'lucide-react';

interface CertificationsPageProps {
    prefix?: '' | '/in';
}

const credentials = [
    {
        level: 'Level 01',
        title: 'Design Foundations',
        audience: 'Students beginning their AEC journey',
        icon: BookOpenCheck,
        description: 'Build confidence with essential digital-design concepts and the core Zlendo Realty workflow.',
        modules: ['Platform orientation', 'Responsible AI', 'Floor-planning fundamentals', '2D-to-3D workflow', 'Visualization basics'],
        assessment: 'Guided spatial-design project',
        accent: 'teal',
    },
    {
        level: 'Level 02',
        title: 'Spatial AI Designer',
        audience: 'Intermediate architecture and design students',
        icon: BrainCircuit,
        description: 'Use Spatial AI to explore, develop, visualize, and communicate design possibilities.',
        modules: ['AI-assisted layouts', 'Design iteration', 'Interiors and elevations', 'Rendering', 'Walkthrough storytelling'],
        assessment: 'Complete AI-assisted design submission',
        accent: 'orange',
    },
    {
        level: 'Level 03',
        title: 'Applied AEC Professional',
        audience: 'Advanced and final-year students',
        icon: BriefcaseBusiness,
        description: 'Demonstrate the ability to interpret a brief, make design decisions, and present a complete solution.',
        modules: ['Client requirements', 'Project planning', 'Design development', 'Professional visualization', 'Client presentation'],
        assessment: 'Architect-reviewed final project and presentation',
        accent: 'violet',
    },
    {
        level: 'Challenge credential',
        title: 'Innovation Challenge',
        audience: 'Future of AEC Day and Design Battle participants',
        icon: Trophy,
        description: 'Apply learning under time constraints through a practical problem statement and jury presentation.',
        modules: ['Surprise design brief', 'Timed development', 'Visual submission', 'Team presentation', 'Architect jury'],
        assessment: 'Challenge submission and jury evaluation',
        accent: 'blue',
    },
    {
        level: 'Faculty credential',
        title: 'Faculty Facilitator',
        audience: 'Educators integrating Zlendo Realty into teaching',
        icon: School,
        description: 'Prepare faculty to guide platform-supported assignments and connect academic outcomes to current AEC workflows.',
        modules: ['Faculty onboarding', 'Curriculum mapping', 'Project facilitation', 'Assessment rubrics', 'Responsible classroom AI'],
        assessment: 'Teaching plan and facilitated academic project',
        accent: 'slate',
    },
] as const;

const accentClasses = {
    teal: {
        line: 'bg-zlendo-teal',
        icon: 'bg-zlendo-teal/10 text-zlendo-teal',
        badge: 'bg-zlendo-teal/10 text-[#147c7a]',
    },
    orange: {
        line: 'bg-orange-500',
        icon: 'bg-orange-100 text-orange-600',
        badge: 'bg-orange-50 text-orange-700',
    },
    violet: {
        line: 'bg-violet-500',
        icon: 'bg-violet-100 text-violet-600',
        badge: 'bg-violet-50 text-violet-700',
    },
    blue: {
        line: 'bg-blue-500',
        icon: 'bg-blue-100 text-blue-600',
        badge: 'bg-blue-50 text-blue-700',
    },
    slate: {
        line: 'bg-slate-700',
        icon: 'bg-slate-100 text-slate-700',
        badge: 'bg-slate-100 text-slate-700',
    },
} as const;

const certificationSteps = [
    {
        number: '01',
        icon: CirclePlay,
        title: 'Learn',
        description: 'Complete structured video modules, demonstrations, and guided practice activities.',
    },
    {
        number: '02',
        icon: Laptop,
        title: 'Build',
        description: 'Apply the workflow to a defined academic or industry-inspired project brief.',
    },
    {
        number: '03',
        icon: ClipboardCheck,
        title: 'Demonstrate',
        description: 'Complete knowledge checks and submit the required project evidence.',
    },
    {
        number: '04',
        icon: Users,
        title: 'Get reviewed',
        description: 'Advanced credentials include evaluation by faculty or a Zlendo Realty architect.',
    },
    {
        number: '05',
        icon: BadgeCheck,
        title: 'Get recognized',
        description: 'Qualifying learners receive a downloadable and verifiable Zlendo Realty credential.',
    },
];

const plannedModules = [
    {
        code: '01',
        title: 'Welcome to Spatial Design',
        description: 'AEC technology, responsible AI, and how the certification journey works.',
        lessons: 'Video lessons + knowledge check',
    },
    {
        code: '02',
        title: 'Floor Planning Essentials',
        description: 'Read a requirement, organize space, and create a functional floor-plan foundation.',
        lessons: 'Demonstration + guided activity',
    },
    {
        code: '03',
        title: 'From 2D to 3D',
        description: 'Move from a drawing into an editable, reviewable spatial environment.',
        lessons: 'Workflow video + practice project',
    },
    {
        code: '04',
        title: 'AI-Assisted Design',
        description: 'Use AI thoughtfully to explore options while retaining design intent and judgment.',
        lessons: 'Use cases + responsible-AI quiz',
    },
    {
        code: '05',
        title: 'Visualize and Present',
        description: 'Develop renders, walkthroughs, and a presentation that communicates the solution.',
        lessons: 'Project walkthrough + final submission',
    },
    {
        code: '06',
        title: 'Certification Project',
        description: 'Combine the complete workflow in a project evaluated against a published rubric.',
        lessons: 'Submission + evaluation',
    },
];

const credentialRequirements = [
    {
        icon: CirclePlay,
        title: 'Learning completion',
        description: 'Finish every required course module and guided exercise.',
    },
    {
        icon: FileCheck2,
        title: 'Knowledge assessment',
        description: 'Meet the defined score for quizzes or knowledge checks.',
    },
    {
        icon: Laptop,
        title: 'Project evidence',
        description: 'Submit original project work demonstrating the required workflow.',
    },
    {
        icon: Presentation,
        title: 'Review or presentation',
        description: 'Complete faculty, architect, or jury review when required by the credential.',
    },
];

export const certificationFaqs = [
    {
        question: 'Are the certification courses available now?',
        answer: 'Not yet. The credential framework and course experience are being prepared. Video lessons, assessments, submission workflows, and certificate verification will be added before enrollment opens.',
    },
    {
        question: 'Will watching videos be enough to earn a certificate?',
        answer: 'No. Certificates will require completion of the learning modules and the defined assessment. Depending on the level, that may include knowledge checks, a project submission, a presentation, or architect review.',
    },
    {
        question: 'Can colleges include the credentials in their curriculum?',
        answer: 'Yes. Academic partners will be able to map suitable credentials to studio projects, practical subjects, capstones, or extracurricular learning. Final academic credit remains at the discretion of the institution.',
    },
    {
        question: 'Will certificates be verifiable?',
        answer: 'The planned certificate design includes a unique credential ID and verification method so institutions, students, and employers can confirm the credential details.',
    },
    {
        question: 'Are the credentials only for students?',
        answer: 'No. The planned pathway includes student credentials, challenge recognition, and a Faculty Facilitator credential for educators integrating Zlendo Realty into teaching.',
    },
    {
        question: 'How can a college register its interest?',
        answer: 'Use the contact link below and share your institution, department, programs, student cohorts, and preferred credentials. The team can include your college in certification-program updates and partnership planning.',
    },
];

export default function CertificationsPage({ prefix = '' }: CertificationsPageProps) {
    const contactPath = `${prefix}/contact`;
    const partnershipPath = `${prefix}/colleges/partnerships`;

    return (
        <div className="overflow-hidden bg-white font-nunito text-zlendo-grey-dark">
            <section className="relative isolate min-h-[720px] overflow-hidden bg-[#102b31] px-4 py-24 text-white md:py-32">
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_20%,rgba(34,163,161,0.38),transparent_34%),radial-gradient(circle_at_86%_76%,rgba(248,148,31,0.24),transparent_31%)]" />
                <div className="absolute inset-0 -z-10 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:48px_48px]" />

                <div className="container-custom mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
                    <div>
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 backdrop-blur-sm">
                            <Hourglass className="h-4 w-4 text-orange-300" />
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-100">Certification courses coming soon</span>
                        </div>

                        <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                            Learn the workflow.{' '}
                            <span className="block bg-gradient-to-r from-[#52d3cf] to-[#f8a43a] bg-clip-text text-transparent">Prove the capability.</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-xl font-black leading-8 text-white md:text-2xl">Build projects. Get assessed. Earn recognition.</p>
                        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-200">
                            A planned credential pathway for AEC students and faculty—combining structured learning, practical projects, transparent assessment, professional review, and verifiable certificates.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link href={contactPath} className="inline-flex items-center justify-center gap-2 rounded-full bg-zlendo-teal px-7 py-4 text-base font-black text-white shadow-xl shadow-black/20 transition-transform hover:-translate-y-1">
                                Register Institutional Interest <ArrowRight className="h-5 w-5" />
                            </Link>
                            <a href="#credentials" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-black text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                                Explore Planned Credentials <ArrowRight className="h-5 w-5 rotate-90" />
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="absolute -inset-10 rounded-full bg-zlendo-teal/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[36px] border border-white/20 bg-white p-7 text-zlendo-grey-dark shadow-2xl md:p-9">
                            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-zlendo-teal/10" />
                            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-orange-400/10" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zlendo-teal">Sample credential</p>
                                        <h2 className="mt-3 text-2xl font-black">Certificate of Capability</h2>
                                    </div>
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zlendo-teal/10 text-zlendo-teal"><Award className="h-8 w-8" /></div>
                                </div>

                                <div className="my-7 h-px bg-gradient-to-r from-zlendo-teal via-orange-300 to-transparent" />
                                <p className="text-sm font-semibold text-slate-500">This recognizes that</p>
                                <p className="mt-2 text-2xl font-black text-slate-800">Student Name</p>
                                <p className="mt-5 text-sm font-semibold text-slate-500">has demonstrated capability in</p>
                                <p className="mt-2 text-xl font-black text-zlendo-teal">Zlendo Realty Spatial AI Design</p>

                                <div className="mt-8 grid grid-cols-[1fr_auto] items-end gap-5 rounded-2xl bg-slate-50 p-5">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Credential ID</p>
                                        <p className="mt-1 text-sm font-black text-slate-700">ZR-EDU-SAMPLE</p>
                                        <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Status</p>
                                        <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-black text-zlendo-teal"><ShieldCheck className="h-4 w-4" /> Verifiable</p>
                                    </div>
                                    <QrCode className="h-16 w-16 text-slate-700" />
                                </div>
                                <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Design preview · not an issued certificate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="credentials" className="scroll-mt-28 px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Credential pathway</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Recognition that grows with the learner</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">The planned pathway separates foundational learning, applied Spatial AI skills, professional project capability, competition performance, and faculty enablement.</p>
                    </div>

                    <div className="mt-16 space-y-7">
                        {credentials.map((credential) => {
                            const colors = accentClasses[credential.accent];
                            return (
                                <article key={credential.title} className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
                                    <div className={`absolute inset-y-0 left-0 w-1.5 ${colors.line}`} />
                                    <div className="grid gap-9 lg:grid-cols-[.8fr_1.2fr]">
                                        <div>
                                            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.icon}`}><credential.icon className="h-7 w-7" /></div>
                                            <span className={`mt-6 inline-block rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] ${colors.badge}`}>{credential.level}</span>
                                            <h3 className="mt-4 text-3xl font-black tracking-tight">{credential.title}</h3>
                                            <p className="mt-2 text-sm font-black text-slate-400">{credential.audience}</p>
                                            <p className="mt-5 leading-7 text-slate-600">{credential.description}</p>
                                        </div>

                                        <div className="rounded-[26px] bg-slate-50 p-6 md:p-8">
                                            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Planned learning areas</p>
                                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                                {credential.modules.map((module) => (
                                                    <div key={module} className="flex gap-3 rounded-xl bg-white p-3.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zlendo-teal" /><p className="text-sm font-bold text-slate-700">{module}</p></div>
                                                ))}
                                            </div>
                                            <div className="mt-6 flex gap-3 border-t border-slate-200 pt-6">
                                                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-zlendo-teal" />
                                                <div><p className="text-[10px] font-black uppercase tracking-[0.18em] text-zlendo-teal">Required evidence</p><p className="mt-1 font-black text-slate-700">{credential.assessment}</p></div>
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
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600"><CirclePlay className="h-7 w-7" /></div>
                        <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Learning experience preview</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Course videos and assessments are coming next</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">The certification library will combine short lessons, workflow demonstrations, guided activities, knowledge checks, project submissions, and published evaluation criteria.</p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {plannedModules.map((module) => (
                            <article key={module.code} className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
                                <div className="relative flex aspect-video items-center justify-center bg-[#102b31]">
                                    <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:32px_32px]" />
                                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm"><LockKeyhole className="h-7 w-7" /></div>
                                    <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/80">Module {module.code}</span>
                                    <span className="absolute bottom-4 right-4 rounded-full bg-orange-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white">Coming soon</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-black">{module.title}</h3>
                                    <p className="mt-3 leading-7 text-slate-600">{module.description}</p>
                                    <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-black text-slate-400"><CirclePlay className="h-4 w-4" /> {module.lessons}</div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">How certification will work</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Completion alone is not capability</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">Each credential will define what the learner must understand, create, submit, and demonstrate.</p>
                    </div>

                    <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                        <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-zlendo-teal/40 to-transparent lg:block" />
                        {certificationSteps.map((step) => (
                            <article key={step.number} className="relative rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-sm">
                                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102b31] text-white"><step.icon className="h-6 w-6" /></div>
                                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-zlendo-teal">Step {step.number}</p>
                                <h3 className="mt-2 text-xl font-black">{step.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#102b31] px-4 py-20 text-white md:py-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,163,161,.22),transparent_33%)]" />
                <div className="container-custom relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-zlendo-teal/20 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#63d7d3]"><ShieldCheck className="h-4 w-4" /> Evidence-based credentials</div>
                        <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">Designed to verify what students can do</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-300">The goal is not simply to certify software usage. It is to recognize the ability to understand a brief, design, visualize, collaborate, and present an AEC project.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {credentialRequirements.map((requirement) => (
                            <article key={requirement.title} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#63d7d3]"><requirement.icon className="h-6 w-6" /></div>
                                <h3 className="mt-5 text-xl font-black">{requirement.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-300">{requirement.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f8f8] px-4 py-20 md:py-28">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="text-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-zlendo-teal">Frequently asked questions</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">About the planned certifications</h2>
                    </div>
                    <div className="mt-12 space-y-4">
                        {certificationFaqs.map((faq) => (
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
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15"><GraduationCap className="h-8 w-8" /></div>
                        <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-white/80">For academic partners</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Help shape the Zlendo Realty credential pathway.</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Share the skills, subjects, project types, and student levels that matter to your institution. We’ll include your needs in certification and academic-partnership planning.</p>
                        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href={contactPath} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-zlendo-teal shadow-xl transition-transform hover:-translate-y-1">Register Institutional Interest <ArrowRight className="h-5 w-5" /></Link>
                            <Link href={partnershipPath} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-black text-white">Explore Academic Partnerships</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
