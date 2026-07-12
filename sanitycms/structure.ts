import type {StructureResolver} from 'sanity/structure'

const singletonTypes = [
  'siteSettings',
  'homePage',
  'aboutPage',
  'sectionsPage',
  'newsIndexPage',
  'epitychiesPage',
  'registrationPage',
  'contactPage',
]

const singletonTitles: Record<string, string> = {
  siteSettings: 'Ρυθμίσεις Site',
  homePage: 'Αρχική Σελίδα',
  aboutPage: 'Ο Σύλλογος',
  sectionsPage: 'Τμήματα',
  newsIndexPage: 'Σελίδα Νέων',
  epitychiesPage: 'Σελίδα Επιτυχιών',
  registrationPage: 'Εγγραφές',
  contactPage: 'Επικοινωνία',
}

function singleton(S: Parameters<StructureResolver>[0], typeName: string) {
  const title = singletonTitles[typeName] ?? typeName
  return S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Περιεχόμενο')
    .items([
      singleton(S, 'siteSettings'),
      S.divider(),
      S.listItem()
        .title('Σελίδες')
        .id('pages')
        .child(
          S.list()
            .title('Σελίδες')
            .items([
              singleton(S, 'homePage'),
              singleton(S, 'aboutPage'),
              singleton(S, 'sectionsPage'),
              singleton(S, 'epitychiesPage'),
              singleton(S, 'newsIndexPage'),
              singleton(S, 'registrationPage'),
              singleton(S, 'contactPage'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('epitychies').title('Επιτυχίες'),
      S.documentTypeListItem('newsPost').title('Νέα & Ανακοινώσεις'),
      S.documentTypeListItem('contentPage').title('Σελίδες Περιεχομένου'),
      S.divider(),
      S.listItem()
        .title('Φόρμες')
        .id('forms')
        .child(
          S.list()
            .title('Φόρμες')
            .items([
              S.listItem()
                .title('Επικοινωνία')
                .id('formSubmission-contact')
                .child(
                  S.documentList()
                    .title('Υποβολές Επικοινωνίας')
                    .schemaType('formSubmission')
                    .apiVersion('2024-01-01')
                    .filter('_type == "formSubmission" && formType == "contact"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('Εγγραφές')
                .id('formSubmission-registration')
                .child(
                  S.documentList()
                    .title('Υποβολές Εγγραφής')
                    .schemaType('formSubmission')
                    .apiVersion('2024-01-01')
                    .filter('_type == "formSubmission" && formType == "registration"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
                ),
            ]),
        ),
    ])

export {singletonTypes}
