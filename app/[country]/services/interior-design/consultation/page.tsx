import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import InteriorDesignConsultationClient from './InteriorDesignConsultationClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/interior-design/consultation' : `/${country}/services/interior-design/consultation`;

    return createPageMetadata({
        title: 'Book Interior Design Consultation | Zlendo Realty',
        description: 'Get a free consultation and personalized interior design solutions tailored to your space and budget. Fill out the form to get started.',
        path: cleanPath,
    });
}

export default function InteriorDesignConsultationPage() {
    return <InteriorDesignConsultationClient />;
}
