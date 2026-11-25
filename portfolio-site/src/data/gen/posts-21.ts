// Generated articles, batch 21 (Nov 25 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-25';

export const postsGen21: Post[] = [
  {
    slug: 'neon-vs-supabase',
    title: 'Neon vs Supabase for a SaaS MVP: Postgres cost, limits and which to pick',
    description: 'Neon vs Supabase for the Postgres behind a SaaS MVP: free tier limits, paid pricing at the time of writing, branching, auth, the Databricks deal and which to pick.',
    date: d,
    keywords: ['Neon vs Supabase', 'Neon Postgres pricing', 'Supabase Postgres for SaaS', 'serverless Postgres for MVP', 'Neon or Supabase'],
    service: 'saas-mvp-development',
    shortAnswer: "Pick Supabase if you want Postgres plus auth, storage and an admin dashboard in one product with a predictable $25 per month Pro plan. Pick Neon if you only need the database, want branching for previews and want to pay per compute hour with no monthly minimum. Both are real Postgres, so the choice is about the surrounding platform and the billing model, not the SQL.",
    takeaways: [
      "Neon and Supabase both run standard Postgres, so your schema, queries and an ORM like Prisma work on either.",
      "Supabase is a bundle (database, auth, storage, realtime, functions) billed mostly as a flat monthly plan, while Neon is billed by compute hours and storage with no monthly minimum at the time of writing.",
      "The free tiers fail differently: Supabase pauses idle free projects after a week, and Neon suspends compute when a project uses up its free compute hours.",
      "Neon branching makes a copy of the database for each preview deployment, which is the feature I would choose it for.",
      "Databricks announced it was acquiring Neon in May 2025, and Neon's pricing page now presents it as part of Databricks.",
    ],
    faqs: [
      { q: 'Is Neon cheaper than Supabase?', a: "For a small, mostly idle database Neon can cost less because it scales to zero and has no monthly minimum at the time of writing, but a database that runs all day can cost more on Neon than on Supabase Pro's flat $25 plan." },
      { q: 'Can I move from Supabase to Neon later, or the other way?', a: 'Yes, the database itself moves with standard Postgres tools like pg_dump and pg_restore, but anything that depends on Supabase Auth, Storage or row level security tied to auth.uid() has to be rebuilt or replaced.' },
      { q: 'Does Neon have authentication like Supabase?', a: "Neon's plans page lists an Auth feature at the time of writing, but Supabase Auth is the more established, more documented choice if you want auth from the same vendor as your database." },
      { q: 'Will my free database be deleted if I stop using it?', a: 'Supabase pauses free projects after about a week of inactivity and you can unpause them, while Neon scales idle compute to zero after five minutes and wakes it on the next connection.' },
      { q: 'Which one does Thomas Osayi use for a SaaS MVP?', a: 'Thomas Osayi picks per project, and the SaaS MVP package from $1,200 over about 21 days includes setting up the database, auth, dashboard and payments on whichever of the two fits the product.' },
    ],
    sources: [
      { title: 'Neon pricing', publisher: 'Neon', url: 'https://neon.com/pricing' },
      { title: 'Neon plans and Free plan limits', publisher: 'Neon', url: 'https://neon.com/docs/introduction/free-tier' },
      { title: 'Supabase pricing', publisher: 'Supabase', url: 'https://supabase.com/pricing' },
      { title: 'Databricks agrees to acquire Neon', publisher: 'Databricks', url: 'https://databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems' },
      { title: 'Following Neon acquisition, Databricks launches serverless Lakebase database', publisher: 'SiliconANGLE', url: 'https://siliconangle.com/2025/06/11/following-neon-acquisition-databricks-launches-serverless-lakebase-database/' },
    ],
    body: `Neon and Supabase get compared constantly, and the comparison is a little strange, because underneath both of them is the same thing: Postgres. Your tables, indexes, joins and Prisma schema behave the same on either one. What differs is everything wrapped around the database and the way each one sends you a bill.
I set up Postgres for SaaS MVPs, and this is the comparison I walk founders through. It covers what each product actually is, the free tiers and paid prices at the time of writing (checked on November 25, 2026), the features that matter for a first version, and an honest pick for different kinds of founders. If you are still deciding whether you want Postgres at all, "Firebase vs Supabase for your MVP: how to choose" covers that earlier decision.
## Is Neon or Supabase better for a SaaS MVP?
Supabase is better if you want one product that gives you a database, sign-in, file storage and an admin dashboard, and Neon is better if you only want a Postgres database that scales to zero and branches cleanly.
That is the whole decision in one sentence, and most of this post is detail behind it. Supabase is a backend platform that happens to be built on Postgres. Neon is a Postgres service that has been adding features around the database. A typical Supabase app talks to the Supabase client library for auth, storage and queries. A typical Neon app talks to Postgres through an ORM or a driver, with auth handled by something else, like Clerk, Auth.js or your own code.
So the useful question is not which database is faster. It is how much of the backend you want one vendor to own. If the answer is as much as possible, lean Supabase. If the answer is just the data, lean Neon.
## What does each one cost at the time of writing?
At the time of writing, Supabase Pro starts at $25 per month per organization, while Neon's paid plans have no monthly minimum and charge per compute hour and per gigabyte of storage.
### Supabase
- Best for: founders who want auth, storage and the database from one vendor with a predictable monthly bill.
- Free: 2 active projects, 500 MB of database per project, 50,000 monthly active users, 5 GB of egress, 1 GB of file storage, and no automatic backups. Free projects pause after one week of inactivity.
- Pro: from $25 per month, which includes $10 of compute credit (enough for one Micro instance), 8 GB of disk per project, 100,000 monthly active users, 250 GB of egress, 100 GB of file storage and daily backups kept for 7 days. A spend cap is on by default.
- Extras to budget for: each additional project needs its own compute (a Small instance is listed at $15 per month), and point in time recovery is an add-on at $100 per month per 7 days of retention.
- Pros: one dashboard for everything, mature auth, row level security tied to the signed-in user, flat pricing that is easy to forecast.
- Cons: the free tier pauses, backups only start on Pro, and leaving later means replacing auth and storage too.
### Neon
- Best for: founders who already have auth and only want hosted Postgres, especially with preview deployments.
- Free: up to 100 projects, 100 compute unit hours per project per month, 1 GB of storage per project (20 GB across the account), autoscaling up to 2 compute units (8 GB of RAM), 10 branches per project and 5 GB of egress per project. Compute scales to zero after 5 minutes idle, and that cannot be turned off on Free.
- Launch: pay as you go at $0.106 per compute unit hour and $0.35 per GB-month of storage, with no monthly minimum.
- Scale: $0.222 per compute unit hour with the same storage rate, aimed at larger production workloads.
- Pros: you pay close to zero when nobody is using the app, branches are cheap and fast, and it is plain Postgres with nothing else to migrate away from.
- Cons: the bill moves with usage, and you assemble auth, storage and background jobs yourself.
> Always check both pricing pages on the day you sign up. Both companies have changed their plans before, and they will change them again.
## How do the free tiers fail when you outgrow them?
Supabase's free tier mostly fails by pausing an idle project, while Neon's fails by suspending compute when a project uses up its 100 free compute hours for the month.
This matters more than the headline limits, because it decides what happens to your app the week nobody is watching. A Supabase free project that sits unused for a week gets paused. You unpause it from the dashboard, but if a customer tries the demo in the meantime, it will not load. For a real product with paying users, that is the main reason to move to Pro early.
Neon handles idle time the opposite way. Compute sleeps after five minutes and wakes on the next connection, which adds a short cold start to the first query. The hard wall is the compute allowance. Neon's docs say that when a free project runs out, compute is suspended until the next billing period or until you upgrade, and connections fail with SQLSTATE 53000. Even pg_dump stops working, so do not wait until the limit hits to take a backup.
Neither failure is a problem for a prototype. Both are a problem for a product a customer is paying for, which is why I treat the free tiers as development environments and budget for a paid plan before launch.
## What does a small SaaS actually pay on each?
A small SaaS with light traffic usually pays $25 to around $50 a month on Supabase and anywhere from a few dollars to a few tens of dollars on Neon, depending on how many hours the database is awake.
Here is an illustration, not a quote. Picture a scheduling tool for small clinics with 40 paying accounts, used mainly during business hours, and 2 GB of data.
On Supabase Pro, that is $25 a month, with the included compute credit covering one Micro instance. If the database needs more memory, moving up an instance size adds the difference in compute. If you also want a separate staging project, budget for its compute too.
On Neon Launch, suppose the database runs at 1 compute unit for about 10 hours on weekdays and sleeps the rest of the time. That is roughly 220 compute unit hours, or about $23, plus about $0.70 for 2 GB of storage. If the app gets a background job that pings the database every minute, the database never sleeps, compute hours climb toward 730 a month, and the bill rises with them.
The lesson is that Neon rewards apps that are genuinely idle, and Supabase rewards apps that want a steady, known number. Neither is cheap or expensive in the abstract. Look at when your users are active and whether anything keeps the database awake.
## Which handles auth, storage and the rest of the backend better?
Supabase handles the rest of the backend better today, because auth, storage, realtime and edge functions are long-standing parts of the product and they share one permission system.
The big advantage is row level security. In Supabase, a policy can say a user may only read rows where the organization matches one they belong to, and the database enforces it using the signed-in user's ID. That is a strong default for a multi-tenant SaaS, as long as the policies are written correctly. "Is your Lovable or Bolt app leaking data? Check Supabase row level security" covers how that goes wrong.
Neon's plans page now lists Auth, object storage and functions alongside the database at the time of writing. They are newer, and I would still pair Neon with a dedicated auth provider for a paid product today. "Clerk vs Supabase Auth vs Firebase Auth for a SaaS MVP" compares those options.
If your app is server rendered with Next.js and every query already goes through your own API routes with Prisma, the Supabase extras matter less. You enforce permissions in your server code either way, and the database is just the database.
## Why does Neon branching matter for an MVP?
Neon branching matters because it gives every preview deployment its own copy of the database, so you can test a migration on real-shaped data without touching production.
A branch in Neon is a copy-on-write clone of a database at a point in time. Creating one is fast and does not duplicate all the storage up front. In practice, I connect each pull request's preview deployment to a branch, run the migration there, click through the app, and delete the branch when the change ships. If the migration breaks something, production never sees it.
Supabase has its own branching for preview environments, and it works well with its migrations workflow, but it is tied more closely to the Supabase project structure and its own tooling. For a small team that ships database changes every week, Neon's branches are one of the cleanest ways I know to make those changes boring. "How to change your Supabase database safely with migrations" covers the Supabase side of the same habit.
On Neon's Free plan you get 10 branches per project, which is plenty for one developer. Extra branches on paid plans are listed at $1.50 per branch-month at the time of writing.
## Does the Databricks acquisition change anything?
For a small SaaS it changes little day to day, but it is worth knowing that Neon is now part of a much larger data company and its roadmap follows that company's priorities.
Databricks announced in May 2025 that it had agreed to acquire Neon, in a deal SiliconANGLE reported at about $1 billion. A month later, Databricks launched a serverless Postgres product called Lakebase built on Neon's technology. Neon's own pricing page now presents Neon as coming from Databricks. At the time, Neon told existing customers that it was not going anywhere.
What I take from this as a builder is mixed. A large owner makes it less likely the service disappears. It also means pricing and packaging can shift to fit a bigger strategy, and Neon has already reworked its plans more than once, which is why it keeps a page of legacy plans. Supabase remains an independent company. Neither fact should decide your choice alone, but both are a reason to keep your schema in migrations and your data exportable with pg_dump, so a move is a weekend of work and not a rewrite.
## Which should you pick for your situation?
Pick based on who you are and what the app already uses, not on benchmarks.
- Non-technical founder building a first version with an AI builder or a freelancer: Supabase. One dashboard, auth included, and a flat $25 once you launch.
- Developer building on Next.js with Prisma and a separate auth provider: Neon. You only need the database, and branches fit a preview-deployment workflow.
- App with lots of idle time, like an internal tool used a few hours a week: Neon, because scale to zero keeps the bill near zero.
- App with steady all-day traffic and file uploads: Supabase, because the flat plan and built-in storage are easier to budget.
- App that already lives on Supabase and works: stay. Migrating a working product for a small price difference is rarely worth it.
On either one, serverless functions can open too many connections under load. Use the pooled connection string, and read "Too many connections in Postgres on serverless" before launch day.
## The bottom line
Neon vs Supabase is not really a database question, since both are standard Postgres. Supabase sells a backend with a flat monthly price, and Neon sells a database billed by the hour with excellent branching. If you want the fewest moving parts, choose Supabase. If you already have auth and want a lean, branchable database, choose Neon. Whichever you pick, keep migrations in your repo, take backups you have actually restored, and recheck the pricing pages, because the numbers above are only true at the time of writing.
When I build a SaaS MVP, choosing and setting up the database is part of the work, along with auth, the dashboard and payments. The package is in the SaaS MVP development service page, and "How much does an MVP cost? SaaS MVP prices and what drives them" explains what moves the price.`,
  },
  {
    slug: 'free-trial-vs-freemium',
    title: 'Free trial vs freemium for a SaaS: trial length, card up front and how to build it',
    description: 'Free trial vs freemium for a SaaS: when each fits, how long a trial should run, card required or not, and how to set up a trial in Stripe without surprising anyone.',
    date: d,
    keywords: ['free trial vs freemium', 'SaaS free trial length', 'credit card required free trial', 'Stripe free trial setup', 'freemium SaaS model'],
    service: 'saas-mvp-development',
    shortAnswer: "A free trial gives full access for a limited time and then asks for payment, while freemium gives limited access forever and asks for payment to unlock more. For most early B2B SaaS products a 14 day trial is the simpler, cheaper choice, and freemium only pays off when free users cost you almost nothing and bring in other users.",
    takeaways: [
      "A free trial limits time, freemium limits features or usage, and the right choice depends on how fast a user can see the value.",
      "Freemium is a long-term cost, because every free account still needs hosting, support and security, so it only works when free users are cheap and spread the product.",
      "Asking for a card up front filters out casual signups but also blocks people who wanted to look first, so the trade-off is volume versus intent.",
      "Stripe supports trials with or without a card, and its trial_settings option decides whether a cardless trial cancels, pauses or invoices when it ends.",
      "Card networks have rules for trials, so send a reminder before the first charge and make cancelling easy.",
    ],
    faqs: [
      { q: 'How long should a SaaS free trial be?', a: 'Long enough for a typical user to reach the first real result twice, which for many simple B2B tools is 7 to 14 days, and longer only if setup genuinely takes weeks.' },
      { q: 'Should I require a credit card for a free trial?', a: 'Require one when you want fewer, more serious signups and your product is easy to evaluate quickly, and skip it when you need people to try the product before they trust you with a card.' },
      { q: 'Can I offer both a free plan and a free trial?', a: 'Yes, a common hybrid is a free plan with limits plus a time-limited trial of the paid plan, but it doubles the rules your app has to enforce, so I usually start with one.' },
      { q: 'What happens in Stripe when a trial ends without a card?', a: 'It depends on trial_settings.end_behavior.missing_payment_method: cancel ends the subscription, pause stops it until a card is added, and create_invoice sends an invoice that goes past due if unpaid.' },
      { q: 'Can Thomas Osayi set up trials and billing in my SaaS?', a: 'Yes, Thomas Osayi includes Stripe payments in the SaaS MVP package from $1,200 over about 21 days, and a trial or free plan is part of that billing setup.' },
    ],
    sources: [
      { title: 'Use free trial periods on subscriptions', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/trials/free-trials' },
      { title: 'Compare trial offers and free trial periods', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/trials/compare' },
      { title: 'Manage compliance requirements for trials and promotions', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/trials/manage-trial-compliance' },
    ],
    body: `Every SaaS founder hits the same question right before launch: do I let people in for free, and if so, for how long? The two common answers are a free trial and a freemium plan. They sound similar, they are often lumped together, and they lead to very different products, support loads and hosting bills.
I set up billing in SaaS MVPs, so I see this decision at the point where it turns into code. This post compares the two, covers trial length and the card question without pretending there is a universal conversion number, and then shows how a trial actually works in Stripe. If you have not settled your pricing structure yet, "SaaS pricing models compared: flat, per-seat, tiered, usage-based and revenue-based" is the earlier step. This one assumes you know what you will charge and are deciding how people get to the point of paying.
## What is the difference between a free trial and freemium?
A free trial gives a new user the paid product for a limited time, and freemium gives them a limited product for an unlimited time.
That one difference changes what your app has to do. With a trial, the clock is the limit. Every account starts with the full feature set, and on a set date it either converts to paid or loses access. With freemium, the product itself is the limit. A free account might get three projects, one seat, 100 records a month or no exports, and it stays free until the user hits a wall and upgrades.
The decision also changes who you are serving. A trial user is evaluating. They signed up to answer one question, does this solve my problem, and your job is to get them to that answer before the trial ends. A freemium user may never intend to pay. Some will upgrade when they grow, some will tell their colleagues, and many will simply use the free plan for years.
Hybrids exist, like a free plan plus a trial of the top tier. They can work, but they double the rules your code has to enforce, so for a first version I recommend picking one model.
## When is a free trial the better choice?
A free trial is the better choice when your product shows its value within days and every user costs you real money to serve.
Most B2B tools I see from early founders fit that description. A scheduling tool for clinics, a quote builder for a print shop, a creator management dashboard for a brand: in each case a buyer can tell within a week whether it saves them time, and the customer count you need is in the dozens or hundreds, not the millions. A trial gives those buyers a deadline, which is useful. People decide when there is a date on the calendar.
A trial also keeps your costs bounded. Every account that is not paying is gone after the trial window, so you never end up hosting, emailing and supporting thousands of free accounts that will never convert.
SQWAD, the creator program software I am building for Shopify brands, uses this shape: paid tiers with the first month free, rather than a permanent free plan.
![SQWAD pricing tiers: Starter $99 per month, Pro $399 per month and Scale $999 per month plus 1 percent, with the first month free.](/shots/sqwad-home-s4.jpg)
For a product where the buyer is a business and the value shows up in the first few weeks of real use, that is a simpler offer to explain and a simpler one to build.
## When does freemium make more sense?
Freemium makes sense when a free user costs you almost nothing, the product gets better or spreads as more people use it, and you can afford to wait a long time for revenue.
The classic freemium products have something in common: a free user does work for the company. They invite teammates, share documents with people outside the product, or put the product's name in front of new users every time they use it. In that case the free plan is a marketing channel and its hosting cost is the marketing budget.
If none of that is true for your product, freemium is mostly a cost. Each free account still needs a database row, sign-in, password resets, transactional email, security updates and, sooner or later, a support reply. Freemium also asks a harder design question than a trial: where exactly is the line between free and paid? If the free plan is too generous, nobody upgrades. If it is too thin, nobody sticks around long enough to care. Getting that line right usually takes several rounds of real usage data, which an early product does not have yet.
So my rule of thumb is that freemium is a growth strategy for products with network effects and very low marginal cost, not a default for a first version.
## How long should a free trial be?
A trial should be long enough for a typical new user to reach the first real result, and then use it once more, which for many simple B2B tools means somewhere between 7 and 14 days.
I avoid quoting a single best length, because the honest answer depends on your setup time. Work backwards from the product:
- If a new user can sign up and get a result in one sitting, a 7 day trial is enough.
- If they need to import data, invite a colleague or connect another tool, 14 days gives room for that to happen during a normal work week.
- If value only appears after a full business cycle, like a month of invoices or a payroll run, a 30 day trial is reasonable.
Longer is not automatically kinder, since a long trial invites people to put off trying the product. A shorter trial paired with a good onboarding flow often gets people to the result sooner. "How to design a SaaS onboarding flow that gets users to their first win" covers that side of it, and it matters more than the exact number of days.
> Pick the trial length after you have watched three or four real people set up the product. The time it takes them is a better guide than any benchmark.
## Should you require a credit card to start a trial?
Require a card when you want fewer, more serious trial users, and skip the card when trust is the bigger obstacle and you need people to see the product first.
This is a trade-off between volume and intent, and you will see claims online about exact conversion rates for each option. I am not going to repeat a number here, because the figures vary widely by product and audience, and I have not seen one I would stake your pricing decision on. What I can say is what each choice does mechanically.
With a card up front, fewer people start a trial, but everyone who does has already cleared the hardest step. If they do nothing, the subscription converts to paid on the end date. That makes the reminder email before the first charge important, both for trust and for the card network rules covered below.
Without a card, more people start, many of them just looking. Nobody converts unless they come back and add payment details, so your product has to bring them back with in-app prompts, emails and a clear moment where upgrading makes sense.
For a B2B tool with a small, known audience, I lean toward no card and a short trial, because the first few customers often need to see it working before trusting a new company. For a product with lots of casual signups or abuse risk, a card up front saves real money.
## How do you set up a free trial in Stripe?
In Stripe, the classic way is to create the subscription with trial_period_days or trial_end, and Stripe holds the subscription in trialing status until that date, then starts billing.
Here is how that works in practice, based on Stripe's docs at the time of writing:
- Create the subscription with trial_period_days set to the trial length. Stripe limits trial periods to 730 days.
- During the trial, the subscription status is trialing. Stripe creates a zero amount invoice when the trial starts.
- When the trial ends, Stripe creates an invoice and attempts the charge about an hour later, and a new billing period begins.
- A few days before the end, Stripe sends a customer.subscription.trial_will_end event. Use it to check for a payment method and to send your own reminder.
- To end a trial early, for example when a user clicks upgrade now, update the subscription with trial_end set to now.
If you use Stripe Checkout, pass trial_period_days inside subscription_data when creating the session. Stripe's docs now also describe a newer feature called trial offers, which can put a trial on a single subscription item and can charge an introductory price. Stripe recommends trial offers for new integrations at the time of writing, but Checkout support for them is still in private preview, so for a typical MVP using Checkout, the free trial period described above is the practical option.
Whichever you use, your app should not decide access by guessing. Store the subscription status from Stripe webhooks in your own database and check it on every request. "Stripe payment went through but your app did not update? Fix the webhook" covers the most common way that breaks.
## How do you run a trial without asking for a card?
Stripe lets you start a trial with no card, and the setting trial_settings.end_behavior.missing_payment_method decides what happens if the user never adds one.
There are three options:
- cancel: the subscription is cancelled at the end of the trial, and Stripe sends customer.subscription.deleted.
- pause: the subscription pauses and stops cycling until the customer adds a card and it is resumed, and Stripe sends customer.subscription.paused.
- create_invoice: Stripe issues an invoice anyway, and the subscription goes past due if nothing is paid.
For Checkout, set payment_method_collection to if_required so the card field becomes optional, and put the trial length and end behavior inside subscription_data. To collect a card later, send the user to the Stripe customer portal when the trial_will_end event arrives.
I usually choose pause for B2B products. The account and its data stay in place, the user sees a clear "add a card to continue" screen in your app, and resuming is one step. Stripe's own docs also warn that cardless trials attract spam signups, and suggest requiring an account and a captcha before the trial starts. I agree, and I would add a limit of one trial per workspace.
## What rules apply when a trial turns into a paid plan?
Card networks have requirements for trials that convert to paid, and Stripe can handle most of them if you turn on its trial reminder emails.
Stripe's compliance page for trials says that with customer emails enabled, it sends a reminder 7 days before a trial ends, or as soon as the trial starts if the trial is shorter than 7 days. The reminder includes a link to add or update payment details and a cancellation link. Receipts also show trial information and the cancellation URL, and Stripe appends trial text to the card statement descriptor. If you send your own emails instead, Stripe notes that you are still responsible for meeting the requirements.
Separately, subscription and automatic renewal laws in some places, California among them, add their own disclosure and cancellation rules. This is general information, not legal advice. Have someone qualified review your signup and cancellation flow if you are unsure.
In practice, the build checklist is short: clear trial terms on the pricing page and at checkout, a reminder before the first charge, an easy cancel button in the app or the customer portal, and no surprise charges.
## The bottom line
Free trial vs freemium comes down to what you are limiting. A trial limits time and suits most early B2B SaaS products, because buyers can judge value in days and you are not paying to host people who will never pay. Freemium limits features and suits products with very cheap free users who bring in more users. Choose the trial length from how long real users take to get a result, choose card or no card based on whether you need volume or intent, and let Stripe handle the trial mechanics and reminders while your app reads the subscription status from webhooks.
Setting up trials, plans and Stripe webhooks is part of the payments work in my SaaS MVP package. If your app already exists and its billing is half wired, the "Stripe test mode to live mode: the checklist I use before taking payments" post is a good place to start.`,
  },
  {
    slug: 'team-accounts-and-invites-in-saas',
    title: 'Team accounts and invites in a SaaS app: data model, invite links, seats and ownership',
    description: 'How to build team accounts and invites in a SaaS app: workspaces and memberships, invite tokens that expire, email invites, seat billing, ownership transfer and removals.',
    date: d,
    keywords: ['team accounts and invites', 'SaaS team invites', 'workspace data model', 'invite link expiry', 'per-seat billing in SaaS'],
    service: 'saas-mvp-development',
    shortAnswer: "Model team accounts with three tables: organizations, memberships that link a user to an organization with a role, and invitations that hold a hashed, single-use token with an expiry date. Data belongs to the organization, not the user, so people can join, leave and change owners without anything breaking, and seat billing simply counts active memberships.",
    takeaways: [
      "Make the organization (or workspace) the owner of all data from the first version, even if every early customer is a single person.",
      "A membership row links one user to one organization with one role, and a user can hold many memberships.",
      "Invite tokens should be long, random, stored hashed, single use and expiring, and accepting one must check the signed-in email matches the invite.",
      "Seat billing works best as the count of active memberships synced to the Stripe subscription quantity on every join and removal.",
      "Every organization needs exactly one owner at all times, so ownership transfer and leaving have to be designed together.",
    ],
    faqs: [
      { q: 'Should every user get a personal workspace?', a: 'Creating a workspace automatically at sign-up is the simplest pattern, because it lets a solo user work immediately and invite teammates later without migrating any data.' },
      { q: 'How long should a team invite link last?', a: 'Seven days is a common, reasonable default for a team invite, with a resend button that issues a fresh token and invalidates the old one.' },
      { q: 'Do pending invites count as paid seats?', a: 'That is a pricing choice, but most teams find it fairer to bill only accepted memberships and to cap pending invites so nobody can bypass the seat limit.' },
      { q: 'What happens to a removed member\'s data?', a: 'It stays with the organization, because the organization owns it, and the removed person simply loses access and is shown as a former member on anything they created.' },
      { q: 'Can Thomas Osayi build team accounts into my SaaS?', a: 'Yes, Thomas Osayi builds multi-role team accounts, invites and admin tools as part of the Full SaaS Platform package from $3,000 over about 45 days.' },
    ],
    sources: [
      { title: 'Forgot Password Cheat Sheet (token handling)', publisher: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html' },
      { title: 'Set up per-seat pricing', publisher: 'Stripe', url: 'https://docs.stripe.com/subscriptions/pricing-models/per-seat-pricing' },
      { title: 'Prorations', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/prorations' },
    ],
    body: `The first version of most SaaS apps is built for one person. One user signs up, one user owns the data, one user pays. Then the first real customer asks the obvious question: can I add my business partner? If the data belongs to the user, the honest answer is not without a migration.
Team accounts are one of the features I most want in place before launch, because adding them later means moving every record from user ownership to team ownership while customers are using the app. This post covers the data model, how invite links should work, the email flow, seat billing, ownership transfer and removing people. It does not repeat what each role is allowed to do. That lives in "Roles and permissions in a SaaS app: a practical guide for founders", and if you are on Firestore, "Multi-tenant SaaS with Firestore: data layout, security rules and custom claims" covers the security rules side.
## What data model do team accounts need?
Team accounts need three tables: organizations, memberships that connect users to organizations, and invitations for people who have not joined yet.
Call the first table organizations, workspaces or teams, whatever your users would say. It holds the name, the plan, the Stripe customer ID and the billing details. The users table stays about the person: name, email, sign-in method.
The memberships table is the join between them, with a few columns:
- organization_id and user_id, with a unique constraint on the pair so nobody is added twice.
- role, such as owner, admin or member.
- status, such as active or removed, plus created_at and removed_at.
Then every business record, every project, invoice, booking or file, gets an organization_id. Not a user_id as the owner. You can still store created_by so you know who made it, but access is decided by the organization.
This one choice is what makes everything else in this post easy. A user can belong to several organizations, an agency can manage many clients, people can leave without taking data with them, and every query filters by the current organization. I recommend doing it even if your first ten customers are solo, by creating one organization per user automatically at sign-up.
## How do users belong to more than one organization?
A user belongs to several organizations by holding several membership rows, and the app tracks which one is active in the current session.
The pattern looks like this. After sign-in, load the user's active memberships. If there is one, use it. If there are several, show a workspace switcher and remember the last one used. Every request then carries the current organization ID, usually from a cookie or the URL, and the server checks that the signed-in user has an active membership in that organization before doing anything.
That last check is the important one. Never trust an organization ID from the browser on its own. A user who edits the URL to another organization's ID should get a 404, not someone else's data.
SQWAD, the creator program software I am building, is multi-brand by design, so the same creator can apply to and work with more than one brand.
![The SQWAD brand directory, where creators apply to brands, featuring TheHoopGang.](/shots/sqwad-brands.jpg)
It is the same shape of problem as a person who is a member of two workspaces: one identity, many memberships, and a clear answer at every moment to the question of which one they are acting in.
## How should invite links and tokens work?
An invite link should carry a long random token that is stored hashed, works once, expires after a set time and only works for the email it was sent to.
Here is the invitations table I use:
- organization_id, email (stored lowercase) and role.
- token_hash, never the raw token.
- invited_by, expires_at, accepted_at and revoked_at.
When an admin invites someone, the server generates a random token with a cryptographically secure generator, stores only its hash, and puts the raw token in the email link. When the link is opened, the server hashes the token from the URL and looks it up. This is the same thinking OWASP applies to password reset tokens: random, long enough to resist guessing, tied to one record, single use and expiring. If your database leaks, hashed tokens cannot be replayed.
On acceptance, check in this order:
- The token exists, is not expired, accepted or revoked.
- The person is signed in, or signs up, with the same email the invite was sent to.
- They are not already a member.
Then create the membership and set accepted_at in the same transaction, so a double click cannot create two members. Seven days is a sensible expiry for a team invite. Resending should revoke the old token and issue a new one.
> Build invite URLs from a configured site URL environment variable, never from the incoming request's Host header. OWASP warns that building links from the Host header lets an attacker point them at their own domain.
## How do email invites actually reach people?
Email invites go out through a transactional email service from your server, and the email should say who invited them, to which workspace, and when the link expires.
The flow for the person receiving it has two branches. If they already have an account, they sign in and land on an accept screen showing the workspace name and the role they will have. If they are new, they sign up first, then land on the same screen. Keep the token in the URL or a short-lived cookie through sign-up so it is not lost.
A few details save support tickets:
- Show pending invites in the team settings page, with resend and revoke buttons.
- If someone opens an invite while signed in with a different email, explain the mismatch and offer to switch accounts instead of showing a vague error.
- Rate limit invites per organization, so a compromised account cannot use your domain to send hundreds of emails.
- Set up SPF, DKIM and DMARC for your sending domain, or invites will land in spam.
Some products also offer a shareable join link for a whole domain, such as anyone with an @company.com email. It is convenient for bigger customers, but it is a separate feature with its own risks, and I leave it out of a first version.
## How does seat billing work with team accounts?
Seat billing works by counting active memberships and setting that number as the quantity on the organization's Stripe subscription.
Stripe's per-seat model is a recurring price where one unit is one user, and the subscription item's quantity is the number of seats. When a member joins, raise the quantity. When one is removed, lower it. By default Stripe creates prorations when the quantity changes mid-cycle: credit for unused time and a charge for the added time, which show up on the next invoice. You can set proration_behavior to always_invoice to bill immediately, or none to skip prorations. Note that Stripe's docs say negative prorations are not refunded automatically, they become credit.
Here is an illustration. A made-up bookkeeping firm on a $15 per seat plan has 4 members. On the 10th, the owner invites a new hire, who accepts the same day. Your app adds a membership, recounts to 5, and updates the subscription quantity. The next invoice includes a prorated charge for the fifth seat for the rest of the month.
Decide early whether pending invites count as seats. I usually bill only accepted members, but block new invites once accepted members plus pending invites reach the plan's limit. And keep your app as the source of truth for the count, syncing to Stripe, rather than the reverse. "Setting up Stripe subscriptions for a SaaS MVP: what you actually need" covers the webhook side.
## How do you transfer ownership of an organization?
Ownership transfer should be an explicit action by the current owner that promotes another existing member to owner and demotes the old owner to admin in one transaction.
The rule underneath is simple: every organization has exactly one owner at all times. The owner is the person who can delete the workspace, change billing and remove admins. If ownership is ever empty, nobody can do those things, and the fix becomes a support request to you.
So the transfer flow should:
- Only let the current owner start it, and only to someone who is already an active member.
- Ask for confirmation, ideally with a password or a re-authentication step, because it is hard to undo.
- Change both roles in one database transaction.
- Email both people, and write it to your audit log.
Billing is a separate question. The Stripe customer belongs to the organization, so the card on file does not change just because the owner did. Prompt the new owner to update billing details if the old one is leaving. And block the owner from leaving or deleting their own account until they transfer ownership or delete the organization.
## What should happen when you remove a member?
Removing a member should end their access immediately, keep everything they created inside the organization, and lower the seat count.
In practice, removal means setting the membership status to removed with a timestamp, rather than deleting the row, so history stays readable. Then make sure access really ends. If your sessions are long-lived tokens that carry the organization ID or role, a removed member might keep access until the token expires. Either check membership on every request, which I prefer, or revoke their sessions for that organization.
Their data stays. Projects they created still have created_by pointing at them, and the interface can show "former member" next to their name. If they had assigned tasks or owned records, give admins a way to reassign them.
Two edge cases are worth handling on day one. Members should be able to leave a workspace themselves, with the same rules. And admins should not be able to remove the owner or other admins unless your roles say so, which is where "Roles and permissions in a SaaS app: a practical guide for founders" comes back in.
## When should you add team accounts to your SaaS?
Add the organization data model before launch, even if the invite screens come later, because changing data ownership after customers arrive is the expensive part.
The full feature, with invites, seat billing, ownership transfer and team settings, is a meaningful chunk of work. In my packages, a single-workflow MVP from $250 usually stays single user. A SaaS MVP from $1,200 over about 21 days can include the organization model and basic invites if the scope is kept tight. Multi-role teams with admin tools, seat billing and integrations fit the Full SaaS Platform package from $3,000 over about 45 days.
What I would not do is build a single-user app and plan to retrofit teams later. The migration touches every table and every query, and it usually happens right when the first serious customer is waiting.
## The bottom line
Team accounts and invites rest on a small, sturdy model: organizations own the data, memberships connect users to organizations with a role, and invitations hold a hashed, single-use, expiring token tied to an email. On top of that, seat billing is a count synced to Stripe, ownership transfer keeps exactly one owner at all times, and removing a member ends access without losing their work. Get the model in before launch and the rest can be added one screen at a time.`,
  },
  {
    slug: 'audit-logs-for-saas',
    title: 'Audit logs for a SaaS app: what to record, the schema, retention and who can see them',
    description: 'How to add an audit log to a SaaS app: which events to record, a practical schema, keeping it append-only, retention, who can view it, and what B2B buyers and SOC 2 want.',
    date: d,
    keywords: ['audit log', 'SaaS audit log', 'audit trail for SaaS app', 'audit log schema', 'SOC 2 audit logging'],
    service: 'saas-mvp-development',
    shortAnswer: "An audit log is an append-only record of who did what, to which record, in which organization, and when. Record sign-ins, permission and membership changes, billing changes, exports and deletions, store each event as one row in its own table that the app can insert into but never update, and give organization admins a filtered view of their own events.",
    takeaways: [
      "An audit log answers who did what, to what, when and from where, and it is separate from your debugging logs.",
      "Start with high-risk events: sign-ins, role and membership changes, billing changes, data exports, deletions and admin actions.",
      "Write audit events as append-only rows that the application role can insert but not update or delete.",
      "Never put passwords, tokens or full sensitive records in the log, only references and the fields that changed.",
      "B2B buyers and security questionnaires often ask for an audit trail, and SOC 2 examinations look at controls like monitoring, but SOC 2 itself does not prescribe your schema.",
    ],
    faqs: [
      { q: 'What is the difference between an audit log and application logs?', a: 'Application logs help developers debug and are usually short-lived and noisy, while an audit log is a structured, long-lived record of meaningful user and admin actions that customers and reviewers can rely on.' },
      { q: 'How long should a SaaS keep audit logs?', a: 'There is no single rule, so set retention from your contracts and any regulation that applies to your customers, and keep the policy written down and enforced by a scheduled job.' },
      { q: 'Do I need an audit log for SOC 2?', a: 'SOC 2 does not require a specific audit log feature, but its security criteria cover monitoring and access controls, and an audit trail is one of the most direct ways to show those controls work.' },
      { q: 'Should customers be able to see their own audit log?', a: 'Yes for admins of their own organization, filtered strictly to their organization, because it answers many support questions and is a feature larger B2B buyers often ask about.' },
      { q: 'Can Thomas Osayi add an audit log to an existing SaaS app?', a: 'Yes, an audit log with an admin view fits the Full SaaS Platform package from $3,000 over about 45 days alongside multi-role access and admin tools, or can be scoped as part of a smaller build.' },
    ],
    sources: [
      { title: 'Logging Cheat Sheet', publisher: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html' },
      { title: 'SOC 2 Reporting on an Examination of Controls at a Service Organization', publisher: 'AICPA and CIMA', url: 'https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy' },
      { title: 'The 5 SOC 2 Trust Services Criteria Explained', publisher: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/articles/the-5-soc-2-trust-services-criteria-explained' },
    ],
    body: `Sooner or later, someone asks a SaaS founder a question the app cannot answer. Who deleted this client record? When did my former employee last sign in? Who changed our plan? Without an audit log, the honest answer is a shrug and an hour digging through server logs that may already be gone.
An audit log is a small feature with an outsized effect on trust. It is also one of the things larger B2B buyers ask about on security questionnaires. In this post I cover what to record, a schema that works in Postgres or a document database, how to keep it append-only, retention, who gets to see it, and where SOC 2 fits. If your app handles health data, "HIPAA basics for a health app MVP: BAAs, access controls and audit logs" covers the regulated version of this topic, so I will not repeat it here.
## What is an audit log in a SaaS app?
An audit log is a permanent, structured record of meaningful actions in your app: who did it, what they did, which record it touched, in which organization, and when.
It is different from the logs your hosting platform collects. Those application logs are for developers. They are noisy, unstructured, full of stack traces and usually kept for days or weeks. An audit log is for your customers, your support team and anyone reviewing your security. It is quiet, structured and kept for a long time.
A good audit event reads like a sentence. Maria (admin) changed Jordan's role from member to admin in Acme Clinic on November 12 at 3:04 pm, from an IP in Los Angeles. Every field in that sentence maps to a column.
The OWASP Logging Cheat Sheet frames the same idea as four groups of attributes for each event: when, where, who and what. That is a useful checklist even if you never read the rest of the sheet.
## Which events should a SaaS audit log record?
Record the events that change who can access what, move money or data, or would be hard to explain later, and skip routine reads and page views.
Here is the list I start with:
- Authentication: sign-in success and failure, sign-out, password changes, two-factor changes, password reset requests.
- Membership and permissions: invites sent, accepted and revoked, members removed, role changes, ownership transfers.
- Billing: plan changes, seat changes, payment method updates, cancellations.
- Data: exports, bulk imports, deletions and restores, and changes to especially sensitive fields.
- Settings and integrations: API keys created or revoked, integrations connected or disconnected, security settings changed.
- Staff actions: anything your own team does inside a customer account, including impersonation or support access.
OWASP's list of events to always log overlaps closely: authentication successes and failures, authorization failures, user and privilege changes, administrator activity, access to sensitive data and legal or consent opt-ins.
The last bullet in my list matters most. Customers trust you more when they can see exactly when your support team accessed their account and why.
## What should an audit log schema look like?
An audit log works best as one table of events with fixed columns for who, what, where and when, plus a small JSON field for details.
Here is the shape I use, in a table called audit_events:
- id and occurred_at (a UTC timestamp set by the database).
- organization_id, so every event belongs to one tenant.
- actor_type (user, staff, system or API key) and actor_id, plus a copy of the actor's email at the time.
- action, a dotted name like member.role_changed, invoice.deleted or export.created.
- target_type and target_id, the record the action touched.
- changes, a JSON field holding the before and after values of only the fields that changed.
- ip_address, user_agent and request_id, so an event can be tied to the matching server logs.
Two choices make this table pleasant to use later. First, copy the actor's email and the target's display name into the event, because users and records get renamed and deleted, and the log should still read correctly in two years. Second, keep action names to a fixed list in your code. Free-text action names become impossible to filter.
Index on organization_id plus occurred_at, since nearly every query is "show me this organization's events, newest first".
## How do you keep an audit log from being changed?
Keep the log append-only by letting your application insert audit rows but never update or delete them, and keep a copy somewhere the application cannot reach.
In Postgres, that means the database role your app connects with has INSERT and SELECT on audit_events but no UPDATE or DELETE. If a bug or an attacker tries to edit history, the database refuses. Retention deletes, covered below, run under a separate role from a scheduled job.
For more assurance, there are a few layers you can add as the product grows:
- Write events in the same database transaction as the change they describe, so you never record an action that did not happen, or miss one that did.
- Ship a copy of each event to separate storage, such as an object storage bucket with write-once retention, or a log service your app cannot delete from.
- Chain events by storing a hash of the previous event in each row, which makes tampering detectable.
OWASP recommends the same principles in plain terms: build in tamper detection, move log data to read-only storage when practical, and record and monitor access to the logs themselves.
> Write the audit event inside the same transaction as the change. If the change rolls back, the event rolls back too, and your log never contradicts your data.
## What should never go into an audit log?
Never put passwords, tokens, session IDs, API keys, card numbers or full copies of sensitive records into an audit log.
This is the most common mistake I see when an audit log is generated by copying the whole request into a JSON column. That approach quietly stores password reset tokens, bearer tokens and personal data in a table designed to be kept forever and shown to admins.
OWASP lists the categories to keep out or to mask: passwords, access tokens, session identifiers, encryption keys, database connection strings, payment card data, sensitive personal data and data the user has opted out of collecting.
The practical rule is to log references and changed fields, not content. For a role change, the before and after roles are fine. For a note on a client record, log that the note was edited and its ID, not the note text. For a password change, log that it happened, nothing more. If you do need to record a sensitive value changing, record that it changed and mask the values.
## How long should you keep audit logs?
Keep audit logs for as long as your contracts, your customers' regulations and your own security needs require, then delete them on a schedule.
I am not going to give one number, because there is no universal one. OWASP's guidance is the right shape: do not destroy logs before the required retention period, and do not keep them beyond it. Legal, regulatory and contractual obligations set that period. Some industries and some enterprise contracts set specific minimums, and if one applies to you, it overrides everything else. This is general information, not legal advice.
For a typical early B2B SaaS with no regulatory requirement, I start by keeping audit events at least as long as the customer is active, write the policy into the terms or a security page, and run a nightly job that deletes or archives events older than the limit. An audit log that grows forever is a cost and a privacy liability.
Different plans can have different visible windows, too. Some products show admins a limited history on lower tiers and a longer one on enterprise plans. That is a pricing choice, but the data should still be retained according to your written policy either way.
## Who should be able to view the audit log?
Organization owners and admins should see their own organization's events, your staff should see events only when supporting a customer, and nobody should be able to edit them.
The customer-facing view is usually a page in settings with filters for date range, actor and action type, plus an export to CSV. Every query must be scoped to the current organization ID on the server, exactly like every other query in a multi-tenant app.
Who counts as an admin depends on your roles. Guardian MindCare, the therapy practice platform I built, has five roles: therapists, supervisors, trainees, clients and admins.
![The Guardian MindCare homepage with its provider search; behind it the platform has separate role-based portals for therapists, supervisors, trainees, clients and admins.](/shots/guardian-home.jpg)
With that many roles, a question like "should a supervisor see a trainee's activity?" needs an explicit answer, not a default. Decide it per role, write it down, and test it. "Roles and permissions in a SaaS app: a practical guide for founders" covers how to structure those rules.
Also log access to the audit log itself, especially by your own staff. OWASP calls this out directly: record and monitor all access to logs.
## Why do B2B buyers and SOC 2 care about audit logs?
B2B buyers ask for audit logs because they need to answer their own security questions, and SOC 2 examinations look at whether your access and monitoring controls work, which an audit trail helps prove.
SOC 2 is an examination by a CPA firm of a service organization's controls, against the AICPA's trust services criteria for security, availability, processing integrity, confidentiality and privacy. Security is the only category required in every SOC 2 report. The criteria include points of focus on monitoring activities and system operations. What SOC 2 does not do is hand you a required schema or a feature called audit log. It looks at whether your controls are designed and operating as described.
In practice, an audit trail makes several of those controls easier to evidence: who was given admin access and when, who was removed, who accessed customer data, and whether anyone reviewed it. When a buyer's security questionnaire asks whether you keep an audit trail of user and admin actions, being able to answer yes, and show the screen, shortens the conversation.
## The bottom line
An audit log is a structured, append-only record of who did what, to which record, in which organization and when. Start with authentication, membership and role changes, billing, exports, deletions and staff access. Use one audit_events table with fixed columns and a small changes field, write events in the same transaction as the change, give the app insert-only access, and keep secrets and sensitive content out. Set retention from your contracts and regulations, show admins their own organization's events, and treat the log as evidence when a B2B buyer or a SOC 2 auditor asks. Building it early is cheap. Reconstructing history later is not possible.`,
  },
];
