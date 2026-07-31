import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import TwoDToThreeDClient from './TwoDToThreeDClient';
import JsonLd from '@/components/common/JsonLd';

export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = '/services/2d-to-3d';

    let title = '2D to 3D Conversion Services | House & Office 3D Design | Zlendo Realty';
  if (country === 'in') {
      if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
      else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
      else title += ' Online';
  }
  return createPageMetadata({
    title,
        description: 'Transform your 2D house & office plans into stunning 3D designs. Get realistic 3D visualization, interior rendering, and professional design conversion services for residential and commercial spaces.',
        path: cleanPath,
        keywords: [
            '2D to 3D conversion',
            '2D floor plan to 3D design',
            '3D floor plan design',
            'house plan to 3D model',
            'office floor plan 3D visualization',
            '3D architectural visualization',
            '3D interior design rendering',
            '3D exterior rendering service',
            'floor plan rendering service',
            '3D walkthrough design',
            'convert 2D plan to 3D online',
            'architectural 3D modeling service',
            '3D design services for architects',
            'real estate 3D visualization services',
            'building plan 3D conversion',
            'convert house floor plan into 3D rendering',
            'office space 3D visualization service',
            'realistic 3D home design from blueprint',
            'professional 3D floor plan rendering company',
            'affordable 2D to 3D conversion service',
        ],
    });
}

export default async function TwoDToThreeDPage() {
    const faqSchema = {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "name": "2D to 3D Conversion Services - Frequently Asked Questions",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does 2D to 3D conversion take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines depend on the complexity and size of the design. Most standard projects are delivered within a few days."
                }
            },
            {
                "@type": "Question",
                "name": "What file formats do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept sketches, PDFs, CAD files, floor plans, and image references."
                }
            },
            {
                "@type": "Question",
                "name": "Can you create realistic interior renders?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide high-quality photorealistic interior and exterior rendering services."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer revisions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, revisions are included to ensure the final design meets your expectations."
                }
            },
            {
                "@type": "Question",
                "name": "Is this service suitable for office spaces?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We create professional 3D visualizations for offices, commercial buildings, and retail spaces."
                }
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "2D to 3D Conversion Services",
        "provider": {
            "@type": "Organization",
            "name": "Zlendo Realty",
            "url": "https://zlendorealty.com"
        },
        "description": "Transform your 2D house & office plans into stunning 3D designs with realistic visualization, interior rendering, and professional conversion services.",
        "areaServed": "Global",
        "serviceType": "2D to 3D Design Conversion"
    };

    return (
        <>
            <JsonLd schema={faqSchema} />
            <JsonLd schema={serviceSchema} />
            <TwoDToThreeDClient />
        </>
    );
}
