import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'costEstimatorPage',
  title: 'Product: Cost Estimator',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'logic', title: '⚙️ Engineering Logic' },
    { name: 'breakdown', title: '📊 Component Breakdown' },
    { name: 'comparison', title: '⚖️ Material Comparison' },
    { name: 'tiers', title: '🏆 Quality Tiers' },
    { name: 'trust', title: '🛡️ Trust & Transparency' },
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
      initialValue: 'Product: Cost Estimator'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Smart Cost Estimator | Engineering-Grade Accuracy | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Estimate your construction costs with real-world Indian engineering logic. Factor in soil type, seismic zones, and local material rates.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Engineering-Grade Accuracy',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Line 1)',
      type: 'string',
      group: 'hero',
      initialValue: "You don't need to be a",
    }),
    defineField({
        name: 'heroTitleMid',
        title: 'Hero Title (Line 2)',
        type: 'string',
        group: 'hero',
        initialValue: 'civil engineer to understand',
    }),
    defineField({
        name: 'heroTitleHighlight',
        title: 'Hero Title Highlight (Line 3)',
        type: 'string',
        group: 'hero',
        initialValue: 'construction costs.',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: "Zlendo Realty's AI Estimator uses real-world Indian construction logic—soil type, seismic zones, and material rates—to give you an estimate you can trust.",
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Hero CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Estimate My Cost',
    }),
    defineField({
        name: 'heroSubtext',
        title: 'Hero Sub-text',
        type: 'string',
        group: 'hero',
        initialValue: 'Perfect for Homeowners & Architects',
    }),

    // ── Engineering Logic ──────────────────────────────────────────────────
    defineField({
      name: 'logicTitle',
      title: 'Logic Section Title',
      type: 'string',
      group: 'logic',
      initialValue: 'Real Engineering Logic. Not Just Math.',
    }),
    defineField({
      name: 'logicDesc',
      title: 'Logic Section Description',
      type: 'string',
      group: 'logic',
      initialValue: 'We calculate costs based on your specific site conditions.',
    }),
    defineField({
      name: 'logicCards',
      title: 'Logic Feature Cards',
      type: 'array',
      group: 'logic',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text' }),
            defineField({ name: 'iconName', title: 'Icon (MapPin, Layers, AlertTriangle, TrendingUp)', type: 'string' }),
          ]
        }
      ]
    }),

    // ── Component Breakdown ───────────────────────────────────────────────
    defineField({
      name: 'breakdownBadge',
      title: 'Breakdown Badge Text',
      type: 'string',
      group: 'breakdown',
      initialValue: 'Component Breakdown',
    }),
    defineField({
      name: 'breakdownTitle',
      title: 'Breakdown Section Title',
      type: 'text',
      rows: 2,
      group: 'breakdown',
      initialValue: 'Know exactly where your money goes.',
    }),
    defineField({
      name: 'breakdownDesc',
      title: 'Breakdown Section Description',
      type: 'text',
      group: 'breakdown',
      initialValue: "Most contractors give a single 'Check per sq.ft' rate. Zlendo Realty breaks it down component by component, so you know you aren't overpaying."
    }),
    defineField({
      name: 'breakdownItems',
      title: 'Breakdown Items',
      type: 'array',
      group: 'breakdown',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'range', title: 'Percentage Range', type: 'string' }),
          ]
        }
      ]
    }),

    // ── Material Comparison ──────────────────────────────────────────────
    defineField({
      name: 'compTitle',
      title: 'Comparison Section Title',
      type: 'string',
      group: 'comparison',
      initialValue: 'See Cost Impact Instantly',
    }),
    defineField({
        name: 'compDesc',
        title: 'Comparison Section Description',
        type: 'string',
        group: 'comparison',
        initialValue: 'Make informed decisions on materials. See how choices change your budget.',
    }),
    defineField({
        name: 'concreteTitle',
        title: 'Concrete Section Title',
        type: 'string',
        group: 'comparison',
        initialValue: 'Concrete Grade',
    }),
    defineField({
        name: 'brickTitle',
        title: 'Brick Section Title',
        type: 'string',
        group: 'comparison',
        initialValue: 'Wall Material',
    }),

    // ── Quality Tiers ─────────────────────────────────────────────────────
    defineField({
      name: 'tiersTitle',
      title: 'Tiers Section Title',
      type: 'string',
      group: 'tiers',
      initialValue: 'Choose Your Quality',
    }),
    defineField({
        name: 'tiersDesc',
        title: 'Tiers Section Description',
        type: 'string',
        group: 'tiers',
        initialValue: 'From functional to luxurious, define your standard.',
    }),
    defineField({
        name: 'tiers',
        title: 'Quality Tiers',
        type: 'array',
        group: 'tiers',
        of: [
          {
            type: 'object',
            fields: [
              defineField({ name: 'tierName', title: 'Tier Name (Economy/Premium/Luxury)', type: 'string' }),
              defineField({ name: 'features', title: 'Features List', type: 'array', of: [{ type: 'string' }] }),
            ]
          }
        ]
    }),

    // ── Trust & Transparency ──────────────────────────────────────────────
    defineField({
        name: 'trustBadge',
        title: 'Trust Badge Text',
        type: 'string',
        group: 'trust',
        initialValue: 'Transparency First',
    }),
    defineField({
      name: 'trustTitle',
      title: 'Trust Section Title',
      type: 'string',
      group: 'trust',
      initialValue: 'AI that explains, not just calculates.',
    }),
    defineField({
      name: 'trustDesc',
      title: 'Trust Section Description',
      type: 'text',
      rows: 3,
      group: 'trust',
      initialValue: "Most estimators give you a number. We tell you why. If your foundation cost is higher, our AI explains: 'Because your soil is soft clay, we accounted for deeper pile foundations.'"
    }),
    defineField({
        name: 'trustStats',
        title: 'Trust Stats',
        type: 'array',
        group: 'trust',
        of: [
          {
            type: 'object',
            fields: [
              defineField({ name: 'label', title: 'Stat Label', type: 'string' }),
              defineField({ name: 'value', title: 'Stat Value', type: 'string' }),
            ]
          }
        ]
    }),
    defineField({
        name: 'trustMessages',
        title: 'AI Trust Messages (Chat bubbles)',
        type: 'array',
        group: 'trust',
        of: [{ type: 'text', rows: 3 }]
    }),

    // ── Final CTA ─────────────────────────────────────────────────────────
    defineField({
      name: 'ctaTitle',
      title: 'Final CTA Title',
      type: 'string',
      group: 'cta',
      initialValue: 'Start building with confidence.',
    }),
    defineField({
      name: 'ctaDesc',
      title: 'Final CTA Description',
      type: 'text',
      group: 'cta',
      initialValue: 'Get a detailed, engineering-grade cost estimate for your home in minutes. Free for individual homeowners.'
    }),
    defineField({
        name: 'ctaButtonLabel',
        title: 'Final CTA Button Label',
        type: 'string',
        group: 'cta',
        initialValue: 'Start Estimation',
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
            title: title || 'Product: Cost Estimator'
        };
    },
  },
});
