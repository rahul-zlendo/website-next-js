import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty Plans | Solutions for Every Individual',
            },
            description: 'Choose a Zlendo Realty plan that fits your needs. Whether renovating a single room or building a professional portfolio, we have the right plan for you.',
            openGraph: {
                title: 'Plans for Every Individual | Zlendo Realty',
                description: 'Whether you’re renovating a single room or creating a professional portfolio, Zlendo Realty offers flexible plans designed to suit every individual’s needs.',
            },
        };
    }

    return {
        title: 'Subscription Plans | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
