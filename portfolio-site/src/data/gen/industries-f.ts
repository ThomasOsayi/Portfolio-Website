// Industry pages, generated batch F (Nov 27 2026).
import type { Industry } from '../landing';

export const industriesGenF: Industry[] = [
  {
    slug: 'breweries-and-wineries',
    name: 'Breweries and wineries',
    noun: 'taproom',
    h1: 'Brewery and winery websites that show what is pouring and fill the tasting room',
    metaTitle: 'Brewery & Winery Website Design | Thomas Osayi',
    description: 'Brewery and winery websites with today\'s hours, an editable tap list or tasting menu, events, tasting reservations, club signups and a careful age gate. Built in Next.js.',
    intro: 'People decide to visit a taproom or tasting room on short notice. A group text asks whether you are open, what is on tap, whether there is music tonight and whether they need a reservation for six. If the website answers those in one screen on a phone, they come. If it shows last spring\'s beer list and a Facebook link for events, they go somewhere that does. A good brewery or winery site keeps that information current without a developer and respects the extra rules that come with selling alcohol.',
    mustHaves: [
      { title: 'Today\'s hours and what is pouring, up top', text: 'The current day\'s hours, kitchen or food truck schedule and the live tap list or tasting flight, visible before anyone scrolls.' },
      { title: 'A tap list or tasting menu staff can edit from a phone', text: 'Each beer or wine as an entry with style or varietal, ABV, pour sizes and prices, and an on or off switch for when a keg kicks or a vintage sells out.' },
      { title: 'An events calendar where every event has its own page', text: 'Release days, trivia, live music and winemaker dinners with a date, time, price and ticket or RSVP link, so each one can be shared and found in search.' },
      { title: 'Tasting reservations with real capacity', text: 'Time slots that close when the room or the tasting bar is full, a party size limit, group booking requests and a clear note that guests who taste must be 21 or older.' },
      { title: 'Club membership signup that explains the terms', text: 'Tiers, shipment or pickup schedule, member pricing, how billing works and how to skip or cancel, written plainly before anyone enters a card.' },
    ],
    mistakes: [
      'Posting the tap list as a photo of the chalkboard that phones cannot zoom and Google cannot read',
      'Website hours that disagree with Google Business Profile, especially on holidays and private event days',
      'Putting every event only on Instagram, so the site never ranks for "brewery events near me" or "wine tasting this weekend"',
      'Shipping or club signup forms that accept any state and any age, with no note about where you can legally ship',
    ],
    related: ['new-york-nook', 'astiglow', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A taproom or tasting room site with hours, an editable tap list or tasting menu, an events calendar and a reservation request form fits the Business Site package from $450. Paid event tickets, club memberships with recurring billing, or online bottle and can sales with shipping rules make it a Full Custom Build from $1,200.',
    faqs: [
      { q: 'Can my staff update the tap list without a developer?', a: 'Yes. The tap list can be a set of entries in a simple admin or CMS where a bartender switches a beer on or off and edits prices from a phone in under a minute.' },
      { q: 'Does a brewery or winery website legally need an age gate?', a: 'I could not find a federal rule that requires a pop-up age gate on the website itself, but many producers use one as a good faith step, and the legal age checks that matter happen at the sale and at delivery. Check your state rules with your licensing agency or a lawyer, since this is general information and not legal advice.' },
      { q: 'Do TTB advertising rules apply to my website?', a: 'Yes. TTB Industry Circular 2024-1 says websites and mobile websites must comply with TTB advertising regulations, and it generally treats a website and its subpages as one advertisement.' },
      { q: 'Can a California winery ship wine to customers who order on the website?', a: 'The Wine Institute says shipping to adult California consumers is a basic privilege of a Type 02 winegrower license, and out-of-state wineries need a Type 82 Wine Direct Shipper Permit. Other states have their own rules, so confirm with the agencies before you open shipping to them.' },
      { q: 'Should event tickets be sold on my site or through a ticketing platform?', a: 'For a few events a month, a ticketing platform linked from each event page is quicker and cheaper to set up, while tickets sold on your own site make sense once events are a steady part of your revenue.' },
      { q: 'What does a brewery or winery website cost?', a: 'Thomas Osayi builds taproom and tasting room sites on the Business Site package from $450, or a Full Custom Build from $1,200 for club memberships, paid tickets or online sales with shipping.' },
    ],
    guide: `## What should a brewery or winery website show first?
It should show today's hours, what is pouring right now and the next event, because those are the three things people check before they drive over.
The home page of a taproom or tasting room site is closer to a live status board than a brochure. Put a line at the top that reads like "Open today 2 pm to 10 pm, food truck from 5 pm" and update it automatically from your weekly hours, with overrides for holidays and private buyouts. Below it, show the current tap list or tasting flight and a card for the next one or two events. Your story, the barrel room photos and the history of the vineyard belong further down, where people who already decided to visit will read them.
I have not built a site for a brewery or winery yet. The closest work I have done is for New York Nook, a restaurant in Hollywood, where the home page leads with reserving a table, ordering takeout and viewing the menu, and private events have their own page. A taproom needs the same priorities with a different menu.
![The catering and private events page I built for New York Nook](/shots/newyorknook-catering.jpg)
## How should a tap list or tasting menu stay current?
It should be a set of structured entries your staff can switch on and off from a phone, not an image of the chalkboard.
Each beer or wine gets a short record: name, style or varietal, ABV, a one-line description, pour sizes with prices, and flags for whether it is on tap, available in cans or bottles to go, or members only. When a keg kicks, a bartender flips it off and the site updates. Because the list is real text, phones render it cleanly and search engines can read it, so a search for your new hazy IPA or a specific vintage can land on your page.
If you already keep your list in a tap list service or a point of sale system that publishes a feed, the site can display that feed instead of asking staff to update two places. Either way, keep a "last updated" time visible so visitors trust it.
> Add a "coming soon" section for upcoming releases. It gives regulars a reason to check back and gives you a page to share on release day.
## How should tasting reservations and events work?
Reservations should offer only the slots you can actually serve, and every event should have its own shareable page with a date, price and way to RSVP or buy a ticket.
For tastings, a booking form needs a date, time slots with a capacity per slot, party size, and a field for notes such as a birthday or a group from work. Groups above a size you choose should become a request your team approves, often with a deposit. State your policies before the form, not after it: whether everyone who tastes must be 21 or older with ID, whether children and dogs are welcome, cancellation terms and whether walk-ins are accepted.
Events work best as individual pages generated from a calendar: trivia night, live music, a release party, a winemaker dinner. Each page shows the time, cost, what is included and a button for tickets or an RSVP, and it can be shared on its own. Recurring events like a weekly trivia night should be entered once and repeat automatically.
## How should beer and wine club memberships work online?
A club page should explain the tiers, schedule, pricing and cancellation terms in plain language, then hand signups to a payment system that handles recurring billing.
Club members are often a producer's most loyal customers, and the signup page is where trust is won or lost. Spell out what each tier includes, how often shipments or pickups happen, member discounts in the tasting room, when cards are charged and how to skip a release or cancel. Members should be able to update a card or address without calling you.
If you already run your club on a dedicated wine club or point of sale platform, the website should explain the club clearly and link into that platform rather than duplicating it. A custom club with its own member accounts and billing is a larger build. The packages page I built for Astiglow, a waxing studio, shows the simpler end of this idea: clients buy a bundle of sessions up front and use it over time, and the page answers how credits apply, when they expire and whether they can be shared before anyone pays.
## Does a brewery or winery website need an age gate?
I could not find a federal rule that requires a pop-up age gate on a producer's website, but many breweries and wineries add one as a good faith signal, and the checks that carry legal weight happen at the sale and at delivery.
What does exist is industry self-regulation aimed at advertising. In 2022 the Beer Institute and the Brewers Association raised their standard so beer advertising should appear only in media where at least 73.6 percent of the audience is 21 or older, according to a summary by the law firm Davis+Gilbert. Wine and spirits trade groups have their own codes.
If you use an age gate, build it as a light overlay that asks once and remembers the answer, and keep the page underneath as normal readable content so search engines can still read your menu and events. Apply the real controls where they count: an age confirmation at online checkout, ID checks in the taproom and adult signature delivery for shipments.
This is general information, not legal advice. Your licensing agency and an alcohol beverage attorney are the right sources for your situation.
## What advertising and shipping rules should the site respect?
Treat the whole website as an advertisement under federal rules, and only offer shipping where your license and the destination state allow it.
TTB Industry Circular 2024-1 says websites and mobile websites must comply with the TTB advertising regulations and that TTB generally treats a website and its subpages as a single advertisement. It points to mandatory information such as the responsible advertiser's name and address and the class and type of the product, and says general brand or company advertising needs at least the responsible advertiser's name, city and state. It also says content created by someone else that you repost or like is treated as your advertising. A footer with your legal name, city and state on every page is an easy baseline.
For shipping in California, the Wine Institute's summary says shipping to adult California consumers is a basic privilege of a Type 02 winegrower license, out-of-state wineries need a Type 82 Wine Direct Shipper Permit from the California Department of Alcoholic Beverage Control, and packages must be labeled "CONTAINS ALCOHOL: SIGNATURE OF PERSON AGE 21 YEARS OR OLDER REQUIRED FOR DELIVERY." For beer, the California Craft Brewers Association's FAQ says a Type 23 license lets a brewery sell and ship beer directly to consumers in California, that online and phone orders count as sales on the licensed premises, that deliveries cannot be made between 2 am and 6 am, and that the brewery stays liable if a delivery reaches someone underage or intoxicated.
A shipping form should therefore check the destination state against a list you control and block the rest, collect a date of birth, and pass the adult signature requirement to your carrier. Rules change and differ by state, so confirm them with the California ABC, the destination state and your attorney. This section is general information, not legal advice.
## The bottom line
A brewery or winery site earns its keep by answering "are you open, what is pouring and what is on tonight" in one screen, letting staff update the tap list in a minute, taking reservations and event signups without phone tag, and handling clubs and shipping inside the rules. A taproom site with those basics fits the Business Site package, and if you want a rough number for your own setup first, the website cost calculator is a good place to start.`,
  },
  {
    slug: 'funeral-homes',
    name: 'Funeral homes',
    noun: 'funeral home',
    h1: 'Funeral home websites that are calm, clear and honest about prices',
    metaTitle: 'Funeral Home Website Design | Thomas Osayi',
    description: 'Funeral home websites with a gentle layout, obituary and livestream pages, clear price information, pre-planning inquiry forms and a direct line for families. Built in Next.js.',
    intro: 'Nobody visits a funeral home website casually. Some visitors have just lost someone and need to know who to call right now. Some are looking for a service time or want to leave a note for a family. Others are planning ahead and comparing prices quietly. A funeral home site has to serve all of them with a calm layout, plain words, an obvious phone number and price information that is easy to find, because families notice when it is hidden.',
    mustHaves: [
      { title: 'A clear path for a death that just occurred', text: 'A prominent phone number and a short "If a death has just occurred" page that tells families what happens next, in plain and gentle language.' },
      { title: 'Obituary pages families approve', text: 'One page per person with the obituary, photos, service details and a moderated guestbook, published only after the family has reviewed it.' },
      { title: 'Livestream pages that work on the day', text: 'A page for each service with the date and time zone, the stream, a private link option and the recording afterward if the family wants one.' },
      { title: 'Price information that is easy to find', text: 'Your general price list and package details reachable from the home page, with the date the prices took effect.' },
      { title: 'A pre-planning inquiry form without pressure', text: 'A short form that asks who the plan is for, what they are considering and how they prefer to be contacted, with no payment step.' },
    ],
    mistakes: [
      'Bright colors, autoplay video and pop-ups that feel like a sales site to someone who is grieving',
      'Hiding prices behind "call for details" when families are comparing funeral homes online',
      'Publishing an obituary or service details before the family has approved the final text',
      'Leaving guestbooks unmoderated, so spam and advertising appear beside a condolence message',
    ],
    related: ['guardian-mindcare', 'serenity-institute', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A funeral home site with service pages, a price information page, obituary listings your staff can publish and a pre-planning form fits the Business Site package from $450. Obituaries with moderated guestbooks, livestream pages, family accounts or integration with your case management software make it a Full Custom Build from $1,200.',
    faqs: [
      { q: 'Does the FTC require funeral homes to post prices online?', a: 'Not at the time of writing. The current Funeral Rule requires a general price list for people who ask about arrangements and price information by phone, and the FTC asked in 2022 whether online posting should be required, but I could not find a proposed or final rule that adds it. This is general information, not legal advice.' },
      { q: 'Does California require price information on funeral home websites?', a: 'Yes. Since January 1, 2013, California Business and Professions Code section 7685 requires a licensed funeral establishment with a website to post its list of funeral goods and services and a statement that the general price list is available on request, or to link from the home page to the general price list using a phrase with the word "price".' },
      { q: 'Can families write and update obituaries themselves?', a: 'They can submit text and photos through a form, and your staff reviews and publishes the page, which keeps the family in control of the words while you keep control of what goes live.' },
      { q: 'How do you keep a funeral livestream private?', a: 'The service page can use an unlisted link or a simple password the family shares, and the recording can be removed or kept private after a set time if the family prefers.' },
      { q: 'Should a pre-planning form ask for payment?', a: 'No. An inquiry form should only collect who the plan is for, the options they are considering and how to contact them, and any preneed contract and payment should follow your state\'s rules in a conversation with your staff.' },
      { q: 'What does a funeral home website cost?', a: 'Thomas Osayi builds funeral home sites on the Business Site package from $450, or a Full Custom Build from $1,200 for obituaries with guestbooks, livestream pages or software integrations.' },
    ],
    guide: `## What should a funeral home website get right first?
It should make the phone number and the next step obvious for a family whose loved one has just died, and it should feel calm to everyone else.
The first visitor to plan for is someone in the hardest hour of their year. Put your phone number in the header on every page, and if your staff answers around the clock, say so plainly. Add a short page called something like "If a death has just occurred" that explains, in a few gentle sentences, what to do now, what your team will do and what the family will need to bring later. That page often matters more than the home page.
Everything else follows from tone. Use soft colors, generous spacing, real photos of your chapel and staff, and no autoplay video, countdown banners or pop-ups. Write in plain words rather than industry terms. The layout should make three paths easy from the home page: find an obituary or service, see prices and options, and plan ahead.
## How should obituaries work on the site?
Each person should have their own page with the obituary, photos and service details, published by your staff after the family approves it.
A good obituary page shows the name, dates, a photo, the full text, the visitation and service times with addresses and maps, any livestream link, and the family's wishes about flowers or donations. A searchable obituary listing lets people find a name quickly, because many visitors arrive from a shared link or a search for the person's name.
Families usually want to help write the obituary. A simple submission form for text and photos, followed by a staff review, keeps the family in control of the words while your team controls what goes live and checks names, dates and spelling. If you offer a guestbook, moderate every entry before it appears. Condolence pages attract spam, and a stray advertisement next to a message to a widow is the kind of mistake families remember.
## How should livestream pages be set up?
Each service that is streamed should have its own page with the date, the time zone and the stream, plus a private option and clear instructions for anyone watching from far away.
Relatives watching from another state or country need the start time in your local time zone, written out, and a note about when the stream will begin. Embed the stream on the obituary or service page rather than sending people to a separate platform with ads and suggested videos. Offer an unlisted link or a simple password for families who do not want the service public, and agree with the family in advance on whether the recording stays up, for how long and who can see it.
Test the stream in the chapel before the day of the service, and keep a short "trouble watching?" note with a phone number on the page. A frozen stream during a eulogy cannot be fixed afterward.
## What does the FTC Funeral Rule require, and does it cover websites?
At the time of writing, the Funeral Rule requires price disclosures in person and by phone, but I could not find any final or proposed federal requirement to post prices on a website.
According to the FTC's May 14, 2026 notice in the Federal Register, the rule requires funeral providers to give consumers a general price list that itemizes the goods and services they offer, to show casket and outer burial container price lists at the start of any discussion of those items, to give price information from those lists over the telephone, and to give a Statement of Funeral Goods and Services Selected after arrangements are made. The FTC's Funeral Rule page also says a provider may not refuse to handle a casket bought elsewhere or charge a fee for doing so, and a provider offering cremations must make alternative containers available.
On websites, the FTC voted in October 2022 to issue an advance notice of proposed rulemaking, published November 2, 2022, that asked whether and how funeral providers should be required to display price information online, and it held a public workshop on September 7, 2023. The May 2026 notice was a routine renewal of the paperwork clearance for the current rule and did not mention amendments. Check the FTC's Funeral Rule page for anything newer. This is general information, not legal advice.
## Does California require price information on funeral home websites?
Yes, California has required it since January 1, 2013.
California Business and Professions Code section 7685 says a licensed funeral establishment that maintains a website must post the list of funeral goods and services required in its general price list, along with a statement that the general price list is available on request, reachable through a home page link whose text includes a word such as goods, merchandise, products or services. As an alternative, the establishment can link from the home page to its general price list using a phrase that includes the word price. Other states have their own rules, so check with your state board; in California that is the Cemetery and Funeral Bureau. This is general information, not legal advice.
> Put a link labeled "Price information" in your main navigation, not only in the footer. Families comparing funeral homes look for it first, and it is the simplest way to show you have nothing to hide.
## How should a funeral home show prices online?
Post the actual general price list as a readable page with its effective date, and present packages as clear bundles with every item they include.
A text page loads faster and reads better on a phone than a scanned PDF, though offering a printable PDF too is helpful. Show the effective date so nobody quotes last year's prices. If you offer packages such as direct cremation, a memorial service or a traditional funeral, list what each includes and what costs extra, such as cemetery charges, certified death certificates or flowers. Avoid "starting at" figures that do not match anything a family can actually buy.
Price transparency is also good business. Families who arrive at an arrangement conference already understanding your options tend to make decisions faster and with fewer surprises, and your staff spend less time on the phone repeating the list.
## How should pre-planning inquiries work?
A pre-planning form should ask a few gentle questions, never ask for payment, and lead to a conversation with your staff.
Start with who the plan is for, since many people are planning for a parent rather than themselves. Then ask what they are considering, whether burial, cremation or not sure yet, any faith or cultural traditions, and how and when they prefer to be contacted. Keep it short and say how soon someone will reply.
I have not built a funeral home site. The closest work I have done is for Guardian MindCare, a therapy practice platform in Los Angeles, whose get-matched intake opens with a single question, "Who is this care for?", before asking anything else. Sensitive intake works better when the first step is that simple.
![The get-matched intake I built for Guardian MindCare, starting with "Who is this care for?"](/shots/guardian-get-matched.jpg)
Preneed contracts, trusts and insurance are regulated by each state, so the website should explain your options and invite questions rather than sell a contract online.
## The bottom line
A funeral home website serves families at their most vulnerable, so calm design, an obvious phone number, careful obituary and livestream pages, honest price information and a gentle pre-planning form matter more than any visual flourish. Know the FTC Funeral Rule and your state's website rules, and keep prices one tap from the home page. A site with those pieces usually fits the Business Site package, and the website cost calculator can give you a rough number before we talk.`,
  },
];
