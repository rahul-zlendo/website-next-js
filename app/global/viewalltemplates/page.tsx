import { client } from '@/lib/sanity/client';
import { viewAllTemplatesPageQuery } from '@/lib/sanity/queries';
import ViewAllTemplatesClient from '@/app/[country]/viewalltemplates/ViewAllTemplatesClient';

export default async function ViewAllTemplatesPage() {
    // Fetch CMS data for the View All Templates page
    let cmsData = null;
    try {
        cmsData = await client.fetch(viewAllTemplatesPageQuery);
    } catch (error) {
        console.error("Error fetching View All Templates page data:", error);
    }

    return <ViewAllTemplatesClient cms={cmsData} />;
}
