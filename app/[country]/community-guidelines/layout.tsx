
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
        'zlendo realty',
        'zlendorealty',
        'zlendorealty software',
        'zlendorealty tools',
        'zlendo realty applications',
        'community guidelines zlendo realty',
        'zlendoRealty user guidelines',
        'lawful ai software',
        'ethical AI applications',
        'zlendorealty rules',
    ],
            title: {
                absolute: 'Zlendo Realty Community Guidelines | User Conduct & Platform Rules',
            },
            description: 'Read the Zlendo Realty Community Guidelines outlining the rules, standards, and expectations governing user conduct on our platform.',
            openGraph: {
                title: 'Zlendo Realty Community Guidelines',
                description: 'Read the Zlendo Realty Community Guidelines outlining the rules, standards, and expectations governing user conduct on our platform.',
            },
            alternates: {
                canonical: 'https://zlendorealty.com/in/community-guidelines',
                languages: {
                    'en-IN': 'https://zlendorealty.com/in/community-guidelines',
                    'x-default': 'https://zlendorealty.com/in/community-guidelines',
                },
            },
        };
    }

    return {
            keywords: [
        'zlendo realty',
        'zlendorealty',
        'zlendorealty software',
        'zlendorealty tools',
        'zlendo realty applications',
        'community guidelines zlendo realty',
        'zlendoRealty user guidelines',
        'lawful ai software',
        'ethical AI applications',
        'zlendorealty rules',
    ],
        title: 'Community Guidelines',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}

