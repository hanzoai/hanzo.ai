
import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, X } from "lucide-react";

interface Label {
  id: string;
  name: string;
  color: string;
}

interface LabelsListProps {
  labels?: Label[];
  onRemove?: (id: string) => void;
}

const LabelsList: React.FC<LabelsListProps> = ({ labels = [], onRemove }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label className="block text-sm font-medium text-neutral-400">Labels</label>
        <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 h-6 px-2">
          <PlusCircle className="h-3.5 w-3.5 mr-1" />
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {labels.map(label => (
          <div 
            key={label.id}
            className="flex items-center gap-2 px-2 py-1 rounded text-sm"
            style={{ backgroundColor: `${label.color}20`, color: label.color }}
          >
            <span>{label.name}</span>
            <button onClick={() => onRemove && onRemove(label.id)}>
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
        {!labels.length && (
          <div className="text-sm text-neutral-500">No labels</div>
        )}
      </div>
    </div>
  );
};

export default LabelsList;
