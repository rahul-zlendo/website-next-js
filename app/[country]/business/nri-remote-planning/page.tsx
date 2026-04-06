import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { nriRemotePlanningPageQuery } from '@/lib/sanity/queries';
import NRIRemotePlanningClient from './NRIRemotePlanningClient';

// ISR: re-fetch Sanity data every 60 seconds so CMS edits go live quickly
export const revalidate = 60;

const BASE_URL = 'https://zlendorealty.com';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    let cms: Record<string, any> | null = null;
    try {
        cms = await getClient(false).fetch(nriRemotePlanningPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'NRI & Remote Planning';
    const seoDesc = cms?.seoDescription ?? 'Manage international and remote projects with absolute clarity, ensuring your NRI clients feel present at every step of the journey.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/business/nri-remote-planning`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(nriRemotePlanningPageQuery).catch(() => null);

    return (
        <NRIRemotePlanningClient cms={cms} />
    );
}

