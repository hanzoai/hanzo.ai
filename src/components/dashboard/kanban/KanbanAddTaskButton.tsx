
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface KanbanAddTaskButtonProps {
  onAddTask: () => void;
}

const KanbanAddTaskButton: React.FC<KanbanAddTaskButtonProps> = ({ onAddTask }) => {
  return (
    <Button 
      className="w-full justify-start text-gray-400 hover:text-white border border-gray-800 bg-black hover:bg-gray-900" 
      variant="outline"
      onClick={onAddTask}
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Task
    </Button>
  );
};

export default KanbanAddTaskButton;
