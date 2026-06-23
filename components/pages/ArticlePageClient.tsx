'use client';

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
    <main className="min-h-screen bg-white text-zlendo-grey-dark">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 to-zlendo-grey-dark text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-amber-400 text-amber-900 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            {heroBadge}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {heroTitle}{' '}
            <span className="text-zlendo-teal">{heroTitleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">{heroSubtitle}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-8">
            <span>By Zlendo Realty</span>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>
          <a
            href={signupUrl}
            className="inline-block bg-zlendo-teal hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {heroCtaLabel}
          </a>
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      {keyTakeaways.length > 0 && (
        <section className="py-10 px-4 bg-amber-50 border-y border-amber-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
              <span className="text-lg">★</span> Key Takeaways
            </h2>
            <ul className="space-y-2">
              {keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-amber-900">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">→</span>
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
                  <div className="text-3xl md:text-4xl font-bold text-zlendo-teal mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
                  <h2 className="text-2xl font-bold text-zlendo-grey-dark mb-3">{section.heading}</h2>
                  {section.subheading && (
                    <h3 className="text-lg font-semibold text-zlendo-grey-medium mb-3">{section.subheading}</h3>
                  )}
                  <p className="text-zlendo-grey-medium leading-relaxed">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10 text-zlendo-grey-dark">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
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
      <section className="py-20 px-4 bg-zlendo-teal text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            {ctaTitle}{ctaTitleHighlight && <> <span className="underline decoration-white/60">{ctaTitleHighlight}</span></>}
          </h2>
          {ctaBody && <p className="text-teal-100 mb-8 text-lg">{ctaBody}</p>}
          <a
            href={signupUrl}
            className="inline-block bg-white text-zlendo-teal font-semibold px-10 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            {ctaLabel}
          </a>
        </div>
      </section>
    </main>
  );
}
