import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'realisticRendersPage',
  title: 'Product: Realistic Renders',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'photorealism', title: '📸 Photorealism' },
    { name: 'camera', title: '🎥 Camera & Perspective' },
    { name: 'lighting', title: '☀️ Lighting Simulation' },
    { name: 'quality', title: '💎 Rendering Quality' },
    { name: 'audience', title: '👥 Who it is for' },
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
      initialValue: 'Product: Realistic Renders'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Photorealistic 3D Renders | 8K Interior Visualization | Zlendo Realty',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Experience your future home with 8K photorealism and intelligent light simulation. No guesswork—just crystal clear, emotional visuals.'
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Next-Gen Rendering Engine',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'See Your Home',
    }),
    defineField({
        name: 'heroTitleHighlight',
        title: 'Hero Title Highlight',
        type: 'string',
        group: 'hero',
        initialValue: 'The Way It Will Really Look.',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Experience 8K photorealism with intelligent light simulation. No guesswork—just crystal clear, emotional visuals.',
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Generate Photorealistic View',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'View Gallery',
    }),
    defineField({
        name: 'heroImage',
        title: 'Hero Background Image',
        type: 'image',
        group: 'hero',
        options: { hotspot: true },
    }),

    // ── Photorealism ──────────────────────────────────────────────────────
    defineField({
      name: 'photoBadge',
      title: 'Photorealism Badge',
      type: 'string',
      group: 'photorealism',
      initialValue: 'Core Differentiator',
    }),
    defineField({
      name: 'photoTitle',
      title: 'Photorealism Title',
      type: 'string',
      group: 'photorealism',
      initialValue: 'Images that look like',
    }),
    defineField({
        name: 'photoTitleHighlight',
        title: 'Photorealism Title Highlight',
        type: 'string',
        group: 'photorealism',
        initialValue: 'Photographs.',
    }),
    defineField({
      name: 'photoDesc',
      title: 'Photorealism Description',
      type: 'text',
      rows: 3,
      group: 'photorealism',
      initialValue: 'Forget cartoonish 3D models. Our advanced ray-tracing engine simulates how light interacts with real-world materials—capturing the softness of fabric, the sheen of hardwood, and the transparency of glass.'
    }),
    defineField({
        name: 'photoImage',
        title: 'Photorealism Showcase Image',
        type: 'image',
        group: 'photorealism',
        options: { hotspot: true },
    }),
    defineField({
      name: 'photoFeatures',
      title: 'Photorealism Features',
      type: 'array',
      group: 'photorealism',
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

    // ── Camera ────────────────────────────────────────────────────────────
    defineField({
      name: 'cameraBadge',
      title: 'Camera Badge',
      type: 'string',
      group: 'camera',
      initialValue: 'Professional Composition',
    }),
    defineField({
      name: 'cameraTitle',
      title: 'Camera Title',
      type: 'string',
      group: 'camera',
      initialValue: 'Good visualization is about',
    }),
    defineField({
        name: 'cameraTitleHighlight',
        title: 'Camera Title Highlight',
        type: 'string',
        group: 'camera',
        initialValue: 'Perspective.',
    }),
    defineField({
      name: 'cameraDesc',
      title: 'Camera Description',
      type: 'text',
      group: 'camera',
      initialValue: 'Frame your rooms like a professional photographer. Control height, angle, and focal length to tell the right story.'
    }),
    defineField({
      name: 'cameraCards',
      title: 'Perspective Cards',
      type: 'array',
      group: 'camera',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'desc', type: 'text' }),
            defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
          ]
        }
      ]
    }),

    // ── Lighting ──────────────────────────────────────────────────────────
    defineField({
      name: 'lightingBadge',
      title: 'Lighting Badge',
      type: 'string',
      group: 'lighting',
      initialValue: 'Time-of-day Simulation',
    }),
    defineField({
      name: 'lightingTitle',
      title: 'Lighting Title',
      type: 'string',
      group: 'lighting',
      initialValue: 'Light Changes',
    }),
    defineField({
        name: 'lightingTitleHighlight',
        title: 'Lighting Title Highlight',
        type: 'string',
        group: 'lighting',
        initialValue: 'Everything.',
    }),
    defineField({
      name: 'lightingDesc',
      title: 'Lighting Description',
      type: 'text',
      group: 'lighting',
      initialValue: "Don't build in the dark. Simulate exactly how sunlight moves across your floor plan throughout the day."
    }),
    defineField({
        name: 'morningImage',
        title: 'Morning Simulation Image',
        type: 'image',
        group: 'lighting',
        options: { hotspot: true },
    }),
    defineField({
        name: 'dayImage',
        title: 'Day Simulation Image',
        type: 'image',
        group: 'lighting',
        options: { hotspot: true },
    }),
    defineField({
        name: 'eveningImage',
        title: 'Evening Simulation Image',
        type: 'image',
        group: 'lighting',
        options: { hotspot: true },
    }),
    defineField({
        name: 'nightImage',
        title: 'Night Simulation Image',
        type: 'image',
        group: 'lighting',
        options: { hotspot: true },
    }),

    // ── Quality ───────────────────────────────────────────────────────────
    defineField({
      name: 'qualityTitle',
      title: 'Quality Title',
      type: 'string',
      group: 'quality',
      initialValue: 'Quality for Every Purpose',
    }),
    defineField({
      name: 'qualityDesc',
      title: 'Quality Description',
      type: 'text',
      group: 'quality',
      initialValue: 'Speed or Perfection? Choose the rendering tier that fits your workflow.'
    }),
    defineField({
        name: 'qualityTiers',
        title: 'Quality Tiers',
        type: 'array',
        group: 'quality',
        of: [
          {
            type: 'object',
            fields: [
              defineField({ name: 'title', type: 'string' }),
              defineField({ name: 'resolution', type: 'string' }),
              defineField({ name: 'time', type: 'string' }),
              defineField({ name: 'useCase', type: 'string' }),
              defineField({ name: 'iconName', type: 'string', description: 'Monitor, ImageIcon, Sliders' }),
            ]
          }
        ]
    }),

    // ── Audience ──────────────────────────────────────────────────────────
    defineField({
      name: 'audienceTitle',
      title: 'Audience Title',
      type: 'string',
      group: 'audience',
      initialValue: 'Who Needs This Level of Detail?',
    }),
    defineField({
      name: 'audienceRoles',
      title: 'Audience Roles',
      type: 'array',
      group: 'audience',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'role', type: 'string' }),
            defineField({ name: 'desc', type: 'text' }),
          ]
        }
      ]
    }),
    defineField({
        name: 'audienceImages',
        title: 'Audience Marketing Images (Grid of 4)',
        type: 'array',
        group: 'audience',
        of: [{ type: 'image', options: { hotspot: true } }],
    }),

    // ── Final CTA ─────────────────────────────────────────────────────────
    defineField({
      name: 'ctaTitle',
      title: 'Final CTA Title',
      type: 'string',
      group: 'cta',
      initialValue: 'Ready to see your future home?',
    }),
    defineField({
      name: 'ctaDesc',
      title: 'Final CTA Description',
      type: 'text',
      group: 'cta',
      initialValue: 'Start capturing photorealistic memories of your design today.'
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      group: 'cta',
      initialValue: 'Start Rendering Now',
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
        title: title || 'Product: Realistic Renders',
      };
    },
  },
});
