import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty Community Guidelines | User Conduct & Platform Rules',
            },
            description: 'Read the Zlendo Realty Community Guidelines outlining the rules, standards, and expectations governing user conduct on our platform.',
            openGraph: {
                title: 'Zlendo Realty Community Guidelines',
                description: 'Read the Zlendo Realty Community Guidelines outlining the rules, standards, and expectations governing user conduct on our platform.',
            },
        };
    }

    return {
        title: 'Community Guidelines | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
