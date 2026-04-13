import React from 'react';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getGlobalPage(slug: string) {
  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  return await getClient().fetch(query, { slug });
}

const GlobalDynamicPage = async ({ params }: PageProps) => {
  const pageData = await getGlobalPage(params.slug);

  if (!pageData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <SectionRenderer sections={pageData.sections || []} />
    </main>
  );
};

export default GlobalDynamicPage;
