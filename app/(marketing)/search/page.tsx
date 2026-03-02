import {
  SearchHero,
  SearchFeatures,
  SearchHowItWorks,
  SearchPricing,
  SearchCTA,
} from "@/components/search"

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
      <SearchCTA />
    </>
  )
}
