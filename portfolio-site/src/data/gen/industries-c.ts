// Industry pages, generated batch C (Nov 22 2026).
import type { Industry } from '../landing';

export const industriesGenC: Industry[] = [
  {
    slug: 'insurance-agencies',
    name: 'Insurance agencies',
    noun: 'agency',
    h1: 'Insurance agency websites that turn searches into quote requests',
    metaTitle: 'Insurance Agency Website Design & Quote Forms | Thomas Osayi',
    description: 'Insurance agency websites with a page per line of coverage, smart quote request forms, license details and local SEO. Fast Next.js sites by a Los Angeles developer.',
    intro: 'People shopping for insurance usually arrive with one job: a renewal that went up, a new car, a new business, a new home. They want to know whether you write that kind of policy, whether you are licensed and local, and how fast they can get a quote. A clear agency site answers those three questions and makes the quote request easy to send.',
    mustHaves: [
      { title: 'A page per line of coverage', text: 'Auto, home, renters, commercial, life and health each get their own page explaining who it suits and what you need to quote it.' },
      { title: 'A quote form that asks the right questions', text: 'Different fields for auto, home and business quotes, so your team has what it needs on the first reply instead of three follow up emails.' },
      { title: 'License numbers shown clearly', text: 'Agency and agent license numbers in the footer and on agent profiles, matching how you print them elsewhere.' },
      { title: 'Agent profiles', text: 'A photo, languages spoken, lines of coverage and a direct phone number for each agent, because people buy insurance from people.' },
      { title: 'Local SEO and service areas', text: 'Your office address, hours and the cities you serve, set up so Google can match you to searches like "insurance agency near me".' },
    ],
    mistakes: [
      'One generic contact form for every kind of policy',
      'License numbers missing from the site entirely',
      'Carrier logos used without checking each carrier\'s rules',
      'Promising savings or coverage outcomes the agency cannot guarantee',
    ],
    related: ['artistic-printing', 'guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'A single office with a few coverage lines fits the Business Site package. Several offices, many agent profiles or a client portal make it a Full Custom Build.',
    faqs: [
      { q: 'Should our license number be on the website?', a: 'It is good practice to show agency and agent license numbers clearly. California has specific rules for business cards, quotes, print ads and emails, so confirm current requirements with the California Department of Insurance.' },
      { q: 'Can the quote form change based on the type of insurance?', a: 'Yes. A visitor picks auto, home or business and the form shows only the fields that apply, then emails the right person on your team.' },
      { q: 'Can we show the carriers we work with?', a: 'Yes, as long as each carrier allows its name or logo on agency websites. Many have brand guidelines, so check before launch.' },
      { q: 'Is it safe to collect driver license numbers or dates of birth on a website form?', a: 'Collect only what you need for a first quote, send it over HTTPS and keep sensitive details out of plain email. Anything more sensitive is better handled inside your agency management system.' },
      { q: 'Can the site be in English and Spanish?', a: 'Yes. Each language gets its own pages so both rank in search and visitors can switch easily.' },
      { q: 'What does an insurance agency website cost?', a: 'Thomas Osayi builds agency sites on the Business Site package from $450, or a Full Custom Build from $1,200 for multiple offices or client tools.' },
    ],
    guide: `## What do people need to see on an insurance agency website?
They need to see, within a few seconds, that you write the kind of policy they need, that you are licensed and local, and how to ask for a quote.
Most visitors arrive with something specific in mind: a car they just bought, a renewal notice that jumped, a lease that requires renters coverage, a new business that needs general liability. The homepage should name your main lines of coverage plainly and send each visitor to the right page in one tap. Under that, show your office location, the languages your team speaks and a short line about how quotes work, such as "Send a request online and an agent will call you back."
A useful order for the homepage:
- A headline that says what you insure and where.
- Buttons for your main lines of coverage.
- A short "how it works" strip: request, review options, choose a policy.
- Agent photos and languages.
- Address, hours, phone and license numbers in the footer.
## Should each type of insurance have its own page?
Yes, because people search for a specific policy, and one page per line of coverage gives each search a page that answers it.
A page titled "Auto insurance in Glendale" can explain who you write auto policies for, which carriers you can shop, what discounts people ask about and what information you need for a quote. The same page cannot also do justice to commercial property or life insurance. Separate pages also let you put a quote form on each one that asks only the questions that apply.
Keep these pages honest and practical. Explain what the coverage is for, what affects the price in general terms, and what the person should have ready. Avoid promising a specific saving or saying a policy "covers everything". Coverage depends on the policy wording, and your site should send people to an agent for the details.
## How should an insurance quote form work?
A good quote form asks first what kind of insurance the person needs, then shows only the fields for that type, and routes the request to the right agent.
A single "name, email, message" form creates work. Your team replies asking for the vehicle, the address, the current carrier, the renewal date, and the lead goes cold while you wait. A branching form fixes that:
- Auto: vehicles, drivers in the household, current carrier and renewal date.
- Home or renters: address, year built, current coverage and any recent claims.
- Business: industry, number of employees, annual revenue range and the coverage they are asking about.
Each request can email the agent who handles that line and land in a shared inbox or your CRM.
> Ask for the renewal date on every personal lines form. It tells you when to follow up, and a request that is not ready today often turns into a policy in a few weeks.
On a site I built for Artistic Printing, a commercial printer, the quote form collects the details the team needs to price a job before anyone picks up the phone. Insurance quote requests work the same way: the better the first message, the faster the first real answer.
## Do California insurance agencies have to show license numbers online?
California has written rules about where licensees print their license number, and the safest approach is to show it clearly on your site as well.
According to a notice from the California Department of Insurance, Insurance Code section 1725.5 requires certain licensees to print their license number on business cards, written price quotations for insurance products and print advertisements, in a type size no smaller than the largest street address, email address or phone number shown. Since January 1, 2023, licensees must also include it on emails that involve licensed activity, next to or on the line below the name. The same notice says a hyperlink to a website listing license numbers is not an acceptable substitute in an email.
The notice I read does not spell out a separate rule for websites. Many agencies show the agency license number in the footer and each agent's number on their profile anyway, sized to match the phone number, because a website quote page can look a lot like a written quote or an advertisement. Before launch, check the current guidance on the California Department of Insurance site or with your compliance contact. This is general information, not legal advice.
## What should agent profiles include?
Each agent profile should include a real photo, the lines of coverage they handle, languages spoken, a direct phone number and their license number.
Insurance is a trust purchase, and people often choose an agency because a specific agent speaks their language or already insures a neighbor. A profile page gives that person a name to ask for. Keep the bio short and practical: how long they have worked in insurance, what they focus on and how to reach them. If an agent leaves, their page should come down the same week, so build profiles from a simple list your office can edit rather than hard coding them into the design.
## Can we show carrier logos and reviews on the site?
Usually yes, but check each carrier's brand rules and follow the platform rules for reviews before you publish.
Carrier logos help visitors understand that you can shop several companies. Many carriers publish guidelines for how appointed agencies may use their names and logos, and some ask you not to imply a partnership you do not have. A simple line such as "We can quote with several carriers, including..." with the logos they permit is clear and safe.
For reviews, show real Google reviews or link to your profile. Do not edit them or pick quotes that suggest guaranteed savings. My post "How to get more Google reviews (without breaking Google's rules)" covers asking for reviews the right way.
## How do we keep client information safe on the website?
Collect only what you need for a first quote, keep forms on HTTPS, and keep sensitive details out of plain email.
A quote request can include dates of birth, addresses and vehicle details. That is personal information, and it should be handled with care:
- Do not ask for full Social Security numbers or full driver license numbers on a public form unless you truly need them at that step.
- Send form notifications with a summary and keep the full record in a secure inbox, CRM or your agency management system.
- Limit who can log in to that system and remove access when staff leave.
- Add a privacy policy that explains what you collect and why.
If your carriers or your agency management system offer secure document upload, link to it for policy documents rather than accepting them through a basic website form. My post "Do I need a privacy policy and cookie banner on my website?" has more on the policy side.
## The bottom line
An insurance agency site works when it does three things well: it shows each line of coverage on its own page, it asks the right questions in the quote form, and it shows license details clearly so visitors trust you before they call. Agent profiles, honest carrier and review sections and careful handling of personal information do the rest. A single office usually fits the Business Site package. Several offices, many agents or a client portal make it a Full Custom Build. You can price your version with the website cost calculator.`,
  },
  {
    slug: 'home-care-agencies',
    name: 'Home care agencies',
    noun: 'agency',
    h1: 'Home care agency websites that families trust',
    metaTitle: 'Home Care Agency Website Design & Inquiry Forms | Thomas Osayi',
    description: 'Home care agency websites with clear services, license details, careful inquiry forms and caregiver recruiting pages. Calm, fast Next.js sites by a Los Angeles developer.',
    intro: 'Families usually look for home care during a hard week: a parent home from the hospital, a fall, a diagnosis. They are reading on a phone, often late at night, trying to work out whether you can help, whether you are licensed, and how quickly someone can call them. A calm, clear site with a simple inquiry path earns that call.',
    mustHaves: [
      { title: 'Services in plain language', text: 'Personal care, companionship, respite, dementia care and live in care, each explained in words a worried family member understands.' },
      { title: 'License and credentials up front', text: 'Your license number, how caregivers are screened and trained, and your service area, where families can find them easily.' },
      { title: 'A careful inquiry form', text: 'A short form that asks who the care is for and when it is needed, without collecting medical details the site does not need.' },
      { title: 'Caregiver recruiting pages', text: 'A separate path for job seekers with roles, requirements and an application, so hiring traffic does not crowd out families.' },
      { title: 'Phone number on every screen', text: 'Many families would rather talk. A tap to call button on mobile matters as much as the form.' },
    ],
    mistakes: [
      'Collecting diagnoses and medication lists through a basic contact form',
      'License information missing or hard to find',
      'Mixing caregiver job applications with client inquiries in one form',
      'Stock photos that feel clinical or nothing like your real team',
    ],
    related: ['guardian-mindcare', 'vencare'],
    service: 'nextjs-website-development',
    packageHint: 'Most home care agencies fit the Business Site package. Several branches, a full careers portal or a family portal make it a Full Custom Build.',
    faqs: [
      { q: 'Should our California HCO license number be on the website?', a: 'Showing it clearly helps families trust you. California requires a license to advertise as a home care organization, so confirm current display requirements with the California Department of Social Services.' },
      { q: 'Is a website inquiry form HIPAA compliant?', a: 'It depends on whether your agency is a covered entity and what the form collects. The safest approach is to keep the first form short and move health details into a secure system.' },
      { q: 'Can families request care online after hours?', a: 'Yes. The form can send an instant confirmation and alert whoever is on call, so a family is not left waiting until morning.' },
      { q: 'Can we recruit caregivers through the same site?', a: 'Yes, with a separate careers section and application form that goes to your hiring team, not your intake coordinator.' },
      { q: 'Can the site be in more than one language?', a: 'Yes. Many families and caregivers prefer Spanish, Tagalog, Armenian or other languages, and each language can have its own pages.' },
      { q: 'What does a home care agency website cost?', a: 'Thomas Osayi builds home care sites on the Business Site package from $450, or a Full Custom Build from $1,200 for multiple branches or portals.' },
    ],
    guide: `## What do families look for on a home care website?
Families look for three things first: whether you provide the kind of care they need, whether you are licensed and trustworthy, and how fast they can talk to someone.
The person reading is often an adult child organizing care for a parent, sometimes from another city. They are comparing several agencies in one sitting. Your homepage should say plainly what you do and where, show a phone number they can tap, and offer a short inquiry form for people who would rather write. Then answer the questions they are too tired to ask: what happens after they call, how quickly care can start, whether there is a minimum number of hours and how caregivers are matched.
A calm design helps. Real photos of your team, plenty of white space and readable type matter more here than animation or bold effects. Many readers are older, so use generous font sizes and strong contrast.
## How should services be explained to a worried family?
Explain each service in plain language, with a short description of who it is for and what a typical visit includes.
Families do not always know the difference between companionship, personal care and respite. Give each a short section or its own page:
- Companionship: conversation, meals, errands, light housekeeping and getting to appointments.
- Personal care: help with bathing, dressing, grooming and moving around the home safely.
- Respite care: short term care that gives a family caregiver time off.
- Dementia and memory care at home: routines, supervision and patience from trained caregivers.
- Live in or 24 hour care: how shifts work and what the home needs.
Be clear about what you do not do. If you are a non-medical home care agency, say so, and explain that skilled nursing or therapy comes from a licensed home health agency or the client's doctor. That honesty prevents the wrong calls and builds trust with the right ones.
## Do we need to show our California HCO license number?
Showing your license number clearly is a strong trust signal, and California law is strict about who may present themselves as a home care organization.
California Health and Safety Code section 1796.34 says no person may represent themselves as a home care organization by name, advertising or solicitation without a license from the California Department of Social Services. Section 1796.42 requires a licensee to post its license in its place of business where clients and aides can see it. The statute text I reviewed does not set out a specific website display rule, but putting your HCO license number in the footer and on the about page lets families and referral partners verify you quickly.
Next to the license number, explain how caregivers are screened: Home Care Aide Registry status, background checks, training and supervision. Rules change and the department issues its own guidance, so check current requirements with the California Department of Social Services before launch. This is general information, not legal advice.
## Is a home care inquiry form a HIPAA risk?
It can be, so the safest design keeps the website form short and moves any health information into a secure system built for it.
HIPAA applies to covered entities and their business associates, and whether a non-medical home care agency is covered depends on things like whether it bills health plans electronically. Many agencies are not sure, and some families will type a lot of medical detail into any open text box. A HIPAA-aware form design protects you either way:
- Ask who the care is for, the city or ZIP code, the type of care, how soon it is needed and the best way to reach the family.
- Avoid fields for diagnoses, medications or medical history.
- Add a short note under the message box: "Please do not include medical details here. We will discuss care needs by phone."
- Send notifications without the message body, and keep the full record in a secure inbox or care management system.
If your agency is a covered entity, use a form provider that will sign a business associate agreement, and talk to your compliance advisor. My post "Are website contact forms HIPAA compliant? What health practices need to know" goes deeper.
## What should the inquiry flow look like?
The inquiry flow should feel like a short, kind conversation: a few questions, one per screen on mobile, ending with a clear note about what happens next.
For Guardian MindCare, a therapy practice platform, I built a get matched intake that starts with one simple question about who the care is for, then narrows down from there. Home care inquiries suit the same pattern, because the first thing your coordinator needs to know is whether the family is asking for themselves, a parent or a spouse.
![The first step of a get matched intake I built for Guardian MindCare, asking who the care is for](/shots/guardian-get-matched.jpg)
After the last step, show a confirmation that says when someone will call and give the phone number again. Send the family an email with the same details. On your side, alert the intake coordinator by email or text, and outside business hours route the alert to whoever is on call.
> Ask "How soon do you need care?" with options like "Within 48 hours", "This week" and "Planning ahead". It lets your team call the urgent inquiries first.
## How do we recruit caregivers without confusing families?
Give caregivers their own careers section with a separate application, so job seekers and families never land in the same form.
Recruiting is constant in home care, and job seekers can easily outnumber family inquiries. If both use the same contact form, your intake coordinator ends up sorting job applications while a family waits. A careers page should list open roles, pay ranges if you share them, shifts, areas served, requirements such as registry status and transportation, and what training you provide. The application can collect contact details, availability and languages, then go straight to your hiring team. Keep the main navigation focused on families and put "Careers" in the header or footer where job seekers expect it.
## How should a home care site handle reviews and local search?
Show real reviews with permission, set up your Google Business Profile carefully, and build pages for the cities you actually serve.
Families search for home care in their parent's city, not yours. A service area section, or short pages for the main cities you cover, helps you show up for those searches. Each page should say something true about that area, such as how quickly you can staff a case there, rather than repeating the same text with a new city name.
For reviews, ask families who are happy with the care and respect privacy: do not publish a client's full name, health details or photos without written consent. My "Local SEO checklist for a small business website" covers the Google Business Profile side.
## The bottom line
A home care website earns trust by being calm, clear and careful. Explain services in plain words, show your license and how caregivers are screened, keep the inquiry form short and free of medical details, and give caregivers their own path. Most agencies fit the Business Site package. Multiple branches, a large careers portal or a family portal make it a Full Custom Build, and the website cost calculator can give you a range before we talk.`,
  },
  {
    slug: 'tattoo-studios',
    name: 'Tattoo studios',
    noun: 'studio',
    h1: 'Tattoo studio websites that book the right clients',
    metaTitle: 'Tattoo Studio Website Design & Booking | Thomas Osayi',
    description: 'Tattoo studio websites with artist portfolios, consultation requests with reference uploads, deposits, flash pages and aftercare. Fast Next.js sites built in Los Angeles.',
    intro: 'People choose a tattoo artist, not a building. They scroll portfolios, look for a style that matches their idea, then want to know how to book, what a deposit costs and how long the wait is. A studio site that puts each artist\'s work front and center and turns the booking request into a clear brief saves hours of back and forth in DMs.',
    mustHaves: [
      { title: 'A portfolio page per artist', text: 'Healed and fresh work, organized by style, with each artist\'s availability and booking rules.' },
      { title: 'Consultation requests with reference uploads', text: 'Placement, size, style, budget and reference images in one request, routed to the artist the client chose.' },
      { title: 'Deposits online', text: 'A Stripe deposit once the artist accepts a request, with your deposit and rescheduling policy stated clearly.' },
      { title: 'Flash and walk in information', text: 'Available flash designs with sizes and prices, plus walk in days and hours if you take them.' },
      { title: 'Aftercare and policies', text: 'Aftercare instructions, age and ID rules and cancellation terms on their own pages, easy to send to clients.' },
    ],
    mistakes: [
      'Sending every booking question to Instagram DMs',
      'One mixed gallery with no way to tell which artist did what',
      'Huge uncompressed portfolio images that crawl on phones',
      'Deposit and cancellation rules that only appear after someone pays',
    ],
    related: ['astiglow', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A single studio fits the Business Site package. Custom request routing per artist, online deposits and a portfolio admin make it a Full Custom Build.',
    faqs: [
      { q: 'Can clients upload reference images when they request a tattoo?', a: 'Yes. The request form accepts images with size limits, stores them securely and sends them to the artist with the rest of the brief.' },
      { q: 'Can each artist manage their own portfolio?', a: 'Yes, with a simple admin where each artist adds and removes pieces, tags styles and sets whether their books are open.' },
      { q: 'Can we take deposits online?', a: 'Yes. Once an artist accepts a request, the client gets a Stripe checkout link for the deposit and a confirmation with your policy.' },
      { q: 'Do we still need Instagram if we have a website?', a: 'Instagram is great for discovery. The website is where requests become organized bookings and where Google sends people who search for a style near them.' },
      { q: 'Can the site show which artists are booking?', a: 'Yes. Each artist profile can show books open, books closed or a waitlist, and the request form follows that setting.' },
      { q: 'What does a tattoo studio website cost?', a: 'Thomas Osayi builds studio sites on the Business Site package from $450, or a Full Custom Build from $1,200 with deposits, artist routing and a portfolio admin.' },
    ],
    guide: `## What should a tattoo studio website do that Instagram cannot?
It should turn interest into a complete, organized booking request, and help people who search Google for a style or a studio near them find you.
Instagram is where many clients first see your work, and it will stay that way. But DMs are a poor booking system: details get scattered across messages, references get lost, and the artist spends evenings asking the same five questions. A website gives every request the same structure, sends it to the right artist and keeps a record. It also ranks for searches like "fine line tattoo Los Angeles" or "Japanese tattoo artist near me", which a feed cannot do on its own. My post "Do I need a website if my business already has Instagram?" covers the general case.
A good studio homepage introduces the shop in a line, shows the artists with a strong image each, and gives two clear actions: request a tattoo and see flash or walk in times.
## How should artist portfolios be organized?
Give each artist their own page with their best work, tagged by style, and show clearly whether their books are open.
Clients pick an artist by style, so a mixed studio gallery makes them work too hard. Each artist page should include:
- A short bio and the styles they focus on.
- A portfolio of healed and fresh pieces, with healed work labeled.
- Their booking status: books open, closed or waitlist.
- Their minimum price or hourly rate if they share it, and how deposits work.
- A request button that preselects that artist.
Style tags such as fine line, blackwork, traditional, realism or script let a visitor filter across artists too. On the Artistic Printing site I built a portfolio with filters so visitors see only the kind of work they came for, and the same idea works for tattoo styles.
Image performance matters. Portfolios are image heavy, and a page of full size photos will crawl on a phone. Properly sized, compressed images that load as the visitor scrolls keep the gallery fast without losing detail.
## What should a tattoo consultation request form ask?
It should ask everything the artist needs to say yes, no or "let's talk": the idea, placement, size, style, references, budget and availability.
A complete request saves several messages:
- Which artist, or "any artist who fits".
- A description of the idea in the client's own words.
- Placement on the body and approximate size.
- Color or black and gray.
- Reference images, with a limit on number and file size.
- Budget range and preferred days.
- Whether this is a cover up or rework, with a photo of the existing tattoo.
- Confirmation that the client meets your age and ID policy.
Route each request to the chosen artist's email or a shared studio inbox with the artist's name in the subject line. Uploaded images should be stored in private storage, not a public folder, since some references are personal photos.
> Add one checkbox that says the client has read the deposit and cancellation policy, with a link to it. It cuts down on disputes later.
## How do deposits and booking work online?
The usual pattern is request first, then deposit once the artist accepts, so you never take money for work you cannot do.
For custom work, the artist reviews the request, replies with a quote and dates, and the client pays a deposit through a Stripe checkout link. The payment confirms the appointment and sends both sides a confirmation. For flash or short sessions, you can skip the review and let clients book a slot directly with a deposit at checkout.
For Astiglow, a waxing studio, I built a booking flow where the client picks a service with its price before choosing a time. Flash bookings can work the same way: pick a design, see the size and price, choose a slot.
![Step one of the booking flow I built for Astiglow, choosing a service with prices](/shots/astiglow-book.jpg)
State the deposit amount, whether it comes off the final price, how much notice you need to reschedule and when a deposit is forfeited, on the artist page and again at checkout. My post "How to take deposits online to reduce no-shows" walks through the options.
## Should flash and walk ins have their own page?
Yes. A flash page with available designs, sizes and prices, plus clear walk in hours, brings in clients who are ready to book today.
Flash is easy to sell online because the design and price are already set. Show each piece with its size options and price, mark claimed designs as gone, and offer a quick booking or a "claim this design" button. For flash days or events, a dedicated page with the date, the sheet and how the line works saves your front desk a lot of questions. If you take walk ins, put the days and hours on the homepage and in your Google Business Profile so they match everywhere.
## What legal and safety information belongs on the site?
Age rules, ID requirements, health and safety information, aftercare and your policies should each be easy to find.
In California, it is a crime to tattoo anyone under 18, so state your age and ID policy clearly and repeat it on the request form. California's Safe Body Art Act also requires practitioners and facilities to register with or be permitted by the local enforcement agency, usually county environmental health, and many studios mention their permit and sterilization practices to reassure first timers. Check current rules with your county, since requirements and inspections vary. This is general information, not legal advice.
Aftercare deserves its own page you can text to clients after a session: cleaning, moisturizing, what to avoid and when to contact you. If you use a digital consent or waiver tool, link to it from the confirmation email so clients fill it out before they arrive.
## How do tattoo studios show up in local search?
Through a complete Google Business Profile, a site that names the styles and neighborhood you work in, and real reviews.
Write artist and style pages in plain language that matches how people search: "fine line tattoos in Silver Lake" says more to Google than "art that speaks". Add your address, hours and phone in the footer and in structured data, and keep them identical on Google, Yelp and Instagram. Ask happy clients for reviews after their tattoo heals, when they are most likely to share a photo. My "Local SEO checklist for a small business website" has the full list.
## The bottom line
A tattoo studio site should put each artist's work first, turn requests into complete briefs with references, take deposits once a request is accepted, and make policies and aftercare easy to find. That moves booking out of DMs without losing the feel of your shop. A single studio fits the Business Site package; deposits, per artist routing and a portfolio admin make it a Full Custom Build. Try the website cost calculator for a quick estimate.`,
  },
  {
    slug: 'churches-and-faith-organizations',
    name: 'Churches and faith organizations',
    noun: 'church',
    h1: 'Church websites that welcome visitors and keep members connected',
    metaTitle: 'Church & Faith Organization Website Development | Thomas Osayi',
    description: 'Church and faith organization websites with service times, livestreams, online giving, events and ministries. Accessible, editable Next.js sites built in Los Angeles.',
    intro: 'A first time visitor checks a church website before they ever walk in. They want service times, the address and parking, what to expect and whether there is something for their kids. Members visit for the livestream, the events calendar and giving. A good church site serves both, stays easy for volunteers to update and works for everyone in the congregation.',
    mustHaves: [
      { title: 'Service times and a plan your visit page', text: 'Times, address, parking, what to wear, how long services run and what happens for children, all on one welcoming page.' },
      { title: 'Livestream and past messages', text: 'This week\'s stream on the homepage when you are live, and an archive of past sermons or talks people can search.' },
      { title: 'Online giving', text: 'A clear Give button linked to the giving platform you choose, with one time and recurring options.' },
      { title: 'Events and registration', text: 'A calendar that volunteers can update, with sign ups for classes, retreats, volunteering and youth events.' },
      { title: 'Accessibility built in', text: 'Readable type, strong contrast, captions on video and pages that work with screen readers, so everyone can take part.' },
    ],
    mistakes: [
      'Service times buried below announcements and slideshows',
      'An events calendar that nobody can update without the original builder',
      'Giving links that send people to a confusing or unbranded page',
      'Livestream video with no captions and no archive',
    ],
    related: ['new-york-nook', 'guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'A single congregation fits the Business Site package. Several campuses, many ministries, event registration or a members area make it a Full Custom Build.',
    faqs: [
      { q: 'Can people give online through the website?', a: 'Yes. I connect the giving platform you choose, or build a simple Stripe giving page with one time and recurring gifts.' },
      { q: 'Can we show our livestream on the homepage?', a: 'Yes. The homepage can show the live player during services and switch back to the latest message afterwards.' },
      { q: 'Can volunteers update events and announcements?', a: 'Yes. Events, announcements and sermons can be managed from a simple editor, so no one needs to touch code.' },
      { q: 'Can the site support more than one language?', a: 'Yes. Congregations with services in several languages can have full pages in each, with a language switch in the header.' },
      { q: 'How do we make the church website accessible?', a: 'Use readable text sizes, strong color contrast, alt text on images, captions on video and forms that work with a keyboard and screen readers.' },
      { q: 'What does a church website cost?', a: 'Thomas Osayi builds church sites on the Business Site package from $450, or a Full Custom Build from $1,200 for multiple campuses, registration or a members area.' },
    ],
    guide: `## What does a first time visitor need from a church website?
A first time visitor needs to know when and where to come, what to expect, and that they will be welcome, before anything else.
Most church homepages lead with announcements, which matter to members but mean little to a newcomer. Put service times and the address at the top, with a "Plan your visit" button. That page should answer the quiet questions people rarely ask out loud:
- Where to park and which door to use.
- How long the service lasts and what it is like.
- What people usually wear.
- What happens for children and whether they need to be checked in.
- Whether the building is accessible and where the restrooms are.
- Who to contact with questions, with a real name and photo.
A short welcome video or a few real photos of a Sunday morning do more than any paragraph. Use photos of your own congregation, with permission, rather than stock images that look like somewhere else.
## How should a church handle online giving on its website?
Put one clear Give button in the header, send it to a giving page that matches your site, and offer both one time and recurring gifts.
There are two common approaches. Many churches use a dedicated church giving platform, which typically handles recurring gifts, multiple funds, text giving and year end giving statements, and often connects to church management software. Others use a simpler setup with Stripe, which can handle one time and recurring payments on a page built into the site. Fees, features and contracts vary by provider, so compare current pricing on each provider's own site before you choose.
Whichever you pick, a few things help:
- Let people choose a fund, such as general, missions or building, without too many choices.
- Show what the gift supports in a sentence or two.
- Make recurring giving easy to set up and easy to change.
- Send a clear receipt, and check with your accountant about what giving statements should include. This is general information, not tax or legal advice.
> Keep the giving page on your own domain or styled to match your site. People hesitate when a Give button drops them onto a page that looks unrelated to the church.
## How do we add a livestream and a sermon archive?
Embed your stream from YouTube or another streaming service, show it on the homepage while you are live, and keep a searchable archive of past messages.
Most churches already stream to YouTube or Facebook. The site can embed that player so people watch on your page, where they also see the Give button, upcoming events and a way to connect. During service hours, the homepage can show the live player at the top; the rest of the week, it shows the latest message.
The archive is where long term value builds. Give each sermon or talk its own page with the title, speaker, date, scripture or topic and the video or audio. Tag messages by series and speaker so people can find a specific one. Add captions to every video. YouTube can create automatic captions, but reviewing them for names and scripture references makes them far more useful to deaf and hard of hearing members, and to anyone watching with the sound off.
## How should events and sign ups work?
Use one calendar that volunteers can update from a simple editor, with registration for anything that needs a headcount.
Church calendars get busy: classes, small groups, youth nights, retreats, volunteer days, community meals. The common failure is a calendar only one person knows how to update, which goes stale within months. A good setup lets ministry leaders add events from a form, with a date, time, location, description, image and an optional sign up.
For events that need a headcount or payment, such as a retreat or a camp, registration can collect names, ages, dietary needs and emergency contacts, and take a deposit through Stripe if needed. For New York Nook, a restaurant, I built a catering and private events inquiry that gathers the date, guest count and details in one request. Church event sign ups follow the same principle: ask everything the organizer needs once, so no one chases details later.
Be careful with information about children. Collect only what the event needs, limit who can see it and remove it after the event.
## How do we make a church website accessible to everyone?
Build accessibility in from the start: readable text, strong contrast, captions, alt text and forms that work with a keyboard and screen readers.
A congregation includes older members with low vision, people who are deaf or hard of hearing and people who use screen readers. Practical steps:
- Body text at a comfortable size, with strong contrast against the background.
- Real text instead of words inside images, so it can be read aloud and resized.
- Alt text on photos that describes what matters.
- Captions on video and transcripts for audio messages where you can.
- Buttons and links large enough to tap and clearly labeled.
- Forms with visible labels and clear error messages.
Also describe physical access on the visit page: ramps, elevators, accessible seating and parking, hearing loop or assistive listening if you have it. My post "Website accessibility basics for small businesses" covers the WCAG basics. This is general information, not legal advice.
## How should ministries and groups be presented?
Give each ministry a short page with who it is for, when it meets, who leads it and how to join, instead of one long list.
Children, youth, young adults, small groups, outreach, music and care ministries each serve different people, and each gets searched for on its own. A page per ministry lets a parent find children's programs quickly and lets a new member find a small group. Include a contact form that goes to that ministry leader directly, so questions do not pile up in the main office inbox. If the leader changes, updating one page and one email address should be all it takes.
## Can a church website support several languages or campuses?
Yes. Each language or campus can have its own pages, service times and contacts, with a simple switch in the header.
Many congregations hold services in more than one language. Full translated pages, not a machine translation widget, read naturally and rank in search for people looking in that language. My post "How to build a bilingual website in English and Spanish that ranks in both" explains the setup. For multiple campuses, each location gets its own page with times, address, staff and events, while giving and the sermon archive stay shared.
## The bottom line
A church website should welcome a first time visitor with times, directions and what to expect, and give members an easy way to watch, give and get involved. Put the Give button and livestream where people expect them, let volunteers keep events current, and build accessibility in from the start. A single congregation fits the Business Site package; multiple campuses, registration with payments or a members area make it a Full Custom Build. The website cost calculator gives a quick range.`,
  },
];
