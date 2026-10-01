import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import GlobalBusinessClient from './GlobalBusinessClient';

export const metadata: Metadata = createPageMetadata({
  title: 'Zlendo Realty for Business — Enterprise Design Workflow Platform',
  description: 'Close more clients. Deliver faster. Scale your design business with Zlendo Realty — the enterprise AI platform for architects, interior designers, developers, and builders worldwide.',
  path: '/business',
});

export default function GlobalBusinessPage() {
  return <GlobalBusinessClient />;
}
