
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/radix-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TaskDetailContent from "./TaskDetailContent";
import { Task } from "../data/tasks/task-data";

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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(prev => ({ ...prev, title: e.target.value }));
  };

  const handleTaskChange = (field: string, value: any) => {
    setEditedTask(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUpdate(editedTask);
  };

  return (
    <Dialog open={!!task} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            <Input 
              value={editedTask.title}
              onChange={handleTitleChange}
              className="text-xl font-semibold mt-2 bg-transparent border-none focus:ring-0 px-0 h-auto"
            />
          </DialogTitle>
        </DialogHeader>

        <TaskDetailContent 
          task={editedTask} 
          onTaskChange={handleTaskChange} 
        />

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
