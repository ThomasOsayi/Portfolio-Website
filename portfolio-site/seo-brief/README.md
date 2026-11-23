# seo-brief
Writer brief, screenshot library and quality check used for the content expansion (Nov 2026) and by the scheduled SEO task.
- BRIEF.md: facts, prices, format and long-form rules given to every writer subagent.
- SHOTS.md: screenshot library (public/shots) with factual captions.
- check.mjs: `node seo-brief/check.mjs <file.ts>` prints words, H2 count and flags (dashes, bold, numbered lists, links, missing images).
- DEEPEN.md: rules for upgrading existing content.
New generated content lives in src/data/gen/ (posts-XX.ts wired through gen/index.ts; industries-*.ts and tools-gen.ts wired in landing.ts; cases-*.ts wired in seo.ts).
