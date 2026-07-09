import { readJson, writeJson } from "./lib.mjs";

const research = readJson("data/research.json", []);
const desiredSize = Number(process.argv.includes("--size") ? process.argv[process.argv.indexOf("--size") + 1] : 16);

const pickers = [
  ["low-confidence", (row) => row.confidence === "low"],
  ["partner-gated", (row) => row.credentialAccess === "partner-gated"],
  ["admin-gated", (row) => row.credentialAccess === "admin-gated"],
  ["paid-gated", (row) => row.credentialAccess === "paid-or-trial-gated"],
  ["easy-win", (row) => row.buildability === "easy-win"],
  ["outreach", (row) => row.buildability === "outreach-needed"],
  ["official-mcp", (row) => row.mcpStatus.toLowerCase().includes("official")],
  ["graphql", (row) => row.apiSurface.toLowerCase().includes("graphql")]
];

const selected = [];
const reasons = new Map();

for (const [reason, predicate] of pickers) {
  const candidate = research.find((row) => predicate(row) && !selected.includes(row));
  if (candidate) {
    selected.push(candidate);
    reasons.set(candidate.name, [reason]);
  }
}

for (const category of [...new Set(research.map((row) => row.category))]) {
  if (selected.length >= desiredSize) break;
  const candidate = research.find((row) => row.category === category && !selected.includes(row));
  if (candidate) {
    selected.push(candidate);
    reasons.set(candidate.name, ["category-coverage"]);
  }
}

for (const row of research) {
  if (selected.length >= desiredSize) break;
  if (!selected.includes(row)) {
    selected.push(row);
    reasons.set(row.name, ["fill"]);
  }
}

const sample = selected.slice(0, desiredSize).map((row) => ({
  app: row.name,
  category: row.category,
  reason: reasons.get(row.name),
  claim: {
    authMethods: row.authMethods,
    credentialAccess: row.credentialAccess,
    apiSurface: row.apiSurface,
    mcpStatus: row.mcpStatus,
    buildability: row.buildability,
    mainBlocker: row.mainBlocker
  },
  evidenceUrls: row.evidenceUrls
}));

writeJson("data/verification-sample.json", {
  generatedAt: new Date().toISOString(),
  sampleSize: sample.length,
  selectionLogic: "Stratified across confidence, gatedness, buildability, MCP status, API style, and category coverage.",
  sample
});

console.log(`Wrote ${sample.length} verification sample rows to data/verification-sample.json`);
