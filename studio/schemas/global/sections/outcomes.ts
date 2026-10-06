export default {
  name: 'globalOutcomes',
  title: 'Outcomes Section (Proof Bar)',
  type: 'object',
  fields: [
    {
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 3x, 60s)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'description', title: 'Description (optional)', type: 'text', rows: 2 }
          ]
        }
      ]
    },
    {
      name: 'note',
      title: 'Source Footnote',
      type: 'text',
      rows: 2,
      description: 'Legal/source note for the metrics'
    }
  ],
  preview: {
    select: {
      title: 'outcomes.0.label'
    },
    prepare({ title }: any) {
      return {
        title: `Outcomes: ${title || 'No outcomes defined'}`
      }
    }
  }
}
