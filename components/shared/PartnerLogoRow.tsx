import React from "react";
import type { PartnerLogo } from "@/lib/constants/partner-logos";

interface PartnerLogoRowProps {
  logos: PartnerLogo[];
  className?: string;
  invert?: boolean;
}

const PartnerLogoRow: React.FC<PartnerLogoRowProps> = ({
  logos,
  className = "",
  invert = false,
}) => {
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-x-10 gap-y-6 ${className}`}
    >
      {logos.map((logo) => (
        <div key={logo.name} className="flex items-center justify-center">
          <img
            src={logo.src}
            alt={`${logo.name} logo`}
            loading="lazy"
            className={`${logo.className ?? "h-6"} w-auto opacity-70 transition-opacity duration-200 hover:opacity-100 filter ${
              invert ? "invert" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerLogoRow;
