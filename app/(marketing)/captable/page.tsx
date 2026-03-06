import CaptableClient from "./captable-client"

export const metadata = {
  title: "Hanzo Cap Table - Equity Management Platform",
  description: "Manage share classes, stock options, SAFEs, convertible notes, and equity plans. The open-source alternative to Carta.",
}

export default function CaptablePage() {
  return <CaptableClient />
}
