import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Room Styler & Interior Design | Zlendo Realty',
    description:
        'Visualize different styles, furniture layouts, and color palettes instantly. Let AI be your personal interior designer.',
    openGraph: {
        title: 'AI Room Styler & Interior Design | Zlendo Realty',
        description:
            'Visualize different styles, furniture layouts, and color palettes instantly. Let AI be your personal interior designer.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Room Styler',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Room Styler & Interior Design | Zlendo Realty',
        description: 'Visualize different styles, furniture layouts, and color palettes instantly.',
        images: ['/og-image.png'],
    },
};

export default function RoomStylerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
