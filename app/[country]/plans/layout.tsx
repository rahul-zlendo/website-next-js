
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
        'zlendo realty pricing',
        'zlendo realty plans',
        'zlendo realty software subscription',
        'zlendo realty free plan',
        'zlendo realty pro plan',
        'zlendo realty pro plus plan',
        'individual subscription',
        'business subscription',
        'student subscription',
    ],
            title: {
                absolute: 'Zlendo Realty Plans | Solutions for Every Individual',
            },
            description: 'Choose a Zlendo Realty plan that fits your needs. Whether renovating a single room or building a professional portfolio, we have the right plan for you.',
            openGraph: {
                title: 'Plans for Every Individual',
                description: 'Whether you’re renovating a single room or creating a professional portfolio, Zlendo Realty offers flexible plans designed to suit every individual’s needs.',
            },
            alternates: localeAlternates('/plans', 'in'),
        };
    }

    return {
            keywords: [
        'zlendo realty pricing',
        'zlendo realty plans',
        'zlendo realty software subscription',
        'zlendo realty free plan',
        'zlendo realty pro plan',
        'zlendo realty pro plus plan',
        'individual subscription',
        'business subscription',
        'student subscription',
    ],
        title: 'Subscription Plans',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}

