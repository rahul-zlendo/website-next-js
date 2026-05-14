import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from './PlansClient';
import { getAllSubscriptionsService, Subscription } from '@/lib/services/subscriptionService';
import { getAllOffersService, Offer } from '@/lib/services/offerService';
import { API_BASE_URL, DEFAULT_API_TOKEN } from '@/lib/config/env';

export const metadata = createPageMetadata({
    title: 'Subscription Plans | Zlendo Realty',
    description: 'Choose a Zlendo Realty plan that fits your needs. Enterprise-grade solutions for individuals and businesses in India.',
    path: '/in/plans',
});

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

    const offers = [
        {
            "@type": "Offer",
            "name": "Free Plan",
            "price": "0",
            "priceCurrency": isIndia ? "INR" : "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://zlendorealty.com/${country}/plans`,
            "description": "Essential AI design tools for individuals getting started."
        },
        {
            "@type": "Offer",
            "name": "Basic Plan",
            "price": isIndia ? "499" : "15",
            "priceCurrency": isIndia ? "INR" : "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://zlendorealty.com/${country}/plans`,
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": isIndia ? "499" : "15",
                "priceCurrency": isIndia ? "INR" : "USD",
                "billingDuration": 1,
                "billingIncrement": 1,
                "unitCode": "MON"
            },
            "description": "Powerful design features for renovation and single-room projects."
        },
        {
            "@type": "Offer",
            "name": "Power User Plan",
            "price": isIndia ? "999" : "29",
            "priceCurrency": isIndia ? "INR" : "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://zlendorealty.com/${country}/plans`,
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": isIndia ? "999" : "29",
                "priceCurrency": isIndia ? "INR" : "USD",
                "billingDuration": 1,
                "billingIncrement": 1,
                "unitCode": "MON"
            },
            "description": "Advanced tools for high-volume designers and professionals."
        },
        {
            "@type": "Offer",
            "name": "Designer Plus Plan",
            "price": isIndia ? "1599" : "49",
            "priceCurrency": isIndia ? "INR" : "USD",
            "availability": "https://schema.org/InStock",
            "url": `https://zlendorealty.com/${country}/plans`,
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": isIndia ? "1599" : "49",
                "priceCurrency": isIndia ? "INR" : "USD",
                "billingDuration": 1,
                "billingIncrement": 1,
                "unitCode": "MON"
            },
            "description": "The ultimate package with premium renders and unlimited walkthroughs."
        },
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
        "url": `https://zlendorealty.com/${country}/plans`,
        "offers": offers
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PlansClient />
        </>
    );
}
