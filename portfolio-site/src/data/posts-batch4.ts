// Articles, batch 4 (Nov 20 2026). Prices come only from the packages in seo.ts.
import type { Post } from './seo';

const d = '2026-11-20';

export const postsBatch4: Post[] = [
  {
    slug: 'fix-or-rebuild-ai-built-app',
    title: 'Fix or rebuild your AI-built app? How to decide before you spend more',
    description: 'Four honest options for a Lovable, Bolt, v0 or Cursor app that is stuck: keep prompting, targeted fixes, a partial refactor or a full rebuild. What each costs, when each makes sense, and the signs that tell you which one you need.',
    date: d,
    updated: '2026-11-22',
    keywords: ['fix or rebuild vibe coded app', 'rebuild AI generated app', 'refactor vs rebuild app', 'Lovable app rebuild', 'AI app rescue'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Fix the app when its core workflow already works and the problems are specific: security rules, payments, deploy errors or a few broken screens. Refactor when the data model is sound but the code around it is tangled, and rebuild only when the data model itself is wrong or most of the product still needs building.',
    takeaways: [
      'The data model decides the answer: if the tables and their relationships are right, almost everything else can be fixed in place.',
      'Most stuck AI-built apps need targeted fixes, not a rebuild, because the screens and flows usually work and the gaps sit in a few known places.',
      'A full rebuild throws away working parts too, so it only pays off when the foundation is wrong or the product barely exists yet.',
      'Get one written review of the code before you choose, because a two hour look at the repo is cheaper than a week of guessing.',
    ],
    faqs: [
      { q: 'How do I know if my AI-built app needs a rebuild?', a: 'It probably needs a rebuild only if the data model is wrong for the product, for example user data stored in one shared list, or if most core features still do not work.' },
      { q: 'Is a refactor cheaper than a rebuild?', a: 'Usually yes, because a refactor keeps the screens, styling and data that already work and rewrites only the tangled logic between them.' },
      { q: 'Can I keep using Lovable or Bolt after a developer fixes the code?', a: 'Yes, as long as the changes go through the GitHub repo the builder syncs with, although heavy refactors can make later prompts less predictable.' },
      { q: 'What does a code review before a fix cover?', a: 'It covers access rules, secrets, payments, the data model, build and deploy setup, and a list of what works, what is broken and what is missing.' },
      { q: 'How much does it cost to fix an AI-built app?', a: 'Thomas Osayi fixes single bugs from $60, up to three fixes plus a feature from $200, and gets apps whose core already works launched from $600; larger rebuilds follow his SaaS MVP pricing from $1,200.' },
    ],
    sources: [
      { title: 'Row Level Security', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/postgres/row-level-security' },
      { title: 'Receive Stripe events in your webhook endpoint', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/webhooks' },
      { title: 'GitHub integration', publisher: 'Lovable Docs', url: 'https://docs.lovable.dev/integrations/github' },
    ],
    body: `When someone sends me a repo, it usually comes with the same question in different words: is this worth saving, or should we start over? They have spent a month prompting in Lovable, Bolt, v0 or Cursor. The app mostly works. Then a payment does not unlock a plan, or a second test user can see the first user's data, and every new prompt seems to break something that used to work.
There are four ways forward, not two. Here is how I decide between them, what each one costs, and the signs that point to each.
## Should I fix or rebuild my AI-built app?
In most cases fix it, because the parts that usually break are specific and the parts that usually work, the screens and the flows, are expensive to recreate.
AI builders are good at what you can see. They produce clean interfaces, sensible navigation and forms that save data. They are weaker at what you cannot see: who is allowed to read which record, what happens when a webhook arrives twice, where secret keys live, and how the production build differs from the preview. Those gaps are real, but they are also predictable. A developer can find them in a few hours and close them one by one.
A rebuild only wins when the foundation is wrong. The foundation is the data model: which tables or collections exist, what belongs to whom, and how records relate. If that is right, the rest can be repaired in place. If it is wrong, every fix sits on sand, and you keep paying for it.
So the real question is not "how messy is the code?" Almost all AI-generated code looks messy to a developer. The question is "is the shape of the data right for the product we are building?"
## What are my four options?
The options run from cheapest and least disruptive to most expensive and most thorough.
### Option 1: keep prompting in the builder
Best for: small visual changes, copy, layout and simple new screens.
Cost range: your builder plan plus credits, usually tens of dollars a month.
Pros: no handover, no waiting, and you stay in control.
Cons: once you hit the prompt loop, where each fix breaks something else, credits disappear and the app gets worse. Security rules and payment logic are exactly where prompting is least reliable.
### Option 2: targeted fixes by a developer
Best for: an app whose core workflow works but has a short list of known problems.
Cost range: from $60 for one bug, from $200 for up to three fixes plus a small feature, from $600 to fix what blocks launch and ship it, based on my fix packages.
Pros: keeps everything that works, fast turnaround, and you can usually keep using the builder afterwards.
Cons: it does not untangle code that is badly structured, so the next big feature may still be slow.
### Option 3: a partial refactor
Best for: a sound data model wrapped in duplicated, tangled logic.
Cost range: typically between the larger fix packages and an MVP build, depending on how much logic gets rewritten.
Pros: keeps the screens, styling and data, and leaves code a developer or an AI can extend safely.
Cons: takes longer than fixes, and heavy restructuring can confuse later prompts in the original builder.
### Option 4: a full rebuild
Best for: a wrong data model, or a product where most core features still do not exist.
Cost range: a real build, from $1,200 for a launchable SaaS MVP with auth, dashboard, database and payments, or from $3,000 for a multi-role platform.
Pros: a clean foundation designed for where the product is going.
Cons: you pay again for screens that already worked, and it takes weeks instead of days.
## What signs mean the app only needs fixes?
If you can describe each problem in one sentence and the main workflow works end to end, you need fixes.
Typical examples I see:
- Sign-in works in the preview but breaks on the real domain because redirect URLs still point at the preview.
- Stripe takes the payment but the plan never activates, because the webhook is missing or uses the wrong signing secret.
- The production build fails on type errors that the preview ignored.
- The Supabase row level security or Firebase rules are wide open, or so strict that nothing loads.
- A handful of screens show errors on empty states or slow connections.
Each of these has a known cause and a known fix. None of them needs a new codebase. I wrote about the most common ones in "Your Lovable or Bolt app works locally. Here is what breaks at launch." If your list looks like that one, start with fixes and spend the money you save on your first users.
## What signs mean the code needs a refactor?
When the same logic lives in many places and changing one feature means editing five files, the app needs a refactor rather than more fixes.
AI builders often solve each prompt locally. Ask for a discount on the pricing page and you get discount logic in the pricing page. Ask for it on checkout and you get a second copy. After a month, there are three slightly different ideas of what a "plan" is, and fixing one does not fix the others.
Signs to look for:
- The same calculation or permission check written in several components.
- Files of a thousand lines or more that mix data fetching, business rules and layout.
- Bugs that come back after being fixed, because only one copy was changed.
- New features that take longer each week, whether you prompt or a developer codes them.
A refactor pulls that logic into one place, for example a single function that decides what a user's plan allows, and points every screen at it. The data stays. The interface stays. What changes is that the next feature costs what it should.
> Ask whoever reviews the code to name the three files that cause the most trouble. If the answer is the same three files every time, a focused refactor of those is often enough.
## When is a full rebuild actually worth it?
A rebuild is worth it when the data model does not fit the product, or when so little works that there is not much to keep.
Data model problems look like this. Every user's records sit in one shared collection with no owner field, so access rules cannot be written safely. A team product was built as single-user, so there is no concept of an organization, and adding one touches every query. Money is stored as text, or bookings have no time zone. These decisions spread into every screen, and patching them one by one usually costs more than designing them properly once.
Roles are the other common reason. Guardian MindCare, a therapy practice platform I built, has five user roles: therapists, supervisors, trainees, clients and admins. A permission model like that has to be designed into the data from day one. An app that was prompted as single-user and then told to "add supervisors" usually needs its foundation redone.
![Guardian MindCare, a therapy practice platform I built with role-based portals for therapists, supervisors, trainees, clients and admins.](/shots/guardian-home.jpg)
The second case is simpler. If you have a landing page, a login and three half-working screens, there is little to save. A rebuild at that point is really just the first build.
## How do I find out which one my app needs?
Get one written review of the code before you choose, because guessing in either direction is expensive.
A useful review takes a developer a few hours and answers specific questions:
- Is the data model right for the product, including users, ownership and roles?
- Are the security rules or row level security policies correct for every table or collection?
- Are any secret keys in the frontend code or committed to the repo?
- Do payments activate reliably, including renewals, failures and cancellations?
- Does the production build pass, and is deployment repeatable?
- What works end to end today, what is broken, and what is missing?
You should leave with a list, not a feeling. Each item should be marked fix, refactor or rebuild, with a rough size. To prepare, give the reviewer read access to the GitHub repo and the Supabase or Firebase project, plus a short screen recording of the main workflow. "How to hand off an AI-built app to a developer" covers exactly what to send.
When I review an app before quoting, the quote follows the list. If most items are fixes, it is a fix package. If most of the product still needs building, the quote follows the build packages instead, usually less the parts your version already gets right.
## A worked example: a booking app for dog groomers
This is an illustration, not a client. A founder builds a booking app for dog groomers in Lovable over five weeks. Groomers set availability, pet owners book and pay a deposit through Stripe, and both get email confirmations.
The review finds four problems. Row level security lets any signed-in owner read every booking. The Stripe webhook is not deployed, so deposits are taken but bookings stay "pending". Availability is stored without a time zone, so bookings made from another state land an hour off. And the production build fails on two type errors.
The first two are classic fixes. The build errors are a fix. The time zone issue looks small, but it touches the availability table and every screen that reads it. That is a data model change, and it decides the plan: fix security, payments and the build now, then refactor the availability logic into one place that stores times in UTC with the groomer's zone attached. No rebuild. Screens, styling and bookings all stay.
Had the app stored every groomer's bookings in one shared list with no owner at all, the answer would have changed to a rebuild of the data layer.
## What can I check myself before paying for a review?
You can check three things in under an hour, and the answers will tell you, and any reviewer, a lot about which option you are facing.
### Is row level security on for every table?
If you use Supabase, open the Table Editor and look for tables marked as unrestricted. Supabase's own documentation says a table in an exposed schema without row level security is readable and writable by any role with a grant on it. Write down which tables are open. Do not switch it on blindly in production, because with no policies the app will suddenly load nothing.
### Did Stripe actually deliver the webhook?
In the Stripe dashboard, open Workbench, then Webhooks, select your endpoint and look at the Event deliveries tab. Failed or pending deliveries with a 400 or 500 status explain most "paid but not activated" complaints. If there is no endpoint for your live domain at all, that is your answer.
### Does the production build pass?
Run npm run build locally or read the latest failed deploy log on your host. Copy the first error, not the last one.
Bring those three notes to the review. They often turn a vague "it is broken" into a short list of fixes, which is the cheapest outcome there is.
## What mistakes make the decision harder?
The most expensive mistake is deciding before anyone has read the code.
Other mistakes that make it harder:
- Rebuilding because the code "looks messy". Messy is normal for generated code, and it says little about whether the foundation is sound.
- Prompting through a security fix. Rules and policies need someone who can read them line by line and test them as different users.
- Adding big features to a broken base. Each new feature on a wrong data model raises the cost of fixing it later.
- Switching builders mid-project. Moving from one AI builder to another rarely solves the underlying problem and often adds a second set of patterns.
- Skipping a staging environment. Testing fixes on the live app with real users turns small bugs into support emails.
## The bottom line
Fix the app when the main workflow works and the problems are specific. Refactor when the data is right but the logic is scattered. Rebuild only when the data model is wrong for the product or most of it does not exist yet. Before choosing, get a written review that marks every problem as fix, refactor or rebuild. If you want that review, send me the repo through the fix service page and I will tell you honestly which of the four you need.`,
  },
  {
    slug: 'what-pages-does-a-small-business-website-need',
    title: 'What pages does a small business website need? A page-by-page plan',
    description: 'The pages a small business website actually needs, the ones you can skip, and how many pages different kinds of businesses should start with, from a developer who builds them.',
    date: d,
    updated: '2026-11-22',
    keywords: ['what pages does a small business website need', 'small business website pages', 'essential website pages', 'how many pages should a website have'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most small business websites need five core pages: a homepage, a services page or one page per main service, an about page, a contact page with your address and hours, and a privacy policy. Add a booking, menu, quote or pricing page if customers expect to act online, and a separate page for each main service and location you want to rank for.',
    takeaways: [
      'Five pages cover most small businesses at launch: home, services, about, contact and privacy policy.',
      'Give each main service its own page if you want to rank for it, because one page cannot rank well for five different searches.',
      'The page that matters most is the one where customers act, such as booking, ordering, requesting a quote or calling.',
      'Skip pages you cannot keep current, since an empty blog or an old events page makes the whole business look closed.',
      'A one-page site is fine for a new business with one offer, and you can grow it into separate pages later without starting over.',
    ],
    faqs: [
      { q: 'How many pages should a small business website have?', a: 'Most start with five to eight pages: home, services or one page per main service, about, contact, privacy policy and one action page such as booking or quotes.' },
      { q: 'Does a small business website need a blog?', a: 'No. A blog helps only if you will publish useful answers to customer questions regularly, and an abandoned blog does more harm than none.' },
      { q: 'Do I need a privacy policy on my website?', a: 'If your site collects any personal information, such as a contact form, booking form or analytics, you should have one, and some laws and services require it; this is general information, not legal advice.' },
      { q: 'Is a one-page website bad for SEO?', a: 'Not for a business with one main service in one area, but separate pages rank better when you offer several services or serve several locations.' },
      { q: 'How much does a five-page small business website cost?', a: 'With Thomas Osayi, a Business Site of up to five pages with a booking or quote form and local SEO setup starts at $450 and takes about 14 days.' },
    ],
    sources: [
      { title: 'Privacy Laws (California Online Privacy Protection Act)', publisher: 'State of California Department of Justice', url: 'https://oag.ca.gov/privacy/privacy-laws' },
      { title: 'Spam policies for Google web search', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/essentials/spam-policies' },
      { title: 'SEO Starter Guide', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
      { title: 'Guidelines for representing your business on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038177' },
    ],
    body: `When a new client asks what pages their website should have, they usually expect a long list. The honest answer is shorter. Most small businesses need five or six pages at launch, plus one page that lets customers act. Everything else is optional, and some of it actively hurts.
Here is the plan I use, page by page, with what goes on each one and what to skip.
## What pages does every small business website need?
Five pages cover almost every small business at launch: home, services, about, contact and a privacy policy.
### Homepage
Says what you do, where, and for whom, in the first screen, with one clear action such as Book now, Order, Get a quote or Call. Below that: your main services, proof such as reviews or photos of real work, and the action again. I cover the structure in detail in "How to structure a homepage for a service business."
### Services
Either one page listing everything you offer, or one page per main service. More on that choice below.
### About
Who runs the business, how long you have been doing it, and why customers can trust you. Real photos of real people beat stock images every time.
### Contact
Phone, email, address, hours, a map if customers visit you, and a short form. Make the phone number tappable on mobile.
### Privacy policy
If you collect anything through a form, booking tool or analytics, you need one. It is short, boring and important. This is general information, not legal advice.
That is the core. A business with only these five pages, done well, will outperform a twenty-page site where half the pages are thin.
## Should each service get its own page?
Yes, if you want to be found for each service, because one page cannot rank well for several different searches.
Search engines match a page to a query. Someone searching "brow waxing in Pasadena" wants a page about brow waxing, not a page that mentions brows once between bikini waxing and lash tints. A dedicated page for each main service can answer that search fully: what it is, how long it takes, the price or price range, who it suits, aftercare, and a booking button.
A good rule: if a service has its own price, its own customers and its own search term, it deserves its own page. If it is a small add-on, list it on the main services page instead.
Astiglow, a waxing studio site I built, shows the pattern well. The service menu and packages are laid out so a visitor can find their service, see the price and book in a couple of taps.
![The Astiglow services menu I built, listing each waxing service with its price and duration.](/shots/astiglow-services.jpg)
Do not go overboard. Five strong service pages beat thirty pages that differ by one word. Thin, near-duplicate pages rarely rank, and a batch of them can look like doorway pages to search engines.
## What should each service page include?
A service page should answer everything a customer asks before booking, so they never have to call just to find out the basics.
Work through the questions you hear most on the phone and answer them on the page, in plain words:
- What the service is and who it is for, in one or two sentences at the top.
- The price, or an honest starting price or range. Pages that hide price lose people who would have paid it.
- How long it takes, and how soon someone can get in.
- What happens during the appointment or job, step by step.
- What to do before and after, such as preparation or aftercare.
- Where it happens: at your location, at the customer's home or online.
- A booking, quote or call button near the top and again at the bottom.
- Three to five common questions with short answers.
Add one or two real photos of the work or the space if you have them. Before and after photos are especially useful for trades, detailing, beauty and cleaning. Keep the page focused on one service. If you find yourself writing about a second service halfway down, that second service probably needs its own page.
A page built this way does double duty. It helps the customer decide, and it gives search engines and AI assistants a clear, complete answer they can show for that service in your area.
## What is the most important page on a small business website?
The page where customers take action, because it is the only one that turns a visit into money.
For a restaurant, that is reservations or online ordering. For a salon or clinic, it is booking. For a contractor, printer or manufacturer, it is a quote request. For a lawyer or accountant, it is a consultation request or a phone call.
New York Nook, a restaurant site I built in Hollywood, is built around two actions: reservations and pickup ordering. Everything else on the site supports those two buttons.
![The New York Nook homepage I built, with Reserve a table, Order takeout and View menu buttons in the first screen.](/shots/newyorknook-home.jpg)
Make this page fast, short and obvious. Ask only for what you need to respond. If customers book online, put the booking flow on your own domain where possible, so the visit and the conversion stay on your site. "Online booking for small business websites" compares the main ways to do that.
> Open your website on your phone and time how long it takes to book, order or request a quote from the homepage. If it takes more than three taps or thirty seconds, that is the first thing to fix.
## What pages can most small businesses skip?
Skip any page you cannot keep current, because an outdated page tells visitors the business might be closed.
The usual offenders:
- A blog with two posts from three years ago.
- An events or news page that still lists last year's holiday hours.
- A team page with people who left.
- A testimonials page full of quotes nobody can verify. Link to your real Google reviews instead, or embed them.
- A gallery with a dozen photos that load slowly and add nothing.
- Separate pages for mission, vision and values. Put two honest sentences on the about page.
A blog is worth having only if you will publish useful answers to real customer questions on a regular schedule. Done that way it can bring in search traffic for years. Done half-heartedly, it is clutter.
## How many pages should my website have?
Start with five to eight pages for most businesses, and add pages only when each new one serves a real search or a real customer question.
Rough starting points by type of business:
- A new business with one offer: a one-page site with sections for services, about and contact can work well.
- A restaurant: home, menu, reservations or ordering, about, contact with hours and location, privacy policy.
- A salon, spa or clinic: home, one page per main service, booking, about, contact, privacy policy.
- A contractor or B2B shop: home, one page per service, past work, quote request, about, contact, privacy policy.
- A practice with several locations: everything above plus one page per location with its own address, hours and map.
On pricing: my Starter Site from $150 is a polished one-page site. The Business Site from $450 covers up to five pages with a booking or quote form and local SEO setup, in about 14 days. Larger multi-page builds with custom features start at $1,200. The cost calculator on this site gives a quick estimate for your own page count.
## Do I need location pages?
Only if you serve customers in several distinct places, and only if each page has real, unique information about that location.
A clinic with offices in Torrance and Long Beach should have a page for each: address, hours, parking, staff at that office, directions and a map. Those pages help people searching in each area, and they match the address on each Google Business Profile.
What does not work is the mobile detailer who creates forty pages, one for every nearby city, with the same paragraph and the city name swapped. Search engines treat those as doorway pages, and they can hurt the whole site. If you travel to customers across a region, list your service area clearly on the homepage and contact page instead. The "Local SEO checklist for small business websites" goes deeper on this.
## What goes on a good contact page?
Everything a customer needs to reach you without thinking, in the format they prefer.
- Phone number, tappable on mobile.
- Email address, or a form if you prefer.
- Street address, if customers visit, written exactly as on your Google Business Profile.
- Hours, including holiday hours when they change.
- A map, if customers come to you.
- What happens next, such as "We reply within one business day."
Keep the form short. Name, a way to reply, and a message is enough for most businesses. Every extra required field loses some people. If you need more detail, such as a quote for a print job, ask for it on a dedicated quote form instead. Artistic Printing, a commercial printer I built a site for, uses a quote management tool for exactly that reason, and keeps its contact page to the address, phone, email and hours.
![The Artistic Printing contact page I built, with the address, phone number, email and business hours.](/shots/artistic-contact.jpg)
## What should a privacy policy page say?
It should say plainly what personal information your site collects, why, who you share it with and how people can contact you about it. For most small businesses that is one short page linked in the footer.
If you serve customers in California, the state's Online Privacy Protection Act (CalOPPA) requires commercial websites that collect personal information from California consumers to post a privacy policy conspicuously and follow it. According to the California Attorney General's office, the policy must describe the kinds of identifying information collected, the types of third parties it may be shared with, and how the site tracks visitors.
For a typical service business, the page usually covers:
- What your contact, booking or quote forms collect, such as name, phone, email and appointment details.
- Which tools see that data, such as your booking provider, email service, payment processor and analytics.
- Whether you use cookies or tracking pixels, and for what.
- How long you keep form submissions and how someone can ask you to delete theirs.
- A contact email and the date the policy was last updated.
Write it to match what your site really does. A copied policy that mentions services you do not use, or misses the ones you do, is worse than a short honest one. This is general information, not legal advice, so have a lawyer review it if you handle health, financial or children's data.
## A worked example: a five-page site for a bakery
This is an illustration, not a client. A bakery in Long Beach sells walk-in, takes custom cake orders, and caters office events.
The plan: a homepage with a photo of the case, today's hours and a Order a cake button. A custom cakes page with flavors, sizes, starting prices, lead time and the order form. A catering page with sample menus and a request form. An about page with the owners and how long they have been baking. A contact page with the address, hours, parking and a map. A privacy policy in the footer.
That is six pages, two of which are action pages. No blog, no gallery page, no events page. Photos of real cakes live on the cakes page where they help someone choose. A year later, if wedding cakes become a big part of the business, that earns its own page.
## The bottom line
Start with home, services, about, contact and a privacy policy, then add one strong page where customers act. Give each main service and each real location its own page, and skip anything you cannot keep current. A small site where every page has a job will bring in more customers than a large one full of filler. If you want help planning or building it, my Business Site package covers exactly this kind of five-page site.`,
  },
];
