import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Zlendo Realty',
    description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
    openGraph: {
        title: 'Privacy Policy | Zlendo Realty',
        description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Privacy Policy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy | Zlendo Realty',
        description: 'Learn how we collect, use, and protect your personal information.',
        images: ['/og-image.png'],
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
