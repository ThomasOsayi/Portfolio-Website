// Search-facing pages: services, case studies and articles.
// Body text uses a tiny format, one block per line: "## " heading, "### " sub-heading, "- " bullet, "> " tip callout,
// "![caption](/path.jpg)" image, "@video(/path.mp4|/poster.jpg|caption)" video, anything else is a paragraph.

import { morePosts } from './posts-more';
import { postsBatch2 } from './posts-batch2';

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
Brands that pay creators for content rarely know which creator actually drove a sale. Programs run on spreadsheets, DMs and guesswork. A brand ships product to a group of creators, some post and some do not, a few videos get turned into ads, and at the end of the month nobody can say which creator was worth the money.
I came at this from the inside. Before SQWAD I built a custom creator portal for TheHoopGang, a basketball streetwear brand, and saw how much of a creator program is repeatable from one brand to the next: applications, shipping, content, payment. I also saw the one question a spreadsheet cannot answer, which is who made the sale.
## What a brand needs from creator software
A creator program has five jobs. A tool has to cover all of them, or the brand ends up back in a spreadsheet for the one that is missing.
- Applications and approvals
- Product seeding: shipping product and tracking it
- Content submission and review
- Payouts
- Attribution: which creator's content drove which sales
The first four are operations. The fifth is the reason to run a program at all, so that is where I started.
## How I approached it
The first version of SQWAD did one thing: let a brand see which creator drove a sale. Everything else came later.
That order was deliberate. Operations features are easy to describe and a brand can limp along without them. Proof of which creator's content sells is the thing a brand cannot get from a spreadsheet, so it had to work before anything else was worth adding.
The operational pieces were then added around that core, one workflow at a time.
## What I built
SQWAD gives each brand a branded portal where creators apply, receive product, submit content, join competitions and get paid.
### Applications and approvals
Creators apply through the brand's own portal instead of a generic form or a DM. The brand reviews each application and approves the creators it wants in the program.
### Shipping and content tracking
Once a creator is approved, product goes out and content comes back. SQWAD tracks both sides, so the brand can see what has shipped and what each creator has submitted without chasing anyone in messages.
### Competitions and leaderboards
Brands can run competitions among their creators, with leaderboards showing who is ahead. In a creator program the first post is the easy one. A leaderboard gives creators a reason to keep posting after it.
### Payouts and attribution reporting
This is the core of the product. Every Meta ad is traced back to the creator whose content made the sale, and attribution reporting shows the brand what each creator's content produced. Payouts sit next to that data, so paying creators and knowing what they earned for the brand happen in the same place.
## Technical decisions and why
- Next.js and TypeScript. Both sides of the product, the brand's view and the creator's portal, are web apps, and Next.js handles pages and server code in one project. Types run from the data layer to the component, which matters when the numbers on screen are money.
- Firebase. I built SQWAD on Firebase because creator portals need realtime updates. When a creator submits content or a status changes, the brand should see it without refreshing the page.
- Multi-tenant data. SQWAD separates brands, their team members and creators, with each brand's data isolated. In any multi-tenant product that isolation has to be enforced where the data lives, not only in the interface, because one customer seeing another customer's numbers is the kind of bug a product does not recover from.
- Shopify and the Meta Ads API. The brands on SQWAD sell on Shopify and advertise on Meta, so those are the two systems that have to be connected. The store knows what sold, the ad platform knows which ad ran, and SQWAD ties the ad back to the creator behind the content.
- Stripe. Stripe is the payment layer. Holding card details or payment state myself would add risk and no value.
## Result
SQWAD now tracks more than $500K in creator-driven sales for the brands on the platform. I still build the product myself and sign the brands that run their creator programs on it.
## What I would tell someone planning a similar product
Start with the one answer your customer cannot get anywhere else. For SQWAD that was which creator drove a sale.
Put the core workflow in front of five real users before adding billing and polish.
Decide on tenant isolation on day one. It is cheap to design in and painful to add once several customers share a database.
Pick the database by the shape of your data, not by which one is trending. The need for realtime updates pointed me to Firebase here. The portal I built for TheHoopGang has relational data, and that pointed to Postgres.
If you are a brand and not a founder, the advice is different. Most brands should start with existing creator program software, because applications, product seeding, content tracking and payouts are already built. Build a custom portal only when your rewards, approvals or integrations are unusual enough that standard tools force workarounds.`,
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
Those are two different problems that share one set of people. Someone looking for a therapist usually has two questions before anything else: will this person understand what I am dealing with, and do they take my insurance. Many practice websites hide the second answer until the first phone call. Inside the practice, the same therapists sit in a supervision structure, with licensed therapists, supervised associates and trainees, and each of those people needs a different view of the work.
## What the practice needed
- A public site where a client can search for a therapist by insurance
- A way to match clients with both licensed therapists and supervised associates who take their plan
- A separate, private portal for each role: therapists, supervisors, trainees, clients and admins
- Permissions strict enough that each role sees only what it should
## How I approached it
Start from the roles, not the screens. With five kinds of user, the question that decides everything else is who can see what. Once each role has a list of what it may read and what it may change, the screens follow from that list fairly directly, and so do the access rules.
The public search comes from the same thinking applied to the client. Insurance is the first filter because it is the first question a client has.
## What I built
### Insurance-aware therapist matching
The public site leads with a therapist search by insurance. The homepage message is "Real therapy, in network with your plan", and the search sits with it. The platform matches clients with licensed therapists and supervised associates who take their insurance, so the first thing a visitor learns is whether the practice can see them at all.
### A portal for each role
Guardian MindCare has five user roles, and each has its own portal:
- Therapists
- Supervisors
- Trainees
- Clients
- Admins
The practice's internal workflow runs in these portals, on the same platform as the public site, in place of the scattered tools it would otherwise need.
### Permissions
Each role sees only what it should. That is the feature a visitor never notices and the one the rest of the platform depends on. A practice has people at different stages of training working under supervision, and what a trainee should see is not what a supervisor or an admin should see.
## Technical decisions and why
- Next.js and TypeScript. The public pages have to load fast and be readable by search engines, because search is how new clients arrive. The portals have to be a real application. Next.js does both in one project. TypeScript lets a role be defined as a type, so the compiler complains when a screen forgets to handle one of the five.
- Firebase. Sign-in, the database and the access rules come from one platform. That keeps the system small, with no separate server to run and patch.
- Role-based access. The general rule with roles is that the check has to happen on the server or in the database rules, never only in the interface. In a Firebase project the usual pattern is to attach the role to the signed-in user, for example as a custom claim on the auth token, and then write security rules that compare that role and the user's ID against each record. Hiding a menu item protects nothing if the data behind it can still be requested directly.
- Privacy by design. In healthcare work generally, the safest data is the data you never collect. A practice website should ask only for what is needed to schedule a consultation. Clinical detail belongs in the practice's clinical records system, not in a website form.
## Result
One platform runs both the client-facing search and the practice's internal workflow. Clients can search for a therapist by insurance from the homepage, and therapists, supervisors, trainees, clients and admins each have a portal built for their role.
## What I would tell someone planning a similar build
Write the permissions table before the first screen. List every role down one side and every kind of record across the top, then fill in read, write or nothing. It takes an afternoon and settles most of the arguments that would otherwise come up halfway through the build.
Test as every role. Create one account per role and try to open the other roles' pages and records. With five roles that is a lot of combinations, and the bugs hide in the ones nobody tried.
Put the insurance answer up front. Hiding which plans are accepted until a phone call loses the clients who needed that answer first.
Give every therapist their own page with a photo, their approach and their specialties. Those pages are what clients actually read before reaching out, and a practice without them gives up search visibility too.
Keep the intake short and calm. A person reaching out to a therapist for the first time should not be met with a long form.
Keep the website and the clinical record separate, and be clear from the start about which system holds what.`,
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
TheHoopGang is a basketball streetwear brand, and creators are how people see the gear being worn. Gifting works, but it is easy to lose track of. A package goes out, and nobody is sure whether the videos were ever posted.
## What the brand needed
- One place for creators to apply and for the team to approve or deny them
- A record of which product and size each creator chose and where the package is
- A way for creators to submit content and for the team to see who has delivered
- A gifting flow where the gear is refunded once the creator posts
- A view of the whole program at a glance
## How I approached it
The program is modelled as a pipeline with one status per creator: application received, approved, shipped, delivered, content completed. Every screen in the portal is a view of that status, for one creator or for all of them. Because the creator's dashboard and the team's dashboard read the same record, they cannot disagree about where things stand.
## What I built
### Landing page and application
The portal opens with a landing page that explains the offer and gives two actions: apply, or log in as an existing creator.
![The HoopGang creator portal landing page, with Apply Now and Creator Login buttons.](/images/hoopgang/landing-page.png)
The application starts from a verified email. It then asks for Instagram and TikTok handles, follower counts, a link to the creator's best content and the product they want.
### Application review
Each application opens in a review panel for the team. It shows the creator's reach, both social accounts, the content sample, height and weight so the team can recommend a size, and the shipping address, with buttons to approve or deny.
### Creator dashboard
An approved creator gets a dashboard with their current status, how many videos they have posted, the time left, and the product and size they chose. A timeline walks through the journey from application received to content completed. A package panel shows tracking once the gear ships, and a submission area is where content is handed in.
![The creator dashboard: status, videos posted, the chosen product and a journey timeline from application to completed content.](/images/hoopgang/creator-dashboard.png)
### Admin dashboard
The team's home screen counts total applications, applications pending review, active collaborations, completed ones and a ghost rate. Below that is a table of every creator with their TikTok handle, followers, status, product, tracking number, content progress and rating. It can be filtered by status, searched by name or handle, and narrowed by minimum followers.
Each row opens a creator page where the team changes the creator's status and adds the tracking number for their shipment.
### Refundable gear gifting
Creators claim gear, submit their content and get refunded once they post. Tying the refund to the content means the creator knows exactly what earns it, and the brand is not giving away gear that never turns into posts.
## Technical decisions and why
- Postgres. I built this portal on Postgres because its data is relational. A creator has an application, an application has a product and a size, a shipment has a tracking number, and content belongs to a creator. A question like "which approved creators have a delivered package and no videos" is a join and a filter, which is what a relational database is for.
- Prisma. Prisma sits between the app and Postgres. The schema is declared in one file, changes go through migrations, and the generated client is typed, so a query that asks for a field that does not exist fails at build time instead of in front of a user.
- Next.js and TypeScript. The public pages, the creator area and the admin area run as one Next.js app, and the same types describe a creator in the database, on the server and in the component.
## Result
The portal manages 50+ active creators in one place. Applications, shipping, content and status live in one system.
## What I would tell a brand planning a similar portal
Most brands should start with existing creator program software, because applications, product seeding, content tracking and payouts are already built. A custom portal is worth it when your rewards, approvals or integrations are unusual enough that standard tools force workarounds.
If you do build, define the stages first and show them to the creator. Most of the messages a program generates are status questions.
Collect what you need to ship correctly inside the application, such as size and address, so an approval can lead straight to a shipment.
Give the team one table they can filter, so finding the creators who have not posted takes seconds.`,
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
VenCare is a health startup that places wall-mounted epinephrine stations in venues. The short version is that it is like an AED for allergic reactions: emergency equipment on the wall, in the places where people already are. That is a new category, so the website cannot assume the visitor already knows what the product is.
## What the startup needed
Two audiences read this site, and they want different things.
- Venue operators want to know what the station is and how to ask about getting one.
- Investors want to understand the idea quickly and judge whether the company is real enough to take a meeting.
Both need the same first few seconds: a clear statement of what VenCare does. After that they split, so the site needed a story that works for both readers and an inquiry flow built for venues.
## How I approached it
Early-stage startups need two things from a website: explain a new idea in seconds, and prove it is real. That makes the one-line explanation the first decision, ahead of any design. If a visitor cannot repeat what the company does after five seconds, the rest of the page does not matter.
The AED comparison does that work for VenCare. Almost everyone has walked past a defibrillator cabinet on a wall, so the comparison gives a stranger a picture of the product before they have read a second sentence.
With the line settled, the order of the page follows the questions a visitor asks next: what is it, why does it matter, why should I trust this company, and what do I do now.
## What I built
A custom Next.js marketing site, designed from scratch instead of from a template.
### A clear story
The site tells the VenCare story in a deliberate order. For a product nobody has a category for yet, order matters more than volume. Each section answers one question and hands off to the next, so a visitor who only scrolls halfway still leaves with the idea.
### Product sections
The product gets its own sections, so the explanation is broken into pieces a reader can take in one at a time instead of one long block of text. A medical product also carries a higher bar for credibility than most. On a site like this, clean typography, restrained design and plain language do more for trust than effects would.
### An inquiry flow for venues
The call to action is an inquiry flow aimed at venue operators. As a general rule for inquiry forms, ask only for what is needed to start a conversation, such as who the person is, what kind of venue they run and how to reach them. The team should be notified the moment a form is submitted, and the visitor should be told clearly that the inquiry went through. One primary action keeps the path obvious for the reader the site most needs to convert.
## Technical decisions and why
- Next.js. Marketing pages are pre-built into static HTML and served from a global network, so the site loads fast on a phone. That matters for a site that gets opened from a link in an email or pulled up in the middle of a meeting. Next.js is also the stack a web product would be built on later, so a marketing site and a future app can share design and code.
- TypeScript. Even on a marketing site, types catch broken component props and missing content before a deploy and not after it.
- Vercel. Every change can be reviewed on its own preview link before it goes live, which suits a small team that wants to check copy carefully. Deploys happen on a push to the repository, and the domain and HTTPS are handled by the host.
- Technical SEO. Metadata, a sitemap and fast Core Web Vitals are part of how I build every site. For a new company that means its name is findable from the day people start searching for it.
## Result
A fast, credible site the team uses in sales conversations and investor outreach. When someone asks what VenCare is, there is a link that answers the question.
## What I would tell a startup planning a similar site
Write the one-line explanation before anything is designed. If you have a comparison that makes a new product obvious, the way "an AED for allergic reactions" does, lead with it.
Avoid vague taglines that could describe any company. A specific sentence that a visitor can repeat is worth more than a clever one.
Show the proof that is true right now: traction, pilots, a demo video or a product image. Use whatever is strongest and real, and replace it as better proof arrives.
Pick one primary call to action for the stage you are in. For VenCare that is the venue inquiry. A page that asks for three things usually gets none of them.
Add analytics on day one, so you know which messages work before you spend money on ads.
Build the marketing site on the stack you expect to use for the product. It saves paying for two systems that never connect.`,
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
New York Nook is a Russian restaurant in Hollywood. Like most restaurants, it gets found on a phone, by someone standing on a sidewalk or deciding where to eat in the next twenty minutes. That person wants three things: the menu, the hours and a way to book or order.
## What the restaurant needed
- The full menu, with photography, readable on a phone
- A way to request a reservation
- Pickup ordering from the restaurant's own site
- A look that matches the room people are about to walk into
## How I approached it
Design for the phone first and count the taps. A restaurant site works when a hungry person can reach the menu, a table or an order within a tap or two of the first screen. Those three actions belong at the top, and everything else, the story, the atmosphere and the photographs, supports them.
The second principle is that the site should feel like the place. A restaurant is choosing how it looks to someone who has not visited yet, so type, colour and photography have to carry the mood of the room.
## What I built
### A full menu with photography
The whole menu is on the site, with photographs of the food. As a general rule I build menus as real text on the page, not as a PDF or an image. Text loads instantly, reads well on a phone without pinching and zooming, and can be indexed by Google, so a dish can show up when someone searches for it. Good photographs do more than any copy, so the layout is there to let the best shots carry the page.
### Reservation requests
Guests can request a table from the site. A reservation request needs very little: party size, date, time, a name and a way to reach the guest. Every field beyond that costs bookings.
Any reservation form, on any restaurant site, should do two things the moment it is submitted. It should notify the restaurant, and it should tell the guest what happens next, on screen and ideally by email. Without a confirmation, guests are not sure the request went through, so they call to check or book somewhere else, and the form has saved nobody any time.
For rooms that already use a system such as OpenTable, Resy or Tock, linking or embedding it is the alternative. A simple request form suits smaller rooms that want to confirm each booking themselves.
### Pickup ordering
Guests can order pickup directly from the restaurant's site. Direct ordering matters because pickup orders placed through third-party delivery apps come with a commission on each one. An order placed on the restaurant's own site skips that.
A pickup flow has to be clear about a few things no matter who builds it: what is available, when the order will be ready and where to collect it. In general it can be anything from a simple order form to a full cart with online payment, depending on how the kitchen wants to work.
## Technical decisions and why
- Next.js. Menu and information pages are pre-built and served from a global network, which is what makes them fast on a mobile connection. A slow template full of scripts and auto-playing video is one of the most common restaurant site mistakes, and this stack avoids it by default. The Next.js image component resizes food photography for each screen and lazy loads whatever is below the fold, so the photos do not cost the page its speed.
- TypeScript. A menu is structured data: sections, items, descriptions and prices. Typing it means a missing price or a misspelled field is caught before the site is deployed, not noticed by a guest.
- Vercel. Deploys are automatic, hosting is free or close to it for most small business sites, and a change can be checked on a preview link before guests see it.
## Result
Guests can see the menu, book a table or order pickup from their phone in under a minute.
## What I would tell a restaurant planning a similar site
Put the menu on the page as text. Uploading it as a PDF or an image is a very common mistake, and it hurts both guests and search visibility.
Keep hours, address and a map at the top, and make sure they match your Google Business Profile. Those are the most searched details about any restaurant, and a mismatch sends people to a closed door.
Decide early whether reservations are a request you confirm yourself or an instant booking through a system you already pay for. Both work. Offering both at once confuses guests.
Take pickup orders on your own site if you can, so that not every order goes through an app that takes a cut.
Invest in photographs before you invest in copy.
Make sure the menu is easy to update. It should live in one editable place, because a menu showing last season's prices does more harm than a short one that is right.`,
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
Artistic Printing is a commercial printer in Los Angeles. A print job cannot be priced from a message that says "how much for some brochures". The shop needs to know what is being printed, how many and at what size before a number means anything. When requests arrive as loose emails, every quote starts with a round of questions, and the job waits while they are answered.
## What the shop needed
- A modern website that makes the business look as capable as it is
- A quote request that collects the specs the shop needs the first time
- A way to manage the requests that come in, without hunting through an inbox
- Structured client intake, so the same information is captured for every client and job
## How I approached it
The form is the product. For a service business, a website has one job: turn a search into a qualified request. A generic contact form with a name, an email and a message box produces the same vague emails the shop was already getting.
So the work starts from the shop's side. What does the person pricing the job need in front of them? Those answers become the fields, worded the way a client would say them.
The second half is what happens after someone presses submit. A request that lands in an inbox is still an email. A request that lands in a tool is a record that can be tracked.
## What I built
### A modern website
The public site presents the shop and leads visitors toward requesting a quote. For a printer, as for any local service business, trust comes from real examples of the work, clarity about what the shop does and an easy way to get in touch from a phone.
### Structured quote intake
The quote request collects the details the shop needs, so every request arrives with the specs required to price it.
In general, a good print quote form asks for the kind of piece, the quantity, the size and any deadline. It uses choices instead of free text wherever the options are known, and it marks as required only what is truly needed to quote. Every extra required field loses some requests, so the skill is in asking for enough and no more.
Print work usually involves artwork. A quote form can accept file uploads, so artwork, photos or plans travel with the request and do not follow later in a separate email.
### Quote management
Requests go into a quote management tool, not only into an inbox. The value of a tool over email is simple. Each request is a record with the same fields in the same place, and nothing gets buried in a thread.
A quote tool of this kind generally needs three things: a list of requests, a detail view showing everything the client submitted, and a way to mark where each request stands.
## Technical decisions and why
- Next.js and TypeScript. The public site is pre-built and fast, which matters for local search, and the quote tool is a real application behind it. Next.js lets both live in one project. TypeScript is especially useful for forms: the shape of a quote request can be defined once and shared by the form, the validation and the management view, so the three cannot drift apart.
- Firebase. A quote tool needs a database for requests and sign-in for the people who manage them. Firebase provides both on one platform, along with file storage, and there is no server to maintain. That fits a small business that should not need an IT department to run its website.
- Access rules. Quote requests contain client details. In any build like this, the database rules should let the public create a request and let only signed-in staff read them. Validation belongs on the server as well as in the form, because a form in a browser can be bypassed.
## Result
Quote requests come in structured and complete. Each one arrives with the specs the shop needs.
## What I would tell a service business planning a similar tool
Sit down with whoever prices the work and list what they ask every client. That list is your form.
Ask for the specs that matter for your work, such as sizes, quantities, addresses or photos, and resist adding fields that are only nice to have.
Use dropdowns and choices where you can. They are faster to fill in on a phone and they give you clean data.
Send the client a clear confirmation, so they know the request arrived and what happens next.
Treat the internal side as part of the project. Structured requests are half the gain. The other half is having them in one list instead of spread across inboxes.
Start with the site and the form. Internal tools such as quote management, job scheduling or calendar sync can grow out of the same site when you are ready for them.`,
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
Astiglow is a waxing studio. Beauty clients book on impulse and on their phones, often late at night. If a site makes them call during business hours, many of them book somewhere else. Phone booking also costs the studio attention, because a ringing phone is an interruption during someone else's appointment.
## What the studio needed
- A service menu with prices, so nobody has to message to ask
- Service packages presented clearly
- Online booking
- A look that matches the studio, not a stock beauty template
## How I approached it
Remove every reason to hesitate. A new client deciding whether to book has a short list of questions: what do you offer, what does it cost, and can I get a time that works. A studio site should answer those in that order and keep the booking action within reach on every screen.
The look comes from the brand. Waxing is a personal service, and the website is the first impression of how a visit will feel. That calls for a soft, calm design, and for restraint with anything that slows the page down.
## What I built
### A service menu with prices
The site lists the studio's services with their prices. Clear prices remove the main reason people hesitate.
As a general pattern, a service menu works best grouped by category, with the price and duration of each service, so a client can find what they want without reading the whole list.
### Packages
Service packages have their own place on the site. Bundles raise the value of each client and give regulars a reason to commit, so they deserve a section of their own and not a footnote under the price list.
### Online booking
Clients can book online without calling.
There are generally two ways to put booking on a studio site. One is to embed or link the booking system the studio already uses, such as Square, Vagaro, Boulevard or Fresha, so the calendar stays in one place. The other is a simple request flow on the site itself.
Either way, two things matter. The booking step should feel like part of the site and not like a slow third-party page with no branding. And the client should get a confirmation straight away. In any appointment business, a clear confirmation is what stops the "did my booking go through" messages that put the studio back on the phone.
### A soft, on-brand design
The design is soft and on-brand. A studio site should look like the studio, so the visual choices come from the brand, and the pages are kept light so they load quickly on a phone.
## Technical decisions and why
- Next.js. Pages are pre-built and served from a global network, so the site is fast on a mobile connection, which is where impulse bookings happen. A common studio site mistake is embedding a live Instagram feed that slows everything to a crawl. A fast gallery of selected photos does the same job without the weight.
- TypeScript. Services, prices and packages are structured data. Keeping them typed and in one editable place means a price change is made once and shows up everywhere that price appears.
- Vercel. Hosting is free or close to it for most small business sites, deploys are automatic, and a change can be checked on a preview link before clients see it.
## Result
Booking moved online, freeing the studio from phone scheduling. Clients can see the services, prices and packages and book without calling.
## What I would tell a studio planning a similar site
Publish your prices. Making people call or message for them is one of the most common mistakes on studio sites, and it loses the clients who were ready to book.
Let clients book at any hour. The booking that would have happened at eleven at night does not happen if it needs a phone call the next morning.
Keep your existing booking software if it works, and bring it into the site instead of replacing it.
Give packages and memberships real space on the page.
Add a page for first-time clients about how to prepare and what to expect, and one on aftercare. They cut down on repeat questions and bring in search traffic.
Choose a handful of your best photos over a live social feed.
Keep services and prices in one place that is easy to edit, so the site never shows an old price.`,
  },
];

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD, set only when the content really changed
  keywords: string[];
  service?: string;
  // answer-first block AI tools can lift verbatim: 1-3 plain sentences
  shortAnswer?: string;
  // 3-5 one-sentence takeaways shown in a box above the article
  takeaways?: string[];
  faqs?: { q: string; a: string }[];
  body: string;
}

