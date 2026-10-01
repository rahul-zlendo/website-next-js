import { Metadata } from 'next';
import HomeownersClient from './HomeownersClient';
import FAQ from '@/components/global/sections/FAQ';

const ogTitle = "Design Your Dream Home with Zlendo Realty AI";
const ogDescription = "From floor planning to 3D visualization, interiors, Vastu, cost estimation, and virtual walkthroughs, Zlendo Realty helps homeowners design with confidence.";

export const metadata: Metadata = {
    title: "AI Home Design & Planning for Homeowners | Zlendo Realty",
    description: "Plan, design, and visualize your dream home with Zlendo Realty's AI-powered tools for floor plans, 3D design, interiors, Vastu, cost estimation, and virtual walkthroughs.",
    keywords: [
        "AI home design",
        "AI home design software",
        "AI house design",
        "AI house planner",
        "AI floor planner",
        "AI floor plan generator",
        "Home design software",
        "House design software",
        "Home floor planner",
        "House floor plan design",
        "2D to 3D floor plan",
        "3D home design",
        "3D house planner",
        "AI interior design",
        "AI exterior design",
        "Home renovation design software",
        "Vastu home design",
        "Home construction cost estimator",
        "Virtual home walkthrough",
        "Dream home design"
    ],
    openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: 'https://zlendorealty.com/solutions/ai-home-design-for-homeowners',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/assets/og-homeowners.jpg',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    }
};

const faqData = [
    {
        question: "What is Zlendo Realty for homeowners?",
        answer: "Zlendo Realty is an AI-powered home design platform that helps homeowners plan, design, visualize, and explore their homes using tools such as AI floor planning, 2D-to-3D conversion, interior and exterior design, cost estimation, Vastu optimization, and virtual walkthroughs."
    },
    {
        question: "How can Zlendo Realty help me design my home?",
        answer: "Zlendo Realty helps you move from an initial idea or floor plan to a more complete home design. You can plan layouts, visualize rooms in 3D, explore interior and exterior designs, estimate costs, and review your home through realistic visualizations."
    },
    {
        question: "Can I create a floor plan using Zlendo Realty?",
        answer: "Yes. Homeowners can use the AI Floor Planner to explore and create home layouts based on their space and design requirements."
    },
    {
        question: "Can I convert my 2D floor plan into 3D?",
        answer: "Yes. Zlendo Realty provides 2D-to-3D conversion, allowing homeowners to visualize their floor plans in a more realistic three-dimensional environment."
    },
    {
        question: "Can I design my home interiors with AI?",
        answer: "Yes. Zlendo Realty's AI-powered design capabilities can help homeowners explore interior design concepts for spaces such as living rooms, bedrooms, kitchens, dining areas, and home offices."
    },
    {
        question: "Can Zlendo Realty help me create a floor plan?",
        answer: "Yes. Our team can help you plan and optimize your home layout based on your plot size, space requirements, lifestyle, and design preferences."
    },
    {
        question: "Do you provide interior design services for homes?",
        answer: "Yes. We can help homeowners explore room-wise interior design concepts, including living rooms, bedrooms, kitchens, dining areas, home offices, and other spaces."
    },
    {
        question: "Can you help with home exterior and elevation design?",
        answer: "Yes. Our team can help you explore different exterior styles, elevations, materials, finishes, and architectural concepts for your home."
    },
    {
        question: "Can I get help with my home design requirements?",
        answer: "Absolutely. You can share your plot details, floor plan, requirements, preferred style, and design expectations with the Zlendo Realty team. We can help identify suitable design solutions for your project."
    },
    {
        question: "Does Zlendo Realty provide complete home design support?",
        answer: "Yes. Our team can support you across multiple stages of your home design journey—from initial planning and floor plans to 3D visualization, interiors, exteriors, Vastu, rendering, and virtual walkthroughs."
    },
    {
        question: "Can I request changes to my home design?",
        answer: "Yes. Design requirements can evolve during the planning process. You can discuss your feedback and requirements with the team to refine the proposed design."
    },
    {
        question: "How do I get started with Zlendo Realty home design services?",
        answer: "Simply share your home design requirements with the Zlendo Realty team. Tell us what you need, and we'll help you take the next step toward designing your home."
    }
];

export default function HomeownersPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://zlendorealty.com/solutions/ai-home-design-for-homeowners",
                    "name": metadata.title,
                    "description": metadata.description,
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

            <HomeownersClient />

            <section className="bg-white">
                <FAQ data={{ title: "Frequently Asked Questions", faqs: faqData }} />
            </section>
        </main>
    );
}
