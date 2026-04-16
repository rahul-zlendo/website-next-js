import { client } from '@/lib/sanity/client';
import { tutorialsPageQuery } from '@/lib/sanity/queries';
import TutorialsClient from '@/app/[country]/tutorials/TutorialsClient';

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
