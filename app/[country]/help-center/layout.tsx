import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty Help Center | Support, FAQs & Help Documents',
            },
            description: 'Explore the Zlendo Realty Help Center for FAQs, support resources, and detailed help documents to guide you through our products and services.',
            openGraph: {
                title: 'Zlendo Realty Help Center & Help Documents',
                description: 'Access Zlendo Realty’s Help Center for FAQs, troubleshooting tips, and comprehensive help documents to get the support and guidance you need.',
            },
        };
    }

    return {
        title: 'Help Center | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
