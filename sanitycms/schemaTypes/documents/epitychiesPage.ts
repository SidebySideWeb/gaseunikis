import {defineType, defineField} from 'sanity'

export const epitychiesPage = defineType({
  name: 'epitychiesPage',
  title: 'Σελίδα Επιτυχιών',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Οι Επιτυχίες μας',
    }),
    defineField({
      name: 'heroLabel',
      title: 'Label',
      type: 'string',
      initialValue: 'Hall of Fame',
    }),
    defineField({
      name: 'heroText',
      title: 'Κείμενο',
      type: 'text',
      rows: 3,
      initialValue:
        'Κάθε μετάλλιο είναι αποτέλεσμα σκληρής δουλειάς, πειθαρχίας και αγάπης για το άθλημα. Δείτε τις διακρίσεις των αθλητριών και των ομάδων μας.',
    }),
    defineField({
      name: 'filterLabels',
      title: 'Ετικέτες φίλτρων',
      type: 'array',
      of: [{type: 'string'}],
      description: 'π.χ. ["Όλες", "Ρυθμική Γυμναστική", "Γυμναστική για Όλους"]',
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Σελίδα Επιτυχιών'}
    },
  },
})
