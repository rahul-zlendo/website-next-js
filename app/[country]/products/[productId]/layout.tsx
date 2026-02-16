
import { Metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { productId } = await params;

    if (productId === 'api-suite') {
        return {
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
        };
    }

    return {};
}

export default function ProductIdLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
