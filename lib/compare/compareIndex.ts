/**
 * Curated index of every /compare page, used by the comparison hub
 * (the compare/page.tsx routes) to link them all together. Previously these
 * pages had almost no internal links (only 3 of 12 were in the footer); the
 * hub + these links let both users and AI answer engines discover the full set.
 */

export interface CompareIndexEntry {
  slug: string;
  title: string;
  blurb: string;
}

export interface CompareIndexGroup {
  heading: string;
  description: string;
  entries: CompareIndexEntry[];
}

export const COMPARE_INDEX: CompareIndexGroup[] = [
  {
    heading: 'Head-to-head comparisons',
    description: 'Zlendo Realty compared directly against a single competitor, on features, pricing, and India fit.',
    entries: [
      { slug: 'zlendo-realty-vs-coohom', title: 'Zlendo Realty vs Coohom', blurb: 'Data privacy, vastu, and INR pricing vs a massive furniture catalog.' },
      { slug: 'zlendo-realty-vs-foyr-neo', title: 'Zlendo Realty vs Foyr Neo', blurb: 'India pricing, vastu, and AI automation vs mood boards and material libraries.' },
      { slug: 'zlendo-realty-vs-maket', title: 'Zlendo Realty vs Maket', blurb: 'A complete design-to-client workflow vs pure generative 2D floor plans.' },
      { slug: 'zlendo-realty-vs-snaptrude', title: 'Zlendo Realty vs Snaptrude', blurb: 'AI design-to-client with vastu and renders vs collaborative BIM for architects.' },
      { slug: 'zlendo-realty-vs-planner5d', title: 'Zlendo Realty vs Planner 5D', blurb: 'Professional-grade 8K output vs a consumer DIY design app.' },
      { slug: 'zlendo-realty-vs-sketchup', title: 'Zlendo Realty vs SketchUp', blurb: 'Instant AI spatial design vs manual 3D modelling with paid render plugins.' },
      { slug: 'zlendo-realty-vs-roomsketcher', title: 'Zlendo Realty vs RoomSketcher', blurb: 'AI automation and India features vs a simple, pre-AI floor plan tool.' },
    ],
  },
  {
    heading: 'Best-of guides & alternatives',
    description: 'Ranked roundups and buyer’s guides for the AI floor plan and home design category.',
    entries: [
      { slug: 'best-ai-floor-plan-software', title: 'Best AI Floor Plan Software in 2026', blurb: 'The leading AI floor plan tools ranked on AI, rendering, pricing, and India fit.' },
      { slug: 'best-2d-to-3d-floor-plan-converter', title: 'Best Software to Convert 2D Floor Plans to 3D', blurb: 'Ranked comparison of tools that turn a 2D plan into a 3D model and render.' },
      { slug: 'coohom-vs-maket-vs-snaptrude', title: 'Coohom vs Maket vs Snaptrude', blurb: 'A three-way comparison, plus why Zlendo Realty is the all-in-one alternative.' },
      { slug: 'best-foyr-neo-alternatives', title: 'Best Foyr Neo Alternatives', blurb: 'Top Foyr Neo alternatives for Indian designers, ranked.' },
      { slug: 'best-roomsketcher-alternatives', title: 'Best RoomSketcher Alternatives', blurb: 'Top RoomSketcher alternatives with AI, vastu, and INR pricing.' },
    ],
  },
];

/** Flat list of every compare slug (for sitemap/schema helpers). */
export const ALL_COMPARE_SLUGS = COMPARE_INDEX.flatMap((g) => g.entries.map((e) => e.slug));
