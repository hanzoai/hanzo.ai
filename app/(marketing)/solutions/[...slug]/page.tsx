import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'

import { getSolutionBySlug, solutionsData } from '@/lib/constants/solutions-data'
import ChromeText from '@/components/ui/chrome-text'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  return solutionsData.map((solution) => ({
    slug: solution.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}
  return {
    title: `${solution.title} — Hanzo AI`,
    description: solution.description,
  }
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) notFound()

  const isIndustry = solution.badge === 'Industry'
  const isEnterprise = solution.badge === 'Enterprise'
  const isStack = solution.badge === 'Stack' || solution.badge === 'Stacks'

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-12">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-white transition-colors"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Solutions
            </Link>
            {slug.length > 1 && (
              <>
                <span className="text-zinc-700 mx-2">/</span>
                <Link
                  href={`/solutions/${slug[0]}`}
                  className="text-sm text-zinc-500 hover:text-white transition-colors capitalize"
                >
                  {slug[0]}
                </Link>
              </>
            )}
          </div>

          {/* Hero */}
          <div className="max-w-4xl mb-24">
            <div className="inline-block mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 border border-zinc-800 rounded px-3 py-1">
                {solution.badge}
              </span>
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {solution.title}
            </ChromeText>
            <p className="text-xl text-zinc-400 mb-4 max-w-2xl">
              {solution.subtitle}
            </p>
            <p className="text-zinc-500 max-w-2xl leading-relaxed mb-10">
              {solution.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-white text-black hover:bg-zinc-100 px-8 py-3 text-sm font-medium rounded-lg"
              >
                <Link href={solution.ctaHref}>
                  {solution.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white px-8 py-3 text-sm font-medium rounded-lg"
              >
                <Link href="/contact/sales">Talk to sales</Link>
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-900 mb-24" />

          {/* Features Grid */}
          <div className="mb-24">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {isIndustry || isEnterprise ? 'Capabilities' : 'What\'s included'}
              </h2>
              <p className="text-zinc-500">
                {isStack
                  ? 'Everything you need, pre-integrated and production-ready.'
                  : isIndustry || isEnterprise
                  ? 'Built for the requirements of your industry.'
                  : 'Every feature you need to ship fast and scale confidently.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
              {solution.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-black p-8 hover:bg-zinc-950 transition-colors group"
                >
                  <div className="w-8 h-px bg-zinc-700 mb-6 group-hover:bg-white transition-colors" />
                  <h3 className="text-base font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {isIndustry || isEnterprise ? 'Who it\'s for' : 'Use cases'}
                </h2>
                <p className="text-zinc-500 mb-8">
                  {isIndustry
                    ? 'Trusted by organizations across the industry.'
                    : 'Real workloads, real teams, real impact.'}
                </p>
                <ul className="space-y-4">
                  {solution.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-zinc-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm">{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Panel */}
              <div className="border border-zinc-800 rounded-xl p-8">
                <div className="mb-6">
                  <div className="w-8 h-px bg-zinc-700 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {isIndustry || isEnterprise
                      ? 'Ready to get started?'
                      : 'Start building today'}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {isIndustry || isEnterprise
                      ? 'Speak with our specialized team. We\'ll scope your requirements and design a deployment tailored to your organization.'
                      : 'Get up and running in minutes. Our documentation covers everything from quick start to production deployment.'}
                  </p>
                </div>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-white text-black hover:bg-zinc-100 text-sm font-medium rounded-lg"
                  >
                    <Link href={solution.ctaHref}>
                      {solution.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full text-zinc-500 hover:text-white text-sm"
                  >
                    <Link href="/contact/sales">Contact sales</Link>
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-900">
                  <p className="text-xs text-zinc-600 mb-3">Also available on</p>
                  <div className="flex gap-4 text-xs text-zinc-500">
                    <span>AWS Marketplace</span>
                    <span>Azure Marketplace</span>
                    <span>GCP Marketplace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-900 mb-24" />

          {/* Related solutions */}
          <RelatedSolutions currentSlug={slug} />

          {/* Bottom CTA */}
          <div className="mt-24 border-t border-zinc-900 pt-24 text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-4">
              Enterprise ready
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Deploy with confidence
            </h2>
            <p className="text-zinc-500 max-w-lg mx-auto mb-8 text-sm">
              SOC 2 Type II certified. GDPR and CCPA compliant. 99.99% SLA.
              Dedicated support engineers for Enterprise plans.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-black hover:bg-zinc-100 px-8 text-sm font-medium rounded-lg"
              >
                <Link href="/contact/sales">Contact enterprise sales</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-zinc-500 hover:text-white text-sm px-8"
              >
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

function RelatedSolutions({ currentSlug }: { currentSlug: string[] }) {
  const related = solutionsData
    .filter((s) => {
      if (s.slug.length === currentSlug.length && s.slug.every((p, i) => p === currentSlug[i])) return false
      // Same category
      if (currentSlug[0] && s.slug[0] === currentSlug[0]) return true
      // Cross-suggest use cases and stacks
      if (currentSlug[0] === 'industries' && s.badge === 'Stack') return true
      if (currentSlug[0] === 'stacks' && s.badge !== 'Industry' && s.badge !== 'Enterprise') return true
      return false
    })
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-8">Related solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900">
        {related.map((s) => (
          <Link
            key={s.slug.join('/')}
            href={`/solutions/${s.slug.join('/')}`}
            className="bg-black p-8 hover:bg-zinc-950 transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-4 block">
              {s.badge}
            </span>
            <h3 className="text-base font-semibold text-white mb-2 group-hover:text-zinc-200">
              {s.title}
            </h3>
            <p className="text-sm text-zinc-600 line-clamp-2 mb-4">{s.subtitle}</p>
            <span className="text-xs text-zinc-500 group-hover:text-white transition-colors inline-flex items-center gap-1">
              Learn more <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
