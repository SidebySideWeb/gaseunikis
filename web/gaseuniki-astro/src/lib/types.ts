import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Sponsor {
  name: string;
  logo?: SanityImage;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface SanityImage {
  _type?: 'image';
  asset?: {
    _ref?: string;
    _type?: 'reference';
    url?: string;
  };
  alt?: string;
  caption?: string;
}

export interface Seo {
  title?: string;
  description?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
}

export interface ScheduleSlot {
  day: string;
  hours: string;
}

export interface Coach {
  name: string;
  role?: string;
  bio?: string;
  certifications?: string;
  photo?: SanityImage;
}

export interface Section {
  name: string;
  badge?: string;
  description?: string;
  ageRange?: string;
  schedule?: string;
  icon?: string;
}

export interface Program extends Section {}

export interface GalleryImage {
  image?: SanityImage;
  caption?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface WhyItem {
  icon?: string;
  title: string;
  description?: string;
}

export interface ValueCard extends WhyItem {}

export interface CoreValue {
  icon?: string;
  label: string;
}

export interface SpiritItem {
  heading: string;
  text?: string;
}

export interface RegistrationStep {
  title: string;
  description?: string;
  icon?: string;
}

export interface CtaLink {
  label: string;
  url: string;
}

export interface Success {
  _id: string;
  title: string;
  slug?: { current: string };
  category?: 'rhythmic' | 'gymnastics-for-all';
  medalType?: 'gold' | 'silver' | 'bronze' | 'special' | 'other';
  athleteName?: string;
  competition?: string;
  year?: string;
  description?: string;
  featured?: boolean;
  image?: SanityImage;
  seo?: Seo;
}

export interface Achievement extends Success {}

export interface NewsItem {
  _id: string;
  title: string;
  slug?: { current: string };
  publishedDate?: string;
  excerpt?: string;
  body?: unknown[];
  featuredImage?: SanityImage;
  readMoreLabel?: string;
  seo?: Seo;
}

export interface SiteSettings {
  clubName?: string;
  clubFullName?: string;
  logo?: SanityImage;
  foundedYear?: string;
  defaultSeoTitle?: string;
  defaultOgImage?: SanityImage;
  navLinks?: NavLink[];
  navCtaLabel?: string;
  navCtaUrl?: string;
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
  openingHours?: ScheduleSlot[];
  facebookUrl?: string;
  instagramUrl?: string;
  footerTagline?: string;
  footerCopyright?: string;
  egoUrl?: string;
  figUrl?: string;
  addressStreet?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  footerUsefulLinks?: NavLink[];
  logoUrl?: string;
  defaultOgImageUrl?: string;
}

export interface HomePage {
  heroBadge?: string;
  heroHeading?: string;
  heroSubheading?: string;
  heroQuote?: string;
  heroPrimaryCtaLabel?: string;
  heroPrimaryCtaUrl?: string;
  heroSecondaryCtaLabel?: string;
  heroSecondaryCtaUrl?: string;
  heroImage?: SanityImage;
  aboutHeading?: string;
  aboutText?: string;
  aboutAccreditedBy?: string;
  aboutSecondParagraph?: string;
  aboutImage?: SanityImage;
  yearsExperience?: string;
  sectionsHeading?: string;
  sectionsCtaLabel?: string;
  sectionsCtaUrl?: string;
  galleryHeading?: string;
  gallerySubheading?: string;
  galleryImages?: GalleryImage[];
  successesHeading?: string;
  successesSubheading?: string;
  successesCtaLabel?: string;
  successesCtaUrl?: string;
  featuredSuccesses?: Success[];
  stats?: Stat[];
  newsHeading?: string;
  newsCtaLabel?: string;
  newsCtaUrl?: string;
  whyHeading?: string;
  whyItems?: WhyItem[];
  whyImage?: SanityImage;
  sponsorsHeading?: string;
  sponsors?: Sponsor[];
  ctaHeading?: string;
  ctaText?: string;
  ctaButtonLabel?: string;
  ctaButtonUrl?: string;
  seo?: Seo;
}

export interface AboutPage {
  heroLabel?: string;
  heroHeading?: string;
  heroText?: string;
  heroImage?: SanityImage;
  coreValues?: CoreValue[];
  historyHeading?: string;
  historyText?: string;
  recognitionText?: string;
  accreditationText?: string;
  spiritHeading?: string;
  spiritLabel?: string;
  spiritItems?: SpiritItem[];
  spiritQuote?: string;
  philosophyHeading?: string;
  philosophyItems?: ValueCard[];
  philosophyImagePrimary?: SanityImage;
  philosophyImageSecondary?: SanityImage;
  coachesHeading?: string;
  coachesDescription?: string;
  coaches?: Coach[];
  facilitiesHeading?: string;
  facilitiesLabel?: string;
  facilitiesDescription?: string;
  facilitiesImages?: GalleryImage[];
  seo?: Seo;
}

export interface SectionsPage {
  heroHeading?: string;
  heroText?: string;
  rhythmicHeading?: string;
  rhythmicDescription?: string;
  rhythmicImage?: SanityImage;
  rhythmicCategoryHeading?: string;
  rhythmicCompetitive?: Program[];
  rhythmicMassHeading?: string;
  rhythmicMass?: Program[];
  gymnHeading?: string;
  gymnDescription?: string;
  gymnasticsImage?: SanityImage;
  gymSections?: Program[];
  coachesHeading?: string;
  coachesDescription?: string;
  coaches?: Coach[];
  seo?: Seo;
}

export interface EpitychiesPage {
  heroHeading?: string;
  heroLabel?: string;
  heroText?: string;
  filterLabels?: string[];
  seo?: Seo;
}

export interface NewsIndexPage {
  heroHeading?: string;
  heroText?: string;
  postsPerPage?: number;
  seo?: Seo;
}

export interface RegistrationPage {
  heroHeading?: string;
  heroText?: string;
  registrationPeriodLabel?: string;
  registrationPeriodText?: string;
  trainingsStartLabel?: string;
  trainingsStartText?: string;
  registrationSteps?: RegistrationStep[];
  documentsHeading?: string;
  requiredDocuments?: string[];
  downloadFormLabel?: string;
  downloadFormUrl?: string;
  formHeading?: string;
  formDescription?: string;
  formSubmitLabel?: string;
  privacyCheckboxLabel?: string;
  sportOptions?: string[];
  experienceOptions?: string[];
  seo?: Seo;
}

export interface ContactPage {
  heroHeading?: string;
  heroText?: string;
  heroCallToAction?: string;
  formHeading?: string;
  formSubmitLabel?: string;
  privacyCheckboxLabel?: string;
  subjectOptions?: string[];
  mapHeading?: string;
  mapText?: string;
  mapButtonLabel?: string;
  seo?: Seo;
}

export type ImageSource = SanityImage | SanityImageSource | null | undefined;
