import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { interiorDesignPageQuery } from '@/lib/sanity/queries';
import InteriorDesignClient from './InteriorDesignClient';

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
        cms = await getClient(false).fetch(interiorDesignPageQuery);
    } catch { /* fallback to defaults */ }

    const seoTitle = cms?.seoTitle ?? 'Interior Design Use Cases | Zlendo Realty';
    const seoDesc = cms?.seoDescription ?? 'From first-time homebuyers to remote professionals, see how we transform spatial uncertainty into design confidence.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/use-case/interior-design`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function Page({ params }: Props) {
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(interiorDesignPageQuery).catch(() => null);

    return (
        <InteriorDesignClient cms={cms} />
    );
}
