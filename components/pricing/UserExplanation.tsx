
import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@hanzo/ui/popover";
import { User, HelpCircle } from "lucide-react";

const UserExplanation = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-muted-foreground hover:text-[var(--white)] border-gray-800 bg-transparent"
        >
          <HelpCircle className="h-4 w-4" />
          What are users?
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-gray-900 border-gray-800 text-[var(--white)] p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <h4 className="font-medium text-lg">Platform Users</h4>
          </div>
          <p className="text-foreground/80 text-sm">
            Users are individuals with login credentials to your platform. 
            Each user can access the platform's features according to your plan. 
            Team plans are billed per user with login access to your workspace.
          </p>
          <p className="text-muted-foreground text-xs">
            Note: End-users of your applications don't count toward this limit 
            unless they need direct access to the platform.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserExplanation;
