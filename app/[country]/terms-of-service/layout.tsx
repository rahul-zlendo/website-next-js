
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';

    return createPageMetadata({
        title: isGlobal ? 'Terms of Service' : 'Zlendo Realty Terms of Service | Rules & User Agreement',
        description: 'Read the Zlendo Realty Terms of Service to understand the rules, user responsibilities, and conditions governing the use of our products and website.',
        path: isGlobal ? '/terms-of-service' : '/in/terms-of-service',
        ogTitle: 'Zlendo Realty Terms of Service',
        ogDescription: 'Review the official Terms of Service for Zlendo Realty. Learn about user obligations, service conditions, and the policies that govern the use of our products and platform.',
        keywords: [
            'zlendo platform',
            'zlendo terms of services',
            'sof',
            'zlendo realty contractor',
            'zlendo realty consultant',
            'software infrastructure',
            'zlendo realty subscriber',
            'zlendo realty property rights',
            'zlendo realty',
            'zlendo realty payments terms',
            'zlendo realty refund terms',
        ]
    });
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return <>{children}</>;
}

