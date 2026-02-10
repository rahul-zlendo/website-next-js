'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Layers, Cpu, Eye, Home, PenTool, Monitor, HelpCircle, Settings, Compass } from 'lucide-react';
import type { HelpCategory } from '@/lib/helpcenter/types';

// Map category slugs to icons
const categoryIcons: Record<string, React.ElementType> = {
    'editor': PenTool,
    '2d-drawing-editing': Layers,
    '3d-editing-viewing': Eye,
    'ai-inspiration': Cpu,
    'vastu': Compass,
    'render': Monitor,
    'general': HelpCircle,
    'getting-started': Home,
    'faq': HelpCircle,
    'dashboard': Settings,
};

// Map category slugs to colors
const categoryColors: Record<string, string> = {
    'editor': 'from-blue-500/10 to-blue-600/5 text-blue-600 border-blue-200/50',
    '2d-drawing-editing': 'from-violet-500/10 to-violet-600/5 text-violet-600 border-violet-200/50',
    '3d-editing-viewing': 'from-emerald-500/10 to-emerald-600/5 text-emerald-600 border-emerald-200/50',
    'ai-inspiration': 'from-amber-500/10 to-amber-600/5 text-amber-600 border-amber-200/50',
    'vastu': 'from-orange-500/10 to-orange-600/5 text-orange-600 border-orange-200/50',
    'render': 'from-cyan-500/10 to-cyan-600/5 text-cyan-600 border-cyan-200/50',
    'general': 'from-slate-500/10 to-slate-600/5 text-slate-600 border-slate-200/50',
    'dashboard': 'from-rose-500/10 to-rose-600/5 text-rose-600 border-rose-200/50',
};

const defaultColor = 'from-zlendo-teal/10 to-zlendo-teal/5 text-zlendo-teal border-zlendo-teal/20';

interface CategoryGridProps {
    categories: HelpCategory[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
                const IconComponent = categoryIcons[category.slug] || BookOpen;
                const colorClass = categoryColors[category.slug] || defaultColor;

                return (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                    >
                        <Link
                            href={`/help-center/category/${category.slug}`}
                            className={`group block p-6 rounded-2xl bg-gradient-to-br ${colorClass} border hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shrink-0 shadow-sm">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-zlendo-grey-dark mb-1 group-hover:text-zlendo-teal transition-colors">
                                        {category.name}
                                    </h3>
                                    {category.description && (
                                        <p className="text-sm text-zlendo-grey-medium line-clamp-2 mb-3">
                                            {category.description}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-zlendo-grey-medium">
                                            {category.count} {category.count === 1 ? 'article' : 'articles'}
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-zlendo-grey-medium group-hover:text-zlendo-teal group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </div>

                            {/* Subcategories preview */}
                            {category.subcategories && category.subcategories.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-black/5">
                                    <div className="flex flex-wrap gap-2">
                                        {category.subcategories.slice(0, 3).map((sub) => (
                                            <span
                                                key={sub.id}
                                                className="text-xs px-2.5 py-1 bg-white/60 rounded-full text-zlendo-grey-medium"
                                            >
                                                {sub.name}
                                            </span>
                                        ))}
                                        {category.subcategories.length > 3 && (
                                            <span className="text-xs px-2.5 py-1 bg-white/60 rounded-full text-zlendo-grey-medium">
                                                +{category.subcategories.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
}
