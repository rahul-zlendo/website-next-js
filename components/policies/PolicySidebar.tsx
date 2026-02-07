'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { PolicyMetadata } from '@/lib/constants/policiesData';
import { POLICIES, POLICY_CATEGORIES } from '@/lib/constants/policiesData';
import { useCountry } from '@/lib/context/CountryContext';

interface PolicySidebarProps {
    activeSlug: string;
}

const PolicySidebar: React.FC<PolicySidebarProps> = ({ activeSlug }) => {
    const { getPath } = useCountry();

    // Group policies by category
    const groupedPolicies = POLICIES.reduce((acc, policy) => {
        if (!acc[policy.category]) {
            acc[policy.category] = [];
        }
        acc[policy.category].push(policy);
        return acc;
    }, {} as Record<string, PolicyMetadata[]>);

    return (
        <div className="bg-white rounded-2xl border border-zlendo-grey-medium/10 p-6 sticky top-24">
            <h3 className="text-lg font-black text-zlendo-grey-dark mb-6 uppercase tracking-wider">
                All Policies
            </h3>

            <div className="space-y-6">
                {Object.entries(groupedPolicies).map(([category, policies]) => (
                    <div key={category}>
                        <div className="text-xs font-black uppercase tracking-wider text-zlendo-grey-medium opacity-60 mb-3">
                            {POLICY_CATEGORIES[category as keyof typeof POLICY_CATEGORIES]?.label || category}
                        </div>
                        <div className="space-y-2">
                            {policies.map((policy) => {
                                const Icon = policy.icon;
                                const isActive = policy.slug === activeSlug;

                                return (
                                    <Link
                                        key={policy.id}
                                        href={getPath(`/${policy.slug}`)}
                                        className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${isActive
                                            ? 'bg-zlendo-teal text-white shadow-lg shadow-zlendo-teal/20'
                                            : 'hover:bg-zlendo-grey-light/50 text-zlendo-grey-medium hover:text-zlendo-teal'
                                            }`}
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive
                                            ? 'bg-white/20'
                                            : 'bg-zlendo-teal/10 group-hover:bg-zlendo-teal/20'
                                            }`}>
                                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-zlendo-teal'}`} />
                                        </div>
                                        <span className="text-sm font-bold flex-1">{policy.title}</span>
                                        {isActive && <ChevronRight className="w-4 h-4" />}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PolicySidebar;
