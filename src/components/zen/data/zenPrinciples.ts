
import { ZenPrinciple } from "../ZenPrincipleCard";

// Define the principles data - 36 principles in 6 disciplines
export const principles: ZenPrinciple[] = [
  // Empathy Discipline
  {
    number: "1",
    emoji: "🦅",
    title: "Autonomy",
    japaneseSymbol: "自律性",
    description: "Trust fully; freedom fuels genius.",
    discipline: "Empathy"
  },
  {
    number: "2",
    emoji: "⚖️",
    title: "Balance",
    japaneseSymbol: "均衡",
    description: "Steady wins; burnout loses every time.",
    discipline: "Empathy"
  },
  {
    number: "3",
    emoji: "🎓",
    title: "Customer Obsession",
    japaneseSymbol: "顧客中心主義",
    description: "Coach relentlessly; their victories yours.",
    discipline: "Empathy"
  },
  {
    number: "4",
    emoji: "🧘",
    title: "Humility",
    japaneseSymbol: "謙虚",
    description: "Speak softly; let results roar.",
    discipline: "Empathy"
  },
  {
    number: "5",
    emoji: "🛡️",
    title: "Integrity",
    japaneseSymbol: "誠実",
    description: "Principles never break; reputation never fades.",
    discipline: "Empathy"
  },
  {
    number: "6",
    emoji: "🤝",
    title: "Selflessness",
    japaneseSymbol: "無私",
    description: "Lift others; personal success follows.",
    discipline: "Empathy"
  },
  
  // Science Discipline
  {
    number: "7",
    emoji: "🌱",
    title: "Curiosity",
    japaneseSymbol: "好奇心",
    description: "Question always; truth never ends.",
    discipline: "Science"
  },
  {
    number: "8",
    emoji: "🔬",
    title: "Empiricism",
    japaneseSymbol: "経験主義",
    description: "Hypothesize, test; data settles debates.",
    discipline: "Science"
  },
  {
    number: "9",
    emoji: "🎯",
    title: "Precision",
    japaneseSymbol: "精度",
    description: "Measure twice; guess never.",
    discipline: "Science"
  },
  {
    number: "10",
    emoji: "✅",
    title: "Validation",
    japaneseSymbol: "検証",
    description: "Test assumptions hard; illusions crumble fast.",
    discipline: "Science"
  },
  {
    number: "11",
    emoji: "🧊",
    title: "Objectivity",
    japaneseSymbol: "客観性",
    description: "Ego out; results speak plainly.",
    discipline: "Science"
  },
  {
    number: "12",
    emoji: "🔄",
    title: "Repeatability",
    japaneseSymbol: "再現性",
    description: "Do it again; success repeats systematically.",
    discipline: "Science"
  },
  
  // Design Discipline
  {
    number: "13",
    emoji: "🌐",
    title: "Accessibility",
    japaneseSymbol: "アクセス性",
    description: "Open doors wide; adoption thrives naturally.",
    discipline: "Design"
  },
  {
    number: "14",
    emoji: "🎨",
    title: "Beauty",
    japaneseSymbol: "美",
    description: "Form speaks louder; aesthetics lift utility.",
    discipline: "Design"
  },
  {
    number: "15",
    emoji: "🔍",
    title: "Clarity",
    japaneseSymbol: "明晰",
    description: "Obvious is perfect; complexity hidden cleanly.",
    discipline: "Design"
  },
  {
    number: "16",
    emoji: "🎯",
    title: "Consistency",
    japaneseSymbol: "一貫性",
    description: "Uniform patterns; predictable results always.",
    discipline: "Design"
  },
  {
    number: "17",
    emoji: "📐",
    title: "Dimensionality",
    japaneseSymbol: "次元性",
    description: "Abstract artfully; complexity unseen.",
    discipline: "Design"
  },
  {
    number: "18",
    emoji: "🪶",
    title: "Simplicity",
    japaneseSymbol: "簡素",
    description: "Cut ruthlessly; essential alone remains.",
    discipline: "Design"
  },
  
  // Engineering Discipline
  {
    number: "19",
    emoji: "🔋",
    title: "Batteries Included",
    japaneseSymbol: "完全同梱",
    description: "Ready instantly; everything you need to start.",
    discipline: "Engineering"
  },
  {
    number: "20",
    emoji: "⚡",
    title: "Concurrency",
    japaneseSymbol: "並行性",
    description: "Parallel flows; frictionless scale.",
    discipline: "Engineering"
  },
  {
    number: "21",
    emoji: "🧩",
    title: "Composable",
    japaneseSymbol: "構成性",
    description: "Modular magic; pieces multiply power.",
    discipline: "Engineering"
  },
  {
    number: "22",
    emoji: "🔗",
    title: "Interoperable",
    japaneseSymbol: "相互運用性",
    description: "Integrate effortlessly; value compounds infinitely.",
    discipline: "Engineering"
  },
  {
    number: "23",
    emoji: "⚙️",
    title: "Orthogonal",
    japaneseSymbol: "直交性",
    description: "Each tool exact; no overlap, no waste.",
    discipline: "Engineering"
  },
  {
    number: "24",
    emoji: "📈",
    title: "Scalable",
    japaneseSymbol: "拡張性",
    description: "Growth limitless; obstacles removed at inception.",
    discipline: "Engineering"
  },
  
  // Scale Discipline
  {
    number: "25",
    emoji: "💥",
    title: "Disrupt",
    japaneseSymbol: "破壊的革新",
    description: "Invent boldly; competition irrelevant.",
    discipline: "Scale"
  },
  {
    number: "26",
    emoji: "🧪",
    title: "Experiment",
    japaneseSymbol: "実験",
    description: "Test quickly; iterate endlessly.",
    discipline: "Scale"
  },
  {
    number: "27",
    emoji: "📈",
    title: "Exponential",
    japaneseSymbol: "指数的成長",
    description: "Compound constantly; incremental fades.",
    discipline: "Scale"
  },
  {
    number: "28",
    emoji: "🌐",
    title: "Network Effects",
    japaneseSymbol: "ネットワーク効果",
    description: "Build ecosystems; influence spreads exponentially.",
    discipline: "Scale"
  },
  {
    number: "29",
    emoji: "⏱️",
    title: "Urgency",
    japaneseSymbol: "緊急性",
    description: "Act now; delays destroy opportunity.",
    discipline: "Scale"
  },
  {
    number: "30",
    emoji: "🚀",
    title: "Velocity",
    japaneseSymbol: "速度",
    description: "Ship fast; refine faster.",
    discipline: "Scale"
  },
  
  // Wisdom Discipline
  {
    number: "31",
    emoji: "🌊",
    title: "Adaptability",
    japaneseSymbol: "適応性",
    description: "Pivot sharply; failure fuels growth.",
    discipline: "Wisdom"
  },
  {
    number: "32",
    emoji: "🕸️",
    title: "Decentralization",
    japaneseSymbol: "分散化",
    description: "Distribute power; resilience born from autonomy.",
    discipline: "Wisdom"
  },
  {
    number: "33",
    emoji: "🗽",
    title: "Freedom",
    japaneseSymbol: "自由",
    description: "Tools unlocked; gatekeepers forgotten.",
    discipline: "Wisdom"
  },
  {
    number: "34",
    emoji: "⏳",
    title: "Longevity",
    japaneseSymbol: "長寿",
    description: "Build timelessly; greatness endures beyond lifetimes.",
    discipline: "Wisdom"
  },
  {
    number: "35",
    emoji: "🔐",
    title: "Security",
    japaneseSymbol: "セキュリティ",
    description: "Encryption first; privacy non-negotiable.",
    discipline: "Wisdom"
  },
  {
    number: "36",
    emoji: "☯️",
    title: "Zen",
    japaneseSymbol: "禅",
    description: "Calm mastery; effortless excellence every moment.",
    discipline: "Wisdom"
  }
];
