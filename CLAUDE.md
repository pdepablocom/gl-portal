# GenLayer Points Portal

GenLayer Points Portal — ecosystem coordination platform at `points.genlayer.foundation`. Central hub for Builders, Validators, Community, and Stewards to earn GenLayer Points (GP) by contributing to the ecosystem. Purpose: showcase platform vitality, convert visitors to participants, coordinate ecosystem growth.

## Tech Stack

- **Next.js 16.1.6** / **React 19.2.3** / **TypeScript 5**
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- `next/image` for all images — SVG + PNG assets live in `/public/assets/`
- No additional UI libraries — all components are custom-built
- ESLint for linting (`npm run lint`)
- Dev server: `npm run dev`

## GenLayer Domain Knowledge

**Core terminology — use these exact terms:**
- **Intelligent Contracts** (never "smart contracts") — written in Python, can interpret natural language and access the web
- **Optimistic Democracy** — consensus mechanism where validators running diverse AI models reach agreement
- **GenVM** — Python-based virtual machine for on-chain Intelligent Contract execution
- **GenLayer Points (GP)** — ecosystem currency earned through contributions
- **Testnet Bradbury** — current testing environment
- **Studio** — browser-based IDE for writing, testing, and deploying Intelligent Contracts

**Ecosystem roles:**
- **Builder** — developers writing Intelligent Contracts
- **Validator** — operators running nodes with AI models to reach consensus
- **Community** — contributors through content, outreach, and engagement
- **Steward** — ecosystem leaders coordinating growth and governance

**Brand positioning:** "From Trustless Money to Trustless Decision-Making"
**Tone:** Technical yet accessible, forward-looking, builder-focused. Avoid hype language.

## Branding & Design System

### Typography

Defined in `src/app/globals.css` as Tailwind theme tokens:
- **Body/Sans:** `font-sans` → `"Switzer Variable", sans-serif`
- **Headings:** `font-heading` → `"F37 Lineca VF", sans-serif`
- **Mono/Code:** `font-mono` → `"Menlo", monospace`

### Core Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#ffffff` | Page background |
| `--color-foreground` | `#000000` | Primary text |
| — | `#131214` | Button/heading text |
| — | `#e5e5e6` / `#e6e6e6` | Borders, dividers |
| — | `#f5f5f5` | Surface/muted backgrounds |
| — | `#6b6b6b` | Section labels |
| — | `#656567` | Muted interactive text |
| — | `#ababab`, `#bdbdbd` | Placeholder/disabled text |

### Role Colors

| Role | Text Color | Background |
|------|-----------|------------|
| Builders | `#e99322` (orange) | `rgba(233,147,34,0.1)` |
| Validators | `#8d81e1` (purple) | `#f4f2fc` |
| Community | `#4f76f6` (blue) | `rgba(79,118,246,0.1)` |
| Stewards | `#3eb359` (green) | `rgba(62,179,89,0.1)` |

### Accent & Status Colors

- **Primary accent gradient:** `bg-gradient-to-r from-[#be8ff5] to-[#ac6df3]` (purple)
- **Success/Accepted:** `#169941`
- **Code keywords:** `#a456f7` (purple), `#3779f5` (blue)
- **Link/active:** `#4083ea`

### Design Patterns

**Buttons:**
- Primary: `bg-[#131214] text-white rounded-full h-10 px-4`
- Secondary: `bg-[#f5f5f5] text-[#131214] rounded-full h-10 px-4`
- CTA gradient: `bg-gradient-to-r from-[#be8ff5] to-[#ac6df3] text-white rounded-full`
- All buttons are pill-shaped (`rounded-full`)

**Cards:**
- `rounded-lg border border-[#f5f5f5] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]`
- Illustration cards: `h-[400px] rounded-lg border border-[#f5f5f5] overflow-hidden`

**Text:**
- Body tracking: `tracking-[0.28px]`
- Section labels: `text-xs tracking-[0.24px]`
- Headings: negative tracking (e.g. `tracking-[-1.28px]`)

**Icons:** 16x16 standard size via `next/image`

## Layout Architecture

```
┌─────────────────────────────────────────────────┐
│  Navbar (fixed, top, z-50, border-bottom)       │
├──────────┬──────────────────────────────────────┤
│ Sidebar  │  Main Content                        │
│ fixed    │  ml-[222px] mt-16                    │
│ w-[222px]│  flex flex-col items-center gap-6    │
│ z-40     │                                      │
│ top-16   │  ┌──────────────────────────────┐    │
│          │  │ HeroSection                  │    │
│ Nav items│  │ JourneySection               │    │
│ Contribute│ │ ContributionsSection         │    │
│ section  │  │ RanksSection                 │    │
│ User     │  │ RoleCards                    │    │
│ profile  │  │ CTASection                   │    │
│          │  └──────────────────────────────┘    │
└──────────┴──────────────────────────────────────┘
```

- Navbar: fixed top, full width, `border-b border-[#e6e6e6]`, z-50
- Sidebar: fixed left, `w-[222px]`, `top-16 bottom-0`, `border-r border-[#e6e6e6]`, z-40
- Main: `ml-[222px] mt-16 px-3`, content centered

## Component Inventory

All components in `src/components/`:

| Component | Purpose |
|-----------|---------|
| `Navbar.tsx` | Logo, search input, CTA button, user avatar |
| `Sidebar.tsx` | Navigation items, Contribute section with role badges, user profile card |
| `HeroSection.tsx` | Headline, subtitle, primary + secondary CTA buttons |
| `JourneySection.tsx` | Text block + checklist + illustration card |
| `ContributionsSection.tsx` | Illustration cards + text + checklist |
| `RanksSection.tsx` | Text + checklist + leaderboard screenshot |
| `RoleCards.tsx` | 3-column grid — Builder, Validator, Community cards |
| `CTASection.tsx` | Closing CTA with headline + gradient button |

**Section pattern:** `<section className="flex w-full items-center justify-center gap-6 rounded-lg p-5">`

## Coding Conventions

- All images use `next/image` with explicit `width` and `height`
- Assets stored as SVGs/PNGs in `/public/assets/`
- Tailwind utility classes exclusively — no external CSS beyond `globals.css`
- Components are functional React components, no state management library
- Imports use `@/components/` path alias
- Checklist items use `/assets/checkbox-circle-fill.svg` (green checkmark)

## Figma Reference

- **File:** GL - GenLayer Portal
- **Key:** `ACxgGwxL3Okr05KlWQIIo5`
- **Design system node:** `191:2`
- Contains: landing pages, dashboard views, profile pages, role-specific screens, mobile variants
