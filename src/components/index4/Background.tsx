
import React from "react";
import { GridLines } from "@/components/ui/architectural-elements";

const Background = () => {
  console.log("Background component rendering");
  return (
    <>
      {/* Subtle grid background */}
      <GridLines spacing={40} opacity={0.07} className="fixed inset-0 -z-10" />
      
      {/* Subtle gradient accents */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute -top-80 -right-80 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>
    </>
  );
};

export default Background;
