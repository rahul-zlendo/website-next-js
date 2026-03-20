
import { Metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { productId } = await params;

    if (productId === 'api-suite') {
        return {
            title: '2D-to-3D, Costing & Styling APIs | PropTech API Suite',
            description: 'Integrate Zlendo Realty PropTech API suite to power your platform with 2D-to-3D conversion, automated costing, and interior styling engines for real estate and architecture apps.',
            keywords: [
                'proptech platform',
                '2d to 3d converter',
                'costing software',
                'styling engines',
                'ai applications for real estate',
                '3d model software',
                'planning software',
                'AI design software',
                'vastu analysis',
                'vastu agent',
                'floor planner',
            ],
            openGraph: {
                title: 'Power Your PropTech Platform with Zlendo Realty API Suite ',
                description: 'Embed powerful 2D-to-3D, construction costing, and interior styling engines into your apps with Zlendo’s PropTech API suite for real estate and architecture platforms.',
            },
            alternates: {
                canonical: `https://zlendorealty.com/in/products/${productId}`,
                languages: {
                    'en-IN': `https://zlendorealty.com/in/products/${productId}`,
                    'x-default': `https://zlendorealty.com/in/products/${productId}`,
                },
            },
        };
    }

    return {
        alternates: {
            canonical: `https://zlendorealty.com/in/products/${productId}`,
            languages: {
                'en-IN': `https://zlendorealty.com/in/products/${productId}`,
                'x-default': `https://zlendorealty.com/in/products/${productId}`,
            },
        },
    };
}

export default function ProductIdLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
