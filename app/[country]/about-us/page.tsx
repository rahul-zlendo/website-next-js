import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import AboutClient from './AboutClient';

export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/about-us' : `/${country}/about-us`;

    return createPageMetadata({
        title: isGlobal ? 'About Us | Building the Future of Real Estate Design | Zlendo Realty' : `About Us | Building the Future of Real Estate Design - Zlendo Portal`,
        description: 'Learn about Zlendo Realty, an AI-powered real estate design platform by Zlendo Technologies. We simplify floor planning, 3D visualization, Vastu analysis, and cost estimation.',
        path: cleanPath,
        keywords: [
            'About Zlendo Realty',
            'Zlendo Technologies',
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
