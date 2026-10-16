import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'segmentPage',
    title: 'Segment Page',
    type: 'document',
    groups: [
        { name: 'seo', title: '🔍 SEO & Meta' },
        { name: 'hero', title: '🏠 Hero Section' },
        { name: 'painpoints', title: '😤 Pain Points' },
        { name: 'features', title: '✨ Features' },
        { name: 'workflow', title: '⚙️ Workflow' },
        { name: 'stats', title: '📊 Stats' },
        { name: 'faq', title: '❓ FAQs' },
        { name: 'cta', title: '🎯 CTA' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title (Internal)',
            type: 'string',
            hidden: true,
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
        }),

        // SEO
        defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
        defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', group: 'seo' }),
        defineField({
            name: 'seoKeywords',
            title: 'SEO Keywords',
            type: 'array',
            group: 'seo',
            of: [{ type: 'string' }],
        }),

        // Hero
        defineField({ name: 'heroBadge', title: 'Hero Badge', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitleHighlight', title: 'Hero Title Highlight', type: 'string', group: 'hero' }),
        defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', group: 'hero' }),
        defineField({ name: 'heroCtaLabel', title: 'Hero CTA Label', type: 'string', group: 'hero' }),

        // Pain Points
        defineField({ name: 'painPointsTitle', title: 'Pain Points Section Title', type: 'string', group: 'painpoints' }),
        defineField({
            name: 'painPoints',
            title: 'Pain Points',
            type: 'array',
            group: 'painpoints',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'text' }),
                    defineField({ name: 'iconName', title: 'Icon Name (Lucide)', type: 'string', description: 'e.g. Clock, Compass, Package, Users, Zap' }),
                ],
            }],
        }),

        // Features
        defineField({ name: 'featuresTitle', title: 'Features Section Title', type: 'string', group: 'features' }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            group: 'features',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'text' }),
                ],
            }],
        }),

        // Workflow
        defineField({ name: 'workflowTitle', title: 'Workflow Section Title', type: 'string', group: 'workflow' }),
        defineField({
            name: 'workflowSteps',
            title: 'Workflow Steps',
            type: 'array',
            group: 'workflow',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'step', title: 'Step Number (e.g. 01)', type: 'string' }),
                    defineField({ name: 'title', title: 'Title', type: 'string' }),
                    defineField({ name: 'desc', title: 'Description', type: 'text' }),
                ],
            }],
        }),

        // Stats
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            group: 'stats',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'value', title: 'Value', type: 'string' }),
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                ],
            }],
        }),

        // FAQ
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            group: 'faq',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'question', title: 'Question', type: 'string' }),
                    defineField({ name: 'answer', title: 'Answer', type: 'text' }),
                ],
            }],
        }),

        // CTA
        defineField({ name: 'ctaTitle', title: 'CTA Title', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaBody', title: 'CTA Body', type: 'text', group: 'cta' }),
    ],
    preview: {
        select: {
            title: 'seoTitle',
            subtitle: 'slug.current',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Segment Page',
                subtitle: subtitle || '',
            };
        },
    },
});
