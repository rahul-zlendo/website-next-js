export default {
  name: 'globalSolution',
  title: 'Solution Section (Product)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'intro',
      title: 'Introduction Text',
      type: 'text',
      rows: 3
    },
    {
      name: 'steps',
      title: 'Workflow Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Step Number (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
            { name: 'image', title: 'Visual (optional)', type: 'image' }
          ]
        }
      ]
    },
    {
      name: 'closeText',
      title: 'Section Close Text (Editorial)',
      type: 'text',
      rows: 2
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}
