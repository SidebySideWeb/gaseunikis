import {
  scheduleSlot,
  coachCard,
  valueCard,
  statItem,
  galleryImage,
  sectionCard,
  seo,
} from './objects/shared'

import {siteSettings} from './documents/siteSettings'
import {homePage} from './documents/homePage'
import {aboutPage} from './documents/aboutPage'
import {sectionsPage} from './documents/sectionsPage'
import {epitychies} from './documents/epitychies'
import {epitychiesPage} from './documents/epitychiesPage'
import {newsPost} from './documents/newsPost'
import {newsIndexPage} from './documents/newsIndexPage'
import {registrationPage} from './documents/registrationPage'
import {contactPage} from './documents/contactPage'
import {formSubmission} from './documents/formSubmission'

export const schemaTypes = [
  // Object types (must come before documents that reference them)
  scheduleSlot,
  coachCard,
  valueCard,
  statItem,
  galleryImage,
  sectionCard,
  seo,

  // Document types
  siteSettings,
  homePage,
  aboutPage,
  sectionsPage,
  epitychies,
  epitychiesPage,
  newsPost,
  newsIndexPage,
  registrationPage,
  contactPage,
  formSubmission,
]
