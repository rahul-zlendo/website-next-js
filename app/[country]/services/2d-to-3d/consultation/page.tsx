import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import TwoDToThreeDConsultationClient from './TwoDToThreeDConsultationClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/2d-to-3d/consultation' : `/${country}/services/2d-to-3d/consultation`;

    return createPageMetadata({
        title: 'Request Free 2D to 3D Consultation | Zlendo Realty',
        description: 'Upload your 2D house or office floor plan and get realistic 3D visualizations, walkthroughs, and high-quality renders. Fill the form to get a free consultation.',
        path: cleanPath,
    });
}

export default function TwoDToThreeDConsultationPage() {
    return <TwoDToThreeDConsultationClient />;
}
