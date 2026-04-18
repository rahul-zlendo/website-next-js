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
        sections: [
            {
                id: 'intro',
                title: 'Introduction',
                content: 'Welcome to Zlendo Realty. This Privacy Policy explains how we collect, use, and protect your information when you use our services.'
            },
            {
                id: 'data-collection',
                title: 'Data Collection',
                content: 'We collect information that you provide to us directly, such as when you create an account, upload a floor plan, or contact support.'
            }
        ]
    },
    {
        id: 'terms-of-service',
        slug: 'terms-of-service',
        title: 'Terms of Service',
        icon: FileText,
        category: 'legal',
        description: 'Zlendo Realty Terms of Service - Understand the rules and regulations for using our services.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'acceptance',
                title: 'Acceptance of Terms',
                content: 'By accessing or using Zlendo Realty, you agree to comply with and be bound by these Terms of Service.'
            },
            {
                id: 'user-conduct',
                title: 'User Conduct',
                content: 'You agree not to use our services for any unlawful purpose or in any way that could damage our platform.'
            }
        ]
    },
    {
        id: 'cookie-policy',
        slug: 'cookie-policy',
        title: 'Cookie Policy',
        icon: Cookie,
        category: 'privacy',
        description: 'Information about how we use cookies and similar technologies.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'what-are-cookies',
                title: 'What are Cookies?',
                content: 'Cookies are small text files that are stored on your device when you visit our website.'
            },
            {
                id: 'how-we-use-them',
                title: 'How we use Cookies',
                content: 'We use cookies to improve your experience, remember your preferences, and analyze our traffic.'
            }
        ]
    },
    {
        id: 'general-terms',
        slug: 'general-terms',
        title: 'General Terms',
        icon: Scale,
        category: 'legal',
        description: 'General terms and conditions for using our platform.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'scope',
                title: 'Scope of Terms',
                content: 'These general terms apply to all interactions with the Zlendo Realty platform and services.'
            }
        ]
    },
    {
        id: 'nda-vendors',
        slug: 'nda-vendors',
        title: 'NDA for Vendors',
        icon: UserCheck,
        category: 'agreement',
        description: 'Non-disclosure agreement for vendor partnerships.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'confidentiality',
                title: 'Confidentiality Agreement',
                content: 'Vendors agree to maintain the confidentiality of all sensitive information shared during the partnership.'
            }
        ]
    },
    {
        id: 'refund-policy',
        slug: 'refund-policy',
        title: 'Refund & Cancellation Policy',
        icon: RefreshCw,
        category: 'service',
        description: 'Our policy on refunds and cancellations.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'refunds',
                title: 'Refund Eligibility',
                content: 'Refunds are subject to our service quality standards and will be reviewed on a case-by-case basis.'
            }
        ]
    },
    {
        id: 'sla',
        slug: 'sla',
        title: 'Service Level Agreement',
        icon: Clock,
        category: 'service',
        description: 'Our commitment to service quality and availability.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'uptime',
                title: 'Service Uptime',
                content: 'We strive for 99.9% uptime for our core rendering and floor planning engines.'
            }
        ]
    },
    {
        id: 'community-guidelines',
        slug: 'community-guidelines',
        title: 'Community Guidelines',
        icon: ShieldAlert,
        category: 'legal',
        description: 'Rules and standards for conduct and content on the Zlendo Realty platform.',
        lastUpdated: 'January 2026',
        sections: [
            {
                id: 'respect',
                title: 'Community Respect',
                content: 'All users are expected to engage respectfully with other members of the Zlendo community.'
            }
        ]
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
