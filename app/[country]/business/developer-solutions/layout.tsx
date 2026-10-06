import type { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

export const metadata: Metadata = {
    title: 'Developer Design Solutions',
    description:
        'Comprehensive design solutions for real estate developers. AI-powered floor plans, 3D architecture, virtual walkthroughs, and construction cost estimation.',
    keywords: [
        'sell with confidence house',
        'ai floor plan software',
        '3D architecture software',
        'construction cost calculator',
        'virtual walkthrough software',
        'vr support for architecture',
        'builder design software',
        'home design software subscription',
    ],
    openGraph: {
        title: 'Developer Design Solutions | Zlendo Realty',
        description: 'All-in-one design platform for real estate developers. AI floor plans, 3D renders, and virtual tours.',
        url: 'https://zlendorealty.com/in/business/developer-solutions',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Developer Solutions',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Developer Solutions | Zlendo Realty',
        description: 'Comprehensive design platform for real estate developers.',
    },
    alternates: indiaOnlyAlternates('/business/developer-solutions'),
};

export default function DeveloperSolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

