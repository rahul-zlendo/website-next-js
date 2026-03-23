import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Zlendo Realty',
    }),
    defineField({
      name: 'logoImage',
      title: 'Site Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'siteDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      initialValue: 'https://zlendorealty.com',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'twitter', title: 'Twitter / X URL', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'pinterest', title: 'Pinterest URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Brand Description',
      type: 'text',
      rows: 2,
      initialValue: "The world's first Design-to-Sales engine. Experience your space in 360° ultra-realistic 8K, AR/MR.",
    }),
    defineField({
      name: 'footerEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'contact@zlendorealty.com',
    }),
    defineField({
      name: 'footerAddress',
      title: 'Headquarters Address',
      type: 'text',
      rows: 3,
      initialValue: '36/1, Ganapathy Street,\nAlagappan Nagar, Madurai – 625003\nTamil Nadu, India',
    }),
    defineField({
      name: 'footerCities',
      title: 'Other Cities',
      type: 'string',
      initialValue: 'Pune • Bengaluru • Delhi • Hyderabad',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: 'Copyright © 2026 Zlendo Technologies Pvt. Ltd. | All Rights Reserved.',
    }),
    defineField({
      name: 'cookieConsentText',
      title: 'Cookie Consent Text',
      type: 'text',
      rows: 2,
      initialValue: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
    }),
    defineField({
      name: 'cookieAcceptLabel',
      title: 'Cookie Accept Button Label',
      type: 'string',
      initialValue: 'Accept All',
    }),
    defineField({
      name: 'cookieDeclineLabel',
      title: 'Cookie Decline Button Label',
      type: 'string',
      initialValue: 'Decline',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
