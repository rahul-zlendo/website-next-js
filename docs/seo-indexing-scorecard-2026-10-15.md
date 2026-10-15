# SEO daily scorecard — October 15, 2026

Seven-day window October 13–19, day 3. This run completed public verification, a full ledger refresh, three diagnostic mobile profiles and a bounded checker improvement. Fresh Google reports and the weekly India Web measurements are blocked by the signed-in Chrome connection being unavailable. No website rendering/routing/content or analytics configuration was changed, and no Production redeploy, indexing request or validation restart was made.

## Google evidence: last verified baseline, not an October 15 refresh

Chrome was absent from the available browser inventory on two checks; only the in-app browser and MCP Apps were available. No Search Console connector is exposed. Therefore today's Page indexing counts, report dates, exclusions, indexed URL exports, five India inspections, Dashboard indexing outcome, mobile field update and India Web performance rows are unavailable. Screenshot evidence cannot be collected from the signed-in reports today. Reconnect the signed-in Chrome profile before refreshing them; no login/CAPTCHA barrier was bypassed.

The following is the **October 14 capture of data dated October 9**, retained separately:

| Scope | Indexed | Not indexed | Total |
| --- | ---: | ---: | ---: |
| All known | 413 | 955 | 1368 |
| All submitted | 405 | 276 | 681 |
| Global sitemap | 365 | 188 | 553 |
| India sitemap | 40 | 88 | 128 |
| Parent sitemap index | 405 | 276 | 681 |

Every exclusion below is also historical October 9 data, captured October 14. Existing validation states are preserved in the October 14 scorecard and raw transcripts; no current validation state or newly indexed count is inferred.

| Exclusion | All known | All submitted | Global sitemap | India sitemap |
| --- | ---: | ---: | ---: | ---: |
| Redirect | 315 | 6 | 6 | Not listed |
| 404 | 184 | 0 | Not listed | Not listed |
| 5xx | 3 | Not listed | Not listed | Not listed |
| Alternate proper canonical | 2 | Not listed | Not listed | Not listed |
| Redirect error | 1 | Not listed | Not listed | Not listed |
| Crawled, not indexed | 225 | 57 | 54 | 3 |
| Different Google canonical | 15 | 6 | 5 | 1 |
| Duplicate without selected canonical | 2 | 0 | Not listed | Not listed |
| Robots blocked | 2 | 1 | 1 | Not listed |
| Other 4xx | 0 | Not listed | Not listed | Not listed |
| Noindex | 0 | Not listed | Not listed | Not listed |
| 403 | 0 | Not listed | Not listed | Not listed |
| Discovered, not indexed | 206 | 206 | 122 | 84 |

Parent scope has redirect 6, crawled 57, different canonical 6, robots 1, discovered 206, 404 0 and duplicate-without-canonical 0. It is not additional inventory to add to its children. The original October 4 430 indexed / 963 excluded baseline remains unchanged in earlier records.

## Fresh public sitemap, CMS and intended URLs

At 2026-10-15T16:08:01.200Z the live sitemap index and both children returned 200: **689 unique URLs, 419 articles and 270 other pages**; global 558, India 131. This matches October 14 evening exactly: no added or removed URL. All 419 published CMS articles match the article sitemap, with no missing CMS article/orphan entry and no pagination sitemap entry. There are still 35 valid blog listing pages at 12 articles per page.

The earlier 417→418 article change remains explained by the October 12 AI home-design article, published 07:13:31 UTC; 418→419 by the October 14 2D-to-3D article, published 10:27:31 UTC. Their actual CMS significant-change fields are retained. Six global/India template URLs explain the earlier 682→688 non-article change; today's total remains 689. No audit timestamp was manufactured as a content date.

All **689 submitted URLs pass 200/self-canonical/indexability checks**, with no submitted redirect, 404, 5xx, probe error, canonical mismatch or noindex 200. All five India pages separately pass these checks. Smart Wizard's eight schema answers match the server-rendered FAQs, including predefined concepts, limited Vastu ranking and no editable-drawing transfer. Contextual Smart Wizard anchors remain present on the India homepage and Floor Planner. The five sitemap significant-change dates are unchanged from October 14.

Exact matching today's desired URLs against the retained complete October 9 indexed example lists gives **405 matches / 284 absent from that dated list**. This is a current sitemap matched to historical indexing evidence, not a fresh Google intersection or proof that 284 pages are currently unindexed. Newly indexed/lost desired URLs cannot be established without fresh URL-level evidence. No all-known-total subtraction is used.

## Intermittent Help Center failure and bounded diagnostic change

The first 82-check public matrix completed at 16:09:20 UTC with **81 passed and one HTTP 500** for `/help-center/category/project-cost-estimation`, expected to be a noindex 404. The original checker did not retain the failed request ID/body, so the exact failing request time/cause is unknown. Search runtime logs approximately 16:07–16:10 UTC on deployment `dpl_CJZKhdWyvVghaZGaPXRQKHyLYbge`; the end timestamp of the matrix is not the exact error timestamp.

