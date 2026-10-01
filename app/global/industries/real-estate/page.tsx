import { Metadata } from 'next';
import RealEstateClient from './RealEstateClient';
import FAQ from '@/components/global/sections/FAQ';

const ogTitle = "AI-Powered Real Estate Visualization | Zlendo Realty";
const ogDescription = "Visualize properties before buyers step inside. Create 3D floor plans, realistic interiors, property renders, and virtual walkthroughs with AI.";

export const metadata: Metadata = {
    title: "AI Real Estate Visualization & 3D Property Design | Zlendo Realty",
    description: "Transform floor plans and properties into 3D designs, realistic renders, virtual staging, and immersive walkthroughs with Zlendo Realty's AI platform.",
    keywords: [
        "AI real estate visualization", "real estate visualization software", "AI property visualization",
        "real estate 3D visualization", "AI real estate design", "property visualization software",
        "3D property visualization", "real estate 3D rendering", "AI property rendering",
        "property rendering software", "virtual property walkthrough", "virtual property tour",
        "AI virtual staging", "real estate virtual staging", "property floor plan 3D",
        "2D to 3D floor plan", "AI floor plan generator", "real estate marketing visualization",
        "property marketing software", "AI tools for real estate"
    ],
    openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: 'https://zlendorealty.com/industries/real-estate',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/assets/og-real-estate.jpg',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    }
};

const faqData = [
    {
        question: "How can AI help real estate companies?",
        answer: "AI can help real estate companies create floor plans, 3D property visualizations, interior concepts, realistic renders, and virtual walkthroughs faster."
    },
    {
        question: "Can Zlendo visualize properties before construction?",
        answer: "Yes. Zlendo's visualization tools can help teams present proposed properties, interiors, exteriors, and walkthrough experiences before construction is complete."
    },
    {
        question: "Can I convert an existing floor plan into 3D?",
        answer: "Yes. Zlendo's 2D to 3D Converter is designed to transform existing floor plans into 3D environments."
    },
    {
        question: "Can Zlendo help with property marketing?",
        answer: "Yes. Realistic renders, styled interiors, 3D floor plans, and virtual walkthroughs can be used to create more engaging property marketing experiences."
    },
    {
        question: "Is Zlendo suitable for large real estate businesses?",
        answer: "Yes. The platform can support businesses that need repeatable property visualization workflows across multiple projects."
    }
];

export default function RealEstatePage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://zlendorealty.com/industries/real-estate",
                    "name": ogTitle,
                    "description": ogDescription,
                    "publisher": {
                        "@type": "Organization",
                        "name": "Zlendo Realty"
                    }
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />

            <RealEstateClient />

            <section className="bg-white">
                <FAQ data={{ title: "Frequently Asked Questions", faqs: faqData }} />
            </section>
        </main>
    );
}
