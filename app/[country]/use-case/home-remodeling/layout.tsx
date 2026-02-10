import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home Remodeling & Renovation Design | Zlendo Realty',
    description:
        'Visualize renovations in photorealistic 3D before you start building. Avoid costly changes and rework with accurate planning.',
    openGraph: {
        title: 'Home Remodeling & Renovation Design | Zlendo Realty',
        description:
            'Visualize renovations in photorealistic 3D before you start building. Avoid costly changes and rework with accurate planning.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Home Remodeling',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Remodeling & Renovation Design | Zlendo Realty',
        description: 'Visualize renovations in 3D before building. Avoid costly changes.',
        images: ['/og-image.png'],
    },
};

export default function HomeRemodelingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
