'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, Lock } from 'lucide-react';

export default function PrivacyPolicyPage() {
    const { getPath } = useCountry();

    // Privacy Policy content embedded directly in the page
    const policy = {
        id: 'privacy-policy',
        slug: 'privacy-policy',
        title: 'Privacy Policy',
        icon: Lock,
        category: 'privacy' as const,
        description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'intro',
                title: 'Introduction',
                content: (
                    <div className="space-y-4 text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <div className="text-center mb-8">
                            {/* <p className="text-4xl font-black font-nunito mb-4 text-[#333333]">ZLENDO REALTY PRIVACY POLICY</p> */}
                        </div>
                        <p>
                            This Privacy Policy outlines the practices of Zlendo Technologies (referred to herein as 'Zlendo', 'we', 'us' or 'our'), encompassing its website and Zlendo Realty products. We are committed to protecting your Personal Data and respecting your privacy.
                        </p>
                        <p>
                            By using our Site and/or Services, you signify your acceptance of this Policy and Consent to the collection, storage, usage, and disclosure of your Personal Data as described herein.
                        </p>
                    </div>
                )
            },
            {
                id: 'scope',
                title: '1. SCOPE AND APPLICABILITY',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>This Policy applies to individuals who access or use our website, mobile applications, or products, including customers, prospective customers, employees of customers (end-users), service providers, and website visitors (collectively, 'Users' or 'you').</li>
                        <li>Zlendo acts as the Data Fiduciary when processing data for its own purposes:
                            <ul className="list-disc pl-6 mt-1">
                                <li>Website visitors, marketing contacts, and prospective customer information.</li>
                                <li>Data related to the functionality and improvement of Zlendo products.</li>
                            </ul>
                        </li>
                    </ol>
                )
            },
            {
                id: 'definitions',
                title: '2. DEFINITIONS',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>"<strong>Applicable Laws</strong>" mean all statutes, enactments, acts of the legislature or parliament, laws, ordinances, rules, by-laws, regulations, circulars, notifications, guidelines, policies, directions, directives, and orders of any governmental authority, as may be applicable to you and/or Zlendo.</li>
                        <li>"<strong>Consent</strong>" means agreement by Users to processing of Personal Data for a specified purpose and shall be free, specific, informed, unconditional and unambiguous with a clear affirmative action.</li>
                        <li>"<strong>Data Fiduciary</strong>" means the entity that determines the purposes and means of processing Personal Data. <em>For example,</em> Zlendo acts as a Data Fiduciary when processing data collected directly from users to provide AI home design and cost estimation Services through Zlendo Realty.</li>
                        <li>"<strong>Data Protection Officer</strong>" (DPO) means an individual appointed by and represents Zlendo who will be the point of contact for any grievance regarding this Privacy Policy.</li>
                        <li>"<strong>Personal Data</strong>" means any data about an individual who is identifiable by or in relation to such data.</li>
                        <li>"<strong>Personal Data Breach</strong>" means any unauthorised processing of Personal Data or accidental disclosure, acquisition, sharing, use, alteration, destruction or loss of access to Personal Data, that compromises the confidentiality, integrity or availability of Personal Data.</li>
                        <li>"<strong>Platform / Site</strong>" means the websites (e.g., www.zlendorealty.com), mobile applications, web interfaces, APIs, documentation, servers, and software infrastructure owned, registered, and operated by Zlendo.</li>
                        <li>"<strong>Service</strong>" means Zlendo's proprietary cloud-based product, i.e., Zlendo Realty, and any new Services to which User may subscribe, including all associated updates, modifications, and improvements.</li>
                        <li>"<strong>User</strong>" ('<strong>You</strong>'/ '<strong>Yours</strong>') means individuals including but not limited to: (a) end users or customers who use Services; (b) customers who engage Zlendo to manage business processes or provide Services; (c) vendors, suppliers, and service providers who support Zlendo's operations; (d) business partners, investors and collaborators who engage with Zlendo in a professional capacity; (e) employees, prospective employees or job applicants who submit Personal Data during recruitment, and (f) visitors to Zlendo's Platform / Site who may browse, inquire, or otherwise interact with Zlendo's content / Platform / Site.</li>
                    </ol>
                )
            },
            {
                id: 'data-categories',
                title: '3. GENERAL DATA CATEGORIES AND PURPOSES',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <ol className="list-[lower-alpha] pl-6 space-y-2">
                            <li>We collect two types of information: Personal Data and Non-Personal Data.</li>
                            <li><strong>Specific Data Categories Collected.</strong> We may collect the following data categories from Users, especially during registration, inquiries, or website usage:</li>
                        </ol>

                        <div className="overflow-x-auto my-4">
                            <table className="min-w-[500px] border-collapse border border-gray-900 text-left">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-900 p-2 bg-gray-50 text-left w-1/3">Category</th>
                                        <th className="border border-gray-900 p-2 bg-gray-50 text-left">Description and Examples</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Identity and Profile Data</td>
                                        <td className="border border-gray-900 p-2 align-top">First name, last name, company name, job title, username, gender, password, and feedback.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Contact Data</td>
                                        <td className="border border-gray-900 p-2 align-top">Email address, phone number, mailing address, and physical address.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Transaction Data</td>
                                        <td className="border border-gray-900 p-2 align-top">Details about payments to and from you, purchase history, and details of products/Services purchased (though credit card numbers are generally handled by secure gateways).</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Technical Data</td>
                                        <td className="border border-gray-900 p-2 align-top">IP addresses, browser type and version, operating system, time zone setting, device information, and device metadata.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Usage Data</td>
                                        <td className="border border-gray-900 p-2 align-top">Information on how you use the Platform, features accessed, access time, page views, clicks, scrolls, and website/mobile application activity.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Marketing and Communications Data</td>
                                        <td className="border border-gray-900 p-2 align-top">Your preferences in receiving marketing from us or third parties, and communication preferences.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Property and Home Data</td>
                                        <td className="border border-gray-900 p-2 align-top">Name/type/size of your property, preferred furniture, color schemes for rooms, ownership status (owned or rented).</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Design Input Data</td>
                                        <td className="border border-gray-900 p-2 align-top">2D floor plans, designs, preferences, material selection, camera configurations, GPS latitude, images/videos, layout specifications, and feedback provided for AI styling and Vaastu recommendations.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Service Provider Data (Partners/ Affiliates)</td>
                                        <td className="border border-gray-900 p-2 align-top">Information about your business, work experience, verification reports, government-issued identifier details (PAN/GST) required for partnership and payment processes.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top">Non-Personal/Aggregated Data</td>
                                        <td className="border border-gray-900 p-2 align-top">Demographic data and statistical data derived from your Personal Data but not capable of identifying you individually.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <ol className="list-[lower-alpha] pl-6 space-y-2" start={3}>
                            <li><strong>Purposes for collecting data.</strong> We use the collected information for the following explicit purposes, based on legal grounds such as contractual necessity, legitimate interests, or your Consent:
                                <ol className="list-[lower-roman] pl-6 mt-1 space-y-1">
                                    <li><u>To Provide Services and Support</u>: To create and manage your account, deliver content, respond to your customer service requests and support needs, and communicate with you about the products and Services you are using.</li>
                                    <li><u>To Improve and Personalize Experience</u>: To personalize user experience, monitor trends, understand how users use our platforms, improve our products/Services, and develop new features.</li>
                                    <li><u>For Marketing and Promotion</u>: To send periodic emails or notifications about company news, updates, related product/Service information, promotions, contests, or events (unless you opt-out).</li>
                                    <li><u>For Security and Compliance</u>: To administer and protect our business, prevent fraud, troubleshoot technical problems, enforce our terms, and comply with legal or regulatory obligations.</li>
                                    <li><u>For Business Operations</u>: To process payments, administer activities on our behalf and to enable communication between Users and Service Providers when Services are offered through the Platform.</li>
                                    <li><u>Optimization:</u> To apply AI algorithms to create optimized, functional, or inspired room layouts.</li>
                                    <li><u>Integration</u>: To facilitate API integrations, allowing other platforms to plug Zlendo's costing and design engines into their own products.</li>
                                    <li><u>Use of Uploaded Floor Plans for Training Purposes:</u> Floor plans and design inputs uploaded by Users to Zlendo Realty may be used by Zlendo for internal research, analytics, and training of its systems, including improvement and refinement of design, estimation, and AI-assisted functionalities. Such use shall be limited to enhancing platform performance and capabilities and shall be undertaken in accordance with this Privacy Policy and Applicable Laws. Zlendo shall not use such floor plans to identify individual Users and shall implement reasonable measures to ensure confidentiality and data security while using such data for training purposes.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                )
            },
            {
                id: 'cookies',
                title: '4. COOKIES AND AUTOMATED TECHNOLOGIES',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>The Platform / Site may use any cookies, log files, web beacons, tracking pixels and other similar technologies as part of its technical design to understand how you navigate through the Site to learn your preferences. Cookies are small text files that web servers place on your device; they are designed to store basic information and to help Site recognize your browser. Log files track actions that occur on the Site, and collect data including your IP address, browser type, internet service provider, referring and exit pages, and date and time stamps. web beacons, tags and pixels are electronic files used to record information about how you browse the Platform / Site.</li>
                        <li>Users can choose to accept or decline cookies through the browser settings. If the visitor chooses to disable cookies, some portions of this website may not function properly.</li>
                        <li>Any continued access or use of the Site by a User will imply its acceptance to such revised policy.</li>
                    </ol>
                )
            },
            {
                id: 'sharing',
                title: '5. DATA SHARING AND DISCLOSURE',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify" start={1}>
                        <li>We do not sell, trade, or rent your Personal Data to others. We share your information only in the ways described below and only with parties who adhere to appropriate confidentiality and security measures.
                            <ol className="list-[lower-roman] pl-6 mt-1 space-y-2">
                                <li><strong>Internal Sharing:</strong> We may share Personal Data with affiliates and other entities within the Zlendo group for purposes consistent with this Policy, such as technical operations and customer support.</li>
                                <li><strong>Service Providers and Sub-Processors:</strong> We employ and contract with third-party service providers and sub-processors (e.g., hosting, payment processors, cloud infrastructure, analytics providers, email service providers) to perform certain tasks on our behalf. These third parties are authorized to use your Personal Data only as necessary to provide these services to us and must process the data based on our instructions. While we take reasonable steps to ensure compliance, third-party service providers and sub-processors may process data independently. We are not responsible for their security measures or data practices.</li>
                                <li><strong>Third-party Links:</strong> We may provide links to third-party websites for your convenience and information. These websites may not be owned, controlled, or operated by us. We do not have control over how these third-party websites collect, use, share, or secure your Personal Data. We recommend reviewing their privacy policies before interacting with them.</li>
                                <li><strong>Business Partners/Affiliates:</strong> We may share your data with Service Providers, business partners and affiliates to facilitate Service delivery. For marketing purposes, we may share generic aggregated demographic information not linked to any Personal Data with partners or advertisers.</li>
                                <li><strong>Legal Requirements and Protection:</strong> We may disclose Personal Data if required to do so by Applicable Laws, regulation, legal process, governmental request, or court order. This includes investigation of potential violations, defending against legal claims, and protecting the rights, property, or safety of Zlendo, its users, or the public.</li>
                                <li><strong>Business Transfers:</strong> In the event Zlendo becomes involved in a merger, acquisition, or sale of all or a portion of its assets, your Personal Data might be among the assets transferred. We will notify you via email or prominent notice if such a transfer occurs.</li>
                                <li><strong>Cross Border Transfers:</strong> We may process your Personal Data outside India and may transfer your Personal Data to individual companies, affiliated companies or third parties in locations around the world for the purposes described in this Privacy Policy or under contractual obligations. We shall comply with our legal and regulatory obligations in relation to your Personal Data, including having a lawful basis for transferring Personal Data and putting appropriate safeguards in place to ensure an adequate level of protection for Personal Data. These countries may have different data protection laws, and your Personal Data may be accessed or disclosed to governmental, regulatory, or other authorities as required by local law or official processes.</li>
                            </ol>
                        </li>
                    </ol>
                )
            },
            {
                id: 'consent',
                title: '6. CONSENT',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>To the extent mandated by law, by accessing or using Zlendo's Services, you provide your Consent for the collection and processing of your Personal Data, subject to the following conditions:
                            <ol className="list-[lower-roman] pl-6 mt-1 space-y-1">
                                <li>Your Consent shall be free, informed, specific, unconditional, and unambiguous, and shall be obtained through a clear affirmative action;</li>
                                <li>Your Personal Data shall only be collected and processed for the purposes specified at the time of collection and as described in this Privacy Policy;</li>
                                <li>Where required under Applicable Laws, we will obtain your Consent through appropriate electronic or written means or via governing contracts;</li>
                                <li>You have the right to withdraw your Consent at any time. Such withdrawal shall not affect the legality of any processing carried out prior to the withdrawal however it may impact our ability to continue providing you Services.</li>
                                <li>You may withdraw your Consent or raise any concerns regarding Your Personal Data by contacting Our DPO using the contact details provided in this Privacy Policy.</li>
                            </ol>
                        </li>
                    </ol>
                )
            },
            {
                id: 'children',
                title: '7. CHILDREN\'S PERSONAL DATA',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>Zlendo&apos;s Platform and Services are not directed toward individuals under the age of 18. We do not knowingly collect or maintain Personal Data from anyone under the age of 18 for our own purposes. If you are a parent or legal guardian and believe that a child under 18 has provided us with their Personal Data, please contact us immediately. Upon becoming aware of such collection, we will take appropriate steps to delete that data from our Services/Platform.</li>
                    </ol>
                )
            },
            {
                id: 'security',
                title: '8. DATA STORAGE, SECURITY AND RETENTION',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li><strong>Data Storage.</strong> Zlendo stores your Personal Data only at servers located in India. Information of Users are retained for meeting the servicing requirements, unless such Consent is withdrawn by you. If future transfers outside India are contemplated, we will comply with DPDP Act provisions, ensuring adequate protection, contractual safeguards, or your explicit consent.</li>
                        <li><strong>Data Security.</strong> We implement, enforce, and maintain security policies and appropriate technical and organizational measures to protect against unauthorized access, alteration, disclosure, or destruction of your Personal Data, username, password, transaction information, and data stored on our Site. Security measures include:
                            <ol className="list-[lower-roman] pl-6 mt-1 space-y-1">
                                <li><u>Encryption</u>: Data exchange happens over secured communication channels and is encrypted.</li>
                                <li><u>Access Control</u>: We restrict access to Personal Data to employees, contractors, and agents on a need-to-know basis.</li>
                                <li><u>User Responsibility</u>: You are responsible for maintaining the security of your password or other forms of authentication involved in accessing secured resources.</li>
                            </ol>
                        </li>
                        <li><strong>Data Retention.</strong> We retain your personal information for as long as it is required to fulfill the purposes stated in this Policy, or as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. Personal Data used for marketing purposes will be kept until you notify us that you no longer wish to receive communication. General Fiduciary data is retained for a time period to achieve the purpose for which it was collected or as required by the Applicable Laws.</li>
                        <li><strong>Secure Disposal.</strong> Personal data that is no longer required is securely deleted or otherwise disposed of to prevent any possibility of recovery or misuse. Where mandated under applicable law, Zlendo shall inform the User whose data is being erased prior to such deletion or disposal.</li>
                    </ol>
                )
            },
            {
                id: 'rights',
                title: '9. YOUR RIGHTS AND EXERCISE PROCEDURES',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>To the extent mandated by law:
                            <ol className="list-[lower-roman] pl-6 mt-1 space-y-1">
                                <li>As a User, You have the right to access, correct, update, or delete Your Personal Data held by Zlendo (subject to exceptions, such as legal obligations).</li>
                                <li>You may withdraw Your Consent for data processing at any time, except where retention is required by law.</li>
                                <li>Zlendo recognizes the right to nominate. This right allows an individual who is under incapacity to designate a person (a nominee) to exercise the data subject rights available to them under this Privacy Policy. Zlendo reserves the right to verify and validate any nominations submitted under this right before acting upon them.</li>
                                <li>You also have the right to raise grievances about our handling of Your Personal Data.</li>
                                <li>To exercise any of these rights or submit a complaint, please contact our Data Protection Officer at: [dpo@zlendorealty.com].</li>
                            </ol>
                        </li>
                    </ol>
                )
            },
            {
                id: 'breach',
                title: '10. DATA BREACH NOTIFICATION',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>In the event that Zlendo becomes aware of a Personal Data Breach, we will act immediately to investigate the incident.</li>
                        <li><strong>Notification to Users:</strong> If Zlendo, acting as the Data Fiduciary, learns of a Personal Data Breach, Zlendo shall, subject to Applicable Laws and instructions from any agency or authority, promptly notify affected Users.</li>
                        <li><strong>Remedial Measures and Compliance:</strong> Zlendo will take prompt remedial measures, including reasonable measures to restore the security of the Personal Data and limit unauthorized or illegal dissemination of the data. Zlendo will also notify relevant regulatory or government authorities, including the Data Protection Board of India, where required by Applicable Law.</li>
                    </ol>
                )
            },
            {
                id: 'procedure',
                title: '11. PROCEDURE FOR EXERCISING RIGHTS',
                content: (
                    <p className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        To exercise your rights regarding data, you may submit a request by contacting us via the designated email address in the Contact Us section below. We may ask you to verify your identity before acting on the request.
                    </p>
                )
            },
            {
                id: 'governing-law',
                title: '12. GOVERNING LAW AND DISPUTE RESOLUTION',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>This Privacy Policy shall be governed by, construed, and enforced in accordance with the laws of India.</li>
                        <li>In case of any dispute or difference either in interpretation or otherwise, of any terms of these Terms between the parties hereto, the parties shall attempt to resolve the same through discussion. In case the parties fail to arrive at an amiable solution through discussion, the same shall be referred to Arbitration at the request of either Party in writing, in accordance with the provisions of Arbitration and Conciliation Act, 1996, as amended from time to time. The arbitration shall be conducted by a sole Arbitrator to be mutually appointed between the Parties and decision of the arbitrator shall be final and binding on the parties hereto. The seat  and venue of arbitration shall be Madurai, Tamil Nadu, India. The rights and remedies provided in these Terms are cumulative and are in addition to and not in substitution for any other rights and remedies available at law or in equity.</li>
                    </ol>
                )
            },
            {
                id: 'contact',
                title: '13. CONTACT INFORMATION',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                        <li>For inquiries, concerns, or to exercise your rights, please contact our Data Protection Officer at: [dpo@zlendorealty.com].</li>
                        <li>We will endeavor to reply to your requests within a reasonable timeframe as per the Applicable Laws.</li>
                    </ol>
                )
            },
            {
                id: 'changes',
                title: '14. CHANGES TO THIS POLICY',
                content: (
                    <div className="font-nunito text-justify space-y-4 text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>
                            Zlendo reserves the right to amend or update this Privacy Policy at any time. When changes are made, we will revise the updated date at the bottom of the page and may notify you by email or through a prominent notice on our website. Your continued use of the Services following any changes constitutes your active acceptance and agreement to be bound by the modified Policy.
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
                        <span className="text-gray-900 font-medium">Privacy Policy</span>
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
