// Industry pages, generated batch A (Nov 22 2026): trades and home services.
import type { Industry } from '../landing';

export const industriesGenA: Industry[] = [
  {
    slug: 'plumbers-and-hvac',
    name: 'Plumbers and HVAC companies',
    noun: 'plumbing or HVAC business',
    h1: 'Websites for plumbers and HVAC companies that turn emergencies into booked jobs',
    metaTitle: 'Plumber & HVAC Website Design and Development | Thomas Osayi',
    description: 'Plumbing and HVAC websites with tap to call emergency buttons, service area pages, license display, estimate forms and financing info. Fast custom Next.js builds.',
    intro: 'Nobody browses plumbing websites for fun. People land on yours with water on the floor, a dead furnace or an air conditioner that quit in August, and they decide in seconds whether to call you or the next result. Replacement jobs are different: a new water heater or HVAC system is a considered purchase where the homeowner compares several companies. A good site handles both, with one tap to call for the emergency and a proper estimate path for the big ticket job.',
    mustHaves: [
      { title: 'A tap to call button that never moves', text: 'A sticky call button on phones, your real hours or 24/7 status next to it, and a clear line about what after hours calls cost or how they work.' },
      { title: 'Your license number where people look', text: 'California contractors must include their CSLB license number in advertising, and a website counts. Put it in the header or footer of every page.' },
      { title: 'A page per service', text: 'Drain cleaning, water heaters, leak detection, AC repair, furnace replacement. Each page answers the questions people actually ask and ranks for its own searches.' },
      { title: 'An estimate form for replacements', text: 'System age, home size, photos of the unit or nameplate, and preferred visit times, so the estimate visit starts informed.' },
      { title: 'Financing and maintenance plans explained', text: 'If you offer financing or a maintenance membership, give each its own clear section with the terms your provider approves.' },
    ],
    mistakes: [
      'A phone number that is plain text on mobile instead of a tap to call link',
      'Fifty near identical city pages with only the town name changed',
      'No license number anywhere on the site, or one that does not match the CSLB record',
      'Advertising emergency service on a site that sends after hours calls to voicemail',
    ],
    related: ['artistic-printing', 'astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'Most plumbing and HVAC companies fit the Business Site package. Many service and area pages, a maintenance plan sign up or a quote dashboard make it a Full Custom Build.',
    faqs: [
      { q: 'Do I need my contractor license number on my website?', a: 'In California, licensed contractors must include their CSLB license number in all forms of advertising, and CSLB counts websites as advertising. This is general information, not legal advice.' },
      { q: 'Should the site say we offer 24/7 emergency service?', a: 'Only if someone actually answers. If after hours calls go to an answering service or an on call tech, say so plainly and explain any after hours fee.' },
      { q: 'How many service area pages should we have?', a: 'One for each area where you can say something specific, such as jobs done there, local housing stock or response times. A handful of real pages beats dozens of copies.' },
      { q: 'Can customers book a maintenance visit online?', a: 'Yes. I can connect the scheduling tool you already use or build a simple request flow that sends the job to your dispatcher.' },
      { q: 'Can the estimate form accept photos?', a: 'Yes. Photos of a water heater label or an HVAC nameplate tell you the model and age before anyone drives out.' },
      { q: 'What does a plumbing or HVAC website cost with Thomas Osayi?', a: 'Most fit the Business Site package from $450, and larger builds with plan sign ups or internal tools start at $1,200 as a Full Custom Build.' },
    ],
    guide: `## What should a plumbing or HVAC site show in the first five seconds?
The phone number, whether you can come today, the area you serve and your license number, in that order.
Most visitors arrive on a phone, often from a "near me" search, with a problem that is getting worse while they read. They are not going to scroll past a slideshow to find out if you work in their city. The top of the homepage should carry a short headline that names what you fix, a tap to call button, a line such as "Serving the San Fernando Valley and Burbank" and a second button for non urgent requests.
Below that, the order I use is simple: the services you do most, proof (reviews, years in business, real photos of your trucks and team), how pricing works, and then the estimate form. Everything else, including the company story, goes lower. The story matters for replacement jobs, but nobody with a burst pipe needs it first.
Your hours belong in the header too. If you answer calls around the clock, say so. If you do not, say when you open, because a homepage that hides its hours makes people assume the worst and keep scrolling the search results.
## How should the emergency call button actually work?
It should be a real tel: link, stay fixed at the bottom of the screen on phones, and connect to a person or a clearly explained after hours line.
The button itself is easy. What breaks it is everything around it. I see sites where the number is an image, so it cannot be tapped. I see sites where the header number and the footer number differ because one is an old tracking line. And I see emergency claims on sites whose phones go to voicemail at six.
A few details that matter:
- Use one primary number everywhere, and keep it identical to your Google Business Profile.
- If you use call tracking, set it up so the number swaps consistently and your real number stays in the structured data.
- Put a short line under the button about after hours calls: whether there is a trip fee, and roughly how fast someone calls back.
- Track button taps as conversions in analytics, so you know which pages produce calls.
For HVAC companies in hot or cold seasons, a small banner can carry the seasonal message ("AC repair appointments available this week") without rebuilding the page each time.
## Do I have to show my license number on my website?
In California, yes: CSLB requires licensed contractors to include their license number in all forms of advertising, and its guidance lists websites as advertising.
This applies to plumbing (the C-36 classification) and HVAC (the C-20 classification) contractors just as it does to general builders. CSLB's advertising guidelines also say two other things that affect website copy. You can only advertise for work within the classifications you hold, so a plumbing contractor should not advertise electrical panel upgrades without the matching license. And contractors are not allowed to state in advertising that they are bonded, because consumers may read more protection into it than the bond provides.
In practice I put the license number in the site footer on every page, add it to the about page with the classification spelled out, and include it on the estimate confirmation email. Customers can look a number up on the CSLB website, so a visible, correct number is also a trust signal. Other states have their own rules, so check with your state board. This is general information, not legal advice.
## Should I publish prices or keep them for the phone call?
Publish how you price, and publish ranges or starting prices where your work is predictable.
Many plumbing and HVAC companies use flat rate pricing presented on site after diagnosis. You can explain that on the website without listing every job: what the diagnostic or trip fee is, whether it is credited toward the repair, and that you give the price before work starts. That alone removes a common fear.
For replacements, a starting price or a typical range for a standard water heater or a system tune up helps people self qualify. You do not have to quote a full system replacement online, and you should not. Say what drives the price instead: system size, ductwork condition, efficiency rating, access, permits.
Avoid prices you will not honor. A homepage coupon that the office refuses to apply costs more trust than it earns. If you run seasonal offers, give them an end date and remove them when they expire.
## How do I build service area pages without making doorway pages?
Write a page only for an area where you have something specific and useful to say, and link it into the site like any other page.
Google's spam policies describe doorway abuse with examples that fit trade websites closely, including pages targeted at specific regions or cities that funnel users to one page, and substantially similar pages that are closer to search results than a browseable hierarchy. Fifty city pages with the town name swapped are exactly that.
A real area page has content you could not paste into the next town's page:
- The common problems in that area: older galvanized pipes in certain neighborhoods, hard water, slab leaks, attic installs in hot inland valleys.
- Recent jobs there, with photos and a sentence on what you did.
- Response times and any area specific fees.
- Reviews from customers in that area, if you have them.
If you cannot write that for a town, list it on a single "areas we serve" page instead. That page is honest, it still helps people, and it does not put the rest of your site at risk.
> Write the first three area pages from your job history, not from a template. If a page reads the same with the city name blacked out, it is not ready to publish.
## What belongs on the estimate form for a replacement job?
Ask for what your estimator would ask on the phone, and let people attach photos.
A replacement estimate form for a plumbing or HVAC company usually needs name, phone, address or ZIP, the service (water heater, AC, furnace, heat pump, repipe), the age of the current system if known, home size, any symptoms, preferred visit windows and an upload for photos. A photo of the water heater label or the outdoor unit nameplate tells you the brand, capacity and age before you drive out.
Keep required fields to the minimum: name, phone, ZIP and service. Everything else is optional but encouraged. Use choices instead of free text wherever you can, because tapping a button is faster than typing on a phone.
![The Artistic Printing homepage I built, with a Get your quote button in the hero](/shots/artistic-home.jpg)
Structured quote intake is the core of the commercial printer site I built for Artistic Printing. The trade is different, but the principle carries straight over: when the form collects the specs up front, every request arrives ready to price. The quote request forms post on this site covers fields, uploads and routing in more depth.
After submit, send a confirmation that says what happens next and when, and route the request to whoever schedules estimates, by email or into your field software.
## How should financing and maintenance plans appear on the site?
Give each its own short section with plain terms, and use the wording your financing provider gives you.
Financing matters for big replacements, and many homeowners look for it before they call. A financing section should say who the lender is, that approval is subject to credit, and how to apply, usually through the provider's own link. If you want to advertise specific monthly payments or rates, lending disclosure rules can apply, so take the approved language from your provider rather than writing your own numbers.
Maintenance memberships work best with a simple table: what is included, how many visits a year, any repair discount and the price. If you want people to join online, that is a small payments feature, which moves a build from the Business Site package to a Full Custom Build.
## The bottom line
A plumbing or HVAC website wins on speed and honesty: a call button that works, hours that are true, a license number that checks out, real pages for real service areas and an estimate form that gets the details the first time. Start with the homepage, a page per main service, a handful of genuine area pages and the estimate form. Add memberships, online booking or a quote dashboard once the basics are bringing in calls.`,
  },
  {
    slug: 'roofers-and-general-contractors',
    name: 'Roofers and general contractors',
    noun: 'contracting business',
    h1: 'Websites for roofers and general contractors that win the estimate',
    metaTitle: 'Roofer & General Contractor Website Development | Thomas Osayi',
    description: 'Roofing and general contractor websites with project galleries, CSLB license display, estimate forms with photo uploads and honest service area pages, built in Next.js.',
    intro: 'Roofing and remodeling are expensive, high trust purchases. A homeowner will usually collect several estimates, and the website is how they decide who gets invited out. What wins that invitation is proof: real projects with real photos, a license number that checks out, a clear process and an estimate request that shows you take the job seriously.',
    mustHaves: [
      { title: 'Project pages, not just a gallery', text: 'Each job with the scope, the location, the materials, before and after photos and how long it took. These pages sell the next job and rank for local searches.' },
      { title: 'License and insurance up front', text: 'Your CSLB license number and classification on every page, and a plain statement about insurance coverage.' },
      { title: 'An estimate form built for your trade', text: 'Property address, roof type or project type, scope, timeline, budget range and photo uploads, so the site visit is not a cold start.' },
      { title: 'A clear process', text: 'What happens from the first call to the final walkthrough: inspection, written estimate, permits, scheduling, cleanup and warranty.' },
      { title: 'Warranty information', text: 'Your workmanship warranty and any manufacturer warranty you can offer, written plainly with what each covers.' },
    ],
    mistakes: [
      'A gallery of unlabeled photos with no location, scope or materials',
      'Stating "licensed, bonded and insured" when CSLB guidance says not to advertise bonding',
      'Advertising work outside the license classifications you hold',
      'A contact form with only name, email and message for a five figure project',
    ],
    related: ['artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A roofer or contractor with a few services fits the Business Site package. Many project pages with a CMS, or an estimate dashboard for your office, make it a Full Custom Build.',
    faqs: [
      { q: 'Where should my CSLB license number go?', a: 'On every page, usually in the footer, plus the about page and estimate confirmations. California requires it in all forms of advertising, including websites; this is general information, not legal advice.' },
      { q: 'Can I say we are bonded?', a: 'CSLB guidance says contractors should not state in advertising that they are bonded, so I leave it off and focus on license and insurance instead.' },
      { q: 'Can I add new projects myself?', a: 'Yes. On larger builds I set up a simple CMS or admin page so you can add a project with photos, location and scope from your phone.' },
      { q: 'Should I show prices for roofing or remodeling?', a: 'Starting prices or typical ranges for common jobs help people self qualify, as long as you explain what moves the price.' },
      { q: 'Can the estimate form handle storm damage requests?', a: 'Yes. A separate path for leaks and storm damage can flag urgency and collect photos, without promising any insurance outcome.' },
    ],
    guide: `## What does a homeowner check before inviting a contractor out?
They check whether you are licensed, whether you have done this kind of job before, what other customers say and whether you seem organized.
That last one is underrated. A homeowner about to spend serious money on a roof or a kitchen is trying to judge whether you will show up, communicate and finish. Your website is the first sample of how you work. Clear pages, current photos, a correct phone number and a form that asks sensible questions all read as "this company is organized". A site that still lists a project from years ago as "recent work" reads the opposite way.
The homepage for a roofer or general contractor should lead with what you build and where, then go straight into proof: two or three strong project photos, your license number, a short review or two and a button to request an estimate. The full portfolio, the process page and the warranty page sit one tap away.
## How should I display my CSLB license and insurance?
Put the license number and classification on every page and say plainly what insurance you carry, without advertising bonding.
California requires licensed contractors to include their license number in all forms of advertising, and CSLB's guidelines name websites. The same guidelines say you may only advertise work within the classifications you hold. A roofing contractor (C-39) should not advertise full remodels unless they also hold the right license; CSLB notes that general building ("B") and general engineering ("A") licensees can advertise as general contractors. CSLB also says contractors should not mention bonding in advertising, so the familiar "licensed, bonded and insured" line is one I rewrite.
What works on the page:
- License number and classification in the footer of every page.
- An about page section that spells out the classification in words, with a note that customers can verify the license on the CSLB website.
- A plain line about insurance, such as general liability and workers' compensation if you carry them.
Other states have different boards and rules. Treat this as general information, not legal advice, and check with your licensing board.
## How do I make before and after photos actually persuasive?
Shoot them from the same spot, label them with the scope and location, and put them on a project page with a short story.
A before photo of a sagging roofline next to an after photo from the same angle does more than any paragraph. Consistency is the whole trick: same position, similar light, wide enough to show context. Phone photos are fine if they are sharp and level.
![The Artistic Printing portfolio I built, with filters for browsing past work](/shots/artistic-portfolio.jpg)
The portfolio on the Artistic Printing site I built uses filters so a visitor can jump to the kind of work they care about. Contractors benefit from the same idea: filter by roofing, kitchens, bathrooms, additions or by area.
Each project page should carry a few facts: the city or neighborhood (not the street address, unless the owner agrees), what was done, materials, roughly how long it took and anything difficult you solved. Those details are what a homeowner with the same problem is searching for.
## What should a roofing or remodeling estimate form ask for?
Ask for the property, the project type, the scope, the timeline and a budget range, and let people attach photos.
For a roofer, useful fields are property address, roof type (shingle, tile, flat, metal), approximate age, whether it is a leak, a repair or a full replacement, how many stories, and photos. For a general contractor, it is project type, rough size, whether plans exist, desired start date and a budget range.
Budget ranges feel awkward to some owners, but they save both sides time. Offer bands instead of a blank field, and include "not sure yet". A request with a realistic band and photos lets you decide whether to send your estimator, call first or politely refer the job.
Keep a separate quick path for active leaks and storm damage, with only name, phone, address and photos. Mark those requests as urgent in the notification. Do not promise outcomes on insurance claims in that copy; describe what you do, such as inspecting, documenting and repairing.
> Ask your estimator which three questions they ask on every first call. Those three become required fields, and everything else stays optional.
## Should a general contractor list every service or specialize the pages?
Give your real core services their own pages and group the occasional work under a single page.
A contractor who mostly does kitchens, bathrooms and additions should have a strong page for each of those three. Each page explains your approach, typical timelines, what drives cost, permits and a set of matching projects. The handyman style jobs you take now and then can sit on one "other work" page.
This matters for search and for trust. A site that lists twenty services equally looks like it does everything and specializes in nothing. A site with three deep service pages, each linked to real projects, looks like an expert.
## How do I rank in nearby cities without doorway pages?
Let your project pages carry the local relevance, and write area pages only where you have real jobs and something specific to say.
Google's spam policies describe doorway abuse, including pages aimed at specific regions or cities that funnel users to one page and substantially similar pages. A roofing site with a hundred copies of "Roof Replacement in [City]" fits that description.
The better route for contractors is natural: every project page names its city, and an area page for a city links to the projects done there, describes local considerations (older housing stock, hillside access, HOA rules, wildfire zones) and lists the services you offer in that area. If you have finished one job in a town, mention it on a general areas page instead of building a thin page around it.
## How do I keep the estimate requests worth answering?
Set expectations on the site: typical project sizes, budget bands, how soon you can start and which areas you cover.
Contractors often say their website brings in requests that are too small, too far away or too early. The site can filter politely. A line such as "Most of our remodels range from a single bathroom to whole home renovations" and a visible service area map steer people before they fill in the form. The budget band and timeline fields do the rest. Route qualified requests to the estimator and send everything else a polite automatic reply with next steps.
## The bottom line
A roofer or general contractor website earns the estimate visit with proof and clarity: labeled project pages with consistent before and after photos, a license number and classification on every page, honest insurance language, a structured estimate form with photo uploads, and area pages only where real jobs exist. Build the core pages first, then grow the project library every month. That library becomes your best salesperson and your best local SEO.`,
  },
  {
    slug: 'cleaning-services',
    name: 'Cleaning services',
    noun: 'cleaning business',
    h1: 'Websites for cleaning companies that book recurring clients',
    metaTitle: 'Cleaning Service Website Design & Online Booking | Thomas Osayi',
    description: 'Websites for house and commercial cleaning companies: clear pricing, online booking for recurring cleans, quote forms, trust signals and local SEO. Built in Next.js.',
    intro: 'Cleaning is a business built on repeat visits and trust. A house cleaning customer is letting strangers into their home, and an office manager is handing you keys and an alarm code. The website has to make that feel safe, show what a clean costs and let someone book or request a walkthrough in a couple of minutes, ideally starting a recurring schedule rather than a one time job.',
    mustHaves: [
      { title: 'Separate residential and commercial paths', text: 'Homeowners and facility managers want different things. Each gets its own page, pricing approach and form.' },
      { title: 'Pricing people can estimate', text: 'Starting prices by home size or a simple calculator by bedrooms and bathrooms, with what standard and deep cleans include.' },
      { title: 'Online booking for recurring cleans', text: 'Pick the clean type, frequency, date and time, with the recurring discount shown clearly.' },
      { title: 'Trust signals that are true', text: 'Real team photos, how you screen and train staff, insurance, and a satisfaction policy with its actual terms.' },
      { title: 'A walkthrough request for commercial work', text: 'Square footage, frequency, after hours access and special areas, so the walkthrough is already half scoped.' },
    ],
    mistakes: [
      'Hiding every price behind "call for a quote" for a standard house clean',
      'A checklist that does not say what is excluded, such as inside the oven or windows',
      'Stock photos of models in spotless kitchens instead of your actual team',
      'One form for both homeowners and office managers',
    ],
    related: ['astiglow', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'Most cleaning companies fit the Business Site package. An instant price calculator, recurring online booking with payments or a client portal make it a Full Custom Build.',
    faqs: [
      { q: 'Can customers book a recurring clean online?', a: 'Yes. I can embed the booking tool you already use or build a booking flow with clean type, frequency and time slots that feeds your schedule.' },
      { q: 'Can the site give an instant price?', a: 'Yes. A calculator based on bedrooms, bathrooms, clean type and add ons gives a price or range, which you confirm before the first visit.' },
      { q: 'Should we say we are bonded and insured?', a: 'Say it only if it is true and current, and be ready to explain what each covers. Accurate claims build trust; vague ones invite questions.' },
      { q: 'Do commercial and residential need separate pages?', a: 'Yes. Office managers search for different terms and need a walkthrough, while homeowners usually want a price and a booking.' },
      { q: 'Can we take a card on file for recurring cleans?', a: 'Yes, through a payment provider such as Stripe, so the card is stored by the processor and not on your website.' },
    ],
    guide: `## Residential or commercial: does the site need two paths?
Yes, because a homeowner and an office manager arrive with different questions, search for different terms and need a different next step.
The homeowner wants to know what a clean costs, what is included, whether your team is trustworthy and when you can come. Their next step is booking or a quick quote. The facility manager wants to know whether you handle their type of space, whether you work nights, how you manage keys and alarm codes, whether you carry the insurance their landlord requires and how invoicing works. Their next step is a walkthrough.
On the homepage, I split these right under the headline: two clear buttons, "Home cleaning" and "Office and commercial cleaning". Each leads to its own page with its own pricing approach, proof and form. If you only do one, leave the other out entirely. A residential company with a half hearted commercial page looks less focused, not bigger.
## Should a cleaning company show prices online?
For residential cleaning, yes: starting prices or a simple calculator remove the biggest reason people leave without booking.
House cleaning is predictable enough to price from a few inputs: bedrooms, bathrooms, approximate square footage, clean type (standard, deep, move in or move out) and add ons such as inside the fridge, oven or windows. You can show a small table of starting prices, or a calculator that returns a price or a range.
Be clear about the rules around the number: the first clean is often a deep clean, the price is confirmed after the first visit, and recurring visits are discounted. Say what is not included. Most disputes with cleaning clients start with an assumption about what "everything" meant.
Commercial pricing depends on square footage, frequency and scope, so give a sentence on how you price and send people to the walkthrough request instead of a number.
## How does online booking work for recurring cleans?
The client chooses the clean type, frequency, a first date and a time window, and the booking either lands in your scheduling software or arrives as a request you confirm.
There are two common setups. If you already use field service or booking software, I embed or link its booking page and style the surrounding site to match, so the calendar stays in one place. If you do not, a custom booking flow can collect everything and send it to your inbox or a simple dashboard, where you confirm the slot by reply.
![Step one of the Astiglow booking flow I built: choose a service, with prices shown](/shots/astiglow-book.jpg)
On the Astiglow studio site I built, the booking starts by choosing a service with its price visible, which removes the "how much is this" question before it is asked. A cleaning booking works the same way: show the price next to each clean type and the recurring discount next to each frequency.
Recurring cleans usually involve a card on file. That should go through a processor such as Stripe so card details never touch your website. Payments move a project from the Business Site package to a Full Custom Build, so many companies start with a request flow and add payments later.
> Show the weekly, every two weeks and monthly prices side by side on the booking step. People pick a frequency much more readily when they can see what each one saves.
## What trust signals matter when a stranger enters someone's home?
Real photos of your team, a plain explanation of how you hire and train, accurate statements about insurance and a satisfaction policy with real terms.
Every claim here must be true. If you run background checks, say so and say who runs them. If you carry liability insurance, say so. If you are bonded, say so only if you have a current bond and can explain what it covers. Vague badges invite questions, and false ones cost far more than they bring in.
Other trust details that help:
- Team photos in uniform, and the names of supervisors or owners.
- How keys, lockboxes and alarm codes are handled.
- Whether the same cleaner or team comes each time.
- What happens if something is damaged or missed, written as a short policy rather than a slogan.
- Recent reviews, ideally ones that mention specific cleaners by first name.
For the review side, the post on getting more Google reviews without breaking Google's rules explains how to ask after a visit without gating or incentivizing.
## What should a commercial cleaning quote form ask?
Ask for the type of space, square footage, frequency, preferred hours, access arrangements and any special areas, then offer a walkthrough.
A useful commercial form for a cleaning company includes the business name, contact, address, space type (office, medical office, retail, warehouse, school), approximate square footage, number of restrooms, desired frequency, preferred cleaning hours, how access works and any special requirements such as floor care or supplies provided. Photos and a floor plan upload help for larger spaces.
Use dropdowns for space type and frequency so requests arrive in a consistent shape. Then send each request to whoever runs walkthroughs, with the details in the subject line so they can prioritize. The quote request forms post on this site goes deeper on fields and routing.
## How do I handle service areas for a cleaning business?
State your service area clearly with a list or map, and write separate area pages only where you genuinely operate with something specific to say.
Cleaning companies often run tight routes, so a service area that is honest also protects your schedule. A ZIP code check on the booking form is a simple way to stop requests from outside your area before they waste anyone's time.
For search, a single strong "areas we serve" page plus a few genuine area pages works better than dozens of copies. Google's spam policies treat near identical city pages that funnel visitors to one page as doorway abuse. A real area page might mention the kinds of homes you clean there, parking or building access notes, and reviews from clients nearby. Keep your Google Business Profile service area consistent with the site.
## What should the site say about licensing and policies?
Say what applies to you, keep it accurate, and put your cancellation and lockout policies in writing.
Requirements for cleaning businesses vary by city and county, usually a local business license rather than a trade license, so I do not put badges on a site without knowing what they mean. What clients do need to see is your cancellation window, any lockout fee if the cleaner cannot get in, what happens on holidays and how to pause service. Those policies belong on the booking page and in the confirmation email.
## The bottom line
A cleaning company website should make two things easy: knowing what a clean costs and booking the first one, ideally as a recurring schedule. Split residential and commercial, show starting prices or a calculator, explain inclusions and exclusions, back up every trust claim and give commercial clients a proper walkthrough request. Start with a booking or request flow you can run today, and add payments and a client portal when volume justifies it.`,
  },
  {
    slug: 'landscapers-and-lawn-care',
    name: 'Landscapers and lawn care companies',
    noun: 'landscaping business',
    h1: 'Websites for landscapers and lawn care companies',
    metaTitle: 'Landscaping & Lawn Care Website Development | Thomas Osayi',
    description: 'Landscaping and lawn care websites with project galleries, design consultation requests, recurring maintenance sign ups, route friendly service areas and local SEO.',
    intro: 'Landscaping businesses usually sell two very different things. Design and installation projects are big, visual and occasional, and they are won with photos and a good consultation. Lawn care and maintenance are small, recurring and route based, and they are won by making sign up easy for people on the streets you already drive. A good site gives each its own path instead of mixing them on one page.',
    mustHaves: [
      { title: 'Separate paths for projects and maintenance', text: 'A design and install path with a consultation request, and a maintenance path with plans, frequency and an address check.' },
      { title: 'Project pages that show change over time', text: 'Before, just after install and a season later, with the plants and materials used and the problem solved.' },
      { title: 'A consultation request that scopes the job', text: 'Yard size, photos, goals, budget range, HOA rules and timing, so the first visit is productive.' },
      { title: 'Clear maintenance plans', text: 'What weekly or every two weeks service includes, what costs extra, and how seasonal work like cleanups is handled.' },
      { title: 'Licensing shown where it applies', text: 'In California, landscape construction generally needs a CSLB license, and licensed contractors must show the number in advertising.' },
    ],
    mistakes: [
      'One generic contact form for both a backyard redesign and weekly mowing',
      'Only photos taken on install day, which never show the garden grown in',
      'Accepting maintenance sign ups from addresses far off your routes',
      'Listing water rebate amounts on the site that changed months ago',
    ],
    related: ['artistic-printing', 'astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'Most landscaping and lawn care companies fit the Business Site package. Online maintenance sign up with recurring payments or a customer portal makes it a Full Custom Build.',
    faqs: [
      { q: 'Do landscapers in California need to show a license number?', a: 'Licensed contractors, including C-27 landscaping contractors, must include their CSLB license number in advertising, websites included. Whether your work needs a license depends on its type and size, so check with CSLB; this is not legal advice.' },
      { q: 'Can customers sign up for weekly lawn service online?', a: 'Yes. A sign up flow can check the address against your service area, offer the plans you run and either confirm automatically or send you a request to approve.' },
      { q: 'How should we show design projects?', a: 'As individual project pages with before and after photos, plant and material lists and a short story, filterable by project type.' },
      { q: 'Can we mention turf replacement or water wise landscaping?', a: 'Yes, and it is a strong page for California searches. Link to your water agency program for current rebate details rather than quoting amounts that change.' },
      { q: 'What does a landscaping website cost with Thomas Osayi?', a: 'Most fit the Business Site package from $450, and online plan sign ups with payments make it a Full Custom Build from $1,200.' },
    ],
    guide: `## Is my business design and install, maintenance, or both?
Decide which one you want more of, then give each its own path, because they attract different customers and need different forms.
A design and install customer is planning a project worth thousands. They want to see your best work, understand your process and book a consultation. A maintenance customer wants their lawn mowed every week by someone reliable, at a fair price, starting soon. If both land on the same "contact us" form, you get mowing requests in the consultation queue and backyard redesigns buried among weekly service inquiries.
On the homepage I put two clear choices under the headline: "Design and installation" and "Lawn care and maintenance". Each opens its own page with its own proof and call to action. If you are trying to grow one side, give it the first button and the bigger photo.
## How do I show landscape projects so they sell the next one?
Use project pages that show the space before, right after the install and again once it has grown in, with the plants, materials and the problem you solved.
Landscaping has an advantage most trades do not: the work gets better over time. A garden photographed on install day looks sparse. The same garden a season later is what clients actually want. Go back to strong projects with a phone and take the same shots again. Those three photo sets side by side are your most persuasive content.
Each project page should say where it is (city or neighborhood), what the brief was, what you built (patio, retaining wall, irrigation, planting), the main plants and materials, and anything tricky such as drainage, slopes or a tight budget. Filters by project type let visitors jump to what interests them. Those details also match what people search for, such as "drought tolerant front yard" or "paver patio" in their city.
## Do landscapers need to show a license number?
In California, licensed contractors must include their CSLB license number in all advertising, including websites, and landscape construction generally falls under the C-27 Landscaping classification.
Whether a given job needs a contractor license depends on what the work is and its size. Construction work such as hardscape, irrigation systems and grading is different from routine mowing and pruning, and CSLB is the authority on where your work falls. If you hold a license, put the number and classification in the footer of every page and on your about page. CSLB's advertising guidelines also say you should only advertise work within your classification and should not advertise that you are bonded.
If your business is maintenance only and does not hold a license, do not imply that it does. Describe what you do accurately. This is general information, not legal advice, so confirm your situation with CSLB or your state board.
## How should recurring lawn care sign up work?
The customer enters an address, the site checks it against your service area, they pick a plan and frequency, and you either confirm automatically or approve the request.
Route density is what makes maintenance profitable, so the address check is the most important part. A ZIP code list is the simple version. A drawn service area is the precise one. Addresses outside it can get a polite message and a waitlist option, which is better than a request you have to turn down by phone.
Plans should be easy to compare: weekly or every two weeks, what each visit includes (mowing, edging, blowing, a quick weed pass), what costs extra (hedge trimming, cleanups, fertilizing) and the price or price range by lot size. If you have seasonal changes, such as fewer visits in winter, say so on the plan.
Many companies start with a request form that you confirm by text, then move to card on file billing through a processor like Stripe once volume grows.
![The FieldOps sign in page I built, listing Outlook Calendar sync, documents and contacts](/shots/fieldops-login.jpg)
For field teams, I built FieldOps, a job scheduling tool with Outlook Calendar sync. It is not a landscaping product, but it shows where a maintenance website can lead later: requests from the site becoming scheduled jobs on a crew calendar instead of notes on paper.
## What should a design consultation request ask for?
Ask for the address, the area of the property, goals, photos, a budget range, timing and any HOA or permit constraints.
Useful fields for a landscape design request: front yard, backyard or both; approximate size; what the client wants (lower water use, outdoor living, privacy, play space, curb appeal); current problems such as drainage or a slope; photos of the space; budget range in bands; desired timing; and whether there is an HOA. A question about whether they want design only or design and installation saves a lot of back and forth.
Keep required fields short and make the rest optional. Then send a confirmation that explains your consultation process and whether there is a design fee.
> Put your consultation or design fee on the site, along with whether it is credited toward the installation. It filters out casual requests and makes serious clients more comfortable booking.
## How should service area pages work for a route based business?
Show the real service area clearly, and write individual area pages only where you have projects or routes there and something specific to say.
For maintenance, the area is defined by your routes, so a map and ZIP list do more than city pages. For design and install, you may travel further for the right project, and an area page can earn its place by linking to projects done there and describing local conditions: soil, microclimate, hillside lots, wildfire defensible space considerations, HOA patterns.
What to avoid is a stack of city pages with only the name changed. Google's spam policies describe pages aimed at specific cities that funnel visitors to one page, and substantially similar pages, as doorway abuse. A short, honest list of areas served is always safe.
## Should the site talk about water wise landscaping and rebates?
Yes, if you do that work, and link to the current program rather than quoting rebate amounts that can change.
In much of California, drought tolerant and water efficient landscaping is one of the most searched landscaping topics, and local water agencies have run turf replacement and irrigation rebate programs. A dedicated page explaining what you install, how a lawn conversion works, typical timelines and how you help clients with the rebate paperwork can bring in strong leads. Keep the money details on the agency's page, and check the link each season.
## The bottom line
A landscaping and lawn care website should split the business in two: a portfolio led path for design and installation with a consultation request that scopes the job, and a simple, address checked sign up for recurring maintenance. Show projects as they grow in, display your license where it applies, describe your service area honestly and keep rebate details pointing at the source. Start with those core pages, then add online billing or scheduling when the routes fill up.`,
  },
  {
    slug: 'moving-companies',
    name: 'Moving companies',
    noun: 'moving company',
    h1: 'Websites for moving companies that customers can trust',
    metaTitle: 'Moving Company Website Design & Quote Forms | Thomas Osayi',
    description: 'Moving company websites with detailed estimate forms, correct USDOT and California permit display, transparent pricing, real crew photos and reviews. Built in Next.js.',
    intro: 'People hiring movers are handing over everything they own, often in a stressful week, and they have heard stories about bait and switch quotes. A moving company website has to prove you are real and properly registered, explain how pricing works and collect enough detail for an estimate that holds up on moving day.',
    mustHaves: [
      { title: 'Registration numbers displayed correctly', text: 'Your USDOT number for interstate household moves and your California household movers permit number for moves within the state, shown where the rules expect them.' },
      { title: 'An estimate form that captures the move', text: 'Dates, both addresses, home size, stairs and elevators, packing, special items and an inventory or video walkthrough option.' },
      { title: 'Pricing explained honestly', text: 'How local hourly moves and long distance moves are priced, what adds cost and what deposit and cancellation terms apply.' },
      { title: 'Proof you are a real company', text: 'Your physical address, photos of your own trucks and crews, and reviews from real customers.' },
      { title: 'Separate local and long distance pages', text: 'Different questions, different pricing and different paperwork, so each gets its own page.' },
    ],
    mistakes: [
      'No USDOT or state permit number anywhere on a site that advertises household moves',
      'Advertising California moving rates by the cubic foot, which state law prohibits',
      'Stock photos of trucks with another company logo blurred out',
      'A quote form with only name, phone and moving date',
    ],
    related: ['artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'Most moving companies fit the Business Site package. An inventory based estimator, online deposits or a quote dashboard for your office make it a Full Custom Build.',
    faqs: [
      { q: 'Do movers have to show a USDOT number on their website?', a: 'Federal rules require interstate household goods carriers to include their name and USDOT number in advertisements, and household goods brokers must show theirs on their website homepage. This is general information, not legal advice.' },
      { q: 'What about moves within California?', a: 'Household movers operating within California need a permit from the Bureau of Household Goods and Services, and state regulations require the mover name and permit number in all forms of advertising.' },
      { q: 'Can the site give an instant moving quote?', a: 'It can give a range from home size, distance and extras, which your team confirms after a walkthrough or inventory. Make clear it is an estimate.' },
      { q: 'Can customers send a video of their home?', a: 'Yes. A quote form can accept video uploads or a link to a recording, which helps your estimator size the job without a site visit.' },
      { q: 'Can we take booking deposits online?', a: 'Yes, through a payment provider such as Stripe, with your deposit and cancellation terms shown before payment.' },
    ],
    guide: `## What does someone planning a move need to see before requesting a quote?
They need to see that you are a real, registered company, that you do their kind of move, roughly how pricing works and how to get an estimate.
Moving is a trust purchase with a reputation problem. Many people have heard about quotes that doubled on moving day or belongings held until an extra fee was paid. Your homepage has to answer that worry before it asks for anything. Lead with what you do and where (local moves in a metro area, long distance from California, office moves), then put proof right under it: your registration numbers, photos of your own trucks and crews, reviews and your physical address.
The estimate request belongs on the homepage too, as a short first step that leads to the full form. Many movers use a two step form: date, origin ZIP, destination ZIP and home size first, then the details. That keeps the first step light while still getting what the estimator needs.
## Which registration numbers belong on a moving company website?
For interstate household moves, your name and USDOT number belong in your advertising; for moves within California, your name and state permit number do. This is general information, not legal advice.
On the federal side, FMCSA's rules for household goods carriers (49 CFR 375.207) say every advertisement must include your name as it appears on your USDOT registration and your USDOT number, written in the form "U.S. DOT No." followed by the number. Your website is the most visible advertising you have, so the number belongs in the footer of every page. Household goods brokers have a separate rule (49 CFR 371.107) that names the website homepage directly: they must display their physical location, USDOT and MC numbers, and state that they are a broker and do not transport the goods themselves.
In California, household movers that operate within the state need a permit from the Bureau of Household Goods and Services, which took over the program from the Public Utilities Commission. The Bureau's regulations require a household mover to include its name and Bureau issued permit number in all forms of advertising, solicitation and other presentments to the public. The permit number, often called the Cal T number, also has to appear on every vehicle.
If you do both kinds of moves, show both numbers, labeled clearly. Check the current rules with FMCSA and the Bureau, or a lawyer, before you launch.
## How should a moving estimate form work?
It should capture everything that changes the price: dates, both addresses, home size, access at each end, packing, special items and an inventory.
The fields that matter for a household move:
- Move date and how flexible it is.
- Origin and destination addresses, or at least ZIP codes.
- Home type and size (studio, one bedroom, house with garage).
- Stairs, elevators, long walks from the truck and parking at each end.
- Packing: full packing, partial, fragile items only or none.
- Special items: piano, safe, gym equipment, large artwork, appliances.
- Storage needs between move out and move in.
- An inventory, either a simple room by room checklist or a video upload.
Video walkthroughs are worth offering. A two minute phone video of each room gives an estimator far more than a list typed on a phone. Accept uploads or a link, and send the request to your estimator with the move date in the subject line.
Structured intake like this is the core of the quote tool I built for Artistic Printing, a commercial printer. The trade is different, but the lesson carries over: when the form asks for the specs that set the price, the first reply can be a real estimate instead of more questions.
> Add a required question on access at both addresses. Stairs, elevators and long carries are the details customers forget and the ones that most often turn into a dispute on moving day.
## Can I show prices on a moving website?
You can explain how you price and show rates where your pricing is predictable, but in California you must not advertise rates by the cubic foot.
For local moves, many companies charge by the hour for a crew and truck, sometimes with a minimum and a travel fee. Showing "two movers and a truck from X per hour, three hour minimum" style information helps people compare honestly. Say what adds time: stairs, long carries, packing, disassembly.
California's Household Movers Act (Business and Professions Code section 19253.1) says a household mover shall not advertise, quote or charge a rate based on cubic feet or another volumetric measurement. The state also sets maximum rates for in state household moves through a tariff the Bureau administers. Interstate moves follow federal rules on estimates, which differ again. Write pricing copy that matches the moves you actually do, and have it checked.
## How do I earn trust in an industry known for scams?
Show the things a fly by night operator cannot: a real address, your own trucks, named crew leads, current registration numbers and clear terms.
![The Artistic Printing contact page I built, with address, phone, email and hours](/shots/artistic-contact.jpg)
A contact page like the one I built for Artistic Printing, with a street address, phone, email and hours in plain view, does quiet but important work for a moving company. Add photos of your actual trucks with your name on them, your warehouse or office if you have one, and your crew leads by first name.
Then write the terms customers worry about: deposit amount, when it is refundable, how cancellation works, what valuation or protection options you offer and how claims for damage are handled. Plain policies on the site prevent arguments later.
## Local, long distance or both: how should the pages be organized?
Give local moves, long distance moves and any specialty services their own pages, because each has different questions, pricing and paperwork.
A local moves page explains hourly pricing, crew sizes and typical durations by home size. A long distance page explains how estimates work, delivery windows, and the federal registration that applies. Specialty pages such as office moves, piano moving or packing services stand alone if you do enough of that work.
For cities, the same rule applies as for any service business. Google's spam policies describe pages targeted at specific cities that funnel users to one page as doorway abuse. A page for a city or a common route is worth writing only if you can add real detail: building types, parking permits, typical access issues, moves you have done there.
## How do reviews and booking deposits fit in?
Show recent reviews near the estimate form, and take deposits only after the estimate is agreed, with terms shown before payment.
Reviews from people who moved recently, especially ones mentioning crews by name or tricky moves handled well, are the strongest proof you have. Ask every customer after the move. If you take a deposit online, a payment link from a processor like Stripe after the estimate is accepted keeps it simple, and the terms should appear right above the pay button.
## The bottom line
A moving company website wins by being verifiably real: correct USDOT and California permit numbers where they belong, your own trucks and address, honest pricing that follows the rules, and an estimate form detailed enough that the quote holds up on moving day. Build those foundations first, then add an inventory estimator, online deposits or a quote dashboard when your volume calls for it. None of this is legal advice, so confirm the registration and advertising rules for your moves before launch.`,
  },
];
