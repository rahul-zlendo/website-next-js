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

  if (pathname.includes('/wp-admin') || pathname.includes('/wp-content')) {
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
  // 1.6. Redirect Blog to subdomain
  // ──────────────────────────────────────────────────────────
  const isBlog = pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/in/blog') ||
    pathname.startsWith('/global/blog');

  if (isBlog) {
    const searchParams = request.nextUrl.search;
    let cleanPath = pathname
      .replace('/in/blog', '')
      .replace('/global/blog', '')
      .replace('/blog', '');

    const slug = cleanPath.replace(/^\//, '').replace(/\/$/, '');

    return NextResponse.redirect(
      new URL(`https://blog.zlendorealty.com`),
      301
    );

    // const newsSlugs = new Set([
    //   'compound-wall-explained-guide', 'private-rooms-in-tirumala-a-complete-guide',
    //   'west-facing-house-suitable-for-your-rashi', 'quad-sharing-meaning-what-it-is-features',
    //   'cat-on-the-wall-meaning-usage', 'tiruchendur-devasthanam-contact',
    //   'bangla-sahib-room-booking', 'bhubaneswar-railway-station',
    //   'retiring-room-at-new-delhi', 'jyoti-chowk-jalandhar-punjab-heart-of-city',
    //   'manilaxmi-jain-tirth-room-book', 'stilt-floor-explained-a-quick-clear-guide',
    //   'bathroom-under-stairs-vastu-your-home', 'palani-devasthanam-room-booking-guide',
    //   'nakodaji-room-booking-contact', 'gurudwara-sis-ganj-sahib-roombook',
    //   'kabita-net-worth-success-story-the-growth', 'wall-magazine-for-your-class',
    //   'bangla-sahib-contact-number-booking', 'parapet-wall-steel-design-smart-ideas',
    //   'railway-cloakroom-guide-understand', 'delhi-gymkhana-club-room-rates',
    //   'hindu-prayer-room-design-thoughtful-ideas', 'retiring-room-at-vijayawada-railway-station',
    //   'ramachandra-hospital-room-charges-pricing', 'gurudwara-bala-sahib-room-booking-guide',
    //   'fluted-glass-price-guide-uses-and-cost', 'mantralayam-temple-room-booking-guide',
    //   'deluxe-room-what-it-really-means', 'adjacent-room-in-hotel-meaning-benefits',
    //   'how-to-book-room-at-isha-yoga-centre', 'l-shaped-house-vastu-practical-design',
    //   'cell-walls-explained-human-cells-built', 'chennai-egmore-railway-station-retiringroom',
    //   'irctc-retiring-room-contact', 'plinth-wall-explained-purpose-benefits',
    //   'oyo-rooms-explained-a-quickguide', 'kwality-walls-quick-guide',
    //   'ttd-srinivasam-room-booking', 'jyoti-chowk-jalandhar-shopping',
    //   'lucky-numbers-what-they-mean', 'raghavendra-swamy-mantralayam-completeguide',
    //   'aluminium-jali-stylish-choice', 'velankanni-church-room-booking-your-guide',
    //   'manekshaw-centre-guest-room', 'gorai-beach-rooms-safe-for-couples',
    //   'dark-firozi-colour-in-interior-design-style', 'cumbala-hill',
    //   'using-an-air-cooler-in-a-room-the-right-way', 'one-ton-ac-room-size',
    //   'rashtreeya-vidyalaya-road', 'royal-paint-design-idea-for-home',
    //   'ton-window-ac-price-guide-cost', 'saifee-hospital-room-charges',
    //   'profile-light-price-guide', 'navy-blue-and-light-blue-a-elegant-colour',
    //   'paula-deen-living-room-furniture-warmdesign', 'room-booking-at-gurudwara-sis-ganj-sahib',
    //   'almari-design-in-smart-rooms', 'armani-hotel-dubai-room-price-guide',
    //   'bajaj-wall-mount-fan-for-cooling', 'understanding-room-in-square-feet-a-guide',
    //   'fluted-panel-price-guide-costs', 'understanding-italian-kitchen-prices-guide',
    //   '5-inspiring-wall-almirah-design-ideas', 'groove-handles-a-smart-and-stylish-choice',
    //   'softboard-decoration-ideas-simple-creative', 'kabita-singh-net-worth-success',
    //   'dark-firozi-colour-a-deep-dive', 'lilac-lavender-room-colour-a-stylish-choice',
    //   'retiring-room-at-ujjain-railway-station', 'iskcon-temple-direction-guide-your-path',
    //   'hettich-modular-kitchen-pricing-features', 'the-great-indian-kitchen-where-to-watch',
    //   'ac-waiting-room-rules-everything-you-need', 'modular-kitchen-sink-price-guide',
    //   'daily-room-rent-in-bangalore-price-insights', 'aventura-floor-plans-smart-studio-design',
    //   'bathtub-height-a-simple-guide-to-choose', 'anandpur-sahib-gurudwara-room-booking-guide',
    //   'the-great-wall-download-in-tamil-a-guide', 'himachal-bhavan-delhi-room-booking-guide',
    //   'lakshmi-ganesh-saraswati-guide', 'sri-chowdeshwari-temple-sigandur-room-book',
    //   'plasma-membrane-and-cell-wall-understanding', 'the-great-indian-kitchen-online'
    // ]);

    // if (newsSlugs.has(slug)) {
    //   return NextResponse.redirect(
    //     new URL(`https://news.zlendorealty.com/${slug}/${searchParams}`),
    //     301
    //   );
    // }

    // return NextResponse.redirect(
    //   new URL(`https://blog.zlendorealty.com${cleanPath}${searchParams}`),
    //   301
    // );
  }

  // ──────────────────────────────────────────────────────────
  // 2. Navigation & Internationalization
  // ──────────────────────────────────────────────────────────

  // A. Geo-Detection & Redirection
  // Use Vercel's geo API (most reliable), then fall back to headers
  const countryCode = (request as any).geo?.country
    || request.headers.get('x-vercel-ip-country')
    || request.headers.get('cf-ipcountry')
    || 'IN';
  const isIndia = countryCode.toUpperCase() === 'IN';
  const isOnIndiaSite = pathname === '/in' || pathname.startsWith('/in/');

  // Detect search engine bots to bypass forced geo-redirection.
  // This ensures Google Bot (usually US-based) can crawl and index the /in path
  // without being redirected to the root domain.
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const isBot = userAgent.includes('googlebot') ||
    userAgent.includes('bingbot') ||
    userAgent.includes('yandexbot') ||
    userAgent.includes('applebot') ||
    userAgent.includes('duckduckbot') ||
    userAgent.includes('slurp') ||
    userAgent.includes('baiduspider') ||
    userAgent.includes('twitterbot') ||
    userAgent.includes('facebookexternalhit') ||
    userAgent.includes('linkedinbot');

  // Force India visitors to /in if they hit the root or other paths (skip for bots)
  if (isIndia && !isOnIndiaSite && !isBot) {
    const url = request.nextUrl.clone();
    const countryMatch = pathname.match(/^\/([a-z]{2})(\/.*)?$/);

    if (pathname.startsWith('/global')) {
      url.pathname = pathname.replace(/^\/global/, '/in');
    } else if (countryMatch && countryMatch[1] !== 'in') {
      url.pathname = `/in${countryMatch[2] || ''}`;
    } else if (pathname === '/') {
      url.pathname = '/in';
    } else {
      url.pathname = `/in${pathname}`;
    }
    return geoRedirect(url, isIndia);
  }

  // Force Non-India visitors away from /in (skip for bots)
  if (!isIndia && isOnIndiaSite && !isBot) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/in/, '') || '/';
    return geoRedirect(url, isIndia);
  }

  // B. Root path: REWRITE to /global or /in based on IP 
  // (Middleware runs before page, so this is instant)
  if (pathname === '/') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', '/');

    const response = NextResponse.rewrite(new URL(isIndia ? '/in' : '/global', request.url), {
      request: {
        headers: requestHeaders,
      },
    });
    setGeoHeaders(response, isIndia);
    return response;
  }

  // C. Allow /in and /global paths to pass through 
  if (pathname.startsWith('/in') || pathname.startsWith('/global')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    setGeoHeaders(response, isIndia);
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
  setGeoHeaders(response, isIndia);
  return response;
}

// ──────────────────────────────────────────────────────────
// Helper: Create a geo-redirect with proper no-cache headers
// This prevents browsers & CDNs from caching geo-based redirects,
// which was causing users to stay on /global after turning off VPN.
// ──────────────────────────────────────────────────────────
function geoRedirect(url: URL, isIndia: boolean): NextResponse {
  const response = NextResponse.redirect(url);
  setGeoHeaders(response, isIndia);
  return response;
}

function setGeoHeaders(response: NextResponse, isIndia: boolean): void {
  // Prevent caching of geo-dependent responses
  response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  response.headers.set('Vary', 'X-Vercel-IP-Country');
  // Debug header — check this in browser Network tab to verify geo-detection
  response.headers.set('x-geo-debug', isIndia ? 'IN' : 'NON-IN');
  // Set a cookie so client-side JS can detect when the user's geo has changed
  // (e.g., VPN turned on/off) and clear stale localStorage preferences
  response.cookies.set('zl_geo', isIndia ? 'in' : 'global', {
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
