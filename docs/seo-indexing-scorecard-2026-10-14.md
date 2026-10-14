# SEO daily scorecard — 14 October 2026

Seven-day execution window: October 13–19, day 2. Collected October 14; Google report dates below remain explicit. The October 4 baseline is preserved in seo-indexing-scorecard-2026-10-12.md. Source repairs are already pushed; this run completed evidence collection and one selective indexing request.

## Search Console counts and dated intersection

| Scope | Report date | Indexed | Not indexed | Total reported |
| --- | --- | ---: | ---: | ---: |
| all-known | 2026-10-09 | 413 | 955 | 1368 |
| all-submitted | 2026-10-09 | 405 | 276 | 681 |
| global-sitemap | 2026-10-09 | 365 | 188 | 553 |
| india-sitemap | 2026-10-09 | 40 | 88 | 128 |
| sitemap-index | 2026-10-09 | 405 | 276 | 681 |

All known pages changed from 430 indexed / 963 excluded on October 4 to 413 / 955 on October 9 (differences −17 / −8). These totals alone do not establish losses among today's desired canonical URLs. All submitted and the two children sum to 681 known URLs in Google's dated scope; today's sitemap has 688. The parent sitemap scope is not an additional inventory to add to its children.

All 413 displayed all-known indexed examples and all 405 displayed submitted indexed examples were captured, with row ranges proving list completeness. Exact URL matching against today's 688 desired sitemap URLs yields **405 matches and 283 absent from that dated example list**. Eight indexed examples lie outside today's sitemap, including three valid pagination URLs. Absence is not a fresh individual inspection or proof of current non-indexing. No subtraction of an all-known indexed total from a sitemap total was used. Newly indexed/lost desired URLs versus October 4 cannot be established without that date's complete URL-level set.

### Every displayed exclusion reason

Counts show Google's existing validation state. This run did not start/restart validation. A Passed validation does not mean those URLs are indexed.

| Reason | All known | All submitted | Global sitemap | India sitemap | Sitemap index |
| --- | ---: | ---: | ---: | ---: | ---: |
| Page with redirect | 315 (Started) | 6 (Not Started) | 6 (Not Started) | Not listed | 6 (Not Started) |
| Not found (404) | 184 (Started) | 0 (N/A) | Not listed | Not listed | 0 (Passed) |
| Server error (5xx) | 3 (Started) | Not listed | Not listed | Not listed | Not listed |
| Alternate page with proper canonical tag | 2 (Started) | Not listed | Not listed | Not listed | Not listed |
| Redirect error | 1 (Started) | Not listed | Not listed | Not listed | Not listed |
| Crawled - currently not indexed | 225 (Started) | 57 (Not Started) | 54 (Not Started) | 3 (Not Started) | 57 (Not Started) |
| Duplicate, Google chose different canonical than user | 15 (Started) | 6 (Not Started) | 5 (Not Started) | 1 (Not Started) | 6 (Not Started) |
| Duplicate without user-selected canonical | 2 (Passed) | 0 (N/A) | Not listed | Not listed | 0 (Passed) |
| Blocked by robots.txt | 2 (Passed) | 1 (Not Started) | 1 (Not Started) | Not listed | 1 (Passed) |
| Blocked due to other 4xx issue | 0 (Passed) | Not listed | Not listed | Not listed | Not listed |
| Excluded by ‘noindex’ tag | 0 (Passed) | Not listed | Not listed | Not listed | Not listed |
| Blocked due to access forbidden (403) | 0 (Passed) | Not listed | Not listed | Not listed | Not listed |
| Discovered - currently not indexed | 206 (Passed) | 206 (Not Started) | 122 (Not Started) | 84 (Not Started) | 206 (Passed) |

Evidence: artifacts/seo-2026-10-14/index-*.txt/png, indexed-all-known-urls.json, indexed-submitted-urls.json, daily-scorecard.json. The source report dates remain October 9 even where displayed last-crawl dates differ.

## Live sitemap, CMS and HTTP acceptance

