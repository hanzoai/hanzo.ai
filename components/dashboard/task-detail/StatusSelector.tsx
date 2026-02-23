'use client'

import React from "react";

interface StatusSelectorProps {
  status: string;
  onChange: (status: string) => void;
}

const StatusSelector: React.FC<StatusSelectorProps> = ({ status, onChange }) => {
  const statusOptions = [
    { value: "backlog", label: "Backlog" },
    { value: "todo", label: "Todo" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" }
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-400 mb-1">Status</label>
      <div className="space-y-1">
        {statusOptions.map(option => (
          <div 
            key={option.value}
            className={`px-3 py-2 rounded cursor-pointer ${
              status === option.value 
                ? 'bg-white/10 border border-white/20' 
                : 'hover:bg-gray-800'
            }`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSelector;
