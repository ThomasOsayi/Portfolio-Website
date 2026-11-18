// Industry pages, batch 2 (Nov 17 2026).
import type { Industry } from './landing';

export const industriesBatch2: Industry[] = [
  {
    slug: 'med-spas',
    name: 'Med spas',
    noun: 'med spa',
    h1: 'Med spa websites that book consultations',
    metaTitle: 'Med Spa Website Design & Development | Thomas Osayi',
    description: 'Med spa websites with treatment pages, provider profiles, pricing guidance and online booking. Polished, fast Next.js sites by a Los Angeles developer.',
    intro: 'Med spa clients research carefully before they book. They compare treatments, read about the providers, look for before and after results and want a sense of price. A site that answers those questions with a calm, premium feel turns that research into consultations.',
    mustHaves: [
      { title: 'A page per treatment', text: 'What it is, who it suits, how many sessions, downtime and aftercare. Each page ranks for its own searches and answers real client questions.' },
      { title: 'Provider credentials', text: 'Who performs each treatment, their license and training. This is where trust is earned in a medical setting.' },
      { title: 'Pricing guidance', text: 'Starting prices or price ranges where you are comfortable sharing them, and how consultations work.' },
      { title: 'Online booking', text: 'Your booking software embedded so clients pick a service and time without calling.' },
      { title: 'Before and after galleries done right', text: 'Real results with client consent, consistent lighting and honest captions.' },
    ],
    mistakes: [
      'One long treatments page instead of a page per treatment',
      'Results claims that promise outcomes no provider can guarantee',
      'Provider names and credentials missing entirely',
      'Booking that requires a phone call during business hours',
    ],
    related: ['astiglow', 'guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'Most med spas fit the Business Site package, or a Full Custom Build once there are many treatment pages, memberships or several locations.',
    guide: `Most of a med spa site is ordinary good web work: fast pages, clear treatment information and a booking button. The parts that go wrong are specific to the category. This guide covers those: how booking and consultations connect, what the site can responsibly say, how result photos are handled, and what the build takes.

## How does online booking work on a med spa website?
The site hands the client to the booking software you already run, with the right treatment already selected. Med spas generally run on a practice platform such as Boulevard, Vagaro, Mangomint, Zenoti or Jane, and that system owns the calendar, the provider schedules, the deposits and the client record. The website should not try to be a second calendar.
There are three ways to connect the two, and they differ in how the handoff feels.
- A plain link: the Book button opens your booking page in a new tab. It is reliable, but the client lands on a full menu and has to find the treatment again.
- A deep link: each treatment page links straight to that service in the booking tool, so the lip filler page opens the lip filler consultation. Many platforms support this, and it is the option I check for first.
- An embedded widget: the booking flow opens over your own page. It feels the most seamless, but it loads the vendor's script, so I load it only when someone presses Book and the rest of the page stays fast.
### Consultation first or treatment first
Injectables and energy devices usually call for a consultation and a medical evaluation before treatment, while facials and many skin services can be booked directly. The site should make that difference visible. A filler page offers Book a consultation, and a facial page offers Book now. Sending every visitor to one generic button creates appointments your front desk then has to rearrange.

## What can a med spa say in its marketing?
Less than a day spa can, because a med spa advertises medical services. The details vary by state and by the licenses involved, so treat this section as general information and not legal advice, and have your medical director or a healthcare attorney review the claims on the site.
A few principles hold broadly. Do not promise results. Do not describe a treatment as painless, permanent or free of risk. Describe prescription products accurately, and remember that product names are trademarks whose owners publish rules for how practices may refer to them. Say who performs each treatment and under what license, and name the supervising physician where your state expects it.
On the page, that means writing about what a treatment is designed to do, what a typical course looks like and what varies from person to person. That wording is also more persuasive. A client reading three med spa sites tends to trust the one that explains downtime honestly over the one that promises to erase ten years.
> Add a reviewed-by line with the provider's name, credential and a date at the bottom of each treatment page. It keeps clinical review honest inside the business and shows clients that a licensed person stands behind the text.

## How should before and after photos be handled?
With written consent for each use, consistent photography and captions that say exactly what was done. A photo of a patient is health information in most contexts, and a privacy law such as HIPAA may apply to your practice, so the consent should name the website specifically and be stored where you can find it. This is general information too, not legal advice.
On the build side, a gallery needs more structure than a folder of images.
- Each pair is tagged with a treatment, so the filler page shows filler results and nothing else.
- Each caption states the treatment, the number of sessions and the time between the two photos.
- Photos are not retouched, and a short line says that results vary.
- File names and image metadata carry no patient names.
- Removing a pair takes one step, for the day a client withdraws consent.
Faces need extra care. If a client agrees to share a result but not their identity, crop to the treated area before the file ever reaches the site, not with a blur added afterwards.

## What do med spa clients search for?
They search for a treatment plus a place, and very often a brand name plus a place. That is why a page per treatment matters so much here: lip filler in your city, laser hair removal near me and a named device are separate searches with separate intent.
Several practical choices follow from that.
- Name pages the way clients talk. People search for the brand or the problem far more than the clinical term, so a page can carry both in its heading and text.
- Add concern pages once the treatment pages exist. Acne scars, sun damage or under-eye hollows can each link to the two or three treatments you offer for them.
- Give each location its own page, with its own providers, hours and booking link.
- Keep your Google Business Profile in step. The services listed there should use the same names as the site.
Saying who leads the care, and where, does a lot of the work for a local medical search. A site I built for Pacific Harbor Medical Group presents physician-led executive physicals in Torrance and the South Bay, which answers both questions before the visitor scrolls.
![Pacific Harbor Medical Group: a site I built for physician-led executive physicals in Torrance and the South Bay.](/work/phmg.jpg)

## How should pricing, memberships and financing appear?
Show enough for a client to know whether you are in their range, and explain how the final number is set. Med spa pricing is awkward to publish because injectables are priced per unit or per syringe and the amount depends on the person. A starting price, a typical range and a sentence on what the consultation decides is honest and still useful.
### Memberships and packages
If you sell a monthly membership or banked credits, the billing normally lives in your practice platform, and the site's job is to explain the plan and link to sign-up. State the monthly price, what it includes, the minimum term and how to cancel in plain words on the page. Hidden terms cause chargebacks and bad reviews.
### Financing and offers
Patient financing can be linked from the pricing section with a short explanation of how to apply. For monthly offers, I build one specials page you can edit yourself, with an end date on each offer so nothing expired stays live.

## Which package fits a med spa, and how long does it take?
A Business Site, from $450 and about 14 days, fits a med spa with a handful of services, since it covers up to 5 pages with a booking link and local SEO setup. Once every treatment has its own page, plus provider profiles and tagged result galleries, the project is a Full Custom Build, from $1,200 and about 21 days. A Starter Site, from $150 and about 7 days, is a sensible first step for a solo injector who needs one polished page and a booking button.
The timeline depends on content more than code. Clinical review of treatment text is the slowest step in most healthcare projects, so start it early. It helps to have these ready:
- Your treatment list, with which services need a consultation first
- Provider names, credentials, license types and photos
- Access to your booking platform, so I can get the correct links for each service
- Result photos with their signed consents
- Prices or ranges you are comfortable publishing

## What does the site cost to run after launch?
Very little beyond the tools you already pay for. Your booking platform is the main monthly cost and you have it either way. The site itself needs a domain, which usually renews for roughly $10 to $20 a year, and hosting, which is light for a site like this. I set both up in your own accounts so nothing depends on me.
The ongoing work is content: new treatments, new providers, new photos and retired offers. Decide who in the business owns that, and who signs off on anything clinical, before launch.

## The bottom line
A med spa site earns consultations by being specific and careful at once: one page per treatment, named and licensed providers, honest photos, clear price guidance and a booking link that opens the right service. Keep the calendar, payments and health information in your practice platform, keep the claims reviewed by a licensed provider, and let the website do the explaining.`,
    faqs: [
      { q: 'Can you connect our booking system?', a: 'Yes. I embed or link the booking tool you already use so clients book a specific treatment and provider.' },
      { q: 'Can we show before and after photos?', a: 'Yes, with client consent on file. I build galleries that load fast and stay organized by treatment.' },
      { q: 'Do you write the treatment content?', a: 'I structure and write it from your notes, and a licensed provider reviews anything medical before it goes live.' },
      { q: 'How much does a med spa website cost?', a: 'A Business Site starts from $450 and takes about 14 days. A Full Custom Build with a page per treatment, provider profiles and result galleries starts from $1,200 and takes about 21 days.' },
      { q: 'Does the website store patient information?', a: 'No. Booking, payments and health details stay in your practice platform, and the website links clients to it.' },
      { q: 'Can we update specials and prices ourselves?', a: 'Yes. Offers and prices can sit in a simple editor, and each offer can carry an end date so expired specials come down on time.' },
    ],
  },
  {
    slug: 'physical-therapy-and-chiropractic',
    name: 'Physical therapy and chiropractic clinics',
    noun: 'clinic',
    h1: 'Websites for physical therapy and chiropractic clinics',
    metaTitle: 'Physical Therapy & Chiropractic Website Development | Thomas Osayi',
    description: 'PT and chiropractic websites with condition pages, insurance information, first-visit details and online booking. Fast Next.js sites built in Los Angeles.',
    intro: 'Most new patients arrive with a specific problem: back pain, a sports injury, recovery after surgery. They search for that problem, then check whether you take their insurance and how soon they can be seen. Condition pages plus clear insurance and booking information turn those searches into first visits.',
    mustHaves: [
      { title: 'Pages for the conditions you treat', text: 'Back pain, neck pain, sports injuries, post-surgery rehab. Each explains how you approach it and what a plan of care looks like.' },
      { title: 'Insurance and payment details', text: 'Plans you accept, whether a referral is needed, and cash rates if you offer them.' },
      { title: 'What the first visit looks like', text: 'Length, what to wear, paperwork and what happens next. This lowers no-shows and nerves.' },
      { title: 'Online booking or requests', text: 'Linked to your scheduling software or a short request form for the front desk.' },
      { title: 'Clinician profiles', text: 'Credentials, specialties and a photo for each provider.' },
    ],
    mistakes: [
      'A generic services list with no page for each condition',
      'No mention of insurance or whether a referral is needed',
      'Medical history collected in a basic website form',
      'Exercise videos that slow the whole site down on phones',
    ],
    related: ['guardian-mindcare', 'vencare'],
    service: 'nextjs-website-development',
    packageHint: 'A single clinic fits the Business Site package. Several locations or patient-facing tools make it a Full Custom Build.',
    guide: `A clinic website has a narrower job than most. It has to be found by someone in pain, answer the insurance question, and get that person onto the schedule without touching health information it has no business holding. Here is how each of those pieces works in practice.

## How do new patients find a PT or chiropractic clinic online?
They arrive by three routes, and each one lands on a different page. Knowing the routes tells you what to build first.
- The problem search. Someone types sciatica treatment, knee pain physical therapy or chiropractor for neck pain, usually with a city or near me. These land on condition pages.
- The name search. A physician hands over a referral, or a friend recommends you, and the patient searches the clinic's name to check it out. These land on the home page and the clinician profiles.
- The map search. Physical therapy near me or chiropractor open now shows Google's map results, which draw mainly on your Google Business Profile, your reviews and how close you are.
A good condition page is written for the first group. It describes the symptoms in the words patients use, explains what an evaluation involves, gives an honest idea of how long a plan of care tends to run, and ends with a way to book. It does not diagnose. Specialty pages work the same way for the services people look for by name, such as pelvic floor therapy, vestibular rehab, dry needling or prenatal chiropractic care.

## Do patients need a referral, and how should the site say it?
Often they do not, and saying so plainly removes one of the biggest reasons people delay. Every state allows some form of direct access to physical therapy, though the limits differ by state, and an insurer can still require a referral or prior authorization before it pays. Chiropractic care generally does not need a referral, though some plans have their own rules.
Because the answer depends on your state and the patient's plan, write a short statement that fits your clinic and have whoever handles your billing check it. Something like this covers most cases: you can usually start without a referral, some insurance plans require one for coverage, and we will check yours before your first visit. Put that sentence on the home page, the insurance page and every condition page, since each can be the first page a patient sees.

## How should a clinic present insurance and cash rates?
List the plans you are in network with by name, say what happens if a plan is not on the list, and offer to verify benefits before the first visit. Insurance is the first filter for most patients. On Guardian MindCare, a therapy practice platform I built, the public site leads with a therapist search by insurance for exactly that reason.
A clinic insurance page should cover:
- Plans accepted, with the names patients see on their cards
- Medicare, workers' compensation and auto injury cases, if you take them
- Whether you can bill out of network or provide a superbill
- Self-pay rates for an evaluation and a follow-up visit, if you offer them
- How benefit verification works and how long it takes
Publishing self-pay prices helps more than most clinics expect. A patient with a high deductible is comparing your cash rate with their copay, and a site that states the number gets the call.
> Keep the accepted plans in one list that every page reads from. When a contract changes, you edit one place and the insurance page, the footer and the condition pages all update together.

## What can the website collect, and what belongs in your EMR?
The website can take a name, a contact method and a preferred time. Clinical details, insurance member numbers and medical history belong in the patient portal or intake system your practice software provides. What follows is general information, not legal advice.
Most clinics that bill insurance are covered by HIPAA, and health information tied to an identifiable person is protected. An ordinary website form that emails submissions to an inbox is not built for that, and the vendors behind it will usually not sign a business associate agreement. So the pattern I use is a short request form that asks for no clinical detail at all, plus a clear link to your secure intake for everything else.
Two details are easy to miss.
- The free-text box. If a form has a message field, patients will describe their condition in it. Either leave it out or label it clearly, for example: please do not include medical details here.
- Tracking scripts. Advertising pixels on appointment pages can send visit data to ad platforms. Regulators have raised concerns about this for healthcare providers, so I keep ad trackers off booking and request pages and suggest asking your compliance contact before adding any.

## How does online booking connect to clinic software?
Through whatever your practice system offers: a public booking page, an embeddable widget or neither. Platforms such as Jane, WebPT, Prompt and ChiroTouch differ here, and the options change, so the first step is to check what your own account supports.
### If your system has online booking
I link or embed it, and where the system allows it, send patients straight to the right visit type. New patient evaluations and follow-ups are different lengths, so the site should offer the new patient path by default.
### If it does not
A request form does the job: name, phone or email, preferred days and times, new or returning patient, and the name of their insurance company without any member number. The front desk confirms by phone. The request should trigger an automatic reply that says when to expect that call, because silence after submitting is where clinics lose people.
Either way, the booking button belongs in the header on every page, and the phone number should be a tap-to-call link on phones.

## What about exercise videos and patient education?
Host video on a video platform and load it only when the patient presses play, so pages stay fast. Videos added directly to a page are one of the most common reasons a clinic site crawls on a phone.
Separate public education from prescribed care. Short articles and videos about posture, warm-ups or what to expect after a knee replacement are public content and help your condition pages rank. A patient's own home exercise program is part of their care and belongs in the tool your clinicians already use to assign it.
Keep claims measured. State boards have rules on advertising, and those rules differ by state and profession, so avoid promising cures or guaranteed outcomes, and check your board's position on patient testimonials before publishing them.

## Which package fits a clinic, and what should you prepare?
A Business Site, from $450 and about 14 days, covers a single clinic: up to 5 pages with a booking link or request form and local SEO setup. A clinic that wants a full set of condition pages, several locations, each with its own page, or patient-facing tools is a Full Custom Build, from $1,200 and about 21 days.
After launch the running costs are small: a domain at roughly $10 to $20 a year and light hosting, both in your own accounts. The work that keeps paying off is adding condition pages over time.
To keep the schedule, gather these before we start:
- The conditions and specialties you most want to be found for, in order
- Your accepted insurance list and self-pay rates
- Clinician names, credentials, specialties and photos
- A walk-through of the first visit, from paperwork to parking
- Access to your scheduling system, or the name of whoever manages it

## The bottom line
Build the site around how patients arrive: a page for each problem you treat, a straight answer on referrals and insurance, and a booking path that takes one tap. Leave everything clinical in the system designed to protect it. A clinic site that does those few things well is easier to maintain and safer to run than one that tries to be a patient portal.`,
    faqs: [
      { q: 'Can patients book online?', a: 'Yes, through the booking link or widget your scheduling or EMR software provides, or a simple request form.' },
      { q: 'Should the website collect intake forms?', a: 'Clinical intake belongs in your HIPAA-compliant system; the website links to it instead of storing health information itself.' },
      { q: 'Can condition pages help us rank?', a: 'Yes. People search for their problem, and a clear page per condition in your area matches those searches.' },
      { q: 'Should we list the insurance plans we accept?', a: 'Yes. Insurance is the first filter for most patients, so list plans by the names on their cards and offer to verify benefits before the first visit.' },
      { q: 'How much does a clinic website cost?', a: 'A Business Site for a single clinic starts from $450 and takes about 14 days. Several locations or a full set of condition pages make it a Full Custom Build, from $1,200 and about 21 days.' },
      { q: 'Can we add condition pages after launch?', a: 'Yes. The pages share one layout, so new conditions and specialties can be added over time without redesigning anything.' },
    ],
  },
  {
    slug: 'event-venues',
    name: 'Event venues',
    noun: 'venue',
    h1: 'Event venue websites that fill your calendar',
    metaTitle: 'Event Venue Website Design & Inquiry Forms | Thomas Osayi',
    description: 'Event venue websites with spaces, capacities, photo galleries, packages and structured inquiry forms. Custom Next.js sites by a Los Angeles developer.',
    intro: 'Planners shortlist venues fast. They need capacity, layout options, photos of real events, a sense of price and a way to check a date. A venue site that puts all of that on one clear path gets the inquiry; the one that hides it behind "contact us" gets skipped.',
    mustHaves: [
      { title: 'Spaces with capacities', text: 'Each room or area with seated, standing and ceremony capacities, square footage and floor plans.' },
      { title: 'Photos of real events', text: 'Weddings, corporate events and parties set up in the actual space, organized by event type.' },
      { title: 'Packages and pricing guidance', text: 'Starting prices, minimums or package outlines so planners know if you fit their budget.' },
      { title: 'A structured inquiry form', text: 'Date, guest count, event type, space and budget, so every inquiry can be answered in one reply.' },
      { title: 'Logistics', text: 'Parking, load-in, approved vendors, catering rules and accessibility.' },
    ],
    mistakes: [
      'No capacities anywhere on the site',
      'Only photos of the empty room',
      'A generic contact form that leads to three emails before a quote',
      'Huge image galleries that never finish loading on a phone',
    ],
    related: ['new-york-nook', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'Most venues fit the Business Site package. Availability calendars, online deposits or several venues make it a Full Custom Build.',
    guide: `Venue sales run on speed. The first venue to reply with a real answer usually gets the tour, and the website decides whether that first reply is possible. The sections below go through the parts of a venue site that carry that weight, starting with the inquiry itself.

## What happens after someone submits a venue inquiry?
In a well-built flow, three things happen within a minute: the right coordinator is notified, the inquiry is saved as a record, and the planner gets a useful reply. Most venue sites manage only the first of those.
### The form adapts to the event
A wedding inquiry and a corporate inquiry need different questions. Choosing wedding can reveal ceremony on site, guest count and season or date flexibility. Choosing corporate can reveal company name, daytime or evening, and AV needs. Each visitor sees a short form, and you still get what you need to quote.
### The inquiry becomes a record
An email in a shared inbox gets lost on a busy Saturday. The submission should also be saved somewhere it can be tracked, either in the venue software you already use, such as Tripleseat, HoneyBook or Perfect Venue, or in a simple admin list on the site. I took the same approach for Artistic Printing, a commercial printer whose quote requests go into a management tool instead of only an inbox.
### The planner hears back immediately
An automatic reply should confirm the date they asked about, attach or link your pricing guide, and say when a person will follow up. That reply buys you the hours until a coordinator is free, and it is often the only response a planner gets from any venue that day.

## Should the site show an availability calendar?
Only if someone will keep it accurate, because a calendar that shows a booked Saturday as open does more damage than no calendar. There are three levels, and the right one depends on how your bookings are tracked.
- A date field only. The planner enters a date and you confirm by reply. Nothing to maintain, and it suits most venues.
- A manual calendar. You mark dates as booked or held in a simple editor. It works when one person owns the calendar and updates it the same day.
- A synced calendar. The site reads a calendar you already keep, such as a Google Calendar, and shows dates as available or unavailable without exposing event names or client details.
Two complications deserve a decision up front. Tentative holds need their own status, since a held date is neither open nor booked. And a venue with several spaces needs availability per space, or a booked garden will make the ballroom look unavailable.
> Show availability as a prompt to inquire, not a promise. A line such as dates shown as open are subject to confirmation protects you when two inquiries arrive for the same Saturday.

## Should a venue publish its prices?
Yes, at least as starting points, because budget fit is the question planners most need answered before they will spend time on a tour. You do not need a full rate card. You need enough for someone to place you.
What works on the page:
- A starting rental fee or a food and beverage minimum, with the day and season it applies to
- The spread between peak Saturdays and off-peak days, stated plainly
- What the fee includes: hours, tables and chairs, staff, setup, cleanup
- What it does not include: catering, bar, rentals, service charges and tax
- The deposit amount and when the balance is due
Some venues prefer to send a pricing guide by email in exchange for an inquiry. That is a fair trade as long as the page still gives one honest starting number. With no number at all, planners on a tight budget leave, and planners with a large one cannot tell whether you are in their class.

## How does your own site work with listing platforms?
The listing brings the comparison shopper, and your own site closes them. Wedding and event marketplaces such as The Knot, WeddingWire and Peerspace put you next to every other venue in the area, with a profile laid out the same as theirs. Planners who like what they see there search your venue's name next, and what they find decides whether they inquire.
Three things keep the two working together. Capacities, prices and policies should match everywhere, since a planner who sees 200 seated on one page and 180 on another stops trusting both. Your own site should carry what a listing cannot: full galleries by event type, floor plans, vendor rules and logistics. And inquiries from your own site should be tracked separately, so you can see which channel earns its fee.

## How do you show hundreds of photos without a slow site?
By organizing them, sizing them properly and loading them only as they are needed. Venue photography is the heaviest content a small business site carries, and planners browse it on phones.
- Galleries are split by event type and by space, so nobody scrolls through 300 images to find a seated dinner in the main hall.
- Every photo is served at the size of the screen viewing it, in a modern format, and images below the fold load as the visitor scrolls.
- Floor plans are offered as a clear image on the page and as a PDF download, since planners forward them to caterers and rental companies.
- Virtual tours and video load when the visitor presses play. A 3D tour that loads on arrival can outweigh the rest of the page several times over.
Check the usage terms on event photos as well. Images from a wedding usually belong to the photographer, so ask for permission and credit them. Photographers tend to say yes, and the credit builds a relationship with someone who recommends venues.

## What should the site say about accessibility and logistics?
Say specifically what a guest or vendor will encounter, because vague reassurance does not help anyone plan. Accessibility information is practical: step-free routes, elevator access to each level, accessible restrooms, accessible parking and drop-off points.
Venues open to the public generally have obligations under the Americans with Disabilities Act, and the website itself should be usable with a keyboard and a screen reader. I build to recognized accessibility guidelines, with real text, labeled form fields and sufficient contrast. That is general information and not legal advice, so check your specific obligations with an attorney.
Logistics deserve their own page: load-in route and hours, parking counts, noise limits and end times, approved or required vendors, insurance requirements and rain plans for outdoor spaces.

## How do deposits, package choice and timeline work?
Deposits are best taken after a date is confirmed and the contract is signed, through a payment link sent to that client. Stripe handles cards and, in the US, bank transfers, which matters because card fees on a large deposit add up. Your contract and e-signature can stay in the tool you already use.
For the build itself, a Business Site, from $450 and about 14 days, fits a single venue with one or two spaces: up to 5 pages, a structured inquiry form and local SEO setup. A synced availability calendar, an inquiry admin, online deposits or several venues make it a Full Custom Build, from $1,200 and about 21 days. Running costs afterwards are a domain at roughly $10 to $20 a year, light hosting and standard payment processing fees.
Have these ready and the schedule holds:
- Capacities for each space in each layout, and floor plans
- Your best photos by event type, with permission to use them
- Starting prices and what they include
- Vendor, catering, noise and parking rules
- Who should receive each type of inquiry

## The bottom line
A venue site wins by letting a planner answer their own first questions, then making the inquiry complete enough that your first reply can be a quote. Publish capacities and a starting price, show real events, keep any calendar honest and reply automatically within the minute. The tour is where you sell the room, and the site's job is to get the tour booked.`,
    faqs: [
      { q: 'Can the site show available dates?', a: 'Yes, by connecting a calendar you maintain, or with a date field on the inquiry form that you confirm by reply.' },
      { q: 'Can couples or planners pay a deposit online?', a: 'Yes, with Stripe checkout once a date is confirmed.' },
      { q: 'Can inquiries go to different people by event type?', a: 'Yes. Weddings, corporate and private events can each notify a different coordinator.' },
      { q: 'Should we put prices on the venue website?', a: 'Yes, at least a starting price or minimum and what it includes. Planners use it to check budget fit before they ask for a tour.' },
      { q: 'How much does a venue website cost?', a: 'A Business Site starts from $450 and takes about 14 days. Availability calendars, online deposits or several venues make it a Full Custom Build, from $1,200 and about 21 days.' },
      { q: 'Can the inquiry form connect to our venue software?', a: 'Often, yes. If your platform accepts web inquiries, the form can send submissions there, and if it does not, they are saved in a simple admin list.' },
    ],
  },
  {
    slug: 'car-washes-and-auto-detailing',
    name: 'Car washes and auto detailing',
    noun: 'business',
    h1: 'Websites for car washes and auto detailers',
    metaTitle: 'Car Wash & Auto Detailing Website Development | Thomas Osayi',
    description: 'Car wash and detailing websites with service menus, membership plans, online booking and local SEO. Fast, custom Next.js sites built in Los Angeles.',
    intro: 'Car wash and detailing customers decide quickly and locally: what does it cost, how long does it take, and can I get in today. A site with a clear service menu, membership offer and booking button converts those "near me" searches into cars in the bay.',
    mustHaves: [
      { title: 'A clear service and price menu', text: 'Wash tiers or detail packages side by side with what each includes and how long it takes.' },
      { title: 'Membership plans', text: 'Unlimited wash memberships explained simply, with sign-up online.' },
      { title: 'Online booking for detailing', text: 'Service, vehicle size and time slot, with mobile detailing addresses if you travel.' },
      { title: 'Location, hours and directions up top', text: 'The most searched details, also in structured data for Google.' },
      { title: 'Before and after photos', text: 'Real results from your own work, especially for interior and paint correction services.' },
    ],
    mistakes: [
      'Prices only available by phone',
      'Membership terms hidden or confusing',
      'No booking for detail services that need a time slot',
      'Hours on the site that disagree with Google Maps',
    ],
    related: ['astiglow', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'Most single-location washes and detailers fit the Business Site package. Online membership sign-up with billing or several locations make it a Full Custom Build.',
    guide: `A tunnel wash and a detail shop sell different things. One sells speed and a monthly plan, the other sells hours of skilled work by appointment. Many businesses do both, so the site has to handle a quick decision and a considered one side by side. This guide walks through how each part works.

## How does online membership sign-up actually work?
It depends on how your wash recognizes a member's car, and that is the first thing I ask about. Most express washes identify members at the pay station by license plate or by a tag on the windshield. For the gate to open, the membership has to exist in the wash's own point of sale system, which is why sign-up usually needs to happen there.
That leads to two setups.
- Your wash software has an online sign-up page. Systems such as DRB, Sonny's and Washify are built around memberships, and many operators have a hosted sign-up or customer portal available. The website explains the plans and sends the customer to that page with the right plan selected where possible.
- You have no gate hardware. A hand wash, a detail shop with a monthly maintenance plan or a mobile operator can sell subscriptions through Stripe, since staff check membership by name or phone number. This is a custom feature with its own billing logic.
The mistake to avoid is taking membership payments on the website in a system the pay station cannot see. The customer pays, drives up and is asked to pay again.
### Terms and cancellation
State the monthly price, what it covers, whether it is one vehicle per plan and how to cancel, right beside the sign-up button. Many states, California among them, have automatic renewal laws that expect clear terms and a simple way to cancel. That is general information and not legal advice, but clear terms are good practice anywhere. Cancellation that is hard to find is the fastest route to chargebacks and one-star reviews.

## How should detailing bookings work?
A detail booking is a small calculation: service, vehicle size and add-ons decide the price and the time. A good booking flow asks those three things first, then shows only the slots long enough for the job.
- Vehicle size. Sedan, SUV or truck, and oversized, each with its own price and duration.
- Condition questions. Pet hair, heavy stains or smoke odor change the time needed. Asking up front, with a price adjustment or a note that the quote may change on inspection, prevents the argument at drop-off.
- Add-ons. Engine bay, headlight restoration, clay and sealant, each adding time as well as cost.
- Deposit. A small card deposit cuts no-shows on jobs that block half a day.
Paint correction and ceramic coating are different. The price depends on the paint, so those pages should lead to an inspection or a quote request with photos, not to an instant booking.
For the booking engine, a tool such as Square Appointments or a detailing-specific app can be linked or embedded, and it keeps your calendar in one place. A custom flow makes sense when the pricing rules are more involved than those tools allow.

## What changes for mobile detailers?
The booking has to know where the job is, how far it is and what is available on site. A shop has one location, but a mobile operator's day is a route.
The form collects the service address and checks it against your service area, with a clear message and a travel fee or a polite decline outside it. It should ask whether water and a power outlet are available, whether the car will be in a garage, a driveway or on the street, and whether a building has rules about washing on the property. Slots need travel time built in, or two jobs across town end up booked back to back.
With more than one crew, scheduling becomes its own problem: assigning each job to a person and keeping everyone's calendar in step. FieldOps, a job scheduling app I built with Outlook Calendar sync for field teams, deals with that kind of assignment work.
![FieldOps: a job scheduling app I built with Outlook Calendar sync for field teams.](/work/fieldops.jpg)

## How do near me searches work for a wash or detailer?
Google's map results decide most of them, and those come from your Google Business Profile more than your website. The site supports the profile, and the two have to agree.
- Hours. Enter them in one place on the site and mirror them on the profile, including holidays. An express wash that closes for rain or freezing weather should have a banner the manager can switch on from a phone.
- Categories and services. Pick the profile category that matches the main business, and list services there under the same names used on the site.
- Mobile businesses. A detailer with no storefront can set the profile up as a service-area business, which shows the area served and hides the home address.
- Reviews. A short link or QR code at the pay station or on the invoice, pointing straight to the review form, brings in more reviews than asking customers to search for you.
- Photos. Real photos of the tunnel, the bays and finished cars, added regularly.
On the site, each major service gets its own page, because interior detailing, ceramic coating and unlimited wash club are separate searches.
> Give every location its own page with its own hours, address, map and photo. A single locations page with five addresses in a list gives Google and customers very little to work with.

## Should the site have a fleet or commercial page?
Yes, if you want that work, because fleet buyers will not use a consumer booking form. A dealership, a rental company or a contractor with ten trucks wants to know about volume pricing, invoicing, scheduling and whether you come to them.
A fleet page needs a short description of the accounts you handle, how billing works and a quote form that asks for vehicle count, vehicle types, frequency and location. Those inquiries should go to the owner or manager, not to the general inbox. One fleet account can equal a lot of individual washes, so the page is worth its small cost.

## Which package fits, and when is custom not worth it?
A Business Site, from $450 and about 14 days, fits most single-location washes and detailers: up to 5 pages, a booking or quote form and local SEO setup. Subscriptions billed through the site, a custom detail booking flow with pricing rules or several locations make it a Full Custom Build, from $1,200 and about 21 days.
A small operation may need less. A solo mobile detailer who books by text can start with a Starter Site, from $150 and about 7 days: one page with services, prices, service area, photos and a button to text or book. Do not pay for a custom booking engine until the off-the-shelf tools are clearly holding you back.
After launch, the costs are a domain at roughly $10 to $20 a year, light hosting, and the monthly fees of whatever booking or wash software you use. Before we start, it helps to have:
- Your full menu with prices by vehicle size, and how long each service takes
- Membership plans and their terms
- The name of your wash or booking software and a login or contact
- Before and after photos of your own work
- Service area boundaries, if you travel

## The bottom line
Match the site to how each customer buys. Wash customers need the price, the hours and a membership sign-up that the pay station recognizes. Detail customers need a booking that prices by vehicle and holds the right amount of time. Keep the site and your Google Business Profile telling the same story, and make the terms of any recurring charge impossible to miss.`,
    faqs: [
      { q: 'Can customers buy a membership online?', a: 'Yes, through your car wash software if it supports online sign-up, or with Stripe subscriptions.' },
      { q: 'Can mobile detailers take bookings with an address?', a: 'Yes. The booking form can collect the service address and check it against your service area.' },
      { q: 'Will the site help with "car wash near me" searches?', a: 'It covers the on-site part: speed, location data and service pages. Your Google Business Profile and reviews matter most for Maps.' },
      { q: 'Can the booking price change by vehicle size?', a: 'Yes. The booking flow can set the price and the time needed from the service, the vehicle size and any add-ons.' },
      { q: 'How much does a car wash or detailing website cost?', a: 'A Business Site starts from $450 and takes about 14 days. Billing memberships through the site, custom booking rules or several locations make it a Full Custom Build, from $1,200 and about 21 days.' },
      { q: 'Can we post a closure for bad weather?', a: 'Yes. A banner the manager can switch on from a phone shows the closure on every page.' },
    ],
  },
  {
    slug: 'accountants-and-bookkeepers',
    name: 'Accountants and bookkeepers',
    noun: 'firm',
    h1: 'Websites for accountants, CPAs and bookkeepers',
    metaTitle: 'Accountant & Bookkeeper Website Development | Thomas Osayi',
    description: 'Websites for CPA firms and bookkeepers with service pages, pricing guidance, consultation booking and secure document handoff. Custom Next.js builds.',
    intro: 'Business owners and individuals choose an accountant on fit and trust: do you work with businesses like mine, what does it cost, and how do we get started. A site that answers those clearly, then books a consultation, wins clients before tax season gets busy.',
    mustHaves: [
      { title: 'Service pages by client type', text: 'Small business bookkeeping, tax preparation, payroll, advisory. Each page says who it is for and what is included.' },
      { title: 'Pricing guidance', text: 'Starting prices or how fees are set, so prospects can self-qualify before a call.' },
      { title: 'Consultation booking', text: 'A scheduling link for a free or paid intro call, embedded on every service page.' },
      { title: 'Secure document handoff', text: 'A link to the client portal your firm already uses, never email attachments or a basic upload form.' },
      { title: 'Credentials and industries served', text: 'CPA licenses, certifications and the industries you know best.' },
    ],
    mistakes: [
      'A generic list of services with no sense of who you serve',
      'Collecting tax documents through an ordinary website form',
      'No prices or fee guidance at all',
      'Deadline and tax content that is years out of date',
    ],
    related: ['vencare', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'Most firms fit the Business Site package. Custom client portals or onboarding workflows make it a Full Custom Build.',
    guide: `An accounting firm's website sits next to some of the most sensitive data a small business handles, so the most important design decision is what the site refuses to touch. Once that line is drawn, the rest is about fit, fees and getting the right prospects onto your calendar before the busy months.

## How should client documents move, if not through the website?
Through a client portal built for it, with the website acting as the front door. Firms generally use a practice platform such as TaxDome, Canopy, Karbon, SmartVault or ShareFile, which gives each client a login, encrypted upload, e-signature and a record of who accessed what. The website's part is a clearly labeled Client Login button in the header and a short page explaining how to send documents safely.
There is a regulatory reason as well as a practical one. In the United States, tax preparers are generally treated as financial institutions under the FTC Safeguards Rule and are expected to keep a written information security plan. A W-2 arriving through a contact form and sitting in an inbox works against that plan. This is general information and not legal advice, so check your own obligations with your insurer or counsel.
### What the page should tell clients
- Use the portal link for anything with a Social Security number, bank details or tax forms
- Do not email documents, even if it seems quicker
- What to do if they have lost their login
- How the firm will and will not contact them, which helps clients spot phishing during tax season

## What can a firm's website form safely ask?
Enough to judge fit, and nothing you would need to protect. A prospect inquiry should tell you who they are and what they need without collecting a single identifier.
A useful intake form asks for:
- Name, email and phone
- Individual or business, and the business type and entity if they know it
- A revenue range chosen from a list, not an exact figure
- Services needed: tax preparation, monthly bookkeeping, payroll, catch-up work, advisory
- The software they use now, such as QuickBooks Online or Xero
- How many months or years behind they are, for cleanup work
The form should never have a field for a Social Security number, an EIN, a date of birth or a file upload. I also add a line under the message box asking people not to paste account details, because some will if nobody says otherwise.
> Add a question about what prompted the inquiry, with choices such as new business, IRS notice, switching accountants or behind on books. It tells you how urgent the call is and which partner should take it.

## How should consultation booking handle tax season?
With a scheduling link you can tighten or switch off as your capacity changes. A standard scheduling tool handles the booking itself. What matters on the site is what surrounds it.
Outside the busy season, an open booking link on every service page works well. From January to April, most firms need more control, so I build a simple switch that changes the button on tax pages from Book a call to Join the waitlist or Now booking for extensions. Prospects get an honest answer and staff are not buried in intro calls they cannot follow up.
A paid consultation is worth considering for advisory work and IRS notice reviews. Charging a modest fee for the first call, credited against the engagement, filters out people looking for free advice. The scheduling tool can take the payment at booking.
After the call, the next step should already exist: an engagement letter and portal invitation sent from your practice platform, not a round of emails asking for documents.

## How should an accounting firm present its fees?
As starting prices tied to scope, so a prospect can estimate their own cost. Accounting fees are easier to publish than most firms think, because the drivers are well known.
### Bookkeeping
Monthly bookkeeping is usually priced in tiers by volume: number of bank and card accounts, monthly transactions and whether payroll or sales tax is included. Three tiers side by side, each with a starting price and what is included, let a business owner place themselves.
### Tax preparation
List starting prices by return type: individual, individual with a rental or a Schedule C, partnership, S corporation. Add one sentence on what raises the fee, such as multiple states or disorganized books.
### Cleanup and advisory
These are quoted after a look at the books. Say that plainly, give a typical range if you can, and point to the consultation.
Publishing fees also saves time. The prospect who was never going to pay your minimum filters themselves out, and the one who books has already accepted the range.

## What are the rules on how accountants advertise?
The main ones concern titles and claims, and they come from your state board and, for some credentials, the IRS. Again this is general information and not legal advice.
- Titles. Only licensed CPAs may use the CPA title, and state boards have rules on firm names and on how unlicensed staff are described. A bookkeeping firm should not imply it offers CPA services if it does not.
- Credentials. Enrolled agents should describe the credential accurately and not suggest they work for the IRS.
- Promises. Do not guarantee refunds, audit outcomes or specific savings.
- Testimonials. Use real clients with permission, and avoid quoting dollar results as if they were typical.
On the site this means a credentials section that lists each person's actual license, the state that issued it and their role. That is also what prospects want to see.

## How do you keep a firm's content from going stale?
By separating evergreen pages from dated ones and giving the dated ones an expiry. Out-of-date deadlines are the most common credibility problem on accounting sites, and they are a structural problem more than a writing one.
Service pages and niche pages are evergreen. A page on bookkeeping for restaurants or tax planning for contractors describes the problems of that client type and stays accurate for years. These are the pages that rank for searches such as accountant for dentists in your city.
Deadline posts and tax law updates are dated. Each one gets a visible published date and a review date in the editor, and anything past its review date is flagged or hidden from the home page automatically. It is better to publish four accurate updates a year than to leave twenty old ones live.

## When is a custom client portal worth building?
Rarely, because the portals in practice platforms already handle documents, signatures and billing with security work behind them that a small firm should not take on. Use those, and spend the website budget on pages and intake.
Custom software makes sense when your workflow is the product and no platform fits it, for example an onboarding tool unique to a niche you serve. That is a different class of project. Guardian MindCare, a therapy practice platform I built, has five user roles with strict permissions for each, and work of that kind falls under my SaaS packages, where a Full SaaS Platform starts from $3,000 and takes about 45 days.
![Guardian MindCare: a therapy practice platform I built with five user roles, where each role sees only what it should.](/work/fiverr/guardian.jpg)

## Which package fits a firm, and what should you prepare?
A Business Site, from $450 and about 14 days, suits most firms: up to 5 pages, consultation booking and local SEO setup. A larger set of service and niche pages, an editor for updates and seasonal booking controls make it a Full Custom Build, from $1,200 and about 21 days. Running costs afterwards are a domain at roughly $10 to $20 a year and light hosting, plus the tools you already pay for.
Bring these to the first conversation:
- Your services, and the client types you most want more of
- Starting fees or tiers you are willing to publish
- Each person's credentials and license details
- Your portal and scheduling links
- Your capacity for new clients by season

## The bottom line
Keep sensitive data out of the website entirely and send it to the portal built to hold it. Then use the site for what it is good at: showing who you serve, what it costs to start and how to book a call. Firms that publish clear scopes and starting fees spend less time on calls that go nowhere.`,
    faqs: [
      { q: 'Can clients upload documents through the website?', a: 'Sensitive documents should go through a secure client portal. The website links clients straight to it.' },
      { q: 'Can we publish tax deadline reminders?', a: 'Yes. A simple editor lets you post updates, and I can mark dated content so it is easy to keep current.' },
      { q: 'Can the site help us find clients in a niche?', a: 'Yes. Pages written for one type of client, such as restaurants or contractors, often rank and convert better than general pages.' },
      { q: 'Should an accounting firm publish its fees?', a: 'Yes, as starting prices or tiers tied to scope. Prospects can estimate their own cost, and the ones who book a call have already accepted the range.' },
      { q: 'How much does an accounting firm website cost?', a: 'A Business Site starts from $450 and takes about 14 days. More service pages, an editor and seasonal booking controls make it a Full Custom Build, from $1,200 and about 21 days.' },
      { q: 'Can we pause new client bookings during tax season?', a: 'Yes. A simple switch changes the booking button to a waitlist or an extensions message while you are at capacity.' },
    ],
  },
  {
    slug: 'tutoring-and-education',
    name: 'Tutoring and education businesses',
    noun: 'tutoring business',
    h1: 'Websites for tutoring centers and education businesses',
    metaTitle: 'Tutoring & Education Website Development | Thomas Osayi',
    description: 'Websites for tutoring centers, test prep and education businesses with subject pages, tutor profiles, pricing and session booking. Custom Next.js sites.',
    intro: 'Parents and students compare tutors on subjects, results, schedule and price. A tutoring site that shows exactly what you teach, who teaches it and how to book a first session makes that decision easy, and subject pages bring in the searches that start it.',
    mustHaves: [
      { title: 'A page per subject or test', text: 'Math, reading, SAT, ACT, AP subjects. Each explains your approach and who it is for.' },
      { title: 'Tutor profiles', text: 'Background, subjects and teaching style. Parents want to know who will work with their child.' },
      { title: 'Clear pricing and packages', text: 'Per-session rates and packages side by side, plus what happens at a first session.' },
      { title: 'Session booking', text: 'A booking link for an assessment or first session, online or in person.' },
      { title: 'Results told honestly', text: 'Real student outcomes shared with permission, without guarantees nobody can keep.' },
    ],
    mistakes: [
      'One page listing every subject in a sentence',
      'Guaranteed score increases that set the wrong expectations',
      'No tutor information at all',
      'Booking only by email or phone',
    ],
    related: ['astiglow', 'sqwad'],
    service: 'nextjs-website-development',
    packageHint: 'Most tutoring businesses fit the Business Site package. Student portals, scheduling logic or course sales make it a Full Custom Build or a SaaS project.',
    guide: `Tutoring is bought by one person and used by another. A parent pays and decides, a student shows up and does the work, and the site has to make sense to both. It also has to cope with a calendar that follows the school year. The questions below cover how the practical parts fit together.

## How do booking and payment work for a tutoring business?
Most tutoring businesses need two flows: a one-time first step, and a recurring arrangement after it. Treating them as the same booking is where sites get confusing.
### The first step
New families should book an assessment or a consultation, not a regular session. It is a single appointment, free or paid, with a short form about the student: grade, subject, school, current goals and what has been tried. A general scheduling tool handles this well, and the button belongs on every subject page.
### The ongoing sessions
Regular tutoring is usually a standing weekly slot with one tutor, billed monthly or drawn down from a package of hours. That needs recurring bookings, a balance of remaining hours and a cancellation rule. Tutoring management tools such as TutorBird or Teachworks are built for this, including invoices and lesson notes, and the site links families to them once they enroll.
### Policies on the page
State the cancellation window, how make-up sessions work and when packages expire, next to the prices. Families accept a 24 hour cancellation rule easily when they read it before paying and resent it when they learn of it afterwards.
For payment, session packages can be sold through the scheduling tool or with Stripe checkout. Card on file with monthly billing suits long-term students better than asking a parent to pay again every four weeks.

## Who is the website written for: the parent or the student?
Mostly the parent, with a clear exception for older students. For elementary and middle school tutoring, the parent searches, compares and pays, so the pages should answer a parent's questions: who will be with my child, how will I know it is working, and how does it fit our week.
High school students often search for themselves, especially for test prep and AP subjects, then send a link to a parent. Those pages should speak to the student about the test and the plan, and still carry the price and booking details a parent needs. Adult learners and college students are their own group and want scheduling flexibility above all.
In practice this means each subject page has two layers: a plain description of how you teach the subject, and a short section headed for parents that covers progress reports, communication and safety. If tutors work with minors, say what vetting you do, such as background checks, and say only what is true.

## What should a tutoring site know about children's privacy?
Collect information from the parent, keep what you collect to the minimum, and do not ask children to create accounts without a parent involved. What follows is general information and not legal advice.
In the United States, a law known as COPPA sets rules for online services that collect personal information from children under 13, including a requirement for parental consent. The simplest way for a tutoring site to stay clear of trouble is to address forms to the parent or guardian, ask for the student's first name and grade only, and leave anything sensitive, such as learning differences or school reports, for a conversation or a secure tool.
Other points worth settling early:
- Photos of students need a signed release from a parent, and first names only in captions.
- Testimonials from families should be used with permission and without details that identify a child.
- Recordings of online sessions need a stated policy: who can record, where recordings are kept and for how long.
- If you work with schools or receive school records, ask the school what its own privacy rules require of you.

## How do families find a tutor, in person and online?
They search for a subject or a test plus a place, and for online tutoring they often drop the place. An in-person center competes in map results for searches such as math tutor near me, where a Google Business Profile and reviews carry most of the weight. An online-only business competes on the subject pages themselves.
A few specifics help.
- One page per subject and level. Algebra 1 help and AP Calculus tutoring are different searches from different families.
- One page per test, with the current format, a typical preparation timeline and how you structure it. Keep test names accurate. Names such as SAT and ACT are trademarks, and a page should not suggest any affiliation with the organizations behind them.
- Local detail without overreach. It is fine to say you work with students from nearby schools. Do not imply a school endorses you unless it does.
- A page for each format if you offer both: in-center, in-home and online, each with what a session looks like.
> Publish a short sample of your teaching on each subject page, such as one worked problem or a two-minute explanation on video. It shows parents how you explain things better than any description of your method.

## How should results be presented without overpromising?
With specifics, context and permission. Score guarantees attract the wrong expectations, and a guarantee you cannot honor is an advertising problem as well as a customer service one.
Honest results look like this: a named or anonymized student, the starting point, the amount of tutoring and the outcome, for example a student who met weekly for a semester and moved from a C to a B plus in chemistry. If you publish averages, say how many students they cover and over what period. If you offer a guarantee, write out exactly what it promises, such as extra sessions at no charge, and what the student must do to qualify.
Tutor credentials deserve the same care. List real degrees, certifications and years of teaching, and do not describe a tutor as a certified teacher unless they hold that credential.

## When is a student portal or course platform worth building?
When your method depends on something the off-the-shelf tools do not do. For session notes, invoices and scheduling, tutoring management software is cheaper and ready now, and I would point you to it before building anything.
A custom build earns its cost in a few cases: a progress dashboard built around your own curriculum, practice material that adapts to a student's results, or a parent view that combines several children and tutors. Those are web applications with logins and roles, so they fall under my SaaS packages: a SaaS MVP starts from $1,200 and takes about 21 days, and a Full SaaS Platform starts from $3,000 and takes about 45 days.
Selling a program is a simpler job than building a portal. Serenity Institute, a site I built, presents a live, Zoom-based certification program for intervention professionals, and the whole site is organized around one audience deciding on one program. A test prep course or a summer intensive can work the same way.
![Serenity Institute: a site I built for a live, Zoom-based certification program for intervention professionals.](/work/serenity.jpg)

## Which package fits, and when should you launch?
A Business Site, from $450 and about 14 days, fits most tutoring businesses: up to 5 pages, a booking link and local SEO setup. A page for every subject and test, tutor profiles and an editor for updates make it a Full Custom Build, from $1,200 and about 21 days. A solo tutor can start with a Starter Site, from $150 and about 7 days.
Timing matters more here than in most industries. Demand rises at the start of the school year, before exam periods and ahead of major test dates, so aim to launch several weeks before those points, allowing time for pages to be indexed. Running costs after launch are a domain at roughly $10 to $20 a year, light hosting and your scheduling tool's fee.
Prepare these and the build moves quickly:
- Subjects, levels and tests you teach, in priority order
- Rates, packages and policies
- Tutor bios, credentials and photos
- Results and testimonials with permission
- Your scheduling or tutoring management account

## The bottom line
Write for the parent, respect the student, and separate the first booking from the ongoing schedule. Give every subject and test its own page, be exact about results and credentials, and collect as little about children as you can. Launch ahead of the school calendar and the site will be working when families start looking.`,
    faqs: [
      { q: 'Can students book and pay online?', a: 'Yes, through a scheduling tool with payments or with Stripe checkout for session packages.' },
      { q: 'Can you build a student portal?', a: 'Yes. Portals with session notes, materials and progress for students and parents are a custom build.' },
      { q: 'Can the site show availability by tutor?', a: 'Yes, by connecting each tutor\'s calendar through your scheduling tool.' },
      { q: 'How much does a tutoring website cost?', a: 'A Business Site starts from $450 and takes about 14 days. A page for every subject and test plus tutor profiles makes it a Full Custom Build, from $1,200 and about 21 days.' },
      { q: 'Should a tutoring site guarantee score increases?', a: 'No. Specific, permitted examples of real student progress are more believable, and any guarantee you do offer should spell out exactly what it promises.' },
      { q: 'When is the right time to launch a tutoring website?', a: 'Several weeks before the school year, exam periods or major test dates, so the pages are indexed by the time families start searching.' },
    ],
  },
  {
    slug: 'photographers',
    name: 'Photographers',
    noun: 'photography business',
    h1: 'Photographer websites that load fast and book shoots',
    metaTitle: 'Photographer Website Design & Development | Thomas Osayi',
    description: 'Photography websites with fast-loading portfolios, session packages, inquiry forms and client galleries. Custom Next.js builds by a Los Angeles developer.',
    intro: 'For a photographer, the portfolio is the pitch. The challenge is showing large, beautiful images without making the site slow, then turning a visitor who loves the work into a booked session with clear packages and an easy inquiry.',
    mustHaves: [
      { title: 'A portfolio that loads fast', text: 'Modern image formats, responsive sizes and lazy loading, so full-quality work appears quickly on phones.' },
      { title: 'Galleries by type of shoot', text: 'Weddings, portraits, brands, events. Clients look for the kind of work they need.' },
      { title: 'Packages and starting prices', text: 'What each session includes, how many images, turnaround and starting price.' },
      { title: 'A structured inquiry form', text: 'Date, location, shoot type and budget, so you can reply with a quote right away.' },
      { title: 'Your story and style', text: 'Clients hire a person. A short about section with your approach builds that connection.' },
    ],
    mistakes: [
      'Uploading full-size camera files that make every page slow',
      'Portfolios with every shoot ever, instead of the best work by category',
      'No prices or packages anywhere',
      'Right-click blockers and pop-ups that annoy visitors without protecting anything',
    ],
    related: ['new-york-nook', 'astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'Most photographers fit the Starter or Business Site package. Client proofing galleries or online booking with deposits make it a Full Custom Build.',
    guide: `Two questions sit under almost every photography website project: why do my images look soft or load slowly online, and do I need a custom site at all when gallery services and builders exist. Both have clear answers, and they shape everything else about the build.

## How do large photos load fast and still look right?
The site keeps one high-quality original of each image and generates a set of smaller versions from it, then sends each visitor the one that fits their screen. A phone gets a file a fraction of the size a large monitor gets, and neither waits for pixels it cannot show.
The details that decide whether the result looks like your work:
- Export size. Around 2,500 pixels on the long edge is plenty for full-screen display on nearly every device. A 40 megapixel original adds weight and no visible quality.
- Color space. Export in sRGB. Files left in a wider color space can look flat or oversaturated in some browsers, which is the usual cause of the complaint that an image looks different on the site.
- Format. The site serves modern formats such as WebP or AVIF to browsers that support them, with a JPEG fallback. You do not have to create these yourself.
- Sharpening. Sharpen for screen at export, lightly. Resizing softens an image slightly, and heavy sharpening shows halos once it is compressed.
- Reserved space. Each image has its dimensions declared, so the page does not jump as photos arrive.
- Order of loading. The first image on a page loads immediately at high priority. Everything below loads as the visitor scrolls, with a soft blurred placeholder in its place.
> Test your own site on a phone using mobile data, not studio wifi. If the first image takes more than a couple of seconds to appear, clients on a venue walkthrough or a lunch break are seeing the same thing.

## Do you need a custom site, or is a builder enough?
A builder is enough for many photographers, and I would rather say so. Squarespace, Format and Showit all produce a presentable portfolio, include hosting and let you rearrange pages yourself. If you are starting out, shoot one type of work and want to manage everything alone, a builder is a reasonable choice.
The limits show up in three places. Speed, because builder templates load scripts and styles you do not use, and image-heavy pages suffer for it. Design, because the popular templates are recognizable, and a portfolio that looks like a hundred others weakens the pitch. And structure, because adding things such as a location page for every venue you shoot at, or an inquiry form with its own logic, means fighting the tool.
A custom site costs more upfront and has no monthly platform fee, only a domain and light hosting. It makes sense when the site is your main source of inquiries and the difference in speed and presentation is worth money to you.

## Where should client galleries and proofing live?
In a gallery service, linked from your site, not built into it. Delivery platforms such as Pixieset, Pic-Time and ShootProof handle private galleries, favorites, downloads at chosen sizes and print sales through partner labs. That is specialized software, and rebuilding it is rarely a good use of a photographer's budget.
The website's part is small and useful: a Client Galleries link in the navigation that goes to your gallery account, styled so the move between the two is not jarring, and a short note on how long galleries stay online. Custom proofing is worth building only when you have a workflow those services do not support.
The portfolio is a separate thing from delivery. A client gallery holds every keeper from a shoot. A portfolio holds a small number of your strongest frames per category, picked and ordered by you.

## How does an inquiry become a booked shoot?
Through a short chain: form, fast reply, proposal, contract, retainer. The website owns the first two links, and a studio management tool usually owns the rest.
### The form
Ask for the date, location, type of shoot, rough budget and how they found you. For weddings add the venue and guest count. For brand work add the intended use of the images, since licensing affects the quote.
### The reply
An automatic email confirms the inquiry arrived, shares your pricing guide and says when you will respond personally. Couples often write to several photographers in one sitting, and the first useful reply tends to get the call.
### The rest
Tools such as HoneyBook, Dubsado or Studio Ninja send the proposal, the contract and the invoice for the retainer. Where the tool allows it, the site form can post directly into it so each lead appears in your pipeline without retyping.
Mini sessions are the exception. Fixed slots on fixed dates at a fixed price can be booked and paid for directly, with no proposal step. A booking page with limited slots and payment at checkout suits them well.

## How do photographers get found in search?
By matching the phrases clients type, which are nearly always a type of photography plus a location. Search engines read text, so a page that is only images gives them little to index.
- Category pages with words. Each gallery page needs a heading, a short paragraph about how you shoot that kind of work and where, and a link to inquire.
- Location and venue pages. A page or post for each venue you have shot, with a selection from real events there, matches searches for that venue's name plus photographer. Couples who have booked a venue search exactly that.
- Descriptive alt text and file names. Describe what is in the frame in plain words. It helps image search and it helps visitors who use screen readers.
- A Google Business Profile. Even without a studio, a profile set to a service area puts you in local results and gives clients a place to leave reviews.
- Recent work. A steady trickle of new sessions tells both clients and search engines that you are active.

## How do you protect your images online?
You cannot make an image impossible to copy, so the practical goal is to limit what a copy is worth and keep your ownership clear. Anything shown on a screen can be captured, and blocking the right-click menu stops nobody determined.
What does help:
- Size. Display images at screen resolution only. A 2,500 pixel file makes a poor large print.
- Metadata. Keep your copyright and contact fields in the exported file.
- Watermarks, used sparingly. They suit proofs in a client gallery more than a portfolio, where they distract from the work.
- Clear terms. A short usage note on the site states that images may not be used without a license.
The other half is permission to show the work. Your contract should cover portfolio use, and commercial or sensitive shoots may need a specific release. Some clients will ask to stay private, so keep a way to mark a session as not for publication. Check your contract wording with a lawyer, since this is general information and not legal advice.

## Which package fits a photographer, and what should you prepare?
A Starter Site, from $150 and about 7 days, suits a photographer with one specialty: a single page with a curated gallery, packages and an inquiry form. A Business Site, from $450 and about 14 days, covers up to 5 pages, which usually means separate galleries by shoot type, an about page and pricing. Many venue pages, an editor for adding galleries yourself or direct booking with deposits make it a Full Custom Build, from $1,200 and about 21 days.
After launch you pay for a domain, roughly $10 to $20 a year, light hosting, and whichever gallery and studio tools you already use.
The slowest step is nearly always choosing the images. Before we start, have ready:
- 15 to 25 of your strongest images per category, exported in sRGB at about 2,500 pixels on the long edge
- Packages with what each includes, turnaround and starting prices
- A short bio and a current portrait of you
- A few client reviews you have permission to quote
- Logins or links for your gallery service and studio management tool

## The bottom line
Show fewer images, make them load fast and make them look exactly as you edited them. Keep delivery and contracts in the tools built for them, and use the site for the portfolio, the prices and an inquiry form that lets you quote in one reply. If a builder already does that for you, keep it. If the site is where your bookings come from and it feels slow or generic, that is when a custom build pays for itself.`,
    faqs: [
      { q: 'Will my photos look sharp without slowing the site?', a: 'Yes. Images are served in modern formats at the right size for each screen, so they look sharp and load fast.' },
      { q: 'Can I add new work myself?', a: 'Yes. A simple editor lets you upload new galleries without code.' },
      { q: 'Can clients pay a deposit to book?', a: 'Yes, with Stripe checkout or through your booking tool.' },
      { q: 'What size should I export photos for my website?', a: 'About 2,500 pixels on the long edge in the sRGB color space. The site creates smaller versions for phones from that file.' },
      { q: 'Do you build client proofing galleries?', a: 'Usually I link your site to a gallery service such as Pixieset or Pic-Time, which already handles proofing, downloads and prints. Custom proofing is a Full Custom Build.' },
      { q: 'How much does a photographer website cost?', a: 'A one-page Starter Site starts from $150 and takes about 7 days. A Business Site with galleries by shoot type starts from $450 and takes about 14 days.' },
    ],
  },
  {
    slug: 'architects-and-interior-designers',
    name: 'Architects and interior designers',
    noun: 'studio',
    h1: 'Websites for architects and interior designers',
    metaTitle: 'Architect & Interior Designer Website Development | Thomas Osayi',
    description: 'Portfolio websites for architecture and interior design studios with project case studies, services, process and inquiry forms. Custom Next.js builds.',
    intro: 'Design clients judge a studio by its taste before they read a word. The site has to present projects the way the studio would in a printed monograph, then explain the process and fees clearly enough that the right clients reach out and the wrong ones self-select out.',
    mustHaves: [
      { title: 'Project case studies', text: 'Each project with large photography, the brief, the constraints and the result, not just a gallery.' },
      { title: 'Services and process', text: 'What a typical engagement looks like, from first meeting to completion, and how fees are structured.' },
      { title: 'A qualifying inquiry form', text: 'Project type, location, timeline and budget range so every inquiry is worth a call.' },
      { title: 'Typography and space', text: 'A restrained layout that lets the work carry the page, consistent with the studio\'s own design language.' },
      { title: 'Press and recognition', text: 'Publications and awards, presented quietly and honestly.' },
    ],
    mistakes: [
      'Grids of thumbnails with no story behind each project',
      'No hint of fees or minimum project size',
      'Heavy animations that make the work slow to appear',
      'A template that looks like every other studio\'s site',
    ],
    related: ['vencare', 'astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'Most studios fit the Business Site package or a Full Custom Build, depending on the number of case studies and custom interactions.',
    guide: `Studios rarely win work through the website alone. A referral, a published project or a site sign sends someone to look you up, and the site either confirms the recommendation or quietly loses it. That makes it a validation tool first and a lead source second, and the build should reflect that order.

## How do clients actually find and vet a design studio?
Most arrive already knowing your name, and a smaller group finds you by searching for a type of project in a place. The two groups need different things from the same site.
The first group searches the studio's name after a recommendation. They look at three or four projects, check whether you do work like theirs at their scale, read the about page and decide whether to write. For them, the quality of the case studies and the ease of the inquiry are everything.
The second group searches phrases such as residential architect in a city, restaurant interior designer or a named neighborhood plus remodel. To reach them, the site needs text that search engines can read:
- Project pages that name the project type, the location and the scope in words, not only in images
- A services page for each main type of work, such as new homes, renovations, hospitality or workplace
- A Google Business Profile with the studio's address and correct category
- Links back from publications, directories such as Houzz, and collaborators' sites
Instagram and directory profiles feed both groups. Each should link to the site, and the site should hold the full version of every project that those profiles only preview.

## What goes into a project page beyond photographs?
A sequence, a short narrative and the facts a prospective client uses to compare the project with their own. The existing mistake to avoid is the thumbnail grid. The fix is an edited page with a clear order.
### The order of images
Start with the one image that defines the project, then move through it the way a visitor would: approach, entry, main spaces, details. Mix full-width images with pairs. Include a plan or section where it explains the idea, since drawings show clients that there was thinking behind the photographs.
### The facts
- Location, completion year, size and project type
- Scope of the studio's services, for example full architectural services or interiors only
- Team and collaborators: contractor, engineers, landscape, lighting
- Photographer credit
- Awards and publications for that project
### The narrative
Two or three short paragraphs: what the client asked for, what made it difficult, and what the studio decided. Clients read constraints closely, because their own project will have a tight lot, a budget or a planning restriction too.
> Check your photography license before the build starts. Project photos are normally licensed from the photographer for specific uses, and the license should cover your website and the press. Sort this out per project, not after launch.

## How should the inquiry form screen projects?
By asking the four things that decide fit and giving honest ranges to choose from. A studio's time for first meetings is limited, and a form that qualifies well protects it.
The useful fields are project type, location, a budget range, the intended start date, and the stage the client is at: looking for a site, own the property, have drawings, or need help with an existing design. For interiors, add the rooms or square footage involved. For commercial work, add the company and the role of the person writing.
Budget is the delicate one. Clients often do not know what things cost, so the ranges should start at your real minimum, with a line explaining that the figure means construction or project budget and not the design fee. A project below your minimum can receive a polite automatic reply that suggests other routes, which is kinder than silence.
Routing matters in larger studios. Residential and commercial inquiries can notify different partners, and every submission should be saved as a record in addition to the email, so that nothing depends on one inbox.

## What should a studio say about fees and process?
Enough for a client to understand how you charge and roughly what they are committing to. Architecture and interior design fees confuse clients more than the fees of almost any other service, and a clear page sets the right expectations before the first meeting.
Describe the phases in plain terms: initial consultation, concept, developed design, permits and approvals, construction documents, and involvement during construction. For interiors, cover concept, selections, procurement and installation. Then state how fees are structured in your studio, whether that is a percentage of construction cost, a fixed fee per phase, an hourly rate or a mix, and what a paid first consultation includes if you charge for one.
Interior designers should also say how procurement works: whether furnishings are bought through the studio, and how that is billed. You do not need to publish every number. A stated minimum project size or typical range filters more effectively than any wording about being selective.

## Are there rules about titles and credentials?
Yes. In the United States the title architect is protected and regulated by state licensing boards, and some states also regulate titles for interior designers. This is general information and not legal advice, so confirm the specifics with your own board.
For the website, the practical points are these:
- Describe each person by the title they actually hold, and list licenses with the state that issued them.
- Unlicensed team members are usually described as designers or by a job title, not as architects.
- A studio that offers design services without a licensed architect should describe its services accurately.
- Projects done while at a previous firm should be credited to that firm, with your role stated.
- Awards and press should be listed exactly, with the year and the publication.
Accurate credits on every project page are part of the same discipline, and collaborators notice when they are missing.

## How do motion and large images stay fast?
By keeping motion quiet and treating image loading as part of the design. A studio site should feel considered, and considered usually means the work appears at once and nothing gets between the visitor and it.
Images are served at the size of each screen in modern formats, with the first image on every page given priority and the rest loading on scroll. Each image has its proportions reserved so the layout does not shift. Drawings are best as vector files where possible, so linework stays crisp at any zoom.
Motion is used where it helps the eye: a soft fade as images arrive, a smooth move between a project list and a project. Intro animations, scroll effects that take control away from the visitor and cursor tricks tend to date quickly and slow the first view. The site also respects a visitor's reduced motion setting.

## Is a template enough, and which package fits?
For a young studio with a few projects, a builder such as Squarespace or Cargo is a fair start, and I would say so. The site will be presentable, and your money is better spent on photography. A custom site becomes worthwhile when the template starts to work against the studio's own design language, when pages are slow, or when you want project pages with a structure the template cannot give you.
On my packages, a Business Site, from $450 and about 14 days, covers up to 5 pages, which fits a studio showing a small set of projects with services and contact pages. A full project archive with an editor for adding work, filtering by type and custom transitions is a Full Custom Build, from $1,200 and about 21 days. Running costs afterwards are a domain at roughly $10 to $20 a year and light hosting.
Have these ready before the build:
- Six to ten projects, each with edited photographs, drawings and credits
- Photography licenses that cover web use
- Short project texts, or notes I can write from
- Your typefaces, logo files and any brand guidelines
- A description of your process and fee structure

## The bottom line
Treat the site as the place a recommendation gets confirmed. Give each project an edited sequence, real facts and proper credits, explain fees and phases clearly, and let the form screen for budget and scope. Keep titles accurate and motion restrained, and the work will carry the rest.`,
    faqs: [
      { q: 'Can we add new projects ourselves?', a: 'Yes. Each project is an entry in a simple editor with photos, text and credits.' },
      { q: 'Can the site match our studio\'s aesthetic?', a: 'Yes. Every site is designed from scratch around your work and brand, not a template.' },
      { q: 'Will large project photos slow the site down?', a: 'No. Images are optimized and served at the right size for each screen.' },
      { q: 'How much does a studio website cost?', a: 'A Business Site starts from $450 and takes about 14 days. A full project archive with an editor and custom transitions is a Full Custom Build, from $1,200 and about 21 days.' },
      { q: 'Should we state a minimum project size or budget?', a: 'Yes. A stated minimum or typical range helps the right clients reach out and saves both sides a meeting when the fit is wrong.' },
      { q: 'How many projects should we show at launch?', a: 'Six to ten well-documented projects are enough. A smaller, edited set with full case studies works better than a large grid of thumbnails.' },
    ],
  },
];
