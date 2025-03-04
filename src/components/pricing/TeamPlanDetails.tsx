
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Cpu, Zap, Server, Users } from "lucide-react";
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const TeamPlanDetails = () => {
  const [aiUnits, setAiUnits] = useState<number>(5);
  const [computeUnits, setComputeUnits] = useState<number>(5);
  const [teamSize, setTeamSize] = useState<number>(5);
  
  const totalMonthlyPrice = teamSize * 30;
  const additionalAICost = aiUnits > 5 ? (aiUnits - 5) * 10 : 0;
  const additionalComputeCost = computeUnits > 5 ? (computeUnits - 5) * 15 : 0;
  const totalCost = totalMonthlyPrice + additionalAICost + additionalComputeCost;

  return (
    <DrawerContent className="bg-black text-white border-t border-gray-800 p-0">
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-800" />
      
      <DrawerHeader className="border-b border-gray-800/40 px-6 py-4">
        <DrawerTitle className="text-xl font-bold">Configure Team Plan</DrawerTitle>
      </DrawerHeader>
      
      <div className="p-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-gray-400" />
            <h2 className="text-2xl font-bold">Team Plan Details</h2>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">${totalCost}/mo</div>
            <div className="text-gray-400 text-sm">Total for {teamSize} team members</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-lg font-medium flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  Team Size
                </label>
                <span className="text-xl font-semibold">{teamSize} users</span>
              </div>
              <Slider 
                className="mt-4" 
                value={[teamSize]} 
                onValueChange={(value) => setTeamSize(value[0])} 
                min={1} 
                max={50} 
                step={1}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>25</span>
                <span>50</span>
              </div>
              <div className="text-gray-400 mt-2">
                ${teamSize * 30}/mo (${30}/user)
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-lg font-medium flex items-center gap-2">
                  <Zap className="h-5 w-5 text-gray-400" />
                  AI Units
                </label>
                <span className="text-xl font-semibold">{aiUnits} units per user</span>
              </div>
              <Slider 
                className="mt-4" 
                value={[aiUnits]} 
                onValueChange={(value) => setAiUnits(value[0])} 
                min={1} 
                max={20} 
                step={1}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>10</span>
                <span>20</span>
              </div>
              <div className="text-gray-400 mt-2">
                {aiUnits <= 5 ? 
                  "Included in base price" : 
                  `+$${additionalAICost}/mo for ${aiUnits - 5} additional units`}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-lg font-medium flex items-center gap-2">
                  <Server className="h-5 w-5 text-gray-400" />
                  Compute Units
                </label>
                <span className="text-xl font-semibold">{computeUnits} units per user</span>
              </div>
              <Slider 
                className="mt-4" 
                value={[computeUnits]} 
                onValueChange={(value) => setComputeUnits(value[0])} 
                min={1} 
                max={20} 
                step={1}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>10</span>
                <span>20</span>
              </div>
              <div className="text-gray-400 mt-2">
                {computeUnits <= 5 ? 
                  "Included in base price" : 
                  `+$${additionalComputeCost}/mo for ${computeUnits - 5} additional units`}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-xl font-semibold mb-3">Team Plan Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Cpu className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Dedicated Resources</p>
                <p className="text-gray-400 text-sm">Scale AI and compute resources based on your exact needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Team Management</p>
                <p className="text-gray-400 text-sm">Centralized billing and user administration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Enhanced Performance</p>
                <p className="text-gray-400 text-sm">Priority access to all Hanzo services</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Server className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Flexible Scaling</p>
                <p className="text-gray-400 text-sm">Adjust resources month-to-month based on project needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DrawerFooter className="border-t border-gray-800/40 px-6 py-4">
        <Button size="lg" className="bg-white hover:bg-gray-200 text-black w-full sm:w-auto px-8 py-6 text-lg">
          Start with Team Plan
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default TeamPlanDetails;
