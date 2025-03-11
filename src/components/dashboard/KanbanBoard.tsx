
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal, MessageSquare, CheckCircle, Clock, Zap } from "lucide-react";
import TaskCard from "./TaskCard";
import { DummyTaskData } from "./data";

interface TaskColumn {
  id: string;
  title: string;
  icon: React.ReactNode;
  tasks: any[];
}

const KanbanBoard = () => {
  const [columns, setColumns] = useState<TaskColumn[]>([
    {
      id: "backlog",
      title: "Backlog",
      icon: <Clock className="h-4 w-4 text-gray-400" />,
      tasks: DummyTaskData.filter(task => task.status === "backlog")
    },
    {
      id: "todo",
      title: "Todo",
      icon: <CheckCircle className="h-4 w-4 text-gray-400" />,
      tasks: DummyTaskData.filter(task => task.status === "todo")
    },
    {
      id: "in-progress",
      title: "In Progress",
      icon: <Zap className="h-4 w-4 text-yellow-500" />,
      tasks: DummyTaskData.filter(task => task.status === "in-progress")
    },
    {
      id: "done",
      title: "Done",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      tasks: DummyTaskData.filter(task => task.status === "done")
    }
  ]);

  return (
    <div className="h-full overflow-x-auto">
      <div className="flex space-x-4 h-full pb-6 min-w-max">
        {columns.map((column) => (
          <div 
            key={column.id} 
            className="w-72 flex flex-col bg-black rounded-lg"
          >
            <div className="flex items-center justify-between p-3 border-b border-gray-800">
              <div className="flex items-center">
                {column.icon}
                <h3 className="font-medium ml-2">{column.title}</h3>
                <span className="text-sm text-gray-500 ml-1">{column.tasks.length}</span>
              </div>
              <div className="flex items-center">
                <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {column.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
              <Button 
                className="w-full justify-start text-gray-400 hover:text-white border border-gray-800 bg-black hover:bg-gray-900" 
                variant="outline"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
