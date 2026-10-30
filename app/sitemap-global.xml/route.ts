import { NextResponse } from 'next/server';
import { getSitemapData, generateSitemapXML } from '@/lib/seo/sitemap-core';

export const revalidate = 3600;

export async function GET() {
    const data = await getSitemapData('global');
    const xml = generateSitemapXML(data);

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
