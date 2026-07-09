# Final Plan

## Objective

Build a single-page case study and reproducible research pipeline that evaluates 100 requested apps for AI-agent toolkit buildability.

## Deliverables

1. Live HTML case study via GitHub Pages.
2. Source repo with README and runnable scripts.
3. Normalized dataset for all 100 apps.
4. Evidence URL(s) behind every final answer.
5. Verification sample showing first-pass misses, human/browser checks, and corrected accuracy.

## Constraints From The Assignment

- The reviewer should understand the page in about two minutes with no narration.
- Accuracy matters more than volume or polish alone.
- The work should be done with an agent/script/pipeline, not hand-filled rows only.
- Paid accounts are not required; gated apps should be marked honestly with evidence.
- If the agent was wrong or an app was blocked, the final page should say so.
- The page must show findings, patterns, the agent/workflow, proof, and verification.

## Implementation

1. Seed the 100 apps from the assignment into `data/apps.json`.
2. Run `scripts/research-agent.mjs`.
   - Uses Firecrawl agent/search when `FIRECRAWL_API_KEY` is set.
   - Writes per-app raw outputs under `.firecrawl/`.
   - Produces normalized draft records in `data/research-draft.json`.
3. Review and lock final records in `data/research.json`.
   - Human edits are explicit: confidence, blocker, notes, and verification status.
4. Run `scripts/verify-browser-use.mjs`.
   - Samples apps across categories/auth/access patterns.
   - Uses Browser Use Cloud when `BROWSER_USE_API_KEY` is set.
   - Writes verification observations to `data/verification.json`.
5. Run `scripts/build-data-bundle.mjs`.
   - Builds `docs/assets/research-data.js` for the authored slideshow.
   - Includes headline insights, charts, table/matrix, workflow proof, verification, and caveats.
6. Deploy the hand-authored `docs/` HTML slideshow with GitHub Pages.

## Skill Idea

Yes, this workflow is a good candidate for a Codex skill after the submission is done. The skill would be a reusable "API buildability research" workflow:

- Input: app list with names/hints.
- Output: normalized API/auth/gatedness/buildability report.
- Tools: Firecrawl for research, Browser Use for verification, optional Composio CLI for app/tool discovery, static HTML generation.
- Built-in verification: stratified sample, evidence URL checks, and first-pass vs corrected accuracy.

For the assignment itself, I will describe it as a reusable workflow idea rather than spend submission time packaging a polished skill before the core artifact is finished.
