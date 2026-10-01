import { Metadata } from 'next';
import OnDemandClient from './OnDemandClient';
import { client } from '@/lib/sanity/client';
import { onDemandPageQuery } from '@/lib/sanity/queries';

export async function generateMetadata(): Promise<Metadata> {
    const data = await client.fetch(onDemandPageQuery) || {};
    return {
        title: data.seoTitle || 'On-Demand Webinars & Recorded Events | Zlendo Realty',
        description: data.seoDescription || 'Access our archives of recorded webinars, masterclasses, and past events to level up your architectural workflows.',
    };
}

export default async function OnDemandEventsPage() {
    const cmsData = await client.fetch(onDemandPageQuery);
    return <OnDemandClient data={cmsData} />;
}
