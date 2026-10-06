import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Vastu Shastra Optimizer | AI-powered Spatial Harmony - Zlendo Realty',
    description: 'Ensure your home design follows Vastu principles automatically. Our AI analyzes your 3D floor plan for directional zoning and element balancing.',
    path: '/products/vastu',
});

export default function VastuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
