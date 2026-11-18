// Industry pages added Nov 17 2026. Same rules as landing.ts: real, specific content, no name swaps.
import type { Industry } from './landing';

export const moreIndustries: Industry[] = [
  {
    slug: 'dental-practices',
    name: 'Dental practices',
    noun: 'dental practice',
    h1: 'Dental practice websites that book new patients',
    metaTitle: 'Dental Practice Website Design & Development | Thomas Osayi',
    description: 'Dental websites with online booking, insurance info, dentist profiles and service pages that rank locally. Custom Next.js builds from LA.',
    intro: 'New patients pick a dentist on three questions: do you take my insurance, can I get in soon, and will this be a calm experience. A dental site that answers those on the first screen and makes booking one tap away turns local searches into appointments.',
    mustHaves: [
      { title: 'Online booking or a request form', text: 'A link or embed from your practice management or scheduling tool, or a short request form with preferred times that emails the front desk.' },
      { title: 'Insurance accepted, in plain view', text: 'List the plans you are in network with and what happens if a patient is out of network. It is the most asked question on the phone.' },
      { title: 'A page per service', text: 'Cleanings, whitening, implants, Invisalign, emergency visits. Separate pages rank for separate searches and answer each patient\'s real questions.' },
      { title: 'Dentist and team profiles', text: 'Real photos, training and a short personal note. Anxious patients read these before they book.' },
      { title: 'New patient information', text: 'What to bring, forms to fill in ahead, parking and what the first visit looks like.' },
    ],
    mistakes: [
      'Insurance information hidden or missing, so patients call or leave',
      'One "services" page listing everything instead of a page per treatment',
      'Stock photos of models instead of the actual office and team',
      'Collecting medical history in a basic website form instead of a secure intake system',
    ],
    related: ['guardian-mindcare', 'astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'A single-location practice usually fits the Business Site package. Several locations, many service pages or custom booking logic make it a Full Custom Build.',
    guide: `## How does online booking actually work on a dental website?
The website almost never holds the calendar itself. It hands the patient to the system your front desk already schedules in, and there are three levels of that handoff. Which one you get depends on your software, not on the website.
- Real-time booking. Your practice management system, or a scheduling add-on connected to it, publishes open slots. The patient picks one and it lands in the schedule. Tools such as NexHealth, LocalMed and Zocdoc work this way with common systems like Dentrix, Eaglesoft and Open Dental, but confirm that your exact version is supported before you plan around it.
- A booking link. The same tool gives you a hosted booking page, and a button on every page of the site opens it. It is less polished than an embed and it is the most reliable option.
- A request form. The patient gives a name, a phone number, whether they are new, and two or three preferred times. The front desk calls or texts to confirm.
A request form is not a failure. For a practice that wants to control which appointment types go in which chair, it is often the better choice. What matters is that the patient sees a message on screen saying when they will hear back, and that the front desk gets the request within seconds.
## What can the website collect without creating a HIPAA problem?
As little as possible: enough to schedule and nothing clinical. A dental practice is generally a covered entity under HIPAA, which means health information tied to an identifiable patient has to be handled by systems and vendors set up for it, normally under a business associate agreement. An ordinary website form that emails submissions to an inbox is not that.
In practice I keep the line here:
- Fine for the marketing site: name, phone, email, new or existing patient, preferred times and the name of the insurance carrier.
- Kept off the marketing site: medical history, medications, symptoms typed into a free text box, insurance member numbers, dates of birth and photos of teeth.
Free text boxes are where practices get caught, because a field labelled anything else we should know invites people to type their health history. I replace it with a short list of visit types to choose from.
Advertising and analytics scripts deserve the same care. Regulators have paid attention to tracking tools on healthcare websites, so I keep ad pixels off booking and request pages and limit analytics to what you will actually read. This is general information and not legal advice. Your compliance contact or attorney decides what your practice may collect and which vendors need an agreement.
> Before the build, ask your scheduling or forms vendor one question in writing: will you sign a business associate agreement for this product? If the answer is no, that product should not touch patient details.
## How do patients actually search for a dentist?
Mostly with a treatment or a problem plus a place, and often in a hurry. Dentist near me is the obvious search, but the ones that turn into appointments are narrower: an emergency dentist open on Saturday, the cost of clear aligners in a named neighborhood, a dentist that takes a named plan, a pediatric dentist near a school. Each of those is answered by a specific page, not by a home page.
Three things on the site feed local results:
- Consistent details. The name, address, phone and hours on the site should match your Google Business Profile character for character. I add dentist schema markup so search engines read them as data and not as loose text.
- Hours that are true. If you take emergencies or open one Saturday a month, say so on the page and in the profile. A patient in pain filters by open now.
- A page per office. Each location gets its own address, map, parking notes, team and the plans accepted there.
## What goes on a treatment page?
The questions a patient would otherwise ask on the phone, in the order they ask them. A page per service is already on the list above. This is what makes each of those pages worth having.
### The structure I use
- Who the treatment is for and what problem it solves, in two sentences
- What happens at the appointment, step by step, and how long it takes
- Comfort: numbing, sedation if you offer it, and what recovery feels like
- Cost: a range, what moves the price, and how insurance or financing usually applies
- How many visits it takes and how soon a patient can start
- A booking button that names the visit, such as book an implant consultation
Cost is the section practices resist and patients want most. You do not need to publish a fixed price. A range with the factors that change it is more honest than silence, and it filters out calls that were never going to book. Have the dentist review every clinical statement and avoid promising outcomes. Before and after photos should be your own cases, used with the patient's written permission.
## What should I prepare before the build starts?
Seven things, and most of them already exist somewhere in the office.
- The exact list of plans you are in network with, and your out of network policy in one sentence
- A contact or login for your scheduling tool, so I can see what link or embed it offers
- Photos of the real office, the operatories and the team. One afternoon with a photographer beats any stock library.
- A short bio for each dentist and hygienist: training, years in practice and something human
- Your new patient forms and how they are filled in today
- The ten questions the front desk answers most on the phone
- Access to the domain and the Google Business Profile
The front desk list is the most useful item. Those ten questions become the FAQ, the new patient page and half of the treatment page content.
## Which package fits a dental practice, and how long does it take?
A single office usually fits the Business Site package, which starts from $450 and takes about 14 days. That is up to five pages with a booking link or request form and local SEO setup: typically home, services, team, new patients and contact.
Once you want a page per treatment, more than one location or an editor for staff, it is a Full Custom Build, from $1,200 and about 21 days. Both timelines assume content arrives in the first week. Most delays come from waiting on photos and the insurance list, not from the code.
I should be straightforward that my portfolio does not include a dental office. The closest work is in healthcare: Guardian MindCare, a therapy practice platform where clients search for a therapist by insurance, and a site for Pacific Harbor Medical Group's executive physicals. Putting the insurance answer first and being careful with patient information carry over directly.
![The Pacific Harbor Medical Group site for physician-led executive physicals in Torrance and the South Bay.](/work/phmg.jpg)
## What does the site cost to run after launch?
Very little for the site itself. Hosting on Vercel is free or close to it for most small business sites, and the domain renews once a year. The real ongoing costs sit elsewhere:
- Your scheduling software subscription, which you are probably paying already
- A secure forms or intake product, if you add one
- A person's time to keep the site true
That last one is where dental sites decay. Plans change at renewal time, a hygienist leaves, Friday hours shift. Put a recurring reminder in the office calendar to check the insurance list, hours and team page every quarter. In a Full Custom Build I can add a simple editor so the office manager changes those without calling me.
## When is a custom site the wrong choice?
When a bundled dental website service is already bringing in patients and you are happy with it, or when you are mid contract. Dental marketing companies and some patient communication vendors include a template site in a monthly plan. The trade is convenience now for control later. Before signing or renewing one, ask:
- Who owns the domain, the copy and the photos?
- Can I take the site with me if I cancel, or does it disappear?
- Can I add pages for treatments the template does not cover?
A custom build makes sense when you want to own the site outright, load faster than the template sites around you and write pages a template has no slot for.
## The bottom line
A dental website has a short job description: answer the insurance question, show the real people and office, give each treatment its own honest page and hand the patient to your scheduling system without collecting anything clinical on the way. Get the plan list, the photos and the front desk questions together first, and the build itself is the quick part.`,
    faqs: [
      { q: 'Can patients book online from the website?', a: 'Yes. I connect the booking link or widget your scheduling software provides, or build a simple request form that goes to the front desk.' },
      { q: 'Can the website collect patient health information?', a: 'It is safest to keep health information out of the marketing site and send intake to a HIPAA-compliant system you already use.' },
      { q: 'Will a new website help us rank in local search?', a: 'It handles the on-site part: speed, a page per service, local business schema and consistent details. Reviews and your Google Business Profile do the rest.' },
      { q: 'How long does a dental website take to build?', a: 'A single-office site on the Business Site package takes about 14 days once the content is in. A larger build with a page per treatment takes about 21 days.' },
      { q: 'Do we have to change our scheduling software?', a: 'No. I work with the booking link or embed your current system offers, and use a short request form if it offers neither.' },
      { q: 'Can you put treatment prices on the site?', a: 'Yes. A price range per treatment with the factors that change it works well, and you approve every number before it goes live.' },
    ],
  },
  {
    slug: 'law-firms',
    name: 'Law firms',
    noun: 'law firm',
    h1: 'Law firm websites that turn searches into consultations',
    metaTitle: 'Law Firm Website Design & Development | Thomas Osayi',
    description: 'Law firm websites with practice area pages, attorney profiles and consultation intake. Fast, credible, custom Next.js sites built in Los Angeles.',
    intro: 'Someone searching for a lawyer is usually stressed and comparing several firms in one sitting. They want to know quickly whether you handle their kind of case, who they would work with, and how to get a consultation. A clear, fast site wins that comparison.',
    mustHaves: [
      { title: 'A page per practice area', text: 'Each area gets its own page explaining who it is for, how the process usually works and what to bring to a consultation.' },
      { title: 'Attorney profiles', text: 'Photo, bar admissions, education, focus areas and a plain-language note on how they work with clients.' },
      { title: 'Consultation intake', text: 'A short form that captures the case type, a callback number and a conflict-check name, with a notice not to send confidential details.' },
      { title: 'Plain answers to common questions', text: 'Fees structure, timelines and first steps, written for a non-lawyer. These pages also bring in long-tail searches.' },
      { title: 'Trust signals done carefully', text: 'Memberships, publications and client reviews where your state\'s advertising rules allow them.' },
    ],
    mistakes: [
      'One page that lists every practice area in a single paragraph',
      'Intake forms that invite people to describe their whole case before any conflict check',
      'Dense legal language that reads like a brief instead of help',
      'Slow pages full of sliders and stock gavel photos',
    ],
    related: ['vencare', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A small firm with a few practice areas fits the Business Site package. Many practice areas, multiple offices or client portals make it a Full Custom Build.',
    guide: `## What happens between the form and the first call?
A good intake flow moves a stranger from a search result to a scheduled consultation in a few defined steps, and it collects only what the firm needs before a conflict check. Here is the flow I build, end to end.
- The visitor picks a matter type from a list. That choice decides who is notified and can show or hide a follow-up question, such as the date of an accident or the county of a filing.
- They give a name, a phone number, an email and the name of any other party. That last field is for the conflict check and nothing more.
- A short notice sits above the button: submitting the form does not create an attorney-client relationship, and please do not include confidential details.
- On submit, the visitor sees a confirmation that says when someone will call. The right attorney or intake person gets an email within seconds, and the request is stored as a record, not only as an email.
- After the conflict check clears, the firm sends a scheduling link or calls.
The step firms skip is the stored record. An inbox is a poor intake log. A simple list of requests with a status, new, contacted, declined, retained, shows how many inquiries each practice area produces and how many are lost to slow callbacks.
## What do advertising rules mean for the website?
A law firm website is generally treated as a communication about legal services, so your state's professional conduct rules apply to it. Most states base theirs on the ABA Model Rules, where the core standard is that statements about a lawyer or the firm's services must not be false or misleading. The details differ by state, and that is where sites get into trouble.
Points to check against your own state's rules:
- Words such as specialist or expert, which many states restrict unless the lawyer holds a recognised certification
- Past results and case values, which often need a disclaimer that outcomes depend on the facts of each matter
- Client testimonials, which some states limit or require disclaimers for
- A required label or the name and office address of a responsible attorney, which some states ask for on advertising
My part is mechanical. I build a slot for each disclaimer where it has to appear, keep them in one place so a wording change updates every page, and publish nothing a named attorney has not approved. This is general information and not legal advice, and you are better placed than I am to read your own bar's rules.
## How do people actually search for a lawyer?
Two ways: by naming the kind of lawyer and a place, or by typing their problem as a question. The first kind of search, a practice area plus a city or county, is where the firm competes with everyone else. The second is where a smaller firm can win.
Question searches look like this: how long do I have to file after a car accident, can my landlord keep my deposit, what happens at a first custody hearing. The person asking is early, worried and not yet comparing firms. A plain page that answers the question for your state, names the usual next step and offers a consultation meets them before they have a shortlist.
For the local side, the site needs:
- One page per practice area and one per office, each with its own address and phone number
- Attorney schema and local business schema, so search engines read names, addresses and practice areas as data
- Details that match the firm's Google Business Profile exactly
## What makes a practice area page work?
It reads like the first ten minutes of a consultation. The mistake list above covers the single paragraph that names every practice area. The opposite of that is a page built on the questions a client asks in the order they ask them.
### A structure that holds up
- Who this page is for, in the client's words, not the statute's
- What usually happens, step by step, with honest time ranges
- What it tends to cost and how fees are structured: hourly, flat or contingency
- What to bring to a consultation
- Mistakes to avoid before talking to a lawyer, such as posting about the matter online
- Which attorney handles these matters, with a link to their profile
- The consultation form, already set to this matter type
Each page should carry a line that it is general information and not advice on their situation, with wording the firm approves.
## Should the site have chat, a client portal or online payments?
Usually link to the tools built for law firms, do not rebuild them on the website. Each of the three has a catch that is specific to legal work.
- Live chat. It can raise inquiries, but a chat transcript is an intake channel like any other. Whoever answers needs the same script as the form: no confidential details, no advice, no promise of representation.
- Client portal. Practice management products such as Clio and MyCase include secure client portals for documents and messages. A login button on the site that opens that portal is safer and cheaper than a custom one. A custom portal only makes sense when the workflow is unusual.
- Payments. Money paid in advance for legal work is often subject to trust accounting rules, which is why payment products made for law firms exist. I would not put retainers through a generic checkout without the firm confirming how those funds must be handled.
> Put the firm's main phone number in the header as a tap to call link on mobile. A person comparing three firms from a phone will call the one that is one tap away before filling in any form.
## What should the firm prepare?
Less than most partners expect, and almost all of it is decisions and not writing.
- The list of practice areas the firm actually wants more of, in priority order
- Who receives intake for each one, and who covers when they are out
- The disclaimers and advertising rules that apply, with the exact wording
- For each attorney: a current photo, bar admissions, education and three sentences on how they work with clients
- Notes for each practice area, even as bullet points or a recorded ten minute conversation. I can turn notes into structured pages for an attorney to correct, which is faster than asking a lawyer to write from a blank page.
- Access to the domain, the current site and the Google Business Profile
## Which package fits, and how long does it take?
A solo or small firm with two or three practice areas fits the Business Site package, from $450 and about 14 days: up to five pages with a consultation form and local SEO setup. A firm that wants a page per practice area, attorney profile pages, question pages and a stored intake list is a Full Custom Build, from $1,200 and about 21 days.
The honest variable in a law firm timeline is review. Code moves in days. Copy waits for an attorney to approve it. Naming one person with authority to sign off on wording keeps a three week project at three weeks.
I do not have a law firm in my portfolio, and I would rather say so than imply it. The relevant work is structured intake, which I built for Artistic Printing as a quote request and management tool, and role-based access, which I built for Guardian MindCare with five user roles. Routing a request by type and controlling who can read it are the same problems in a different field.
## What should we ask any developer before hiring?
Five questions sort a careful builder from a risky one for a law firm site.
- Where are form submissions stored, who can read them, and how long are they kept?
- Does anything on the site send visitor data to ad networks, and can it be switched off on intake pages?
- Who owns the domain, the hosting account and the code when the project ends?
- How do we change a disclaimer or remove an attorney without paying for a rebuild?
- Will you publish anything we have not approved in writing?
The answers I give: submissions are stored in a database only signed-in staff can read, intake pages carry no ad scripts, you own every account, common changes go through a simple editor, and nothing goes live without sign-off.
## The bottom line
A law firm website wins on clarity and care. Give each practice area a page that answers real questions, keep intake short until the conflict check is done, put every required disclaimer where your rules want it, and make the callback fast. The firm that explains things plainly and answers first usually gets the consultation.`,
    faqs: [
      { q: 'Do you write the legal content?', a: 'I structure the pages and write supporting copy from your notes, and an attorney at the firm reviews anything that describes the law or your services.' },
      { q: 'Can the intake form route to different attorneys?', a: 'Yes. The practice area selected can decide who gets the email notification.' },
      { q: 'Can you follow our state bar advertising rules?', a: 'Yes, as long as you tell me the rules that apply, such as required disclaimers or limits on testimonials, and approve the final copy.' },
      { q: 'How long does a law firm website take?', a: 'A small firm site takes about 14 days and a larger build with a page per practice area about 21 days. Attorney review of the copy is usually what sets the pace.' },
      { q: 'Where do consultation requests go?', a: 'Each request is emailed to the right person and stored in a database that only signed-in staff at the firm can read.' },
      { q: 'Can clients log in to a portal from the site?', a: 'Yes. The simplest route is a login button that opens the client portal in your practice management software.' },
    ],
  },
  {
    slug: 'real-estate-agents',
    name: 'Real estate agents',
    noun: 'real estate business',
    h1: 'Websites for real estate agents and small brokerages',
    metaTitle: 'Real Estate Agent Website Design & Development | Thomas Osayi',
    description: 'Real estate agent websites with neighborhood pages, listing showcases, home valuation requests and lead capture. Custom Next.js builds from LA.',
    intro: 'Buyers and sellers usually find an agent through a referral and then check the website. The site has to confirm that you know the area, show recent work and make it easy to start a conversation, whether that is a showing request or a home valuation.',
    mustHaves: [
      { title: 'Neighborhood pages', text: 'Pages for the areas you actually work, with what living there is like, typical homes and your recent activity. These are the pages that rank.' },
      { title: 'Listing showcase', text: 'Your current and sold listings with large photos. Full MLS search can be added through an IDX provider your board approves.' },
      { title: 'Home valuation request', text: 'A short form for the address and the owner\'s plans, a strong lead source for sellers.' },
      { title: 'Personal brand front and center', text: 'Your photo, story and how you work. People hire an agent, not a template.' },
      { title: 'Fast contact on mobile', text: 'Tap to call, tap to text and a short form reachable with a thumb.' },
    ],
    mistakes: [
      'A brokerage template identical to every other agent at the office',
      'Neighborhood pages copied from generic sources with nothing local in them',
      'Listing photos compressed until they look worse than on Zillow',
      'No clear way for a seller to ask what their home is worth',
    ],
    related: ['vencare', 'new-york-nook'],
    service: 'nextjs-website-development',
    packageHint: 'An agent site with a few neighborhood pages fits the Business Site package. IDX search, many areas or a team site make it a Full Custom Build.',
    guide: `## Do I need IDX, and how does it actually work?
Not always. IDX is the arrangement that lets a broker's or agent's website display listings from the MLS, and it comes with rules, a vendor and a monthly bill. It is worth understanding before deciding.
The MLS does not hand listing data to individual websites directly in most cases. An IDX provider, such as IDX Broker, Showcase IDX or iHomefinder, holds the data agreement, keeps the listings in sync and gives you search pages, map search and saved searches. Your broker usually has to approve the request, and the MLS sets display rules: which fields may be shown, how the listing brokerage is credited and how often data must refresh.
On a custom site the provider's search arrives in one of two ways. Either it is embedded as widgets inside your pages, or it lives on a subdomain styled to match. Both work. Widgets keep people on your pages, while the subdomain is simpler and tends to break less.
The honest question is whether visitors will search on your site at all, when most buyers already have a portal app on their phone. IDX earns its fee when you use it to capture and keep clients: saved searches, listing alerts with your name on them and neighborhood pages that show live inventory. If you would not use those, a hand-picked set of your own listings does the job for much less.
## What makes a neighborhood page rank and win a client?
Detail that could only come from someone who works those streets. Neighborhood pages are on the must-have list above, and the mistake list warns against generic text. This is what the opposite looks like.
### What to put on each page
- Where the neighborhood starts and ends, as locals would draw it
- The housing stock: eras, typical lot sizes, condos against single family, what a first-time buyer can realistically find
- What a normal day involves: the commute, parking, the school options, the coffee place people actually walk to
- What has changed in the past few years, and what is planned
- Your own activity there: homes sold, with photos you have the right to use
- A short note on what sellers there should fix before listing, and what they should not bother with
Write it yourself or dictate it. Ten minutes of you talking about an area into your phone gives me more than any data source, and it is the part no other site has. Keep the pages to areas you really work. Five strong pages beat thirty thin ones, both for search and for the reader.
## How should a home valuation request work?
As a short form that leads to a real opinion from you, not an instant number. Automated estimates are everywhere and sellers know how rough they are. What an agent's site can offer is a person who will look at the house.
The flow:
- Step one asks only for the address. One field feels effortless, and the address is the thing you most need.
- Step two asks for a name, a phone number or email, and when they are thinking of selling: now, this year or just curious.
- The confirmation says exactly what happens next, for example that you will send a written price range within one business day.
- You get a text and an email at once, with the address linked to a map.
Splitting the form in two matters. Someone who typed their address has started, and people tend to finish what they have started. The timing question matters as much, because just curious and selling this spring deserve different follow-up. Do not gate the request behind a promise of an instant figure that then fails to appear. That is the fastest way to lose a seller's trust.
> Answer valuation requests the same day, even if the full analysis comes later. A two-line reply saying you have the address and will send the range tomorrow is often what separates you from the other agents who got the same inquiry.
## What rules apply to an agent's website?
A few, and they come from your state, your broker and your MLS, not from me. In general terms:
- Brokerage identification. States commonly require the supervising brokerage's name to appear clearly on an agent's advertising, and some, California among them, also require your license number on it. I put both in the footer of every page and near your name.
- Fair housing. Describe the property and the area's features, not the kind of people who live there or who would suit it. That applies to neighborhood pages as much as to listings.
- MLS display rules. Sold data, listing photos and other agents' listings each come with conditions on where and how they may appear.
- Photo rights. Listing photos normally belong to the photographer, and your licence may not cover reuse after the listing closes. Check before building a sold gallery.
- Brokerage policy. Many brokerages want to approve an agent's site before launch.
This is general information and not legal advice. Send your broker the draft site before it goes live. It takes them ten minutes and it protects your license.
## Where do leads go after someone fills in a form?
Straight into the tool where you already follow up, and to your phone at the same moment. A website lead that sits in an email inbox until evening is usually gone.
Most real estate CRMs can accept a new lead either through a connection I set up between the form and the CRM, or through a special email address that reads incoming lead emails. Either way the showing request or valuation request should arrive tagged with its source and the page it came from, so you can see whether the neighborhood page for one area is producing sellers and the others are not.
Two smaller details pay off. Every form gets a text alert to your phone as well as an email. And every listing page carries its own contact form that includes the property address automatically, so you never have to ask which house they meant.
## What should I have ready before the build?
A short kit, most of which you already have for listing presentations.
- A professional headshot and a few photos of you at work in the area
- Your story in your own words, even as rough notes: why this area, how you work, who you are a good fit for
- A list of the neighborhoods you want pages for, in priority order
- Sold and current listings with photos you are cleared to use
- Reviews you have permission to quote, with names
- Your broker's advertising requirements and logo files
- Logins for the domain, your CRM and your IDX provider if you have one
## Which package fits, and what does it cost to run?
A personal site with a home page, an about page, a few neighborhood pages, featured listings and a valuation form fits the Business Site package, from $450 and about 14 days. Add IDX search, an editor for listings, many neighborhoods or a team with several agent profiles and it is a Full Custom Build, from $1,200 and about 21 days.
I have not built an agent site yet, so there is no real estate project in my portfolio to point at. What carries over from the work I have done is fast image-heavy pages and short forms that notify the owner at once, both of which I built for New York Nook, a restaurant site with reservations and pickup ordering.
After launch, hosting on Vercel is free or close to it for most small business sites. The recurring costs are your domain, your CRM and the IDX provider if you use one, which bills monthly and sometimes passes on an MLS fee. Ask the provider for the full figure before you commit.
## When is the brokerage template enough?
When you are in your first year, when your business is almost entirely referral, or when you may change brokerages soon. The template costs nothing extra, has IDX built in and is approved by default. Its weakness is that it looks like every colleague's site and usually leaves with the brokerage if you move.
A reasonable middle path is to own a domain in your own name from day one and point it at the template. When you are ready for a custom site, the address on your signs and cards does not change, and neither does the search history attached to it.
## The bottom line
An agent's website confirms a referral more often than it creates one, so build it for the person who was just handed your name. Show that you know specific streets, make the valuation request effortless, send every lead to your phone at once and keep your broker's rules visible on every page. Decide on IDX by whether you will use what it captures, not because every other site has it.`,
    faqs: [
      { q: 'Can my website show MLS listings?', a: 'Yes, through an IDX provider approved by your MLS. I integrate the provider you choose into the site.' },
      { q: 'Can I add my own listings without a developer?', a: 'Yes. Featured listings can live in a simple editor where you add photos, price and details.' },
      { q: 'Will neighborhood pages help me rank?', a: 'They can, when each page has real local knowledge and your own activity in that area rather than generic text.' },
      { q: 'Do I need IDX on my website?', a: 'Only if you will use saved searches and listing alerts to capture and keep clients. Otherwise a hand-picked set of your own listings is cheaper and simpler.' },
      { q: 'Can form leads go into my CRM?', a: 'Yes. Most real estate CRMs accept website leads through a direct connection or a lead email address, and I also send a text alert to your phone.' },
      { q: 'Can I keep the site if I change brokerages?', a: 'Yes. You own the domain, the code and the content, so only the brokerage name, logo and license details need updating.' },
    ],
  },
  {
    slug: 'gyms-and-fitness-studios',
    name: 'Gyms and fitness studios',
    noun: 'gym or studio',
    h1: 'Websites for gyms, fitness studios and trainers',
    metaTitle: 'Gym & Fitness Studio Website Design & Development | Thomas Osayi',
    description: 'Fitness studio and gym websites with class schedules, membership pricing, trial sign-ups and booking. Fast, custom Next.js sites by a Los Angeles developer.',
    intro: 'People choose a gym or studio by location, schedule, price and vibe, usually on their phone. The site should show the class schedule, what a membership costs and how to try a first class, in that order, and look like the energy of the room.',
    mustHaves: [
      { title: 'Class schedule people can read on a phone', text: 'Pulled from your booking software or kept in one editable place, never a screenshot of a spreadsheet.' },
      { title: 'Clear membership pricing', text: 'Drop-in, class packs and memberships side by side. Hiding prices sends people to the gym that shows them.' },
      { title: 'A first-class or trial offer', text: 'One obvious call to action for new people, with what to bring and what to expect.' },
      { title: 'Coach profiles', text: 'Photos, specialties and certifications. Many members follow a coach, not a brand.' },
      { title: 'Booking integration', text: 'A link or embed from your existing booking and membership system so classes are reserved in one place.' },
    ],
    mistakes: [
      'A schedule posted as an image that is out of date by next week',
      'No prices anywhere on the site',
      'A home page video that takes ten seconds to load on mobile data',
      'Three different calls to action fighting for attention on the first screen',
    ],
    related: ['astiglow', 'thehoopgang'],
    service: 'nextjs-website-development',
    packageHint: 'Most studios fit the Business Site package. Multiple locations or custom member features make it a Full Custom Build.',
    guide: `## How does the class schedule get from the booking software onto the site?
There are three routes, and the right one depends on what your membership software exposes. Studio platforms such as Mindbody, Mariana Tek, Glofox, PushPress, Zen Planner and Wodify all keep the real schedule. The website's job is to show it without a second copy that drifts.
- The vendor's widget. Most platforms give you a snippet that drops a live schedule into a page. It is always current and booking works straight away. The cost is control: it loads after the rest of the page and its styling only bends so far.
- The vendor's data feed. Some platforms let a developer read the schedule and draw it natively, so it loads with the page and matches the brand. Booking still hands off to the platform. Access varies by vendor and plan, so I check before promising it.
- An editor on the site. For a trainer or a small studio with a stable weekly timetable, a simple editable schedule with a book button per class is enough.
### When the widget misbehaves
The usual symptom is a member who logs in inside the embedded schedule and is bounced back to the login screen. Embedded widgets sit in a frame from another domain, and browsers that block third-party cookies can drop the session. The fix is to show the schedule on your page but open the booking step on the vendor's own hosted page.
## What should the path from first visit to first class look like?
One offer, one button, and no account creation until the visitor has picked a class. The must-have list above says to have a trial offer. The part that decides whether it works is the handful of steps after the tap.
- The button names the offer: first class free, or one week for a set price. Not get started.
- It opens the schedule filtered to classes suitable for beginners, not the full timetable.
- The person picks a class, then gives a name, email and phone number. If your platform insists on an account, this is where it happens, and it should be the platform's shortest form.
- The waiver is signed online in the same flow, so the first five minutes at the front desk are a welcome and not a clipboard.
- The confirmation says where to park, when to arrive, what to bring and who will be coaching.
Then the follow-up, which most studios leave to chance: a reminder the evening before and a message the day after with the offer that turns a trial into a membership. Most platforms can send both automatically once someone sets them up.
> Test the whole trial flow on your own phone over mobile data, as a brand new person, once a month. Platform updates, expired promo codes and renamed class types break it quietly, and nobody inside the gym notices because staff never book as a stranger.
## How do people search for a gym or studio?
By the kind of training plus where they are, and they judge the results on distance and hours before anything else. Typical searches are a class type and a neighborhood, a gym near me that is open now, a drop-in rate for a visitor in town for a week, or a personal trainer for a specific goal such as training after an injury or before a wedding.
What the site can do about it:
- A page per discipline. Yoga, strength, boxing and beginner classes each get a page with who it suits, what a session looks like and when it runs.
- A page per location, with its own address, hours, parking and photos of that room.
- Hours and holiday closures that match the Google Business Profile exactly. People act on the profile without ever opening the site, and a wrong closing time costs a visit.
- A drop-in and visitor section. Travelers search for it by name, and many gym sites never mention it.
- Local business schema, so search engines read address, hours and price range as data.
Photos on the profile and the site should be of the real room at a real class. People are trying to picture themselves in it.
## How should memberships and contracts be explained?
Completely, before the checkout page. Showing prices is already on the list above. The step beyond a price table is stating the terms that cause arguments later, in plain words next to each option.
For every membership, say:
- The price and how often it is charged
- Whether there is a minimum commitment and how long
- How to cancel or freeze, and how much notice is needed
- What is included: classes per week, open gym, guest passes
- When unused class packs expire
Automatically renewing memberships are regulated in many states, with rules about how clearly the renewal terms are presented and how easy cancelling has to be. I am not giving legal advice, and you should check what applies where you operate. As a matter of plain good practice, the terms a member agrees to at checkout should be the same ones they could read on the pricing page without signing up.
Clear terms sell. The person comparing two studios trusts the one that says how to cancel.
## What is different for a personal trainer or a very small studio?
Almost everything about scale, and nothing about the principles. A trainer does not need a timetable or a member app. The site has four jobs: say who you train and for what goal, show proof, publish what it costs and let someone book a consultation.
- Proof for a trainer is client stories with permission, a name and a specific result, plus certifications listed with the body that issued them.
- Booking can be a scheduling link for a free consultation, with two or three questions about goals and injuries kept general.
- Payment for session packs can go through Stripe checkout without any membership platform at all.
- Service area matters. If you train people at home or in a particular park or gym, name the neighborhoods.
That is a one-page site in many cases, which is what the Starter Site package is for.
## How do I show the energy of the room without a slow page?
With a few strong photos and one short, well-prepared video, not an autoplaying file straight off a phone. The mistake list above mentions the ten second video load. Here is what fixes it.
- A still image shows first, so there is never a blank screen.
- The clip is short, muted, looped and compressed to a few megabytes, with a smaller version for phones.
- Everything below the first screen loads only as the visitor scrolls to it.
- Photos are resized for each screen by the framework and not uploaded at camera size.
- A live social feed embed is replaced by a hand-picked gallery, which looks better and loads faster.
Astiglow, a waxing studio site I built with online booking and service packages, is the closest example in my portfolio to a fitness studio: a calm, light page where services, prices and the booking action are always within reach. I have not built a gym site, so that is the honest comparison.
## Which package fits, and what does it cost afterward?
- Starter Site, from $150 and about 7 days: a one-page site for a trainer or a new studio, with offer, prices, proof and a booking link.
- Business Site, from $450 and about 14 days: up to five pages with the schedule embedded, pricing, coaches, trial flow and local SEO setup. This is where most single-location studios land.
- Full Custom Build, from $1,200 and about 21 days: several locations, a natively drawn schedule from the platform's data, an editor for staff or member-only features.
After launch, hosting on Vercel is free or close to it for most small business sites. Your recurring costs are the domain and the membership platform you already pay for. Budget an hour a month of someone's time to check prices, coaches and the trial flow.
One case where I would say do not build custom yet: a studio in its first months whose platform includes a hosted site or branded page. Use that, learn which classes fill, then build once you know what the site needs to say.
## The bottom line
A gym site is read on a phone by someone deciding whether to show up this week. Keep one live schedule, one clear first-class offer, full prices with their terms, and real photos of the room. Then book a class as a stranger every month to make sure the path still works.`,
    faqs: [
      { q: 'Can you connect our booking software?', a: 'Yes. I link or embed the schedule and booking tools your membership software provides so members book in one place.' },
      { q: 'Can we update the schedule ourselves?', a: 'Yes. Either it updates automatically from your booking system or it lives in a simple editor you control.' },
      { q: 'Can the site sell class packs online?', a: 'Yes, through your booking system or with Stripe checkout for simple packs and memberships.' },
      { q: 'Do we need to switch membership platforms?', a: 'No. The site shows the schedule and hands booking to the platform you already use.' },
      { q: 'Is a one-page site enough for a personal trainer?', a: 'Often yes. Who you train, proof, prices and a consultation booking link fit on one page, which is the Starter Site package.' },
      { q: 'Can new members sign the waiver online?', a: 'Yes, where your membership platform or a waiver tool supports it, the waiver is linked into the trial booking flow.' },
    ],
  },
  {
    slug: 'ecommerce-brands',
    name: 'Ecommerce brands',
    noun: 'brand',
    h1: 'Custom storefronts and tools for ecommerce brands',
    metaTitle: 'Ecommerce Website & Shopify Developer for DTC Brands | Thomas Osayi',
    description: 'Custom Next.js storefronts on Shopify, landing pages and brand tools like creator portals and wholesale forms, built by the founder of SQWAD.',
    intro: 'A growing brand usually outgrows its theme in one of two ways: the store gets slow under a pile of apps, or the brand needs a tool no app does well. I build fast storefronts on top of Shopify and custom tools beside it, such as creator portals, landing pages for campaigns and wholesale order forms.',
    mustHaves: [
      { title: 'Fast product pages', text: 'Product pages that load quickly on phones, with large images and the details people check before buying.' },
      { title: 'Campaign landing pages', text: 'Pages built for a specific ad or creator campaign, so paid traffic lands on a matching message instead of the home page.' },
      { title: 'Shopify for checkout and orders', text: 'Checkout, payments, inventory and fulfillment stay in Shopify. The custom frontend only changes what customers see.' },
      { title: 'Creator and affiliate tools', text: 'Portals where creators apply, receive product, submit content and get paid, tied to real sales.' },
      { title: 'Analytics that answer real questions', text: 'Which page, campaign or creator drove a sale, not just page views.' },
    ],
    mistakes: [
      'Stacking a new app for every feature until the store crawls on mobile',
      'Sending all paid traffic to the home page',
      'Running creator programs in spreadsheets and DMs with no link to sales',
      'Rebuilding checkout from scratch instead of using Shopify\'s',
    ],
    related: ['sqwad', 'thehoopgang'],
    service: 'saas-mvp-development',
    packageHint: 'Landing pages fit the Starter or Business Site package. A custom storefront or a brand portal is a Full Custom Build or a SaaS project.',
    guide: `## What is a headless Shopify storefront, step by step?
It is a separate website that reads your products from Shopify and sends the customer back to Shopify to pay. Nothing about your admin, inventory, orders or fulfillment changes. Only the part the shopper browses is replaced.
The path of one order looks like this:
- A shopper opens a product page. That page is built in Next.js and gets the title, images, variants, price and stock from Shopify through its Storefront API.
- They add to cart. The cart is also created in Shopify through the same API, so discounts and inventory rules still apply.
- They press checkout. The site sends them to Shopify's own checkout, usually on a subdomain of your domain, where payment, tax and shipping are handled exactly as today.
- The order appears in your Shopify admin like any other.
What you gain is control over speed and layout. Pages can be pre-built and served from a global network, and the design is not limited to what a theme's sections allow. Shopify publishes its own React framework for this, called Hydrogen. I build in Next.js because it is the stack I use for everything else, so a storefront, a campaign page and a brand portal can share one codebase and one design system.
## What breaks when a store goes headless?
Everything that worked by injecting code into the theme. This is the part sales pages for headless leave out, and it decides whether the project is a good idea.
- Theme apps. Reviews widgets, upsell popups, bundle builders, subscription selectors and size charts that install into a theme do not appear on a custom frontend by themselves. Each needs an integration through that app's API, a replacement, or a decision to drop it.
- The theme editor. Your team can no longer drag sections around in Shopify's customizer. If marketing changes the home page weekly, the build needs an editor or a content system for those areas.
- Tracking. The Meta pixel, analytics and email platform events that an app set up automatically have to be wired again by hand and tested with a real purchase.
- Search and filtering. Collection filters and site search need to be rebuilt against the API.
- Redirects and URLs. Old product and collection addresses must keep working or redirect, or search rankings and old ad links suffer.
Make a list of every app you use and mark each one keep, replace or remove before any design work starts. That list is the real scope of the project.
## Should I fix my theme before paying for a rebuild?
Yes, in most cases, because a theme cleanup is cheaper and tells you whether a rebuild is needed at all. The mistake list above mentions app stacking. This is how to check what it is costing you.
### A one-hour audit you can do yourself
- Test a product page, not the home page, on a mid-range phone. Product pages are where paid traffic lands and where apps pile up.
- Open the app list and note every app nobody has used in three months.
- Uninstalling an app does not always remove the code it added to the theme. Leftover snippets still load on every page.
- Look at image sizes. A hero image uploaded at camera resolution can outweigh the rest of the page.
- Count the popups, chat bubbles and bars that load on first view.
If removing dead apps and fixing images gets the product page loading quickly, stop there. A rebuild is justified when the store still crawls after cleanup, when the design you want is impossible in the theme, or when the same brand needs a storefront, landing pages and a portal that should feel like one product.
> Before any speed work, record a video of your own product page loading on a phone over mobile data. It is the most persuasive before and after you will ever have, and it shows the problem to a team in a way a score never does.
## How do campaign landing pages work alongside Shopify?
As standalone pages that hand off to checkout with the right product and discount already in the cart. A campaign page does not need to be a Shopify page at all. It needs to load fast, match the ad or the creator's video word for word, and make buying one tap.
In practice:
- The page lives on your domain, at a path or subdomain made for the campaign.
- The buy button opens Shopify with the chosen variant in the cart and the campaign discount applied, so the shopper never hunts for a code field.
- The tracking parameters from the ad travel with the click, so the sale is credited to the right campaign or creator.
- When the campaign ends, the page redirects to the product instead of dying.
This is the cheapest useful thing a brand can buy from a developer. A single campaign page fits the Starter Site package, from $150 and about 7 days, and a set of pages sharing one layout fits the Business Site package, from $450 and about 14 days. No replatforming is involved, so nothing in the store is at risk.
## When does a brand need its own creator portal?
When the way you reward, approve or track creators is unusual enough that standard software forces workarounds. Most brands should start with existing creator program software, because applications, product seeding, content tracking and payouts are already built. I say that as the founder of one: SQWAD is my own SaaS for Shopify brands, and it tracks more than $500K in creator-driven sales.
A custom portal earns its cost when the program has a mechanic of its own. TheHoopGang, a basketball streetwear brand, runs refundable gear gifting: creators claim gear, submit content and are refunded once they post. The portal I built for them manages 50+ creators, with one status per creator from application received to content completed.
![TheHoopGang creator dashboard: status, videos posted, the chosen product and a journey timeline from application to completed content.](/images/hoopgang/creator-dashboard.png)
SCOPRO, a coaching board brand, has a different rule set: buy, post one video, get refunded, then earn on sales. That is a second example of a program defined by its own steps.
![The SCOPRO creator portal for a coaching board brand: buy, post one video, get refunded, earn on sales.](/work/scopro.jpg)
One rule applies to any creator program, built or bought. Creators who receive free product or payment generally have to disclose that in their content, so put the disclosure requirement in the terms creators accept when they apply. That is general information, not legal advice.
## How does a wholesale order form fit in?
As a private page for approved retailers that turns an order into a draft in Shopify for you to confirm. Shopify has its own wholesale features on its higher plans. Many smaller brands do not need that much. They need a retailer to stop emailing a spreadsheet.
A simple version works like this:
- A retailer applies with a business name and resale details, and you approve them.
- They log in and see a grid of products with wholesale prices, case sizes and minimums.
- They enter quantities and submit.
- The order arrives in your Shopify admin as a draft order with the right prices, ready to adjust, invoice and fulfill.
Inventory stays in one place and the order history lives with every other order. The custom part is small: the login, the price list and the form.
## Which package fits which job, and how long does it take?
The work splits across two of my services, so here is the whole map with the listed starting prices.
- One campaign landing page: Starter Site, from $150, about 7 days.
- Several landing pages or a small brand site: Business Site, from $450, about 14 days.
- A custom storefront on Shopify, or a wholesale order area: Full Custom Build, from $1,200, about 21 days.
- A working first version of one portal workflow, such as creator applications and approvals: MVP Starter, from $250, about 7 days.
- A portal with sign-in, dashboards, a database and payments: SaaS MVP, from $1,200, about 21 days.
- A multi-role platform with admin tools and integrations: Full SaaS Platform, from $3,000, about 45 days.
After launch a custom frontend adds hosting and, for portals, a database to your running costs, on top of the Shopify plan you already pay. It also adds a dependency on a developer for changes a theme would have let you make yourself. Count that honestly when comparing against a theme.
## The bottom line
Keep Shopify for money and orders, and be deliberate about everything in front of it. Clean the theme before replacing it, send paid traffic to pages built for the campaign, and buy software for a standard creator program before commissioning a portal. Build custom where your brand does something no app expects, and write the app list first so you know what the build really includes.`,
    faqs: [
      { q: 'Do I have to leave Shopify?', a: 'No. A headless storefront keeps Shopify for products, checkout and orders and only replaces what customers see.' },
      { q: 'Can you build a creator or affiliate portal?', a: 'Yes. I built SQWAD, a SaaS platform for brand creator programs, and a creator portal for TheHoopGang that manages 50+ creators.' },
      { q: 'Can you make my current Shopify theme faster?', a: 'Often yes, by removing unused apps and scripts and fixing image sizes. Sometimes a custom storefront is the cleaner fix.' },
      { q: 'Will my Shopify apps still work on a headless storefront?', a: 'Apps that run in the admin keep working. Apps that add widgets to the theme need to be connected through their API, replaced or dropped.' },
      { q: 'Can a landing page send shoppers straight to checkout?', a: 'Yes. The buy button can open Shopify with the product in the cart and the campaign discount already applied.' },
      { q: 'How long does a custom storefront take?', a: 'A Full Custom Build takes about 21 days, and the number of theme apps that need replacing is what moves that most.' },
    ],
  },
  {
    slug: 'print-shops-and-manufacturers',
    name: 'Print shops and manufacturers',
    noun: 'shop',
    h1: 'Websites and quote tools for print shops and manufacturers',
    metaTitle: 'Print Shop & Manufacturer Website with Quote Tool | Thomas Osayi',
    description: 'Websites for commercial printers and small manufacturers with structured quote requests, product pages, file uploads and quote management tools.',
    intro: 'For a print shop or small manufacturer, every job starts with a quote, and most quotes start with an incomplete email. A good site shows what you make, then collects the exact specs you need to price a job: quantities, sizes, materials, deadlines and files.',
    mustHaves: [
      { title: 'A quote form built around your specs', text: 'Different fields per product type, so a business card order and a banner order each ask the right questions.' },
      { title: 'File uploads', text: 'Artwork and drawings attached to the request, with accepted formats listed up front.' },
      { title: 'Product and capability pages', text: 'A page per product or process, with photos of real work, sizes, materials and typical turnaround.' },
      { title: 'Quote management', text: 'A simple internal dashboard to track each request from new to quoted to won, instead of an inbox.' },
      { title: 'Local and B2B trust signals', text: 'Years in business, industries served, address and certifications, all consistent with your Google Business Profile.' },
    ],
    mistakes: [
      'A one-line contact form that leads to five rounds of questions',
      'No file upload, so artwork arrives later in a different email thread',
      'Capabilities described in vague terms with no photos of actual jobs',
      'Quotes tracked only in someone\'s inbox',
    ],
    related: ['artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A site with a structured quote form fits the Business Site package. Quote management dashboards and product configurators are a Full Custom Build.',
    guide: `## How does a quote request travel from the form to a price?
In six steps, and the website is responsible for the first five. I built this flow for Artistic Printing, a commercial printer in Los Angeles, as a website with a quote intake and management tool behind it.
- The customer chooses what they need from a list of your products or processes.
- The form shows the fields for that choice and nothing else.
- They attach artwork or drawings, which upload while they finish the form.
- On submit, the request is saved as a record with every field in its own place, and the customer sees a confirmation with a reference and an honest response time.
- The estimator gets an email with a link to the record, not a wall of pasted text.
- The estimator prices the job, sends the quote and moves the record to quoted.
![The Artistic Printing website, built with a structured quote request and a quote management tool for the shop.](/work/fiverr/artistic.jpg)
The record is what changes the shop's day. Every request has the same fields in the same order, so comparing a new job with a similar old one takes seconds. A status on each record, new, quoted, won or lost, also answers a question an inbox cannot: how many quotes went out last month and how many came back as orders.
## Which fields should each product ask for?
Only the ones that change the price, worded the way the customer would say them. The must-have list above says each product type gets its own fields. Here is what that looks like for three very different jobs.
### Business cards and small format print
- Quantity, offered as the breaks you actually price at
- Finished size, with the standard size preselected
- Paper stock and finish from a short list, with an option for not sure
- One or two sides, and color or black only
- Deadline, and delivery or pickup
### Banners and large format
- Width and height, with the unit stated
- Material, and indoor or outdoor use
- Finishing: hems, grommets, pole pockets
- Quantity, and whether installation is needed
### Machined or fabricated parts
- Material and grade
- Quantity, plus the annual volume if this is a repeat part
- Tolerances and finish, or simply per the drawing
- Drawing or model file, with the formats you accept listed, such as PDF, DXF or STEP
- Whether material is supplied and whether certifications are required
Every list should end with a notes box that is optional. The option of not sure matters more than it looks. A buyer who does not know paper weights will abandon a form that demands one, and the estimator would rather recommend a stock than lose the request.
## How do large artwork files get from the customer to the shop?
The browser sends them directly to cloud storage, and the quote record carries a link. Email is the wrong pipe for print files. Gmail, for example, limits attachments to 25 MB at the time of writing, and a print-ready banner file passes that easily.
What a well built upload does:
- Shows a progress bar per file, so a customer on office wifi knows a 300 MB file is still moving
- Accepts several files at once and lets the customer remove one before submitting
- Checks the file type against a list you choose, and rejects anything else with a clear message
- Sets a size ceiling and says what it is next to the button
- Keeps files private, readable only by signed-in staff through the quote record
### Failure cases worth designing for
- The upload stalls and the customer submits anyway. The form should block submit until uploads finish, or save the request and flag that a file is missing.
- The customer has no file yet. Let them say artwork to follow, so the request is not lost.
- The file is the wrong kind, such as a low resolution screenshot of a logo. A line of guidance beside the upload about preferred formats prevents many of these.
## Should the site show prices or an instant calculator?
Show instant prices only for work that is truly standard, and use starting prices or a quote form for the rest. The deciding question is whether your own estimator prices the job from a table or from judgment.
- Priced from a table. Business cards, flyers and standard banners at fixed sizes can have a calculator: the customer picks options and sees a price. It needs a price table you maintain, and it has to be right every time, because a customer will hold you to a number the website gave them.
- Priced from judgment. Custom fabrication, unusual finishing and anything depending on a drawing should not pretend to be instant. A fast, complete quote request serves both sides better.
- The middle ground. Publish a starting price or a typical range with what moves it. It filters out buyers whose budget is far off and costs you nothing in accuracy.
A calculator or product configurator is the kind of feature that moves a project into the Full Custom Build package. I would add it after the quote form has run for a few months, because the requests you receive will show which products are standard enough to automate.
## How do buyers search for a printer or a manufacturer?
With a capability and a place, or with a specification. Walk-in and small business customers type things like same day banner printing and a city name. Purchasing managers and engineers type the process and the material, a part type, or a certification they are required to source against.
That splits the content into two kinds of pages:
- Product pages for the local buyer: what it is, sizes, turnaround, a photo of a finished job and a button into the quote form with that product already selected.
- Capability pages for the trade buyer: the process, the equipment by make and model, maximum sizes, materials, tolerances held, and industries served.
An equipment list reads as dull to the owner and as proof to an engineer. List certifications only if you hold them, with the current certificate available on request. Keep the address, phone and hours identical to the Google Business Profile, and add photos of the shop floor to both. A buyer choosing a supplier wants to see that the place is real.
> Photograph every job worth showing before it leaves the building, with one wide shot and one close detail. Six months of that habit gives you a better gallery than any photo shoot, and each photo belongs on the page for that product.
## What should the shop prepare, and which package fits?
The most valuable preparation is one conversation with whoever prices the work, listing what they ask every customer. The rest is quick to gather:
- Your products and processes, grouped the way customers think of them
- Accepted file formats and any artwork guidelines you already send out
- Photos of finished work and of the shop
- Standard turnaround times you are willing to publish
- Who receives quote requests and who covers for them
A site with product pages and a structured quote form that emails the estimator fits the Business Site package, from $450 and about 14 days. Adding the quote management dashboard, staff sign-in, file storage and per-product field sets makes it a Full Custom Build, from $1,200 and about 21 days.
Running costs after launch are small. Hosting on Vercel is free or close to it for most small business sites, and the database and file storage are billed by usage, which for a shop's quote volume is modest. Decide how long to keep uploaded files, because storage is the one cost that grows if nothing is ever deleted.
## What can grow out of the quote tool later, and when is custom the wrong call?
Scheduling and job tracking are the natural next steps, and they can be added to the same site. Once quotes are records, a won quote can become a job with a due date. FieldOps, a job scheduling app I built with Outlook Calendar sync for field teams, shows that next layer: jobs on a calendar the team already uses.
![FieldOps, a job scheduling app with Outlook Calendar sync for field teams.](/work/fieldops.jpg)
Custom is the wrong call in two situations. If your shop already runs a print management or ERP system that includes a customer portal or online ordering, connect the website to that and do not build a second place where quotes live. And if nearly all your work is standard products ordered repeatedly, a web-to-print storefront product may fit better than a quote form.
## The bottom line
For a print shop or manufacturer, the form is the product. Ask for the specs that set the price, take the files in the same step, store each request as a record with a status, and show buyers real work and real equipment. Start with the site and the form, then add the dashboard, calculator or scheduling when the requests show you need them.`,
    faqs: [
      { q: 'Can the quote form change by product?', a: 'Yes. Each product type can have its own fields, and the request arrives with everything needed to price it.' },
      { q: 'Can customers upload large files?', a: 'Yes. Files go to cloud storage and arrive as links with the request, so email size limits do not matter.' },
      { q: 'Have you built this before?', a: 'Yes. I built the website and quote management tool for Artistic Printing, a commercial printer in Los Angeles.' },
      { q: 'Can the website give instant prices?', a: 'Yes, for standard products priced from a table. Custom work is better served by a complete quote request than by a calculator.' },
      { q: 'Who can see the files customers upload?', a: 'Only signed-in staff. Files are stored privately and opened through the quote record.' },
      { q: 'Can the quote tool connect to our existing shop software?', a: 'Often, if that software accepts data from outside. If it already has its own customer portal, I link the site to that instead.' },
    ],
  },
  {
    slug: 'nonprofits',
    name: 'Nonprofits',
    noun: 'nonprofit',
    h1: 'Websites for nonprofits that drive donations and volunteers',
    metaTitle: 'Nonprofit Website Design & Development | Thomas Osayi',
    description: 'Nonprofit websites with donation flows, volunteer sign-ups, impact stories and event pages. Fast, accessible Next.js sites that are easy to update.',
    intro: 'A nonprofit site serves several audiences at once: donors, volunteers, the people you serve and partners. Each needs a clear path. The best sites tell the mission in a sentence, show real impact and make giving or signing up take under a minute.',
    mustHaves: [
      { title: 'A simple donation flow', text: 'One-time and monthly giving through your donation platform or Stripe, in as few steps as possible.' },
      { title: 'Volunteer sign-up', text: 'Roles, time commitment and a short form, connected to the tool you already use to coordinate volunteers.' },
      { title: 'Impact told with real stories', text: 'Specific people, numbers you can stand behind and photos from your actual programs.' },
      { title: 'Accessibility', text: 'Readable contrast, keyboard navigation and alt text, so everyone you serve can use the site.' },
      { title: 'Easy updates', text: 'Events, news and program pages your staff can edit without a developer.' },
    ],
    mistakes: [
      'A donate button that leads to a slow, confusing third-party page',
      'Mission statements full of jargon instead of plain language',
      'Event pages that stay up long after the event',
      'No way for staff to update content without paying for every change',
    ],
    related: ['vencare'],
    service: 'nextjs-website-development',
    packageHint: 'Most nonprofit sites fit the Business Site package. Custom donation logic, member areas or program portals make it a Full Custom Build.',
    guide: `## Should donations run through a platform or straight through Stripe?
Use a donation platform if you want donor records and receipts handled for you, and Stripe directly only if your giving is simple and someone will manage the records. The choice is less about the website than about who does the bookkeeping afterwards.
### A donation platform
Products such as Givebutter, Donorbox, Classy and Give Lively provide the form, process the card, email the receipt, manage monthly gifts and keep a donor list. On the site they appear as an embedded form or a button to a hosted page. Before choosing, ask each one three things: what the platform fee is, what the card processing fee is, and whether donors are asked to add a tip to the platform at checkout. That last point changes what your donor sees, so try a real gift yourself.
### Stripe directly
A Stripe checkout for one-time and monthly gifts is clean and fast, and it keeps the donor on a page that looks like yours. What it does not give you is a donor database or a year-end giving summary. Someone has to export the payments and keep the records. At the time of writing, Stripe offers discounted processing to eligible nonprofits that apply for it, so ask.
My default advice is the platform, embedded in a page I build around it, unless the organization already has a system for donor records.
## What makes a donation page work?
Fewer decisions. The must-have list above asks for a simple flow, and the mistake list warns about slow third-party pages. These are the specific choices that make the difference.
- Three or four preset amounts, each tied to something concrete it pays for, with the middle one preselected
- A visible choice between one-time and monthly, with a line on what steady monthly giving makes possible
- Only the fields the payment and the receipt need. Every optional question about how they heard of you can wait for the thank-you email.
- Wallet payments such as Apple Pay and Google Pay switched on, because typing a card number on a phone is where gifts are abandoned
- No menu full of other places to go once someone is on the donate page
- A thank-you page that says what happens next and offers one further step, such as sharing or signing up to volunteer
The donate button belongs in the header of every page, in a color nothing else on the site uses. A visitor moved by a story on the programs page should not have to scroll back up to look for it.
> Make a small real donation on your own site from a phone every quarter. Card forms break, receipts stop sending and campaign pages expire, and the only reliable way to find out is to give.
## What do receipts and fundraising rules require?
Enough that the donation flow should be designed with them in mind, though the specifics are for your accountant or attorney. In general terms for organizations in the United States:
- Donors need a written acknowledgment from the charity to claim a deduction for a gift of $250 or more, stating the amount and whether anything was received in return. Platform receipts are normally written to cover this. If you take gifts through Stripe directly, check that your own receipt email does.
- Many states require charities to register before asking their residents for donations, and a public donate page can count as asking. Whether and where you need to register is a question for a professional.
- Publishing your legal name, tax-exempt status and EIN in the footer or on the donate page lets donors and grant makers verify you quickly.
- A privacy policy should say what you do with donor details, and it should be true.
I am a developer and this is general information, not legal or tax advice. My job is to make sure the site has the right places for these statements and that receipts are tested before launch.
## What does accessibility mean in practice on a nonprofit site?
It means a person using a keyboard, a screen reader, a magnified screen or a slow old phone can do everything a mouse user can, including donate. The list above names contrast, keyboard navigation and alt text. The parts that are harder, and more often missed, are these.
- Forms. Every field has a real label, errors are described in words next to the field, and the donation and sign-up forms can be completed without a mouse.
- Video. Captions on every video, and a transcript for longer ones.
- Documents. Annual reports and program flyers published as PDFs are often unreadable by screen readers. The key content should also exist as a normal web page.
- Focus. A visible outline shows where the keyboard is, and menus and popups can be closed with the keyboard.
- Language. Plain words, short sentences, and translated pages where the people you serve read another language.
- Embedded tools. A donation or event widget from a third party has to be accessible too, which is worth checking before you commit to a vendor.
Government funders and some grant makers ask for conformance with the WCAG guidelines, commonly at the AA level, and disability law can apply to websites. Treat that as a reason to ask your funder or attorney what you are held to, not as a statement of your obligations.
## How does a small team keep the site current?
By giving staff an editor for the few things that change, and by making stale content expire without anyone remembering. The mistake list above mentions event pages that outlive the event. The fix is structural.
- Every event has an end date, and the day after it the event moves from upcoming to past automatically.
- A campaign banner has a start and end date, so the year-end appeal does not greet visitors in March.
- News, events, staff and board lists are edited in a simple form, not in page layouts that can be broken.
- More than one person has a login, each with their own account.
The second risk in nonprofits is turnover. Sites are regularly locked out because the domain, the hosting or the donation account was registered under a former volunteer's personal email. Before a build I ask for every account to be moved to an address the organization controls, such as a shared role address, with two people holding the recovery details. It is dull work and it is the most important hour of the project.
## Which free and discounted programs should a nonprofit claim first?
A handful of programs cut real costs, and eligibility is usually based on recognised charitable status. At the time of writing:
- Google for Nonprofits includes a no-cost tier of Google Workspace, which gives you email addresses on your own domain. That solves the shared login problem above.
- Google Ad Grants gives eligible nonprofits up to $10,000 a month in search advertising. It only pays off if the site has specific pages for ads to point at, such as a page per program and a clear volunteer page.
- Payment processors, Stripe among them, offer reduced fees to nonprofits that apply.
Hosting for a site like this on Vercel is free or close to it for most small business sites, and the same holds for a typical nonprofit site. The costs that remain are the domain and the fees on donations.
## Which package fits, and when should we not build custom?
Most nonprofits fit the Business Site package, from $450 and about 14 days: up to five pages, typically home, programs, get involved, about and donate, with the donation platform embedded and a volunteer form. A staff editor for events and news, a page per program, translated pages or a member area make it a Full Custom Build, from $1,200 and about 21 days.
I have not built a nonprofit site, so I have no charity project to show. The closest piece of work is the VenCare site, which had to serve two audiences at once, venue operators and investors, with one clear action for the reader it most needed. A nonprofit site has the same shape with more audiences.
Do not build custom if the organization is brand new, has no one to own the site, or raises money through one annual event. A hosted donation page and a simple site builder are enough until there is steady content and a person responsible for it. Board approval also sets the pace of any build, so agree who signs off before work starts.
## The bottom line
A nonprofit site is judged by whether a stranger can understand the mission, trust the organization and give or sign up in a minute, on any device and with any ability. Choose the donation route by who keeps the records, test a real gift regularly, make old content expire by itself, and put every account in the organization's name.`,
    faqs: [
      { q: 'Can you connect our donation platform?', a: 'Yes. I embed or link the platform you use, or set up Stripe for simple one-time and monthly gifts.' },
      { q: 'Can staff update events and news?', a: 'Yes. I add a simple editor for the content that changes most often.' },
      { q: 'Is the site accessible?', a: 'I build to WCAG accessibility guidelines: contrast, headings, keyboard navigation and alt text, and test on real devices.' },
      { q: 'Do donors get a receipt automatically?', a: 'Yes. Donation platforms email one after each gift, and for Stripe I set up a receipt email and test it before launch.' },
      { q: 'How long does a nonprofit website take?', a: 'About 14 days for a Business Site and about 21 days for a Full Custom Build, with board or director sign-off usually setting the pace.' },
      { q: 'Can past events come down automatically?', a: 'Yes. Each event has an end date and moves out of the upcoming list the day after it.' },
    ],
  },
  {
    slug: 'coaches-and-consultants',
    name: 'Coaches and consultants',
    noun: 'coaching or consulting business',
    h1: 'Websites for coaches and consultants',
    metaTitle: 'Coach & Consultant Website Design | Thomas Osayi',
    description: 'Websites for coaches and consultants with clear offers, discovery call booking, case studies and content that builds trust. Custom Next.js builds.',
    intro: 'Clients hire a coach or consultant they trust to solve a specific problem. The website has to make that problem and your approach obvious in the first few seconds, prove it with results, and make booking a discovery call effortless.',
    mustHaves: [
      { title: 'A clear offer', text: 'Who you help, with what, and what working together looks like, stated in one or two sentences on the first screen.' },
      { title: 'Discovery call booking', text: 'Your scheduling link embedded so visitors pick a time without email back and forth.' },
      { title: 'Results and case studies', text: 'Short stories of real clients: where they started, what you did together and what changed.' },
      { title: 'Packages or how to work together', text: 'Programs, workshops or retainers explained side by side, with prices if you publish them.' },
      { title: 'Content that shows expertise', text: 'Articles or guides answering the questions your clients ask, which also bring in search traffic.' },
    ],
    mistakes: [
      'Headlines about you instead of the client\'s problem',
      'Vague offers like "unlock your potential" with no concrete outcome',
      'Testimonials with no names, roles or details',
      'A contact form instead of a booking link, which adds days to every lead',
    ],
    related: ['astiglow', 'vencare'],
    service: 'nextjs-website-development',
    packageHint: 'Most coaches and consultants fit the Starter or Business Site package. Course areas, client portals or paid content make it a Full Custom Build.',
    guide: `## What should happen between a first visit and a booked discovery call?
Five things, in order, and the scheduling embed is only the fourth. A booking link on the page is already on the list above. What fills the calendar with the right people is everything around it.
- The visitor recognises their problem in the headline and sees who you work with.
- They find proof that someone like them got a result.
- They reach a page about the call itself: how long it is, what you will cover, who it is for and who it is not for, and that there is no obligation.
- They pick a time in a scheduling tool such as Calendly, Cal.com or Acuity, embedded in the page, and answer two or three questions.
- They get a confirmation with a calendar invite, a reminder the day before and one thing to think about beforehand.
### The questions that qualify
Ask what they want help with, what they have already tried, and their role or the size of their business. Three questions are enough to prepare, and they quietly screen out people who are not serious. A dozen questions before a free call loses the good prospects too.
### Settings people forget
Show times in the visitor's own time zone, leave a buffer between calls, cap calls per day and require a few hours of notice. A stranger should not be able to book you for ten minutes from now.
## Should I publish my prices?
In most cases yes, at least as a starting figure, because the price question does not go away when you hide it. It just moves to the discovery call, where it costs you thirty minutes per person who could never afford you. The list above says to show prices if you publish them. Here is how to decide.
- Fixed programs, workshops and session packs: publish the price. These are products.
- Retainers and custom engagements: publish a starting point or a typical range, and say what moves it.
- Enterprise or organization-wide work: say that it is scoped per client and describe the smallest engagement you take on.
The common worry is that a number will scare people off. It scares off the people who were going to leave anyway, earlier and at no cost to you. The ones who book after seeing the price arrive already past that objection.
If you sell to both individuals and companies, give each their own page. A founder paying personally and a head of people buying for forty managers read the same price very differently.
## How do I show results without overclaiming?
With specific, permitted, typical stories, and with care about any promise of income or health. The mistake list above covers anonymous testimonials. The other half of the problem is saying more than you can stand behind.
- Get written permission for every name, photo, company and number you publish.
- Describe the starting point, what you did together and what changed. A story is more believable than an adjective.
- If a result was unusual, say so. Consumer protection rules in the United States generally expect testimonials to be genuine and not to imply that an exceptional outcome is what most clients get.
- Business and money coaches should be especially careful with income claims. State what a client did, not what a reader will earn.
- Health, nutrition and wellness coaches should avoid language that sounds like diagnosing or treating a condition unless they hold the licence for it.
- If a client cannot be named, say why in a line, such as a confidentiality agreement, and give the role and the industry.
That is general information and not legal advice. As a practical rule, if you would be uncomfortable reading a claim aloud to the client it is about, rewrite it.
> Ask for a testimonial at the moment a client tells you something worked, and offer to draft it from their own words for them to edit. Requests sent months later rarely come back.
## Should programs and courses live on my site or on a course platform?
On a platform, until what you teach stops fitting its shape. Products such as Kajabi, Teachable, Podia and Circle handle video hosting, logins, payments and drip schedules for a monthly fee, and you can be selling within days. Your website then does the persuading and links to the platform for checkout and delivery.
A custom client area starts to make sense when:
- The program is live and cohort based, and the platform's self-paced course layout fights it
- Clients need something specific to your method, such as a progress tracker, an assessment or a shared workspace with you
- You run certification, with requirements to track per participant
- Monthly platform fees for the tier you need have grown past what a build would cost over a couple of years
For a live program, the site often needs no portal at all. It needs a strong program page: who it is for, the dates, the format, the curriculum week by week, the price and how to enrol. Serenity Institute, a live, Zoom-based certification program for intervention professionals, is an example from my own work of a site built around a program delivered live and not as a video library.
![The Serenity Institute site for its live, Zoom-based certification program for intervention professionals.](/work/serenity.jpg)
## How do clients actually find a coach or consultant?
Mostly by name, after hearing about you somewhere else. A referral, a podcast interview, a talk or a LinkedIn post comes first, and then the person searches your name to check you out. That makes the first job of the site simple: own the results for your own name, and confirm in ten seconds what the referrer said.
Beyond that, three kinds of search bring strangers:
- Problem searches. Someone types the situation they are in, such as how to manage a former peer or how to price consulting work. An article that answers it properly, in your voice, is how search traffic starts.
- Niche searches. A type of coach plus an industry or role. A page that says exactly who you work with beats a broad one.
- Local searches, for consultants and coaches who meet in person. A city in the page title, an address or service area, and a Google Business Profile matter here.
A short email list ties these together. Most visitors are not ready to book a call on the first visit. Offering one useful guide in exchange for an email address gives them a smaller step, and gives you a way to be remembered when they are ready.
## Which package fits, and what does the site cost to run?
The three website packages map onto three stages of a practice.
- Starter Site, from $150 and about 7 days. One page: offer, proof, how you work, booking. Right for a new practice or a single clear offer.
- Business Site, from $450 and about 14 days. Up to five pages: home, services or programs, about, case studies and booking, with local SEO setup.
- Full Custom Build, from $1,200 and about 21 days. Articles with an editor, a page per program, paid content or a client area.
Before the build, have your offer written in two sentences, two or three client stories with permission, a good photo of you, your scheduling account and your prices. The offer is the hard part. If it takes more than two sentences, the site cannot fix that, and I would rather help you sharpen it first than design around a vague one.
Running costs are low. Hosting on Vercel is free or close to it for most small business sites. You pay for the domain, the scheduling tool if you are on a paid plan, and any course platform.
One honest note: I have not built a site for an individual coach, so the closest examples in my portfolio are Serenity Institute above and booking-led sites such as Astiglow.
## When is a custom site more than I need?
When you are still testing the offer. In the first months of a practice, the offer, the audience and the price all tend to change, and a profile on LinkedIn plus a scheduling link is enough to find out what people will pay for. A template site builder is a fine second step if you enjoy editing it yourself.
Custom earns its place once the offer is stable and the site has become the thing people check before they hire you. At that point speed, a design that does not look like a template and pages written around your real client questions start to matter.
## The bottom line
People hire a coach or consultant they already half trust, and the website's job is to finish that. State the problem you solve in two sentences, show permitted and typical results, publish at least a starting price, and make the path to a call short and well prepared. Keep courses on a platform until your method outgrows it, and build custom when the offer has stopped moving.`,
    faqs: [
      { q: 'Can I take payments for sessions on the site?', a: 'Yes, through your scheduling tool or with Stripe checkout for packages.' },
      { q: 'Can you build a client portal for my programs?', a: 'Yes. Portals with resources, progress and messages for clients are a custom build.' },
      { q: 'Do I need a blog?', a: 'It helps. A few strong articles answering real client questions build trust and bring in search traffic over time.' },
      { q: 'Is a one-page site enough for a coach?', a: 'Yes, when you have one clear offer. Offer, proof, how you work and a booking link fit on one page, which is the Starter Site package.' },
      { q: 'Should I host my course on my own site?', a: 'Usually not at first. A course platform handles video, logins and payments, and your site links to it until your program needs something custom.' },
      { q: 'Can the booking form ask qualifying questions?', a: 'Yes. Scheduling tools let you add a few questions that visitors answer when they pick a time.' },
    ],
  },
];
