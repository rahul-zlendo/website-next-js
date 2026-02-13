import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty Terms of Service | Rules & User Agreement',
            },
            description: 'Read the Zlendo Realty Terms of Service to understand the rules, user responsibilities, and conditions governing the use of our products and website.',
            openGraph: {
                title: 'Zlendo Realty Terms of Service',
                description: 'Review the official Terms of Service for Zlendo Realty. Learn about user obligations, service conditions, and the policies that govern the use of our products and platform.',
            },
        };
    }

    return {
        title: 'Terms of Service | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
