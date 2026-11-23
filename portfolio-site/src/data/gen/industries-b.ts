// Industry pages, generated batch B (Nov 22 2026).
import type { Industry } from '../landing';

export const industriesGenB: Industry[] = [
  {
    slug: 'pet-groomers-and-veterinary-clinics',
    name: 'Pet groomers and veterinary clinics',
    noun: 'practice',
    h1: 'Websites for pet groomers and veterinary clinics',
    metaTitle: 'Pet Groomer & Veterinary Clinic Website Development | Thomas Osayi',
    description: 'Websites for groomers and vet clinics with service menus, online booking, new patient forms and appointment requests. Fast Next.js sites built in Los Angeles.',
    intro: "Pet owners book for someone who cannot speak for themselves, so they want details before they commit: what the groom or visit includes, what it costs for a dog that size, whether you take new patients and how soon they can get in. A site that answers those questions and lets them book or request a time without calling fills the schedule.",
    mustHaves: [
      { title: 'Services priced by pet size and coat', text: 'Groomers price by breed, size and coat condition. A menu that shows starting prices by size sets expectations before the pet arrives.' },
      { title: 'Online booking or appointment requests', text: 'Groomers can offer live booking for set services. Clinics usually take appointment requests the front desk confirms, routed by reason for visit.' },
      { title: 'A new client or new patient path', text: 'What to bring, vaccination records, first visit details and a short registration form, so new clients arrive ready.' },
      { title: 'Hours, emergencies and location up top', text: 'Owners need hours, parking and what to do after hours. Clinics should say plainly whether they see emergencies and where to go if not.' },
      { title: 'Team and facility photos', text: 'Real photos of groomers, vets, techs and the space build the trust owners need before handing over their pet.' },
    ],
    mistakes: [
      'Prices that say "call for a quote" with no starting point by pet size',
      'A clinic site with no clear answer on emergencies or after hours care',
      'Booking that ignores breed, weight and temperament, so the schedule fills with the wrong slot lengths',
      'Medical history and vaccination files collected through a basic contact form and left sitting in an inbox',
    ],
    related: ['astiglow', 'guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'Most groomers and single clinics fit the Business Site package. Custom booking rules, packages or several locations make it a Full Custom Build.',
    faqs: [
      { q: 'Can clients book grooming appointments online?', a: 'Yes. I either embed the booking tool you already use or build a booking flow that asks for breed, size and service so each slot is the right length.' },
      { q: 'Can new patients register through the website?', a: 'Yes. A short registration form collects owner and pet details and the front desk follows up; detailed medical records stay in your practice management software.' },
      { q: 'Do pet records fall under HIPAA?', a: 'HIPAA covers human health information, not pet records, but some states have their own veterinary record rules, so check with your state board; this is not legal advice.' },
      { q: 'Can the site handle grooming packages or memberships?', a: 'Yes. Prepaid packages, such as a set number of baths or regular groom schedules, can be sold online with Stripe.' },
      { q: 'What does a groomer or vet website cost with you?', a: 'Thomas Osayi builds most of these on the Business Site package from $450, with custom booking or packages moving it to the Full Custom Build from $1,200.' },
    ],
    guide: `Grooming salons and veterinary clinics share one thing that most service businesses do not: the customer is booking for an animal. That changes what the website has to do. Owners want to know the groomer will handle a nervous rescue gently, that the clinic will see a new patient this week, and that nothing about the visit will surprise them. Below is how I would plan a site for either kind of practice, and where the two differ.

## What should a groomer or vet clinic homepage show first?

The top of the homepage should answer three things: what you do, where you are and how to get an appointment. For a groomer that means the services you offer (full groom, bath and tidy, nail trims, de shedding), your neighborhood and a Book now button. For a clinic it means general care, vaccines, dental and surgery if you offer them, your hours and a Request an appointment button, plus one clear line about emergencies.

Under that, show the people. Owners hand over a pet, so a photo of the groomer or the vet with an animal does more than any headline. Then add reviews, a short services overview and the location with parking notes. Keep the page fast on a phone, because many owners search while walking the dog or sitting in the car after noticing a limp.

## How should a groomer price services on the website?

Show starting prices by size and coat type, and say clearly what can change the final price. Grooming prices vary for honest reasons: a matted double coat takes far longer than a short coat, and a large dog takes longer than a toy breed. Hiding prices completely makes owners call around, and most will not call you.

A simple layout works well:

- Service rows (bath and brush, full groom, puppy intro groom, nail trim)
- Size columns (small, medium, large, giant), with a starting price in each
- A short note on what adds cost: matting, flea treatment, behavior that needs extra handlers
- Add on services listed separately, such as teeth brushing or a blueberry facial

This also feeds booking. If the booking flow asks for breed and weight, it can choose the right appointment length automatically instead of the groomer fixing the schedule by hand every morning.

## Should a vet clinic offer live booking or appointment requests?

Most clinics are better served by appointment requests, while most groomers can offer live booking. The difference is triage. A groomer knows a full groom on a medium dog takes about the same time every visit. A clinic needs to know why the pet is coming in: a vaccine visit, a sick visit and a surgery consult are not the same slot, and a vomiting cat may need to be seen today.

A good appointment request form asks for:

- Owner name, phone and email
- Pet name, species, breed and age
- New or existing patient
- Reason for visit, from a short list plus a free text box
- Preferred days and times
- A clear notice that urgent problems should call the clinic directly

The request lands with the front desk, who confirm by phone or text. If your practice management software offers its own online booking, I link to it or embed it instead of rebuilding it, so appointments land directly on your schedule.

> Put your emergency instructions on every page, not just the contact page. An owner in a panic will not hunt for them.

## What belongs in a new patient or new client form?

Collect what the front desk needs to set up the record, and leave clinical history for your practice software. For a clinic, the website form covers owner contact details, the pet basics, the previous vet if any, and permission to request records from them. For a groomer, add vaccination status, temperament notes (anxious with clippers, dislikes dryers, bites when nails are trimmed) and any skin conditions.

Two practical points. First, let owners upload a photo of vaccination records, because most groomers require proof of rabies vaccination and asking at check in slows the morning. Second, keep the form short. Every extra required field loses a few people, so ask only for what you will actually use before the first visit.

On privacy: HIPAA covers human health information, not pet records, but some states have their own rules on keeping veterinary records confidential. Either way, uploaded files and owner details should go to secure storage your team controls, not sit forever in a shared inbox. This is general information, not legal advice, so check your state veterinary board for specifics.

## How did I approach booking on a similar service site?

The closest project I have built is Astiglow, a waxing studio, not a pet business, but the booking problem is the same shape: a menu of services with different prices and durations, chosen by the client before picking a time. The client sees the service and price first, so there is no surprise at the appointment.

![The first step of the booking flow I built for Astiglow, where clients choose a service with its price before picking a time](/shots/astiglow-book.jpg)

For a groomer, the equivalent first step is choosing the pet and the service, with the price adjusting by size. Astiglow also sells packages (11 sessions for the price of 9), which maps neatly to grooming: a prepaid set of baths or a standing groom every six weeks rewards regulars and smooths out your calendar.

## What do pet owners search for, and how does a site rank for it?

Owners search for a service plus a place: dog groomer near me, mobile dog grooming in Pasadena, cat vet in Long Beach, emergency vet open now. Ranking for those starts outside the website, with a complete Google Business Profile whose hours, categories and phone number match your site exactly.

On the site itself, give each main service its own page when you offer it seriously. A clinic with a dental suite should have a dental page explaining cleanings under anesthesia, what the visit involves and how to prepare. A groomer who specializes in cats or doodles should say so on a dedicated page. Add LocalBusiness structured data with your hours, and if you are a mobile groomer, list the neighborhoods you cover instead of a street address customers cannot visit. The local SEO checklist post covers the rest.

## Which features are worth paying for, and which can wait?

Start with what saves the front desk time every day: clear services and prices, the booking or request flow, the new client form with vaccine upload and emergency instructions. Those fit a Business Site build.

Worth adding later, once the basics are working:

- Prepaid packages or memberships with online payment
- Automated reminder texts or emails, if your practice software does not already send them
- Several locations, each with its own page, hours and booking link
- A groomer gallery with before and after photos, organized by breed

Each of these is a real feature with real setup time, which is why custom booking rules, packages or multiple locations usually move a project into the Full Custom Build range. If you are unsure where your list lands, the website cost calculator gives a fair estimate before we talk.

## The bottom line

A good site for a groomer or vet clinic answers what an anxious owner wants to know: what it costs for a pet like theirs, whether you will see them soon and what to do in an emergency. Show prices by size, use live booking for grooming and appointment requests for clinics, keep new client forms short with a vaccine upload, and keep clinical records in your practice software. Get those right and the website takes calls off the front desk instead of adding to them.`,
  },
  {
    slug: 'food-trucks',
    name: 'Food trucks',
    noun: 'truck',
    h1: 'Food truck websites that tell people where you are',
    metaTitle: 'Food Truck Website Design & Online Ordering | Thomas Osayi',
    description: 'Food truck websites with a live location schedule, menu, pickup ordering and catering inquiries. Fast, phone friendly Next.js sites built in Los Angeles.',
    intro: "A food truck customer has one question before anything else: where are you today? After that they want the menu, the hours at that stop and maybe a way to order ahead. A truck site built around a schedule you can update from your phone, plus a catering form for private events, turns followers into lines at the window.",
    mustHaves: [
      { title: 'A location schedule you update in seconds', text: 'Today and this week, with address, cross streets and hours for each stop, editable from your phone before you leave the commissary.' },
      { title: 'A text menu that changes with the day', text: 'Menus as text load instantly and can mark items as sold out or special, unlike a photo of a chalkboard.' },
      { title: 'Order ahead for pickup', text: 'Customers order and pay while you are parked, pick a pickup time, and skip the line at lunch rush.' },
      { title: 'A catering and private event form', text: 'Date, location, guest count, budget and event type in one form, so every booking inquiry can be quoted in one reply.' },
      { title: 'Social and map links that match', text: 'Your Instagram, Google Business Profile and website schedule should agree, or customers end up at an empty curb.' },
    ],
    mistakes: [
      'Posting the schedule only on Instagram stories that disappear after a day',
      'A menu image that phones zoom badly and Google cannot read',
      'Catering inquiries through a generic contact form with no date, guest count or location',
      'Ordering that keeps accepting orders after you have closed the window or sold out',
    ],
    related: ['new-york-nook'],
    service: 'nextjs-website-development',
    packageHint: 'A truck with a schedule, menu and catering form fits the Business Site package. Pickup ordering with online payment moves it to a Full Custom Build.',
    faqs: [
      { q: 'Can I update my location from my phone?', a: 'Yes. I build a simple editor where you pick a saved spot or type a new one, set the hours, and the site updates immediately.' },
      { q: 'Can customers order ahead and pay online?', a: 'Yes. Orders go through Stripe with pickup time slots, and ordering switches off automatically when you close or mark items sold out.' },
      { q: 'Do I need a website if I already post on Instagram?', a: 'Instagram is great for reach, but a website gives you a schedule that does not vanish, a menu Google can read, and a catering form that captures real event details.' },
      { q: 'Can the site take catering deposits?', a: 'Yes. Once you confirm a date and quote, the client can pay a deposit online through a Stripe checkout link.' },
      { q: 'What does a food truck website cost with you?', a: 'Thomas Osayi builds most truck sites on the Business Site package from $450, and pickup ordering with payment fits the Full Custom Build from $1,200.' },
    ],
    guide: `A restaurant has an address. A food truck has a schedule. That one difference shapes almost every decision on a truck website, from the homepage layout to how fast you need to be able to edit it. Here is how I would plan one, based on what customers and event planners actually need from you.

## Why do food trucks need a website when Instagram already works?

Instagram is where people discover you, but it is a bad place to keep information people need on the day. Stories vanish after a day, posts get buried, and someone searching Google for tacos near Venice at lunch will never see your story. A website gives you a permanent home for three things social media handles poorly: where you are this week, the full menu as searchable text, and a catering form that collects real event details.

None of this replaces your social accounts. The site becomes the link in your bio, and every post can point to it: "Find this week's stops at the link." If you are weighing this up, my post on whether you need a website if your business already has Instagram goes deeper on the trade.

## How should a food truck show its location schedule?

Put today's stop at the very top of the homepage, then the rest of the week below it. Each stop needs the address or a clear place name, cross streets or a landmark, the hours you will serve and a map link that opens directions on a phone. If you are at a brewery or a market, name the venue, because people search for those.

The part that matters most is editing. If changing the schedule takes ten minutes on a laptop, it will not get updated, and a wrong schedule is worse than none. I build truck schedules so you can update them from your phone in under a minute:

- A list of saved spots you return to often, picked with one tap
- A one off option for new stops
- Start and end times per stop
- A cancel button for days when the generator dies or the weather turns, which shows a clear "not serving today" message

Once the stop has passed, it drops off the list automatically, so the site never shows last Tuesday as today.

> Keep a short line under the schedule saying where you post last minute changes, so customers know where to check if plans shift.

## What should the menu look like on a truck site?

The menu should be text, short and honest about availability. Trucks usually run tight menus, which is a strength: six to twelve items, each with a price, a one line description and dietary tags like vegetarian or spicy. Text menus load fast on a weak signal at a crowded event and get read by Google, so someone searching for birria near Long Beach can find you.

Mark specials and sold out items from the same phone editor that controls the schedule. If you rotate menus by event (a lighter menu at a festival, full menu on regular days), the site can show the menu linked to each stop. And if you list allergens, keep them accurate. The FDA recognizes nine major food allergens, and while labeling rules mainly cover packaged food, customers with allergies rely on whatever you publish, so only claim what you can stand behind.

## Should a food truck offer online ordering?

Order ahead pays off when you have lines at lunch rush and a predictable pickup window. Customers order on their phone while you are parked, pay up front, choose a pickup time, and walk up when it is ready. You get fewer abandoned lines and a cleaner kitchen flow.

The details that make it work for a truck specifically:

- Ordering only opens while you are at a scheduled stop, and closes when you do
- Pickup slots with a limit per slot, so ten orders do not land at 12:05
- Items you mark sold out disappear from the menu immediately
- A ticket that prints or appears on a tablet in the truck

I built a similar pickup ordering flow for New York Nook, a restaurant in Hollywood, with menu categories, a cart and pickup time slots. A truck version adds the schedule awareness above, but the core flow is the same.

![The pickup ordering page I built for New York Nook, with menu categories, a cart and pickup time slots](/shots/newyorknook-order.jpg)

If your truck already uses a point of sale with online ordering built in, linking to it can be the simpler choice. My post on taking restaurant orders online without third party fees compares the options.

## How should catering and private event inquiries work?

Catering is often the steadiest income a truck has, so the inquiry form deserves real thought. A generic contact form produces messages like "do you cater?" that take three emails to quote. A structured form gets everything in one go:

- Event date and service hours
- Event address, and whether the truck can park on site
- Expected guest count
- Event type: wedding, office lunch, birthday, school, film set
- Budget range or a per person target
- Service style: open menu, set menu, or prepaid guest count
- Dietary needs

With that, you can reply with a quote the same day. Once the client accepts, a Stripe checkout link can take the deposit and hold the date. I would also add a short catering page with sample packages, minimums, how far you travel and photos of the truck at real events, so planners can decide you fit before they fill in the form.

## What permits or rules should the website mention?

The website does not need to list permits, but your schedule should only include stops where you are allowed to operate. Food trucks generally need a health permit from the local environmental health department and must follow local parking and vending rules, which vary by city and county. In Los Angeles County, for example, mobile food facilities operate under county environmental health permits, and individual cities add their own vending and parking rules. Rules change and differ by area, so check with your county and city directly; this is general information, not legal advice.

What does belong on the site: your health grade or permit display if your area requires it publicly, and clear notes for event hosts about space needs, power and whether you carry your own generator.

## How does a food truck site get found on Google?

Start with your Google Business Profile, set up as a service area business if you have no fixed address, with a schedule and photos that match the site. Then give the site a page for catering in your area, a page for your cuisine with the dishes people search for, and venue names on your schedule. Brewery and market partners often link to trucks they host, which helps too.

Keep the site fast. Truck customers are almost always on a phone, often on poor event signal. Big background videos and heavy plugins cost you customers at exactly the wrong moment.

## The bottom line

A food truck site lives or dies on its schedule. Make today's stop the first thing people see, make it editable from your phone in under a minute, keep the menu as text with sold out items marked, and give catering a structured form that collects date, location, guest count and budget. Add order ahead when lines justify it. Do those things and the website becomes the link that turns followers into customers at the window.`,
  },
  {
    slug: 'bakeries-and-cafes',
    name: 'Bakeries and cafes',
    noun: 'bakery',
    h1: 'Websites for bakeries and cafes',
    metaTitle: 'Bakery & Cafe Website Design, Ordering and Custom Cakes | Thomas Osayi',
    description: 'Bakery and cafe websites with menus, pickup preorders and custom cake order forms with lead times and deposits. Fast Next.js sites built in Los Angeles.',
    intro: "Bakery and cafe customers come for two reasons: today's case and a special order. The first group wants hours, the menu and maybe a pickup preorder. The second wants to know if you can make a three tier birthday cake for the 14th and what it will cost. A site that handles both, with custom order lead times built in, saves you hours of back and forth.",
    mustHaves: [
      { title: 'A custom order form with lead times', text: 'Pickup date, servings, flavors, design notes and inspiration photos, with dates inside your lead time blocked automatically.' },
      { title: 'Pickup preorders for regular items', text: 'Holiday pies, weekend pastry boxes and bread preorders, paid online with a pickup window.' },
      { title: 'A menu that matches the case', text: 'Text menu with prices and dietary tags, plus clear notes on what sells out early and what is seasonal.' },
      { title: 'Hours, location and seating info up top', text: 'Hours, parking, whether there is seating or wifi, and whether you take walk ins for coffee.' },
      { title: 'A gallery of past cakes', text: 'Real photos of your custom work, organized by occasion, so customers can point to a style they want.' },
    ],
    mistakes: [
      'Custom cake requests through Instagram DMs with no date, servings or budget',
      'Accepting rush orders the kitchen cannot make because the form has no lead time rules',
      'Holding custom orders without a deposit, then losing the slot to a no show',
      'Allergen claims on the website the kitchen cannot guarantee',
    ],
    related: ['new-york-nook', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A bakery with a menu and custom order form fits the Business Site package. Preorders with payment, deposits or order dashboards make it a Full Custom Build.',
    faqs: [
      { q: 'Can the custom cake form block dates that are too soon?', a: 'Yes. The form only offers pickup dates outside your lead time, and you can block out days that are already full.' },
      { q: 'Can customers pay a deposit for custom orders?', a: 'Yes. Once you confirm the design and price, the customer pays a deposit or the full amount through a Stripe checkout link.' },
      { q: 'Can I take holiday preorders on the website?', a: 'Yes. A preorder page with limited quantities and pickup windows closes automatically when items sell out or the cutoff passes.' },
      { q: 'Can customers upload inspiration photos?', a: 'Yes. The custom order form accepts photo uploads that arrive with the order details in one place.' },
      { q: 'What does a bakery website cost with you?', a: 'Thomas Osayi builds most bakery and cafe sites on the Business Site package from $450, and preorders with payment fit the Full Custom Build from $1,200.' },
    ],
    guide: `Bakeries and cafes run two businesses under one roof. One is the daily counter: coffee, pastries, a sandwich at lunch. The other is the special order: birthday cakes, wedding desserts, office pastry boxes, holiday pies. The website has to serve both without making either harder, and the special order side is where a good site saves the most time.

## What does a bakery or cafe homepage need to show first?

Hours, location and what you sell, in that order of urgency. A lot of visitors are deciding whether to stop by right now, so today's hours, the address and parking should be visible without scrolling. Add one line about seating and wifi if you are a cafe people work from.

Below that, split the page into the two paths: Visit us (menu, hours, photos of the case) and Order ahead (custom cakes, preorders, catering boxes). Customers instantly know which half is for them. Finish with real photos of your bakes and the room, reviews and a newsletter signup if you announce seasonal items.

## How should a custom cake order form work?

A custom order form should collect everything you need to quote in one reply, and refuse dates you cannot make. Today most bakers take custom orders through DMs and texts, and each one turns into five messages before anyone knows the date, size or budget.

The fields I would include:

- Pickup or delivery date and time
- Occasion: birthday, wedding, baby shower, corporate
- Number of servings, which drives size and price better than asking for tiers
- Flavor, filling and frosting choices from your actual menu
- Dietary needs, with an honest note on what your kitchen can and cannot accommodate
- Design notes and uploaded inspiration photos
- Message on the cake
- Budget range
- Name, phone and email

Then add the rules that protect your kitchen. The date picker should only offer dates outside your lead time, and you should be able to block days that are already full or that you are closed. Many bakeries ask for one to two weeks for custom cakes and longer for wedding cakes, but the right number is whatever your production allows, and the form should enforce it rather than relying on customers reading a note.

> Show a starting price per serving next to the form. It filters out requests that will never fit, and customers appreciate knowing before they write a long description.

## How do deposits and confirmations work for custom orders?

Confirm the design and price first, then take payment, and only then hold the date. A practical flow looks like this: the customer submits the form, you review it and reply with a quote, and that reply includes a Stripe checkout link for a deposit or the full amount. When payment comes through, the order is marked confirmed and the date counts against your capacity.

This solves the classic problem of a reserved Saturday slot and a customer who never shows. Your cancellation and refund terms should sit on the order page and in the confirmation email so there is no argument later. My post on taking deposits online to reduce no shows covers the payment side in more detail.

## Should a bakery take preorders for regular items online?

Yes, when you have items that sell out or seasonal rushes you need to plan for. Holiday pies, weekend pastry boxes, challah on Fridays and king cakes all work well as preorders. The customer picks the item, quantity and a pickup window, pays online, and you get a bake list for each day instead of guessing.

The details that matter:

- Limited quantities that close automatically when you hit your number
- A cutoff time (for example, orders close Wednesday at noon for Saturday pickup)
- Pickup windows so the counter is not swamped at opening
- A printable or tablet friendly list of orders by pickup time

I built pickup ordering for New York Nook, a restaurant in Hollywood, with menu categories, a cart and pickup time slots. A bakery preorder system follows the same pattern, with quantity caps and cutoffs added.

![The pickup ordering page I built for New York Nook, with menu categories, a cart and time slots for pickup](/shots/newyorknook-order.jpg)

## How should catering and office orders be handled?

Treat catering as its own page with sample boxes and an inquiry form. Office managers ordering pastry boxes for a meeting want to see what a box for twenty contains, the price and how much notice you need. Give them three or four set options with servings and prices, plus a form for larger or custom orders with the date, headcount, delivery address and budget.

New York Nook has a catering and private events page built on the same idea, so planners can understand the offer before reaching out. If you deliver, list the area you cover and any minimum order.

![The catering and private events page I built for New York Nook](/shots/newyorknook-catering.jpg)

## What about allergens and home bakeries?

Only publish allergen information your kitchen can truly stand behind. The FDA recognizes nine major food allergens, including sesame since 2023. Most bakeries handle wheat, milk, eggs and nuts in the same space, so "nut free" claims are usually not safe to make. A better approach is listing what each item contains and a clear note that everything is made in a shared kitchen.

If you bake from home under a cottage food permit, many states limit what you can sell, how you sell it and where, and some restrict online or shipped sales. California, for example, has its own cottage food rules administered by counties. Check your state and county rules before adding online ordering; this is general information, not legal advice.

## How does a bakery get found on Google?

People search for what they want plus where: custom birthday cakes in Glendale, croissants near me, gluten free bakery Santa Monica. A complete Google Business Profile with matching hours and lots of real photos is the first step. On the site, give custom cakes and wedding cakes their own pages with your gallery, lead times and starting prices, because those are high value searches.

Keep your menu as text, not a photo, so Google can read individual items. Add LocalBusiness structured data with your hours. Encourage reviews after custom orders, since people who just served a beautiful cake are often happy to write one. My post on getting more Google reviews has the rules to follow.

## The bottom line

A bakery or cafe site should make the daily visit easy and the special order painless. Put hours and location first, keep the menu as text, and build a custom order form that collects servings, flavors, photos and budget while blocking dates inside your lead time. Take deposits once the design is confirmed, use preorders with caps and cutoffs for seasonal rushes, and be careful with allergen claims. That turns a stream of DMs into a calendar you can actually bake to.`,
  },
  {
    slug: 'wedding-planners-and-event-pros',
    name: 'Wedding planners and event pros',
    noun: 'business',
    h1: 'Websites for wedding planners and event professionals',
    metaTitle: 'Wedding Planner & Event Professional Website Development | Thomas Osayi',
    description: 'Websites for wedding planners, florists, photographers and event pros with portfolios, packages and inquiry forms for date, budget and guest count.',
    intro: "Couples and event hosts shortlist vendors quickly. They look at your work, check whether you are free on their date, and try to guess if you fit their budget. A site that shows real events, explains your packages and asks for date, budget and guest count up front turns browsing into qualified inquiries you can answer in one reply.",
    mustHaves: [
      { title: 'An inquiry form with date, budget and guest count', text: 'Event date, venue or city, guest count, budget range and services wanted, so every inquiry is qualified before you reply.' },
      { title: 'A portfolio of real events', text: 'Full stories of past weddings and events, with venue names and vendor credits, not just a grid of pretty images.' },
      { title: 'Packages and starting prices', text: 'Full planning, partial planning and day of coordination explained, with starting prices or minimums so couples can self qualify.' },
      { title: 'A clear process', text: 'What happens from first call to the event day, how many meetings, and when payments are due.' },
      { title: 'Reviews and vendor credibility', text: 'Client words, venues you have worked at and features, shown honestly and only with permission.' },
    ],
    mistakes: [
      'A contact form with only name, email and message, leading to three emails before you know the date',
      'No pricing guidance at all, so most inquiries are wildly outside your range',
      'Huge galleries that never finish loading on a phone',
      'Portfolio pages without venue names or locations, which miss local searches',
    ],
    related: ['artistic-printing', 'new-york-nook'],
    service: 'nextjs-website-development',
    packageHint: 'Most planners and event pros fit the Business Site package. A large portfolio with a CMS, client portals or online retainers make it a Full Custom Build.',
    faqs: [
      { q: 'What should a wedding inquiry form ask?', a: 'Event date, venue or city, guest count, budget range, services wanted and how the couple found you; that is enough to decide fit and reply with next steps.' },
      { q: 'Should I show prices on my website?', a: 'Starting prices or minimums help couples self qualify and cut down on inquiries that will never fit, even if every final quote is custom.' },
      { q: 'Can the site check whether I am available on a date?', a: 'Yes. The form can check a calendar of booked dates you maintain and tell the couple right away if the date is taken.' },
      { q: 'Can clients pay a retainer online?', a: 'Yes. Once the contract is agreed, a Stripe checkout link can take the retainer and later payments.' },
      { q: 'Can I update my portfolio myself?', a: 'Yes. A simple CMS lets you add a new event with photos, venue and vendor credits without touching code.' },
      { q: 'What does a wedding planner website cost with you?', a: 'Thomas Osayi builds most planner and event pro sites on the Business Site package from $450, with a CMS portfolio or client portal moving it to the Full Custom Build from $1,200.' },
    ],
    guide: `Wedding planners, florists, photographers, DJs, rental companies and coordinators all sell something people buy once, for a lot of money, with strong feelings attached. Buyers browse dozens of vendors, and most of them never write. The site has two jobs: make the right couples want to reach out, and make sure every inquiry that arrives has the details you need to answer properly.

## What do couples look for on a wedding planner's website?

Couples look for proof you have done weddings like theirs, a sense of price and an easy way to check your availability. They usually arrive from Instagram, a venue's vendor list, a directory listing or a search like wedding planner in Malibu. They scan your work, look for a pricing page, and decide in a minute or two whether to inquire.

So the homepage should open with your strongest event image, one line on who you serve (for example, full service planning for modern weddings across Southern California) and an Inquire button. Below that: a few featured events, a short version of your services with starting prices, a review or two and a final call to action. Keep the language specific. Every planner says "stress free"; very few say "we have planned weddings from 40 to 300 guests at vineyards, estates and downtown lofts."

## What should a wedding inquiry form ask?

A wedding inquiry form should ask for the details that decide whether you are a fit: date, place, size and budget. Without them, you spend the first three emails just learning the basics, and many couples drop off before you get there.

The fields I would include:

- Event date, with a checkbox for flexible or not set yet
- Venue name, or the city if the venue is not booked
- Estimated guest count
- Budget range, either for the whole wedding or for your service
- Services wanted: full planning, partial planning, day of coordination, design only
- Names and best contact method
- How they heard about you
- An open box for anything else

Use ranges for budget and guest count instead of open number fields. People find choosing "$40k to $60k" much easier than typing a figure, and you get cleaner data. If you keep a calendar of booked dates, the form can check it and say right away if a date is taken, so the couple can choose an alternative or join your waitlist instead of waiting days for a "sorry."

> Send an automatic reply the moment someone inquires, with your pricing guide attached and a link to book a call. Couples often contact several vendors at once, and the first thoughtful reply has an advantage.

## Should a planner show prices on the website?

Show starting prices or minimums, even if every final quote is custom. Couples who cannot find any pricing assume you are either out of their range or hiding something, and the ones who inquire anyway are often far outside your minimum. A short packages page solves both problems.

A simple structure:

- Full planning, starting at a set amount, with what it includes and when you join
- Partial planning, for couples who have started and need a guide
- Month of or day of coordination, with hours on the day and the number of meetings
- Design or styling, if you offer it separately

For florists and rentals, a typical spend range or a minimum order works better than a package list. Photographers and DJs usually list collections by hours. Whatever you choose, keep it current, because outdated prices cause awkward first calls.

## How should a portfolio be organized?

Organize the portfolio as stories, one page per event, rather than one giant gallery. Each event page should name the venue and city, the season, the guest count or style, and credit the other vendors. That serves couples (they can see weddings at venues like theirs) and helps local search, since people search for venues and vendor names. Vendor credits also make other vendors more likely to share and link to your work.

Photos need care on the technical side. Wedding galleries are usually the heaviest part of any vendor site, and an unoptimized gallery can take ages to load on a phone. I resize and compress images automatically, load them as the visitor scrolls, and keep the first screen light. If you will post new events often, a simple CMS lets you add a new story with photos, venue and credits yourself without asking a developer.

## How do I handle availability, contracts and retainers?

Keep the website responsible for the first step and let dedicated tools handle the contract. The site captures a qualified inquiry, checks availability if you keep a booked dates calendar, and invites the couple to book a consultation call. After that, many planners use client management software for proposals, contracts and payment schedules.

If you prefer to keep it lighter, a Stripe checkout link for the retainer works well once the contract is signed, and later payments can follow the same way. What matters is that the website does not try to replace your contract or legal terms. Any contract language should come from your own documents, reviewed by a professional if needed.

## What did I learn from building intake for other businesses?

I have not built a wedding planning site, but the structured intake problem is one I have solved. For Artistic Printing, a commercial printer in Los Angeles, I built quote management and client intake so requests arrive with the details needed to price the job, rather than a vague "can you print something for me." A wedding inquiry is the same idea: structured fields up front mean you can reply with real next steps.

![The homepage I built for Artistic Printing, with a Get your quote call to action](/shots/artistic-home.jpg)

New York Nook, a restaurant in Hollywood, has a catering and private events section built around the same principle: explain the offer and capture event details in one place.

## How do event pros get found online?

Event vendors are found through venues, other vendors, directories, Instagram and search. The website supports every one of those. Directory listings and Instagram profiles should link to it, venue preferred vendor pages often link out, and each event story you publish can rank for searches like that venue plus wedding planner.

On the technical side, set up a Google Business Profile as a service area business, add LocalBusiness structured data, and create pages for the areas you serve if you work across a region (Orange County, Santa Barbara, Palm Springs, for example). Write each area page with real events and venues from that area, not swapped town names, or it will not help. My local SEO checklist covers the basics in more depth.

## The bottom line

A good site for a wedding planner or event pro shows real events as stories, explains packages with starting prices, and uses an inquiry form that asks for date, venue, guest count and budget so every message is qualified. Add an availability check and an instant reply with your pricing guide, keep galleries fast on phones, and let your contract tools handle the paperwork. That way the website does the sorting, and your time goes to couples who are actually a fit.`,
  },
];
