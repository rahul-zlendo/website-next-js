
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
                'floor plan templates',
                'house templates',
                'kitchen templates',
                'living room templates',
                'bedroom templates',
                'bathroom templates',
                '1bhk house plan',
                '2bhk house design',
                'apartment design',
            ],
            title: {
                absolute: 'Zlendo Realty | Pick Templates and Customize Your Home Plan',
            },
            description: 'Explore Zlendo Realty’s expertly designed templates and customize every space in your home. Start Your design, your way.',
            openGraph: {
                title: 'Zlendo Realty – Customize Your Dream Home Plan',
                description: 'Discover Zlendo Realty’s home plan templates and personalize them to fit your lifestyle. Start designing your perfect space today with simple customization tools.',
                url: 'https://zlendorealty.com/in/template-detail',
                siteName: 'Zlendo Realty',
                images: [
                    {
                        url: 'https://zlendorealty.com/og-image.jpg',
                        width: 1200,
                        height: 630,
                        alt: 'Zlendo Realty Template Customization',
                        type: 'image/png',
                    },
                ],
                locale: 'en_IN',
                type: 'website',
            },
            alternates: {
                canonical: 'https://zlendorealty.com/in/template-detail',
                languages: {
                    'en-IN': 'https://zlendorealty.com/in/template-detail',
                    'x-default': 'https://zlendorealty.com/in/template-detail',
                },
            },
        };
    }

    return {
        keywords: [
            'floor plan templates',
            'house templates',
            'kitchen templates',
            'living room templates',
            'bedroom templates',
            'bathroom templates',
            '1bhk house plan',
            '2bhk house design',
            'apartment design',
        ],
        title: 'Template Details | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}
