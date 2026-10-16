import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VastuConsultationFormClient from '@/app/[country]/services/vastu-consultation/consultation/VastuConsultationFormClient';

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Book Vastu Consultation | Expert Guidance | Zlendo Realty',
        description: 'Get a free Vastu consultation for your home, apartment, villa, or office. Upload your floor plan and receive personalized Vastu recommendations from certified experts.',
        path: '/services/vastu-consultation/consultation',
    });
}

export default function VastuConsultationFormPage() {
    return <VastuConsultationFormClient />;
}
