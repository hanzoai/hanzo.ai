'use client'

import React from "react";
import { Button } from "@hanzo/ui";
import { PlusCircle, X } from "lucide-react";

interface Assignee {
  id: string;
  name: string;
  avatar?: string;
}

interface AssigneesListProps {
  assignees?: Assignee[];
  onRemove?: (id: string) => void;
}

const AssigneesList: React.FC<AssigneesListProps> = ({ assignees = [], onRemove }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label className="block text-sm font-medium text-neutral-400">Assignees</label>
        <Button size="sm" variant="ghost" className="text-[#ffffff] hover:text-[#ff6b6b] h-6 px-2">
          <PlusCircle className="h-3.5 w-3.5 mr-1" />
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {assignees.map(assignee => (
          <div 
            key={assignee.id}
            className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded text-sm"
          >
            <div className="w-5 h-5 rounded-full bg-red-900 flex items-center justify-center text-xs">
              {assignee.name.charAt(0)}
            </div>
            <span>{assignee.name}</span>
            <button 
              className="text-neutral-400 hover:text-[var(--white)]"
              onClick={() => onRemove && onRemove(assignee.id)}
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
        {!assignees.length && (
          <div className="text-sm text-neutral-500">No assignees</div>
        )}
      </div>
    </div>
  );
};

export default AssigneesList;
