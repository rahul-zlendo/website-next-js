# Migration: InteriorsExteriorsPage

## Source
`src/pages/InteriorsExteriorsPage.tsx`

## Destination
`app/[country]/products/interiors-exteriors/page.tsx`

## Changes Made

### 1. Added 'use client' directive
- Added `'use client';` at the top of the file since the component uses React hooks (`useState`) and client-side interactions

### 2. Updated Import Paths
- Changed from relative imports to absolute imports using `@/` alias:
  - `'../constants/urls'` → `'@/lib/constants/urls'`
  - `'../assets/interior-exterior/modern-pathway.png'` → `'@/src/assets/interior-exterior/modern-pathway.png'`

### 3. Removed SEOHead Component
- Removed the React-based `SEOHead` component (from Vite/React Router setup)
- Created a new `layout.tsx` file in the same directory to handle metadata using Next.js App Router Metadata API

### 4. Created Layout File
- Created `app/[country]/products/interiors-exteriors/layout.tsx` with:
  - Proper `Metadata` export for SEO
  - Title, description, keywords, OpenGraph, and Twitter card metadata
  - Server component wrapper for the client component page

### 5. Removed Unused Imports
- Removed `SEOHead` import (no longer needed)

## Result
✅ Fully migrated to Next.js App Router
✅ SEO metadata properly configured via layout.tsx
✅ Client-side interactivity preserved with 'use client'
✅ All import paths updated to use Next.js conventions
✅ No linter errors

## Files Created/Modified
1. ✏️ Modified: `app/[country]/products/interiors-exteriors/page.tsx`
2. ✨ Created: `app/[country]/products/interiors-exteriors/layout.tsx`
