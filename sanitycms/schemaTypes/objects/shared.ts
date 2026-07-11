import {defineType, defineField} from 'sanity'

export const scheduleSlot = defineType({
  name: 'scheduleSlot',
  title: 'Ωράριο',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Ημέρα',
      type: 'string',
      description: 'π.χ. "Δευτέρα - Παρασκευή", "Σάββατο", "Κυριακή"',
    }),
    defineField({
      name: 'hours',
      title: 'Ώρες',
      type: 'string',
      description: 'π.χ. "17:00 - 20:00" ή "Κλειστά"',
    }),
  ],
  preview: {select: {title: 'day', subtitle: 'hours'}},
})

export const coachCard = defineType({
  name: 'coachCard',
  title: 'Προπονήτρια',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Ονοματεπώνυμο', type: 'string'}),
    defineField({
      name: 'role',
      title: 'Ρόλος',
      type: 'string',
      description: 'π.χ. "Υπεύθυνη όλων των τμημάτων", "Ολυμπιονίκης", "Προπονήτρια"',
    }),
    defineField({name: 'bio', title: 'Βιογραφικό', type: 'text', rows: 6}),
    defineField({
      name: 'certifications',
      title: 'Πιστοποιήσεις',
      type: 'text',
      rows: 2,
      description:
        'π.χ. "Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)"',
    }),
    defineField({
      name: 'photo',
      title: 'Φωτογραφία',
      type: 'image',
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
  ],
  preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
})

export const valueCard = defineType({
  name: 'valueCard',
  title: 'Λόγος Επιλογής',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Εικονίδιο (Material Symbols)',
      type: 'string',
      description: 'π.χ. "verified", "security", "auto_awesome"',
    }),
    defineField({name: 'title', title: 'Τίτλος', type: 'string'}),
    defineField({name: 'description', title: 'Περιγραφή', type: 'text', rows: 2}),
  ],
  preview: {select: {title: 'title', subtitle: 'icon'}},
})

export const statItem = defineType({
  name: 'statItem',
  title: 'Στατιστικό',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Αριθμός/Τιμή',
      type: 'string',
      description: 'π.χ. "45", "12", "30+"',
    }),
    defineField({
      name: 'label',
      title: 'Ετικέτα',
      type: 'string',
      description: 'π.χ. "Ενεργές Αθλήτριες", "Μετάλλια το 2026"',
    }),
  ],
  preview: {select: {title: 'value', subtitle: 'label'}},
})

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Φωτογραφία',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Φωτογραφία',
      type: 'image',
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({name: 'caption', title: 'Λεζάντα (προαιρετικό)', type: 'string'}),
  ],
  preview: {select: {title: 'caption', media: 'image'}},
})

export const sectionCard = defineType({
  name: 'sectionCard',
  title: 'Τμήμα',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Όνομα Τμήματος',
      type: 'string',
      description: 'π.χ. "Αγωνιστικό", "Προαγωνιστικό", "Junior", "Ομάδα Φεστιβάλ A"',
    }),
    defineField({
      name: 'badge',
      title: 'Badge/Ετικέτα (προαιρετικό)',
      type: 'string',
      description: 'π.χ. "Elite", "Rising Stars"',
    }),
    defineField({name: 'description', title: 'Περιγραφή', type: 'text', rows: 3}),
    defineField({
      name: 'ageRange',
      title: 'Ηλικίες',
      type: 'string',
      description: 'π.χ. "8-15 ετών", "6-8 ετών", "3-5 ετών"',
    }),
    defineField({
      name: 'schedule',
      title: 'Πρόγραμμα',
      type: 'string',
      description: 'π.χ. "Δευ, Τετ, Παρ: 16:00 - 20:00"',
    }),
    defineField({name: 'icon', title: 'Εικονίδιο', type: 'string'}),
  ],
  preview: {select: {title: 'name', subtitle: 'ageRange'}},
})

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'title',
      title: 'Meta τίτλος',
      type: 'string',
      description: '50-60 χαρακτήρες',
    }),
    defineField({
      name: 'description',
      title: 'Meta περιγραφή',
      type: 'text',
      rows: 3,
      description: '120-160 χαρακτήρες',
    }),
    defineField({name: 'ogImage', title: 'Social share εικόνα', type: 'image'}),
    defineField({
      name: 'noIndex',
      title: 'Απόκρυψη από μηχανές αναζήτησης',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
