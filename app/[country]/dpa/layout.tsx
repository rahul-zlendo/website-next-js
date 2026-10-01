import { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: 'Data Processing Agreement (DPA)',
            description: 'Read the Data Processing Agreement (DPA) between Zlendo Technologies and its processors. Understand the obligations regarding personal data protection and processing.',
            alternates: indiaOnlyAlternates('/dpa'),
        };
    }

    return {
        title: 'DPA',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

