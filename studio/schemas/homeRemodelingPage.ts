export default {
    name: 'homeRemodelingPage',
    title: 'Home Remodeling Page',
    type: 'document',
    fields: [
        // SEO
        { name: 'seoTitle', title: 'SEO Title', type: 'string' },
        { name: 'seoDescription', title: 'SEO Description', type: 'text' },
        { name: 'seoKeywords', title: 'SEO Keywords', type: 'string' },
        
        // Hero
        { name: 'heroBadgeText', title: 'Hero Badge Text', type: 'string' },
        { name: 'heroTitle', title: 'Hero Title', type: 'string' },
        { name: 'heroTitleHighlight', title: 'Hero Title Highlight', type: 'string' },
        { name: 'heroParagraph', title: 'Hero Paragraph', type: 'text' },

        // Case Study
        { name: 'caseStudyTitle', title: 'Case Study Title', type: 'string' },
        { name: 'caseStudySubtitle', title: 'Case Study Subtitle', type: 'string' },
        { name: 'caseStudyIcon', title: 'Case Study Icon (Lucide name)', type: 'string', description: 'e.g. Layout, Home, Sparkles' },
        
        { name: 'challengeTitle', title: 'Challenge Title', type: 'string' },
        { name: 'challengeDescription', title: 'Challenge Description', type: 'text' },
        
        { name: 'solutionTitle', title: 'Solution Title', type: 'string' },
        { name: 'solutionDescription', title: 'Solution Description', type: 'text' },
        
        {
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string' },
                    { name: 'value', type: 'string' }
                ]
            }]
        },
        { name: 'caseStudyImage', title: 'Case Study Image URL', type: 'string' },

        // Final CTA
        { name: 'ctaTitle', title: 'CTA Title', type: 'string' },
        { name: 'ctaTitleHighlight', title: 'CTA Title Highlight', type: 'string' },
        { name: 'ctaPrimaryLabel', title: 'Primary CTA Label', type: 'string' },
        { name: 'ctaSecondaryLabel', title: 'Secondary CTA Label', type: 'string' }
    ]
}
