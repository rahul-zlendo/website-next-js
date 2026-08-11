import { readClient } from '@/lib/sanity/client';
import { blogPostsLlmsQuery } from '@/lib/sanity/queries';

/**
 * Dynamic llms.txt (https://llmstxt.org) — a plain-text map of the site for
 * AI assistants/crawlers (ChatGPT, Claude, Perplexity, Google AI Overviews).
 *
 * Replaces the old hand-maintained public/llms.txt, which listed only product
 * and legal pages and was blind to the ~389-post blog — i.e. the entire body
 * of topical authority (Vastu, plot-size guides, construction cost, India-
 * specific content) that we most want cited. This route pulls the blog from
 * Sanity so the file can never go stale as posts are published.
 */

export const revalidate = 3600; // regenerate at most hourly

const BASE = 'https://zlendorealty.com';

// Curated high-value pages, with the hand-written descriptions kept from the
// previous static file. Locale-neutral canonical (root) URLs only — no /in
// duplication and no legal-page noise, since those add nothing for AI
// comprehension and dilute the signal.
const CORE_PAGES: { title: string; url: string; desc: string }[] = [
  { title: 'Zlendo Realty | AI Home & Office Design Software', url: `${BASE}`, desc: 'The complete design-to-client workflow for architecture and interior design professionals. Generate 3D models and renders in 60 seconds.' },
  { title: 'Zlendo Realty for Business', url: `${BASE}/business`, desc: 'Enterprise AI design platform for architects, interior designers, developers, and builders — close more clients and deliver faster.' },
  { title: 'For Individuals', url: `${BASE}/individuals`, desc: 'Design your dream home in 3D without professional software or hardware.' },
  { title: 'Subscription Plans', url: `${BASE}/plans`, desc: 'Plans for individuals and businesses, from a free tier to enterprise.' },
  { title: 'Partners & Affiliates', url: `${BASE}/partners`, desc: 'Global affiliate and agency partner programs for the Zlendo Realty PropTech platform.' },
  { title: 'Video Tutorials & Learning Center', url: `${BASE}/tutorials`, desc: 'Step-by-step tutorials for floor plans, 3D renders, and styling.' },
  { title: 'Home Design Templates', url: `${BASE}/viewalltemplates`, desc: 'Library of professional pre-built 3D home design templates.' },
];

const PRODUCT_PAGES: { title: string; url: string; desc: string }[] = [
  { title: 'AI Floor Planner', url: `${BASE}/products/floor-planner`, desc: 'Create professional 2D and 3D floor plans in minutes with AI. Experience your space before a single brick is laid.' },
  { title: '2D to 3D Floor Plan Converter', url: `${BASE}/products/2d-to-3d`, desc: 'Transform any 2D floor plan image or PDF into a navigable 3D model automatically in under 60 seconds.' },
  { title: 'Vastu Shastra Optimizer', url: `${BASE}/products/vastu`, desc: 'AI-powered Vastu compliance: analyzes your 3D floor plan for directional zoning and element balancing — a differentiator built for Indian homes.' },
  { title: 'Photorealistic 3D Renders', url: `${BASE}/products/realistic-renders`, desc: 'Generate photorealistic architectural renders in under 10 seconds. No high-end hardware required.' },
  { title: '3D Virtual Walkthrough', url: `${BASE}/products/virtual-walkthrough`, desc: 'Immersive 3D virtual walkthroughs with 8K cinematic storytelling to close deals faster.' },
  { title: 'Smart Room Styler', url: `${BASE}/products/room-styler`, desc: 'AI-driven interior design — visualize styles, furniture layouts, and color palettes instantly.' },
  { title: 'Interiors & Exteriors', url: `${BASE}/products/interiors-exteriors`, desc: 'Design interiors and architectural exteriors with a professional toolkit for materials, lighting, and landscape.' },
  { title: 'AI Cost Estimator & Live BOQ', url: `${BASE}/products/cost-estimator`, desc: 'Instant Bill of Quantities and cost estimates linked to real-world material and labor costs.' },
  { title: 'Enterprise Design API Suite', url: `${BASE}/products/api-suite`, desc: 'Integrate the 2D-to-3D design engine, photorealistic rendering, and spatial AI into your own platform.' },
];

