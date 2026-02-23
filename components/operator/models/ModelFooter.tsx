
import React from "react";

const ModelFooter = () => {
  return (
    <div className="mt-12 text-center">
      <p className="text-muted-foreground">
        New models are continuously being added. Check the 
        <a href="https://docs.hanzo.ai/operative/models" className="text-foreground hover:text-foreground/70 ml-1">
          documentation
        </a> for the latest information.
      </p>
    </div>
  );
};

export default ModelFooter;
