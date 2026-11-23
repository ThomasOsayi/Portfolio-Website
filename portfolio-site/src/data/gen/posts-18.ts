// Generated articles, batch 18 (Nov 23 2026). Prices come only from the packages in seo.ts.
// Third-party prices and limits were checked on the vendors' own pages on Nov 23 2026.
import type { Post } from '../seo';

const d = '2026-11-23';

export const postsGen18: Post[] = [
  {
    slug: 'clerk-vs-supabase-auth-vs-firebase-auth',
    title: 'Clerk vs Supabase Auth vs Firebase Auth for a SaaS MVP: cost, trade-offs and picks',
    description: 'Clerk vs Supabase Auth vs Firebase Authentication (plus Auth.js and Better Auth) for a SaaS MVP: free tiers, per-user pricing, team features, lock-in and picks.',
    date: d,
    keywords: ['Clerk vs Supabase Auth', 'Clerk vs Firebase Auth', 'Supabase Auth vs Firebase Auth', 'best auth for SaaS MVP', 'Auth.js vs Clerk'],
    service: 'saas-mvp-development',
    shortAnswer: 'Pick Clerk when you need polished sign-in screens and team accounts fast and your database can be anything; pick Supabase Auth when your data already lives in Supabase and you want auth tied to row level security; pick Firebase Authentication when the app runs on Firestore or ships on mobile. At the time of writing all three are free up to 50,000 users a month, so the real differences are features, lock-in and how you check sessions on the server.',
    takeaways: [
      'At the time of writing Clerk, Supabase and Firebase all start free up to 50,000 users a month, so price rarely decides an MVP.',
      'Clerk bills monthly retained users, so people who sign up once and never return are not counted.',
      'Supabase Auth and Firebase Authentication tie your access rules to their databases, while Clerk keeps auth separate from your data.',
      'Clerk includes basic organizations for B2B apps; with the other options you model teams in your own tables.',
      'Whatever you choose, check the session and role on the server for every request that reads or changes data.',
    ],
    faqs: [
      { q: 'Is Clerk free for a SaaS MVP?', a: 'At the time of writing Clerk\'s Hobby plan is free for up to 50,000 monthly retained users per app, and Pro costs $25 a month when you need multi-factor authentication or want to remove Clerk branding.' },
      { q: 'Can I use Clerk with Supabase?', a: 'Yes, Clerk can handle sign-in while Supabase stores your data, but you then need to pass the Clerk session to Supabase and keep user records in sync instead of relying on Supabase\'s built-in auth tables.' },
      { q: 'Is Firebase Authentication free?', a: 'Firebase Authentication with email, social, phone and anonymous providers is free up to 50,000 monthly active users at the time of writing, while phone SMS and SAML or OIDC users above the free allowance are billed.' },
      { q: 'Should I use Auth.js or Better Auth for a new project?', a: 'Auth.js is now maintained by the Better Auth team, which keeps shipping security fixes for it but recommends Better Auth for new projects unless you need a feature only Auth.js has.' },
      { q: 'Which auth provider is easiest to migrate away from?', a: 'Self-hosted libraries are easiest because users already sit in your database, while moving off any hosted provider depends on whether the new system can verify the old password hashes.' },
      { q: 'Can Thomas Osayi set up authentication for my SaaS?', a: 'Thomas Osayi\'s SaaS MVP package, from $1,200 in about 21 days, includes authentication, a dashboard, a database and payments, built on whichever provider fits your product.' },
    ],
    sources: [
      { title: 'Clerk pricing', publisher: 'Clerk', url: 'https://clerk.com/pricing' },
      { title: 'Supabase pricing', publisher: 'Supabase', url: 'https://supabase.com/pricing' },
      { title: 'Identity Platform pricing', publisher: 'Google Cloud', url: 'https://cloud.google.com/identity-platform/pricing' },
      { title: 'Auth.js is now part of Better Auth', publisher: 'Better Auth', url: 'https://better-auth.com/blog/authjs-joins-better-auth' },
    ],
    body: `Sign-in is the first screen every SaaS user touches and the last part of the app a founder wants to rebuild. Pick the wrong auth provider and you usually find out months later, when you need team accounts, an unbranded login page, or a bill that grows with every person who signed up once and never came back.
I set up authentication on every MVP I build, so I have working opinions about Clerk, Supabase Auth and Firebase Authentication, plus the self-hosted route through Auth.js or Better Auth. This post compares them for a SaaS MVP specifically. If you have already chosen Firebase and want the implementation details, "Firebase Authentication in the Next.js App Router: how to do it properly" covers that. If you are still choosing a whole backend, "Firebase vs Supabase for your MVP: how to choose" is the broader comparison. This one is only about auth.
## Clerk vs Supabase Auth: which is better for a SaaS MVP?
Clerk is better when you want finished sign-in screens, user management and team accounts without building them, while Supabase Auth is better when your data already lives in Supabase and you want auth tied directly to your database rules.
That is the core trade. Clerk is an auth product first. You drop in its components and get sign-in, sign-up, profile management and organizations for B2B apps. Your database can be anything, which is both the appeal and the catch: you end up copying users from Clerk into your own tables with webhooks so you can join them to your data.
Supabase Auth is part of a database platform. Users live in the same Postgres project as everything else, and a row level security policy can compare a column to auth.uid() to decide who sees a row. There is nothing to sync. The cost is that you build more of the interface yourself, and teams or organizations are tables you design.
## What does each option cost at the time of writing?
All four start free, and the differences only show up once you pass tens of thousands of users or need paid features such as multi-factor authentication or SAML single sign-on.
These numbers come from each vendor's pricing page at the time of writing. They change, so check before you commit.
- Clerk: the free Hobby plan includes 50,000 monthly retained users per app. Pro is $25 a month ($20 billed annually) with the same 50,000 included, then $0.02 per user from 50,001 to 100,000 and lower rates above that. Multi-factor authentication and removing Clerk branding need Pro.
- Supabase: the Free plan includes 50,000 monthly active users, and free projects pause after a week of inactivity. Pro starts at $25 a month with 100,000 monthly active users included, then $0.00325 per user. SAML single sign-on users cost $0.015 each after 50 included on Pro.
- Firebase Authentication: email, phone, anonymous and social sign-in are free up to 50,000 monthly active users, then $0.0055 per user between 50,000 and 100,000, falling at higher tiers. SAML and OIDC providers are free for 50 users, then $0.015 each. Phone sign-in is billed per SMS, $0.01 in the US and Canada.
- Auth.js and Better Auth: open source with no per-user fee. You pay for the database and email service you already run.
Clerk counts retained users, not active ones. Its definition is a user who comes back at least a day after signing up, so someone who signs up once and leaves is never billed. For consumer products with lots of drive-by sign-ups, that difference matters more than the headline price.
## Clerk and Supabase Auth, option by option
Both are hosted services that remove most of the auth plumbing, but they sit in very different places in your stack.
### Clerk
- Best for: B2B SaaS that needs team accounts, invitations and roles early, and founders who want sign-in screens that look finished on day one.
- Cost range: free up to 50,000 monthly retained users per app; $25 a month on Pro once you need multi-factor authentication or unbranded screens.
- Pros: prebuilt sign-in, sign-up and profile components; basic organizations included at no cost (100 monthly retained organizations per app and up to 20 members each); works with any database and any hosting.
- Cons: user records live in Clerk, so you sync them into your own tables; unlimited members, custom roles and verified domains need the Enhanced B2B add-on at $100 a month ($85 billed annually); per-user pricing above 50,000 retained users is higher than the database-bundled options.
### Supabase Auth
- Best for: apps already built on Supabase, which includes most projects that started in Lovable or Bolt.
- Cost range: free up to 50,000 monthly active users; $25 a month on Pro, which also covers the database.
- Pros: users sit in the same Postgres database as your data; row level security can check the user directly; email, magic links, OAuth and phone sign-in in one place; one bill.
- Cons: you build more of the interface; organizations and roles are your own tables; redirect settings trip people up across localhost, previews and production (I wrote "Supabase auth redirect URL not working?" about exactly that); free projects pause when idle.
## Firebase Authentication and Auth.js, option by option
Firebase is the pick when your app already runs on Google's stack, and a self-hosted library is the pick when you want no vendor lock-in and are willing to own the details.
### Firebase Authentication
- Best for: apps on Firestore, and products with both a mobile app and a web dashboard, because the same user can sign in from React Native and from Next.js.
- Cost range: free up to 50,000 monthly active users for standard providers; SMS and SAML cost extra.
- Pros: mature SDKs for web, iOS and Android; security rules read the user from request.auth; custom claims for roles; a generous free tier.
- Cons: server-side sessions in the Next.js App Router need deliberate setup with session cookies and the Admin SDK; every new domain needs adding to the authorized list or you get auth/unauthorized-domain; phone sign-in is not available on the free Spark plan.
### Auth.js or Better Auth
- Best for: developers who want users in their own Postgres database with no per-user fees, and products where vendor independence matters.
- Cost range: free software; you pay for hosting, the database and a transactional email service.
- Pros: no lock-in; every table is yours; works with Prisma or Drizzle; nothing to sync.
- Cons: you own password resets, email delivery, sign-in rate limiting and library upgrades. The project's direction has also changed: in September 2025 Auth.js (formerly NextAuth.js) moved under the Better Auth team, which still ships security patches for Auth.js but recommends Better Auth for new projects.
NOM, the React Native food discovery app I built at LMU Tech & Digital Ventures, runs on Firebase. A mobile-first product like that is where Firebase earns its place, because the client SDKs do so much of the work on the phone.
## Does your auth provider lock you into a database?
Only Supabase Auth and Firebase Authentication tie auth to a specific database; Clerk and the self-hosted libraries work with whatever database you pick, which matters if you might move later.
The lock-in is less about where the user rows live and more about where your access rules are written. In Supabase, a rule like "a user can read rows where owner_id matches their ID" is a policy inside Postgres. In Firestore, the same rule lives in firestore.rules. Leave either platform and you rewrite those rules as application code.
With Clerk, the access checks live in your server code from the start. Each route handler or server action reads the Clerk session, then queries your database with that user ID.
Every option lets you get users out. The hard part is password hashes. If the new provider cannot verify the old hashes, every user gets a reset email on migration day.
## What about teams, roles and B2B features?
If your customers are companies with several users each, Clerk gives you organizations out of the box, while the other options expect you to model teams in your own data.
That modelling is not hard, but it has to be right. A typical layout is an organizations table, a memberships table that links users to organizations with a role, and every business record carrying an organization ID. "Multi-tenant SaaS with Firestore: data layout, security rules and custom claims" walks through the Firestore version, and "Roles and permissions in a SaaS app: a practical guide for founders" covers how to think about roles.
Guardian MindCare, the therapy practice platform I built, has five roles: therapists, supervisors, trainees, clients and admins. A project like that is a reminder that roles are a data problem first and an auth problem second. The sign-in provider tells you who someone is. Your own tables decide what they can see.
Wherever roles live, store them somewhere the user cannot edit: Clerk organization roles or private metadata, Firebase custom claims set with the Admin SDK, or a memberships table protected by row level security in Supabase.
## How should auth work in the Next.js App Router?
Check the session on the server for every request that reads or changes data, not only in a redirect that hides pages from signed-out visitors.
Every provider here has a way to read the current user on the server. The pattern I use is the same regardless of provider:
- Read the session inside each route handler, server action and server component that touches private data.
- Derive the user ID and organization from the verified session, never from a value the browser sends.
- Check the role before writing anything, and return a 403 when it fails.
- Keep service keys, such as a Supabase service role key or Firebase Admin credentials, in server-only environment variables.
- Add every production and preview domain to the provider's allowed redirect or authorized domain list before launch.
The most common hole I find in AI-built apps is a protected page with an unprotected API route behind it. "API key exposed in your frontend? Which keys are safe and how to fix the rest" covers the key side of that problem.
![The creator sign-in screen I built for TheHoopGang creator portal.](/shots/hoopgang-login.jpg)
A sign-in screen like the one on TheHoopGang creator portal is the visible part. The checks behind every request are the part that keeps 50+ creators' data separate.
## A worked example: choosing auth for a scheduling tool
As an illustration, imagine a founder building a shift scheduling tool for small clinics. Each clinic has a manager and five to thirty staff, and the founder expects about 2,000 users in the first year.
- Users: comfortably inside every free tier above, so cost is not the deciding factor.
- Teams: each clinic is an organization with managers and staff, so organizations matter on day one.
- Database: not chosen yet; the founder is leaning towards Postgres.
- Mobile: staff check shifts on their phones, but a responsive web app is enough for version one.
With those facts, Clerk is the fastest route: organizations, invitations and roles are already there, and Postgres can be anything. If the founder had already built on Supabase, I would keep Supabase Auth and add a memberships table instead of introducing a second vendor. That leaves one fewer system to keep in sync.
## Which auth provider should you pick?
The right pick depends more on what you have already built than on the feature lists.
- Founder with a Lovable or Bolt app on Supabase: keep Supabase Auth and fix the redirect settings and row level security.
- B2B SaaS where companies invite their teams: Clerk, unless your data is already in Supabase or Firestore.
- Product with a mobile app, or already on Firestore: Firebase Authentication.
- Developer who wants full control and no per-user fees: Better Auth for new work, or stay on Auth.js if it already runs well.
- Consumer app expecting lots of one-time sign-ups: compare Clerk's retained-user counting against the active-user counting elsewhere before you assume the free tiers are equal.
> Turn on Google sign-in or magic links from day one. They cut password reset support, and they make any future migration far less painful.
## The bottom line
At the time of writing, Clerk, Supabase Auth and Firebase Authentication all start free up to 50,000 users a month, so cost rarely decides an MVP. Choose Clerk for fast, polished B2B sign-in on any database, Supabase Auth when your data is already in Supabase, Firebase Authentication for Firestore and mobile, and Better Auth when you want everything in your own database. Then check the session on the server for every request, and your choice of provider matters much less than how you use it. If you want it built for you, my SaaS MVP package from $1,200 includes auth, and the Quick Fix from $60 covers one broken sign-in bug.`,
  },
  {
    slug: 'stripe-vs-paddle-vs-lemon-squeezy',
    title: 'Stripe vs Paddle vs Lemon Squeezy for SaaS billing: fees, tax and who should use what',
    description: 'Stripe vs Paddle vs Lemon Squeezy for SaaS billing: merchant of record vs processor, sales tax and VAT, fees, payouts, and what the Lemon Squeezy shutdown means.',
    date: d,
    keywords: ['Stripe vs Paddle vs Lemon Squeezy', 'Stripe vs Paddle', 'merchant of record for SaaS', 'Lemon Squeezy alternative', 'SaaS billing provider'],
    service: 'saas-mvp-development',
    shortAnswer: 'Stripe is a payment processor where you stay the seller and handle sales tax yourself (with Stripe Tax to help), or a merchant of record through Stripe Managed Payments for eligible digital products. Paddle is a merchant of record that takes on tax collection and filing for a flat 5% plus 50 cents per transaction at the time of writing. Lemon Squeezy has closed new sign-ups and will stop processing payments on March 31, 2027, so it is no longer an option for a new SaaS.',
    takeaways: [
      'A merchant of record is the legal seller of your product, so it collects and files sales tax and VAT for you.',
      'At the time of writing Stripe charges 2.9% plus 30 cents on US cards, plus 0.7% for Billing, with tax tools priced separately.',
      'Paddle and Lemon Squeezy both list 5% plus 50 cents per transaction, which includes merchant of record tax handling.',
      'Lemon Squeezy stopped new sign-ups and will stop processing payments on March 31, 2027, with Stripe Managed Payments as its suggested path.',
      'Pick based on where your customers are and whether you want to own tax compliance, not on the headline fee alone.',
    ],
    faqs: [
      { q: 'What is a merchant of record?', a: 'A merchant of record is the company legally selling to your customer, so it charges the right sales tax or VAT, files the returns, handles disputes and then pays you what is left.' },
      { q: 'Is Paddle more expensive than Stripe?', a: 'Paddle\'s 5% plus 50 cents is higher than Stripe\'s card fee alone, but it includes tax collection and filing that you would otherwise pay for separately in software, registrations and accountant time.' },
      { q: 'Is Lemon Squeezy shutting down?', a: 'Yes, Lemon Squeezy announced in November 2026 that it has closed new store sign-ups and will stop processing payments on March 31, 2027, and it points eligible sellers to Stripe Managed Payments.' },
      { q: 'What is Stripe Managed Payments?', a: 'Stripe Managed Payments is Stripe\'s merchant of record option for digital products such as SaaS, charging 3.5% per transaction on top of standard payment fees at the time of writing.' },
      { q: 'Can I switch billing providers later?', a: 'Yes, but moving active subscriptions means migrating saved cards, which needs cooperation from both providers, so it is much easier to choose carefully before you have paying customers.' },
      { q: 'Can Thomas Osayi set up billing for my SaaS MVP?', a: 'Thomas Osayi\'s SaaS MVP package, from $1,200 in about 21 days, includes payments along with auth, a dashboard and a database.' },
    ],
    sources: [
      { title: 'Stripe pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
      { title: 'Managed Payments eligibility', publisher: 'Stripe', url: 'https://docs.stripe.com/payments/managed-payments/eligibility' },
      { title: 'Paddle pricing', publisher: 'Paddle', url: 'https://www.paddle.com/pricing' },
      { title: 'When and how do I get paid?', publisher: 'Paddle', url: 'https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid' },
      { title: 'Saying goodbye to Lemon Squeezy', publisher: 'Lemon Squeezy', url: 'https://www.lemonsqueezy.com/blog/saying-goodbye-to-lemon-squeezy' },
    ],
    body: `Billing is the part of a SaaS MVP where a small decision becomes expensive to undo. Once customers have saved cards and active subscriptions with one provider, moving them is a project of its own. So it is worth spending an hour on this choice before the first payment, not after.
The three names that come up most for SaaS billing are Stripe, Paddle and Lemon Squeezy. They are not three versions of the same thing. Stripe is mainly a payment processor, where you stay the seller. Paddle is a merchant of record, which means it becomes the seller and takes the tax work off your plate. Lemon Squeezy was a merchant of record popular with indie founders, and its situation changed this month. If you have already picked Stripe and want the setup steps, "Setting up Stripe subscriptions for a SaaS MVP: what you actually need" covers that. This post is about choosing.
## What is the difference between Stripe, Paddle and Lemon Squeezy?
The difference is who legally sells your product: with Stripe's standard products you are the seller, while Paddle and Lemon Squeezy act as the merchant of record and sell on your behalf.
That one distinction drives everything else. When you are the seller, your company is responsible for charging the right sales tax or VAT in each place you have an obligation, registering where required, filing returns and dealing with chargebacks. Stripe gives you tools for much of that, but the responsibility stays with you.
When a merchant of record sells for you, the customer's receipt shows the merchant of record, it charges and remits the tax, and it pays you the net amount. You trade a higher fee and less control for a lot less compliance work.
Stripe now also offers both models. Alongside its normal processing, Stripe Managed Payments makes Stripe the merchant of record for eligible digital products.
And then there is the news. On November 16, 2026, Lemon Squeezy announced that it has closed new store sign-ups and will stop processing payments on March 31, 2027, and that it will not extend that date. Its suggested path for eligible sellers is Stripe Managed Payments. For a new SaaS, that takes Lemon Squeezy off the list.
## What is a merchant of record, and do you need one?
A merchant of record is the legal seller in each transaction, and you need one most when you sell to consumers or businesses in many countries and do not want to manage tax registrations yourself.
Here is what a merchant of record typically handles that you would otherwise own:
- Calculating and charging sales tax, VAT or GST at checkout.
- Registering, filing and remitting those taxes in each jurisdiction.
- Fraud screening, disputes and chargebacks.
- Buyer support for payment questions and refunds.
The cost is a bigger cut of each sale and less flexibility. Merchant of record platforms limit what you can sell. Stripe Managed Payments, for example, supports digital products such as software, SaaS and online courses, and excludes physical goods and professional services such as consulting or development work. It also does not support Stripe Connect, so it is not a fit for marketplaces.
You probably do not need one if you sell mostly to US businesses from a US company, have a handful of customers abroad, and are comfortable using Stripe Tax and an accountant. You probably do want one if you sell a low-priced subscription to consumers in Europe, the UK and beyond from day one.
This is general information, not tax or legal advice. Tax obligations depend on your company, your customers and where they are, so check with an accountant before you rely on any setup.
## Stripe and Stripe Managed Payments, option by option
Stripe is the most flexible option and the one most SaaS tools are built around, and Managed Payments now adds a merchant of record mode for digital products.
### Stripe (processor, with Billing and Tax)
- Best for: US-based SaaS selling mainly to businesses, marketplaces that need Connect, and products with custom billing such as usage-based pricing or invoices.
- Cost range: at the time of writing, 2.9% plus 30 cents per successful US card payment, plus 1.5% for international cards and 1% when currency conversion is needed. Stripe Billing adds 0.7% of billing volume on pay as you go. Stripe Tax Basic is 0.5% per transaction on the no-code setup.
- Pros: the deepest API and documentation; Checkout, the customer portal and webhooks cover most MVP needs; Connect for marketplaces; works with nearly every SaaS tool.
- Cons: you are the seller, so tax registration and filing are your job; fees stack once you add Billing and Tax; more decisions to make up front.
### Stripe Managed Payments
- Best for: digital products and SaaS sold to customers worldwide by a business based in a supported country, including the US, Canada, much of Europe, the UK, Australia, Hong Kong, Japan and Singapore.
- Cost range: 3.5% per successful transaction on top of the normal payment fees, at the time of writing.
- Pros: Stripe becomes the merchant of record and handles sales tax, VAT and GST in more than 80 countries, plus fraud, disputes and transaction-level customer support; you keep Stripe's tooling.
- Cons: eligibility review; digital products only; subscriptions must be created through Checkout or Payment Links; no Connect; some advanced integrations are not supported.
## Paddle and Lemon Squeezy, option by option
Paddle is the established independent merchant of record for software, and Lemon Squeezy is now a platform to migrate away from rather than one to join.
### Paddle
- Best for: SaaS selling to consumers or small businesses internationally, where tax compliance would otherwise eat founder time.
- Cost range: 5% plus 50 cents per checkout transaction at the time of writing, with no monthly fee; products under $10 need custom pricing.
- Pros: merchant of record with tax collection, filing and remittance included; fraud, chargebacks and buyer support handled; subscription and payment method migration offered at no added cost.
- Cons: a bigger cut than Stripe's card fee on low-volume plans; you cannot withdraw on demand, because payouts run monthly; less control over checkout and receipts.
### Lemon Squeezy
- Best for: existing sellers planning a migration. It is not accepting new stores.
- Cost range: 5% plus 50 cents per transaction until it stops processing on March 31, 2027.
- Pros: still works for current stores until the deadline; migration tooling was announced for December 2, 2026, plus a data export guide and a migration intake form.
- Cons: shutting down; Stripe Managed Payments is not available in every country Lemon Squeezy supported, so some sellers will need another provider.
## What do the fees look like on a $49 plan?
On a $49 monthly plan paid by a US card, Stripe with Billing comes to roughly $2.06 a month per customer before tax tools, while Paddle comes to $2.95 with tax handling included.
This worked example uses the list prices at the time of writing and ignores refunds, disputes and negotiated rates.
- Stripe card fee: 2.9% of $49 is $1.42, plus 30 cents, so $1.72.
- Stripe Billing at 0.7%: about 34 cents. Running total about $2.06.
- Stripe Tax Basic at 0.5%: about 25 cents. Running total about $2.31, and you still file the returns.
- Stripe Managed Payments at 3.5%: about $1.72 on top of the payment fees, so roughly $3.43 before Billing.
- Paddle at 5% plus 50 cents: $2.45 plus 50 cents, so $2.95, with filing handled.
For an international customer, Stripe adds 1.5%, about 74 cents, which narrows the gap further. On a $9 consumer plan the fixed 50 cents makes the merchant of record options much more expensive in percentage terms, so model your real price points.
![SQWAD pricing tiers: Starter $99 a month, Pro $399 a month, Scale $999 a month plus 1%, first month free.](/shots/sqwad-home-s4.jpg)
SQWAD, my creator program software, has a tier with a percentage on top of a flat monthly price. If your pricing looks like that, check that your billing provider can charge the variable part cleanly before you pick it, because usage and revenue-based charges are where providers differ most. "SaaS pricing models compared: flat, per-seat, tiered, usage-based and revenue-based" goes deeper on the models themselves.
## How and when do you get paid?
Stripe pays out on a schedule you choose, typically from two business days after a US card payment, while Paddle pays monthly once your balance passes a threshold.
Stripe's docs say US card funds typically settle in two business days, and the first payout on a new account usually completes within 7 to 14 days of the first live payment. After that you can choose daily, weekly, monthly or manual payouts.
Paddle works differently. On the first of each month, if your balance is over the threshold (by default $100, or the equivalent in pounds or euros), it becomes a payout. Paddle sends it by the 15th by wire transfer or Payoneer, and it can take up to three working days to arrive. Some countries incur a $15 SWIFT fee.
Lemon Squeezy paid out twice a month while it operated normally. Check its migration guidance for how final payouts are handled.
For a young SaaS, the monthly rhythm matters for cash flow. If you need revenue in the bank within days, a processor model is easier.
## Which billing provider should you pick?
For most new SaaS products in 2026 the choice is between Stripe as a processor, Stripe Managed Payments and Paddle, and the deciding question is who you sell to.
- US company selling mainly to US businesses: Stripe with Billing, plus Stripe Tax when you have obligations. This is what I set up most often.
- Marketplace or platform paying out to sellers: Stripe with Connect. Merchant of record products do not support it. "Stripe Connect payouts for a marketplace" explains the setup.
- Solo founder selling a subscription to consumers worldwide: Paddle or Stripe Managed Payments, so tax registration is not your problem.
- Existing Lemon Squeezy seller: start the migration now. Use Stripe Managed Payments if your business location is supported, and look at Paddle or another merchant of record if it is not.
- Selling services, coaching or physical goods: not a merchant of record product. Use Stripe as a processor.
> Before you choose, write down your top three customer countries and your lowest price point. Those two facts settle most billing decisions in minutes.
## Mistakes to avoid when choosing billing
The most expensive mistakes are choosing on headline fee alone and treating payment success as the only event your app needs to handle.
- Ignoring tax until a customer asks for a VAT invoice.
- Choosing a merchant of record for a product it does not support, such as consulting bundled with software.
- Building checkout before deciding on monthly versus annual plans and trials.
- Not handling failed renewals and cancellations through webhooks, so access never changes. "Stripe payment went through but your app did not update? Fix the webhook" covers the usual cause.
- Skipping a full test of live mode. "Stripe test mode to live mode: the checklist I use before taking payments" is the list I run.
## The bottom line
Stripe keeps you in control and is the cheapest per transaction on US business sales, but you own tax compliance. Paddle and Stripe Managed Payments cost more per sale and take tax, fraud and disputes off your plate as merchant of record. Lemon Squeezy is closing on March 31, 2027, so do not start there. Pick based on who your customers are and where they live, then set up webhooks and live-mode testing properly. If you want billing built into your MVP, my SaaS MVP package from $1,200 includes payments.`,
  },
  {
    slug: 'vercel-vs-railway-vs-render-for-saas',
    title: 'Vercel vs Railway vs Render for hosting a SaaS: servers, workers, databases and cost',
    description: 'Vercel vs Railway vs Render for a SaaS backend: serverless vs long-running servers, background workers, databases, websockets and pricing at the time of writing.',
    date: d,
    keywords: ['Vercel vs Railway', 'Vercel vs Render', 'Railway vs Render', 'best hosting for SaaS', 'where to host a Next.js SaaS'],
    service: 'saas-mvp-development',
    shortAnswer: 'Vercel is the best home for a Next.js front end and short request handlers, Railway is the easiest place to run long-running servers, workers and databases with usage-based billing, and Render sits in between with fixed monthly instance prices and a free tier that sleeps. Many SaaS products use Vercel for the app and Railway or Render for the parts that need to stay running.',
    takeaways: [
      'Vercel runs your code as functions with a maximum duration, 300 seconds on Hobby and up to 800 seconds on Pro at the time of writing.',
      'Railway and Render run long-lived services, which suits websockets, queue workers and jobs that take minutes.',
      'Railway bills by the second for CPU and memory, with Hobby at a $5 minimum and Pro at a $20 minimum at the time of writing.',
      'Render uses fixed instance prices, from $7 a month for its smallest paid web service, and its free web services sleep after 15 minutes.',
      'A split setup, with the Next.js app on Vercel and workers on Railway or Render, is common and sensible for a SaaS MVP.',
    ],
    faqs: [
      { q: 'Is Railway better than Vercel?', a: 'Neither is better overall: Vercel is stronger for Next.js front ends and short requests, while Railway is stronger for servers, workers and databases that need to keep running.' },
      { q: 'Can I host a database on Vercel?', a: 'Vercel connects to managed databases through its Marketplace rather than running a database on your project directly, while Railway and Render both offer managed Postgres in the same dashboard as your services.' },
      { q: 'Does Vercel support websockets?', a: 'At the time of writing Vercel Functions support WebSocket connections in public beta on all plans, but each connection closes when the function reaches its maximum duration, so clients need reconnect logic.' },
      { q: 'Is Render free tier good enough for a SaaS?', a: 'Render\'s free web service is fine for demos, but it spins down after 15 minutes without traffic and takes about a minute to wake, and free Postgres databases expire after 30 days.' },
      { q: 'How much does hosting a SaaS MVP cost per month?', a: 'A small SaaS MVP commonly runs on roughly $20 to $60 a month across app hosting, a worker and a managed database on these platforms, depending on traffic and instance sizes.' },
      { q: 'Can Thomas Osayi set up hosting for my SaaS?', a: 'Thomas Osayi\'s SaaS MVP package, from $1,200 in about 21 days, ships the app deployed on hosting that fits it, with environment variables, domains and background jobs configured.' },
    ],
    sources: [
      { title: 'Vercel Functions limits', publisher: 'Vercel', url: 'https://vercel.com/docs/functions/limitations' },
      { title: 'Do Vercel Functions support WebSocket connections?', publisher: 'Vercel', url: 'https://vercel.com/kb/guide/do-vercel-serverless-functions-support-websocket-connections' },
      { title: 'Railway pricing', publisher: 'Railway', url: 'https://railway.com/pricing' },
      { title: 'Render pricing', publisher: 'Render', url: 'https://render.com/pricing' },
      { title: 'Deploy for free', publisher: 'Render', url: 'https://render.com/docs/free' },
    ],
    body: `Hosting a marketing site is a solved problem. Hosting a SaaS is different, because a product has parts that do not fit neatly into a web request: a worker that sends emails in the background, a job that syncs data every hour, a websocket that keeps a dashboard live, a database that needs backups. Where those parts run is the real question behind Vercel vs Railway vs Render.
I deploy most of my Next.js work on Vercel, and I reach for a long-running server platform when a product needs one. This post compares the three for a SaaS backend specifically. If you are choosing hosting for a small business website instead, "Best hosting for a small business website in 2026" is the right read; this one assumes you are running an app with users, data and background work.
## Vercel vs Railway: what is the real difference?
Vercel runs your code as functions that start for a request and stop when it finishes, while Railway runs your code as containers that stay up until you stop them.
That difference decides almost everything else. On Vercel, each route handler, server action or API route becomes a Vercel Function. It scales automatically and you pay for the CPU time and memory it uses. The limit is time: at the time of writing, functions on Hobby can run for up to 300 seconds, and Pro can raise that to 800 seconds, with an extended 1,800 second maximum in beta. When a function runs out of time, you get the FUNCTION_INVOCATION_TIMEOUT error that "Vercel function timeout (FUNCTION_INVOCATION_TIMEOUT): causes and fixes" covers.
On Railway, you deploy a service, often from a Dockerfile or a detected framework, and it keeps running. A Node server, a Python worker, a Redis instance and a Postgres database can all sit in one project and talk over a private network. There is no request timeout of the same kind, because the process is not tied to a single request.
Render works like Railway in this respect, with long-running web services, background workers, cron jobs and managed databases. The main difference from Railway is how you pay.
## Vercel and Railway, option by option
Vercel is the strongest choice for the Next.js app itself, and Railway is the most flexible place for everything that needs to stay running.
### Vercel
- Best for: the Next.js front end, server-rendered pages, API routes that answer in seconds, and preview deployments for every branch.
- Cost range: Hobby is free with hard usage caps you cannot buy past; Pro is $20 per developer seat a month with $20 of included usage credit, at the time of writing.
- Pros: the smoothest Next.js deployment I know of; previews on every push; automatic scaling; a CDN in front of everything; cron jobs, queues and workflows built in.
- Cons: functions have a maximum duration; long-lived connections and always-on workers are newer, beta features; databases come from Marketplace partners rather than Vercel itself.
### Railway
- Best for: API servers, queue workers, bots, websocket servers and databases you want next to your code.
- Cost range: at the time of writing, Free is $0 with $1 of monthly credit after a 30-day $5 trial; Hobby has a $5 monthly minimum that includes $5 of usage; Pro has a $20 minimum that includes $20. Usage beyond that is billed by the second, roughly $20 per vCPU-month and $10 per GB of memory a month, plus $0.05 per GB of egress.
- Pros: anything that runs in a container runs here; managed Postgres and Redis in the same project; private networking; per-second billing; an optional serverless mode that sleeps idle services.
- Cons: no Next.js-specific previews and CDN features in the way Vercel has them; costs are usage-based, so set alerts; cron jobs must exit when finished.
## Render, and how it compares
Render offers the same long-running model as Railway with fixed monthly instance prices, which some founders find easier to budget.
### Render
- Best for: teams that want predictable monthly bills for web services, background workers and Postgres, and products moving off a traditional server.
- Cost range: at the time of writing, the Hobby workspace is $0 plus compute and Pro is $25 a month plus compute. Web services start free (512 MB), then $7 a month for under one CPU and 512 MB, and $25 a month for one CPU and 2 GB. Postgres starts free, then $6 a month for the smallest paid instance.
- Pros: simple fixed pricing; web services, private services, background workers and cron jobs as first-class types; managed Postgres and a Redis-compatible Key Value store; websockets on long-running services.
- Cons: free web services spin down after 15 minutes without traffic and take about a minute to wake; free Postgres databases expire 30 days after creation; background workers and cron jobs have no free tier.
## Where should background workers and scheduled jobs run?
Anything that runs for minutes or must keep running belongs on a long-running service or a purpose-built job system, not inside a request handler.
Typical SaaS background work includes sending onboarding emails, generating reports, syncing data from Shopify or an ad platform, processing uploads and calling AI models in bulk. On Vercel, the options at the time of writing are cron jobs that call a function, Vercel Queues (public beta), Vercel Workflows for multi-step jobs that can pause and resume, and Vercel Daemons (public beta) for always-on workers running in production only. Each workflow step and each function call still has the function duration limit.
On Railway, a worker is just another service with a start command that never exits, such as a BullMQ consumer reading from Redis. Railway cron jobs start a service on a schedule, run it, and expect it to exit. The minimum interval is five minutes, only one run can be active at a time, and failed runs are not retried automatically.
On Render, a background worker is its own service type billed like a web service, and cron jobs are billed per minute of runtime, from $0.00016 a minute on the smallest instance at the time of writing.
"Cron jobs and background jobs in Next.js on Vercel" covers the scheduling side in more depth.
## Where should the database live?
Put the database on a managed service close to where your code runs, and pick the host second if your database choice is already made.
On Railway and Render, managed Postgres sits in the same dashboard as your services, with private networking between them. That is convenient, and it keeps latency low between a worker and its data. Render lists point-in-time recovery of three days on Hobby and seven days on Pro and above at the time of writing.
On Vercel, you connect a database through the Marketplace or bring your own, such as Supabase, Neon or Firebase. The thing to watch is connection count. Functions scale out quickly, and each instance can open its own database connection, so use a pooled connection string or an HTTP-based driver.
Whichever you pick, test a restore before launch. "How to back up your Supabase or Firebase database (and test the restore)" walks through it. A backup you have never restored is a hope, not a plan.
## Can you run websockets on each platform?
Railway and Render handle websockets naturally because the server stays up, while Vercel supports them in public beta with connections that end at the function's maximum duration.
At the time of writing, Vercel Functions can serve WebSocket connections on all plans with Fluid compute. A connection stays on the instance that accepted it, in-memory state is not shared across instances, and the connection closes at the function's maximum duration, so the client must reconnect. Vercel suggests Server-Sent Events when data only flows from server to client, such as streaming AI responses, and an external store such as Redis for presence and fan-out.
For a chat feature or a live dashboard on an MVP, I usually skip raw websockets altogether and use Firestore listeners or Supabase Realtime. "Realtime in a web app: Firestore listeners vs Supabase Realtime vs websockets vs polling" compares those options.
## What does hosting a SaaS cost per month?
For a small SaaS MVP, a realistic budget is roughly $20 to $60 a month across app hosting, one worker and a managed database, before any heavy usage.
As an illustration, take a made-up B2B reporting tool with a few hundred users, a Next.js dashboard, a worker that pulls data from an ad platform every hour, and Postgres.
- Next.js app on Vercel Pro: $20 a month for one developer seat, with $20 of usage credit that a small app may not exhaust.
- Worker on Railway Hobby: a small Node process using a fraction of a vCPU and a few hundred megabytes of memory can stay near the $5 minimum, depending on how busy it is.
- Postgres on Render: $6 a month for the smallest paid instance, or more for extra memory and storage.
That lands around $31 a month before growth. The same app entirely on Render, with a $7 web service, a $7 worker and $6 Postgres, would be about $20 a month plus the $25 Pro workspace fee if you need team features. "What does it cost to run an AI-built app per month? A real budget" breaks down the other line items, such as email and auth.
> Set a spend alert on every usage-billed platform on day one. A stuck worker in a loop is the most common surprise bill I see.
## Which should you pick for your SaaS?
Choose by the shape of your workload: request-and-response apps fit Vercel, always-running processes fit Railway or Render, and many products use both.
- Next.js SaaS with short requests and a managed database such as Supabase or Firebase: Vercel alone.
- Next.js SaaS with heavy background work, long jobs or a websocket server: Vercel for the app, Railway or Render for the worker.
- Non-Next.js backend, such as Express, Django or Rails: Railway or Render.
- Founder who wants fixed monthly prices: Render.
- Founder who wants to pay only for what runs, including sleeping idle services: Railway.
If you are moving an app off another platform, "How to move a Replit app to Vercel: code, env vars, database and build settings" shows the steps for the most common case.
## The bottom line
Vercel, Railway and Render solve different halves of SaaS hosting. Vercel is the best place for a Next.js app and short functions; Railway and Render are better for servers, workers and databases that must keep running, with Railway billing by usage and Render by fixed instance. Start with the simplest setup that fits today's workload, add a worker platform when a job outgrows a function, and set spend alerts on day one. If you want it set up for you, my SaaS MVP package from $1,200 ships the app deployed with jobs and environments configured.`,
  },
  {
    slug: 'add-ai-features-to-a-saas-app',
    title: 'How to add AI to your SaaS app: practical features, server routes, costs and guardrails',
    description: 'How to add AI to a SaaS app: summaries, search, chat over your data and classification, server-side API calls, per-request costs at current prices, evals and guardrails.',
    date: d,
    keywords: ['add AI to my SaaS app', 'add AI features to SaaS', 'OpenAI API in Next.js', 'Claude API in a web app', 'AI feature cost per request'],
    service: 'saas-mvp-development',
    shortAnswer: 'Add AI to a SaaS app by picking one narrow feature, such as summaries, smarter search, chat over the customer\'s own data or automatic classification, and calling the OpenAI or Anthropic API from a server route that keeps the key secret, checks the user, limits usage and logs every call. At the time of writing a typical summary costs well under a cent per request on a small model, so the real work is in testing the output and setting guardrails, not in the API bill.',
    takeaways: [
      'Start with one AI feature tied to a job users already do in your app, not a general chatbot.',
      'Call model APIs only from server routes, and keep API keys in server-only environment variables.',
      'At the time of writing small models cost about $0.10 per million input tokens, so many features cost fractions of a cent per request.',
      'Rate limit AI routes per user and per account, and set a monthly spend cap with the provider.',
      'Build a small test set of real examples and rerun it whenever you change the prompt or the model.',
    ],
    faqs: [
      { q: 'What is the easiest AI feature to add to a SaaS app?', a: 'Summaries are usually the easiest, because the input is data your app already has, the output is short, and a user can check the result at a glance.' },
      { q: 'Can I call the OpenAI or Anthropic API from the browser?', a: 'No, the API key would be visible to anyone who opens developer tools, so calls should go through your own server route that checks the user before calling the model.' },
      { q: 'How much does an AI feature cost per request?', a: 'At the time of writing, summarizing a 3,000-token document into 300 tokens costs about $0.00045 on Claude Haiku 5.5 and about $0.009 on Claude Sonnet 5.5, before any caching discounts.' },
      { q: 'Do I need a vector database for AI search?', a: 'Not always, because Postgres with the pgvector extension handles embeddings for most MVPs, and plain keyword search plus a model to rank results is often enough to start.' },
      { q: 'How do I stop users from abusing an AI feature?', a: 'Limit requests per user and per account, cap input length, set a spend limit with the provider, and log every call so you can spot unusual usage quickly.' },
      { q: 'Can Thomas Osayi add AI features to my app?', a: 'Thomas Osayi\'s Fix Plus Features package, from $200 in about 5 days, covers up to three fixes plus one small feature such as an AI summary on an existing app.' },
    ],
    sources: [
      { title: 'Claude API pricing', publisher: 'Anthropic', url: 'https://platform.claude.com/docs/en/about-claude/pricing' },
      { title: 'API pricing', publisher: 'OpenAI', url: 'https://developers.openai.com/api/docs/pricing' },
      { title: 'Vercel Functions limits', publisher: 'Vercel', url: 'https://vercel.com/docs/functions/limitations' },
    ],
    body: `Most founders who ask me to add AI to their SaaS app do not need a chatbot. They need one feature that saves their users ten minutes a day: a summary of a long thread, a search box that understands what people mean, a way to ask questions about their own records, or automatic tagging of whatever comes in. Those features are small, cheap to run and easy to test, which makes them a much better first step than a general assistant.
This post covers what to build first, how to call the OpenAI or Anthropic API safely from a server route, what each request costs at current prices, and how to test and guard the output. It assumes a Next.js app, but the same structure applies to any backend.
## How do I add AI to my SaaS app without rebuilding it?
You add AI as one more server route that takes data your app already has, sends it to a model with clear instructions, and returns a result your interface shows next to the existing feature.
Nothing about your database, auth or billing needs to change. The pattern looks like this:
- A button or background trigger in the existing screen, such as "Summarize this ticket".
- A server route that checks who the user is and which records they can see.
- A function that loads those records, builds a prompt and calls the model API.
- A response, streamed or returned in one piece, that the screen displays.
- A log row that stores the user, the feature, token counts and cost.
The model provider is a detail you can swap later if you keep the call in one place. I wrap the provider SDK in a single function such as summarizeTicket in a file like lib/ai.ts, so changing from one model to another is a one-line change rather than a hunt through the codebase.
If your app was built with an AI builder and is still fragile, fix the basics first. "Fix or rebuild your AI-built app? How to decide before you spend more" helps you decide whether it is ready for new features.
## Which AI features are worth building first?
The best first AI features use data you already store, produce output a user can verify quickly, and replace a task people already do by hand.
### Summaries
Turn a long support thread, meeting notes, an order history or a set of reviews into a few lines. The input is already in your database, and a user can tell instantly if the summary is wrong.
### Search that understands meaning
Let users type "clients who missed two appointments" instead of building filters. This usually means creating embeddings for your records and storing them, often in Postgres with the pgvector extension, then letting a model rank or explain the results.
### Chat over the customer's own data
Answer questions about a user's own records by retrieving the relevant rows first and passing only those to the model. The retrieval step is what keeps answers grounded and keeps one customer's data away from another.
### Classification and extraction
Tag incoming emails by topic, pull fields out of uploaded documents, or flag messages that need a human. These are cheap, run in the background, and are easy to measure because there is a right answer.
## How do you call the OpenAI or Anthropic API from a server route?
Call the API only from your server, using a key stored in a server-only environment variable, after you have checked the user and loaded only the data they are allowed to see.
In a Next.js App Router project, that means a route handler such as app/api/ai/summarize/route.ts or a server action. The steps inside it:
- Read the session and reject the request with a 401 if there is no user.
- Load the record by ID and confirm it belongs to the user's account, returning a 404 if not.
- Build the prompt on the server. Never accept a raw prompt from the browser for a feature like this.
- Call the provider SDK with the key from an environment variable such as ANTHROPIC_API_KEY or OPENAI_API_KEY, with no NEXT_PUBLIC prefix.
- Set a maximum output length so a runaway response cannot cost more than you expect.
- Stream the result for anything longer than a sentence, so the user sees progress.
Two things catch people. First, Vercel Functions have a maximum duration, 300 seconds by default at the time of writing, so long generations or large batches belong in a background job. Second, keys with a NEXT_PUBLIC prefix are bundled into the browser. "API key exposed in your frontend? Which keys are safe and how to fix the rest" covers how to fix that if it has already happened.
## How much does each AI request cost?
At the time of writing, most practical SaaS AI features cost between a hundredth of a cent and about two cents per request, depending on the model and how much text you send.
Model APIs charge per million tokens, separately for input and output. A token is a small chunk of text, often part of a word, and the provider's token counter tells you exactly how many a prompt uses. Prices from the providers' pricing pages at the time of writing, for standard requests:
- Claude Haiku 5.5: $0.10 per million input tokens and $0.50 per million output tokens, for prompts up to 100,000 tokens.
- Claude Sonnet 5.5: $2 input and $10 output per million tokens.
- Claude Opus 5.5: $4 input and $20 output per million tokens.
- OpenAI gpt-6-luna: $0.10 input and $0.50 output per million tokens.
- OpenAI gpt-6.1-terra: $1 input and $5 output per million tokens.
- OpenAI gpt-6.2-sol: $2 input and $10 output per million tokens.
- OpenAI text-embedding-3-small: $0.02 per million tokens, for search embeddings.
Both providers discount batch processing by half for work that does not need an instant answer, and both discount repeated prompt prefixes through caching. Anthropic also notes that Claude 4.7 and later models use a newer tokenizer that produces about 30% more tokens for the same text, so count tokens with the model you will actually use.
## A worked example: costing AI for a help desk tool
As an illustration, picture a small help desk SaaS that wants two features: a summary button on long tickets and automatic tagging of every new ticket.
- Summary: a 3,000-token ticket thread in, a 300-token summary out. On Claude Haiku 5.5 that is 3,000 times $0.10 per million plus 300 times $0.50 per million, about $0.00045. On Claude Sonnet 5.5 it is about $0.009.
- Tagging: 500 tokens in and about 10 tokens out per ticket on gpt-6-luna, about $0.000055.
- Volume: 5,000 summaries and 20,000 tagged tickets a month.
Monthly cost: about $2.25 for summaries on Haiku 5.5, or about $45 on Sonnet 5.5, plus about $1.10 for tagging. Even on the larger model, that is a small line next to hosting and email.
Chat over data costs more because you send more context. Retrieving 8,000 tokens of a customer's records and returning a 500-token answer on Sonnet 5.5 is about $0.021 per question, so 10,000 questions a month is about $210. That is when model choice, caching and limits start to matter.
> Start every feature on the smallest model that passes your tests. Moving up a size is a config change, and many summaries and tags never need it.
## How do you stop one user from running up your bill?
Rate limit every AI route per user and per account, cap input size, and set a spend limit in the provider's console so a bug or an abusive user cannot cost more than you planned.
The checks I put on every AI route:
- A per-user limit, such as a set number of requests per minute and per day, stored in Redis or a database table.
- A per-account monthly allowance that matches the customer's plan, which also gives you an upgrade path.
- A cap on input length, trimming or rejecting anything larger than the feature needs.
- A maximum output token setting on every call.
- A monthly spend limit and usage alerts in the provider's console.
The providers also enforce their own rate limits, which rise as your account moves up their usage tiers. Anthropic describes Start, Build and Scale tiers on its pricing page. Handle a 429 response from the provider with a short retry and a friendly message rather than an error screen.
Logging cost per call is what turns this from guesswork into numbers. A simple ai_calls table with user, account, feature, model, input tokens, output tokens and cost lets you answer "which customer is using this most" in one query.
## How do you test AI features before users see them?
Build a small set of real examples with the answers you expect, run every prompt or model change against it, and only ship changes that score at least as well as the current version.
This is what people mean by evals, and for an MVP it does not need a framework. A spreadsheet or a JSON file works:
- Collect 30 to 50 real inputs, with customer data removed or anonymized.
- Write down what a good output looks like for each, or the correct tag for classification.
- Run the feature against every example and score the results, by hand for summaries and automatically for tags.
- Keep the failures and add new ones whenever a user reports a bad answer.
Classification is the easiest to measure because each example is simply right or wrong. Summaries need a human glance, but even ten minutes of reviewing before a release catches the worst regressions. "How to add tests to an AI-generated app, and what to test first" covers testing the non-AI parts of the same app.
## What guardrails does an AI feature need?
Guardrails keep the model inside the job you gave it: grounded in the user's own data, unable to reach other customers' records, and clearly labelled when it is unsure.
- Retrieve data with the user's permissions before calling the model, so the model never sees anything the user could not see.
- Treat text from documents, emails and web pages as data, not instructions, because it can contain text that tries to redirect the model.
- Ask for structured output, such as JSON with fixed fields, when the result feeds other code, and validate it before saving.
- Show sources or the records used, so users can check the answer.
- Keep a human in the loop for anything that sends messages, changes records or touches money.
- For health, legal or financial products, keep AI output as a draft for a professional and check your provider agreements. This is general information, not legal advice.
## Should AI live inside your app, or should you connect AI to your data?
Put AI inside your app when your customers need the feature; connect an assistant such as Claude to your data when your own team needs answers.
THG Brain is an example of the second approach. It is the internal data platform I built at The Hoop Gang, and it syncs the brand's sales, email, ads, support inbox and creator portal into one place that the team can query from their own Claude. Nobody had to build an AI chat screen. The team asks questions in the tool they already use, and Claude looks up the answers in THG Brain's data.
That works through the Model Context Protocol, which "How to connect Claude to your business data with MCP" explains step by step. For features your paying customers use, the server-route approach in this post is still the right one, because you control the prompt, the permissions and the cost.
## The bottom line
Adding AI to a SaaS app is mostly ordinary engineering: one narrow feature, a server route that checks the user, a key that never reaches the browser, rate limits, cost logging and a test set you rerun on every change. At the time of writing a summary on a small model costs a fraction of a cent, so the API bill is rarely the problem; bad output and missing limits are. Start with summaries or classification, measure them, and expand from there. If you want one AI feature added to an app that already works, my Fix Plus Features package is from $200 in about 5 days, and a new SaaS MVP with AI built in starts with the SaaS MVP package from $1,200.`,
  },
  {
    slug: 'cron-jobs-and-background-jobs-nextjs',
    title: 'Cron jobs and background jobs in Next.js on Vercel: setup, security, limits and queues',
    description: 'How to run cron jobs in Next.js on Vercel: vercel.json setup, plan limits, CRON_SECRET, function duration, Vercel Schedules, queues, Firebase and idempotent jobs.',
    date: d,
    keywords: ['cron jobs Next.js Vercel', 'Vercel cron jobs', 'CRON_SECRET', 'background jobs Next.js', 'Vercel Schedules'],
    service: 'saas-mvp-development',
    shortAnswer: 'On Vercel, a cron job is a route in your Next.js app that Vercel calls on a schedule you set in vercel.json, protected by a CRON_SECRET that Vercel sends as a Bearer token. At the time of writing Hobby cron jobs can run once a day and Pro can run every minute, each run is limited by the function\'s maximum duration, and Vercel does not retry failures, so long or important work belongs in a queue or workflow service and every job should be safe to run twice.',
    takeaways: [
      'Vercel cron jobs call a production route on a schedule defined in the crons array of vercel.json.',
      'At the time of writing Hobby cron jobs run at most once a day within the hour, and Pro jobs can run every minute.',
      'Set CRON_SECRET and reject any request whose Authorization header is not Bearer plus that secret.',
      'Vercel does not retry failed cron runs and can occasionally miss or duplicate one, so make jobs idempotent.',
      'Vercel now marks Cron Jobs as legacy in favour of Vercel Schedules, which is in public beta at the time of writing.',
    ],
    faqs: [
      { q: 'Do Vercel cron jobs run on preview deployments?', a: 'No, Vercel invokes cron jobs only on the production deployment, so you test the route by calling it directly on a preview or locally.' },
      { q: 'How often can a cron job run on the Vercel Hobby plan?', a: 'At the time of writing Hobby cron jobs can run once per day and may fire anywhere within the scheduled hour, while Pro and Enterprise can run every minute.' },
      { q: 'What is CRON_SECRET on Vercel?', a: 'CRON_SECRET is an environment variable you add to your project, and Vercel sends its value as a Bearer token in the Authorization header so your route can reject anyone else.' },
      { q: 'What happens if my cron job takes too long?', a: 'The run stops at the function\'s maximum duration with a timeout error, so split the work into batches or hand it to a queue or workflow service.' },
      { q: 'Does Vercel retry a failed cron job?', a: 'No, Vercel does not retry a failed cron invocation, so your job should catch up on outstanding work the next time it runs.' },
      { q: 'Can Thomas Osayi set up scheduled jobs for my app?', a: 'Thomas Osayi\'s Fix Plus Features package, from $200 in about 5 days, covers up to three fixes plus one small feature such as a secured nightly sync job.' },
    ],
    sources: [
      { title: 'Managing Cron Jobs', publisher: 'Vercel', url: 'https://vercel.com/docs/cron-jobs/manage-cron-jobs' },
      { title: 'Usage and pricing for Cron Jobs', publisher: 'Vercel', url: 'https://vercel.com/docs/cron-jobs/usage-and-pricing' },
      { title: 'Schedules limits', publisher: 'Vercel', url: 'https://vercel.com/docs/schedules/limits' },
      { title: 'Running background workers on Vercel', publisher: 'Vercel', url: 'https://vercel.com/kb/guide/background-workers-on-vercel' },
      { title: 'Schedule functions', publisher: 'Firebase', url: 'https://firebase.google.com/docs/functions/schedule-functions' },
    ],
    body: `Every SaaS ends up with work that nobody clicks a button for: a nightly report, an hourly sync from Shopify, a reminder email the day before a booking, a cleanup of expired trials. In a Next.js app on Vercel, the first tool for that is a cron job, and it is simpler than most people expect. The trouble starts when a job takes longer than a function is allowed to run, fails silently, or runs twice and charges someone twice.
This post covers how Vercel cron jobs work, the limits on each plan at the time of writing, how to secure them with CRON_SECRET, what to do when a job outgrows a single function, which queue services to look at, the Firebase alternative, and how to make jobs safe to repeat.
## How do cron jobs work in Next.js on Vercel?
A Vercel cron job is an ordinary route in your app that Vercel calls with a GET request on the schedule you define, so the job is just code in a route handler.
There is no separate worker or server. You write a route handler, for example app/api/cron/daily-digest/route.ts, that does the work and returns a response. You tell Vercel when to call it. At the scheduled time, Vercel sends a request to that path on your production deployment, the route runs like any other Vercel Function, and the result shows up in your logs.
A few behaviours follow from that design, and all of them come from Vercel's docs at the time of writing:
- Cron jobs run only on production deployments, never on previews.
- They are billed and limited like any other function invocation.
- They do not follow redirects, so a 3xx response ends the run.
- A cached response or a redirect does not appear in the logs, so mark cron routes dynamic with export const dynamic = 'force-dynamic'.
- You can trigger a route by hand locally by visiting it, such as http://localhost:3000/api/cron/daily-digest, because it is just a route.
One more thing changed recently. Vercel's docs now label Cron Jobs a legacy feature that will be migrated to Vercel Schedules, which adds time zones, private function targets, queue targets and schedules created at runtime. Schedules is in public beta at the time of writing. Existing cron jobs keep working, and the route code stays the same when you migrate.
## How do you set up a cron job in vercel.json?
Add a crons array to vercel.json with one entry per job, each with a path to your route and a schedule written as a cron expression in UTC.
The configuration has two fields per job:
- path: the route to call, which must start with a slash, such as /api/cron/daily-digest.
- schedule: a five-part cron expression, such as 0 13 * * * for 13:00 UTC every day.
After you deploy to production, the job appears in the project dashboard under Schedules, on the Cron Jobs tab, where you can view logs and disable all cron jobs for the project. To change a schedule, edit vercel.json and redeploy. To delete a job, remove its entry and redeploy.
Remember that the schedule is UTC. 13:00 UTC is 5am or 6am in Los Angeles depending on daylight saving, which matters for anything customer-facing like a morning summary email.
Two gotchas I have hit. If next.config.js has trailingSlash enabled, a request to /api/cron/daily-digest redirects to the same path with a trailing slash, and the cron job never reaches your function. Put the trailing slash in the path. And if a firewall rule challenges unknown traffic, it can block the cron request before your code runs, so exclude cron paths from those rules.
## What are the limits on each Vercel plan?
At the time of writing, every plan allows 100 cron jobs per project, but Hobby jobs can run only once a day within the scheduled hour, while Pro and Enterprise jobs can run every minute with per-minute precision.
### Cron Jobs
- Hobby: up to 100 cron jobs per project; minimum interval once per day; timing anywhere within the scheduled hour, so a 1am job can fire up to 1:59am. An expression that runs more often fails at deploy with "Hobby accounts are limited to daily cron jobs."
- Pro and Enterprise: up to 100 per project; every minute at the most; invoked within the scheduled minute.
### Vercel Schedules (public beta)
- Hobby: up to 1,000 schedules per team, at most every 15 minutes with a fixed 15-minute jitter window, and up to 5,000 runs per billing period.
- Pro: up to 10,000 schedules per team, as often as every minute with a default 1-minute jitter window.
- Schedules can target a private function or a queue, not only a public path.
Duration is the other limit. A cron run is a function invocation, so on Fluid compute it gets 300 seconds by default, with Pro able to raise that to 800 seconds and an extended 1,800 seconds in beta. "Vercel function timeout (FUNCTION_INVOCATION_TIMEOUT): causes and fixes" covers how to raise maxDuration and what to do when that is not enough.
## How do you secure a cron route with CRON_SECRET?
Add an environment variable named CRON_SECRET to the project, and in the route reject any request whose Authorization header is not the word Bearer, a space, and that secret.
Without this, anyone who guesses the path can trigger your job. Vercel sends the CRON_SECRET value automatically as a Bearer token when it calls the route. The check inside the handler is short:
- Read the authorization header from the request.
- Read process.env.CRON_SECRET.
- If the secret is missing, or the header does not equal Bearer followed by a space and the secret, return a 401 and stop.
- Only then run the job.
Vercel's guidance at the time of writing is a random string of at least 16 characters, using only characters valid in a header, such as letters and numbers. Watch for a trailing space or line break when you paste it, because that produces a 401 on every run.
Each deployment captures CRON_SECRET when it builds. Editing the variable changes nothing until you redeploy, and an Instant Rollback brings back the older deployment's secret along with its code. To rotate, update the variable, redeploy, then check the first run's log for a 2xx status.
## What happens when a job takes longer than the function limit?
When a cron run reaches the function's maximum duration it stops with a timeout, so long jobs need to be split into batches or handed to a queue or workflow that can retry and resume.
The patterns, from simplest to most robust:
- Process a batch per run: handle the oldest 200 records, save progress, and let the next run continue. Running every few minutes on Pro clears a backlog steadily.
- Fan out: the cron route only finds the work and publishes one message per item to a queue, and a consumer handles each item in its own invocation.
- Use a workflow engine for multi-step jobs that wait, call external APIs and need retries.
Vercel's own options at the time of writing are Vercel Queues (public beta), which offers retries and messages kept for up to 7 days, and Vercel Workflows, generally available since April 2026, where a run has no overall duration limit but each step is still bound by the function maximum.
> Write the batch version first. A cron job that processes a fixed number of records and remembers where it stopped solves most timeouts without any new service.
## Which queue or background job service should you use?
Use Vercel's built-in queues and workflows if you want everything on one bill, or a dedicated service such as Inngest, Trigger.dev or QStash when you want mature retries, dashboards and scheduling across hosts.
### Vercel Queues and Workflows
- Best for: apps already on Vercel that want queues and durable steps without another vendor.
- Cost range: Queues are billed per API operation, with the first 1,000,000 included on Hobby at the time of writing; workflow events are included up to 50,000 a month on Hobby.
- Pros: one platform; same deployments and environment variables; Schedules can target a queue directly.
- Cons: Queues is still in public beta; no built-in dead-letter queue.
### Inngest
- Best for: event-driven background functions with step-level retries.
- Cost range: free Hobby plan with 50,000 executions a month at the time of writing; Pro from $99 a month.
- Pros: steps, retries, throttling and a clear run history.
- Cons: another service to configure and monitor.
### Trigger.dev
- Best for: long-running tasks, such as AI pipelines or video processing, that would exceed function limits.
- Cost range: Free with $5 of monthly usage credit and 10 schedules; Hobby $10 a month; Pro $50 a month, at the time of writing.
- Pros: its pricing page states runs have no maximum duration; built-in schedules and concurrency controls.
- Cons: usage-based compute to budget for.
### Upstash QStash
- Best for: simple HTTP message delivery and schedules with very little setup.
- Cost range: 1,000 messages a day free; pay as you go at $1 per 100,000 messages, at the time of writing.
- Pros: works from any host; calls your existing routes.
- Cons: you still write the handler logic and idempotency yourself.
## What about Firebase scheduled functions?
If your backend is Firebase, a scheduled Cloud Function is the natural alternative to Vercel cron, with the job running inside Google Cloud next to Firestore.
You write the job with onSchedule from firebase-functions/v2/scheduler, passing either crontab syntax or a phrase such as "every day 00:00", and deploy it with the rest of your functions. Under the hood, Firebase creates a Cloud Scheduler job for each one.
Costs at the time of writing: Cloud Functions are not available on the free Spark plan, so you need the pay-as-you-go Blaze plan. Cloud Scheduler charges $0.10 per job per month, with three jobs free per billing account, not per project. Invocations come out of the Blaze free allowance of 2 million a month before you pay per call.
This keeps scheduled work beside your data and Firebase Admin credentials, and off your Next.js host entirely. NOM, the food discovery app I built, runs on Firebase, and for a Firebase product I would keep scheduled work in Firebase too rather than splitting it across platforms.
## How do you make jobs safe to run twice?
Make every job idempotent, which means running it twice has the same effect as running it once, and reconciliation-based, which means it picks up everything outstanding since the last success.
Vercel's docs say plainly that cron delivery is best effort: a run can be missed, and the same scheduled run can occasionally be invoked more than once. A job that overlaps its own next run can also start twice. So design for it:
- Prefer "set status to sent" over "add one to the sent count".
- Store a unique key for each unit of work, such as the booking ID plus the reminder date, and skip anything already done.
- Query for everything not yet processed instead of "everything from the last hour", so a missed run catches up.
- Use a lock, such as a Redis key with an expiry, to stop two runs working at once.
- Record each run's start, finish and item count in a table so you can see gaps.
As an illustration, picture a booking app that emails reminders the day before an appointment. The cron job runs hourly on Pro, selects bookings for tomorrow where reminder_sent_at is empty, sends each email with an idempotency key, and sets reminder_sent_at. If a run is missed, the next one sends the backlog. If a run is duplicated, nothing sends twice.
## The bottom line
Cron jobs in Next.js on Vercel are routes on a schedule: define them in vercel.json, protect them with CRON_SECRET, mark them dynamic, and remember they run only in production. At the time of writing, Hobby runs once a day and Pro every minute, each run is capped by the function's maximum duration, and Vercel does not retry failures. Batch the work, move long jobs to Queues, Workflows, Inngest, Trigger.dev or QStash, and make every job safe to run twice. If you want a scheduled job built properly into an existing app, my Fix Plus Features package from $200 covers it.`,
  },
];
