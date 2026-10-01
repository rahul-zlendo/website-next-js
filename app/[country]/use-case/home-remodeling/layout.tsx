import type { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

export const metadata: Metadata = {
    title: 'Home Remodeling & Renovation Services',
    description:
        'Transform your existing home with AI-powered remodeling tools. Visualize renovations in 3D before you start. Interior and exterior redesign made easy.',
    keywords: [
        'home remodeling services',
        'home renovation services',
        'office renovation services',
        'interior design services',
        'ai interior design software',
        'ai renovation planning software',
        'ai home remodeling tool',
        'ai space planning tool',
    ],
    openGraph: {
        title: 'Home Remodeling & Renovation',
        description: 'Visualize your renovation before you begin. AI-powered 3D remodeling tools for homeowners and professionals.',
        url: 'https://zlendorealty.com/in/use-case/home-remodeling',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Home Remodeling',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Remodeling & Renovation',
        description: 'AI-powered renovation planning. Visualize changes in 3D before construction.',
    },
    alternates: indiaOnlyAlternates('/use-case/home-remodeling'),
};

export default function HomeRemodelingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
