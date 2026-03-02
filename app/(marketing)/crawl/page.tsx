import {
  CrawlHero,
  CrawlFeatures,
  CrawlHowItWorks,
  CrawlPricing,
  CrawlCTA,
} from "@/components/crawl"

export const metadata = {
  title: "Hanzo Crawl - AI-Ready Web Crawler",
  description:
    "Turn any website into clean, structured Markdown for LLMs. JavaScript rendering, parallel crawling, structured extraction. Powered by crawl4ai.",
}

export default function CrawlPage() {
  return (
    <>
      <CrawlHero />
      <CrawlFeatures />
      <CrawlHowItWorks />
      <CrawlPricing />
      <CrawlCTA />
    </>
  )
}
