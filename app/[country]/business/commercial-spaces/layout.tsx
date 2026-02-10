import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Commercial Interior Design Software | Zlendo Realty',
    description:
        'Design high-performance commercial environments. Optimize office layouts and retail spaces with 3D visualization.',
    openGraph: {
        title: 'Commercial Interior Design Software | Zlendo Realty',
        description:
            'Design high-performance commercial environments. Optimize office layouts and retail spaces with 3D visualization.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Commercial Spaces',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Commercial Interior Design Software | Zlendo Realty',
        description: 'Design high-performance commercial environments with 3D visualization.',
        images: ['/og-image.png'],
    },
};

export default function CommercialSpacesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
