export default {
    name: 'floorPlannerPage',
    title: 'Floor Planner Page',
    type: 'document',
    fields: [
        // SEO
        { name: 'seoTitle', title: 'SEO Title', type: 'string' },
        { name: 'seoDescription', title: 'SEO Description', type: 'text' },
        
        // Hero
        { name: 'heroBadgeText', title: 'Hero Badge Text', type: 'string' },
        { name: 'heroTitle', title: 'Hero Title', type: 'string' },
        { name: 'heroTitleHighlight', title: 'Hero Title Highlight', type: 'string' },
        { name: 'heroSubtitle', title: 'Hero Subtitle (Part 1)', type: 'text' },
        { name: 'heroSubtitleAfter', title: 'Hero Subtitle (Part 2)', type: 'text' },
        { name: 'heroPrimaryCtaLabel', title: 'Primary CTA Label', type: 'string' },
        { name: 'heroSecondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' },
        { name: 'heroImageUrl', title: 'Dashboard Preview Image', type: 'url' },

        // Workflow
        { name: 'workflowBadgeText', title: 'Workflow Badge Text', type: 'string' },
        { name: 'workflowSectionTitle', title: 'Workflow Section Title', type: 'string' },
        { name: 'workflowSectionSubtitle', title: 'Workflow Section Subtitle', type: 'text' },
        {
            name: 'workflowSteps',
            title: 'Workflow Steps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string' },
                    { name: 'desc', type: 'string' },
                    { name: 'iconName', type: 'string', description: 'Sparkles, PenTool, Zap, Layers, Home' }
                ]
            }]
        },

        // Precision Drafting
        { name: 'draftingBadgeText', title: 'Drafting Badge Text', type: 'string' },
        { name: 'draftingSectionTitle', title: 'Drafting Section Title', type: 'string' },
        { name: 'draftingSectionDescription', title: 'Drafting Section Description', type: 'text' },
        {
            name: 'draftingFeatures',
            title: 'Drafting Features',
            type: 'array',
            of: [{ type: 'string' }]
        },
        { name: 'draftingButtonLabel', title: 'Drafting Button Label', type: 'string' },
        { name: 'draftingImageUrl', title: 'Drafting Tool Image', type: 'url' },

        // Magic Moment (Upload)
        { name: 'magicBadgeText', title: 'Magic Badge Text', type: 'string' },
        { name: 'magicSectionTitle', title: 'Magic Section Title', type: 'string' },
        { name: 'magicSectionSubtitle', title: 'Magic Section Subtitle', type: 'text' },
        { name: 'magicInputLabel', title: 'Magic Input Label', type: 'string' },
        { name: 'magicInputTitle', title: 'Magic Input Title', type: 'string' },
        { name: 'magicInputImage', title: 'Magic Input Image', type: 'url' },
        { name: 'magicProcessTitle', title: 'Magic Process Title', type: 'string' },
        { name: 'magicProcessSubtitle', title: 'Magic Process Subtitle', type: 'string' },
        { name: 'magicOutputLabel', title: 'Magic Output Label', type: 'string' },
        { name: 'magicOutputTitle', title: 'Magic Output Title', type: 'string' },
        { name: 'magicOutputImage', title: 'Magic Output Image', type: 'url' },

        // Architect Templates
        { name: 'templatesBadgeText', title: 'Templates Badge Text', type: 'string' },
        { name: 'templatesSectionTitle', title: 'Templates Section Title', type: 'string' },
        { name: 'templatesSectionSubtitle', title: 'Templates Section Subtitle', type: 'text' },
        {
            name: 'templateTags',
            title: 'Template Tags',
            type: 'array',
            of: [{ type: 'string' }]
        },
        { name: 'templatesButtonLabel', title: 'Templates Button Label', type: 'string' },
        { name: 'templatesImage1', title: 'Home Design Image 1', type: 'url' },
        { name: 'templatesImage2', title: 'Home Design Image 2', type: 'url' },
        { name: 'templatesBadgeTitle', title: 'Floating Badge Title', type: 'string' },
        { name: 'templatesBadgeSubtitle', title: 'Floating Badge Subtitle', type: 'string' },

        // Split CTA
        { name: 'ctaSectionTitle', title: 'CTA Section Title', type: 'string' },
        { name: 'ctaSectionSubtitle', title: 'CTA Section Subtitle', type: 'text' },
        
        { name: 'individualCardTitle', title: 'Homeowners Card Title', type: 'string' },
        { name: 'individualCardDesc', title: 'Homeowners Card Description', type: 'text' },
        {
            name: 'individualCardFeatures',
            title: 'Homeowners Features',
            type: 'array',
            of: [{ type: 'string' }]
        },
        { name: 'individualCardCta', title: 'Homeowners CTA Label', type: 'string' },

        { name: 'businessCardTitle', title: 'Business Card Title', type: 'string' },
        { name: 'businessCardDesc', title: 'Business Card Description', type: 'text' },
        {
            name: 'businessCardFeatures',
            title: 'Business Features',
            type: 'array',
            of: [{ type: 'string' }]
        },
        { name: 'businessCardCta', title: 'Business CTA Label', type: 'string' },

        // FAQs
        { name: 'faqSectionTitle', title: 'FAQ Section Title', type: 'string' },
        {
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'question', type: 'string' },
                    { name: 'answer', type: 'text' }
                ]
            }]
        }
    ]
}
