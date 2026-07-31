import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import InteriorDesignConsultationClient from './InteriorDesignConsultationClient';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === 'global';
    const cleanPath = '/services/interior-design/consultation';

    let title = 'Book Interior Design Consultation | Zlendo Realty';
  if (country === 'in') {
      if (title.endsWith(' | Zlendo Realty')) title = title.replace(' | Zlendo Realty', ' - Zlendo Portal');
      else if (title.endsWith(')')) title = title.replace(')', ' Guide)');
      else title += ' Online';
  }
  return createPageMetadata({
    title,
        description: 'Get a free consultation and personalized interior design solutions tailored to your space and budget. Fill out the form to get started.',
        path: cleanPath,
    });
}

export default function InteriorDesignConsultationPage() {
    return <InteriorDesignConsultationClient />;
}
