import {defineType, defineField} from 'sanity'

export const newsPost = defineType({
  name: 'newsPost',
  title: 'Νέο',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Ημερομηνία Δημοσίευσης',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Περίληψη',
      type: 'text',
      rows: 3,
      description: 'Εμφανίζεται στη λίστα νέων',
    }),
    defineField({
      name: 'body',
      title: 'Κείμενο',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', fields: [{name: 'alt', type: 'string'}]}],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Κύρια Φωτογραφία',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({
      name: 'readMoreLabel',
      title: 'Σύνδεσμος "Διαβάστε περισσότερα"',
      type: 'string',
      initialValue: 'Διαβάστε περισσότερα',
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  orderings: [
    {
      title: 'Πιο πρόσφατα',
      name: 'publishedDateDesc',
      by: [{field: 'publishedDate', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'publishedDate', media: 'featuredImage'},
  },
})
