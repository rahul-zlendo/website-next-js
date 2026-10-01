import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'businessPage',
  title: 'Business / Enterprise Page',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🚀 Hero Section' },
    { name: 'platform', title: '💻 Platform Showcase' },
    { name: 'features', title: '🛠️ Industry Features' },
    { name: 'roi', title: '📈 ROI Spotlight' },
    { name: 'personas', title: '👥 Personas' },
    { name: 'demo', title: '📅 Demo Section' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Business / Enterprise Page'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Zlendo Realty for Business - Enterprise Solutions',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: "India's Leading All-in-One Cloud Platform for Designers, Architects & Interior Experts."
    }),

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'badgeText1',
      title: 'Badge Text Left',
      type: 'string',
      group: 'hero',
      initialValue: 'Built in India.',
    }),
    defineField({
      name: 'badgeText2',
      title: 'Badge Text Right',
      type: 'string',
      group: 'hero',
      initialValue: 'Built for India.',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Part 1)',
      type: 'string',
      group: 'hero',
      initialValue: "India's Leading",
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Hero Title Highlight (Orange/Italic)',
      type: 'string',
      group: 'hero',
      initialValue: 'All-in-One Cloud Platform',
    }),
    defineField({
      name: 'heroTitleBottom',
      title: 'Hero Title Bottom (Second Line)',
      type: 'string',
      group: 'hero',
      initialValue: 'for Designers, Architects & Interior Experts',
    }),
    defineField({
      name: 'heroDescPrefix1',
      title: 'Description Prefix 1 (e.g. Design)',
      type: 'string',
      group: 'hero',
      initialValue: "Design",
    }),
    defineField({
      name: 'heroDescHighlight1',
      title: 'Highlight 1 (Orange/Italic - e.g. faster)',
      type: 'string',
      group: 'hero',
      initialValue: "faster",
    }),
    defineField({
      name: 'heroDescPrefix2',
      title: 'Description Prefix 2 (e.g. , present)',
      type: 'string',
      group: 'hero',
      initialValue: ", present",
    }),
    defineField({
      name: 'heroDescHighlight2',
      title: 'Highlight 2 (Orange/Italic - e.g. smarter)',
      type: 'string',
      group: 'hero',
      initialValue: "smarter",
    }),
    defineField({
      name: 'heroDescPrefix3',
      title: 'Description Prefix 3 (e.g. , and build with)',
      type: 'string',
      group: 'hero',
      initialValue: ", and build with",
    }),
    defineField({
      name: 'heroDescHighlight3',
      title: 'Highlight 3 (Orange/Italic - e.g. confidence)',
      type: 'string',
      group: 'hero',
      initialValue: "confidence",
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Hero CTA Label',
      type: 'string',
      group: 'hero',
      initialValue: 'Book your Demo',
    }),
    defineField({
      name: 'heroSubDesc',
      title: 'Hero Sub-Description',
      type: 'string',
      group: 'hero',
      initialValue: "Everything you need, right from your browser.",
    }),
    defineField({
      name: 'heroFeatures',
      title: 'Hero Features',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text' }),
            defineField({ name: 'bg', title: 'Background Class (Tailwind)', type: 'string' }),
            defineField({ name: 'iconColor', title: 'Icon Color Class', type: 'string' }),
            defineField({ name: 'borderColor', title: 'Border Color Class', type: 'string' }),
            defineField({ name: 'textColor', title: 'Text Color Class', type: 'string' }),
          ]
        }
      ]
    }),
    defineField({
      name: 'checkmarks',
      title: 'Hero Checkmarks',
      type: 'array',
      group: 'hero',
      of: [{ type: 'string' }],
      initialValue: [
        'Localized library with Indian furniture brands',
        'Dedicated support team based in India',
        'INR Pricing & GST Compliant Billing',
      ]
    }),

    // ── Platform Showcase ──────────────────────────────────────────────────
    defineField({
      name: 'platformTitle',
      title: 'Platform Title (Non-highlighted)',
      type: 'string',
      group: 'platform',
      initialValue: 'One Platform.',
    }),
    defineField({
      name: 'platformTitleHighlight',
      title: 'Platform Title Highlight (Teal)',
      type: 'string',
      group: 'platform',
      initialValue: 'Infinite Possibilities.',
    }),
    defineField({
      name: 'platformSubtitle',
      title: 'Platform Subtitle',
      type: 'string',
      group: 'platform',
      initialValue: 'From first sketch to final finish, Zlendo Realty unifies your entire design and sales workflow.',
    }),
    defineField({
      name: 'platformVideoUrl',
      title: 'Platform YouTube Video URL',
      type: 'url',
      group: 'platform',
      initialValue: 'https://www.youtube.com/embed/ij_yZ-sNrOY',
    }),
    defineField({
      name: 'platformCtaLabel',
      title: 'Platform CTA Label',
      type: 'string',
      group: 'platform',
      initialValue: 'Book Free Demo',
    }),

    // ── Industry Features ──────────────────────────────────────────────────
    defineField({
      name: 'industryFeatures',
      title: 'Industry Specific Features',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          name: 'industryItem',
          title: 'Industry Item',
          fields: [
            defineField({ name: 'industryName', title: 'Industry Name', type: 'string' }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
                    defineField({ name: 'desc', title: 'Feature Description', type: 'text' }),
                    defineField({ name: 'mediaUrl', title: 'Video/Media URL (e.g. .webm)', type: 'string' }),
                    defineField({ name: 'image', title: 'Fallback Image', type: 'image' }),
                  ]
                }
              ]
            })
          ]
        }
      ]
    }),

    // ── ROI Spotlight ──────────────────────────────────────────────────────
    defineField({
      name: 'roiBadge',
      title: 'ROI Badge Text',
      type: 'string',
      group: 'roi',
      initialValue: 'Enterprise Case Study',
    }),
    defineField({
      name: 'roiTitle',
      title: 'ROI Title (Non-highlighted)',
      type: 'string',
      group: 'roi',
      initialValue: 'Real Results.',
    }),
    defineField({
      name: 'roiTitleHighlight',
      title: 'ROI Title Highlight (Teal)',
      type: 'string',
      group: 'roi',
      initialValue: 'Real ROI.',
    }),
    defineField({
      name: 'roiDesc1',
      title: 'ROI Description 1',
      type: 'text',
      group: 'roi',
    }),
    defineField({
      name: 'roiDesc2',
      title: 'ROI Description 2',
      type: 'text',
      group: 'roi',
    }),
    defineField({
      name: 'roiStats',
      title: 'ROI Statistics',
      type: 'array',
      group: 'roi',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g. ₹15Cr)', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ]
        }
      ]
    }),
    defineField({
      name: 'roiImage',
      title: 'ROI Spotlight Image',
      type: 'image',
      group: 'roi',
      options: { hotspot: true }
    }),
    defineField({
      name: 'roiProjectLabel',
      title: 'ROI Project Label',
      type: 'string',
      group: 'roi',
      initialValue: 'Project',
    }),
    defineField({
      name: 'roiProjectName',
      title: 'ROI Project Name',
      type: 'string',
      group: 'roi',
      initialValue: 'Apex Grandeur, Gurugram',
    }),

    // ── Personas ──────────────────────────────────────────────────────────
    defineField({
      name: 'personasTitle',
      title: 'Personas Section Title (Non-highlighted)',
      type: 'string',
      group: 'personas',
      initialValue: 'Built for',
    }),
    defineField({
      name: 'personasTitleHighlight',
      title: 'Personas Section Title Highlight (Orange)',
      type: 'string',
      group: 'personas',
      initialValue: 'Every Professional.',
    }),
    defineField({
      name: 'personasSubtitle',
      title: 'Personas Section Subtitle',
      type: 'string',
      group: 'personas',
      initialValue: 'Zlendo Realty empowers the entire real estate ecosystem.',
    }),
    defineField({
      name: 'personas',
      title: 'Personas',
      type: 'array',
      group: 'personas',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text' }),
            defineField({ name: 'link', title: 'Link (relative path)', type: 'string' }),
          ]
        }
      ]
    }),

    // ── Demo Section ──────────────────────────────────────────────────────
    defineField({
      name: 'demoBadge',
      title: 'Demo Badge Text',
      type: 'string',
      group: 'demo',
      initialValue: 'Trusted by 500+ Indian Enterprises',
    }),
    defineField({
      name: 'demoTitle',
      title: 'Demo Title (Non-highlighted)',
      type: 'string',
      group: 'demo',
      initialValue: 'See Zlendo Realty in',
    }),
    defineField({
      name: 'demoTitleHighlight',
      title: 'Demo Title Highlight (Italic)',
      type: 'string',
      group: 'demo',
      initialValue: 'Action.',
    }),
    defineField({
      name: 'demoSubtitle',
      title: 'Demo Subtitle',
      type: 'string',
      group: 'demo',
      initialValue: 'Schedule a customized demo to see how you can save costs and accelerate sales.',
    }),
  ],
  preview: {
    select: { title: 'seoTitle' },
    prepare({ title }) {
      return {
        title: title || 'Business / Enterprise Page'
      };
    },
  },
});
