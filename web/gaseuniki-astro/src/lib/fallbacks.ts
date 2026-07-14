import type {
  AboutPage,
  Achievement,
  Coach,
  GalleryImage,
  HomePage,
  NavLink,
  NewsItem,
  Program,
  SectionsPage,
  SiteSettings,
  Sponsor,
} from './types';

export const defaultSiteSettings: SiteSettings = {
  clubName: 'ΓΑΣ ΕΥΝΙΚΗ',
  clubFullName: 'Γας Ευνίκη Ελευσίνας',
  foundedYear: '1993',
  phone: '698 444 6065',
  email: 'gaseuniki@gmail.com',
  address: 'Χαριλάου και Παγκάλου 5, Ελευσίνα',
  addressStreet: 'Χαριλάου και Παγκάλου 5',
  addressLocality: 'Ελευσίνα',
  addressRegion: 'Αττική',
  openingHours: [
    { day: 'Δευτέρα - Παρασκευή', hours: '17:00 - 20:00' },
    { day: 'Σάββατο', hours: '10:00 - 13:00' },
    { day: 'Κυριακή', hours: 'Κλειστά' },
  ],
  navCtaLabel: 'Εγγραφή',
  navCtaUrl: '/egrafes',
};

export const defaultHomePage: HomePage = {
  heroBadge: 'ΑΘΛΗΤΙΚΟΣ ΣΥΛΛΟΓΟΣ',
  heroHeading: 'Γας Ευνίκη Ελευσίνας',
  heroSubheading: 'Ρυθμική Γυμναστική & Γυμναστική για Όλους',
  heroQuote: 'Εκεί που το ταλέντο συναντά την αφοσίωση.',
  heroPrimaryCtaLabel: 'Δες τα Τμήματά μας',
  heroPrimaryCtaUrl: '/tmimata',
  heroSecondaryCtaLabel: 'Κλείσε Δοκιμαστικό Μάθημα',
  heroSecondaryCtaUrl: '/egrafes',
  aboutHeading: 'Καλωσορίσατε στον ΓΑΣ Ευνίκη',
  aboutText:
    'Με πολυετή εμπειρία και βαθιά αγάπη για το άθλημα, ο Σύλλογός μας αποτελεί ένα πρότυπο κέντρο καλλιέργειας της Ρυθμικής Γυμναστικής και της Γυμναστικής για Όλους στην Ελευσίνα.',
  aboutAccreditedBy: 'Αναγνωρισμένοι από',
  aboutSecondParagraph:
    'Αναγνωρισμένοι από την Ελληνική Γυμναστική Ομοσπονδία (Ε.Γ.Ο.) και τη Γενική Γραμματεία Αθλητισμού (Γ.Γ.Α.), προσφέρουμε ένα ασφαλές και σύγχρονο περιβάλλον όπου κάθε παιδί μπορεί να ανακαλύψει τις δυνατότητές του.',
  yearsExperience: '30+',
  sectionsHeading: 'Τα Τμήματά μας',
  sectionsCtaLabel: 'Μάθετε Περισσότερα',
  sectionsCtaUrl: '/tmimata',
  galleryHeading: 'Στιγμές από την Προπόνηση',
  gallerySubheading: 'Η καθημερινή μας προσπάθεια σε εικόνες.',
  successesHeading: 'Οι Επιτυχίες μας',
  successesSubheading: 'Διακρίσεις που επιβραβεύουν την προσπάθεια και το ήθος των αθλητριών μας.',
  successesCtaLabel: 'Δείτε Όλες τις Επιτυχίες',
  successesCtaUrl: '/epitychies',
  stats: [
    { value: '230', label: 'Ενεργές Αθλήτριες' },
    { value: '45+', label: 'Μετάλλια το 2026' },
  ],
  newsHeading: 'Τελευταία Νέα',
  newsCtaLabel: 'Όλα τα Νέα',
  newsCtaUrl: '/nea',
  whyHeading: 'Γιατί να μας επιλέξετε',
  whyItems: [
    { icon: 'check', title: 'Αναγνώριση Γ.Γ.Α.', description: 'Πλήρης πιστοποίηση από τη Γενική Γραμματεία Αθλητισμού.' },
    { icon: 'check', title: 'Καθηγητές Φυσικής Αγωγής', description: 'Εξειδικευμένοι προπονητές με πανεπιστημιακή μόρφωση.' },
    { icon: 'check', title: 'Για όλες τις ηλικίες', description: 'Τμήματα από 3 έως 18 ετών, προσαρμοσμένα στις ανάγκες κάθε παιδιού.' },
    { icon: 'check', title: 'Παιδαγωγική Προσέγγιση', description: 'Έμφαση στη διαμόρφωση του χαρακτήρα και την αυτοπεποίθηση.' },
    { icon: 'check', title: 'Σύγχρονες Μέθοδοι', description: 'Προπονητικά προγράμματα βασισμένα στα τελευταία διεθνή πρότυπα.' },
  ],
  sponsorsHeading: 'Οι Χορηγοί μας',
  sponsors: [
    { name: 'ΚΑΡΠΑΘΙΟΣ Development' },
    { name: 'AKROR Group' },
  ] satisfies Sponsor[],
  ctaHeading: 'Έλα κι εσύ στην οικογένεια της Ευνίκης!',
  ctaText: 'Ξεκίνα σήμερα ένα ταξίδι γεμάτο ρυθμό, πειθαρχία και χαρά. Η πρώτη προπόνηση είναι δωρεάν!',
  ctaButtonLabel: 'Επικοινώνησε μαζί μας',
  ctaButtonUrl: '/epikoinonia',
};

