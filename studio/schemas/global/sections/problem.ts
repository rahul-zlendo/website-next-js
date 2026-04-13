export default {
  name: 'globalProblem',
  title: 'Problem Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3
    },
    {
      name: 'problems',
      title: 'Problem Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 4 }
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
