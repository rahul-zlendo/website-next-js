import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Zlendo Realty',
    description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
    openGraph: {
        title: 'Privacy Policy | Zlendo Realty',
        description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
        type: 'website',
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
