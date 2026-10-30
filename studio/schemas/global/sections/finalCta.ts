import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'globalFinalCTA',
  title: 'Global Final CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        { name: 'text', type: 'string' },
        { name: 'subtext', type: 'string' },
        { name: 'link', type: 'string' },
      ]
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA (Demo)',
      type: 'object',
      fields: [
        { name: 'text', type: 'string' },
        { name: 'subtext', type: 'string' },
        { name: 'link', type: 'string' },
      ]
    }),
    defineField({
      name: 'tertiaryCta',
      title: 'Tertiary CTA (Sales)',
      type: 'object',
      fields: [
        { name: 'text', type: 'string' },
        { name: 'subtext', type: 'string' },
        { name: 'link', type: 'string' },
      ]
    }),
    defineField({
      name: 'frictionLine',
      title: 'Friction Reduction Line',
      type: 'string',
    }),
  ],
});
