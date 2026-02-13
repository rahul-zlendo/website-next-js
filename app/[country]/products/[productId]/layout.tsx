import type { Metadata } from 'next';
import { productData } from '@/lib/constants/productData';

type Props = {
    params: Promise<{ productId: string; country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { productId } = await params;
    const product = productData[productId as keyof typeof productData];

    if (!product) {
        return {
            title: 'Zlendo Realty Products',
        };
    }

    const ogImage = product.heroImage || '/og-image.png';

    return {
        title: `${product.subtitle} | Zlendo Realty`,
        description: product.headerDesc,
        openGraph: {
            title: `${product.title} | ${product.tagline}`,
            description: product.headerDesc,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: product.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: product.title,
            description: product.headerDesc,
            images: [ogImage],
        },
    };
}

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
