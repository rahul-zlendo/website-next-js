'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FaqCategory } from '@/lib/helpcenter/types';

interface FaqAccordionProps {
    faqCategories: FaqCategory[];
}

export default function FaqAccordion({ faqCategories }: FaqAccordionProps) {
    const [activeCategory, setActiveCategory] = useState<number | null>(
        faqCategories.length > 0 ? faqCategories[0].id : null
    );
    const [openFaqId, setOpenFaqId] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const currentCategory = faqCategories.find((c) => c.id === activeCategory);

    return (
        <div className="space-y-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
                {faqCategories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat.id); setOpenFaqId(null); }}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat.id
                                ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/30'
                                : 'bg-white border border-black/10 text-zlendo-grey-medium hover:border-zlendo-teal/30 hover:text-zlendo-teal'
                            }`}
                    >
                        {cat.name} ({cat.count})
                    </button>
                ))}
            </div>

            {/* FAQ List */}
            {currentCategory && (
                <div className="space-y-3">
                    {currentCategory.faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="rounded-xl border border-black/5 bg-white overflow-hidden hover:border-zlendo-teal/20 transition-colors"
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex items-center gap-3 p-5 text-left"
                            >
                                <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${openFaqId === faq.id ? 'text-zlendo-teal' : 'text-zlendo-grey-medium'
                                    }`} />
                                <span className={`flex-1 font-semibold transition-colors ${openFaqId === faq.id ? 'text-zlendo-teal' : 'text-zlendo-grey-dark'
                                    }`}>
                                    {faq.question}
                                </span>
                                <ChevronDown className={`w-5 h-5 shrink-0 text-zlendo-grey-medium transition-transform duration-300 ${openFaqId === faq.id ? 'rotate-180' : ''
                                    }`} />
                            </button>

                            <AnimatePresence>
                                {openFaqId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="px-5 pb-5 pl-13 text-zlendo-grey-medium prose prose-sm max-w-none prose-a:text-zlendo-teal prose-a:no-underline hover:prose-a:underline"
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
