import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import AboutClient from '@/app/[country]/about-us/AboutClient';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'About Us | Building the Future of Real Estate Design | Zlendo Realty',
        description: 'Learn about Zlendo Realty, an AI-powered real estate design platform by Zendoo Technologies. We simplify floor planning, 3D visualization, Vastu analysis, and cost estimation.',
        path: '/about-us',
        keywords: [
            'About Zlendo Realty',
            'Zendoo Technologies',
            'AI real estate design',
            'Architectural planning software',
            'Vastu analysis tools',
            'Construction cost estimation',
            'Real estate innovation',
        ],
        ogTitle: 'About Zlendo Realty - AI-Powered Design & Planning',
        ogDescription: 'Zlendo Realty makes architectural planning and visualization faster, smarter, and easier. Explore our mission, vision, and expert-backed journey.',
    });
}

export default async function AboutUsPage() {
    return <AboutClient />;
}
