# India Web weekly scorecard — October 15, 2026

Status: **measurement pending signed-in Search Console access**. Chrome is absent from the available browser inventory on two checks. No Search Console connector is available. The supplied July 6–October 5 audit remains the baseline; it is not a comparable previous 28-day period. No clicks, impressions, CTR, positions, signups or trials were collected today, and unavailable values are not zero.

## Filters and complete periods to capture

Property: `https://zlendorealty.com/`. Search type: Web. Country: India, meaning the searcher's location. Determine the latest day **D that Search Console identifies as complete** before choosing periods. Compare D−27 through D against D−55 through D−28, both inclusive, using identical filters. Record D, the capture time, reporting lag and the published release date (October 14). Do not include partial days or compare the supplied three-month baseline directly with a 28-day window.

Use each primary page as an exact page filter; retain sitewide query rows separately to detect competing global pages. Capture both the exact nine-phrase filter below and related non-brand variants. Keep page totals separate from query-row totals and document hidden/low-sample rows; do not sum overlapping query clusters or treat absent rows as zero demand.

```text
^(AI interior design|AI floor plan generator|AI floor plan design|2D to 3D floor plan|2D to 3D converter|3D home design software|virtual home design|AI home design software|floor plan design software)$
```

| Cluster / exact primary page | Target phrases | Current / previous impressions, clicks, CTR, position | Organic signup/trial acceptance | Next evidence |
| --- | --- | --- | --- | --- |
| Generator — /in/products/smart-wizard | AI floor plan generator | Unavailable / unavailable | Unverified | Complete-period query/page export; fresh Google canonical |
| Planner — /in/products/floor-planner | AI floor plan design; floor plan design software | Unavailable / unavailable | Unverified | Same filters and periods; competing global-page rows |
| Converter — /in/products/2d-to-3d | 2D to 3D floor plan; 2D to 3D converter | Unavailable / unavailable | Unverified | Floor-plan intent variants and exact page export |
| Interior — /in/products/room-styler | AI interior design | Unavailable / unavailable | Unverified | Related variants and exact page export |
| Home software — /in | 3D home design software; virtual home design; AI home design software | Unavailable / unavailable | Unverified | Related variants and exact page export |

All five pages remain HTTP 200, self-canonical and indexable in today's public checks. That is distinct from a fresh Google indexing result. Retain the October 10 individual evidence that all five were indexed, and the October 12/14 request history. No unchanged request was repeated today.

## Conversion and reporting limits

The October 14 read-only review established GTM-PBBNR2XS live version 14, an All Pages Clarity tag for v486ty6jbe, and a direct xggelem96e request. Those observations do not establish duplicate events or a completed conversion. The two existing unpublished CTA drafts were preserved. An authorized test identity, runtime consent/debug verification, correct cross-domain source attribution and one completed signup/trial appearing once are still required. Do not put a public signup-page visit into the conversion column.

October 14's release is too recent for an outcome claim from this scorecard. Low exact-query samples should be labelled insufficient; use a longer, equally filtered window if needed. No rankings, volumes, conversions or improvements are inferred from technical acceptance.

Next action: reconnect the signed-in Chrome profile to browser control, refresh all five indexing scopes and their report dates, determine D, then populate this table and save the filtered report screenshots/exports. The October 15 measurement remains pending until that evidence exists. Raw access/HTTP evidence: `artifacts/seo-2026-10-15/access-dependencies.json` and `india-live-checks.json`.
