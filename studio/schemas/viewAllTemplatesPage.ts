import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'viewAllTemplatesPage',
  title: 'Page: View All Templates',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Page: View All Templates'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'All Design Templates - Professional Home Designs | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Explore our complete collection of professionally designed templates for every room in your home. Find the perfect style for your space.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Non-highlighted)',
      type: 'string',
      group: 'hero',
      initialValue: 'All Design',
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Hero Title Highlight (Teal)',
      type: 'string',
      group: 'hero',
      initialValue: 'Templates',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Explore our complete collection of professionally designed templates for every room in your home.',
    }),
    defineField({
      name: 'backToHomeLabel',
      title: 'Back to Home Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Back to Home',
    }),
  ],
  preview: {
    select: { title: 'seoTitle' },
    prepare({ title }) {
        return {
            title: title || 'Page: View All Templates'
        };
    },
  },
});
