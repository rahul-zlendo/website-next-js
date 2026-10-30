import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VirtualWalkthroughConsultationClient from '@/app/[country]/services/virtual-walkthrough/consultation/VirtualWalkthroughConsultationClient';

export async function generateMetadata(): Promise<Metadata> {
    return createPageMetadata({
        title: 'Request a Virtual Walkthrough Consultation | Zlendo Realty',
        description: 'Get a free consultation for your Virtual Walkthrough project. Share your floor plans, CAD drawings, or 3D models and receive expert guidance, project estimates, and customized visualization solutions.',
        path: '/services/virtual-walkthrough/consultation',
        ogTitle: 'Get a Free Virtual Walkthrough Consultation',
        ogDescription: 'Ready to transform your floor plan into an immersive virtual experience? Submit your project details and receive expert recommendations, pricing estimates, and a customized Virtual Walkthrough solution from Zlendo Realty.',
    });
}

export default function VirtualWalkthroughConsultationPage() {
    return <VirtualWalkthroughConsultationClient />;
}
