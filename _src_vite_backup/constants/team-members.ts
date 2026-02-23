import { Code2, Paintbrush, Settings, MessagesSquare, HelpCircle, Palette, Music, ChartBar, Bot, DollarSign, Scale, Binary, Database, Calculator, MessageCircle, Lightbulb } from "lucide-react";

export const teamMembers = {
  dev: {
    name: "Dev",
    title: "Meet Dev, Your AI Developer",
    role: "AI Developer",
    description: "Your expert AI developer, specializing in full-stack development and system architecture.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: Code2,
    features: [
      {
        icon: Bot,
        color: "text-[#fd4444]",
        title: "System Architecture",
        description: "Designs robust and scalable system architectures for complex applications."
      },
      {
        icon: Code2,
        color: "text-[#ff6b6b]",
        title: "Full-Stack Development",
        description: "Implements end-to-end solutions with modern technologies and best practices."
      },
      {
        icon: Binary,
        color: "text-[#fd4444]",
        title: "Code Quality",
        description: "Ensures high-quality, maintainable, and well-documented code."
      }
    ]
  },
  des: {
    name: "Des",
    title: "Meet Des, Your AI Designer",
    role: "AI Designer",
    description: "Your creative AI designer, crafting beautiful and intuitive user experiences.",
    gradient: "from-[#ff6b6b] to-[#fd4444]",
    mainIcon: Paintbrush,
    features: [
      {
        icon: Paintbrush,
        color: "text-[#fd4444]",
        title: "UI Design",
        description: "Creates stunning user interfaces with attention to detail and user experience."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Design Systems",
        description: "Develops comprehensive design systems for consistent brand experiences."
      },
      {
        icon: Settings,
        color: "text-[#fd4444]",
        title: "Prototyping",
        description: "Builds interactive prototypes to validate design concepts and user flows."
      }
    ]
  },
  opera: {
    name: "Opera",
    title: "Meet Opera, Your Operations Engineer",
    role: "Operations Engineer",
    description: "Your efficient AI operations engineer, maintaining system reliability and performance.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: Settings,
    features: [
      {
        icon: Settings,
        color: "text-[#fd4444]",
        title: "System Monitoring",
        description: "Maintains 24/7 monitoring of all systems and infrastructure."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Cloud Operations",
        description: "Manages cloud infrastructure and ensures optimal resource utilization."
      },
      {
        icon: Scale,
        color: "text-[#fd4444]",
        title: "System Security",
        description: "Implements and maintains robust security protocols and practices."
      }
    ]
  },
  mark: {
    name: "Mark",
    title: "Meet Mark, Your Marketing Expert",
    role: "AI Marketing Director",
    description: "Your AI marketing strategist, crafting compelling campaigns and driving engagement.",
    gradient: "from-[#ff6b6b] to-[#fd4444]",
    mainIcon: MessagesSquare,
    features: [
      {
        icon: Bot,
        color: "text-[#fd4444]",
        title: "Campaign Strategy",
        description: "Develops data-driven marketing campaigns that resonate with your target audience."
      },
      {
        icon: ChartBar,
        color: "text-[#ff6b6b]",
        title: "Content Planning",
        description: "Creates engaging content strategies that drive growth and engagement."
      },
      {
        icon: MessagesSquare,
        color: "text-[#fd4444]",
        title: "Analytics",
        description: "Provides deep insights and metrics to optimize marketing performance."
      }
    ]
  },
  su: {
    name: "Su",
    title: "Meet Su, Your Support Engineer",
    role: "Help & Support Engineer",
    description: "Your dedicated AI support engineer, ensuring smooth operations and user satisfaction.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: HelpCircle,
    features: [
      {
        icon: HelpCircle,
        color: "text-[#fd4444]",
        title: "User Support",
        description: "Provides comprehensive technical support and problem resolution."
      },
      {
        icon: MessageCircle,
        color: "text-[#ff6b6b]",
        title: "Documentation",
        description: "Creates and maintains detailed documentation and user guides."
      },
      {
        icon: Bot,
        color: "text-[#fd4444]",
        title: "Training",
        description: "Develops and delivers training programs for users and teams."
      }
    ]
  },
  art: {
    name: "Art",
    title: "Meet Art, Your AI Artist",
    role: "AI Artist",
    description: "Your creative AI artist, bringing imagination to life through digital artistry.",
    gradient: "from-[#ff6b6b] to-[#fd4444]",
    mainIcon: Palette,
    features: [
      {
        icon: Palette,
        color: "text-[#fd4444]",
        title: "Digital Art",
        description: "Creates stunning digital artwork across various styles and mediums."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Visual Design",
        description: "Develops unique visual identities and design concepts."
      },
      {
        icon: Lightbulb,
        color: "text-[#fd4444]",
        title: "Creative Direction",
        description: "Provides artistic vision and creative direction for projects."
      }
    ]
  },
  mu: {
    name: "Mu",
    title: "Meet Mu, Your AI Musician",
    role: "AI Musician",
    description: "Your creative AI musician, composing and producing original music.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: Music,
    features: [
      {
        icon: Music,
        color: "text-[#fd4444]",
        title: "Composition",
        description: "Creates original musical compositions in various genres."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Production",
        description: "Handles music production and sound engineering."
      },
      {
        icon: Lightbulb,
        color: "text-[#fd4444]",
        title: "Arrangement",
        description: "Provides musical arrangement and orchestration services."
      }
    ]
  },
  data: {
    name: "Data",
    title: "Meet Data, Your AI Data Scientist",
    role: "AI Data Scientist",
    description: "Your expert AI data scientist, unlocking insights from complex datasets.",
    gradient: "from-[#ff6b6b] to-[#fd4444]",
    mainIcon: ChartBar,
    features: [
      {
        icon: ChartBar,
        color: "text-[#fd4444]",
        title: "Data Analysis",
        description: "Analyzes complex datasets to extract meaningful insights."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Machine Learning",
        description: "Develops and implements machine learning models."
      },
      {
        icon: Database,
        color: "text-[#fd4444]",
        title: "Data Visualization",
        description: "Creates clear and informative data visualizations."
      }
    ]
  },
  core: {
    name: "Core",
    title: "Meet Core, Your AI Core Engineer",
    role: "AI Core Engineer",
    description: "Your expert AI core engineer, building robust system foundations.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: Settings,
    features: [
      {
        icon: Settings,
        color: "text-[#fd4444]",
        title: "Core Systems",
        description: "Develops and maintains core system infrastructure."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Performance",
        description: "Optimizes system performance and reliability."
      },
      {
        icon: Binary,
        color: "text-[#fd4444]",
        title: "Architecture",
        description: "Designs scalable system architectures."
      }
    ]
  },
  fin: {
    name: "Fin",
    title: "Meet Fin, Your AI Financial Expert",
    role: "AI Financial Expert",
    description: "Your expert AI financial analyst, providing financial insights and strategy.",
    gradient: "from-[#ff6b6b] to-[#fd4444]",
    mainIcon: DollarSign,
    features: [
      {
        icon: DollarSign,
        color: "text-[#fd4444]",
        title: "Financial Analysis",
        description: "Provides comprehensive financial analysis and reporting."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Investment Strategy",
        description: "Develops data-driven investment strategies."
      },
      {
        icon: ChartBar,
        color: "text-[#fd4444]",
        title: "Risk Management",
        description: "Assesses and manages financial risks."
      }
    ]
  },
  sec: {
    name: "Sec",
    title: "Meet Sec, Your AI Security Expert",
    role: "AI Security Expert",
    description: "Your expert AI security specialist, protecting digital assets and infrastructure.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: Scale,
    features: [
      {
        icon: Scale,
        color: "text-[#fd4444]",
        title: "Security Analysis",
        description: "Conducts thorough security assessments and audits."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Threat Prevention",
        description: "Implements proactive security measures."
      },
      {
        icon: Settings,
        color: "text-[#fd4444]",
        title: "Security Operations",
        description: "Manages ongoing security operations and monitoring."
      }
    ]
  },
  algo: {
    name: "Algo",
    title: "Meet Algo, Your AI Algorithm Expert",
    role: "AI Algorithm Expert",
    description: "Your expert AI algorithm specialist, optimizing computational solutions.",
    gradient: "from-[#ff6b6b] to-[#fd4444]",
    mainIcon: Binary,
    features: [
      {
        icon: Binary,
        color: "text-[#fd4444]",
        title: "Algorithm Design",
        description: "Designs efficient algorithms for complex problems."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Optimization",
        description: "Optimizes computational performance and efficiency."
      },
      {
        icon: ChartBar,
        color: "text-[#fd4444]",
        title: "Analysis",
        description: "Analyzes algorithm complexity and performance."
      }
    ]
  },
  db: {
    name: "DB",
    title: "Meet DB, Your AI Database Expert",
    role: "AI Database Expert",
    description: "Your expert AI database specialist, managing data infrastructure.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: Database,
    features: [
      {
        icon: Database,
        color: "text-[#fd4444]",
        title: "Database Design",
        description: "Designs and implements efficient database structures."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Data Management",
        description: "Manages and optimizes database operations."
      },
      {
        icon: Settings,
        color: "text-[#fd4444]",
        title: "Performance Tuning",
        description: "Optimizes database performance and reliability."
      }
    ]
  },
  cal: {
    name: "Cal",
    title: "Meet Cal, Your AI Calculator",
    role: "AI Calculator",
    description: "Your expert AI calculator, processing complex computations.",
    gradient: "from-[#ff6b6b] to-[#fd4444]",
    mainIcon: Calculator,
    features: [
      {
        icon: Calculator,
        color: "text-[#fd4444]",
        title: "Computation",
        description: "Processes complex mathematical calculations."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Analysis",
        description: "Provides mathematical analysis and insights."
      },
      {
        icon: ChartBar,
        color: "text-[#fd4444]",
        title: "Modeling",
        description: "Creates mathematical models and simulations."
      }
    ]
  },
  chat: {
    name: "Chat",
    title: "Meet Chat, Your AI Conversation Expert",
    role: "AI Conversation Expert",
    description: "Your expert AI conversation specialist, facilitating natural communication.",
    gradient: "from-[#fd4444] to-[#ff6b6b]",
    mainIcon: MessageCircle,
    features: [
      {
        icon: MessageCircle,
        color: "text-[#fd4444]",
        title: "Natural Language",
        description: "Processes and generates natural language responses."
      },
      {
        icon: Bot,
        color: "text-[#ff6b6b]",
        title: "Conversation",
        description: "Manages dynamic conversation flows."
      },
      {
        icon: Lightbulb,
        color: "text-[#fd4444]",
        title: "Understanding",
        description: "Comprehends context and user intent."
      }
    ]
  }
};

export type TeamMemberId = keyof typeof teamMembers;
