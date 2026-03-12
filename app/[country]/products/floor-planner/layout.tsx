import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Floor Planner & Floor Plan Software | Zlendo Realty – Free',
    description:
        'Create professional 2D floor plans with AI-powered tools. Smart room sizing, auto-alignment, and instant 3D preview. Start designing for free.',
    keywords: [
        'AI floor planner',
        'AI floor plan generator',
        'AI floor plan software',
        'AI home planner',
        'AI room layout generator',
        'smart floor plan creator',
        'AI architectural planning tool',
        'AI house design software',
        'AI building layout planner',
        'automated floor planning software',
    ],
    openGraph: {
        title: 'AI-Powered Floor Planner | Zlendo Realty',
        description: 'Design professional floor plans with intelligent tools. Auto-alignment, smart dimensions, and instant 3D conversion.',
        url: 'https://zlendorealty.com/in/products/floor-planner',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - AI Floor Planner',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Floor Planner | Zlendo Realty',
        description: 'Design professional floor plans with AI. Start free today.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/products/floor-planner',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/products/floor-planner',
            'x-default': 'https://zlendorealty.com/in/products/floor-planner',
        },
    },
};

export default function FloorPlannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
