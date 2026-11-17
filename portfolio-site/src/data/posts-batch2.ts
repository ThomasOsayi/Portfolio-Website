// Articles, batch 2 (Nov 17 2026). Prices come only from the packages in seo.ts.
import type { Post } from './seo';

const d = '2026-11-17';

export const postsBatch2: Post[] = [
  {
    slug: 'signs-your-website-needs-a-redesign',
    title: '7 signs your business website needs a redesign',
    description: 'How to tell whether your website needs a full redesign or just fixes, with the warning signs that cost small businesses customers.',
    date: d,
    keywords: ['website redesign', 'when to redesign website', 'signs you need a new website', 'outdated website'],
    service: 'nextjs-website-development',
    shortAnswer: 'A website needs a redesign when it is slow or awkward on phones, no longer matches what the business sells, is hard to update, or brings in few inquiries despite steady traffic. If only one page or feature is the problem, targeted fixes are usually cheaper.',
    faqs: [
      { q: 'How often should a business redesign its website?', a: 'There is no fixed schedule; redesign when the site stops matching the business or stops converting, which for many small businesses is every few years.' },
      { q: 'Will a redesign hurt my Google rankings?', a: 'Not if old URLs redirect to their new equivalents and the content that ranks is kept or improved.' },
      { q: 'Is a redesign or a fix cheaper?', a: 'A fix, when the problem is limited to a few pages or one feature.' },
    ],
    body: `Redesigns are expensive in time and attention, so it pays to be sure. These are the signs that matter.
## 1. It is hard to use on a phone
Most local searches happen on phones. If text is tiny, buttons are cramped or the menu breaks, visitors leave before they read anything.
## 2. It is slow
If pages take several seconds to show anything on mobile data, you are losing visitors and search visibility. Speed problems built into an old theme are often cheaper to rebuild than to patch.
## 3. It describes a business you no longer run
Old services, old prices, old photos and team members who left. Visitors notice, and it makes the whole business feel out of date.
## 4. Updating it is painful
If changing a price means calling a developer or fighting a page builder, the site will drift out of date again.
## 5. Traffic but no inquiries
Steady visits with few calls or forms usually means the next step is unclear, the offer is buried or the site does not build enough trust.
## 6. It looks like a template
In categories where customers compare several options at once, a generic look makes you blend in with every competitor.
## 7. Security warnings or constant plugin updates
An old plugin-based site that needs regular patching is a liability.
## Fix or redesign?
If one or two of these apply to a few pages, fix those pages. If four or more apply across the site, a redesign usually costs less than years of patches. Either way, keep your URLs or redirect them so rankings carry over.`,
  },
  {
    slug: 'core-web-vitals-for-small-business-websites',
    title: 'Core Web Vitals explained for small business owners',
    description: 'What LCP, INP and CLS measure, what good scores look like, and the usual fixes for a slow small business website.',
    date: d,
    keywords: ['Core Web Vitals', 'LCP INP CLS', 'website speed small business', 'improve page speed'],
    service: 'nextjs-website-development',
    shortAnswer: 'Core Web Vitals are Google\'s three measures of page experience: LCP (how fast the main content appears, good under 2.5 seconds), INP (how fast the page responds to taps, good under 200 milliseconds) and CLS (how much the layout jumps, good under 0.1).',
    faqs: [
      { q: 'Do Core Web Vitals affect Google rankings?', a: 'Google uses them as part of its page experience signals, though relevant, helpful content still matters more.' },
      { q: 'Where can I see my Core Web Vitals?', a: 'In Google Search Console under Core Web Vitals, and for single pages in PageSpeed Insights.' },
      { q: 'What usually makes a small business site slow?', a: 'Oversized images, too many third-party scripts and heavy themes or page builders.' },
    ],
    body: `Core Web Vitals turn "is my site fast" into three numbers Google measures from real visitors.
## LCP: Largest Contentful Paint
How long until the biggest thing on screen, usually the hero image or headline, appears. Good is 2.5 seconds or less. Common causes of a slow LCP are a huge hero image, a slow server and render-blocking scripts and fonts.
## INP: Interaction to Next Paint
How quickly the page responds when someone taps a button or opens a menu. Good is 200 milliseconds or less. Heavy JavaScript, chat widgets and tracking scripts are the usual culprits.
## CLS: Cumulative Layout Shift
How much the page jumps around while loading. Good is 0.1 or less. Images without set dimensions, late-loading banners and web fonts that swap in cause most shifts.
## Where to check
Search Console's Core Web Vitals report shows real-visitor data for your whole site. PageSpeed Insights tests one page and lists what to fix.
## The usual fixes
- Serve images at the right size in modern formats
- Remove scripts and apps you do not use
- Set width and height on images and embeds
- Load chat and analytics widgets after the main content
- Use a framework that pre-builds pages, such as Next.js
## Keep perspective
Fast pages help, but they will not rank thin content. Treat speed as the floor, and helpful pages as the thing that wins.`,
  },
  {
    slug: 'how-to-get-your-business-mentioned-in-ai-search',
    title: 'How to get your business mentioned in ChatGPT, Perplexity and Google AI answers',
    description: 'What makes AI search tools cite or recommend a business, and the practical steps a small business can take to show up in AI answers.',
    date: d,
    keywords: ['AI search optimization', 'get mentioned in ChatGPT', 'AI Overviews small business', 'generative engine optimization'],
    service: 'nextjs-website-development',
    shortAnswer: 'AI search tools mention businesses that are described consistently across many trusted websites and that publish clear, specific answers to the questions customers ask. Mentions on other sites, answer-first pages, comparisons and fresh, factual content matter more than technical tricks.',
    faqs: [
      { q: 'Is AI search optimization different from SEO?', a: 'It builds on the same foundation, but mentions on other websites and clearly quotable answers carry extra weight in AI answers.' },
      { q: 'Does an llms.txt file get me into ChatGPT?', a: 'There is no clear evidence that AI tools rely on llms.txt today; it is cheap to add but not a substitute for content and mentions.' },
      { q: 'Can I pay to appear in AI answers?', a: 'Not in the organic answers; you earn mentions through content, reviews and coverage on other sites.' },
    ],
    body: `AI search tools answer a question by reading many sources and summarizing them. To be in the answer, your business has to be in the sources.
## Be mentioned on other websites
Being named on trusted third-party sites is one of the strongest signals: industry directories, review platforms, local news, roundup articles and community discussions. Consistent descriptions across these sources help AI tools understand what you do.
## Answer questions directly
Pages that open with a plain, quotable answer are easier for AI tools to use. Start each page and each section with the direct answer, then explain.
## Keep sections self-contained
AI tools often quote a single section. Sections of roughly 120 to 180 words, each making sense alone, work better than long walls of text.
## Publish comparisons
"X vs Y" and "which option is right for" questions are common in AI search. Honest comparisons of methods, options or your own packages are often cited.
## Use specific facts
Prices, timelines, locations, numbers and named examples give an AI something concrete to repeat. Vague marketing copy gives it nothing.
## Keep content fresh and true
Update pages when something real changes and show the date. Never change dates without changing content.
## The technical basics
Let AI crawlers access your site in robots.txt, use structured data that matches the visible page, and keep business details consistent everywhere.`,
  },
  {
    slug: 'vercel-build-failed-nextjs-fixes',
    title: 'Vercel build failed? The most common Next.js deploy errors and fixes',
    description: 'Why a Next.js app builds on your laptop but fails on Vercel, and how to fix type errors, missing environment variables, case-sensitive imports and more.',
    date: d,
    keywords: ['Vercel build failed', 'Next.js build error', 'works locally fails on Vercel', 'Vercel deployment error'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Most Vercel build failures come from five causes: TypeScript errors the dev server ignored, environment variables missing in Vercel, imports whose letter case does not match the file name, dependency or Node version mismatches, and code that touches browser-only APIs during the server build.',
    faqs: [
      { q: 'Why does npm run dev work but the Vercel build fail?', a: 'The dev server is lenient; a production build type-checks and prerenders every page, which exposes errors dev mode skipped.' },
      { q: 'Why does an import work on my Mac but fail on Vercel?', a: 'macOS file systems usually ignore letter case and Vercel\'s Linux builders do not, so Button.tsx and button.tsx are different files there.' },
      { q: 'How do I see what failed?', a: 'Open the deployment in Vercel and read the build log from the first error, not the last line.' },
    ],
    body: `The fastest way to debug a failed deploy is to run the same production build locally with npm run build. Most of the time the error appears there too.
## 1. Type errors
The dev server often keeps running with type errors. The production build does not. Read the first error in the log and fix it, rather than suppressing type checks.
## 2. Missing environment variables
Variables in your local .env file do not exist on Vercel until you add them in the project settings for the right environment. Variables the browser needs must use the NEXT_PUBLIC_ prefix; secrets must not.
## 3. Letter case in imports
An import of ./components/Button that points at button.tsx works on most Macs and fails on Linux. Match the case exactly, and rename files with git mv so the change is recorded.
## 4. Dependencies and Node version
A lockfile out of sync with package.json, a package installed globally on your machine but not listed, or a Node version mismatch. Commit the lockfile and set the Node version in the project settings or package.json.
## 5. Browser-only code on the server
Using window, document or localStorage at the top level of a component breaks prerendering. Move that code into an effect or a client component.
## 6. Pages that fetch during the build
If a page fetches data at build time and the API is down or needs a secret, the build fails. Check what each page fetches and when.
## Still stuck
Send me the build log and the repo. Single deploy fixes start at $60.`,
  },
  {
    slug: 'fix-nextjs-hydration-error',
    title: 'How to fix "Hydration failed" errors in Next.js',
    description: 'What a hydration mismatch is, the common causes in Next.js and React apps, and how to fix each one properly.',
    date: d,
    keywords: ['Next.js hydration error', 'hydration failed because the server rendered HTML', 'React hydration mismatch fix'],
    service: 'fix-ai-built-app',
    shortAnswer: 'A hydration error means the HTML rendered on the server differs from what React renders first in the browser. The usual causes are dates, random values or browser-only data used during render, invalid HTML nesting, and browser extensions that change the page.',
    faqs: [
      { q: 'Is a hydration error serious?', a: 'It can be: React may throw away the server HTML and re-render, which slows the page and can cause visible flicker or broken state.' },
      { q: 'Should I just add suppressHydrationWarning?', a: 'Only for a single element whose difference is expected, such as a timestamp; it hides the warning without fixing real mismatches.' },
      { q: 'Why does it only happen for some users?', a: 'Browser extensions that edit the page, such as translators or password managers, can cause mismatches on their machines only.' },
    ],
    body: `React renders your page on the server, sends the HTML, then "hydrates" it in the browser by rendering again and attaching event handlers. If the two renders disagree, you get a hydration error.
## Cause 1: values that differ between server and browser
new Date(), Math.random(), the user's time zone or locale formatting all produce different results on the server and in the browser. Fix: render a stable value first, then update it in an effect after the page loads.
## Cause 2: browser-only data during render
Reading window, localStorage or screen size during render. The server has no such values. Fix: read them in an effect, or render that component only on the client.
## Cause 3: invalid HTML nesting
A div inside a p, a link inside a link, or a table without a tbody. Browsers repair invalid HTML before React hydrates, so the structures no longer match. Fix the markup; the error message usually names the element.
## Cause 4: conditional rendering on typeof window
Checking typeof window inside render creates two different outputs by design. Use an effect or a mounted flag instead.
## Cause 5: browser extensions
If the error only happens for some people, test in a private window with extensions off.
## How to find it fast
Read the full error in development; React shows the element and the text that differed. Search the component for dates, random values and window access first.`,
  },
  {
    slug: 'firebase-security-rules-checklist',
    title: 'Firebase security rules checklist before you launch',
    description: 'A practical checklist for Firestore and Storage security rules in an MVP or AI-built app, so user data is not readable by anyone.',
    date: d,
    keywords: ['Firebase security rules', 'Firestore rules checklist', 'Firebase test mode expired', 'secure Firebase app'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Before launch, make sure no Firestore or Storage rule allows reads or writes to everyone, every user-owned document checks request.auth.uid against the owner, writes validate the fields they accept, and admin actions run on the server with the Admin SDK instead of from the browser.',
    faqs: [
      { q: 'What does Firebase test mode do?', a: 'It allows anyone to read and write the database until a set date, which is fine for a prototype and dangerous after launch.' },
      { q: 'Is the Firebase config in my frontend a secret?', a: 'No. It identifies your project and is public by design, so security rules are what protect your data.' },
      { q: 'How do I test security rules?', a: 'Use the Rules Playground in the Firebase console or the local emulator, signed in as different test users.' },
    ],
    body: `Firebase is safe when its rules are right. The config in your frontend is public, so the rules are the only thing standing between a stranger and your data.
## Start with the open rules
Search your firestore.rules and storage.rules for allow read, write: if true, and for test-mode rules with an expiry date. Replace every one before launch.
## Tie documents to their owner
For user-owned data, check that request.auth.uid matches the owner field or the document ID. Do the same on create, so a user cannot create a document owned by someone else.
## Validate writes
Limit which fields a user can set and what types they must be. A user should never be able to set their own role, plan or credit balance.
## Keep admin work on the server
Role changes, payments, refunds and anything cross-user should run in a server route or Cloud Function with the Admin SDK, which bypasses rules safely on trusted code.
## Storage
Files have their own rules. Private uploads should live under a path with the user ID and check it, and uploads should limit size and file type.
## Checklist
- No rule allows everyone to read or write
- Every user document checks ownership on read and write
- Users cannot edit their own role or plan
- Admin actions run server-side
- Storage paths checked by user ID, with size limits
- Rules tested as a second user and as a signed-out visitor`,
  },
  {
    slug: 'vibe-coding-vs-hiring-a-developer',
    title: 'Vibe coding vs hiring a developer: what makes sense for your app?',
    description: 'When building with AI tools like Lovable, Bolt or Cursor is enough, when to bring in a developer, and how to combine both without wasting money.',
    date: d,
    keywords: ['vibe coding vs developer', 'should I hire a developer', 'AI app builder or developer', 'Lovable vs hiring developer'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Vibe coding is great for prototypes, internal tools and testing an idea quickly. Bring in a developer before real users, real data or real money touch the app, because security, payments and reliability are where AI-built apps most often fail.',
    faqs: [
      { q: 'Can I launch an app built only with AI tools?', a: 'You can, but have the auth, database rules and payments reviewed first; those are where most AI-built apps break.' },
      { q: 'Is hiring a developer after vibe coding a waste?', a: 'No. A working prototype makes the developer faster because the product decisions are already visible.' },
      { q: 'When does it make sense to rebuild instead of fix?', a: 'Rarely; only when the structure cannot support the product, and a developer should show you the cost comparison.' },
    ],
    body: `AI app builders changed who can make software. They did not remove the need for someone to own the hard parts.
## Where vibe coding shines
- Testing whether an idea is worth building
- Clickable prototypes for investors or early users
- Internal tools used by a few trusted people
- Landing pages and simple sites
Speed matters most here, and mistakes are cheap.
## Where it struggles
- Security: database rules and auth checks that look fine but leak data
- Payments: webhooks, subscriptions and failed-payment handling
- Scale: code that slows down or breaks with real data volumes
- Maintenance: the prompt loop, where each fix breaks something else
## The combined approach
Build the prototype yourself. Use it to learn what users want. Then bring in a developer to review security, wire payments properly, clean up structure and deploy. Keep prompting for new features afterward, on a codebase that can take it.
## What it costs
Fixing a single issue starts at $60. Several fixes plus a feature start at $200. Taking a stuck app all the way to launch starts at $600. That is usually far less than starting over.
## A simple rule
If losing the data or charging someone wrong would hurt your business, have a developer look before launch.`,
  },
  {
    slug: 'questions-to-ask-before-hiring-a-web-developer',
    title: '10 questions to ask before hiring a web developer',
    description: 'The questions that reveal whether a web developer is the right fit: ownership, process, pricing, timelines and what happens after launch.',
    date: d,
    keywords: ['questions to ask a web developer', 'how to hire a web developer', 'hiring a freelance developer'],
    service: 'nextjs-website-development',
    shortAnswer: 'Ask who owns the code and accounts, what exactly the price includes, how many revision rounds you get, how long it will take, which platform they build on and why, how you will edit content later, and what support looks like after launch.',
    faqs: [
      { q: 'What is the most important question to ask a web developer?', a: 'Who will own the code, domain and hosting accounts; the answer should be you.' },
      { q: 'Should I pay the full price upfront?', a: 'Splitting payment into a deposit and milestones protects both sides.' },
      { q: 'How do I compare quotes?', a: 'Compare what each includes, such as pages, features, revisions and support, not just the total.' },
    ],
    body: `A good developer will be glad you asked these. Vague answers are a warning sign.
## Ownership and access
1. Who owns the code, domain and hosting accounts? They should be in your name, or transferred to you at launch.
2. Where will the code live? Your own GitHub account is ideal.
## Scope and price
3. What exactly does the price include? Pages, features, copywriting, images, SEO setup.
4. How many revision rounds are included, and what does extra work cost?
5. How is payment split? A deposit plus milestones is common.
## Process and timeline
6. How long will it take, and what do you need from me to hit that date?
7. Will I see progress along the way? A live preview link is best.
## Technology
8. Which platform will you use and why? The answer should fit your needs, not just the developer's habit.
9. How will I update text and photos after launch?
## After launch
10. What happens if something breaks next month? Ask about support terms and response times.
## Look at real work
Ask for live sites, not just screenshots, and click through them on your phone. Check that the developer has built something similar to what you need.`,
  },
  {
    slug: 'website-accessibility-basics-small-business',
    title: 'Website accessibility basics for small businesses',
    description: 'What website accessibility means, why it matters for customers and legal risk, and the practical fixes that cover most small business sites.',
    date: d,
    keywords: ['website accessibility small business', 'ADA website compliance', 'WCAG basics', 'accessible website checklist'],
    service: 'nextjs-website-development',
    shortAnswer: 'An accessible website can be used by people with visual, hearing, motor or cognitive disabilities. For most small business sites, the core fixes are readable color contrast, alt text on images, proper headings, labeled form fields, keyboard navigation and captions on videos. WCAG 2.1 AA is the most common benchmark.',
    faqs: [
      { q: 'Is website accessibility legally required?', a: 'Rules vary by country and type of organization, and in the US website accessibility lawsuits against businesses are common; ask a lawyer about your situation.' },
      { q: 'Do accessibility overlay widgets make a site compliant?', a: 'No widget fixes underlying problems in the code, and many accessibility experts advise against relying on them.' },
      { q: 'What is WCAG?', a: 'The Web Content Accessibility Guidelines, published by the W3C, which define testable accessibility criteria at levels A, AA and AAA.' },
    ],
    body: `Accessibility is about making sure every customer can read your site, use your forms and book with you. It also tends to improve the site for everyone.
## Why it matters
A meaningful share of people live with some form of disability, and many more have temporary or situational limits, like a broken arm or bright sunlight on a phone. Accessible sites also tend to be clearer and better structured, which helps search engines. This is general information, not legal advice.
## The fixes that cover most sites
- Contrast: text readable against its background, including buttons and links
- Alt text: a short description on every meaningful image
- Headings: one H1 per page and headings in order, so screen readers can navigate
- Forms: every field has a visible label and clear error messages
- Keyboard: every link, menu and button reachable and usable with the Tab key, with a visible focus outline
- Media: captions on videos, no audio that plays on its own
- Links: link text that makes sense on its own, not "click here"
## How to test
Try your site using only the keyboard. Run a free checker such as WAVE or Lighthouse's accessibility audit. Zoom the page to 200 percent and check nothing breaks.
## Overlays are not a fix
Widgets that promise instant compliance do not change the underlying code. Fix the site itself.
## Build it in from the start
Accessibility is cheapest when it is part of the design and build, which is how I build every site.`,
  },
  {
    slug: 'online-booking-for-small-business-websites',
    title: 'Online booking for your website: embed a tool or build it custom?',
    description: 'The options for adding online booking to a small business website, from scheduling links to custom booking systems, with costs and trade-offs.',
    date: d,
    keywords: ['online booking website', 'add booking to website', 'appointment booking small business', 'custom booking system'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most small businesses should embed the booking tool they already use, because it handles calendars, reminders and payments. Build custom booking only when your rules are unusual, such as multi-resource scheduling, complex pricing or a booking flow that is part of your product.',
    faqs: [
      { q: 'Can a website take bookings without a monthly tool?', a: 'A simple request form that emails you works for low volume, but you confirm each booking by hand.' },
      { q: 'Will an embedded booking widget slow my site?', a: 'It can; loading it only on the booking page or after the main content keeps the rest of the site fast.' },
      { q: 'Can online booking take deposits?', a: 'Yes, most booking tools support deposits, and a custom build can use Stripe.' },
    ],
    body: `Online booking is one of the highest-value features a service business can add. There are three levels.
## Level 1: a request form
A short form with service, preferred date and time and contact details that emails you. Cheapest, works for low volume, but you confirm each request yourself and double bookings are possible.
## Level 2: embed your booking tool
Scheduling and booking platforms handle availability, calendar sync, reminders, cancellations and often payments. The website links to or embeds them on the right pages. This is the best fit for most salons, studios, clinics and consultants.
## Level 3: custom booking
A booking system built into your site when your rules do not fit a standard tool: several rooms or staff booked together, pricing that depends on many options, or booking that is the product itself.
## Comparison
- Request form: cheapest, manual confirmation, fine for low volume
- Embedded tool: monthly fee, reminders and payments included, best for most
- Custom: highest build cost, fits any rule, needs maintenance
## Making it convert
Put the booking button on every service page, not just the contact page. Show prices or starting prices next to each service. Ask for as little as possible before the time slot is chosen.
## What I usually recommend
Start with the tool your industry already uses, embedded cleanly. Move to custom only when the tool is clearly holding the business back.`,
  },
  {
    slug: 'homepage-structure-for-service-businesses',
    title: 'What to put on a service business homepage, in order',
    description: 'A proven homepage structure for local and service businesses, section by section, and what each one needs to do.',
    date: d,
    keywords: ['homepage structure', 'what to put on a homepage', 'service business website layout', 'homepage sections'],
    service: 'nextjs-website-development',
    shortAnswer: 'A service business homepage works best in this order: a headline that says what you do and where, one main call to action, proof such as reviews or results, your main services, how it works, an about section, answers to common questions and a final call to action with contact details.',
    faqs: [
      { q: 'How long should a homepage be?', a: 'Long enough to answer the main questions a new customer has, usually six to eight short sections.' },
      { q: 'Should prices be on the homepage?', a: 'Starting prices or a link to pricing near the services section help visitors self-qualify.' },
      { q: 'How many calls to action should a homepage have?', a: 'One main action repeated in a few places, plus a quieter secondary option.' },
    ],
    body: `Visitors decide in seconds whether to keep reading. A clear order of sections answers their questions in the order they ask them.
## 1. Headline and main action
Say what you do, for whom and where, in one line. Then one obvious button: book, call or get a quote.
## 2. Proof
Reviews, ratings, recognizable clients or a key result. Proof right after the headline makes the rest of the page believable.
## 3. Services
Your main services as short cards linking to their own pages, with starting prices if you share them.
## 4. How it works
Three or four steps from first contact to finished job. This removes uncertainty, especially for first-time buyers.
## 5. Examples of the work
Photos, before and after, or short case studies.
## 6. About
Who is behind the business, in a few sentences with a real photo. People buy from people.
## 7. Questions
The questions you hear on every phone call, answered briefly. These also help with search and AI answers.
## 8. Final call to action
Repeat the main action with phone, address, hours and service area.
## What to leave out
Sliders, auto-playing video, long mission statements and generic stock photos. Each one pushes the important parts further down.`,
  },
  {
    slug: 'landing-page-vs-website',
    title: 'Landing page vs website: which do you need?',
    description: 'The difference between a landing page and a full website, when each makes sense, and how they work together for ads and SEO.',
    date: d,
    keywords: ['landing page vs website', 'do I need a landing page', 'one page website vs multi page', 'landing page for ads'],
    service: 'nextjs-website-development',
    shortAnswer: 'A landing page is a single focused page with one goal, ideal for ads, launches and testing an offer. A website has several pages that cover everything about the business and is better for search and for customers who research. Many businesses use both.',
    faqs: [
      { q: 'Can a landing page rank on Google?', a: 'It can rank for a narrow topic, but a multi-page site with a page per service ranks for far more searches.' },
      { q: 'How much does a landing page cost?', a: 'Thomas Osayi builds focused one-page sites from $150, usually live in about 7 days.' },
      { q: 'Should ads go to my homepage or a landing page?', a: 'Usually a landing page that matches the ad\'s message, which tends to convert better than a general homepage.' },
    ],
    body: `The difference is focus. A landing page does one job. A website does many.
## Landing page
One page, one audience, one action. No navigation menu pulling people away. It works well for:
- Paid ads, where the page should match the ad exactly
- A product or event launch
- Testing a new offer before building more
- A new business that needs to be online this week
## Website
Several pages: services, about, pricing, contact and often articles. It works well for:
- Showing up in search for many different queries
- Customers who compare and research before contacting you
- Businesses with several services or audiences
## Side by side
- Landing page: fast to build, lowest cost, one goal, weak for broad SEO
- Website: more effort, covers many searches and questions, builds long-term traffic
## Using both
Many businesses run a full website for search and referrals and add landing pages for each ad campaign or offer. Each landing page matches its campaign, and the website handles everyone else.
## Starting small
If budget is tight, start with a strong one-page site and grow it into a full website as the business and content grow. A good build makes that easy without starting over.`,
  },
  {
    slug: 'do-i-need-a-website-if-i-have-instagram',
    title: 'Do I need a website if my business already has Instagram?',
    description: 'What a website does that Instagram and Google Business Profile cannot, and when a social-only presence is enough for a small business.',
    date: d,
    keywords: ['do I need a website', 'website vs Instagram for business', 'is social media enough for business', 'small business website necessary'],
    service: 'nextjs-website-development',
    shortAnswer: 'Instagram is great for showing your work, but you do not control its reach and most search traffic never reaches it. A website gives you a place you own that ranks in Google, answers detailed questions, takes bookings or orders and makes the business look established.',
    faqs: [
      { q: 'Can I run a business on Instagram alone?', a: 'Some businesses do, but they depend on one platform\'s algorithm and rules for every customer.' },
      { q: 'Does a website help my Google Maps listing?', a: 'Yes, a website linked from your Google Business Profile with matching details helps Google understand and trust the business.' },
      { q: 'What is the cheapest useful website?', a: 'A focused one-page site with services, proof, location and a booking or contact button.' },
    ],
    body: `Social media is where people discover you. A website is where they decide.
## What Instagram does well
Showing your work, building a following and staying top of mind. For visual businesses like salons, food and fitness, it is a strong discovery channel.
## What Instagram cannot do
- Rank in Google for "service near me" searches the way a website can
- Answer detailed questions about prices, policies and process
- Take bookings, deposits or orders on your own terms
- Guarantee anyone sees your post; reach depends on the algorithm
- Belong to you; accounts can be restricted or lost
## How they work together
Instagram brings attention; the link in your bio sends people to the site to book, buy or ask. Your Google Business Profile links to the same site, so search and social land in one place.
## When social alone is enough
A very new business testing demand, or one that books entirely through DMs and referrals, can wait. Once you want customers who search rather than scroll, you need a site.
## Start simple
A fast one-page site with your services, proof, location and a booking button covers what matters. It can grow later.`,
  },
  {
    slug: 'move-from-wix-or-squarespace-without-losing-seo',
    title: 'How to move from Wix or Squarespace without losing your Google rankings',
    description: 'A step-by-step migration plan for switching website platforms: URL mapping, 301 redirects, content, metadata and Search Console checks.',
    date: d,
    keywords: ['migrate from Wix', 'move from Squarespace', 'website migration SEO', '301 redirects new website'],
    service: 'nextjs-website-development',
    shortAnswer: 'To switch platforms without losing rankings, list every URL on the old site, keep or improve the content that ranks, redirect each old URL to its new equivalent with a 301 redirect, carry over titles and descriptions, then submit the new sitemap in Google Search Console and watch for errors.',
    faqs: [
      { q: 'Will I lose rankings when I change platforms?', a: 'Some short-term movement is normal, but with redirects and preserved content, rankings usually recover and often improve on a faster site.' },
      { q: 'What is a 301 redirect?', a: 'A permanent redirect that sends visitors and search engines from an old URL to a new one and passes along most of its value.' },
      { q: 'Can I keep my domain?', a: 'Yes. You point the same domain at the new site; only the platform behind it changes.' },
    ],
    body: `Most ranking losses after a migration come from broken URLs and missing content, not from the new platform.
## 1. Inventory the old site
Export or crawl every URL, including blog posts, product pages and images that get traffic. Check Search Console for the pages and queries that bring visits.
## 2. Map old URLs to new ones
Each old URL gets a new home. Wix and Squarespace often use patterns like /blog-1/post-name or /services-1. Decide the clean new path for each.
## 3. Keep the content that ranks
Carry over the text of pages that bring traffic, then improve it. Rewriting a ranking page from scratch on launch day adds risk.
## 4. Set up 301 redirects
Every old URL redirects permanently to its new equivalent. In Next.js these live in the config file or middleware. Do not send everything to the homepage.
## 5. Carry over metadata
Titles, descriptions, image alt text and structured data.
## 6. Launch and verify
- Point the domain at the new site
- Submit the new sitemap in Search Console
- Test a sample of old URLs to confirm each redirects correctly
- Watch the Pages report for 404 errors over the next weeks
## 7. Update other places
Google Business Profile, social bios and directory listings should link to the new URLs.`,
  },
  {
    slug: 'stripe-subscriptions-for-saas-mvp',
    title: 'Setting up Stripe subscriptions for a SaaS MVP: what you actually need',
    description: 'The minimum Stripe setup for a SaaS MVP: products and prices, Checkout, webhooks, the customer portal, failed payments and plan checks.',
    date: d,
    keywords: ['Stripe subscriptions SaaS', 'Stripe billing MVP', 'Stripe customer portal', 'Stripe webhooks subscriptions'],
    service: 'saas-mvp-development',
    shortAnswer: 'A SaaS MVP needs Stripe products and prices for each plan, Stripe Checkout to start subscriptions, webhooks that update the user\'s plan in your database, the Stripe customer portal for upgrades and cancellations, and handling for failed payments. Everything else can wait.',
    faqs: [
      { q: 'Which Stripe webhook events matter for subscriptions?', a: 'At minimum checkout.session.completed, customer.subscription.updated, customer.subscription.deleted and invoice.payment_failed.' },
      { q: 'Do I need to build a billing page?', a: 'Not for an MVP; Stripe\'s hosted customer portal lets users change plans, update cards and cancel.' },
      { q: 'Where should I check if a user has paid?', a: 'In your own database, updated by webhooks, not by calling Stripe on every page load.' },
    ],
    body: `Billing is where MVPs most often overbuild or underbuild. This is the setup that works.
## Products and prices
Create a product per plan and a recurring price for each billing period. Store the price IDs in your config, not hard-coded across files.
## Starting a subscription
Use Stripe Checkout. Pass your user's ID as metadata or the client reference ID, and reuse one Stripe customer per user so their history stays in one place.
## Webhooks are the source of truth
Your database should store each user's plan and status, updated only by verified webhooks:
- checkout.session.completed: link the customer and subscription to the user
- customer.subscription.updated: plan changes, renewals, trial ends
- customer.subscription.deleted: downgrade to free
- invoice.payment_failed: flag the account and email the user
## Self-service billing
Turn on the Stripe customer portal and link to it from settings. Users can upgrade, downgrade, update cards, download invoices and cancel without you building any of it.
## Checking access
Every protected feature checks the plan stored in your database. Never trust a plan value sent from the browser.
## What to skip for now
Usage-based billing, coupon engines, custom invoices and multiple currencies, unless your first customers need them.
## How I build it
This is the billing setup I include in the SaaS MVP package, from $1,200.`,
  },
  {
    slug: 'roles-and-permissions-in-saas-apps',
    title: 'Roles and permissions in a SaaS app: a practical guide for founders',
    description: 'How to design user roles, team accounts and permissions in a SaaS MVP without overbuilding, with examples from real multi-role platforms.',
    date: d,
    keywords: ['SaaS roles and permissions', 'role based access control MVP', 'multi tenant SaaS', 'user roles web app'],
    service: 'saas-mvp-development',
    shortAnswer: 'Start with the fewest roles your first customers need, usually an owner, a member and your own internal admin. Store each user\'s role per organization, enforce permissions on the server and in database rules, and add finer-grained permissions only when a customer needs them.',
    faqs: [
      { q: 'What is multi-tenant SaaS?', a: 'One app serving many customer organizations, where each organization\'s data is kept separate from the others.' },
      { q: 'Should permissions be checked in the frontend?', a: 'Hide buttons in the frontend for clarity, but always enforce permissions on the server and in the database.' },
      { q: 'How many roles should an MVP have?', a: 'Usually two or three, plus an internal admin role for your own team.' },
    ],
    body: `Roles look simple on a whiteboard and get complicated in code. Getting the foundation right early saves a painful rewrite.
## Start with organizations
Most B2B SaaS products serve teams, not individuals. Create an organization (or workspace) record from day one, even if each has one user at first. Every record belongs to an organization.
## Keep roles few
- Owner: billing and member management
- Member: uses the product
- Internal admin: your own team, for support
Add more only when a paying customer asks.
## Store roles per organization
A person can belong to several organizations with a different role in each. Store memberships as their own records: user, organization, role.
## Enforce in three places
- Interface: hide what a role cannot do
- Server: every API route checks the role before acting
- Database: security rules or row level security make sure one organization never reads another's data
## Real examples
Guardian MindCare has separate portals for therapists, supervisors, trainees, clients and admins, each seeing only what it should. SQWAD separates brands, their team members and creators, with each brand's data isolated.
## Common mistakes
Storing the role on the user instead of the membership, checking permissions only in the frontend, and building a full custom permission editor before anyone needs one.`,
  },
  {
    slug: 'build-vs-buy-creator-program-software',
    title: 'Build or buy: software for running a brand creator program',
    description: 'When a brand should use existing creator program software, when to build a custom creator portal, and what each needs to do well.',
    date: d,
    keywords: ['creator program software', 'build creator portal', 'UGC creator management', 'influencer program tools build vs buy'],
    service: 'saas-mvp-development',
    shortAnswer: 'Most brands should start with existing creator program software, because applications, product seeding, content tracking and payouts are already built. Build a custom portal only when your program has unusual workflows or needs deep integration with your own systems.',
    faqs: [
      { q: 'What should creator program software do?', a: 'Handle applications, shipping product to creators, collecting content, paying creators and showing which creators drove sales.' },
      { q: 'When is a custom creator portal worth it?', a: 'When your rewards, approvals or integrations are unusual enough that standard tools force workarounds.' },
      { q: 'Can I run a creator program in spreadsheets?', a: 'For a handful of creators, yes; it breaks down once you track dozens of shipments, posts and payouts.' },
    ],
    body: `I have been on both sides of this: I built a custom creator portal for TheHoopGang, and then built SQWAD, a SaaS platform for running creator programs. That experience shapes the advice.
## What a creator program needs
- Applications and approvals
- Product seeding: shipping product and tracking it
- Content submission and review
- Payouts, commissions or refunds
- Attribution: which creator's content drove which sales
## When to buy
If your program follows a common pattern, software already does it. You launch in days, and the vendor maintains it. This is the right choice for most brands.
## When to build
- Rewards or approval rules no tool supports
- Deep ties to your own systems, such as a custom store or internal data
- The creator experience is a core part of your brand
## The spreadsheet stage
Spreadsheets and DMs are fine for the first handful of creators. Signs you have outgrown them: lost shipments, creators asking about payment status, and no idea which posts sold anything.
## Comparison
- Spreadsheets: free, manual, breaks at scale
- Existing software: monthly fee, fast to launch, standard workflows
- Custom portal: higher build cost, fits any workflow, needs maintenance
## My recommendation
Start with software, learn what your program really needs, and build only the parts that tools cannot do.`,
  },
  {
    slug: 'how-to-hand-off-an-ai-built-app-to-a-developer',
    title: 'How to hand off your AI-built app to a developer',
    description: 'What to prepare before a developer takes over your Lovable, Bolt, Cursor or Replit project, so fixes start fast and cost less.',
    date: d,
    keywords: ['hire developer for AI built app', 'hand off Lovable project', 'developer for vibe coded app', 'AI app handoff checklist'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Before handing off an AI-built app, put the code in a GitHub repository, list what works and what is broken with steps to reproduce, give access to the database and hosting projects, share where secrets live, and write down which features matter most for launch.',
    faqs: [
      { q: 'Do I need to give a developer my AI builder account?', a: 'Usually not; access to the GitHub repository plus the database and hosting projects is enough.' },
      { q: 'How do I share secrets safely?', a: 'Add the developer to the hosting and database projects instead of pasting keys into chat or email.' },
      { q: 'Can I keep using the AI tool after the handoff?', a: 'Yes, if changes sync through GitHub, which most AI builders support.' },
    ],
    body: `A good handoff can turn a week of investigation into a day of fixes.
## 1. Get the code into GitHub
Most AI builders can sync or export to GitHub. A repository gives the developer the full history and lets your AI tool and the developer work on the same code.
## 2. Write the broken list
For each problem: what you did, what you expected, what happened, and a screenshot or error message. Mark which ones block launch.
## 3. Write the working list
Features that work and must keep working. This helps the developer avoid breaking them.
## 4. Share access, not keys
Invite the developer to the database project (Supabase or Firebase), the hosting project (Vercel, Netlify) and Stripe in test mode. Avoid pasting secrets into messages.
## 5. Explain the goal
Launch date, first users, and the one workflow that has to be perfect. A developer can then prioritize security and that workflow first.
## 6. Agree on how you will keep building
If you want to keep prompting afterward, say so. The developer can structure fixes so the AI tool keeps working well.
## What happens next
I reproduce every issue, fix security first, then payments, then the rest, deploy to your domain and send a short write-up of what changed. Quick fixes start at $60, and taking an app to launch starts at $600.`,
  },
];