export const defaultGalleryItems: GalleryImage[] = [
  { caption: 'Έκφραση' },
  { caption: 'Ομαδική Χορογραφία' },
  { caption: 'Αγωνιστικό Πνεύμα' },
];

export const defaultFeaturedSuccesses: Achievement[] = [
  {
    _id: 'fallback-1',
    title: 'Αθανασίου Κωνσταντίνα',
    athleteName: 'Αθανασίου Κωνσταντίνα',
    description: 'Πρωταθλήτρια Ελλάδος 2026 (4η συνεχόμενη χρονιά)',
    year: '2026',
    years: [2026],
    medalType: 'gold',
    category: 'rhythmic',
  },
  {
    _id: 'fallback-2',
    title: 'Αδάμ Σωτηρία',
    athleteName: 'Αδάμ Σωτηρία',
    description: 'Χρυσή Βαλκανιονίκης & Πρωταθλήτρια Ελλάδος 2026',
    year: '2026',
    years: [2026],
    medalType: 'silver',
    category: 'rhythmic',
  },
  {
    _id: 'fallback-3',
    title: 'Γυμναστική για Όλους',
    athleteName: 'Γυμναστική για Όλους',
    competition: 'Μεγάλο Τμήμα',
    description: 'Χρυσό Μετάλλιο, Αγώνας Ομοσπονδίας',
    year: '2026',
    years: [2026],
    medalType: 'special',
    category: 'gymnastics-for-all',
  },
];

export const defaultAchievements: Achievement[] = [
  ...defaultFeaturedSuccesses,
  {
    _id: 'fallback-4',
    title: 'Τμήμα Δημοτικού',
    athleteName: 'Τμήμα Δημοτικού',
    description: 'Διακρίσεις σε πανελλήνιους αγώνες ομαδικών',
    year: '2026',
    years: [2026],
    medalType: 'gold',
    category: 'gymnastics-for-all',
  },
  {
    _id: 'fallback-5',
    title: 'Κανάκη Μαρίνα',
    athleteName: 'Κανάκη Μαρίνα',
    description: 'Ασημένια Βαλκανιονίκης 2026',
    year: '2026',
    years: [2026],
    medalType: 'silver',
    category: 'rhythmic',
  },
  {
    _id: 'fallback-6',
    title: 'Μεγάλο Τμήμα',
    athleteName: 'Μεγάλο Τμήμα',
    description: 'Χάλκινο μετάλλιο σε πανελλήνιο πρωτάθλημα',
    year: '2026',
    years: [2026],
    medalType: 'bronze',
    category: 'gymnastics-for-all',
  },
];

