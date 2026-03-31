import { draftMode } from 'next/headers';
import { getClient } from '@/lib/sanity/client';
import { partnersPageQuery } from '@/lib/sanity/queries';
import PartnersClient from './PartnersClient';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(partnersPageQuery).catch(() => null);

    return {
        title: cms?.seoTitle || 'Partner with Zlendo Realty - Affiliate & Agent Programs',
        description: cms?.seoDescription || 'Turn your network into revenue. Join the Zlendo Realty partner or affiliate program and earn by sharing the future of PropTech.',
        alternates: {
            canonical: `https://zlendorealty.com/${country}/partners`,
        },
    };
}

export default async function PartnersPage({ params }: Props) {
    const { country } = await params;
    const { isEnabled: preview } = await draftMode();
    const cms = await getClient(preview).fetch(partnersPageQuery).catch(() => null);

    const defaultAffiliateSteps = [
        { title: 'Sign Up', desc: 'Free & quick application. Get your tracking link instantly.', icon: 'Wallet' },
        { title: 'Share Link', desc: 'WhatsApp, Social, Email, or Website. Use our high-res assets.', icon: 'Share2' },
        { title: 'Earn Commission', desc: 'Get paid for every qualified lead and successful conversion.', icon: 'Coins' }
    ];

    const defaultAffiliateBenefits = [
        { title: 'Competitive Commissions', desc: 'Industry-leading payouts on every sale.', icon: 'TrendingUp' },
        { title: 'Last-click Attribution', desc: 'Fair tracking that rewards your influence.', icon: 'Handshake' },
        { title: 'Real-time Dashboard', desc: 'Track clicks, leads, and earnings live.', icon: 'LineChart' },
        { title: 'Promotional Assets', desc: 'Ready-to-use banners, videos, and copy.', icon: 'FileText' },
        { title: 'Priority Feature Access', desc: 'See what we build before the world does.', icon: 'Zap' },
        { title: 'Monthly Payouts', desc: 'Fast, reliable payments directly to your account.', icon: 'Wallet' }
    ];

    const defaultPartnerFeatures = [
        { title: 'Reseller Ops', desc: 'Scale in Tier 1–3 cities with tiered margins.', icon: 'Building2' },
        { title: 'Exclusive Rights', desc: 'Optional regional exclusivity for top performers.', icon: 'Globe' },
        { title: 'Revenue Sharing', desc: 'Transparent, long-term profit sharing models.', icon: 'Wallet' },
        { title: 'Training & Cert', desc: 'Become a certified Zlendo proptech expert.', icon: 'Award' },
        { title: 'Co-Branded Marketing', desc: 'Leverage our brand for your local growth.', icon: 'Smartphone' },
        { title: 'Dedicated Support', desc: 'Priority technical & sales assistance 24/7.', icon: 'MessageSquare' }
    ];

    const defaultWhyCards = [
        {
            title: 'For Homeowners',
            icon: 'Home',
            desc: 'A trusted platform for smart design and planning that eliminates guesswork.',
            badge: 'Trust First'
        },
        {
            title: 'For Designers',
            icon: 'Layout',
            desc: 'Fast-growing user base across India and global markets seeking professional expertise.',
            badge: 'High Demand'
        },
        {
            title: 'For Professionals',
            icon: 'Building2',
            desc: 'A suite of tools buyers actually love—8K walkthroughs and hyper-realistic renders.',
            badge: 'Sell Experience'
        }
    ];

    const defaultGrowthPoints = [
        {
            title: 'Growth Partnerships',
            desc: 'We don\'t just want affiliates. We want growth partners who are with us for the long haul.',
            icon: 'Award'
        },
        {
            title: 'Support First Mindset',
            desc: 'Your success is our success. We provide the tools, training, and trust you need to lead.',
            icon: 'Briefcase'
        }
    ];

    const resolvedAffiliateSteps = cms?.affiliateSteps?.length ? cms.affiliateSteps : defaultAffiliateSteps;
    const resolvedAffiliateBenefits = cms?.affiliateBenefits?.length ? cms.affiliateBenefits : defaultAffiliateBenefits;
    const resolvedPartnerFeatures = cms?.partnerFeatures?.length ? cms.partnerFeatures : defaultPartnerFeatures;
    const resolvedWhyCards = cms?.whyCards?.length ? cms.whyCards : defaultWhyCards;
    const resolvedGrowthPoints = cms?.growthPoints?.length ? cms.growthPoints : defaultGrowthPoints;

    return (
        <PartnersClient 
            cms={cms} 
            resolvedAffiliateSteps={resolvedAffiliateSteps}
            resolvedAffiliateBenefits={resolvedAffiliateBenefits}
            resolvedPartnerFeatures={resolvedPartnerFeatures}
            resolvedWhyCards={resolvedWhyCards}
            resolvedGrowthPoints={resolvedGrowthPoints}
        />
    );
}
