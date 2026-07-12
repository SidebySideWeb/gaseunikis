/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SANITY_PROJECT_ID: string;
  readonly SANITY_DATASET: string;
  readonly SANITY_WRITE_TOKEN?: string;
  readonly RESEND_API_KEY?: string;
  readonly ADMIN_NOTIFICATION_EMAIL?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly BASIC_AUTH_USER?: string;
  readonly BASIC_AUTH_PASS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
