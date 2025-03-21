
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";
import TaskCard from "../TaskCard";
import KanbanAddTaskButton from "./KanbanAddTaskButton";
import { Task } from "../data/tasks/task-data";

interface KanbanColumnProps {
  column: {
    id: string;
    title: string;
    icon: React.ReactNode;
    tasks: Task[];
  };
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: () => void;
  onDragStart: (task: Task) => void;
  onTaskClick: (task: Task) => void;
  onAddTask: (columnId: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  onDragOver,
  onDrop,
  onDragStart,
  onTaskClick,
  onAddTask
}) => {
  return (
    <div 
      key={column.id} 
      className="w-72 flex flex-col bg-black rounded-lg"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="flex items-center justify-between p-3 border-b border-gray-800">
        <div className="flex items-center">
          {column.icon}
          <h3 className="font-medium ml-2">{column.title}</h3>
          <span className="text-sm text-gray-500 ml-1">{column.tasks.length}</span>
        </div>
        <div className="flex items-center">
          <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white" onClick={() => onAddTask(column.id)}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {column.tasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={() => onDragStart(task)}
            onClick={() => onTaskClick(task)}
            className="cursor-pointer"
          >
            <TaskCard task={task} />
          </div>
        ))}
        <KanbanAddTaskButton onAddTask={() => onAddTask(column.id)} />
      </div>
    </div>
  );
};

export default KanbanColumn;
