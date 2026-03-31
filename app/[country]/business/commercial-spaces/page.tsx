import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { commercialSpacesPageQuery } from '@/lib/sanity/queries';
import CommercialSpacesClient from './CommercialSpacesClient';

const BASE_URL = 'https://zlendorealty.com';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    let cms: Record<string, any> | null = null;
    try {
        cms = await getClient(false).fetch(commercialSpacesPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'Commercial Spaces | Zlendo Realty';
    const seoDesc = cms?.seoDescription ?? 'From startup offices to flagship retail stores, ensure every square foot is optimized for productivity and brand identity.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/business/commercial-spaces`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(commercialSpacesPageQuery).catch(() => null);

    return (
        <CommercialSpacesClient cms={cms} />
    );
}
