import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata';
import VastuCampaignClient from './VastuCampaignClient';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
    const { country } = await params;
    const isGlobal = country === "global";
    const path = `/${country}/vastu-campaign`;

    return createPageMetadata({
        title: isGlobal ? 'AI-Powered Vastu Compliance | Zlendo Realty' : `AI-Powered Vastu Compliance - Zlendo Portal`,
        description: 'Align your home with ancient Vastu wisdom using intelligent automation. Upload your floor plan to get a detailed Vastu report and scorecard.',
        path: path,
    });
}

export default function VastuPage() {
    return <VastuCampaignClient />;
}
