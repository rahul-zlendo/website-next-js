import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'builderAndPromoterPage',
    title: 'Builder & Promoter Page',
    type: 'document',
    groups: [
        { name: 'seo', title: '🔍 SEO & Meta' },
        { name: 'hero', title: '🏢 Hero Section' },
        { name: 'caseStudy', title: '📖 Case Study' },
        { name: 'features', title: '✨ Why Choose Zlendo Realty' },
        { name: 'cta', title: '🎯 Final CTA' },
    ],
    fields: [
        // Hidden Title for CMS Root ID
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
            initialValue: 'Builder & Promoter Page'
        }),
        // SEO
        defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
        defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', group: 'seo' }),
        defineField({ name: 'seoKeywords', title: 'SEO Keywords', type: 'string', group: 'seo' }),
        
        // Hero
        defineField({ name: 'heroBadgeText', title: 'Hero Badge Text', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitleHighlight', title: 'Hero Title Highlight', type: 'string', group: 'hero' }),
        defineField({ name: 'heroParagraph', title: 'Hero Paragraph', type: 'text', group: 'hero' }),

        // Case Study
        defineField({ name: 'caseStudyTitle', title: 'Case Study Title', type: 'string', group: 'caseStudy' }),
        defineField({ name: 'caseStudySubtitle', title: 'Case Study Subtitle', type: 'string', group: 'caseStudy' }),
        defineField({ name: 'caseStudyIcon', title: 'Case Study Icon (Lucide name)', type: 'string', description: 'e.g. Layout, Home, Sparkles, Building2', group: 'caseStudy' }),
        
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

        // Why Choose Zlendo Realty (Features)
        defineField({ name: 'featuresBadgeText', title: 'Features Badge Text', type: 'string', group: 'features' }),
        defineField({ name: 'featuresTitle', title: 'Features Title', type: 'string', group: 'features' }),
        defineField({ name: 'featuresTitleHighlight', title: 'Features Title Highlight', type: 'string', group: 'features' }),
        defineField({
            name: 'featuresList',
            title: 'Features List',
            type: 'array',
            group: 'features',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'text', title: 'Feature Text', type: 'string' }),
                    defineField({ name: 'iconName', title: 'Icon Name (Lucide)', type: 'string' })
                ]
            }]
        }),

        // Final CTA
        defineField({ name: 'ctaTitle', title: 'CTA Title', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaTitleHighlight', title: 'CTA Title Highlight', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaPrimaryLabel', title: 'Primary CTA Label', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaSecondaryLabel', title: 'Secondary CTA Label', type: 'string', group: 'cta' })
    ],
    preview: {
        select: { title: 'seoTitle' },
        prepare({ title }) {
            return {
                title: title || 'Builder & Promoter Page'
            };
        }
    }
});
