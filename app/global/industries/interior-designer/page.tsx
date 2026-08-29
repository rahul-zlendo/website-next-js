import { Metadata } from 'next';
import FAQ from '@/components/global/sections/FAQ';
import InteriorDesignerClient from './InteriorDesignerClient';

const ogTitle = "AI Interior Design Visualization | Zlendo Realty";
const ogDescription = "Turn interior design ideas into realistic rooms with AI-powered styling, 3D visualization, photorealistic renders, and immersive walkthroughs.";

export const metadata: Metadata = {
    title: "AI Interior Design & Visualization Software | Zlendo Realty",
    description: "Create, style, render, and present interior concepts with AI. Visualize rooms, furniture, materials, lighting, and 3D spaces with Zlendo Realty.",
    keywords: [
        "AI interior design visualization", "AI interior design software", "AI interior design",
        "interior design visualization software", "AI room design", "AI room planner",
        "AI room styling", "AI interior rendering", "interior rendering software",
        "3D interior design software", "3D interior visualization", "interior design rendering",
        "AI furniture placement", "AI furniture visualization", "virtual interior design",
        "interior design presentation software", "AI home interior design", "AI design concept generator",
        "realistic interior rendering", "AI interior visualization tool"
    ],
    openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: 'https://zlendorealty.com/industries/interior-designer',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/assets/og-interior-designer.jpg',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    }
};

const faqData = [
    {
        question: "Is Zlendo Realty an AI interior design tool?",
        answer: "Zlendo Realty includes AI-powered room styling and visualization capabilities designed to help professionals create and present interior concepts."
    },
    {
        question: "What is the Zlendo Realty Design Library?",
        answer: "The Zlendo Realty Design Library provides a collection of interior design products and elements, including furniture, lighting, doors, plants, and other décor items. Designers can easily drag and drop these elements into their designs to create interior concepts faster."
    },
    {
        question: "Does the Design Library help speed up the interior design process?",
        answer: "Yes. Instead of creating or sourcing every design element manually, designers can quickly select items from the library and use a drag-and-drop workflow to build interior concepts."
    },
    {
        question: "What is a Virtual Walkthrough in Zlendo Realty?",
        answer: "Virtual Walkthrough allows clients to explore an interior space digitally instead of relying only on static images. This can make design presentations more engaging and help clients understand the proposed space more clearly."
    },
    {
        question: "How does photorealistic rendering help with client approvals?",
        answer: "Realistic renders help clients visualize materials, furniture, lighting, colors, and the overall look of a space before implementation. This can make feedback and approval discussions easier and more efficient."
    },
    {
        question: "Is Zlendo Realty suitable for professional interior design businesses?",
        answer: "Yes. The platform is designed to support interior designers, design consultants, furniture brands, hospitality designers, and architecture and interior design firms."
    },
    {
        question: "Is Zlendo Realty affordable for interior design teams?",
        answer: "Zlendo Realty offers subscription plans designed to provide access to AI-powered design and visualization capabilities without requiring businesses to invest in multiple separate software solutions."
    },
    {
        question: "Can the Zlendo Realty team help with my interior design project?",
        answer: "Yes. The Zlendo Realty team can support your interior design project with AI-powered visualization, room styling, 3D rendering, and virtual walkthroughs. Our team can help transform your design ideas into realistic visual concepts and presentation-ready outputs."
    },
    {
        question: "Can I request interior design visualization support from the Zlendo Realty team?",
        answer: "Yes. You can request interior design support from the Zlendo Realty team based on your project requirements. The team can help identify suitable visualization solutions and workflows for your project."
    }
];

export default function InteriorDesignerPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://zlendorealty.com/industries/interior-designer",
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

            <InteriorDesignerClient />

            <section className="bg-white border-t border-slate-100">
                <FAQ data={{ title: "FAQs", faqs: faqData }} />
            </section>
        </main>
    );
}
