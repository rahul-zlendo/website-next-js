import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Root path → always redirect to /in
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/in';
    return NextResponse.redirect(url);
  }

  // Any two-letter country prefix that isn't "in" → redirect to /in preserving the rest of the path
  const countryMatch = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (countryMatch) {
    const [, country, rest] = countryMatch;
    if (country !== 'in') {
      const url = request.nextUrl.clone();
      url.pathname = `/in${rest || ''}`;
      return NextResponse.redirect(url);
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
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
