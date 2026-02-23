
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Bot, 
  Users, 
  Shield, 
  Braces, 
  History, 
  Briefcase, 
  Eye, 
  Video, 
  GitCommit, 
  Zap, 
  BrainCircuit,
  ArrowRight,
  CheckCircle,
  Lock
} from "lucide-react";
import TeamHero from "@/components/team/TeamHero";
import AgentGallery from "@/components/team/AgentGallery";
import HumanAIIntegration from "@/components/team/HumanAIIntegration";
import WorkspaceIntegration from "@/components/team/WorkspaceIntegration";
import AuditFeatures from "@/components/team/AuditFeatures";
import EnterpriseReadiness from "@/components/team/EnterpriseReadiness";
import CallToAction from "@/components/team/CallToAction";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Hanzo Team | AI + Human Integration | hanzo.team</title>
        <meta
          name="description"
          content="Hanzo Team combines autonomous AI agents with human intelligence. Train AI via Zoom calls, monitor real-time work, and benefit from enterprise-grade security and audit features."
        />
      </Helmet>

      <Navbar />

      <main>
        <TeamHero />
        <AgentGallery />
        <HumanAIIntegration />
        <WorkspaceIntegration />
        <AuditFeatures />
        <EnterpriseReadiness />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Team;
