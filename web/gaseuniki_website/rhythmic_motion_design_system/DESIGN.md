---
name: Rhythmic Motion Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5b3f43'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#8f6f73'
  outline-variant: '#e4bdc2'
  surface-tint: '#bc004b'
  primary: '#b80049'
  on-primary: '#ffffff'
  primary-container: '#e2165f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2be'
  secondary: '#b7046c'
  on-secondary: '#ffffff'
  secondary-container: '#fe4ea2'
  on-secondary-container: '#5c0033'
  tertiary: '#765700'
  on-tertiary: '#ffffff'
  tertiary-container: '#916f1c'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2be'
  on-primary-fixed: '#400014'
  on-primary-fixed-variant: '#900038'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cc'
  on-secondary-fixed: '#3e0021'
  on-secondary-fixed-variant: '#8d0051'
  tertiary-fixed: '#ffdf9e'
  tertiary-fixed-dim: '#ebc166'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-padding: 80px
---

## Brand & Style
This design system captures the grace, precision, and energy of rhythmic gymnastics. The brand personality is **dynamic, elegant, and empowering**, aiming to inspire young athletes and provide a professional, organized platform for parents and trainers.

The visual style is **Modern Corporate with a Kinetic twist**. It prioritizes a clean, "airy" layout with significant whitespace to mimic the openness of a gymnastics floor. To counter the structure, fluid "ribbon" patterns and soft wave gradients are used as decorative backgrounds to convey the discipline's signature movement. The overall atmosphere is premium yet welcoming, using soft depth and rounded geometry to maintain an approachable, community-focused feel.

## Colors
The palette is dominated by **Fuchsia (#E91E63)** as the primary driver for brand recognition and primary actions. **Bold Pink (#FF4FA3)** serves as a secondary accent to add depth to gradients and highlight interactive elements. 

**Gold (#C9A24B)** is reserved strictly for high-achievement contexts: medals, trophies, and "Champion" tier badges. It should never be used for standard UI elements like buttons or links to maintain its prestige. The background remains pure White (#FFFFFF) to ensure the vibrant pinks feel energetic rather than overwhelming. Neutral greys are used for body text and subtle borders to keep the focus on the primary brand colors.

## Typography
The typography system uses a pairing of **Plus Jakarta Sans** for headings and **Nunito Sans** for body text. This combination balances the modern, geometric energy of the brand with the soft, rounded approachability required for a youth-oriented sports club.

All typography supports the **Greek character set** natively. Headings should utilize tighter letter-spacing to feel impactful, while body text uses a generous line height (1.6) to ensure maximum legibility against the clean, white backgrounds. Success states and labels may use uppercase styling to provide a rhythmic contrast to the sentence-case body copy.

## Layout & Spacing
This design system employs a **Fluid Grid** model with high-density internal spacing but low-density external margins to create an "airy" feel. 

- **Desktop:** 12-column grid with 24px gutters. Large 80px vertical padding between sections allows the "ribbon" background patterns to breathe.
- **Mobile:** 4-column grid with 16px margins.
- **Rhythm:** Spacing follows a base-8 increment. Use larger gaps (48px+) between distinct content blocks to prevent the UI from feeling cluttered, mimicking the physical space of a performance carpet.

## Elevation & Depth
Depth is handled through **Ambient Shadows** and **Tonal Layers**. Shadows are intentionally soft and slightly tinted with Fuchsia to avoid a "heavy" grey look.

- **Level 1 (Cards):** Very soft blur (y: 4px, blur: 20px) with 5% opacity Fuchsia tint.
- **Level 2 (Dropdowns/Modals):** Medium blur (y: 8px, blur: 30px) with 10% opacity.
- **Ribbon Patterns:** Background patterns should have no elevation; they act as a "floor" layer, occasionally using a backdrop-blur (10px) when content scrolls over them to maintain legibility.

## Shapes
The shape language is defined by **large, friendly radii**. Standard UI elements like cards and primary containers use a 16px (1rem) corner radius. Buttons and input fields follow suit to ensure a cohesive, "bouncy" aesthetic that aligns with the gymnastics theme. Small components like tags or badges use a fully rounded (pill) shape.

## Components

### Buttons
- **Primary:** Fuchsia background (#E91E63), white text, 16px rounded corners. Subtle scale-up effect on hover.
- **Secondary:** White background with a 2px Bold Pink border (#FF4FA3) and Pink text.
- **Achievement:** Exclusive Gold gradient background, only used for "View Awards" or "Hall of Fame" entries.

### Cards
- Pure white background, 16px rounded corners, and Level 1 soft shadow. 
- Top-border accent: A 4px Fuchsia line or a subtle wave pattern header.

### Inputs & Form Fields
- 16px rounded corners. Soft grey border (#E0E0E0) that transitions to Fuchsia on focus. 
- Labels in Plus Jakarta Sans (Label-MD).

### Success & Achievements
- Use the provided gold-standard icons (🏆, 🥇) exclusively within card components that have a subtle gold-tinted border.
- Decorative sport icons (hoop, ribbon, ball) should be used as ghost-watermarks or as prefixes to section titles.

### Decorative Patterns
- Section backgrounds should occasionally feature a "Ribbon Wave"—a vector path that meanders behind content, using a low-opacity (5-10%) gradient of Fuchsia to Bold Pink.