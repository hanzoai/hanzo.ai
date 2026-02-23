
import React from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const Terminal = () => {
  return (
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
      <TerminalIcon className="h-16 w-16 text-neutral-600 mb-4" />
      <h3 className="text-xl font-medium mb-2">Terminal Mode</h3>
      <p className="text-neutral-400 max-w-md">
        This feature provides a command-line interface for advanced model interactions.
        Coming soon in a future update.
      </p>
    </div>
  );
};

export default Terminal;
