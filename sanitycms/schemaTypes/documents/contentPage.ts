import {defineType, defineField} from 'sanity'

export const contentPage = defineType({
  name: 'contentPage',
  title: 'Σελίδα Περιεχομένου',
  type: 'document',
  groups: [
    {name: 'content', title: 'Περιεχόμενο'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Π.χ. politiki-aporritou → /selida/politiki-aporritou',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'intro',
      title: 'Σύντομη εισαγωγή',
      type: 'text',
      rows: 3,
      description: 'Προαιρετικό κείμενο κάτω από τον τίτλο',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Κείμενο',
      type: 'array',
      of: [{type: 'block'}],
      group: 'content',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Τελευταία ενημέρωση',
      type: 'date',
      group: 'content',
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
  },
})
