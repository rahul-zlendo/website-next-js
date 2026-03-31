import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { vastuOptimizationPageQuery } from '@/lib/sanity/queries';
import VastuOptimizationClient from './VastuOptimizationClient';

const BASE_URL = 'https://zlendorealty.com';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    let cms: Record<string, any> | null = null;
    try {
        cms = await getClient(false).fetch(vastuOptimizationPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'Vastu Optimization Use Cases | Zlendo Realty';
    const seoDesc = cms?.seoDescription ?? 'Ensure your home supports peace, health, and prosperity through data-driven Vastu optimization and visual clarity.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/use-case/vastu-optimization`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(vastuOptimizationPageQuery).catch(() => null);

    return (
        <VastuOptimizationClient cms={cms} />
    );
}
