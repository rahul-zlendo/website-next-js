import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free AI Floor Planner | Zlendo Realty',
    description:
        'Draw floor plans instantly or upload a sketch. AI-powered 2D to 3D conversion. Design your home online for free.',
    openGraph: {
        title: 'Free AI Floor Planner | Zlendo Realty',
        description:
            'Draw floor plans instantly or upload a sketch. AI-powered 2D to 3D conversion. Design your home online for free.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Floor Planner',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Floor Planner | Zlendo Realty',
        description: 'Draw floor plans instantly or upload a sketch. AI-powered 2D to 3D conversion.',
        images: ['/og-image.png'],
    },
};

export default function FloorPlannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
