import type { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

export const metadata: Metadata = {
    title: 'Vastu House Plan Design & Vastu Solutions',
    description: 'Align your modern home with ancient wisdom using our Vastu house plan design services. Get expert Vastu layout tips and corrective energy solutions.',
    keywords: 'vastu house plan design, free vastu layout design guide, indian house plan design, free vastu living room layout tips, vastu optimizer online',
    openGraph: {
        title: 'Vastu Optimization for Home Design',
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
        title: 'Vastu Optimization',
        description: 'Get AI-powered vastu scores and energy-balanced home layouts.',
    },
    alternates: indiaOnlyAlternates('/use-case/vastu-optimization'),
};

export default function VastuOptimizationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
