import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import InteriorDesignClient from './InteriorDesignClient';
import JsonLd from '@/components/common/JsonLd';

export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/interior-design' : `/${country}/services/interior-design`;

    return createPageMetadata({
        title: 'Professional Interior Design Services for Homes & Offices | Zlendo Realty',
        description: 'Looking for professional interior design services? We create stylish, functional, and customized interiors for homes, offices, and commercial spaces. Contact us today for a free consultation.',
        path: cleanPath,
        keywords: [
            'Interior Design Services',
            'Residential Interior Design',
            'Commercial Interior Design',
            'Home Interior Designers',
            'Office Interior Design',
            'Modular Kitchen Design',
            'Interior Designers Near Me',
            'Luxury Interior Design',
            'Modern Interior Design',
            'Interior Renovation Services',
            'Space Planning Services',
            '3D Interior Design',
            'Turnkey Interior Solutions',
            'Custom Interior Design',
            'Living Room Interior Design',
            'Bedroom Interior Design',
            'Home Renovation Services',
            'Interior Decoration Services',
            'Interior Design Company',
            'Professional Interior Designers',
        ],
    });
}

export default async function InteriorDesignPage({ params }: Props) {
    const { country } = await params;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Interior Design Services - Frequently Asked Questions",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does an interior design project take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines depend on the size and scope of work. Most residential interior projects take between 4 to 12 weeks."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide complete turnkey interior solutions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer end-to-end interior design and execution services, including planning, material selection, project management, and installation."
                }
            },
            {
                "@type": "Question",
                "name": "Can you work within my budget?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We create customized solutions based on your budget while maintaining quality and functionality."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer 3D interior designs before execution?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide detailed 3D visualizations and concept designs to help you visualize the final space before execution begins."
                }
            },
            {
                "@type": "Question",
                "name": "Can you design a single room instead of a full home?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer both full-home interior solutions and single-room design services."
                }
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Interior Design Services",
        "provider": {
            "@type": "Organization",
            "name": "Zlendo Realty",
            "url": "https://zlendorealty.com"
        },
        "description": "Looking for professional interior design services? We create stylish, functional, and customized interiors for homes, offices, and commercial spaces.",
        "areaServed": "India",
        "serviceType": "Interior Design"
    };

    return (
        <>
            <JsonLd schema={faqSchema} />
            <JsonLd schema={serviceSchema} />
            <InteriorDesignClient />
        </>
    );
}
