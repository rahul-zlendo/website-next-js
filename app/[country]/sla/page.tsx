'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, Clock } from 'lucide-react';

export default function ServiceLevelAgreementPage() {
    const params = useParams();
    const country = params.country as string;
    const policy = {
        id: 'sla',
        slug: 'sla',
        title: 'SLA - Realty',
        icon: Clock,
        category: 'service' as const,
        description: 'Service level agreement (SLA) for zlendo realty',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'introduction',
                title: 'Introduction',
                content: [
                    'This Service Level Agreement (\'SLA\') forms an integral part of the applicable Subscription Order Form (\'SOF\') and the Terms of Services entered into between Zlendo Technologies Private Limited and you (the \'Customer\' or \'User\') for use of the Zlendo Realty platform and sets out the service availability commitments, uptime targets, support response timelines, resolution objectives, maintenance obligations, service credits, exclusions, and related performance standards applicable to such services.',
                    'This SLA shall be effective from the date specified in the applicable SOF and shall govern the provision of the Zlendo Realty services purchased by the Customer pursuant to the Agreement and described herein.'
                ]
            },
            {
                id: 'scope',
                title: '1. SCOPE OF SERVICES',
                content: 'Zlendo shall provide the Customer access to the Zlendo Realty platform as a subscription-based software service enabling users to design buildings using 2D drafting tools, convert such designs into interactive three-dimensional environments, and perform immersive walkthroughs for spatial visualisation and review as enabled under the applicable SOF. The platform further supports generation of realistic, high-resolution rendered images and videos, subject to plan entitlements and system constraints, and provides indicative construction and interior cost estimations using industry-aligned methodologies based on user inputs and configurations. All designs, visualisations, walkthroughs, renderings, and cost outputs generated through Zlendo Realty are system-generated, dependent on the information provided by the Customer or Users, and are intended solely to assist planning and visual understanding, without constituting professional, regulatory, or construction advice.'
            },
            {
                id: 'training',
                title: '2. TRAINING AND IMPLEMENTATION',
                content: 'Prior to onboarding and go live, Zlendo shall provide remote implementation support and training sessions to the Customer\'s designated administrators and key users covering initial account setup, configuration of the Zlendo Realty modules selected under the SOF, user creation and role based access, standard workflows, export and rendering processes, dashboard usage, and basic troubleshooting. Zlendo may also provide reasonable guidance on data import or integration steps strictly to the extent included in the SOF. The number of sessions, mode, and timelines shall be as mutually agreed. Any additional or customised training, on site sessions, GPU intensive rendering support, or bespoke integration services shall be provided only if separately agreed in writing.'
            },
            {
                id: 'user-access',
                title: '3. USER ACCESS MODELS (AS APPLICABLE AS PER SOF)',
                content: (
                    <ul className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li><strong>Individual User (Self-Serve) Model:</strong> The platform is made available to homeowners, designers, students, and individual architects through self-registration and subscription-based access, with each account limited to a single user and without any organisation-level workspace or multi-user collaboration features</li>
                        <li><strong>Business / Enterprise User Model:</strong> The platform is made available to builders, construction firms, developers, interior designers, partners, paint designers, and large design enterprises through demo-based onboarding and contractual arrangements, with custom pricing, multi-user access, role-based permissions, and extended feature enablement as agreed between the parties.</li>
                    </ul>
                )
            },
            {
                id: 'features',
                title: '4. FEATURES',
                content: (
                    <div className="space-y-4 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <ul className="list-[lower-alpha] pl-6 space-y-4 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <li><strong>2D Design & Drafting Engine:</strong> Zlendo Realty includes a two-dimensional design and drafting engine that enables Users to create and modify building layouts using digital drafting tools. Through this engine, Users may draw walls and partitions, place doors and windows, define room boundaries, and adjust dimensions and overall layout structures. The 2D layout created by the User functions as the foundational design reference within the platform and acts as the source of truth for subsequent three-dimensional model generation, cost estimation calculations, and walkthrough creation.</li>
                            <li><strong>3D Visualization & Walkthroughs:</strong> Upon completion of a 2D layout, Zlendo Realty allows Users to convert the design into an interactive three-dimensional environment. The platform supports real-time 3D model generation and enables customization of interior and exterior walls, placement of furniture and fixtures, and selection of materials and finishes. Users may navigate the 3D environment through interactive walkthrough functionality, including room-to-room navigation, to gain a spatial understanding of scale, proportions, and design flow.</li>
                            <li><strong>AI Inspiration Module:</strong> Zlendo Realty includes an AI-powered Inspiration module designed to assist Users in exploring aesthetic design possibilities. This module may suggest interior and exterior design themes, recommend colour palettes, materials, and finishes, propose furniture arrangements and styling concepts, and provide visual inspiration aligned with the project layout. The AI Inspiration module may utilise Zlendo-owned artificial intelligence systems and/or third-party AI services to generate such recommendations. All outputs produced through this module are creative, system-generated, advisory, and probabilistic in nature, and do not constitute architectural, structural, interior design, or professional certification. Final design decisions, validations, and implementations remain entirely under the control and responsibility of the User.</li>
                            <li><strong>High-Fidelity Rendering & Video Generation:</strong> For Pro and Enterprise subscription plans, Zlendo Realty supports the generation of high-fidelity rendered images and realistic walkthrough videos, including up to 4K resolution outputs, using industry-standard rendering tools such as Blender and Unreal Engine. These tools are utilised to achieve physically based lighting, realistic materials and textures, accurate shadows and reflections, and cinematic camera movements. Users may configure camera positions, define camera paths, set viewing angles, and control video duration and framing. Rendering times may vary based on scene complexity, lighting conditions, asset density, and video duration, and typical completion may occur within a few minutes subject to rendering service availability as communicated by the Zlendo team, system performance and queue conditions.</li>
                        </ul>
                        <p className="pl-6 italic font-nunito text-lg text-zlendo-grey-medium leading-relaxed"><strong>Note:</strong> Rendered images and walkthrough videos generated through Zlendo Realty are stored within the platform for a limited retention period of sixty (60) days from the date of generation. During this period, Users may view and export such rendered outputs in accordance with their subscription entitlements. Upon expiry of the retention period, rendered videos and related media are automatically deleted from the platform, unless otherwise agreed under an applicable enterprise contract.</p>
                    </div>
                )
            },
            {
                id: 'responsibilities',
                title: '5. RESPONSIBILITIES',
                content: (
                    <ul className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li><strong>Zlendo:</strong> Zlendo shall provide access to video tutorials, help documents, and a designated helpdesk email during initial onboarding and technical support through its notified support channels and shall use commercially reasonable efforts to acknowledge and progress support tickets in accordance with the service levels set out in this SLA. During implementation, Zlendo shall deliver the agreed onboarding sessions and thereafter transition the Customer to ongoing support. Zlendo shall not be responsible for delays caused by Customer actions, incomplete inputs, or changes in scope.</li>
                        <li><strong>Customer:</strong> The Customer shall appoint trained and authorised support contacts and a single point of contact for coordination, submit support requests only through Zlendo\'s designated support channels with sufficient diagnostic information, and provide timely access, inputs, files, approvals, and cooperation reasonably required for troubleshooting, rendering, or remediation activities.</li>
                    </ul>
                )
            },
            {
                id: 'uptime',
                title: '6. SERVICE AVAILABILITY (UPTIME COMMITMENT)',
                content: (
                    <div className="space-y-6 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <ul className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <li>Zlendo shall use commercially reasonable efforts to maintain a Monthly Uptime Percentage of 90% for the Zlendo Realty platform, subject to the exclusions specified herein, which shall apply for the purposes of calculating uptime.</li>
                            <li>For the purposes of this clause, uptime calculation shall exclude any unavailability of the Zlendo Realty platform caused by (i) any issue that does not constitute a server side failure or platform reachability error within Zlendo\'s reasonable control that materially impacts access to the Zlendo Realty platform, (ii) Scheduled Maintenance communicated at least forty eight hours in advance, (iii) factors beyond Zlendo\'s reasonable control including internet backbone failures, (iv) Customer systems or devices, third party services or integrations, (v) force majeure events, (vi) malicious attacks not attributable to Zlendo, (vii) Customer misuse of the platform, integrations with unsupported third party applications, or operation in unsupported environments.</li>
                            <li>Subject to the exclusions set out above, if the Monthly Uptime Percentage falls below the committed threshold, the Customer may claim service credits in accordance with the schedule below.</li>
                        </ul>

                        <div className="overflow-x-auto">
                            <table className="min-w-[800px] border-collapse border border-gray-300 text-sm md:text-base text-zlendo-grey-medium">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-900 w-1/3">Monthly Uptime</th>
                                        <th className="border border-gray-300 px-4 py-2 text-right font-bold text-gray-900">Service Credit (% of Monthly Subscription Fees)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">85% to 89%</td>
                                        <td className="border border-gray-300 px-4 py-2 text-right">5%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">80% to 84%</td>
                                        <td className="border border-gray-300 px-4 py-2 text-right">10%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">&lt;80%</td>
                                        <td className="border border-gray-300 px-4 py-2 text-right">15%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <ul className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <li>To be eligible for service credits, the Customer must notify Zlendo in writing within ten calendar days after the end of the month in which the entitlement arose together with reasonable details including the timeframe and observed impact. Service credits shall apply only to the subscription fees for the impacted month and shall exclude taxes, pass through charges, usage based fees, and professional services. Service credits shall not be redeemable for cash and shall constitute the Customer\'s sole and exclusive remedy for Zlendo\'s failure to meet the uptime commitment.</li>
                            <li>For the purposes of this SLA, 'Downtime' shall be counted only if the unavailability of the Zlendo Realty service is continuous for a period of Sixty (60) minutes or more; any interruption or unavailability lasting less than Sixty (60) continuous minutes shall not be treated as Downtime for the purposes of calculating Uptime or Service Credits.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: 'product-levels',
                title: '7. PRODUCT SPECIFIC SERVICE LEVELS',
                content: (
                    <div className="space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>Without prejudice to the generality of the foregoing, the Parties acknowledge the following product specific service parameters:</p>
                        <ul className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <li><strong>2D to 3D Conversion and Customised Models.</strong> Zlendo shall provide service availability for initiating and processing 2D to 3D conversions and customised models; however, the accuracy, scale, dimensional correctness, and suitability of outputs are dependent on Customer supplied inputs and parameters. Zlendo does not warrant architectural precision, construction feasibility, or absolute accuracy of such outputs.</li>
                            <li><strong>Virtual Walkthroughs and Rendering.</strong> Zlendo shall support the availability of virtual walkthrough and rendering features, subject to reasonable processing times. Rendering quality, completion time, and performance may vary based on file size, complexity, hardware, GPU capacity, and network conditions, and are not guaranteed under this SLA.</li>
                            <li><strong>Room Styling and Layout Configuration.</strong> Outputs generated through room styling, configuration, and layout tools are indicative and visual in nature only. Zlendo does not guarantee acceptance of such outputs by customers, buyers, designers, or other third parties.</li>
                            <li><strong>Vaastu Features.</strong> Any Vaastu related indicators, suggestions, orientations, or insights generated by the Zlendo Realty platform are algorithmic, indicative, and informational only. Zlendo does not warrant that such Vaastu outputs will be accurate, complete, compliant, or accepted by any individual, professional, or authority, nor that they will meet personal, cultural, or religious expectations.</li>
                            <li>Zlendo does not provide and expressly disclaims any obligation to provide architectural, engineering, construction, interior design, regulatory, structural, feasibility, or other professional advisory services, except that Zlendo Realty may provide Vaastu related consultancy features as part of the platform, which are delivered on a best effort basis, are dependent on Customer inputs and configurations, and do not constitute a guarantee of accuracy, completeness, professional certification, or acceptance by any authority or third party. Issues arising from Customer configurations, data inputs, floor plan quality, measurements, scale accuracy, customised models, rendering parameters, file formats, third party content, hardware limitations, GPU constraints, or external systems are outside the scope of this SLA.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: 'support-scope',
                title: '8. SUPPORT SCOPE',
                content: 'Zlendo\'s support obligations apply only to functionality made generally available as part of the Zlendo Realty platform. Issues arising from Customer configurations, data inputs, file quality, rendering parameters, customisations, third party integrations, hardware limitations, or external systems are outside the scope of this SLA.'
            },
            {
                id: 'environment',
                title: '9. SUPPORTED ENVIRONMENT',
                content: 'Customers must access the Zlendo Realty platform using supported browsers, devices, and environments as notified by Zlendo from time to time. Use of unsupported environments may impact service levels, rendering quality, or performance.'
            },
            {
                id: 'support-metrics',
                title: '10. SUPPORT SERVICE LEVELS',
                content: (
                    <div className="space-y-6 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <ul className="list-[lower-alpha] pl-6 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <li>For support tickets submitted through Zlendo\'s designated support channels containing sufficient information to enable diagnosis and response, Zlendo shall target the following response and resolution timelines during business hours.</li>
                        </ul>

                        <div className="overflow-x-auto">
                            <table className="min-w-[800px] border-collapse border border-gray-300 text-sm md:text-base text-zlendo-grey-medium">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-900 w-16">Priority</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-900">Definition</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center font-bold text-gray-900 w-32">Initial Response Time* (Business Hours)</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center font-bold text-gray-900 w-32">Target Resolution Time** (Business Hours)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">P-0 Urgent</td>
                                        <td className="border border-gray-300 px-4 py-2">Critical platform outage or failure of core real estate visualisation, rendering, 2D to 3D conversion, export utilities, or Vaastu features impacting a majority of users</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">1 hour</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">8 hours</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">P-1 Moderate</td>
                                        <td className="border border-gray-300 px-4 py-2">Significant degradation of key workflows including rendering delays, export failures, intermittent access issues, or partial unavailability with workarounds available.</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">4 hours</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">24 to 48 hours</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">P-2 Low</td>
                                        <td className="border border-gray-300 px-4 py-2">General queries, UI clarifications, minor visual discrepancies, or non critical functionality issues</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">8 hours</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">72 hours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="text-sm space-y-2 bg-gray-50 p-4 rounded-lg">
                            <p><strong>*Initial Response Time</strong> means the time interval between submission of a valid support ticket by the Customer through the designated support channels and Zlendo\'s first acknowledgement of such ticket.</p>
                            <p><strong>**Target Resolution Time</strong> means the period within which Zlendo will use commercially reasonable efforts to resolve the issue by providing a fix, workaround, or scheduled remediation.</p>
                            <p><strong>Note:</strong> SLA timelines are conditional upon the Customer providing all reasonably requested information and access and shall be paused while such inputs remain pending. Any resulting delay will proportionately extend the response and resolution timelines.</p>
                        </div>

                        <ul className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <li>Both Parties agree that Service Requests (custom configurations, projects, or non-standard integrations) are excluded.</li>
                            <li>In the event that Zlendo fails to meet the Support Service Levels commitments for Severity P-0 or P-1 tickets on three (3) or more occasions within a calendar month, the Customer may issue notice to Zlendo. Upon such notice, and subject to a cure period of fifteen (15) days, the Customer\'s sole and exclusive remedies shall be as follows: (a) right to terminate SOF and (b) right to pro rata refund of unused services from the effective date of termination.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: 'bug-resolution',
                title: '11. BUG RESOLUTION',
                content: (
                    <div className="space-y-6 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>For validated bug reports, Zlendo shall target resolution timelines as follows.</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-[800px] border-collapse border border-gray-300 text-sm md:text-base text-zlendo-grey-medium">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-900 w-16">Priority</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold text-gray-900">Definition</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center font-bold text-gray-900 w-48">Target Resolution Time (Business Hours)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">P-0 Urgent</td>
                                        <td className="border border-gray-300 px-4 py-2">50% or more users impacted, critical business impact, system down or major functionality not working</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">8 hours (1 business day)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">P-1 Moderate</td>
                                        <td className="border border-gray-300 px-4 py-2">10% to 49% of users were impacted, significant disruption but system operational with limited functionality</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">16 to 24 hours (2 to 3 business days)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">P-2 Low</td>
                                        <td className="border border-gray-300 px-4 py-2">1% to 9% of users impacted, minor impact or inconvenience, non-critical functionality</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">40 hours (5 business days)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Note:</strong> Timelines are contingent upon complete information being provided by the Customer. SLA timelines shall be paused while such inputs remain pending and will resume once received. Any resulting delay will proportionately extend the response and resolution timelines. Bugs reported outside business hours will be handled according to business day calculations calculated from next business day.</p>
                    </div>
                )
            },
            {
                id: 'exclusions',
                title: '12. EXCLUSIONS',
                content: 'This SLA does not apply where service failures result from Customer breach of payment obligations, Customer actions or omissions, third party services, force majeure events, unsupported systems or environments, file sizes exceeding platform limits, GPU or device constraints, or inaccuracies arising from Customer supplied inputs.'
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
                        <span className="text-gray-900 font-medium">Service Level Agreement</span>
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
