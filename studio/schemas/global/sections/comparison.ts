import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'globalComparison',
  title: 'Global Comparison',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'rows',
      title: 'Comparison Rows',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'feature', title: 'Feature', type: 'string' },
          { name: 'before', title: 'Before (Fragmented)', type: 'string' },
          { name: 'after', title: 'After (With Zlendo Realty)', type: 'string' },
        ]
      }]
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
  ],
});
