import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'roomStylerPage',
  title: 'Product: Room Styler',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'steps', title: '🪜 Steps Section' },
    { name: 'features', title: '⚡ Features' },
    { name: 'faq', title: '❓ FAQs' },
  ],
  fields: [
    // Hidden Title for CMS Root ID
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Product: Room Styler'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Smart Room Styler - AI-driven Interior Design | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'AI-driven interior design at your fingertips. Visualize different styles, furniture layouts, and color palettes instantly.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Small Badge)',
      type: 'string',
      group: 'hero',
      initialValue: 'AI-Powered Interior Styling',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'AI-driven interior design at your fingertips',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Visualize different styles, furniture layouts, and color palettes instantly. Let AI be your personal interior designer.',
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Start for Free',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      group: 'hero',
      initialValue: 'https://app.zlendorealty.com/register',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
      ]
    }),
    defineField({
      name: 'heroVideoLink',
      title: 'Hero Video YouTube Link',
      type: 'url',
      group: 'hero',
      initialValue: 'https://www.youtube.com/embed/ttZcXOgmrNY?autoplay=1',
    }),
    defineField({
      name: 'heroGradient',
      title: 'Hero Gradient Class',
      type: 'string',
      group: 'hero',
      initialValue: 'from-purple-500 to-pink-400',
    }),

    // ── Steps ─────────────────────────────────────────────────────────────
    defineField({
      name: 'stepsSectionTitle',
      title: 'Steps Section Title',
      type: 'string',
      group: 'steps',
      initialValue: 'How It Works',
    }),
    defineField({
      name: 'stepsSectionSubtitle',
      title: 'Steps Section Subtitle',
      type: 'string',
      group: 'steps',
      initialValue: 'Four simple steps to your dream result.',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      group: 'steps',
      of: [
        {
          type: 'object',
          preview: { select: { title: 'title' } },
          fields: [
            defineField({ name: 'title', title: 'Step Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Step Description', type: 'text' }),
            defineField({
              name: 'image',
              title: 'Step Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
              ]
            }),
          ],
        },
      ],
    }),

    // ── Features ──────────────────────────────────────────────────────────
    defineField({
      name: 'features',
      title: 'Features Grid',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Feature Description', type: 'text' }),
          ],
        },
      ],
    }),

    // ── FAQ ───────────────────────────────────────────────────────────────
    defineField({
      name: 'faqTitle',
      title: 'FAQ Section Title',
      type: 'string',
      group: 'faq',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'faq',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text' }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'seoTitle' },
    prepare({ title }) {
        return {
            title: title || 'Product: Room Styler'
        };
    },
  },
});
