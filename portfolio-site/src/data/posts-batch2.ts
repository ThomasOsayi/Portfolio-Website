// Articles, batch 2 (Nov 17 2026). Prices come only from the packages in seo.ts.
import type { Post } from './seo';

const d = '2026-11-17';

export const postsBatch2: Post[] = [
  {
    slug: 'signs-your-website-needs-a-redesign',
    title: '7 signs your business website needs a redesign',
    description: 'How to tell whether your website needs a full redesign or just fixes, with the warning signs that cost small businesses customers.',
    date: d,
    updated: '2026-11-17',
    keywords: ['website redesign', 'when to redesign website', 'signs you need a new website', 'outdated website'],
    service: 'nextjs-website-development',
    shortAnswer: 'A website needs a redesign when it is slow or awkward on phones, no longer matches what the business sells, is hard to update, or brings in few inquiries despite steady traffic. If only one page or feature is the problem, targeted fixes are usually cheaper.',
    faqs: [
      { q: 'How often should a business redesign its website?', a: 'There is no fixed schedule; redesign when the site stops matching the business or stops converting, which for many small businesses is every few years.' },
      { q: 'Will a redesign hurt my Google rankings?', a: 'Not if old URLs redirect to their new equivalents and the content that ranks is kept or improved.' },
      { q: 'Is a redesign or a fix cheaper?', a: 'A fix, when the problem is limited to a few pages or one feature.' },
      { q: 'How long does a website redesign take?', a: 'Thomas Osayi rebuilds a one-page site in about 7 days, a site of up to 5 pages in about 14 days and a full custom build in about 21 days, once the content is ready.' },
      { q: 'How much does a small business website redesign cost?', a: 'Thomas Osayi\'s fixed-price packages start at $150 for a one-page site, $450 for a site of up to 5 pages and $1,200 for a full custom build.' },
      { q: 'Should I redesign my site myself with a page builder?', a: 'It can work for a simple brochure site, but speed, mobile layout and redirects from old URLs are the parts most often missed.' },
    ],
    takeaways: [
      'One or two problems on a few pages call for fixes; four or more signs across the whole site usually make a rebuild cheaper than years of patches.',
      'Test your site on a phone over mobile data and try to book, call or order, because that is how most local customers meet it.',
      'Steady traffic with few inquiries points to an unclear next step or weak trust, not to a need for new colors.',
      'Keep every URL that gets traffic or 301 redirect it to its new address so rankings carry over.',
      'Gather photos, prices and service details before the build starts, since content is what delays most redesigns.',
    ],
    body: `A redesign costs money, but the bigger cost is your attention: weeks of decisions about copy, photos and structure while you still have a business to run. So before you commit, it is worth being sure the site is the problem, and that a rebuild is the right size of answer.
I build and rebuild websites for small businesses from Los Angeles, and these are the seven signs I look for, followed by how to decide between fixing what you have and starting again.
## How do I know my website needs a redesign and not just a fix?
Count how many of the seven signs below apply and how much of the site they touch: one or two signs on a few pages means fix those pages, four or more across the whole site means rebuild.
The distinction matters because the two jobs are planned differently. A fix leaves the structure alone and changes a page, a form or a set of images. A redesign changes the structure itself: the page list, the navigation, the templates every page is built from, and usually the platform underneath.
The quick test I use takes about fifteen minutes:
- Open the site on your own phone, on mobile data, not office Wi-Fi
- Try to do the one thing a customer comes to do: book, call, order or ask for a quote
- Read the homepage as if you had never heard of the business
- Try to change one sentence yourself and time how long it takes
- Count how many inquiries came through the site last month
If each of those goes fine, you probably do not need a redesign, whatever a sales email told you. If several go badly, the sections below will tell you which signs you are looking at.
## Is the site slow or awkward on a phone?
If it is, that alone explains a lot of lost customers, because for most local businesses the first visit happens on a phone.
### Sign 1: it is hard to use on a phone
Look for text you have to pinch to read, buttons too close together to tap accurately, a menu that covers the screen and will not close, and forms that zoom in oddly when you tap a field. Check the phone number too. A number that is part of an image, or plain text that cannot be tapped to call, makes people retype it, and many will not. Older sites were often designed for a desktop monitor and then squeezed down, and it shows in exactly these places.
### Sign 2: it is slow
Load the homepage on mobile data and count. If you reach three or four before the main content shows, visitors are leaving. Google's PageSpeed Insights gives you the real numbers: the main content should appear within 2.5 seconds for a page to pass Core Web Vitals.
Slow sites are usually slow for structural reasons: a heavy theme, a page builder that ships a lot of code, a stack of plugins, and photos uploaded straight from a camera. You can compress images in an afternoon. You cannot easily remove the weight of the theme, which is why speed problems built into an old site are often cheaper to rebuild than to patch.
> Test on a mid-range phone over mobile data, not on your laptop. Your own devices have the site cached, so it always feels faster to you than to a first-time visitor.
## Does the site still describe the business you run today?
If the site lists services you dropped, prices you changed or staff who left, it is working against you, and if it is also painful to update, it will keep drifting.
### Sign 3: it describes a business you no longer run
Businesses change faster than their websites. The usual evidence is a services page that leads with work you no longer want, a price list from two years ago, photos of an old location, a team page with people who moved on, and a footer with last year's hours. Visitors read these as signals about the whole business. If the hours are wrong, they wonder what else is. Search engines and AI answer tools read the same stale pages and repeat the wrong details to people who never reach your site.
### Sign 4: updating it is painful
Ask how a price change gets onto the site today. If the honest answer is that you email someone and wait, or you log into a page builder and hope the layout survives, the site will fall out of date again within months of any redesign that keeps the same setup.
A rebuild is the moment to fix this for good. On the sites I build, copy lives in one place, and on larger builds I add a simple admin or CMS so the owner can change text and photos without touching code.
## Why does my site get visitors but no inquiries?
Steady traffic with few calls or forms almost always means the next step is unclear, the offer is buried, or the site does not earn enough trust.
### Sign 5: traffic but no inquiries
Check your analytics for the last three months and compare visits with calls, forms and bookings. If the gap is wide, start with the homepage. Can a stranger tell within five seconds what you do, where you do it, and what to do next? Is there one obvious button, or five competing ones? Does the contact form ask for ten fields when three would do? Does the booking or ordering step happen on your site, or on a third-party page that looks nothing like it?
When I built the site for New York Nook, a Russian restaurant in Hollywood, the goal was to keep those steps short: guests can see the menu, book a table or order pickup from their phone in under a minute.
![New York Nook: a restaurant site I built with online reservations and pickup ordering.](/work/fiverr/newyorknook.jpg)
### Sign 6: it looks like a template
In categories where a customer opens four tabs and compares, such as salons, clinics, restaurants and contractors, a site that looks like the other three gives no reason to choose you. Template sites share the same stock photos, the same row of three icons and the same opening sentence. The cure is not decoration. It is real photos of your work, your actual prices or price ranges, and a layout built around what your customers need to know before they decide.
## Is an old plugin-based site a security risk?
Yes, a site that depends on a stack of plugins needing constant updates is a liability, and that is the seventh sign.
### Sign 7: security warnings or constant plugin updates
The warning signs are concrete:
- The browser shows "Not secure" beside your address because the SSL certificate lapsed
- The dashboard shows a dozen pending updates and you are afraid to run them because the last one broke the layout
- A plugin you rely on has not been updated by its author in years
- Your host has emailed about an outdated PHP version
- You have found spam pages or strange redirects on your own domain
Each plugin is code written by a different party, and each one is a possible way in. Keeping them patched is work somebody has to do every month for as long as the site exists.
A site I build in Next.js is pre-built into static pages. For a brochure site there is no plugin layer and no public database behind it, so there is far less to patch. This is the one sign where a rebuild lowers your running costs as well as improving the result.
## Should I fix what I have or rebuild?
Fix when the problems are local, and rebuild when they come from the structure or the platform.
Fix it when:
- The site is reasonably fast and works on phones
- The problem is one page, one form or one feature
- The content is out of date but easy for you to edit
- You are happy with the platform and only the copy or photos are weak
Rebuild it when:
- Four or more of the seven signs apply across the site
- Speed and mobile problems come from the theme or builder itself
- Every change has needed a developer for years
- The business has changed enough that the page structure no longer fits
Here is a worked example. A studio has a five-page site. It is slow on phones, the services page lists treatments from three years ago, bookings go through a separate page with different branding, and the owner cannot edit anything. That is signs 1 to 5 on every page. Patching them one at a time means paying for five rounds of work on the foundation that caused the problems. A rebuild fixes all five at once.
By contrast, a restaurant with a fast, good-looking site and an outdated menu page needs a new menu page, not a new site.
## What does a redesign cost and how long does it take?
For the sites I build, a redesign starts at $150 for a one-page site and $1,200 for a full custom build, and takes one to three weeks once the content is ready.
My packages are fixed price:
- Starter Site, from $150, 7 days: a polished one-page site with a contact form and SEO basics
- Business Site, from $450, 14 days: up to 5 pages with a booking or quote form and local SEO setup
- Full Custom Build, from $1,200, 21 days: a multi-page site with custom features, a CMS or admin tools
What stretches timelines is rarely the build. It is content: waiting on new photos, an updated price list, or a decision about which services to lead with. Gather those before the project starts and the dates hold.
Running costs are the other number to check. I deploy on Vercel and connect your domain, and hosting is free or close to it for most small business sites. Compare that with what the current site costs each month in hosting, theme and plugin licenses.
## How do I redesign without losing my Google rankings?
Keep every URL that gets traffic, or redirect it to its new equivalent, and keep or improve the content that ranks.
Rankings belong to pages and their addresses, not to the design. A new look on the same URLs with the same useful content is low risk. A new structure that abandons old addresses is where traffic disappears. Before anything is built:
- Export the pages that get search traffic from Google Search Console
- Keep the same URL for each of those pages wherever you can
- Where a URL must change, set a permanent 301 redirect from the old address to the new one
- Carry over the page titles, headings and body copy that rank, then improve them
- Keep the business name, address and phone number identical to your Google Business Profile
- Submit the new sitemap after launch and watch the Pages report in Search Console for errors over the following weeks
The most common way a redesign loses traffic is a launch where old addresses start returning a "page not found" error. Ask to see the redirect list before launch day, not after.
## What mistakes waste a redesign budget?
The expensive mistakes are changing the look while keeping the problem, and starting the build before the content exists.
- New colors and fonts with the same offer, the same copy and the same booking step. The inquiry rate will not move.
- Designing for a desktop screen first. Start with the phone layout, since that is where most visitors are.
- Writing copy last. Design built around placeholder text gets reworked when the real words arrive.
- Deleting pages that ranked because they looked dated. Rewrite them and keep the address.
- Keeping the setup that made updates painful. If you could not edit the old site, make editing a requirement of the new one.
- Launching without a baseline. Write down inquiries per month before launch so you can compare afterward.
> Before you speak to any developer, write one sentence that says what the site is for, such as "get booking requests for weekday appointments." Every design decision gets easier when it can be checked against that sentence.
## The bottom line
A website needs a redesign when the problems are built into its structure: slow and awkward on phones, out of step with the business, painful to update, quiet despite traffic, generic, or held together by plugins. If only one or two of those apply to a few pages, fix the pages and keep your money. If four or more apply everywhere, rebuild, keep or redirect your URLs, and have your content ready before the first design is drawn.`,
  },
  {
    slug: 'core-web-vitals-for-small-business-websites',
    title: 'Core Web Vitals explained for small business owners',
    description: 'What LCP, INP and CLS measure, what good scores look like, and the usual fixes for a slow small business website.',
    date: d,
    updated: '2026-11-17',
    keywords: ['Core Web Vitals', 'LCP INP CLS', 'website speed small business', 'improve page speed'],
    service: 'nextjs-website-development',
    shortAnswer: 'Core Web Vitals are Google\'s three measures of page experience: LCP (how fast the main content appears, good under 2.5 seconds), INP (how fast the page responds to taps, good under 200 milliseconds) and CLS (how much the layout jumps, good under 0.1).',
    faqs: [
      { q: 'Do Core Web Vitals affect Google rankings?', a: 'Google uses them as part of its page experience signals, though relevant, helpful content still matters more.' },
      { q: 'Where can I see my Core Web Vitals?', a: 'In Google Search Console under Core Web Vitals, and for single pages in PageSpeed Insights.' },
      { q: 'What usually makes a small business site slow?', a: 'Oversized images, too many third-party scripts and heavy themes or page builders.' },
      { q: 'Why does Search Console show no Core Web Vitals data for my site?', a: 'Google only reports field data when enough Chrome users have visited, so low-traffic sites often show nothing; use the lab test in PageSpeed Insights instead.' },
      { q: 'Is a PageSpeed score of 100 the same as passing Core Web Vitals?', a: 'No. The 0 to 100 score comes from a simulated lab test, while passing Core Web Vitals depends on LCP, INP and CLS measured from real visitors.' },
      { q: 'Did INP replace First Input Delay?', a: 'Yes. Google made Interaction to Next Paint a Core Web Vital in March 2024, replacing First Input Delay.' },
    ],
    takeaways: [
      'A page passes Core Web Vitals when LCP is 2.5 seconds or less, INP is 200 milliseconds or less and CLS is 0.1 or less for at least 75 percent of real visits.',
      'On most small business sites the hero image is the LCP element, so resizing and prioritizing that one image is the biggest single win.',
      'Third-party scripts such as chat widgets, booking embeds and tracking tags are the usual cause of a poor INP.',
      'Setting width and height on images and reserving space for embeds and banners fixes most layout shift.',
      'Speed is a tie-breaker in rankings, not a substitute for pages that answer what customers search for.',
    ],
    body: `"Is my site fast?" used to be a matter of opinion. The owner said yes, because it loaded instantly on the office computer, and a customer on a phone in a parking lot said no. Core Web Vitals replaced the argument with three numbers that Google measures from real visits.
You do not need to be technical to use them. You need to know what each number measures, what counts as good, and which few fixes move it. That is what this article covers, in the order I work through a slow site myself.
## What are Core Web Vitals?
Core Web Vitals are three measurements of how a page feels to a real visitor: how fast the main content appears, how quickly the page reacts to a tap, and how much the layout moves while loading.
The three are:
- LCP, Largest Contentful Paint: loading. Good is 2.5 seconds or less.
- INP, Interaction to Next Paint: responsiveness. Good is 200 milliseconds or less.
- CLS, Cumulative Layout Shift: visual stability. Good is 0.1 or less.
Two details explain most of the confusion I see. First, the numbers come from real people using Chrome, collected in the Chrome User Experience Report over a rolling 28-day window. They are not a test run from Google's office. Second, Google judges each metric at the 75th percentile, which means three out of four visits must be at or under the threshold. Your own fast visit does not count for much if a quarter of your visitors are on older phones and weak signal.
A page passes only when all three metrics are good. Phone and desktop are scored separately, and the phone score is almost always the worse one, so that is the one to work on.
## What is LCP, and what is a good score?
LCP is the time from the visitor requesting the page to the largest visible element finishing its render, and a good score is 2.5 seconds or less; over 4 seconds is rated poor.
### What counts as the largest element
On a small business homepage it is nearly always the hero photo or, if there is no photo, the main headline. PageSpeed Insights names the exact element in its diagnostics, so you do not have to guess.
### What slows it down
- A hero image far bigger than the screen. A 4000 pixel wide, 3 MB photo sent to a 390 pixel wide phone is the classic case.
- A slow first response from the server, common on cheap shared hosting and on sites that build every page from a database on each visit.
- Stylesheets, fonts and scripts in the head of the page that must download before anything can be drawn.
- A hero image that is lazy-loaded or set as a CSS background, so the browser finds it late.
- A slider or video in the hero that needs JavaScript before the first frame appears.
### What fixes it
Resize the hero to the size it is displayed, export it as WebP or AVIF, and tell the browser it is the priority. In Next.js that is the Image component with the priority setting. On other platforms it is an img tag with fetchpriority set to high and no lazy loading. Then replace the slider with a single still image. Sliders cost speed and visitors rarely wait for the second slide.
## What is INP, and why does my site feel laggy when I tap?
INP measures the delay between a tap, click or key press and the moment the screen visibly updates, and a good score is 200 milliseconds or less; over 500 is rated poor.
INP became a Core Web Vital in March 2024, replacing First Input Delay. The older metric only looked at the first interaction. INP looks at interactions across the whole visit and reports close to the worst one, so a menu that takes half a second to open on the fifth tap now counts.
The cause is almost always JavaScript keeping the browser busy. While a script runs, the browser cannot respond to a tap. On small business sites the heavy scripts are rarely the business's own code. They are added tools:
- Live chat widgets
- Booking and scheduling embeds
- Review carousels and social media feeds
- Tag managers loaded with old tracking pixels
- Pop-up and email capture tools
- Animation libraries on a page that barely animates
The fix is to remove what nobody uses and delay the rest. A chat widget can load after the page is idle, or when the visitor first scrolls. A booking embed can load when someone taps the Book button, not on every page view.
> Open your tag manager or your site's app list and remove every tool nobody has logged into in the last six months. It is the fastest INP improvement there is, and it costs nothing.
## What is CLS, and why does my page jump around?
CLS scores how much visible content moves unexpectedly while the page loads, and a good score is 0.1 or less; over 0.25 is rated poor.
You have felt a bad CLS: you go to tap a link, an image loads above it, the page shifts and you tap an ad instead. The score has no unit. It combines how much of the screen moved with how far it moved.
The usual causes, with their fixes:
- Images without dimensions. Give every image a width and height, or an aspect ratio in CSS, so the browser reserves the space before the file arrives.
- Embeds that load late, such as maps, videos and booking widgets. Wrap each in a container with a fixed height.
- Cookie banners and promo bars that push the page down. Overlay them on top of the page so nothing below has to move.
- Web fonts that swap in with different letter widths. Preload the font, or use a tool such as next/font in Next.js that self-hosts the font and matches the fallback's size.
- Content inserted above what the visitor is already reading, such as a late "special offer" strip.
CLS is the easiest of the three to fix, because every cause comes down to the same rule: reserve the space before the content arrives.
## Where do I check my Core Web Vitals?
Use Google Search Console for the whole site and PageSpeed Insights for a single page.
### Search Console
The Core Web Vitals report under Experience groups your URLs into Good, Needs improvement and Poor, separately for mobile and desktop, using real-visitor data. It shows which group of similar pages shares a problem, which is where to start.
### PageSpeed Insights
Enter one URL at pagespeed.web.dev. The top section, labelled as what your real users are experiencing, is field data. The lower section is a lab test: a simulated visit on a slow phone, with a 0 to 100 performance score and a list of specific problems.
### Field data and lab data are not the same
Only field data decides whether you pass. The lab test is for diagnosis. It cannot measure INP at all, because nobody taps anything in a simulated visit, so it reports Total Blocking Time as a stand-in.
If your site gets modest traffic, both tools may show no field data. That is normal for a new or small site. Use the lab numbers as your guide, and test the site yourself on a mid-range phone.
## Do Core Web Vitals affect my Google rankings?
Yes, but modestly: Google uses them as part of its page experience signals, and relevant, helpful content still matters more.
In practice, speed works as a tie-breaker. If your page and a competitor's page answer the search equally well, the better experience can win. A fast page with thin content will not outrank a slower page that answers the question properly.
The stronger reason to care is what visitors do. People on phones leave pages that take too long, tap away when a button does not respond, and lose trust when the layout jumps under their thumb. Those are lost calls and bookings whether or not rankings move at all. I treat the three thresholds as a floor every site should clear, then put the remaining effort into the pages themselves.
## How do I fix a slow small business website?
Work in this order, because the first items give the biggest gain for the least effort:
- Fix the hero image on your main pages: right size, modern format, loaded first
- Compress and resize every other image, and lazy-load the ones below the first screen
- Remove unused scripts, apps and plugins
- Delay chat, booking and analytics tools until after the main content
- Set width and height on every image and embed
- Self-host fonts and limit them to two families and the weights you use
- Turn on caching and a content delivery network if your host offers them
After each change, rerun PageSpeed Insights on the same page so you know which fix did what. Field data takes up to 28 days to catch up, so do not expect Search Console to turn green the next morning.
This is also where the platform matters. I build in Next.js because pages are pre-built and served from a global network, the image component sizes and reserves space for images automatically, and there is no plugin layer adding scripts. Fast Core Web Vitals are part of every build, not an extra.
![VenCare: a health startup marketing site I built in Next.js and deployed on Vercel.](/work/fiverr/vencare.jpg)
## Can I fix my current site, or does it need a rebuild?
Fix the current site when the problems are images, scripts and embeds, and rebuild when the weight comes from the theme or page builder itself.
A worked example. A salon's homepage scores an LCP of 5.8 seconds on phones. PageSpeed Insights shows a 2.9 MB hero photo, a slider script, a chat widget and four fonts. Replacing the slider with one resized image, delaying the chat and dropping two fonts are changes to content and settings, and they can bring a page like that under the threshold without touching the platform.
Now take the same score where the report lists hundreds of kilobytes of unused CSS and JavaScript from the theme and a slow first server response. Those come from the foundation. You can install a caching plugin and gain a little, but you are tuning around the cause.
When a rebuild is the answer, my fixed-price packages are a Starter Site from $150 in 7 days, a Business Site of up to 5 pages from $450 in 14 days, and a Full Custom Build from $1,200 in 21 days.
## The bottom line
Core Web Vitals are three thresholds: main content in 2.5 seconds, a response to taps in 200 milliseconds, and a layout shift score of 0.1 or less, for three out of four real visits. Check them in Search Console and PageSpeed Insights, fix the hero image first, cut the scripts you do not use, and reserve space for everything that loads late. Then spend the rest of your effort on pages worth loading quickly.`,
  },
  {
    slug: 'how-to-get-your-business-mentioned-in-ai-search',
    title: 'How to get your business mentioned in ChatGPT, Perplexity and Google AI answers',
    description: 'What makes AI search tools cite or recommend a business, and the practical steps a small business can take to show up in AI answers.',
    date: d,
    updated: '2026-11-17',
    keywords: ['AI search optimization', 'get mentioned in ChatGPT', 'AI Overviews small business', 'generative engine optimization'],
    service: 'nextjs-website-development',
    shortAnswer: 'AI search tools mention businesses that are described consistently across many trusted websites and that publish clear, specific answers to the questions customers ask. Mentions on other sites, answer-first pages, comparisons and fresh, factual content matter more than technical tricks.',
    faqs: [
      { q: 'Is AI search optimization different from SEO?', a: 'It builds on the same foundation, but mentions on other websites and clearly quotable answers carry extra weight in AI answers.' },
      { q: 'Does an llms.txt file get me into ChatGPT?', a: 'There is no clear evidence that AI tools rely on llms.txt today; it is cheap to add but not a substitute for content and mentions.' },
      { q: 'Can I pay to appear in AI answers?', a: 'Not in the organic answers; you earn mentions through content, reviews and coverage on other sites.' },
      { q: 'Should I block AI crawlers in robots.txt?', a: 'Not if you want to be cited: a search crawler that is blocked cannot read your pages, so it has nothing of yours to quote.' },
      { q: 'How do I check whether AI tools mention my business?', a: 'Ask ChatGPT, Perplexity and Google the questions your customers ask, in a fresh session, and record which businesses and sources appear each month.' },
      { q: 'How long does it take to show up in AI answers?', a: 'There is no fixed timeline; new pages can be picked up within weeks once they are indexed, while mentions on other sites build over months.' },
    ],
    takeaways: [
      'AI search tools summarize sources, so a business appears in answers only when it appears, consistently described, in the sources they read.',
      'Mentions on directories, review platforms, local news and roundup articles count as much as anything on your own site.',
      'Open every page and section with a direct answer and keep each section able to stand alone, because AI tools often quote one section.',
      'Prices, timelines, locations and named examples give an AI something concrete to repeat, and vague copy gives it nothing.',
      'Allow AI crawlers in robots.txt and make sure your content is in the page HTML, then let content and mentions do the real work.',
    ],
    body: `Ask ChatGPT, Perplexity or Google "who should I call for this in my area" and you get a short list of names with reasons. Nobody scrolls ten blue links. The business either is in the answer or is not, and owners are starting to ask me how that list gets made.
There is no secret switch. AI search tools answer a question by reading many sources and summarizing them. To be in the answer, your business has to be in the sources, described clearly enough that the tool can repeat it with confidence. Here is how that works and what a small business can do about it.
## How do AI search tools decide which businesses to mention?
They mention businesses that show up, described the same way, across the sources they retrieve for a question.
There are two routes into an answer. The first is what the model absorbed in training: a snapshot of the web from some time ago. You cannot edit that. The second is live retrieval. When someone asks about a local service or a current product, the tool runs web searches behind the scenes, reads the top results and writes a summary with links. That second route is the one you can influence, and it is the one used for most "who should I hire" questions.
Two things follow from this. Ordinary search visibility still matters, because a page that is not indexed or never ranks for anything is unlikely to be retrieved. And the tool is looking for agreement. If your own site, your Google Business Profile and three directories all say you are a pediatric dentist in Pasadena, it can say so. If they disagree about what you do or where you are, the safer choice for the tool is to mention someone else.
## Why do mentions on other websites matter so much?
Being named on trusted third-party sites is one of the strongest signals, because an AI tool treats what others say about you as better evidence than what you say about yourself.
### Where useful mentions come from
- Review platforms and maps: Google Business Profile, Yelp, and the review sites specific to your industry
- Industry and local directories, including chamber of commerce and trade association listings
- Local news, neighborhood blogs and "best of" roundup articles
- Community discussions such as Reddit threads and local forums, where real customers recommend businesses
- Partner, supplier and client websites that name you
### Keep the description identical
Write one sentence that says what you do, for whom and where, then use it everywhere: "Family-owned commercial printer in Los Angeles specializing in packaging and large-format work." Use the same business name, address and phone number on every profile, down to the suite number. Small differences read as different businesses.
### How to earn them
Claim and complete every profile that already exists. Ask happy customers for reviews that mention the specific service. Offer a local reporter or blogger a useful fact or a quote on your subject. Sponsor or take part in something local that publishes a list of participants. None of this is new. It is the same reputation work that always mattered, and AI tools happen to read all of it.
## How should I write pages so AI tools can quote them?
Start every page and every section with the direct answer, then explain, and keep each section able to stand on its own.
### Answer first
A tool building an answer looks for a sentence it can lift. "A brake pad replacement at our shop takes about 90 minutes and costs between X and Y for most sedans" is liftable. "We pride ourselves on quality service" is not. Put the answer in the first sentence under each heading, and write the heading as the question a customer would type.
### Self-contained sections
AI tools often quote a single section, not a whole page. Sections of roughly 120 to 180 words that make sense alone work better than long walls of text. That means naming the subject in each section, not writing "it" and relying on a paragraph further up the page.
A before and after. Before: "Our process is simple and stress-free, and we handle everything." After: "Bookkeeping cleanup for a small business with one year of unreconciled accounts usually takes two to three weeks. We need read-only bank access and your last filed tax return to start." The second version can be quoted as an answer. The first cannot be quoted as anything.
> Put a two or three sentence summary at the top of each important page that answers the page's main question in full. Every article on this site opens with one for that reason.
## What kind of content gets cited most?
Comparisons and pages full of specific facts get cited most, because they match the questions people ask AI tools.
### Comparisons
"X vs Y" and "which option is right for me" questions are common in AI search. An honest comparison of methods, materials or your own packages gives the tool exactly the structure it needs. Say plainly who each option suits and who it does not. A comparison that always concludes "choose us" reads as an ad, and tools favor sources that look balanced.
### Specific facts
Prices, timelines, locations, quantities and named examples give an AI something concrete to repeat. Go through your service pages and check each one for:
- A price or a price range
- How long the work takes
- The areas you serve, by name
- What is included and what is not
- A real example with details
- Who the service is not right for
Vague marketing copy gives the tool nothing to work with. A page that says a one-page site starts at $150 and takes 7 days can be repeated word for word. A page that says "affordable solutions, fast turnaround" cannot.
## Does it matter how fresh my content is?
Yes, tools that retrieve live results lean toward recent, clearly dated pages for anything that changes over time, such as prices, regulations and recommendations.
Update a page when something real changes: a new price, a new service, a rule that changed, a better example. Show the date it was last updated on the page, and make sure the date in your structured data matches. A page with last year's prices is a liability twice over, because the tool may repeat the old number to a customer who then feels misled.
Never change dates without changing content. A new date on unchanged text fools nobody for long, and when the visible date and the content disagree, you have made the page less trustworthy, not more.
A realistic routine for a small business is a quarterly pass: open your five most important pages, correct anything out of date, add one new question you have been asked recently with its answer, and update the date.
## What technical setup do AI crawlers need?
They need permission to fetch your pages, content that is present in the HTML, and details that match everywhere.
### Access in robots.txt
Check the robots.txt file at the root of your domain. Some hosts and security plugins block AI crawlers by default. The ones to know are GPTBot, OAI-SearchBot and ChatGPT-User from OpenAI, PerplexityBot from Perplexity, and ClaudeBot from Anthropic. Google's AI answers draw on its normal search index, so Googlebot access is what counts there. Google-Extended is a separate control for whether your content is used with Google's Gemini models. If a search crawler is disallowed, it cannot read you and cannot cite you.
### Content in the HTML
Many AI crawlers fetch the raw page and do not run JavaScript. If your site builds its text in the browser after loading, a crawler may see an empty shell. Open your page, choose View Source, and search for a sentence from the page. If it is not there, that is a problem worth fixing. Sites I build in Next.js are pre-rendered, so the full text is in the HTML.
### Structured data and consistency
Add schema markup that matches what is visible: LocalBusiness with your name, address, phone and hours, and FAQ markup only for questions that appear on the page. Keep those details identical to your profiles elsewhere. Set up Bing Webmaster Tools as well as Google Search Console, since some AI tools draw on Bing's results.
### About llms.txt
There is no clear evidence that AI tools rely on an llms.txt file today. It is cheap to add, and it is not a substitute for content and mentions.
## How do I check whether AI tools mention my business?
Ask them the questions your customers ask, on a schedule, and write down what comes back.
Pick ten questions: a few "best" or "who should I hire" questions for your service and area, a few "how much does it cost" questions, and a few comparisons. Ask each one in ChatGPT, Perplexity and Google, in a fresh session, so earlier chats do not shape the result. Record three things in a spreadsheet: which businesses were named, which sources were linked, and whether the facts about you were right.
The sources column is the useful one. If the same directory or roundup article is cited again and again for your category and you are not on it, you have found your next task. If a tool states an old price or a wrong address, trace it to the page that says so and correct it there.
Answers vary from one run to the next, so look for patterns over a few months, not single results. Also check your analytics for referral visits from chatgpt.com and perplexity.ai. The numbers are usually small, but those visitors arrive already briefed.
## What does not work?
Anything aimed at tricking the tool instead of informing the reader.
- Paying for placement. Organic answers are not for sale, and anyone promising a guaranteed mention is selling something they do not control.
- Stuffing pages with keywords or hidden text written for machines. The tools summarize meaning, and clumsy repetition makes a page less quotable.
- Publishing dozens of thin, near-identical pages for every nearby town. One strong page with real detail beats twenty copies.
- Fake reviews or made-up statistics. They are a risk to the business well beyond search.
- Refreshing dates on unchanged content.
- Treating a single technical file as the answer while the site still says nothing specific.
## The bottom line
AI answers are built from sources, so the work is to be a good source and to be mentioned by other good sources. Describe your business the same way everywhere, earn mentions on the sites your category relies on, open each page and section with a plain answer, fill your pages with specific facts, keep them current, and let the crawlers in. It is slower than a trick, and it is the only approach that keeps working when the tools change.`,
  },
  {
    slug: 'vercel-build-failed-nextjs-fixes',
    title: 'Vercel build failed? The most common Next.js deploy errors and fixes',
    description: 'Why a Next.js app builds on your laptop but fails on Vercel, and how to fix type errors, missing environment variables, case-sensitive imports and more.',
    date: d,
    updated: '2026-11-17',
    keywords: ['Vercel build failed', 'Next.js build error', 'works locally fails on Vercel', 'Vercel deployment error'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Most Vercel build failures come from five causes: TypeScript errors the dev server ignored, environment variables missing in Vercel, imports whose letter case does not match the file name, dependency or Node version mismatches, and code that touches browser-only APIs during the server build.',
    faqs: [
      { q: 'Why does npm run dev work but the Vercel build fail?', a: 'The dev server is lenient; a production build type-checks and prerenders every page, which exposes errors dev mode skipped.' },
      { q: 'Why does an import work on my Mac but fail on Vercel?', a: 'macOS file systems usually ignore letter case and Vercel\'s Linux builders do not, so Button.tsx and button.tsx are different files there.' },
      { q: 'How do I see what failed?', a: 'Open the deployment in Vercel and read the build log from the first error, not the last line.' },
      { q: 'Do I need to redeploy after adding an environment variable in Vercel?', a: 'Yes. Environment variables apply only to new deployments, and NEXT_PUBLIC_ values are written into the bundle at build time.' },
      { q: 'Should I set ignoreBuildErrors to get the deploy through?', a: 'No. It hides TypeScript errors without fixing them, so the same bug shows up later as a runtime crash for users.' },
      { q: 'How much does it cost to have a failed Vercel build fixed?', a: 'Thomas Osayi fixes a single build or deploy error from $60, usually within 2 days, with a short write-up of what was wrong.' },
    ],
    takeaways: [
      'Run npm run build on your own machine first, because the production build type-checks and prerenders every page the way Vercel does.',
      'Read the build log from the first error upward, since the last line only says that the build command exited with code 1.',
      'Environment variables in a local .env file do not exist on Vercel until you add them for the right environment and redeploy.',
      'Vercel builds on Linux, where file names are case-sensitive, so an import must match the file name letter for letter.',
      'Turning off type checks or lint to force a deploy moves the failure from the build log to your users.',
    ],
    body: `The app runs on your laptop. You push to GitHub, Vercel starts a deployment, and a minute later you get the email: build failed. Nothing changed between the two, except everything about how the code was run.
I fix this for founders, usually on apps started in Lovable, Bolt, v0 or Cursor. The fastest way to debug it is to run the same production build locally with npm run build. Most of the time the error appears there too, with a clearer message and no waiting. The causes are a short list, and this article goes through each one with the error text you will see.
## Why does my Next.js app work locally but fail on Vercel?
Because npm run dev and a production build are different programs with different rules, and Vercel's build machine is not your laptop.
The dev server compiles one page at a time, only when you visit it, and it keeps running through type errors. The production build, next build, compiles every file, type-checks the whole project, runs lint, and prerenders every page it can. A page you never opened in development gets built on Vercel whether you remember it exists or not.
The machine differs too. Vercel builds on Linux with a clean install of your dependencies, the Node version set in the project, and only the environment variables you entered in the dashboard. Your laptop has a case-insensitive disk, months of installed packages, and a .env.local file that never left it.
Almost every failure comes from one of these:
- TypeScript or lint errors the dev server let through
- Environment variables that exist locally but not in Vercel
- Imports whose letter case does not match the file name
- Dependency, lockfile or Node version mismatches
- Browser-only code that runs during the server build
- Pages that fetch data at build time from something unreachable
## How do I read a Vercel build log?
Open the failed deployment, expand the build logs, and find the first error, because everything after it is fallout.
The last line of a failed build is nearly always "Command npm run build exited with 1." That tells you nothing. Scroll up to the first line marked as an error, or use the search box in the log viewer and look for "Error", "Failed to compile" or "Type error".
The stage tells you the category:
- A failure while installing dependencies points to package.json, the lockfile or the Node version
- "Failed to compile" with a file path and line number is a type, lint or import error
- "Collecting page data" failures are code that runs when a route file is loaded, usually an SDK set up with a missing key
- "Generating static pages" failures are a page that crashed while being prerendered
Then reproduce it. Run npm run build locally. If it fails with the same message, you can fix and retest in seconds. If it passes locally and fails on Vercel, the difference is the environment: variables, file-name case, Node version or a package that is not listed.
> Copy the first error line and the ten lines under it, not the whole log. That block has the file, the line number and the reason, and it is all anyone needs to diagnose the failure.
## How do I fix type and lint errors that only show up at build?
Fix the code the error points to, because the dev server tolerated the mistake and the build will not.
### What it looks like
"Failed to compile", followed by a file path with a line and column, then "Type error: Property 'name' does not exist on type 'User'" or "Type error: 'data' is possibly 'undefined'". Lint failures look similar, with a rule name at the end such as react/no-unescaped-entities or react-hooks/rules-of-hooks.
### Why AI-generated code hits this
AI tools often write a component against a data shape they assumed, then change the shape in another file. The app still runs in development, because JavaScript does not care until that exact line executes. The type checker reads every line.
### The fix
Go to the line. If a value can be undefined, handle that case. If a property is missing from a type, add it to the type or stop using it. Run npx tsc --noEmit to list every type error at once without waiting for a full build, and npm run lint for the lint rules. Fix them all in one pass, or you will repeat the deploy cycle once per error.
## How do I fix missing environment variables on Vercel?
Add each variable under Settings, then Environment Variables, tick the environments it applies to, and redeploy.
Your .env.local file is ignored by git on purpose, so Vercel never sees it. Until you enter the values in the dashboard, process.env.ANYTHING is undefined on the server.
### What it looks like
The error rarely says "missing environment variable". You see the downstream effect: "Error: Neither apiKey nor config.authenticator provided" from Stripe, "FirebaseError: Firebase: Error (auth/invalid-api-key)", "supabaseUrl is required", or a database client complaining about an invalid connection string. These often appear during "Collecting page data", because the SDK is set up at the top of a file that the build loads.
### The rules that trip people up
- Variables apply per environment: Production, Preview and Development. A variable set only for Production is missing on preview deployments.
- A new variable applies only to new deployments. Redeploy after adding one.
- Variables read in the browser need the NEXT_PUBLIC_ prefix, and their values are written into the JavaScript bundle at build time.
- Secrets such as a Stripe secret key or a service account key must never have that prefix, since anything prefixed is public.
- Names are case-sensitive, and a stray space or quote mark pasted into the value box breaks them.
- Multi-line values such as a Firebase private key often arrive with escaped line breaks that your code has to convert back.
Compare your local file against the dashboard line by line. Running vercel env pull with the Vercel CLI downloads what the project actually has, which makes the gap obvious.
## Why do I get "Module not found" only on Vercel?
Either the import's letter case does not match the file name, or the package is not listed in package.json.
### Letter case
The error reads "Module not found: Can't resolve './components/Button'". On most Macs and on Windows, an import of ./components/Button finds a file named button.tsx, because the disk ignores case. Linux does not, and Vercel builds on Linux. Make the import match the file exactly, including folder names.
Renaming has its own trap: git may not notice a change that only alters case. Rename with git mv, going through a temporary name if needed, or the old name stays in the repository and the build keeps failing.
### Dependencies and Node version
If the unresolved module is a package name, it was installed on your machine but never saved to package.json, so the clean install on Vercel does not include it. Install it properly and commit both package.json and the lockfile.
Related install failures:
- A lockfile out of sync with package.json, which pnpm reports as ERR_PNPM_OUTDATED_LOCKFILE
- Two lockfiles in the repository, such as package-lock.json and yarn.lock, so Vercel picks a package manager you do not use
- npm stopping with "ERESOLVE unable to resolve dependency tree" on a peer dependency conflict
- A package that requires a newer Node version than the project is set to
Keep one lockfile, commit it, and set the Node version in the project's settings or in the engines field of package.json so it matches what you run locally.
## How do I fix "window is not defined" and prerender errors?
Move browser-only code so it runs in the browser, and make sure nothing the build needs is unreachable.
### Browser-only code on the server
The log says "ReferenceError: window is not defined", or document or localStorage, usually under "Error occurred prerendering page" with the route name. Next.js renders pages on the server during the build, where those objects do not exist. Using them at the top level of a file or directly in a component body breaks prerendering.
Read them inside a useEffect, which only runs in the browser, in a component marked with "use client". If a library touches window as soon as it is imported, as some chart and map libraries do, load that component with next/dynamic and server rendering turned off.
A close relative is "useSearchParams() should be wrapped in a suspense boundary at page". The fix is what it says: wrap the component that reads the search params in a Suspense boundary.
### Pages that fetch during the build
If a page fetches data at build time and the API is down, slow or needs a secret that is not set, the build fails. The most common version in AI-built apps is a page that fetches its own API route at http://localhost:3000. There is no server running during a build, so the request is refused.
Call the underlying function directly from the server component instead of going through HTTP. If the page depends on the logged-in user or on live data, it should not be prerendered at all: mark it as dynamic with export const dynamic = 'force-dynamic' so it renders per request.
## What should I avoid doing to force the build through?
Do not switch off the checks that are failing, because the build is telling you about a real bug before your users find it.
The tempting shortcuts are setting typescript.ignoreBuildErrors to true in next.config, disabling lint during builds, scattering @ts-ignore comments or the any type over the errors, and putting NEXT_PUBLIC_ in front of a secret so the browser can read it. AI assistants suggest all of these when asked to "make the build pass", and each one works in the narrow sense that the deploy turns green.
Then the type error that said a value might be undefined becomes a blank page for the customer whose data has that value missing. The secret with a public prefix is readable by anyone who opens the browser's developer tools. A forced deploy trades a failure you can see for one you cannot.
A worked example. A founder's deploy fails with "Type error: 'session' is possibly 'null'" in a dashboard page. Ignoring type errors deploys it. The first signed-out visitor who lands on that URL gets a crash. Handling the null case with a redirect to the login page takes two lines and fixes both the build and the bug.
## When is it worth getting help, and what does it cost?
Get help when you have fixed the first error and three more appeared, or when the build passes and the live site still breaks.
One error with a clear message is a do-it-yourself job with this list. A chain of them usually means something structural: the wrong rendering mode for authenticated pages, environment handling that was never set up, or generated code that drifted out of sync with itself.
I fix single build and deploy errors as a Quick Fix from $60, typically within 2 days, with a short write-up of what was wrong and what changed. Several fixes plus a feature or integration start at $200 over about 5 days. Taking an app that is stuck all the way to a production launch starts at $600 over about 10 days. Access to the repository and the Vercel project is all I need.
## The bottom line
A failed Vercel build is almost never mysterious. Run npm run build locally, read the first error in the log, and match it to the list: a type or lint error, a missing environment variable, a file-name case mismatch, a dependency or Node version problem, browser-only code on the server, or a fetch the build cannot complete. Fix the cause instead of silencing the check, and the deploy that goes green will also be the one that works.`,
  },
  {
    slug: 'fix-nextjs-hydration-error',
    title: 'How to fix "Hydration failed" errors in Next.js',
    description: 'What a hydration mismatch is, the common causes in Next.js and React apps, and how to fix each one properly.',
    date: d,
    updated: '2026-11-17',
    keywords: ['Next.js hydration error', 'hydration failed because the server rendered HTML', 'React hydration mismatch fix'],
    service: 'fix-ai-built-app',
    shortAnswer: 'A hydration error means the HTML rendered on the server differs from what React renders first in the browser. The usual causes are dates, random values or browser-only data used during render, invalid HTML nesting, and browser extensions that change the page.',
    faqs: [
      { q: 'Is a hydration error serious?', a: 'It can be: React may throw away the server HTML and re-render, which slows the page and can cause visible flicker or broken state.' },
      { q: 'Should I just add suppressHydrationWarning?', a: 'Only for a single element whose difference is expected, such as a timestamp; it hides the warning without fixing real mismatches.' },
      { q: 'Why does it only happen for some users?', a: 'Browser extensions that edit the page, such as translators or password managers, can cause mismatches on their machines only.' },
      { q: 'Why does the hydration error only appear in production?', a: 'Often because the server runs in UTC while visitors are in other time zones, so dates and times that matched on your own machine differ once deployed.' },
      { q: 'Does adding "use client" fix a hydration error?', a: 'No. Client components are still rendered on the server first, so the same mismatch happens unless the browser-only value is read after mount.' },
      { q: 'Can I turn off server rendering for one component?', a: 'Yes. Load it with next/dynamic and ssr set to false from a client component, which is appropriate for widgets that depend entirely on the browser.' },
    ],
    takeaways: [
      'A hydration error means the first render in the browser produced different HTML from the server render of the same component.',
      'Dates, random values and locale formatting are the most common cause, and the fix is to render a stable value first and update it after mount.',
      'Marking a component with "use client" does not skip server rendering, so window and localStorage still have to be read inside an effect.',
      'Invalid nesting such as a div inside a p makes the browser repair the HTML, and the error message names the offending elements.',
      'If only some visitors see the error, test in a private window with extensions off before changing any code.',
    ],
    body: `Hydration errors have a reputation for being cryptic, and the red overlay does not help. The cause, though, is always the same kind of thing, and once you know the five places it comes from you can usually find it in a few minutes.
React renders your page on the server, sends the HTML, then "hydrates" it in the browser by rendering again and attaching event handlers. If the two renders disagree, you get a hydration error. Everything below is about finding where they disagree and making them agree properly.
## What is a hydration error in Next.js?
It is React telling you that the HTML it received from the server does not match what the same components produce on their first render in the browser.
The sequence matters. On the server, Next.js runs your components and turns the result into HTML, so the visitor sees content before any JavaScript loads. In the browser, React runs the same components again. It does not rebuild the page. It walks the existing HTML and expects each element and each piece of text to be exactly where its own render says it should be, then attaches click handlers and state.
When something differs, React cannot trust the HTML. Depending on the version and where the mismatch sits, it either patches that spot or throws away the server HTML for that part of the tree and renders it again from scratch. That costs time, can cause a visible flicker, and can leave inputs or event handlers in a broken state.
One point that surprises people: a component marked "use client" is still rendered on the server for the first load. The directive means the component also runs in the browser. It does not mean it only runs there.
## What does the error message actually tell me?
It tells you which element differed and shows both versions, so read all of it before changing anything.
The wording depends on your React version:
- Recent versions: "Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client."
- Older versions: "Text content does not match server-rendered HTML" or "Hydration failed because the initial UI does not match what was rendered on the server."
- For bad markup: a warning that one element cannot be a descendant of another, ending with "This will cause a hydration error."
In development, the overlay includes a component stack and a diff. Lines marked with a plus are what the browser rendered, and lines marked with a minus are what the server sent. If the diff shows "10:42 AM" on one side and "6:42 PM" on the other, you have a time zone problem. If it shows an extra div, a wrapper exists on one side only.
The production build strips this detail and shows a short error code with a link. Always reproduce in development, where the message is complete.
> Use View Source, not the Elements panel, when you want to see what the server sent. The Elements panel shows the page after the browser and React have already changed it.
## How do I fix dates, random values and locale formatting?
Render a value that is identical on both sides first, then switch to the live or local value after the component has mounted.
### Why it happens
Anything that changes between two moments or two machines will differ between the server render and the browser render:
- new Date() and Date.now(), because the two renders happen at different times
- Math.random() and generated IDs such as crypto.randomUUID()
- toLocaleDateString() and toLocaleTimeString() with no arguments, because the server's locale and time zone are not the visitor's
- Relative times such as "3 minutes ago"
This is the classic bug that only appears after deploying. Your laptop is both server and browser in development, so the time zone matches. A hosted server typically runs in UTC, and your visitor in Los Angeles is hours behind it.
### The fixes
- For dates that should look the same for everyone, format with an explicit locale and time zone, for example Intl.DateTimeFormat with 'en-US' and a timeZone option. Server and browser then produce the same string.
- For dates in the visitor's local time, render a neutral value first, such as the ISO date, and replace it inside a useEffect after mount.
- For random values, generate them once on the server and pass them down as props, or generate them in an effect.
- For element IDs used to connect labels and inputs, use React's useId hook, which returns the same ID on both sides.
- Fetch the data and compute "now" in a server component, then pass the finished string to the client component, so only one render ever decides the value.
## How do I use localStorage, window or screen size without a mismatch?
Read them after mount, inside an effect or through a hook built for the purpose, never during the render itself.
### Browser-only data during render
The server has no window, no localStorage and no screen. Code that reads a saved theme, a cart count from localStorage, or window.innerWidth while rendering will either crash on the server or produce different output in the browser.
The common pattern in generated code is a state initializer that reads localStorage directly. The server renders the default, the browser renders the stored value, and the two disagree.
### Checking typeof window does not help
Writing a condition on typeof window inside render creates two different outputs by design. The server takes one branch and the browser takes the other, which is the definition of a mismatch.
### What works
- Start with the same default on both sides, then read the browser value in a useEffect and update state. The first browser render matches the server, and the real value appears right after.
- Use a mounted flag: a piece of state that starts false and is set to true in an effect, with the browser-only part rendered only when it is true.
- For values that come from a browser store, React's useSyncExternalStore hook accepts a separate server snapshot for exactly this reason.
- For layout that depends on screen size, use CSS media queries instead of JavaScript. Both layouts are in the HTML and CSS decides which is visible, so there is nothing to mismatch.
- For a widget that is entirely browser-dependent, such as a map or a chart, load it with next/dynamic and ssr set to false, from inside a client component.
The trade-off with the effect approach is a brief moment where the default shows before the stored value. For a theme, set it with a small inline script before the page paints, which is how libraries such as next-themes avoid the flash.
## Which HTML nesting mistakes cause hydration errors?
Any markup the browser considers invalid, because the browser silently repairs it before React hydrates and the repaired structure no longer matches.
The frequent ones:
- A div, a list or a heading inside a p. The browser closes the paragraph early.
- A link inside a link, or a button inside a button
- A button inside a link, or a link inside a button
- Table rows placed directly in a table with no tbody, which the browser inserts for you
- A p inside a p, which usually comes from a text component that renders a paragraph being wrapped in another paragraph
- List items outside a list
These often hide inside components. A Card component renders a p for its description, and somebody passes a block of markup as the description. A rich-text field from a CMS arrives wrapped in p tags and gets placed inside another p.
Recent React versions name the elements in a warning that says one cannot be a descendant of the other. Find the outer element, and change it to a div or a span as appropriate. This is the one cause where the fix is plain: correct the markup.
## Why does the error only happen for some users?
Because something on their machine changed the HTML between the server sending it and React hydrating it, most often a browser extension.
Extensions that edit pages include translators, password managers, grammar checkers, dark mode tools and some ad blockers. They add attributes to the body, inject elements, or rewrite text, and React finds a page that is not what the server sent. Recent React versions tolerate more of this than older ones, especially changes to the head and body tags, but text that has been rewritten by a translator still breaks.
To confirm, open the page in a private window with extensions off, or in a clean browser profile. If the error disappears, your code is not the cause.
Two other sources behave the same way:
- Mobile browsers that turn phone numbers and addresses into links automatically. A format-detection meta tag turns that off.
- A proxy or optimization service in front of your site that rewrites the HTML it passes through. Disable its HTML rewriting features and test again.
## When is suppressHydrationWarning acceptable?
Only on a single element whose content is expected to differ, such as a timestamp, or where a library documents that it is required.
The attribute tells React not to warn about a mismatch in that one element's own text and attributes. It applies one level deep, so it does not cover the element's children. It also does not fix anything. React keeps whatever the server sent for that element.
Reasonable uses are a "last updated" time you are happy to leave as the server rendered it, and the html tag when a theme library sets a class on it before React loads. Putting it on wrappers throughout the app to silence the console is the wrong use. The mismatches are still there, and you have turned off the only thing reporting them.
## How do I find the cause fast?
Read the diff, identify which of the five causes it matches, and search the named component for that pattern.
My order of checks:
- Run the app in development and reproduce the error on the exact route
- Read the diff: differing text points to dates, locale or stored values, and a differing structure points to nesting or a conditional
- Search the component and its children for Date, Math.random, toLocale, window, localStorage and typeof window
- Check the markup for the invalid nesting list above
- Test in a private window to rule out extensions
- If it only fails when deployed, compare time zones first
A worked example. An order page shows "Text content does not match" with the diff "Nov 17, 6:05 PM" against "Nov 17, 10:05 AM". The component calls toLocaleString() on the order date. The server formatted it in UTC and the browser in Pacific time. The fix is to format with an explicit time zone in a server component if every visitor should see the same time, or to render the time after mount if each visitor should see their own.
If you have worked through the list and it still fails, send me the route and the repo. A single bug like this is a Quick Fix from $60, usually within 2 days, with a write-up of the cause.
## The bottom line
A hydration error is a disagreement between two renders of the same component. Find the value or the markup that differs: a date or random value, something read from the browser during render, invalid nesting, a typeof window branch, or an extension editing the page. Make the first browser render match the server and move anything browser-specific to after mount, and the error goes away for the right reason.`,
  },
  {
    slug: 'firebase-security-rules-checklist',
    title: 'Firebase best practices before launch: the security rules checklist',
    description: 'Firebase best practices for an MVP or AI-built app going live: Firestore and Storage security rules, server-only actions, App Check, budget alerts and separate projects, with the exact patterns to search for.',
    date: d,
    updated: '2026-11-20',
    keywords: ['Firebase best practices', 'Firebase security rules', 'Firestore rules checklist', 'Firebase test mode expired', 'secure Firebase app'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Before launch, make sure no Firestore or Storage rule allows reads or writes to everyone, every user-owned document checks request.auth.uid against the owner, writes validate the fields they accept, and admin actions run on the server with the Admin SDK instead of from the browser.',
    faqs: [
      { q: 'What does Firebase test mode do?', a: 'It allows anyone to read and write the database until a set date, which is fine for a prototype and dangerous after launch.' },
      { q: 'Is the Firebase config in my frontend a secret?', a: 'No. It identifies your project and is public by design, so security rules are what protect your data.' },
      { q: 'How do I test security rules?', a: 'Use the Rules Playground in the Firebase console or the local emulator, signed in as different test users.' },
      { q: 'Is "allow read, write: if request.auth != null" secure enough?', a: 'No. It lets any signed-in user read and change every document, and anyone can create an account, so it protects very little.' },
      { q: 'Do Firestore rules apply to the Admin SDK?', a: 'No. The Admin SDK bypasses security rules, which is why it must run only on a server or in Cloud Functions and never in the browser.' },
      { q: 'Do rules on a document cover its subcollections?', a: 'No. A match on a document does not apply to the collections beneath it, so each subcollection needs its own rule.' },
    ],
    takeaways: [
      'The Firebase config in your frontend is public by design, so security rules are the only barrier between a stranger and your data.',
      'Requiring sign-in alone is not enough, because every rule must also check that the signed-in user owns or is allowed to see the document.',
      'Users must never be able to write their own role, plan or balance, so list exactly which fields each update may change.',
      'Role changes, payments and anything across users belong on the server with the Admin SDK, not in browser code.',
      'Before launch, test every collection as the owner, as a second user and as a signed-out visitor.',
    ],
    body: `Firebase is safe when its rules are right. The config in your frontend is public, so the rules are the only thing standing between a stranger and your data.
That sentence is the whole security model, and it is the part AI app builders most often leave unfinished. The app works, sign-in works, data saves and loads, and the rules file still says anyone may read and write everything. This checklist is the pass I do on every Firebase app before it goes live, written so you can do it yourself.
## Why are security rules the only thing protecting my Firebase data?
Because the browser talks to Firestore and Storage directly, with no server of yours in between, and the keys it uses are visible to everyone.
In a traditional app, the browser calls your server and your server decides what to return. With Firebase's client SDK, the browser sends its query straight to Google's servers. The apiKey, projectId and the rest of the config object ship inside your JavaScript, and anyone can copy them from the page source. That is by design. The config only identifies the project.
What decides whether a request succeeds is the rules: a small file that Firebase evaluates on its own servers for every read and write. Hiding a button in your interface protects nothing. Someone can open the browser console, paste your config into a few lines of code, and query any collection by name. If the rules allow it, they get the data.
So the question for every collection is not "does my app ever show this?" It is "what happens when a stranger asks for it directly?"
## How do I find open rules in my project?
Open firestore.rules and storage.rules, or the Rules tab in the Firebase console, and search for three patterns.
### The fully open rule
allow read, write: if true gives the whole internet access. It sometimes sits under a catch-all path, match /{document=**}, which applies to every document in the database.
### Test mode
When you create a database in test mode, Firebase writes a rule that allows everything until a date about 30 days out: allow read, write: if request.time < timestamp.date(...). Two bad outcomes follow. Before the date, your data is public. After the date, every request is denied and the live app suddenly stops working. Firebase emails warnings about both. Many founders push the date forward to make the app work again, which reopens the hole.
### Signed-in is not the same as allowed
allow read, write: if request.auth != null looks like security. It means any signed-in user can read and change every document, including other people's. Since anyone can create an account in your app, it is one sign-up away from open.
One more behavior to know: rules are additive. If any matching rule allows a request, it is allowed. A careful rule on /users/{userId} is undone by a leftover catch-all that allows everything, so delete the broad rules and do not just add narrow ones beside them.
> Check which rules are actually live in the console, not only the file in your repository. A rules file that was edited but never deployed protects nothing.
## How do I restrict documents to the user who owns them?
Compare request.auth.uid with the owner on every read and write, and check it on create as well as update.
### Two common layouts
If the document ID is the user ID, as in /users/{userId}, the rule is: allow read, write: if request.auth != null && request.auth.uid == userId.
If documents carry an owner field, as in /orders/{orderId} with a userId field, compare against the stored data: allow read: if request.auth.uid == resource.data.userId.
### Create needs its own check
On create there is no existing document, so check the incoming data: request.resource.data.userId == request.auth.uid. Without it, a user can create an order that belongs to someone else. On update, also require that the owner field does not change.
### Rules are not filters
Firestore will not quietly return only the documents a user may see. If a query could include documents the rules forbid, the whole query fails with "Missing or insufficient permissions". A query for all orders fails. A query for orders where userId equals the current user's ID succeeds. If your app starts throwing permission errors after you tighten the rules, the queries need a matching where clause.
### Subcollections
A rule on /users/{userId} does not cover /users/{userId}/notes. Write a match for each subcollection.
## How do I stop users editing their own role, plan or balance?
Split write into create, update and delete, and list exactly which fields each one may touch.
Ownership is half of it. If a user owns their profile document and the rule says the owner may write, the owner can write anything, including role: 'admin' or plan: 'pro' or credits: 99999. They do not need your interface to do it.
The tools inside rules:
- On update, allow only named fields to change: request.resource.data.diff(resource.data).affectedKeys().hasOnly(['displayName', 'photoURL'])
- On create, allow only known keys: request.resource.data.keys().hasOnly([...])
- Check types and sizes: request.resource.data.title is string, and request.resource.data.title.size() <= 200
- Check that numbers fall in a sensible range, and that references point at documents the user may use
The cleaner design is to keep sensitive fields out of user-writable documents entirely. Put role, plan, subscription status and balances in a document, or in custom claims, that only the server writes. Then the user's profile rule can be simple, because nothing in that document matters to security.
Also decide deliberately who may delete. Many apps should not let a user delete an order or an invoice at all.
## Which actions belong on the server instead of the browser?
Role changes, payments, refunds, credits and anything that touches more than one user's data should run on the server with the Admin SDK.
The Admin SDK bypasses security rules. That is safe on code you control, such as a Next.js route handler, a server action or a Cloud Function, and unsafe anywhere else. The pattern is:
- The browser sends the user's ID token with the request
- The server verifies the token with the Admin SDK and reads the user's ID and claims from it
- The server checks whether this user may do this action
- The server performs the write
Typical server-side work includes setting a user's role, marking a subscription active after a Stripe webhook, granting credits, approving an application, and sending a notification to another user.
Two mistakes I find often in AI-built apps. The first is the service account key placed in a variable with the NEXT_PUBLIC_ prefix, which publishes full admin access to the world. That key belongs in a server-only environment variable. The second is a server route that performs an admin write without verifying the caller's token, which is an open rule with extra steps.
## How do roles work in security rules?
Store the role where users cannot write it, then have the rules read it from a custom claim or from a server-written document.
### Custom claims
The server sets a claim with the Admin SDK, and rules read it as request.auth.token.role == 'admin'. Claims cost nothing to read and cannot be edited by the user. The catch is that a changed claim takes effect when the user's token refreshes, so a role change is not instant unless you force a refresh.
### Role documents
Rules can look up another document with get(), for example reading the role field from the user's own document under /users. This updates instantly, but each lookup is billed as a read, and the role document must itself be locked against user writes.
On Guardian MindCare, a therapy practice platform I built on Firebase, there are five roles: therapists, supervisors, trainees, clients and admins. The permissions are set so each role sees only what it should, and that is only possible because the role is something the user cannot change.
![Guardian MindCare: a therapy practice platform I built with role-based portals for therapists, supervisors, trainees, clients and admins.](/work/fiverr/guardian.jpg)
With several roles, write the rules per collection as short sentences first: "a client reads only their own appointments, a therapist reads appointments where they are the therapist, an admin reads all." Then translate each sentence into a rule. It is much easier to review English than rule syntax.
## How do I secure Firebase Storage uploads?
Give Storage its own rules: put private files under a path that contains the user ID, check that ID, and limit size and file type.
Storage rules live in a separate file, storage.rules, and are forgotten more often than Firestore rules. The same open patterns apply, so search for them there too.
A working layout:
- Private uploads under /users/{userId}/, with read and write allowed only when request.auth.uid == userId
- A size limit on write: request.resource.size < 5 * 1024 * 1024 for five megabytes
- A type limit: request.resource.contentType.matches('image/.*') for images only
- Public assets such as product photos in a separate folder with public read and no client write
Without a size limit, anyone with an account can fill your bucket and you pay for the storage and the downloads. Without a type limit, your bucket can end up hosting files you never intended to serve.
Remember that download URLs containing a token work for anyone who has the link, regardless of rules. For sensitive documents, do not store those URLs in places other users can read.
## How do I test rules before launch?
Try every collection as three people: the owner, a different signed-in user, and a signed-out visitor.
### Rules Playground
In the Firebase console, the Rules tab has a Playground. Choose get, list, create, update or delete, enter a document path, switch authentication on or off, set a user ID, and run it. It shows whether the request is allowed and which line decided.
### The emulator
For anything beyond a few checks, run firebase emulators:start and point your app at the local emulator. You can sign in as test users and try real flows without touching production data. The rules unit testing library lets you write these checks as automated tests.
### A worked test
Create two accounts, A and B. Signed in as B, try to read A's profile, list all orders, update A's order, and set your own role to admin. Signed out, try to read anything. Every one of those should fail. Then, as A, confirm your own reads and writes still work. When it all passes, deploy with firebase deploy --only firestore:rules,storage and confirm the console shows the new version.
The final checklist:
- No rule allows everyone to read or write, and no test-mode date remains
- No rule relies on sign-in alone
- Every user document checks ownership on read, create and update
- Users cannot edit their own role, plan or balance
- Admin actions run server-side behind a verified token
- Storage paths are checked by user ID, with size and type limits
- Rules tested as a second user and as a signed-out visitor
If you would rather have someone else do this pass, I review and fix Firebase rules as part of my work on AI-built apps. A single rules problem is a Quick Fix from $60, and a full pre-launch pass with auth, payments and deployment is the Finish and Launch package from $600.
## Which Firebase best practices matter beyond security rules?
Rules come first, but Google's own Firebase launch checklist adds a few project settings that take minutes and prevent the next most common disasters.
- Separate projects. The checklist recommends different Firebase projects for development, testing and production. Testing a migration against live data is how real records get deleted.
- Budget alerts. Set them in the Google Cloud console before launch. The checklist is clear that alerts are not budget caps, so a runaway loop can still spend money; alerts just tell you quickly.
- App Check. Turn it on and move to enforcing for every service that supports it, so requests must come from your real app rather than a script using your config.
- Restricted API keys. Limit each key to the APIs it actually needs.
- Unused sign-in providers. Disable any you do not use, especially anonymous auth, and add only your production domains to the authorized domains list.
- More than one owner. If the only owner account belongs to a contractor who disappears, so does your access.
None of these replaces correct rules. App Check stops casual abuse of your config, but a determined attacker with a valid session is still limited only by what the rules allow.
## The bottom line
Your Firebase config is public, so your rules are your security. Remove every open and test-mode rule, tie each document to its owner, name the fields users may change, move anything sensitive to server code using the Admin SDK, give Storage the same care as Firestore, and test as someone who should be refused. An afternoon spent here is far cheaper than explaining a data leak to your first customers.`,
  },
  {
    slug: 'vibe-coding-vs-hiring-a-developer',
    title: 'Vibe coding vs hiring a developer: what makes sense for your app?',
    description: 'When building with AI tools like Lovable, Bolt or Cursor is enough, when to bring in a developer, and how to combine both without wasting money.',
    date: d,
    updated: '2026-11-17',
    keywords: ['vibe coding vs developer', 'should I hire a developer', 'AI app builder or developer', 'Lovable vs hiring developer'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Vibe coding is great for prototypes, internal tools and testing an idea quickly. Bring in a developer before real users, real data or real money touch the app, because security, payments and reliability are where AI-built apps most often fail.',
    faqs: [
      { q: 'Can I launch an app built only with AI tools?', a: 'You can, but have the auth, database rules and payments reviewed first; those are where most AI-built apps break.' },
      { q: 'Is hiring a developer after vibe coding a waste?', a: 'No. A working prototype makes the developer faster because the product decisions are already visible.' },
      { q: 'When does it make sense to rebuild instead of fix?', a: 'Rarely; only when the structure cannot support the product, and a developer should show you the cost comparison.' },
      { q: 'How much does it cost to have a developer fix a vibe-coded app?', a: 'Thomas Osayi fixes a single issue from $60, several fixes plus a feature from $200, and takes a stuck app to a production launch from $600.' },
      { q: 'Can I keep using AI tools after a developer has worked on my app?', a: 'Yes. A cleaned-up codebase with clear structure is easier for AI tools to extend, as long as changes go through git so they can be reviewed and undone.' },
      { q: 'What should I give a developer who is taking over my AI-built app?', a: 'Access to the code in GitHub and to the hosting and database projects, plus a short list of what is broken and what the app must do at launch.' },
    ],
    takeaways: [
      'Vibe coding is the right tool for prototypes, internal tools and testing an idea, where speed matters and mistakes are cheap.',
      'AI-built apps most often fail at security rules, payments, real data volumes and the loop where each prompted fix breaks something else.',
      'Bring in a developer before real users, real data or real money touch the app.',
      'A working prototype makes a developer faster and cheaper, because the product decisions are already visible.',
      'Fixing what exists is usually far less work than starting over, and a rebuild should come with a cost comparison.',
    ],
    body: `AI app builders changed who can make software. They did not remove the need for someone to own the hard parts.
I work on both sides of this. I use AI tools in my own development, and a large part of my freelance work is taking over apps that founders started in Lovable, Bolt, v0, Replit, Cursor, Windsurf or Claude and got stuck on. So this is not an argument for one side. It is a practical account of what each approach is good for, where the line sits, and how to spend the least money getting a real product live.
## What is vibe coding actually good at?
It is very good at getting from an idea to something you can click, in hours instead of weeks, as long as nothing serious depends on the result yet.
Vibe coding means describing what you want in plain language and letting an AI tool write the code, usually without reading most of it. That works well for:
- Testing whether an idea is worth building at all
- Clickable prototypes to show investors, partners or early users
- Internal tools used by a few trusted people
- Landing pages and simple sites
- Trying three versions of a screen before choosing one
What these have in common is that speed matters most and mistakes are cheap. If a prototype leaks its test data, nothing is lost. If an internal tool has a bug, the three people using it tell you at lunch.
There is a second benefit people underrate. Building the prototype yourself forces the product decisions: what the first screen is, what a user can do, what you charge for. Those decisions are the slow part of any software project, and you have made them before paying anyone.
## Where do AI-built apps usually break?
They break in the parts you cannot see by clicking around: security, payments, behavior under real data, and long-term maintainability.
### Security
The app has a login screen, so it feels secure. Underneath, the database rules may allow any signed-in user to read every record, or the admin page may be hidden in the menu but open to anyone who types the URL. AI tools optimize for the app working in the preview, and an open database always works. Nothing on screen tells you the difference.
### Payments
A checkout button that opens Stripe is the easy tenth of the job. The rest is webhooks that mark the account as paid, subscriptions that renew, cards that fail, cancellations, refunds, and making sure a user cannot unlock the paid plan by editing a field. Generated code often handles the happy path once and nothing else.
### Scale
Code that loads an entire collection and filters it in the browser is fine with 20 test records. With several thousand real ones it is slow and costs money on every page view. The same goes for missing pagination, images stored at full size, and queries that run again on every keystroke.
### The prompt loop
Past a certain size, each prompt that fixes one thing breaks another. The tool no longer holds the whole codebase in view, so it duplicates components, leaves old versions in place and patches symptoms. You notice it when you have asked for the same fix three times, and when you are afraid to request changes because the last one took a day to recover from.
## How do I know it is time to bring in a developer?
Bring one in before real users, real data or real money touch the app, or sooner if you are stuck in the loop.
Concrete signals:
- You are about to collect personal information, health details or payment from people you do not know
- You are about to charge money, especially on a subscription
- The build fails on deploy and the AI tool's fixes keep failing differently
- The same bug has come back after being "fixed" more than twice
- You cannot explain where user data is stored or who can read it
- A customer, partner or investor has asked about security
- You have spent more hours prompting around one problem than the feature took to create
The cost of waiting is not symmetrical. Bringing a developer in a week early costs a small review fee. Bringing one in after a data leak or a round of wrong charges costs refunds, apologies and sometimes the business.
> Before you launch, create a second account in your own app and try to see the first account's data by changing IDs in the URL. If you can, so can a stranger, and that is the first thing to get fixed.
## What does a production app need that a prototype does not?
It needs the unglamorous systems around the features: access control, payment handling, error handling, backups, monitoring and a deploy process you can repeat.
I know this list from the inside, because I founded and built SQWAD, a SaaS platform that Shopify brands use to run creator programs. The visible product is a branded portal where creators apply, receive product, submit content and get paid. Under it sit the parts nobody demos: who is allowed to see which brand's data, how payouts are recorded, and how every Meta ad is traced back to the creator whose content made the sale. SQWAD now tracks more than $500K in creator-driven sales, and none of that would be trustworthy if those parts were approximate.
![SQWAD: my own SaaS platform for Shopify brands running creator programs, built with Next.js, TypeScript, Firebase and Stripe.](/work/fiverr/sqwad.jpg)
For a typical first product, the production checklist looks like this:
- Database rules or server checks so each user reads and writes only their own data
- Roles enforced on the server, not just hidden in the interface
- Secrets in server-only environment variables, never in browser code
- Payment webhooks verified and handled for success, failure and cancellation
- Input validation on every form and API route
- Sensible error states instead of blank screens
- A production deploy on your own domain, from a repository you own
- A way to see errors when they happen to real users
A prototype can skip all eight. A product cannot skip any.
## Can I combine vibe coding with a developer?
Yes, and for most founders it is the cheapest route: you build the prototype, a developer hardens it, and you keep prompting afterward on a codebase that can take it.
The sequence I recommend:
- Build the prototype yourself and put it in front of a few real people
- Use what you learn to decide what the first version must do, and cut the rest
- Bring in a developer to review security, wire payments properly, clean up the structure and deploy
- Keep adding features with AI tools afterward, with changes going through git so each one can be reviewed and undone
The handoff goes faster if you prepare three things: the code in a GitHub repository, access to the hosting and database projects, and a short written list of what is broken and what the app must do on launch day. That is enough for me to start. I do not need a specification document.
Is hiring a developer after vibe coding a waste of the earlier work? No. A working prototype makes the developer faster, because the screens, the flows and the data are already visible. I keep what works and fix what does not.
## What does it cost to fix an AI-built app?
My fixed-price packages start at $60 for a single fix, $200 for several fixes plus a feature, and $600 to take a stuck app all the way to launch.
- Quick Fix, from $60, about 2 days: one bug or error fixed and explained
- Fix Plus Features, from $200, about 5 days: several fixes plus a feature or integration added
- Finish and Launch, from $600, about 10 days: the app taken from stuck to live in production
Each one ends with a short write-up of what was wrong and what changed, so you understand your own app better afterward.
For comparison, building with me from nothing starts at $250 for an MVP Starter covering one core workflow in about 7 days, $1,200 for a SaaS MVP with auth, dashboard, database and payments in about 21 days, and $3,000 for a full multi-role platform in about 45 days. If you already have a working prototype of the right product, fixing and finishing it is usually far less than starting over.
The costs outside any developer's fee are small at the start. Hosting on Vercel and a database on Firebase or Supabase both have free tiers that cover most early products, and Stripe charges per transaction.
## Should I fix the app I have or rebuild it?
Fix it in almost every case, and rebuild only when the structure cannot support the product.
A rebuild is justified when the data model is wrong at the root, for example a multi-company product where every record was stored without any link to a company, or when the app was built on a platform that cannot do something the product requires. It is not justified because the code is untidy or because it was written by an AI. Untidy code that works can be cleaned up one area at a time.
If a developer recommends a rebuild, ask for the comparison: what fixing would cost, what rebuilding would cost, and what specifically cannot be fixed. A clear answer to the third question is the test.
A worked example. A founder builds a booking tool for fitness studios in Lovable. It works in the preview, the build fails on deploy, the Firestore rules are in test mode, and Stripe checkout opens but nothing records the payment. None of that needs a rebuild. It is a build fix, a rules rewrite with ownership checks, a webhook and a deploy, which is Finish and Launch work. The screens and the booking logic the founder built stay as they are.
## The bottom line
Use AI tools for what they do best: getting an idea on screen quickly and cheaply. Then apply a simple rule. If losing the data or charging someone wrong would hurt your business, have a developer look before launch. Build the prototype yourself, have the security, payments and deployment done properly, and keep prompting on top of a foundation that holds.`,
  },
  {
    slug: 'questions-to-ask-before-hiring-a-web-developer',
    title: '10 questions to ask before hiring a web developer',
    description: 'The questions that reveal whether a web developer is the right fit: ownership, process, pricing, timelines and what happens after launch.',
    date: d,
    updated: '2026-11-17',
    keywords: ['questions to ask a web developer', 'how to hire a web developer', 'hiring a freelance developer'],
    service: 'nextjs-website-development',
    shortAnswer: 'Ask who owns the code and accounts, what exactly the price includes, how many revision rounds you get, how long it will take, which platform they build on and why, how you will edit content later, and what support looks like after launch.',
    faqs: [
      { q: 'What is the most important question to ask a web developer?', a: 'Who will own the code, domain and hosting accounts; the answer should be you.' },
      { q: 'Should I pay the full price upfront?', a: 'Splitting payment into a deposit and milestones protects both sides.' },
      { q: 'How do I compare quotes?', a: 'Compare what each includes, such as pages, features, revisions and support, not just the total.' },
      { q: 'What are the red flags when hiring a web developer?', a: 'Vague answers about ownership, a price with no written scope, no live examples you can visit, and a domain or hosting account registered in the developer\'s name.' },
      { q: 'What should I prepare before contacting a web developer?', a: 'One sentence on what the site is for, a list of pages or features, two or three sites you like, and your logo, photos and current copy if you have them.' },
      { q: 'How long does a small business website take to build?', a: 'Thomas Osayi builds a one-page site in about 7 days, a site of up to 5 pages in about 14 days and a full custom build in about 21 days once content is ready.' },
    ],
    takeaways: [
      'The first question is who owns the code, domain and hosting accounts, and the answer should be you.',
      'A price means nothing without a written scope listing pages, features, revision rounds and what counts as extra work.',
      'Ask for a live preview link during the build so you can react to real pages on your own phone.',
      'Find out how you will change text and photos after launch before the site is built, not after.',
      'Judge a developer by live sites similar to what you need, tested on a phone, not by screenshots.',
    ],
    body: `Most bad website projects do not fail because the developer could not code. They fail because two people had different pictures of the job: what was included, who would own it, when it would be done, and what happens afterward. Ten questions asked before you sign will surface nearly all of that.
A good developer will be glad you asked these. Vague answers are a warning sign. I have grouped the ten by topic, with what a solid answer sounds like and how I answer each one for my own clients, so you have something to compare against.
## Why do these questions matter before I hire anyone?
Because a website project is a small contract with a lot of unstated assumptions, and each question turns one assumption into something written down.
You are probably not in a position to judge code quality, and you do not need to be. What you can judge is whether a developer answers plainly, puts the answers in writing and has done similar work before. Those three things predict how the project will go far better than a polished portfolio page.
Use the questions the same way with every candidate. Send them by email so the answers are on record, or ask on a call and follow up with a summary: "Just confirming what we discussed." Then compare the answers side by side. The differences between candidates will be obvious in a way they never are from price alone.
One note on tone. None of this is adversarial. Clear answers protect the developer as much as you, because unclear scope is how developers end up doing unpaid work and clients end up disappointed.
## Who will own the code, the domain and the accounts?
You should, and this is the most important thing to settle, because it decides whether you can ever leave.
### Question 1: who owns the code, domain and hosting accounts?
The right answer is that all three are in your name, or are transferred to you at launch. The domain matters most. If the developer registers it under their own account and later stops replying, you may not be able to move your site or even renew your address. Register the domain yourself and give the developer access. Do the same for hosting, analytics and your Google Business Profile.
### Question 2: where will the code live?
Your own GitHub account is ideal, with the developer added as a collaborator. If the site is built on a hosted builder, ask whether it can be exported, and understand that with most builders the answer is no: the site lives only on that platform.
How I answer: you own it. The code lives in your GitHub and the site runs in your own cloud accounts. I deploy on Vercel and connect your domain, and hosting is free or close to it for most small business sites.
> Ask for the logins or owner access to every account on launch day, and check that each one works before you make the final payment.
## What exactly does the price include?
A real answer is a written list, and a quote without one is a guess.
### Question 3: what exactly does the price include?
Ask about each of these by name:
- How many pages, and which ones
- Features such as booking, ordering, quote forms or payments
- Copywriting, or whether you supply all the text
- Photos and images, and who pays for any stock licenses
- SEO setup: page titles, descriptions, sitemap and schema markup
- Mobile layout and testing on real phones
- Connecting the domain and setting up analytics
- Third-party fees such as a booking service subscription or a paid plugin
### Question 4: how many revision rounds are included, and what does extra work cost?
A round means you collect all your feedback and send it at once, and the developer applies it. Ask how many rounds there are, and how a request outside the original list is priced: hourly, or as a quoted add-on. "Unlimited revisions" sounds generous and often means the scope was never defined.
### Question 5: how is payment split?
A deposit plus milestones is common and protects both sides. Paying everything upfront leaves you with no leverage, and paying nothing until the end leaves the developer with none.
How I answer: my packages are fixed price with the scope stated. A Starter Site is from $150, a Business Site of up to 5 pages with a booking or quote form and local SEO setup is from $450, and a Full Custom Build with custom features, a CMS or admin tools is from $1,200.
## How long will it take, and how will I see progress?
You should get a date, a list of what the developer needs from you to hit it, and a link where you can watch the site take shape.
### Question 6: how long will it take, and what do you need from me?
The second half of that question matters more than the first. Most late projects are waiting on the client: a logo file, the final price list, photos, a decision between two options. Ask for a list of everything you must supply and the date each item is needed. Then ask what happens to the deadline if you are late with something, so nobody is surprised.
My timelines are 7 days for a Starter Site, 14 days for a Business Site and 21 days for a Full Custom Build, counted from when I have the content.
### Question 7: will I see progress along the way?
A live preview link is best: a private web address where the unfinished site updates as work is done. You can open it on your own phone, tap through it, and react to real pages. A screenshot of a design hides how the site behaves, how fast it loads and how it looks on a small screen.
Be wary of a process where you see nothing until the day before launch. Problems found at that point are expensive to change. Also ask how often you will get an update and where: email, text or a shared thread.
## Which platform will you use, and how will I edit the site later?
The platform should be chosen for your needs, with reasons, and you should know before the build starts how a price or a photo gets changed.
### Question 8: which platform will you use, and why?
The answer should fit your situation, not just the developer's habit. Listen for reasons tied to you: speed, the features you need, how often you will edit, what it costs each month. Follow up with:
- What will this cost me monthly after launch, including hosting and any licenses?
- What do I have to keep updated, and who does that?
- If you became unavailable, could another developer take this over?
I build in Next.js and TypeScript, deployed on Vercel, because the sites are fast, there are no plugins to update or break, and the result is fully custom. That is my answer. For a business that wants to drag and drop its own layouts every week, a hosted builder can be the better fit, and a developer should be willing to say so.
### Question 9: how will I update text and photos after launch?
Get a specific answer: a login and an editor, a simple admin screen, or a request sent to the developer. If it is a request, ask what it costs and how quickly it is done. On my builds, copy lives in one place, and on larger builds I add a simple admin or CMS so you can change text and photos without code.
## What happens after launch?
There should be a stated answer for bugs, for changes and for emergencies, agreed before launch and not improvised after it.
### Question 10: what happens if something breaks next month?
Break this into parts:
- Is there a period after launch when bugs are fixed at no charge, and how long is it?
- What counts as a bug, and what counts as a new request?
- How do I reach you, and how fast do you usually reply?
- Is there an ongoing maintenance option, and what does it cover?
- Who renews the domain and watches the hosting?
A bug is the site not doing what was agreed. A new request is anything else. Agreeing on that difference early prevents the most common argument after launch.
Ask also what you will receive at handover: the account logins, a short guide to editing, and a note of which services the site depends on. For my clients, ongoing fixes and features are available after the first project.
## How do I check a developer's real work?
Visit live sites they built, on your phone, and try to do what a customer would do.
Ask for links, not just screenshots. Then on each site:
- Load it on mobile data and notice how long the first screen takes
- Tap through the menu and every main button
- Fill in the contact or booking form as far as the last step
- Look for the things your own site needs, such as a menu, a booking flow or a quote form
- Check whether the site is still live and current
Most of all, check that the developer has built something similar to what you need. A beautiful portfolio of landing pages says little about whether they can build an ordering system. If your business runs on quote requests, look for a quote tool. One of mine is the site for Artistic Printing, a commercial printer, where I built quote intake and management so every request arrives with the specs the shop needs.
![Artistic Printing: a website and quote management tool I built for a commercial printer.](/work/fiverr/artistic.jpg)
If you can, ask one past client two things: did the project finish on the date agreed, and are they able to make changes on their own?
## How do I compare quotes and spot red flags?
Compare what each quote includes line by line, because two totals rarely describe the same job.
A worked example. Quote A covers five pages, a booking form, two revision rounds, SEO setup, and the domain and hosting in your name. Quote B is lower and says "website design and development." B might be the better deal, or it might leave out the booking form, charge for every change and keep the hosting account. You cannot know until B is written out the same way as A, so ask for that before deciding.
Red flags worth acting on:
- The domain or hosting will be registered in the developer's name
- No written scope, or a refusal to put answers in an email
- No live examples you can visit
- A monthly fee you must keep paying for the site to exist, with no way to take it with you
- Pressure to pay in full before any work is shown
- A promised ranking position on Google, which nobody controls
- An instant yes to everything, with no questions about your business
The last one is easy to miss. A developer who asks you nothing about your customers is going to build a generic site.
## The bottom line
Ask who owns the code and accounts, what the price includes, how many revision rounds you get, how payment is split, how long it takes and what you must supply, how you will see progress, which platform and why, how you will edit later, and what happens after launch. Get the answers in writing, look at live work on your phone, and choose the developer whose answers were specific. Clear answers before the project are the best predictor of a calm project.`,
  },
  {
    slug: 'website-accessibility-basics-small-business',
    title: 'Website accessibility basics for small businesses',
    description: 'What website accessibility means, why it matters for customers and legal risk, and the practical fixes that cover most small business sites.',
    date: d,
    updated: '2026-11-17',
    keywords: ['website accessibility small business', 'ADA website compliance', 'WCAG basics', 'accessible website checklist'],
    service: 'nextjs-website-development',
    shortAnswer: 'An accessible website can be used by people with visual, hearing, motor or cognitive disabilities. For most small business sites, the core fixes are readable color contrast, alt text on images, proper headings, labeled form fields, keyboard navigation and captions on videos. WCAG 2.1 AA is the most common benchmark.',
    faqs: [
      { q: 'Is website accessibility legally required?', a: 'Rules vary by country and type of organization, and in the US website accessibility lawsuits against businesses are common; ask a lawyer about your situation.' },
      { q: 'Do accessibility overlay widgets make a site compliant?', a: 'No widget fixes underlying problems in the code, and many accessibility experts advise against relying on them.' },
      { q: 'What is WCAG?', a: 'The Web Content Accessibility Guidelines, published by the W3C, which define testable accessibility criteria at levels A, AA and AAA.' },
      { q: 'What color contrast ratio does WCAG AA require?', a: 'At least 4.5 to 1 for normal text and 3 to 1 for large text, which means roughly 24 pixels or larger, or 19 pixels and bold.' },
      { q: 'How can I test my website for accessibility for free?', a: 'Use the site with only the keyboard, run WAVE or the Lighthouse accessibility audit, zoom to 200 percent, and try a page with a built-in screen reader such as VoiceOver.' },
      { q: 'Does accessibility help SEO?', a: 'Indirectly, yes: alt text, ordered headings and descriptive link text make a page easier for search engines to understand as well as for people.' },
    ],
    takeaways: [
      'An accessible site is one that people with visual, hearing, motor or cognitive disabilities can read, navigate and complete tasks on.',
      'Contrast, alt text, ordered headings, labeled forms, keyboard access and captions cover most problems on small business sites.',
      'WCAG 2.1 AA is the benchmark most often used, with a contrast ratio of 4.5 to 1 for normal text.',
      'Automated checkers find only some issues, so also test with the keyboard alone and at 200 percent zoom.',
      'Overlay widgets do not change the underlying code, so the fixes have to be made in the site itself.',
    ],
    body: `Accessibility is about making sure every customer can read your site, use your forms and book with you. It also tends to improve the site for everyone.
Owners usually meet the topic through a worrying email about lawsuits or a sales pitch for a widget. Both make it sound more mysterious than it is. For a typical small business site, accessibility comes down to a short list of concrete things in the design and the code, most of which you can check yourself in half an hour. This article goes through that list. It is general information, not legal advice.
## What does website accessibility actually mean?
It means people with disabilities can perceive what is on your site, move around it, and finish what they came to do.
It helps to picture how different people use the same page:
- Someone who is blind uses a screen reader, software that reads the page aloud and jumps between headings, links and form fields
- Someone with low vision zooms the page to 200 percent or more, or needs strong contrast between text and background
- Someone who cannot use a mouse moves through the page with the Tab key, a switch device or voice commands
- Someone who is deaf or hard of hearing relies on captions for video
- Someone with a cognitive or learning disability needs plain wording, consistent layout and clear error messages
The standard that turns this into testable criteria is WCAG, the Web Content Accessibility Guidelines, published by the W3C. It has three levels: A, AA and AAA. WCAG 2.1 at level AA is the most common benchmark, and it is what people usually mean when they say a site should be "accessible". WCAG 2.2 is the newer version and adds a few criteria, such as a minimum size for tap targets.
## Why does accessibility matter for a small business?
Because inaccessible sites turn away paying customers, and because the same fixes make the site better for everybody else.
A meaningful share of people live with some form of disability. Many more have temporary or situational limits: a broken arm, a phone screen in bright sunlight, a video watched without sound in a waiting room, tired eyes at the end of a day. A site that works for a screen reader user and a keyboard user also works for the person holding a coffee in one hand.
There is a direct business effect too. If a visitor cannot read your gray-on-white prices, cannot tell which form field has the error, or cannot reach the Book button without a mouse, they leave. You never see that lost booking, because nothing in your analytics labels it.
Accessible sites also tend to be clearer and better structured, which helps search engines. Alt text tells Google what an image shows. Headings in order show how the page is organized. Link text that says where it goes describes the destination page. None of this is done for ranking, but it is the same work.
## Is my small business website legally required to be accessible?
It depends on your country and the kind of organization, so ask a lawyer about your situation, but in the United States the risk for businesses is real.
In the US, the Americans with Disabilities Act covers businesses open to the public, and the Department of Justice has said that this applies to their websites. Website accessibility lawsuits and demand letters against businesses are common, including against small ones. The regulations for private businesses do not name one technical standard, but WCAG 2.1 AA is the benchmark that settlements and guidance most often point to, and it is the standard the Department of Justice adopted in its 2024 rule for state and local government websites.
Other places have their own laws, and many of them also refer to WCAG.
Two practical points. First, there is no certificate that makes a site "compliant" forever. Accessibility is a property of the site as it is today, and it changes when you add a page or a video. Second, the sensible position for a small business is to fix the known problems, keep a note of what you checked and when, and give people a way to tell you if they hit a barrier. An accessibility statement with a contact email is a simple way to do the last part.
## What are the fixes that cover most small business sites?
Six areas account for most problems: contrast, alt text, headings, links, media and forms. The first five are below, and forms get their own section.
### Contrast
Text has to be readable against its background, including text on buttons and on top of photos. WCAG AA asks for a contrast ratio of at least 4.5 to 1 for normal text and 3 to 1 for large text, meaning roughly 24 pixels or larger, or 19 pixels and bold. Light gray body text and white text over a bright photo are the usual failures. A free contrast checker gives you the ratio for any two colors.
### Alt text
Every meaningful image needs a short description in its alt attribute: "Stylist applying wax to a client's forearm", not "image1" and not a string of keywords. Purely decorative images should have an empty alt so screen readers skip them. If an image contains text, such as a flyer with your hours, the alt must include that text, or better, put the text on the page.
### Headings
Use one H1 per page and keep the rest in order, H2 then H3, without skipping levels for the sake of size. Screen reader users navigate by jumping between headings, the way a sighted visitor skims. Choosing a heading level because it looks right breaks that outline.
### Links and buttons
Link text should make sense on its own. "View the service menu" works. "Click here" and "Read more" repeated ten times do not, because a screen reader can list all links on a page out of context.
### Media
Videos need captions, and audio should never start on its own. Avoid content that flashes, and give carousels and animations a way to pause.
> Squint at your homepage or turn your screen brightness down. Anything that disappears, such as pale text, thin fonts or a faint button, is a contrast problem a real customer already has.
## How do I make forms and booking flows accessible?
Give every field a visible label, make errors specific, and make sure the whole flow can be completed with a keyboard.
Forms are where accessibility turns into money, because the contact form or the booking flow is where a visitor becomes a customer. On a site like Astiglow's, a waxing studio site I built with online booking and service packages, the booking flow is the reason most people visit, so it has to work for everyone who arrives.
![Astiglow: a waxing studio website I built with online booking and service packages.](/work/fiverr/astiglow.jpg)
### Labels
Each field needs a label that stays visible and is connected to the input in the code. Placeholder text inside the box is not a label. It vanishes as soon as someone types, it is usually too pale to read, and some screen readers do not announce it.
### Errors
"There was a problem with your submission" helps nobody. Say which field and what to do: "Enter a phone number with 10 digits." Do not rely on a red border alone, since color by itself is invisible to some people. Keep what the visitor already typed.
### Keyboard
Put your mouse aside and press Tab from the top of the page. You should be able to:
- See where you are at every step, through a visible focus outline
- Reach every link, button, menu and field, in an order that follows the page
- Open and close the mobile menu and any pop-up, and press Escape to dismiss it
- Choose a date and time in the booking calendar
- Submit the form with Enter
If focus disappears, or gets trapped inside a pop-up, that is a barrier. The most common cause is a design that removed the browser's focus outline because it looked untidy. Restyle the outline to suit the design. Do not remove it.
### Tap targets
Buttons and links need to be big enough and far enough apart to hit with a thumb. WCAG 2.2 sets a minimum of 24 by 24 CSS pixels, and bigger is better for main actions.
## How do I test my own site?
Combine four quick manual checks with one automated scan, because each finds problems the other misses.
- Keyboard only: tab through your homepage and complete your main form without the mouse
- Zoom: set the browser to 200 percent and check that nothing overlaps, gets cut off or forces sideways scrolling
- Automated scan: run WAVE from WebAIM, or the accessibility audit in Lighthouse, built into Chrome's developer tools
- Screen reader: turn on VoiceOver on a Mac or iPhone, or the free NVDA on Windows, and listen to your homepage and your form
- Phone: check contrast outdoors and try every button with your thumb
The automated tools are good at missing alt text, low contrast, unlabeled fields and skipped heading levels. They cannot tell whether your alt text is accurate, whether the tab order makes sense or whether an error message is understandable. A perfect automated score is a good start. It is not proof.
A worked example. A salon runs WAVE on its booking page and gets three errors: two images with no alt text and a phone field with no label. The keyboard test finds a fourth problem the scan missed: the date picker cannot be reached with Tab at all. That fourth one is the most serious, since it blocks the booking, and only a manual test would have caught it.
Test your five most important pages, write down what you find, and repeat after any redesign or new feature.
## Do accessibility overlay widgets fix the problem?
No, a widget that promises instant compliance does not change the underlying code, and the problems it claims to cover are still there.
Overlays are scripts that add a floating button with options such as larger text or higher contrast, and some try to patch the page automatically. The trouble is that the real barriers sit in the markup: an unlabeled field, a date picker that ignores the keyboard, a heading structure with no order. A script loaded on top cannot reliably repair those. Many accessibility experts advise against relying on overlays, and people who use screen readers already have their own tools set up the way they like.
There are costs too. An overlay is one more third-party script to load, which slows the page, and a monthly fee for something that leaves the cause in place.
Spend that budget on the site itself. Fix the list from your own testing in order of impact: anything that blocks a booking or a contact first, then contrast and labels, then alt text and headings.
## Is it cheaper to fix accessibility or to build it in?
Building it in is cheaper, because most accessibility work is a decision made once in the design and the components, not a repair repeated on every page.
If the brand colors are chosen with contrast in mind, every page passes. If the button, the form field and the menu are built correctly once, every place that uses them inherits it. Retrofitting means finding and correcting each instance, and sometimes changing colors a business has already printed on its signs.
Fixing an existing site is still worthwhile when the structure is sound. Contrast, alt text, labels and headings can usually be corrected without redesigning anything. A rebuild makes more sense when the barriers come from the theme or a third-party widget you cannot change, such as a booking embed that does not work with a keyboard.
Accessibility is cheapest when it is part of the design and build, which is how I build every site. It is not a separate line item. My packages are a Starter Site from $150, a Business Site of up to 5 pages from $450, and a Full Custom Build from $1,200.
## The bottom line
An accessible website is one every customer can read, navigate and book through. Check contrast, alt text, headings, link text, captions and above all your forms. Test with the keyboard, at 200 percent zoom and with a free scanner, fix what blocks a customer first, skip the overlay, and treat WCAG 2.1 AA as the target. Done as part of the build, it costs very little and makes the site better for everyone who uses it.`,
  },
  {
    slug: 'online-booking-for-small-business-websites',
    title: 'Online booking for your website: embed a tool or build it custom?',
    description: 'The options for adding online booking to a small business website, from scheduling links to custom booking systems, with costs and trade-offs.',
    date: d,
    updated: '2026-11-17',
    keywords: ['online booking website', 'add booking to website', 'appointment booking small business', 'custom booking system'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most small businesses should embed the booking tool they already use, because it handles calendars, reminders and payments. Build custom booking only when your rules are unusual, such as multi-resource scheduling, complex pricing or a booking flow that is part of your product.',
    faqs: [
      { q: 'Can a website take bookings without a monthly tool?', a: 'A simple request form that emails you works for low volume, but you confirm each booking by hand.' },
      { q: 'Will an embedded booking widget slow my site?', a: 'It can; loading it only on the booking page or after the main content keeps the rest of the site fast.' },
      { q: 'Can online booking take deposits?', a: 'Yes, most booking tools support deposits, and a custom build can use Stripe.' },
      { q: 'How much does it cost to add booking to a website?', a: 'A request form is part of a normal site build, an embedded tool adds its own monthly subscription, and a custom booking system falls under a Full Custom Build from $1,200.' },
      { q: 'Which booking tool is best for a small business?', a: 'Usually the one your industry already uses, because clients recognize it and it handles reminders, calendar sync and payments.' },
      { q: 'How do I reduce no-shows from online bookings?', a: 'Send a reminder the day before with a reschedule link, and take a deposit or hold a card under a clearly stated cancellation policy.' },
    ],
    takeaways: [
      'There are three ways to take bookings on a website: a request form, an embedded booking tool or a custom booking system.',
      'Most salons, studios, clinics and consultants should embed the tool their industry already uses.',
      'Load the booking widget on one dedicated page so the rest of the site stays fast.',
      'Custom booking is worth building only when a booking depends on rules a standard tool cannot hold.',
      'Put the booking button on every service page, next to the price.',
    ],
    body: `Online booking is one of the most useful things a service business can add to its website. A client who can pick a time at 11pm, without waiting for you to answer the phone, is a client who books with you and not with the next search result.

There are three ways to do it: a request form, an embedded booking tool, or a booking system built into the site. I have built all three for clients, and the right one depends less on budget than on how complicated your scheduling rules are.

## What are the options for adding online booking to a website?
There are three levels, and each one trades cost against how much work it takes off your hands.
- A request form: the visitor picks a service and a preferred time, and you confirm by hand
- An embedded booking tool: a scheduling platform shows live availability and confirms on the spot
- A custom booking system: availability, rules and payments are built into your own site and database
The first level is a feature of the website. The second is a subscription to someone else's software, shown on your site. The third is software you own. Most salons, studios, clinics and consultants belong on the second level, because the tools made for their industry already handle calendar sync, reminders, cancellations and payments. The other two exist for the businesses at either end: the ones with too few bookings to justify a monthly fee, and the ones whose rules no standard tool can express.

## When is a simple request form enough?
A request form is enough when you take a handful of bookings a week and already talk to each customer before the appointment.
The form asks for the service, a preferred date and time, a backup time, name, phone and email. It sends you an email, and the visitor sees a message saying when they will hear back. Nothing is confirmed until you reply.
### What it does well
It costs nothing per month, it works on any site, and it lets you screen requests. Restaurants taking large-party reservations, contractors scheduling estimates and photographers booking shoots often prefer this, because every booking needs a short conversation anyway.
### Where it breaks
- Two people can ask for the same slot, and one of them gets a disappointing reply
- Every request waits on you, so one sent on Saturday night may sit until Monday
- There are no automatic reminders, so no-shows are more likely
- Nothing lands in your calendar unless you put it there
The fix for most of this is wording. Call the button "Request a time", not "Book now", and say on the confirmation screen exactly when you will reply. A form that promises a confirmed booking and then delivers an email thread loses trust.
New York Nook, a restaurant site I built in Hollywood, takes this approach for tables: guests send a reservation request from their phone and the restaurant confirms it.
![New York Nook: a restaurant site I built with reservation requests and pickup ordering.](/work/fiverr/newyorknook.jpg)

## Which booking tool should a small business embed?
Embed the tool your industry already uses, because your clients have probably booked through it before and your staff may already know it.
### Tools by type of business
- Consultants, coaches and sales calls: Calendly, Cal.com, or the booking pages built into Google Calendar and Microsoft 365
- Salons, barbers, waxing and lash studios: Square Appointments, Vagaro, Fresha, Booksy or GlossGenius
- Fitness studios and classes: Mindbody
- Restaurants: OpenTable, Resy or Tock
- Therapy and health practices: SimplePractice or Jane, which also handle intake forms and records
### What to check before you commit
- Does it sync both ways with the calendar you actually live in?
- Does it send text reminders, and are those included or charged per message?
- Can it take a deposit or hold a card?
- Can you export your client list if you leave?
- Does it charge per staff member, per booking, or take a cut of bookings from new clients it sends you?
That last point matters. Some marketplace-style tools charge a commission on the first visit of a new client they bring you. That can be a fair deal, but you should know about it before your regulars start booking through the same tool.
### Link, button or inline embed
There are three ways to connect the tool to the site. A plain link opens the tool's page in a new tab. A pop-up button opens the scheduler over your page. An inline embed places it inside your page. I usually put an inline embed on a dedicated booking page and use plain buttons everywhere else that lead to it. The visitor stays on your domain, and the heavy script loads on one page only.

## How do I keep a booking widget from slowing down the site?
Load the widget only where it is used, and only when the visitor is about to use it.
Booking widgets are third-party scripts, often with their own fonts and styles. Put one in the header of every page and the whole site pays for it, including in Core Web Vitals, which Google uses as a ranking signal.
What I do on a Next.js site:
- Keep the widget on a single /book page, not the homepage
- Load its script with the lazyOnload strategy of the Next.js Script component, or only after the visitor clicks the booking button
- Reserve the space with a fixed minimum height, so the page does not jump when the calendar appears
- Show a plain "Book by phone" link next to it, in case the script is blocked or fails
> Open your booking page on a phone using mobile data, not office wifi. If the calendar takes more than a few seconds to appear, many first-time visitors will never see it.

## When does a custom booking system make sense?
Build custom when a booking depends on rules that standard tools cannot hold, or when booking is the product you sell.
Signs you are there:
- One booking needs several things free at once, such as a room, a staff member and a piece of equipment
- Price depends on many options: size, add-ons, travel distance, time of week
- Jobs vary in length and have to be routed to whoever is nearby and qualified
- Bookings must connect to your own systems, such as invoices, client records or a team calendar
- You are paying for workarounds, like staff re-entering bookings from one tool into another
FieldOps is an example from my own work: a job scheduling app for field teams that syncs with Outlook Calendar. Assigning jobs to people in the field and keeping each work calendar in step is a different problem from the one a salon scheduler was designed for.
![FieldOps: a job scheduling app I built for field teams, with Outlook Calendar sync.](/work/fieldops.jpg)
### What a custom build has to get right
- Double bookings: two people tapping the same slot at the same second must not both succeed, which means the slot check and the save happen in one database transaction
- Time zones and daylight saving: store times in UTC and display them in the business's zone
- Buffers: travel or cleanup time between appointments
- Calendar sync: pushing confirmed bookings to Google or Outlook, and reading busy times back
- Reminders: email and text, with a link to reschedule
- An admin view: staff need to move, cancel and add bookings by hand
Every one of those comes included in an off-the-shelf tool. That is the real cost of going custom: you rebuild solved problems in order to get the two or three rules you need.

## How much does each option cost?
A request form is the cheapest to build and free to run, an embedded tool has a low build cost and a monthly fee, and custom booking costs the most up front with no per-booking fees.
- Request form: part of a normal site build. My Starter Site, from $150 and about 7 days, includes a contact form, and the Business Site, from $450 and about 14 days, includes a booking or quote form with email notifications.
- Embedded tool: the embed is a small part of a site build. The tool's subscription is separate and paid to the vendor. Plans run from free tiers for one person to monthly fees that grow with staff count, so check the current pricing page for your team size.
- Custom booking: this falls under my Full Custom Build, from $1,200 and about 21 days, and the price rises with the number of rules, calendars and payment steps involved.
Count the running costs too. Text reminders are billed per message by providers such as Twilio. Card payments carry processing fees whichever route you take. A custom system needs occasional maintenance when a calendar API or payment library changes.

## How should deposits, cancellations and no-shows work?
Decide the policy first, write it in one sentence next to the booking button, and let the software enforce it.
Common setups:
- A deposit at booking, taken off the final bill
- A card held on file and charged only for a late cancellation or no-show
- Full prepayment for packages and classes
Most booking tools support at least one of these. In a custom build I use Stripe: either a payment at checkout for the deposit, or a saved card that can be charged later under the policy the client agreed to.
Keep the policy visible and specific. "Cancel or reschedule up to 24 hours before for a full refund of your deposit" is clear. A link to a long terms page is not. Put a reschedule link in every confirmation and reminder, because the easier it is to move an appointment, the fewer people simply fail to show up.
Reminders do most of the work. One email at booking, one message the day before, and one a couple of hours before covers it. If your tool charges for texts, the day-before text is the one worth paying for.

## Where should the booking button go so people actually use it?
Put it wherever someone might decide, which means the header, every service page and the end of every page, not only the contact page.
Astiglow, a waxing studio site I built, pairs the service menu and packages with online booking, so a client can read what a service costs and book it in the same visit.
![Astiglow: a waxing studio site I built with a service menu, packages and online booking.](/work/fiverr/astiglow.jpg)
The details that raise bookings:
- Show prices or starting prices next to each service, so nobody has to book to find out the cost
- Link each service's button straight to that service in the scheduler, not to the top of a generic list
- Ask for the time slot first and contact details second, since people who have chosen a time tend to finish the form
- Keep required fields to name, phone and email, and collect intake details in the confirmation email
- Add a fixed "Book" button on mobile, where most local visitors are
- Offer a phone number beside it for people who prefer to call
Then measure it. Set up a conversion event for completed bookings in your analytics, or at least for clicks on the booking button, so you can see which pages send bookings and which do not.

## What mistakes cost bookings?
The most common mistake is making people work before they can see a time.
- Forcing account creation before showing availability
- Sending every button to a generic scheduler home screen, where the client has to find the service again
- Hiding prices until the last step
- Showing an availability window so long and empty that the business looks quiet, when a few weeks is enough
- Forgetting to block holidays and staff time off, then cancelling on clients
- Letting the booking tool's page become your only web presence, so you own no page that ranks for your services
- Leaving two different tools embedded on different pages after switching vendors
Test the full path yourself once a month, on your phone, as a new client. Book a real appointment, receive the reminder, reschedule it, cancel it. Most problems show up in five minutes this way, long before a client mentions them.

## The bottom line
Start with the tool your industry already uses, embedded on a fast booking page and linked from every service. Use a request form if volume is low and each booking needs a conversation. Move to a custom system only when your rules have clearly outgrown the tool and the workarounds cost more than the build would.`,
  },
  {
    slug: 'homepage-structure-for-service-businesses',
    title: 'What to put on a service business homepage, in order',
    description: 'A proven homepage structure for local and service businesses, section by section, and what each one needs to do.',
    date: d,
    updated: '2026-11-17',
    keywords: ['homepage structure', 'what to put on a homepage', 'service business website layout', 'homepage sections'],
    service: 'nextjs-website-development',
    shortAnswer: 'A service business homepage works best in this order: a headline that says what you do and where, one main call to action, proof such as reviews or results, your main services, how it works, an about section, answers to common questions and a final call to action with contact details.',
    faqs: [
      { q: 'How long should a homepage be?', a: 'Long enough to answer the main questions a new customer has, usually six to eight short sections.' },
      { q: 'Should prices be on the homepage?', a: 'Starting prices or a link to pricing near the services section help visitors self-qualify.' },
      { q: 'How many calls to action should a homepage have?', a: 'One main action repeated in a few places, plus a quieter secondary option.' },
      { q: 'What should the homepage headline say?', a: 'What you do, who it is for and where, in the words a customer would use, followed by one clear button.' },
      { q: 'Where should reviews go on a homepage?', a: 'Directly under the first screen, so the proof arrives before the details of your services.' },
      { q: 'What should be left off a homepage?', a: 'Image sliders, auto-playing video, long mission statements, stock photos and early pop-ups, because each pushes the useful sections further down.' },
    ],
    takeaways: [
      'A homepage should answer a new customer\'s questions in the order they ask them: what is this, can I trust it, how do I start.',
      'The headline says what you do, for whom and where, followed by one main action.',
      'Proof goes directly under the first screen, before the service details.',
      'Each main service gets a short card on the homepage and its own page behind it.',
      'Measure calls, forms and bookings, not visits, and change one thing at a time.',
    ],
    body: `A new visitor gives your homepage a few seconds before deciding whether to stay. In that time they are asking a short list of questions in a predictable order: is this what I need, is it near me, can I trust them, what does it cost, what do I do next. A homepage that answers those in that order does well. One that opens with a slideshow and a mission statement does not.

This is the order I use when I build sites for clinics, studios, restaurants and trades, with what each section has to do.

## What order should the sections of a service business homepage go in?
The order that works is: headline and main action, proof, services, how it works, examples of the work, about, questions, and a final call to action with contact details.
That sequence follows the visitor's own questions. First they need to know they are in the right place. Then they need a reason to believe you. Only after that do they care about the detail of what you offer, how the process goes and who you are. The final section catches the people who read everything and are ready.
- Headline and main action: what you do, for whom, where
- Proof: reviews, ratings, clients or a result
- Services: short cards that link to their own pages
- How it works: three or four steps
- Examples: photos, before and after, short case studies
- About: the people behind the business
- Questions: what you get asked on every call
- Final call to action: the main action again, with phone, address, hours and service area

## What should the headline and first screen say?
The headline should say what you do, who it is for and where, in words a customer would use, followed by one obvious button.
### Writing the headline
A simple pattern works: service, audience or benefit, place. "Emergency plumbing in Pasadena, at your door within the hour." "Physical therapy for runners in Santa Monica." Compare those with "Welcome to our website" or "Excellence in every detail", which could belong to any business in any city.
VenCare is a good example of a first screen with a hard job. The company places wall-mounted epinephrine stations in venues, a product most visitors have never seen, so the site had to explain a new kind of medical device to venue operators and investors within seconds.
![VenCare: a health startup site I built to explain wall-mounted epinephrine stations for venues.](/work/fiverr/vencare.jpg)
### The main action
Pick the one action that starts a sale for your business: book, call, get a quote, order. Make it a button with a specific label. "Book an appointment" beats "Learn more", and "Get a free quote" beats "Submit". Put the same action in the header so it follows the visitor down the page.
### What else belongs on the first screen
- A phone number that is tappable on mobile
- Your city or service area, in text, not only in a logo
- One real photo of your work, your place or your team
- A short trust signal, such as a star rating with the number of reviews
> Show the first screen of your homepage to someone outside your industry for five seconds, then hide it. If they cannot tell you what you do and where, rewrite the headline before touching anything else.

## What kind of proof belongs near the top?
Put your strongest, most specific proof directly under the first screen, because it makes everything below it believable.
Proof comes in several forms, roughly in this order of strength for a local business:
- Reviews with a name, a date and a detail about the job
- An overall rating with a review count from Google or an industry site
- Logos of recognizable clients, for business-to-business work
- A concrete result, such as jobs completed or years in operation
- Licenses, certifications, insurance and memberships
Use real reviews, quoted exactly, and link to the source profile so a doubtful visitor can check. Three good reviews shown in full do more than a carousel of thirty that nobody clicks through. Pick reviews that mention the service and the area, because those answer the visitor's question and also tell search engines what you do.
If you are new and have no reviews, do not invent a section to fill the gap. Use what is true: your license number, your training, a guarantee, photos of work you have done. Then ask your first customers for a review the day the job is finished, when they are happiest.

## How should services be shown on the homepage?
Show your main services as short cards, each with a one-line description and a link to its own page.
The homepage is a summary. Three to six cards is enough, with a "see all services" link if you offer more. Each card needs:
- The name customers use, not your internal name for it
- One sentence on what is included or who it is for
- A starting price or price range, if you share prices
- A link to a full page about that service
The separate pages matter for search. One page per service gives Google a specific page to rank for each thing you do, in a way a single long list cannot. The homepage cards send visitors and search engines to those pages.
On prices: I recommend showing starting prices wherever you can. Visitors who cannot afford you leave without taking your time, and visitors who can are reassured that there will be no surprise. If every job is quoted, say so and say how fast the quote comes back.
Artistic Printing, a commercial printer I built a site for, quotes every job, so the site leads into a structured quote request where clients enter the specs the shop needs.
![Artistic Printing: a commercial printer's site I built with a quote intake and management tool.](/work/fiverr/artistic.jpg)

## Does the homepage need "how it works" and examples of the work?
Yes, because first-time buyers hesitate over the unknown, and these two sections replace the unknown with something they can picture.
### How it works
Three or four numbered steps, from first contact to finished job. For example: request a quote, get a fixed price within a day, we do the work, you pay when you are satisfied. Keep each step to a short title and one sentence. Include the things people worry about: how long it takes, whether they need to be home, when they pay.
### Examples
Show the result. What that looks like depends on the trade:
- Home services: before and after photos with the neighborhood and the job named
- Health and wellness: photos of the space and the team, since results are private
- Restaurants: the food and the room, shot in real light
- Professional services: short case summaries with the problem, what you did and the outcome
Real photos from a phone beat polished stock images. Visitors recognize stock photos, and they have seen the same smiling stock team on other websites. A slightly imperfect photo of your actual van, chair or kitchen is evidence. A stock photo is not.
Label every example. A caption like "Full bathroom remodel, Glendale, three weeks" turns a nice picture into proof that you do this kind of work near the visitor.

## What goes in the about and questions sections?
The about section introduces the people in a few sentences with a real photo, and the questions section answers what you hear on every phone call.
### About
Keep it short on the homepage: who runs the business, how long, what you care about in the work, and a photo of you or the team. Link to a full about page for the longer story. People hire people, especially for work in their home or on their body, and a face with a name lowers the barrier to calling.
### Questions
Write down the last ten questions customers asked before booking. Those are your section. Typical ones:
- What areas do you serve?
- How much does it cost, and what affects the price?
- How soon can you start?
- Do you take my insurance, or offer payment plans?
- What happens if I need to cancel?
Answer each in one or two plain sentences. This section saves you phone time, and it helps in search too. Clear question and answer pairs are easy for Google and for AI assistants to quote, and FAQ structured data marks them up in a format those systems read.

## What should the final call to action include?
Repeat the main action and put every practical detail a ready customer needs in one place.
- The same button as the first screen, with the same label
- Phone number, tappable
- Address with a map link, or the list of areas you serve
- Opening hours
- A short contact form for people who would rather write
Make sure the name, address and phone number here match your Google Business Profile exactly. Consistent details across your site and listings help Google connect them, which supports your place in map results.

## What should be left off a homepage?
Leave out anything that pushes the useful sections down or slows the page without answering a customer question.
- Image sliders: visitors rarely wait for the second slide, and the rotating images add weight to the page
- Auto-playing video with sound: it startles people and uses up mobile data
- A long mission statement above the services
- Stock photos of handshakes and headsets
- A pop-up in the first few seconds, before the visitor has read a word
- A wall of badges and partner logos nobody recognizes
- Social media feeds embedded in the page, which load slowly and send visitors away
- Three or four competing buttons of equal weight on the first screen
The test for any section is one question: does this help a new customer decide or act? If not, it belongs on an inner page or nowhere.

## How does this play out for a real business?
Here is the structure applied to a made-up example, a two-person plumbing company in Pasadena.
- First screen: "Plumbing repairs in Pasadena and the San Gabriel Valley. Licensed, insured, at your door today." Button: "Call now". Second, quieter link: "Request a quote". A photo of the two plumbers beside their van.
- Proof: their Google rating with the review count, and three full reviews that name the job.
- Services: leak repair, water heaters, drain cleaning and repiping, each with a starting price and a link to its own page.
- How it works: call or request a quote, get a price before work starts, same-day repair, pay on completion.
- Examples: six before and after photos, each captioned with the job and the neighborhood.
- About: two sentences on the owners and their license number, with a photo.
- Questions: service area, emergency hours, pricing, warranty.
- Final section: "Call now" again, phone, hours, list of cities served, contact form.
Nothing on that page is clever. Every section answers the next question a worried homeowner with a leak would have, and the phone number is never more than one scroll away.
On a phone, which is where most local searches happen, this order matters even more, because the sections stack into one long column. Keep the call button fixed at the bottom of the screen and keep each section short enough to take in at a glance.

## How do I know if the homepage is working?
Measure the main action, not visits.
Set up tracking for calls from the tappable number, form submissions and booking clicks. Then look at a few things each month:
- How many visitors take the main action
- How far down the page people scroll, which shows where they lose interest
- Which button placement gets the clicks
- How fast the page loads on a phone, using PageSpeed Insights
Change one thing at a time: a new headline, a different first review, a price added to the service cards. Give it a few weeks and compare. Small, steady changes based on what visitors do will beat a redesign based on taste.
If you are starting from nothing, a homepage with this structure fits within my Starter Site, from $150 and about 7 days. A site with separate service pages and local SEO setup is the Business Site, from $450 and about 14 days.

## The bottom line
A service business homepage is a sales conversation in a fixed order: what you do and where, why to trust you, what you offer, how it works, who you are, the common questions, and how to start. Put one clear action at the top and repeat it at the bottom. Cut whatever does not help a new customer decide.`,
  },
  {
    slug: 'landing-page-vs-website',
    title: 'Landing page vs website: which do you need?',
    description: 'The difference between a landing page and a full website, when each makes sense, and how they work together for ads and SEO.',
    date: d,
    updated: '2026-11-17',
    keywords: ['landing page vs website', 'do I need a landing page', 'one page website vs multi page', 'landing page for ads'],
    service: 'nextjs-website-development',
    shortAnswer: 'A landing page is a single focused page with one goal, ideal for ads, launches and testing an offer. A website has several pages that cover everything about the business and is better for search and for customers who research. Many businesses use both.',
    faqs: [
      { q: 'Can a landing page rank on Google?', a: 'It can rank for a narrow topic, but a multi-page site with a page per service ranks for far more searches.' },
      { q: 'How much does a landing page cost?', a: 'Thomas Osayi builds focused one-page sites from $150, usually live in about 7 days.' },
      { q: 'Should ads go to my homepage or a landing page?', a: 'Usually a landing page that matches the ad\'s message, which tends to convert better than a general homepage.' },
      { q: 'Does a landing page need a navigation menu?', a: 'No. A campaign landing page works best with no menu, so the only thing to click is the main action.' },
      { q: 'Can a one-page site become a full website later?', a: 'Yes, if it is built on your own domain as a real site, each section can later move to its own page without starting over.' },
      { q: 'How many landing pages do I need for ads?', a: 'One for each distinct offer or audience, not one for every keyword.' },
    ],
    takeaways: [
      'A landing page has one audience and one action, and a website covers the whole business across several pages.',
      'Send paid ads to a landing page whose headline repeats the ad, and send brand searches to the homepage.',
      'One page can rank for a narrow topic, but ranking for many services takes a page per service.',
      'Most growing businesses use both: a website for search and research, and landing pages for campaigns.',
      'A one-page site built on your own domain can grow into a full website without starting over.',
    ],
    body: `People use "landing page" and "website" as if they meant the same thing, and that causes real confusion when you are trying to get a quote or plan a launch. The difference is focus. A landing page does one job for one audience. A website does many jobs for everyone who might look you up.

Which one you need depends on where your visitors come from and what you want them to do. Here is how I think it through with clients.

## What is the difference between a landing page and a website?
A landing page is a single page built around one goal, and a website is a set of linked pages that covers the whole business.
On a landing page, everything points at one action: sign up, book a call, buy, apply. There is usually no navigation menu, because every link that is not the main action is a way out. The visitor arrives from somewhere specific, such as an ad, an email or a QR code, and the page continues the message that brought them.
A website has a homepage, service pages, an about page, pricing, contact and often articles. Visitors arrive from many places with many questions, and the navigation lets each of them find their own answer.
Side by side:
- Pages: one, against several
- Goal: one action, against many paths
- Navigation: none or minimal, against a full menu
- Traffic: ads, email, social and direct links, against search, referrals and repeat visitors
- Build time: days, against weeks
- Search: ranks for a narrow topic, against many topics
One note on terms. A "one-page website" is a small website on a single scrolling page, with a menu that jumps to sections. A landing page in the strict sense is a campaign page with one offer. They overlap, and for a new business the same page often does both jobs at first.

## When is a landing page the right choice?
Choose a landing page when you know exactly who is arriving and exactly what you want them to do.
- Paid ads, where the page should repeat the promise in the ad
- A product, course or event launch with a date
- A waitlist or pre-order to test demand before you build
- A single offer, such as a free estimate or a seasonal package
- A new business that needs to be online this week
- A program inside a larger brand, such as hiring, wholesale or a creator program
The last case is common. TheHoopGang, a basketball streetwear brand I work with, has a creator portal whose landing page speaks to one audience, creators, and asks for one thing, an application to the program. It does not try to sell clothes to shoppers. The store does that.
![TheHoopGang creator portal landing page: one audience, creators, and one main action, applying to the program.](/images/hoopgang/landing-page.png)
A landing page is also the cheapest honest test of an idea. If nobody joins the waitlist after you have put the offer in front of a few hundred of the right people, you have learned something for the price of one page.

## What goes on a landing page that converts?
A landing page that converts has a headline matching the visitor's source, one offer, proof, answers to objections and a single repeated button.
### The sections, in order
- Headline: the outcome the visitor wants, in the same words as the ad or email that sent them
- Supporting line and the main button
- The problem, stated briefly, so the visitor feels understood
- The offer: what they get, what it costs, what happens after they click
- Proof: reviews, results, logos or a demonstration
- Objections: short answers on price, time, risk and fit
- The button again
### The form
Ask only for what you need to take the next step. For a callback, that is a name and a phone number. Each extra required field loses some people. If you need more detail, collect it after the first step, on the thank-you screen or in a follow-up email.
### The thank-you step
After the action, send people to a confirmation screen that says what happens next and when. It is also where conversion tracking fires, so do not skip it.
> Remove the navigation menu and footer links from a campaign landing page. If you need a legal link, keep the privacy policy and nothing else.
Speed matters more here than anywhere else, because paid visitors are the most expensive ones you have. A page that takes five seconds to appear on mobile wastes ad spend before anyone reads the headline.

## When do you need a full website?
You need a full website when customers research before they contact you, when you offer several services, or when you want steady traffic from search.
- People compare three or four providers and read about each one
- You have several services, locations or audiences, each needing its own explanation
- You want to be found for many different searches without paying for each click
- You need supporting pages: pricing, team, policies, careers, articles
- Partners, banks, landlords or journalists will look you up
A website also builds value over time in a way a campaign page does not. Each service page and each useful article is another way in from Google, and those pages keep working after an ad budget stops.
For local service businesses, a multi-page site matters for one more reason. Your Google Business Profile links to your site, and a page per service gives Google clear evidence of what you do and where.

## Can a landing page rank on Google?
It can rank for a narrow topic, but one page cannot rank for everything a business does.
Search engines match a page to a query. A single page about "emergency drain cleaning in Burbank" can rank for that and close variations. It will struggle to also rank for water heaters, repiping and bathroom remodels, because one page cannot be the best answer for each of those. A site with a page per service gives each search its own strong candidate.
A few practical points:
- A one-page site still needs a proper title, description, headings and local business details
- Campaign pages made only for ads are often set to noindex, so near-identical variants do not compete with your main pages in search
- If you run several landing pages with similar text, point a canonical tag at the main version
- Links from other sites tend to go to homepages and useful articles, which a lone landing page does not have
So a landing page is a fine starting point for search, not a full plan. If search is a main source of customers for your kind of business, plan on growing into separate pages.

## Should ads go to my homepage or a landing page?
Usually a landing page, because it can match the ad's exact message, and that match is what turns a click into an inquiry.
### Message match
If the ad says "Free roof inspection in Long Beach", the page headline should say the same thing, and the button should book that inspection. Send the same click to a general homepage and the visitor has to hunt for the offer among everything else you do. Many will not bother. Ad platforms notice too. Google Ads rates landing page experience as one part of Quality Score, which affects what you pay per click.
### One page per campaign theme
You do not need a page for every keyword. You need one for each distinct offer or audience. Three ad groups about three services means three pages, each with its own headline, proof and form.
### Tracking
- Add UTM parameters to every ad link, so analytics shows which campaign sent each visitor
- Record a conversion when the thank-you screen loads or the form submits
- Import that conversion into the ad platform, so it can optimize toward inquiries instead of clicks
- Track phone calls from the page, since many local customers call instead of filling in a form
The exception is brand search. People who type your business name are looking for you in general, and the homepage is the right place for them.

## How do a website and landing pages work together?
The website handles search, referrals and research, and landing pages handle campaigns, with both on the same domain and design.
A typical setup for a growing business:
- The main site at the root domain, with a page per service and location
- Campaign pages at paths such as /lp/free-inspection or /offer/spring, left out of the main menu
- Shared logo, colors and proof, so a visitor who clicks through to the main site feels they are in the same place
- One analytics property and one set of conversion events across both
Serenity Institute shows how far focus can go inside a normal site. It is a site I built for a live, Zoom-based certification program for intervention professionals, so the whole site serves one audience considering one program.
![Serenity Institute: a site I built for a live, Zoom-based certification program for intervention professionals.](/work/serenity.jpg)
Keeping landing pages on your own domain, in the same codebase as the site, has practical benefits. They load as fast as the rest of the site, they reuse the same components, and nobody pays a separate monthly fee for a landing page tool. When a campaign ends, the page redirects to the relevant service page instead of going dead.

## How much does each cost, and how long does it take?
A focused one-page site is the lowest cost and the fastest, and a multi-page site costs more because each page needs its own content and design decisions.
My own packages, for reference:
- Starter Site: from $150, about 7 days. A polished one-page site with a contact form and SEO basics.
- Business Site: from $450, about 14 days. Up to 5 pages, a booking or quote form and local SEO setup.
- Full Custom Build: from $1,200, about 21 days. A multi-page site with custom features, a CMS or admin tools.
What usually decides the timeline is content. A one-page site needs a headline, an offer, a few proof points and photos, which most owners can gather in a day or two. A five-page site needs clear text for each service, and that takes real thought. Builds stall waiting on copy and photos far more often than on code.
Running costs are low either way. I deploy on Vercel, where hosting is free or close to it for most small business sites, plus the yearly fee for your domain. Ad spend is separate and almost always the larger number, which is the reason the page it lands on deserves attention.

## Can a one-page site grow into a full website later?
Yes, if it is built as a real site from the start and not as a page inside a closed landing page tool.
The growth path I use:
- Start with one page whose sections are services, proof, about, questions and contact
- When a service deserves more room, move it to its own page and leave a short card on the homepage
- Add pricing, about and contact pages as the content grows
- Add articles when you have questions worth answering at length
- Keep the original URL as the homepage, so links and rankings carry over
Because each section is already a component in a Next.js build, turning a section into a page reuses the design. Nothing is thrown away.
The mistakes to avoid are the ones that force a restart: building on a tool that cannot export your content, putting the page on a subdomain you will later abandon, or using a temporary domain in ads and listings. Start on the domain you intend to keep.

## The bottom line
If visitors arrive from one source with one intent, build a landing page. If they arrive from search with many different questions, build a website. Most businesses end up with both: a site that earns traffic over time and focused pages for each campaign. If budget is tight, start with one strong page on your real domain and grow from there.`,
  },
  {
    slug: 'do-i-need-a-website-if-i-have-instagram',
    title: 'Do I need a website if my business already has Instagram?',
    description: 'What a website does that Instagram and Google Business Profile cannot, and when a social-only presence is enough for a small business.',
    date: d,
    updated: '2026-11-17',
    keywords: ['do I need a website', 'website vs Instagram for business', 'is social media enough for business', 'small business website necessary'],
    service: 'nextjs-website-development',
    shortAnswer: 'Instagram is great for showing your work, but you do not control its reach and most search traffic never reaches it. A website gives you a place you own that ranks in Google, answers detailed questions, takes bookings or orders and makes the business look established.',
    faqs: [
      { q: 'Can I run a business on Instagram alone?', a: 'Some businesses do, but they depend on one platform\'s algorithm and rules for every customer.' },
      { q: 'Does a website help my Google Maps listing?', a: 'Yes, a website linked from your Google Business Profile with matching details helps Google understand and trust the business.' },
      { q: 'What is the cheapest useful website?', a: 'A focused one-page site with services, proof, location and a booking or contact button.' },
      { q: 'Is a Google Business Profile enough without a website?', a: 'It is essential for map results, but it has little room for detail and works better when it links to a website with matching business details.' },
      { q: 'Where should my Instagram bio link go?', a: 'To a page on your own domain, either the homepage or a booking page, so the link keeps working if you change tools later.' },
      { q: 'How much does a simple business website cost?', a: 'Thomas Osayi builds one-page Starter Sites from $150 in about 7 days, plus a yearly domain fee paid to the registrar.' },
    ],
    takeaways: [
      'Instagram reaches people who are scrolling, and a website reaches people who are searching.',
      'A website can hold prices, policies and booking in a place you own and control.',
      'A Google Business Profile is essential and works better with a website behind it.',
      'Social-only is reasonable while testing demand or when fully booked through referrals.',
      'A first site can be one fast page with services, prices, proof, location and one button.',
    ],
    body: `Social media is where people discover you. A website is where they decide. If your business already has an active Instagram, you have the harder half, attention. The question is where that attention goes when someone is ready to book, buy or ask a real question.

My short version: Instagram alone can carry a business for a while, but it leaves you invisible to people who search and dependent on a platform you do not control.

## What does Instagram do well for a small business?
Instagram is very good at showing your work, building familiarity and keeping you in front of people who already follow you.
For visual businesses such as salons, tattoo artists, bakers, trainers and restaurants, it is often the strongest discovery channel there is. A potential client sees your work in a friend's story, taps through, scrolls your grid and forms an opinion in under a minute. No website does that kind of social proof as naturally.
It also gives you things that are hard to build elsewhere:
- A running portfolio that updates every time you post
- Direct messages, which lower the barrier to a first question
- Tags and shares from happy customers
- Location tags and hashtags that reach people nearby
- Free tools: story highlights for prices and policies, action buttons, a shop tab for products
So this is not an argument against Instagram. Keep posting. The point is that Instagram is a channel, and a business needs a home that the channels point to.

## What can a website do that Instagram cannot?
A website can be found in search, hold detailed information, take bookings and payments on your terms, and belong to you.
### Be found by people who are searching
Someone typing "lash extensions near me" or "birthday cake delivery Culver City" into Google is often ready to buy today. Google's results for those searches are built from business profiles and websites. An Instagram profile may appear for your business name, but it rarely appears for a service search. Instagram reaches people who are scrolling. A website reaches people who are looking.
### Answer detailed questions
A caption is a poor place for a price list, a cancellation policy, parking directions or an explanation of how a service works. On a site, each of those has a permanent address you can link to. That saves you from answering the same DM forty times.
### Take bookings, deposits and orders
A site can show live availability, take a deposit, sell a gift card or accept an order, through tools you chose and at fees you agreed to. You are not limited to what the app supports this year.
### Stay yours
Reach on Instagram depends on a ranking system you cannot see, and it changes. Accounts get hacked, restricted or disabled, sometimes by mistake, and getting one back can take a long time. A domain you own and a site you control do not vanish because of someone else's policy decision.
### Look established
For a first-time customer about to spend real money, or a landlord, supplier or journalist checking you out, a clear website signals a real, stable business.

## Is a Google Business Profile enough without a website?
A Google Business Profile is essential and free, but it works better with a website behind it.
The profile is what appears in the map results: your name, hours, reviews, photos and a call button. Every local business should claim and complete one, whether or not it has a site. On its own, though, it has limits:
- It has no room to explain services in depth
- You control little of the layout and none of what appears beside it, including competitors
- It gives Google a short description to judge you by, where a website gives it pages of evidence
- The simple websites Google used to generate from a profile were shut down in 2024, so the profile no longer comes with a page of its own
Linking the profile to a website with the same name, address and phone number helps Google connect the two and understand what you offer. Service pages on the site support the categories and services listed on the profile. Reviews live on the profile and can be quoted on the site, so each strengthens the other.

## How do Instagram, Google and a website work together?
Instagram brings attention, Google brings people who are searching, and both send them to the website to act.
The setup is simple:
- The link in your Instagram bio goes to your site, either the homepage or a booking page
- Your Google Business Profile links to the same site
- The site has the booking, ordering or contact step, with prices and answers alongside
- The site links back to your Instagram, so visitors can see recent work
Now every channel ends in one place that you control and can measure. Add UTM tags to the bio link and your analytics will show how many visitors came from Instagram and how many of them booked.
New York Nook, a Russian restaurant in Hollywood, is a site I built with this job in mind. Whatever sends a guest there, they can see the full menu with photos, request a reservation or order pickup from their phone.
![New York Nook: a restaurant site I built with the full menu, reservation requests and pickup ordering.](/work/fiverr/newyorknook.jpg)
You can also bring Instagram into the site, with care. A few of your best photos placed by hand load faster than a live embedded feed, and they never show a post you would not have chosen for that spot.
> Point your bio link at your own domain, even if that page is only a short list of buttons. If you change booking tools later, you update one page and every old link still works.

## When is Instagram alone enough?
Social-only is reasonable when you are testing demand, fully booked through referrals, or selling through DMs at a volume you can handle by hand.
Situations where waiting makes sense:
- You started last month and are still working out what you sell and to whom
- Your calendar is full from word of mouth and you are not looking for new customers
- You take a few custom orders a week and enjoy handling each conversation
- Your business is a side project with no plan to grow
Signs it is time for a site:
- You answer the same questions about price, location and availability every day
- People ask "do you have a website?" before they book
- You want customers who have never heard of you, from search
- You are about to pay for ads and need somewhere to send the clicks
- A drop in reach or an account problem has already cost you a slow week
- You want to take deposits, sell gift cards or offer packages
The pattern I see is that a business does fine on Instagram until it wants to grow past its existing circle. Followers are people who already know you. Search is where the strangers are.

## What does the simplest useful website include?
One fast page with what you do, proof, prices, location and a single button to book or contact you.
You do not need ten pages to start. A first site needs:
- A headline saying what you do and where
- Your services with starting prices
- Photos of real work, which you already have from Instagram
- A few reviews, quoted from Google or from clients with permission
- Location, service area and hours
- One clear action: book, order, call or message
- Answers to the five questions you get most in DMs
- Links to Instagram and your other profiles
Technical basics matter as much as content: a real domain name, a title and description for search, local business details in structured data, a layout made for phones, and quick loading on mobile data.
Astiglow, a waxing studio site I built, follows this idea. Clients see the services and prices, pick a package and book online, with no call or message needed.
![Astiglow: a waxing studio site I built with a service menu, packages and online booking.](/work/fiverr/astiglow.jpg)
Most of the material for a first site is already on your profile. Your best photos, your highlights and your most asked questions are a draft of the page.

## What does a first website cost compared with staying social-only?
A simple site is a small one-time cost and a low yearly one, set against the customers you never see because they searched instead of scrolled.
What you pay for:
- The build. My Starter Site is from $150 and takes about 7 days: a polished one-page site with a contact form and SEO basics. The Business Site, from $450 and about 14 days, adds up to 5 pages, a booking or quote form and local SEO setup.
- A domain name, a yearly fee paid to a registrar. Register it in your own name and account.
- Hosting. I deploy on Vercel, where hosting is free or close to it for most small business sites.
- Any booking or ordering tool you choose, paid to that vendor.
The cost of staying social-only is harder to see, because it shows up as absence. Nobody tells you they searched for your service, did not find you and booked someone else.
DIY site builders are an option too, and for some owners they are the right one. The trade-off is your own time and a monthly subscription, and a result that depends on how much care goes into speed and search setup.

## What mistakes do Instagram-first businesses make with a first site?
The most common mistake is treating the site as a formality and not as the place where the booking happens.
- Using a third-party link page as the "website" forever. It is fine as a stopgap, but it sits on someone else's domain and builds no search presence for yours.
- Building a site and never linking it from the bio or the Google profile
- Leaving prices off because "they can DM me", which sends searchers to a competitor who lists them
- Uploading full-size phone photos that make the page slow
- Letting the site go stale, with old hours and last year's menu, while Instagram stays current
- Registering the domain through a friend or a builder account you later lose access to
- Adding a live feed, a chat widget and a pop-up to a page that should load in a second
A site needs far less upkeep than a feed. Update it when prices, hours or services change, and check the booking path on your phone once a month. That is enough.

## The bottom line
Keep Instagram for discovery and build a simple site for decisions. Start with one fast page that says what you do, shows your work and prices, and has one button to book or get in touch, then link it from your bio and your Google Business Profile. If you are still testing an idea, you can wait. Once you want customers who search, you need a place they can find.`,
  },
  {
    slug: 'move-from-wix-or-squarespace-without-losing-seo',
    title: 'How to move from Wix or Squarespace without losing your Google rankings',
    description: 'A step-by-step migration plan for switching website platforms: URL mapping, 301 redirects, content, metadata and Search Console checks.',
    date: d,
    updated: '2026-11-17',
    keywords: ['migrate from Wix', 'move from Squarespace', 'website migration SEO', '301 redirects new website'],
    service: 'nextjs-website-development',
    shortAnswer: 'To switch platforms without losing rankings, list every URL on the old site, keep or improve the content that ranks, redirect each old URL to its new equivalent with a 301 redirect, carry over titles and descriptions, then submit the new sitemap in Google Search Console and watch for errors.',
    faqs: [
      { q: 'Will I lose rankings when I change platforms?', a: 'Some short-term movement is normal, but with redirects and preserved content, rankings usually recover and often improve on a faster site.' },
      { q: 'What is a 301 redirect?', a: 'A permanent redirect that sends visitors and search engines from an old URL to a new one and passes along most of its value.' },
      { q: 'Can I keep my domain?', a: 'Yes. You point the same domain at the new site; only the platform behind it changes.' },
      { q: 'Should I redirect all my old pages to the homepage?', a: 'No. Redirect each old URL to its closest matching new page, because Google tends to treat mass redirects to the homepage as missing pages.' },
      { q: 'How long should redirects stay in place?', a: 'At least a year, and indefinitely for pages that other websites link to.' },
      { q: 'Will my email stop working when I move my website?', a: 'Not if the MX, SPF and DKIM records in your DNS are left unchanged when you point the domain at the new host.' },
    ],
    takeaways: [
      'Rankings are lost through broken URLs and missing content, not through changing platform.',
      'List every old URL and its traffic before touching anything, and keep the same domain.',
      'Give each old URL one permanent redirect to its closest matching new page, never a blanket redirect to the homepage.',
      'Download images from the old platform, because they stop loading when the old plan ends.',
      'Submit the new sitemap in Search Console and watch for 404 errors for about a month.',
    ],
    body: `Most ranking losses after a platform move come from broken URLs and missing content, not from the new platform. Google does not rank you lower for leaving Wix or Squarespace. It ranks you lower when the page it knew at one address disappears and nothing tells it where that page went.

A careful migration is mostly bookkeeping. Here is the order I do it in when I rebuild a Wix or Squarespace site in Next.js.

## Will I lose my Google rankings if I switch platforms?
Not if every old URL redirects to a matching new page and the content that ranks comes with you.
Some movement in the first few weeks is normal. Google has to recrawl the site, follow the redirects and reassess each page at its new address. Rankings usually settle, and they often improve when the new site is faster and better structured.
What does cause lasting damage:
- Old URLs that return a 404 page because nobody redirected them
- Every old URL redirected to the homepage
- Pages that ranked being deleted, merged carelessly or rewritten from scratch on launch day
- Titles and descriptions lost, so every page shows a default
- A noindex tag or a robots.txt block left over from the staging site
- The domain itself changing at the same time as the platform
That last one is worth stressing. Keep your domain. Changing platform and domain together doubles the risk and makes it hard to tell which change caused a drop.

## What should I record before touching anything?
Make a complete list of the old site's URLs and save the performance data, because once the old plan is cancelled you cannot go back and look.
### Getting the full URL list
- Open the sitemap, at /sitemap.xml on both Wix and Squarespace, and copy every URL into a spreadsheet
- In Google Search Console, export the Pages report and the Performance report for the last 16 months, which is as far back as it goes
- Crawl the site with a tool such as Screaming Frog, which is free for up to 500 URLs, to catch pages missing from the sitemap
- Check analytics for landing pages that still get visits, including old campaign pages
- Look at which pages other sites link to, using the Links report in Search Console
### What to save for each URL
- The page title and meta description
- The main heading and the full text
- Images, with their alt text
- Clicks and top queries from Search Console
Sort the spreadsheet by clicks. A small number of pages usually brings most of the search traffic, and those are the ones to handle with the most care.
> Take full-page screenshots of your top pages before the move. When a question comes up three weeks later about what a page used to say, a screenshot answers it in seconds.

## How do I map old URLs to new ones?
Give every old URL exactly one new destination, the closest matching page, and write the pairs down in two columns.
Both platforms produce URL patterns you probably would not choose. Wix puts blog posts under /post/ and store products under /product-page/. Squarespace builds paths from page and collection names, which is how sites end up with addresses like /blog-1/post-name or /services-1 after a page was duplicated. A rebuild is the chance to clean these up, as long as each old address is mapped.
### A worked example
For a small massage studio moving off Squarespace, the map might read:
- /home to /
- /services-1 to /services
- /services-1/deep-tissue to /services/deep-tissue-massage
- /blog-1/how-often-should-you-get-a-massage to /blog/how-often-should-you-get-a-massage
- /new-page-2 to /pricing
- /book-online to /book
### Rules I follow
- If a URL is already clean and ranking, keep it exactly as it is. An unchanged URL needs no redirect and carries no risk.
- Map page to page. A retired service goes to the closest remaining service or its parent category, not to the homepage.
- If a page has no reasonable replacement and no traffic, let it return a 404 or 410. Not everything needs saving.
- Decide on trailing slashes, lowercase paths and www or non-www once, and apply the choice everywhere.
- Include files that get traffic, such as a PDF menu or price list.

## What content and metadata have to move?
Move the text of every page that gets traffic, its title and description, its headings, its images and alt text, and any structured data.
### Text
Neither platform gives you a clean export of a whole site. Squarespace can export some content as an XML file meant for WordPress, and Wix offers little beyond blog and store data, so expect to copy page text by hand or with a crawler. For pages that rank, carry the text over first and improve it after the move has settled. Rewriting a ranking page and changing its address on the same day makes it impossible to know what helped or hurt.
### Images
This is the step people miss. Images on these platforms are served from the platform's own servers, with addresses on static.wixstatic.com or images.squarespace-cdn.com. If the new site still points at those addresses, the images break when the old plan ends. Download the originals, name the files descriptively, compress them and host them with the new site.
### Metadata
- Page titles and meta descriptions, per page
- One main heading per page that matches the old topic
- Image alt text
- Open Graph image and text for link previews
- Structured data such as LocalBusiness, Product or FAQ markup
- Canonical tags pointing at the new URLs
### Functional pieces
Forms, newsletter signups, booking widgets, store products and member areas each need a replacement. List them early, since these take longer than pages. Also export what lives inside the platform: form submissions, mailing lists, orders and customer records.

## How do 301 redirects work, and where do I set them up?
A 301 redirect tells browsers and search engines that a page has moved permanently, and Google passes the old page's standing to the new address.
### In Next.js
Redirects go in the redirects function of next.config.js. Each entry has a source, a destination and permanent set to true. Next.js sends a 308 status for permanent redirects, which Google treats the same way as a 301. Patterns can cover whole groups, for example a single rule sending /blog-1/:slug to /blog/:slug.
For a few hundred redirects the config file is fine. For a thousand or more, the Next.js documentation recommends keeping the map in a lookup file and handling it in middleware.
### On other platforms
Most hosts and site builders have a redirect or URL mapping setting. The principle is identical: old path, new path, permanent.
### Mistakes to avoid
- Chains: A redirects to B, which redirects to C. Point A straight at C.
- Loops: a rule that sends a page back to itself through a slash or letter-case difference.
- Temporary redirects: a 302 or 307 says the move is not permanent, so use permanent ones.
- Homepage dumping: Google tends to treat a mass redirect to the homepage as a soft 404, and the old pages' value is lost.
- Removing redirects after a few months: keep them for at least a year, and indefinitely for pages with links from other sites.
Test before launch. With the new site on a preview address, request each old path and confirm it answers with a permanent redirect to the right page. A short script that loops over the spreadsheet does this in seconds.

## How do I switch the domain without downtime?
Keep the domain, lower the DNS TTL ahead of time, then change the DNS records to point at the new host while the old site is still running.
### If the domain is registered through Wix or Squarespace
You have two choices. Leave it registered where it is and change only its DNS records, or transfer it to an independent registrar. A transfer can wait until after launch. Note that a domain generally cannot be transferred within 60 days of being registered or previously transferred, so do not plan on a last-minute move.
### The switch itself
- A day or two before, lower the TTL on the existing records, so the change spreads quickly
- Add the domain to the new host, which for my builds is Vercel, and note the records it asks for
- Change the A record for the root domain and the CNAME for www to the new values
- Leave the MX and TXT records for email untouched
- Wait for the new host to issue the HTTPS certificate, then test both www and the bare domain
The email records are where real damage happens. If your business email runs through Google Workspace or Microsoft 365, the MX records and the SPF and DKIM text records must survive the change exactly. Take a screenshot of every DNS record before you edit anything.
Do not cancel the old plan on launch day. Keep it for two to four weeks, so you can still log in to copy something you missed.

## What should I check on launch day and in the weeks after?
Confirm that the new site can be crawled, that redirects work, and that Search Console is reading the new sitemap, then watch for errors for about a month.
### Launch day
- Check that robots.txt allows crawling and no page carries a leftover noindex tag
- Submit the new sitemap in Search Console and remove the old one
- Use URL Inspection on the homepage and top pages and request indexing
- Test twenty or more old URLs by hand, including the ones at the top of your traffic list
- Submit every form and complete a test booking or order
- Confirm analytics is recording visits and conversions
- Run the main pages through PageSpeed Insights
### The following weeks
- Watch the Pages report in Search Console for "Not found (404)" and add redirects for any real pages you missed
- Compare clicks and impressions with the same weeks before the move, page by page
- Expect the "Page with redirect" count to rise, which is healthy
- Check that the new URLs, not the old ones, start appearing in results
You do not need the Change of Address tool in Search Console. That is for moving to a different domain, and here the domain has stayed the same.
If one important page drops and stays down after a few weeks, compare it with your screenshot of the old version. The usual cause is content that was trimmed or a title that changed.

## What else needs updating outside the website?
Update every place that links to specific old pages, starting with the ones you control.
- Google Business Profile: website link, booking link, menu link
- Instagram, Facebook, TikTok and LinkedIn bios
- Directory listings such as Yelp and industry sites
- Ad campaigns, whose final URLs should not rely on redirects
- Email signatures, newsletter templates and automated emails
- QR codes on menus, flyers and packaging, which should keep resolving through redirects
- The few most valuable links from other websites, where a polite request to update the address is worth sending
Redirects will catch anything you miss, but a direct link is faster for visitors and cleaner for search engines.

## How long does a migration take, and when is it worth getting help?
A small site can be moved in one to three weeks, and help is worth it when search traffic brings real revenue or the site has more than a few dozen URLs.
For scale, my Business Site package is from $450 and about 14 days for up to 5 pages, and a Full Custom Build is from $1,200 and about 21 days for a multi-page site with custom features, a CMS or admin tools. A rebuild from Wix or Squarespace fits one of those depending on page count and features, with the redirect map and Search Console checks done as part of the launch.
You can do it yourself if the site is small and you are comfortable with DNS settings and a spreadsheet. Get help if:
- The site has a store, a large blog or a member area
- Search brings most of your leads, so a mistake is expensive
- Your email runs on the same domain and you are unsure about DNS
- The old URLs are messy enough to need pattern-based redirect rules

## The bottom line
A platform move does not cost rankings. Broken addresses and missing content do. List every URL, map each one to a new page, move the text and images that rank, set permanent redirects, switch DNS carefully and watch Search Console for a month. Do those in order and the new, faster site starts from where the old one left off.`,
  },
  {
    slug: 'stripe-subscriptions-for-saas-mvp',
    title: 'Setting up Stripe subscriptions for a SaaS MVP: what you actually need',
    description: 'The minimum Stripe setup for a SaaS MVP: products and prices, Checkout, webhooks, the customer portal, failed payments and plan checks.',
    date: d,
    updated: '2026-11-17',
    keywords: ['Stripe subscriptions SaaS', 'Stripe billing MVP', 'Stripe customer portal', 'Stripe webhooks subscriptions'],
    service: 'saas-mvp-development',
    shortAnswer: 'A SaaS MVP needs Stripe products and prices for each plan, Stripe Checkout to start subscriptions, webhooks that update the user\'s plan in your database, the Stripe customer portal for upgrades and cancellations, and handling for failed payments. Everything else can wait.',
    faqs: [
      { q: 'Which Stripe webhook events matter for subscriptions?', a: 'At minimum checkout.session.completed, customer.subscription.updated, customer.subscription.deleted and invoice.payment_failed.' },
      { q: 'Do I need to build a billing page?', a: 'Not for an MVP; Stripe\'s hosted customer portal lets users change plans, update cards and cancel.' },
      { q: 'Where should I check if a user has paid?', a: 'In your own database, updated by webhooks, not by calling Stripe on every page load.' },
      { q: 'Why does Stripe webhook signature verification fail?', a: 'Usually because the request body was parsed before verification; Stripe needs the raw body, the Stripe-Signature header and the correct signing secret for that endpoint.' },
      { q: 'Should I grant access on the Checkout success page?', a: 'No. Anyone can open that URL, so grant access only when the verified webhook has updated your database.' },
      { q: 'What should happen when a subscription payment fails?', a: 'Let Stripe retry the charge and email the customer, keep access on during the retry window, and downgrade only when the subscription is finally cancelled.' },
    ],
    takeaways: [
      'A SaaS MVP needs five Stripe pieces: products and prices, Checkout, webhooks, the customer portal and failed payment handling.',
      'Webhooks, verified by signature and safe to run twice, are what keep your database in step with Stripe.',
      'Your app reads plan and status from its own database, never from the browser and not from Stripe on every page load.',
      'The hosted customer portal replaces a custom billing page for upgrades, card updates and cancellation.',
      'Test cancellations, failed payments and duplicate events before launch, then register the live webhook endpoint.',
    ],
    body: `Billing is where MVPs most often overbuild or underbuild. Some founders spend three weeks on a custom billing page before they have a customer. Others ship a payment link and find out a month later that cancelled users still have full access.

The setup below is the middle path: the smallest amount of Stripe work that is still correct.

## What is the minimum Stripe setup for a SaaS MVP?
You need five things: products and prices, Checkout, webhooks that write to your database, the customer portal, and a plan for failed payments.
- Products and prices: one product per plan, one recurring price per billing period
- Stripe Checkout: the hosted payment page that starts the subscription
- Webhooks: messages from Stripe to your server that tell you what changed
- The customer portal: Stripe's hosted page for changing plans, updating cards and cancelling
- Failed payment handling: retries, emails and a rule for when access stops
Everything on that list except the webhook handler is configuration or a few lines of code. The webhook handler is where the care goes, because it is the only thing that keeps your database in step with what customers have paid for.

## How should products and prices be set up?
Create one product per plan and one recurring price for each billing interval, then refer to prices by ID from a single config file.
In the Stripe Dashboard, a product is the thing you sell, such as "Pro", and a price is how you charge for it, such as $29 per month or $290 per year. One product can have several prices.
### Practical rules
- The amount on a price cannot be edited. To change what you charge, create a new price and archive the old one. Existing subscribers stay on the old price until you move them.
- Stripe has separate test and live modes with different IDs. Keep price IDs in environment variables or one config module, with a test set and a live set.
- Give each price a lookup key, such as pro_monthly, so your code can find it by name.
- Keep the free plan out of Stripe. A user with no active subscription is on the free plan.
- Put plan limits, such as seats or projects, in your own code, keyed by plan name. Stripe handles money. Your app handles what a plan includes.
### Trials
You can set a trial length when creating the Checkout session. Decide whether to ask for a card up front. A trial with a card converts with no further action from the user. A trial without one gets more signups and needs a reminder before it ends. For an MVP, either is fine. Pick one and keep it simple.

## How do I start a subscription with Stripe Checkout?
Create a Checkout session on your server in subscription mode, attach your user's ID to it, and redirect the browser to the URL Stripe returns.
The session needs:
- mode set to subscription
- line_items with the price ID and a quantity
- customer set to the user's existing Stripe customer ID, if they have one
- client_reference_id set to your own user or organization ID
- success_url and cancel_url pointing back to your app
### One customer per account
Create a Stripe customer the first time a user starts checkout, save its ID on your user or organization record, and reuse it every time after. If you let Stripe create a new customer on each checkout, one person ends up with several customer records, and their invoices and subscriptions are scattered across them.
### Who is the customer
In a product for teams, the subscription belongs to the organization, not the person who clicked the button. Store the Stripe customer ID on the organization. Otherwise the plan is tied to one employee and becomes a problem when they leave.
### The success page is not proof
The success_url is only a page the browser lands on. A user can reach it by typing the address, and a real payer can close the tab before it loads. Do not grant access there. Show a "setting up your account" message and wait for the webhook to update the database, which usually takes a second or two.
> Prevent double subscriptions. Before creating a Checkout session, check your database for an active subscription and send those users to the customer portal instead.

## Which webhooks do I need, and how do I handle them safely?
Handle four to six events, verify the signature on every one, and make each handler safe to run twice.
### The events
- checkout.session.completed: the first payment went through. Read client_reference_id and save the customer ID and subscription ID against your user.
- customer.subscription.created and customer.subscription.updated: plan changes, renewals, trials ending, cancellations scheduled. Copy the status, price and period end into your database.
- customer.subscription.deleted: the subscription has ended. Set the account back to free.
- invoice.paid: a renewal succeeded. Useful for extending access and for receipts.
- invoice.payment_failed: a charge failed. Flag the account and email the user.
### Verifying the signature
Anyone can send a POST request to your webhook URL, so every request must be checked. Stripe signs each event, and the library function stripe.webhooks.constructEvent verifies it using the raw request body, the Stripe-Signature header and your endpoint's signing secret, which starts with whsec_.
The classic bug is passing a parsed body. In a Next.js App Router route handler, read the body with request.text() and pass that string through. If the JSON has been parsed and turned back into a string, verification fails with the error "No signatures found matching the expected signature for payload".
### Duplicates and ordering
Stripe keeps retrying a webhook when your endpoint does not answer with a 2xx status, and it does not guarantee that events arrive in order. Two habits deal with both. First, store the ID of each processed event and skip any you have seen. Second, treat the event as a signal, then fetch the current subscription from Stripe and save that, so an old event can never overwrite newer state.

## What should my database store about a subscription?
Store enough to answer "what can this account do right now" without calling Stripe.
On the user or organization record:
- stripeCustomerId
- stripeSubscriptionId
- plan, as your own name for it, mapped from the price ID
- status, copied from Stripe: trialing, active, past_due, canceled, unpaid or incomplete
- currentPeriodEnd, the date the paid period runs out
- cancelAtPeriodEnd, true when the user has cancelled but still has time left
### Checking access
Every protected feature reads this record on the server. A typical rule: allow access when status is active or trialing, and allow a short grace period when it is past_due. Never accept a plan value sent from the browser, and do not store the plan somewhere the user can write to. In Firebase, that means the subscription fields are written only by the server through the Admin SDK, and security rules deny client writes to them.
Calling Stripe on each page load to check the plan is slow, runs into rate limits as you grow, and breaks your app whenever that call fails. The webhook-fed copy in your own database is what the app reads.
SQWAD, my own SaaS for Shopify brands, is built on Next.js, Firebase and Stripe, so Stripe is something I run in my own product and not only something I set up for clients.
![SQWAD: my own SaaS for Shopify brands running creator programs, built with Next.js, Firebase and Stripe.](/work/fiverr/sqwad.jpg)

## How do users upgrade, downgrade or cancel?
Send them to the Stripe customer portal, which handles plan changes, card updates, invoices and cancellation without any billing pages of your own.
### Setting it up
In the Dashboard, open the customer portal settings and choose what customers may do: which prices they can switch between, whether they can update payment methods, view invoices and cancel. Then add a "Manage billing" button to your settings page. Its server route creates a portal session with the customer ID and a return_url, and redirects to the session URL.
### What happens behind the button
- A plan switch fires customer.subscription.updated, and your webhook copies the new price into the database
- Plan changes are prorated by default, so the customer is charged or credited for the difference
- Cancellation can be immediate or at the end of the period. End of period is kinder: cancel_at_period_end becomes true, the status stays active, and customer.subscription.deleted arrives when the time runs out.
Show the cancelled-but-active state in your app, with the end date, so users are not surprised either way.
One permissions point for team products: only an owner or billing admin should be able to open the portal. Check the role on the server before creating the session, since the session URL gives control of the subscription.

## What happens when a payment fails?
Stripe retries the charge on a schedule, the subscription moves to past_due, and your app decides how long access continues.
Cards fail all the time for dull reasons: expired, replaced, over the limit. Most failures are fixed by a retry or by the customer updating the card, as long as someone tells them.
### What to configure in Stripe
- Turn on Smart Retries, or set a retry schedule, in the Billing settings
- Turn on Stripe's emails for failed payments and expiring cards, which link to a page for updating the card
- Choose what happens after the final retry: cancel the subscription, mark it unpaid or leave it past due
### What to do in your app
- On invoice.payment_failed, show a banner with a link to the customer portal
- Keep access on during the retry window. Locking someone out on the first failure punishes paying customers for a bank hiccup.
- When the subscription is finally cancelled, the customer.subscription.deleted event downgrades the account through the same code path as a normal cancellation
Do not delete data on downgrade. Limit what the account can do and keep the data, so coming back is one click.

## How do I test billing before launch?
Run every path in test mode with the Stripe CLI and test cards, then repeat the main path once in live mode with a real card.
### Local setup
The Stripe CLI forwards events to your machine with the command stripe listen --forward-to localhost:3000/api/webhooks/stripe. It prints a signing secret for local use, which goes in your local environment file. The command stripe trigger fires sample events.
### Paths to run
- Subscribe with the test card 4242 4242 4242 4242 and confirm the database updates
- Upgrade and downgrade through the portal
- Cancel at period end, and confirm access remains until then
- Fail a payment using one of Stripe's decline test cards
- Advance time with a test clock, to see a renewal and a trial ending without waiting a month
- Send the same event twice and confirm nothing breaks
### Going live
- Create the products and prices again in live mode, or copy them over
- Add a live webhook endpoint in the Dashboard and put its signing secret in the production environment variables
- Swap test keys for live keys in production only
- Check the endpoint's delivery log after the first real payment
The most common launch-day failure I see in apps I am asked to fix is a webhook that worked locally and was never registered in live mode. Payments succeed, and no account is ever upgraded.

## What can wait until after the MVP?
Skip everything your first customers have not asked for.
- Usage-based or metered billing
- Per-seat pricing with automatic seat counts, unless seats are your pricing model
- A coupon engine. Stripe promotion codes in Checkout cover early discounts.
- Custom invoice layouts
- Multiple currencies
- A custom billing page that reproduces the portal
- Tax automation, depending on where you sell. Stripe Tax exists for when you need it, and tax is worth a conversation with an accountant before you have customers in many regions.
- Annual plans, if you would rather learn from monthly churn first
This is the billing setup I include in the SaaS MVP package, from $1,200 and about 21 days, alongside auth, a dashboard and the database. If you already have an app where payments do not fire or plans do not update, that is repair work: Fix Plus Features starts at $200 and takes about 5 days.

## The bottom line
Use Stripe's hosted pieces for everything a customer sees, Checkout and the customer portal, and spend your own effort on the webhook handler and the subscription fields in your database. Verify signatures, handle duplicates, read access from your own records, and test the unhappy paths before launch. The rest can wait for real customers.`,
  },
  {
    slug: 'roles-and-permissions-in-saas-apps',
    title: 'Roles and permissions in a SaaS app: a practical guide for founders',
    description: 'How to design user roles, team accounts and permissions in a SaaS MVP without overbuilding, with examples from real multi-role platforms.',
    date: d,
    updated: '2026-11-17',
    keywords: ['SaaS roles and permissions', 'role based access control MVP', 'multi tenant SaaS', 'user roles web app'],
    service: 'saas-mvp-development',
    shortAnswer: 'Start with the fewest roles your first customers need, usually an owner, a member and your own internal admin. Store each user\'s role per organization, enforce permissions on the server and in database rules, and add finer-grained permissions only when a customer needs them.',
    faqs: [
      { q: 'What is multi-tenant SaaS?', a: 'One app serving many customer organizations, where each organization\'s data is kept separate from the others.' },
      { q: 'Should permissions be checked in the frontend?', a: 'Hide buttons in the frontend for clarity, but always enforce permissions on the server and in the database.' },
      { q: 'How many roles should an MVP have?', a: 'Usually two or three, plus an internal admin role for your own team.' },
      { q: 'Where should a user role be stored in a SaaS app?', a: 'On a membership record that links the user to an organization, so one person can hold different roles in different organizations.' },
      { q: 'What is the difference between a role and a plan?', a: 'A role limits what one person can do inside an organization, and a plan limits what the whole organization can do.' },
      { q: 'When should a SaaS add custom roles?', a: 'Only after several customers have asked for access that no named role can cover, because a permission editor is a much larger build than adding one more role.' },
    ],
    takeaways: [
      'Most MVPs need three roles: an owner, a member and an internal admin for your own team.',
      'Create an organization for every account from day one, and attach all data to it.',
      'Store the role on a membership record that links a user to an organization, not on the user.',
      'Hiding buttons is not security; permissions are enforced on the server and in database rules.',
      'Route every check through one permission function, so adding a role later means editing one map.',
    ],
    body: `Roles look simple on a whiteboard: admins can do everything, members can do some things. Then the first customer asks for a contractor who can see one project, or a manager who can approve but not pay, and the simple picture stops matching the code.

You do not need to build for all of that up front. You do need a foundation that can absorb it later without a rewrite. I have built that foundation for my own SaaS and for a healthcare platform with five roles, and the same few decisions matter every time.

## What roles does a SaaS MVP actually need?
Most MVPs need three: an owner, a member, and an internal admin for your own team.
- Owner: created the account, manages billing, invites and removes people, can delete the organization
- Member: uses the product day to day, cannot touch billing or membership
- Internal admin: you and your support staff, able to look up any account to help a customer
That covers the questions an early product has to answer. Who pays? Who can add people? Who can see the data?
A common fourth role is admin, sitting between owner and member: can manage people and settings, cannot delete the organization or change billing. Add it when a customer has a real person in that position.
It helps to be clear about what a role is. A role is a named bundle of abilities inside an organization. A plan, such as Free or Pro, is not a role. It limits what the whole organization can do. Keep the two separate in code. "Can this person export data?" has two parts: does the plan include exports, and does this person's role allow it.

## Why start with organizations, even if each account has one user?
Because most B2B products end up serving teams, and moving data from "belongs to a user" to "belongs to an organization" later is a painful migration.
The rule is simple. When someone signs up, create two records: the user and an organization, also called a workspace, team or account. Everything the product creates, projects, invoices, files, belongs to the organization through an organizationId field. The user is connected to the organization through a membership.
On day one this looks like extra work. Every organization has one member and the interface never mentions teams. The payoff comes when a customer says "can I add my colleague?" and the answer is an invite form, not a data migration.
It also settles billing cleanly. The Stripe customer and subscription attach to the organization. When the person who signed up leaves the company, the account, its data and its plan stay with the company.

## Where should a user's role be stored?
On a membership record that links a user to an organization, not on the user.
### The data model
- users: id, email, name
- organizations: id, name, plan, stripeCustomerId
- memberships: userId, organizationId, role, status, createdAt
- every other table or collection: an organizationId field
One person can then be an owner of their own company's workspace and a member of a client's, with one login. If the role lives on the user record, that is impossible, and you find out the day an agency or consultant signs up.
### The active organization
When a user belongs to several organizations, the app needs to know which one they are working in. Put it in the URL, such as /org/acme/projects, or in the session. I prefer the URL, since links can be shared and the back button behaves.
### Roles in the auth token
With Firebase Auth you can put custom claims in the user's token, and other providers let you add fields to the session. It is tempting to store the role there. Be careful. Tokens are cached, so a role change does not apply until the token refreshes, and one token cannot easily describe different roles in different organizations. I use token claims for things that are global and rarely change, such as the internal admin flag, and read organization roles from the membership record.
### Internal admin
Keep your own staff access separate from customer roles: a flag set only from the server, plus a log of what staff viewed or changed. Do not make your team "owners" of customer organizations to get access.

## How do I keep one customer's data separate from another's?
Put an organization ID on every record, filter every query by it, and have the database itself refuse cross-organization reads.
This is what multi-tenant means: one app and one database serving many customers, with each customer's data walled off. That wall is the most important permission in the product. A member seeing an admin button is a bug. One customer seeing another customer's data is the kind of incident that ends contracts.
### In Firebase
Firestore security rules run on every read and write from the client. A rule for an organization's documents checks that a membership document exists for the signed-in user in that organization, using the exists function on the membership's path. Storing memberships under a predictable ID, the organization ID and user ID joined together, makes that lookup a single document read. Queries must also filter by organization, because rules reject a query that could return documents the user may not read.
### In Postgres
Row level security does the same job. You enable it per table and write a policy that compares the row's organization ID with the organizations the current user belongs to. Supabase is built around this. With Prisma and a plain Postgres database, the usual approach is to scope every query by organization in one shared data access layer, so no route can forget the filter.
### The server bypass
Server code using the Firebase Admin SDK or a Supabase service role key skips these rules entirely. That is intended, and it means every server route must do its own check. A server route with admin credentials and no membership check is an open door.
> Write one test that signs in as a user from organization A and tries to read a record from organization B by its ID. It should fail at the database. Run it before every release.

## Where do permission checks have to happen?
In three places: the interface, the server and the database, and only the last two count as security.
### Interface
Hide or disable what a role cannot do. A member should not see a "Delete workspace" button. This is for clarity. Anyone can open the browser's developer tools and call your API directly, so the interface protects nobody.
### Server
Every API route and server action that changes something follows the same steps: identify the user from the session, load their membership for the organization in the request, check that the role allows the action, then act. Confirm the organization against the membership you loaded, and never trust an organization ID or role sent in the request body.
### Database
Rules or policies, as described above, are the last line. If a server check is missed, the database still refuses.
### One permission function
Do not scatter role comparisons through the code. Write a single function, something like can(membership, 'invoice.create'), backed by a small map from each role to its allowed actions. Routes and components both call it. When you add a role, you edit one map. When a customer later needs custom permissions, you swap the map for stored data and nothing else changes.

## How do invitations and role changes work?
An invitation is a pending membership tied to an email address, accepted by a signed-in user whose email matches.
The flow:
- An owner enters an email and picks a role
- The server creates an invitation record with the organization, email, role, a random token and an expiry date
- An email goes out with a link containing the token
- The recipient signs up or signs in, and the server checks the token, the expiry and that the email matches
- The invitation becomes a membership and is marked used
Details that prevent trouble:
- Only owners and admins can invite, and nobody can grant a role higher than their own
- Tokens are single use and expire, with a week being typical
- An organization must always have at least one owner, so block the last owner from leaving or demoting themselves
- Ownership transfer is its own action, with a confirmation
- Removing a member takes effect immediately on the server, not when their session happens to expire
- If the plan charges per seat, check the seat limit when the invitation is accepted
Role changes and removals are worth logging: who changed what, and when. It costs one extra record per change and answers the question every customer eventually asks after something goes wrong.

## What do real multi-role platforms look like?
They look like the same foundation with more roles on top, each role seeing its own version of the product.
Guardian MindCare is a therapy practice platform I built with five roles: therapists, supervisors, trainees, clients and admins. Each has its own portal, and permissions make sure each role sees only what it should. In a healthcare product, that separation is the core requirement.
![Guardian MindCare: a therapy practice platform I built with separate portals for therapists, supervisors, trainees, clients and admins.](/work/fiverr/guardian.jpg)
SQWAD, my own SaaS, has two kinds of separation. Brands are the tenants, each with its own team members and a branded portal, and each brand's data is isolated from every other brand's. Creators are a different kind of user, who apply to a brand's program and see only their own side of it.
TheHoopGang portal is a smaller version of the same shape: each creator has a dashboard for their own gear and content, and the brand's staff work from an admin side that covers all 50+ creators.
![TheHoopGang creator dashboard: what an approved creator sees, with their status, package and content progress.](/images/hoopgang/creator-dashboard.png)
The lesson from all three is that roles with very different jobs deserve separate interfaces, not one interface with buttons hidden. A creator dashboard and an admin dashboard share data and almost no screens.

## When should I add more roles or custom permissions?
Add a role when a paying customer has a real person who fits none of the existing ones, and add custom permissions only when new roles keep multiplying.
The usual order of growth:
- Owner and member
- Admin, when teams get bigger
- A read-only or viewer role, often for clients, accountants or executives
- A billing-only role, when finance wants invoices without product access
- Guest access to a single project or record
- Custom roles, where the customer builds their own from a list of permissions
Each step is a bigger build than the one before. A named role is a new entry in the permission map. Guest access to one record means permissions on individual resources, with a second table linking users to specific items. Custom roles need a permissions editor, stored role definitions per organization and far more testing.
Many products never need the last step. When a large prospect asks for custom roles, ask what the person needs to do. Often one new named role answers it.

## What mistakes cause rewrites?
The expensive mistakes are structural ones made in the first week.
- Storing the role on the user instead of the membership
- Attaching data to users instead of organizations
- Checking permissions only in the interface
- Trusting an organization ID or role sent from the browser
- Letting the client write its own role, because the security rules allow users to edit their whole profile document
- Comparing role names all over the code instead of asking one permission function
- Giving your support team owner access to customer accounts with no log
- Building a custom permission editor before anyone has asked for one
- Leaving security rules in test mode, open to everyone, after the prototype stage
The fifth one comes up in AI-generated apps I am asked to fix. The role sits in a profile document the user can edit, so anyone can make themselves an admin from the browser console.
For scale: a launchable MVP with auth, a dashboard, a database and payments is my SaaS MVP package, from $1,200 and about 21 days. A platform with several distinct roles, admin tools and integrations is the Full SaaS Platform, from $3,000 and about 45 days.

## The bottom line
Create organizations from day one, store roles on memberships, enforce access on the server and in the database, and route every check through one permission function. Start with an owner, a member and an internal admin. Add roles when customers show you the need, and leave custom permission editors until the same request has come up several times.`,
  },
  {
    slug: 'build-vs-buy-creator-program-software',
    title: 'Build or buy: software for running a brand creator program',
    description: 'When a brand should use existing creator program software, when to build a custom creator portal, and what each needs to do well.',
    date: d,
    updated: '2026-11-17',
    keywords: ['creator program software', 'build creator portal', 'UGC creator management', 'influencer program tools build vs buy'],
    service: 'saas-mvp-development',
    shortAnswer: 'Most brands should start with existing creator program software, because applications, product seeding, content tracking and payouts are already built. Build a custom portal only when your program has unusual workflows or needs deep integration with your own systems.',
    faqs: [
      { q: 'What should creator program software do?', a: 'Handle applications, shipping product to creators, collecting content, paying creators and showing which creators drove sales.' },
      { q: 'When is a custom creator portal worth it?', a: 'When your rewards, approvals or integrations are unusual enough that standard tools force workarounds.' },
      { q: 'Can I run a creator program in spreadsheets?', a: 'For a handful of creators, yes; it breaks down once you track dozens of shipments, posts and payouts.' },
      { q: 'How much does a custom creator portal cost to build?', a: 'A creator portal with creator and admin sides falls between Thomas Osayi\'s SaaS MVP package, from $1,200, and the Full SaaS Platform, from $3,000, depending on roles and integrations.' },
      { q: 'What is the hardest part of creator program software to build?', a: 'Attribution and payouts, because they depend on other companies\' systems and involve real money.' },
      { q: 'Can a brand use existing software and a custom portal together?', a: 'Yes, a brand can keep a standard tool for the common steps and build a small portal only for the one workflow the tool cannot handle.' },
    ],
    takeaways: [
      'Most brands should buy creator program software, and a few with unusual rules should build.',
      'Spreadsheets and DMs are the right tools for the first handful of creators.',
      'The reward model, such as refunds tied to posting, is usually what decides whether standard software fits.',
      'Attribution and payouts are the hardest parts to build and deserve the most careful scoping.',
      'Starting on software first gives you real requirements if you build later.',
    ],
    body: `I have been on both sides of this decision. I have built custom creator portals for brands, including TheHoopGang, and then I built SQWAD, a SaaS platform that Shopify brands use to run creator programs. So I sell one of the "buy" options and I also get paid to build the alternative. Take that as a disclosure, and as the reason I have a clear view of where each one fits.

The short version is that most brands should buy, and a few should build.

## What does a creator program need software to do?
It needs to cover five jobs: applications, product seeding, content collection, payment and attribution.
- Applications and approvals: creators apply with their handles and details, and someone on your team accepts or declines
- Product seeding: getting product to each creator and knowing what was sent, when, and whether it arrived
- Content submission and review: collecting the posts, links and files, and checking them against the brief
- Payouts: flat fees, commissions, refunds or store credit, paid on time with a record
- Attribution: which creator's content led to which sales
Around those sit the smaller needs: a brief creators can find, reminders for people who have not posted, usage rights for the content, and a way for creators to see their own status without messaging you.
Programs differ mostly in the reward model. Some pay per post. Some pay commission through codes or links. Some gift product. Some refund the creator's purchase once they post. The reward model decides how hard the software problem is, because money moving in unusual ways is what standard tools handle least well.

## When are spreadsheets and DMs enough?
For the first handful of creators, a spreadsheet, a form and your DMs are the right tools.
At that size the work is relationships, not process. You are learning which creators fit, what brief works and what reward people respond to. Software would only formalize guesses.
A workable manual setup:
- A form for applications
- A sheet with one row per creator: handle, address, product sent, tracking number, post link, amount owed, paid or not
- Discount codes created by hand in your store, one per creator
- Payments by whatever method you already use, logged in the sheet
### Signs you have outgrown it
- Shipments go out twice or not at all
- Creators message to ask whether you received their post or when they will be paid
- You cannot say which posts sold anything
- One person holds the whole program in their head, and it stalls when they are away
- Approving, shipping and paying each take longer than the conversation that started them
The number varies by program, but the breaking point tends to arrive once you are tracking dozens of creators, each with a shipment, a post and a payment.

## When should a brand buy existing software?
Buy when your program follows a common pattern, which most do.
If creators apply, receive product, post, and are paid a fee or commission, that workflow exists in off-the-shelf tools today. Buying gets you:
- A launch in days, not weeks
- A vendor who maintains integrations when Shopify, Meta or TikTok change something
- Features you would not think to build until you needed them
- Support, documentation and a product that improves without your involvement
- A monthly cost you can stop if the program does not work out
### What to check before signing up
- Does it connect to your store platform natively?
- Does it support your reward model without a workaround?
- How does it attribute sales: codes, links, or ad-level tracking?
- Do creators get their own login and a clear view of their status?
- Is the creator-facing side branded as you or as the vendor?
- How are creators paid, and who handles tax forms?
- Is pricing flat, per creator, or a share of sales?
- Can you export your creators, content and history if you leave?
The last question matters more than it seems. Your creator relationships and content library are assets. Make sure they can leave with you.
SQWAD is the tool I built for this. It gives each Shopify brand a branded portal where creators apply, receive product, submit content, join competitions and get paid, and it traces Meta ads back to the creator whose content made the sale. It now tracks more than $500K in creator-driven sales for the brands on the platform.
![SQWAD: my own SaaS that Shopify brands use to run creator programs, from applications to payouts.](/work/fiverr/sqwad.jpg)

## When is a custom creator portal worth building?
Build when your rewards or approvals are unusual, when the program has to connect deeply to your own systems, or when the creator experience is central to the brand.
- Reward rules no tool supports well, such as refunds tied to posting or gear claims
- A store or internal data that standard tools cannot connect to
- Approval steps specific to your team, with several people signing off
- A program that is itself part of what makes the brand distinctive
- A scale where per-creator or percentage pricing costs more each year than owning the software
TheHoopGang is the clearest example from my work. The brand was gifting gear to dozens of creators with no reliable way to track who posted, what they posted and whether the gift paid off. Its program runs on refundable gifting: creators sign up, claim gear, submit their content and are refunded once they post. I built the portal around that flow, and it now manages 50+ active creators in one place.
![TheHoopGang creator dashboard: an approved creator sees their status, package tracking and content progress.](/images/hoopgang/creator-dashboard.png)
SCOPRO, a coaching board brand I built a creator portal for, has a similar shape: buy the product, post one video, get refunded, then earn on sales. Again, the program is defined by its own reward rule.
Notice what these have in common. Neither is custom for the sake of being custom. Each has a specific rule about money at the center of the program, and the portal is built around that rule.

## What does each option cost?
Spreadsheets cost time, software costs a monthly fee, and a custom portal costs a build up front plus upkeep.
- Spreadsheets: no fee. The cost is staff hours, and errors that grow with every creator added.
- Existing software: a subscription. Pricing models vary: flat tiers, per active creator, or a percentage of attributed sales. Work out the yearly figure at your expected size, not at today's.
- Custom portal: a one-time build and ongoing maintenance. For reference, my SaaS MVP package, from $1,200 and about 21 days, covers auth, a dashboard, a database and payments. A multi-role platform with admin tools and integrations is the Full SaaS Platform, from $3,000 and about 45 days. A creator portal with creator and admin sides and a store integration sits toward that second package.
### The costs people forget
- Maintenance: platform APIs change, and someone has to update the integration
- Hosting, email sending and payment processing fees
- Your team's time specifying, testing and learning the tool
- The cost of waiting: weeks of building are weeks the program runs by hand
A simple comparison is three years of subscription at your expected scale against the build plus three years of upkeep. For most brands the subscription wins. For a large program on percentage pricing, or one doing manual work every week to bend a tool into shape, the build can win clearly.

## Why are attribution and payouts the hard parts?
Because they involve other companies' systems and real money, and both punish mistakes.
### Attribution
There are three common ways to connect a sale to a creator, in rising order of difficulty:
- Discount codes: simple and visible, but codes leak to coupon sites and miss buyers who did not use one
- Tracked links: more precise, but they lose the trail when someone sees a video and buys days later on another device
- Ad-level tracking: when creator content runs as paid ads, tying each ad's sales back to the creator who made it
The third matters most for brands that run creator content as ads, and it is the hardest to build, since it means working with an ads API and matching each ad to a person. It is the problem SQWAD was built around: every Meta ad traced back to the creator whose content made the sale.
### Payouts
Paying dozens of people involves approvals, records, failed payments, and tax paperwork that depends on where you and your creators are. Refund-based rewards add their own cases: partial refunds, returned items, a post deleted after the refund.
> Before choosing any tool or build, write your reward rule as one sentence with its exceptions. "Refund the order after one approved video, unless the item was returned" tells you quickly whether a standard tool can do it.
If you build custom, these are the two areas to scope most carefully, and the two where relying on an existing service, such as a payments provider, beats writing your own.

## Can I start with software and build later?
Yes, and it is usually the best order, because running the program teaches you what you need.
A staged path:
- Run the first creators by hand to learn the brief and the reward
- Move to software when tracking starts to slip
- Note every workaround: the steps your team does outside the tool, every week
- If the list stays short, stay where you are
- If one workflow is clearly custom, build only that piece and connect it to the rest
The hybrid is underrated. A brand can keep a standard tool for the common steps and build a small portal for the one unusual flow, such as gear claims. That is a much smaller project than replacing everything.
When you do build, the months on software were not wasted. You now have real requirements instead of guesses: the fields you use, the reports you open, the questions creators ask. A portal specified from experience is smaller and better than one specified from imagination.

## What goes wrong with custom builds?
Custom portals fail when they try to rebuild a whole platform instead of solving the one problem that justified building.
- Scope creep: starting with a claim flow and ending with a half-finished copy of a full product
- No owner: nobody on the brand's team is responsible for the portal after launch
- No admin side: a good creator experience, with the team still working from spreadsheets behind it
- Fragile integrations: store or social connections built once and never monitored
- Skipping the creator's view: creators who cannot see their status go back to messaging you, and the portal has saved nothing
- Weak access control: creators able to see each other's details, or admin pages reachable by anyone with the link
The builds that work start narrow. The first version handles one flow end to end for both sides: the creator signs up, does what the program asks and sees their status, and the team sees everyone in one admin view. Everything else is added once that loop is in use.

## The bottom line
Use spreadsheets for the first handful of creators, buy software when tracking starts to slip, and build custom only for the parts of your program that tools cannot do, usually an unusual reward rule or a deep integration. If you are a Shopify brand with a standard program, a tool like SQWAD will get you live faster than any build. If your rules are your own, a focused portal is worth it.`,
  },
  {
    slug: 'how-to-hand-off-an-ai-built-app-to-a-developer',
    title: 'How to hand off your AI-built app to a developer',
    description: 'What to prepare before a developer takes over your Lovable, Bolt, Cursor or Replit project, so fixes start fast and cost less.',
    date: d,
    updated: '2026-11-17',
    keywords: ['hire developer for AI built app', 'hand off Lovable project', 'developer for vibe coded app', 'AI app handoff checklist'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Before handing off an AI-built app, put the code in a GitHub repository, list what works and what is broken with steps to reproduce, give access to the database and hosting projects, share where secrets live, and write down which features matter most for launch.',
    faqs: [
      { q: 'Do I need to give a developer my AI builder account?', a: 'Usually not; access to the GitHub repository plus the database and hosting projects is enough.' },
      { q: 'How do I share secrets safely?', a: 'Add the developer to the hosting and database projects instead of pasting keys into chat or email.' },
      { q: 'Can I keep using the AI tool after the handoff?', a: 'Yes, if changes sync through GitHub, which most AI builders support.' },
      { q: 'How should I describe a bug to a developer?', a: 'Give the page, the steps you took, what you expected, what happened instead, and a screenshot or the exact error text.' },
      { q: 'What does a developer fix first in an AI-built app?', a: 'Security comes first, then auth and payments, then the remaining bugs in order of priority.' },
      { q: 'How much does it cost to have a developer fix an AI-built app?', a: 'Thomas Osayi offers a Quick Fix from $60, Fix Plus Features from $200 and Finish and Launch from $600.' },
    ],
    takeaways: [
      'Prepare five things: the code in GitHub, a broken list, a working list, access to each service and a statement of the goal.',
      'Describe every bug as steps, the expected result, the actual result and the exact error text.',
      'Invite the developer to each service with their own login, and never send keys in a chat.',
      'Keep every account and the repository in your own name, with the developer as a guest.',
      'You can keep using the AI tool afterward if both of you work through the same GitHub repository.',
    ],
    body: `A good handoff can turn a week of investigation into a day of fixes. When I take over an app built with Lovable, Bolt, v0, Replit or Cursor, the code is rarely the slow part. The slow part is finding out where the code lives, which problems matter, and how to get into the database.

Everything below is something you can prepare in an afternoon, with no technical background, before you contact anyone.

## What should I prepare before a developer takes over?
Prepare five things: the code in GitHub, a list of what is broken, a list of what works, access to the services the app uses, and a short statement of the goal.
- Code: a GitHub repository with the latest version
- Broken list: each problem with steps, expected result, actual result and a screenshot
- Working list: the features that must keep working
- Access: invitations to the database, hosting and payment accounts
- Goal: launch date, first users, and the one workflow that has to be right
With those in hand, a developer can give you a real estimate instead of a guess, and can start on the first fix the same day. Without them, the first days go to questions: which of the three project copies is current, what "login is broken" means, who owns the Supabase project.

## How do I get the code out of the AI builder and into GitHub?
Use the tool's GitHub connection if it has one, and otherwise download the project and push it to a new private repository.
### By tool
- Lovable: connect GitHub from the project, and it creates a repository and keeps it in sync with your edits
- Bolt: connect GitHub from the project, or download the project as a zip file
- v0: connect the project to a GitHub repository, or deploy it to Vercel
- Replit: use the Git pane to connect the project to GitHub and push
- Cursor or Windsurf: the code is already on your computer, so create a repository on GitHub and push the folder to it
Menus in these tools move around between versions. If you cannot find the option, search the tool's help pages for "GitHub", and failing that, a zip download works.
### Before you share it
- Make the repository private
- Create it under your own GitHub account, so you own it, then invite the developer as a collaborator
- Check that no secrets are in the code. Files named .env or .env.local should be listed in .gitignore and absent from the repository.
- Make sure it is the latest version, the one that matches what you see running
If you have several copies of the project from starting over, say which one is current and archive the rest. Fixing the wrong copy is a real and avoidable waste.
A repository matters beyond access. It gives the developer the history of changes, a safe way to make fixes on a branch, and a way to undo anything. It also lets your AI tool and the developer work on the same code instead of two copies that drift apart.

## How should I describe what is broken?
Describe each problem as steps anyone could follow, with what you expected, what happened and the exact error.
"Payments are broken" could be ten different faults. A report that can be reproduced gets fixed quickly, and one that cannot gets investigated at your expense.
### What each entry needs
- Where: the page or screen, with the URL
- Steps: what you clicked and typed, in order
- Expected: what should have happened
- Actual: what happened instead
- Evidence: a screenshot or screen recording, and the exact text of any error
- Who: which account you were logged in as, and on what device and browser
- Priority: blocks launch, important, or minor
### A worked example
Weak: "Signup is broken."
Useful: "On /signup, I entered a new email and a password and pressed Create account. I expected to land on the dashboard. The button spun for a few seconds and I stayed on the same page. The browser console showed a 403 error on a request to the profiles table. Tested in Chrome on a laptop, with a new email each time. This blocks launch."
That second version tells me, before I open the code, that the account is probably being created and a database permission is rejecting the profile record.
### Finding the error text
In Chrome, right-click the page, choose Inspect, and open the Console tab. Red lines are errors. Copy the text or screenshot it. If the app is deployed on Vercel or Netlify, each failed build has a log, and the last twenty or so lines usually name the problem.
> Record your screen while you reproduce each bug, talking through what you are doing. A two-minute recording often replaces a page of written description.

## Why does a list of what works matter?
Because the developer needs to know what must not change, and AI-built code often has hidden connections between features.
In generated code, a fix in one place can break something in another, because logic is often duplicated and components share state in ways nobody planned. A list of working features becomes the checklist the developer runs after each change.
Write it as short statements:
- A new user can sign up with email and reach the dashboard
- A logged-in user can create a project and see it in their list
- The pricing page loads and the monthly button opens checkout
- An admin can see all users at /admin
Also note the things that look like they work and that you have never tested. "Password reset: never tried it" is useful. So is "payments: only tested with a test card". Those are where surprises live.

## How do I share access without pasting secrets into a chat?
Invite the developer as a member of each service, with their own login, and never send keys or passwords in messages.
### Service by service
- GitHub: add them as a collaborator on the repository
- Supabase: invite them to the organization that holds the project
- Firebase: add their Google account under Users and permissions in the project settings, with the Editor role
- Vercel or Netlify: invite them to the team, or if your plan has no extra seats, let them deploy from their own account first and transfer the project to you at the end
- Stripe: add them as a team member with a developer role, and work in test mode until launch
- Domain registrar: usually not needed. You can add the DNS records yourself from instructions.
- Other APIs, such as email or AI providers: invite them where the service allows it, or create a separate key that you can delete afterward
### Why this is better than sharing keys
Each invitation can be removed in one click when the work ends. Nothing sensitive sits in a chat history. You can see who did what. And you keep ownership: every account stays in your name, with the developer as a guest.
### If keys have already been shared or exposed
It happens often. A key gets pasted into a prompt, committed to the repository or placed in frontend code. Tell the developer. The fix is to rotate the key, meaning you generate a new one in the service's dashboard and delete the old one. In Supabase, the service role key must never appear in browser code. In Firebase, the web config values are meant to be public, and the protection comes from security rules.

## What should the developer know about the goal?
Tell them the launch date, who the first users are, and the one workflow that has to work perfectly.
That information changes the order of work. An app going to twenty invited testers next week needs different things from one opening to the public with paid ads.
Useful things to write down:
- The date, and what is driving it
- Who will use it first, and roughly how many
- The single most important path, for example "a customer books and pays for a session"
- What can be cut or hidden for launch
- Whether the app handles sensitive data: payments, health details, children, documents
- Your budget range
- What you want long term: a quick launch to test the idea, or a base to keep building on
With a clear main workflow, a developer can check security and that path first and leave the cosmetic issues for later. Without it, every bug looks equally urgent and the budget is spent in the order the bugs were listed.

## Can I keep using the AI tool after the handoff?
Yes, as long as both of you work through the same GitHub repository and agree on a few rules.
Many founders want to keep prompting for small changes after the hard problems are fixed, and that is a reasonable way to work. To make it safe:
- Say so at the start, so the developer keeps the project structure the tool expects
- Do not prompt while the developer is in the middle of a fix. Two sets of changes to the same files collide.
- Pull the developer's changes into the tool before you prompt again
- Keep the main branch as the live version, and let larger experiments happen on a separate branch or a copy
- Tell the AI tool to leave certain areas alone once they are fixed, such as authentication, payments and database rules
- After a prompting session, run through your working list
Some things are better left to a person once they are right: security rules, payment webhooks and anything touching user data. AI tools are quick at screens and forms. They are also quick to rewrite a working permission check while changing something nearby.
Ask for a short handover note at the end: how the project is organized, how to run it, where the environment variables are set and what to avoid changing. It helps you, the AI tool and any later developer.

## What does a developer do first, and what does it cost?
I reproduce every issue, fix security first, then payments, then the rest, deploy to your domain and send a short write-up of what changed.
### The order
- Run the app and reproduce each item on the broken list
- Review the security basics: database rules, exposed keys, who can read whose data
- Fix auth and payment problems, since those block real users
- Work through the remaining bugs by priority
- Clean up the duplicated or tangled code that would cause the next bug
- Deploy to Vercel with your domain and confirm the working list still passes
- Write up what was wrong and what changed
Security comes first for a reason. A broken button is embarrassing. A database anyone can read is a liability, and it is a common problem in AI-built apps, because rules are often left open so the prototype works.
### Cost and time
My packages for this work:
- Quick Fix: from $60, about 2 days. One bug or error fixed and explained.
- Fix Plus Features: from $200, about 5 days. Several fixes plus a feature or integration added.
- Finish and Launch: from $600, about 10 days. Taking the app from stuck to live in production.
A good handoff keeps a project toward the lower end of its range, since none of the time goes to finding things. I keep what works and fix what does not. A rewrite only comes up when it is truly cheaper for you.

## What mistakes slow a handoff down?
Most delays come from missing access and unclear versions, not from hard bugs.
- Sending a zip of an old version while continuing to edit the live one
- Continuing to prompt the AI tool during the fix, so the code changes underneath the developer
- Describing symptoms without steps
- Sharing access to one service and forgetting the database
- Accounts created under a co-founder's or contractor's email that nobody can log in to
- Asking for new features in the middle of bug fixing, without agreeing on the new scope
- Hiding the history, when it helps to know that the tool rewrote the login three times
- Waiting until the day before launch
None of these need technical skill to avoid.

## The bottom line
Put the code in a private GitHub repository you own, write down what is broken with steps and what works, invite the developer to each service instead of sending keys, and say what launch looks like. That afternoon of preparation makes the work faster, cheaper and safer, and it leaves you in control of your own app when it is done.`,
  },
];
