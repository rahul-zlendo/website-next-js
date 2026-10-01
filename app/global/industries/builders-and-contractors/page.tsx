import { Metadata } from 'next';
import FAQ from '@/components/global/sections/FAQ';
import BuildersClient from './BuildersClient';

const ogTitle = "AI Visualization Solutions for Builders & Contractors";
const ogDescription = "Turn building plans into realistic 3D visuals, renders, and walkthroughs that improve client communication, approvals, presentations, sales, and marketing.";

export const metadata: Metadata = {
    title: "AI Visualization for Builders & Contractors | Zlendo Realty",
    description: "Help clients visualize projects before they're built with AI-powered 3D floor plans, realistic renders, interior and exterior visualization, and virtual walkthroughs.",
    keywords: [
        "AI visualization for builders",
        "AI visualization for contractors",
        "construction visualization for builders",
        "construction visualization software",
        "3D visualization for builders",
        "3D visualization for contractors",
        "builder visualization software",
        "contractor visualization software",
        "AI construction visualization",
        "3D floor plan for builders",
        "2D to 3D floor plan converter",
        "construction project visualization",
        "building project visualization",
        "house construction visualization",
        "home builder 3D visualization",
        "realistic renders for builders",
        "virtual walkthrough for builders",
        "pre-construction visualization",
        "client presentation visualization",
        "construction project marketing visuals"
    ],
    openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: 'https://zlendorealty.com/industries/builders-and-contractors',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/assets/og-builders.jpg',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    }
};

const faqData = [
    {
        question: "How can AI visualization help builders and contractors?",
        answer: "AI visualization helps builders and contractors turn floor plans and design concepts into 3D models, realistic renders, interior and exterior visualizations, and virtual walkthroughs. These visuals can improve client communication, design reviews, approvals, presentations, sales, and marketing."
    },
    {
        question: "Can I convert my existing 2D floor plans into 3D?",
        answer: "Yes. Zlendo Realty's 2D to 3D Converter is designed to transform 2D floor plans into 3D visualizations, helping clients understand layouts and spaces more easily."
    },
    {
        question: "Can I show clients what their house will look like before construction?",
        answer: "Yes. Builders can use 3D visualization, realistic renders, interior and exterior visualization, and virtual walkthroughs to present the proposed finished property before construction is complete."
    },
    {
        question: "Can I visualize different interior designs for clients?",
        answer: "Yes. Interior visualization can help present different styles, furniture arrangements, finishes, colors, and design concepts so clients can compare options visually."
    },
    {
        question: "Can I visualize exterior designs?",
        answer: "Yes. Zlendo Realty can help visualize exterior concepts including building appearance, architectural elements, materials, finishes, landscaping, and other exterior details."
    },
    {
        question: "How can visualization help reduce client misunderstandings?",
        answer: "Visualizations provide clients with a clearer representation of the proposed result than technical drawings alone. Instead of explaining a design only through plans and descriptions, builders can show clients what the space is intended to look like."
    },
    {
        question: "Can visualization help with design changes?",
        answer: "Yes. Proposed layouts, materials, finishes, interiors, and exterior concepts can be visualized before implementation, making it easier to discuss and evaluate changes."
    },
    {
        question: "Can builders use Zlendo Realty for project marketing?",
        answer: "Yes. Realistic renders and virtual walkthroughs can be used to promote projects before construction is complete. They can support websites, brochures, social media, presentations, sales materials, and pre-launch campaigns."
    },
    {
        question: "Is Zlendo Realty useful for custom home builders?",
        answer: "Yes. Custom builders can use visualization to show homeowners different floor plans, interior concepts, exterior designs, finishes, and the potential final appearance of their homes."
    },
    {
        question: "Can contractors use visualizations during client meetings?",
        answer: "Yes. 3D visualizations, realistic renders, and walkthroughs can be used during client meetings to explain project concepts, review designs, discuss changes, and support approvals."
    },
    {
        question: "Can visualization help my business win more projects?",
        answer: "Professional visual presentations can help potential clients understand your proposed project more clearly and differentiate your proposal from competitors relying primarily on 2D drawings."
    },
    {
        question: "When should builders use AI visualization?",
        answer: "AI visualization can be useful throughout the project lifecycle—from pre-construction planning and client presentations to design approvals, material selection, project marketing, and pre-sales."
    }
];

export default function BuildersContractorsPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://zlendorealty.com/industries/builders-and-contractors",
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

            <BuildersClient />

            <section className="bg-white">
                <FAQ data={{ title: "Frequently Asked Questions", faqs: faqData }} />
            </section>
        </main>
    );
}
