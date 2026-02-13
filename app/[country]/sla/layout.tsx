import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;

    if (country === 'in') {
        return {
            title: {
                absolute: 'Zlendo Realty SLA | Service Level Agreement & Performance Standards',
            },
            description: 'Read the Zlendo Realty Service Level Agreement (SLA) outlining uptime targets, support response times, resolution objectives, maintenance obligations, service credits, and performance standards for our platform.',
            openGraph: {
                title: 'Zlendo Realty Service Level Agreement (SLA)',
                description: 'View the Zlendo Realty SLA, detailing service availability, support timelines, resolution objectives, maintenance responsibilities, and performance standards for our platform users.',
            },
        };
    }

    return {
        title: 'Service Level Agreement | Zlendo Realty',
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
