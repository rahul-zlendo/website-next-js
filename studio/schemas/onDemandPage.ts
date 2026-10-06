import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'onDemandPage',
    title: 'Page: On-Demand Webinars',
    type: 'document',
    groups: [
        { name: 'seo', title: '🔍 SEO & Meta' },
        { name: 'hero', title: '🏠 Hero Section' },
        { name: 'lectures', title: '📺 Lectures' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
            initialValue: 'Page: On-Demand Webinars'
        }),
        // ── SEO & Meta ────────────────────────────────────────────────────────
        defineField({
            name: 'seoTitle',
            title: 'Page Title (SEO)',
            type: 'string',
            group: 'seo',
            initialValue: 'On-Demand Webinars & Recorded Events | Zlendo Realty',
        }),
        defineField({
            name: 'seoDescription',
            title: 'Meta Description (SEO)',
            type: 'text',
            rows: 3,
            group: 'seo',
            initialValue: 'Access our archives of recorded webinars, masterclasses, and past events to level up your architectural workflows.'
        }),

        // ── Hero ──────────────────────────────────────────────────────────────
        defineField({
            name: 'heroTitlePrefix',
            title: 'Hero Title Prefix',
            type: 'string',
            group: 'hero',
            initialValue: 'On-Demand',
        }),
        defineField({
            name: 'heroTitleHighlight',
            title: 'Hero Title Highlight (Teal)',
            type: 'string',
            group: 'hero',
            initialValue: 'Webinars',
        }),
        defineField({
            name: 'heroDesc',
            title: 'Hero Description',
            type: 'text',
            rows: 3,
            group: 'hero',
            initialValue: 'Catch up on all the masterclasses, product Deep Dives, and live workflows you might have missed.',
        }),

        // ── Lectures ───────────────────────────────────────────────────────────
        defineField({
            name: 'lectures',
            title: 'On-Demand Lectures',
            type: 'array',
            group: 'lectures',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'videoId', title: 'YouTube Video ID', type: 'string', validation: Rule => Rule.required() }),
                        defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
                        defineField({
                            name: 'category',
                            title: 'Category',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Architecture', value: 'Architecture' },
                                    { title: 'Workflow', value: 'Workflow' },
                                    { title: 'AI Planning', value: 'AI Planning' },
                                    { title: 'Business', value: 'Business' }
                                ],
                                layout: 'dropdown' // Allows them to add more by typing or selecting
                            }
                        }),
                        defineField({ name: 'duration', title: 'Duration (e.g. 45 mins)', type: 'string' }),
                        defineField({ name: 'date', title: 'Date (e.g. August 12, 2026)', type: 'string' }),
                        defineField({ name: 'link', title: 'Action Link (Optional)', type: 'string', initialValue: '#' }),
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'category' }
                    }
                }
            ],
        }),
    ],
    preview: {
        select: { title: 'seoTitle' },
        prepare({ title }) {
            return {
                title: title || 'Page: On-Demand Webinars'
            };
        },
    },
});
