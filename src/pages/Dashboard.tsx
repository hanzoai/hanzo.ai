
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KanbanBoard from "@/components/dashboard/KanbanBoard";
import AgentsList from "@/components/dashboard/AgentsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, LayoutGrid, Users, ChartBar } from "lucide-react";

const Dashboard = () => {
  const [view, setView] = useState<"board" | "agents" | "analytics">("board");

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Workspace</h1>
            <p className="text-gray-400 text-sm mt-1">Manage your AI tasks and agents</p>
          </div>
          <div className="flex space-x-2">
            <Button className="bg-black hover:bg-gray-900 border border-gray-800">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>

        <Tabs 
          defaultValue="board" 
          className="w-full" 
          onValueChange={(value) => setView(value as "board" | "agents" | "analytics")}
        >
          <TabsList className="bg-black border border-gray-800 mb-6">
            <TabsTrigger value="board" className="data-[state=active]:bg-gray-800">
              <LayoutGrid className="h-4 w-4 mr-2" />
              Board
            </TabsTrigger>
            <TabsTrigger value="agents" className="data-[state=active]:bg-gray-800">
              <Users className="h-4 w-4 mr-2" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gray-800">
              <ChartBar className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="board" className="h-full">
            <KanbanBoard />
          </TabsContent>
          
          <TabsContent value="agents" className="h-full">
            <AgentsList />
          </TabsContent>
          
          <TabsContent value="analytics" className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Usage Overview</h3>
                <p className="text-2xl font-semibold">24.5K</p>
                <p className="text-gray-400 text-sm">Total tokens used today</p>
                <div className="h-40 mt-4 flex items-end">
                  {[45, 35, 65, 50, 75, 55, 70].map((height, index) => (
                    <div 
                      key={index} 
                      className="w-full bg-gray-800 rounded-t-sm mx-0.5"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="bg-black border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Agent Activity</h3>
                <p className="text-2xl font-semibold">8</p>
                <p className="text-gray-400 text-sm">Active agents</p>
                <div className="h-40 mt-4 flex items-end justify-center">
                  <div className="w-40 h-40 relative rounded-full border-4 border-gray-800 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gray-800"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="absolute top-10 left-0 w-3 h-3 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Cost Tracking</h3>
                <p className="text-2xl font-semibold">$12.85</p>
                <p className="text-gray-400 text-sm">Spent this month</p>
                <div className="h-40 mt-4">
                  <div className="h-full flex flex-col justify-between">
                    <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: '42%' }}></div>
                    </div>
                    <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                      <div className="bg-green-600 h-full rounded-full" style={{ width: '28%' }}></div>
                    </div>
                    <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                      <div className="bg-yellow-600 h-full rounded-full" style={{ width: '13%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
