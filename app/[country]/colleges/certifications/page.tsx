import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CertificationsPage, { certificationFaqs } from '@/components/colleges/CertificationsPage';
import JsonLd from '@/components/common/JsonLd';

interface CertificationsPageRouteProps {
    params: Promise<{ country: string }>;
}

const description = 'Explore Zlendo Realty’s planned AEC credential pathway covering design foundations, Spatial AI, applied projects, innovation challenges, and faculty facilitation.';

export async function generateMetadata({ params }: CertificationsPageRouteProps): Promise<Metadata> {
    const { country } = await params;
    if (country !== 'in') return {};

    return {
        title: 'AEC Student Certification Courses - Zlendo Portal',
        description,
        keywords: [
            'AEC student certification India',
            'Spatial AI certification course',
            'architecture software certification',
            'PropTech student certificate',
            'AI design certification',
        ],
        alternates: {
            canonical: 'https://zlendorealty.com/in/colleges/certifications',
            languages: {
                en: 'https://zlendorealty.com/colleges/certifications',
                'en-IN': 'https://zlendorealty.com/in/colleges/certifications',
            },
        },
        openGraph: {
            title: 'AEC Student Certification Courses',
            description,
            url: 'https://zlendorealty.com/in/colleges/certifications',
            siteName: 'Zlendo Realty',
            type: 'website',
        },
    };
}

export default async function IndiaCertificationsPage({ params }: CertificationsPageRouteProps) {
    const { country } = await params;
    if (country !== 'in') notFound();

    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Zlendo Realty AEC Certifications',
        description,
        url: 'https://zlendorealty.com/in/colleges/certifications',
        publisher: {
            '@type': 'Organization',
            name: 'Zlendo Realty',
            url: 'https://zlendorealty.com',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: certificationFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    return (
        <>
            <JsonLd schema={pageSchema} />
            <JsonLd schema={faqSchema} />
            <CertificationsPage prefix="/in" />
        </>
    );
}
