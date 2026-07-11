import {defineType, defineField} from 'sanity'

export const epitychies = defineType({
  name: 'epitychies',
  title: 'Επιτυχία',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος Επιτυχίας',
      type: 'string',
      description: 'π.χ. "Αθανασίου Κωνσταντίνα: Πρωταθλήτρια Ελλάδος"',
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
      name: 'category',
      title: 'Κατηγορία',
      type: 'string',
      options: {
        list: [
          {title: 'Ρυθμική Γυμναστική', value: 'rhythmic'},
          {title: 'Γυμναστική για Όλους', value: 'gymnastics-for-all'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'medalType',
      title: 'Μετάλλιο',
      type: 'string',
      options: {
        list: [
          {title: 'Χρυσό', value: 'gold'},
          {title: 'Ασημένιο', value: 'silver'},
          {title: 'Χάλκινο', value: 'bronze'},
          {title: 'Ειδικό Βραβείο', value: 'special'},
          {title: 'Άλλη Διάκριση', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'athleteName',
      title: 'Όνομα Αθλήτριας/Ομάδας',
      type: 'string',
      description: 'π.χ. "Αθανασίου Κωνσταντίνα" ή "Τμήμα Δημοτικού"',
    }),
    defineField({
      name: 'competition',
      title: 'Διαγωνισμός/Πρωτάθλημα',
      type: 'string',
      description: 'π.χ. "Πανελλήνιο Πρωτάθλημα", "Βαλκανικό Πρωτάθλημα"',
    }),
    defineField({
      name: 'year',
      title: 'Έτος',
      type: 'string',
      description: 'π.χ. "2026"',
    }),
    defineField({
      name: 'description',
      title: 'Περιγραφή',
      type: 'text',
      rows: 4,
      description: 'Αναλυτική περιγραφή της επιτυχίας',
    }),
    defineField({
      name: 'featured',
      title: 'Προβολή στην Αρχική',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Φωτογραφία',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  orderings: [
    {
      title: 'Πιο πρόσφατες',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'year', media: 'image'},
    prepare({title, subtitle, media}) {
      return {title, subtitle: `${subtitle || ''}`, media}
    },
  },
})
