import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Virtual Walkthrough & 8K Home Tours',
    description:
        'Walk through your future home in immersive 8K virtual tours. First-person exploration compatible with VR headsets. Experience spaces before they are built.',
    keywords: [
        'hyper-realistic virtual walkthroughs',
        '8k virtual walkthroughs',
        'home design software',
        'AI design software',
        'floor plans converter',
        'cinematic storytelling in design',
        'VR design software',
        'VR headset compatible design',
        'AR design software',
        'homeowners design tools',
        'architects design software',
        'real estate builders software',
    ],
    openGraph: {
        title: 'Immersive Virtual Walkthrough',
        description: 'Walk through your future home in 8K quality. First-person exploration of spaces before construction.',
        url: 'https://zlendorealty.com/in/products/virtual-walkthrough',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Virtual Walkthrough',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Virtual Home Walkthrough',
        description: 'Immersive 8K home tours with VR support. Experience your design today.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/products/virtual-walkthrough',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/products/virtual-walkthrough',
            'x-default': 'https://zlendorealty.com/in/products/virtual-walkthrough',
        },
    },
};

export default function VirtualWalkthroughLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