At 2026-10-14T04:22:08.402Z, the live index and both children returned 200: **688 unique URLs, 418 articles and 270 other pages**; global 557, India 131. All 418 published CMS articles match the article sitemap; no missing CMS article, orphan article entry or pagination sitemap entry was found. There are 35 valid blog listing pages at 12 articles per page.

The earlier 417-article CMS capture is reconciled by ai-home-design-software-floor-plans-virtual-walkthroughs, published October 12 at 07:13:31 UTC; CMS _updatedAt 07:19:54 UTC and explicit updatedAt 07:18:00 UTC. These actual fields are preserved, not replaced with this audit's time. Compared with October 12's later 682-URL inventory, six template URLs were added: IDs SkJVUV1DSA, SkJVUV1DSQ and SkJVUV1CQA, each in global and India versions. No URL was removed.

All **688 submitted URLs return 200, matching self-canonicals and indexable metadata**. No redirect, missing page, reproduced server error, canonical mismatch, noindex or probe failure occurred in that sweep. This establishes HTTP/metadata acceptance, not Google indexing or content-quality acceptance.

The 629-URL historical ledger was refreshed: 401 responses end in 200; 213 end in 404 (199 HTML, 14 pagination); 15 rendering assets are retained outside the desired HTML index inventory. Zero 5xx/probe failures and one redirect chain were observed. No wanted published/submitted URL is missing; no response status changed versus October 12. Historical 5xx labels are not reproduced server failures today. Individual original-content, traffic/conversion, backlink and equivalent-replacement evidence is still missing for the 199 HTML dispositions; they are not all declared intentionally retired. No deletion, homepage redirect or temporary removal was used.

Evidence: live-inventory.json and saved XML children; submitted-http-checks.json; url-dispositions.json/csv (629 rows); desired-url-dispositions.csv (688 rows). The 53 priority AI/design/product/support entries remain in the ledger.

## Canonical inspections completed

The eleven outstanding inspections are complete, with raw transcripts and screenshots; India tutorials was refreshed separately. Together with October 12's original four, all 15 report examples now have an individual result. All eleven still display the historical duplicate/different-canonical exclusion; no fresh indexed outcome is claimed.

| Inspected path | Google-selected canonical displayed | Indexed-data last crawl (UI timezone unspecified) |
| --- | --- | --- |
| /blog/drawing-room-vastu-simple-guidelines | Same as user-declared canonical | Aug 16, 2026, 10:27:34 PM |
| /blog/small-hallway-decorating-ideas | https://zlendorealty.com/blog/small-hallway-decorating-ideas/ | Jul 26, 2026, 11:20:10 PM |
| /blog/kitchen-architecture-design-ideas-home/ | https://zlendorealty.com/blog/kitchen-architecture-design-ideas-home | Apr 13, 2026, 1:58:05 PM |
| /blog/drawing-room-vastu-simple-guidelines/ | N/A | Apr 9, 2026, 6:47:35 AM |
| /blog/pvc-round-sheets-uses-advantages/ | https://zlendorealty.com/blog/pvc-round-sheets-uses-advantages | Apr 8, 2026, 4:38:48 PM |
| /blog/living-room-designs-indian-style/ | https://zlendorealty.com/blog/living-room-designs-indian-style | Apr 5, 2026, 3:18:10 PM |
| /blog/worlds-largest-private-residence-design/ | N/A | Apr 2, 2026, 8:40:42 PM |
| /help-center/zlendorealty-dashboard-first-time-user-tour | N/A | Mar 31, 2026, 1:51:15 AM |
| /blog/single-storey-house-design-ideas/ | https://zlendorealty.com/blog/single-storey-house-design-ideas | Mar 27, 2026, 10:23:00 PM |
| /blog/aesthetic-room-decor-ideas-modern-living/ | https://zlendorealty.com/blog/aesthetic-room-decor-ideas-modern-living | Mar 26, 2026, 1:53:24 PM |
| /blog/bathroom-vanity-designs-pictures-stylish/ | N/A | Mar 1, 2026, 2:27:41 AM |
| /in/tutorials | https://zlendorealty.com/tutorials | Aug 21, 2026, 2:01:54 PM |

