// Generated articles, batch 20 (Nov 25 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-25';

export const postsGen20: Post[] = [
  {
    slug: 'bolt-vs-replit',
    title: 'Bolt vs Replit: pricing, credits, hosting and which one fits your app',
    description: 'Bolt vs Replit compared head to head: current plan prices, tokens vs credits, backend and hosting, how easy each is to leave, and an honest pick for each type of builder.',
    date: d,
    keywords: ['Bolt vs Replit', 'Bolt.new vs Replit Agent', 'Replit vs Bolt pricing', 'best AI app builder for beginners', 'Bolt or Replit for MVP'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Pick Bolt if you want a fast JavaScript web app with a predictable token budget, and pick Replit if your app needs a real server, a language other than JavaScript or background work. At the time of writing Bolt Pro starts at $25 a month and Replit Core costs $20 a month with $20 of usage credits included.',
    takeaways: [
      'Bolt meters work in tokens with a fixed monthly allowance, while Replit bills paid AI work by effort on top of a free allowance.',
      'Replit runs your app in a full cloud machine, so it suits Python, background jobs and long running servers better than Bolt.',
      'Bolt is quicker for front end heavy JavaScript apps and landing pages, and its free plan is still open to new users.',
      'Both tools let you take the code to GitHub, so the decision is about how you build, not about being locked in forever.',
      'Whichever you choose, the bugs that block launch are usually auth, database rules and environment variables, not the tool itself.',
    ],
    faqs: [
      { q: 'Is Bolt or Replit cheaper?', a: 'At the time of writing Replit Core is $20 a month and Bolt Pro starts at $25 a month, but the real cost depends on how many tokens or paid agent requests your project burns through.' },
      { q: 'Does Replit still have a free plan?', a: 'Replit says its Starter plan is no longer available to new builders as of November 2026, and eligible new builders can try Core with a 3-day free trial instead.' },
      { q: 'Can I move a Bolt or Replit app to my own hosting?', a: 'Yes. Both let you get the code into GitHub, and from there a JavaScript web app can be deployed to a host such as Vercel with its environment variables copied across.' },
      { q: 'Which is better for a beginner with no coding experience?', a: 'Bolt is usually easier for a first web app because it shows a live preview of a JavaScript project in the browser, while Replit gives more power but more settings to understand.' },
      { q: 'Can Thomas Osayi fix an app I started in Bolt or Replit?', a: 'Yes. Thomas Osayi fixes one blocking bug from $60 in about 2 days, and takes an app whose core features already work to launch from $600 in about 10 days.' },
    ],
    sources: [
      { title: 'Bolt pricing', publisher: 'Bolt', url: 'https://www.bolt.new/pricing' },
      { title: 'Pricing and plans', publisher: 'Replit Docs', url: 'https://docs.replit.com/help/pricing-and-plans' },
      { title: 'Replit Core', publisher: 'Replit Docs', url: 'https://docs.replit.com/billing/plans/replit-core' },
      { title: 'Replit Pro is here, and Core now offers even better value', publisher: 'Replit', url: 'https://replit.com/blog/pro-plan' },
    ],
    body: `Bolt and Replit both promise the same thing: describe an app, watch an AI agent build it, and publish it without setting up a laptop. Under the hood they are very different products, and the difference shows up the moment your app needs a real backend, a scheduled job or a fix the agent keeps getting wrong.
I get handed projects from both tools when the agent stalls, so this is a head to head written from the repair side. If you are also weighing Lovable or v0, the post "Lovable vs Bolt vs v0 for a startup MVP" covers that wider field. This one is only Bolt against Replit.
## What is the actual difference between Bolt and Replit?
Bolt builds JavaScript web projects that run inside your browser tab, while Replit gives each project a full cloud machine that can run almost any language.
That one design choice drives most of what follows. Bolt, made by StackBlitz, runs your project in an in-browser environment, so a React or Vite app with a hosted database behind it feels instant. You see the preview update as the agent writes code, and there is nothing to configure.
Replit is a cloud development environment that grew an agent. Your project lives on a Linux machine Replit runs for you, which means the agent can install Python packages, start a server that keeps running, run scripts on a schedule and talk to a database the way a normal server does. It is closer to what a developer would set up by hand.
In practice:
- A marketing site, a dashboard or a simple booking tool written in JavaScript is comfortable in either, and often faster in Bolt.
- A Python data tool, a bot, a scraper, or anything with long running background work fits Replit far better.
- An app that is mostly a front end on top of a hosted database such as Supabase works in both.
## How much do Bolt and Replit cost at the time of writing?
At the time of writing Bolt Pro starts at $25 a month and Replit Core costs $20 a month, but the plans meter usage so differently that the sticker price only tells half the story.
### Bolt plans
Bolt's pricing page lists a Free plan with a 300K daily token limit and 1M tokens a month, Bolt branding on published sites and hosting up to 333K web requests. Pro is $25 a month billed monthly, starts at 10M tokens a month with no daily limit, removes the branding, adds custom domains and raises hosting to 1M web requests. Unused Pro tokens roll over, and the FAQ says for up to two months. Teams is $30 per member a month, and yearly billing saves up to 28%.
### Replit plans
Replit's docs say the free Starter plan is no longer available to new builders as of November 2026, with a 3-day Core trial offered instead. Core is $20 a month (Replit lists $204 a year on annual billing) and includes $20 of monthly credits that reset each cycle and do not roll over. Pro starts at $100 a month with more parallel tasks, up to 15 builders and credits that can roll over. Credits pay for AI work, publishing, storage and other usage, so a busy published app draws from the same pool as the agent.
## How do Bolt tokens compare with Replit credits?
Bolt spends tokens every time the AI reads and writes your project, while Replit gives you a free allowance and then charges paid requests by how much effort each one takes.
On Bolt, token use grows with the size of your project, because the agent has to read more code to change it. A small app sips tokens. A large one that you keep asking to fix the same bug can burn through a month's allowance in a few days. The upside is predictability: you know the allowance up front, and on Pro the leftovers carry forward.
Replit splits work into modes. Free Mode covers no-cost AI work within your plan's allowance, which on Core and Pro resets every five hours with weekly limits. Power and Max modes are paid and use what Replit calls effort-based pricing based on request complexity. Replit asks you to confirm before a paid action starts, and its docs note that planning in a paid mode is billed even when no code changes.
> Before you ask either agent to fix a bug for the third time, stop and read the error yourself. Repeating the same prompt is the fastest way to spend a month of tokens or credits on one problem.
## Bolt vs Replit: how does each option stack up?
Bolt wins on speed and simplicity for JavaScript web apps, and Replit wins on flexibility for anything that needs a real server.
### Bolt
- Best for: founders and small businesses building a JavaScript web app, landing page or simple internal tool who want results in an afternoon.
- Cost range: free to start, $25 a month and up for Pro at the time of writing, more if you buy extra tokens for a large project.
- Pros: very fast live preview, a free plan new users can still join, a clear token allowance, hosting and databases listed on every plan, easy GitHub export.
- Cons: tied to JavaScript stacks, token use climbs as the project grows, and long running background work is not what it is built for.
### Replit
- Best for: builders who need Python or another language, a server that stays up, scheduled tasks, or a team working in the same project.
- Cost range: $20 a month for Core at the time of writing, with usage beyond the included $20 of credits billed as you go, and $100 a month and up for Pro.
- Pros: a full cloud machine, many languages, built-in database and publishing, collaborators on Core, and a Free Mode for routine work.
- Cons: no open free plan for new builders, effort-based billing is harder to predict, and published apps spend from the same credit pool as the agent.
## Which one handles the backend, database and hosting better?
Replit handles a real backend better, and Bolt handles a front end on top of a hosted backend more smoothly.
Because a Replit project is a running machine, an Express or Flask server, a webhook endpoint that has to stay awake, or a job that runs every night all behave like they would on a normal server. Replit's Core plan also includes a database with a 7-day restore window, which is a nice safety net when the agent rewrites a table.
Bolt apps typically lean on a hosted backend for data and sign-in. That works well, but it moves the hard parts into that service: row level security rules, auth redirect URLs and keys. If your Bolt app uses Supabase, the post "Is your Lovable or Bolt app leaking data? Check Supabase row level security" is worth reading before launch.
For hosting, both can publish for you. Bolt's paid plan adds custom domains and removes branding. Replit Core includes unlimited published apps and removes the "Made with Replit" badge, with publishing paid from credits.
## Which is easier to leave later?
Both are easy to leave as long as you get the code into GitHub early, and a Bolt JavaScript app is usually the simpler one to move.
A Bolt project is a standard JavaScript project, so once it is on GitHub it runs locally with npm install and deploys to most hosts. The post "How to export a Bolt project to GitHub, run it locally and deploy it" walks through that step by step.
Replit projects can use git too, but they sometimes depend on Replit specific pieces: secrets stored in the Secrets tool, a database created inside Replit, or a start command that only exists in the project settings. None of that is a trap, it just has to be copied out deliberately. "How to move a Replit app to Vercel" covers the environment variables, database and build settings for that path.
My advice for either tool is the same: connect GitHub on day one, keep your keys in one written list, and make sure you know where your data actually lives.
## What does this look like for a real project?
Here is an illustration, not a client: a dog grooming studio wants a booking page, a staff dashboard and an automated text reminder the night before each appointment.
The booking page and dashboard are a JavaScript front end on a hosted database. In Bolt, the owner could have a working version in a day or two on the free plan, then upgrade to Pro for a custom domain. The nightly reminder is the awkward part, because it needs something to run on a schedule outside the browser, which usually means adding a scheduled function on the host or a separate service.
In Replit, the agent can write the booking app and a small scheduled script that sends the reminders, in the same project, using the same database. The trade-off is cost visibility: a few paid Power mode requests to get the reminder logic right come out of the $20 of Core credits, and the always available app draws on that pool too.
Neither choice is wrong. The Bolt route is cheaper and faster at the start and needs one extra piece later. The Replit route keeps everything in one place and costs a little more attention to billing.
## Which should you pick for your situation?
Choose by what your app needs to run, not by which demo looked more impressive.
- Non-technical founder with a JavaScript web idea and a small budget: start in Bolt on the free plan and move to Pro when you need a custom domain.
- Builder who needs Python, a bot, a scraper or scheduled jobs: Replit, because those need a machine that stays on.
- Small team building together: Replit Core allows up to 5 collaborators, and Bolt's Teams plan is priced per member.
- Someone who wants the most predictable monthly bill: Bolt, since a token allowance is easier to plan around than effort-based requests.
- Anyone planning to hand the app to a developer later: either, as long as the code is in GitHub from the first week.
If you are still deciding whether the app should exist as a full product at all, "Fix or rebuild your AI-built app?" covers when to keep going and when to start over.
## When should you bring in a developer?
Bring in help when the same bug survives three rounds of prompting, or when the app is about to take real payments or real customer data.
Agents in both tools are good at screens and weak at the joins between systems: auth callbacks, database rules, webhooks and environment variables that differ between preview and production. Those are also the places where a broken app costs money or leaks data.
If one bug is blocking you, my Quick Fix starts at $60 and takes about 2 days. If you need up to three fixes plus one small feature, Fix Plus Features starts at $200 over about 5 days. If the core features already work and you want it launched properly on your own domain, Finish and Launch starts at $600 over about 10 days. The fix pages on this site, such as "fix your Bolt app" and "fix your Replit app", explain what each covers.
## The bottom line
Bolt is the faster, simpler choice for a JavaScript web app, with a free plan new users can still join and Pro at $25 a month at the time of writing. Replit is the more capable choice for apps that need a real server, another language or scheduled work, with Core at $20 a month including $20 of credits. Pick the one that matches what your app has to run, connect GitHub on the first day, and stop prompting and get help when the same bug keeps coming back.`,
  },
  {
    slug: 'javascript-heap-out-of-memory-nextjs-build',
    title: 'JavaScript heap out of memory during next build: causes and fixes',
    description: 'Why next build fails with JavaScript heap out of memory, how to raise the limit with NODE_OPTIONS, how much memory Vercel builds get, and how to find the real cause.',
    date: d,
    keywords: ['JavaScript heap out of memory', 'next build heap out of memory', 'max-old-space-size Next.js', 'Vercel build out of memory', 'Next.js build memory usage'],
    service: 'fix-ai-built-app',
    shortAnswer: 'The error means Node.js hit its memory limit while Next.js was compiling or prerendering your app. Raising the limit with NODE_OPTIONS set to --max-old-space-size=6144 often gets the build through, but the lasting fix is finding what uses the memory: too many static pages, oversized imports, source maps or a heavy custom webpack setup.',
    takeaways: [
      'The error comes from Node.js, not Next.js, and it means the build process ran out of heap space.',
      'Setting NODE_OPTIONS to --max-old-space-size raises the heap limit, but it cannot exceed the memory the build machine actually has.',
      'On Vercel, Hobby builds run on a machine with 8 GB of memory, and Pro teams can use larger machines with up to 60 GB.',
      'Next.js has a built-in flag, --experimental-debug-memory-usage, that prints memory use during the build so you can see where it climbs.',
      'Prerendering thousands of pages, importing whole libraries and generating source maps are the most common causes in real projects.',
    ],
    faqs: [
      { q: 'What value should I use for max-old-space-size?', a: 'Use a number in megabytes that leaves room for the rest of the system, such as 4096 on a 6 to 8 GB machine; Vercel suggests 6144 for its standard 8 GB build containers.' },
      { q: 'Why does next build work on my laptop but run out of memory on Vercel?', a: 'Your laptop may have 16 GB or more and a warm cache, while a Hobby build on Vercel has 8 GB and often starts cold, so a build near the limit locally will fail there.' },
      { q: 'Is it safe to turn off TypeScript checking in the build to save memory?', a: 'It saves memory, but type errors can then reach production, so only do it if you run type checks separately in CI before deploying.' },
      { q: 'Does upgrading Next.js help with memory errors?', a: 'Often it does, because recent versions added memory optimizations and fixed known leaks, but test the upgrade on a branch first since major versions change behavior.' },
      { q: 'Can Thomas Osayi fix a Next.js build that keeps running out of memory?', a: 'Yes. Thomas Osayi fixes one blocking bug such as a failing build from $60 in about 2 days through his Quick Fix package.' },
    ],
    sources: [
      { title: 'Memory usage guide', publisher: 'Next.js', url: 'https://unpkg.com/next@16.4.3/dist/docs/01-app/02-guides/memory-usage.md' },
      { title: 'Troubleshooting builds failing with SIGKILL or out of memory errors', publisher: 'Vercel', url: 'https://vercel.com/kb/guide/troubleshooting-sigkill-out-of-memory-errors' },
      { title: 'Managing builds', publisher: 'Vercel', url: 'https://vercel.com/docs/builds/managing-builds' },
      { title: 'Vercel Hobby plan', publisher: 'Vercel', url: 'https://vercel.com/docs/plans/hobby' },
    ],
    body: `Few build errors look as scary as a wall of garbage collector output ending in FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory. It usually appears after a project has grown for a while, often right after an AI tool added a big library or a page that generates thousands of routes.
The good news is that this one is rarely mysterious. The build ran out of room, and there are only a handful of things in a Next.js build that use a lot of it. This post is only about the heap error. For the wider list of deploy failures, "Vercel build failed? The most common Next.js deploy errors and fixes" covers the rest.
## What does "JavaScript heap out of memory" mean in a Next.js build?
It means the Node.js process running next build tried to use more memory than its heap limit allows, so Node stopped the process.
Next.js runs on Node.js, and Node gives JavaScript a heap with a size limit. When compiling, bundling and prerendering pushes memory past that limit and garbage collection cannot free enough, Node prints a fatal error and exits. You will usually see one of these lines near the end of the log:
- FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
- FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
On a hosting platform you may see a different ending: the build simply stops with SIGKILL or an out of memory message. That version means the whole machine ran out of memory and the operating system killed the process, which is a related but slightly different problem. The heap error says Node's limit was too low for the work. The SIGKILL says the machine itself was too small, often because the heap limit was set higher than the RAM available.
## Is the problem my code or the build machine?
It is almost always both: the build got bigger than the machine, and something in the code made it bigger than it needed to be.
A quick way to tell which side to start on:
- If the build passes on your laptop and fails on the host, the host has less memory or a colder cache. Start with the limits below.
- If it fails everywhere, something in the project is using far more memory than normal. Start with the causes further down.
- If it started failing right after one commit, look at that commit first. A new dependency, a new generateStaticParams function or a change to next.config.js is the usual suspect.
That last case is the most common one I see in AI-built apps. An agent adds a charting library, an icon pack or a page that prebuilds every product, and the build that took two minutes yesterday now dies at the "Collecting page data" or "Generating static pages" step. Reading the last few lines before the crash tells you which phase was running, which narrows the cause a lot.
## How do I raise the memory limit with NODE_OPTIONS?
Set the NODE_OPTIONS environment variable to --max-old-space-size followed by a size in megabytes, for example --max-old-space-size=4096.
Locally, you can put it in your build script in package.json so the build command becomes NODE_OPTIONS=--max-old-space-size=4096 next build. That syntax works on macOS and Linux. On Windows, use a helper package such as cross-env or set the variable in your terminal first.
On Vercel, add an environment variable in Project Settings under Environment Variables with the name NODE_OPTIONS and the value --max-old-space-size=6144, then redeploy. Vercel's own troubleshooting guide suggests 6144 for its standard build containers, which have 8,192 MB of memory.
The rule is to stay below the machine's real memory. Node needs memory outside the heap, and your build may start worker processes too. If you set the heap to 8192 on an 8 GB machine, you trade the heap error for a SIGKILL.
> Treat a higher heap limit as a way to get today's deploy out, not as the fix. If the build needed 4 GB last month and 6 GB now, it will need 8 GB soon.
## How much memory does a Vercel build get?
At the time of writing, Hobby builds run on a Basic machine with 2 vCPUs and 8 GB of memory, and Pro and Enterprise teams can use machines with up to 60 GB.
Vercel's build docs list these machine types:
- Basic: 2 vCPUs, 8 GB memory, used for every Hobby build.
- Standard: 4 vCPUs, 8 GB memory.
- Enhanced: 8 vCPUs, 16 GB memory.
- Turbo: 30 vCPUs, 60 GB memory.
- Elastic: 4 to 30 vCPUs and 8 to 60 GB, sized automatically per project.
New Pro and Enterprise accounts use Elastic by default. According to the docs, Elastic considers how much memory a build uses, upgrades a build that is close to running out of memory, and runs the next deployment after an out of memory failure on a higher tier. Builds are billed by CPU minute on paid teams, starting at $0.0035 per CPU minute, so a bigger machine costs more per minute but can finish faster.
If you are on Hobby, the ceiling is fixed at 8 GB, which is why trimming the build matters more there. Build Diagnostics in the project's Observability tab shows how build resource use changed between deployments, which helps you spot when the jump happened.
## What uses the most memory in a Next.js build?
Prerendering many pages, importing large libraries, generating source maps and type checking are the usual heavy hitters.
### Static generation at scale
A generateStaticParams function that returns every product, post or user page makes Next.js render all of them during the build. Thousands of pages, each fetching data, add up fast. Return only your most visited pages and let the rest render on demand, which keeps the build small while users still get every page.
### Giant imports
Importing a whole icon library, a full lodash, a date library with every locale or a big SDK into a shared layout pulls it into many bundles. Import the specific function or icon you need, and keep heavy libraries out of the root layout.
### Source maps
Source maps can take a lot of memory to produce. The Next.js memory guide lists productionBrowserSourceMaps, experimental.serverSourceMaps and enablePrerenderSourceMaps as options you can set to false.
### Type checking and custom webpack config
The "Running TypeScript" step uses memory on large codebases. A custom webpack function in next.config.js that adds plugins, or something that accidentally keeps data around between compilations, can also grow memory steadily until the build dies.
## How do I find exactly what is eating memory?
Run the build with Next.js's memory debugging flag first, and take a heap profile if that is not enough.
The Next.js memory usage guide documents these tools:
- next build --experimental-debug-memory-usage prints memory and garbage collection stats while the build runs, and takes heap snapshots as it nears the limit. The guide notes it does not work together with the webpack build worker.
- node --heap-prof node_modules/next/dist/bin/next build writes a .heapprofile file you can load in the Memory tab of Chrome DevTools to see which functions allocated the most.
- Starting the build with NODE_OPTIONS=--inspect lets you attach Chrome DevTools and take heap snapshots by hand.
In practice, the debug flag alone usually answers the question. Watch which phase memory climbs in. A steady climb during compilation points at imports and webpack config. A climb during "Generating static pages" points at prerendering. Then remove the suspect, such as commenting out a generateStaticParams or a heavy import on a branch, and build again to confirm.
## Which next.config settings reduce build memory?
The Next.js guide lists a few switches, and each one trades something for lower memory.
- experimental.webpackMemoryOptimizations set to true, available from Next.js 15.0.0, lowers peak webpack memory at a small cost in compile time. The docs describe it as low risk.
- experimental.webpackBuildWorker runs webpack in a separate worker. It has been on by default since 14.1.0 when you do not have a custom webpack config, so removing an unneeded custom config can turn it back on.
- Turning off the source map options above cuts memory if you do not need production source maps.
- typescript.ignoreBuildErrors set to true skips type checking in the build. Only do this if a separate CI step runs the type check, because otherwise type errors ship.
Note that the webpack switches only matter if your build actually runs webpack. Check the top of your build log for which bundler it used before changing them.
## What does a real fix look like?
Here is an illustration rather than a client story: an online shop built with an AI tool has 4,000 products, and its generateStaticParams returns all of them.
The build passed for months with a few hundred products, then started failing on Vercel Hobby with the heap error during "Generating static pages". Raising NODE_OPTIONS to 6144 got one deploy through, and the next week it failed again as products were added.
The lasting fix had three parts. First, generateStaticParams was changed to return the 200 best sellers, with the other product pages rendered on the first visit and cached. Second, the product page was importing an entire icon set and a full charting library for a small size chart, and both were swapped for targeted imports. Third, production browser source maps were turned off because nobody was using them. Build memory dropped well below the limit, and the NODE_OPTIONS override could stay as a safety margin instead of a crutch.
That same pattern, fewer prerendered pages, smaller imports and only the source maps you need, fixes most of these builds. On a stack like the TheHoopGang creator portal, which is Next.js with Prisma and Postgres, the same habits apply: keep data heavy pages dynamic unless they really benefit from being built ahead of time.
## When is it worth paying for a bigger machine or getting help?
Pay for a bigger machine when the project is legitimately large and you have already trimmed it, and get help when you cannot tell what is using the memory.
A big app with many routes and a real need for prerendering may simply need more than 8 GB, and a Pro team on Elastic or Enhanced machines is a reasonable answer. But if a small app is hitting the limit, a bigger machine only hides a problem that will come back.
If your deploy is blocked today, my Quick Fix starts at $60 and takes about 2 days for one bug like this. If the memory error is one of several problems before launch, Fix Plus Features starts at $200 over about 5 days. Related posts worth a look are "Vercel function timeout (FUNCTION_INVOCATION_TIMEOUT): causes and fixes" and "Environment variables undefined on Vercel? Every cause and fix", since those often show up in the same projects.
## The bottom line
"JavaScript heap out of memory" during next build means Node ran out of heap while compiling or prerendering. Setting NODE_OPTIONS to --max-old-space-size, kept below the machine's memory, gets you unstuck, and Vercel's 8 GB Hobby ceiling is the limit to design around. The real fix is finding the cause with next build --experimental-debug-memory-usage, then prerendering fewer pages, importing less and dropping source maps you do not use.`,
  },
  {
    slug: 'supabase-confirmation-email-not-sending',
    title: 'Supabase confirmation email not sending? Fix SMTP, rate limits and redirects',
    description: 'Why Supabase confirmation emails stop sending: built-in SMTP limits, custom SMTP setup, email rate limits, spam, Site URL, templates and the Confirm email toggle.',
    date: d,
    keywords: ['Supabase confirmation email not sending', 'Supabase auth email not sending', 'Supabase custom SMTP', 'Supabase email rate limit exceeded', 'Supabase signup email not received'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Supabase\'s built-in email service only sends to members of your project\'s team and, at the time of writing, only 2 messages an hour, so real users never get their confirmation email. Set up custom SMTP with a provider such as Resend or Postmark, raise the email rate limit, and check your Site URL and spam folder.',
    takeaways: [
      'The default Supabase email service is for testing only: it refuses addresses outside your project team and is limited to 2 emails an hour at the time of writing.',
      'Custom SMTP fixes delivery to real users, but Supabase starts it at 30 emails an hour until you raise the limit on the Rate Limits page.',
      'A wrong Site URL does not stop the email from sending, but it sends users to the wrong place when they click the link.',
      'SPF, DKIM and DMARC records on your sending domain are what keep auth emails out of spam.',
      'Turning off Confirm email makes sign-up work instantly, but it also lets anyone register with an address they do not own.',
    ],
    faqs: [
      { q: 'Why do I get the confirmation email but my users do not?', a: 'The built-in Supabase email service only delivers to addresses in your project\'s team, so your own address works while everyone else\'s is refused until you set up custom SMTP.' },
      { q: 'What does "email rate limit exceeded" mean in Supabase?', a: 'It means your project hit its hourly limit for auth emails, which is very low on the built-in service and starts at 30 an hour after you add custom SMTP.' },
      { q: 'Which SMTP provider should I use with Supabase?', a: 'Supabase\'s docs list Resend, AWS SES, Postmark, Twilio SendGrid, ZeptoMail and Brevo as options, and any provider that gives you SMTP credentials and domain verification will work.' },
      { q: 'Can I customize Supabase email templates on the free plan?', a: 'Free projects created from June 3, 2026 that use the default email provider cannot edit templates, but adding custom SMTP removes that restriction.' },
      { q: 'Can Thomas Osayi set up working auth emails for my app?', a: 'Yes. Thomas Osayi fixes one blocking bug such as broken confirmation emails from $60 in about 2 days through his Quick Fix package.' },
    ],
    sources: [
      { title: 'Send emails with custom SMTP', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/auth/auth-smtp' },
      { title: 'Rate limits', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/auth/rate-limits' },
      { title: 'General configuration', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/auth/general-configuration' },
      { title: 'Changes to email template customisation on free tier', publisher: 'Supabase', url: 'https://supabase.com/changelog/46599-changes-to-email-template-customisation-on-free-tier' },
    ],
    body: `Your sign-up form works, the user shows up in the Authentication table, and then nothing. No confirmation email, no error the user can see, and a support message asking why they cannot log in. This is one of the most common problems in apps built with Lovable, Bolt and other tools that wire up Supabase Auth for you.
It is also one of the easiest to fix once you know where Supabase draws its lines. In my experience the cause is nearly always one of five things: the built-in email service, a rate limit, spam filtering, a wrong Site URL, or a setting someone changed without realizing what it did. Here is how to check each one in order.
## Why is Supabase not sending my confirmation email?
The most likely reason is that your project still uses Supabase's built-in email service, which does not deliver to real users.
According to Supabase's docs, the default service refuses to deliver messages to addresses that are not part of the project's team. You can see your team in the organization's Team tab. That is why the classic symptom is "it works for me but not for anyone else": your address is on the team, your users' addresses are not.
Work through the causes in this order, because each one is quicker to rule out than the next:
- Still on the built-in service: real users get nothing. Fix with custom SMTP.
- Rate limit hit: the API returns an error such as email rate limit exceeded.
- Delivered to spam: the email exists, the user just cannot find it.
- Wrong Site URL or redirect URL: the email arrives but the link breaks.
- Confirm email is off, or the template was edited badly: no email is expected, or it is missing the link.
Check the Auth logs in the Supabase dashboard while you test a sign-up. A failed send usually leaves an error there, even when your app shows the user nothing.
## Is the built-in Supabase email service meant for production?
No, Supabase describes it as a best-effort service for non-production use, with no SLA and a very low sending limit.
At the time of writing, the docs set the built-in limit at 2 messages per hour for the whole project. That is enough to test a sign-up flow yourself and nowhere near enough for a launch. Two people signing up in the same hour is enough to hit it.
The limits exist because a free shared mail server is easy to abuse, and if spammers get it blocklisted, every project suffers. So treat the built-in service as a development convenience. The moment anyone outside your team needs to sign up, reset a password or use a magic link, you need your own email provider.
This catches many AI-built apps at launch because everything looked fine during testing. The founder signed up with their own address, which is on the team, and the confirmation arrived every time.
## How do I set up custom SMTP in Supabase?
Create an account with an email provider, verify your sending domain, then enter its SMTP details on the SMTP settings page under Authentication in the Supabase dashboard.
The steps:
- Pick a provider. Supabase's docs list Resend, AWS SES, Postmark, Twilio SendGrid, ZeptoMail and Brevo as examples. The post "Resend vs SendGrid vs Postmark" compares three of them for this kind of transactional email.
- Verify a domain you own with that provider by adding the DNS records it gives you. These include SPF and DKIM, and you should add a DMARC record too.
- In Supabase, turn on custom SMTP and fill in the host, port (587 is common), username, password, the sender email address such as no-reply@yourdomain.com and a sender name.
- Save, then send a test sign-up to an address outside your team.
If the test fails, the Auth logs usually show why. An authentication error points at a wrong username or password, often an API key pasted with a space. A connection timeout usually means the wrong port or host. A rejected sender usually means the From address is not on the domain you verified with the provider. Fix the one the log names, then test again from a fresh address, because some providers suppress repeat sends to an address that bounced earlier.
Once custom SMTP is saved, Supabase applies a starting limit of 30 emails per hour. Go to the Rate Limits page under Authentication and raise it to a number that fits your expected sign-ups, keeping within your provider's own limits.
> Use a subdomain such as auth.yourdomain.com or mail.yourdomain.com for auth email, and keep marketing newsletters on a different one. Supabase's docs recommend separating the two so a newsletter complaint never blocks password resets.
## What does "email rate limit exceeded" mean?
It means your project sent its maximum number of auth emails for the hour, or one user asked for another email too soon.
There are two limits to know. The project-wide limit is the hourly cap on all auth emails: 2 on the built-in service at the time of writing, and 30 to start with custom SMTP until you change it. The per-user limit stops the same user requesting another sign-up confirmation within 60 seconds by default, and that window is customizable.
In the app, this often shows up as a generic "something went wrong" after a user clicks resend several times. Look at the actual error returned by supabase.auth.signUp or resend in your browser console or server logs. If it says email rate limit exceeded, the fix is either custom SMTP, a higher limit on the Rate Limits page, or both.
It is also worth adding a short cooldown to your resend button so users cannot trigger the per-user limit by clicking repeatedly. A message such as "Check your inbox, you can request another email in 60 seconds" saves a lot of support emails.
## Is the email going to spam?
Often, yes, especially when the sending domain has no SPF, DKIM or DMARC records, or when the email looks promotional.
Ask the user to search their inbox, spam and promotions tabs for your sender address. If it is there, the sending works and the problem is reputation. Supabase's deliverability advice is practical:
- Set up DKIM, DMARC and SPF for the sending domain and keep them in place.
- Keep auth emails plain: a short subject, one clear button, few links and images, no promotions.
- Sanitize anything user supplied that appears in the email, such as a display name.
- Use CAPTCHA on sign-up so bots cannot fill your sending history with bounces.
Corporate and school email systems are stricter than personal inboxes. If one company's users never receive anything, their IT team may be filtering it, and a verified domain with DMARC is the first thing they will ask about.
## Is a wrong Site URL or redirect URL breaking the link?
The Site URL does not stop the email from sending, but if it is wrong the confirmation link sends users to localhost or a dead preview address.
Supabase uses the Site URL from the URL Configuration page as the default destination in auth emails. If it still says http://localhost:3000 from development, users click the link and land on an error page, which looks to them exactly like "the email did not work". Any redirect you pass in code with emailRedirectTo must also be on the Redirect URLs allow list, or Supabase falls back to the Site URL.
Set the Site URL to your production domain, add your preview and local addresses to the Redirect URLs list, and test the full click-through. The post "Supabase auth redirect URL not working?" covers localhost, preview and production redirects in more depth.
## Can I edit the email templates, and can a bad template break sending?
You can edit templates on the Email Templates page, but free projects created from June 3, 2026 that use the default email provider cannot, and a template missing its confirmation link breaks the flow.
Supabase announced that change in its changelog as a response to phishing abuse of the free email service. Existing free projects and paid plans are unaffected, and adding custom SMTP removes the restriction for free projects too.
If you do edit templates, keep the confirmation link variable that Supabase provides in the template. A redesign that drops it, or wraps it in a broken link, sends an email that arrives fine and confirms nothing. After any template change, send yourself a real sign-up and click through to the end.
## Should I just turn off Confirm email?
Only for internal tools or early testing, because turning it off lets anyone sign up with an email address they do not own.
The Confirm email setting lives in the email provider settings on the Sign In / Providers page. Supabase's docs describe it as requiring users to confirm their address before signing in for the first time. With it off, the address is marked as confirmed with no check, and users can log in immediately.
That is tempting when emails are not arriving, and it does make the symptom disappear. But password resets and magic links still need working email, so you have only moved the problem. It also means someone can register with another person's address, which matters for anything with payments, private data or invitations.
Here is an illustration: a small tutoring business launches a parent portal and switches off Confirm email the night before launch because emails are not arriving. Sign-up works, but the first parent who forgets a password cannot reset it, because the reset email still goes through the built-in service. Setting up custom SMTP with a verified domain would have fixed both in under an hour.
## The bottom line
If your Supabase confirmation email is not sending, assume the built-in email service first: it only reaches your project team and is limited to 2 emails an hour at the time of writing. Add custom SMTP with a verified domain, raise the rate limit from its starting 30 an hour, then check spam, the Site URL and your templates. If you want it done for you, my Quick Fix starts at $60 for one blocking bug in about 2 days, and Fix Plus Features starts at $200 when auth emails are one of a few things standing between your app and launch.`,
  },
  {
    slug: 'firebase-app-hosting-vs-vercel-for-nextjs',
    title: 'Firebase App Hosting vs Vercel for a Next.js app: cost, features and regions',
    description: 'Firebase App Hosting vs Vercel for Next.js compared: current free usage and pricing, the Blaze plan, supported Next.js versions, regions, rollouts and which to pick.',
    date: d,
    keywords: ['Firebase App Hosting vs Vercel', 'Firebase App Hosting Next.js', 'Vercel vs Firebase for Next.js', 'Firebase App Hosting pricing', 'host Next.js on Firebase'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Vercel is the simpler and more complete home for a Next.js app, with a free Hobby plan and a $20 a month Pro plan at the time of writing. Firebase App Hosting makes sense when your app already lives in a Firebase or Google Cloud project, but it requires the pay-as-you-go Blaze plan and officially supports a narrower range of Next.js versions.',
    takeaways: [
      'Firebase App Hosting needs a project on the pay-as-you-go Blaze plan, even though it includes monthly no-cost usage.',
      'Vercel builds Next.js and supports new versions quickly, while App Hosting publishes a support table of specific Next.js versions.',
      'App Hosting runs your app on Cloud Run in one primary region you choose, with Cloud CDN in front of it.',
      'You can use Firebase for auth and Firestore and still host the Next.js app on Vercel, which is a common and sensible setup.',
      'For a Firebase Studio app, App Hosting keeps working after Studio itself shuts down in March 2027.',
    ],
    faqs: [
      { q: 'Is Firebase App Hosting free?', a: 'It includes no-cost usage each month, such as 10 GiB of outgoing bandwidth at the time of writing, but it requires the Blaze pay-as-you-go plan, so a card is on file and usage past the free amounts is billed.' },
      { q: 'Can I use Firebase with a Next.js app hosted on Vercel?', a: 'Yes. Firebase Auth, Firestore and Storage work from a Next.js app on Vercel, as long as your Vercel domains are added to Firebase\'s authorized domains and your keys are set as environment variables.' },
      { q: 'Which Next.js versions does Firebase App Hosting support?', a: 'At the time of writing its frameworks page lists Next.js 13.5.x and higher, with a support table that names specific minor versions, and says versions outside those ranges might work but are not officially supported.' },
      { q: 'Does Firebase Studio shutting down affect App Hosting?', a: 'Firebase says the sunset on March 22, 2027 applies only to the Firebase Studio development environment, and App Hosting continues to work outside of Studio.' },
      { q: 'Can Thomas Osayi move my Next.js app between Firebase App Hosting and Vercel?', a: 'Yes. Thomas Osayi takes apps whose core features already work to a proper launch, including hosting and domain setup, from $600 in about 10 days through his Finish and Launch package.' },
    ],
    sources: [
      { title: 'Understand App Hosting costs', publisher: 'Firebase', url: 'https://firebase.google.com/docs/app-hosting/costs' },
      { title: 'Frameworks and tooling for App Hosting', publisher: 'Firebase', url: 'https://firebase.google.com/docs/app-hosting/frameworks-tooling' },
      { title: 'Understand App Hosting and how it works', publisher: 'Firebase', url: 'https://firebase.google.com/docs/app-hosting/about-app-hosting' },
      { title: 'Vercel Hobby plan', publisher: 'Vercel', url: 'https://vercel.com/docs/plans/hobby' },
      { title: 'Firebase Studio sunset and project migration', publisher: 'Firebase', url: 'https://firebase.google.com/docs/studio/migrating-project' },
    ],
    body: `If your Next.js app uses Firebase for sign-in and data, Firebase App Hosting looks like the obvious place to put it: one console, one bill, one Google account. Vercel looks just as obvious if you followed the Next.js docs, because Vercel makes Next.js. Both are reasonable answers, and the right one depends on where the rest of your app lives and how much you care about the newest Next.js features.
I have built on both sides of this. LACEUP, a basketball apparel storefront I built, runs on Vercel with a Firebase admin behind it, and NOM, a food discovery app I worked on, uses Firebase as its backend. This post sticks to the two hosts. If you are comparing Vercel with Railway or Render instead, "Vercel vs Railway vs Render for hosting a SaaS" covers that.
## What is the difference between Firebase App Hosting and Vercel?
Firebase App Hosting builds your Next.js app into a container and runs it on Google Cloud, while Vercel runs it on its own platform built around Next.js.
App Hosting, per Firebase's docs, creates a Cloud Build build for each commit, stores the result as a container in Artifact Registry, and rolls it out as a new revision of a Cloud Run service. Requests pass through a Google Cloud load balancer with Cloud CDN, and anything not cached goes to Cloud Run. It is Google Cloud infrastructure with Firebase's console on top.
Vercel takes your repository, builds it on its own build machines and splits the output into static files on its CDN and functions for server code. Because Vercel maintains Next.js, new features tend to work there first and without extra setup.
The practical difference: App Hosting fits neatly inside a Firebase project you already have, with secrets in Secret Manager and logs in Cloud Logging. Vercel gives you a more polished developer workflow and wider Next.js coverage, and treats Firebase as just another service your app calls.
## How much does each cost at the time of writing?
Both can be close to free for a small app, but App Hosting always needs the Blaze pay-as-you-go plan, while Vercel's Hobby plan needs no card.
### Firebase App Hosting
Firebase's cost page says App Hosting requires the Blaze plan. No-cost usage is counted per billing account each month and includes 10 GiB of outgoing bandwidth, then $0.15 per cached GiB and $0.20 per uncached GiB. It also uses the free tiers of the services underneath, such as Cloud Run (180,000 vCPU-seconds, 360,000 GiB-seconds and 2 million requests), Cloud Build (2,500 build-minutes) and Secret Manager (6 active secret versions). Past those, each service bills at its own rate.
### Vercel
Vercel's Hobby plan is free and includes, among other things, 100 GB of Fast Data Transfer, 1 million function invocations and 4 hours of Active CPU a month. If you exceed Hobby limits, you usually wait for the 30 day window to reset rather than getting a bill. Pro is $20 per developer seat a month and includes $20 of usage credit, with usage beyond that billed on demand.
For a small Next.js site, either bill can be zero or close to it. The difference is how it fails: Vercel Hobby pauses, Blaze charges.
## Which Next.js versions and features does each support?
Vercel supports new Next.js releases as they ship, while Firebase App Hosting publishes a support table and only officially covers the versions on it.
At the time of writing, Firebase's frameworks page lists Next.js 13.5.x and higher, with a schedule naming 13.5.x, 14.2.x, 15.0.x and 15.1.x as long term support and 15.2.x as active. It says versions outside those ranges might work but are not officially supported, and that App Hosting does not automatically provide active support for newly released framework versions. It also says builds with custom build commands are attempted but cannot be guaranteed.
That matters if your app is on the latest Next.js major version, or if an AI tool upgraded it for you. Check the version in package.json against Firebase's table before you commit to App Hosting. Firebase does publish guides for Next.js image loading and server caching, so common features are covered, but the most recent ones may lag.
On Vercel, server components, server actions, middleware, image optimization and incremental regeneration all work as the Next.js docs describe, because the docs are largely written against that platform.
## What does the Blaze plan requirement actually mean?
It means your Firebase project needs a billing account with a card attached, and any usage past the no-cost amounts is charged automatically.
For many Firebase projects this is not new. Cloud Functions and some Cloud Storage setups already need Blaze, so plenty of apps are on it already. But if your project is on the free Spark plan today, moving to App Hosting means upgrading the whole project, not just the hosting.
The real risk with pay-as-you-go is a surprise bill from a traffic spike or a misbehaving loop. Set a budget alert in Google Cloud Billing before you go live. A budget alert only notifies you, it does not cap spending, so check the dashboard after any launch or campaign.
> Set up a billing budget with email alerts at a low number, such as $10, the same day you enable Blaze. It costs nothing and is the cheapest insurance you will ever buy for a Firebase project.
## Where does each run your app?
App Hosting runs your server in one primary region you pick, while Vercel runs functions in a region you configure and serves cached content from its global CDN.
When you create an App Hosting backend, the docs list these regions to choose from: us-central1 (Iowa), us-east4 (N. Virginia), us-east5 (Columbus), asia-east1 (Taiwan), asia-southeast1 (Singapore) and europe-west4 (Netherlands). Uncached requests are served from that primary region, with Cloud CDN caching in front.
The region matters most for latency to your database. If your Firestore database is in a US region, an App Hosting backend in us-central1 or us-east4 keeps server rendering close to the data. On Vercel, set the function region in project settings to sit near your database for the same reason. Putting the server and database on different continents makes every server-rendered page slower, whichever host you pick.
## How do deployments and rollouts compare?
Both deploy from GitHub on every push, and the main difference is that Vercel builds a separate preview URL for every branch and pull request by default.
App Hosting watches a live branch, and by default a new rollout goes to 100% of traffic right after a push to it. Because each rollout is a Cloud Run revision, rolling back means sending traffic to an earlier one. Settings such as minimum and maximum instances, concurrency, CPU and memory can be configured for the backend.
Vercel gives every branch and pull request its own preview deployment with a shareable link, then promotes to production on merge. For a team or a client who wants to click through changes before they go live, that workflow is hard to beat. Rollbacks are a button in the dashboard.
## Firebase App Hosting vs Vercel: how does each option stack up?
Vercel is the stronger default for Next.js, and App Hosting is the stronger choice for teams already committed to Google Cloud.
### Firebase App Hosting
- Best for: apps already in a Firebase project on Blaze, teams that want one Google bill, and apps coming out of Firebase Studio.
- Cost range: often close to $0 a month for small apps within the no-cost usage at the time of writing, rising with bandwidth and Cloud Run usage.
- Pros: one console with Firestore and Auth, Cloud Run underneath, secrets in Secret Manager, a clear set of regions.
- Cons: Blaze plan required, officially supports a listed set of Next.js versions, rollouts centered on one live branch, bills spread across several Google Cloud services.
### Vercel
- Best for: most Next.js apps, especially ones using recent Next.js features, and teams who review changes on preview links.
- Cost range: $0 on Hobby, $20 per developer seat a month on Pro with $20 of included usage at the time of writing.
- Pros: first-class Next.js support, preview deployments, simple rollbacks, generous free tier, no card needed to start.
- Cons: a second vendor if your data is in Firebase, and Pro usage beyond the included credit needs watching.
## What does a combined setup look like?
You do not have to choose one company for everything: hosting on Vercel with Firebase for data is a solid, common setup.
That is how LACEUP works. The storefront, with its colorway filters and product pages, is a Next.js app on Vercel, and the product data and admin sit in Firebase.
![The LACEUP storefront I built, a basketball apparel shop on Vercel with a Firebase admin behind it](/shots/laceup-home.jpg)
The things to get right in a split setup are small but easy to miss. Add every Vercel domain, including preview domains you use, to Firebase Authentication's authorized domains, or sign-in fails with auth/unauthorized-domain (the post "Firebase auth/unauthorized-domain: how to fix it on Vercel" walks through it). Keep Firebase service account keys in Vercel environment variables, never in the repository. And lock down firestore.rules, because the host does nothing to protect your data. "Firebase best practices before launch: the security rules checklist" covers that part.
## Which should you choose, and what about Firebase Studio apps?
Choose Vercel unless your project is already on Blaze and staying inside Google Cloud is worth more to you than wider Next.js support.
- Solo founder or small business with a Next.js site: Vercel Hobby or Pro, with Firebase only for data if you need it.
- Team already running Firestore, Cloud Functions and Blaze: App Hosting keeps everything in one place.
- App built in Firebase Studio: it was likely published to App Hosting already. Firebase says Studio sunsets on March 22, 2027, that the sunset applies only to the Studio development environment, and that App Hosting continues to work outside Studio. Move the code to GitHub now, then decide calmly whether to stay or move.
- App on the newest Next.js major version: Vercel, unless that version appears in Firebase's support table.
If you want help with the move or the launch, my Finish and Launch package starts at $600 for about 10 days, for apps whose core features already work.
## The bottom line
Firebase App Hosting vs Vercel comes down to where the rest of your app lives. Vercel is the better default for Next.js: free to start, $20 a seat on Pro at the time of writing, with preview links and the widest feature support. Firebase App Hosting is a good fit for projects already on Blaze that want Google Cloud underneath, as long as your Next.js version is on its support table and you set a billing alert on day one.`,
  },
];
