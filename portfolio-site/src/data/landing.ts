// Industry pages (/websites-for/[slug]) and AI-tool fix pages (/fix/[slug]).
// Each one has to carry real, specific content: no name-swapped templates.

export interface Faq { q: string; a: string }

export interface Industry {
  slug: string;
  name: string; // "Restaurants"
  h1: string;
  metaTitle: string;
  description: string;
  intro: string;
  mustHaves: { title: string; text: string }[];
  mistakes: string[];
  related: string[]; // case study slugs
  service: string;
  packageHint: string;
  faqs: Faq[];
}

export const industries: Industry[] = [
  {
    slug: 'restaurants',
    name: 'Restaurants',
    h1: 'Restaurant websites that fill tables',
    metaTitle: 'Restaurant Website Design & Development in Los Angeles | Thomas Osayi',
    description: 'Custom restaurant websites with menus, reservations and pickup ordering. Fast on phones, easy to update, built in Next.js by a Los Angeles developer.',
    intro: 'Most people find a restaurant on their phone, standing on a sidewalk or deciding where to eat in the next twenty minutes. They want three things: the menu, the hours and a way to book or order. A restaurant site should get them there in one tap and look like the room they are about to walk into.',
    mustHaves: [
      { title: 'A real menu, not a PDF', text: 'Menus as text load instantly, read well on phones and get indexed by Google, so dishes show up when someone searches for them.' },
      { title: 'Reservations or a booking request', text: 'Either a link into your existing system (OpenTable, Resy, Tock) or a simple request form that emails you, with party size, date and time.' },
      { title: 'Pickup ordering', text: 'Direct ordering skips third-party app commissions on pickup orders. It can be a simple order form or a full cart with online payment.' },
      { title: 'Hours, address and map up top', text: 'The most searched details about any restaurant. They belong above the fold and in structured data so Google shows them correctly.' },
      { title: 'Photography that sells the food', text: 'Good photos do more than any copy. I build layouts that let your best shots carry the page.' },
    ],
    mistakes: [
      'Uploading the menu as a PDF or image that phones zoom badly and Google cannot read',
      'Hours on the website that do not match Google Business Profile',
      'A slow template full of scripts and auto-playing video on a phone connection',
      'Sending every pickup order through delivery apps that take a cut of each one',
    ],
    related: ['new-york-nook'],
    service: 'nextjs-website-development',
    packageHint: 'Most restaurant sites fit the Business Site package. Ordering with online payment moves it to a Full Custom Build.',
    faqs: [
      { q: 'Can you connect my existing reservation system?', a: 'Yes. If you already use OpenTable, Resy, Tock or similar, I link or embed it. If you do not, a simple request form that emails you works well for smaller rooms.' },
      { q: 'Can I update the menu myself?', a: 'Yes. The menu lives in one editable place, and on larger builds I add a small admin page so you can change items and prices without code.' },
      { q: 'Do you take the food photos?', a: 'I do not shoot photos, but I can work with yours, recommend a photographer, or use a clean typographic layout until new photos are ready.' },
    ],
  },
  {
    slug: 'therapy-practices',
    name: 'Therapy practices',
    h1: 'Websites for therapy practices and group practices',
    metaTitle: 'Therapy Practice Website Development | Insurance & Therapist Search | Thomas Osayi',
    description: 'Websites for therapy and group practices: therapist profiles, search by insurance and specialty, intake forms and client portals. Built by the developer of Guardian MindCare.',
    intro: 'A person looking for a therapist usually has two questions before anything else: will this person understand what I am dealing with, and do they take my insurance. A practice website that answers both fast turns visits into consultations. I built Guardian MindCare around exactly that.',
    mustHaves: [
      { title: 'Therapist profiles that feel human', text: 'Photo, approach, specialties, populations served and a short personal note. These pages are what clients actually read before reaching out.' },
      { title: 'Search by insurance and specialty', text: 'Filters for insurance plan, issue, language and session format let a client narrow a group practice down to two or three good fits.' },
      { title: 'A short, calm intake flow', text: 'Ask for only what you need to schedule a consultation. Clinical detail belongs in your EHR or intake system, not a website form.' },
      { title: 'Privacy by design', text: 'Minimal data collected on the website, secure handling for anything that is, and clear separation from clinical records.' },
      { title: 'Role-based portals for larger practices', text: 'Supervisors, associates, trainees and admins each see what they need. Guardian MindCare has portals for every role.' },
    ],
    mistakes: [
      'Hiding which insurance plans are accepted until the first phone call',
      'Generic stock photos instead of the actual clinicians',
      'Long intake forms on the website that collect clinical details it should not store',
      'No individual page per therapist, which also costs search visibility',
    ],
    related: ['guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'A solo practice usually fits the Business Site package. Group practices with search, filters or portals are a Full Custom Build or a SaaS project.',
    faqs: [
      { q: 'Is the website HIPAA compliant?', a: 'The safest approach is to keep protected health information out of the marketing site entirely and hand scheduling and intake off to a HIPAA-compliant system you already use. I design the site around that boundary.' },
      { q: 'Can clients filter therapists by insurance?', a: 'Yes. Each therapist record lists the plans they accept, and the search page filters on it, along with specialty and format.' },
      { q: 'Can it connect to my EHR or scheduling tool?', a: 'Usually by linking or embedding the booking widget your EHR provides. Deeper integrations depend on what the vendor allows.' },
    ],
  },
  {
    slug: 'medical-clinics',
    name: 'Medical clinics',
    h1: 'Websites for medical clinics and health startups',
    metaTitle: 'Medical Clinic & Healthcare Website Developer | Los Angeles | Thomas Osayi',
    description: 'Credible, fast websites for medical clinics, physician groups and health startups. Clear services, provider bios, appointment requests and local SEO.',
    intro: 'Healthcare is a trust purchase. Patients compare clinics on credibility, convenience and whether the office feels organized before they ever call. I have built sites for a physician-led medical group in the South Bay and a health startup putting epinephrine stations in venues, and both came down to the same thing: explain clearly, look credible, make the next step obvious.',
    mustHaves: [
      { title: 'Plain-language service pages', text: 'One page per service that explains what it is, who it is for, what to expect and how to book. These pages also rank for the searches patients make.' },
      { title: 'Provider bios with credentials', text: 'Board certifications, training and a real photo. Credentials are part of the decision.' },
      { title: 'Appointment requests that respect privacy', text: 'Collect contact details and a preferred time, not symptoms or history. Route the rest to your scheduling or EHR system.' },
      { title: 'Local SEO foundations', text: 'Medical clinic structured data, consistent name, address and phone, and location pages that match Google Business Profile.' },
      { title: 'Accessibility', text: 'Readable type, strong contrast and keyboard navigation. Many patients are older or browsing under stress.' },
    ],
    mistakes: [
      'Clinical jargon on service pages that patients do not search for',
      'Contact forms asking for symptoms or medical history',
      'Outdated provider lists and hours that do not match Google',
      'Pages that look like every other template, which reads as less established',
    ],
    related: ['vencare', 'guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'Most clinic sites fit the Business Site or Full Custom Build package depending on the number of services and providers.',
    faqs: [
      { q: 'Do you write the medical copy?', a: 'I write structure and plain-language drafts from your input, and your clinicians approve anything clinical before it goes live.' },
      { q: 'Can you add online booking?', a: 'Yes, by embedding or linking the scheduling tool you already use, or with a simple appointment request form.' },
      { q: 'Will it help us show up on Google Maps?', a: 'The site supports it with location data and structured markup, and I point you to the Google Business Profile steps that matter most.' },
    ],
  },
  {
    slug: 'salons-and-spas',
    name: 'Salons and spas',
    h1: 'Websites for salons, spas and beauty studios',
    metaTitle: 'Salon & Spa Website Design with Online Booking | Thomas Osayi',
    description: 'Beautiful websites for salons, spas, waxing and lash studios with service menus, packages and online booking. Built in Next.js, fast on phones.',
    intro: 'Beauty clients book on impulse and on their phones, often late at night. If your site makes them call during business hours, they book somewhere else. A studio site should show the services, show the prices, look like your space and take the booking right there.',
    mustHaves: [
      { title: 'Service menu with prices and duration', text: 'Clear prices remove the main reason people hesitate. Grouped by category, with add-ons and packages.' },
      { title: 'Online booking', text: 'Embedded from the system you already use (Square, Vagaro, Boulevard, Fresha and others) or a simple request flow.' },
      { title: 'Packages and memberships', text: 'Bundles and memberships raise the value of each client. They deserve their own section, not a footnote.' },
      { title: 'A look that matches your space', text: 'Soft, premium and specific to your brand, not a stock beauty template.' },
      { title: 'Prep and aftercare pages', text: 'Useful for clients, cuts down on repeat questions, and brings in search traffic.' },
    ],
    mistakes: [
      'Prices only available by calling or messaging',
      'Booking that opens a slow third-party page with no branding',
      'Instagram embeds that slow the page to a crawl',
      'No information for first-time clients about what to expect',
    ],
    related: ['astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'Most studios fit the Starter Site or Business Site package.',
    faqs: [
      { q: 'Can you use my current booking software?', a: 'Yes. I embed or link it so clients book without leaving the experience you designed.' },
      { q: 'Can I change prices myself?', a: 'Yes. Services and prices live in one editable place.' },
      { q: 'Can you show my Instagram work?', a: 'Yes, as a fast gallery of selected photos instead of a heavy live feed.' },
    ],
  },
  {
    slug: 'startups',
    name: 'Startups',
    h1: 'Websites and MVPs for early-stage startups',
    metaTitle: 'Startup Website & MVP Developer | Next.js | Thomas Osayi',
    description: 'Landing pages, marketing sites and MVPs for early-stage startups. Built fast in Next.js by a developer who founded his own SaaS.',
    intro: 'Early-stage startups need two things from a website: explain a new idea in seconds, and prove it is real enough to take a meeting. Later they need the product itself. I founded SQWAD and built it end to end, so I build startup sites and MVPs with the same priorities a founder has: speed, clarity and not wasting runway.',
    mustHaves: [
      { title: 'A one-line explanation above the fold', text: 'If an investor or customer cannot repeat what you do after five seconds, the rest of the page does not matter.' },
      { title: 'Proof', text: 'Traction, pilots, logos, a demo video or a product screenshot. Whatever is true and strongest right now.' },
      { title: 'One clear call to action', text: 'Join the waitlist, book a demo or start a trial. One primary action per stage.' },
      { title: 'Analytics from day one', text: 'You need to know which messages convert before you spend on ads.' },
      { title: 'A path to the product', text: 'Built on the same stack as your app, so the marketing site and MVP can share auth, design and code.' },
    ],
    mistakes: [
      'Vague taglines that could describe any company',
      'Building a full platform before validating the core workflow',
      'Paying for a marketing site and an app on two stacks that never connect',
      'No analytics, so nobody knows what is working',
    ],
    related: ['sqwad', 'vencare', 'thehoopgang'],
    service: 'saas-mvp-development',
    packageHint: 'Landing pages fit the Starter or Business Site package. Product builds start with the MVP Starter or SaaS MVP package.',
    faqs: [
      { q: 'Can you build both the site and the MVP?', a: 'Yes, on one Next.js stack, which keeps the design consistent and lets them share code and auth.' },
      { q: 'How fast can a landing page go live?', a: 'A focused landing page can be live within a week once the copy and offer are clear.' },
      { q: 'Do you work for equity?', a: 'My projects are paid. I am happy to talk through scope so it fits the budget you have now.' },
    ],
  },
  {
    slug: 'local-service-businesses',
    name: 'Local service businesses',
    h1: 'Websites for local service businesses',
    metaTitle: 'Website Developer for Local Service Businesses | Quotes, Booking, Local SEO',
    description: 'Websites for printers, contractors, field service teams and other local businesses: quote requests, scheduling tools and local SEO, built in Next.js.',
    intro: 'For printers, contractors, cleaners and other service businesses, a website has one job: turn a search into a qualified request. That means showing up locally, making the work look trustworthy and collecting the details you need to quote without three rounds of email.',
    mustHaves: [
      { title: 'Structured quote requests', text: 'Ask for the specs that matter for your work (sizes, quantities, addresses, photos) so every request arrives ready to price.' },
      { title: 'Service area pages', text: 'Honest pages for the areas you actually serve help you show up for local searches.' },
      { title: 'Proof of work', text: 'Project photos, before and after, and the kinds of clients you serve.' },
      { title: 'Fast contact on mobile', text: 'Tap to call, tap for directions, and a short form, all reachable with a thumb.' },
      { title: 'Internal tools when you are ready', text: 'Quote management, job scheduling and calendar sync can grow out of the same site.' },
    ],
    mistakes: [
      'A generic contact form that leads to back-and-forth before any quote',
      'No mention of the cities or neighborhoods served',
      'Stock photos instead of real jobs',
      'Phone number buried in the footer on mobile',
    ],
    related: ['artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'Most service businesses fit the Business Site package. Quote management or scheduling tools are a Full Custom Build.',
    faqs: [
      { q: 'Can the quote form handle file uploads?', a: 'Yes. Artwork, photos and plans can be attached and delivered with the request.' },
      { q: 'Can you build internal tools too?', a: 'Yes. I have built quote management for a commercial printer and job scheduling with Outlook Calendar sync for field teams.' },
      { q: 'Will the site help me rank locally?', a: 'It covers the on-site side: speed, local business data and service area pages. Reviews and your Google Business Profile do the rest, and I will show you what to focus on.' },
    ],
  },
];

export interface ToolFix {
  slug: string;
  tool: string;
  h1: string;
  metaTitle: string;
  description: string;
  whatItBuilds: string;
  problems: { title: string; text: string }[];
  process: string[];
  faqs: Faq[];
}

export const toolFixes: ToolFix[] = [
  {
    slug: 'lovable',
    tool: 'Lovable',
    h1: 'Fix and launch your Lovable app',
    metaTitle: 'Lovable Developer: Fix, Finish & Deploy Your Lovable App | Thomas Osayi',
    description: 'Stuck on a Lovable app? I fix Supabase auth and RLS, Stripe payments, broken builds and deployment so your app is ready for real users.',
    whatItBuilds: 'Lovable generates React apps built with Vite, TypeScript, Tailwind and shadcn/ui, usually backed by Supabase for auth, database and edge functions, with code you can sync to GitHub.',
    problems: [
      { title: 'Supabase row level security left open or broken', text: 'Either every user can read every row, or policies are so strict nothing loads. I write policies that tie each row to its owner and test them as different users.' },
      { title: 'Auth works in preview but not on your domain', text: 'Redirect and site URLs still point at the preview. Email confirmation and OAuth break until they match production.' },
      { title: 'Stripe payments that never update the app', text: 'Checkout succeeds but the user never gets access, because the webhook is missing, unverified or not deployed as an edge function.' },
      { title: 'The prompt loop', text: 'Each fix breaks something else and credits disappear. At that point the faster path is a developer reading the code directly.' },
      { title: 'Poor SEO on a client-rendered app', text: 'Marketing pages rendered only in the browser are harder for search engines to read. I move public pages to server-rendered or prerendered HTML when it matters.' },
    ],
    process: ['Get access to the GitHub repo and Supabase project', 'Reproduce the issues and list everything broken', 'Fix security first, then payments, then everything else', 'Deploy to your domain and test real user flows', 'Hand over a short write-up of what changed'],
    faqs: [
      { q: 'Can I keep using Lovable after you fix it?', a: 'Yes. Changes go through GitHub, so Lovable stays in sync and you can keep prompting afterwards.' },
      { q: 'Do I need to move off Supabase?', a: 'No. Supabase is a solid backend. Most problems come from configuration, not the platform.' },
      { q: 'How fast can you start?', a: 'Usually within a day or two. Small fixes are often done in 48 hours.' },
    ],
  },
  {
    slug: 'bolt',
    tool: 'Bolt',
    h1: 'Fix and deploy your Bolt.new app',
    metaTitle: 'Bolt.new Developer: Fix & Deploy Your Bolt App | Thomas Osayi',
    description: 'Your Bolt.new app runs in the browser preview but breaks on deploy? I fix build errors, environment variables, Supabase and Stripe, then ship it to production.',
    whatItBuilds: 'Bolt.new from StackBlitz builds and runs full-stack JavaScript apps inside the browser, commonly React with Vite or Next.js, often with Supabase, and deploys through providers like Netlify.',
    problems: [
      { title: 'Works in the preview, fails on deploy', text: 'The in-browser environment is forgiving. Production builds catch type errors, missing dependencies and server code that never ran outside the preview.' },
      { title: 'Environment variables and secrets', text: 'Keys pasted into code or missing from the host. I move every secret into the host settings and keep private keys off the client.' },
      { title: 'The project got too big for the AI', text: 'Past a certain size, edits start breaking unrelated files. Splitting the code into clear modules makes it workable again for you and for the AI.' },
      { title: 'Backend wiring', text: 'Auth, database tables and policies, file storage and payments that were stubbed or half connected.' },
      { title: 'Moving it to your own repo and domain', text: 'Exporting to GitHub, setting up a proper deploy pipeline and connecting your domain.' },
    ],
    process: ['Export the project to GitHub', 'Run a real production build and fix every error', 'Wire up and secure the backend', 'Deploy to Vercel or Netlify on your domain', 'Write up what changed and how to keep going'],
    faqs: [
      { q: 'Can you work from a Bolt project link?', a: 'The easiest path is exporting to GitHub or downloading the code. I can walk you through it.' },
      { q: 'Where will it be hosted?', a: 'Usually Vercel or Netlify, on your account, so you own everything.' },
      { q: 'Will you rewrite it?', a: 'No. I keep what works and fix what does not.' },
    ],
  },
  {
    slug: 'v0',
    tool: 'v0',
    h1: 'Turn your v0 UI into a working app',
    metaTitle: 'v0 Developer: Turn Your v0 Design into a Working Next.js App | Thomas Osayi',
    description: 'v0 gave you a great-looking Next.js UI with nothing behind it? I add the database, auth, payments and real data, then deploy it on Vercel.',
    whatItBuilds: 'v0 by Vercel generates React and Next.js interfaces with Tailwind and shadcn/ui. It is excellent at screens and layouts, and leaves most of the backend to you.',
    problems: [
      { title: 'Beautiful screens with mock data', text: 'Tables and dashboards filled with hardcoded arrays. I connect them to a real database with proper loading and empty states.' },
      { title: 'No auth or roles', text: 'Sign-in, protected routes and per-user data, using Firebase, Supabase or Auth.js depending on the app.' },
      { title: 'Forms that do nothing', text: 'Server actions or API routes with validation, error handling and emails.' },
      { title: 'Many disconnected generations', text: 'Several v0 outputs with slightly different components and styles. I merge them into one consistent design system.' },
      { title: 'Payments', text: 'Stripe checkout, subscriptions and webhooks that grant access reliably.' },
    ],
    process: ['Collect the v0 generations and your product goals', 'Merge into one Next.js codebase', 'Add database, auth and server logic', 'Deploy to Vercel on your domain', 'Hand over with notes'],
    faqs: [
      { q: 'Is v0 code production ready?', a: 'The UI usually is. The parts around it, data, auth, validation and security, are where the work is.' },
      { q: 'Which database do you use?', a: 'Firebase for speed and realtime, Postgres when data is relational. I recommend one for your product.' },
      { q: 'Can I keep generating screens in v0?', a: 'Yes. New screens drop into the same component system.' },
    ],
  },
  {
    slug: 'replit',
    tool: 'Replit',
    h1: 'Fix, scale or move your Replit app',
    metaTitle: 'Replit Agent App Developer: Fix, Finish or Migrate | Thomas Osayi',
    description: 'Built an app with Replit Agent and hit a wall? I fix bugs, secure auth and data, add payments, and help you stay on Replit or move to Vercel and a managed database.',
    whatItBuilds: 'Replit Agent builds and hosts full-stack apps inside Replit, with its own database options, secrets manager and deployments, across languages like JavaScript and Python.',
    problems: [
      { title: 'Bugs the agent keeps reintroducing', text: 'Fixes that undo each other. A developer reading the code end to end breaks the loop.' },
      { title: 'Security gaps', text: 'Missing authorization checks on API routes, secrets in code, and no validation on user input.' },
      { title: 'Costs and performance as usage grows', text: 'Always-on deployments and inefficient queries add up. I tune queries and pick the right deployment type.' },
      { title: 'Moving off Replit', text: 'When you want your own GitHub, hosting and managed database, I migrate the code and data cleanly.' },
      { title: 'Payments and email', text: 'Stripe, transactional email and webhooks connected and tested.' },
    ],
    process: ['Review the Repl and list issues', 'Fix security and the critical bugs', 'Decide together: stay on Replit or migrate', 'Deploy and test', 'Hand over a write-up'],
    faqs: [
      { q: 'Do I have to leave Replit?', a: 'No. Many apps are fine there. I only recommend moving when cost, control or scale make it worth it.' },
      { q: 'Can you move my data too?', a: 'Yes. Data is exported and migrated with a tested plan.' },
      { q: 'What languages do you work in?', a: 'Mostly TypeScript and JavaScript (React, Next.js, Node), and Python for scripts and data work.' },
    ],
  },
  {
    slug: 'cursor',
    tool: 'Cursor',
    h1: 'Clean up and ship your Cursor-built codebase',
    metaTitle: 'Fix a Cursor or AI-Coded Codebase | Next.js & React Developer | Thomas Osayi',
    description: 'Code written with Cursor, Windsurf or Claude Code that got messy? I untangle it, fix the bugs and type errors, add the missing pieces and get it deployed.',
    whatItBuilds: 'Cursor and similar AI editors write code directly into your own repository, in whatever stack you chose. The result is only as consistent as the prompts behind it.',
    problems: [
      { title: 'Five ways of doing the same thing', text: 'Each session added its own pattern for fetching data, handling forms or styling. I consolidate to one.' },
      { title: 'Type errors and lint failures silenced', text: 'Errors suppressed with any types and disabled rules that hide real bugs. I fix them properly.' },
      { title: 'Regressions', text: 'New features quietly break old ones. I add the minimum tests around the critical flows so it stops.' },
      { title: 'Dependency drift', text: 'Duplicate libraries, conflicting versions and packages nobody uses anymore.' },
      { title: 'Not deployable', text: 'Builds that only work on one laptop. I set up a clean production build and deploy.' },
    ],
    process: ['Read the repo and map the architecture', 'Prioritize what blocks launch', 'Refactor only where it removes real risk', 'Deploy with a working build', 'Leave notes and conventions so future AI edits stay consistent'],
    faqs: [
      { q: 'Will you rewrite my app?', a: 'Only the parts that are genuinely cheaper to rewrite than fix. Most code stays.' },
      { q: 'Can you set it up so AI edits stay clean?', a: 'Yes. I leave a short conventions file and structure that keeps Cursor and similar tools consistent.' },
      { q: 'Which stacks do you take?', a: 'React, Next.js, React Native, Node, Firebase, Supabase and Postgres.' },
    ],
  },
];

export const industryBySlug = (s: string) => industries.find((x) => x.slug === s);
export const toolBySlug = (s: string) => toolFixes.find((x) => x.slug === s);
