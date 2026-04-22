import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Photorealistic 3D Renders & Visualization | Zlendo Realty',
    description: 'Generate stunning photorealistic architectural renders in under 10 seconds with Zlendo AI. No high-end hardware or complex software required.',
};

export default function RealisticRendersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
