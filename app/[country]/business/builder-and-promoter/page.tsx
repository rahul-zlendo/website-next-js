import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { builderAndPromoterPageQuery } from '@/lib/sanity/queries';
import BuilderAndPromoterClient from './BuilderAndPromoterClient';

const BASE_URL = 'https://zlendorealty.com';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    let cms: Record<string, any> | null = null;
    try {
        cms = await getClient(false).fetch(builderAndPromoterPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'Builder & Promoter Solutions | Zlendo Realty';
    const seoDesc = cms?.seoDescription ?? 'Empower your buyers to visualize their future home instantly, reducing sales friction and accelerating your commission cycle.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/business/builder-and-promoter`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(builderAndPromoterPageQuery).catch(() => null);

    return (
        <BuilderAndPromoterClient cms={cms} />
    );
}
