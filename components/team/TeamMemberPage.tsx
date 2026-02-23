'use client'




import { motion } from "framer-motion";
import { LucideIcon, ExternalLink, Mail, Phone, Shield, Users } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { Button } from "@hanzo/ui";
import { toast } from "@/hooks/use-toast";
import { teamMembers, TeamMemberId } from "@/lib/constants/team-members";
import { useTheme } from "@/contexts/ThemeContext";

interface TeamMemberPageProps {
  memberId: TeamMemberId;
}

const TeamMemberPage = ({ memberId }: TeamMemberPageProps) => {
  const member = teamMembers[memberId];
  const MainIcon = member.mainIcon;
  const { isDarkMode, getRoundingClass, getGlassClass } = useTheme();

  const handleContactSensei = () => {
    window.location.href = "https://sensei.group";
    toast({
      title: "Redirecting to Sensei Group",
      description: "Connecting you with human assistance..."
    });
  };

  const handleContactAgency = () => {
    window.location.href = "https://hanzo.agency";
    toast({
      title: "Redirecting to Hanzo Agency",
      description: "Connecting you with our creative team..."
    });
  };

  // Extract the first part of the description to use as specialty
  const specialty = member.description.split(',')[0].trim();

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      
      <main className="pt-32 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${member.gradient} mb-4`}>
              <MainIcon className="h-8 w-8 text-[var(--white)]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {member.title}
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              {member.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {member.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl border border-gray-800 ${getGlassClass()}`}
                >
                  <FeatureIcon className={`h-8 w-8 ${feature.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <TeamSlack />

          {/* Expertise Section */}
          <div className="mt-16 mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">How {member.name} Works With Our Expert Partners</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Hanzo Agency Card */}
              <div className="p-6 bg-gradient-to-br from-red-900/50 to-neutral-900/30 rounded-xl border border-[#ffffff]/20 hover:border-[#ffffff]/40 transition-colors">
                <div className="p-3 rounded-lg bg-[#ffffff]/20 self-start inline-block mb-4">
                  <Users className="h-6 w-6 text-[#ffffff]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--white)] mb-3">Hanzo Agency</h3>
                <p className="text-neutral-300 mb-5">
                  {member.name} collaborates with our creative agency to help brands transform their digital
                  presence using cutting-edge AI-powered design and marketing strategies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={handleContactAgency}
                    className="bg-[#ffffff] hover:bg-[#cccccc] text-[var(--white)]"
                  >
                    Work with Hanzo Agency
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <a href="/contact" className="flex items-center gap-2 px-5 py-2.5 border border-[#ffffff]/40 hover:border-[#ffffff] rounded-md text-[#ffffff] hover:text-[#ff6b6b] transition-colors">
                    <span>Learn more</span>
                    <Mail size={14} />
                  </a>
                </div>
              </div>
              
              {/* Sensei Group Card */}
              <div className="p-6 bg-gradient-to-br from-green-900/50 to-neutral-900/30 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="p-3 rounded-lg bg-green-500/20 self-start inline-block mb-4">
                  <Shield className="h-6 w-6 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--white)] mb-3">Sensei Group</h3>
                <p className="text-neutral-300 mb-5">
                  When your project requires human expertise, {member.name} works alongside our collective of 
                  CXOs and industry specialists to implement enterprise-grade solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleContactSensei}
                    className="bg-green-600 hover:bg-green-500 text-[var(--white)]"
                  >
                    Contact Sensei Group
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <a href="tel:+1234567890" className="flex items-center gap-2 px-5 py-2.5 border border-green-500/40 hover:border-green-500 rounded-md text-green-400 hover:text-green-300 transition-colors">
                    <span>Schedule a call</span>
                    <Phone size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="text-center max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-6">What {member.name} Can Do For You</h2>
            <p className="text-neutral-400 mb-8">
              {member.name} specializes in {specialty} to help you achieve your goals.
              For the best results, consider working with our expert human teams at Hanzo Agency or Sensei Group.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                onClick={handleContactAgency}
                className={`bg-gradient-to-r from-[#ffffff] to-[#ff6b6b] hover:opacity-90 ${getRoundingClass()}`}
              >
                Creative Services
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={handleContactSensei}
                className={`bg-gradient-to-r from-green-600 to-green-500 hover:opacity-90 ${getRoundingClass()}`}
              >
                Enterprise Solutions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </main>

      
    </div>
  );
};

export default TeamMemberPage;
