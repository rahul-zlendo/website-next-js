import React from 'react';
import type { PolicySection } from './types';

export const refundPolicySections: PolicySection[] = [
    {
        id: 'intro',
        title: 'Policy Overview and Acceptance',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p className="italic">Last Updated: April 2026</p>
                <p>By subscribing to or using Zlendo Realty’s services, you expressly acknowledge and agree to this Refund and Cancellation Policy, which forms an integral part of Zlendo’s Terms of Use.</p>
            </div>
        )
    },
    {
        id: 'general-refunds',
        title: 'Terms of Refund Eligibility',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Subject to the mandatory statutory rights set out in Applicable Laws, all payments made towards subscriptions or services on the Zlendo Realty platform are generally non-refundable once the digital service has been fully provided, or once performance has begun with the User’s prior express consent and acknowledgement that the right of withdrawal will be lost upon start of performance.</p>
            </div>
        )
    },
    {
        id: 'subscription-cancellation',
        title: 'SUBSCRIPTION CANCELLATION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Users may cancel their subscription at any time through their account settings or other designated channels. Upon cancellation, access to the platform may continue until the end of the current billing period, as applicable. Cancellation only stops future renewals. Subject to Applicable Laws with respect to mandatory cooling off periods, cancellation of a subscription does not, of itself, entitle the User to:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Refund of any subscription amount already paid except where required by Applicable Laws; or</li>
                    <li>Prorated refunds, credits, or carry-forward of unused subscription time except where required by Applicable Laws.</li>
                </ul>
            </div>
        )
    },
    {
        id: 'exceptions',
        title: 'EXCEPTIONS AND SPECIAL CIRCUMSTANCES',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Refunds, service credits, or extensions may be considered in situations where:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-4">
                    <li>
                        Users are unable to effectively use Zlendo’s platform due to significant technical disruptions attributable to Zlendo such as prolonged server downtime, critical system failures, repeated access issues, or major functionality breakdowns that materially impact the user’s ability to avail the subscribed services.
                        <p className="mt-2 font-bold text-zlendo-grey-dark">Evaluation & Remedies:</p>
                        <p className="mt-1">Zlendo will evaluate the severity, duration, and impact of the technical issue, including whether the issue was reported in a timely manner through designated support channels. Remedies may include:</p>
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Extending the subscription period,</li>
                            <li>Providing proportional service credits, or</li>
                            <li>Issuing a partial refund, solely at Zlendo’s discretion, subject to the mandatory statutory rights.</li>
                        </ul>
                    </li>
                    <li>Issues arising from the user’s own devices, internet connectivity, third-party integrations, or misuse of the platform will not qualify for refunds.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'refund-process',
        title: 'REFUND PROCESS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>To request a refund, Users should contact Zlendo at <strong className="text-zlendo-grey-dark">support@zlendorealty.com</strong> with the following information:</p>
                <ul className="list-disc pl-6 space-y-1 font-bold text-zlendo-grey-dark">
                    <li>User name and account email;</li>
                    <li>Subscription plan and date of purchase;</li>
                    <li>Reason for refund request.</li>
                </ul>
                <p>Refunds shall be processed within 30 business days of Zlendo’s decision.</p>
            </div>
        )
    },
    {
        id: 'acceptance',
        title: 'ACCEPTANCE',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>By subscribing to or using Zlendo Realty’s services, the user expressly acknowledges and agrees to this Refund and Cancellation Policy, which shall be read together with and form an integral part of Zlendo’s Terms of Use. In the event of any inconsistency, the provisions of the Terms of Use shall prevail and apply mutatis mutandis to this Policy. Nothing in this Policy shall be construed to exclude or limit any mandatory statutory rights available to consumers under Applicable Laws.</p>
            </div>
        )
    },
    {
        id: 'contact',
        title: 'CONTACT INFORMATION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>For refund or cancellation related queries, Users may contact <strong className="text-zlendo-grey-dark">support@zlendorealty.com</strong>.</p>
            </div>
        )
    }
];
