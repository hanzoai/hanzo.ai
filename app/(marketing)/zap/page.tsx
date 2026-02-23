import {
  ZapHero,
  ZapFeatures,
  ZapCodeExample,
  ZapArchitecture,
  ZapCTA,
} from "@/components/zap"

export const metadata = {
  title: "Hanzo ZAP - Zero-Copy Agent Protocol",
  description:
    "Zero-copy serialization, 40-50x lower overhead. Built for agent swarms at scale.",
}

export default function ZapPage() {
  return (
    <>
      <ZapHero />
      <ZapFeatures />
      <ZapCodeExample />
      <ZapArchitecture />
      <ZapCTA />
    </>
  )
}
