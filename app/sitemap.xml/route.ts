import { NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <sitemap>
        <loc>https://zlendorealty.com/sitemap-global.xml</loc>
    </sitemap>
     <sitemap>
        <loc>https://zlendorealty.com/sitemap-india.xml</loc>
    </sitemap>
</sitemapindex>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
