import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'Zlendo Realty Cookie Policy - Learn how we use cookies and similar technologies on our website.',
    keywords: [
        'cookie policy',
        'privacy policy',
        'analytics cookies',
        'session cookies',
        'information security',
        'zlendo realty',
        'zlendo realty software',
    ],
    alternates: {
        canonical: 'https://zlendorealty.com/in/cookie-policy',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/cookie-policy',
            'x-default': 'https://zlendorealty.com/in/cookie-policy',
        },
    },
};

export default function CookiePolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

