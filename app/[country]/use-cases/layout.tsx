import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home Design Use Cases | Zlendo Realty Solutions',
    description: 'Discover how Zlendo Realty is used by homeowners, designers, builders, and real estate professionals worldwide.',
    keywords: 'home design use cases, interior design solutions, real estate design tools, builder design software, architecture use cases',
    openGraph: {
        title: 'Home Design Use Cases | Zlendo Realty Solutions',
        description: 'Discover how Zlendo Realty is used by homeowners, designers, builders, and real estate professionals worldwide.',
        url: 'https://app.zlendorealty.com/in/use-cases',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Use Cases',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Home Design Use Cases | Zlendo Realty Solutions',
        description: 'Discover how Zlendo Realty is used by homeowners, designers, builders, and real estate professionals.',
        images: ['/og-image.png'],
    },
};

export default function UseCasesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
