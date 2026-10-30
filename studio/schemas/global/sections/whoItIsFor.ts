import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'globalWhoItIsFor',
  title: 'Global Who It Is For',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'segments',
      title: 'Audience Segments',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Segment Title', type: 'string' },
          { name: 'features', title: 'Key Benefits', type: 'array', of: [{ type: 'string' }] },
        ]
      }]
    }),
  ],
});
