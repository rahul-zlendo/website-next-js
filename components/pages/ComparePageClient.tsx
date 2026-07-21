'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface ComparePageDefaults {
  pageType: 'comparison' | 'alternatives';
  heroTitle: string;
  heroSubtitle?: string;
  heroBadge: string;
  heroCtaLabel?: string;
  competitorName?: string;
  competitorTagline?: string;
  competitorFounded?: string;
  competitorPricing?: string;
  competitorBestFor?: string;
  zlendoPricing?: string;
  zlendoBestFor?: string;
  comparisonRows?: Array<{ feature: string; zlendo: string; competitor: string; zlendoNote?: string }>;
  winnerSections?: Array<{ category: string; winner: 'zlendo' | 'competitor' | 'tie'; explanation: string }>;
  zlendoPros?: string[];
  zlendoCons?: string[];
  competitorPros?: string[];
  competitorCons?: string[];
  verdictTitle?: string;
  verdictBody?: string;
  whoShouldChooseZlendo?: string;
  whoShouldChooseCompetitor?: string;
  alternativesIntro?: string;
  alternatives?: Array<{
    name: string;
    tagline: string;
    bestFor: string;
    pricing: string;
    pros: string[];
    cons: string[];
    verdict: string;
  }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle?: string;
  ctaBody?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords?: string[];
}

interface ComparePageClientProps {
  cms: any;
  slug: string;
  defaults: ComparePageDefaults;
  signupUrl: string;
  hubPath?: string;
}

function get<T>(cms: any, defaults: ComparePageDefaults, key: keyof ComparePageDefaults): T {
  const cmsVal = cms?.[key];
  if (cmsVal !== null && cmsVal !== undefined && (Array.isArray(cmsVal) ? cmsVal.length > 0 : true)) {
    return cmsVal as T;
  }
  return defaults[key] as T;
}

