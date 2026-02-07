import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface CaseStudySectionProps {
    data: {
        title: string;
        subtitle: string;
        icon: ComponentType<{ className?: string }>;
        challenge: {
            title: string;
            description: string;
        };
        solution: {
            title: string;
            description: string;
        };
        stats: Array<{
            label: string;
            value: string;
        }>;
        image: string;
    };
    accentColorClass: string;
    bgAccentClass: string;
    reverse?: boolean;
}

export default function CaseStudySection({ data, accentColorClass, bgAccentClass, reverse = false }: CaseStudySectionProps) {
    return (
        <section className="section-padding py-12 relative overflow-hidden">
            <div className="container-custom">
                <div className={`grid lg:grid-cols-2 gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`relative group ${reverse ? 'lg:order-last' : ''}`}
                    >
                        <div className={`absolute -inset-4 bg-${accentColorClass}/10 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                        <div className="relative rounded-[60px] overflow-hidden border border-black/5 shadow-2xl shadow-black/[0.05]">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-10 left-10 py-3 px-6 bg-white/90 backdrop-blur-md rounded-2xl flex items-center gap-3 border border-black/5 shadow-xl">
                                <data.icon className={`w-4 h-4 text-${accentColorClass}`} />
                                <span className="text-sm font-black text-zlendo-grey-dark uppercase tracking-widest">{data.title}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl bg-${accentColorClass}/10 flex items-center justify-center text-${accentColorClass}`}>
                                    <Quote className="w-6 h-6" />
                                </div>
                                <span className={`text-sm font-black text-${accentColorClass} uppercase tracking-[0.3em]`}>{data.subtitle}</span>
                            </div>
                            <h2 className="text-5xl font-black font-nunito text-zlendo-grey-dark leading-tight tracking-tight">
                                Addressing the <span className={`text-${accentColorClass} italic`}>Gap.</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className={`p-8 rounded-[40px] ${bgAccentClass} border border-${accentColorClass}/10`}>
                                <h4 className="text-xs font-black uppercase tracking-widest text-zlendo-grey-medium mb-4">The Challenge</h4>
                                <p className="text-lg text-zlendo-grey-medium font-medium leading-relaxed">
                                    {data.challenge.description}
                                </p>
                            </div>

                            <div className="p-8 rounded-[40px] bg-white border border-black/5 shadow-xl shadow-black/[0.02]">
                                <h4 className={`text-xs font-black uppercase tracking-widest text-${accentColorClass} mb-4`}>The Solution</h4>
                                <p className="text-lg text-zlendo-grey-dark font-medium leading-relaxed">
                                    {data.solution.description}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {data.stats.map((stat, idx) => (
                                <div key={idx} className={`p-6 rounded-3xl ${idx === 0 ? `bg-${accentColorClass} text-white` : 'bg-zlendo-grey-dark text-white'} flex flex-col justify-center`}>
                                    <span className="text-3xl font-black font-nunito">{stat.value}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
