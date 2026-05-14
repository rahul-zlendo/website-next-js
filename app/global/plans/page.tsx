import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from '@/app/[country]/plans/PlansClient';
import { getAllSubscriptionsService, Subscription } from '@/lib/services/subscriptionService';
import { getAllOffersService, Offer } from '@/lib/services/offerService';
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

export default async function GlobalPlansPage() {
    const offers = [
        {
            "@type": "Offer",
            "name": "Explore",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://zlendorealty.com/plans",
            "description": "Essential AI design tools for individuals getting started."
        },
        {
            "@type": "Offer",
            "name": "Builder",
            "price": "12",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://zlendorealty.com/plans",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "12",
                "priceCurrency": "USD",
                "billingDuration": 1,
                "billingIncrement": 1,
                "unitCode": "MON"
            },
            "description": "Powerful design features for renovation and single-room projects."
        },
        {
            "@type": "Offer",
            "name": "Discover",
            "price": "0",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://zlendorealty.com/plans",
            "description": "Free discovery plan for individuals in Europe."
        },
        {
            "@type": "Offer",
            "name": "Design Pro",
            "price": "27",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://zlendorealty.com/plans",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "27",
                "priceCurrency": "EUR",
                "billingDuration": 1,
                "billingIncrement": 1,
                "unitCode": "MON"
            },
            "description": "Professional design tools for European creators."
        },
        {
            "@type": "Offer",
            "name": "Studio Elite",
            "price": "55",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://zlendorealty.com/plans",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "55",
                "priceCurrency": "EUR",
                "billingDuration": 1,
                "billingIncrement": 1,
                "unitCode": "MON"
            },
            "description": "The ultimate design package for professional studios in Europe."
        }

    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Zlendo Realty Subscription Plans",
        "image": "https://zlendorealty.com/assets/og-image.png",
        "description": "AI-powered home design and visualization software with 2D planning, 3D conversion, walkthroughs, renders, BOQ estimation, and Vastu optimization.",
        "brand": {
            "@type": "Brand",
            "name": "Zlendo Realty"
        },
        "url": "https://zlendorealty.com/plans",
        "offers": offers
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PlansClient isGlobal={true} />
        </>
    );
}
