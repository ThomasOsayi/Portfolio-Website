// Industry pages, generated batch E (Nov 25 2026).
import type { Industry } from '../landing';

export const industriesGenE: Industry[] = [
  {
    slug: 'florists',
    name: 'Florists',
    noun: 'flower shop',
    h1: 'Florist websites that take same-day orders you actually keep',
    metaTitle: 'Florist & Flower Shop Website Design | Thomas Osayi',
    description: 'Florist websites with delivery zones, same-day cutoff times, a photo catalog, delivery dates and wedding inquiries, so orders come to you directly. Built in Next.js.',
    intro: 'Someone buying flowers is usually buying for a person who is not in the room: a mother in another neighborhood, a friend in the hospital, a partner at the office. They need to know three things fast. Can you deliver to that address, can it still arrive today, and what will it look like for the price. A florist site that answers those on a phone, and takes the order without a phone call, keeps the sale and the customer with your shop.',
    mustHaves: [
      { title: 'Delivery zones and fees that are easy to check', text: 'A ZIP code or address check that tells the buyer right away whether you deliver there and what delivery costs, instead of a paragraph of neighborhood names.' },
      { title: 'A same-day cutoff that the site enforces', text: 'A clear "order by" time on every product page, and a date picker that stops offering today once the cutoff passes or the shop is closed.' },
      { title: 'A catalog built on your own photos', text: 'Arrangements grouped by occasion and price, photographed in your shop, with a short note that designs follow the style shown when specific stems are not available.' },
      { title: 'An ordering flow made for gifts', text: 'Separate buyer and recipient details, a card message box with a character limit, delivery instructions and a delivery date, all on one short checkout.' },
      { title: 'A wedding and event inquiry form', text: 'Event date, venue, rough guest count, budget range and inspiration photos, so your first consult starts with real information.' },
    ],
    mistakes: [
      'Letting customers pick today\'s date after the same-day cutoff, then calling them to apologize',
      'Using stock or wire service catalog photos that your shop does not actually design',
      'Leaving most online orders to outside order takers instead of giving local buyers an easy direct way to order',
      'Changing delivery fees, cutoffs or closed dates for Valentine\'s Day and Mother\'s Day only on social media and not on the site',
    ],
    related: ['new-york-nook', 'artistic-printing', 'astiglow'],
    service: 'nextjs-website-development',
    packageHint: 'A single shop with a catalog, delivery zones, cutoff rules and a wedding inquiry form fits the Business Site package. Online payments with a full product catalog, multiple delivery zones with different fees, or a holiday order dashboard for your team make it a Full Custom Build.',
    faqs: [
      { q: 'Can my florist website stop same-day orders after a cutoff time?', a: 'Yes. The date picker can check the shop\'s local time and remove today once your cutoff passes, and it can also block closed days and dates you are fully booked.' },
      { q: 'How should delivery fees work on a florist site?', a: 'The simplest setup is a fee per ZIP code or distance band, checked as soon as the buyer enters the recipient\'s address, so nobody reaches checkout before learning you do not deliver there.' },
      { q: 'Do I still need a wire service if I have my own website?', a: 'Many florists keep a wire service for orders going to other cities, but every local order taken on your own site is one where you keep the full price and the customer\'s details.' },
      { q: 'Should I show prices for wedding flowers?', a: 'A starting point or typical range per item, such as a bridal bouquet or a centerpiece, helps couples self-select, as long as the page says the final quote depends on season, flowers and scale.' },
      { q: 'What if a flower in the photo is out of stock?', a: 'Say on the product page that your designers match the style, color and value shown and may substitute stems by season, and repeat the note at checkout.' },
      { q: 'What does a florist website cost?', a: 'Thomas Osayi builds florist sites on the Business Site package from $450, or a Full Custom Build from $1,200 for full online checkout, complex delivery rules or holiday order tools.' },
    ],
    guide: `## How should a florist website handle delivery zones and same-day cutoffs?
It should check the recipient's address before anything else and show, in plain words, whether you can deliver there today and what it costs.
Most flower orders are gifts, so the buyer's own location does not matter. The recipient's does. Put a delivery check near the top of the home page and on every product page: the buyer types a ZIP code or address and sees "We deliver here today for $X, order by 2 pm" or "This address is outside our delivery area". That one interaction removes most of the phone calls a shop gets on a normal weekday.
Behind it sits a short set of rules you control:
- Zones: ZIP codes or distance bands from the shop, each with its own fee.
- Cutoff: the time after which same-day delivery is no longer offered, in the shop's local time zone, not the visitor's.
- Closed days: Sundays, holidays and any date you choose to block.
- Capacity: an optional limit per day, so a busy Saturday stops accepting orders before the van is overloaded.
When the cutoff passes, the date picker should quietly move the earliest option to tomorrow. A site that lets someone choose today at 5 pm, then leaves your staff to call and apologize, costs you both the order and the goodwill.
## How should the product catalog and photos be set up?
Group arrangements by occasion and price, use photos of work your own shop designs, and say clearly how substitutions work.
Buyers browse by reason first: birthday, sympathy, anniversary, get well, new baby, just because. Then they filter by budget. A catalog that offers both paths, with three or four price points per arrangement where you offer sizes, matches how people actually decide. Each product page needs a large photo, the price, what is in it in plain language, the vase or wrap it comes in, and the delivery check from above.
Photograph your own arrangements in consistent light against the same background, even with a phone. Using a generic catalog image for something your designers do not make leads to the most common complaint in the trade: it did not look like the picture. Under every product, add a sentence that your designers match the style, colors and value shown and may substitute stems by season. Sympathy pieces deserve their own section with a calmer layout and a direct phone number, because those buyers often want to talk to a person.
## What should a florist's online order form ask?
It should ask for the recipient, the delivery date, the card message and any delivery instructions, then the buyer's details and payment, in as few steps as you can manage.
A gift checkout carries two people's details, which is where generic shop templates struggle. A structure that works:
- Recipient: name, address, phone and whether it is a home, business, hospital or funeral home.
- Delivery: a date picker that respects your cutoffs and closed days, plus a notes field for gate codes or a reception desk.
- Card: a message box with a visible character limit and an option to leave it unsigned.
- Buyer: name, email and mobile number for the delivery confirmation.
I have not built a florist site yet. The closest thing I have built is the pickup ordering flow for New York Nook, a restaurant in Hollywood, where customers choose items from a menu and pick a pickup time slot that the site only offers when the kitchen can meet it. Delivery dates for a florist follow the same idea, applied to days instead of times.
![The pickup ordering page I built for New York Nook, with menu categories, a cart and pickup time slots](/shots/newyorknook-order.jpg)
> Send the buyer an automatic email when the order is placed and another when it is delivered. That second email answers "did they get them?" before anyone has to call.
## Should a florist rely on wire services or own the orders?
Use a wire service for the orders you cannot fill yourself, and make your own site the easiest way for local buyers to order directly.
A wire or relay service passes an order and payment from one florist to another florist in the recipient's area, minus a commission. That network is what lets a customer in Los Angeles send flowers to a parent in Ohio, and many shops rely on it for incoming orders. The trade-off is that the florist who designs and delivers the arrangement receives only part of what the customer paid. Commonly cited arrangements give the sending florist about 20 percent of the product and delivery price, and the service takes its own fees, but the actual split depends on the service and your membership terms, so read your own agreement before you plan prices around it.
Separately, the Society of American Florists launched a resource center in July 2026 to help florists deal with deceptive order gathering: businesses that misrepresent their identity or location to intercept orders meant for local shops. A site with your real address, phone number, photos of your actual shop and a direct checkout makes it easier for customers to tell they have reached you.
## How should wedding and event inquiries work on the site?
They should run through a separate inquiry form that collects the details you need before the first consultation, not through the same checkout as a birthday bouquet.
Wedding and event work is quoted, not added to a cart. The form should ask for the event date, venue, ceremony and reception locations, approximate guest count, the pieces they are thinking about (bouquets, boutonnieres, centerpieces, arches, installations), a budget range and room to upload inspiration photos. Put your booked dates policy and minimum spend, if you have one, on the page so couples understand before they fill it in.
This is the same kind of quote intake I built for Artistic Printing, a commercial printer in Los Angeles, where clients describe a job and upload files so the team can quote it without three rounds of email. A wedding inquiry needs the same structure with different fields. Add a gallery of real past events, labeled by venue and season where your clients are comfortable with it, because planners and couples search by venue names.
## How should the site prepare for Valentine's Day and Mother's Day?
Set holiday rules weeks ahead: earlier cutoffs, any holiday delivery fees, a limited holiday menu and a cap on orders per day.
These are the dates when a florist's site gets its heaviest use and when mistakes cost the most. A good setup lets you change, without a developer, the cutoff time for a specific date, the delivery fee for a date range, which products are available that week and how many orders each day can take. Show a banner with the holiday dates and cutoffs across the whole site, and offer pre-ordering as soon as you are ready to accept it.
A shorter holiday menu with fewer, well-photographed arrangements is easier for your team to design at volume and easier for buyers to decide on. Turn off products you cannot make that week rather than substituting heavily. After the holiday, switch everything back with the same controls, and keep a note of what you changed for next year.
## How does a flower shop show up in local search?
By keeping a complete Google Business Profile that matches your site exactly, and by giving each service and occasion a real page with your location in it.
Searches like "florist near me" or "flower delivery in Torrance" are local searches, and Google leans on your business profile, your reviews and your site's content. Use the same shop name, address, phone and hours everywhere. Write a page for each area you deliver to only if you can say something real about it, such as the delivery fee and cutoff for that area. Add pages for sympathy and funeral flowers, weddings and corporate accounts, since those are searched separately. Ask happy customers for reviews after delivery, and reply to all of them.
## The bottom line
A florist website works when it answers the delivery question first, takes gift orders cleanly and gives local buyers a direct way to order from your shop. Delivery zones, cutoff rules, a catalog of your own work, a careful gift checkout and a separate wedding inquiry form do most of the work. A single shop with those pieces fits the Business Site package, and if you want a rough number for your own setup, the website cost calculator is a good starting point.`,
  },
  {
    slug: 'daycare-and-childcare-centers',
    name: 'Daycare and childcare centers',
    noun: 'center',
    h1: 'Daycare and childcare center websites that parents trust',
    metaTitle: 'Daycare & Childcare Center Website Design | Thomas Osayi',
    description: 'Daycare and childcare center websites with tour booking, enrollment and waitlist forms, accurate licensing, clear tuition and careful photo privacy. Built in Next.js.',
    intro: 'Choosing childcare is one of the most careful decisions a family makes. Parents read every page, compare several centers and look for anything that feels unclear. They want to know your ages and hours, whether you are licensed, what it costs, who will care for their child and how to come see the classroom. A good childcare website answers those plainly, makes booking a tour easy and treats the children in your care with the privacy their families expect.',
    mustHaves: [
      { title: 'Tour booking that fits your schedule', text: 'Parents pick from the tour times you actually offer, get a confirmation and a reminder, and your director sees every booking in one place.' },
      { title: 'Enrollment and waitlist forms', text: 'A short interest form that captures the child\'s age, desired start date and schedule, with the detailed enrollment paperwork handled in your childcare software.' },
      { title: 'Licensing information shown accurately', text: 'Your license type and number, the licensing agency, and a pointer to the state\'s public facility search so parents can check for themselves.' },
      { title: 'Tuition parents can understand', text: 'Rates or ranges by age group and schedule, what is included, registration fees and whether you accept subsidies, all in plain text.' },
      { title: 'Careful photo and privacy practices', text: 'No identifiable photos of enrolled children without written parental permission, no names next to faces and nothing that reveals a child\'s routine.' },
    ],
    mistakes: [
      'Posting photos of enrolled children on the website or social media without written parental consent',
      'Hiding tuition entirely, so every inquiry starts with a phone call about price',
      'Describing the program as "licensed" without the license number or the agency that issued it',
      'Collecting medical, allergy or custody details through a plain contact form that lands in a shared inbox',
    ],
    related: ['serenity-institute', 'astiglow', 'guardian-mindcare'],
    service: 'nextjs-website-development',
    packageHint: 'A single center with program pages, tour booking, a waitlist form, tuition and licensing information fits the Business Site package. Several locations, a custom enrollment workflow or a deep integration with your childcare management software make it a Full Custom Build.',
    faqs: [
      { q: 'Who licenses childcare centers in California?', a: 'Licensed child care centers and family child care homes in California are licensed by the Community Care Licensing Division of the California Department of Social Services (CDSS).' },
      { q: 'Can parents look up a childcare center\'s license and inspections?', a: 'Yes. CDSS runs a public facility search where parents can look up licensed facilities, and its parent resources say it includes inspection reports, violations and inspection history.' },
      { q: 'Can we post photos of the children on our website?', a: 'Only with written permission from each child\'s parent or guardian, and even then it is wise to avoid names, close faces and anything that reveals where a specific child is each day. This is general information, not legal advice.' },
      { q: 'Should a daycare website list tuition?', a: 'Listing rates or ranges by age group and schedule saves time for both sides, and parents who still inquire already know the price fits.' },
      { q: 'Can our website connect to brightwheel or Procare?', a: 'Usually the best approach is linking to the enrollment and parent tools those platforms already provide, while the website handles tours, program information and the first inquiry.' },
      { q: 'What does a childcare center website cost?', a: 'Thomas Osayi builds childcare center sites on the Business Site package from $450, or a Full Custom Build from $1,200 for multiple locations or custom enrollment workflows.' },
    ],
    guide: `## What do parents look for first on a childcare website?
They look for the ages you serve, your hours and location, whether you are licensed, roughly what it costs and how to schedule a visit.
A parent comparing centers often has several tabs open and limited time, usually during a lunch break or after bedtime. The first screen should say what you are and where, such as "Infant, toddler and preschool care in Culver City, 7 am to 6 pm", with two clear actions: book a tour and join the waitlist. Below that, give each age group its own short section with ratios or group sizes you are comfortable publishing, a typical day, meals and naps, and what a parent should pack.
Staff matter as much as the building. A page that introduces your director and lead teachers, with their roles, experience and relevant training described accurately, does more for trust than any slogan. Avoid listing credentials you cannot document, and keep the page current when people leave. Safety practices belong in plain language too: how pickup authorization works, how you handle allergies and medication, and how you communicate with families during an emergency.
## How should tour booking work on a daycare website?
Parents should be able to pick one of the tour times you actually offer, get an instant confirmation and receive a reminder the day before.
Tours are where most enrollment decisions happen, so the booking step should be the easiest thing on the site. Decide which slots you can offer each week, for example two weekday mornings and one late afternoon, and let the booking tool show only those. Ask for the parent's name, contact details, the child's age or due date, and the start date they are hoping for. That is enough for your director to prepare.
I have not built for a childcare center. The closest work I have done is the booking flow for Astiglow, a waxing studio in Los Angeles, where clients choose a service and a time without calling. Tour booking uses the same pattern: a short list of options, open times only, and a confirmation that lands in the parent's inbox.
![Step one of the booking flow I built for Astiglow, where a client chooses a service with prices](/shots/astiglow-book.jpg)
> Send a reminder the evening before each tour with your parking and entry instructions. It cuts no-shows and saves the parent a nervous search for the front door.
## How should enrollment and waitlist forms be built?
Keep the website form short, asking only what you need to place a family on the waitlist, and move detailed enrollment paperwork into a secure system.
A waitlist form should capture the parent's contact details, the child's first name, birth date or due date, the desired start date, the schedule they need (full time, part time, specific days) and whether a sibling is already enrolled. That lets you sort by age group and start date without collecting anything sensitive.
Medical history, allergies, immunization records, custody arrangements and emergency contacts belong in your enrollment process, not in a plain web form that emails a shared inbox. California's regulations for child care centers state that all information and records obtained from or regarding children are confidential, which is a good reason to keep those details inside software designed for them.
The waitlist form I built for Serenity Institute, a certification program, shows the kind of short, structured form that works here: a few clear fields, a confirmation and a list your team can sort.
![The waitlist form fields I built for Serenity Institute](/shots/serenity-home-s4.jpg)
## How should a center show its license on the website?
State your license type, your license number and the agency that issued it, and point parents to the state's public facility search so they can check the record themselves.
In California, licensed child care centers and family child care homes are licensed by the Community Care Licensing Division of the California Department of Social Services. CDSS describes child care centers as usually located in commercial buildings and providing non-medical care for infants to school-age children in group settings for less than 24 hours. Family child care homes must be in the licensee's own home, with small homes serving up to 8 children and large homes up to 14.
CDSS runs an online facility search, and its parent resources say it includes inspection reports, violations and inspection history. Rather than paraphrasing your record, give your license number and tell parents they can look it up. That is more credible than any badge, and it keeps your site honest if a citation is ever recorded. Outside California, use your own state's licensing agency and its terms, since rules and wording differ. This is general information, not legal advice.
## Should a daycare publish its tuition?
Yes, publish rates or ranges by age group and schedule, along with what they include, because price is the question almost every parent asks first.
Infant care usually costs more than preschool, and full time costs more than part time, so a small grid in plain text works well: age group, schedule, monthly or weekly rate. List registration and supply fees, sibling discounts, what meals are included, your holiday closures and how late pickup is billed. If you accept child care subsidies, say which programs and who to ask.
If you are not comfortable posting exact numbers, a starting rate per age group still filters inquiries. Parents who book a tour after seeing it are already comfortable with the price, which makes the tour a better use of your director's time.
## How should a childcare website handle children's photos and privacy?
Use photos of enrolled children only with written parental permission, and design the site so no child can be identified or located from it.
Parents want to see classrooms, outdoor space and activities. You can show all of that without exposing children. Photos of empty rooms, art on the walls, hands at work and children from behind tell the story well. When you do use an identifiable photo, get written consent from that child's parent or guardian for that specific use, keep a record of it and remove the photo promptly if consent is withdrawn or the child leaves.
A few practical rules I would build into any childcare site:
- Never put a child's name, classroom or schedule next to a photo.
- Strip location data from image files before upload.
- Keep daily photos and updates for families inside a parent app, not on public pages.
This is general information, not legal advice. Your licensing consultant or an attorney can tell you what applies to your program.
## Which parent portal options should the site connect to?
Link to the parent and enrollment tools your childcare management software already provides, and let the website handle tours, programs and first contact.
Platforms like brightwheel and Procare cover the daily operations side. Brightwheel lists billing with autopay, check-in, family messaging, digital daily reports with photos, and enrollment forms with waitlist decisions. Procare lists online registration, waitlists and tuition billing. Rebuilding those inside a website rarely makes sense. The better approach is a clear "Parent login" link, an enrollment button that opens your software's form when you are ready to enroll a family, and a website that does the job those tools do not: helping new families find you and decide.
## The bottom line
A childcare website earns trust by being specific and careful: clear ages and hours, accurate licensing with a way to verify it, honest tuition, easy tour booking, a short waitlist form and real restraint with children's photos and data. A single center with those pieces fits the Business Site package, and the website cost calculator can give you a rough number before we talk.`,
  },
];
