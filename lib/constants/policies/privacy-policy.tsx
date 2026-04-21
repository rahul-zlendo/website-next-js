import React from 'react';
import type { PolicySection } from './types';
import { Maximize2 } from 'lucide-react';

export const privacyPolicySections: PolicySection[] = [
    {
        id: 'intro',
        title: 'Introduction',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>This Privacy Policy outlines the practices of Zlendo Technologies (referred to herein as 'Zlendo', 'we', 'us' or 'our'), encompassing its website and Zlendo Realty products. We are committed to protecting your Personal Data and respecting your privacy.</p>
                <p>By using our Site and/or Services, you signify your acceptance of this Policy and Consent to the collection, storage, usage, and disclosure of your Personal Data as described herein. Where Applicable Laws require a specific lawful basis for processing such as consent, contractual necessity, legitimate interest, or legal obligation, Zlendo shall rely on the applicable lawful basis as set out in this Policy and in accordance with the laws of your jurisdiction.</p>
            </div>
        )
    },
    {
        id: 'scope',
        title: '1. SCOPE AND APPLICABILITY',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>This Policy applies to individuals who access or use our website, mobile applications, or products, including customers, prospective customers, employees of customers (end-users), service providers, and website visitors (collectively, 'Users' or 'you'). This Policy applies regardless of the country from which you access or use the Platform.</li>
                <li>Zlendo acts as the Data Fiduciary (also referred to as 'Data Controller' under the EU General Data Protection Regulation ('GDPR') and UK GDPR) when processing data for its own purposes:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
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
                <li>"<strong>Data Fiduciary</strong>" / "<strong>Data Controller</strong>" means the entity that determines the purposes and means of processing Personal Data. <em>For example,</em> Zlendo acts as a Data Fiduciary/ 'Data Controller' when processing data collected directly from users to provide AI home design and cost estimation Services through Zlendo Realty.</li>
                <li>"<strong>Data Protection Officer</strong>" (DPO) means an individual appointed by and represents Zlendo who will be the point of contact for any grievance regarding this Privacy Policy. The DPO also serves as the contact point for supervisory authorities under the GDPR and UK GDPR.</li>
                <li>"<strong>Personal Data</strong>" means any data about an individual who is identifiable by or in relation to such data.</li>
                <li>"<strong>Personal Data Breach</strong>" means any unauthorised processing of Personal Data or accidental disclosure, acquisition, sharing, use, alteration, destruction or loss of access to Personal Data, that compromises the confidentiality, integrity or availability of Personal Data.</li>
                <li>"<strong>Platform / Site</strong>" means the websites (e.g., www.zlendorealty.com), mobile applications, web interfaces, APIs, documentation, servers and software infrastructure owned, registered and operated by Zlendo.</li>
                <li>"<strong>Service</strong>" means Zlendo’s proprietary cloud-based product, i.e., Zlendo Realty, and any new Services to which User may subscribe, including all associated updates, modifications, and improvements.</li>
                <li>"<strong>User</strong>" ('<strong>You</strong>'/ '<strong>Yours</strong>') means individuals including but not limited to: (a) end users or customers who use Services; (b) customers who engage Zlendo to manage business processes or provide Services; (c) vendors, suppliers, and service providers who support Zlendo’s operations; (d) business partners, investors and collaborators who engage with Zlendo in a professional capacity; (e) employees, prospective employees or job applicants who submit Personal Data during recruitment, and (f) visitors to Zlendo’s Platform / Site who may browse, inquire, or otherwise interact with Zlendo’s content / Platform / Site.</li>
                <li>"<strong>Lawful Basis</strong>" means the legal justification for processing Personal Data, which may include: (a) your Consent; (b) performance of a contract to which you are a party; (c) compliance with a legal obligation; (d) protection of vital interests; (e) performance of a task in the public interest; or (f) legitimate interests pursued by Zlendo, except where overridden by your fundamental rights (as applicable under GDPR, UK GDPR and analogous laws).</li>
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

                <div className="overflow-x-auto my-6 text-left">
                    <table className="min-w-full border-collapse border border-zlendo-grey-medium/20 text-left rounded-xl overflow-hidden">
                        <thead className="bg-zlendo-teal/5">
                            <tr>
                                <th className="border border-zlendo-grey-medium/20 p-4 font-black text-zlendo-grey-dark uppercase tracking-wider text-[11px]">Category</th>
                                <th className="border border-zlendo-grey-medium/20 p-4 font-black text-zlendo-grey-dark uppercase tracking-wider text-[11px]">Description and Examples</th>
                            </tr>
                        </thead>
                        <tbody className="text-zlendo-grey-medium text-[15px]">
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Identity and Profile Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">First name, last name, company name, job title, username, gender, password, and feedback.</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Contact Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">Email address, phone number, mailing address, and physical address.</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Transaction Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">Details about payments to and from you, purchase history, and details of products/Services purchased (though credit card numbers are generally handled by secure gateways).</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Technical Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">IP addresses, browser type and version, operating system, time zone setting, device information, and device metadata.</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Usage Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">Information on how you use the Platform, features accessed, access time, page views, clicks, scrolls, and website/mobile application activity.</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Marketing and Communications Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">Your preferences in receiving marketing from us or third parties, and communication preferences.</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Property and Home Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">Name/type/size of your property, preferred furniture, color schemes for rooms, ownership status (owned or rented).</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Design Input Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">2D floor plans, designs, preferences, material selection, camera configurations, GPS latitude, images/videos, layout specifications, and feedback provided for AI styling and Vaastu recommendations.</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Service Provider Data (Partners/ Affiliates)</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">Information about your business, work experience, verification reports, government-issued identifier details (PAN/GST) required for partnership and payment processes.</td>
                            </tr>
                            <tr>
                                <td className="border border-zlendo-grey-medium/20 p-4 font-bold text-zlendo-grey-dark bg-gray-50/50">Non-Personal/Aggregated Data</td>
                                <td className="border border-zlendo-grey-medium/20 p-4">Demographic data and statistical data derived from your Personal Data but not capable of identifying you individually.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <ol className="list-[lower-alpha] pl-6 space-y-2" start={3}>
                    <li><strong>Purposes for collecting data.</strong> We use the collected information for the following explicit purposes, based on legal grounds such as contractual necessity, legitimate interests, or your Consent. The specific lawful basis relied upon for each processing purpose (where required under GDPR, UK GDPR, or analogous laws) is indicated below:
                        <ol className="list-[lower-roman] pl-6 mt-1 space-y-2">
                            <li><u>To Provide Services and Support</u>: To create and manage your account, deliver content, respond to your customer service requests and support needs, and communicate with you about the products and Services you are using.</li>
                            <li><u>To Improve and Personalize Experience</u>: To personalize user experience, monitor trends, understand how users use our platforms, improve our products/Services, and develop new features for lawful basis and legitimate interest.</li>
                            <li><u>For Marketing and Promotion</u>: To send periodic emails or notifications about company news, updates, related product/Service information, promotions, contests or events (unless you opt-out).</li>
                            <li><u>For Security and Compliance</u>: To administer and protect our business, prevent fraud, troubleshoot technical problems, enforce our terms, and comply with legal or regulatory obligations.</li>
                            <li><u>For Business Operations</u>: To process payments, administer activities on our behalf and to enable communication between Users and Service Providers when Services are offered through the Platform.</li>
                            <li><u>Optimization</u>: To apply AI algorithms to create optimized, functional, or inspired room layouts.</li>
                            <li><u>Integration</u>: To facilitate API integrations, allowing other platforms to plug Zlendo’s costing and design engines into their own products.</li>
                            <li><u>Use of Uploaded Floor Plans for Training Purposes</u>: Floor plans and design inputs uploaded by Users to Zlendo Realty may be used by Zlendo for internal research, analytics, and training of its systems, including improvement and refinement of design, estimation, and AI-assisted functionalities. Such use shall be limited to enhancing platform performance and capabilities and shall be undertaken in accordance with this Privacy Policy and Applicable Laws. Zlendo shall not use such floor plans to identify individual Users and shall implement reasonable measures to ensure confidentiality and data security while using such data for training purposes. Where required under Applicable Laws, Zlendo shall anonymise or pseudonymise such data in accordance with applicable anonymisation standards before use for AI training.</li>
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
                <li>Users can choose to accept or decline cookies through the cookie consent management tool presented upon first access to the Platform or through browser settings. If the visitor chooses to disable cookies, some portions of the Platform may not function properly. Non-essential cookies (including analytics and marketing cookies) will not be placed unless the User provides affirmative consent, where such consent is required by Applicable Laws.</li>
                <li>Any continued access or use of the Site by a User will imply its acceptance to such revised policy. For detailed information regarding the types of cookies used, their purpose, retention period, and how to manage your preferences, please refer to our Cookie Policy, which forms part of this Privacy Policy.</li>
            </ol>
        )
    },
    {
        id: 'sharing',
        title: '5. DATA SHARING AND DISCLOSURE',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>We do not sell, trade, or rent your Personal Data to others. We share your information only in the ways described below and only with parties who adhere to appropriate confidentiality and security measures:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li><strong>Internal Sharing:</strong> We may share Personal Data with affiliates and other entities within the Zlendo group for purposes consistent with this Policy, such as technical operations and customer support.</li>
                    <li><strong>Service Providers and Sub-Processors:</strong> We employ and contract with third-party service providers and sub-processors (e.g., hosting, payment processors, cloud infrastructure, analytics providers, email service providers) to perform certain tasks on our behalf. These third parties are authorized to use your Personal Data only as necessary to provide these services to us and must process the data based on our instructions. Where required under Applicable Laws, Zlendo enters into Data Processing Agreements with all such sub-processors, and a list of current sub-processors is available upon request. While we take reasonable steps to ensure compliance, third-party service providers and sub-processors may process data independently. We are not responsible for their security measures or data practices.</li>
                    <li><strong>Third-party Links:</strong> We may provide links to third-party websites for your convenience and information. These websites may not be owned, controlled, or operated by us. We do not have control over how these third-party websites collect, use, share, or secure your Personal Data. We recommend reviewing their privacy policies before interacting with them.</li>
                    <li><strong>Business Partners/Affiliates:</strong> We may share your data with Service Providers, business partners and affiliates to facilitate Service delivery. Subject to the Applicable Laws, Zlendo shall endeavour to identify the categories of third-party recipients and the items of Personal Data shared, as required. For marketing purposes, we may share generic aggregated demographic information not linked to any Personal Data with partners or advertisers.</li>
                    <li><strong>Legal Requirements and Protection:</strong> We may disclose Personal Data if required to do so by Applicable Laws, regulation, legal process, governmental request, or court order. This includes investigation of potential violations, defending against legal claims, and protecting the rights, property, or safety of Zlendo, its users, or the public.</li>
                    <li><strong>Business Transfers:</strong> In the event Zlendo becomes involved in a merger, acquisition, or sale of all or a portion of its assets, your Personal Data might be among the assets transferred. We will notify you via email or prominent notice if such a transfer occurs.</li>
                    <li><strong>Cross Border Transfers:</strong> We may process your Personal Data outside India and may transfer your Personal Data to individual companies, affiliated companies or third parties in locations around the world for the purposes described in this Privacy Policy or under contractual obligations. We shall comply with our legal and regulatory obligations in relation to your Personal Data, including having a lawful basis for transferring Personal Data and putting appropriate safeguards in place to ensure an adequate level of protection for Personal Data. These countries may have different data protection laws, and your Personal Data may be accessed or disclosed to governmental, regulatory, or other authorities as required by local law or official processes. Zlendo’s primary data processing occurs in India.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'consent-policy',
        title: '6. CONSENT',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>To the extent mandated by law, by accessing or using Zlendo’s Services, you provide your Consent for the collection and processing of your Personal Data, subject to the following conditions:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li>Your Consent shall be free, informed, specific, unconditional, and unambiguous, and shall be obtained through a clear affirmative action;</li>
                    <li>Your Personal Data shall only be collected and processed for the purposes specified at the time of collection and as described in this Privacy Policy;</li>
                    <li>Where required under Applicable Laws, we will obtain your Consent through appropriate electronic or written means or via governing contracts;</li>
                    <li>You have the right to withdraw your Consent at any time. Such withdrawal shall not affect the legality of any processing carried out prior to the withdrawal however it may impact our ability to continue providing you Services.</li>
                    <li>You may withdraw your Consent or raise any concerns regarding Your Personal Data by contacting Our DPO using the contact details provided in this Privacy Policy.</li>
                    <li>Where Zlendo relies on legitimate interests as the lawful basis for processing (under GDPR, UK GDPR, or analogous laws), Zlendo has conducted a balancing assessment to ensure that its interests do not override your fundamental rights and freedoms.</li>
                    <li>Zlendo shall not use Personal Data beyond the specified purpose of utilisation without obtaining prior consent, except as permitted by law.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'children',
        title: '7. CHILDREN’S PERSONAL DATA',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>Zlendo’s Platform and Services are not directed toward individuals under the age of 18. We do not knowingly collect or maintain Personal Data from anyone under the age of 18 for our own purposes. If you are a parent or legal guardian and believe that a child under 18 has provided us with their Personal Data, please contact us immediately. Upon becoming aware of such collection, we will take appropriate steps to delete that data from our Services/Platform.</li>
            </ol>
        )
    },
    {
        id: 'storage-security',
        title: '8. DATA STORAGE, SECURITY AND RETENTION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li><strong>Data Storage:</strong> Zlendo primarily stores your Personal Data at servers located in India. Where operationally necessary, data may also be processed in other jurisdictions, subject to the safeguards described in Section 5(a)(vii) above. Information of Users are retained for meeting the servicing requirements, unless such Consent is withdrawn by you. If future transfers outside India are contemplated, we will comply with DPDP Act provisions, ensuring adequate protection, contractual safeguards, or your explicit consent.</li>
                    <li><strong>Data Security:</strong> We implement, enforce, and maintain security policies and appropriate technical and organizational measures to protect against unauthorized access, alteration, disclosure, or destruction of your Personal Data, username, password, transaction information, and data stored on our Site. Security measures include:
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li><strong>Encryption:</strong> Data exchange happens over secured communication channels and is encrypted.</li>
                            <li><strong>Access Control:</strong> We restrict access to Personal Data to employees, contractors, and agents on a need-to-know basis.</li>
                            <li><strong>User Responsibility:</strong> You are responsible for maintaining the security of your password or other forms of authentication involved in accessing secured resources.</li>
                        </ul>
                    </li>
                    <li><strong>Data Retention:</strong> We retain your personal information for as long as it is required to fulfill the purposes stated in this Policy, or as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods are as follows:
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li><strong>Account and transaction data:</strong> duration of the account plus 3 years (or such longer period as required by applicable tax or commercial laws);</li>
                            <li><strong>Marketing data:</strong> until you withdraw consent or opt out;</li>
                            <li><strong>Technical/usage data (logs, cookies):</strong> up to 24 months from collection;</li>
                            <li><strong>Design input data used for AI training:</strong> retained in anonymised form only, for as long as reasonably necessary for research and improvement purposes.</li>
                        </ul>
                        These periods are subject to variation where a longer retention period is mandated by Applicable Laws. General Fiduciary data is retained for a time period to achieve the purpose for which it was collected or as required by the Applicable Laws.
                    </li>
                    <li><strong>Secure Disposal:</strong> Personal data that is no longer required is securely deleted or otherwise disposed of to prevent any possibility of recovery or misuse. Where mandated under applicable law, Zlendo shall inform the User whose data is being erased prior to such deletion or disposal.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'jurisdictions',
        title: '9. YOUR RIGHTS AND EXERCISE PROCEDURES',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>To the extent mandated by law:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li>As a User, You have the right to access, correct, update or delete Your Personal Data held by Zlendo (subject to exceptions, such as legal obligations).</li>
                    <li>You may withdraw Your Consent for data processing at any time, except where retention is required by law.</li>
                    <li>Zlendo recognizes the right to nominate. This right allows an individual who is under incapacity to designate a person (a nominee) to exercise the data subject rights available to them under this Privacy Policy. Zlendo reserves the right to verify and validate any nominations submitted under this right before acting upon them.</li>
                    <li>You also have the right to raise grievances about our handling of Your Personal Data.</li>
                    <li>To exercise any of these rights or submit a complaint, please contact our Data Protection Officer at: dataprotection@zlendorealty.com.</li>
                    <li><strong>Additional rights available under specific jurisdictions (to the extent applicable to you):</strong>
                        <ol className="list-[lower-roman] pl-6 mt-1 space-y-2">
                            <li><strong>EEA/UK Users (GDPR / UK GDPR):</strong> You have the right to: (a) data portability (receive your data in a structured, commonly used, machine-readable format); (b) restriction of processing; (c) object to processing based on legitimate interests or for direct marketing; and (d) lodge a complaint with a supervisory authority in the EU/EEA Member State or the UK Information Commissioner’s Office (ICO), as applicable. Zlendo shall respond to data subject requests within 30 days (extendable by a further 60 days for complex requests, with notice).</li>
                            <li><strong>US Users (California / CCPA-CPRA and analogous state laws):</strong> You have the right to: (a) know what Personal Data is collected, used, shared, or sold; (b) request deletion; (c) opt out of the sale or sharing of Personal Data; (d) non-discrimination for exercising your rights. Zlendo does not sell or share (as defined by the CCPA) your Personal Data. To submit a verifiable consumer request, contact us using the details in Section 13.</li>
                            <li><strong>Japanese Users (APPI):</strong> You have the right to request disclosure, correction, addition, deletion, or cessation of use of your Personal Data, or cessation of provision to third parties. Requests may be submitted to the DPO.</li>
                            <li><strong>Singapore Users (PDPA):</strong> You have the right to access and correct your Personal Data, and to withdraw consent for processing. Zlendo shall respond within 30 days.</li>
                            <li><strong>Malaysian Users (PDPA 2010):</strong> You have the right to access and correct your Personal Data and to withdraw consent for processing. A fee may apply for access requests as permitted under the PDPA 2010.</li>
                            <li><strong>Australian Users (Privacy Act 1988):</strong> You have the right to access and correct your Personal Data. You may also lodge a complaint with the Office of the Australian Information Commissioner (OAIC) if you are not satisfied with our response.</li>
                            <li><strong>UAE Users (Federal Decree-Law No. 45 of 2021):</strong> You have the right to access, rectify, erase, and restrict processing of your Personal Data in accordance with the UAE Data Protection Law.</li>
                        </ol>
                    </li>
                </ol>
            </div>
        )
    },
    {
        id: 'breach',
        title: '10. DATA BREACH NOTIFICATION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>In the event that Zlendo becomes aware of a Personal Data Breach, we will act immediately to investigate the incident.</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li><strong>Notification to Users:</strong> If Zlendo, acting as the Data Fiduciary, learns of a Personal Data Breach, Zlendo shall, subject to Applicable Laws and instructions from any agency or authority, promptly notify affected Users. If required by Applicable Laws, Zlendo shall notify affected data subjects without undue delay where the breach is likely to result in a high risk to their rights and freedoms.</li>
                    <li><strong>Remedial Measures and Compliance:</strong> Zlendo will take prompt remedial measures, including reasonable measures to restore the security of the Personal Data and limit unauthorized or illegal dissemination of the data. Zlendo will also notify relevant regulatory or government authorities, where required by Applicable Law, within such period of becoming aware of the breach as may be mandated under such law. This includes, as applicable, supervisory authorities in the EEA/UK, the PPC in Japan, the PDPC in Singapore, the OAIC in Australia, and other applicable regulators.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'procedure',
        title: '11. PROCEDURE FOR EXERCISING RIGHTS',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>To exercise your rights regarding data, you may submit a request by contacting us via the designated email address in the Contact Us section below. We may ask you to verify your identity before acting on the request. Zlendo shall respond to all verifiable rights requests within the time limits prescribed by Applicable Laws (e.g., 30 days under GDPR/UK GDPR; 30 business days under CCPA; timeframes as required under other local laws). Where we are unable to comply with a request, we will inform you of the reasons.</li>
            </ol>
        )
    },
    {
        id: 'governing-law',
        title: '12. GOVERNING LAW AND DISPUTE RESOLUTION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li>This Privacy Policy shall be governed by, construed, and enforced in accordance with the laws of India.</li>
                    <li>In case of any dispute or difference either in interpretation or otherwise, of any terms of these Terms between the parties hereto, the parties shall attempt to resolve the same through discussion. In case the parties fail to arrive at an amiable solution through discussion, the same shall be referred to Arbitration at the request of either Party in writing, in accordance with the provisions of Arbitration and Conciliation Act, 1996, as amended from time to time. The arbitration shall be conducted by a sole Arbitrator to be mutually appointed between the Parties and decision of the arbitrator shall be final and binding on the parties hereto. The seat and venue of arbitration shall be Madurai, Tamil Nadu, India. The rights and remedies provided in these Terms are cumulative and are in addition to and not in substitution for any other rights and remedies available at law or in equity.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'contact-info',
        title: '13. CONTACT INFORMATION',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer:</li>
                <li><strong>Email:</strong> dataprotection@zlendorealty.com</li>
                <li>We will endeavour to reply to your requests within a reasonable timeframe as per the Applicable Laws.</li>
            </ol>
        )
    },
    {
        id: 'changes',
        title: '14. CHANGES TO THIS POLICY',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>Zlendo reserves the right to amend or update this Privacy Policy at any time. When changes are made, we will revise the updated date at the bottom of the page and may notify you by email or through a prominent notice on our website at least thirty (30) days prior to the effective date of any material changes, where practicable.</li>
                <li>Your continued use of the Services following any changes constitutes your acknowledgment of the modified Policy. Where Applicable Laws require affirmative consent for material changes to data processing, Zlendo shall obtain such consent before the changes take effect.</li>
            </ol>
        )
    },
    {
        id: 'addenda',
        title: 'JURISDICTION-SPECIFIC ADDENDA',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>The following addenda apply to Users in the specified jurisdictions and supplement (but do not replace) the main body of this Privacy Policy. In the event of conflict between the main body and a jurisdiction-specific addendum, the addendum shall prevail to the extent of the conflict for Users in that jurisdiction.</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li><strong>EEA/UK Addendum:</strong>
                        <ol className="list-[lower-roman] pl-6 mt-1 space-y-1">
                            <li>Zlendo processes Personal Data of EEA/UK users in reliance on one or more of the lawful bases set out under GDPR / UK GDPR, as specified in Section 3(c) above.</li>
                            <li>Zlendo does not engage in automated individual decision-making, including profiling, that produces legal effects or similarly significant effects on Users, within the meaning of GDPR. The AI-generated design recommendations and cost estimates provided by Zlendo Realty are assistive outputs only and do not constitute automated decision-making.</li>
                            <li>Where Zlendo processes data for direct marketing purposes based on legitimate interest, EEA/UK users have the absolute right to object at any time, and Zlendo shall cease such processing upon receipt of the objection.</li>
                        </ol>
                    </li>
                    <li><strong>United States Addendum (California and analogous state laws):</strong>
                        <ol className="list-[lower-roman] pl-6 mt-1 space-y-1">
                            <li>Categories of Personal Information collected, the business or commercial purposes for collection, and the categories of third parties to whom information is disclosed are set out in Sections 3 and 5 above.</li>
                            <li>Zlendo does not ‘sell’ or ‘share’ Personal Information as those terms are defined under the CCPA/CPRA.</li>
                            <li>Zlendo does not use or disclose ‘sensitive personal information’ for purposes other than those permitted under the CCPA/CPRA.</li>
                            <li>Zlendo retains each category of Personal Information for the periods set out in Section 8(c).</li>
                        </ol>
                    </li>
                </ol>
                <p className="mt-8 pt-8 border-t border-zlendo-grey-medium/10 text-sm text-zlendo-grey-medium/60 italic">
                    Last Updated: April 2026
                </p>
            </div>
        )
    }
];
