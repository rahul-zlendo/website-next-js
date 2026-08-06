import { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const path = isGlobal ? '/privacy-policy' : '/in/privacy-policy';

    return createPageMetadata({
        title: 'Privacy Policy',
        description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
        path,
        ogTitle: 'Privacy Policy',
        ogDescription: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
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
        ]
    });
}

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

