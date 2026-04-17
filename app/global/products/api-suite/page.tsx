import React from 'react';
import { Metadata } from 'next';
import GlobalApiSuiteClient from './GlobalApiSuiteClient';

export const metadata: Metadata = {
    title: 'Enterprise Design API Suite | Zlendo Global',
    description: 'Integrate the worlds most powerful 2D-to-3D design engine into your platform. Photorealistic rendering, spatial AI, and automated styling at enterprise scale.',
    keywords: ['PropTech API', 'Design Engine API', '2D to 3D Conversion API', 'Architectural Visualization API', 'Automated Interior Design API'],
    alternates: {
        canonical: 'https://zlendorealty.com/global/products/api-suite',
    }
};

export default function ApiSuitePage() {
    return <GlobalApiSuiteClient />;
}
