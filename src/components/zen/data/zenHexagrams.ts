
import { 
  Heart, Compass, Layers, Star, Rocket, Scale, 
  Shield, PanelTop, Wrench, Combine, RefreshCw, BalanceScale
} from "lucide-react";

export interface Hexagram {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: typeof Heart;
  principles: string[];
}

export const hexagramsData: Hexagram[] = [
  {
    id: 1,
    title: "Empathy",
    category: "The Foundation",
    description: "Connection with human needs and experiences",
    icon: Heart,
    principles: [
      "Autonomy: Trust in user intuition, empower through knowledge, guide without dictating",
      "Attunement: Listen before answering, perceive unstated needs, respond to emotional context",
      "Perspective-Taking: Step into others' viewpoints, consider cultural contexts, acknowledge different realities",
      "Compassion: Acknowledge struggles, remove unnecessary friction, anticipate potential frustrations",
      "Accessibility: Eliminate unnecessary barriers, design for diverse abilities, simplify without condescension",
      "Balance: Respect time constraints, scale depth to needs, right-size explanations",
      "Inclusivity: Welcome diverse contributions, design for edge cases, consider global perspectives",
      "Humility: Acknowledge limitations, present expertise without arrogance, learn from users"
    ]
  },
  {
    id: 2,
    title: "Science",
    category: "The Method",
    description: "Approach based on evidence and verifiable principles",
    icon: Compass,
    principles: [
      "Curiosity: Question assumptions, probe beneath surfaces, explore tangential possibilities",
      "Empiricism: Ground in observable data, verify through experience, test against reality",
      "Precision: Define terms clearly, eliminate ambiguity, specify parameters",
      "Objectivity: Separate fact from preference, minimize cognitive biases, consider contrary evidence",
      "Falsifiability: Design testable hypotheses, create verifiable predictions, establish clear success criteria",
      "Reproducibility: Document methodologies, create repeatable processes, ensure consistent results",
      "Integration: Connect across disciplines, synthesize diverse insights, unify apparently contradictory data",
      "Evolution: Build on previous knowledge, refine through iteration, adapt to new information"
    ]
  },
  {
    id: 3,
    title: "Design",
    category: "The Experience",
    description: "Crafting intuitive and elegant solutions",
    icon: Layers,
    principles: [
      "Clarity: Communicate purpose immediately, remove cognitive friction, present information hierarchically",
      "Beauty: Harmonize form and function, create pleasurable interactions, use proportion and balance",
      "Coherence: Maintain internal consistency, establish unified principles, create recognizable patterns",
      "Dimensionality: Layer information appropriately, reveal complexity progressively, create depth beyond surface",
      "Simplicity: Remove the unnecessary, distill to essence, maximize meaning per element",
      "Rhythm: Establish meaningful patterns, create satisfying cycles, balance variation and repetition",
      "Affordance: Signal possible interactions, guide intuitive understanding, shape expectations appropriately",
      "Context-Sensitivity: Respond to environmental factors, adapt to situational needs, recognize temporal considerations"
    ]
  },
  {
    id: 4,
    title: "Engineering",
    category: "The Implementation",
    description: "Building robust and maintainable systems",
    icon: Wrench,
    principles: [
      "Modularity: Create independent components, define clear interfaces, allow selective reuse",
      "Robustness: Anticipate failure modes, design defensive mechanisms, recover gracefully from errors",
      "Efficiency: Optimize resource usage, eliminate redundant processes, reduce computational complexity",
      "Interoperability: Establish common standards, create compatible interfaces, enable seamless integration",
      "Scalability: Function across magnitudes, maintain performance under load, enable horizontal expansion",
      "Testability: Create verifiable components, enable isolated evaluation, support incremental validation",
      "Maintainability: Create readable structures, document thoroughly, enable easy modification",
      "Security: Protect against vulnerabilities, design with privacy in mind, implement appropriate controls"
    ]
  },
  {
    id: 5,
    title: "Scale",
    category: "The Growth",
    description: "Principles that enable exponential impact",
    icon: Rocket,
    principles: [
      "Velocity: Minimize unnecessary friction, optimize critical paths, eliminate bottlenecks",
      "Exponentiality: Create compound benefits, design network effects, build self-reinforcing systems",
      "Disruption: Challenge established patterns, create novel approaches, transform fundamental assumptions",
      "Network Effects: Design for increasing returns, enable value multiplication, create positive feedback loops",
      "Urgency: Recognize time sensitivity, prioritize high-impact elements, focus energy effectively",
      "Leverage: Identify force multipliers, apply effort strategically, maximize impact per action",
      "Adaptivity: Respond to changing conditions, enable flexible configurations, design for evolutionary pressure",
      "Experimentation: Test multiple approaches, create learning opportunities, design minimum viable tests"
    ]
  },
  {
    id: 6,
    title: "Wisdom",
    category: "The Perspective",
    description: "Higher-order insights and long-term thinking",
    icon: Star,
    principles: [
      "Longevity: Design for durability, consider future contexts, create lasting value",
      "Serenity: Maintain calm competence, create space for reflection, balance action and stillness",
      "Integrity: Align actions with principles, maintain consistent standards, honor implicit contracts",
      "Decentralization: Distribute authority appropriately, enable local decision-making, design resilient networks",
      "Freedom: Support self-determination, enable flexible pathways, minimize unnecessary constraints",
      "Security: Protect core values, establish appropriate boundaries, create safe spaces for growth",
      "Antifragility: Gain from disorder, turn obstacles into advantages, design to benefit from stress",
      "Transcendence: Look beyond immediate context, consider higher-order effects, connect to universal principles"
    ]
  },
  {
    id: 7,
    title: "Harmony",
    category: "The Integration",
    description: "Balancing opposing forces into a unified whole",
    icon: Combine,
    principles: [
      "Complementarity: Balance opposing forces, integrate yin and yang, combine strength and flexibility",
      "Resonance: Amplify through alignment, create harmonious interactions, design for sympathetic vibration",
      "Recursion: Apply principles at all scales, create self-similar structures, design nested systems",
      "Synergy: Create emergent properties, design for combinatorial advantage, enable collaborative enhancement",
      "Holism: Consider complete systems, recognize interdependence, design for total experience",
      "Reciprocity: Design mutual benefit, create virtuous cycles, enable fair exchange",
      "Cyclicality: Honor natural rhythms, design regenerative processes, create sustainable loops",
      "Unity: Integrate diverse elements, create coherent wholes, design unified experiences"
    ]
  },
  {
    id: 8,
    title: "Transformation",
    category: "The Evolution",
    description: "Principles that enable growth and change",
    icon: RefreshCw,
    principles: [
      "Adaptation: Respond to changing conditions, evolve with environmental shifts, modify approach based on feedback",
      "Catalysis: Enable transformative change, create conditions for breakthrough, reduce activation energy",
      "Emergence: Create conditions for spontaneous order, enable self-organization, design for unpredictable innovation",
      "Iteration: Refine through repeated cycles, build incremental improvements, learn from each version",
      "Transcendence: Move beyond limitations, transform constraints to advantages, elevate to higher-order solutions",
      "Regeneration: Design self-healing systems, create renewable resources, build sustainable cycles",
      "Integration: Unify disparate elements, synthesize opposing forces, combine multiple perspectives",
      "Creative Destruction: Clear space for new growth, release attachment to outdated patterns, transform through necessary endings"
    ]
  }
];
