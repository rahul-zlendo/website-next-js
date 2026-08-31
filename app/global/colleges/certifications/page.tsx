import type { Metadata } from 'next';
import CertificationsPage, { certificationFaqs } from '@/components/colleges/CertificationsPage';
import JsonLd from '@/components/common/JsonLd';

const title = 'AEC Student Certification Courses | Zlendo Realty';
const description = 'Explore Zlendo Realty’s planned AEC credential pathway covering design foundations, Spatial AI, applied projects, innovation challenges, and faculty facilitation.';

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        'AEC student certification',
        'Spatial AI certification course',
        'architecture software certification',
        'PropTech student certificate',
        'AI design certification',
        'architecture college certification program',
    ],
    alternates: {
        canonical: 'https://zlendorealty.com/colleges/certifications',
        languages: {
            en: 'https://zlendorealty.com/colleges/certifications',
            'en-IN': 'https://zlendorealty.com/in/colleges/certifications',
        },
    },
    openGraph: {
        title,
        description,
        url: 'https://zlendorealty.com/colleges/certifications',
        siteName: 'Zlendo Realty',
        type: 'website',
    },
};

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Zlendo Realty AEC Certifications',
    description,
    url: 'https://zlendorealty.com/colleges/certifications',
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

export default function GlobalCertificationsPage() {
    return (
        <>
            <JsonLd schema={pageSchema} />
            <JsonLd schema={faqSchema} />
            <CertificationsPage />
        </>
    );
}
