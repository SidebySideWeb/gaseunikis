import {defineType, defineField} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Επικοινωνία',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'form', title: 'Φόρμα'},
    {name: 'map', title: 'Χάρτης'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Επικοινωνία',
      group: 'hero',
    }),
    defineField({
      name: 'heroText',
      title: 'Κείμενο',
      type: 'text',
      rows: 3,
      initialValue:
        'Είμαστε πάντα στη διάθεσή σας για οποιαδήποτε πληροφορία σχετικά με τα προγράμματα και τις εγγραφές του συλλόγου μας.',
      group: 'hero',
    }),
    defineField({
      name: 'heroCallToAction',
      title: 'Ελάτε σε Επαφή label',
      type: 'string',
      initialValue: 'Ελάτε σε Επαφή',
      group: 'hero',
    }),

    defineField({
      name: 'formHeading',
      title: 'Τίτλος Φόρμας',
      type: 'string',
      initialValue: 'Στείλτε μας μήνυμα',
      group: 'form',
    }),
    defineField({
      name: 'formSubmitLabel',
      title: 'Κουμπί Αποστολής',
      type: 'string',
      initialValue: 'Αποστολή Μηνύματος',
      group: 'form',
    }),
    defineField({
      name: 'privacyCheckboxLabel',
      title: 'Κείμενο checkbox ΓΔΠ',
      type: 'text',
      rows: 2,
      initialValue:
        'Αποδέχομαι την επεξεργασία των δεδομένων μου για τους σκοπούς της επικοινωνίας σύμφωνα με την πολιτική απορρήτου του συλλόγου.',
      group: 'form',
    }),
    defineField({
      name: 'subjectOptions',
      title: 'Επιλογές Θέματος',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: [
        'Πληροφορίες Τμημάτων',
        'Νέα Εγγραφή',
        'Επικοινωνία με προπονητές',
        'Άλλο',
      ],
      group: 'form',
    }),

    defineField({
      name: 'mapHeading',
      title: 'Τίτλος Χάρτη',
      type: 'string',
      initialValue: 'Βρείτε μας στην καρδιά της Ελευσίνας.',
      group: 'map',
    }),
    defineField({
      name: 'mapText',
      title: 'Κείμενο Χάρτη',
      type: 'text',
      rows: 2,
      initialValue:
        'Βρείτε μας στην καρδιά της Ελευσίνας. Εύκολη πρόσβαση για όλους τους αθλητές μας.',
      group: 'map',
    }),
    defineField({
      name: 'mapButtonLabel',
      title: 'Κουμπί Χάρτη',
      type: 'string',
      initialValue: 'Οδηγίες Χάρτη',
      group: 'map',
    }),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Επικοινωνία'}
    },
  },
})
