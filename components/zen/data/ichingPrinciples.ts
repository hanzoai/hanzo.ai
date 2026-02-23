
import { HexagramLine } from '../svg/IChingHexagram';

export interface IChing {
  id: number;
  name: string;
  chineseName: string;
  pinyin: string;
  lines: HexagramLine[];
  principle: string;
  description: string;
}

// Helper function to create hexagram configurations
const hexagramConfig = {
  yang: { type: 'solid' as const },  // solid line
  yin: { type: 'broken' as const }   // broken line
};

export const ichingPrinciples: IChing[] = [
  // Traditional 64 hexagrams from I Ching
  {
    id: 1,
    name: "The Creative",
    chineseName: "乾",
    pinyin: "qián",
    lines: Array(6).fill(hexagramConfig.yang),
    principle: "Manifest pure potential",
    description: "Create through unwavering integrity and visionary clarity."
  },
  {
    id: 2,
    name: "The Receptive",
    chineseName: "坤",
    pinyin: "kūn",
    lines: Array(6).fill(hexagramConfig.yin),
    principle: "Nurture emerging possibilities",
    description: "Support without imposing; cultivate fertile conditions."
  },
  {
    id: 3,
    name: "Difficulty at the Beginning",
    chineseName: "屯",
    pinyin: "zhūn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Navigate beginning challenges",
    description: "Plant seeds amid uncertainty; trust the process of emergence."
  },
  {
    id: 4,
    name: "Youthful Folly",
    chineseName: "蒙",
    pinyin: "méng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Embrace beginner's mind",
    description: "Learn through guided exploration; build basic competencies."
  },
  {
    id: 5,
    name: "Waiting",
    chineseName: "需",
    pinyin: "xū",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Recognize appropriate timing",
    description: "Prepare during apparent inaction; build readiness for opportunity."
  },
  {
    id: 6,
    name: "Conflict",
    chineseName: "訟",
    pinyin: "sòng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Address tensions directly",
    description: "Transform opposition to insight; create clarity from friction."
  },
  {
    id: 7,
    name: "The Army",
    chineseName: "師",
    pinyin: "shī",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Organize collective effort",
    description: "Establish coherent structure; create coordinated momentum."
  },
  {
    id: 8,
    name: "Holding Together",
    chineseName: "比",
    pinyin: "bǐ",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Foster genuine connection",
    description: "Build aligned purpose; strengthen collective bonds."
  },
  {
    id: 9,
    name: "The Taming Power of the Small",
    chineseName: "小畜",
    pinyin: "xiǎo chù",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Accumulate strength gradually",
    description: "Nurture small gains; build momentum through incremental progress."
  },
  {
    id: 10,
    name: "Treading",
    chineseName: "履",
    pinyin: "lǚ",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Act with mindful awareness",
    description: "Proceed cautiously; maintain balance in challenging situations."
  },
  {
    id: 11,
    name: "Peace",
    chineseName: "泰",
    pinyin: "tài",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Cultivate harmonious conditions",
    description: "Foster balance and alignment; create stable foundations."
  },
  {
    id: 12,
    name: "Standstill",
    chineseName: "否",
    pinyin: "pǐ",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Recognize periods of stagnation",
    description: "Maintain inner strength; prepare for future opportunities."
  },
  {
    id: 13,
    name: "Fellowship with Men",
    chineseName: "同人",
    pinyin: "tóng rén",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Build inclusive communities",
    description: "Foster shared purpose; create unity through mutual respect."
  },
  {
    id: 14,
    name: "Great Possession",
    chineseName: "大有",
    pinyin: "dà yǒu",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Utilize abundant resources",
    description: "Manage wealth responsibly; create value for all stakeholders."
  },
  {
    id: 15,
    name: "Modesty",
    chineseName: "謙",
    pinyin: "qiān",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Cultivate humility and grace",
    description: "Act with understated confidence; recognize the value of others."
  },
  {
    id: 16,
    name: "Enthusiasm",
    chineseName: "豫",
    pinyin: "yù",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Embrace joyful engagement",
    description: "Act with inspired energy; create momentum through positive action."
  },
  {
    id: 17,
    name: "Following",
    chineseName: "隨",
    pinyin: "suí",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Adapt to evolving circumstances",
    description: "Respond flexibly to change; maintain alignment with emerging trends."
  },
  {
    id: 18,
    name: "Work on What Has Been Spoiled",
    chineseName: "蠱",
    pinyin: "gǔ",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Address decay and corruption",
    description: "Restore integrity; revitalize stagnant systems."
  },
  {
    id: 19,
    name: "Approach",
    chineseName: "臨",
    pinyin: "lín",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Prepare for new opportunities",
    description: "Anticipate future developments; build readiness for growth."
  },
  {
    id: 20,
    name: "Contemplation",
    chineseName: "觀",
    pinyin: "guān",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Observe with clarity and insight",
    description: "Gain perspective through detached awareness; understand underlying patterns."
  },
  {
    id: 21,
    name: "Biting Through",
    chineseName: "噬嗑",
    pinyin: "shì kè",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Overcome obstacles decisively",
    description: "Confront challenges directly; break through resistance with focused action."
  },
  {
    id: 22,
    name: "Grace",
    chineseName: "賁",
    pinyin: "bì",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Enhance through aesthetic refinement",
    description: "Cultivate beauty and elegance; create harmonious forms."
  },
  {
    id: 23,
    name: "Splitting Apart",
    chineseName: "剝",
    pinyin: "bō",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Recognize the process of decline",
    description: "Accept impermanence; prepare for transformation."
  },
  {
    id: 24,
    name: "Return",
    chineseName: "復",
    pinyin: "fù",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Renew through cyclical return",
    description: "Embrace new beginnings; restore vitality through regeneration."
  },
  {
    id: 25,
    name: "Innocence",
    chineseName: "无妄",
    pinyin: "wú wàng",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Act with spontaneous authenticity",
    description: "Follow natural impulses; trust intuitive guidance."
  },
  {
    id: 26,
    name: "The Taming Power of the Great",
    chineseName: "大畜",
    pinyin: "dà chù",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Accumulate strength through discipline",
    description: "Cultivate inner resources; build capacity through focused effort."
  },
  {
    id: 27,
    name: "The Corners of the Mouth",
    chineseName: "頤",
    pinyin: "yí",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Nourish and sustain growth",
    description: "Provide essential resources; cultivate supportive environments."
  },
  {
    id: 28,
    name: "Great Exceeding",
    chineseName: "大過",
    pinyin: "dà guò",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Navigate periods of excess",
    description: "Maintain balance in extreme situations; adapt to unusual pressures."
  },
  {
    id: 29,
    name: "The Abysmal",
    chineseName: "坎",
    pinyin: "kǎn",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Navigate challenging depths",
    description: "Maintain resilience in adversity; find strength in vulnerability."
  },
  {
    id: 30,
    name: "The Clinging",
    chineseName: "離",
    pinyin: "lí",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Illuminate through clarity",
    description: "Bring insight to complex situations; create understanding through focused awareness."
  },
  {
    id: 31,
    name: "Influence",
    chineseName: "咸",
    pinyin: "xián",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Cultivate genuine connection",
    description: "Build rapport through empathy; create resonance through authentic communication."
  },
  {
    id: 32,
    name: "Duration",
    chineseName: "恆",
    pinyin: "héng",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Sustain consistent effort",
    description: "Maintain momentum through perseverance; build lasting value through continuous improvement."
  },
  {
    id: 33,
    name: "Retreat",
    chineseName: "遯",
    pinyin: "dùn",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Withdraw with strategic timing",
    description: "Conserve energy; prepare for future opportunities."
  },
  {
    id: 34,
    name: "Great Power",
    chineseName: "大壯",
    pinyin: "dà zhuàng",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Exercise strength with integrity",
    description: "Apply power responsibly; maintain ethical alignment."
  },
  {
    id: 35,
    name: "Progress",
    chineseName: "晉",
    pinyin: "jìn",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Advance with clarity and purpose",
    description: "Move forward decisively; maintain focus on strategic goals."
  },
  {
    id: 36,
    name: "Darkening of the Light",
    chineseName: "明夷",
    pinyin: "míng yí",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Preserve inner vision during adversity",
    description: "Maintain hope in challenging times; protect core values."
  },
  {
    id: 37,
    name: "The Family",
    chineseName: "家人",
    pinyin: "jiā rén",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Cultivate harmonious relationships",
    description: "Foster mutual respect; build strong foundations through shared values."
  },
  {
    id: 38,
    name: "Opposition",
    chineseName: "睽",
    pinyin: "kuí",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Transform conflict into insight",
    description: "Find common ground; create understanding through diverse perspectives."
  },
  {
    id: 39,
    name: "Obstruction",
    chineseName: "蹇",
    pinyin: "jiǎn",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Navigate challenging obstacles",
    description: "Maintain resilience; find creative solutions to overcome adversity."
  },
  {
    id: 40,
    name: "Deliverance",
    chineseName: "解",
    pinyin: "xiè",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Release tension and resolve conflict",
    description: "Create clarity through resolution; restore balance through reconciliation."
  },
  {
    id: 41,
    name: "Decrease",
    chineseName: "損",
    pinyin: "sǔn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Simplify and streamline processes",
    description: "Reduce unnecessary complexity; focus on essential elements."
  },
  {
    id: 42,
    name: "Increase",
    chineseName: "益",
    pinyin: "yì",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Expand and amplify impact",
    description: "Enhance value through strategic growth; create positive ripple effects."
  },
  {
    id: 43,
    name: "Breakthrough",
    chineseName: "夬",
    pinyin: "guài",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Overcome resistance decisively",
    description: "Break through barriers; create momentum through focused action."
  },
  {
    id: 44,
    name: "Coming to Meet",
    chineseName: "姤",
    pinyin: "gòu",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Recognize subtle influences",
    description: "Be aware of emerging trends; adapt to changing conditions."
  },
  {
    id: 45,
    name: "Gathering Together",
    chineseName: "萃",
    pinyin: "cuì",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Unite diverse elements",
    description: "Create synergy through collaboration; build cohesive teams."
  },
  {
    id: 46,
    name: "Pushing Upward",
    chineseName: "升",
    pinyin: "shēng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Ascend through persistent effort",
    description: "Rise above limitations; achieve higher levels of accomplishment."
  },
  {
    id: 47,
    name: "Oppression",
    chineseName: "困",
    pinyin: "kùn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Endure hardship with inner strength",
    description: "Maintain resilience in adversity; find opportunity in constraint."
  },
  {
    id: 48,
    name: "The Well",
    chineseName: "井",
    pinyin: "jǐng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Provide essential resources",
    description: "Nourish and sustain growth; create lasting value through consistent contribution."
  },
  {
    id: 49,
    name: "Revolution",
    chineseName: "革",
    pinyin: "gé",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Transform through radical change",
    description: "Embrace innovation; disrupt stagnant systems to create new possibilities."
  },
  {
    id: 50,
    name: "The Cauldron",
    chineseName: "鼎",
    pinyin: "dǐng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Cultivate transformative processes",
    description: "Refine and integrate diverse elements; create valuable outcomes through synergistic interaction."
  },
  {
    id: 51,
    name: "The Arousing",
    chineseName: "震",
    pinyin: "zhèn",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Act with decisive energy",
    description: "Break through inertia; create momentum through inspired action."
  },
  {
    id: 52,
    name: "Keeping Still",
    chineseName: "艮",
    pinyin: "gèn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Maintain inner stillness",
    description: "Cultivate focused awareness; find strength in quiet contemplation."
  },
  {
    id: 53,
    name: "Gradual Development",
    chineseName: "漸",
    pinyin: "jiàn",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Progress through incremental steps",
    description: "Build momentum through consistent effort; achieve long-term goals through gradual advancement."
  },
  {
    id: 54,
    name: "The Marrying Maiden",
    chineseName: "歸妹",
    pinyin: "guī mèi",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Adapt to unconventional circumstances",
    description: "Find creative solutions; navigate complex relationships with flexibility and grace."
  },
  {
    id: 55,
    name: "Abundance",
    chineseName: "豐",
    pinyin: "fēng",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Celebrate success responsibly",
    description: "Share abundance with others; maintain balance and perspective."
  },
  {
    id: 56,
    name: "The Wanderer",
    chineseName: "旅",
    pinyin: "lǚ",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Adapt to unfamiliar environments",
    description: "Maintain inner stability; find opportunity in new experiences."
  },
  {
    id: 57,
    name: "The Gentle",
    chineseName: "巽",
    pinyin: "xùn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Influence through subtle persuasion",
    description: "Guide with gentle strength; create alignment through subtle communication."
  },
  {
    id: 58,
    name: "The Joyous",
    chineseName: "兌",
    pinyin: "duì",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Cultivate joyful connection",
    description: "Foster positive relationships; create harmony through shared enjoyment."
  },
  {
    id: 59,
    name: "Dispersion",
    chineseName: "渙",
    pinyin: "huàn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Dissolve stagnation and create flow",
    description: "Release tension; restore vitality through dynamic movement."
  },
  {
    id: 60,
    name: "Limitation",
    chineseName: "節",
    pinyin: "jié",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Establish clear boundaries",
    description: "Maintain balance through defined limits; create structure through disciplined constraint."
  },
  {
    id: 61,
    name: "Inner Truth",
    chineseName: "中孚",
    pinyin: "zhōng fú",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Align actions with inner values",
    description: "Act with integrity; create authenticity through genuine expression."
  },
  {
    id: 62,
    name: "The Taming Power of the Small",
    chineseName: "小過",
    pinyin: "xiǎo guò",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Navigate minor transgressions",
    description: "Maintain balance in delicate situations; adapt to subtle shifts in circumstance."
  },
  {
    id: 63,
    name: "After Completion",
    chineseName: "既濟",
    pinyin: "jì jì",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Maintain vigilance after success",
    description: "Anticipate future challenges; preserve stability through proactive awareness."
  },
  {
    id: 64,
    name: "Before Completion",
    chineseName: "未濟",
    pinyin: "wèi jì",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Embrace the potential of the unknown",
    description: "Explore new possibilities; maintain openness to emerging opportunities."
  },

  // Additional 24 principles to reach 88
  {
    id: 65,
    name: "Algorithmic Thinking",
    chineseName: "算",
    pinyin: "suàn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Structure logical processes",
    description: "Create systematic problem-solving approaches through step-by-step reasoning."
  },
  {
    id: 66,
    name: "Neural Integration",
    chineseName: "脑",
    pinyin: "nǎo",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Connect diverse systems",
    description: "Combine specialized functions to create emergent intelligence."
  },
  {
    id: 67,
    name: "Computational Efficiency",
    chineseName: "算",
    pinyin: "suàn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Optimize resource usage",
    description: "Balance speed and throughput with limited processing capabilities."
  },
  {
    id: 68,
    name: "Ethical Boundary",
    chineseName: "德",
    pinyin: "dé",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Establish moral frameworks",
    description: "Define and maintain principles for responsible AI actions."
  },
  {
    id: 69,
    name: "Learning Adaptation",
    chineseName: "习",
    pinyin: "xí",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Continuously evolve capabilities",
    description: "Improve through ongoing exploration and refinement of models."
  },
  {
    id: 70,
    name: "Data Integrity",
    chineseName: "据",
    pinyin: "jù",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Ensure reliable information",
    description: "Maintain accuracy and consistency in data sources and processing."
  },
  {
    id: 71,
    name: "Model Explainability",
    chineseName: "解",
    pinyin: "jiě",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Promote transparent reasoning",
    description: "Provide insights into how AI systems arrive at conclusions."
  },
  {
    id: 72,
    name: "Human-Centered Design",
    chineseName: "人",
    pinyin: "rén",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Prioritize human experience",
    description: "Create systems that serve human needs and capabilities first."
  },
  {
    id: 73,
    name: "Distributed Systems",
    chineseName: "分",
    pinyin: "fēn",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Create resilient networks",
    description: "Design systems with no single point of failure."
  },
  {
    id: 74,
    name: "Energy Efficiency",
    chineseName: "能",
    pinyin: "néng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Optimize resource usage",
    description: "Minimize computational waste while maximizing output."
  },
  {
    id: 75,
    name: "Knowledge Synthesis",
    chineseName: "知",
    pinyin: "zhī",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Integrate diverse insights",
    description: "Create coherent understanding from disparate information sources."
  },
  {
    id: 76,
    name: "Emergent Intelligence",
    chineseName: "智",
    pinyin: "zhì",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Foster collective wisdom",
    description: "Create systems where the whole exceeds the sum of parts."
  },
  {
    id: 77,
    name: "Transparent Reasoning",
    chineseName: "晰",
    pinyin: "xī",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Explain decision processes",
    description: "Make AI reasoning clear and understandable to humans."
  },
  {
    id: 78,
    name: "Algorithmic Fairness",
    chineseName: "公",
    pinyin: "gōng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Ensure equitable outcomes",
    description: "Design systems that avoid systemic bias and discrimination."
  },
  {
    id: 79,
    name: "Learning Capacity",
    chineseName: "学",
    pinyin: "xué",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Develop adaptive growth",
    description: "Create systems that improve through experience and feedback."
  },
  {
    id: 80,
    name: "Contextual Awareness",
    chineseName: "境",
    pinyin: "jìng",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang
    ],
    principle: "Understand situational nuance",
    description: "Respond appropriately to specific circumstances and environments."
  },
  {
    id: 81,
    name: "Graceful Degradation",
    chineseName: "退",
    pinyin: "tuì",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Fail safely and predictably",
    description: "Ensure systems maintain core functionality even when compromised."
  },
  {
    id: 82,
    name: "Technical Debt",
    chineseName: "债",
    pinyin: "zhài",
    lines: [
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Balance immediate needs with future costs",
    description: "Recognize and manage compromises in engineering quality."
  },
  {
    id: 83,
    name: "Effective Abstraction",
    chineseName: "象",
    pinyin: "xiàng",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Hide appropriate complexity",
    description: "Create intuitive interfaces to complex systems."
  },
  {
    id: 84,
    name: "Continuous Integration",
    chineseName: "合",
    pinyin: "hé",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Merge improvements frequently",
    description: "Maintain dynamic equilibrium between stability and innovation."
  },
  {
    id: 85,
    name: "Semantic Understanding",
    chineseName: "义",
    pinyin: "yì",
    lines: [
      hexagramConfig.yang, hexagramConfig.yang, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Grasp meaning beyond syntax",
    description: "Develop nuanced comprehension of human communication."
  },
  {
    id: 86,
    name: "Multimodal Perception",
    chineseName: "觉",
    pinyin: "jué",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang
    ],
    principle: "Integrate diverse sensory inputs",
    description: "Synthesize understanding across multiple information channels."
  },
  {
    id: 87,
    name: "Collaborative Intelligence",
    chineseName: "协",
    pinyin: "xié",
    lines: [
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yang,
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin
    ],
    principle: "Enhance human capabilities",
    description: "Design AI systems that complement rather than replace human intelligence."
  },
  {
    id: 88,
    name: "Harmonic Coherence",
    chineseName: "和",
    pinyin: "hé",
    lines: [
      hexagramConfig.yin, hexagramConfig.yang, hexagramConfig.yin,
      hexagramConfig.yang, hexagramConfig.yin, hexagramConfig.yin
    ],
    principle: "Create balanced wholeness",
    description: "Integrate all principles into coherent, ethical AI systems."
  }
];
