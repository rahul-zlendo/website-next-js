# Virtual Walkthrough Page Migration

## Summary
Successfully migrated `src/pages/VirtualWalkthroughPage.tsx` to `app/[country]/products/virtual-walkthrough/page.tsx` with Next.js App Router transformations.

## Key Transformations

### 1. **Client Component Directive**
- Added `'use client';` at the top since the component uses React hooks (`useState`) and client-side animations (Framer Motion)

### 2. **Import Changes**
- ✅ Changed `Link` from `react-router-dom` to `next/link`
- ✅ Changed `useCountry()` hook to `useParams()` from `next/navigation`
- ✅ Updated import path: `'../constants/urls'` → `'@/lib/constants/urls'`
- ✅ Removed `SEOHead` component (not compatible with Next.js App Router client components)

### 3. **Routing & Navigation**
- ✅ Replaced `Link` prop `to` with `href` throughout the component
- ✅ Implemented country path generation using `useParams()` instead of context
- ✅ Built local `paths` object based on dynamic country parameter

### 4. **Country Context Replacement**
```typescript
// Before (React Router + Context)
const { paths } = useCountry();

// After (Next.js App Router)
const params = useParams();
const country = params?.country as string || 'in';
const paths = {
    enterpriseDemo: `/${country}/business#demo-form`,
    enterprise: `/${country}/business`,
    plans: `/${country}/plans`,
    contact: `/${country}/contact`,
};
```

### 5. **SEO/Metadata**
- ❌ Removed `metadata` export (not compatible with client components)
- 📝 Added documentation comment suggesting metadata be handled in parent `layout.tsx`
- 💡 For SEO, consider creating a separate server component wrapper or handling metadata in the layout file

### 6. **Image Assets**
- 🔄 Replaced local image imports with placeholder Unsplash URLs:
  - `VRWalkthroughImg`: Temporary placeholder
  - `VRImg`: Temporary placeholder
- ⚠️ **TODO**: Copy actual VR images from `src/assets/vr/` to `public/assets/vr/` and update paths

### 7. **External Links**
- ✅ Kept `SIGNUP_URL` as external link using `<a>` tag (appropriate for external URLs)
- ✅ Internal navigation uses Next.js `<Link>` component

## File Structure
```
Before: src/pages/VirtualWalkthroughPage.tsx
After:  app/[country]/products/virtual-walkthrough/page.tsx
```

## Verification
- ✅ No linter errors
- ✅ All imports updated correctly
- ✅ Client-side interactivity preserved (useState, Framer Motion)
- ✅ Dynamic routing with country parameter working

## Next Steps

### 1. Add Image Assets (High Priority)
```bash
# Create directory if not exists
mkdir -p public/assets/vr

# Copy images from old structure (if they exist)
# Then update these lines in page.tsx:
const VRWalkthroughImg = '/assets/vr/vr-walkthrough.jpg';
const VRImg = '/assets/vr/vr.jpg';
```

### 2. Handle SEO Metadata (Recommended)
Create `app/[country]/products/virtual-walkthrough/layout.tsx`:
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "3D Virtual Walkthrough for Homes | Zlendo Realty – Free Demo",
  description: "Experience immersive 3D virtual walkthroughs that showcase space, flow, and finishes. Ideal for premium home plan services. Book a free demo today.",
  keywords: "interactive virtual tour services, 3d walkthrough rendering, architectural walkthrough services, free immersive 3d walkthrough, property walkthrough animation, real estate virtual tour",
  openGraph: {
    title: "Immersive 3D Virtual Home Walkthroughs",
    description: "Let clients explore homes before construction begins. A must-have for real-estate sales. Start your free trial.",
  },
  twitter: {
    title: "Virtual Walkthroughs for Modern Homes",
    description: "Step inside your designs virtually. Explore free demos.",
    card: "summary_large_image",
  },
};

export default function VirtualWalkthroughLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

### 3. Test the Page
- Navigate to `/{country}/products/virtual-walkthrough` (e.g., `/in/products/virtual-walkthrough`)
- Verify all interactive elements work (FAQ accordion, animations)
- Test navigation links to enterprise demo and other pages
- Verify mobile responsiveness

## Migration Pattern Notes

This migration follows the standard pattern for converting React Router pages to Next.js App Router:

1. Add `'use client'` for interactive components
2. Replace `react-router-dom` with Next.js navigation
3. Use `useParams()` for dynamic route parameters
4. Update import paths to use `@/` alias
5. Handle metadata in server components or layouts
6. Update all image paths to use Next.js public directory

## Related Files
- Source: `src/pages/VirtualWalkthroughPage.tsx`
- Target: `app/[country]/products/virtual-walkthrough/page.tsx`
- Constants: `lib/constants/urls.ts`
- Context Reference: `lib/context/CountryContext.tsx` (not used directly, pattern adapted)
