
import React from "react";
import { Bot, MessageSquare, Paperclip, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: {
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
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const priorityColors = {
    low: "bg-gray-500",
    medium: "bg-white/10",
    high: "bg-white/10"
  };

  return (
    <div className="bg-gray-900 rounded-md p-3 border border-gray-800 hover:border-gray-700 cursor-pointer transition-colors">
      {/* Task ID and Priority */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-neutral-500 flex items-center">
          <span>HAN-{task.id}</span>
        </div>
        {task.priority && (
          <div className={cn("h-2 w-2 rounded-full", priorityColors[task.priority])}></div>
        )}
      </div>
      
      {/* Title */}
      <h3 className="font-medium text-sm mb-2">{task.title}</h3>
      
      {/* Description (optional) */}
      {task.description && (
        <p className="text-xs text-neutral-400 mb-3 line-clamp-2">{task.description}</p>
      )}
      
      {/* Labels */}
      {task.labels && task.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {task.labels.map(label => (
            <span 
              key={label.id} 
              className="px-2 py-0.5 text-xs rounded-full" 
              style={{ backgroundColor: `${label.color}20`, color: label.color }}
            >
              {label.name}
            </span>
          ))}
        </div>
      )}
      
      {/* Footer */}
      <div className="flex items-center justify-between mt-2">
        {/* Assignees */}
        <div className="flex -space-x-2">
          {task.assignees && task.assignees.map((assignee, index) => (
            <div 
              key={assignee.id} 
              className="h-6 w-6 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-[10px]"
              title={assignee.name}
            >
              {assignee.avatar ? (
                <img src={assignee.avatar} alt={assignee.name} className="h-full w-full rounded-full" />
              ) : (
                assignee.name.charAt(0)
              )}
            </div>
          ))}
          
          {task.agentCount && task.agentCount > 0 && (
            <div 
              className="h-6 w-6 rounded-full bg-white/10 border-2 border-gray-900 flex items-center justify-center"
              title={`${task.agentCount} AI agents`}
            >
              <Bot className="h-3 w-3 text-white" />
            </div>
          )}
        </div>
        
        {/* Metadata */}
        <div className="flex items-center space-x-2 text-neutral-400">
          {task.messageCount && task.messageCount > 0 && (
            <div className="flex items-center text-xs">
              <MessageSquare className="h-3 w-3 mr-1" />
              {task.messageCount}
            </div>
          )}
          
          {task.dueDate && (
            <div className="flex items-center text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
