import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'developerSolutionsPage',
    title: 'Developer Solutions Page',
    type: 'document',
    groups: [
        { name: 'seo', title: '🔍 SEO & Meta' },
        { name: 'hero', title: '⚙️ Hero Section' },
        { name: 'caseStudy', title: '📖 Case Study' },
        { name: 'cta', title: '🎯 Final CTA' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
            initialValue: 'Developer Solutions Page'
        }),
        defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
        defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', group: 'seo' }),
        defineField({ name: 'seoKeywords', title: 'SEO Keywords', type: 'string', group: 'seo' }),
        
        defineField({ name: 'heroBadgeText', title: 'Hero Badge Text', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitleHighlight', title: 'Hero Title Highlight', type: 'string', group: 'hero' }),
        defineField({ name: 'heroParagraph', title: 'Hero Paragraph', type: 'text', group: 'hero' }),

        // Primary Case Study
        defineField({ name: 'caseStudyTitle', title: 'Case Study Title', type: 'string', group: 'caseStudy' }),
        defineField({ name: 'caseStudySubtitle', title: 'Case Study Subtitle', type: 'string', group: 'caseStudy' }),
        defineField({ name: 'caseStudyIcon', title: 'Case Study Icon (Lucide name)', type: 'string', description: 'e.g. Cpu, Layout, Home, Sparkles', group: 'caseStudy' }),
        
        defineField({ name: 'challengeTitle', title: 'Challenge Title', type: 'string', group: 'caseStudy' }),
        defineField({ name: 'challengeDescription', title: 'Challenge Description', type: 'text', group: 'caseStudy' }),
        
        defineField({ name: 'solutionTitle', title: 'Solution Title', type: 'string', group: 'caseStudy' }),
        defineField({ name: 'solutionDescription', title: 'Solution Description', type: 'text', group: 'caseStudy' }),
        
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            group: 'caseStudy',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'label', type: 'string' }),
                    defineField({ name: 'value', type: 'string' })
                ]
            }]
        }),
        defineField({ 
            name: 'caseStudyImage', 
            title: 'Case Study Image', 
            type: 'image', 
            group: 'caseStudy',
            options: { hotspot: true },
            fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })]
        }),

        // Additional Case Studies
        defineField({
            name: 'additionalCaseStudies',
            title: 'Additional Case Studies',
            type: 'array',
            group: 'caseStudy',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', type: 'string' }),
                    defineField({ name: 'subtitle', type: 'string' }),
                    defineField({ name: 'iconName', type: 'string' }),
                    defineField({ name: 'challengeTitle', type: 'string' }),
                    defineField({ name: 'challengeDescription', type: 'text' }),
                    defineField({ name: 'solutionTitle', type: 'string' }),
                    defineField({ name: 'solutionDescription', type: 'text' }),
                    defineField({
                        name: 'stats',
                        type: 'array',
                        of: [{
                            type: 'object',
                            fields: [
                                defineField({ name: 'label', type: 'string' }),
                                defineField({ name: 'value', type: 'string' })
                            ]
                        }]
                    }),
                    defineField({
                        name: 'image',
                        type: 'image',
                        options: { hotspot: true },
                        fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })]
                    })
                ],
                preview: {
                    select: { title: 'title', subtitle: 'subtitle', media: 'image' }
                }
            }]
        }),

        defineField({ name: 'ctaTitle', title: 'CTA Title', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaTitleHighlight', title: 'CTA Title Highlight', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaPrimaryLabel', title: 'Primary CTA Label', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaSecondaryLabel', title: 'Secondary CTA Label', type: 'string', group: 'cta' })
    ],
    preview: {
        select: { title: 'seoTitle' },
        prepare({ title }) {
            return { title: title || 'Developer Solutions Page' };
        }
    }
});
