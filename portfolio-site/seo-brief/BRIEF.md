# Writing brief for thomasosayi.com (Thomas Osayi, full-stack developer in Los Angeles)

Repo: portfolio-site (repo root/portfolio-site) (Next.js). DO NOT edit any existing file. Only create the ONE new file you are assigned. Do not run git. Do not run next build.

## Who Thomas is (only these facts; never invent clients, results, testimonials, stats, credentials)
- Full-stack developer in Los Angeles, studying computer science at Loyola Marymount University (B.S. expected May 2027). Never call him a graduate.
- Founder and builder of SQWAD (joinsqwad.com), UGC creator program software for Shopify brands. SQWAD's public case study on joinsqwad.com reports TheHoopGang: $500K+ revenue attributed to creator videos, 3.7x return on ad spend across 759 creator ads, $41K+ commission paid to creators, 62 creators, under 10 months. Cite these as "SQWAD's published TheHoopGang case study".
- Software engineer at The Hoop Gang (Next.js, TypeScript, Prisma, Postgres; streetwear brand expanding to Japan and France). TheHoopGang creator portal manages 50+ creators.
- Built NOM (React Native, Expo, Firebase food discovery app, 11-screen onboarding flow, camera uploads) at LMU Tech & Digital Ventures.
- Freelance via HNO Consulting: sites and booking, ordering and quote tools for LA businesses.
- Projects (read src/data/projects.ts and the caseStudies in src/data/seo.ts for exact facts): SQWAD, Guardian MindCare (therapy practice platform, 5 roles: therapists, supervisors, trainees, clients, admins), TheHoopGang, NOM, THG Brain (internal data platform: sales, email, ads, support inbox and creator portal synced and queryable from the team's own Claude), VenCare, Pacific Harbor Medical Group (executive physicals, Torrance/South Bay), SCOPRO Creators, Serenity Institute, LACEUP (basketball apparel storefront, Firebase admin), New York Nook (Russian restaurant, Hollywood, reservations and pickup ordering), Artistic Printing (commercial printer, quote management and client intake), FieldOps (job scheduling with Outlook Calendar sync), Astiglow (waxing studio, online booking and packages).
- Do not claim he has built for an industry unless one of these projects matches. No "I do this all the time" frequency claims.
- Package prices (the ONLY Thomas prices allowed):
  - Websites: Starter Site from $150 (7 days, one-page site), Business Site from $450 (14 days, up to 5 pages, booking or quote form, local SEO), Full Custom Build from $1,200 (21 days, multi-page with custom features, CMS or admin tools).
  - Fix AI-built app: Quick Fix from $60 (2 days, one bug), Fix Plus Features from $200 (5 days, up to three fixes plus one small feature), Finish and Launch from $600 (10 days, for apps whose core features already work).
  - SaaS MVP: MVP Starter from $250 (7 days, working first version of one workflow), SaaS MVP from $1,200 (21 days, auth, dashboard, database, payments), Full SaaS Platform from $3,000 (45 days, multi-role, admin tools, integrations).
- Site pages you can mention by name: the website cost calculator (/tools/website-cost-calculator), service pages, industry pages ("websites for restaurants" etc.), fix pages ("fix your Lovable app" etc.), and other posts by title (see existing.txt).

## Output: TypeScript file
For blog posts, create the assigned file exporting an array, e.g.:
import type { Post } from '../seo';
export const postsGenXX: Post[] = [ { ...post }, ... ];
Post fields: slug, title, description (140-170 chars), date: '2026-11-22', keywords (3-6, first = primary keyword), service ('nextjs-website-development' | 'fix-ai-built-app' | 'saas-mvp-development'), shortAnswer (1-3 sentences answering the title, quotable alone), takeaways (3-5 single sentences), faqs (4-6, one or two self-contained sentences each; at most one may name Thomas Osayi and a package), sources (2-5 real outside references: { title, publisher, url }), body.
Use single-quoted strings in TS; escape apostrophes as \' inside single-quoted strings, or use double quotes for those strings. body is a backtick template literal.

## Body format (one block per line)
"## " heading, "### " sub-heading, "- " bullet, "> " tip callout (no "Tip:" prefix), "![Caption](/shots/file.jpg)" image, anything else is a paragraph.
FORBIDDEN in bodies: markdown bold/italics (*, **, _), links, tables, numbered lists ("1."), backticks, "${". No em dashes or en dashes ANYWHERE in the file (use commas, periods, colons, parentheses). No emoji.
Inline code like file names is plain text (e.g. firestore.rules, NEXT_PUBLIC_SITE_URL).

## Long-form rules (every post)
- Body 1,700 to 2,200 words (count it; aim ~1,900). Depth, not padding: how it works, concrete steps, exact settings, file names and error messages, realistic cost and time ranges consistent with the package prices, trade-offs, mistakes to avoid, one worked example (a made-up business is fine if the text says it is an illustration), when to hire help.
- Structure: 1-2 opening paragraphs, then 7-10 "## " sections, most phrased as the question a reader would type, ending with "## The bottom line". Each H2 opens with a direct one-sentence answer and runs ~150-260 words, self-contained. Use "### " sub-headings and "- " bullets where clearer. 1-2 "> " tips.
- Plain, confident first person as Thomas. Vary openings and structure so posts do not read as templated. Mention a related page or post by name where natural (no links).
- Comparison posts: each option gets its own "### " sub-section with best for, cost range, pros, cons; honest recommendation per reader type. Never disparage named freelancers or agencies.
- Third-party prices, limits, versions: only if you verify them now with WebSearch/WebFetch; write "at the time of writing" and add the page to sources. Never invent statistics. Regulated topics (HIPAA, ADA, legal, tax): careful general info plus a line that it is not legal advice.
- Figures: 1-3 per post from SHOTS.md (portfolio-site/seo-brief/SHOTS.md) ONLY where a real project is a natural example of the point, placed right after the paragraph that mentions it. Caption = factual description from SHOTS.md, first person is fine ("A booking flow I built for Astiglow..."). Never use /images/hoopgang/admin-dashboard.png, application-flow.png, application-view.png, creator-info.png. If nothing fits, use none.
- Sources: real URLs you have actually seen in WebSearch results or fetched (official docs, government sites, vendor pricing/docs pages, reputable studies). No made-up URLs.

## Quality gate before you finish
Run: node portfolio-site/seo-brief/check.mjs <your file>  (prints words per body, H2 count, and flags dashes/backticks/bold/numbered lists/missing image files). Fix everything it flags. Then run: cd portfolio-site (repo root/portfolio-site) && npx tsc --noEmit -p . 2>&1 | grep <yourfilename>  (must print nothing).
Your final message: list of slugs with word counts, one line each, plus anything you could not verify.
