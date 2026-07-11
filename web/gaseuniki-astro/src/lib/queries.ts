import { client } from './sanity';
import type {
  AboutPage,
  Achievement,
  ContactPage,
  EpitychiesPage,
  HomePage,
  NewsIndexPage,
  NewsItem,
  RegistrationPage,
  SectionsPage,
  SiteSettings,
} from './types';

const imageFields = `
  asset->{
    _id,
    url
  },
  alt
`;

const seoFields = `
  seo {
    title,
    description,
    ogImage { ${imageFields} },
    noIndex
  }
`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  clubName,
  clubFullName,
  foundedYear,
  address,
  addressStreet,
  addressLocality,
  addressRegion,
  postalCode,
  phone,
  email,
  footerTagline,
  footerCopyright,
  egoUrl,
  figUrl,
  facebookUrl,
  instagramUrl,
  navCtaLabel,
  navCtaUrl,
  navLinks[] { label, url },
  openingHours[] { day, hours },
  defaultSeoTitle,
  logo { ${imageFields} },
  "logoUrl": logo.asset->url,
  defaultOgImage { ${imageFields} },
  "defaultOgImageUrl": defaultOgImage.asset->url,
  mapUrl
}`;

export const homePageQuery = `*[_type == "homePage"][0] {
  heroBadge,
  heroHeading,
  heroSubheading,
  heroQuote,
  heroPrimaryCtaLabel,
  heroPrimaryCtaUrl,
  heroSecondaryCtaLabel,
  heroSecondaryCtaUrl,
  heroImage { ${imageFields} },
  aboutHeading,
  aboutText,
  aboutAccreditedBy,
  yearsExperience,
  sectionsHeading,
  galleryHeading,
  galleryImages[] {
    image { ${imageFields} },
    caption
  },
  successesHeading,
  successesSubheading,
  successesCtaLabel,
  successesCtaUrl,
  featuredSuccesses[]-> {
    _id,
    title,
    slug,
    category,
    medalType,
    athleteName,
    competition,
    year,
    description,
    featured,
    image { ${imageFields} }
  },
  stats[] {
    value,
    label
  },
  newsHeading,
  newsCtaLabel,
  newsCtaUrl,
  whyHeading,
  whyItems[] {
    icon,
    title,
    description
  },
  sponsorsHeading,
  ctaHeading,
  ctaText,
  ctaButtonLabel,
  ctaButtonUrl,
  ${seoFields}
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  heroLabel,
  heroHeading,
  heroText,
  heroImage { ${imageFields} },
  coreValues[] {
    icon,
    label
  },
  historyHeading,
  historyText,
  recognitionText,
  accreditationText,
  spiritHeading,
  spiritLabel,
  spiritItems[] {
    heading,
    text
  },
  spiritQuote,
  philosophyHeading,
  philosophyItems[] {
    icon,
    title,
    description
  },
  coachesHeading,
  coachesDescription,
  coaches[] {
    name,
    role,
    bio,
    certifications,
    photo { ${imageFields} }
  },
  facilitiesHeading,
  facilitiesLabel,
  facilitiesDescription,
  facilitiesImages[] {
    image { ${imageFields} },
    caption
  },
  ${seoFields}
}`;

export const sectionsPageQuery = `*[_type == "sectionsPage"][0] {
  heroHeading,
  heroText,
  rhythmicHeading,
  rhythmicDescription,
  rhythmicCategoryHeading,
  rhythmicCompetitive[] {
    name,
    badge,
    description,
    ageRange,
    schedule,
    icon
  },
  rhythmicMassHeading,
  rhythmicMass[] {
    name,
    badge,
    description,
    ageRange,
    schedule,
    icon
  },
  gymnHeading,
  gymnDescription,
  gymSections[] {
    name,
    badge,
    description,
    ageRange,
    schedule,
    icon
  },
  coachesHeading,
  coachesDescription,
  coaches[] {
    name,
    role,
    bio,
    certifications,
    photo { ${imageFields} }
  },
  ${seoFields}
}`;

export const epitychiesPageQuery = `*[_type == "epitychiesPage"][0] {
  heroHeading,
  heroLabel,
  heroText,
  filterLabels,
  ${seoFields}
}`;

export const newsIndexPageQuery = `*[_type == "newsIndexPage"][0] {
  heroHeading,
  heroText,
  ${seoFields}
}`;

export const registrationPageQuery = `*[_type == "registrationPage"][0] {
  heroHeading,
  heroText,
  registrationPeriodLabel,
  registrationPeriodText,
  trainingsStartLabel,
  trainingsStartText,
  registrationSteps[] {
    title,
    description,
    icon
  },
  documentsHeading,
  requiredDocuments,
  downloadFormLabel,
  downloadFormUrl,
  formHeading,
  formDescription,
  formSubmitLabel,
  privacyCheckboxLabel,
  ${seoFields}
}`;

export const contactPageQuery = `*[_type == "contactPage"][0] {
  heroHeading,
  heroText,
  heroCallToAction,
  formHeading,
  formSubmitLabel,
  mapHeading,
  mapText,
  mapButtonLabel,
  ${seoFields}
}`;

export const epitychiesListQuery = `*[_type == "epitychies"] | order(year desc) {
  _id,
  title,
  slug,
  category,
  medalType,
  athleteName,
  competition,
  year,
  description,
  featured,
  image { ${imageFields} }
}`;

export const featuredEpitychiesQuery = `*[_type == "epitychies" && featured == true] | order(year desc)[0...6] {
  _id,
  title,
  slug,
  category,
  medalType,
  athleteName,
  competition,
  year,
  description,
  featured,
  image { ${imageFields} }
}`;

export const epitychiesBySlugQuery = `*[_type == "epitychies" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  medalType,
  athleteName,
  competition,
  year,
  description,
  featured,
  image { ${imageFields} },
  ${seoFields}
}`;

export const epitychiesSlugsQuery = `*[_type == "epitychies" && defined(slug.current)] {
  "slug": slug.current
}`;

export const newsPostListQuery = `*[_type == "newsPost"] | order(publishedDate desc) {
  _id,
  title,
  slug,
  publishedDate,
  excerpt,
  featuredImage { ${imageFields} },
  readMoreLabel
}`;

export const latestNewsQuery = `*[_type == "newsPost"] | order(publishedDate desc)[0...3] {
  _id,
  title,
  slug,
  publishedDate,
  excerpt,
  featuredImage { ${imageFields} },
  readMoreLabel
}`;

export const newsPostBySlugQuery = `*[_type == "newsPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedDate,
  excerpt,
  body,
  featuredImage { ${imageFields} },
  readMoreLabel,
  ${seoFields}
}`;

export const newsPostSlugsQuery = `*[_type == "newsPost" && defined(slug.current)] {
  "slug": slug.current
}`;

export const paginatedNewsQuery = `*[_type == "newsPost"] | order(publishedDate desc) [$start...$end] {
  _id,
  title,
  slug,
  publishedDate,
  excerpt,
  featuredImage { ${imageFields} },
  readMoreLabel
}`;

export const newsCountQuery = `count(*[_type == "newsPost"])`;

export function getSiteSettings() {
  return client.fetch<SiteSettings | null>(siteSettingsQuery);
}

export function getHomePage() {
  return client.fetch<HomePage | null>(homePageQuery);
}

export function getAboutPage() {
  return client.fetch<AboutPage | null>(aboutPageQuery);
}

export function getSectionsPage() {
  return client.fetch<SectionsPage | null>(sectionsPageQuery);
}

export function getEpitychiesPage() {
  return client.fetch<EpitychiesPage | null>(epitychiesPageQuery);
}

export function getEpitychies() {
  return client.fetch<Achievement[]>(epitychiesListQuery);
}

export function getFeaturedEpitychies() {
  return client.fetch<Achievement[]>(featuredEpitychiesQuery);
}

export function getNewsIndexPage() {
  return client.fetch<NewsIndexPage | null>(newsIndexPageQuery);
}

export function getLatestNews() {
  return client.fetch<NewsItem[]>(latestNewsQuery);
}

export function getNewsPosts() {
  return client.fetch<NewsItem[]>(newsPostListQuery);
}

export function getRegistrationPage() {
  return client.fetch<RegistrationPage | null>(registrationPageQuery);
}

export function getContactPage() {
  return client.fetch<ContactPage | null>(contactPageQuery);
}
