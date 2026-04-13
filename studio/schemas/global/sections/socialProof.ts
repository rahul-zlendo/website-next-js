import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'globalSocialProof',
  title: 'Global Social Proof',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text' },
          { name: 'author', title: 'Author Info', type: 'string' },
        ]
      }]
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'city', title: 'City/Location', type: 'string' },
          { name: 'result', title: 'Key Result', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'linkText', title: 'Link Text', type: 'string' },
          { name: 'linkUrl', title: 'Link URL', type: 'string' },
        ]
      }]
    }),
  ],
});
