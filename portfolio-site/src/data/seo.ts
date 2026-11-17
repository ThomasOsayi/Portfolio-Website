// Search-facing pages: services, case studies and articles.
// Body text uses a tiny format: a line starting with "## " is a heading, "- " is a bullet, anything else is a paragraph.

export const SITE = 'https://thomasosayi.com';

export interface Service {
  slug: string;
  title: string; // H1
  metaTitle: string;
  description: string;
  keywords: string[];
  intro: string;
  includes: string[];
  packages: { name: string; price: string; days: string; text: string }[];
  related: string[]; // case study slugs
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'nextjs-website-development',
    title: 'Custom Next.js websites for businesses',
    metaTitle: 'Next.js Website Developer in Los Angeles | Thomas Osayi',
    description:
      'Custom Next.js websites for small businesses, clinics, restaurants and startups. Fast, SEO-ready, built from scratch with booking, ordering or quote tools. Based in Los Angeles.',
    keywords: ['Next.js developer Los Angeles', 'custom website developer', 'small business website', 'Next.js website', 'web developer LA'],
    intro:
      'I design and build websites from scratch in Next.js, not from a template. Each one loads fast, ranks on Google, and does a real job for the business: taking reservations, booking appointments, collecting quotes or selling a product.',
    includes: [
      'Custom design based on your brand and the best sites in your category',
      'Next.js and TypeScript, deployed on Vercel',
      'Technical SEO: metadata, sitemap, schema markup, fast Core Web Vitals',
      'Booking, reservation, ordering or quote forms with email notifications',
      'Mobile-first layout tested on real phones',
      'Analytics and a simple way to update copy later',
    ],
    packages: [
      { name: 'Starter Site', price: 'from $150', days: '7 days', text: 'A polished one-page site with contact form and SEO basics.' },
      { name: 'Business Site', price: 'from $450', days: '14 days', text: 'Up to 5 pages, booking or quote form, local SEO setup.' },
      { name: 'Full Custom Build', price: 'from $1,200', days: '21 days', text: 'Multi-page site with custom features, CMS or admin tools.' },
    ],
    related: ['vencare', 'new-york-nook', 'artistic-printing', 'astiglow'],
    faqs: [
      { q: 'Why Next.js instead of WordPress or Wix?', a: 'Next.js sites are faster, more secure and fully custom. Speed is a Google ranking factor, and there are no plugins to update or break.' },
      { q: 'Can I edit the site myself?', a: 'Yes. Copy lives in one place, and on larger builds I add a simple admin or CMS so you can change text and photos without code.' },
      { q: 'Do you handle domains and hosting?', a: 'I deploy on Vercel and connect your domain. Hosting is free or close to it for most small business sites.' },
      { q: 'Do you work with businesses outside Los Angeles?', a: 'Yes. I am based in LA and work with clients anywhere over video calls.' },
    ],
  },
  {
    slug: 'fix-ai-built-app',
    title: 'Fix, finish and launch your AI-built app',
    metaTitle: 'Fix Your AI-Built or Vibe-Coded App | Lovable, Bolt, Cursor Developer',
    description:
      'Built your app with Lovable, Bolt, v0, Replit or Cursor and got stuck? I fix the bugs, connect auth and payments, clean up the code and deploy it to production.',
    keywords: ['fix AI generated app', 'vibe coding developer', 'Lovable developer', 'Bolt app fix', 'finish my app', 'deploy Next.js app'],
    intro:
      'AI builders get you 80 percent of the way. The last 20 percent is where apps break: auth that leaks data, payments that never fire, builds that fail on deploy. I take over the code you have, fix what is broken and ship it.',
    includes: [
      'Debugging build errors, broken routes and runtime crashes',
      'Firebase or Supabase auth, security rules and database fixes',
      'Stripe checkout, subscriptions and webhooks',
      'Cleaning up duplicated or tangled AI-generated code',
      'Deploying to Vercel with a custom domain',
      'A short write-up of what was wrong and what changed',
    ],
    packages: [
      { name: 'Quick Fix', price: 'from $60', days: '2 days', text: 'One bug or error fixed and explained.' },
      { name: 'Fix Plus Features', price: 'from $200', days: '5 days', text: 'Several fixes plus a feature or integration added.' },
      { name: 'Finish and Launch', price: 'from $600', days: '10 days', text: 'Take the app from stuck to live in production.' },
    ],
    related: ['sqwad', 'guardian-mindcare', 'thehoopgang'],
    faqs: [
      { q: 'Which tools do you work with?', a: 'Code from Lovable, Bolt, v0, Replit, Cursor, Windsurf and Claude, usually React or Next.js with Firebase or Supabase.' },
      { q: 'Do I need to give you my whole codebase?', a: 'Access to the repo (GitHub is easiest) and the hosting or database project is enough.' },
      { q: 'Will you rewrite everything?', a: 'No. I keep what works and fix what does not. A rewrite only comes up if it is truly cheaper for you.' },
      { q: 'Can you keep maintaining it after launch?', a: 'Yes, ongoing fixes and features are available after the first project.' },
    ],
  },
  {
    slug: 'saas-mvp-development',
    title: 'SaaS MVP and full-stack web app development',
    metaTitle: 'SaaS MVP Developer | Next.js + Firebase Web Apps | Thomas Osayi',
    description:
      'I build SaaS MVPs and full-stack web apps in Next.js, TypeScript and Firebase or Postgres: auth, dashboards, payments, roles and admin tools. Founder of SQWAD.',
    keywords: ['SaaS MVP developer', 'full stack web app developer', 'Next.js Firebase developer', 'build SaaS MVP', 'startup MVP development'],
    intro:
      'I founded and built SQWAD, a SaaS platform brands use to run creator programs, so I build MVPs the way a founder would: the smallest product that real customers will pay for, on a stack that will not need replacing when it grows.',
    includes: [
      'Product scoping: the core workflow first, everything else later',
      'Next.js, TypeScript, Firebase or Postgres with Prisma',
      'Auth, roles and permissions, multi-tenant data',
      'Dashboards, admin panels and email notifications',
      'Stripe billing and subscriptions',
      'Production deploy, monitoring and handover docs',
    ],
    packages: [
      { name: 'MVP Starter', price: 'from $250', days: '7 days', text: 'A clickable, working first version of one core workflow.' },
      { name: 'SaaS MVP', price: 'from $1,200', days: '21 days', text: 'Auth, dashboard, database and payments for a launchable MVP.' },
      { name: 'Full SaaS Platform', price: 'from $3,000', days: '45 days', text: 'Multi-role platform with admin tools and integrations.' },
    ],
    related: ['sqwad', 'thehoopgang', 'guardian-mindcare'],
    faqs: [
      { q: 'How long does an MVP take?', a: 'Most MVPs ship in 3 to 6 weeks depending on scope. We agree on the core workflow first so the timeline stays honest.' },
      { q: 'Who owns the code?', a: 'You do. Everything lives in your GitHub and your cloud accounts.' },
      { q: 'Firebase or Postgres?', a: 'Firebase for speed and realtime features, Postgres when the data is relational or reporting-heavy. I will recommend one based on your product.' },
      { q: 'Can you help with product decisions?', a: 'Yes. As a founder I can push back on scope and help you decide what to build first.' },
    ],
  },
];

