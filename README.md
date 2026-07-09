# 100 App Toolkit Buildability Study

This repo contains a research pipeline and static case study for evaluating whether 100 apps can become agent-callable Composio-style toolkits.

The reviewer-facing deliverable is the static HTML slideshow in `docs/index.html`.

## What It Shows

- Category and one-line description for every app.
- Auth method: OAuth2, API key, basic auth, token, or other.
- Credential access: self-serve, admin-gated, paid/trial-gated, partner-gated, or unclear.
- API surface and MCP status.
- Buildability verdict and main blocker.
- Evidence URL(s) for each answer.
- Pattern analysis across all 100 apps.
- Agent workflow and verification loop, including misses.

## Quick Start

```bash
npm install
npm run seed
npm run bootstrap
npm run build
npm run preview
```

Then open `http://localhost:4173`.

## Optional Keys

Copy `.env.example` to `.env` and add keys locally:

```bash
cp .env.example .env
```

The `.env` file is ignored by git.

## Research Agent

Run a small live research pass:

```bash
npm run research:sample
```

Run the full pass:

```bash
npm run research
```

When `FIRECRAWL_API_KEY` is set, `scripts/research-agent.mjs` calls Firecrawl Agent with the structured schema in `schemas/research-record.schema.json`. It writes raw agent output under `.firecrawl/agent/` and draft normalized rows to `data/research-draft.json`.

The submitted `data/research.json` is the checked baseline used by the HTML page.

Run the full local pipeline wrapper:

```bash
npm run pipeline
```

The pipeline stages are seed, research draft, evidence audit, stratified sample selection, Browser Use verification trigger, agent-run report, and static data bundle.

## Evidence Audit

```bash
npm run evidence:audit
npm run sample:verify
npm run agent:report
```

These commands create:

- `data/evidence-audit.json`: live URL reachability checks for evidence links.
- `data/verification-sample.json`: stratified sample rows chosen for checking.
- `data/agent-run-report.json`: stage-by-stage summary of what the research agent loop did.

## Verification

Run the committed sample check:

```bash
npm run verify:sample
```

When `BROWSER_USE_API_KEY` is set, `scripts/verify-browser-use.mjs` uses Browser Use Cloud v3 and structured output to re-check a stratified sample against official docs. The committed `data/verification.json` shows the human/browser verification sample, including misses and corrections.

## Build The Slideshow

```bash
npm run build
```

This creates `docs/assets/research-data.js` from `data/research.json` and `data/verification.json`. The final page is still authored as proper HTML/CSS/JS in `docs/index.html`; there is no backend required.

## Where Human Judgment Was Needed

- Apps with partner-only or customer-only docs.
- Products with ambiguous API naming, such as NotebookLM versus Gemini/Vertex AI.
- Low-public-docs apps such as fanbasis, Paygent Connect, Grain, Fathom, and Consensus.
- Safety classification for finance, ads, infrastructure, and write-heavy workflows.