Two targeted follow-ups at 16:11:10/11 UTC returned 404/noindex, including a diagnostic query variant. The actual upstream WordPress taxonomy lookup returned 200 with an empty array. The Dashboard tag remained 200/indexable. The later complete matrix passed **82/82 at 16:13:40 UTC**. No content/redirect change occurred between these checks. The intermittent 500 is **unresolved**, not repaired or erased by the passing follow-up.

`scripts/seo-checks/blog-http-check.cjs` now saves each hop's timestamp, response-header duration, Vercel request ID, cache status and matched path. A 5xx response retains its title, available Next error digests and at most 8192 characters of public error HTML in the evidence file. It does not retry or turn the first failure into a pass. A synthetic HTTP 500 fixture verifies retained status/request ID/digest/bounded body with exactly one request; `node --check`, the live 82-check run and `git diff --check` pass. This changes the checker, not the deployed website.

Team-scoped Vercel project/deployment reads again returned 403 for `zlendo-realty`, and no installed Vercel CLI was found. Along with absent Chrome, this blocks runtime-log diagnosis. Public HTML still identifies yesterday's accepted deployment `dpl_CJZKhdWyvVghaZGaPXRQKHyLYbge`; source 48918b1 was verified in the dashboard yesterday. No fresh authenticated deployed-SHA claim is made today. No speculative error-swallowing, homepage redirect or guessed content restoration was applied.

## Refreshed 629-URL disposition ledger

All 629 records were refreshed, retaining 15 rendering assets outside the desired HTML index inventory. Initial sweep: 404 HTTP 200, 209 successful HTTP 404, one timeout and no 5xx/redirect chains. The timed-out `/blog/malls-in-vaishali-ghaziabad-complete-guide/` was not counted as a fresh 404 based on its old status: its failed attempt is explicitly retained with null status. One separate retry returned 308→404/noindex at 16:16:24 UTC.

Latest responses: **404 HTTP 200, 210 HTTP 404 (199 HTML / 11 invalid pagination), 15 assets, zero remaining probe failures, zero observed 5xx in that sweep and zero redirect chains**. The separate initial Help Center 500 is recorded in supplemental-url-dispositions.json because that category URL is outside the original 629-URL export. No wanted submitted/published URL is missing; the 53 priority HTML entries remain identified. Current dispositions still require original-content, traffic/conversion, backlink and equivalent-replacement evidence before deleting/merging the 199 missing HTML pages. No bulk deletion, temporary removal or unrelated redirect occurred.

The eleven previously outstanding canonical inspections remain completed on October 14; they were not repeated without fresh access. India tutorials retains its documented shared-content/Google-global-canonical question pending a locale decision. The single October 14 Dashboard request remains accepted/queued in the last evidence, not confirmed indexed and not resubmitted.

## Fresh diagnostic mobile samples; field acceptance remains open

Lighthouse 13.5.0 ran once per article on current public Production, saving full reports and traces:

| Article | LCP, ms | TBT, ms | Lab CLS | Host benchmark |
| --- | ---: | ---: | ---: | ---: |
| Almirah | 4425 | 3070 | 0.003758 | 582.5 |
| Balcony | 4123 | 3052 | 0.003460 | 536.5 |
| AI interior design | 4321 | 3506 | 0.003086 | 545.5 |

Each actual LCP element remains the leading body image. These are single diagnostic samples, not a three-run median/range acceptance set. Host CPU is variable and lower than yesterday's recorded benchmarks; network inventory checks ran concurrently, but no build/type check did. No performance regression/improvement is causally attributed. TBT is not INP, low lab CLS is not field recovery, and no fresh interaction/field INP was captured.

The last verified mobile field data remains October 12: 81 URLs need improvement, representative LCP 2.7 s / INP 210 ms; LCP validation Failed and INP already Started October 11. Today's Google values are unknown. Targets LCP <=2.5 s, INP <=200 ms and CLS <=0.1 are not established as passed. Structural inspection of reader/shared components does not identify a safely attributable application fix from these traces alone. Measured GA/GTM/Clarity and first-party costs require trace/runtime investigation; no guessed analytics removal or unrelated widget rewrite was made.

## Evidence, dependencies and next action

Raw private evidence is under `artifacts/seo-2026-10-15/`: saved XML/CMS inventory, 689 submitted checks, 629 individual dispositions with attempts, desired URL ledger, both public matrices, Help Center probes, five India/FAQ/date checks, three Lighthouse reports/traces, diagnostic fixture and access-dependencies.json. Google baseline transcripts/screenshots remain under October 14; they are not relabelled as today's evidence.

The weekly India Web scorecard is prepared in `docs/seo-india-web-scorecard-2026-10-15.md` with exact filters and a complete-period method. Measurement is pending signed-in Chrome, the latest verified complete reporting date and filtered query/page exports; values are unavailable, not zero. Conversion acceptance still needs actual consent/debug evidence and an authorized completed test identity. Product outputs, case-study evidence and the tutorials locale decision remain open prerequisites in the supplied plan.

Next: restore Chrome/report access and scoped runtime logs, investigate the intermittent Help Center failure, populate the India Web scorecard, then address attributable mobile costs and individual HTML dispositions. Preserve the existing October 19 final report/pause guard. No new schedule or automated request was created. Unrelated checkout changes and user files, including tsconfig.tsbuildinfo and other worktrees/processes, were preserved.
