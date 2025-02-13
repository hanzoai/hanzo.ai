
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Paintbrush, Megaphone, HelpCircle, Settings, Lightbulb, Bot, MessagesSquare, Scale, DollarSign, ChartBar, Palette, Music, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Dev",
      role: "AI Developer",
      description: "Your expert AI developer, specializing in full-stack development and system architecture.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Des",
      role: "AI Designer",
      description: "Your creative AI designer, crafting beautiful and intuitive user experiences.",
      icon: Paintbrush,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Mark",
      role: "AI Marketing Director",
      description: "Your strategic AI marketing director, driving growth and engagement.",
      icon: Megaphone,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Su",
      role: "Help & Support Engineer",
      description: "Your dedicated AI support engineer, ensuring smooth operations and user satisfaction.",
      icon: HelpCircle,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Opera",
      role: "Operations Engineer",
      description: "Your efficient AI operations engineer, maintaining system reliability and performance.",
      icon: Settings,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Vi",
      role: "Visionary Leader",
      description: "Your innovative AI visionary leader, guiding the team towards excellence.",
      icon: Lightbulb,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Le",
      role: "Legal Counsel",
      description: "Provides comprehensive legal guidance and compliance oversight.",
      icon: Scale,
      gradient: "from-sky-500 to-blue-500"
    },
    {
      name: "Sal",
      role: "Sales Director",
      description: "Drives revenue growth and builds strategic partnerships.",
      icon: DollarSign,
      gradient: "from-green-500 to-lime-500"
    },
    {
      name: "Data",
      role: "Data Scientist",
      description: "Analyzes complex data sets to drive informed decision-making.",
      icon: ChartBar,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      name: "Art",
      role: "Creative Director",
      description: "Leads art direction and video production initiatives.",
      icon: Palette,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      name: "Mu",
      role: "Music Producer",
      description: "Creates and curates audio experiences and soundscapes.",
      icon: Music,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Fin",
      role: "Financial Advisor",
      description: "Manages financial planning, taxes, and fiscal strategy.",
      icon: Calculator,
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  const platformAgents = [
    {
      name: "Hanzo Chat",
      role: "Team Communication Platform",
      description: "Our Slack-like chat platform where all AI team members collaborate seamlessly. Features channels, direct messaging, and integrated AI workflows.",
      icon: MessagesSquare,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      name: "Hanzo Bot",
      role: "AI Framework",
      description: "Our advanced Agentic Framework that powers the entire AI team, enabling intelligent automation and collaboration.",
      icon: Bot,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet Your AI Team
          </h1>
          <p className="text-gray-400 text-lg">
            Powered by elizaOS, our AI team members work together seamlessly through Hanzo Chat
            to bring your projects to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.name}
                  className="relative group rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out" />
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${member.gradient} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Platform</h2>
            <p className="text-gray-400">
              The powerful platforms that enable our AI team to work together efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platformAgents.map((agent) => {
              const Icon = agent.icon;
              return (
                <div
                  key={agent.name}
                  className="relative group rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out" />
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${agent.gradient} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{agent.role}</p>
                  <p className="text-gray-400">{agent.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent opacity-50" />
            <div className="relative text-center max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
              <h2 className="text-3xl font-bold mb-4">You + AI Team = Infinite Possibilities</h2>
              <p className="text-gray-400 mb-8">
                Work alongside our AI team to bring your vision to life. From development to design, 
                marketing to operations - we're here to help you build anything imaginable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-purple-500 hover:bg-purple-600"
                  onClick={() => window.location.href = "/case-studies"}
                >
                  Read Case Studies
                </Button>
                <Button 
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
