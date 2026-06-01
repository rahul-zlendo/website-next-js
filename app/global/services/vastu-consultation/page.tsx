import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VastuConsultationClient from '@/app/[country]/services/vastu-consultation/VastuConsultationClient';
import JsonLd from '@/components/common/JsonLd';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Vastu Consultation Services | Expert Home & Office Vastu Guidance',
        description: 'Get expert Vastu consultation services for homes, apartments, villas, offices, and commercial spaces. Upload your floor plan and receive personalized Vastu recommendations online.',
        path: '/services/vastu-consultation',
        keywords: [
            'Vastu Consultation Services',
            'Vastu Shastra Consultation',
            'Home Vastu Analysis',
            'Office Vastu Consultation',
            'Vastu for Apartments',
            'Vastu for Villas',
            'Vastu Remedies',
            'Vastu Floor Plan Analysis',
            'Online Vastu Consultation',
            'Vastu Expert Guidance',
            'Commercial Vastu Services',
            'Vastu Without Demolition',
            'Vastu for New Construction',
            'Vastu Optimizer',
            'AI Vastu Analysis',
            'Vastu Direction Mapping',
            'Vastu Correction Services',
            'Residential Vastu',
            'Plot Vastu Analysis',
            'Interior Vastu Planning',
        ],
        ogTitle: 'Expert Vastu Consultation for Homes & Offices | Book Online',
        ogDescription: 'Get personalized Vastu guidance for your property with expert consultation, floor plan analysis, and practical Vastu recommendations. Book your consultation online today.',
    });
}

export default async function VastuConsultationPage() {
    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Vastu Consultation Services - Frequently Asked Questions",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do I need a complete floor plan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Even a hand-drawn sketch or basic layout works."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help without demolition?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We prioritize practical, non-destructive remedies whenever possible."
                }
            },
            {
                "@type": "Question",
                "name": "Is this service available online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Consultations can be done remotely across India and internationally."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide Vastu for apartments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We support apartments, villas, independent homes, and offices."
                }
            },
            {
                "@type": "Question",
                "name": "Will I receive a detailed report?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. You'll receive a complete consultation report with actionable suggestions."
                }
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Vastu Consultation Services",
        "provider": {
            "@type": "Organization",
            "name": "Zlendo Realty",
            "url": "https://zlendorealty.com"
        },
        "description": "Get expert Vastu consultation services for homes, apartments, villas, offices, and commercial spaces. Upload your floor plan and receive personalized Vastu recommendations online.",
        "areaServed": "Global",
        "serviceType": "Vastu Consultation"
    };

    return (
        <>
            <JsonLd schema={faqSchema} />
            <JsonLd schema={serviceSchema} />
            <VastuConsultationClient />
        </>
    );
}
