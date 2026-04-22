import { client } from '@/lib/sanity/client';
import { tutorialsPageQuery } from '@/lib/sanity/queries';
import TutorialsClient from '@/app/[country]/tutorials/TutorialsClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Video Tutorials & Learning Center | Zlendo Realty',
    description: 'Master Zlendo Realty with our step-by-step video tutorials. Learn how to create floor plans, generate 3D renders, and style your home like a pro.',
};

export default async function TutorialsPage() {
    // Fetch CMS data for the Tutorials page
    let cmsData = null;
    try {
        cmsData = await client.fetch(tutorialsPageQuery);
    } catch (error) {
        console.error("Error fetching Tutorials page data:", error);
    }

    return <TutorialsClient cms={cmsData} />;
}
