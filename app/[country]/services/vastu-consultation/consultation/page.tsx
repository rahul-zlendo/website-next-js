import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VastuConsultationFormClient from './VastuConsultationFormClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = isGlobal ? '/services/vastu-consultation/consultation' : '/in/services/vastu-consultation/consultation';

    let title = 'Book Vastu Consultation | Expert Guidance | Zlendo Realty';
  if (country === 'in') {
      if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
      else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
      else title += ' Online';
  }
  return createPageMetadata({
    title,
        description: 'Get a free Vastu consultation for your home, apartment, villa, or office. Upload your floor plan and receive personalized Vastu recommendations from certified experts.',
        path: cleanPath,
    });
}

export default function VastuConsultationFormPage() {
    return <VastuConsultationFormClient />;
}
