
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Settings, Activity, Cloud, Shield } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const TeamOpera = () => {
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
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-4">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet Opera, Your Operations Engineer
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your efficient AI operations engineer, maintaining system reliability
              and optimizing performance across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/50"
            >
              <Activity className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">System Monitoring</h3>
              <p className="text-gray-400">
                Maintains 24/7 monitoring of all systems and infrastructure.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/50"
            >
              <Cloud className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Operations</h3>
              <p className="text-gray-400">
                Manages cloud infrastructure and ensures optimal resource utilization.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/50"
            >
              <Shield className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">System Security</h3>
              <p className="text-gray-400">
                Implements and maintains robust security protocols and practices.
              </p>
            </motion.div>
          </div>

          <TeamSlack />

          <div className="text-center max-w-2xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-4">Need Human Assistance?</h2>
            <p className="text-gray-400 mb-6">
              While Opera is highly capable, sometimes you might need human expertise.
              Contact Sensei Group for dedicated support and consultation.
            </p>
            <Button 
              onClick={handleContactSensei}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
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

export default TeamOpera;
