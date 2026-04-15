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
  // 2. Navigation & Internationalization
  // ──────────────────────────────────────────────────────────

  // A. Root path: REWRITE to /global (The Global Site)
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/global', request.url));
  }

  // B. Allow /in and /global paths to pass through 
  if (pathname.startsWith('/in') || pathname.startsWith('/global')) {
    return NextResponse.next();
  }

  // C. Handle legacy/manual country codes (e.g., /us, /uk) 
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

  // D. For all other paths (e.g., /partners, /about), 
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
