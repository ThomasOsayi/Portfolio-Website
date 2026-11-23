// Articles added Nov 17 2026 (batch of 12). Same body format as seo.ts:
// "## " heading, "- " bullet, anything else is a paragraph. Prices come only from the packages in seo.ts.
import type { Post } from './seo';

export const morePosts: Post[] = [
  {
    slug: 'how-much-does-a-small-business-website-cost',
    title: 'How much does a small business website cost in 2026?',
    description: 'What a small business website really costs with a DIY builder, a freelance developer or an agency, plus the yearly costs people forget to budget for.',
    date: '2026-11-17',
    updated: '2026-11-17',
    keywords: ['how much does a website cost', 'small business website cost', 'website design cost 2026', 'custom website price'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'Vercel Pricing: Hobby, Pro, and Enterprise plans', publisher: 'Vercel', url: 'https://vercel.com/pricing' },
      { title: 'Pricing and Plans', publisher: 'Netlify', url: 'https://www.netlify.com/pricing/' },
      { title: 'Wix Pricing Information', publisher: 'Wix', url: 'https://www.wix.com/plans' },
      { title: 'Pricing & Fees', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
    ],
    shortAnswer: 'A custom small business website from a freelance developer usually costs a few hundred to a few thousand dollars, depending on pages and features. Thomas Osayi builds one-page sites from $150, five-page business sites from $450 and custom multi-page builds from $1,200.',
    faqs: [
      { q: 'What is the cheapest way to get a professional website?', a: 'A one-page site from a freelancer is usually the cheapest option that still looks custom; Thomas Osayi builds them from $150 in about 7 days.' },
      { q: 'Why do website quotes vary so much?', a: 'Quotes mostly scale with the number of unique page designs and with features like booking, ordering, payments or an admin panel.' },
      { q: 'Are there yearly costs after the website is built?', a: 'Yes: a domain name every year, hosting, and any paid tools you connect, such as a booking system or email marketing.' },
      { q: 'Is a one-page website enough for a small business?', a: 'Often yes for a new or single-service business, because one page can hold your offer, proof, hours, location and a contact form. Add separate service pages once you want to rank for more than one search.' },
      { q: 'Does the price include writing the text and taking photos?', a: 'Not by default with most developers, so ask. Copywriting and photography are the two items most often left out of a website quote.' },
      { q: 'What makes a website cost more than the starting price?', a: 'Extra unique page layouts, features with their own logic such as booking, ordering or payments, content written from scratch and rush deadlines.' },
    ],
    takeaways: [
      'Website price is driven mostly by the number of unique page designs and by features that need their own logic.',
      'Thomas Osayi builds one-page sites from $150, five-page business sites from $450 and full custom builds from $1,200.',
      'A DIY builder costs less upfront but bills every month and limits custom features, while a custom site is paid once and owned outright.',
      'Plan for yearly costs after launch: the domain, hosting, business email and any paid tools you connect.',
      'Photos and copywriting are the items most often missing from a quote, so ask what is included before comparing prices.',
    ],
    body: `Website prices look random until you see what drives them. The two biggest factors are how many distinct pages need to be designed and which features the site has to run. Everything else is a smaller adjustment.
I build websites for small businesses from Los Angeles, and I publish my prices. This guide uses those real numbers where I can stand behind them and plain ranges where the market varies. By the end you should be able to read any quote and tell what you are paying for.
## How much does a small business website cost in 2026?
A custom small business website from a freelance developer usually costs a few hundred to a few thousand dollars, and the number follows the size of the job closely. My own packages give a fair picture of the freelance end of the market.
- One-page site: from $150, about 7 days
- Business site, up to 5 pages: from $450, about 14 days
- Full custom build: from $1,200, about 21 days
A one-page site covers who you are, what you offer, proof and a contact form. That is enough for many new businesses, and it is the fastest to launch. A five-page business site adds separate service, about and contact pages plus local SEO setup and a booking or quote form. A custom build adds features with their own logic, such as online ordering, a quote management tool or an admin area where you edit content yourself.
The word "from" matters. Each price is the starting point for that size of project with ordinary requirements. A one-page site with custom animation in every section, or a five-page site that needs all of its text written from scratch, lands above the starting number.
## What actually drives the price of a website?
Two things drive most of the price: the number of unique page designs and the features that need their own logic.
### Unique page designs
A page is not expensive because it exists. It is expensive because someone has to decide what goes on it, design it for a phone and for a desktop, and then build it. Ten service pages that share one layout cost far less than five pages that each look different. When you compare quotes, count layouts, not URLs.
### Features with logic
A contact form that emails you is simple. A booking form that checks open times, blocks double bookings and sends confirmations is a small piece of software. So is a menu with pickup ordering, a quote calculator, a login area or a payment flow. Each one has to be designed, built, tested with bad input and connected to an account you own, such as Stripe or a calendar.
### The smaller adjustments
- Copywriting, if you are not providing the text
- Photography or licensed stock photos
- A content management system so you can edit pages yourself
- A second language
- Moving content and setting up redirects from an old site
- A rush deadline
## What do you get at each price level?
You get more pages, more features and more setup work as the price goes up, and the right level is the smallest one that does the job.
### One page
One long page with a clear headline, your services, a few photos, reviews or other proof, your hours and location, and a contact form or a button that calls or texts you. I include the SEO basics: a proper title and description, fast loading, and the structured data that tells Google your business name, address and phone number. This level suits a new business, a single-service business, or anyone replacing a social media profile as their main link.
### Up to five pages
Home, services, about, contact and one more, often a gallery, pricing or FAQ page. Separate service pages matter for search because each one can match what a customer types, such as a service plus a city. This level includes local SEO setup and a booking or quote form.
### Custom build
This is any site that does work for the business instead of only describing it. One example from my own clients is a restaurant site where guests reserve a table or place a pickup order without calling.
![New York Nook: the pickup ordering page I built, with menu categories, a cart and pickup time slots.](/shots/newyorknook-order.jpg)
Another is a commercial printer whose site collects job details from clients and lets the shop manage quotes in one place.
![Artistic Printing: the home page I built for a commercial printer in LA, with a Get your quote button that feeds the shop's quote management tool.](/shots/artistic-home.jpg)
## Is a DIY builder, a freelancer or an agency the better deal?
For most small businesses, a freelancer with a portfolio in your category is the best value, but each option fits a different situation.
### DIY builder
A DIY builder (Wix, Squarespace) has the lowest upfront cost but charges a monthly fee forever and limits custom features. Once you add a custom domain and remove the builder's branding, a business plan commonly adds up to a few hundred dollars a year. Check the current pricing pages, since they change. The larger cost is your time. Expect several evenings to reach a result you like, and more if you have never written web copy.
### Freelance developer
A freelance developer costs more upfront, and you own a custom site with no platform lock-in. You talk to the person doing the work, and the price is mostly the build itself.
### Agency
An agency adds project managers and designers, which helps on large projects and raises the price on small ones. Agency quotes for a small business site usually start in the thousands because more people touch the project.
> Whichever route you take, ask who will own the domain, the code and the hosting account when the job is done. If the answer is not you, keep looking.
## What yearly costs come after launch?
There are ongoing costs, and they stay small when the site is built well: a domain, hosting and whatever paid tools you connect.
- Domain name: a .com usually renews for roughly $10 to $20 a year at a mainstream registrar. Register it in your own account with your own email address.
- Hosting: a small Next.js site is light to host. Hosts such as Vercel and Netlify have free tiers and paid plans at around $20 a month, and which one applies depends on their terms and your traffic.
- Business email: a mailbox at your domain through Google Workspace or Microsoft 365 is billed per user per month.
- Paid integrations: booking systems, email marketing and online ordering tools mostly bill monthly. Stripe takes a percentage plus a small fixed fee per card payment instead of a subscription.
- Updates: text changes, new photos, a new service page. Ask whether small edits are included for a period after launch and what they cost after that.
Ask any developer which of these are included in the quote and which are billed to you directly. I prefer that clients pay for their own domain, hosting and tools in their own accounts, so nothing depends on me staying involved.
## What do people forget to budget for?
Content is the item people forget, because the site itself is rarely the surprise. Budget for the domain renewal each year, hosting, paid integrations, professional photos and copywriting if you will not write the text yourself.
### Photos
Real photos of your work, your team and your space make a small business site look established. Stock photos make it look like every other site. A short session with a local photographer is worth pricing. If that is out of budget, phone photos taken in daylight with a clean background are good enough to launch.
### Words
Writing five pages of clear text takes longer than most owners expect. You can write it yourself from an outline your developer gives you, hire a copywriter, or answer a questionnaire and have the developer draft from your answers. Decide which before the project starts, because it changes both the price and the timeline.
### Setup tasks
- A logo file in a vector format such as SVG, not a screenshot
- A privacy policy if the site collects form submissions or uses analytics
- A verified Google Business Profile, which is free but takes time
- Google Search Console and analytics, so you can see whether the site is being found
## What does a real quote look like?
A real quote is a package plus the adjustments above, so here is how I would price a common request using my own packages. The business is an illustration, not a client.
A home cleaning company wants a home page, a services page, a pricing page, an about page and a contact page with a quote request form. That is five pages with one form, which is my Business Site package: from $450 and about 14 days. In the first year the owner also pays for the domain, possibly hosting, and a business mailbox.
Now suppose the owner wants customers to pick a time slot and pay a deposit online. There are two ways to do it. The first is to link the site to a booking tool the owner already pays for. The build stays at the Business Site level and the tool's monthly fee continues. The second is to build booking and deposits into the site. That is logic, so the project moves to a Full Custom Build, from $1,200 and about 21 days, with no monthly booking fee afterward.
Neither answer is wrong. One trades a lower upfront price for a monthly bill, and the other does the reverse.
## How do you compare two quotes fairly?
Put both quotes against the same checklist, because a lower number often just leaves something out.
- How many pages and how many unique layouts
- Who writes the text and who supplies photos
- Whether SEO setup is included: titles, descriptions, a sitemap, Search Console and structured data
- Where form submissions go and whether you get a notification
- How many rounds of revisions are included
- Who owns the code and where the domain is registered
- What happens after launch and what small edits cost
- The timeline and the payment schedule
Three things should make you cautious: a quote with no written scope, a monthly plan where you never own the site, and a portfolio with no live sites you can open on your phone.
## How do you get an honest number quickly?
Write down your pages, the one action you want visitors to take, and any feature that needs logic. A developer can price that in minutes. You can also get a range from the website cost calculator on this site before talking to anyone.
Add three things to that note and the quote gets more accurate: links to two or three sites you like, your deadline, and a list of the content you already have. A request that says "five pages, quote form, I have photos and will write the text, launch in three weeks" can be answered with a firm price the same day. A request that says "how much for a website" can only be answered with a range.
> Send the same written brief to every developer you contact. If the scope differs between conversations, the prices cannot be compared.
## The bottom line
A small business website costs what its pages and features cost to design and build, plus a modest yearly bill for the domain, hosting and tools. Start with the smallest version that lets a customer take the action you care about, own every account it runs on, and add features when the business needs them. If you want a number for your own project, my packages start at $150 for one page, $450 for up to five pages and $1,200 for a custom build.`,
  },
  {
    slug: 'freelance-web-developer-vs-agency',
    title: 'Freelance web developer vs agency: which should a small business hire?',
    description: 'A side-by-side look at cost, speed, communication and risk when choosing between a freelance developer and a web agency.',
    date: '2026-11-17',
    updated: '2026-11-22',
    keywords: ['freelance web developer vs agency', 'hire web developer or agency', 'freelancer vs agency website'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'Transferring a repository', publisher: 'GitHub Docs', url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository' },
      { title: 'Adding & Configuring a Custom Domain', publisher: 'Vercel', url: 'https://vercel.com/docs/domains/add-a-domain' },
      { title: 'Get started with Google Business Profile', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038169' },
    ],
    shortAnswer: 'Most small businesses get better value from a freelance developer: lower cost, faster turnaround and direct communication with the person writing the code. An agency makes more sense for large projects that need several specialists working at once.',
    faqs: [
      { q: 'Is a freelance developer cheaper than an agency?', a: 'Usually yes, because a freelancer has no account managers or office overhead built into the price.' },
      { q: 'What is the biggest risk of hiring a freelancer?', a: 'Depending on one person; reduce it by making sure the code lives in your own GitHub and hosting accounts.' },
      { q: 'When should I choose an agency?', a: 'When you need design, development, copywriting and marketing delivered together on a large project with a fixed launch date.' },
      { q: 'How do I check a freelance developer before hiring?', a: 'Open their live client sites on your phone, ask who owns the code and accounts at the end, and get the scope, price and timeline in writing before paying a deposit.' },
      { q: 'Who owns the website when the project is finished?', a: 'You should, with either option: the domain registered in your name, the code in your own GitHub account and the site deployed from your own hosting account.' },
      { q: 'Can one freelancer handle design, development and SEO setup?', a: 'Many can for a small business site, but not all, so ask to see sites where the same person did the design and the build.' },
    ],
    takeaways: [
      'A freelancer usually costs less because the price is mostly the build, with no account managers or office overhead added.',
      'With a freelancer you talk to the person writing the code, which makes small projects faster.',
      'An agency is the better fit when a large project needs several specialists working at the same time.',
      'With either option, keep the domain, the code and the hosting in accounts you own.',
      'Judge both by live work for a business like yours, not by the size of the team.',
    ],
    body: `Both options can build a great website. The difference is in how the work is organized and what you pay for besides the code.
I am a freelance developer, so I have a side in this. I will try to earn your trust by saying plainly where an agency is the better choice, because there are projects I would send to one. What follows is how I would think it through if I were the business owner.
## What is the real difference between a freelancer and an agency?
The real difference is the number of people between you and the work. A freelancer is one person who scopes, designs, builds and launches the site, and who answers your messages. An agency is a company that splits those jobs across a team: someone sells the project, someone manages it, and designers, developers and writers each do their part.
Neither structure is better in general. More people means more skills available at once and more capacity when something goes wrong. It also means more coordination, more meetings and more salaries inside the quote. The useful question is whether your project needs that structure.
A five-page site for a local business has one decision maker and maybe forty hours of work. It does not need a project manager. A rebuild of a 300-page site with a new brand, a content migration and a paid campaign launching the same week does.
## Which one costs less?
A freelancer usually costs less for the same site. A freelancer's price is mostly the build itself. An agency's price also covers project managers, sales staff and office overhead. On a five-page business site, that overhead can be a large share of the quote.
### Where the money goes
With a freelancer, nearly every dollar pays for hours spent on your site. With an agency, part of each dollar pays for the people who keep the agency running. That is not waste. Those people are what make it possible to run a large project on schedule. It only becomes poor value when the project is too small to need them.
### What my prices look like
My packages are public, so you can use them as a reference point for freelance pricing: a one-page site from $150, a business site of up to five pages from $450, and a full custom build with features from $1,200. Agency quotes for comparable small sites tend to start in the thousands.
### Compare scope, not totals
A cheaper quote is only cheaper if it covers the same work. Check both for the number of pages, who writes the text, SEO setup, revision rounds and what happens after launch.
## Which one is faster, and who will you talk to?
A freelancer is usually faster on small projects because there is no handoff between people. With a freelancer you talk directly to the person building the site, so a change request can be done the same day. With an agency, requests usually pass through an account manager first. That structure helps on big projects and slows down small ones.
The direct line matters most during revisions. When you say the booking button should be more obvious, the person hearing it is the one who placed the button. Nothing gets lost in a ticket.
The limit on freelancer speed is capacity. One person can only run a few projects at once, so ask when your project would start, not only how long it takes. My timelines are about 7 days for a one-page site, 14 days for a business site and 21 days for a custom build, counted from the day I have your content.
> Ask any developer or agency for a start date and a launch date in writing. A short build time means little if the project sits in a queue for a month first.
## What can an agency do that a freelancer cannot?
An agency can put several specialists on your project at the same moment. An agency can put a designer, a developer, a copywriter and an SEO specialist on your project at once. A freelancer covers fewer roles, so check that the person you hire can design as well as code if you need both.
### Where that matters
- A full rebrand, with a new logo, photography and messaging alongside the site
- Ongoing marketing: ads, email campaigns and monthly content after launch
- Very large sites with a content migration and many stakeholders
- Projects where your own company needs formal process, such as procurement, contracts with service levels or several rounds of executive sign-off
- A hard launch date that needs people working in parallel
### Where it does not
Most small business sites need a clear structure, a clean design, working forms and solid SEO setup. One capable person can do all of that. Many freelancers also work with a regular photographer or copywriter when a project calls for one, which gets you the specialist without the standing team.
## What are the risks, and how do you protect yourself?
The main freelancer risk is that one person gets sick or busy. The main agency risk on a small project is that you are a small account and your work goes to whoever is available. Protect yourself the same way with either option: the code goes in your GitHub, the site deploys from your hosting account, and the domain is registered in your name.
### The ownership checklist
- Domain: registered at a registrar account you log in to, under your email address
- Code: in a GitHub repository owned by your account, with the developer added as a collaborator
- Hosting: a Vercel, Netlify or similar account in your name, with your card on file
- Third-party tools: Stripe, the booking system, analytics and Google Business Profile all created by you, with the developer invited as a team member
- Handoff note: a short document listing every account, what it does and how to deploy a change
If those five things are true, any competent developer can pick up your site in an afternoon. That takes most of the sting out of the one-person risk, and it protects you just as well if you ever want to leave an agency.
### Put the scope in writing
A written scope lists the pages, the features, the number of revision rounds, the price, the payment schedule and the dates. It protects both sides. Vague scopes are where projects of every size go wrong.
## How do you vet a freelance developer?
Look at live work first, then ask a few direct questions. Ten minutes of checking tells you most of what you need.
### Open the portfolio on your phone
Most of your customers will see the site on a phone, so that is where to judge it. Tap through the menu. Fill in a form. See how fast the pages load on mobile data. Look for a business like yours. A developer who has already solved your kind of problem, such as online booking for an appointment-based business, will ask better questions and make fewer wrong turns.
![Astiglow: the first step of the booking flow I built for a waxing studio, where clients choose a service with its price.](/shots/astiglow-book.jpg)
### Questions worth asking
- Did you do the design as well as the build on these sites?
- Who will own the domain, the code and the hosting account?
- What do you need from me before you can start?
- How many rounds of changes are included?
- What happens if I need an edit three months after launch?
- When can you start, and when would we launch?
### Signs to slow down
Be careful with anyone who cannot show a live site, will not put the scope in writing, wants the domain registered in their own name, or quotes a price before asking what the site needs to do.
## How do the two compare side by side?
Each wins on different points, and the summary below is how I would put it to a friend.
- Freelancer: best for sites up to a few dozen pages, MVPs and fixes; lower cost; direct contact; fewer roles
- Agency: best for large rebuilds and ongoing campaigns; higher cost; more process; many specialists
- Cost: a freelancer's price is mostly build hours, while an agency's includes management and overhead
- Communication: direct with a freelancer, through an account or project manager with an agency
- Capacity: one person with a freelancer, a team that can cover absences with an agency
- Continuity: depends on good handoff with a freelancer, and on staff turnover with an agency
- Ownership: the same rules apply to both, and you should hold every account
## Which should you choose for your project?
Choose by the size and shape of the project, not by which sounds more professional.
### A freelancer is the better fit when
- You need a one-page site, a business site of a few pages, or a custom tool such as booking, ordering or a quote form
- One person at your company makes the decisions
- You want to message the builder directly and see changes quickly
- You are building a first version of a product and need to keep the budget for marketing
- You have a broken or half-finished site that needs fixing, not a new process
### An agency is the better fit when
- The site is one part of a larger launch that includes branding, content and advertising
- Several departments have to approve the work
- The project is too large for one person to finish by your date
- You want one vendor responsible for marketing results every month after launch
### When you are unsure
Ask a freelancer and an agency to scope the same written brief. The conversations will tell you a lot. If the freelancer says the project is too big for one person, believe them. If the agency's proposal is mostly process for a five-page site, that tells you something too.
## What do you do if your developer disappears mid-project?
You take over the accounts you already own, hand them to a new developer and pick up from the last working version. This is where the ownership checklist pays for itself, so here is the order I would work in.
- Log in to the domain registrar and confirm the domain is in your name, renews automatically and has a current card on file.
- Open the GitHub repository and check the latest commits. If the code sits in the old developer's account, ask them to transfer it to yours. GitHub's transfer setting moves the code, history and issues together, and old links redirect to the new location.
- Open the hosting account and note which deployment is live, so nothing changes by accident while you look for help.
- Remove the old developer from the registrar, hosting, Stripe, analytics and your Google Business Profile, where you can add and remove managers yourself.
- Give the new developer the handoff note, or write one now: every account, what it does and what was still unfinished.
If the code was never in your account and the developer stops replying, you may be paying for parts of the site again. That risk is the same with a small agency that closes. The fix in both cases is the one that costs nothing: put every account in your name before work starts.
## The bottom line
Most small businesses get better value from a freelance developer: lower cost, faster turnaround and direct communication with the person writing the code. An agency earns its price on large projects that need several specialists at once. Whichever you hire, look at the portfolio first. A freelancer who has already built a site for a business like yours will usually beat an agency that has not, and the reverse is true as well. Keep every account in your own name and you can change your mind later without losing the site.`,
  },
  {
    slug: 'how-long-does-it-take-to-build-a-website',
    title: 'How long does it take to build a website?',
    description: 'Realistic timelines for one-page sites, business sites, custom builds and web apps, and the things that cause most delays.',
    date: '2026-11-17',
    updated: '2026-11-22',
    keywords: ['how long to build a website', 'website development timeline', 'how long does a website take'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'Adding & Configuring a Custom Domain', publisher: 'Vercel', url: 'https://vercel.com/docs/domains/add-a-domain' },
      { title: 'Accessing Deployments through Generated URLs', publisher: 'Vercel', url: 'https://vercel.com/docs/deployments/generated-urls' },
      { title: 'Build and Submit a Sitemap', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap' },
    ],
    shortAnswer: 'A one-page site takes about a week, a five-page business site about two weeks, and a custom multi-page build about three weeks. Web apps and SaaS MVPs take three to six weeks. Most delays come from waiting on content, not from development.',
    faqs: [
      { q: 'Can a website be built in a week?', a: 'Yes, a focused one-page site can launch in about 7 days once the copy and photos are ready.' },
      { q: 'What slows website projects down the most?', a: 'Missing content: text, photos, logins and decisions that the business owner has to provide.' },
      { q: 'How long does a SaaS MVP take?', a: 'Most SaaS MVPs ship in 3 to 6 weeks when the scope is limited to one core workflow.' },
      { q: 'How long does it take for a new website to go live on my domain?', a: 'Connecting a domain usually takes minutes to a few hours, and DNS changes can take up to 48 hours to reach everyone.' },
      { q: 'How long until a new website shows up on Google?', a: 'Google usually finds a new site within days to a few weeks after the sitemap is submitted in Search Console, and ranking for competitive searches takes longer.' },
      { q: 'Does a rush website cost more?', a: 'Yes, because other work has to be moved, and a rush only helps when your text, photos and account logins are ready on day one.' },
    ],
    takeaways: [
      'A one-page site takes about 7 days, a business site of up to five pages about 14 days and a full custom build about 21 days.',
      'A SaaS MVP with auth, a dashboard and payments takes about 3 to 6 weeks.',
      'Those timelines start when the content is ready, and missing text and photos cause most delays.',
      'One decision maker and one batched message of feedback per round keep a project on schedule.',
      'Launch with what is ready and add the rest later, because a live site starts being found sooner.',
    ],
    body: `Development time is the predictable part. The unpredictable part is how fast content and decisions arrive.
That is the most useful thing I can tell anyone asking how long a website takes. I can say almost to the day how long the design and code will take for a given scope. What I cannot control is when the photos show up or how long it takes three partners to agree on a headline. So this article gives you the real numbers first, then spends most of its length on the part you control.
## How long does each type of website take?
A one-page site takes about a week, a business site about two weeks and a custom build about three. These are the timelines I work to.
- One-page site: about 7 days
- Business site, up to 5 pages: about 14 days
- Full custom build with features: about 21 days
- SaaS MVP with auth, dashboard and payments: about 3 to 6 weeks
These assume the content is ready when the build starts. The clock I quote starts on the day I have your text, photos and logins, not on the day we first talk.
The numbers scale with two things. The first is how many unique page layouts need designing. The second is how many features have their own logic, such as booking, ordering or a login area. A sixth page that reuses an existing layout adds an hour or two. A reservation system adds days.
## What happens during those weeks?
The work falls into three phases: structure and design, the build, then content, testing and launch.
### Structure and design
The first days go to structure and design: which pages exist, what each one must do and how it looks on a phone. I start from the action you want a visitor to take, such as booking, calling or requesting a quote, and arrange each page so that action is one tap away. You see a design direction early, before much code exists, because changing direction is cheap at this point and expensive later.
### The build
Then comes the build, with a preview link you can click through as it grows. With Next.js on Vercel, every change I push gets its own preview URL, so you are never waiting for a big reveal. You can open the link on your phone and check that the menu, the forms and the photos look right.
### Content, SEO setup, testing and launch
The last phase is content, SEO setup, testing on real devices and connecting your domain. SEO setup means page titles and descriptions, a sitemap, structured data for your business details and a Search Console property. Testing means submitting every form, tapping every link and loading the site on an iPhone, an Android phone and a laptop.
## What does a two-week business site look like day by day?
A five-page site fits in fourteen days when each side knows what it owes the other and when. Here is the schedule I aim for.
- Days 1 to 2: kickoff. I confirm the page list, collect your content and logins, and agree on the one action the site should drive.
- Days 3 to 5: design. You get the home page design on mobile and desktop and send one round of feedback.
- Days 6 to 9: build. All five pages are built on a preview link, with the booking or quote form working.
- Days 10 to 11: review. You click through everything and send one batched list of changes.
- Days 12 to 13: polish. I make the changes, finish SEO setup and test on real devices.
- Day 14: launch. The domain is connected and the sitemap is submitted to Google.
Notice that your part is three moments: content at kickoff, feedback on the design and feedback on the build. If each takes you a day, the project takes two weeks. If each takes you a week, the same project takes five weeks without one extra hour of development.
## Why do website projects run late?
Missing copy and photos are the most common cause. Next come late changes to the page list, slow access to accounts (domain registrar, Google Business Profile, payment provider) and feedback that arrives in pieces over several weeks.
### Missing content
A page cannot be finished around placeholder text. The length of a real paragraph changes the layout, and the real photos change the design. When content arrives late, pages get built twice.
### A moving page list
Adding a page in week two is fine if it reuses a layout. Adding a new feature in week two, such as online payments, changes the scope. It can still be done, but it needs its own time and price so the launch date stays honest.
### Slow account access
Nobody remembers where the domain was registered until launch day. Password resets, two-factor codes sent to a former employee and Google Business Profile verification can each cost several days.
### Scattered feedback
Five messages over two weeks, some contradicting each other, are much slower to act on than one list. Feedback from several people who have not agreed among themselves is slower still.
## What should you have ready before kickoff?
Collect your logo, photos, service list and prices before kickoff. If you do only one thing from this article, do that.
- Logo as an SVG or a high-resolution PNG
- Ten to twenty photos of your work, your space and your team
- Your services with a sentence or two on each, and prices if you publish them
- Business name, address, phone number and hours exactly as they appear on your Google Business Profile
- Reviews or testimonials you have permission to use
- Logins or invites for the domain registrar, Google Business Profile and any booking or payment tool
- Two or three websites you like, with a note on what you like about each
Give one person final say on decisions. Batch your feedback into one message per round.
> Before kickoff, log in to your domain registrar yourself and confirm the password works. It is the account owners most often lose access to, and it is the one launch depends on.
## How long does the launch itself take?
The launch usually takes less than a day, and most of that is waiting for DNS. Connecting a domain means changing two records at your registrar: an A record for the root domain and a CNAME record for the www version, both pointing at the host. Many registrars apply the change within minutes. Others take a few hours, and the full spread across the internet can take up to 48 hours. The SSL certificate, which puts the padlock in the address bar, is issued automatically by hosts such as Vercel once the records resolve.
### If you have an old site
Replacing an existing site adds one job: redirects. Every old address that people or Google might still visit should forward to the matching new page. That keeps the search rankings you already have and stops visitors from landing on an error page.
### Showing up on Google
Being live and being found are different events. After launch I submit the sitemap in Google Search Console so Google knows the pages exist. Google describes a sitemap as a hint, not a guarantee, so the pages still need to be worth crawling. New sites are typically picked up within days to a few weeks. Ranking well for a competitive search takes longer and depends on content, reviews and links, not on the launch date.
## Can a website be built faster?
Rush work is possible. It costs more because other work gets moved, and it only helps if your content is ready to go. A rush cannot shorten the time you take to write your service descriptions.
There is a better way to go faster that costs nothing: cut the first version. If something is not ready, launch without it and add it later. A live site that is 90 percent done beats a perfect one next month. In practice that might mean:
- Launching with one page now and adding service pages over the following weeks
- Launching with a contact form and adding online booking in a second phase
- Launching with phone photos and replacing them after a photo session
- Launching in English and adding a second language later
A site that is live can be shared, collect inquiries and start being indexed by Google. A site waiting on the last ten percent does none of that.
## How long does a web app or SaaS MVP take?
Most SaaS MVPs take three to six weeks, because an app has moving parts a website does not: user accounts, a database, permissions and payments. My SaaS MVP package, with auth, a dashboard, a database and payments, runs about 21 days. A working first version of one core workflow can be done in about 7 days, and a full platform with several user roles and integrations takes about 45 days.
What stretches an app timeline is almost always integrations and roles. Each outside system has its own login flow, limits and edge cases. A scheduling app that syncs with a calendar has to handle events edited on either side, time zones and expired connections.
![FieldOps: the sign-in page of a job scheduling app I built for field teams, listing its Outlook Calendar sync, documents and contacts features.](/shots/fieldops-login.jpg)
Each added user role multiplies the screens and the permission rules to test. The way to keep an MVP inside six weeks is the same as for a website: agree on the one workflow that must work on day one, and write down everything else as phase two.
## What does a one-week, one-page site look like day by day?
A one-page site fits in seven days when the content is ready on day one and you review twice. Here is how the week runs, using a made-up mobile dog grooming business as the illustration.
- Day 1: kickoff. I confirm the one action, in this case "text us to book", and collect the logo, ten photos, the service list with prices and the service area.
- Day 2: structure and design. I lay out the sections in order: headline and button, services with prices, photos, reviews, area served, hours and contact. You see the mobile design first.
- Days 3 to 4: build. The page goes up on a preview link. Every push I make gets its own address on Vercel, so you can check progress on your phone whenever you like.
- Day 5: your review. You send one list of changes.
- Day 6: polish and SEO setup. I make the changes, write the page title and description, add structured data for the business details and test the call and text buttons on real phones.
- Day 7: launch. The domain is connected and the sitemap is submitted in Search Console.
Your part is about two hours across the week: the content on day one and one careful review on day five. If the review slips by three days, so does the launch. The same pattern scales to the two-week business site described above.
## The bottom line
A one-page site takes about a week, a five-page business site about two weeks, and a custom multi-page build about three weeks. Web apps and SaaS MVPs take three to six weeks. Those numbers hold when the content arrives at kickoff, one person makes the decisions and feedback comes in one message per round. If you want your site sooner, the fastest lever is not a rush fee. It is having your text, photos and logins ready on day one, and being willing to launch a smaller first version.`,
  },
  {
    slug: 'nextjs-vs-webflow-vs-wix',
    title: 'Next.js vs Webflow vs Wix: which is right for your business site?',
    description: 'A comparison of three ways to build a business website by cost, speed, editing, SEO and flexibility, with a recommendation for each type of business.',
    date: '2026-11-17',
    updated: '2026-11-22',
    keywords: ['Next.js vs Webflow', 'Webflow vs Wix', 'Next.js vs Wix', 'best website builder for small business'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'Wix Pricing Information', publisher: 'Wix', url: 'https://www.wix.com/plans' },
      { title: 'Plans & pricing', publisher: 'Webflow', url: 'https://webflow.com/pricing' },
      { title: 'Vercel Pricing: Hobby, Pro, and Enterprise plans', publisher: 'Vercel', url: 'https://vercel.com/pricing' },
      { title: 'Terms of Service', publisher: 'Vercel', url: 'https://vercel.com/legal/terms' },
      { title: 'Image Optimization', publisher: 'Next.js', url: 'https://nextjs.org/docs/app/getting-started/images' },
    ],
    shortAnswer: 'Wix is best for a simple site you build yourself, Webflow for designers who want visual control without code, and Next.js for businesses that need custom features, top speed and full ownership of the code.',
    faqs: [
      { q: 'Is Webflow better than Wix?', a: 'Webflow gives far more design control and cleaner output; Wix is easier for a beginner building a simple site alone.' },
      { q: 'Why would a business choose Next.js over a website builder?', a: 'For custom features such as booking logic, quote tools or portals, faster pages, and code the business owns outright.' },
      { q: 'Can I switch from Wix to Next.js later?', a: 'Yes, but the site is rebuilt rather than exported, so it is easiest to switch when you are ready for a redesign anyway.' },
      { q: 'Is Next.js better for SEO than Wix or Webflow?', a: 'All three can rank, but Next.js gives a developer full control over page speed, markup and structured data, which helps most on competitive searches.' },
      { q: 'Can I edit a Next.js site myself?', a: 'Yes, if the developer adds a CMS or an admin panel for the parts you change often, such as prices, menus or blog posts.' },
      { q: 'Which option has the lowest long-term cost?', a: 'Wix and Webflow bill every month for as long as the site exists, while a Next.js site is paid for once and then costs only the domain and light hosting.' },
    ],
    takeaways: [
      'Wix suits an owner building a simple site alone with no budget for a developer.',
      'Webflow suits designers and marketing teams who want visual control and a solid CMS without writing code.',
      'Next.js suits a business that needs custom features, very fast pages and code it owns outright.',
      'Builders charge a monthly fee for as long as the site exists, while a custom site is paid for once and is cheap to host.',
      'You cannot export a Wix site, so plan a switch for the moment you would redesign anyway.',
    ],
    body: `All three can produce a good-looking site. They differ in who does the work, what the site can do and what you pay each month.
I build with Next.js, so treat it as my default and judge the other two sections for fairness. It is not the right answer for every business. The right choice depends less on the tool than on three facts about your business: who will build the site, who will edit it, and whether it needs to do anything beyond showing information.
## What is the difference between Wix, Webflow and Next.js?
Wix is a do-it-yourself builder, Webflow is a visual design tool for professionals, and Next.js is a code framework a developer builds with. They sit at three points on one line that runs from easy and limited to flexible and technical.
- Wix: you drag sections onto a page, pick a template and publish. Wix hosts the site and you pay a subscription.
- Webflow: a designer builds layouts visually with the same box model a developer uses in CSS. Webflow hosts the site and you pay per site.
- Next.js: a developer writes the site in React and TypeScript. The code sits in a GitHub repository you own and deploys to a host such as Vercel.
The practical result is that Wix asks the most of your own time and the least of your budget, Next.js does the opposite, and Webflow sits between them and assumes you have a designer.
## Who is Wix right for?
Wix is right for an owner who needs a simple site this week and will build it personally. Wix is a drag-and-drop builder for people building their own site. Setup is fast and there is an app market for common features.
### Where it works well
A new business that needs a home page, a short list of services, hours and a contact form can be live in a weekend. The templates look decent, the editor needs no training, and bookings, a small store and email forms are available as apps.
### Where it runs out
The trade-offs are a monthly subscription for as long as the site exists, limited control over performance and markup, and no way to export the site if you leave. Each app you add loads its own scripts, so a Wix site with booking, chat, a popup and a gallery often feels slow on a phone. When you need something the app market does not offer, such as a quote form that prices a job from several inputs, you are stuck with a workaround.
## Who is Webflow right for?
Webflow is right for a design-led marketing site that a team will keep editing. Webflow is a visual design tool that outputs clean code and has a strong CMS for blogs and collections. It suits designers and marketing teams who want pixel control without writing code.
### Where it works well
Webflow gives a designer real control: layouts, breakpoints and scroll animations are set visually, and the HTML it produces is tidy. Its CMS lets you define a collection, such as team members, case studies or blog posts, design one template and have every item follow it. Editors can change text and images without touching the design.
### Where it runs out
It costs more than Wix, and features beyond its CMS usually need third-party tools. Logins, member areas, complex forms and anything with business rules are bolted on through outside services, each with its own fee. CMS plans cap the number of items. The editor also has a learning curve, so an owner without a designer usually finds it harder than Wix, not easier.
## Who is Next.js right for?
Next.js is right for a business whose site has to do work, or one that expects the site to grow. Next.js is a code framework. A developer builds the site, and you can add anything: booking rules, quote calculators, client portals, payments.
### Where it works well
Because it is code, there is no list of features to stay inside. The same project can hold a marketing site, a booking flow with your exact rules, a customer login and an admin panel. Pages are pre-built and very fast, and the code lives in your own repository.
One of my clients is a commercial printer. Their site is not only a brochure. It takes in job details from customers and gives the shop a tool to manage quotes, and it was built for the way that shop works.
![Artistic Printing: the home page I built for a commercial printer, where the Get your quote button starts the shop's own client intake and quote tool.](/shots/artistic-home.jpg)
### Where it runs out
You need a developer to build it and to make structural changes later. Editing needs a CMS or admin panel added by the developer. If nobody plans for that, every text change becomes a request, which gets old quickly.
> If you choose Next.js, list the things you will change yourself, such as prices, hours, menu items and blog posts, and ask for an editing screen for exactly those. Everything else can stay in code.
## Which one is fastest and best for SEO?
Next.js gives the most control over speed and SEO, Webflow is close behind for standard marketing pages, and Wix is fine for basics. All three can rank on Google. The gap shows up on competitive searches and on phones.
### Speed
A Next.js site can pre-build each page as static HTML, send only the JavaScript that page needs, and resize and compress images automatically through its image component. The developer decides exactly which scripts load. Webflow pages are also served as static files from a CDN and are generally quick, though heavy animations and embedded tools slow them down. Wix has improved, but the owner has little say over what the platform loads.
### SEO control
All three let you set page titles, descriptions and image alt text. The differences are further down the list.
- Structured data: with Next.js, LocalBusiness, FAQ and Product markup can be generated for every page from your data. Webflow supports custom code per page. Wix covers common cases with built-in settings.
- URL structure and redirects: fully controlled in Next.js, well supported in Webflow, more limited in Wix.
- Programmatic pages: a Next.js site can generate a page for each service and city from one data file. Webflow does this with CMS collections up to its item limits.
For a local business with five pages, any of the three can do well with good content and a complete Google Business Profile. Past that, control starts to matter.
## What does each one cost over three years?
Builders cost less in month one and more by year three, and a custom site is the reverse. The numbers below are shapes, not quotes, because platform prices change. Check each pricing page before you decide.
### Wix
A subscription every month, usually billed yearly, on a plan that removes Wix branding and connects your domain. Paid apps add their own monthly fees. Your own time to build and maintain it is the hidden line.
### Webflow
A site plan every month, higher if you need the CMS, plus a designer's fee to build it unless you are one. Extra editor seats and outside tools for forms, memberships or search add to the bill.
### Next.js
A one-time build fee, then the domain and light hosting. For reference, I build one-page sites from $150, business sites of up to five pages from $450 and full custom builds from $1,200. A small Next.js site costs little to host, and there is no platform subscription. You pay again only when you want something changed or added.
The honest comparison is three years of subscription and your own hours against one build fee and occasional updates. For a site that will exist for years, the custom route is often cheaper than it first looks.
## What do the plans cost at the time of writing?
At the time of writing, Wix runs from about $18 to $40 a month for its main plans, Webflow from $15 to $25 a month per site, and a small Next.js site can be hosted for $0 to $20 a month. All of these are list prices billed yearly or monthly as stated on each pricing page, and they change, so treat them as a snapshot.
### Wix
The paid plans shown on the Wix pricing page are Light at $17.77 a month, Core at $29.77 and Business at $39.77, billed yearly and paid up front, with prices that vary by location. Over three years, the Business plan alone comes to roughly $1,430 before any paid apps.
### Webflow
Site plans start at $15 a month billed yearly for a site without the CMS, and $25 a month for the plan that includes it, with a cap of 20,000 CMS items. A designer's fee to build the site sits on top.
### Next.js on Vercel
Vercel's Hobby plan is free, but its terms limit it to personal or non-commercial use, so a business site belongs on the Pro plan at $20 a month, which includes $20 of usage credit. A light brochure site is built to stay inside that credit. Over three years that is about $720 in hosting, plus the one-time build.
The comparison that matters is your own: multiply the plan you would actually need by 36 months, add apps or designer fees, and set it beside a build quote.
## How do you edit content and what if you want to leave?
Wix and Webflow make editing easy and leaving hard, while Next.js makes leaving easy and needs editing to be planned.
### Day-to-day editing
In Wix, you click on the text and type. In Webflow, an editor can update text, images and CMS items without entering the design tool. In Next.js, it depends on what was built: a headless CMS such as Sanity, a small custom admin panel, or content files the developer updates for you.
### Leaving the platform
- Wix: there is no export. Moving means rebuilding the site elsewhere and copying the content across.
- Webflow: paid plans can export HTML, CSS and assets for static pages, but CMS content and its templates do not come with the export in working form. CMS items can be downloaded as a spreadsheet.
- Next.js: the code is already yours. You can change hosts or developers without rebuilding anything.
### Switching to Next.js later
Yes, you can switch from a builder, but the site is rebuilt and not exported. The time to do it is when you would redesign anyway. Keep the same URLs where you can and redirect the ones that change, so existing search rankings carry over.
## Which should you pick?
Pick by who builds, who edits and what the site must do. Side by side, the three look like this.
- Wix: lowest effort, monthly fee, limited custom features, locked in
- Webflow: high design control, monthly fee, good CMS, partial lock-in
- Next.js: needs a developer, full custom features, fastest pages, you own the code
Building it yourself with no budget for a developer: Wix. A design-led marketing site edited by a team: Webflow. A site that has to do real work for the business, or that may grow into an app: Next.js.
A few common cases:
- A new solo business testing an idea: Wix, or a one-page custom site if you would rather not build it yourself
- A funded startup with a designer and a content team: Webflow
- A service business that wants a page per service and city: Next.js
- Any site that will later need customer logins: Next.js, so you do not rebuild
A restaurant that wants reservations and pickup orders on its own site, without sending guests to a third-party page, is also a Next.js case. I built exactly that for a restaurant in Hollywood.
![New York Nook: the pickup ordering page I built for a Hollywood restaurant, with menu categories, a cart and pickup time slots.](/shots/newyorknook-order.jpg)
## The bottom line
Wix is best for a simple site you build yourself, Webflow for designers who want visual control without code, and Next.js for businesses that need custom features, top speed and full ownership of the code. None of them is wrong in general. The mistake is picking a builder for a site that needs custom logic, or paying for a custom build when a weekend on Wix would have done the job. Write down what the site has to do in a year, not only at launch, and the choice usually makes itself.`,
  },
  {
    slug: 'shopify-vs-custom-nextjs-store',
    title: 'Shopify vs a custom Next.js store: when does custom make sense?',
    description: 'When a brand should stay on a Shopify theme, when to go headless with Next.js, and what each option costs in time and money.',
    date: '2026-11-17',
    updated: '2026-11-22',
    keywords: ['Shopify vs custom website', 'headless Shopify Next.js', 'custom ecommerce site', 'Shopify alternative'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'About headless commerce', publisher: 'Shopify', url: 'https://shopify.dev/docs/storefronts/headless' },
      { title: 'Storefront API reference', publisher: 'Shopify', url: 'https://shopify.dev/docs/api/storefront' },
    ],
    shortAnswer: 'Most new online stores should start on a Shopify theme because checkout, payments and inventory work on day one. A custom Next.js storefront on top of Shopify makes sense once the brand needs a unique experience, faster pages or features a theme cannot handle.',
    faqs: [
      { q: 'What is headless Shopify?', a: 'Shopify keeps running products, checkout and orders, while a custom frontend such as Next.js shows the store to customers.' },
      { q: 'Is a custom storefront faster than a Shopify theme?', a: 'It can be, because the developer controls every script on the page instead of stacking theme apps.' },
      { q: 'Do I lose Shopify checkout if I go custom?', a: 'No. A headless storefront still sends customers to Shopify checkout.' },
      { q: 'Will my Shopify apps still work on a headless storefront?', a: 'Apps that run in the Shopify admin keep working, but apps that add widgets to a theme need an API-based replacement or a custom component.' },
      { q: 'Can I keep my Shopify theme and still add custom features?', a: 'Yes. A separate Next.js tool, such as a creator portal or a wholesale order form, can sit beside the theme and use the same Shopify data.' },
      { q: 'When is the wrong time to go headless?', a: 'Before the store has steady sales, because the budget does more for a new brand when it goes to product photos and marketing.' },
    ],
    takeaways: [
      'Most new stores should start on a Shopify theme, because checkout, payments and inventory work on day one.',
      'A custom Next.js storefront makes sense when the theme is slow, a needed feature has no good app, or the brand has outgrown theme layouts.',
      'Going headless keeps Shopify checkout, orders and inventory, and replaces only the pages customers browse.',
      'The cost of custom is a larger build, a developer for design changes and replacing theme apps that no longer fit.',
      'A middle path is to keep the theme and build custom tools beside it that use the same Shopify data.',
    ],
    body: `Shopify is excellent at the hard parts of ecommerce: checkout, payments, taxes, inventory and order management. The question is not whether to use Shopify. It is whether the storefront your customers see should be a theme or custom code.
Most of my Shopify work is on the software around the store, and I am the founder of SQWAD, which Shopify brands use to run creator programs. My view from that seat is that custom storefronts are right for fewer brands than the internet suggests, and that many of the brands who do want custom need something smaller than a full rebuild.
## Should a new store start on Shopify?
Yes, most new online stores should start on a Shopify theme because checkout, payments and inventory work on day one. Those are the parts of ecommerce that are expensive to get wrong. Shopify handles card payments, tax calculation, shipping rates, order emails, refunds and stock counts, and it keeps them working as rules change.
Building those yourself is possible with Next.js and Stripe, and it can be the right call for a store with a handful of digital products or one simple item. For a physical product brand with variants, shipping zones and returns, you would spend weeks rebuilding what Shopify gives you on a monthly plan. So for nearly every product brand, the real comparison is not Shopify against custom. It is a Shopify theme against a custom storefront that still runs on Shopify.
## When is a Shopify theme enough?
A theme is enough for most stores that are still finding their customers. If you are launching, have under a few hundred products and your brand fits a well-made theme, stay on a theme. You will launch in days and can spend your budget on product photos and marketing instead.
### What themes do well
Current Shopify themes are built from sections and blocks that you rearrange in the theme editor without code. You can change the home page for a sale, add a product page layout or build a landing page yourself in an afternoon. Thousands of apps install in a click because they are designed to plug in to themes.
### What a developer can still do inside a theme
Staying on a theme does not mean accepting it as shipped. A developer can edit the theme's Liquid templates, add custom sections, remove unused app scripts and build a product page that looks nothing like the default. That work is far cheaper than going headless and fixes a large share of the complaints brands have about their store.
> Before you pay for a rebuild, open your theme's app embeds and installed apps and remove everything you no longer use. Leftover scripts from old apps are the most common reason a Shopify store is slow.
## When does a custom storefront make sense?
Custom makes sense once the theme is holding the business back in a way that cleanup and theme edits cannot fix. The usual signs are these.
- The theme plus apps has made the store slow on phones
- You need a feature no app does well, such as a product builder, a membership area or a creator program
- The brand needs a look and feel themes cannot match
- You want content pages, landing pages and the store in one fast site
### What those look like in practice
A product builder is a good example. If customers configure an item across several steps, with options that depend on each other and a live price, a theme and an app can get you part of the way and then fight you on every detail. In code it is an ordinary form with rules.
Content is another. A brand that publishes guides, lookbooks and campaign pages often finds the theme's blog too limited. A Next.js site can hold the store and the editorial content in one design, with pages that load quickly because they are pre-built.
### What is not a good reason
Wanting the store to feel more premium is usually a design problem, not a platform problem. A strong designer working inside a theme will get you there for much less.
## How does headless Shopify with Next.js work?
Headless means Shopify stays the back office while a custom site becomes the shop window. The Next.js site reads products from Shopify through its API and shows them in a fully custom design. When a customer checks out, they go to Shopify's checkout. Orders, inventory and payouts stay in the Shopify admin you already know.
### The moving parts
- Storefront API: Shopify's GraphQL API for public store data, which Shopify offers only in GraphQL, with no REST version. The site uses it to fetch products, collections, prices and availability.
- Access token: created in the Shopify admin through the Headless channel or a custom app, and stored as an environment variable in the hosting account.
- Cart: the site creates a cart through the API, adds line items to it and receives a checkout URL back.
- Checkout: the buy button sends the customer to that URL, which is Shopify's own checkout, usually on a subdomain of your store.
- Webhooks: when a product changes in the admin, Shopify notifies the site so the affected pages are rebuilt and prices stay current.
### What your team notices
Day to day, very little changes for whoever runs operations. Products are still added in Shopify. Orders still arrive in Shopify. Discounts, shipping and taxes are still set in Shopify. What changes is that page design now lives in code or in a CMS, not in the theme editor.
Shopify also offers its own React framework for this, called Hydrogen. Next.js is the more common choice when the brand wants the store, the content site and other tools in one codebase.
## What do you give up by going headless?
You give up the convenience of the theme ecosystem. Custom costs more to build and needs a developer for design changes. Some theme apps will not work on a custom storefront and need a replacement. In exchange you get speed, control and features built around your business.
### Apps
Apps fall into two groups. Apps that work in the admin, such as shipping, inventory, accounting and email tools, are unaffected. Apps that inject a widget into theme pages, such as reviews, upsells, size charts, subscription selectors and popups, do not appear on a custom storefront. Each one needs either the vendor's API, if they offer one, or a custom component. List every storefront app you rely on before you commit, because this is where headless budgets grow.
### The theme editor
Your marketing team can no longer drag a new section onto the home page. If they need that freedom, the build has to include a CMS with flexible page sections, which adds to the scope.
### Tracking
Analytics and ad pixels that a theme sets up through app installs have to be wired by hand on a custom storefront: page views, add to cart and the handoff to checkout. It is routine work, and it has to be tested carefully, because broken tracking costs ad money quietly.
## What does each option cost in time and money?
A theme costs little and launches in days, a custom storefront costs more and takes weeks, and the monthly Shopify plan is the same either way.
- Theme, set up yourself: the Shopify plan, a free or paid theme, and your own time
- Theme, customized by a developer: the same, plus a few days of development
- Headless storefront: the Shopify plan, a custom build measured in weeks, hosting for the Next.js site, and a developer for later design changes
For a sense of scale from my own pricing, a multi-page site with custom features starts from $1,200 and takes about 21 days. A headless store sits at that level or above, depending on the size of the catalog, the number of page templates and how many storefront apps need replacing.
The cost that does not show on an invoice is attention. A rebuild takes weeks of your team's time for reviews and testing. For a brand with steady revenue and a clear problem to solve, that is a fair trade. For a brand still looking for its first reliable sales channel, it is time taken from the thing that matters more.
## Is there a middle path?
Yes, and it is the one I know best. Many brands keep the theme for the store and add custom Next.js tools beside it, such as a creator portal or a wholesale order form, connected to the same Shopify data. That is how I built tools for TheHoopGang and SQWAD.
The store stays on its theme, with every app still working. The custom tool lives on its own address and does one job that no app did well.
TheHoopGang is a basketball streetwear brand that gifts gear to creators. The portal I built lets creators sign up, claim gear, submit their content and get refunded once they post, and it manages more than 50 creators.
![TheHoopGang creator portal: the dashboard creators use to track their gear and submit content.](/images/hoopgang/creator-dashboard.png)
SQWAD does a similar job as a product that any Shopify brand can use. Each brand gets a branded portal for applications, shipping, content, competitions and payouts, and sales are traced back to the creator whose content drove them. SQWAD's published TheHoopGang case study reports more than $500K in revenue attributed to creator videos.
![SQWAD: the feature grid on the homepage of the SaaS I founded, covering revenue attribution per video, competitions and leaderboards, smart retainers, cohorts, creator share links and a branded portal.](/shots/sqwad-home-s3.jpg)
Other tools that fit this pattern include a wholesale order form with customer-specific prices, a returns portal, a quiz that recommends products, and an internal dashboard that pulls orders into one view. Each can be built and launched without touching the storefront.
## How do you decide?
Decide by naming the specific problem, then choosing the smallest change that solves it. These questions sort most cases.
- Is the store slow? Audit apps and scripts first. Go custom only if it is still slow after cleanup.
- Is a feature missing? Check whether a theme customization or a separate tool beside the store would cover it.
- Is the design the issue? Try a designer and custom theme sections before a rebuild.
- Do content and commerce need to live in one fast site? That is a real case for headless.
- Does your team rely on the theme editor every week? Then budget for a CMS in the custom build, or stay on the theme.
- Is revenue steady enough that a few weeks of rebuild will not hurt? If not, wait.
If you answer these and still land on custom, you will also have most of the brief a developer needs.
## What does one custom product page actually involve?
A custom product page is one query for the product, one design for its options and one call to add it to a cart. Walking through it shows where the build time goes.
The page asks the Storefront API for a product by its handle: title, description, images, price, and each variant with its size, color and availability. Next.js builds the page ahead of time from that data, so it loads fast, and a webhook rebuilds it when the product changes in the admin.
The design work is the part a theme normally gives you for free. Size and color selectors have to show which combinations are sold out, the price has to update when a variant with a different price is picked, and the images should switch to the chosen color. Then the add to cart button creates or updates a cart through the API and keeps its ID in the browser, so the bag survives a page reload.
I built the same front-end pieces, with a Firebase admin in place of Shopify, for LACEUP, a basketball apparel storefront with colorway filters and custom product pages. The brand asked for a showcase store first, so checkout is a demo flow for now and the bag is structured so payments can be added later.
![LACEUP: a product page I built for a basketball apparel storefront, with a size selector and an add to bag button.](/shots/laceup-products-reversible-mesh-jersey.jpg)
Multiply that by collection pages, search, the cart drawer and every storefront app you replace, and the weeks in a headless quote make sense.
## The bottom line
Start on a Shopify theme, because it gets a store selling in days and handles the parts that are costly to get wrong. Move to a custom Next.js storefront when the brand needs a unique experience, faster pages or features a theme cannot handle, and go in knowing that some apps will need replacing and design changes will need a developer. In between sits the option many brands should look at first: keep the theme, and build the one custom tool the business is missing beside it.`,
  },
  {
    slug: 'firebase-vs-supabase-for-mvp',
    title: 'Firebase vs Supabase for your MVP: how to choose',
    description: 'A founder-friendly comparison of Firebase and Supabase for an MVP: data model, auth, security rules, realtime, pricing behavior and lock-in.',
    date: '2026-11-17',
    updated: '2026-11-22',
    keywords: ['Firebase vs Supabase', 'best backend for MVP', 'Supabase or Firebase for startup', 'MVP database choice'],
    service: 'saas-mvp-development',
    sources: [
      { title: 'Firebase Pricing', publisher: 'Firebase', url: 'https://firebase.google.com/pricing' },
      { title: 'Supabase Pricing', publisher: 'Supabase', url: 'https://supabase.com/pricing.md' },
      { title: 'Row Level Security', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/postgres/row-level-security' },
      { title: 'Access data offline', publisher: 'Firebase', url: 'https://firebase.google.com/docs/firestore/manage-data/enable-offline' },
      { title: 'Realtime', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/realtime' },
    ],
    shortAnswer: 'Choose Firebase when your data is document-shaped, you want realtime updates and the fastest start. Choose Supabase when your data is relational, you need SQL reporting, or you want a standard Postgres database you can move later.',
    faqs: [
      { q: 'Is Supabase a Firebase alternative?', a: 'Yes. Both provide auth, a database, storage and serverless functions; Supabase is built on Postgres while Firestore is a NoSQL document database.' },
      { q: 'Which is easier to secure?', a: 'Both need explicit rules: Firestore security rules in Firebase and row level security policies in Supabase. Leaving either open is the most common MVP security bug.' },
      { q: 'Can I switch later?', a: 'Moving from Supabase is easier because it is standard Postgres; moving off Firestore means reshaping documents into tables.' },
      { q: 'Which is cheaper for an MVP?', a: 'Both have free tiers that cover a small MVP; later, Firestore cost follows the number of document reads and writes while Supabase cost follows database size and compute.' },
      { q: 'Which is better for a mobile app?', a: 'Firebase has the edge for mobile apps that need offline support and live updates, because its SDKs cache data on the device and sync when the connection returns.' },
      { q: 'Do I need a backend developer to use either one?', a: 'You can start without one, but someone has to write the security rules or row level security policies correctly before real users sign up.' },
    ],
    takeaways: [
      'Choose Firebase when the data is document-shaped, the app needs live updates or it is mobile-first.',
      'Choose Supabase when the data is relational, you need SQL reporting or you want a standard Postgres database.',
      'Both need hand-written access rules, and leaving them open is the most common MVP security bug.',
      'Firestore bills per document read and write, while Supabase bills mostly by database size and compute.',
      'Supabase is easier to leave because it is plain Postgres, while Firestore data has to be reshaped to move.',
    ],
    body: `Both are good choices, and the wrong one rarely kills a startup. The right one saves weeks.
I use both. Which one I reach for depends on a ten-minute exercise I do before writing any code: list the things the product stores, draw the lines between them, and note which screens need to update live. This article walks through the same exercise so you can do it for your own MVP.
## What is the short answer?
Choose Firebase when your data is document-shaped, you want realtime updates and the fastest start. Choose Supabase when your data is relational, you need SQL reporting, or you want a standard Postgres database you can move later.
Both give you the same four building blocks, so you are not choosing between feature lists.
- Auth: sign-up, login and sessions
- Database: Firestore in Firebase, Postgres in Supabase
- Storage: file uploads such as photos and documents
- Functions: server code that runs on demand, for things like webhooks and scheduled jobs
The database is the real decision. Everything else follows from it, and it is the hardest part to change once you have users.
## How do the data models differ?
Firestore stores documents and Supabase stores rows in related tables. Firebase's Firestore stores documents in collections. It shines when each screen reads one document or a simple list. Supabase is Postgres, a relational database with tables, joins and SQL. If your product has many entities pointing at each other and you will want reports across them, Postgres fits better.
### The same feature in both
Take a creator program with brands, creators, content submissions and payouts.
In Firestore, you would likely have a brands collection, with each brand holding subcollections for its creators and their submissions. Loading one creator's page is a single fast read. Asking a question across the whole dataset is harder. To show total payouts per brand for last month, you either keep a running total up to date on every write or read many documents and add them up in code. Firestore has no joins, so related data is often copied into more than one document and has to be kept in sync.
In Postgres, each of those is a table with foreign keys between them. The monthly payout report is one SQL query with a join and a GROUP BY. The cost is more planning up front: you design the schema, write migrations when it changes and think about indexes.
### A quick test
Write down the five questions you will want to ask your data in six months. If they sound like "show me this user's stuff", either database works. If they sound like "compare, total, rank or filter across everything", lean toward Postgres.
## How do auth and security compare?
Auth is close to a tie, and security is where MVPs get hurt on both. Both include auth with email, magic links and social logins. Both also need security rules written by hand. In Firebase that means Firestore security rules; in Supabase it means row level security policies on each table. AI app builders often leave these open, so check them before launch.
### Why this matters more than on a normal backend
In both products, the browser or phone talks to the database directly using a public key. That key is meant to be public. The rules are the only thing deciding who can read or change each record.
### What open looks like in Firebase
A Firestore database created in test mode starts with a rule that allows all reads and writes until a date about 30 days out. The other common mistake is a rule that reads: allow read, write: if true. Either one lets anyone with your project ID download or overwrite everything. A correct rule checks request.auth.uid against an owner field on the document.
### What open looks like in Supabase
A table with row level security turned off is readable and writable by anyone holding the anon key, which ships inside your frontend code. The fix is to enable RLS on every table and add policies, usually comparing auth.uid() to a user_id column. A second mistake is putting the service_role key in client code. That key bypasses every policy and belongs only on the server.
> Test your rules while signed in as a second user. Try to open the first user's records by ID. If it works, the rules are not finished.
## Which is better for realtime?
Firebase is better when live updates are central to the product. Firestore listeners make live dashboards and chat simple. Supabase has realtime too, but Firebase's version is more mature for apps where many screens update live.
### How each one does it
In Firestore you attach a listener to a document or a query, and your code receives the new data whenever it changes. The same SDK caches data on the device, so a mobile app keeps working with a weak connection and syncs when it returns. That offline behavior comes built in and is a large reason Firebase is popular for mobile.
Supabase Realtime streams database changes over a websocket. You subscribe to inserts, updates and deletes on a table, and it also offers broadcast and presence channels for things like typing indicators. It works well. It takes more care to combine with row level security, and there is no built-in offline cache.
### A mobile example
NOM is a food discovery app I built in React Native, Expo and Firebase. People post restaurant reviews with photos, ratings and comments into a social feed. A feed like that, on phones, with uploads from the camera, is the kind of product where Firebase saves the most time.
@video(/work/nom.mp4|/work/nom-poster.jpg|NOM: a screen recording of the app's review feed, built in React Native, Expo and Firebase.)
## How does pricing behave as you grow?
The two bill for different things, so the same app can be cheap on one and costly on the other. Firestore bills per read and write, so a page that reads thousands of documents on every visit can get expensive. Supabase bills mostly by database size and compute, which is easier to predict for read-heavy apps.
### Firebase
The free Spark plan includes a daily allowance of document reads, writes and deletes. Past that you move to the pay-as-you-go Blaze plan and pay per operation, plus storage and bandwidth. The bill follows usage closely. That is good when usage is low, and a surprise when one badly written screen runs a large query on every load, or a listener sits on a collection that changes constantly.
### Supabase
The free plan covers a small database, and at the time of writing it pauses projects that go unused for about a week, which matters for a demo you only show now and then. Paid plans are a flat monthly fee per project plus usage beyond the included amounts. A query that reads ten thousand rows costs the same as one that reads ten, as long as the database can handle it.
### What to do about it
On Firestore, paginate lists, avoid reading whole collections and store counts on a parent document so you do not have to count children. On Supabase, add indexes for the columns you filter by and keep an eye on database size. On both, set a budget alert on the first day.
## How far does each free tier go for a real MVP?
Further than most founders expect, as long as screens read only what they show. At the time of writing, Firebase's free Spark plan includes 50,000 Firestore document reads, 20,000 writes and 20,000 deletes per day, with 1 GiB of stored data. Supabase's free plan covers a small Postgres database and pauses a project after one week of inactivity, and its Pro plan starts at $25 a month.
Here is a worked example. Picture a booking tool with 200 active users a day. Each opens a dashboard that lists their 20 most recent bookings and makes two changes.
- On Firestore, that is about 4,000 reads and 400 writes a day, well inside the free allowance.
- Now suppose the dashboard was written to load all 5,000 bookings in the collection and filter them in the browser. The same 200 visits cost about a million reads a day. The free allowance runs out after about ten visits, and from then on the app either stops reading data for the day or, on Blaze, pays for every read.
- On Supabase, both versions of the dashboard cost the same in money, because billing follows database size and compute. The badly written one is simply slower.
The lesson cuts both ways. Firestore punishes careless queries with a bill, which at least makes them visible. Postgres hides them until the database runs slowly. Either way, paginate from day one and check usage weekly during the first month.
## How hard is it to leave?
Supabase is easier to leave. Supabase is standard Postgres, so you can move the database almost anywhere. Firestore is proprietary.
With Supabase, a pg_dump of your database restores on any Postgres host, whether that is a cloud provider's managed Postgres or your own server. Your SQL, your schema and most of your application queries carry over. The pieces that are specific to Supabase are auth, storage and its realtime layer, and those would need replacements.
With Firestore, you can export your data, but there is nowhere to import it that behaves the same way. Moving means designing tables, writing a script to reshape documents into rows and rewriting every query in the app. It is doable, and it is weeks of work on a real product.
I would not let lock-in decide the choice alone. Most MVPs never migrate, and a product that fits Firebase well will get to market faster on it. It should weigh more if you expect to need heavy reporting, or if a future buyer or enterprise customer may ask where and how the data is hosted.
## Which should you pick for your MVP?
Pick by the shape of your data and where the app runs, and use the lists below as a tiebreaker.
### Lean toward Firebase when
- The app is mobile-first, or needs to work offline
- Many screens update live: chat, feeds, live dashboards, collaboration
- Each screen mostly reads one user's own data
- You want the fewest decisions between idea and first user
### Lean toward Supabase when
- The data is a web of related things: orders, customers, products, invoices
- You will want reports, exports or an admin view that filters across everything
- You or your developer already know SQL
- You want the option to move the database later
### What I use
I built SQWAD on Firebase because creator portals need realtime updates, and TheHoopGang's portal on Postgres because its data is relational.
![SQWAD: the creator competitions page of the SaaS I founded on Firebase, describing sales and volume competitions with live leaderboards.](/shots/sqwad-creator-competitions.jpg)
TheHoopGang's portal tracks creators, the gear they claim, the content they submit and the refunds that follow, and the brand's team needs to filter and total across all of it. That is relational data, so it runs on Postgres with Prisma.
## When should you get help?
Get help at two points: before you commit to a data model, and before real users sign up. An hour spent on the schema or document structure up front prevents the kind of rework that costs weeks later. A review of rules and policies before launch prevents the worst outcome an MVP can have, which is leaking user data.
Signs that it is time to bring in a developer:
- The app works for you but you have never tested it as a second user
- You see "Missing or insufficient permissions" in Firebase, or empty results in Supabase after turning on RLS, and the fix you found was to open the rules
- Your Firebase bill jumped and you cannot tell which screen caused it
- An AI builder generated the backend and you are not sure what it set up
I build MVPs on both stacks, with a launchable SaaS MVP including auth, a dashboard, a database and payments from $1,200 in about 21 days. If the app already exists and needs its rules, payments or deploy fixed, single fixes start from $60.
## The bottom line
Firebase gets a realtime or mobile-first product in front of users fastest. Supabase gives relational data, SQL and a database you can take with you. Both are safe only after someone writes the access rules properly. Pick by the shape of your data, not by which is trending.`,
  },
  {
    slug: 'how-much-does-a-saas-mvp-cost',
    title: 'How much does an MVP cost? SaaS MVP prices and what drives them',
    description: 'How much it costs to build an MVP or SaaS MVP, from a $250 single workflow to a $3,000 multi-role platform, what drives the price, and what to leave out of version one.',
    date: '2026-11-17',
    updated: '2026-11-22',
    keywords: ['SaaS MVP cost', 'how much does an MVP cost', 'how much to build an MVP', 'MVP development price', 'cost to build a web app'],
    service: 'saas-mvp-development',
    sources: [
      { title: 'Vercel Pricing: Hobby, Pro, and Enterprise plans', publisher: 'Vercel', url: 'https://vercel.com/pricing' },
      { title: 'Supabase Pricing', publisher: 'Supabase', url: 'https://supabase.com/pricing.md' },
      { title: 'Firebase Pricing', publisher: 'Firebase', url: 'https://firebase.google.com/pricing' },
      { title: 'Pricing & Fees', publisher: 'Stripe', url: 'https://stripe.com/pricing' },
    ],
    shortAnswer: 'A SaaS MVP with auth, a dashboard, a database and payments typically costs from about $1,200 with a freelance developer, and a multi-role platform with admin tools from about $3,000. The biggest cost driver is how many workflows version one includes.',
    faqs: [
      { q: 'What should a SaaS MVP include?', a: 'One core workflow done well, plus sign-up, login, billing and the minimum admin you need to support the first customers.' },
      { q: 'Why do MVP quotes vary so much?', a: 'Every extra user role, integration and workflow adds design, logic and testing, so scope drives price more than anything else.' },
      { q: 'Can I start smaller than an MVP?', a: 'Yes. A clickable working version of one workflow, from about $250, is enough to test the idea with real users.' },
      { q: 'How long does it take to build a SaaS MVP?', a: 'A single working workflow takes about 7 days, a launchable MVP with auth, a dashboard and payments about 21 days, and a multi-role platform about 45 days.' },
      { q: 'What ongoing costs does a SaaS MVP have after launch?', a: 'Hosting, a database plan, email sending, a domain and payment processing fees; most of these are free or small until you have real usage.' },
      { q: 'Who owns the code when a freelancer builds my MVP?', a: 'You should: the code belongs in your GitHub account and the app in your own cloud and Stripe accounts, which is how Thomas Osayi sets up every build.' },
    ],
    takeaways: [
      'A SaaS MVP costs from $250 for one working workflow, from $1,200 for a launchable product with auth and payments, and from $3,000 for a multi-role platform.',
      'Scope sets the price: each extra user role, integration and piece of custom logic adds screens, permissions and testing.',
      'Version one needs sign-up, the one workflow people will pay for, billing and a basic admin view, and very little else.',
      'Building in stages lets you test the workflow with real users before you pay for billing, roles and polish.',
      'Running costs are low at MVP scale, but list hosting, database, email and payment fees before launch so nothing surprises you.',
    ],
    body: `MVP pricing is mostly a scoping question. The same idea can cost three times as much depending on how much goes into version one, and most of the quotes that shock founders are quotes for a product that is much larger than an MVP.

I built my own SaaS, SQWAD, so I price these the way I would want one priced for me: by what version one has to do, not by how big the long-term vision is. This article walks through the real numbers, what moves them, and how to scope your idea before you ask anyone for a quote.
## How much does a SaaS MVP cost with a freelance developer?
With me, a SaaS MVP costs from $250 to $3,000 and up, depending on which of three levels your version one falls into.
- MVP Starter, one working workflow: from $250, about 7 days
- SaaS MVP with auth, dashboard, database and payments: from $1,200, about 21 days
- Full SaaS platform with multiple roles, admin tools and integrations: from $3,000, about 45 days
### What each level means in practice
The Starter is a clickable, working version of the single thing your product does. It runs on real code and a real database, so you can put it in front of users, but it skips billing and most account management. It answers one question: do people want this?

The SaaS MVP is the smallest thing you can charge for. Users sign up, log in, use the core workflow from a dashboard, and pay through Stripe. You get a production deploy on your own accounts.

The Full SaaS Platform is for products where more than one kind of user logs in, such as a brand and its creators, or a practice and its clients, plus admin tools and outside integrations. The "from" in each price matters. A build with two roles and one integration sits near the bottom of the range; five roles and three integrations does not.
## What actually drives the price of an MVP?
Three things drive the price: the number of user roles, the number of integrations, and how much custom logic the core workflow needs.
### User roles
Every role is close to a separate app. A role needs its own screens, its own navigation, its own permissions and its own test pass, because you have to prove that one role cannot see or change another role's data. Guardian MindCare, a therapy practice platform I built, has five roles: therapists, supervisors, trainees, clients and admins. The permission work on a product like that is a large share of the build.
![Guardian MindCare: a therapy practice platform I built with separate portals for therapists, supervisors, trainees, clients and admins.](/work/fiverr/guardian.jpg)
### Integrations
Stripe, Shopify, Meta, a calendar or an email provider each need account setup, API keys, error handling for when the other service is slow or down, and testing against their sandbox. The happy path of an integration is quick. The failure paths are where the hours go: a webhook that arrives twice, a token that expires, a rate limit.
### Custom logic
Matching, scoring, scheduling and attribution rules are the parts no library gives you. Standard features like forms, tables and login are quick to build. A rule such as "match a client to therapists who take their insurance and have openings" has to be designed, written and tested against edge cases.
## What should version one include, and what should you cut?
Version one should include sign-up, the one workflow people pay for, billing, and a basic admin view, and it should cut almost everything else.

Keep these:
- Sign-up, login and password reset
- The core workflow, complete from start to finish
- Stripe checkout with one plan
- An admin view where you can look up a customer and see what they see
- Transactional email for the moments that matter, such as a receipt or an invite

Cut these until a paying customer asks:
- Team accounts and invitations
- Multiple pricing tiers, coupons and annual plans
- A settings page with more than a handful of options
- A native mobile app; a responsive web app covers phones at this stage
- Analytics dashboards, exports and notification preferences
- Onboarding tours and anything that exists to look finished

The admin view is the one item founders try to cut and should not. In the first weeks you will be doing support by hand, and you cannot help a customer whose account you cannot see.
> Write down the one sentence a customer would use to describe what they paid for. Anything that does not serve that sentence can wait for version two.
## How do you scope an MVP before asking for a quote?
You scope an MVP by writing the core workflow as a short list of steps, then counting the roles and integrations it touches.

Start with the workflow. Write it as plain steps a single user takes, from arriving to getting the result they came for. If you need more than eight or ten steps, you are probably describing two workflows, and one of them is version two.

Then answer four questions:
- Who logs in? Count each distinct kind of user as a role.
- What outside services must it talk to on day one? Payments usually, and at most one or two others.
- What does the product decide or calculate? That is your custom logic.
- What do you need to see as the owner? That is your admin view.

Send a developer those answers with two or three reference products and you will get a real number, usually within a day. Vague briefs get padded quotes, because the developer has to price in the risk that the scope is bigger than it sounds.
## What does this look like for a real idea?
Take a made-up example: a scheduling tool for mobile dog groomers, where the groomer sets availability and pet owners book and pay online.

Scoped as a Starter, from $250, it is the booking workflow alone. The groomer sets open slots, a customer picks one from a public link, and both get a confirmation email. No accounts for customers, no payments. That is enough to hand to three groomers and watch whether their customers actually book through it.

Scoped as a SaaS MVP, from $1,200, groomers sign up and log in, manage their calendar from a dashboard, and pay a monthly subscription through Stripe. Customers still book through a link without an account. This is a product you can sell.

Scoped as a Full SaaS Platform, from $3,000, it adds a second role with logins for pet owners, payments from owners to groomers, calendar sync, SMS reminders and an admin panel for you. Every item is reasonable. Together they are a different project with a different timeline, about 45 days instead of 21.

Same idea, three budgets. The right one depends on what you already know. If nobody has confirmed they would use it, start at the first level.
## Should you build in stages or all at once?
Build in stages: the workflow first, then real users, then billing and polish.

Staging protects you from the most expensive mistake in software, which is building the full product around a workflow that turns out to be wrong. When I built SQWAD, the first version did one thing: let a brand see which creator drove a sale. Everything else came later, including creator applications, product shipping, competitions and payouts. Today SQWAD's published TheHoopGang case study reports more than $500K in revenue attributed to creator videos, and the feature list grew from what brands asked for after they used that first workflow.
![SQWAD: the revenue attribution page of my own SaaS, where every Meta ad is traced to the creator and video behind it, the first workflow the product was built around.](/shots/sqwad-creator-revenue-attribution.jpg)
A staged build also spreads the cost. You pay for the Starter, learn from it, and put the next budget into the things users actually tripped over. The code carries forward, as long as the first stage is built on the stack the product will stay on. I use Next.js and TypeScript with Firebase or Postgres for this reason: the prototype and the production app are the same codebase.

The case for building everything at once is narrow. It fits when you have already sold the product, for example a signed pilot customer with a fixed list of requirements.
## What ongoing costs come after the build?
After launch you pay for hosting, a database, email sending, a domain and payment processing, and at MVP scale the total is usually small.
- Hosting: Vercel has a free tier for personal projects, and its Pro plan for commercial apps is $20 per seat per month at the time of writing
- Database: Firebase bills by usage on its pay-as-you-go plan, and Supabase Pro is $25 per month at the time of writing; both have free tiers that cover early testing
- Email: providers that send receipts and invites have free tiers at low volume and charge as you grow
- Domain: a yearly renewal
- Payments: Stripe's standard US pricing is 2.9 percent plus 30 cents per successful card charge

Two costs catch people out. The first is usage-based pricing that grows with a badly written query, such as a dashboard that reads a whole collection on every page load. Good data design keeps this flat. The second is paid tiers of third-party tools that you only discover when you hit a limit. List every service the app depends on, with its free limit and its next price step, before you launch.
## Can an AI builder or no-code tool make it cheaper?
Yes, an AI builder can get a first version on screen for very little, and it is a fair way to start if you plan for the gap at the end.

Tools like Lovable, Bolt and v0 are good at screens and basic flows. Where they struggle is the part customers never see: database security rules, payment webhooks, and builds that pass on a production host. Many of the apps people bring me are at this point, with a product that demos well and cannot safely take real users.

That is a legitimate route as long as you budget for it. My fix work is priced separately: a single bug from $60, several fixes plus a feature from $200, and taking a stuck app to a production launch from $600. For a simple product, an AI-built first version plus a Finish and Launch pass can cost less than a build from scratch. For a product with several roles or heavy custom logic, starting from clean code usually costs less than untangling generated code.
## What mistakes make an MVP cost more than it should?
The costly mistakes are almost all scope and ownership mistakes, not technical ones.
- Changing the core workflow mid-build. Small changes are normal; a new workflow is a new project.
- Designing for scale you do not have. You do not need microservices or a queue for your first 50 users.
- Building for every kind of customer. Pick one customer type and make the product fit them.
- Skipping the admin view, then paying for emergency support work.
- Letting the developer hold the accounts. The code should be in your GitHub and the app in your own cloud and Stripe accounts from day one.
- Treating launch as the finish. Keep some budget for the first month of fixes and requests, when real usage shows what the plan missed.
> Ask for a fixed scope in writing before work starts: the workflow steps, the roles, the integrations and what is explicitly left out. The exclusions list prevents more disputes than the inclusions list.
## The bottom line
A SaaS MVP costs what its first version asks for. One workflow is from $250 and about a week. A launchable product with auth, a dashboard and payments is from $1,200 and about three weeks. A multi-role platform with admin tools and integrations is from $3,000 and about 45 days. Decide which one you are building by writing down the workflow, counting the roles and integrations, and cutting whatever no customer has asked for yet. If you send me that page, I can tell you which level it is and what it would take.`,
  },
  {
    slug: 'supabase-row-level-security-ai-built-app',
    title: 'Is your Lovable or Bolt app leaking data? Check Supabase row level security',
    description: 'How to check whether your AI-built Supabase app exposes other users\' data, what row level security does, and how to fix it before launch.',
    date: '2026-11-17',
    updated: '2026-11-17',
    keywords: ['Supabase row level security', 'Lovable app security', 'Supabase RLS not working', 'AI built app data leak'],
    service: 'fix-ai-built-app',
    sources: [
      { title: 'Row Level Security', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/postgres/row-level-security' },
      { title: 'API keys', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/api/api-keys' },
      { title: 'Advisors', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/database-advisors' },
      { title: 'Storage Access Control', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/storage/security/access-control' },
    ],
    shortAnswer: 'If row level security is off on a Supabase table, anyone with your public anon key can read every row in it. Check that RLS is enabled on every table and that each policy limits rows to the signed-in user, for example with auth.uid() = user_id.',
    faqs: [
      { q: 'Is the Supabase anon key a secret?', a: 'No. It is meant to be public, which is exactly why row level security has to protect every table.' },
      { q: 'How do I know if RLS is enabled?', a: 'In the Supabase dashboard, each table shows whether RLS is enabled, and the Security Advisor flags tables without it.' },
      { q: 'Does turning on RLS break my app?', a: 'It blocks all access until you add policies, so add policies for each action your app needs, then test while signed in as different users.' },
      { q: 'What is the difference between the anon key and the service role key?', a: 'The anon key is public and obeys row level security, while the service role key bypasses every policy and must only ever be used in server code.' },
      { q: 'Are Supabase storage buckets covered by table policies?', a: 'No. Files are protected by separate policies on storage.objects, and a bucket marked public serves its files to anyone who has the URL.' },
      { q: 'How much does it cost to have a developer fix Supabase security?', a: 'Thomas Osayi fixes a single issue from $60 in about 2 days, and a full pass that takes a stuck app to a safe production launch starts from $600.' },
    ],
    takeaways: [
      'The Supabase anon key ships in your frontend on purpose, so row level security is the only thing protecting each table from strangers.',
      'Check that RLS is enabled on every table, read each policy for conditions that are simply true, and run the Security Advisor.',
      'A good policy ties rows to the signed-in user with auth.uid() and covers select, insert, update and delete separately.',
      'Test as a second user and as a logged-out visitor, because an app that only you have used will always look fine.',
      'Storage buckets, views, database functions and a leaked service role key can expose data even when table policies are correct.',
    ],
    body: `AI builders connect apps to Supabase quickly. They do not always lock the data down, and the app looks fine because you only ever test it as yourself. You sign in, you see your own records, everything works. What you never see is what a stranger can pull out of the database with nothing but the public key that ships in your page.

This is the security problem I check first on every Lovable, Bolt or Cursor app that reaches me, because it is invisible in normal use and serious once real customers are in the tables. Here is how it happens, how to check your own app, and what a correct setup looks like.
## Why do AI-built Supabase apps leak data?
They leak because the browser talks straight to the database with a public key, and the only guard on each table is a set of policies that the AI builder may not have written.

In a traditional app, the browser calls your server and your server decides what to return. A Supabase frontend skips that step. The Supabase client in your JavaScript sends queries directly to an API in front of your Postgres database, signed with the anon key. Newer projects call it the publishable key. Either way it sits in your JavaScript bundle by design, and anyone can copy it from the browser's developer tools in a few seconds.

That is safe only when row level security, usually shortened to RLS, is switched on. RLS is a Postgres feature: each table carries policies that decide, for every request, which rows may be read, inserted, changed or deleted. With RLS off, the anon key can read and write the whole table.

AI builders tend to create tables by running SQL, and a table created with SQL does not get RLS unless the statement turns it on. When a prompt hits a permission error, the fastest way for the tool to make the error go away is often a policy that allows everything. The app starts working, and the hole stays.
## How can you check your app in five minutes?
You can check it from the Supabase dashboard and a second test account, with no code.
### Look at every table
Open the Table Editor and click through each table in the public schema. A table without RLS is labelled as unrestricted. Any table holding user data, such as profiles, orders, messages or uploads, must have RLS enabled.
### Read the policies
Open Authentication, then Policies. For each table, read the condition on each policy. A condition that is just the word true lets everyone through. A select policy for the anon role on a table of private data is the same problem in different words.
### Run the Security Advisor
The dashboard has an Advisors section with a Security Advisor. It lists tables in the public schema with RLS disabled, tables with RLS enabled and no policies, and several other risks. Fix what it reports, starting with errors.
### Try to read someone else's data
Create a second account in your app. Sign in as that user and try to open the first user's records, for example by changing an ID in the URL. Then sign out and load the app's main data pages. If anything belonging to another person appears, the policies are wrong.
> Do the second-account test in a private browser window so the two sessions never mix. It takes a few minutes and catches most real leaks.
## What does a good RLS policy look like?
A good policy ties every row to its owner and checks that owner against the signed-in user, separately for each kind of action.

The usual pattern has three parts. First, the table has a user_id column that references the auth users table and defaults to auth.uid(), the ID of whoever is making the request. Second, RLS is enabled with a statement like this:

alter table public.notes enable row level security;

Third, there is one policy per action. For reading:

create policy "Users read their own notes" on public.notes for select to authenticated using ((select auth.uid()) = user_id);

For inserting, the check goes in a with check clause, which validates the new row instead of filtering existing ones:

create policy "Users add their own notes" on public.notes for insert to authenticated with check ((select auth.uid()) = user_id);

Update policies need both clauses: using decides which rows the user may touch, and with check decides what the row may look like afterwards. Without the second clause, a user can edit their own row and reassign it to someone else. Delete needs only using.

Two details matter. The policies name the authenticated role, so logged-out requests get nothing. And the user ID comes from the session, never from the request body, because the body is whatever the sender wants it to be.
## Which policy mistakes do AI builders make most often?
The mistakes I see most are permissive placeholder policies, missing actions, and trust placed in data the user controls.
- A policy with using (true) that was added to clear an error and never tightened
- A select policy done correctly, with update and delete left wide open or missing entirely
- An update policy without with check, so rows can be reassigned
- Policies that read a role from user metadata. A signed-in user can edit their own user_metadata, so a rule like "admins can see everything" based on it lets anyone promote themselves
- A profiles table where the user may update every column, including is_admin or plan
- Shared data, such as team records, handled by letting every authenticated user read the whole table

The profiles case deserves attention because it turns a small gap into a full one. If your app decides who is an admin or who has paid from a column on the user's own row, and the user can update that row, they can grant themselves anything. Keep those columns in a table users cannot write to, and change them only from server code.
## Does turning on RLS break the app?
Yes, briefly: enabling RLS with no policies blocks every request from the browser, so plan the order of work.

With RLS on and no matching policy, a select returns an empty list with no error. Pages render as if the user simply had no data. An insert fails with the message "new row violates row-level security policy". An update or delete quietly changes zero rows. Knowing these three symptoms saves a lot of confused prompting, because the empty-list case looks like a frontend bug.

The order I follow:
- List every table and what each kind of user needs to do with it
- Write the policies for one table, enable RLS on it, and test that feature as two different users
- Move to the next table
- Finish with the Security Advisor and a logged-out pass through the app

Do this on a staging project or a branch if real users are already live. If the data is already exposed in production, turn RLS on first and accept a few broken screens for an hour. A broken page is a smaller problem than an open table.
## Where else can a Supabase app leak data?
Table policies are the main gate, but storage, server keys, views and database functions each have their own.
### Storage buckets
Files are governed by policies on the storage.objects table, not by your table policies. A bucket marked public serves every file to anyone with the URL. That suits logos and product photos. It does not suit invoices, ID documents or anything a user uploaded privately. Use a private bucket and signed URLs for those.
### The service role key
This key bypasses RLS completely. It belongs only in server code: an edge function, a route handler or a backend job. In a Vite app, which is what Lovable generates, any variable starting with VITE_ is bundled into the browser. In Next.js the same is true of NEXT_PUBLIC_. If the service role key has either prefix, treat it as leaked, rotate it in the dashboard, and move the code that used it to the server.
### Views and functions
A view runs with the permissions of whoever created it unless it is defined with security_invoker set to true, so a view over a protected table can expose the whole table. Database functions marked security definer do the same, and they are callable from the browser through RPC.
### Edge functions
An edge function that uses the service role key has to check who is calling before it acts. Read the user from the request's authorization header and confirm they are allowed to do what the function does.
## How do you handle admins and team access?
Handle them with a membership or roles table that users cannot edit, and policies that look the user up in it.

For team data, add a table that links user IDs to team IDs. A policy on the shared table then allows access when a membership row exists for the signed-in user and the row's team. For admins, keep a separate roles table writable only from the server, or put the role in app_metadata, which users cannot change from the client.

The principle is the same on any backend. Guardian MindCare, a therapy practice platform I built on Firebase, has five roles: therapists, supervisors, trainees, clients and admins. Each sees only what it should, and those rules are enforced by the database's security rules, not by hiding buttons in the interface. Hiding a button stops honest users. It does nothing against someone calling the API directly.
![Guardian MindCare: a therapy practice platform I built where therapists, supervisors, trainees, clients and admins each see only their own data.](/work/fiverr/guardian.jpg)
Heavy admin actions, such as deleting a user or exporting everything, are better done in server code with the service role key after checking the caller's role, instead of through ever more complicated policies.
## How do you confirm the fix worked?
Confirm it by attacking your own app the way a stranger would: with only the URL and the public key.

Repeat the second-account test on every feature. Then test as nobody. Your project's REST endpoint is your project URL followed by /rest/v1/ and a table name. A request to it with only the anon key in the apikey header should return an empty list or an error for every private table. If it returns rows, that table is still open.

Check writes too. Signed in as user B, try to update and delete a record belonging to user A, and try to insert a record with user A's ID. All three should fail. Finally, run the Security Advisor again and search your built frontend files for the first characters of your service role key.
## When should you bring in a developer?
Bring one in when real users' data is involved and you cannot say with confidence what each policy allows.

Security is the one area where I would not keep prompting and hoping. An AI tool will happily report that the policies are fixed, and you have no way to verify that without reading SQL. A developer can read the policies directly, test them as different users, and fix most apps in a few hours.

For scale: a single issue, such as one open table or a leaked key, fits my Quick Fix package from $60 in about 2 days. A wider pass over policies plus a feature or integration fits Fix Plus Features from $200. Taking an app that is stuck before launch through security, payments and a production deploy is Finish and Launch from $600. You get a short write-up of what was wrong and what changed, so you understand your own app afterwards.
## The bottom line
Your Supabase anon key is public, so your policies are your security. Enable RLS on every table, write a policy for each action that checks auth.uid() against the row's owner, keep the service role key on the server, and lock down storage, views and functions as well. Then test as a second user and as a logged-out stranger before you invite anyone in. If any of those tests shows data it should not, fix that before you launch, not after.`,
  },
  {
    slug: 'stripe-webhook-not-working',
    title: 'Stripe payment went through but your app did not update? Fix the webhook',
    description: 'The common reasons Stripe webhooks fail in Next.js and AI-built apps, and how to make paid plans activate reliably.',
    date: '2026-11-17',
    updated: '2026-11-17',
    keywords: ['Stripe webhook not working', 'Stripe payment not updating app', 'Stripe webhook Next.js', 'Stripe signature verification failed'],
    service: 'fix-ai-built-app',
    sources: [
      { title: 'Receive Stripe events in your webhook endpoint', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/webhooks' },
      { title: 'Using webhooks with subscriptions', publisher: 'Stripe Docs', url: 'https://docs.stripe.com/billing/subscriptions/webhooks' },
      { title: 'Environment variables', publisher: 'Vercel', url: 'https://vercel.com/docs/projects/environment-variables' },
    ],
    shortAnswer: 'When Stripe charges the card but the app never unlocks the plan, the webhook is the problem: it is missing in production, points at the wrong URL, uses the test-mode signing secret, or fails signature verification because the body was parsed before checking it.',
    faqs: [
      { q: 'Why does my Stripe webhook work locally but not in production?', a: 'Locally the Stripe CLI forwards events with its own signing secret; production needs a separate endpoint in the Stripe dashboard and its own secret in your host settings.' },
      { q: 'What does "No signatures found matching the expected signature" mean?', a: 'The webhook secret is wrong, or the request body was changed before verification; Stripe needs the raw body.' },
      { q: 'Should I unlock the plan on the success page instead?', a: 'No. The success page can be skipped or closed; the webhook is the reliable record that payment happened.' },
      { q: 'Which Stripe events should a subscription app listen for?', a: 'At minimum checkout.session.completed, invoice.paid, invoice.payment_failed, customer.subscription.updated and customer.subscription.deleted.' },
      { q: 'Does Stripe retry a failed webhook?', a: 'Yes. In live mode Stripe retries failed deliveries for up to three days with growing gaps between attempts, and you can resend any event by hand from the dashboard.' },
      { q: 'How much does it cost to have a developer fix a Stripe webhook?', a: 'Thomas Osayi fixes a single broken webhook from $60 in about 2 days, with a write-up of what was wrong and what changed.' },
    ],
    takeaways: [
      'If Stripe shows the payment and your app shows the free plan, the webhook between them is missing or failing.',
      'The delivery log on the webhook endpoint in the Stripe dashboard shows the status code your server returned, which points to the cause.',
      'Signature verification needs the raw request body and the signing secret that belongs to that exact endpoint and mode.',
      'Store your user ID on the checkout session so the handler can tell which account paid.',
      'A reliable handler answers quickly, ignores duplicate events and covers renewals, failed payments and cancellations as well as the first purchase.',
    ],
    body: `This is one of the most common problems in apps people bring me. Checkout opens, the card is charged, Stripe shows the payment, and the user is still on the free plan. The customer has paid for something they did not get, and you find out when they email you.

The good news is that this failure has a short list of causes, and Stripe records enough detail to tell you which one you have. Work through the sections below in order and you will usually find it in under an hour.
## How is a Stripe payment supposed to update your app?
Stripe tells your server about the payment by sending an event to a webhook endpoint, and your code updates the database when that event arrives.

The full sequence has four steps. Your app creates a Checkout Session and sends the customer to Stripe's hosted payment page. The customer pays. Stripe redirects them to your success URL. Separately, Stripe's servers send an HTTP POST to a URL on your server, the webhook endpoint, containing an event such as checkout.session.completed.

Your webhook handler then does three things: it verifies that the request really came from Stripe, works out which user the payment belongs to, and writes the new plan to your database.

The redirect and the webhook are independent. The redirect happens in the customer's browser and can fail if they close the tab or lose signal. The webhook travels from Stripe's servers to yours and does not depend on the browser at all. That is why the webhook is the one you trust. When the card is charged and nothing changes in the app, the redirect worked and the webhook did not.
## What are the usual reasons the webhook fails?
There are six common causes, and the first three are configuration, not code.
- No webhook endpoint was ever created in the Stripe dashboard for production. It worked on your laptop because the Stripe CLI was forwarding events.
- The endpoint URL points at localhost, an old preview deployment, or a domain that redirects.
- The production server uses the test-mode signing secret, or the other way around.
- The route parses the JSON body before verification, so the signature check fails.
- The handler listens for the wrong event type, or the endpoint is not subscribed to the event the code expects.
- The code cannot match the event to a user because no customer or user ID was stored at checkout.

AI-built apps hit the first and third most often. The builder writes a correct handler and the app passes a local test, but nobody registers the production URL in Stripe or copies the new secret into the host's environment variables. The code is fine and the wiring was never done.

I run Stripe billing in SQWAD, my own SaaS, so this is a flow I maintain as well as one I debug for other people.
![SQWAD: the pricing tiers of my own SaaS, Starter, Pro and Scale, which are billed through Stripe.](/shots/sqwad-home-s4.jpg)
## How do you find the failure in the Stripe dashboard?
Open the webhook endpoint in the Stripe dashboard and read its recent deliveries; each failed attempt shows the HTTP status your server returned.

Webhooks live in the Developers area of the dashboard. Make sure you are looking at the right mode, live or test, because each has its own endpoints. If no endpoint is listed for your production domain, that is your answer: create one, subscribe it to the events you handle, and copy its signing secret.

If the endpoint exists, the status code on the failed deliveries narrows it down:
- 400 with a signature message: wrong signing secret, or the body was modified before verification
- 401 or 403: something in front of your route is blocking Stripe, usually auth middleware or deployment protection on a preview URL
- 404: the URL path does not match the route file
- 307 or 308: the URL redirects, for example from the bare domain to www. Stripe does not follow redirects, so register the final URL
- 500: your handler crashed; check your host's function logs for the stack trace
- Timed out: the handler takes too long before responding

If deliveries show 200 and the plan still does not change, the request is reaching your code and your code is deciding to do nothing. That points to the event type or the user lookup, covered below.
> After each fix, use the resend button on a failed event in the dashboard. You get a real event against your real endpoint without making another payment.
## How do you verify the signature correctly in Next.js?
Read the request body as raw text, take the stripe-signature header, and pass both to Stripe's constructEvent function with the endpoint's signing secret.

Stripe signs the exact bytes it sends. If your code parses the body into JSON and turns it back into a string, the bytes change and the check fails with "No signatures found matching the expected signature for payload".
### App Router
In a route handler such as app/api/webhooks/stripe/route.ts, do not call request.json(). Use these three lines instead:

const body = await request.text();

const signature = request.headers.get('stripe-signature');

const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);

Wrap the last line in a try and catch, and return a 400 if it throws.
### Pages Router
In pages/api, Next.js parses the body automatically. Turn that off for the webhook file by exporting a config object with api.bodyParser set to false, then read the raw buffer from the request stream.
### The secret itself
The signing secret starts with whsec_ and is unique to each endpoint. The secret printed by the Stripe CLI during local testing is different from the one on your production endpoint, and test mode and live mode endpoints have different secrets again. Copy the right one into your host's environment variables, then redeploy. On Vercel, a changed environment variable only takes effect on the next deployment.

Also check that no middleware rewrites or protects the webhook path. An auth middleware that redirects logged-out visitors will redirect Stripe too.
## How does the handler know which user paid?
It knows because you attach your own user ID to the Checkout Session when you create it, and read it back from the event.

Stripe has no idea who your users are. When you create the session, set client_reference_id to your user's ID, or put it in the metadata object. When checkout.session.completed arrives, the session in the event carries those values, along with the Stripe customer ID and, for subscriptions, the subscription ID.

Save all three on the user's record at that moment: plan, Stripe customer ID and subscription ID. Later events such as invoice.paid or customer.subscription.deleted do not include your client reference, so you find the user by the stored customer ID instead.

Three mistakes show up here. Matching by email fails when the customer types a different email at checkout than the one on their account. Session metadata is not copied onto the subscription unless you also set it under subscription_data. And creating a new Stripe customer for every checkout leaves you with several customer IDs for one user, so cancellations update the wrong record. Create the customer once and reuse it.
## Which events should a subscription app handle?
Handle the first purchase, each renewal, failed payments, plan changes and cancellations, which is five events for most apps.
- checkout.session.completed: the first purchase; link the Stripe customer to your user and turn the plan on
- invoice.paid: a renewal went through; extend access
- invoice.payment_failed: a renewal failed; warn the user and decide when access stops
- customer.subscription.updated: the plan, quantity or cancellation setting changed
- customer.subscription.deleted: the subscription ended; move the user back to the free plan

Apps that only handle the first event look fine at launch and go wrong a month later, when a card fails or a customer cancels and keeps full access. The endpoint in the dashboard must be subscribed to each event your code handles. Selecting only the events you use also keeps noise out of the logs.

For one-time payments, checkout.session.completed is usually enough. If you accept delayed payment methods such as bank debits, check that payment_status is paid before granting access, and also handle checkout.session.async_payment_succeeded.
## How do you test the whole flow before going live?
Test locally with the Stripe CLI, then test the deployed app in test mode with a test card, and only then switch keys.

Locally, run stripe listen with --forward-to pointed at your route, for example localhost:3000/api/webhooks/stripe. The CLI prints a signing secret for that session; put it in your local environment file. Then go through checkout in the browser with the test card 4242 4242 4242 4242, any future expiry date and any CVC. You can also fire events directly with stripe trigger checkout.session.completed, though triggered events carry sample data and will not match a real user.

On the deployed app, create a test-mode endpoint for your production URL and repeat the purchase. Then test the paths people skip:
- Close the tab on the payment page right after paying, before the redirect
- Cancel the subscription from the dashboard and confirm the app downgrades
- Pay twice with the same account and confirm you do not create two customers

When all of that passes, create the live-mode endpoint, copy its secret, switch the API keys to live, redeploy, and make one small real purchase yourself.
## How do you make the webhook reliable over time?
Return a 200 quickly, make the handler safe to run twice, and log every event you could not process.

Stripe expects a successful response within a few seconds. If your handler sends emails or does other slow work before responding, the delivery can time out and count as failed even though your code ran. Do the database write, respond, and push slow work to a background job.

Stripe can deliver the same event more than once, and events can arrive out of order. Store each processed event ID and skip any you have seen. Write updates as "set the plan to pro", not "add one month", so a repeat changes nothing. When order matters, fetch the current subscription from Stripe's API instead of trusting the event's snapshot.

In live mode Stripe retries failed deliveries for up to three days, with longer gaps each time. A short outage on your side fixes itself, but an endpoint that fails for long enough gets disabled, and Stripe emails the account owner. Make sure that email address is one you read.
> Log the event ID and type at the top of the handler, before any other logic. When a customer says they paid, you can search your logs and Stripe's by the same ID.
## Should the success page unlock anything?
No. The success page should confirm the purchase to the customer and wait for the webhook to change the account.

It is tempting to mark the user as paid when they land on the success URL. Anyone can open that URL without paying, and real customers sometimes never reach it. A safe success page thanks the customer and shows their current plan from your database. If the webhook has not landed yet, show a short "activating your plan" state and re-check every couple of seconds.

If you want the page to react instantly, it can pass the session ID to your server, and the server can retrieve that session from Stripe and check its payment status. That is a secure addition. It does not replace the webhook, because renewals, failures and cancellations never pass through a success page.
## When is it worth getting help?
Get help when customers are paying and not receiving what they bought, or when you have spent more than an afternoon on it.

A webhook fault is usually one specific thing, so it fits my Quick Fix package: from $60, about 2 days, with a write-up of what was wrong and what changed. If the billing code needs more, such as subscription handling, a customer portal or cleanup of duplicated customers, that is Fix Plus Features from $200. I need access to the repo, the host and the Stripe account, and I fix it in place instead of rewriting what works.
## The bottom line
When the payment succeeds and the app does not update, look at the webhook. Read the delivery log in the Stripe dashboard, match the status code to the cause, and fix the endpoint URL, the signing secret, the raw body handling or the user lookup. Then handle renewals and cancellations, make the handler safe against duplicates, and test the full flow in test mode before real cards touch it.`,
  },
  {
    slug: 'what-to-send-a-web-developer-before-starting',
    title: 'What to send a web developer before your project starts',
    description: 'A checklist of the content, access and decisions a developer needs from you, so your website launches on time and on budget.',
    date: '2026-11-17',
    updated: '2026-11-17',
    keywords: ['website project checklist', 'what to give web developer', 'website brief template', 'website content checklist'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'Adding & Configuring a Custom Domain', publisher: 'Vercel', url: 'https://vercel.com/docs/domains/add-a-domain' },
      { title: 'Get started with Google Business Profile', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038169' },
    ],
    shortAnswer: 'Before a website project starts, send your developer the goal of the site, a page list, your logo and brand colors, photos, written copy or notes for each page, two or three sites you like, and access to your domain registrar. Having these ready can cut weeks off the timeline.',
    faqs: [
      { q: 'Do I need to write all the website text myself?', a: 'Not always; rough notes per page are enough for a developer or copywriter to shape, but the facts about your business have to come from you.' },
      { q: 'Why does a developer need my domain login?', a: 'To point the domain at the new site at launch; you can also make the DNS change yourself with their instructions.' },
      { q: 'What if I do not have photos?', a: 'Use a clean typographic design or carefully chosen stock photos at launch, then replace them with real photos later.' },
      { q: 'What file format should my logo be in?', a: 'An SVG is best because it stays sharp at any size; a large PNG with a transparent background is the next best option.' },
      { q: 'How should I send files to a web developer?', a: 'Put everything in one shared folder with a sub-folder per page, and share logins through a password manager or delegated access instead of email.' },
      { q: 'How long does a small business website take once the content is ready?', a: 'With content in hand, Thomas Osayi delivers a one-page site in about 7 days, a five-page business site in about 14 days and a full custom build in about 21 days.' },
    ],
    takeaways: [
      'Most website delays come from missing content and slow approvals, not from the build itself.',
      'Start with one sentence that says what a visitor should do, because every page decision follows from it.',
      'Rough notes with real facts about your business are more useful than polished generic text.',
      'Send your logo as an SVG or large PNG, original full-size photos, and two or three sites you like with a reason for each.',
      'Give access through delegated accounts you own, and name one person who gives final approval.',
    ],
    body: `Most website delays happen before any code is written. A developer can build a five-page site in two weeks, but only if the logo, the words and the photos exist on day one. When they arrive in pieces over a month, the project takes a month plus two weeks, and it costs more attention from everyone.

This is what I ask every client for before I start, roughly in order of importance. You do not need all of it to be perfect. You do need to know which pieces are ready, which are rough, and which do not exist yet, so we can plan around the gaps instead of discovering them halfway through.
## Why does preparation change the timeline so much?
Because the build is the predictable part of a website project and the content is the unpredictable part.

My package timelines are about 7 days for a one-page site, 14 days for a business site of up to five pages, and 21 days for a full custom build. Those numbers assume I am not waiting on anything. Every missing item turns into a placeholder, and every placeholder turns into a second pass later: the layout was designed around three short service descriptions, the real ones arrive at four times the length, and the section has to be redone.

Preparation also improves the result. A design built around your actual photos and your actual wording fits the business. A design built around stock images and sample text has to be bent to fit afterwards, and it usually shows.

Preparation does not mean writing a long formal brief. A single shared folder and a one-page document cover almost everything in this article.
## What is the first thing your developer needs to know?
The goal of the site, in one sentence: what should a visitor do?

Book a call. Request a quote. Reserve a table. Order pickup. Buy a product. Pick one primary action. Every page decision follows from it: what the main button says, what goes at the top of the home page, which pages exist at all, and what gets measured after launch.

It helps to add two more lines:
- Who the visitor is, in plain terms, such as "homeowners in the South Bay who need a repair this week"
- What they need to believe before they act, such as "this company is licensed, nearby and answers quickly"

If you have two goals, rank them. A restaurant may want both reservations and pickup orders, and that is fine, but one of them gets the first button. A site that asks visitors to do five things equally usually gets none of them done.
## Which pages do you need, and what goes on each?
Most small businesses need four or five pages: home, services, about, contact, and sometimes pricing or a gallery.

Write the list, and under each page write one line on what it must say or do. That line is more useful than a detailed outline. For example:
- Home: what we do, who for, proof, and the main button
- Services: each service with a short description and a starting price
- About: who runs the business and why customers trust them
- Contact: phone, address, hours, a form and a map

Then note any feature that needs logic: a booking form, a quote request with specific fields, online ordering, a gallery you update yourself. Features affect price and time more than page count does, so they need to be on the list from the start.

Think about the form fields as well. Artistic Printing, a commercial printer I built a site and quote tool for, needed every quote request to arrive with the specs the shop requires, and that only works when the fields are decided before the form is built. Knowing what you need to be told by a customer is part of the page list.
![Artistic Printing: the quote call to action and footer I built for a commercial printer, where each request starts the shop's quote intake.](/shots/artistic-home-s4.jpg)
## What brand assets should you send?
Send your logo in the best format you have, your brand colors if they exist, and the names of any fonts you already use.
### Logo
An SVG is ideal, because it stays sharp at every size. If you do not have one, ask whoever designed the logo for the original vector file, which may be an AI, EPS or PDF file. Failing that, send the largest PNG you have with a transparent background. A logo cropped from a screenshot or a business card photo will look soft on a large screen. If you have light and dark versions, send both.
### Colors and fonts
Exact color codes help, such as a hex value like #1A3C6E. If you only know "the blue on our van", send a photo and I will match it. Name any fonts used on your signage or print materials so the site feels like the same business.
### If you have no brand yet
Say so. That is common for new businesses and it is fine. Tell me three words you want people to feel, such as calm, premium, friendly, and point to a couple of sites whose look you like. A simple, consistent color and type system can be set as part of the build.
## How much of the text do you have to write?
You have to supply the facts; the wording can be shaped later.

Nobody else knows these, so they have to come from you:
- Each service or product, with what is included
- Prices, or starting prices, if you publish them
- Hours, address, phone, email and service area
- How the process works for a customer, step by step
- What makes you different, in specifics: years in business, licenses, guarantees, turnaround time
- The questions customers ask most on the phone, with your answers
- A short story of the business and the people in it

Rough notes are fine. Bullet points, a voice memo, or a long email written the way you would explain it to a customer all work. Real details beat polished generic text every time. "Family owned since 2009, same-day estimates, we clean up before we leave" does more than a paragraph about commitment to excellence.

Two warnings. Do not copy text from a competitor's site; it is theirs, and search engines can tell. And if a tool drafts text for you, check every fact in it, because it will state things about your business with confidence that are not true.
> Record yourself answering "what do you do and why should I pick you?" as if a customer asked. A two-minute voice memo is often the best copy brief a developer gets.
## What photos work, and how should you send them?
Send your best real photos of the work, the space, the team or the product, as original full-size files.

Real photos are the fastest way to make a small business site feel trustworthy. Phone photos taken in good daylight are often enough. A few practical points:
- Send originals. Photos saved from Instagram or sent through a messaging app are compressed and blur when enlarged.
- Include some wide, horizontal shots. The top of a page usually needs a landscape image with room for text.
- Show people working where you can, with their permission.
- Before and after pairs are valuable for any trade or service.
- Label the files or folders, so I know which photo is which dish, job or team member.

For a restaurant, the photos carry the site. New York Nook, a restaurant site I built with online reservations and pickup ordering, has a full menu with photography, and the food images do most of the persuading.
![New York Nook: the signature dishes carousel on a restaurant site I built, where the food photography does the selling.](/shots/newyorknook-home-s1.jpg)
If you have no usable photos, do not hold the project for a shoot. Launch with a clean typographic design or carefully chosen stock images, and swap in real photos when you have them. Make sure you have the right to use anything you send: photos taken by a professional photographer may need their permission for web use.
## Why send websites you like?
Because two or three examples with a reason for each tell a developer more about your taste than any description.

"Modern and clean" means something different to everyone. A link plus one sentence is precise: "I like how this one shows prices up front", "I like the big photos here", "I like that the booking button follows you down the page". The sites do not need to be in your industry. A dentist can like a hotel's website.

Sites you dislike are useful too, especially competitors'. "Everyone in my trade has the same dark blue template and I do not want that" is a clear instruction.

Be specific about what you are pointing at: layout, colors, tone of the writing, or a particular feature. I am taking direction from the examples, not copying them. Your site still gets designed around your content and your goal.
## What access will the developer need?
Access to your domain, your Google Business Profile, and any tool the site connects to, all through accounts that you own.
- Domain registrar: the company where you bought the domain, such as GoDaddy, Namecheap or Squarespace Domains. Launch requires changing DNS records there. You can add me as a delegate, or make the change yourself with instructions I send.
- Email on your domain: tell me if you have it. DNS changes must leave your mail records alone, and I need to know they exist.
- Google Business Profile: manager access, so the website link and details match.
- Connected tools: booking, payments, email marketing, analytics. Invite me as a team member where the tool allows it.
- The current site, if there is one: a login or an export, so nothing useful is lost and old page addresses can be redirected.

Do not send passwords by email or text. Use delegate or team access, or share through a password manager, and remove my access when the project ends.

If you do not know where your domain is registered, find out early. A domain bought years ago by a former employee or a previous web designer is a common launch blocker, and recovering it can take longer than building the site.
## What does a complete brief look like?
A complete brief is one page of answers plus a folder of files.

Here is a made-up example for a mobile detailing business:
- Goal: get visitors to request a booking
- Visitor: car owners in Long Beach who want detailing at home
- Pages: home, services with prices, gallery, about, contact with booking form
- Feature: booking request form asking for vehicle type, service, address and preferred day
- Brand: logo as SVG attached, black and orange, no set fonts
- Copy: notes for each page in the shared document, plus eight common questions with answers
- Photos: 30 originals in the folder, sorted into before and after, team, and van
- Sites I like: two links, with a line on each
- Access: domain is at Namecheap, delegate invite sent; no business email yet; Google profile manager invite sent
- Approval: the owner signs off, and feedback comes in one message per round

That fits on a page, and with it a five-page site can start the same day and hold a 14-day timeline.
## How should feedback and approvals work?
Name one person who gives final approval, and send feedback as one combined message per round.

When three people send separate comments, some of them conflict, and the developer has to guess who wins. Collect opinions inside your business first, settle the disagreements, then send one list.

Useful feedback names the page and section, says what is wrong, and says what you want instead: "On the services page, the second service is missing its price, add from $80." Screenshots with a note work well. "Make it pop" does not give me anything to act on, so describe the problem you see instead: too plain, too crowded, hard to read.

Agree on turnaround times too. If I send a draft on Monday and comments come back the following week, the timeline moves by that week. A day or two for each round keeps a two-week project at two weeks.
## The bottom line
Send the goal, the page list, your logo and colors, the facts for each page, original photos, a few sites you like and the right access, and name one person to approve the work. None of it has to be polished. It has to be real and it has to arrive at the start. That is what lets a website launch on the timeline and at the price you were quoted.`,
  },
  {
    slug: 'local-seo-checklist-for-small-business-websites',
    title: 'Local SEO checklist for a small business website',
    description: 'The on-site and off-site steps that help a local business show up in Google Maps and local search, in order of impact.',
    date: '2026-11-17',
    updated: '2026-11-17',
    keywords: ['local SEO checklist', 'small business local SEO', 'rank in Google Maps', 'local SEO website'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'Tips to improve your local ranking on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/7091' },
      { title: 'Prohibited & restricted content', publisher: 'Maps User Generated Content Policy Help', url: 'https://support.google.com/contributionpolicy/answer/7400114?hl=en' },
      { title: 'Local Business (LocalBusiness) Structured Data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business' },
      { title: 'Spam policies for Google web search', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/essentials/spam-policies' },
    ],
    shortAnswer: 'For local search, the highest-impact steps are a complete and verified Google Business Profile, steady real reviews, the same name, address and phone number everywhere, a fast website with a clear page per service and area, and LocalBusiness schema on the site.',
    faqs: [
      { q: 'What matters most for ranking in Google Maps?', a: 'Google says local results are based mainly on relevance, distance and prominence, so a complete profile, real reviews and a strong website all count.' },
      { q: 'Should I make a page for every city?', a: 'Only for areas you really serve and can write something specific about; near-duplicate city pages can hurt more than help.' },
      { q: 'How long does local SEO take?', a: 'Profile and site fixes can show results within weeks, while reviews and mentions build over months.' },
      { q: 'What is LocalBusiness schema?', a: 'It is structured data in a page\'s code that states your business name, address, phone, hours and type in a format search engines read directly.' },
      { q: 'Can I offer a discount in exchange for a Google review?', a: 'No. Google\'s review policies prohibit offering incentives for reviews, and reviews gained that way can be removed.' },
      { q: 'Do I need a website if I already have a Google Business Profile?', a: 'A profile can rank on its own, but a website gives Google more evidence of what you do and where, and gives customers the detail they need to choose you.' },
    ],
    takeaways: [
      'Google says local results are based mainly on relevance, distance and prominence, and you can improve two of the three.',
      'A complete, verified Google Business Profile with the right primary category is the highest-impact single step.',
      'Ask every happy customer for a review with a direct link, reply to all of them, and never offer incentives.',
      'Your name, address and phone number should match exactly on the site, the profile and every directory.',
      'The website needs one clear page per main service, contact details on every page, LocalBusiness schema and fast loading on phones.',
    ],
    body: `Local SEO has two halves: your Google Business Profile and your website. Both matter, and the profile usually matters more for Maps. The work is not mysterious, and most of it is free. It is a list of specific things to get right, and the businesses that show up near the top have usually done the whole list.

I build local SEO setup into business sites, so this is the checklist I work from, in order of impact. Start at the top and stop when you run out of time; the early items do the most.
## How does Google decide which local businesses to show?
Google says local results are based mainly on three factors: relevance, distance and prominence.

Relevance is how well your business matches what the person searched for. Google judges it from your profile's categories and services and from the content of your website. Distance is how far you are from the searcher, or from the place named in the search. Prominence is how well known the business is, which Google estimates from reviews, links, mentions across the web and your position in normal search results.

You cannot change distance. A plumber in Torrance will not outrank a plumber in Pasadena for someone standing in Pasadena, and no trick fixes that. So the work is about the other two: making it obvious what you do and where, and building real evidence that customers choose you.

Local results also appear in two places. The map pack is the block of three businesses with a map, and it draws mostly on Business Profiles. The regular results underneath draw on websites. A business with both a strong profile and a strong site can appear twice on the same page.
## How do you set up a Google Business Profile properly?
Claim it, verify it, and fill in every field accurately, starting with the primary category.
### Choose the most specific category
The primary category has more influence on which searches you appear for than any other field. Pick the most specific one that is true. "Waxing hair removal service" beats "Beauty salon" for a waxing studio. Add secondary categories only for things you really offer.
### Complete every section
- Business name exactly as it appears on your sign. Adding keywords or city names to the name breaks Google's guidelines and can get the profile suspended.
- Address, or a service area if customers do not come to you. Home-based service businesses should hide the address and list the areas they cover.
- Hours, including holiday hours. Wrong hours lead to bad reviews.
- Services, each with a short description, and products if you sell them
- Phone number and website link
- A booking or appointment link if you take bookings online
### Add real photos and stay active
Upload photos of the storefront, the interior, the team and the work, and add new ones regularly. Post an update now and then, and reply to messages if you turn messaging on. An active profile tells customers the business is open and paying attention.

Verification is often done by a short video showing your location and proof you run the business. Have signage, tools or paperwork ready before you start.
## How do you get more reviews without breaking the rules?
Ask every happy customer, make it one tap, and reply to every review you get.

Most satisfied customers will leave a review if asked at the right moment and never think of it otherwise. The right moment is just after the job is done well, while they are still pleased.
- Get your review link from the profile, under the option to ask for reviews, and save it
- Send it by text or email the same day, with a short personal note
- Print it as a QR code for the counter, the invoice or a card left behind
- Ask in person first, then send the link; the request works better when it is expected

Reply to every review. Thank people for good ones in a sentence or two. For bad ones, stay calm, acknowledge the problem, and offer to fix it offline. Future customers read your replies more closely than the complaint.

Know the rules. Google's policies prohibit paying for reviews or offering discounts or gifts for them, and they also prohibit selectively asking only customers you expect to be positive. Do not review your own business or have staff do it. Reviews that break the policies can be removed, and the profile can be restricted.
> A steady flow matters more than a burst. Two or three new reviews a month, every month, looks healthier than forty in one week and none afterwards.
## Why do your name, address and phone number need to match everywhere?
Because search engines combine information about your business from many sources, and mismatches make them less sure it is all the same business.

The three details are often shortened to NAP. They should be identical on:
- Your website, in the footer and on the contact page
- Your Google Business Profile
- Apple Business Connect, which feeds Apple Maps
- Bing Places
- Yelp and Facebook
- Industry directories, such as those for contractors, health providers or restaurants
- Your local chamber of commerce listing

Small differences such as "Suite 200" against "#200" rarely matter. Real differences do: an old phone number, a previous address, or a former business name still live on a directory. Search your business name and phone number, list every place you appear, and correct the wrong ones. If you moved or rebranded, this cleanup is worth an afternoon.

Use one main phone number everywhere. If you use call tracking numbers for ads, keep them out of your profile and directory listings.
## What does the website itself need?
The site needs a clear page for each main service, your contact details on every page, and fast loading on a phone.
### One page per main service
A single "Services" page listing ten things gives Google one weak signal for each. A page per main service, each with its own heading, description, photos, price guidance and common questions, gives it a strong signal for each. Name the city or area naturally in the page title, the main heading and the text, the way you would say it to a customer.

Astiglow, a waxing studio site I built, lays out its services and packages with prices and takes bookings online, which gives both visitors and search engines a clear picture of what the studio offers.
![Astiglow: the services menu I built for a waxing studio, with prices and durations for each service.](/shots/astiglow-services.jpg)
### Contact details on every page
Put the name, address, phone and hours in the footer of every page, as real text, not inside an image. Make the phone number a tap-to-call link. Add an embedded map on the contact page.
### Speed and mobile layout
Most local searches happen on phones, often by someone who wants to call or get directions right now. The page should load quickly on a mobile connection, the main button should be visible without scrolling, and nothing should require pinching to read. Compress images; oversized photos are the most common cause of slow small business sites.
### Titles and descriptions
Each page needs its own title tag, ideally the service, then the area, then the business name, and a meta description that says what the visitor gets. These are what people see in search results before they ever see your site.
## What is LocalBusiness schema, and what goes in it?
LocalBusiness schema is structured data in the page's code that states your business details in a format search engines read without guessing.

It is written as a block of JSON-LD in the page's head, invisible to visitors. Use the most specific type that fits, since schema.org has subtypes such as Restaurant, Dentist, Plumber and BeautySalon. The fields worth filling in:
- name, url and telephone
- address, split into street, city, region and postal code
- geo, with latitude and longitude
- openingHoursSpecification for each day
- image and priceRange
- areaServed for service-area businesses
- sameAs, listing your profiles on other platforms

Every value must match what is visible on the page and on your Business Profile. Schema that disagrees with the page is worse than none. After adding it, paste the page URL into Google's Rich Results Test to confirm it parses without errors.

Schema does not push you up the rankings by itself. It removes ambiguity about who and where you are, and it helps search engines and AI tools quote your details correctly.
## Should you build a page for every city you serve?
Only for areas you really serve and can write something specific about.

Twenty pages that differ only in the city name are doorway pages. Google's spam policies name the practice, and such pages tend to be ignored or to pull the rest of the site down with them. One good area page is worth more than twenty copies.

A useful area page has content that could only be about that place: jobs you have done there with photos, the neighborhoods you cover, travel or parking details, local requirements such as permits, and reviews from customers in that area. If you cannot write three true, specific paragraphs about serving a city, name it in a service area list instead of giving it a page.

For a business serving a region from one location, it is often enough to state the area plainly. The Pacific Harbor Medical Group site I built presents physician-led executive physicals in Torrance and the South Bay, which tells a searcher in two place names whether the practice is near them.
![Pacific Harbor Medical Group: the home page I built for physician-led executive physicals in Torrance and the South Bay.](/shots/phmg-home.jpg)
## What content earns local trust and long-tail searches?
Content drawn from real jobs and real customer questions: photos of work, short case studies, and answers to what people ask on the phone.

Customers search in full questions. "How much does it cost to", "how long does it take to", "do I need a permit for". Each question you answer clearly on your site is a search you can appear for, and usually one with little competition because the big directories do not answer it.

Good sources of material:
- The ten questions you answer most on the phone, each with a direct answer
- Before and after photos with a few lines on what was done and where
- Price guidance, even as ranges, since most competitors hide it
- A plain explanation of your process from first call to finished job

Write these in your own words with specifics. This content also gives AI search tools something concrete to quote, and those tools favor pages that answer a question in a sentence or two near the top.
## How do local mentions and links help?
They build prominence, the third ranking factor, by showing that other local organizations know your business.

A link from a local source carries more weight for local search than a link from an unrelated site far away. Realistic places to earn them:
- Your chamber of commerce or business association
- Suppliers and manufacturers that list local dealers or installers
- Partner businesses you refer work to, and who refer to you
- Local news sites and neighborhood blogs, when you do something worth covering
- Schools, teams and charities you sponsor
- Trade and licensing bodies with member directories

Skip paid link packages and bulk directory submissions. The links are low quality, and search engines discount them.
## How do you know whether it is working?
Track calls, direction requests and website clicks from your profile, and search queries in Google Search Console.

The Business Profile has a performance view showing how many people found the profile, which searches triggered it, and how many called, asked for directions or clicked through. Search Console is free; once your site is verified it shows the queries you appear for, your average position and your clicks. Check both monthly, not daily.

Expect two speeds. Fixes to the profile and the site, such as the right category, complete details, service pages and schema, can show within weeks. Reviews, mentions and content build over months.
> Ask every new customer how they found you and write it down. That list tells you more about what is working than any ranking report.
## The bottom line
Local search rewards businesses that are complete, consistent and well reviewed. Verify and fill in your Google Business Profile, ask for reviews every week, make your details match everywhere, and give your website a clear page per service with contact details, schema and fast mobile loading. Then keep adding real photos, answers and local mentions. None of it is a one-time trick, and most of it is free except for your time.`,
  },
  {
    slug: 'website-maintenance-cost-small-business',
    title: 'What does website maintenance cost, and what does it include?',
    description: 'The real ongoing costs of a small business website: domain, hosting, updates, fixes and content changes, and how to keep them low.',
    date: '2026-11-17',
    updated: '2026-11-17',
    keywords: ['website maintenance cost', 'small business website monthly cost', 'website hosting cost', 'website upkeep'],
    service: 'nextjs-website-development',
    sources: [
      { title: 'Vercel Pricing: Hobby, Pro, and Enterprise plans', publisher: 'Vercel', url: 'https://vercel.com/pricing' },
      { title: 'Terms of Service', publisher: 'Vercel', url: 'https://vercel.com/legal/terms' },
      { title: 'Next.js Support Policy', publisher: 'Next.js', url: 'https://nextjs.org/support-policy' },
      { title: 'Updating WordPress', publisher: 'WordPress.org Documentation', url: 'https://wordpress.org/documentation/article/updating-wordpress/' },
    ],
    shortAnswer: 'A small business website\'s ongoing costs are a yearly domain renewal, hosting, any paid tools it connects to, and developer time for changes. Sites without plugins, such as a custom Next.js site, need far less maintenance than a plugin-heavy WordPress site.',
    faqs: [
      { q: 'Do I need a monthly maintenance plan?', a: 'Not always; a static or framework site with no plugins can go months without changes, so paying per change is often cheaper.' },
      { q: 'What happens if a website is never maintained?', a: 'Plugin-based sites become a security risk as updates pile up, and any site slowly drifts out of date in content and prices.' },
      { q: 'Can I make small text changes myself?', a: 'Yes, if the site includes a simple CMS or admin page for the content you change most often.' },
      { q: 'How much does a domain name cost per year?', a: 'A standard .com domain typically renews for roughly $10 to $20 a year at mainstream registrars, with some other endings costing more.' },
      { q: 'Does a custom Next.js site need any maintenance at all?', a: 'Yes, but little: an occasional framework and dependency update, a check that forms and connected tools still work, and content changes.' },
      { q: 'Who should own the domain and hosting accounts?', a: 'The business owner should, with the developer added as a team member, so you can change developers without losing your site or domain.' },
    ],
    takeaways: [
      'Ongoing website costs are a domain renewal, hosting, business email, paid connected tools and developer time for changes.',
      'How a site is built affects maintenance cost far more than how many pages it has.',
      'Plugin-based WordPress sites need regular updates to stay secure, while a custom Next.js site has no plugins to patch.',
      'Most small businesses need only a handful of changes a year, so paying per change usually beats a monthly retainer.',
      'Keep every account in your own name and put the content you change most in a simple editor.',
    ],
    body: `Maintenance costs depend far more on how a site is built than on how big it is. Two five-page sites for similar businesses can differ by hundreds of dollars a year in upkeep, purely because one runs on a stack of plugins that need constant updating and the other does not.

When people ask what a website costs, they usually mean the build. The better question is what it costs to own for three years. This article breaks that into the parts you pay no matter what, the parts that depend on how often you change things, and the choices that keep both low.
## What are the fixed yearly costs of a website?
Four things: the domain name, hosting, business email if you use your own domain, and any paid tools the site connects to.
### Domain name
You rent a domain by the year. A standard .com typically renews for roughly $10 to $20 a year at mainstream registrars, and some newer endings cost more. Watch for a low first-year price followed by a much higher renewal. Turn on auto-renew, and keep a current card on file. An expired domain takes the site and the email down together.
### Hosting
Hosting ranges from free tiers to monthly business plans. Modern hosts for framework sites, such as Vercel and Netlify, have generous free tiers, and a small business site uses very little of their capacity. Check whether your plan allows commercial use; some free tiers do not. Vercel's free Hobby plan is for personal, non-commercial projects, and its Pro plan is $20 per seat per month at the time of writing. Traditional shared hosting for WordPress is often cheap for the first term and renews at a higher rate.
### Business email
An address at your own domain is billed per mailbox, per month, by providers such as Google Workspace or Microsoft 365. It is separate from the website, but it uses the same domain, so it belongs in the same budget.
### Connected tools
Booking systems, form services, email marketing, online ordering and live chat mostly charge monthly. These are easy to forget because each one is small. Together they can exceed the hosting bill several times over.
## How much do content changes cost?
Changes are billed by developer time, and most take minutes to a few hours.

Typical requests:
- New prices, hours or a holiday notice
- A new service or team member
- Swapping photos or adding a gallery
- A seasonal banner or promotion
- A new page, or a new field on a form

The first four are quick. The last is a small project. What makes a change expensive is rarely the change itself. It is unclear instructions, missing content, or three rounds of revisions on a banner.

Many small businesses only need a handful of changes a year, so paying per change beats a monthly retainer. To keep each one cheap, batch them: collect updates for a few weeks and send one clear list with the final text and images attached. Five small changes sent together cost far less than five separate requests, because the setup and deploy happen once.

Ongoing fixes and features are available to my clients after the first project, without a retainer.
> Keep a running note called "website changes" on your phone. When it has four or five items, send it. You will pay for one visit instead of five.
## Why does a WordPress site cost more to maintain?
Because WordPress core, the theme and every plugin are separate pieces of software that each need regular updates.

A typical small business WordPress site runs a theme, a page builder, a forms plugin, an SEO plugin, a caching plugin, a security plugin and a backup plugin, often with more on top. Each has its own release schedule. Updates sometimes conflict: a plugin update can break the page builder's layout, or a new PHP version on the host can break an old theme.

Skipping updates is worse. Outdated plugins are a common way small business sites get hacked, because a known flaw in a popular plugin can be scanned for automatically across thousands of sites. Cleaning up a hacked site costs far more than years of updates.

That is why many WordPress hosts and agencies sell maintenance plans. The plan is not a scam; the work is real. It covers updates, testing after updates, backups, security monitoring and uptime checks. The fair question is whether you need a platform that creates that work.

WordPress is still a reasonable choice when you publish a lot of content and several non-technical people need to edit it. For a five-page site that changes a few times a year, it is more machinery than the job needs.
## What maintenance does a custom Next.js site still need?
Much less, but not zero: occasional framework updates, a check on connected services, and content changes.

A custom Next.js site has no plugins to patch. On a host like Vercel, the pages are built ahead of time and served as files, there is no admin login on the public site for bots to attack, and the SSL certificate renews automatically. A brochure-style site built this way can run for months without anyone touching it.

What it does need:
- Security updates to the framework and its dependencies. When a serious flaw is announced in Next.js or a package the site uses, it should be updated promptly. This is occasional work, not weekly work.
- Attention to connected services. If the site uses a booking tool, a form email service, a maps key or a payment provider, those services change their APIs and pricing over time, and an integration can stop working quietly.
- A larger upgrade every few years, when the framework's old version stops receiving fixes. Next.js publishes a support policy that keeps each major version in maintenance for two years after its release.

Sites with real features need a little more. New York Nook, a restaurant site I built, takes reservation requests and pickup orders, so the things worth checking there are the things that carry revenue: that an order placed today still arrives where the restaurant expects it.
![New York Nook: the pickup ordering page I built for a restaurant, with menu categories, a cart and pickup time slots.](/shots/newyorknook-order.jpg)
## Do you need a monthly maintenance plan?
Not always; it depends on what the site runs on and what it does.

A plan makes sense when:
- The site runs on WordPress or another plugin-based system
- It takes payments, orders or bookings, so downtime costs money by the hour
- You publish or change content every week
- It stores customer accounts or personal data
- Nobody in the business will notice if a form stops working

Paying per change makes sense when:
- The site is a static or framework site with no plugins
- Content changes a few times a year
- Someone in the business checks the site now and then

If you do buy a plan, ask exactly what it includes: how many hours of changes, how fast the response is, whether backups are tested by restoring them, and whether unused hours carry over. Ask also what happens if you cancel. You should keep the site, the domain and the content regardless.
## What should you check yourself every few months?
Run a ten-minute check of the things that fail silently: forms, links, details and renewals.
- Submit your own contact or booking form and confirm the message arrives, including in the spam folder
- Tap the phone number and the directions link on a phone
- Read the hours, prices and address, and compare them with your Google Business Profile
- Load the home page on mobile data, not office wifi, and see how long it takes
- Check the domain's renewal date and that the card on file is current
- Log in to each connected tool and look for billing or deprecation notices
- Look at the copyright year and any dated promotions

The form test matters most. A contact form that stopped delivering can go unnoticed for months, because the only symptom is that the phone rings less. Email providers tighten their spam rules over time, and form notifications sent from a poorly configured address are among the first messages to be dropped.

Put a recurring reminder in your calendar. Quarterly is enough for most businesses, monthly if the site takes orders.
## How do you keep maintenance costs low?
Make the common changes easy, avoid features you will not use, and deal with small problems early.
- Put the content you change most (menu, prices, hours) in a simple editor. On larger builds I add an admin page or CMS for this, so routine edits need no developer.
- Avoid features you will not use. Every blog, chat widget, popup or calendar is one more thing to keep working. A blog with two posts from three years ago is worse than no blog.
- Prefer fewer third-party tools. Each one adds a monthly bill and a dependency that can change without warning.
- Fix small issues when they appear instead of saving them for a rebuild. A broken link costs minutes today; a backlog of forty small problems makes people decide the whole site has to go.
- Keep the original photos and text somewhere you can find them, so changes do not start with a search for files.

The largest saving comes at build time. Deciding up front which content you will edit yourself, and building the site so that is simple, removes most future invoices.
## Who should own the accounts?
You should: the domain, hosting, email and every connected tool belong in accounts under the business's name and email address.

This is the cheapest insurance in web development. If the domain is registered in a former designer's personal account, you can lose access to your own address when that person becomes hard to reach. If the site lives on a developer's hosting account, moving it later means asking permission.

The clean setup:
- The business owns each account, with the owner's email and payment card
- The developer is invited as a team member or delegate
- The code lives in a repository the business owns or has a full copy of
- Logins sit in a password manager, with a second trusted person able to reach them

This is how I set up client projects: everything lives in your own accounts, so you are never locked in to me or to anyone else.
## When is a rebuild cheaper than more patching?
A rebuild is cheaper when every change is a struggle, the site is slow on phones, or it no longer matches what the business does.

Signs that patching has stopped paying off:
- Simple text changes take hours because the page builder fights back
- Updates break something nearly every time
- The site loads slowly on mobile and compression has not fixed it
- The theme or builder it depends on is no longer supported
- The business has changed: new services, a new audience, a new name
- Nobody has the logins, and recovering them costs more than starting clean

For scale, my build prices are from $150 for a one-page site in about 7 days, from $450 for a business site of up to five pages in about 14 days, and from $1,200 for a full custom build with custom features, a CMS or admin tools in about 21 days. If you are paying for a maintenance plan every month on a site that frustrates you, compare two or three years of that plan against those numbers.

A rebuild is also the moment to fix ownership, move the content into an editor you can use, and drop the features nobody touched.
## The bottom line
A small business website costs a domain renewal, hosting, email and tool subscriptions every year, plus developer time when something changes. The first group is small and predictable. The second depends on how the site was built. A plugin-based site needs steady updating to stay safe; a custom Next.js site mostly needs content edits and an occasional update. Keep the accounts in your own name, make your frequent edits easy, test your forms a few times a year, and you can own a site for years at very low cost.`,
  },
];
