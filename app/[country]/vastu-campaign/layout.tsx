import type { Metadata } from 'next';
import { indiaOnlyAlternates } from '@/lib/seo/metadata';

export const metadata: Metadata = {
    title: 'AI-Powered Vastu Analysis',
    description: 'Get an instant AI-powered Vastu compliance score for your home or office. Upload your floor plan and align your space with ancient wisdom.',
    keywords: [
        'AI vastu analysis',
        'online vastu checker',
        'vastu for home',
        'vastu for office',
        'floor plan vastu check',
        'vastu remedies',
    ],
    alternates: indiaOnlyAlternates('/vastu-campaign'),
};

export default function VastuCampaignLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
