import { z } from "zod";
import { BrowserUse } from "browser-use-sdk/v3";
import { loadEnv, parseArgs, readJson, writeJson } from "./lib.mjs";

loadEnv();
const args = parseArgs(process.argv);
const sampleSize = Number(args["sample-size"] || process.env.VERIFY_SAMPLE_SIZE || 8);
const research = readJson("data/research.json", []);
const existing = readJson("data/verification.json", {});

const Check = z.object({
  app: z.string(),
  verdict: z.enum(["hit", "partial", "miss"]),
  correctedFields: z.array(z.string()),
  evidenceUrl: z.string(),
  note: z.string()
});

const Checks = z.object({
  checks: z.array(Check)
});

const sample = chooseSample(research, sampleSize);

if (!process.env.BROWSER_USE_API_KEY) {
  console.log("BROWSER_USE_API_KEY is not set. Keeping committed verification sample.");
  console.log(`Suggested browser sample: ${sample.map((app) => app.name).join(", ")}`);
  process.exit(0);
}

const client = new BrowserUse();
const prompt = [
  "Verify these API/toolkit research claims using official docs where possible.",
  "For each app, decide whether the claim is hit, partial, or miss. Return concise structured output.",
  JSON.stringify(sample.map((app) => ({
    app: app.name,
    category: app.category,
    claim: {
      authMethods: app.authMethods,
      credentialAccess: app.credentialAccess,
      apiSurface: app.apiSurface,
      mcpStatus: app.mcpStatus,
      buildability: app.buildability,
      mainBlocker: app.mainBlocker
    },
    evidenceUrls: app.evidenceUrls
  })), null, 2)
].join("\n\n");

const result = await client.run(prompt, {
  model: "claude-sonnet-4.6",
  schema: Checks
});

const browserChecks = result.output.checks;
const merged = {
  ...existing,
  browserUseRun: {
    ranAt: new Date().toISOString(),
    sampleSize,
    checks: browserChecks
  }
};

writeJson("data/verification-browser-use.json", merged);
console.log("Wrote Browser Use verification to data/verification-browser-use.json");

function chooseSample(rows, size) {
  const buckets = [
    (row) => row.confidence === "low",
    (row) => row.credentialAccess.includes("gated"),
    (row) => row.buildability === "easy-win",
    (row) => row.mcpStatus.toLowerCase().includes("official")
  ];
  const chosen = [];
  for (const pick of buckets) {
    const candidate = rows.find((row) => pick(row) && !chosen.includes(row));
    if (candidate) chosen.push(candidate);
  }
  for (const row of rows) {
    if (chosen.length >= size) break;
    if (!chosen.includes(row)) chosen.push(row);
  }
  return chosen.slice(0, size);
}
