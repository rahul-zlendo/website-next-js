# Zlendo Realty SEO fixes and remaining plan

Prepared 4 October 2026. The supplied 15-day plan is audit input; the implementation follows the user's request to fix major issues and present the remaining plan before pulling `global_dev`.

## Implemented in the working tree

- Corrected the three broken product-table links to `/products/floor-planner`, `/products/2d-to-3d` and `/products/room-styler`.
- Added permanent redirects for each retired product slug at the clean global, `/global` and `/in` paths. India aliases retain the India destination. Query parameters are preserved.
- Added self-canonicals to the products hub, homeowner solution, five industry pages and three event pages. Global-only pages do not advertise nonexistent India counterparts.
- Corrected the Kids Room Layouts and Bathroom Design Tool canonical, alternate and schema URLs to their final paths without a trailing slash.
- Removed title mutations from India templates: replacing the brand with “Zlendo Portal”, adding “Online” and changing parenthesized titles to “Guide”. Corrected explicit “Zlendo Portal” titles across the remaining affected templates, covering 28 templates in total.
- Preserved editorial descriptions and keywords instead of mechanically appending regional text. Fixed locale detection so `/industries/...` is not mistaken for an `/in` route.
- Corrected Room Styler's published “test” label when rendering. Added exact-match compatibility corrections for known stale converter CMS copy; subsequent custom editorial copy is preserved. The CMS documents themselves were not changed.
- Reconciled converter format badges and features to the site's documented JPG/PNG/PDF inputs; removed unsupported DWG/DXF badges, percentage-accuracy claims and fixed conversion-time promises from the affected copy. Actual format/processing capability still needs a product-account test.
- Removed the shared 99.8% accuracy badge and the equivalent Individuals-page claim.
- Replaced seven missing page-specific social-preview image references with the existing default image.
- Limited the root SoftwareApplication schema to application overview homepages and resolved India currency from the route rather than the shared domain. Product-specific schemas remain on product pages.
- Changed the retired India broker page to a permanent redirect and removed that redirecting URL from the sitemap.
- Added a reusable verification command: `node scripts/verify-seo.mjs http://localhost:3100 --all`.

At completion of the 4 October verification, changes were local and had not been deployed, committed or pushed. Existing unrelated working-tree files were preserved. No pull had been performed. On 5 October, the user authorized committing and pushing the SEO changes to `global_dev`. The remote branch is `global_dev`; `gloable_dev` does not exist on the remote.

At the remote check, local HEAD and remote `global_dev` both pointed to `6899c6bd01fed2a180f8d1817ea123ad686b95af`, so no newer upstream commit was pending.

## Verification and boundaries

The initial broader crawl covered 128 non-blog, non-template marketing routes. It found eight further missing canonicals and one redirecting sitemap URL, in addition to the two missing canonicals identified in the supplied audit; those were addressed.

The five target page pairs and two global-only landing pages passed HTTP, single-canonical, source title/H1, indexability and copy checks. All nine product-alias redirects passed permanent status, destination and query-preservation checks. Desktop Room Styler and mobile converter browser checks showed meaningful content, working CTA links, no framework error overlay and no page JavaScript errors. The mobile converter had no horizontal overflow at 390 px.

Final verification passed with zero failures across 127 marketing-page URLs and nine product redirects (136 URL results). The full production build, TypeScript validation and diff whitespace checks passed. The retired India broker URL independently returned 308 to `/in/business/builder-and-promoter`. Homepage application schemas emitted USD for `/` and INR for `/in`; the products hub no longer inherited homepage application markup.

Final verification results are saved under `artifacts/seo-2026-10-04/verification.json`; desktop and mobile screenshots are in the same directory. These checks ran against a local production build, not the live deployment.

This does not establish Google's selected canonical, current rankings, field Core Web Vitals or a successful logged-in design workflow. Blog migration and individual template pages were excluded from the marketing crawl. Rating markup has a documented Capterra source in the existing code, but the current counts could not be independently retrieved during this run; retain it as a review item rather than inventing a replacement rating.

## Remaining work, in priority order

Working-day estimates start after this change is integrated and released. Dependencies can run in parallel; external indexing time is separate from implementation time.

