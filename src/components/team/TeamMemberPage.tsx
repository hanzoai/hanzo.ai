
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { teamMembers, TeamMemberId } from "@/constants/team-members";

interface TeamMemberPageProps {
  memberId: TeamMemberId;
}

const TeamMemberPage = ({ memberId }: TeamMemberPageProps) => {
  const member = teamMembers[memberId];
  const MainIcon = member.mainIcon;

  const handleContactSensei = () => {
    window.location.href = "https://sensei.group";
    toast({
      title: "Redirecting to Sensei Group",
      description: "Connecting you with human assistance..."
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${member.gradient} mb-4`}>
              <MainIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {member.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                  className="p-6 rounded-2xl border border-gray-800 bg-black/50"
                >
                  <FeatureIcon className={`h-8 w-8 ${feature.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <TeamSlack />

          <div className="text-center max-w-2xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-4">Need Human Assistance?</h2>
            <p className="text-gray-400 mb-6">
              While {member.name} is highly capable, sometimes you might need human expertise.
              Contact Sensei Group for dedicated support and consultation.
            </p>
            <Button 
              onClick={handleContactSensei}
              className={`bg-gradient-to-r ${member.gradient} hover:opacity-90`}
            >
              Contact Sensei Group
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberPage;
