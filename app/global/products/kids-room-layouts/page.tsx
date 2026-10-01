import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import KidsRoomLayoutsClient from '@/components/products/KidsRoomLayoutsClient';

const url = 'https://zlendorealty.com/products/kids-room-layouts/';

export const metadata: Metadata = {
    title: 'Kids Room Layouts & Design Ideas | Zlendo Realty',
    description: 'Create smart, playful kids room layouts with Zlendo Realty. Plan furniture, storage, study areas and décor, then visualize your child\'s room in 3D.',
    keywords: 'Kids Room Layouts, Kids Room Design, Kids Bedroom Layout, Kids Room Planner, Kids Room Design Ideas, Children\'s Room Design, Kids Bedroom Design, Small Kids Room Ideas, Kids Room Furniture Layout, Kids Room Interior Design, Kids Room Floor Plan',
    alternates: {
        canonical: url,
        languages: {
            en: url,
            'x-default': url,
        },
    },
    openGraph: {
        title: 'Design Kids Room Layouts in 3D | Zlendo Realty',
        description: 'Plan a functional and playful kids room with customizable layouts, furniture, décor and realistic 3D visualization.',
        url,
        siteName: 'Zlendo Realty',
        type: 'website',
    },
};

export default function KidsRoomLayoutsPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Zlendo Realty Kids Room Layouts',
        serviceType: 'Kids Room Layout Planner',
        url,
        description: 'Plan a functional and playful kids room with customizable layouts, furniture, décor and realistic 3D visualization.',
        provider: { '@type': 'Organization', name: 'Zlendo Realty', url: 'https://zlendorealty.com' },
    };

    return (
        <>
            <JsonLd schema={schema} />
            <KidsRoomLayoutsClient />
        </>
    );
}
