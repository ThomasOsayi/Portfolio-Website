// Generated articles, batch 07 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen07: Post[] = [
  {
    slug: 'lovable-credits-running-out',
    title: 'Lovable credits running out? Why bugs burn them and what to do next',
    description: 'Why Lovable credits disappear fastest while fixing bugs, how plans and credits work at the time of writing, how to prompt less, and when a developer is cheaper.',
    date: d,
    keywords: ['Lovable credits running out', 'Lovable credits', 'Lovable pricing', 'save Lovable credits', 'Lovable bug loop'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Lovable credits run out fastest when you ask the agent to fix the same bug again and again, because every build attempt costs credits whether it works or not. Plan the fix before building, make one change per prompt, revert instead of re-prompting, and hand bugs that survive two or three attempts to a developer.',
    takeaways: [
      'Credits rarely run out on new features; they run out in fix loops where each attempt changes code without finding the root cause.',
      'At the time of writing, Lovable Pro starts at $25 a month for 100 monthly credits plus 5 daily build credits, and unused monthly credits roll over for a limited time.',
      'Plan mode, one change per prompt and reverting to a known good version cut wasted builds more than any clever prompt wording.',
      'If a bug survives two or three focused attempts, it usually lives in auth, database rules, payments or deploy settings, where a developer is faster and cheaper.',
    ],
    faqs: [
      { q: 'Why are my Lovable credits running out so fast?', a: 'Most credit drain comes from repeated fix attempts on the same bug, because each build message costs credits even when it fails to solve the problem.' },
      { q: 'Do unused Lovable credits roll over?', a: 'At the time of writing, unused monthly plan credits roll over while your subscription is active and expire two months after issue on monthly plans, while daily credits do not roll over.' },
      { q: 'Is Plan mode cheaper than Build mode in Lovable?', a: 'Plan mode costs 1 credit per message at the time of writing, which is not always cheaper than a small build, but it prevents the expensive pattern of building the wrong fix several times.' },
      { q: 'Can I fix my Lovable app outside Lovable to save credits?', a: 'Yes, you can sync the project to GitHub, fix code in your own editor or have a developer do it, and the changes flow back into Lovable.' },
      { q: 'How much does it cost to have a developer fix a Lovable bug?', a: 'Thomas Osayi fixes a single bug from $60 in about two days, and up to three fixes plus one small feature from $200.' },
    ],
    sources: [
      { title: 'Subscription plans', publisher: 'Lovable Documentation', url: 'https://docs.lovable.dev/introduction/subscription-plans' },
      { title: 'Plans and credits', publisher: 'Lovable Documentation', url: 'https://docs.lovable.dev/introduction/plans-and-credits' },
      { title: 'Best practices', publisher: 'Lovable Documentation', url: 'https://docs.lovable.dev/tips-tricks/best-practice' },
    ],
    body: `The message tends to look like this: "I had 100 credits on Monday. It is Thursday, they are gone, and the login bug is still there." The app looked almost finished a week ago. Then one bug appeared, the agent fixed it, something else broke, and every new prompt pulled another credit out of the balance.
That pattern has a cause, and it is not that you are bad at prompting. Below I explain how Lovable credits work at the time of writing, why bugs eat them faster than features, the habits that stop the drain, and the point where paying a developer for one fix is cheaper than buying more credits.
## How do Lovable credits actually work right now?
Lovable charges credits for the work the agent does, with a monthly pool on paid plans plus small daily allowances on every plan.
At the time of writing, Lovable's documentation lists these plan details:
- Free: no monthly subscription credits, 5 daily build credits capped at 30 a month, and a small monthly Cloud and AI grant. Editing and downloading code are not included, though Git sync is.
- Pro: from $25 a month for 100 monthly credits, scaling to $50 for 200, $100 for 400 and $200 for 800, plus 5 daily build credits with no monthly cap.
- Business: from $50 a month for 100 monthly credits, with the same daily allowances.
Build mode messages cost different amounts depending on the work. Lovable's own examples range from about 0.50 credits for a small styling change to around 2.00 for a landing page with generated images. Plan mode messages cost 1 credit each. You can see the exact charge for any message under "Credits used" in that message's options menu.
Unused monthly credits roll over while you stay subscribed, but on monthly plans they expire two months after they were issued. Daily credits refresh at midnight UTC and do not roll over. Pro and Business plans can also buy top-ups, which expire 12 months after purchase.
## Why do bugs burn credits faster than new features?
Because a feature request has a clear finish line, while a bug fix attempt that misses the cause just moves the problem somewhere else.
When you ask for a new settings page, the agent writes it once and you check it. When you ask it to fix "users get logged out after refresh", it has to guess where the problem lives. It might change the auth hook, then the router, then the Supabase client setup. Each guess is a build message. Each one costs credits. And each change can break something that worked, which creates the next bug and the next prompt.
This is the prompt loop I described in "Fix or rebuild your AI-built app? How to decide before you spend more". The agent sees symptoms in the preview and error text you paste, but it does not run your app the way a developer does, with logs, a debugger and the database open side by side. So it fixes symptoms.
The bugs most likely to start a loop are the invisible ones:
- Auth and session handling, especially redirect URLs after you add a custom domain.
- Supabase row level security policies that block reads, so screens load empty with no error.
- Stripe webhooks that never reach the app, so payments succeed but plans do not unlock.
- Build errors that appear only when you publish, not in the preview.
None of these are visual, and visual work is where the agent is strongest.
## How can I tell if I am stuck in a credit-burning loop?
You are in a loop if the last three prompts were about the same problem and the problem is still there, or has changed shape.
Some reliable signs:
- You keep pasting the same error message, or the error changes each time but the feature still does not work.
- The agent's summaries say "I fixed the issue" and the preview disagrees.
- Something that worked yesterday broke after a fix for something unrelated.
- You have started writing prompts in capital letters.
Check the "Credits used" figure on the last few fix messages and add them up. If you have spent more than five or six credits on one bug, stop. Further prompts are now more likely to make the code worse than better, because each attempt piles another layer of changes on top of the earlier guesses.
> Before you send another fix prompt, open version history and bookmark the last version where the feature worked. That single step makes every later experiment reversible.
## What prompting habits actually save credits?
The habits that save the most credits are planning before building, one change per prompt, and reverting instead of piling fixes on top of fixes.
Lovable's own best practices guide says much the same thing.
### Plan first, build second
Use Plan mode to ask the agent to find the root cause before it touches code. A prompt like "Do not change any code yet. Explain why the dashboard shows no projects for a logged-in user, list the files involved, and propose one fix" costs a credit and often saves five.
### One change per prompt
Bundled prompts ("fix the login, also make the header sticky and add dark mode") make it impossible to tell which change broke what. Ask for one thing, check it in the preview, then move on.
### Point, do not describe
Use the preview toolbar to select the exact element you want changed. Describing "the button near the top on the right" invites the agent to edit the wrong component.
### Write project instructions once
A short brief in the project instructions (what the product is, who uses it, key flows, design rules) stops the agent drifting and needing corrections later.
### Revert, do not re-prompt
If an attempt made things worse, use "Revert and resend" or restore a bookmarked version, then try a different, more specific prompt. Note that reverting restores code, not database data.
## What should I do when credits are nearly gone?
Stop building new features, protect what works, and decide whether the remaining problem is one the agent can realistically solve.
Here is the order I would follow:
- Bookmark the current working version and connect GitHub if you have not already, so a full copy of the code exists outside the builder.
- Write down every open problem as one sentence each. If a problem takes a paragraph to describe, it is probably several problems.
- Sort them into visual issues (layout, copy, styling) and invisible issues (auth, data access, payments, deploy).
- Spend your remaining credits on the visual list. The agent handles those well and cheaply.
- Put the invisible list aside for a developer, or for a top-up only after you have a clear plan from Plan mode.
Buying a top-up and continuing the same loop is the most expensive option. At the time of writing, Lovable lists a rate of $0.25 per credit on Pro for converting older balances, so 40 credits burned on one stubborn bug is real money, and it does not include the time you lose.
## When is a developer cheaper than more credits?
A developer is cheaper when a bug has survived two or three focused attempts, or when it involves security, payments or deployment.
Here is an illustration with a made-up founder. Maya runs a small tutoring marketplace built in Lovable on the Pro plan. Students book sessions and pay through Stripe. Payments succeed, but the booking stays "pending". She spends about 30 credits over four days on prompts. The agent rewrites the checkout page twice, adds a polling loop, and at one point disables the row level security policy that protected bookings.
The real cause is that the Stripe webhook endpoint was never registered for the published domain, and the edge function was reading the wrong signing secret. A developer with access to the repo, the Supabase logs and the Stripe dashboard can usually find that in an hour or two. I wrote up that exact failure in "Stripe payment went through but your app did not update? Fix the webhook".
My Quick Fix package covers one bug like this from $60, delivered in about two days. If there are a few problems plus one small feature, Fix Plus Features starts at $200. If the app works and you just need the blockers cleared and the thing launched, Finish and Launch starts at $600. Compare that with what a week of loop prompting costs in credits and time. There is more detail on the fix your Lovable app page.
## Can I keep using Lovable after a developer fixes the code?
Yes, as long as the fixes go through the GitHub repo that Lovable syncs with, you can keep prompting afterwards.
Lovable's Git sync works both ways. A developer clones the repository, fixes the bug in a normal editor, pushes the commit, and the change appears in your Lovable project. You keep building screens with prompts; the developer handles the parts the agent struggles with.
Two things make this smoother:
- Ask the developer to leave a short note in the project instructions about what they changed and why, for example "Do not edit supabase/functions/stripe-webhook; it verifies the signing secret." The agent reads those instructions on every prompt.
- Keep fixes small and contained. Heavy restructuring can confuse later prompts, so a targeted repair usually beats a refactor if you plan to keep using the builder.
If you want to hand the whole thing over instead, "How to hand off your AI-built app to a developer" walks through what to send so nothing gets lost.
## How do I avoid running out next month?
Budget credits by type of work: visual changes in Lovable, invisible infrastructure work planned in advance or done outside it.
A few rules that hold up well:
- Set aside your monthly credits for features and design, and do not touch the rollover balance for debugging.
- Before any prompt that touches auth, payments or database rules, write a Plan mode prompt first and read the plan.
- Test sign-up, sign-in, payment and the main workflow on the published site every week, not just in the preview, so launch issues show up early rather than all at once.
- Keep a simple log of what each big change cost in credits. Patterns show up quickly.
If you are still choosing a builder for the next project, "Lovable vs Bolt vs v0 for a startup MVP: which one to use" compares how each one charges and where each one struggles.
## The bottom line
Lovable credits run out on bugs, not features, because the agent fixes symptoms it can see and each failed guess still costs credits. Plan before you build, make one change per prompt, bookmark working versions and revert instead of stacking fixes. Spend credits on visual work, which the agent does well, and when an invisible bug in auth, data rules, payments or deployment survives a few focused attempts, stop paying for guesses and get it fixed directly in the code.`,
  },
  {
    slug: 'export-bolt-project-to-github',
    title: 'How to export a Bolt project to GitHub, run it locally and deploy it',
    description: 'Step by step: connect a Bolt project to GitHub, download it as a zip, run it on your own machine, move secrets into environment variables and deploy to Vercel.',
    date: d,
    keywords: ['export Bolt project to GitHub', 'Bolt GitHub integration', 'download Bolt project', 'run Bolt project locally', 'deploy Bolt app to Vercel'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Open the project in Bolt, click the GitHub icon in the top right, authorize the GitHub App and create a repository; Bolt then commits your changes and syncs both ways. You can also click the project title and choose Download for a zip, then run npm install and npm run dev locally and deploy the repo to a host like Vercel with your secrets added as environment variables.',
    takeaways: [
      'The GitHub integration is the better export because it keeps syncing both ways, while a zip download is a one-time snapshot.',
      'New repositories Bolt creates are private, and only the project owner can manage the integration.',
      'Secrets from Bolt are not part of the export, so every API key and service URL has to be added again as an environment variable.',
      'Disconnecting a repository in Bolt is permanent unless support reconnects it, so do not click Disconnect to fix a sync error.',
    ],
    faqs: [
      { q: 'How do I export my Bolt project to GitHub?', a: 'Open the project, click the GitHub icon in the top right, log in, install the GitHub App, then enter a repository name and click Create repository.' },
      { q: 'Does Bolt sync changes from GitHub back into the project?', a: 'Yes, according to Bolt support docs it checks GitHub about every 30 seconds and pulls in changes made outside Bolt.' },
      { q: 'Can I download a Bolt project as a zip?', a: 'Yes, on desktop you click the project title in the top left and choose Download, which saves the source code as a zip file.' },
      { q: 'Why does my exported Bolt app fail to build on Vercel?', a: 'The most common cause is a missing environment variable, because values from Bolt secrets are not included in the export.' },
      { q: 'Can someone help move my Bolt app to production?', a: 'Thomas Osayi takes Bolt apps whose core features work through deployment and launch from $600, and fixes single bugs from $60.' },
    ],
    sources: [
      { title: 'Git integration', publisher: 'Bolt Support', url: 'https://support.bolt.new/integrations/git' },
      { title: 'Projects and files', publisher: 'Bolt Support', url: 'https://support.bolt.new/building/using-bolt/projects-files' },
      { title: 'Deploy a Bolt project with Vercel Drop', publisher: 'Vercel Knowledge Base', url: 'https://vercel.com/kb/guide/bolt-vercel-drop' },
    ],
    body: `Getting your code out of Bolt is the moment an experiment becomes a real project. Once the code lives in a GitHub repository, you can run it on your own laptop, hand it to a developer, deploy it wherever you like and keep a full history of every change. Until then, the only copy sits inside one browser tool.
The good news is that Bolt makes exporting straightforward. The less obvious part is everything after the export: running it locally, rebuilding the secrets, and getting a production deploy that behaves like the preview. Here is the full path, based on Bolt's support documentation at the time of writing and on what I check when someone hands me a Bolt repo.
## What are my options for getting code out of Bolt?
There are two: connect the project to GitHub, which keeps syncing, or download a zip, which is a one-time snapshot.
### GitHub integration
Best for: anyone who will keep working on the app, alone or with a developer.
Bolt commits each change that does not break the project, and it pulls in commits made outside Bolt. You get version history, branches and a repository any host can deploy from.
### Zip download
Best for: a quick backup, a one-off handover, or dropping the project onto a host for a test deploy.
You get the source code as it is right now. Nothing syncs afterwards, so if you keep prompting in Bolt the zip goes stale immediately.
My default advice is to do both. Connect GitHub for the ongoing work and download a zip as an offline backup before any big change. It takes two minutes and removes a lot of risk.
## How do I connect a Bolt project to GitHub?
Open the project, click the GitHub icon in the top right corner, authorize the GitHub App, and create a repository.
The steps in Bolt's docs, at the time of writing:
- Open your project in Bolt and click the GitHub icon in the top right corner.
- Click "Log in to GitHub", then "Authorize" so StackBlitz, the company behind Bolt, can access your account.
- Click "Install the GitHub App" and choose either "All repositories" or "Only select repositories".
- Click "Install & Authorize" and follow the prompts.
- Back in the project, open the GitHub icon again, type a repository name and click "Create repository", then "Start building".
The new repository is private by default. You can make it public later in GitHub's settings, but for a product with any backend logic, private is the right choice.
This needs an individual GitHub account. If your company uses a GitHub organization, Bolt has a separate setup article for organizations. If you need to change which repositories Bolt can see later, open the GitHub icon and choose "Configure the GitHub App".
## How does Bolt's GitHub sync work once it is connected?
Sync runs both ways: Bolt pushes commits as you work, and it checks GitHub roughly every 30 seconds for changes made elsewhere.
That two-way sync is what makes the integration useful. A developer can fix something in their editor, push to the main branch, and you will see the change in Bolt shortly after. You can keep prompting for layout and copy while someone else handles the backend.
A few rules from the docs worth knowing:
- Projects start on the main branch. You can create a branch from the GitHub icon with "Create branch" and switch with "Switch branch".
- You cannot merge branches inside Bolt. Open a pull request on GitHub instead.
- If GitHub has a newer version when Bolt tries to push, you see a "GitHub conflict" message with two choices: "Pull and resend last message" or "Pull and discard last message".
- Only the project owner can manage the integration. Collaborators' changes sync the next time the owner opens the project.
- Sync pauses on mobile. Open the project on a desktop to resume.
> If the status panel shows "Reconnect GitHub" or "Retry sync", use those buttons. Do not click "Disconnect repository". Bolt's docs say disconnecting is permanent, and reconnecting to the same repository requires contacting support.
## How do I download a Bolt project as a zip?
On desktop, click the project title in the top left corner and choose Download; Bolt saves the source code as a zip file.
Vercel's guide describes the same menu as Export, then Download, so the label may shift slightly as Bolt updates its interface. The download is not available from a phone.
Before you rely on the zip as a backup, open it and check what is inside. You should see a package.json, a src folder, config files such as vite.config.ts or next.config.js, and probably a supabase folder if the app uses Supabase. What you will not find are the values from Bolt's Secrets panel. Vercel's guide states plainly that those are not included in the export, which is correct behavior: secrets should never ship inside source code.
If the project uses Bolt Cloud's built-in database, treat the data separately. A code export is not a data export. Check Bolt's database pages for how to back up or migrate the data itself before you assume it moves with the code.
## How do I run an exported Bolt project on my own computer?
Install Node.js, clone the repository or unzip the download, run npm install, add a .env file with your keys, and run npm run dev.
In practice:
- Install a current long-term support release of Node.js from nodejs.org.
- Clone the repo with git clone and the repository URL from GitHub, or unzip the download into a folder.
- Open a terminal in that folder and run npm install, then npm run dev.
- Open the local address the terminal prints, usually http://localhost:5173 for Vite projects or http://localhost:3000 for Next.js.
Most Bolt projects are Vite plus React. If the app talks to Supabase or another service, it will crash or show empty screens until you create a .env file in the project root. Look through the code for import.meta.env (Vite) or process.env (Next.js) to find every variable name it expects, such as VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY. Copy the values from the service dashboards, not from old chat messages.
Add .env to .gitignore if it is not there already. Then run npm run build once locally. The preview in Bolt is forgiving, and a local production build is the fastest way to see the type errors and missing imports a real host will reject.
## How do I deploy an exported Bolt app?
Import the GitHub repository into a host such as Vercel or Netlify, add your environment variables, and deploy; every push to main then redeploys automatically.
With Vercel, the flow is: create a new project, import the repository, confirm the detected framework (Vite or Next.js), paste every environment variable into the project settings, and click Deploy. Vercel also offers Vercel Drop for a quick test: you drag the zip onto vercel.com/drop without unzipping it and get a live URL. That is handy for a demo, but the GitHub import is what you want for a real product, because it redeploys on every push.
After the first deploy, three things usually need attention:
- Auth redirect URLs. If you use Supabase Auth, add the new production domain under the allowed redirect URLs, or sign-in will bounce users back to localhost or the Bolt preview.
- Client-side routing. A Vite single-page app may return 404 on page refresh for routes like /dashboard. If you see it, add a rewrite in vercel.json so all routes serve index.html.
- Webhooks and callbacks. Stripe, email providers and OAuth apps need the new production URL registered.
If the build fails, read the build log from the top. "Vercel build failed? The most common Next.js deploy errors and fixes" covers the usual messages, and most apply to Vite projects too.
## What usually breaks after moving a Bolt app off Bolt?
Missing secrets, preview-only URLs and database rules that were never tightened are the three problems I look for first.
Here is an illustration with a made-up project. A small bakery owner builds a pre-order app in Bolt with Supabase. She connects GitHub, imports the repo into Vercel and deploys. The site loads, but the menu is empty and sign-in sends people back to the Bolt preview URL.
The fixes are mundane: add VITE_SUPABASE_URL and the anon key to Vercel's environment variables and redeploy, then add the production domain to Supabase's redirect allow list. While checking the database, though, it turns out the orders table has row level security switched off, so anyone with the public key could read every customer's phone number. That is the one that matters. "Is your Lovable or Bolt app leaking data? Check Supabase row level security" explains how to check yours.
Other common surprises:
- Secret keys that were pasted into frontend code during prompting. Search the repo for sk_ and service_role before you deploy.
- Hardcoded preview URLs inside fetch calls.
- Build errors that the Bolt preview ignored.
## When should I bring in a developer?
Bring one in when the app works in Bolt but you cannot get a clean production build, or when payments, auth or data access need to be verified before real users arrive.
The export itself is easy enough to do yourself, and I would encourage it. Where help pays off is in the step after, making sure the deployed app is actually safe and reliable. A developer with the repo can run the build, read the logs, check the database rules and test the payment flow end to end in a day or two.
My Quick Fix starts at $60 for one specific bug in about two days. Fix Plus Features starts at $200 for up to three fixes and one small feature. Finish and Launch starts at $600 over about ten days, for apps whose core features already work: I deploy, connect your domain, fix what blocks launch and check security. The GitHub repository is all I need to start. "Your Lovable or Bolt app works locally. Here is what breaks at launch." lists what I check in that review.
## The bottom line
Connect your Bolt project to GitHub from the GitHub icon, keep a zip as a backup, and never use Disconnect to fix a sync hiccup. Run the code locally with npm install and npm run dev, recreate every secret as an environment variable, and run a production build before you deploy. Then import the repo into a host, update auth redirects and webhooks for the new domain, and check your database rules before anyone signs up.`,
  },
  {
    slug: 'cursor-vs-claude-code-vs-windsurf',
    title: 'Cursor vs Claude Code vs Windsurf for finishing an AI-built app',
    description: 'Cursor, Claude Code and Windsurf compared for taking a Lovable or Bolt app to launch: current prices, how each works, strengths, limits and who should pick which.',
    date: d,
    keywords: ['Cursor vs Claude Code vs Windsurf', 'Cursor vs Claude Code', 'Windsurf vs Cursor', 'best AI coding tool to finish app', 'AI coding agent comparison'],
    service: 'fix-ai-built-app',
    shortAnswer: 'For finishing an AI-built app, Claude Code suits people comfortable in a terminal who want an agent to work across the whole repo, Cursor suits people who want an editor with agent help and inline review, and Windsurf suits people who want a similar editor experience at a predictable price. At the time of writing, each has a paid entry plan around $20 to $30 a month, and none of them replaces knowing what to check before launch.',
    takeaways: [
      'All three tools can edit a real repository, run commands and fix bugs, which is the step up from browser builders like Lovable and Bolt.',
      'At the time of writing, Claude Pro costs $20 a month with Claude Code included, Windsurf Pro costs $20 a month, and Cursor lists Premium at $30 a month with third-party models billed separately.',
      'Claude Code works best when you can describe outcomes and review diffs; Cursor and Windsurf work best when you want to see and steer every change inside an editor.',
      'The tool matters less than the checklist: auth, data rules, secrets, payments and a production build still need someone who knows what correct looks like.',
    ],
    faqs: [
      { q: 'Is Cursor or Claude Code better for fixing a Lovable app?', a: 'Claude Code is often better for multi-file fixes driven from a clear description, while Cursor is better if you want to watch and approve each edit inside a visual editor.' },
      { q: 'Does Claude Pro include Claude Code?', a: 'Yes, at the time of writing Anthropic lists Claude Code access as part of the $20 a month Pro plan, with higher usage on Max plans from $100 a month.' },
      { q: 'How much does Windsurf cost?', a: 'At the time of writing, Windsurf lists a free plan, Pro at $20 a month, Teams at $40 per seat and Max at $200 a month.' },
      { q: 'Do I need to know how to code to use these tools?', a: 'You do not need to write code, but you need to read diffs, run the app locally and recognize when a change looks wrong, which is a bigger step than using Lovable or Bolt.' },
      { q: 'Should I use an AI coding tool or hire a developer to finish my app?', a: 'Use the tool for steady feature work you can verify yourself, and hire help for launch blockers; Thomas Osayi finishes and launches apps whose core already works from $600.' },
    ],
    sources: [
      { title: 'Pricing', publisher: 'Cursor', url: 'https://www.cursor.com/pricing' },
      { title: 'Introducing our new Windsurf pricing plans', publisher: 'Cognition (Devin)', url: 'https://devin.ai/blog/windsurf-pricing-plans' },
      { title: 'What is the Pro plan?', publisher: 'Claude Help Center', url: 'https://support.claude.com/en/articles/8325606-what-is-the-pro-plan' },
      { title: 'About the Max plan', publisher: 'Claude Help Center', url: 'https://support.claude.com/en/articles/11049741' },
    ],
    body: `There is a moment in most Lovable and Bolt projects when the browser builder stops being enough. You have exported the code to GitHub, the app mostly works, and now you need something that can open the real repository, run the build, read the error output and change ten files at once. That is where Cursor, Claude Code and Windsurf come in.
This is not a list of features copied from landing pages. It is a comparison for one specific job: taking an app that an AI builder started and getting it to a state where real people can sign up, pay and trust it with their data. Prices are as listed at the time of writing, and all three companies change them often.
## What is the difference between these tools and Lovable or Bolt?
Lovable and Bolt build apps inside a browser sandbox, while Cursor, Claude Code and Windsurf work on the real code on your computer, with your terminal, your files and your Git history.
That difference matters for finishing work. A browser builder sees the preview and the errors you paste. A coding tool can run npm run build, read the full stack trace, open the Supabase migration files, check the Stripe webhook handler and change all of them in one task. It can also run tests and keep going until they pass.
The trade-off is responsibility. You now need Node.js installed, the repo cloned, a .env file with the right keys, and the judgment to review what the agent changed. If you have not moved your code out yet, "How to export a Bolt project to GitHub, run it locally and deploy it" covers that first step, and the same idea applies to Lovable through its GitHub sync.
## How do Cursor, Claude Code and Windsurf compare?
All three can edit across files and run commands; they differ mainly in where you work, how you steer the agent and how you pay.
### Cursor
Best for: founders and developers who want a full code editor with an agent built in, and who like to review changes visually as they happen.
Cost range: at the time of writing, Cursor's pricing page lists a free plan, Plus at $8 a month (limited to Grok models), Premium at $30 a month, Super at $100 and Ultra at $200. Third-party models, which includes the Claude and GPT families most people know, are billed separately at API list price on the paid plans. Older Pro plans at $20 a month appear on a legacy plans page.
Pros: a familiar editor based on VS Code, strong inline completions, an agent that proposes multi-file edits you can accept or reject, plus cloud agents and AI code review on paid tiers.
Cons: the pricing has changed several times, and paying separately for third-party models makes monthly cost harder to predict.
### Claude Code
Best for: people comfortable in a terminal who want an agent that plans and carries out larger tasks across the whole repository.
Cost range: at the time of writing, Anthropic lists Claude Code as included in the Claude Pro plan at $20 a month, with the Max plan at $100 a month giving five times Pro's usage. Usage limits reset on a five-hour window and a weekly window.
Pros: works from the terminal in any project and with any editor, handles long multi-step tasks well, and reads the codebase before changing it. It is good at "find why X happens, fix it, run the build, and show me the diff".
Cons: less visual. You review changes as diffs, which can feel abstract if you are not used to reading code. Heavy use on Pro can hit usage limits during a long session.
### Windsurf
Best for: people who want an agent-first editor similar to Cursor with simpler pricing.
Cost range: at the time of writing, Windsurf's plans, now published by Cognition, the company behind Devin, are Free, Pro at $20 a month, Teams at $40 per seat and Max at $200 a month, with daily and weekly usage quotas and extra usage at API pricing.
Pros: the Cascade agent tracks what you are doing in the editor, the free plan includes unlimited tab completions, and the paid tiers include full model availability.
Cons: the product has changed ownership and pricing models in the last two years, so expect more change.
## Which tool is best for fixing bugs in a Lovable or Bolt app?
For bugs that span several files, like auth or payments, I reach for an agent that reads the whole repo first; for small visual bugs, any of the three is fine.
AI-built apps tend to have the same weak spots. The Supabase client is created in three places. Permission checks happen in the component instead of the database. A webhook handler trusts the request body without checking the signature. Fixing those means reading a lot of code before writing any.
A terminal agent like Claude Code is comfortable with prompts such as "trace how a user's subscription status gets from Stripe to the dashboard, list every file involved, and tell me where it can break". Cursor and Windsurf can do this too through their agent modes, and they show you each file as it changes, which some people find easier to trust.
Whichever you pick, ask for an explanation before a fix. The same rule I give for Lovable in "Lovable credits running out? Why bugs burn them and what to do next" applies here: an agent that guesses at fixes burns usage and adds risk.
## Which tool is easiest for a non-developer?
Cursor or Windsurf, because seeing files and changes inside an editor is less intimidating than a terminal, but none of them is as easy as Lovable.
If you have only ever used a browser builder, expect a learning curve: installing Node, opening a terminal, reading an error, committing with Git. The editors help by putting the file tree, the diff and the chat side by side. Claude Code also has extensions for popular editors, which closes some of that gap, but it is still designed around giving an agent a task and reviewing the result.
The harder skill is not using the tool. It is knowing whether the result is right. An agent will cheerfully report that it "secured the database" after writing a policy that lets any signed-in user read every row. A visual editor does not change that.
> Before letting any agent touch auth or payments, commit your working state to Git. If the change goes wrong, git checkout to the previous commit is your undo button, and it costs nothing.
## How much will finishing an app with these tools really cost?
For most solo founders, $20 to $30 a month for the tool, plus the hours you spend reviewing, testing and fixing what the agent misunderstood.
Here is an illustration with a made-up founder. Dev runs a small scheduling app for dog walkers, started in Bolt. He exports it, picks Claude Pro at $20 a month, and spends three weekends on it. The agent helps him fix the production build, refactor three copies of the booking logic into one function, and add email reminders. That part goes well.
What he cannot verify on his own is whether his Supabase policies are safe and whether his Stripe integration handles duplicate webhook events. He ends up paying for a review anyway, after the fact. If he had started with a review, he would have known exactly what to ask the agent to do.
On the other side, a team doing heavy daily work may move up to $100 or $200 tiers on any of the three. That is still cheap compared with development time, but it is not free, and API-priced extras can add up.
## When does a developer still make sense?
A developer makes sense for launch blockers you cannot verify yourself: security rules, payments, auth flows and production deploys.
These tools make experienced developers much faster, and they make non-developers more capable. What they do not supply is the knowledge of what correct looks like. If you cannot tell whether a row level security policy is right, the agent's confident summary is not evidence.
I offer three fix packages that work well alongside these tools. Quick Fix starts at $60 for one bug in about two days. Fix Plus Features starts at $200 for up to three fixes plus one small feature. Finish and Launch starts at $600 for apps whose core already works, covering deploy, domain, security checks and the blockers in between. Many people keep using Cursor, Claude Code or Windsurf for features afterwards, which is a sensible split. "Vibe coding vs hiring a developer: what makes sense for your app?" goes deeper on that decision.
## What should I set up before handing my repo to any of these agents?
Set up a clean starting point: a committed working state, a .env file, a passing local build and a short instructions file the agent reads.
Agents do far better when the project tells them how it works. Before your first task, make sure npm install and npm run build both succeed, and commit that state. Then write a short file at the root of the repo describing the stack, the folder layout, how to run the app and which files must not be changed without asking. Claude Code reads a CLAUDE.md file, Cursor reads project rules, and Windsurf reads its own rules files, so the same notes can be adapted for each.
Also give the agent a way to check its own work. Even three or four basic tests for sign-in, the main workflow and the payment webhook handler mean the agent can run them after each change instead of telling you it probably works. That one habit catches more regressions than any choice of tool.
## My recommendation by type of reader
Choose by how you like to work and what you can review, not by benchmark claims.
- You are a non-technical founder with an exported Lovable or Bolt app: start with Cursor or Windsurf for the visual editor, keep tasks small, and get a security review before launch.
- You are comfortable in a terminal or already a developer: Claude Code is excellent for repo-wide fixes and refactors, and many developers pair it with an editor.
- You want the most predictable bill: compare the flat plans on Claude Pro and Windsurf Pro against Cursor's tiers, keeping in mind that Cursor bills third-party models separately at the time of writing.
- You are a team: all three have team plans, and the deciding factor is usually which editor your developers already use.
## The bottom line
Cursor, Claude Code and Windsurf all take you past the limits of a browser builder, and each has a paid entry tier around $20 to $30 a month at the time of writing. Pick Cursor or Windsurf if you want to see and steer every edit in an editor, and Claude Code if you are happy describing outcomes and reviewing diffs. Whatever you choose, commit before every risky change, ask for explanations before fixes, and get auth, data rules and payments checked by someone who knows what correct looks like before real users arrive.`,
  },
  {
    slug: 'api-key-exposed-in-frontend',
    title: 'API key exposed in your frontend? Which keys are safe and how to fix the rest',
    description: 'Which keys are public by design (Firebase config, Supabase publishable key), which are secret (OpenAI, Stripe secret keys), and how to rotate them and move calls.',
    date: d,
    keywords: ['API key exposed in frontend', 'is Firebase API key secret', 'Supabase anon key public', 'rotate leaked API key', 'move API calls server side'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Some keys are designed to be public: Firebase web config, the Supabase publishable or anon key and the Stripe publishable key, because security comes from rules on the server side. Secret keys like OpenAI keys, Stripe secret or restricted keys and the Supabase secret or service_role key must never reach the browser; if one did, rotate it now, move the call to a server function and check your usage logs.',
    takeaways: [
      'A key being visible in the browser is only a problem if the key grants power on its own; public keys rely on database rules for protection.',
      'Any key in a NEXT_PUBLIC_ or VITE_ variable ends up in the JavaScript bundle that every visitor downloads.',
      'Rotate an exposed secret key first, then remove it from the code, because deleting it from the code does not remove it from Git history or anyone who already copied it.',
      'Calls that need a secret key belong in a server route, edge function or cloud function that checks who the user is before acting.',
    ],
    faqs: [
      { q: 'Is it safe to have my Firebase API key in frontend code?', a: 'Yes, Google says Firebase API keys restricted to Firebase services do not need to be secret, as long as Security Rules and App Check protect your data.' },
      { q: 'Is the Supabase anon key safe to expose?', a: 'The anon key and the newer publishable key are low-privilege keys meant for the browser, but they are only safe if row level security is enabled and correct on every table.' },
      { q: 'What should I do if my OpenAI API key was in my frontend?', a: 'Revoke it in the OpenAI dashboard and create a new one, move the call to a server function that reads the key from an environment variable, and check usage for charges you did not make.' },
      { q: 'Does deleting the key from my code fix the leak?', a: 'No, the old key stays in Git history and in any copy someone already took, so you must rotate or revoke it at the provider.' },
      { q: 'Can someone audit my AI-built app for exposed keys?', a: 'Thomas Osayi fixes a single issue like an exposed key from $60, and his Finish and Launch package from $600 includes a security check before launch.' },
    ],
    sources: [
      { title: 'Understanding API keys', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/api/api-keys' },
      { title: 'Learn about using and managing API keys for Firebase', publisher: 'Firebase Documentation', url: 'https://firebase.google.com/docs/projects/api-keys?hl=en' },
      { title: 'API keys', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/keys' },
      { title: 'About push protection', publisher: 'GitHub Docs', url: 'https://docs.github.com/en/code-security/concepts/secret-security/about-push-protection' },
    ],
    body: `Someone runs a security scanner on your app, or a friend opens the browser dev tools, and the message comes back: "Your API key is exposed in the frontend." Sometimes that is a real emergency that could cost you thousands of dollars by morning. Sometimes it is a false alarm, because the key was designed to be public all along.
The difference depends entirely on which key it is. Below I sort the common keys in AI-built apps into public and secret, explain why, and walk through what to do in the next hour if a secret one leaked.
## Is an API key in my frontend always a security problem?
No; a key in the browser is only a problem if the key grants access on its own, without rules on the server deciding what each user may do.
Everything your frontend uses ends up in the JavaScript that every visitor downloads. Open any site, press F12, look at the Sources or Network tab, and you can read it. Minifying does not hide anything, and neither does putting the key in an environment variable if that variable is bundled into the client.
That is why some services issue keys specifically for the browser. These public keys identify your project, and the real protection lives elsewhere: Firebase Security Rules, Supabase row level security, or Stripe refusing to let a publishable key create charges. Other services, like OpenAI, issue only secret keys. Anyone holding one can make requests that are billed to your account.
So the question is never "is the key visible?" It is "what can someone do with this key, and what stops them?"
## Which keys are public by design?
Firebase web config, the Supabase publishable or anon key, and the Stripe publishable key are designed to sit in frontend code.
### Firebase config
The apiKey in your firebaseConfig object is fine in the browser. Google's Firebase documentation says Firebase API keys do not need to be treated as secrets when they are restricted to Firebase services, because access is controlled by Security Rules, App Check and IAM. Google still calls restricting those keys to the APIs you use critical, and it warns that keys for non-Firebase services, and especially Gemini API keys, must be separate and kept out of client code.
### Supabase publishable or anon key
Supabase's docs describe the publishable key (starting sb_publishable_) as safe to expose in web pages and source code. The legacy anon key, a long JWT starting with eyJ, is its low-privilege predecessor. Both are only safe if row level security is enabled on every table. With RLS off, the anon key can read and write everything, which is the leak I describe in "Is your Lovable or Bolt app leaking data? Check Supabase row level security".
### Stripe publishable key
Stripe keys starting pk_test_ or pk_live_ are meant for Stripe.js and Elements. Stripe's documentation says they can create tokens and payment methods but cannot create charges or read account data.
## Which keys must never be in frontend code?
Any key that acts with full power by itself: OpenAI and other AI provider keys, Stripe secret and restricted keys, the Supabase secret or service_role key, email and SMS provider keys, and database connection strings.
The common offenders I look for in AI-built apps:
- OpenAI, Anthropic, Gemini and similar AI API keys. These are billed per use with no per-user rules, so a leaked key can be drained by anyone.
- Stripe secret keys (sk_live_, sk_test_) and restricted keys (rk_live_). With these, someone can issue refunds, read customer data or create charges.
- The Supabase secret key (sb_secret_) or legacy service_role key. These bypass row level security completely. Supabase now returns 401 Unauthorized if a secret key is used from a browser, but that does not stop someone using it from a script, and the docs say to rotate any leaked key.
- Resend, SendGrid, Twilio and similar keys that send messages as you.
- Postgres connection strings or Prisma DATABASE_URL values.
- Admin credentials such as a Firebase service account JSON file.
If any of these appear in a file under src, components or app that runs in the browser, treat it as leaked.
## How do I check whether my app exposes a secret key?
Search your repository for key prefixes and public environment variable names, then search the built site the way an outsider would.
Start in the code. Search the repo for these strings: sk_live, sk_test, rk_live, sb_secret, service_role, sk-proj, sk-ant, OPENAI_API_KEY and DATABASE_URL. Then look at every environment variable with a public prefix. In Next.js, anything starting NEXT_PUBLIC_ is bundled into the browser. In Vite, which most Lovable and Bolt projects use, anything starting VITE_ is. A variable named VITE_OPENAI_API_KEY is a leak by definition.
Next, check the live site. Open dev tools, go to the Network tab, use the app, and look at outgoing requests. If you see your browser calling api.openai.com or api.stripe.com directly with an Authorization header, the secret key is in the bundle.
Finally, check Git history. A key removed from the code last week still sits in older commits. If the repository was ever public, assume it was scraped.
> AI builders often fix "the API call is not working" by moving the key into the frontend. If your app ever worked after a prompt like that, search the code for the key immediately.
## What should I do in the first hour after a secret key leaks?
Rotate or revoke the key at the provider first, then check for misuse, then fix the code.
The order matters. Deleting the key from your code does nothing to the copies that already exist. Here is the sequence I follow:
- Revoke or rotate the key in the provider dashboard. In Stripe, open the API keys page, use the overflow menu on the key and choose "Rotate key", and pick an expiration of "Now" if the key is compromised. Stripe's docs note that rotation otherwise lets the old key keep working for up to 7 days, which is useful for planned rotations but not for a leak. In Supabase, create a new secret key and delete the old one, or disable the legacy keys under Settings, API Keys.
- Check usage and logs for activity you did not cause: AI usage spikes, Stripe refunds or new API requests in Workbench request logs, unexpected database writes.
- Set spending limits and alerts on usage-billed services while you work.
- Put the new key in your host's environment variables only, never in code.
- Deploy the code fix described below, then confirm the old key is dead by checking that requests with it fail.
If customer data could have been read, think about whether you have an obligation to notify anyone. That depends on where you and your users are, and this is general information, not legal advice.
## How do I move API calls to the server?
Create a server function that holds the secret key, checks who is calling, and does the work; the frontend calls your function instead of the provider.
Where that function lives depends on your stack:
- Next.js: a route handler in app/api/chat/route.ts or a server action, reading process.env.OPENAI_API_KEY with no NEXT_PUBLIC_ prefix.
- Supabase (most Lovable apps): an edge function in supabase/functions, with the key saved through Supabase secrets.
- Firebase: a Cloud Function with the key stored in Secret Manager.
Two rules make the function safe. First, verify the user. Read the session or ID token, reject anonymous calls, and know whose request it is. Second, limit what it does. An endpoint that forwards any prompt to OpenAI is just your key with extra steps; an endpoint that only summarizes the signed-in user's own notes, with a length limit and a per-user rate limit, is much harder to abuse.
Here is an illustration with a made-up app. A meal-planning app built in Lovable calls OpenAI straight from the browser using a VITE_OPENAI_API_KEY. The fix: revoke the key, move the call into a Supabase edge function named generate-plan that checks the user's JWT, caps requests at 20 a day per user, and reads the new key from Supabase secrets. The frontend changes one line, from calling OpenAI to calling the function.
## How do GitHub secret scanning and push protection help?
They catch many known key formats before or after they reach GitHub, but they are a safety net, not a strategy.
According to GitHub's documentation at the time of writing, push protection for user accounts is on by default on GitHub.com and blocks you from pushing recognized secrets to public repositories. For repositories, push protection is off by default and has to be enabled by an admin in the repository's security settings. When it triggers, the push is blocked with a message explaining which secret was found, and you remove it and push again.
Turn it on for your repository now, and pay attention to any secret scanning alerts GitHub sends. Partner providers can be notified when their key format is found in a public repo, and some will revoke the key automatically. But push protection only recognizes known formats, it does not cover keys that are already in the bundle of your live site, and anyone with write access can bypass a block by giving a reason.
## When should I get help?
Get help if you found a secret key in the frontend and are not sure how to move the logic server-side safely, or if customer data may have been exposed.
Rotating a key is a five-minute job. Rebuilding the feature properly, with authentication, rate limits and the right rules on the database, is where AI-built apps tend to need a developer. If an AI tool put the key in the browser once, prompting it again may put it back.
My Quick Fix starts at $60 for a single issue like moving one exposed API call into a secure server function, done in about two days. For an app with several problems, Fix Plus Features starts at $200. If you are getting ready to launch, Finish and Launch starts at $600 and includes a pass over keys, database rules and payments. "Firebase best practices before launch: the security rules checklist" covers the Firebase side in more depth.
## The bottom line
A key in your frontend is fine if it is a public key backed by real rules: Firebase config with Security Rules, a Supabase publishable or anon key with row level security, or a Stripe publishable key. It is an emergency if it is a secret key such as an OpenAI key, a Stripe secret key or a Supabase service_role key. Rotate the secret key at the provider first, check for misuse, move the call into a server function that verifies the user, and turn on GitHub push protection so the next one is caught before it ships.`,
  },
  {
    slug: 'stripe-test-mode-to-live-mode-checklist',
    title: 'Stripe test mode to live mode: the checklist I use before taking payments',
    description: 'Switching Stripe from test mode to live mode: new keys, a live webhook endpoint and signing secret, products and prices copied over, tax settings and the customer portal.',
    date: d,
    keywords: ['Stripe test mode to live mode', 'Stripe go live checklist', 'Stripe live webhook signing secret', 'Stripe copy to live mode', 'Stripe live mode keys'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Going live in Stripe means more than swapping pk_test_ for pk_live_: test and live mode have separate keys, separate webhook endpoints with separate signing secrets, and separate products and prices. Replace every key, register a live webhook endpoint and copy its signing secret, recreate or copy products so the live price IDs are in your config, configure tax and the customer portal in live mode, then make one real purchase and refund it.',
    takeaways: [
      'Objects created in test mode or a sandbox, such as products, prices and coupons, do not exist in live mode, so every price ID in your code must be replaced.',
      'Each webhook endpoint has its own signing secret, and the live endpoint secret is different from the test one and from the Stripe CLI secret.',
      'Stripe recommends rotating keys before going live in case test keys were saved somewhere outside your codebase.',
      'One real purchase on your own card, followed by a refund, is the only test that proves the live setup works end to end.',
    ],
    faqs: [
      { q: 'What changes when I switch Stripe from test mode to live mode?', a: 'Your API keys, webhook endpoints and signing secrets, and every product, price and coupon ID change, because test and live mode objects are kept completely separate.' },
      { q: 'Do I need a new webhook signing secret for live mode?', a: 'Yes, each webhook endpoint has its own signing secret, so you must register a live endpoint and put its whsec_ secret in your production environment variables.' },
      { q: 'Can I copy Stripe products from test mode to live mode?', a: 'Yes, Stripe has a Copy to live mode button on a product page that copies the product and its prices, but the copies get new IDs your code must use.' },
      { q: 'Why does my Stripe customer portal fail in live mode?', a: 'The portal settings must also be saved while viewing live mode, so a portal that worked in test mode can fail live until you configure and save it there.' },
      { q: 'Can someone take my Stripe integration live for me?', a: 'Thomas Osayi fixes a single Stripe issue from $60 and takes apps whose core already works to launch, including payments, from $600.' },
    ],
    sources: [
      { title: 'Go-live checklist', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/get-started/checklist/go-live?locale=en-GB' },
      { title: 'API keys', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/keys' },
      { title: 'Manage prices', publisher: 'Stripe Documentation', url: 'https://edge-docs.stripe.com/products-prices/manage-prices' },
      { title: 'Configure the customer portal', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/customer-management/configure-portal' },
      { title: 'Set up Stripe Tax', publisher: 'Stripe Documentation', url: 'https://docs.stripe.com/tax/set-up' },
    ],
    body: `In test mode, everything works. The 4242 card goes through, the webhook fires, the user's plan upgrades and the dashboard lights up. Then you flip to live mode, a real customer pays, and nothing happens. Or checkout fails with "No such price". Or the billing portal throws an error nobody has seen before.
Stripe's own go-live checklist says that switching between test and live is mostly a matter of swapping API keys. That is true for the API calls. It leaves out how many other things in a typical app are tied to test mode: webhook endpoints, signing secrets, price IDs, tax settings, the portal configuration. This is the checklist I work through, in order, before an app takes its first real payment.
## Why does an app that works in test mode break in live mode?
Because Stripe keeps test and live mode completely separate: different keys, different webhook endpoints and signing secrets, and different products, prices and customers.
Stripe's documentation is explicit that objects in one mode are not accessible in the other. A test price cannot be used in a live payment. A test webhook endpoint does not receive live events. So when an app has a test price ID hardcoded in the pricing page and a test signing secret in its environment variables, swapping only the publishable key gives you a checkout that fails, or a payment that succeeds with no webhook to record it.
AI builders make this worse because they tend to scatter configuration around. It is common for a generated project to keep price IDs in several components and the webhook secret in an edge function's code rather than in secrets. Before changing anything, list every place Stripe is configured: environment variables, constants files, database rows that store price IDs, and serverless functions.
## Which API keys do I need to change?
Replace the publishable key in the frontend with pk_live_ and the server key with a live restricted or secret key (rk_live_ or sk_live_), stored only in your host's environment variables.
On the API keys page in the Dashboard, toggle from sandbox to live mode to see your live keys. A few things to know from Stripe's docs at the time of writing:
- The live publishable key starts pk_live_ and is safe in frontend code.
- Stripe now recommends restricted API keys for server code, with only the permissions your integration needs, over full secret keys.
- In live mode, a secret key you create yourself is shown once. Copy it straight into your host's environment variables and note where you saved it.
- Stripe recommends rotating keys before going live, in case test keys were saved somewhere outside your codebase during development, and making sure your code contains no keys at all.
Set the keys per environment. On Vercel, live keys go in the Production environment only, and Preview deployments keep test keys. That way a preview branch can never charge a real card. If you are unsure whether a key belongs in the browser, "API key exposed in your frontend? Which keys are safe and how to fix the rest" sorts them out.
## How do I set up webhooks for live mode?
Create a separate webhook endpoint in live mode pointing at your production URL, select the same events as in test, and put its signing secret in your production environment.
Your Stripe account can have both test and live webhook endpoints, and each endpoint has its own signing secret starting whsec_. Three different secrets often get confused:
- The test endpoint's secret, from the Dashboard in test mode.
- The Stripe CLI's secret, printed when you run stripe listen locally.
- The live endpoint's secret, from the Dashboard in live mode.
Only the last one belongs in production. If your handler verifies signatures with the wrong one, every live event fails with a signature verification error and your app never hears about payments. That exact failure, and how to read the logs, is in "Stripe payment went through but your app did not update? Fix the webhook".
When you create the live endpoint, use the real domain, not a preview URL, and subscribe to exactly the events your code handles, typically checkout.session.completed, customer.subscription.updated, customer.subscription.deleted and invoice.payment_failed for a subscription app. Stripe's checklist also asks that your production endpoint handles delayed and duplicate events and does not depend on events arriving in order.
> Name your environment variables by mode, such as STRIPE_WEBHOOK_SECRET in both Preview and Production but with different values. Never reuse one value across both.
## What happens to my products and prices?
They do not exist in live mode until you create them there, and the live prices get new IDs that your code has to use.
Stripe's checklist states that test objects such as products, prices and coupons are not usable in live mode. You have two options. You can recreate each product in live mode by hand, or you can open a product in your sandbox and click "Copy to live mode" in the upper right, which copies the product and its prices. Stripe notes that each copy creates a separate live product, and later changes to the sandbox product do not carry over.
Either way, the live price IDs are new. Swap them in wherever your app references prices. The cleanest pattern is to keep price IDs in environment variables or look them up by a lookup key you set on each price, so the same code works in both modes without edits.
Do not forget the smaller objects: coupons, promotion codes, tax rates, shipping rates and payment links all need live versions if you use them.
## What do I need to set up for tax?
Decide whether you need to collect tax, and if you do, configure tax settings and registrations in live mode before the first sale; this is general information, not tax advice.
If you use Stripe Tax, set your origin address and product tax codes, and add registrations for the places where you are registered to collect. Stripe calculates tax only where you have added a registration, so a live account with no registrations collects nothing. If you set automatic tax on Checkout in code, confirm the live account has the settings it needs, or Checkout Session creation can fail.
If you are not using Stripe Tax, make sure any manual tax rates you created in test mode exist in live mode too. Whether you need to collect sales tax, VAT or GST depends on what you sell and where your customers are, so check with an accountant before launch rather than after your first quarter of sales.
## How do I set up the customer portal for live mode?
Open the customer portal settings while viewing live mode, choose what customers can change, add your terms and redirect link, and save.
The portal lets subscribers update cards, switch plans, cancel and see invoices without you building any of it. But its configuration is set per mode. If you only saved it in test mode, creating a live portal session can fail with an error telling you to save your customer portal settings in live mode first.
While you are there, check the settings that affect money:
- Switch plan and Update quantities are off by default. Turn on only what your pricing supports, and make sure the plans you offer in the portal are the live prices.
- Cancel subscription is on by default. Decide whether cancellation happens immediately or at the period end.
- Set the headline, terms of service link and default redirect link back to your app.
- Branding (logo, colors) lives under branding settings and applies to Checkout and emails too.
## What else should I check before taking real payments?
Check the API version, error handling, emails and redirect URLs, then make one real purchase with your own card and refund it.
Stripe's checklist covers the developer side: set or pin the API version so webhook payloads match what your code expects, test incomplete, invalid and duplicate data, and handle every error type, showing users a clear message for a declined card (card_error) without exposing backend errors. Also check:
- Success and cancel URLs for Checkout point at the production domain.
- Customer emails for receipts and failed payments are switched on in live mode, with your business name and support email in public business details.
- Your database distinguishes test and live customers. Test customer IDs stored in your users table will fail against live keys.
Then do the real test. Buy your cheapest plan on the live site with your own card. Confirm the webhook arrives with a 200 response in the live endpoint's event log, the user's plan updates in your database, the receipt email arrives and the portal opens. Then refund the payment from the Dashboard.
Here is an illustration with a made-up product: a $19 a month study planner built in Lovable. The founder swaps keys and launches. Checkout works, but subscriptions never activate. The cause: the live webhook endpoint exists, but STRIPE_WEBHOOK_SECRET in production still holds the CLI secret. One environment variable fixes it, but only a real purchase would have caught it before customers did.
For pricing pages with several tiers, check each tier separately. The pricing section on my own SaaS, SQWAD, below, shows three plans; on any page like this, every tier's button has to point at a live price, and testing only the cheapest one proves nothing about the others.
![SQWAD pricing tiers: Starter $99/month, Pro $399/month, Scale $999/month plus 1%, first month free](/shots/sqwad-home-s4.jpg)
## When should I get help with the switch?
Get help if live payments succeed but your app does not react, if you are not sure which secret is wrong, or if subscriptions and the portal need to work on day one.
Going live is mostly careful configuration, and many founders can do it with this list. Where it goes wrong, it tends to go wrong with real customers' money, which is a bad time to learn. I cover the subscription side in more depth in "Setting up Stripe subscriptions for a SaaS MVP: what you actually need".
My Quick Fix starts at $60 for one specific problem, such as a live webhook that is failing, in about two days. Fix Plus Features starts at $200 for up to three fixes plus one small feature. Finish and Launch starts at $600 for apps whose core already works, and taking payments live is one of the things it covers.
## The bottom line
Moving from Stripe test mode to live mode means replacing every key, registering a live webhook endpoint with its own signing secret, copying or recreating products so your code uses live price IDs, and configuring tax and the customer portal in live mode. Keep test keys in preview environments and live keys in production only. Then make one real purchase, watch the webhook land and the plan activate, and refund it before you tell anyone the app is open.`,
  },
];
