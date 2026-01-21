# Maintenance Report

## Recent Changes (2026-01-21)

### Deployed All Updates to Production
- **Commit**: `e3b87d3` - "Update all sub-pages with modern hero style and honest certification claims"
- **Files Changed**: 44 files, +2628 insertions, -1321 deletions
- **Deployment**: GitHub Pages workflow completed successfully (35s)
- **Live URL**: https://hanzo.ai/

### Docs Component Patterns (for reference)
Explored `~/work/hanzo/docs/packages/` for reusable patterns:
- **Card**: Grid layout with hover effects, icon support (`packages/base-ui/src/components/card.tsx`)
- **Banner**: Dismissible with localStorage persistence, rainbow gradient animation
- **Callout**: Styled alerts with type variants (info, warn, error, success, idea)
- Note: Docs uses Next.js/fumadocs - patterns adaptable but not directly importable

## Recent Changes (2026-01-20)

### Updated All Sub Pages with Modern Hero Style
Comprehensive visual refresh across all sub pages with consistent brand styling:

**Design System Applied:**
- Brand color: `#fd4444` consistently across all pages
- Animated hero sections with radial gradient backgrounds (800px, blur 100px, 15% opacity)
- Staggered motion animations (framer-motion) with 0.4s base, 0.05s increments
- Badge pills with icon + text in rounded-full styling
- Two-line headings (white + neutral-400 color scheme)
- Card components with `bg-neutral-900/50 border border-neutral-800 rounded-xl`
- CTA sections with decorative blur blobs (blur-3xl)
- Rounded-full buttons with brand color primary and neutral-700 border secondary

**Pages Updated:**
- `/src/pages/Brand.tsx` - Design system showcase with color swatches, typography, components
- `/src/pages/Leadership.tsx` - Leadership team with stats row and values section
- `/src/pages/Enterprise.tsx` - (previously updated)
- `/src/pages/Careers.tsx` - (previously updated)
- `/src/pages/Press.tsx` - (previously updated)

**Hero Components Updated:**
- `/src/components/solutions/Hero.tsx` - Enterprise Solutions hero
- `/src/components/about/AboutHero.tsx` - Company history hero
- `/src/components/team/TeamHero.tsx` - AI Team hero with feature pills and scroll indicator
- `/src/components/download/DownloadHero.tsx` - Desktop app hero with download buttons

**Pages Already Modern (no changes needed):**
- Terms.tsx, Privacy.tsx, Contact.tsx, Security.tsx, OpenSource.tsx, Blog.tsx

## Previous Changes (2026-01-20)

### Fixed Page Navigation Scroll Behavior and GitHub Pages 404 Routing
- **Scroll Behavior Fix**: Updated `ScrollToTop.tsx` to:
  - Skip scroll on initial page load (let browser handle it)
  - Delay scroll by 50ms to avoid jarring "scroll-then-render" effect during page transitions
  - Use `behavior: "instant"` for clean navigation
- **GitHub Pages SPA Routing**: Added `copyIndexTo404()` plugin in `vite.config.ts` that copies `index.html` to `404.html` during build. This ensures GitHub Pages serves the SPA for all routes (including dynamic paths like `/products/:categoryId`).
- **Files Updated**:
  - `/src/components/ScrollToTop.tsx` - Fixed scroll timing
  - `/vite.config.ts` - Added 404.html generation plugin

### Expanded Products Navigation
- Increased `ITEMS_PER_CATEGORY` from 3 to 4 in products dropdown menu
- Added 2 more featured products: Base (Backend-as-a-Service) and Cloud (AI Cloud infrastructure)
- Now shows 8 featured products and 4 items per category (was 6 featured, 3 per category)
- Files updated:
  - `/src/components/navigation/products-menu/index.tsx`
  - `/src/constants/navigation-data.ts`

### Additional Compliance Fixes
- Fixed `commerce/TechStack.tsx` - "PCI-compliant" → "Payment-grade security"
- Fixed `Privacy.tsx` badge - "GDPR & CCPA Compliant" → "Privacy-First"

### SSL and Social Meta Tags
- **index.html**: Added proper Open Graph and Twitter Card meta tags with absolute `https://hanzo.ai/` URLs
- Added canonical URL for SEO

### Removed Datacenter Location References
- Removed ALL specific location mentions, now uses "Global High-Performance Edge" messaging
- Updated to show: 15+ regions, auto-scaling, data residency controls
- Files updated:
  - `/src/pages/Security.tsx` - Global edge features instead of specific regions
  - `/src/components/base/Compliance.tsx` - Same treatment
  - `/src/pages/Status.tsx` - Generic region names (Americas, Europe, APAC, Edge)

