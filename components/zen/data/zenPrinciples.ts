'use client'

import { ZenPrinciple } from "../ZenPrincipleCard";

// Define the 64 principles data - 8 principles in 8 disciplines
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
    description: "Quiet confidence; greatness emerges naturally.",
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
    description: "Elevate others; personal success follows.",
    discipline: "Empathy"
  },
  {
    number: "7",
    emoji: "🗣️",
    title: "Listening",
    japaneseSymbol: "傾聴",
    description: "Understand first; speak later.",
    discipline: "Empathy"
  },
  {
    number: "8",
    emoji: "🤲",
    title: "Compassion",
    japaneseSymbol: "思いやり",
    description: "Kindness scales infinitely; harshness limits growth.",
    discipline: "Empathy"
  },
  
  // Science Discipline
  {
    number: "9",
    emoji: "🌱",
    title: "Curiosity",
    japaneseSymbol: "好奇心",
    description: "Question always; truth never ends.",
    discipline: "Science"
  },
  {
    number: "10",
    emoji: "🔬",
    title: "Empiricism",
    japaneseSymbol: "経験主義",
    description: "Hypothesize, measure; reality defines truth.",
    discipline: "Science"
  },
  {
    number: "11",
    emoji: "🎯",
    title: "Precision",
    japaneseSymbol: "精度",
    description: "Discipline in data; eliminate guesswork completely.",
    discipline: "Science"
  },
  {
    number: "12",
    emoji: "✅",
    title: "Validation",
    japaneseSymbol: "検証",
    description: "Test assumptions hard; illusions crumble fast.",
    discipline: "Science"
  },
  {
    number: "13",
    emoji: "🧊",
    title: "Objectivity",
    japaneseSymbol: "客観性",
    description: "Ego out; results speak plainly.",
    discipline: "Science"
  },
  {
    number: "14",
    emoji: "🔄",
    title: "Repeatability",
    japaneseSymbol: "再現性",
    description: "Do it again; success repeats systematically.",
    discipline: "Science"
  },
  {
    number: "15",
    emoji: "📊",
    title: "Measurement",
    japaneseSymbol: "測定",
    description: "Quantify thoroughly; intuition verified by data.",
    discipline: "Science"
  },
  {
    number: "16",
    emoji: "🧪",
    title: "Experimentation",
    japaneseSymbol: "実験",
    description: "Try boldly; learn ceaselessly.",
    discipline: "Science"
  },
  
  // Design Discipline
  {
    number: "17",
    emoji: "🌐",
    title: "Accessibility",
    japaneseSymbol: "アクセス性",
    description: "Open doors wide; adoption thrives naturally.",
    discipline: "Design"
  },
  {
    number: "18",
    emoji: "🎨",
    title: "Beauty",
    japaneseSymbol: "美",
    description: "Form speaks louder; aesthetics lift utility.",
    discipline: "Design"
  },
  {
    number: "19",
    emoji: "🔍",
    title: "Clarity",
    japaneseSymbol: "明晰",
    description: "Obvious is perfect; complexity hidden cleanly.",
    discipline: "Design"
  },
  {
    number: "20",
    emoji: "🎯",
    title: "Consistency",
    japaneseSymbol: "一貫性",
    description: "Uniform patterns; predictable results always.",
    discipline: "Design"
  },
  {
    number: "21",
    emoji: "📐",
    title: "Dimensionality",
    japaneseSymbol: "次元性",
    description: "Abstract artfully; complexity unseen.",
    discipline: "Design"
  },
  {
    number: "22",
    emoji: "🪶",
    title: "Simplicity",
    japaneseSymbol: "簡素",
    description: "Cut ruthlessly; essential alone remains.",
    discipline: "Design"
  },
  {
    number: "23",
    emoji: "💫",
    title: "Elegance",
    japaneseSymbol: "優雅",
    description: "Find hidden patterns; reveal underlying harmony.",
    discipline: "Design"
  },
  {
    number: "24",
    emoji: "🌊",
    title: "Flow",
    japaneseSymbol: "流れ",
    description: "Remove friction; natural motion prevails.",
    discipline: "Design"
  },
  
  // Engineering Discipline
  {
    number: "25",
    emoji: "🔋",
    title: "Batteries Included",
    japaneseSymbol: "完全同梱",
    description: "Ready instantly; everything you need to start.",
    discipline: "Engineering"
  },
  {
    number: "26",
    emoji: "⚡",
    title: "Concurrency",
    japaneseSymbol: "並行性",
    description: "Parallel flows; frictionless scale.",
    discipline: "Engineering"
  },
  {
    number: "27",
    emoji: "🧩",
    title: "Composable",
    japaneseSymbol: "構成性",
    description: "Modular magic; pieces multiply power.",
    discipline: "Engineering"
  },
  {
    number: "28",
    emoji: "🔗",
    title: "Interoperable",
    japaneseSymbol: "相互運用性",
    description: "Integrate effortlessly; value compounds infinitely.",
    discipline: "Engineering"
  },
  {
    number: "29",
    emoji: "⚙️",
    title: "Orthogonal",
    japaneseSymbol: "直交性",
    description: "Each tool exact; no overlap, no waste.",
    discipline: "Engineering"
  },
  {
    number: "30",
    emoji: "📈",
    title: "Scalable",
    japaneseSymbol: "拡張性",
    description: "Growth limitless; obstacles removed at inception.",
    discipline: "Engineering"
  },
  {
    number: "31",
    emoji: "🧠",
    title: "Self-Healing",
    japaneseSymbol: "自己修復",
    description: "Anticipate failure; recovery automatic.",
    discipline: "Engineering"
  },
  {
    number: "32",
    emoji: "📦",
    title: "Encapsulation",
    japaneseSymbol: "カプセル化",
    description: "Hide complexity; expose clarity.",
    discipline: "Engineering"
  },
  
  // Scale Discipline
  {
    number: "33",
    emoji: "💥",
    title: "Disruption",
    japaneseSymbol: "破壊的革新",
    description: "Reinvent boldly; transcend competition entirely.",
    discipline: "Scale"
  },
  {
    number: "34",
    emoji: "🧪",
    title: "Experimentation",
    japaneseSymbol: "実験",
    description: "Test quickly; iterate endlessly.",
    discipline: "Scale"
  },
  {
    number: "35",
    emoji: "📈",
    title: "Exponentiality",
    japaneseSymbol: "指数的成長",
    description: "Compound constantly; incremental fades.",
    discipline: "Scale"
  },
  {
    number: "36",
    emoji: "🚀",
    title: "Velocity",
    japaneseSymbol: "速度",
    description: "Ship fast; refine faster.",
    discipline: "Scale"
  },
  {
    number: "37",
    emoji: "⏱️",
    title: "Urgency",
    japaneseSymbol: "緊急性",
    description: "Act now; delays destroy opportunity.",
    discipline: "Scale"
  },
  {
    number: "38",
    emoji: "🌐",
    title: "Network Effects",
    japaneseSymbol: "ネットワーク効果",
    description: "Ecosystems built intentionally; influence multiplies exponentially.",
    discipline: "Scale"
  },
  {
    number: "39",
    emoji: "🔥",
    title: "Momentum",
    japaneseSymbol: "勢い",
    description: "Keep moving; friction fades with speed.",
    discipline: "Scale"
  },
  {
    number: "40",
    emoji: "🌍",
    title: "Global Thinking",
    japaneseSymbol: "世界的思考",
    description: "Design borderless; reach limitless.",
    discipline: "Scale"
  },
  
  // Wisdom Discipline
  {
    number: "41",
    emoji: "🌊",
    title: "Adaptability",
    japaneseSymbol: "適応性",
    description: "Pivot sharply; fluid response accelerates evolution.",
    discipline: "Wisdom"
  },
  {
    number: "42",
    emoji: "🕸️",
    title: "Decentralization",
    japaneseSymbol: "分散化",
    description: "Distribute power; resilience born from autonomy.",
    discipline: "Wisdom"
  },
  {
    number: "43",
    emoji: "🗽",
    title: "Freedom",
    japaneseSymbol: "自由",
    description: "Democratize creativity; tools liberated, gatekeepers removed.",
    discipline: "Wisdom"
  },
  {
    number: "44",
    emoji: "⏳",
    title: "Longevity",
    japaneseSymbol: "長寿",
    description: "Build timelessly; greatness endures beyond lifetimes.",
    discipline: "Wisdom"
  },
  {
    number: "45",
    emoji: "🔐",
    title: "Security",
    japaneseSymbol: "セキュリティ",
    description: "Encryption first; privacy non-negotiable.",
    discipline: "Wisdom"
  },
  {
    number: "46",
    emoji: "☯️",
    title: "Zen",
    japaneseSymbol: "禅",
    description: "Calm mastery; effortless excellence every moment.",
    discipline: "Wisdom"
  },
  {
    number: "47",
    emoji: "🌱",
    title: "Sustainability",
    japaneseSymbol: "持続可能性",
    description: "Resource wisely; future generations inherit our decisions.",
    discipline: "Wisdom"
  },
  {
    number: "48",
    emoji: "🧘‍♀️",
    title: "Mindfulness",
    japaneseSymbol: "マインドフルネス",
    description: "Present focus; chaos calms naturally.",
    discipline: "Wisdom"
  },
  
  // Harmony Discipline
  {
    number: "49",
    emoji: "🌈",
    title: "Integration",
    japaneseSymbol: "統合",
    description: "Unite systems; whole exceeds parts.",
    discipline: "Harmony"
  },
  {
    number: "50",
    emoji: "🤲",
    title: "Collaboration",
    japaneseSymbol: "協力",
    description: "Share freely; collective wisdom ascends.",
    discipline: "Harmony"
  },
  {
    number: "51",
    emoji: "🌱",
    title: "Organic Growth",
    japaneseSymbol: "有機的成長",
    description: "Natural scaling; forced expansion withers.",
    discipline: "Harmony"
  },
  {
    number: "52",
    emoji: "🔄",
    title: "Reciprocity",
    japaneseSymbol: "互恵",
    description: "Give generously; receive abundantly.",
    discipline: "Harmony"
  },
  {
    number: "53",
    emoji: "🧠",
    title: "Collective Intelligence",
    japaneseSymbol: "集合知性",
    description: "Many minds; singular brilliance.",
    discipline: "Harmony"
  },
  {
    number: "54",
    emoji: "🔮",
    title: "Vision Alignment",
    japaneseSymbol: "ビジョン整合",
    description: "Shared purpose; diverse paths unified.",
    discipline: "Harmony"
  },
  {
    number: "55",
    emoji: "🌊",
    title: "Fluid Adaptation",
    japaneseSymbol: "流動的適応",
    description: "Like water flowing; obstacles become opportunities.",
    discipline: "Harmony"
  },
  {
    number: "56",
    emoji: "🎵",
    title: "Resonance",
    japaneseSymbol: "共鳴",
    description: "Right frequency; amplified impact.",
    discipline: "Harmony"
  },
  
  // Mastery Discipline
  {
    number: "57",
    emoji: "🔄",
    title: "Continuous Learning",
    japaneseSymbol: "継続学習",
    description: "Knowledge endless; curiosity eternal.",
    discipline: "Mastery"
  },
  {
    number: "58",
    emoji: "⚔️",
    title: "Discipline",
    japaneseSymbol: "規律",
    description: "Daily practice; eventual mastery.",
    discipline: "Mastery"
  },
  {
    number: "59",
    emoji: "🧲",
    title: "Focus",
    japaneseSymbol: "集中",
    description: "Single point attention; distractions fade away.",
    discipline: "Mastery"
  },
  {
    number: "60",
    emoji: "🗺️",
    title: "Systems Thinking",
    japaneseSymbol: "システム思考",
    description: "See connections; understand wholeness.",
    discipline: "Mastery"
  },
  {
    number: "61",
    emoji: "💎",
    title: "Refinement",
    japaneseSymbol: "洗練",
    description: "Polish endlessly; perfection approached asymptotically.",
    discipline: "Mastery"
  },
  {
    number: "62",
    emoji: "🔥",
    title: "Passion",
    japaneseSymbol: "情熱",
    description: "Love deeply; work transcends effort.",
    discipline: "Mastery"
  },
  {
    number: "63",
    emoji: "🎓",
    title: "Mentorship",
    japaneseSymbol: "指導",
    description: "Guide others; deepen own understanding.",
    discipline: "Mastery"
  },
  {
    number: "64",
    emoji: "⚡",
    title: "Effortless Action",
    japaneseSymbol: "無為自然",
    description: "Perfect practice; transcendent performance.",
    discipline: "Mastery"
  }
];