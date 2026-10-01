import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

// The global /template-detail route re-exports the [country] page component but
// has no layout of its own, so it was inheriting the root layout's homepage
// canonical. Give it a self-referencing canonical (mirrors the /in variant).
export const metadata: Metadata = createPageMetadata({
    title: 'Zlendo Realty | Pick Templates and Customize Your Home Plan',
    description:
        "Explore Zlendo Realty's expertly designed home plan templates and customize every space. Start your design, your way.",
    path: '/template-detail',
    keywords: [
        'floor plan templates',
        'house templates',
        'kitchen templates',
        'living room templates',
        'bedroom templates',
        'bathroom templates',
        '1bhk house plan',
        '2bhk house design',
        'apartment design',
    ],
});

export default function TemplateDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
