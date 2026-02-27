# GenLayer Brand Guide

**Portal:** points.genlayer.foundation
**Brand positioning:** "From Trustless Money to Trustless Decision-Making"
**Tone:** Technical yet accessible, forward-looking, builder-focused. Avoid hype language.

---

## Logo

The GenLayer logo consists of a **hexagonal mark** containing a centered cross/plus symbol, paired with the **"GenLayer" wordmark** in a bold sans-serif typeface. The mark is a geometric hexagon with rounded proportions and a simple cross motif at its center.

### Logo Variants

| Variant | Path | Usage |
|---------|------|-------|
| Black (full wordmark) | `logo/SVG/GenLayer_Logo_Black.svg` | Light backgrounds |
| Black (large) | `logo/SVG/GenLayer_Logo_Black_Large.svg` | High-res / print |
| Black (large, alt) | `logo/SVG/GenLayer_Logo_Black_Large_1.svg` | Alternate version |
| White (full wordmark) | `logo/SVG/GenLayer_Logo_White_Cropped.svg` | Dark backgrounds |
| Mark only (black) | `logo/SVG/GenLayer_Mark_Black.svg` | Favicons, small contexts |
| Mark only (white) | `logo/SVG/GenLayer_Mark_White.svg` | Dark background icons |

### Logo PNGs

| Variant | Path |
|---------|------|
| Black (cropped) | `logo/PNG/GenLayer_Logo_Black_Cropped.png` |
| Black (large) | `logo/PNG/GenLayer_Logo_Black_Large.png` |
| White (cropped) | `logo/PNG/GenLayer_Logo_White_Cropped.png` |
| White (large) | `logo/PNG/GenLayer_Logo_White_Large.png` |

### Mark Description

The GenLayer mark is a **hexagonal badge** with a centered **cross/plus symbol**. The hexagon has slightly rounded vertices. The full wordmark uses the text "GenLayer" in a custom geometric sans-serif face with distinctive letterforms (the 'G' has a horizontal crossbar, the 'L' has a sharp right angle, the 'y' has a deep descender).

---

## Typography

### Font Families

| Token | Font | Usage | Fallback |
|-------|------|-------|----------|
| `--font-heading` | F37 Lineca VF | Headlines, display text, stat numbers | sans-serif |
| `--font-sans` | Switzer Variable | Body, UI labels, buttons, descriptions | sans-serif |
| `--font-mono` | Menlo | Code snippets, technical values | monospace |

Font files located in `fonts/F37 Lineca VF/`.

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Font |
|------|------|--------|-------------|----------------|------|
| Display XL | 64px | Medium 500 | 64px | -1.28px | F37 Lineca VF |
| Page Title / H1 | 48px | Medium 500 | 56px | -0.96px | F37 Lineca VF |
| Section Hero / H2 | 32px | Medium 500 | 48px | -1.28px | F37 Lineca VF |
| Stat Number | 32px | Medium 500 | 25px | -0.96px | F37 Lineca VF |
| Card Title / H3 | 24px | Medium 500 | 40px | -0.48px | F37 Lineca VF |
| Nav Logo | 24px | Medium 500 | 20px | -0.96px | F37 Lineca VF |
| Section Title | 20px | Semibold 600 | 25px | 0.4px | Switzer Variable |
| Body Large | 17px | Regular 400 | 28px | 0.34px | Switzer Variable |
| Body Default | 14px | Medium 500 | 21px | 0.28px | Switzer Variable |
| Body Regular | 14px | Regular 400 | 21px | 0.28px | Switzer Variable |
| Small Label | 12px | Regular 400 | 20px | 0.24px | Switzer Variable |
| Caption / Meta | 12px | Medium 500 | 18px | 0.24px | Switzer Variable |
| Code | 14.4px | Regular 400 | 21.6px | -- | Menlo |

**Pattern:** Headings use negative letter-spacing (tight). Body text uses positive letter-spacing (open).

---

## Color System

### Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-black` | `#000000` | Primary text |
| `--color-near-black` | `#131214` | Button backgrounds, heading text |
| `--color-dark-text` | `#1b1b1b` | Alert/banner body text |
| `--color-dark-gray` | `#222222` | Progress bar tracks |
| `--color-mid-dark-gray` | `#3f3f3f` | Pill borders (dark theme) |
| `--color-gray` | `#656567` | Secondary/muted interactive text |
| `--color-mid-gray` | `#6b6b6b` | Subtitle, description, section labels |
| `--color-placeholder` | `#ababab` | Placeholder text |
| `--color-disabled` | `#bdbdbd` | Disabled/inactive label text |
| `--color-light-gray` | `#e3e3e3` | Pill text on dark backgrounds |
| `--color-border-light` | `#e5e5e6` | Navbar bottom border |
| `--color-border` | `#e6e6e6` | Sidebar borders, input borders |
| `--color-border-card` | `#f0f0f0` | Stat card borders |
| `--color-surface` | `#f5f5f5` | Card borders, surface backgrounds, dividers |
| `--color-chip-bg` | `#f3f3f3` | Inactive chip/tag background |
| `--color-white` | `#ffffff` | Page background, card backgrounds |

### Role Colors

Each ecosystem role has a dedicated color used for badges, labels, and accent elements.

| Role | Text Color | Background | Badge Icon |
|------|-----------|------------|------------|
| **Builders** | `#e99322` (orange) | `rgba(233,147,34,0.1)` | `icons/Badges/GL Badge Builder.svg` |
| **Validators** | `#4f76f6` (blue) | `rgba(79,118,246,0.1)` | `icons/Badges/GL Badge Validator.svg` |
| **Community** | `#8d81e1` (purple) | `#f4f2fc` | `icons/Badges/GL Badge Community.svg` |
| **Stewards** | `#3eb359` (green) | `rgba(62,179,89,0.1)` | `icons/Badges/GL Badge Stewards.svg` |
| **GenLayer** | -- | -- | `icons/Badges/GL Badge GenLayer.svg` |

### Accent & Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand-purple` | `#9e4bf6` | Points rank labels, glow effects |
| `--color-purple-deep` | `#8d81e1` | Hero gradient start |
| `--color-purple-gradient-start` | `#be8ff5` | CTA button gradient start |
| `--color-purple-gradient-end` | `#ac6df3` | CTA button gradient end |
| `--color-purple-progress` | `#a78af8` | Progress bar gradient start |
| `--color-purple-alert-border` | `#8f46e9` | Info alert border |
| `--color-purple-alert-bg` | `#f3ecfc` | Info alert background |
| `--color-purple-code` | `#a456f7` | Code syntax (keywords) |

### Semantic / Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#3eb359` | Positive trend indicators |
| `--color-success-verified` | `#169941` | Verified/Accepted status |
| `--color-success-bg` | `#eefdf2` | Verified tag background |
| `--color-error` | `#ff0000` | Error states |
| `--color-error-bg` | `rgba(255,0,0,0.1)` | Error alert background |
| `--color-link` | `#4083ea` | Links, active states, data highlights |
| `--color-blue-code` | `#3779f5` | Code syntax (functions) |

### Gradients

| Name | Definition | Usage |
|------|-----------|-------|
| **CTA Gradient** | `linear-gradient(to right, #be8ff5, #ac6df3)` | Submit/primary CTA buttons |
| **Hero Gradient** | `linear-gradient(to right, #8d81e1, #eae9f3)` | Featured card backgrounds |
| **Progress Gradient** | `linear-gradient(to right, #a78af8, #fa8736)` | Points supply progress bar |
| **Image Overlay** | `linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)` | Hero image darkening |

---

## Spacing System

