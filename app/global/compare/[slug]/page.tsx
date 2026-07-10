import { Metadata } from 'next';
import { getClient } from '@/lib/sanity/client';
import { comparePageQuery } from '@/lib/sanity/queries';
import { createPageMetadata } from '@/lib/seo/metadata';
import { draftMode } from 'next/headers';
import ComparePageClient from '@/components/pages/ComparePageClient';
import JsonLd from '@/components/common/JsonLd';
import { SIGNUP_URL } from '@/lib/config/env';
import { KNOWN_COMPARE_SLUGS, getCompareDefaults } from '@/lib/compare/compareDefaults';

export const revalidate = 60;

export async function generateStaticParams() {
  return KNOWN_COMPARE_SLUGS.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getClient(false).fetch(comparePageQuery, { slug }).catch(() => null);
  const defaults = getCompareDefaults(slug);
  const title = cms?.seoTitle ?? defaults.seoTitle;
  const description = cms?.seoDescription ?? defaults.seoDescription;
  return createPageMetadata({
    title,
    description,
    path: `/compare/${slug}`,
    keywords: cms?.seoKeywords ?? defaults.seoKeywords,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { isEnabled: preview } = await draftMode();
  const cms = await getClient(preview).fetch(comparePageQuery, { slug }).catch(() => null);
  const defaults = getCompareDefaults(slug);

  const faqs = (cms?.faqs?.length ? cms.faqs : defaults.faqs) as Array<{ question: string; answer: string }>;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd schema={faqSchema} />
      <ComparePageClient cms={cms} slug={slug} defaults={defaults} signupUrl={SIGNUP_URL} />
    </>
  );
}
