// Industry pages, generated batch D (Nov 23 2026).
import type { Industry } from '../landing';

export const industriesGenD: Industry[] = [
  {
    slug: 'auto-repair-shops',
    name: 'Auto repair shops',
    noun: 'shop',
    h1: 'Auto repair shop websites that turn "mechanic near me" into booked bays',
    metaTitle: 'Auto Repair Shop & Mechanic Website Design | Thomas Osayi',
    description: 'Auto repair shop websites with a clear service menu, appointment requests by year, make and model, ASE credentials, towing info and local SEO. Built in Next.js in Los Angeles.',
    intro: 'Most people look for a mechanic at a bad moment: a warning light, a strange noise, a car that will not start. They want to know quickly whether you work on their vehicle, roughly what the job costs, when you are open and how to get the car to you. A good shop website answers those questions on a phone screen and makes asking for an appointment take less than a minute.',
    mustHaves: [
      { title: 'A service menu with honest pricing', text: 'Oil changes, brakes, diagnostics and other common jobs listed as real text, with starting prices or price ranges where you are comfortable sharing them and a plain note on what changes the final number.' },
      { title: 'Appointment requests that capture the vehicle', text: 'Year, make, model, mileage and the symptom, so your service writer can check parts and plan the bay before calling back.' },
      { title: 'Credentials shown properly', text: 'Which technicians hold ASE certifications and in which areas, plus any Blue Seal recognition the shop has earned, presented accurately.' },
      { title: 'Hours, towing and drop off details', text: 'Business hours, after hours key drop, whether you arrange towing, loaner or shuttle options and the exact address, all easy to find on mobile.' },
      { title: 'Local SEO tied to Google Business Profile', text: 'Matching name, address, phone and hours, service pages for the work you want more of, and a steady stream of honest reviews.' },
    ],
    mistakes: [
      'Listing every service under one "Repairs" heading so nothing ranks and nobody knows what you do',
      'A contact form that asks only for a name and message, so every request needs a callback just to learn the car',
      'Using ASE logos in a way that suggests the shop itself is certified',
      'Hours on the site that disagree with Google Business Profile, especially on Saturdays and holidays',
    ],
    related: ['astiglow', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A single location shop with a service menu, appointment requests and local SEO fits the Business Site package. Multiple locations, a deep integration with your shop software or a custom estimate tool make it a Full Custom Build.',
    faqs: [
      { q: 'Should an auto repair website show prices?', a: 'Showing starting prices or ranges for common jobs like oil changes and brake pads builds trust, as long as the page explains that the final price depends on the vehicle and an inspection.' },
      { q: 'Can customers book directly into our shop management software?', a: 'Often yes. Tools like Tekmetric and Shopmonkey offer online booking, and Tekmetric documents an embed code or direct link you can add to your own site.' },
      { q: 'Can we say we are ASE certified?', a: 'ASE certifies individual technicians, not businesses, so the accurate wording is that your technicians are ASE certified, unless the shop has earned ASE Blue Seal of Excellence recognition.' },
      { q: 'What should the appointment form ask?', a: 'Name, phone, vehicle year, make, model and mileage, what the car is doing, and a preferred drop off day. Anything more can wait for the phone call.' },
      { q: 'How do we show up for "mechanic near me"?', a: 'A complete Google Business Profile, consistent contact details everywhere, real reviews and service pages on your site that clearly say where you are all help Google match you to nearby searches.' },
      { q: 'What does an auto repair shop website cost?', a: 'Thomas Osayi builds shop sites on the Business Site package from $450, or a Full Custom Build from $1,200 for multiple locations or custom integrations.' },
    ],
    guide: `## What does a driver need from an auto repair shop website?
A driver needs to see, within seconds, that you fix their kind of problem on their kind of car, roughly what it costs, when you are open and how to get the car to you.
Most visits happen on a phone, often from a parking lot or the side of the road. That changes the order of the page. The headline should say what you do and where, such as "Brakes, diagnostics and maintenance in Torrance". Right under it, put two buttons: call the shop and request an appointment. Then hours, address and a map. After that come the service menu, your technicians and their credentials, reviews and the details people ask about on the phone every day: towing, drop off, loaners and warranty on repairs.
If you specialize, say so early. A shop that focuses on European cars, diesel trucks, hybrids or fleet work will win more of the right calls by stating it in the first screen than by burying it on an about page.
## How should a shop show its service menu and pricing?
List each common service as its own item in plain text, with a starting price or range where you can, and a short line explaining what moves the final price.
Price transparency is one of the strongest trust signals a shop can give, but it only works if it is honest. "Synthetic oil change from $X, most cars" or "Front brake pads and rotors, typical range $X to $Y" tells people you are not hiding anything, while a note such as "Final quote after inspection, we call before any extra work" protects you on the jobs that grow. For diagnostics, say whether the diagnostic fee is applied to the repair if the customer goes ahead. That single sentence answers a question many people are nervous to ask.
Each major service group (brakes, suspension, AC, electrical, engine, transmission, maintenance) should also have its own page. That is how you rank for searches like "brake repair near me" instead of only for your shop name.
On a site I built for Astiglow, a waxing studio, every service is listed with its price and duration so people can choose before they book. A shop menu works the same way, just with vehicles instead of appointments by the minute.
![The services menu I built for Astiglow, listing each service with its price and duration](/shots/astiglow-services.jpg)
## What should an auto repair appointment request collect?
It should collect the vehicle year, make, model and mileage, what the car is doing, a phone number and a preferred drop off day, and nothing more.
A generic contact form creates a callback just to learn what car it is. A good request form lets your service writer look up parts, estimate bay time and call back with a real answer. A simple structure:
- Vehicle: year, make, model, and optionally mileage or VIN.
- Service: pick from a short list (maintenance, brakes, check engine light, AC, other) with a free text box for symptoms.
- Timing: preferred day, and whether they will wait, drop off or need a ride.
- Contact: name, mobile number and whether texting is fine.
Year, make and model can be dropdowns or plain fields. Dropdowns reduce typos, but they need a vehicle data source, so for a small shop a typed field is often fine.
> Add one checkbox that says "My car is not drivable". It flags towing calls instantly so your team can call those people back first.
## Can the website connect to our shop management software?
Usually yes, either by embedding the booking tool your shop software already provides or by sending form requests to the place your team already works.
Many shop management systems include online booking. Tekmetric documents installing its booking tool with an embed code pasted into your site, or a direct link you put behind your "Request appointment" buttons. Shopmonkey lists online scheduling as a feature as well. Mitchell 1 announced a Book it Now product that adds an appointment link to a shop's Google Business Profile and syncs with its Manager SE shop management system.
If your software has a booking tool, I usually style the site around it rather than rebuilding it, so appointments land directly in your calendar. If it does not, or you want a custom form with the vehicle fields above, I build the form and send each request to your email and, where the software allows it, into your system. I confirm what each product actually supports before quoting, because integrations vary by plan.
## How should we display ASE certification on the site?
Show which technicians are ASE certified and in which areas, and describe it accurately, because ASE certifies individual technicians, not shops.
ASE, the National Institute for Automotive Service Excellence, is a nonprofit set up by the industry in 1972. According to ASE, technicians need at least two years of qualified work experience and must pass a test for each certification, and certifications have to be renewed every five years. ASE also says plainly that it certifies technicians, not businesses.
That makes the honest wording "Our technicians are ASE certified" rather than "ASE certified shop". A technician page with a photo, years of experience and the certification areas each person holds is far more convincing than a logo in the footer. If your shop has earned ASE Blue Seal of Excellence recognition, that is the exception: ASE requires at least 75 percent of technicians doing diagnosis and repair to be ASE certified, with every service area covered by at least one certified technician. Before using any ASE logo, check ASE's own logo rules.
## How do we rank for "mechanic near me"?
You rank for nearby searches with a complete Google Business Profile, consistent shop details everywhere, a steady flow of honest reviews and service pages on your website that make your location obvious.
Google Business Profile lets service businesses in certain categories list their services with descriptions and prices, so add the same menu you publish on your site. Keep the name, address, phone and hours identical in both places, and update holiday hours before the holiday, not after.
Reviews matter, but follow Google's rules. Google's content policy prohibits offering incentives such as discounts or free services in exchange for reviews, and it prohibits discouraging negative reviews or asking only happy customers. The practical approach is to ask every customer at pickup with a short text link. My post "How to get more Google reviews" covers the details, and the "Local SEO checklist for a small business website" covers the rest.
## What about towing, hours and after hours drop off?
Put hours, towing options and drop off instructions where a stressed driver will see them immediately, and repeat them on the contact page.
If you have a preferred towing partner, name them and give the number. If you offer an after hours key drop, explain where it is and what to leave with the key. If you provide loaners, shuttle rides or a waiting room with wifi, say so, because these often decide between two shops at similar prices. Mark your hours in structured data too, so Google shows them correctly in search.
## The bottom line
An auto repair website wins work by being clear and honest: a real service menu with fair price ranges, an appointment request that captures the vehicle, accurate ASE credentials, and hours and towing details that are easy to find on a phone. Most single location shops fit the Business Site package from $450. Multiple locations or a custom integration with your shop software make it a Full Custom Build from $1,200, and the website cost calculator can give you a range before we talk.`,
  },
  {
    slug: 'property-management-companies',
    name: 'Property management companies',
    noun: 'company',
    h1: 'Property management websites that win owners and serve tenants',
    metaTitle: 'Property Management Company Website Design | Thomas Osayi',
    description: 'Property management websites with separate paths for owners and tenants, live listings, online applications, maintenance requests and owner lead capture. Built in Next.js.',
    intro: 'A property management website has two very different visitors. Owners want to know whether you can fill their units, look after their asset and send clear statements. Tenants and applicants want to see available rentals, apply, pay rent and report a leak. A good site gives each group its own path, connects to the software you already run on, and treats fair housing and accessibility with care.',
    mustHaves: [
      { title: 'Separate paths for owners and tenants', text: 'Clear buttons at the top for "I own a property" and "I rent or want to rent", so neither group has to dig through content meant for the other.' },
      { title: 'Available listings that stay current', text: 'Rentals pulled from or linked to your property management software, so a unit that is leased today does not stay on the site for weeks.' },
      { title: 'Applications and portals that just work', text: 'Apply, pay rent and resident login buttons that go straight to the portal your software provides, styled to match your brand.' },
      { title: 'A clear maintenance request path', text: 'One obvious place to submit a request, plus a plain explanation of what counts as an emergency and the number to call when it is one.' },
      { title: 'Owner lead capture', text: 'A rental analysis or management quote form that asks for the property address, type and number of units, so your team can respond with something useful.' },
    ],
    mistakes: [
      'Mixing owner sales copy and tenant support on the same page so both audiences get lost',
      'Listings typed into the website by hand that go stale as soon as a unit leases',
      'Ad and listing wording that describes the kind of tenant you want instead of the property',
      'Emergency maintenance instructions hidden behind a portal login',
    ],
    related: ['guardian-mindcare', 'artistic-printing'],
    service: 'nextjs-website-development',
    packageHint: 'A company using an existing portal for listings, applications and payments usually fits the Business Site package. Custom listing feeds, multiple markets or a bespoke owner dashboard make it a Full Custom Build.',
    faqs: [
      { q: 'Do we need to rebuild tenant portals on the new website?', a: 'Usually not. Software like AppFolio, Buildium and Rent Manager already provides applications and resident portals, so the website links or connects to them instead of duplicating them.' },
      { q: 'Can the website show our available rentals automatically?', a: 'Often yes. Many property management platforms offer a listings page, a website product or a feed, and the site can link to or display those so vacancies stay current.' },
      { q: 'What does the Fair Housing Act mean for our website?', a: 'The Act prohibits discrimination based on race, color, national origin, religion, sex, familial status and disability, and HUD says that includes housing ads placed on websites. This is general information, not legal advice.' },
      { q: 'Should the site be accessible to people with disabilities?', a: 'Yes. Building to WCAG 2.2 AA makes listings, applications and maintenance requests usable by more people, including screen reader and keyboard users.' },
      { q: 'How should we capture new owner leads?', a: 'Offer a free rental analysis or management quote with a short form for the property address, type, units and timeline, and route it to whoever handles new business.' },
      { q: 'What does a property management website cost?', a: 'Thomas Osayi builds property management sites on the Business Site package from $450, or a Full Custom Build from $1,200 for custom listing feeds or several markets.' },
    ],
    guide: `## Who is a property management website really for?
It is for two audiences at once, property owners and tenants, and the site works best when each one gets a separate, obvious path from the first screen.
Owners are buyers. They compare management companies, read about fees and services and want proof that you can fill units and handle problems. Tenants and applicants are users. They want to find a rental, apply, pay rent or get a repair done, and they want to do it in as few taps as possible. When both groups land on one generic homepage, owners scroll past tenant links and tenants never find the portal.
I usually open the homepage with a short headline about where you manage and what kinds of property, then two clear choices: "Owners: get a rental analysis" and "Residents: pay rent or request maintenance", with "View available rentals" next to them. Each path leads to pages written only for that audience. The navigation can follow the same split, with Owners, Residents and Rentals as top level items.
## How should available listings work on the site?
Listings should come from the same system you lease from, so a unit disappears from the website when it leases, instead of being typed in by hand and forgotten.
Hand maintained listings go stale fast: photos of units leased months ago, rents that changed and applicants calling about homes that are gone. Most property management platforms solve this already. AppFolio offers AppFolio Sites, a website product connected to its platform, plus listing distribution to other sites. Buildium offers listing syndication to partners such as Zillow, Zumper and Apartments.com, with applications linked to listings.
On a custom site, the options are to link a Rentals button to the listings page your software provides, embed it, or, where the platform offers a feed, display listings in your own design. Which one is possible depends on your software and plan, so I check that first. Each listing should show rent, deposit, beds, baths, square footage, pet policy, availability date, photos and the address or area, plus one button to apply.
## Do we need custom rental applications and tenant portals?
Usually not, because the software you already use provides them, and the website should connect to those tools rather than rebuild them.
Rent Manager describes a prospect and tenant portal where prospects complete online applications, often from your website, and tenants pay rent, sign documents and submit maintenance requests. Buildium offers online applications and a Resident Center that residents use after move in. AppFolio offers online applications and resident and owner portal logins. These systems handle screening, fees, payments and records, which are exactly the parts you do not want reimplemented on a marketing site.
What the website does is make those tools easy to reach and consistent with your brand: clear Apply, Pay Rent and Resident Login buttons, a short page explaining how to set up an account, what screening involves and your application fee, and help text for the questions your office answers every day.
## How should maintenance requests be handled?
Send routine requests to the maintenance system you already use, and put emergency instructions on a public page that does not require a login.
A resident with water coming through the ceiling should not have to remember a password. Create a public Maintenance page that explains what counts as an emergency (no heat in winter, active leaks, gas smell, no water, security issues), the number to call right away and what to do in the meantime, such as shutting off the water. Below that, link to the portal for everything else, with a note on typical response times if you publish them.
> Add your emergency maintenance number to the site footer on every page. Residents look for it in a hurry, and it should never be more than one glance away.
## What do fair housing rules mean for our website?
Fair housing rules apply to your website the same way they apply to other housing ads, so listing copy should describe the property, not the kind of person you want to rent to.
According to HUD, the Fair Housing Act protects people from discrimination based on race, color, national origin, religion, sex, familial status and disability when renting or buying a home and in other housing related activities. HUD's advertising guidance says discriminatory housing ads are illegal and that this covers people and companies who place real estate ads in newspapers and on websites. HUD gives examples of problem phrases such as "no children" and "no wheelchairs".
In practice, write about features and policies: "Two bedroom unit, second floor, no elevator" instead of anything about who would suit it. Apply the same screening criteria and wording to everyone, and be careful with photos and targeting in paid ads. State and local laws can add more protected classes. This is general information, not legal advice, so have your listing templates reviewed by a fair housing attorney or your association's compliance resources.
## How accessible should a property management site be?
Aim for WCAG 2.2 AA, the current W3C accessibility guideline, so people with disabilities can browse listings, apply and request repairs without help.
Accessibility here is practical, not cosmetic. Listings need alt text that describes each photo, forms need labels and clear error messages, everything must work with a keyboard and color contrast has to be readable on a phone in sunlight. If you link to third party portals, test them too, because a resident experiences the whole journey as your company. Offer a phone number and email for anyone who cannot complete something online, and mention how to request a reasonable accommodation. My post "Website accessibility basics for small businesses" goes deeper on the checks I run.
## How do we turn the website into a source of new owners?
Give owners a clear reason to reach out, usually a free rental analysis or management quote, with a short form that captures the property details your team needs.
Owner pages should cover your services (leasing, screening, rent collection, maintenance, inspections, accounting and owner statements), your fee structure explained clearly, the areas and property types you manage and how communication works. Then the form: property address, property type, number of units, current status (vacant, tenant occupied, self managed) and timeline. Route it to whoever handles new business, and send the owner a confirmation that says when they will hear back. Local area pages for the neighborhoods you manage help these pages show up in search, as long as each one says something true about that market.
## The bottom line
A property management website should give owners and tenants separate paths, pull listings from your real system, send applications, payments and maintenance to the portal you already use, keep emergency instructions public, and treat fair housing wording and accessibility with care. Most companies fit the Business Site package from $450. Custom listing displays, several markets or a bespoke owner area make it a Full Custom Build from $1,200, and the website cost calculator can give you a range first.`,
  },
];