Drawing-room's slashless view displays “Same as user-declared canonical” despite its duplicate exclusion; its slash view and three other examples display N/A. These are retained as ambiguous Google signals, not silently resolved. All 15 current public targets resolve to 200/self-canonical/indexable pages; the eight inspected slash aliases take one 308 to the slashless canonical. Canonical-dispositions.json separates historical Google data from current HTTP behavior.

India tutorials still declares /in/tutorials while Google selects /tutorials. CodeGraph context/source and public output confirm the regional/global pages share the same tutorial query/client and 25 tutorial titles, with regional title/heading differences. An owner decision about localized tutorial content versus a shared canonical is required before remapping or removing it. No speculative locale rewrite was made.

The restored Dashboard first-time guide was verified live in Chrome, including its actual body, headings and support navigation, plus a matching 200/self-canonical/indexable response. Its March 31 Google crawl predates the published reader correction. **One October 14 indexing request was accepted into the priority crawl queue. This is not actual indexing.** Screenshot: dashboard-request-accepted.png; details: indexing-request.json. No aliases, unchanged India pages or previously accepted requests were resubmitted.

## Release and mobile status

Repository and origin/global_dev matched 37ff2c0768c655105d3f7312879f532224b143df after fetch. The validated October 12 implementation cd80425, merged/pushed as 8cefc04, remains absent from today's production behavior: page 2/page 29 canonicalize to /blog; page 9999 returns indexable 200; legacy /blog/page/29/ reaches a 404; a regional slash alias still uses two redirects; the almirah table wrapper, lead preload and CDN preconnect are absent. The public HTTP checker failed at the page-2 canonical assertion; the bounded matrix records the other failures. The 64-check built acceptance remains historical, not a production pass.

Public deployment identifier remains dpl_8E5jbJgAarhHWJyqNpjt6c12mw3b. Team-scoped Vercel project inspection returned 403 and no authenticated CLI is available. The required dependency is working access to the Zlendo Realty team/project to inspect the real deployed SHA, production branch, build/release result and established publication workflow. No guessed promotion/deployment was attempted. Earlier truthful Smart Wizard copy/FAQ/units, five India canonicals, contextual links, source/CMS dates and image sizing remain verified live; they are separate from the unpublished October 12 blog changes.

Fresh mobile field data is dated 2026-10-12: **81 URLs need improvement, zero poor/good URLs**. The same representative balcony group has LCP 2.7 s and INP 210 ms; the two issue counts are not added as 162 unique URLs. LCP validation remains Failed, completed August 27; INP validation is already Started (2026-10-11), changed from the previous saved Not Started state. This run did not start it. No passed field recovery, INP gain or overall speed improvement is claimed. Comparable profiling after release remains pending because the October 12 source is not publicly visible; the eighteen October 12 measurements remain the retained baseline. TBT is not INP. GTM's additional Clarity project still requires tracking-owner configuration/debug review, not guessed removal.

## Next actions and run limits

1. Publish the already-tested October 12 source through the verified release workflow once project access works; rerun the public pagination/alias/image/table and support matrix before affected validation or crawl requests.
2. Monitor the one accepted Dashboard request for actual indexing; inspect the important desired canonicals absent from the dated indexed set without requesting aliases or unchanged pages in bulk.
3. Resolve the tutorials locale relationship and enrich each missing-HTML disposition before any content deletion/merge/retirement. Preserve valid pagination and rendering assets.
4. After release, repeat comparable production mobile profiles and interactions; review actual GTM/Clarity configuration and consent/events with the tracking owner. Weekly India Web keyword scorecard is due October 15 using complete comparable periods and reporting-lag/low-sample limits.
5. Retain the supplied baseline and seven-day end guard. Deliver the final beginning/end URL-level report and pause this automation after October 19; no new schedule was created today.

No application source was changed in this run. No build of unchanged code, speculative content edits, outreach, analytics conversion, deletion or validation restart is claimed. Unrelated user files and tsconfig.tsbuildinfo remain preserved. This scorecard and the existing seven-day execution report are the reviewable documentation changes; private raw evidence and local plan/log remain outside their source commit.
