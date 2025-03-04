
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Server, Database, HardDrive, Globe, Shield, HeadsetIcon } from "lucide-react";
import ResourceSection from "./ResourceSection";
import CostSummary from "./CostSummary";

const BillingCalculator = () => {
  const [compute, setCompute] = useState(1);
  const [replicas, setReplicas] = useState(1);
  const [storage, setStorage] = useState(20);
  const [bandwidth, setBandwidth] = useState(50);
  const [compliance, setCompliance] = useState(false);
  const [support, setSupport] = useState(false);

  const computeCost = compute * 155;
  const replicasCost = replicas * 77.50;
  const storageCost = storage * 0.15;
  const bandwidthCost = bandwidth * 0.02;
  const complianceCost = compliance ? 99 : 0;
  const supportCost = support ? 2500 : 0;
  const totalCost = computeCost + replicasCost + storageCost + bandwidthCost + complianceCost + supportCost;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <ResourceSection
            icon={<Server className="h-5 w-5" />}
            title="Compute Resources"
            description="Performance machines (4 vCPU, 8GB RAM)"
            value={compute}
            onChange={(value) => setCompute(value[0])}
            min={1}
            max={20}
            cost={computeCost}
            unit="machines"
          />

          <ResourceSection
            icon={<Database className="h-5 w-5" />}
            title="Hanzo Base Replicas"
            description="Database & cache instances (2 vCPU, 4GB RAM)"
            value={replicas}
            onChange={(value) => setReplicas(value[0])}
            min={1}
            max={5}
            cost={replicasCost}
            unit="replicas"
          />

          <ResourceSection
            icon={<HardDrive className="h-5 w-5" />}
            title="Persistent Storage"
            description="Total storage needed for your applications"
            value={storage}
            onChange={(value) => setStorage(value[0])}
            min={20}
            max={1000}
            cost={storageCost}
            unit="GB"
          />

          <ResourceSection
            icon={<Globe className="h-5 w-5" />}
            title="Monthly Bandwidth"
            description="Estimated outgoing traffic (North America)"
            value={bandwidth}
            onChange={(value) => setBandwidth(value[0])}
            min={0}
            max={1000}
            cost={bandwidthCost}
            unit="GB"
          />
        </div>

        <CostSummary
          costs={{
            compute: computeCost,
            replicas: replicasCost,
            storage: storageCost,
            bandwidth: bandwidthCost,
            compliance: complianceCost,
            support: supportCost,
            total: totalCost
          }}
          onComplianceChange={() => setCompliance(!compliance)}
          onSupportChange={() => setSupport(!support)}
          compliance={compliance}
          support={support}
        />
      </div>

      <div className="flex justify-center pt-8">
        <Button className="bg-white hover:bg-gray-200 text-black px-8">
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default BillingCalculator;
