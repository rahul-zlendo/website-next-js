import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: 'NDA for Customers | Zlendo Realty Confidentiality Agreement',
            description: 'Review the Non-Disclosure Agreement (NDA) for Zlendo Realty customers. Learn how we protect your confidential information and property designs.',
            alternates: {
                canonical: 'https://zlendorealty.com/in/nda-customers',
                languages: {
                    'en-IN': 'https://zlendorealty.com/in/nda-customers',
                    'x-default': 'https://zlendorealty.com/in/nda-customers',
                },
            },
        };
    }

    return {
        title: 'NDA for Customers | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
