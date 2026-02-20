#!/usr/bin/env node
/**
 * Sync pricing from the private Hanzo pricing service.
 *
 * In production: fetches from http://pricing.hanzo.svc.cluster.local:8080/v1/pricing
 * In CI/dev: fetches from PRICING_API_URL env var, or copies from ../pricing/data/pricing.json
 *
 * Usage:
 *   node scripts/sync-pricing.mjs              # update src/data/pricing.json
 *   node scripts/sync-pricing.mjs --dry-run    # preview without writing
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, "../src/data/pricing.json");
const LOCAL_PATH = resolve(__dirname, "../../pricing/data/pricing.json");
const API_URL = process.env.PRICING_API_URL || "http://pricing.hanzo.svc.cluster.local:8080/v1/pricing";
const DRY_RUN = process.argv.includes("--dry-run");

async function fetchPricing() {
  // Try local sibling repo first (for dev/CI)
  if (existsSync(LOCAL_PATH)) {
    console.log(`Reading from local: ${LOCAL_PATH}`);
    return JSON.parse(readFileSync(LOCAL_PATH, "utf8"));
  }

  // Fall back to API
  console.log(`Fetching from API: ${API_URL}`);
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`Pricing API returned ${res.status}`);
  return res.json();
}

async function main() {
  const pricing = await fetchPricing();
  console.log(`  Updated: ${pricing.updated}`);
  console.log(`  Hanzo models: ${pricing.hanzoModels?.length || 0}`);
  console.log(`  Third-party: ${pricing.thirdPartyModels?.length || 0}`);

  if (DRY_RUN) {
    console.log("\n[DRY RUN] Would write to", OUT_PATH);
    for (const m of [...(pricing.hanzoModels || []), ...(pricing.thirdPartyModels || [])]) {
      console.log(`  ${m.name}: in=$${m.pricing.input} out=$${m.pricing.output}`);
    }
    return;
  }

  writeFileSync(OUT_PATH, JSON.stringify(pricing, null, 2) + "\n");
  console.log(`\nWritten to ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
