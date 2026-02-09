'use client';

import { motion } from 'framer-motion';

interface BlogHeroProps {
    title: string;
    subtitle?: string;
}

export default function BlogHero({ title, subtitle }: BlogHeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-zlendo-mint/40 via-white to-zlendo-teal/5 py-16 md:py-24 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-zlendo-teal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-zlendo-orange/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #00A884 1px, transparent 0)',
                backgroundSize: '40px 40px',
            }} />

            <div className="container-custom px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="inline-block px-4 py-1.5 bg-zlendo-teal/10 text-zlendo-teal text-sm font-bold uppercase tracking-wider rounded-full mb-6"
                    >
                        Our Blog
                    </motion.span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-nunito font-black text-zlendo-grey-dark mb-6 leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-zlendo-grey-medium opacity-80 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
