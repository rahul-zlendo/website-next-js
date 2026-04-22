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
  if (pathname.startsWith('/help-center')) {
    const searchParams = request.nextUrl.search;
    return NextResponse.redirect(
      new URL(`https://helpcenter.zlendorealty.com${pathname.replace('/help-center', '')}${searchParams}`),
      301
    );
  }

  // ──────────────────────────────────────────────────────────
  // 2. Navigation & Internationalization
  // ──────────────────────────────────────────────────────────

  // A. Geo-Detection & Redirection
  const countryHeader = request.headers.get('x-vercel-ip-country') || request.headers.get('cf-ipcountry') || 'IN';
  const isIndia = countryHeader.toUpperCase() === 'IN';
  const isOnIndiaSite = pathname === '/in' || pathname.startsWith('/in/');

  // Force India visitors to /in if they hit the root or other paths
  if (isIndia && !isOnIndiaSite) {
    // If hitting root, redirect to /in
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/in', request.url));
    }
    // For other paths, we could rewrite or let them stay, but the user's 
    // original logic forced /in for India IPs.
    // However, if we redirect everything for India IPs to /in, it might break subpages.
    // Let's stick to the root for now to avoid breaking subpages unless they hit the wrong country prefix.
  }

  // Force Non-India visitors away from /in
  if (!isIndia && isOnIndiaSite) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace('/in', '') || '/';
    return NextResponse.redirect(url);
  }

  // B. Root path: REWRITE to /global or /in based on IP 
  // (Middleware runs before page, so this is instant)
  if (pathname === '/') {
    return NextResponse.rewrite(new URL(isIndia ? '/in' : '/global', request.url));
  }

  // C. Allow /in and /global paths to pass through 
  if (pathname.startsWith('/in') || pathname.startsWith('/global')) {
    return NextResponse.next();
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
  return NextResponse.rewrite(url);
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
