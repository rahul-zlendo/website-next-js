import { createPageMetadata } from '@/lib/seo/metadata';
import PlansClient from './PlansClient';

export const metadata = createPageMetadata({
    title: 'Subscription Plans | Zlendo Realty',
    description: 'Choose a Zlendo Realty plan that fits your needs. Enterprise-grade solutions for individuals and businesses in India.',
    path: '/in/plans',
});

export default async function PlansPage() {
    return <PlansClient />;
}
