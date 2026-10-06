import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { newHomeBuildingPageQuery } from '@/lib/sanity/queries';
import NewHomeBuildingClient from './NewHomeBuildingClient';

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
        cms = await getClient(false).fetch(newHomeBuildingPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'New Home Building Use Cases';
    const seoDesc = cms?.seoDescription ?? 'From foundation to final finishes, visualize every detail of your new home construction to ensure a perfect build.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/use-case/new-home-building`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(newHomeBuildingPageQuery).catch(() => null);

    return (
        <NewHomeBuildingClient cms={cms} />
    );
}

