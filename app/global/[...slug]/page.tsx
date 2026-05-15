import React from 'react';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';

interface GlobalPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: GlobalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join('/');
  const pageData = await getGlobalPage(slugPath);

  return createPageMetadata({
    title: pageData?.title ? `${pageData.title} | Zlendo Realty` : 'Zlendo Realty | Professional 3D Design',
    description: pageData?.description || 'Zlendo Realty - The professional workflow for design and architecture.',
    path: `/${slugPath}`,
  });
}

async function getGlobalPage(slug: string) {
  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  return await getClient().fetch(query, { slug });
}

const DynamicGlobalPage = async ({ params }: GlobalPageProps) => {
  const { slug } = await params;
  const slugPath = slug.join('/');
  
  const pageData = await getGlobalPage(slugPath);

  if (!pageData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <SectionRenderer sections={pageData.sections} />
    </main>
  );
};

export default DynamicGlobalPage;
