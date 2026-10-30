export default {
  name: 'globalHero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small text above the main heading'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string'
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string'
    },
    {
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      type: 'string',
      description: 'Text below the main CTA (e.g. 14 days, full access)'
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string'
    },
    {
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string'
    },
    {
      name: 'secondaryCtaSubtext',
      title: 'Secondary CTA Subtext',
      type: 'string',
      description: 'Text below the secondary CTA'
    },
    {
      name: 'socialProofText',
      title: 'Social Proof Bar Text',
      type: 'text',
      rows: 2
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'badge'
    }
  }
}
