'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
    q: string;
    a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
                    <button
                        type="button"
                        id={`faq-accordion-btn-${i}`}
                        aria-expanded={activeFaq === i}
                        aria-controls={`faq-accordion-panel-${i}`}
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-zlendo-teal"
                    >
                        <h3 className="text-lg font-bold text-zlendo-grey-dark m-0">{faq.q}</h3>
                        <ChevronDown className={`w-5 h-5 ml-4 flex-shrink-0 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeFaq === i && (
                            <motion.div
                                id={`faq-accordion-panel-${i}`}
                                role="region"
                                aria-labelledby={`faq-accordion-btn-${i}`}
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden bg-slate-50"
                            >
                                <p className="px-6 pb-6 pt-2 text-zlendo-grey-medium font-medium leading-relaxed">
                                    {faq.a}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
