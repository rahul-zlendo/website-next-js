import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VastuConsultationFormClient from './VastuConsultationFormClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/vastu-consultation/consultation' : `/${country}/services/vastu-consultation/consultation`;

    return createPageMetadata({
        title: 'Book Vastu Consultation | Expert Guidance | Zlendo Realty',
        description: 'Get a free Vastu consultation for your home, apartment, villa, or office. Upload your floor plan and receive personalized Vastu recommendations from certified experts.',
        path: cleanPath,
    });
}

export default function VastuConsultationFormPage() {
    return <VastuConsultationFormClient />;
}
