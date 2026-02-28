'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Send,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  Building2,
  User,
  Mail,
  Briefcase,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const ZEN5_MODELS = [
  { id: 'zen5', label: 'zen5', description: 'Flagship next-gen foundation model' },
  { id: 'zen5-pro', label: 'zen5-pro', description: 'High-performance reasoning' },
  { id: 'zen5-max', label: 'zen5-max', description: '2M context, largest open-weight' },
  { id: 'zen5-ultra', label: 'zen5-ultra', description: 'Extended reasoning with CoT' },
  { id: 'zen5-mini', label: 'zen5-mini', description: 'Efficient edge deployment' },
]

interface FormData {
  fullName: string
  email: string
  organization: string
  role: string
  researchInterest: string
  modelsOfInterest: string[]
  plannedUse: string
}

const INITIAL_FORM: FormData = {
  fullName: '',
  email: '',
  organization: '',
  role: '',
  researchInterest: '',
  modelsOfInterest: [],
  plannedUse: '',
}

export default function ResearchAccessPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleModelToggle = (modelId: string) => {
    setFormData((prev) => ({
      ...prev,
      modelsOfInterest: prev.modelsOfInterest.includes(modelId)
        ? prev.modelsOfInterest.filter((m) => m !== modelId)
        : [...prev.modelsOfInterest, modelId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const nameParts = formData.fullName.trim().split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const payload = {
      email: formData.email,
      firstName,
      lastName,
      metadata: {
        organization: formData.organization,
        role: formData.role,
        researchInterest: formData.researchInterest,
        modelsOfInterest: formData.modelsOfInterest,
        plannedUse: formData.plannedUse,
        source: 'research-preview',
        requestedAt: new Date().toISOString(),
      },
      tags: ['research-preview', 'zen5'],
    }

    try {
      const res = await fetch('https://api.hanzo.ai/v1/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`)
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-foreground border border-border">
                <FlaskConical className="w-3 h-3" />
                Research Preview
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
            >
              Research Preview Access
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Apply for early access to Zen5 next-generation models. Priority
              given to academic institutions, research labs, and organizations
              advancing frontier AI research.
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-24 px-4 md:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-10 rounded-xl border border-border bg-primary/5 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-foreground/70" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Thank You
                </h2>
                <p className="text-muted-foreground mb-2">
                  Your research access request has been submitted.
                </p>
                <p className="text-muted-foreground text-sm mb-8">
                  We&apos;ll review your application and be in touch within 48
                  hours.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-accent">
                    <Link href="/zen">
                      Explore Zen Models
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary"
                  >
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="space-y-6"
              >
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                    >
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@university.edu"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Organization and Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="organization"
                      className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                    >
                      <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                      Organization / Affiliation
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      placeholder="MIT, DeepMind, etc."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                      Role / Title
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      placeholder="Research Scientist"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Research Interest */}
                <div>
                  <label
                    htmlFor="researchInterest"
                    className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                  >
                    <FlaskConical className="w-3.5 h-3.5 text-muted-foreground" />
                    Research Interest
                  </label>
                  <textarea
                    id="researchInterest"
                    name="researchInterest"
                    value={formData.researchInterest}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your research focus and how Zen5 models relate to your work..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Models of Interest */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
                    Models of Interest
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ZEN5_MODELS.map((model) => {
                      const selected = formData.modelsOfInterest.includes(
                        model.id
                      )
                      return (
                        <button
                          key={model.id}
                          type="button"
                          onClick={() => handleModelToggle(model.id)}
                          className={`flex items-start gap-3 p-3 rounded-lg border text-left transition-all ${
                            selected
                              ? 'border-white/40 bg-primary/10'
                              : 'border-border bg-secondary/30 hover:bg-secondary/60'
                          }`}
                        >
                          <div
                            className={`mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all ${
                              selected
                                ? 'bg-foreground border-foreground'
                                : 'border-muted-foreground/40'
                            }`}
                          >
                            {selected && (
                              <svg
                                className="w-2.5 h-2.5 text-background"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <div>
                            <span className="font-mono text-sm font-medium text-foreground">
                              {model.label}
                            </span>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {model.description}
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Planned Use */}
                <div>
                  <label
                    htmlFor="plannedUse"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    How do you plan to use the models?{' '}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="plannedUse"
                    name="plannedUse"
                    value={formData.plannedUse}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Fine-tuning, benchmarking, application development, academic paper..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-red-300">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Request Access
                      </>
                    )}
                  </Button>
                </div>

                {/* Privacy note */}
                <p className="text-xs text-muted-foreground/60">
                  By submitting, you agree to Hanzo&apos;s{' '}
                  <Link
                    href="/privacy"
                    className="underline hover:text-muted-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  . Your information will only be used to process this request.
                </p>
              </motion.form>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
