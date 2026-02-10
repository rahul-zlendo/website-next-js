import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Geo is added by Vercel at runtime; extend type for TypeScript
type RequestWithGeo = NextRequest & { geo?: { country?: string } };

const SUPPORTED_COUNTRIES = ['in', 'us', 'uk', 'eu', 'au'];
const COUNTRY_COOKIE_NAME = 'zl_country_pref';

export async function middleware(request: NextRequest) {
  const req = request as RequestWithGeo;
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, Next.js internals,
  // and standalone sections (blog, help-center) that are not country-segmented.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/help-center') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Handle root path - detect country and redirect
  if (pathname === '/') {
    // Check for saved country preference in cookie
    const savedCountry = request.cookies.get(COUNTRY_COOKIE_NAME)?.value;

    if (savedCountry && SUPPORTED_COUNTRIES.includes(savedCountry)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${savedCountry}`;
      return NextResponse.redirect(url);
    }

    // Detect country from IP (using edge runtime)
    try {
      const country = req.geo?.country?.toLowerCase() || 'in';
      const targetCountry = country === 'gb' ? 'uk' :
        SUPPORTED_COUNTRIES.includes(country) ? country : 'in';

      const url = request.nextUrl.clone();
      url.pathname = `/${targetCountry}`;

      const response = NextResponse.redirect(url);
      response.cookies.set(COUNTRY_COOKIE_NAME, targetCountry, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        path: '/',
      });

      return response;
    } catch (error) {
      console.error('Geo-detection error:', error);
      const url = request.nextUrl.clone();
      url.pathname = '/in';
      return NextResponse.redirect(url);
    }
  }

  // Validate country code in path
  const countryMatch = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (countryMatch) {
    const [, country] = countryMatch;

    if (!SUPPORTED_COUNTRIES.includes(country)) {
      // Invalid country - redirect to default
      const url = request.nextUrl.clone();
      url.pathname = `/in${countryMatch[2] || ''}`;
      return NextResponse.redirect(url);
    }

    // Save valid country preference
    const response = NextResponse.next();
    response.cookies.set(COUNTRY_COOKIE_NAME, country, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
    return response;
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
