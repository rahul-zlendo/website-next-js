# SEO daily scorecard — 14 October 2026

Seven-day execution window: October 13–19, day 2. Collected October 14; Google report dates below remain explicit. The October 4 baseline is preserved in seo-indexing-scorecard-2026-10-12.md. The validated repairs are pushed to global_dev and verified in Production. Morning and evening evidence is dated separately; one selective indexing request was accepted.

## Search Console counts and dated intersection

| Scope | Report date | Indexed | Not indexed | Total reported |
| --- | --- | ---: | ---: | ---: |
| all-known | 2026-10-09 | 413 | 955 | 1368 |
| all-submitted | 2026-10-09 | 405 | 276 | 681 |
| global-sitemap | 2026-10-09 | 365 | 188 | 553 |
| india-sitemap | 2026-10-09 | 40 | 88 | 128 |
| sitemap-index | 2026-10-09 | 405 | 276 | 681 |

All known pages changed from 430 indexed / 963 excluded on October 4 to 413 / 955 on October 9 (differences −17 / −8). These totals alone do not establish losses among today's desired canonical URLs. All submitted and the two children sum to 681 known URLs in Google's dated scope; the morning sitemap had 688 and the evening sitemap has 689. All five scopes were refreshed in Chrome again in the evening, with unchanged October 9 dates, counts and every displayed exclusion/validation state. The parent sitemap scope is not an additional inventory to add to its children.

All 413 displayed all-known indexed examples and all 405 displayed submitted indexed examples were captured, with row ranges proving list completeness. Exact URL matching against the morning 688 desired sitemap URLs yields **405 matches and 283 absent from that dated example list**. Against the evening 689-URL inventory, the retained complete October 9 example sets yield **405 matches and 284 absent**. The unchanged report date/counts/reasons were refreshed; the complete example sets were captured in the morning. Eight indexed examples lie outside today's sitemap, including three valid pagination URLs. Absence is not a fresh individual inspection or proof of current non-indexing. No subtraction of an all-known indexed total from a sitemap total was used. Newly indexed/lost desired URLs versus October 4 cannot be established without that date's complete URL-level set.

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

The initial 629-URL sweep found 401 HTTP 200, 213 HTTP 404 and one redirect chain. After published repairs, all 27 pagination/chain entries were refreshed: **404 HTTP 200, 210 HTTP 404 (199 HTML, 11 invalid pagination), 15 rendering assets, zero 5xx/probe failures and zero chains**. Six legitimate legacy archives changed 404→200, three out-of-range query pages changed 200→404/noindex, and the obsolete US business path now redirects once to /business. Fifteen valid pagination entries remain 200 with page-specific canonicals; eleven outside the 35-page inventory remain correct noindex 404s. No wanted published/submitted URL is missing. Historical 5xx labels are not reproduced server failures today. Individual original-content, traffic/conversion, backlink and equivalent-replacement evidence is still missing for the 199 HTML dispositions; they are not all declared intentionally retired. No deletion, homepage redirect or temporary removal was used.

Evidence: live-inventory.json and saved XML children; submitted-http-checks.json; url-dispositions.json/csv (629 rows); morning desired-url-dispositions.csv (688 rows) and evening/desired-url-dispositions.csv (689 rows). The 53 priority AI/design/product/support entries remain in the ledger.

Evening inventory at 2026-10-14T15:14:47.747Z: **689 unique submitted URLs, 419 articles and 270 other pages** (global 558, India 131). All 419 published CMS articles match, with zero missing/orphan entries and still 35 valid listing pages. The added article is /blog/2d-to-3d-home-design-homeowners-architects-builders, published 2026-10-14T10:27:31Z, explicit updatedAt 10:29:00Z, CMS _updatedAt 10:30:34Z; the agent did not publish it. The fresh 689-URL sweep passes every 200/self-canonical/indexability check, with no redirect, 5xx, missing page, metadata mismatch or probe failure. No URLs were removed since morning. Evidence: evening/live-inventory.json, XML children, submitted-http-checks.json and daily-scorecard.json.

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

Initial public checks at 04:26 UTC found deployment dpl_8E5jbJgAarhHWJyqNpjt6c12mw3b with the old blog behavior. Later, signed-in Chrome project access worked and Production source 37ff2c0 (dpl_D3Kfmhnj8mEX7CFktP5MZTmGMBJ9) exposed the October 12 blog fixes. The subsequent complete checker found an empty page query and mapped product slash chains still failing. The earlier connector 403 is preserved as historical evidence; browser release access is now resolved.

Validated and pushed commits:

- 929a1cf35fc35042cbbd2b5a5d549fa81856e21d: make explicit empty blog-page queries return 404/noindex, map retired product aliases, collapse the legacy US business chain, and collect all HTTP assertion failures in the saved matrix.
- 48918b10c65a3c481985ae543f79b3464ca1b6d2: exclude mapped product aliases from the generic slash fallback and verify disjoint routes in the actual compiled manifest. Production 929a1cf passed 73/82 checks; nine slash aliases still took two hops, so that intermediate release was not declared accepted.

