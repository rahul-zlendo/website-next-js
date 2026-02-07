# Route Migration Map

## Overview

All routes from the React Router application have been mapped to Next.js App Router structure. All routes are scoped under `[country]` dynamic segment supporting: `in`, `us`, `uk`, `eu`, `au`.

## Route Structure

### Root Routes

| Old Route | New Route | Implementation | Status |
|-----------|-----------|----------------|---------|
| `/` | `/` | `app/page.tsx` (geo-redirect) | ✅ Complete |
| `/:country/*` | `/[country]/*` | `app/[country]/layout.tsx` | ✅ Complete |

### Core Pages

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/` | `/[country]/` | `app/[country]/page.tsx` | 🚧 In Progress |
| `/:country/individuals` | `/[country]/individuals` | `app/[country]/individuals/page.tsx` | ⏳ Pending |
| `/:country/business` | `/[country]/business` | `app/[country]/business/page.tsx` | ⏳ Pending |
| `/:country/contact` | `/[country]/contact` | `app/[country]/contact/page.tsx` | ⏳ Pending |
| `/:country/plans` | `/[country]/plans` | `app/[country]/plans/page.tsx` | ⏳ Pending |
| `/:country/partners` | `/[country]/partners` | `app/[country]/partners/page.tsx` | ⏳ Pending |

### Product Pages (8 Routes)

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/products/floor-planner` | `/[country]/products/floor-planner` | `app/[country]/products/floor-planner/page.tsx` | ⏳ Pending |
| `/:country/products/cost-estimator` | `/[country]/products/cost-estimator` | `app/[country]/products/cost-estimator/page.tsx` | ⏳ Pending |
| `/:country/products/interiors-exteriors` | `/[country]/products/interiors-exteriors` | `app/[country]/products/interiors-exteriors/page.tsx` | ⏳ Pending |
| `/:country/products/virtual-walkthrough` | `/[country]/products/virtual-walkthrough` | `app/[country]/products/virtual-walkthrough/page.tsx` | ⏳ Pending |
| `/:country/products/realistic-renders` | `/[country]/products/realistic-renders` | `app/[country]/products/realistic-renders/page.tsx` | ⏳ Pending |
| `/:country/products/2d-to-3d` | `/[country]/products/2d-to-3d` | `app/[country]/products/2d-to-3d/page.tsx` | ⏳ Pending |
| `/:country/products/vastu` | `/[country]/products/vastu` | `app/[country]/products/vastu/page.tsx` | ⏳ Pending |
| `/:country/products/room-styler` | `/[country]/products/room-styler` | `app/[country]/products/room-styler/page.tsx` | ⏳ Pending |

### Dynamic Product Route

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/products/:productId` | `/[country]/products/[productId]` | `app/[country]/products/[productId]/page.tsx` | ⏳ Pending |

### Template Pages

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/viewalltemplates` | `/[country]/viewalltemplates` | `app/[country]/viewalltemplates/page.tsx` | ⏳ Pending |
| `/:country/template-detail?templateId=X` | `/[country]/template-detail?templateId=X` | `app/[country]/template-detail/page.tsx` | ⏳ Pending |

### Use Case Pages

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/use-cases` | `/[country]/use-cases` | `app/[country]/use-cases/page.tsx` | ⏳ Pending |

#### Individual Use Cases (4 Routes)

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/use-case/home-remodeling` | `/[country]/use-case/home-remodeling` | `app/[country]/use-case/home-remodeling/page.tsx` | ⏳ Pending |
| `/:country/use-case/interior-design` | `/[country]/use-case/interior-design` | `app/[country]/use-case/interior-design/page.tsx` | ⏳ Pending |
| `/:country/use-case/vastu-optimization` | `/[country]/use-case/vastu-optimization` | `app/[country]/use-case/vastu-optimization/page.tsx` | ⏳ Pending |
| `/:country/use-case/new-home-building` | `/[country]/use-case/new-home-building` | `app/[country]/use-case/new-home-building/page.tsx` | ⏳ Pending |

