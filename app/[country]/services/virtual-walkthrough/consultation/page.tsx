import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VirtualWalkthroughConsultationClient from './VirtualWalkthroughConsultationClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = '/services/virtual-walkthrough/consultation';

    let title = 'Request a Virtual Walkthrough Consultation | Zlendo Realty';
  if (country === 'in') {
      if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
      else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
      else title += ' Online';
  }
  return createPageMetadata({
    title,
        description: 'Get a free consultation for your Virtual Walkthrough project. Share your floor plans, CAD drawings, or 3D models and receive expert guidance, project estimates, and customized visualization solutions.',
        path: cleanPath,
        ogTitle: 'Get a Free Virtual Walkthrough Consultation',
        ogDescription: 'Ready to transform your floor plan into an immersive virtual experience? Submit your project details and receive expert recommendations, pricing estimates, and a customized Virtual Walkthrough solution from Zlendo Realty.',
    });
}

export default function VirtualWalkthroughConsultationPage() {
    return <VirtualWalkthroughConsultationClient />;
}
