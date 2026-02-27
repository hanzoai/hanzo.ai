import React from "react";
import { ExternalLink, Mail, Phone, Users, Shield, LucideIcon } from "lucide-react";
import { BrandColor } from "@/lib/constants/brand";

interface PartnerCardProps {
  name: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color?: BrandColor;
  primaryAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryAction?: {
    label: string;
    href: string;
    type?: "email" | "phone" | "link";
  };
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  description,
  url,
  icon: Icon,
  color = "primary",
  primaryAction,
  secondaryAction,
}) => {
  const isPrimary = color === "primary";

  const cardClass = isPrimary
    ? "bg-gradient-to-br from-white/30 to-white/10 rounded-xl border border-border hover:border-white/40"
    : "bg-gradient-to-br from-white/20 to-white/10 rounded-xl border border-border hover:border-white/40";

  const iconWrapperClass = isPrimary
    ? "p-3 rounded-lg bg-primary/20"
    : "p-3 rounded-lg bg-primary/20";

  const iconClass = isPrimary ? "text-foreground" : "text-foreground/70";

  const primaryBtnClass = isPrimary
    ? "bg-primary hover:bg-[#cccccc]"
    : "bg-primary/10 hover:bg-primary";

  const outlineBtnClass = isPrimary
    ? "border border-white/40 hover:border-white/30 text-foreground hover:text-foreground/70"
    : "border border-white/40 hover:border-border text-foreground/70 hover:text-foreground";

  const getSecondaryIcon = () => {
    switch (secondaryAction?.type) {
      case "email":
        return <Mail size={14} />;
      case "phone":
        return <Phone size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className={`p-6 ${cardClass} transition-colors h-full`}>
      <div className={`${iconWrapperClass} self-start inline-block mb-4`}>
        <Icon className={`h-6 w-6 ${iconClass}`} strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{name}</h3>
      <p className="text-foreground/80 mb-5">{description}</p>
      <div className="flex flex-wrap gap-4">
        {primaryAction && (
          <a
            href={primaryAction.href || "#"}
            target={primaryAction.external ? "_blank" : undefined}
            rel={primaryAction.external ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-2 px-5 py-2.5 ${primaryBtnClass} rounded-md text-foreground transition-colors`}
          >
            <span>{primaryAction.label}</span>
            {primaryAction.external && <ExternalLink size={14} />}
          </a>
        )}
        {secondaryAction && (
          <a
            href={secondaryAction.href || "#"}
            className={`flex items-center gap-2 px-5 py-2.5 ${outlineBtnClass} rounded-md transition-colors`}
          >
            <span>{secondaryAction.label}</span>
            {getSecondaryIcon()}
          </a>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;

// Convenience component for the common Hanzo Agency + Sensei Group pair
interface PartnersSectionProps {
  className?: string;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ className = "" }) => {
  return (
    <div className={`bg-gradient-to-br from-gray-900/70 to-background/90 p-10 rounded-2xl border border-gray-800 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <PartnerCard
          name="Hanzo Agency"
          description="Our AI-powered creative agency helps brands transform their digital presence with advanced design, content, and marketing strategies powered by artificial intelligence."
          url="https://hanzo.agency"
          icon={Users}
          color="primary"
          primaryAction={{
            label: "Visit Hanzo Agency",
            href: "https://hanzo.agency",
            external: true,
          }}
          secondaryAction={{
            label: "Contact us",
            href: "/contact",
            type: "email",
          }}
        />
        <PartnerCard
          name="Sensei Group"
          description="Our collective of fractional CXOs and industry experts help enterprises implement transformative technology solutions and drive strategic growth initiatives."
          url="https://sensei.group"
          icon={Shield}
          color="secondary"
          primaryAction={{
            label: "Visit Sensei Group",
            href: "https://sensei.group",
            external: true,
          }}
          secondaryAction={{
            label: "Schedule a call",
            href: "tel:+1234567890",
            type: "phone",
          }}
        />
      </div>
    </div>
  );
};
