import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal, MessageSquare, CheckCircle, Clock, Zap } from "lucide-react";
import TaskCard from "./TaskCard";
import { DummyTaskData } from "./data";
import { TaskDetailModal } from "./task-detail";
import { toast } from "sonner";
import { Task } from "./data/tasks/task-data";

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority?: "low" | "medium" | "high";
  assignees?: { id: string; name: string; avatar?: string }[];
  labels?: { id: string; name: string; color: string }[];
  agentCount?: number;
  messageCount?: number;
  dueDate?: string;
}

interface TaskColumn {
  id: string;
  title: string;
  icon: React.ReactNode;
  tasks: Task[];
}

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(DummyTaskData);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const columns: TaskColumn[] = [
    {
      id: "backlog",
      title: "Backlog",
      icon: <Clock className="h-4 w-4 text-gray-400" />,
      tasks: tasks.filter(task => task.status === "backlog")
    },
    {
      id: "todo",
      title: "Todo",
      icon: <CheckCircle className="h-4 w-4 text-gray-400" />,
      tasks: tasks.filter(task => task.status === "todo")
    },
    {
      id: "in-progress",
      title: "In Progress",
      icon: <Zap className="h-4 w-4 text-yellow-500" />,
      tasks: tasks.filter(task => task.status === "in-progress")
    },
    {
      id: "done",
      title: "Done",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      tasks: tasks.filter(task => task.status === "done")
    }
  ];

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (columnId: string) => {
    if (draggedTask) {
      const updatedTasks = tasks.map(task => {
        if (task.id === draggedTask.id) {
          const updatedTask = { ...task, status: columnId };
          return updatedTask;
        }
        return task;
      });

      setTasks(updatedTasks);
      setDraggedTask(null);
      toast.success(`Task moved to ${columnId.replace("-", " ")}`);
    }
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    const updatedTasks = tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
    toast.success("Task updated successfully");
  };

  const handleAddTask = (columnId: string) => {
    const newTask: Task = {
      id: `${Date.now()}`,
      title: "New Task",
      status: columnId,
    };
    
    setTasks([...tasks, newTask]);
    setSelectedTask(newTask);
  };

  return (
    <div className="h-full overflow-x-auto">
      <div className="flex space-x-4 h-full pb-6 min-w-max">
        {columns.map((column) => (
          <div 
            key={column.id} 
            className="w-72 flex flex-col bg-black rounded-lg"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            <div className="flex items-center justify-between p-3 border-b border-gray-800">
              <div className="flex items-center">
                {column.icon}
                <h3 className="font-medium ml-2">{column.title}</h3>
                <span className="text-sm text-gray-500 ml-1">{column.tasks.length}</span>
              </div>
              <div className="flex items-center">
                <Button size="icon" variant="ghost" className="h-6 w-6 text-gray-400 hover:text-white" onClick={() => handleAddTask(column.id)}>
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
                  onDragStart={() => handleDragStart(task)}
                  onClick={() => handleTaskClick(task)}
                  className="cursor-pointer"
                >
                  <TaskCard task={task} />
                </div>
              ))}
              <Button 
                className="w-full justify-start text-gray-400 hover:text-white border border-gray-800 bg-black hover:bg-gray-900" 
                variant="outline"
                onClick={() => handleAddTask(column.id)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedTask && (
        <TaskDetailModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onUpdate={handleTaskUpdate}
        />
      )}
    </div>
  );
};

export default KanbanBoard;
