import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog / News Post',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Content', default: true },
    { name: 'meta', title: '🗂️ Meta & Taxonomy' },
    { name: 'seo', title: '🔍 SEO & Meta' },
  ],
  fields: [
    // ── Content ───────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description:
        'URL path segment. MUST match the original WordPress slug exactly so 301 redirects map 1:1 and search rankings are preserved.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short summary shown in listings and used as the meta-description fallback.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        { type: 'block' },
        { type: 'table' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        },
        {
          name: 'youtube',
          type: 'object',
          title: 'YouTube Embed',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'YouTube video URL',
            }),
          ],
        },
      ],
    }),

    // ── Meta & Taxonomy ───────────────────────────────────────────────────
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          { title: 'Blog', value: 'blog' },
          { title: 'News', value: 'news' },
        ],
        layout: 'radio',
      },
      initialValue: 'blog',
      validation: (Rule) => Rule.required(),
      description: 'Determines the URL prefix: blog → /blog/<slug>, news → /news/<slug>.',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta',
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed by (fact-checker)',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta',
      description:
        'Expert who fact-checked this post. Strengthens EEAT for YMYL-adjacent topics (vastu, cost, legal).',
    }),
    defineField({
      name: 'sources',
      title: 'Sources / Citations',
      type: 'array',
      of: [{ type: 'url' }],
      group: 'meta',
      description:
        'Links to the primary / authoritative sources cited in this post. Builds trust for readers and AI answer engines.',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      group: 'meta',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last updated at',
      type: 'datetime',
      group: 'meta',
      description: 'Used for the Article "dateModified" in structured data.',
    }),
    defineField({
      name: 'originalUrl',
      title: 'Original WordPress URL',
      type: 'url',
      group: 'meta',
      description:
        'The live WordPress URL this post was imported from. Used to generate the 301 redirect map at cutover (Phase 4) so traffic is preserved.',
    }),
    defineField({
      name: 'wpId',
      title: 'WordPress Post ID',
      type: 'number',
      group: 'meta',
      hidden: true,
      description: 'Original WordPress post ID — used by the importer for idempotent re-runs.',
    }),

    // ── SEO & Meta ─── (matches the page-schema convention) ─────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      description: 'Browser tab + Google result title. Falls back to the post Title if empty.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Google result snippet. Keep under 160 chars. Falls back to Excerpt.',
    }),
    defineField({
      name: 'ogTitle',
      title: 'OpenGraph Title (Social Share)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OpenGraph Description (Social Share)',
      type: 'text',
      rows: 2,
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'OpenGraph Image (Social Share)',
      type: 'image',
      group: 'seo',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
  ],
  orderings: [
    {
      title: 'Published date, newest first',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', section: 'section', media: 'mainImage', date: 'publishedAt' },
    prepare({ title, section, media, date }) {
      const d = date ? new Date(date as string).toLocaleDateString() : 'unpublished';
      return { title: title as string, subtitle: `${section || 'blog'} · ${d}`, media };
    },
  },
});
