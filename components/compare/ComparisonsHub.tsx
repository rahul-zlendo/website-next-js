import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COMPARE_INDEX } from '@/lib/compare/compareIndex';

/**
 * The /compare hub — lists every comparison and best-of page so they are
 * cross-linked and discoverable (previously most had no internal links).
 *
 * `prefix` is the locale-aware base path, e.g. '/in/compare' or '/compare'.
 */
export default function ComparisonsHub({ prefix }: { prefix: string }) {
  return (
    <main className="bg-white min-h-screen font-nunito">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-black/5">
        <div className="container-custom px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-zlendo-teal bg-zlendo-teal/5 px-5 py-2 rounded-full mb-6">
            Compare
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark leading-tight mb-5">
            Zlendo Realty vs the alternatives
          </h1>
          <p className="text-lg md:text-xl text-zlendo-grey-medium font-medium max-w-2xl mx-auto">
            Honest, side-by-side comparisons and buyer’s guides across the AI floor plan
            and home design category — with an India-specific angle (Vastu, INR pricing,
            construction cost) no competitor matches.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="container-custom px-6 py-14 md:py-20 max-w-5xl mx-auto space-y-16">
        {COMPARE_INDEX.map((group) => (
          <div key={group.heading}>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-zlendo-grey-dark mb-2">{group.heading}</h2>
              <p className="text-zlendo-grey-medium font-medium">{group.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {group.entries.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`${prefix}/${entry.slug}`}
                  className="group flex flex-col justify-between gap-4 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:border-zlendo-teal/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-black text-zlendo-grey-dark mb-2 group-hover:text-zlendo-teal transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-zlendo-grey-medium font-medium leading-relaxed">{entry.blurb}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-black text-zlendo-teal">
                    Read comparison
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
