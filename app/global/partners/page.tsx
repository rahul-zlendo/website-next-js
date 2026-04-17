import GlobalPartnersClient from './GlobalPartnersClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Partner with Zlendo Realty | Global Affiliate & Agency Programs',
    description: 'Turn your professional network into a global revenue stream. Join the Zlendo Realty affiliate or partner program — earn commissions, access exclusive tools, and grow with PropTech.',
    keywords: [
        'zlendo realty partner program',
        'zlendo realty affiliate',
        'proptech affiliate program',
        'interior design partnership',
        'real estate tech partnership',
        'zlendo realty commissions',
        'design visualization partner',
    ],
    alternates: {
        canonical: 'https://zlendorealty.com/partners',
    },
};

export default async function GlobalPartnersPage() {
    return <GlobalPartnersClient />;
}
