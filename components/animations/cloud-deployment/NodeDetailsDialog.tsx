'use client'

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@hanzo/ui";
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
          <h4 className="text-sm font-medium text-foreground/80 mb-2">Service Details</h4>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <div className="text-muted-foreground">Status</div>
            <div className="text-neutral-200">
              {selectedNode.status === 'deployed' && <span className="text-foreground/70">Deployed</span>}
              {selectedNode.status === 'pending' && <span className="text-foreground/70">Pending</span>}
              {selectedNode.status === 'error' && <span className="text-foreground/70">Failed</span>}
            </div>
            
            <div className="text-muted-foreground">Type</div>
            <div className="text-neutral-200">{selectedNode.type}</div>
            
            <div className="text-muted-foreground">Created</div>
            <div className="text-neutral-200">Just now</div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2">
          <button 
            className="px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-foreground/80 text-sm"
            onClick={() => onOpenChange(false)}
          >
            Close
          </button>
          <button 
            className="px-3 py-1.5 rounded bg-primary/10 hover:bg-primary/10 text-[var(--white)] text-sm"
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
