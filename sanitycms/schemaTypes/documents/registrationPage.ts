import {defineType, defineField} from 'sanity'

export const registrationPage = defineType({
  name: 'registrationPage',
  title: 'Εγγραφές',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'info', title: 'Πληροφορίες'},
    {name: 'steps', title: 'Βήματα Εγγραφής'},
    {name: 'documents', title: 'Δικαιολογητικά'},
    {name: 'form', title: 'Φόρμα'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Εγγραφές 2024-2025',
      group: 'hero',
    }),
    defineField({
      name: 'heroText',
      title: 'Κείμενο',
      type: 'text',
      rows: 3,
      initialValue:
        'Γίνε μέλος του ΓΑΣ ΕΥΝΙΚΗ και ξεκίνησε το ταξίδι σου στον κόσμο της γυμναστικής και του αθλητισμού!',
      group: 'hero',
    }),

    defineField({
      name: 'registrationPeriodLabel',
      title: 'Ετικέτα Περιόδου',
      type: 'string',
      initialValue: 'Περίοδος Εγγραφών',
      group: 'info',
    }),
    defineField({
      name: 'registrationPeriodText',
      title: 'Κείμενο Περιόδου',
      type: 'text',
      rows: 3,
      initialValue:
        'Οι εγγραφές πραγματοποιούνται καθημερινά στο κλειστό γυμναστήριο «Ι. Φωκιανός» από τις 17:00 έως τις 20:30.',
      group: 'info',
    }),
    defineField({
      name: 'trainingsStartLabel',
      title: 'Ετικέτα Έναρξης',
      type: 'string',
      initialValue: 'Έναρξη Προπονήσεων',
      group: 'info',
    }),
    defineField({
      name: 'trainingsStartText',
      title: 'Κείμενο Έναρξης',
      type: 'text',
      rows: 3,
      initialValue:
        'Οι προπονήσεις για όλα τα τμήματα (Ρυθμική, Ενόργανη, Τραμπολίνο) ξεκινούν την 1η Σεπτεμβρίου.',
      group: 'info',
    }),

    defineField({
      name: 'registrationSteps',
      title: 'Βήματα Εγγραφής',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'regStep',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Τίτλος',
              description: 'π.χ. "Επιλογή Τμήματος"',
            },
            {name: 'description', type: 'text', rows: 2, title: 'Περιγραφή'},
            {name: 'icon', type: 'string', title: 'Εικονίδιο'},
          ],
        },
      ],
      group: 'steps',
    }),

    defineField({
      name: 'documentsHeading',
      title: 'Τίτλος Δικαιολογητικών',
      type: 'string',
      initialValue: 'Συγκέντρωση Δικαιολογητικών',
      group: 'documents',
    }),
    defineField({
      name: 'requiredDocuments',
      title: 'Απαιτούμενα Δικαιολογητικά',
      type: 'array',
      of: [{type: 'string'}],
      description: 'π.χ. "Κάρτα Υγείας Αθλητή (υπογεγραμμένη από καρδιολόγο)"',
      group: 'documents',
    }),
    defineField({
      name: 'downloadFormLabel',
      title: 'Κατέβασμα αίτησης (button label)',
      type: 'string',
      group: 'documents',
    }),
    defineField({
      name: 'downloadFormUrl',
      title: 'URL αρχείου αίτησης',
      type: 'url',
      group: 'documents',
    }),

    defineField({
      name: 'formHeading',
      title: 'Τίτλος Φόρμας',
      type: 'string',
      initialValue: 'Φόρμα Εκδήλωσης Ενδιαφέροντος',
      group: 'form',
    }),
    defineField({
      name: 'formDescription',
      title: 'Περιγραφή Φόρμας',
      type: 'text',
      rows: 3,
      initialValue:
        'Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας για να οριστικοποιήσουμε την εγγραφή και το πρόγραμμα προπονήσεων.',
      group: 'form',
    }),
    defineField({
      name: 'formSubmitLabel',
      title: 'Κουμπί Αποστολής',
      type: 'string',
      initialValue: 'Αποστολή Αίτησης',
      group: 'form',
    }),
    defineField({
      name: 'privacyCheckboxLabel',
      title: 'Κείμενο checkbox ΓΔΠ',
      type: 'text',
      rows: 2,
      initialValue:
        'Αποδέχομαι την επεξεργασία των δεδομένων μου για τους σκοπούς της εγγραφής σύμφωνα με την πολιτική απορρήτου του συλλόγου.',
      group: 'form',
    }),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Εγγραφές'}
    },
  },
})
