import type { Metadata } from 'next';
import CollegePartnershipPage, { collegePartnershipFaqs } from '@/components/colleges/CollegePartnershipPage';
import JsonLd from '@/components/common/JsonLd';

const title = 'AEC College Academic Partnership Program | Zlendo Realty';
const description = 'Partner with Zlendo Realty to integrate Spatial AI, PropTech, curriculum projects, workshops, architect mentorship, live-project exposure, and portfolio development into AEC education.';

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        'AEC college partnership',
        'architecture college industry partnership',
        'civil engineering academic partnership',
        'Spatial AI education program',
        'PropTech student program',
        'architecture student live projects',
        'college design software partnership',
    ],
    alternates: {
        canonical: 'https://zlendorealty.com/colleges/partnerships',
        languages: {
            en: 'https://zlendorealty.com/colleges/partnerships',
            'en-IN': 'https://zlendorealty.com/in/colleges/partnerships',
        },
    },
    openGraph: {
        title,
        description,
        url: 'https://zlendorealty.com/colleges/partnerships',
        siteName: 'Zlendo Realty',
        type: 'website',
    },
};

const partnershipSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Zlendo Realty Academic Partnership Program',
    description,
    provider: {
        '@type': 'Organization',
        name: 'Zlendo Realty',
        url: 'https://zlendorealty.com',
    },
    educationalProgramMode: ['online', 'onsite'],
    occupationalCategory: 'Architecture, Engineering and Construction',
    url: 'https://zlendorealty.com/colleges/partnerships',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: collegePartnershipFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
};

export default function GlobalCollegePartnershipPage() {
    return (
        <>
            <JsonLd schema={partnershipSchema} />
            <JsonLd schema={faqSchema} />
            <CollegePartnershipPage />
        </>
    );
}
