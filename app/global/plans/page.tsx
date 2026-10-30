import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from '@/app/[country]/plans/PlansClient';
import { Subscription } from '@/lib/services/subscriptionService';
import { Offer } from '@/lib/services/offerService';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';

export const metadata = createPageMetadata({
    title: 'Subscription Plans | Zlendo Realty',
    description: 'Choose a Zlendo Realty plan that fits your needs. Enterprise-grade solutions for individuals and businesses.',
    path: '/plans',
});

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
 * Server-side fetch for subscription plans (global).
 */
async function fetchPlansServerSide(countryId?: number): Promise<Subscription[]> {
    try {
        const cid = countryId || 1;
        const url = `${API_BASE_URL}/SubscriptionMaster/GetSubscriptionPlansWithFeatures?CountryId=${cid}&PlanTypeId=1`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'zrealtyserviceapikey': DEFAULT_API_TOKEN,
            },
            next: { revalidate: 300 },
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

export default async function GlobalPlansPage() {
    // Fetch plans server-side so pricing cards are visible in page source for SEO
    const initialPlans = await fetchPlansServerSide();

    return (
        <>
            <PlansClient isGlobal={true} initialPlans={initialPlans} />
        </>
    );
}
