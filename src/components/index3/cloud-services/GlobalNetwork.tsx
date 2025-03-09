
import React from "react";
import { CanvasProvider } from "./globe/CanvasContext";
import GlobeContainer from "./globe/GlobeContainer";

const GlobalNetwork: React.FC = () => {
  return (
    <div className="my-16">
      <CanvasProvider>
        <GlobeContainer />
      </CanvasProvider>
    </div>
  );
};

export default GlobalNetwork;
