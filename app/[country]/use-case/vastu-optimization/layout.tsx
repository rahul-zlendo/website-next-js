import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vastu House Plan Design & Vastu Solutions | Zlendo Realty',
    description: 'Align your modern home with ancient wisdom using our Vastu house plan design services. Get expert Vastu layout tips and corrective energy solutions.',
    keywords: 'vastu house plan design, free vastu layout design guide, indian house plan design, free vastu living room layout tips, vastu optimizer online',
};

export default function VastuOptimizationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
