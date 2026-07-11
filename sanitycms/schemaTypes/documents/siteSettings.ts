import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ρυθμίσεις Site',
  type: 'document',
  groups: [
    {name: 'identity', title: 'Ταυτότητα'},
    {name: 'nav', title: 'Πλοήγηση'},
    {name: 'contact', title: 'Στοιχεία Επικοινωνίας'},
    {name: 'footer', title: 'Footer'},
    {name: 'social', title: 'Social Media'},
  ],
  fields: [
    defineField({
      name: 'clubName',
      title: 'Όνομα Συλλόγου',
      type: 'string',
      initialValue: 'ΓΑΣ ΕΥΝΙΚΗ',
      group: 'identity',
    }),
    defineField({
      name: 'clubFullName',
      title: 'Πλήρης Επωνυμία',
      type: 'string',
      initialValue: 'Γας Ευνίκη Ελευσίνας',
      group: 'identity',
    }),
    defineField({name: 'logo', title: 'Logo', type: 'image', group: 'identity'}),
    defineField({
      name: 'foundedYear',
      title: 'Έτος Ίδρυσης',
      type: 'string',
      initialValue: '1993',
      group: 'identity',
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO τίτλος suffix',
      type: 'string',
      initialValue: '| ΓΑΣ Ευνίκη Ελευσίνας',
      group: 'identity',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default social share εικόνα',
      type: 'image',
      group: 'identity',
    }),

    defineField({
      name: 'navLinks',
      title: 'Σύνδεσμοι πλοήγησης',
      type: 'array',
      of: [{type: 'navLink'}],
      description: 'Αρχική | Ο Σύλλογος | Τμήματα | Επιτυχίες | Εγγραφές | Επικοινωνία',
      group: 'nav',
    }),
    defineField({
      name: 'navCtaLabel',
      title: 'Κουμπί Εγγραφής (nav)',
      type: 'string',
      initialValue: 'Εγγραφή',
      group: 'nav',
    }),
    defineField({
      name: 'navCtaUrl',
      title: 'URL Εγγραφής',
      type: 'string',
      initialValue: '/egrafes',
      group: 'nav',
    }),

    defineField({
      name: 'address',
      title: 'Διεύθυνση',
      type: 'string',
      initialValue: 'Χαριλάου και Παγκάλου 5, Ελευσίνα',
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Τηλέφωνο',
      type: 'string',
      initialValue: '698 444 6065',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      initialValue: 'gaseuniki@gmail.com',
      group: 'contact',
    }),
    defineField({name: 'mapUrl', title: 'URL Χάρτη (Google Maps)', type: 'url', group: 'contact'}),
    defineField({
      name: 'openingHours',
      title: 'Ωράριο Λειτουργίας',
      type: 'array',
      of: [{type: 'scheduleSlot'}],
      group: 'contact',
    }),

    defineField({name: 'facebookUrl', title: 'Facebook URL', type: 'url', group: 'social'}),
    defineField({name: 'instagramUrl', title: 'Instagram URL', type: 'url', group: 'social'}),

    defineField({
      name: 'footerUsefulLinks',
      title: 'Σύνδεσμοι «Χρήσιμα»',
      type: 'array',
      of: [{type: 'navLink'}],
      description: 'Εγγραφές, Επικοινωνία, Ε.Γ.Ο., F.I.G. κ.λπ.',
      group: 'footer',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
      initialValue:
        'Προάγουμε τον αθλητισμό και τις αξίες του μέσα από τη ρυθμική γυμναστική στην Ελευσίνα.',
      group: 'footer',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Copyright line',
      type: 'string',
      initialValue: '© 2024 Γας Ευνίκη Ελευσίνας. Με την επιφύλαξη παντός δικαιώματος.',
      group: 'footer',
    }),
    defineField({
      name: 'egoUrl',
      title: 'URL Ε.Γ.Ο.',
      type: 'url',
      description: 'Ελληνική Γυμναστική Ομοσπονδία',
      group: 'footer',
    }),
    defineField({
      name: 'figUrl',
      title: 'URL F.I.G.',
      type: 'url',
      description: 'Διεθνής Γυμναστική Ομοσπονδία',
      group: 'footer',
    }),

    defineField({
      name: 'addressStreet',
      title: 'Οδός (για Local SEO)',
      type: 'string',
      initialValue: 'Χαριλάου και Παγκάλου 5',
      group: 'contact',
    }),
    defineField({
      name: 'addressLocality',
      title: 'Πόλη',
      type: 'string',
      initialValue: 'Ελευσίνα',
      group: 'contact',
    }),
    defineField({
      name: 'addressRegion',
      title: 'Περιφέρεια',
      type: 'string',
      initialValue: 'Αττική',
      group: 'contact',
    }),
    defineField({name: 'postalCode', title: 'ΤΚ', type: 'string', group: 'contact'}),
  ],
  preview: {
    prepare() {
      return {title: 'Ρυθμίσεις Site'}
    },
  },
})
