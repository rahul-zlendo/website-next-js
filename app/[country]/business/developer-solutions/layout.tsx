import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Real Estate Developer Design Solutions | Zlendo Realty',
    description:
        'Present with clarity and sell with confidence. High-impact visual storytelling for real estate developers to accelerate sales.',
    openGraph: {
        title: 'Real Estate Developer Design Solutions | Zlendo Realty',
        description:
            'Present with clarity and sell with confidence. High-impact visual storytelling for real estate developers to accelerate sales.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Developer Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Real Estate Developer Design Solutions | Zlendo Realty',
        description: 'Present with clarity and sell with confidence. Accelerate sales with visual storytelling.',
        images: ['/og-image.png'],
    },
};

export default function DeveloperSolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
