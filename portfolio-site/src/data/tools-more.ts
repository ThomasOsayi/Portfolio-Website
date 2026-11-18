// AI-tool fix pages added Nov 17 2026 (batch 2).
import type { ToolFix } from './landing';

export const moreToolFixes: ToolFix[] = [
  {
    slug: 'windsurf',
    tool: 'Windsurf',
    h1: 'Fix and ship the app you built with Windsurf',
    metaTitle: 'Windsurf Developer: Fix & Deploy Your Windsurf Project | Thomas Osayi',
    description: 'Built your app with Windsurf and Cascade but stuck on bugs, auth, payments or deployment? I review the code, fix what is broken and ship it to production.',
    whatItBuilds: 'Windsurf is an AI code editor whose Cascade agent writes and edits files across your whole project. It works on any stack, but most projects I see are Next.js or React apps with Firebase, Supabase or Postgres.',
    problems: [
      { title: 'Agent edits that drift across files', text: 'Cascade changes several files per request. Over time that leaves duplicate helpers, unused code and two versions of the same logic that disagree.' },
      { title: 'Builds that pass locally and fail on deploy', text: 'Type errors, missing environment variables and server-only code imported into client components only show up in a production build.' },
      { title: 'Security nobody checked', text: 'API routes without auth checks, open database rules and secrets committed to the repo.' },
      { title: 'Tests that were never written', text: 'Without tests, each new agent run can silently break an older feature. A few tests around the critical flows stop that.' },
      { title: 'No clear deploy setup', text: 'Preview and production environments mixed together, with no reliable way to ship a change.' },
    ],
    process: ['Get access to the repo and hosting accounts', 'Run a production build and list every error and risk', 'Fix security and broken flows first', 'Clean up duplicated code so future agent runs stay on track', 'Deploy, test real flows and hand over notes'],
    guide: `## What is different about a codebase built with Cascade?
Cascade works as an agent across the whole project: one request can read a dozen files, edit six, install a package and run a command in the terminal. That reach is why it is fast, and it is also why the problems it leaves are spread across files instead of sitting in one.
In a Cascade-built repository, features tend to work when tried one at a time. The trouble is at the joins:
- A helper was rewritten in a new file while the old one stayed, and half the app still imports the old one.
- A type was changed in one place and patched over in the places that broke.
- A package was installed for one approach, the approach was abandoned, and the package stayed.
- A database field was renamed in the code but not in the data that already exists.
None of it is visible in the editor while each request appears to succeed. It becomes visible in two places: the production build, and the first time two features are used together by a real user.

## What do the production build errors mean?
Each one names a specific mistake, and in a Next.js project most of them are about the line between code that runs on the server and code that runs in the browser.
### Module not found: Can't resolve 'fs'
A file meant for the server, often a database client or an admin SDK, has been imported into a component that runs in the browser. Somewhere in the import chain a client component pulls in a server helper. The fix is to move the call behind a server action or API route, not to install a package that fakes the missing module.
### Failed to compile, followed by Type error
The development server does not stop for type errors. The production build does. The message gives the file and line, and it usually traces back to a shared type that changed during a multi-file edit.
### Firebase: Error (auth/invalid-api-key)
The Firebase config values are missing on the host. They exist in your local env file, which is not in the repository. Add them in the host's environment settings and rebuild.
### useSearchParams() should be wrapped in a suspense boundary
A page reads the query string while Next.js is trying to prerender it. The component that reads it needs to be wrapped, or the page marked as dynamic.
### A route could not be rendered statically because it used cookies
A page that depends on the signed-in user is being treated as a static page. It needs to be rendered per request.
### The database client fails only on the host
With Prisma, the client has to be generated during the build. Locally it was generated once and kept. On the host it has to be part of the build or install step.

## What did the agent run in my terminal?
More than most people realize, and it is worth reconstructing before launch. Cascade can run commands itself, and with automatic execution turned on it does so without asking each time.
Three kinds of command leave lasting effects:
- Installs. Every package the agent tried is in package.json unless someone removed it. Unused ones slow installs and widen the surface for security issues.
- Database changes. Schema pushes and migrations run against whatever database the local env file pointed to. If that was the only database, it is also your production data, and there may be no migration files recording what changed.
- Git operations. Commits made in bulk with generic messages, or files added that should have been ignored, including env files.
What I check: that the schema in the code matches the actual database, that migrations exist and replay cleanly on an empty database, and that the ignore file covers env files, build output and local tool folders.
> For anything that touches the database or deletes files, keep command approval on. Reading a command before it runs takes seconds, and undoing a dropped table can take days.

## Is an app built this way secure?
Not until someone has checked, because an agent builds what was asked for, and nobody asks for the refusal cases. The checks are the same on every project.
- API routes. Each one should identify the caller and confirm they may touch the specific record. A route that takes a user ID from the request body and trusts it is an open door.
- Database rules. With Firebase or Supabase the browser talks to the database directly, so the rules are the security. Rules that only check that someone is signed in let every user read every other user's data.
- Secrets in the repository. Search the git history, not only the current files. A key that was committed and later deleted is still in the history, so it has to be rotated at the provider.
- Client-exposed values. In Next.js anything prefixed NEXT_PUBLIC_ is shipped to the browser. Secret keys with that prefix are public.
- Webhooks. Stripe events must be verified with the signing secret before they change anything.
I fix these before anything else, since a launch with a clean interface and an open database is worse than a late launch.

## How should preview and production be set up?
As two environments that share code and nothing else. Mixing them is how a test signup ends up emailing real customers or a test payment ends up in live data.
- Two database projects, one for development and previews, one for production, each with its own keys.
- Environment values set per environment on the host, so preview builds get test keys and production gets live ones.
- Stripe in test mode everywhere except production, with a separate webhook endpoint and signing secret for each.
- Auth providers listing both the preview and production addresses as allowed domains.
- Production deploys only from the main branch, and every other branch getting its own preview address.
With that in place, shipping a change is a routine: push a branch, open the preview, check it, merge. If something goes wrong after the merge, the host can put the previous deployment back in front of users quickly.

## How do I keep Cascade on track afterwards?
Put the project's conventions where the agent reads them on every request, and stop relying on what it happens to remember.
- Rules. Windsurf reads rule files kept in the project, in a rules folder inside the .windsurf directory, with a single .windsurfrules file as the older form. Keep them short and specific: where database access lives, which helpers to reuse, what must never be imported into client components.
- Memories. Cascade can save memories as it works. They are useful, but they live with your local workspace and not in the repository, so they do not travel to another machine or developer, and an old one can keep steering the agent toward a pattern you have removed. Review them after a cleanup.
- Workflows. Repeated tasks, such as running the build and tests before a commit, can be saved as a workflow and called by name.
- Scope. Ask for one change, name the files involved, and review the list of edited files before accepting.
A cleaned-up codebase does much of this work on its own. When there is one obvious place for each thing, the agent finds it and uses it.

## What does the work cost, and do I need to switch tools?
No tool switch is needed. The repository is ordinary code, and the same fixes apply whether it was written in Windsurf, in another AI editor or by hand.
- Quick Fix, from $60, 2 days: one build error or one broken flow.
- Fix Plus Features, from $200, 5 days: the build made clean, duplicates removed in one area, and a feature or integration added.
- Finish and Launch, from $600, 10 days: security review, environments, tests on the critical flows and a production deploy.
Running costs after launch are paid by you directly to the host, the database provider and Stripe, on accounts in your name.

## The bottom line
Cascade writes across files quickly, and the cost of that speed collects in the joins: duplicates, drifting types, commands nobody recorded and environments nobody separated. A production build, a security pass and a proper preview and production setup turn the project into something you can ship and keep editing with the agent.`,
    faqs: [
      { q: 'Can I keep using Windsurf after you fix it?', a: 'Yes. A cleaner codebase actually makes the agent more reliable, because it has one clear place to change each thing.' },
      { q: 'Do you need my Windsurf account?', a: 'No. Access to the Git repository and the hosting and database accounts is enough.' },
      { q: 'What does a fix cost?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
      { q: 'Why does my build say it cannot resolve fs?', a: 'A server-only file, usually a database client, is being imported into a component that runs in the browser. The call needs to move behind a server route or server action.' },
      { q: 'A secret was committed to my repo. Is deleting the file enough?', a: 'No. The key stays in the git history, so it has to be rotated at the provider.' },
      { q: 'Do Cascade memories travel with the project?', a: 'No, they stay with your local workspace. Conventions that should travel with the code belong in rule files inside the repository.' },
    ],
  },
  {
    slug: 'claude-code',
    tool: 'Claude Code',
    h1: 'Finish and launch the app you started with Claude Code',
    metaTitle: 'Claude Code Project Help: Fix, Review & Deploy | Thomas Osayi',
    description: 'Started an app with Claude Code and need a developer to review it, fix what is stuck and get it into production? I take over the repo and ship it.',
    whatItBuilds: 'Claude Code is an agentic coding tool from Anthropic that works directly in your repository from the terminal or editor, reading files, running commands and making changes across the codebase.',
    problems: [
      { title: 'A big codebase you have not fully read', text: 'The agent can write a lot of code quickly. Before launch, someone has to read the critical paths: auth, payments and anything that touches user data.' },
      { title: 'Production configuration', text: 'Environment variables, database migrations, webhooks and domains that work locally but were never set up for production.' },
      { title: 'Edge cases and error handling', text: 'Happy paths work; failed payments, expired sessions and slow networks do not.' },
      { title: 'Architecture decisions that need a human call', text: 'Which database, how to model roles, what to cut from version one. These are product decisions, not prompts.' },
      { title: 'Deploys that need a pipeline', text: 'Setting up previews, production deploys and rollbacks so shipping is routine.' },
    ],
    process: ['Get access to the repo and accounts', 'Review the critical paths and list risks by severity', 'Fix security, payments and broken flows', 'Set up production config and deploy', 'Write a short handover so you can keep building with the agent'],
    guide: `## What does a human review of agent-written code actually cover?
It covers the paths where a mistake costs money or exposes data, read line by line, and it deliberately skips most of the rest. A repository that Claude Code produced over a few weeks can be tens of thousands of lines. Reading all of it with equal care is slow and not the point.
I start by tracing four things from the browser to the database and back:
- Sign-up and login, including password reset and what happens with an expired session
- Every place money moves: checkout, webhooks, refunds, plan changes
- Every read or write of data that belongs to a user, checked for whether the server confirms who is asking
- Anything that sends on your behalf: email, SMS, calls to paid APIs
For each one the question is the same: what does the server do when the request is wrong, repeated, out of order or from the wrong person? Agent-written code is usually solid on the request that arrives as expected.
The output is a list sorted by severity, with file and line references. You see what has to be fixed before launch, what can wait, and what is fine as it stands, before any fixing starts.

## Why do the tests pass while the app still breaks?
Because the same agent wrote the code and the tests, and tests written to confirm an implementation tend to agree with it. A green test run tells you the code does what the code does.
Things I look for in an agent-written test suite:
- Mocks that replace the part under test. A payment test that mocks the Stripe client and then checks that the mock was called has tested nothing about Stripe.
- Assertions that were loosened. When a test failed during a session, the fix was sometimes to change the expectation instead of the code. The git history shows it.
- Skipped tests. Marked as skipped during a refactor and never turned back on.
- No failure cases. Tests for the declined card, the duplicate webhook and the second user are simply absent.
The same caution applies to summaries. An agent reporting that a feature is complete and all tests pass is describing its own session. It is worth searching the code for TODO comments, placeholder returns and functions that log a message where the real work should be, because a stub can sit behind a finished-looking screen.
A few end-to-end tests that drive a real browser against a real test database are worth more than a large suite of mocked unit tests, and they are the ones I add.

## What production setup is usually missing?
Everything that lives outside the repository. The agent works in your files and your terminal, so the code can be complete while the accounts around it are still in their default state.
### Database
Schema changes pushed straight to the development database leave no migration history. Production needs migration files that can be applied in order, a backup schedule and a database that is not the one on your machine.
### Stripe
Live mode has its own keys, its own products and prices, and its own webhook endpoint and signing secret. Nothing configured in test mode carries over on its own.
### Email
Sending from your own domain requires DNS records that prove you own it. Until they are added, messages tend to land in spam, or the provider only delivers to your own address.
### Sign-in providers
Google and other OAuth providers need the production address registered, and a Google app left in testing mode only lets in the accounts on its test list.
### Environment values and domain
Every value from the local env file has to exist on the host, with production values. The domain, the redirect between the bare and www forms, and HTTPS all need to be confirmed.
### Scheduled work
Anything that ran because your dev server was running, such as a reminder loop, needs a real scheduler.

## Which decisions should not be left to the agent?
The ones whose answer depends on your business and not on the code. Claude Code will pick, and it will pick something reasonable, but it does not know what you will need in six months.
- The database. The shape of the data should decide. I built SQWAD on Firebase because creator portals need realtime updates, and chose Postgres for TheHoopGang portal because its data is relational.
- Roles. Who can see what is a product rule. It has to be written down in plain language first, then enforced on the server, then tested once per role.
- What to cut. Agents make adding features cheap, so version one grows. Every extra feature is more surface to secure and test before launch.
- What to buy. Auth, payments, email and file storage are solved by providers. An agent asked to build its own version will do it, and you will own the upkeep.
- Money rules. Refunds, trials and what happens when a payment fails are policies. The code can only implement the one you choose.
Once these are decided, the agent is very good at carrying them out.

## How do I keep using Claude Code safely afterwards?
By giving it written context, limits on what it can run, and a pipeline that checks its work, so safety does not depend on you catching things by eye.
- A CLAUDE.md file in the repository. Claude Code reads it at the start of a session. It should state the stack, the commands for build and test, where things live, and the rules that must hold, such as every server route checking the user.
- Plan first. For anything larger than a small fix, have it propose a plan before it edits, and read the plan.
- Permissions. Keep approval on for commands that touch the database, deployment or git history. Skipping all permission prompts is for throwaway environments, not for a machine with production credentials on it.
- Branches and previews. Each task on its own branch, with a preview deployment to click through before merging.
- Checks on every push. Type check, lint and the end-to-end tests run automatically, and a failing check blocks the merge.
- No production secrets on the development machine. The agent can read what your terminal can read.
> Ask the agent to write the failing test before the fix, and look at the test yourself. It is a short read, and it tells you whether the agent understood the bug.

## Do I need a developer at all?
Not always. If the app is for your own use, holds no customer data and takes no payments, a careful pass with the agent and the checks above may be enough.
A developer is worth paying for when any of these is true:
- Other people's personal data or money goes through the app.
- You cannot explain how a user is prevented from reading another user's records.
- Deploys are manual and you are not sure what is running in production.
- The same bug has come back more than twice.
Before hiring anyone for this, ask what they will read first, whether you get the list of findings before the fixes, and whether all accounts stay in your name. Good answers are specific.

## Which package fits?
It depends on whether you need one thing fixed or the whole path to production cleared.
- Quick Fix, from $60, 2 days: one bug or failing deploy, fixed and explained.
- Fix Plus Features, from $200, 5 days: several fixes plus a feature or integration, such as working Stripe webhooks.
- Finish and Launch, from $600, 10 days: the review, the launch-blocking fixes, production configuration and a deploy.
The handover is a short document: what changed, what was left and why, and the project instructions the agent should keep following.

## The bottom line
Claude Code can build most of an app. What it cannot do is decide what your business needs, configure accounts it cannot see, or vouch for its own work. A human review of the critical paths, real tests on the money flows and a pipeline that checks every change close that gap, and they let you keep building with the agent afterwards.`,
    faqs: [
      { q: 'Will you rewrite what the agent built?', a: 'No. I keep what works and fix what does not. Most agent-built code is a good starting point.' },
      { q: 'Can you set it up so I keep using Claude Code safely?', a: 'Yes. Clear project instructions, tests around critical flows and a preview deploy for every change make agent work much safer.' },
      { q: 'Which stacks do you work with?', a: 'Mainly Next.js, React, TypeScript, Firebase, Supabase and Postgres, plus Stripe for payments.' },
      { q: 'The agent says all tests pass. Is that enough to launch?', a: 'Not on its own, because the agent wrote both the code and the tests. I read the critical paths by hand and add end-to-end tests for the flows that involve money and user data.' },
      { q: 'What do I get from the review?', a: 'A list of findings sorted by severity with file references, so you can see what blocks launch before any fixing starts.' },
      { q: 'What does it cost?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
    ],
  },
  {
    slug: 'base44',
    tool: 'Base44',
    h1: 'Get your Base44 app past the prototype stage',
    metaTitle: 'Base44 App Developer: Fix, Extend or Migrate Your App | Thomas Osayi',
    description: 'Hit the limits of your Base44 app? I fix what is broken, add features the builder cannot, or move the app to a Next.js codebase you fully own.',
    whatItBuilds: 'Base44 is an AI app builder that generates apps together with a hosted backend for data, users and logins, so an app can work without setting up a separate database or auth provider.',
    problems: [
      { title: 'Features the builder cannot express', text: 'Complex permissions, custom integrations or unusual workflows that the prompt keeps getting wrong.' },
      { title: 'Data rules that are too open', text: 'Records visible to users who should not see them. Access rules need to be checked entity by entity.' },
      { title: 'Growing past the platform', text: 'When you need full code ownership, a specific database or hosting on your own accounts, the app has to move to a standard stack.' },
      { title: 'Payments and external services', text: 'Stripe, email, analytics and third-party APIs connected only partly or not reliably.' },
      { title: 'Performance with real data', text: 'Pages that were fast with test data slow down when real users add thousands of records.' },
    ],
    process: ['Review the app and how its data is structured', 'Decide together: fix in place or migrate', 'Fix access rules and broken flows, or rebuild on Next.js', 'Move data and users if migrating', 'Launch on your domain and hand over'],
    guide: `## How does a Base44 app work underneath?
A Base44 app is a generated frontend sitting on a backend that Base44 runs for you. The screens are yours to reshape by prompt. The database, the user accounts and the logins live on the platform and are reached through its own tools.
That arrangement is the reason an app can exist an hour after the first prompt, with sign-in and saved data and nothing to configure. It also explains the limits you later run into:
- Your data is organized into entities, the platform's word for tables, each with fields and access settings.
- Users sign up and log in through the platform's auth, so you never see or store a password.
- Built-in integrations cover common needs such as sending email, uploading files and calling an AI model.
- Hosting, the web address and updates are handled for you.
What you gain in speed you give up in reach. You do not get to open the database with a standard tool, run your own queries against it or put the backend on your own account. For many internal tools and early products that is a fair trade. It starts to pinch when the app has paying customers and rules the builder was not designed for.

## How do I check whether my app's data is exposed?
Test it as two different users and as a visitor who is not logged in, one entity at a time. The builder shows you the app as its owner, and the owner can see everything.
A workable check takes about an hour:
- Write down every entity and, next to each, who should be able to create, read, change and delete its records.
- Create two ordinary test accounts with no admin rights.
- As the first user, create records. As the second, look for them in lists, in search and by opening a direct link to a record.
- Log out and try the same links.
- Open each entity's access settings and compare them with what you wrote down.
The finding to look for is a list screen that filters records to the current user while the entity itself allows any signed-in user to read all of them. The screen looks private. The data is not, because a filter on a page is a display choice and the access setting is the rule.
Check the app's overall visibility too. An app meant for invited staff should require login and should not allow open sign-up.
> Decide who may see each kind of record in plain sentences before prompting for a fix. A prompt that says make it secure gives the builder nothing to enforce.

## What can be fixed without leaving Base44?
Most of what goes wrong in the first months. Leaving is a larger decision than it looks, so it is worth exhausting the cheaper fixes first.
Fixable in place:
- Access settings on entities, and app visibility
- Screens that broke after a long chain of prompts, by going back to a working version and rebuilding one change at a time
- Slow pages caused by loading every record at once, by adding paging, narrower filters and limits on lists
- Data that grew messy, by cleaning up entities, removing duplicate fields and fixing relationships between records
- Standard integrations that were only half connected
Hard or impossible in place:
- Permission models with several roles, teams and exceptions per record
- Integrations that need a long-running server process, a queue or precise control over retries
- Heavy reporting across many entities
- Customer or compliance requirements that name where data is hosted and who can reach it
- Search rankings for public pages, where full control over how pages are rendered matters
Custom integrations are a typical reason for outgrowing a builder. FieldOps, a job scheduling app I built for field teams, syncs with Outlook Calendar. An integration of that kind depends on server code that stores access tokens safely, refreshes them, and copes with an event being changed after it was synced.
![FieldOps, a job scheduling app I built for field teams, with Outlook Calendar sync.](/work/fieldops.jpg)

## Can I export my Base44 app and host it myself?
Partly, and the part that does not come with you is the important one. What your plan lets you export is worth checking in the current Base44 settings, since platform features change.
The general shape is that the frontend code can leave while the backend stays. Exported screens still call Base44 for data and logins, so the export on its own is a copy of the interface that keeps depending on the platform. It is useful as a reference for a rebuild and for reading how the app was put together. It is not a migration.
The data is a separate question. Records can normally be taken out entity by entity as files. That gives you the content of the database but not its access rules, its relationships as enforced constraints, or the user passwords.
So a realistic plan treats a move as a rebuild of the backend with the existing design and data carried over, not as a transfer.

## How does a migration to your own stack work?
In stages, with the old app left running until the new one has been tested with real data. I normally rebuild on Next.js with Firebase or Postgres, on accounts you own.
- Inventory. Every entity, field, screen, role, automation and integration is listed. Things nobody uses are dropped here, which shortens everything after.
- Data model. Entities become tables or collections, with relationships and access rules written explicitly.
- Backend. Auth, the rules for who can read what, and server code for payments and integrations.
- Interface. The existing screens are rebuilt to match, using the export and the live app as the reference, so users do not have to relearn the product.
- Trial import. Data is exported, loaded into the new database and checked: counts per entity, a sample of records compared by hand, files and images opening correctly.
- Users. Accounts are recreated by email address. Passwords generally cannot be carried out of a hosted login system, so each user sets a new one through a reset link or signs in with an emailed link the first time.
- Cutover. Changes are frozen on the old app for a short window, the final import runs, and the domain is pointed at the new one.
The old app stays available for a while afterwards as a safety net.

## Should I fix in place or migrate?
Fix in place unless you can name the specific thing the platform prevents. A migration costs more, takes longer and brings running costs and responsibilities the platform currently absorbs.
Signs that fixing in place is right:
- The app is an internal tool or has a small, known group of users.
- The problems are wrong access settings, broken screens or slow lists.
- Nobody has asked where the data is hosted.
Signs that it is time to move:
- A customer, investor or regulator needs you to own the code and the database.
- A feature you have sold cannot be built on the platform, after a real attempt.
- The platform cost at your usage is higher than running your own stack would be.
On my side, fixes in place fit the fix packages: Quick Fix from $60 in 2 days, Fix Plus Features from $200 in 5 days, and Finish and Launch from $600 in 10 days for getting an app onto its domain with access checked and payments working. A rebuild is a different size of job. It is priced like a new product, where the SaaS MVP package starts at $1,200 over 21 days and the Full SaaS Platform package, for multi-role apps, starts at $3,000 over 45 days.
After a move you pay for hosting, the database and email directly, and someone has to keep the dependencies updated. Those costs start small, but they are no longer included in a subscription.

## The bottom line
Base44 is a good way to find out whether an app is worth building. Past that point, check access entity by entity, fix what can be fixed where it is, and move only for a reason you can state in one sentence. If you do move, plan for a backend rebuild with the design and data carried across, and tell your users in advance that they will set a new password.`,
    faqs: [
      { q: 'Do I have to leave Base44?', a: 'No. Many apps only need fixes and better rules. Migration makes sense when you need code ownership or features the platform cannot support.' },
      { q: 'What do you migrate to?', a: 'Usually Next.js with Firebase or Postgres, hosted on your own accounts.' },
      { q: 'Will my users lose their data?', a: 'No. A migration includes moving records and accounts, and testing before anyone is switched over.' },
      { q: 'Can I export my Base44 app and host it myself?', a: 'What you can export depends on your plan, and an exported frontend still relies on the Base44 backend for data and logins. Leaving the platform means rebuilding the backend and importing the data.' },
      { q: 'Will users need new passwords after a migration?', a: 'Usually yes. Passwords generally cannot be exported from a hosted login system, so each user sets a new one through a reset link.' },
      { q: 'What does it cost?', a: 'Fixes in place start at $60 and getting an app launch-ready starts at $600. A rebuild on your own stack is priced like a new build, with the SaaS MVP package from $1,200.' },
    ],
  },
  {
    slug: 'chatgpt',
    tool: 'ChatGPT',
    h1: 'Turn code from ChatGPT into a working, deployed app',
    metaTitle: 'Fix Code Written by ChatGPT: Debug & Deploy Your App | Thomas Osayi',
    description: 'Built your app by pasting code from ChatGPT and now it will not run, deploy or scale? I connect the pieces, fix the errors and launch it properly.',
    whatItBuilds: 'ChatGPT writes code one answer at a time without seeing your whole project, so apps assembled from chat answers often mix versions, libraries and patterns that do not fit together.',
    problems: [
      { title: 'Snippets that do not fit together', text: 'Each answer assumes a slightly different setup, so imports, versions and file structures conflict.' },
      { title: 'Outdated APIs', text: 'Code written against older versions of a framework or library that no longer work the same way.' },
      { title: 'Secrets in the wrong place', text: 'API keys hard-coded into frontend files where anyone can read them.' },
      { title: 'No structure', text: 'One giant file, or logic copied into many places, which makes every change risky.' },
      { title: 'Never deployed', text: 'The app runs on your laptop but has never been built for production or put on a real domain.' },
    ],
    process: ['Collect the code into one repository', 'Get it running and list every error', 'Restructure into a clean project on current versions', 'Move secrets server-side and fix security', 'Deploy to your domain and explain what changed'],
    guide: `## Why does each answer work but the app does not?
Because every answer was written for a project that exists only in that answer. ChatGPT sees what you paste, not your folder, so it fills the gaps with assumptions, and the assumptions change from one reply to the next.
Ask for a login page and it assumes a framework, a folder layout, a styling method and a version of each library. Ask for a payments page the next day in a new thread and it assumes again, differently. Each piece is internally consistent. Together they are parts from different machines.
The mismatches fall into a few families:
- Two module systems. Some files use import, others use require, and the project is configured for only one.
- Two frameworks in one. Plain React with a client-side router in one answer, Next.js pages in another.
- Two eras of the same library. The syntax from an older major version next to the syntax from the current one.
- Files that were never written. An answer imports a helper or config file that it described in passing but did not include.
- Edits that dropped code. A reply showed only the changed part, with a comment standing in for the rest, and the whole file was replaced with it.
None of this means the logic is wrong. It means nobody has yet decided what the one real project is.

## What do the error messages mean?
Most of them are version messages in disguise. The code was written for a release of a library that is not the one installed.
### Cannot use import statement outside a module
The file uses modern import syntax in a project set up for the older require style. The mirror image is an error saying require is not defined. The project needs one module system, set in package.json, and every file brought in line.
### Switch is not exported from react-router-dom
The answer used React Router version 5 syntax and version 6 or later is installed, where Switch became Routes and routes are declared differently.
### firebase.auth is not a function
The older namespaced Firebase style is being used with the newer modular SDK, where each function is imported by name.
### openai.ChatCompletion is no longer supported, or Configuration is not a constructor
The OpenAI library changed its interface in a major release. Python and JavaScript code written in the old style fails with one of these.
### getServerSideProps is not supported in app
Next.js has two routers. Code for the older pages folder was pasted into the newer app folder, where data is fetched differently.
### Styles are missing after setting up Tailwind
The setup steps were for a different major version. Version 3 uses a config file and three directives in the stylesheet. Version 4 is set up with a single import in CSS. Following one set of steps on the other version tends to give a page with no styling.
### Blocked by CORS policy
The browser refused a call to another site's API. This is usually a sign the call should not be made from the browser at all, which is the next section.

## Where do the API keys belong?
On a server, never in a file the browser downloads. Chat answers often put the key at the top of the script because it is the shortest way to show working code, and that habit is the most expensive mistake in pasted-together apps.
Anything in a frontend file can be read by anyone who opens the browser's developer tools. A leaked key for a paid API can be used by strangers and billed to you. Renaming it or putting it in an env file does not help when the build puts the value back into the frontend bundle.
The correct structure is small:
- The browser calls your own endpoint, with no key.
- That endpoint, a server route or serverless function, reads the key from the host's environment settings and calls the outside API.
- The endpoint checks who is calling and limits how often, so your own route cannot be used as a free proxy.
- Any key that was ever in frontend code or committed to a repository is replaced at the provider.
This also removes most CORS errors, since the browser is now only talking to your own domain.
> If a key has been pasted into a public repository or a frontend file, treat it as leaked and replace it at the provider. Rotating a key takes a couple of minutes.

## What should I send if my code is scattered across chats?
Send everything, unsorted, along with a description of what the app should do. Sorting it is part of the work, and the raw material is more useful than a guess about which version is current.
- The folder from your computer, zipped, including package.json and any lockfile. Leave out the node_modules folder.
- Share links to the chat threads, or exports of them. The prompts explain intent that the code alone does not.
- A list of the screens and what each should do, in your own words.
- The names of every outside service involved: database, payments, email, AI providers.
- Screenshots of the errors you see, with the full text.
- Keys sent separately and never inside the zip, on the understanding that exposed ones get replaced.
From that I build one repository. The first milestone is unglamorous: the app installs with one command, starts with another, and the list of what is broken is written down.

## Should I keep the code or start over?
Keep the logic and replace the scaffolding. The valuable part of what you have is the business rules you worked out over many prompts, and those survive a restructure.
What usually stays:
- Calculations, rules and the wording of prompts sent to AI models
- The layout and text of screens
- The data fields you settled on
What usually gets replaced:
- The project setup, moved to one current framework. Projects started with Create React App are moved off it, since the React team has deprecated it.
- One giant file, split into components and modules with a single job each
- Copy-pasted blocks, folded into one shared function
- Data kept in the browser's local storage that should be in a database
Starting over makes sense in one case: when the app is a single page of a few hundred lines and the target is a multi-user product with accounts and payments. Then the old file is a specification, and a very good one, because it shows exactly what you want.

## What does deploying involve for an app that has only run on a laptop?
Three things: a build that works on a clean machine, a host that matches what the app is, and the settings that lived on your computer moved into the host.
- A static page with no secret keys can go on any static host.
- A React or Next.js app with server routes fits Vercel or Netlify, which build from a GitHub repository on every push.
- A Python script or backend needs a host that runs Python, and the frontend calls it over HTTPS.
- A database on your laptop has to become a hosted one, with the data copied over.
Then the domain is connected, environment values are entered on the host, and every flow is tested on the live address, since addresses that still point at localhost are an easy thing to leave behind. From there, updating the app is a push to GitHub and not a file copied by hand.

## How long does it take and what does it cost?
A small app is usually running and deployed within a few days, and the package depends on how much needs restructuring.
- Quick Fix, from $60, 2 days: one error that stops the app from running, fixed and explained.
- Fix Plus Features, from $200, 5 days: the code collected into one working repository, with keys moved server-side.
- Finish and Launch, from $600, 10 days: restructure on current versions, security fixes, a database if needed, and deployment on your domain.
Afterwards you can keep using ChatGPT with better results by pasting the package.json and the file you are changing into each request, and asking for complete files. A tool that reads the whole repository removes most of the guessing.

## The bottom line
Code from ChatGPT fails as a project for a simple reason: no answer ever saw the whole thing. Gather it into one repository, settle on one framework and one version of each library, move the keys to a server and deploy from GitHub. Most of what you wrote stays, and it finally runs as one app.`,
    faqs: [
      { q: 'My code is spread across chat threads. Can you still help?', a: 'Yes. Send what you have and I put it together into one working repository first.' },
      { q: 'Should I start over?', a: 'Usually not. Most of the logic can be kept once the project is organized properly.' },
      { q: 'How long does it take?', a: 'Small apps are usually running and deployed within a few days.' },
      { q: 'Why does code from ChatGPT use outdated syntax?', a: 'It cannot see which versions you installed, so it often writes for an earlier release of a library. The result is errors about functions or exports that no longer exist.' },
      { q: 'Is it safe to put my API key in the frontend code?', a: 'No. Anything in frontend code can be read in the browser, so keys belong in a server route that the frontend calls.' },
      { q: 'What does it cost?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
    ],
  },
];
