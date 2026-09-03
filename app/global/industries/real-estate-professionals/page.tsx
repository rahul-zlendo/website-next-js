import { Metadata } from 'next';
import RealEstateProfessionalsClient from './RealEstateProfessionalsClient';
import FAQ from '@/components/global/sections/FAQ';

const ogTitle = "AI Property Visualization Tools for Real Estate Professionals | Zlendo Realty";
const ogDescription = "Transform property plans and empty spaces into immersive 3D visuals, virtual staging, realistic renders, and walkthroughs that help real estate professionals market properties better.";

export const metadata: Metadata = {
    title: "AI Property Visualization for Real Estate Professionals | Zlendo Realty",
    description: "Create engaging property listings with AI-powered 3D floor plans, virtual staging, realistic renders, and walkthroughs for real estate professionals.",
    keywords: [
        "AI property visualization for real estate professionals",
        "AI property visualization",
        "Real estate visualization software",
        "AI tools for real estate agents",
        "Property visualization software",
        "AI real estate marketing tools",
        "Real estate listing visualization",
        "AI virtual staging for real estate",
        "Virtual staging software",
        "3D floor plan for real estate",
        "2D to 3D floor plan converter",
        "AI floor plan visualization",
        "Real estate virtual walkthrough",
        "3D property visualization",
        "Realistic property renders",
        "AI property marketing",
        "Property listing marketing tools",
        "Real estate visual marketing",
        "AI visualization tools for real estate agents",
        "Property presentation software"
    ],
    openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: 'https://zlendorealty.com/industries/real-estate-professionals',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/assets/og-real-estate-professionals.jpg',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    }
};

const faqData = [
    {
        question: "How can Zlendo Realty help real estate professionals?",
        answer: "Zlendo Realty provides AI-powered visualization tools that help agents, brokers, and property professionals create 3D floor plans, virtually styled interiors, realistic property visuals, and virtual walkthroughs for property marketing."
    },
    {
        question: "Can I convert a 2D floor plan into a 3D property visualization?",
        answer: "Yes. Zlendo Realty's 2D to 3D Converter is designed to transform traditional 2D floor plans into 3D visual representations that can make property layouts easier for buyers and renters to understand."
    },
    {
        question: "Can I virtually stage an empty property?",
        answer: "Yes. The Smart Room Styler can help you create visually styled versions of empty rooms, allowing prospects to see potential furnishing and design possibilities."
    },
    {
        question: "Can these visuals be used for property listings?",
        answer: "Yes. Visual assets can be used as part of property listings, presentations, websites, property portals, marketing campaigns, and other approved marketing channels, subject to your specific usage rights and Zlendo Realty's terms."
    },
    {
        question: "Can real estate agents use Zlendo Realty for rental properties?",
        answer: "Yes. The tools can be useful for rental marketing, particularly when properties are vacant or unfurnished and prospects need help visualizing the space."
    },
    {
        question: "Can I create visuals for social media property marketing?",
        answer: "Yes. Property visualization assets can support social media marketing by giving agents additional visual content beyond traditional property photography."
    },
    {
        question: "Do I need professional 3D visualization skills?",
        answer: "Zlendo Realty is designed to simplify the visualization process, helping real estate professionals create visual property content without depending entirely on traditional 3D visualization workflows."
    },
    {
        question: "Can I use Zlendo Realty for multiple properties?",
        answer: "Yes. The platform can support property professionals who need visualization capabilities across multiple listings. The appropriate workflow or plan will depend on your property volume and requirements."
    },
    {
        question: "Can virtual walkthroughs help with remote buyers?",
        answer: "Virtual walkthroughs can provide remote prospects with another way to explore a property digitally, helping them understand the layout and overall experience before deciding whether to arrange an in-person visit."
    },
    {
        question: "Can Zlendo Realty replace professional property photography?",
        answer: "AI visualization and photography serve different purposes. Zlendo Realty can complement traditional property photography by providing additional ways to demonstrate layouts, furnishing possibilities, and property concepts."
    },
    {
        question: "How can AI visualization improve property presentations?",
        answer: "AI visualization can help turn static property information into more engaging visual experiences, making presentations easier to understand and potentially giving buyers more context about the property."
    },
    {
        question: "Is Zlendo Realty suitable for independent real estate agents?",
        answer: "Yes. The tools can be useful for independent agents who want to create more professional property marketing content without building a complex visualization workflow."
    }
];

export default function RealEstateProfessionalsPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "url": "https://zlendorealty.com/industries/real-estate-professionals",
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

            <RealEstateProfessionalsClient />

            <section className="bg-white">
                <FAQ data={{ title: "Frequently Asked Questions", faqs: faqData }} />
            </section>
        </main>
    );
}
