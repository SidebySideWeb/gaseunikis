import {defineType, defineField} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Ο Σύλλογος',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'history', title: 'Ιστορία & Αναγνώριση'},
    {name: 'spirit', title: 'Η Ψυχή του Αθλήματος'},
    {name: 'philosophy', title: 'Σκοπός & Φιλοσοφία'},
    {name: 'coaches', title: 'Προπονητικό Team'},
    {name: 'facilities', title: 'Εγκαταστάσεις'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'heroLabel',
      title: 'Label',
      type: 'string',
      initialValue: 'ΤΟ ΟΡΑΜΑ ΜΑΣ',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Ο Σύλλογος',
      group: 'hero',
    }),
    defineField({
      name: 'heroText',
      title: 'Κείμενο',
      type: 'text',
      rows: 5,
      initialValue:
        'Στην καρδιά της Ελευσίνας, ο σύλλογός μας «ΕΥΝΙΚΗ» γεννήθηκε από την βαθιά αγάπη για τη ρυθμική γυμναστική. Το όραμά μας υπερβαίνει την απλή άσκηση· στοχεύουμε στην ολόπλευρη σωματική και ψυχική ανάπτυξη των αθλητριών μας, καλλιεργώντας την πειθαρχία, τον αλληλοσεβασμό και το αθλητικό ήθος.',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Κύρια εικόνα',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
      group: 'hero',
    }),
    defineField({
      name: 'coreValues',
      title: 'Βασικές αξίες (Αγάπη, Πειθαρχία, Σεβασμός)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          fields: [
            {
              name: 'icon',
              type: 'string',
              title: 'Εικονίδιο',
              description: 'π.χ. "favorite", "psychology", "diversity_3"',
            },
            {name: 'label', type: 'string', title: 'Ετικέτα'},
          ],
        },
      ],
      group: 'hero',
    }),

    defineField({
      name: 'historyHeading',
      title: 'Τίτλος Ιστορίας',
      type: 'string',
      initialValue: 'Ιστορία',
      group: 'history',
    }),
    defineField({
      name: 'historyText',
      title: 'Κείμενο Ιστορίας',
      type: 'text',
      rows: 5,
      initialValue:
        'Ο Γ.Α.Σ.Ρ.Γ. «ΕΥΝΙΚΗ» Ελευσίνας αποτελεί ένα ζωντανό κύτταρο αθλητισμού στην περιοχή μας. Με την επίσημη αναγνώριση από τη Γενική Γραμματεία Αθλητισμού, ο σύλλογός μας λειτουργεί υπό την αιγίδα και είναι ενεργό μέλος της Ελληνικής Γυμναστικής Ομοσπονδίας (ΕΓΟ).',
      group: 'history',
    }),
    defineField({
      name: 'recognitionText',
      title: 'Αναγνώριση',
      type: 'string',
      initialValue: 'Αναγνώριση',
      group: 'history',
    }),
    defineField({
      name: 'accreditationText',
      title: 'Πιστοποίηση',
      type: 'text',
      rows: 3,
      initialValue:
        'Χρόνια επιτυχημένης πορείας με συμμετοχές σε πανελλήνια πρωταθλήματα και διεθνείς διοργανώσεις. Πιστοποιημένος σύλλογος από την ΕΓΟ, διασφαλίζοντας την ποιότητα και την ασφάλεια των προπονήσεων.',
      group: 'history',
    }),

    defineField({
      name: 'spiritHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Η Ψυχή του Αθλήματος',
      group: 'spirit',
    }),
    defineField({
      name: 'spiritLabel',
      title: 'Label',
      type: 'string',
      initialValue: 'Η ΤΕΧΝΗ ΤΗΣ ΚΙΝΗΣΗΣ',
      group: 'spirit',
    }),
    defineField({
      name: 'spiritItems',
      title: 'Στοιχεία (Τεχνική, Μουσική, Όργανα)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'spiritItem',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Τίτλος',
              description: 'π.χ. "Τεχνική & Έκφραση", "Μουσική & Ρυθμός", "Τα Όργανα"',
            },
            {name: 'text', type: 'text', rows: 2, title: 'Κείμενο'},
          ],
        },
      ],
      group: 'spirit',
    }),
    defineField({
      name: 'spiritQuote',
      title: 'Παράθεση (αν υπάρχει)',
      type: 'string',
      group: 'spirit',
    }),

    defineField({
      name: 'philosophyHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Σκοπός & Φιλοσοφία',
      group: 'philosophy',
    }),
    defineField({
      name: 'philosophyItems',
      title: 'Αξίες/Φιλοσοφία',
      type: 'array',
      of: [{type: 'valueCard'}],
      group: 'philosophy',
    }),

    defineField({
      name: 'coachesHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Η ομάδα μας',
      group: 'coaches',
    }),
    defineField({
      name: 'coachesDescription',
      title: 'Εισαγωγικό κείμενο',
      type: 'text',
      rows: 3,
      initialValue:
        'Η ομάδα των προπονητών μας αποτελείται από καταξιωμένους επαγγελματίες με πολυετή εμπειρία, υψηλή επιστημονική κατάρτιση και σημαντικές διακρίσεις σε εθνικό και διεθνές επίπεδο.',
      group: 'coaches',
    }),
    defineField({
      name: 'coaches',
      title: 'Προπονήτριες',
      type: 'array',
      of: [{type: 'coachCard'}],
      group: 'coaches',
    }),

    defineField({
      name: 'facilitiesHeading',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Εγκαταστάσεις',
      group: 'facilities',
    }),
    defineField({
      name: 'facilitiesLabel',
      title: 'Label',
      type: 'string',
      initialValue: 'Ο ΧΩΡΟΣ ΠΡΟΠΟΝΗΣΗΣ ΜΑΣ',
      group: 'facilities',
    }),
    defineField({
      name: 'facilitiesDescription',
      title: 'Περιγραφή',
      type: 'text',
      rows: 4,
      initialValue:
        'Ο σύλλογος μας διαθέτει αδειοδοτημένη και ιδιόκτητη αθλητική εγκατάσταση επί της οδού Χαριλάου και Παγκάλου 5, στην Ελευσίνα — έναν πλήρως εξοπλισμένο χώρο προπόνησης, σχεδιασμένο για την ασφαλή και ποιοτική εκπαίδευση των αθλητριών μας σε όλα τα επίπεδα.',
      group: 'facilities',
    }),
    defineField({
      name: 'facilitiesImages',
      title: 'Φωτογραφίες Χώρου',
      type: 'array',
      of: [{type: 'galleryImage'}],
      group: 'facilities',
    }),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Ο Σύλλογος'}
    },
  },
})
