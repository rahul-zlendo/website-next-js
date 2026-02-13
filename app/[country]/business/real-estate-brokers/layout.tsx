import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Real Estate Broker Tools & Visual Sales | Zlendo Realty',
    description:
        'Close deals faster with visual confidence. Empower buyers to visualize their future home instantly in 3D.',
    openGraph: {
        title: 'Real Estate Broker Tools & Visual Sales | Zlendo Realty',
        description:
            'Close deals faster with visual confidence. Empower buyers to visualize their future home instantly in 3D.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Broker Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Real Estate Broker Tools & Visual Sales | Zlendo Realty',
        description: 'Close deals faster by empowering buyers to visualize homes instantly.',
        images: ['/og-image.png'],
    },
};

export default function RealEstateBrokersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
