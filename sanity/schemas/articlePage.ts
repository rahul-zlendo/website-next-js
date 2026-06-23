import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'articlePage',
    title: 'Article Page',
    type: 'document',
    groups: [
        { name: 'seo', title: '🔍 SEO & Meta' },
        { name: 'hero', title: '🏠 Hero Section' },
        { name: 'content', title: '📝 Content' },
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
        defineField({
            name: 'articleType',
            title: 'Article Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Guide', value: 'guide' },
                    { title: 'Explainer', value: 'explainer' },
                    { title: 'How-To', value: 'how-to' },
                ],
                layout: 'radio',
            },
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

        // Key Takeaways
        defineField({
            name: 'keyTakeaways',
            title: 'Key Takeaways',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
        }),

        // Stats Bar
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            group: 'content',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'value', title: 'Value', type: 'string' }),
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                ],
            }],
        }),

        // Content Sections
        defineField({
            name: 'sections',
            title: 'Content Sections',
            type: 'array',
            group: 'content',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'heading', title: 'Heading (H2)', type: 'string' }),
                    defineField({ name: 'subheading', title: 'Subheading (H3)', type: 'string' }),
                    defineField({
                        name: 'body',
                        title: 'Body',
                        type: 'array',
                        of: [{ type: 'block' }],
                    }),
                    defineField({
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: { hotspot: true },
                    }),
                    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
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
        defineField({ name: 'ctaTitleHighlight', title: 'CTA Title Highlight', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaBody', title: 'CTA Body', type: 'text', group: 'cta' }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string', group: 'cta' }),
    ],
    preview: {
        select: {
            title: 'seoTitle',
            subtitle: 'articleType',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Article Page',
                subtitle: subtitle || '',
            };
        },
    },
});
