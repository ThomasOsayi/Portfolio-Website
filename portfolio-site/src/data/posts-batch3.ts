// Articles, batch 3 (Nov 19 2026). Prices come only from the packages in seo.ts.
// Third-party prices were checked on the vendors' own pricing pages on 2026-11-19.
import type { Post } from './seo';

const d = '2026-11-19';

export const postsBatch3: Post[] = [
  {
    slug: 'lovable-vs-bolt-vs-v0-for-startup-mvp',
    title: 'Lovable vs Bolt vs v0 for a startup MVP: which one to use',
    description: 'An honest comparison of Lovable, Bolt and v0 for building a startup MVP: what each produces, current pricing, where each one gets stuck, and when to bring in a developer.',
    date: d,
    keywords: ['Lovable vs Bolt vs v0', 'best AI app builder for MVP', 'Lovable or Bolt', 'v0 vs Lovable', 'AI app builder comparison'],
    service: 'saas-mvp-development',
    shortAnswer: 'Lovable is the best fit for a non-technical founder who wants a working app with login and a database, Bolt suits founders who want more control over the code and stack, and v0 is strongest for polished Next.js interfaces when someone technical will wire up the backend. None of them reliably delivers secure permissions, payments and production setup on its own, so plan for a review before real users arrive.',
    takeaways: [
      'Pick the builder by who will own the code next: Lovable for founders, Bolt for tinkerers, v0 for teams with a developer.',
      'All three cost $25 to $30 a month at the entry paid tier at the time of writing, but heavy prompting on bugs burns credits fast.',
      'The tool matters less than scoping one core workflow tightly before you start prompting.',
      'Every builder leaves the same last mile: access rules, payments, environment variables and error handling.',
      'Connect GitHub on day one so the code can move to a developer or a new host without a rescue project.',
    ],
    faqs: [
      { q: 'Is Lovable or Bolt better for beginners?', a: 'Lovable is usually easier for beginners because it sets up a backend with login and a database for you, while Bolt exposes more of the code and project setup.' },
      { q: 'Can v0 build a full app with a database?', a: 'v0 can generate full Next.js apps and connect integrations, but it is strongest at interfaces, so most teams still need someone to design the data model and access rules.' },
      { q: 'Which AI app builder is cheapest?', a: 'All three have free plans for trying them, and at the time of writing the paid entry tiers are close: $25 a month for Lovable Pro and Bolt Pro and $30 per user a month for v0 Plus.' },
      { q: 'Can I move my app off Lovable, Bolt or v0 later?', a: 'Yes, all three let you get the code into GitHub, and from there a developer can host it on Vercel or another provider.' },
      { q: 'Should I build my MVP with AI or hire a developer?', a: 'Build the first version with AI if you need to test the idea cheaply, and hire a developer when real users, payments or private data are involved. Thomas Osayi builds a working first version of one core workflow from $250 and a launchable SaaS MVP from $1,200.' },
    ],
    body: `Should I build my MVP in Lovable, Bolt or v0? It is one of the most common questions founders ask once they have spent a weekend in one tool and started wondering whether the other two would have gone better.
The honest answer is that the tool matters less than people think, but the differences are real, and they line up with one question: who is going to own this code after the AI is done? This guide compares the three on that basis, with current prices and the problems I see when founders bring these apps to me to finish.
## What is the short answer?
Lovable fits non-technical founders, Bolt fits founders who like to tinker with code, and v0 fits teams that have a developer. That is the whole decision in one line, and the rest of this article explains why.
All three turn a written prompt into a running web app in minutes. Where they differ is what they set up for you behind the screen and how much they expect you to understand.
- Lovable sets up login, a database and hosting with very little input, so you can get to a working product without touching a terminal.
- Bolt runs a full development environment in the browser, shows you the files and lets you choose more of the stack.
- v0 comes from Vercel, the company behind Next.js, and produces clean Next.js and React interfaces that a developer can drop straight into a real project.
If you are alone and non-technical, start with Lovable. If you can read code a little and want control, try Bolt. If you have a developer or are one, v0 will save the most time on the front end.
## How do Lovable, Bolt and v0 compare at a glance?
Each tool is strongest at a different layer of the app. Here is the comparison I give founders, with prices from each vendor's pricing page at the time of writing.
### Lovable
- Best for: non-technical founders who need a working app with accounts and data.
- Cost: a free plan with a small daily credit allowance, Pro at $25 a month with 100 monthly credits, Business at $50 a month.
- Pros: the fastest path from idea to a logged-in app; a built-in backend; two-way GitHub sync on all plans; custom domains on Pro.
- Cons: credits disappear quickly when you prompt in circles on a bug; the generated access rules and edge cases need a human review.
### Bolt
- Best for: founders who are comfortable seeing files, package names and error messages.
- Cost: a free plan with a 1M token monthly limit, Pro at $25 a month starting at 10M tokens, Teams at $30 per member.
- Pros: a full in-browser dev environment; more choice of framework and database; hosting with custom domains on Pro.
- Cons: more decisions are left to you; large projects use tokens fast because the AI rereads more code with every change.
### v0
- Best for: polished Next.js interfaces, landing pages and dashboards that a developer will connect to a backend.
- Cost: a free plan with a daily message limit and a small monthly credit, Plus at $30 per user a month, Business at $100 per user. The old $20 Premium plan is closed to new users.
- Pros: the cleanest React and Next.js output of the three; one-click deploys to Vercel; components that follow modern conventions.
- Cons: the data model, permissions and business logic still need someone who knows what they are doing.
## Which one should a non-technical founder pick?
Lovable, in most cases, because it handles the backend you would otherwise have to understand. If you have no coding background, Lovable is where I would start the first version.
The reason is simple. A real app is mostly invisible plumbing: an account system, a database, file storage, emails and a place to host it. Lovable sets those up as part of the conversation, so you spend your time describing the product rather than configuring services you have never heard of.
### What to do in the first hour
- Write down the one workflow that proves the idea, such as a client booking a session or a brand approving a creator.
- Connect GitHub in Project settings before you build anything else, so every change is saved somewhere you own.
- Ask for that one workflow end to end before adding a settings page, a dashboard or a landing page.
- Create two test accounts and check that each one only sees its own data.
### Where it usually stalls
The stall comes around the point where you add payments, roles or a second type of user. The AI starts fixing one bug by creating another, and every attempt costs credits. That is the moment to stop prompting and get the code read by a person. I wrote about the specific failure points in the post on what breaks when a Lovable or Bolt app goes live.
## Which one is best if you can read some code?
Bolt, because it shows you the project and lets you steer it. If you know what a package.json file is, can read an error in a terminal and have opinions about which database to use, Bolt gives you more room than Lovable.
You can open files, see exactly what the AI changed and fix a small thing yourself instead of spending tokens on a prompt. That alone saves money on longer projects. It also makes the handoff to a developer smoother, because you will have seen the structure as it grew.
### A habit that keeps Bolt projects healthy
After every working feature, commit to GitHub with a short message describing what now works. When a later prompt breaks something, you can compare against the last good version instead of asking the AI to remember what it did. Founders who skip this end up with projects where nobody, human or AI, knows which change caused the problem.
> Keep a plain text file in the project that lists every environment variable the app needs and where each value comes from. It is the first thing any developer will ask for, and the AI will not keep it for you.
## When does v0 make the most sense?
v0 makes sense when the interface is the hard part or when a developer will own the code. Because it comes from the team behind Next.js, its output looks like what an experienced front-end developer would write, and it deploys to Vercel in one step.
That makes it excellent for three jobs: a marketing site or landing page, a dashboard design you want to test with users, and screens a developer will connect to an existing backend. It is less suited to a non-technical founder who needs the whole product, because the parts it leaves to you are the parts that need experience: how the data is shaped, who can see what, and what happens when a payment fails.
### How I use it
When I build an MVP in Next.js, a tool like v0 is useful for a first pass at a complicated screen, such as a table with filters or a settings layout. I then rewrite the data fetching, connect it to the real database and add the permission checks. The generated layout survives; the logic gets replaced.
## What do all three get wrong?
They all leave the same last mile: security rules, payments, secrets and error handling. This is not a flaw of one product. It is what happens when code is generated from descriptions of how the app should look rather than rules about what should never happen.
- Access rules: the database answers any request that has the public key unless row level security or security rules say otherwise.
- Payments: checkout works in test mode, but webhooks are not registered for the live domain, so paid users never get access.
- Secrets: keys that live in a local .env file never reach the host, or a server-only key is shipped to the browser.
- Errors: when a request fails, the screen goes blank instead of showing a message and logging the problem.
Each of these is a few hours of work for someone who reads the code directly, and each one can cost you users or data if it ships unfixed. My checklists for Firebase security rules and Supabase row level security walk through the database part step by step.
## A worked example: one idea, three builders
To make this concrete, here is an illustration with a made-up startup. Maya wants to launch a booking tool for independent yoga teachers: teachers publish classes, students book and pay, and teachers see a list of who is coming.
In Lovable, Maya gets a working version with teacher and student accounts in a weekend. She spends most of her credits on the payment step, which half works, and on a bug where students can see other students' bookings.
In Bolt, a technical friend helps her choose Next.js and Supabase. The code is clearer, and the friend fixes the booking visibility bug by hand. They run out of tokens while adding Stripe subscriptions for teachers.
In v0, she gets the best looking class pages and teacher dashboard of the three, but nothing is saved anywhere until someone connects a database.
In all three cases the remaining work is the same: lock down who can read bookings, finish payments with working webhooks, and deploy with real environment variables. That is roughly what my Finish and Launch package covers, from $600 over about 10 days, when the core features already work. If the core workflow is still missing, it is a build, and the SaaS MVP package at $1,200 over about 21 days is the honest quote.
## How much does each path really cost?
The subscription is the smallest cost; the time spent prompting around bugs is the biggest. At the time of writing, a month of Lovable Pro or Bolt Pro is $25 and v0 Plus is $30 per user, so the tools themselves are cheap.
What gets expensive is the loop where you describe a bug, the AI changes ten files, a different thing breaks and you describe that. That loop can quietly eat months of subscription fees and many evenings. If you have asked for the same fix three times, stop and get help, because a person can usually see the cause in the code in less time than another round of prompts.
### A realistic budget for a first version
- Prototype to test the idea with friends: one month of a paid plan, plus your time.
- Launchable product with accounts and payments: the subscription, plus a professional review and fixes before launch.
- Product with several user roles, admin tools and integrations: plan it as a build from the start; the cost calculator on my site gives a quick estimate for a website, and the SaaS MVP cost guide covers apps.
## When should you stop prompting and hire a developer?
Hire help when real users, real money or private data are about to touch the app. Before that point, prompting is a cheap way to learn what you are building. After it, the cost of a mistake is higher than the cost of a review.
Clear signals that it is time:
- You have asked the AI to fix the same bug three times.
- You are adding a second user type, such as admins, staff or clients, with different permissions.
- Payments work in test mode but you have not tried a live card.
- You are not sure whether one user can read another user's data.
- The deploy fails and the error message means nothing to you.
When you do hand it over, send the GitHub repo, access to the database project and host, and a short list of what works and what does not. My guide to handing off an AI-built app to a developer has the exact checklist.
## The bottom line
Use Lovable if you are a non-technical founder who needs a working app with accounts, Bolt if you want to see and steer the code, and v0 if you have a developer and want the best interface output. Connect GitHub on the first day, build one workflow before anything else, and get a human review before launch. The builder gets you to a demo quickly; the last mile is what turns it into a product people can trust.`,
  },
  {
    slug: 'move-lovable-app-to-vercel-custom-domain',
    title: 'How to move a Lovable app to Vercel and your own domain',
    description: 'A step-by-step guide to moving a Lovable app to Vercel: GitHub sync, build settings, environment variables, routing fixes, Supabase auth URLs and connecting your domain.',
    date: d,
    keywords: ['move Lovable app to Vercel', 'deploy Lovable to Vercel', 'Lovable custom domain', 'host Lovable app outside Lovable', 'Lovable Supabase redirect URL'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Connect the Lovable project to GitHub, import that repository into Vercel, copy every environment variable from the project into Vercel, add a rewrite to index.html if it is a Vite single-page app, then update the Site URL and Redirect URLs in Supabase before pointing your domain at Vercel. Most broken migrations come from missing environment variables or auth redirect URLs that still point at the old address.',
    takeaways: [
      'Check which stack your Lovable project uses first, because a TanStack Start app needs a host that runs a server while an older Vite app is a static build in the dist folder.',
      'Lovable syncs both ways with a new GitHub repository it creates, so connect GitHub before you change anything.',
      'Vite apps only read environment variables that start with VITE_, and they are baked in at build time, so redeploy after adding them.',
      'Login problems after a move almost always mean the Supabase Site URL, Redirect URLs or Google OAuth origins still point at the old domain.',
      'Keep the Lovable-hosted version running until the new domain is verified end to end.',
    ],
    faqs: [
      { q: 'Can I host a Lovable app on Vercel?', a: 'Yes. Connect the project to GitHub from Lovable, import the repository into Vercel and add the same environment variables; Lovable documents hosting outside its platform.' },
      { q: 'Why do my Lovable app pages show 404 on Vercel when I refresh?', a: 'An older Lovable app built with React and Vite is a single-page app, so Vercel needs a rewrite in vercel.json that sends every path to index.html.' },
      { q: 'Why does login break after moving my Lovable app?', a: 'The Supabase Site URL and Redirect URLs, and any Google OAuth authorized origins, still list the old address; add the new domain in each place.' },
      { q: 'Do I need to move off Lovable to use a custom domain?', a: 'No. At the time of writing Lovable Pro includes custom domains, so moving to Vercel is a choice for control, cost or team workflow rather than a requirement.' },
      { q: 'Can I keep editing in Lovable after moving to Vercel?', a: 'Yes, because the GitHub sync is two-way: changes from Lovable land in the repo and Vercel redeploys them, as long as you edit only the synced branch.' },
      { q: 'How much does it cost to have someone move my Lovable app?', a: 'Thomas Osayi handles a straightforward move with domain and auth fixes as a Quick Fix from $60, and a move combined with launch blockers under Finish and Launch from $600.' },
    ],
    body: `Lovable is a good place to build an app and a perfectly fine place to host one. Still, a lot of founders reach a point where they want the code on their own infrastructure: a developer joins and works in Git, the company already uses Vercel, or they simply want the app on their domain under accounts they control.
The move itself takes an hour or two when it goes well. When it goes badly, it is almost always for the same three reasons: missing environment variables, routes that 404, and login redirects that still point at the old address. This guide walks through the steps in order, with the exact settings that trip people up.
## Should you move your Lovable app at all?
Move when you need control of the code and hosting, not just a custom domain. At the time of writing Lovable's Pro plan, $25 a month, includes custom domains and removes the Lovable badge, so if all you want is yourbusiness.com, you can stay where you are.
Good reasons to move to Vercel:
- A developer is joining and wants to work in Git with preview deployments for each change.
- You want staging and production environments with different keys.
- Your company already runs other projects on Vercel and wants one bill and one dashboard.
- You need server features or settings Lovable hosting does not expose.
Reasons that are not enough on their own: wanting a custom domain, wanting to remove the badge, or a vague sense that "real apps" live elsewhere. Moving adds things to look after, and you should get something for that.
## What do you need before you start?
You need GitHub, a Vercel account, access to the backend and a list of every secret the app uses. Gather these first so you are not hunting for keys halfway through.
- A GitHub account that will own the repository.
- A Vercel account. At the time of writing the Hobby plan is free with usage caps and Pro is $20 a month per developer seat; read Vercel's terms on commercial use when you choose.
- Access to the backend: either your own Supabase project or the Lovable Cloud backend.
- Access to your domain's DNS settings at the registrar.
- Logins for every connected service, such as Stripe, Resend or Google Cloud, because some of them need the new URL added.
### Check which stack you have
Open package.json in the code view. Lovable's own hosting documentation separates two cases. Newer projects that list @tanstack/react-start run a server, so the host has to run that server; Vercel handles this without extra configuration. Older projects built with React and Vite produce a static build in a dist folder, which needs a routing rewrite. The steps below cover both.
## Step 1: How do you connect the project to GitHub?
Use Lovable's built-in GitHub sync, which creates a new private repository and keeps it in sync both ways. In Lovable, open Project settings, then Git, then GitHub, and click Connect next to your GitHub connection. If you have not linked GitHub yet, add a connection under Workspace settings, Git, GitHub.
A few details from Lovable's documentation matter here:
- Lovable creates a new repository; you cannot point it at an existing one.
- Sync is two-way on a single branch, usually main. Changes you push to that branch flow back into Lovable.
- Renaming the repository keeps the sync. Deleting it breaks the sync.
- Pushes over 100 MB are rejected, so do not commit large videos or exports.
Once connected, open the repository on GitHub and check that the latest change you made in Lovable is there. That repository is now the source of truth for both Lovable and Vercel.
## Step 2: How do you import it into Vercel with the right settings?
Import the GitHub repository as a new Vercel project and let Vercel detect the framework. In Vercel, choose Add New, then Project, pick the repository and look at the settings before clicking Deploy.
### For an older React and Vite app
- Framework preset: Vite.
- Build command: npm run build.
- Output directory: dist.
### For a TanStack Start app
- Build command: npm run build.
- Node.js version: 22, which Lovable's documentation lists.
- No output directory setting is needed on Vercel.
Do not deploy yet if you have not added environment variables (Step 3). A build without them will either fail or, worse, succeed and produce an app that cannot reach its database.
### Why pages 404 when you refresh
Older React and Vite projects are single-page apps with only one real HTML file, and Vercel does not know to serve it for other paths. Clicking around works, but refreshing on a page such as /dashboard or sharing a direct link returns a 404.
The fix is a file named vercel.json in the root of the repository with a rewrite rule that sends every path to /index.html. Lovable's hosting documentation names vercel.json as the place for this on Vercel. Commit the file, let Vercel redeploy and test a refresh on a deep link.
TanStack Start apps do not need this, because the server handles each route itself.
## Step 3: Which environment variables does it need?
It needs every variable from the project's .env file, entered in Vercel before the first real build. Lovable's documentation lists the backend ones: VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY and VITE_SUPABASE_PROJECT_ID for code that runs in the browser, and SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY for server code in TanStack Start apps. Add any others your app uses, such as a Stripe publishable key.
Two rules catch almost everyone:
- In a Vite app, only variables that start with VITE_ reach the browser code. A variable named SUPABASE_URL without the prefix will be undefined in the browser.
- Browser variables are baked in at build time. If you add or change one, you must redeploy for it to take effect.
### What never goes in a VITE_ variable
Anything secret: the Supabase service role key, the Stripe secret key, webhook signing secrets or API keys for paid services. Anything with the VITE_ prefix ends up in the JavaScript every visitor downloads. Secrets belong in server code or Supabase edge functions only.
> Before you deploy, search the code for the words service_role and sk_live. If either appears in a file that runs in the browser, fix that first. A move is a good moment to catch it.
## Step 4: How do you keep login working on the new domain?
Update every place that lists allowed URLs for sign-in. This is the step most people miss, and it produces errors that look like the app is broken when only a setting is wrong.
### In Supabase
Open Authentication, then URL Configuration. Set the Site URL to your new domain, and add both the Vercel preview pattern you use and the production domain to Redirect URLs. Password reset and magic link emails use the Site URL, so a stale value sends users back to the old address.
### In Google Cloud, if you use Google sign-in
Add the new domain to the OAuth client's authorized JavaScript origins. The redirect URI usually points at Supabase's callback, so it often stays the same.
### In other services
Register a Stripe webhook endpoint for the new domain in live mode and add its signing secret where the webhook code runs. Update any allowed origins in email or analytics tools.
If your app uses Lovable Cloud rather than your own Supabase project, read Lovable's documentation on moving to your own Supabase project before you start. It notes that some managed features, such as managed OAuth configuration, only work on the built-in backend.
## Step 5: How do you connect your domain?
Add the domain in the Vercel project's Domains settings and create the DNS records Vercel shows you. Vercel lists the exact records for your project, typically an A record for the root domain and a CNAME for www. Enter them at your registrar, wait for verification and let Vercel issue the SSL certificate automatically.
If the domain currently points at Lovable, plan the switch for a quiet hour. DNS changes can take anywhere from minutes to a day to reach everyone, and for that window some visitors will see the old host. Leaving the Lovable version online means nobody sees an error while it settles.
## A worked example of a move
Here is an illustration with a made-up business. A small tutoring company built a booking app in Lovable with student logins and Supabase, and wants it on Vercel at book.example.com.
They connect GitHub, import the repository into Vercel and deploy. The site loads, but login fails with a redirect error and refreshing the schedule page returns a 404. Two fixes solve it: a vercel.json rewrite to index.html, and adding the new domain to Supabase's Site URL and Redirect URLs. Then a parent reports that password reset emails link to the old lovable.app address, which the Site URL change also fixes. Finally, the booking deposit stops confirming because the Stripe webhook still points at the old address; registering a live endpoint for the new domain and adding the signing secret to the edge function settles it.
None of those steps is hard. Each one is invisible until a real user hits it, which is why sign-up, login, password reset, a deep link refresh and a live payment should all be tested after any move.
## When should you get help with the move?
Get help if the app handles payments or private data, or if the move is blocking a launch date. A wrong setting here does not usually crash the app; it quietly breaks one flow, like password resets or paid upgrades, and you find out from an annoyed customer.
I do these moves as part of my work fixing AI-built apps. A straightforward move with domain and auth fixes fits the Quick Fix at $60 and about 2 days. If the app also has launch blockers such as open database rules or missing webhooks, the Finish and Launch package from $600 over about 10 days covers the move and the fixes together. My Lovable fix page lists the other problems I see most often, and the guide to Supabase row level security is worth reading before any launch.
## The bottom line
Moving a Lovable app to Vercel comes down to six steps: connect GitHub, import the repository with the right build settings, copy every environment variable, add a routing rewrite for older Vite apps, update auth redirect URLs, and connect the domain. Test every sign-in path and a real payment before you switch DNS, and keep the old version running until the new one has proved itself.`,
  },
  {
    slug: 'nextjs-firebase-authentication-app-router',
    title: 'Firebase Authentication in the Next.js App Router: how to do it properly',
    description: 'How to set up Firebase Authentication in a Next.js App Router app: client sign-in, server session cookies, protecting routes, roles with custom claims, and the mistakes AI-generated code makes.',
    date: d,
    keywords: ['Next.js Firebase authentication', 'Firebase auth App Router', 'Firebase session cookie Next.js', 'protect routes Next.js Firebase', 'Firebase custom claims roles'],
    service: 'saas-mvp-development',
    shortAnswer: 'Sign users in with the Firebase client SDK in the browser, exchange their ID token for a session cookie created by the Firebase Admin SDK on the server, and verify that cookie in server components and route handlers before returning private data. Hiding a page with client-side checks is not protection; every server action and Firestore rule must check the user again.',
    takeaways: [
      'The Firebase client SDK signs users in, but the server cannot see that sign-in unless you pass it a token or session cookie.',
      'A session cookie created with the Admin SDK and verified on each server request is the most reliable pattern for App Router apps.',
      'Redirects in the browser hide pages; only checks on the server and in Firestore security rules actually protect data.',
      'Store roles as custom claims set from the server, never as a field the user can edit in their own profile document.',
      'Keep the Admin SDK service account in server-only environment variables and never import it into client components.',
    ],
    faqs: [
      { q: 'Can I use Firebase Authentication with Next.js server components?', a: 'Yes, but server components cannot read the client SDK\'s sign-in state, so you pass a session cookie or ID token to the server and verify it with the Firebase Admin SDK.' },
      { q: 'How long can a Firebase session cookie last?', a: 'Firebase session cookies can be set to last between 5 minutes and 2 weeks, according to the Firebase Admin documentation.' },
      { q: 'Should I protect routes in middleware or in the page?', a: 'Use a lightweight check in proxy or middleware for redirects if you like, but always verify the session again in the server component, route handler or server action that returns or changes data.' },
      { q: 'How do I add admin roles to Firebase users?', a: 'Set custom claims on the user with the Admin SDK from trusted server code, then check those claims on the server and in Firestore security rules.' },
      { q: 'Why does my Firebase user show as null on first load?', a: 'The client SDK restores the session asynchronously, so code that reads currentUser before onAuthStateChanged fires sees null; wait for the first callback before deciding the user is signed out.' },
      { q: 'Can someone set up Firebase auth and roles for my Next.js app?', a: 'Thomas Osayi builds Next.js and Firebase apps with auth, roles and dashboards, with launchable SaaS MVPs starting at $1,200.' },
    ],
    body: `Firebase Authentication is one of the quickest ways to add sign-in to a product. The Next.js App Router is one of the best ways to build the product around it. Put the two together without a plan, though, and you get an app where the login button works but the server has no idea who anyone is.
I have built two production platforms on Next.js and Firebase, SQWAD and Guardian MindCare, and I fix AI-generated apps that use the same pair. The pattern below is the one I use. It is not the only valid approach, but it holds up when you add roles, server actions and a second type of user.
## Why is Firebase auth tricky in the App Router?
Because Firebase signs users in inside the browser, while the App Router renders most of your app on the server. The Firebase client SDK keeps the signed-in user in the browser's storage. Server components, route handlers and server actions run on the server and cannot see that storage.
In the old Pages Router days, many apps simply rendered everything in the browser and checked auth there. In the App Router, pages are server components by default. If a server component loads a user's invoices, it needs to know which user is asking, on the server, before it touches the database.
So every App Router app with Firebase needs a bridge: some way to carry proof of the sign-in from the browser to the server. There are two common bridges.
- Send the Firebase ID token with each request, usually in an Authorization header for API calls.
- Exchange the ID token once for a session cookie, which the browser then sends automatically with every request.
For apps with server-rendered pages, the session cookie is simpler to live with.
## How does the session cookie pattern work?
The browser signs in with Firebase, sends the ID token to your server once, and the server sets an httpOnly session cookie that it verifies on later requests. Here is the flow in plain steps.
- The user signs in on a client component with the Firebase client SDK, using email and password, a magic link or Google.
- The client calls getIdToken on the signed-in user and posts that token to a route handler, for example app/api/session/route.ts.
- The route handler calls createSessionCookie from the Firebase Admin SDK with an expiry you choose, then sets the result as a cookie marked httpOnly, secure and sameSite lax.
- On each request, server code reads the cookie with the cookies function from next/headers and calls verifySessionCookie. If it is valid, you get the user's uid and claims.
- On sign out, the client signs out of Firebase and calls a route that deletes the cookie, and the server can revoke the user's refresh tokens if you want every device signed out.
### Details from the Firebase documentation worth knowing
Session cookies can last from 5 minutes to 2 weeks. Creating one expects a recent sign-in, so create the cookie right after the user signs in rather than hours later. Passing true as the second argument to verifySessionCookie also checks whether the session was revoked, at the cost of an extra lookup.
## Where should you check the session?
Check it everywhere data is read or changed on the server, not only at the edge of the app. This is the part generated code most often gets wrong.
### The three places that matter
- Server components that load private data: verify the cookie before querying.
- Route handlers and server actions that change data: verify again, even if the page that calls them was already protected.
- Firestore security rules: the browser can talk to Firestore directly, so the rules must check request.auth on every read and write.
### What about proxy or middleware?
Next.js 16 renamed middleware to proxy, and either can redirect signed-out visitors away from private sections, which is a nice experience. Treat it as a convenience, not a lock. A redirect decides which page loads; it does not stop someone calling your server action or reading Firestore directly. Many teams also keep that layer light and leave full verification to server code, because the Admin SDK is built for the Node.js runtime.
I keep one helper, something like getCurrentUser, in a server-only file. It reads the cookie, verifies it and returns the user or null. Every page, action and route handler that needs a user calls it, so the check is one line and nobody forgets it.
> Add import 'server-only' at the top of any file that uses the Admin SDK. If a client component ever imports it by mistake, the build fails instead of shipping your service account to the browser.
## How should you handle roles like admin, staff and client?
Store roles as custom claims set by trusted server code, and check them on the server and in security rules. Custom claims are small pieces of data attached to the user's token, set with setCustomUserClaims in the Admin SDK.
The mistake I see most in AI-generated apps is storing the role as a field in the user's own profile document, such as role: admin in users/{uid}, and then letting the user update their own profile. Anyone who opens the browser console can promote themselves. If you do store roles in Firestore, the rules must stop users from writing that field, and only server code should set it.
### How roles look in a real platform
Guardian MindCare, a therapy practice platform I built, has five user roles: therapists, supervisors, trainees, clients and admins. Each role sees a different portal, and a supervisor can see their trainees' work but not other supervisors'. That kind of rule cannot live only in the interface. It is enforced on the server and in the database rules, so a client account cannot read another client's records even with a direct request.
![Guardian MindCare: a therapy practice platform with separate role-based portals for therapists, supervisors, trainees, clients and admins.](/work/fiverr/guardian.jpg)
One practical note: after you change a user's custom claims, their existing token still holds the old ones until it refreshes. Force a token refresh on the client and create a fresh session cookie, or the new role will not appear until the next sign-in.
## Where do the Admin SDK credentials go?
In server-only environment variables on your host, never in code and never with a NEXT_PUBLIC_ prefix. The Admin SDK needs a service account: a project ID, a client email and a private key.
On Vercel, add them as environment variables such as FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY. The private key contains line breaks, and pasting it often turns them into literal backslash n characters. If you see an error about failing to parse the private key, replace the escaped line breaks with real ones when you initialize the app.
The client SDK config is different. Values such as the API key and auth domain are meant to be public and can use NEXT_PUBLIC_ variables. That is safe precisely because the security rules, not the config, decide who can read data.
## What mistakes does AI-generated Firebase auth code make?
A small, predictable set. Watch for these whether the code came from Lovable, Bolt, v0, Cursor or a tutorial.
- Protecting pages only with a client-side redirect, so the data is still reachable by direct request.
- Reading auth.currentUser immediately on load, getting null and signing the user out or flashing a login screen.
- Server actions that trust a userId passed from the browser instead of reading it from the verified session.
- Firestore rules left in test mode, or a rule that allows read and write if the user is signed in at all, which lets any user read everyone's data.
- Roles stored in a user-editable profile field.
- The service account JSON committed to the repository.
Each of these is quick to fix once you know where to look. My Firebase security rules checklist covers the database side in more detail.
## A worked example: a client portal for a small agency
Here is an illustration with a made-up company. A small marketing agency wants a portal where clients log in to see reports, staff upload them and the owner manages everyone.
- Sign-in: email link for clients, Google for staff, both through the Firebase client SDK.
- Session: on sign-in, the client posts the ID token to the session route, which sets a 5-day session cookie.
- Roles: the owner invites staff from an admin page; a server action sets a staff claim. Clients get a clientId claim linking them to their company.
- Reports page: a server component calls getCurrentUser, then queries only reports where clientId matches the claim.
- Upload action: verifies the session and the staff claim before writing.
- Firestore rules: clients can read reports with their clientId; only staff can write; nobody can change claims from the browser.
Built this way, the agency can add a third role later, such as a contractor with limited access, by adding a claim and a few rule lines rather than rewriting the app.
## When should you use something other than Firebase Auth?
Use something else when your data already lives in Postgres or you need enterprise sign-in features out of the box. Firebase Auth pairs best with Firestore, where the security rules read the same identity.
If your app is relational and reporting-heavy, Supabase or Postgres with an auth library can be a better fit; I compare the two in my Firebase vs Supabase guide. If you sell to large companies that require SAML single sign-on from day one, a dedicated auth provider may save time. For most MVPs with a few roles and a document-shaped data model, Firebase Auth is fast, cheap at small scale and well understood.
## The bottom line
Sign in with the Firebase client SDK, carry that sign-in to the server with a verified session cookie, check the user in every server component, action and route handler that touches private data, and back it all up with Firestore security rules. Keep roles in custom claims set from the server and the Admin SDK in server-only code. If you want this set up properly in a new product, my SaaS MVP package covers auth, roles, dashboards and payments, starting at $1,200 over about 21 days.`,
  },
];
