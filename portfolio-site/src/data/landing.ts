// Industry pages (/websites-for/[slug]) and AI-tool fix pages (/fix/[slug]).
import { moreIndustries } from './industries-more';
import { industriesBatch2 } from './industries-batch2';
import { moreToolFixes } from './tools-more';
// Each one has to carry real, specific content: no name-swapped templates.

export interface Faq { q: string; a: string }

export interface Industry {
  slug: string;
  name: string; // "Restaurants"
  noun?: string; // singular for "your ___", e.g. "restaurant"
  h1: string;
  metaTitle: string;
  description: string;
  intro: string;
  mustHaves: { title: string; text: string }[];
  mistakes: string[];
  related: string[]; // case study slugs
  service: string;
  packageHint: string;
  // long-form section in the article body format (see src/data/seo.ts)
  guide?: string;
  faqs: Faq[];
}

const baseIndustries: Industry[] = [
  {
    slug: 'restaurants',
    name: 'Restaurants',
    h1: 'Restaurant websites that fill tables',
    metaTitle: 'Restaurant Website Design & Development in Los Angeles | Thomas Osayi',
    description: 'Custom restaurant websites with menus, reservations and pickup ordering. Fast on phones, easy to update, built in Next.js by a Los Angeles developer.',
    intro: 'Most people find a restaurant on their phone, standing on a sidewalk or deciding where to eat in the next twenty minutes. They want three things: the menu, the hours and a way to book or order. A restaurant site should get them there in one tap and look like the room they are about to walk into.',
    mustHaves: [
      { title: 'A real menu, not a PDF', text: 'Menus as text load instantly, read well on phones and get indexed by Google, so dishes show up when someone searches for them.' },
      { title: 'Reservations or a booking request', text: 'Either a link into your existing system (OpenTable, Resy, Tock) or a simple request form that emails you, with party size, date and time.' },
      { title: 'Pickup ordering', text: 'Direct ordering skips third-party app commissions on pickup orders. It can be a simple order form or a full cart with online payment.' },
      { title: 'Hours, address and map up top', text: 'The most searched details about any restaurant. They belong above the fold and in structured data so Google shows them correctly.' },
      { title: 'Photography that sells the food', text: 'Good photos do more than any copy. I build layouts that let your best shots carry the page.' },
    ],
    mistakes: [
      'Uploading the menu as a PDF or image that phones zoom badly and Google cannot read',
      'Hours on the website that do not match Google Business Profile',
      'A slow template full of scripts and auto-playing video on a phone connection',
      'Sending every pickup order through delivery apps that take a cut of each one',
    ],
    related: ['new-york-nook'],
    service: 'nextjs-website-development',
    packageHint: 'Most restaurant sites fit the Business Site package. Ordering with online payment moves it to a Full Custom Build.',
    guide: `A restaurant site earns its keep in three flows: someone reading the menu, someone asking for a table, and someone placing a pickup order. The sections above cover what belongs on the page. This guide goes through how each flow works behind the screen, what to hand me before I start, and what the site costs once it is live.
## How should a reservation request work from tap to table?
A good request takes the guest under a minute and ends with both sides knowing what happens next. The form is the small part. What matters is the chain that follows the submit button.
- The guest picks party size, date and time, then gives a name, phone number and email. Occasion and notes are optional.
- The site checks the request against your rules before accepting it: opening hours, the days you are closed, a largest party size, and how far ahead you take bookings.
- You get an email with everything on one screen, sent to an inbox somebody actually watches during service.
- The guest sees a clear message that this is a request and when they will hear back, and gets the same message by email.
- You confirm, or suggest another time, with one reply.
The detail people skip is the wording. If the screen says "Reservation confirmed" for something nobody has confirmed, you will have a party of six at the door on a night you are full. A request should be called a request until a person or a booking system has said yes.
> Decide who answers reservation requests during service and after closing before the form goes live. A request that sits unanswered until the next afternoon is worse than having no form at all.
## Should I use OpenTable, Resy or Tock, or a form on my own site?
Use a booking platform if you turn tables all night and need live availability, and a request form if you run a smaller room and want to approve each booking yourself. The trade is automation against cost and control.
### A booking platform
A platform knows your floor plan and shows real open times, so the guest gets an instant yes. It also sends reminders, handles cancellations and can hold a card against no-shows. You pay for that, usually as a monthly subscription, and some plans add a fee for each guest who books through the platform's own marketplace. On your site the platform appears as a button or an embedded widget.
### A request form
A form costs nothing per booking and lives on your site, in your design. The price is that somebody has to answer each request. For a room with a dozen tables and a host who already works the phone, that is usually fine.
### What I would avoid
Running both at once. Guests cannot tell which one is real, and double bookings follow. If you already pay for a platform, I link or embed it and leave the form out.
## How does pickup ordering work on my own site?
The guest builds an order from your menu, picks a pickup time, and the kitchen gets a ticket it can act on. There are two levels, and they are different sizes of project.
### An order request
The guest chooses items and a time and sends the order without paying. You receive it by email, confirm it and take payment at the counter. This is the simpler build.
### A cart with online payment
The guest pays by card at checkout, usually through Stripe, which at the time of writing charges 2.9 percent plus 30 cents for a standard online card payment in the US. This version needs more decisions from you:
- Which items can be ordered for pickup, and which options each one has, such as sides, spice level or add-ons.
- How long the kitchen needs, and whether that changes on a Friday night.
- A switch to pause ordering when the kitchen is slammed, and a way to mark an item sold out.
- Sales tax, tips, and how refunds work when something goes wrong.
- Where the order appears in the kitchen: an email, a tablet screen or a printer.
Alcohol to go and the tax treatment of prepared food depend on your licence and on city and state rules, so check those with whoever handles your licensing. Nothing here is legal advice.
New York Nook, a Russian restaurant in Hollywood, is a site I built with the menu, reservation requests and pickup ordering all on the restaurant's own site.
![New York Nook: a Hollywood restaurant site I built with reservation requests and pickup ordering.](/work/fiverr/newyorknook.jpg)
## How do people actually find a restaurant on Google?
Mostly through the map results, not through your website's own ranking. A search like "dinner near me" shows a map with a few listings first, and those listings come from Google Business Profiles. Your site's job is to back the profile up and to catch the searches the profile cannot.
- Matching facts. Name, address, phone and hours on the site should be identical to the profile. Holiday hours need changing in both places.
- Restaurant structured data. This is a block of code that tells Google your cuisine, price range, hours, menu address and whether you take reservations, in a form it does not have to guess at.
- Dish searches. Someone looking for a specific dish in your neighbourhood can land on your menu page, but only if that dish is text on the page.
- The links in your profile. The profile has slots for a menu link, a reservation link and an ordering link. Point them at your own pages, so guests land on your site and not on a third-party listing you did not choose.
## What do I need to have ready before the build starts?
Five things, and the menu is the one that holds projects up.
- The current menu as text. A document or spreadsheet with sections, item names, descriptions and prices. A photo of the printed menu means somebody retypes it, and wrong prices follow.
- Photos. Ten to fifteen strong ones beat fifty average ones: a few dishes, the room, and the outside so people recognise the door.
- Hours, including the kitchen's last order time and any days you close.
- Access. The login for your domain name, your Google Business Profile, and any reservation or ordering platform you already use.
- Decisions. Request or instant booking, order request or paid checkout, and who receives the emails.
Dietary and allergen marks are worth settling now too. If the menu says gluten free or vegan, it has to be accurate, and the kitchen should be the one to mark each item.
## Does a restaurant website need to be accessible?
Yes, and a text menu gets you most of the way there. Restaurants are open to the public, and in the US, complaints about business websites that people with disabilities cannot use are commonly brought under the Americans with Disabilities Act and state laws. The standard usually pointed to is WCAG, the Web Content Accessibility Guidelines.
In practice that means a menu as real text, descriptions on photos, strong colour contrast, forms with proper labels, and a booking or ordering flow that works from a keyboard. A PDF or an image of the menu fails the first of those. I build to these basics by default. This is general information and not legal advice, so ask a lawyer about your specific obligations.
## Which package fits, and what does it cost to run?
Most restaurants land on the Business Site package, and the ordering flow is what moves a project up. My packages are fixed:
- Starter Site, from $150, 7 days. One page with the menu, hours, map and a contact form. It suits a cafe, a food truck or a new opening that needs to be findable this month.
- Business Site, from $450, 14 days. Up to 5 pages, a reservation request or a link to your booking platform, and local SEO setup.
- Full Custom Build, from $1,200, 21 days. Pickup ordering with online payment, an admin page for items and prices, or custom features beyond a standard site.
After launch the running costs are small. Hosting on Vercel is free or close to it for most small business sites, the domain is a yearly fee to your registrar, and a card processor or reservation platform bills you directly. The real cost is attention. Prices, holiday hours and expired specials are what go stale, which is why the menu lives in one editable place.
## The bottom line
A restaurant site is three flows done properly: a menu people can read, a table they can ask for and an order they can place. Settle how reservations and pickup should work for your room, get the menu into text, and the build itself is the quick part.`,
    faqs: [
      { q: 'Can you connect my existing reservation system?', a: 'Yes. If you already use OpenTable, Resy, Tock or similar, I link or embed it. If you do not, a simple request form that emails you works well for smaller rooms.' },
      { q: 'Can I update the menu myself?', a: 'Yes. The menu lives in one editable place, and on larger builds I add a small admin page so you can change items and prices without code.' },
      { q: 'Do you take the food photos?', a: 'I do not shoot photos, but I can work with yours, recommend a photographer, or use a clean typographic layout until new photos are ready.' },
      { q: 'How much does a restaurant website cost?', a: 'A one-page Starter Site starts from $150, a Business Site of up to 5 pages with a reservation form from $450, and a Full Custom Build with online ordering and payment from $1,200.' },
      { q: 'Should reservations be a request form or instant booking?', a: 'Instant booking through a platform suits busy rooms that need live availability. A request form you confirm yourself costs nothing per booking and suits smaller rooms.' },
      { q: 'Can customers pay online for pickup orders?', a: 'Yes. A cart with card payment through Stripe is part of a Full Custom Build, and a simpler order request with payment at the counter fits a smaller package.' },
    ],
  },
  {
    slug: 'therapy-practices',
    name: 'Therapy practices',
    h1: 'Websites for therapy practices and group practices',
    metaTitle: 'Therapy Practice Website Development | Insurance & Therapist Search | Thomas Osayi',
    description: 'Websites for therapy and group practices: therapist profiles, search by insurance and specialty, intake forms and client portals. Built by the developer of Guardian MindCare.',
    intro: 'A person looking for a therapist usually has two questions before anything else: will this person understand what I am dealing with, and do they take my insurance. A practice website that answers both fast turns visits into consultations. I built Guardian MindCare around exactly that.',
    mustHaves: [
      { title: 'Therapist profiles that feel human', text: 'Photo, approach, specialties, populations served and a short personal note. These pages are what clients actually read before reaching out.' },
      { title: 'Search by insurance and specialty', text: 'Filters for insurance plan, issue, language and session format let a client narrow a group practice down to two or three good fits.' },
      { title: 'A short, calm intake flow', text: 'Ask for only what you need to schedule a consultation. Clinical detail belongs in your EHR or intake system, not a website form.' },
      { title: 'Privacy by design', text: 'Minimal data collected on the website, secure handling for anything that is, and clear separation from clinical records.' },
      { title: 'Role-based portals for larger practices', text: 'Supervisors, associates, trainees and admins each see what they need. Guardian MindCare has portals for every role.' },
    ],
    mistakes: [
      'Hiding which insurance plans are accepted until the first phone call',
      'Generic stock photos instead of the actual clinicians',
      'Long intake forms on the website that collect clinical details it should not store',
      'No individual page per therapist, which also costs search visibility',
    ],
    related: ['guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'A solo practice usually fits the Business Site package. Group practices with search, filters or portals are a Full Custom Build or a SaaS project.',
    guide: `Most practice websites are planned from the practice's side: who we are, what we treat, how to reach us. Clients arrive from the other direction, often late at night, often after putting it off for months. What follows is how the important parts work in practice, where the privacy line sits, and when a custom build is and is not the right call.
## How does a client actually choose a therapist online?
In a short sequence: a search, a skim of a few profiles, a check on cost, then one message to the person who felt right. Each step is a place where a practice loses people.
- The search is specific. People type the problem and the place, such as an anxiety therapist in their city, or add a plan name to it.
- The skim happens on profile pages. A client reads the first lines of two or three profiles and looks at the photo. A profile that opens with a list of modalities loses to one that opens with who the therapist helps.
- The cost check comes next. If the site does not say which plans are accepted or what a session costs, many people stop there instead of calling to ask.
- The message is the hardest step for the client. The lower the effort, the more of them send it.
So the page order I build toward is: who this therapist helps, how they work, what it costs or which plans apply, and one calm way to reach out.
## How does search by insurance work behind the page?
Each therapist is a record with a list of the plans they are in network with, and the search page filters those records. The page is simple. Keeping the data true is the real work.
A therapist record usually holds:
- Name, photo, licence type and the states they can see clients in.
- Plans accepted, as a fixed list of options and not free text, so one plan is never spelled two ways.
- Specialties, populations, languages and session format.
- Whether they are taking new clients.
That last field matters more than it looks. A client who finds the right person, reaches out and is told there is a three month wait has been let down by the website. A simple toggle that an admin can flip keeps the search honest.
Wording matters too. A plan listed on a profile tells a client the therapist is in network, but it does not promise what the client will pay. A line asking clients to confirm their benefits, or an offer to check for them, avoids a surprise bill being blamed on the site.
Guardian MindCare, the practice platform I built, leads its homepage with a therapist search by insurance and matches clients with licensed therapists and supervised associates who take their plan.
## Where is the HIPAA line on a practice website?
The careful position is that anything a visitor submits about wanting care can be protected health information, so the website should collect as little of it as possible. HIPAA applies to covered entities, which most practices that bill insurance are, and to the vendors that handle protected information for them, who are expected to sign a business associate agreement.
What that means in general terms for a website:
- A contact form that takes a name, an email and "I am looking for help with depression" is carrying sensitive information. Either the form stays minimal, or it runs on a service that will sign an agreement with the practice.
- Ordinary email is a weak place for clinical detail. A notification that says a new request has arrived, with the detail held somewhere secure, is the safer pattern.
- Advertising pixels and some analytics tools send visitor data to third parties. Federal regulators have published guidance warning healthcare organisations about tracking technologies, so I keep ad pixels off practice sites unless the practice's compliance contact has approved them.
- Scheduling, intake paperwork and messaging belong in the EHR or client portal the practice already uses.
This is general information, not legal advice. Your compliance contact or a healthcare lawyer decides what your practice needs.
## What should the first contact form ask?
Four or five things: a name, how to reach the person, whether a voicemail or text is okay, the kind of help in broad terms, and a preferred time. Anything more belongs in intake paperwork after a consultation is booked.
Three details make the form kinder and safer:
- Offer broad choices such as individual, couples, child or teen, and medication questions, instead of an open box that invites a life story.
- Ask how the person wants to be contacted. Not everyone can safely get a voicemail from a therapy practice.
- Say plainly that the form is not monitored for emergencies, and show the 988 Suicide and Crisis Lifeline, which people in the US can call or text.
> Fill in your own contact form on a phone, with one hand, as if you were nervous about it. Every field you resent is a field a client will too.
## How should pre-licensed clinicians and telehealth be shown?
Clearly and with their status stated, because both are regulated and both affect what a client can book. Group practices often include associates and trainees working under supervision. Many state licensing boards have rules about how pre-licensed clinicians appear in advertising, such as showing their registration status and who supervises them. A profile template with fields for licence type, number and supervisor makes that hard to forget.
Telehealth has a similar catch. In general a therapist can only see clients who are located in a state where the therapist is licensed or otherwise authorised. The search should therefore filter by the client's state, and each profile should say where the therapist can practise. Check both points against your own board's rules, since they differ by state and by profession.
## Should I build a custom site or use my EHR's website and a directory?
Use the simplest thing that fits your size, and move up only when it stops fitting. There are three realistic levels.
### A directory profile and an EHR page
A solo therapist can start with a directory listing and the basic website or booking page that some EHRs include. It is quick and cheap. The limits are that the directory shows your competitors beside you, and the page looks like everyone else's.
### A custom marketing site
This is the step for a practice that wants to be found for its own name and specialties. Profiles, specialty pages, fees and insurance sit on your own domain, and booking hands off to the portal you already use. Nothing clinical lives on the site.
### A custom platform
Portals for clients, therapists, supervisors, trainees and admins make sense only when off-the-shelf tools cannot model how the practice works. Guardian MindCare has five user roles because its supervision structure needed them. If your EHR already covers scheduling, notes and messaging, do not rebuild it.
## What does a practice site cost, and what do I prepare?
A solo practice fits the Business Site package, from $450 in 14 days, which covers up to 5 pages, a contact form and local SEO setup. A group practice with search and filters is a Full Custom Build, from $1,200 in 21 days. A platform with role-based portals is a SaaS project, where the SaaS MVP package starts from $1,200 and a Full SaaS Platform from $3,000.
Before I start, it helps to have:
- A headshot and a short bio in each clinician's own words.
- Licence details, plans accepted, fees and specialties for each person.
- The link to your client portal or booking page.
- Your privacy policy and any notices your compliance contact wants on the site.
## The bottom line
A therapy practice site works when a nervous person can find someone who fits, see what it will cost and reach out in a minute, without the site holding anything clinical. Keep the data on each therapist accurate, keep the form short, and let your EHR do the clinical work.`,
    faqs: [
      { q: 'Is the website HIPAA compliant?', a: 'The safest approach is to keep protected health information out of the marketing site entirely and hand scheduling and intake off to a HIPAA-compliant system you already use. I design the site around that boundary.' },
      { q: 'Can clients filter therapists by insurance?', a: 'Yes. Each therapist record lists the plans they accept, and the search page filters on it, along with specialty and format.' },
      { q: 'Can it connect to my EHR or scheduling tool?', a: 'Usually by linking or embedding the booking widget your EHR provides. Deeper integrations depend on what the vendor allows.' },
      { q: 'How much does a therapy practice website cost?', a: 'A solo practice site fits the Business Site package from $450, and a group practice with therapist search and filters is a Full Custom Build from $1,200.' },
      { q: 'What should a therapy contact form ask for?', a: 'A name, a safe way to reach the person, the broad type of help and a preferred time. Clinical detail belongs in intake paperwork inside your EHR or client portal.' },
      { q: 'Do I need a custom client portal?', a: 'Usually not. If your EHR already handles scheduling, notes and messaging, the website should hand off to it, and custom portals only make sense when your workflow does not fit standard tools.' },
    ],
  },
  {
    slug: 'medical-clinics',
    name: 'Medical clinics',
    h1: 'Websites for medical clinics and health startups',
    metaTitle: 'Medical Clinic & Healthcare Website Developer | Los Angeles | Thomas Osayi',
    description: 'Credible, fast websites for medical clinics, physician groups and health startups. Clear services, provider bios, appointment requests and local SEO.',
    intro: 'Healthcare is a trust purchase. Patients compare clinics on credibility, convenience and whether the office feels organized before they ever call. I have built sites for a physician-led medical group in the South Bay and a health startup putting epinephrine stations in venues, and both came down to the same thing: explain clearly, look credible, make the next step obvious.',
    mustHaves: [
      { title: 'Plain-language service pages', text: 'One page per service that explains what it is, who it is for, what to expect and how to book. These pages also rank for the searches patients make.' },
      { title: 'Provider bios with credentials', text: 'Board certifications, training and a real photo. Credentials are part of the decision.' },
      { title: 'Appointment requests that respect privacy', text: 'Collect contact details and a preferred time, not symptoms or history. Route the rest to your scheduling or EHR system.' },
      { title: 'Local SEO foundations', text: 'Medical clinic structured data, consistent name, address and phone, and location pages that match Google Business Profile.' },
      { title: 'Accessibility', text: 'Readable type, strong contrast and keyboard navigation. Many patients are older or browsing under stress.' },
    ],
    mistakes: [
      'Clinical jargon on service pages that patients do not search for',
      'Contact forms asking for symptoms or medical history',
      'Outdated provider lists and hours that do not match Google',
      'Pages that look like every other template, which reads as less established',
    ],
    related: ['vencare', 'guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'Most clinic sites fit the Business Site or Full Custom Build package depending on the number of services and providers.',
    guide: `A clinic website has two readers at once. One is a patient deciding whether to call. The other is your front desk, who has to deal with whatever the website sends them. A site that looks good and produces vague voicemails and half-filled forms has only done half the job. This guide covers the working parts: how requests should flow, what a clinic can safely say and collect, how local search treats medical practices, and what to prepare.
## How should an appointment request work?
It should give the front desk everything needed to book in one call back, and nothing clinical. There are three ways to take appointments from a website, and most clinics end up using two of them.
### A request form
The patient gives a name, phone, email, whether they are new or existing, the service or provider they want, and two or three preferred times. Staff call back to confirm. This suits clinics where scheduling depends on visit type, insurance checks or provider judgement.
### Online scheduling from your existing system
Many practice management and EHR systems offer a patient scheduling page or widget. I link or embed it, so the calendar stays in one place and the booking is real the moment it is made.
### A link to the patient portal
Existing patients should be sent to the portal for refills, results and messages. A clear "Existing patients" button keeps those requests out of the public contact form.
Whichever you choose, the page needs three plain statements: that the form is not for emergencies and to call 911 for one, how soon the office replies, and what to bring to a first visit.
> Ask your front desk what they have to phone people back to ask. Each answer is either a field the request form is missing or a line the page should already say.
## What can a clinic website collect without creating a privacy problem?
As a general rule, contact details and scheduling preferences are the safe core, and anything about symptoms, conditions or history should go to a system built for it. HIPAA applies to covered entities, which includes most clinics that bill insurance electronically, and to vendors that handle protected health information on their behalf under a business associate agreement.
In general terms, that shapes the site like this:
- Forms stay minimal. A free text box labelled "reason for visit" invites exactly the information a marketing site should not hold.
- If a form must carry health information, it runs on a service that will sign an agreement with the clinic, not on a general form tool.
- Advertising pixels and some analytics tools pass visitor activity to third parties. Federal regulators have published guidance cautioning healthcare organisations about tracking technologies, so those tools need a decision from your compliance contact before they go on the site.
- The Notice of Privacy Practices belongs on the site. Covered entities that run a website about their services are generally expected to post that notice there, and a footer link is the usual place.
This is general information and not legal advice. Your compliance officer or healthcare counsel has the final say.
## What should a clinic be careful about saying?
Anything that promises an outcome, compares you to other clinics without proof, or uses a patient's words or image without written permission. Medical advertising is subject to consumer protection law and to state medical board rules, and those differ by state.
Practical habits that keep a site out of trouble:
- Describe what a service is and who it is for. Avoid guarantees and words like "cure" or "best".
- Get written authorisation before publishing a patient testimonial, photo or before and after image, and keep it on file.
- Be careful when replying to online reviews. A reply that confirms someone is a patient can itself be a privacy problem, so many clinics use a neutral reply that invites the person to call the office.
- State credentials exactly. Board certification should name the board.
- Put a date and a reviewing clinician on health articles, so readers and search engines can see who stands behind them.
I draft structure and plain-language copy, and a clinician signs off on anything clinical. Again, this is general guidance, not legal advice.
## How do patients find a clinic on Google?
Through the map results for "near me" searches, and through service pages for specific problems. The two work differently.
For the map results, Google Business Profile does most of the work. The primary category should match what the clinic actually is, the hours and phone must match the site, and each location needs its own profile and its own page on the site. Google also allows individual practitioners to have their own listings in many cases, which can help or can split your reviews, so decide deliberately.
For specific searches, the service pages earn the visit. A patient does not search for a procedure code. They search for the problem in plain words, often with a city. A page that answers what it is, who it is for, what the visit involves, what it costs or which plans apply, and how to book can rank for that search.
On the technical side I add structured data for the clinic and its physicians, covering name, address, phone, hours, specialties and accepted insurance where you want it shown.
## How should insurance and prices be shown?
Plainly, on its own page, with a date on it. Accepted plans are one of the first things patients look for, and an out of date list creates angry calls. Keep the list in one editable place and say when it was last updated.
Services that patients pay for directly need a different treatment. If something is self-pay, say so before the patient calls, and give a price or a range with what it includes. Pacific Harbor Medical Group, a site I built for physician-led executive physicals in Torrance and the South Bay, is a single-service example: the page has to explain one offering clearly enough that a busy reader can decide to enquire.
![Pacific Harbor Medical Group: a site I built for physician-led executive physicals in Torrance and the South Bay.](/work/phmg.jpg)
## What do I need from the clinic before starting?
A short list, and the provider information is what usually arrives last.
- Each provider's headshot, credentials, training and a short bio.
- The list of services in the words patients use, plus who each one is for.
- Locations, hours, phone numbers and parking or access notes.
- Accepted insurance plans and any self-pay prices.
- Links to the patient portal and online scheduling, if you have them.
- Your Notice of Privacy Practices and any other notices your compliance contact wants posted.
- One person who can approve clinical copy, so drafts do not wait on a committee.
## Which package fits a clinic, and what happens after launch?
A single-location clinic with a handful of services fits the Business Site package, from $450 in 14 days, with up to 5 pages, an appointment request form and local SEO setup. A clinic with many services, several providers or more than one location is a Full Custom Build, from $1,200 in 21 days, which can include an admin page for provider and service updates.
After launch the costs are low. Hosting on Vercel is free or close to it for most small business sites, and the domain is a yearly fee. What needs looking after is accuracy: provider lists, hours and insurance plans change, and the site and Google Business Profile have to change with them.
## The bottom line
A clinic site should make a patient confident enough to book and make the booking easy for your staff to complete. Keep clinical information out of the website, keep claims modest and credentials exact, and keep the facts current. The design matters, but the request flow and the accuracy are what patients and front desks feel.`,
    faqs: [
      { q: 'Do you write the medical copy?', a: 'I write structure and plain-language drafts from your input, and your clinicians approve anything clinical before it goes live.' },
      { q: 'Can you add online booking?', a: 'Yes, by embedding or linking the scheduling tool you already use, or with a simple appointment request form.' },
      { q: 'Will it help us show up on Google Maps?', a: 'The site supports it with location data and structured markup, and I point you to the Google Business Profile steps that matter most.' },
      { q: 'How much does a medical clinic website cost?', a: 'A single-location clinic site fits the Business Site package from $450, and a clinic with many services, providers or locations is a Full Custom Build from $1,200.' },
      { q: 'Should the contact form ask about symptoms?', a: 'No. Ask for contact details, new or existing patient, the service wanted and preferred times, and send clinical questions to your patient portal or scheduling system.' },
      { q: 'Can we post patient testimonials?', a: 'In general a patient testimonial or photo needs the patient\'s written authorisation first, and state rules on medical advertising vary, so check with your compliance contact before publishing any.' },
    ],
  },
  {
    slug: 'salons-and-spas',
    name: 'Salons and spas',
    noun: 'salon or spa',
    h1: 'Websites for salons, spas and beauty studios',
    metaTitle: 'Salon & Spa Website Design with Online Booking | Thomas Osayi',
    description: 'Beautiful websites for salons, spas, waxing and lash studios with service menus, packages and online booking. Built in Next.js, fast on phones.',
    intro: 'Beauty clients book on impulse and on their phones, often late at night. If your site makes them call during business hours, they book somewhere else. A studio site should show the services, show the prices, look like your space and take the booking right there.',
    mustHaves: [
      { title: 'Service menu with prices and duration', text: 'Clear prices remove the main reason people hesitate. Grouped by category, with add-ons and packages.' },
      { title: 'Online booking', text: 'Embedded from the system you already use (Square, Vagaro, Boulevard, Fresha and others) or a simple request flow.' },
      { title: 'Packages and memberships', text: 'Bundles and memberships raise the value of each client. They deserve their own section, not a footnote.' },
      { title: 'A look that matches your space', text: 'Soft, premium and specific to your brand, not a stock beauty template.' },
      { title: 'Prep and aftercare pages', text: 'Useful for clients, cuts down on repeat questions, and brings in search traffic.' },
    ],
    mistakes: [
      'Prices only available by calling or messaging',
      'Booking that opens a slow third-party page with no branding',
      'Instagram embeds that slow the page to a crawl',
      'No information for first-time clients about what to expect',
    ],
    related: ['astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'Most studios fit the Starter Site or Business Site package.',
    guide: `The hard part of a studio website is not making it pretty. It is the booking: which system holds the calendar, how it appears on the site, what happens with deposits and no-shows, and how a client who found you on Instagram at midnight gets from a photo to a confirmed appointment. Here is how those pieces fit together.
## What does a good booking flow look like from first tap to confirmation?
Five steps, with no account required until the end. Every extra screen between "Book now" and a confirmed time loses some of the people who started.
- Pick a service. Grouped by category, with price and duration showing, so the client does not have to open each one.
- Pick add-ons, if any. Offer them here, once, and never as a pop-up.
- Pick a provider, or "first available". Regulars want their person. New clients mostly want the soonest slot.
- Pick a time. Show the next few days with open slots first, not an empty calendar month.
- Enter details. Name, phone, email, and a card only if your policy needs one.
Then comes a confirmation screen, and a confirmation by text or email within a minute. The reminders that follow, usually a day before, are sent by the booking system and are the cheapest thing you can do about no-shows.
The button that starts this should be on every page and should stay in reach on a phone. A client reading the aftercare page at the bottom of the site should not have to scroll up to book.
## Should booking be embedded, linked or built into the site?
Embed or link the booking system you already use, and build a custom flow only if you have none. Your booking system is where the calendar, the client list and the reminders live, and a second calendar on the website is how double bookings happen.
### Linking out
A button opens your booking page on the provider's site. It is the most reliable option and takes minutes to set up. The cost is a visible jump to a page that looks different from yours, so I style the hand-off carefully and tell the client what is about to open.
### Embedding
The booking widget sits inside your page. It feels more like one site, but widgets vary a lot: some are fast and adjust to a phone screen, and some load slowly or show a tiny scrolling box. I test the widget on a real phone before committing to it, and fall back to a link if it is poor.
### A request form
For a solo provider with no booking software, a short form that asks for the service and a few preferred times works. You confirm by text. It is free, but it puts you back in a message thread for every booking, so most studios outgrow it.
Astiglow, a waxing studio site I built, lists services, prices and packages and lets clients book online without calling.
## How should deposits, cancellations and no-shows be handled?
Decide the policy first, write it in two sentences, and show it before the client confirms. The tools for this live in the booking system, not in the website, but the website is where the policy has to be readable.
The usual options are:
- A card on file, charged only for a late cancellation or a no-show.
- A deposit taken at booking and applied to the service.
- Full prepayment for long or high-value appointments.
- No card at all for short services, with reminders doing the work.
Whichever you choose, the wording should say how many hours of notice you need, what is charged if it is missed, and what happens if the client is late. Put it on the booking step and on a policies page, in plain words. A policy the client never saw is hard to enforce and easy to dispute with the card company.
> Book an appointment with yourself on your phone before launch, then cancel it. You will see exactly which texts and emails a client gets, and whether your policy shows up anywhere along the way.
## How do beauty clients find a studio?
Two ways: a search with a place in it, and a link from social media. The site has to serve both.
### Search
Someone types the service and the area, such as a brazilian wax or lash lift near them. The map results come from Google Business Profiles, so yours should have the right category, current hours and a booking link pointing at your own site. On the site, each main service deserves its own page or clearly headed section with the price, how long it takes, how to prepare and what aftercare looks like. That is the text those searches match. Structured data for a beauty salon tells Google the address, hours and price range directly.
### Social
A client taps the link in your profile after seeing your work. That link should land on a page that loads fast and shows the booking button and prices straight away. A slow homepage with a video background loses the booking that the photo just earned.
## What about gift cards, packages and memberships?
Sell them through your booking system where you can, because that is where the balance gets redeemed. A package of six sessions sold through a separate checkout on the website has to be tracked by hand at the front desk, and that goes wrong.
What the website does is sell the idea: a section that explains each package, what it saves, and who it is for, with a button into the right purchase page. Memberships need the terms in plain view, including how billing recurs and how to cancel.
Gift cards and recurring memberships are regulated. In the US there are federal and state rules about gift card expiry and fees, and some states have rules about automatic renewals. The built-in tools in established booking systems are designed with those in mind, which is one more reason to use them. This is general information and not legal advice.
## Are there rules about what a studio or med spa can claim?
Yes, and they tighten as services become more medical. Hair, nails, waxing and lashes are licensed at the state level, and a site should describe services the way your licence does. Studios that offer injectables, lasers or other medical treatments are in different territory, where who performs and supervises the treatment, and how results are advertised, are regulated by state medical and nursing boards.
Safe habits for any studio site: use your own before and after photos with the client's permission, avoid promising results, and list patch test or consultation requirements where they apply. Check the details with your state board, because they vary and I am not giving legal advice.
## Which package fits, and what do I need from you?
A solo provider or a small studio fits the Starter Site, from $150 in 7 days: one polished page with services, prices, a booking button and a contact form. A studio with several service categories, packages, and prep and aftercare pages fits the Business Site, from $450 in 14 days, with up to 5 pages and local SEO setup. Custom features such as an admin page for prices move it to a Full Custom Build, from $1,200 in 21 days.
To start, I need the service list with prices and durations, your booking link, your policies, ten or so of your best photos, and your logo and colours if you have them. After launch, hosting is free or close to it for most small business sites, and your booking system bills you separately.
## The bottom line
A studio site should get a client from a photo to a confirmed time in about a minute. Keep one calendar, show prices and policies before anyone has to ask, and make the booking button impossible to miss on a phone.`,
    faqs: [
      { q: 'Can you use my current booking software?', a: 'Yes. I embed or link it so clients book without leaving the experience you designed.' },
      { q: 'Can I change prices myself?', a: 'Yes. Services and prices live in one editable place.' },
      { q: 'Can you show my Instagram work?', a: 'Yes, as a fast gallery of selected photos instead of a heavy live feed.' },
      { q: 'How much does a salon or spa website cost?', a: 'A one-page Starter Site starts from $150 and a Business Site of up to 5 pages with booking and local SEO setup starts from $450.' },
      { q: 'Should I take deposits for bookings?', a: 'A card on file or a deposit cuts no-shows for longer appointments, and it is set up inside your booking system. The website shows the policy in plain words before the client confirms.' },
      { q: 'Can I sell gift cards and packages on the site?', a: 'Yes. The site presents them and links to the purchase page in your booking system, so balances are tracked where they are redeemed.' },
    ],
  },
  {
    slug: 'startups',
    name: 'Startups',
    h1: 'Websites and MVPs for early-stage startups',
    metaTitle: 'Startup Website & MVP Developer | Next.js | Thomas Osayi',
    description: 'Landing pages, marketing sites and MVPs for early-stage startups. Built fast in Next.js by a developer who founded his own SaaS.',
    intro: 'Early-stage startups need two things from a website: explain a new idea in seconds, and prove it is real enough to take a meeting. Later they need the product itself. I founded SQWAD and built it end to end, so I build startup sites and MVPs with the same priorities a founder has: speed, clarity and not wasting runway.',
    mustHaves: [
      { title: 'A one-line explanation above the fold', text: 'If an investor or customer cannot repeat what you do after five seconds, the rest of the page does not matter.' },
      { title: 'Proof', text: 'Traction, pilots, logos, a demo video or a product screenshot. Whatever is true and strongest right now.' },
      { title: 'One clear call to action', text: 'Join the waitlist, book a demo or start a trial. One primary action per stage.' },
      { title: 'Analytics from day one', text: 'You need to know which messages convert before you spend on ads.' },
      { title: 'A path to the product', text: 'Built on the same stack as your app, so the marketing site and MVP can share auth, design and code.' },
    ],
    mistakes: [
      'Vague taglines that could describe any company',
      'Building a full platform before validating the core workflow',
      'Paying for a marketing site and an app on two stacks that never connect',
      'No analytics, so nobody knows what is working',
    ],
    related: ['sqwad', 'vencare', 'thehoopgang'],
    service: 'saas-mvp-development',
    packageHint: 'Landing pages fit the Starter or Business Site package. Product builds start with the MVP Starter or SaaS MVP package.',
    guide: `Founders usually come to me with one of two requests: "we need a site before we start outreach" or "we need the product built". The right answer depends on what you have proven so far, and getting the order wrong is the most expensive mistake available at this stage. This guide is about sequencing, about what each build actually involves, and about when to hold off on hiring anyone.
## Should a startup build the landing page or the product first?
Build whichever one answers your riskiest open question. If you do not yet know whether anyone wants the thing, the question is demand, and a landing page with one call to action answers it in a week. If people are already asking to use it, the question is whether the product delivers, and that needs a working version.
A rough guide by stage:
- Idea, no conversations yet. Talk to prospective customers first. Build nothing.
- Conversations going well, nothing to show. A landing page that states the offer and collects sign-ups or demo requests.
- People have said they would pay. A first version of the one workflow they would pay for.
- Pilot users are active. Billing, roles, admin tools and the rest.
VenCare, a health startup I built a site for, shows the landing page job well: a new kind of product that venue operators and investors have to understand in seconds, with a venue inquiry as the single action.
## How does a waitlist or demo request flow work end to end?
A form is the visible part, and four things behind it decide whether a sign-up turns into a conversation. I build these as one flow so nothing is left to check by hand.
- Storage. Each sign-up is saved to a database or sent to your email tool, with the time and the page it came from. An email notification on its own gets lost.
- Source tracking. Links you share carry tags that say where a visitor came from, and the form saves them with the sign-up. Two weeks later you can see which post or channel brought the people who converted.
- A confirmation. The visitor sees what happens next and gets an email saying the same. For a demo request, the fastest path is to drop them straight into a scheduling page.
- A notification to you, at once, somewhere you will see it.
One technical point catches new companies out. Email sent from a brand new domain often lands in spam unless the domain is set up to authorise the sending service, through DNS records called SPF and DKIM. I set those up with the form, because a confirmation email nobody receives is the same as none.
> Add one optional question to the waitlist form: "What are you using for this today?" The answers are free customer research and tell you which competitor or spreadsheet you are replacing.
## What should a startup measure from day one?
Three numbers: how many people arrive, how many start the main action, and how many finish it, each split by where they came from. Page views alone tell you very little.
In practice that means recording a small set of events:
- A click on the primary call to action.
- A form started and a form submitted.
- For a product, account created and the first time a user completes the core workflow.
Tools vary by need. A privacy-focused page analytics tool is enough for a landing page. A product needs event analytics that can follow one user through a funnel. I wire up whichever you choose and name the events consistently, so the data is usable later.
If you expect visitors from Europe or other places with consent rules, analytics and advertising cookies may need consent before they load. That is general information, not legal advice, and it is easier to design in at the start than to bolt on.
## What belongs in an MVP and what does not?
One workflow that a customer would pay for, working end to end with real data. Everything else is a candidate for later or for doing by hand.
The first version of SQWAD, my own SaaS, did one thing: it let a brand see which creator drove a sale. Applications, shipping, competitions and payouts were added around that core afterwards, one workflow at a time. That core came out of client work. I had built a creator portal for TheHoopGang, a basketball streetwear brand, and saw both how repeatable the workflow was and the one question a spreadsheet could not answer.
![The creator dashboard in TheHoopGang portal: status, videos posted, the chosen product and a journey timeline from application to completed content.](/images/hoopgang/creator-dashboard.png)
Things that can usually wait:
- Self-serve billing. Early customers can be invoiced by hand.
- Team accounts and fine-grained roles, unless the product is about teams.
- Settings pages. Sensible defaults go further than you expect.
- An admin panel. A database console covers the first handful of customers.
- Integrations beyond the one your workflow depends on.
Things that cannot wait: sign-in that is secure, each customer's data kept separate from every other customer's, and backups. Those are cheap on day one and painful to add later.
## Which package fits which stage?
The site packages cover the story, and the MVP packages cover the product. All are fixed price.
### For the website
- Starter Site, from $150, 7 days. One page with the offer, proof and a waitlist or contact form.
- Business Site, from $450, 14 days. Up to 5 pages, for a company that needs product, pricing and about pages along with a demo request form.
### For the product
- MVP Starter, from $250, 7 days. A clickable, working first version of one core workflow. It is for putting something real in front of pilot users.
- SaaS MVP, from $1,200, 21 days. Auth, dashboard, database and payments for a launchable product.
- Full SaaS Platform, from $3,000, 45 days. A multi-role platform with admin tools and integrations.
Because the site and the product are both built in Next.js, the landing page can become the front door of the app later instead of being replaced.
## What do I need from a founder to start?
Less than most founders expect, but it has to be specific.
- The one sentence that says what the product does and for whom.
- The core workflow written as steps a user takes, in your own words. A page is enough.
- Three to five people who will try the first version and tell you the truth.
- Whatever proof exists today: pilots, numbers, a quote you have permission to use.
- Accounts in your name for the domain, GitHub and hosting, so you own everything from the first commit.
- A logo and colours if you have them. If not, I pick a clean direction and move on.
What I do not need is a long specification. A forty page document usually hides the fact that the core workflow has not been chosen.
## When should a startup not hire a developer yet?
When the open question is still whether anybody wants the product. Code does not answer that question, and conversations do.
Reasonable ways to wait:
- Run the service by hand for the first few customers, with a form and a spreadsheet behind it.
- Use a no-code tool or an AI app builder to make a prototype you can show. It will not be production ready, but it does not have to be yet.
- Put up a simple landing page and see whether strangers sign up.
If a prototype from an AI builder starts getting real use, that is the moment to bring in a developer, either to fix and launch what exists or to rebuild the core properly. I do both.
## The bottom line
Match the build to the question you need answered. A landing page tests demand, a one-workflow MVP tests the product, and a full platform is for when customers are already waiting. Building them in that order, on one stack, is how a small budget lasts.`,
    faqs: [
      { q: 'Can you build both the site and the MVP?', a: 'Yes, on one Next.js stack, which keeps the design consistent and lets them share code and auth.' },
      { q: 'How fast can a landing page go live?', a: 'A focused landing page can be live within a week once the copy and offer are clear.' },
      { q: 'Do you work for equity?', a: 'My projects are paid. I am happy to talk through scope so it fits the budget you have now.' },
      { q: 'How much does a startup MVP cost?', a: 'A working first version of one core workflow starts from $250, a launchable SaaS MVP with auth, dashboard, database and payments from $1,200, and a full multi-role platform from $3,000.' },
      { q: 'Should I build a landing page or an MVP first?', a: 'Build a landing page first if you still need to prove demand, and an MVP first if people are already asking to use the product.' },
      { q: 'Who owns the code and accounts?', a: 'You do. The code lives in your GitHub and the site or app runs in your own hosting and cloud accounts.' },
    ],
  },
  {
    slug: 'local-service-businesses',
    name: 'Local service businesses',
    noun: 'business',
    h1: 'Websites for local service businesses',
    metaTitle: 'Website Developer for Local Service Businesses | Quotes, Booking, Local SEO',
    description: 'Websites for printers, contractors, field service teams and other local businesses: quote requests, scheduling tools and local SEO, built in Next.js.',
    intro: 'For printers, contractors, cleaners and other service businesses, a website has one job: turn a search into a qualified request. That means showing up locally, making the work look trustworthy and collecting the details you need to quote without three rounds of email.',
    mustHaves: [
      { title: 'Structured quote requests', text: 'Ask for the specs that matter for your work (sizes, quantities, addresses, photos) so every request arrives ready to price.' },
      { title: 'Service area pages', text: 'Honest pages for the areas you actually serve help you show up for local searches.' },
      { title: 'Proof of work', text: 'Project photos, before and after, and the kinds of clients you serve.' },
      { title: 'Fast contact on mobile', text: 'Tap to call, tap for directions, and a short form, all reachable with a thumb.' },
      { title: 'Internal tools when you are ready', text: 'Quote management, job scheduling and calendar sync can grow out of the same site.' },
    ],
    mistakes: [
      'A generic contact form that leads to back-and-forth before any quote',
      'No mention of the cities or neighborhoods served',
      'Stock photos instead of real jobs',
      'Phone number buried in the footer on mobile',
    ],
    related: ['artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'Most service businesses fit the Business Site package. Quote management or scheduling tools are a Full Custom Build.',
    guide: `A service business rarely loses work because its website is ugly. It loses work because the request that came in was too vague to price, sat in an inbox over a weekend, or never arrived because the customer could not find the business on a map. This guide follows a job from the search that starts it to the calendar entry that ends it, and marks where a website helps at each step.
## What should happen after someone presses submit on a quote form?
The request should become a record that somebody owns, not an email that somebody might read. That is the difference between a form and a system, and it takes surprisingly little to get there.
A sound flow has six parts:
- Validation. Required fields are checked in the browser and again on the server, so a broken or bypassed form cannot send an empty request.
- Files. Photos, artwork or plans upload to storage and are attached to the request, with limits on size and type.
- A record. The request is saved to a database with a status, starting at new.
- A notification. The right person gets an email or text with the summary and a link to the full record.
- A confirmation. The customer sees what happens next and roughly when, and gets it by email too.
- A status trail. New, quoted, won or lost. Even that short list tells you at the end of the month how many requests turned into jobs.
Spam needs handling as well. A public form attracts bots within days. A hidden field that only bots fill in, a limit on submissions per visitor and an invisible challenge keep most of it out without making real customers solve puzzles.
For Artistic Printing, a commercial printer in Los Angeles, I built the site together with a quote intake and management tool, so requests arrive with the specs needed to price them and sit in one list instead of across inboxes.
## Which questions belong on the form for my trade?
The ones your estimator asks on every first call, and no others. The list differs a lot by trade, which is why a generic contact form fails everybody.
- A printer needs the type of piece, quantity, size, paper or material, colour, a deadline and the artwork file.
- A contractor or remodeler needs the address, the type of project, rough dimensions, photos, whether the customer owns the property, and a time frame.
- A cleaning or maintenance service needs the address, the size of the space, how often, access details and preferred days.
- A repair or field service needs the address, what the equipment is, the symptom in the customer's words, and a photo of the unit or its label.
Two techniques keep a longer form easy. First, show questions only when they apply, so choosing "banner" reveals size and material and hides paper weight. Second, split the form into two or three short steps with contact details last, because someone who has described their job is unlikely to abandon it at the name field.
> Give the form an "I am not sure" option on technical questions. A customer who does not know their paper weight or panel size will otherwise guess wrong or leave.
## How does local search work for a business that travels to customers?
Google treats you as a service-area business, and your Google Business Profile matters more than your website for map results. The site supports the profile and wins the searches that include a specific service or town.
What to get right on the profile: the primary category, the list of services, real photos of jobs, and your service area. A business that works at customers' locations can hide its street address and list the areas it covers instead. Reviews that mention the type of job and the town help more than any site change I can make.
What the site adds:
- A page for each main service, written around what a customer would type.
- Pages for the areas you serve, each with something true and specific on it: jobs done there, travel fees, local requirements. Near-identical pages with only the city name changed are treated as low quality and are not worth building.
- Local business structured data with your name, phone, hours and the areas served, matching the profile exactly.
- Speed. Many of these searches happen on a phone, at the moment something has broken.
## Do I need to show my licence and insurance?
In many trades, yes, and customers look for it even where it is not required. Many states require licensed contractors to include their licence number in advertising, and a website counts as advertising. California is one example. Other trades have their own boards and rules.
Good practice for any licensed trade is to put the licence number in the footer of every page, state the type of licence, and say that you are bonded and insured only if you are. Guarantees and warranty terms should match what your paperwork actually says. This is general information and not legal advice, so confirm the requirements with your licensing board.
## Should I rely on lead platforms or my own site?
Use both if the numbers work, but treat the platforms as rented and the site as owned. Marketplaces and directories that sell leads or advertising can bring work quickly. The trade-offs are that you pay for each lead or click, the same lead is often sold to several businesses, and the customer relationship starts on someone else's page.
Your own site and Google Business Profile are slower to build up and cost nothing per request once they rank. A request that comes through your own form also arrives with your questions answered, which a platform's generic message does not.
## When is it worth adding internal tools?
When the same information is being typed twice, or when jobs are slipping because the schedule lives in one person's head. Internal tools grow naturally out of the quote form, because the request record already holds the customer, the address and the job.
The usual next steps are a quote list with statuses, then scheduling, then calendar sync. FieldOps is a job scheduling app I built for field teams, with Outlook Calendar sync.
![FieldOps: a job scheduling app I built for field teams, with Outlook Calendar sync.](/work/fieldops.jpg)
In general terms, calendar sync works by each staff member granting the app permission to their calendar once, after which the app creates, updates and removes events as jobs change.
Custom is not always the answer. If an established field service product already fits how you quote, dispatch and invoice, it will be cheaper than building. A custom tool earns its place when your process is unusual enough that the standard products force workarounds.
## Which package fits, and what do I prepare?
A website with a structured quote form and local SEO setup fits the Business Site package, from $450 in 14 days, with up to 5 pages. A one-page site for a new business fits the Starter Site, from $150 in 7 days. Quote management, scheduling or other internal tools make it a Full Custom Build, from $1,200 in 21 days.
What to have ready:
- The questions you ask on every first call.
- Photos of real jobs, with before and after pairs where you have them.
- The towns and neighbourhoods you actually serve.
- Licence and insurance details.
- Who receives requests, and who covers when that person is away.
After launch, hosting is free or close to it for most small business sites. The ongoing work is adding new job photos and asking happy customers for reviews.
## The bottom line
A service business site should produce requests you can price on the first read and make sure none of them get lost. Build the form around your estimator's questions, keep the profile and the site telling the same story, and add internal tools only when the paperwork starts costing you jobs.`,
    faqs: [
      { q: 'Can the quote form handle file uploads?', a: 'Yes. Artwork, photos and plans can be attached and delivered with the request.' },
      { q: 'Can you build internal tools too?', a: 'Yes. I have built quote management for a commercial printer and job scheduling with Outlook Calendar sync for field teams.' },
      { q: 'Will the site help me rank locally?', a: 'It covers the on-site side: speed, local business data and service area pages. Reviews and your Google Business Profile do the rest, and I will show you what to focus on.' },
      { q: 'How much does a website for a service business cost?', a: 'A Business Site with a structured quote form and local SEO setup starts from $450, and a build with quote management or scheduling tools is a Full Custom Build from $1,200.' },
      { q: 'What should a quote request form ask?', a: 'The questions your estimator asks on every first call, such as the type of job, size or quantity, address, deadline and photos. Contact details go last and technical questions get an "I am not sure" option.' },
      { q: 'Do I need a page for every city I serve?', a: 'Only where you have something true and specific to say about working there. Pages that just swap the city name are treated as low quality and do not help.' },
    ],
  },
];

export const industries: Industry[] = [...baseIndustries, ...moreIndustries, ...industriesBatch2];

export interface ToolFix {
  slug: string;
  tool: string;
  h1: string;
  metaTitle: string;
  description: string;
  whatItBuilds: string;
  problems: { title: string; text: string }[];
  process: string[];
  // long-form section in the article body format (see src/data/seo.ts)
  guide?: string;
  faqs: Faq[];
}

const baseToolFixes: ToolFix[] = [
  {
    slug: 'lovable',
    tool: 'Lovable',
    h1: 'Fix and launch your Lovable app',
    metaTitle: 'Lovable Developer: Fix, Finish & Deploy Your Lovable App | Thomas Osayi',
    description: 'Stuck on a Lovable app? I fix Supabase auth and RLS, Stripe payments, broken builds and deployment so your app is ready for real users.',
    whatItBuilds: 'Lovable generates React apps built with Vite, TypeScript, Tailwind and shadcn/ui, usually backed by Supabase for auth, database and edge functions, with code you can sync to GitHub.',
    problems: [
      { title: 'Supabase row level security left open or broken', text: 'Either every user can read every row, or policies are so strict nothing loads. I write policies that tie each row to its owner and test them as different users.' },
      { title: 'Auth works in preview but not on your domain', text: 'Redirect and site URLs still point at the preview. Email confirmation and OAuth break until they match production.' },
      { title: 'Stripe payments that never update the app', text: 'Checkout succeeds but the user never gets access, because the webhook is missing, unverified or not deployed as an edge function.' },
      { title: 'The prompt loop', text: 'Each fix breaks something else and credits disappear. At that point the faster path is a developer reading the code directly.' },
      { title: 'Poor SEO on a client-rendered app', text: 'Marketing pages rendered only in the browser are harder for search engines to read. I move public pages to server-rendered or prerendered HTML when it matters.' },
    ],
    process: ['Get access to the GitHub repo and Supabase project', 'Reproduce the issues and list everything broken', 'Fix security first, then payments, then everything else', 'Deploy to your domain and test real user flows', 'Hand over a short write-up of what changed'],
    guide: `## What is actually inside a Lovable project?
A Lovable project is two separate things: a React app that runs entirely in the visitor's browser, and a Supabase project that holds the data, the logins and any server code. Knowing which half a problem lives in saves most of the debugging time.
The frontend is a Vite single-page app written in TypeScript, styled with Tailwind and shadcn/ui components, with pages handled by a client-side router. There is no server of your own in that half. Everything in it, including any key you put there, is downloaded by every visitor.
The backend half is Supabase:
- Postgres tables, protected by row level security policies
- Supabase Auth for sign-up, login, password resets and OAuth
- Storage buckets for uploads, with their own policies
- Edge functions, small server-side functions that run on Deno, for anything that needs a secret key
Newer projects may use Lovable's built-in cloud backend instead of a Supabase project you created yourself. The checks below still apply, but confirm early how you get to the database and its settings, because that decides how a fix or a move is done.
So a blank dashboard is usually a database policy, a login that bounces is usually an auth setting, and a payment that goes nowhere is usually an edge function.
## Why does my data load for me but not for my users?
Because row level security decides per row who may read it, and when it says no, Supabase returns an empty list and no error. The app looks broken, but the console shows nothing.
The symptoms tell you which side is wrong:
- A list is empty for a new user but full for you. The read policy does not match that user, or you were checking with a role that bypasses policies.
- Saving fails with "new row violates row-level security policy for table". There is no insert policy, or the row is being saved without the user's ID in the owner column.
- Everything loads for everyone, including logged-out visitors. RLS is switched off on that table, or a policy uses true as its condition.
- Uploads fail while table writes work. Storage buckets have separate policies, and they were never written.
The fix is a policy per action (select, insert, update, delete) on every table, each comparing the row's owner column to auth.uid(). Tables that hold shared data, like a team's projects, need a policy that checks membership and not ownership. Then I test with two real accounts in two browsers, because the SQL editor in the Supabase dashboard runs with full rights and proves nothing.
> The anon key in your frontend is meant to be public. The service role key is not: it skips every policy. If it appears anywhere in the React code, rotate it in Supabase the same day.

## Why does Stripe say paid while my app says free?
Because the message from Stripe to your app, the webhook, never arrives or is rejected on arrival. In a Lovable project the receiving end is a Supabase edge function, and that setup has three specific traps.
### The function rejects Stripe with a 401
Edge functions expect a Supabase login token by default. Stripe does not send one, so each delivery fails with a 401 before your code runs. The Stripe dashboard shows the failed attempts under the webhook endpoint. The function has to be set not to require a JWT, and then verify Stripe's signature itself.
### The signature check fails
Stripe signs the exact bytes it sent. If the function reads the request as JSON first, the signature no longer matches. It must read the raw text of the body, and on Deno it has to use the asynchronous version of Stripe's verification call.
### The secrets are in the wrong place
The Stripe secret key and the webhook signing secret belong in the edge function secrets in Supabase, not in the frontend's environment. Test mode and live mode each have their own pair, and the live endpoint has to be registered separately.
Once the event arrives, the function writes the plan to the user's row with the service role key, and the app reads access from that row. Nothing in the browser should be able to change it, which means the policy on that table must not let users update their own plan column.

## How does the GitHub sync work, and can the code be edited outside Lovable?
Yes, because the sync runs both ways: Lovable pushes its changes to your repository, and commits pushed to the main branch show up back in Lovable. That is what lets a developer fix things directly while you keep prompting.
A few habits keep it from turning into a mess:
- Connect GitHub before any outside work starts, and make sure the repository is under your own account or organization.
- Do not prompt in Lovable while a fix is in progress. Two sets of edits to the same files is how work gets overwritten.
- Keep database changes as migration files in the repository, not as one-off edits in the dashboard, so the schema can be rebuilt.
- After a fix, tell Lovable what changed in your next prompt, for example that billing now lives in a webhook function, so it does not rebuild the old version.
It also helps to add a short note to the project's knowledge settings describing the rules the app now follows: where access is checked, which tables are sensitive, and what must not be touched.

## Should I stay on Lovable hosting or move the app?
For most apps, publishing from Lovable to your own domain is enough, and moving is only worth it for a specific reason.
Reasons that justify moving the frontend to Vercel or Netlify:
- You want preview deployments for every change before it reaches users.
- Search traffic matters and the public pages need to be prerendered or rebuilt in Next.js.
- You want the hosting account, logs and domain under one roof you control.
If you do move, two things break that worked before. First, opening or refreshing any page other than the home page returns a 404, because the host looks for a file that does not exist. A single-page app needs a rewrite rule that sends every path to index.html. Second, the Supabase values have to be set on the new host with the VITE_ prefix and the build rerun, because Vite bakes them in at build time.
In either case the Supabase side needs updating: Site URL and Redirect URLs under Authentication must list the final domain, and each OAuth provider needs the new callback address. A confirmation email that sends people to localhost:3000 means that step was skipped.

## What should I have ready before a developer looks at it?
Access and a clear list of what is wrong. Putting it together is quick, and it saves days of back and forth.
- GitHub access to the synced repository
- An invitation to the Supabase project, or to the Lovable workspace if the backend is managed there
- Stripe access if payments are involved, as a team member and not through your own login
- The domain registrar login, or someone who can add DNS records
- Two test accounts and the steps that reproduce each problem
- A sentence on what each kind of user should and should not be able to see
That last item matters most. Policies can only be written correctly when the rule is known, and that rule is a product decision, not a technical one.

## Which package fits a Lovable app?
One isolated problem fits the Quick Fix, a few connected problems fit Fix Plus Features, and an app that has never run on its own domain with real payments fits Finish and Launch.
- Quick Fix, from $60, 2 days: one error, such as a login redirect that points at the preview or a single table that will not save.
- Fix Plus Features, from $200, 5 days: for example policies across all tables plus a working Stripe webhook.
- Finish and Launch, from $600, 10 days: security review, payments, domain, auth settings, error states and a tested production launch.
After launch the running costs are paid directly to the providers, on accounts in your name: the Lovable plan while you keep building, Supabase, the domain, and Stripe's fee per payment.

## The bottom line
A Lovable app that stalls before launch is rarely a bad app. The frontend is usually fine, and the trouble sits in Supabase policies, auth URLs and the webhook function, all of which can be read, fixed and tested directly. Keep the GitHub sync on, keep secrets in edge function secrets, and test as two different users before anyone else does.`,
    faqs: [
      { q: 'Can I keep using Lovable after you fix it?', a: 'Yes. Changes go through GitHub, so Lovable stays in sync and you can keep prompting afterwards.' },
      { q: 'Do I need to move off Supabase?', a: 'No. Supabase is a solid backend. Most problems come from configuration, not the platform.' },
      { q: 'How fast can you start?', a: 'Usually within a day or two. Small fixes are often done in 48 hours.' },
      { q: 'Why do I get a 404 when I refresh a page of my Lovable app?', a: 'The app is a single-page app, so a host other than Lovable needs a rewrite rule that sends every path to index.html. Adding that rule fixes direct links and refreshes.' },
      { q: 'Is it safe that my Supabase key is visible in the code?', a: 'The anon key is designed to be public and is safe as long as row level security is on for every table. The service role key must never appear in frontend code.' },
      { q: 'What does it cost to fix a Lovable app?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
    ],
  },
  {
    slug: 'bolt',
    tool: 'Bolt',
    h1: 'Fix and deploy your Bolt.new app',
    metaTitle: 'Bolt.new Developer: Fix & Deploy Your Bolt App | Thomas Osayi',
    description: 'Your Bolt.new app runs in the browser preview but breaks on deploy? I fix build errors, environment variables, Supabase and Stripe, then ship it to production.',
    whatItBuilds: 'Bolt.new from StackBlitz builds and runs full-stack JavaScript apps inside the browser, commonly React with Vite or Next.js, often with Supabase, and deploys through providers like Netlify.',
    problems: [
      { title: 'Works in the preview, fails on deploy', text: 'The in-browser environment is forgiving. Production builds catch type errors, missing dependencies and server code that never ran outside the preview.' },
      { title: 'Environment variables and secrets', text: 'Keys pasted into code or missing from the host. I move every secret into the host settings and keep private keys off the client.' },
      { title: 'The project got too big for the AI', text: 'Past a certain size, edits start breaking unrelated files. Splitting the code into clear modules makes it workable again for you and for the AI.' },
      { title: 'Backend wiring', text: 'Auth, database tables and policies, file storage and payments that were stubbed or half connected.' },
      { title: 'Moving it to your own repo and domain', text: 'Exporting to GitHub, setting up a proper deploy pipeline and connecting your domain.' },
    ],
    process: ['Export the project to GitHub', 'Run a real production build and fix every error', 'Wire up and secure the backend', 'Deploy to Vercel or Netlify on your domain', 'Write up what changed and how to keep going'],
    guide: `## Why does my Bolt app work in the preview and break when deployed?
Because the preview is a development server running inside your browser tab, and a deployment is a production build running on someone else's machine. They are different programs with different rules.
Bolt runs your project in a WebContainer, a version of Node that lives in the browser. In the preview, the dev server compiles each file only when it is opened, skips type checking and keeps going when something is slightly wrong. A production build compiles everything at once and stops at the first failure. So code on a page you never opened in the preview can fail the whole deploy.
Three more differences cause most of the surprises:
- Environment values. The preview reads them from the project's env file. The host only knows what you typed into its settings.
- Dependencies. The host installs packages fresh. Version conflicts that the preview tolerated can stop the install.
- Server code. Anything that depended on the in-browser environment, such as a local file used as a database, has nowhere to run on a static host.

## What do the common deploy errors mean?
Each one points at a specific cause, and reading the first error in the build log, not the last, is the fastest way to find it.
### Build script returned non-zero exit code
This is the host telling you the build command failed. It is not the error itself. Scroll up to the first red line. It is usually a TypeScript error, such as a property that does not exist on a type, or an import that could not be resolved because a file was renamed or a package is not installed.
### ERESOLVE unable to resolve dependency tree
Two packages want different versions of the same dependency, often React. The fix is aligning the versions, not forcing the install and hoping.
### A blank white page after a successful deploy
Open the browser console. The message "supabaseUrl is required" means the Supabase values never reached the build. In a Vite project they must be named with the VITE_ prefix, set in the host's environment settings, and the site rebuilt, because the values are baked in at build time.
### Page not found when refreshing a route
The home page works but any other address fails when opened directly. A single-page app has only one real HTML file, so the host needs a rule that sends every path to index.html. On Netlify that is one line in a redirects file or in the config file.
### Login works in preview, loops in production
The auth provider still lists the preview address. In Supabase, the Site URL and Redirect URLs have to include the live domain.

## How do I get the code out of Bolt?
There are two ways, a ZIP download and a GitHub connection, and for anything you plan to launch the GitHub route is the one to use.
With the repository in your own GitHub account, the host builds from it on every push, each change has a history, and a broken change can be rolled back. A ZIP is a snapshot with none of that.
Before exporting, check four things:
- The env file is listed in the ignore file so keys are not pushed to GitHub. If keys were already committed or pasted into source files, rotate them.
- package.json has a build script and the lockfile is included.
- The project builds with a plain install and build on a normal computer. This single step finds most deploy failures before the host does.
- Database tables exist as migration files, not only in the dashboard of whichever Supabase project Bolt connected.
> Run the production build once on a laptop before touching the host. One local build shows every error in a single place, where failed deploys show them one log at a time.

## Why does Bolt start breaking things once the project gets big?
Because every request sends a large part of the project to the model, and past a certain size it can no longer hold all of it at once. It edits the files it can see and breaks assumptions in the ones it cannot.
You will recognize the stage. A fix to the checkout page changes the navigation. A component is rewritten from scratch and loses a feature it had. Each prompt costs more tokens than the last, because more code is being read to make the same small change.
What helps is ordinary engineering:
- Split files that have grown to many hundreds of lines into smaller components with one job each.
- Put all database calls in one place, so there is a single file to change when a table changes.
- Delete dead code. Unused pages and abandoned experiments still cost tokens and still confuse the model.
- Lock or exclude files that are finished, where the tool allows it, so they stop being rewritten.
After that cleanup the project is cheaper to prompt and safer to edit, by you, by the AI or by a developer.

## What does a Bolt app need on the backend before real users arrive?
It needs every piece that was faked or left half-wired in the preview to be real, private and tested. The interface usually arrives finished long before the backend does.
- Auth. Email confirmation, password reset and the redirect addresses for the live domain.
- Database rules. Row level security on every table, tested with two accounts, because the public key in the frontend lets anyone query the database directly.
- Secret keys. Stripe, email and AI provider keys cannot live in a Vite frontend at all, with or without the prefix. They need a server-side function to sit behind.
- Payments. A webhook endpoint that Stripe can reach on the live domain and that verifies each event before granting access.
- Uploads. Storage rules that stop one user from reading or overwriting another user's files.
- Placeholder data. Hard-coded sample records and fake success messages removed, so a failure looks like a failure.
A static host cannot run the secret parts on its own. They go into Supabase edge functions, Netlify functions or, if the project is Next.js, its own server routes.

## Vercel, Netlify or hosting inside Bolt?
Any of them can serve a Bolt app, and the choice matters less than owning the account. My default is Netlify for Vite projects that already deploy there and Vercel for Next.js.
- Netlify. A good fit for a Vite single-page app with a few functions. A site deployed from inside Bolt may sit in a Netlify account you have not claimed yet. Claim it, or redeploy from your own account.
- Vercel. The natural home for Next.js, with a preview address for every branch.
- Hosting inside Bolt. Convenient for sharing a prototype. Check what your plan allows for custom domains and what happens to the site if the subscription ends.
Whichever you pick, the domain should be registered in your name, and the hosting, database and Stripe accounts should belong to you, with the developer invited as a collaborator.

## How long does it take, and which package fits?
A single failing deploy fits the two-day package, and a full launch with backend work fits the ten-day one.
- Quick Fix, from $60, 2 days: one build error, one broken route or one login redirect.
- Fix Plus Features, from $200, 5 days: a clean production build plus something added, such as Stripe checkout with a webhook or secured database rules.
- Finish and Launch, from $600, 10 days: export, restructure where needed, backend, domain and a tested launch.
The work goes faster when I get the GitHub repository, an invite to the host, database access and a list of what you expected each broken screen to do.

## The bottom line
Bolt is quick at getting an app to look and feel right inside the browser. Launching it means leaving that environment: a real build, real environment settings, a host you own and a backend that does not trust the browser. None of that requires a rewrite. It requires someone to run the build, read the first error and work down the list.`,
    faqs: [
      { q: 'Can you work from a Bolt project link?', a: 'The easiest path is exporting to GitHub or downloading the code. I can walk you through it.' },
      { q: 'Where will it be hosted?', a: 'Usually Vercel or Netlify, on your account, so you own everything.' },
      { q: 'Will you rewrite it?', a: 'No. I keep what works and fix what does not.' },
      { q: 'Why is my deployed Bolt app a blank white page?', a: 'Usually the environment values never reached the build, so the app crashes as it loads. Set them on the host with the VITE_ prefix and redeploy.' },
      { q: 'Why did Bolt start breaking working features?', a: 'Once a project is large, the model can no longer read all of it for each request, so edits break files it did not see. Splitting the code into smaller modules makes edits reliable again.' },
      { q: 'What does a Bolt fix cost?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
    ],
  },
  {
    slug: 'v0',
    tool: 'v0',
    h1: 'Turn your v0 UI into a working app',
    metaTitle: 'v0 Developer: Turn Your v0 Design into a Working Next.js App | Thomas Osayi',
    description: 'v0 gave you a great-looking Next.js UI with nothing behind it? I add the database, auth, payments and real data, then deploy it on Vercel.',
    whatItBuilds: 'v0 by Vercel generates React and Next.js interfaces with Tailwind and shadcn/ui. It is excellent at screens and layouts, and leaves most of the backend to you.',
    problems: [
      { title: 'Beautiful screens with mock data', text: 'Tables and dashboards filled with hardcoded arrays. I connect them to a real database with proper loading and empty states.' },
      { title: 'No auth or roles', text: 'Sign-in, protected routes and per-user data, using Firebase, Supabase or Auth.js depending on the app.' },
      { title: 'Forms that do nothing', text: 'Server actions or API routes with validation, error handling and emails.' },
      { title: 'Many disconnected generations', text: 'Several v0 outputs with slightly different components and styles. I merge them into one consistent design system.' },
      { title: 'Payments', text: 'Stripe checkout, subscriptions and webhooks that grant access reliably.' },
    ],
    process: ['Collect the v0 generations and your product goals', 'Merge into one Next.js codebase', 'Add database, auth and server logic', 'Deploy to Vercel on your domain', 'Hand over with notes'],
    guide: `## Is a v0 project an app or a design?
It is a real Next.js codebase that behaves like a design until something is put behind it. The components are well-made React. What is missing is everything a screen cannot show.
A typical generation contains pages in the Next.js App Router, shadcn/ui components copied into the project, Tailwind classes, icons, and sample data written directly into the files as arrays. Buttons have handlers that log to the console or do nothing. Forms collect input and drop it. A table of customers looks finished because eight invented customers are typed into the component.
v0 has been adding more full-stack ability, including database and auth integrations it can set up for you. Where it has done that, treat the result as a first draft: check who can read each table and whether every server function checks the user, because a generated integration is wired to work, not to refuse.
The practical test is simple. Open the deployed preview in a private window and see how much of the app is visible without signing in. Then add a record and reload. If it is gone, the data was never saved anywhere.

## How do I move v0 code into a project I own?
There are three routes, and which one is right depends on whether you already have a codebase.
- Deploy from v0 to Vercel. This creates a project on your Vercel account and is the quickest way to get a live address. Connect it to a GitHub repository straight away so the code has a history.
- Add to an existing codebase. v0 gives a command that uses the shadcn command line tool to pull a generation into your project, components and dependencies included. This is the route for adding screens to an app that already has a backend.
- Download the ZIP. Fine for a look, but it is a snapshot, and it leaves installing and configuring everything to you.
When pulling blocks into an existing project, three things need checking each time: that the components folder and import alias match what your project uses, that a newly pulled component has not overwritten one you customized, and that the theme colors come from your global stylesheet and not from values typed into the new screen.

## What do the errors mean when I start wiring it up?
Almost all of them come from one rule in the App Router: components run on the server unless marked otherwise, and server components cannot use state, effects or click handlers.
### A hook only works in a Client Component
The file uses useState or a similar hook without the "use client" line at the top. Adding the line fixes the error. Adding it to every file to make errors go away is the wrong habit, because it pushes data fetching into the browser.
### Event handlers cannot be passed to Client Component props
A server component is handing a function such as onClick to a child. The interactive part needs to move into its own small client component.
### Hydration failed
The HTML built on the server differs from what the browser rendered first. The usual causes are dates, random IDs, or code that reads the window or local storage during render.
### Invalid src prop on next/image
An image from an outside address was used without listing that host in the Next.js config. Generated screens often point to placeholder images that need replacing anyway.
### Works locally, undefined on Vercel
An environment value was added in the Vercel settings after the last build. Values with the NEXT_PUBLIC_ prefix are baked in at build time, so the project has to be redeployed.

## What does replacing the mock data involve?
It means turning each hard-coded array into a table, a query, and the four states a real screen has: loading, empty, error and full.
The order I work in:
- Read the sample arrays and write down the fields. They are an accidental first draft of the database schema, and usually a decent one.
- Decide what belongs to whom. Every record gets an owner, a team or a public flag before any query is written.
- Fetch on the server where possible, so the page arrives with data and private queries never ship to the browser.
- Replace the fake handlers with server actions or API routes that validate the input before saving.
- Design the empty state. A dashboard with zero records is the first thing every new user sees, and generated screens rarely include it.
Forms are the clearest example. Artistic Printing, a commercial printer in Los Angeles, needed quote requests to arrive with the job details the shop needs to price them. The visible form was the small part. The work was collecting those specs, saving each request, and giving the people who manage quotes a signed-in place to work through them.
![Artistic Printing, a commercial printer in Los Angeles: the website I built with a quote request and management tool behind it.](/work/fiverr/artistic.jpg)

## Where does authentication go in a v0 app?
It goes in three places, and the screens v0 draws are the least important of them. A login page with no checks behind it only hides the door.
- The session. Firebase Auth, Supabase Auth or Auth.js issues it and keeps the user signed in.
- The route. Protected pages redirect visitors who are not signed in. Middleware can do this, but it is a convenience for navigation, not the security boundary.
- The data. Every query and every server action checks who is asking before it reads or writes. A server action is a public endpoint that anyone can call with a script, whether or not a button for it is visible.
Roles sit on top of that. If the product has admins, staff and customers, the role is stored with the user on the server and checked in the same place as ownership.
> Hiding a button from the wrong user is design. Refusing the request on the server is security. A v0 app needs the second one added by hand for every action.

## How do I merge several v0 generations into one app?
By picking one generation as the source of truth for the design system and bending the others to it. Each chat produces its own slightly different buttons, spacing and color values, and pasting them side by side gives an app that looks like three products.
- Keep one copy of each shadcn component. Duplicates with small differences are the main source of inconsistency.
- Move colors, radius and fonts into the theme variables in the global stylesheet, and remove one-off hex values from the screens.
- Check the Tailwind version. Older and newer generations can be set up differently, one with a config file and one with the theme defined in CSS, and a project can only use one approach.
- Use one layout for navigation and page chrome, so each screen contains only its own content.
Once that base exists, new generations drop in cleanly, which is why I do it before touching the backend.

## How long does it take and what does it cost?
A single screen made real is a few days, and a whole product made real is a build, priced like one.
- Fix Plus Features, from $200, 5 days: one flow wired end to end, such as a form that validates, saves and sends an email, or a dashboard reading from a real table.
- Finish and Launch, from $600, 10 days: the generations merged, a database and auth added to an app of modest size, deployed on Vercel on your domain.
- SaaS MVP, from $1,200, 21 days: auth, dashboard, database and payments, when the v0 screens are the start of a product with several kinds of user.
What speeds it up is a list of the screens you consider final, the rules for who sees what, and any accounts already created for the database, Stripe and the domain.

## The bottom line
v0 gives you the part of an app that people see, at a quality that is hard to match by hand in the same time. Budget for the part they do not see: the schema, the checks on the server, the empty and error states, and one consistent design system. Decide who owns each piece of data first and the rest follows in order.`,
    faqs: [
      { q: 'Is v0 code production ready?', a: 'The UI usually is. The parts around it, data, auth, validation and security, are where the work is.' },
      { q: 'Which database do you use?', a: 'Firebase for speed and realtime, Postgres when data is relational. I recommend one for your product.' },
      { q: 'Can I keep generating screens in v0?', a: 'Yes. New screens drop into the same component system.' },
      { q: 'How do I get my v0 code into my own project?', a: 'Deploy it to Vercel and connect a GitHub repository, or pull a generation into an existing codebase with the shadcn command that v0 provides.' },
      { q: 'Why does my v0 app lose data when I refresh?', a: 'Because the screens are filled from sample arrays in the code and nothing is saved to a database yet.' },
      { q: 'What does it cost?', a: 'Wiring one flow end to end starts at $200, finishing and launching a small app at $600, and a full SaaS MVP at $1,200.' },
    ],
  },
  {
    slug: 'replit',
    tool: 'Replit',
    h1: 'Fix, scale or move your Replit app',
    metaTitle: 'Replit Agent App Developer: Fix, Finish or Migrate | Thomas Osayi',
    description: 'Built an app with Replit Agent and hit a wall? I fix bugs, secure auth and data, add payments, and help you stay on Replit or move to Vercel and a managed database.',
    whatItBuilds: 'Replit Agent builds and hosts full-stack apps inside Replit, with its own database options, secrets manager and deployments, across languages like JavaScript and Python.',
    problems: [
      { title: 'Bugs the agent keeps reintroducing', text: 'Fixes that undo each other. A developer reading the code end to end breaks the loop.' },
      { title: 'Security gaps', text: 'Missing authorization checks on API routes, secrets in code, and no validation on user input.' },
      { title: 'Costs and performance as usage grows', text: 'Always-on deployments and inefficient queries add up. I tune queries and pick the right deployment type.' },
      { title: 'Moving off Replit', text: 'When you want your own GitHub, hosting and managed database, I migrate the code and data cleanly.' },
      { title: 'Payments and email', text: 'Stripe, transactional email and webhooks connected and tested.' },
    ],
    process: ['Review the Repl and list issues', 'Fix security and the critical bugs', 'Decide together: stay on Replit or migrate', 'Deploy and test', 'Hand over a write-up'],
    guide: `## What has Replit Agent actually set up?
It has set up a development workspace, a database and, once you publish, a separate running copy of the app, and most confusion comes from treating those as one thing.
The workspace is where the Agent writes and runs code. For web apps it commonly produces a React frontend built with Vite, an Express server in TypeScript and a Postgres database reached through an ORM, or a Python server when you asked for one. Around the code sit a few Replit-specific parts:
- A configuration file that tells Replit how to run and publish the project
- Secrets, stored outside the code and exposed to the app as environment variables
- A built-in Postgres database, reached through a DATABASE_URL secret
- Optional Replit services such as its login system and object storage
- Checkpoints, which are snapshots the Agent creates as it works and that you can roll back to
Publishing takes a snapshot of the code and runs it as a deployment. From then on the address your users visit is not the workspace. Changes there do nothing for them until you publish again, and a crash in the deployment does not show up in the workspace console. It shows up in the deployment logs.

## Why does it run in the workspace but fail once published?
Usually because the published copy is stricter about how the server starts, what it can reach and where files live. Five causes are worth checking in order.
- The server listens on localhost. A deployment needs the server bound to 0.0.0.0 on the expected port. The symptom is a publish that fails or times out while reporting that no open port was found, even though the preview works.
- Startup is too slow. If the app runs migrations, seeds data or builds assets before it starts answering, the deployment can be judged unhealthy before it is ready. The build step and the run step need to be separated.
- A secret is missing or different. Check that every key the app reads exists for the deployment, and that Stripe and email keys are the live ones.
- The database is not the one you think. Depending on how the project was set up, development and production can share one database or use two. If they are separate, tables and data created in development do not exist in production until migrations run there. If they are shared, your testing is editing live data.
- Files saved to disk disappear. A deployment's filesystem is not permanent storage. Uploaded images written to a local folder vanish on the next publish or restart. They belong in object storage, with only the address saved in the database.

## Which deployment type should I be on?
Autoscale for most web apps, Reserved VM when something has to stay running, and the wrong choice shows up either as a bill or as a bug.
### Autoscale
Runs when requests arrive and scales down when they stop, so cost follows traffic. The trade-offs are a slower first response after a quiet period and no memory between requests. Anything kept in a variable, such as sessions or a cache, will be lost, so sessions belong in the database.
### Reserved VM
One machine that is always on, at a fixed cost whether or not anyone visits. It suits background workers, bots, scheduled loops inside the app and long-lived connections. For a plain website it is the expensive option.
### Static and Scheduled
Static serves a frontend with no server at all, which fits a marketing site. Scheduled runs a script at set times, which is the right home for a nightly job that would otherwise force an always-on machine.
Costs that keep growing usually trace back to an always-on deployment that did not need to be, or to queries that load whole tables on every request. Both get checked before anyone talks about moving.

## How do I stop the Agent from fixing the same bug again and again?
Stop asking it to fix symptoms, roll back to the last good checkpoint and find the cause by reading the code. A loop means the Agent is missing a fact, and repeating the request will not supply it.
The pattern is easy to recognize: fix the login, the dashboard breaks; fix the dashboard, login is back to the old bug. Underneath there are often two pieces of code doing the same job, for example two places that create the session, and each fix edits a different one.
- Roll back before prompting again. Building on top of a broken state makes the next fix harder to reason about.
- Ask the Agent to explain the flow and list the files involved before it changes anything. The duplicate often shows up in that list.
- Change one thing per request and test it yourself, with the deployment logs open.
- Write the decision down in the project notes the Agent reads, so the next session does not reintroduce the second copy.
> Agent work is billed by usage whether or not it helps. If three attempts have not fixed a bug, a fourth is the most expensive way to continue.

## What should be checked before real users sign up?
Whether the server refuses requests it should refuse. An agent builds the screens you asked for, and it is easy for pages to be protected while the API behind them is not.
- Call each API route while logged out, using the browser's network tab or a simple request tool. Any route that returns data needs a check added.
- Log in as one user and request another user's record by changing the ID in the address. The server must compare the owner, not just confirm that someone is logged in.
- Search the code for keys and passwords typed directly into files, and move them to Secrets. Rotate any that were ever in the code.
- Confirm that the session secret is a long random value in Secrets, not a default string.
- Validate input on the server. Checks in the form alone can be skipped by anyone.
- Make sure admin routes check for an admin role, not for a hidden link.

## How does a move off Replit work?
It is a staged copy, tested on the new setup before any user is switched, and the code is usually the easy part.
- Code. Connect the project to GitHub from the workspace and push. The repository should live in your account.
- Database. Export the Postgres database with a standard dump and restore it into a managed Postgres service. Because it is ordinary Postgres, the schema and data move without translation.
- Replit-specific services. The login system, object storage and any Replit plugins in the build config have no meaning elsewhere. Logins move to a standard provider with users matched by email, and files are copied to a storage bucket.
- Hosting. This is the real decision. Vercel runs code as short-lived functions, which suits a Next.js app. An Express server with sessions or live connections either moves to a host that runs a long-lived server or gets reshaped into Next.js routes.
- Cutover. Run both for a short period, repeat the data copy at the end, then point the domain at the new host.

## Should I stay or move, and what will it cost?
Stay if the app works, costs are reasonable and you value building and hosting in one place. Move when you need a team workflow around GitHub, a database you manage directly, or hosting costs that are easier to predict.
- Quick Fix, from $60, 2 days: one bug, such as a publish that fails on the port check.
- Fix Plus Features, from $200, 5 days: the security checks above plus one integration, such as Stripe or transactional email.
- Finish and Launch, from $600, 10 days: a stuck app made stable and launched, on Replit or migrated when the app is small.
A larger app with many tables and Replit services to replace is a bigger job, and I scope it after reading the code.

## The bottom line
Replit gets an idea running very quickly, and it can host a real product. Trouble starts when the workspace and the deployment are treated as the same thing, when the Agent is asked to guess at a bug, or when the server trusts whoever calls it. Fix those three and the choice between staying and moving becomes a business decision, not an emergency.`,
    faqs: [
      { q: 'Do I have to leave Replit?', a: 'No. Many apps are fine there. I only recommend moving when cost, control or scale make it worth it.' },
      { q: 'Can you move my data too?', a: 'Yes. Data is exported and migrated with a tested plan.' },
      { q: 'What languages do you work in?', a: 'Mostly TypeScript and JavaScript (React, Next.js, Node), and Python for scripts and data work.' },
      { q: 'Why does my Replit app work in the workspace but fail when published?', a: 'Most often the server listens on localhost when it should bind to 0.0.0.0, a secret is missing in the deployment, or the production database has no tables yet.' },
      { q: 'Autoscale or Reserved VM?', a: 'Autoscale suits most web apps because cost follows traffic. Reserved VM is for apps that need something running all the time, such as background jobs or bots.' },
      { q: 'What does it cost?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
    ],
  },
  {
    slug: 'cursor',
    tool: 'Cursor',
    h1: 'Clean up and ship your Cursor-built codebase',
    metaTitle: 'Fix a Cursor or AI-Coded Codebase | Next.js & React Developer | Thomas Osayi',
    description: 'Code written with Cursor, Windsurf or Claude Code that got messy? I untangle it, fix the bugs and type errors, add the missing pieces and get it deployed.',
    whatItBuilds: 'Cursor and similar AI editors write code directly into your own repository, in whatever stack you chose. The result is only as consistent as the prompts behind it.',
    problems: [
      { title: 'Five ways of doing the same thing', text: 'Each session added its own pattern for fetching data, handling forms or styling. I consolidate to one.' },
      { title: 'Type errors and lint failures silenced', text: 'Errors suppressed with any types and disabled rules that hide real bugs. I fix them properly.' },
      { title: 'Regressions', text: 'New features quietly break old ones. I add the minimum tests around the critical flows so it stops.' },
      { title: 'Dependency drift', text: 'Duplicate libraries, conflicting versions and packages nobody uses anymore.' },
      { title: 'Not deployable', text: 'Builds that only work on one laptop. I set up a clean production build and deploy.' },
    ],
    process: ['Read the repo and map the architecture', 'Prioritize what blocks launch', 'Refactor only where it removes real risk', 'Deploy with a working build', 'Leave notes and conventions so future AI edits stay consistent'],
    guide: `## How do I know if my Cursor codebase is in real trouble?
Run four checks, and the answer is usually visible before any code is read line by line.
- Run the production build on a clean copy. Clone the repository into a new folder, install and build. If it only builds in your working folder, something is depending on files that were never committed.
- Count the silencers. Search the project for any used as a type, for @ts-ignore, @ts-expect-error and eslint-disable. A handful is normal. Hundreds means the type checker was switched off one line at a time.
- Open the Next.js config. If it sets ignoreBuildErrors or ignoreDuringBuilds to true, the build has been told to pass regardless of what it finds.
- Read package.json. Look for two libraries that do the same job: two date libraries, two form libraries, two UI kits, both a fetch wrapper and raw fetch calls.
Then try one end-to-end flow as a brand new user in a private window. Bugs in a long-lived AI-edited codebase hide in the first-run path, because the person building it has not been a new user for months.

## Why does AI-written code end up with five patterns for one job?
Because each chat starts without memory of the last one, and the model writes the most plausible solution for the files it was shown, not the one your project already uses.
Ask for a new form on Monday with the settings page open and you get the pattern from the settings page. Ask on Thursday with a different file open and you get whatever the model considers typical for that kind of form. Both work. Switch models between sessions and the styles diverge further. Nobody chose five patterns. They accumulated.
The cost shows up later. A bug fixed in one data-fetching helper stays alive in the other three. A change to how errors are displayed has to be made in every variant. And the next AI edit, seeing five examples, follows whichever it happens to read and may add a sixth.
Consolidating is mostly mechanical: choose the version that handles loading and errors best, move it to one shared place, convert the callers a few at a time, and delete the rest. Deleting matters as much as converting, because dead code is still read by the AI as an example to follow.

## What is hiding behind the silenced type errors?
Real bugs, in a predictable handful of categories. When an agent is told to make the build pass, the cheapest way is to tell the checker to stop looking.
- Values that can be missing. A silenced warning that something is possibly undefined becomes, in production, the blank screen for a user with no profile photo, no orders or a half-finished signup.
- Data that is not the shape the code assumes. An API response typed as any hides the day the response changes or comes back as an error object.
- Wrong arguments. A function called with a string where a number is expected, which fails quietly instead of loudly.
- Async mistakes. A missing await that makes a save look finished when it is still running, or has failed.
The way out is not turning every strict check back on in one go and facing a wall of errors. I turn off the ignore flags in the config first so the build tells the truth, fix the files on the critical paths, and type the data at the edges where it enters the app: API responses, form input and database reads. Types inside the app mostly sort themselves out once the edges are honest.

## How much should be refactored before launch?
Only what stands between you and a safe launch. A messy file that works and is rarely touched can stay messy.
I sort findings into three groups:
- Blocks launch. Missing authorization checks, exposed keys, broken payments, data that one user can read from another, a build that does not reproduce.
- Will hurt within a month. Duplicated logic in the flows you change most often, no tests on checkout or signup, no error handling on network calls.
- Cosmetic. Inconsistent naming, oversized components that work, old comments.
The first group gets fixed, the second gets fixed where time allows and documented where it does not, and the third is listed and left. A full rewrite is justified only when the data model itself is wrong, for example when roles or ownership were never represented and every screen would need changing anyway.
In package terms: one failing build or one bug is the Quick Fix, from $60, 2 days. Consolidating one area and adding a missing feature is Fix Plus Features, from $200, 5 days. Taking a repository that only runs on one laptop to a production deploy with the first group cleared is Finish and Launch, from $600, 10 days.

## What is the minimum testing that stops regressions?
A few browser tests that walk through the flows that make or lose money, run automatically before every deploy. Full coverage is not the goal.
For most products that means:
- Sign up, confirm and reach the first screen
- Log in and see only your own data
- The main action of the product, whatever a user pays for
- Checkout in Stripe test mode through to access being granted
- One permission test: a second account trying to open the first account's record
A small set like this covers the flows where a regression costs the most, and a change to a shared component is likely to trip at least one of them. The tests also give the agent something to run. An instruction to make a change and keep the tests passing produces safer edits than an instruction to make a change.
> Write the test for a bug before fixing it. If the same bug has come back twice, it will come back a third time unless something fails when it does.

## Why does it only run on my laptop?
Because your laptop has files, settings and tolerances that the build server does not. The differences are specific and easy to check.
- Environment values. The local env file is not in the repository, and should not be. Every value has to be entered on the host, with production keys, not test ones.
- File name casing. macOS and Windows normally treat Header and header as the same file. The Linux machines that run builds do not, so an import that works locally fails there with a module not found error.
- Two lockfiles. Sessions that used different package managers leave both lockfiles in the repository, and the host may install different versions than you have.
- Node version. If nothing in the project states it, the host picks its own default.
- Local-only services. A database on your machine, a webhook tunnel that was running in another terminal, a file written to a folder that does not exist in production.
- Uncommitted work. Files the editor created but git never tracked.

## How do I keep Cursor from making the mess again?
Give it standing instructions, small tasks and a way to check its own work. The tool is the same. The difference is in the setup around it.
- Project rules. Cursor reads rule files stored in the repository, in a rules folder inside the .cursor directory, with a single .cursorrules file as the older form. A good one is short: the stack and versions, where data fetching lives, which component library to use, what never to do.
- Reference files, not descriptions. Point the agent at the existing example to copy by mentioning the file, so it extends your pattern.
- One task per chat. Long sessions drift. Start a new chat for each feature and commit before each one, so a bad run can be discarded in git as well as with Cursor's own checkpoints.
- Read the diff. Reject changes to files that had nothing to do with the request.
- Keep the build honest. With type checking and the tests running on every push, an agent cannot quietly trade a visible error for a hidden one.

## The bottom line
Cursor did not write bad code so much as write it without a memory. The repair is to make the build truthful, consolidate the patterns on the paths that matter, put a few tests around the money flows and leave rules in the repository so the next session starts with the context the previous ones lacked. Most of your code stays exactly where it is.`,
    faqs: [
      { q: 'Will you rewrite my app?', a: 'Only the parts that are genuinely cheaper to rewrite than fix. Most code stays.' },
      { q: 'Can you set it up so AI edits stay clean?', a: 'Yes. I leave a short conventions file and structure that keeps Cursor and similar tools consistent.' },
      { q: 'Which stacks do you take?', a: 'React, Next.js, React Native, Node, Firebase, Supabase and Postgres.' },
      { q: 'How do I know if my codebase needs cleanup before launch?', a: 'Run a production build on a fresh clone and search for any types, ts-ignore comments and ignoreBuildErrors in the config. A build that only passes with errors silenced needs work first.' },
      { q: 'Do you add tests?', a: 'Yes, a small set of browser tests around signup, login, the main action and checkout, run before every deploy.' },
      { q: 'What does it cost?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
    ],
  },
];

export const industryBySlug = (s: string) => industries.find((x) => x.slug === s);
export const toolFixes: ToolFix[] = [...baseToolFixes, ...moreToolFixes];

export const toolBySlug = (s: string) => toolFixes.find((x) => x.slug === s);
