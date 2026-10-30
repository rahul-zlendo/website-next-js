import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'comparePage',
    title: 'Compare Page',
    type: 'document',
    groups: [
        { name: 'seo', title: '🔍 SEO & Meta' },
        { name: 'hero', title: '🏠 Hero Section' },
        { name: 'competitor', title: '🆚 Competitor Overview' },
        { name: 'comparison', title: '📊 Comparison Table' },
        { name: 'verdict', title: '⚖️ Verdict & Pros/Cons' },
        { name: 'alternatives', title: '🔄 Alternatives' },
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
            name: 'pageType',
            title: 'Page Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Comparison (vs competitor)', value: 'comparison' },
                    { title: 'Alternatives (best X alternatives)', value: 'alternatives' },
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
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'hero' }),
        defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', group: 'hero' }),
        defineField({ name: 'heroBadge', title: 'Hero Badge', type: 'string', group: 'hero' }),
        defineField({ name: 'heroCtaLabel', title: 'Hero CTA Label', type: 'string', group: 'hero' }),

        // Competitor Overview
        defineField({ name: 'competitorName', title: 'Competitor Name', type: 'string', group: 'competitor' }),
        defineField({ name: 'competitorTagline', title: 'Competitor Tagline', type: 'string', group: 'competitor' }),
        defineField({ name: 'competitorFounded', title: 'Competitor Founded Year', type: 'string', group: 'competitor' }),
        defineField({ name: 'competitorPricing', title: 'Competitor Pricing', type: 'string', group: 'competitor' }),
        defineField({ name: 'competitorBestFor', title: 'Competitor Best For', type: 'string', group: 'competitor' }),
        defineField({ name: 'zlendoPricing', title: 'Zlendo Pricing', type: 'string', group: 'competitor' }),
        defineField({ name: 'zlendoBestFor', title: 'Zlendo Best For', type: 'string', group: 'competitor' }),

        // Comparison Table
        defineField({
            name: 'comparisonRows',
            title: 'Comparison Rows',
            type: 'array',
            group: 'comparison',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'feature', title: 'Feature', type: 'string' }),
                    defineField({ name: 'zlendo', title: 'Zlendo Value', type: 'string' }),
                    defineField({ name: 'competitor', title: 'Competitor Value', type: 'string' }),
                    defineField({ name: 'zlendoNote', title: 'Zlendo Note (small text)', type: 'string' }),
                ],
            }],
        }),

        // Winner Sections
        defineField({
            name: 'winnerSections',
            title: 'Winner Sections',
            type: 'array',
            group: 'comparison',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'category', title: 'Category', type: 'string' }),
                    defineField({
                        name: 'winner',
                        title: 'Winner',
                        type: 'string',
                        options: {
                            list: [
                                { title: 'Zlendo', value: 'zlendo' },
                                { title: 'Competitor', value: 'competitor' },
                                { title: 'Tie', value: 'tie' },
                            ],
                        },
                    }),
                    defineField({ name: 'explanation', title: 'Explanation', type: 'text' }),
                ],
            }],
        }),

        // Pros & Cons
        defineField({
            name: 'zlendoPros',
            title: 'Zlendo Pros',
            type: 'array',
            group: 'verdict',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'zlendoCons',
            title: 'Zlendo Cons',
            type: 'array',
            group: 'verdict',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'competitorPros',
            title: 'Competitor Pros',
            type: 'array',
            group: 'verdict',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'competitorCons',
            title: 'Competitor Cons',
            type: 'array',
            group: 'verdict',
            of: [{ type: 'string' }],
        }),

        // Verdict
        defineField({ name: 'verdictTitle', title: 'Verdict Title', type: 'string', group: 'verdict' }),
        defineField({ name: 'verdictBody', title: 'Verdict Body', type: 'text', group: 'verdict' }),
        defineField({ name: 'whoShouldChooseZlendo', title: 'Who Should Choose Zlendo', type: 'text', group: 'verdict' }),
        defineField({ name: 'whoShouldChooseCompetitor', title: 'Who Should Choose Competitor', type: 'text', group: 'verdict' }),

        // Alternatives (for alternatives page type)
        defineField({ name: 'alternativesIntro', title: 'Alternatives Intro', type: 'text', group: 'alternatives' }),
        defineField({
            name: 'alternatives',
            title: 'Alternatives',
            type: 'array',
            group: 'alternatives',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'name', title: 'Name', type: 'string' }),
                    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
                    defineField({ name: 'bestFor', title: 'Best For', type: 'string' }),
                    defineField({ name: 'pricing', title: 'Pricing', type: 'string' }),
                    defineField({
                        name: 'pros',
                        title: 'Pros',
                        type: 'array',
                        of: [{ type: 'string' }],
                    }),
                    defineField({
                        name: 'cons',
                        title: 'Cons',
                        type: 'array',
                        of: [{ type: 'string' }],
                    }),
                    defineField({ name: 'verdict', title: 'Verdict', type: 'text' }),
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
            subtitle: 'pageType',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Compare Page',
                subtitle: subtitle || '',
            };
        },
    },
});
