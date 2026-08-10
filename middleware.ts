import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ──────────────────────────────────────────────────────────
  // 1. Skip static files, API routes, Next.js internals
  // ──────────────────────────────────────────────────────────
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // ──────────────────────────────────────────────────────────
  // 1.4. Specific Help Center URL Redirects
  // ──────────────────────────────────────────────────────────
  if (pathname === '/tag/dashboard' || pathname === '/help-center/tag/dashboard') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/zlendorealty-dashboard-first-time-user-tour/#1-toc-title'),
      301
    );
  }

  if (pathname === '/category/project-cost-estimation' || pathname === '/help-center/category/project-cost-estimation') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/zlendorealty-cost-estimator/#0-toc-title'),
      301
    );
  }

  if (pathname === '/tag/zlendo-realty-ai' || pathname === '/help-center/tag/zlendo-realty-ai') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/ai-tools'),
      301
    );
  }

  if (pathname === '/category/3d-editing-viewing' || pathname === '/help-center/category/3d-editing-viewing') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/3d-view-visualization/#2-toc-title'),
      301
    );
  }
  if (pathname === '/category/general' || pathname === '/help-center/category/general') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/getting-started/'),
      301
    );
  }

  if (pathname === '/category/find-projects' || pathname === '/help-center/category/find-projects') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/project-actions/#0-toc-title'),
      301
    );
  }

  if (pathname === '/category/editor' || pathname === '/help-center/category/editor') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/project-workspace'),
      301
    );
  }

  if (pathname === '/category/account' || pathname === '/help-center/category/account') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/creating-a-zlendorealty-account'),
      301
    );
  }

  if (pathname === '/category/project-workspace-settings' || pathname === '/help-center/category/project-workspace-settings') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/project-workspace/#19-toc-title'),
      301
    );
  }

  if (pathname === '/tag/share-projects' || pathname === '/help-center/tag/share-projects') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/project-actions/'),
      301
    );
  }

  if (pathname === '/category/community' || pathname === '/help-center/category/community') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/create-project-templates/'),
      301
    );
  }

  if (pathname === '/category/create-templates' || pathname === '/help-center/category/create-templates') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/create-project-templates/'),
      301
    );
  }

  if (pathname === '/category/share-designs' || pathname === '/help-center/category/share-designs') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/create-project-templates/#0-toc-title'),
      301
    );
  }

  if (pathname === '/tag/export-plan' || pathname === '/help-center/tag/export-plan') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/export-plan-tool/#0-toc-title'),
      301
    );
  }

  if (pathname === '/tag/create-template' || pathname === '/help-center/tag/create-template') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/create-project-templates/'),
      301
    );
  }

  if (pathname === '/tag/community-posts' || pathname === '/help-center/tag/community-posts') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/create-project-templates/'),
      301
    );
  }

  if (pathname === '/category/payment-billing' || pathname === '/help-center/category/payment-billing') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/payment-billing/'),
      301
    );
  }

  if (pathname === '/tag/billing-payments' || pathname === '/help-center/tag/billing-payments') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/payment-billing/'),
      301
    );
  }

  if (pathname === '/tag/password' || pathname === '/help-center/tag/password') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/resetting-your-password/'),
      301
    );
  }

  if (pathname === '/tag/about-zlendo-realty' || pathname === '/help-center/tag/about-zlendo-realty') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/getting-started/'),
      301
    );
  }

  if (pathname === '/tag/navigation' || pathname === '/help-center/tag/navigation') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/zlendorealty-workspace-keyboard-shortcuts-cheat-sheet-navigation-tools/#1-toc-title'),
      301
    );
  }

  if (pathname === '/tag/2d-floor-plan-editing' || pathname === '/help-center/tag/2d-floor-plan-editing') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/2d-floor-planner/'),
      301
    );
  }

  if (pathname === '/tag/3d-viewing' || pathname === '/help-center/tag/3d-viewing') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs-category/3d-editing-viewing/'),
      301
    );
  }

  if (pathname === '/category/projects' || pathname === '/help-center/category/projects') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/dashboard-projects/'),
      301
    );
  }

  if (pathname === '/tag/zlendo-ai' || pathname === '/help-center/tag/zlendo-ai') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/ai-tools/'),
      301
    );
  }

  if (pathname === '/category/password-change' || pathname === '/help-center/category/password-change') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/resetting-your-password/'),
      301
    );
  }

  if (pathname === '/category/signing-in' || pathname === '/help-center/category/signing-in') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/signing-in/'),
      301
    );
  }

  if (pathname === '/category/360-walkthrough-panorama' || pathname === '/help-center/category/360-walkthrough-panorama') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/3d-view-visualization/'),
      301
    );
  }

  if (pathname === '/tag/projects' || pathname === '/help-center/tag/projects') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/dashboard-projects/'),
      301
    );
  }

  if (pathname === '/category/workspace-navigation' || pathname === '/help-center/category/workspace-navigation') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/zlendorealty-workspace-keyboard-shortcuts-cheat-sheet-navigation-tools/#1-toc-title'),
      301
    );
  }

  if (pathname === '/category/manage-projects' || pathname === '/help-center/category/manage-projects') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/project-actions/#1-toc-title'),
      301
    );
  }

  if (pathname === '/category/render' || pathname === '/help-center/category/render') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/render-tool/'),
      301
    );
  }

  if (pathname === '/category/2d-drawing-editing' || pathname === '/help-center/category/2d-drawing-editing') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/2d-floor-planner/'),
      301
    );
  }

  if (pathname === '/category/vastu' || pathname === '/help-center/category/vastu') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/vastu-tool/'),
      301
    );
  }

  if (pathname === '/category/interior-design' || pathname === '/help-center/category/interior-design') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/2d-floor-planner/'),
      301
    );
  }

  if (pathname === '/category/ai-inspiration' || pathname === '/help-center/category/ai-inspiration') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/ai-tools/#1-toc-title'),
      301
    );
  }

  if (pathname === '/category/getting-started' || pathname === '/help-center/category/getting-started') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/getting-started/'),
      301
    );
  }

  if (pathname === '/category/real-world-preview' || pathname === '/help-center/category/real-world-preview') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/3d-view-visualization/'),
      301
    );
  }

  if (pathname === '/tag/project-estimation' || pathname === '/help-center/tag/project-estimation') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/zlendorealty-cost-estimator/'),
      301
    );
  }

  if (pathname === '/tag/creating-new-projects' || pathname === '/help-center/tag/creating-new-projects') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/project-actions/'),
      301
    );
  }

  if (pathname === '/tag/vastu-report' || pathname === '/help-center/tag/vastu-report') {
    return NextResponse.redirect(
      new URL('https://helpcenter.zlendorealty.com/docs/vastu-tool/'),
      301
    );
  }

  if (pathname.includes('/wp-admin') || pathname.includes('/wp-content') || pathname.includes('/wp-login') || pathname.includes('wp-admin/install.php')) {
    return NextResponse.redirect(
      new URL('https://zlendorealty.com'),
      301
    );
  }

  // ──────────────────────────────────────────────────────────
  // 1.5. Redirect Help Center to subdomain
  // ──────────────────────────────────────────────────────────
  const isHelpCenter = pathname === '/help-center' ||
    pathname.startsWith('/help-center/') ||
    pathname.startsWith('/in/help-center') ||
    pathname.startsWith('/global/help-center');

  if (isHelpCenter) {
    const searchParams = request.nextUrl.search;
    const cleanPath = pathname
      .replace('/in/help-center', '')
      .replace('/global/help-center', '')
      .replace('/help-center', '');

    return NextResponse.redirect(
      new URL(`https://helpcenter.zlendorealty.com`),
      301
    );

    // return NextResponse.redirect(
    //   new URL(`https://helpcenter.zlendorealty.com${cleanPath}${searchParams}`),
    //   301
    // );
  }

  // ──────────────────────────────────────────────────────────
  // 1.6. Blog — served locally from Sanity (migrated off WordPress).
  // Flat, locale-neutral URLs: /blog and /blog/<slug> for everyone (no /in
  // prefix, no geo redirect). Rendered by the app/global/blog route group via
  // an internal rewrite. Any locale-prefixed variant 301s to the flat URL so
  // there is a single canonical blog URL.
  //
  // CUTOVER STATUS: code-flipped on this branch (migration Phase 4). Do NOT
  // deploy this to production until the Cloudflare edge redirects from
  // blog.zlendorealty.com/* -> zlendorealty.com/blog/* (Phase 2, using
  // scripts/migration/blog-redirect-map.csv) are live — otherwise the old
  // WordPress URLs keep serving old content in parallel with these new ones
  // instead of 301ing into them. See scripts/migration/blog-production-cutover-plan.md.
  // ──────────────────────────────────────────────────────────
  if (pathname.startsWith('/in/blog') || pathname.startsWith('/global/blog')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace('/in/blog', '/blog').replace('/global/blog', '/blog');
    return NextResponse.redirect(url, 301);
  }
  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    const url = request.nextUrl.clone();
    url.pathname = `/global${pathname}`;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

    // We need geo variables for the banner to show on the blog too.
    const ipCountry = (request as any).geo?.country
      || request.headers.get('x-vercel-ip-country')
      || request.headers.get('cf-ipcountry')
      || '';
    const ipIsIndia = ipCountry.toUpperCase() === 'IN';

    const response = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
    setGeoHeaders(response, ipIsIndia);
    return response;
  }

  // ──────────────────────────────────────────────────────────
  // 2. Navigation & Internationalization
  // ──────────────────────────────────────────────────────────

  // A. Country resolution — NO geo redirects.
  //
  // We used to 307-redirect users between `/` (global) and `/in` (India) by IP.
  // A 307 is not directly indexable by Google, and non-listed crawlers (and any
  // request with missing geo headers, which used to default to IN) got bounced,
  // hurting indexation. Google's recommended i18n pattern is to serve the URL
  // that was requested at 200 and let the user switch — so we no longer redirect.
  //
  // The ONLY thing that changes what the bare root `/` serves is an explicit
  // manual choice stored in the `zl_country_choice` cookie (set by the country
  // switcher / suggestion banner). IP is used only for the client-side
  // suggestion banner (via the `zl_geo` cookie below), never for routing — so
  // crawlers (no cookie) always get the global representation that matches `/`'s
  // canonical, and no URL ever returns a geo 307.
  const ipCountry = (request as any).geo?.country
    || request.headers.get('x-vercel-ip-country')
    || request.headers.get('cf-ipcountry')
    || '';
  const ipIsIndia = ipCountry.toUpperCase() === 'IN';
  const manualChoice = request.cookies.get('zl_country_choice')?.value; // 'in' | 'global' | undefined

  // B. Root path: REWRITE (200, never a redirect) to /global by default, or to
  // /in only when the user has explicitly chosen India. Global-default keeps `/`
  // deterministic for crawlers.
  if (pathname === '/') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', '/');

    const target = manualChoice === 'in' ? '/in' : '/global';
    const response = NextResponse.rewrite(new URL(target, request.url), {
      request: {
        headers: requestHeaders,
      },
    });
    setGeoHeaders(response, ipIsIndia);
    return response;
  }

  // Redirect explicit `/global...` requests back to the clean URL
  if (pathname === '/global' || pathname.startsWith('/global/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/global/, '') || '/';
    return NextResponse.redirect(url, 301);
  }

  // C. Allow /in paths to pass through 
  if (pathname === '/in' || pathname.startsWith('/in/')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    setGeoHeaders(response, ipIsIndia);
    return response;
  }

  // D. Handle legacy/manual country codes (e.g., /us, /uk)
  // Redirect them to the global (non-prefixed) version
  const countryMatch = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (countryMatch) {
    const [, country, rest] = countryMatch;
    // We only have a dedicated directory for 'in'. Others go to Global.
    if (country !== 'in') {
      const url = request.nextUrl.clone();
      url.pathname = rest || '/';
      return NextResponse.redirect(url, 307);
    }
  }

  // E. Handle India-only use cases that might be accessed on the global site (prevent 404s)
  if (pathname.startsWith('/use-case')) {
    const url = request.nextUrl.clone();
    if (pathname === '/use-cases' || pathname === '/use-case') {
      url.pathname = '/';
      return NextResponse.redirect(url, 301);
    }
    if (pathname.includes('/vastu-optimization')) {
      url.pathname = '/products/vastu';
      return NextResponse.redirect(url, 301);
    }
    if (pathname.includes('/home-remodeling') || pathname.includes('/interior-design')) {
      url.pathname = '/products/interiors-exteriors';
      return NextResponse.redirect(url, 301);
    }
    if (pathname.includes('/new-home-building')) {
      url.pathname = '/products/floor-planner';
      return NextResponse.redirect(url, 301);
    }
  }

  // Handle India-only business use cases accessed globally
  if (pathname.startsWith('/business/')) {
    if (
      pathname.includes('/commercial-spaces') ||
      pathname.includes('/builder-and-promoter') ||
      pathname.includes('/nri-remote-planning') ||
      pathname.includes('/developer-solutions') ||
      pathname.includes('/real-estate-brokers')
    ) {
      const url = request.nextUrl.clone();
      url.pathname = '/business';
      return NextResponse.redirect(url, 301);
    }
  }

  // F. For all other paths (e.g., /partners, /about), 
  // REWRITE to /global/[path] to serve global content at clean URLs.
  const url = request.nextUrl.clone();
  url.pathname = `/global${pathname}`;

  // Attach x-pathname header so layout.tsx knows the active route
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  const response = NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  });
  setGeoHeaders(response, ipIsIndia);
  return response;
}

