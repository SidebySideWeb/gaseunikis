import {defineType, defineField} from 'sanity'

export const sectionsPage = defineType({
  name: 'sectionsPage',
  title: 'Τμήματα',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'rhythmic', title: 'Ρυθμική Γυμναστική'},
    {name: 'gymnastics', title: 'Γυμναστική για Όλους'},
    {name: 'coaches', title: 'Η Ομάδα μας'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Τμήματα',
      group: 'hero',
    }),
    defineField({
      name: 'heroText',
      title: 'Κείμενο',
      type: 'text',
      rows: 3,
      initialValue:
        'Ανακαλύψτε τα προγράμματά μας και βρείτε το ιδανικό τμήμα για το παιδί σας. Προσφέρουμε εξειδικευμένη εκπαίδευση σε ένα περιβάλλον που προάγει την πειθαρχία και τη δημιουργικότητα.',
      group: 'hero',
    }),

    defineField({
      name: 'rhythmicHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Ρυθμική Γυμναστική',
      group: 'rhythmic',
    }),
    defineField({
      name: 'rhythmicDescription',
      title: 'Περιγραφή',
      type: 'text',
      rows: 4,
      initialValue:
        'Η Ρυθμική Γυμναστική είναι ο απόλυτος συνδυασμός τεχνικής αρτιότητας και καλλιτεχνικής έκφρασης. Μέσα από τη χρήση οργάνων όπως το σχοινάκι, το στεφάνι, η μπάλα, οι κορύνες και η κορδέλα.',
      group: 'rhythmic',
    }),
    defineField({
      name: 'rhythmicCategoryHeading',
      title: 'Αγωνιστικά Τμήματα',
      type: 'string',
      initialValue: 'Αγωνιστικά Τμήματα',
      group: 'rhythmic',
    }),
    defineField({
      name: 'rhythmicCompetitive',
      title: 'Αγωνιστικά Τμήματα (Αγωνιστικό, Προαγωνιστικό)',
      type: 'array',
      of: [{type: 'sectionCard'}],
      group: 'rhythmic',
    }),
    defineField({
      name: 'rhythmicMassHeading',
      title: 'Τμήματα Μαζικού Αθλητισμού',
      type: 'string',
      initialValue: 'Τμήματα Μαζικού Αθλητισμού',
      group: 'rhythmic',
    }),
    defineField({
      name: 'rhythmicMass',
      title: 'Μαζικού Αθλητισμού (Junior, Επίλεκτα, Παγκορασίδων)',
      type: 'array',
      of: [{type: 'sectionCard'}],
      group: 'rhythmic',
    }),

    defineField({
      name: 'gymnHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Γυμναστική για Όλους',
      group: 'gymnastics',
    }),
    defineField({
      name: 'gymnDescription',
      title: 'Περιγραφή',
      type: 'text',
      rows: 4,
      initialValue:
        'Εστίαση στην ομαδικότητα και τη συμμετοχή σε μεγάλα φεστιβάλ γυμναστικής. Έμφαση σε εντυπωσιακές χορογραφίες που συνδυάζουν ακροβατικά.',
      group: 'gymnastics',
    }),
    defineField({
      name: 'gymSections',
      title: 'Τμήματα (Φεστιβάλ A, Φεστιβάλ B, Performance)',
      type: 'array',
      of: [{type: 'sectionCard'}],
      group: 'gymnastics',
    }),

    defineField({
      name: 'coachesHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Η Ομάδα μας',
      group: 'coaches',
    }),
    defineField({
      name: 'coachesDescription',
      title: 'Κείμενο',
      type: 'text',
      rows: 3,
      initialValue:
        'Το τεχνικό μας επιτελείο αποτελείται από διπλωματούχους προπονήτριες με πάθος για την ανάδειξη νέων ταλέντων.',
      group: 'coaches',
    }),
    defineField({
      name: 'coaches',
      title: 'Προπονήτριες',
      type: 'array',
      of: [{type: 'coachCard'}],
      group: 'coaches',
    }),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Τμήματα'}
    },
  },
})
