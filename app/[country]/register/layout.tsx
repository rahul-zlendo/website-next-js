import { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

export const metadata: Metadata = {
    title: 'Register & Partner with Zlendo Realty',
    description: 'Join the Zlendo Realty ecosystem. Register for partnerships, training, resources, or vastu analysis. Start your journey with our AI-powered proptech platform.',
    keywords: [
        'zlendo realty registration',
        'partner with zlendo',
        'proptech partnership',
        'vastu analysis request',
        'real estate training',
    ],
    alternates: indiaOnlyAlternates('/register'),
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
