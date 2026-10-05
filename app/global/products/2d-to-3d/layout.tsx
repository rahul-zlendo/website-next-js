import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: '2D to 3D Floor Plan Converter | Zlendo Realty',
    description: 'Turn a supported 2D floor plan into a 3D home view. Explore upload formats, editable layouts, example results and conversion limits with Zlendo Realty.',
    path: '/products/2d-to-3d',
});

export default function TwoDTo3DLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
