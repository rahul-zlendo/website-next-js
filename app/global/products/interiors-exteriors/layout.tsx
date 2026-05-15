import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Interior & Exterior Design Software | Zlendo Realty',
    description: 'Design stunning interiors and architectural exteriors with ease. Access a professional toolkit for materials, lighting, and landscape design.',
    path: '/products/interiors-exteriors',
});

export default function InteriorsExteriorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
