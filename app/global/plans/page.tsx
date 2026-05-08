import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from '@/app/[country]/plans/PlansClient';

export const metadata = createPageMetadata({
    title: 'Subscription Plans | Zlendo Realty',
    description: 'Choose a Zlendo Realty plan that fits your needs. Enterprise-grade solutions for individuals and businesses.',
    path: '/plans',
});

export default async function GlobalPlansPage() {
    return <PlansClient isGlobal={true} />;
}
