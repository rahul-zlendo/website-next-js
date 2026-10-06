# Blog Migration → Production Cutover Plan

**Goal:** move the blog from `blog.zlendorealty.com` (WordPress, live today) to
`zlendorealty.com/blog/<slug>` (Next.js + Sanity, code merged into `global_dev`
in commit `14c3171`) **without losing Google's index of the 382 posts or
resetting Search Console history.**

Current state (as of 2026-07-03): the new code is live on `global_dev` but
**inert** — `middleware.ts` still redirects every `/blog/*` request to
`https://blog.zlendorealty.com`, so nothing changes for users or Googlebot
until the switch below is deliberately flipped. That's intentional — see the
merge commit notes.

---

## Why this is risky if done carelessly

Moving a subdomain's content to a subpath of the root domain is a "site move"
in Google's eyes. Handled correctly (1:1 permanent redirects, content parity,
sitemap coordination) Google typically re-consolidates rankings within
2–8 weeks with minimal traffic dip. Handled carelessly — partial redirects,
redirect loops, content mismatches, or leaving old URLs 404ing — it reads as
382 pages disappearing, which can tank the domain's topical authority for
months.

---

## Phase 0 — Pre-flight verification (safe, no production risk, do first)

1. **Content parity spot-check.** Pick ~20 posts across different months/categories
   and compare the live WP page against `zlendorealty.com/blog/<slug>` on a
   preview deploy: body text, images, headings, internal links inside the body
   copy (Portable Text conversion can silently drop or mangle links/embeds).
2. **Metadata parity.** Confirm `seoTitle`/`seoDescription` in Sanity match or
   improve on the current WP `<title>`/meta description for the same sample —
   changing these at the same time as the URL move adds a second variable to
   any ranking movement you observe afterward.
3. **Schema validation.** Run the Rich Results Test against a handful of
   `/blog/<slug>` preview URLs — confirm `BlogPosting`/`Article` + `Person` +
   `BreadcrumbList` JSON-LD validates (this exists per `generateArticleSchema`
   in `lib/utils/structuredData.tsx`).
4. **Sitemap.** Confirm `app/sitemap.ts` includes all 382 `/blog/<slug>` URLs
   with correct `lastmod`. If not, that's a code change to land before cutover.
5. **Orphan check.** Confirm nothing on `blog.zlendorealty.com` exists that
   *isn't* in the 382 migrated posts (category/tag archive pages, author pages,
   a `/feed`, paginated listing pages). Anything found needs a redirect target
   too (usually → `/blog` root, or the nearest equivalent listing/category
   page if one exists in the new app) — otherwise those URLs 404 post-cutover.

**Output of this phase:** a go/no-go call on content readiness, independent of
the redirect/infra work below.

---

## Phase 1 — Redirect map (done)

Generated from live Sanity data: **[`blog-redirect-map.csv`](blog-redirect-map.csv)**
— 382 rows, `old_url,new_url,301`, built directly from each post's `originalUrl`
and `slug.current`. This is the authoritative 1:1 mapping; regenerate it if any
posts are edited/renamed before cutover (the importer's `wpId`-based `_id`
keeps this idempotent).

Still needed before Phase 2: confirm from the WP admin (or GA/Search Console
Coverage report) whether any **non-post** URLs get real traffic — the archive/
tag/author pages flagged in Phase 0.

---

## Phase 2 — Redirects at the Cloudflare edge (recommended over WP-level)

Since Cloudflare fronts the site, do the 301s there rather than in WordPress:

- **Why edge-level:** works even after the WP origin is powered off, no origin
  round-trip latency, and it's the layer you already control independent of
  the WP host's health.
- **Mechanism:** Cloudflare **Bulk Redirects** (Rules → Redirect Rules → Bulk
  Redirects) — import `blog-redirect-map.csv` directly (Cloudflare accepts CSV
  for bulk redirect lists). Check your plan's list-size cap (Free/Pro tiers
  have limits around a few thousand entries — 382 rows is comfortably under
  any tier's limit).
- **Root path:** add one more explicit rule, `blog.zlendorealty.com/` (exact,
  no trailing path) → `https://zlendorealty.com/blog`, 301.
- **Fallback rule:** add a catch-all `blog.zlendorealty.com/*` → `https://zlendorealty.com/blog`
  (301) placed *after* the bulk list, so anything not explicitly mapped
  (typos, old query strings, the archive/tag pages from Phase 0 if you decide
  not to map them individually) lands on the blog root instead of 404ing.
- **Stage it, don't enable it yet.** Create the rule set and leave it
  disabled/in draft. Cloudflare lets you review the rule list without it being
  live traffic-affecting.

I don't have Cloudflare dashboard/API access — this step needs you (or whoever
holds the Cloudflare account) to import the CSV and wire the rules, using the
mapping file above as the source of truth. I can generate a Cloudflare
Bulk-Redirect-List-formatted export or a `wrangler`/API script instead of the
plain CSV if you tell me which import path your dashboard actually expects.

