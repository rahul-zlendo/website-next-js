import type { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

export const metadata: Metadata = {
    title: 'Commercial Space Design Software',
    description:
        'Design professional commercial spaces with AI-powered tools. Office layouts, retail spaces, and commercial building plans with 3D visualization.',
    keywords: [
        'commercial floor plan software',
        'commercial 3D design software',
        'commercial interior design software',
        'office layout design software',
        'retail space design software',
        'commercial building design software',
        '3d floor plan software for business',
        'commercial space planning software',
        'professional commercial design tool',
        'architectural software for commercial projects',
    ],
    openGraph: {
        title: 'Commercial Space Design',
        description: 'AI-powered commercial space planning. Office layouts, retail spaces, and building plans in 3D.',
        url: 'https://zlendorealty.com/in/business/commercial-spaces',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Commercial Spaces',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Commercial Space Design',
        description: 'Professional commercial space planning with 3D visualization.',
    },
    alternates: indiaOnlyAlternates('/business/commercial-spaces'),
};

export default function CommercialSpacesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

