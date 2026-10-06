import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import DesignPresentationClient from './DesignPresentationClient';
import JsonLd from '@/components/common/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Design Presentation Solutions | Zlendo Realty',
        description: 'Transform your design ideas into clear 3D visuals that move projects forward. Interactive 3D design proposals, 360° walkthroughs, and presentation videos.',
        path: '/global/solutions/design-presentation',
    });
}

export default function DesignPresentationPage() {
    const faqs = [
        {
            q: "How do clients view the presentation?",
            a: "Just share a Zlendo link — it opens in any browser. Everyone sees the latest version instantly. No downloads required."
        },
        {
            q: "Do my clients need special software?",
            a: "No. Clients just need to click your shared link to view designs in any device's browser, including computers, tablets and phones. VR headset viewing is also supported."
        },
        {
            q: "Can I use my own models and textures?",
            a: "Yes — you can upload your own 3D models or textures to keep your presentation authentic."
        },
        {
            q: "Does this replace traditional rendering video tools?",
            a: "Yes. Zlendo lets you generate 360° walkthroughs and short presentation videos interactively so anyone can understand the space easily without technical tools."
        }
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
            }
        }))
    };

    return (
        <>
            <JsonLd schema={faqSchema} />
            <DesignPresentationClient />
        </>
    );
}
