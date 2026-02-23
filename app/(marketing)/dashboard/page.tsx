'use client'


import React, { useState, useEffect, Suspense } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KanbanBoard from "@/components/dashboard/KanbanBoard";
import AgentsList from "@/components/dashboard/AgentsList";
import BlockchainDashboard from "@/components/dashboard/BlockchainDashboard";
import { Button } from "@hanzo/ui";
import { PlusCircle, LayoutGrid, Users, ChartBar, X, Plus, Database, Bot, Activity, Server, Blocks } from "lucide-react";
import CommandPalette from "@/components/dashboard/CommandPalette";

import TabsManager, { TabType } from "@/components/dashboard/TabsManager";
import { v4 as uuidv4 } from 'uuid';
import { useRouter, useSearchParams } from "next/navigation";

const Dashboard = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const viewParam = searchParams.get('view');
  const [view, setView] = useState<"board" | "agents" | "analytics">(
    (viewParam as "board" | "agents" | "analytics") || "board"
  );

  // For tabs
  const [tabs, setTabs] = useState<TabType[]>([
    {
      id: "tab-1",
      title: "Board",
      icon: <LayoutGrid className="h-4 w-4" />,
      content: <KanbanBoard />
    },
    {
      id: "tab-2",
      title: "Agents",
      icon: <Bot className="h-4 w-4" />,
      content: <AgentsList />
    },
    {
      id: "tab-3",
      title: "Blockchain",
      icon: <Blocks className="h-4 w-4" />,
      content: <BlockchainDashboard />
    },
    {
      id: "tab-4",
      title: "Analytics",
      icon: <ChartBar className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[var(--black)] border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Usage Overview</h3>
            <p className="text-2xl font-semibold">24.5K</p>
            <p className="text-muted-foreground text-sm">Total tokens used today</p>
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
          
          <div className="bg-[var(--black)] border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Agent Activity</h3>
            <p className="text-2xl font-semibold">8</p>
            <p className="text-muted-foreground text-sm">Active agents</p>
            <div className="h-40 mt-4 flex items-center justify-center">
              <div className="w-40 h-40 relative rounded-full border-4 border-gray-800 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gray-800"></div>
                <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary/10"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-primary/10"></div>
                <div className="absolute top-10 left-0 w-3 h-3 rounded-full bg-primary/10"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--black)] border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Cost Tracking</h3>
            <p className="text-2xl font-semibold">$12.85</p>
            <p className="text-muted-foreground text-sm">Spent this month</p>
            <div className="h-40 mt-4">
              <div className="h-full flex flex-col justify-between">
                <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                  <div className="bg-primary/10 h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                  <div className="bg-primary/10 h-full rounded-full" style={{ width: '42%' }}></div>
                </div>
                <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                  <div className="bg-primary/10 h-full rounded-full" style={{ width: '28%' }}></div>
                </div>
                <div className="w-full bg-gray-900 h-4 rounded-full overflow-hidden">
                  <div className="bg-primary/10 h-full rounded-full" style={{ width: '13%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]);

  const addNewTab = () => {
    const tabOptions = [
      { 
        title: "New Board", 
        icon: <LayoutGrid className="h-4 w-4" />, 
        content: <KanbanBoard /> 
      },
      { 
        title: "Agents", 
        icon: <Bot className="h-4 w-4" />, 
        content: <AgentsList /> 
      },
      {
        title: "Blockchain",
        icon: <Blocks className="h-4 w-4" />,
        content: <BlockchainDashboard />
      },
      {
        title: "Analytics",
        icon: <ChartBar className="h-4 w-4" />,
        content: tabs[3].content
      },
      {
        title: "Data Sources",
        icon: <Database className="h-4 w-4" />,
        content: <div className="p-4">Data Sources content</div>
      },
      {
        title: "Infrastructure",
        icon: <Server className="h-4 w-4" />,
        content: <div className="p-4">Infrastructure content</div>
      }
    ];

    // For now, just add a random tab type
    const randomOption = tabOptions[Math.floor(Math.random() * tabOptions.length)];
    const newTab = {
      id: `tab-${uuidv4()}`,
      title: randomOption.title,
      icon: randomOption.icon,
      content: randomOption.content
    };

    setTabs([...tabs, newTab]);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold">Workspace</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your AI tasks and agents</p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden border border-gray-800 rounded-lg bg-[var(--black)]">
          <TabsManager initialTabs={tabs} onAddTab={addNewTab} />
        </div>
      </div>
      
      <CommandPalette />
    </DashboardLayout>
  );
};

function DashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Dashboard />
    </Suspense>
  );
}

export default DashboardPage;
