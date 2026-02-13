import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '3D Virtual Walkthrough for Homes | Zlendo Realty – Free Demo',
    description:
        'Experience immersive 3D virtual walkthroughs that showcase space, flow, and finishes. Step inside your future home before it exists.',
    keywords: [
        'interactive virtual tour services',
        '3d walkthrough rendering',
        'architectural walkthrough services',
        'real estate virtual tour',
        'virtual home tour'
    ],
    openGraph: {
        title: '3D Virtual Walkthrough for Homes | Zlendo Realty',
        description:
            'Experience immersive 3D virtual walkthroughs that showcase space, flow, and finishes. Step inside your future home before it exists.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Virtual Walkthrough',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '3D Virtual Walkthrough for Homes | Zlendo Realty',
        description: 'Experience immersive 3D virtual walkthroughs that showcase space, flow, and finishes.',
        images: ['/og-image.png'],
    },
};

export default function VirtualWalkthroughLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
