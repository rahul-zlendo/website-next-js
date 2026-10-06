import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'AI Cost Estimator & Live BOQ Generation | Zlendo Realty',
    description: 'Get instant Bill of Quantities (BOQ) and cost estimates for your 3D home designs. Link your models to real-world material and labor costs.',
    path: '/products/cost-estimator',
});

export default function CostEstimatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
