import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import FloorPlanConsultationClient from './FloorPlanConsultationClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/floor-plan-design/consultation' : `/${country}/services/floor-plan-design/consultation`;

    return createPageMetadata({
        title: 'Book Floor Plan Consultation | Zlendo Realty',
        description: 'Get customized 2D & 3D floor plans tailored to your plot, lifestyle, and family needs. Fill the form to get a personalized floor planning consultation.',
        path: cleanPath,
    });
}

export default function FloorPlanConsultationPage() {
    return <FloorPlanConsultationClient />;
}
