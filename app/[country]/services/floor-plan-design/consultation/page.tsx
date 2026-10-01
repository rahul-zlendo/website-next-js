import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import FloorPlanConsultationClient from './FloorPlanConsultationClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/floor-plan-design/consultation' : '/in/services/floor-plan-design/consultation';

    let title = 'Book Floor Plan Consultation | Zlendo Realty';
  if (country === 'in') {
      if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
      else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
      else title += ' Online';
  }
  return createPageMetadata({
    title,
        description: 'Get customized 2D & 3D floor plans tailored to your plot, lifestyle, and family needs. Fill the form to get a personalized floor planning consultation.',
        path: cleanPath,
    });
}

export default function FloorPlanConsultationPage() {
    return <FloorPlanConsultationClient />;
}
