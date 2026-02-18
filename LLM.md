# LLM.md - hanzo.ai

## Project

Main Hanzo AI marketing site. React SPA with Vite.

- URL: https://hanzo.ai
- Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
- Node: v20+ (`.nvmrc`)
- Dev: `npm run dev` (port 8080)
- Build: `npm run build`
- Deploy: GitHub Pages

## Brand Colors

- Primary: `#fd4444`
- Secondary: `#ff6b6b`
- Hover: `#e03e3e`
- Centralized in `/src/constants/brand.ts` with Tailwind class mappings

## Key Files

```
src/
  constants/
    brand.ts              # BRAND colors, brandClasses, partners
    navigation-data.ts    # Products/solutions menu data
  components/
    shared/
      PartnerCard.tsx     # Reusable partner card + PartnersSection
      FeatureCard.tsx     # Grid and list item variants
    ui/                   # shadcn-ui components
    navigation/
      products-menu/      # 8 featured products, 4 per category
    ScrollToTop.tsx       # 50ms delay, instant behavior, skip initial load
  pages/                  # Route handlers
App.tsx                   # All routes defined here
```

## Design System

- Hero: radial gradient bg (800px, blur 100px, 15% opacity)
- Cards: `bg-neutral-900/50 border border-neutral-800 rounded-xl`
- Animation: framer-motion, 0.4s base, 0.05s stagger
- Buttons: rounded-full, brand primary + neutral-700 border secondary
- Badge pills: icon + text, rounded-full

## GitHub Pages SPA

`vite.config.ts` has `copyIndexTo404()` plugin for client-side routing on GitHub Pages.

## Certification Claims (Honest)

- SOC 2: "Audit in Progress" (not "Certified")
- HIPAA: "HIPAA Ready" / "BAA Available" (not "Compliant")
- ISO 27001: removed (not yet certified)
- No specific datacenter locations; use "Global High-Performance Edge"

## Gotchas

- `themes.css`: `--brand` must be `#fd4444`, `--brand-muted` must be `#e03e3e`
- Green status indicators (online dots, success states) are preserved, not replaced with brand
- ProductsMenu uses named export (not default) for consistency
- Open Graph/Twitter meta tags use absolute `https://hanzo.ai/` URLs
