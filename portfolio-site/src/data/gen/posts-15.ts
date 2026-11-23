// Generated articles, batch 15 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen15: Post[] = [
  {
    slug: 'how-long-does-it-take-to-build-an-mvp',
    title: 'How long does it take to build an MVP? Timelines by scope',
    description: 'Realistic MVP timelines for one workflow, a full SaaS MVP and a multi-role platform, what each fits in 7, 21 or 45 days, and the delays that push launches back.',
    date: d,
    keywords: ['how long does it take to build an MVP', 'MVP timeline', 'SaaS MVP development time', 'time to build a startup app', 'MVP build schedule'],
    service: 'saas-mvp-development',
    shortAnswer: 'A focused MVP takes about one week for a single working workflow, about three weeks for a SaaS MVP with sign-in, a dashboard, a database and payments, and about six to seven weeks for a multi-role platform with admin tools and integrations. Most delays come from changing scope, slow feedback and third-party approvals, not from the code itself.',
    takeaways: [
      'Timeline follows scope: one workflow fits in about 7 days, a payable SaaS product in about 21, and a multi-role platform in about 45.',
      'The clock really starts when the core workflow is written down and every account the app needs is ready.',
      'Scope added mid-build is the most common reason an MVP runs late, so park new ideas in a list for version two.',
      'Payments, custom domains and app store review each add waiting time that has nothing to do with how fast the code is written.',
      'A one-day feedback turnaround from the founder keeps a three-week build at three weeks.',
    ],
    faqs: [
      { q: 'What is the fastest realistic time to build an MVP?', a: 'About one week, if the MVP is a single workflow with a small number of screens and no payments or complex roles.' },
      { q: 'Why do MVPs take longer than estimated?', a: 'Usually because features get added during the build, feedback takes days instead of hours, or a third party such as a payment provider or app store adds waiting time.' },
      { q: 'Does using AI tools make an MVP faster to build?', a: 'AI tools speed up the first draft of screens, but the time spent on data rules, payments, permissions and testing does not shrink by the same amount.' },
      { q: 'Is a mobile app MVP slower than a web app MVP?', a: 'Usually yes, because app store review, device testing and native features add time that a web app launched on its own domain does not need.' },
      { q: 'How long would Thomas Osayi take to build my MVP?', a: 'Thomas Osayi builds a working first version of one workflow from $250 in about 7 days, a SaaS MVP with auth, dashboard, database and payments from $1,200 in about 21 days, and a full multi-role platform from $3,000 in about 45 days.' },
    ],
    sources: [
      { title: 'Go-live checklist', publisher: 'Stripe', url: 'https://docs.stripe.com/get-started/checklist/go-live?locale=en-GB' },
      { title: 'Adding and configuring a custom domain', publisher: 'Vercel', url: 'https://vercel.com/docs/domains/add-a-domain' },
    ],
    body: `Founders ask how long an MVP takes before they ask almost anything else, and the honest answer is that it depends on one decision more than any other: how much you put in the first version. The code is rarely the slow part. Deciding what to leave out is.
I build MVPs on a fixed scope and a fixed number of days, so I have had to get specific about what fits in a week, three weeks and six or seven weeks. This post walks through those three sizes, what happens before the clock starts, the things that quietly add weeks, and a worked example. If you are planning a marketing website rather than an app, "How long does it take to build a website?" covers that separately.
## How long does it take to build an MVP?
Most MVPs take between one and seven weeks of build time, depending on whether you are shipping one workflow, a product people can pay for, or a platform with several kinds of users.
Those are build times. Around them sit a few days of preparation before the build and a few days of launch work after it. A realistic way to think about it:
- One workflow, a handful of screens, no payments: about 7 days.
- Sign-in, a dashboard, a database and payments: about 21 days.
- Several roles, admin tools and integrations with other systems: about 45 days.
Anything bigger than the third size is usually not an MVP anymore. It is a version one that has been allowed to grow before anyone has used it. That is the most expensive way to find out what customers want, because every feature you add before launch is one more thing you might have to change after it.
The point of an MVP is to put the core workflow in front of real users as early as possible. A shorter timeline is not just cheaper. It also gets you the feedback that tells you what the second version should be.
## What can be built in about 7 days?
In about a week you can build a working first version of one workflow: the single thing your product does that someone would care about.
That might be a form that collects a request and shows it in a simple admin list, a calculator that turns inputs into a quote, or a tool that takes an upload and produces a result. It has real data storage and it works end to end, but it does one job.
What a 7 day build usually leaves out:
- Payments, unless they are a simple payment link.
- More than one or two kinds of user.
- Integrations with other software beyond one simple connection.
- A full settings area, team invites or notification preferences.
This is the size my MVP Starter package covers, from $250. It suits founders who want to test whether anyone will use the core idea before paying for the rest, and it suits internal tools where one team needs one workflow working this month.
When I built SQWAD, the first version did one thing: it let a brand see which creator drove a sale. Applications, shipping and payouts came later. That order meant the hardest and most valuable part was proven before anything else was added around it.
![SQWAD revenue attribution page: every Meta ad traced to the creator and video, the first workflow I built.](/shots/sqwad-creator-revenue-attribution.jpg)
## What fits in about 21 days?
In about three weeks you can build a SaaS MVP that a customer can sign up for, use and pay for: authentication, a dashboard, a database and payments.
This is the size most founders mean when they say MVP. The product has accounts, so users can come back to their own data. It has a dashboard that shows the core workflow. It has a database with rules about who can read and change what. And it takes money, usually through Stripe Checkout and a subscription or one-time payment.
A rough shape for those three weeks:
### Week one: foundations
Data model, sign-in, the main screens in rough form and the database rules. By the end of the week the core workflow runs with test data.
### Week two: the product
The dashboard, the workflow's edge cases, emails that the app sends, and payments in test mode.
### Week three: launch
Real content, error states, testing as each kind of user, moving payments from test mode to live mode, the custom domain and deployment.
This is my SaaS MVP package, from $1,200. If you want to know what pushes the price of a build like this up or down, "How much does an MVP cost? SaaS MVP prices and what drives them" goes through it line by line.
## What takes about 45 days?
About six to seven weeks covers a full platform: several user roles with different permissions, admin tools, and integrations with other systems.
The time goes up faster than the feature list suggests, because roles multiply testing. With two roles you check a few combinations. With five roles, each screen has to be tested as each role, and each record has to be checked for who can read it and who can change it.
Guardian MindCare is an example of this size of product. It has five roles (therapists, supervisors, trainees, clients and admins), each with its own portal, plus a public site with a therapist search by insurance. A product shaped like that needs the permissions decided before the first screen is designed, which is why I wrote "Roles and permissions in a SaaS app: a practical guide for founders" about that step on its own.
Integrations add time for a different reason: you are working against someone else's API, rate limits and test environment, and you only find their quirks by building against them. This is my Full SaaS Platform package, from $3,000.
## What happens before the build starts?
The build clock should start only when the core workflow is written down and every account the app needs is ready, and getting there usually takes two to five days.
Preparation is the part founders underestimate. Before day one of the build I want:
- The core workflow in a few sentences: who does what, in what order, and what they see at the end.
- A list of what is explicitly out of scope for this version.
- Access to the accounts the app will run on: GitHub, hosting, the database project, Stripe, the domain registrar and the email sending service.
- Any real content: product names, prices, copy, logos.
- Example data, even a spreadsheet of ten rows, so the screens are built around real shapes of data.
If any of these arrive in week two instead of before day one, the build waits for them. "What to send a web developer before your project starts" has a fuller checklist that also applies to apps.
## What slows an MVP down?
The biggest delays are scope added mid-build, slow feedback, third-party approvals and messy data, and almost none of them are about writing code.
### New features during the build
Every MVP collects new ideas while it is being built, because seeing the product makes people think of more. Adding them on the spot is how a three-week build becomes six. I keep a version two list and put every new idea on it. Most of them look less urgent once real users show up.
### Slow feedback
If a question waits three days for an answer, the build waits three days. A founder who answers within a working day keeps the schedule intact.
### Payments going live
Stripe's go-live checklist includes registering live webhook endpoints, rotating keys and making sure nothing depends on test objects, since sandbox products and prices do not carry over to live mode. Account activation details also have to be complete. None of that is hard, but it has to be done, and it is easy to leave until the last day. I cover the steps in "Stripe test mode to live mode: the checklist I use before taking payments."
### Domains and DNS
Pointing a custom domain at the app needs access to the registrar, and Vercel's own documentation notes that DNS changes can take time to propagate. If nobody knows who holds the registrar login, launch day stalls.
### App store review
A native mobile app adds store review and device testing that a web app does not need. When speed matters, I usually suggest launching the MVP as a web app first.
### Messy existing data
Importing customers from an old spreadsheet or system always takes longer than expected, because real data has duplicates, missing fields and formats nobody documented.
> Write the out-of-scope list before the build and keep it visible. It is the single best tool for keeping an MVP on schedule.
## A worked example: a booking tool for tutors
Here is an illustration with a made-up business, to show how scope changes the timeline.
A founder wants a tool for independent tutors: parents book sessions, pay online, and tutors see their schedule. The first idea includes parent and tutor accounts, payments, reminders, reviews, a messaging inbox, an admin area for the founder and a calendar sync.
That full list is a 45 day platform. Instead, we split it:
- Version one, about 7 days: a booking page per tutor and a tutor dashboard showing upcoming sessions. Payment happens outside the app for now. This tests whether tutors share the link and parents book.
- Version two, about 21 days in total from the start: parent accounts, Stripe payments, reminder emails and the founder's admin view.
- Later: reviews, messaging and calendar sync, built once real tutors ask for them.
The founder gets something in front of tutors in the first week. If tutors do not share the link, the founder has learned that for the price of a week instead of two months. If they do, every later feature is shaped by how people actually used the first one.
## Can AI tools make an MVP faster?
AI builders such as Lovable or Bolt speed up the first draft of an MVP, but the slow parts of a real launch take about as long as they always did.
Generating screens is fast now. Deciding the data model, writing database rules, wiring payments correctly, handling errors and testing as each type of user are still careful work. I see many AI-built apps that look finished and then need a week or two of fixes before they can safely take real users and money.
If you already have an AI-built version whose core features work, finishing it can be quicker and cheaper than starting over. My Finish and Launch package, from $600 over about 10 days, is for that case. "Fix or rebuild your AI-built app? How to decide before you spend more" helps decide which path you are on.
## When should you hire help instead of building it yourself?
Build it yourself if the MVP is a single workflow and you have the time to learn, and hire help when you need payments, roles or a fixed launch date.
Doing it yourself costs time instead of money, and that trade can be right early on. The risk shows up when the MVP handles other people's data or money, because mistakes in database rules and payment webhooks are quiet until they are expensive. A developer who has shipped these pieces before mainly saves you from the problems you do not know to look for yet.
If you do hire someone, ask for a fixed scope, a written out-of-scope list and a date, and agree on how fast feedback needs to come back. Those four things protect the timeline more than any choice of framework.
## The bottom line
An MVP takes about 7 days for one workflow, about 21 days for a SaaS product people can pay for, and about 45 days for a multi-role platform with integrations. The fastest way to launch is to shrink the first version until it does one job well, prepare every account before the build starts, answer questions quickly, and put every new idea on the list for version two.`,
  },
  {
    slug: 'internal-dashboard-for-an-ecommerce-brand',
    title: 'Building an internal dashboard for an ecommerce brand: sales, email, ads and support in one place',
    description: 'How to pull Shopify, email, ads and the support inbox into one internal dashboard: what to sync, how to store it, what to show, and how THG Brain does it.',
    date: d,
    keywords: ['internal dashboard for ecommerce brand', 'ecommerce data dashboard', 'Shopify reporting dashboard', 'ecommerce business intelligence', 'custom ecommerce dashboard'],
    service: 'saas-mvp-development',
    shortAnswer: 'An internal dashboard for an ecommerce brand syncs data from Shopify, the email platform, ad accounts and the support inbox into one database on a schedule, then shows a small set of agreed numbers and lets the team search across everything. Building it as copies in your own database, rather than live calls to each tool, keeps it fast and makes it possible to query from an AI assistant.',
    takeaways: [
      'Each tool reports its own version of the truth, so the value of an internal dashboard is putting the numbers side by side with one definition each.',
      'Sync data into your own database on a schedule instead of calling every API each time someone opens the page.',
      'Start with orders, email, ad spend and support conversations, and add sources only when a real question needs them.',
      'Read-only access to every source keeps an internal dashboard safe to give to the whole team.',
      'THG Brain puts The Hoop Gang\'s sales, email, ads, support inbox and creator portal in one place, queryable from the team\'s own Claude.',
    ],
    faqs: [
      { q: 'Why not just use Shopify analytics?', a: 'Shopify analytics shows store data well, but it does not combine it with your email platform, ad accounts and support inbox in one view with your own definitions.' },
      { q: 'Should an internal dashboard call each API live?', a: 'Usually not; syncing data into your own database on a schedule is faster, avoids API rate limits and lets you search across sources.' },
      { q: 'Is a BI tool cheaper than a custom dashboard?', a: 'An off-the-shelf BI or reporting tool can be cheaper to start, but a custom dashboard makes sense when you need your own metrics, a support inbox or a creator program in the same place.' },
      { q: 'Can the team ask questions in plain English instead of using filters?', a: 'Yes, if the data sits in your own database you can expose it to an AI assistant such as Claude through an MCP server and ask questions directly.' },
      { q: 'What would Thomas Osayi charge to build an internal dashboard?', a: 'Thomas Osayi builds a dashboard with sign-in, a database and a few synced sources under the SaaS MVP package from $1,200 in about 21 days, and multi-source platforms with admin tools under the Full SaaS Platform package from $3,000 in about 45 days.' },
    ],
    sources: [
      { title: 'GraphQL Admin API reference', publisher: 'Shopify', url: 'https://shopify.dev/docs/api/admin-graphql' },
      { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/docs/getting-started/intro.md' },
      { title: 'Third party connectors with remote MCP', publisher: 'Claude', url: 'https://claude.com/docs/connectors/custom/remote-mcp' },
    ],
    body: `A growing ecommerce brand ends up with its numbers spread across five or six logins. Sales live in Shopify, email in the email platform, ad spend in Meta and Google, conversations in a support inbox, and creator results somewhere else again. Answering a simple question, such as whether last week's email or last week's ads drove the sales bump, means opening every tab and reconciling numbers that were never meant to sit together.
An internal dashboard fixes that by putting everything in one place the team owns. I built one for The Hoop Gang, called THG Brain, so this post is based on what that kind of build actually involves: which sources to start with, how the data gets in, what the screen should show, and the mistakes that make these projects drag.
## What is an internal dashboard for an ecommerce brand?
It is a private web app, used only by the brand's team, that syncs data from the tools the business runs on into one database and shows it together.
The word dashboard undersells it a little. A good internal tool does three jobs:
- Shows a small set of numbers everyone agrees on, such as revenue, orders, ad spend and email revenue for a chosen period.
- Lets the team search across sources, for example every support conversation and order linked to one customer.
- Answers new questions without a developer, either through filters or, increasingly, through an AI assistant connected to the same data.
It is not a replacement for Shopify or the email platform. The team still works in those tools. The dashboard is where the numbers from all of them meet.
## Why not just use each tool's own dashboard?
Because each tool reports only its own data with its own definitions, and nobody can see the whole picture without copying numbers into a spreadsheet.
Shopify knows orders. The email platform knows which emails were opened and what it attributes to them. Meta and Google each report conversions using their own attribution rules, and those rarely add up to what Shopify actually recorded. The support inbox knows which customers complained about sizing, but has no idea which product or ad they came from.
None of these tools is wrong. They are each answering a narrower question than the one the owner is asking. The usual workaround is a weekly spreadsheet someone fills in by hand, which is slow, goes stale by Wednesday, and only covers the questions somebody thought of in advance.
An internal dashboard replaces that spreadsheet with a sync that runs on its own, and it lets you set one definition per metric, such as revenue meaning Shopify net sales after refunds, so the weekly meeting stops arguing about whose number is right.
## Which data sources should go in first?
Start with the four sources that answer most owner questions: orders, email, ad spend and support conversations.
### Orders and products
Shopify is the source of truth for revenue, orders, refunds, products and customers. Everything else gets compared against it.
### Email
Campaigns and flows, with sends, opens, clicks and the revenue the platform attributes to them.
### Ads
Daily spend, impressions, clicks and reported conversions by campaign from Meta and Google. Daily totals by campaign are enough for a first version. Ad-level detail can come later.
### Support inbox
Conversations and their subjects. This is the source brands forget, and it is often the most useful, because it explains the numbers: a spike in refunds is easier to understand next to fifty emails about one size running small.
### Later sources
Web analytics, inventory, a creator or affiliate program, reviews and shipping. Add each one when a real question needs it, not because it is available.
## How does the data get into one place?
Scheduled sync jobs pull data from each tool's API and write it into your own database, and the dashboard reads only from that database.
The tempting shortcut is to call every API live each time someone opens the page. It works in a demo and fails in real use. Pages get slow, you hit rate limits, and you cannot search across sources because the data never sits in one place. Shopify's GraphQL Admin API, for example, throttles requests by query cost, and Shopify points large data pulls toward bulk operations rather than many small requests.
The pattern I use instead:
- A database, usually Postgres, with one table per kind of record: orders, line items, campaigns, daily ad stats, emails, conversations.
- A sync job per source that runs on a schedule, fetches only what changed since the last run, and upserts it so reruns never create duplicates.
- A backfill script that loads history once, separately from the regular sync.
- A sync log that records when each source last succeeded, so stale data is visible on the screen instead of silently wrong.
Every connection uses the narrowest read-only access the tool allows. The dashboard has no reason to change an order or send an email, so it should not have the permission to.
### How often should each source sync?
Match the schedule to how the number is used. Orders and support conversations are worth syncing every hour or so, because the team reacts to them during the day. Ad and email results change their reported conversions for days afterwards as attribution settles, so a nightly sync that also refreshes the last week is more accurate than a frequent one that only fetches today. Historical data rarely changes and only needs the one-time backfill. Running every source every five minutes mostly buys you rate limit errors and a bigger hosting bill.
## What should the dashboard actually show?
A handful of numbers with clear definitions, a date range control, and search, rather than every chart each source can produce.
For most brands the first screen needs revenue, orders, average order value, ad spend, email-attributed revenue and open support conversations, each compared with the previous period. Below that, a table by day or week makes trends obvious without any charting skill.
Write the definition of each number next to it or in a tooltip. Revenue before or after refunds? Ad spend including tax? Email revenue as reported by the platform, or matched to Shopify orders? Deciding these once is half the value of the whole project.
> If a number cannot be defined in one sentence, it is not ready to go on the first screen. Leave it out until it can.
## How does THG Brain do it?
THG Brain is the internal data platform I built for The Hoop Gang: sales, email, ads, the support inbox and the creator portal, synced and searchable in one place, and queryable from the team's own Claude.
The goal, in the words on its sign-in screen, is every number THG runs on, in one place. The screen lists the connected sources (Shopify, Klaviyo, Gmail, Meta Ads, Google Ads, GA4 and the creator portal) and states that it is for admins only, with read-only data.
![THG Brain sign-in screen: every number THG runs on in one place, with sales, email, ads, support inbox and the creator portal synced and searchable.](/work/thgbrain.jpg)
Two design choices matter most. First, the creator portal is a source like any other, so creator activity sits next to sales and ads instead of in a separate system. Second, because everything is in one database the team controls, the same data can be reached from Claude. Someone on the team can ask a question in plain English and get an answer drawn from the synced records, without building a new chart for it.
## Why make the data queryable from an AI assistant?
Because most questions a team has are one-off, and building a chart for each of them is slower than asking.
A fixed dashboard answers the questions you planned for. The ones that come up on a Tuesday afternoon, such as which products got the most support emails after the last drop, or how email revenue compared to ad spend in the week of a launch, usually need a developer or an export. When the synced data is exposed to Claude through the Model Context Protocol, the team can ask those questions directly.
The Model Context Protocol describes itself as an open-source standard for connecting AI applications to external systems. Claude can connect to a remote MCP server as a custom connector, so the brand's own server sits in front of its own database and decides exactly what Claude can read. I wrote the details up in "How to connect Claude to your business data with MCP."
## A worked example: a candle brand
To make this concrete, here is an illustration with a made-up brand.
A candle brand sells on Shopify, emails customers twice a week, runs Meta ads and answers support in a shared Gmail inbox. The owner wants to know, every Monday, whether last week was good and why.
Version one has:
- Sign-in for three team members.
- Nightly syncs for Shopify orders, email campaign results, Meta daily spend and support conversations.
- One overview screen with six numbers against the previous week, and a daily table.
- Search across orders and conversations by customer email.
That is a three-week build and fits my SaaS MVP package, from $1,200. Adding Google Ads, analytics, inventory, an admin area for managing syncs and an AI connection takes it toward the Full SaaS Platform package, from $3,000 over about 45 days. Running costs are mostly a small database and hosting, plus whatever the sources charge for API access, which is usually nothing beyond the plans the brand already pays for.
## What mistakes should you avoid?
The common ones are syncing too much too soon, skipping definitions, and giving the dashboard more access than it needs.
- Syncing every field from every source. Start with what the first screen uses.
- No backfill plan. A dashboard with two weeks of history cannot answer whether this month is better than last year.
- Hiding sync failures. Show the last successful sync time per source on the screen.
- Write access to source tools. Read-only scopes everywhere, and API keys stored server side, never in the browser.
- No roles. If contractors or creators will ever log in, decide now who can see revenue.
- Building charts before anyone has asked a question. Ask the team for their ten most common questions first.
## The bottom line
An internal dashboard for an ecommerce brand is a private app that syncs orders, email, ads and support into one database the brand owns, then shows a few well-defined numbers and lets the team search across them. Start with four sources, sync on a schedule with read-only access, show when data was last updated, and connect it to an AI assistant once the data is clean. That is how THG Brain works for The Hoop Gang, and it is a pattern most growing Shopify brands can use.`,
  },
  {
    slug: 'connect-claude-to-your-business-data-with-mcp',
    title: 'How to connect Claude to your business data with MCP',
    description: 'What the Model Context Protocol is, how remote MCP servers and custom connectors work in Claude, why to start read-only, how to handle auth, and a real example.',
    date: d,
    keywords: ['connect Claude to business data MCP', 'Model Context Protocol', 'remote MCP server', 'Claude custom connector', 'MCP server for business'],
    service: 'saas-mvp-development',
    shortAnswer: 'You connect Claude to your business data by running a remote MCP server in front of that data and adding its URL to Claude as a custom connector. The server decides which tools Claude can call, so starting with narrow, read-only tools and proper sign-in keeps your data safe while letting the team ask questions in plain English.',
    takeaways: [
      'The Model Context Protocol is an open standard for connecting AI applications such as Claude to external data and tools.',
      'A remote MCP server is a web service you host; Claude reaches it by URL once you add it as a custom connector.',
      'Expose a few narrow, read-only tools first, rather than raw database access or anything that can change data.',
      'Use OAuth when each person signs in with their own account, and request headers only for a shared service credential.',
      'THG Brain makes The Hoop Gang\'s synced sales, email, ads, support and creator data queryable from the team\'s own Claude.',
    ],
    faqs: [
      { q: 'What is the Model Context Protocol?', a: 'The Model Context Protocol (MCP) is an open-source standard for connecting AI applications to external systems such as databases, business tools and workflows.' },
      { q: 'Do I need to build my own MCP server?', a: 'Not if a ready-made connector for your tool exists in Claude\'s connectors directory; you build your own when the data lives in your own database or you need control over exactly what Claude can see.' },
      { q: 'Can Claude change my data through MCP?', a: 'Only if the MCP server exposes tools that write data, which is why a read-only server is the safest place to start.' },
      { q: 'Is a custom connector safe to use?', a: 'Anthropic warns that custom connectors can reach unverified services, so connect only to servers you trust, review the permissions you grant and watch for unexpected tool behavior.' },
      { q: 'Can Thomas Osayi build an MCP server for my business?', a: 'Thomas Osayi builds data platforms like THG Brain, and a synced database with a read-only MCP server and dashboard typically fits the Full SaaS Platform package from $3,000 over about 45 days.' },
    ],
    sources: [
      { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/docs/getting-started/intro.md' },
      { title: 'Introducing the Model Context Protocol', publisher: 'Anthropic', url: 'https://www.anthropic.com/news/model-context-protocol' },
      { title: 'Third party connectors with remote MCP', publisher: 'Claude', url: 'https://claude.com/docs/connectors/custom/remote-mcp' },
    ],
    body: `A lot of business owners now use Claude every day for writing and thinking, and then switch to five other tabs when they need an actual number. The obvious next step is to let Claude see the numbers too, so the question "how did last week's email do against ad spend?" gets answered from real data instead of a guess.
The standard way to do that is the Model Context Protocol, usually shortened to MCP. I built THG Brain, The Hoop Gang's internal data platform, around this idea, so this post covers what MCP is, how remote servers and custom connectors work in Claude, and the safety decisions that matter most: read-only first, and proper sign-in.
## What is the Model Context Protocol?
MCP is an open-source standard for connecting AI applications to external systems, such as databases, business tools and workflows.
The protocol's own documentation compares it to a USB-C port for AI applications: one standard plug instead of a custom cable for every device. Anthropic introduced it in November 2024 as an open standard for connecting AI assistants to the systems where data lives, alongside a specification, SDKs and a set of open-source example servers for tools like Google Drive, Slack, GitHub and Postgres.
The practical meaning is that you build the connection to your data once, as an MCP server, and any AI application that supports MCP can use it. The documentation lists Claude and ChatGPT among the assistants that support it, along with developer tools such as Visual Studio Code and Cursor.
Before MCP, connecting an assistant to a company's data meant a one-off integration for each assistant. Now the server is the integration.
## How does MCP work?
An AI application acts as the client, your MCP server sits in front of your data, and the server offers a list of tools the AI can call with specific inputs.
When you ask Claude a question and a connector is enabled, Claude can see the tools that server offers, each with a name, a description and the inputs it accepts. If a tool looks relevant, Claude calls it, the server runs your code against your data, and the result comes back for Claude to read and explain.
A tool for a store might be something like "get daily revenue for a date range", taking a start date and an end date. Claude decides when to call it. Your server decides what it actually does, what it returns and who is allowed to call it.
Tool names and descriptions matter more than people expect, because they are what Claude reads when deciding which tool fits a question. A tool called get_data with the description "returns data" will be called at the wrong times or not at all. A tool called revenue_by_day, described as "Shopify net sales per day for a date range, after refunds, in US dollars", tells Claude exactly when to use it and how to explain the result. Describe the units, the time zone and what the numbers include, the same way you would for a new analyst on the team.
That split is the important part. Claude never connects to your database directly. It only ever sees what your server's tools return, so the server is where every rule about access lives.
## What is a remote MCP server?
A remote MCP server is an MCP server hosted on the web at an HTTPS address, so Claude can reach it from anywhere without anything installed on your computer.
MCP servers can also run locally on one person's machine, which is how the protocol started in the Claude desktop app. That suits a developer connecting to their own files. For a business, a remote server is usually better:
- Everyone on the team connects to the same server, so they all see the same data.
- It runs next to your database in the cloud, not on someone's laptop.
- Sign-in and permissions are handled once, on the server.
- It works in Claude on the web and on mobile, not only on one computer.
In Claude's documentation, a remote server is added by URL, for example an address ending in /mcp, and the transport is detected from the URL. An older transport called SSE is still supported for URLs ending in /sse, but new servers generally use the newer HTTP transport.
## How do you add a custom connector in Claude?
You add the remote server's URL as a custom connector in Claude's settings, then turn it on in the conversations where you want it.
At the time of writing, Claude's documentation describes these steps:
- On Free, Pro and Max plans: go to Customize, then Connectors, choose Add custom connector, enter the server URL, optionally add OAuth details, and click Add.
- On Team and Enterprise plans: an owner adds it under Organization settings, then Connectors, choosing Add and then Custom. Members then find the connector marked Custom and click Connect to sign in.
- In a chat: use the plus button and the Connectors menu to switch connectors on or off for that conversation.
Before you build your own, check Claude's connectors directory. Many common business tools already have connectors, and some are verified by Anthropic. A custom server makes sense when the data lives in your own database, when you want several sources combined, or when you want strict control over what Claude can see.
## Why should the first version be read-only?
Because a read-only server can answer questions but cannot break anything, which makes it safe to give to the whole team while you learn how they use it.
Claude's documentation is direct about this: remote MCP servers can let Claude read data, create, modify or delete data, and take actions on your behalf. The protections it suggests include reviewing tool approval requests, clicking Always allow only for trusted servers, and blocking individual tools you do not need.
The simplest protection is not to offer write tools at all. For a business data server I start with:
- Narrow query tools with clear inputs, such as revenue by day, campaign results for a period or conversations matching a search.
- No raw SQL tool. Letting the model write arbitrary queries is flexible and hard to reason about.
- A read-only database user for the server, so even a bug in the server code cannot write.
- Result limits, so one question cannot pull your whole customer table.
- Only the fields a question needs. Customer emails and addresses stay out of results unless there is a real reason.
Write tools, such as creating a discount code or tagging a customer, can come later, one at a time, each with its own approval.
> Give the server's database user read-only permissions at the database level, not just in your code. Then a mistake in a tool cannot become a mistake in your data.
## How should authentication work?
Use OAuth when each person should sign in with their own account, and use a fixed credential in request headers only for a shared service account.
Claude's custom connector dialog supports both. With OAuth, each user signs in through your server's sign-in flow, and your server knows exactly who is asking, so it can apply that person's permissions and record what they looked at. Claude can identify itself to your authorization server using a client metadata document Anthropic hosts, register automatically, or use a client ID you created.
Request headers, which Claude's documentation marks as beta at the time of writing, send a fixed value such as an API key on every request. That suits an internal tool where everyone shares one credential. One detail trips people up: Claude sends the header value exactly as entered, so a bearer token has to be entered as the word Bearer, a space, then the token.
Whichever you use, the server should reject every request without valid credentials, and authentication settings cannot be edited after the connector is added. You remove and re-add it to change them.
## What does THG Brain do?
THG Brain syncs The Hoop Gang's sales, email, ads, support inbox and creator portal into one place, makes it searchable, and lets the team query it from their own Claude.
The sources are synced into the platform first, rather than Claude calling each outside tool live. That keeps answers fast, lets one question draw on several sources at once, and means the brand controls the single place the data comes from. The sign-in screen marks the admin portal as admins only with read-only data, which is the same principle applied to people that the MCP tools apply to Claude.
The result is that a question that used to need someone to open Shopify, the email platform and two ad accounts can be asked in one sentence. I describe the data side of the same build in "Building an internal dashboard for an ecommerce brand."
## A worked example: a small wholesale business
Here is an illustration with a made-up business, to show the shape of a first MCP project.
A wholesale coffee roaster keeps orders in Postgres, invoices in an accounting tool, and customer emails in a shared inbox. The owner wants to ask Claude things like "which accounts ordered less this quarter than last?"
Version one:
- A nightly sync of invoices into the same Postgres database as orders.
- A remote MCP server with four read-only tools: sales by account and period, account order history, overdue invoices, and search across order notes.
- OAuth sign-in, so the owner and the sales lead each connect with their own account.
- A log of every tool call with the user, the tool and the inputs.
The owner adds the server in Claude as a custom connector and starts asking questions the same day. A build like this, with the sync, the server, sign-in and a small admin screen, fits my Full SaaS Platform package from $3,000 over about 45 days. A single read-only tool over data you already have in one database can be much smaller.
## What risks should you plan for?
The main risks are prompt injection through data, over-broad access and exposing personal data that a question did not need.
Claude's documentation warns about prompt injection, where text inside the data tries to give the AI instructions. A support email that says "ignore previous instructions" is just data, but it is the reason read-only tools matter: an assistant that can only read cannot be talked into deleting anything. Keep tools narrow, keep personal fields out of results by default, log every call, and review the logs in the first few weeks. Check the permission scopes you approve during sign-in, too.
## The bottom line
To connect Claude to your business data, put a remote MCP server in front of that data and add it to Claude as a custom connector. Start with a few narrow, read-only tools backed by a read-only database user, use OAuth so you know who is asking, log every call, and add write tools only one at a time once you trust how the team uses it. That is how THG Brain lets The Hoop Gang ask its own numbers questions in plain English.`,
  },
  {
    slug: 'hipaa-basics-for-a-health-app-mvp',
    title: 'HIPAA basics for a health app MVP: BAAs, access controls and audit logs',
    description: 'Careful general guidance on HIPAA app development basics: when HIPAA applies, which vendors sign BAAs, access controls, audit logs and the leaks MVPs miss.',
    date: d,
    keywords: ['HIPAA app development basics', 'HIPAA compliant app MVP', 'business associate agreement vendors', 'HIPAA audit logs', 'health app access controls'],
    service: 'saas-mvp-development',
    shortAnswer: 'If your health app creates, stores or sends protected health information for a covered entity, you need a business associate agreement with every vendor that touches that data, role-based access controls, audit logs and safeguards for data in transit and at rest. HIPAA has no official certification, so the work is choosing covered vendors, configuring them correctly and documenting a risk analysis; this is general information, not legal advice.',
    takeaways: [
      'HIPAA applies to covered entities and their business associates, so whether your app is covered depends on who you serve and whose data you handle.',
      'Every vendor that stores or processes protected health information needs a signed business associate agreement, even if it cannot read the data.',
      'A vendor offering a BAA does not cover all of its products: check the vendor\'s covered services list and any product restrictions.',
      'The Security Rule\'s technical safeguards include access control, audit controls, integrity, authentication and transmission security.',
      'Analytics pixels, error trackers, emails and AI APIs are the usual places an MVP leaks health data by accident.',
    ],
    faqs: [
      { q: 'Is there such a thing as HIPAA certification?', a: 'No; HHS does not offer a HIPAA compliance certification, so any vendor or developer claiming to be certified is describing their own assessment, not a government credential.' },
      { q: 'Does a cloud provider need a BAA if the data is encrypted?', a: 'Yes; HHS guidance says a cloud provider that stores electronic protected health information is a business associate even if it cannot view the data because it lacks the encryption key.' },
      { q: 'Can I build a health app on Firebase?', a: 'At the time of writing Google Cloud\'s HIPAA covered products list includes Firestore, Cloud Storage and Identity Platform (with restrictions) but no Firebase-branded products, so check the current list and your architecture before storing PHI.' },
      { q: 'Does a wellness app need to follow HIPAA?', a: 'Often not, if it collects data directly from consumers and does not work on behalf of a health plan, provider or clearinghouse, but other privacy laws may still apply, so get legal advice for your specific case.' },
      { q: 'Can Thomas Osayi build a health app MVP?', a: 'Thomas Osayi built Guardian MindCare, a therapy practice platform with five roles, and builds multi-role platforms under the Full SaaS Platform package from $3,000 over about 45 days, alongside your own legal and compliance review.' },
    ],
    sources: [
      { title: 'Summary of the HIPAA Security Rule: laws and regulations', publisher: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations' },
      { title: 'Guidance on HIPAA and cloud computing', publisher: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/special-topics/cloud-computing' },
      { title: 'HIPAA compliance on Google Cloud and Google Workspace', publisher: 'Google Cloud', url: 'https://docs.cloud.google.com/docs/security/compliance/hipaa' },
      { title: 'HIPAA BAAs are now available to Pro teams', publisher: 'Vercel', url: 'https://vercel.com/changelog/hipaa-baas-are-now-available-to-pro-teams' },
      { title: 'HIPAA projects', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/platform/hipaa-projects' },
    ],
    body: `Health founders often treat HIPAA as a badge to add at the end. It works the other way around. The rules shape which vendors you can use, how sign-in and roles work, what gets logged and what your analytics are allowed to see, so the decisions belong at the start of the MVP, before the first table is created.
This is careful general information from a developer's point of view, not legal advice. I am not a lawyer, and whether HIPAA applies to your product, and what it requires of you, is a question for a healthcare attorney or compliance professional. What I can do is explain the technical basics I plan around and the places MVPs usually go wrong.
## Does my health app need to follow HIPAA?
HIPAA applies to covered entities (health plans, healthcare clearinghouses and most healthcare providers) and to business associates that handle protected health information on their behalf.
In practice, that splits health apps into two broad groups:
- Apps built for or used by a practice, clinic or health plan, such as a patient portal, a therapy practice platform or an intake tool. These usually handle protected health information on behalf of a covered entity, so HIPAA is likely to apply.
- Consumer apps where a person tracks their own data and no provider or plan is involved, such as many fitness or mood trackers. These are often outside HIPAA, though other privacy laws and app store rules may still apply.
The same app can move from the second group to the first the day it starts sharing data with a provider. That is why the question belongs to the business model, not just the code, and why I ask founders to get a legal opinion before we design the data model.
## What counts as protected health information in an app?
Protected health information is health information that can be tied to an individual, and in an app that usually means far more than diagnosis fields.
A name next to an appointment type, an email address on an intake form, a note from a session, an insurance member ID, or even the fact that someone booked with a particular kind of specialist can all count when they relate to a person's health or care. In an MVP, it is safest to assume that anything a patient or client enters, and anything linking them to care, is protected.
That assumption has a useful side effect: it pushes you to collect less. The safest data is data you never collect, and a smaller data model is also faster to build.
## What is a BAA and which vendors sign one?
A business associate agreement is a contract in which a vendor agrees to protect health information as HIPAA requires, and you need one with every vendor that creates, receives, stores or transmits it for you.
HHS guidance on cloud computing is clear that a cloud provider storing electronic protected health information is a business associate even if it cannot view the data, for example because it does not hold the encryption key. Encryption does not remove the need for a BAA.
Several major vendors do offer BAAs. At the time of writing:
- Google Cloud enters into BAAs covering a published list of services. That list includes Firestore, Cloud Storage, Cloud Run, Cloud SQL and Cloud Logging, and Identity Platform with restrictions: store only the minimum needed for sign-in, keep PHI out of custom attributes, do not use anonymous accounts for PHI and do not use its client SDKs when handling PHI. The list has no Firebase-branded products, so a typical Firebase app needs an architecture review before PHI goes in.
- Vercel made BAAs available to Pro teams as a paid self-serve add-on in September 2025, for organizations that are covered entities or business associates.
- Supabase requires a signed BAA and its HIPAA add-on, after which a project can be set to high compliance with point in time recovery, SSL enforcement, network restrictions and connection logging.
A BAA covers specific products and configurations, not everything the vendor sells. Read the covered services list, follow its restrictions, and keep a simple table of every vendor, whether it touches PHI and whether a BAA is signed.
## What does HIPAA require inside the app itself?
The Security Rule's technical safeguards cover access control, audit controls, integrity, person or entity authentication and transmission security, all guided by a documented risk analysis.
Translated into app features, that usually means:
- Access control: each person sees only the records their role allows, enforced on the server or in database rules.
- Audit controls: a record of who viewed or changed health data, and when.
- Integrity: protection against records being altered or deleted improperly, plus backups you can restore.
- Authentication: verifying each user is who they claim to be, with unique accounts and strong sign-in such as multi-factor authentication for staff.
- Transmission security: HTTPS everywhere and encrypted connections to the database.
Integrity is the safeguard MVPs most often skip. In practice it means backups that run automatically and a restore you have actually tested, soft deletes for clinical records so a mistaken click can be undone, and database rules that stop a user from editing records they only need to read. It also means deciding how long records are kept and who can delete them, because retention rules for health records usually come from state law and professional requirements, not from the app. "How to back up your Supabase or Firebase database (and test the restore)" walks through the backup half of this.
HHS also lists administrative safeguards, including a security management process built on a thorough risk analysis, and limiting access to the minimum necessary. Those are documents and processes your organization owns, not code, but the app should make them possible.
## How should access controls work in a health app?
Start from a written table of roles and records, then enforce it on the server or in database rules, never only by hiding buttons in the interface.
Guardian MindCare, the therapy practice platform I built, has five roles: therapists, supervisors, trainees, clients and admins. Each has its own portal, and each sees only what it should. A trainee working under supervision should not see what a supervisor or admin sees, and a client should only ever see their own information.
![Guardian MindCare homepage: Real therapy, in network with your plan, with a provider search by therapy type, insurance and session format.](/shots/guardian-home.jpg)
The approach I used there applies to any health app. List every role down one side and every kind of record across the top, mark read, write or nothing in each cell, and only then design screens. Then test as every role, trying to open other roles' pages and records directly. "Roles and permissions in a SaaS app: a practical guide for founders" goes deeper on this step.
On the public side, Guardian MindCare's site asks only for what is needed to get someone matched and scheduled. Clinical detail belongs in the practice's clinical records system, not in a website form. That is a privacy decision, not a compliance certification, and I would not describe the platform as anything more than that.
## What should audit logs record?
An audit log should record who did what to which record and when, in a place ordinary users cannot edit or delete.
A useful log entry for a health app includes:
- The user ID and role.
- The action: viewed, created, updated, deleted, exported.
- The record type and record ID, not the health data itself.
- A timestamp and the source, such as the web app or an admin tool.
Keep PHI out of the log message. "User 42 viewed session note 1187" is an audit record. "User 42 viewed a note about anxiety" is a second copy of protected data in a system that may not be covered. Google Cloud's guidance for Cloud Logging, for example, includes configuring audit log export destinations, restricting log access and reviewing logs regularly. Reviewing matters as much as recording: a log nobody reads protects nobody.
> Write audit entries from the server, in the same operation that reads or changes the record. Logs written from the browser can be skipped or faked.
## Where do health app MVPs usually leak data?
Most accidental leaks in health MVPs happen through the tools around the app, not the database.
- Analytics and ad pixels on pages that reveal a condition or appointment type, sending page URLs and identifiers to companies with no BAA.
- Error tracking that captures request bodies or form fields when something fails.
- Transactional emails and texts that put appointment details or diagnoses in the message.
- AI APIs used to summarize notes without a BAA from the model provider.
- Server logs that print whole request objects.
- Contact forms that ask for symptoms. "Are website contact forms HIPAA compliant? What health practices need to know" covers that one in detail.
The fix is usually the same: keep PHI out of the tool, or use a vendor that signs a BAA for that product.
## A worked example: a group practice intake app
Here is an illustration with a made-up practice, to show how these decisions fit together.
A small group practice wants an app where new clients complete intake, choose a clinician and book a first session, and clinicians see their upcoming clients.
The plan: hosting and database only on services covered by signed BAAs, configured as their documentation requires. Three roles at first (client, clinician, admin), with database rules enforcing that clients see only their own records. A server-written audit log for every view and change of intake data. Reminder emails that say only that an appointment exists, with details behind sign-in. No ad pixels in the signed-in app, and analytics limited to pages without health information. Multi-factor sign-in for staff.
A build of that shape, with several roles, admin tools and integrations, fits my Full SaaS Platform package, from $3,000 over about 45 days. The practice's own risk analysis, policies, staff training and legal review sit alongside it and are not something a developer can supply.
## When should you bring in legal and compliance help?
Before you design the data model, and again before launch.
The first conversation decides whether HIPAA applies and which data counts as protected. The second checks the vendor list, the BAAs and the documented risk analysis. A developer can build the technical safeguards well, but cannot tell you whether your organization is compliant.
## The bottom line
HIPAA app development starts with knowing whether you are a covered entity or business associate, then signing a BAA with every vendor that touches protected health information and using only their covered products. Build role-based access enforced on the server, server-written audit logs without PHI in them, strong sign-in and encrypted connections, and keep health data out of analytics, error tracking, emails and AI tools. None of this is legal advice, so pair the build with a healthcare attorney or compliance professional.`,
  },
  {
    slug: 'add-multiple-languages-to-a-nextjs-app',
    title: 'How to add multiple languages to a Next.js app (i18n with the App Router)',
    description: 'Next.js internationalization in practice: locale routing, translation files, next-intl setup, translating database content, dates and SEO, with a real example.',
    date: d,
    keywords: ['Next.js internationalization', 'Next.js i18n App Router', 'next-intl', 'multilingual Next.js app', 'translate Next.js app'],
    service: 'saas-mvp-development',
    shortAnswer: 'To add multiple languages to a Next.js app, put the locale in the URL (for example /ja/ or /fr/), move every interface string into one translation file per language, and load the right file on the server for each request, using a library such as next-intl or the dictionary pattern in the Next.js docs. Content stored in your database needs its own translated fields, and each language version needs hreflang links for search.',
    takeaways: [
      'Locale in the URL, such as /ja/ or /fr/, is the most reliable pattern for both users and search engines.',
      'Next.js documents a dictionary pattern for translations, and next-intl adds routing, formatting and typed messages on top.',
      'In recent Next.js versions the locale-detecting file is proxy.ts, which was called middleware.ts until Next.js 16.',
      'Interface text lives in translation files, but database content such as product names needs translated fields or a translations table.',
      'Each language version should link to every other version with hreflang, including itself, plus an x-default fallback.',
    ],
    faqs: [
      { q: 'Does Next.js have built-in internationalization?', a: 'The App Router supports localized routing through a dynamic [lang] segment and locale detection in the proxy file, but translation loading and formatting are up to you or a library such as next-intl.' },
      { q: 'Should I use subpaths or separate domains for each language?', a: 'Subpaths such as /fr/ are simplest for most apps because they share one deployment and one domain, while separate domains suit brands with distinct country businesses.' },
      { q: 'Can I just use automatic browser translation?', a: 'Automatic browser translation helps visitors read a page, but it does not give search engines a page in that language and often mistranslates product and brand terms.' },
      { q: 'How do I translate content stored in a database?', a: 'Store translated versions alongside the original, either as per-language fields or in a separate translations table keyed by record and locale, and fall back to the default language when a translation is missing.' },
      { q: 'What would Thomas Osayi charge to add languages to my app?', a: 'Thomas Osayi can add a second language to a small working app under the Fix Plus Features package from $200 in about 5 days, while larger apps with translated database content fit the SaaS MVP or Full SaaS Platform packages.' },
    ],
    sources: [
      { title: 'Internationalization', publisher: 'Next.js', url: 'https://nextjs.org/docs/app/guides/internationalization' },
      { title: 'App Router setup with i18n routing', publisher: 'next-intl', url: 'https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing' },
      { title: 'Tell Google about localized versions of your page', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/specialty/international/localized-versions' },
    ],
    body: `Adding a second language to an app sounds like a translation job. In practice it is mostly a routing and data job, with translation as the last step. The decisions that matter are where the language lives in the URL, where every string of text comes from, and what happens to content stored in the database.
The Hoop Gang, the streetwear brand I work with as a software engineer, is expanding to Japan and France, so this is a practical question for me rather than a theoretical one. This post covers how internationalization works in the Next.js App Router, how next-intl fits in, how to handle dynamic content, and the SEO pieces that make each language findable. If your project is a marketing site in English and Spanish, "How to build a bilingual website in English and Spanish that ranks in both" covers that case more directly.
## How do you add multiple languages to a Next.js app?
Put the locale in the URL, keep every interface string in a translation file per language, load the right file on the server for each request, and translate stored content separately.
Broken into steps, a typical App Router setup looks like this:
- Choose your locales and a default, for example en, ja and fr with en as default.
- Move every route under a dynamic locale segment, such as app/[locale]/page.tsx.
- Add a proxy file that detects the visitor's preferred language and redirects paths without a locale.
- Create one message file per language, such as messages/en.json and messages/ja.json.
- Replace hard-coded text in components with lookups by key.
- Format dates, numbers and currencies by locale.
- Translate database content with its own fields or table.
- Add hreflang alternates and a language switcher.
The first four steps are plumbing and take a day or two on a small app. Replacing hard-coded strings is the slow part on an app that was not built with languages in mind, because the text is scattered through every component.
## Should the language be in the URL?
Yes, for almost every app: a locale in the path, such as /ja/products, gives each language its own address that can be shared, bookmarked and indexed.
The Next.js documentation describes two options: a sub-path such as /fr/products, or a domain such as my-site.fr/products. Sub-paths are simpler because there is one deployment, one domain and one set of DNS records. Separate domains make sense when each country is really its own business, with its own prices, shipping and legal pages.
The alternative, keeping one URL and switching language with a cookie, looks tidy but causes problems. Search engines see only one language, a link shared from Japan opens in whatever language the recipient last used, and caching gets complicated because the same URL returns different content.
Detecting the browser language is still useful, but only for the first visit. The Next.js docs suggest reading the Accept-Language header in the proxy and redirecting a visitor who arrives at a path with no locale. Once someone picks a language, respect their choice over the header.
## Should you use next-intl or build it yourself?
For most production apps I would use next-intl, and for a small app with a handful of pages the plain dictionary pattern from the Next.js docs is enough.
### The built-in dictionary pattern
The Next.js internationalization guide shows a getDictionary function that imports dictionaries/en.json or dictionaries/nl.json on the server, a hasLocale check that calls notFound for unsupported locales, and generateStaticParams in the layout to pre-render each language. Because pages are Server Components by default, the translation files do not add to the JavaScript sent to the browser. It is simple and has no dependency, but you write plurals, formatting and the language switcher yourself.
### next-intl
next-intl is listed among the libraries in the Next.js docs and adds routing helpers, message formatting with plurals, locale-aware date and number formatting, and navigation helpers that keep the locale in every link. It works in Server and Client Components, which matters once you have interactive parts.
Other options listed in the Next.js docs include next-international, paraglide-next, lingui and several hosted translation platforms. The choice matters less than picking one early and putting every string through it.
## How do you set up next-intl with the App Router?
next-intl's App Router guide uses a routing config, a proxy, a request config and a layout inside the [locale] segment.
At the time of writing, the files in its setup are:
- src/i18n/routing.ts, created with defineRouting, listing the locales and the default locale.
- src/proxy.ts, which uses createMiddleware with that routing config to detect and redirect locales. The docs note this file was called middleware.ts up until Next.js 16, so older projects and tutorials use that name.
- src/i18n/navigation.ts, created with createNavigation, giving Link and redirect helpers that keep the current locale.
- src/i18n/request.ts, created with getRequestConfig, which validates the locale with hasLocale and loads that language's messages.
- src/app/[locale]/layout.tsx, which sets the html lang attribute and wraps the app.
In components you call useTranslations with a namespace, and in server code such as generateMetadata you use getTranslations. Older guides also call setRequestLocale to enable static rendering, and next-intl's docs now describe that as a legacy API, so check the version you install.
> Add the locale segment and the proxy before translating anything. Once every route already runs under /en/, adding /ja/ and /fr/ is just new message files.
## How should translation files be organized?
One JSON file per language, grouped by screen or feature, with keys that describe meaning rather than the English wording.
A key like checkout.payButton survives copy changes. A key like "Pay now" breaks the day marketing changes the button to "Complete order". Group keys by namespace (home, checkout, account, errors) so each component loads only what it uses and translators can work screen by screen.
Practical rules I follow:
- Never build sentences by joining fragments. Word order differs between languages, so use placeholders inside one message.
- Use the library's plural syntax instead of if statements. English has two plural forms, French treats zero differently from English, and Japanese usually has no plural form at all.
- Keep brand and product names out of translation unless the brand wants them translated.
- Have a native speaker review every language before launch. Machine translation is a fine first draft and a poor final one for buttons and legal text.
## How do you translate dynamic content from a database?
Store translated versions next to the original, either as per-language fields or in a separate translations table, and fall back to the default language when one is missing.
Translation files only cover interface text. Product names, descriptions, FAQ answers and emails stored in your database need their own approach:
### Per-language fields
Columns such as name_en, name_ja and name_fr, or a JSON field keyed by locale. Simple and fast for a few fields and a few languages.
### A translations table
A table with the record ID, the locale, the field and the translated text. More flexible when languages keep being added, at the cost of a join.
Either way, write a helper that takes a record and a locale and returns the right text, falling back to English with a note for the team. Content written by users, such as reviews or creator bios, usually stays in its original language. If the products come from Shopify, its own translation features may cover product data, and your app reads the translated fields rather than storing its own copies.
Emails need the same treatment. Store each user's preferred locale on their account, and send transactional emails in that language, not in the language of whoever triggered the email.
## What about dates, currency and layout?
Use the platform's locale-aware formatting for dates, numbers and money, and test layouts with real translated text, because length and line breaking change.
JavaScript's Intl APIs and next-intl's formatters handle date order, decimal separators and currency symbols per locale, so never hand-format a date string. Prices are a separate decision from language: showing yen to a Japanese visitor means real yen prices, not a converted number.
The language switcher deserves a little care as well. Label each option in its own language, so a Japanese visitor looks for the Japanese label rather than the word Japanese in English, and avoid flags, because a language is not a country. Switching should keep the visitor on the same page in the new language instead of sending them back to the homepage, which next-intl's navigation helpers handle for routes that exist in every locale. Store the choice in a cookie so a returning visitor lands in the language they picked, and on signed-in accounts save it to the profile too.
Layout needs checking too. French text often runs longer than English, which breaks tight buttons. Japanese has no spaces between words, so it needs a font with Japanese glyphs and line breaking that does not split text in awkward places.
## How does The Hoop Gang handle it?
The Hoop Gang is expanding to Japan and France, and the creator portal I built for the brand already offers English and Japanese from a switch in the header.
![TheHoopGang creator portal homepage, with the EN and Japanese language switch in the header next to Sign in and Apply.](/shots/hoopgang-home.jpg)
A creator in Japan can read the offer, the steps and the FAQ in Japanese before applying, which matters for a program whose whole pitch is explained on the homepage. As an illustration of how the next language would be added with the pattern in this post: add fr to the routing config, create the French message file, have a native speaker review it, translate the database-driven content, then add the new hreflang alternates and the third option in the switcher. The routing and components do not change.
## How do you make each language rank in search?
Give each language its own URL, link every version to every other with hreflang, and add an x-default for visitors who match none.
Google's guidance says each language version must list itself and all other versions, using full URLs, and that the set should be identical across versions, or the annotations may be ignored. Language codes are two-letter ISO 639-1 codes such as ja and fr, optionally followed by a region such as fr-BE. Google also says it does not use hreflang or the html lang attribute to detect a page's language, so the visible content must really be translated. In Next.js, generateMetadata can return these alternates for each page, and the sitemap should list every language version.
## The bottom line
Next.js internationalization comes down to locale-based routing, translation files per language loaded on the server, and a plan for database content. Use next-intl for most production apps, put the locale segment and proxy in place before translating anything, store translated fields for dynamic content, and add hreflang alternates so every language can be found. Adding a second language to a small working app can fit my Fix Plus Features package from $200, while a larger app with translated data fits a SaaS MVP build from $1,200.`,
  },
];
