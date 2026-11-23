// Generated articles, batch 13 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen13: Post[] = [
  {
    slug: 'saas-admin-dashboard-features',
    title: 'SaaS admin dashboard features: what to build first and what to lock down',
    description: 'The admin features a SaaS MVP actually needs: user management, safe impersonation, audit logs, refunds and feature flags, plus how to keep the admin panel itself secure.',
    date: d,
    keywords: ['SaaS admin dashboard features', 'admin panel for SaaS', 'user impersonation security', 'SaaS audit log', 'feature flags MVP'],
    service: 'saas-mvp-development',
    shortAnswer: 'A SaaS admin dashboard needs five things before anything else: user and account management, a way to see what a customer sees, an audit log of admin actions, billing and refund controls, and simple feature flags. Every one of those actions must be checked on the server against an admin role, because the admin panel is the most powerful part of the app and the first thing an attacker looks for.',
    takeaways: [
      'Build the admin panel around the support questions you will actually get, not around a generic template of charts.',
      'User impersonation saves hours of support but must be read-only by default, logged and visible to the customer.',
      'An audit log should record who did what, to which record, when and from where, and admins should not be able to edit it.',
      'Refunds should be issued through Stripe and recorded from the webhook, so the admin panel and the payment provider never disagree.',
      'Every admin action needs a server-side role check, because hiding the admin menu protects nothing.',
    ],
    faqs: [
      { q: 'What features should a SaaS admin dashboard have?', a: 'At minimum: user and account search, plan and billing status, a way to view the app as a customer, an audit log of admin actions, refund controls and on or off switches for features.' },
      { q: 'Is user impersonation a security risk?', a: 'It can be, because an admin acting as a customer can see and change their data. Make it read-only by default, require a reason, time-limit the session and log every action taken while impersonating.' },
      { q: 'Should admins be able to delete users?', a: 'Prefer deactivating or soft-deleting accounts from the admin panel and handle permanent deletion as a separate, logged process, so a misclick cannot erase a customer.' },
      { q: 'Do I need a separate app for the admin panel?', a: 'Not for an MVP. A protected section of the same Next.js app with server-side role checks is usually enough, and a separate app only makes sense once support or operations teams grow.' },
      { q: 'How much does it cost to add admin tools to a SaaS?', a: 'Thomas Osayi includes admin tools in his Full SaaS Platform package from $3,000, and a basic dashboard is part of his SaaS MVP package from $1,200.' },
    ],
    sources: [
      { title: 'Logging Cheat Sheet', publisher: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html' },
      { title: 'Refund and cancel payments', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/refunds' },
      { title: 'Control access with custom claims and security rules', publisher: 'Firebase Documentation', url: 'https://firebase.google.com/docs/auth/admin/custom-claims' },
    ],
    body: `The admin dashboard is the part of a SaaS product that customers never see and founders always underestimate. In the demo, nobody asks how you will refund a charge, find a locked-out user or turn off a broken feature for one account. Two weeks after launch, those are the only questions that matter.
I have built admin tools for several products: the admins role in Guardian MindCare, the team side of the TheHoopGang creator portal, and the brand portal in SQWAD, where each brand's team runs its own creator program. This is what I put in an admin panel first, what I leave out, and how I keep it from becoming the weakest point in the app.
## What does a SaaS admin dashboard need on day one?
It needs the tools to answer your first ten support emails without opening the database console.
Start by guessing those emails. For most SaaS products they look like this: I cannot log in, I was charged twice, my teammate cannot see the project, this page is broken for me, and please cancel my account. Each one maps to an admin feature:
- Find a user or account by email, name or ID, and see their plan, status and recent activity.
- See what that user sees, so you can reproduce the problem.
- Change roles, reset access or move a user between accounts.
- Look up payments, issue refunds and change plans.
- Turn a feature off, or on, for one account or for everyone.
- Record every one of those actions in an audit log.
What you do not need on day one is a wall of charts. Stripe and your analytics tool already show revenue and sign-ups. The admin panel earns its place by acting on your own data safely.
The TheHoopGang portal is a good example of a lean admin. The team's home screen counts applications, pending reviews, active and completed collaborations, then lists every creator in a table that can be filtered by status, searched by handle and narrowed by followers. Each row opens a page where the team changes status and adds a tracking number. That is the whole admin, and it covers the daily work.
## How should user management work in an admin panel?
User management should let an admin find any account in seconds and change it only through actions that are named, checked and logged.
The search matters more than people expect. Support starts with an email address pasted from an inbox, so search by email first, then by name, account or company, and internal ID. Show the result with the facts support needs: sign-up date, plan, payment status, role, last sign-in and whether the account is active.
Then give each change its own button instead of an editable form of raw fields. "Change role", "Deactivate account", "Resend invite" and "Move to another workspace" are each one action with one permission check and one log entry. A generic form where an admin can edit any field on a user record is fast to build and dangerous to use, because nothing stops a typo in the plan field or the account owner field.
For multi-tenant products, user management also has to respect tenants. In SQWAD, brands, their team members and creators are separate, and each brand's data is isolated. A brand admin manages their own team and creators inside their own portal. Only a platform-level admin, which is me, can see across brands. Those are two different admin roles, and mixing them is how one customer ends up seeing another customer's data. I covered the pattern in "Roles and permissions in a SaaS app: a practical guide for founders".
Prefer deactivation over deletion. Deactivated accounts can be restored. Deleted ones cannot, and a misclick at the end of a long support day happens to everyone.
## Is user impersonation safe to build?
Impersonation is safe enough when it is read-only by default, time-limited, logged and visible, and risky when it is a silent "log in as this user" button.
Impersonation means an admin sees the app as a specific customer. It is the fastest way to debug "this page is broken for me", because many bugs depend on that customer's data, role or plan. The risk is just as obvious: during that session the admin has the customer's access, and anything they click happens as the customer.
How I build it:
- Read-only mode by default. The admin sees the customer's screens, but writes are blocked on the server, not just hidden in the interface.
- A required reason, such as a support ticket number, stored with the session.
- A short expiry, for example 30 minutes, after which the session ends.
- A banner on every page saying "Viewing as" the customer, with an exit button, so the admin never forgets.
- Every request during the session logged with both identities: the admin who is acting and the customer being viewed.
- Never impersonate another admin, and never allow billing changes or password changes while impersonating.
For apps handling sensitive data, think hard before building it at all. Guardian MindCare is a therapy practice platform, and there the right answer is narrower: admins get the specific views their role needs rather than the ability to become a client. When in doubt, build a support view that shows the account's settings and status without showing private content.
## What should an audit log record?
An audit log should record who did what, to which record, when and from where, in a place admins can read but cannot edit.
The OWASP Logging Cheat Sheet lists the events worth recording in any application, including authentication and authorization failures and use of high-risk functions. Admin actions are the clearest example of high-risk functions. For each one, I store:
- The actor: user ID, email and role at the time of the action.
- The action: a fixed name like role.changed, refund.issued or account.deactivated.
- The target: the record type and ID affected.
- Before and after values for the fields that changed.
- A timestamp, IP address and, for impersonation, the impersonated user.
- The reason, when the action required one.
Write the log on the server, in the same request that performs the action, so an action cannot happen without its entry. Keep the log collection or table append-only: in Firebase, security rules that allow create but not update or delete; in Postgres, a role that can insert into the table but not modify rows.
Do not log secrets, passwords, full card numbers or private content. Log the fact that a field changed, not a copy of sensitive data.
> The first time a customer asks "who changed my plan?", the audit log pays for itself. Build it before the first admin action, not after the first argument.
## How should refunds and billing work from the admin side?
Refunds should be issued through Stripe and recorded back into your app from Stripe's webhook, so the two systems never disagree.
Stripe's refund documentation covers the behaviour you need to design around. You can refund all or part of a payment, issue more than one refund against a charge up to the original amount, and refunds go back only to the original payment method. Stripe's processing fees from the original transaction are not returned. Customers usually see the credit in about 5 to 10 business days, and a refund can still fail later, for example on a closed account.
That gives a clear design:
- The admin clicks "Refund", picks full or partial, and chooses a reason.
- Your server checks the admin role and calls the Stripe Refunds API with the PaymentIntent.
- The audit log records the request.
- Your webhook handler listens for refund.created and charge.refunded, and updates the payment and plan status in your database.
- If refund.failed arrives, the admin panel shows it so someone can follow up.
Do not mark something refunded in your own database before Stripe confirms it. That is the same mistake as unlocking a plan on the success page instead of the webhook, which I wrote about in "Stripe payment went through but your app did not update? Fix the webhook". For plan changes and cancellations, the Stripe customer portal can handle most of it for customers, and your admin only needs overrides for the edge cases.
## Do you need feature flags in an MVP?
You need a simple version: an on or off switch per feature, settable globally and per account, stored in your own database.
Flags solve three early problems. You can ship a half-finished feature to one test customer. You can turn off something broken without a redeploy. And you can give one customer a feature from a higher plan as a favour or a trial.
For an MVP, I skip third-party flag services and keep a small table or document: feature name, default value and a list of account overrides. The server reads it when deciding what a user can do, and the admin panel shows it as a list of switches. Every change goes in the audit log.
Two rules keep flags from becoming a mess. Name them after the feature, not the experiment, and delete the flag once the feature is fully released. A codebase with forty forgotten flags is harder to reason about than one with none.
Do not use flags as the only thing enforcing paid access. Plan limits belong in the same server-side permission check as roles.
## How do you keep the admin panel itself secure?
Check the admin role on the server for every admin request, keep the list of admins tiny, and require stronger sign-in for admin accounts.
The most common admin hole I find in AI-built apps is an admin page that checks the role in the browser only. The menu is hidden, but the API routes or database rules behind it accept any signed-in user. Anyone who opens the developer tools can call them. I walked through fixing that in "How to add an admin dashboard to a Lovable app safely".
The checklist I use:
- Store the admin role somewhere users cannot edit. In Firebase, that is a custom claim set from a server with the Admin SDK, and Firebase's documentation is explicit that claims should only be set from a privileged server environment. In Postgres, a role column that only server code can update.
- Check that role in every admin API route or server action, and in database rules or row level security.
- Require multi-factor authentication for admin accounts if your auth provider supports it.
- Separate platform admins from customer admins, as SQWAD does with brand teams.
- Remove admin access the day someone leaves.
## A worked example: the admin for a small booking SaaS
Here is an illustration with a made-up product. A founder sells scheduling software to yoga studios at one monthly price. Each studio has owners and instructors, and their students book classes.
The first admin I would build for this product has four screens. A search screen finds a studio by owner email or studio name. A studio page shows plan, payment history, team members and recent bookings count, with buttons to change an owner, deactivate the studio, issue a refund and toggle features. A read-only "view as studio owner" mode reproduces bugs, with a 30 minute limit and a reason field. And an audit log page lists every admin action with filters by admin, studio and action type.
Feature flags cover a new waitlist feature, switched on for two pilot studios first. Refunds go through Stripe with the webhook updating the studio's billing status. That is roughly a week of work on top of the core product, and it removes most of the reasons the founder would otherwise need to open the database by hand.
## What does an admin dashboard cost to build?
A basic admin is part of a normal MVP budget, and a full admin with impersonation, audit logs and flags belongs in a larger platform build.
In my packages, the SaaS MVP from $1,200 over about 21 days includes auth, a dashboard, the database and payments, which is enough for search, account status and simple admin actions. The Full SaaS Platform from $3,000 over about 45 days covers multiple roles, admin tools and integrations, which is where safe impersonation, a proper audit log and per-account flags fit. If your app was built with an AI tool and only needs an admin area added to working code, my fix packages can cover it, starting with Fix Plus Features from $200 for a small, contained addition.
## The bottom line
Build the admin panel around real support work: find an account, see what the customer sees, change things through named actions, refund through Stripe, and switch features on or off. Log every admin action in a record nobody can edit. Then check the admin role on the server for every one of those actions, because the admin panel is the most powerful thing in your product and should be the best protected.`,
  },
  {
    slug: 'validate-a-saas-idea-before-building',
    title: 'How to validate a SaaS idea before you build it',
    description: 'Practical ways to validate a SaaS idea before paying for a full build: customer interviews, landing page tests, concierge MVPs, pre-sales and a cheap first version.',
    date: d,
    keywords: ['validate SaaS idea', 'SaaS idea validation', 'concierge MVP', 'pre-sell SaaS', 'customer interviews for startups'],
    service: 'saas-mvp-development',
    shortAnswer: 'Validate a SaaS idea by finding people who already have the problem, learning how they solve it today, and then getting them to commit something real: time, a deposit or a payment. Interviews and landing pages tell you whether the problem exists, while pre-sales and a small concierge or MVP test tell you whether people will pay for your solution.',
    takeaways: [
      'The best validation evidence is a stranger paying, or committing serious time, for something that does not fully exist yet.',
      'Customer interviews work when you ask about past behaviour and current workarounds, not about whether they like your idea.',
      'A landing page test measures interest, so pair it with a step that costs the visitor something, like booking a call or paying a deposit.',
      'A concierge MVP, where you do the work by hand behind a simple interface, often teaches more than months of building.',
      'Build only the one workflow that the evidence supports, and keep the first version small enough to change quickly.',
    ],
    faqs: [
      { q: 'How many customer interviews do I need to validate a SaaS idea?', a: 'There is no magic number; keep interviewing until the same problems, workarounds and objections repeat and you stop hearing new things.' },
      { q: 'Is a landing page with an email signup enough validation?', a: 'No. Email signups show curiosity, so add a step that costs something, such as booking a call, joining a paid pilot or placing a refundable deposit.' },
      { q: 'What is a concierge MVP?', a: 'A concierge MVP delivers the result your software would deliver, but by hand, so you can test whether customers want the outcome before automating it.' },
      { q: 'Should I pre-sell my SaaS before building it?', a: 'Pre-selling is the strongest test if you are honest about what exists and when it will ship, and you offer refunds if you do not deliver.' },
      { q: 'What is the cheapest way to build a first version for testing?', a: 'Thomas Osayi builds an MVP Starter from $250 in about 7 days, a working first version of one workflow that real users can try.' },
    ],
    sources: [
      { title: 'Do Things that Don\'t Scale', publisher: 'Paul Graham', url: 'http://paulgraham.com/ds.html' },
      { title: 'Accept payments online without writing code (Payment Links)', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/payment-links' },
      { title: 'Refund and cancel payments', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/refunds' },
    ],
    body: `Most of the SaaS ideas people bring me are reasonable. The problem is rarely that the idea is bad. It is that nobody has checked whether a specific group of people has the problem badly enough to pay for a fix, and the first real test is a finished product that took three months and most of the budget.
You can run that test much earlier and much more cheaply. Here is how I would validate a SaaS idea before building it, in the order I would do it, with the signals that count and the ones that only feel like they count.
## How do you validate a SaaS idea before building it?
You validate it by collecting evidence, in rising order of cost to the customer, that a specific group has the problem and will pay for your way of solving it.
Think of it as a ladder. Each rung asks the customer for a bit more:
- Talking to you about the problem: costs them 20 minutes.
- Leaving an email on a landing page: costs them almost nothing.
- Booking a call or demo: costs them a calendar slot.
- Using a manual or rough version: costs them effort and trust.
- Paying, even a deposit: costs them money.
The higher the rung, the more the evidence is worth. Compliments are free, so they prove nothing. A payment from someone who does not know you proves a lot.
The ladder also tells you what to build. You do not need software for the first three rungs. You may not need much for the fourth. Software becomes necessary when the manual version cannot keep up, which is a good problem to have.
I learned this from my own product. SQWAD started because I had built a custom creator portal for TheHoopGang, a basketball streetwear brand, and saw the same needs come up that any brand running creators would have. The first version of SQWAD did one thing: let a brand see which creator drove a sale. Everything else came later.
![SQWAD's revenue attribution page, which traces every Meta ad back to the creator and video behind it.](/shots/sqwad-creator-revenue-attribution.jpg)
## How do I run customer interviews that tell the truth?
Ask about what people did recently and what they use today, never about whether they would use your idea.
People are kind in interviews. Ask "would you use an app that does this?" and most will say yes, because saying no to your face is awkward. Ask about the past instead, and you get facts:
- "Tell me about the last time this problem came up. What happened?"
- "How do you handle it today? Spreadsheet, another tool, someone on staff?"
- "What does that cost you, in time or money, each week?"
- "Have you looked for a better way? What did you try, and why did you stop?"
- "Who else is involved when this goes wrong?"
Strong signs: they already pay for a clumsy workaround, they have built a spreadsheet or hired someone to cope, they describe the problem before you do, and they ask when they can try your version. Weak signs: polite enthusiasm, "that would be cool", and feature ideas that are not tied to a real event.
Find interviewees where the problem lives: industry forums, LinkedIn, local businesses, past colleagues. Avoid friends and family, who are the kindest audience of all. Keep notes in one document and look for repeated phrases. The words people use to describe the problem become your landing page copy later.
Stop interviewing when you stop learning, when the same problems, workarounds and objections keep coming back.
## Does a landing page test prove anything?
A landing page proves that a message attracts interest, but on its own it does not prove anyone will pay.
A simple test: a one-page site that states the problem in your interviewees' words, explains the outcome, shows a rough screenshot or mockup, and asks for one action. Send targeted traffic to it, from communities you joined, direct outreach or a small ad budget, and measure what people do.
The action you ask for decides what you learn:
- Email signup: weak. It measures curiosity.
- Book a 15 minute call: better. People rarely give time to things they do not care about.
- Join a paid pilot or place a refundable deposit: strongest, because it costs money.
Stripe Payment Links make the strongest version easy to run. You create a payment page in the Stripe dashboard without writing code and put the link behind your button. You can also limit how many purchases a link accepts, which suits a founding customer offer with a fixed number of spots.
Be honest on the page. Say the product is in development, say when you expect it to be ready, and say deposits are refundable. A test that tricks people is not validation; it is just a misleading page, and the trust you lose costs more than the data is worth.
If you only need the page, my Starter Site package from $150 covers a one-page site in about 7 days. I also wrote "Landing page vs website: which do you need?" if you are deciding what to put up first.
## What is a concierge MVP and when should I use one?
A concierge MVP delivers the result your software promises, but done by hand, so you can test whether customers want the outcome before automating it.
Say your idea is software that turns a contractor's job notes into a client-ready quote. Instead of building it, you offer the service: contractors email you their notes, you write the quotes yourself in a template, and send them back within a few hours. The customer gets the outcome. You learn exactly what the inputs look like, which steps take time, and what the customer actually values.
Paul Graham's essay "Do Things that Don't Scale" makes the broader case: early startups often get going by doing labour-intensive things by hand, like recruiting users one by one and giving them unusual attention. A concierge MVP is that idea applied to the product itself.
Use one when:
- The outcome is clear but the right workflow is not.
- You can deliver it manually for 5 to 20 customers without drowning.
- Customers care about the result more than the interface.
The concierge phase ends when you are spending your days repeating the same manual steps. Those steps are your product specification, written by real customers.
## Should I ask for money before the product exists?
Yes, if you are honest about what exists, when it will ship, and that you will refund if you do not deliver.
Pre-selling is the clearest test there is. A founding customer offer, such as a discounted first year or a paid pilot with a refund guarantee, separates people who like the idea from people who need it. A handful of committed buyers who match the same profile is a stronger reason to build than hundreds of email signups.
How to do it well:
- Describe the first version precisely, including what it will not do yet.
- Give a delivery window you can meet, and update buyers if it moves.
- Promise refunds in writing and make them easy. Stripe lets you refund all or part of a payment from the dashboard, though its processing fee on the original charge is not returned, so treat that as a small cost of the test.
- Keep the number of founding customers small enough that you can serve each one personally.
If nobody will pay even a deposit after a good conversation, that is useful news. It is far cheaper to learn it now than after a launch.
## What counts as a real signal, and what does not?
Real signals cost the customer something; false signals cost them nothing.
Signals I trust:
- Payments, deposits or signed pilot agreements.
- People introducing you to colleagues who have the same problem.
- Users who keep using a rough version without being reminded.
- Specific complaints about the rough version, because people only complain about things they intend to use.
Signals that mislead:
- Compliments, likes and "I would totally use this".
- Email lists built from giveaways.
- Interest from people who are not the buyer, such as staff who would use the tool but cannot approve the spend.
- Investor or friend enthusiasm without customer evidence.
Also check who pays. In B2B products, the user and the buyer are often different people, and you need both to care.
## A worked example: validating a scheduling tool for tutoring centers
This is an illustration, not a client story. A founder believes small tutoring centers waste hours each week juggling tutor availability, student sessions and parent reminders in spreadsheets and group texts.
Week one, they interview a dozen center owners about the last scheduling mess they had. Most use a shared spreadsheet plus texts. Several mention parents missing sessions as the real cost, more than scheduling itself. That changes the pitch from "scheduling" to "fewer no-shows".
Week two, they put up a one-page site with the no-show message, a mockup and a "founding center" offer: a refundable deposit for a discounted first year, limited to ten centers. They send it to interviewees and local owner groups. Four centers pay the deposit.
Weeks three and four, they run a concierge version for those four: the founder manages each center's schedule in a shared calendar and sends reminder texts by hand. They learn that reminders and rescheduling matter most, and that tutors care about seeing their week on a phone.
Only then do they build: one workflow, booking plus automatic reminders, for four customers who are already paying.
## When is it time to build, and how small should the first build be?
Build when the manual version cannot keep up or when paying customers are waiting, and build only the workflow the evidence supports.
The first build should do one job end to end for the people who already committed. In the tutoring example, that is sessions, availability and reminders, not invoicing, reports or a parent app.
That size is what my MVP Starter package is for: from $250 over about 7 days for a working first version of one workflow. It is a cheap way to put real software in front of real users. If the evidence supports a broader product with sign-in, a dashboard, a database and payments, the SaaS MVP from $1,200 over about 21 days covers it. I wrote about where those budgets go in "How much does an MVP cost? SaaS MVP prices and what drives them".
## Mistakes that waste months
The expensive mistakes all come from building before asking.
- Asking "would you use this?" instead of "what did you do last time?"
- Interviewing friends, then treating their kindness as demand.
- Building every feature from every interview instead of the one that kept repeating.
- Picking a market so broad, "small businesses", that no message fits anyone.
- Treating email signups as customers.
- Hiding the price until launch, then finding out nobody will pay it.
- Waiting for the product to be perfect before letting anyone use it.
## The bottom line
Validate a SaaS idea by climbing the ladder: interviews about real past events, a landing page that asks for something real, a concierge version done by hand, and an honest pre-sale with refunds. Each rung costs you little and tells you more. When people are paying and the manual version is creaking, build the smallest working version of the one workflow they paid for, and let their use of it decide what comes next.`,
  },
  {
    slug: 'bubble-vs-custom-code-for-mvp',
    title: 'Bubble vs custom code for your MVP: costs, limits and who owns what',
    description: 'Bubble, AI builders like Lovable and a custom Next.js build compared for a startup MVP: current Bubble pricing and workload units, speed, code ownership and exit options.',
    date: d,
    keywords: ['Bubble vs custom code', 'Bubble vs Lovable', 'Bubble workload units pricing', 'no-code vs custom MVP', 'Bubble code export'],
    service: 'saas-mvp-development',
    shortAnswer: 'Bubble is a fast way to test an MVP if you are comfortable staying on Bubble, but it does not export your app as runnable code, so leaving later means rebuilding. AI builders like Lovable give you real code you can take to GitHub, and a custom Next.js build costs more up front but gives you full ownership and no platform ceiling.',
    takeaways: [
      'At the time of writing, Bubble web plans start at $32 a month billed annually, with a monthly allowance of workload units and overage charged per 1,000 units.',
      'Bubble says you own your app\'s design and data, but Bubble apps only run on Bubble and cannot be exported as code.',
      'Lovable and similar AI builders produce real source code that can sync to GitHub, which keeps your exit options open.',
      'A custom Next.js build costs more at the start but has no platform pricing tied to usage and no limit on what you can build.',
      'Choose by how likely you are to outgrow the tool, not by which one demos fastest.',
    ],
    faqs: [
      { q: 'Can I export my Bubble app as code?', a: 'No. Bubble states that apps run only on its platform and cannot be exported as code, although you can export your data and use AI tools to help recreate the app elsewhere.' },
      { q: 'What are Bubble workload units?', a: 'Workload units measure the server work your Bubble app does, such as database queries and workflows, and each plan includes a monthly allowance with overage charged beyond it.' },
      { q: 'Is Lovable better than Bubble for an MVP?', a: 'Lovable is usually the better fit if you want code you can own and hand to a developer later, while Bubble suits founders who prefer a visual editor and plan to stay on the platform.' },
      { q: 'When should I choose custom code over no-code for an MVP?', a: 'Choose custom code when your product depends on unusual logic, integrations or data rules, when you expect heavy usage, or when investors and buyers will care about owning the codebase.' },
      { q: 'How much does a custom MVP cost compared with Bubble?', a: 'Thomas Osayi builds a custom SaaS MVP in Next.js from $1,200, covering auth, dashboard, database and payments, with the code in your own repository.' },
    ],
    sources: [
      { title: 'Bubble pricing: compare plans', publisher: 'Bubble', url: 'https://bubble.io/pricing/compare' },
      { title: 'Application and data ownership', publisher: 'Bubble Manual', url: 'https://manual.bubble.io/account-and-marketplace/application-and-data-ownership' },
      { title: 'Exporting your Bubble app', publisher: 'Bubble Support', url: 'https://bubble.io/support/en/articles/18337497-exporting-your-bubble-app' },
      { title: 'Subscription plans', publisher: 'Lovable Docs', url: 'https://docs.lovable.dev/introduction/subscription-plans' },
    ],
    body: `Founders who ask me "Bubble or custom code?" are usually asking two questions at once. The first is about speed: what gets a working product in front of customers soonest. The second is about the future: what happens when the product works and needs to grow. Bubble answers the first question well. The second question is where the choice gets real.
There is also a third option now that did not exist a few years ago: AI builders like Lovable, Bolt and v0, which generate actual code from prompts. Here is how the three compare for an MVP, using Bubble's and Lovable's published pricing at the time of writing.
## Should I build my MVP in Bubble or custom code?
Build in Bubble if speed matters most and you are comfortable staying on Bubble long term; build in custom code if owning the codebase, unusual features or usage-based costs matter more.
The core trade-off is lock-in. Bubble is a visual development platform with its own editor, database and hosting. Everything you build lives inside it. That makes it fast to start and fast to change. It also means the platform's pricing, limits and roadmap become your product's pricing, limits and roadmap.
Custom code, whether written by a developer or generated by an AI builder and then refined, is a set of files you own. You can host them anywhere, hire anyone to work on them and change any part of them. The cost is that someone has to build and maintain it properly.
Neither is wrong. A founder testing whether anyone wants an internal tool for a niche industry may be perfectly served by Bubble. A founder building a product whose value is in its logic, integrations or data model will usually hit the walls sooner.
## How does each approach work, and what does it cost?
Each option trades speed, cost and control differently, so here is each one on the same terms.
### Bubble
Best for: non-technical founders who want to build and change the product themselves in a visual editor, for products with standard data and workflows.
Cost range: at the time of writing, Bubble's web plans are Free, Starter at $32 a month billed annually ($39 monthly), Growth at $119 a month billed annually ($134 monthly) and Team at $349 a month billed annually ($399 monthly). The Free plan cannot go live on a custom domain, so a real launch starts at Starter.
Pros: fast to build without code, a large plugin marketplace, hosting and database included, and you can make changes yourself.
Cons: no code export, costs tied to usage through workload units, a learning curve of its own, and limits on how far you can customise performance and behaviour.
### AI builders (Lovable, Bolt, v0)
Best for: founders who want to describe the product in plain language and end up with real code, for a prototype or early MVP.
Cost range: at the time of writing, Lovable's Pro plan starts at $25 a month with 100 monthly credits and Business at $50 a month, with higher credit tiers above that. Plus hosting and database costs once you launch.
Pros: very fast first versions, real React code, and GitHub sync on every Lovable plan, so a developer can take over later.
Cons: credits run out during debugging, security rules and payments are often incomplete, and the code needs review before real users arrive. I compared the builders in "Lovable vs Bolt vs v0 for a startup MVP: which one to use".
### Custom Next.js build
Best for: products with specific logic, multiple roles, integrations or payments that must be right, and founders who want to own everything.
Cost range: from $250 for a one-workflow MVP Starter, from $1,200 for a SaaS MVP with auth, dashboard, database and payments, and from $3,000 for a multi-role platform, based on my packages. Running costs are usually modest, since hosting and database have generous free tiers and fixed entry plans.
Pros: full code ownership, no platform ceiling, predictable hosting costs, and any developer who knows Next.js can work on it.
Cons: higher up-front cost than doing it yourself in a tool, and changes go through a developer or a coding assistant rather than a visual editor.
## What are Bubble workload units, and how do they affect cost?
Workload units measure the server work your Bubble app does, and every paid plan includes a monthly allowance with overage charged beyond it.
Every time your Bubble app runs a database search, saves a record, runs a backend workflow or calls an API, it consumes workload. Bubble meters that as workload units, or WU. At the time of writing, Bubble's plan comparison lists 50,000 WU a month on Free, 175,000 on Starter, 250,000 on Growth and 500,000 on Team, with extra usage charged at $0.30 per 1,000 WU on paid plans.
What that means in practice:
- Costs grow with how your app is built, not only with how many users it has. An inefficient search that runs on every page load can burn workload quickly.
- You will spend some time optimising for workload, which is a Bubble-specific skill.
- Forecasting is harder, because a new feature can change your monthly bill.
None of this makes Bubble expensive for a small MVP. It does mean your cost per user is set by the platform's meter. On a custom stack, hosting and database bills also grow with usage, but you control how the code uses them and can move providers if pricing changes.
> Before choosing Bubble, build one realistic page with your heaviest search and check the workload it uses in Bubble's logs. It is a cheap way to see whether usage-based pricing will hurt at your expected scale.
## Who owns the code, and can you leave later?
With Bubble you own your design and data but not runnable code; with AI builders and custom builds you own the source code outright.
Bubble's own documentation is clear on this. It says you own your app's design and the data your users upload, while Bubble keeps ownership of the underlying code that powers your app. It also says Bubble apps can only run on the Bubble platform and there is no way to export your application as code. Data can be exported as CSV or JSON.
Bubble's support documentation now describes a route out using AI: an agent connected through the Bubble MCP reads your data types, pages, workflows and privacy rules and recreates them in a framework you choose. Bubble is careful to say this does not export ready-to-run code and does not guarantee perfect fidelity. The result is a new codebase that still needs to be built, reviewed and tested, and user passwords do not come with it, so users would have to reset them. That is a helpful head start on a rebuild, not an export.
Lovable is the opposite. Its plans include Git sync with GitHub, GitLab and Bitbucket, including the free plan, and code download on paid plans. If you leave, you take the repository with you. I wrote "How to hand off your AI-built app to a developer" for exactly that moment.
With a custom build, the repository should live in your own GitHub account from the first day. If it does not, ask for that before any work starts.
## How do they compare side by side?
On speed Bubble and AI builders win, on ownership AI builders and custom code win, and on reliability for complex products custom code wins.
- Time to first working screen: AI builders in hours, Bubble in days, custom in days to a week.
- Time to a launch-ready product with payments and roles: often similar across all three, because the hard parts take care in any tool.
- Who can change it: Bubble, the founder in the editor; AI builders, the founder by prompting until it breaks; custom, a developer or the founder with a coding assistant.
- Running cost model: Bubble, plan plus workload; AI builders and custom, hosting plus database plus services, each with free tiers.
- Exit: Bubble, rebuild; AI builders and custom, take the code.
- Hiring: Bubble developers are a specialist pool; React and Next.js developers are one of the largest pools in software.
The row people miss is the second one. Getting sign-in, permissions, payments and webhooks right takes about the same thinking everywhere. Bubble does not remove that work; it moves it into a visual editor.
## A worked example: the same MVP three ways
This is an illustration. A founder wants a client portal for small accounting firms: clients upload documents, accountants request missing items, and firms pay a monthly subscription.
In Bubble, the founder builds it themselves over a few weeks, launching on a paid plan. File uploads, statuses and email reminders are all available. The risk is later: if the firms grow and the portal processes many documents, workload rises, and an investor asking "do you own the code?" gets a complicated answer.
In Lovable, the founder gets the screens in a weekend. Then the work shifts to making sure each firm only sees its own clients, that file storage rules are locked down and that Stripe subscriptions actually unlock access. That is where many founders bring in a developer.
As a custom Next.js build, the portal costs from $1,200 as a SaaS MVP with auth, dashboard, database and payments. It takes about three weeks, the code lives in the founder's GitHub, and the costs at launch are hosting and database plans.
All three can work. The right one depends on whether the founder wants to build it personally, how much the data rules matter, and how likely they are to outgrow the first version.
## Which should you pick?
Pick by your situation, not by the demo.
- You are non-technical, testing demand and happy to stay on one platform: Bubble is a reasonable choice.
- You want something on screen this week and will hand it to a developer if it works: an AI builder, with GitHub sync on from the start.
- Your product depends on custom logic, roles, integrations or payments that must be right: a custom Next.js build.
- You already built in Lovable or Bolt and it is stuck: fix it rather than switching to Bubble. "Fix or rebuild your AI-built app? How to decide before you spend more" walks through that choice.
- You are already on Bubble and growing: do not panic-migrate. Move when workload costs, performance or a missing capability actually block the business, and plan the rebuild with your data export in hand.
## The bottom line
Bubble is fast and capable, but you are renting a platform: you own your design and data, not runnable code, and your costs follow its workload meter. AI builders give you code you own and a fast start, with a review needed before launch. A custom Next.js build costs more at the beginning and gives you full control after that. If you think the product will last, choose the option you will not need to escape from.`,
  },
  {
    slug: 'technical-cofounder-vs-freelancer-vs-agency',
    title: 'Technical cofounder vs freelancer vs agency: who should build your MVP?',
    description: 'Comparing a technical cofounder, a freelance developer, an agency and an offshore dev shop for building a startup MVP: equity, costs, risks and who fits which founder.',
    date: d,
    keywords: ['technical cofounder vs freelancer', 'hire developer for MVP', 'technical cofounder equity', 'agency vs freelancer for startup', 'offshore development for MVP'],
    service: 'saas-mvp-development',
    shortAnswer: 'A technical cofounder makes sense when the product is the company and you need someone who will own the technology for years in exchange for equity. A freelancer is usually the fastest and cheapest way to build a defined MVP for cash, an agency suits funded teams that want design, development and project management in one contract, and an offshore shop can lower rates if you can manage the work closely.',
    takeaways: [
      'A cofounder is a long-term partner paid in equity, while a freelancer or agency is a supplier paid in cash for a defined scope.',
      'Equity for cofounders is usually granted with vesting, commonly over four years with a one-year cliff, so a partner who leaves early does not keep a large stake.',
      'Whoever builds the product, make sure a signed agreement assigns the code and IP to your company and the repository sits in your own account.',
      'You do not need a technical cofounder to validate an idea; a small paid build can prove demand before you give away equity.',
      'Agencies cost more because you pay for a team and process, which is worth it when you need that team and wasteful when you do not.',
    ],
    faqs: [
      { q: 'Do I need a technical cofounder to start a SaaS?', a: 'Not to start. Many founders validate the idea and build a first version with a freelancer, then look for a technical cofounder or first engineer once there is traction.' },
      { q: 'How much equity should a technical cofounder get?', a: 'There is no standard number; it depends on timing, contribution and risk, but cofounder equity is usually meaningful and is normally subject to vesting so it is earned over time.' },
      { q: 'Is a freelancer or an agency better for an MVP?', a: 'A freelancer is usually better for a focused MVP with a clear scope, while an agency fits when you need design, development and project management delivered by a team.' },
      { q: 'Who owns the code a freelancer writes for me?', a: 'Ownership depends on your written agreement, so include a clause assigning all code and intellectual property to your company; this is general information, not legal advice.' },
      { q: 'What does it cost to have a freelancer build an MVP?', a: 'As one example, Thomas Osayi builds an MVP Starter from $250, a SaaS MVP from $1,200 and a Full SaaS Platform from $3,000, each for a fixed scope.' },
    ],
    sources: [
      { title: 'Vesting', publisher: 'Carta', url: 'https://carta.com/learn/equity/stock-options/vesting/' },
      { title: 'Works Made for Hire (Circular 30)', publisher: 'U.S. Copyright Office', url: 'https://www.copyright.gov/circs/circ30.pdf' },
      { title: 'Independent contractor (self-employed) or employee?', publisher: 'IRS', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee' },
    ],
    body: `If you have a SaaS idea and you do not write code, someone else has to build the first version. The usual advice is "find a technical cofounder", and sometimes that is right. But a cofounder is a marriage, not a hire, and plenty of founders spend six months searching for one while their idea sits untested.
There are four realistic ways to get an MVP built: a technical cofounder, a freelance developer, an agency, or an offshore development shop. I work as a freelancer through my own packages, and I am also the founder of SQWAD, so I have seen this from both sides. Here is an honest comparison, including when a freelancer like me is the wrong choice.
## Should you find a technical cofounder or hire someone?
Find a cofounder if the technology is the company and you need a long-term partner; hire someone if you need a defined product built so you can test the business.
The difference is what you are buying. A cofounder brings years of ownership: they make technical decisions, hire the engineering team, carry on-call duty and share the risk. You pay with a share of the company. A freelancer, agency or dev shop delivers a defined scope for cash. When the project ends, the decisions come back to you.
That makes the question less about money and more about stage:
- Before validation, you mostly need speed and a small budget. Giving away a large stake to someone you just met, before anyone has paid for the product, is a heavy price.
- After validation, with paying customers and a product people rely on, a technical partner or first engineer becomes much more valuable, and much easier to attract, because there is evidence.
Many founders do it in that order: a paid build to prove demand, then a technical cofounder or senior hire to own what comes next. I wrote about running that first test cheaply in "How to validate a SaaS idea before you build it".
## How do the four options compare?
Each option fits a different founder, budget and stage, so here is each one on the same terms.
### Technical cofounder
Best for: founders building a technology company for the long haul, where the product needs continuous technical leadership.
Cost range: a meaningful share of equity, usually with vesting, plus whatever cash the company can pay. Little or no up-front cash for the build.
Pros: fully aligned incentives, someone who will own the architecture and the team for years, and investors often like seeing technical founders.
Cons: hard to find the right person, slow to search, and a bad match is painful to undo. A cofounder breakup can damage the company more than a bad contractor ever could.
### Freelance developer
Best for: a defined MVP, a first version of one workflow, or a launch-ready product with a clear scope and a fixed budget.
Cost range: varies widely by person and location. As one example, my own packages run from $250 for an MVP Starter, from $1,200 for a SaaS MVP with auth, dashboard, database and payments, and from $3,000 for a multi-role platform with admin tools.
Pros: direct communication with the person writing the code, lower cost than a team, fast turnaround, and no equity given away.
Cons: one person's capacity and availability, quality depends entirely on who you pick, and you need to own product decisions yourself.
### Agency
Best for: funded teams that want design, development, testing and project management under one contract, or larger builds that need several specialists at once.
Cost range: usually well above a solo freelancer for the same scope, because the price includes a project manager, designers, QA and overhead. Ask for an itemised estimate.
Pros: a full team, established process, continuity if one person leaves, and someone accountable for the whole delivery.
Cons: higher cost, more layers between you and the developer, and you may pay for process an early MVP does not need.
### Offshore development shop
Best for: founders with some technical or product management experience who can write clear specifications and review work closely.
Cost range: lower hourly rates than many US-based teams, but the total depends heavily on how much management, rework and communication the project needs.
Pros: lower rates, access to larger teams, and many shops have deep experience in common stacks.
Cons: time zone gaps, more detailed specifications needed, quality that varies a lot between shops, and more of your own time spent managing.
I compared freelancers and agencies for small business websites in "Freelance web developer vs agency: which should a small business hire?" Much of that applies here too.
## How does equity for a technical cofounder usually work?
Cofounder equity is usually granted with vesting, so it is earned over time instead of handed over on day one.
A common structure, described in Carta's guide to vesting, is four years of vesting with a one-year cliff: nothing vests in the first year, a quarter vests at the one-year mark, and the rest vests monthly over the following three years. Many startups apply a similar schedule to founders, so a partner who leaves after four months does not walk away with a large share of the company.
Beyond vesting, the details vary and there is no standard split. Things founders usually weigh:
- Who came up with the idea and who has already put in time or money.
- Who is working full time and who is part time.
- Who is taking a pay cut or risk to join.
- What each person will be responsible for over the next several years.
Put the agreement in writing early, with a lawyer, while everyone is still on good terms. This section is general information, not legal or tax advice.
If what you really need is a few months of building rather than years of partnership, paying for the build and keeping your equity for a later technical leader is often the better deal.
One more pattern to be careful with: offering a freelancer or agency equity instead of cash. It can work, but it mixes two relationships. A supplier paid in equity has a stake in the company without the responsibilities of a cofounder, and if the project ends badly, they still own part of your cap table. If you go that way, use the same vesting and written terms you would use for anyone else.
## Who owns the code when you hire someone?
You own it only if a signed agreement says so, so make sure every contract assigns the code and IP to your company.
Many founders assume that paying for software means owning it. Under US copyright law that is not automatic for independent contractors. The U.S. Copyright Office's Circular 30 explains that a contractor's work counts as a "work made for hire" only if it falls into one of nine specific categories and there is a signed written agreement saying so. Custom software often does not fit neatly into those categories, which is why development contracts usually include a separate clause assigning all rights in the work to the client.
Practical protections, whatever option you choose:
- A written agreement with an IP assignment clause covering code, designs and documentation.
- The repository in your company's GitHub account from the first day, with the developer added as a collaborator.
- Hosting, database, domain, Stripe and email accounts in your name, with the developer invited, not the owner.
- Credentials in a shared password manager you control.
How you classify the worker matters too. The IRS looks at behavioural control, financial control and the type of relationship to decide whether someone is a contractor or an employee. Again, this is general information, not legal advice.
## How do you protect yourself with any of these options?
Define the scope, pay against working milestones, and keep every account and the code in your own name.
- Write down what "done" means: the workflows, roles and integrations, and what is out of scope.
- Pay in milestones tied to something you can click, not to hours or promises.
- See progress weekly on a live preview URL.
- Ask for a short handover document: how to run it, where the secrets live, how to deploy.
- Check references or live projects you can actually open.
I listed the questions I would ask any developer in "10 questions to ask before hiring a web developer", and what to prepare in "What to send a web developer before your project starts".
> Whoever you hire, create the GitHub organisation, Vercel team and Stripe account yourself before the first call. It takes an hour and removes most of the ways a project can go wrong at the end.
## A worked example: three founders, three choices
These are illustrations, not real clients.
Founder A has an idea for software that helps property managers handle maintenance requests. No customers yet, savings to spend, no technical background. They validate with interviews and a landing page, then pay a freelancer for a one-workflow MVP. Six weeks later, three managers are paying. Now they look for a technical cofounder, with real usage to show.
Founder B has raised a seed round to build a marketplace with a designer-led brand. They need design, web, mobile and QA in parallel within a fixed timeline. An agency fits, because coordinating four freelancers would become a job in itself.
Founder C spent ten years as a product manager and writes excellent specifications. They hire an offshore shop for a well-defined internal tool, run daily check-ins across time zones and review every pull request with a technical advisor. The lower rate works because they bring the management.
## Which option is right for you?
Match the option to your stage and to what you can manage yourself.
- Pre-validation, limited budget, non-technical: a freelancer for a small, fixed-scope first version.
- Validated, growing, and the product is the company: a technical cofounder or first senior engineer.
- Funded with a broad scope and tight deadline: an agency.
- Strong product management skills and time to manage closely: an offshore shop can work.
- Already have an AI-built prototype: a freelancer to fix and launch it, before deciding anything bigger.
## The bottom line
A technical cofounder is a long-term partner paid in equity; a freelancer, agency or offshore shop is a supplier paid in cash. Early on, most founders do better buying a small, well-defined build and keeping their equity until the business has evidence. Whoever you choose, get a written agreement that assigns the code to your company, keep the repository and accounts in your name, and pay against working software.`,
  },
  {
    slug: 'best-tech-stack-for-saas-mvp',
    title: 'The best tech stack for a SaaS MVP in 2026, and when to choose what',
    description: 'A practical SaaS MVP stack: Next.js, TypeScript, Firebase or Postgres with Prisma, Stripe and Vercel. When to pick each, what it costs at launch and what I use myself.',
    date: d,
    keywords: ['best tech stack for SaaS MVP', 'SaaS MVP tech stack', 'Next.js Firebase vs Postgres', 'Next.js Prisma Postgres Stripe', 'startup tech stack 2026'],
    service: 'saas-mvp-development',
    shortAnswer: 'For most SaaS MVPs, a strong default is Next.js with TypeScript for the app, Firebase or Postgres for the database, Stripe for payments and Vercel for hosting. Pick Firebase when you need realtime updates and simple, document-shaped data, and Postgres with Prisma when your data is relational and your questions involve joins, filters and reports.',
    takeaways: [
      'Next.js and TypeScript let one codebase serve fast public pages, the logged-in app and the API routes.',
      'Choose the database by the shape of your data: Firebase for realtime and document data, Postgres for relational data and reporting.',
      'Prisma gives Postgres a typed client and versioned migrations, which keeps schema changes safe as the product grows.',
      'At the time of writing, Stripe charges 2.9% plus 30 cents per successful US card payment, and Vercel Pro is $20 per developer seat a month.',
      'A boring, popular stack is an advantage for an MVP, because it is easier to hire for and easier for AI coding tools to work with.',
    ],
    faqs: [
      { q: 'What is the best tech stack for a SaaS MVP?', a: 'A reliable default is Next.js and TypeScript, Firebase or Postgres, Stripe for payments and Vercel for hosting, because each is widely used, well documented and cheap to start.' },
      { q: 'Should my MVP use Firebase or Postgres?', a: 'Use Firebase when you need realtime updates and your data is mostly separate documents, and Postgres when records relate to each other and you need joins, filters and reports.' },
      { q: 'Do I need Prisma with Postgres?', a: 'You do not need it, but Prisma adds a typed database client and versioned migrations, which prevents many schema mistakes in a TypeScript project.' },
      { q: 'Is Vercel free for a SaaS MVP?', a: 'Vercel has a free Hobby plan, but a business app usually moves to Pro, which at the time of writing costs $20 per developer seat a month.' },
      { q: 'What stack does Thomas Osayi use for SaaS MVPs?', a: 'Thomas Osayi builds SaaS MVPs in Next.js and TypeScript on Firebase or Postgres with Prisma, with Stripe and Vercel, starting from $1,200 for a SaaS MVP.' },
    ],
    sources: [
      { title: 'Firebase pricing plans', publisher: 'Google Firebase', url: 'https://firebase.google.com/pricing' },
      { title: 'Getting started with Prisma Migrate', publisher: 'Prisma Docs', url: 'https://www.prisma.io/docs/orm/prisma-migrate/getting-started' },
      { title: 'Stripe pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
      { title: 'Vercel pricing', publisher: 'Vercel', url: 'https://vercel.com/pricing' },
      { title: 'Supabase pricing', publisher: 'Supabase', url: 'https://supabase.com/pricing' },
    ],
    body: `"What stack should we use?" is often the first technical question a founder asks, and it matters less than people think. Plenty of stacks can carry an MVP. What matters is that the stack is popular, well documented, cheap at low volume, and fits the shape of your data. Getting the database wrong costs far more than picking the "wrong" frontend framework.
This is the stack I use to build SaaS MVPs, why I chose each piece, and the one decision where I switch between two options depending on the product. I run my own product, SQWAD, on one side of that decision, and the TheHoopGang creator portal on the other.
## What is the best tech stack for a SaaS MVP?
For most SaaS MVPs, my default is Next.js and TypeScript, Firebase or Postgres with Prisma, Stripe and Vercel.
Each piece does one job:
- Next.js: the web app, including public marketing pages, the signed-in dashboard and server-side API routes, in one project.
- TypeScript: types across the database, server and interface, so many mistakes fail at build time instead of in front of a user.
- Firebase or Postgres: the database and, with Firebase, sign-in and file storage too.
- Prisma: a typed client and migrations for Postgres.
- Stripe: payments, subscriptions, invoices and the customer billing portal.
- Vercel: hosting, preview deployments for every change and environment variables.
Why this combination rather than something more exotic: all of it is mainstream. When you hire your next developer, they will know it. When you use an AI coding tool, it has seen a great deal of it. And every piece has a free or cheap entry tier, so the stack costs little until you have customers.
## Why Next.js and TypeScript for the app?
Next.js lets one codebase serve fast, search-friendly public pages and a full logged-in application, and TypeScript keeps that codebase honest as it grows.
A SaaS product is really two products: a marketing site that has to load quickly and rank in search, and an app that has to handle sign-in, data and permissions. Many teams build those separately. With the Next.js App Router, they live in one project. Public pages can be rendered on the server for speed and search engines. App pages can use server components and server actions for data. API routes handle webhooks from Stripe and other services.
TypeScript is the part non-technical founders underrate. In Guardian MindCare, a therapy practice platform with five roles, a role can be defined as a type, so the compiler complains when a screen forgets to handle one of them. In a Postgres project, Prisma generates types from the schema, so a query for a field that does not exist fails during the build. That is exactly the class of bug that otherwise reaches customers.
If your product is mainly a mobile app, the picture changes. I built NOM, a food discovery app, in React Native with Expo and Firebase. For a web-first SaaS, though, Next.js is my starting point.
## Firebase or Postgres: how do you choose the database?
Choose by the shape of your data: Firebase for realtime updates and document-shaped data, Postgres for relational data and reporting.
This is the decision that matters most, and I make it differently per product.
### When I choose Firebase
I built SQWAD on Firebase because creator portals need realtime updates. When a creator submits content or a status changes, the brand should see it without refreshing. Firestore pushes changes to the screen as they happen, and Firebase bundles sign-in, file storage and security rules in one platform.
![SQWAD's UGC creator management page. SQWAD is my own SaaS, built on Firebase for realtime updates.](/shots/sqwad-ugc-creator-management.jpg)
Firebase fits when:
- Screens should update live: dashboards, chats, status boards.
- Data is mostly separate documents owned by a user or account.
- You want sign-in, storage and access rules from one provider.
At the time of writing, Firebase's free Spark plan includes 1 GiB of Firestore storage, 50,000 document reads and 20,000 writes per day. Cloud Functions are listed only under the pay-as-you-go Blaze plan, so most real products move to Blaze.
### When I choose Postgres
I built the TheHoopGang creator portal on Postgres because its data is relational. A creator has an application, an application has a product and a size, a shipment has a tracking number, and content belongs to a creator. A question like "which approved creators have a delivered package and no videos" is a join and a filter, which is what a relational database is built for.
![The TheHoopGang creator portal homepage: Get it free. Post it. Get paid. The portal runs on Next.js, Prisma and Postgres.](/shots/hoopgang-home.jpg)
Postgres fits when:
- Records relate to each other in many ways.
- You need reports, exports and filters across many fields.
- Billing, inventory or anything financial has to stay consistent.
Supabase is a popular hosted Postgres with auth built in. At the time of writing, its Pro plan starts at $25 a month, and free projects pause after a week of inactivity, which is fine for testing but not for a live product. I compared the two platforms in "Firebase vs Supabase for your MVP: how to choose".
## Where does Prisma fit?
Prisma sits between your Next.js code and Postgres, giving you a typed database client and a migration history.
Without it, you write SQL by hand or use a lighter query builder, both of which work. Prisma's value in an MVP is safety while the schema changes every week. You declare your models in one schema.prisma file. Running prisma migrate dev generates the SQL for each change and saves it in a timestamped folder under migrations, and Prisma's documentation recommends committing that history to source control so the same changes deploy to production in order.
That migration history is what stops the common early disaster: someone changes the database by hand in production, the code and the database drift apart, and nobody knows which is right. I wrote about the same problem on Supabase in "How to change your Supabase database safely with migrations".
Prisma is a Postgres choice. With Firebase, the equivalent discipline is TypeScript types for each collection plus security rules that check every write.
## How should payments work in an MVP?
Use Stripe Checkout or Payment Links to take money, Stripe Billing for subscriptions, and a verified webhook to update your app.
At the time of writing, Stripe charges 2.9% plus 30 cents per successful domestic US card payment, and its pay-as-you-go Billing plan for subscriptions adds 0.7% of billing volume. There is no monthly fee to start.
The architecture I use is always the same:
- The customer pays on a Stripe-hosted Checkout page.
- Stripe sends a webhook to a Next.js API route.
- The route verifies the signature, then updates the account's plan in the database.
- The Stripe customer portal handles card changes, cancellations and invoices.
Never unlock a plan from the success page redirect. Users close tabs, and redirects can be faked. The webhook is the source of truth. I covered the full setup in "Setting up Stripe subscriptions for a SaaS MVP: what you actually need".
> Create your Stripe account in the company's name before development starts, and keep test mode and live mode keys clearly separated in your environment variables.
## Where should you host it?
Vercel is the simplest host for a Next.js app, with preview deployments for every change and a free tier for building.
Vercel makes Next.js and connects to GitHub, so every push gets its own preview URL and merging to the main branch deploys production. At the time of writing, the Hobby plan is free and Pro costs $20 per developer seat a month, with viewer seats free. Vercel describes Pro as the plan for professional developers, freelancers and businesses, which is where a launched SaaS belongs. Pro also adds team collaboration, longer runtime logs and spend management.
Alternatives exist, including running Next.js on other platforms or your own server, but for an MVP the time saved on deployment is worth more than the hosting bill.
## What does this stack cost per month at launch?
A launched SaaS MVP on this stack typically runs from roughly $0 while testing to about $50 a month plus payment fees once you move to paid plans.
A rough launch budget, using prices at the time of writing:
- Vercel Pro: $20 a month for one developer seat.
- Database: Firebase Blaze is pay-as-you-go above the free quota, often a few dollars at low volume; Supabase Pro is $25 a month.
- Stripe: no monthly fee, 2.9% plus 30 cents per US card payment, plus 0.7% for Billing subscriptions.
- Domain and transactional email: a few dollars a month at low volume.
For the full breakdown, including AI API costs, see "What does it cost to run an AI-built app per month? A real budget".
## A worked example: choosing the stack for two products
These are illustrations. Product one is a team chat and task board for event crews, where every change should appear instantly for everyone on the job. Data is mostly messages and tasks owned by a crew. That is Firebase: realtime listeners, security rules by crew, and Stripe per crew.
Product two is a booking and invoicing tool for equipment rental shops. Items, bookings, customers, invoices and payments all relate to each other, and owners want reports by item and month. That is Postgres with Prisma: relational tables, migrations and SQL-friendly reporting.
Both use Next.js, TypeScript, Stripe and Vercel. Only the database changes, because only the data shape changed.
## What would I avoid in an MVP stack?
Avoid anything that adds moving parts without solving a problem you already have.
- Microservices: one Next.js app is enough until a team or a workload forces a split.
- A separate backend framework when API routes and server actions cover it.
- Two databases from day one.
- Self-hosted servers you must patch and monitor.
- Niche frameworks that few developers know.
- Building your own auth or payments instead of using Firebase Auth, Supabase Auth or Stripe.
The goal of an MVP stack is to make the product easy to change, cheap to run and easy to hand over. My SaaS MVP package from $1,200 over about 21 days uses exactly this stack with auth, a dashboard, a database and payments, and the Full SaaS Platform from $3,000 adds multiple roles, admin tools and integrations.
## The bottom line
Use Next.js and TypeScript for the app, Stripe for payments and Vercel for hosting, and spend your real thinking on the database. Choose Firebase when the product needs realtime updates and document-shaped data, as SQWAD does. Choose Postgres with Prisma when the data is relational and reporting matters, as the TheHoopGang portal does. A popular, boring stack will carry you to your first paying customers and well beyond.`,
  },
];
