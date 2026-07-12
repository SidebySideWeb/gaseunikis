import { client } from './sanity';
import { cachedSanityQuery } from './sanity-cache';
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
  footerUsefulLinks[] { label, url },
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
  aboutSecondParagraph,
  aboutImage { ${imageFields} },
  yearsExperience,
  sectionsHeading,
  sectionsCtaLabel,
  sectionsCtaUrl,
  galleryHeading,
  gallerySubheading,
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
  whyImage { ${imageFields} },
  sponsorsHeading,
  sponsors[] {
    name,
    logo { ${imageFields} }
  },
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
  philosophyImagePrimary { ${imageFields} },
  philosophyImageSecondary { ${imageFields} },
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
  rhythmicImage { ${imageFields} },
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
  gymnasticsImage { ${imageFields} },
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
  postsPerPage,
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
  sportOptions,
  experienceOptions,
  ${seoFields}
}`;

export const contactPageQuery = `*[_type == "contactPage"][0] {
  heroHeading,
  heroText,
  heroCallToAction,
  formHeading,
  formSubmitLabel,
  subjectOptions,
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

const achievementCardFields = `
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
`;

const newsCardFields = `
  _id,
  title,
  slug,
  publishedDate,
  excerpt,
  featuredImage { ${imageFields} },
  readMoreLabel
`;

const homeSectionsPreviewFields = `
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
  }
`;

export interface HomepageBundle {
  homePage: HomePage | null;
  sectionsPage: SectionsPage | null;
  latestNews: NewsItem[];
  featuredEpitychies: Achievement[];
  siteSettings: SiteSettings | null;
}

export interface HomepageStaticBundle {
  homePage: HomePage | null;
  sectionsPage: SectionsPage | null;
  siteSettings: SiteSettings | null;
}

export interface HomeSuccessesFeed {
  selected: Achievement[];
  featured: Achievement[];
}

/** Single round-trip for the homepage (reduces SSR latency vs. 5 separate fetches). */
export const homepageBundleQuery = `{
  "homePage": *[_type == "homePage"][0] {
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
    aboutSecondParagraph,
    aboutImage { ${imageFields} },
    yearsExperience,
    sectionsHeading,
    sectionsCtaLabel,
    sectionsCtaUrl,
    galleryHeading,
    gallerySubheading,
    galleryImages[] {
      image { ${imageFields} },
      caption
    },
    successesHeading,
    successesSubheading,
    successesCtaLabel,
    successesCtaUrl,
    featuredSuccesses[]-> { ${achievementCardFields} },
    stats[] { value, label },
    newsHeading,
    newsCtaLabel,
    newsCtaUrl,
    whyHeading,
    whyItems[] { icon, title, description },
    whyImage { ${imageFields} },
    sponsorsHeading,
    sponsors[] { name, logo { ${imageFields} } },
    ctaHeading,
    ctaText,
    ctaButtonLabel,
    ctaButtonUrl,
    ${seoFields}
  },
  "sectionsPage": *[_type == "sectionsPage"][0] { ${homeSectionsPreviewFields} },
  "latestNews": *[_type == "newsPost"] | order(publishedDate desc)[0...3] { ${newsCardFields} },
  "featuredEpitychies": *[_type == "epitychies" && featured == true] | order(year desc)[0...6] { ${achievementCardFields} },
  "siteSettings": *[_type == "siteSettings"][0] {
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
    footerUsefulLinks[] { label, url },
    openingHours[] { day, hours },
    defaultSeoTitle,
    logo { ${imageFields} },
    defaultOgImage { ${imageFields} },
    mapUrl
  }
}`;

export function getHomepageBundle() {
  return cachedSanityQuery('homepageBundle', () =>
    client.fetch<HomepageBundle>(homepageBundleQuery),
  );
}

/** Homepage shell at build time — excludes news and achievements (rendered via server islands). */
export const homepageStaticBundleQuery = `{
  "homePage": *[_type == "homePage"][0] {
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
    aboutSecondParagraph,
    aboutImage { ${imageFields} },
    yearsExperience,
    sectionsHeading,
    sectionsCtaLabel,
    sectionsCtaUrl,
    galleryHeading,
    gallerySubheading,
    galleryImages[] {
      image { ${imageFields} },
      caption
    },
    successesHeading,
    successesSubheading,
    successesCtaLabel,
    successesCtaUrl,
    stats[] { value, label },
    newsHeading,
    newsCtaLabel,
    newsCtaUrl,
    whyHeading,
    whyItems[] { icon, title, description },
    whyImage { ${imageFields} },
    sponsorsHeading,
    sponsors[] { name, logo { ${imageFields} } },
    ctaHeading,
    ctaText,
    ctaButtonLabel,
    ctaButtonUrl,
    ${seoFields}
  },
  "sectionsPage": *[_type == "sectionsPage"][0] { ${homeSectionsPreviewFields} },
  "siteSettings": *[_type == "siteSettings"][0] {
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
    footerUsefulLinks[] { label, url },
    openingHours[] { day, hours },
    defaultSeoTitle,
    logo { ${imageFields} },
    defaultOgImage { ${imageFields} },
    mapUrl
  }
}`;

export function getHomepageStaticBundle() {
  return cachedSanityQuery('homepageStaticBundle', () =>
    client.fetch<HomepageStaticBundle>(homepageStaticBundleQuery),
  );
}

const homeSuccessesFeedQuery = `{
  "selected": *[_type == "homePage"][0].featuredSuccesses[]-> { ${achievementCardFields} },
  "featured": *[_type == "epitychies" && featured == true] | order(year desc)[0...6] { ${achievementCardFields} }
}`;

export function getHomeSuccessesFeed() {
  return cachedSanityQuery('homeSuccessesFeed', () =>
    client.fetch<HomeSuccessesFeed>(homeSuccessesFeedQuery),
  );
}

export function getSiteSettings() {
  return cachedSanityQuery('siteSettings', () =>
    client.fetch<SiteSettings | null>(siteSettingsQuery),
  );
}

export function getHomePage() {
  return cachedSanityQuery('homePage', () => client.fetch<HomePage | null>(homePageQuery));
}

export function getAboutPage() {
  return cachedSanityQuery('aboutPage', () => client.fetch<AboutPage | null>(aboutPageQuery));
}

export function getSectionsPage() {
  return cachedSanityQuery('sectionsPage', () =>
    client.fetch<SectionsPage | null>(sectionsPageQuery),
  );
}

export function getEpitychiesPage() {
  return cachedSanityQuery('epitychiesPage', () =>
    client.fetch<EpitychiesPage | null>(epitychiesPageQuery),
  );
}

export function getEpitychies() {
  return cachedSanityQuery('epitychiesList', () =>
    client.fetch<Achievement[]>(epitychiesListQuery),
  );
}

export function getFeaturedEpitychies() {
  return cachedSanityQuery('featuredEpitychies', () =>
    client.fetch<Achievement[]>(featuredEpitychiesQuery),
  );
}

export function getNewsIndexPage() {
  return cachedSanityQuery('newsIndexPage', () =>
    client.fetch<NewsIndexPage | null>(newsIndexPageQuery),
  );
}

export function getLatestNews() {
  return cachedSanityQuery('latestNews', () => client.fetch<NewsItem[]>(latestNewsQuery));
}

export function getNewsPosts() {
  return cachedSanityQuery('newsPosts', () => client.fetch<NewsItem[]>(newsPostListQuery));
}

export function getPaginatedNews(start: number, end: number) {
  return cachedSanityQuery(`newsPage:${start}-${end}`, () =>
    client.fetch<NewsItem[]>(paginatedNewsQuery, { start, end }),
  );
}

export function getNewsCount() {
  return cachedSanityQuery('newsCount', () => client.fetch<number>(newsCountQuery));
}

export function getRegistrationPage() {
  return cachedSanityQuery('registrationPage', () =>
    client.fetch<RegistrationPage | null>(registrationPageQuery),
  );
}

export function getContactPage() {
  return cachedSanityQuery('contactPage', () =>
    client.fetch<ContactPage | null>(contactPageQuery),
  );
}
