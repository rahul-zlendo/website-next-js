import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author / Reviewer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Job title',
      type: 'string',
      description: 'e.g. "Senior Vastu Consultant", "Lead Civil Engineer".',
    }),
    defineField({
      name: 'worksFor',
      title: 'Organization',
      type: 'string',
      initialValue: 'Zlendo Realty',
    }),
    defineField({
      name: 'bio',
      title: 'Short bio',
      type: 'text',
      rows: 4,
      description: '2–3 sentences. Shown next to bylines.',
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "B.Arch, Anna University", "Certified Vastu Consultant (ICVS)".',
    }),
    defineField({
      name: 'image',
      title: 'Headshot',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'email',
      title: 'Contact email',
      type: 'string',
    }),
    defineField({
      name: 'sameAs',
      title: 'Public profile URLs (schema.org sameAs)',
      type: 'array',
      of: [{ type: 'url' }],
      description: 'LinkedIn, university page, professional association profile, etc. Used for Person structured data.',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
});
