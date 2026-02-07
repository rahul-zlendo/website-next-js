'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, UserCheck } from 'lucide-react';

export default function NDACustomersPage() {
    const { getPath } = useCountry();

    // NDA for Customers content embedded directly in the page
    const policy = {
        id: 'nda-customers',
        slug: 'nda-customers',
        title: 'NDA for Customers',
        icon: UserCheck,
        category: 'agreement' as const,
        description: 'Non-disclosure agreement for customer relationships.',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'introduction',
                title: 'Introduction',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>
                            This Non-Disclosure Agreement ("Agreement") protects confidential information shared between Zlendo Technologies ("Zlendo", "we", "us" or "our") and our customers ("Customer", "you" or "your") in the course of providing our services.
                        </p>
                        <p>
                            By using our services and sharing information with us, you acknowledge and agree to the terms of this Agreement.
                        </p>
                    </div>
                )
            },
            {
                id: 'definitions',
                title: '1. Definitions',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li><strong>"Confidential Information"</strong> means any information disclosed by either party to the other party, either directly or indirectly, in writing, orally, or by inspection of tangible objects, including without limitation documents, business plans, source code, software, documentation, financial information, customer lists, floor plans, designs, property information, and technical data.</li>
                        <li><strong>"Purpose"</strong> means the provision and receipt of Zlendo's services, including but not limited to AI-powered home design, cost estimation, floor planning, and related real estate technology solutions.</li>
                    </ol>
                )
            },
            {
                id: 'obligations',
                title: '2. Confidentiality Obligations',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>Each party agrees to hold the other party's Confidential Information in strict confidence and not to disclose such Confidential Information to third parties without the prior written consent of the disclosing party.</li>
                        <li>The receiving party shall use the Confidential Information solely for the Purpose and shall not use it for any other purpose without the prior written consent of the disclosing party.</li>
                        <li>The receiving party shall protect the Confidential Information using the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care.</li>
                        <li>The receiving party may disclose Confidential Information only to its employees, contractors, and advisors who have a legitimate need to know and who have been informed of the confidential nature of such information.</li>
                    </ol>
                )
            },
            {
                id: 'exclusions',
                title: '3. Exclusions from Confidential Information',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>Confidential Information shall not include information that:</p>
                        <ol className="list-[lower-alpha] pl-6 space-y-2">
                            <li>Was publicly known and made generally available in the public domain prior to the time of disclosure by the disclosing party;</li>
                            <li>Becomes publicly known and made generally available after disclosure by the disclosing party through no action or inaction of the receiving party;</li>
                            <li>Is already in the possession of the receiving party at the time of disclosure as shown by the receiving party's files and records;</li>
                            <li>Is obtained by the receiving party from a third party without a breach of such third party's obligations of confidentiality;</li>
                            <li>Is independently developed by the receiving party without use of or reference to the disclosing party's Confidential Information.</li>
                        </ol>
                    </div>
                )
            },
            {
                id: 'customer-data',
                title: '4. Customer Data Protection',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li><strong>Floor Plans and Designs:</strong> All floor plans, designs, property information, and related data uploaded by customers to Zlendo's platform shall be treated as Confidential Information and protected in accordance with this Agreement and our Privacy Policy.</li>
                        <li><strong>Security Measures:</strong> Zlendo implements appropriate technical and organizational measures to protect customer data, including encryption, access controls, and secure storage systems.</li>
                        <li><strong>Limited Use:</strong> Zlendo may use customer-uploaded data for the purposes outlined in our Privacy Policy, including service provision, platform improvement, and AI model training, but shall maintain the confidentiality and security of such data.</li>
                        <li><strong>No Unauthorized Disclosure:</strong> Zlendo will not disclose, sell, or share customer-specific designs, floor plans, or property information with third parties except as necessary to provide services or as required by law.</li>
                    </ol>
                )
            },
            {
                id: 'intellectual-property',
                title: '5. Intellectual Property Rights',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>All intellectual property rights in the Confidential Information shall remain with the disclosing party. This Agreement does not grant any license or right to use any intellectual property of the disclosing party except as expressly provided for the Purpose.</li>
                        <li>Customer retains all rights, title, and interest in their original designs, floor plans, and property information. Zlendo's use of such information is limited to providing services and as permitted by our Privacy Policy and Terms of Service.</li>
                    </ol>
                )
            },
            {
                id: 'duration',
                title: '6. Duration and Termination',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>The obligations set forth in this Agreement shall survive for a period of three (3) years from the date of disclosure of the Confidential Information or until the Confidential Information no longer qualifies as confidential under Section 3, whichever occurs first.</li>
                        <li>Upon termination of the customer relationship or upon request by the disclosing party, the receiving party shall return or destroy all Confidential Information in its possession, custody, or control, except as required to be retained by applicable law.</li>
                    </ol>
                )
            },
            {
                id: 'legal-disclosure',
                title: '7. Compelled Disclosure',
                content: (
                    <p className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        If the receiving party is required by law, court order, or government regulation to disclose any Confidential Information, it shall, to the extent permitted by law, provide the disclosing party with prompt written notice of such requirement so that the disclosing party may seek a protective order or other appropriate remedy. The receiving party shall cooperate with the disclosing party's efforts to obtain such protection.
                    </p>
                )
            },
            {
                id: 'remedies',
                title: '8. Remedies',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>Both parties acknowledge that monetary damages may not be a sufficient remedy for unauthorized disclosure of Confidential Information and that the disclosing party shall be entitled to seek equitable relief, including injunction and specific performance, in addition to all other remedies available at law or in equity.</li>
                        <li>The prevailing party in any action to enforce this Agreement shall be entitled to recover its reasonable attorneys' fees and costs.</li>
                    </ol>
                )
            },
            {
                id: 'general',
                title: '9. General Provisions',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li><strong>Governing Law:</strong> This Agreement shall be governed by and construed in accordance with the laws of India, without regard to its conflicts of law principles.</li>
                        <li><strong>Entire Agreement:</strong> This Agreement, together with our Privacy Policy and Terms of Service, constitutes the entire agreement between the parties concerning the subject matter hereof and supersedes all prior or contemporaneous agreements, whether written or oral.</li>
                        <li><strong>Amendments:</strong> This Agreement may be amended only by a written instrument signed by both parties.</li>
                        <li><strong>Waiver:</strong> No waiver of any provision of this Agreement shall be deemed or shall constitute a waiver of any other provision, nor shall any waiver constitute a continuing waiver.</li>
                        <li><strong>Severability:</strong> If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</li>
                    </ol>
                )
            },
            {
                id: 'contact',
                title: '10. Contact Information',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>
                            For questions or concerns regarding this Non-Disclosure Agreement, please contact:
                        </p>
                        <p>
                            <strong>Data Protection Officer</strong><br />
                            Email: dpo@zlendorealty.com
                        </p>
                        <p className="font-bold text-lg text-zlendo-grey-medium">
                            Last Updated: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>
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
                        <span className="text-gray-900 font-medium">NDA for Customers</span>
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
