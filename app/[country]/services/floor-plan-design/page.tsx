import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import FloorPlanDesignClient from './FloorPlanDesignClient';
import JsonLd from '@/components/common/JsonLd';

export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/floor-plan-design' : `/${country}/services/floor-plan-design`;

    return createPageMetadata({
        title: 'Floor Plan Design Services for Homeowners | Zlendo Realty',
        description: 'Get customized 2D & 3D floor plan design services for your dream home. Zlendo Realty helps homeowners create smart, Vastu-friendly house layouts with expert guidance.',
        path: cleanPath,
        keywords: [
            'floor plan design services',
            'house floor plan design',
            '2D floor plan for home',
            '3D house layout design',
            'vastu floor plan',
            'duplex floor plan design',
            'home planning services',
            'residential floor planner',
        ],
    });
}

export default async function FloorPlanDesignPage({ params }: Props) {
    const { country } = await params;

    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Floor Plan Design Services - Frequently Asked Questions",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can you design floor plans for small plots?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We specialize in optimizing layouts for compact and irregular plot sizes."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide 3D floor plan visualization?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We convert approved layouts into immersive 3D visualizations."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help with Vastu-based planning?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We can incorporate Vastu preferences into your floor plan design."
                }
            },
            {
                "@type": "Question",
                "name": "Is this suitable for duplex homes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We design duplex, villa, and multi-floor residential layouts."
                }
            },
            {
                "@type": "Question",
                "name": "Can I modify the design later?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide revision support during the planning phase."
                }
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Floor Plan Design Services",
        "provider": {
            "@type": "Organization",
            "name": "Zlendo Realty",
            "url": "https://zlendorealty.com"
        },
        "description": "Get customized 2D & 3D floor plan design services for your dream home. Expert guidance for smart, Vastu-friendly house layouts.",
        "areaServed": "India",
        "serviceType": "Floor Plan Design"
    };

    return (
        <>
            <JsonLd schema={faqSchema} />
            <JsonLd schema={serviceSchema} />
            <FloorPlanDesignClient />
        </>
    );
}
