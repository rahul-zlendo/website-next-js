import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import GlobalApiSuiteClient from './GlobalApiSuiteClient';

export const metadata: Metadata = createPageMetadata({
    title: 'Enterprise Design API Suite | Zlendo Global',
    description: 'Integrate the worlds most powerful 2D-to-3D design engine into your platform. Photorealistic rendering, spatial AI, and automated styling at enterprise scale.',
    path: '/products/api-suite',
});

export default function ApiSuitePage() {
    return <GlobalApiSuiteClient />;
}
