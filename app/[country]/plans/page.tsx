import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from './PlansClient';
import { Subscription } from '@/lib/services/subscriptionService';
import { Offer } from '@/lib/services/offerService';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const path = isGlobal ? '/plans' : `/${country}/plans`;

    return createPageMetadata({
        title: isGlobal ? 'Subscription Plans | Zlendo Realty' : `Subscription Plans - Zlendo Portal`,
        description: `Choose a Zlendo Realty plan that fits your needs. Enterprise-grade solutions for individuals and businesses${isGlobal ? '' : ' in India'}.`,
        path: path,
    });
}

interface PageProps {
    params: Promise<{ country: string }>;
}

const isOfferValid = (offer: Offer): boolean => {
    if (offer.isActive === false) return false;
    if (!offer.validFrom || !offer.validTo) return true;
    try {
        const now = new Date();
        const validFrom = new Date(offer.validFrom);
        const validTo = new Date(offer.validTo);
        return now >= validFrom && now <= validTo;
    } catch {
        return true;
    }
};

/**
 * Server-side fetch for subscription plans.
 * Uses direct fetch() instead of axiosInstance (which depends on js-cookie, a client-only lib).
 */
async function fetchPlansServerSide(countryId: number = 1): Promise<Subscription[]> {
    try {
        const url = `${API_BASE_URL}/SubscriptionMaster/GetSubscriptionPlansWithFeatures?CountryId=${countryId}&PlanTypeId=1`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'zrealtyserviceapikey': DEFAULT_API_TOKEN,
            },
            next: { revalidate: 300 }, // Cache for 5 minutes
        });

        if (!response.ok) return [];

        const data: Subscription[] = await response.json();
        return data
            .filter(p => p.planTypeId === 1 && p.isActive !== false)
            .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    } catch (error) {
        console.error('Server-side plans fetch failed:', error);
        return [];
    }
}

export default async function PlansPage({ params }: PageProps) {
    const { country } = await params;
    const isIndia = country.toLowerCase() === 'in';

    // Fetch plans server-side so pricing cards are visible in page source for SEO
    const countryId = isIndia ? 1 : undefined;
    const initialPlans = await fetchPlansServerSide(countryId);

    return (
        <>
            <PlansClient initialPlans={initialPlans} />
        </>
    );
}