// Newest first. The SEO routine adds new entries at the top.
const basePosts: Post[] = [
  {
    slug: 'fix-lovable-bolt-app-before-launch',
    title: 'Your Lovable or Bolt app works locally. Here is what breaks at launch.',
    description: 'The five problems I see most often when founders bring me an AI-built app that is almost ready, and how to fix each one before real users arrive.',
    date: '2026-11-16',
    updated: '2026-11-17',
    keywords: ['fix Lovable app', 'Bolt app not working', 'vibe coded app production', 'AI generated app bugs'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Most Lovable and Bolt apps break at launch for five reasons: open database rules, payment webhooks that were never deployed, secrets that only exist locally, duplicated AI-generated code, and missing error handling. Each one is fixable in a few hours by someone who reads the code directly instead of prompting again.',
    faqs: [
      { q: 'Why does my Lovable app work in preview but not in production?', a: 'Usually because redirect URLs, environment variables or webhooks still point at the preview environment. Production needs its own values set in the host and in Supabase or Firebase.' },
      { q: 'Is my AI-built app secure?', a: 'Not by default. Check that database rules or row level security tie every record to its owner, and that no secret keys are shipped to the browser.' },
      { q: 'How much does it cost to fix an AI-built app?', a: 'Thomas Osayi fixes single bugs from $60, several fixes plus a feature from $200, and takes a stuck app to launch from $600.' },
      { q: 'How do I know if my Firebase or Supabase database is open?', a: 'Create two accounts and try to load the first account\'s records while signed in as the second. If they load, your Firebase security rules or Supabase row level security policies are not tying records to their owner.' },
      { q: 'Why is my Stripe webhook not firing in production?', a: 'Usually the endpoint was never registered in the Stripe dashboard for the live domain, or the live signing secret is missing from the host. Test mode and live mode have separate keys, endpoints and secrets.' },
      { q: 'Should I rebuild my AI-built app from scratch?', a: 'Usually not. Most stuck AI-built apps have a short list of specific problems, and fixing those costs less than a rewrite.' },
    ],
    takeaways: [
      'AI-built apps usually fail at launch for five reasons: open database rules, missing payment webhooks, local-only secrets, duplicated code and no error handling.',
      'Firebase and Supabase keys are public by design, so security rules or row level security are the only thing protecting your users\' data.',
      'A paid plan should be unlocked by a verified Stripe webhook in production, never by the redirect to a success page.',
      'Run a production build and sign up as a brand new user on the live URL before you tell anyone the app is ready.',
      'Each problem is fixable in a few hours by someone who reads the code directly instead of prompting again.',
    ],
    body: `AI app builders are great at the first 80 percent. Most of the apps people send me look finished: the screens are there, the sign-up form works, the demo goes well. They fall over on the details that only matter once real users and real money show up.
The same five problems come up again and again: a database anyone can read, payments that never confirm, secrets that only exist on one laptop, duplicated code, and no error handling. None of them show in a preview window. Here is how each one happens, how to check your own app for it, and how to fix it.
## Why does an AI-built app work in preview and break in production?
Because the preview only tests the happy path with one user, and production adds strangers, real payments and a different environment. A builder like Lovable or Bolt is judged on whether the screen you asked for appears. It is not judged on what happens when a second user signs up, when a card is declined, or when the app runs on a server that has never seen your laptop.
Three things change at launch:
- The environment. Preview URLs, test keys and local files are replaced by your own domain, live keys and the hosting provider's settings.
- The users. People you do not know will open the browser tools, refresh at the wrong moment and type things you did not expect.
- The stakes. A bug in a demo is embarrassing. A bug that exposes customer data or takes money without delivering anything is a liability.
The list of things that go wrong is short and predictable. The five sections below are in the order I check them.
## Can anyone read my users' data?
Quite possibly, because the most common issue is a database with open security rules. The app checks if you are logged in, but the database does not check who you are. With Firebase and Supabase the browser talks to the database directly, and the project ID or URL and the public key sit in the page source by design. Anyone with them can ask for data. The rules are the only thing deciding whether they get it.
### Firebase
Open Firestore Database, then Rules, in the Firebase console. If you see allow read, write: if true, the database is open to the world. If the rule only checks request.auth != null, every signed-in user can read every other user's records. A correct rule compares request.auth.uid to an owner field on the document, such as userId, and you need one for every collection.
### Supabase
Open the Table Editor and look for tables marked with row level security disabled. With RLS off, the anon key in your front end can select every row. Turn RLS on for each table and add policies such as auth.uid() = user_id for select, insert, update and delete. Never put the service role key in front-end code, because it bypasses every policy.
### How to test it
Create two accounts. Sign in as the second and try to load a record that belongs to the first by changing an ID in the URL or the request. If it loads, the rules are open.
Apps with more than one kind of user need rules that understand roles as well as ownership. Guardian MindCare, a therapy practice platform I built, has five user roles, and each one sees only what it should. That kind of separation has to live in the rules, because hiding a button in the interface protects nothing.
![Guardian MindCare: a therapy practice platform I built with five user roles, where each role sees only what it should.](/work/fiverr/guardian.jpg)
## Why does Stripe charge the card but nothing changes in the app?
Because the webhook was never set up, or it points at localhost. Stripe Checkout runs on Stripe's servers. After the payment, Stripe tells your app about it by sending an event to a URL you registered. If there is no URL, or the URL is a preview address, the card is charged and your database never hears about it.
### What a working setup looks like
- An endpoint in your app, for example /api/webhooks/stripe, that accepts POST requests.
- That endpoint registered in the Stripe dashboard under Developers, then Webhooks, using your production domain.
- The signing secret, which starts with whsec_, saved as an environment variable on the host, and a handler that verifies every event with stripe.webhooks.constructEvent before trusting it.
- Handling for checkout.session.completed at minimum. Subscriptions also need customer.subscription.updated, customer.subscription.deleted and invoice.payment_failed.
- A database write that updates the user's plan, matched by the Stripe customer ID or a user ID you passed in the session metadata.
### The mistakes I see most
Verification fails with "No signatures found matching the expected signature for payload" when the framework has already parsed the body as JSON. The handler needs the raw request body. The other classic is test mode against live mode. They have separate keys, separate webhook endpoints and separate signing secrets, so a setup that worked with test cards does nothing after you switch to live keys.
> Tip: Never unlock a paid plan from the success page redirect. Anyone can type that URL. Only the verified webhook should change what a user has access to.
## Why does the build pass locally and fail on Vercel?
Usually because the keys live in a local file that never reaches the host. A .env or .env.local file is kept out of git on purpose, so when Vercel builds from your repository those values do not exist. The build fails, or it succeeds and the app crashes on the first request with an error like "supabaseUrl is required".
The fix has three parts:
- Copy every variable into the host. On Vercel that is Settings, then Environment Variables, for both Production and Preview. Redeploy afterwards, because new values do not apply to a build that has already run.
- Check the prefixes. In Next.js only variables that start with NEXT_PUBLIC_ reach the browser. In Vite, which many Lovable and Bolt projects use, the prefix is VITE_. Anything with those prefixes is public. A Stripe secret key, a Supabase service role key or an OpenAI key must never carry one.
- Update the settings that still point at the preview. In Supabase, set Site URL and Redirect URLs under Authentication, then URL Configuration. In Firebase, add your domain under Authentication, Settings, Authorized domains. Otherwise login emails send users to a preview address, or sign-in fails with auth/unauthorized-domain.
Some failures only appear on deploy because the production build is stricter. It runs the TypeScript compiler, so a "Type error" the dev server let slide now stops the deploy.
If a secret was ever committed or shipped to the browser, rotate it. Deleting it from the code does not remove it from git history.
## Why does every new change break something else?
Because each prompt adds a new version of the same thing instead of editing the old one. After a few weeks there are three pricing cards, two auth hooks and four copies of the function that formats a date. You ask for a fix, the tool updates one copy, and the screen you are looking at uses another.
Signs of it in the repository:
- Files named Dashboard, DashboardNew and DashboardV2.
- The same data request written out in several components, each with slightly different handling.
- Types set to any, or the same type declared in five files.
- Pages and components that nothing links to any more.
The fix is unglamorous: consolidate to one component per job so the next change happens in one place. I search for duplicates, find the version the live screens actually use, delete the rest, and move database access into one module.
This is also where prompting again makes things worse. Asking the tool to clean up a project in this state often produces one more parallel version. Cleanup needs someone to read what is there and decide what to keep.
## What happens when a request fails?
In most AI-built apps, the page goes blank. The generated code assumes every request succeeds. When an API call fails, a list comes back empty or a session has expired, a component tries to read a property of undefined and React takes down the whole screen. The user sees white and you hear nothing.
Every request needs three states: loading, success and error. On top of that:
- An error boundary around each route, which in the Next.js App Router is an error.tsx file, so one broken component shows a message and a retry button instead of an empty page.
- A check on what the server returned before using it. Supabase calls return an error object instead of throwing, so an unchecked call fails silently.
- Validation of user input on the server, not only in the form.
- Logging. The host's runtime logs are the minimum. An error tracker such as Sentry shows which page failed and how often.
> Tip: Before launch, open the browser tools, set the network to offline and click through every screen. Anything that goes blank or spins forever is a missing error state.
## What does a pre-launch check look like in practice?
It is a fixed sequence that starts with what can hurt users and ends with polish. When someone hands me a repository, this is the order I work in:
- Clone it and run a production build, not the dev server. The errors that will stop the deploy show up here.
- Read the database rules or RLS policies and run the two-account test.
- Search the code and the built bundle for secret keys.
- Trace one payment end to end in Stripe test mode: checkout, webhook, database write, the user's screen updating.
- Set the production environment variables, auth redirect URLs and domain, then deploy.
- Sign up as a brand new user on a phone, on the live URL, and go through the main workflow.
- Turn the network off and feed the forms bad input to find blank screens.
- Write down what was wrong and what changed.
Picture a subscription app built in Lovable with Supabase and Stripe. A typical set of findings would be two tables with RLS disabled, a checkout with no webhook behind it, a Site URL still set to localhost:3000, and a paid feature unlocked by the redirect to the success page. That is four fixes, none of them large, and they are the difference between a demo and a product people can safely pay for.
## How much does it cost and how long does it take?
Less than most founders expect, because the problems are specific. My pricing for this work is fixed:
- Quick Fix, from $60, 2 days: one bug or error fixed and explained. A failing build or a broken login redirect fits here.
- Fix Plus Features, from $200, 5 days: several fixes plus a feature or integration added, for example locking down the database and wiring up Stripe webhooks.
- Finish and Launch, from $600, 10 days: taking the app from stuck to live in production, deployed to Vercel with a custom domain.
What moves a project between tiers is the number of problems and the state of the code, not the tool that produced it. Every project ends with a short write-up of what was wrong and what changed.
I keep what works and fix what does not. A rewrite only comes up if it is truly cheaper for you than repairing what is there.
## When should you stop prompting and hire help?
When the same error has come back three times, or when the problem is one you cannot see from the screen. AI builders are good at producing new screens and weak at reasoning about a whole system. Security rules, webhooks and environment settings also live partly outside the code, in dashboards the tool cannot open.
Good moments to bring in a developer:
- Before you take the first real payment.
- Before you store anything sensitive about other people.
- When each fix breaks something that used to work.
- When the deploy fails and the error message means nothing to you.
To make a handoff fast, put the code in a GitHub repository, give access to the database and hosting projects, and list what works and what is broken. That is enough for me to start.
## The bottom line
A Lovable or Bolt app that works locally is close, not finished. Check the database rules, the Stripe webhook, the environment variables, the duplicated code and the error states, in that order, before real users arrive. Each one is fixable in a few hours by someone who reads the code directly. If you are stuck on any of these, I fix and launch AI-built apps as a fixed-price service.`,
  },
  {
    slug: 'nextjs-vs-wordpress-small-business',
    title: 'Next.js vs WordPress for a small business website in 2026',
    description: 'A plain comparison of speed, cost, SEO and maintenance for owners deciding how to build their next website.',
    date: '2026-11-16',
    updated: '2026-11-17',
    keywords: ['Next.js vs WordPress', 'best website platform small business', 'custom website vs WordPress'],
    service: 'nextjs-website-development',
    shortAnswer: 'For a small business that wants a fast, secure site that ranks well without constant plugin updates, Next.js is the better choice. WordPress still makes sense if you plan to rearrange page layouts yourself every week.',
    faqs: [
      { q: 'Is Next.js better than WordPress for SEO?', a: 'Next.js sites are usually faster and ship cleaner HTML, and page speed is a ranking factor. Both can rank well when the content is good.' },
      { q: 'Is a Next.js website more expensive?', a: 'The build can cost about the same, and hosting on Vercel is often free at small business traffic, while WordPress adds yearly costs for premium themes, plugins and managed hosting.' },
      { q: 'Can I edit a Next.js website myself?', a: 'Yes, when a simple CMS or admin panel is added. Thomas Osayi includes one on larger builds.' },
      { q: 'Is WordPress less secure than Next.js?', a: 'A WordPress site has more to attack: a public login page, a database and plugins from many authors that all need updates. A pre-built Next.js site has no plugins to patch and far less exposed.' },
      { q: 'Can I move my WordPress site to Next.js without losing my Google rankings?', a: 'Yes, if every existing URL is kept or given a permanent 301 redirect to its new address, and the titles and content that rank are carried over.' },
      { q: 'How much does a Next.js small business website cost?', a: 'Thomas Osayi builds a one-page Starter Site from $150, a Business Site of up to 5 pages from $450, and a Full Custom Build from $1,200.' },
    ],
    takeaways: [
      'Next.js pages are built ahead of time and served from a global network, while a typical WordPress site assembles each page on every visit.',
      'WordPress is free to install, but themes, plugins and managed hosting add yearly costs that a Next.js site on Vercel usually avoids.',
      'Outdated plugins are the most common way small business WordPress sites get hacked, and a Next.js site has no plugins to patch.',
      'WordPress still wins if you want to rearrange page layouts yourself every week or run a publication with several authors.',
      'When moving from WordPress to Next.js, keep your URLs or add 301 redirects so existing rankings carry over.',
    ],
    body: `Most small business owners are told to use WordPress. It is a fine tool, but it is not the only choice, and for many businesses it is no longer the best one.
I build small business sites in Next.js, so I have a side in this. I will still tell you where WordPress wins, because picking the wrong tool costs more than picking the less familiar one. This is a plain comparison of speed, cost, SEO, maintenance and editing, written for an owner and not for a developer.
## What is the actual difference between Next.js and WordPress?
WordPress is a content management system you install and extend with themes and plugins, and Next.js is a framework a developer uses to build a site from code. That one difference explains almost everything else in this comparison.
With WordPress, a page is assembled when someone visits. PHP runs on the server, asks a database for the content, passes it through the theme and every active plugin, and sends back the result. You manage it all from a dashboard, and almost any feature you can think of exists as a plugin.
With Next.js, most pages of a small business site are built once, ahead of time, into finished HTML. Those files are copied to servers around the world and handed straight to visitors. There is no dashboard unless one is built or connected, and features are written or integrated by the developer.
So the trade is this:
- WordPress gives you a ready-made editor and a plugin for everything, at the cost of more moving parts.
- Next.js gives you a faster, simpler site in production, at the cost of needing a developer for structural changes.
## Which one is faster?
Next.js, in most real comparisons, because the work is done before the visitor arrives. A Next.js site is pre-built into fast static pages and served from a global network. A typical WordPress site runs PHP, a database and a stack of plugins on every visit.
### Why WordPress sites get slow
WordPress itself is not the problem. What slows a site down is what gets added to it: a page builder that sends its whole stylesheet to every page, a slider, a form plugin, a chat widget and analytics, each loading its own scripts whether the page uses them or not.
### What Next.js does by default
- Pages are pre-rendered, so the browser receives complete HTML straight away.
- The image component resizes photos for each screen, serves modern formats and lazy loads anything below the fold.
- Fonts load through next/font, which hosts them with the site and stops text from jumping as it loads.
- Each page loads only the JavaScript it needs.
### Why speed matters to a business
Page speed affects both Google rankings and how many visitors stay. Most people looking for a local business are on a phone, often on a mobile connection, and someone choosing between three businesses will not wait for the slow one.
> Tip: Run your current site through PageSpeed Insights at pagespeed.web.dev and read the mobile result, not the desktop one. Mobile is what most of your customers see.
## What does each one really cost?
The build can cost about the same, and the difference shows up in the yearly bills. WordPress itself is free, but premium themes, plugins and managed hosting add up every year. A Next.js site on Vercel usually costs nothing to host at small business traffic levels.
### WordPress running costs
- Hosting. Cheap shared hosting costs a few dollars a month and is often slow. Managed WordPress hosting, which handles updates, backups and caching for you, typically costs tens of dollars a month.
- A premium theme or page builder licence, often renewed yearly.
- Premium plugins for forms, booking, SEO, backups and security. Many are yearly subscriptions, and several of them together can reach a few hundred dollars a year.
- Someone's time to apply updates and fix what they break.
### Next.js running costs
- Hosting on Vercel, which is free or close to it for most small business sites.
- The domain name, which you pay for on either platform.
- Developer time when you want something structural changed.
### Build cost
For reference, my own packages are a Starter Site from $150 in 7 days (a polished one-page site with a contact form and SEO basics), a Business Site from $450 in 14 days (up to 5 pages, a booking or quote form and local SEO setup), and a Full Custom Build from $1,200 in 21 days (a multi-page site with custom features, a CMS or admin tools).
The fair summary is that WordPress is cheaper on day one if you set it up yourself with a free theme. Over several years, a lean Next.js site with no licences to renew is usually the cheaper one to own.
## Which one is better for SEO?
Both can rank well when the content is good, and Next.js makes the technical side easier to get right. Google ranks pages, not platforms. It looks at whether the page answers the search, whether it loads fast and whether its content is easy to read.
### Where Next.js helps
- Core Web Vitals. Google's three page experience measures are Largest Contentful Paint (how soon the main content appears), Interaction to Next Paint (how quickly the page responds to a tap) and Cumulative Layout Shift (how much things jump around while loading). Lean, pre-built pages tend to pass these without special effort.
- Clean HTML. The page contains the content and little else, so there is less for a crawler to wade through.
- Metadata in code. Titles, descriptions, the sitemap, robots rules and schema markup are written once and generated for every page, so none get forgotten.
### Where WordPress helps
Plugins such as Yoast SEO and Rank Math put titles, descriptions and sitemaps in front of a non-technical owner, and publishing a new article takes minutes. If your plan is to publish a lot of content yourself, that convenience is real.
### What matters on both
For a local business, the platform is a small part of the result. Your Google Business Profile, your reviews, accurate hours and address, a page for each service and honest pages for the areas you serve do more than any framework. On the site itself, LocalBusiness schema lets Google read the name, address, phone number and opening hours directly, and they should match the Business Profile exactly.
## Which one is safer and easier to maintain?
Next.js, because there is far less to attack and far less to update. WordPress needs regular core, theme and plugin updates, and outdated plugins are the most common way small business sites get hacked. A Next.js site has no plugins to patch.
A WordPress site has a public login page at /wp-login.php, a database, and code from many different authors running on your server. Each of those is a door. Keeping them shut means applying updates promptly, and updates sometimes conflict. A plugin update that disagrees with the theme can take the site down until someone rolls it back.
Sensible WordPress upkeep looks like this:
- Automatic updates for core and for the plugins you trust.
- Regular off-site backups and a tested way to restore them.
- A security plugin or a firewall from the host, and two-factor login for every admin.
- Deleting plugins you no longer use instead of only deactivating them.
A pre-built Next.js site has no public login page and no database of its own exposed to the internet. Maintenance is updating the project's dependencies now and then. If the site has forms or an admin area, those parts need the same care as any application, but the surface is small and you know exactly what is there.
## Can I edit a Next.js website myself?
Yes, if the site is built for it, though this is where WordPress wins: a built-in editor. A Next.js site can match it with a simple CMS or admin panel, which I add on larger builds.
There are three levels, and the right one depends on how often things change:
- Copy in one place. On smaller sites all the text lives in one file. A change is quick for me or for anyone comfortable editing text, and it goes live within minutes.
- A simple admin page. For the things that change often, such as menu items, prices, hours or services, a small password-protected page lets you edit them without touching code.
- A headless CMS. Tools such as Sanity or Contentful give you a full editing dashboard for pages and articles while the site itself stays in Next.js.
What you do not get is drag-and-drop control over layout. In WordPress with a page builder you can move a section, add a column or redesign a page on a Tuesday afternoon. In Next.js the layout is designed once and kept in code. Many owners find that a relief, because the site cannot be broken by accident.
## What about bookings, reservations and quote forms?
Both platforms can do them, and this is where a custom build tends to feel better to the customer. On WordPress you install a booking or form plugin and style it as far as it allows. On Next.js the form is built for the business, so it asks exactly what you need and looks like the rest of the site.
A restaurant is a good example. The visitor is on a phone and wants the menu, then a table or a pickup order. New York Nook, a Russian restaurant in Hollywood, is a site I built this way, with the menu, reservation requests and pickup ordering all on the restaurant's own site.
![New York Nook: a restaurant site I built with online reservations and pickup ordering.](/work/fiverr/newyorknook.jpg)
A service business has a different problem: requests that arrive without the details needed to price them. For Artistic Printing, a commercial printer, I built the website together with a quote intake and management tool, so requests arrive structured and complete and not as a vague email.
![Artistic Printing: a commercial printer's website I built with a quote intake and management tool.](/work/fiverr/artistic.jpg)
If you already use a booking system such as OpenTable, Square or Vagaro, it can be linked or embedded on either platform. The custom route earns its place when the existing tools force an awkward flow on your customers.
## When is WordPress still the right choice?
When you want to change layouts yourself every week, or when publishing is the business. I would not talk anyone out of WordPress in these cases:
- You or a staff member enjoy building pages and want to keep doing it without a developer.
- The site is mainly a blog or news site with several authors who need drafts, roles and scheduling.
- The business already runs on a specific plugin, such as a membership or course system.
- You have a WordPress site that works, loads reasonably fast and is kept up to date. Rebuilding something that is not broken is rarely the best use of money.
Next.js is the better fit when:
- The site has a clear job, such as taking bookings, reservations, orders or quote requests.
- You want it fast on phones and do not want to think about updates.
- A plugin update or a hack has taken your site down before and you do not want a repeat.
- You expect to add custom features later, such as a client portal or an admin tool, and want them on the same stack.
## How do I move from WordPress to Next.js without losing rankings?
By keeping your URLs, or redirecting every old one to its new home, before the new site goes live. Rankings belong to pages at specific addresses. If /services/window-tinting becomes /tinting with no redirect, Google treats the new address as a new page and the old one as gone.
The steps for a rebuild:
- Export a list of every existing URL from the old sitemap and from Google Search Console, including pages you forgot were getting traffic.
- Keep the same paths where possible. Where a path changes, add a permanent 301 redirect in the redirects section of the Next.js config file.
- Carry over the page titles, descriptions and content that already rank. Improve them, but do not delete them.
- Move the images along with their alt text.
- Launch, submit the new sitemap in Search Console, and watch the Pages report for 404 errors over the following weeks.
A careful move should hold its rankings, and the faster pages give them room to improve.
## The bottom line
If you want to change layouts yourself every week, WordPress is reasonable. If you want a fast, custom site that ranks well and does not need babysitting, Next.js is the better fit. For a small business whose site has one clear job, that usually means Next.js, with a simple way to edit the parts that change.`,
  },
];

export const posts: Post[] = [...postsBatch2, ...morePosts, ...basePosts];

export const serviceBySlug = (s: string) => services.find((x) => x.slug === s);
export const caseBySlug = (s: string) => caseStudies.find((x) => x.slug === s);
export const postBySlug = (s: string) => posts.find((x) => x.slug === s);
