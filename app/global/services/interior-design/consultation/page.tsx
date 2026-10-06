import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import InteriorDesignConsultationClient from '@/app/[country]/services/interior-design/consultation/InteriorDesignConsultationClient';

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Book Interior Design Consultation | Zlendo Realty',
        description: 'Get a free consultation and personalized interior design solutions tailored to your space and budget. Fill out the form to get started.',
        path: '/services/interior-design/consultation',
    });
}

export default function InteriorDesignConsultationPage() {
    return <InteriorDesignConsultationClient />;
}
