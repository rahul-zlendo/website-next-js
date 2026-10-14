# Seven-day SEO execution — 12 October 2026

## Delivered in the application

- Blog slash, regional alias and legacy archive equivalents now normalize with one permanent 308. `/blog/page/29/` resolves directly to `/blog?page=29`; query parameters are preserved.
- Valid pagination has distinct content and self-referencing canonical metadata. Invalid, repeated and out-of-range page values return a noindex 404. Count and article retrieval share one CMS request.
- Published article links emitted from portable content normalize to the intended no-slash URLs. The live sitemap already contained 418 blog URLs without trailing slashes.
- The actual leading article image gets a matching responsive preload and CDN preconnect. Below-fold images retain lazy loading. Wide article tables stay within horizontally scrollable containers on mobile.
- Blog chat loads on demand and no longer automatically opens. Direct Clarity and Toolzbuy scripts wait until after load. Existing GA/GTM configuration remains pending a tracking-owner review; profiling found an additional Clarity project injected through GTM.
- A localhost-only Web Vitals console probe supports follow-up interaction measurement.

## Verification

The final production build completed successfully (578 static pages). All 64 built-server HTTP checks passed, including distinct pagination, aliases, archive URLs, malformed pagination, the three historical 5xx examples and all 25 wanted historical article examples. Routing, responsive image and help-center checks passed; TypeScript and diff checks passed. The configured build skips lint, so no lint pass is claimed.

The historical daily-room-rent article and project-cost-estimation category currently return deliberate noindex 404s and have no exact published CMS record. The dashboard support tag returns 200. No unrelated missing page was redirected to the homepage. Restoring missing content requires its original content and business-value decision.

## Content audit

The audit ledger covers 629 unique URLs: 238 crawled examples, 204 discovered examples and historical 404 examples, after deduplication. It identifies 15 rendering assets, 26 pagination URLs, 53 priority AI/design/product/support HTML URLs and 199 missing HTML URLs. Priority is based on relevance; traffic, conversions and backlink evidence were not available. Preserve assets and legitimate pagination. Review missing or obsolete references individually before removing content or changing its destination.

All 133 internal blog links (43 unique targets) resolve successfully. Raw URL ledgers, crawl results and measurement evidence remain in `artifacts/seo-2026-10-12/`; they are not included in the source commit.

## Canonical conflicts

Search Console lists 15 examples. Four individual inspections are saved: balcony fencing, house-design styles and dining-room basin declare the intended no-slash URL while Google selected their historical slash variant; India tutorials declares `/in/tutorials` while Google selected `/tutorials`. The tutorial conflict requires a locale/content decision. Eleven remaining Google-selected canonical inspections are pending because the browser debugger connection became unavailable. Do not describe the entire conflict review as complete.

HTTP and HTTPS-www variants with trailing slashes currently take two redirects. Collapsing protocol/host normalization and path normalization requires upstream hosting/edge configuration access; application path equivalents are verified in one hop.

## Mobile performance evidence

Eighteen repeated mobile Lighthouse runs cover three articles on live and built-local origins. Median LCP in milliseconds:

| Article | Live | Built local |
| --- | ---: | ---: |
| Almirah | 4308 | 3702 |
| Balcony | 4268 | 3807 |
| AI interior design | 4389 | 3672 |

These are different origins with variable host benchmark results, not a controlled causal before/after experiment. LCP still exceeds 2.5 seconds. TBT varied and is not INP. No fresh reliable INP result was captured; the historical field group was 207 ms with LCP 2.7 seconds. Local lab CLS medians were below 0.1, but that does not establish field recovery. Retest production after release and assess LCP <=2.5 seconds, INP <=200 ms and CLS <=0.1 at the 75th percentile.

## Remaining owner actions

Technical owner: confirm production publishes the tested source, collapse upstream host/protocol redirect chains, investigate measured GA/GTM and first-party long tasks, and run production interaction/field verification. Vercel connector access returned 403, so release visibility is limited to public acceptance checks.

SEO owner: finish the eleven canonical inspections when Search Console browser access returns; decide the tutorial locale relationship; enrich the 199 missing-HTML dispositions with traffic, backlinks and original content; prioritize the 53 AI/product/support URLs. Restart applicable validation only after the relevant public checks pass. Existing validation was not restarted prematurely.

Google references: [canonical consolidation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).

## Source release status

Implementation commit `cd80425` was merged with the newly published Smart Wizard changes and pushed to `origin/global_dev` as `8cefc04`. Local and remote branch hashes matched after push. The first public acceptance check after push still showed the previous behavior: `/blog/page/29/` and the regional article slash URL redirected only to their slashless equivalents, page 2 canonicalized to `/blog`, and page 9999 returned 200. Production publication is therefore unconfirmed; do not restart affected validation on this evidence. The temporary local test server was stopped and the mobile browser viewport restored.


## October 14 execution checkpoint — seven-day window day 2

