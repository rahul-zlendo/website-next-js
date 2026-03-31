import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { contactPageQuery } from '@/lib/sanity/queries';
import ContactClient from './ContactClient';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(contactPageQuery).catch(() => null);

    return {
        title: cms?.seoTitle || 'Contact Zlendo Realty | Get Expert Guidance & Support',
        description: cms?.seoDescription || 'Get in touch with Zlendo Realty experts for product guidance, support, or partnership opportunities.',
        alternates: {
            canonical: `https://zlendorealty.com/${country}/contact`,
        },
    };
}

export default async function ContactPage({ params }: Props) {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(contactPageQuery).catch(() => null);

    const defaultHelpItems = [
        {
            title: "Demo Request",
            description: "Want to see Zlendo Realty in action? Book a personalized walkthrough.",
            icon: "Building2",
            url: "https://zlendorealty.com/in/business#demo-form"
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
            url: "https://zlendorealty.com/in/partners"
        }
    ];

    const resolvedHelpItems = cms?.helpItems?.length ? cms.helpItems : defaultHelpItems;

    return (
        <ContactClient
            cms={cms}
            resolvedHelpItems={resolvedHelpItems}
        />
    );
}