export interface CaseStudy {
  slug: string;
  name: string;
  kind: string;
  metaTitle: string;
  description: string;
  image: string;
  url?: string;
  stack: string[];
  service: string; // service slug
  body: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sqwad',
    name: 'SQWAD',
    kind: 'SaaS platform · Founder',
    metaTitle: 'SQWAD Case Study: Building a Creator Program SaaS',
    description: 'How I designed and built SQWAD, a SaaS platform Shopify brands use to run UGC creator programs, from applications to payouts.',
    image: '/work/fiverr/sqwad.jpg',
    url: 'https://joinsqwad.com',
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Stripe', 'Meta Ads API', 'Shopify'],
    service: 'saas-mvp-development',
    body: `## The problem
Brands that pay creators for content rarely know which creator actually drove a sale. Programs run on spreadsheets, DMs and guesswork.
## What I built
SQWAD gives each brand a branded portal where creators apply, receive product, submit content, join competitions and get paid. Every Meta ad is traced back to the creator whose content made the sale.
- Creator applications and approval flow
- Product shipping and content tracking
- Competitions and leaderboards
- Payouts and attribution reporting
## Result
SQWAD now tracks more than $500K in creator-driven sales for the brands on the platform.`,
  },
  {
    slug: 'guardian-mindcare',
    name: 'Guardian MindCare',
    kind: 'Healthcare platform',
    metaTitle: 'Guardian MindCare Case Study: Therapy Practice Platform',
    description: 'A therapy practice platform that matches clients with in-network therapists, with role-based portals for therapists, supervisors, trainees, clients and admins.',
    image: '/work/fiverr/guardian.jpg',
    url: 'https://www.guardianmindcare.com',
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Role-based access'],
    service: 'saas-mvp-development',
    body: `## The problem
Clients struggle to find a therapist who takes their insurance, and practices juggle supervisors, associates and trainees across scattered tools.
## What I built
A public site with a therapist search by insurance, plus separate portals for each role in the practice.
- Insurance-aware therapist matching
- Portals for therapists, supervisors, trainees, clients and admins
- Permissions so each role sees only what it should
## Result
One platform runs both the client-facing search and the practice's internal workflow.`,
  },
  {
    slug: 'thehoopgang',
    name: 'TheHoopGang',
    kind: 'Creator portal',
    metaTitle: 'TheHoopGang Case Study: Creator Portal for a Streetwear Brand',
    description: 'A creator portal for a basketball streetwear brand that manages 50+ creators, tracks content and runs refundable gear gifting.',
    image: '/work/fiverr/hoopgang.jpg',
    url: 'https://thehoopgang.xyz',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Postgres'],
    service: 'saas-mvp-development',
    body: `## The problem
The brand was gifting gear to dozens of creators with no reliable way to track who posted, what they posted and whether the gift paid off.
## What I built
A portal where creators sign up, claim gear, submit their content and get refunded once they post.
- Creator onboarding and profiles
- Content submission and tracking
- Refundable gear gifting flow
## Result
The portal manages 50+ active creators in one place.`,
  },
  {
    slug: 'vencare',
    name: 'VenCare',
    kind: 'Health startup website',
    metaTitle: 'VenCare Case Study: Website for a Health Startup',
    description: 'Website for VenCare, a health startup placing wall-mounted epinephrine stations in venues, like an AED for allergic reactions.',
    image: '/work/fiverr/vencare.jpg',
    url: 'https://www.vencarehealth.com',
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    service: 'nextjs-website-development',
    body: `## The goal
Explain a new kind of medical device to venue operators and investors in seconds, and look credible doing it.
## What I built
A custom Next.js marketing site with a clear story, product sections and an inquiry flow for venues.
## Result
A fast, credible site the team uses in sales conversations and investor outreach.`,
  },
  {
    slug: 'new-york-nook',
    name: 'New York Nook',
    kind: 'Restaurant website',
    metaTitle: 'New York Nook Case Study: Restaurant Website with Reservations',
    description: 'Restaurant website for a Russian restaurant in Hollywood with reservations and pickup ordering.',
    image: '/work/fiverr/newyorknook.jpg',
    url: 'https://new-york-nook.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    service: 'nextjs-website-development',
    body: `## The goal
Give a Hollywood restaurant a site that feels like the room and turns visits into bookings and orders.
## What I built
- Full menu with photography
- Reservation requests
- Pickup ordering
## Result
Guests can see the menu, book a table or order pickup from their phone in under a minute.`,
  },
  {
    slug: 'artistic-printing',
    name: 'Artistic Printing',
    kind: 'Business website + quote tool',
    metaTitle: 'Artistic Printing Case Study: Website and Quote Management',
    description: 'Website and quote management tool for a commercial printer, with structured client intake.',
    image: '/work/fiverr/artistic.jpg',
    url: 'https://www.artisticprinting.com',
    stack: ['Next.js', 'TypeScript', 'Firebase'],
    service: 'nextjs-website-development',
    body: `## The goal
Replace back-and-forth emails with a clean way for clients to request print quotes.
## What I built
A modern site plus a quote intake and management tool so every request arrives with the specs the shop needs.
## Result
Quote requests come in structured and complete.`,
  },
  {
    slug: 'astiglow',
    name: 'Astiglow',
    kind: 'Studio website + booking',
    metaTitle: 'Astiglow Case Study: Waxing Studio Website with Online Booking',
    description: 'Website for a waxing studio with online booking and service packages.',
    image: '/work/fiverr/astiglow.jpg',
    url: 'https://asti-glow.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    service: 'nextjs-website-development',
    body: `## The goal
Let clients see services and prices and book without calling.
## What I built
A soft, on-brand site with a service menu, packages and online booking.
## Result
Booking moved online, freeing the studio from phone scheduling.`,
  },
];

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  keywords: string[];
  service?: string;
  body: string;
}

