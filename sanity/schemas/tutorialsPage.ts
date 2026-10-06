import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tutorialsPage',
  title: 'Page: Tutorials',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'playlist', title: '📺 Playlist & Videos' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Page: Tutorials'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Video Tutorials - Master Zlendo Realty | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Step-by-step video guides to help you get the most out of Zlendo Realty — from floor planning to stunning 3D renders.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Non-highlighted)',
      type: 'string',
      group: 'hero',
      initialValue: 'Video',
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Hero Title Highlight (Teal)',
      type: 'string',
      group: 'hero',
      initialValue: 'Tutorials',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Step-by-step video guides to help you get the most out of Zlendo Realty — from floor planning to stunning 3D renders.',
    }),

    // ── Playlist ───────────────────────────────────────────────────────────
    defineField({
      name: 'playlistId',
      title: 'YouTube Playlist ID',
      type: 'string',
      group: 'playlist',
      initialValue: 'PLetnELr5c_JVwUtuFKM9wGjGKrKPrGmsa',
    }),
    defineField({
      name: 'playlistTitle',
      title: 'Playlist Title',
      type: 'string',
      group: 'playlist',
      initialValue: 'Beginner Guide | Zlendo Realty 2026',
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      group: 'playlist',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'videoId', title: 'YouTube Video ID', type: 'string' }),
            defineField({ name: 'title', title: 'Video Title', type: 'string' }),
            defineField({ name: 'duration', title: 'Duration (e.g. 5:30)', type: 'string' }),
            defineField({ name: 'views', title: 'Views Count', type: 'number' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'videoId' }
          }
        }
      ],
    }),
  ],
  preview: {
    select: { title: 'seoTitle' },
    prepare({ title }) {
        return {
            title: title || 'Page: Tutorials'
        };
    },
  },
});
