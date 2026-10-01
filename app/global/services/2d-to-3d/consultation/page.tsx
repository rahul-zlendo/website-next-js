import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import TwoDToThreeDConsultationClient from '@/app/[country]/services/2d-to-3d/consultation/TwoDToThreeDConsultationClient';

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Request Free 2D to 3D Consultation | Zlendo Realty',
        description: 'Upload your 2D house or office floor plan and get realistic 3D visualizations, walkthroughs, and high-quality renders. Fill the form to get a free consultation.',
        path: '/services/2d-to-3d/consultation',
    });
}

export default function TwoDToThreeDConsultationPage() {
    return <TwoDToThreeDConsultationClient />;
}
