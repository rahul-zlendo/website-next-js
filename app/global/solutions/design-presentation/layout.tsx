import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

// The page itself is a Client Component ('use client') and cannot export
// metadata, so the canonical/OG/Twitter tags live here in the segment layout.
// Without this, the page inherits the root layout's canonical (the homepage),
// which would stop Google from indexing it as a distinct URL.
export const metadata: Metadata = createPageMetadata({
    title: 'Interactive 3D Design Presentations for Clients | Zlendo Realty',
    description:
        'Win client approval faster with immersive, always-updated 3D design presentations. Share one link, record guided camera walkthroughs, and cut revision back-and-forth.',
    path: '/solutions/design-presentation',
});

export default function DesignPresentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
