import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from '@/app/[country]/plans/PlansClient';
import { getAllSubscriptionsService, Subscription } from '@/lib/services/subscriptionService';
import { getAllOffersService, Offer } from '@/lib/services/offerService';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';
import JsonLd from '@/components/common/JsonLd';

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

export default async function GlobalPlansPage() {


    return (
        <>
            <PlansClient isGlobal={true} />
        </>
    );
}
