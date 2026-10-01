import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Instant 2D to 3D Floor Plan Converter | Zlendo Realty',
    description: 'Transform any 2D floor plan image or PDF into a fully navigable 3D model automatically using AI. Convert sketches to reality in under 60 seconds.',
    path: '/products/2d-to-3d',
});

export default function TwoDTo3DLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
