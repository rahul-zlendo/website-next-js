import { Cookie, FileText, Lock, Scale, RefreshCw, Clock, ShieldAlert, UserCheck } from 'lucide-react';
import type { PolicyMetadata } from './policies/types';
import { POLICY_CATEGORIES } from './policies/types';

// Import policy sections from separate files
import { privacyPolicySections } from './policies/privacy-policy';
import { termsOfServiceSections } from './policies/terms-of-service';
import { cookiePolicySections } from './policies/cookie-policy';
import { generalTermsSections } from './policies/general-terms';
import { ndaVendorsSections } from './policies/nda-vendors';
import { refundPolicySections } from './policies/refund-policy';
import { slaSections } from './policies/sla';
import { communityGuidelinesSections } from './policies/community-guidelines';

export type { PolicySection, PolicyMetadata } from './policies/types';
export { POLICY_CATEGORIES };

export const POLICIES: PolicyMetadata[] = [
    {
        id: 'privacy-policy',
        slug: 'privacy-policy',
        title: 'Privacy Policy',
        icon: Lock,
        category: 'legal',
        description: 'Zlendo Technologies Privacy Policy - Learn how we collect, use, and protect your personal information.',
        lastUpdated: 'April 2026',
        sections: privacyPolicySections
    },
    {
        id: 'terms-of-service',
        slug: 'terms-of-service',
        title: 'Terms of Service',
        icon: FileText,
        category: 'legal',
        description: 'Zlendo Realty Terms of Service - Understand the rules and regulations for using our services.',
        lastUpdated: 'April 2026',
        sections: termsOfServiceSections
    },
    {
        id: 'cookie-policy',
        slug: 'cookie-policy',
        title: 'Cookie Policy',
        icon: Cookie,
        category: 'privacy',
        description: 'Information about how we use cookies and similar technologies.',
        lastUpdated: 'April 2026',
        sections: cookiePolicySections
    },
    {
        id: 'general-terms',
        slug: 'general-terms',
        title: 'General Terms',
        icon: Scale,
        category: 'legal',
        description: 'General terms and conditions for using our platform.',
        lastUpdated: 'April 2026',
        sections: generalTermsSections
    },
    {
        id: 'nda-vendors',
        slug: 'nda-vendors',
        title: 'NDA for Vendors',
        icon: UserCheck,
        category: 'agreement',
        description: 'Non-disclosure agreement for vendor partnerships.',
        lastUpdated: 'April 2026',
        sections: ndaVendorsSections
    },
    {
        id: 'refund-policy',
        slug: 'refund-policy',
        title: 'Refund & Cancellation Policy',
        icon: RefreshCw,
        category: 'service',
        description: 'Our policy on refunds and cancellations.',
        lastUpdated: 'April 2026',
        sections: refundPolicySections
    },
    {
        id: 'sla',
        slug: 'sla',
        title: 'Service Level Agreement',
        icon: Clock,
        category: 'service',
        description: 'Our commitment to service quality and availability.',
        lastUpdated: 'April 2026',
        sections: slaSections
    },
    {
        id: 'community-guidelines',
        slug: 'community-guidelines',
        title: 'Community Guidelines',
        icon: ShieldAlert,
        category: 'legal',
        description: 'Rules and standards for conduct and content on the Zlendo Realty platform.',
        lastUpdated: 'April 2026',
        sections: communityGuidelinesSections
    }
];

export const getPolicyBySlug = (slug: string): PolicyMetadata | undefined => {
    return POLICIES.find(policy => policy.slug === slug);
};

export const getPoliciesByCategory = (category: string): PolicyMetadata[] => {
    return POLICIES.filter(policy => policy.category === category);
};
