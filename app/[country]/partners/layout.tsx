
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/seo/metadata';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
                'become a partner program',
                'affiliate program for AI software',
                'zlendo realty partner program',
                'real estate software affiliate program',
                'AI software partnership program',
                'sales partner program',
                'solutions partner program',
                'consultant partner program',
                'academic partner program',
                'software reseller program',
            ],
            title: {
                absolute: 'Partnerships with Zlendo Realty Home-Tech Platform',
            },
            description: 'Success in partnerships starts with quality. Zlendo Realty is India’s most trusted home-tech platform, delivering reliable products and services for designers, architects, and interior experts. Become a Partner today!',
            openGraph: {
                title: 'Partnerships with Zlendo Realty Home-Tech Platform',
                description: 'Build successful partnerships with Zlendo Realty, India’s leading home-tech platform for designers, architects, and interior professionals. Become a Partner and grow with us!',
            },
            alternates: localeAlternates('/partners', 'in'),
        };
    }

    return {
        keywords: [
            'become a partner program',
            'affiliate program for AI software',
            'zlendo realty partner program',
            'real estate software affiliate program',
            'AI software partnership program',
            'sales partner program',
            'solutions partner program',
            'consultant partner program',
            'academic partner program',
            'software reseller program',
        ],
        title: 'Partners',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}

