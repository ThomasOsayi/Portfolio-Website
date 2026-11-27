// Generated articles, batch 22 (Nov 27 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-27';

export const postsGen22: Post[] = [
  {
    slug: 'website-terms-and-conditions-small-business',
    title: 'Website terms and conditions for a small business: what to include and how to get agreement',
    description: 'Website terms and conditions for a small business: when you need them, the usual clauses, deposit and refund terms, and why clickwrap beats a footer link.',
    date: d,
    keywords: ['website terms and conditions for small business', 'terms and conditions vs privacy policy', 'clickwrap vs browsewrap', 'booking cancellation policy website', 'small business terms of service'],
    service: 'nextjs-website-development',
    shortAnswer: 'Website terms and conditions are the rules of the deal between your business and the people who book or buy through your site. Most small sites need a privacy policy first and terms once they take bookings, deposits, payments or accounts, and agreement should come from an unchecked checkbox at checkout rather than a footer link. This is general information, not legal advice.',
    takeaways: [
      'A privacy policy covers the personal data you collect, while terms and conditions cover the deal itself: payment, cancellations, refunds and responsibilities.',
      'Terms become important the moment a site takes bookings, deposits, payments, gift cards or user accounts.',
      'Booking and refund terms work best as specific rules with numbers, repeated on the booking screen and in the confirmation email.',
      'In Berman v. Freedom Financial Network, the Ninth Circuit required conspicuous notice plus a clear action showing agreement, which a footer link alone does not provide.',
      'Store a record of which version of the terms each customer agreed to and when, alongside the booking or order.',
    ],
    faqs: [
      { q: 'Is a privacy policy the same as terms and conditions?', a: 'No, a privacy policy explains what personal data you collect and how you use it, while terms and conditions set the rules of the transaction, such as payment, cancellations and refunds.' },
      { q: 'Are terms and conditions legally required for a small business website?', a: 'There is no general rule that every small business site must have terms, but they become important once the site takes bookings, deposits or payments, and some state rules, such as refund policy posting rules, can apply to what you sell. Check with a lawyer for your state.' },
      { q: 'Is a link to my terms in the footer enough?', a: 'A footer link is fine for general browsing, but courts have been reluctant to enforce terms that are only linked, so ask for agreement with an unchecked checkbox or clear button text at the point of payment.' },
      { q: 'Can I use a free terms and conditions generator?', a: 'A generator can give you a starting structure, but you need to rewrite it to match how your business actually works and have a lawyer review the liability, dispute and refund sections.' },
      { q: 'Can Thomas Osayi add a terms checkbox to my booking form?', a: 'Yes, the Business Site package from $450 includes a booking or quote form, and wiring in a terms page, an unchecked agreement checkbox and a stored agreement record is part of that build, using wording you supply.' },
    ],
    sources: [
      { title: 'Berman v. Freedom Financial Network LLC, No. 20-16900 (9th Cir. 2022)', publisher: 'Justia', url: 'https://law.justia.com/cases/federal/appellate-courts/ca9/20-16900/20-16900-2022-04-05.html' },
      { title: 'Nguyen v. Barnes & Noble Inc., No. 12-56628 (9th Cir. 2014)', publisher: 'Justia', url: 'https://law.justia.com/cases/federal/appellate-courts/ca9/12-56628/12-56628-2014-08-18.html' },
      { title: 'Refund Policies', publisher: 'California Attorney General', url: 'https://www.oag.ca.gov/consumers/general/refund_policies' },
    ],
    body: `Most small business owners only think about terms and conditions when something goes wrong: a client disputes a deposit, a customer wants a refund on a custom order, or someone copies the photos off the site. A terms page will not prevent every argument, but it puts your rules in writing before the argument starts, and it gives you something specific to point to.
This is the general walkthrough I give clients when we build a site with booking, deposits or checkout. I am a developer, not a lawyer, so treat everything here as general information, not legal advice. For anything that carries real money or risk, have a lawyer licensed in your state review the final wording.
## What are website terms and conditions?
Website terms and conditions are the rules a visitor or customer agrees to when they use your site or buy from you through it.
You will also see them called terms of service or terms of use. The names are mostly interchangeable; what matters is the content.
It helps to separate terms from the other documents that usually sit in the footer:
- A privacy policy explains what personal data you collect and what you do with it. It is about the customer's information.
- Terms and conditions explain the deal between you and the customer. They are about the relationship.
- A refund or cancellation policy is often a section inside the terms, and sometimes also a short page of its own so people can find it quickly.
For a small business, terms set expectations before money changes hands and give you a written basis when a dispute comes up.
## Does a small business website need terms and conditions or a privacy policy?
Most small business sites need a privacy policy first, and they need terms once the site takes bookings, deposits, payments or user accounts.
A privacy policy is triggered by collecting personal information, which almost every site does the moment it has a contact form. I covered that side, including when a cookie banner comes in, in "Do I need a privacy policy and cookie banner on my website?", so I will not repeat it here.
Terms are different. There is no general rule that every brochure site must have them, and a one-page site with a phone number and a contact form can usually get by without a full terms page.
The picture changes when the site starts doing business on your behalf:
- It takes appointment bookings, especially with deposits or cancellation fees.
- It sells products or gift cards online.
- It sells packages, memberships or prepaid sessions.
- It lets people create accounts, upload files or post content.
In each of these cases, the terms are where your cancellation window, refund rules and limits live. Without them, you are relying on whatever the customer remembers from a text message.
## What clauses do small business terms and conditions usually include?
Most small business terms cover the same core set of clauses, adjusted for what the business actually sells.
Here is the list I see most often, in roughly the order they appear:
- Who you are: legal business name, location and contact details.
- Acceptance: that completing a booking or purchase means agreeing to the terms.
- Services or products: what you offer, and that descriptions, photos and availability can change.
- Prices and payment: currency, when payment is taken, taxes, and that prices can change before an order is confirmed.
- Bookings, deposits, cancellations and refunds: the rules that cause most disputes, covered in the next section.
- Intellectual property: that your logo, photos and text belong to you and cannot be reused without permission.
- Disclaimers and limitation of liability: what you are not responsible for, such as outages or third-party services.
- Governing law and disputes: which state's law applies and how disputes are handled.
- Changes to the terms: that you may update them, with a date at the top showing the last update.
The disclaimers, liability limits and dispute sections are where a lawyer earns their fee. Wording that looks strong in a template can be unenforceable in your state or against consumers, so do not copy those parts from a large company and assume they hold for you.
## How should I write booking, deposit and refund terms?
Write booking, deposit and refund terms as plain, specific rules with numbers in them, because vague wording is what turns a cancellation into an argument.
"Deposits may be non-refundable in some cases" helps nobody. "Your $40 deposit is applied to your service. Cancel or reschedule at least 24 hours before your appointment and we refund it in full. Cancel with less notice or miss the appointment and the deposit is kept." That is a rule a customer can follow and you can apply consistently.
For appointment businesses, cover:
- How much the deposit is and what it is applied to.
- The cancellation and reschedule window, in hours.
- What happens with no-shows and late arrivals.
- How refunds are paid, usually back to the original card, and roughly how long that takes.
- What happens if you cancel, which should be a full refund.
For product sellers, cover the return window, the condition returned items must be in, who pays return shipping, and exceptions such as custom or final sale items. Some states have rules of their own. In California, for example, the Attorney General's consumer page explains that retailers who do not offer a full refund, credit or equal exchange within seven days must clearly display their policy, and it lists exceptions such as food and custom orders. That page describes posting at registers, on tags or on order forms, so ask a lawyer how it applies to your online checkout.
The mechanics of collecting deposits are in "How to take deposits online to reduce no-shows". The terms are the written half of that system.
> Put the cancellation rule in three places: the terms page, the booking confirmation screen and the confirmation email. Customers rarely read the terms page, but they do read the screen they are on when they pay.
## What is the difference between clickwrap and browsewrap?
Clickwrap means the customer takes a clear action, like checking a box or clicking a button that says they agree, while browsewrap means the terms are only linked somewhere on the page and simply using the site is supposed to count as agreement.
This distinction can matter more than the wording itself. In Berman v. Freedom Financial Network (Ninth Circuit, 2022), the court described clickwrap agreements as ones courts routinely enforce, and browsewrap agreements as ones courts are more reluctant to enforce. It set out a two-part test: the site must give reasonably conspicuous notice of the terms, and the consumer must take some action, such as clicking a button or checking a box, that unambiguously shows agreement. In that case the notice was in fine print, the link was not readily apparent, and clicking a large continue button was not enough to show agreement.
An earlier Ninth Circuit case, Nguyen v. Barnes and Noble (2014), went the same way for a site that linked its terms at the bottom of every page without asking users to agree. The court said that a link placed near the buttons people click is not, by itself, enough notice.
The practical takeaway: a footer link is fine for general browsing, but for anything that takes money, ask for explicit agreement at the point of purchase.
## How do I add a terms checkbox to a booking or checkout flow?
Add an unchecked checkbox right next to the pay or book button, with a short sentence and a visible link to the terms, and do not let the form submit until it is checked.
On sites I build, the pattern looks like this:
- A checkbox that starts unchecked. A pre-checked box weakens the argument that the customer chose to agree.
- Label text that says what they are agreeing to, such as "I agree to the booking terms, including the 24-hour cancellation policy."
- A link to the terms that looks like a link, in a readable size and a color that contrasts with the surrounding text.
- A one-line summary of the key rule, like the cancellation window, right on the screen.
- A disabled button, or a clear error message, until the box is checked.
On the back end, I store a record of the agreement with the booking: the time, the last-updated date of the terms, and the booking or order ID. If a dispute reaches a payment processor, being able to show that this customer agreed to this version on this date is far more useful than a screenshot of today's terms page.
Here is where that checkbox fits in a real flow. The first step of the booking flow I built for Astiglow is choosing a service with its price, and an agreement checkbox belongs on the final confirm step, next to the button that commits the booking.
![The first step of the booking flow I built for Astiglow: choose a service, with prices shown](/shots/astiglow-book.jpg)
Hosted booking and checkout tools usually have a setting for this. Check that it is on and links to your own terms.
## Can I use a terms and conditions template or generator?
A template or generator is a reasonable starting draft for a low-risk small business, but you have to edit it to match how you actually operate and have the risky parts reviewed.
Generated terms often describe features the business does not have, name the wrong state for governing law, or copy liability language written for a software company. The most common problem is contradiction: if the terms say 48 hours and the booking widget says 24, you have created your own dispute. Whatever your terms say, every screen and every email has to say the same thing.
A sensible approach: use a reputable template for structure, write the business-specific sections yourself, and pay a lawyer to review the final document once. For a business that takes large deposits, sells across state lines in volume, runs subscriptions or hosts user content, I would go to a lawyer first rather than last.
## A worked example: terms for a small event rental business
Here is an illustration using a made-up business. Picture a two-person company in Los Angeles that rents backdrops and lounge furniture for parties. Customers book online and pay a 30 percent deposit, with the rest due a week before the event.
Their terms would include, in plain language:
- A booking is confirmed only when the deposit is paid and a confirmation email is sent.
- The remaining balance is charged seven days before the event date.
- Cancellations more than 30 days before the event get the deposit back in full. Cancellations inside 30 days keep the deposit.
- One free date change if requested more than 14 days out, subject to availability.
- The customer is responsible for damage beyond normal wear, with examples of each.
On the site, the booking form shows a one-line summary of the cancellation rule and an unchecked checkbox. The confirmation email repeats the rule and links to the version of the terms they agreed to.
## Where should the terms live on my website?
Put the full terms on their own page at a simple address like /terms, link it in the footer of every page, and link it again at every point where someone pays or books.
Put a "Last updated" date at the top, keep older versions as dated files in your records so you can show what a past customer agreed to, and use short headed sections so people can find the refund part quickly.
When we build a Business Site, which starts from $450 and includes a booking or quote form, adding the terms page, the checkbox and the agreement record is a small part of the build. You supply the wording, ideally reviewed by a lawyer, and I wire it in so the site actually asks for agreement. "New business website checklist: everything to do before launch" covers the rest of the pre-launch list.
## The bottom line
Website terms and conditions set the rules of the deal between your business and your customers. A privacy policy comes first for almost every site, and terms become important the moment the site takes bookings, deposits, payments or accounts. Keep the clauses specific, especially cancellation and refund rules, and make sure every screen and email repeats the same numbers. Ask for agreement with an unchecked checkbox at the point of payment rather than relying on a footer link, and store a record of who agreed to which version and when. This is general information, not legal advice, so have a lawyer review the final wording for your state and your business.`,
  },
  {
    slug: 'restaurant-menu-on-website-without-pdf',
    title: 'How to put a restaurant menu on your website without a PDF',
    description: 'How to put a restaurant menu on your website without a PDF: why PDFs fail on phones, HTML menu structure, Menu schema markup and keeping prices current.',
    date: d,
    keywords: ['restaurant menu on website without PDF', 'HTML restaurant menu', 'restaurant menu schema markup', 'PDF menu bad for SEO', 'Google Business Profile menu'],
    service: 'nextjs-website-development',
    shortAnswer: 'Put the menu on its own HTML page with a heading for each section and every dish as real text with a name, description and price. Add schema.org Restaurant and Menu markup from the same data, keep one editable source so prices change once, and link that page from your Google Business Profile. Keep a PDF only as an optional printable extra.',
    takeaways: [
      'A PDF menu is built for paper, so on a phone it means downloading, pinching and zooming instead of reading.',
      'An HTML menu gives each dish a name, description and price as real text that search engines and Google Business Profile can read.',
      'On schema.org, a FoodEstablishment such as a Restaurant uses hasMenu, which nests Menu, MenuSection and MenuItem with offers for price.',
      'Generate the menu page, the structured data and any ordering menu from one data source so prices never disagree.',
      "Google's menu editor lets you add sections, items and prices to your Business Profile, and changes can take 24 to 48 hours to appear.",
    ],
    faqs: [
      { q: 'Is it bad to have a PDF menu on a restaurant website?', a: 'It is not forbidden, but a PDF is hard to read on phones, takes people off your site and is easy to leave out of date, so it works best as an optional printable download next to an HTML menu.' },
      { q: 'Can Google read a PDF menu?', a: 'Google can read text in many PDFs, but a PDF has no connection to your site navigation or reservation buttons, and a scanned image PDF may have no readable text at all.' },
      { q: 'What schema markup should a restaurant menu use?', a: 'Use the Restaurant type with hasMenu pointing to a Menu, which contains MenuSection entries, which contain MenuItem entries with offers for the price and currency.' },
      { q: 'How do I update my menu on Google?', a: 'In your Google Business Profile, select Edit menu to add sections, items, descriptions and prices, and set the menu link in your contact settings to your website menu page.' },
      { q: 'How much does it cost to have Thomas Osayi build an HTML menu?', a: 'A restaurant site with an editable HTML menu fits in the Business Site package from $450, which covers up to five pages over about 14 days.' },
    ],
    sources: [
      { title: 'hasMenu', publisher: 'Schema.org', url: 'https://schema.org/hasMenu' },
      { title: 'Menu', publisher: 'Schema.org', url: 'https://schema.org/Menu' },
      { title: 'MenuItem', publisher: 'Schema.org', url: 'https://schema.org/MenuItem' },
      { title: 'About the menu editor', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/9455840?hl=en' },
    ],
    body: `A lot of restaurant websites still handle the menu the same way: a Menu button that opens a PDF. It feels like the safe choice because the PDF is exactly what the designer sent to the printer. On a phone, though, it is one of the worst experiences on the site, and it puts your most important content in the format that is hardest to use.
I build restaurant sites, including New York Nook, a Russian restaurant in Hollywood with reservations and pickup ordering, and the menu is always an HTML page. Here is why, how I structure it, the schema.org markup that goes with it, and how to keep prices current without calling a developer every time.
## Why is a PDF menu bad on a restaurant website?
A PDF menu is bad because it is built for paper, so on a phone it makes people download a file, pinch, zoom and scroll sideways to read a single section.
Think about who opens your menu. Most of them are on a phone, often standing outside or deciding between two places in a group chat. A PDF laid out for a large printed menu shrinks to tiny text on a phone screen. Some phones open it in a separate viewer, which takes the customer off your site and away from the Reserve and Order buttons.
Other problems stack up:
- Large PDFs with photos load slowly on a cellular connection.
- Text is often small and low contrast, which is harder for anyone with weaker eyesight, and screen readers struggle with PDFs that were exported as images.
- Nobody can tap a dish to order it, and you cannot link someone straight to desserts.
- The PDF gets saved, shared and indexed, so an old version with old prices keeps circulating after you replace it.
None of this means a PDF is useless. A printable download is a fine extra for catering clients or people who like paper. It just should not be the menu.
## Does a PDF menu hurt my restaurant's Google rankings?
A PDF menu will not get you penalized, but it makes your menu weaker as search content than the same text on a normal web page.
Google can read the text in many PDFs, so it is not invisible. The trouble is that the PDF is a separate document with no connection to your site's navigation, address, hours or reservation links. If someone searches for a dish and lands on the PDF, they are looking at a file with no buttons and no way to book. If the PDF was exported as a scanned image, there may be no readable text in it at all.
An HTML menu sits on your own domain as a page with a clear title naming the restaurant, the cuisine and the neighborhood, a heading for each section, dish names and descriptions as real text, and links to reserve or order. That is content search engines and AI answer tools can read, quote and send people to.
There is also a Google Business Profile angle. Google's help page for the menu editor says Google may transcribe menu data from your website, and that you can correct or delete transcribed items or opt out. A clean HTML menu gives it something accurate to work from instead of a blurry photo.
## How should an HTML restaurant menu be structured?
Structure an HTML menu as a single page with one heading per section, each dish as its own block with a name, short description and price, and clear labels for dietary information.
The structure I use:
- A page title and one main heading with the restaurant name and the word menu.
- A short sticky row of section links (starters, soups, mains, desserts, drinks) so people can jump around on a phone.
- A heading for each section, then the items in that section.
- Each item with the dish name, a one or two line description, the price, and small tags like vegetarian, spicy or gluten free.
- Photos for a handful of signature dishes, compressed and lazy loaded, not a photo for every line.
- Reserve and Order buttons that stay easy to reach.
On the New York Nook homepage, the menu section shows dishes with their prices as real text, right on the page rather than behind a download.
![The menu section with prices on the New York Nook homepage](/shots/newyorknook-home-s2.jpg)
Keep the full menu on one page unless it is truly huge. One long, well organized page beats five thin ones for both phones and search. If you have separate lunch, dinner and brunch menus, use tabs or separate sections on the same page, each with its own heading and the hours it is served.
## What schema.org markup should a restaurant menu use?
Use the schema.org Restaurant type with a hasMenu property pointing to a Menu, which contains MenuSection entries, which contain MenuItem entries with offers for the price.
On schema.org, hasMenu is defined on FoodEstablishment, and Restaurant is a kind of FoodEstablishment. Its value can be a structured Menu, plain text or a URL to the menu. The structured version nests like this:
- Restaurant, with name, address, telephone, opening hours and hasMenu.
- Menu, with a name such as Dinner and hasMenuSection.
- MenuSection, with a name such as Soups and hasMenuItem. Sections can nest, for example Drinks containing Wine.
- MenuItem, with name, description and offers holding the price and currency.
MenuItem also supports suitableForDiet for things like vegetarian or halal options, and menuAddOn for extras such as a side salad.
In a Next.js site I generate this JSON-LD from the same data file that renders the visible menu, so the markup and the page cannot disagree. If you hand-write the JSON and later change a price on the page, the two drift apart, which is exactly the kind of mismatch that makes structured data untrustworthy.
Treat menu markup as a way to make your data unambiguous to machines, not as a promise of a special search result. The wider picture, including LocalBusiness and review rules, is in "Schema markup for a small business: LocalBusiness, Service, FAQ and review rules".
## How do I keep menu prices updated without a developer?
Keep the menu in one editable place, such as a builder's menu block, a simple content editor or an admin screen, so a price change takes a minute and shows up everywhere on the site at once.
Stale prices are the most common menu complaint. They happen because the menu lives in four or five places: the website, the PDF, Google, delivery apps and the printed menu. Each gets updated on a different day, or never.
The fix is a single source of truth for the website:
- On a hosted builder, the menu block or menu page is the source. Edit it there, not in a PDF.
- On a custom site, I store the menu as structured data (sections, items, prices, tags) and give the owner a simple editor. The page, the schema markup and the ordering menu all read from it.
- If there is online ordering, the ordering system should be the source and the website menu should read from it, so the price you show is the price you charge.
Then keep a short checklist for every price change: website, Google Business Profile, delivery apps and the print file. If you only remember one extra, make it Google, because that is where many customers see your menu first.
> Put a small "Prices updated" month and year at the bottom of the menu page. It sets expectations for guests, and it reminds you when the page has not been touched in a while.
## Should I add my menu to Google Business Profile too?
Yes, add your menu to Google Business Profile and set the menu link to your website menu page, because many people see your profile before they ever visit your site.
Google's help page for the menu editor describes how it works. From your Business Profile you select Edit menu, create sections such as appetizers or main courses, and add items with a name, description and price. Changes can take 24 to 48 hours to appear on Maps and Search. Separately, there is a menu link field in your profile's contact settings, which is where your HTML menu URL goes.
A few more details from that page are worth knowing:
- You can upload menu photos, and customers can too. If a customer photo shows an old menu, you can flag it for removal and upload a current one.
- When Google finds multiple menu sources, you can choose your preferred one in the Full menu tab.
- Google may transcribe menu data from your website, and you can correct it, delete it or opt out.
- An experimental tool can turn a menu photo or PDF into a structured menu, and you review the result before publishing.
How the profile and the website split the work in general is covered in "Google Business Profile vs website: do you need both?".
## How should the menu connect to online ordering?
If you take pickup or delivery orders on your site, the ordering menu and the display menu should come from the same data, so a dish, a price or a sold-out item only has to change once.
For New York Nook, the pickup ordering page shows menu categories, a cart and pickup time slots. The display menu and the ordering menu describe the same dishes, and tying them together keeps a guest from seeing one price on the menu and another at checkout.
![The New York Nook pickup ordering page with menu categories, a cart and pickup time slots](/shots/newyorknook-order.jpg)
I will not repeat the ordering setup here. The tools, fees and trade-offs of taking orders yourself are in "How to take restaurant orders online without third-party fees", and what a full restaurant site costs is in "How much does a restaurant website cost in 2026?". The point for this post is simply that the menu is data, and every place that shows it should read the same data.
## A worked example: converting a PDF menu to HTML
Here is an illustration with a made-up restaurant. A neighborhood taqueria has a two-page PDF menu: tacos, burritos, plates, sides, drinks and a weekend breakfast section, about 45 items in all.
The conversion goes like this:
- Type the menu into a spreadsheet with columns for section, item name, description, price and tags. This is the slowest part, usually an hour or two, and it is where you catch old prices.
- Decide the section order and which three to five dishes get photos.
- Build the menu page from that data: section links at the top, a heading per section, each item as a block, tags as small labels.
- Generate the Restaurant and Menu JSON-LD from the same data.
- Keep the PDF as an optional "Download printable menu" link near the bottom of the page.
- Update Google Business Profile with the menu link and remove outdated menu photos.
On a hosted builder, an owner can do this in an afternoon. On a custom site, a menu page with an editor fits inside a Business Site, which starts from $450 with up to five pages. If you want a rough number for a bigger build with ordering, the website cost calculator on my site gives a range.
## What mistakes should I avoid with an online menu?
The most common mistakes are hiding prices, using images of text, leaving old menus live and making the menu hard to reach on a phone.
Watch for these:
- Leaving prices off to avoid updating them. People want to know roughly what dinner costs, and a menu without prices sends them somewhere else.
- Uploading the menu as a single image. It has the same problems as a scanned PDF.
- Keeping the old PDF live at its old address after you switch. Remove it or replace it, so search results stop sending people to last year's prices.
- Burying the menu behind a slider or a pop-up. Put a Menu link in the main navigation and on the homepage.
- Using tiny, light gray text for descriptions. Readable contrast matters more than a delicate look.
- Skipping dietary labels for the questions you get every night. Add clear tags, plus a line asking guests to tell staff about allergies.
## The bottom line
A restaurant menu belongs on your website as an HTML page, not a PDF. Give each section a heading and each dish a name, description and price as real text, so it reads well on a phone and gives search engines and Google Business Profile accurate content. Add schema.org Restaurant and Menu markup generated from the same data as the page, keep one editable source of truth so prices change once, and update your Google menu and menu link alongside it. Keep a PDF only as an optional printable extra for the people who want one.`,
  },
  {
    slug: 'website-for-a-side-business',
    title: 'Website for a side business: what a side hustle actually needs',
    description: 'What a website for a side business actually needs: one page, a domain, booking and payments, a realistic time budget, and when Instagram alone is enough.',
    date: d,
    keywords: ['website for a side business', 'side hustle website', 'do I need a website for my side hustle', 'one-page website for a small business', 'side business booking and payments'],
    service: 'nextjs-website-development',
    shortAnswer: 'A side business needs one clear page with what you do, your prices, real photos of your work, and a way to book or pay, on a domain you own. Use hosted tools for bookings and payments, add a Google Business Profile if you serve local customers, and expect about an hour a month of upkeep.',
    takeaways: [
      'A side business needs a website once strangers look you up, the same questions repeat every week, or booking through messages costs you jobs.',
      'Version one should be a single page: services and prices, real photos, a booking or payment button, service area and contact details.',
      'Register the domain in your own name and account, and add business email only when clients start emailing you regularly.',
      'Hosted booking tools and payment links are a better fit for a side business than anything custom.',
      'A simple site should take about an hour a month to keep current once it is built.',
    ],
    faqs: [
      { q: 'Does a side hustle need a website?', a: 'Not always, but it does once strangers are looking you up, you keep answering the same questions, or you need a way to book or take payment that is not your direct messages.' },
      { q: 'Is Instagram enough for a side business?', a: 'Instagram can be enough for a small, visual side business that gets few bookings, but you do not own the account and nobody can book a time slot from a photo grid.' },
      { q: 'What is the cheapest way to take payments for a side business?', a: "A payment link from a processor like Stripe, Square or PayPal is usually the simplest, and at the time of writing Stripe's standard pricing has no monthly fee, only a per-transaction rate." },
      { q: 'Can a home-based side business be on Google Maps?', a: 'Yes, Google lets businesses that serve customers at their locations list as a service-area business and remove their address from the profile.' },
      { q: 'What does Thomas Osayi charge for a side business website?', a: 'The Starter Site is from $150 and takes about 7 days, a one-page site with your services, photos, booking or payment link and contact details on your own domain.' },
    ],
    sources: [
      { title: 'Stripe pricing', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
      { title: 'Manage your service areas for service-area and hybrid businesses', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/9157481' },
      { title: 'Self-employment tax (Social Security and Medicare taxes)', publisher: 'Internal Revenue Service', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes?swcfpc=1' },
    ],
    body: `A side business does not need the website a full-time company needs. It needs a page that makes you look legitimate, answers the obvious questions, and lets someone book or pay without a week of back and forth in your messages. Everything beyond that has to earn its place, because your time is the scarcest thing you have.
This is how I think about websites for side hustles: what to build, what to skip, what it costs in money and hours, and when Instagram alone is honestly enough.
## Does a side business need a website?
A side business needs a website once people are finding you outside your own circle, asking the same questions over and over, or need a way to book or pay that is not your direct messages.
When your customers are friends, coworkers and their friends, a phone number and a social profile can carry you. The website starts to matter when:
- Strangers want to check you out before they reach out, and they search your name.
- You answer the same questions about prices, area and availability every week.
- You lose bookings because the back and forth takes too long.
- You want to take a deposit or full payment up front.
- A client, venue or marketplace asks for your website.
A site also changes how people see a side business. A clear page with your services, prices and a booking button reads as a real business, even if you only run it on Saturdays.
## When is Instagram enough for a side hustle?
Instagram can be enough when your work is visual, your customers already find you there, and bookings are few enough that messaging each one is not a burden.
A weekend baker who takes a handful of custom cake orders a month from local followers might be fine with Instagram, a link in the bio and a payment link. The friction is low and the audience is already there.
The limits show up as you grow. You do not own the account, the feed decides who sees your posts, profiles are a weak answer to a Google search, and nobody can book a time slot from a grid of photos. I went through the full trade-off in "Do I need a website if my business already has Instagram?". The short version for a side hustle: keep Instagram as the place people discover you, and add a simple site as the place they decide and book.
If you are unsure, a one-page site is a low-cost experiment. Put its link in your bio for a couple of months and see whether people use the booking button.
## What does a side business website actually need?
A side business website needs one clear page with what you do, who it is for, prices or starting prices, proof of your work, how to book or pay, and how to reach you.
That is all for version one. In order, the page I build looks like this:
- A headline that says what you do and where, such as "Mobile bike repair on the Westside, evenings and weekends."
- Your services with prices or starting prices.
- Three to six photos of real work, not stock photos.
- A few reviews or client quotes, with permission, once you have them.
- A booking button, quote form or payment link.
- Your service area and the hours you are available.
- Contact details and a short line about you.
Skip the blog, the multi-page structure, the team page and the careers page. Those make sense for full-time businesses with time to maintain them. A side business site that is short and current beats a big site that is out of date. If the business grows, "What pages does a small business website need? A page-by-page plan" shows how to expand it without starting over.
## How much does a website for a side business cost?
A side business website can cost almost nothing on a free builder plan, a modest monthly fee on a paid builder, or a one-time build fee if a developer makes it.
Your recurring costs are usually:
- A domain name, typically renewed yearly.
- Hosting or a builder subscription, unless the site runs on a free hosting tier.
- Business email, if you want an address on your own domain.
- Payment processing, which with most processors is a percentage per transaction rather than a monthly fee.
On the build side, my Starter Site is from $150 and takes about 7 days. It is a one-page site with the sections listed above, built to load fast on phones and connected to your domain. If you later need more pages, a booking or quote form and local SEO, the Business Site starts from $450. For most side businesses I suggest starting with the Starter Site and upgrading only when the site is clearly bringing in work.
The website cost calculator on my site gives a rough range if you want to compare options before reaching out to anyone.
## Do I need a custom domain and business email?
Get a custom domain, because it is cheap and it is the one part of your online presence you fully own, but business email can wait until clients are emailing you regularly.
A domain with your name or business name makes the business look established, looks right on cards and invoices, and stays yours if you change builders or developers. Pick something short and easy to say out loud. "How to choose a domain name for a small business" goes into naming, extensions and what to avoid.
Email is more flexible. Plenty of side businesses start with a free personal address and switch later. When you do switch, Google Workspace and Microsoft 365 are the usual choices, compared in "Google Workspace vs Microsoft 365 for business email". Whatever you choose, register the domain in your own name and your own account, not a friend's or a developer's, so you never have to ask permission to move it.
> Use a separate email address and phone number for the side business from day one, even free ones. Keeping customer messages out of your personal inbox saves a lot of confusion once the business picks up.
## How should a side business take bookings and payments?
Use a hosted booking or payment tool connected to your site rather than building anything custom, because a side business needs reliability more than features.
For payments, a payment link is often the simplest option. At the time of writing, Stripe's pricing page lists 2.9% plus 30 cents per successful domestic card transaction on standard pricing, with no setup or monthly fees, and Payment Links let you sell without building a checkout. Square and PayPal offer similar tools, compared in "Square vs Stripe vs PayPal for taking payments on a small business website".
For bookings, an embedded scheduler works well for most service side hustles. Set your real availability, such as two weekday evenings and Saturday mornings, and let the tool send confirmations and reminders. If no-shows become a problem, take a deposit, as covered in "How to take deposits online to reduce no-shows".
Two settings matter more than which tool you pick:
- Block out the hours of your main job, so nobody books a slot you cannot take.
- Add a buffer between appointments for travel or setup.
## How much time does a side business website take to run?
Once it is built, a simple side business website should take about an hour a month to keep current, and it should never turn into a second job.
Here is a realistic time budget:
- Setup, if you build it yourself on a builder: a weekend, mostly spent writing copy and choosing photos.
- Setup, if a developer builds it: an hour or two of your time sending content and reviewing a draft.
- Monthly: update prices or availability, swap in a recent photo, and check that the booking and contact forms still deliver.
- Every few months: add new reviews, look at the site on your phone, and make sure your Google listing matches the site.
The biggest time sink is not the site itself but chasing content. Write your service descriptions and prices once in a document, keep your best photos in one folder, and reuse them everywhere. "What to send a web developer before your project starts" lists what to gather if someone else is building it.
## Should a side business have a Google Business Profile?
Yes, a side business that serves local customers should usually have a Google Business Profile, and a home-based one can list as a service-area business without showing its address.
Google's help page on service areas says that if you do not serve customers at your business address, you should remove the address from your profile, and that a business without permanent signage at a location should be listed as a service-area business. You can set up to 20 service areas. That fits a lot of side businesses: mobile detailing, tutoring, pet sitting, photography or small home repairs.
The profile and the website work together. The profile gets you onto Maps and local searches, and the website gives people the detail and the booking button. If you have no storefront, "Service-area business website without an address: local SEO with no storefront" covers how to show up in local results without one.
## A worked example: a weekend photography side business
Here is an illustration with a made-up business. A nurse in Long Beach shoots family and graduation portraits on weekends. Bookings come from friends and Instagram, but strangers keep asking the same three questions: price, location and how to book.
Her version one:
- A domain with her name and the word photo in it.
- A one-page site with three packages and their prices, a dozen photos, two client quotes and a short about section.
- An embedded booking tool that shows only Saturday and Sunday slots, with a deposit to hold the date.
- A Google Business Profile as a service-area business covering a few nearby cities, with the site linked.
- The site link in her Instagram bio, replacing the separate link page.
Ongoing time is about an hour a month: new photos after a good shoot, availability changes around her shifts, and replies to reviews.
One more thing a website makes obvious is that the side business is real income. The IRS self-employment tax page says you generally have to file Schedule SE if your net earnings from self-employment are $400 or more. That is general information, not tax advice, so check with a tax professional about your own situation.
## The bottom line
A website for a side business should be small, accurate and easy to keep current. Start with one page that shows what you do, your prices, real photos and a way to book or pay, on a domain you own. Use hosted tools for bookings and payments, add a Google Business Profile if you serve local customers, and budget about an hour a month to keep it fresh. Instagram can carry a very small, visual side hustle, but once strangers are looking you up or booking is eating your evenings, a simple site pays for itself in saved time.`,
  },
  {
    slug: 'squarespace-vs-shopify-for-small-store',
    title: 'Squarespace vs Shopify for a small online store: costs, fees and which to pick',
    description: 'Squarespace vs Shopify for a small online store: plan prices and transaction fees at the time of writing, pros and cons, a custom option, and picks by seller type.',
    date: d,
    keywords: ['Squarespace vs Shopify', 'Squarespace vs Shopify for small business', 'Squarespace commerce fees', 'Shopify Basic plan cost', 'best platform for a small online store'],
    service: 'nextjs-website-development',
    shortAnswer: 'Squarespace suits a small, design-led store where content and brand carry the sale, and Shopify suits a product-first store that expects to grow its catalog, channels or order volume. At the time of writing, Squarespace Basic adds a 2% transaction fee on store sales, while Shopify Basic adds a fee only when you use a payment provider other than Shopify Payments.',
    takeaways: [
      'Squarespace is a website builder that added commerce, and Shopify is a commerce platform that also builds websites.',
      'At the time of writing, Squarespace plans run $19 to $99 per month billed annually, and Shopify Basic, Grow and Advanced run $29 to $299 per month billed yearly.',
      'Squarespace Basic charges a 2% transaction fee on online store sales, while its higher plans charge 0%.',
      'Shopify charges no third-party transaction fee when you use Shopify Payments, but paid apps can add meaningful monthly cost.',
      'Compare total monthly cost at your expected sales, including card processing and apps, rather than the plan price alone.',
    ],
    faqs: [
      { q: 'Is Squarespace cheaper than Shopify?', a: 'At very low sales Squarespace Basic is cheaper, but its 2% transaction fee means Squarespace Core or Shopify Basic often costs less once a store sells steadily, before counting apps.' },
      { q: 'Does Shopify charge transaction fees?', a: 'At the time of writing, Shopify charges no third-party transaction fee when you use Shopify Payments, and charges 2% on Basic, 1% on Grow and 0.6% on Advanced if you use another payment provider.' },
      { q: 'Can I sell products on any Squarespace plan?', a: 'Yes, at the time of writing Squarespace says all paid plans can sell products or services, with a 2% transaction fee on Basic and 0% on Core, Plus and Advanced.' },
      { q: 'Can I move my store from Squarespace to Shopify later?', a: 'Yes, but expect to export and clean up products, rebuild pages and set up redirects for every old URL so you keep your search rankings.' },
      { q: 'When would Thomas Osayi recommend a custom store instead?', a: 'When the shopping experience or your operations need something the platforms cannot do, and the Full Custom Build starts from $1,200 over about 21 days.' },
    ],
    sources: [
      { title: 'Squarespace pricing', publisher: 'Squarespace', url: 'https://www.squarespace.com/pricing' },
      { title: 'Shopify pricing', publisher: 'Shopify', url: 'https://www.shopify.com/pricing' },
      { title: 'Pricing plans and billing overview', publisher: 'Shopify Help Center', url: 'https://help.shopify.com/manual/intro-to-shopify/pricing-plans/pricing-overview' },
    ],
    body: `If you are opening a small online store, Squarespace and Shopify are usually the first two names you hear. Both take payments, handle checkout and look good on a phone. They come from different directions, though: Squarespace is a website builder that added commerce, and Shopify is a commerce platform that also builds websites. That difference shows up in cost, in add-ons and in how far each one stretches as you grow.
I build storefronts, including LACEUP, a basketball apparel store with colorway filters and a Firebase admin, so I also cover the third option, a custom Next.js store, and when it makes sense. Prices below come from the Squarespace and Shopify pricing pages at the time of writing, checked on November 27, 2026. They change, so confirm them before you sign up.
## Is Squarespace or Shopify better for a small online store?
Squarespace is better for a small store where the website, brand and content matter as much as the products, and Shopify is better when selling is the core of the business and you expect the catalog, channels or order volume to grow.
A ceramicist selling a dozen pieces alongside a portfolio, workshops and a journal is a natural Squarespace customer. A clothing brand planning drops, sizes, colorways, wholesale and pop-ups is a natural Shopify customer.
Both are hosted, both handle security and checkout, and both let you start without a developer. The differences are in the details:
- Shopify has a much larger app ecosystem and more inventory, shipping and sales channel options.
- Squarespace has stronger built-in design and content tools, so a simple store needs fewer add-ons.
- Their fee structures differ, especially on entry plans and when you use an outside payment processor.
The rest of this post walks through each option on its own terms, then gives a recommendation for each type of seller.
## How much does Squarespace cost for an online store?
At the time of writing, Squarespace plans run from $19 to $99 per month billed annually, or $25 to $139 billed monthly, and every paid plan can sell products.
From the Squarespace pricing page:
- Basic: $19 per month billed annually, $25 billed monthly, with a 2% transaction fee on online store sales.
- Core: $29 annually, $39 monthly, with a 0% transaction fee on online store sales.
- Plus: $49 annually, $65 monthly, 0% transaction fee.
- Advanced: $99 annually, $139 monthly, 0% transaction fee.
Card processing is separate. The page lists a standard card rate of 2.9% plus 30 cents on Basic and Core, 2.7% plus 30 cents on Plus, and 2.5% plus 30 cents on Advanced. Digital content and memberships carry their own fees, from 7% on Basic down to 0% on Advanced.
For a store with steady sales, the 2% fee on Basic is the number to watch. On a few hundred dollars a month it is small. As sales grow, it overtakes the price difference between Basic and Core, and from that point Core is the cheaper plan overall.
## How much does Shopify cost for a small store?
At the time of writing, Shopify's Basic plan is $29 per month billed yearly or $39 billed monthly, with Grow at $79 or $105 and Advanced at $299 or $399.
From the Shopify pricing page:
- Basic: $29 per month billed yearly, $39 monthly. Online card rate with Shopify Payments 2.9% plus 30 cents. Fee when using a third-party payment provider: 2%.
- Grow: $79 yearly, $105 monthly. Card rate 2.7% plus 30 cents. Third-party fee 1%.
- Advanced: $299 yearly, $399 monthly. Card rate 2.5% plus 30 cents. Third-party fee 0.6%.
- Plus: from $2,300 per month, aimed at larger businesses.
The headline offer on the page at the time of writing is 3 days free, then $1 per month for 3 months. Shopify's help center notes that transactions through Shopify Payments do not incur third-party transaction fees, so most small stores use Shopify Payments and never pay the extra percentage.
The cost that surprises people is apps. Reviews, subscriptions, bundles, size charts, email marketing and wholesale features often come from paid apps, each with its own monthly fee. Budget for a few before you compare totals.
## What are the pros and cons of each option?
Each option has clear strengths, and the right one depends on whether your store is mostly a website with products or mostly a product business with a website.
### Squarespace
Best for: makers, artists, coaches and service businesses selling a small catalog alongside content, bookings or a portfolio.
Cost range: $19 to $99 per month billed annually at the time of writing, plus card processing, with a 2% transaction fee on Basic only.
Pros:
- Polished templates that look good with little effort.
- Pages, blog, portfolio and store in one editor.
- Fewer add-ons needed for a simple store.
- Predictable monthly cost for a small catalog.
Cons:
- Fewer commerce extensions than Shopify.
- Less depth for complex inventory, variants, wholesale or many sales channels.
- Design flexibility stays inside the template system.
### Shopify
Best for: product-first brands, apparel, stores expecting growth in catalog or order volume, and sellers who want social, marketplace and in-person sales in one place.
Cost range: $29 to $299 per month billed yearly at the time of writing, plus card processing and any paid apps.
Pros:
- Commerce depth: variants, inventory, shipping, discounts and a checkout built for selling.
- A very large app and theme ecosystem.
- Sales channels and point of sale tied to the same product catalog.
- Room to grow without switching platforms.
Cons:
- App subscriptions add up.
- Content pages and blogging feel secondary to the store.
- Using a payment provider other than Shopify Payments adds a transaction fee on the plans listed.
### A custom Next.js store
Best for: brands that need a specific shopping experience, custom product logic, or an admin built around how they actually operate.
Cost range: my Full Custom Build starts from $1,200 over about 21 days, plus hosting and payment processing, and a store with heavy custom features costs more.
Pros:
- Full control over design, filters, product pages and page speed.
- Custom admin tools and data you own.
- No platform transaction fee on top of the payment processor.
Cons:
- Higher upfront cost and a longer build than a template.
- New features and maintenance need a developer.
- You build or integrate things the platforms include, like discounts and tax handling.
## When does a custom Next.js store make sense instead?
A custom store makes sense when the shopping experience is part of the product, or when the platforms force workarounds that cost more over time than a build would.
LACEUP is an example of what custom looks like. The shop-all page has category filters, and the storefront presents products with colorway swatches the way the brand wanted, rather than the way a theme allowed.
![The LACEUP shop-all page with category filters](/shots/laceup-shop.jpg)
Product pages have a size selector, add to bag and a size guide, with a Firebase admin behind them for managing products.
![A LACEUP product page with a size selector and add to bag for a $52 jersey](/shots/laceup-products-reversible-mesh-jersey.jpg)
For most small stores, though, custom is not the first step. If your catalog is small and your needs are standard, a hosted platform gets you selling sooner and for less. I compare custom against Shopify in more depth in "Shopify vs a custom Next.js store: when does custom make sense?", and "Headless Shopify vs a Shopify theme: which architecture fits your store?" covers the middle path of keeping Shopify's back end with a custom front end.
## How do transaction and processing fees compare?
On their entry plans, both platforms list a 2.9% plus 30 cents card rate at the time of writing, but Squarespace Basic adds a 2% transaction fee on store sales, while Shopify Basic adds 2% only if you use a third-party payment provider.
That one line is the most important cost difference for a small store. Here is an illustration with made-up numbers: a store selling $2,000 a month in products, paying monthly rather than annually.
- Squarespace Basic: $25 plan, plus a 2% transaction fee on $2,000, which is $40, plus card processing.
- Squarespace Core: $39 plan, no transaction fee, plus card processing.
- Shopify Basic with Shopify Payments: $39 plan, no third-party fee, plus card processing.
At that volume, Squarespace Core and Shopify Basic cost the same per month before apps, and Squarespace Basic costs more than Core once the 2% fee is counted. At very low volume, Squarespace Basic is the cheapest of the three. Run the same math with your own expected monthly sales, then add the apps you know you will need.
> Compare platforms on total monthly cost at your expected sales, not on the plan price. Add the plan, transaction fees, card processing and every paid app you would install.
## Which is easier to set up and run day to day?
Squarespace is usually easier for a small catalog and a design-led site, while Shopify is easier once you are managing inventory, variants, discounts and fulfillment every week.
Setting up a Squarespace store feels like building a website: pick a template, add pages, add products. With a dozen items and good photos, you can be live in a weekend.
Shopify setup is more about the store itself: products and variants, shipping zones and rates, taxes, payments, and then a theme. It takes a bit longer at the start, but the admin is built around orders and inventory, which pays off as volume grows.
Day to day, think about what you will do most. If it is updating pages, writing posts and adding the occasional product, Squarespace fits. If it is processing orders, restocking sizes and running discounts, Shopify fits. If you are launching apparel specifically, "How to launch a clothing brand website that sells" covers the store pages that matter most.
## Can I switch from Squarespace to Shopify later?
Yes, you can move from Squarespace to Shopify later, but plan for exporting products, rebuilding pages and setting up redirects so you keep your search rankings.
Products can usually be exported and imported, though variants, images and descriptions often need cleanup. Content pages, blog posts and design do not carry over between platforms on their own. The step most people skip is redirects: every old product and page URL should point to its new address, or the links in Google and on social media break. "How to move from Wix or Squarespace without losing your Google rankings" walks through that process.
If you already expect to outgrow Squarespace within a year, starting on Shopify avoids the move. If you are not sure the store will take off, starting simple is reasonable, as long as your domain sits in your own account so it can move with you.
## Which should I choose? My recommendation by seller type
Choose based on what your business mostly is, not on which platform has the longer feature list.
- A maker, artist or creator selling a small collection beside a portfolio or content: Squarespace, on Core once sales are steady enough that the 2% Basic fee would add up.
- A service business selling a few products, gift cards or packages alongside bookings: Squarespace, or keep your current site and add simple payment links.
- A product-first brand, especially apparel with sizes and colorways, planning to grow: Shopify Basic with Shopify Payments and a short list of essential apps.
- An established store with a specific shopping experience in mind, or operations the platforms cannot model: a custom build, or headless Shopify if you want to keep Shopify's back end.
Both platforms are solid products that plenty of successful stores run on. The real mistake is choosing on looks alone and discovering the fee structure or a missing feature six months later. If you are also weighing a general business site, "WordPress vs Squarespace for a small business" is the companion comparison.
## The bottom line
Squarespace vs Shopify comes down to what your store is. Squarespace suits small, design-led stores where content and brand carry the sale, with plans from $19 per month billed annually at the time of writing and a 2% transaction fee only on Basic. Shopify suits product-first stores that will grow, with Basic at $29 per month billed yearly, no extra fee when you use Shopify Payments, and a large app ecosystem that adds its own monthly costs. Compare total monthly cost at your expected sales, check both pricing pages yourself before signing up, and consider a custom Next.js store only when the shopping experience or your operations need something the platforms cannot do.`,
  },
];
