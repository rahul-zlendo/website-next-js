import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty | Pick Templates and Customize Your Home Plan',
            },
            description: 'Explore Zlendo Realty’s expertly designed templates and customize every space in your home. Start Your design, your way.',
            openGraph: {
                title: 'Zlendo Realty – Customize Your Dream Home Plan',
                description: 'Discover Zlendo Realty’s home plan templates and personalize them to fit your lifestyle. Start designing your perfect space today with simple customization tools.',
            },
        };
    }

    return {
        title: 'Template Details | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
