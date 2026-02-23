/**
 * Maps feature color strings to Tailwind CSS color classes
 * This is needed because Tailwind doesn't support dynamic class names via string interpolation
 *
 * NOTE: All colors now map to brand colors for consistency.
 * Use 'primary' or 'secondary' for brand color variations.
 */
export const getColorClasses = (color: string, type: 'gradient' | 'border' | 'text', isHovered: boolean) => {
  // All colors now use brand palette
  const colorMap: Record<string, Record<string, string>> = {
    // Primary brand color
    brand: {
      gradient: isHovered ? 'from-white/30 to-white/10' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground'
    },
    primary: {
      gradient: isHovered ? 'from-white/30 to-white/10' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground'
    },
    // Secondary brand color
    secondary: {
      gradient: isHovered ? 'from-white/20 to-white/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground/70'
    },
    // Legacy color mappings - all redirect to brand colors
    red: {
      gradient: isHovered ? 'from-white/30 to-white/10' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground'
    },
    purple: {
      gradient: isHovered ? 'from-white/30 to-white/10' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground'
    },
    blue: {
      gradient: isHovered ? 'from-white/30 to-white/10' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground'
    },
    indigo: {
      gradient: isHovered ? 'from-white/20 to-white/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground/70'
    },
    cyan: {
      gradient: isHovered ? 'from-white/30 to-white/10' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground'
    },
    amber: {
      gradient: isHovered ? 'from-white/20 to-white/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground/70'
    },
    rose: {
      gradient: isHovered ? 'from-white/20 to-white/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground/70'
    },
    orange: {
      gradient: isHovered ? 'from-white/20 to-white/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-border' : 'border-gray-700/20',
      text: 'text-foreground/70'
    }
  };

  return colorMap[color]?.[type] || colorMap.brand[type];
};