export const defaultLatestNews: NewsItem[] = [
  {
    _id: 'fallback-news-1',
    title: 'Εγγραφές 2026-2027',
    slug: { current: 'eggrafes-2026-2027' },
    excerpt: 'Ξεκίνησαν οι προ-εγγραφές για τη νέα αθλητική χρονιά. Εξασφαλίστε τη θέση σας στα τμήματα μας.',
    publishedDate: '2026-07-01',
  },
  {
    _id: 'fallback-news-2',
    title: 'Επιτυχημένη παρουσία στο Πανελλήνιο',
    slug: { current: 'epitychis-parousia-panellinio' },
    excerpt: 'Με 5 μετάλλια και εξαιρετικές εμφανίσεις ολοκληρώθηκε η συμμετοχή μας στο Πανελλήνιο Πρωτάθλημα.',
    publishedDate: '2026-06-15',
  },
  {
    _id: 'fallback-news-3',
    title: 'Έναρξη χρονιάς',
    slug: { current: 'enarksi-chronias' },
    excerpt: 'Καλωσορίζουμε παλιές και νέες αθλήτριες στην πρώτη προπόνηση της σεζόν. Καλή αρχή σε όλες!',
    publishedDate: '2025-09-01',
  },
];

export const defaultAboutPage: AboutPage = {
  heroLabel: 'ΤΟ ΟΡΑΜΑ ΜΑΣ',
  heroHeading: 'Ο Σύλλογος',
  heroText:
    'Στην καρδιά της Ελευσίνας, ο σύλλογός μας «ΕΥΝΙΚΗ» γεννήθηκε από την βαθιά αγάπη για τη ρυθμική γυμναστική. Το όραμά μας υπερβαίνει την απλή άσκηση· στοχεύουμε στην ολόπλευρη σωματική και ψυχική ανάπτυξη των αθλητριών μας, καλλιεργώντας την πειθαρχία, τον αλληλοσεβασμό και το αθλητικό ήθος.',
  coreValues: [
    { icon: 'favorite', label: 'ΑΓΑΠΗ' },
    { icon: 'psychology', label: 'ΠΕΙΘΑΡΧΙΑ' },
    { icon: 'diversity_3', label: 'ΣΕΒΑΣΜΟΣ' },
  ],
  historyHeading: 'Ιστορία',
  historyText:
    'Ο Γ.Α.Σ.Ρ.Γ. «ΕΥΝΙΚΗ» Ελευσίνας αποτελεί ένα ζωντανό κύτταρο αθλητισμού στην περιοχή μας. Με την επίσημη αναγνώριση από τη Γενική Γραμματεία Αθλητισμού, ο σύλλογός μας λειτουργεί υπό την αιγίδα και είναι ενεργό μέλος της Ελληνικής Γυμναστικής Ομοσπονδίας (ΕΓΟ).',
  recognitionText: 'Αναγνώριση',
  accreditationText:
    'Χρόνια επιτυχημένης πορείας με συμμετοχές σε πανελλήνια πρωταθλήματα και διεθνείς διοργανώσεις. Πιστοποιημένος σύλλογος από την ΕΓΟ, διασφαλίζοντας την ποιότητα και την ασφάλεια των προπονήσεων.',
  spiritHeading: 'Η Ψυχή του Αθλήματος',
  spiritLabel: 'Η ΤΕΧΝΗ ΤΗΣ ΚΙΝΗΣΗΣ',
  spiritItems: [
    { heading: 'Τεχνική & Έκφραση', text: 'Συνδυασμός χορού, ακροβατικών στοιχείων και απόλυτου ελέγχου των οργάνων.' },
    { heading: 'Μουσική & Ρυθμός', text: 'Η κίνηση εναρμονίζεται με τη μουσική, δημιουργώντας ένα οπτικό ποίημα στη σκηνή.' },
    { heading: 'Τα Όργανα', text: 'Κορδέλα, μπάλα, στεφάνι, κορύνες και σχοινάκι γίνονται προέκταση του σώματος.' },
  ],
  philosophyHeading: 'Σκοπός & Φιλοσοφία',
  philosophyItems: [
    { icon: 'verified', title: 'Προώθηση του Αθλητισμού', description: 'Στόχος μας είναι η διάδοση του αθλήματος της ρυθμικής γυμναστικής στη νέα γενιά της πόλης μας.' },
    { icon: 'security', title: 'Ασφαλές Περιβάλλον', description: 'Παρέχουμε έναν χώρο όπου κάθε αθλήτρια αισθάνεται ασφαλής να πειραματιστεί και να εξελιχθεί.' },
    { icon: 'auto_awesome', title: 'Διαμόρφωση Χαρακτήρα', description: 'Μέσω του αθλητισμού, χτίζουμε ισχυρές προσωπικότητες με αυτοπεποίθηση και επιμονή.' },
  ],
  coachesHeading: 'Η ομάδα μας',
  coachesDescription:
    'Η ομάδα των προπονητών μας αποτελείται από καταξιωμένους επαγγελματίες με πολυετή εμπειρία, υψηλή επιστημονική κατάρτιση και σημαντικές διακρίσεις σε εθνικό και διεθνές επίπεδο.',
  coaches: [
    { name: 'Ειρήνη Σιδηροπούλου', role: 'Υπεύθυνη όλων των τμημάτων', bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής', certifications: 'Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)' },
    { name: 'Δήμητρα Καφαλίδου', role: 'Ολυμπιονίκης', bio: 'Ολυμπιονίκης Ρυθμικής Γυμναστικής', certifications: 'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.)' },
    { name: 'Σταυρούλα Ιωάννα Καρούση', role: 'Προπονήτρια', bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής', certifications: 'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Πτυχιούχος Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)' },
  ],
  facilitiesHeading: 'Εγκαταστάσεις',
  facilitiesLabel: 'Ο ΧΩΡΟΣ ΠΡΟΠΟΝΗΣΗΣ ΜΑΣ',
  facilitiesDescription:
    'Ο σύλλογος μας διαθέτει αδειοδοτημένη και ιδιόκτητη αθλητική εγκατάσταση επί της οδού Χαριλάου και Παγκάλου 5, στην Ελευσίνα — έναν πλήρως εξοπλισμένο χώρο προπόνησης, σχεδιασμένο για την ασφαλή και ποιοτική εκπαίδευση των αθλητριών μας σε όλα τα επίπεδα.',
  facilitiesImages: Array.from({ length: 4 }, () => ({ caption: 'Ο ΧΩΡΟΣ ΠΡΟΠΟΝΗΣΗΣ ΜΑΣ' })),
};

