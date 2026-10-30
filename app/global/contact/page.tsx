import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { contactPageQuery } from '@/lib/sanity/queries';
import ContactClient from '@/app/[country]/contact/ContactClient';
import { Metadata } from 'next';
import { localeAlternates } from '@/lib/seo/metadata';

// ISR: re-fetch Sanity data every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(contactPageQuery).catch(() => null);

    return {
        title: cms?.seoTitle || 'Contact Zlendo Realty | Get Expert Guidance & Support',
        description: cms?.seoDescription || 'Get in touch with Zlendo Realty experts for product guidance, support, or partnership opportunities.',
        alternates: localeAlternates('/contact'),
    };
}

export default async function GlobalContactPage() {
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(contactPageQuery).catch(() => null);

    const defaultHelpItems = [
        {
            title: "Demo Request",
            description: "Want to see Zlendo Realty in action? Book a personalized walkthrough.",
            icon: "Building2",
            url: "/business#demo-form"
        },
        {
            title: "Support Docs",
            description: "Browse our comprehensive guides and technical documentation.",
            icon: "MessageSquare",
            url: "https://helpcenter.zlendorealty.com/"
        },
        {
            title: "Partnership",
            description: "Learn about our affiliate and builder referral programs.",
            icon: "ArrowRight",
            url: "/partners"
        }
    ];

    const resolvedHelpItems = defaultHelpItems;

    return (
        <ContactClient
            cms={cms}
            resolvedHelpItems={resolvedHelpItems}
        />
    );
}
