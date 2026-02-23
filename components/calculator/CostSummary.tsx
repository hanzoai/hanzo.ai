
import React from "react";
import { Switch } from "@hanzo/ui";
import { Shield, HeadsetIcon } from "lucide-react";

interface CostSummaryProps {
  costs: {
    compute: number;
    replicas: number;
    storage: number;
    bandwidth: number;
    analytics: number;
    observability: number;
    compliance: number;
    support: number;
    total: number;
  };
  onComplianceChange: () => void;
  onSupportChange: () => void;
  compliance: boolean;
  support: boolean;
}

const CostSummary = ({
  costs,
  onComplianceChange,
  onSupportChange,
  compliance,
  support
}: CostSummaryProps) => {
  return (
    <div className="p-6 rounded-xl border border-[#333] bg-gray-900/50 hover:border-gray-700">
      <h3 className="text-xl font-semibold mb-6">Cost Summary</h3>

      <div className="space-y-4 mb-8">
        {[
          { label: "Compute", cost: costs.compute },
          { label: "Hanzo Base", cost: costs.replicas },
          { label: "Storage", cost: costs.storage },
          { label: "Bandwidth", cost: costs.bandwidth },
          { label: "Analytics Events", cost: costs.analytics },
          { label: "Observability", cost: costs.observability }
        ].map(({ label, cost }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-muted-foreground">{label}</span>
            <span>${cost.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4 mb-8 border-t border-[#333] pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Enhanced Security</span>
          </div>
          <div className="flex items-center gap-3">
            <span>${costs.compliance.toFixed(2)}</span>
            <Switch checked={compliance} onCheckedChange={onComplianceChange} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeadsetIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Enterprise Support</span>
          </div>
          <div className="flex items-center gap-3">
            <span>${costs.support.toFixed(2)}</span>
            <Switch checked={support} onCheckedChange={onSupportChange} />
          </div>
        </div>
      </div>

      <div className="border-t border-[#333] pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Estimated Total</span>
          <span className="text-lg font-semibold">${costs.total.toFixed(2)}/mo</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Actual costs may vary based on usage and additional services.
        </p>
      </div>
    </div>
  );
};

export default CostSummary;