Based on a **4px grid**:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Minimal gaps (icon-to-label, inline elements) |
| `--space-2` | 8px | Standard element gaps (icon+text, button padding) |
| `--space-3` | 12px | Sidebar padding, card inner gaps |
| `--space-4` | 16px | Component padding, section padding |
| `--space-5` | 20px | Container padding |
| `--space-6` | 24px | Major section gaps |
| `--space-10` | 40px | Large section separators |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 2px | Inner image containers |
| `--radius-md` | 6px | Sidebar buttons (inactive) |
| `--radius-lg` | 8px | Cards, alerts, section containers |
| `--radius-pill` | 20px | Buttons, pills, progress bars, chips |
| `--radius-xl` | 24px | Hero overlay cards, large chips |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0px 4px 12px 0px rgba(0,0,0,0.05)` | Floating/elevated cards |
| `--shadow-elevated` | `0 0 0 1px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.03)` | Elevated card surfaces |

---

## Design Patterns

### Buttons

| Type | Classes |
|------|---------|
| **Primary** | `bg-[#131214] text-white rounded-full h-10 px-4` |
| **Secondary** | `bg-[#f5f5f5] text-[#131214] rounded-full h-10 px-4` |
| **CTA Gradient** | `bg-gradient-to-r from-[#be8ff5] to-[#ac6df3] text-white rounded-full h-10 px-4` |

All buttons are **pill-shaped** (`rounded-full`). Glow on hover: `box-shadow: 0 4px 20px rgba(158,75,246,0.35)`.

### Cards

- Standard: `rounded-lg border border-[#f5f5f5] shadow-card`
- Illustration: `h-[400px] rounded-lg border border-[#f5f5f5] overflow-hidden`
- Stat: `rounded-lg border border-[#f0f0f0] h-[80px]`

### Icons

- Standard size: **16x16**
- Large/badge size: **24x24**
- All rendered via `next/image` with explicit dimensions

### Layout

| Element | Dimension |
|---------|-----------|
| Page width | 1440px |
| Sidebar | 222px wide, fixed left |
| Navbar | 64px tall, fixed top |
| Main content | `ml-[222px] mt-16 px-3` |

---

## Icon Assets

All role icons use a **hexagonal shape** as their container. Each role has three variants at different detail levels.

### Badges (24x24, hexagonal, minimal)

Small inline badges for sidebar labels, pills, and compact UI.

| Role | Path | Accent Color |
|------|------|-------------|
| Builder | `icons/Badges/GL Badge Builder.svg` | `#EE8521` (orange) |
| Validator | `icons/Badges/GL Badge Validator.svg` | `#266FE5` (blue) |
| Community | `icons/Badges/GL Badge Community.svg` | `#8F46E9` / `#AC6DF3` (purple) |
| Stewards | `icons/Badges/GL Badge Stewards.svg` | `#19A663` (green gradient) |
| GenLayer | `icons/Badges/GL Badge GenLayer.svg` | `#000000` (black, lightning mark) |

### Main Labels (48x48, hexagonal, gradient fill)

Rich icons with gradient backgrounds for cards, feature sections, and hero areas.

| Role | Path |
|------|------|
| Builder | `icons/Main/GL Label Builder.svg` |
| Validator | `icons/Main/GL Label Validator.svg` (note: no 's') |
| Community | `icons/Main/GL Label Community.svg` |
| Steward | `icons/Main/GL Label Steward.svg` (note: no 's') |
| GenLayer | `icons/Main/GL Label GenLayer.svg` |

### Plain Labels (48x48, hexagonal, flat fill)

Simplified icons with solid color fills for lighter UI contexts.

| Role | Path |
|------|------|
| Builder | `icons/Plain/GL Label Plain Builder.svg` |
| Validator | `icons/Plain/GL Label Plain Validator.svg` |
| Community | `icons/Plain/GL Label Plain Community.svg` |
| Steward | `icons/Plain/GL Label Plain Steward.svg` |
| GenLayer | `icons/Plain/GL Label Plain GenLayer.svg` |

### Badge Design Notes

- All badges share a common **hexagonal path** (`d="M10.875 0.649...Z"`) as the background shape
- Background hex uses `opacity="0.1"` for a subtle tinted fill
- Inner icon is specific to each role (code bracket for Builder, shield for Validator, people for Community, seedling/leaf for Steward, lightning mark for GenLayer)
- Stewards badge uniquely uses a **linear gradient** (`#53D69C` → `#2EC17F` → `#19A663`) instead of a solid fill

---

## Domain Terminology

Always use these exact terms:

| Term | Description |
|------|-------------|
| **Intelligent Contracts** | Never "smart contracts" — Python-based, natural language capable |
| **Optimistic Democracy** | Consensus mechanism with diverse AI models |
| **GenVM** | Python-based virtual machine for on-chain execution |
| **GenLayer Points (GP)** | Ecosystem currency earned through contributions |
| **Testnet Bradbury** | Current testing environment |
| **Studio** | Browser-based IDE for Intelligent Contracts |
