import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Room Styler & Interior Inspiration | Zlendo Realty',
    description:
        'Get AI-generated room style inspirations tailored to your space. Explore curated furniture, color palettes, and photorealistic interior previews.',
    keywords: [
        'furniture catalog',
        'interior design',
        'room styler',
        'ai interior design',
        'photorealistic image',
        'color palettes',
        'room model',
    ],
    openGraph: {
        title: 'AI Room Styler | Zlendo Realty',
        description: 'AI-generated room style inspirations tailored to your layout. Curated furniture and color palettes.',
        url: 'https://zlendorealty.com/in/products/room-styler',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Room Styler',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Room Styler | Zlendo Realty',
        description: 'Get AI-powered interior style suggestions for any room.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/products/room-styler',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/products/room-styler',
            'x-default': 'https://zlendorealty.com/in/products/room-styler',
        },
    },
};

export default function RoomStylerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
