import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from './PlansClient';

export const metadata = createPageMetadata({
    title: 'Subscription Plans | Zlendo Realty',
    description: 'Choose a Zlendo Realty plan that fits your needs. Enterprise-grade solutions for individuals and businesses in India.',
    path: '/in/plans',
});

export default async function PlansPage() {
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
        "url": "https://zlendorealty.com/in/plans",
        "offers": [
            {
                "@type": "Offer",
                "name": "Starter Plan",
                "price": "1250",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "https://zlendorealty.com/in/plans",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1250",
                    "priceCurrency": "INR",
                    "billingDuration": 1,
                    "billingIncrement": 1,
                    "unitCode": "MON"
                },
                "description": "Perfect for individuals and freelancers with essential AI design tools."
            },
            {
                "@type": "Offer",
                "name": "Pro Plan",
                "price": "2450",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "https://zlendorealty.com/in/plans",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "2450",
                    "priceCurrency": "INR",
                    "billingDuration": 1,
                    "billingIncrement": 1,
                    "unitCode": "MON"
                },
                "description": "Advanced plan for professionals and teams with walkthroughs and premium features."
            },
            {
                "@type": "Offer",
                "name": "Enterprise Plan",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "https://zlendorealty.com/in/plans",
                "description": "Custom pricing for enterprise and large-scale operations."
            }
        ]
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
