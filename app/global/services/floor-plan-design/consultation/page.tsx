import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import FloorPlanConsultationClient from '@/app/[country]/services/floor-plan-design/consultation/FloorPlanConsultationClient';

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Book Floor Plan Consultation | Zlendo Realty',
        description: 'Get customized 2D & 3D floor plans tailored to your plot, lifestyle, and family needs. Fill the form to get a personalized floor planning consultation.',
        path: '/services/floor-plan-design/consultation',
    });
}

export default function FloorPlanConsultationPage() {
    return <FloorPlanConsultationClient />;
}
