import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Photorealistic 3D Renders & Visualization | Zlendo Realty',
    description: 'Generate stunning photorealistic architectural renders in under 10 seconds with Zlendo AI. No high-end hardware or complex software required.',
    path: '/products/realistic-renders',
});

export default function RealisticRendersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