// ──────────────────────────────────────────────────────────
// Helper: attach geo signalling to a response.
// No longer redirects (see section A) — this only exposes the IP-derived geo
// to client JS (via the `zl_geo` cookie) so the country switcher and the
// India suggestion banner can react, and marks the root response as varying
// by the manual-choice cookie so a CDN keys on it correctly.
// ──────────────────────────────────────────────────────────
function setGeoHeaders(response: NextResponse, ipIsIndia: boolean): void {
  // The bare root `/` serves different content per `zl_country_choice` cookie,
  // so it must not be shared-cached across users.
  response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  response.headers.set('Vary', 'Cookie');
  // Debug header — check this in browser Network tab to verify geo-detection
  response.headers.set('x-geo-debug', ipIsIndia ? 'IN' : 'NON-IN');
  // IP-derived geo signal for client JS only (never used for routing). Powers
  // the "you appear to be in India" suggestion banner and lets the switcher
  // detect VPN/network changes.
  response.cookies.set('zl_geo', ipIsIndia ? 'in' : 'global', {
    path: '/',
    maxAge: 60 * 30, // 30 minutes — short-lived so it stays fresh
    httpOnly: false,  // must be readable by client JS
    sameSite: 'lax',
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, favicon.png
     * - public files with extensions
     */
    '/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|.*\\..*).*)',
  ],
};
