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
      gradient: isHovered ? 'from-[#ffffff]/30 to-[#ff6b6b]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ffffff]/20' : 'border-gray-700/20',
      text: 'text-[#ffffff]'
    },
    primary: {
      gradient: isHovered ? 'from-[#ffffff]/30 to-[#ff6b6b]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ffffff]/20' : 'border-gray-700/20',
      text: 'text-[#ffffff]'
    },
    // Secondary brand color
    secondary: {
      gradient: isHovered ? 'from-[#ff6b6b]/30 to-[#ffffff]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ff6b6b]/20' : 'border-gray-700/20',
      text: 'text-[#ff6b6b]'
    },
    // Legacy color mappings - all redirect to brand colors
    red: {
      gradient: isHovered ? 'from-[#ffffff]/30 to-[#ff6b6b]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ffffff]/20' : 'border-gray-700/20',
      text: 'text-[#ffffff]'
    },
    purple: {
      gradient: isHovered ? 'from-[#ffffff]/30 to-[#ff6b6b]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ffffff]/20' : 'border-gray-700/20',
      text: 'text-[#ffffff]'
    },
    blue: {
      gradient: isHovered ? 'from-[#ffffff]/30 to-[#ff6b6b]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ffffff]/20' : 'border-gray-700/20',
      text: 'text-[#ffffff]'
    },
    indigo: {
      gradient: isHovered ? 'from-[#ff6b6b]/30 to-[#ffffff]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ff6b6b]/20' : 'border-gray-700/20',
      text: 'text-[#ff6b6b]'
    },
    cyan: {
      gradient: isHovered ? 'from-[#ffffff]/30 to-[#ff6b6b]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ffffff]/20' : 'border-gray-700/20',
      text: 'text-[#ffffff]'
    },
    amber: {
      gradient: isHovered ? 'from-[#ff6b6b]/30 to-[#ffffff]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ff6b6b]/20' : 'border-gray-700/20',
      text: 'text-[#ff6b6b]'
    },
    rose: {
      gradient: isHovered ? 'from-[#ff6b6b]/30 to-[#ffffff]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ff6b6b]/20' : 'border-gray-700/20',
      text: 'text-[#ff6b6b]'
    },
    orange: {
      gradient: isHovered ? 'from-[#ff6b6b]/30 to-[#ffffff]/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-[#ff6b6b]/20' : 'border-gray-700/20',
      text: 'text-[#ff6b6b]'
    }
  };

  return colorMap[color]?.[type] || colorMap.brand[type];
};
