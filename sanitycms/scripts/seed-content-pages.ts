import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '3cdkfsee',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

function block(text: string, style: 'normal' | 'h2' = 'normal') {
  return {
    _type: 'block',
    style,
    markDefs: [],
    children: [{_type: 'span', text, marks: []}],
  }
}

const contentPages = [
  {
    _id: 'contentPage-politiki-aporritou',
    _type: 'contentPage',
    title: 'Πολιτική Απορρήτου',
    slug: {current: 'politiki-aporritou'},
    intro:
      'Η παρούσα πολιτική περιγράφει πώς ο Γυμναστικός Αθλητικός Σύλλογος Ευνίκη Ελευσίνας συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σας δεδομένα.',
    lastUpdated: new Date().toISOString().slice(0, 10),
    body: [
      block('1. Υπεύθυνος επεξεργασίας', 'h2'),
      block(
        'Υπεύθυνος επεξεργασίας είναι ο Γυμναστικός Αθλητικός Σύλλογος Ευνίκη Ελευσίνας. Για ερωτήσεις σχετικά με τα προσωπικά σας δεδομένα, επικοινωνήστε μαζί μας μέσω της φόρμας επικοινωνίας ή στο email που αναφέρεται στον ιστότοπο.',
      ),
      block('2. Δεδομένα που συλλέγουμε', 'h2'),
      block(
        'Μπορούμε να συλλέξουμε ονοματεπώνυμο, email, τηλέφωνο και άλλα στοιχεία που υποβάλλετε μέσω των φορμών επικοινωνίας ή εγγραφής, καθώς και τεχνικά δεδομένα (π.χ. cookies, IP) όταν επισκέπτεστε τον ιστότοπο.',
      ),
      block('3. Σκοποί επεξεργασίας', 'h2'),
      block(
        'Τα δεδομένα χρησιμοποιούνται για την εξυπηρέτηση αιτημάτων, τη διαχείριση εγγραφών, την επικοινωνία μαζί σας και — με τη συγκατάθεσή σας — για στατιστική ανάλυση επισκεψιμότητας.',
      ),
      block('4. Τα δικαιώματά σας', 'h2'),
      block(
        'Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, εναντίωσης και φορητότητας, σύμφωνα με τον GDPR. Μπορείτε να ασκήσετε τα δικαιώματά σας επικοινωνώντας μαζί μας.',
      ),
    ],
  },
  {
    _id: 'contentPage-politiki-cookies',
    _type: 'contentPage',
    title: 'Πολιτική Cookies',
    slug: {current: 'politiki-cookies'},
    intro:
      'Ο ιστότοπός μας χρησιμοποιεί cookies και παρόμοια τεχνολογία. Εδώ εξηγούμε τι χρησιμοποιούμε και πώς μπορείτε να διαχειριστείτε τις προτιμήσεις σας.',
    lastUpdated: new Date().toISOString().slice(0, 10),
    body: [
      block('Τι είναι τα cookies', 'h2'),
      block(
        'Τα cookies είναι μικρά αρχεία που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε έναν ιστότοπο. Μας βοηθούν να λειτουργεί σωστά ο ιστότοπος και — με τη συγκατάθεσή σας — να κατανοούμε πώς χρησιμοποιείται.',
      ),
      block('Κατηγορίες cookies', 'h2'),
      block(
        'Απαραίτητα: απαιτούνται για βασικές λειτουργίες (π.χ. αποθήκευση προτιμήσεων cookies). Στατιστικά: βοηθούν στην ανώνυμη ανάλυση επισκεψιμότητας (π.χ. Google Analytics μέσω GTM). Διαφημιστικά: χρησιμοποιούνται μόνο αν τα επιτρέψετε.',
      ),
      block('Διαχείριση προτιμήσεων', 'h2'),
      block(
        'Μπορείτε να αλλάξετε τις επιλογές σας ανά πάσα στιγμή από το εικονίδιο cookies στο κάτω αριστερό μέρος της οθόνης ή από το banner κατά την πρώτη επίσκεψη.',
      ),
    ],
  },
]

async function seedContentPages() {
  for (const doc of contentPages) {
    await client.createOrReplace(doc)
    console.log('✅ Seeded:', doc._type, doc.slug.current)
  }
}

seedContentPages().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
