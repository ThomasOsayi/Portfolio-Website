// Search-facing pages: services, case studies and articles.
// Body text uses a tiny format, one block per line: "## " heading, "### " sub-heading, "- " bullet, "> " tip callout,
// "![caption](/path.jpg)" image, "@video(/path.mp4|/poster.jpg|caption)" video, anything else is a paragraph.

import { morePosts } from './posts-more';
import { postsBatch2 } from './posts-batch2';
import { postsBatch3 } from './posts-batch3';
import { postsBatch4 } from './posts-batch4';
import { genPosts } from './gen';
import { caseStudiesGenA } from './gen/cases-a';
import { caseStudiesGenB } from './gen/cases-b';

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
      { name: 'Quick Fix', price: 'from $60', days: '2 days', text: 'One bug or error in an app that otherwise works, fixed and explained.' },
      { name: 'Fix Plus Features', price: 'from $200', days: '5 days', text: 'Up to three fixes plus one small feature or integration.' },
      { name: 'Finish and Launch', price: 'from $600', days: '10 days', text: 'For apps whose core features already work: fix what blocks launch and ship it to production.' },
    ],
    related: ['sqwad', 'guardian-mindcare', 'thehoopgang'],
    faqs: [
      { q: 'Which tools do you work with?', a: 'Code from Lovable, Bolt, v0, Replit, Cursor, Windsurf and Claude, usually React or Next.js with Firebase or Supabase.' },
      { q: 'Do I need to give you my whole codebase?', a: 'Access to the repo (GitHub is easiest) and the hosting or database project is enough.' },
      { q: 'Will you rewrite everything?', a: 'No. I keep what works and fix what does not. A rewrite only comes up if it is truly cheaper for you.' },
      { q: 'Can I build a rough version with AI and pay the fix price instead of the MVP price?', a: 'Fix pricing is for apps whose core features already work. I review the code before quoting, and if most of the product still needs building, the quote follows the build packages, usually less the parts your version already gets right.' },
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

const baseCaseStudies: CaseStudy[] = [
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
SQWAD is UGC creator program software for Shopify brands. It gives each brand a branded portal where creators apply, receive product, submit content, join competitions and get paid, with the brand's own name and colors on it.
![The SQWAD homepage on mobile: "Your creators drive sales. Now you can prove it."](/shots/sqwad-home-mobile.jpg)
### Applications and approvals
Creators apply through the brand's own portal instead of a generic form or a DM. The application collects handles, follower counts, best videos, sizes and a verified shipping address in one form, so the brand has what it needs to judge fit and to ship in the same place. Approving a creator takes one click.
Brands can also list their program in the SQWAD brand directory, where creators browse brands that send product and pay commission, and apply in a couple of minutes. Creators never pay anything. Brands pay SQWAD to run the program, and a creator keeps one login and one dashboard across every brand they work with.
### Product seeding through Shopify
Once a creator is approved, product goes out and content comes back. A brand connects its Shopify store once and picks which products and variants creators can request. Approving a creator can create the sample order in Shopify with the exact variant and shipping address, plus a note linking back to the SQWAD application.
The team fulfills that order through its normal flow or its 3PL. When tracking is added, SQWAD stores the order number, moves the creator to Shipped, emails them, and starts the posting deadline on delivery. Brands choose per program whether product goes out free or creators buy it and are refunded once their video is approved.
![SQWAD's product seeding page: applications, Shopify sample orders, delivery and posting deadlines.](/shots/sqwad-product-seeding.jpg)
### Content review
TikToks, Reels, raw uploads and photo slideshows land in one review queue, ready to approve and run as ads. Deadlines and reminders do the chasing that used to happen in messages, so the brand can see what has shipped and what each creator has submitted without asking anyone.
### Competitions, retainers and cohorts
Brands can run competitions among their creators, with leaderboards showing who is ahead. In a creator program the first post is the easy one. A leaderboard gives creators a reason to keep posting after it.
There are two kinds. Sales competitions rank creators by the revenue their videos and links drive over a week or a month. Volume competitions reward the creators who post the most approved videos in a period, which suits a brand that needs fresh ad creative fast. Smart retainers set a monthly goal with a fixed bonus, for example 40 approved videos for an $800 bonus, and show the creator how many they have left. Top creators can also lead cohorts, small teams whose content they review, earning bonuses as the team grows. Prizes and bonuses land in Payouts with everything else.
![SQWAD's creator competitions page: sales and volume competitions, live leaderboards and smart retainers.](/shots/sqwad-creator-competitions.jpg)
### Payouts and attribution reporting
This is the core of the product. Every Meta ad is traced back to the creator whose content made the sale, and attribution reporting shows the brand what each creator's content produced. Payouts sit next to that data, so paying creators and knowing what they earned for the brand happen in the same place.
The mechanism is deliberately simple. The brand signs in with Facebook and picks its ad account, with no API keys or developer work. Each approved video gets a short ID, and that ID goes in the ad name when the brand launches the ad. SQWAD reads the ad results and matches each ad's spend and revenue back to the creator and the video behind it.
From there the brand sees ad spend, attributed revenue, orders and return on ad spend for every creator and every video, and can rank creators by the revenue they drive instead of by followers or views. Commission is calculated on attributed sales. Every creator also gets a share link of their own, and each creator has a dashboard with their revenue and earnings, which keeps the best ones motivated.
![SQWAD's revenue attribution page: every Meta ad traced to the creator and video that made the sale.](/shots/sqwad-creator-revenue-attribution.jpg)
## Technical decisions and why
- Next.js and TypeScript. Both sides of the product, the brand's view and the creator's portal, are web apps, and Next.js handles pages and server code in one project. Types run from the data layer to the component, which matters when the numbers on screen are money.
- Firebase. I built SQWAD on Firebase because creator portals need realtime updates. When a creator submits content or a status changes, the brand should see it without refreshing the page.
- Multi-tenant data. SQWAD separates brands, their team members and creators, with each brand's data isolated. In any multi-tenant product that isolation has to be enforced where the data lives, not only in the interface, because one customer seeing another customer's numbers is the kind of bug a product does not recover from.
- Shopify and the Meta Ads API. The brands on SQWAD sell on Shopify and advertise on Meta, so those are the two systems that have to be connected. The store knows what sold, the ad platform knows which ad ran, and SQWAD ties the ad back to the creator behind the content.
- Matching by video ID. Putting a short ID in the ad name means a brand can start without pixel changes or a developer. The trade-off is that the ID has to make it into the ad name, so every approved video gets its ID at the moment of approval, ready to use when the ad is launched.
- Stripe. Stripe is the payment layer. Holding card details or payment state myself would add risk and no value.
## Pricing that follows the program
SQWAD's public pricing starts with a free first month. After that, Starter is $99 a month for up to 5 active creators, with applications, Shopify samples, content review, Meta revenue attribution, competitions and payouts. When a month tracks $10k or more in creator revenue, the next month moves to Pro at $399, with up to 15 active creators, cohorts, smart retainers and team seats. At $100k in a month it moves to Scale at $999 plus 1% of that month's tracked revenue, with unlimited creators.
A slower month moves a brand back down, a brand can upgrade whenever it wants the features, and it is always billed at the higher of the plan it picked and its revenue tier. There is no setup fee and no contract.
![SQWAD pricing tiers: Starter $99 a month, Pro $399 a month, Scale $999 a month plus 1%, first month free.](/shots/sqwad-home-s4.jpg)
## Result
SQWAD's first live program is TheHoopGang, the brand whose portal started all of this. SQWAD's published TheHoopGang case study reports that in under 10 months, 62 creators made the videos behind 759 Meta ads, and SQWAD traced $500K+ in revenue back to them at 3.7x return on ad spend. Creators have earned $41K+ in commission, paid on results.
![SQWAD's case study page for TheHoopGang: $500K+ attributed revenue, 3.7x ROAS across 759 creator ads, $41K+ commission paid, 62 creators.](/shots/sqwad-case-studies-thehoopgang.jpg)
I still build the product myself and sign the brands that run their creator programs on it.
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
- Plain answers about coverage, out-of-network care and paying without insurance, before anyone books
- A separate, private portal for each role: therapists, supervisors, trainees, clients and admins
- Permissions strict enough that each role sees only what it should
- A way for licensed clinicians, associates and students to join without creating accounts the practice has not approved
## How I approached it
Start from the roles, not the screens. With five kinds of user, the question that decides everything else is who can see what. Once each role has a list of what it may read and what it may change, the screens follow from that list fairly directly, and so do the access rules.
The public search comes from the same thinking applied to the client. Insurance is the first filter because it is the first question a client has.
The third principle was to say the uncomfortable things early. What will I pay, what if my plan is not listed, what if the first therapist is not a fit: those questions decide whether someone reaches out at all, so the site answers them in writing instead of leaving them for a phone call.
## What I built
### Insurance-aware therapist matching
The public site leads with a therapist search by insurance. The homepage message is "Real therapy, in network with your plan", and the search sits with it. The platform matches clients with licensed therapists and supervised associates who take their insurance, so the first thing a visitor learns is whether the practice can see them at all.
![The Guardian MindCare homepage: "Real therapy, in network with your plan", with search by type of care, insurance and session format.](/shots/guardian-home.jpg)
The search takes three inputs: the type of care, the client's insurance and how they want to meet. Below it, therapist cards show each clinician's credential, such as LCSW, AMFT or APCC, their focus areas and whether they are accepting new clients. Licensed therapists and associates appear in the same results, with associates working under licensed clinicians, which widens the set of people a client can actually book.
### Get matched
Clients who would rather not browse can ask to be matched. The intake opens with one question, who the care is for: myself, my child or teen, or a family member I am the legal representative for. The rest covers goals, preferences and insurance. The site says a real person reviews every intake and pairs the client with a clinician, usually within 48 hours, and that switching clinicians later costs nothing.
![The get matched intake, step one: "Who is this care for?"](/shots/guardian-get-matched.jpg)
### Insurance and coverage
The coverage page lists the plans the practice is in network with, including Aetna, Anthem Blue Cross, Blue Shield of California, Cigna, UnitedHealthcare and Optum, Kaiser Permanente in Northern and Southern California and several Medi-Cal plans, along with employee assistance programs.
![The insurance and coverage page, listing the plans Guardian MindCare is in network with.](/shots/guardian-pricing.jpg)
It also covers the cases a plan list does not. Out-of-network clients get a monthly superbill they can submit for reimbursement. A limited number of reduced-fee places are held for people whose coverage does not reach. Anyone paying out of pocket can request a written Good Faith Estimate. And for clients using insurance, the practice verifies benefits with the insurer and tells the client what they will pay, in writing, before the first session is booked.
### Services
The services page sets out the formats in plain terms: individual therapy in 50-minute sessions, couples therapy in 60-minute sessions, family and group therapy, teletherapy across California, specialized care for trauma, identity and grief, and medication management coordinated with the client's therapist. A separate section explains placements for practicum students and associates and how university programs can request one.
![The services page: individual, couples and family therapy.](/shots/guardian-services.jpg)
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
### Bringing clinicians in
The careers page offers a path for each kind of clinician: licensed clinicians, prescribers, associates working toward licensure, practicum students, and university programs requesting a placement. An applicant describes their license or training, uploads documents and shares the work they hope to focus on.
The order of what happens next is the part I care about most. The team checks each license against the issuing board's registry by hand before any account is created. Only once a license verifies does the clinician receive an invitation to set a password and build a public profile. An account never exists before the practice has decided the person should have one.
![The careers page for clinicians: licensed clinicians, associates and students in placement.](/shots/guardian-careers.jpg)
Associates are supported on three supervision tracks, ASW, AMFT and APCC, and the placement side describes BBS-aligned hour tracking, documented competency sign-offs and formal evaluation cycles.
### Help for every audience
Clients have a help center with article collections on starting care, using the client portal to sign in and request or change sessions, insurance and billing, ongoing care, switching or pausing care, and getting support. Clinicians and trainees have their own provider help center. The site is available in English and Spanish, and every page carries crisis information: call or text 988.
![The client help center, with searchable article collections.](/shots/guardian-help.jpg)
## Technical decisions and why
- Next.js and TypeScript. The public pages have to load fast and be readable by search engines, because search is how new clients arrive. The portals have to be a real application. Next.js does both in one project. TypeScript lets a role be defined as a type, so the compiler complains when a screen forgets to handle one of the five.
- Firebase. Sign-in, the database and the access rules come from one platform. That keeps the system small, with no separate server to run and patch.
- Role-based access. The general rule with roles is that the check has to happen on the server or in the database rules, never only in the interface. In a Firebase project the usual pattern is to attach the role to the signed-in user, for example as a custom claim on the auth token, and then write security rules that compare that role and the user's ID against each record. Hiding a menu item protects nothing if the data behind it can still be requested directly.
- Invitation-only accounts for clinicians. Creating a clinician's account only after their license is verified means there is never a moment when an unverified person holds a provider role. That is simpler and safer than creating the account first and trying to restrict it until someone checks.
- Privacy by design. In healthcare work generally, the safest data is the data you never collect. A practice website should ask only for what is needed to schedule a consultation. Clinical detail belongs in the practice's clinical records system, not in a website form. The mental health self-check tools on the site follow the same rule: the page says answers stay on the page and are never saved or sent.
## Result
One platform runs both the client-facing search and the practice's internal workflow. Clients can search for a therapist by insurance from the homepage or ask to be matched, read exactly how their coverage works before they book, and find help in English or Spanish. Therapists, supervisors, trainees, clients and admins each have a portal built for their role, and new clinicians reach those portals only after their license has been checked.
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
The cost of that uncertainty grows with the program. With a handful of creators, someone on the team can keep it in their head. With dozens, the questions pile up in DMs: did my package ship, did you see my video, what happens next. Every one of those messages is a status question the team has to answer by hand.
## What the brand needed
- One place for creators to apply and for the team to approve or deny them
- A record of which product and size each creator chose and where the package is
- A way for creators to submit content and for the team to see who has delivered
- A gifting flow where the gear is refunded once the creator posts
- A view of the whole program at a glance
- Terms a creator can read before applying, so the offer is clear from the first screen
## How I approached it
The program is modelled as a pipeline with one status per creator: application received, approved, shipped, delivered, content completed. Every screen in the portal is a view of that status, for one creator or for all of them. Because the creator's dashboard and the team's dashboard read the same record, they cannot disagree about where things stand.
The second principle was to show the creator the same pipeline the team sees. If a creator can open a page and see that their package was delivered and their video is due, they do not need to send a message asking. Most of the work of running a creator program is answering status questions, and the cheapest way to answer one is never to receive it.
## What I built
### Landing page and application
The portal opens with a landing page that explains the offer and gives two actions: apply, or log in as an existing creator. The headline is "Get it free. Post it. Get paid." Under it, the page states the terms plainly: free to apply, no follower minimum, the gear ships free, and creators earn 8.5% of the revenue they drive, rising to 10%.
![TheHoopGang creator portal homepage: "Get it free. Post it. Get paid."](/shots/hoopgang-home.jpg)
The next section breaks the program into four steps, and the last one repeats: apply with your socials, your sizes and one video you are proud of; get your gear; post one TikTok or Reel within 14 days of delivery and submit the link in the portal; then earn a cut of every sale the video drives. Laying it out this way answers the questions a creator would otherwise ask in a DM before they have even applied.
![The "four steps" section: apply, get free gear, post one video, earn on every sale.](/shots/hoopgang-home-s1.jpg)
The application starts from a verified email. It then asks for Instagram and TikTok handles, follower counts, a link to the creator's best content and the product they want. The start screen sets expectations: four steps, about five minutes, and it works whether the creator posts on TikTok, Instagram or both. The portal also has a Japanese version, which matters for a brand expanding into Japan.
![The creator application start screen.](/shots/hoopgang-apply.jpg)
### Application review
Each application opens in a review panel for the team. It shows the creator's reach, both social accounts, the content sample, height and weight so the team can recommend a size, and the shipping address, with buttons to approve or deny.
### Creator dashboard
An approved creator gets a dashboard with their current status, how many videos they have posted, the time left, and the product and size they chose. A timeline walks through the journey from application received to content completed. A package panel shows tracking once the gear ships, and a submission area is where content is handed in.
![The creator dashboard: status, videos posted, the chosen product and a journey timeline from application to completed content.](/images/hoopgang/creator-dashboard.png)
### Earnings creators can see
The homepage previews what the dashboard shows once a creator is earning: revenue per video, updated daily, next to the actual clip. Creators can request a payout once they have $50 or more, through Venmo, Cash App, Zelle or PayPal, and competitions, milestone rewards and product drops stack on top of what they already earn. The figures in that preview on the homepage are illustrative.
![The earnings section: see what every video earned, cash out and compete for prizes (illustrative figures).](/shots/hoopgang-home-s2.jpg)
Showing earnings per video does two jobs. It tells a creator their work counted, with a number instead of a thank-you. And it tells them which of their videos sold, which is the most useful brief a brand can give.
### Admin dashboard
The team's home screen counts total applications, applications pending review, active collaborations, completed ones and a ghost rate. Below that is a table of every creator with their TikTok handle, followers, status, product, tracking number, content progress and rating. It can be filtered by status, searched by name or handle, and narrowed by minimum followers.
Each row opens a creator page where the team changes the creator's status and adds the tracking number for their shipment.
### Refundable gear gifting
Creators claim gear, submit their content and get refunded once they post. Tying the refund to the content means the creator knows exactly what earns it, and the brand is not giving away gear that never turns into posts.
The public page today frames the offer as free gear shipped to approved creators, with one video due within 14 days of delivery. Either way the principle is the same: the gift is tied to a post, and the portal tracks whether the post happened.
### Answers before anyone asks
The bottom of the homepage is an FAQ built from the questions creators actually ask: is the gear really free, what if I don't post, how fast it ships, how many followers are needed, how much a creator can earn, whether old videos earn more when a rate goes up, and how earnings reach them. It ends with the same call to action as the top of the page: applications are open.
![The FAQ and the "Applications are open" call to action.](/shots/hoopgang-home-s4.jpg)
## Technical decisions and why
- Postgres. I built this portal on Postgres because its data is relational. A creator has an application, an application has a product and a size, a shipment has a tracking number, and content belongs to a creator. A question like "which approved creators have a delivered package and no videos" is a join and a filter, which is what a relational database is for.
- Prisma. Prisma sits between the app and Postgres. The schema is declared in one file, changes go through migrations, and the generated client is typed, so a query that asks for a field that does not exist fails at build time instead of in front of a user.
- Next.js and TypeScript. The public pages, the creator area and the admin area run as one Next.js app, and the same types describe a creator in the database, on the server and in the component.
- One status per creator. Every creator sits at exactly one stage of the pipeline, so the counts on the admin dashboard and the timeline on the creator's dashboard describe the same thing. One status is easier to keep consistent than several overlapping flags.
## From one portal to SQWAD
Building this portal is what showed me how much of a creator program repeats from brand to brand: applications, shipping, content, payment. It also showed me the question the portal could not answer on its own, which is which creator's content actually made a sale.
That became SQWAD, the creator program software I now build and run. TheHoopGang's program runs on SQWAD today, and the portal's footer says so: "Creator program powered by SQWAD". The SQWAD case study covers what the program has tracked since then.
## Result
The portal manages 50+ active creators in one place. Applications, shipping, content and status live in one system, and creators can see their own status, deadline and earnings without messaging the team.
## What I would tell a brand planning a similar portal
Most brands should start with existing creator program software, because applications, product seeding, content tracking and payouts are already built. A custom portal is worth it when your rewards, approvals or integrations are unusual enough that standard tools force workarounds.
If you do build, define the stages first and show them to the creator. Most of the messages a program generates are status questions.
Publish the terms on the first screen. Free gear, one video, a deadline and a commission rate are easier to agree to when nobody has to ask for them.
Collect what you need to ship correctly inside the application, such as size and address, so an approval can lead straight to a shipment.
Give the team one table they can filter, so finding the creators who have not posted takes seconds.
Show creators what their videos earned. A number next to a clip is the strongest reason to post the next one.`,
  },
  {
    slug: 'laceup',
    name: 'LACEUP',
    kind: 'E-commerce storefront + admin dashboard',
    metaTitle: 'LACEUP Case Study: Next.js Apparel Store with Admin Dashboard',
    description: 'Custom Next.js storefront for a basketball apparel brand, with colorway filtering, product pages, a Firebase admin dashboard and built-in store analytics.',
    image: '/work/fiverr/laceup.jpg',
    url: 'https://laceup-store.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Vercel'],
    service: 'nextjs-website-development',
    body: `## The goal
Give a new basketball apparel brand a storefront that looks like it belongs next to the big athletic labels, plus a back office the owner can run himself.
LACEUP sells practice gear and everyday fits for hoopers. The first drop is fifteen products across tops, shorts, layers, pants and accessories, most of them in more than one colorway. The brand wanted a launch-ready store to show people, without wiring up live payments yet.
A new brand has no reputation to lean on, so the store has to do that work. A shopper who has never heard of LACEUP decides in a few seconds whether it feels like a real label or a side project, and that decision is made almost entirely on photography, type and how smoothly the pages behave.
## What the brand needed
- A home page, shop and product pages that feel premium, on desktop and on a phone
- Filters that actually match the catalog: category, size and color
- A size guide, so shoppers buying online can pick the right fit
- A contact form and newsletter signup that land somewhere the owner can see
- A dashboard showing what people look at and add to their bag
- A logo that fits the vibe of the store
## How I approached it
Study the brands people already compare you to. I worked from how Nike, Alo and Lululemon handle the same problems: big editorial photography, quiet type, generous spacing, and product cards that show the next colorway when you hover. A small brand gets taken seriously when the details match what shoppers are used to.
The second principle was to keep the catalog as data. Every product, colorway, size and photo lives in one typed file, so the shop grid, filters, product pages and dashboard all read from the same source and never disagree.
The third was to sell the drop, not just list the products. The first collection has a name, Drop 01, the practice collection, and the home page treats it like a launch, with a story and looks to shop instead of a bare grid.
## What I built
### A home page built around the drop
The home page opens on a full-width hero with the line "Built for the run" and two actions: shop the drop or shop all. A slim bar above the navigation carries the store's promises, free US shipping on orders over $100 and free 30-day returns, so they are visible before a shopper scrolls.
![The LACEUP storefront hero: "Built for the run".](/shots/laceup-home.jpg)
Below the hero, new arrivals show each product's name, price and a one-line description, with colorway swatches and a quick add button so a shopper can put something in their bag without opening the product page.
![New arrivals on the LACEUP home page, with colorway swatches on each card.](/shots/laceup-home-s1.jpg)
Further down, the page shops by category, then switches to an editorial "Shop the look" section. Look 01, After practice, pairs the hoodie, the reversible short and the crew socks with a line of copy about going from the last drill to the walk home. A short brand story, about the founder's frustration with practice gear that looked like a uniform, sits above the footer, where an email signup offers early access to Drop 02.
### A shop with honest filters
![The LACEUP shop-all page with category filters, color and size options and product cards.](/shots/laceup-shop.jpg)
The shop lists all fifteen styles with counts by category: five tops, two shorts, two layers, two pants and four accessories. Filters only offer options that exist in the current category, show a count next to each, and disable the ones that would return nothing. Colors are grouped into families like Charcoal, Cream, Court Orange and Heather Gray, so a shopper is not choosing between six near-identical swatch names. Picking a color also switches each card to that colorway, and the category is kept in the URL so a filtered view can be shared. Sorting covers featured, newest and price in both directions.
### Product pages
![A LACEUP product page for the $52 Reversible Mesh Jersey, with size selector and add to bag.](/shots/laceup-products-reversible-mesh-jersey.jpg)
Each product page shows the current colorway, the other colorway or a second pose, and a standalone shot of the product. The product photography was generated to stay consistent from shot to shot, so the same garment looks the same in every image instead of a random mix of stock photos.
The copy is written to answer the questions a shopper has at that moment. The Reversible Mesh Jersey, for example, explains that it flips from court orange to cream so one top covers both sides of the scrimmage, and the fabric and fit section gives the material and the cut. Shipping, returns and care sit in their own sections, and a "Complete the look" row suggests pieces that go with it.
### A size guide people can use
![The LACEUP size guide, with chest, waist, hip and inseam measurements by size.](/shots/laceup-size-guide.jpg)
Fit is the biggest worry when buying apparel online, so the size guide is a page of its own, linked from the top bar and from every product page. It lists chest, waist, hip and short inseam in inches for XS through 2XL, explains how to take each measurement, gives a rule for shoppers between sizes, and notes the model's height and the size the model is wearing.
### Mobile first, not mobile later
![The LACEUP shop and a product page on a phone.](/images/laceup/mobile.jpg)
Every page was checked at phone width. The gallery swaps the wide product shot for a taller crop on mobile, so the product is never cut off.
### Fast images
Photos load with blurred placeholders generated at build time and are cached for a year, so the grid never flashes empty tiles. The hover colorway image only loads once a shopper actually points at a card.
### An admin dashboard on Firebase
![The LACEUP admin overview: visits, product views, adds to bag, checkout attempts, a daily chart and top products.](/images/laceup/admin.jpg)
The owner signs in to a private dashboard with five sections. Overview shows visits, product views, adds to bag, checkout attempts, new subscribers and unread messages for 7, 30 or 90 days, with a daily chart, top products, traffic sources, devices and a live activity feed. Messages holds every contact form submission with search and read status, and Subscribers lists every newsletter signup with a CSV export.
![The Products view: views, adds to bag and add rate for every product, with the most-added colorway and size.](/images/laceup/admin-products.jpg)
The Products view ranks every product by views and adds to bag, so the owner can see which pieces and colorways people actually want before reordering.
## Technical decisions and why
- Next.js and TypeScript. Pages are pre-rendered and the catalog is typed, so a missing photo or a misspelled colorway fails the build and not the store.
- Firebase. Firestore and Firebase Auth gave the brand a database, sign-in and live updates without a server to maintain. Security rules validate every write, keep submissions private to admins, and only allow anonymous activity events with no personal data.
- First-party activity tracking. Visits, product views, adds to bag and checkout attempts are recorded straight to Firestore, which is what powers the dashboard. Vercel Analytics runs alongside it for page-level traffic.
- Filters derived from the catalog. Because the filter options are computed from the same product data as the grid, adding a new colorway or size to the catalog file adds it to the filters automatically, with the right counts. Nobody has to remember to update a separate list.
- No live payments yet. The brand asked for a showcase store first, so checkout is a demo flow. The catalog and bag are structured so Stripe can be added later without reworking the pages.
## Result
LACEUP launched with a storefront, a logo and an admin dashboard, delivered inside a 14-day window. The store presents fifteen styles in four color families with filters that always return results, product pages with consistent photography, and a size guide shoppers can trust. The owner can see who is browsing, what they add to their bag and who wants to hear about the next drop, all from one login.
## What I would tell a brand planning a similar store
Keep products in one structured place. Filters, product pages and reporting stay accurate when they all read from the same data.
Only show filters that return results. An empty grid after a click feels broken, even when it is technically correct.
Photograph or generate product shots consistently. Mismatched images make a new brand look unfinished faster than anything else.
Put shipping and returns where shoppers can see them before they scroll. Those two lines answer the main objection to buying from a brand you have never heard of.
Give sizing its own page with real measurements. It is the question apparel shoppers ask most.
Track adds to bag, not just visits. That is the number that tells you which products to restock.
Launch before payments if you are not ready. A polished store you can share is worth more than a half-built checkout.`,
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
More than one audience reads this site, and they want different things.
- Venue operators want to know what the station is, what it takes to run, and how to ask about getting one.
- Guests with allergies, and the families of children with allergies, want to know which places are prepared.
- Insurers and brokers want to know whether a preparedness program reduces risk across the restaurants they cover.
- Investors want to understand the idea quickly and judge whether the company is real enough to take a meeting.
All of them need the same first few seconds: a clear statement of what VenCare does. After that they split, so the site needed a story that works for every reader and a way for each one to tell the company who they are.
## How I approached it
Early-stage startups need two things from a website: explain a new idea in seconds, and prove it is real. That makes the one-line explanation the first decision, ahead of any design. If a visitor cannot repeat what the company does after five seconds, the rest of the page does not matter.
The AED comparison does that work for VenCare. Almost everyone has walked past a defibrillator cabinet on a wall, so the comparison gives a stranger a picture of the product before they have read a second sentence.
With the line settled, the order of the page follows the questions a visitor asks next: what is it, why does it matter, how does it work in an emergency, what does a venue get, why should I trust this company, and what do I do now.
The second principle was honesty about stage. VenCare is an early-stage company, and parts of the product are still being built. The site says so wherever it matters, which protects the company's credibility far better than pretending to be further along.
## What I built
A custom Next.js marketing site, designed from scratch instead of from a template.
### A hero that names the product and the reader
The hero leads with the line "Like an AED, but for severe allergic reactions", followed by one sentence on what a venue gets: a wall-mounted epinephrine station, kept stocked, in date and ready for staff, on one subscription. Next to the headline, an "I'm a" switch lets the visitor choose venue, guest with allergies or insurer, so each reader can see the message written for them.
![The VenCare hero: "Like an AED, but for severe allergic reactions", with a switch for venues, guests and insurers.](/shots/vencare-home.jpg)
A strip under the hero lists the kinds of places the station is built for: restaurants, stadiums, campus dining, hotels, food halls, workplaces, event venues and schools. It answers "is this for me" for a venue operator without a paragraph of copy.
### A clear story
The site tells the VenCare story in a deliberate order. For a product nobody has a category for yet, order matters more than volume. Each section answers one question and hands off to the next, so a visitor who only scrolls halfway still leaves with the idea.
The "why now" section comes first. It sets out three statistics about food allergy and epinephrine, and names its sources on the page: FARE and peer-reviewed food allergy research. Then it makes the point in one line: when a guest's pen is at home, the only option is waiting for EMS.
![The "why now" section, with its sources named on the page: FARE and peer-reviewed research.](/shots/vencare-home-s1.jpg)
For a health startup, citing sources is not a formality. A statistic with no source on a medical product page reads as marketing. The same statistic with its source named reads as research.
### How it works in an emergency
The emergency section is a step-by-step scroll story: recognize the signs of a severe reaction, pull a pen from the station, inject following the printed steps, and call 911. Each step has one short paragraph, and the visuals change as the reader scrolls, so the sequence is easy to follow and easy to remember.
![The step-by-step "how it works" scroll story.](/shots/vencare-home-s2.jpg)
This section does two jobs. For a venue operator it shows that staff do not need to be medical professionals to use the station. For an investor it shows the team has thought about the moment that matters, not just the hardware.
### What a venue gets
The product section explains the subscription as four parts: the station itself, stocked with adult and child auto-injectors and step-by-step guidance; expiry tracking and restock, so doses are swapped before they expire or after they are used; short staff training with completion tracked per location; and readiness records, with station checks, training and incident logs in one place.
![What venues get: the station, expiry tracking, staff training and readiness records.](/shots/vencare-home-s4.jpg)
Breaking the offer into pieces a reader can take in one at a time matters more than usual here. A medical product carries a higher bar for credibility than most. On a site like this, clean typography, restrained design and plain language do more for trust than effects would.
### A readiness dashboard preview
Below the product, a preview shows what the operator dashboard will look like: station status for every location, items expiring soon and training completion per site. The page labels it clearly as an illustrative preview and says readiness tracking is in development.
![The readiness dashboard preview, labelled illustrative on the page.](/shots/vencare-home-s5.jpg)
Showing the dashboard helps an operator with several locations picture running the program. Labelling it as illustrative keeps that picture honest.
### Sections for guests and insurers
A "VenCare Ready" section describes the window and menu mark a venue receives, a sign for guests with allergies that help is on the wall. A section for carriers, MGAs and brokers frames VenCare as loss control, with a side-by-side comparison of an allergic emergency today and with a station in place.
### A response form for every audience
The call to action invites each reader to help shape the product. The form starts by asking who is responding, a venue or organization, an individual, or an insurer or MGA, then asks short multiple-choice questions such as organization type, number of locations and what would be most useful. As a general rule for forms like this, ask only for what is needed to start a conversation. The team should be notified the moment a form is submitted, and the visitor should be told clearly that it went through.
## Technical decisions and why
- Next.js. Marketing pages are pre-built into static HTML and served from a global network, so the site loads fast on a phone. That matters for a site that gets opened from a link in an email or pulled up in the middle of a meeting. Next.js is also the stack a web product would be built on later, so a marketing site and a future app can share design and code.
- TypeScript. Even on a marketing site, types catch broken component props and missing content before a deploy and not after it.
- Vercel. Every change can be reviewed on its own preview link before it goes live, which suits a small team that wants to check copy carefully. Deploys happen on a push to the repository, and the domain and HTTPS are handled by the host.
- Technical SEO. Metadata, a sitemap and fast Core Web Vitals are part of how I build every site. For a new company that means its name is findable from the day people start searching for it.
- Careful claims. The footer states that VenCare is an early-stage company, that nothing on the site is medical advice or a guarantee of any outcome, and that visitors should always call 911 in an emergency. On a health site, that line belongs on every page.
## Result
A fast, credible site the team uses in sales conversations and investor outreach. When someone asks what VenCare is, there is a link that answers the question, with a version of the message for venues, guests and insurers, and a form that tells the team who is interested and why.
## What I would tell a startup planning a similar site
Write the one-line explanation before anything is designed. If you have a comparison that makes a new product obvious, the way "an AED for allergic reactions" does, lead with it.
Avoid vague taglines that could describe any company. A specific sentence that a visitor can repeat is worth more than a clever one.
Show the proof that is true right now: traction, pilots, a demo video or a product image. Use whatever is strongest and real, and replace it as better proof arrives.
Name your sources. Every statistic on a health or safety site should say where it came from.
Label anything that is not built yet. An honest "illustrative preview" earns more trust than a screenshot that implies a finished product.
Pick one primary call to action for the stage you are in. A page that asks for three things usually gets none of them.
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
- A way to reserve a table
- Pickup ordering from the restaurant's own site
- A place to sell catering and private events
- Hours, address and directions where nobody has to look for them
- A look that matches the room people are about to walk into
## How I approached it
Design for the phone first and count the taps. A restaurant site works when a hungry person can reach the menu, a table or an order within a tap or two of the first screen. Those three actions belong at the top, and everything else, the story, the atmosphere and the photographs, supports them.
The second principle is that the site should feel like the place. A restaurant is choosing how it looks to someone who has not visited yet, so type, colour and photography have to carry the mood of the room.
The third is that every section should end in an action. The dishes lead to the menu, the menu leads to an order, the gallery leads to a reservation, and catering leads to an inquiry. A visitor should never reach the bottom of a section and wonder what to do next.
## What I built
### A hero with three doors
The home page opens on the restaurant's name, "Fine Russian Cuisine" and three buttons: reserve a table, order takeout and view the menu. Those are the three things a visitor came for, so they are the first three things they see.
![The New York Nook hero with Reserve a table, Order takeout and View menu.](/shots/newyorknook-home.jpg)
### Signature dishes
Before the full menu, a carousel shows six signature dishes, one at a time, each with a large photograph, its name and a single line of description. Leading with a few dishes done well gives a first-time visitor a reason to care before they read a list of fifty items.
![The signature dishes carousel.](/shots/newyorknook-home-s1.jpg)
### A full menu with photography
The whole menu is on the site, organised into seven categories: cold appetizers, salads, soups, hot appetizers, main course, desserts and drinks. Each item has its ingredients and its price, so a guest can decide before they arrive.
![The menu section, with categories and prices.](/shots/newyorknook-home-s2.jpg)
As a general rule I build menus as real text on the page, not as a PDF or an image. Text loads instantly, reads well on a phone without pinching and zooming, and can be indexed by Google, so a dish can show up when someone searches for it. Good photographs do more than any copy, so the layout is there to let the best shots carry the page. A gallery of twelve photographs, from the main dining room to the bar and dessert course, sits below the menu.
### Reservations
The reservation section sets out the flow in three steps: pick a date, choose a spot, from window seats and booths to the private dining room, and receive the booking details. The house rules sit right under it: open Tuesday to Sunday from 5 PM to 11 PM, parties of eight or more should call, and the dress code is smart casual.
A reservation needs very little: party size, date, time, a name and a way to reach the guest. Every field beyond that costs bookings. Any reservation flow, on any restaurant site, should also do two things the moment it is submitted. It should notify the restaurant, and it should tell the guest what happens next, on screen and ideally by email. Without a confirmation, guests are not sure the booking went through, so they call to check or book somewhere else.
For rooms that already use a system such as OpenTable, Resy or Tock, linking or embedding it is the alternative. Building the flow into the site keeps the guest on the restaurant's own pages and in its own design.
### Pickup ordering
Guests can order pickup directly from the restaurant's site. Direct ordering matters because pickup orders placed through third-party delivery apps come with a commission on each one. An order placed on the restaurant's own site skips that.
![The pickup ordering page, with menu categories, a cart and pickup time slots.](/shots/newyorknook-order.jpg)
The ordering page shows the whole menu, 51 items in the same seven categories, with a count beside each category so a guest can jump straight to what they want. Popular, new and spicy dishes are tagged. A cart stays on screen as items are added, and the guest picks a pickup time: as soon as possible, with the expected wait shown, or a set time later that day.
A pickup flow has to be clear about a few things no matter who builds it: what is available, when the order will be ready and where to collect it. The home page explains the process in three steps before the guest even opens the order page: browse and select, choose a pickup time and pay, then pick up.
![The order takeout section on the home page.](/shots/newyorknook-home-s4.jpg)
### Catering and private events
Catering has its own page. It covers private dining for up to 40 guests, corporate events, wedding catering and custom menus designed with the chef, then lays out per-person catering packages with guest minimums, a sample menu and an FAQ on booking lead times, dietary requirements and off-site catering across Los Angeles. Every section ends with a way to inquire.
![The catering and private events page.](/shots/newyorknook-catering.jpg)
For a restaurant, events are often the largest single bookings of the month, and they are also the ones most likely to start with a search. A dedicated page with clear packages gives an event planner something to share with whoever is approving the budget.
### Visit
The bottom of the home page carries what people search for most: the address on Sunset Boulevard, the reservations phone number, the hours, a note that the restaurant is closed on Mondays, and a button for directions.
## Technical decisions and why
- Next.js. Menu and information pages are pre-built and served from a global network, which is what makes them fast on a mobile connection. A slow template full of scripts and auto-playing video is one of the most common restaurant site mistakes, and this stack avoids it by default. The Next.js image component resizes food photography for each screen and lazy loads whatever is below the fold, so the photos do not cost the page its speed.
- TypeScript. A menu is structured data: sections, items, descriptions, prices and tags. Typing it means a missing price or a misspelled field is caught before the site is deployed, not noticed by a guest.
- One menu, used everywhere. The menu section on the home page and the ordering page list the same dishes, prices and categories. Keeping a menu in one structured place means a price change is made once and shows up everywhere it appears.
- Vercel. Deploys are automatic, hosting is free or close to it for most small business sites, and a change can be checked on a preview link before guests see it.
## Result
Guests can see the menu, book a table or order pickup from their phone in under a minute. Event planners have a page that answers their questions and asks for an inquiry, and the hours, address and directions are never more than a scroll away.
## What I would tell a restaurant planning a similar site
Put the menu on the page as text. Uploading it as a PDF or an image is a very common mistake, and it hurts both guests and search visibility.
Keep hours, address and a map easy to find, and make sure they match your Google Business Profile. Those are the most searched details about any restaurant, and a mismatch sends people to a closed door.
Decide early whether reservations go through your own site or through a system you already pay for. Both work. Offering both at once confuses guests.
Take pickup orders on your own site if you can, so that not every order goes through an app that takes a cut.
Show the pickup time before checkout. Guests plan around it.
Give catering and private events their own page if you offer them.
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
Artistic Printing is a commercial printer in Los Angeles, a family-owned shop on Pico Boulevard that has been printing for local businesses since 1995. A print job cannot be priced from a message that says "how much for some brochures". The shop needs to know what is being printed, how many and at what size before a number means anything. When requests arrive as loose emails, every quote starts with a round of questions, and the job waits while they are answered.
## What the shop needed
- A modern website that makes the business look as capable as it is
- Pages that speak to the industries the shop serves most: healthcare, hospitality, education and automotive
- A quote request that collects the specs the shop needs the first time
- A way to manage the requests that come in, without hunting through an inbox
- Structured client intake, so the same information is captured for every client and job
- Content that answers the questions buyers ask before they order
## How I approached it
The form is the product. For a service business, a website has one job: turn a search into a qualified request. A generic contact form with a name, an email and a message box produces the same vague emails the shop was already getting.
So the work starts from the shop's side. What does the person pricing the job need in front of them? Those answers become the fields, worded the way a client would say them.
The second half is what happens after someone presses submit. A request that lands in an inbox is still an email. A request that lands in a tool is a record that can be tracked.
The third piece is how buyers arrive. A hospital purchasing department, a restaurant owner and a car dealership search for very different things. Each of those buyers should land on a page that speaks their language and leads to the same quote request.
## What I built
### A modern website
The public site presents the shop and leads visitors toward requesting a quote. The hero reads "Where Ideas Become Print", with a "Get your quote" button and the shop's three promises underneath: free LA delivery, 24-hour turnaround and satisfaction guaranteed.
![The Artistic Printing hero: "Where Ideas Become Print", with Get your quote.](/shots/artistic-home.jpg)
For a printer, as for any local service business, trust comes from real examples of the work, clarity about what the shop does and an easy way to get in touch from a phone. Every page carries the phone number and a "Get a Quote" button in the header, so the next step is always one tap away.
### Industry pages
The home page introduces the four industries the shop knows best, each with the pieces it prints for them: patient intake forms and hospital signage for healthcare, menus and takeout packaging for hospitality, catalogs and handbooks for education, and sales brochures and service forms for automotive. Each industry links to a landing page of its own.
![The industries served section: healthcare, hospitality, education and automotive.](/shots/artistic-home-s1.jpg)
The healthcare page shows what that looks like in practice. It is written for a hospital or clinic buyer, with the things that buyer checks first: a business associate agreement available on request, bilingual English and Spanish materials, ADA-compliant typography and free delivery across LA County. It lists what the shop prints for healthcare, from intake forms and multi-part carbonless forms to discharge sheets and wayfinding signage, walks through the process from request to delivery, and answers healthcare buyers' questions in an FAQ.
![The healthcare printing landing page for Los Angeles.](/shots/artistic-healthcare-printing-los-angeles.jpg)
Pages like this do two jobs. They rank for the searches a specific buyer makes, such as healthcare printing in Los Angeles, and they reassure that buyer that the shop understands their constraints before the first conversation.
### Services
The services page sets out what the shop produces in plain categories: business cards, brochures, flyers, banners and large format, plus commercial printing, custom packaging and office forms. It lists the in-house equipment, from digital and offset printing to large format up to 44 inches wide and bindery, and explains the process in four steps: consultation, quote and proof, production, and delivery.
![The services page.](/shots/artistic-services.jpg)
### Printing guides
A guides section answers the questions buyers ask before they order: padded versus booked carbonless forms, how many parts an NCR form needs, business card thickness and finishes, digital versus offset printing, sign materials, banner types, what a dental office or a car dealership needs printed, and how statement printing and mailing works.
![The printing guides content hub.](/shots/artistic-guides.jpg)
Each guide is the kind of answer the shop's staff would otherwise give on the phone. Written down, it helps a buyer order correctly, it brings in search traffic for those exact questions, and it means more requests arrive with the right specs already decided.
### Structured quote intake
Every "Get a Quote" button leads to the same place: the contact page, where the quote request sits alongside the address, phone number, email and business hours. The request collects the client's name, company, email, phone and project details, and the page tells the client the shop responds within 24 hours on business days.
![The contact page, with the address, phone, email, hours and the quote request form.](/shots/artistic-contact.jpg)
The same page answers the questions that would otherwise come back as emails: typical turnaround times for business cards, flyers, large format and rush orders, which file formats the shop accepts, minimum order quantities and whether the shop can help with design.
In general, a good print quote form asks for the kind of piece, the quantity, the size and any deadline. It uses choices instead of free text wherever the options are known, and it marks as required only what is truly needed to quote. Every extra required field loses some requests, so the skill is in asking for enough and no more.
Print work usually involves artwork. A quote form can accept file uploads, so artwork, photos or plans travel with the request and do not follow later in a separate email.
### Quote management
Requests go into a quote management tool, not only into an inbox. Staff reach it through a staff login linked from the site's footer. The value of a tool over email is simple. Each request is a record with the same fields in the same place, and nothing gets buried in a thread.
A quote tool of this kind generally needs three things: a list of requests, a detail view showing everything the client submitted, and a way to mark where each request stands.
## Technical decisions and why
- Next.js and TypeScript. The public site is pre-built and fast, which matters for local search, and the quote tool is a real application behind it. Next.js lets both live in one project. TypeScript is especially useful for forms: the shape of a quote request can be defined once and shared by the form, the validation and the management view, so the three cannot drift apart.
- Firebase. A quote tool needs a database for requests and sign-in for the people who manage them. Firebase provides both on one platform, along with file storage, and there is no server to maintain. That fits a small business that should not need an IT department to run its website.
- Access rules. Quote requests contain client details. In any build like this, the database rules should let the public create a request and let only signed-in staff read them. Validation belongs on the server as well as in the form, because a form in a browser can be bypassed.
## Result
Quote requests come in structured and complete. Each one arrives with the details the shop needs and lands in one list that staff can work through. Buyers from each of the shop's main industries have a page written for them, and the guides answer the common questions before anyone has to pick up the phone.
## What I would tell a service business planning a similar tool
Sit down with whoever prices the work and list what they ask every client. That list is your form.
Ask for the specs that matter for your work, such as sizes, quantities, addresses or photos, and resist adding fields that are only nice to have.
Use dropdowns and choices where you can. They are faster to fill in on a phone and they give you clean data.
Send the client a clear confirmation, so they know the request arrived and what happens next.
Write a page for each kind of customer you serve most, in their language. A hospital buyer and a restaurant owner should not land on the same generic page.
Turn the questions your staff answer every week into guides.
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
Astiglow is a waxing studio in Los Angeles. Beauty clients book on impulse and on their phones, often late at night. If a site makes them call during business hours, many of them book somewhere else. Phone booking also costs the studio attention, because a ringing phone is an interruption during someone else's appointment.
## What the studio needed
- A service menu with prices and durations, so nobody has to message to ask
- Service packages presented clearly, with the savings spelled out
- Online booking that starts from the service a client wants
- Answers to the practical questions: hours, location, how packages work, how to pay
- A look that matches the studio, not a stock beauty template
## How I approached it
Remove every reason to hesitate. A new client deciding whether to book has a short list of questions: what do you offer, what does it cost, and can I get a time that works. A studio site should answer those in that order and keep the booking action within reach on every screen.
The look comes from the brand. Waxing is a personal service, and the website is the first impression of how a visit will feel. That calls for a soft, calm design, and for restraint with anything that slows the page down.
The third principle was to introduce the person. Clients trust a studio when they know who will be doing the waxing, so the founder has a section of her own on the home page.
## What I built
### A calm home page
The home page opens with "Gentle Care, Radiant Results" and two actions, book an appointment or view services. The line under it says what makes the studio different: hard wax treatments in a clean, serene space, with gentle techniques for sensitive skin. A small card invites first-time clients to book a consult.
![The Astiglow hero: "Gentle Care, Radiant Results".](/shots/astiglow-home.jpg)
Below the hero, three service categories, face, body and Brazilian, each show a starting price, and a strip introduces packages: buy nine sessions, get two free. A visitor learns what the studio offers and roughly what it costs before scrolling past the first screen.
![Service categories and the packages teaser on the home page.](/shots/astiglow-home-s1.jpg)
Further down, "Meet Aster" introduces the founder and her four-plus years in waxing, followed by client reviews. The page ends with a booking call to action, the phone number for anyone who still prefers to call, and the hours and address in the footer.
### A service menu with prices
The site lists the studio's services with their prices. Clear prices remove the main reason people hesitate.
![The services menu, with prices and durations.](/shots/astiglow-services.jpg)
As a general pattern, a service menu works best grouped by category, with the price and duration of each service, so a client can find what they want without reading the whole list. The Astiglow menu has 22 services in three groups: ten for the face, eight for the body and four in Brazilian and bikini. Each one has a short description, its price, its duration and a button to book it directly. Tabs at the top filter the list by group, and the most popular services are tagged.
### Packages
Service packages have their own page. Bundles raise the value of each client and give regulars a reason to commit, so they deserve a section of their own and not a footnote under the price list.
![The packages page: 11 sessions for the price of 9.](/shots/astiglow-packages.jpg)
The offer is easy to state: 11 sessions for the price of 9. The page explains it in three steps, choose a package, purchase and save, then book as usual, and shows each package with its total, the savings and the effective price per session next to the regular price. Packages are available for Brazilian, full face, full legs, eyebrows and underarms.
An FAQ underneath covers what people ask before paying up front: credits apply automatically when the client books that service, they are valid for 12 months, and packages are non-transferable. The page also notes that buy now, pay later options are available for purchases of $50 and up.
### Online booking
Clients can book online without calling.
![The booking flow, step one: choose a service, with prices.](/shots/astiglow-book.jpg)
The booking flow starts where the client's decision starts, with the service. Step one lists every service with its duration and price, filtered by face, body or Brazilian, and choosing one moves the client on to the schedule. Starting from the service means the studio knows how long the appointment needs before the client picks a time.
There are generally two ways to put booking on a studio site. One is to embed or link the booking system the studio already uses, such as Square, Vagaro, Boulevard or Fresha, so the calendar stays in one place. The other is a flow on the site itself.
Either way, two things matter. The booking step should feel like part of the site and not like a slow third-party page with no branding. And the client should get a confirmation straight away. In any appointment business, a clear confirmation is what stops the "did my booking go through" messages that put the studio back on the phone.
### Hours, location and contact on every page
The footer carries the hours, Monday to Wednesday from 9 to 8 and Thursday to Sunday from 9 to 5, the address on Wilshire Boulevard with a directions link, the phone number and the email address.
![The booking call to action, hours and location in the footer.](/shots/astiglow-home-s3.jpg)
### A soft, on-brand design
The design is soft and on-brand. A studio site should look like the studio, so the visual choices come from the brand, and the pages are kept light so they load quickly on a phone.
## Technical decisions and why
- Next.js. Pages are pre-built and served from a global network, so the site is fast on a mobile connection, which is where impulse bookings happen. A common studio site mistake is embedding a live Instagram feed that slows everything to a crawl. A fast gallery of selected photos does the same job without the weight.
- TypeScript. Services, prices, durations and packages are structured data. Keeping them typed and in one editable place means a price change is made once and shows up everywhere that price appears: the home page, the services menu, the booking flow and the package math.
- One list of services. The services page and step one of booking show the same 22 services with the same prices and durations. A client never sees one price on the menu and another when booking.
- Vercel. Hosting is free or close to it for most small business sites, deploys are automatic, and a change can be checked on a preview link before clients see it.
## Result
Booking moved online, freeing the studio from phone scheduling. Clients can see every service with its price and duration, understand exactly what a package saves them, and book without calling, at any hour.
## What I would tell a studio planning a similar site
Publish your prices. Making people call or message for them is one of the most common mistakes on studio sites, and it loses the clients who were ready to book.
Show durations next to prices. Clients plan their day around them.
Let clients book at any hour. The booking that would have happened at eleven at night does not happen if it needs a phone call the next morning.
Keep your existing booking software if it works, and bring it into the site instead of replacing it.
Give packages and memberships real space on the page, and do the math for the client: total, savings and price per session.
Answer the package questions before checkout: how credits apply, when they expire and whether they can be shared.
Introduce yourself. In a personal service, the person matters as much as the price.
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
  // outside references shown in a "Sources" list at the end of the article
  sources?: { title: string; publisher: string; url: string }[];
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
    sources: [
      { title: 'Get started with Cloud Firestore Security Rules', publisher: 'Firebase', url: 'https://firebase.google.com/docs/firestore/security/get-started' },
      { title: 'Row Level Security', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/postgres/row-level-security' },
      { title: 'Receive Stripe events in your webhook endpoint', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/webhooks' },
      { title: 'Environment variables', publisher: 'Vercel Docs', url: 'https://vercel.com/docs/environment-variables' },
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
> Never unlock a paid plan from the success page redirect. Anyone can type that URL. Only the verified webhook should change what a user has access to.
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
> Before launch, open the browser tools, set the network to offline and click through every screen. Anything that goes blank or spins forever is a missing error state.
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
    updated: '2026-11-22',
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
    sources: [
      { title: 'Web Vitals', publisher: 'web.dev (Google)', url: 'https://web.dev/articles/vitals' },
      { title: 'Site moves with URL changes', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes' },
      { title: 'redirects (next.config.js)', publisher: 'Next.js Docs', url: 'https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects' },
      { title: 'Hardening WordPress', publisher: 'WordPress Developer Resources', url: 'https://developer.wordpress.org/advanced-administration/security/hardening/' },
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
> Run your current site through PageSpeed Insights at pagespeed.web.dev and read the mobile result, not the desktop one. Mobile is what most of your customers see.
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
![New York Nook: the pickup ordering page I built, with a cart and pickup time slots.](/shots/newyorknook-order.jpg)
A service business has a different problem: requests that arrive without the details needed to price them. For Artistic Printing, a commercial printer, I built the website together with a quote intake and management tool, so requests arrive structured and complete and not as a vague email.
![Artistic Printing: the contact page I built, with its quote request form.](/shots/artistic-contact.jpg)
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
- Keep the same paths where possible. Where a path changes, add a permanent redirect in the redirects section of the Next.js config file. Next.js sends it as a 308, which Google treats like a 301.
- Carry over the page titles, descriptions and content that already rank. Improve them, but do not delete them.
- Move the images along with their alt text.
- Launch, submit the new sitemap in Search Console, and watch the Pages report for 404 errors over the following weeks.
A careful move should hold its rankings, and the faster pages give them room to improve.
## The bottom line
If you want to change layouts yourself every week, WordPress is reasonable. If you want a fast, custom site that ranks well and does not need babysitting, Next.js is the better fit. For a small business whose site has one clear job, that usually means Next.js, with a simple way to edit the parts that change.`,
  },
];

export const caseStudies: CaseStudy[] = [...baseCaseStudies, ...caseStudiesGenA, ...caseStudiesGenB];

export const posts: Post[] = [...genPosts, ...postsBatch4, ...postsBatch3, ...postsBatch2, ...morePosts, ...basePosts];

export const serviceBySlug = (s: string) => services.find((x) => x.slug === s);
export const caseBySlug = (s: string) => caseStudies.find((x) => x.slug === s);
export const postBySlug = (s: string) => posts.find((x) => x.slug === s);
