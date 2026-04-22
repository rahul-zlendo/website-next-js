import React from 'react';
import { Metadata } from 'next';
import { getClient } from '@/lib/sanity/client';
import SectionRenderer from '@/components/global/SectionRenderer';
import { notFound } from 'next/navigation';

import { getPolicyBySlug } from '@/lib/constants/policiesData';
import GlobalPolicyClient from '@/components/policies/GlobalPolicyClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);

  if (policy) {
    return {
      title: `${policy.title} | Zlendo Realty`,
      description: `Official ${policy.title} for Zlendo Realty. Read our legal terms and conditions.`,
    };
  }

  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  const pageData = await getClient().fetch(query, { slug });

  return {
    title: pageData?.title ? `${pageData.title} | Zlendo Realty` : 'Zlendo Realty | Professional 3D Design',
    description: pageData?.description || 'Zlendo Realty - The professional workflow for design and architecture.',
  };
}

async function getGlobalPage(slug: string) {
  const query = `*[_type == "globalPage" && slug.current == $slug][0]`;
  return await getClient().fetch(query, { slug });
}

const GlobalDynamicPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  // Check if it's a policy page first
  const policy = getPolicyBySlug(slug);
  if (policy) {
    return <GlobalPolicyClient slug={slug} />;
  }

  const pageData = await getGlobalPage(slug);

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
