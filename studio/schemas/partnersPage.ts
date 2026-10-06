import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partnersPage',
  title: 'Page: Partners',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'programs', title: '📂 Programs Toggle' },
    { name: 'affiliate', title: '🤝 Affiliate Program' },
    { name: 'partner', title: '🏢 Partner Program' },
    { name: 'trust', title: '🛡️ Trust Section' },
    { name: 'growth', title: '📈 Growth & Vision' },
    { name: 'finalCta', title: '🚀 Final CTA' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Page: Partners'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Partner with Zlendo Realty - Affiliate & Agent Programs',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Turn your network into revenue. Join the Zlendo Realty partner or affiliate program and earn by sharing the future of PropTech.'
    }),

    // ── Hero Section ──────────────────────────────────────────────────────
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Badge)',
      type: 'string',
      group: 'hero',
      initialValue: 'The Future of PropTech is Collaborative',
    }),
    defineField({
      name: 'heroTitlePart1',
      title: 'Hero Title Part 1',
      type: 'string',
      group: 'hero',
      initialValue: 'Share. Earn.',
    }),
    defineField({
      name: 'heroTitlePart2',
      title: 'Hero Title Part 2 (Teal/Italic)',
      type: 'string',
      group: 'hero',
      initialValue: 'Grow with Zlendo Realty.',
    }),
    defineField({
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: 'Turn your network into revenue. Help others design, visualize, and sell better — while you build a sustainable income stream.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (Dashboard)',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // ── Programs Toggle ───────────────────────────────────────────────────
    defineField({
      name: 'programsTitle',
      title: 'Programs Toggle Title',
      type: 'string',
      group: 'programs',
      initialValue: 'Choose Your Growth Path',
    }),
    defineField({
      name: 'programsSubtitle',
      title: 'Programs Toggle Subtitle',
      type: 'string',
      group: 'programs',
      initialValue: "Whether you're an individual creator or a professional studio, we have a place for you.",
    }),

    // ── Affiliate Program ─────────────────────────────────────────────────
    defineField({
      name: 'affiliateTitlePart1',
      title: 'Affiliate Title Part 1',
      type: 'string',
      group: 'affiliate',
      initialValue: 'Earn by sharing',
    }),
    defineField({
      name: 'affiliateTitlePart2',
      title: 'Affiliate Title Part 2 (Teal/Italic)',
      type: 'string',
      group: 'affiliate',
      initialValue: 'the future.',
    }),
    defineField({
      name: 'affiliateDesc',
      title: 'Affiliate Description',
      type: 'text',
      rows: 3,
      group: 'affiliate',
      initialValue: 'Best for creators, influencers, consultants, and marketers who want to monetize their network through simple referrals.',
    }),
    defineField({
      name: 'affiliateSteps',
      title: 'Affiliate Steps (How it works)',
      type: 'array',
      group: 'affiliate',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'desc', type: 'text', title: 'Description', rows: 2 },
          { name: 'icon', type: 'string', title: 'Lucide Icon Name' },
        ],
      }],
    }),
    defineField({
      name: 'affiliateBenefits',
      title: 'Affiliate Benefits (What they get)',
      type: 'array',
      group: 'affiliate',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'desc', type: 'text', title: 'Description', rows: 2 },
          { name: 'icon', type: 'string', title: 'Lucide Icon Name' },
        ],
      }],
    }),
    defineField({
      name: 'affiliateTags',
      title: 'Affiliate Target Audience Tags',
      type: 'array',
      group: 'affiliate',
      of: [{ type: 'string' }],
      initialValue: ['Influencers', 'Bloggers', 'Property Reviewers', 'Startup Leaders', 'Design Enthusiasts']
    }),
    defineField({
      name: 'affiliateConversionRate',
      title: 'Avg Conversion Rate',
      type: 'string',
      group: 'affiliate',
      initialValue: '4.2%',
    }),
    defineField({
      name: 'affiliateAvgEarnings',
      title: 'Avg Earnings Label',
      type: 'string',
      group: 'affiliate',
      initialValue: '₹45k+',
    }),

    // ── Partner Program ───────────────────────────────────────────────────
    defineField({
      name: 'partnerTitlePart1',
      title: 'Partner Title Part 1',
      type: 'string',
      group: 'partner',
      initialValue: 'Go beyond referrals.',
    }),
    defineField({
      name: 'partnerTitlePart2',
      title: 'Partner Title Part 2 (Teal/Italic)',
      type: 'string',
      group: 'partner',
      initialValue: 'Build recurring revenue.',
    }),
    defineField({
      name: 'partnerDesc',
      title: 'Partner Description',
      type: 'text',
      rows: 3,
      group: 'partner',
      initialValue: 'Best for agencies, interior designers, architects, and real estate consultants who want to build a business with Zlendo.',
    }),
    defineField({
      name: 'partnerFeatures',
      title: 'Partner Features',
      type: 'array',
      group: 'partner',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'desc', type: 'text', title: 'Description', rows: 2 },
          { name: 'icon', type: 'string', title: 'Lucide Icon Name' },
        ],
      }],
    }),
    defineField({
      name: 'partnerImage',
      title: 'Partner Image',
      type: 'image',
      group: 'partner',
      options: { hotspot: true },
    }),
    defineField({
      name: 'partnerUseCaseTitle',
      title: 'Partner Use Case Title',
      type: 'string',
      group: 'partner',
      initialValue: 'Use Case',
    }),
    defineField({
      name: 'partnerUseCaseDesc',
      title: 'Partner Use Case Description',
      type: 'text',
      rows: 3,
      group: 'partner',
      initialValue: 'Design studios bundling Zlendo walkthroughs with premium interior packages.',
    }),
    defineField({
      name: 'partnerActivePartners',
      title: 'Active Partners Count',
      type: 'string',
      group: 'partner',
      initialValue: '500+',
    }),
    defineField({
      name: 'partnerPayouts',
      title: 'Partner Payouts Label',
      type: 'string',
      group: 'partner',
      initialValue: '₹15Cr+',
    }),

    // ── Trust Section ─────────────────────────────────────────────────────
    defineField({
      name: 'whyTitle',
      title: 'Trust Section Title',
      type: 'string',
      group: 'trust',
      initialValue: 'Why Take Zlendo to Your Network?',
    }),
    defineField({
      name: 'whySubtitle',
      title: 'Trust Section Subtitle',
      type: 'string',
      group: 'trust',
      initialValue: "Success in partnerships is built on product quality. Zlendo is India's most trusted home-tech platform.",
    }),
    defineField({
      name: 'whyCards',
      title: 'Trust Cards',
      type: 'array',
      group: 'trust',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'desc', type: 'text', title: 'Description', rows: 3 },
          { name: 'icon', type: 'string', title: 'Lucide Icon Name' },
          { name: 'badge', type: 'string', title: 'Badge Label' },
        ],
      }],
    }),

    // ── Growth Section ────────────────────────────────────────────────────
    defineField({
      name: 'growthTitle',
      title: 'Growth Section Title',
      type: 'string',
      group: 'growth',
      initialValue: "Let's Grow Together.",
    }),
    defineField({
      name: 'growthSubtitle',
      title: 'Growth Section Subtitle',
      type: 'text',
      rows: 3,
      group: 'growth',
      initialValue: "Zlendo isn't just a tool; it's a movement toward digital-first construction and interiors. We have a long-term partnership mindset.",
    }),
    defineField({
      name: 'growthPoints',
      title: 'Growth Points',
      type: 'array',
      group: 'growth',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'desc', type: 'text', title: 'Description', rows: 2 },
          { name: 'icon', type: 'string', title: 'Lucide Icon Name' },
        ],
      }],
    }),
    defineField({
      name: 'growthQuoteTitle',
      title: 'Growth Quote Title',
      type: 'string',
      group: 'growth',
      initialValue: 'Built in India. Built for India.',
    }),
    defineField({
      name: 'growthQuoteDesc',
      title: 'Growth Quote Description',
      type: 'string',
      group: 'growth',
      initialValue: "Standardizing excellence in the world's fastest growing residential economy.",
    }),

    // ── Final CTA Section ─────────────────────────────────────────────────
    defineField({
      name: 'finalCtaTitlePart1',
      title: 'Final CTA Title Part 1',
      type: 'string',
      group: 'finalCta',
      initialValue: 'Turn Influence Into',
    }),
    defineField({
      name: 'finalCtaTitlePart2',
      title: 'Final CTA Title Part 2 (Teal/Italic)',
      type: 'string',
      group: 'finalCta',
      initialValue: 'Income.',
    }),
    defineField({
      name: 'finalCtaSubtitle',
      title: 'Final CTA Subtitle',
      type: 'string',
      group: 'finalCta',
      initialValue: 'Start today. Grow with India’s most innovative home tech platform.',
    }),
  ],
  preview: {
    select: { title: 'seoTitle' },
    prepare({ title }) {
      return {
        title: title || 'Page: Partners'
      };
    },
  },
});
