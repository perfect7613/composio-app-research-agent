import { mkdirSync, writeFileSync } from "node:fs";
import { readJson } from "./lib.mjs";

const research = readJson("data/research.json", []);
const verification = readJson("data/verification.json", {});
const evidenceAudit = readJson("data/evidence-audit.json", null);
const verificationSample = readJson("data/verification-sample.json", null);
const agentRun = readJson("data/agent-run-report.json", null);

const counts = {
  total: research.length,
  buildability: countBy(research, "buildability"),
  credentialAccess: countBy(research, "credentialAccess"),
  confidence: countBy(research, "confidence"),
  category: countBy(research, "category")
};

const auth = {};
for (const row of research) {
  for (const method of row.authMethods || []) {
    auth[method] = (auth[method] || 0) + 1;
  }
}
counts.authMethods = auth;

const easyWins = research.filter((row) => row.buildability === "easy-win").length;
const outreach = research.filter((row) => ["outreach-needed", "not-today"].includes(row.buildability)).length;
const gated = research.filter((row) => row.credentialAccess.includes("gated")).length;

const insights = [
  `${easyWins} of ${research.length} apps look toolkit-buildable with low commercial friction.`,
  `${gated} apps need admin, paid, or partner access before a useful toolkit can ship.`,
  `${outreach} apps are outreach-first rather than engineering-first.`,
  "OAuth2 dominates customer-data and collaboration apps; API keys dominate developer, scraping, and data platforms.",
  "The strongest easy wins are self-serve apps with broad REST/GraphQL APIs plus narrow action boundaries.",
  "The common blocker is not missing endpoints; it is credential access, app review, admin approval, or unsafe write actions."
];

mkdirSync("docs/assets", { recursive: true });
writeFileSync(
  "docs/assets/research-data.js",
  `window.RESEARCH_CASE_STUDY = ${JSON.stringify({ research, verification, evidenceAudit, verificationSample, agentRun, counts, insights }, null, 2)};\n`
);
console.log("Built docs/assets/research-data.js");

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] || "unknown";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}
