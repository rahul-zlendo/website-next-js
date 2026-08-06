import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { contactPageQuery } from '@/lib/sanity/queries';
import ContactClient from './ContactClient';
import { Metadata } from 'next';

// ISR: re-fetch Sanity data every 60 seconds so CMS edits go live quickly
export const revalidate = 60;

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(contactPageQuery).catch(() => null);

    const baseTitle = cms?.seoTitle || 'Contact Zlendo Realty | Get Expert Guidance & Support';
    const isIndia = country === 'in';
    const finalTitle = isIndia ? `${baseTitle} - India` : baseTitle;

    const baseDesc = cms?.seoDescription || 'Get in touch with Zlendo Realty experts for product guidance, support, or partnership opportunities.';
    const finalDesc = isIndia ? `${baseDesc} Serving users across India.` : baseDesc;

    return {
        title: finalTitle,
        description: finalDesc,
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

    const resolvedHelpItems = cms?.helpItems?.length ? cms.helpItems : defaultHelpItems;

    return (
        <ContactClient
            cms={cms}
            resolvedHelpItems={resolvedHelpItems}
        />
    );
}
