'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import PolicyContent from '@/components/policies/PolicyContent';
import PolicySidebar from '@/components/policies/PolicySidebar';
import { ChevronRight, Home, Shield } from 'lucide-react';

export default function DataProcessingAgreementPage() {
    const params = useParams();
    const country = params.country as string;

    // Define policy locally with the provided content
    const policy = {
        id: 'dpa',
        slug: 'dpa',
        title: 'Data Processing Agreement',
        icon: Shield,
        category: 'privacy' as const,
        description: 'DPA',
        lastUpdated: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        sections: [
            {
                id: 'preamble',
                title: 'Agreement',
                content: (
                    <div className="space-y-6">
                        {/* Title Section matching the visual style requested */}
                        <div className="text-center mb-8">
                            {/* <p className="text-4xl font-sans mb-4">DPA</p>
                            <p className="text-xl Nunito font-bold">DATA PROCESSING AGREEMENT</p> */}
                        </div>

                        <p className="text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            This Data Processing Agreement along with the appendices annexed hereto (hereafter the "<strong>DPA</strong>") describes the obligations of the Parties with regard to the Processing of Personal Data in accordance with the terms hereunder, and is executed by and between:
                        </p>

                        <p className="text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <strong>Zlendo Technologies Private Limited</strong>, a company incorporated & registered under the Companies Act, 2013 having its registered office at Door No. 36/1, Ganapathy Street, Alagappan Nagar, Madurai, Tamil Nadu, India - 625003  (hereinafter referred to as '<strong>Company</strong>' or '<strong>Zlendo</strong>', the expression of which shall, unless repugnant to the context or meaning thereof, be deemed to include its officers, employees, successors, and assigns) of the FIRST PART,
                        </p>

                        <p className="text-center font-nunito font-bold text-lg text-zlendo-grey-medium leading-relaxed">AND</p>

                        <p className="text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            [<span className="bg-yellow-200">Service Provider Name</span>], a company incorporated under the provisions of the Companies Act, 1956/2013, having its registered/corporate office at [<span className="bg-yellow-200">insert address</span>], (hereinafter referred to as '<strong>Processor</strong>' or '<strong>Service Provider</strong>', the expression of which shall, unless repugnant to the context or meaning thereof, be deemed to include its officers, employees, successors, and assigns) of the SECOND PART.
                        </p>

                        <p className="text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            The Company and Processor are referred to as a "<strong>Party</strong>" and, jointly, as the "<strong>Parties</strong>".
                        </p>

                        <p className="font-nunito font-bold text-lg text-zlendo-grey-medium leading-relaxed">WHEREAS:</p>

                        <ol className="list-[lower-roman] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            <li>The Processor has been engaged by the Company for provision of certain services to be performed as per the terms of the <span className="bg-yellow-200">Service Agreement dated [x].</span></li>
                            <li>The Company or its Personnel may provide the Processor with access to certain Personal Data and other data such as [<span className="bg-yellow-200">insert data type</span>] in connection with and for purposes of undertaking the Services as per the requirements under Service Agreement ("<strong>Purpose</strong>").</li>
                            <li>The Company requires that the Processor preserves and maintains the privacy, confidentiality and integrity of such Personal Data and expressly refrains from unauthorised disclosure or for any model training or product‑improvement use.</li>
                        </ol>

                        <p className="text-justify font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                            Now therefore, in consideration of the mutual covenants herein and the Service Agreement, the Parties agree as follows.
                        </p>
                    </div>
                )
            },
            {
                id: 'definitions',
                title: '1. DEFINITIONS',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>"<strong>Applicable Law</strong>" shall mean any law, statute, declaration, decree, directive, legislative enactment, order, ordinance, regulation, rule or other binding restrictions (including any and all legislative and/or regulatory amendments), to which a Party to this DPA is subject and includes the Data Protection Regulations.</li>
                        <li>"<strong>Customer Data</strong>" means all data provided or made available by the Company to the Processor or otherwise Processed on behalf of the Company under the Service Agreement, including but not limited to [<span className="bg-yellow-200">insert data type</span>] and any derivatives thereof.</li>
                        <li>"<strong>Model Training</strong>" means developing, training, fine‑tuning, benchmarking, or otherwise improving an algorithm, model, or product using data or derivatives.</li>
                        <li>"<strong>Data Protection Regulations</strong>" the Personal Data protection legislation applicable in India, including the Digital Personal Data Protection Act, 2023 and rules thereunder (as and when it comes into force), the Information Technology Act, 2000 and rules thereunder, and the CERT‑In Directions.</li>
                        <li>"<strong>Data Principal</strong>" any identified or identifiable natural person to whom the Personal Data relates.</li>
                        <li>"<strong>Personal Data</strong>" means any data or information relating to an identified or identifiable natural person, including any identifiers, contact details, financial or transactional information, communications metadata, and online identifiers, to the extent Processed under this DPA.</li>
                        <li>"<strong>Personal Data Breach / Breach</strong>" any unauthorised Processing of Personal Data or accidental disclosure, acquisition, sharing, use, alteration, destruction, theft or loss of access to Personal Data, that compromises the confidentiality, integrity or availability of Personal Data.</li>
                        <li>"<strong>Personnel</strong>" means the employees, agents, consultants, representatives or contractors of the Company or Processor, as the context may clarify.</li>
                        <li>"<strong>Processing or Processed</strong>" in relation to Personal Data means a wholly or partly automated operation or set of operations performed on or with regard to Personal Data, including collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, use, alignment or combination, indexing, sharing, disclosure by transmission, dissemination or otherwise making available, restriction, blocking, erasure or destruction. Processing includes the purposes and operations mentioned in <u>Appendix A</u> of this DPA.</li>
                        <li>"<strong>Services</strong>" shall have the meaning attributed to it under the Services Agreement.</li>
                        <li>"<strong>Sub-processor</strong>" any natural or legal person engaged by Processor to carry out, fully or partially, on its behalf the Processing of Personal Data as set out under this DPA.</li>
                    </ol>
                )
            },
            {
                id: 'processing',
                title: '2. PROCESSING OF PERSONAL DATA',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor shall Process Personal Data only on documented instructions from the Company and only to deliver the Services. The Processor shall not determine the purposes or means of Processing.</li>
                        <li>The Processor shall during the Term of this DPA and thereafter as required by this or any other agreement between the Parties, adhere to any and all written instructions of the Company provided in relation to Personal Data shared with the Processor by the Company and Processing thereof. Without prejudice to the foregoing, the Processor shall immediately inform the Company where it deems that an instruction given by Company is in violation of the Applicable Laws. Under no circumstance do the requirements of this Section per se limit or exclude Processor's liability as set out in the DPA.</li>
                        <li>The Parties hereby acknowledge, agree and confirm that the Company is not receiving any compensation for sharing or providing access to any Personal Data.</li>
                    </ol>
                )
            },
            {
                id: 'use-disclosure',
                title: '3. USE AND DISCLOSURE',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor shall hold in strict confidence any and all Personal Data disclosed to or accessed by Processor in accordance with this DPA and shall segregate Customer Data logically from other customers' data.</li>
                        <li>Access of Personal Data shall be restricted to Personnel who need to know the data to perform the Services and who are bound by written confidentiality and data‑protection obligations no less protective than this DPA and are trained on privacy and security.</li>
                        <li>The Processor shall not copy, decompile, modify, reverse engineer, or create derivative works out of any of the Personal Data.</li>
                        <li>The Processor shall not, and shall ensure its Sub‑processors do not use Customer Data, or Personal Data to develop, train, fine‑tune, or improve any models, algorithms, features, or products, whether for the Processor or any third party, including through aggregation, anonymization, or de‑identification.</li>
                        <li>The Processor shall implement technical and organizational controls to prevent ingestion of Customer Data into any Model Training or analytics pipelines and shall maintain auditable evidence of such controls.</li>
                        <li>The Processor shall ensure that any approved Sub-Processor engaged in connection with the Services conducts a quarterly internal audit or, at a minimum, provides an annual written certification confirming that no Customer Data has been used, directly or indirectly, for any Model Training or analytics purposes. Such audit reports or certifications shall be retained by the Processor and made available to the Company upon request.</li>
                        <li>The Company confirms that it has the legal right to provide the Personal Data to the Processor for the purposes of availing the Services.</li>
                        <li>The Processor shall conduct its operations in a transparent and open manner. The Processor is obligated to ensure that the Processing of Personal Data is in strict compliance with Applicable Laws and the industry standards.</li>
                    </ol>
                )
            },
            {
                id: 'sub-processors',
                title: '4. SUB-PROCESSORS',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor shall not appoint any Sub‑processor without prior intimation to the Company. The Company pre‑approves only those Sub‑processors listed in Appendix B.</li>
                        <li>Where the Processor, with the written consent of Company, subcontracts any of the Processing operations to a third-party Sub-processor, the Processor shall enter into a written agreement with each such Sub-processor that imposes obligations on the Sub-processor that are identical to those imposed on Processor under this DPA. Where the Sub-processor fails to fulfil these obligations, the Processor shall remain fully liable to Company for the performance of that Sub-processor's obligations. It is hereby clarified that all obligations of the Processor in relation to its Personnel as set out hereunder, shall also apply <em>mutatis mutandis</em> to the involvement of any Sub-processors.</li>
                        <li>The Processor shall disclose all storage and Processing locations and shall not transfer Personal Data outside India without the Company's prior written consent.</li>
                        <li>In relation to any and all actions or omissions of the Processor's Personnel and/or Sub-processors resulting in non-compliance or breach (direct or indirect) of this DPA and/or Applicable Law, such breach / non-compliance shall be deemed to be committed by the Processor and the Processor shall completely and effectively indemnify the Company and/or Data Principal for all such breaches / non-compliance.</li>
                    </ol>
                )
            },
            {
                id: 'maintenance-records',
                title: '5. MAINTENANCE OF RECORDS',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor will keep detailed, accurate, and up‑to‑date records regarding Processing activities performed on behalf of the Company, including categories of Personal Data, Processing purposes, data flows, Sub‑processor registry with locations, access controls, and security measures ("<strong>Records</strong>").</li>
                        <li>Upon written request by the Company, the Processor shall share all such Records with the Company promptly and within the timeline prescribed by the Company in its request.</li>
                        <li>Notwithstanding anything contained hereunder, upon any request being made in writing by the Company, the Processor shall carry out such changes to the Records, and shall ensure that the Sub-processors also carry out such changes, as may be required by the Company and/or Data Principal for ensuring correction, completeness and accuracy of Personal Data.</li>
                    </ol>
                )
            },
            {
                id: 'erasure-return',
                title: '6. ERASURE, RETURN AND RETENTION OF DATA',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor shall not retain any Personal Data (or any documents or records containing Personal Data, electronic or otherwise) for any period longer than the Term of this DPA or as is necessary for the Purpose, or upon a written request by the Company, whichever is earlier.</li>
                        <li>On expiry or early termination of this DPA, or the fulfilment of the Purpose, or on written request of the Company, the Processor shall immediately cease to use any Personal Data and shall within a maximum period of 15 (fifteen) days from expiry / termination or written request, as the case may be, return or destroy all such Personal Data and delete all electronic records of such Personal Data from their computers / servers / data storage devices / backup devices (as the case may be). The Processor shall ensure compliance with this Section by its Sub-processors as well and will be required to provide a certificate confirming compliance with all the obligations under this Section. Notwithstanding anything to the contrary hereunder, in case of a regulatory requirement, the Company may require the return of all Personal Data, in which case the Processor shall promptly but not later than any timelines provided under such regulatory requirement, return all such data to the Company. If required by the Company, the Processor shall provide a certificate confirming compliance with the destruction obligation under this section.</li>
                        <li>Only such Personal Data may be retained by the Processor which it is legally required to retain for compliance with any Applicable Law ("<strong>Legal Purpose</strong>") and the Processor's obligation of confidentiality and security towards this information as set out under this DPA and Service Agreement and Applicable Law shall continue in perpetuity. No other use is permitted and the data shall be deleted immediately after the Legal Purpose ends.</li>
                    </ol>
                )
            },
            {
                id: 'data-transfer',
                title: '7. DATA TRANSFER',
                content: (
                    <p className="font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        Personal Data shall be stored and Processed only in India. The Processor shall not transfer Personal Data outside India without the Company's prior written consent and subject to contractual safeguards and a written undertaking that the data will be protected at a standard comparable to this DPA and Applicable Law.
                    </p>
                )
            },
            {
                id: 'assistance',
                title: '8. ASSISTANCE AND OTHER OBLIGATIONS OF THE PROCESSOR',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor shall assist the Company by appropriate technical and organisational measures, for the fulfilment of the Company's obligation to respond to any data protection related requests including any requests for exercising Data Principal's rights or answering any potential requests from supervisory authorities. The Processor shall provide the Company with access to the Company's Personal Data that the Processor has in its possession or control related to the Services, as soon as practicable upon the Company's written request. The Processor shall acknowledge such request within one (1) day of receipt and shall provide full resolution, response, or necessary support within twenty-one (21) days from the date of such request or earlier if required by the Company. If required, the Processor shall also reasonably assist the Company in carrying out data protection impact assessments related to the Personal Data in relation to the Services.</li>
                        <li>The Processor shall ensure compliance with the Cert-In Directions and all applicable requirements prescribed thereunder, including maintenance of necessary infrastructure, connection with prescribed servers, maintenance of logs within India etc.</li>
                        <li>The Processor shall promptly inform the Company if the Processor cannot ensure compliance with Applicable Law for whatever reason of its inability to comply, in which case the Company reserves the right to immediately and automatically suspend any Processing and/or terminate this DPA.</li>
                        <li>The Processor shall not combine the personal data that the Processor receives from the Company with data of another business.</li>
                    </ol>
                )
            },
            {
                id: 'security',
                title: '9. SECURITY',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor shall develop, maintain, implement, and adhere to a comprehensive written information security program that complies with industry standards, is commensurate to the nature of Personal Data Processed by it and the nature of Processing carried out by it as well as requirements under Applicable Laws.</li>
                        <li>The Processor shall use technical and organizational measures to ensure the security and confidentiality of the Personal Data (including encryption) in order to prevent, among other things:</li>
                        <li>accidental, unauthorized or unlawful destruction, alteration, modification or loss of the Personal Data;</li>
                        <li>accidental, unauthorized or unlawful disclosure or access to the Personal Data;</li>
                        <li>unlawful forms of Processing;</li>
                        <li>The security measures taken shall be in compliance with Data Protection Regulations, shall be in accordance with reasonable industry standards and shall be adapted to the risks presented by the processing and the nature of the Personal Data to be Processed. For the avoidance of any doubt, "technical and organizational measures" shall also include arrangements for regularly testing, analyzing, and assessing the effectiveness of the technical and organizational measures implemented by the Processor.</li>
                        <li>If the Processing by Processor or its Personnel involves the transmission of the Personal Data over a network, the Processor shall implement appropriate measures designed to protect the Personal Data against the specific risks associated with such transmission, including the encryption of Personal Data.</li>
                        <li>The Processor shall implement reasonable restrictions regarding physical and electronic access to Personal Data, including but not limited to physical access controls, secure user authentication protocols, secure access control methods, firewall protection, anti-virus and malware protection, and use of encryption where appropriate or required by Applicable Laws.</li>
                        <li>The Processor shall review all its systems and processes from time to time to ensure compliance with the requirements prescribed as part of this DPA.</li>
                        <li>The Processor shall ensure Sub‑processors implement security measures no less protective than those required in this DPA.</li>
                    </ol>
                )
            },
            {
                id: 'data-breach',
                title: '10. PERSONAL DATA BREACH',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor shall notify the Company without undue delay and in no event later than 2 (two) hours after becoming aware of a Breach involving Personal Data. If any regulatory /government notification or law requires a notice for Breach within a shorter period of time, the Processor will also notify the Company within such shorter time period.</li>
                        <li>Upon request, the Processor shall provide a written incident report including a description of the Breach, categories and volume of data affected, root‑cause analysis, remedial actions, and status updates until closure. Where legally required, the Parties shall coordinate notifications to authorities and Data Principals.</li>
                        <li>The Processor agrees to take action immediately, at its own expense, to investigate the Breach and to identify, prevent and mitigate the effects of any such Breach, and to carry out any recovery or other action necessary to remedy the Breach. The Processor shall pay for or reimburse the Company for all costs, losses and expenses relating to any Security Breach of the Personal Data collected or Processed by the Processor on behalf of the Company.</li>
                        <li>The foregoing obligations of the Processor in relation to Personal Data Breach are without prejudice to its obligations to report cyber incidents to CERT-In as per the CERT-In Directions and all ancillary and incidental obligations thereunder.</li>
                    </ol>
                )
            },
            {
                id: 'monitoring-audit',
                title: '11. MONITORING AND AUDIT',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Company and its authorized representatives shall have the right to audit, and to examine all Services related data records (in whatever form they may be kept, whether written, electronic, or other) relating to or pertaining to this Agreement kept by or under the supervision of the Processor, as and when the need reasonably arises. The Processor undertakes to allow the conduct of such audits of its documents, and / or systems by the Company or any third-party auditor instructed by the Company for this purpose, at the cost of the Company. The Processor agrees to reasonably co-operate to such audits, in particular by answering to any questionnaire provided by the Company or said third party auditor.</li>
                        <li>If an audit identifies non‑compliance, the Processor shall remediate within timelines notified by the Company and bear the Company's audit costs where non‑compliance is found.</li>
                        <li>Notwithstanding the foregoing, in cases where breach by the Processor is considered as substantial, the Company shall have the right to immediately terminate the engagement with the Processor, without any outstanding obligations on the part of the Company.</li>
                        <li>The Processor shall deal promptly and appropriately with any inquiries from the Company relating to the Processing of Personal Data and all queries shall be responded to within 1 day from the receipt of query.</li>
                    </ol>
                )
            },
            {
                id: 'representations',
                title: '12. REPRESENTATIONS & WARRANTIES',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>Each Party hereby represents and warrants to the other Party that it is duly organized and has authority to enter into and perform this DPA and that its performance will comply with Applicable Law.</li>
                        <li>The Processor further represents that it has implemented and will maintain controls sufficient to comply with this DPA.</li>
                    </ol>
                )
            },
            {
                id: 'term-termination',
                title: '13. TERM & TERMINATION',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>This Agreement shall be deemed to have come into effect on and from the date of execution of the Service Agreement and shall be valid, legal, and binding during the entire term of the Service Agreement ("<strong>Term</strong>") and shall be co-terminus with the Service Agreement.</li>
                        <li>This Agreement will terminate automatically in case of termination of the Service Agreement regardless of the reason for such termination.</li>
                        <li>Notwithstanding the foregoing, the Company will have a right to terminate the DPA:</li>
                        <li>at any time by giving 30 days' prior notice, in case of termination for convenience; and</li>
                        <li>immediately, in case of any material breach of this DPA by the Processor, where such breach is not remedial immediately or may result in direct or indirect breach of Applicable Laws by the Company.</li>
                        <li>In case of termination by the Company, the Company shall have no outstanding obligations towards the Processor and the Processor shall comply with its obligations under this DPA.</li>
                        <li>In the event the provision of Processing the Personal Data by the Processor becomes unlawful under any law, the Processor shall inform Company within reasonable time period of obtaining knowledge about the same and the DPA shall stand terminated.</li>
                    </ol>
                )
            },
            {
                id: 'indemnification',
                title: '14. INDEMNIFICATION AND LIABILITY',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li>The Processor agrees to indemnify, defend, and hold harmless the Company and its customers, officers, employees, Personnel, Data Principals and agents from and against all direct and indirect claims, demands, actions, liabilities, costs, interest, damages, and expenses of any nature whatsoever (including all legal and other costs, charges, and expenses) incurred or suffered by the Company or its customers, officers, employees, Personnel, data principals and agents, arising out of any (i) any breach of or non-compliance of this DPA by the Processor (or its Personnel or Sub-processor), including its obligations and the representations and warranties, (ii) any breach of Applicable Laws by the Processor (or its Personnel or Sub-processor) that results in Company being in breach of the Applicable Laws; and/or (iii) any and third-party claims arising from or in relation to Processing by Processor (or its Personnel or Sub-processors). The Processor shall make payment for any claim under this Section within a period of 30 (thirty) days from the date of the claim by the Company.</li>
                        <li>The rights, powers, privileges, and remedies provided in this indemnity clause are cumulative and not exclusive of any rights, powers, privileges, or remedies provided by law.</li>
                        <li><strong>Third Party Claims</strong>: In the event of any third-party claim being raised against the Company, the Company may call upon the Processor to assume defence of the claim, and the Processor shall promptly, take appropriate actions to dispute, resist, appeal, compromise, defend, remedy or mitigate the third party claim, at its sole cost and expense. The Processor shall not enter into any settlement, consent order, or entry into judgement, without prior written consent of the Company.</li>
                        <li>The Processor agrees that any breach of this DPA or any unauthorized disclosure or access to Personal Data or Personal Data Breach, may cause the Company irreparable harm which cannot be fully compensated by monetary damages. Accordingly, in addition to any other remedies the Company may have at law or in equity, the Company shall be entitled to seek immediate injunction and other equitable relief to prevent any further or continuing breach of obligations.</li>
                        <li>The Parties hereby agree that in no event shall the Company bear any liability towards the Processor or its Personnel or Sub-processors.</li>
                    </ol>
                )
            },
            {
                id: 'miscellaneous',
                title: '15. MISCELLANEOUS',
                content: (
                    <ol className="list-[lower-alpha] pl-6 space-y-2 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <li><strong>Entire Agreement</strong>: The Service Agreement, along with the DPA and all annexures, appendices constitute the entire and final and exclusive statement of the agreement between the Parties with respect to the subject matter hereof and supersedes all prior and contemporaneous discussions, communications, negotiations and agreements, written or oral, with respect to the subject matter hereof.</li>
                        <li><strong>Amendments:</strong> No amendment is effective unless in writing and signed by both Parties.</li>
                        <li><strong>Survival</strong>: The obligations of the Parties under this Agreement that by their nature would continue beyond the termination, expiration or other conclusion of this Agreement and shall survive such termination, expiration or conclusion.</li>
                        <li><strong>Governing Law:</strong> This Agreement shall be governed by and construed in accordance with the laws of India.</li>
                        <li><strong>Dispute Resolution:</strong> In case of any dispute or difference either in interpretation or otherwise, of any terms of these Terms between the parties hereto, the parties shall attempt to resolve the same through discussion. In case the parties fail to arrive at an amiable solution through discussion, the same shall be referred to Arbitration at the request of either Party in writing, in accordance with the provisions of Arbitration and Conciliation Act, 1996, as amended from time to time. The arbitration shall be conducted by a sole Arbitrator to be mutually appointed between the Parties and decision of the arbitrator shall be final and binding on the parties hereto. The seat  and venue of arbitration shall be Madurai, Tamil Nadu, India. The rights and remedies provided in these Terms are cumulative and are in addition to and not in substitution for any other rights and remedies available at law or in equity.</li>
                        <li><strong>Incorporation of the General Terms from the Service Agreement</strong>: All General Terms incorporated in the Service Agreement shall be incorporated by reference to this DPA and shall apply <em>mutatis mutandis</em> to this DPA, unless specifically incorporated in this DPA or agreed otherwise. In the event of any conflict between the terms of the Service Agreement and this DPA, the terms of this DPA shall prevail to the extent it is related to any data or Personal Data.</li>
                    </ol>
                )
            },
            {
                id: 'signatures',
                title: 'Signatures',
                content: (
                    <div className="space-y-8 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p>IN WITNESS WHEREOF, the Parties have executed this Agreement as set forth below.</p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="font-bold mb-4">Zlendo Technologies Private Limited</p>
                                <div className="space-y-4">
                                    <p>Sign: __________________________</p>
                                    <p>Name: _________________________</p>
                                    <p>Title: __________________________</p>
                                    <p>Date: __________________________</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold mb-4"><span className="bg-yellow-200">[<em>Insert Name of Processor</em>]</span></p>
                                <div className="space-y-4">
                                    <p>Sign: __________________________</p>
                                    <p>Name: _______________________</p>
                                    <p>Title: ________________________</p>
                                    <p>Date: ________________________</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 'appendix-a',
                title: 'APPENDIX A',
                content: (
                    <div className="space-y-4 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p className="italic text-center">Description and details of Personal Data and Processing activities</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-[600px] border-collapse border border-gray-900">
                                <tbody>
                                    <tr>
                                        <td className="w-1/3 border border-gray-900 p-2 align-top font-bold text-center">Subject Matter of Processing</td>
                                        <td className="border border-gray-900 p-2 align-top text-justify"><em><span className="bg-yellow-200">[Nature of services being provided by the service provider / vendor to be added here]</span></em></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top font-bold text-center">Nature of Processing</td>
                                        <td className="border border-gray-900 p-2 align-top text-justify"><em><span className="bg-yellow-200">[What type of data is being processed by Service Provider and for what purpose to be added here.]</span></em></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top font-bold text-center">Types of Personal Data</td>
                                        <td className="border border-gray-900 p-2 align-top text-justify"><em><span className="bg-yellow-200">[Different types of personal data being processed by Service Provider to be added here.]</span></em></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top font-bold text-center">Duration of Processing</td>
                                        <td className="border border-gray-900 p-2 align-top text-justify">
                                            The Processor will Process Personal Data for the duration of the Service Agreement unless otherwise agreed upon in writing, or as otherwise required by Applicable Laws.
                                            <br /><br />
                                            Or
                                            <br /><br />
                                            <em><span className="bg-yellow-200">[Specify duration, e.g., six months from execution of this DPA]</span></em>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-900 p-2 align-top font-bold text-center">Retention Period</td>
                                        <td className="border border-gray-900 p-2 align-top text-justify">
                                            Data shall be retained for the <strong>duration of the Service Agreement</strong> between the Parties. Deletion will occur upon request or within <strong>15 days</strong> following the termination or expiration of the Service Agreement, whichever comes first.
                                            <br /><br />
                                            Or
                                            <br /><br />
                                            <em><span className="bg-yellow-200">[Specify duration, e.g., one month from termination of this DPA or Service Agreement]</span></em>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            },
            {
                id: 'appendix-b',
                title: 'APPENDIX B',
                content: (
                    <div className="space-y-4 font-nunito text-lg text-zlendo-grey-medium leading-relaxed">
                        <p className="italic text-center">List of Sub-processors</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-[1000px] border-collapse border border-gray-900 text-sm">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-900 p-2 bg-white text-center">S.No</th>
                                        <th className="border border-gray-900 p-2 bg-white text-center">Sub-processor Name</th>
                                        <th className="border border-gray-900 p-2 bg-white text-center">Processing Purpose</th>
                                        <th className="border border-gray-900 p-2 bg-white text-center">Location of Data Processing and Storage. (Mention each separately)</th>
                                        <th className="border border-gray-900 p-2 bg-white text-center">Scope of Data Access</th>
                                        <th className="border border-gray-900 p-2 bg-white text-center">Specific Services/Tools Involved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4].map((row) => (
                                        <tr key={row}>
                                            <td className="border border-gray-900 p-2 h-16">&nbsp;</td>
                                            <td className="border border-gray-900 p-2 h-16">&nbsp;</td>
                                            <td className="border border-gray-900 p-2 h-16">&nbsp;</td>
                                            <td className="border border-gray-900 p-2 h-16">&nbsp;</td>
                                            <td className="border border-gray-900 p-2 h-16">&nbsp;</td>
                                            <td className="border border-gray-900 p-2 h-16">&nbsp;</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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
                        <span className="text-gray-900 font-medium">Data Processing Agreement</span>
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
