
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/radix-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Bot, Calendar, Tag, 
  User, AlertCircle, X,
  PlusCircle
} from "lucide-react";

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

interface TaskDetailModalProps {
  task: Task;
  onClose: () => void;
  onUpdate: (task: Task) => void;
}

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  onClose,
  onUpdate
}) => {
  const [editedTask, setEditedTask] = useState<Task>({ ...task });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(editedTask);
  };

  const priorityOptions = [
    { value: "low", label: "Low", color: "bg-gray-500" },
    { value: "medium", label: "Medium", color: "bg-yellow-500" },
    { value: "high", label: "High", color: "bg-red-500" }
  ];

  const statusOptions = [
    { value: "backlog", label: "Backlog" },
    { value: "todo", label: "Todo" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" }
  ];

  return (
    <Dialog open={!!task} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            <Input 
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              className="text-xl font-semibold mt-2 bg-transparent border-none focus:ring-0 px-0 h-auto"
            />
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <Textarea 
                name="description"
                value={editedTask.description || ""}
                onChange={handleChange}
                placeholder="Add a description..."
                className="min-h-32 bg-gray-900 border-gray-800"
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-400">Assignees</label>
                <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 h-6 px-2">
                  <PlusCircle className="h-3.5 w-3.5 mr-1" />
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {editedTask.assignees?.map(assignee => (
                  <div 
                    key={assignee.id}
                    className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center text-xs">
                      {assignee.name.charAt(0)}
                    </div>
                    <span>{assignee.name}</span>
                    <button className="text-gray-400 hover:text-white">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {!editedTask.assignees?.length && (
                  <div className="text-sm text-gray-500">No assignees</div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-400">Labels</label>
                <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 h-6 px-2">
                  <PlusCircle className="h-3.5 w-3.5 mr-1" />
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {editedTask.labels?.map(label => (
                  <div 
                    key={label.id}
                    className="flex items-center gap-2 px-2 py-1 rounded text-sm"
                    style={{ backgroundColor: `${label.color}20`, color: label.color }}
                  >
                    <span>{label.name}</span>
                    <button>
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {!editedTask.labels?.length && (
                  <div className="text-sm text-gray-500">No labels</div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
              <div className="space-y-1">
                {statusOptions.map(option => (
                  <div 
                    key={option.value}
                    className={`px-3 py-2 rounded cursor-pointer ${
                      editedTask.status === option.value 
                        ? 'bg-blue-900/30 border border-blue-800' 
                        : 'hover:bg-gray-800'
                    }`}
                    onClick={() => setEditedTask(prev => ({ ...prev, status: option.value }))}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Priority</label>
              <div className="space-y-1">
                {priorityOptions.map(option => (
                  <div 
                    key={option.value}
                    className={`px-3 py-2 rounded cursor-pointer flex items-center ${
                      editedTask.priority === option.value 
                        ? 'bg-gray-800' 
                        : 'hover:bg-gray-800/50'
                    }`}
                    onClick={() => setEditedTask(prev => ({ ...prev, priority: option.value as "low" | "medium" | "high" }))}
                  >
                    <div className={`w-2 h-2 rounded-full ${option.color} mr-2`}></div>
                    {option.label}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Due Date</label>
              <Input 
                type="date"
                name="dueDate"
                value={editedTask.dueDate || ""}
                onChange={handleChange}
                className="bg-gray-900 border-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">AI Agents</label>
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

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailModal;