| Priority / timing | Work | Owner / dependency | Acceptance evidence |
|---|---|---|---|
| P1 · Day 1 | Recheck `origin/global_dev` and safely integrate any newer commits, resolve overlapping SEO changes, rerun build/crawl/browser checks and release. Verify the production URLs after deployment. | Developer and release owner | Before/after URL checks, deploy reference and rollback method; no public marketing blockers in the audited scope. |
| P1 · Days 1–2 | Establish the seven-keyword India baseline and confirm whether global or India URLs currently win. Use Search Console's latest complete data, India/mobile/desktop splits and URL Inspection. | SEO lead; Search Console and rank-tracker access | Seven baseline rows, five chosen destinations, Google-selected canonicals and equivalent 28-day periods. Do not assume India URLs should replace established winners. |
| P1 · Days 1–2 | Verify feature truth: actual inputs/outputs, JPG/PNG/PDF support, dimensions, units, editability, exports, processing time, mobile behavior, login, credits and pricing. Update the CMS with the corrected copy so the compatibility mapping can later be removed. | Product owner; test account and real sample projects | Reproducible successful and failed journeys; approved feature matrix; no contradictory format, timing, accuracy or catalogue claims. |
| P1 · Days 2–3 | Verify analytics rather than merely adding tags. Track CTA clicks, tool starts and completed outputs once each; test app-subdomain attribution and consent behavior. | Analytics owner and application developer; GA4/GTM access | One observed end-to-end journey with correct source attribution; no floor-plan contents, emails or raw prompts in events. |
| P2 · Days 3–6 | Improve the five existing destinations: Smart Wizard, Floor Planner, Converter, Room Styler and India homepage. Refine actual CMS titles/descriptions and visible headings, add original matched examples, explain limits and prices near CTAs, and add contextual internal links. | Content/product expert and developer; approved examples | Each page matches its intended task and the tested product; examples show real inputs and outputs. Avoid duplicate “AI home design” pages and misleading generic image-to-3D positioning. |
| P2 · Days 3–5 | Review template-detail discovery before changing indexation: sitemap query URLs currently share a generic page canonical. Determine which templates have useful distinct content, then give those pages matching server-visible details/metadata or remove noncanonical variants from the sitemap. Replace guessed/current-time sitemap modification dates with genuine content-update dates where available. | Developer and SEO lead; template API and Search Console evidence | Sitemap entries agree with intended canonicals; unique templates have distinct useful content; accurate dates; no blanket deletion of valuable indexed URLs. |
| P2 · Days 4–7 | Measure performance on the five target pages. The build shows relatively large global page bundles; profile shared sections, animation, third-party scripts, hero images and fonts before making changes. Prioritize mobile usability and observed LCP/INP/CLS bottlenecks. | Developer; PageSpeed and field data where available | Before/after lab runs on identical settings; field results reported separately with their observation window. |
| P2 · Days 6–8 | Inspect the top 20 old blog URLs selected by lost traffic or backlinks. Fix only confirmed wrong destinations/chains/404s and validate current rating, offer and product schema against visible evidence. | SEO lead and developer; historical reports and review/pricing evidence | Documented old-to-new URL mapping, final status/canonical, and truthful schema; no mass redirection to the homepage. |
| P3 · Days 7–10 | Publish two reproducible support guides and one permission-cleared product case study. Prepare relevant outreach prospects and demo assets; the business owner handles outreach. | Writer/product expert; publication rights and real examples | Original guides linked to the matching tools, real case-study outcomes and limitations, documented testimonials only. |
| P1 · End of sprint | Recrawl production, check mobile CTAs and logged-in outputs, inspect selected canonicals/indexing and hand over the seven-keyword scorecard. | Developer, SEO lead and product owner | Live URLs, release evidence, comparison dates, impressions/clicks, tool starts and successful outputs; unavailable metrics explicitly marked. |

Review outcomes again at Days 30, 60 and 90. Ranking growth and indexing remain measured outcomes, not guaranteed sprint deadlines.

## Safe next step before the pull

Review this local diff and the plan. Preserve both these SEO edits and pre-existing local files before integrating the latest `origin/global_dev`. Do not reset the checkout or run a broad clean. Reconcile any upstream SEO changes and rerun the same verification against the integrated result. The current verification applies to this local revision only.

Implementation references: [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), [Next.js permanent redirects](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects), and [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
