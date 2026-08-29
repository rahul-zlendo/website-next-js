import { Metadata } from 'next';
import FAQ from '@/components/global/sections/FAQ';
import ArchitectureClient from './ArchitectureClient';

const ogTitle = "AI Architectural Visualization for Modern Design Teams";
const ogDescription = "Turn architectural drawings and concepts into realistic 3D visual experiences with AI-powered planning, rendering, and virtual walkthroughs.";

export const metadata: Metadata = {
    title: "AI Architectural Visualization & 3D Rendering Software | Zlendo Realty",
    description: "Create AI-powered architectural visualizations, 3D floor plans, photorealistic renders, interiors, exteriors, and virtual walkthroughs with Zlendo Realty.",
    keywords: [
        "AI architectural visualization", "architectural visualization software", "AI architecture software",
        "AI architectural design", "architectural 3D visualization", "architectural rendering software",
        "AI architectural rendering", "3D rendering for architects", "photorealistic architectural rendering",
        "architectural visualization tools", "AI rendering for architects", "3D architecture software",
        "architecture visualization software", "AI floor plan for architects", "2D to 3D architecture",
        "architectural walkthrough", "3D architectural walkthrough", "AI interior visualization",
        "AI exterior visualization", "architectural presentation software"
    ],
    openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: 'https://zlendorealty.com/industries/architecture',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/assets/og-architecture.jpg',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    }
};

const faqData = [
    {
        question: "Can existing 2D architectural drawings be converted into 3D?",
        answer: "Yes. Zlendo Realty's 2D to 3D workflow helps transform existing drawings and floor plans into 3D environments, making it easier to visualize spaces and communicate design concepts."
    },
    {
        question: "Can I visualize both interiors and exteriors?",
        answer: "Yes. Zlendo Realty supports visualization of interior spaces, exterior facades, materials, landscaping, and surrounding environments to help communicate the complete architectural vision."
    },
    {
        question: "Can Zlendo Realty reduce the need for multiple software tools and hardware infrastructure?",
        answer: "Yes. Zlendo Realty brings multiple AI-powered design and visualization capabilities—such as floor planning, 2D-to-3D conversion, interior and exterior visualization, realistic rendering, and virtual walkthroughs—into a unified platform. This can help architecture teams reduce reliance on multiple specialized tools and minimize the need for additional hardware infrastructure for visualization workflows."
    },
    {
        question: "How can Zlendo Realty improve ROI for architecture firms?",
        answer: "Zlendo Realty can help reduce repetitive visualization work, accelerate design presentations, and enable teams to create more design variations efficiently. This can help architecture firms save time, improve productivity, and support faster client decision-making."
    },
    {
        question: "How does Zlendo Realty help reduce visualization costs?",
        answer: "By streamlining tasks such as floor-plan visualization, 2D-to-3D conversion, rendering, interior and exterior visualization, and walkthrough creation, Zlendo Realty can reduce the amount of repetitive manual work involved in preparing presentation assets."
    },
    {
        question: "Can Zlendo Realty support architecture firms with large project portfolios?",
        answer: "Yes. The platform can support visualization workflows across different types of projects, including residential, commercial, interior, and larger development projects. Specific requirements can be discussed with the Zlendo Realty team."
    },
    {
        question: "Is Zlendo Realty suitable for small architecture studios as well as large firms?",
        answer: "Yes. Zlendo Realty can support different types of architecture and design organizations, from smaller studios to larger enterprise teams, depending on their visualization and workflow requirements."
    },
    {
        question: "How can I request a demo for my architecture firm?",
        answer: "You can use the Request a Demo or Request Architecture Solutions CTA to contact the Zlendo Realty team and discuss your firm's requirements, use cases, and potential ROI."
    }
];

export default function ArchitecturePage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://zlendorealty.com/industries/architecture",
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

            <ArchitectureClient />

            <section className="bg-white border-t border-slate-100">
                <FAQ data={{ title: "FAQs", faqs: faqData }} />
            </section>
        </main>
    );
}
