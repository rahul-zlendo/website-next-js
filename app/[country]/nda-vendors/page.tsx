'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, UserCheck } from 'lucide-react';

export default function NDAVendorsPage() {
    const { getPath } = useCountry();

    // NDA for Vendors content embedded directly in the page
    // TODO: Replace placeholder content with actual content from NON DISCLOSURE AGREEMENT_Vendors.docx document
    const policy = {
        id: 'nda-vendors',
        slug: 'nda-vendors',
        title: 'NDA for Vendors',
        icon: UserCheck,
        category: 'agreement' as const,
        description: 'Non-disclosure agreement for vendor partnerships with Zlendo Technologies.',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'introduction',
                title: 'Introduction',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>
                            This Non-Disclosure Agreement ("Agreement") is entered into between Zlendo Technologies ("Zlendo", "we", "us" or "our") and the vendor ("Vendor", "you" or "your") to protect confidential information shared during the course of our business relationship.
                        </p>
                        <p>
                            By entering into a business relationship with Zlendo, you acknowledge that you may have access to confidential and proprietary information belonging to Zlendo, its customers, and partners. This Agreement outlines the terms and conditions under which such information may be used and protected.
                        </p>
                    </div>
                )
            },
            {
                id: 'definitions',
                title: '1. DEFINITIONS',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>"<strong>Confidential Information</strong>" means any and all information disclosed by Zlendo to Vendor, whether orally, in writing, or in any other form, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.</li>
                        <li>"<strong>Vendor</strong>" means any individual or organization providing goods or services to Zlendo Technologies.</li>
                        <li>"<strong>Purpose</strong>" means the specific business relationship or transaction for which Confidential Information is disclosed.</li>
                    </ol>
                )
            },
            {
                id: 'confidential-info',
                title: '2. CONFIDENTIAL INFORMATION',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>Confidential Information includes, but is not limited to:</p>
                        <ol className="list-[lower-alpha] pl-6 space-y-2">
                            <li>Technical information, including designs, specifications, software, algorithms, and source code;</li>
                            <li>Business information, including customer lists, pricing, marketing plans, and financial data;</li>
                            <li>Product information, including features, functionality, and roadmaps;</li>
                            <li>Customer data and user information;</li>
                            <li>Trade secrets and proprietary information;</li>
                            <li>Any other information marked as "Confidential" or that should reasonably be considered confidential.</li>
                        </ol>
                    </div>
                )
            },
            {
                id: 'obligations',
                title: '3. OBLIGATIONS OF VENDOR',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>Vendor agrees to:</p>
                        <ol className="list-[lower-alpha] pl-6 space-y-2">
                            <li>Use Confidential Information solely for the Purpose and not for any other purpose;</li>
                            <li>Maintain the confidentiality of all Confidential Information using the same degree of care as used for its own confidential information, but in no event less than reasonable care;</li>
                            <li>Not disclose Confidential Information to any third party without prior written consent from Zlendo;</li>
                            <li>Limit access to Confidential Information to employees, contractors, or agents who have a legitimate need to know and who have been informed of the confidential nature of such information;</li>
                            <li>Not reverse engineer, disassemble, or decompile any prototypes, software, or other tangible objects that embody Confidential Information;</li>
                            <li>Return or destroy all Confidential Information upon request or upon termination of the business relationship.</li>
                        </ol>
                    </div>
                )
            },
            {
                id: 'exclusions',
                title: '4. EXCLUSIONS FROM CONFIDENTIAL INFORMATION',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>Confidential Information does not include information that:</p>
                        <ol className="list-[lower-alpha] pl-6 space-y-2">
                            <li>Is or becomes publicly available through no breach of this Agreement by Vendor;</li>
                            <li>Was rightfully known to Vendor prior to disclosure by Zlendo;</li>
                            <li>Is rightfully received by Vendor from a third party without breach of any confidentiality obligation;</li>
                            <li>Is independently developed by Vendor without use of or reference to Confidential Information;</li>
                            <li>Is required to be disclosed by law or court order, provided that Vendor gives Zlendo prompt notice of such requirement.</li>
                        </ol>
                    </div>
                )
            },
            {
                id: 'term',
                title: '5. TERM AND TERMINATION',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>This Agreement shall remain in effect for the duration of the business relationship between Zlendo and Vendor, and for a period of three (3) years thereafter.</li>
                        <li>The obligations of confidentiality and non-use shall survive termination of this Agreement.</li>
                        <li>Upon termination or at Zlendo's request, Vendor shall promptly return or destroy all Confidential Information and certify such destruction in writing.</li>
                    </ol>
                )
            },
            {
                id: 'remedies',
                title: '6. REMEDIES',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>
                            Vendor acknowledges that any breach of this Agreement may cause irreparable harm to Zlendo for which monetary damages may be an inadequate remedy. Accordingly, Zlendo shall be entitled to seek equitable relief, including injunction and specific performance, in addition to all other remedies available at law or in equity.
                        </p>
                    </div>
                )
            },
            {
                id: 'general',
                title: '7. GENERAL PROVISIONS',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li><strong>Governing Law:</strong> This Agreement shall be governed by and construed in accordance with the laws of India.</li>
                        <li><strong>Entire Agreement:</strong> This Agreement constitutes the entire agreement between the parties concerning the subject matter hereof and supersedes all prior agreements and understandings.</li>
                        <li><strong>Amendment:</strong> This Agreement may only be amended by a written document signed by both parties.</li>
                        <li><strong>Waiver:</strong> No waiver of any provision of this Agreement shall be deemed or shall constitute a waiver of any other provision.</li>
                        <li><strong>Severability:</strong> If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</li>
                    </ol>
                )
            },
            {
                id: 'contact',
                title: '8. CONTACT INFORMATION',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>
                            For questions regarding this Non-Disclosure Agreement or to report a potential breach, please contact:
                        </p>
                        <p className="font-bold">
                            Zlendo Technologies<br />
                            Email: legal@zlendorealty.com
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
                        <span className="text-gray-900 font-medium">NDA for Vendors</span>
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
