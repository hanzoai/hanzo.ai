import { HexagramDetails } from "../types/hexagram";

// Sample I Ching hexagrams with engineering principles
export const ichingPrinciples: HexagramDetails[] = [
  {
    id: "1",
    name: "The Creative",
    chineseName: "乾 (qián)",
    lines: [
      { type: "solid" }, { type: "solid" }, { type: "solid" },
      { type: "solid" }, { type: "solid" }, { type: "solid" }
    ],
    meaning: "Pure yang, creation, activity, strength, innovation",
    principle: "Principle of Innovation: Create from foundational elements. Invent with purpose."
  },
  {
    id: "2",
    name: "The Receptive",
    chineseName: "坤 (kūn)",
    lines: [
      { type: "broken" }, { type: "broken" }, { type: "broken" },
      { type: "broken" }, { type: "broken" }, { type: "broken" }
    ],
    meaning: "Pure yin, receptivity, acceptance, adaptation",
    principle: "Principle of Adaptability: Systems must adapt to changing conditions. Embrace flexibility."
  },
  {
    id: "3",
    name: "Difficulty at the Beginning",
    chineseName: "屯 (zhūn)",
    lines: [
      { type: "broken" }, { type: "broken" }, { type: "solid" },
      { type: "broken" }, { type: "broken" }, { type: "broken" }
    ],
    meaning: "Initial obstacles, chaos giving birth to order",
    principle: "Principle of Initial Complexity: All new systems face initial complexity. Persist through chaos."
  },
  {
    id: "4",
    name: "Youthful Folly",
    chineseName: "蒙 (méng)",
    lines: [
      { type: "broken" }, { type: "broken" }, { type: "broken" },
      { type: "solid" }, { type: "broken" }, { type: "broken" }
    ],
    meaning: "Inexperience, learning, seeking guidance",
    principle: "Principle of Guided Learning: Seek mentorship when inexperienced. Documentation illuminates."
  },
  {
    id: "5",
    name: "Waiting",
    chineseName: "需 (xū)",
    lines: [
      { type: "solid" }, { type: "solid" }, { type: "solid" },
      { type: "broken" }, { type: "solid" }, { type: "broken" }
    ],
    meaning: "Patience, timing, nourishment",
    principle: "Principle of Proper Timing: Wait for ideal conditions. Patience optimizes execution."
  },
  {
    id: "6",
    name: "Conflict",
    chineseName: "訟 (sòng)",
    lines: [
      { type: "broken" }, { type: "solid" }, { type: "broken" },
      { type: "solid" }, { type: "solid" }, { type: "solid" }
    ],
    meaning: "Disagreement, litigation, careful action",
    principle: "Principle of Constructive Conflict: From disagreement comes resolution. Test assumptions rigorously."
  },
  {
    id: "7",
    name: "The Army",
    chineseName: "師 (shī)",
    lines: [
      { type: "broken" }, { type: "broken" }, { type: "broken" },
      { type: "broken" }, { type: "solid" }, { type: "broken" }
    ],
    meaning: "Discipline, organization, strategic leadership",
    principle: "Principle of Orchestration: Coordinate many components as one. Clear leadership defines success."
  },
  {
    id: "8",
    name: "Holding Together",
    chineseName: "比 (bǐ)",
    lines: [
      { type: "broken" }, { type: "solid" }, { type: "broken" },
      { type: "broken" }, { type: "broken" }, { type: "broken" }
    ],
    meaning: "Union, alliance, solidarity",
    principle: "Principle of Cohesive Systems: Components must work in harmony. Integration brings strength."
  },
  // Additional hexagrams would be added here
  // This is just a sample; in a complete implementation, all 64 hexagrams would be defined
];

// Here's how you would continue defining more hexagrams
// The array should eventually contain all 64 hexagrams

export default ichingPrinciples;
