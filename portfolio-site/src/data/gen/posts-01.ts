// Generated articles, set 01 (Nov 22 2026). Thomas's prices come only from the packages in seo.ts.
// Third-party prices were checked on the vendor pages listed in each post's sources at the time of writing.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen01: Post[] = [
  {
    slug: 'how-much-does-a-restaurant-website-cost',
    title: 'How much does a restaurant website cost in 2026?',
    description: 'Real price ranges for a restaurant website, from a one-page menu site to a custom build with reservations and pickup ordering, plus the monthly costs owners forget.',
    date: d,
    keywords: ['restaurant website cost', 'how much does a restaurant website cost', 'restaurant website pricing', 'restaurant website design cost', 'cost of a website for a restaurant'],
    service: 'nextjs-website-development',
    shortAnswer: 'A simple restaurant website with the menu, hours, location and a call button costs from about $150 as a one-page custom build, a multi-page site with reservation requests and local SEO runs from about $450, and a custom build with pickup ordering or an admin menu editor starts around $1,200. Restaurant platforms charge monthly instead, from tens of dollars for a general builder to several hundred dollars a month for ordering platforms.',
    takeaways: [
      'The biggest price driver is not design but features: online ordering, reservations and a menu you can edit yourself each add real work.',
      'A one-time custom build usually costs less over three years than a restaurant platform with a monthly fee and a cut of each order.',
      'Third-party delivery apps publish delivery commissions of 15 to 30 percent, so moving even some orders to your own site changes the math quickly.',
      'The menu must be real text on the page, not a PDF, because that is what guests read on a phone and what Google can index.',
      'Budget for the ongoing costs too: domain, hosting, card processing if you take payments, and small updates when the menu changes.',
    ],
    faqs: [
      { q: 'How much does a basic restaurant website cost?', a: 'A basic restaurant website with menu, hours, address, map and a tap-to-call button usually costs from $150 to a few hundred dollars as a custom build, or a monthly fee on a website builder.' },
      { q: 'Is it cheaper to use a website builder for a restaurant?', a: 'It is cheaper in the first month, but a builder or restaurant platform charges every month, so over two or three years a one-time custom site often costs less.' },
      { q: 'How much does it cost to add online ordering to a restaurant website?', a: 'Pickup ordering is the most expensive common feature because it needs a menu data model, a cart, pickup times and notifications, so it usually belongs in a larger custom build rather than a starter site.' },
      { q: 'What are the monthly costs of running a restaurant website?', a: 'Expect a yearly domain fee, hosting that can be free or low cost for a fast static site, card processing on any online payments, and occasional paid updates.' },
      { q: 'What does Thomas Osayi charge for a restaurant website?', a: 'Thomas Osayi builds one-page sites from $150, multi-page sites with a reservation or quote form and local SEO from $450, and custom builds with features like pickup ordering from $1,200.' },
    ],
    sources: [
      { title: 'DoorDash Merchant Pricing', publisher: 'DoorDash', url: 'https://merchants.doordash.com/en-us/pricing' },
      { title: 'Squarespace pricing', publisher: 'Squarespace', url: 'https://squarespace.com/assets/pricing.txt' },
      { title: 'Owner pricing', publisher: 'Owner.com', url: 'https://owner.com/pricing' },
      { title: 'Stripe pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
    ],
    body: `Restaurant owners ask me what a website costs, and the honest answer depends less on how pretty it is and more on what it has to do. A site that shows the menu and the hours is a small job. A site that takes reservations and pickup orders, and lets you change prices yourself on a Tuesday afternoon, is a real piece of software.
This guide breaks down the price ranges I see in 2026, what pushes a restaurant site from one range to the next, the monthly costs most quotes leave out, and how to decide what you actually need before you spend anything.
## What is the short answer on restaurant website cost?
Most independent restaurants land somewhere between $150 and $1,500 for a custom build, or between roughly $20 and $500 a month on a platform, depending on features.
Here is how those ranges line up with my own packages, which are the only prices I can speak for:
- One-page site from $150, built in about 7 days: menu, hours, address, map, photos, tap-to-call and links to your reservation or delivery pages.
- Business site from $450, built in about 14 days: up to five pages such as menu, about, catering, private events and contact, with a reservation request or catering inquiry form and local SEO setup.
- Full custom build from $1,200, built in about 21 days: multi-page site with custom features such as pickup ordering, an admin screen to edit the menu, or a catering request flow.
On the platform side, general builders like Squarespace list plans from $19 to $99 a month billed annually at the time of writing, while restaurant ordering platforms charge much more. Owner.com, for example, lists $249 a month plus a 5 percent restaurant fee per order, or $499 a month flat, at the time of writing.
## What actually drives the price of a restaurant website?
Features drive the price far more than page count or design style.
### The menu
A menu typed as real text, organised into sections with prices and dietary notes, takes longer than uploading a PDF, but it is the single most important part of the site. If you want to edit it yourself, the menu needs to live in a small database or content system with an admin screen, which moves you into the custom build range.
### Reservations
Linking to OpenTable, Resy or Tock costs almost nothing to add. A simple request form that emails the restaurant and confirms to the guest is a modest addition. A full booking system with table inventory is a different product, and most small rooms do not need it. I cover the trade-offs in "Online booking for your website: embed a tool or build it custom?"
### Online ordering
Pickup ordering is the most expensive common feature. It needs a structured menu with modifiers, a cart, pickup time slots, order notifications to the kitchen and, if you take payment online, a payment integration and webhook handling.
### Photography and content
Good food photos do more for a restaurant site than any copy. If you need a shoot, budget for it separately. A developer cannot fix dark phone photos with code.
## What did a real restaurant site include?
New York Nook, a Russian restaurant in Hollywood, is a good example of a full-featured independent restaurant site: menu, reservation requests and pickup ordering, all on the restaurant's own domain.
The homepage puts three actions at the top: reserve a table, order takeout and view the menu. Everything else, the story, the gallery, catering and private events, supports those three. That structure matters for cost because each of those actions is a feature with its own screens and logic, and it is why a site like this sits in the custom build range rather than the one-page range.
![The New York Nook homepage I built, with Reserve a table, Order takeout and View menu buttons in the hero.](/shots/newyorknook-home.jpg)
The menu section shows dishes with prices as real text on the page. That is cheaper to maintain than a designed PDF, and it means a guest searching for a specific dish can land on the site.
![The New York Nook menu section, with dishes and prices written as text rather than an image.](/shots/newyorknook-home-s2.jpg)
## What monthly costs should a restaurant budget for?
Even a one-time build has a few running costs, and you should know them before you compare quotes.
- Domain name: a small yearly fee to your registrar. Keep it in your own account, not the developer's.
- Hosting: a fast pre-built site on a platform like Vercel can be free or low cost. Vercel's Pro plan is $20 per developer seat per month at the time of writing, which some businesses choose for support and team features.
- Card processing: if you take payment online, Stripe's standard US rate is 2.9 percent plus 30 cents per successful card charge at the time of writing.
- Email: a business email address through Google Workspace or similar, billed per user.
- Updates: menu and price changes. If you can edit the menu yourself, this cost drops close to zero. If not, budget for small paid updates, or a maintenance arrangement. I break that down in "What does website maintenance cost, and what does it include?"
> Ask every person who quotes you to list the monthly costs in writing. A low build price with a high monthly fee is not cheap.
## Is a restaurant platform cheaper than a custom site?
A platform is cheaper in month one and usually more expensive by year two or three, especially once ordering fees are counted.
Take a platform at $249 a month. Over three years that is $8,964 in subscription fees alone, before any per-order fee. A $499 flat plan is $17,964 over the same three years. A custom build from $1,200 plus low-cost hosting comes out far lower, even if you pay for a handful of updates along the way.
That does not mean platforms are a bad choice. They bundle marketing tools, apps and support, and they make sense for owners who want everything in one dashboard and do not want to deal with a developer at all. But if what you mainly need is a fast site, a clean menu and a way to take pickup orders, paying a large monthly fee forever is a choice worth questioning. I compare the options side by side in "Toast vs Squarespace vs a custom website for restaurants".
## How do delivery app fees change the math?
Delivery app commissions are often the largest hidden cost in a restaurant's online sales, and they are the main reason owners invest in their own ordering.
At the time of writing, DoorDash publishes Marketplace delivery commissions of 15 percent on Basic, 25 percent on Plus and 30 percent on Premier, with a 6 percent commission on pickup orders. Those percentages come out of every order placed through the app.
Here is an illustration with made-up numbers. A neighbourhood restaurant does $6,000 a month in pickup orders through a delivery app at 6 percent. That is $360 a month, or $4,320 a year. If half of those guests switch to ordering pickup on the restaurant's own site, and the restaurant pays only card processing on those orders, it keeps a meaningful part of that commission every month. Over a year, that alone can cover a custom build.
The bigger win is delivery. If any of your volume is delivery at 25 or 30 percent, even a small shift to direct pickup is worth real money. I walk through the setup in "How to take restaurant orders online without third-party fees".
## What should I avoid when paying for a restaurant website?
The most expensive mistakes are the ones you pay for twice.
- Menu as a PDF or image. Guests pinch and zoom on a phone, Google cannot read it well, and you end up paying to redo it as text later.
- Heavy video and slow templates. Restaurant sites are opened on phones, often on weak signals. A slow homepage loses the guest before the menu loads. "Core Web Vitals explained for small business owners" covers what to check.
- Hours that do not match Google. If your site says open and your Google Business Profile says closed, guests trust neither.
- A domain registered in someone else's name. If a past developer or agency owns the domain, getting it back can take weeks.
- Paying for features you will not use. Do not buy an ordering system if your kitchen cannot handle the extra tickets during the rush.
## Which option is right for my restaurant?
Match the build to what your guests do most, not to what the most expensive quote includes.
- Small cafe or food truck with a short menu: a one-page site from $150 with menu, hours, location, photos and links to your delivery and social pages is enough.
- Sit-down restaurant that takes bookings and catering: a multi-page site from $450 with menu, catering, private events and a reservation request form, plus local SEO setup.
- Restaurant with steady takeout volume: a custom build from $1,200 with pickup ordering and a menu you can edit yourself, so orders move off commission apps.
If you are not sure where you fall, the website cost calculator on my site gives a rough number based on the features you pick, and "Websites for restaurants" shows how I structure restaurant sites.
## How can I keep my restaurant website cost down?
The cheapest way to lower the price is to arrive with your content ready and your features decided.
Most of the time on a small site goes into waiting and rework, not code. A developer who has to chase the current menu, guess at hours and swap photos three times will either charge more or take longer. Before you ask for quotes, gather:
- The current menu as a typed document, with section names, prices and dietary notes, not a photo of the printed menu.
- Ten to twenty good photos of dishes, the room and the exterior, at full resolution.
- Hours, holiday hours, address, phone and the exact name as it appears on your Google Business Profile.
- Login access to your domain registrar, or a decision to buy a new domain in your own name.
- Links to any reservation system, delivery apps and social accounts you already use.
- A short list of the two or three actions that matter most, such as book a table, order pickup or request catering.
Then phase the work. Many restaurants start with a fast menu and info site, watch how guests use it for a couple of months, and add pickup ordering once they know the kitchen can handle direct orders. That spreads the cost and avoids paying for a feature nobody uses. "What to send a web developer before your project starts" has a fuller checklist.
## The bottom line
A restaurant website costs from about $150 for a clean one-page menu site to $1,200 and up for a custom build with pickup ordering and an editable menu. Platforms trade a low start for a monthly fee that adds up. Decide which actions matter most to your guests, book, order or just find you, and pay for those features first. Get every running cost in writing before you sign, keep the domain in your name, and put the menu on the page as text.`,
  },
  {
    slug: 'restaurant-online-ordering-without-third-party-fees',
    title: 'How to take restaurant orders online without third-party fees',
    description: 'How a restaurant online ordering system on your own site works, what it costs compared with delivery app commissions, and how to set up direct pickup ordering.',
    date: d,
    keywords: ['restaurant online ordering system', 'online ordering without third party fees', 'commission free online ordering', 'direct online ordering for restaurants', 'restaurant pickup ordering website'],
    service: 'nextjs-website-development',
    shortAnswer: 'Put a pickup ordering page on your own website, take payment through a processor like Stripe or at the counter, and send guests there from Google, Instagram and your receipts. You still pay card processing, but you skip the per-order commission that delivery apps charge and you keep the guest relationship.',
    takeaways: [
      'Direct ordering works best for pickup first, because delivery needs drivers or a paid delivery service.',
      'A direct order still pays card processing, so the saving is the commission, not every fee.',
      'Your Google Business Profile can show a link to your own ordering page, which is where many guests start.',
      'Keep delivery apps for discovery and delivery, and steer repeat guests to your own pickup page.',
      'The ordering flow must be fast on a phone: menu, cart, pickup time, pay, confirmation, nothing more.',
    ],
    faqs: [
      { q: 'Can a restaurant take online orders without paying commission?', a: 'Yes, by taking pickup orders on its own website, where the main cost is card processing rather than a percentage commission to a marketplace.' },
      { q: 'What does a restaurant online ordering system need?', a: 'It needs a structured menu with modifiers, a cart, pickup time slots, order notifications to the kitchen, a confirmation for the guest and, if you take payment online, a payment integration.' },
      { q: 'Should I stop using DoorDash and Uber Eats?', a: 'Usually not, because those apps bring new guests and handle delivery, but repeat pickup guests are worth moving to your own ordering page.' },
      { q: 'Can I add my own ordering link to Google?', a: 'Yes, Google lets Business Profile owners add custom links where customers can order and mark preferred ordering options for pickup and delivery.' },
      { q: 'How much does Thomas Osayi charge to build pickup ordering?', a: 'Thomas Osayi builds custom restaurant sites with features like pickup ordering in his Full Custom Build package, from $1,200 and about 21 days.' },
    ],
    sources: [
      { title: 'DoorDash Merchant Pricing', publisher: 'DoorDash', url: 'https://merchants.doordash.com/en-us/pricing' },
      { title: 'Stripe pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
      { title: 'Manage online ordering options', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/10842217' },
      { title: 'Owner pricing', publisher: 'Owner.com', url: 'https://owner.com/pricing' },
    ],
    body: `Every order that comes through a delivery app carries a commission. For a lot of restaurants, that commission is now one of the biggest line items after food and labour, and the guest who placed the order belongs to the app, not to you.
The fix is not to quit the apps. It is to give your regulars a better place to order: your own website. This guide covers how a direct ordering system works, what it really costs compared with commissions, what to build first, and the mistakes that make guests go back to the app.
## Why do restaurants pay so much in third-party fees?
Because marketplace apps charge a percentage of every order, and the percentage is highest on delivery.
At the time of writing, DoorDash publishes three Marketplace plans for US merchants: Basic at 15 percent commission on delivery, Plus at 25 percent and Premier at 30 percent, with a 6 percent commission on pickup orders on every plan. Other apps use similar tiered models.
Those fees pay for real things: the app's audience, drivers, customer service and marketing. For a new guest who has never heard of you, that can be worth it. The problem is the regular who orders the same dish every Friday. You pay the same percentage on that guest's fiftieth order as on their first, even though the app did nothing to bring them back.
That is the order you want on your own site.
## What is a direct online ordering system?
A direct ordering system is a page on your own website where guests build an order from your menu, choose a pickup time and pay, with the order going straight to your kitchen.
The basic flow has five steps, and every extra step loses guests:
- Browse the menu by category, with prices and photos.
- Add items to a cart, with modifiers such as size, spice level or extras.
- Choose a pickup time from slots the kitchen can actually hit.
- Pay online or choose to pay at pickup, depending on how you want to work.
- See a confirmation on screen and by email or text, while the kitchen gets a notification.
On New York Nook, a Russian restaurant in Hollywood, I built pickup ordering into the restaurant's own site. The order page shows menu categories, a cart and pickup time slots in one view, so a guest can order without leaving the page.
![The New York Nook pickup ordering page I built, with menu categories, a cart and pickup time slots.](/shots/newyorknook-order.jpg)
## How much does direct ordering really save?
Direct ordering saves the marketplace commission, but you still pay card processing, so the saving is real but smaller than the headline percentage.
Stripe's standard US rate is 2.9 percent plus 30 cents per successful card charge at the time of writing. On a $30 order, that is $1.17. On the same $30 order placed as pickup through a marketplace at 6 percent, the commission is $1.80. On a $30 delivery order at 25 percent, it is $7.50.
Here is an illustration with made-up numbers. A family restaurant does 400 pickup orders a month at an average of $28 through a delivery app. At 6 percent that is about $672 a month in commission. If 250 of those guests switch to the restaurant's own site and pay by card, processing on those orders is about $278, against $420 they would have paid in commission. The restaurant keeps roughly $140 a month on pickup alone.
That number is modest. The bigger effects are elsewhere: guests who used to choose delivery because the app was easier start ordering pickup from you, you get their email for your own promotions, and your menu prices no longer need to carry an app markup.
> If you take payment at pickup instead of online, you pay processing at the counter anyway. The real decision is about no-shows, not fees.
## Should I build pickup ordering or delivery first?
Build pickup first, because delivery needs drivers or a paid delivery service, and pickup does not.
Pickup is simple to run: the kitchen makes the order, the guest walks in, staff hand it over. All the system needs to do is take the order cleanly and say when it will be ready.
Delivery from your own site means either employing drivers, with insurance and scheduling, or paying an on-demand delivery service per trip. Some marketplaces also sell commission-free ordering tools for your own site. DoorDash, for example, lists Online Ordering by DoorDash as commission-free on all plans at the time of writing, with payment processing fees. Those can be a good bridge, but read the terms on who owns the guest data and what the guest pays.
For most independent restaurants, the right order is: pickup on your own site now, keep delivery on the apps, and revisit in-house delivery once direct pickup volume proves guests will use it.
## What are my options for setting up direct ordering?
There are three broad routes, and each trades control for convenience.
### Your POS company's ordering module
Best for: restaurants already using a POS like Toast or Square that offers its own online ordering.
Pros: orders land straight in the POS and kitchen display, and menus stay in sync.
Cons: monthly add-on fees, and the ordering page looks like the vendor's, not yours. Toast, for example, lists online ordering as an add-on with pricing given by quote at the time of writing.
### A restaurant ordering platform
Best for: owners who want ordering, a site, marketing emails and an app in one subscription.
Pros: little setup, built-in marketing tools.
Cons: higher monthly cost. Owner.com lists a Flex plan at $249 a month plus a 5 percent restaurant fee per order, and a Flat plan at $499 a month, with guests paying a 5 percent order support fee on both, at the time of writing.
### Custom ordering on your own site
Best for: restaurants that want ordering to match the brand, no per-order platform fee, and full control over the flow.
Pros: one-time build cost, only card processing per order, and you own the code and data.
Cons: you need a developer to build it and to make larger changes later, and kitchen integration with your POS may be limited or need extra work.
## What does a good ordering page need?
A good ordering page is fast on a phone, honest about timing and impossible to misread.
- Real-time availability. If the kitchen runs out of a dish, staff need a simple switch to mark it sold out.
- Clear modifiers. Required choices, such as a side, should be required in the form, not left to a notes field.
- Realistic pickup slots. Limit how many orders each slot accepts, so a Friday rush does not create a 50 minute wait.
- A confirmation that removes doubt. Order number, items, total, pickup time and address, on screen and by email.
- A kitchen notification that someone actually sees. Email works for a small room. A busier kitchen needs a tablet or printer.
- Hours enforced by the system. The page should not accept a 10pm pickup if you close at 9.
If you take payment online with Stripe, the order should be marked paid only after Stripe confirms the payment through a webhook, not when the guest lands on a thank you page. I explain why in "Stripe payment went through but your app did not update? Fix the webhook".
## How do I get guests to order direct instead of through the app?
Make your own ordering link the easiest one to find, then give regulars a reason to use it.
- Google first. Many guests find you on Google Maps. Google's Business Profile help says owners can add custom links where customers can order and can mark preferred ordering providers for pickup and delivery. Put your own ordering page there.
- Instagram bio and posts. Link the ordering page, not the delivery app.
- In the bag. A small card in every app order with a short line about ordering pickup direct next time.
- Your homepage. An "Order takeout" button in the first screen, next to "Reserve a table" and "View menu".
On New York Nook, the homepage includes a dedicated order takeout section, so guests scrolling the site meet the ordering option without hunting for it.
![The order takeout section on the New York Nook homepage, leading to the pickup ordering page.](/shots/newyorknook-home-s4.jpg)
Avoid charging more on your own site than on the apps. Guests notice, and it trains them to use the app.
## What mistakes make direct ordering fail?
Most direct ordering systems fail because of operations, not code.
- No one watches the orders. If orders arrive by email and nobody checks during the rush, the guest arrives to nothing and never orders direct again.
- The menu drifts. The site still lists a dish that came off the menu last month. Give staff a simple way to edit items and availability.
- Too many steps. Forced account creation before checkout is the classic one. Let guests check out as a guest.
- Payment confirmed too early. Marking orders paid on the redirect page, not on the payment webhook, creates paid orders that never reached the kitchen or unpaid orders that did.
- Slow pages. An ordering page full of heavy images and scripts loses guests on mobile data.
## How long does it take to build and what does it cost?
A custom pickup ordering system on your own site typically takes around three weeks and sits in a full custom build, from $1,200 on my packages.
The time goes into a few predictable pieces:
- The menu data model: categories, items, prices, modifiers, required choices and sold-out flags. Getting this right first makes everything else simpler.
- The guest flow: menu, cart, pickup time, checkout and confirmation, designed and tested on a phone.
- Payments, if you take them online: a Stripe checkout, a webhook that marks the order paid, and receipts.
- Kitchen notifications: email at minimum, or a simple orders screen staff can keep open on a tablet.
- An admin screen so staff can change prices, hide sold-out items and adjust pickup windows without calling anyone.
If you only want a lighter start, a multi-page site from $450 can link out to your POS ordering page and still put the "Order takeout" button where guests see it. You can bring ordering in-house later without redesigning the site.
Whichever route you choose, run a soft launch first. Turn on direct ordering for staff, friends and a few regulars for a week, watch every order reach the kitchen, and fix the rough edges before you print the link on bags and menus.
## The bottom line
You can take restaurant orders online without third-party commission by putting pickup ordering on your own website and sending guests there from Google, Instagram and every bag that leaves your kitchen. You still pay card processing, so the per-order saving on pickup is modest, but the bigger value is owning the guest relationship and moving regulars off high-commission delivery. Start with pickup, keep the apps for discovery and delivery, and make your own ordering page the fastest, clearest option a guest can find. If you want to see how this fits a whole restaurant site, "How much does a restaurant website cost in 2026?" covers the full budget.`,
  },
  {
    slug: 'toast-vs-squarespace-vs-custom-restaurant-website',
    title: 'Toast vs Squarespace vs a custom website for restaurants',
    description: 'Comparing Toast Websites, Squarespace, Owner.com and a custom Next.js site for restaurants: costs at the time of writing, ordering fees, pros, cons and who each suits.',
    date: d,
    keywords: ['best website builder for restaurants', 'Toast website vs Squarespace', 'restaurant website builder comparison', 'Owner.com vs custom website', 'custom restaurant website'],
    service: 'nextjs-website-development',
    shortAnswer: 'Toast Websites is best if you already run Toast POS and want the site synced to it, Squarespace is best for a good-looking menu and info site on a small monthly budget, Owner.com suits owners who want ordering and marketing in one subscription, and a custom Next.js site is best when you want speed, a brand-matched ordering flow and no ongoing platform fee.',
    takeaways: [
      'There is no single best website builder for restaurants: the right one depends on your POS, your ordering volume and how much you want to manage.',
      'Squarespace lists plans from $19 to $99 a month billed annually at the time of writing, which makes it the cheapest polished option for a menu and info site.',
      'Toast does not publish a public price for Toast Websites; it is sold as an add-on to a Toast contract.',
      'Owner.com charges $249 to $499 a month at the time of writing, and guests pay a 5 percent order support fee on top.',
      'A custom site costs more upfront and less over time, and it is the only option where you own the code.',
    ],
    faqs: [
      { q: 'What is the best website builder for restaurants?', a: 'It depends on your setup: Toast Websites for Toast POS users, Squarespace for a low-cost menu and info site, an all-in-one platform for owners who want built-in marketing, and a custom build for full control.' },
      { q: 'Is Toast Websites free?', a: 'Toast does not list a public price for Toast Websites at the time of writing; its pricing pages describe websites and online ordering as add-ons priced by quote.' },
      { q: 'Can Squarespace handle restaurant online ordering?', a: 'Squarespace works well for menus and information, but restaurants usually connect a separate ordering tool or POS ordering page rather than running a kitchen workflow on Squarespace itself.' },
      { q: 'Is a custom restaurant website worth it?', a: 'A custom site is worth it when you want pickup ordering without a per-order platform fee, a fast site that matches your brand, and ownership of the code and data.' },
      { q: 'How much does a custom restaurant website from Thomas Osayi cost?', a: 'Thomas Osayi builds multi-page restaurant sites with a reservation form and local SEO from $450, and custom builds with features like pickup ordering from $1,200.' },
    ],
    sources: [
      { title: 'Squarespace pricing', publisher: 'Squarespace', url: 'https://squarespace.com/assets/pricing.txt' },
      { title: 'Toast Websites', publisher: 'Toast', url: 'https://pos.toasttab.com/products/websites/' },
      { title: 'Toast pricing: how much does Toast cost?', publisher: 'Toast', url: 'https://pos.toasttab.com/blog/on-the-line/toast-pricing' },
      { title: 'Owner pricing', publisher: 'Owner.com', url: 'https://owner.com/pricing' },
      { title: 'Stripe pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
    ],
    body: `When a restaurant owner asks me which website builder to use, I ask two questions back. What POS do you run? And how many orders do you take online in a month? Those two answers decide most of this comparison before design even comes up.
Below I compare four real options: Toast Websites, Squarespace, Owner.com as an example of an all-in-one restaurant platform, and a custom Next.js site, which is what I build. I checked every third-party price on the vendor's own page, and I note "at the time of writing" because these change. I build custom sites, so read my bias into the last option, but I will tell you plainly when a platform is the better choice.
## What should a restaurant website actually do?
A restaurant website has three jobs: show the menu, show when and where you are open, and let a guest book or order within a tap or two.
Everything in this comparison should be judged against those jobs. Guests arrive on a phone, often from Google Maps, and they want the menu first. So the questions that matter are:
- Can you show the menu as real text that loads fast and reads well on a phone?
- Can you keep hours, address and phone accurate and matching your Google Business Profile?
- How do reservations work: a link to OpenTable, Resy or Tock, a request form, or a built-in system?
- How does online ordering work, and what does each order cost you?
- Who owns the domain, the content and the guest data if you leave?
A beautiful template that buries the menu, or an ordering flow that charges a fee on every order forever, fails these jobs even if it looks great.
### The four options at a glance
At the time of writing, here is how the costs and fit compare.
- Toast Websites: no public price; sold as an add-on to a Toast POS contract. Best when you already run Toast.
- Squarespace: $19 to $99 a month billed annually, or $25 to $139 billed monthly. Best for a polished menu and info site on a budget.
- Owner.com: $249 a month plus a 5 percent restaurant fee per order, or $499 a month flat, with guests paying a 5 percent order support fee. Best for owners who want ordering and marketing in one subscription.
- Custom Next.js site: one-time build, from $450 for a multi-page site or from $1,200 with pickup ordering on my packages, plus low hosting costs. Best for control and long-term cost.
The details are where the decision gets made.
## Toast Websites: when does it make sense?
Toast Websites makes sense when your restaurant already runs on Toast POS and you want the site and ordering to stay in sync with it.
### Best for
Restaurants on Toast, especially those already using Toast Online Ordering, Toast Tables or Toast Catering.
### Cost range
Toast's websites product page links to pricing but does not list a price, and Toast's own pricing guide says websites and online ordering are add-ons billed separately with pricing that varies by business, at the time of writing. Expect a quote from sales.
### Pros
- Menu and ordering sync with the POS in real time, so an 86'd item disappears online too.
- Pre-built pages for menus, online ordering, loyalty sign-up and gift cards.
- No-code editing for staff.
### Cons
- Tied to Toast. If you switch POS, the site goes with it.
- Templates limit how distinctive the site can look.
- Pricing is by quote, so it is harder to compare and budget.
## Squarespace: when does it make sense?
Squarespace makes sense for a restaurant that mainly needs a beautiful, easy-to-edit menu and information site and handles ordering elsewhere.
### Best for
Cafes, bars and sit-down restaurants where reservations go through a booking platform and online ordering is light or handled by a POS or delivery app.
### Cost range
At the time of writing, Squarespace lists Basic at $19 a month, Core at $29, Plus at $49 and Advanced at $99 when billed annually, or $25, $39, $65 and $139 billed monthly. Core charges a 3 percent transaction fee on commerce sales, while Plus and above list zero Squarespace transaction fees.
### Pros
- Strong templates and photography-friendly layouts.
- Easy for an owner or manager to edit hours, menu and photos.
- Predictable monthly cost.
### Cons
- Restaurant ordering usually means connecting another tool, so you may pay two subscriptions.
- Template sites can carry more scripts than a hand-built site, which affects mobile speed.
- Moving off later takes care to keep your Google rankings. I cover that in "How to move from Wix or Squarespace without losing your Google rankings".
## Owner.com and all-in-one platforms: when do they make sense?
An all-in-one restaurant platform makes sense when you want a site, direct ordering, a branded app and marketing automation from one vendor, and the monthly cost is small next to your online sales.
### Best for
Restaurants with steady online ordering volume that do not want to manage a developer or several tools.
### Cost range
At the time of writing, Owner.com lists a Flex plan at $249 a month plus a 5 percent restaurant fee per order, and a Flat plan at $499 a month with no restaurant per-order fee, recommended for restaurants with $5,000 or more a month in online sales. On both plans, guests pay a 5 percent order support fee.
### Pros
- Ordering, website, marketing emails and texts in one place.
- Setup and migration included in the plans.
- Built for restaurants specifically.
### Cons
- One of the highest ongoing costs in this comparison: $2,988 to $5,988 a year in subscription alone.
- The guest-paid fee raises the price of ordering direct, which can blunt the reason to order from you instead of an app.
- You rent the site. Leaving means rebuilding.
## A custom Next.js site: when does it make sense?
A custom site makes sense when you want a fast, brand-matched site, pickup ordering without a per-order platform fee, and ownership of everything.
### Best for
Independent restaurants with a strong identity, regular takeout, or needs such as catering requests and private events that templates handle awkwardly.
### Cost range
On my packages, from $450 for a multi-page site with a reservation request or catering form and local SEO, and from $1,200 for a custom build with pickup ordering or an admin menu editor. Hosting a fast pre-built site can be free or low cost. If you take payment online, Stripe's standard US rate is 2.9 percent plus 30 cents per card charge at the time of writing.
### Pros
- Fast on phones, because pages are pre-built and images are resized per screen.
- No monthly platform fee and no per-order fee beyond card processing.
- The design and ordering flow match the restaurant, not a template.
- You own the code, the domain and the data.
### Cons
- Higher upfront cost than a builder.
- Larger changes need a developer, unless the build includes an admin screen for the menu.
- POS integration is possible but adds work and cost.
New York Nook, a Russian restaurant in Hollywood, is a custom site I built with the menu, reservation requests and pickup ordering on the restaurant's own domain, designed phone first so the three main actions sit in the first screen.
![The New York Nook site on mobile, with reservation, takeout and menu buttons in the first screen.](/shots/newyorknook-home-mobile.jpg)
## What does each option cost over three years?
Over three years, subscriptions add up faster than most owners expect.
These are illustrations using the listed prices at the time of writing, without card processing, domain or photography:
- Squarespace Core billed annually: $348 a year, or $1,044 over three years, plus any separate ordering tool.
- Owner.com Flex: $8,964 over three years, plus 5 percent of every order.
- Owner.com Flat: $17,964 over three years.
- Custom build with pickup ordering: from $1,200 once, plus hosting and occasional paid updates.
- Toast Websites: depends on your quote, bundled into your Toast contract.
> Put every option on the same three-year sheet, including per-order fees at your real monthly online sales. The cheapest month one is rarely the cheapest year three.
## How do menus, reservations and SEO differ between them?
The four options handle the everyday jobs differently, and the differences show up in how much staff time the site takes.
### Menus
Toast pulls the menu from the POS, which is the biggest advantage of staying in its ecosystem: change a price at the register and it changes online. On Squarespace, someone edits the menu by hand in the site editor, which is easy but easy to forget. All-in-one platforms usually sync with the ordering menu they host. On a custom site, the menu can be a typed data file a developer updates, or a small database with an admin screen so staff edit it themselves.
### Reservations
Every option can link out to OpenTable, Resy or Tock. Toast has its own Toast Tables product that integrates with Toast Websites. A custom site can add a simple reservation request form that notifies the restaurant and confirms to the guest, which suits smaller rooms that confirm each booking by hand.
### SEO and speed
All four can rank. What matters is real text menus, accurate hours that match your Google Business Profile, a page per important offering such as catering or private events, and a fast mobile load. Platforms give you good defaults with less control. A custom build gives you full control over page titles, structured data and speed, but someone has to set it up properly.
## Which should I choose for my restaurant?
## Which should I choose for my restaurant?
Choose based on your POS, your order volume and how hands-on you want to be.
- You run Toast and take a lot of online orders: start with Toast Websites and Toast Online Ordering, since the sync is worth a lot in a busy kitchen.
- You need a beautiful menu and info site and little ordering: Squarespace on an annual plan is hard to beat for the money.
- You want ordering, marketing and an app without managing anyone, and online sales are high: an all-in-one platform can earn its fee.
- You want speed, a distinctive brand, pickup ordering without per-order platform fees and ownership: a custom site.
If you are comparing general builders more broadly, "Next.js vs Webflow vs Wix: which is right for your business site?" goes deeper on that side.
## The bottom line
The best website builder for restaurants is the one that fits your POS and your ordering volume. Toast Websites wins for Toast restaurants, Squarespace wins for a low-cost menu site, all-in-one platforms win for owners who want one vendor and have the sales to justify the fee, and a custom site wins on speed, brand and long-term cost. Check current prices on each vendor's page before you sign, total the cost over three years, and make sure you own your domain whatever you pick.`,
  },
  {
    slug: 'google-business-profile-vs-website',
    title: 'Google Business Profile vs website: do you need both?',
    description: 'What a Google Business Profile does, what a website does, why most local businesses need both, and how to set them up so they help each other rank and convert.',
    date: d,
    keywords: ['Google Business Profile vs website', 'do I need a website if I have a Google Business Profile', 'Google Business Profile', 'local business website', 'local SEO'],
    service: 'nextjs-website-development',
    shortAnswer: 'Yes, most local businesses need both. A Google Business Profile gets you onto Google Maps and the local results with hours, reviews and directions, while your website answers the detailed questions, ranks for more searches and turns visitors into bookings, orders and quotes on a page you control.',
    takeaways: [
      'A Google Business Profile is free and is often the first thing a local customer sees, so set it up before anything else.',
      'Google ranks local results on relevance, distance and prominence, and prominence includes links to your business and reviews.',
      'Your website is where you control the message, explain services in depth and take bookings or orders without a middleman.',
      'Name, address, phone and hours must match exactly between the profile and the site.',
      'Link the profile to the most useful page on your site, which is not always the homepage.',
    ],
    faqs: [
      { q: 'Is a Google Business Profile enough without a website?', a: 'It can be enough to get started, but a profile alone limits how much you can explain, which searches you appear for and how customers can book or order.' },
      { q: 'Is Google Business Profile free?', a: 'Yes, Google says businesses can manage how they show up on Maps and Search with a Business Profile at no charge.' },
      { q: 'Does having a website help my Google Maps ranking?', a: 'Google says prominence, one of its local ranking factors, draws on how many websites link to your business, and a good website gives the profile a strong destination and consistent details.' },
      { q: 'Which page should my Google Business Profile link to?', a: 'Link to the page that best serves someone who just found you on Maps, which for a restaurant is often the menu and for a service business is often a booking or service page.' },
      { q: 'How much does Thomas Osayi charge for a local business website?', a: 'Thomas Osayi builds one-page sites from $150 and multi-page sites with a booking or quote form and local SEO setup from $450.' },
    ],
    sources: [
      { title: 'About Google Business Profile', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038169' },
      { title: 'How to improve your local ranking on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/7091?hl=en' },
      { title: 'Manage online ordering options', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/10842217' },
      { title: 'Edit your Business Profile', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3039617?hl=en' },
    ],
    body: `A lot of owners I talk to treat this as an either-or. They have a Google Business Profile with good reviews and wonder why they would pay for a website. Others have a website and have never claimed their profile. Both are leaving customers on the table.
The two do different jobs. Your profile is how Google shows you in Maps and local results. Your website is where you make the case and take the booking. This guide explains what each one does, where each falls short, and how to connect them so they strengthen each other.
## Do I need both a Google Business Profile and a website?
Yes, for almost every local business, because they cover different moments in the same customer's decision.
Picture someone searching "waxing near me" or "Russian restaurant Hollywood". The first thing they see is usually the map and a short list of profiles: name, star rating, hours, distance, a few photos. That is the Business Profile's moment. If it is missing or thin, you are not in the running.
Then they tap through. They want the menu, the price list, what a first visit is like, whether you take their insurance, whether they can book tonight. A profile can hold some of that, but it is cramped, formatted by Google and shared with competitors' ads and suggestions. That is the website's moment.
Skip the profile and you are invisible on Maps. Skip the website and you lose the people who need more than a star rating to decide, and you have nowhere to take a booking or order that you control.
## What does a Google Business Profile do?
A Google Business Profile controls how your business appears on Google Maps and in local search results, and it is free.
Google's own help pages say that with a Business Profile you can manage how your business shows up on Maps and Search at no charge, and that you should provide your hours, website, phone number and location so they are visible to customers. On a profile you can:
- Show your name, category, address or service area, phone, hours and holiday hours.
- Collect and reply to reviews.
- Post photos and videos of the space, the team and the work.
- Add links, such as a menu, booking or ordering page.
- Answer common questions and add attributes like accessibility or outdoor seating.
Google also notes that Business Profiles are meant for businesses that meet customers in person, at a location or by visiting them. Online-only businesses are not eligible.
## What does a website do that a profile cannot?
A website lets you control the whole message, rank for many more searches and complete the sale on your own terms.
- Depth. A profile gives you a short description. A website can have a page per service, a full menu, pricing, FAQs, team bios and policies.
- More searches. Each well-written service page can rank for its own searches, like "Brazilian wax Los Angeles" or "catering for 50 people Hollywood", not only your business name and category.
- Conversions you own. Booking forms, quote requests, pickup ordering and email sign-ups happen on your page, with no marketplace fee and with the customer's details in your hands.
- Trust signals in your words. Photos you chose, your story, how you handle a problem.
- Visibility in AI answers. Tools like ChatGPT and Google's AI answers lean on clear, detailed pages. I wrote about that in "How to get your business mentioned in ChatGPT, Perplexity and Google AI answers".
A booking flow is a good example. On Astiglow, a waxing studio, the site I built takes clients from service choice to booking, with hours and location in the footer so the same details are always one scroll away.
![The booking call to action, hours and location footer on the Astiglow site I built.](/shots/astiglow-home-s3.jpg)
## How do Google Business Profile and a website work together for ranking?
They help each other: the profile gets you into local results, and the website strengthens the signals Google uses to rank that profile.
Google says local results are based mainly on relevance, distance and prominence. Relevance is how well your profile matches the search. Distance is how far you are from the searcher. Prominence is how well known you are, and Google's help page says it draws on information such as how many websites link to your business and how many reviews you have. It also says there is no way to request or pay for a better local ranking.
A website helps with relevance and prominence in practical ways:
- Your service pages use the words customers search, which supports what your profile is about.
- Other sites, such as local press, partners and directories, link to your website, not your profile.
- The profile's website link gives Google and customers a consistent, detailed source for your details.
None of this is a trick. It is just a business that is clearly described in two places that agree with each other.
## What should match between my profile and my website?
Your business name, address, phone number and hours should match exactly, everywhere.
This is often called NAP consistency: name, address, phone. Mismatches confuse customers first and search engines second. The common ones I find:
- Suite numbers on one and not the other.
- An old phone number still in the website footer after a switch.
- Holiday hours updated on Google but not on the site, or the other way around.
- A business name with extra keywords on the profile that does not match the sign or the site.
For Artistic Printing, a commercial printer in Los Angeles, the contact page I built lists the address, phone, email and hours in one place, so it is easy to keep those details identical to the profile.
![The Artistic Printing contact page I built, with address, phone, email and hours together.](/shots/artistic-contact.jpg)
> Every time you change hours, change them in both places on the same day. Put it on the same checklist as changing the sign on the door.
## Which page should my Google Business Profile link to?
Link to the page that best serves someone who just found you on Maps, which is often not the homepage.
- Restaurants: the main website link can be the homepage, but add your menu link and your own ordering link too. Google's help pages say owners can add custom links where customers can order and can mark preferred ordering options for pickup and delivery.
- Salons, studios and clinics: link the booking page, so a ready customer goes straight to available times.
- Multi-location businesses: link each profile to its own location page, with that location's address, hours and map.
- Trades and service-area businesses: link a page that lists services and the areas you cover, with a quote form.
Whatever you link, make sure it loads fast on a phone. A Maps visitor is often on mobile data and in a hurry.
## How do I set up both properly, step by step?
Set up the profile, build or tidy the website, then connect them and keep them in sync.
### The profile
- Claim or create the profile on Google and complete verification.
- Choose the most specific primary category, such as "Russian restaurant" rather than just "restaurant", and add a few secondary categories only if they are true.
- Fill in every field you can: hours, holiday hours, phone, attributes, services or menu, and a description in plain words.
- Upload real photos of the exterior, so people recognise the door, plus the interior, the team and the work.
### The website
- Put the same name, address, phone and hours in the footer or on a contact page.
- Give each main service or offering its own page with a clear title.
- Add a map or directions on the contact page if customers visit you.
- Make the main action, book, order or request a quote, visible in the first screen on a phone.
### The connection
- Add the website link, and any menu, booking or ordering links, to the profile.
- Link back to your Google reviews from the website if you want, and ask happy customers to leave one.
- Set a monthly reminder to compare the two side by side and fix anything that has drifted.
## What if I can only afford one right now?
Start with the Google Business Profile, because it is free and covers the moment most local customers search, then add a website as soon as you can.
A complete profile with real photos, accurate hours and a steady trickle of reviews can bring in customers on its own. But a profile with no website link is a dead end for anyone who wants detail, and it gives you nowhere to take a booking you control.
Here is an illustration with a made-up business. A new mobile dog groomer sets up a profile in week one and gets a few calls. In month two, a one-page site goes live with services, prices, the service area and a booking request form, and the profile's website link points to it. Now customers who would have called to ask the price can see it and book in one visit, and the groomer can send the same link from Instagram and text messages.
A one-page site from $150 is enough for that first step. "Do I need a website if my business already has Instagram?" covers a similar question for social-first businesses.
## What mistakes should I avoid with a profile and website?
The worst mistakes are the ones that send a customer to a closed door or a dead link.
- Leaving the website field empty or pointed at an old domain.
- Linking a page that shows a pop-up or a slow video before the useful content.
- Letting reviews go unanswered for months.
- Using stock photos on either one.
- Creating duplicate profiles for the same location, which splits reviews and confuses Google.
- Forgetting the website when you move, change hours or add a service.
For the full list of local signals, "Local SEO checklist for a small business website" goes step by step.
## The bottom line
A Google Business Profile and a website are not competitors. The profile gets you found on Maps and in local results for free. The website explains what you do, ranks for more searches and takes the booking or order on a page you own. Set up the profile first, connect it to the most useful page on your site, keep name, address, phone and hours identical in both places, and treat any change to one as a change to the other.`,
  },
  {
    slug: 'new-business-website-launch-checklist',
    title: 'New business website checklist: everything to do before launch',
    description: 'A practical pre-launch checklist for a new business website, from domain and email to content, forms, SEO, speed, accessibility, legal pages and analytics.',
    date: d,
    keywords: ['new business website checklist', 'website launch checklist', 'pre-launch website checklist', 'small business website checklist', 'before launching a website'],
    service: 'nextjs-website-development',
    shortAnswer: 'Before launching a new business website, secure the domain in your own account, set up business email, finish real content for every page, test every form and button on a phone, add titles, descriptions and a sitemap, check speed and basic accessibility, publish privacy and contact details, connect your Google Business Profile, and set up analytics and Search Console on launch day.',
    takeaways: [
      'Register the domain in your own name and account before anything else, because recovering it later is slow and stressful.',
      'Test every form by submitting it yourself and confirming the email arrives, on a real phone, on the live domain.',
      'Each page needs a unique title and description, and the site needs a sitemap submitted in Google Search Console.',
      'Speed and basic accessibility are launch requirements, not polish, because most visitors arrive on a phone.',
      'Set up analytics and Search Console on day one so you have data from the first visitor.',
    ],
    faqs: [
      { q: 'What should I check before launching a website?', a: 'Check domain ownership, business email, content on every page, forms and buttons, page titles and descriptions, the sitemap, speed, basic accessibility, legal pages and analytics.' },
      { q: 'How long before launch should I start the checklist?', a: 'Start the domain, email and content items as soon as the project begins, and leave the testing, SEO and analytics items for the last few days before launch.' },
      { q: 'Do I need a privacy policy on a small business website?', a: 'If your site collects personal information through forms or uses analytics, a privacy policy is generally expected and may be required depending on where you and your visitors are, so check with a qualified adviser.' },
      { q: 'How do I tell Google my new website exists?', a: 'Verify the site in Google Search Console, submit your sitemap there, and add the website link to your Google Business Profile.' },
      { q: 'Does Thomas Osayi handle launch setup?', a: 'Thomas Osayi includes local SEO setup in his Business Site package from $450, and his builds launch on your own domain with the technical checklist items done.' },
    ],
    sources: [
      { title: 'Verify your site ownership', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/9008080' },
      { title: 'Build and submit a sitemap', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/guides/create-URLs' },
      { title: 'About Google Business Profile', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038169' },
      { title: 'Vercel Hobby Plan', publisher: 'Vercel', url: 'https://vercel.com/docs/plans/hobby' },
    ],
    body: `Launch day for a new business website should be boring. The fires should already be out: the domain is yours, the forms send email, the pages load on a phone and Google knows the site exists. When launch is exciting, it is usually because something on this list was skipped.
I run through a version of this checklist on every site I ship. It is ordered roughly by when you should do each item, from the first week of the project to the hour after launch. Not every item applies to every business, but read them all before you decide to skip one.
## What should I do first, before any design work?
Secure the domain, the email and the accounts in your own name, because everything else depends on them.
- Register the domain in an account you own, with your email and your card. If a developer registers it for you, ask for it to be transferred to your account before launch.
- Turn on auto-renew and make sure the card on file will not expire soon. An expired domain takes the site and your email down together.
- Set up a business email on the domain, such as hello@yourbusiness.com, through Google Workspace or a similar provider.
- Create a shared password manager entry for the domain registrar, hosting, email and any tools, with two-factor authentication on each.
- Decide whether the site lives at www.yourbusiness.com or yourbusiness.com, and redirect the other one to it.
If you are working with a developer, "What to send a web developer before your project starts" lists the access and assets to gather now, so the project is not waiting on you later.
## Is my content actually ready?
Your content is ready when every page has final, real text and photos, with no placeholder anywhere.
Content is the most common reason a launch slips. Go page by page:
- Homepage: what you do, who it is for, where you are, and one clear action in the first screen.
- Services or menu: real names, real descriptions, prices or price ranges where you can share them.
- About: a short, specific story and real photos of you or the team.
- Contact: address or service area, phone, email, hours and a map if customers visit.
- Search the whole site for "lorem", "example", "TBD" and "your business" before launch. They hide in footers and meta descriptions.
- Replace stock photos wherever you can. Real photos of the work or the space convert better and build trust.
If you are unsure which pages you need, "What pages does a small business website need? A page-by-page plan" walks through it.
## Do all the forms and buttons work?
Every form and button works only when you have tested it yourself, on a phone, on the live domain.
Forms are where launches quietly fail. A contact form can look perfect and send nothing. Test each one:
- Submit every form with your own details and confirm the email arrives in the right inbox, not spam.
- Check that the visitor sees a clear confirmation and, ideally, gets an email saying what happens next.
- Tap every phone number to confirm it opens the dialler with the right number.
- Tap every email link, map link and social link.
- Test booking or ordering flows end to end, including a cancellation if you support it.
- Try a form with a missing required field to confirm the error message is clear.
> Test forms again after the domain switches to the live address. Email services often need the live domain verified, and forms that worked on a preview link can fail on launch day.
## What SEO basics need to be in place before launch?
Each page needs a unique title and meta description, and the site needs clean URLs, a sitemap and correct indexing settings.
- Titles: unique per page, with the service and location where relevant, such as "Brazilian waxing in Los Angeles | Studio name".
- Meta descriptions: one or two sentences per page that make someone want to click.
- Headings: one H1 per page that says what the page is about.
- URLs: short and readable, like /services/brazilian-wax, not /page?id=12.
- Sitemap: generated automatically, usually at /sitemap.xml. In Next.js, a sitemap.ts file in the app folder can generate it.
- robots.txt: make sure it does not block the whole site. Staging sites are often set to block search engines, and that setting sometimes survives into launch.
- Images: descriptive file names and alt text.
- Moving from an old site: map every old URL to its new one with 301 redirects. "How to move from Wix or Squarespace without losing your Google rankings" covers this in detail.
For businesses that serve a local area, the "Local SEO checklist for a small business website" goes further.
## Is the site fast and usable on a phone?
The site is ready when it loads quickly on a mid-range phone over mobile data and every page is easy to use with one thumb.
- Open the site on your own phone with Wi-Fi turned off and load each main page.
- Run the homepage and a key service page through PageSpeed Insights and look at the mobile scores and Core Web Vitals.
- Compress and resize images. A 5 MB photo straight from a camera has no place on a homepage.
- Remove auto-playing background video unless it is essential, or make sure it is small and does not block the content.
- Check that buttons are big enough to tap and text is readable without zooming.
"Core Web Vitals explained for small business owners" explains what the numbers mean and which ones matter.
## Have I covered accessibility and legal basics?
Basic accessibility and a few standard pages should be done before launch, not added after a complaint.
This is general information, not legal advice. Requirements depend on your business, location and audience, so check with a qualified adviser if you are unsure.
- Accessibility basics: alt text on meaningful images, enough colour contrast, every form field labelled, the site usable with a keyboard, and headings in a logical order. "Website accessibility basics for small businesses" goes deeper.
- Privacy policy: if you collect names, emails or phone numbers through forms, or use analytics, publish a privacy policy that says what you collect and why.
- Terms or policies: booking, cancellation, refund or deposit policies where they apply.
- Cookie notice: whether you need one depends on the tools you use and where your visitors are.
- Business details: legal business name and contact information somewhere visible, usually the footer or contact page.
## What needs to happen on launch day?
On launch day, point the domain, confirm HTTPS, connect Google tools and run a final round of tests on the live site.
- Point the domain to your host and wait for DNS to update. On Vercel and similar hosts, HTTPS certificates are issued automatically once the domain is connected.
- Confirm both www and non-www versions load and redirect to the one you chose, over HTTPS, with no browser warnings.
- Verify the site in Google Search Console and submit the sitemap. Google's Search Console help explains the verification methods, including a DNS record at your domain registrar.
- Add or update the website link on your Google Business Profile, which Google lets you manage at no charge.
- Set up analytics. Vercel Web Analytics, Google Analytics or a privacy-focused tool all work. Vercel's free Hobby plan includes 50,000 Web Analytics events a month at the time of writing.
- Set up conversion tracking for the actions that matter: form submissions, calls, bookings or orders.
- Repeat the form tests from earlier on the live domain.
Here is an illustration with a made-up business. A new physiotherapy clinic launches on a Thursday morning. By noon the domain is live over HTTPS, Search Console is verified, the sitemap is submitted, the Business Profile links to the booking page, and the receptionist has received two test form submissions. That afternoon, a real booking request arrives, and the clinic knows exactly which page it came from.
## What should my developer hand over at launch?
At launch you should hold the keys to everything, plus a short written record of how the site is set up.
If someone else built the site, ask for this before the final payment, not months later when you need to change something:
- Owner access to the domain registrar, hosting account and email provider, in your name.
- Access to the code repository, such as a GitHub account or organisation you own.
- A list of every outside service the site uses: form email service, analytics, booking tool, payment provider, with who pays for each.
- Where environment variables and API keys live, without pasting the secrets into an email.
- How to make common changes yourself: hours, prices, photos, a new menu item or service.
- Which changes need a developer, and roughly what they cost.
- Admin logins for any CMS or admin screen, with your own account rather than a shared one.
This matters even if you plan to keep working with the same person. People change jobs, freelancers get busy, and agencies close. A business that owns its accounts can hire anyone to pick up where the last developer left off. A business that does not can end up paying for a rebuild just to regain control of its own site.
## What should I do in the first two weeks after launch?
In the first two weeks, watch the data, fix what real visitors expose and keep the content current.
- Check Search Console for crawl errors and pages that are not indexed, and fix what it reports.
- Look at analytics for pages with high exits or forms with starts but few submissions.
- Ask three customers or friends to use the site on their phones and tell you what confused them.
- Ask recent customers for Google reviews, now that the profile links to a proper website.
- Keep a short list of small fixes and do them in one batch rather than one at a time.
- Plan who updates the site: you, through an editor or admin screen, or a developer on a maintenance arrangement. "What does website maintenance cost, and what does it include?" helps you choose.
## The bottom line
A new business website launch goes smoothly when the boring work is done early. Own the domain and email from day one, finish real content for every page, test every form on a phone on the live domain, put titles, descriptions and a sitemap in place, check speed and basic accessibility, publish your policies, and connect Search Console, your Google Business Profile and analytics on launch day. Then spend the first two weeks fixing what real visitors show you.`,
  },
];
