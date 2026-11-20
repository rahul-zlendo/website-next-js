import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: '2D to 3D Floor Plan Converter – Upload & View in 3D',
    description: 'Free 2D to 3D converter: upload a 2D floor plan (PDF, PNG, or JPG) and view it as an editable 3D floor plan in minutes with Zlendo Realty. CAD export supported.',
    path: '/products/2d-to-3d',
    ogImage: {
        url: 'https://zlendorealty.com/assets/2d-to-3d/after-render.webp',
        width: 1200,
        height: 800,
        alt: 'Zlendo Realty 2D to 3D Floor Plan Converter Before & After Render',
        type: 'image/webp',
    },
});

export default function TwoDTo3DLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
