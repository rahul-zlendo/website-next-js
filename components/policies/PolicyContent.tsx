import { Calendar } from 'lucide-react';
import type { PolicySection } from '@/lib/constants/policiesData';

interface PolicyContentProps {
    title: string;
    description: string;
    lastUpdated: string;
    sections: PolicySection[];
    icon: React.ComponentType<{ className?: string }>;
}

const PolicyContent: React.FC<PolicyContentProps> = ({ title, description, lastUpdated, sections, icon: Icon }) => {
    const renderContent = (content: string | string[] | React.ReactNode) => {
        if (Array.isArray(content)) {
            return (
                <ul className="list-disc pl-6 space-y-2 text-lg text-zlendo-grey-medium">
                    {content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            );
        }
        if (typeof content === 'string') {
            return <p className="text-lg text-zlendo-grey-medium leading-relaxed">{content}</p>;
        }
        return content;
    };

    const renderSection = (section: PolicySection, level: number = 0) => {
        const headingClass = level === 0
            ? 'text-2xl font-black mb-4 flex items-center gap-3'
            : 'text-xl font-bold mb-3 text-zlendo-grey-dark';

        return (
            <section key={section.id} id={section.id} className={level === 0 ? 'scroll-mt-24' : ''}>
                <h2 className={headingClass}>
                    {level === 0 && <Icon className="w-6 h-6 text-zlendo-teal" />}
                    {section.title}
                </h2>
                <div className="space-y-4 mb-8">
                    {renderContent(section.content)}
                </div>
                {section.subsections && (
                    <div className="ml-6 space-y-6">
                        {section.subsections.map(subsection => renderSection(subsection, level + 1))}
                    </div>
                )}
            </section>
        );
    };

    return (
        <div className="bg-white rounded-2xl border border-zlendo-grey-medium/10 p-5 md:p-12 font-nunito">
            {/* Header */}
            <div className="mb-12 pb-8 border-b border-zlendo-grey-medium/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zlendo-teal/10 text-zlendo-teal mb-6 border border-zlendo-teal/20">
                    <Icon className="w-4 h-4" />
                    <span className="text-[11px] font-black uppercase tracking-[0.3em]">Legal Document</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-zlendo-grey-dark mb-4">{title}</h1>
                <p className="text-xl text-zlendo-grey-medium font-medium mb-6">{description}</p>
                <div className="flex items-center gap-2 text-sm text-zlendo-grey-medium font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>Last updated: {lastUpdated}</span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-12 text-zlendo-grey-dark leading-relaxed">
                {sections.map(section => renderSection(section))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 pt-8 border-t border-zlendo-grey-medium/10">
                <h2 className="text-2xl font-black mb-4 text-zlendo-teal">Questions?</h2>
                <p className="text-lg text-zlendo-grey-medium">
                    If you have any questions about this policy, please contact us at{' '}
                    <a href="mailto:contact@zlendorealty.com" className="text-zlendo-teal font-bold hover:underline">
                        contact@zlendorealty.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default PolicyContent;
