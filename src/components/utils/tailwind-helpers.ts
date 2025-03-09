
/**
 * Maps feature color strings to Tailwind CSS color classes
 * This is needed because Tailwind doesn't support dynamic class names via string interpolation
 */
export const getColorClasses = (color: string, type: 'gradient' | 'border' | 'text', isHovered: boolean) => {
  const colorMap = {
    purple: {
      gradient: isHovered ? 'from-purple-900/30 to-purple-800/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-purple-500/20' : 'border-gray-700/20',
      text: 'text-purple-400'
    },
    blue: {
      gradient: isHovered ? 'from-blue-900/30 to-blue-800/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-blue-500/20' : 'border-gray-700/20',
      text: 'text-blue-400'
    },
    indigo: {
      gradient: isHovered ? 'from-indigo-900/30 to-indigo-800/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-indigo-500/20' : 'border-gray-700/20',
      text: 'text-indigo-400'
    },
    cyan: {
      gradient: isHovered ? 'from-cyan-900/30 to-cyan-800/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-cyan-500/20' : 'border-gray-700/20',
      text: 'text-cyan-400'
    },
    emerald: {
      gradient: isHovered ? 'from-emerald-900/30 to-emerald-800/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-emerald-500/20' : 'border-gray-700/20',
      text: 'text-emerald-400'
    },
    amber: {
      gradient: isHovered ? 'from-amber-900/30 to-amber-800/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-amber-500/20' : 'border-gray-700/20',
      text: 'text-amber-400'
    },
    rose: {
      gradient: isHovered ? 'from-rose-900/30 to-rose-800/30' : 'from-gray-900/30 to-gray-800/30',
      border: isHovered ? 'border-rose-500/20' : 'border-gray-700/20',
      text: 'text-rose-400'
    }
  };

  return colorMap[color]?.[type] || colorMap.purple[type];
};
