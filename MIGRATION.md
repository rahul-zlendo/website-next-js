# Zlendo Realty - Next.js Migration Guide

## Overview

This document describes the migration from **Vite + React Router** to **Next.js 15 with App Router** for improved SEO and server-side rendering capabilities.

## What Changed

### Framework

- **From:** Vite 7.2.4 + React 19 + React Router v7
- **To:** Next.js 15.1.6 + React 19 (App Router)

### Routing

**Old Structure:**
```
/:country/* (client-side routing)
Example: /in/, /us/products/floor-planner
```

**New Structure:**
```
app/[country]/page.tsx
Middleware handles geo-detection and validation
```

### Key Architecture Changes

1. **Geo-Detection:** Moved from client-side component to edge middleware
2. **Layouts:** Root layout with Redux + Country layout with Header/Footer
3. **Components:** All interactive components now use `'use client'` directive
4. **SEO:** Metadata API replaces client-side SEO component

## Running Locally

### Prerequisites

- Node.js 18.17 or later
- npm 9 or later

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

The site will automatically redirect to your detected country (e.g., `/in/`).

### Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Lint code
npm run lint
```

## Environment Variables

### Required Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Environment mode
NEXT_PUBLIC_ENV=prod

# Optional overrides
NEXT_PUBLIC_FRONTEND_URL=https://app.zlendorealty.com
NEXT_PUBLIC_BACKEND_URL=https://prodapi.zlendorealty.com
NEXT_PUBLIC_BLOB_URL=https://zrealtystoragedev.blob.core.windows.net/
```

### Variable Mapping

| Old (Vite)              | New (Next.js)                  |
| ----------------------- | ------------------------------ |
| `VITE_ENV`              | `NEXT_PUBLIC_ENV`              |
| `VITE_FRONTEND_URL`     | `NEXT_PUBLIC_FRONTEND_URL`     |
| `VITE_BACKEND_URL`      | `NEXT_PUBLIC_BACKEND_URL`      |
| `VITE_ENCRYPTION_KEY`   | `NEXT_PUBLIC_ENCRYPTION_KEY`   |
| `VITE_BLOB_URL`         | `NEXT_PUBLIC_BLOB_URL`         |
| `import.meta.env.VITE_*` | `process.env.NEXT_PUBLIC_*`   |

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout (Redux, fonts, metadata)
│   ├── page.tsx                # Root redirect (geo-detection fallback)
│   ├── providers.tsx           # Redux Provider wrapper
│   ├── globals.css             # Global styles (Tailwind + custom)
│   ├── not-found.tsx           # 404 page
│   └── [country]/
│       ├── layout.tsx          # Country layout (Header, Footer, etc.)
│       └── page.tsx            # HomePage
│
├── components/
│   ├── layout/                 # Header, Footer, PromoBanner, AuthSync
│   ├── common/                 # Reusable components
│   ├── policies/               # Policy components
│   └── charts/                 # Chart components
│
├── lib/
│   ├── config/                 # Environment configuration
│   ├── context/                # React contexts (CountryContext)
│   ├── store/                  # Redux store and slices
│   ├── services/               # API services
│   ├── utils/                  # Utility functions
│   └── constants/              # Constants and URLs
│
├── public/                     # Static assets (images, fonts, etc.)
│   └── assets/                 # Migrated from src/assets
│
├── middleware.ts               # Edge middleware (geo-detection, validation)
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration (unchanged)
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Code Changes

### Import Updates

```typescript
// OLD (React Router)
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';

// NEW (Next.js)
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
// params come as props in page components
```

### Link Component

```typescript
// OLD
<Link to="/products/floor-planner">Floor Planner</Link>

// NEW
<Link href="/products/floor-planner">Floor Planner</Link>
```

### Navigation

```typescript
// OLD
const navigate = useNavigate();
navigate('/contact');

// NEW
const router = useRouter();
router.push('/contact');
```

### Path Aliases

All imports now use `@/` prefix for lib and components:

```typescript
// OLD
import { useCountry } from '../../context/CountryContext';

// NEW
import { useCountry } from '@/lib/context/CountryContext';
```

### Client Components

Interactive components require `'use client'` directive:

```typescript
'use client';

import { useState } from 'react';
// ... rest of component
```

## SEO Implementation

### Per-Page Metadata