export const defaultSectionsCoaches: Coach[] = [
  {
    name: 'Ειρήνη Σιδηροπούλου',
    role: 'Υπεύθυνη όλων των τμημάτων',
    bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής με πολυετή εμπειρία στο αγωνιστικό και μαζικό αθλητισμό.\n\nΥπεύθυνη συντονισμού όλων των τμημάτων ρυθμικής και γυμναστικής για όλους, με έμφαση στην ολιστική ανάπτυξη κάθε αθλήτριας — από τα πρώτα της βήματα μέχρι το αγωνιστικό επίπεδο.',
    certifications:
      'Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)',
  },
  {
    name: 'Δήμητρα Καφαλίδου',
    role: 'Ολυμπιονίκης',
    bio: 'Ολυμπιονίκης Ρυθμικής Γυμναστικής με διεθνή αναγνώριση και βαθιά γνώση του αθλήματος.\n\nΑναλαμβάνει την τεχνική καθοδήγηση αγωνιστικών τμημάτων, με στόχο την ανάδειξη νέων ταλέντων σε πανελλήνιο και διεθνές επίπεδο.',
    certifications: 'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.)',
  },
  {
    name: 'Σταυρούλα Ιωάννα Καρούση',
    role: 'Προπονήτρια',
    bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής με εμπειρία σε αγωνιστικά και μαζικά τμήματα.\n\nΕιδικεύεται στην εισαγωγή νεαρών αθλητριών στο άθλημα και στην προετοιμασία ομάδων γυμναστικής για όλους για φεστιβάλ και επιδείξεις.',
    certifications:
      'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Πτυχιούχος Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)',
  },
];

