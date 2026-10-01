import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'virtualWalkthroughPage',
  title: 'Product: Virtual Walkthrough',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'walkthrough', title: '🚶 Step Inside' },
    { name: 'quality', title: '💎 Visual Quality' },
    { name: 'tools', title: '🥽 Immersive Tools' },
    { name: 'marketing', title: '📢 Marketing Assets' },
    { name: 'impact', title: '📈 Business Impact' },
    { name: 'cta', title: '📣 Final CTA' },
    { name: 'faq', title: '❓ FAQs' },
  ],
  fields: [
    // Hidden Title for CMS Root ID
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Product: Virtual Walkthrough'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: '3D Virtual Walkthrough for Homes | Immersive VR Tours | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Experience immersive 3D virtual walkthroughs that showcase space, flow, and finishes. Close deals faster with 8K cinematic storytelling.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Next-Generation Property Visualization',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: "People don't buy plans.",
    }),
    defineField({
        name: 'heroTitleHighlight',
        title: 'Hero Title Highlight',
        type: 'string',
        group: 'hero',
        initialValue: 'They buy experiences.',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Turn static floor plans into hyper-realistic 8K virtual walkthroughs. Increase buyer confidence and close deals faster with immersive cinematic storytelling.',
    }),
    defineField({
        name: 'heroImage',
        title: 'Hero Background Image',
        type: 'image',
        group: 'hero',
        options: { hotspot: true },
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Schedule Business Demo',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Create My 3D Tour',
    }),

    // ── Walkthrough ───────────────────────────────────────────────────────
    defineField({
      name: 'walkBadge',
      title: 'Walkthrough Badge',
      type: 'string',
      group: 'walkthrough',
      initialValue: 'Step inside.',
    }),
    defineField({
        name: 'walkTitle',
        title: 'Walkthrough Title',
        type: 'string',
        group: 'walkthrough',
        initialValue: 'Before it exists.',
    }),
    defineField({
      name: 'walkDesc',
      title: 'Walkthrough Description',
      type: 'text',
      rows: 3,
      group: 'walkthrough',
      initialValue: 'Our 360° virtual walkthroughs allow you to walk through the entire home virtually. Move room to room like a real person, exploring spaces from an eye-level perspective.'
    }),
    defineField({
        name: 'walkImage',
        title: 'Walkthrough Main Image',
        type: 'image',
        group: 'walkthrough',
        options: { hotspot: true },
    }),
    defineField({
      name: 'walkFeatures',
      title: 'Walkthrough Features',
      type: 'array',
      group: 'walkthrough',
      of: [{ type: 'string' }]
    }),

    // ── Visual Quality ────────────────────────────────────────────────────
    defineField({
      name: 'qualityTitle',
      title: 'Quality Section Title',
      type: 'string',
      group: 'quality',
      initialValue: 'Visual Quality',
    }),
    defineField({
        name: 'qualityTitleHighlight',
        title: 'Quality Title Highlight',
        type: 'string',
        group: 'quality',
        initialValue: 'That Sells.',
    }),
    defineField({
      name: 'qualityDesc',
      title: 'Quality Description',
      type: 'text',
      group: 'quality',
      initialValue: 'Why settle for fuzzy renders? Our 8K ultra-high-resolution output brings every detail to life—from the weave of the fabric to the subtle shadows of sunset.'
    }),
    defineField({
      name: 'qualityCards',
      title: 'Quality Benefit Cards',
      type: 'array',
      group: 'quality',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'desc', type: 'text' }),
            defineField({ name: 'iconName', type: 'string', description: 'Monitor, Sparkles, Box' }),
          ]
        }
      ]
    }),
    defineField({
        name: 'qualityComparisonImage',
        title: 'Quality Comparison Image (8K Showcase)',
        type: 'image',
        group: 'quality',
        options: { hotspot: true },
    }),

    // ── Immersive Tools ───────────────────────────────────────────────────
    defineField({
      name: 'toolsTitle',
      title: 'Tools Section Title',
      type: 'string',
      group: 'tools',
      initialValue: 'Immersive Selling Tools',
    }),
    defineField({
      name: 'toolsDesc',
      title: 'Tools Description',
      type: 'text',
      group: 'tools',
      initialValue: 'One project. Multiple ways to experience it. Choose the right medium for your audience.'
    }),
    defineField({
      name: 'toolCards',
      title: 'Tool Cards',
      type: 'array',
      group: 'tools',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'quote', type: 'string' }),
            defineField({ name: 'desc', type: 'text' }),
            defineField({ name: 'iconName', type: 'string' }),
          ]
        }
      ]
    }),

    // ── Marketing Assets ──────────────────────────────────────────────────
    defineField({
      name: 'marketTitle',
      title: 'Marketing Title',
      type: 'string',
      group: 'marketing',
      initialValue: 'Turn designs into',
    }),
    defineField({
        name: 'marketTitleHighlight',
        title: 'Marketing Title Highlight',
        type: 'string',
        group: 'marketing',
        initialValue: 'marketing assets.',
    }),
    defineField({
      name: 'marketFeatures',
      title: 'Marketing Features',
      type: 'array',
      group: 'marketing',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'desc', type: 'text' }),
          ]
        }
      ]
    }),
    defineField({
        name: 'marketImages',
        title: 'Marketing Collage Images (Grid of 4)',
        type: 'array',
        group: 'marketing',
        of: [{ type: 'image', options: { hotspot: true } }],
    }),

    // ── Business Impact ───────────────────────────────────────────────────
    defineField({
      name: 'impactTitle',
      title: 'Impact Title',
      type: 'string',
      group: 'impact',
      initialValue: 'Maximize ROI with Visualization',
    }),
    defineField({
      name: 'impactDesc',
      title: 'Impact Description',
      type: 'text',
      group: 'impact',
      initialValue: 'Immersive experiences reduce imagination gaps, leading to faster decisions and higher perceived project value.'
    }),
    defineField({
      name: 'impactCards',
      title: 'Persona Impact Cards',
      type: 'array',
      group: 'impact',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'desc', type: 'text' }),
            defineField({ name: 'highlight', type: 'string' }),
            defineField({ name: 'iconName', type: 'string' }),
          ]
        }
      ]
    }),

    // ── Final CTA ─────────────────────────────────────────────────────────
    defineField({
      name: 'ctaTitle',
      title: 'Final CTA Title',
      type: 'string',
      group: 'cta',
      initialValue: 'Sell the Experience,',
    }),
    defineField({
        name: 'ctaTitleHighlight',
        title: 'Final CTA Title Highlight',
        type: 'string',
        group: 'cta',
        initialValue: 'Not Just the Space.',
    }),
    defineField({
      name: 'ctaDesc',
      title: 'Final CTA Description',
      type: 'text',
      group: 'cta',
      initialValue: 'Ready to transform your projects with 8K cinematic walkthroughs? Let’s build something extraordinary together.'
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      title: 'Primary CTA Label',
      type: 'string',
      group: 'cta',
      initialValue: 'Get Business Demo',
    }),
    defineField({
      name: 'ctaSecondaryLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      group: 'cta',
      initialValue: 'Watch 8K Demo',
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
        title: title || 'Product: Virtual Walkthrough',
      };
    },
  },
});
