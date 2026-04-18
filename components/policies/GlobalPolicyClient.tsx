'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from './PolicyContent';
import PolicySidebar from './PolicySidebar';
import { getPolicyBySlug } from '@/lib/constants/policiesData';
import { notFound } from 'next/navigation';

interface GlobalPolicyClientProps {
    slug: string;
}

const GlobalPolicyClient: React.FC<GlobalPolicyClientProps> = ({ slug }) => {
    const { getPath } = useCountry();
    const policy = getPolicyBySlug(slug);

    if (!policy) {
        notFound();
    }

    const Icon = policy.icon;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-10">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container-custom px-6 lg:px-12 py-4 mx-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href={getPath('/')} className="hover:text-zlendo-teal transition-colors flex items-center gap-1 font-bold">
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-bold">{policy.title}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom px-6 lg:px-12 py-12 mx-auto">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main Content - 65% */}
                    <div className="lg:col-span-8 min-w-0">
                        <PolicyContent
                            title={policy.title}
                            description={policy.description}
                            lastUpdated={policy.lastUpdated}
                            sections={policy.sections}
                            icon={Icon}
                        />
                    </div>

                    {/* Sidebar - 35% */}
                    <div className="lg:col-span-4 min-w-0">
                        <PolicySidebar activeSlug={policy.slug} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalPolicyClient;
