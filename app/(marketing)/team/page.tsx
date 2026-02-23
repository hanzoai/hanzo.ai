'use client'


import { useEffect } from "react";
import { motion } from "framer-motion";
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
import { Badge } from "@hanzo/ui";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      

      <main>
        <TeamHero />
        <AgentGallery />
        <HumanAIIntegration />
        <WorkspaceIntegration />
        <AuditFeatures />
        <EnterpriseReadiness />
        <CallToAction />
      </main>

      
    </div>
  );
};

export default Team;
