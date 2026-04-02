import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { developerSolutionsPageQuery } from '@/lib/sanity/queries';
import DeveloperSolutionsClient from './DeveloperSolutionsClient';

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
        cms = await getClient(false).fetch(developerSolutionsPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'Developer Solutions | Zlendo Realty';
    const seoDesc = cms?.seoDescription ?? 'Transform complex design concepts into hyper-realistic visual experiences that eliminate confusion and accelerate project lifecycles.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/business/developer-solutions`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(developerSolutionsPageQuery).catch(() => null);

    return (
        <DeveloperSolutionsClient cms={cms} />
    );
}
