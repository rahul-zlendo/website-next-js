'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface ArticleSection {
  heading: string;
  subheading?: string;
  body: string;
}

export interface ArticleDefaults {
  articleType: 'guide' | 'explainer' | 'how-to';
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroCtaLabel?: string;
  keyTakeaways: string[];
  stats: Array<{ value: string; label: string }>;
  sections: ArticleSection[];
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle?: string;
  ctaTitleHighlight?: string;
  ctaBody?: string;
  ctaLabel?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string[];
}

interface ArticlePageClientProps {
  cms: any;
  slug: string;
  defaults: ArticleDefaults;
  signupUrl: string;
}

function get<T>(cms: any, defaults: ArticleDefaults, key: keyof ArticleDefaults): T {
  const cmsVal = cms?.[key];
  if (cmsVal !== null && cmsVal !== undefined && (Array.isArray(cmsVal) ? cmsVal.length > 0 : true)) {
    return cmsVal as T;
  }
  return defaults[key] as T;
}

function estimateReadingTime(sections: ArticleSection[]): number {
  const totalWords = sections.reduce((acc, s) => acc + (s.body?.split(' ').length ?? 0), 0);
  return Math.max(1, Math.ceil(totalWords / 200));
}

export default function ArticlePageClient({ cms, slug, defaults, signupUrl }: ArticlePageClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const heroBadge = get<string>(cms, defaults, 'heroBadge');
  const heroTitle = get<string>(cms, defaults, 'heroTitle');
  const heroTitleHighlight = get<string>(cms, defaults, 'heroTitleHighlight');
  const heroSubtitle = get<string>(cms, defaults, 'heroSubtitle');
  const heroCtaLabel = get<string | undefined>(cms, defaults, 'heroCtaLabel') ?? 'Try Zlendo Realty Free';
  const keyTakeaways = get<string[]>(cms, defaults, 'keyTakeaways') ?? [];
  const stats = get<Array<{ value: string; label: string }>>(cms, defaults, 'stats') ?? [];
  const sections = get<ArticleSection[]>(cms, defaults, 'sections') ?? [];
  const faqs = get<Array<{ question: string; answer: string }>>(cms, defaults, 'faqs') ?? [];
  const ctaTitle = get<string | undefined>(cms, defaults, 'ctaTitle') ?? 'Ready to Try Zlendo Realty?';
  const ctaTitleHighlight = get<string | undefined>(cms, defaults, 'ctaTitleHighlight');
  const ctaBody = get<string | undefined>(cms, defaults, 'ctaBody') ?? '14-day free trial. No credit card required.';
  const ctaLabel = get<string | undefined>(cms, defaults, 'ctaLabel') ?? 'Start Free Trial';

  const readingTime = estimateReadingTime(sections);

  return (
    <main className="min-h-screen bg-white text-zlendo-grey-dark font-nunito">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 to-zlendo-grey-dark text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
            {heroBadge}
          </span>
          <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito leading-[1.1] md:leading-[1.05] mb-4 tracking-tight md:tracking-tighter">
            {heroTitle}{' '}
            <span className="text-zlendo-teal">{heroTitleHighlight}</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-bold max-w-2xl mx-auto mb-6 leading-relaxed opacity-90">{heroSubtitle}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 font-bold mb-8">
            <span>By Zlendo Realty</span>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>
          <a
            href={signupUrl}
            className="inline-block bg-zlendo-teal hover:bg-teal-600 text-white font-black px-8 py-3.5 rounded-[20px] text-base transition-colors shadow-2xl shadow-zlendo-teal/30"
          >
            {heroCtaLabel}
          </a>
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      {keyTakeaways.length > 0 && (
        <section className="py-10 px-4 bg-amber-50 border-y border-amber-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-lg text-amber-800 mb-4 flex items-center gap-2">
              <span className="text-lg">★</span> Key Takeaways
            </h2>
            <ul className="space-y-2">
              {keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-base font-bold text-amber-900">
                  <span className="text-amber-600 font-black shrink-0 mt-0.5">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Stats Bar ── */}
      {stats.length > 0 && (
        <section className="py-12 px-4 bg-zlendo-grey-dark text-white">
          <div className="max-w-4xl mx-auto">
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 text-center`}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-black text-zlendo-teal mb-1">{stat.value}</div>
                  <div className="text-base font-bold text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Content Sections ── */}
      {sections.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-14">
              {sections.map((section, i) => (
                <article key={i}>
                  <h2 className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark mb-3">{section.heading}</h2>
                  {section.subheading && (
                    <h3 className="text-lg font-black text-zlendo-grey-medium mb-3">{section.subheading}</h3>
                  )}
                  <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="container-custom px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-center text-zlendo-grey-dark mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-transparent"
                  >
                    <span className="text-lg font-bold text-zlendo-grey-dark">{faq.question}</span>
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
                        <p className="px-6 pb-6 pt-2 text-zlendo-grey-medium font-medium leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-zlendo-teal text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black font-nunito mb-4">
            {ctaTitle}{ctaTitleHighlight && <> <span className="underline decoration-white/60">{ctaTitleHighlight}</span></>}
          </h2>
          {ctaBody && <p className="text-teal-100 mb-8 text-base md:text-lg font-bold leading-relaxed">{ctaBody}</p>}
          <a
            href={signupUrl}
            className="inline-block bg-white text-zlendo-teal font-black px-10 py-4 rounded-[20px] text-base md:text-lg hover:bg-gray-100 transition-colors shadow-2xl"
          >
            {ctaLabel}
          </a>
        </div>
      </section>
    </main>
  );
}
