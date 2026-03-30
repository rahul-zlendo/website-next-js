import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'vastuPage',
  title: 'Product: Vastu Optimizer',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'upload', title: '📤 Upload Zone' },
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
      initialValue: 'Product: Vastu Optimizer'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Vastu Optimizer - Align Your Home with Ancient Wisdom | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Combine modern design with Vastu Shastra principles. Our automated analysis ensures your home brings health, wealth, and harmony.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Small Badge)',
      type: 'string',
      group: 'hero',
      initialValue: 'Vastu-Compliant Design Logic',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'Align your home with ancient wisdom',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Combine modern design with Vastu Shastra principles. Our automated analysis ensures your home brings health, wealth, and harmony.',
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
      initialValue: '/register?type=vastu',
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
      initialValue: 'from-amber-500 to-orange-400',
    }),

    // ── Upload Zone ───────────────────────────────────────────────────────
    defineField({
      name: 'uploadTitle',
      title: 'Upload Zone Title',
      type: 'string',
      group: 'upload',
      initialValue: 'Analyze your floor plan',
    }),
    defineField({
      name: 'uploadSubtitle',
      title: 'Upload Zone Subtitle',
      type: 'text',
      rows: 2,
      group: 'upload',
      initialValue: 'Upload your plan to see a complete heatmap of Vastu energy zones and receive expert layout corrections.',
    }),
    defineField({
      name: 'uploadButtonLabel',
      title: 'Upload Button Label',
      type: 'string',
      group: 'upload',
      initialValue: 'Select Floor Plan to Analyze',
    }),
    defineField({
      name: 'uploadButtonLink',
      title: 'Upload Button Link',
      type: 'string',
      group: 'upload',
      initialValue: '/register?type=vastu',
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
      initialValue: 'Four simple steps to a Vastu-compliant home.',
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
            title: title || 'Product: Vastu Optimizer'
        };
    },
  },
});
