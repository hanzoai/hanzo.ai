
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MessagesSquare, Bot, Layout } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const TeamMark = () => {
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
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
              <MessagesSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet Mark, Your Marketing Expert
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your AI marketing strategist, crafting compelling campaigns and driving
              engagement across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/50"
            >
              <Bot className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Campaign Strategy</h3>
              <p className="text-gray-400">
                Develops data-driven marketing campaigns that resonate with your target audience.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/50"
            >
              <Layout className="h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Content Planning</h3>
              <p className="text-gray-400">
                Creates engaging content strategies that drive growth and engagement.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/50"
            >
              <MessagesSquare className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-400">
                Provides deep insights and metrics to optimize marketing performance.
              </p>
            </motion.div>
          </div>

          <TeamSlack />

          <div className="text-center max-w-2xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-4">Need Human Assistance?</h2>
            <p className="text-gray-400 mb-6">
              While Mark is highly capable, sometimes you might need human expertise.
              Contact Sensei Group for dedicated support and consultation.
            </p>
            <Button 
              onClick={handleContactSensei}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
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

export default TeamMark;
