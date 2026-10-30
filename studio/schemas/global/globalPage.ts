export default {
  name: 'globalPage',
  title: 'Global Dynamic Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'globalHero' },
        { type: 'globalFeatures' },
        { type: 'globalOutcomes' },
        { type: 'globalLogoStrip' },
        { type: 'globalProblem' },
        { type: 'globalSolution' },
        { type: 'globalComparison' },
        { type: 'globalSocialProof' },
        { type: 'globalWhoItIsFor' },
        { type: 'globalFinalCTA' }
        // Add more section types here as we develop them
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
}
