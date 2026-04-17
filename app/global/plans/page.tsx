import PlansClient from '@/app/[country]/plans/PlansClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Subscription Plans | Zlendo Realty',
    description: 'Choose a Zlendo Realty plan that fits your needs. Enterprise-grade solutions for individuals and businesses.',
    keywords: [
        'zlendo realty pricing',
        'zlendo realty plans',
        'zlendo realty software subscription',
        'zlendo realty free plan',
        'zlendo realty pro plan',
        'zlendo realty pro plus plan',
    ],
};

export default async function GlobalPlansPage() {
    return <PlansClient isGlobal={true} />;
}
