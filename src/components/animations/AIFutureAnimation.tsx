
import React from "react";
import AITunnelAnimation from "./AITunnelAnimation";

interface AIFutureAnimationProps {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

const AIFutureAnimation: React.FC<AIFutureAnimationProps> = ({
  title = "Accelerating AI Future",
  subtitle = "Pioneer a new era of intelligence with Hanzo",
  showButtons = true
}) => {
  return (
    <div className="w-full h-[500px] md:h-[600px] bg-[var(--black)] rounded-xl overflow-hidden shadow-2xl border border-purple-900/20">
      <AITunnelAnimation 
        title={title}
        subtitle={subtitle}
        showButtons={showButtons}
      />
    </div>
  );
};

export default AIFutureAnimation;
