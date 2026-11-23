// Generated articles, batch 08 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen08: Post[] = [
  {
    slug: 'fix-404-on-refresh-react-vite-app',
    title: 'Why your React app shows 404 on refresh on Vercel, and how to fix it',
    description: 'Your React or Vite app works until someone refreshes or opens a shared link, then Vercel or Netlify shows 404. Why it happens and the exact rewrite rules that fix it.',
    date: d,
    keywords: ['404 on refresh React app Vercel', 'vercel.json rewrites SPA', 'Netlify _redirects single page app', 'React Router 404 on refresh', 'Vite app 404 on deep link'],
    service: 'fix-ai-built-app',
    shortAnswer: 'A React or Vite single page app has only one real HTML file, index.html, so when the host gets a request for a path like /dashboard it finds no file and returns 404. The fix is a rewrite rule that serves index.html for every path: a rewrites entry in vercel.json on Vercel, or the line /* /index.html 200 in a _redirects file on Netlify.',
    takeaways: [
      'The 404 comes from the host, not from React, because the host looks for a file that matches the URL before your router ever loads.',
      'On Vercel, a vercel.json file at the project root with a rewrite from /(.*) to /index.html fixes it for a Vite single page app.',
      'On Netlify, a _redirects file in the public folder with the line /* /index.html 200 does the same job.',
      'After the rewrite, add a catch-all route in your router so unknown URLs show a proper not found page instead of a blank screen.',
      'Switching to a hash router also stops the 404s, but it makes URLs uglier and is rarely the better fix.',
    ],
    faqs: [
      { q: 'Why does my React app work when I click links but 404 when I refresh?', a: 'Clicking a link lets React Router change the URL in the browser without asking the server, but a refresh sends the full path to the host, which has no file at that path.' },
      { q: 'Where do I put vercel.json for a Vite app?', a: 'Put it in the root of the project that Vercel builds, which is the folder set as Root Directory in the project settings, next to package.json.' },
      { q: 'Does the Netlify _redirects file go in the dist folder?', a: 'Put it in the public folder of a Vite project, because Vite copies everything in public into dist at build time, and a file placed directly in dist gets wiped on the next build.' },
      { q: 'Will a catch-all rewrite break my images or API routes?', a: 'Normally no, because both Vercel and Netlify serve real files first, but rules for proxies or external APIs should sit before the catch-all rule.' },
      { q: 'Does Next.js have this problem?', a: 'No, Next.js generates a route for each page and Vercel understands its routing natively, so the 404 on refresh problem is specific to single page apps built with tools like Vite or Create React App.' },
      { q: 'Can someone fix this for me quickly?', a: 'Thomas Osayi fixes single bugs like a 404 on refresh through his Quick Fix package, from $60 with a two day turnaround.' },
    ],
    sources: [
      { title: 'Vite on Vercel: using Vite to make SPAs', publisher: 'Vercel', url: 'https://vercel.com/docs/frameworks/frontend/vite' },
      { title: 'Rewrites and proxies: history pushState and single page apps', publisher: 'Netlify', url: 'https://docs.netlify.com/manage/routing/redirects/rewrites-proxies' },
      { title: 'Redirects and rewrites overview', publisher: 'Netlify', url: 'https://docs.netlify.com/manage/routing/redirects/overview' },
    ],
    body: `The app looks finished. You click around, every page loads, and then someone texts you a link to the pricing page and it opens on a plain white screen that says 404: NOT_FOUND. Or you press refresh on the dashboard and the whole thing disappears. It is one of the first problems people hit after deploying an app made in Lovable, Bolt or Cursor to Vercel or Netlify, and it has nothing to do with the code they wrote.
The cause is one missing config file. Here is why it happens, the exact rules for each host, why the fix sometimes seems not to work, and what to check once the 404s are gone.
## Why does my React app show 404 when I refresh the page?
Because the host is looking for a file that does not exist, and your React router never gets a chance to run.
A React app built with Vite is a single page app. The build step produces one HTML file, index.html, plus a folder of JavaScript and CSS. When you open the site at the root URL, the host serves index.html, the JavaScript loads, and React Router reads the address bar and draws the right screen. When you click a link inside the app, React Router changes the URL using the browser history API and swaps the screen. No request goes to the server at all.
A refresh is different. The browser sends the full path, say /dashboard/settings, to the host. The host does what static hosts do: it looks for a file called dashboard/settings or dashboard/settings/index.html in the build folder. There is no such file, because the only page that exists is index.html. So the host answers 404 before any of your JavaScript loads.
That is why the bug feels random. It only appears on refresh, on links opened from email or chat, on bookmarks, and on any URL typed straight into the address bar. Every one of those is a direct request to the host.
## How do I fix 404 on refresh on Vercel?
Add a vercel.json file at the root of the project with a rewrite that sends every path to index.html.
Vercel's own Vite guide says deep linking will not work out of the box for a single page app, and gives this configuration for a file named vercel.json:
{ "rewrites": [ { "source": "/(.*)", "destination": "/index.html" } ] }
A rewrite is not a redirect. The address bar keeps showing /dashboard/settings, while Vercel quietly serves the contents of index.html. React Router then loads, reads the path, and shows the settings screen as if the user had clicked their way there.
### Where the file goes
The file sits next to package.json in the folder Vercel builds. For most AI-built apps that is the repository root. If your project lives in a subfolder, check Settings, Build and Deployment, Root Directory in the Vercel dashboard, and put vercel.json in that folder instead.
### If cleanUrls is on
Vercel's docs add one note: if cleanUrls is set to true in vercel.json, drop the file extension, so the destination becomes / rather than /index.html.
### Deploy again
Config changes only apply to new deployments. Commit the file, push, and wait for the new build to finish before testing. Then open a deep URL in a private window so nothing cached gets in the way.
## Why did my vercel.json rewrite not work?
When the rewrite seems to do nothing, it is almost always in the wrong place, in the wrong project, or overridden by something else.
These are the causes I check, in order:
- The file is in the wrong folder. A vercel.json inside src or public is ignored. It must be at the root Vercel builds from.
- The file name is wrong. Vercel.json, vercel.JSON or vercel.json.txt (a common one on Windows with hidden extensions) will not be read.
- The JSON is invalid. A trailing comma or a missing quote makes Vercel fail the deployment or ignore the file. Paste it into any JSON validator if unsure.
- The framework preset is wrong. If the project was imported with the Next.js preset but is really a Vite app, the output directory and routing assumptions are off. Set the preset to Vite, the build command to npm run build and the output directory to dist.
- You are testing an old deployment. Preview URLs are tied to a specific build. Open the latest deployment from the dashboard, not a link from yesterday.
- Another rule matches first. If you added redirects or headers in the same file, read the whole file. Older configs sometimes use a routes array, which cannot be combined with rewrites.
If none of that explains it, open the deployment in the Vercel dashboard and look at the Source tab to confirm vercel.json is actually part of the build.
## How do I fix it on Netlify?
On Netlify, add a file named _redirects with the single line /* /index.html 200, and make sure it ends up in the published folder.
Netlify's documentation describes exactly this rule for apps that use the history pushState method. The 200 status is what turns the rule into a rewrite instead of a redirect, so the visitor keeps the original URL. The same rule can live in netlify.toml as a redirects block with from set to /*, to set to /index.html and status set to 200.
The detail that trips people up is the location. The _redirects file must be in the folder Netlify publishes, which for Vite is dist. But dist is rebuilt from scratch every time, so a file dropped there by hand disappears. Put _redirects in the public folder at the project root. Vite copies everything in public into dist during the build, so the rule ships with every deploy.
Netlify also documents a behavior called shadowing. By default a rewrite will not replace a file that actually exists, so /logo.png still serves the image even with the catch-all in place. That is what you want for a single page app. If you have other redirect rules, Netlify suggests keeping the catch-all as the last line, because rules are read top to bottom.
> After deploying, open the Deploys tab on Netlify and check the deploy summary. It lists how many redirect rules were processed. If it says zero, the file never reached the published folder.
## What about Firebase Hosting and other hosts?
Every static host needs the same idea, a rule that serves index.html for unknown paths, but each one spells it differently.
On Firebase Hosting, running firebase init hosting asks whether to configure the site as a single page app. Answering yes writes a rewrites entry into firebase.json that sends all paths to /index.html. If you said no the first time, you can add that entry by hand and redeploy. On a server you control, such as Nginx, the equivalent is a try_files directive that falls back to index.html.
The point to remember is that this is always a hosting setting, not something you can fix inside React. No change to your routes, components or App.tsx file will stop a 404 that the host returns before your code loads.
## Does the catch-all rewrite break assets, APIs or SEO?
It does not break assets or API routes on Vercel or Netlify, but it changes what a missing page looks like, and you should handle that.
Real files win. Both hosts serve an existing file before applying a catch-all rule, so your JavaScript bundles, images and favicon load normally. Serverless functions in an api folder on Vercel are also matched before the rewrite. If you proxy part of the site to an external API, put that rule above the catch-all so it is checked first.
What changes is the behavior for pages that genuinely do not exist. Before the fix, /nonsense returned a 404. After it, /nonsense returns index.html with a 200 status, and React decides what to show. If your router has no catch-all route, users see a blank page or a broken layout. Add a final route with the path * that renders a not found screen with a link home.
For search engines, a single page app has a bigger issue than status codes: the HTML that arrives is mostly empty until JavaScript runs. That is fine for a logged-in dashboard. For marketing pages that need to rank, consider prerendering or moving those pages to a framework like Next.js. I cover that trade-off in "Vercel build failed? The most common Next.js deploy errors and fixes" and in "How to move a Lovable app to Vercel and your own domain".
## Should I just switch to HashRouter?
You can, and it will stop the 404s, but it is a workaround with real costs, so I only use it when the host cannot be configured.
A hash router puts the route after a # in the URL, like example.com/#/dashboard. Browsers never send the part after the # to the server, so the host only ever sees a request for the root and always serves index.html. No rewrite needed.
The costs:
- URLs look dated and are harder to share or read aloud.
- Analytics tools and ad platforms often treat every hash URL as the same page.
- Search engines generally ignore the part after the hash, so hash routes cannot be indexed as separate pages.
- Switching later breaks every link people have already saved.
On Vercel and Netlify, where a rewrite is one small file, the browser router plus a rewrite is the better choice. Hash routing makes sense for something like a static file share or a host that offers no rewrite setting at all.
## A worked example: the booking link that broke
Here is an illustration with a made-up business. A small studio builds a booking app in Lovable, exports it to GitHub and deploys it on Vercel. Booking works when tested from the homepage. A week later, clients start replying to the confirmation email saying the "manage your booking" link is broken. The link points to /bookings/8f2c, and every client who taps it sees 404: NOT_FOUND.
Nothing is wrong with the booking code. The studio owner always started from the homepage and clicked through, so React Router handled every navigation. Clients come in cold from email, which is a direct request to Vercel.
The fix takes three steps. Add vercel.json at the repository root with the rewrite above, push, and wait for the deployment. Then add a catch-all route that shows "We could not find that page" with a button back to the homepage, so a mistyped booking ID no longer shows a blank screen. Finally, test four URLs in a private window: the homepage, a booking page, a nested settings page and a made-up path.
This kind of deep link problem matters on any site where people land on inner pages. On the LACEUP storefront, for example, product pages get shared and opened directly, so each one has to load from its own URL.
![A product page I built for the LACEUP basketball apparel storefront, with a size selector and add to bag button](/shots/laceup-products-reversible-mesh-jersey.jpg)
## When should I get help with this?
If you have added the rewrite, redeployed, and still see 404s, or the app has a custom server mixed in, it is worth having someone look at the project settings directly.
Most cases are a five minute fix once the cause is clear. The slow part is usually finding which of several overlapping configs is in charge: a vercel.json from one tool, a netlify.toml from another, and a framework preset that does not match the code. AI builders sometimes generate config for a host you are not using, and those files sit in the repo confusing everyone.
I handle this as a Quick Fix, from $60 with a two day turnaround. If the 404 is one item on a longer list, like environment variables, auth redirect URLs and a broken webhook, the Fix Plus Features package from $200 covers up to three fixes plus one small feature. Apps that work but need the launch details finished, from domain to production keys, fit Finish and Launch from $600. The "fix your Lovable app" page explains what I check first.
## The bottom line
A 404 on refresh in a React or Vite app means the host does not know that every path belongs to index.html. On Vercel, add vercel.json at the project root with a rewrite from /(.*) to /index.html. On Netlify, put a _redirects file with /* /index.html 200 in the public folder. Redeploy, test deep URLs in a private window, and add a not found route so unknown paths still show something useful. It is a small file, but it is the difference between a demo that works when you click around and an app that works when real people open the links you send them.`,
  },
  {
    slug: 'resend-vs-sendgrid-vs-postmark',
    title: 'Resend vs SendGrid vs Postmark: transactional email for your AI-built app',
    description: 'Resend vs SendGrid vs Postmark for sign-up, password reset and receipt emails in a Lovable, Bolt or Cursor app: free tiers, starting prices, deliverability and setup.',
    date: d,
    keywords: ['Resend vs SendGrid vs Postmark', 'transactional email service for startups', 'Supabase custom SMTP', 'best email API for React app', 'SPF DKIM DMARC setup'],
    service: 'fix-ai-built-app',
    shortAnswer: 'For most new AI-built apps, Resend is the easiest start: a free tier of 3,000 emails a month at the time of writing and a simple API that works well with React and Supabase. Choose Postmark when deliverability of receipts and password resets matters more than price, and SendGrid when you expect high volume or want marketing and transactional email under one vendor.',
    takeaways: [
      'All three services send reliable transactional email; the bigger risk is skipping SPF, DKIM and DMARC on your domain.',
      'At the time of writing Resend offers 3,000 free emails a month, Postmark 100, and SendGrid a 60 day free trial at 100 emails a day.',
      'Supabase built-in email is meant for testing only, so any real app needs custom SMTP or an email API before launch.',
      'Your email API key is a secret and must live on the server, never in a VITE_ or NEXT_PUBLIC_ variable.',
      'Pick by stage: Resend to start cheaply, Postmark for the most important messages, SendGrid for large volume.',
    ],
    faqs: [
      { q: 'Which is cheapest for a small app?', a: 'At the time of writing Resend is cheapest at low volume because its free plan includes 3,000 emails a month, while Postmark paid plans start at $15 a month and SendGrid Essentials at $19.95 a month.' },
      { q: 'Can I use Resend, SendGrid or Postmark with Supabase Auth?', a: 'Yes, all three appear in Supabase documentation as custom SMTP providers, and you enter their SMTP details under the Auth settings in your Supabase project.' },
      { q: 'Do I need SPF, DKIM and DMARC?', a: 'Yes, Gmail requires every sender to authenticate with SPF or DKIM, and bulk senders need all three, so set them up on your domain before you send to real users.' },
      { q: 'Can I switch email providers later?', a: 'Yes, if your app sends email through one small server function, switching means changing that function, the API key and the DNS records, usually in a few hours.' },
      { q: 'Should marketing emails go through the same service?', a: 'Keep them separate, either in a different service or a separate stream such as Postmark Message Streams, so newsletter complaints do not hurt delivery of password resets.' },
      { q: 'Who can set up transactional email in my app?', a: 'Thomas Osayi connects email providers, domain records and templates as part of his Fix Plus Features package, from $200 for up to three fixes plus one small feature.' },
    ],
    sources: [
      { title: 'Resend pricing', publisher: 'Resend', url: 'https://resend.com/pricing' },
      { title: 'Postmark pricing', publisher: 'Postmark', url: 'https://postmarkapp.com/pricing' },
      { title: 'Twilio SendGrid Email API pricing', publisher: 'Twilio', url: 'https://www.twilio.com/en-us/pricing/email-api' },
      { title: 'Send emails with custom SMTP', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/auth/auth-smtp' },
      { title: 'Email sender guidelines', publisher: 'Google', url: 'https://support.google.com/mail/answer/81126?hl=en' },
    ],
    body: `Most AI-built apps send email from day one: a confirmation link at sign-up, a password reset, a receipt, a "someone booked with you" alert. In the preview it all seems to work. Then real users sign up and the confirmation never arrives, or it lands in spam, or Supabase starts refusing to send after two messages. The builder picked an email setup that was fine for testing and never meant for launch.
Resend, SendGrid and Postmark are the three services I get asked about most. Here is how they compare for a small app, what they cost at the time of writing, and the setup steps that matter more than which one you pick.
## Which transactional email service should I use?
For a new app with modest volume, start with Resend, move important mail to Postmark if deliverability becomes the priority, and choose SendGrid when volume or a single marketing plus transactional vendor matters most.
That is the short version. The longer version is that all three are established services that deliver transactional email well when your domain is set up properly. The differences that actually affect a founder are the free tier, the price of the first paid step, how pleasant the developer experience is, and how strictly the service separates transactional mail from marketing mail.
Transactional email means messages triggered by something a user did: signing up, resetting a password, placing an order, getting a booking confirmed. Marketing email is the newsletter and the promotion. Mailbox providers treat them differently, and a service that mixes them carelessly can let one bad campaign hurt the delivery of your password resets.
If you are not sure which camp your app is in, list every email it sends. For most early products the answer is five to ten transactional messages and no marketing at all yet.
## Why can I not just use the default Supabase email or Gmail?
Because the Supabase default email service is explicitly not meant for production, and a personal Gmail account is not built for application mail.
The Supabase documentation is direct about the built-in service. At the time of writing it only delivers to addresses on your project's team, refuses others with "Email address not authorized", is limited to 2 messages per hour, and is described as best effort with no delivery guarantee. That is why so many apps built in Lovable or Bolt work for the founder and fail for the first real user: the founder's address is on the team, and nobody else's is.
The same Supabase page lists Resend, Postmark and Twilio SendGrid among the providers that work with custom SMTP. Once you connect one, Supabase applies its own default limit of 30 messages per hour, which you can raise on the Rate Limits page.
Sending from a personal Gmail account through SMTP is the other shortcut I see. It works for a handful of messages, then hits sending limits, has no proper bounce handling, and ties your app to one person's login.
## How do Resend, SendGrid and Postmark compare?
Each one is good, and each is best for a different kind of team. All prices below are from each vendor's pricing page at the time of writing and change often, so check before you commit.
### Resend
Best for: new apps, React and Next.js projects, and founders who want to send their first email in an afternoon.
Cost range: free for 3,000 emails a month, capped at 100 a day, with up to 3 custom domains. Pro starts at $20 a month for 50,000 emails and $35 for 100,000, with no daily limit. Scale plans start at $90 a month for 100,000 emails and add more domains.
Pros: the most generous free tier of the three, a clean API, and first-class support for writing email templates as React components. It is also a common default in AI coding tools, so generated code often already expects it.
Cons: a younger company than the other two, and the 100 a day cap on the free plan can bite during a launch spike.
### SendGrid
Best for: apps that expect large volume, or teams that want transactional and marketing email from one vendor.
Cost range: a free trial for 60 days at 100 emails a day. Essentials starts at $19.95 a month for 50,000 to 100,000 emails, and Pro at $89.95 a month for 100,000 to 2,500,000 emails.
Pros: owned by Twilio, very large scale, many integrations, and marketing tools in the same account.
Cons: no permanent free plan, a busier dashboard, and more settings to understand before your first send.
### Postmark
Best for: apps where password resets, receipts and login codes simply must arrive fast.
Cost range: a free developer plan of 100 emails a month with no overage. Paid plans start at 10,000 emails a month: Basic at $15, Pro at $16.50 and Platform at $18, with per thousand overage that drops at higher volume.
Pros: a long-standing focus on transactional mail, Message Streams that keep transactional and broadcast mail on separate infrastructure, and clear delivery reporting.
Cons: the free tier is only useful for testing, and there is no plan between 100 and 10,000 emails.
## What will it actually cost for a small app?
For an app sending a couple of thousand emails a month, Resend is free, Postmark is about $15 a month, and SendGrid is $19.95 a month once the trial ends.
Here is how to estimate your own number. Count the emails per active user per month: a sign-up confirmation, maybe two login links, a receipt and a few notifications. A booking app with 300 active customers sending about six emails each is around 1,800 emails a month. That fits Resend's free tier comfortably, as long as no single day goes past 100. It is well inside Postmark's 10,000 starting tier and SendGrid's Essentials plan.
Above roughly 50,000 emails a month the gap narrows, and each vendor's pricing slider gives the exact figure. Those sliders change more often than blog posts do, so use them rather than any table you find online, including this one.
The cost that surprises people is not the email bill. It is the time lost when messages land in spam because the domain was never authenticated. That is the next section.
## How do I set up SPF, DKIM and DMARC?
Add the DNS records your email service gives you to your domain, wait for the service to verify them, then add a basic DMARC record.
Google's sender guidelines require everyone sending to Gmail to authenticate with SPF or DKIM, use TLS and keep spam complaints low. Senders of more than 5,000 messages a day to Gmail must use SPF, DKIM and DMARC, align the From domain, and support one-click unsubscribe on marketing mail. Google also asks that the spam rate in Postmaster Tools stay below 0.3 percent.
The steps are similar on all three services:
- Add your domain in the email service. Use a subdomain such as mail.yourdomain.com or send.yourdomain.com so app mail is separate from your normal inbox mail.
- Copy the records it shows: usually a TXT record for SPF, one or more DKIM records, and sometimes an MX record for bounces.
- Add them at your DNS provider, which is wherever your domain's nameservers point: your registrar, Cloudflare or Vercel.
- Click verify in the email service. DNS changes can take from minutes to a few hours.
- Add a DMARC TXT record at _dmarc.yourdomain.com. Starting with a policy of none plus a reporting address is common, then tighten it once reports look clean.
> Send your first real test to a Gmail address and open "Show original". It shows whether SPF, DKIM and DMARC passed. If any say fail, fix DNS before you launch.
## How do I wire the service into my app safely?
Send email only from server code, keep the API key out of anything the browser can see, and route every message through one function.
In a Vite app the danger is the prefix. Anything named VITE_ is bundled into the JavaScript that every visitor downloads. In Next.js the same goes for NEXT_PUBLIC_. I regularly see generated code with VITE_RESEND_API_KEY, which means anyone can open the browser tools, copy the key and send email as your domain. Email API keys belong in server environment variables only.
Where the server code lives depends on your stack:
- Supabase apps: an edge function that calls the email API, with the key stored as a Supabase secret, plus custom SMTP in the Auth settings for sign-up and reset emails.
- Next.js apps: a route handler or server action.
- Firebase apps: a Cloud Function, or the Trigger Email extension.
Put all sending in one function, something like sendEmail(to, template, data). Then switching providers later is a small change, and you can add logging, retries and a check that stops the same receipt going out twice when a payment webhook fires again. If your receipts depend on Stripe, "Stripe payment went through but your app did not update? Fix the webhook" covers that half of the flow.
## Which should I choose for my situation?
Match the service to your stage and to which emails would hurt most if they went missing.
- Solo founder testing an idea: Resend. The free tier covers early users and the setup is the shortest.
- App where every message is critical, such as login codes, medical appointment reminders or receipts: Postmark, and keep its Message Streams separate from anything promotional.
- Team planning newsletters soon, or expecting high volume: SendGrid, so marketing and transactional mail share one account with separate settings.
- Already sending through Supabase Auth: any of the three via custom SMTP, chosen on the points above.
None of these choices is permanent. What is hard to undo is a domain reputation damaged by months of unauthenticated mail.
## A worked example
Here is an illustration with a made-up product. A tutoring marketplace built in Bolt uses Supabase. Students sign up, book sessions and pay with Stripe. In testing, the founder gets every confirmation. After launch, half the first 40 students never confirm their accounts.
The review finds three problems: Supabase is still on its default email service, the booking confirmation is sent from the browser with a VITE_ prefixed key, and the domain has no DKIM record. The fix is to create a Resend account, verify send.tutorsite.com with SPF and DKIM records, add a DMARC record, connect Resend as custom SMTP in Supabase, rotate the exposed key, and move booking emails into an edge function. A test to Gmail shows all three checks passing.
## The bottom line
Resend, SendGrid and Postmark will all deliver your app's email if the domain is authenticated and the key stays on the server. Start with Resend for the free tier and fast setup, choose Postmark when the most important messages must arrive every time, and choose SendGrid for large volume or combined marketing. Whichever you pick, replace the Supabase default email before launch, add SPF, DKIM and DMARC, and send everything through one server-side function you can change later.`,
  },
  {
    slug: 'supabase-edge-function-errors',
    title: 'Supabase edge function errors: CORS, 401 Invalid JWT, missing secrets and timeouts',
    description: 'How to read and fix the most common Supabase edge function errors in an AI-built app: CORS failures, 401 Invalid JWT, undefined secrets, 546 limits and silent 500s.',
    date: d,
    keywords: ['Supabase edge function error', 'Supabase edge function CORS error', 'Supabase edge function 401 invalid JWT', 'supabase secrets set', 'Supabase edge function timeout'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Most Supabase edge function errors come from four causes: a missing OPTIONS handler or CORS headers, the built-in JWT check rejecting the request with a 401, a secret that was never set in the hosted project, and functions that hit the CPU or wall clock limits. Start with the function Logs tab in the dashboard, which shows each invocation and your console output, then fix the cause it points to.',
    takeaways: [
      'A CORS error in the browser often hides a different failure, because error responses without CORS headers are blocked before you can read them.',
      'A 401 whose body says Invalid Token or Missing authorization header comes from the built-in JWT check, not from your own code.',
      'Secrets in a local .env file do not exist in production until you run supabase secrets set or add them in the dashboard.',
      'At the time of writing an edge function gets 2 seconds of CPU time and 150 seconds of wall clock time on the free plan, so long jobs need a different design.',
      'Log the reason before every error response, because invocation logs do not include request or response bodies.',
    ],
    faqs: [
      { q: 'Where do I find Supabase edge function logs?', a: 'In the Supabase dashboard, open Edge Functions, select the function and open the Logs tab, which lists invocations and console output together.' },
      { q: 'Why do I get a CORS error only when the function fails?', a: 'Your success path probably adds CORS headers but your error path does not, so the browser blocks the error response and reports a CORS problem instead of the real error.' },
      { q: 'Do I need to redeploy after setting a Supabase secret?', a: 'No, Supabase documentation says functions read a newly set secret immediately, so you only need to call the function again.' },
      { q: 'How do I let Stripe or another service call my edge function?', a: 'Turn off JWT verification for that one function, because Stripe does not send a Supabase token, and verify the request inside the function using the Stripe signature instead.' },
      { q: 'What does a 546 error mean?', a: 'A 546 response means the function hit a resource limit such as memory or CPU time, and the shutdown reason in the logs says which one.' },
      { q: 'Can someone fix a broken edge function for me?', a: 'Thomas Osayi fixes a single broken edge function through his Quick Fix package, from $60 with a two day turnaround.' },
    ],
    sources: [
      { title: 'Unable to call Edge Function', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/troubleshooting/unable-to-call-edge-function' },
      { title: 'Edge Function 401 error response', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/troubleshooting/edge-function-401-error-response' },
      { title: 'Edge Functions environment variables', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/functions/secrets' },
      { title: 'Edge Functions limits', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/functions/limits' },
      { title: 'Edge Functions logging', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/functions/logging' },
    ],
    body: `Edge functions are where AI builders put the parts of an app that cannot run in the browser: calling OpenAI, creating a Stripe checkout, sending email, talking to a third party API with a secret key. They are also where a lot of AI-built apps quietly fail. The button spins, the console says "Failed to send a request to the Edge Function" or "blocked by CORS policy", and the prompt to fix it produces a new version with the same problem.
The good news is that the errors fall into a few groups, and Supabase gives you enough logging to tell which one you have. Here is how I work through them.
## How do I find out what my edge function error actually is?
Open the function's Logs tab in the Supabase dashboard before changing any code, because the browser error is often not the real one.
In the dashboard, go to Edge Functions, select the function and open Logs. Supabase documents that this view shows invocations and console logs in one list, along with boot and shutdown events and uncaught exceptions. Each invocation shows its status code and timing. If an invocation is missing entirely, the request never reached your code, which points to the URL, the deployment or the JWT check.
From the terminal, the Supabase CLI has a unified logs command. Running supabase logs with the remote flag and the functions service shows your console output, and the function-edge service shows invocation events. Flags such as search and since narrow it down, for example to messages containing "error" in the last 30 minutes.
Two details from the logging docs matter:
- Invocation logs do not contain request or response bodies. If you need to know what came in, log it yourself with console.log, leaving out passwords, tokens and personal data.
- A single log message can be up to 10,000 characters, and a function can log up to 100 events in 10 seconds, so do not log inside tight loops.
> Before every place your function returns an error, add a console.error line that says why. It costs nothing and turns most debugging sessions from an hour into a minute.
## Why does my edge function fail with a CORS error?
Because the function is not answering the browser's OPTIONS preflight, or because some of its responses leave out the CORS headers.
When a web app calls a function on a different domain with an Authorization header, the browser first sends an OPTIONS request asking for permission. Your function has to answer that with an ok response and the right Access-Control headers. If it does not, the browser never sends the real request.
Supabase's troubleshooting guide lists the common causes: a missing Access-Control-Allow-Origin header, unhandled OPTIONS requests, invalid or expired JWTs, missing Authorization headers, functions that were never deployed, and wrong function URLs. For the headers themselves, it recommends importing corsHeaders from @supabase/supabase-js/cors on version 2.95.0 or later. On older versions, define them in a shared file such as _shared/cors.ts, allowing the authorization, x-client-info, apikey and content-type headers.
The fix has two parts:
- At the very top of the handler, if the request method is OPTIONS, return a response with the CORS headers and nothing else.
- Include the CORS headers in every other response, including errors and the catch block.
The second part is the one AI-generated functions miss most. The happy path returns JSON with CORS headers. A thrown error returns a plain 500 without them. The browser blocks that response and reports a CORS error, so you spend an hour on CORS when the real problem was a missing secret.
## Why am I getting a 401 Invalid JWT or Missing authorization header?
Because the platform's built-in JWT check rejected the request before your code ran, or because your own code returned a 401.
Supabase's 401 guide gives a simple test: read the response body. If it says "Invalid Token" or "Missing authorization header", the platform check rejected it. If the body is your own message or empty, your code returned the 401, so search the function for 401 and trace the condition.
For platform rejections, the guide names three causes:
- Missing Authorization header. The supabase-js client adds it automatically when you call functions.invoke. A plain fetch or cURL call must add it.
- Invalid key. The request carries a key or token the check does not accept.
- Incompatible keys. Projects on the newer asymmetric signing keys can fail the legacy check. The documented fix is to turn off JWT verification for the function in the dashboard, redeploy with the no-verify-jwt flag in the CLI, or set it through the Management API.
JWT verification is on by default. The auth docs show that you can turn it off per function in supabase/config.toml with a functions section for that function name and verify_jwt set to false.
Turning it off is correct for functions that outside services call, like a Stripe webhook, because Stripe does not have a Supabase token. It is not a fix for user-facing functions on its own. If you turn it off, your function must check the caller itself, either by verifying the user's token with the Supabase client or by checking a webhook signature. Otherwise anyone who finds the URL can call it.
## Why is my secret undefined in production?
Because local secrets in a .env file are not uploaded when you deploy, so the hosted function has nothing to read.
Edge functions read secrets with Deno.env.get and the secret's name. Some come built in. At the time of writing the docs list SUPABASE_URL, SUPABASE_DB_URL, SUPABASE_ANON_KEY and SUPABASE_SERVICE_ROLE_KEY among them, plus newer variables for the publishable and secret key format. Anything else, such as STRIPE_SECRET_KEY or OPENAI_API_KEY, you must set yourself.
The commands from the Supabase docs:
- supabase secrets set STRIPE_SECRET_KEY=your_value sets one secret.
- supabase secrets set with the env-file flag pointing at a file sets many at once.
- supabase secrets list shows which names exist, without the values.
For local development, values go in supabase/functions/.env, which should be in .gitignore. The docs add two rules worth knowing: secret names cannot start with SUPABASE_, and only project Owners or Administrators can create or delete secrets. Supabase also says no redeploy is needed, since functions read a new secret immediately.
The classic symptom is an error like "Neither apiKey nor config.authenticator provided" from the Stripe library, or a 401 from OpenAI, both meaning the key arrived as undefined. Check the names match exactly, including case.
## Why does my function time out or return a 546?
Because it hit one of the runtime limits, and the shutdown reason in the logs tells you which.
At the time of writing the Supabase limits page lists a maximum of 256MB of memory, 2 seconds of CPU time, a wall clock duration of 150 seconds on the free plan and 400 seconds on paid plans, and a request idle timeout of 150 seconds. A 546 response with WORKER_LIMIT or WORKER_RESOURCE_LIMIT means one of those was exceeded.
CPU time is time spent computing, not waiting. Waiting on a fetch to OpenAI does not use much CPU. Parsing a large CSV, resizing images or looping over thousands of rows does. Wall clock time is total elapsed time, so a slow third party API can hit it even when CPU is low.
Fixes, depending on which limit:
- Memory or CPU: process data in smaller batches, move heavy work like image processing to a dedicated service, and avoid loading whole tables into memory.
- Wall clock: return a response quickly and let the slow work finish separately, for example by writing a job row and processing it with a scheduled function.
- Idle timeout: stream the response for long AI generations so the connection is never idle.
## Why does it work locally but fail after deploying?
Usually because the deployed version is different from what you are running locally, or the app is calling the wrong URL.
Check these in order:
- Was the latest version deployed? Lovable and Bolt deploy functions for you, but code edited in GitHub or Cursor often needs supabase functions deploy with the function name.
- Is the app calling the right project? A hard-coded project URL from an old project is common after remixing an app.
- Is the function name exactly the same? Calls are case sensitive.
- Are imports reachable? A package that resolved locally may fail at boot in the hosted runtime, which appears as a boot error in the logs.
- Are secrets set in the hosted project, as covered above?
Also remember that a function using the service role key bypasses row level security entirely. That is sometimes needed, but it means the function must decide who is allowed to do what. "Is your Lovable or Bolt app leaking data? Check Supabase row level security" covers the policies side.
## A worked example
Here is an illustration with a made-up app. A meal planning app built in Lovable has a generate-plan function that calls OpenAI. Users report that the generate button spins and then shows nothing. The browser console says the request was blocked by CORS policy.
The Logs tab tells a different story. Every invocation returns a 500, and the console output shows "OPENAI_API_KEY is not set". The founder had added the key in a local .env file while testing in Cursor, and it never reached the hosted project. The function's catch block returned a plain error with no CORS headers, so the browser reported CORS.
The fix: set the secret with supabase secrets set, add CORS headers to the catch block, add an OPTIONS handler at the top, and add a console.error before each error response. Generation then takes around 40 seconds, under the wall clock limit, so streaming can wait.
## When should I get help?
If the logs show an error you cannot explain, or you have turned off JWT verification to make something work and are not sure the function is still protected, that is the time to get another set of eyes on it.
I fix single broken functions as a Quick Fix, from $60 in two days. When the edge function is one of several launch blockers, Fix Plus Features from $200 covers up to three fixes and one small feature. The "fix your Lovable app" page lists the other problems I usually check alongside.
## The bottom line
Read the Logs tab before you touch the code. A CORS error usually means a missing OPTIONS handler or an error path without CORS headers. A 401 with Invalid Token or Missing authorization header comes from the platform check. An undefined secret means it was never set in the hosted project. A 546 means a CPU, memory or time limit. Fix the cause the logs point to, log the reason before every error, and do not turn off JWT verification without adding your own check.`,
  },
  {
    slug: 'move-replit-app-to-vercel',
    title: 'How to move a Replit app to Vercel: code, env vars, database and build settings',
    description: 'A step by step guide to moving an app built with Replit Agent to Vercel: exporting the code, moving secrets, getting data out of the Replit database and fixing the build.',
    date: d,
    keywords: ['move Replit app to Vercel', 'export Replit project', 'Replit to Vercel migration', 'Replit database export', 'deploy Replit app on Vercel'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Download the project as a zip or connect it to GitHub with the Replit Git tool, push it to a repository, and import that repository in Vercel with the right framework preset and build settings. Then copy every Replit secret into Vercel environment variables, move the data from the Replit database to an external Postgres provider, and replace anything tied to Replit, such as Replit Auth or files saved to local disk.',
    takeaways: [
      'Replit lets you download a project as a zip from the three-dot menu in the file tree, or sync it with GitHub through the Git tool.',
      'An Express backend can run on Vercel, but it becomes a single serverless function, so in-memory sessions, local file uploads and long-running jobs need changing.',
      'Current Replit development databases run on Replit infrastructure and are not exposed publicly, so plan how to export the data before you leave.',
      'Every Replit secret must be recreated as a Vercel environment variable, and only VITE_ prefixed values reach the browser in a Vite frontend.',
      'Not every Replit app should move: long-running bots, WebSocket servers and background workers fit a traditional server better than Vercel.',
    ],
    faqs: [
      { q: 'How do I download my code from Replit?', a: 'Open the three-dot menu at the top of the file tree and choose Download as zip, or connect the project to a GitHub repository through the Git tool.' },
      { q: 'Can I keep using the Replit database after moving to Vercel?', a: 'Not reliably, because current Replit development databases are only reachable from inside the Replit app, so the usual path is to move the data to a hosted Postgres provider.' },
      { q: 'Will my Express server work on Vercel?', a: 'Usually yes, since Vercel detects Express entry files such as server.ts or src/index.ts and runs the app as one function, but express.static is ignored and in-memory state does not persist.' },
      { q: 'Do I need to change my code to move from Replit?', a: 'Usually a little: remove Replit specific plugins and config files, replace Replit Auth if you used it, and move file uploads and sessions to external services.' },
      { q: 'Is Vercel cheaper than Replit?', a: 'It depends on traffic and plan, so compare both pricing pages for your usage, but most people move for a custom setup, preview deployments and a standard Git workflow rather than price alone.' },
      { q: 'Can someone move my Replit app for me?', a: 'Thomas Osayi moves AI-built apps to production hosting through his Finish and Launch package, from $600 for apps whose core features already work.' },
    ],
    sources: [
      { title: 'Projects and files: download as zip and Git', publisher: 'Replit', url: 'https://docs.replit.com/help/projects-and-files' },
      { title: 'Database upgrade: from Neon to Helium', publisher: 'Replit', url: 'https://docs.replit.com/features/data-and-storage/database-upgrade' },
      { title: 'Production databases', publisher: 'Replit', url: 'https://docs.replit.com/references/data-and-storage/production-databases' },
      { title: 'Express on Vercel', publisher: 'Vercel', url: 'https://vercel.com/docs/frameworks/backend/express' },
      { title: 'Vite on Vercel', publisher: 'Vercel', url: 'https://vercel.com/docs/frameworks/frontend/vite' },
    ],
    body: `Replit is a fast way to get an app running. Replit Agent writes the code, the workspace runs it, and publishing puts it online without touching a terminal. Then the app starts to matter, and people want things Replit makes less obvious: a normal GitHub workflow, preview links for every change, a host their next developer already knows, or simply having all of their app in places they control.
Moving to Vercel is very doable, but it is more than uploading files. A Replit app usually depends on its database, its secrets and a long-running server in ways that only show up after the move. Here is the full process, in the order I would do it.
## Can I move a Replit app to Vercel?
Yes, if the app is a web frontend with an API that answers requests and finishes, which describes most apps built with Replit Agent.
Vercel runs your frontend as static files on its network and your backend as serverless functions. A function starts when a request arrives, handles it and stops. That model fits dashboards, booking tools, internal tools, AI wrappers and most SaaS MVPs.
It does not fit everything. These kinds of apps are better on a host that keeps a server running all the time, such as Railway, Render or Fly.io, or on Replit itself:
- Discord or Telegram bots that hold a connection open.
- Apps built around WebSockets for live chat or multiplayer features.
- Background workers that loop forever, poll a queue or run long jobs.
- Apps that write files to local disk and read them back later.
If your app is mostly in the first group with one exception, like a nightly job, you can still move it and use Vercel Cron Jobs for the job. If the server's main purpose is staying connected, stay put or pick a different host.
## How do I get my code out of Replit?
Download the project as a zip, or connect it to GitHub through Replit's Git tool, and push it to a repository Vercel can read.
Replit's documentation describes both. For a zip, open the three-dot menu at the top of the file tree and choose Download as zip. If the download fails on a large project, the docs suggest opening the Shell, running zip -r project.zip . and downloading that file from the file tree.
For GitHub, link your GitHub account in your Replit account's connected services, open the Git tool in the project and connect a repository. Auto-sync in the Git pane keeps both sides in step, which is useful if you want to keep editing on Replit for a while after the move.
I prefer GitHub, because Vercel deploys from a repository anyway, and the history shows exactly what changed.
Before the first push, clean up:
- Make sure .env files and anything holding secrets are in .gitignore.
- Leave node_modules out of the repository.
- Note the files that only make sense on Replit, such as .replit and replit.nix. They do no harm on Vercel, but they describe how the app runs, so read them before deleting. The run command in .replit tells you how the app starts.
## What does a typical Replit app need changed?
Expect to adjust how the server starts, how static files are served, and any Replit specific packages.
A common shape for a full stack app from Replit Agent is a React frontend built with Vite in one folder, an Express server in another, shared types between them, and an ORM such as Drizzle talking to Postgres. In development the Express server often serves the Vite app too, all on one port.
On Vercel, these are the changes that come up:
- Express entry point. Vercel's Express docs say it detects a file that imports express at locations such as app.ts, index.ts, server.ts, src/index.ts or src/server.ts. The file must export the app as a default export or use app.listen. If your server lives at server/index.ts, you may need to point to it or move it.
- Static files. Vercel's docs state that express.static is ignored on Vercel. Static assets go in a public folder, or you deploy the Vite build as the frontend and let Express handle only the API routes.
- Replit specific Vite plugins. Some projects include development plugins from Replit in vite.config.ts. Remove them, or load them only when running on Replit, if the build fails on them.
- Port and host. Hard-coded ports and 0.0.0.0 bindings matter less on Vercel, but check nothing depends on them.
For apps where the frontend and backend are tangled together, it is often cleaner to split them: the Vite frontend on Vercel and the API as Vercel functions under an api folder.
## Which build settings do I use on Vercel?
Import the repository in Vercel, choose the framework preset that matches your frontend, and confirm the build command and output folder.
For a Vite frontend the usual values are:
- Framework preset: Vite.
- Build command: npm run build, or whatever the build script in package.json says.
- Output directory: dist, unless vite.config.ts sets a different outDir. Some Replit templates build into dist/public, so check.
- Root directory: the repository root, or the client folder if the frontend lives in a subfolder with its own package.json.
- Node.js version: set it in project settings to match what ran on Replit.
Run npm run build on your own computer first. If it fails locally, it will fail on Vercel, and the local error is easier to read. Type errors are a common surprise, because the Replit dev server runs code without a strict type check while a production build may stop on the first error. "Vercel build failed? The most common Next.js deploy errors and fixes" covers many of the same errors for Next.js projects.
If your app uses client-side routing, add a rewrite so deep links do not 404 on refresh. Vercel's Vite docs give the vercel.json rewrite for that.
## How do I move my secrets and environment variables?
Copy every value from Replit's Secrets into Vercel's Environment Variables, check which ones the browser needs, and redeploy.
Open the Secrets tool on Replit and list every key. Then in Vercel go to Project Settings, Environment Variables and add each one. Decide for each whether it applies to Production, Preview, Development or all of them. Live Stripe keys usually belong only in Production, with test keys in Preview.
Three rules prevent most problems:
- In a Vite frontend, only variables prefixed with VITE_ are available in browser code, and anything with that prefix is visible to every visitor. Secret keys must never carry it.
- Some values were set by Replit automatically and never appeared in your Secrets list. DATABASE_URL on current Replit databases is the main one. You will create a new one for the new database.
- Environment variable changes apply to new deployments, so redeploy after adding or changing values.
> Before switching domains, search the codebase for the words replit and repl. Hard-coded callback URLs, CORS origins and OAuth redirect addresses pointing at a .replit.app domain are easy to miss and break sign-in after the move.
## What do I do about the database?
Plan the database move first, because it is the part you cannot redo easily, and current Replit databases are not reachable from outside the app.
Replit's documentation describes the current setup. New development databases run on Replit's own PostgreSQL infrastructure, called Helium, on PostgreSQL 16, and are only accessible from within your app. Older databases ran on Neon, and Replit's upgrade moved them to Helium, keeping the old connection string as NEON_DATABASE_URL in Secrets. Published apps get a separate production database with its own DATABASE_URL.
So the usual path is:
- Create a database with a hosted Postgres provider such as Neon or Supabase, or one from the Vercel Marketplace.
- Recreate the schema. If the app uses Drizzle or Prisma, running its migrations or schema push against the new DATABASE_URL does this.
- Export the data from inside Replit. From the Replit Shell, where DATABASE_URL is already set, pg_dump can write a dump file if it is available. If not, a small script that reads each table and writes it out does the job. Remember the production database is separate from development, so export the one with real customer data.
- Import into the new database, check row counts table by table, then set the new DATABASE_URL in Vercel.
Replit's upgrade notes say Helium does not use SSL, while most hosted providers require it. If your code turns SSL off because it was needed on Replit, change that or the new connection will fail.
Older projects may also use the Replit key value store. That data needs a script that reads each key and writes it into a proper table.
## What else breaks after the move?
Anything that relied on a server staying alive between requests, and anything tied to Replit itself.
- Sessions in memory. Express apps often use the default memory store for sessions. On serverless functions memory does not persist, so users get logged out at random. Store sessions in the database or use token based auth.
- File uploads. Files saved to a local uploads folder vanish. Use object storage such as Vercel Blob, Supabase Storage or S3.
- Scheduled work. A setInterval in the server never runs reliably. Use Vercel Cron Jobs calling an API route.
- Replit Auth and other Replit services. Anything that depends on the Replit platform needs a replacement, such as Supabase Auth, Clerk or Firebase Authentication.
- Error handling. Vercel's Express docs warn that unhandled errors can leave the function in a bad state, so add a proper error handler.
## A worked example
Here is an illustration with a made-up app. A property manager built a maintenance request tracker with Replit Agent: tenants submit requests with photos, staff update statuses, and a daily email lists open jobs. It has a Vite React frontend, an Express API, Drizzle and a Replit Postgres database.
The move takes five steps. The project goes to GitHub through the Git tool. Photos move from a local uploads folder to object storage, and the existing ones are copied over. The production data is exported from the Replit Shell and imported into Neon, with row counts checked. The daily email moves from setInterval to a Vercel Cron Job. Sessions move from memory to the database. Secrets are recreated in Vercel, the build output folder is corrected to dist/public, and a rewrite fixes deep links. The old Replit app stays live until the new one has run cleanly for a week.
## When is it worth hiring help?
When the app has real users and real data, because a broken migration loses customer records, not just time.
If the app is small and has no users yet, the steps above are a good weekend project. Once there are paying customers, I would rather run the export, test the import, and switch over on a quiet evening with a rollback plan. My Finish and Launch package, from $600 over ten days, covers moving a working app to production hosting with its database, environment variables and domain. If you only need one or two parts sorted, Fix Plus Features from $200 covers up to three fixes plus a small feature. "How to hand off your AI-built app to a developer" lists what to prepare.
## The bottom line
Moving a Replit app to Vercel takes five jobs: get the code into GitHub, set the right build settings, recreate every secret as a Vercel environment variable, move the data out of the Replit database to a hosted Postgres provider, and replace anything that depended on a long-running server or on Replit itself. Do the database first, test the build locally, and keep the Replit version running until the Vercel one has proved itself. If the app is a bot or a WebSocket server, choose a host that keeps servers running instead.`,
  },
  {
    slug: 'review-ai-generated-code-checklist',
    title: 'How to review AI-generated code: a practical checklist',
    description: 'A practical checklist for reviewing code from Lovable, Bolt, Cursor or Claude: security, data model, error handling, duplication, dependencies and tests, by priority.',
    date: d,
    keywords: ['how to review AI generated code', 'AI generated code review checklist', 'code review for vibe coded apps', 'AI code security review', 'review Cursor generated code'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Review AI-generated code in order of risk, not line by line: first security and access control, then the data model, then error handling, then duplicated logic, then dependencies, and finally tests. Each step has a few concrete checks, such as signing in as a second user to see whether you can load the first user\'s data, that find most serious problems in an afternoon.',
    takeaways: [
      'Start with access control, because broken access control is number one in the OWASP Top 10 for 2025 and AI builders often get it wrong.',
      'The data model matters more than code style: if the tables and their ownership are right, most other problems can be fixed in place.',
      'Look for missing error paths, because generated code usually handles the happy path and ignores failed requests, empty states and timeouts.',
      'Check every dependency exists, is maintained and is actually used, and run npm audit before launch.',
      'A few tests on the money and permission paths give more safety than broad coverage of everything else.',
    ],
    faqs: [
      { q: 'What should I check first when reviewing AI-generated code?', a: 'Check access control first: sign in as two different users and confirm neither can read or change the other\'s data, including through direct API or database calls.' },
      { q: 'Can a non-developer review AI-generated code?', a: 'A non-developer can run the behavior checks in this list, such as the two-user test and the secret search, but reading the data model and server code usually needs a developer.' },
      { q: 'How long does a review of an AI-built app take?', a: 'A focused review of a typical small app takes a few hours to a day, depending on how many screens, roles and integrations it has.' },
      { q: 'Should I ask the AI to review its own code?', a: 'It helps to ask for a second pass on specific risks, but treat the answer as a lead to check, because the same tool that missed a problem can miss it again.' },
      { q: 'Is AI-generated code less secure than human code?', a: 'Not necessarily, but it tends to fail in predictable places, such as permissive database rules and secrets in browser code, so a targeted review catches a lot.' },
      { q: 'Can someone review my AI-generated code for me?', a: 'Thomas Osayi reviews and fixes AI-built apps, starting with a Quick Fix from $60 for one bug and Fix Plus Features from $200 for up to three fixes plus one small feature.' },
    ],
    sources: [
      { title: 'OWASP Top 10:2025 introduction', publisher: 'OWASP Foundation', url: 'https://top10.owasp.org/2025/0x00_2025-Introduction/' },
      { title: 'npm audit command documentation', publisher: 'npm', url: 'https://docs.npmjs.com/cli/v11/commands/npm-audit/' },
      { title: 'Securing Edge Functions', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/functions/auth' },
    ],
    body: `AI tools can write a working app faster than most people can read one. That is the problem. Lovable, Bolt, Cursor and Claude produce thousands of lines that look plausible, compile and demo well, and nobody has really read them. Before real users and real money arrive, someone should.
You do not need to review every line. You need to review the right things in the right order. This is the checklist I use when someone hands me an AI-built app, arranged from the problems that can hurt you most to the ones that only slow you down.
## How should I review AI-generated code?
Review it by risk, starting with security and ending with tests, and check behavior as well as reading code.
Reading thousands of generated lines top to bottom does not work. You lose focus, and the dangerous parts look as tidy as the harmless ones. Instead, ask a fixed set of questions in order:
- Security: can anyone see or change data they should not?
- Data model: is the shape of the data right for the product?
- Error handling: what happens when something fails?
- Duplication: does each rule live in one place?
- Dependencies: is every package real, needed and safe?
- Tests: is anything protecting the paths that matter?
Each section below lists concrete checks. Some need a developer. Many do not: signing in as two users, searching for a key, or trying a payment with a declined card are things any founder can do. If your app is still mid-build, "Fix or rebuild your AI-built app? How to decide before you spend more" is a good companion, because the review often decides that question.
## What security checks matter most?
Access control first, then secrets, then input validation, because those are where AI-built apps fail most predictably.
The OWASP Top 10 for 2025 puts Broken Access Control at number one and Security Misconfiguration at number two. In AI-built apps both usually show up the same way: the screens check whether you are signed in, but the database or API does not check who you are.
### Access control
- Create two test accounts. Sign in as the second and try to open the first account's records by changing an ID in the URL.
- If the app uses Supabase, confirm row level security is on for every table and the policies compare the row's owner to the signed-in user. If it uses Firebase, read the security rules for any rule that allows read or write for everyone.
- Find every admin action. Check that the server verifies the role, not just that the button is hidden.
- Check server functions that use a service role or admin key. They bypass database rules, so they must check the caller themselves.
Roles make this harder. Guardian MindCare, a therapy practice platform I worked on, has five roles: therapists, supervisors, trainees, clients and admins. In an app like that, the review has to check each role against each kind of record, not just signed in versus signed out.
![The Guardian MindCare homepage, a therapy practice platform with five user roles](/shots/guardian-home.jpg)
### Secrets and input
- Search the code for sk_, secret, service_role, api_key and private. Any real key in frontend code, or in a VITE_ or NEXT_PUBLIC_ variable, must be moved to the server and rotated.
- Check that prices, discounts and roles are decided on the server, never taken from what the browser sends.
- Look for database queries built by gluing strings together. Injection is still on the OWASP list for a reason.
## How do I review the data model?
Read the schema as a description of the business and check that ownership and relationships match how the product really works.
Open the migration files, the Prisma schema, the Supabase table editor or the Firestore collections, and answer these questions:
- Does every record that belongs to someone have an owner field, such as user_id or organization_id?
- If the product is for teams, is there an organization or workspace table, or was everything built as single user?
- Are money values stored as whole numbers of cents, not floating point numbers?
- Are statuses limited to known values, like pending, paid and refunded, rather than free text?
- Are there obvious duplicates, such as profiles and users tables holding the same fields?
- Do important lookups have indexes, for example orders by user and date?
The data model is the hardest thing to change later, because real data has to be migrated. It is also where AI builders take shortcuts, because each prompt adds a table or column for the feature at hand without considering the whole. A model that is mostly right with a few fixes is common and fine. A model where nothing has an owner usually means a deeper rebuild. "Roles and permissions in a SaaS app: a practical guide for founders" goes deeper on the team and role side.
## What should I look for in error handling?
Look for every place the app calls something that can fail and check what the user sees when it does.
Generated code is written for the happy path. OWASP added a category for this in 2025, Mishandling of Exceptional Conditions, and it describes AI-built apps well. The checks:
- Supabase client calls return an error object instead of throwing. Find calls where the error is never checked, because those fail silently.
- Every fetch to your own API or a third party should handle a failed response, not just a network error.
- Loading and empty states should exist. Try each screen with a brand new account that has no data.
- Forms should show a clear message when saving fails and should not lose what the user typed.
- Payment flows should handle declined cards and webhooks that arrive twice or late. "Stripe payment went through but your app did not update? Fix the webhook" covers the second part.
- Server errors should be logged with enough detail to debug, without leaking stack traces to users.
> A fast way to find weak error handling: turn on the browser's offline mode or throttle the network, then click through the main flow. Every frozen spinner or blank screen is a finding.
## How do I spot duplicated and tangled logic?
Search for the business rules that matter and count how many places each one is written.
AI tools solve each prompt where it was asked. Ask for a discount on checkout and you get discount logic in checkout. Ask for it in the cart and you get a second copy. After weeks of prompting, the same rule exists in three slightly different versions.
How to check:
- Pick three or four core rules, such as what a plan allows, how a price is calculated or who can edit a record, and search for them. If each appears in more than one file, note it.
- Look for very large files, roughly a thousand lines or more, that mix data fetching, business rules and layout.
- Look for several components that are near copies, such as three card components with small differences.
- Look for dead code: unused components, pages with no route and functions nothing calls.
Duplication is not a security problem by itself, but it causes the bugs that come back after being fixed, because only one copy was changed. The fix is to move each rule into one function and point every screen at it.
## How do I check dependencies?
Confirm every package is real, maintained and used, and run an audit before you launch.
OWASP lists Software Supply Chain Failures at number three for 2025. AI tools add packages freely, sometimes ones that are abandoned, rarely used or not quite the package they meant.
- Open package.json and look up each package you do not recognize on npmjs.com. Check the weekly downloads, the last publish date and that the name is spelled exactly as intended.
- Remove packages nothing imports. Fewer packages means less to update and less to go wrong.
- Run npm audit. It reports known vulnerabilities in your dependency tree and suggests fixes. Treat its output as a list to evaluate, not a command to run npm audit fix with the force flag blindly, which can upgrade packages across breaking versions.
- Check that a lockfile, package-lock.json or similar, is committed so every build installs the same versions.
- Note which major versions you are on for the framework and the database client, since some AI tools generate code for older APIs.
## What tests does an AI-built app actually need?
A small number of tests on the paths where a bug costs money or exposes data, not broad coverage.
Most AI-built apps arrive with no tests at all, and adding hundreds is not the best use of time. Instead, cover:
- Permissions: a test that user B cannot read or update user A's records. For Supabase, this can be run against the policies directly.
- Money: a test that a completed checkout activates the right plan, and a repeated webhook does not activate it twice.
- Core calculation: whatever the app's central logic is, such as pricing, scheduling or scoring, tested with a few normal and edge cases.
- A smoke test that signs up, signs in and completes the main flow in a real browser, using a tool like Playwright.
Then make sure the tests run automatically on each push, for example with GitHub Actions. Tests that nobody runs protect nothing.
## A worked example
Here is an illustration with a made-up app. A founder built a client portal for a bookkeeping firm in Cursor: clients upload documents, staff mark them reviewed, and invoices are paid through Stripe.
The review, in checklist order, finds:
- Security: the documents storage bucket is public, and the staff only actions are hidden buttons with no server check.
- Data model: documents have a client_id but no firm_id, which blocks adding a second firm later.
- Error handling: failed uploads show a success message, because the upload error is never checked.
- Duplication: invoice totals are calculated in three components, one of which ignores tax.
- Dependencies: two unused charting libraries and one package last updated years ago.
- Tests: none.
The first two security items get fixed before anything else. The rest becomes a short, priced list instead of a vague feeling that the code is messy.
## When should I get a professional review?
Before you take payments, store sensitive data, or onboard customers whose trust you cannot afford to lose.
The behavior checks above catch a lot, and doing them yourself first makes any paid review faster. A developer adds what is hard to do alone: reading server code and policies, spotting data model problems early, and judging which findings matter. I start most of these as a Quick Fix from $60 for one specific problem, or Fix Plus Features from $200 for up to three fixes plus one small feature. Apps with a working core that need the full list cleared fit Finish and Launch from $600.
## The bottom line
Review AI-generated code by risk. Check access control and secrets first, then whether the data model fits the business, then what happens when things fail, then where rules are duplicated, then whether every dependency belongs, and finally add a few tests on permissions and payments. Most of the serious problems in AI-built apps live in the first two steps, and many of those checks need nothing more than two test accounts and a search box.`,
  },
];
