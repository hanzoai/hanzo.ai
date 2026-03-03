import {
  SearchHero,
  SearchFeatures,
  SearchHowItWorks,
  SearchPricing,
  SearchCTA,
} from "@/components/search"
import { OSSRevenueBanner } from "@/components/oss/OSSRevenueBanner"

export const metadata = {
  title: "Hanzo Search - Hybrid Search + RAG Chat",
  description:
    "Hybrid search and RAG chat for your docs, apps, and APIs. Drop-in replacement for Algolia, Orama, Typesense. Powered by Meilisearch + Qdrant.",
}

export default function SearchPage() {
  return (
    <>
      <SearchHero />
      <SearchFeatures />
      <SearchHowItWorks />
      <SearchPricing />
      <OSSRevenueBanner upstreamName="Meilisearch" />
      <SearchCTA />
    </>
  )
}
