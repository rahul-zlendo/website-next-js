import { Metadata } from 'next';
import GlobalBusinessClient from './GlobalBusinessClient';

export const metadata: Metadata = {
  title: 'Zlendo Realty for Business — Enterprise Design Workflow Platform',
  description: 'Close more clients. Deliver faster. Scale your design business with Zlendo Realty — the enterprise AI platform for architects, interior designers, developers, and builders worldwide.',
};

export default function GlobalBusinessPage() {
  return <GlobalBusinessClient />;
}
