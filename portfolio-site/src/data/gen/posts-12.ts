// Generated articles, batch 12 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen12: Post[] = [
  {
    slug: 'build-a-creator-affiliate-tracking-system',
    title: 'How to build a creator affiliate tracking system: codes, links and ad attribution',
    description: 'How to track which creator drove each sale: discount codes, share links and ad-level attribution compared, the data model, payouts and real SQWAD figures.',
    date: d,
    keywords: ['creator affiliate tracking system', 'creator revenue attribution', 'affiliate discount code tracking', 'UGC creator commission tracking', 'Meta ad creator attribution'],
    service: 'saas-mvp-development',
    shortAnswer: 'A creator affiliate tracking system ties every order back to the creator who caused it, using discount codes, personal share links, ad-level attribution or a mix of all three. Codes and links capture organic sales, while ad-level attribution is the only way to credit a creator when the brand runs their video as a paid ad.',
    takeaways: [
      'Discount codes are the easiest method to launch but they leak onto coupon sites and miss buyers who forget the code.',
      'Share links capture full-price sales from a creator\'s audience but lose credit when buyers switch devices or come back days later.',
      'When a brand turns creator videos into Meta ads, only ad-level attribution can credit the creator, because the buyer never sees a code or a link.',
      'Store every attributed order with its source, the creator, the commission rate at that moment and a hold date, so refunds and disputes are easy to reverse.',
      'Most brands should buy creator software first and build a custom tracker only when their rules or integrations do not fit standard tools.',
    ],
    faqs: [
      { q: 'What is the most accurate way to track creator sales?', a: 'No single method is complete, so the most accurate setups combine share links or codes for organic sales with ad-level attribution for creator videos that run as paid ads.' },
      { q: 'Are discount codes enough to track affiliates?', a: 'They work for a small program, but codes get shared on coupon sites and buyers often forget them, so they both over-credit and under-credit creators.' },
      { q: 'How do you attribute a Meta ad to a creator?', a: 'Give each approved creator video a short ID, put that ID in the ad name when the ad launches, then read ad results from Meta and match each ad back to its creator and video.' },
      { q: 'When should commission be paid out?', a: 'Pay commission after the store\'s refund window closes, because paying on the order date means clawing money back whenever an order is refunded.' },
      { q: 'Do creators need to disclose affiliate links?', a: 'Yes, the FTC expects a clear and conspicuous disclosure of the paid relationship near the recommendation, and this is general information, not legal advice.' },
      { q: 'How much does it cost to build a custom creator tracking system?', a: 'Thomas Osayi builds a working first version of one tracking workflow from $250 and a full multi-role creator platform with admin tools and integrations from $3,000.' },
    ],
    sources: [
      { title: 'Creator revenue attribution', publisher: 'SQWAD', url: 'https://joinsqwad.com/creator-revenue-attribution' },
      { title: 'TheHoopGang case study', publisher: 'SQWAD', url: 'https://joinsqwad.com/case-studies/thehoopgang' },
      { title: 'Discounts', publisher: 'Shopify Help Center', url: 'https://help.shopify.com/en/manual/discounts' },
      { title: 'FTC\'s Endorsement Guides: What People Are Asking', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking' },
    ],
    body: `A brand sends free product to forty creators, half of them post, a few videos go viral and sales jump. Then someone asks the obvious question at the end of the month: which creators actually made money for us? If the honest answer is a spreadsheet, a pile of DMs and a guess, the program is running blind.
I built SQWAD, UGC creator program software for Shopify brands, around exactly that question. Before that I built the creator portal for TheHoopGang. This guide covers how creator tracking actually works, the three main methods and where each one breaks, the data you need to store, and how to decide whether to build or buy.
## What is a creator affiliate tracking system?
It is the part of a creator program that connects each order to the creator whose content caused it, then turns that connection into commission.
Every tracking system has the same four jobs, whatever tools sit underneath:
- Give each creator something identifiable: a code, a link, a video ID or all three.
- Capture that identifier when an order happens, or match it afterwards from ad data.
- Record the order against the creator with the commission rate that applied at that moment.
- Hold, adjust and pay the commission, including reversals for refunds.
The hard part is the second job. A buyer who sees a creator's video can buy in at least three ways: by typing a code at checkout, by tapping the creator's link, or by tapping an ad the brand built from the creator's video. Each path leaves a different trail, and a system that only watches one of them will undercount the others. That is why the method you choose matters more than the software you choose.
## How do discount codes, share links and ad-level attribution compare?
Codes are easiest to launch, links are best for organic audiences, and ad-level attribution is the only option that credits creators for paid ads.
### Discount codes
Best for: small programs and creators whose audience buys on a podcast mention or a story.
Cost range: close to free. Shopify lets you create codes with a fixed amount off, a percentage off, buy X get Y or free shipping, and a script or app can read which code each order used.
Pros: works offline and across devices, buyers like a deal, and the order itself carries the code.
Cons: codes leak onto coupon sites, so creators get credit for sales they did not cause. Buyers forget codes, so creators lose credit for sales they did cause. And every sale is discounted, which eats margin.
### Share links
Best for: creators with an engaged audience who click through from a bio or a story.
Cost range: low if your store or creator tool generates links, higher if you build your own redirect and cookie handling.
Pros: buyers pay full price, and SQWAD's creator share links credit store sales to creators wherever their audience finds them.
Cons: credit is lost when a buyer switches from phone to laptop, clears cookies or returns a week later through search.
### Ad-level attribution
Best for: brands that turn creator videos into paid ads, which is most UGC programs that scale.
Cost range: the most expensive to build yourself, because it means a connection to the ad platform and matching logic.
Pros: credits creators for the sales their videos make as ads, which codes and links never see.
Cons: depends on the ad platform's reported results and on disciplined ad naming.
## Why does ad-level attribution matter so much for UGC programs?
Because once a creator's video runs as an ad, the buyer never sees a code or a creator link, so the creator's best work becomes invisible to code and link tracking.
In a UGC program the brand usually licenses the video and runs it from its own ad account. The creator made the asset that sold, but the order arrives through the brand's ad with no creator identifier attached. A program that pays only on codes and links quietly underpays its best creators, and the brand loses the data it needs to decide who to keep.
SQWAD solves this at the ad level. Each approved video gets a short ID, and the brand adds that ID to the ad name when it launches the ad. SQWAD reads results from Meta and matches each ad back to its creator and video, then shows spend, revenue, orders and return on ad spend per creator and per video. Setup is signing in with Facebook and choosing an ad account, with no API keys to paste.
![SQWAD's revenue attribution page: every Meta ad traced back to the creator and the video that made the sale.](/shots/sqwad-creator-revenue-attribution.jpg)
The naming convention is the unglamorous part that makes it work. If the media buyer forgets the ID, that ad is unattributed. Build a check that lists active ads without a recognised ID, and show it to whoever launches ads every week. At the time of writing SQWAD's attribution covers Meta (Facebook and Instagram) ads, not TikTok ads, which is worth knowing if your spend is split.
## What data model does a creator tracking system need?
You need creators, trackable assets, attributed orders and commission entries as separate records, so every number on a dashboard can be traced back to an order.
A model I would start with:
- creators: id, brand id, status, commission rate, payout details reference.
- assets: id, creator id, type (code, link or video), the code string, the link slug or the short video ID.
- attributed orders: order id, asset id, creator id, source (code, link or ad), order total, currency, attributed at.
- commission entries: id, attributed order id, amount, rate used, status (pending, approved, reversed, paid), hold until date.
- payouts: id, creator id, total, period, paid at, reference to the payment provider.
Two rules save pain later. First, copy the commission rate onto each entry instead of reading it from the creator record, so raising a creator's rate does not rewrite last month's money. Second, decide what happens when one order matches two sources, for example a buyer who clicked a creator's ad and then typed another creator's code. Pick a rule, such as last touch wins or code beats link, write it down and show it to creators. Arguments about credit are almost always arguments about an unwritten rule.
For multi-brand software like SQWAD, every one of these records also belongs to a brand, and that isolation has to be enforced in the database rules, not just hidden in the interface.
## How should commission and payouts be calculated?
Calculate commission on what actually sold after discounts and refunds, hold it through the refund window, then pay it out in batches.
SQWAD calculates commission on what actually sold, which is the right default. A practical flow:
- When an order is attributed, create a commission entry in pending with a hold until date set past your return window, for example 30 days.
- When a refund or cancellation arrives from Shopify, mark the entry reversed instead of deleting it.
- When the hold date passes, move the entry to approved.
- Pay approved entries on a fixed schedule, weekly or monthly, and record the payout reference.
Show creators the same statuses you use internally. A creator who can see "pending until the 14th" does not send a message asking where their money is. The TheHoopGang portal taught me that most messages in a creator program are status questions, and a visible status answers them.
> Tell creators the attribution rule and the hold period before they post, not after the first dispute. A one-paragraph explanation in the portal prevents most arguments about credit.
Disclosure matters too. The FTC's guidance says a paid relationship should be disclosed clearly and conspicuously near the recommendation, and a bare "affiliate link" label may not be enough. Put that expectation in the creator agreement. This is general information, not legal advice.
## What results can good attribution show?
It shows revenue, ad performance and commission per creator, which is what lets a brand decide who to keep, who to pay more and which videos to scale.
SQWAD's published TheHoopGang case study reports $500K+ in revenue attributed to creator videos, a 3.7x return on ad spend across 759 creator ads, $41K+ in commission paid to creators and 62 creators, all in under 10 months.
![SQWAD case study page for TheHoopGang: $500K+ revenue attributed to creator videos, 3.7x return on ad spend across 759 creator ads, $41K+ commission paid and 62 creators, as published on joinsqwad.com.](/shots/sqwad-case-studies-thehoopgang.jpg)
The point of those numbers is not that every program will match them. It is that none of them could be reported at all without ad-level attribution. The 759 creator ads are exactly the sales that codes and links would have missed.
## A worked example: a skincare brand with 25 creators
This is an illustration, not a client. A skincare brand on Shopify runs a program with 25 creators. Each gets a 15 percent code, a share link and 10 percent commission. The brand also runs the best eight videos as Meta ads.
After a month the code report shows $9,000 in sales, but a quick search finds two codes posted on coupon sites, accounting for $2,100 of it. The link report shows $4,500. The ads report, once each ad carries its creator's video ID, shows $31,000 in attributed revenue across the eight videos.
Without ad attribution, the brand would have paid commission on roughly $11,400 and believed the program was small. With it, the brand sees that three creators produced most of the ad revenue, offers them a retainer, retires the leaked codes and stops paying the creators whose content never sold. The fix was not more software features. It was capturing the third path to purchase.
## What does it cost to build, and should you buy instead?
Most brands should buy creator software first, and build only when their rules or integrations do not fit standard tools.
I covered the full decision in "Build or buy: software for running a brand creator program". In short, applications, product seeding, content review, payouts and attribution are already built in existing tools, so a custom build only pays off when your rewards, approvals or integrations are unusual.
If you do build, realistic ranges based on my SaaS packages:
- From $250 for a working first version of one workflow, for example code and link tracking with a commission report.
- From $1,200 for a SaaS MVP with auth, a creator dashboard, a database and payments.
- From $3,000 for a full platform with brand and creator roles, admin tools and integrations such as Shopify and Meta.
Payouts add their own work. If you plan to pay creators through the platform, read up on Stripe Connect payouts before you design the payout tables.
## What mistakes break creator attribution?
The most common mistake is trusting one source of truth, usually codes, and assuming it captures everything.
Others I see often:
- Launching ads without the creator's video ID in the ad name, so the best performing content is unattributed.
- Reading the commission rate live from the creator profile, which silently changes history when a rate changes.
- Paying commission on the order date, then chasing refunds from creators.
- Leaving overlapping credit rules undefined, which turns every double match into a dispute.
- Hiding statuses from creators, which floods the team with "did my sale count?" messages.
## The bottom line
A creator affiliate tracking system has to watch every path a buyer takes: codes, links and, for UGC programs, the ads built from creator videos. Store attributed orders and commission entries separately, copy the rate onto each entry, hold commission through the refund window and show creators the same statuses you see. Start with existing creator software unless your program is genuinely unusual. If it is, send me the rules you need through the SaaS MVP service page and I will tell you what a first version would take.`,
  },
  {
    slug: 'saas-pricing-models-flat-tiered-usage',
    title: 'SaaS pricing models compared: flat, per-seat, tiered, usage-based and revenue-based',
    description: 'Flat, per-seat, tiered, usage-based and revenue-based SaaS pricing compared: who each fits, how hard each is to build in Stripe, and SQWAD\'s real public pricing.',
    date: d,
    keywords: ['SaaS pricing models', 'usage-based pricing', 'tiered pricing SaaS', 'per-seat pricing', 'revenue-based SaaS pricing'],
    service: 'saas-mvp-development',
    shortAnswer: 'The five common SaaS pricing models are flat rate, per-seat, tiered, usage-based and revenue-based. Pick the one whose unit grows with the value your customer gets: seats for collaboration tools, usage for infrastructure and AI products, and customer revenue when your product directly drives sales.',
    takeaways: [
      'The best pricing model charges on the unit that grows as the customer gets more value from the product.',
      'Flat and tiered plans are the simplest to build and explain, which is why most MVPs should start there.',
      'Usage-based and revenue-based pricing fit products tied to volume or sales, but they need reliable metering before the first invoice.',
      'SQWAD bills brands at the higher of their chosen plan or the tier matching the revenue their creators drive, with a 1% fee only on the Scale plan.',
      'Pricing is easy to change later if your billing code reads plans from configuration instead of hard-coding them.',
    ],
    faqs: [
      { q: 'What is the most common SaaS pricing model?', a: 'Tiered plans, such as a starter, pro and business tier with different limits or features, are the most common because they are easy to explain and easy to build.' },
      { q: 'What is the difference between tiered and usage-based pricing?', a: 'Tiered pricing charges a set price for a package of limits, while usage-based pricing charges for the actual quantity used in each billing period.' },
      { q: 'What is revenue-based SaaS pricing?', a: 'It ties the price to revenue the product helps the customer earn, for example a percentage of tracked sales or plans that step up as tracked revenue grows.' },
      { q: 'Should an MVP launch with usage-based pricing?', a: 'Usually not, because metering adds engineering work and makes invoices harder to predict, so most MVPs launch with flat or tiered plans and add usage pricing once they understand customer behaviour.' },
      { q: 'Can I change my SaaS pricing after launch?', a: 'Yes, and most products do, but keep existing customers on their old price for a set period and announce changes well before they take effect.' },
    ],
    sources: [
      { title: 'Recurring pricing models', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/products-prices/pricing-models' },
      { title: 'Basic usage-based billing', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/billing/subscriptions/usage-based' },
      { title: 'SQWAD pricing', publisher: 'SQWAD', url: 'https://joinsqwad.com/pricing' },
    ],
    body: `Pricing feels like a marketing decision, but in a SaaS product it is also a data model decision. The unit you charge on has to be counted, stored, shown to the customer and sent to the billing system every month. Change the model later and you may be rewriting billing code, migrating customers and explaining a new invoice to people who liked the old one.
I set pricing for SQWAD, my own SaaS for Shopify brands that run creator programs, and I build billing into client MVPs. This comparison covers the five models founders actually choose between, what each costs to build, and how I would pick.
## What are the main SaaS pricing models?
There are five common models: flat rate, per-seat, tiered, usage-based and revenue-based, and most real products blend two of them.
Stripe's own documentation groups recurring pricing into flat rate, per-seat, tiered and usage-based. Revenue-based pricing is a variant of usage pricing where the unit is money the customer earns through your product. Each model answers one question differently: what does the customer pay more for?
- Flat rate: one price for the product.
- Per-seat: a price for each user.
- Tiered: packaged plans with different limits or features.
- Usage-based: a price per unit consumed, such as API calls, messages or storage.
- Revenue-based: a price tied to revenue your product tracks or creates for the customer.
The rule that holds across all of them: charge on the unit that grows as the customer gets more value. If customers get more value as their team grows, seats work. If value grows with volume, usage works. If your product directly drives sales and you can measure them, revenue can work. When the unit and the value drift apart, customers feel overcharged or you leave money on the table.
## How do the five pricing models compare?
Flat and tiered plans are simplest, per-seat suits team tools, and usage or revenue pricing suits products where value scales with volume.
### Flat rate
Best for: single-purpose tools with similar customers, such as a booking page for one small business.
Build cost: the cheapest option, usually covered inside a SaaS MVP from $1,200 with one Stripe price and a subscription status check.
Pros: easy to explain, predictable revenue, one price to maintain.
Cons: small customers may find it expensive and large customers pay far less than the value they get.
### Per-seat
Best for: collaboration tools where each extra user gets real value.
Build cost: a bit more than flat, because seat counts must stay in sync with team membership.
Pros: revenue grows with the customer's team and the price is easy to understand.
Cons: customers share logins to save money, and usage per seat varies wildly.
### Tiered
Best for: most early products, especially when customers differ in size.
Build cost: similar to flat rate, plus feature and limit checks for each tier.
Pros: lets small customers start cheap and large customers pay more, and it gives an obvious upgrade path.
Cons: limits feel arbitrary if they do not match how customers grow, and too many tiers confuse buyers. Stripe also separates volume tiers, where one unit price applies to all units, from graduated tiers, where each band is priced separately.
### Usage-based
Best for: infrastructure, messaging and AI products where cost and value both scale with volume.
Build cost: higher, because every billable event must be recorded reliably and reported to the billing system.
Pros: customers pay for what they use and small customers can start almost free.
Cons: invoices are hard to predict, which makes some buyers nervous, and metering bugs become billing bugs.
### Revenue-based
Best for: products that directly create or track sales, such as attribution, commerce and marketplace tools.
Build cost: the highest, because you need trustworthy revenue tracking before you can bill on it.
Pros: price follows the value customers can see, and customers only pay more when they earn more.
Cons: customers question the numbers, revenue swings month to month, and you depend on data from other systems.
## How does SQWAD price, and why?
SQWAD uses a hybrid of tiered and revenue-based pricing: brands pay the higher of the plan they pick or the tier matching the revenue their creators drive.
At the time of writing, SQWAD's public pricing is Starter at $99 a month for up to five active creators, Pro at $399 a month, which applies once a month tracks $10K or more in creator revenue and allows up to 15 active creators, and Scale at $999 a month plus 1% of that month's tracked revenue, which applies from $100K a month with unlimited creators. The first month is free, there is no setup fee and brands can cancel anytime.
![SQWAD's pricing page, where the price follows the revenue creators drive.](/shots/sqwad-pricing.jpg)
I chose this because SQWAD's core job is showing which creator drove which sale. The product already measures the value it creates, so tying price to that number is honest: a brand whose creators drive little pays the entry price, and a brand whose creators drive six figures a month pays more. The tiers keep it predictable, and the percentage only applies at the top, where 1% is small next to the revenue being tracked.
![SQWAD pricing tiers: Starter $99 a month, Pro $399 a month and Scale $999 a month plus 1%, with the first month free.](/shots/sqwad-home-s4.jpg)
The trade-off is that billing depends on attribution being right. If tracked revenue were wrong, the invoice would be wrong too, so the revenue numbers had to be solid before they drove billing.
## How do you pick the right value metric?
Pick the unit customers already count, that grows with their success, and that your product can measure without arguments.
Good value metrics pass three tests:
- The customer understands it without explanation: users, bookings, orders, messages.
- It rises when the customer gets more out of the product, not just when they use it more inefficiently.
- You can count it from your own data, so invoices never depend on a number you cannot show.
For a scheduling tool, bookings per month passes all three. For a document tool, seats usually do. For an AI writing tool, generated words or credits track your cost, but customers may not feel more value per word, so a tiered plan with a credit allowance often works better than pure pay-per-use.
> Before you choose, write one sentence: "A customer pays more when ___." If the blank is not something the customer is happy about, pick a different unit.
## How hard is each model to build in Stripe?
Flat and tiered plans are a few days of work, per-seat adds quantity syncing, and usage or revenue pricing needs a metering pipeline you can trust.
In Stripe you model what you sell as products and how you charge as prices. Flat and tiered plans are one price per plan, plus a webhook that updates the customer's plan in your database when a subscription is created, changed or cancelled. Per-seat uses the subscription quantity, which your app must update whenever someone joins or leaves a team.
Usage pricing means sending usage to Stripe as it happens or in batches. At the time of writing Stripe's docs describe Metronome, now part of Stripe, as the recommended starting point for new usage-based integrations, with basic usage-based billing on the Meters API still supported for existing ones. Either way, you need idempotent event recording so a retried job does not bill a customer twice.
I wrote about the subscription basics in "Setting up Stripe subscriptions for a SaaS MVP: what you actually need". Whatever model you pick, store plan definitions in configuration, not scattered through components, so changing a limit is one edit.
## Should you offer a free trial or a free plan?
Offer a trial when the product proves itself within a few weeks, and a free plan only when free users cost you little and spread the product.
SQWAD gives the first month free because a creator program needs a few weeks to produce attributed sales. A seven-day trial would end before a brand saw any value. Match the trial length to how long it takes a new customer to hit their first real result.
Free plans are different. They make sense when free users bring in paying users, for example through shared links or invites, and when hosting them is cheap. For B2B tools with a handful of serious buyers, a free plan mostly creates support work.
## A worked example: pricing a booking SaaS for salons
This is an illustration, not a client. A founder builds booking software for salons. Some customers are a single stylist, others have six chairs.
Flat pricing at $49 would scare the solo stylists and undercharge the big salons. Per-seat pricing would push salons to share one login at the front desk. Pure usage pricing per booking would make invoices swing with the season.
The answer is tiered: Solo for one calendar, Studio for up to four, Salon for unlimited, with a booking limit on the lowest tier as a natural nudge to upgrade. It builds as three Stripe prices and a limit check, inside an MVP from $1,200. Once the founder knows how bookings grow, an add-on per extra location can come later without changing the base model.
## What pricing mistakes do early SaaS founders make?
The biggest mistake is choosing a complicated model before knowing how customers actually use the product.
Others I see often:
- Pricing below cost because hosting and support were not included. "How much does an MVP cost? SaaS MVP prices and what drives them" covers the build side, but run the monthly numbers too.
- Too many tiers. Three is usually enough to start.
- Hard-coding plan names and limits across the codebase, which makes every pricing change a refactor.
- Billing on a metric the customer cannot see in the product.
- Changing prices on existing customers without notice.
## The bottom line
Start with flat or tiered pricing unless your value clearly scales with volume or revenue. Choose a unit the customer understands, that grows with their success and that you can count yourself. Usage and revenue pricing can be the most honest models, as SQWAD's revenue-linked tiers show, but they only work once your measurement is trustworthy. If you want billing built into your MVP in a way that lets you change pricing later, my SaaS MVP service page explains how I scope it.`,
  },
  {
    slug: 'saas-onboarding-flow',
    title: 'How to design a SaaS onboarding flow that gets users to their first win',
    description: 'How to design a SaaS onboarding flow: define activation, decide how many steps to ask for, use progress indicators and measure drop-off, with real examples.',
    date: d,
    keywords: ['SaaS onboarding flow', 'user onboarding', 'activation rate', 'onboarding steps', 'multi-step sign-up form'],
    service: 'saas-mvp-development',
    shortAnswer: 'A good SaaS onboarding flow gets a new user to their first real result, the activation moment, with as few required steps as possible. Ask only for what the product needs to work right now, show progress on any flow longer than a few steps, and measure where people drop off so you can cut the step that loses them.',
    takeaways: [
      'Define activation as one concrete action that predicts a user will stay, then design onboarding to reach it.',
      'Step count matters less than whether every step is needed now, so move anything optional to after activation.',
      'Show a progress indicator on any multi-step form so users know how much is left.',
      'Track an event for every onboarding step from the first day, because you cannot fix drop-off you cannot see.',
    ],
    faqs: [
      { q: 'How many steps should a SaaS onboarding flow have?', a: 'As few as the product needs to work, which can be one screen for a simple tool or eight or more for a product that needs real information before it can match or approve anyone.' },
      { q: 'What is activation in SaaS?', a: 'Activation is the first moment a new user gets real value from the product, such as sending a first invoice or receiving a first booking, and it is the main goal of onboarding.' },
      { q: 'Should onboarding have a progress bar?', a: 'Yes for any flow with several steps, because a visible "step 2 of 8" tells users how much effort is left and reduces abandonment from uncertainty.' },
      { q: 'Should I use a product tour?', a: 'Usually not as the first thing users see, because research from Nielsen Norman Group found that deck-of-cards tutorials did not improve task performance, so short in-context hints work better.' },
      { q: 'Can a developer build my onboarding flow?', a: 'Thomas Osayi builds a working first version of one workflow, such as sign-up and onboarding, from $250, and a full SaaS MVP with auth, dashboard, database and payments from $1,200.' },
    ],
    sources: [
      { title: 'Mobile-App Onboarding: An Analysis of Components and Techniques', publisher: 'Nielsen Norman Group', url: 'https://www.nngroup.com/articles/mobile-app-onboarding/' },
      { title: 'Progress Indicators Make a Slow System Less Insufferable', publisher: 'Nielsen Norman Group', url: 'https://www.nngroup.com/articles/progress-indicators/' },
    ],
    body: `Most SaaS products do not lose users because the product is bad. They lose them in the first ten minutes, somewhere between the sign-up button and the first useful thing the product does. Someone signs up, sees an empty dashboard or a twelve-field form, and closes the tab. They never come back to find out the product was good.
I have built onboarding flows for three quite different products: NOM, a food discovery app with an 11-screen onboarding flow; SQWAD, where creators sign up through an 8-step form; and Guardian MindCare, where a therapy client starts with a get-matched intake. They have different step counts for good reasons. This guide is about choosing yours.
## What is a SaaS onboarding flow actually for?
Onboarding exists to get a new user to their first real result, usually called activation, and every screen should either move them toward it or get out of the way.
It is tempting to treat onboarding as a welcome tour: a few slides explaining features, a profile form, maybe a video. None of that is the goal. The goal is the moment the user thinks "this works for me". For an invoicing tool that is sending the first invoice. For a booking tool it is the first booking arriving. For a creator program it is a creator being approved and getting product.
Nielsen Norman Group's research on app onboarding is blunt about tours: deck-of-cards tutorials did not improve task performance, and teams should avoid onboarding where they can and put the effort into a clearer interface. Onboarding earns its place when the product needs information from the user to work, or when the product is tailored to the user's context.
So the first design question is not "what should onboarding show?" It is "what does the product need from this person before it can deliver value, and what is the shortest path to that value?"
## How do you define activation for your product?
Pick one concrete action, done within the first session or week, that users who stay tend to do and users who leave tend not to.
A useful activation event is specific and observable in your own data:
- A scheduling tool: the first appointment booked by a real client.
- A team tool: a second teammate invited and active.
- A creator platform: a creator's application submitted, or for the brand, the first creator approved.
- A reporting tool: the first data source connected and a report viewed.
If you are pre-launch, guess, then check the guess once you have twenty or thirty real users. Compare people still active after a month with those who left and look at what the first group did early. The answer is usually obvious.
Once you have the event, write it at the top of the onboarding spec. Every step you add has to justify itself against it. "We need their company size" is only a reason if the product does something different with company size before activation.
## How many steps should onboarding have?
As many as the product genuinely needs before it can deliver value, and no more, which is why good flows range from one screen to eight or more.
The three products I mentioned show the range. NOM's onboarding ran to 11 screens. SQWAD's creator sign-up is an 8-step form. Guardian MindCare's intake starts with a single question. None of those numbers is right or wrong on its own. What matters is whether each step is needed now.
A creator applying to a brand program is a good case for a longer flow. The brand cannot approve, size or ship to a creator without knowing who they are, where their audience is and where to send product. Splitting that into eight short steps keeps each screen focused instead of presenting one intimidating form.
![SQWAD's multi-step creator sign-up form, shown at step 1 of 8.](/shots/sqwad-creators-join.jpg)
Compare a tool where the user can get value alone, like a personal notes app. There the right onboarding may be zero steps: sign in and land on a working page.
A practical way to decide is to sort every field into three buckets: needed to deliver the first result, needed later, and nice to know. Only the first bucket belongs in onboarding. The second bucket can be asked at the moment it becomes relevant. The third bucket can usually be dropped.
## Should you show a progress indicator?
Yes, on any flow with more than two or three steps, because people abandon tasks when they cannot tell how much is left.
A simple "Step 1 of 8" label, or a bar that fills as steps complete, answers the question every user has on a long form: how much more of this is there? Nielsen Norman Group's guidance on progress indicators is about waiting rather than forms, but the principle carries over: give immediate feedback and make progress visible.
A few details make progress indicators work in practice:
- Count only steps the user will actually see. If a step is skipped for some users, recalculate the total so the bar never jumps backwards.
- Put the hardest step in the middle, not first. A user who has completed three easy steps is more likely to finish a fourth hard one.
- Save each step as it is completed, so a user who leaves at step five can return to step five, not step one.
> Save partial progress on the server, not only in the browser. A user who starts on their phone and finishes on a laptop should not have to start again.
## What should you ask for, and what can wait?
Ask for what the product needs to make its first decision about this user, and defer everything else to the moment it matters.
Guardian MindCare's get-matched intake is a good example of starting with the question that decides everything after it. Step one asks "Who is this care for?" Everything after it depends on who the care is for, so it comes first, and nothing else competes with it on the screen.
![Guardian MindCare's get-matched intake, step one: "Who is this care for?"](/shots/guardian-get-matched.jpg)
In health products there is a second reason to keep intake short: the safest data is the data you never collect. A matching intake needs enough to match. Clinical detail belongs in the practice's clinical records system, not in a website form. That principle helps outside healthcare too. Every field you collect is a field you must store, protect and justify.
Things that can usually wait until after activation:
- Profile photos and bios, unless the product is about people finding each other.
- Notification preferences, which can start with sensible defaults.
- Team invites, unless collaboration is the activation event.
- Billing details, if you offer a trial that does not require a card.
## How do empty states, sample data and checklists help?
They make the first screen after onboarding useful instead of empty, which is where many users quietly give up.
A brand new account is empty by definition. If the dashboard shows zeros and blank tables, the user has to imagine what the product will look like. Better options:
- An empty state with one clear action: "Add your first service" with a button, not a paragraph of instructions.
- Sample data, clearly labelled, that the user can explore and delete.
- A short checklist of three to five actions that lead to activation, with the first one already ticked for signing up.
Keep any checklist short and finishable. A checklist of fifteen items feels like homework. And remove it once it is done.
## How do you measure an onboarding flow?
Record an event for every step, started and completed, so you can see the exact screen where people leave.
At minimum, track:
- Sign-up started and sign-up completed.
- Each onboarding step viewed and completed, with the step name.
- The activation event, with the time since sign-up.
That gives you a funnel. If 100 people start and 40 finish step three but only 15 finish step four, step four is your problem. Look at what it asks. Usually it is a field people do not have at hand, a confusing choice, or something that feels too personal too early.
Analytics tools make this easy, but even a simple events table in your own database works for an MVP. "How to track website leads with Google Analytics 4: forms, calls and UTMs" covers the event approach for marketing sites, and the same thinking applies inside the app.
## A worked example: onboarding for a tutoring marketplace
This is an illustration, not a client. A founder builds a marketplace where parents book tutors. The first version asks parents for name, email, password, phone, child's name, age, grade, subjects, learning goals, budget, schedule and how they heard about the site, on one page. Most parents stop halfway.
Activation is defined as a parent sending a first booking request. Sorting the fields shows that matching needs only grade, subject and rough schedule. Everything else can wait. The new flow starts with one question, which subject, then grade, then availability, each on its own screen with a "Step 2 of 4" label. Account creation moves to the end, after the parent has seen matching tutors. Phone and goals move to the booking request itself.
Step events show the next leak: availability. Replacing a seven-day grid with three options, weekday afternoons, weekday evenings and weekends, fixes it. In a real build, a flow like this fits inside an MVP from $1,200, or a single-workflow version from $250.
## What onboarding mistakes should you avoid?
The most common mistake is asking for everything up front because it might be useful later.
Others I see often:
- Forcing account creation before the user has seen any value, when the product could show results first.
- Feature tours on first launch that users skip and forget.
- No way to resume a half-finished flow.
- Validation errors that appear only on submit, at the end of a long form.
- No step tracking, so nobody knows where users drop off.
- Treating mobile as an afterthought, when many users sign up from a phone.
## The bottom line
Design onboarding backwards from activation. Define the first result that predicts a user will stay, ask only for what the product needs to deliver it, split longer flows into short steps with visible progress, and save progress as you go. Then measure every step and cut the one that loses people. If you want a sign-up and onboarding flow built properly into your product, my SaaS MVP service page covers how I scope one.`,
  },
  {
    slug: 'how-to-build-a-client-portal',
    title: 'How to build a client portal: roles, documents, messaging, scheduling and security',
    description: 'What a custom client portal needs: roles and permissions, document uploads, messaging, scheduling, status tracking and security, with costs and real examples.',
    date: d,
    keywords: ['client portal development', 'build a client portal', 'custom client portal', 'secure client portal', 'client portal features'],
    service: 'saas-mvp-development',
    shortAnswer: 'A client portal is a private, logged-in area where clients see their own records, share documents, message your team and track status. Build it around roles and permissions first, enforce access on the server or in database rules, and add documents, messaging and scheduling only where they replace work your team already does by email.',
    takeaways: [
      'Write a permissions table listing every role and every kind of record before designing a single screen.',
      'Access checks belong on the server or in database rules, because hiding a button in the interface protects nothing.',
      'Show clients a clear status for their request, since most portal messages are really status questions.',
      'Store uploaded files privately with server-generated names, allowed file types and size limits.',
      'Buy an off-the-shelf portal when your workflow is standard, and build custom when roles, data or integrations are specific to your business.',
    ],
    faqs: [
      { q: 'What features does a client portal need?', a: 'Most portals need secure sign-in, a dashboard of the client\'s own records, document upload and download, status tracking and notifications, with messaging and scheduling added when they replace existing email work.' },
      { q: 'Should I build a client portal or use an off-the-shelf tool?', a: 'Use an off-the-shelf tool when your workflow matches it, and build custom when you have several roles, unusual data or integrations that standard tools force you to work around.' },
      { q: 'How do I keep client data private in a portal?', a: 'Enforce access rules on the server or in the database so each user can read only records they own or are assigned to, and test by signing in as each role and trying to open other users\' records.' },
      { q: 'Is a client portal HIPAA compliant?', a: 'Only if it is built and operated with the required safeguards and vendor agreements, so a health practice should get compliance advice before storing health information, and this is general information, not legal advice.' },
      { q: 'How much does a custom client portal cost?', a: 'Thomas Osayi builds a SaaS MVP with auth, dashboard, database and payments from $1,200, and a full multi-role platform with admin tools and integrations from $3,000.' },
    ],
    sources: [
      { title: 'Authorization Cheat Sheet', publisher: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html' },
      { title: 'File Upload Cheat Sheet', publisher: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html' },
      { title: 'Control Access with Custom Claims and Security Rules', publisher: 'Firebase', url: 'https://firebase.google.com/docs/auth/admin/custom-claims' },
      { title: 'The Security Rule', publisher: 'HHS.gov', url: 'https://www.hhs.gov/hipaa/for-professionals/security/index.html' },
    ],
    body: `Client portals usually start as an email problem. The team spends hours answering "did you get my file?", "where is my order?" and "can we move Thursday?" Each answer is easy, but there are dozens a day, scattered across inboxes and text threads. A portal turns those questions into something the client can check alone.
I have built several portals with very different users: Guardian MindCare, a therapy practice platform with separate portals for therapists, supervisors, trainees, clients and admins; the TheHoopGang creator portal, which manages 50+ creators; and FieldOps, a job scheduling app with Outlook Calendar sync. This guide covers what a portal needs and the order I build it in.
## What is a client portal, and when do you need a custom one?
A client portal is a logged-in area where each client sees only their own records, files, messages and status, and you need a custom one when standard tools do not fit your roles or workflow.
Plenty of businesses are well served by an off-the-shelf portal inside their accounting, legal, or practice management software. If your workflow is standard and your software already has a portal, use it. It will be cheaper and better supported than anything custom.
A custom portal earns its cost in a few situations:
- You have more than two kinds of user, each needing a different view, as in a practice with supervisors and trainees.
- Your data is specific to your business, such as creator applications with product sizes, shipping and content.
- You need the portal to connect to tools you already use, like Shopify, Outlook or your own database.
- The portal is the product, as in a SaaS you sell to other businesses.
Artistic Printing, a commercial printer I worked with, is a good example of a middle path: quote management and client intake built to match how the shop actually takes jobs, instead of bending the shop around a generic form.
## How should roles and permissions work?
Define every role and what it may read or change before designing screens, then enforce those rules on the server or in database rules.
For Guardian MindCare, the starting point was a permissions table: five roles down one side, every kind of record across the top, each cell marked read, write or nothing. With therapists, supervisors, trainees, clients and admins, the question of who can see what decides almost everything else. Once that table exists, screens follow from it, and so do the access rules.
In a Firebase project, the usual pattern is to attach a role to each user as a custom claim on their auth token, set only from a trusted server, then write security rules that compare that role and the user's ID against each record. Firebase caps the claims payload at 1,000 bytes, so store a role, not a whole profile. Claims reach the client when a new ID token is issued, so a role change may not apply until the user's token refreshes.
OWASP's authorization guidance sums up the rules I follow: deny by default, never rely on client-side checks, and give each user the least privilege they need. "Roles and permissions in a SaaS app: a practical guide for founders" goes deeper on modelling roles.
## How do you handle documents and file uploads?
Store files privately, generate file names on the server, allow only the file types you need, and hand out short-lived download links only to users allowed to see them.
Documents are where portals leak. A common mistake is putting uploads in a public bucket with guessable names, so anyone with the link can read any client's file. A safer setup:
- A private storage bucket with rules that tie each file path to its owner or assigned staff.
- File names generated by the server, such as a random ID, instead of the client's original file name.
- An allow list of types, for example PDF, JPG and PNG, checked by content, not only by extension.
- A size limit per upload.
- Downloads through signed URLs that expire, created only after an access check.
OWASP's file upload guidance covers the same ground, including not trusting the Content-Type the browser sends. Also record who uploaded each file and when. When a client says "I sent that last week", the record settles it in seconds.
## Should the portal include messaging?
Include messaging only if conversations about a record need to live next to that record, otherwise email notifications with a link back to the portal are enough.
Building chat sounds simple and is not. Real-time updates, unread counts, attachments, notifications and moderation all add up. For many portals the better first version is a comment thread on each request or job, plus an email when someone replies. The client clicks the link, signs in and sees the full history in context.
If you do build messaging, decide early:
- Who can message whom. In a practice with trainees, not every role should message every client.
- Whether staff can see each other's threads, for cover during absences.
- How long messages are kept and who can delete them.
- What triggers an email or text, so people are not notified for every keystroke.
For sending notifications reliably, "Resend vs SendGrid vs Postmark: transactional email for your AI-built app" compares the main options.
## How does scheduling fit into a client portal?
Add scheduling when clients book or reschedule with you often, and connect it to the calendar your team already lives in.
A portal booking feature that does not sync with staff calendars creates double bookings. FieldOps, a job scheduling app I built for field teams, syncs with Outlook Calendar for exactly that reason: the schedule has to match what staff see on their phones.
Choices to make:
- Embed an existing booking tool or build booking into the portal. "Online booking for your website: embed a tool or build it custom?" covers the trade-off.
- Whether clients can reschedule or cancel themselves, and up to how close to the appointment.
- Time zones, stored in UTC with the location's zone attached.
- Reminders by email or text, which cut no-shows more than any other feature.
Two-way sync is the part that takes time. Reading busy times from a calendar is fairly simple, but writing bookings back, handling edits made directly in Outlook or Google Calendar, and recovering when a sync token expires all need careful testing. If clients only request times and staff confirm them, a one-way sync is often enough for the first version.
## What status tracking should clients see?
Clients should see one clear status for each request, from received to done, because a visible status answers most of the messages a portal is meant to replace.
In the TheHoopGang creator portal, each creator moves through one pipeline: application received, approved, shipped, delivered, content completed. The creator's dashboard and the team's dashboard read the same record, so they cannot disagree. With tracking numbers and statuses visible to creators, a creator can check where their package is without messaging the team.
![The TheHoopGang creator portal sign-in screen, where approved creators log in to see their status, package tracking and content submissions.](/shots/hoopgang-login.jpg)
A self-serve help center works alongside status. Guardian MindCare has a client help center with searchable article collections, so common questions have an answer before anyone writes in.
![Guardian MindCare's client help center with searchable article collections.](/shots/guardian-help.jpg)
> Write your status names in the client's words, not your internal jargon. "Your order is being printed" beats "Stage 3: Production".
## What security does a client portal need?
At minimum: strong sign-in, server-side access checks, private file storage, audit logs for sensitive actions, and tests that sign in as every role.
A checklist I use:
- Sign-in through a proven provider, with email verification and optional two-factor authentication for staff.
- Access rules enforced in the database or on the server for every query.
- Admin actions, such as role changes and deletions, logged with who did them.
- Sessions that expire, and a way to revoke a departed staff member's access immediately.
- One test account per role, used to try to open every other role's pages and records.
In healthcare, the HIPAA Security Rule sets standards for protecting electronic health information, and any vendor storing it may need a business associate agreement. A health practice should get compliance advice before putting health information in a portal. This is general information, not legal advice. I also covered a narrower question in "Are website contact forms HIPAA compliant? What health practices need to know".
## What should the first version of a portal include?
The first version should cover the one workflow that generates the most emails today, with sign-in, roles and status, and leave everything else for later.
It is tempting to list every feature a portal could have and build them all at once. That makes the first release slow and expensive, and half the features turn out not to matter. A better way is to look at your inbox for the last month and count which questions came up most. If most are about status, the first version is sign-in plus a status page. If most are about files, it is sign-in plus secure uploads.
A sensible first release usually includes:
- Sign-in with email verification and password reset.
- The permissions table enforced for every role you have today.
- One core screen per role, such as the client's requests and the staff member's queue.
- Status for each request, plus an email when it changes.
- An admin view to add users and change roles.
Messaging, scheduling, payments and reports come next, in the order your clients ask for them. Launch to a few friendly clients first and watch what they try to do.
## A worked example, and what it costs
This is an illustration, not a client. A bookkeeping firm with three accountants and 120 clients wants a portal. Clients upload receipts and statements, see which month is closed, message their accountant and book a quarterly review.
The permissions table has three roles: client, accountant and admin. Accountants see only assigned clients. Uploads go to a private bucket by client and month. Each month has a status: waiting on documents, in progress, closed. Messaging starts as comments on each month with email notifications. Booking syncs with the accountants' calendars.
Based on my packages, a first version covering one workflow, uploads and monthly status, could start from $250. A SaaS MVP with auth, dashboard, database and payments starts from $1,200. A full multi-role platform with admin tools and integrations like calendar sync starts from $3,000, which is where this example lands.
## The bottom line
Build a client portal around its permissions table, not its screens. Enforce access on the server, keep files private, show every client a clear status, and add messaging and scheduling only where they replace work your team already does. Use an off-the-shelf portal if your workflow is standard. If your roles, data or integrations are specific to your business, my SaaS MVP service page explains how I scope a custom portal.`,
  },
  {
    slug: 'stripe-connect-marketplace-payouts',
    title: 'Stripe Connect payouts for a marketplace: account setup, onboarding, KYC and timing',
    description: 'How Stripe Connect payouts work for a marketplace: account configuration after Standard, Express and Custom, onboarding and KYC, payout timing and current fees.',
    date: d,
    keywords: ['Stripe Connect payouts', 'Stripe Connect marketplace', 'Stripe Connect account types', 'Stripe Connect onboarding', 'Stripe Connect fees'],
    service: 'saas-mvp-development',
    shortAnswer: 'Stripe Connect lets a marketplace take payments and pay sellers or creators through connected accounts. New platforms configure each connected account by Dashboard access and by who covers fees and losses, rather than choosing Standard, Express or Custom, and Stripe usually handles identity verification through hosted onboarding. At the time of writing, first payouts usually arrive about seven days after the first live payment.',
    takeaways: [
      'Stripe now marks Standard, Express and Custom account types as legacy for new platforms and recommends configuring accounts by Dashboard access and responsibilities.',
      'Stripe collects identity verification in most setups, and the platform takes it on only when it owns losses and gives accounts no Stripe Dashboard.',
      'Marketplaces usually use destination charges or separate charges and transfers, so the platform controls the customer payment and pays sellers afterwards.',
      'At the time of writing, if your platform handles pricing, Connect costs $2 per monthly active account plus 0.25% + 25 cents per payout, on top of card processing.',
      'Use manual or delayed payouts to hold funds until delivery, but note Stripe states it does not provide escrow.',
    ],
    faqs: [
      { q: 'Are Stripe Express accounts still available?', a: 'Existing platforms can keep using Express, Standard and Custom accounts, but at the time of writing Stripe calls them legacy account types and recommends new platforms configure accounts with Dashboard access and responsibilities instead.' },
      { q: 'How long until a connected account gets its first payout?', a: 'Stripe says the first payout waiting period is usually seven days from the first live payment, after which payouts follow the account\'s schedule.' },
      { q: 'Who verifies sellers\' identity on Stripe Connect?', a: 'In most configurations Stripe collects and verifies identity information through hosted or embedded onboarding, and the platform is responsible only when it owns losses and gives accounts no Dashboard.' },
      { q: 'Can a marketplace hold payouts until an order is delivered?', a: 'Yes, by setting payouts to manual or adding a delay, although funds must be paid out within Stripe\'s holding limit for the country, which is two years in the United States and 90 days in most other countries.' },
      { q: 'Can someone build Stripe Connect into my marketplace MVP?', a: 'Thomas Osayi builds SaaS MVPs with auth, dashboard, database and payments from $1,200, and multi-role platforms with admin tools and integrations from $3,000.' },
    ],
    sources: [
      { title: 'Connect pricing', publisher: 'Stripe', url: 'https://stripe.com/connect/pricing' },
      { title: 'Configure the behavior of connected accounts', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/connect/accounts-v2/connected-account-configuration' },
      { title: 'Connected account types', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/connect/connecting-to-accounts' },
      { title: 'Manage payout schedule', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/connect/manage-payout-schedule' },
      { title: 'Using manual payouts', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/connect/manual-payouts' },
    ],
    body: `Taking a payment is the easy part of a marketplace. The hard part is everything after: splitting the money, keeping your fee, verifying that the seller is who they claim to be, paying them on time, and handling the refund that arrives after they have already been paid. Stripe Connect is the tool most marketplaces use for that, and its terminology has changed enough that older tutorials now point you the wrong way.
I build payments into SaaS MVPs and multi-role platforms, and creator programs like SQWAD deal with paying people who drive sales. This guide covers how Connect works at the time of writing, how to configure connected accounts, onboarding and identity checks, payout timing and current fees. Everything about Stripe's terms and prices here was checked against Stripe's own pages on November 22, 2026.
## What does Stripe Connect do in a marketplace?
Connect gives each seller, creator or service provider a connected account under your platform, so you can take a customer's payment, keep a fee and pay the rest to the right person.
Stripe describes Connect as its solution for multi-party businesses that route payments between sellers, customers and other recipients. In practice a marketplace on Connect has:
- A platform account, which is your Stripe account.
- One connected account per seller or provider, created through the API when they sign up.
- Charges, created either on the connected account or on your platform with a transfer to the connected account.
- Payouts from each connected account's Stripe balance to their bank account or debit card.
Your app keeps the mapping: which user in your database owns which connected account ID, whether onboarding is complete, and whether payouts are enabled. That record decides what each seller sees. A seller whose account is not ready should see "finish setting up payouts", not a listing that takes orders they cannot be paid for.
## What happened to Standard, Express and Custom accounts?
At the time of writing, Stripe labels Standard, Express and Custom as legacy account types and recommends that new platforms configure accounts by their properties instead.
Stripe's connected account types page now carries a deprecation notice: it applies only to platforms already using those types. New platforms are pointed to the Accounts v2 API, where each connected account is configured with a Dashboard setting and a set of responsibilities. Platforms on the Accounts v1 API can use controller properties, which map to the same ideas.
The old types still help as a mental model, because the new settings line up with them:
- Full Dashboard access is roughly what a Standard account had.
- Express Dashboard access is roughly what an Express account had.
- No Dashboard access, with your platform providing everything, is roughly what a Custom account had.
Existing platforms do not have to migrate their current accounts, and Stripe says they can keep supporting them without interruption. If you are reading a tutorial that starts with "create an Express account", it still works for v1, but for a new build I follow Stripe's current recommendation.
## How do you choose Dashboard access and responsibilities?
Choose Dashboard access by how much of the payment experience you want to own, and choose responsibilities by whether your platform or Stripe covers fees and negative balances.
Two responsibilities are set when an account gets its Merchant configuration, and Stripe says they cannot be changed later. The fees collector decides whether Stripe takes payment fees directly from the connected account or from your platform. The losses collector decides who covers a connected account's negative balance, for example after a refund or dispute once funds are gone. If your platform takes losses, it must also collect fees.
### Full Dashboard
Best for: platforms whose sellers are established businesses, often with their own Stripe accounts.
Cost range: lowest build effort, since sellers manage their own payments in Stripe.
Pros: Stripe handles most seller support and the seller has full reporting.
Cons: least control over the seller experience and payout timing.
### Express Dashboard
Best for: most marketplaces paying individuals or small businesses, such as creators, tutors or freelancers.
Cost range: moderate build effort, and it fits inside a SaaS MVP from $1,200 when payouts are one of its core flows.
Pros: Stripe hosts onboarding and a light dashboard you can brand, while your platform controls charges and payout settings.
Cons: your platform usually owns refunds and disputes.
### No Dashboard
Best for: platforms that want a fully white-labelled payments experience and have engineering time to support it.
Cost range: the highest, usually full platform work from $3,000 or more.
Pros: complete control of the experience, with Connect embedded components available to rebuild dashboard features inside your app.
Cons: you own support, and if you also own losses you own identity verification too.
For most new marketplaces I would start with Express Dashboard access and the platform collecting fees and covering losses, which matches Stripe's recommendation for destination charges.
## Which charge type should a marketplace use?
Most marketplaces use destination charges or separate charges and transfers, because the customer buys from the platform and the platform pays sellers afterwards.
Connect has three ways to move money:
- Direct charges: the payment is created on the connected account and the seller is the merchant. Common for software platforms whose customers are businesses selling their own goods.
- Destination charges: the payment is created on your platform and part of it is transferred to one connected account automatically, minus your fee.
- Separate charges and transfers: your platform takes the payment, then transfers amounts to one or more connected accounts later.
Destination charges fit a one-seller order, such as a booking with one provider. Separate charges and transfers fit an order split across several sellers, or a payout that depends on something happening later, like a creator's video being approved.
> Store the Stripe charge ID and every transfer ID against the order in your own database. When a seller asks about a payment, you want the whole money trail on one screen.
## How does connected account onboarding and identity verification work?
In most setups Stripe collects and verifies identity information through hosted onboarding or embedded components, and your platform only has to send the seller there and listen for the result.
Stripe's configuration docs say Stripe is responsible for collecting identity verification requirements in most configurations. Your platform takes it on only when it covers losses and gives accounts no Dashboard access. That is a big decision: collecting government IDs and tax numbers yourself brings extra regulatory and security work, and requirements change over time.
A typical flow I build:
- The seller signs up in your app and you create a connected account through the API.
- Your app sends them to Stripe's hosted onboarding, through an account link, or shows the onboarding embedded component.
- Stripe collects legal name, date of birth, address, tax details and a bank account, and asks for documents if needed.
- Your webhook receives account updates and stores whether charges and payouts are enabled and which requirements are due.
- Your app shows a clear banner when information is missing, with a button back to onboarding.
Do not mark a seller as ready because they returned from onboarding. Returning only means they left the page. Trust the account status from Stripe.
## When do connected accounts get paid?
At the time of writing, a first payout usually arrives about seven days after the first live payment, then payouts follow the schedule your platform sets.
Stripe's support page says the first payout waiting period is usually seven days from the first live payment. After that, timing depends on two settings. Settlement timing, the delay days, controls how long a payment takes to become available. Stripe lists two business days as standard for US accounts. Platforms that own fraud and dispute liability can lengthen the delay, up to 31 days. The payout interval then controls when available funds are sent: daily, weekly on chosen days, monthly on chosen dates, or manual.
Manual payouts let you hold funds until something happens, such as delivery confirmed or content approved, then pay through the Payouts API. Stripe states plainly that it does not provide escrow, and funds must be paid out within a holding period: two years in the United States, 10 days in Thailand and 90 days in other countries, at the time of writing.
## What does Stripe Connect cost?
At the time of writing, Connect is free for the platform if Stripe handles pricing for your users, or $2 per monthly active account plus 0.25% + 25 cents per payout if you handle pricing.
From Stripe's Connect pricing page:
- Option one, Stripe handles pricing: no platform fees for accounts, payout volume, tax reporting or per-payout costs.
- Option two, you handle pricing: $2 per monthly active account, counted in months when payouts reach that account's bank or card, and 0.25% + 25 cents per payout.
- Instant Payouts: 1% of payout volume.
- Cross-border payouts: starting at 0.25% of payout volume.
- Under option two, 1099 tax forms are $2.99 per form e-filed with the IRS.
Card processing is separate, starting at 2.9% + 30 cents per successful card charge in the US. Tax reporting obligations for marketplaces vary, so check with an accountant; this is general information, not tax advice.
## A worked example: a tutoring marketplace
This is an illustration, not a client. A tutoring marketplace takes a $60 payment per lesson and keeps 15 percent. Each tutor gets a connected account with Express Dashboard access, the platform collecting fees and covering losses. Payments are destination charges with a $9 application fee.
Payouts are weekly on Mondays, so tutors know when to expect money, and the first payout lands about a week after their first paid lesson, which the onboarding screen says up front. With 80 tutors paid in a month at an average of $600 each, and four weekly payouts per tutor, option two costs 80 times $2, plus 0.25% of $48,000 and 320 payouts at 25 cents, about $360 a month in Connect fees on top of card processing. The founder builds that into the 15 percent.
## What mistakes cause payout problems?
The most common mistake is trusting the redirect back from Stripe instead of webhooks for account and payment status.
Others I see often:
- Missing or misconfigured webhooks, which I covered in "Stripe payment went through but your app did not update? Fix the webhook".
- Letting sellers take orders before payouts are enabled.
- No plan for refunds after a seller has been paid, which is why losses responsibility matters.
- Building on legacy account types from an old tutorial without realising there is a newer path.
- Going live without testing onboarding and payouts end to end. "Stripe test mode to live mode: the checklist I use before taking payments" covers that.
## The bottom line
For a new marketplace, configure connected accounts by Dashboard access and responsibilities rather than the old Standard, Express and Custom types, and let Stripe handle onboarding and identity checks. Use destination charges or separate charges and transfers, set a payout schedule sellers can rely on, and trust webhooks over redirects. Budget for Connect fees if you control pricing. If you want payments and payouts built into your marketplace MVP, my SaaS MVP service page explains how I scope it.`,
  },
];
