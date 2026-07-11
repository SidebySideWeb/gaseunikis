import {defineType, defineField} from 'sanity'

export const newsIndexPage = defineType({
  name: 'newsIndexPage',
  title: 'Σελίδα Νέων',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Νέα & Ανακοινώσεις',
    }),
    defineField({
      name: 'heroText',
      title: 'Κείμενο',
      type: 'text',
      rows: 3,
      initialValue:
        'Μείνετε ενημερωμένοι για ό,τι συμβαίνει στον σύλλογό μας, από αγωνιστικές επιτυχίες μέχρι νέες εγγραφές και εκδηλώσεις.',
    }),
    defineField({
      name: 'postsPerPage',
      title: 'Άρθρα ανά σελίδα',
      type: 'number',
      initialValue: 9,
      validation: (rule) => rule.min(3).max(24),
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Σελίδα Νέων'}
    },
  },
})
