import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import BathroomDesignClient from '@/components/products/BathroomDesignClient';

const url = 'https://zlendorealty.com/products/bathroom-design-tool/';

export const metadata: Metadata = {
    title: 'Bathroom Design Tool & 3D Visualization | Zlendo Realty',
    description: 'Plan your bathroom layout, explore materials and fixtures, and visualize the entire space in 3D before renovation or construction.',
    keywords: 'Bathroom Design Tool, Online Bathroom Planner, Bathroom Layout, 3D Bathroom Design, Bathroom Renovation, Master Bathroom Layout',
    alternates: {
        canonical: url,
        languages: {
            en: url,
            'x-default': url,
        },
    },
    openGraph: {
        title: 'Bathroom Design Tool by Zlendo Realty',
        description: 'Plan your bathroom layout, explore materials and fixtures, and visualize the entire space in 3D before renovation or construction.',
        url,
        siteName: 'Zlendo Realty',
        type: 'website',
    },
};

export default function BathroomDesignPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Zlendo Realty Bathroom Design Tool',
        serviceType: 'Bathroom Planning and 3D Visualization',
        url,
        description: 'An online tool and professional service for planning bathroom layouts, materials, and 3D visual designs.',
        provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
    };

    return (
        <>
            <JsonLd schema={schema} />
            <BathroomDesignClient />
        </>
    );
}
