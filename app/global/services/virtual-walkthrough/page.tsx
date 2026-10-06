import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VirtualWalkthroughClient from '@/app/[country]/services/virtual-walkthrough/VirtualWalkthroughClient';
import JsonLd from '@/components/common/JsonLd';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Virtual Walkthrough Services | Floor Plan to Virtual Tour | Zlendo Realty',
        description: 'Transform your floor plans, CAD drawings, and 3D models into immersive virtual walkthroughs with Zlendo Realty. Professional visualization services for architects, builders, developers, and interior designers.',
        path: '/services/virtual-walkthrough',
        keywords: [
            'Virtual Walkthrough Services',
            'Floor Plan to Virtual Tour',
            '3D Walkthrough',
            'Virtual Property Tour',
            'Architectural Walkthrough',
            'Residential Virtual Walkthrough',
            'Commercial Virtual Walkthrough',
            'Interior Design Walkthrough',
            'CAD to Walkthrough',
            '2D to 3D Walkthrough',
            'Interactive Virtual Tour',
            '360 Property Tour',
            'Real Estate Visualization',
            'Walkthrough Animation',
            'Property Visualization Services',
        ],
        ogTitle: 'Transform Floor Plans into Immersive Virtual Walkthroughs',
        ogDescription: 'Help clients experience your project before construction begins. Zlendo Realty creates realistic virtual walkthroughs from floor plans, CAD drawings, and 3D models for residential and commercial projects.',
    });
}

export default async function VirtualWalkthroughPage() {
    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "Virtual Walkthrough Services - Frequently Asked Questions",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a virtual walkthrough?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A virtual walkthrough is a realistic digital experience that allows viewers to explore a property or design before it is built."
                }
            },
            {
                "@type": "Question",
                "name": "Can you create a walkthrough from a floor plan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We can convert 2D floor plans, CAD drawings, architectural plans, and sketches into realistic virtual walkthroughs."
                }
            },
            {
                "@type": "Question",
                "name": "What file formats do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept PDF, DWG, DXF, CAD files, images, sketches, and 3D model formats."
                }
            },
            {
                "@type": "Question",
                "name": "How long does the process take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines vary based on size and complexity. We provide a detailed schedule after reviewing your files."
                }
            },
            {
                "@type": "Question",
                "name": "Who uses virtual walkthroughs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Architects, builders, developers, interior designers, homeowners, and real estate professionals regularly use virtual walkthroughs."
                }
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Virtual Walkthrough Services",
        "provider": {
            "@type": "Organization",
            "name": "Zlendo Realty",
            "url": "https://zlendorealty.com"
        },
        "description": "Transform your floor plans, CAD drawings, and 3D models into immersive virtual walkthroughs. Professional visualization services for architects, builders, developers, and interior designers.",
        "areaServed": "Global",
        "serviceType": "Virtual Walkthrough"
    };

    return (
        <>
            <JsonLd schema={faqSchema} />
            <JsonLd schema={serviceSchema} />
            <VirtualWalkthroughClient />
        </>
    );
}
