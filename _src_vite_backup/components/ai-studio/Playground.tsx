
import React from "react";
import { Grid3X3 } from "lucide-react";

const Playground = () => {
  return (
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
      <Grid3X3 className="h-16 w-16 text-neutral-600 mb-4" />
      <h3 className="text-xl font-medium mb-2">Playground Mode</h3>
      <p className="text-neutral-400 max-w-md">
        This feature allows you to create custom AI workflows with a visual interface.
        Coming soon in a future update.
      </p>
    </div>
  );
};

export default Playground;