export default function ComparePageClient({ cms, slug, defaults, signupUrl, hubPath = '/compare' }: ComparePageClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const pageType = get<string>(cms, defaults, 'pageType') as 'comparison' | 'alternatives';
  const heroTitle = get<string>(cms, defaults, 'heroTitle');
  const heroSubtitle = get<string | undefined>(cms, defaults, 'heroSubtitle');
  const heroBadge = get<string>(cms, defaults, 'heroBadge');
  const heroCtaLabel = (get<string | undefined>(cms, defaults, 'heroCtaLabel')) ?? 'Start Free Trial';
  const competitorName = get<string | undefined>(cms, defaults, 'competitorName');
  const competitorTagline = get<string | undefined>(cms, defaults, 'competitorTagline');
  const competitorFounded = get<string | undefined>(cms, defaults, 'competitorFounded');
  const competitorPricing = get<string | undefined>(cms, defaults, 'competitorPricing');
  const competitorBestFor = get<string | undefined>(cms, defaults, 'competitorBestFor');
  const zlendoPricing = get<string | undefined>(cms, defaults, 'zlendoPricing');
  const zlendoBestFor = get<string | undefined>(cms, defaults, 'zlendoBestFor');
  const comparisonRows = get<ComparePageDefaults['comparisonRows']>(cms, defaults, 'comparisonRows') ?? [];
  const winnerSections = get<ComparePageDefaults['winnerSections']>(cms, defaults, 'winnerSections') ?? [];
  const zlendoPros = get<string[]>(cms, defaults, 'zlendoPros') ?? [];
  const zlendoCons = get<string[]>(cms, defaults, 'zlendoCons') ?? [];
  const competitorPros = get<string[]>(cms, defaults, 'competitorPros') ?? [];
  const competitorCons = get<string[]>(cms, defaults, 'competitorCons') ?? [];
  const verdictTitle = get<string | undefined>(cms, defaults, 'verdictTitle');
  const verdictBody = get<string | undefined>(cms, defaults, 'verdictBody');
  const whoShouldChooseZlendo = get<string | undefined>(cms, defaults, 'whoShouldChooseZlendo');
  const whoShouldChooseCompetitor = get<string | undefined>(cms, defaults, 'whoShouldChooseCompetitor');
  const alternativesIntro = get<string | undefined>(cms, defaults, 'alternativesIntro');
  const alternatives = get<ComparePageDefaults['alternatives']>(cms, defaults, 'alternatives') ?? [];
  const faqs = get<Array<{ question: string; answer: string }>>(cms, defaults, 'faqs') ?? [];
  const ctaTitle = (get<string | undefined>(cms, defaults, 'ctaTitle')) ?? 'Try Zlendo Realty Free for 14 Days';
  const ctaBody = (get<string | undefined>(cms, defaults, 'ctaBody')) ?? 'No credit card required. Full access. Cancel anytime.';

  return (
    <main className="min-h-screen bg-white text-zlendo-grey-dark font-nunito">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-zlendo-grey-dark to-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-zlendo-teal text-white text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
            {heroBadge}
          </span>
          <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black font-nunito leading-[1.1] md:leading-[1.05] mb-5 tracking-tight md:tracking-tighter">{heroTitle}</h1>
          {heroSubtitle && (
            <p className="text-base md:text-lg text-gray-300 font-bold max-w-2xl mx-auto mb-8 leading-relaxed opacity-90">{heroSubtitle}</p>
          )}
          <a
            href={signupUrl}
            className="inline-block bg-zlendo-teal hover:bg-teal-600 text-white font-black px-8 py-3.5 rounded-[20px] text-base transition-colors shadow-2xl shadow-zlendo-teal/30"
          >
            {heroCtaLabel}
          </a>
        </div>
      </section>

      {pageType === 'comparison' && competitorName && (
        <>
          {/* ── Quick Overview ── */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black font-nunito text-center mb-10 text-zlendo-grey-dark">Quick Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Zlendo Card */}
                <div className="bg-white border-2 border-zlendo-teal rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-zlendo-teal text-white text-xs font-black px-2 py-1 rounded">ZLENDO REALTY</span>
                  </div>
                  <div className="space-y-3 text-base">
                    <div><span className="font-black text-zlendo-grey-dark">Pricing:</span> <span className="font-bold text-zlendo-grey-medium">{zlendoPricing}</span></div>
                    <div><span className="font-black text-zlendo-grey-dark">Best For:</span> <span className="font-bold text-zlendo-grey-medium">{zlendoBestFor}</span></div>
                  </div>
                </div>
                {/* Competitor Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-700 text-white text-xs font-black px-2 py-1 rounded">{competitorName.toUpperCase()}</span>
                    {competitorFounded && <span className="text-xs font-bold text-zlendo-grey-medium">Est. {competitorFounded}</span>}
                  </div>
                  <p className="text-zlendo-grey-medium text-base font-bold mb-3 italic">{competitorTagline}</p>
                  <div className="space-y-3 text-base">
                    <div><span className="font-black text-zlendo-grey-dark">Pricing:</span> <span className="font-bold text-zlendo-grey-medium">{competitorPricing}</span></div>
                    <div><span className="font-black text-zlendo-grey-dark">Best For:</span> <span className="font-bold text-zlendo-grey-medium">{competitorBestFor}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Comparison Table ── */}
          {comparisonRows.length > 0 && (
            <section className="py-16 px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black font-nunito text-center mb-10 text-zlendo-grey-dark">Feature Comparison</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-base">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left p-4 font-black text-zlendo-grey-dark w-2/5">Feature</th>
                        <th className="text-center p-4 font-black text-zlendo-teal w-[30%]">Zlendo Realty</th>
                        <th className="text-center p-4 font-black text-zlendo-grey-medium w-[30%]">{competitorName}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-4 font-bold text-zlendo-grey-dark">{row.feature}</td>
                          <td className="p-4 text-left">
                            <span className="text-base font-bold">{row.zlendo}</span>
                            {row.zlendoNote && <p className="text-sm text-zlendo-grey-medium mt-1 font-bold">{row.zlendoNote}</p>}
                          </td>
                          <td className="p-4 text-left text-base font-bold">{row.competitor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* ── Winner Breakdown ── */}
          {winnerSections.length > 0 && (
            <section className="py-16 px-4 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black font-nunito text-center mb-10 text-zlendo-grey-dark">Category Breakdown</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {winnerSections.map((section, i) => {
                    let bg = 'bg-gray-100 border-gray-200';
                    let badge = 'bg-gray-500 text-white';
                    let badgeLabel = 'Tie';
                    if (section.winner === 'zlendo') {
                      bg = 'bg-teal-50 border-zlendo-teal';
                      badge = 'bg-zlendo-teal text-white';
                      badgeLabel = 'Zlendo Wins';
                    } else if (section.winner === 'competitor') {
                      bg = 'bg-slate-100 border-slate-300';
                      badge = 'bg-slate-600 text-white';
                      badgeLabel = `${competitorName} Wins`;
                    }
                    return (
                      <div key={i} className={`${bg} border rounded-xl p-5`}>
                        <span className={`inline-block ${badge} text-xs font-black px-2 py-1 rounded mb-3`}>
                          {badgeLabel}
                        </span>
                        <h3 className="font-black text-lg text-zlendo-grey-dark mb-2">{section.category}</h3>
                        <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed">{section.explanation}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ── Pros & Cons ── */}
          {(zlendoPros.length > 0 || competitorPros.length > 0) && (
            <section className="py-16 px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black font-nunito text-center mb-10 text-zlendo-grey-dark">Pros & Cons</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Zlendo */}
                  <div>
                    <h3 className="font-black text-xl mb-4 text-zlendo-teal">Zlendo Realty</h3>
                    {zlendoPros.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-black uppercase text-green-600 mb-2 tracking-widest">Pros</p>
                        <ul className="space-y-2">
                          {zlendoPros.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-base font-bold text-zlendo-grey-dark">
                              <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {zlendoCons.length > 0 && (
                      <div>
                        <p className="text-xs font-black uppercase text-red-500 mb-2 tracking-widest">Cons</p>
                        <ul className="space-y-2">
                          {zlendoCons.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-base font-bold text-zlendo-grey-dark">
                              <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {/* Competitor */}
                  <div>
                    <h3 className="font-black text-xl mb-4 text-zlendo-grey-medium">{competitorName}</h3>
                    {competitorPros.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-black uppercase text-green-600 mb-2 tracking-widest">Pros</p>
                        <ul className="space-y-2">
                          {competitorPros.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-base font-bold text-zlendo-grey-dark">
                              <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {competitorCons.length > 0 && (
                      <div>
                        <p className="text-xs font-black uppercase text-red-500 mb-2 tracking-widest">Cons</p>
                        <ul className="space-y-2">
                          {competitorCons.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-base font-bold text-zlendo-grey-dark">
                              <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── Verdict ── */}
          {verdictTitle && (
            <section className="py-16 px-4 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-[32px] p-8 md:p-10 shadow-sm">
                  <h2 className="text-2xl md:text-3xl font-black font-nunito text-zlendo-grey-dark mb-4">{verdictTitle}</h2>
                  {verdictBody && <p className="text-base font-bold text-zlendo-grey-medium leading-relaxed mb-8">{verdictBody}</p>}
                  <div className="grid md:grid-cols-2 gap-6">
                    {whoShouldChooseZlendo && (
                      <div className="bg-teal-50 border border-zlendo-teal rounded-2xl p-5">
                        <h3 className="font-black text-lg text-zlendo-teal mb-3">Choose Zlendo Realty if…</h3>
                        <p className="text-base font-bold text-zlendo-grey-dark leading-relaxed whitespace-pre-line">{whoShouldChooseZlendo}</p>
                      </div>
                    )}
                    {whoShouldChooseCompetitor && (
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                        <h3 className="font-black text-lg text-zlendo-grey-medium mb-3">Choose {competitorName} if…</h3>
                        <p className="text-base font-bold text-zlendo-grey-dark leading-relaxed whitespace-pre-line">{whoShouldChooseCompetitor}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ── Alternatives ── */}
      {pageType === 'alternatives' && alternatives.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            {alternativesIntro && (
              <p className="text-base md:text-lg font-bold text-zlendo-grey-medium text-center max-w-2xl mx-auto mb-12 leading-relaxed">{alternativesIntro}</p>
            )}
            <div className="space-y-8">
              {alternatives.map((alt, i) => (
                <div key={i} className={`bg-white border rounded-[24px] p-6 md:p-8 shadow-sm ${i === 0 ? 'border-zlendo-teal' : 'border-gray-200'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="bg-zlendo-grey-dark text-white text-xs font-black px-2 py-1 rounded">#{i + 1}</span>
                        <h3 className="font-black text-2xl text-zlendo-grey-dark">{alt.name}</h3>
                        {i === 0 && <span className="bg-zlendo-teal text-white text-xs font-black px-2 py-1 rounded">Top Pick</span>}
                      </div>
                      <p className="text-zlendo-grey-medium text-base font-bold mt-1">{alt.tagline}</p>
                    </div>
                    <div className="text-right text-base shrink-0 ml-4">
                      <div className="font-black text-zlendo-grey-dark">{alt.pricing}</div>
                    </div>
                  </div>
                  <p className="text-base font-bold text-zlendo-grey-medium mb-4"><span className="font-black">Best for:</span> {alt.bestFor}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-black uppercase text-green-600 mb-2 tracking-widest">Pros</p>
                      <ul className="space-y-1">
                        {alt.pros.map((p, j) => (
                          <li key={j} className="flex items-start gap-2 text-base font-bold text-zlendo-grey-dark">
                            <span className="text-green-500 shrink-0">✓</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-red-500 mb-2 tracking-widest">Cons</p>
                      <ul className="space-y-1">
                        {alt.cons.map((c, j) => (
                          <li key={j} className="flex items-start gap-2 text-base font-bold text-zlendo-grey-dark">
                            <span className="text-red-400 shrink-0">✗</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {alt.verdict && (
                    <div className="bg-gray-50 rounded-2xl p-4 text-base font-bold text-zlendo-grey-medium">
                      <span className="font-black text-zlendo-grey-dark">Verdict: </span>{alt.verdict}
                    </div>
                  )}
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
            <p className="text-xs text-slate-400 mt-8 text-center px-4 leading-relaxed">
              Disclaimer: This comparison is for informational purposes only and is based on publicly available information; all third-party names, logos, trademarks, features, and pricing belong to their respective owners and should be verified directly before any decision.
            </p>
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
          <div className="mt-8">
            <a href={hubPath} className="text-sm font-bold text-gray-400 hover:text-white transition-colors underline underline-offset-4">
              See all Zlendo Realty comparisons →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
