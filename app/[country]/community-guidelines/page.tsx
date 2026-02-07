'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, ShieldAlert } from 'lucide-react';

const CommunityGuidelinesPage = () => {
    const params = useParams();
    const country = params.country as string;

    const policy = {
        id: 'community-guidelines',
        slug: 'community-guidelines',
        title: 'Community Guidelines',
        icon: ShieldAlert,
        category: 'legal' as const,
        description: 'Rules and standards governing the conduct of all users on the Zlendo Realty platform.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'purpose',
                title: '1. Purpose and Scope',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>
                            These Community Guidelines ("Guidelines") govern the conduct of all users ("Users") who access or use the ZlendoRealty platform, including its website, applications, tools, and services (collectively, the "Platform").
                        </p>
                        <p>
                            ZlendoRealty reserves the right to regulate content and behavior to ensure a secure, professional, and lawful environment for all Users.
                        </p>
                        <p>
                            These Guidelines apply to all forms of content, communication, and activity conducted through the Platform.
                        </p>
                    </div>
                )
            },
            {
                id: 'responsibilities',
                title: '2. User Responsibilities',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>By using the Platform, Users agree to:</p>
                        <ol className="list-[lower-alpha] pl-6 space-y-2">
                            <li>Act lawfully and ethically at all times</li>
                            <li>Respect the rights, dignity, and safety of others</li>
                            <li>Provide accurate and non-misleading information</li>
                            <li>Use the Platform only for its intended design, visualization, and real estate–related purposes</li>
                        </ol>
                    </div>
                )
            },
            {
                id: 'prohibited',
                title: '3. Prohibited Conduct and Content',
                content: '',
                subsections: [
                    {
                        id: 'unlawful',
                        title: '3.1 Unlawful or Harmful Activity',
                        content: (
                            <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                                <p>Users shall not post, upload, distribute, or promote any content or behavior that:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Advocates, threatens, or facilitates violence</li>
                                    <li>Encourages illegal acts or criminal enterprises</li>
                                    <li>Involves the sale, distribution, or promotion of restricted or illegal goods or services</li>
                                    <li>Engages in fraud, impersonation, or deceptive practices</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: 'endangerment',
                        title: '3.2 Endangerment and Exploitation',
                        content: (
                            <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                                <p>The Platform strictly prohibits content that:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Encourages or glorifies self-harm or suicide</li>
                                    <li>Involves sexual exploitation or abuse of any person, including minors</li>
                                    <li>Facilitates trafficking, coercion, or forced labor</li>
                                    <li>Harasses, intimidates, or threatens others</li>
                                    <li>Discloses personal or confidential information without authorization</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: 'offensive',
                        title: '3.3 Offensive, Abusive, or Explicit Material',
                        content: (
                            <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                                <p>Users may not upload or share content that:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Is hateful, discriminatory, or demeaning</li>
                                    <li>Depicts extreme violence or graphic imagery</li>
                                    <li>Contains pornography, sexual services, or explicit solicitation</li>
                                    <li>Is obscene or otherwise inappropriate for a professional environment</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: 'integrity',
                        title: '3.4 Integrity, Authenticity, and Security',
                        content: (
                            <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                                <p>Users must not:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Create or operate fake, automated, or impersonation accounts</li>
                                    <li>Distribute spam, malware, or harmful code</li>
                                    <li>Manipulate engagement metrics or user activity</li>
                                    <li>Disseminate false or misleading information</li>
                                    <li>Interfere with the technical operation of the Platform</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: 'ip',
                        title: '3.5 Intellectual Property and Platform Assets',
                        content: (
                            <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                                <p>Users acknowledge that:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>ZlendoRealty and its licensors retain all rights to proprietary software, tools, and 3D assets</li>
                                    <li>Users may not copy, extract, resell, reverse-engineer, or misuse Platform content</li>
                                    <li>Users must only upload content they own or are authorized to use</li>
                                    <li>Unauthorized use of third-party IP is strictly prohibited</li>
                                </ul>
                            </div>
                        )
                    }
                ]
            },
            {
                id: 'enforcement',
                title: '4. Enforcement and Remedies',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>ZlendoRealty reserves the sole discretion to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Remove or restrict access to any content</li>
                            <li>Issue warnings or notices of violation</li>
                            <li>Suspend or terminate user accounts</li>
                            <li>Limit Platform features</li>
                            <li>Refer matters to law enforcement when required</li>
                        </ul>
                        <p>Enforcement actions may be taken without prior notice.</p>
                    </div>
                )
            },
            {
                id: 'reporting',
                title: '5. Reporting and Complaints',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>Users may report suspected violations through the Platform's reporting tools or by contacting ZlendoRealty's support channels.</p>
                        <p>All reports will be reviewed in accordance with applicable laws and internal procedures.</p>
                    </div>
                )
            },
            {
                id: 'amendments',
                title: '6. Amendments',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>ZlendoRealty may modify these Guidelines at any time.</p>
                        <p>Continued use of the Platform after changes are published constitutes acceptance of the revised Guidelines.</p>
                    </div>
                )
            },
            {
                id: 'governing-principles',
                title: '7. Governing Principles',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>These Guidelines are intended to be interpreted in harmony with ZlendoRealty's Terms of Use and Privacy Policy.</p>
                        <p>In case of conflict, the Terms of Use shall prevail.</p>
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
                        <Link href={`/${country}`} className="hover:text-primary-600 transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">Community Guidelines</span>
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
};

export default CommunityGuidelinesPage;
