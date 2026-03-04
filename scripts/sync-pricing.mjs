#!/usr/bin/env node
/**
 * Sync pricing from the Hanzo pricing service.
 *
 * Sources (tried in order):
 *   1. PRICING_API_URL env var
 *   2. https://pricing.hanzo.ai/v1/pricing (public endpoint)
 *   3. Local sibling repo: ../pricing/data/pricing.json (dev only)
 *
 * Usage:
 *   node scripts/sync-pricing.mjs              # update data/pricing.json + lib/data/pricing.json
 *   node scripts/sync-pricing.mjs --dry-run    # preview without writing
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = resolve(__dirname, "../data/pricing.json");
const LIB_DATA_PATH = resolve(__dirname, "../lib/data/pricing.json");
const LOCAL_PATH = resolve(__dirname, "../../pricing/data/pricing.json");
const API_URL = process.env.PRICING_API_URL || "https://pricing.hanzo.ai/v1/pricing";
const DRY_RUN = process.argv.includes("--dry-run");

async function fetchPricing() {
  // Try API first
  try {
    console.log(`Fetching from API: ${API_URL}`);
    const res = await fetch(API_URL);
    if (res.ok) {
      return res.json();
    }
    console.warn(`API returned ${res.status}, trying fallbacks...`);
  } catch (err) {
    console.warn(`API fetch failed: ${err.message}, trying fallbacks...`);
  }

  // Fall back to local sibling repo (for dev)
  if (existsSync(LOCAL_PATH)) {
    console.log(`Reading from local: ${LOCAL_PATH}`);
    return JSON.parse(readFileSync(LOCAL_PATH, "utf8"));
  }

  throw new Error("No pricing source available (API unreachable and no local file)");
}

async function main() {
  const pricing = await fetchPricing();
  console.log(`  Updated: ${pricing.updated}`);
  console.log(`  Hanzo models: ${pricing.hanzoModels?.length || 0}`);
  console.log(`  Third-party: ${pricing.thirdPartyModels?.length || 0}`);

  if (DRY_RUN) {
    console.log("\n[DRY RUN] Would write to", DATA_PATH, "and", LIB_DATA_PATH);
    return;
  }

  const json = JSON.stringify(pricing, null, 2) + "\n";
  writeFileSync(DATA_PATH, json);
  writeFileSync(LIB_DATA_PATH, json);
  console.log(`\nWritten to ${DATA_PATH}`);
  console.log(`Written to ${LIB_DATA_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
