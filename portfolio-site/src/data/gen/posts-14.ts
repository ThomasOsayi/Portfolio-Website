// Generated articles, batch 14 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen14: Post[] = [
  {
    slug: 'meta-ads-attribution-for-creator-content',
    title: 'Meta ads attribution for creator content: tying ad data to creators and Shopify orders',
    description: 'How to use the Meta Marketing API insights endpoint, UTMs and Shopify order data to credit sales to the creator behind each ad, with current attribution windows.',
    date: d,
    keywords: ['Meta ads attribution API', 'Marketing API insights', 'creator ad attribution', 'Shopify UTM attribution', 'Meta attribution window'],
    service: 'saas-mvp-development',
    shortAnswer: 'Pull ad-level results from the Meta Marketing API insights endpoint, keep your own table that maps every ad to the creator video it uses, and tag every ad URL with UTM parameters that carry the ad ID so Shopify orders can be matched back. Meta tells you what it credits to each ad, Shopify tells you what actually sold, and the mapping table turns both into a number per creator.',
    takeaways: [
      'The Marketing API reports results per ad, not per creator, so the link between an ad and a creator has to live in your own database.',
      'At the time of writing, the insights API still returns 1-day click, 7-day click, 28-day click, 1-day engaged view and 1-day view windows, while 7-day and 28-day view windows stopped returning data on January 12, 2026.',
      'Put the ad ID in a UTM parameter with Meta dynamic URL parameters so Shopify orders carry the same key as the ad report.',
      'Meta and Shopify numbers will never match exactly, so report both and explain the gap instead of forcing them to agree.',
      'Re-pull the last few weeks of insights on every sync, because conversions keep arriving after the ad day ends.',
    ],
    faqs: [
      { q: 'Can the Meta Marketing API tell me which creator drove a sale?', a: 'Not directly, because Meta reports by campaign, ad set and ad; you get creator-level numbers by mapping each ad to the creator whose video it uses and summing the ads.' },
      { q: 'What attribution window should I use for creator ads?', a: 'Most brands report on 7-day click plus 1-day view because it matches the default in Ads Manager, and keep a click-only column alongside it as a more conservative view.' },
      { q: 'Why do Meta purchases not match my Shopify orders?', a: 'Meta counts view-through and modeled conversions and credits them to the day of the ad interaction, while Shopify counts real orders on the day they were placed, so the two totals measure different things.' },
      { q: 'Do I need UTMs if I already use the Meta pixel?', a: 'Yes, because the pixel feeds Meta its own reporting, while UTMs land on the Shopify order and give you an independent record you control.' },
      { q: 'How much does it cost to build creator attribution into an app?', a: 'Thomas Osayi builds a first working version of one workflow such as this from $250, and a full platform with Shopify, Meta and admin tools from $3,000.' },
    ],
    sources: [
      { title: 'Ads Insights API metric availability updates', publisher: 'Meta for Developers', url: 'https://developers.facebook.com/blog/post/2025/10/16/ads-insights-api-metric-availability-updates/' },
      { title: '2025 Out-Of-Cycle Changes (Marketing API)', publisher: 'Meta for Developers', url: 'https://developers.facebook.com/docs/marketing-api/out-of-cycle-changes/occ-2025' },
      { title: 'Meta Ads Attribution Setting: A Complete Guide', publisher: 'Jon Loomer Digital', url: 'https://www.jonloomer.com/meta-ads-attribution-setting-a-complete-guide/' },
    ],
    body: `A brand pays twenty creators for videos, turns the best ones into Meta ads, and spends real money behind them. Then someone asks the obvious question: which creators are actually making us money? Ads Manager cannot answer it, because Ads Manager does not know who a creator is. It knows campaigns, ad sets and ads.
I built SQWAD, creator program software for Shopify brands, around exactly that question. This post explains how the pieces fit together: what the Meta Marketing API gives you, which attribution windows still exist, how UTMs carry the ad into a Shopify order, and why the numbers never line up perfectly.
## How does Meta ads attribution work for creator content?
Meta credits a conversion to an ad when someone clicks or views that ad and then converts within the attribution window, and creator attribution is simply those ad results grouped by the creator behind each ad.
The chain has four links. A creator makes a video. The brand uploads it, often as a partnership ad or a plain video creative. That creative runs inside one or more ads. Those ads collect impressions, clicks, purchases and purchase value, which the Marketing API reports per ad.
Only the last link comes from Meta. The first three are business facts the brand knows and Meta does not store in a reportable way. So every creator attribution system, whether it is SQWAD, another tool or a spreadsheet, does the same thing underneath: it keeps a mapping from ad to creator, pulls ad-level results, and adds them up per creator.
That is also why a homemade version breaks so easily. The moment someone duplicates an ad, swaps a creative or renames a campaign, a spreadsheet mapping goes stale. The mapping has to be stored by ad ID, which does not change, and refreshed when new ads appear.
## What does the Marketing API insights endpoint give you?
The insights edge returns delivery and conversion metrics for an ad account, campaign, ad set or ad, and for creator work you want it at the ad level, broken down by day.
A typical request asks the ad account for insights with level set to ad, a date range, time_increment set to 1 for daily rows, and a field list. The fields that matter for creator reporting are:
- ad_id, ad_name, adset_id and campaign_id, so each row can be joined to your mapping table.
- spend, impressions, clicks and reach for cost and delivery.
- actions and action_values, which hold purchases and purchase value as a list of action types.
- purchase_roas if you want Meta's own return on ad spend figure.
The actions field is the one people misread. It is not a single number. It is an array of objects, one per action type, such as offsite_conversion.fb_pixel_purchase or the omni purchase type, each with a value. Pick one purchase action type, document which one, and use it everywhere, or you will double count.
You need a token with the ads_read permission for the ad account. For an app that reads accounts on behalf of brands, that means Facebook Login for Business and app review. For a single brand's internal tool, a system user token from Business Manager is the simpler route.
## Which attribution windows can you still request?
At the time of writing, the insights API returns 1-day click, 7-day click, 28-day click, 1-day engaged view and 1-day view, and nothing longer on the view side.
Meta announced in October 2025 that the 7-day view and 28-day view windows would stop returning data on January 12, 2026. If an older integration still asks for 7d_view or 28d_view in action_attribution_windows, those values simply come back empty. Check your code for them.
Two other changes matter. Since June 10, 2025, Meta disregards the use_unified_attribution_setting and action_report_time parameters, so API responses follow the settings in Ads Manager. In practice that is good news: your numbers should now match what the brand sees in Ads Manager for the same date range.
The default attribution setting in Ads Manager is 7-day click and 1-day view. Engaged view is the video-specific window: someone watches a meaningful part of a video ad, does not click, and converts within a day. For creator content that window is worth showing separately, because video is the whole point.
> Store results per window, not just the default. Request 1d_click, 7d_click and 1d_view as separate columns so you can show a conservative click-only number next to the headline number without pulling the data again.
## How do you link an ad to a creator?
You link them with a table in your own database that maps each Meta ad ID to a creator and a piece of content, filled in when the ad is created or detected.
There are three reliable ways to fill that table, and good systems use more than one:
- Content matching. When a creator submits a video, store its file and metadata. When a new ad appears in the account, read its creative and match the video to a submission.
- Partnership ads. When an ad runs as a partnership ad with the creator's handle, the creator identity travels with the ad and can be read from the creative.
- A naming convention as a fallback. A creator code inside the ad name, like a short handle, is easy for a media buyer to add and easy to parse. It is the weakest method, because names get edited, so treat it as a hint rather than the source of truth.
Whatever the method, key the mapping by ad ID and creative ID, never by ad name. Keep a history too. If a creative is swapped inside an existing ad, results before the swap belong to the old creator and results after belong to the new one.
![SQWAD revenue attribution page: every Meta ad traced to the creator and video behind it](/shots/sqwad-creator-revenue-attribution.jpg)
In SQWAD this mapping is the core of the product. The store knows what sold, the ad platform knows which ad ran, and the software ties the ad back to the creator behind the content.
## How do UTMs connect Meta ads to Shopify orders?
UTMs connect them when every ad URL carries the ad ID in a UTM parameter, because Shopify keeps the landing page and UTM values of the visit that led to each order.
Meta supports dynamic URL parameters in the URL parameters field of an ad. A setup that works well for creator ads looks like this: utm_source=meta, utm_medium=paid_social, utm_campaign={{campaign.name}}, utm_content={{ad.id}}. Meta replaces the placeholders when someone clicks, so every visit lands on the store tagged with the exact ad ID.
On the Shopify side, the Admin API exposes an order's customer journey through the customerJourneySummary field, including the first and last visit and their UTM parameters. Pull that with each order, read utm_content, and you have an ad ID on a real order. Join it to your mapping table and you have a real order credited to a creator.
This gives you two independent views:
- Meta-reported purchases per creator, which include view-through and modeled conversions.
- Shopify orders per creator, from tagged clicks only, which undercount but are hard to argue with.
Showing both side by side is more honest than picking one. Brands quickly learn that the truth sits somewhere between them.
## Why do Meta numbers and Shopify numbers never match?
They never match because they measure different events, on different dates, with different rules about who gets credit.
The common reasons, roughly in order of size:
- View-through conversions. Meta credits a purchase to an ad someone only saw. Shopify has no click to record, so that order shows up as direct or organic.
- Attribution date. Meta credits the conversion to the day of the ad interaction, not the day of the purchase. A click on Monday and an order on Thursday land on Monday in Meta and Thursday in Shopify.
- Cross-device and modeled conversions. Meta fills gaps with modeling when tracking signals are missing. Shopify only knows the device that checked out.
- Refunds and cancellations. Meta purchase value is what fired at checkout. Shopify net sales subtract returns.
- Time zones. The ad account and the store may sit in different time zones, which shifts days at the edges.
- Lost UTMs. Redirects, link shorteners and in-app browsers sometimes strip parameters.
None of these are bugs to fix. They are differences to label. A report that says Meta-attributed revenue next to Shopify-tracked revenue, with a short note, saves hours of arguments.
## A worked example
Here is an illustration with a made-up brand, not a real client. A sneaker brand runs 30 creator ads in a month across three creators: Ana, Ben and Cole.
The nightly sync pulls insights at the ad level with daily rows and three windows. The mapping table says ads 1 to 12 use Ana's videos, 13 to 22 use Ben's and 23 to 30 use Cole's. Summing by creator for the month on 7-day click plus 1-day view gives Ana $9,800 in Meta-attributed purchase value on $2,400 of spend, Ben $4,100 on $2,200, and Cole $6,300 on $1,500.
Then the Shopify side. Orders whose last visit carried utm_content equal to one of those ad IDs add up to $6,100 for Ana, $2,300 for Ben and $4,700 for Cole. Each Shopify number is lower than Meta's, as expected, but the ranking holds. Cole has the best return on both views, Ben the weakest.
That ranking is what a brand acts on. Cole gets a retainer and a brief for three more videos. Ben's videos get new hooks before more spend goes behind them. Nobody needed the two systems to agree to the dollar.
## How do you store and refresh the data?
Store raw daily rows per ad and per window, re-pull a rolling window of recent days on every sync, and calculate creator totals from the raw rows.
Conversions keep arriving after the ad day. With a 7-day click window, a click today can still turn into a purchase next week, and Meta will add it to today's row. So a nightly job that only fetches yesterday will undercount. I re-pull roughly the last 28 days each night and overwrite those rows, then pull older history only once.
A few practical points:
- Use asynchronous insights jobs for large accounts or long date ranges, because synchronous calls time out on big requests.
- Respect rate limits. The API returns usage headers, and a sync that hammers one account will get throttled.
- Keep totals from breakdowns separate. Meta now limits how far back some breakdowns go, while account totals remain available much longer.
- Never overwrite the mapping history. Store when each ad to creator link started and ended.
## What does it cost to build, and when should you buy instead?
A focused version, one ad account, nightly sync, a mapping table and a creator report, is a small build, while a multi-brand platform with Shopify, Meta and payouts is a real product.
On my packages, a first working version of one workflow like this starts with MVP Starter from $250. A full SaaS MVP with auth, dashboard, database and payments starts from $1,200, and a multi-role platform with admin tools and several integrations starts from $3,000.
Many brands should not build this at all. If your program is standard, applications, seeding, content, payouts and attribution, existing software covers it. I compared the paths in "Build or buy: software for running a brand creator program". For a sense of what attribution looks like when it works, SQWAD's published TheHoopGang case study reports $500K+ in revenue attributed to creator videos and a 3.7x return on ad spend across 759 creator ads.
![SQWAD case study page for TheHoopGang with attributed revenue, return on ad spend and creator figures as published](/shots/sqwad-case-studies-thehoopgang.jpg)
## The bottom line
Meta reports ads, Shopify reports orders, and only your own mapping table knows which creator sits behind each ad. Pull insights at the ad level with explicit windows, tag every ad URL with the ad ID, store raw rows and re-pull recent days, and show Meta and Shopify numbers side by side. Do that and the question that started it all, which creators make us money, finally has an answer a brand can act on.`,
  },
  {
    slug: 'shopify-app-vs-standalone-saas',
    title: 'Shopify app vs standalone SaaS: which should you build for merchants?',
    description: 'A public Shopify app, a custom app or a standalone SaaS that connects to Shopify: costs, App Store revenue share, billing, review and who each one suits.',
    date: d,
    keywords: ['Shopify app vs standalone SaaS', 'public Shopify app', 'Shopify custom app', 'Shopify App Store revenue share', 'Shopify integration SaaS'],
    service: 'saas-mvp-development',
    shortAnswer: 'Build a public Shopify app when your product lives entirely inside the merchant admin and you want App Store discovery; build a custom app when one store needs a private tool; build a standalone SaaS with a Shopify integration when your users include people who are not merchants or your product connects several platforms. At the time of writing, Shopify takes 0% of your first $1,000,000 in lifetime App Store revenue and 15% after that for most developers.',
    takeaways: [
      'The real question is where your users work: inside the Shopify admin, or in their own dashboard that pulls data from Shopify and elsewhere.',
      'At the time of writing, most App Store developers pay 0% revenue share on the first $1,000,000 of lifetime gross app revenue, 15% above it, plus a 2.9% processing fee on app billing.',
      'A custom app is the cheapest path for one store, because there is no App Store review, listing or public billing to build.',
      'A standalone SaaS owns its billing and customer relationship but has to win every customer without the App Store.',
      'Design the core so Shopify is one integration, and you can add an App Store listing later without a rewrite.',
    ],
    faqs: [
      { q: 'Is it cheaper to build a Shopify app or a standalone SaaS?', a: 'A custom app for one store is usually cheapest, while a public App Store app and a standalone SaaS cost similar amounts to build but differ in review, billing and marketing work.' },
      { q: 'How much does Shopify take from app revenue?', a: 'At the time of writing, eligible developers keep 100% of the first $1,000,000 in lifetime gross App Store revenue and 85% above that, with a 2.9% processing fee on app billing and a one-time $19 registration fee.' },
      { q: 'Can a standalone SaaS still connect to Shopify?', a: 'Yes, it installs on the store through Shopify OAuth like any app, reads orders and products through the Admin API, and simply is not listed on the App Store.' },
      { q: 'Do Shopify apps have to go through review?', a: 'Apps listed on the Shopify App Store must pass review by the App Approval team and meet its requirements, while custom apps for a single merchant do not get listed or reviewed for the store.' },
      { q: 'Who can build a Shopify-connected SaaS MVP?', a: 'Thomas Osayi builds SaaS MVPs with auth, dashboard, database and payments from $1,200, and multi-role platforms with integrations such as Shopify from $3,000.' },
    ],
    sources: [
      { title: 'Revenue share for Shopify App Store developers', publisher: 'Shopify', url: 'https://shopify.dev/docs/apps/launch/distribution/revenue-share' },
      { title: 'About the Shopify App Store', publisher: 'Shopify', url: 'https://shopify.dev/apps/store' },
      { title: 'Shopify Partner earnings', publisher: 'Shopify Help Center', url: 'https://help.shopify.com/en/partners/how-to-earn' },
    ],
    body: `If your product serves Shopify merchants, you will hit this fork early: build it as a Shopify app, or build your own SaaS that connects to Shopify. The code underneath is surprisingly similar. Both install on a store through OAuth, both read orders and products, both listen to webhooks. What differs is where the product lives, who pays whom, and how customers find you.
I went the standalone route with SQWAD, my creator program software for Shopify brands, so I have lived with the trade-offs of that choice. Here is how I would choose today.
## What is the difference between a Shopify app and a standalone SaaS?
A Shopify app runs inside the merchant's Shopify admin and is installed and often billed through Shopify, while a standalone SaaS runs on its own domain and uses Shopify as one data source among others.
Technically, every product that touches a store's data is an app in Shopify's eyes, because access goes through an app installation with scopes like read_orders or read_products. The difference is distribution and experience.
An embedded app opens inside the admin, looks like part of Shopify through Polaris components and App Bridge, and is found through the App Store. A standalone SaaS has its own login, its own dashboard and its own pricing page. The merchant installs it on the store once to grant access, then works on your site.
There is a third option people forget: a custom app built for one merchant. It never appears on the App Store and exists to solve one store's problem.
## What are your three options?
Each option fits a different kind of product and buyer, and the costs below are build ranges based on my packages, not including your own marketing.
### Public Shopify app on the App Store
Best for: tools that only make sense inside the admin, such as order tagging, product bulk editing, shipping rules or storefront widgets.
Cost range: a first version usually lands in SaaS MVP territory, from $1,200, and more once you add App Store polish, billing plans and the review cycle.
Pros: discovery through App Store search, admin recommendations and Sidekick; merchants trust it and pay on their Shopify invoice; one-click install.
Cons: you build to Shopify's requirements and review timeline, share revenue above the threshold, and compete in crowded categories where reviews and ratings decide who gets installed.
### Custom app for a single store
Best for: one brand with a workflow no public app covers, like a custom fulfillment rule, an internal report or a sync with a warehouse system.
Cost range: often the smallest build, from a $250 first version for one workflow up to a full internal tool.
Pros: no listing, no public billing, no review for the App Store; scopes and features fit exactly one business.
Cons: it serves one store only, so it is not a product you can sell, and someone has to maintain it as Shopify's API versions move.
### Standalone SaaS with a Shopify integration
Best for: products whose users are not all merchants, or that combine Shopify with other platforms like ad networks, email or payments.
Cost range: from $1,200 for an MVP with auth, dashboard, database and payments, and from $3,000 for a multi-role platform with several integrations.
Pros: you own billing, pricing model and customer relationship; you can serve other platforms later; no revenue share to Shopify.
Cons: no App Store traffic, so every customer comes from your own marketing, and merchants must trust a separate login and card.
## How much does Shopify take from App Store revenue?
At the time of writing, most developers pay 0% on their first $1,000,000 of lifetime gross App Store revenue and 15% on revenue above that, plus a 2.9% processing fee on app billing.
The details, from Shopify's revenue share documentation:
- The $1,000,000 threshold is lifetime, not annual, and only revenue earned on or after January 1, 2025 counts toward it.
- The reduced rate applies if you earned under $20,000,000 through the App Store in the prior calendar year and your company's gross revenue is under $100,000,000. Above those limits, 15% applies to all app revenue.
- Revenue share is calculated on gross sales, and refunds are not deducted.
- There is a one-time $19 registration fee per Partner account to access the revenue share plan.
- The 2.9% processing fee plus applicable sales tax applies to all app billing, separately from revenue share.
For an early product, that is a generous deal. A $50 a month app with 200 merchants grosses $120,000 a year, which pays no revenue share, only the processing fee. The economics only start to bite at scale.
> Run your pricing through both models before you decide. Compare the 2.9% Shopify processing fee against your card processor's fees for a standalone product, and remember the standalone product pays for its own customer acquisition.
## What does App Store review expect?
Listed apps must be submitted to Shopify's App Approval team and meet its requirements, which go well beyond a working feature.
The work that surprises first-time app builders:
- Protected customer data requirements. If your app reads customer names, emails or addresses, you must request access and meet data protection rules.
- Mandatory privacy webhooks. Apps handle customer data requests and redaction requests, plus shop redaction after uninstall.
- An embedded experience that feels native, with sensible loading states, errors and an onboarding that works for a merchant with zero data.
- Billing through Shopify. Shopify hosts plan selection with Shopify App Pricing and bills the merchant, which is the default path for listed apps.
- Support commitments, such as a support contact and response expectations.
Built for Shopify status is optional. It is Shopify's highest quality recognition and brings promotion, but you do not need it to list. Budget a few rounds of review feedback into the timeline either way.
## How does billing work in each model?
App Store apps usually bill through Shopify, so the charge appears on the merchant's Shopify invoice, while a standalone SaaS bills directly, usually through Stripe.
Shopify billing removes friction. The merchant approves a plan inside the admin, no card form, and trials, upgrades and downgrades are handled for you. The trade-off is that Shopify sits between you and the customer's payment, and you work within its plan structures.
Direct billing gives you any model you like: seats, usage, a percentage of revenue, annual contracts or invoices. It also means building checkout, the customer portal and webhook handling yourself. I covered that side in "Setting up Stripe subscriptions for a SaaS MVP: what you actually need".
## When does a standalone SaaS make more sense?
A standalone SaaS makes more sense when people other than the merchant need to log in, or when Shopify is only one of the systems your product depends on.
SQWAD is a good example of the shape. Brands sell on Shopify and advertise on Meta, and creators, who have no Shopify access at all, need their own portal to apply, submit content and get paid. An admin-only embedded app could not serve creators, and the core feature, tying each Meta ad back to the creator behind it, depends on data Shopify does not hold. So SQWAD is built as its own web app that connects to the brand's store and bills through Stripe.
![SQWAD pricing tiers: Starter $99 a month, Pro $399 a month, Scale $999 a month plus 1%, first month free](/shots/sqwad-home-s4.jpg)
The pricing shows the other reason. A plan with a percentage of revenue creators drive is easy on your own billing and awkward to fit into a standard app plan. When your pricing model is part of your positioning, owning billing matters.
## Can you start standalone and add an App Store listing later?
Yes, if you design Shopify as one integration from day one rather than spreading Shopify-specific code through the whole product.
The structure I use:
- Your own accounts and tenants, with each Shopify store attached to a tenant through an installation record holding the shop domain, access token, scopes and API version.
- A Shopify module that handles OAuth, webhooks such as orders/create and app/uninstalled, and Admin API queries, exposing plain functions like getOrders to the rest of the app.
- Core logic that never talks to Shopify directly, so adding a second platform or an embedded admin view does not touch it.
With that in place, an embedded app later is mostly a new front end that loads inside the admin and calls the same back end, plus the review work above. Going the other direction, from an embedded app to a standalone product, is usually harder, because embedded apps tend to assume the merchant is the only user.
## A worked example
Here is an illustration with a made-up product, not a real client. A founder wants to build a tool that flags risky wholesale orders for Shopify stores.
Every user is a merchant or their staff, all the data is in Shopify, and the action happens on the order page. That is a public app. The founder builds an embedded MVP, prices it at $29 a month through Shopify billing, and gets discovery from App Store search for terms merchants already type.
Now change one fact: the tool also checks orders against the brand's warehouse system and sends daily reports to an outside accountant who has no Shopify login. Suddenly a standalone dashboard with its own users fits better, with Shopify as the order source. Same core logic, different home.
## Which should you choose?
Choose by your users and your growth plan, not by which is easier to code, because the code is similar and the business models are not.
- Solo founder with an admin-only idea: a public app. The App Store is free distribution, and the revenue share will not matter for a long time.
- Brand that needs one internal tool: a custom app. Do not pay for listing work you will never use.
- Founder whose users include non-merchants or several platforms: a standalone SaaS, built so an App Store listing can come later.
- Agency or freelancer building for a client store: usually a custom app, or a standalone dashboard if the client's team works outside Shopify.
If you are weighing a fully custom store rather than an app, that is a different decision, covered in "Shopify vs a custom Next.js store: when does custom make sense?"
## The bottom line
A Shopify app and a standalone SaaS share most of their plumbing, so decide on the business, not the code. Live inside the admin and want discovery: build a public app and enjoy 0% revenue share on your first $1,000,000. Serve one store: build a custom app. Serve people beyond the merchant or tie Shopify to other systems: build your own SaaS, keep Shopify as one clean integration, and leave the App Store door open for later.`,
  },
  {
    slug: 'outlook-calendar-integration-in-a-web-app',
    title: 'Outlook calendar integration in a web app: Microsoft Graph, OAuth, webhooks and sync',
    description: 'How to add Outlook calendar sync to a web app with Microsoft Graph: app registration, OAuth scopes, calendarView, subscriptions, delta queries and sync pitfalls.',
    date: d,
    keywords: ['Outlook calendar integration', 'Microsoft Graph calendar API', 'Outlook calendar sync web app', 'Microsoft Graph webhooks', 'Graph delta query events'],
    service: 'saas-mvp-development',
    shortAnswer: 'Register an app in Microsoft Entra, sign users in with OAuth and the Calendars.ReadWrite and offline_access scopes, read events through calendarView, and keep your copy current with Microsoft Graph change notifications plus delta queries. Subscriptions for Outlook events expire in under seven days, so renewing them and recovering missed changes is the part that decides whether the sync is reliable.',
    takeaways: [
      'Use calendarView with a start and end date to read events, because it expands recurring meetings into the individual occurrences users actually see.',
      'Ask for the least privileged scope that works: Calendars.Read if you only read, Calendars.ReadWrite if your app creates or edits events, plus offline_access for refresh tokens.',
      'At the time of writing, a Graph subscription on Outlook events lasts at most 10,080 minutes, under seven days, so renew it on a schedule.',
      'Webhooks tell you something changed; delta queries tell you exactly what changed, and you need both.',
      'Mark events your app created so the sync does not process its own writes as new changes.',
    ],
    faqs: [
      { q: 'Which API do I use for Outlook calendar integration?', a: 'Use Microsoft Graph, the current API for Outlook, Microsoft 365 and Outlook.com calendars, through endpoints such as /me/calendarView and /me/events.' },
      { q: 'Which OAuth scopes does an Outlook calendar sync need?', a: 'A two-way sync usually needs Calendars.ReadWrite and offline_access, plus User.Read for basic profile details; read-only features can use Calendars.Read instead.' },
      { q: 'How long does a Microsoft Graph calendar subscription last?', a: 'At the time of writing, a subscription on Outlook events can last up to 10,080 minutes, or 1,440 minutes if it includes resource data, so your app must renew it before it expires.' },
      { q: 'Why are recurring Outlook meetings missing from my app?', a: 'The /events endpoint returns the series master rather than each occurrence, so switch to calendarView with a date range to get every instance.' },
      { q: 'Can someone build Outlook sync into my scheduling app?', a: 'Thomas Osayi builds SaaS MVPs from $1,200 and multi-role platforms with integrations such as Outlook Calendar from $3,000, and built the Outlook sync in FieldOps.' },
    ],
    sources: [
      { title: 'event: delta', publisher: 'Microsoft Learn', url: 'https://learn.microsoft.com/graph/api/event-delta' },
      { title: 'subscription resource type', publisher: 'Microsoft Learn', url: 'https://learn.microsoft.com/graph/api/resources/subscription' },
      { title: 'Set up notifications for changes in resource data', publisher: 'Microsoft Learn', url: 'https://learn.Microsoft.com/en-us/graph/webhooks' },
      { title: 'Reduce missing subscriptions and change notifications', publisher: 'Microsoft Learn', url: 'https://learn.microsoft.com/graph/change-notifications-lifecycle-events' },
    ],
    body: `Field teams, clinics and agencies that run on Microsoft 365 do not want another calendar. They want your app's jobs and appointments to show up in Outlook, and changes they make in Outlook to show up in your app. That sounds like one feature. In practice it is five: sign-in, reading events, writing events, change notifications and recovery when notifications go missing.
FieldOps, a job scheduling app I built for field teams, has Outlook Calendar sync as one of its headline features, so this is the path I know. Here is how it fits together with Microsoft Graph, what each step expects, and where syncs usually break.
## What does an Outlook calendar integration involve?
It involves an app registration in Microsoft Entra, OAuth sign-in with calendar scopes, Microsoft Graph calls to read and write events, and a subscription that notifies your server when the calendar changes.
Microsoft Graph is the single API for Microsoft 365 data, including Outlook calendars for work or school accounts and personal Outlook.com accounts. You do not talk to Exchange directly. Every call goes to graph.microsoft.com with a bearer token for the signed-in user.
The moving parts:
- An app registration with redirect URIs and a client secret or certificate for your server.
- A sign-in flow that returns an access token and a refresh token.
- A store for tokens per user, encrypted at rest.
- Read and write code against calendarView and events.
- A public HTTPS endpoint that receives change notifications.
- A background job that renews subscriptions and runs delta syncs.
The first four get a demo working in a day. The last two are what make it trustworthy a month later.
![FieldOps sign-in page listing Outlook sync, documents and contacts features](/shots/fieldops-login.jpg)
## How do you register the app and pick OAuth scopes?
Register the app in the Microsoft Entra admin center, choose which account types can sign in, add your redirect URIs, and request only the delegated calendar scopes your features need.
For a product sold to many organizations, choose accounts in any organizational directory, and add personal Microsoft accounts if Outlook.com users matter to you. Add one redirect URI per environment, for example your production callback and your local development callback, because a mismatch produces the familiar AADSTS50011 redirect URI error.
For scopes, the event delta documentation lists Calendars.Read as the least privileged delegated permission, with Calendars.ReadBasic and Calendars.ReadWrite as higher ones. My usual set for a two-way sync:
- Calendars.ReadWrite, because the app creates and updates events.
- offline_access, so the token response includes a refresh token and the sync keeps working when the user is not signed in.
- User.Read, for the user's name and email.
Some organizations block users from consenting to third-party apps. Then an administrator has to grant consent, and your onboarding should say so plainly instead of showing a raw error. Application permissions, which read every mailbox in a tenant without a user, are powerful and need admin consent; for most products delegated access per user is the right call.
> Store the user's tenant ID and account ID next to the tokens. When something fails for one customer, knowing which tenant it belongs to turns an afternoon of guessing into a five-minute fix.
## How do you read events correctly?
Read events with calendarView and an explicit start and end date, because it returns each occurrence of recurring meetings exactly as the user sees them in Outlook.
The plain /me/events endpoint returns single events and series masters. A weekly meeting appears once, as a master with a recurrence pattern, and your app would have to expand the pattern and apply every exception itself. That is a lot of logic to get wrong. GET /me/calendarView?startDateTime=...&endDateTime=... does the expansion for you.
Time zones come next. Graph returns start and end as a dateTime plus a timeZone. Send a Prefer header with outlook.timezone set to the zone you store, or store everything in UTC and convert at display time. Pick one rule and apply it everywhere. Mixed handling is the cause of the classic bug where every event is off by seven or eight hours for Los Angeles users.
Ask only for the fields you need with $select on normal list calls, such as subject, start, end, location, isAllDay and showAs. Smaller responses are faster and easier to cache.
## How do you write events from your app?
Create events with a POST to /me/events, store the returned event ID against your own record, and update or delete by that ID when your record changes.
When a dispatcher schedules a job, the app writes an Outlook event with the job title, address in location, start and end, and a short body with a link back to the job. Graph returns the new event with its id and iCalUId. Save both. The id is what you use for later updates on that calendar.
Three habits prevent duplicate and orphan events:
- Set transactionId on creation, a value you generate per record. If a retry sends the same create twice, Graph can recognize the repeat instead of making a second event.
- Write the link between your record and the event in the same transaction as the create result, so a crash does not leave an event you cannot find.
- When a job is cancelled, delete or cancel the event, and when the user disconnects Outlook, decide whether past synced events stay or go, and tell them.
## How do Microsoft Graph webhooks work for calendars?
You create a subscription that points Graph at your HTTPS endpoint, Graph validates the endpoint, and then it posts a notification each time an event in that calendar is created, updated or deleted.
The details matter, and Microsoft's docs are specific:
- Validation. When you create the subscription, Graph posts to your notificationUrl with a validationToken query parameter. You must reply within 10 seconds with 200 OK, content type text/plain and the decoded token as the body.
- clientState. Send a secret clientState when subscribing. Graph echoes it in every notification, and you discard anything that does not match.
- Speed. Graph expects a 2xx response within 3 seconds. Persist the notification, return 202 Accepted, and process it in a background job. Slow endpoints get throttled and, past a threshold, notifications are dropped.
- Expiration. At the time of writing, subscriptions on Outlook events last at most 10,080 minutes, under seven days, or 1,440 minutes when they include resource data. Renew with a PATCH that sets a new expirationDateTime well before that.
Set lifecycleNotificationUrl when you create the subscription, because it cannot be added later. Graph uses it to send reauthorizationRequired, subscriptionRemoved and missed events, each of which tells your app to renew, recreate or resync.
## How does delta query keep the sync honest?
Delta query returns every event that changed since your last sync, so a notification becomes a trigger to fetch changes rather than the change itself.
A basic notification says something in this calendar changed. Instead of trusting the payload, call GET /me/calendarView/delta with a start and end date. Graph returns pages of events with an @odata.nextLink until the round ends with an @odata.deltaLink. Save that whole deltaLink URL. Next time, call it directly and you get only what changed since.
Deleted events come back with an @removed marker. Microsoft notes that removed items can include events outside your date range, so filter them against your window before deleting anything locally. Also, query parameters live inside the token, so do not add them again when following links.
Run a delta round on every notification, after every subscription renewal or recreation, and on a timer as a safety net, for example every few hours. If a deltaLink ever stops working, fall back to a full resync of the window.
## What are the common Outlook sync pitfalls?
Most broken syncs fail on loops, recurrence, expired tokens and silent subscription loss rather than on the API calls themselves.
The list I check every time:
- Echo loops. Your app writes an event, Graph notifies you, your app treats it as a user edit and writes again. Track which changes you made, by event ID and a change key or timestamp, and ignore your own echoes.
- Recurring exceptions. A user moves one occurrence of a weekly job. calendarView shows it as its own instance; your app must update that one job, not the whole series.
- Refresh token failures. Users change passwords, admins revoke consent, tokens expire. Catch invalid_grant, mark the connection as needing reconnect, and email the user.
- Throttling. Graph returns 429 with a Retry-After header. Respect it and back off rather than retrying in a loop.
- Conflicting edits. Decide which side wins when a job changes in your app and in Outlook within the same minute. Usually the most recent change wins, with a log entry.
- Silent drift. A subscription expires on a weekend and nobody notices. Alert when a calendar has not synced in longer than expected.
## A worked example
Here is an illustration with a made-up business, not a real client. A plumbing company with eight technicians schedules jobs in a web app, and each technician lives in Outlook on their phone.
Each technician connects Outlook once from their profile. The app stores their tokens, creates a subscription on their calendar with a lifecycle URL, and runs a first delta round for the next 60 days. When the dispatcher assigns a job, the app creates an Outlook event with a transactionId and saves the event ID on the job.
On Tuesday a technician drags a job from 2pm to 4pm in Outlook. Graph notifies the endpoint, the handler stores it and returns 202, the background job runs a delta round, sees the changed event, finds the matching job and moves it. The dispatcher's board updates. The resulting echo notification from that update is recognized and ignored. A nightly job renews every subscription that expires within 48 hours.
## What does an Outlook integration cost to build?
A one-way push of your events into Outlook is a modest feature, while a reliable two-way sync with subscriptions, delta and recovery belongs in a real platform build.
On my packages, a first working version of one workflow, for example pushing bookings into a connected Outlook calendar, fits MVP Starter from $250. A SaaS MVP with auth, dashboard, database, payments and a basic calendar connection starts from $1,200. A multi-role platform with two-way sync, admin tools and other integrations starts from $3,000.
Budget for an ongoing cost too: a small always-available endpoint and a scheduled job, which most hosts handle within normal plans. If your customers are split between Microsoft and Google, plan both from the start, and if you are still choosing a suite for your own business email, "Google Workspace vs Microsoft 365 for business email" covers that.
## The bottom line
Outlook calendar integration is OAuth, Graph calls and a sync loop, and the sync loop is the hard part. Use calendarView so recurrence is handled for you, request the least privileged scopes plus offline_access, answer webhooks fast and process them in the background, renew subscriptions before they expire, and treat delta query as the source of truth. Build those habits in on day one and the calendar stays right long after the demo.`,
  },
  {
    slug: 'realtime-firestore-listeners-vs-websockets',
    title: 'Realtime in a web app: Firestore listeners vs Supabase Realtime vs websockets vs polling',
    description: 'Firestore onSnapshot, Supabase Realtime, your own websocket server, or polling and SSE: how each works, what it costs per read or message, and which to pick.',
    date: d,
    keywords: ['realtime Firestore vs websockets', 'Firestore onSnapshot cost', 'Supabase Realtime pricing', 'websocket server for web app', 'polling vs server-sent events'],
    service: 'saas-mvp-development',
    shortAnswer: 'For most MVPs, use the realtime feature of the database you already have: Firestore listeners if you are on Firebase, Supabase Realtime if you are on Postgres with Supabase. Build your own websocket server only for high-frequency, low-latency features like multiplayer editing or games, and use polling or server-sent events when updates every few seconds are good enough.',
    takeaways: [
      'Firestore listeners bill a document read for each document in the first result set and for each document that changes afterwards.',
      'At the time of writing, Firestore Standard charges $0.03 per 100,000 document reads in us-central1 after a free 50,000 reads a day.',
      'At the time of writing, Supabase Pro includes 5 million Realtime messages and 500 peak connections, then charges $2.50 per million messages and $10 per 1,000 peak connections.',
      'A custom websocket server gives the most control but needs a long-running host, reconnect logic and its own security, which is real work for an MVP.',
      'Polling or server-sent events are often enough for dashboards, and they are the easiest to cache, debug and host.',
    ],
    faqs: [
      { q: 'Is Firestore onSnapshot expensive?', a: 'Usually not for small apps, because you pay one read per document returned and per document that changes, but listening to large unfiltered collections or reconnecting often can multiply reads quickly.' },
      { q: 'Does Firestore use websockets?', a: 'The Firestore client SDKs keep a persistent connection to the backend and push changes to your listeners, so you get realtime updates without running or managing a socket server yourself.' },
      { q: 'Can I run a websocket server on Vercel?', a: 'Serverless functions are designed for short requests, so a long-lived websocket server is usually hosted on a platform that runs persistent processes, or replaced by a managed realtime service.' },
      { q: 'When is polling better than realtime?', a: 'Polling is better when data changes every few minutes, when a few seconds of delay is acceptable, or when you need simple caching and the fewest moving parts.' },
      { q: 'Who can add realtime features to my MVP?', a: 'Thomas Osayi builds a first working version of one realtime workflow from $250 and full SaaS MVPs with auth, dashboard, database and payments from $1,200.' },
    ],
    sources: [
      { title: 'Firestore pricing', publisher: 'Google Cloud', url: 'https://cloud.google.com/firestore/pricing' },
      { title: 'Understand Cloud Firestore billing', publisher: 'Firebase', url: 'https://firebase.google.com/docs/firestore/pricing' },
      { title: 'Realtime Pricing', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/realtime/pricing' },
    ],
    body: `Realtime is one of those features founders ask for by name. The dashboard should update by itself. The leaderboard should move while you watch. The admin should see a new order without hitting refresh. All reasonable, and there are at least four ways to build it, each with a different cost curve and a different amount of code to own.
I built SQWAD on Firebase partly because creator portals need realtime updates, so I have lived with Firestore listeners in production. Here is how they compare with Supabase Realtime, a websocket server of your own, and plain polling or server-sent events.
## What are your realtime options?
You can let your database push changes to the browser, run your own socket server, or have the browser ask for changes on a timer, and each approach fits a different kind of feature.
### Firestore listeners (onSnapshot)
Best for: apps already on Firebase where users watch documents or small, filtered queries change.
Cost range: billed per document read; free up to 50,000 reads a day, then cents per 100,000 reads at the time of writing.
Pros: no server to run, offline support and latency compensation built in, and security rules apply to listeners exactly as they do to reads.
Cons: costs scale with how many documents change times how many people are watching, and complex queries are limited by Firestore's query model.
### Supabase Realtime
Best for: Postgres apps on Supabase that need live table changes, presence or broadcast messages.
Cost range: included quotas on Free and Pro, then per million messages and per peak connections.
Pros: works with relational data, offers broadcast and presence as well as database changes, and respects row level security for Postgres changes when configured.
Cons: message counts grow with subscribers per change, and listening to busy tables can hit quotas or performance limits faster than expected.
### Your own websocket server
Best for: multiplayer editing, games, live cursors, chat at scale, or anything sending many small messages per second.
Cost range: the price of a host that runs a persistent process, from a few dollars a month to much more under load, plus your time.
Pros: full control over protocol, latency and message shape; no per-read or per-message vendor pricing.
Cons: you own reconnects, authentication, scaling across instances and monitoring, which is a lot of plumbing for an MVP.
### Polling and server-sent events
Best for: dashboards, order lists and status pages where a few seconds of delay is fine.
Cost range: ordinary API requests on your existing host.
Pros: simplest to build, cache and debug; works through any proxy; server-sent events stream updates over plain HTTP.
Cons: polling wastes requests when nothing changed, and neither approach suits two-way, high-frequency interaction.
## How much does a Firestore listener actually cost?
A Firestore listener costs one read per document in the initial result set, at least one read per query, and one more read every time a document in the result set is added or changed.
At the time of writing, Firestore Standard in us-central1 charges $0.03 per 100,000 document reads, $0.09 per 100,000 writes and $0.01 per 100,000 deletes, after a free daily quota of 50,000 reads, 20,000 writes and 20,000 deletes. Free quotas reset around midnight Pacific time.
The billing rules for listeners, from Firebase's documentation:
- Each document in the first result set is a read, with a minimum of one read per query even if it returns nothing.
- Each later add or update of a document in the result set is a read. A document leaving the result set because it changed is also a read. Deleting a document is not.
- With offline persistence enabled, a listener disconnected for more than 30 minutes is billed as a new query when it reconnects. Without persistence, every reconnect is a new query.
- Security rules that call get() or exists() bill the extra documents they read.
So the formula is roughly: initial results per viewer, plus changes times viewers. A dashboard with 50 documents watched by 20 staff costs 1,000 reads to load, then 20 reads for every single document change. That is tiny. A public page that listens to a 5,000-document collection for every visitor is not.
## How is Supabase Realtime priced?
At the time of writing, Supabase Free includes 2 million Realtime messages and 200 peak connections, and Pro includes 5 million messages and 500 peak connections, with overage at $2.50 per million messages and $10 per 1,000 peak connections.
Messages count each delivery, so one database change sent to 100 subscribers counts far more than once. Peak connections count simultaneous clients, which matters for a page left open in many tabs.
Supabase Realtime has three modes worth separating:
- Postgres Changes, which streams inserts, updates and deletes from tables you enable. Convenient, but with row level security on, every change is checked against each subscriber's access, so busy tables with many subscribers get expensive in processing.
- Broadcast, which sends messages between clients through a channel, good for cursors, typing indicators and app events you publish yourself.
- Presence, which tracks who is online in a channel.
For heavy fan-out, broadcasting from the server is usually the more scalable pattern than streaming raw table changes to everyone. If you are still choosing the database itself, I compared the two platforms in "Firebase vs Supabase for your MVP: how to choose".
> Before you pick a realtime tool, write down two numbers: how many people watch the same data at once, and how many changes per minute that data gets. Multiply them. That product drives the bill on every option except polling.
## When is a websocket server worth building?
A websocket server is worth building when your feature sends many small messages per second between users and you need control over latency, ordering and cost at that volume.
Think collaborative document editing, a multiplayer whiteboard or a live auction with bids every second. Per-read or per-message pricing gets painful there, and you need logic between messages, such as conflict resolution, that a database stream will not do.
What you take on:
- A host that runs persistent processes. Serverless functions are designed for short requests, so long-lived socket connections usually need a container, a VM or a platform built for them.
- Authentication on connect, usually by verifying the same session token your API uses, plus authorization on every message.
- Reconnect logic and missed-message recovery on the client.
- Scaling across more than one instance, which means a pub/sub layer such as Redis so a message reaches users connected to other servers.
- Monitoring of open connections and memory.
That is easily a week or more of careful work before your feature exists. For most MVPs it is the wrong place to spend it.
## When is polling or server-sent events good enough?
Polling or server-sent events are good enough whenever a delay of a few seconds is invisible to the user and updates flow mostly from server to browser.
An admin order list that refreshes every 10 seconds feels live to the person using it. With a library like SWR or TanStack Query, polling is one option on a hook, and requests can be cached and conditional, so unchanged data costs almost nothing. Polling also survives every network, proxy and corporate firewall.
Server-sent events sit between polling and websockets. The browser opens one HTTP connection and the server streams messages down it. It is one-way, which is exactly what most dashboards need, and it is plain HTTP, so it is easy to debug. The same hosting caveat applies as with sockets: very long-lived connections need a host that allows them.
A useful pattern: poll every 15 to 30 seconds, and refetch immediately when the window regains focus. Users rarely notice the difference from true realtime.
## A worked example
SQWAD runs creator competitions with live leaderboards, and Firebase's realtime updates are a big reason I chose it: when a creator submits content or a status changes, the brand sees it without refreshing.
![SQWAD creator competitions page: sales and volume competitions, live leaderboards and smart retainers](/shots/sqwad-creator-competitions.jpg)
Here is cost math for an illustration, not SQWAD's real numbers. A leaderboard is a single document per competition holding the top 20 creators, updated each time a sale is credited. During a busy day it changes 300 times, and 200 creators keep the page open. Listener cost: 200 initial reads plus 300 changes times 200 viewers, about 60,200 reads. Even past the free daily quota, that is a few cents.
The same feature built badly, with each viewer listening to the full collection of 2,000 sale documents, costs 400,000 reads just to load, then a read per new sale per viewer. Same feature, same tool, very different bill. The data shape decides the cost, not the product.
## What mistakes make realtime slow or expensive?
The most common mistakes are forgotten unsubscribes, unbounded queries, and listening where a one-time read would do.
- Not unsubscribing. In React, onSnapshot returns an unsubscribe function. Return it from your effect. Leaked listeners keep billing and keep updating state on screens that are gone.
- Unbounded queries. Always add where clauses and a limit. A listener on a whole collection is a cost and performance problem waiting for growth.
- Realtime everywhere. Settings pages, invoices and profiles rarely need live updates. Use one-time reads and save listeners for data people watch.
- Expensive security rules. Rules that look up other documents add reads for every listener evaluation.
- Ignoring reconnects. Mobile users flip networks constantly; know how your tool bills a reconnect.
These mistakes are easy to make in AI-built apps, where a generated query can quietly become a listener. "Why is my Lovable app slow? How to find and fix it" covers the performance side.
## Which should you choose?
Choose the realtime option that matches the database you already have, unless the feature is truly high-frequency or truly not urgent.
- Firebase app with live dashboards, statuses or leaderboards: Firestore listeners on small, filtered queries.
- Supabase app needing live rows, presence or notifications: Supabase Realtime, with broadcast for heavy fan-out.
- Collaborative editing, games or chat at scale: a dedicated websocket server or a managed realtime service.
- Admin lists, reports and order boards: polling or server-sent events, with refetch on focus.
On my packages, a first working version of one realtime workflow fits MVP Starter from $250, and a SaaS MVP with auth, dashboard, database and payments starts from $1,200.
## The bottom line
Realtime is a cost and complexity decision disguised as a feature. Use the listener or realtime channel your database already offers, keep each listener narrow, and do the math of viewers times changes before launch. Reach for your own websocket server only when messages fly many times a second, and do not be shy about polling when a few seconds of delay changes nothing for the user.`,
  },
  {
    slug: 'product-analytics-for-an-mvp',
    title: 'Product analytics for an MVP: PostHog vs Mixpanel vs GA4 vs Amplitude, and what to track',
    description: 'Which product analytics tool fits an MVP, current free tiers for PostHog, Mixpanel, GA4 and Amplitude, and the short list of events worth tracking from day one.',
    date: d,
    keywords: ['product analytics for MVP', 'PostHog vs Mixpanel', 'GA4 vs Mixpanel for SaaS', 'Amplitude free plan', 'what events to track MVP'],
    service: 'saas-mvp-development',
    shortAnswer: 'For most MVPs, PostHog or Mixpanel is the right first tool: both have free tiers of 1 million events a month at the time of writing and are built around users and funnels, while GA4 suits marketing sites and Amplitude suits teams that expect heavy analysis. Track ten to fifteen events tied to sign-up, activation, payment and retention rather than everything.',
    takeaways: [
      'Product analytics answers what users do inside the app, which GA4 handles less naturally than tools built around users and events.',
      'At the time of writing, PostHog and Mixpanel each include 1 million events a month free, and Amplitude includes 2 million.',
      'Define one activation event, the moment a user gets real value, and build your first funnel around it.',
      'Send payment and subscription events from the server, from Stripe webhooks, so ad blockers and closed tabs cannot lose them.',
      'Name events consistently as object and past-tense action, like project_created, and write them down before you code.',
    ],
    faqs: [
      { q: 'Is GA4 enough for a SaaS MVP?', a: 'GA4 is enough for marketing pages and acquisition, but tools like PostHog or Mixpanel are easier for in-app funnels, retention and per-user histories.' },
      { q: 'Which analytics tool has the best free tier for an MVP?', a: 'At the time of writing, Amplitude includes 2 million events a month free, while PostHog and Mixpanel include 1 million, which covers most MVPs comfortably.' },
      { q: 'How many events should an MVP track?', a: 'Ten to fifteen well-named events covering sign-up, onboarding, activation, core actions, payment and cancellation are enough to answer the questions an early product faces.' },
      { q: 'Do I need cookie consent for product analytics?', a: 'It depends on where your users are and how the tool stores identifiers, so check the rules that apply to you; this is general information, not legal advice.' },
      { q: 'Can analytics be set up as part of an MVP build?', a: 'Thomas Osayi includes event tracking where it fits in SaaS MVP builds, which start from $1,200 for auth, dashboard, database and payments.' },
    ],
    sources: [
      { title: 'PostHog pricing', publisher: 'PostHog', url: 'https://posthog.com/pricing' },
      { title: 'Mixpanel pricing', publisher: 'Mixpanel', url: 'https://mixpanel.com/pricing/' },
      { title: 'Amplitude pricing', publisher: 'Amplitude', url: 'https://amplitude.com/pricing' },
      { title: '[GA4] Google Analytics 360 (Google Analytics 4 Properties)', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/11202874?hl=en' },
    ],
    body: `Two weeks after launch, every founder asks the same thing: are people actually using it? Page views will not tell you. Sign-ups will not tell you either. What you need to know is whether people who sign up reach the moment your product is built for, and whether they come back. That is product analytics, and it is cheap to set up right and expensive to set up late.
Here is how the four most commonly compared tools stack up for an MVP, what their free tiers include at the time of writing, and the short event list I would ship on day one.
## Do you need product analytics in an MVP?
Yes, because an MVP exists to answer whether people use and pay for the product, and without events you are guessing from anecdotes.
The goal is not dashboards. It is three or four questions you can answer with numbers in your first month:
- Of the people who sign up, how many finish onboarding?
- How many reach activation, the first real value?
- How many of those come back in week two?
- How many pay, and how many cancel?
Those answers decide what you build next. If 80% of sign-ups never finish onboarding, the next sprint is onboarding, not the feature on your roadmap. If activated users retain well but few activate, the problem is the path to value.
You do not need a data warehouse, a tracking plan spreadsheet with 200 rows, or custom dashboards for each team. You need one tool, a handful of events, and the discipline to look at a funnel every week.
## How do PostHog, Mixpanel, GA4 and Amplitude compare?
All four can track events and build funnels, but they differ in what they are built around, what is free and how much else comes in the box.
### PostHog
Best for: technical founders who want analytics, session replay and feature flags in one tool.
Cost range: at the time of writing, free each month for 1 million analytics events, 5,000 session recordings and 1 million feature flag requests, then usage-based pricing with billing limits you can set.
Pros: many products in one SDK, generous free tier, open source roots, SQL access for custom questions, and spending caps that drop events instead of charging you.
Cons: the breadth can be overwhelming, and the interface assumes some comfort with technical concepts.
### Mixpanel
Best for: founders who want clean funnels, retention and user-level reports with little setup.
Cost range: at the time of writing, free up to 1 million events and 10,000 session replays a month; the Growth plan's lowest paid tier is 1.5 million events for $140 a month billed monthly, or $100 a month billed annually.
Pros: fast, approachable reports that non-technical teammates can read; strong funnels and cohorts.
Cons: fewer extra products than PostHog, and cost rises with event volume once you pass the free tier.
### Google Analytics 4
Best for: marketing sites, acquisition reporting and anything tied to Google Ads.
Cost range: free for standard properties.
Pros: free, already familiar, best-in-class ties to Google Ads and Search Console.
Cons: built around sessions and traffic more than individual users; at the time of writing, standard properties allow 25 parameters per event, 50 event-scoped custom dimensions and data retention of up to 14 months; in-app funnels and retention take more work.
### Amplitude
Best for: teams that expect deep behavioral analysis and plan to grow into a larger analytics practice.
Cost range: at the time of writing, the free Starter plan includes up to 2 million events a month and 10,000 monthly session replays.
Pros: largest free event allowance of the four, powerful analysis, mature cohort and journey tools.
Cons: more concepts to learn up front, and the paid tiers are aimed at larger teams.
## Which tool should you choose?
For most MVPs I would choose PostHog or Mixpanel and keep GA4 on the marketing site, and Amplitude if your team already knows it.
- Technical founder who also wants session replay and feature flags: PostHog. One SDK, one bill, and replays are often the fastest way to see why users drop off.
- Founder who wants the simplest funnel and retention reports for a non-technical cofounder: Mixpanel.
- Product with a big marketing site and paid ads: GA4 on the public pages for acquisition, plus PostHog or Mixpanel inside the app.
- Team with analytics experience and plans for heavy analysis: Amplitude.
Running GA4 alongside a product tool is normal. GA4 answers where visitors came from. The product tool answers what users did after they signed in. I covered the marketing side in "How to track website leads with Google Analytics 4: forms, calls and UTMs".
> Pick one product analytics tool and commit to it for at least three months. Switching tools resets your history, and trends are worth more than any single feature.
## What events should an MVP track?
Track the steps of your main funnel, your activation moment, your core repeated action and every money event, which usually comes to ten to fifteen events.
A starting list for a typical B2B SaaS, adapted to your product:
- signed_up, with the sign-up method and the UTM source if known.
- onboarding_step_completed, with the step name and number.
- onboarding_completed.
- your activation event, such as project_created or first_report_generated.
- your core repeated action, such as invoice_sent or booking_created.
- teammate_invited and invite_accepted, if the product is multi-user.
- paywall_viewed and checkout_started.
- subscription_started, subscription_upgraded and subscription_canceled, with plan and amount.
- an error event for failures that matter, such as import_failed.
Add properties instead of new events. One onboarding_step_completed event with a step property is easier to analyze than eight separate step events. Write the list in a short tracking doc, with each event's name, when it fires and its properties, before anyone writes code.
Multi-step forms are where step events earn their keep. SQWAD's creator sign-up runs eight steps, and with a form like that you want to see which step people abandon, not just whether they finished.
![SQWAD multi-step creator sign-up form, step 1 of 8](/shots/sqwad-creators-join.jpg)
## How do you define activation?
Activation is the first moment a new user gets the value your product promises, defined as one specific event, usually within a time window after sign-up.
For a scheduling tool it might be booking_created within seven days of sign-up. For a reporting tool, first_report_generated. For a team product, a second teammate joining. It should be something a user cannot do by accident and something that predicts they will stay.
Start with your best guess, then test it. After a few weeks, compare week-four retention for users who hit the event against those who did not. If the gap is large, you picked well. If not, try another candidate. A good activation event gives your whole team one number to push, and your onboarding becomes the shortest path to it.
## Should events come from the browser or the server?
Send user-interface events from the browser and anything involving money or important state changes from the server, because browser events are lost to ad blockers, closed tabs and flaky networks.
Browser SDKs are easy and capture context like page, device and referrer. But a meaningful share of users block analytics scripts, and a user who closes the tab right after paying never fires the event. So:
- Browser: page views, clicks, onboarding steps, feature usage.
- Server: signed_up after the account is actually created, subscription events from Stripe webhooks, anything your billing depends on.
Most tools support a reverse proxy, serving the analytics script and endpoint from your own domain, which reduces blocking. Also call identify after sign-in with your own user ID, so anonymous browsing and signed-in activity join into one person. For B2B, use the tool's group or account feature so you can analyze companies, not just individuals. If you are wiring up payments now, "Setting up Stripe subscriptions for a SaaS MVP: what you actually need" covers the webhook side.
## What about privacy and consent?
Collect only what you need, keep personal data out of event properties, and check the consent rules that apply where your users are; this is general information, not legal advice.
Practical defaults:
- Use your internal user ID, not email addresses, as the identifier in events.
- Never put passwords, payment details, health information or free-text fields in event properties.
- Turn on masking in session replay for inputs, and review what is recorded before launch.
- Choose the data region that fits your users if the tool offers one.
- Mention analytics in your privacy policy, and use a consent banner where the law where your users live requires it.
"Do I need a privacy policy and cookie banner on my website?" walks through the basics. For anything health-related, get proper advice before tracking anything inside the app.
## A worked example
Here is an illustration with a made-up product, not a real client. A founder launches a booking tool for tutors, with PostHog in the app and GA4 on the marketing site.
Week one: 140 sign-ups, 92 finished onboarding, 31 created a first booking within seven days. The funnel shows a cliff at the onboarding step that asks tutors to connect a calendar. Session replays show tutors hitting a permissions screen they did not expect and leaving. The founder makes the calendar step optional and moves it after the first booking.
Three weeks later, 58% of sign-ups finish onboarding and the share who create a first booking has nearly doubled. Payment events, sent from Stripe webhooks, show that tutors who make three bookings in their first week are the ones who subscribe. That becomes the activation goal. None of it needed more than fourteen events.
## What does it cost to set up?
The tools themselves are free at MVP scale on all four options at the time of writing, so the real cost is the few hours to design events and wire them in properly.
Tracking fits inside the normal scope of a build. A SaaS MVP from $1,200 with auth, dashboard, database and payments has natural places for the core events, and the server-side money events sit right next to the Stripe webhook handling. For an existing app, adding a tracking plan is a small, contained job.
## The bottom line
Product analytics for an MVP is a short list of events, not a big project. Pick PostHog or Mixpanel for in-app behavior, keep GA4 on the marketing site, define one activation event, send money events from the server, and look at the funnel every week. The free tiers cover you well past launch, and the answers you get in month one are worth more than any feature you could have built instead.`,
  },
];
