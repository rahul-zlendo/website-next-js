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
  // 2. Root path: REWRITE (not redirect) to /in
  //    This serves /in content at the / URL — no 307, no redirect chain.
  //    Social crawlers (WhatsApp, Facebook, LinkedIn) and users both
  //    get full HTML with OG tags at the root URL.
  // ──────────────────────────────────────────────────────────
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/in';
    return NextResponse.rewrite(url);
  }

  // ──────────────────────────────────────────────────────────
  // 3. Unsupported country codes → 308 permanent redirect to /in
  //    Only relevant when someone manually navigates to /us, /uk, etc.
  //    308 preserves HTTP method and passes full link equity.
  // ──────────────────────────────────────────────────────────
  const countryMatch = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (countryMatch) {
    const [, country, rest] = countryMatch;
    if (country !== 'in') {
      const url = request.nextUrl.clone();
      url.pathname = `/in${rest || ''}`;
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
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
