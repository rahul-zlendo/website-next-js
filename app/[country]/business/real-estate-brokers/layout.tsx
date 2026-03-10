import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Real Estate Broker Tools | Zlendo Realty',
    description:
        'Empower your property sales with 3D floor plans, virtual tours, and interactive visualization tools. Close deals faster with Zlendo Realty.',
    keywords: [
        'real estate brokers',
        'real estate agents',
        'visualize home',
        'floor plans',
        '2D layouts',
        '3D floor plans',
        'realistic 3D',
        'visualization',
        'virtual property tours',
        'sales discussions',
        'property showcase',
    ],
    openGraph: {
        title: 'Real Estate Broker Tools | Zlendo Realty',
        description: 'Close deals faster with immersive 3D property visualization and virtual tours.',
        url: 'https://zlendorealty.com/in/business/real-estate-brokers',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Real Estate Brokers',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Real Estate Broker Tools | Zlendo Realty',
        description: 'Immersive 3D property tours for faster deal closures.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/business/real-estate-brokers',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/business/real-estate-brokers',
            'x-default': 'https://zlendorealty.com/in/business/real-estate-brokers',
        },
    },
};

export default function RealEstateBrokersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
