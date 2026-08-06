import { Metadata } from 'next';

import { createPageMetadata } from '@/lib/seo/metadata';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const path = isGlobal ? '/cookie-policy' : '/in/cookie-policy';

    return createPageMetadata({
        title: 'Cookie Policy',
        description: 'Zlendo Realty Cookie Policy - Learn how we use cookies and similar technologies on our website.',
        path,
        keywords: [
            'cookie policy',
            'privacy policy',
            'analytics cookies',
            'session cookies',
            'information security',
            'zlendo realty',
            'zlendo realty software',
        ]
    });
}

export default function CookiePolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

