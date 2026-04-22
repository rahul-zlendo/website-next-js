import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Interior & Exterior Design Software | Zlendo Realty',
    description: 'Design stunning interiors and architectural exteriors with ease. Access a professional toolkit for materials, lighting, and landscape design.',
};

export default function InteriorsExteriorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
