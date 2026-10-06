import { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: 'NDA for Customers Confidentiality Agreement',
            description: 'Review the Non-Disclosure Agreement (NDA) for Zlendo Realty customers. Learn how we protect your confidential information and property designs.',
            alternates: indiaOnlyAlternates('/nda-customers'),
        };
    }

    return {
        title: 'NDA for Customers',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