Refreshed Search Console scopes (data October 9): All known 413 indexed / 955 excluded; submitted 405 / 276; global sitemap 365 / 188; India sitemap 40 / 88; parent scope 405 / 276. Every displayed exclusion and existing validation state is retained in docs/seo-indexing-scorecard-2026-10-14.md. Exact matching of all 413 displayed indexed examples against today's 688 desired URLs yields 405 matches / 283 absent from the dated list; absence is not fresh non-indexing. No all-known subtraction or newly-indexed count is fabricated.

Live sitemap/CMS reconciled: 688 URLs, 418 articles, 270 other pages. The earlier 417 CMS count is explained by the real October 12 AI home-design article; six additional template URLs explain 682→688. All 688 pass 200/self-canonical/indexable checks. Refreshed all 629 ledger URLs with zero reproduced 5xx/probe errors; 199 missing HTML pages still need individual value/backlink/replacement evidence.

Completed the eleven outstanding canonical inspections and separately refreshed India tutorials; all 15 baseline examples now have saved individual results. Google still displays historical duplicate labels, with several N/A/ambiguous selections. Current aliases resolve in one 308 to their canonical. Shared tutorial content and Google's global selection require an owner locale decision. One request for the substantively restored Dashboard guide was accepted after live content/HTTP acceptance; it is queued, not confirmed indexed. No unchanged request/validation restart occurred.

October 12 blog source remains pushed (cd80425 / merge 8cefc04) but fails public pagination/legacy/region/table/preload acceptance. Current repository/origin tip 37ff2c0 matches; public deployment ID remains dpl_8E5jbJgAarhHWJyqNpjt6c12mw3b. Vercel team-scoped lookup still returns 403. Working project access is needed to inspect/publish the real release; no source rewrite or guessed deployment was made.

Mobile field report October 12: 81 URLs need improvement in the same representative group, LCP 2.7 s, INP 210 ms; LCP historical validation Failed and INP already Started. This agent did not start it, and no field pass is claimed. Reprofile production after publication; GTM/Clarity review remains dependent on actual configuration access. Weekly India Web comparison remains due October 15. Automation end/report/pause remains October 19.

Dated screenshots, XML, complete indexed example sets, refreshed 629-URL and 688-desired-URL dispositions, checks and accepted-request proof: artifacts/seo-2026-10-14/. Daily scorecard records evidence, validation, release status and next actions. No application code changed; unrelated local files are preserved.


## October 14 publication and evening acceptance — final follow-up

This dated follow-up supersedes the initial October 14 checkpoint's pending-release/access statements while preserving that earlier observation and the supplied baseline. Production publication was verified first on 37ff2c0, then bounded fixes 929a1cf and 48918b1 were validated and pushed to global_dev. Exact source 48918b1 is Ready in Production (dpl_CJZKhdWyvVghaZGaPXRQKHyLYbge); all 82 public HTTP checks pass at 2026-10-14T15:24:10.417Z. Empty blog-page values return noindex 404, valid archive canonicals and legacy aliases work, product aliases redirect once with queries preserved, and the old US business chain is collapsed. Local build/type/routing/help/compiled-manifest checks and all 82 local HTTP checks passed; lint is skipped by configuration.

The 629-entry ledger now has 404 HTTP 200, 210 HTTP 404 (199 HTML / 11 invalid pagination), 15 retained assets, zero reproduced 5xx/probe failures/chains. Six legitimate archives were restored; three invalid query pages became correct noindex 404s. No missing HTML was deleted or redirected without value/backlink/equivalent evidence. The eleven canonical inspections and separate India tutorials investigation are complete. The single Dashboard indexing request is accepted/queued, not confirmed indexed; it was not repeated in the evening.

Evening Chrome refresh confirms unchanged October 9 GSC scopes: all known 413/955, submitted 405/276, global 365/188, India 40/88, parent 405/276. Every displayed exclusion and validation state is retained. Fresh live sitemap/CMS inventory is 689 URLs (419 articles / 270 other), with every URL passing 200/self-canonical/indexable checks. Today's additional article was actually published at 10:27:31 UTC; CMS significant-change fields are retained. The complete morning October 9 indexed example sets match 405 of the evening desired URLs; 284 are absent from that dated list, not established as currently unindexed.

Nine post-reader-publication mobile lab runs yield median LCP 4.276/4.107/3.929 s (almirah/balcony/AI), TBT 2420/2829/2716 ms and lab CLS about 0.003. Variable CPU limits causal comparison; TBT is not INP. Field October 12 remains LCP 2.7 s / INP 210 ms in an 81-URL needs-improvement group. Mobile page overflow is resolved in the observed 412px layout and menu/cookie/chat controls work. Read-only GTM review confirms live version 14 and All Pages Clarity v486ty6jbe alongside direct xggelem96e; owner consent/project/debug review and an authorized completed conversion remain necessary. Existing unpublished drafts were preserved and GTM was not changed.

Remaining actions: measured first-party long tasks and tracking review, tutorials locale decision, individual 199-HTML dispositions, actual indexing monitoring and October 15 complete-period India Web comparison. The existing automation continues through October 19, then final reporting/pause. Evidence and full acceptance details: docs/seo-indexing-scorecard-2026-10-14.md and artifacts/seo-2026-10-14/evening/. Unrelated checkout changes remain untouched.
