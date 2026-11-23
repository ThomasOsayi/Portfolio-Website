// Generated articles, set 05 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen05: Post[] = [
  {
    slug: 'take-deposits-online-to-reduce-no-shows',
    title: 'How to take deposits online to reduce no-shows',
    description: 'Deposits, full prepayment or a card on file: how each one cuts no-shows, how to set them up in your booking tool or with Stripe, and what your policy should say.',
    date: d,
    keywords: ['online booking deposits', 'take deposits online', 'reduce no-shows', 'booking deposit policy', 'Stripe deposits for appointments'],
    service: 'nextjs-website-development',
    shortAnswer: 'Ask for a deposit at the moment of booking, keep it small enough that it does not scare off new clients, and publish a short, clear policy on when it is refunded. Most booking tools can collect deposits on a paid plan, and a custom site can do the same with Stripe Checkout and a webhook.',
    takeaways: [
      'A deposit works because it turns a free reservation into a small commitment the client has already paid for.',
      'Choose between a deposit, full prepayment and a card on file based on how expensive an empty slot is for you.',
      'Card holds expire after about a week, so appointments booked further out need a saved card or a captured deposit instead.',
      'The written policy matters as much as the payment step, because a vague policy leads to disputes and chargebacks.',
      'Start with the deposit feature in the booking tool you already use and go custom only when that tool cannot do what you need.',
    ],
    faqs: [
      { q: 'How much should a booking deposit be?', a: 'Most appointment businesses ask for a flat amount or a share of the service price that covers the cost of an empty slot without being so high that new clients hesitate.' },
      { q: 'Is a deposit better than charging a no-show fee later?', a: 'A deposit is usually easier to enforce, because the money is already collected and you are not trying to charge a card after the client has gone quiet.' },
      { q: 'Can I keep the deposit if a client cancels late?', a: 'You can if your policy says so clearly and the client agreed to it at booking, but have a professional review the wording because consumer rules vary.' },
      { q: 'Does Stripe return its fee when I refund a deposit?', a: 'At the time of writing Stripe keeps the processing fee from the original payment when you issue a refund, so frequent refunds cost you a little each time.' },
      { q: 'What does it cost to add deposits to a website?', a: 'Thomas Osayi builds business sites with a booking form from $450 and full custom builds with a Stripe deposit flow from $1,200.' },
    ],
    body: `An empty chair is the most expensive thing in an appointment business. The time was blocked, someone else could have had it, and the client who booked it is not answering their phone. Reminder texts help, but they only reach people who still intend to show up. A deposit changes the decision itself, because the client has already put money down.
This guide covers the three ways to collect money at booking, how much to ask for, how to set it up in a booking tool or on a custom site with Stripe, and the policy wording that keeps deposits from turning into arguments.
## Do deposits actually reduce no-shows?
Yes, because a deposit converts a free hold on your calendar into a small purchase, and people treat purchases differently from reservations.
A free booking costs the client nothing to abandon. They book on a Sunday night, their week fills up, and skipping the appointment feels like no loss to them. Once they have paid even a modest amount, missing the visit means losing that money, so they either show up or cancel early enough for you to refill the slot. That second outcome is half the value: a cancellation two days out is a slot you can sell, while a silent no-show is not.
Deposits also filter bookings. A few people who would have booked and vanished will not book at all, but those were never real appointments.
The more expensive an empty slot is, the more a deposit pays for itself.
## Deposit, prepayment or card on file: which should I use?
Use a deposit for most services, full prepayment for short fixed-price services, and a card on file only when your booking window is short or your tool handles it for you.
### A partial deposit
Best for: services priced high enough that a no-show really hurts, and clients who are new to you.
How it works: the client pays part of the price when booking, and the rest is due at the appointment.
Pros: real commitment, low friction, and the money is already in your account.
Cons: you need a clear rule for refunds and for applying the deposit to the final bill.
### Full prepayment
Best for: short, fixed-price services, packages and classes.
How it works: the client pays the whole price online.
Pros: no balance to collect at checkout and no awkward conversation at the desk.
Cons: more hesitation from first-time clients, and more refunds to process when people reschedule.
### A card on file
Best for: businesses that only want to charge when someone breaks the policy.
How it works: the client saves a card at booking, and you charge a fee only for a late cancellation or no-show.
Pros: nothing is charged for clients who show up.
Cons: you are charging after the fact, which invites disputes, and a simple hold does not last long. Stripe documents that an online card authorization is typically valid for about seven days, so a hold placed for an appointment three weeks out will expire before the visit.
## How much should the deposit be?
Set the deposit at roughly what an empty slot costs you, then round it to a number that does not make a new client stop and think.
There is no single right figure, but the reasoning is simple. Work out what you lose when a slot goes empty: the service price, minus product you did not use, plus the time you could have sold to someone else. The deposit does not need to cover all of that. It needs to be large enough that skipping feels like a loss to the client.
Common structures:
- A flat amount per booking, which is easy to explain and works when services are similarly priced.
- A percentage of the service price, which scales for long or expensive services.
- A flat amount per service, for menus where a client books several services in one visit.
- Full prepayment for first-time clients only, with regulars on a smaller deposit or none at all.
That last option is underrated. Regulars rarely need a deposit, and asking for one can feel like distrust, so be strict only where no-shows actually happen.
> Put the deposit amount next to the price on your service menu, not only in the booking flow. A client who sees it early is not surprised at checkout and is less likely to abandon the booking.
## How do I take deposits with the booking tool I already use?
Turn on the deposit or prepayment setting in your current booking tool first, because it keeps your calendar, reminders and payments in one place.
Most appointment platforms used by salons, studios and clinics offer some version of deposits, prepayment or card-on-file protection, but usually only on paid tiers. Square Appointments is a good example of how this is split. At the time of writing, its help center lists full prepayment on the free plan, while holding a card to charge no-show or late cancellation fees requires a paid Plus or Premium tier. Square also notes that clients cannot cancel prepaid appointments themselves, so refunds and enforcement fall to you.
Before you pay for an upgrade, check four things in your tool:
- Whether deposits are a fixed amount, a percentage, or both.
- Whether the deposit is applied automatically to the final bill.
- How refunds work when you cancel or the client reschedules inside the policy window.
- Whether the booking page can be embedded on your site or only linked to.
If the tool does all of this, embed it and style the surrounding page so the booking step feels like your site. I wrote about that choice in more detail in "Online booking for your website: embed a tool or build it custom?"
![The first step of the booking flow I built for Astiglow, a waxing studio: choose a service, with prices shown.](/shots/astiglow-book.jpg)
For Astiglow, a waxing studio, the brief was simple: let clients see services and prices and book without calling. Prices sit right in the first booking step, which is also where a deposit amount belongs if a studio adds one, so the client knows what they are paying before they pick a time.
## How does a custom deposit flow work with Stripe?
A custom flow creates a pending booking, sends the client to Stripe Checkout for the deposit, and confirms the booking only when Stripe tells your server the payment succeeded.
This is the path when your booking tool cannot express your rules, or when bookings live in your own system. The pieces on a Next.js site look like this:
- The client chooses a service and time. Your server saves a booking with status pending and holds that slot for a short window, for example fifteen minutes.
- The server creates a Stripe Checkout Session in payment mode for the deposit amount, with the booking ID in metadata, and redirects the client to it.
- Stripe sends a checkout.session.completed event to your webhook route, for example app/api/stripe/webhook/route.ts. The route verifies the signature with STRIPE_WEBHOOK_SECRET, finds the booking by its ID, and marks it confirmed.
- The client gets a confirmation email with the date, the amount paid, the balance due and the cancellation policy.
- A scheduled job releases pending bookings that were never paid, so abandoned checkouts do not block your calendar.
The most common bug I see is confirming the booking on the success page instead of in the webhook. Clients close tabs, phones lose signal, and the success page never loads. If your bookings ever show as unpaid when Stripe shows them as paid, my post "Stripe payment went through but your app did not update? Fix the webhook" walks through the fix.
For bookings far in the future, do not rely on an authorization hold. Either capture the deposit at booking, or save the card with a SetupIntent and charge any fee later.
On cost: Stripe lists 2.9% plus 30 cents per successful domestic card payment at the time of writing, and it keeps that fee when you refund. A refund-friendly policy is good for clients, but every refunded deposit still costs you the fee.
## What should my deposit and cancellation policy say?
Your policy should state the amount, when it is refunded, when it is kept, and how it is applied to the final bill, in plain sentences a client can read in under a minute.
A policy that holds up covers:
- The deposit amount, or how it is calculated.
- The cancellation window, for example 48 hours before the appointment, and what happens inside and outside it.
- Whether the deposit can move to a rescheduled appointment, and how many times.
- What happens if you cancel: a full refund, always.
- Lateness: how many minutes late counts as a no-show.
- Exceptions you are willing to make, such as emergencies, at your discretion.
Show the policy in the booking flow with a checkbox the client ticks before paying, include it in the confirmation email, and keep a copy on a policies page. That gives you a record that the client saw and agreed to it, which is what you need if a client disputes the charge with their bank.
This is general information, not legal advice. Consumer protection rules vary, and if you plan to keep deposits or charge fees, have a qualified professional review the wording before you enforce it.
## A worked example: a brow studio adds deposits
Here is an illustration with a made-up business. A two-chair brow and lash studio in Pasadena takes all bookings online with no payment. Fills are quick and cheap, but full lash sets run two hours, and when a client skips one, half a day is gone.
The owner sets three rules. Full sets and lash lifts require a flat deposit, applied to the bill. Quick services need no deposit for returning clients, but first-time clients prepay. The cancellation window is 48 hours, and a deposit can move to a new date once.
She turns on prepayment and deposits in her booking tool's paid tier, adds the deposit amount next to each price on the service menu, and rewrites the policy as six short sentences. The confirmation email repeats the balance due and the window. Late cancellations still happen, but now most come early enough to fill the slot from a waitlist, and the ones that do not are covered by the deposit.
No custom code was needed. A custom build would only make sense if her rules outgrew the tool.
## What mistakes make deposits backfire?
Most deposit problems come from surprise: a client who did not expect the charge, did not understand the policy, or could not find a way to reschedule.
- Hiding the deposit until the payment screen. Clients feel tricked and abandon the booking.
- A policy written like a contract. Nobody reads it, and then everybody argues about it.
- No self-service rescheduling. If the only way to move a booking is to call during business hours, clients give up and simply do not come.
- Charging regulars the same as strangers. It annoys your best clients and does little for no-shows.
- Confirming bookings on the success page instead of the webhook, which leaves paid clients without a confirmation.
- Forgetting packages. Astiglow sells packages of 11 sessions for the price of 9, and prepaid packages are a deposit in disguise. Clients who have already paid for sessions rarely skip them, so make sure package holders are not asked for a second deposit.
![Astiglow's services menu, listing each service with its price and duration.](/shots/astiglow-services.jpg)
## When should I hire help instead of doing it myself?
Do it yourself when your booking tool has a deposit setting, and hire help when your rules do not fit the tool or your bookings need to live on your own site.
Flipping on a setting and rewriting a policy is an afternoon's work. Hiring makes sense when you need a branded booking page, deposit rules the tool cannot express, or bookings tied to memberships or packages.
For reference, my Business Site package starts at $450 and includes a booking or quote form, which covers embedding a booking tool properly. A custom booking flow with Stripe deposits, webhooks and an admin view is a Full Custom Build, from $1,200. The website cost calculator on my site gives a quick estimate for your own mix of pages and features.
## The bottom line
Deposits reduce no-shows because they turn a free hold into a small commitment. Pick the structure that matches how costly an empty slot is: a partial deposit for most services, prepayment for short fixed-price ones, and a saved card only when your tool handles it well. Show the amount early, write the policy in plain sentences, and let clients reschedule without calling. Start with the deposit feature in the booking tool you already pay for, and build a custom Stripe flow only when your rules outgrow it.`,
    sources: [
      { title: 'Pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
      { title: 'Place a hold on a payment method', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/payments/place-a-hold-on-a-payment-method' },
      { title: 'Manage booking cancellations and prepayment policies', publisher: 'Square Support', url: 'https://squareup.com/help/us/en/article/5493-manage-booking-cancellations-and-prepayment-policies' },
      { title: 'Cancellation policy feature', publisher: 'Square', url: 'https://squareup.com/us/en/appointments/features/cancellation-policy' },
    ],
  },
  {
    slug: 'sell-gift-cards-on-your-website',
    title: 'How to sell gift cards on your website',
    description: 'Four ways to sell gift cards online: Square, Shopify, your booking tool or a custom Stripe build. What each costs, how redemption works and the California rules to know.',
    date: d,
    keywords: ['sell gift cards on website', 'online gift cards for small business', 'digital gift cards', 'California gift card law', 'Square eGift cards'],
    service: 'nextjs-website-development',
    shortAnswer: 'The easiest way is to use the gift card feature in the system you already take payments with, such as Square, Shopify or your booking tool, and link or embed its purchase page on your site. Build a custom gift card system with Stripe only when you need redemption across channels or rules those tools cannot handle.',
    takeaways: [
      'Gift cards need a balance ledger and a redemption point, so the best system is the one connected to where customers actually pay.',
      'Square eGift cards are free to set up and Shopify includes gift cards on every plan, at the time of writing.',
      'A custom Stripe gift card system means building codes, balances, partial redemption and emails yourself.',
      'California generally bans expiration dates and service fees on gift cards and requires cash back for small balances.',
    ],
    faqs: [
      { q: 'What is the cheapest way to sell gift cards online?', a: 'Using the gift card feature in the payment or store system you already use is usually cheapest, because setup is often free and you only pay normal processing and load fees.' },
      { q: 'Can gift cards expire in California?', a: 'Under California Civil Code section 1749.5, gift certificates sold to the public generally cannot carry an expiration date, with narrow exceptions such as some free promotional cards.' },
      { q: 'Do I have to give cash back for a small gift card balance in California?', a: 'Since April 1, 2026, California requires cash redemption on request for gift card balances under $15, up from $10 before.' },
      { q: 'Can I sell gift cards on a website that is not on Shopify?', a: 'Yes, you can link to or embed a gift card page from Square or your booking tool, or have a developer build gift cards with Stripe.' },
      { q: 'How much does it cost to add gift cards to a website?', a: 'Thomas Osayi adds a hosted gift card page to a business site from $450 and builds custom gift card systems as part of a Full Custom Build from $1,200.' },
    ],
    body: `Gift cards are money paid in advance for a visit that has not happened yet. For a restaurant, salon or shop, that is a good deal: cash today, a customer who comes in later, and often a new customer who would not have found you otherwise. The hard part is not selling them. It is tracking every balance and making sure each card works at the counter.
This guide compares the four ways to sell gift cards from your website, explains what a custom build involves, and covers the California rules that apply to every option. The legal section is general information, not legal advice.
## Can a small business sell gift cards on its own website?
Yes, and the simplest setup takes an afternoon, as long as the gift cards come from the same system your staff use to take payment.
A gift card is not a product like a mug. It is a stored balance that someone redeems later, sometimes in pieces. That means three things must work: a way to buy the card online, a way to deliver it to the buyer or recipient, and a way to look up and deduct the balance when it is used. If your website sells cards from one system and your counter uses another, someone ends up checking codes by hand.
So the first question is where your customers pay. A cafe that runs Square at the counter should sell Square gift cards. A clothing brand on Shopify should use Shopify gift cards. A studio that runs everything through a booking platform should check whether that platform sells gift cards that redeem against appointments. Your website then becomes the shop window: a gift cards page that explains the offer and sends people to the purchase step.
## What are my options for selling gift cards online?
There are four realistic routes, from a hosted page you link to, all the way to a system built into your own site.
### Square eGift cards
Best for: restaurants, cafes and shops that already take payments with Square.
Cost range: at the time of writing, Square says eGift cards are free to set up, with a load fee of up to 2.5% on each amount added and 2.9% plus 30 cents processing on its eGift ordering page. Redemption has no extra fee.
Pros: the same card works online and at your Square register, and balances stay in one place.
Cons: the ordering page is Square's, so the styling is limited, and you link to it rather than owning the checkout.
### Shopify gift cards
Best for: online stores already on Shopify.
Cost range: at the time of writing, Shopify's help center says gift cards are available on all subscription plans. Gift card products can go up to $10,000, and cards issued from the admin up to $2,000 unless support raises the limit.
Pros: built into the store and checkout, with balances visible in the admin and at Shopify POS.
Cons: a card redeems only at the store that issued it, and Shopify notes that for stores created on or after May 12, 2025, the portion of an order paid by gift card can carry third-party transaction fees.
### Your booking or point of sale tool
Best for: salons, spas and studios that book and pay through one platform.
Cost range: often included in a paid plan, but check the tier before promising gift cards for the holidays.
Pros: cards redeem against appointments, and staff already know the system.
Cons: features vary widely, and some tools only sell physical cards or a fixed set of amounts.
### A custom build with Stripe
Best for: businesses with their own ordering or booking system, or gift cards that must work across several channels.
Cost range: a real development project, usually part of a larger custom build, plus Stripe processing at 2.9% plus 30 cents per domestic card payment at the time of writing.
Pros: full control over design, amounts, delivery and reporting.
Cons: you own the ledger, the security and the bugs.
## How does a custom gift card system work?
A custom system sells the card through a normal Stripe payment, then stores a code and a balance in your own database and deducts from that balance at checkout.
Stripe takes the money. It does not track gift card balances, so the gift card itself lives in your app. The pieces:
- A purchase page with amount choices, a custom amount field, sender and recipient names, a message and an optional delivery date.
- A Stripe Checkout Session for the amount. When the checkout.session.completed webhook arrives, the server creates the card.
- A gift card record with a random code, at least 16 characters and not guessable, plus the original amount, current balance and status.
- A transactions table that records every issue, redemption and refund. The balance should always equal the sum of these rows, never a number someone edits directly.
- A redemption step in your checkout or point of sale that validates the code, deducts up to the order total, and records the transaction in one database operation, so two simultaneous orders cannot spend the same balance.
- Emails: a receipt to the buyer and the card itself to the recipient, sent on the chosen date by a scheduled job.
- A small admin view to look up a card, see its history and void it if it was bought with a stolen card.
The parts people underestimate are partial redemption, rate limiting on code checks so nobody can guess codes, and the scheduled delivery. None are hard individually, but together they turn a weekend feature into a real piece of software.
> If your counter does not run on your own software, a custom online gift card will not redeem there without extra work. Check where cards will be spent before you choose where they are sold.
## What does California law say about gift cards?
California generally bans expiration dates and service fees on gift cards sold to the public, and it requires cash back for small balances on request.
The main rule is California Civil Code section 1749.5. In general terms:
- It is unlawful to sell a gift certificate with an expiration date.
- It is unlawful to sell one with a service fee, including a dormancy fee, apart from a narrow exception for small, long-dormant balances that meets several conditions printed on the card.
- Cards must be redeemable for their cash value or replaced at no cost.
- Since April 1, 2026, a balance under $15 must be redeemable in cash on request. Senate Bill 22 raised that threshold from $10, which had been in place since 2008.
There are exceptions. Cards given away free as part of a loyalty or promotional program, and cards for perishable food, can carry an expiration date if it is printed clearly on the front in capital letters. A free "$10 off your next visit" card from a promotion is treated differently from a gift card someone paid for.
This is a general summary, not legal advice. Laws change, other states have different rules, and a short consultation with a qualified professional is worth it before you print terms on cards.
## Gift cards, promo vouchers and packages: what is the difference?
A gift card is prepaid money, a promo voucher is a discount you give away, and a package is prepaid services, and each one follows different rules.
Mixing them up causes real problems. If you sell a "$100 gift card for $80" during a holiday sale, the customer paid for it, so treat the full balance as a gift card. Many owners prefer to sell the card at face value and give a separate promotional voucher as a bonus, because the bonus can then follow promotional rules, including a clearly printed expiration date where that is allowed.
Packages are a third category. They are prepaid sessions, not a cash balance.
![Astiglow's packages page: 11 sessions for the price of 9.](/shots/astiglow-packages.jpg)
On Astiglow, the waxing studio site I built, packages get their own page: 11 sessions for the price of 9. A package is a commitment to regular visits, while a gift card is usually a present for someone else. Present them separately on your site, so a shopper looking for a gift does not land on a package offer meant for regulars, and the other way around.
## A worked example: a restaurant adds gift cards before the holidays
Here is an illustration with a made-up business. A neighborhood restaurant in Silver Lake runs Square at the counter and has a simple website with a menu, hours and a reservations link. Every December, people call asking for gift cards, and the staff write paper certificates by hand.
The owner turns on Square eGift cards, sets amounts of $25, $50 and $100 plus a custom amount, and uploads a card design using the restaurant's photos. On the website, a new Gift cards page explains how the card works, says it never expires, and links to the Square ordering page. A small banner on the homepage runs from Thanksgiving to New Year's.
Cards bought online arrive by email and redeem at the register like any other Square gift card. Staff do not track paper certificates, the balance is always right, and a guest with a $6 balance left can ask for it in cash without the server having to call the owner.
The website part of this is a page, a banner and a few links. A custom system would only make sense if the restaurant ran its own online ordering and wanted cards to work there and at the counter from one ledger.
## What mistakes should I avoid when selling gift cards?
Most gift card mistakes come from selling cards in one system and redeeming them in another, or from terms that break the rules.
- Printing an expiration date on paid gift cards in California.
- Short, guessable codes, or codes that can be checked without rate limiting.
- Editing balances by hand instead of recording transactions, which makes disputes impossible to settle.
- No plan for scheduled delivery, so a birthday card arrives the moment it is bought.
- Hiding the gift card page. Put it in the main navigation from November through December and in the footer the rest of the year.
- Forgetting your bookkeeping. Money from unredeemed cards is usually not treated as earned revenue until the card is used, so ask your accountant how to record it.
## When should I hire a developer for gift cards?
Hire a developer when gift cards must work inside your own ordering or booking system, or when you want a branded purchase flow on your site rather than a hosted page.
If you use Square, Shopify or a booking platform with gift cards, the work is mostly setup plus a good page on your site. My Business Site package, from $450, covers a site with a dedicated gift cards page and a clean handoff to the hosted purchase step. A custom gift card system with Stripe, a ledger, redemption and an admin view belongs in a Full Custom Build, from $1,200, and usually sits next to custom ordering or booking. Before you decide, list where cards will be bought and where they will be spent. That answer usually picks the option for you.
## The bottom line
Sell gift cards from the system you already take payments with, because the hard part is redemption, not the sale. Square and Shopify make online gift cards easy if you already use them, booking platforms often include them, and a custom Stripe system is for businesses that run their own ordering or booking. Whatever you choose, follow California's rules: no expiration dates or service fees on paid cards, and cash back for balances under $15 on request.`,
    sources: [
      { title: 'California Civil Code section 1749.5', publisher: 'California Public Law', url: 'https://california.public.law/codes/ca_civ_code_section_1749.5' },
      { title: 'California raises gift card cash-out threshold to $15', publisher: 'Morgan Lewis', url: 'https://www.morganlewis.com/pubs/2026/03/california-raises-gift-card-cash-out-threshold-to-15' },
      { title: 'Gift cards considerations and overview', publisher: 'Shopify Help Center', url: 'https://help.shopify.com/en/manual/products/gift-card-products/overview' },
      { title: 'Square Gift Cards', publisher: 'Square', url: 'https://squareup.com/gift-cards' },
      { title: 'Pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
    ],
  },
  {
    slug: 'how-to-launch-a-clothing-brand-website',
    title: 'How to launch a clothing brand website that sells',
    description: 'What a clothing brand website needs at launch: drops, product pages, size guides, an email list and analytics, plus realistic costs and a launch timeline.',
    date: d,
    keywords: ['clothing brand website', 'launch a clothing brand online', 'streetwear website', 'apparel product page', 'size guide for clothing website'],
    service: 'nextjs-website-development',
    shortAnswer: 'A clothing brand website needs a fast home page that shows the look, product pages with clear sizing and colorways, a size guide, an email signup that works before you have stock, and tracking for adds to bag. Launch with a small, well-shot first drop and an email list, not a huge catalog.',
    takeaways: [
      'Your email list is your launch, so start collecting signups weeks before the first drop goes live.',
      'Product pages sell clothing through photos, colorways and sizing confidence, not long descriptions.',
      'A size guide with real measurements in inches and centimeters prevents returns and repeat questions.',
      'Track adds to bag per product and colorway, because that is the number that tells you what to restock.',
      'Keep the catalog as structured data so filters, product pages and reports always agree.',
    ],
    faqs: [
      { q: 'Should a new clothing brand use Shopify or a custom site?', a: 'Shopify is the faster route for most new brands that need checkout, inventory and shipping now, while a custom site makes sense when the look, the drop mechanics or the admin tools need to go beyond a theme.' },
      { q: 'How many products should I launch with?', a: 'A focused first drop that you can photograph consistently and keep in stock usually launches better than a large catalog with gaps.' },
      { q: 'What should a clothing size guide include?', a: 'It should include body or garment measurements for every size in inches and centimeters, how to measure, and a note on fit, such as relaxed or true to size.' },
      { q: 'Do I need an email list before launch?', a: 'Yes, because a launch-day email to people who asked to be notified is usually the most reliable source of first-day sales for a new brand.' },
      { q: 'How much does a clothing brand website cost?', a: 'Thomas Osayi builds launch sites from $450 and custom storefronts with admin tools from $1,200, and his LACEUP storefront shipped inside a 14-day window.' },
    ],
    body: `Most new clothing brands do the hard part first. They source blanks or cut and sew, approve samples, shoot the first drop, and build an audience on Instagram or TikTok. Then the website becomes a rush job the week before launch, and the store that should turn all that attention into orders ends up looking like a template with the logo swapped in.
I built LACEUP, a basketball apparel storefront, so this guide draws on that project: what a clothing site needs at launch, how to structure product pages and size guides, how to build an email list before you have stock, and what it costs.
## What does a clothing brand website need at launch?
At launch you need five things: a home page that shows the look, a shop with filters, product pages with sizing, a size guide, and an email signup.
Everything else can wait. Lookbooks, blogs, loyalty programs and wholesale portals are nice, but none of them sells your first drop. The launch site has one job: take someone who saw a video, show them the product in a way that matches the video, and get them to add it to their bag in the right size.
![The LACEUP storefront hero, "Built for the run."](/shots/laceup-home.jpg)
For LACEUP, the brief was a store that looks like it belongs next to the big athletic labels, plus a back office the owner could run himself. I studied how Nike, Alo and Lululemon handle the same problems: big editorial photography, quiet type, generous spacing, and product cards that show the next colorway on hover. A new brand gets taken seriously when those details match what shoppers already expect.
The launch checklist I work from:
- Home page with a hero image, the new drop, shop by category and a short brand story.
- Shop page with category, size and color filters that only show options that exist.
- Product pages with a gallery, colorway switcher, size selector and add to bag.
- A size guide reachable from every product page.
- Email signup in the footer and in a launch banner.
- Contact page, shipping and returns policy, and a privacy policy.
## Should I build on Shopify or go custom?
For most first-time brands, Shopify is the faster and safer start, and custom makes sense when the experience or the admin side needs to go beyond what a theme allows.
Shopify gives you checkout, inventory, taxes, shipping labels and a big app ecosystem on day one. A custom Next.js storefront gives you full control over design, speed and drop mechanics, and it can connect to Stripe for payments or to Shopify behind the scenes. I compared the two in detail in "Shopify vs a custom Next.js store: when does custom make sense?", and the architecture choice between a Shopify theme and a headless build has its own post, "Headless Shopify vs a Shopify theme".
LACEUP went custom because the brand wanted a launch-ready showcase store first, without live payments yet. The catalog and bag were structured so Stripe can be added later without reworking the pages. That is a reasonable path when you want to show retailers, collaborators or investors a polished store before you are ready to fulfill orders.
## How should I plan a product drop on the website?
Plan the drop as a sequence: a teaser page that collects emails, a launch moment with a clear time, and a live store that can handle the traffic.
A drop works because it creates a date people can plan around. Your site should support that:
- Before the drop, the new collection page shows photos with a "Notify me" signup instead of prices and add to bag buttons.
- Announce the exact launch time with the time zone. "Friday 10am Pacific" is clearer than "this Friday".
- At launch, products switch to live. On a custom site this can be a publish date on each product, so nobody has to flip switches at 9:59.
- Low stock messages should be honest. "Only 3 left in M" is useful when true and damaging when invented.
- Sold out sizes stay visible but disabled, with a "Notify me when back" option. That list tells you what to reorder.
Traffic spikes are less of a worry than they used to be. Static product pages served from a CDN, which is how Next.js on Vercel handles a catalog like this, do not slow down when a few thousand people arrive at once. The part to test is checkout, because that talks to your payment provider and inventory.
## What makes a clothing product page sell?
A product page sells clothing when the photos answer "how does it look on a body", the colorways are easy to compare, and the size choice feels safe.
![A LACEUP product page with gallery, size selector and add to bag for a $52 reversible mesh jersey.](/shots/laceup-products-reversible-mesh-jersey.jpg)
This is the LACEUP product page for a $52 reversible mesh jersey. Each product page shows the current colorway, the other colorway or a second pose, and a standalone shot of the product. The product photography was kept consistent from shot to shot, so the same garment looks the same in every image. Mismatched images make a new brand look unfinished faster than anything else.
What belongs on the page, top to bottom:
- Gallery with on-body, flat and detail shots, and a crop that works on a phone.
- Name, price and colorway swatches. Picking a swatch should switch the photos.
- Size selector with sold out sizes disabled, and a size guide link right next to it.
- Add to bag that confirms the size and color it added.
- Fit notes in one line: relaxed fit, model is 6 foot 2 wearing L.
- Fabric, care and shipping in short sections that can be expanded.
For search, each colorway should be a variant of one product, not a separate product, and your product structured data should describe size and color. Google documents a ProductGroup pattern for exactly this, which helps your products appear correctly in shopping results.
## How do I build a size guide shoppers trust?
Build the size guide from real garment measurements in a simple table, explain how to measure, and say plainly how each item fits.
![The LACEUP size guide table.](/shots/laceup-size-guide.jpg)
Sizing is the biggest worry for anyone buying clothes online from a brand they have not tried. A good size guide removes that worry and cuts returns. The LACEUP size guide is a plain table, which is exactly what it should be.
What to include:
- Measurements for every size, in inches and centimeters.
- Whether the numbers are body measurements or garment measurements. Mixing them up is the most common size guide error.
- How to measure: chest across the widest point, length from the high point of the shoulder, and so on.
- A fit statement per product, since a boxy tee and a fitted compression top in the same size are not the same.
- If your brand runs small or large compared to well-known labels, say so.
Keep size guides as data, not images. A table in text loads faster, works with screen readers, and can be updated without redesigning a graphic.
> Ask your manufacturer for the tech pack measurements and measure a few finished samples yourself. Samples often come out slightly off from the spec, and your size guide should describe what customers actually receive.
## How do I build an email list before my first drop?
Start collecting emails as soon as you have photos, offer early access instead of a discount, and send a launch email at the exact time the drop goes live.
For a new brand, the email list is the launch. Social reach rises and falls with the algorithm, but people who gave you their email asked to hear from you. On LACEUP, the newsletter signup sits in the footer and every signup lands in a Subscribers view in the admin, with a CSV export so the owner can move the list into any email tool.
Practical steps:
- Put a signup in the footer of every page and a short banner on the home page.
- Offer early access to the drop, which costs you nothing and fits the drop model, rather than a percentage off.
- Ask for the email only. A name field lowers signups.
- Send a reminder the day before and the launch email at go-live.
- Follow CAN-SPAM in marketing emails: a working unsubscribe link, your physical address, and honoring opt-outs promptly. The FTC publishes a short compliance guide.
## What should I track after launch?
Track adds to bag by product, colorway and size, not just visits, because that tells you what people actually want.
Page views tell you what got attention. Adds to bag tell you what people wanted to buy. LACEUP's admin overview shows visits, product views, adds to bag, checkout attempts, new subscribers and unread messages for 7, 30 or 90 days, and the Products view ranks every product by views and adds to bag with the most-added colorway and size. Before a reorder, that view answers the expensive question: which pieces, which colors, which sizes.
If you are on Shopify, its analytics cover much of this. On a custom site, record these events yourself in your database alongside a privacy-friendly analytics tool.
## What does a clothing brand website cost, and how long does it take?
A launch-ready brand site runs from a few hundred dollars for a simple store front to over a thousand for a custom storefront with an admin dashboard, and it takes two to three weeks.
My packages map onto this:
- Starter Site, from $150 in 7 days: a one-page teaser with photos and an email signup, ideal before the first drop is ready.
- Business Site, from $450 in 14 days: up to five pages, such as home, shop, about, size guide and contact.
- Full Custom Build, from $1,200 in 21 days: a full storefront with product pages, filters and an admin dashboard. LACEUP was delivered inside a 14-day window.
Product photography, samples and Shopify or Stripe fees are separate. The website cost calculator on my site gives a quick estimate for your own catalog size and features.
## A worked example: a first drop of eight pieces
Here is an illustration with a made-up brand. A two-person streetwear label in Long Beach has eight pieces in its first drop, mostly tees and shorts in two colorways each. Six weeks before launch, they put up a one-page site with the lookbook photos and an early access signup, and post the link in every video.
Two weeks out, the full store goes up behind a password. Each product has three photos per colorway, a fit note and a size guide built from measured samples. On launch morning, the drop goes live at 10am, the early access list gets the email at the same minute, and sold out sizes switch to "Notify me". A week later, adds to bag show that one shorts colorway outsold the other three to one, which shapes the reorder.
## The bottom line
A clothing brand website does not need to be big to sell. It needs a home page that matches the look of your content, product pages with consistent photos and easy colorway switching, a size guide built from real measurements, and an email list started weeks before the drop. Choose Shopify when you need checkout and fulfillment on day one, and custom when the experience or the admin tools matter more. Then watch adds to bag, because that number tells you what to make next.`,
    sources: [
      { title: 'Product variant structured data (ProductGroup, Product)', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/product-variants' },
      { title: 'Merchant listing (Product, Offer) structured data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/merchant-listing' },
      { title: 'CAN-SPAM Act: A Compliance Guide for Business', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business' },
    ],
  },
  {
    slug: 'headless-shopify-vs-shopify-theme',
    title: 'Headless Shopify vs a Shopify theme: which architecture fits your store?',
    description: 'A Shopify theme, a customized theme, headless Next.js on the Storefront API, or Hydrogen: how each works, what it costs, what you give up and who each one suits.',
    date: d,
    keywords: ['headless Shopify vs Shopify theme', 'headless Shopify', 'Shopify Storefront API Next.js', 'Shopify Hydrogen', 'custom Shopify theme'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most stores should stay on a Shopify theme, customized where needed, because it keeps the theme editor, apps and checkout working with no extra infrastructure. Go headless with Next.js or Hydrogen on the Storefront API only when the storefront itself needs to do things a theme cannot, and you have a developer to maintain it.',
    takeaways: [
      'A theme and a headless build both use Shopify for products, inventory and checkout; the difference is who renders the storefront.',
      'A customized theme solves most design problems at a fraction of the cost and maintenance of headless.',
      'Headless gives full control of the front end but removes the theme editor and many app integrations that rely on it.',
      'Hydrogen is Shopify\'s own headless framework, built on React Router, with Oxygen hosting included on paid plans at the time of writing.',
    ],
    faqs: [
      { q: 'What is headless Shopify?', a: 'Headless Shopify means Shopify still manages products, inventory and checkout, but a separate front end, such as a Next.js or Hydrogen app, renders the storefront using the Storefront API.' },
      { q: 'Is headless Shopify faster than a theme?', a: 'It can be, but a well-built theme is already fast, and a headless build is only faster if it is engineered carefully around caching and images.' },
      { q: 'Do Shopify apps work on a headless store?', a: 'Apps that only work in the back office keep working, but apps that inject widgets into the theme usually need a custom integration or an alternative on a headless front end.' },
      { q: 'Should I use Hydrogen or Next.js for headless Shopify?', a: 'Hydrogen fits teams that want Shopify\'s own tooling and free Oxygen hosting, while Next.js fits teams that already use it or need the storefront to sit inside a larger custom site.' },
      { q: 'How much does a headless Shopify store cost to build?', a: 'Thomas Osayi builds custom Next.js storefronts as Full Custom Builds from $1,200, with the final price depending on catalog size and integrations.' },
    ],
    body: `"Should we go headless?" usually comes up after a brand has been on Shopify for a while. The store works, sales are fine, but the theme feels limiting, or someone saw a fast, beautiful storefront and learned it was built headless. Before rebuilding, it helps to be clear about what actually changes.
This is not the same question as Shopify versus a custom store. That comparison, which is about choosing a platform, is in my post "Shopify vs a custom Next.js store: when does custom make sense?" Here, Shopify stays. The question is how the storefront on top of it is built.
## What is the difference between headless Shopify and a theme?
With a theme, Shopify renders your storefront, and with headless, your own app renders it while Shopify keeps running products, inventory and checkout.
A Shopify theme is a set of templates that run on Shopify's servers. When a shopper opens a product page, Shopify fills the template with data and sends the page. You edit sections in the theme editor, apps add widgets through app blocks, and everything is hosted for you.
A headless store splits the two halves. Shopify becomes the back end: catalog, inventory, orders, customers and checkout. A separate front end, built with Next.js or Shopify's Hydrogen, fetches data through the Storefront API and renders every page. Shopify's documentation describes the Storefront API as serving products, collections, search and the cart, and handing customers off to checkout.
So headless is not a different platform. It is a different storefront on the same platform, with more control and more responsibility.
## What are the four options?
The options run from least to most custom: a stock theme, a customized theme, headless Next.js on the Storefront API, and Hydrogen on Oxygen.
### A stock Shopify theme
Best for: new stores, small catalogs and teams without a developer.
Cost range: free themes cost nothing, paid themes are a purchase from the Theme Store, and setup time is days.
Pros: the theme editor, full app compatibility and hosting all included. Updates come from the theme developer.
Cons: your store looks like other stores using the same theme, and layout changes are limited to what the sections allow.
### A customized theme
Best for: established stores that need a distinct look or a few custom features.
Cost range: a developer project measured in days to a couple of weeks, depending on how many templates change.
Pros: keeps the theme editor, apps and checkout, while custom sections, templates and Liquid code give you a distinct design.
Cons: heavy customization makes theme updates harder, and you are still working inside Shopify's templating model.
### Headless Next.js with the Storefront API
Best for: brands whose storefront must do things a theme cannot, or that need the store inside a larger custom site.
Cost range: a full custom build, typically weeks of work, plus hosting such as Vercel.
Pros: total design control, any page structure, content from any CMS, and one codebase for the store and the rest of your site.
Cons: no theme editor, apps that inject into the theme need replacing, and you own hosting, caching, previews and every future change.
### Hydrogen on Oxygen
Best for: teams committed to Shopify who want headless with Shopify's own tooling.
Cost range: similar build effort to Next.js. At the time of writing, Shopify says Oxygen hosting is included at no extra charge on its paid plans, including Starter, Basic, Grow, Advanced and Plus.
Pros: built on React Router with Shopify components, cart helpers and CLI preconfigured, and hosting that is integrated with Shopify's CDN.
Cons: the same loss of theme editor and theme apps, and a smaller community than Next.js.
## How does a headless Shopify store actually work?
A headless store calls the Storefront API for products and carts, renders pages in your own app, and hands the shopper to Shopify checkout to pay.
In a Next.js build, the pieces are:
- Shopify's Headless channel, which Shopify describes as one place to create storefronts, get and rotate API tokens, and publish products, without creating a custom app.
- A public token for browser requests and a private token that must stay on the server. In Next.js, keep the private token in an environment variable without the NEXT_PUBLIC_ prefix, so it is never bundled into the browser.
- Product and collection pages rendered on the server and cached, then revalidated when a product changes, often triggered by a Shopify webhook calling a route like app/api/revalidate/route.ts.
- A cart created through the Storefront API, with its ID stored in a cookie.
- A checkout URL from the cart, which sends the shopper to Shopify's checkout for payment.
Checkout stays on Shopify in every option here, which is good: payments, taxes, fraud checks and order creation all keep working as they do on a theme store.
## Does headless make a store faster?
Headless can make a store faster, but only when it is built carefully, and a well-built theme is already quick enough for most stores.
The speed gains people associate with headless come from static or cached pages served at the edge, optimized images, and shipping less JavaScript. A careless headless build can easily be slower than a good theme: client-side data fetching, uncached API calls and huge JavaScript bundles all cost time. Meanwhile, many slow theme stores are slow because of too many apps, large images and third-party scripts, all of which can be fixed without leaving the theme.
If speed is the main reason you are considering headless, run a Core Web Vitals check on your current store first. My post "Core Web Vitals explained for small business owners" covers what the numbers mean. Fixing images and removing unused apps is usually cheaper than a rebuild.
> Before you commit to headless, list every app your store uses and mark which ones put something on the storefront. Each of those is either a custom integration, a replacement or a feature you drop.
## What do I give up by going headless?
You give up the theme editor, easy app widgets, and the ability for non-developers to change most storefront layouts on their own.
On a theme store, a marketer can add a banner, reorder homepage sections or launch a landing page in an afternoon. On a headless store, those changes either go through a developer or through a CMS that the developer has wired up. That is the biggest hidden cost: not the build, but every small change after it.
Other things to plan for:
- Reviews, wishlists, size charts and loyalty widgets usually need API-based integrations.
- Preview of unpublished products and content needs to be built.
- Redirects, sitemaps and structured data become your code, not Shopify's defaults.
- Analytics and pixels need to be added and tested on the new front end.
- Two systems to monitor instead of one.
None of these is a reason not to go headless. They are a reason to budget for them.
## How do I switch from a theme to headless without losing rankings?
Keep every product and collection URL the same where you can, redirect the ones that change, and launch only after the new front end matches the old one on titles, descriptions and structured data.
A theme store gives you URLs like /products/name and /collections/name by default. A headless front end can use any URL structure, which is tempting, but every changed URL is a page Google has to rediscover. The safest plan:
- Export every URL from the current store and from Search Console, and map each one to its new address.
- Keep the /products/ and /collections/ paths unless there is a strong reason to change them.
- Add 301 redirects for anything that moves, in next.config.js or in your hosting configuration.
- Recreate page titles, meta descriptions, canonical tags and product structured data before launch.
- Generate a sitemap from the Storefront API and submit it in Search Console on launch day.
- Watch Search Console for crawl errors for the first few weeks.
The same principles apply to any platform move, and my post "How to move from Wix or Squarespace without losing your Google rankings" walks through them in more detail.
## What does each option cost to build and run?
A stock theme costs almost nothing beyond your plan, a customized theme is a short project, and a headless build is a full custom project with ongoing developer time.
For reference against my own packages: a headless Next.js storefront on the Storefront API is a Full Custom Build, from $1,200 in 21 days for a modest catalog, with larger catalogs, CMS integration and custom features adding to that. Running costs are your Shopify plan, hosting (Vercel for Next.js, or Oxygen for Hydrogen at no extra charge at the time of writing), and a maintenance budget. My post "What does website maintenance cost, and what does it include?" covers that last part.
For comparison, LACEUP, a basketball apparel storefront I built, is a fully custom Next.js store with colorway filters and a Firebase admin, delivered inside a 14-day window. It is not on Shopify, but it shows the kind of front end a headless build produces.
![The LACEUP shop page with category tabs and filters, built as a custom Next.js storefront.](/shots/laceup-shop.jpg)
## A worked example: a brand weighing headless
Here is an illustration with a made-up brand. A skincare brand on Shopify with forty products wants a quiz that recommends a routine, editorial content on every product page, and a faster mobile store. Their agency quote for headless is large, so they ask for a second opinion.
The audit shows the store is slow mostly because of six storefront apps and uncompressed hero images. The quiz can be built as a custom theme section using a small app or a standalone page that writes to the cart through the Storefront API. Editorial content fits in metafields and custom sections.
The recommendation: customize the theme now, remove four apps, rebuild the images, and revisit headless if they later add content-heavy features, like a full magazine or a subscription portal, that the theme genuinely cannot handle.
## Which should I choose?
Choose by who will change the store day to day and what the storefront needs to do.
- New store, no developer: a stock theme. Spend the money on photos and ads.
- Growing store that looks generic: a customized theme. It solves most design problems and keeps everything working.
- Brand with a large custom site, heavy content or features a theme cannot express, and a developer on call: headless Next.js.
- Shopify-first team wanting headless with official tooling and included hosting: Hydrogen on Oxygen.
## The bottom line
A theme and a headless build both run on Shopify, with the same products, inventory and checkout. The difference is who renders the storefront and who maintains it. For most stores, a customized theme gives you a distinct design while keeping the theme editor and apps. Go headless with Next.js or Hydrogen when the storefront itself must do more than a theme can, and budget for the developer time that comes with it, because every small change becomes a code change.`,
    sources: [
      { title: 'Build headless commerce', publisher: 'Shopify Dev Docs', url: 'https://shopify.dev/docs/storefronts/headless' },
      { title: 'Hydrogen and Oxygen fundamentals', publisher: 'Shopify Dev Docs', url: 'https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals' },
      { title: 'Adding, previewing, and buying themes', publisher: 'Shopify Help Center', url: 'https://help.shopify.com/manual/online-store/themes/adding-themes' },
    ],
  },
  {
    slug: 'website-privacy-policy-and-cookie-banner',
    title: 'Do I need a privacy policy and cookie banner on my website?',
    description: 'When a small business website needs a privacy policy and a cookie banner: CalOPPA, CCPA and CPRA basics for California, GDPR for EU visitors, and how analytics fit in.',
    date: d,
    keywords: ['do I need a privacy policy and cookie banner', 'privacy policy for small business website', 'cookie banner', 'CCPA small business website', 'GDPR cookie consent'],
    service: 'nextjs-website-development',
    shortAnswer: 'If your website collects any personal information from Californians, even through a contact form or newsletter signup, California\'s CalOPPA requires a posted privacy policy. A cookie consent banner is not generally required for US-only sites, but you need one before setting non-essential cookies if you target visitors in the EU, and larger businesses covered by the CCPA need opt-out options for sharing data.',
    takeaways: [
      'CalOPPA requires a conspicuously posted privacy policy on any commercial site that collects personal information from California consumers.',
      'The CCPA applies only to businesses that meet at least one threshold, such as $26.625 million in annual revenue at the time of writing.',
      'US law does not generally require a cookie consent banner, but EU rules require consent before non-essential cookies for sites that target EU visitors.',
      'If the CCPA applies, you must honor opt-out signals like Global Privacy Control and offer a link to opt out of selling or sharing data.',
      'Load analytics and ad pixels only after consent where consent is required, rather than showing a banner that changes nothing.',
    ],
    faqs: [
      { q: 'Does a small business website need a privacy policy?', a: 'In most cases yes, because California\'s Online Privacy Protection Act requires one on commercial websites that collect personal information such as names and emails from California consumers.' },
      { q: 'Does the CCPA apply to my small business?', a: 'Only if you meet a threshold, such as at least $26.625 million in annual revenue, buying, selling or sharing data of 100,000 or more California residents or households, or earning half your revenue from selling or sharing personal information.' },
      { q: 'Do US websites need a cookie banner?', a: 'There is no general US requirement for a cookie consent banner, although covered businesses must offer opt-outs for selling or sharing data and sites targeting the EU need consent first.' },
      { q: 'Does Google Analytics need cookie consent?', a: 'For visitors you target in the EU, analytics cookies generally need consent before they are set, while US rules focus on disclosure and opt-outs instead.' },
      { q: 'Is a privacy policy generator good enough?', a: 'A generator is a reasonable start for a simple site if you edit it to match what your site really collects, but have a professional review it if you handle sensitive data.' },
    ],
    body: `Privacy policies and cookie banners are the part of a website most owners copy from somewhere else. A banner appears because another site had one, a privacy policy gets pasted from a template, and nobody checks whether either one matches what the site actually does. That is how you end up with a banner that does nothing and a policy that mentions services you never used.
This guide explains, in plain terms, when California and EU rules ask for a privacy policy and a cookie banner, how analytics and ad pixels fit in, and how to set it up properly on a site. It is general information for small business owners, not legal advice. If you collect sensitive data or have real exposure, talk to a privacy lawyer.
## Do I need a privacy policy on my website?
Almost certainly yes, because California requires one on any commercial website that collects personal information from California consumers.
The law is the California Online Privacy Protection Act, usually called CalOPPA. It applies to operators of commercial websites and online services, including mobile apps, that collect personally identifiable information from California residents. A contact form that asks for a name and email counts. So does a newsletter signup, a booking form or a quote request. CalOPPA is not limited to large companies, and because your site can be visited from anywhere, it reaches businesses outside California too.
CalOPPA asks you to post the policy conspicuously, which in practice means a link in the footer of every page labelled Privacy Policy. The California Attorney General notes that an operator violates the law if it fails to post a compliant policy within 30 days of being notified. That is not a reason to wait. A privacy policy is also expected by payment processors, ad platforms and app stores, and it is one of the pages I put on every site. My post "What pages does a small business website need? A page-by-page plan" lists it with the rest.
## What must a privacy policy include?
Under CalOPPA, a privacy policy must describe what you collect, who you share it with, how you handle tracking signals, and when the policy took effect.
The Attorney General's guidance lists the required parts:
- The categories of personal information collected through the site.
- The categories of third parties you may share it with, such as your email platform, booking tool or payment processor.
- How users can review and request changes to their information, if you offer that.
- How you notify users of material changes to the policy.
- The effective date.
- How you respond to Do Not Track browser signals or similar mechanisms, if you collect information about users' activities over time and across other sites.
- Whether other parties, such as analytics or ad networks, may collect that information while someone uses your site.
The point is accuracy, not length. Before writing, list every form on your site, every tool it sends data to, and every script that loads on the page. Then describe exactly that.
## Does the CCPA apply to my small business?
For most small businesses, no, because the CCPA only covers for-profit businesses that meet at least one of three thresholds.
According to the California Privacy Protection Agency, the CCPA applies to a business that does business in California and meets any one of these:
- Gross annual revenue of at least $26.625 million in the preceding calendar year, a figure adjusted for inflation effective January 1, 2025, at the time of writing.
- Buys, sells or shares the personal information of 100,000 or more California residents or households.
- Earns 50% or more of its annual revenue from selling or sharing California residents' personal information.
The CPRA, approved by California voters in 2020, amended the CCPA rather than replacing it, added the concept of sharing personal information for cross-context behavioral advertising, and created the California Privacy Protection Agency to enforce the law. When people say CCPA today, they usually mean the law as amended by the CPRA.
A local salon, restaurant or contractor will rarely meet these thresholds. A fast-growing online store with heavy ad tracking might reach the 100,000 mark sooner than expected, so it is worth checking each year.
## What does the CCPA require on a website if it applies?
If the CCPA applies, you need a fuller privacy policy, a clear opt-out link, and you must honor browser opt-out signals like Global Privacy Control.
The agency's guidance says covered businesses must, in most cases, place a clear and conspicuous link in the header or footer, labelled something like "Do Not Sell or Share My Personal Information" or "Your Privacy Choices", that lets visitors opt out of the sale or sharing of their data. Covered businesses must also treat a valid opt-out preference signal, such as Global Privacy Control sent by the visitor's browser, as an opt-out request.
On a website, sharing often means ad pixels. If the Meta Pixel, TikTok Pixel or Google Ads tags send visitor data to those platforms for targeted advertising, that can count as sharing. Honoring an opt-out means those tags should not fire for that visitor.
On a Next.js site, this check is straightforward: the browser exposes navigator.globalPrivacyControl, and when it is true, your code should treat the visitor as opted out and skip the advertising scripts.
## Do I need a cookie banner?
For a US-focused site there is no general legal requirement for a cookie consent banner, but you need consent before setting non-essential cookies if you target visitors in the EU.
The cookie banner comes from European law. The ePrivacy Directive requires informed consent before storing or reading non-essential information on a visitor's device, which covers cookies, pixels and local storage. The European Commission's own guidance says that by default, cookies that need consent must not be set until the visitor agrees, and it lists analytics, advertising and social plugin tracking cookies among them. Cookies strictly needed for something the visitor asked for, such as a shopping cart, a login session or security, generally do not need consent.
The GDPR governs what happens to the personal data. It applies to businesses outside the EU when they offer goods or services to people in the EU or monitor their behavior. The Commission notes that simply having customers who travel to the EU does not bring you under it if you do not target EU residents.
So the practical test is: do you ship to the EU, price in euros, run ads there or write content for EU customers? If not, a consent banner is optional. If you do, you need one that actually blocks scripts until consent.
> A banner with only an "OK" button that loads every script the moment the page opens does not give visitors a choice. If you need a banner, make sure declining actually stops the scripts from loading.
## How do analytics and ad pixels fit in?
Analytics and ad pixels are the reason most sites need a banner or opt-out at all, so choose them deliberately and load them conditionally.
Your options, from least to most privacy impact:
- No analytics. Fine for a simple brochure site, though you lose useful data.
- Cookieless, privacy-friendly analytics, which count page views without tracking individuals across sites. These usually fit US disclosure rules with a line in your privacy policy.
- Google Analytics, which sets cookies and sends data to Google. Disclose it, and gate it behind consent for EU visitors.
- Ad pixels from Meta, TikTok or Google Ads, which exist to track visitors for advertising. Disclose them, gate them for EU visitors, and offer opt-outs if the CCPA applies.
On a Next.js site, I load analytics and pixel scripts through a small consent component. Nothing loads until the visitor's choice is known, the choice is stored, and the scripts load only when allowed. The privacy policy then lists exactly the tools in that component.
![The LACEUP footer, with an email signup and payment badges.](/shots/laceup-home-s5.jpg)
A simple example is the footer on LACEUP, a basketball apparel storefront I built. Its newsletter signup collects email addresses, which is personal information, so the privacy policy needs to say what happens to them. LACEUP also records anonymous store activity for its admin dashboard, and the Firebase security rules only allow those activity events with no personal data attached. Building it that way makes the privacy policy simpler and more honest.
## A worked example: a Los Angeles studio
Here is an illustration with a made-up business. A yoga studio in Culver City has a site with a class schedule, a contact form, a newsletter signup and Google Analytics. It also runs Meta ads and has the Meta Pixel installed. It serves local clients only and earns well under the CCPA thresholds.
What it needs: a privacy policy covering the contact form, newsletter, booking tool, Google Analytics and Meta Pixel, with a Do Not Track statement and an effective date, linked in the footer of every page. It does not need a GDPR consent banner, because it does not target EU visitors. It does not need a CCPA opt-out link, because it is not a covered business, although honoring Global Privacy Control is a cheap goodwill step.
If the studio started selling online courses to customers in Europe, the answer would change: a real consent banner that blocks analytics and the pixel until visitors agree.
## What mistakes should I avoid?
The most common mistakes are copying a policy that does not match the site and installing a banner that does not change what loads.
- A template policy mentioning tools you do not use, or missing the ones you do.
- A banner that loads all scripts before the visitor answers.
- No effective date, or a date from three years ago after adding new tools.
- Privacy policy linked only from the homepage instead of every page.
- Forgetting third-party embeds, such as booking widgets, maps and video players, which can set cookies too.
- Collecting more than you need. Every field you remove from a form is one less thing to protect and disclose.
## The bottom line
If your site collects any personal information from Californians, post an accurate privacy policy linked in the footer of every page, because CalOPPA requires it. The CCPA adds opt-out links and Global Privacy Control only for businesses that meet its thresholds. A cookie consent banner is mainly an EU requirement, needed when you target EU visitors, and it must actually block non-essential scripts until consent. Choose your analytics and pixels on purpose, load them conditionally, and describe exactly what your site does. This is general information, not legal advice, so have a professional review your policy if your situation is more complex.`,
    sources: [
      { title: 'Making Your Privacy Practices Public', publisher: 'California Attorney General', url: 'https://oag.ca.gov/sites/all/files/agweb/pdfs/cybersecurity/making_your_privacy_practices_public.pdf' },
      { title: 'Frequently Asked Questions (FAQs)', publisher: 'California Privacy Protection Agency', url: 'https://cppa.ca.gov/faq.html' },
      { title: 'Updated Monetary Thresholds in CCPA', publisher: 'California Privacy Protection Agency', url: 'https://www.cppa.ca.gov/regulations/cpi_adjustment.html' },
      { title: 'Who does the data protection law apply to?', publisher: 'European Commission', url: 'https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/application-gdpr/who-does-data-protection-law-apply_en' },
      { title: 'Cookies and similar technologies', publisher: 'European Commission', url: 'https://commission.europa.eu/resources-partners/europa-web-guide/design-content-and-development/privacy-security-and-legal-notices/cookies-and-similar-technologies_en' },
    ],
  },
];
