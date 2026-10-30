import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'twoDTo3DPage',
  title: 'Product: 2D to 3D',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'upload', title: '📤 Upload Zone' },
    { name: 'howTo', title: '💡 How To Section' },
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
      initialValue: 'Product: 2D to 3D'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Instant 2D to 3D Conversion | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Turn flat sketches into living spaces in seconds.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Small Badge)',
      type: 'string',
      group: 'hero',
      initialValue: 'Instant 3D Visualization',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'Instant 2D to 3D Conversion',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Turn flat sketches into living spaces in seconds. Upload any floor plan image or PDF and watch our AI instantly construct a fully interactive 3D model.',
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
      description: 'Upload an image directly. Recommended size: 1200×800px.',
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
      initialValue: 'from-blue-500 to-cyan-400',
    }),

    // ── Upload Zone ───────────────────────────────────────────────────────
    defineField({
      name: 'uploadTitle',
      title: 'Upload Zone Title',
      type: 'string',
      group: 'upload',
      initialValue: 'Upload your floor plan',
    }),
    defineField({
      name: 'uploadSubtitle',
      title: 'Upload Zone Subtitle',
      type: 'text',
      rows: 2,
      group: 'upload',
      initialValue: 'Drag & drop your 2D sketch, image, or CAD file here to instantly generate a 3D model.',
    }),
    defineField({
      name: 'uploadButtonLabel',
      title: 'Upload Button Label',
      type: 'string',
      group: 'upload',
      initialValue: 'Select File to Upload',
    }),
    defineField({
      name: 'uploadButtonLink',
      title: 'Upload Button Link',
      type: 'string',
      group: 'upload',
      description: 'Leave empty to default to signup URL.',
    }),

    // ── How To Section (Dark) ─────────────────────────────────────────────
    defineField({
      name: 'howToTitle',
      title: 'How To Section Title',
      type: 'string',
      group: 'howTo',
      initialValue: 'Master your design <br /> in minutes.',
    }),
    defineField({
      name: 'howToDesc',
      title: 'How To Section Description',
      type: 'text',
      rows: 3,
      group: 'howTo',
      initialValue: 'Our intuitive interface makes complex tasks simple. Whether you are dragging walls or estimating costs, everything happens in real-time.',
    }),
    defineField({
      name: 'howToImage',
      title: 'How To Section Image',
      type: 'image',
      group: 'howTo',
      options: { hotspot: true },
      description: 'Upload an image for the dark "How To" section.',
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' })
      ]
    }),
    defineField({
      name: 'howToCtaLabel',
      title: 'How To CTA Label',
      type: 'string',
      group: 'howTo',
      initialValue: 'Create Project Now',
    }),
    defineField({
      name: 'howToCtaLink',
      title: 'How To CTA Link',
      type: 'string',
      group: 'howTo',
      initialValue: 'https://app.zlendorealty.com/register',
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
            title: title || 'Product: 2D to 3D'
        };
    },
  },
});
