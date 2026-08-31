import type { Metadata } from 'next';
import WorkshopsPage from '@/components/colleges/WorkshopsPage';
import JsonLd from '@/components/common/JsonLd';

const title = 'Future of AEC Day: College Spatial AI & PropTech Workshop | Zlendo Realty';
const description = 'Bring Zlendo Realty Future of AEC Day to your campus: Spatial AI and PropTech insights, a hands-on AI design workshop, and an architect-juried innovation challenge.';

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        'Future of AEC Day',
        'architecture college workshops',
        'interior design student workshops',
        'PropTech workshops for students',
        'AI architecture workshop',
        '2D to 3D design workshop',
        'college design technology workshop',
    ],
    alternates: {
        canonical: 'https://zlendorealty.com/colleges/workshops',
        languages: {
            'en': 'https://zlendorealty.com/colleges/workshops',
            'en-IN': 'https://zlendorealty.com/in/colleges/workshops',
        },
    },
    openGraph: {
        title,
        description,
        url: 'https://zlendorealty.com/colleges/workshops',
        siteName: 'Zlendo Realty',
        type: 'website',
    },
};

const workshopSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zlendo Realty – Future of AEC Day',
    description,
    provider: {
        '@type': 'Organization',
        name: 'Zlendo Realty',
        url: 'https://zlendorealty.com',
    },
    audience: {
        '@type': 'EducationalAudience',
        educationalRole: 'student',
    },
    serviceType: 'One-day college workshop',
    url: 'https://zlendorealty.com/colleges/workshops',
};

export default function GlobalWorkshopsPage() {
    return (
        <>
            <JsonLd schema={workshopSchema} />
            <WorkshopsPage />
        </>
    );
}
