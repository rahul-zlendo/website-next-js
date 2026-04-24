'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, Scale } from 'lucide-react';
import { generalTermsSections } from '@/lib/constants/policies/general-terms';

export default function GeneralTermsPage() {
    const { getPath } = useCountry();

    const policy = {
        id: 'general-terms',
        slug: 'general-terms',
        title: 'General Terms',
        icon: Scale,
        category: 'legal' as const,
        description: 'General terms and conditions for using our platform.',
        lastUpdated: 'February 2026',
        sections: generalTermsSections
    };

    const Icon = policy.icon;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href={getPath('/')} className="hover:text-primary-600 transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">General Terms</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Content - 70% */}
                    <div className="lg:col-span-8">
                        <PolicyContent
                            title={policy.title}
                            description={policy.description}
                            lastUpdated={policy.lastUpdated}
                            sections={policy.sections}
                            icon={Icon}
                        />
                    </div>

                    {/* Sidebar - 30% */}
                    <div className="lg:col-span-4">
                        <PolicySidebar activeSlug={policy.slug} />
                    </div>
                </div>
            </div>
        </div>
    );
}
