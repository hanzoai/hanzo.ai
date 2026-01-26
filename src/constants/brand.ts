/**
 * Brand Constants
 *
 * Centralized brand color system for consistent styling across the codebase.
 * Use these constants instead of hardcoded hex values.
 */

// Primary brand colors
export const BRAND = {
  primary: "#fd4444",
  secondary: "#ff6b6b",
  hover: "#e03e3e",
} as const;

// Tailwind-compatible class strings
export const brandClasses = {
  // Text colors
  text: {
    primary: "text-[#fd4444]",
    secondary: "text-[#ff6b6b]",
  },

  // Background colors
  bg: {
    primary: "bg-[#fd4444]",
    secondary: "bg-[#ff6b6b]",
    hover: "hover:bg-[#e03e3e]",
    primaryHover: "bg-[#fd4444] hover:bg-[#e03e3e]",
    secondaryHover: "bg-[#ff6b6b] hover:bg-[#fd4444]",
  },

  // Background with opacity
  bgOpacity: {
    5: "bg-[#fd4444]/5",
    10: "bg-[#fd4444]/10",
    15: "bg-[#fd4444]/15",
    20: "bg-[#fd4444]/20",
    30: "bg-[#fd4444]/30",
    secondary10: "bg-[#ff6b6b]/10",
    secondary20: "bg-[#ff6b6b]/20",
    secondary30: "bg-[#ff6b6b]/30",
  },

  // Border colors
  border: {
    primary: "border-[#fd4444]",
    secondary: "border-[#ff6b6b]",
    primaryOpacity20: "border-[#fd4444]/20",
    primaryOpacity30: "border-[#fd4444]/30",
    primaryOpacity40: "border-[#fd4444]/40",
    secondaryOpacity20: "border-[#ff6b6b]/20",
    secondaryOpacity30: "border-[#ff6b6b]/30",
    secondaryOpacity40: "border-[#ff6b6b]/40",
  },

  // Gradient patterns
  gradient: {
    primary: "from-[#fd4444] to-[#ff6b6b]",
    primaryReverse: "from-[#ff6b6b] to-[#fd4444]",
    primaryFade: "from-[#fd4444]/20 to-[#fd4444]/5",
    secondaryFade: "from-[#ff6b6b]/20 to-[#ff6b6b]/5",
    hero: "from-[#fd4444]/20 via-[#ff6b6b]/20 to-[#fd4444]/10",
  },

  // Common card patterns
  card: {
    primary: "bg-gradient-to-br from-[#fd4444]/20 to-[#fd4444]/5 border border-[#fd4444]/20 hover:border-[#fd4444]/40",
    secondary: "bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff6b6b]/5 border border-[#ff6b6b]/20 hover:border-[#ff6b6b]/40",
    primaryLight: "bg-gradient-to-br from-[#fd4444]/15 to-[#fd4444]/5 border border-[#fd4444]/20 hover:border-[#fd4444]/40",
    primaryStrong: "bg-gradient-to-br from-[#fd4444]/30 to-[#fd4444]/10 border border-[#fd4444]/20 hover:border-[#fd4444]/40",
    secondaryStrong: "bg-gradient-to-br from-[#ff6b6b]/30 to-[#ff6b6b]/10 border border-[#ff6b6b]/20 hover:border-[#ff6b6b]/40",
  },

  // Button patterns
  button: {
    primary: "bg-[#fd4444] hover:bg-[#e03e3e] text-white",
    secondary: "bg-[#ff6b6b] hover:bg-[#fd4444] text-white",
    outline: "border border-[#fd4444]/40 hover:border-[#fd4444] text-[#fd4444] hover:text-[#ff6b6b]",
    outlineSecondary: "border border-[#ff6b6b]/40 hover:border-[#ff6b6b] text-[#ff6b6b] hover:text-[#fd4444]",
    ghost: "hover:bg-[#fd4444]/10 text-[#fd4444]",
  },

  // Icon wrapper patterns
  iconWrapper: {
    primary: "bg-[#fd4444]/10 text-[#fd4444]",
    secondary: "bg-[#ff6b6b]/10 text-[#ff6b6b]",
    primaryRounded: "p-3 rounded-lg bg-[#fd4444]/20",
    secondaryRounded: "p-3 rounded-lg bg-[#ff6b6b]/20",
  },

  // Badge patterns
  badge: {
    primary: "bg-[#fd4444]/10 border border-[#fd4444]/30 text-[#fd4444]",
    secondary: "bg-[#ff6b6b]/10 border border-[#ff6b6b]/30 text-[#ff6b6b]",
  },

  // Focus ring patterns
  ring: {
    primary: "focus:ring-[#fd4444]",
    secondary: "focus:ring-[#ff6b6b]",
    primaryOffset: "focus:ring-2 focus:ring-[#fd4444] focus:ring-offset-2",
    secondaryOffset: "focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-2",
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
