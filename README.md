
# Hanzo AI Website

A modern, responsive website for Hanzo AI built with React, TypeScript, and Tailwind CSS.

## Project Structure

The project follows a component-based architecture with the following structure:

```
src/
  ├── components/      # React components
  │   ├── ui/          # UI components (buttons, cards, etc.)
  │   ├── platform/    # Platform-specific components
  │   ├── cloud/       # Cloud-specific components
  │   └── index3/      # Homepage components
  ├── constants/       # Constants and configuration
  ├── hooks/           # React hooks
  ├── lib/             # Utility functions
  └── pages/           # Page components
```

## Styling and Layout Guidelines

### Typography

- We use a consistent typographic scale across all pages
- Main headings: `text-5xl md:text-6xl lg:text-7xl` with `font-bold tracking-tight`
- Secondary headings: `text-3xl md:text-5xl` with `font-bold`
- Body text: `text-lg` for normal text, `text-xl` for emphasized text
- Every page should have a pre-heading with the format:
  ```jsx
  <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
    AI Engineering Platform
  </span>
  ```

### Layout and Spacing

- Every section should have consistent vertical padding: `py-32`
- Use a max-width container for content: `max-w-7xl mx-auto`
- Maintain consistent horizontal padding with: `px-4 sm:px-6 lg:px-8`
- Use the grid system with responsive breakpoints:
  ```jsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  ```
- Always include sufficient whitespace between sections (min 8rem)

### Hero Sections

All hero sections should follow this structure:
1. Include the "AI Engineering Platform" pre-heading with purple background
2. Use ChromeText for the main heading
3. Include a concise subheading that explains the value proposition
4. Add call-to-action buttons with gradient backgrounds
5. Consider adding subtle animations with Framer Motion
6. Ensure proper spacing (py-32) and responsive behavior

### Chrome Text Component

The `ChromeText` component is used for headings with a metallic gradient effect:

```jsx
<ChromeText 
  as="h2" 
  className="text-3xl md:text-5xl font-bold mb-4"
  preHeading="Optional Pre-Heading"
  preHeadingClassName="optional-additional-classes"
  style={{
    backgroundPosition: `${mouseX}% ${mouseY}%`,
  }}
>
  Your Heading Text
</ChromeText>
```

Props:
- `as`: HTML element to render (h1, h2, etc.)
- `className`: Additional classes for the heading
- `preHeading`: Optional text to show above the heading
- `preHeadingClassName`: Additional classes for the pre-heading
- `style`: Additional styles including backgroundPosition for the reflection effect

### Mockup Components

When adding UI mockups:

1. Create self-contained components for mockups
2. Use responsive design patterns
3. Add subtle animations to enhance visual appeal
4. Include realistic-looking data and UI elements

For cloud console mockups, follow the style in `AIPlatformSection.tsx`.
For platform mockups, follow the style in `DXPlatform.tsx`.

## Making Updates

When making updates to the website:

1. Keep styling consistent across all pages
2. Maintain proper spacing between elements
3. Ensure all components are responsive
4. Keep large components refactored into smaller, focused pieces
5. Follow the established UI patterns and color schemes
6. Use the Chrome Text component for main headings
7. Add appropriate pre-headings to each major section

## Adding New Pages

When adding new pages:

1. Create a new page component in the `src/pages` directory
2. Include the proper pre-heading and ChromeText heading
3. Add the page to the appropriate routes in `App.tsx`
4. Follow the established layout patterns:
   - Pre-heading (AI Engineering Platform)
   - ChromeText main heading
   - Concise description
   - Clear call-to-action buttons
   - Consistent spacing (py-32)
5. Ensure the page is fully responsive

## Animations

The website uses Framer Motion for animations. When adding new animations:

1. Use consistent animation patterns:
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
   >
   ```
2. Stagger animations for related elements
3. Use viewport animations for scrolling sections:
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
   >
   ```

## Modifying Feature Sections

When adding or modifying feature sections:
1. Use a consistent grid layout (1, 2, or 3 columns depending on content)
2. Use icons from lucide-react library with matching colors
3. Keep descriptions concise and focused on benefits
4. Use ChromeText for section headings
5. Add subtle hover effects to interactive elements
6. Include proper spacing between items

## Responsive Design

All components must be fully responsive:
1. Use flexible layouts with grid and flex
2. Use responsive text sizes (text-base md:text-lg lg:text-xl)
3. Stack elements vertically on mobile, horizontally on desktop
4. Ensure sufficient spacing on all device sizes
5. Test all changes across multiple viewport sizes
6. Use Tailwind's responsive prefixes consistently (sm, md, lg, xl)

## UI Component Library

Most UI components use the shadcn/ui library found in `src/components/ui/`. When creating new UI elements:
1. Check if a shadcn component already exists for your need
2. Follow the established patterns and styling
3. Extend existing components rather than creating new ones
4. Maintain accessibility across all interactive elements

## Typography Scale

Follow this typography scale consistently:
- Headings:
  - h1: `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
  - h2: `text-3xl md:text-5xl font-bold`
  - h3: `text-2xl font-bold`
  - h4: `text-xl font-semibold`
- Body:
  - Large: `text-xl text-neutral-300`
  - Default: `text-lg text-neutral-400`
  - Small: `text-base text-neutral-500`
  - Caption: `text-sm text-neutral-500`

## Color System

Use these color classes consistently:
- Primary text: `text-[var(--white)]` (headings and important text)
- Secondary text: `text-neutral-300` (body text)
- Muted text: `text-neutral-400` or `text-neutral-500` (less important text)
- Primary accent: `text-purple-400` or background `bg-purple-600`
- Secondary accent: `text-blue-400` or background `bg-blue-600`
- Backgrounds: `bg-[var(--black)]`, `bg-gray-900/50`, or `bg-gray-900/20`
- Borders: `border-gray-800` or `border-purple-500/30` for accents
