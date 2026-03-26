import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { homeRemodelingPageQuery } from '@/lib/sanity/queries';
import HomeRemodelingClient from './HomeRemodelingClient';

const BASE_URL = 'https://zlendorealty.com';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    let cms: Record<string, any> | null = null;
    try {
        cms = await getClient(false).fetch(homeRemodelingPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'Home Remodeling Use Cases | Zlendo Realty';
    const seoDesc = cms?.seoDescription ?? 'Visualize renovations in photorealistic 3D before you start building. See how Zlendo Realty helps homeowners avoid costly changes and rework.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/use-case/home-remodeling`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(homeRemodelingPageQuery).catch(() => null);

    return (
        <HomeRemodelingClient cms={cms} />
    );
}
