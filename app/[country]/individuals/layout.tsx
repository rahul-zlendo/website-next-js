import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'For Homeowners & Individuals | Zlendo Realty',
    description:
        'See your future home in immersive 8K 3D before construction begins. Accurate cost estimates, material selection, and vastu-compliant designs for homeowners.',
    keywords: [
        'home design for individuals',
        'homeowner 3d visualization',
        'residential design tool',
        '3d home walkthrough',
        'home interior preview',
        'vastu home design',
        'home building cost estimate',
    ],
    openGraph: {
        title: 'Visualize Your Dream Home in 3D | Zlendo Realty',
        description:
            'Experience your future home before it is built. Get precise cost estimates and immersive 3D interior designs.',
        url: 'https://zlendorealty.com/in/individuals',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - For Homeowners',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'For Homeowners | Zlendo Realty',
        description: 'Visualize your dream home in 8K 3D. Accurate estimates, zero guesswork.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/individuals',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/individuals',
            'x-default': 'https://zlendorealty.com/in/individuals',
        },
    },
};

export default function IndividualsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
