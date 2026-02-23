'use client'

import React from "react";
import { Textarea } from "@hanzo/ui";
import { Input } from "@hanzo/ui";
import { Button } from "@hanzo/ui";
import { Bot } from "lucide-react";
import AssigneesList from "./AssigneesList";
import LabelsList from "./LabelsList";
import StatusSelector from "./StatusSelector";
import PrioritySelector from "./PrioritySelector";
import { Task } from "../data/tasks/task-data";

type TaskFieldValue = string | string[] | number | Date | null;

interface TaskDetailContentProps {
  task: Task;
  onTaskChange: (field: string, value: TaskFieldValue) => void;
}

const TaskDetailContent: React.FC<TaskDetailContentProps> = ({ task, onTaskChange }) => {
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTaskChange("description", e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTaskChange("dueDate", e.target.value);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-400 mb-1">Description</label>
          <Textarea 
            value={task.description || ""}
            onChange={handleDescriptionChange}
            placeholder="Add a description..."
            className="min-h-32 bg-gray-900 border-gray-800"
          />
        </div>

        <AssigneesList 
          assignees={task.assignees} 
          onRemove={(id) => {
            const newAssignees = task.assignees?.filter(a => a.id !== id);
            onTaskChange("assignees", newAssignees);
          }} 
        />

        <LabelsList 
          labels={task.labels} 
          onRemove={(id) => {
            const newLabels = task.labels?.filter(l => l.id !== id);
            onTaskChange("labels", newLabels);
          }} 
        />
      </div>

      <div className="space-y-6">
        <StatusSelector 
          status={task.status} 
          onChange={(value) => onTaskChange("status", value)} 
        />

        <PrioritySelector 
          priority={task.priority} 
          onChange={(value) => onTaskChange("priority", value)} 
        />

        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1">Due Date</label>
          <Input 
            type="date"
            value={task.dueDate || ""}
            onChange={handleDateChange}
            className="bg-gray-900 border-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1">AI Agents</label>
          <Button 
            variant="outline" 
            className="w-full justify-start bg-gray-900 border-gray-800"
          >
            <Bot className="mr-2 h-4 w-4" />
            Assign Agent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailContent;
