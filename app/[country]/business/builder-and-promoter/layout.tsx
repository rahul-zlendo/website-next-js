import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Builder & Promoter Solutions',
    description:
        'Close deals faster with visual confidence. Empower buyers to visualize their future home instantly using Zlendo Realty AI Floor Plan & Interior Design Software.',
    keywords: [
        'builder and promoter',
        'real estate builder software',
        'floor plan visualization',
        '3D interior walkthrough',
        'close deals faster',
        'sales visualization tool',
        'under-construction project showcase',
        'renovation visualization',
        'buyer confidence',
        'AI interior design',
        'Zlendo Realty builder',
        'property sales software India',
    ],
    openGraph: {
        title: 'Builder & Promoter Solutions',
        description: 'Empower buyers with 3D visualization. Showcase under-construction projects and close deals faster.',
        url: 'https://zlendorealty.com/in/business/builder-and-promoter',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Builder & Promoter',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Builder & Promoter Solutions',
        description: 'Close deals faster with immersive 3D property visualization.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/business/builder-and-promoter',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/business/builder-and-promoter',
            'x-default': 'https://zlendorealty.com/in/business/builder-and-promoter',
        },
    },
};

export default function BuilderAndPromoterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

