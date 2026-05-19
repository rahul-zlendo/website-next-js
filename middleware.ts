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
      new URL(`https://helpcenter.zlendorealty.com${cleanPath}${searchParams}`),
      301
    );
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
    const cleanPath = pathname
      .replace('/in/blog', '')
      .replace('/global/blog', '')
      .replace('/blog', '');

    return NextResponse.redirect(
      new URL(`https://blog.zlendorealty.com${cleanPath}${searchParams}`),
      301
    );
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
    const response = NextResponse.rewrite(new URL(isIndia ? '/in' : '/global', request.url));
    setGeoHeaders(response, isIndia);
    return response;
  }

  // C. Allow /in and /global paths to pass through 
  if (pathname.startsWith('/in') || pathname.startsWith('/global')) {
    const response = NextResponse.next();
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

  // E. For all other paths (e.g., /partners, /about), 
  // REWRITE to /global/[path] to serve global content at clean URLs.
  const url = request.nextUrl.clone();
  url.pathname = `/global${pathname}`;
  const response = NextResponse.rewrite(url);
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
