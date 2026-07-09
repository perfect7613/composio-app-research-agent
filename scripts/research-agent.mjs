import { mkdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { loadEnv, readJson, slugify, parseArgs, writeJson } from "./lib.mjs";

loadEnv();
const args = parseArgs(process.argv);
const apps = readJson("data/apps.json", []);
const limit = args.limit ? Number(args.limit) : apps.length;
const selected = apps.slice(0, limit);
const hasFirecrawl = Boolean(process.env.FIRECRAWL_API_KEY);

const schema = readJson("schemas/research-record.schema.json");
mkdirSync(".firecrawl/agent", { recursive: true });

function promptFor(app) {
  return [
    `Research ${app.name} (${app.hint}) for an AI-agent toolkit buildability study.`,
    `Use official developer docs first. Return a single JSON object matching this schema:`,
    JSON.stringify(schema),
    `Definitions: credentialAccess means whether a developer can get credentials themselves, or whether access is admin, paid/trial, partner/contact-sales, or unclear.`,
    `Include evidenceUrls for every major claim. Be honest when docs are unclear.`,
    `App category: ${app.category}.`
  ].join("\n\n");
}

function fallbackDraft(app) {
  return {
    id: app.id,
    name: app.name,
    category: app.category,
    summary: "Needs live research pass.",
    authMethods: ["unknown"],
    credentialAccess: "unclear",
    apiSurface: "Not yet researched.",
    mcpStatus: "Not yet checked.",
    buildability: "needs-review",
    mainBlocker: "Pending official-docs extraction.",
    confidence: "low",
    evidenceUrls: [`https://${app.hint}`],
    notes: "Generated fallback because FIRECRAWL_API_KEY was not present."
  };
}

const drafts = [];

for (const app of selected) {
  const slug = slugify(app.name);
  const outputPath = `.firecrawl/agent/${String(app.id).padStart(3, "0")}-${slug}.json`;

  if (!hasFirecrawl) {
    drafts.push(fallbackDraft(app));
    continue;
  }

  try {
    const stdout = execFileSync(
      "firecrawl",
      [
        "agent",
        promptFor(app),
        "--urls",
        `https://${app.hint}`,
        "--schema-file",
        "schemas/research-record.schema.json",
        "--model",
        "spark-1-pro",
        "--max-credits",
        "8",
        "--wait",
        "--timeout",
        "180",
        "--json",
        "--output",
        outputPath
      ],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
    );
    if (stdout.trim()) writeFileSync(`${outputPath}.stdout.txt`, stdout);
    const result = readJson(outputPath, {});
    drafts.push({ id: app.id, ...app, rawAgentFile: outputPath, ...extractAgentOutput(result, app) });
  } catch (error) {
    drafts.push({
      ...fallbackDraft(app),
      notes: `Firecrawl agent failed: ${error.message}`
    });
  }
}

writeJson("data/research-draft.json", drafts);
console.log(`Wrote ${drafts.length} draft research records to data/research-draft.json`);

function extractAgentOutput(result, app) {
  const candidates = [
    result?.data?.output,
    result?.output,
    result?.data,
    result
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    if (typeof candidate === "string") {
      try {
        return JSON.parse(candidate);
      } catch {
        continue;
      }
    }
    if (candidate.name || candidate.summary || candidate.evidenceUrls) return candidate;
  }

  return fallbackDraft(app);
}
