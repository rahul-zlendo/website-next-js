import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WorkshopsPage from '@/components/colleges/WorkshopsPage';
import JsonLd from '@/components/common/JsonLd';

interface WorkshopsPageProps {
    params: Promise<{ country: string }>;
}

const description = 'Bring Zlendo Realty Future of AEC Day to your campus: Spatial AI and PropTech insights, a hands-on AI design workshop, and an architect-juried innovation challenge.';

export async function generateMetadata({ params }: WorkshopsPageProps): Promise<Metadata> {
    const { country } = await params;
    if (country !== 'in') return {};

    return {
        title: 'Future of AEC Day: College Spatial AI & PropTech Workshop - Zlendo Portal',
        description,
        keywords: [
            'Future of AEC Day',
            'architecture college workshops India',
            'interior design student workshops',
            'PropTech workshops for students',
            'AI architecture workshop',
            '2D to 3D design workshop',
        ],
        alternates: {
            canonical: 'https://zlendorealty.com/in/colleges/workshops',
            languages: {
                'en': 'https://zlendorealty.com/colleges/workshops',
                'en-IN': 'https://zlendorealty.com/in/colleges/workshops',
            },
        },
        openGraph: {
            title: 'Future of AEC Day: College Spatial AI & PropTech Workshop',
            description,
            url: 'https://zlendorealty.com/in/colleges/workshops',
            siteName: 'Zlendo Realty',
            type: 'website',
        },
    };
}

export default async function IndiaWorkshopsPage({ params }: WorkshopsPageProps) {
    const { country } = await params;
    if (country !== 'in') notFound();

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
        areaServed: 'India',
        audience: {
            '@type': 'EducationalAudience',
            educationalRole: 'student',
        },
        serviceType: 'One-day college workshop',
        url: 'https://zlendorealty.com/in/colleges/workshops',
    };

    return (
        <>
            <JsonLd schema={workshopSchema} />
            <WorkshopsPage prefix="/in" />
        </>
    );
}
