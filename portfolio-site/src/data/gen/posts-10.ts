// Generated articles, batch 10 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen10: Post[] = [
  {
    slug: 'monthly-cost-to-run-an-ai-built-app',
    title: 'What does it cost to run an AI-built app per month? A real budget',
    description: 'Hosting, database, auth, email, domain and AI API costs for a Lovable, Bolt or Next.js app, with current free tiers, paid entry prices and a worked monthly budget.',
    date: d,
    keywords: ['cost to run a web app per month', 'AI-built app running costs', 'Supabase vs Firebase cost', 'Vercel hosting cost', 'app hosting budget'],
    service: 'fix-ai-built-app',
    shortAnswer: 'A small AI-built app with real users usually costs between $0 and about $75 a month to run: free tiers cover a prototype, and a launched business app typically lands around $45 to $75 once you move hosting and the database to paid plans for backups and commercial use. AI API calls and email volume are the lines that grow fastest with usage.',
    takeaways: [
      'Free tiers are fine for building and testing, but a launched business app should pay for its database so it gets automatic backups and never pauses.',
      'At the time of writing, Vercel Pro is $20 per developer seat and Supabase Pro starts at $25 a month, which together cover most small apps.',
      'AI API costs scale with every request, so cap usage per user and pick the smallest model that does the job.',
      'Email is cheap until it is not: Resend Free allows 100 emails a day, which a busy sign-up day can exceed.',
      'Set budget alerts on every usage-billed service before launch, not after the first surprise invoice.',
    ],
    faqs: [
      { q: 'Can I run my app for free?', a: 'You can run a prototype for free on Vercel Hobby, Supabase Free or Firebase Spark, but free database tiers lack automatic backups and Supabase pauses free projects after a week of inactivity.' },
      { q: 'What is the biggest hidden cost in an AI-built app?', a: 'Usually AI API calls, because every user action can trigger a paid model request, and an unthrottled feature can multiply the bill overnight.' },
      { q: 'Is Firebase cheaper than Supabase?', a: 'For small apps Firebase can cost almost nothing on the Blaze plan because of its daily free quotas, while Supabase Pro is a flat $25 a month starting price; the cheaper option depends on your read and write patterns.' },
      { q: 'Do I need to pay for Lovable after I launch?', a: 'Only if you keep building or hosting there; if you export the code to GitHub and host it elsewhere, you pay that host instead.' },
      { q: 'Can someone review my app before I commit to paid plans?', a: 'Thomas Osayi can review the setup and fix one cost or configuration problem from $60, or get an app whose core works launched on the right plans from $600.' },
    ],
    sources: [
      { title: 'Vercel pricing', publisher: 'Vercel', url: 'https://vercel.com/pricing' },
      { title: 'Supabase pricing', publisher: 'Supabase', url: 'https://supabase.com/pricing.md' },
      { title: 'Firebase pricing plans', publisher: 'Google Firebase', url: 'https://firebase.google.com/docs/projects/billing/firebase-pricing-plans' },
      { title: 'Resend pricing', publisher: 'Resend', url: 'https://resend.com/pricing' },
      { title: 'API pricing', publisher: 'OpenAI', url: 'https://developers.openai.com/api/docs/pricing' },
    ],
    body: `The question usually comes right after a founder gets their Lovable or Bolt app working: what will this cost me every month once people use it? The builder subscription is the cost they know. Hosting, the database, sign-in, email, the domain and any AI features are the costs they find out about one invoice at a time.
This post walks through each line, with the free tiers and paid entry prices I checked at the time of writing, and ends with a worked budget for a small app at two stages of growth.
## How much does it cost to run a web app per month?
For a small AI-built app, expect $0 while you build and roughly $45 to $75 a month once it is a real business app, plus usage-based AI and email costs.
That range assumes a typical modern stack: a React or Next.js front end on Vercel, a database and auth on Supabase or Firebase, transactional email through a service like Resend, and optionally calls to an AI model. It is not the cost of a large app. It is the cost of an app with tens to a few thousand active users, which is where most founders I talk to are.
The pieces break down like this:
- Hosting: free to start, about $20 a month for a commercial production setup.
- Database and auth: free to start, about $25 a month for a plan with backups.
- Email: free for low volume, about $20 a month when you outgrow the free daily cap.
- Domain: one yearly renewal, the smallest line on the list.
- AI API calls: from cents to hundreds of dollars, entirely driven by usage.
- Error tracking and analytics: often free at small scale.
The one cost this list leaves out is your time, or a developer's, when something breaks. That is a maintenance question, and I cover it in "What does website maintenance cost, and what does it include?"
## What does hosting cost on Vercel?
Vercel Hobby is free and Vercel Pro is $20 per developer seat per month at the time of writing, with $20 of included usage credit.
Hobby includes, per month, 1 million CDN requests, 100 GB of fast data transfer, 1 million function invocations and 4 hours of active CPU. That is plenty for a small app. The catch is that Hobby users are limited to those caps and cannot buy extra usage, so a traffic spike can stop features until the 30 day window resets. Before you run a paying business on Hobby, read Vercel's fair use guidelines and terms. For client apps that take money, I put production on Pro.
Pro gives you pay-as-you-go usage beyond the included credit, team features, longer runtime logs (one day instead of one hour) and spend management. For one founder with one developer seat, that is $20 a month. Viewer seats are free, so a co-founder who only needs to look at deployments does not add cost.
If your app was built in Lovable and you want it on your own domain and host, "How to move a Lovable app to Vercel and your own domain" walks through the move. Netlify, Cloudflare Pages and Lovable's own hosting are alternatives with their own pricing, so compare on the features you actually use.
## What does the database and auth cost?
Supabase Pro starts at $25 a month and Firebase Blaze charges only for usage above daily free quotas, so either can run a small app for under $30.
### Supabase
At the time of writing, Supabase Free includes a 500 MB database, 50,000 monthly active users, 5 GB of egress and 1 GB of file storage, with up to two active projects. Two limits matter for a live app: free projects pause after one week of inactivity, and automatic backups are not included.
Supabase Pro starts at $25 a month. It includes $10 of compute credits (enough for one Micro instance), 8 GB of disk per project, 100,000 monthly active users, 250 GB of egress and daily backups kept for seven days. Overage is billed per unit, for example $0.00325 per extra monthly active user.
### Firebase
Firebase has two plans. Spark costs nothing and needs no card, but when a paid product exceeds its free quota it shuts off for the rest of the month, and Cloud Functions are not available at all. Blaze links a billing account and keeps the same free quotas, then bills usage above them. Cloud Firestore, for example, includes 50,000 reads and 20,000 writes per day at no charge. Most Firebase Authentication options are free on both plans.
For a deeper comparison of the two, see "Firebase vs Supabase for your MVP: how to choose."
> Whichever you pick, pay for the plan with backups before real customer data goes in. The cost of a lost database is far higher than $25 a month.
## What does transactional email cost?
Resend Free sends up to 3,000 emails a month with a cap of 100 per day, and Resend Pro is $20 a month for 50,000 emails with no daily cap, at the time of writing.
Transactional email is everything your app sends automatically: sign-up confirmations, password resets, receipts, booking reminders and notifications. Supabase and Firebase can send auth emails on their own, but their built-in senders are meant for testing and low volume, so most production apps plug in a dedicated provider.
The daily cap is what catches people. One hundred emails a day sounds like a lot until a launch post brings in two hundred sign-ups, each needing a confirmation email, and the last hundred people never receive theirs. They assume the app is broken.
Pro also raises custom domains from three to ten and bills extra emails at $0.90 per 1,000 beyond the included 50,000. Marketing newsletters are a separate product with separate pricing, so keep them out of your transactional sender.
## How much do AI API calls cost?
AI features are priced per million tokens of input and output, so the monthly cost depends entirely on how often users trigger them and which model you call.
To give a sense of the spread, OpenAI's pricing page at the time of writing lists gpt-5-nano at $0.05 per million input tokens and $0.40 per million output tokens, while its flagship model costs many times that. A short request and answer might be a few thousand tokens. At small-model prices, a thousand such requests cost cents. At flagship prices, the same thousand requests cost dollars, and a feature that runs on every page load can cost hundreds.
How I keep this line under control:
- Use the smallest model that gives acceptable results, and test the cheaper one first.
- Put the API key on the server, in an edge function or API route, never in the browser bundle where anyone can copy it and run up your bill.
- Limit requests per user per day, stored in the database, and return a friendly message when the limit is hit.
- Cache answers that do not change, such as a summary of the same document.
- Set a monthly budget limit in the provider's dashboard.
The exposed key is the one I find most often in AI-built apps. If your key ever shipped in front-end code, rotate it today.
## What other costs should I expect?
Expect a domain renewal, possibly the builder subscription, and small optional tools for error tracking and analytics.
### Domain
A domain is one yearly payment. Registrars price extensions differently, and some, such as Cloudflare Registrar, sell at the registry's wholesale price with no markup. Averaged over a year it is the smallest line in the budget.
### The builder subscription
If you keep building in Lovable, Bolt or a similar tool, that subscription and its credits continue. Once the app is exported to GitHub and maintained in code, you can often drop to a lower tier or cancel.
### Payments
Stripe does not charge a monthly fee for standard processing; it takes a percentage of each transaction. Count it as a cost of revenue rather than running cost. If payments are part of your app, "Setting up Stripe subscriptions for a SaaS MVP: what you actually need" covers the setup.
### Monitoring
Error tracking and uptime monitoring tools usually have free tiers that cover small apps. They earn their keep the first time a user hits an error you would never have seen otherwise.
## What does a real monthly budget look like?
Here is an illustration: a made-up booking app for a small fitness studio, built in Lovable on Supabase, with an AI feature that writes a short class summary for members.
### Stage one: soft launch, about 100 members
- Hosting: Vercel Pro, $20.
- Database and auth: Supabase Pro, $25, for daily backups and no pausing.
- Email: Resend Free, $0, since booking confirmations stay under 100 a day.
- AI summaries: a small model, around 3,000 requests a month, well under $1.
- Domain: a small yearly fee, averaged to a dollar or two a month.
- Total: roughly $47 a month.
### Stage two: growing, about 2,000 members
- Hosting: Vercel Pro, still $20 if usage stays inside the included credit.
- Database and auth: Supabase Pro, $25, still inside 100,000 monthly active users and 8 GB of disk.
- Email: Resend Pro, $20, because reminders now exceed 100 emails on busy days.
- AI summaries: around 60,000 requests a month on a small model, likely a few dollars; on a flagship model this line alone could pass the rest of the budget.
- Domain: unchanged.
- Total: roughly $70 to $75 a month.
Notice what did not change: hosting and database stayed flat across a twentyfold increase in members. The lines that moved were email volume and AI usage. That pattern holds for most small apps.
## How do I keep running costs from surprising me?
Turn on budget alerts and spend limits everywhere usage is billed, and review the usage pages once a month.
- On Vercel Pro, configure spend management so you are notified, or deployments pause, at a number you choose.
- On Firebase Blaze, set budget alerts in Google Cloud billing. They notify but do not stop charges on their own, so treat them as an early warning.
- On Supabase, check the usage page for disk, egress and monthly active users after each growth spike.
- On your AI provider, set a hard monthly limit.
- Audit queries that run in loops. An AI-built screen that reads a whole collection on every render can burn through Firestore read quotas in a day.
That last one is common. Builders often fetch everything and filter in the browser. It works with ten records and gets expensive with ten thousand. Moving the filter into the query usually fixes the cost and the speed at the same time.
## The bottom line
Running a small AI-built app is cheap if you plan it: about $45 to $75 a month for hosting, a backed-up database and email, plus AI calls that you control with the right model and per-user limits. The expensive months come from things nobody set up, like no backups, an exposed API key, a capped free tier during a launch, or a query that reads everything.
If you want someone to check your setup before launch, my Quick Fix starts at $60 for one problem, and Finish and Launch starts at $600 for apps whose core features already work, including moving them onto plans that suit a real business. You can also read "Your Lovable or Bolt app works locally. Here is what breaks at launch." for the issues I check first.`,
  },
  {
    slug: 'is-lovable-bad-for-seo',
    title: 'Is Lovable bad for SEO? What it outputs now and how to fix it',
    description: 'Older Lovable apps are client-rendered Vite SPAs, newer ones use TanStack Start with SSR. What that means for Google, meta tags, prerendering and moving pages to Next.js.',
    date: d,
    keywords: ['Lovable SEO', 'Lovable server-side rendering', 'Lovable prerendering', 'React SPA SEO', 'Lovable meta tags'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Lovable is not bad for SEO in itself, but it depends on which stack your project uses: new Lovable apps created from May 13, 2026 use TanStack Start with server-side rendering, while older React and Vite apps are single-page apps that rely on Lovable prerendering pages for verified crawlers. Either way, you still need unique titles, descriptions, Open Graph tags, a sitemap and real content on each page.',
    takeaways: [
      'According to Lovable docs at the time of writing, new projects use TanStack Start with server-side rendering, and older React and Vite projects are client-rendered SPAs.',
      'For older Vite projects, Lovable prerenders pages for verified crawlers only, and content that loads late can be missing from that HTML.',
      'Social platforms read Open Graph tags from raw HTML and mostly do not run JavaScript, so every page needs its own tags in the server response.',
      'If you move a Vite SPA off Lovable hosting, plan your own prerendering or server rendering, because the crawler prerendering is part of Lovable hosting.',
      'For a marketing site that must rank, moving the public pages to Next.js while keeping the app in Lovable is often the cleanest split.',
    ],
    faqs: [
      { q: 'Does Lovable use server-side rendering?', a: 'Lovable says new apps created from May 13, 2026 (June 22, 2026 on Enterprise) use TanStack Start with server-side rendering, while older React and Vite apps are single-page apps.' },
      { q: 'Can Google index a client-rendered React app?', a: 'Google can render JavaScript, but it is slower and less reliable than reading HTML directly, and many other crawlers and social previews do not run JavaScript at all.' },
      { q: 'How do I check what Google sees on my Lovable site?', a: 'Use the URL Inspection tool in Google Search Console and view the rendered HTML and screenshot for the page.' },
      { q: 'Should I upgrade my old Lovable project to TanStack Start?', a: 'Lovable offers an upgrade for existing React and Vite projects, but test every route and flow on a copy first, since a framework change touches routing and data loading.' },
      { q: 'Who can move my Lovable marketing pages to Next.js?', a: 'Thomas Osayi builds Next.js marketing sites from $450 for up to five pages with local SEO, and fixes Lovable app issues from $60.' },
    ],
    sources: [
      { title: 'SEO and AI search', publisher: 'Lovable Docs', url: 'https://docs.lovable.dev/features/seo-aeo' },
      { title: 'Building apps using TanStack Start', publisher: 'Lovable', url: 'https://lovable.dev/ja/blog/building-apps-using-tanstack-start' },
      { title: 'Understand JavaScript SEO basics', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' },
    ],
    body: `Founders ask me this after their Lovable site has been live for a month and Google Search Console shows almost nothing. Sometimes the cause is the rendering setup. More often it is generic titles, a missing sitemap and pages with very little text. The answer has also changed this year, because Lovable changed what it builds.
Here is what Lovable outputs now, what that means for search engines, and the fixes that matter, in the order I would do them.
## Is Lovable bad for SEO?
No, not by itself, but older Lovable projects are client-rendered single-page apps, and that setup makes SEO harder unless prerendering and page metadata are handled well.
For most of its history, a Lovable project was a React app built with Vite. The server sends a nearly empty HTML file with a script tag, and the browser builds the page with JavaScript. That is called client-side rendering. Humans never notice. Crawlers that do not run JavaScript see an empty page, and crawlers that do run it, like Google, have to render the page first, which adds delay and room for failure.
According to Lovable's documentation at the time of writing, that changed in 2026. New apps created from May 13, 2026 (June 22, 2026 on Enterprise plans) use TanStack Start with server-side rendering, so every request returns fully rendered HTML. Older React and Vite apps still serve the single-page app to visitors, and Lovable prerenders pages for verified crawlers such as search engines and AI search bots.
So the first step is to know which kind of project you have. If you created it before mid-May 2026 and never upgraded, assume it is the Vite kind.
## What does Lovable output today?
A new Lovable project is a TanStack Start app that renders on the server, and an older one is a React and Vite single-page app with crawler prerendering on Lovable hosting.
### New projects: TanStack Start
TanStack Start runs the React tree on the server and returns full HTML on the first request. Lovable's announcement says rendering can be set per route: server-rendered, prerendered at deploy time, or client-rendered. For SEO, this is the setup you want. A crawler receives your headings, text and links without running anything.
### Older projects: React and Vite SPA
These still work as before. Visitors get the JavaScript app. Verified crawlers get a prerendered snapshot generated on request. Lovable's docs note a limitation worth taking seriously: content that loads late may be missing from the prerendered HTML. If your page fetches its text from Supabase after a delay, the crawler may capture the loading spinner.
Lovable also says existing Vite projects can be upgraded to TanStack Start, and the published site stays unchanged until you publish again.
> Do the upgrade on a remix or a branch first. A framework change touches routing and data loading, which are exactly the parts an AI-built app tends to wire in unusual ways.
## How do I check what Google actually sees?
Use the URL Inspection tool in Google Search Console, run a live test, and read the rendered HTML and screenshot.
That one check settles most arguments. If the rendered HTML contains your headline, paragraphs and links, rendering is not your problem. If it shows an empty root div, a spinner or a generic title, it is.
Two more quick checks:
- View the page source in your browser (not the inspector, the raw source). On an SSR page you will see your text. On a Vite SPA you will see a near empty body, which is expected for humans and is why crawler prerendering matters.
- Paste the URL into a social preview debugger, such as the ones LinkedIn and Facebook offer. If the preview shows the wrong title or no image, your Open Graph tags are not in the HTML that platform reads.
Google's own JavaScript SEO guide explains that it renders pages in a separate step after crawling. It works, but every step is a chance for a timeout or a blocked resource to leave the page half indexed.
## Why are meta tags the most common Lovable SEO problem?
Because every new project starts with generic metadata, and single-page apps often show the same title and description on every route.
Lovable's docs say this directly: every new project starts with generic metadata and you should review it. In an SPA, the title and description live in one index.html file. Unless each route updates them, Google sees thirty pages with the same title, which looks like duplicate content.
What each public page needs:
- A unique title of roughly 50 to 60 characters with the main phrase near the front.
- A unique meta description that says what the page offers and who it is for.
- A canonical URL pointing to the custom domain version of that page.
- Open Graph title, description and image. Lovable's docs recommend share images at 1200 by 630 pixels and a few hundred kilobytes.
- Structured data where it fits, such as LocalBusiness for a local service.
Social platforms mostly do not run JavaScript, so tags set in the browser after load do not count for them. On a TanStack Start project, set them per route on the server. On a Vite project, the prerendered crawler snapshot should carry them, which is another reason to check with a preview debugger.
## Do I need a sitemap and robots.txt?
Yes: Lovable creates a robots.txt for new projects, but a sitemap is not always generated, and both need checking after you add a custom domain.
Lovable's SEO review flags a missing sitemap, invalid XML, placeholder or relative URLs, and URLs pointing to another host. That last one bites people who moved from a lovable.app subdomain to their own domain: the sitemap still lists the old host. A robots.txt that blocks crawlers on a live site is the worst version of this mistake, and it happens when a staging rule survives into production.
Checklist:
- Open yourdomain.com/robots.txt. Make sure it does not disallow everything, and that its Sitemap line points to your real domain.
- Open the sitemap. Every URL should be absolute, on your custom domain, and return a 200 status.
- Submit the sitemap in Google Search Console after publishing, since Google reads it from the live site.
- Only publicly published apps appear in search. Restricted access sites and workspace preview URLs will not.
If you recently moved domains, "How to move from Wix or Squarespace without losing your Google rankings" covers redirects and Search Console steps that apply to any domain move.
## What happens to SEO if I move my Lovable app to Vercel?
A TanStack Start app keeps its server rendering if the new host supports it, but a Vite SPA moved off Lovable loses the crawler prerendering, because that is part of Lovable hosting.
This is the trap I most want founders to know about. Lovable's docs say Lovable handles prerendering for React and Vite apps, so no external service is needed. That is true while Lovable hosts the site. Export the same Vite build to Vercel or Netlify as static files, and crawlers get the empty HTML shell again.
Your options after a move:
- Upgrade to TanStack Start first, then deploy to a host that runs it.
- Add a prerendering step at build time for your public routes, so each route ships as real HTML.
- Use a prerendering service in front of the SPA.
- Move only the public marketing pages to a server-rendered framework and leave the app as an SPA behind login.
The steps for the move itself are in "How to move a Lovable app to Vercel and your own domain." Decide on the SEO approach before you switch DNS, not after rankings drop.
## When should I move marketing pages to Next.js?
Move them when search traffic is a main growth channel and you need many content pages, local landing pages or a blog that you will keep adding to.
The logged-in part of an app does not need SEO. Nobody searches for your dashboard. The pages that need it are the homepage, service or feature pages, pricing, location pages and articles. Those are content pages, and Next.js handles them well: each page is rendered on the server or at build time, metadata is set per page, and a sitemap can be generated from the same data.
The split I recommend often looks like this:
- yourdomain.com: a Next.js marketing site with the homepage, features, pricing and blog.
- app.yourdomain.com: the Lovable app, unchanged, behind sign-in.
Guardian MindCare, a therapy practice platform I built, is a Next.js project for exactly this reason: its public pages have to load fast and be readable by search engines, because search is how new clients arrive, while the role-based portals sit in the same project as a real application.
![The Guardian MindCare blog index with category filters, part of a Next.js site whose public pages are built to be read by search engines.](/shots/guardian-blog.jpg)
A Next.js marketing site with up to five pages and local SEO starts at $450 with my Business Site package, and a larger content site with a CMS starts at $1,200. If your app itself is new and on TanStack Start, you may not need this split at all.
## What else affects how a Lovable site ranks?
Content, internal links and page speed matter more than any rendering setting once the basics are in place.
Lovable's own docs are honest here: its SEO review does not assess content quality, search intent, backlinks or competition, and it no longer runs Lighthouse, so they point to Google PageSpeed Insights for speed. A perfectly rendered page with 80 words of text will still struggle.
What I look at next:
- Words on the page. Each important page should answer the question a searcher has, in real sentences.
- Headings. One clear H1 per page, with H2s that match what people ask.
- Internal links. Real anchor links between pages, not buttons that navigate with JavaScript only.
- Images. Compressed, with descriptive alt text.
- Speed. Large bundles slow first paint on phones. "Core Web Vitals explained for small business owners" covers what to measure.
- Local signals. For a local business, a Google Business Profile and consistent name, address and phone.
For AI answers specifically, "How to get your business mentioned in ChatGPT, Perplexity and Google AI answers" goes further.
## The bottom line
Lovable is not bad for SEO, but you have to know which Lovable you have. New projects use TanStack Start with server rendering and are in good shape once their metadata is fixed. Older Vite projects depend on Lovable's crawler prerendering, which works on Lovable hosting and disappears when you move the static build elsewhere. In both cases, unique titles, descriptions, Open Graph tags, a clean sitemap and real content do most of the work.
If your pages are not getting indexed, my Quick Fix starts at $60 for one problem, such as broken metadata or a robots.txt blocking crawlers. If search is your main channel, a Next.js marketing site in front of your Lovable app is often the most durable fix.`,
  },
  {
    slug: 'add-an-admin-dashboard-to-a-lovable-app',
    title: 'How to add an admin dashboard to a Lovable app safely',
    description: 'Roles, protected routes, server-side checks and Supabase RLS policies for admins: how to add an admin dashboard to a Lovable app without exposing every user record.',
    date: d,
    keywords: ['admin dashboard for Lovable app', 'Lovable admin panel', 'Supabase admin role RLS', 'protected routes React', 'role-based access Supabase'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Add an admin dashboard to a Lovable app by storing roles in a separate table, protecting the admin routes in the interface, and enforcing admin access on the server with Supabase row level security policies and edge functions. Hiding the admin page is not security; the database must refuse non-admins even if they call the API directly.',
    takeaways: [
      'Store roles in their own table that users cannot edit, never in a profile column the user can update.',
      'A protected route only hides the screen, so every admin read and write must also be checked by RLS policies or server code.',
      'Supabase documents a pattern with a user_roles table, a custom access token hook and an authorize function used inside RLS policies.',
      'Admin actions that need the service role key belong in an edge function that verifies the caller is an admin first.',
      'Test with one account per role and try to reach admin data from a normal account before launch.',
    ],
    faqs: [
      { q: 'Can I just hide the admin page from normal users?', a: 'No, hiding the page stops nobody, because the Supabase API is public and a user can query tables directly with their own token.' },
      { q: 'Where should I store user roles in Supabase?', a: 'Store them in a separate table such as user_roles with RLS that lets users read but never insert or update their own role.' },
      { q: 'Should the admin dashboard use the service role key?', a: 'Only inside server code such as an edge function that first checks the caller is an admin, and never in the browser, because the service role key bypasses RLS.' },
      { q: 'Can Lovable build the admin dashboard for me?', a: 'Lovable can generate the screens quickly, but review the generated policies and role checks by hand, because that is where AI-built admin panels most often leak data.' },
      { q: 'How much does it cost to have an admin dashboard added?', a: 'Thomas Osayi adds a small admin feature alongside up to three fixes from $200, and multi-role platforms with admin tools start at $3,000.' },
    ],
    sources: [
      { title: 'Custom Claims and Role-based Access Control (RBAC)', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/postgres/custom-claims-and-role-based-access-control-rbac' },
      { title: 'Row Level Security', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/row-level-security' },
      { title: 'Lovable GitHub integration', publisher: 'Lovable Docs', url: 'https://docs.lovable.dev/integrations/github' },
    ],
    body: `Most apps reach the point where the founder needs to see everything: all users, all orders, all bookings, plus buttons to refund, ban or edit. So they ask Lovable for an admin dashboard, get a good-looking page in a few minutes, and ship it. The page works. The problem is usually what it is allowed to read, and who else can read it too.
This is how I add an admin dashboard to a Lovable app so that it is useful for the team and closed to everyone else.
## How do I add an admin dashboard to a Lovable app?
Define roles in the database, protect the admin routes in the interface, and enforce every admin permission on the server through RLS policies and edge functions.
Those are three layers, and each does a different job:
- The roles table decides who is an admin. It is the source of truth.
- The protected route decides which screens appear. It is convenience, not security.
- RLS policies and server functions decide what data can actually be read or changed. This is the security.
Lovable apps typically talk to Supabase directly from the browser using the public anon key. That is fine by design, because RLS policies decide what each signed-in user may do. It also means anything your admin page can fetch, any signed-in user can try to fetch with the same key and their own token, using nothing but the browser console. If the policies do not distinguish admins from users, the admin page has effectively published your data.
I wrote about the general risk in "Is your Lovable or Bolt app leaking data? Check Supabase row level security." An admin dashboard is the place where that risk is highest, because admin queries are, by definition, the ones that read other people's records.
## Where should admin roles be stored?
Store roles in a dedicated table, such as user_roles, that users can read for themselves but never insert into or update.
The mistake I see most in AI-built apps is a role column on the profiles table, together with a policy that lets users update their own profile. That combination lets any user make themselves an admin with one request. The interface never offers the option, but the API does not care about the interface.
Supabase's own guide on custom claims and role-based access control uses a cleaner pattern:
- An enum type, app_role, listing the roles.
- A user_roles table mapping each user_id to a role, one row per user and role.
- Optionally, a role_permissions table mapping each role to specific permissions.
- A custom access token hook, custom_access_token_hook, that adds a user_role claim to the JWT when a session token is issued. You enable it under Authentication, then Hooks, in the dashboard.
- An authorize function that reads the claim from auth.jwt() and checks it against role_permissions.
Simpler apps can skip the permissions table and the hook, and write a small security definer function, for example is_admin(), that checks user_roles for the current auth.uid(). Either way, only an existing admin or a migration should be able to write to the roles table.
## How do I protect admin routes in a Lovable app?
Wrap the admin routes in a guard component that checks the user's role and redirects everyone else, and treat it as a user experience feature, not a lock.
In a React app built by Lovable, that usually means a component around the admin routes that waits for the session, reads the role (from the JWT claim or a query to user_roles), shows a loader while checking, and redirects non-admins to the home page. Ask Lovable for it explicitly, and then read the code.
Things to check in what gets generated:
- It waits for the session to load before deciding. Otherwise admins get bounced on refresh.
- It does not read the role from local storage or a URL parameter, which anyone can edit.
- Every admin route sits inside the guard, including nested pages like /admin/users/123.
- The admin navigation link is hidden for non-admins, which avoids confusion, not attacks.
Then assume the guard is bypassed, because it can be. A user can open the bundle, find the admin queries and run them from the console. Everything after this section is what stops that.
## How do I write RLS policies for admins?
Add admin policies alongside the normal owner policies, so a row is readable if it belongs to the user or if the user is an admin.
A typical orders table already has a policy like "users can select their own orders" using auth.uid() = user_id. For the dashboard, add a second select policy that allows the row when is_admin() returns true, or when authorize('orders.read') does if you use the permissions pattern. Postgres combines permissive policies with OR, so normal users keep seeing their own rows and admins see all of them.
Rules I follow:
- Write separate policies for select, insert, update and delete. An admin who needs to read orders does not automatically need to delete them.
- Wrap the function call in a select, as Supabase's guide does, so Postgres evaluates it once per query rather than once per row.
- Make the role-check function security definer with a fixed search_path, so it can read user_roles without opening that table to everyone.
- Never write a policy that checks a value the client sends, like a role field in the request body.
- After adding policies, sign in as a normal user and run the admin query from the browser console. It should return only that user's rows.
> Keep a written list of every table and which roles may read or change it. Ten minutes on that list catches more holes than an hour of clicking around the dashboard.
## When does admin logic need an edge function?
Use an edge function whenever an admin action needs powers a signed-in user should never have, such as the service role key, a Stripe secret or another user's auth record.
Examples: issuing a refund, deleting a user's account, changing someone's email, sending an email on behalf of the business or exporting all records to CSV. These need secrets or bypass RLS entirely, so they cannot run in the browser.
The pattern inside the function:
- Read the caller's JWT from the Authorization header and verify it with Supabase.
- Check the caller is an admin by querying user_roles, using the caller's identity, not a flag in the request.
- Only then create a client with the service role key and perform the action.
- Write an audit row: who did what, to which record, and when.
The service role key must live only in the edge function's secrets. If it ever appeared in front-end code or a public repo, rotate it. Admin tools that skip the first two steps are the same as giving every user the service role key.
## How should I design roles if I have more than admin and user?
List every role and every kind of record, then decide read, write or nothing for each pair before building screens.
Guardian MindCare, a therapy practice platform I built, has five roles: therapists, supervisors, trainees, clients and admins. Each has its own portal and sees only what it should. A trainee should not see what a supervisor sees, and neither should see what an admin sees. That platform runs on Firebase, so the checks live in security rules that compare the user's role and ID with each record, but the planning step is the same in Supabase: the permissions table comes first, and the screens follow from it.
![The Guardian MindCare homepage with its provider search; behind it, the platform has separate portals for five roles.](/shots/guardian-home.jpg)
For most Lovable apps, two or three roles are enough: admin, staff and user. Resist adding roles before you need them. Each role multiplies the policies to write and the combinations to test. "Roles and permissions in a SaaS app: a practical guide for founders" goes deeper on modeling roles, including when to scope them to an organization.
## What should the admin dashboard actually include?
Start with the few views and actions the team uses every week, and add the rest when someone asks for them twice.
A useful first version for a typical app:
- A users list with search, sign-up date, plan and status.
- A record list for your main object, such as orders, bookings or submissions, with filters and a detail view.
- Two or three key numbers on the home view, such as new sign-ups this week, active subscriptions and open support items.
- The handful of actions that currently require you to open the Supabase dashboard, such as marking a booking as refunded or disabling an account.
- An audit log view, even a simple one.
Paginate every list. AI-generated admin pages often fetch every row and filter in the browser. That works with fifty rows and falls over with fifty thousand, and it also pulls every record over the network to the admin's laptop.
## What are the most common mistakes in AI-built admin panels?
The most common mistakes are client-only checks, a user-editable role field, and the service role key in front-end code.
The full list I check when someone hands me an admin panel:
- Admin check done only in the route guard, with no RLS or server check behind it.
- Role stored on profiles with a self-update policy.
- An RLS policy of "true" for select on a table, added to make the admin page load.
- The service role key in a Vite environment variable with the VITE_ prefix, which ships it to the browser.
- Admin email addresses hardcoded in the front end as the only check.
- No audit trail for destructive actions.
- Unbounded queries that load the whole table.
Each of these is quick to fix once found. Finding them is the part that takes a careful read.
## How do I test the admin dashboard before launch?
Create one test account per role, then try to reach every admin screen and every admin query from the non-admin accounts.
My routine:
- Sign in as a normal user. Visit /admin and nested admin URLs directly. You should be redirected.
- In the browser console, run the same Supabase queries the admin page runs. You should get only your own rows, or nothing.
- Try to update your own role row. It should fail.
- Call each admin edge function with a normal user's token. It should return 401 or 403.
- Sign in as an admin and confirm everything works, including on a hard refresh.
If you work in Lovable with GitHub sync on, make these changes on a branch and test there before merging. "How to hand off your AI-built app to a developer" explains how to share access when you want someone else to run this check.
## The bottom line
An admin dashboard in a Lovable app is three things: a roles table users cannot edit, route guards for convenience, and RLS policies plus edge functions that enforce admin access on the server. The screens are the easy part, and Lovable will generate them well. The policies are where the risk sits, so read them, test them as every role, and keep secrets out of the browser.
If you want it done for you, my Fix Plus Features package starts at $200 for up to three fixes plus one small feature, such as a first admin view with proper policies. Apps that need many roles and full admin tooling fit my Full SaaS Platform package from $3,000.`,
  },
  {
    slug: 'backup-supabase-or-firebase-database',
    title: 'How to back up your Supabase or Firebase database (and test the restore)',
    description: 'Supabase backups by plan, PITR, pg_dump and supabase db dump, plus Firestore scheduled backups, PITR and exports. How to set them up and run a restore drill.',
    date: d,
    keywords: ['backup Supabase database', 'Supabase pg_dump', 'Firestore backups', 'Supabase point in time recovery', 'restore database backup'],
    service: 'fix-ai-built-app',
    shortAnswer: 'On Supabase, the Free plan has no automatic backups, Pro keeps daily backups for 7 days and Team for 14, so every project should also run its own logical backups with supabase db dump or pg_dump. On Firebase, enable Firestore scheduled backups (up to 14 weeks retention, Blaze plan) and consider point-in-time recovery for a 7 day window, then practice a restore before you need one.',
    takeaways: [
      'At the time of writing, Supabase Free includes no automatic backups, Pro keeps 7 days of daily backups and Team keeps 14.',
      'Supabase database backups do not include Storage objects, so files need their own backup plan.',
      'Firestore scheduled backups can be daily or weekly with retention up to 14 weeks, and restores go to a new database.',
      'Firestore point-in-time recovery reads data as it was at any minute in the past 7 days.',
      'A backup you have never restored is a hope, not a backup, so run a restore drill into a separate project.',
    ],
    faqs: [
      { q: 'Does Supabase back up my database automatically?', a: 'On Pro, Team and Enterprise plans yes, with 7, 14 and up to 30 days of daily backups respectively, but the Free plan has no automatic backups.' },
      { q: 'How do I download a Supabase backup?', a: 'Run supabase db dump with the Supabase CLI, or pg_dump against your connection string, because the platform daily backups can be restored but not downloaded.' },
      { q: 'Does reverting in Lovable restore my database?', a: 'No, Lovable says reverting restores code only, and data changes made after that version, including data changed by migrations, remain.' },
      { q: 'Does Firebase back up Firestore for me?', a: 'Not by default; you enable scheduled backups or point-in-time recovery yourself, and scheduled backups require the Blaze plan.' },
      { q: 'Can someone set up backups and a restore drill for me?', a: 'Thomas Osayi sets up a backup job as a single fix from $60, or as part of a launch from $600.' },
    ],
    sources: [
      { title: 'Database Backups', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/platform/backups' },
      { title: 'Supabase pricing', publisher: 'Supabase', url: 'https://supabase.com/pricing.md' },
      { title: 'Back up and restore data', publisher: 'Google Firebase', url: 'https://firebase.google.com/docs/firestore/backups' },
      { title: 'Disaster recovery planning', publisher: 'Google Firebase', url: 'https://firebase.google.com/docs/firestore/disaster-recovery' },
    ],
    body: `The message usually arrives late at night: a prompt ran a migration that dropped a column, or a bulk update hit every row instead of one, and the founder wants to know how to get yesterday's data back. Sometimes the answer is a few clicks. Sometimes, on a free plan with no exports, the honest answer is that the data is gone.
This post is about making sure you get the first answer. It covers what Supabase and Firebase back up for you, what they do not, how to add your own backups, and how to prove a restore works.
## Does Supabase back up my database?
Only on paid plans: at the time of writing, Supabase Pro keeps daily backups for 7 days, Team for 14 and Enterprise for up to 30, and the Free plan has no automatic backups.
Supabase's docs say Pro, Team and Enterprise projects get daily backups, visible under Database, then Backups, in the dashboard. For free projects, the docs recommend exporting your data regularly with supabase db dump and keeping copies off site.
That gap matters because many AI-built apps launch on the Free plan. Lovable and Bolt make it easy to connect a free Supabase project, and nothing warns you that real customer data now has no safety net. Free projects also pause after a week of inactivity, which is another reason I move launched apps to Pro, as covered in "What does it cost to run an AI-built app per month? A real budget."
A few details from the docs that catch people:
- Database backups do not include Storage objects, only their metadata. Restoring an old backup does not bring back files deleted after it.
- Daily backups do not store custom role passwords, so those need resetting after a restore.
- The project is inaccessible during a restore, and downtime grows with database size.
- Platform daily backups can be restored but not downloaded.
## What is Supabase point-in-time recovery and is it worth it?
Point-in-time recovery lets you restore a Supabase database to any second within the retention window, and it costs about $100 a month for 7 days of retention at the time of writing.
PITR is an add-on for Pro, Team and Enterprise projects. Supabase backs up the write-ahead log about every two minutes by default, so in the worst case you lose around two minutes of data. Daily backups, by comparison, can lose up to a day.
Pricing from the docs at the time of writing:
- 7 days of retention: about $100 a month.
- 14 days: about $200 a month.
- 28 days: about $400 a month.
Two notes. Enabling PITR stops the daily backups, because PITR replaces them. And restoring to an earlier point replaces the current state of the database, so if you want to keep today's data as well, restore into a new project first and copy what you need.
For an early-stage app with modest data, daily backups plus your own nightly dump are usually enough. PITR earns its price when losing even a few hours of orders, bookings or payments would be a serious business problem.
## How do I back up Supabase myself with pg_dump?
Run supabase db dump with the Supabase CLI, or pg_dump against your database connection string, on a schedule, and store the files somewhere outside Supabase.
Supabase is Postgres, so the standard Postgres tools work. The CLI wraps them with sensible defaults. A complete logical backup has three parts:
- Roles: supabase db dump with the role-only option, saved to roles.sql.
- Schema: supabase db dump with no extra options, saved to schema.sql.
- Data: supabase db dump with the data-only option, saved to data.sql.
Each command takes your connection string through the db-url option. Find it in the dashboard under the Connect button. Use the session pooler or direct connection rather than the transaction pooler for dumps.
To automate it, the simplest approach is a scheduled GitHub Actions workflow that runs nightly, installs the Supabase CLI, runs the three dumps with the connection string stored as a repository secret, and uploads the files to private storage such as an S3 bucket or Google Cloud Storage with a lifecycle rule that deletes files after a set number of days. Keep the repository private, and never commit the dump files themselves to Git.
> Store at least one backup copy outside the provider you are backing up. If the account is locked, compromised or deleted, backups inside it go with it.
## How do I back up Supabase Storage files?
Back up Storage separately by copying the bucket contents to another location on a schedule, because database backups only hold file metadata.
If your app stores user uploads, such as profile photos, documents or receipts, those files live in Supabase Storage, which is S3 compatible. You can copy them with any S3 compatible tool, or with a small script that lists objects through the Supabase client and downloads them.
Practical approach:
- Run the copy in the same nightly job as your database dump.
- Copy only new or changed files after the first run, so the job stays fast.
- Keep the file paths identical, so the metadata in a restored database still points at the right objects.
If your files can be regenerated, like thumbnails, skip them and back up only the originals.
## What backups does Firebase offer for Firestore?
Firestore offers scheduled backups with up to 14 weeks of retention, point-in-time recovery for the last 7 days, and exports to Cloud Storage, but none of them are on until you turn them on.
### Scheduled backups
Each database can have one daily and one weekly backup schedule. You cannot pick the exact time of day. Retention is configurable up to 14 weeks. Backups include all data and index configuration, but not time-to-live policies. They require the Blaze plan, and you pay for backup storage plus a charge per restore based on backup size. Restores always go to a new database, never over the existing one. You can create schedules in the Google Cloud console, with the Firebase CLI (firebase firestore:backups:schedules:create) or with Terraform.
### Point-in-time recovery
With PITR enabled, you can read documents as they existed at any minute in the past 7 days and write recovered data back selectively. Google's disaster recovery guide lists a recovery point objective of one minute. Restoring from PITR data costs more than restoring from a backup.
### Exports
You can export a whole database to Cloud Storage, including a PITR export from a timestamp up to 7 days back, and keep it as long as you like. That covers retention beyond 14 weeks.
My default for a launched Firebase app is a daily scheduled backup with a few weeks of retention, plus PITR if the app handles orders or payments. The security rules matter as much as backups; see "Firebase best practices before launch: the security rules checklist."
## What about Firebase Storage and Auth?
Firestore backups cover Firestore only, so plan separately for Cloud Storage files and know what you can recover for Authentication.
Cloud Storage files can be copied to another bucket on a schedule with standard Google Cloud tools, and bucket versioning helps against accidental overwrites. For Authentication, the Firebase CLI can export user accounts with auth:export, which is worth running periodically if you would struggle to rebuild your user list. NOM, the React Native and Firebase food discovery app I built at LMU Tech and Digital Ventures, is a good example of why: user content comes from camera uploads, so the files matter as much as the documents that point to them.
## How do I run a restore drill?
Restore your latest backup into a separate project, point a copy of the app at it, and check that real screens load with real data.
A drill I run for Supabase:
- Create a new, empty Supabase project.
- Restore roles.sql, schema.sql and data.sql into it with psql, in that order.
- Copy a sample of Storage files into the matching bucket.
- Run the app locally with the new project's URL and anon key.
- Sign in as a test user, open the main screens, and compare record counts with production.
For Firestore, restore a scheduled backup to a new database, point a test build at it, and run the same checks.
Write down how long it took and what went wrong. The first drill almost always finds something: a missing extension, an RLS policy that references a role that was not restored, or a bucket nobody knew existed. Finding that on a calm afternoon is the whole point.
Keep the notes as a short runbook in the repository, next to the backup workflow. It should say where the backups live, who has access, which commands restore them, in what order, and how long the last drill took. When something does go wrong, the person restoring may not be you, and they will be working under pressure. A one-page runbook turns a frightening evening into a checklist.
Delete the drill project afterwards, or pause it, so it does not add to your bill or leave a second copy of customer data sitting around longer than needed.
## How often should I back up and test?
Back up the database at least daily, keep two to four weeks of copies, and run a restore drill before launch and then every few months.
A schedule that suits most small apps:
- Nightly: database dump and new Storage files, copied off provider.
- Weekly: check that last night's job actually produced files of a sensible size.
- Before every risky change: a manual dump. That includes migrations generated by an AI tool, bulk updates and imports.
- Quarterly: a full restore drill.
The manual dump before risky changes is the cheapest habit on this list. Lovable says reverting a version restores code only, not database data, and Bolt says restoring a version does not change your databases either. Your code has history. Your data only has history if you created it. For the code side, see "How to undo broken AI changes with git."
## The bottom line
Supabase backs up your database daily on paid plans, not on Free, and never backs up Storage files inside a database backup. Firebase gives you strong options in scheduled backups and PITR, but only after you turn them on. In both cases, add your own off-provider dumps, take a manual backup before any risky AI-generated change, and run a restore drill so you know the backup works.
If you want this set up properly, a nightly backup job with off-site storage fits my Quick Fix from $60, and it is part of what I check in Finish and Launch from $600.`,
  },
  {
    slug: 'undo-broken-ai-changes-with-git',
    title: 'How to undo broken AI changes with git (and Lovable or Bolt history)',
    description: 'Use commits as checkpoints, git revert vs reset, branches, and Lovable and Bolt version history with GitHub sync to undo a bad AI change without losing work.',
    date: d,
    keywords: ['undo AI changes with git', 'git revert vs reset', 'Lovable version history', 'Bolt restore version', 'Lovable GitHub sync'],
    service: 'fix-ai-built-app',
    shortAnswer: 'To undo a broken AI change, restore an earlier version in the builder history or run git revert on the bad commit, which adds a new commit that reverses it without rewriting history. Use git reset only on local work that has not been pushed, and remember that none of these tools roll back database data.',
    takeaways: [
      'Commit before every AI prompt or session, so each change has a clean checkpoint to return to.',
      'git revert is the safe undo for shared or synced branches because it adds history instead of deleting it.',
      'git reset rewrites history, so use it only on local commits that nobody else, including Lovable sync, has pulled.',
      'Lovable and Bolt version history restore code, not database data, according to their own docs.',
      'Try risky AI changes on a branch, and merge only after the preview works.',
    ],
    faqs: [
      { q: 'What is the difference between git revert and git reset?', a: 'git revert creates a new commit that undoes an earlier one and keeps history intact, while git reset moves the branch pointer back and discards later commits from that branch.' },
      { q: 'Does reverting in Lovable undo database changes?', a: 'No, Lovable says reverting restores code and redeploys edge functions but leaves database data, including data changed by migrations, as it is.' },
      { q: 'How do I restore an old version in Bolt?', a: 'Open Version history from the clock icon, select a version to preview it, then choose Restore this version and confirm.' },
      { q: 'Can I force push to the GitHub repo Lovable syncs with?', a: 'Avoid it, because rewriting the synced branch can cause divergence and Lovable may replace its own version with the GitHub version, losing Lovable-only edits.' },
      { q: 'Can someone recover my app after AI changes broke it?', a: 'Thomas Osayi fixes a single broken change from $60 and up to three fixes plus a small feature from $200.' },
    ],
    sources: [
      { title: 'Version history', publisher: 'Lovable Docs', url: 'https://docs.lovable.dev/features/projects/history' },
      { title: 'GitHub integration', publisher: 'Lovable Docs', url: 'https://docs.lovable.dev/integrations/github' },
      { title: 'Rollback and backup', publisher: 'Bolt Help Center', url: 'https://support.bolt.new/building/using-bolt/rollback-backup' },
      { title: 'Resetting, checking out and reverting', publisher: 'Atlassian', url: 'https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting' },
    ],
    body: `It happens to everyone who builds with AI. One prompt asks for a small tweak to the pricing page, and the reply rewrites the auth flow, renames three components and breaks the build. The next prompt, asking it to fix what it broke, makes things worse. Now you want the version from an hour ago, and you are not sure how to get it back without losing the good changes from this morning.
Here is how I undo broken AI changes, using the builder's own history first, then git, and how to set things up so the next bad prompt costs you minutes instead of a day.
## How do I undo AI changes with git?
Find the commit that broke things and run git revert on it, which adds a new commit that reverses those changes while keeping everything else.
Git records your project as a series of commits, each a snapshot with a message and a unique ID. If an AI tool commits after each change, as Lovable does when GitHub sync is on, then every prompt is already a checkpoint. If you use Cursor or another editor-based tool, you need to commit yourself.
The basic flow:
- Run git log with the oneline option to see recent commits with their short IDs.
- Find the last good one and the bad ones after it.
- Run git revert followed by the bad commit's ID. Git opens an editor for the message; save it.
- If several commits in a row are bad, revert a range with git revert and the range from the last good commit to the latest, or revert them one at a time, newest first.
- Run the app and the build to confirm it works, then push.
If a revert hits a conflict, it means later commits touched the same lines. Git marks the conflicting files. Fix them, stage them with git add, and run git revert with the continue option. If it gets confusing, git revert with the abort option puts everything back as it was.
## What is the difference between git revert and git reset?
git revert adds a new commit that undoes an old one and keeps history, while git reset moves the branch back in time and drops the commits after that point from the branch.
### git revert
Best for: anything already pushed to GitHub, anything synced with Lovable, and any branch someone else uses.
Pros: safe, keeps a record of what happened, and works on any commit, not just the latest.
Cons: history gets an extra commit, which is a small price.
### git reset
Best for: local commits you have not pushed yet, when you want them gone as if they never happened.
There are three modes worth knowing:
- Soft: moves the branch back but keeps the changes staged, ready to recommit.
- Mixed (the default): moves the branch back and keeps the changes as unstaged edits.
- Hard: moves the branch back and throws the changes away entirely.
Cons: reset rewrites history. If you reset a branch that is already on GitHub and then force push, anyone or anything that pulled the old history, including Lovable's sync, now disagrees with the remote. That is how work gets lost.
Atlassian's git tutorial on resetting, checking out and reverting has clear diagrams of both if you want to see what each command does to the commit graph.
> Before any reset with the hard option, create a branch at your current position with git branch and a name like before-reset. If the reset goes wrong, that branch still points to your work.
## How do I undo changes in Lovable without git?
Open the History panel, preview the version you want, and choose Revert; Lovable restores the code from that version and redeploys edge functions to match.
According to Lovable's docs at the time of writing, every change creates a version automatically. Click the History toggle in the top bar, or choose Project, then History, from the menu next to the chat input. Clicking a version opens a read-only snapshot, and View code changes shows the diff. Revert, with the tooltip Revert to this version, restores it after a confirmation.
Useful details:
- Chat history is kept, so you can reapply the good parts of later prompts.
- To try a different direction, edit a past message and choose Revert and resend.
- Bookmark versions that work, so they are easy to find later.
- Revert is all or nothing per version, and credits spent are not refunded.
- Very old versions can show the message "Cannot revert this far back in history."
The most important line in those docs: reverting does not touch database data. It restores code only, and data changes made after that version remain, including data changed by migrations. If a prompt ran a destructive migration, reverting the code will not bring the data back. That is a backup question, covered in "How to back up your Supabase or Firebase database (and test the restore)."
## How do I restore an earlier version in Bolt?
Click the clock icon to open Version history, select a version to preview it, then choose Restore this version and confirm.
Bolt's help center describes a few routes at the time of writing:
- Version history: the clock-icon button opens it. Select a version, click Restore this version, and confirm with Restore version. On mobile, tap the project name, then Versions.
- Chat history: scroll up to the version, click the eye icon to preview, then the return arrow icon and Restore version.
- Download: click the project title, then Download, to get a zipped copy as your own backup.
- GitHub: if the project is connected, versioning lives in the repository, and you can import a repo state as a new Bolt project.
You can rename versions with the pencil icon and bookmark them. As with Lovable, Bolt says restoring a project version does not change your current Bolt or Supabase databases.
## Why should I commit before every AI prompt?
Because a commit is a free checkpoint, and the cost of not having one is rebuilding from memory.
Builder history is good, but it lives inside one tool. Git history lives in your repository on GitHub, where any developer, editor or AI tool can use it. When I work with an AI assistant in an editor, my habit is simple:
- Commit when the app works, with a message saying what works.
- Prompt.
- Review the diff before accepting anything. If the change touched files you did not ask about, be suspicious.
- If it is good, commit it. If not, discard it with git restore on the changed files, or a reset to the last commit if nothing was committed yet.
Small commits make undoing precise. A commit that says "add discount field to checkout" can be reverted cleanly. A commit that says "lots of fixes" mixes good and bad, and reverting it throws away both.
## How do branches make AI changes safer?
A branch lets you try a risky change in isolation and merge it only after it works, so the main branch, and the live app, never see the broken version.
In plain git: create a branch with git switch and the create option, do the AI work there, test it, then merge into main. If it fails, switch back to main and delete the branch. Nothing on main changed.
Lovable supports this too. Its GitHub docs say Lovable edits and syncs one branch at a time, and you can switch or create branches from the branch picker in the project's GitHub settings. New branches fork from the currently active branch, so switch to main first if that is where you want to start. Commits on other branches do not sync into Lovable until merged into the synced branch.
For a bigger change like an admin dashboard (see "How to add an admin dashboard to a Lovable app safely") or a payment flow, I always use a branch and a preview deploy. Vercel builds a preview URL for each branch automatically, so you can click through the change before it reaches customers.
## What can go wrong with GitHub sync?
The main risks are force pushes that diverge the synced branch, missed sync notifications, and deleting or moving the repository.
From Lovable's GitHub docs at the time of writing:
- If the synced branch diverges, Lovable pushes its changes to a branch called lovable-sync instead. The next sync from GitHub replaces Lovable's version with the GitHub version, so Lovable-only edits can be lost. Lovable saves a backup first, which the owner can restore from the notice in the editor or from Project settings, then Git.
- If GitHub's notification is missed, the sync status shows GitHub as ahead. Pushing a new commit, even an empty one, makes Lovable sync the current state.
- If the synced branch is deleted, the project switches to a branch called lovable-fallback.
- Deleting the repository breaks the connection, and transferring the project to another workspace breaks it too.
- GitHub rejects files over 100 MB, which can stop sync.
The rule that avoids most of this: never force push to the synced branch. Use git revert on it instead. If you need to rewrite history, do it on a separate branch and merge.
## What is a realistic recovery plan for an AI-built app?
Keep code history in GitHub, keep data history in backups, and know which one each problem needs.
As an illustration, picture a made-up tutoring marketplace built in Lovable with Supabase. A prompt meant to "clean up the sessions table" rewrites the booking page and runs a migration that drops a notes column. Recovery has two separate parts:
- Code: open History, preview the version before the prompt, and revert. Or, in GitHub, git revert the commits from that prompt and push. The booking page is back within minutes.
- Data: the notes column is gone in the database regardless of the code revert. On Supabase Pro, restore last night's backup into a new project and copy the notes back, or restore in place if losing today's other changes is acceptable. On the Free plan with no dump, the notes are lost.
Most founders only plan for the first part. The second part is why a nightly dump and a manual backup before any migration are worth more than any undo button.
## The bottom line
To undo broken AI changes, use the builder's version history for quick rollbacks, git revert for anything already pushed or synced, and git reset only for local commits nobody else has. Commit before each prompt, try risky changes on a branch, and never force push to the branch Lovable syncs with. Remember that every undo button covers code, not data.
If an AI change has left your app in a state you cannot unwind, my Quick Fix starts at $60 for one broken change, and Fix Plus Features starts at $200 for up to three fixes plus one small feature. "Fix or rebuild your AI-built app? How to decide before you spend more" helps if the damage runs deeper.`,
  },
];