Both bounded implementations passed production builds (579 generated pages locally), TypeScript validation, routing/help checks and the final compiled redirect assertions. Final local HTTP acceptance passed 82/82. The configured build skips lint, so no lint pass is claimed. Exact source 48918b1 was redeployed in the Production environment through the signed-in Zlendo Realty website-next-js dashboard, using the authorized release workflow without project/env/analytics setting edits.

Affected source files: middleware.ts, next.config.ts, scripts/seo-checks/blog-routing-check.cjs, scripts/seo-checks/blog-http-check.cjs and scripts/seo-checks/built-redirect-check.cjs. Earlier truthful Smart Wizard copy, matching regional FAQs and units, five India canonicals, contextual links and actual significant-change dates remain verified separately in india-live-checks.json and the supplied plan completion records.

**Final Production is Ready: dpl_CJZKhdWyvVghaZGaPXRQKHyLYbge, source global_dev / 48918b1. All 82 public HTTP checks pass at 2026-10-14T15:24:10.417Z.** This verifies valid pagination canonicals, 404/noindex invalid pages, legacy archives, regional/slash normalization, all mapped product aliases with preserved queries, the business equivalent and support pages. Earlier live body/preload/preconnect/table checks and mobile screenshot evidence confirm publication of the October 12 reader fixes. These are HTTP/rendering results, not new Google indexing. Dashboard: https://vercel.com/zlendo-realty/website-next-js/CJZKhdWyvVghaZGaPXRQKHyLYbge. Evidence: evening/production-ready.txt/png, evening/production-redeploy-preflight.txt/png, evening/production-http-checks-published.json, release-result.json.

Fresh mobile field data remains dated October 12: **81 URLs need improvement, zero poor/good; representative group LCP 2.7 s and INP 210 ms**. LCP validation Failed (completed August 27); INP already Started October 11. This run did not start/restart it. Targets LCP <=2.5 s, INP <=200 ms and CLS <=0.1 remain unfulfilled or not established by fresh field evidence.

Nine production Lighthouse 13.5.0 mobile runs (three each) were captured after the reader publication on source 37ff2c0:

| Article | Median LCP (range), ms | Median TBT, ms | Median lab CLS |
| --- | ---: | ---: | ---: |
| Almirah | 4276 (3945–4410) | 2420 | 0.003118 |
| Balcony | 4107 (4017–5401) | 2829 | 0.002996 |
| AI interior design | 3929 (3763–4651) | 2716 | 0.002998 |

The actual leading body image is the LCP element in each group. Variable host CPU, different comparison dates/origins and a concurrent non-incremental type check limit causal attribution; no production build ran during profiling. TBT is not INP; low lab CLS is not proof of field recovery. No overall speed improvement is claimed. At a 412px viewport, document width is 402px and wide tables scroll inside 354px wrappers without page overflow. Menu, cookie decline and click-open chat work; no chat message was sent. Functional interactions do not measure INP. Evidence: mobile-lab-summary.json, nine saved reports/traces, mobile-layout.json/png and mobile-interactions.json.

Read-only GTM access now works: GTM-PBBNR2XS live version 14 (August 5), 51 tags/49 triggers. The existing unmodified official Clarity tag runs on All Pages with project v486ty6jbe; production also loads direct project xggelem96e. Both requests are observed, but duplicate sessions/events are not inferred. Long tasks include GA/GTM/Clarity and a first-party React chunk. The workspace's two unpublished CTA drafts were preserved; zero GTM edits/publishes occurred. Correct project choice, consent/debug behavior and an authorized completed test conversion still require tracking-owner review. Evidence: gtm-review.json and configuration/version screenshots. No analytics configuration was guessed or conversion invented.

## Next actions and run limits

1. Monitor the one accepted Dashboard request for actual indexing; selectively inspect important desired canonicals absent from the dated list. No unchanged indexing request or validation restart is needed for this redirect-only follow-up.
2. Resolve the tutorials locale relationship and enrich each of the 199 missing-HTML dispositions with original content, traffic/conversions, backlinks and equivalent-replacement evidence before any deletion/merge/retirement.
3. Address the measured first-party long tasks and confirm GTM/Clarity ownership/consent/events, then capture production interaction/field evidence. The current field group still misses LCP and INP targets.
4. Refresh the India Web keyword scorecard October 15 with complete comparable periods, reporting lag and low-sample limits; product examples, authorized conversion measurement and real case-study evidence remain open in the supplied plan.
5. Deliver beginning/end URL-level results and pause after the October 19 run. The automation remains within its existing seven-day window; no new schedule was created today.

No published content was deleted, no temporary removal/outreach/paid service was used, and no field recovery or universal indexing is promised. Temporary servers are stopped, viewport overrides reset, and unrelated user files including tsconfig.tsbuildinfo remain preserved. Private raw evidence and the local plan/log remain outside the source commit.
