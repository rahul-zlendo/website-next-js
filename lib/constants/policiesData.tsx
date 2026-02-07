import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
// import { Shield, Cookie, FileText, Lock, Scale, RefreshCw, Clock, UserCheck } from 'lucide-react';
import { Cookie, FileText, Lock, Scale, RefreshCw, Clock, ShieldAlert, UserCheck } from 'lucide-react';

export interface PolicySection {
    id: string;
    title: string;
    content: string | string[] | ReactNode;
    subsections?: PolicySection[];
}

export interface PolicyMetadata {
    id: string;
    slug: string;
    title: string;
    icon: LucideIcon;
    category: 'legal' | 'privacy' | 'service' | 'agreement';
    description: string;
    lastUpdated: string;
    sections: PolicySection[];
}

// TODO: Replace placeholder content with actual content from Word documents
export const POLICIES: PolicyMetadata[] = [
    {
        id: 'privacy-policy',
        slug: 'privacy-policy',
        title: 'Privacy Policy',
        icon: Lock,
        category: 'privacy',
        description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to PrivacyPolicyPage.tsx
    },
    {
        id: 'terms-of-service',
        slug: 'terms-of-service',
        title: 'Terms of Service',
        icon: FileText,
        category: 'legal',
        description: 'Zlendo Realty Terms of Service - Understand the rules and regulations for using our services.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to TermsPage.tsx
    },
    {
        id: 'cookie-policy',
        slug: 'cookie-policy',
        title: 'Cookie Policy',
        icon: Cookie,
        category: 'privacy',
        description: 'Information about how we use cookies and similar technologies.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to CookiePolicyPage.tsx
    },
    // {
    //     id: 'dpa',
    //     slug: 'dpa',
    //     title: 'Data Processing Agreement',
    //     icon: Shield,
    //     category: 'privacy',
    //     description: 'Our commitment to data protection and processing standards.',
    //     lastUpdated: 'January 2026',
    //     sections: [] 
    // },
    {
        id: 'general-terms',
        slug: 'general-terms',
        title: 'General Terms',
        icon: Scale,
        category: 'legal',
        description: 'General terms and conditions for using our platform.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to GeneralTermsPage.tsx
    },
    // {
    //     id: 'nda-customers',
    //     slug: 'nda-customers',
    //     title: 'NDA for Customers',
    //     icon: UserCheck,
    //     category: 'agreement',
    //     description: 'Non-disclosure agreement for customer relationships.',
    //     lastUpdated: 'January 2026',
    //     sections: [
    //         {
    //             id: 'introduction',
    //             title: 'Introduction',
    //             content: 'This Non-Disclosure Agreement protects confidential information shared between Zlendo Realty and our customers.'
    //         },
    //         // Add more sections from the NDA for Customers.docx document
    //     ]
    // },
    {
        id: 'nda-vendors',
        slug: 'nda-vendors',
        title: 'NDA for Vendors',
        icon: UserCheck,
        category: 'agreement',
        description: 'Non-disclosure agreement for vendor partnerships.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to NDAVendorsPage.tsx
    },
    {
        id: 'refund-policy',
        slug: 'refund-policy',
        title: 'Refund & Cancellation Policy',
        icon: RefreshCw,
        category: 'service',
        description: 'Our policy on refunds and cancellations.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to RefundPolicyPage.tsx
    },
    {
        id: 'sla',
        slug: 'sla',
        title: 'Service Level Agreement',
        icon: Clock,
        category: 'service',
        description: 'Our commitment to service quality and availability.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to ServiceLevelAgreementPage.tsx
    },
    {
        id: 'community-guidelines',
        slug: 'community-guidelines',
        title: 'Community Guidelines',
        icon: ShieldAlert,
        category: 'legal',
        description: 'Rules and standards for conduct and content on the Zlendo Realty platform.',
        lastUpdated: 'January 2026',
        sections: [] // Content moved to CommunityGuidelinesPage.tsx
    }
];

export const getPolicyBySlug = (slug: string): PolicyMetadata | undefined => {
    return POLICIES.find(policy => policy.slug === slug);
};

export const getPoliciesByCategory = (category: string): PolicyMetadata[] => {
    return POLICIES.filter(policy => policy.category === category);
};

export const POLICY_CATEGORIES = {
    legal: { label: 'Legal', color: 'text-blue-600' },
    privacy: { label: 'Privacy & Data', color: 'text-purple-600' },
    service: { label: 'Service Terms', color: 'text-green-600' },
    agreement: { label: 'Agreements', color: 'text-orange-600' }
};
