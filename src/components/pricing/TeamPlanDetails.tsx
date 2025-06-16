import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/radix-slider";
import { Cpu, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/radix-button";

interface TeamPlanDetailsProps {
  fromProPlan?: boolean;
  fromDevPlan?: boolean;
}

const TeamPlanDetails = ({ fromProPlan = false, fromDevPlan = false }: TeamPlanDetailsProps) => {
  const [aiUnits, setAiUnits] = useState<number>(5);
  const [teamSize, setTeamSize] = useState<number>(1);
  
  // Set AI units to 10 if coming from Pro plan
  useEffect(() => {
    if (fromProPlan) {
      setAiUnits(10);
    }
  }, [fromProPlan]);
  
  const totalMonthlyPrice = teamSize * 30;
  const additionalAICost = aiUnits > 5 ? (aiUnits - 5) * 10 : 0;
  const totalCost = totalMonthlyPrice + additionalAICost;

  // Determine title based on where user is coming from
  const getTitle = () => {
    if (fromDevPlan) {
      return "Dev Plan Configuration";
    } else if (teamSize > 1 || fromProPlan) {
      return "Team Plan Configuration";
    }
    return "Configure Plan";
  };

  return (
    <section id="team-config-section" className="max-w-7xl mx-auto mb-16 mt-24 scroll-mt-24">
      <div className="bg-[var(--black)] border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
        <div className="border-b border-gray-800/40 px-2 py-4 mb-6">
          <h2 className="text-2xl font-bold">{getTitle()}</h2>
          <p className="text-neutral-400 mt-2">Scale resources to match your exact needs</p>
        </div>
        
        <div className="p-2 max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-neutral-400" />
              <div>
                <h3 className="text-xl font-bold">{fromDevPlan ? "Dev Plan" : "Team Plan"}</h3>
                <p className="text-neutral-400">Custom resources for {fromDevPlan ? "your projects" : "your entire team"}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">${totalCost}/mo</div>
              <div className="text-neutral-400 text-sm">
                {teamSize > 1 
                  ? `Total for ${teamSize} team member${teamSize !== 1 ? 's' : ''}` 
                  : "Base price"}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-lg font-medium flex items-center gap-2">
                    <Users className="h-5 w-5 text-neutral-400" />
                    {fromDevPlan ? "Developer Accounts" : "Team Size"}
                  </label>
                  <span className="text-xl font-semibold">{teamSize} {teamSize === 1 ? (fromDevPlan ? "account" : "member") : (fromDevPlan ? "accounts" : "members")}</span>
                </div>
                <Slider 
                  className="mt-4" 
                  value={[teamSize]} 
                  onValueChange={(value) => setTeamSize(value[0])} 
                  min={1} 
                  max={50} 
                  step={1}
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
                <div className="text-neutral-400 mt-2">
                  ${teamSize * 30}/mo (${30}/{fromDevPlan ? "account" : "user"})
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-lg font-medium flex items-center gap-2">
                    <Zap className="h-5 w-5 text-neutral-400" />
                    AI Credits
                  </label>
                  <span className="text-xl font-semibold">{aiUnits} per {fromDevPlan ? "account" : "member"}</span>
                </div>
                <Slider 
                  className="mt-4" 
                  value={[aiUnits]} 
                  onValueChange={(value) => setAiUnits(value[0])} 
                  min={1} 
                  max={20} 
                  step={1}
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-1">
                  <span>1</span>
                  <span>10</span>
                  <span>20</span>
                </div>
                <div className="text-neutral-400 mt-2">
                  {aiUnits <= 5 ? 
                    "Included in base price" : 
                    `+$${additionalAICost}/mo for additional AI processing`}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 mb-8">
            <h3 className="text-xl font-semibold mb-4">{fromDevPlan ? "Dev Plan Benefits" : "Team Plan Benefits"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-neutral-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">AI-Powered Development</p>
                  <p className="text-neutral-400 text-sm">Scale AI processing resources to match your exact workflow needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-neutral-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{fromDevPlan ? "Developer Flexibility" : "Centralized Management"}</p>
                  <p className="text-neutral-400 text-sm">{fromDevPlan ? "Configure your development environment to your exact specifications" : "Single dashboard for user administration, permissions, and unified billing"}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="h-5 w-5 text-neutral-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Premium Performance</p>
                  <p className="text-neutral-400 text-sm">Priority access to all platform services with enhanced response times</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-neutral-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Flexible Scaling</p>
                  <p className="text-neutral-400 text-sm">Adjust AI credits month-to-month as your {fromDevPlan ? "project" : "team and project"} needs evolve</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-black border border-gray-300 hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all duration-300 px-10 py-6 text-lg">
              Get Started with {fromDevPlan ? "Dev" : "Team"} Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPlanDetails;