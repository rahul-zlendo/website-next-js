'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, Scale } from 'lucide-react';

export default function GeneralTermsPage() {
    const { getPath } = useCountry();

    // General Terms content embedded directly in the page
    const policy = {
        id: 'general-terms',
        slug: 'general-terms',
        title: 'General Terms',
        icon: Scale,
        category: 'legal' as const,
        description: 'General terms and conditions for using our platform.',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'realty-order-form',
                title: 'Realty Order Form',
                content: 'This document constitutes the Realty Order Form and General Terms for Zlendo Realty services.'
            },
            {
                id: 'agreement-terms',
                title: '1. Agreement Terms',
                content: (
                    <span className="text-lg text-zlendo-grey-medium font-nunito">
                        User's use of the Zlendo Realty services ordered under this Order Form is subject to the terms of Zlendo's Terms of Services which is posted at{' '}
                        <Link href={getPath('/terms-of-service')} className="text-zlendo-teal font-bold hover:underline">
                            Terms of Service
                        </Link>.
                        The Terms of Services contain, among other terms, payment terms, warranty and liability disclaimers, data security and privacy provisions and the indemnification terms. In the event of a conflict between this Order Form and the Terms of Services, this Order Form will prevail to the extent of the conflict.
                    </span>
                )
            },
            {
                id: 'permitted-use',
                title: '2. Permitted Use',
                content: 'The Parties agree that the general purpose of the Zlendo Realty product is to provided AI-powered tools for real estate design, converting 2D plans to 3D, creating virtual realty walkthroughs (VR Studio), offering cost estimation (BoQ), and API integrations, and User\'s use of the product will be limited to that broad scope. Notwithstanding of the Terms of Services, Zlendo reserves the right to suspend and ultimately terminate User\'s Zlendo Realty Account upon reasonable suspicion that it is being used in a manner that is reasonably suggestive of fraud, violating any applicable laws, regulations, or third party rights; or that User\'s primary purpose is something other than services as described above.'
            },
            {
                id: 'service-level-agreement',
                title: '3. Service Level Agreement',
                content: (
                    <span className="text-lg text-zlendo-grey-medium font-nunito">
                        Zlendo Realty makes its services available to Users in accordance with the Zlendo Realty Service Level Agreement, which is available at{' '}
                        <Link href={getPath('/sla')} className="text-zlendo-teal font-bold hover:underline">
                            Service Level Agreement
                        </Link>.
                    </span>
                )
            },
            {
                id: 'case-management',
                title: '4. Case Management And Escalation',
                content: (
                    <span className="text-lg text-zlendo-grey-medium font-nunito">
                        All queries related to support should be mailed to{' '}
                        <a href="mailto:support@zlendorealty.com" className="text-zlendo-teal font-bold hover:underline">
                            support@zlendorealty.com
                        </a>
                    </span>
                ),
                // subsections: [
                //     {
                //         id: 'account-manager',
                //         title: 'a. Account Manager (Customer Success)',
                //         content: '[Name & Email]'
                //     },
                //     {
                //         id: 'deal-manager',
                //         title: 'b. Deal Manager (Sales)',
                //         content: '[Name & Email]'
                //     },
                //     {
                //         id: 'leadership',
                //         title: 'c. Leadership',
                //         content: '[Name & Email]'
                //     }
                // ]
            },
            {
                id: 'non-refundable',
                title: '5. Non-Refundable Services',
                content: 'Except as provided in the SLA or Terms of Services, Services purchased under this Order Form are non-cancelable and non-refundable.'
            },
            {
                id: 'acknowledgment',
                title: 'Acknowledgment',
                content: 'DO NOT SIGN THIS ORDER FORM BEFORE YOU HAVE READ THE TERMS OF SERVICES AND SERVICE LEVEL AGREEMENT IN ITS ENTIRETY. YOUR SIGNATURE BELOW INDICATES THAT YOU HAVE READ THE TERMS OF SERVICES AND SERVICE LEVEL AGREEMENT AND AGREE TO BE BOUND BY ITS PROVISIONS.'
            }
        ]
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
