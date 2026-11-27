// AI-tool fix pages, generated batch 4 (Nov 27 2026).
import type { ToolFix } from '../landing';

export const toolFixesGen4: ToolFix[] = [
  {
    slug: 'antigravity',
    tool: 'Google Antigravity',
    h1: 'Fix the code Google Antigravity wrote and ship your project',
    metaTitle: 'Google Antigravity Code Fix: Finish & Ship Your Project | Thomas Osayi',
    description: 'Project built with Google Antigravity agents that half works, broke after a Turbo run or stalled at a quota limit? I review the code, fix it and ship it.',
    whatItBuilds: 'Google Antigravity is Google\'s agentic development platform, released in public preview in November 2025 and expanded at Google I/O 2026 into a desktop app, a CLI and an SDK. Agents plan and write code across the editor, the terminal and a browser, report their work as Artifacts such as task lists, plans, screenshots and browser recordings, and connect natively to Google AI Studio, Firebase and Android. It writes code in whatever stack your project uses, so the result is your own repo rather than a hosted app.',
    problems: [
      { title: 'Parallel agents that stepped on each other', text: 'Two agents edited the same files from different plans, so the build fails or features contradict each other. I untangle the changes and make the code consistent again.' },
      { title: 'Damage from a Turbo mode run', text: 'Antigravity\'s docs say the Turbo preset gives terminal commands unrestricted, full filesystem access. I recover what git can recover, repair the rest and set safer permissions.' },
      { title: 'Artifacts that look done but are not', text: 'A screenshot or browser recording shows the happy path working. I test the empty states, errors, signed-out users and real data the agent never tried.' },
      { title: 'Quota ran out mid-refactor', text: 'The agent stopped halfway through a change when the plan limit hit, leaving imports and types broken across files. I finish the change by hand.' },
      { title: 'Firebase or backend wired up loosely', text: 'Security rules left open, keys in client code and auth checks only in the UI. I lock down the data before real users arrive.' },
    ],
    process: ['Get access to the repo and your Antigravity project and permission settings', 'Run the build and tests and list everything that is broken', 'Fix the build, then security and data handling, then the remaining bugs', 'Deploy to your host and test the real user flows', 'Hand over a clean repo, safer agent settings and notes on what changed'],
    faqs: [
      { q: 'What is Google Antigravity?', a: 'Google Antigravity is Google\'s agentic development platform, where AI agents write, run and test code across an editor, a terminal and a browser, launched in public preview on November 20, 2025.' },
      { q: 'Does Antigravity host my app?', a: 'No. Antigravity writes code in your own project, and you deploy it to a host you choose, such as Firebase, Vercel or your own server.' },
      { q: 'Which Antigravity permission preset is safest?', a: 'Antigravity\'s docs list Request Review, Default, Auto and Turbo, and Default runs terminal commands in a sandbox limited to the workspace and temp folders, while Turbo is unrestricted with full filesystem access.' },
      { q: 'Why did my Antigravity agent stop working partway through a task?', a: 'Usually a quota limit. At the time of writing, Antigravity\'s plans page says free and Google AI Plus quotas refresh weekly, while Google AI Pro refreshes every five hours until a weekly limit is reached.' },
      { q: 'Can I keep using Antigravity after you fix my project?', a: 'Yes. I work in the same git repo, so you can keep prompting afterwards, ideally with a safer permission preset and a commit before each large task.' },
      { q: 'What does it cost to fix a project built with Antigravity?', a: 'Thomas Osayi fixes one bug from $60, handles up to three fixes plus a small feature from $200, and takes a project whose core features already work to launch from $600.' },
    ],
    guide: `## What is Google Antigravity, and what does it actually build?
Google Antigravity is an agentic development platform where AI agents plan, write, run and test code in your own project, so what it builds is a normal repo you deploy yourself.
Google released Antigravity in public preview on November 20, 2025. Its launch post describes two surfaces: an Editor view that works like an AI-assisted IDE, and a Manager surface for starting and watching several agents working at once. Agents act across the editor, the terminal and a browser, so an agent can write a feature, start the app and click through it. Instead of long logs, agents report their work as Artifacts: task lists, implementation plans, screenshots and browser recordings you can comment on.
At Google I/O in May 2026, Google expanded it into Antigravity 2.0 with a desktop app for running agents in parallel, a CLI and an SDK, plus native connections to Google AI Studio, Firebase and Android. Projects started in AI Studio can be brought into a local Antigravity setup.
That matters when something breaks. There is no hosted black box. There is a folder of code in whatever stack the agent chose or you asked for, usually with git history, and that is fixable.
## Why does my Antigravity project half work?
Because agents can each finish their own task without anyone checking that the pieces fit together, and the Artifacts show the path the agent tested rather than every path a user takes.
Running several agents in parallel is Antigravity's headline feature, and it is also where many messy projects come from. One agent restructures the data model while another builds a page against the old one. Each reports success with a tidy plan and a screenshot. The combined result fails to build, or builds and quietly shows the wrong data.
The fix is to stop adding features and read the code. Run the build and the type checker and start from the first error, not the last. Look at the git log to see which agent changed what and in which order. Then test the paths an agent rarely tries: a brand new user with no data, a signed-out visitor, a slow network, a form submitted twice, a phone screen.
> Give each agent its own clearly separated area of the code, and merge one agent's work before starting the next. Parallel agents are fastest when their files do not overlap.
## What happens if the agent ran in Turbo mode?
In Turbo mode, terminal commands run without asking and with full filesystem access, so a wrong command can change or delete files outside your project.
Antigravity's permission docs list four presets. Request Review prompts for every terminal command and limits file access to the workspace. Default runs commands in a sandbox limited to the workspace and temp folders, with no network access by default, and prompts for anything outside it. Auto also uses the sandbox but lets the agent judge which outside commands are risky enough to prompt. Turbo turns the sandbox off and is unrestricted.
That last setting is the one behind the worst stories. In December 2025, The Register reported a developer whose D drive was wiped while Antigravity was in Turbo mode, after the agent targeted the root of the drive instead of a project cache folder, and Google said it was investigating. Similar reports appear on Google's developer forum.
If something like this happened to you, stop the agent first, then see what git can restore and what your backups hold. Afterwards, set the preset to Default under Settings, General, Global Permissions, and add deny rules for destructive commands. For the CLI, rules live in a settings.json file under the antigravity-cli folder in your home directory.
## Is the code Antigravity wrote secure?
Not automatically, because an agent optimizing for a working demo rarely adds the checks that keep data private.
The audit is the same one I run on any AI-written project. Search the code for API keys and secrets that ended up in client code or committed files. Check every server route or function for an auth check that runs on the server, not just a hidden button in the UI. If the project uses Firebase, which Antigravity connects to natively, read the Firestore and Storage security rules, since rules left open during development are a common problem in Firebase projects. Finally, check the dependencies the agent added, remove the ones nothing uses and update the ones with known issues.
## What should I do when I hit a quota limit mid-project?
Commit what works, note exactly what the agent was doing, and avoid restarting a large change from scratch on a fresh quota.
At the time of writing, Antigravity's plans page says the free and Google AI Plus tiers get a quota refreshed weekly, Google AI Pro gets a higher quota refreshed every five hours until a weekly limit is reached, and Google AI Ultra has the highest limits. Pro and Ultra users can buy AI credits for extra usage, with a setting that decides whether credits are used automatically. The Register reported in March 2026 that users protested tighter effective limits, and that extra credits cost $25 for 2,500.
The practical risk is a change that stops halfway: renamed functions in half the files, a migration written but not applied. Before any big task, commit, so a stopped agent leaves you with a clean point to return to.
## Can I bring a project from Gemini CLI or Google AI Studio into Antigravity?
Yes, and Google points users in that direction, but test the move rather than assuming everything carries over.
Google ended consumer access to Gemini CLI on June 18, 2026 and suggested Antigravity CLI as the path forward, which the fix the code Gemini CLI wrote page covers in more detail. AI Studio projects can also be exported to a local Antigravity setup. In both cases, run the build and the full set of user flows after the move, because environment variables, project instructions and tool connections are the parts most likely to change.
## When is hiring a developer cheaper than more agent runs?
When the same bug survives several agent attempts, or each fix breaks something else, a developer reading the code directly is usually faster and cheaper.
A single bug in an otherwise working project is often a Quick Fix. Several broken flows plus one missing feature fit Fix Plus Features. A project whose core works but needs security, deployment and the last stretch of polish is what Finish and Launch is for.
## The bottom line
Antigravity gives you real code in your own repo, which means a stuck project is usually recoverable. Keep agents in separate parts of the code, commit before every large task, use the Default permission preset rather than Turbo, test the paths the Artifacts did not show, and lock down auth and data before launch. If you would rather hand it over, I can take the repo from where the agents left it.`,
  },
  {
    slug: 'manus',
    tool: 'Manus',
    h1: 'Fix your Manus website or app and get it ready for real customers',
    metaTitle: 'Manus Website Developer: Fix, Finish & Launch Your Manus App | Thomas Osayi',
    description: 'Built a site or app with Manus that keeps breaking, will not take payments or eats credits on fixes? I fix the code, secure logins and data, and launch it on your domain.',
    whatItBuilds: 'Manus, which its site now says is part of Meta, builds full-stack websites and web apps from prompts, with a managed backend, database and file storage, email and password login with role-based access, Stripe payments, hosting that Manus runs on Google Cloud Run, custom domains with free SSL, and mobile builds for TestFlight and Google Play testing. Its docs do not name the framework or database engine, but you can download the full codebase or sync it to a private GitHub repo.',
    problems: [
      { title: 'Each fix breaks something that worked', text: 'Some reviewers describe credits spent on errors the builder introduced and projects breaking during changes. I read the code directly and fix the cause once.' },
      { title: 'Payments that work in testing but not for real', text: 'Manus sets up a claimable Stripe sandbox, and nothing is live until it is claimed and verified. I take payments live and test the webhooks end to end.' },
      { title: 'Admin pages protected only by a redirect', text: 'Sending non-admins to the home page is not the same as protecting the data. I check that every backend route enforces the role, not just the page.' },
      { title: 'GitHub sync that stopped working', text: 'Renaming the repo or changing its owner breaks the connection, and sync covers only the main branch. I reconnect it and set up a workflow that will not fight Manus.' },
      { title: 'Site offline after the hosting balance ran out', text: 'Manus bills hosting by usage, and its docs say a site may become temporarily unavailable when the balance runs out without auto top-up. I get it back up and plan the hosting.' },
    ],
    process: ['Get access to the Manus project, a code download or the GitHub repo', 'Reproduce every issue on the published site and a real phone', 'Fix security and logins first, then payments, data and the remaining bugs', 'Publish on your custom domain or move to your own host if that is the better path', 'Hand over the code, notes on what changed and how to keep building'],
    faqs: [
      { q: 'What does the Manus website builder create?', a: 'Manus builds full-stack web apps with a managed backend, database, file storage, login with roles and Stripe payments, hosted by Manus with custom domain support, and it can package mobile builds for TestFlight and Google Play testing.' },
      { q: 'Can I export my code from Manus?', a: 'Yes. Manus\'s docs say you can download the entire codebase at any time, or export the project to a new private GitHub repository with two-way sync on the main branch.' },
      { q: 'Why does Manus say "GitHub authorization failed"?', a: 'Manus\'s docs say it cannot sync with a repository it did not create through its own export, and recommend disconnecting and reconnecting GitHub in the project settings when authorization fails.' },
      { q: 'How do I take Stripe payments live on a Manus site?', a: 'Manus first creates a claimable Stripe sandbox for testing, and you go live by claiming it, which means creating your Stripe account and completing verification, after which Manus moves the configuration over.' },
      { q: 'How is Manus hosting billed?', a: 'At the time of writing, Manus\'s docs say building uses credits, while hosting is billed by usage, with free monthly allowances of $10 for cloud, $1 for AI and $1 for API usage.' },
      { q: 'What does it cost to fix a Manus app?', a: 'Thomas Osayi fixes one bug from $60, handles up to three fixes plus a small feature from $200, and takes a Manus app whose core already works to launch from $600.' },
    ],
    guide: `## What does Manus actually build?
Manus builds full-stack websites and web apps from prompts, with a backend, database, file storage, logins, payments and hosting all managed inside Manus.
Manus started as a general AI agent and added a website and app builder. Meta announced it was acquiring the company at the end of December 2025, and the Manus site now says it is part of Meta. Its docs describe what a project includes: an integrated database, secure file storage, a login system with email and password plus role-based permissions, Stripe payments, scheduled tasks, analytics and SEO tools. Publishing deploys the app on infrastructure Manus runs, by default an autoscaling setup on Google Cloud Run in the US region, and custom domains get a free SSL certificate once the DNS records are in place. For mobile, Manus can package builds for TestFlight and Google Play testing tracks.
One thing the docs do not say is which framework or database engine your project uses. That is the first thing I find out on any Manus job, by downloading the code and reading it, because every fix depends on it.
Search is handled for you as well. Manus's SEO docs say it serves a prerendered, static HTML version of the site to search engine bots while visitors get the dynamic version, and that it maintains sitemaps, canonical URLs and robots.txt automatically. That is a reasonable default, but it is worth checking that your important pages actually appear in the prerendered version, that each has its own title and description, and that the sitemap is submitted in Google Search Console.
## Why does my Manus site keep breaking when I ask for changes?
Because each prompt changes code the builder cannot fully see the consequences of, so a fix in one place can quietly break another, and every attempt costs credits.
This is the most common complaint about any AI builder, and Manus reviewers raise it too. On Trustpilot, many reviews describe credits used up by errors the platform introduced, builds that failed and still consumed credits, projects breaking during changes and support that felt automated. Reviews are not a full picture, but they match what people bring to me.
Once you are in that loop, more prompting usually costs more than it saves. Open the published site in a browser, check the console and network tabs, and find the first error. Most loops come from one root cause, such as a field the page expects that the database does not have, or a request that fails because the user is not signed in.
> Before you send another fix prompt, write down what you clicked, what you expected and what happened. If you cannot describe the bug in two sentences, the builder will struggle too.
## How do I get my code out of Manus?
Download the whole codebase from the code view, or export the project to a private GitHub repository that stays in sync.
Manus's Code Control docs say you can download the entire codebase, frontend and backend, at any time, and move it to your own hosting or a CI pipeline. The GitHub integration creates a new private repository in your account and keeps a two-way sync: Manus pushes its changes to the main branch and pulls the latest main before making new edits. The docs also list the catches. Renaming the repository or changing its owner breaks the connection, sync covers only the main branch, and Manus cannot sync with a repository it did not create, which shows up as "GitHub authorization failed". Disconnecting and reconnecting GitHub in project settings is the documented fix.
That gives you two real options. Keep building in Manus and let a developer make changes through the synced repo, or move the app to your own host when Manus's managed setup no longer fits. Moving is a real project, because the database, file storage, login and environment settings all have to be set up again.
## Why are payments not working on my Manus site?
Most often because the Stripe setup is still the testing sandbox, or a webhook is not reaching the app after checkout.
Manus's payments docs say that when you add payments, it creates a claimable Stripe sandbox: a temporary Stripe account with no signup that mirrors live mode so you can test checkout and subscriptions without real money. It sets up the products, prices and webhooks for you. To take real payments, you claim the sandbox, which means creating your permanent Stripe account and completing verification, and Manus moves the configuration over.
When a customer pays and the app does not unlock anything, I check three things: that the sandbox was actually claimed, that the webhook endpoint in Stripe points at the published domain and returns success, and that the code updates the right user record when the event arrives, including when Stripe sends the same event twice.
## Is my Manus app's login and data secure?
The built-in login is a good start, but you still need to confirm that every backend route checks who is asking, not just every page.
Manus's access control docs describe email and password login, a dashboard for managing users, and role-based restrictions, with an example that limits the admin page to users with an Admin role and redirects everyone else to the home page. A redirect hides a page. It does not protect the data behind it. If the API that feeds the admin page answers anyone who calls it, the data is exposed even though the page is not.
So for each backend route I ask whether it requires a signed-in user, whether it checks the role on the server and whether it returns only the rows that user may see. I also search the code for API keys pasted in during a long prompting session, since Manus has a proper place for third-party keys.
## What does Manus hosting cost, and why did my site go offline?
At the time of writing, Manus bills building with credits and hosting by usage, and its docs say a site may become temporarily unavailable when the hosting balance runs out without auto top-up.
Every account gets free monthly allowances of $10 for cloud, $1 for AI and $1 for API usage, which the docs say should cover most projects until real traffic arrives. Usage beyond that is charged at standard rates from a balance you manage in the usage and billing dashboard. If your site went dark, check that balance first and turn on auto top-up. If hosting costs are growing, that is the point to compare staying on Manus with moving the downloaded code to a host you control.
## The bottom line
Manus gives you real frontend and backend code, a managed database and hosting, which means a stuck project is usually fixable. Find the first error, claim and test Stripe properly, protect the data behind every route, keep your GitHub sync intact and watch the hosting balance. If you would rather hand it over, a single bug is often a Quick Fix, and an app whose core already works is what Finish and Launch is for.`,
  },
];
