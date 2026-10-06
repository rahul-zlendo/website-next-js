export default {
  name: 'globalLogoStrip',
  title: 'Logo/Trust Strip',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Bar Title (optional)',
      type: 'string',
      description: 'e.g. Featured in, Partners, etc.'
    },
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'image', title: 'Logo Image', type: 'image' }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }: any) {
       return {
         title: `Logo Strip: ${title || 'Logos'}`
       }
    }
  }
}
