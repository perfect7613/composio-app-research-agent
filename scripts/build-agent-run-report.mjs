import { existsSync } from "node:fs";
import { readJson, writeJson } from "./lib.mjs";

const research = readJson("data/research.json", []);
const verification = readJson("data/verification.json", {});
const evidenceAudit = readJson("data/evidence-audit.json", null);
const verificationSample = readJson("data/verification-sample.json", null);

const lowConfidence = research.filter((row) => row.confidence === "low").length;
const gated = research.filter((row) => row.credentialAccess.includes("gated")).length;
const easyWins = research.filter((row) => row.buildability === "easy-win").length;

const report = {
  generatedAt: new Date().toISOString(),
  pipeline: [
    {
      stage: "seed",
      command: "npm run seed",
      output: "data/apps.json",
      result: `${readJson("data/apps.json", []).length} apps fixed from the research set.`
    },
    {
      stage: "agent-research",
      command: "npm run research",
      output: "data/research-draft.json + .firecrawl/agent/",
      result: "Firecrawl-backed agent drafts structured rows when FIRECRAWL_API_KEY is available; curated final rows are stored in data/research.json."
    },
    {
      stage: "evidence-audit",
      command: "npm run evidence:audit",
      output: "data/evidence-audit.json",
      result: evidenceAudit
        ? `${evidenceAudit.summary.reachableEvidenceUrls}/${evidenceAudit.summary.totalEvidenceUrls} evidence URLs reachable or gated-but-valid.`
        : "Not run yet."
    },
    {
      stage: "sample",
      command: "npm run sample:verify",
      output: "data/verification-sample.json",
      result: verificationSample
        ? `${verificationSample.sampleSize} rows selected across risk and category strata.`
        : "Not run yet."
    },
    {
      stage: "browser-verification",
      command: "npm run verify:sample",
      output: "data/verification-browser-use.json or data/verification.json",
      result: `${verification?.firstPass?.correct || 0}/${verification?.firstPass?.sampleSize || 0} correct first pass; ${verification?.afterVerification?.correct || 0}/${verification?.afterVerification?.sampleSize || 0} correct after correction.`
    },
    {
      stage: "publish",
      command: "npm run build",
      output: "docs/assets/research-data.js",
      result: existsSync("docs/assets/research-data.js") ? "Static data bundle generated for the HTML deck." : "Not built yet."
    }
  ],
  datasetSummary: {
    apps: research.length,
    easyWins,
    gated,
    lowConfidence,
    verificationChecks: verification.checks?.length || 0
  },
  correctionExamples: (verification.checks || [])
    .filter((check) => check.result !== "hit")
    .map((check) => ({
      app: check.app,
      result: check.result,
      correction: check.whatChanged,
      evidenceUrl: check.evidenceUrl
    }))
};

writeJson("data/agent-run-report.json", report);
console.log(JSON.stringify(report.datasetSummary, null, 2));
