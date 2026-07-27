import { Metadata } from 'next';
import UseCasesClient from './UseCasesClient';

const BASE_URL = 'https://zlendorealty.com';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    const seoTitle = 'Industry Solutions for Indian Construction | Zlendo Realty';
    const seoDesc = 'Explore how real architects, contractors, and individual builders use Zlendo Realty to eliminate rework, ensure Vastu compliance, and create 3D home designs instantly.';

    return {
        title: seoTitle,
        description: seoDesc,
        openGraph: {
            title: seoTitle,
            description: seoDesc,
            url: `${BASE_URL}/${country}/use-cases`,
            siteName: 'Zlendo Realty',
            locale: 'en_IN',
            type: 'website',
        },
    };
}

export default async function UseCasesPage() {
    return <UseCasesClient />;
}
