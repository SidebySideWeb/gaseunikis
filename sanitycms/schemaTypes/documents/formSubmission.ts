import {defineType, defineField} from 'sanity'

export const formSubmission = defineType({
  name: 'formSubmission',
  title: 'Φόρμα Υποβολή',
  type: 'document',
  fields: [
    defineField({
      name: 'formType',
      title: 'Τύπος Φόρμας',
      type: 'string',
      options: {
        list: [
          {title: 'Επικοινωνία', value: 'contact'},
          {title: 'Εγγραφή', value: 'registration'},
        ],
      },
      readOnly: true,
    }),

    defineField({name: 'fullName', title: 'Ονοματεπώνυμο', type: 'string', readOnly: true}),
    defineField({name: 'email', title: 'Email', type: 'string', readOnly: true}),
    defineField({name: 'phone', title: 'Τηλέφωνο', type: 'string', readOnly: true}),
    defineField({
      name: 'subject',
      title: 'Θέμα',
      type: 'string',
      description: 'Πληροφορίες Τμημάτων / Νέα Εγγραφή / Επικοινωνία με προπονητές / Άλλο',
      readOnly: true,
    }),
    defineField({name: 'message', title: 'Μήνυμα', type: 'text', rows: 4, readOnly: true}),

    defineField({
      name: 'athleteName',
      title: 'Ονοματεπώνυμο Αθλητή',
      type: 'string',
      readOnly: true,
    }),
    defineField({name: 'birthDate', title: 'Ημερομηνία Γέννησης', type: 'string', readOnly: true}),
    defineField({name: 'guardianName', title: 'Όνομα Κηδεμόνα', type: 'string', readOnly: true}),
    defineField({name: 'guardianPhone', title: 'Τηλέφωνο Κηδεμόνα', type: 'string', readOnly: true}),
    defineField({name: 'guardianEmail', title: 'Email Κηδεμόνα', type: 'string', readOnly: true}),
    defineField({
      name: 'sportInterest',
      title: 'Άθλημα Ενδιαφέροντος',
      type: 'string',
      description:
        'Ρυθμική Γυμναστική / Ενόργανη Γυμναστική / Τραμπολίνο / Αεροβική Γυμναστική / Αγωνιστικό Τμήμα',
      readOnly: true,
    }),
    defineField({
      name: 'previousExperience',
      title: 'Προηγούμενη Εμπειρία',
      type: 'string',
      description: 'Όχι (Αρχάριο επίπεδο) / Ναι (1-2 χρόνια) / Ναι (3+ χρόνια)',
      readOnly: true,
    }),
    defineField({name: 'notes', title: 'Μήνυμα / Σημειώσεις', type: 'text', rows: 3, readOnly: true}),
    defineField({name: 'privacyAccepted', title: 'Αποδοχή ΓΔΠ', type: 'boolean', readOnly: true}),

    defineField({name: 'read', title: 'Διαβάστηκε', type: 'boolean', initialValue: false}),
    defineField({name: 'starred', title: 'Επισημασμένο', type: 'boolean', initialValue: false}),
    defineField({
      name: 'submittedAt',
      title: 'Ημερομηνία Υποβολής',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: 'Πιο πρόσφατα',
      name: 'submittedAtDesc',
      by: [{field: 'submittedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'fullName', subtitle: 'formType', read: 'read'},
    prepare({title, subtitle, read}) {
      const label = subtitle === 'registration' ? 'Εγγραφή' : 'Επικοινωνία'
      return {title: read ? title : `🔵 ${title}`, subtitle: label}
    },
  },
})
