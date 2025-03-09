
import React from "react";

const ZoomControls: React.FC = () => {
  return (
    <div className="absolute left-4 top-4 z-20 flex flex-col gap-2 rounded-md bg-gray-800/70 p-1">
      <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="M3 9h18" />
        </svg>
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
        </svg>
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="8" height="8" x="2" y="2" rx="2" />
          <rect width="8" height="8" x="14" y="2" rx="2" />
          <rect width="8" height="8" x="2" y="14" rx="2" />
          <rect width="8" height="8" x="14" y="14" rx="2" />
        </svg>
      </button>
    </div>
  );
};

export default ZoomControls;
