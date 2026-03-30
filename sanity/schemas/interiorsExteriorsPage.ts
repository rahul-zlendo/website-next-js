import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'interiorsExteriorsPage',
  title: 'Product: Interiors & Exteriors',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'interior', title: '🛋️ Interior Capabilities' },
    { name: 'exterior', title: '🏰 Exterior Design' },
    { name: 'landscaping', title: '🌳 Landscaping' },
    { name: 'regional', title: '📍 Regional Customization' },
    { name: 'culture', title: '🙏 Culture & Religion' },
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
      initialValue: 'Product: Interiors & Exteriors'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Indian Homes. Indian Lifestyles. Designed Smarter. | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Experience interior and exterior design intelligence that respects your culture, climate, and religious preferences across India.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Region-Aware Design Platform',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Line 1)',
      type: 'string',
      group: 'hero',
      initialValue: 'Indian Homes.',
    }),
    defineField({
        name: 'heroTitleHighlight',
        title: 'Hero Title Highlight (Line 2)',
        type: 'string',
        group: 'hero',
        initialValue: 'Indian Lifestyles.',
    }),
    defineField({
        name: 'heroTitleAfter',
        title: 'Hero Title (Line 3)',
        type: 'string',
        group: 'hero',
        initialValue: 'Designed Smarter.',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'More than just decoration. Experience design intelligence that respects your culture, climate, and religious preferences across every state in India.',
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Design My Home',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Explore Local Styles',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Main Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        defineField({ name: 'subcaption', title: 'Sub-caption', type: 'string' }),
      ]
    }),

    // ── Interior Capabilities ─────────────────────────────────────────────
    defineField({
      name: 'interiorTitle',
      title: 'Interior Section Title',
      type: 'string',
      group: 'interior',
      initialValue: 'Built for the Way',
    }),
    defineField({
        name: 'interiorTitleHighlight',
        title: 'Interior Section Title Highlight',
        type: 'string',
        group: 'interior',
        initialValue: 'Indians Live',
    }),
    defineField({
      name: 'interiorDesc',
      title: 'Interior Section Description',
      type: 'text',
      rows: 3,
      group: 'interior',
      initialValue: 'Thousands of design elements that reflect real Indian usage patterns—not just showroom designs. From clever storage to traditional motifs.'
    }),
    defineField({
      name: 'interiorCards',
      title: 'Interior Feature Cards',
      type: 'array',
      group: 'interior',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Card Title', type: 'string' }),
            defineField({ name: 'features', title: 'Features List', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'colorClass', title: 'Color Theme (teal/orange/purple)', type: 'string' }),
          ]
        }
      ]
    }),

    // ── Exterior Design ───────────────────────────────────────────────────
    defineField({
        name: 'exteriorBadge',
        title: 'Exterior Badge Text',
        type: 'string',
        group: 'exterior',
        initialValue: 'Functional Aesthetics',
    }),
    defineField({
      name: 'exteriorTitle',
      title: 'Exterior Section Title',
      type: 'string',
      group: 'exterior',
      initialValue: 'Exterior Elevation',
    }),
    defineField({
        name: 'exteriorTitleHighlight',
        title: 'Exterior Section Title Highlight',
        type: 'string',
        group: 'exterior',
        initialValue: 'That Impresses.',
    }),
    defineField({
      name: 'exteriorDesc',
      title: 'Exterior Section Description',
      type: 'text',
      rows: 3,
      group: 'exterior',
      initialValue: 'From compound walls that secure your sanctuary to modern gates and climate-responsive elevation cladding. We design for durability and appearance.'
    }),
    defineField({
      name: 'exteriorGrid',
      title: 'Exterior Details Grid',
      type: 'array',
      group: 'exterior',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Detail Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Detail Description', type: 'string' }),
          ]
        }
      ]
    }),
    defineField({
      name: 'exteriorImages',
      title: 'Exterior Showcase Images (4 images recommended)',
      type: 'array',
      group: 'exterior',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),

    // ── Landscaping ───────────────────────────────────────────────────────
    defineField({
        name: 'landscapeBadge',
        title: 'Landscaping Badge Text',
        type: 'string',
        group: 'landscaping',
        initialValue: 'Garden & Outdoor',
    }),
    defineField({
      name: 'landscapeTitle',
      title: 'Landscaping Section Title',
      type: 'string',
      group: 'landscaping',
      initialValue: 'Living with',
    }),
    defineField({
        name: 'landscapeTitleHighlight',
        title: 'Landscaping Section Title Highlight',
        type: 'string',
        group: 'landscaping',
        initialValue: 'Nature.',
    }),
    defineField({
      name: 'landscapeDesc',
      title: 'Landscaping Section Description',
      type: 'text',
      rows: 2,
      group: 'landscaping',
      initialValue: 'Landscaping designed for Indian rituals, daily living, and tropical climates. From Tulsi maadams to serene courtyard gardens.'
    }),
    defineField({
      name: 'landscapeCards',
      title: 'Landscaping Feature Cards',
      type: 'array',
      group: 'landscaping',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Card Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Card Description', type: 'string' }),
            defineField({ name: 'image', title: 'Card Image', type: 'image', options: { hotspot: true } }),
          ]
        }
      ]
    }),

    // ── Regional Customization ────────────────────────────────────────────
    defineField({
        name: 'regionalBadge',
        title: 'Regional Badge Text',
        type: 'string',
        group: 'regional',
        initialValue: 'Regional Specialization',
    }),
    defineField({
      name: 'regionalTitle',
      title: 'Regional Section Title',
      type: 'string',
      group: 'regional',
      initialValue: 'Designs as Diverse',
    }),
    defineField({
        name: 'regionalTitleHighlight',
        title: 'Regional Section Title Highlight',
        type: 'string',
        group: 'regional',
        initialValue: 'as India Itself.',
    }),
    defineField({
      name: 'regionalDesc',
      title: 'Regional Section Description',
      type: 'text',
      rows: 2,
      group: 'regional',
      initialValue: 'Select your state and watch the platform adapt. From Kerala\'s sloped roofs to Rajasthani courtyards and Metro city minimalism.'
    }),
    defineField({
        name: 'regionalStates',
        title: 'Indian States Data',
        type: 'array',
        group: 'regional',
        of: [
          {
            type: 'object',
            fields: [
              defineField({ name: 'state', title: 'State Name', type: 'string' }),
              defineField({ name: 'climateTitle', title: 'Climate Detail Title', type: 'string' }),
              defineField({ name: 'climateDesc', title: 'Climate Detail Description', type: 'string' }),
              defineField({ name: 'cultureTitle', title: 'Culture Detail Title', type: 'string' }),
              defineField({ name: 'cultureDesc', title: 'Culture Detail Description', type: 'string' }),
            ]
          }
        ]
    }),

    // ── Culture & Religion ────────────────────────────────────────────────
    defineField({
        name: 'cultureBadge',
        title: 'Culture Badge Text',
        type: 'string',
        group: 'culture',
        initialValue: 'Respecting Beliefs, Not Just Taste.',
    }),
    defineField({
      name: 'cultureTitle',
      title: 'Culture Section Title',
      type: 'string',
      group: 'culture',
      initialValue: 'Religion & Tradition',
    }),
    defineField({
        name: 'cultureTitleHighlight',
        title: 'Culture Section Title Highlight',
        type: 'string',
        group: 'culture',
        initialValue: 'Sensitive.',
    }),
    defineField({
      name: 'culturePoints',
      title: 'Culture/Religion Points',
      type: 'array',
      group: 'culture',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Point Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Point Description', type: 'text' }),
            defineField({ name: 'colorTheme', title: 'Color Theme (teal/orange/purple)', type: 'string' }),
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
      initialValue: 'Ready to Design Your',
    }),
    defineField({
        name: 'ctaTitleHighlight',
        title: 'Final CTA Title Highlight',
        type: 'string',
        group: 'cta',
        initialValue: 'True Indian Home?',
    }),
    defineField({
      name: 'ctaDesc',
      title: 'Final CTA Description',
      type: 'text',
      group: 'cta',
      initialValue: 'Don\'t settle for generic templates. Experience a home that understands your culture, your state, and your lifestyle.'
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
            title: title || 'Product: Interiors & Exteriors'
        };
    },
  },
});