// Newest first. The SEO routine adds new entries at the top.
export const posts: Post[] = [
  {
    slug: 'fix-lovable-bolt-app-before-launch',
    title: 'Your Lovable or Bolt app works locally. Here is what breaks at launch.',
    description: 'The five problems I see most often when founders bring me an AI-built app that is almost ready, and how to fix each one before real users arrive.',
    date: '2026-11-16',
    keywords: ['fix Lovable app', 'Bolt app not working', 'vibe coded app production', 'AI generated app bugs'],
    service: 'fix-ai-built-app',
    body: `AI app builders are great at the first 80 percent. Most of the apps people send me look finished. They fall over on the details that only matter once real users and real money show up.
## 1. Auth that lets anyone read everything
The most common issue is a database with open security rules. The app checks if you are logged in, but the database does not check who you are. Anyone with the project ID can read every user's data. Fix: write Firebase security rules or Supabase row level security that tie every record to its owner.
## 2. Payments that never confirm
Stripe checkout opens, the card is charged, and nothing happens in the app. The webhook was never set up, or it points at localhost. Fix: a verified webhook endpoint in production that updates the user's plan.
## 3. Environment variables that only exist on your laptop
The build passes locally and fails on Vercel because keys live in a local file. Fix: move every secret into the hosting provider's environment settings and never ship them to the browser.
## 4. Duplicate components and dead code
Each prompt adds a new version of the same thing. Fix: consolidate to one component per job so the next change happens in one place.
## 5. No error handling
When an API call fails the page goes blank. Fix: loading and error states on every request, plus logging so you hear about problems before users do.
## When to get help
If you are stuck on any of these, I fix and launch AI-built apps as a fixed-price service.`,
  },
  {
    slug: 'nextjs-vs-wordpress-small-business',
    title: 'Next.js vs WordPress for a small business website in 2026',
    description: 'A plain comparison of speed, cost, SEO and maintenance for owners deciding how to build their next website.',
    date: '2026-11-16',
    keywords: ['Next.js vs WordPress', 'best website platform small business', 'custom website vs WordPress'],
    service: 'nextjs-website-development',
    body: `Most small business owners are told to use WordPress. It is a fine tool, but it is not the only choice, and for many businesses it is no longer the best one.
## Speed
A Next.js site is pre-built into fast static pages and served from a global network. A typical WordPress site runs PHP, a database and a stack of plugins on every visit. Page speed affects both Google rankings and how many visitors stay.
## Cost
WordPress itself is free, but premium themes, plugins and managed hosting add up every year. A Next.js site on Vercel usually costs nothing to host at small business traffic levels.
## Maintenance and security
WordPress needs regular core, theme and plugin updates, and outdated plugins are the most common way small business sites get hacked. A Next.js site has no plugins to patch.
## Editing
This is where WordPress wins: a built-in editor. A Next.js site can match it with a simple CMS or admin panel, which I add on larger builds.
## The short answer
If you want to change layouts yourself every week, WordPress is reasonable. If you want a fast, custom site that ranks well and does not need babysitting, Next.js is the better fit.`,
  },
];

export const serviceBySlug = (s: string) => services.find((x) => x.slug === s);
export const caseBySlug = (s: string) => caseStudies.find((x) => x.slug === s);
export const postBySlug = (s: string) => posts.find((x) => x.slug === s);
