import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { vastuOptimizationPageQuery } from '@/lib/sanity/queries';
import VastuOptimizationClient from './VastuOptimizationClient';

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
        cms = await getClient(false).fetch(vastuOptimizationPageQuery);
    } catch { /* fallback to defaults */ }

    let seoTitle = cms?.seoTitle ?? 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty';
    
    // Clean up brand name duplication if present in the CMS
    if (seoTitle.includes('Zlendo Realty – Design Now | Zlendo Realty') || 
        seoTitle.includes('Zlendo Realty - Design Now | Zlendo Realty') ||
        seoTitle.includes('Design Now | Zlendo Realty')) {
        seoTitle = 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty';
    } else if (seoTitle.includes('Zlendo Realty') && (seoTitle.match(/Zlendo Realty/g) || []).length > 1) {
        // Strip duplicate trailing brand name
        seoTitle = seoTitle.replace(/\s*\|\s*Zlendo Realty\s*$/, '').trim();
    }

    const seoDesc = cms?.seoDescription ?? 'Ensure your home supports peace, health, and prosperity through data-driven Vastu optimization and visual clarity. Get expert Vastu layout tips.';

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

import JsonLd from '@/components/common/JsonLd';

export default async function Page({ params }: Props) {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms: Record<string, any> | null = await getClient(preview).fetch(vastuOptimizationPageQuery).catch(() => null);

    const serviceSchema = {
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": "Zlendo Realty Vastu Optimization",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Zlendo Realty",
            "url": "https://zlendorealty.com"
        },
        "description": "Align your modern home with ancient wisdom using our data-driven Vastu house plan design services. Get expert Vastu layout tips and corrective energy solutions.",
        "areaServed": "IN",
        "url": `https://zlendorealty.com/${country}/use-case/vastu-optimization`
    };

    return (
        <>
            <JsonLd schema={serviceSchema} />
            <VastuOptimizationClient cms={cms} />
        </>
    );
}

