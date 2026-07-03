import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Blog / News Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'wpId',
      title: 'WordPress Term ID',
      type: 'number',
      hidden: true,
      description: 'Original WordPress category ID — used by the migration importer for idempotent re-runs.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
});
