
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            keywords: [
        'zlendo technologies nda',
        'non-disclosure agreement',
        'nda template',
        'legal agreement',
        'vendor partnerships',
        'Business partnerships',
        'collaboration agreements',
        'nda for vendor partnerships',
        'confidentiality agreement',
    ],
            title: {
                absolute: 'Zlendo Technologies Vendor Non-Disclosure Agreement (NDA)',
            },
            description: 'Access the official NDA for vendors partnering with Zlendo Technologies. Learn about confidentiality requirements and terms governing vendor collaborations.',
            openGraph: {
                title: 'Zlendo Technologies Vendor Non-Disclosure Agreement (NDA)',
                description: 'Access the official NDA for vendors partnering with Zlendo Technologies. Learn about confidentiality requirements and terms governing vendor collaborations.',
            },
        };
    }

    return {
            keywords: [
        'zlendo technologies nda',
        'non-disclosure agreement',
        'nda template',
        'legal agreement',
        'vendor partnerships',
        'Business partnerships',
        'collaboration agreements',
        'nda for vendor partnerships',
        'confidentiality agreement',
    ],
        title: 'Vendor NDA | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}
