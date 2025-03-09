
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
4. Follow the established layout patterns
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
