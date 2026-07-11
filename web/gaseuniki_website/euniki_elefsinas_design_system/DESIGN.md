---
name: Euniki Elefsinas Design System
colors:
  surface: '#fdf9f4'
  surface-dim: '#ddd9d5'
  surface-bright: '#fdf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ee'
  surface-container: '#f1ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e6e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#564145'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0eb'
  outline: '#897174'
  outline-variant: '#ddbfc3'
  surface-tint: '#a73453'
  primary: '#6c0029'
  on-primary: '#ffffff'
  primary-container: '#8b1e3f'
  on-primary-container: '#ff9db0'
  inverse-primary: '#ffb2bf'
  secondary: '#795902'
  on-secondary: '#ffffff'
  secondary-container: '#fdd275'
  on-secondary-container: '#775800'
  tertiary: '#4c2933'
  on-tertiary: '#ffffff'
  tertiary-container: '#653f49'
  on-tertiary-container: '#dfacb8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2bf'
  on-primary-fixed: '#3f0015'
  on-primary-fixed-variant: '#871b3c'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#ebc166'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#edb9c5'
  on-tertiary-fixed: '#30121b'
  on-tertiary-fixed-variant: '#623c46'
  background: '#fdf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e6e2dd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built to reflect the grace, precision, and warmth of rhythmic gymnastics. It balances the athletic discipline of a professional sports club with the nurturing, community-focused atmosphere of "Euniki Elefsinas." The visual language is **Modern Professional with a Tactile Softness**, utilizing generous whitespace to evoke the "breathing room" required for performance and movement.

The target audience ranges from young athletes and their parents to professional coaches and community partners. The emotional response should be one of trust, elegance, and inspiration. We avoid cold, clinical layouts in favor of a "warm boutique" aesthetic that feels premium yet accessible.

## Colors

This design system utilizes a sophisticated, high-contrast palette rooted in classical athletic excellence.

*   **Primary (Deep Burgundy):** Used for key brand moments, primary buttons, and authoritative headings. It represents the strength and passion of the sport.
*   **Accent (Gold/Bronze):** Used sparingly for interactive elements, badges, and decorative accents to signify achievement and quality.
*   **Secondary Accent (Soft Pink):** Employed for lighter backgrounds, hover states, and categorizing content to maintain a friendly, approachable tone.
*   **Background (Cream/Off-white):** The foundational canvas. Unlike pure white, this off-white tone reduces eye strain and provides a premium, organic feel.

## Typography

The typography strategy pairs the modern, rounded geometry of **Plus Jakarta Sans** for headlines with the highly legible, friendly humanist traits of **Nunito Sans** for body copy.

*   **Headlines:** Use Plus Jakarta Sans to mirror the fluid yet structured movements of rhythmic gymnastics. Tighten letter-spacing on larger display sizes for a more contemporary, editorial look.
*   **Body:** Nunito Sans provides a soft, approachable feel that ensures accessibility across all age groups.
*   **Labels:** Use all-caps labels with increased tracking for metadata, categories, and small utility text to provide clear hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with strict vertical rhythm based on an 8px square baseline. 

*   **Desktop:** A 12-column grid with a 1200px max-width container. Content should feel "floated" on the cream background with wide exterior margins to emphasize the sense of "space."
*   **Mobile:** A 4-column grid with 16px side margins. Elements are stacked vertically to maintain readability and touch-target size.
*   **Rhythm:** Use the `stack-lg` (48px) spacing between major sections to prevent visual clutter. Within components like cards, use `stack-sm` for related text elements.

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with **Ambient Shadows** to create a soft, physical presence.

*   **Shadows:** Avoid harsh, black shadows. Use a "Deep Burgundy" tint in the shadow color at very low opacity (e.g., `rgba(139, 30, 63, 0.08)`) to create a more integrated, sophisticated depth.
*   **Layers:** 
    *   **Level 0:** Base Cream background.
    *   **Level 1:** White surfaces (cards/containers) with a soft shadow (12px blur, 4px Y-offset).
    *   **Level 2:** Floating elements (modals/dropdowns) with a more pronounced, diffused shadow (24px blur, 8px Y-offset).
*   **Accents:** Use thin, 1px Gold borders on Level 1 elements to denote premium interactive areas.

## Shapes

The shape language is defined by high-radius curves, reflecting the arcs and circles inherent in rhythmic gymnastics (hoops, ball paths, ribbon swirls).

*   **Buttons:** Use `rounded-xl` (1.5rem) to create a friendly, inviting interaction.
*   **Cards:** Use `rounded-lg` (1rem) for news and program containers to provide structure while remaining soft.
*   **Icons:** Icons should be framed in circular containers or have rounded terminals. Avoid sharp 90-degree corners in any decorative linework.

## Components

### Buttons
Primary buttons use the Deep Burgundy background with White text and `rounded-xl` corners. Secondary buttons use a Gold outline with Gold text for a lighter, "achievement-oriented" feel.

### Cards
Cards for news and programs should have a white background, soft shadow, and `rounded-lg` corners. Use an image at the top with an aspect ratio of 16:9, followed by 24px of internal padding for text.

### Inputs
Text fields utilize the Cream background but with a subtle 1px border in a muted Pink or Gold for focus states. Labels are always positioned above the input in `label-caps` typography.

### Lists & Navigation
Navigation items use `headline-md` at a smaller scale (16px) with a Gold underline effect on hover. Mobile navigation should utilize a full-screen overlay with large, centered typography to maintain a premium feel.

### Decorative Elements
Integrate "Rhythmic Flourishes"—thin, 1px Gold or Pink lines that curve gently behind content blocks, mimicking the path of a gymnastics ribbon.