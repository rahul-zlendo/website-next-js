import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty',
    description: 'Align your modern home with ancient wisdom using our Vastu house plan design services. Get expert Vastu layout tips and corrective energy solutions.',
    keywords: 'vastu house plan design, free vastu layout design guide, indian house plan design, free vastu living room layout tips, vastu optimizer online',
    openGraph: {
        title: 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty',
        description: 'Align your modern home with ancient wisdom using our Vastu house plan design services. Get expert Vastu layout tips and corrective energy solutions.',
        url: 'https://app.zlendorealty.com/in/use-case/vastu-optimization',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Vastu Optimization',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty',
        description: 'Align your modern home with ancient wisdom using our Vastu house plan design services.',
        images: ['/og-image.png'],
    },
};

export default function VastuOptimizationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
