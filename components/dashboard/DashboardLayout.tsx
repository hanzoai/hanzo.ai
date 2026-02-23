'use client'


import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@hanzo/ui";
import {
  Home,
  LayoutDashboard,
  Users,
  Settings,
  FileCog,
  Bot,
  Search,
  ChevronDown,
  PlusCircle,
  BellDot,
  Database,
  Server,
  Cpu,
  Layers,
  Command,
  Keyboard,
  Blocks
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex h-screen bg-[var(--black)] text-[var(--white)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-56 border-r border-gray-900 flex flex-col">
        {/* User/Team Selector */}
        <div className="p-3 border-b border-gray-900 flex items-center">
          <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center text-xs font-bold mr-2">H</div>
          <span className="font-medium">Hanzo AI</span>
          <ChevronDown className="w-4 h-4 ml-auto" />
        </div>
        
        {/* Search */}
        <div className="px-3 py-2 border-b border-gray-900">
          <Button variant="outline" className="w-full justify-start text-neutral-400 bg-[var(--black)] border-gray-800">
            <Search className="w-4 h-4 mr-2" />
            <span>Search...</span>
            <div className="ml-auto flex items-center text-xs text-neutral-500">
              <Command className="w-3 h-3 mr-1" />
              <span>K</span>
            </div>
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <div className="mb-6">
            <div className="text-neutral-400 text-xs font-medium mb-2 px-2">WORKSPACE</div>
            <ul className="space-y-1">
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]" onClick={() => router.push("/dashboard")}>
                  <LayoutDashboard className="w-4 h-4 mr-2" /> 
                  Dashboard
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <FileCog className="w-4 h-4 mr-2" /> 
                  Projects
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <Bot className="w-4 h-4 mr-2" /> 
                  AI Agents
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <Database className="w-4 h-4 mr-2" /> 
                  Data Sources
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <Server className="w-4 h-4 mr-2" />
                  Infrastructure
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]" onClick={() => router.push("/dashboard?view=blockchain")}>
                  <Blocks className="w-4 h-4 mr-2" />
                  Blockchain
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-medium mb-2 px-2">
              <span>MODELS</span>
              <Button size="icon" variant="ghost" className="h-4 w-4 text-neutral-400 hover:text-[var(--white)] hover:bg-gray-900">
                <PlusCircle className="h-3 w-3" />
              </Button>
            </div>
            <ul className="space-y-1">
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <div className="w-4 h-4 bg-[#ffffff] rounded-sm flex items-center justify-center text-[10px] mr-2">G</div>
                  GPT-4o
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <div className="w-4 h-4 bg-[#ff6b6b] rounded-sm flex items-center justify-center text-[10px] mr-2">C</div>
                  Claude 3
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center text-[10px] mr-2">L</div>
                  Llama 3
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-medium mb-2 px-2">
              <span>TEAMS</span>
              <Button size="icon" variant="ghost" className="h-4 w-4 text-neutral-400 hover:text-[var(--white)] hover:bg-gray-900">
                <PlusCircle className="h-3 w-3" />
              </Button>
            </div>
            <ul className="space-y-1">
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center text-[10px] mr-2">E</div>
                  Engineering
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <div className="w-4 h-4 bg-[#ffffff] rounded-sm flex items-center justify-center text-[10px] mr-2">D</div>
                  Design
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                  <div className="w-4 h-4 bg-yellow-600 rounded-sm flex items-center justify-center text-[10px] mr-2">M</div>
                  Marketing
                </Button>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Footer */}
        <div className="mt-auto border-t border-gray-900 p-3">
          <ul className="space-y-1">
            <li>
              <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                <Settings className="w-4 h-4 mr-2" /> 
                Settings
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]">
                <Keyboard className="w-4 h-4 mr-2" /> 
                Keyboard Shortcuts
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-neutral-300 hover:bg-gray-900 hover:text-[var(--white)]" onClick={() => router.push("/")}>
                <Home className="w-4 h-4 mr-2" /> 
                Home
              </Button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="h-12 border-b border-gray-900 flex items-center px-4">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-3">
            <Button size="icon" variant="ghost" className="text-neutral-400 hover:text-[var(--white)]">
              <BellDot className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-800"></div>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-hidden p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
