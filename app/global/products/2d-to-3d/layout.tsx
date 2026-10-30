import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: '2D to 3D Floor Plan Converter – Upload & View in 3D',
    description: 'Free 2D to 3D converter: upload a 2D floor plan (image, PDF or DWG) and view it as an editable 3D floor plan in minutes with Zlendo Realty.',
    path: '/products/2d-to-3d',
});

export default function TwoDTo3DLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