### Honest Certification Claims (YC-Ready)
Updated 20+ files to reflect honest certification status (SOC 2 audit in progress, no false claims):
- Changed "SOC 2 Type II Certified" → "SOC 2 Audit in Progress" or removed
- Changed "HIPAA Compliant" → "HIPAA Ready", "Healthcare-ready", or "BAA Available"
- Changed "ISO 27001 certified" → Removed (not yet certified)
- Changed "SOC 2 compliant infrastructure" → "Enterprise security" or "Enterprise-grade security"
- Updated language across Security, Pricing, Cloud, Analytics, Team, and FAQ components
- **Files updated**:
  - `/src/pages/Security.tsx`
  - `/src/pages/Enterprise.tsx`
  - `/src/pages/Privacy.tsx`
  - `/src/pages/Identity.tsx`
  - `/src/pages/SolutionIndustries.tsx`
  - `/src/pages/OrganizationProfile.tsx`
  - `/src/pages/Calculator.tsx`
  - `/src/components/analytics/Security.tsx`
  - `/src/components/observability/Security.tsx`
  - `/src/components/base/Compliance.tsx`
  - `/src/components/cloud/Security.tsx`, `Features.tsx`, `CloudHero.tsx`
  - `/src/components/home2/Features.tsx`
  - `/src/components/sections/Base.tsx`
  - `/src/components/pricing/FeatureComparison.tsx`, `TeamEnterprisePlans.tsx`, `EnterpriseFreePlans.tsx`, `PricingFAQ.tsx`
  - `/src/components/team/AuditFeatures.tsx`
  - `/src/components/index5/AICloudSection.tsx`
  - `/src/components/zen/ProductsOverview.tsx`
  - `/src/components/machines/MachinesEnterprise.tsx`
  - `/src/components/hanzodev/FAQSection.tsx`
  - `/src/components/hanzoapp/FAQSection.tsx`
  - `/src/components/calculator/CostSummary.tsx`
  - `/src/constants/navigation.ts`

### Updated Desktop App Messaging and Type Safety
- **UI Update**: Updated `Extensions.tsx` to shift focus from "VS Code Extension" to "Desktop App" and "Browser Extensions", reflecting a broader product strategy.
- **Type Safety**:
  - Added `ZenModel` interface in `ZenModels.tsx` to replace `any`.
  - Added `Agent` interface in `AgentGallery.tsx` to replace `any`.
  - Improved typing in `Integration.tsx` and `Hero.tsx`.
- **Commit**: "Refactor types and update Extensions/Desktop App messaging"

## Recent Changes (2025-06-16)

### Updated Signup Button Styling
- **Issue**: White background signup buttons were not very visible and lacked proper hover states
- **Solution**: Updated all signup buttons across the site to have:
  - White background with gray border by default
  - On hover: transparent background with white text and white border
  - Smooth transition animations
- **Files Updated**:
  - `/src/components/pricing/PricingPlan.tsx` - Updated pricing plan buttons
  - `/src/components/Products.tsx` - Updated "Get Started Free" button
  - `/src/components/navigation/AuthButtons.tsx` - Updated navigation signup button
  - `/src/components/navigation/MobileMenu.tsx` - Updated mobile menu signup button
  - `/src/components/landing/HeroSection.tsx` - Updated landing page hero button
  - `/src/components/pricing/TeamPlanDetails.tsx` - Updated team plan configuration button

## Recent Changes (2025-04-07)

### 1. Fixed ProductsMenu Import in DesktopNav.tsx
- **Issue**: The ProductsMenu component had both named and default exports, but was imported as a default import in DesktopNav.tsx, causing an error: "lockdown-install.js:1:135422 'http://localhost:8080/src/components/navigation/products-menu/index.tsx' doesn't provide an export named: 'ProductsMenu'"
- **Solution**: Updated the import in DesktopNav.tsx to use a named import for consistency with other menu components.
- **Commit**: Current commit - "Fix ProductsMenu import in DesktopNav.tsx to use named import"


### 2. Fixed ProductsMenu Export/Import Issue
- **Issue**: The ProductsMenu component was exported with a named export but imported as a default export in DesktopNav.tsx, causing a module resolution error: "The requested module doesn't provide an export named: 'ProductsMenu'"
- **Solution**: Added default export to ProductsMenu and updated the import in DesktopNav.tsx to use a default import.
- **Commit**: [fdf6f92](https://github.com/hanzoai/hanzo.ai/commit/fdf6f92) - "Fix ProductsMenu export and update Node.js compatibility"

### 3. Updated Node.js Version Requirements
- **Issue**: The project required modern JavaScript features (nullish coalescing assignment operator) not supported in Node.js v14.
- **Solution**: Added .nvmrc file specifying Node.js v20 and updated package.json script to suppress warnings.
- **Commit**: [fdf6f92](https://github.com/hanzoai/hanzo.ai/commit/fdf6f92) - "Fix ProductsMenu export and update Node.js compatibility"



## Issues Identified

### 1. Component Export/Import Inconsistency (Historical)
- **Issue**: The ProductsMenu component was using a default export while being imported as a named export in DesktopNav.
- **Solution**: Changed ProductsMenu to use named export for consistency with other menu components.
- **Commit**: [68f3e2c](https://github.com/hanzoai/hanzo.ai/commit/68f3e2c) - "Fix: Change ProductsMenu to use named export for consistency"

### 2. Node.js Version Compatibility
- **Status**: RESOLVED
- **Issue**: The project required Node.js with support for modern JavaScript features.
- **Solution**: Added .nvmrc specifying Node.js v20 and configured package.json to suppress warnings.
- **Command to use**: 
  ```bash
  nvm use
  npm run dev
  ```

### 3. Security Vulnerabilities
- GitHub reports 2 moderate security vulnerabilities in the dependencies.
- **Recommendation**: Review and address these vulnerabilities using:
  ```bash
  npm audit fix
  # or for a more aggressive approach that might update to new major versions
  npm audit fix --force
  ```

## Project Structure Analysis
- The project is a React application using Vite as the build tool.
- Routing is handled by react-router-dom with separate routes for marketing pages and account pages.
- UI components are organized by feature/page in the components directory.
- The navigation system uses dropdown menus for Products, Solutions, and Resources sections.

## Next Steps
1. Upgrade Node.js to a compatible version (v18+).
2. Run `npm install` to ensure all dependencies are properly installed.
3. Address security vulnerabilities with `npm audit fix`.
4. Continue with feature development or bug fixes as needed.
