
import React from "react";
import { ZenPrinciple } from "./ZenPrincipleCard";
import SectionHeader from "./SectionHeader";
import ZenPrinciplesList from "./ZenPrinciplesList";

// Define the principles data - 36 principles in 6 disciplines
const principles: ZenPrinciple[] = [
  // Design Discipline
  {
    number: "1",
    emoji: "⚙️",
    title: "Orthogonality",
    japaneseSymbol: "直交性",
    description: "One piece, one job. Every tool does one thing exceptionally well.",
    discipline: "Design"
  },
  {
    number: "2",
    emoji: "🪶",
    title: "Simplicity",
    japaneseSymbol: "簡素",
    description: "Subtract until essential. Minimal components, maximum flexibility.",
    discipline: "Design"
  },
  {
    number: "3",
    emoji: "🔍",
    title: "Clarity",
    japaneseSymbol: "明晰",
    description: "Intuitive, plain-spoken design. Clear code, concise interfaces, no friction.",
    discipline: "Design"
  },
  {
    number: "4",
    emoji: "🧩",
    title: "Composability",
    japaneseSymbol: "構成性",
    description: "Modular elements scale exponentially. Design for recombination.",
    discipline: "Design"
  },
  {
    number: "5",
    emoji: "📐",
    title: "Dimensionality",
    japaneseSymbol: "次元性",
    description: "Simple abstractions over hidden complexity. Accessible simplicity with depth.",
    discipline: "Design"
  },
  {
    number: "6",
    emoji: "🎨",
    title: "Design Excellence",
    japaneseSymbol: "デザイン卓越",
    description: "Beauty enhances usability. Aesthetics and function in harmony.",
    discipline: "Design"
  },
  
  // Engineering Discipline
  {
    number: "7",
    emoji: "🔋",
    title: "Completeness",
    japaneseSymbol: "完全性",
    description: "Batteries included; ready-to-use solutions. Robust and fully integrated.",
    discipline: "Engineering"
  },
  {
    number: "8",
    emoji: "🎯",
    title: "Consistency",
    japaneseSymbol: "一貫性",
    description: "Uniform interfaces, predictable behaviors. No surprises, just reliability.",
    discipline: "Engineering"
  },
  {
    number: "9",
    emoji: "⚡",
    title: "Concurrency",
    japaneseSymbol: "並行性",
    description: "Parallel execution with trust. Fewer roadblocks, maximum productivity.",
    discipline: "Engineering"
  },
  {
    number: "10",
    emoji: "📈",
    title: "Scalability",
    japaneseSymbol: "拡張性",
    description: "Build for exponential growth early. Solutions that evolve gracefully.",
    discipline: "Engineering"
  },
  {
    number: "11",
    emoji: "🔗",
    title: "Interoperability",
    japaneseSymbol: "相互運用性",
    description: "Seamless integration multiplies value. Connect with existing systems.",
    discipline: "Engineering"
  },
  {
    number: "12",
    emoji: "⏳",
    title: "Longevity",
    japaneseSymbol: "長寿",
    description: "Solutions for decades, anticipate evolution. Think long-term.",
    discipline: "Engineering"
  },
  
  // Science Discipline
  {
    number: "13",
    emoji: "📊",
    title: "Data Dominance",
    japaneseSymbol: "データ支配",
    description: "Decisions driven by evidence. Let data guide your path.",
    discipline: "Science"
  },
  {
    number: "14",
    emoji: "🧪",
    title: "Experimentation",
    japaneseSymbol: "実験",
    description: "Measure, learn, iterate scientifically. Test hypotheses rigorously.",
    discipline: "Science"
  },
  {
    number: "15",
    emoji: "🔬",
    title: "Empiricism",
    japaneseSymbol: "経験主義",
    description: "Evidence-based hypotheses, rigorous analysis. Truth through observation.",
    discipline: "Science"
  },
  {
    number: "16",
    emoji: "🗡️",
    title: "Precision",
    japaneseSymbol: "精度",
    description: "Data-driven choices, no guesswork. Meticulous, decisive execution.",
    discipline: "Science"
  },
  {
    number: "17",
    emoji: "🔄",
    title: "Repeatability",
    japaneseSymbol: "再現性",
    description: "Processes reliably replicate success. Consistent, predictable outcomes.",
    discipline: "Science"
  },
  {
    number: "18",
    emoji: "✅",
    title: "Validation",
    japaneseSymbol: "検証",
    description: "Rigorously test assumptions against reality. Confirm before committing.",
    discipline: "Science"
  },
  
  // Philosophy Discipline
  {
    number: "19",
    emoji: "🧊",
    title: "Objectivity",
    japaneseSymbol: "客観性",
    description: "Decisions driven by data, ego aside. Remove personal bias.",
    discipline: "Philosophy"
  },
  {
    number: "20",
    emoji: "📚",
    title: "Depth",
    japaneseSymbol: "深さ",
    description: "Master underlying fundamentals deeply. Build on solid foundations.",
    discipline: "Philosophy"
  },
  {
    number: "21",
    emoji: "🌱",
    title: "Continuous Learning",
    japaneseSymbol: "継続的学習",
    description: "Curiosity-driven growth. Never stop expanding knowledge.",
    discipline: "Philosophy"
  },
  {
    number: "22",
    emoji: "🌟",
    title: "Bold Ambition",
    japaneseSymbol: "大志",
    description: "Aim high for lasting impact. Pursue audacious goals.",
    discipline: "Philosophy"
  },
  {
    number: "23",
    emoji: "📈",
    title: "Exponential Mindset",
    japaneseSymbol: "指数的思考",
    description: "Geometric, compounding outcomes. Think beyond linear progress.",
    discipline: "Philosophy"
  },
  {
    number: "24",
    emoji: "💥",
    title: "Disruptive Innovation",
    japaneseSymbol: "破壊的革新",
    description: "Create new fields, don't compete. Redefine what's possible.",
    discipline: "Philosophy"
  },
  
  // Leadership Discipline
  {
    number: "25",
    emoji: "🦅",
    title: "Autonomy",
    japaneseSymbol: "自律性",
    description: "Empowered teams, minimal hierarchy. Trust in capable individuals.",
    discipline: "Leadership"
  },
  {
    number: "26",
    emoji: "🎯",
    title: "Focus",
    japaneseSymbol: "集中",
    description: "Solve one problem deeply. Concentrated effort beats scattered attention.",
    discipline: "Leadership"
  },
  {
    number: "27",
    emoji: "⏱️",
    title: "Urgency",
    japaneseSymbol: "緊急性",
    description: "Decisive, immediate action. Speed as competitive advantage.",
    discipline: "Leadership"
  },
  {
    number: "28",
    emoji: "🚀",
    title: "Iteration Velocity",
    japaneseSymbol: "反復速度",
    description: "Ship fast, learn faster. Rapid cycles of improvement.",
    discipline: "Leadership"
  },
  {
    number: "29",
    emoji: "🌊",
    title: "Adaptability",
    japaneseSymbol: "適応性",
    description: "Pivot purposefully; failure as feedback. Embrace change as opportunity.",
    discipline: "Leadership"
  },
  {
    number: "30",
    emoji: "🎓",
    title: "Customer Obsession",
    japaneseSymbol: "顧客中心主義",
    description: "Client outcomes first; coach like Sensei. Success through others' success.",
    discipline: "Leadership"
  },
  
  // Innovation Discipline
  {
    number: "31",
    emoji: "⚖️",
    title: "Compound Efficiency",
    japaneseSymbol: "複合効率",
    description: "Early investment for exponential payoff. Small improvements compound.",
    discipline: "Innovation"
  },
  {
    number: "32",
    emoji: "🌐",
    title: "Network Effects",
    japaneseSymbol: "ネットワーク効果",
    description: "Build ecosystems, multiply influence. Value increases with each connection.",
    discipline: "Innovation"
  },
  {
    number: "33",
    emoji: "🤖",
    title: "Creative Leverage",
    japaneseSymbol: "創造的レバレッジ",
    description: "Combine human creativity and AI. Amplify human potential with technology.",
    discipline: "Innovation"
  },
  {
    number: "34",
    emoji: "📦",
    title: "Completeness",
    japaneseSymbol: "完全性",
    description: "Self-contained, ready from day one. Full solutions, not partial answers.",
    discipline: "Innovation"
  },
  {
    number: "35",
    emoji: "🌐",
    title: "Accessibility",
    japaneseSymbol: "アクセス性",
    description: "Open ecosystems drive adoption. Shared knowledge accelerates progress.",
    discipline: "Innovation"
  },
  {
    number: "36",
    emoji: "🧠",
    title: "Cognitive Efficiency",
    japaneseSymbol: "認知効率",
    description: "Optimized for human understanding. Interfaces that extend natural thought.",
    discipline: "Innovation"
  }
];

const manifestoDescription = 
  "The Zen of Hanzo is not just philosophy—it's our operating system. Our 36 principles across 6 disciplines " +
  "are practical laws born from rigorous experimentation, engineered to create profound impact " +
  "and exponential growth.";

const ManifestoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Manifesto" 
          description={manifestoDescription}
        />
        
        <ZenPrinciplesList principles={principles} groupByDiscipline={true} />
      </div>
    </section>
  );
};

export default ManifestoSection;
