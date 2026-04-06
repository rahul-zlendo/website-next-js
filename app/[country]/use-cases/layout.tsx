import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home Design Use Cases Solutions',
    description: 'Discover how Zlendo Realty is used by homeowners, designers, builders, and real estate professionals worldwide.',
    keywords: 'home design use cases, interior design solutions, real estate design tools, builder design software, architecture use cases',
    alternates: {
        canonical: 'https://zlendorealty.com/in/use-cases',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/use-cases',
            'x-default': 'https://zlendorealty.com/in/use-cases',
        },
    },
};

export default function UseCasesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

