import {
  Heart, Layers, Star, Rocket, Scale,
  Shield, PanelTop, Wrench, Combine, RefreshCw, ScanLine,
  MountainSnow, Binary, SlidersHorizontal, Wand2, Zap, Flame,
  Leaf, Cloud, Wind, Sun, FlowerIcon, Waves, Droplets,
  TreePine, Mountain, Scroll, Milestone, AlignJustify, ChevronsUp,
  Timer, CircleDot, Gift, Eye, Sparkles, GraduationCap, Feather, Lightbulb,
  Infinity, ArrowUpDown, Rabbit, Blocks, Building, Navigation, Compass,
  Hexagon, Loader, Gem, Network, Fingerprint, Hourglass, Construction,
  Box, Lock, CalendarDays, HeartHandshake, Flag, Footprints, ArrowRight,
  Banknote, Users, XCircle, CheckCircle2,
  LucideIcon
} from "lucide-react";

export interface Hexagram {
  id: number;
  title: string;
  chineseTitle: string;
  pinyin: string;
  category: string;
  description: string;
  icon: LucideIcon;
  principles: string[];
}

export const hexagramsData: Hexagram[] = [
  {
    id: 1,
    title: "Creative Force",
    chineseTitle: "乾",
    pinyin: "qián",
    category: "The Foundation",
    description: "Initiating transformative action with visionary clarity",
    icon: Zap,
    principles: [
      "Initiate transformative action",
      "Manifest pure potential",
      "Lead with visionary clarity",
      "Embody unwavering integrity",
      "Sustain persistent energy",
      "Create through pure will"
    ]
  },
  {
    id: 2,
    title: "Receptivity",
    chineseTitle: "坤",
    pinyin: "kūn",
    category: "The Foundation",
    description: "Nurturing emerging possibilities with grounded wisdom",
    icon: Leaf,
    principles: [
      "Nurture emerging possibilities",
      "Cultivate fertile conditions",
      "Support without imposing",
      "Build patient foundations",
      "Respond to genuine needs",
      "Embody grounded wisdom"
    ]
  },
  {
    id: 3,
    title: "Initial Difficulty",
    chineseTitle: "屯",
    pinyin: "zhūn",
    category: "The Method",
    description: "Navigating beginning challenges with perseverance",
    icon: Mountain,
    principles: [
      "Navigate beginning challenges",
      "Gather resources for growth",
      "Plant seeds amid uncertainty",
      "Persevere through obstacles",
      "Recognize germinating potential",
      "Trust the process of emergence"
    ]
  },
  {
    id: 4,
    title: "Inexperience",
    chineseTitle: "蒙",
    pinyin: "méng",
    category: "The Method",
    description: "Embracing beginner's mind and foundational knowledge",
    icon: GraduationCap,
    principles: [
      "Embrace beginner's mind",
      "Seek foundational knowledge",
      "Learn through guided exploration",
      "Remove conceptual blindness",
      "Build basic competencies",
      "Honor developmental stages"
    ]
  },
  {
    id: 5,
    title: "Patient Waiting",
    chineseTitle: "需",
    pinyin: "xū",
    category: "The Method",
    description: "Recognizing appropriate timing and strategic patience",
    icon: Hourglass,
    principles: [
      "Recognize appropriate timing",
      "Prepare during apparent inaction",
      "Build readiness for opportunity",
      "Discern essential moments",
      "Cultivate strategic patience",
      "Maintain focus during delays"
    ]
  },
  {
    id: 6,
    title: "Conflict",
    chineseTitle: "訟",
    pinyin: "sòng",
    category: "The Method",
    description: "Addressing tensions directly and finding balance in disagreement",
    icon: Scale,
    principles: [
      "Address tensions directly",
      "Transform opposition to insight",
      "Navigate competing perspectives",
      "Find balance in disagreement",
      "Resolve through principle",
      "Create clarity from friction"
    ]
  },
  {
    id: 7,
    title: "Discipline",
    chineseTitle: "師",
    pinyin: "shī",
    category: "The Experience",
    description: "Organizing collective effort with strategic alignment",
    icon: AlignJustify,
    principles: [
      "Organize collective effort",
      "Establish coherent structure",
      "Maintain operational integrity",
      "Align individual contributions",
      "Deploy resources strategically",
      "Create coordinated momentum"
    ]
  },
  {
    id: 8,
    title: "Unity",
    chineseTitle: "比",
    pinyin: "bǐ",
    category: "The Experience",
    description: "Fostering genuine connection and shared purpose",
    icon: Users,
    principles: [
      "Foster genuine connection",
      "Build mutual understanding",
      "Create aligned purpose",
      "Establish shared principles",
      "Honor interdependence",
      "Strengthen collective bonds"
    ]
  },
  {
    id: 9,
    title: "Gentle Restraint",
    chineseTitle: "小畜",
    pinyin: "xiǎo xù",
    category: "The Experience",
    description: "Accumulating small improvements through measured control",
    icon: SlidersHorizontal,
    principles: [
      "Accumulate small improvements",
      "Contain expansive forces",
      "Harness potential energy",
      "Practice measured control",
      "Build disciplined approach",
      "Create through limitation"
    ]
  },
  {
    id: 10,
    title: "Mindful Conduct",
    chineseTitle: "履",
    pinyin: "lǚ",
    category: "The Experience",
    description: "Proceeding with careful attention and ethical clarity",
    icon: Footprints,
    principles: [
      "Proceed with careful attention",
      "Navigate complex environments",
      "Maintain appropriate boundaries",
      "Honor social contracts",
      "Act with ethical clarity",
      "Balance confidence and caution"
    ]
  },
  {
    id: 11,
    title: "Harmony",
    chineseTitle: "泰",
    pinyin: "tài",
    category: "The Experience",
    description: "Creating flourishing conditions through balanced exchange",
    icon: HeartHandshake,
    principles: [
      "Create flourishing conditions",
      "Balance dynamic opposites",
      "Facilitate natural flow",
      "Establish sustainable exchange",
      "Remove unnecessary barriers",
      "Enable mutual prosperity"
    ]
  },
  {
    id: 12,
    title: "Stagnation",
    chineseTitle: "否",
    pinyin: "pǐ",
    category: "The Experience",
    description: "Recognizing systemic blockages and preparing for renewed movement",
    icon: PanelTop,
    principles: [
      "Recognize systemic blockages",
      "Conserve energy during obstruction",
      "Maintain integrity amid difficulty",
      "Identify root causes of stasis",
      "Prepare for renewed movement",
      "Find opportunity in limitation"
    ]
  },
  {
    id: 13,
    title: "Community",
    chineseTitle: "同人",
    pinyin: "tóng rén",
    category: "The Implementation",
    description: "Building inclusive fellowship through shared vision",
    icon: Users,
    principles: [
      "Build inclusive fellowship",
      "Unify through shared vision",
      "Honor diversity within unity",
      "Create belonging through purpose",
      "Establish common principles",
      "Transform individual to collective"
    ]
  },
  {
    id: 14,
    title: "Abundance",
    chineseTitle: "大有",
    pinyin: "dà yǒu",
    category: "The Implementation",
    description: "Managing prosperity wisely and sharing resources generously",
    icon: Banknote,
    principles: [
      "Manage prosperity wisely",
      "Share resources generously",
      "Recognize collective wealth",
      "Scale successful systems",
      "Maintain humility in success",
      "Transform quantity to quality"
    ]
  },
  {
    id: 15,
    title: "Humility",
    chineseTitle: "謙",
    pinyin: "qiān",
    category: "The Implementation",
    description: "Presenting expertise without arrogance and valuing substance over appearance",
    icon: Heart,
    principles: [
      "Present expertise without arrogance",
      "Learn from all sources",
      "Create space for others",
      "Recognize limitations honestly",
      "Value substance over appearance",
      "Lead through quiet competence"
    ]
  },
  {
    id: 16,
    title: "Enthusiasm",
    chineseTitle: "豫",
    pinyin: "yù",
    category: "The Implementation",
    description: "Infusing work with joy and inspiring momentum",
    icon: Sparkles,
    principles: [
      "Infuse work with joy",
      "Mobilize through positive energy",
      "Create inspiring momentum",
      "Align with natural motivation",
      "Balance exuberance with focus",
      "Transform obligation to opportunity"
    ]
  },
  {
    id: 17,
    title: "Adaptation",
    chineseTitle: "隨",
    pinyin: "suí",
    category: "The Implementation",
    description: "Responding to changing conditions while maintaining integrity",
    icon: Wind,
    principles: [
      "Respond to changing conditions",
      "Follow environmental cues",
      "Maintain flexibility amid change",
      "Adjust without losing integrity",
      "Create contextual solutions",
      "Transform through responsive action"
    ]
  },
  {
    id: 18,
    title: "Restoration",
    chineseTitle: "蠱",
    pinyin: "gŭ",
    category: "The Implementation",
    description: "Repairing broken systems and transforming decay to renewal",
    icon: Wrench,
    principles: [
      "Repair broken systems",
      "Address root corruptions",
      "Transform decay to renewal",
      "Cleanse before rebuilding",
      "Correct inherited problems",
      "Create order from disorder"
    ]
  },
  {
    id: 19,
    title: "Approach",
    chineseTitle: "臨",
    pinyin: "lín",
    category: "The Implementation",
    description: "Engaging with appropriate presence and attentive care",
    icon: ArrowRight,
    principles: [
      "Engage with appropriate presence",
      "Oversee with attentive care",
      "Provide guiding influence",
      "Create respectful authority",
      "Prepare for responsible leadership",
      "Transform observation to involvement"
    ]
  },
  {
    id: 20,
    title: "Contemplation",
    chineseTitle: "觀",
    pinyin: "guān",
    category: "The Implementation",
    description: "Observing without interference and perceiving essential nature",
    icon: Eye,
    principles: [
      "Observe without interference",
      "See patterns clearly",
      "Perceive essential nature",
      "Study before action",
      "Gain perspective through distance",
      "Transform looking to insight"
    ]
  },
  {
    id: 21,
    title: "Decisive Action",
    chineseTitle: "噬嗑",
    pinyin: "shì kè",
    category: "The Growth",
    description: "Addressing obstacles directly and creating breakthrough moments",
    icon: Flame,
    principles: [
      "Address obstacles directly",
      "Create breakthrough moments",
      "Remove persistent blockages",
      "Apply necessary correction",
      "Enforce critical boundaries",
      "Transform hesitation to resolution"
    ]
  },
  {
    id: 22,
    title: "Aesthetic Refinement",
    chineseTitle: "賁",
    pinyin: "bì",
    category: "The Growth",
    description: "Beautifying without sacrificing function through elegant design",
    icon: Layers,
    principles: [
      "Beautify without sacrificing function",
      "Enhance through elegant design",
      "Create meaningful aesthetics",
      "Balance form and substance",
      "Cultivate cultural resonance",
      "Transform utility to delight"
    ]
  },
  {
    id: 23,
    title: "Decomposition",
    chineseTitle: "剝",
    pinyin: "bō",
    category: "The Growth",
    description: "Releasing outdated structures and creating space through removal",
    icon: XCircle,
    principles: [
      "Release outdated structures",
      "Allow necessary endings",
      "Create space through removal",
      "Distinguish essential from superficial",
      "Accept natural decline",
      "Transform through reduction"
    ]
  },
  {
    id: 24,
    title: "Renewal",
    chineseTitle: "復",
    pinyin: "fù",
    category: "The Growth",
    description: "Recognizing returning energy and nurturing emerging potential",
    icon: RefreshCw,
    principles: [
      "Recognize returning energy",
      "Build on minimal viable signals",
      "Trust cyclical processes",
      "Nurture emerging potential",
      "Maintain patient attention",
      "Transform ending to beginning"
    ]
  },
  {
    id: 25,
    title: "Authenticity",
    chineseTitle: "无妄",
    pinyin: "wú wàng",
    category: "The Growth",
    description: "Acting with natural integrity and aligning with true purpose",
    icon: Fingerprint,
    principles: [
      "Act with natural integrity",
      "Align with true purpose",
      "Remove artificial constructs",
      "Create genuine expression",
      "Eliminate pretense and deception",
      "Transform convention to truth"
    ]
  },
  {
    id: 26,
    title: "Contained Power",
    chineseTitle: "大畜",
    pinyin: "dà xù",
    category: "The Growth",
    description: "Accumulating potential energy and building capacity before deployment",
    icon: Cloud,
    principles: [
      "Accumulate potential energy",
      "Restrain power appropriately",
      "Build capacity before deployment",
      "Maintain disciplined strength",
      "Create through controlled force",
      "Transform raw power to directed influence"
    ]
  },
  {
    id: 27,
    title: "Nourishment",
    chineseTitle: "頤",
    pinyin: "yí",
    category: "The Growth",
    description: "Providing essential sustenance and creating sustainable nurturing",
    icon: FlowerIcon,
    principles: [
      "Provide essential sustenance",
      "Discern proper inputs",
      "Create sustainable nurturing",
      "Balance giving and receiving",
      "Establish healthy dependencies",
      "Transform consumption to cultivation"
    ]
  },
  {
    id: 28,
    title: "Critical Mass",
    chineseTitle: "大過",
    pinyin: "dà guò",
    category: "The Growth",
    description: "Recognizing structural weakness and addressing fundamental imbalance",
    icon: Construction,
    principles: [
      "Recognize structural weakness",
      "Address fundamental imbalance",
      "Create necessary disruption",
      "Accept extraordinary measures",
      "Navigate critical transitions",
      "Transform excess to transformation"
    ]
  },
  {
    id: 29,
    title: "Persistence Through Danger",
    chineseTitle: "坎",
    pinyin: "kǎn",
    category: "The Perspective",
    description: "Navigating repeated challenges and finding flow in difficult terrain",
    icon: Waves,
    principles: [
      "Navigate repeated challenges",
      "Maintain focus amid turbulence",
      "Create path through obstacles",
      "Find flow in difficult terrain",
      "Build resilience through testing",
      "Transform danger to opportunity"
    ]
  },
  {
    id: 30,
    title: "Illumination",
    chineseTitle: "離",
    pinyin: "lí",
    category: "The Perspective",
    description: "Creating clarity through insight and providing illuminating perspective",
    icon: Sun,
    principles: [
      "Create clarity through insight",
      "Provide illuminating perspective",
      "Distinguish with precision",
      "Balance attachment and detachment",
      "Maintain appropriate visibility",
      "Transform darkness to light"
    ]
  },
  {
    id: 31,
    title: "Mutual Influence",
    chineseTitle: "咸",
    pinyin: "xián",
    category: "The Perspective",
    description: "Creating reciprocal exchange and building authentic connection",
    icon: HeartHandshake,
    principles: [
      "Create reciprocal exchange",
      "Establish sensitive responsiveness",
      "Build authentic connection",
      "Honor emotional intelligence",
      "Develop mutual understanding",
      "Transform separation to relationship"
    ]
  },
  {
    id: 32,
    title: "Endurance",
    chineseTitle: "恆",
    pinyin: "héng",
    category: "The Perspective",
    description: "Sustaining long-term commitment and building lasting foundations",
    icon: MountainSnow,
    principles: [
      "Sustain long-term commitment",
      "Create through persistence",
      "Maintain consistent principles",
      "Build lasting foundations",
      "Develop unwavering regularity",
      "Transform temporary to permanent"
    ]
  },
  {
    id: 33,
    title: "Strategic Retreat",
    chineseTitle: "遯",
    pinyin: "dùn",
    category: "The Perspective",
    description: "Withdrawing from unproductive engagement and preserving essential resources",
    icon: Shield,
    principles: [
      "Withdraw from unproductive engagement",
      "Create space for recalibration",
      "Preserve essential resources",
      "Navigate detachment wisely",
      "Distinguish retreat from surrender",
      "Transform confrontation to conservation"
    ]
  },
  {
    id: 34,
    title: "Vital Force",
    chineseTitle: "大壯",
    pinyin: "dà zhuàng",
    category: "The Perspective",
    description: "Deploying power appropriately and applying energy strategically",
    icon: Rocket,
    principles: [
      "Deploy power appropriately",
      "Create through directed strength",
      "Maintain ethical force",
      "Balance vigor with restraint",
      "Apply energy strategically",
      "Transform potential to kinetic"
    ]
  },
  {
    id: 35,
    title: "Steady Progress",
    chineseTitle: "晉",
    pinyin: "jìn",
    category: "The Perspective",
    description: "Advancing through incremental steps and building upon each milestone",
    icon: ChevronsUp,
    principles: [
      "Advance through incremental steps",
      "Create sustainable growth",
      "Recognize evolutionary stages",
      "Build upon each milestone",
      "Maintain progressive momentum",
      "Transform gradual to significant"
    ]
  },
  {
    id: 36,
    title: "Hidden Light",
    chineseTitle: "明夷",
    pinyin: "míng yí",
    category: "The Perspective",
    description: "Preserving wisdom during darkness and maintaining integrity when unrewarded",
    icon: Lightbulb,
    principles: [
      "Preserve wisdom during darkness",
      "Create value despite adversity",
      "Maintain integrity when unrewarded",
      "Navigate hostile environments",
      "Protect essential knowledge",
      "Transform suppression to preservation"
    ]
  },
  {
    id: 37,
    title: "Structured Relationships",
    chineseTitle: "家人",
    pinyin: "jiā rén",
    category: "The Integration",
    description: "Establishing clear roles and building organizational coherence",
    icon: Building,
    principles: [
      "Establish clear roles and responsibilities",
      "Create functional systems",
      "Balance authority and autonomy",
      "Build organizational coherence",
      "Maintain healthy boundaries",
      "Transform disparate elements to integrated whole"
    ]
  },
  {
    id: 38,
    title: "Creative Tension",
    chineseTitle: "睽",
    pinyin: "kuí",
    category: "The Integration",
    description: "Recognizing productive differences and finding unity amid diversity",
    icon: Binary,
    principles: [
      "Recognize productive differences",
      "Create through opposing forces",
      "Balance contradiction and harmony",
      "Find unity amid diversity",
      "Develop contrasting perspectives",
      "Transform opposition to complementarity"
    ]
  },
  {
    id: 39,
    title: "Skillful Navigation",
    chineseTitle: "蹇",
    pinyin: "jiǎn",
    category: "The Integration",
    description: "Overcoming difficult obstacles and finding the path of least resistance",
    icon: Navigation,
    principles: [
      "Overcome difficult obstacles",
      "Create progress through challenge",
      "Find path of least resistance",
      "Develop strategic patience",
      "Recognize immovable constraints",
      "Transform limitation to advantage"
    ]
  },
  {
    id: 40,
    title: "Resolution",
    chineseTitle: "解",
    pinyin: "xiè",
    category: "The Integration",
    description: "Releasing unnecessary tension and creating breakthrough solutions",
    icon: SlidersHorizontal,
    principles: [
      "Release unnecessary tension",
      "Create breakthrough solutions",
      "Untangle complex problems",
      "Identify leverage points",
      "Restore natural flow",
      "Transform restriction to liberation"
    ]
  },
  {
    id: 41,
    title: "Reduction",
    chineseTitle: "損",
    pinyin: "sǔn",
    category: "The Integration",
    description: "Eliminating non-essential elements and creating through selective removal",
    icon: Compass,
    principles: [
      "Eliminate non-essential elements",
      "Create through selective removal",
      "Focus resources effectively",
      "Develop elegant simplicity",
      "Reduce to enhance value",
      "Transform quantity to quality"
    ]
  },
  {
    id: 42,
    title: "Increase",
    chineseTitle: "益",
    pinyin: "yì",
    category: "The Integration",
    description: "Expanding beneficial elements and creating through selective addition",
    icon: ArrowUpDown,
    principles: [
      "Expand beneficial elements",
      "Create through selective addition",
      "Amplify positive factors",
      "Develop strategic growth",
      "Add to enhance function",
      "Transform scarcity to sufficiency"
    ]
  },
  {
    id: 43,
    title: "Breakthrough",
    chineseTitle: "夬",
    pinyin: "guài",
    category: "The Integration",
    description: "Creating decisive resolution and completing critical transitions",
    icon: Zap,
    principles: [
      "Create decisive resolution",
      "Break through final obstacles",
      "Maintain vigilance in victory",
      "Complete critical transitions",
      "Address lingering resistance",
      "Transform struggle to culmination"
    ]
  },
  {
    id: 44,
    title: "Unexpected Encounter",
    chineseTitle: "姤",
    pinyin: "gòu",
    category: "The Integration",
    description: "Recognizing pivotal moments and creating opportunity from surprise",
    icon: Sparkles,
    principles: [
      "Recognize pivotal moments",
      "Create opportunity from surprise",
      "Respond to changing conditions",
      "Navigate initial contact wisely",
      "Establish appropriate boundaries",
      "Transform unexpected to advantageous"
    ]
  },
  {
    id: 45,
    title: "Gathering",
    chineseTitle: "萃",
    pinyin: "cuì",
    category: "The Evolution",
    description: "Bringing together diverse elements and establishing organizational unity",
    icon: Users,
    principles: [
      "Bring together diverse elements",
      "Create coherent assemblies",
      "Establish organizational unity",
      "Build collective resources",
      "Align individual contributions",
      "Transform separate to united"
    ]
  },
  {
    id: 46,
    title: "Gradual Advancement",
    chineseTitle: "升",
    pinyin: "shēng",
    category: "The Evolution",
    description: "Creating upward momentum and building step-by-step progress",
    icon: CircleDot,
    principles: [
      "Create upward momentum",
      "Build step-by-step progress",
      "Recognize developmental stages",
      "Establish progressive improvement",
      "Maintain hierarchical integrity",
      "Transform lower to higher"
    ]
  },
  {
    id: 47,
    title: "Confinement",
    chineseTitle: "困",
    pinyin: "kùn",
    category: "The Evolution",
    description: "Finding freedom within constraints and creating despite limitations",
    icon: Lock,
    principles: [
      "Find freedom within constraints",
      "Create despite limitations",
      "Develop inner resources",
      "Recognize temporary nature of restriction",
      "Maintain essential integrity",
      "Transform confinement to depth"
    ]
  },
  {
    id: 48,
    title: "The Source",
    chineseTitle: "井",
    pinyin: "jǐng",
    category: "The Evolution",
    description: "Establishing sustainable resources and creating enduring infrastructure",
    icon: Droplets,
    principles: [
      "Establish sustainable resources",
      "Create enduring infrastructure",
      "Provide fundamental support",
      "Maintain essential services",
      "Develop reliable foundations",
      "Transform ephemeral to perennial"
    ]
  },
  {
    id: 49,
    title: "Transformation",
    chineseTitle: "革",
    pinyin: "gé",
    category: "The Evolution",
    description: "Creating fundamental change and implementing necessary revolution",
    icon: RefreshCw,
    principles: [
      "Create fundamental change",
      "Implement necessary revolution",
      "Replace outdated systems",
      "Establish new paradigms",
      "Navigate disruptive transitions",
      "Transform existing to emerging"
    ]
  },
  {
    id: 50,
    title: "Establishing the New",
    chineseTitle: "鼎",
    pinyin: "dǐng",
    category: "The Evolution",
    description: "Creating lasting institutions and building transformative vessels",
    icon: Blocks,
    principles: [
      "Create lasting institutions",
      "Build transformative vessels",
      "Establish cultural foundations",
      "Develop regenerative systems",
      "Maintain evolutionary continuity",
      "Transform raw material to refined purpose"
    ]
  },
  {
    id: 51,
    title: "Arousing",
    chineseTitle: "震",
    pinyin: "zhèn",
    category: "The Evolution",
    description: "Creating awakening shock and initiating sudden change",
    icon: Zap,
    principles: [
      "Create awakening shock",
      "Initiate sudden change",
      "Establish energetic momentum",
      "Develop responsive alertness",
      "Maintain constructive urgency",
      "Transform stasis to movement"
    ]
  },
  {
    id: 52,
    title: "Stillness",
    chineseTitle: "艮",
    pinyin: "gèn",
    category: "The Evolution",
    description: "Creating through non-action and establishing appropriate boundaries",
    icon: Mountain,
    principles: [
      "Create through non-action",
      "Establish appropriate boundaries",
      "Develop restraint and patience",
      "Recognize completion points",
      "Maintain necessary pauses",
      "Transform movement to stillness"
    ]
  },
  {
    id: 53,
    title: "Incremental Development",
    chineseTitle: "漸",
    pinyin: "jiàn",
    category: "The Foundation",
    description: "Creating through steady progression and establishing natural sequence",
    icon: Timer,
    principles: [
      "Create through steady progression",
      "Establish natural sequence",
      "Develop organic growth",
      "Recognize developmental stages",
      "Maintain appropriate pace",
      "Transform sudden to gradual"
    ]
  },
  {
    id: 54,
    title: "Appropriate Relationship",
    chineseTitle: "歸妹",
    pinyin: "guī mèi",
    category: "The Foundation",
    description: "Creating beneficial connections and establishing balanced partnerships",
    icon: HeartHandshake,
    principles: [
      "Create beneficial connections",
      "Establish balanced partnerships",
      "Develop complementary roles",
      "Recognize power dynamics",
      "Maintain healthy boundaries",
      "Transform separate to integrated"
    ]
  },
  {
    id: 55,
    title: "Peak Abundance",
    chineseTitle: "豐",
    pinyin: "fēng",
    category: "The Method",
    description: "Creating brilliant culmination and establishing luminous expression",
    icon: Sun,
    principles: [
      "Create brilliant culmination",
      "Establish luminous expression",
      "Develop full manifestation",
      "Recognize height of success",
      "Maintain awareness of cycles",
      "Transform process to pinnacle"
    ]
  },
  {
    id: 56,
    title: "Transient",
    chineseTitle: "旅",
    pinyin: "lǚ",
    category: "The Method",
    description: "Creating within impermanence and establishing adaptable systems",
    icon: Rabbit,
    principles: [
      "Create within impermanence",
      "Establish adaptable systems",
      "Develop temporary solutions",
      "Recognize contextual nature",
      "Maintain flexible attachments",
      "Transform rootedness to mobility"
    ]
  },
  {
    id: 57,
    title: "Gentle Penetration",
    chineseTitle: "巽",
    pinyin: "xùn",
    category: "The Experience",
    description: "Creating through subtle influence and establishing persistent presence",
    icon: Wind,
    principles: [
      "Create through subtle influence",
      "Establish persistent presence",
      "Develop gradual transformation",
      "Recognize power of gentleness",
      "Maintain consistent pressure",
      "Transform forceful to pervasive"
    ]
  },
  {
    id: 58,
    title: "Joyful Communication",
    chineseTitle: "兌",
    pinyin: "duì",
    category: "The Experience",
    description: "Creating through delight and establishing open exchange",
    icon: Feather,
    principles: [
      "Create through delight",
      "Establish open exchange",
      "Develop expressive clarity",
      "Recognize power of joy",
      "Maintain authentic engagement",
      "Transform separation to connection"
    ]
  },
  {
    id: 59,
    title: "Dispersion",
    chineseTitle: "渙",
    pinyin: "huàn",
    category: "The Implementation",
    description: "Creating through distribution and establishing wide-reaching systems",
    icon: Network,
    principles: [
      "Create through distribution",
      "Establish wide-reaching systems",
      "Develop decentralized networks",
      "Recognize value of diffusion",
      "Maintain coordinated autonomy",
      "Transform concentration to distribution"
    ]
  },
  {
    id: 60,
    title: "Limitation",
    chineseTitle: "節",
    pinyin: "jié",
    category: "The Implementation",
    description: "Creating through boundary-setting and establishing appropriate constraints",
    icon: Box,
    principles: [
      "Create through boundary-setting",
      "Establish appropriate constraints",
      "Develop disciplined structure",
      "Recognize necessary limitations",
      "Maintain balanced regulation",
      "Transform excess to moderation"
    ]
  },
  {
    id: 61,
    title: "Inner Truth",
    chineseTitle: "中孚",
    pinyin: "zhōng fú",
    category: "The Growth",
    description: "Creating through authenticity and establishing genuine communication",
    icon: HeartHandshake,
    principles: [
      "Create through authenticity",
      "Establish genuine communication",
      "Develop mutual trust",
      "Recognize central importance of truth",
      "Maintain integrity in expression",
      "Transform superficial to essential"
    ]
  },
  {
    id: 62,
    title: "Minor Excess",
    chineseTitle: "小過",
    pinyin: "xiǎo guò",
    category: "The Growth",
    description: "Creating through small adaptations and establishing appropriate flexibility",
    icon: SlidersHorizontal,
    principles: [
      "Create through small adaptations",
      "Establish appropriate flexibility",
      "Develop nuanced adjustments",
      "Recognize subtle imbalances",
      "Maintain proportional response",
      "Transform major to minor"
    ]
  },
  {
    id: 63,
    title: "Completion",
    chineseTitle: "既濟",
    pinyin: "jì jì",
    category: "The Perspective",
    description: "Creating sustainable conclusion and establishing balanced fulfillment",
    icon: CheckCircle2,
    principles: [
      "Create sustainable conclusion",
      "Establish balanced fulfillment",
      "Develop integrated wholeness",
      "Recognize successful completion",
      "Maintain vigilance amid success",
      "Transform process to accomplishment"
    ]
  },
  {
    id: 64,
    title: "Before Completion",
    chineseTitle: "未濟",
    pinyin: "wèi jì",
    category: "The Perspective",
    description: "Creating amid transition and establishing preparatory order",
    icon: Loader,
    principles: [
      "Create amid transition",
      "Establish preparatory order",
      "Develop penultimate arrangements",
      "Recognize approaching culmination",
      "Maintain focus on final details",
      "Transform almost to finished"
    ]
  }
];
