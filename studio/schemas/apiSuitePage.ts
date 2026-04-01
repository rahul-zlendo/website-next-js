import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'apiSuitePage',
  title: 'Product: API Suite',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'upload', title: '📤 Upload Section' },
    { name: 'howTo', title: '🎯 How-To Section' },
    { name: 'steps', title: '🪜 Steps Section' },
    { name: 'features', title: '⚡ Features' },
    { name: 'comparison', title: '📊 Comparison' },
    { name: 'faq', title: '❓ FAQs' },
    { name: 'finalCta', title: '🚀 Final CTA' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Product: API Suite'
    }),
    // ── SEO & Meta ───────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Zlendo Realty API Suite - Enterprise Prop-Tech Solutions',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Integrate our core 2D-to-3D, costing, and styling engines directly into your own applications.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Small Badge)',
      type: 'string',
      group: 'hero',
      initialValue: 'Enterprise API Solutions',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'Power your prop-tech platform',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Integrate our core 2D-to-3D, costing, and styling engines directly into your own applications.',
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
      initialValue: 'from-slate-800 to-slate-600',
    }),

    // ── Upload Section ────────────────────────────────────────────────────
    defineField({
      name: 'uploadTitle',
      title: 'Upload Title',
      type: 'string',
      group: 'upload',
      initialValue: 'Upload your floor plan',
    }),
    defineField({
      name: 'uploadSubtitle',
      title: 'Upload Subtitle',
      type: 'text',
      rows: 2,
      group: 'upload',
      initialValue: 'Drag & drop your 2D sketch, image, or CAD file here to instantly generate a 3D model.',
    }),

    // ── How-To Section (Dark) ──────────────────────────────────────────────
    defineField({
      name: 'howToTitle',
      title: 'How-To Title',
      type: 'string',
      group: 'howTo',
      initialValue: 'Master your design in minutes.',
    }),
    defineField({
      name: 'howToDesc',
      title: 'How-To Description',
      type: 'text',
      rows: 3,
      group: 'howTo',
      initialValue: 'Our intuitive interface makes complex tasks simple. Whether you are dragging walls or estimating costs, everything happens in real-time.',
    }),
    defineField({
      name: 'howToImage',
      title: 'How-To Image',
      type: 'image',
      group: 'howTo',
      options: { hotspot: true },
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
      initialValue: 'Simple steps to integrate.',
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

    // ── Comparison ────────────────────────────────────────────────────────
    defineField({
      name: 'comparisonTitle',
      title: 'Comparison Section Title',
      type: 'string',
      group: 'comparison',
      initialValue: 'Compare with others',
    }),
    defineField({
      name: 'comparisonRows',
      title: 'Comparison Rows',
      type: 'array',
      group: 'comparison',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'feature', title: 'Feature Name', type: 'string' }),
            defineField({ name: 'us', title: 'Our Result', type: 'string' }),
            defineField({ name: 'competitor1', title: 'Competitor 1 (e.g. CAD)', type: 'string' }),
            defineField({ name: 'competitor2', title: 'Competitor 2 (e.g. Agencies)', type: 'string' }),
          ],
        }
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

    // ── Final CTA ─────────────────────────────────────────────────────────
    defineField({
      name: 'finalCtaTitle',
      title: 'Final CTA Title',
      type: 'string',
      group: 'finalCta',
      initialValue: 'Start designing for free',
    }),
    defineField({
      name: 'finalCtaSubtitle',
      title: 'Final CTA Subtitle',
      type: 'text',
      rows: 2,
      group: 'finalCta',
      initialValue: 'Join over 4 million users who are already designing their dream homes with Zlendo Realty.',
    }),
    defineField({
      name: 'finalCtaLabel',
      title: 'Final CTA Button Label',
      type: 'string',
      group: 'finalCta',
      initialValue: 'Create Free Account',
    }),
  ],
  preview: {
    select: { title: 'seoTitle' },
    prepare({ title }) {
      return {
        title: title || 'Product: API Suite'
      };
    },
  },
});
