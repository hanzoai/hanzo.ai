
import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { 
  Bot, Search, ListTodo, 
  PlusCircle, Settings, 
  LayoutGrid, Users, X 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the command palette with Command+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const executeCommand = (command: string) => {
    switch (command) {
      case "new-task":
        // Add implementation to create a new task
        break;
      case "new-agent":
        // Add implementation to create a new agent
        break;
      case "board":
        navigate("/dashboard?view=board");
        break;
      case "agents":
        navigate("/dashboard?view=agents");
        break;
      case "analytics":
        navigate("/dashboard?view=analytics");
        break;
      default:
        break;
    }
    setOpen(false);
  };

  return (
    <>
      {/* Keyboard shortcut hint */}
      <div className="fixed bottom-4 right-4 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-gray-400">
        Press <kbd className="px-2 py-1 bg-gray-800 rounded">⌘K</kbd> for commands
      </div>
      
      {/* Command dialog */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 w-full max-w-xl overflow-hidden">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input 
                  className="bg-transparent border-none outline-none text-sm"
                  placeholder="Search commands..." 
                  autoFocus
                />
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <Command className="p-2">
              <Command.List className="max-h-80 overflow-auto">
                <Command.Group heading="Tasks">
                  <Command.Item 
                    onSelect={() => executeCommand("new-task")}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer text-sm"
                  >
                    <PlusCircle className="w-4 h-4 text-gray-400" />
                    Create new task
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => executeCommand("board")}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer text-sm"
                  >
                    <ListTodo className="w-4 h-4 text-gray-400" />
                    Go to task board
                  </Command.Item>
                </Command.Group>
                
                <Command.Group heading="Agents">
                  <Command.Item 
                    onSelect={() => executeCommand("new-agent")}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer text-sm"
                  >
                    <PlusCircle className="w-4 h-4 text-gray-400" />
                    Create new agent
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => executeCommand("agents")}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer text-sm"
                  >
                    <Bot className="w-4 h-4 text-gray-400" />
                    Go to agents
                  </Command.Item>
                </Command.Group>
                
                <Command.Group heading="Dashboard">
                  <Command.Item 
                    onSelect={() => executeCommand("analytics")}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer text-sm"
                  >
                    <LayoutGrid className="w-4 h-4 text-gray-400" />
                    Go to analytics
                  </Command.Item>
                  <Command.Item 
                    onSelect={() => executeCommand("settings")}
                    className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer text-sm"
                  >
                    <Settings className="w-4 h-4 text-gray-400" />
                    Open settings
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}

export default CommandPalette;
