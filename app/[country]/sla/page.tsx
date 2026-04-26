'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, Clock } from 'lucide-react';
import { slaSections } from '@/lib/constants/policies/sla';

export default function ServiceLevelAgreementPage() {
    const params = useParams();
    const country = params.country as string;
    const policy = {
        id: 'sla',
        slug: 'sla',
        title: 'SLA - Realty',
        icon: Clock,
        category: 'service' as const,
        description: 'Service level agreement (SLA) for zlendo realty',
        lastUpdated: 'January 2026',
        sections: slaSections
    };

    const Icon = policy.icon;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href={`/${country}`} className="hover:text-primary-600 transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Service Level Agreement</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Content - 70% */}
                    <div className="lg:col-span-8 min-w-0">
                        <PolicyContent
                            title={policy.title}
                            description={policy.description}
                            lastUpdated={policy.lastUpdated}
                            sections={policy.sections}
                            icon={Icon}
                        />
                    </div>

                    {/* Sidebar - 30% */}
                    <div className="lg:col-span-4 min-w-0">
                        <PolicySidebar activeSlug={policy.slug} />
                    </div>
                </div>
            </div>
        </div>
    );
}
