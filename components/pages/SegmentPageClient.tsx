'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface SegmentDefaults {
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroCtaLabel?: string;
  painPointsTitle: string;
  painPoints: Array<{ title: string; desc: string; iconName: string }>;
  featuresTitle: string;
  features: Array<{ title: string; desc: string }>;
  workflowTitle: string;
  workflowSteps: Array<{ step: string; title: string; desc: string }>;
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaBody: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string[];
}

interface SegmentPageClientProps {
  cms: any;
  slug: string;
  defaults: SegmentDefaults;
  signupUrl: string;
}

// Simple icon map using emoji/text representations
const ICON_MAP: Record<string, string> = {
  Clock: '⏱',
  Compass: '🧭',
  Package: '📦',
  Users: '👥',
  Zap: '⚡',
  TrendingUp: '📈',
  FileText: '📄',
  Eye: '👁',
  Calculator: '🧮',
  Star: '★',
  CheckCircle: '✓',
  AlertCircle: '⚠',
};

function getIcon(iconName: string): string {
  return ICON_MAP[iconName] ?? '●';
}

function get<T>(cms: any, defaults: SegmentDefaults, key: keyof SegmentDefaults): T {
  const cmsVal = cms?.[key];
  if (cmsVal !== null && cmsVal !== undefined && (Array.isArray(cmsVal) ? cmsVal.length > 0 : true)) {
    return cmsVal as T;
  }
  return defaults[key] as T;
}

export default function SegmentPageClient({ cms, slug, defaults, signupUrl }: SegmentPageClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const heroBadge = get<string>(cms, defaults, 'heroBadge');
  const heroTitle = get<string>(cms, defaults, 'heroTitle');
  const heroTitleHighlight = get<string>(cms, defaults, 'heroTitleHighlight');
  const heroSubtitle = get<string>(cms, defaults, 'heroSubtitle');
  const heroCtaLabel = get<string | undefined>(cms, defaults, 'heroCtaLabel') ?? 'Start Free Trial';
  const painPointsTitle = get<string>(cms, defaults, 'painPointsTitle');
  const painPoints = get<SegmentDefaults['painPoints']>(cms, defaults, 'painPoints') ?? [];
  const featuresTitle = get<string>(cms, defaults, 'featuresTitle');
  const features = get<SegmentDefaults['features']>(cms, defaults, 'features') ?? [];
  const workflowTitle = get<string>(cms, defaults, 'workflowTitle');
  const workflowSteps = get<SegmentDefaults['workflowSteps']>(cms, defaults, 'workflowSteps') ?? [];
  const stats = get<Array<{ value: string; label: string }>>(cms, defaults, 'stats') ?? [];
  const faqs = get<Array<{ question: string; answer: string }>>(cms, defaults, 'faqs') ?? [];
  const ctaTitle = get<string>(cms, defaults, 'ctaTitle');
  const ctaBody = get<string>(cms, defaults, 'ctaBody');

  return (
    <main className="min-h-screen bg-white text-zlendo-grey-dark font-nunito">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-zlendo-grey-dark to-slate-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-zlendo-teal text-white text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
            {heroBadge}
          </span>
          <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito leading-[1.1] md:leading-[1.05] mb-4 tracking-tight md:tracking-tighter">
            {heroTitle}{' '}
            <span className="text-zlendo-teal">{heroTitleHighlight}</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-bold max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">{heroSubtitle}</p>
          <a
            href={signupUrl}
            className="inline-block bg-zlendo-teal hover:bg-teal-600 text-white font-black px-10 py-4 rounded-[20px] text-base md:text-lg transition-colors shadow-2xl shadow-zlendo-teal/30"
          >
            {heroCtaLabel}
          </a>
        </div>
      </section>

      {/* ── Pain Points ── */}
      {painPoints.length > 0 && (
        <section className="py-16 px-4 bg-red-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black font-nunito text-center mb-10 text-zlendo-grey-dark">{painPointsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((point, i) => (
                <div key={i} className="bg-white border border-red-100 rounded-[24px] p-6 shadow-sm">
                  <div className="text-3xl mb-4">{getIcon(point.iconName)}</div>
                  <h3 className="font-black text-lg text-zlendo-grey-dark mb-2">{point.title}</h3>
                  <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Features ── */}
      {features.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black font-nunito text-center mb-10 text-zlendo-grey-dark">{featuresTitle}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-[20px] border border-gray-100">
                  <div className="w-8 h-8 bg-zlendo-teal rounded-full flex items-center justify-center text-white text-sm font-black shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-zlendo-grey-dark mb-1">{feature.title}</h3>
                    <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Workflow ── */}
      {workflowSteps.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black font-nunito text-center mb-12 text-zlendo-grey-dark">{workflowTitle}</h2>
            <div className="relative">
              {workflowSteps.map((step, i) => (
                <div key={i} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-zlendo-teal text-white rounded-full flex items-center justify-center font-black text-sm shrink-0">
                      {step.step}
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-teal-200 mt-2 min-h-[2rem]" />
                    )}
                  </div>
                  <div className="pb-8 last:pb-0">
                    <h3 className="font-black text-lg text-zlendo-grey-dark mb-1">{step.title}</h3>
                    <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Stats ── */}
      {stats.length > 0 && (
        <section className="py-14 px-4 bg-zlendo-teal text-white">
          <div className="max-w-4xl mx-auto">
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8 text-center`}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-base font-bold text-teal-100">{stat.label}</div>
                </div>
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
      <section className="py-20 px-4 bg-zlendo-grey-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black font-nunito mb-4">{ctaTitle}</h2>
          {ctaBody && <p className="text-gray-300 mb-8 text-base md:text-lg font-bold leading-relaxed">{ctaBody}</p>}
          <a
            href={signupUrl}
            className="inline-block bg-zlendo-teal hover:bg-teal-600 text-white font-black px-10 py-4 rounded-[20px] text-base md:text-lg transition-colors shadow-2xl shadow-zlendo-teal/30"
          >
            Start Free — No Credit Card Required
          </a>
        </div>
      </section>
    </main>
  );
}
