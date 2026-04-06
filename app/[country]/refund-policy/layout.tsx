
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
        'refund',
        'cancellation policy',
        'zlendo realty',
        'payments zlendo realty cancellation',
        'subscription cancellation',
        "zlendo realty's services",
        'zlendo refund policy',
    ],
            title: {
                absolute: 'Zlendo Realty Refund & Cancellation Policy',
            },
            description: 'Review the Zlendo Realty Refund & Cancellation Policy. Please note that all purchases are final, and we do not offer refunds or allow cancellations.',
            openGraph: {
                title: 'Zlendo Realty Refund & Cancellation Policy',
                description: 'Understand Zlendo Realty’s Refund & Cancellation Policy. All purchases are final—no refunds or cancellations are permitted.',
            },
            alternates: {
                canonical: 'https://zlendorealty.com/in/refund-policy',
                languages: {
                    'en-IN': 'https://zlendorealty.com/in/refund-policy',
                    'x-default': 'https://zlendorealty.com/in/refund-policy',
                },
            },
        };
    }

    return {
            keywords: [
        'refund',
        'cancellation policy',
        'zlendo realty',
        'payments zlendo realty cancellation',
        'subscription cancellation',
        "zlendo realty's services",
        'zlendo refund policy',
    ],
        title: 'Refund Policy',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}

