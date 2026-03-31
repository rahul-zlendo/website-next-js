import { client } from '@/lib/sanity/client';
import { businessPageQuery } from '@/lib/sanity/queries';
import BusinessClient from './BusinessClient';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    country: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const cms = await client.fetch(businessPageQuery);
  return {
    title: cms?.seoTitle || 'Zlendo Realty for Business - Enterprise Solutions',
    description: cms?.seoDescription || "India's Leading All-in-One Cloud Platform for Designers, Architects & Interior Experts.",
  };
}

export default async function EnterprisePage({ params }: Props) {
  const { country } = await params;
  
  // Fetch everything from Sanity
  // We use the first one found or a singleton pattern
  const cms = await client.fetch(businessPageQuery);

  return (
    <BusinessClient cms={cms} country={country} />
  );
}
