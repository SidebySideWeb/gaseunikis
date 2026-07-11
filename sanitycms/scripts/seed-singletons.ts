import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2024-01-01'})

const documents = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    // logo // TODO: upload in Studio
    // defaultOgImage // TODO: upload in Studio
    clubName: 'ΓΑΣ ΕΥΝΙΚΗ',
    clubFullName: 'Γας Ευνίκη Ελευσίνας',
    foundedYear: '1993',
    address: 'Χαριλάου και Παγκάλου 5, Ελευσίνα',
    phone: '698 444 6065',
    email: 'gaseuniki@gmail.com',
    footerTagline:
      'Προάγουμε τον αθλητισμό και τις αξίες του μέσα από τη ρυθμική γυμναστική στην Ελευσίνα.',
    footerCopyright: '© 2024 Γας Ευνίκη Ελευσίνας. Με την επιφύλαξη παντός δικαιώματος.',
    addressStreet: 'Χαριλάου και Παγκάλου 5',
    addressLocality: 'Ελευσίνα',
    addressRegion: 'Αττική',
    navCtaLabel: 'Εγγραφή',
    navCtaUrl: '/egrafes',
    openingHours: [
      {_type: 'scheduleSlot', _key: 'hours-weekdays', day: 'Δευτέρα - Παρασκευή', hours: '17:00 - 20:00'},
      {_type: 'scheduleSlot', _key: 'hours-saturday', day: 'Σάββατο', hours: '10:00 - 13:00'},
      {_type: 'scheduleSlot', _key: 'hours-sunday', day: 'Κυριακή', hours: 'Κλειστά'},
    ],
    navLinks: [
      {_type: 'navLink', _key: 'nav-home', label: 'Αρχική', url: '/'},
      {_type: 'navLink', _key: 'nav-about', label: 'Ο Σύλλογος', url: '/syllogos'},
      {_type: 'navLink', _key: 'nav-news', label: 'Νέα', url: '/nea'},
      {_type: 'navLink', _key: 'nav-sections', label: 'Τμήματα', url: '/tmimata'},
      {_type: 'navLink', _key: 'nav-successes', label: 'Επιτυχίες', url: '/epitychies'},
      {_type: 'navLink', _key: 'nav-contact', label: 'Επικοινωνία', url: '/epikoinonia'},
    ],
  },
  {
    _id: 'homePage',
    _type: 'homePage',
    // heroImage // TODO: upload in Studio
    // galleryImages // TODO: upload in Studio
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
    yearsExperience: '30+',
    sectionsHeading: 'Τα Τμήματά μας',
    galleryHeading: 'Στιγμές από την Προπόνηση',
    successesHeading: 'Οι Επιτυχίες μας',
    successesSubheading:
      'Διακρίσεις που επιβραβεύουν την προσπάθεια και το ήθος των αθλητριών μας.',
    successesCtaLabel: 'Δείτε Όλες τις Επιτυχίες',
    successesCtaUrl: '/epitychies',
    newsHeading: 'Τελευταία Νέα',
    newsCtaLabel: 'Όλα τα Νέα',
    newsCtaUrl: '/nea',
    whyHeading: 'Γιατί να μας επιλέξετε',
    sponsorsHeading: 'Οι Χορηγοί μας',
    ctaHeading: 'Έλα κι εσύ στην οικογένεια της Ευνίκης!',
    ctaText:
      'Ξεκίνα σήμερα ένα ταξίδι γεμάτο ρυθμό, πειθαρχία και χαρά. Η πρώτη προπόνηση είναι δωρεάν!',
    ctaButtonLabel: 'Επικοινώνησε μαζί μας',
    ctaButtonUrl: '/epikoinonia',
    stats: [
      {_type: 'statItem', _key: 'stat-athletes', value: '230', label: 'Ενεργές Αθλήτριες'},
      {_type: 'statItem', _key: 'stat-medals', value: '45+', label: 'Μετάλλια το 2026'},
    ],
    whyItems: [
      {
        _type: 'valueCard',
        _key: 'why-gga',
        icon: 'check',
        title: 'Αναγνώριση Γ.Γ.Α.',
        description: 'Πλήρης πιστοποίηση από τη Γενική Γραμματεία Αθλητισμού.',
      },
      {
        _type: 'valueCard',
        _key: 'why-coaches',
        icon: 'check',
        title: 'Καθηγητές Φυσικής Αγωγής',
        description: 'Εξειδικευμένοι προπονητές με πανεπιστημιακή μόρφωση.',
      },
      {
        _type: 'valueCard',
        _key: 'why-ages',
        icon: 'check',
        title: 'Για όλες τις ηλικίες',
        description: 'Τμήματα από 3 έως 18 ετών, προσαρμοσμένα στις ανάγκες κάθε παιδιού.',
      },
      {
        _type: 'valueCard',
        _key: 'why-pedagogy',
        icon: 'check',
        title: 'Παιδαγωγική Προσέγγιση',
        description: 'Έμφαση στη διαμόρφωση του χαρακτήρα και την αυτοπεποίθηση.',
      },
      {
        _type: 'valueCard',
        _key: 'why-methods',
        icon: 'check',
        title: 'Σύγχρονες Μέθοδοι',
        description: 'Προπονητικά προγράμματα βασισμένα στα τελευταία διεθνή πρότυπα.',
      },
    ],
  },
  {
    _id: 'aboutPage',
    _type: 'aboutPage',
    // heroImage // TODO: upload in Studio
    // facilitiesImages // TODO: upload in Studio
    heroLabel: 'ΤΟ ΟΡΑΜΑ ΜΑΣ',
    heroHeading: 'Ο Σύλλογος',
    heroText:
      'Στην καρδιά της Ελευσίνας, ο σύλλογός μας «ΕΥΝΙΚΗ» γεννήθηκε από την βαθιά αγάπη για τη ρυθμική γυμναστική. Το όραμά μας υπερβαίνει την απλή άσκηση· στοχεύουμε στην ολόπλευρη σωματική και ψυχική ανάπτυξη των αθλητριών μας, καλλιεργώντας την πειθαρχία, τον αλληλοσεβασμό και το αθλητικό ήθος.',
    coreValues: [
      {_type: 'coreValue', _key: 'value-love', icon: 'favorite', label: 'ΑΓΑΠΗ'},
      {_type: 'coreValue', _key: 'value-discipline', icon: 'psychology', label: 'ΠΕΙΘΑΡΧΙΑ'},
      {_type: 'coreValue', _key: 'value-respect', icon: 'diversity_3', label: 'ΣΕΒΑΣΜΟΣ'},
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
      {
        _type: 'spiritItem',
        _key: 'spirit-technique',
        heading: 'Τεχνική & Έκφραση',
        text: 'Συνδυασμός χορού, ακροβατικών στοιχείων και απόλυτου ελέγχου των οργάνων.',
      },
      {
        _type: 'spiritItem',
        _key: 'spirit-music',
        heading: 'Μουσική & Ρυθμός',
        text: 'Η κίνηση εναρμονίζεται με τη μουσική, δημιουργώντας ένα οπτικό ποίημα στη σκηνή.',
      },
      {
        _type: 'spiritItem',
        _key: 'spirit-apparatus',
        heading: 'Τα Όργανα',
        text: 'Κορδέλα, μπάλα, στεφάνι, κορύνες και σχοινάκι γίνονται προέκταση του σώματος.',
      },
    ],
    philosophyHeading: 'Σκοπός & Φιλοσοφία',
    philosophyItems: [
      {
        _type: 'valueCard',
        _key: 'philosophy-sport',
        icon: 'verified',
        title: 'Προώθηση του Αθλητισμού',
        description:
          'Στόχος μας είναι η διάδοση του αθλήματος της ρυθμικής γυμναστικής στη νέα γενιά της πόλης μας.',
      },
      {
        _type: 'valueCard',
        _key: 'philosophy-safety',
        icon: 'security',
        title: 'Ασφαλές Περιβάλλον',
        description:
          'Παρέχουμε έναν χώρο όπου κάθε αθλήτρια αισθάνεται ασφαλής να πειραματιστεί και να εξελιχθεί.',
      },
      {
        _type: 'valueCard',
        _key: 'philosophy-character',
        icon: 'auto_awesome',
        title: 'Διαμόρφωση Χαρακτήρα',
        description:
          'Μέσω του αθλητισμού, χτίζουμε ισχυρές προσωπικότητες με αυτοπεποίθηση και επιμονή.',
      },
    ],
    coachesHeading: 'Η ομάδα μας',
    coachesDescription:
      'Η ομάδα των προπονητών μας αποτελείται από καταξιωμένους επαγγελματίες με πολυετή εμπειρία, υψηλή επιστημονική κατάρτιση και σημαντικές διακρίσεις σε εθνικό και διεθνές επίπεδο.',
    coaches: [
      {
        _type: 'coachCard',
        _key: 'coach-sidiropoulou',
        // photo // TODO: upload in Studio
        name: 'Ειρήνη Σιδηροπούλου',
        role: 'Υπεύθυνη όλων των τμημάτων',
        bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής',
        certifications:
          'Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)',
      },
      {
        _type: 'coachCard',
        _key: 'coach-kafalidou',
        // photo // TODO: upload in Studio
        name: 'Δήμητρα Καφαλίδου',
        role: 'Ολυμπιονίκης',
        bio: 'Ολυμπιονίκης Ρυθμικής Γυμναστικής',
        certifications: 'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.)',
      },
      {
        _type: 'coachCard',
        _key: 'coach-karousi',
        // photo // TODO: upload in Studio
        name: 'Σταυρούλα Ιωάννα Καρούση',
        role: 'Προπονήτρια',
        bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής',
        certifications:
          'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Πτυχιούχος Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)',
      },
    ],
    facilitiesHeading: 'Εγκαταστάσεις',
    facilitiesLabel: 'Ο ΧΩΡΟΣ ΠΡΟΠΟΝΗΣΗΣ ΜΑΣ',
    facilitiesDescription:
      'Ο σύλλογος μας διαθέτει αδειοδοτημένη και ιδιόκτητη αθλητική εγκατάσταση επί της οδού Χαριλάου και Παγκάλου 5, στην Ελευσίνα — έναν πλήρως εξοπλισμένο χώρο προπόνησης, σχεδιασμένο για την ασφαλή και ποιοτική εκπαίδευση των αθλητριών μας σε όλα τα επίπεδα.',
  },
  {
    _id: 'sectionsPage',
    _type: 'sectionsPage',
    heroHeading: 'Τμήματα',
    heroText:
      'Ανακαλύψτε τα προγράμματά μας και βρείτε το ιδανικό τμήμα για το παιδί σας. Προσφέρουμε εξειδικευμένη εκπαίδευση σε ένα περιβάλλον που προάγει την πειθαρχία και τη δημιουργικότητα.',
    rhythmicHeading: 'Ρυθμική Γυμναστική',
    rhythmicDescription:
      'Η Ρυθμική Γυμναστική είναι ο απόλυτος συνδυασμός τεχνικής αρτιότητας και καλλιτεχνικής έκφρασης. Μέσα από τη χρήση οργάνων όπως το σχοινάκι, το στεφάνι, η μπάλα, οι κορύνες και η κορδέλα.',
    rhythmicCategoryHeading: 'Αγωνιστικά Τμήματα',
    rhythmicCompetitive: [
      {
        _type: 'sectionCard',
        _key: 'rhythmic-competitive',
        name: 'Αγωνιστικό',
        badge: 'Elite',
        description:
          'Ηλικίες: 8–15 ετών. Προετοιμασία για πανελλήνια και διεθνή πρωταθλήματα.',
        ageRange: '8-15 ετών',
        schedule: 'Δευ, Τετ, Παρ: 16:00 - 20:00',
        icon: 'emoji_events',
      },
      {
        _type: 'sectionCard',
        _key: 'rhythmic-precompetitive',
        name: 'Προαγωνιστικό',
        badge: 'Rising Stars',
        description:
          'Ηλικίες: 6–8 ετών. Εισαγωγή στη βάση της ρυθμικής με στόχο την ένταξη στις αγωνιστικές κατηγορίες.',
        ageRange: '6-8 ετών',
        schedule: 'Καθημερινές Προπονήσεις (Εντατικό)',
        icon: 'star',
      },
    ],
    rhythmicMassHeading: 'Τμήματα Μαζικού Αθλητισμού',
    rhythmicMass: [
      {
        _type: 'sectionCard',
        _key: 'rhythmic-junior',
        name: 'Junior',
        description: 'Ηλικίες 3-5. Πρώτη επαφή μέσω παιχνιδιού.',
        ageRange: '3-5 ετών',
        schedule: 'Δευ, Τετ: 17:00 - 18:00',
        icon: 'child_care',
      },
      {
        _type: 'sectionCard',
        _key: 'rhythmic-epilekta',
        name: 'Επίλεκτα',
        description: 'Ηλικίες 4-6. Εξειδικευμένη επιλογή παιδιών.',
        ageRange: '4-6 ετών',
        schedule: 'Κατόπιν Συνεννόησης',
        icon: 'star_half',
      },
      {
        _type: 'sectionCard',
        _key: 'rhythmic-pankorasidon',
        name: 'Παγκορασίδων',
        description: 'Ηλικίες 6-10. Γνωριμία με τα όργανα.',
        ageRange: '6-10 ετών',
        schedule: 'Τρί, Παρ: 17:30 - 19:00',
        icon: 'sports_gymnastics',
      },
    ],
    gymnHeading: 'Γυμναστική για Όλους',
    gymnDescription:
      'Εστίαση στην ομαδικότητα και τη συμμετοχή σε μεγάλα φεστιβάλ γυμναστικής. Έμφαση σε εντυπωσιακές χορογραφίες που συνδυάζουν ακροβατικά.',
    gymSections: [
      {
        _type: 'sectionCard',
        _key: 'gym-festival-a',
        name: 'Ομάδα Φεστιβάλ A',
        description: 'Επίπεδο: Αρχάριο/Μεσαίο. Ηλικίες 7-12. Εστίαση στη βασική ακροβατική.',
        ageRange: '7-12 ετών',
        schedule: 'Τρίτη, Πέμπτη: 18:30 - 20:30',
        icon: 'group_work',
      },
      {
        _type: 'sectionCard',
        _key: 'gym-festival-b',
        name: 'Ομάδα Φεστιβάλ B',
        description: 'Συμμετοχή σε "Hellas Gym for Life Challenge" και διεθνή φεστιβάλ.',
        ageRange: '',
        schedule: 'Σάββατο: 10:00 - 13:00',
        icon: 'theater_comedy',
      },
      {
        _type: 'sectionCard',
        _key: 'gym-performance',
        name: 'Τμήμα Performance',
        description: 'Εξειδικευμένη ομάδα επιδείξεων για εκδηλώσεις και γκαλά.',
        ageRange: '',
        schedule: 'Παρασκευή: 19:00 - 21:00',
        icon: 'military_tech',
      },
    ],
    coachesHeading: 'Η Ομάδα μας',
    coachesDescription:
      'Το τεχνικό μας επιτελείο αποτελείται από διπλωματούχους προπονήτριες με πάθος για την ανάδειξη νέων ταλέντων.',
    coaches: [
      {
        _type: 'coachCard',
        _key: 'sections-coach-sidiropoulou',
        name: 'Ειρήνη Σιδηροπούλου',
        role: 'Υπεύθυνη όλων των τμημάτων',
        bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής με πολυετή εμπειρία στο αγωνιστικό και μαζικό αθλητισμό.\n\nΥπεύθυνη συντονισμού όλων των τμημάτων ρυθμικής και γυμναστικής για όλους, με έμφαση στην ολιστική ανάπτυξη κάθε αθλήτριας — από τα πρώτα της βήματα μέχρι το αγωνιστικό επίπεδο.',
        certifications:
          'Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)',
      },
      {
        _type: 'coachCard',
        _key: 'sections-coach-kafalidou',
        name: 'Δήμητρα Καφαλίδου',
        role: 'Ολυμπιονίκης',
        bio: 'Ολυμπιονίκης Ρυθμικής Γυμναστικής με διεθνή αναγνώριση και βαθιά γνώση του αθλήματος.\n\nΑναλαμβάνει την τεχνική καθοδήγηση αγωνιστικών τμημάτων, με στόχο την ανάδειξη νέων ταλέντων σε πανελλήνιο και διεθνές επίπεδο.',
        certifications: 'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.)',
      },
      {
        _type: 'coachCard',
        _key: 'sections-coach-karousi',
        name: 'Σταυρούλα Ιωάννα Καρούση',
        role: 'Προπονήτρια',
        bio: 'Πρώην πρωταθλήτρια Ρυθμικής Γυμναστικής με εμπειρία σε αγωνιστικά και μαζικά τμήματα.\n\nΕιδικεύεται στην εισαγωγή νεαρών αθλητριών στο άθλημα και στην προετοιμασία ομάδων γυμναστικής για όλους για φεστιβάλ και επιδείξεις.',
        certifications:
          'Πτυχιούχος Προπονήτρια Ρυθμικής Γυμναστικής (Γ.Γ.Α.) · Πτυχιούχος Προπονήτρια Γυμναστικής για Όλους (Γ.Γ.Α.)',
      },
    ],
  },
  {
    _id: 'epitychiesPage',
    _type: 'epitychiesPage',
    heroHeading: 'Οι Επιτυχίες μας',
    heroLabel: 'Hall of Fame',
    heroText:
      'Κάθε μετάλλιο είναι αποτέλεσμα σκληρής δουλειάς, πειθαρχίας και αγάπης για το άθλημα. Δείτε τις διακρίσεις των αθλητριών και των ομάδων μας.',
    filterLabels: ['Όλες', 'Ρυθμική Γυμναστική', 'Γυμναστική για Όλους'],
  },
  {
    _id: 'newsIndexPage',
    _type: 'newsIndexPage',
    heroHeading: 'Νέα & Ανακοινώσεις',
    heroText:
      'Μείνετε ενημερωμένοι για ό,τι συμβαίνει στον σύλλογό μας, από αγωνιστικές επιτυχίες μέχρι νέες εγγραφές και εκδηλώσεις.',
  },
  {
    _id: 'registrationPage',
    _type: 'registrationPage',
    heroHeading: 'Εγγραφές 2024-2025',
    heroText:
      'Γίνε μέλος του ΓΑΣ ΕΥΝΙΚΗ και ξεκίνησε το ταξίδι σου στον κόσμο της γυμναστικής και του αθλητισμού!',
    registrationPeriodLabel: 'Περίοδος Εγγραφών',
    registrationPeriodText:
      'Οι εγγραφές πραγματοποιούνται καθημερινά στο κλειστό γυμναστήριο «Ι. Φωκιανός» από τις 17:00 έως τις 20:30.',
    trainingsStartLabel: 'Έναρξη Προπονήσεων',
    trainingsStartText:
      'Οι προπονήσεις για όλα τα τμήματα (Ρυθμική, Ενόργανη, Τραμπολίνο) ξεκινούν την 1η Σεπτεμβρίου.',
    registrationSteps: [
      {
        _type: 'regStep',
        _key: 'step-section',
        title: 'Επιλογή Τμήματος',
        description:
          'Ενημερωθείτε για τα διαθέσιμα τμήματα ανάλογα με την ηλικία και το επίπεδο του αθλητή.',
        icon: 'assignment_add',
      },
      {
        _type: 'regStep',
        _key: 'step-documents',
        title: 'Συγκέντρωση Δικαιολογητικών',
        description: 'Βεβαιωθείτε ότι έχετε όλα τα απαραίτητα έγγραφα που αναφέρονται παρακάτω.',
        icon: 'verified',
      },
      {
        _type: 'regStep',
        _key: 'step-submit',
        title: 'Κατάθεση Αίτησης',
        description:
          'Επισκεφθείτε τη γραμματεία μας ή συμπληρώστε την online φόρμα ενδιαφέροντος.',
        icon: 'check_circle',
      },
    ],
    documentsHeading: 'Απαραίτητα Έγγραφα',
    requiredDocuments: [
      'Κάρτα Υγείας Αθλητή (υπογεγραμμένη από καρδιολόγο)',
      'Πιστοποιητικό Γέννησης',
      '2 Φωτογραφίες ταυτότητας (για την έκδοση δελτίου)',
      'Αριθμός ΑΜΚΑ αθλητή',
    ],
    formHeading: 'Φόρμα Εκδήλωσης Ενδιαφέροντος',
    formDescription:
      'Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας για να οριστικοποιήσουμε την εγγραφή και το πρόγραμμα προπονήσεων.',
    formSubmitLabel: 'Αποστολή Αίτησης',
    privacyCheckboxLabel:
      'Αποδέχομαι την επεξεργασία των δεδομένων μου για τους σκοπούς της εγγραφής σύμφωνα με την πολιτική απορρήτου του συλλόγου.',
  },
  {
    _id: 'contactPage',
    _type: 'contactPage',
    heroHeading: 'Επικοινωνία',
    heroText:
      'Είμαστε πάντα στη διάθεσή σας για οποιαδήποτε πληροφορία σχετικά με τα προγράμματα και τις εγγραφές του συλλόγου μας.',
    heroCallToAction: 'Ελάτε σε Επαφή',
    formHeading: 'Στείλτε μας μήνυμα',
    formSubmitLabel: 'Αποστολή Μηνύματος',
    mapHeading: 'Βρείτε μας στην καρδιά της Ελευσίνας.',
    mapText:
      'Βρείτε μας στην καρδιά της Ελευσίνας. Εύκολη πρόσβαση για όλους τους αθλητές μας.',
    mapButtonLabel: 'Οδηγίες Χάρτη',
  },
]

async function seedSingletons() {
  for (const doc of documents) {
    await client.createOrReplace(doc)
    console.log('✅ Seeded:', doc._type)
  }
}

seedSingletons().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