Each page exports a `generateMetadata` function:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Zlendo Realty',
  description: 'Page description',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://app.zlendorealty.com/in/page-path',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Page description',
  },
  alternates: {
    canonical: '/in/page-path',
  },
};
```

### Sitemap

Dynamic sitemap generated at `/sitemap.xml` from `app/sitemap.ts`.

### Robots.txt

Static file at `public/robots.txt` or dynamic from `app/robots.ts`.

## Deployment

### Vercel (Recommended)

1. Push code to Git repository
2. Import project to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

Vercel automatically detects Next.js and configures:
- Edge middleware
- Server-side rendering
- Automatic HTTPS
- CDN distribution

### Netlify

1. Install Netlify plugin for Next.js:
   ```bash
   npm install -D @netlify/plugin-nextjs
   ```

2. Add `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. Deploy via Netlify CLI or Git integration

### Self-Hosted

Requirements:
- Node.js 18.17+
- PM2 or similar process manager

```bash
# Build
npm run build

# Start with PM2
pm2 start npm --name "zlendo-realty" -- start

# Or with Node
node .next/standalone/server.js
```

For Apache/Nginx, configure reverse proxy to Node.js server.

## API Configuration

### Development

API requests to `/api/*` are proxied to `https://api.zlendorealty.com` via `next.config.ts` rewrites.

### Production

Update `lib/config/env.ts` to point to production API:

```typescript
const BACKEND_URL_PROD = 'https://prodapi.zlendorealty.com';
```

## Styling

### Tailwind CSS

No changes to Tailwind configuration. All custom classes preserved:
- `.glass-card`
- `.btn-primary`
- `.btn-secondary`
- `.section-padding`
- `.container-custom`
- etc.

### Google Fonts

Optimized loading via `next/font/google`:

```typescript
import { Outfit, Nunito } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weights: [...] });
const nunito = Nunito({ subsets: ['latin'], weights: [...] });
```

### Custom CSS

All custom CSS from `src/index.css` preserved in `app/globals.css`:
- Background glows
- Scrollbar styling
- Component classes
- Utility classes

## Assets

All assets moved from `src/assets/` to `public/assets/`.

**Update imports:**

```typescript
// OLD
import image from '../assets/Home-Page/image.png';

// NEW - use public path
const image = '/assets/Home-Page/image.png';
```

## Known Issues & Solutions

### Issue: Hydration Mismatch

**Cause:** Server-rendered HTML doesn't match client-rendered HTML.

**Solution:** Ensure date/time formatting is consistent between server and client. Use `'use client'` for components with dynamic client-only content.

### Issue: Module Not Found

**Cause:** Import paths not updated to Next.js conventions.

**Solution:** Use `@/` prefix for all lib and component imports. Update in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: window/document Not Defined

**Cause:** Server-side rendering tries to access browser APIs.

**Solution:** Add checks:

```typescript
if (typeof window !== 'undefined') {
  // Browser-only code
}
```

Or use `'use client'` directive.

## Testing Checklist

- [ ] All routes accessible (35+ routes)
- [ ] Geo-detection redirects correctly
- [ ] Country switcher works
- [ ] Forms submit correctly
- [ ] Redux state persists across navigation
- [ ] Images load from Azure Blob Storage
- [ ] API calls work
- [ ] Mobile menu works
- [ ] Animations work (Framer Motion)
- [ ] Styles match exactly (pixel-perfect)
- [ ] Meta tags present in HTML source
- [ ] Sitemap accessible
- [ ] Robots.txt accessible

## Performance

Next.js optimizations:
- Automatic code splitting
- Image optimization (via `next/image`)
- Font optimization
- Server-side rendering
- Edge middleware
- Automatic static optimization

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Review this migration guide
- Check terminal logs for errors

## Migration Status

✅ **Completed:**
- Next.js project setup
- Tailwind CSS configuration
- Root and country layouts
- Middleware for geo-detection
- Component migration (layout + common)
- Environment variables
- Redux integration
- Assets migration

🚧 **In Progress:**
- Page migration (35+ pages)
- Per-page metadata
- Sitemap generation

⏳ **Pending:**
- Full testing
- Production deployment
- Performance optimization

## Next Steps

1. Complete page migration
2. Add metadata to all pages
3. Generate dynamic sitemap
4. Run full test suite
5. Deploy to staging
6. Production deployment

---

Last Updated: February 4, 2026