---

## Phase 3 — Search Console coordination

1. **Confirm property type.** If `zlendorealty.com` is verified as a **Domain
   property** in GSC, it already covers `blog.zlendorealty.com` and
   `zlendorealty.com/blog` under one roof — no "Change of Address" tool needed,
   Google treats this as a normal internal restructure once the 301s are live.
   If instead you have two separate **URL-prefix** properties (one for
   `blog.zlendorealty.com`, one for `zlendorealty.com`), you still do **not**
   need the Change of Address tool (that's specifically for moving to a
   different root domain) — standard 301s plus sitemap resubmission is the
   documented path for a subdomain-into-subpath consolidation.
2. **Submit the new sitemap** (`zlendorealty.com/sitemap.xml`, already includes
   `/blog/*` per Phase 0) in the `zlendorealty.com` GSC property.
3. **Leave the old blog sitemap submitted**, don't remove it from GSC —
   Google needs to keep crawling the old URLs post-cutover to *discover* the
   redirects. Only remove it 4–6 weeks after cutover once Coverage shows the
   old URLs have been reprocessed as redirects.
4. **Do not bulk-request indexing** for all 382 URLs (GSC rate-limits this
   hard) — the sitemap resubmission handles bulk discovery. Optionally use
   URL Inspection → Request Indexing on your 10–15 highest-traffic posts only,
   to nudge those specifically.

---

## Phase 4 — Code changes still needed before flipping the switch

- In `middleware.ts`, the commented block right after the `isBlog` handling
  (search `CUTOVER TARGET`) is the exact code to uncomment and replace the
  current `isBlog` redirect-to-WordPress block with, when you're ready.
- Confirm `app/sitemap.ts` lists `/blog/<slug>` for all posts (Phase 0 item).
- No other app code changes are required — the routes, schemas, and queries
  are already built and build-verified (382/382 static paths generated
  successfully in the last `next build`).

---

## Phase 5 — The actual cutover (do in one sitting, low-traffic window)

1. Pick a low-traffic window using GA/Cloudflare Analytics hourly data.
2. Deploy the middleware change (Phase 4) to production.
3. Enable the Cloudflare Bulk Redirect rules (Phase 2) in the same window.
4. **Immediately verify**, before walking away:
   - `curl -I https://blog.zlendorealty.com/<sample-slug>/` → expect `301` →
     `Location: https://zlendorealty.com/blog/<sample-slug>`
   - `curl -I https://zlendorealty.com/blog/<sample-slug>` → expect `200`
   - Purge Cloudflare cache for `blog.zlendorealty.com` and
     `zlendorealty.com/blog/*` so no stale cached WP pages linger.
   - Spot-check 5–10 redirects from the CSV at random, not just the first row.
5. Watch Cloudflare Analytics on `blog.zlendorealty.com` for a spike in 4xx/5xx
   in the following hour — that's your signal something in the bulk list is
   malformed.

## Phase 6 — Monitoring window (1–2 weeks, don't touch anything else)

- GSC Coverage/Page Indexing report on the `zlendorealty.com` property: watch
  "Page with redirect" count on old URLs decline and "/blog/*" indexed count
  rise. This is gradual — days to a couple weeks, not instant.
- GSC Performance report: filter to `/blog/` path, watch clicks/impressions
  trend — some temporary dip during re-consolidation is normal; a *sustained*
  drop past 3–4 weeks is the signal something's wrong.
- Don't change titles, URLs, or redirect targets again during this window —
  every additional change resets Google's re-evaluation clock.

## Rollback plan

Keep the WordPress origin **running** (don't decommission it) through the
entire monitoring window. If something goes wrong: disable the Cloudflare
redirect rules and revert the `middleware.ts` deploy — `blog.zlendorealty.com`
starts serving the original WP content again immediately, since it was never
touched, only fronted by a redirect. Only decommission the WP host once
Coverage has stabilized (Phase 6, typically 4–6 weeks out).

## News section

The migration plan originally covers `/news/*` (~148 posts) the same way,
but **that import hasn't run yet** (0 posts with `section == "news"` in
Sanity as of this report). Treat news as a fully separate, later cutover —
don't bundle it into this blog cutover; run its own Phase 0–6 once imported.

---

## Open items I need from you before Phase 2/3/5 can actually execute

1. Cloudflare dashboard access (or you run the Bulk Redirect import yourself
   using `blog-redirect-map.csv`) — I have no Cloudflare credentials in this
   environment.
2. Confirm GSC property type for `zlendorealty.com` (Domain vs URL-prefix) so
   Phase 3 step 1 is accurate.
3. Confirm whether `global_dev` auto-deploys to production or goes through a
   `main`/promotion step — Phase 5 assumes a deliberate production deploy,
   not that pushing to `global_dev` alone puts this live.
4. A decision on the archive/tag/author URLs from Phase 0, once you've
   confirmed whether they get meaningful traffic.
