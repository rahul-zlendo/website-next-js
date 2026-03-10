import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty',
    description: 'Align your modern home with ancient wisdom using our Vastu house plan design services. Get expert Vastu layout tips and corrective energy solutions.',
    keywords: 'vastu house plan design, free vastu layout design guide, indian house plan design, free vastu living room layout tips, vastu optimizer online',
    openGraph: {
        title: 'Vastu Optimization for Home Design | Zlendo Realty',
        description: 'Get AI-driven vastu compliance scores and corrective suggestions. Design harmonious, vastu-compliant homes.',
        url: 'https://zlendorealty.com/in/use-case/vastu-optimization',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Vastu Optimization',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vastu Optimization | Zlendo Realty',
        description: 'Get AI-powered vastu scores and energy-balanced home layouts.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/use-case/vastu-optimization',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/use-case/vastu-optimization',
            'x-default': 'https://zlendorealty.com/in/use-case/vastu-optimization',
        },
    },
};

export default function VastuOptimizationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
