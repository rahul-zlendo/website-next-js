import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '8K Photorealistic Home Rendering | Zlendo Realty',
    description:
        'Visualize your home design with 8K photorealism. Simulate lighting, textures, and details before you build. Book a free demo today.',
    openGraph: {
        title: '8K Photorealistic Home Rendering | Zlendo Realty',
        description:
            'Visualize your home design with 8K photorealism. Simulate lighting, textures, and details before you build.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Realistic Renders',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '8K Photorealistic Home Rendering | Zlendo Realty',
        description: 'Visualize your home design with 8K photorealism. Book a free demo today.',
        images: ['/og-image.png'],
    },
};

export default function RealisticRendersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
