# Deepening pass for existing content (thomasosayi.com)
Read portfolio-site/seo-brief/BRIEF.md (facts, prices, format, FORBIDDEN rules) and portfolio-site/seo-brief/SHOTS.md first. Repo: portfolio-site (repo root/portfolio-site). Edit ONLY the file you are assigned. No git, no next build.

For EACH blog post in your file:
1. Figures: add 1 to 3 screenshots from SHOTS.md where a real project of Thomas's is a natural example of a point the post already makes (or a sentence you add that states a true fact about that project). Put each image line right after the paragraph that mentions the project. If an existing figure uses an old /work/fiverr/*.jpg image and a /shots/ screenshot shows the point better, you may swap it. Do not add figures to posts where no project fits. Never use the forbidden hoopgang images.
2. Sources: add a `sources` array (2 to 5 real outside references { title, publisher, url }) for facts the post states: official docs, government pages, vendor docs. Only URLs you have actually loaded with WebFetch or seen in WebSearch results this session. If web search is unavailable, WebFetch official doc URLs directly to confirm they load. If a post's facts are purely Thomas's experience, 1 to 2 sources is fine.
3. Depth: if the body is under 2,000 words, add one genuinely useful new "## " section (150 to 260 words, question-style, opens with a direct one-sentence answer) placed before "## The bottom line": e.g. a worked example, a step-by-step, a cost breakdown with Thomas's packages, a common mistake, a newer development verified with a source. Keep the body at or below 2,200 words. Check that what you add does not contradict the rest of the post.
4. If you added a section or changed facts, set `updated: '2026-11-22'`. If you only added figures/sources, do not change `updated`.
5. Fix any facts you notice are now wrong (verify first).
Keep all existing rules: no em/en dashes, no backticks or "${" in bodies, no bold, links, tables, numbered lists. Thomas's voice, first person.

Quality gate: node portfolio-site/seo-brief/check.mjs <file> (all ok, words <= 2200 for posts), then cd portfolio-site (repo root/portfolio-site) && npx tsc --noEmit -p . 2>&1 | head (must be empty).
Final message: per slug: words before/after, figures added, number of sources, whether updated changed.
