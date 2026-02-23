import React from "react";


interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
  noIndex?: boolean;
}

const SITE_NAME = "Hanzo";
const SITE_TAGLINE = "Frontier AI for Developers";
const BASE_URL = "https://hanzo.ai";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * SEO component for consistent meta tags across all pages.
 *
 * Usage:
 *   <SEO
 *     title="Products"
 *     description="The complete AI infrastructure stack..."
 *     path="/products"
 *   />
 *
 * Generates:
 *   <title>Products | Hanzo - Frontier AI for Developers</title>
 *   + og:*, twitter:*, canonical, JSON-LD
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  noIndex = false,
}) => {
  const fullTitle = path === "/"
    ? `${SITE_NAME} - ${SITE_TAGLINE}`
    : `${title} | ${SITE_NAME} - ${SITE_TAGLINE}`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    
  );
};

// Pre-built JSON-LD schemas
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hanzo AI",
  url: "https://hanzo.ai",
  logo: "https://hanzo.ai/og-image.png",
  description: "Frontier AI company building LLMs, AI cloud infrastructure, and agent frameworks.",
  foundingDate: "2017",
  sameAs: [
    "https://github.com/hanzoai",
    "https://twitter.com/hanaboroshi",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@hanzo.ai",
    contactType: "customer support",
  },
};

export const softwareAppJsonLd = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name,
  description,
  url,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier available",
  },
  author: {
    "@type": "Organization",
    name: "Hanzo AI",
  },
});

export default SEO;
