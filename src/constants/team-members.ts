
import { Code2, Paintbrush, Settings, MessagesSquare, HelpCircle, Palette, Music, ChartBar, Bot, DollarSign, Scale, Binary, Database, Calculator, MessageCircle, Lightbulb } from "lucide-react";

export const teamMembers = {
  dev: {
    name: "Dev",
    title: "Meet Dev, Your AI Developer",
    role: "AI Developer",
    description: "Your expert AI developer, specializing in full-stack development and system architecture.",
    gradient: "from-blue-500 to-cyan-500",
    mainIcon: Code2,
    features: [
      {
        icon: Bot,
        color: "text-blue-400",
        title: "System Architecture",
        description: "Designs robust and scalable system architectures for complex applications."
      },
      {
        icon: Code2,
        color: "text-cyan-400",
        title: "Full-Stack Development",
        description: "Implements end-to-end solutions with modern technologies and best practices."
      },
      {
        icon: Binary,
        color: "text-blue-400",
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
    gradient: "from-purple-500 to-pink-500",
    mainIcon: Paintbrush,
    features: [
      {
        icon: Paintbrush,
        color: "text-purple-400",
        title: "UI Design",
        description: "Creates stunning user interfaces with attention to detail and user experience."
      },
      {
        icon: Bot,
        color: "text-pink-400",
        title: "Design Systems",
        description: "Develops comprehensive design systems for consistent brand experiences."
      },
      {
        icon: Settings,
        color: "text-purple-400",
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
    gradient: "from-yellow-500 to-orange-500",
    mainIcon: Settings,
    features: [
      {
        icon: Settings,
        color: "text-yellow-400",
        title: "System Monitoring",
        description: "Maintains 24/7 monitoring of all systems and infrastructure."
      },
      {
        icon: Bot,
        color: "text-orange-400",
        title: "Cloud Operations",
        description: "Manages cloud infrastructure and ensures optimal resource utilization."
      },
      {
        icon: Scale,
        color: "text-yellow-400",
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
    gradient: "from-green-500 to-emerald-500",
    mainIcon: MessagesSquare,
    features: [
      {
        icon: Bot,
        color: "text-green-400",
        title: "Campaign Strategy",
        description: "Develops data-driven marketing campaigns that resonate with your target audience."
      },
      {
        icon: ChartBar,
        color: "text-emerald-400",
        title: "Content Planning",
        description: "Creates engaging content strategies that drive growth and engagement."
      },
      {
        icon: MessagesSquare,
        color: "text-green-400",
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
    gradient: "from-pink-500 to-rose-500",
    mainIcon: HelpCircle,
    features: [
      {
        icon: HelpCircle,
        color: "text-pink-400",
        title: "User Support",
        description: "Provides comprehensive technical support and problem resolution."
      },
      {
        icon: MessageCircle,
        color: "text-rose-400",
        title: "Documentation",
        description: "Creates and maintains detailed documentation and user guides."
      },
      {
        icon: Bot,
        color: "text-pink-400",
        title: "Training",
        description: "Develops and delivers training programs for users and teams."
      }
    ]
  },
  // ... Add other team members with similar structure
};

export type TeamMemberId = keyof typeof teamMembers;
