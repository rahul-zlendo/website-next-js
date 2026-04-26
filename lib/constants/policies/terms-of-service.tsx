import React from 'react';
import type { PolicySection } from './types';

export const termsOfServiceSections: PolicySection[] = [
    {
        id: 'intro',
        title: 'ZLENDO REALTY TERMS OF SERVICE',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 mb-8 font-bold">
                    <p className="text-sm uppercase tracking-widest text-zlendo-grey-dark mb-4">Table of Contents</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        <p>1. Definitions</p>
                        <p>2. Eligibility and Account Registration</p>
                        <p>3. Usage Rights and Restrictions</p>
                        <p>4. Electronic Communications</p>
                        <p>5. Fees and Payment Terms</p>
                        <p>6. Customisation</p>
                        <p>7. Intellectual Property Rights and Content Ownership</p>
                        <p>8. Confidentiality</p>
                        <p>9. Disclaimer of Warranties</p>
                        <p>10. Limitation of Liability</p>
                        <p>11. Indemnification</p>
                        <p>12. Third-Party Services and Resources</p>
                        <p>13. Term</p>
                        <p>14. Termination</p>
                        <p>15. Governing Law and Dispute Resolution</p>
                        <p>16. Use of AI and Estimates (Zlendo Realty)</p>
                        <p>17. Vendor and Physical Services Disclaimer</p>
                        <p>18. Injunctive Relief</p>
                        <p>19. Non Disparagement</p>
                        <p>20. Amendments</p>
                        <p>21. Force Majeure</p>
                        <p>22. Notices</p>
                        <p>23. Assignment</p>
                        <p>24. Conflict of terms</p>
                        <p>25. Waiver</p>
                        <p>26. Severability</p>
                        <p>27. Independent contractors</p>
                        <p>28. Electronic Signatures</p>
                        <p>29. Jurisdiction Specific Provisions</p>
                    </div>
                </div>

                <p className="font-bold text-zlendo-grey-dark uppercase">PLEASE READ THIS DOCUMENT CAREFULLY. BY ACCESSING OR USING THE ZLENDO REALTY WEBSITE, PLATFORM, OR SERVICES, OR EXECUTING A SUBSCRIPTION ORDER FORM (‘SOF’) OR ANY DOCUMENT THAT REFERENCES THESE TERMS, INCLUDING ANY FREE TRIAL OR FREE ACCOUNT, YOU AGREE TO BE BOUND BY THESE TERMS, AND CONDITIONS SET FORTH BELOW WHICH ARE TO BE READ IN CONJUNCTION WITH OUR PRIVACY POLICY. THESE TERMS OF SERVICE (‘TERMS’) FORM A LEGALLY BINDING AGREEMENT BETWEEN YOU (HEREINAFTER ‘YOU’ OR ‘USER’ OR ‘SUBSCRIBER’ IF REGISTERED FOR A PAID PLAN) AND ZLENDO TECHNOLOGIES PRIVATE LIMITED (‘ZLENDO’, ‘WE’, ‘US’ OR ‘OUR’). IF YOU ARE A CONSUMER LOCATED IN THE EUROPEAN ECONOMIC AREA, UNITED KINGDOM, AUSTRALIA JAPAN OR ANY OTHER JURISDICTION THAT GRANTS MANDATORY STATUTORY RIGHTS THAT CANNOT BE WAIVED BY CONTRACT, NOTHING IN THESE TERMS SHALL LIMIT OR EXCLUDE SUCH RIGHTS.</p>

                <p>If you are entering into this Agreement on behalf of a company or other legal entity (the ‘Subscriber’) in relation to the services offered through the website zlendorealty.com then you must represent that you have the authority to bind such entity and its affiliates to these Terms. In that case, the terms ‘You’, ‘Your’ or ‘Subscriber’ refer to such an entity and its affiliates. Where you do not have such authority, or do not agree with these Terms, you must not accept this Agreement or use the Services.</p>

                <p>Zlendo may modify these Terms at any time, and such modifications shall be effective thirty (30) days after posting of the modified Agreement on the Platform, or upon such earlier date as notified to you by email. Your continued access or use of the Platform and/or Services after the effective date of the modification shall constitute your acceptance of the modified Terms; provided, however, that where Applicable Laws require affirmative consent for material modifications, Zlendo shall obtain such consent before the changes take effect.</p>

                <p>User and Zlendo shall hereinafter be jointly referred to as the ‘Parties’ and individually as a ‘Party’.</p>
            </div>
        )
    },
    {
        id: 'definitions',
        title: '1. DEFINITIONS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p><strong className="text-zlendo-grey-dark">Agreement:</strong> This Terms of Services document, including all schedules, exhibits, SOF to which these Terms are appended and all policies incorporated by reference (e.g., Privacy Policy).</p>
                <p><strong className="text-zlendo-grey-dark">Applicable Laws:</strong> All statutes, enactments, acts of the legislature or parliament, laws, ordinances, rules, by-laws, regulations, circulars, notifications, guidelines, policies, directions, directives, and orders of any governmental authority, as may be applicable to you and/or Zlendo.</p>
                <p><strong className="text-zlendo-grey-dark">Authorized User:</strong> An individual user authorized by the Subscriber (e.g., employee, contractor, consultant) to access and use the Zlendo Platform / Services pursuant to this Agreement.</p>
                <p><strong className="text-zlendo-grey-dark">Platform / Site:</strong> The websites (e.g., www.zlendorealty.com), mobile applications, web interfaces, APIs, documentation, servers, and software infrastructure owned, registered, and operated by Zlendo.</p>
                <p><strong className="text-zlendo-grey-dark">Services:</strong> Zlendo’s proprietary cloud-based product (Zlendo Realty) and any new Services to which Subscriber may subscribe, including all associated updates, modifications, and improvements.</p>
                <p><strong className="text-zlendo-grey-dark">Confidential Information:</strong> Any and all information and materials, whether oral, written, graphic, magnetic, electronic, or other forms, disclosed or to be disclosed by either Party (‘Disclosing Party’) to other Party and its Representatives (‘Receiving Party’), which is not generally known to the public and/or is not readily ascertainable by proper means, and which relates to, without limitation: Disclosing Party’s legal structure, shareholding pattern, tax positions, and any other similar corporate governance information, technical data including know-how, research, product or service ideas or plans, software codes and designs, algorithms, developments, inventions, laboratory notebooks, processes, formulas, techniques, mask works, engineering designs and drawings, hardware configuration information, intellectual property details, including patents, trademarks, copyrights, trade secrets, and any pending or future applications or registrations related to these assets, agreements with third parties, lists of, or information relating to, employees, clients and consultants of the Disclosing party (including, but not limited to, the names, contact information, jobs, compensation, and expertise of such employees and consultants), lists of, or information relating to, suppliers and customers, price lists, pricing methodologies, cost data, market share data, marketing plans, licenses, contract information, business plans, financial forecasts, historical financial data, budgets or any information disclosed which is designated in writing to be confidential or proprietary, or which information would, under the circumstances, appear to a reasonable person to be confidential or proprietary. Notwithstanding any failure to so identify it, however, all of Zlendo’s emails, documents, platform data, research, processes, cyber security details, and personnel details shall be Confidential Information of Zlendo and all of the counterparty’s emails, documents, user data, platform data, research, processes shall be Confidential Information of Counterparty. Confidential Information excludes information that (i) is or became generally available to the public, through no fault of the Receiving Party and without breach of this Agreement, (ii) is or was already in the possession of the Receiving Party without restriction and prior to any disclosure by the Disclosing Party, (iii) is or has been lawfully disclosed to the Receiving Party by a third party without an obligation of confidentiality upon the Recipient, or (iv) is disclosed under legal or regulatory obligation, with prior written notice to the Disclosing Party, if permissible.</p>
                <p><strong className="text-zlendo-grey-dark">Intellectual Property Rights (IPR):</strong> Any and all rights under applicable intellectual property laws in any jurisdiction, whether registered or unregistered, including but not limited to ideas, concepts, creations, discoveries, domain names, inventions, improvements, know-how, trade or business secrets; patents, copyright (including all copyright in any designs and any moral rights), trademarks, service marks, designs, utility models, tools, devices, models, methods, procedures, processes, systems, principles, algorithms, works of authorship, flowcharts, drawings, books, papers, models, sketches, formulas, technologies, techniques, electronic codes, proprietary techniques, research projects, and other confidential and proprietary information, computer programming code, databases, software programs, data, documents, instruction manuals, records, memoranda, notes, user guides; in either printed or machine-readable form, whether or not copyrightable, registerable or patentable.</p>
                <p><strong className="text-zlendo-grey-dark">User Content:</strong> Any data, information, documents, or other materials input, submitted, uploaded, or processed by Subscriber or its Authorized Users using the Zlendo Platform, including User uploaded content and User generated content.</p>
            </div>
        )
    },
    {
        id: 'eligibility',
        title: '2. ELIGIBILITY AND ACCOUNT REGISTRATION',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>You must be at least 18 years old and of legal age to enter into a binding agreement to access or use the Platform and Services.</li>
                <li>To access or use the Services/Platform, you need to sign up for a user account by providing all required information, which must be true, accurate, current and complete. You are responsible for all activities that occur on the Platform under your account. You must maintain the security and confidentiality of your password and other sensitive information.</li>
                <li>Zlendo reserves the right, in its sole discretion, to approve or refuse registration for any person. You agree that Zlendo may terminate your user account and refuse current or future use of any or all of the Services if you provide any information that is untrue, inaccurate, outdated or incomplete, or if Zlendo has reasonable grounds to suspect such.</li>
            </ol>
        )
    },
    {
        id: 'usage-rights',
        title: '3. USAGE RIGHTS AND RESTRICTIONS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li>Zlendo grants the Subscriber a revocable, non-exclusive, non-transferable right to access and use the Services solely for its internal business purposes during the Subscription Term, subject to full compliance with this Agreement.</li>
                    <li><strong className="text-zlendo-grey-dark">Restrictions on Use:</strong> The Subscriber and its Authorized Users shall not, directly or indirectly:
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-[16px]">
                            <li>Copy, modify, distribute, sublicense, transfer, sell, lease, assign, reverse engineer, disassemble or decompile the Platform or underlying software, except as expressly permitted by law.</li>
                            <li>Use the Platform for any competitive purposes, including benchmarking, competitive analysis or developing competing products or services.</li>
                            <li>Use the Services to transmit, upload, publish, or store material containing software viruses, worms, Trojan horses or other harmful computer codes, files, scripts or programs.</li>
                            <li>Interfere with, disrupt, compromise or overburden the Platform’s security, infrastructure, system integrity, performance or availability.</li>
                            <li>Use any automatic or manual process, such as robots, spiders, or scrapers, to monitor or harvest information from the Platform, unless expressly permitted.</li>
                            <li>Circumvent or attempt to circumvent Usage Limits specified in the Subscription Plan or share Authorized User licenses among multiple individuals.</li>
                            <li>Use the Services for any unlawful, illicit, or immoral purpose, or to upload or transmit material that is defamatory, obscene, infringing, or violates privacy rights.</li>
                        </ul>
                    </li>
                    <li>The Subscriber and its Authorized Users while accessing, browsing or otherwise using this Platform shall not host, display, upload, modify, publish, transmit, store, update or share any information that:
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-[16px]">
                            <li>belongs to another person and to which you do not have any right.</li>
                            <li>is grossly harmful, abusive, insulting or harassing on the basis of gender, blasphemous, defamatory, obscene, pornographic, paedophilic, libelous, invasive of another's privacy including bodily privacy, hateful, or racially or ethnically objectionable, disparaging, relating to or encouraging money laundering or gambling, or otherwise inconsistent with or contrary to the laws in force in any manner whatever.</li>
                            <li>infringes any patent, trademark, copyright, design or other proprietary/intellectual property rights of Zlendo or of any third party.</li>
                            <li>violates any law for the time being in force.</li>
                            <li>deceives or misleads the addressee about the origin of such messages or knowingly or intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact or is grossly offensive or menacing in nature.</li>
                            <li>misrepresents, impersonates or falsely claims affiliation with any person or entity.</li>
                            <li>constitutes spam, scam, phishing, or any activity intended to defraud users or prospective users.</li>
                            <li>solicits passwords, OTPs, banking details or other personal data for commercial or unlawful purposes or discloses another person’s personal information without their consent.</li>
                            <li>threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.</li>
                            <li>is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person.</li>
                        </ul>
                    </li>
                    <li><strong className="text-zlendo-grey-dark">User generated content and takedown rights:</strong>
                        <ol className="list-[lower-roman] pl-6 mt-1 space-y-2">
                            <li>To the extent Users upload, submit, or transmit any content to the Platform (‘User-Generated Content’ or ‘UGC’), the User represents and warrants that such content does not infringe any third-party intellectual property, privacy, or other rights, and does not violate Applicable Laws.</li>
                            <li>Zlendo acts as an intermediary platform with respect to UGC and does not exercise editorial control over such content. Zlendo shall not be liable for UGC posted by Users, except to the extent required by Applicable Laws.</li>
                            <li><strong className="text-zlendo-grey-dark">Notice and Takedown:</strong> If you believe that any content on the Platform infringes your intellectual property or other rights, you may submit a notice to Zlendo at [support@zlendorealty.com] identifying the infringing content, your ownership or authorisation in respect of such content, and a statement of your good faith belief that the use is unauthorised. Zlendo shall act expeditiously to review and, where appropriate, remove or disable access to the reported content in accordance with Applicable Laws.</li>
                            <li><strong className="text-zlendo-grey-dark">Counter-Notice:</strong> Where applicable, a User whose content has been removed may submit a counter notice. Zlendo shall process counter notices in accordance with Applicable Laws.</li>
                        </ol>
                    </li>
                </ol>
            </div>
        )
    },
    {
        id: 'electronic-communications',
        title: '4. ELECTRONIC COMMUNICATIONS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Should you elect to send or receive e-mail communications of any kind to or from Zlendo, you represent and warrant that your e-mail service has appropriate and adequate security systems necessary to prevent unauthorized access to outbound or inbound e-mail transmissions. You further agree that the content in any e-mail or other electronic communication including but not limited to the communications between you and any other person using our Services, which include email communications, short messaging service updates, telephone calls, chat room and discussion board communications, instant message communications, fax-mail communications, etc. you receive from is subject to the provisions of this Agreement.</p>
            </div>
        )
    },
    {
        id: 'fees-payment',
        title: '5. FEES AND PAYMENT TERMS',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>Use of the Platform / Services is subject to the payment of the fees detailed in the applicable Subscription Plan or SOF.</li>
                <li>Fees are typically due and payable as on the invoice date and are non-refundable, whether or not the Platform / Services are actively being used, subject to the mandatory cooling off and refund rights set out in Zlendo Realty’s Refund and Cancellation Policy and as required under Applicable Laws.</li>
                <li><strong className="text-zlendo-grey-dark">Late Payments and Non Payments:</strong> Late payments are subject to interest at a rate of 12% per annum or the highest rate permitted by law. Non-payment of undisputed fees will be treated as a material breach of these Terms and Zlendo shall have all the right to pursue remedies as provided under this Agreement or in law, including but not limited to termination/suspension of services.</li>
                <li><strong className="text-zlendo-grey-dark">Taxes:</strong> All fees are exclusive of applicable taxes (such as GST, VAT, sales tax, etc.). You agree to pay Zlendo such Taxes in addition to the subscription fees, and Zlendo will invoice you accordingly.</li>
                <li><strong className="text-zlendo-grey-dark">Auto-Renewal:</strong> Subscription Plans may automatically renew at the end of each Subscription Term unless the customer cancels the subscription at any time prior to the next subscription renewal date. Zlendo shall provide you with notice of the upcoming auto-renewal and the applicable fees at least fifteen (15) days prior to the renewal date.</li>
                <li><strong className="text-zlendo-grey-dark">No Refunds:</strong> Refund rights are governed by Zlendo Realty’s Refund and Cancellation Policy, which forms an integral part of these Terms.</li>
                <li><strong className="text-zlendo-grey-dark">Subscription Cancellation:</strong> Users may cancel their subscription at any time through their account settings or other designated channels. Upon cancellation, access to the platform may continue until the end of the current billing period, as applicable. Cancellation only stops future renewals. For refund entitlements upon cancellation including mandatory cooling off periods, see the Refund and Cancellation Policy.</li>
            </ol>
        )
    },
    {
        id: 'customisation',
        title: '6. CUSTOMISATION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Zlendo is a standard cloud-based SaaS product offered on an ‘as-is’ basis, inclusive of all existing in-app features and standard integrations available under the applicable subscription plan. As a SaaS platform, Zlendo does not offer whitelabelling, branding, or theme level customisations and permits only feature level configurations already available within the application, based on the Users subscription category.</p>
                <p>Any new feature or integration that is not part of the existing Platform may incur additional charges and require separate timelines, subject to Zlendo’s product roadmap & vision. Such requests will not affect the agreed-upon implementation timelines or go-live date, and any resulting delays cannot be attributed to Zlendo.</p>
                <p>Feature requests are evaluated for inclusion in the product roadmap if they are commonly requested by a significant portion of our customer base, contribute meaningfully to the platform’s value proposition, and are technically feasible. All such decisions remain at the sole discretion of Zlendo.</p>
            </div>
        )
    },
    {
        id: 'ipr',
        title: '7. INTELLECTUAL PROPERTY RIGHTS AND CONTENT OWNERSHIP',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>The entire contents of the Platform are protected by applicable copyright and trademark laws. The owner of the copyrights and trademarks is Zlendo, its affiliates, or third-party licensors. All rights, title, and interest in and to the Platform, including all Intellectual Property Rights arising out of it (including updates, modifications, and derivative works), are owned by Zlendo or its licensors.</li>
                <li><strong className="text-zlendo-grey-dark">User Content Ownership:</strong> You retain all ownership rights, title, and interest in the User Content created or stored by you.</li>
                <li><strong className="text-zlendo-grey-dark">License to Zlendo:</strong> You grant Zlendo a limited, non-exclusive, sub-licensable, royalty-free, and worldwide license to access and use the User Content solely for the provision of the Services, including maintenance, improvement, and bug fixes, and as otherwise required to perform its obligations under this Agreement.</li>
                <li><strong className="text-zlendo-grey-dark">Subscriber Input/Feedback:</strong> If you submit any feedback, suggestions, customisation requests, comments, or other inputs relating to the Platform (“Feedback”), you acknowledge and agree that: (a) you do not retain any right, title, or interest in such Feedback; and (b) Zlendo may, at its discretion, choose to use, modify, implement, or disregard such Feedback for the purposes of operating, improving, or developing the Zlendo Services, without any obligation or payment to you.</li>
            </ol>
        )
    },
    {
        id: 'confidentiality',
        title: '8. CONFIDENTIALITY',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>Receiving Party shall maintain the confidentiality of Disclosing Party’s Confidential Information using at minimum the same degree of care the Receiving Party use to protect its own information, but no less than reasonable care, and shall not disclose it to any third party except as required to perform obligations or exercise rights under this Agreement.</li>
                <li>Receiving Party shall not use Confidential Information except as necessary to perform its obligations or exercise its rights under this Agreement and shall not use it to gain any unfair advantage over Disclosing Party. Upon termination or request, all tangible and digital copies of Confidential Information must be returned or destroyed.</li>
            </ol>
        )
    },
    {
        id: 'disclaimer-warranties',
        title: '9. DISCLAIMER OF WARRANTIES',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>You expressly understand and agree that the use of the Services is at your sole risk. The Platform and related information are provided ‘as is’, ‘as available’ and with ‘all faults’ without warranties of any kind, whether express or implied, to the maximum extent permitted by applicable law.</li>
                <li>Zlendo expressly disclaims all implied warranties, including without limitation warranties of title, non-infringement, merchantability, or fitness for a particular purpose. However, nothing in this clause shall exclude or limit warranties, conditions, or guarantees that cannot be excluded under Applicable Laws.</li>
                <li>Zlendo does not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that defects will be corrected. You assume total responsibility and risk for your use of the Platform and the internet.</li>
            </ol>
        )
    },
    {
        id: 'limitation-liability',
        title: '10. LIMITATION OF LIABILITY',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>In no event will Zlendo be liable for any incidental, consequential, indirect, special, punitive, exemplary, or other damages whatsoever (including, but not limited to, damages for loss of profits, loss of goodwill, business interruption, loss of programs or information, or unauthorized access to data), arising out of the use of or inability to use the Service, even if Zlendo has been advised of the possibility of such damages. This exclusion shall apply to the maximum extent permitted by Applicable Laws. It shall not apply to liability that cannot be excluded under Applicable Laws, such as liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation by Zlendo.</p>
                <p>Zlendo’s entire aggregate liability to you in respect of any claim arising out of or relating to the Platform and/or the Services shall not exceed the value of the aggregate of all amounts paid by the Subscriber to Zlendo in the one (1) month preceding the first event giving rise to such claim or action, or ten thousand rupees ($ 100), whichever is lower.</p>
            </div>
        )
    },
    {
        id: 'indemnification',
        title: '11. INDEMNIFICATION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>You agree to indemnify, defend, and hold harmless Zlendo, its officers, directors, employees, agents, licensors, suppliers, and affiliates (collectively, ‘Affiliated Parties’) from and against all losses, expenses, damages, claims, and costs, including reasonable attorneys' fees, resulting from any violation of this Agreement (including negligent or wrongful conduct) by you or any Authorized User, or arising out of:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Your unauthorized or improper use of the Services or Platform;</li>
                    <li>Any claim arising from or relating to your User Content, including intellectual property infringement or privacy violations;</li>
                    <li>Any claim arising from your breach of these Terms;</li>
                    <li>Your breach of your obligations under this Agreement including but not limited to confidentiality obligations.</li>
                </ul>
                <p>This indemnification obligation shall not apply to the extent that it would constitute an unfair contract term under Applicable Laws, and shall be limited to losses arising from the User’s breach of these Terms, negligence or wilful misconduct.</p>
            </div>
        )
    },
    {
        id: 'third-party',
        title: '12. THIRD-PARTY SERVICES AND RESOURCES',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>The Platform may include content, integrations, documents, tools or links to third-party applications, software, or websites (‘Third-Party Services’).</li>
                <li>Zlendo makes no representations or warranties regarding Third-Party Services and disclaims all liability for any interruptions, errors, or damages arising from their use.</li>
                <li>Your use of Third-Party Services is subject to the respective terms and conditions of such third parties, which you are responsible for reviewing and accepting. Zlendo does not operate, control or endorse any information, products, or services offered by third parties through the Platform.</li>
            </ol>
        )
    },
    {
        id: 'term',
        title: '13. TERM',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p><strong className="text-zlendo-grey-dark">For Services procured via an SOF:</strong></p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li>This Agreement shall remain in effect for the initial Term specified therein (‘Subscription Term’).</li>
                    <li>Thereafter, this Agreement shall automatically renew for successive terms of equal duration to the Initial Term (each renewal term, a ‘Subscription Term’), unless either party provides the other party with written notice of its intent not to renew at least thirty (30) days prior to the expiration of the then-current Term.</li>
                    <li>Upon any renewal, the recurring fees shall be subject to an increase, the extent of which will be mutually discussed and agreed upon by Zlendo and the Subscriber. Notwithstanding the foregoing, any downgrade in subscription scope including but not limited to volume, plan, term, or billing cycle may be subject to re-pricing at the time of renewal, regardless of prior Subscription Term pricing.</li>
                </ol>
                <p>For non-subscribed access, this Agreement is effective and binding upon the User’s initial access to, use of, or registration for the Zlendo Website or Platform, including any associated free services or trials.</p>
            </div>
        )
    },
    {
        id: 'termination',
        title: '14. TERMINATION',
        content: (
            <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify">
                <li>Either Party may terminate this Agreement for cause by providing thirty (30) days’ written notice to the other Party if the other Party materially breaches this Agreement and fails to remedy such breach within the notice period, subject to Zlendo Realty’s Refund & Cancellation Policy.</li>
                <li>Zlendo may terminate this Agreement and/or suspend the User Account and access to the Services, immediately upon written notice, if the Subscriber/User:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>is reasonably suspected of engaging in illegal, fraudulent or abusive activities, or acts prejudicial to Zlendo’s interests or is believed to have violated any material provision of this Agreement.</li>
                        <li>is subject to bankruptcy or insolvency proceedings, or ceases or threatens to cease business operations; or</li>
                        <li>fails to pay undisputed fees when due.</li>
                    </ul>
                </li>
                <li><strong className="text-zlendo-grey-dark">Consequences of Termination:</strong> Upon termination of this Agreement for any reason:
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>All outstanding and undisputed fees owed by the Subscriber to Zlendo shall immediately become due and payable.</li>
                        <li>The User’s access and right to use the Platform and/or Services shall immediately cease.</li>
                    </ul>
                </li>
                <li><strong className="text-zlendo-grey-dark">Data Retrieval and Deletion:</strong> Zlendo may delete all data associated with the User Account. Zlendo shall retain such data for a period of thirty (30) days from the date of cancellation. Access to the Platform for the purpose of retrieving such data (except for the retrieval of personal data) shall be available only upon renewal of the subscription, and no access shall be provided during the retention period unless the subscription is renewed.</li>
                <li><strong className="text-zlendo-grey-dark">Refunds:</strong> If the Subscriber terminates this Agreement due to Zlendo’s material breach, the Subscriber shall be entitled to a prorated refund of any prepaid fees covering the unused portion of the Subscription Term. For terminations initiated by the Subscriber without cause or for reasons other than Zlendo’s breach, refund entitlements shall be determined in accordance with the Refund & Cancellation Policy and Applicable Laws.</li>
                <li>All provisions of this Agreement which by their nature are intended to survive termination, including but not limited to clauses relating to Confidential Information, Limitation of Liability, and Indemnification, shall remain in full force and effect for a period of 2 years after such termination / expiry of Agreement.</li>
            </ol>
        )
    },
    {
        id: 'governing-law',
        title: '15. GOVERNING LAW AND DISPUTE RESOLUTION',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>This Agreement shall be governed by and construed in accordance with the laws of India. However, this choice of law shall not deprive Users who are consumers of the protection afforded to them by provisions that cannot be derogated from by agreement under the law of their country of habitual residence, including mandatory consumer protection and data protection laws.</p>
                <p>In case of any dispute or difference either in interpretation or otherwise, of any terms of these Terms between the parties hereto, the parties shall attempt to resolve the same through discussion. In case the parties fail to arrive at an amiable solution through discussion, the same shall be referred to Arbitration at the request of either Party in writing, in accordance with the provisions of Arbitration and Conciliation Act, 1996, as amended from time to time. The arbitration shall be conducted by a sole Arbitrator to be mutually appointed between the Parties and decision of the arbitrator shall be final and binding on the parties hereto. The seat and venue of arbitration shall be Madurai, Tamil Nadu, India. The rights and remedies provided in these Terms are cumulative and are in addition to and not in substitution for any other rights and remedies available at law or in equity.</p>
            </div>
        )
    },
    {
        id: 'ai-estimates',
        title: '16. USE OF AI AND ESTIMATES (ZLENDO REALTY)',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <ol className="list-[lower-alpha] pl-6 space-y-4">
                    <li>Zlendo Realty provides AI-powered tools for real estate design, converting 2D plans to 3D, creating virtual reality walkthroughs (VR Studio), offering Vaastu recommendations, cost estimation (BoQ), and API integrations.</li>
                    <li><strong className="text-zlendo-grey-dark">AI Functionality:</strong> Zlendo Realty utilizes AI-powered features, such as 2D to 3D conversion, AI Room Inspiration, and Vaastu Layout Optimization, solely to assist the User and is provided on an “as is” and “as available” basis. Vastu Evaluation is based on room size analysis, directional placement checks, positional logic for rooms, etc. and the suggestions are presented in report format and are purely advisory in nature. Such outputs do not constitute and shall not be construed as religious guidance, architectural advice, engineering advice, legal advice, regulatory approval, or construction certification. No religious, legal, structural, or construction guarantees, warranties, or representations, express or implied, are made in relation to any AI-generated output, and all final decisions and implementations remain the sole responsibility of the User.</li>
                    <li><strong className="text-zlendo-grey-dark">Accuracy Disclaimer:</strong>
                        <ol className="list-[lower-roman] pl-6 mt-2 space-y-2">
                            <li>The AI-powered features and tools may not always provide accurate, complete, or current suggestions and information, and are provided on an “as is” and “as available” basis solely for reference purposes. You are solely responsible for verifying the accuracy and suitability of outputs, including but not limited to Vaastu recommendations, designs, costs, estimates, material specifications, and compliance with local regulations before acting upon or commencing construction.</li>
                            <li>Without limitation, any prices, cost references, material rates, assets, products, fixtures, finishes, or vendor-related information displayed on the Zlendo Realty platform are not owned, manufactured, supplied, or warranted by Zlendo. Such assets or pricing information may be sourced through third-party APIs, external databases, or uploaded directly by third-party businesses or partners, and Zlendo does not control, verify, or assume responsibility for their accuracy, availability, quality, suitability, servicing, performance, or pricing.</li>
                            <li>All construction, interior, and project cost estimations generated by the Platform are indicative, system-generated, and based on assumptions, user inputs, and prevailing reference data at the time of estimation. Actual costs may vary materially due to factors including, without limitation, market price fluctuations, regional variations, supplier pricing, taxes, availability of materials, labour costs, scope changes, site conditions, and time-based price escalations. Zlendo does not guarantee that estimated costs will match actual or final project costs, and no reliance should be placed on such estimates as fixed or binding pricing.</li>
                            <li><strong className="text-zlendo-grey-dark">Disclaimer regarding non-English language:</strong> The Platform is optimised to process inputs in the English language, and outputs may be inaccurate, incomplete, or unrecognised where floor plans or related inputs are provided in any non-English language. Users assume sole responsibility for verifying any outputs generated from non-English inputs.</li>
                        </ol>
                    </li>
                    <li><strong className="text-zlendo-grey-dark">Professional Disclaimer:</strong> Zlendo Realty is provided solely as a software-based design, visualization, and estimation tool. Zlendo Realty is not a licensed architect, structural engineer, contractor, or construction professional, and does not provide architectural, structural, engineering, legal, or regulatory advice. The platform does not obtain, grant, or imply any regulatory, statutory, or governmental approvals. All designs, layouts, visualizations, walkthroughs, estimations, and other outputs generated through the platform are indicative, system-generated, and dependent on user inputs. Users are required to independently consult and engage qualified architects, engineers, contractors, and other relevant professionals before undertaking any construction, execution, or implementation. The visual realism, accuracy, or detail of any rendering, image, or walkthrough does not represent or guarantee construction feasibility, structural safety, cost accuracy, or compliance with applicable laws or standards.</li>
                    <li><strong className="text-zlendo-grey-dark">Cost Estimation/BoQ:</strong> While Zlendo Realty aims to give real-time cost estimation and BoQ, the initial quote or estimate provided is an approximation and the exact value may depend on site conditions, measurements, scope of work, brick type, concrete grade, wood type, steel size and specification, changes in designs/materials, etc.. The estimation includes components such as Footing construction and materials, columns, slabs, structural material quantities, electrical wiring and accessories, plumbing materials and routing quantities derived from layout and fixtures, lights, fans, fixtures, electrical accessories, etc. Zlendo does not guarantee quotes and the same shall not be treated as a substitute for professional financial, legal, or construction advice. Zlendo shall not be liable for variances between estimated costs and final project costs.</li>
                    <li><strong className="text-zlendo-grey-dark">Rendering, Image, and Video Output Disclaimer:</strong>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>All rendered images, walkthrough videos, visualisations, and other media generated through Zlendo Realty are system-generated outputs created for visual representation and reference purposes only. Such renders are illustrative in nature and may not accurately reflect real-world construction conditions, material availability, finishes, lighting behaviour, dimensions, structural feasibility, workmanship, or on-site execution outcomes. Visual realism, level of detail, or apparent accuracy in any rendered output shall not be construed as a representation or warranty of constructability, performance, safety, durability, regulatory compliance, or final build quality.</li>
                            <li>The rendering server operates between 8:00 a.m. IST and 12:00 a.m. IST. If a user submits a rendering request at or after 11:00 p.m. IST on any day, the rendering queue shall commence processing after 8:30 a.m. IST on the next day, and the relevant outputs shall be generated thereafter.</li>
                            <li>Zlendo does not guarantee that rendered images or videos will match actual constructed outcomes, nor does it assume responsibility for discrepancies arising due to design changes, site conditions, material substitutions, execution methods, vendor variations, or interpretation of rendered media. Users are solely responsible for validating all designs, specifications, quantities, and visual outputs with qualified architects, engineers, contractors, and other professionals prior to execution or reliance. No reliance shall be placed on any rendered output for construction, procurement, or regulatory purposes.</li>
                        </ul>
                    </li>
                </ol>
                <p><strong className="text-zlendo-grey-dark">AI outputs:</strong> The disclaimers in this section do not exclude or limit Zlendo’s liability that cannot be excluded under Applicable Laws and these disclaimers shall be read as limiting liability to the maximum extent permitted by law.</p>
            </div>
        )
    },
    {
        id: 'vendor-disclaimer',
        title: '17. VENDOR AND PHYSICAL SERVICES DISCLAIMER',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>If the Services include connecting you to independent vendors or contractors (‘Third-Party Vendors’) for physical services such as installation, construction, or customized work:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                    <li><strong className="text-zlendo-grey-dark">Facilitation Role:</strong> Zlendo acts solely as a facilitator between you and the Third-Party Vendor for enabling such Custom Work or installation.</li>
                    <li><strong className="text-zlendo-grey-dark">Vendor Liability:</strong> Third-Party Vendors are responsible for their products or services supplied, including quality, safety, suitability, descriptions, and performance. Zlendo is not responsible for the acts, omissions, products, or services provided by these Third-Party Vendors. Any warranty concerning physical installation, civil work, or non-woodwork items is typically provided by the respective Third-Party Vendor, or as set out in the specific Works Contract you enter into with such vendors.</li>
                    <li><strong className="text-zlendo-grey-dark">Unauthorised Transactions:</strong> You shall not solicit, engage, or encourage any Third-Party Vendor to provide or avail the same or similar services independently, bypassing the Zlendo Platform. Any transactions or payments made without booking through Zlendo Platform shall be deemed “Unauthorised Transactions” and Zlendo shall have no liability for such transactions.</li>
                    <li><strong className="text-zlendo-grey-dark">Delivery Estimates:</strong> If Zlendo provides a project timeline commitment, this date is an estimate and may be subject to preconditions (such as Customer’s Site Readiness Checklist compliance, and full payment of required installments). Zlendo shall not be liable for delays caused by the Customer or due to a Force Majeure event.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'injunctive-relief',
        title: '18. INJUNCTIVE RELIEF',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>The Parties agree that breaches of confidentiality, non-use, or other obligations under this Agreement causing irreparable harm shall entitle the affected Party to seek injunctive relief or specific performance. The Parties acknowledge that monetary damages alone may be inadequate to remedy such breaches. This right is in addition to any other remedies that the affected Party may have at law or in equity.</p>
            </div>
        )
    },
    {
        id: 'non-disparagement',
        title: '19. NON-DISPARAGEMENT',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>During and after the term of this Agreement, both Parties shall act in good faith. They shall refrain from making or publishing any false, misleading, derogatory, defamatory, or otherwise harmful statements about the other Party, its services, personnel, or business. This prohibition applies whether the statements are made publicly or privately on any digital/public platforms.</p>
            </div>
        )
    },
    {
        id: 'amendments',
        title: '20. AMENDMENTS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>No provision of this Agreement may be terminated, modified or waived, by course of dealing or otherwise, unless such termination, modification or waiver is set forth in a written agreement referencing this Agreement and is executed by an authorized representative of both Parties.</p>
            </div>
        )
    },
    {
        id: 'force-majeure',
        title: '21. FORCE MAJEURE',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Neither Party shall be liable for delays or failures in performance due to causes beyond its reasonable control, including but not limited to natural disasters (e.g., flooding, earthquake, hurricane), government actions, wars, riots, strikes, lockouts, epidemic, pandemic, or other concerted acts of workmen or acts of God.</p>
            </div>
        )
    },
    {
        id: 'notices',
        title: '22. NOTICES',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>All notices under this Agreement must be in writing. Notices to Zlendo concerning this Agreement should be sent to [support@zlendorealty.com], or to Zlendo’s registered address. Notices to Subscriber must be sent addressing the email address of the representative as provided in the SOF, unless otherwise agreed in writing by the Parties.</p>
            </div>
        )
    },
    {
        id: 'assignment',
        title: '23. ASSIGNMENT',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>You shall not assign or transfer your rights or obligations under this Agreement without the prior written consent of Zlendo. However, Zlendo may assign its rights and duties under this Agreement to any party at any time without notice to you.</p>
            </div>
        )
    },
    {
        id: 'conflict-terms',
        title: '24. CONFLICT OF TERMS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>Notwithstanding anything to the contrary, any separately executed agreement/SOF between Zlendo and User shall govern and prevail over these Terms in the event of any conflict.</p>
            </div>
        )
    },
    {
        id: 'waiver',
        title: '25. WAIVER',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>No failure or delay by either Party in exercising any right, power or remedy under this Agreement shall operate as a waiver of any such right, power or remedy. The waiver by either Party of any breach or default hereunder shall not be deemed a waiver of any subsequent breach or default.</p>
            </div>
        )
    },
    {
        id: 'severability',
        title: '26. SEVERABILITY',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>The invalidity or unenforceability of any provision of this Agreement shall not affect the validity or enforceability of the Agreement as a whole, which shall remain in full force and effect. If any provision is found to be invalid or unenforceable, the Agreement shall be construed as if it does not contain that specific provision. Furthermore, the Parties agree to collaborate in good faith to replace any invalid or unenforceable provision with one that is valid and enforceable and achieves, to the maximum extent legally permissible, the same objective as the provision deemed invalid or unenforceable.</p>
            </div>
        )
    },
    {
        id: 'independent-contractors',
        title: '27. INDEPENDENT CONTRACTORS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>The Parties are independent contractors, and nothing contained in this Agreement shall be construed to constitute the parties as partners, joint venturers, co-owners or otherwise as participants in a joint or common undertaking.</p>
            </div>
        )
    },
    {
        id: 'electronic-signatures',
        title: '28. ELECTRONIC SIGNATURES',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>The Parties agree that this Agreement and any other documents to be delivered in connection herewith may be executed by electronic means, via digital signatures. Such electronic execution shall be deemed to have the same legal effect as delivery of an original executed copy. The Parties further agree that electronic signatures shall be binding and enforceable to the same extent as physical, handwritten ("wet") signatures, in accordance with Applicable Laws.</p>
            </div>
        )
    },
    {
        id: 'jurisdiction-specific',
        title: '29. JURISDICTION SPECIFIC PROVISIONS',
        content: (
            <div className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed text-justify space-y-4">
                <p>The following provisions apply to Users in the specified jurisdictions and supplement the main body of these Terms. In the event of conflict between the main body and a jurisdiction-specific provision, the jurisdiction-specific provision shall prevail for Users in that jurisdiction.</p>
                <div className="space-y-6">
                    <div>
                        <p><strong className="text-zlendo-grey-dark">European Economic Area / United Kingdom:</strong></p>
                        <p className="text-sm mt-1">Nothing in these Terms shall exclude or restrict any rights or remedies available to you as a consumer under the EU Consumer Rights Directive (2011/83/EU), the Unfair Contract Terms Directive (93/13/EEC), the UK Consumer Rights Act 2015, or the UK Consumer Contracts Regulations 2013, including your right to cancel, your right to a remedy for faulty digital content, and your protection against unfair terms.</p>
                        <p className="text-sm mt-2">Zlendo confirms that, as required by the EU Digital Services Act, it provides a single point of contact for authorities and users at: [support@zlendorealty.com], and shall provide a transparency reporting mechanism as applicable.</p>
                    </div>
                    <div>
                        <p><strong className="text-zlendo-grey-dark">Australia:</strong></p>
                        <p className="text-sm mt-1">You are entitled to a replacement or refund only for a major failure and compensation for only reasonably foreseeable loss or damage.</p>
                    </div>
                    <div>
                        <p><strong className="text-zlendo-grey-dark">Japan:</strong></p>
                        <p className="text-sm mt-1">These Terms have been prepared in accordance with the obligation under the Japan’s Consumer Contract Act to ensure clauses are plain and clear. Zlendo shall not exclude liability for damages arising from Zlendo’s intentional misconduct or gross negligence, in accordance with the Consumer Contract Act. Any cancellation penalty or liquidated damages under these Terms shall not exceed the average damage that Zlendo would ordinarily incur from such cancellation, as required by the Consumer Contract Act.</p>
                    </div>
                    <div>
                        <p><strong className="text-zlendo-grey-dark">United Arab Emirates:</strong></p>
                        <p className="text-sm mt-1">These Terms shall be interpreted consistently with Federal Decree-Law No. 34 of 2023 on Consumer Protection (UAE). Zlendo shall not include terms that are manifestly unfair to consumers under UAE law.</p>
                    </div>
                    <div>
                        <p><strong className="text-zlendo-grey-dark">Singapore:</strong></p>
                        <p className="text-sm mt-1">These Terms shall be interpreted consistently with the Consumer Protection (Fair Trading) Act (Cap. 52A). Unfair practices, as defined therein, are not sanctioned by these Terms.</p>
                    </div>
                    <div>
                        <p><strong className="text-zlendo-grey-dark">Malaysia:</strong></p>
                        <p className="text-sm mt-1">These Terms shall be interpreted consistently with the Consumer Protection Act 1999 of Malaysia. Zlendo acknowledges that unfair contract terms within the meaning of Part IIIA of that Act are not enforceable against Malaysian consumers.</p>
                    </div>
                </div>
                <p className="mt-8 pt-8 border-t border-zlendo-grey-medium/10 text-sm text-zlendo-grey-medium/60 italic">
                    Last Updated: April 2026
                </p>
            </div>
        )
    }
];
