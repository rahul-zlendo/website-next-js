'use client';

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
    <main className="min-h-screen bg-white text-zlendo-grey-dark">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-zlendo-grey-dark to-slate-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-zlendo-teal text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            {heroBadge}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {heroTitle}{' '}
            <span className="text-zlendo-teal">{heroTitleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">{heroSubtitle}</p>
          <a
            href={signupUrl}
            className="inline-block bg-zlendo-teal hover:bg-teal-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            {heroCtaLabel}
          </a>
        </div>
      </section>

      {/* ── Pain Points ── */}
      {painPoints.length > 0 && (
        <section className="py-16 px-4 bg-red-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10 text-zlendo-grey-dark">{painPointsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((point, i) => (
                <div key={i} className="bg-white border border-red-100 rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-4">{getIcon(point.iconName)}</div>
                  <h3 className="font-bold text-zlendo-grey-dark mb-2">{point.title}</h3>
                  <p className="text-sm text-zlendo-grey-medium leading-relaxed">{point.desc}</p>
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
            <h2 className="text-2xl font-bold text-center mb-10 text-zlendo-grey-dark">{featuresTitle}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-8 h-8 bg-zlendo-teal rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-zlendo-grey-dark mb-1">{feature.title}</h3>
                    <p className="text-sm text-zlendo-grey-medium leading-relaxed">{feature.desc}</p>
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
            <h2 className="text-2xl font-bold text-center mb-12 text-zlendo-grey-dark">{workflowTitle}</h2>
            <div className="relative">
              {workflowSteps.map((step, i) => (
                <div key={i} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-zlendo-teal text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {step.step}
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-teal-200 mt-2 min-h-[2rem]" />
                    )}
                  </div>
                  <div className="pb-8 last:pb-0">
                    <h3 className="font-bold text-zlendo-grey-dark mb-1">{step.title}</h3>
                    <p className="text-sm text-zlendo-grey-medium leading-relaxed">{step.desc}</p>
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
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-teal-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10 text-zlendo-grey-dark">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-zlendo-grey-dark hover:bg-gray-50 transition-colors list-none">
                    <span>{faq.question}</span>
                    <span className="text-zlendo-teal text-xl font-light ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-zlendo-grey-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-20 px-4 bg-zlendo-grey-dark text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
          {ctaBody && <p className="text-gray-300 mb-8 text-lg">{ctaBody}</p>}
          <a
            href={signupUrl}
            className="inline-block bg-zlendo-teal hover:bg-teal-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free — No Credit Card Required
          </a>
        </div>
      </section>
    </main>
  );
}
