import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from './PlansClient';
import { getAllSubscriptionsService, Subscription } from '@/lib/services/subscriptionService';
import { getAllOffersService, Offer } from '@/lib/services/offerService';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';
import JsonLd from '@/components/common/JsonLd';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const path = isGlobal ? '/plans' : `/${country}/plans`;

    return createPageMetadata({
        title: 'Subscription Plans | Zlendo Realty',
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

export default async function PlansPage({ params }: PageProps) {
    const { country } = await params;
    const isIndia = country.toLowerCase() === 'in';



    return (
        <>
            <PlansClient />
        </>
    );
}
