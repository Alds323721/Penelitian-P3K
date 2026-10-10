---
name: Obsidian Precision
colors:
  surface: '#141414'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#303031'
  secondary-container: '#464747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-elevated: '#1A1A1A'
  border-hairline: '#262626'
  border-subtle: '#1C1C1C'
  text-primary: '#EDEDED'
  text-secondary: '#8A8A8A'
  success: '#10B981'
  specular-glow: rgba(255, 255, 255, 0.12)
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.015em
  metric-xl:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  metric-lg:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 5rem
---

## Brand & Style

The design system embodies a dark-mode native, high-performance visual language tuned for technical rigor, analytical command, and effortless data comprehension. Drawing foundational inspiration from engineering-first tools like Linear and Raycast, the aesthetic balances austere monochrome discipline with tactile, polished chrome specular touches. 

The mood is clinical, authoritative, and frictionless. It avoids ornamental noise in favor of stark contrast ratios, micro-hairline borders, and rhythmic bento layouts. Chrome 3D specular glyphs break the monochrome field to evoke craftsmanship and cutting-edge software speed. Typography and data tables communicate absolute technical confidence, ensuring operators, engineers, and growth directors parse critical metrics without visual fatigue.

## Colors

The palette operates on pure chromatic restraint, relying on extreme tonal values rather than hue variations.

- **Primary (`#FFFFFF`)**: Pure optic white. Reserved strictly for dominant calls-to-action, primary metric numerals, key interactive states, and the high-contrast featured tier card.
- **Secondary (`#8A8A8A`)**: Neutral steel gray for secondary labels, subtle descriptors, structural icons, and supplementary interface hints. Meets WCAG AA contrast against dark surfaces.
- **Neutral (`#0A0A0A`)**: Ground-level canvas obsidian black. Provides zero glare and anchors maximum dynamic range.
- **Surface (`#141414`) & Surface-Elevated (`#1A1A1A`)**: Structural layers for bento cards, panels, popovers, and table containers.
- **Hairline Borders (`#262626`, `#1C1C1C`)**: 1px structural boundaries defining modules without diffuse drop shadows.
- **Success (`#10B981`)**: Monitored growth indicators, active status dots, and positive SERP trajectory metrics.

## Typography

The typographic hierarchy is built on Geist for clean, mechanical clarity. 

Tight negative tracking (`-0.02em` to `-0.03em`) on large display headers creates an authoritative, compact poster aesthetic reminiscent of Swiss modernist publishing. Body copy is set at 15px with relaxed leading to maximize long-form legibility across analytical summaries. 

All numeric representations—including analytics counts, positions, percentages, currency, and timestamps—must use `tabular-nums` (`font-variant-numeric: tabular-nums`) to ensure vertical alignment across dense bento tables and list hierarchies.

## Layout & Spacing

Layout geometry follows an 8-point base spatial model with a 4-point micro-scale. 

- **Grid Architecture**: Content is constrained within a maximum 1200px container built upon a strict 12-column bento grid. Desktop modules bridge across 3, 4, 6, 8, or 12 columns with a fixed 16px (`1rem`) gutter.
- **Section Rhythm**: Major landing sections and dashboard panels breathe with an 80px (`5rem`) vertical cadence, providing clean contrast between information clusters.
- **Bento Card Structure**: Standard internal card padding is anchored at 24px (`1.5rem`), scaling down to 16px (`1rem`) on compact mobile views.
- **Responsive Adaptation**: Under the 768px breakpoint, the bento matrix collapses into a single-column linear feed, maintaining touch target margins of 44px minimum and edge margins of 16px.

## Elevation & Depth

This design system rejects diffuse, cloudy drop shadows. Elevation is achieved through **Tonal Layering** and **Hairline Outlines**:

- **Ground Level**: `#0A0A0A` base canvas.
- **Level 1 (Card & Module Surface)**: `#141414` backed by a 1px solid border (`#262626`).
- **Level 2 (Active/Floating Surface)**: `#1A1A1A` paired with a 1px border (`#333333`) and an optional micro-ambient rim light: `0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.6)`.
- **Specular Accents**: Metallic elements and badges feature high-definition top-edge bevel reflections created via inset gradient strokes: `inset 0 1px 0 0 rgba(255, 255, 255, 0.15)`.
- **Glassmorphic Navigation**: Sticky top headers use `backdrop-filter: blur(16px)` over `rgba(10, 10, 10, 0.75)` with a bottom border of `1px solid #262626`.

## Shapes

The design system implements a tailored shape hierarchy:

- **Interactive Controls (Buttons, Text Inputs, Segmented Controls)**: 8px border radius (`0.5rem`), keeping touchpoints sharp, compact, and utilitarian.
- **Bento Cards, Modals, and Flyouts**: 16px border radius (`1rem`), softening structural containers while preserving technical precision.
- **Badges, Tags, Metric Status Indicators, and Avatars**: Fully rounded pill shapes (`9999px`), contrasting neatly against rectilinear grids.

## Components

### Buttons
- **Primary**: Background `#FFFFFF`, text `#0A0A0A`, font-weight 600, padding 10px 20px, border-radius 8px. Hover state: `#E5E5E5` with subtle forward translation. Active state: `#CCCCCC`.
- **Secondary / Ghost**: Background `#141414`, text `#EDEDED`, 1px solid border `#262626`, border-radius 8px, padding 10px 20px. Hover: background `#1E1E1E`, border `#383838`.
- **Tertiary Link**: Text `#8A8A8A`, transparent background, hover text `#FFFFFF`.

### Chips & Badges
- Pill-shaped (`rounded-full`), padding 4px 12px.
- Background: `rgba(255, 255, 255, 0.04)`, border: `1px solid rgba(255, 255, 255, 0.1)`.
- Typography: Label-sm, text color `#EDEDED`, frequently accompanied by an 8px circular status indicator dot (e.g., `#10B981` for active or updated states).

### Bento & Pricing Cards
- **Standard Card**: Background `#141414`, border `1px solid #262626`, corner radius 16px, padding 24px.
- **Featured / Pro Card (Inverted)**: Pure white `#FFFFFF` surface, text `#0A0A0A`, description `#525252`, CTA button in `#0A0A0A` with white text. Delivers instant focal prominence within the grid.

### Input Fields
- Background `#141414`, 1px solid `#262626`, text `#EDEDED`, placeholder `#525252`, height 40px, border-radius 8px, padding 0 14px. Focus state: border `#FFFFFF`, ring `0 0 0 1px #FFFFFF` offset by 2px `#0A0A0A`.

### Lists & Accordions
- Flush horizontal stack with `1px solid #262626` dividers. Hover states trigger subtle `#141414` row lighting. Caret indicators rotate 180° with 150ms ease transitions.

### Data Visualizations & Tooltips
- Smooth monochrome or green-tinted line vectors on `#141414` background.
- Floating tooltip badges: Background `#1A1A1A`, border `1px solid #333333`, rounded 6px, tabular figures font variant.