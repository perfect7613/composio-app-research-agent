import { readJson, writeJson } from "./lib.mjs";

const research = readJson("data/research.json", []);

const rows = [];

for (const row of research) {
  const checks = [];
  for (const url of row.evidenceUrls || []) {
    checks.push(await checkUrl(url));
  }

  const reachable = checks.filter((check) => check.ok).length;
  rows.push({
    id: row.id,
    app: row.name,
    category: row.category,
    confidence: row.confidence,
    evidenceCount: checks.length,
    reachableEvidence: reachable,
    allEvidenceReachable: checks.length > 0 && reachable === checks.length,
    checks
  });
}

const summary = {
  checkedAt: new Date().toISOString(),
  appsChecked: rows.length,
  totalEvidenceUrls: rows.reduce((sum, row) => sum + row.evidenceCount, 0),
  reachableEvidenceUrls: rows.reduce((sum, row) => sum + row.reachableEvidence, 0),
  appsWithReachableEvidence: rows.filter((row) => row.reachableEvidence > 0).length,
  appsWithAllEvidenceReachable: rows.filter((row) => row.allEvidenceReachable).length,
  appsNeedingEvidenceReview: rows.filter((row) => row.reachableEvidence === 0).map((row) => row.app)
};

writeJson("data/evidence-audit.json", { summary, rows });
console.log(JSON.stringify(summary, null, 2));

async function checkUrl(url) {
  const startedAt = Date.now();
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(12000)
    });
    if (response.ok || [401, 403, 405].includes(response.status)) {
      return result(url, response.status, true, Date.now() - startedAt);
    }
    return await getFallback(url, startedAt);
  } catch {
    return await getFallback(url, startedAt);
  }
}

async function getFallback(url, startedAt) {
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(15000)
    });
    return result(url, response.status, response.ok || [401, 403].includes(response.status), Date.now() - startedAt);
  } catch (error) {
    return {
      url,
      ok: false,
      status: null,
      latencyMs: Date.now() - startedAt,
      error: error.message
    };
  }
}

function result(url, status, ok, latencyMs) {
  return { url, status, ok, latencyMs };
}
