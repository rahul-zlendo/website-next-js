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
