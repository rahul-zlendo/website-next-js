import { headers } from 'next/headers';
import JsonLd from '@/components/common/JsonLd';

export default async function DynamicBreadcrumb() {
    const headersList = await headers();
    const rawPathname = headersList.get('x-pathname');

    if (!rawPathname) return null;

    const BASE_URL = 'https://zlendorealty.com';
    // Remove trailing slashes
    const cleanPath = rawPathname.endsWith('/') && rawPathname.length > 1 ? rawPathname.slice(0, -1) : rawPathname;

    // Do not show breadcrumbs for just the home page
    if (cleanPath === '' || cleanPath === '/' || cleanPath === '/in') return null;

    const parts = cleanPath.split('/').filter(Boolean);
    if (parts.length === 0) return null;

    const isIndia = parts[0] === 'in';

    const itemListElement: any[] = [];

    // 1. Home
    const homeUrl = isIndia ? `${BASE_URL}/in` : BASE_URL;
    itemListElement.push({
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": homeUrl
    });

    // 2. Iterate through parts
    let currentPosition = 2;
    let pathAccumulator = isIndia ? 'in' : '';

    parts.forEach((part) => {
        // Skip 'in' as it's already handled as Home
        if (part === 'in') return;

        if (pathAccumulator) {
            pathAccumulator += `/${part}`;
        } else {
            pathAccumulator = part;
        }

        const url = `${BASE_URL}/${pathAccumulator}`;

        // Format the name: replace hyphens with spaces and capitalize words
        const nameStr = part.replace(/-/g, ' ');
        const name = nameStr.replace(/\b\w/g, l => l.toUpperCase());

        itemListElement.push({
            "@type": "ListItem",
            "position": currentPosition,
            "name": name,
            "item": url
        });

        currentPosition++;
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}${cleanPath}#breadcrumb`,
        itemListElement
    };

    return <JsonLd schema={schema} />;
}
