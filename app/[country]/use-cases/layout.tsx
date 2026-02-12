import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home Design Use Cases | Zlendo Realty Solutions',
    description: 'Discover how Zlendo Realty is used by homeowners, designers, builders, and real estate professionals worldwide.',
    keywords: 'home design use cases, interior design solutions, real estate design tools, builder design software, architecture use cases',
};

export default function UseCasesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
