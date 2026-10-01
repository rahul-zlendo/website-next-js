import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CollegePartnershipPage, { collegePartnershipFaqs } from '@/components/colleges/CollegePartnershipPage';
import JsonLd from '@/components/common/JsonLd';

interface PartnershipPageProps {
    params: Promise<{ country: string }>;
}

const description = 'Partner with Zlendo Realty to integrate Spatial AI, PropTech, curriculum projects, workshops, architect mentorship, live-project exposure, and portfolio development into AEC education.';

export async function generateMetadata({ params }: PartnershipPageProps): Promise<Metadata> {
    const { country } = await params;
    if (country !== 'in') return {};

    return {
        title: 'AEC College Academic Partnership Program - Zlendo Portal',
        description,
        keywords: [
            'AEC college partnership India',
            'architecture college industry partnership',
            'civil engineering academic partnership',
            'Spatial AI education program',
            'PropTech student program',
        ],
        alternates: {
            canonical: 'https://zlendorealty.com/in/colleges/partnerships',
            languages: {
                en: 'https://zlendorealty.com/colleges/partnerships',
                'en-IN': 'https://zlendorealty.com/in/colleges/partnerships',
            },
        },
        openGraph: {
            title: 'AEC College Academic Partnership Program',
            description,
            url: 'https://zlendorealty.com/in/colleges/partnerships',
            siteName: 'Zlendo Realty',
            type: 'website',
        },
    };
}

export default async function IndiaCollegePartnershipPage({ params }: PartnershipPageProps) {
    const { country } = await params;
    if (country !== 'in') notFound();

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
        areaServed: 'India',
        educationalProgramMode: ['online', 'onsite'],
        occupationalCategory: 'Architecture, Engineering and Construction',
        url: 'https://zlendorealty.com/in/colleges/partnerships',
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

    return (
        <>
            <JsonLd schema={partnershipSchema} />
            <JsonLd schema={faqSchema} />
            <CollegePartnershipPage prefix="/in" />
        </>
    );
}
