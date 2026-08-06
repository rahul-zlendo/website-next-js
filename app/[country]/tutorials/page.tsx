import { createPageMetadata } from '@/lib/seo/metadata';
import { client } from '@/lib/sanity/client';
import { tutorialsPageQuery } from '@/lib/sanity/queries';
import TutorialsClient from './TutorialsClient';

import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isIndia = country === 'in';
    const baseTitle = 'Video Tutorials & Learning Center | Zlendo Realty';
    const baseDesc = 'Master Zlendo Realty with our step-by-step video tutorials. Learn how to create floor plans, generate 3D renders, and style your home like a pro.';

    return createPageMetadata({
        title: isIndia ? `${baseTitle} - India` : baseTitle,
        description: isIndia ? `${baseDesc} Perfect for users across India.` : baseDesc,
        path: `/${country}/tutorials`,
    });
}

export default async function TutorialsPage({ params }: Props) {
    const { country } = await params;
    // Fetch CMS data for the Tutorials page
    let cmsData = null;
    try {
        cmsData = await client.fetch(tutorialsPageQuery);
    } catch (error) {
        console.error("Error fetching Tutorials page data:", error);
    }

    return <TutorialsClient cms={cmsData} />;
}
