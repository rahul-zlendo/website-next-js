# Headless WordPress Blog Integration

This document describes the headless WordPress blog integration for the Zlendo Realty Next.js website.

## Overview

The blog at `/blog` fetches content from WordPress (at `https://blog.zlendorealty.com`) using the REST API and renders it with Next.js App Router.

## File Structure

```
app/
├── blog/
│   ├── layout.tsx              # Blog section layout with Header/Footer
│   ├── page.tsx                # Blog listing page
│   ├── not-found.tsx           # Custom 404 for blog
│   ├── [slug]/
│   │   └── page.tsx            # Single blog post page
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx        # Category archive page
│   └── tag/
│       └── [slug]/
│           └── page.tsx        # Tag archive page
├── sitemap.ts                  # Updated with blog URLs
└── robots.ts                   # Updated with correct sitemap URL

components/
└── blog/
    ├── index.ts                # Barrel exports
    ├── BlogCard.tsx            # Blog post card component
    ├── BlogPostBody.tsx        # Safe HTML content renderer
    ├── BlogBreadcrumb.tsx      # Breadcrumb navigation
    ├── BlogHero.tsx            # Hero section for listing page
    └── Pagination.tsx          # Pagination component

lib/
└── wordpress/
    ├── index.ts                # Barrel exports
    ├── types.ts                # TypeScript type definitions
    ├── api.ts                  # WordPress REST API integration
    └── seo.ts                  # SEO metadata and JSON-LD helpers
```

## Environment Variables

Add these to your `.env.local` (and Vercel environment settings):

```bash
# WordPress REST API Base URL
WP_BASE_URL=https://blog.zlendorealty.com

# ISR Revalidation time in seconds (3600 = 1 hour)
WP_REVALIDATE_SECONDS=3600

# Site URL for canonical links
NEXT_PUBLIC_SITE_URL=https://zlendorealty.com
```

## WordPress Requirements

### Required Settings

1. **Permalinks**: Enable "Post name" permalink structure in WordPress
   - Go to Settings → Permalinks → Select "Post name"

2. **REST API**: Ensure REST API is publicly accessible
   - Default WordPress installation has REST API enabled
   - Test by visiting: `https://blog.zlendorealty.com/wp-json/wp/v2/posts`

3. **Featured Images**: Enable featured images for posts
   - Should be enabled by default in most themes

### Recommended Plugins

1. **Yoast SEO** or **Rank Math**: For meta descriptions (can be used as fallback)
2. **Smush** or **ShortPixel**: For image optimization on WordPress side
3. **Classic Editor** (optional): If you prefer the old editor

### CORS Configuration (if needed)

If you encounter CORS issues, add this to your WordPress `functions.php`:

```php
add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
        return $value;
    });
}, 15);
```

## Features

### SEO Implementation

- **generateMetadata()**: Dynamic metadata for each page
- **JSON-LD Schemas**: BlogPosting, Blog, BreadcrumbList
- **Canonical URLs**: Proper canonical URLs for all pages
- **Open Graph**: Full OG tags for social sharing
- **Twitter Cards**: Summary large image cards

### Performance

- **ISR (Incremental Static Regeneration)**: Pages revalidate every hour
- **Next.js Image Optimization**: Automatic image optimization
- **Static Generation**: Post pages are pre-rendered at build time

### Blog Routes

| Route | Description |
|-------|-------------|
| `/blog` | Blog listing with pagination |
| `/blog/[slug]` | Single blog post |
| `/blog/category/[slug]` | Category archive |
| `/blog/tag/[slug]` | Tag archive |

## Deployment on Vercel

### 1. Add Environment Variables

In your Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following:
   - `WP_BASE_URL` = `https://blog.zlendorealty.com`
   - `WP_REVALIDATE_SECONDS` = `3600`
   - `NEXT_PUBLIC_SITE_URL` = `https://zlendorealty.com`

### 2. Redeploy

After adding environment variables:

```bash
# Push your changes
git add .
git commit -m "Add headless WordPress blog integration"
git push origin main

# Vercel will automatically redeploy
```

Or trigger manual redeployment in Vercel dashboard.

### 3. Test Blog Routes

After deployment, verify these URLs work:

- `https://zlendorealty.com/blog`
- `https://zlendorealty.com/blog/[any-post-slug]`
- `https://zlendorealty.com/sitemap.xml` (should include blog URLs)

## On-Demand Revalidation (Optional)

To enable instant updates when posts are published/edited in WordPress:

### 1. Create Revalidation API Route

Create `app/api/revalidate/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const slug = body.slug;
    
    // Revalidate specific post
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }
    
    // Always revalidate blog listing
    revalidatePath('/blog');
    
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
```

### 2. Add WordPress Webhook

Install a webhook plugin and configure it to call:
```
POST https://zlendorealty.com/api/revalidate?secret=YOUR_SECRET
```

## Troubleshooting

### Posts not loading

1. Check WordPress REST API is accessible
2. Verify `WP_BASE_URL` is correct
3. Check browser console for CORS errors

### Images not loading

1. Ensure domains are added to `next.config.ts`
2. Check image URLs in WordPress are accessible

### Sitemap not including posts

1. Ensure WordPress REST API returns posts
2. Check build logs for errors

## Customization

### Changing Posts Per Page

In `lib/wordpress/api.ts`, modify the `perPage` parameter in `getPosts()`:

```typescript
export async function getPosts(page: number = 1, perPage: number = 12) {
  // ...
}
```

### Styling

All blog components use Tailwind CSS with Zlendo's design tokens:
- Primary color: `zlendo-teal`
- Accent color: `zlendo-orange`
- Font: `font-nunito`

Modify styles in the individual component files or `app/globals.css`.
