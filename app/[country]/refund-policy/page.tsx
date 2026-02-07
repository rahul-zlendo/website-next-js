'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, RefreshCw } from 'lucide-react';

export default function RefundPolicyPage() {
    const { getPath } = useCountry();

    const policy = {
        id: 'refund-policy',
        slug: 'refund-policy',
        title: 'Refund & Cancellation Policy',
        icon: RefreshCw,
        category: 'service' as const,
        description: 'No refund and no cancellation policy for zlendo realty',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'no-refund',
                title: '1. No Refund Policy',
                content: 'All payments made towards subscriptions or services on the Zlendo Realty platform are non-refundable. Once a subscription is purchased, the subscription fee paid shall not be refunded under any circumstances, whether in whole or in part.'
            },
            {
                id: 'cancellation',
                title: '2. Subscription Cancellation',
                content: [
                    'Users may cancel their subscription at any time through their account settings or other designated channels. Upon cancellation, access to the platform may continue until the end of the current billing period, as applicable. Cancellation only stops future renewals. It does not entitle the user to:',
                    '• Refund of any subscription amount already paid; or',
                    '• Prorated refunds, credits, or carry-forward of unused subscription time.'
                ]
            },
            {
                id: 'exceptions',
                title: '3. Exceptions and Special Circumstances',
                content: (
                    <div className="space-y-4 text-lg text-zlendo-grey-medium font-nunito">
                        <p>Refunds, service credits, or extensions may be considered in situations where:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Users are unable to effectively use Zlendo's platform due to significant technical disruptions attributable to Zlendo such as prolonged server downtime, critical system failures, repeated access issues, or major functionality breakdowns that materially impact the user's ability to avail the subscribed services.</li>
                            <li>
                                Zlendo will evaluate the severity, duration, and impact of the technical issue, including whether the issue was reported in a timely manner through designated support channels. Remedies may include:
                                <ul className="list-[lower-roman] pl-6 pt-2 space-y-1">
                                    <li>extending the subscription period,</li>
                                    <li>providing proportional service credits, or</li>
                                    <li>issuing a partial refund, solely at Zlendo's discretion.</li>
                                </ul>
                            </li>
                            <li>Issues arising from the user's own devices, internet connectivity, third-party integrations, or misuse of the platform will not qualify for refunds.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: 'acceptance',
                title: '4. Acceptance',
                content: 'By subscribing to or using Zlendo Realty\'s services, the user expressly acknowledges and agrees to this No Refund and Cancellation Policy, which shall be read together with and form an integral part of Zlendo\'s Terms of Use. In the event of any inconsistency, the provisions of the Terms of Use shall prevail and apply mutatis mutandis to this Policy.'
            },
            {
                id: 'contact',
                title: '5. Contact Information',
                content: (
                    <p className="text-lg text-zlendo-grey-medium font-nunito">
                        For refund or cancellation related queries, Users may contact{' '}
                        <a href="mailto:support@zlendorealty.com" className="text-zlendo-teal font-bold hover:underline">
                            support@zlendorealty.com
                        </a>
                    </p>
                )
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
                        <span className="text-gray-900 font-medium">Refund & Cancellation Policy</span>
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
