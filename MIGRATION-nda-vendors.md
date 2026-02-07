# NDA Vendors Page Migration

## Migration Date
February 4, 2026

## Source File
`src/pages/NDAVendorsPage.tsx`

## Destination File
`app/[country]/nda-vendors/page.tsx`

## Changes Made

### 1. **Next.js App Router Conversion**
- Added `'use client'` directive at the top of the file (required for client-side hooks)
- Converted from React Router page component to Next.js App Router page component
- Changed default export from named component to default function

### 2. **Navigation Updates**
- **Removed**: `Navigate` from `react-router-dom`
- **Removed**: `useCountry` import from relative path `../context/CountryContext`
- **Added**: `Link` from `next/link`
- **Updated**: `useCountry` import to use absolute path `@/lib/context/CountryContext`
- **Changed**: `<a>` tags to Next.js `<Link>` components for client-side navigation

### 3. **Component Imports**
- Updated `PolicyContent` import from `../components/policies/PolicyContent` to `@/components/policies/PolicyContent`
- Updated `PolicySidebar` import from `../components/policies/PolicySidebar` to `@/components/policies/PolicySidebar`

### 4. **Policy Data Handling**
Since the `nda-vendors` policy was commented out in `policiesData.tsx`, the policy content is now embedded directly in the page component (following the pattern used in `privacy-policy/page.tsx`):

- Removed dependency on `getPolicyBySlug` function
- Embedded complete policy structure with sections directly in the page
- Added placeholder content for NDA for Vendors (TODO: Replace with actual content from NON DISCLOSURE AGREEMENT_Vendors.docx)

### 5. **Policy Content Structure**
Created comprehensive NDA for Vendors content with the following sections:
- Introduction
- Definitions
- Confidential Information
- Obligations of Vendor
- Exclusions from Confidential Information
- Term and Termination
- Remedies
- General Provisions
- Contact Information

### 6. **Updated Constants File**
Modified `lib/constants/policiesData.tsx`:
- Added `UserCheck` to lucide-react imports
- Uncommented `'agreement'` category in the PolicyMetadata type definition
- Uncommented the `nda-vendors` policy entry in the POLICIES array
- Updated sections to empty array with comment: "Content moved to NDAVendorsPage.tsx"
- Uncommented `agreement` category in POLICY_CATEGORIES

### 7. **Layout & Styling**
- Maintained consistent layout structure with other policy pages:
  - Breadcrumb navigation at the top
  - 8-column main content area (70%)
  - 4-column sidebar (30%)
  - Added `min-w-0` class to prevent overflow issues
- Preserved gradient background and spacing
- Kept all existing Tailwind CSS classes and custom color scheme (zlendo-teal, zlendo-grey-medium, etc.)

### 8. **Error Handling**
- **Removed**: Client-side redirect logic (was checking if policy exists and redirecting)
- **Reason**: Policy content is now embedded, so no need for conditional rendering/redirect

## File Structure
```
app/
└── [country]/
    └── nda-vendors/
        └── page.tsx       # New Next.js page
```

## Additional Files Modified
- `lib/constants/policiesData.tsx` - Added NDA for Vendors policy metadata

## Key Differences from Source

| Feature | Old (React Router) | New (Next.js App Router) |
|---------|-------------------|--------------------------|
| Routing | React Router `<Navigate>` | Next.js `<Link>` component |
| Import Paths | Relative paths (`../`) | Absolute paths with `@/` alias |
| Client Directive | Not required | `'use client'` required |
| Navigation Links | `<a>` tags with `href` | `<Link>` components with `href` |
| Policy Data | Fetched via `getPolicyBySlug()` | Embedded directly in page |
| Error Handling | Conditional redirect | No conditional rendering needed |

## Testing Checklist
- [ ] Page renders correctly at `/[country]/nda-vendors`
- [ ] Breadcrumb navigation works (Home link)
- [ ] Policy sidebar shows all policies with NDA for Vendors active
- [ ] Policy content displays properly with all sections
- [ ] Page is responsive on mobile, tablet, and desktop
- [ ] Links and navigation work correctly
- [ ] Consistent styling with other policy pages

## Notes
- The actual NDA content is placeholder text and should be replaced with content from `NON DISCLOSURE AGREEMENT_Vendors.docx`
- The page follows the same pattern as `privacy-policy/page.tsx` with embedded content
- The policy now appears in the sidebar navigation under the "Agreements" category
- All styling and layout maintained from the original design
