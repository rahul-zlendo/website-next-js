import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'floorPlannerPage',
    title: 'Floor Planner Page',
    type: 'document',
    groups: [
        { name: 'seo', title: '🔍 SEO & Meta' },
        { name: 'hero', title: '🏠 Hero Section' },
        { name: 'workflow', title: '⚙️ Workflow' },
        { name: 'drafting', title: '📐 Precision Drafting' },
        { name: 'magic', title: '✨ Magic Upload' },
        { name: 'templates', title: '🖼️ Architect Templates' },
        { name: 'cta', title: '🎯 Split CTA' },
        { name: 'faq', title: '❓ FAQs' },
    ],
    fields: [
        // Hidden Title for CMS Root ID
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
            initialValue: 'Floor Planner Page'
        }),
        // SEO
        defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
        defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', group: 'seo' }),
        
        // Hero
        defineField({ name: 'heroBadgeText', title: 'Hero Badge Text', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', group: 'hero' }),
        defineField({ name: 'heroTitleHighlight', title: 'Hero Title Highlight', type: 'string', group: 'hero' }),
        defineField({ name: 'heroSubtitle', title: 'Hero Subtitle (Part 1)', type: 'text', group: 'hero' }),
        defineField({ name: 'heroSubtitleAfter', title: 'Hero Subtitle (Part 2)', type: 'text', group: 'hero' }),
        defineField({ name: 'heroPrimaryCtaLabel', title: 'Primary CTA Label', type: 'string', group: 'hero' }),
        defineField({ name: 'heroSecondaryCtaLabel', title: 'Secondary CTA Label', type: 'string', group: 'hero' }),
        defineField({ name: 'heroImageUrl', title: 'Dashboard Preview Image', type: 'string', group: 'hero' }),

        // Workflow
        defineField({ name: 'workflowBadgeText', title: 'Workflow Badge Text', type: 'string', group: 'workflow' }),
        defineField({ name: 'workflowSectionTitle', title: 'Workflow Section Title', type: 'string', group: 'workflow' }),
        defineField({ name: 'workflowSectionSubtitle', title: 'Workflow Section Subtitle', type: 'text', group: 'workflow' }),
        defineField({
            name: 'workflowSteps',
            title: 'Workflow Steps',
            type: 'array',
            group: 'workflow',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', type: 'string' }),
                    defineField({ name: 'desc', type: 'string' }),
                    defineField({ name: 'iconName', type: 'string', description: 'Sparkles, PenTool, Zap, Layers, Home' })
                ]
            }]
        }),

        // Precision Drafting
        defineField({ name: 'draftingBadgeText', title: 'Drafting Badge Text', type: 'string', group: 'drafting' }),
        defineField({ name: 'draftingSectionTitle', title: 'Drafting Section Title', type: 'string', group: 'drafting' }),
        defineField({ name: 'draftingSectionDescription', title: 'Drafting Section Description', type: 'text', group: 'drafting' }),
        defineField({
            name: 'draftingFeatures',
            title: 'Drafting Features',
            type: 'array',
            group: 'drafting',
            of: [{ type: 'string' }]
        }),
        defineField({ name: 'draftingButtonLabel', title: 'Drafting Button Label', type: 'string', group: 'drafting' }),
        defineField({ name: 'draftingImageUrl', title: 'Drafting Tool Image', type: 'string', group: 'drafting' }),

        // Magic Moment (Upload)
        defineField({ name: 'magicBadgeText', title: 'Magic Badge Text', type: 'string', group: 'magic' }),
        defineField({ name: 'magicSectionTitle', title: 'Magic Section Title', type: 'string', group: 'magic' }),
        defineField({ name: 'magicSectionSubtitle', title: 'Magic Section Subtitle', type: 'text', group: 'magic' }),
        defineField({ name: 'magicInputLabel', title: 'Magic Input Label', type: 'string', group: 'magic' }),
        defineField({ name: 'magicInputTitle', title: 'Magic Input Title', type: 'string', group: 'magic' }),
        defineField({ name: 'magicInputImage', title: 'Magic Input Image', type: 'string', group: 'magic' }),
        defineField({ name: 'magicProcessTitle', title: 'Magic Process Title', type: 'string', group: 'magic' }),
        defineField({ name: 'magicProcessSubtitle', title: 'Magic Process Subtitle', type: 'string', group: 'magic' }),
        defineField({ name: 'magicOutputLabel', title: 'Magic Output Label', type: 'string', group: 'magic' }),
        defineField({ name: 'magicOutputTitle', title: 'Magic Output Title', type: 'string', group: 'magic' }),
        defineField({ name: 'magicOutputImage', title: 'Magic Output Image', type: 'string', group: 'magic' }),

        // Architect Templates
        defineField({ name: 'templatesBadgeText', title: 'Templates Badge Text', type: 'string', group: 'templates' }),
        defineField({ name: 'templatesSectionTitle', title: 'Templates Section Title', type: 'string', group: 'templates' }),
        defineField({ name: 'templatesSectionSubtitle', title: 'Templates Section Subtitle', type: 'text', group: 'templates' }),
        defineField({
            name: 'templateTags',
            title: 'Template Tags',
            type: 'array',
            group: 'templates',
            of: [{ type: 'string' }]
        }),
        defineField({ name: 'templatesButtonLabel', title: 'Templates Button Label', type: 'string', group: 'templates' }),
        defineField({ name: 'templatesImage1', title: 'Home Design Image 1', type: 'string', group: 'templates' }),
        defineField({ name: 'templatesImage2', title: 'Home Design Image 2', type: 'string', group: 'templates' }),
        defineField({ name: 'templatesBadgeTitle', title: 'Floating Badge Title', type: 'string', group: 'templates' }),
        defineField({ name: 'templatesBadgeSubtitle', title: 'Floating Badge Subtitle', type: 'string', group: 'templates' }),

        // Split CTA
        defineField({ name: 'ctaSectionTitle', title: 'CTA Section Title', type: 'string', group: 'cta' }),
        defineField({ name: 'ctaSectionSubtitle', title: 'CTA Section Subtitle', type: 'text', group: 'cta' }),
        
        defineField({ name: 'individualCardTitle', title: 'Homeowners Card Title', type: 'string', group: 'cta' }),
        defineField({ name: 'individualCardDesc', title: 'Homeowners Card Description', type: 'text', group: 'cta' }),
        defineField({
            name: 'individualCardFeatures',
            title: 'Homeowners Features',
            type: 'array',
            group: 'cta',
            of: [{ type: 'string' }]
        }),
        defineField({ name: 'individualCardCta', title: 'Homeowners CTA Label', type: 'string', group: 'cta' }),

        defineField({ name: 'businessCardTitle', title: 'Business Card Title', type: 'string', group: 'cta' }),
        defineField({ name: 'businessCardDesc', title: 'Business Card Description', type: 'text', group: 'cta' }),
        defineField({
            name: 'businessCardFeatures',
            title: 'Business Features',
            type: 'array',
            group: 'cta',
            of: [{ type: 'string' }]
        }),
        defineField({ name: 'businessCardCta', title: 'Business CTA Label', type: 'string', group: 'cta' }),

        // FAQs
        defineField({ name: 'faqSectionTitle', title: 'FAQ Section Title', type: 'string', group: 'faq' }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            group: 'faq',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'question', type: 'string' }),
                    defineField({ name: 'answer', type: 'text' })
                ]
            }]
        })
    ],
    preview: {
        select: {
            title: 'seoTitle',
        },
        prepare({ title }) {
            return {
                title: title || 'Floor Planner Page',
            };
        },
    },
});
