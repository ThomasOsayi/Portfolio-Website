// Articles added Nov 17 2026 (batch of 12). Same body format as seo.ts:
// "## " heading, "- " bullet, anything else is a paragraph. Prices come only from the packages in seo.ts.
import type { Post } from './seo';

export const morePosts: Post[] = [
  {
    slug: 'how-much-does-a-small-business-website-cost',
    title: 'How much does a small business website cost in 2026?',
    description: 'What a small business website really costs with a DIY builder, a freelance developer or an agency, plus the yearly costs people forget to budget for.',
    date: '2026-11-17',
    keywords: ['how much does a website cost', 'small business website cost', 'website design cost 2026', 'custom website price'],
    service: 'nextjs-website-development',
    shortAnswer: 'A custom small business website from a freelance developer usually costs a few hundred to a few thousand dollars, depending on pages and features. Thomas Osayi builds one-page sites from $150, five-page business sites from $450 and custom multi-page builds from $1,200.',
    faqs: [
      { q: 'What is the cheapest way to get a professional website?', a: 'A one-page site from a freelancer is usually the cheapest option that still looks custom; Thomas Osayi builds them from $150 in about 7 days.' },
      { q: 'Why do website quotes vary so much?', a: 'Quotes mostly scale with the number of unique page designs and with features like booking, ordering, payments or an admin panel.' },
      { q: 'Are there yearly costs after the website is built?', a: 'Yes: a domain name every year, hosting, and any paid tools you connect, such as a booking system or email marketing.' },
    ],
    body: `Website prices look random until you see what drives them. The two biggest factors are how many distinct pages need to be designed and which features the site has to run. Everything else is a smaller adjustment.
## What you get at each price level
A one-page site covers who you are, what you offer, proof and a contact form. That is enough for many new businesses, and it is the fastest to launch. A five-page business site adds separate service, about and contact pages plus local SEO setup and a booking or quote form. A custom build adds features with their own logic, such as online ordering, a quote management tool or an admin area where you edit content yourself.
- One-page site: from $150, about 7 days
- Business site, up to 5 pages: from $450, about 14 days
- Full custom build: from $1,200, about 21 days
## DIY builder vs freelancer vs agency
A DIY builder (Wix, Squarespace) has the lowest upfront cost but charges a monthly fee forever and limits custom features. A freelance developer costs more upfront, and you own a custom site with no platform lock-in. An agency adds project managers and designers, which helps on large projects and raises the price on small ones. For most small businesses, a freelancer with a portfolio in your category is the best value.
## Costs people forget
Budget for the domain renewal each year, hosting, paid integrations, professional photos and copywriting if you will not write the text yourself. Ask any developer which of these are included.
## How to get an honest number
Write down your pages, the one action you want visitors to take, and any feature that needs logic. A developer can price that in minutes. You can also get a range from the website cost calculator on this site before talking to anyone.`,
  },
  {
    slug: 'freelance-web-developer-vs-agency',
    title: 'Freelance web developer vs agency: which should a small business hire?',
    description: 'A side-by-side look at cost, speed, communication and risk when choosing between a freelance developer and a web agency.',
    date: '2026-11-17',
    keywords: ['freelance web developer vs agency', 'hire web developer or agency', 'freelancer vs agency website'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most small businesses get better value from a freelance developer: lower cost, faster turnaround and direct communication with the person writing the code. An agency makes more sense for large projects that need several specialists working at once.',
    faqs: [
      { q: 'Is a freelance developer cheaper than an agency?', a: 'Usually yes, because a freelancer has no account managers or office overhead built into the price.' },
      { q: 'What is the biggest risk of hiring a freelancer?', a: 'Depending on one person; reduce it by making sure the code lives in your own GitHub and hosting accounts.' },
      { q: 'When should I choose an agency?', a: 'When you need design, development, copywriting and marketing delivered together on a large project with a fixed launch date.' },
    ],
    body: `Both options can build a great website. The difference is in how the work is organized and what you pay for besides the code.
## Cost
A freelancer's price is mostly the build itself. An agency's price also covers project managers, sales staff and office overhead. On a five-page business site, that overhead can be a large share of the quote.
## Speed and communication
With a freelancer you talk directly to the person building the site, so a change request can be done the same day. With an agency, requests usually pass through an account manager first. That structure helps on big projects and slows down small ones.
## Range of skills
An agency can put a designer, a developer, a copywriter and an SEO specialist on your project at once. A freelancer covers fewer roles, so check that the person you hire can design as well as code if you need both.
## Risk and ownership
The main freelancer risk is that one person gets sick or busy. Protect yourself the same way with either option: the code goes in your GitHub, the site deploys from your hosting account, and the domain is registered in your name.
## Comparison
- Freelancer: best for sites up to a few dozen pages, MVPs and fixes; lower cost; direct contact; fewer roles
- Agency: best for large rebuilds and ongoing campaigns; higher cost; more process; many specialists
## How to choose
Look at the portfolio first. A freelancer who has already built a site for a business like yours will usually beat an agency that has not.`,
  },
  {
    slug: 'how-long-does-it-take-to-build-a-website',
    title: 'How long does it take to build a website?',
    description: 'Realistic timelines for one-page sites, business sites, custom builds and web apps, and the things that cause most delays.',
    date: '2026-11-17',
    keywords: ['how long to build a website', 'website development timeline', 'how long does a website take'],
    service: 'nextjs-website-development',
    shortAnswer: 'A one-page site takes about a week, a five-page business site about two weeks, and a custom multi-page build about three weeks. Web apps and SaaS MVPs take three to six weeks. Most delays come from waiting on content, not from development.',
    faqs: [
      { q: 'Can a website be built in a week?', a: 'Yes, a focused one-page site can launch in about 7 days once the copy and photos are ready.' },
      { q: 'What slows website projects down the most?', a: 'Missing content: text, photos, logins and decisions that the business owner has to provide.' },
      { q: 'How long does a SaaS MVP take?', a: 'Most SaaS MVPs ship in 3 to 6 weeks when the scope is limited to one core workflow.' },
    ],
    body: `Development time is the predictable part. The unpredictable part is how fast content and decisions arrive.
## Typical timelines
- One-page site: about 7 days
- Business site, up to 5 pages: about 14 days
- Full custom build with features: about 21 days
- SaaS MVP with auth, dashboard and payments: about 3 to 6 weeks
These assume the content is ready when the build starts.
## What happens in each phase
The first days go to structure and design: which pages exist, what each one must do and how it looks on a phone. Then comes the build, with a preview link you can click through as it grows. The last phase is content, SEO setup, testing on real devices and connecting your domain.
## What causes delays
Missing copy and photos are the most common cause. Next come late changes to the page list, slow access to accounts (domain registrar, Google Business Profile, payment provider) and feedback that arrives in pieces over several weeks.
## How to launch faster
Collect your logo, photos, service list and prices before kickoff. Give one person final say on decisions. Batch your feedback into one message per round. If something is not ready, launch without it and add it later; a live site that is 90 percent done beats a perfect one next month.
## Rush timelines
Rush work is possible. It costs more because other work gets moved, and it only helps if your content is ready to go.`,
  },
  {
    slug: 'nextjs-vs-webflow-vs-wix',
    title: 'Next.js vs Webflow vs Wix: which is right for your business site?',
    description: 'A comparison of three ways to build a business website by cost, speed, editing, SEO and flexibility, with a recommendation for each type of business.',
    date: '2026-11-17',
    keywords: ['Next.js vs Webflow', 'Webflow vs Wix', 'Next.js vs Wix', 'best website builder for small business'],
    service: 'nextjs-website-development',
    shortAnswer: 'Wix is best for a simple site you build yourself, Webflow for designers who want visual control without code, and Next.js for businesses that need custom features, top speed and full ownership of the code.',
    faqs: [
      { q: 'Is Webflow better than Wix?', a: 'Webflow gives far more design control and cleaner output; Wix is easier for a beginner building a simple site alone.' },
      { q: 'Why would a business choose Next.js over a website builder?', a: 'For custom features such as booking logic, quote tools or portals, faster pages, and code the business owns outright.' },
      { q: 'Can I switch from Wix to Next.js later?', a: 'Yes, but the site is rebuilt rather than exported, so it is easiest to switch when you are ready for a redesign anyway.' },
    ],
    body: `All three can produce a good-looking site. They differ in who does the work, what the site can do and what you pay each month.
## Wix
Wix is a drag-and-drop builder for people building their own site. Setup is fast and there is an app market for common features. The trade-offs are a monthly subscription for as long as the site exists, limited control over performance and markup, and no way to export the site if you leave.
## Webflow
Webflow is a visual design tool that outputs clean code and has a strong CMS for blogs and collections. It suits designers and marketing teams who want pixel control without writing code. It costs more than Wix, and features beyond its CMS usually need third-party tools.
## Next.js
Next.js is a code framework. A developer builds the site, and you can add anything: booking rules, quote calculators, client portals, payments. Pages are pre-built and very fast, and the code lives in your own repository. Editing needs a CMS or admin panel added by the developer.
## Side by side
- Wix: lowest effort, monthly fee, limited custom features, locked in
- Webflow: high design control, monthly fee, good CMS, partial lock-in
- Next.js: needs a developer, full custom features, fastest pages, you own the code
## Which to pick
Building it yourself with no budget for a developer: Wix. A design-led marketing site edited by a team: Webflow. A site that has to do real work for the business, or that may grow into an app: Next.js.`,
  },
  {
    slug: 'shopify-vs-custom-nextjs-store',
    title: 'Shopify vs a custom Next.js store: when does custom make sense?',
    description: 'When a brand should stay on a Shopify theme, when to go headless with Next.js, and what each option costs in time and money.',
    date: '2026-11-17',
    keywords: ['Shopify vs custom website', 'headless Shopify Next.js', 'custom ecommerce site', 'Shopify alternative'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most new online stores should start on a Shopify theme because checkout, payments and inventory work on day one. A custom Next.js storefront on top of Shopify makes sense once the brand needs a unique experience, faster pages or features a theme cannot handle.',
    faqs: [
      { q: 'What is headless Shopify?', a: 'Shopify keeps running products, checkout and orders, while a custom frontend such as Next.js shows the store to customers.' },
      { q: 'Is a custom storefront faster than a Shopify theme?', a: 'It can be, because the developer controls every script on the page instead of stacking theme apps.' },
      { q: 'Do I lose Shopify checkout if I go custom?', a: 'No. A headless storefront still sends customers to Shopify checkout.' },
    ],
    body: `Shopify is excellent at the hard parts of ecommerce: checkout, payments, taxes, inventory and order management. The question is not whether to use Shopify. It is whether the storefront your customers see should be a theme or custom code.
## When a Shopify theme is enough
If you are launching, have under a few hundred products and your brand fits a well-made theme, stay on a theme. You will launch in days and can spend your budget on product photos and marketing instead.
## When custom makes sense
- The theme plus apps has made the store slow on phones
- You need a feature no app does well, such as a product builder, a membership area or a creator program
- The brand needs a look and feel themes cannot match
- You want content pages, landing pages and the store in one fast site
## How headless works
The Next.js site reads products from Shopify through its API and shows them in a fully custom design. When a customer checks out, they go to Shopify's checkout. Orders, inventory and payouts stay in the Shopify admin you already know.
## Trade-offs
Custom costs more to build and needs a developer for design changes. Some theme apps will not work on a custom storefront and need a replacement. In exchange you get speed, control and features built around your business.
## A middle path
Many brands keep the theme for the store and add custom Next.js tools beside it, such as a creator portal or a wholesale order form, connected to the same Shopify data. That is how I built tools for TheHoopGang and SQWAD.`,
  },
  {
    slug: 'firebase-vs-supabase-for-mvp',
    title: 'Firebase vs Supabase for your MVP: how to choose',
    description: 'A founder-friendly comparison of Firebase and Supabase for an MVP: data model, auth, security rules, realtime, pricing behavior and lock-in.',
    date: '2026-11-17',
    keywords: ['Firebase vs Supabase', 'best backend for MVP', 'Supabase or Firebase for startup', 'MVP database choice'],
    service: 'saas-mvp-development',
    shortAnswer: 'Choose Firebase when your data is document-shaped, you want realtime updates and the fastest start. Choose Supabase when your data is relational, you need SQL reporting, or you want a standard Postgres database you can move later.',
    faqs: [
      { q: 'Is Supabase a Firebase alternative?', a: 'Yes. Both provide auth, a database, storage and serverless functions; Supabase is built on Postgres while Firestore is a NoSQL document database.' },
      { q: 'Which is easier to secure?', a: 'Both need explicit rules: Firestore security rules in Firebase and row level security policies in Supabase. Leaving either open is the most common MVP security bug.' },
      { q: 'Can I switch later?', a: 'Moving from Supabase is easier because it is standard Postgres; moving off Firestore means reshaping documents into tables.' },
    ],
    body: `Both are good choices, and the wrong one rarely kills a startup. The right one saves weeks.
## Data model
Firebase's Firestore stores documents in collections. It shines when each screen reads one document or a simple list. Supabase is Postgres, a relational database with tables, joins and SQL. If your product has many entities pointing at each other and you will want reports across them, Postgres fits better.
## Auth and security
Both include auth with email, magic links and social logins. Both also need security rules written by hand. In Firebase that means Firestore security rules; in Supabase it means row level security policies on each table. AI app builders often leave these open, so check them before launch.
## Realtime
Firestore listeners make live dashboards and chat simple. Supabase has realtime too, but Firebase's version is more mature for apps where many screens update live.
## Cost behavior
Firestore bills per read and write, so a page that reads thousands of documents on every visit can get expensive. Supabase bills mostly by database size and compute, which is easier to predict for read-heavy apps.
## Lock-in
Supabase is standard Postgres, so you can move the database almost anywhere. Firestore is proprietary.
## What I use
I built SQWAD on Firebase because creator portals need realtime updates, and TheHoopGang's portal on Postgres because its data is relational. Pick by the shape of your data, not by which is trending.`,
  },
  {
    slug: 'how-much-does-a-saas-mvp-cost',
    title: 'How much does it cost to build a SaaS MVP?',
    description: 'What drives the cost of a SaaS MVP, what to include in version one, and real package prices from a developer who built his own SaaS.',
    date: '2026-11-17',
    keywords: ['SaaS MVP cost', 'how much to build an MVP', 'MVP development price', 'cost to build a web app'],
    service: 'saas-mvp-development',
    shortAnswer: 'A SaaS MVP with auth, a dashboard, a database and payments typically costs from about $1,200 with a freelance developer, and a multi-role platform with admin tools from about $3,000. The biggest cost driver is how many workflows version one includes.',
    faqs: [
      { q: 'What should a SaaS MVP include?', a: 'One core workflow done well, plus sign-up, login, billing and the minimum admin you need to support the first customers.' },
      { q: 'Why do MVP quotes vary so much?', a: 'Every extra user role, integration and workflow adds design, logic and testing, so scope drives price more than anything else.' },
      { q: 'Can I start smaller than an MVP?', a: 'Yes. A clickable working version of one workflow, from about $250, is enough to test the idea with real users.' },
    ],
    body: `MVP pricing is mostly a scoping question. The same idea can cost three times as much depending on how much goes into version one.
## Price levels
- MVP Starter, one working workflow: from $250, about 7 days
- SaaS MVP with auth, dashboard, database and payments: from $1,200, about 21 days
- Full SaaS platform with multiple roles, admin tools and integrations: from $3,000, about 45 days
## What drives the cost
User roles are the first multiplier: every role needs its own screens and permissions. Integrations come next, such as Stripe, Shopify, Meta or an email provider, because each one needs setup, error handling and testing. Then custom logic: matching, scoring, scheduling or attribution rules.
## What to cut from version one
Cut team accounts, complex settings, a native mobile app, multiple pricing tiers and anything a customer has not asked for yet. Keep sign-up, the one workflow people pay for, billing, and a basic admin view so you can help customers.
## Building it in stages
Start with the workflow, put it in front of five real users, then add billing and polish. When I built SQWAD, the first version did one thing: let a brand see which creator drove a sale. Everything else came later.
## Hidden costs
Plan for hosting, email sending, a domain, and paid tiers of tools as usage grows. Most are small at MVP scale, but they add up, so list them before launch.`,
  },
  {
    slug: 'supabase-row-level-security-ai-built-app',
    title: 'Is your Lovable or Bolt app leaking data? Check Supabase row level security',
    description: 'How to check whether your AI-built Supabase app exposes other users\' data, what row level security does, and how to fix it before launch.',
    date: '2026-11-17',
    keywords: ['Supabase row level security', 'Lovable app security', 'Supabase RLS not working', 'AI built app data leak'],
    service: 'fix-ai-built-app',
    shortAnswer: 'If row level security is off on a Supabase table, anyone with your public anon key can read every row in it. Check that RLS is enabled on every table and that each policy limits rows to the signed-in user, for example with auth.uid() = user_id.',
    faqs: [
      { q: 'Is the Supabase anon key a secret?', a: 'No. It is meant to be public, which is exactly why row level security has to protect every table.' },
      { q: 'How do I know if RLS is enabled?', a: 'In the Supabase dashboard, each table shows whether RLS is enabled, and the Security Advisor flags tables without it.' },
      { q: 'Does turning on RLS break my app?', a: 'It blocks all access until you add policies, so add policies for each action your app needs, then test while signed in as different users.' },
    ],
    body: `AI builders connect apps to Supabase quickly. They do not always lock the data down, and the app looks fine because you only ever test it as yourself.
## Why this happens
A Supabase frontend talks to the database with the public anon key. That key is in your JavaScript bundle by design. The only thing stopping a stranger from querying every table with it is row level security, a set of policies on each table that decide which rows a request may see or change.
## How to check in five minutes
- Open the Table Editor and confirm RLS is enabled on every table in the public schema
- Open each table's policies and read them; "true" as a condition means everyone
- Run the Security Advisor in the dashboard and fix what it lists
- Sign in as a second test user and try to load the first user's records
## What good policies look like
Most tables need a rule that ties each row to its owner, such as a select policy with auth.uid() = user_id. Inserts should set user_id from the session, not from the request body. Admin actions belong in server code using the service role key, which must never ship to the browser.
## Other leaks to look for
Storage buckets marked public that hold private files, edge functions that skip auth checks, and the service role key pasted into frontend code by a prompt.
## If you are not sure
Security is the one area where I would not keep prompting and hoping. A developer can read the policies directly and fix them in a few hours.`,
  },
  {
    slug: 'stripe-webhook-not-working',
    title: 'Stripe payment went through but your app did not update? Fix the webhook',
    description: 'The common reasons Stripe webhooks fail in Next.js and AI-built apps, and how to make paid plans activate reliably.',
    date: '2026-11-17',
    keywords: ['Stripe webhook not working', 'Stripe payment not updating app', 'Stripe webhook Next.js', 'Stripe signature verification failed'],
    service: 'fix-ai-built-app',
    shortAnswer: 'When Stripe charges the card but the app never unlocks the plan, the webhook is the problem: it is missing in production, points at the wrong URL, uses the test-mode signing secret, or fails signature verification because the body was parsed before checking it.',
    faqs: [
      { q: 'Why does my Stripe webhook work locally but not in production?', a: 'Locally the Stripe CLI forwards events with its own signing secret; production needs a separate endpoint in the Stripe dashboard and its own secret in your host settings.' },
      { q: 'What does "No signatures found matching the expected signature" mean?', a: 'The webhook secret is wrong, or the request body was changed before verification; Stripe needs the raw body.' },
      { q: 'Should I unlock the plan on the success page instead?', a: 'No. The success page can be skipped or closed; the webhook is the reliable record that payment happened.' },
    ],
    body: `This is one of the most common problems in apps people bring me. Checkout opens, the card is charged, Stripe shows the payment, and the user is still on the free plan.
## How it is supposed to work
Stripe sends an event, such as checkout.session.completed or invoice.paid, to a webhook endpoint on your server. Your code verifies the event really came from Stripe, then updates the user's plan in your database.
## The usual causes
- No webhook endpoint was ever created in the Stripe dashboard for production
- The endpoint URL points at localhost or an old preview deployment
- The production server uses the test-mode signing secret, or the other way around
- The route parses the JSON body before verification, so the signature check fails
- The handler listens for the wrong event type
- The code cannot match the event to a user because no customer or user ID was stored at checkout
## How to fix it
In the Stripe dashboard, open the webhook endpoint and read the recent deliveries; failed attempts show the status code and response. In a Next.js route handler, read the raw text of the request and pass it to Stripe's verification with the endpoint's signing secret. Put the user ID in the checkout session metadata or client reference ID so the handler knows who paid.
## Make it reliable
Return a 200 quickly, handle the same event arriving twice, and log failures. Then test the full flow in test mode with a test card before switching to live keys.`,
  },
  {
    slug: 'what-to-send-a-web-developer-before-starting',
    title: 'What to send a web developer before your project starts',
    description: 'A checklist of the content, access and decisions a developer needs from you, so your website launches on time and on budget.',
    date: '2026-11-17',
    keywords: ['website project checklist', 'what to give web developer', 'website brief template', 'website content checklist'],
    service: 'nextjs-website-development',
    shortAnswer: 'Before a website project starts, send your developer the goal of the site, a page list, your logo and brand colors, photos, written copy or notes for each page, two or three sites you like, and access to your domain registrar. Having these ready can cut weeks off the timeline.',
    faqs: [
      { q: 'Do I need to write all the website text myself?', a: 'Not always; rough notes per page are enough for a developer or copywriter to shape, but the facts about your business have to come from you.' },
      { q: 'Why does a developer need my domain login?', a: 'To point the domain at the new site at launch; you can also make the DNS change yourself with their instructions.' },
      { q: 'What if I do not have photos?', a: 'Use a clean typographic design or carefully chosen stock photos at launch, then replace them with real photos later.' },
    ],
    body: `Most website delays happen before any code is written. This checklist is what I ask every client for, in order of importance.
## 1. The goal
One sentence: what should a visitor do? Book a call, request a quote, order pickup, buy a product. Every page decision follows from this.
## 2. The page list
List the pages you need and one line on what each must say. For most small businesses: home, services, about, contact, and maybe pricing or a gallery.
## 3. Brand assets
Your logo in the best format you have (SVG or a large PNG), brand colors if they exist, and any fonts you already use. If you have no brand yet, say so; that is fine.
## 4. Copy and facts
Your services, prices if you publish them, hours, address, service area, and a short story about the business. Rough notes are fine. Real details beat polished generic text every time.
## 5. Photos
Your best photos of the work, the space, the team or the product, at full resolution. Phone photos taken in good daylight are often enough.
## 6. Sites you like
Two or three websites you like, and what you like about each. These do not need to be in your industry.
## 7. Access
Your domain registrar login or someone who can change DNS, your Google Business Profile, and any tool the site connects to: booking, payments, email marketing.
## 8. One decision maker
Name the person who gives final approval, and batch feedback into one message per round.`,
  },
  {
    slug: 'local-seo-checklist-for-small-business-websites',
    title: 'Local SEO checklist for a small business website',
    description: 'The on-site and off-site steps that help a local business show up in Google Maps and local search, in order of impact.',
    date: '2026-11-17',
    keywords: ['local SEO checklist', 'small business local SEO', 'rank in Google Maps', 'local SEO website'],
    service: 'nextjs-website-development',
    shortAnswer: 'For local search, the highest-impact steps are a complete and verified Google Business Profile, steady real reviews, the same name, address and phone number everywhere, a fast website with a clear page per service and area, and LocalBusiness schema on the site.',
    faqs: [
      { q: 'What matters most for ranking in Google Maps?', a: 'Google says local results are based mainly on relevance, distance and prominence, so a complete profile, real reviews and a strong website all count.' },
      { q: 'Should I make a page for every city?', a: 'Only for areas you really serve and can write something specific about; near-duplicate city pages can hurt more than help.' },
      { q: 'How long does local SEO take?', a: 'Profile and site fixes can show results within weeks, while reviews and mentions build over months.' },
    ],
    body: `Local SEO has two halves: your Google Business Profile and your website. Both matter, and the profile usually matters more for Maps.
## Google Business Profile
Claim and verify the profile, pick the most specific primary category, add every service, real photos and accurate hours. Post updates occasionally and answer questions. Google states that local ranking is based mainly on relevance, distance and prominence, and a complete profile helps with all three.
## Reviews
Ask every happy customer for a review, make it easy with a direct link, and reply to every review, good or bad. Never buy reviews or offer incentives; that breaks Google's policies.
## Consistent business details
Your name, address and phone number should match exactly on the website, the profile, Yelp, Apple Maps, Bing Places and industry directories. Mismatches confuse search engines and customers.
## The website
- One page per main service, with the city or area named naturally
- Address, phone and hours on every page, usually in the footer
- LocalBusiness schema markup with the same details
- Fast loading on phones and tap-to-call buttons
- An embedded map on the contact page
## Content that earns trust
Photos of real jobs, short case studies, and answers to the questions customers actually ask on the phone. These pages bring in long-tail searches and give AI search tools something specific to quote.
## Mentions
Local news, chambers of commerce, suppliers and partner businesses linking to you all add prominence.`,
  },
  {
    slug: 'website-maintenance-cost-small-business',
    title: 'What does website maintenance cost, and what does it include?',
    description: 'The real ongoing costs of a small business website: domain, hosting, updates, fixes and content changes, and how to keep them low.',
    date: '2026-11-17',
    keywords: ['website maintenance cost', 'small business website monthly cost', 'website hosting cost', 'website upkeep'],
    service: 'nextjs-website-development',
    shortAnswer: 'A small business website\'s ongoing costs are a yearly domain renewal, hosting, any paid tools it connects to, and developer time for changes. Sites without plugins, such as a custom Next.js site, need far less maintenance than a plugin-heavy WordPress site.',
    faqs: [
      { q: 'Do I need a monthly maintenance plan?', a: 'Not always; a static or framework site with no plugins can go months without changes, so paying per change is often cheaper.' },
      { q: 'What happens if a website is never maintained?', a: 'Plugin-based sites become a security risk as updates pile up, and any site slowly drifts out of date in content and prices.' },
      { q: 'Can I make small text changes myself?', a: 'Yes, if the site includes a simple CMS or admin page for the content you change most often.' },
    ],
    body: `Maintenance costs depend far more on how a site is built than on how big it is.
## The fixed costs
- Domain name, renewed every year
- Hosting, which ranges from free hobby tiers to monthly business plans
- Business email, if you use your own domain
- Paid tools connected to the site, such as booking, forms or email marketing
Check whether your hosting plan allows commercial use; some free tiers do not.
## The variable cost: changes
New services, new prices, a new photo gallery, a seasonal banner. These take a developer minutes to hours. Many small businesses only need a handful of changes a year, so paying per change beats a monthly retainer.
## Why WordPress costs more to maintain
WordPress core, themes and plugins need regular updates, and outdated plugins are a common way small business sites get hacked. That is why many WordPress hosts sell maintenance plans. A custom Next.js site has no plugins to patch, so the main ongoing work is content.
## Keep costs low
- Put the content you change most (menu, prices, hours) in a simple editor
- Avoid features you will not use
- Keep all accounts in your own name so you are never locked in
- Fix small issues when they appear instead of saving them for a rebuild
## When to rebuild instead
If every change is a struggle, the site is slow on phones, or it no longer matches what the business does, a rebuild often costs less than years of patching.`,
  },
];
