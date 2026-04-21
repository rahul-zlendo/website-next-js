import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

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

export const POLICY_CATEGORIES = {
    legal: { label: 'Legal', color: 'text-blue-600' },
    privacy: { label: 'Privacy & Data', color: 'text-purple-600' },
    service: { label: 'Service Terms', color: 'text-green-600' },
    agreement: { label: 'Agreements', color: 'text-orange-600' }
};