#### Business Use Cases (4 Routes)

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/business/commercial-spaces` | `/[country]/business/commercial-spaces` | `app/[country]/business/commercial-spaces/page.tsx` | ⏳ Pending |
| `/:country/business/real-estate-brokers` | `/[country]/business/real-estate-brokers` | `app/[country]/business/real-estate-brokers/page.tsx` | ⏳ Pending |
| `/:country/business/nri-remote-planning` | `/[country]/business/nri-remote-planning` | `app/[country]/business/nri-remote-planning/page.tsx` | ⏳ Pending |
| `/:country/business/developer-solutions` | `/[country]/business/developer-solutions` | `app/[country]/business/developer-solutions/page.tsx` | ⏳ Pending |

### Policy Pages (10 Routes)

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/privacy-policy` | `/[country]/privacy-policy` | `app/[country]/privacy-policy/page.tsx` | ⏳ Pending |
| `/:country/terms-of-service` | `/[country]/terms-of-service` | `app/[country]/terms-of-service/page.tsx` | ⏳ Pending |
| `/:country/cookie-policy` | `/[country]/cookie-policy` | `app/[country]/cookie-policy/page.tsx` | ⏳ Pending |
| `/:country/dpa` | `/[country]/dpa` | `app/[country]/dpa/page.tsx` | ⏳ Pending |
| `/:country/general-terms` | `/[country]/general-terms` | `app/[country]/general-terms/page.tsx` | ⏳ Pending |
| `/:country/nda-customers` | `/[country]/nda-customers` | `app/[country]/nda-customers/page.tsx` | ⏳ Pending |
| `/:country/nda-vendors` | `/[country]/nda-vendors` | `app/[country]/nda-vendors/page.tsx` | ⏳ Pending |
| `/:country/refund-policy` | `/[country]/refund-policy` | `app/[country]/refund-policy/page.tsx` | ⏳ Pending |
| `/:country/sla` | `/[country]/sla` | `app/[country]/sla/page.tsx` | ⏳ Pending |
| `/:country/community-guidelines` | `/[country]/community-guidelines` | `app/[country]/community-guidelines/page.tsx` | ⏳ Pending |

### Help & Support

| Old Route | New Route | File | Status |
|-----------|-----------|------|--------|
| `/:country/help-center` | `/[country]/help-center` | `app/[country]/help-center/page.tsx` | ⏳ Pending |

### Redirects

| Old Route | Redirects To | Implementation | Status |
|-----------|--------------|----------------|---------|
| `/:country/enterprise` | `/:country/business` | Replace redirect in route | ⏳ Pending |
| `/:country/pricing` | `/:country/plans` | Replace redirect in route | ⏳ Pending |
| `/:country/terms` | `/:country/terms-of-service` | Replace redirect in route | ⏳ Pending |
| `/:country/privacy` | `/:country/privacy-policy` | Replace redirect in route | ⏳ Pending |
| `/:country/policies/:slug` | `/:country/privacy-policy` | Replace redirect in route | ⏳ Pending |

### Catch-All

| Pattern | Behavior | Implementation | Status |
|---------|----------|----------------|---------|
| `*` (invalid country) | Redirect to `/in` | Middleware validation | ✅ Complete |
| `/:country/*` (invalid path) | Redirect to `/:country/` | Catch-all redirect | ⏳ Pending |

## Route Count Summary

- **Total Routes:** 35+
- **Completed:** 3 (infrastructure)
- **In Progress:** 1 (HomePage)
- **Pending:** 31+

## Migration Pattern

Each route follows this pattern:

### 1. Page Component (`page.tsx`)

```typescript
'use client';

import type { Metadata } from 'next';
// ... imports

export const metadata: Metadata = {
  title: 'Page Title | Zlendo Realty',
  description: '...',
  // ... SEO metadata
};

export default function PageName() {
  // Component logic
  return (/* JSX */);
}
```

### 2. Dynamic Routes

For dynamic segments (e.g., `[productId]`):

```typescript
export default async function ProductPage({
  params,
}: {
  params: Promise<{ country: string; productId: string }>;
}) {
  const { country, productId } = await params;
  // ...
}
```

### 3. Search Params

For query parameters (e.g., `?templateId=123`):

```typescript
export default function TemplateDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ templateId?: string }>;
}) {
  // Access via searchParams
}
```

## URL Examples

### Before (React Router)
```
https://app.zlendorealty.com/in/
https://app.zlendorealty.com/us/products/floor-planner
https://app.zlendorealty.com/uk/template-detail?templateId=456
```

### After (Next.js)
```
https://app.zlendorealty.com/in/
https://app.zlendorealty.com/us/products/floor-planner
https://app.zlendorealty.com/uk/template-detail?templateId=456
```

URLs remain identical - only internal implementation changes.

## SEO Enhancements

Each route will include:

1. **Dynamic Metadata**
   - Title optimized for search engines
   - Meta description (150-160 chars)
   - OpenGraph tags (og:title, og:description, og:image, og:url)
   - Twitter Card metadata

2. **Canonical URLs**
   - Normalized to `/in/` prefix
   - Prevents duplicate content issues

3. **Structured Data (JSON-LD)**
   - Breadcrumbs
   - Organization schema (root)
   - Product schema (product pages)
   - FAQPage schema (help center)

4. **hreflang Tags**
   - Language/region variants for multi-country support

## Notes

- All routes preserve pixel-perfect UI from React version
- No functional changes - only SSR enablement for SEO
- Middleware handles country validation and geo-detection
- All routes server-render content for crawlers

---

**Legend:**
- ✅ Complete
- 🚧 In Progress  
- ⏳ Pending

Last Updated: February 4, 2026