export const defaultSportOptions = [
  'Ρυθμική Γυμναστική',
  'Ενόργανη Γυμναστική',
  'Τραμπολίνο',
  'Αεροβική Γυμναστική',
  'Αγωνιστικό Τμήμα',
];

export const defaultExperienceOptions = [
  'Όχι (Αρχάριο επίπεδο)',
  'Ναι (1-2 χρόνια)',
  'Ναι (3+ χρόνια)',
];

export const defaultSubjectOptions = [
  'Πληροφορίες Τμημάτων',
  'Νέα Εγγραφή',
  'Επικοινωνία με προπονητές',
  'Άλλο',
];

export const defaultSectionsPreview: Pick<
  SectionsPage,
  | 'rhythmicHeading'
  | 'rhythmicDescription'
  | 'rhythmicCategoryHeading'
  | 'rhythmicCompetitive'
  | 'rhythmicMassHeading'
  | 'rhythmicMass'
  | 'gymnHeading'
  | 'gymnDescription'
  | 'gymSections'
> = {
  rhythmicHeading: 'Ρυθμική Γυμναστική',
  rhythmicDescription: 'Η τέχνη της κίνησης, της μουσικής και των οργάνων.',
  rhythmicCategoryHeading: 'Αγωνιστικά Τμήματα',
  rhythmicCompetitive: [
    { name: 'Ηλικίες 8-15', ageRange: '8-15' },
    { name: 'Ηλικίες 6-8', ageRange: '6-8' },
  ] satisfies Program[],
  rhythmicMassHeading: 'Τμήματα Μαζικού Αθλητισμού',
  rhythmicMass: [
    { name: 'Νήπια (3-5 ετών)' },
    { name: 'Ακαδημίες (4-6 ετών)' },
    { name: 'Προχωρημένα (6-10)' },
    { name: 'Εφηβικό (12-16)' },
  ] satisfies Program[],
  gymnHeading: 'Γυμναστική για Όλους',
  gymnDescription: 'Ομαδικότητα, θέαμα και χαρά της συμμετοχής.',
  gymSections: [
    { name: 'Team 1 (Elite)' },
    { name: 'Team 2 (Junior)' },
    { name: 'Team 3 (Development)' },
  ] satisfies Program[],
};

export function buildFooterUsefulLinks(settings: SiteSettings): NavLink[] {
  if (settings.footerUsefulLinks?.length) {
    return settings.footerUsefulLinks;
  }

  return [
    { label: 'Εγγραφές', url: '/egrafes' },
    { label: 'Επικοινωνία', url: '/epikoinonia' },
    { label: 'Πολιτική Απορρήτου', url: '/selida/politiki-aporritou' },
    { label: 'Πολιτική Cookies', url: '/selida/politiki-cookies' },
    { label: 'Ε.Γ.Ο.', url: settings.egoUrl ?? '#' },
    { label: 'F.I.G.', url: settings.figUrl ?? '#' },
  ];
}
