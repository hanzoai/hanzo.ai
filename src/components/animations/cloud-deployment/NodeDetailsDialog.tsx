
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/radix-dialog";
import { NodeType } from "./types";

interface NodeDetailsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedNode: NodeType | null;
}

const NodeDetailsDialog: React.FC<NodeDetailsDialogProps> = ({ isOpen, onOpenChange, selectedNode }) => {
  if (!selectedNode) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedNode.label}
          </DialogTitle>
          <DialogDescription>
            {selectedNode.statusMessage}
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-4 bg-gray-800/50 rounded-md mb-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Service Details</h4>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <div className="text-gray-400">Status</div>
            <div className="text-gray-200">
              {selectedNode.status === 'deployed' && <span className="text-green-400">Deployed</span>}
              {selectedNode.status === 'pending' && <span className="text-blue-400">Pending</span>}
              {selectedNode.status === 'failed' && <span className="text-red-400">Failed</span>}
            </div>
            
            <div className="text-gray-400">Type</div>
            <div className="text-gray-200">{selectedNode.type}</div>
            
            <div className="text-gray-400">Created</div>
            <div className="text-gray-200">Just now</div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2">
          <button 
            className="px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm"
            onClick={() => onOpenChange(false)}
          >
            Close
          </button>
          <button 
            className="px-3 py-1.5 rounded bg-purple-600 hover:bg-purple-700 text-white text-sm"
            onClick={() => onOpenChange(false)}
          >
            View Details
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NodeDetailsDialog;
