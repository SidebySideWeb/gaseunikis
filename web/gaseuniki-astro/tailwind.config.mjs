/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: '#E91E63',
        'primary-light': '#FF4FA3',
        'primary-dark': '#b80049',
        'primary-container': '#e2165f',
        'on-primary': '#ffffff',
        'primary-text': '#b80049',
        'secondary-text': '#880358',
        'achievement-text': '#6b4f10',

        // Achievement (gold — ONLY for medals/trophies/hall of fame)
        achievement: '#C9A24B',
        'achievement-light': '#F0D080',

        // Secondary
        secondary: '#b7046c',
        'secondary-container': '#fe4ea2',
        'on-secondary': '#ffffff',

        // Surface
        surface: '#f9f9f9',
        'surface-dim': '#dadada',
        'surface-bright': '#f9f9f9',
        'surface-lowest': '#ffffff',
        'surface-low': '#f3f3f4',
        'surface-container': '#eeeeee',
        'surface-high': '#e8e8e8',
        'surface-highest': '#e2e2e2',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f3f4',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',

        // Text
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#5b3f43',
        'inverse-surface': '#2f3131',
        'inverse-on-surface': '#f0f1f1',

        // Outline
        outline: '#8f6f73',
        'outline-variant': '#e4bdc2',

        // Error
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',

        // Background
        background: '#f9f9f9',
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 4px 20px 0 rgba(233, 30, 99, 0.05)',
        'card-hover': '0 8px 30px 0 rgba(233, 30, 99, 0.10)',
        float: '0 8px 30px 0 rgba(233, 30, 99, 0.10)',
      },
    },
  },
  plugins: [],
};
