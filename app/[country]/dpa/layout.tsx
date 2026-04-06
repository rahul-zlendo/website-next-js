import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: 'Data Processing Agreement (DPA)',
            description: 'Read the Data Processing Agreement (DPA) between Zlendo Technologies and its processors. Understand the obligations regarding personal data protection and processing.',
            alternates: {
                canonical: 'https://zlendorealty.com/in/dpa',
                languages: {
                    'en-IN': 'https://zlendorealty.com/in/dpa',
                    'x-default': 'https://zlendorealty.com/in/dpa',
                },
            },
        };
    }

    return {
        title: 'DPA',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

