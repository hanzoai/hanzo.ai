
import React from "react";

interface PrioritySelectorProps {
  priority: "low" | "medium" | "high" | undefined;
  onChange: (priority: "low" | "medium" | "high") => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({ priority, onChange }) => {
  const priorityOptions = [
    { value: "low", label: "Low", color: "bg-gray-500" },
    { value: "medium", label: "Medium", color: "bg-yellow-500" },
    { value: "high", label: "High", color: "bg-red-500" }
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-400 mb-1">Priority</label>
      <div className="space-y-1">
        {priorityOptions.map(option => (
          <div 
            key={option.value}
            className={`px-3 py-2 rounded cursor-pointer flex items-center ${
              priority === option.value 
                ? 'bg-gray-800' 
                : 'hover:bg-gray-800/50'
            }`}
            onClick={() => onChange(option.value as "low" | "medium" | "high")}
          >
            <div className={`w-2 h-2 rounded-full ${option.color} mr-2`}></div>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrioritySelector;
