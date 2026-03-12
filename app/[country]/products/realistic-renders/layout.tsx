import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Photorealistic 3D Renders for Home Design | Zlendo Realty',
    description:
        'Generate magazine-quality photorealistic renders of your home design. Ray-traced lighting, shadows, and material accuracy for stunning presentations.',
    keywords: [
        '3D models',
        'architect design',
        'interior designers',
        'homeowners',
        'high-quality 3D rendering home design',
        'interiors & exteriors home design',
        'room styler',
        'home remodeling',
    ],
    openGraph: {
        title: 'Photorealistic Home Renders | Zlendo Realty',
        description: 'Generate stunning photorealistic renders for your home design projects. 4K quality with ray-traced lighting.',
        url: 'https://zlendorealty.com/in/products/realistic-renders',
        siteName: 'Zlendo Realty',
        images: [
            {
                url: 'https://zlendorealty.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Zlendo Realty - Realistic Renders',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Photorealistic Home Renders | Zlendo Realty',
        description: 'Magazine-quality 3D renders for home designs. Start your free trial.',
    },
    alternates: {
        canonical: 'https://zlendorealty.com/in/products/realistic-renders',
        languages: {
            'en-IN': 'https://zlendorealty.com/in/products/realistic-renders',
            'x-default': 'https://zlendorealty.com/in/products/realistic-renders',
        },
    },
};

export default function RealisticRendersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
