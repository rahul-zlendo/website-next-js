import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
    openGraph: {
        title: 'Privacy Policy',
        description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
        type: 'website',
    },
    keywords: [
        'privacy policy',
        'zlendo technologies',
        'products usage',
        'personal data protection',
        'zlendo products',
        'AI home design',
        'zlendo realty services',
        'platform',
        'zlendo website',
    ],
    alternates: {
        canonical: 'https://zlendorealty.com/in/privacy-policy',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/privacy-policy',
            'x-default': 'https://zlendorealty.com/in/privacy-policy',
        },
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

