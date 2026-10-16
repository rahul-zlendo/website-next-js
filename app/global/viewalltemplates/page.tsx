import { client } from '@/lib/sanity/client';
import { viewAllTemplatesPageQuery } from '@/lib/sanity/queries';
import ViewAllTemplatesClient from '@/app/[country]/viewalltemplates/ViewAllTemplatesClient';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/seo/metadata';

export const metadata: Metadata = {
    title: 'Modern Home Design Templates & Ideas | Zlendo Realty',
    description: 'Explore our library of professional 3D home design templates. Start your project with pre-built layouts for living rooms, kitchens, and more.',
    alternates: localeAlternates('/viewalltemplates'),
};

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
