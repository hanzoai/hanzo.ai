/**
 * Brand Constants
 *
 * Centralized brand color system for consistent styling across the codebase.
 * Use these constants instead of hardcoded hex values.
 */

// Primary brand colors (monochrome)
export const BRAND = {
  primary: "#ffffff",
  secondary: "#d4d4d4",
  hover: "#a3a3a3",
} as const;

// Tailwind-compatible class strings
export const brandClasses = {
  // Text colors
  text: {
    primary: "text-white/70",
    secondary: "text-white/70",
  },

  // Background colors
  bg: {
    primary: "bg-white/10",
    secondary: "bg-white/10",
    hover: "hover:bg-white/20",
    primaryHover: "bg-white/10 hover:bg-white/20",
    secondaryHover: "bg-white/10 hover:bg-white/15",
  },

  // Background with opacity
  bgOpacity: {
    5: "bg-white/5",
    10: "bg-white/10",
    15: "bg-white/15",
    20: "bg-white/20",
    30: "bg-white/30",
    secondary10: "bg-white/10",
    secondary20: "bg-white/20",
    secondary30: "bg-white/30",
  },

  // Border colors
  border: {
    primary: "border-white/20",
    secondary: "border-white/20",
    primaryOpacity20: "border-white/20",
    primaryOpacity30: "border-white/30",
    primaryOpacity40: "border-white/40",
    secondaryOpacity20: "border-white/20",
    secondaryOpacity30: "border-white/30",
    secondaryOpacity40: "border-white/40",
  },

  // Gradient patterns
  gradient: {
    primary: "from-white/20 to-white/10",
    primaryReverse: "from-white/20 to-white/10",
    primaryFade: "from-white/20 to-white/10",
    secondaryFade: "from-white/20 to-white/10",
    hero: "from-white/20 via-white/15 to-white/10",
  },

  // Common card patterns
  card: {
    primary: "bg-gradient-to-br from-white/20 to-white/10 border border-white/20 hover:border-white/40",
    secondary: "bg-gradient-to-br from-white/20 to-white/10 border border-white/20 hover:border-white/40",
    primaryLight: "bg-gradient-to-br from-white/15 to-white/5 border border-white/20 hover:border-white/40",
    primaryStrong: "bg-gradient-to-br from-white/25 to-white/15 border border-white/20 hover:border-white/40",
    secondaryStrong: "bg-gradient-to-br from-white/25 to-white/15 border border-white/20 hover:border-white/40",
  },

  // Button patterns
  button: {
    primary: "bg-white/10 hover:bg-white/20 text-white",
    secondary: "bg-white/10 hover:bg-white/15 text-white",
    outline: "border border-white/40 hover:border-white/60 text-white/70 hover:text-white",
    outlineSecondary: "border border-white/40 hover:border-white/60 text-white/70 hover:text-white",
    ghost: "hover:bg-white/10 text-white/70",
  },

  // Icon wrapper patterns
  iconWrapper: {
    primary: "bg-white/10 text-white/70",
    secondary: "bg-white/10 text-white/70",
    primaryRounded: "p-3 rounded-lg bg-white/20",
    secondaryRounded: "p-3 rounded-lg bg-white/20",
  },

  // Badge patterns
  badge: {
    primary: "bg-white/10 border border-white/30 text-white/70",
    secondary: "bg-white/10 border border-white/30 text-white/70",
  },

  // Focus ring patterns
  ring: {
    primary: "focus:ring-white/30",
    secondary: "focus:ring-white/20",
    primaryOffset: "focus:ring-2 focus:ring-white/30 focus:ring-offset-2",
    secondaryOffset: "focus:ring-2 focus:ring-white/20 focus:ring-offset-2",
  },
} as const;

// Partner data for reusable partner cards
export const partners = {
  hanzoAgency: {
    name: "Hanzo Agency",
    description: "Our AI-powered creative agency helps brands transform their digital presence with cutting-edge design, content, and marketing strategies powered by artificial intelligence.",
    url: "https://hanzo.agency",
    tagline: "AI-powered creative & marketing",
    color: "primary" as const,
  },
  senseiGroup: {
    name: "Sensei Group",
    description: "Our collective of fractional CXOs and industry experts help enterprises implement transformative technology solutions and drive strategic growth initiatives.",
    url: "https://sensei.group",
    tagline: "Enterprise transformation experts",
    color: "secondary" as const,
  },
} as const;

export type BrandColor = "primary" | "secondary";
