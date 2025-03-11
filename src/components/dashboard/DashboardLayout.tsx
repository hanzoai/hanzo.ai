
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  BellDot 
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-56 border-r border-gray-800 flex flex-col">
        {/* User/Team Selector */}
        <div className="p-3 border-b border-gray-800 flex items-center">
          <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center text-xs font-bold mr-2">H</div>
          <span className="font-medium">Hanzo AI</span>
          <ChevronDown className="w-4 h-4 ml-auto" />
        </div>
        
        {/* Search */}
        <div className="px-3 py-2 border-b border-gray-800">
          <Button variant="outline" className="w-full justify-start text-gray-400 bg-gray-900/60 border-gray-800">
            <Search className="w-4 h-4 mr-2" />
            <span>Search...</span>
            <span className="ml-auto opacity-60">⌘K</span>
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <div className="mb-6">
            <div className="text-gray-400 text-xs font-medium mb-2 px-2">WORKSPACE</div>
            <ul className="space-y-1">
              <li>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white" onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="w-4 h-4 mr-2" /> 
                  Dashboard
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
                  <FileCog className="w-4 h-4 mr-2" /> 
                  Projects
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Bot className="w-4 h-4 mr-2" /> 
                  AI Agents
                </Button>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between text-gray-400 text-xs font-medium mb-2 px-2">
              <span>TEAMS</span>
              <Button size="icon" variant="ghost" className="h-4 w-4 text-gray-400 hover:text-white hover:bg-gray-800">
                <PlusCircle className="h-3 w-3" />
              </Button>
            </div>
            <ul className="space-y-1">
              <li>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
                  <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center text-[10px] mr-2">E</div>
                  Engineering
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-[10px] mr-2">D</div>
                  Design
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
                  <div className="w-4 h-4 bg-yellow-600 rounded-sm flex items-center justify-center text-[10px] mr-2">M</div>
                  Marketing
                </Button>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Footer */}
        <div className="mt-auto border-t border-gray-800 p-3">
          <ul className="space-y-1">
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
                <Settings className="w-4 h-4 mr-2" /> 
                Settings
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white" onClick={() => navigate("/")}>
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
        <header className="h-12 border-b border-gray-800 flex items-center px-4">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-3">
            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
              <BellDot className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gray-700"></div>
          </div>
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
