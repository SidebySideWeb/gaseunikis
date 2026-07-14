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
      name: 'years',
      title: 'Έτη',
      type: 'array',
      of: [{type: 'number'}],
      description: 'Προσθέστε ένα ή περισσότερα έτη (π.χ. 2024, 2025, 2026).',
      validation: (Rule) => Rule.min(1).unique(),
    }),
    defineField({
      name: 'images',
      title: 'Φωτογραφίες',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
        },
      ],
      description: 'Πολλαπλές φωτογραφίες — εμφανίζονται ως slider στην κάρτα.',
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'description',
      title: 'Περιγραφή (προαιρετικό)',
      type: 'text',
      rows: 4,
      description: 'Εμφανίζεται μόνο στη σελίδα λεπτομέρειας.',
    }),
    defineField({
      name: 'featured',
      title: 'Προβολή στην Αρχική',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'year',
      title: 'Έτος (παλιό πεδίο)',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'image',
      title: 'Φωτογραφία (παλιό πεδίο)',
      type: 'image',
      hidden: true,
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  orderings: [
    {
      title: 'Πιο πρόσφατες',
      name: 'createdDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', years: 'years', media: 'images.0'},
    prepare({title, years, media}) {
      const subtitle = Array.isArray(years) && years.length ? years.join(', ') : ''
      return {title, subtitle, media}
    },
  },
})
