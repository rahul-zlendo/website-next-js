import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'Page: Contact Us',
  type: 'document',
  groups: [
    { name: 'seo', title: '🔍 SEO & Meta' },
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'contactInfo', title: '📞 Contact Information' },
    { name: 'form', title: '📝 Contact Form' },
    { name: 'helpCenter', title: '❓ Help Center' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
      initialValue: 'Page: Contact Us'
    }),
    // ── SEO & Meta ────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      group: 'seo',
      initialValue: 'Contact Zlendo Realty | Get Expert Guidance & Support',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      group: 'seo',
      initialValue: 'Get in touch with Zlendo Realty experts for product guidance, support, or partnership opportunities. Reach out to our Madurai headquarters or regional offices.'
    }),

    // ── Hero Section ──────────────────────────────────────────────────────
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (Badge)',
      type: 'string',
      group: 'hero',
      initialValue: 'Support • Sales • Partnership',
    }),
    defineField({
      name: 'heroTitlePart1',
      title: 'Hero Title Part 1 (Regular)',
      type: 'string',
      group: 'hero',
      initialValue: 'Contact Zlendo',
    }),
    defineField({
      name: 'heroTitlePart2',
      title: 'Hero Title Part 2 (Teal)',
      type: 'string',
      group: 'hero',
      initialValue: 'Realty.',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 2,
      group: 'hero',
      initialValue: 'Get in touch with our experts for product guidance, support, or partnership opportunities.',
    }),

    // ── Contact Info ──────────────────────────────────────────────────────
    defineField({
      name: 'directContactTitle',
      title: 'Direct Contact Title',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'Get in touch directly',
    }),
    defineField({
      name: 'directContactSubtitle',
      title: 'Direct Contact Subtitle',
      type: 'text',
      rows: 2,
      group: 'contactInfo',
      initialValue: 'Prefer a direct conversation? Reach out to our dedicated teams across India.',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'contact@zlendorealty.com',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contactInfo',
      initialValue: '0452-3583474',
    }),
    defineField({
      name: 'hqTitle',
      title: 'Headquarters Title',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'Headquarters',
    }),
    defineField({
      name: 'hqAddress',
      title: 'Headquarters Address',
      type: 'text',
      group: 'contactInfo',
      rows: 3,
      initialValue: '36/1, Ganapathy Street,\nAlagappan Nagar, Madurai – 625003\nTamil Nadu, India',
    }),
    defineField({
      name: 'regionalPresenceLabel',
      title: 'Regional Presence Label',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'Regional Presence',
    }),
    defineField({
      name: 'regionalPresenceList',
      title: 'Regional Presence List',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'Pune • Bengaluru • Delhi • Hyderabad',
    }),

    // ── Form ──────────────────────────────────────────────────────────────
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      group: 'form',
      initialValue: 'Send us a message',
    }),
    defineField({
      name: 'formSuccessTitle',
      title: 'Success Title',
      type: 'string',
      group: 'form',
      initialValue: 'Message Sent!',
    }),
    defineField({
      name: 'formSuccessMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      group: 'form',
      initialValue: 'Thanks for reaching out. A Zlendo Realty expert will get back to you within 24 hours.',
    }),
    defineField({
      name: 'formSuccessButtonLabel',
      title: 'Success Button Label',
      type: 'string',
      group: 'form',
      initialValue: 'Send another message',
    }),

    // ── Help Center ────────────────────────────────────────────────────────
    defineField({
      name: 'helpCenterTitle',
      title: 'Help Center Title',
      type: 'string',
      group: 'helpCenter',
      initialValue: 'Quick Help Center',
    }),
    defineField({
      name: 'helpCenterSubtitle',
      title: 'Help Center Subtitle',
      type: 'string',
      group: 'helpCenter',
      initialValue: 'Common starting points for your Zlendo Realty journey.',
    }),
    defineField({
      name: 'helpItems',
      title: 'Help Center Items',
      type: 'array',
      group: 'helpCenter',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'description', type: 'text', title: 'Description', rows: 2 },
          { name: 'icon', type: 'string', title: 'Lucide Icon Name', description: 'e.g., Building2, MessageSquare, ArrowRight' },
          { name: 'url', type: 'string', title: 'Target URL' },
        ],
      }],
    }),
  ],
  preview: {
    select: { title: 'seoTitle' },
    prepare({ title }) {
      return {
        title: title || 'Page: Contact Us'
      };
    },
  },
});