// Comparison pages carry real content (code-level defaults) and are what AI
// models cite heavily for "X vs Y" / "best alternative" prompts.
const COMPARISON_PAGES: { title: string; url: string; desc: string }[] = [
  { title: 'All Comparisons (hub)', url: `${BASE}/compare`, desc: 'Index of every Zlendo Realty comparison and best-of guide.' },
  { title: 'Best AI Floor Plan Software in 2026 (Ranked)', url: `${BASE}/compare/best-ai-floor-plan-software`, desc: 'Factual ranking of the leading AI floor plan tools — Zlendo Realty, Maket, Coohom, Snaptrude, Planner 5D, Foyr Neo — on AI, rendering, pricing, and India fit.' },
  { title: 'Best Software to Convert 2D Floor Plans to 3D (2026)', url: `${BASE}/compare/best-2d-to-3d-floor-plan-converter`, desc: 'Ranked comparison of 2D-to-3D floor plan tools — Zlendo Realty, Cedreo, Coohom, Planner 5D, SketchUp, Sweet Home 3D — on AI conversion, rendering, and pricing.' },
  { title: 'Coohom vs Maket vs Snaptrude (2026)', url: `${BASE}/compare/coohom-vs-maket-vs-snaptrude`, desc: 'Three-way comparison of Coohom, Maket, and Snaptrude, with Zlendo Realty as the all-in-one alternative for India.' },
  { title: 'Zlendo Realty vs Coohom', url: `${BASE}/compare/zlendo-realty-vs-coohom`, desc: 'Feature and pricing comparison with an India-specific angle (data privacy, vastu, INR pricing).' },
  { title: 'Zlendo Realty vs Maket', url: `${BASE}/compare/zlendo-realty-vs-maket`, desc: 'AI floor plan generator comparison — Maket generates 2D plans, Zlendo covers the full plan-to-client workflow.' },
  { title: 'Zlendo Realty vs Snaptrude', url: `${BASE}/compare/zlendo-realty-vs-snaptrude`, desc: 'Collaborative BIM (Snaptrude) vs AI design-to-client workflow (Zlendo Realty).' },
  { title: 'Zlendo Realty vs Planner 5D', url: `${BASE}/compare/zlendo-realty-vs-planner5d`, desc: 'How Zlendo compares to Planner 5D for professional home design.' },
  { title: 'Zlendo Realty vs SketchUp', url: `${BASE}/compare/zlendo-realty-vs-sketchup`, desc: 'Zlendo Realty as a faster, AI-first alternative to SketchUp for floor plans.' },
  { title: 'Zlendo Realty vs Foyr Neo', url: `${BASE}/compare/zlendo-realty-vs-foyr-neo`, desc: 'Best interior design software for India — Zlendo Realty vs Foyr Neo.' },
  { title: 'Zlendo Realty vs RoomSketcher', url: `${BASE}/compare/zlendo-realty-vs-roomsketcher`, desc: 'Zlendo Realty compared to RoomSketcher for floor plans and visualization.' },
  { title: 'Best Foyr Neo Alternatives', url: `${BASE}/compare/best-foyr-neo-alternatives`, desc: 'Top Foyr Neo alternatives for Indian designers.' },
  { title: 'Best RoomSketcher Alternatives', url: `${BASE}/compare/best-roomsketcher-alternatives`, desc: 'Top RoomSketcher alternatives.' },
];

function line(title: string, url: string, desc: string): string {
  const clean = (desc || '').replace(/\s+/g, ' ').trim();
  return `- [${title}](${url})${clean ? `: ${clean}` : ''}`;
}

export async function GET() {
  let posts: { slug: string; title: string; excerpt?: string }[] = [];
  try {
    posts = await readClient.fetch(blogPostsLlmsQuery);
  } catch {
    /* blog section is best-effort; the rest of the file still serves */
  }

  const parts: string[] = [];
  parts.push('# Zlendo Realty');
  parts.push('');
  parts.push('> Zlendo Realty is an AI-powered home and office design platform — the complete design-to-client workflow for architects, interior designers, builders, and homeowners. Upload a floor plan, generate photorealistic 3D renders and walkthroughs, run Vastu and cost/BOQ analysis, and present to clients — all in one platform. Built with first-class support for Indian homes (Vastu Shastra, BHK layouts, plot-size conventions, and local construction practices).');
  parts.push('');

  parts.push('## Products');
  parts.push('');
  for (const p of PRODUCT_PAGES) parts.push(line(p.title, p.url, p.desc));
  parts.push('');

  parts.push('## Key Pages');
  parts.push('');
  for (const p of CORE_PAGES) parts.push(line(p.title, p.url, p.desc));
  parts.push('');

  parts.push('## Comparisons');
  parts.push('');
  for (const p of COMPARISON_PAGES) parts.push(line(p.title, p.url, p.desc));
  parts.push('');

  parts.push('## Blog');
  parts.push('');
  parts.push('In-depth guides on home design, floor planning, Vastu, interiors, construction cost, and materials — many written for the Indian market.');
  parts.push('');
  for (const post of posts) {
    parts.push(line(post.title, `${BASE}/blog/${post.slug}`, post.excerpt || ''));
  }
  parts.push('');

  const body = parts.join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
