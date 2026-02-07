'use client';

import Link from 'next/link';
import { useCountry } from '@/lib/context/CountryContext';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, FileText } from 'lucide-react';
import type { PolicySection } from '@/lib/constants/policiesData';

const TermsPage = () => {
    const { getPath } = useCountry();

    // Terms of Service content embedded directly in the page
    const policy = {
        id: 'terms-of-service',
        slug: 'terms-of-service',
        title: 'Terms of Service',
        icon: FileText,
        category: 'legal' as const,
        description: 'Zlendo Realty Terms of Service - Understand the rules and regulations for using our services.',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'introduction',
                title: 'Introduction',
                content: [
                    'PLEASE READ THIS DOCUMENT CAREFULLY. BY ACCESSING OR USING THE ZLENDO REALTY WEBSITE, PLATFORM, OR SERVICES, OR EXECUTING A SUBSCRIPTION ORDER FORM (\'SOF\') OR ANY DOCUMENT THAT REFERENCES THESE TERMS, INCLUDING ANY FREE TRIAL OR FREE ACCOUNT, YOU AGREE TO BE BOUND BY THESE TERMS, AND CONDITIONS SET FORTH BELOW WHICH ARE TO BE READ IN CONJUNCTION WITH OUR PRIVACY POLICY.',
                    'THESE TERMS OF SERVICE (\'TERMS\') FORM A LEGALLY BINDING AGREEMENT BETWEEN YOU (HEREINAFTER \'YOU\' OR \'USER\' OR \'SUBSCRIBER\' IF REGISTERED FOR A PAID PLAN) AND ZLENDO TECHNOLOGIES PRIVATE LIMITED (\'ZLENDO\', \'WE\', \'US\' OR \'OUR\').',
                    'If you are entering into this Agreement on behalf of a company or other legal entity (the \'Subscriber\') in relation to the services offered through the website zlendorealty.com then you must represent that you have the authority to bind such entity and its affiliates to these Terms. In that case, the terms \'You\', \'Your\' or \'Subscriber\' refer to such an entity and its affiliates.',
                    'Zlendo may modify these Terms at any time, and such modifications shall be effective immediately upon posting of the modified Agreement on the Platform. Your continued access or use of the Platform and/or Services shall be deemed your conclusive acceptance of the modified Terms.',
                    'User and Zlendo shall hereinafter be jointly referred to as the \'Parties\' and individually as a \'Party\'.'
                ]
            },
            {
                id: 'definitions',
                title: '1. Definitions',
                content: [
                    'Agreement: This Terms of Services document, including all schedules, exhibits, SOF to which these Terms are appended and all policies incorporated by reference (e.g., Privacy Policy).',
                    'Applicable Laws: All statutes, enactments, acts of the legislature or parliament, laws, ordinances, rules, by-laws, regulations, circulars, notifications, guidelines, policies, directions, directives, and orders of any governmental authority, as may be applicable to you and/or Zlendo.',
                    'Authorized User: An individual user authorized by the Subscriber (e.g., employee, contractor, consultant) to access and use the Zlendo Platform / Services pursuant to this Agreement.',
                    'Platform / Site: The websites (e.g., www.zlendorealty.com), mobile applications, web interfaces, APIs, documentation, servers, and software infrastructure owned, registered, and operated by Zlendo.',
                    'Services: Zlendo\'s proprietary cloud-based product (Zlendo Realty) and any new Services to which Subscriber may subscribe, including all associated updates, modifications, and improvements.',
                    'Confidential Information: Any and all information and materials, whether oral, written, graphic, magnetic, electronic, or other forms, disclosed or to be disclosed by either Party (\'Disclosing Party\') to other Party and its Representatives (\'Receiving Party\'), which is not generally known to the public and/or is not readily ascertainable by proper means.',
                    'Intellectual Property Rights (IPR): Any and all rights under applicable intellectual property laws in any jurisdiction, whether registered or unregistered, including but not limited to ideas, concepts, creations, discoveries, domain names, inventions, improvements, know-how, trade or business secrets; patents, copyright, trademarks, service marks, designs, utility models, and other confidential and proprietary information.',
                    'User Content: Any data, information, documents, or other materials input, submitted, uploaded, or processed by Subscriber or its Authorized Users using the Zlendo Platform, including User uploaded content and User generated content.'
                ]
            },
            {
                id: 'eligibility',
                title: '2. Eligibility and Account Registration',
                content: [
                    'You must be at least 18 years old and of legal age to enter into a binding agreement to access or use the Platform and Services.',
                    'To access or use the Services/Platform, you need to sign up for a user account by providing all required information, which must be true, accurate, current, and complete. You are responsible for all activities that occur on the Platform under your account. You must maintain the security and confidentiality of your password and other sensitive information.',
                    'Zlendo reserves the right, in its sole discretion, to approve or refuse registration for any person. You agree that Zlendo may terminate your user account and refuse current or future use of any or all of the Services if you provide any information that is untrue, inaccurate, outdated, or incomplete, or if Zlendo has reasonable grounds to suspect such.'
                ]
            },
            {
                id: 'usage-rights',
                title: '3. Usage Rights and Restrictions',
                content: 'Zlendo grants the Subscriber a revocable, non-exclusive, non-transferable right to access and use the Services solely for its internal business purposes during the Subscription Term, subject to full compliance with this Agreement.',
                subsections: [
                    {
                        id: 'restrictions',
                        title: 'Restrictions on Use',
                        content: [
                            'The Subscriber and its Authorized Users shall not, directly or indirectly:',
                            'Copy, modify, distribute, sublicense, transfer, sell, lease, assign, reverse engineer, disassemble, or decompile the Platform or underlying software, except as expressly permitted by law.',
                            'Use the Platform for any competitive purposes, including benchmarking, competitive analysis, or developing competing products or services.',
                            'Use the Services to transmit, upload, publish, or store material containing software viruses, worms, Trojan horses, or other harmful computer codes, files, scripts, or programs.',
                            'Interfere with, disrupt, compromise, or overburden the Platform\'s security, infrastructure, system integrity, performance, or availability.',
                            'Use any automatic or manual process, such as robots, spiders, or scrapers, to monitor or harvest information from the Platform, unless expressly permitted.',
                            'Circumvent or attempt to circumvent Usage Limits specified in the Subscription Plan or share Authorized User licenses among multiple individuals.',
                            'Use the Services for any unlawful, illicit, or immoral purpose, or to upload or transmit material that is defamatory, obscene, infringing, or violates privacy rights.'
                        ]
                    },
                    {
                        id: 'prohibited-content',
                        title: 'Prohibited Content',
                        content: [
                            'The Subscriber and its Authorized Users while accessing, browsing or otherwise using this Platform shall not host, display, upload, modify, publish, transmit, store, update or share any information that:',
                            'belongs to another person and to which you do not have any right.',
                            'is grossly harmful, abusive, insulting or harassing on the basis of gender, blasphemous, defamatory, obscene, pornographic, pedophilic, libelous, invasive of another\'s privacy including bodily privacy, hateful, or racially or ethnically objectionable.',
                            'infringes any patent, trademark, copyright, design or other proprietary/intellectual property rights of Zlendo or of any third party.',
                            'violates any law for the time being in force.',
                            'deceives or misleads the addressee about the origin of such messages or knowingly or intentionally communicates any information which is patently false or misleading in nature.',
                            'misrepresents, impersonates or falsely claims affiliation with any person or entity.',
                            'constitutes spam, scam, phishing, or any activity intended to defraud users or prospective users.',
                            'threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order.'
                        ]
                    }
                ]
            },
            {
                id: 'electronic-communications',
                title: '4. Electronic Communications',
                content: 'Should you elect to send or receive e-mail communications of any kind to or from Zlendo, you represent and warrant that your e-mail service has appropriate and adequate security systems necessary to prevent unauthorized access to outbound or inbound e-mail transmissions. You further agree that the content in any e-mail or other electronic communication including but not limited to the communications between you and any other person using our Services, which include email communications, short messaging service updates, telephone calls, chat room and discussion board communications, instant message communications, fax-mail communications, etc. you receive from is subject to the provisions of this Agreement.'
            },
            {
                id: 'fees-payment',
                title: '5. Fees and Payment Terms',
                content: [
                    'Use of the Platform / Services is subject to the payment of the fees detailed in the applicable Subscription Plan or SOF.',
                    'Fees are typically due and payable as on the invoice date and are non-refundable, whether or not the Platform / Services are actively being used.',
                    'Late Payments and Non Payments: Late payments are subject to interest at a rate of 12% per annum or the highest rate permitted by law. Non-payment of undisputed fees will be treated as a material breach of these Terms.',
                    'Taxes: All fees are exclusive of applicable taxes (such as GST, VAT, sales tax, etc.). You agree to pay Zlendo such Taxes in addition to the subscription fees.',
                    'Auto-Renewal: Subscription Plans may automatically renew at the end of each Subscription Term unless the customer cancels the subscription at any time prior to the next subscription renewal date.',
                    'No Refund: All payments made towards subscriptions or services on the Zlendo Realty platform are non-refundable. Once a subscription is purchased, the subscription fee paid shall not be refunded under any circumstances.',
                    'Subscription Cancellation: Users may cancel their subscription at any time through their account settings. Upon cancellation, access to the platform may continue until the end of the current billing period. Cancellation does not entitle the user to refund of any subscription amount already paid or prorated refunds.'
                ]
            },
            {
                id: 'customisation',
                title: '6. Customisation',
                content: [
                    'Zlendo is a standard cloud-based SaaS product offered on an \'as-is\' basis, inclusive of all existing in-app features and standard integrations available under the applicable subscription plan. As a SaaS platform, Zlendo does not offer whitelabelling, branding, or theme level customisations and permits only feature level configurations already available within the application.',
                    'Any new feature or integration that is not part of the existing Platform may incur additional charges and require separate timelines, subject to Zlendo\'s product roadmap & vision.',
                    'Feature requests are evaluated for inclusion in the product roadmap if they are commonly requested by a significant portion of our customer base, contribute meaningfully to the platform\'s value proposition, and are technically feasible.'
                ]
            },
            {
                id: 'intellectual-property',
                title: '7. Intellectual Property Rights and Content Ownership',
                content: [
                    <span key="patent">The entire contents of the Platform are protected by applicable copyright, trademark laws and an exclusive patent has been filed vide <strong className="whitespace-nowrap">patent application no : 202541075322</strong> . The owner of the copyrights, trademarks and patent is Zlendo, its affiliates, or third-party licensors. All rights, title, and interest in and to the Platform, including all Intellectual Property Rights arising out of it, are owned by Zlendo or its licensors.</span>,
                    'User Content Ownership: You retain all ownership rights, title, and interest in the User Content created or stored by you.',
                    'License to Zlendo: You grant Zlendo a limited, non-exclusive, sub-licensable, royalty-free, and worldwide license to access and use the User Content solely for the provision of the Services.',
                    'Subscriber Input/Feedback: If you submit any feedback, suggestions, customisation requests, comments, or other inputs relating to the Platform ("Feedback"), you acknowledge and agree that: (a) you do not retain any right, title, or interest in such Feedback; and (b) Zlendo may, at its discretion, choose to use, modify, implement, or disregard such Feedback without any obligation or payment to you.'
                ]
            },
            {
                id: 'confidentiality',
                title: '8. Confidentiality',
                content: [
                    'Receiving Party shall maintain the confidentiality of Disclosing Party\'s Confidential Information using at minimum the same degree of care the Receiving Party use to protect its own information, but no less than reasonable care, and shall not disclose it to any third party except as required to perform obligations or exercise rights under this Agreement.',
                    'Receiving Party shall not use Confidential Information except as necessary to perform its obligations or exercise its rights under this Agreement and shall not use it to gain any unfair advantage over Disclosing Party. Upon termination or request, all tangible and digital copies of Confidential Information must be returned or destroyed.'
                ]
            },
            {
                id: 'warranties',
                title: '9. Disclaimer of Warranties',
                content: [
                    'You expressly understand and agree that the use of the Services is at your sole risk. The Platform and related information are provided \'as is\', \'as available\' and with \'all faults\' without warranties of any kind, whether express or implied, to the maximum extent permitted by applicable law.',
                    'Zlendo expressly disclaims all implied warranties, including without limitation warranties of title, non-infringement, merchantability, or fitness for a particular purpose.',
                    'Zlendo does not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that defects will be corrected. You assume total responsibility and risk for your use of the Platform and the internet.'
                ]
            },
            {
                id: 'liability',
                title: '10. Limitation of Liability',
                content: [
                    'In no event will Zlendo be liable for any incidental, consequential, indirect, special, punitive, exemplary, or other damages whatsoever (including, but not limited to, damages for loss of profits, loss of goodwill, business interruption, loss of programs or information, or unauthorized access to data), arising out of the use of or inability to use the Service, even if Zlendo has been advised of the possibility of such damages.',
                    'Zlendo\'s entire aggregate liability to you in respect of any claim arising out of or relating to the Platform and/or the Services shall not exceed the value of the aggregate of all amounts paid by the Subscriber to Zlendo in the one (1) month preceding the first event giving rise to such claim or action, or ten thousand rupees (₹ 10,000), whichever is lower.'
                ]
            },
            {
                id: 'indemnification',
                title: '11. Indemnification',
                content: [
                    'You agree to indemnify, defend, and hold harmless Zlendo, its officers, directors, employees, agents, licensors, suppliers, and affiliates (collectively, \'Affiliated Parties\') from and against all losses, expenses, damages, claims, and costs, including reasonable attorneys\' fees, resulting from:',
                    'Your unauthorized or improper use of the Services or Platform;',
                    'Any claim arising from or relating to your User Content, including intellectual property infringement or privacy violations;',
                    'Any claim arising from your breach of these Terms;',
                    'Your breach of your obligations under this Agreement including but not limited to confidentiality obligations.'
                ]
            },
            {
                id: 'third-party',
                title: '12. Third-Party Services and Resources',
                content: [
                    'The Platform may include content, integrations, documents, tools, or links to third-party applications, software, or websites (\'Third-Party Services\').',
                    'Zlendo makes no representations or warranties regarding Third-Party Services and disclaims all liability for any interruptions, errors, or damages arising from their use.',
                    'Your use of Third-Party Services is subject to the respective terms and conditions of such third parties, which you are responsible for reviewing and accepting. Zlendo does not operate, control, or endorse any information, products, or services offered by third parties through the Platform.'
                ]
            },
            {
                id: 'term',
                title: '13. Term',
                content: 'The term of this Agreement depends on how you access the Services:',
                subsections: [
                    {
                        id: 'sof-term',
                        title: 'For Services procured via an SOF',
                        content: [
                            'This Agreement shall remain in effect for the initial Term specified therein (\'Subscription Term\').',
                            'Thereafter, this Agreement shall automatically renew for successive terms of equal duration to the Initial Term, unless either party provides the other party with written notice of its intent not to renew at least thirty (30) days prior to the expiration of the then-current Term.',
                            'Upon any renewal, the recurring fees shall be subject to an increase, the extent of which will be mutually discussed and agreed upon by Zlendo and the Subscriber.'
                        ]
                    },
                    {
                        id: 'non-subscribed',
                        title: 'For non-subscribed access',
                        content: 'This Agreement is effective and binding upon the User\'s initial access to, use of, or registration for the Zlendo Website or Platform, including any associated free services or trials.'
                    }
                ]
            },
            {
                id: 'termination',
                title: '14. Termination',
                content: [
                    'Either Party may terminate this Agreement for cause by providing thirty (30) days\' written notice to the other Party if the other Party materially breaches this Agreement and fails to remedy such breach within the notice period.',
                    'Zlendo may terminate this Agreement and/or suspend the User Account and access to the Services, immediately upon written notice, if the Subscriber/User is reasonably suspected of engaging in illegal, fraudulent, or abusive activities, is subject to bankruptcy or insolvency proceedings, or fails to pay undisputed fees when due.'
                ],
                subsections: [
                    {
                        id: 'consequences',
                        title: 'Consequences of Termination',
                        content: [
                            'All outstanding and undisputed fees owed by the Subscriber to Zlendo shall immediately become due and payable.',
                            'The User\'s access and right to use the Platform and/or Services shall immediately cease.',
                            'Data Retrieval and Deletion: Zlendo may delete all data associated with the User Account. Zlendo shall retain such data for a period of thirty (30) days from the date of cancellation.',
                            'Refunds: If the Subscriber terminates this Agreement due to Zlendo\'s material breach, the Subscriber shall be entitled to a prorated refund of any prepaid fees covering the unused portion of the Subscription Term. For terminations initiated by the Subscriber without cause, no refund or credit shall be provided.',
                            'All provisions of this Agreement which by their nature are intended to survive termination, including but not limited to clauses relating to Confidential Information, Limitation of Liability, and Indemnification, shall remain in full force and effect for a period of 2 years after such termination.'
                        ]
                    }
                ]
            },
            {
                id: 'governing-law',
                title: '15. Governing Law and Dispute Resolution',
                content: [
                    'This Agreement shall be governed by and construed in accordance with the laws of India.',
                    'In case of any dispute or difference either in interpretation or otherwise, of any terms of these Terms between the parties hereto, the parties shall attempt to resolve the same through discussion. In case the parties fail to arrive at an amiable solution through discussion, the same shall be referred to Arbitration at the request of either Party in writing, in accordance with the provisions of Arbitration and Conciliation Act, 1996, as amended from time to time. The arbitration shall be conducted by a sole Arbitrator to be mutually appointed between the Parties and decision of the arbitrator shall be final and binding on the parties hereto. The seat and venue of arbitration shall be Madurai, Tamil Nadu, India.'
                ]
            },
            {
                id: 'ai-estimates',
                title: '16. Use of AI and Estimates (Zlendo Realty)',
                content: 'Zlendo Realty provides AI-powered tools for real estate design, converting 2D plans to 3D, creating virtual realty walkthroughs (VR Studio), offering Vaastu recommendations, cost estimation (BoQ), and API integrations.',
                subsections: [
                    {
                        id: 'ai-functionality',
                        title: 'AI Functionality',
                        content: 'Zlendo Realty utilizes AI-powered features, such as 2D to 3D conversion, AI Room Inspiration, and Vaastu Layout Optimization, solely to assist the User and is provided on an "as is" and "as available" basis. Vastu Evaluation is based on room size analysis, directional placement checks, positional logic for rooms, etc. and the suggestions are presented in report format and are purely advisory in nature. Such outputs do not constitute and shall not be construed as religious guidance, architectural advice, engineering advice, legal advice, regulatory approval, or construction certification.'
                    },
                    {
                        id: 'accuracy-disclaimer',
                        title: 'Accuracy Disclaimer',
                        content: [
                            'The AI-powered features and tools may not always provide accurate, complete, or current suggestions and information, and are provided on an "as is" and "as available" basis solely for reference purposes. You are solely responsible for verifying the accuracy and suitability of outputs before acting upon or commencing construction.',
                            'Any prices, cost references, material rates, assets, products, fixtures, finishes, or vendor-related information displayed on the Zlendo Realty platform are not owned, manufactured, supplied, or warranted by Zlendo. Such assets or pricing information may be sourced through third-party APIs, external databases, or uploaded directly by third-party businesses or partners.',
                            'All construction, interior, and project cost estimations generated by the Platform are indicative, system-generated, and based on assumptions, user inputs, and prevailing reference data at the time of estimation. Actual costs may vary materially due to factors including market price fluctuations, regional variations, supplier pricing, taxes, availability of materials, labour costs, scope changes, site conditions, and time-based price escalations.'
                        ]
                    },
                    {
                        id: 'professional-disclaimer',
                        title: 'Professional Disclaimer',
                        content: 'Zlendo Realty is provided solely as a software-based design, visualization, and estimation tool. Zlendo Realty is not a licensed architect, structural engineer, contractor, or construction professional, and does not provide architectural, structural, engineering, legal, or regulatory advice. All designs, layouts, visualizations, walkthroughs, estimations, and other outputs generated through the platform are indicative, system-generated, and dependent on user inputs. Users are required to independently consult and engage qualified architects, engineers, contractors, and other relevant professionals before undertaking any construction, execution, or implementation.'
                    },
                    {
                        id: 'cost-estimation',
                        title: 'Cost Estimation/BoQ',
                        content: 'While Zlendo Realty aims to give real-time cost estimation and BoQ, the initial quote or estimate provided is an approximation and the exact value may depend on site conditions, measurements, scope of work, brick type, concrete grade, wood type, steel size and specification, changes in designs/materials, etc. Zlendo does not guarantee quotes and the same shall not be treated as a substitute for professional financial, legal, or construction advice. Zlendo shall not be liable for variances between estimated costs and final project costs.'
                    },
                    {
                        id: 'rendering-output',
                        title: 'Rendering, Image, and Video Output Disclaimer',
                        content: [
                            'All rendered images, walkthrough videos, visualisations, and other media generated through Zlendo Realty are system-generated outputs created for visual representation and reference purposes only. Such renders are illustrative in nature and may not accurately reflect real-world construction conditions, material availability, finishes, lighting behaviour, dimensions, structural feasibility, workmanship, or on-site execution outcomes.',
                            'The rendering server operates between 8:00 a.m. IST and 12:00 a.m. IST. If a user submits a rendering request at or after 11:00 p.m. IST on any day, the rendering queue shall commence processing after 8:30 a.m. IST on the next day.',
                            'Zlendo does not guarantee that rendered images or videos will match actual constructed outcomes, nor does it assume responsibility for discrepancies arising due to design changes, site conditions, material substitutions, execution methods, vendor variations, or interpretation of rendered media.'
                        ]
                    }
                ]
            },
            {
                id: 'vendor-disclaimer',
                title: '17. Vendor and Physical Services Disclaimer',
                content: [
                    'If the Services include connecting you to independent vendors or contractors (\'Third-Party Vendors\') for physical services such as installation, construction, or customized work:',
                    'Facilitation Role: Zlendo acts solely as a facilitator between you and the Third-Party Vendor for enabling such Custom Work or installation.',
                    'Vendor Liability: Third-Party Vendors are responsible for their products or services supplied, including quality, safety, suitability, descriptions, and performance. Zlendo is not responsible for the acts, omissions, products, or services provided by these Third-Party Vendors.',
                    'Unauthorised Transactions: You shall not solicit, engage, or encourage any Third-Party Vendor to provide or avail the same or similar services independently, bypassing the Zlendo Platform. Any transactions or payments made without booking through Zlendo Platform shall be deemed "Unauthorised Transactions" and Zlendo shall have no liability for such transactions.',
                    'Delivery Estimates: If Zlendo provides a project timeline commitment, this date is an estimate and may be subject to preconditions. Zlendo shall not be liable for delays caused by the Customer or due to a Force Majeure event.'
                ]
            },
            {
                id: 'injunctive-relief',
                title: '18. Injunctive Relief',
                content: 'The Parties agree that breaches of confidentiality, non-use, or other obligations under this Agreement causing irreparable harm shall entitle the affected Party to seek injunctive relief or specific performance. The Parties acknowledge that monetary damages alone may be inadequate to remedy such breaches. This right is in addition to any other remedies that the affected Party may have at law or in equity.'
            },
            {
                id: 'non-disparagement',
                title: '19. Non Disparagement',
                content: 'During and after the term of this Agreement, both Parties shall act in good faith. They shall refrain from making or publishing any false, misleading, derogatory, defamatory, or otherwise harmful statements about the other Party, its services, personnel, or business. This prohibition applies whether the statements are made publicly or privately on any digital/public platforms.'
            },
            {
                id: 'amendments',
                title: '20. Amendments',
                content: 'No provision of this Agreement may be terminated, modified or waived, by course of dealing or otherwise, unless such termination, modification or waiver is set forth in a written agreement referencing this Agreement and is executed by an authorized representative of both Parties.'
            },
            {
                id: 'force-majeure',
                title: '21. Force Majeure',
                content: 'Neither Party shall be liable for delays or failures in performance due to causes beyond its reasonable control, including but not limited to natural disasters (e.g., flooding, earthquake, hurricane), government actions, wars, riots, strikes, lockouts, epidemic, pandemic, or other concerted acts of workmen or acts of God.'
            },
            {
                id: 'notices',
                title: '22. Notices',
                content: 'All notices under this Agreement must be in writing. Notices to Zlendo concerning this Agreement should be sent to support@zlendorealty.com, or to Zlendo\'s registered address. Notices to Subscriber must be sent addressing the email address of the representative as provided in the SOF, unless otherwise agreed in writing by the Parties.'
            },
            {
                id: 'assignment',
                title: '23. Assignment',
                content: 'You shall not assign or transfer your rights or obligations under this Agreement without the prior written consent of Zlendo. However, Zlendo may assign its rights and duties under this Agreement to any party at any time without notice to you.'
            },
            {
                id: 'conflict',
                title: '24. Conflict of Terms',
                content: 'Notwithstanding anything to the contrary, any separately executed agreement/SOF between Zlendo and User shall govern and prevail over these Terms in the event of any conflict.'
            },
            {
                id: 'waiver',
                title: '25. Waiver',
                content: 'No failure or delay by either Party in exercising any right, power or remedy under this Agreement shall operate as a waiver of any such right, power or remedy. The waiver by either Party of any breach or default hereunder shall not be deemed a waiver of any subsequent breach or default.'
            },
            {
                id: 'severability',
                title: '26. Severability',
                content: 'The invalidity or unenforceability of any provision of this Agreement shall not affect the validity or enforceability of the Agreement as a whole, which shall remain in full force and effect. If any provision is found to be invalid or unenforceable, the Agreement shall be construed as if it does not contain that specific provision. Furthermore, the Parties agree to collaborate in good faith to replace any invalid or unenforceable provision with one that is valid and enforceable and achieves, to the maximum extent legally permissible, the same objective as the provision deemed invalid or unenforceable.'
            },
            {
                id: 'independent-contractors',
                title: '27. Independent Contractors',
                content: 'The Parties are independent contractors, and nothing contained in this Agreement shall be construed to constitute the parties as partners, joint venturers, co-owners or otherwise as participants in a joint or common undertaking.'
            },
            {
                id: 'electronic-signatures',
                title: '28. Electronic Signatures',
                content: 'The Parties agree that this Agreement and any other documents to be delivered in connection herewith may be executed by electronic means, via digital signatures. Such electronic execution shall be deemed to have the same legal effect as delivery of an original executed copy. The Parties further agree that electronic signatures shall be binding and enforceable to the same extent as physical, handwritten ("wet") signatures, in accordance with Applicable Laws.'
            }
        ] as PolicySection[]
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
                        <span className="text-gray-900 font-medium">Terms of Service</span>
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

export default TermsPage;
