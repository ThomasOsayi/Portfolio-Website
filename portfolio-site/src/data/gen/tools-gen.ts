// AI-tool fix pages added Nov 22 2026 (generated batch).
import type { ToolFix } from '../landing';

export const toolFixesGen: ToolFix[] = [
  {
    slug: 'firebase-studio',
    tool: 'Firebase Studio',
    h1: 'Fix and move your Firebase Studio app before it shuts down',
    metaTitle: 'Firebase Studio Developer: Fix, Migrate & Deploy Your App | Thomas Osayi',
    description: 'Firebase Studio is shutting down in March 2027. I fix your Next.js app, secure Firestore, move the code to GitHub and keep it live on App Hosting or Cloud Run.',
    whatItBuilds: 'Firebase Studio was a browser workspace whose App Prototyping agent generated Next.js apps, with Genkit flows calling Gemini, optional Firestore and Firebase Authentication, and publishing to Firebase App Hosting. New workspaces were disabled on June 22, 2026 and the service shuts down on March 22, 2027.',
    problems: [
      { title: 'The workspace is going away', text: 'Firebase Studio shuts down on March 22, 2027 and remaining workspace data is deleted. If the only copy of your code lives there, it needs to be exported to GitHub now.' },
      { title: 'The Gemini key only existed in a .env file', text: 'The agent stored the Gemini API key in .env, which should never be committed. Once the code moves to GitHub and App Hosting, the key has to be set as a secret on the backend or the AI features fail.' },
      { title: 'Firestore rules the agent wrote and nobody reviewed', text: 'The agent writes and deploys security rules when it adds Firestore. They often allow any signed-in user to read every document, which is a data leak waiting for a second user.' },
      { title: 'Genkit flows that fail outside the workspace', text: 'Server actions and Genkit flows that worked in the Studio preview break in a real build because of missing environment variables, wrong runtime settings or client components importing server code.' },
      { title: 'Billing and project confusion', text: 'Publishing moved the project onto the Blaze plan, and the agent tied everything to one Firebase project. Untangling which project, backend and domain is actually live is part of the job.' },
    ],
    process: ['Export the workspace to a GitHub repository you own', 'Run a production build and list every error and risk', 'Move secrets to App Hosting or Cloud Run settings and lock down Firestore rules', 'Reconnect the repo to the existing App Hosting backend so the URL and domain stay the same', 'Test real sign-ins and data as different users, then hand over notes'],
    faqs: [
      { q: 'Is Firebase Studio really shutting down?', a: 'Yes. Google disabled new workspaces on June 22, 2026 and says Firebase Studio shuts down on March 22, 2027, with remaining data permanently deleted.' },
      { q: 'Will my published app stop working?', a: 'Not by itself. App Hosting, Firestore and Auth are core Firebase services that keep running, but you lose the workspace you used to edit and redeploy the app.' },
      { q: 'Do I have to move to Google AI Studio?', a: 'No. AI Studio is one option Google recommends, but your app is a normal Next.js project and can live in GitHub and deploy from there to App Hosting, Cloud Run or Vercel.' },
      { q: 'Can I keep my current URL?', a: 'Yes, if you connect your GitHub repository to the existing App Hosting backend in the Firebase console instead of publishing somewhere new.' },
      { q: 'What does a Firebase Studio fix cost?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and takes an app whose core already works through migration and launch from $600.' },
    ],
    guide: `## Is Firebase Studio shutting down?
Yes. Google announced the sunset on March 19, 2026, disabled new workspaces and signups on June 22, 2026, and says Firebase Studio shuts down on March 22, 2027, when remaining data is permanently deleted.
That date is the most important fact on this page. If you built an app with the App Prototyping agent and never exported it, the only copy of your source code may still be inside a workspace with an expiry date. Your published site will not vanish on that day, but the place where you edit and redeploy it will.
Existing workspaces still open and still work until the shutdown, so there is time. The mistake is waiting until something breaks in production and only then discovering that the editing environment is gone. The safest order is simple: export the code, get it building somewhere you control, then fix whatever was wrong with it.
## What did the App Prototyping agent actually build?
A Next.js app, deployed to Firebase App Hosting, usually with Genkit flows calling the Gemini API and, if you asked for them, Firestore and Firebase Authentication.
That matters because it means your app is not locked into a proprietary format. It is an ordinary Next.js project with a package.json, an app directory and some Firebase configuration. Any developer who knows Next.js and Firebase can work on it. The parts that are specific to how Studio built it are:
- The Gemini API key, which the agent stored in a .env file inside the workspace.
- Genkit flows, usually in a folder of server-side AI functions the pages call through server actions.
- An App Hosting backend, often named studio, connected to the Firebase project the workspace created.
- Firestore security rules the agent wrote and deployed when it added a database.
Each of those is a place where things break when the code leaves the workspace, which is why the migration and the fix tend to be the same job.
## Should I move to Google AI Studio, Antigravity or plain GitHub?
Pick based on how you want to keep working: AI Studio if you want to keep prompting in a browser, Antigravity if you want an agent in a local editor, and plain GitHub if a developer will maintain the app from here.
Google's own migration page recommends AI Studio for apps built with the App Prototyping agent and Antigravity for projects that were mostly worked on in Code View. Both are reasonable. What I care about for a client is that the code ends up in a GitHub repository they own, whichever tool they edit it with afterwards. GitHub is the one place every tool, every host and every developer can reach.
### Moving to AI Studio
The Move now button in Studio prepares the project and moves it into AI Studio. Publishing from AI Studio deploys to Cloud Run, which gives you a new run.app URL. If you had a custom domain, it has to be remapped, which Google says can take up to 24 hours.
### Staying on App Hosting from GitHub
Export to GitHub, then connect that repository to the existing App Hosting backend in the Firebase console. Your URL and domain stay the same, and every push to the main branch deploys.
> Export to GitHub today even if you plan to decide on a tool later. A repository you own costs nothing and removes the deadline from every other decision.
## What breaks when a Firebase Studio app leaves the workspace?
Mostly configuration: the Gemini key, environment variables, and code that only ever ran in the Studio preview.
The first failure is almost always the AI features. The .env file holding GEMINI_API_KEY should not be committed to GitHub, so once the app deploys from the repository, every Genkit flow throws an authentication error. Google's migration notes say to add the key manually as an environment variable on the App Hosting backend. I store it as a secret in apphosting.yaml rather than as plain text, so it never appears in the repo.
The second is the production build. The Studio preview ran a development server that forgives a lot. A real next build catches type errors, imports of server-only code into client components and pages that fetch data at build time without the credentials to do it. I run the build locally first and fix every error before touching the deploy.
The third is project wiring. The agent created one Firebase project per workspace, and some clients end up with two or three projects from different experiments, each with its own Firestore data. Before changing anything I confirm which project, which backend and which domain are actually serving real users.
## Are the Firestore rules the agent wrote safe?
Not always. The agent writes and deploys rules that make the app work, and Google's own documentation tells you to review them in the Firebase console.
The common pattern I look for is a rule that allows read and write for any request where request.auth is not null. That looks secure because it requires sign-in, but it means any signed-in user can read and change every other user's documents. In a two-person demo nobody notices. With real users it is a leak.
The fix is to tie each document to its owner, usually by storing the user's uid on the document and checking it in the rule, then adding explicit rules for anything shared, such as a team or a public profile. I test every collection three ways: as the owner, as a second account and signed out. If you want the full list I go through, my article on Firebase best practices before launch covers the security rules checklist, and the one on Firestore "Missing or insufficient permissions" explains what happens when rules swing too far the other way.
Firebase is a stack I know well from my own work. I built NOM, a food discovery app, on Firebase, and the LACEUP storefront uses a Firebase admin, so rules, Auth and Firestore data modeling are the parts of these apps I check most carefully.
## How long does a fix and migration take and what does it cost?
Most Firebase Studio apps take two to ten days to export, fix and redeploy, and the price depends on how many separate problems there are.
My fix packages:
- Quick Fix, from $60, about 2 days: one bug, for example AI features failing after the move because the Gemini key is missing.
- Fix Plus Features, from $200, about 5 days: up to three fixes plus one small feature, such as migrating to GitHub, securing Firestore rules and adding an admin view.
- Finish and Launch, from $600, about 10 days: for apps whose core features already work, covering export, build fixes, security, deploy on your domain and real user testing.
These prices assume the main workflow already works. If the prototype is mostly screens with very little behind them, I will say so after reading the code and quote from my SaaS MVP packages instead. My article on whether to fix or rebuild an AI-built app explains how I make that call.
Firebase's own costs are separate and billed to you by Google. App Hosting already required the Blaze plan, so most clients see no change in their Firebase bill from a migration.
## What do I need to give a developer?
A GitHub repository with the exported code, access to the Firebase project, and a short list of what is broken or must work before launch.
Use the Move now button and choose GitHub export, or download the zip and push it to a new private repository. Then add the developer as a collaborator. For Firebase, invite them to the project in the console with a role that lets them edit App Hosting and Firestore rules. Never paste the Gemini key or any service account file into chat or email. I can generate a new key in the right place if needed.
For the list, one sentence per problem with steps to reproduce is ideal. My article on how to hand off an AI-built app to a developer has a template if you want one.
## The bottom line
Firebase Studio is closing on March 22, 2027, but the app it built is a normal Next.js and Firebase project that can outlive it. Export the code to GitHub first, move the Gemini key into proper secrets, review the Firestore rules the agent wrote, and reconnect the repo to App Hosting so your URL stays the same. If you want that done for you, send me the repo and I will tell you what it needs.`,
  },
  {
    slug: 'google-ai-studio',
    tool: 'Google AI Studio',
    h1: 'Fix and launch the app you built in Google AI Studio',
    metaTitle: 'Google AI Studio App Developer: Fix, Secure & Deploy | Thomas Osayi',
    description: 'Built an app in Google AI Studio build mode and need it secure, stable and on your own domain? I fix Firestore rules, Gemini costs, Cloud Run deploys and GitHub sync.',
    whatItBuilds: 'Google AI Studio build mode generates full-stack web apps from a prompt: a React frontend by default, a Node.js server runtime that keeps the Gemini key server side, optional Firestore and Firebase Authentication, and one-click deploys to Cloud Run, with two-way GitHub sync or a ZIP export.',
    problems: [
      { title: 'Firestore rules drafted by the agent', text: 'When you enable Firebase, the agent drafts and deploys security rules from your app logic. Google itself says to double-check them before sharing, and they are often looser than they look.' },
      { title: 'Every visitor spends your Gemini quota', text: 'On Cloud Run the app calls Gemini with your key for every user. Without sign-in, rate limits or usage caps, one busy day or one bot can run up a real bill.' },
      { title: 'Works in AI Studio, fails from the ZIP', text: 'Exported code needs GEMINI_API_KEY and Firebase settings recreated on the new host. Missing variables mean blank screens and server errors.' },
      { title: 'Only Google sign-in', text: 'The generated auth flow is Sign in with Google. Email login, password reset, roles and admin access usually have to be added by hand.' },
      { title: 'A prototype URL instead of a real domain', text: 'Apps publish to a run.app address. Custom domains, previews, environments and monitoring take setup the build mode does not do for you.' },
    ],
    process: ['Sync the app to a GitHub repository you own', 'Review the server code, Firestore rules and Gemini usage', 'Lock down data access and add limits on AI calls', 'Deploy to Cloud Run or another host on your domain', 'Test as real users and document how to keep building in AI Studio'],
    faqs: [
      { q: 'Is my Gemini API key exposed in an AI Studio app?', a: 'Not by default. AI Studio injects the key into the server-side runtime and keeps it out of client code, but every request your users make is billed to that key.' },
      { q: 'Can I keep using AI Studio after a developer works on the code?', a: 'Yes. AI Studio syncs both ways with GitHub, so changes pushed to the repository can be pulled back in and you can keep prompting.' },
      { q: 'Do I have to host on Cloud Run?', a: 'No. Cloud Run is the one-click option, but the exported code is a standard Node.js and React project that can run on other hosts with the right environment variables.' },
      { q: 'Can the app use a relational database?', a: 'Google announced Cloud SQL for PostgreSQL as an option alongside Firestore at I/O 2026, and you can ask the agent for a relational database explicitly.' },
      { q: 'What does it cost to fix an AI Studio app?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and launches an app whose core already works from $600.' },
    ],
    guide: `## What does Google AI Studio build mode actually generate?
A full-stack web app: a React frontend by default, a Node.js server runtime for API calls and database connections, and optionally Firestore and Firebase Authentication, deployed with one click to Cloud Run.
That is a bigger deal than it sounds. Earlier AI Studio apps were mostly single-page demos calling Gemini from the browser. Build mode now gives you a real server, so your Gemini key is set up as a server-side secret and, in Google's words, never included in client-side code. When you press Enable Firebase, the agent provisions Firestore, turns on authentication, writes a Google sign-in page and connects the app to the database.
So the starting point is better than most AI builders. The gaps are in the decisions the agent cannot make for you: who may read which data, how much each visitor is allowed to spend on Gemini, what happens when something fails, and how the app lives on your own domain with real users. Those are what I spend time on.
## Is an AI Studio app safe to share with real users?
Not until someone has reviewed the Firestore rules and the Gemini usage, because those are the two places a prototype becomes a liability.
### Firestore security rules
The agent drafts and deploys Firestore rules based on your app's logic. Google's own announcement adds that you should always double-check them before sharing or deploying. The pattern I look for is any rule that lets every signed-in user read a whole collection. With Google sign-in on, that means anyone with a Google account can create an account and read everything. I rewrite rules so each document belongs to a uid, add explicit rules for shared data and test as the owner, a second user and signed out.
### Gemini spend
The Cloud Run deployment uses your key for every user's Gemini calls. If the AI feature is reachable without signing in, a bot or a single heavy user can generate a large bill. I put AI routes behind authentication, add per-user rate limits on the server and set budget alerts in Google Cloud.
> Before you share the link anywhere public, open Google Cloud billing and set a budget alert on the project. It takes two minutes and is the cheapest insurance an AI app can have.
## Why does my app work in AI Studio but break after I export it?
Because the AI Studio environment supplies configuration that the exported code does not carry with it.
When you download the ZIP, Google's documentation says you need to set the GEMINI_API_KEY environment variable in your hosting environment yourself. The same applies to the Firebase configuration and any other secrets you added in the Secrets panel. If they are missing, the server starts but every AI call returns an error, and pages that depend on Firestore render empty.
The other usual causes:
- The new host runs a different Node.js version from the one the project expects.
- The start command or port does not match what the host looks for.
- Firebase Authentication rejects sign-in because the new domain is not in the authorized domains list. My article on Firebase auth/unauthorized-domain walks through that error.
- Code that assumed it was running inside AI Studio, such as relative URLs to the preview, needs updating.
None of this is hard once you know where to look. It is the kind of thing a Quick Fix covers.
## Should I keep it on Cloud Run or move it?
For most apps, staying on Cloud Run is fine and simplest; move only when you need something Cloud Run does not give you easily.
Cloud Run scales to zero, bills per use and is already where AI Studio deploys, so there is no migration risk. What usually needs adding is a custom domain mapping, separate staging and production services so you can test before users see changes, and logging you actually read. Google notes that the Starter tier lets you deploy up to two full-stack apps without a credit card, and that you can upgrade to a billing-enabled project later with resources transferred. For anything public, I move clients onto their own billing-enabled project early so the app, the database and the bills all sit under an account they control.
Moving to another host such as Vercel makes sense when the frontend is the main product and you want preview deployments for every change. It means recreating every environment variable and checking that the Node.js server still runs where you put it.
## How do I keep prompting in AI Studio once a developer is involved?
Use the GitHub sync, and agree on which areas each of you is changing.
AI Studio's GitHub integration works both ways: you can push changes with AI-generated commit messages, or pull in changes made elsewhere. That means I can work in the repository and you can still open the project in AI Studio and keep building. The risk is the same as with any AI builder: a broad prompt such as "clean up the app" can quietly rewrite a security rule or a rate limit I added. Pull my changes in before prompting, keep prompts specific to the feature you want, and tell me if you change auth, rules or anything that calls Gemini. My article on how to undo broken AI changes with git shows how to roll back when a prompt goes wrong.
## What else usually needs adding before launch?
Auth beyond Google sign-in, an admin view, error handling, and the basic pages a real product needs.
The generated sign-in flow is Sign in with Google. That suits internal tools, but many consumer and business apps also need email login, password reset and roles, for example a regular user and an admin who can see everything. AI calls also fail more often than people expect, through rate limits, timeouts or blocked content, so the interface needs clear error states rather than a spinner that never stops. And a public app needs a privacy policy that mentions the AI provider and what data is sent to it.
## How long does it take and what does it cost?
Most AI Studio fixes take two to ten days, and the price depends on how many separate problems there are, not the size of the app.
My fix packages:
- Quick Fix, from $60, about 2 days: one bug, such as a broken export or a failing sign-in on your domain.
- Fix Plus Features, from $200, about 5 days: up to three fixes plus one small feature, for example locking down Firestore rules, rate limiting Gemini calls and adding an admin page.
- Finish and Launch, from $600, about 10 days: for apps whose core already works, covering security, deploy on your domain, error handling and testing with real accounts.
If the app needs much more than that, such as payments, multiple roles and a full dashboard, I quote from my SaaS MVP packages instead after reading the code. Google Cloud and Gemini usage are billed to you by Google and depend on traffic.
## The bottom line
Google AI Studio build mode gives you a real full-stack starting point with the Gemini key kept on the server. Before real users arrive, review the Firestore rules the agent drafted, put limits on every Gemini call, move the app into a billing project you own, and give it a proper domain. Sync it to GitHub and send me the repo if you want that done properly.`,
  },
  {
    slug: 'github-copilot',
    tool: 'GitHub Copilot',
    h1: 'Fix and ship the app you built with GitHub Copilot',
    metaTitle: 'GitHub Copilot Project Help: Review, Fix & Deploy Your App | Thomas Osayi',
    description: 'Built your app with Copilot agent mode or the coding agent and now have pull requests you cannot fully review? I review the code, fix what is broken and ship it.',
    whatItBuilds: 'GitHub Copilot works inside your own repository on any stack. Agent mode edits files and runs commands in your editor, and the coding agent (now called the Copilot cloud agent) works on a branch in the background and opens a pull request for you to review.',
    problems: [
      { title: 'Pull requests merged without a real review', text: 'The coding agent opens a pull request per task. When they are merged because the preview looked right, auth checks, validation and error handling slip through.' },
      { title: 'One task, one branch, many overlaps', text: 'Copilot works on one branch at a time and one pull request per task. Several parallel tasks on the same area end in merge conflicts and duplicated logic.' },
      { title: 'Tests that only cover the happy path', text: 'Agent-written tests often check that code runs, not that it is correct. They pass while the real bug ships.' },
      { title: 'The agent cannot build your project', text: 'In the cloud the agent needs dependencies, services and environment set up for it. Without that, it guesses, and its changes are never actually run.' },
      { title: 'Production config nobody owns', text: 'Environment variables, migrations, webhooks and domains that were never part of any issue, so no agent ever set them up.' },
    ],
    process: ['Get access to the repository and hosting accounts', 'Review merged and open Copilot pull requests for risk', 'Fix security, data access and broken flows first', 'Set up instructions, tests and CI so future agent work stays safe', 'Deploy, test real flows and hand over notes'],
    faqs: [
      { q: 'Is code from the Copilot coding agent production ready?', a: 'It can be, but it arrives as a pull request precisely so a person reviews it. Treat each one like work from a new junior developer.' },
      { q: 'Can I keep assigning issues to Copilot after you fix things?', a: 'Yes. Clear repository instructions, tests and CI make the agent more reliable, because it gets fast feedback when it breaks something.' },
      { q: 'Does Copilot only work with GitHub repositories?', a: 'The cloud agent does. GitHub says it only works with repositories hosted on GitHub, and it needs write access to make changes.' },
      { q: 'Do you need my GitHub password or Copilot seat?', a: 'No. Being added as a collaborator on the repository, plus access to hosting and database accounts, is enough.' },
      { q: 'What does a fix cost?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and gets an app whose core already works launched from $600.' },
    ],
    guide: `## Which Copilot did you build with, and why does it matter?
GitHub Copilot is now several tools, and the kind of problems you have depends on which one wrote most of your code.
- Inline suggestions: the original autocomplete. You wrote the code and accepted lines as you went, so you usually understand it.
- Agent mode in your editor: you describe a change and Copilot edits several files and runs commands locally. Faster, but changes are broader and easier to accept without reading.
- The coding agent, which GitHub now calls the Copilot cloud agent: you assign an issue or delegate a task, it works in the background on GitHub's infrastructure and opens a pull request.
Apps built mostly with the last two are the ones I get asked to look at. The code is in a normal repository on whatever stack you chose, which is good news: there is no proprietary builder to escape. The challenge is volume. An agent can produce more code in a weekend than one founder can review in a month, and the risky parts are rarely the parts you look at in the preview.
## How does the Copilot coding agent work?
It takes a task, works on a single branch in a cloud environment, and opens a pull request for a person to review and merge.
According to GitHub's documentation, Copilot can only work on one branch at a time and can open one pull request per task. Sessions running on GitHub Actions have a maximum execution time of 59 minutes, and in that mode Copilot can only change the repository the task was started in. It needs write access, and branch protection rules can stop it from creating or updating pull requests. As of October 28, 2026, GitHub rolled out a newer Copilot in the cloud experience for paid plans, while Copilot Free users stay on the older chat experience.
The design assumption is clear: the agent does the typing, and a human reviews. When that review step becomes a quick glance at the preview followed by Merge, the safety model behind the whole workflow is gone.
## What goes wrong in apps built mostly by Copilot agents?
The same few things, in roughly this order: missing authorization, overlapping pull requests, shallow tests and production configuration nobody set up.
### Authorization that was never asked for
An issue that says "add an endpoint to update a project" gets an endpoint that updates a project. It may not check that the signed-in user owns that project, because the issue never said so. I search every API route and server action for that check.
### Overlapping pull requests
Because each task is its own branch and pull request, three tasks touching the same feature become three slightly different versions of the same helper. Merged one after another, they leave duplicated logic that disagrees.
### Tests that prove nothing
Agents often write tests that confirm a function returns something. They pass, the coverage number goes up and the bug still ships. My article on how to add tests to an AI-generated app explains which tests to write first.
### Production gaps
Environment variables, database migrations, webhook endpoints and domain settings are rarely part of any issue, so no agent ever touched them.
## How do I review a Copilot pull request properly?
Read the diff for what it changes outside the stated task, check auth and data access by hand, and run it yourself before merging.
My short checklist for any agent pull request:
- Does the change touch files that have nothing to do with the issue? Ask why.
- Does every new route or action check who the user is and what they may access?
- Are inputs validated on the server, not only in the form?
- Are secrets read from environment variables, never written into code?
- Did the tests fail before the change and pass after it, or would they pass either way?
- Does the app still build and run locally, including flows the task did not mention?
You can leave review comments on the pull request and Copilot will respond to them, which is often faster than fixing small things yourself. My article on how to review AI-generated code has the longer version.
> Turn on a branch protection rule that requires a passing CI build before merging. It costs nothing and catches the agent pull requests that never actually compiled.
## How do I make Copilot agents more reliable in my repo?
Give them instructions, a working environment and fast feedback.
Repository custom instructions tell Copilot your conventions: which folders hold what, how auth is checked, which libraries to use, what never to touch. GitHub also lets you customize the environment the agent runs in on Actions, so it can install your dependencies and run your test suite rather than guessing. And a CI workflow that runs the build, the type checker and the tests on every pull request means the agent sees its own failures instead of handing them to you.
I set those three things up as part of a fix. They make every later task cheaper, whether Copilot, another agent or a developer does the work.
## Should I keep using Copilot after a developer fixes the app?
Yes. A cleaner codebase with tests and instructions is exactly what makes the agent useful.
The practical rule is to assign Copilot well-scoped issues with acceptance criteria, such as "add a CSV export to the orders page, only for admins, with a test that a regular user gets a 403", and to keep anything involving payments, auth or permissions for careful human review. Small, specific issues produce small, reviewable pull requests.
## How long does it take and what does it cost?
Most Copilot-built apps take two to ten days to review, fix and deploy, depending on how many separate problems there are.
My fix packages:
- Quick Fix, from $60, about 2 days: one bug or one bad merge, found and fixed.
- Fix Plus Features, from $200, about 5 days: up to three fixes plus one small feature, for example adding authorization checks, cleaning up duplicated logic and adding CI.
- Finish and Launch, from $600, about 10 days: for apps whose core already works, covering a review of the critical paths, security fixes, production config, deploy and handover.
If most of the product still needs building, I will say so and quote from my SaaS MVP packages instead. My article on whether to fix or rebuild an AI-built app explains how I decide.
## The bottom line
Copilot's agents are built around a pull request a human reviews, and most problems start when that review is skipped. Check every route for authorization, collapse overlapping pull requests, replace tests that prove nothing, and give the agent instructions and CI so it gets feedback. Add me as a collaborator on the repo and I will tell you what it needs before launch.`,
  },
  {
    slug: 'rork',
    tool: 'Rork',
    h1: 'Fix and publish the mobile app you built with Rork',
    metaTitle: 'Rork Developer: Fix, Finish & Publish Your Rork Mobile App | Thomas Osayi',
    description: 'Built a mobile app with Rork and stuck on bugs, backend, App Store review or exporting the code? I fix your React Native and Expo app and get it ready to ship.',
    whatItBuilds: 'Rork is an AI mobile app builder. Older projects are React Native apps built on Expo; newer ones can be native SwiftUI for iOS, Kotlin with Jetpack Compose for Android, or React web apps. It offers Rork Backend serverless functions or Supabase and Firebase, two-way GitHub sync on paid plans, and built-in App Store submission.',
    problems: [
      { title: 'Works in the preview, crashes on a real device', text: 'Camera, photo library, location and notifications behave differently on a physical phone. Missing permission strings and native modules cause crashes or instant rejections.' },
      { title: 'Backend that was half connected', text: 'Supabase or Firebase wired up for the demo flow only, with open database rules, no row ownership and uploads anyone can read.' },
      { title: 'App Store review rejections', text: 'Missing account deletion, vague permission prompts, placeholder content and broken sign-in for the reviewer are common reasons builds come back.' },
      { title: 'Android left for later', text: 'Rork generates an Android App Bundle, but you upload it to Play Console yourself, and the Android build often has layout and keyboard issues nobody tested.' },
      { title: 'Code stuck inside the builder', text: 'Export needs a paid plan and GitHub sync. Until the code is in your repository, no developer can run, test or fix it properly.' },
    ],
    process: ['Sync the Rork project to a GitHub repository you own', 'Run it on real iOS and Android devices and list every issue', 'Secure the backend and fix crashes, permissions and auth', 'Prepare store listings, privacy details and builds for review', 'Hand over notes so you can keep building in Rork'],
    faqs: [
      { q: 'Can I get my code out of Rork?', a: 'Yes, on a paid plan. Rork connects to GitHub with a two-way sync, so a developer can work locally and you can import the changes back into Rork.' },
      { q: 'Does Rork publish to the App Store for me?', a: 'Rork compiles the iOS app in the cloud and submits it to App Store Connect, but you need your own Apple Developer Program membership and the app still has to pass review.' },
      { q: 'What about Google Play?', a: 'Rork generates an Android App Bundle and you upload it in Play Console yourself, including the store listing and data safety form.' },
      { q: 'Have you built React Native apps yourself?', a: 'Yes. I built NOM, a food discovery app, in React Native, Expo and Firebase, including an 11-screen onboarding flow and camera uploads.' },
      { q: 'What does it cost to fix a Rork app?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and gets an app whose core already works ready to publish from $600.' },
    ],
    guide: `## What kind of app does Rork actually build?
It depends on when you started: older Rork projects are React Native apps built on Expo, while Rork now also generates native SwiftUI apps for iOS, Kotlin and Jetpack Compose apps for Android, and React web apps.
Rork's own FAQ says it builds native SwiftUI apps compiled with Xcode for Apple platforms, and that older projects still use React Native and Expo. Most apps people bring to me are the React Native and Expo kind, which is good news: it is a mature, widely used stack with a large community, and the same code runs on iOS and Android.
For the backend, Rork offers its own serverless functions, called Rork Backend, which keep API keys on the server instead of inside the app. It can also integrate Supabase or Firebase. Paid plans add a two-way GitHub sync, so you can work on the code locally or with a developer and import changes back into Rork.
This page focuses on React Native and Expo projects, because that is where I can help most directly. I built NOM, a food discovery app, in React Native, Expo and Firebase at LMU Tech and Digital Ventures, including an 11-screen onboarding flow and camera uploads.
![NOM, the food discovery app I built in React Native, Expo and Firebase](/work/nom-poster.jpg)
## Why does my Rork app work in the preview but crash on my phone?
Because the preview hides the native layer: permissions, device APIs and build configuration only show up on a real device and in a real build.
The usual causes I find:
- Missing permission descriptions. iOS requires a clear reason string for the camera, photo library, location and microphone. Without it the app crashes the moment it asks, or Apple rejects it.
- Native modules not configured. Some Expo libraries need a config plugin entry in app.json or app.config.js. If it is missing, the feature works in a development preview and fails in a production build.
- Different behavior on Android. Keyboards covering inputs, back button handling and safe area padding are classic Android-only bugs when testing was done on an iPhone.
- Large images. Uploading full resolution camera photos makes uploads slow and can exhaust memory. On NOM, resizing and compressing photos before upload was one of the things that made camera features feel reliable.
I install the app on real iOS and Android devices early and list every problem before fixing any of them.
## Is the backend in my Rork app secure?
Often not yet, because the backend is wired for the demo flow and nobody has tested it as a second user.
If your app uses Firebase, the Firestore and Storage rules decide who can read each document and file. A rule that allows anything for a signed-in user means any account can read every other account's data, including uploaded photos. If it uses Supabase, row level security policies play the same role. If it uses Rork Backend, each function needs to check who is calling it before doing anything.
I tie every record to its owner, lock down storage so users can only read files they should, and test as the owner, a second user and signed out. My article on the Firebase security rules checklist covers the Firebase side in detail, and the one on Supabase row level security covers Supabase.
> Make two test accounts on two phones and try to see the first account's data from the second. If you can, fix that before anything else.
## How do I get my Rork app through App Store review?
Meet Apple's basic requirements before you submit, because the common rejections are predictable.
Rork can compile your iOS app in the cloud, upload it to App Store Connect and submit it for review when you confirm. You still need your own Apple Developer Program membership, which Rork's FAQ lists at $99 per year at the time of writing. The app still has to pass review like any other.
The things I check before submitting:
- Account deletion. If users can create an account, Apple requires a way to delete it from inside the app.
- Sign in with Apple, if you offer other social logins such as Google.
- Permission prompts with specific reasons, not generic text.
- No placeholder screens, lorem ipsum or features that say coming soon.
- A working demo account in the review notes if the app requires login.
- Privacy details in App Store Connect that match what the app actually collects.
## What about Android and Google Play?
Rork generates an Android App Bundle, an .aab file, and you upload it to Google Play Console yourself.
That last step is where Android often gets left behind. You need a Play Console developer account, a store listing with screenshots, a data safety form and, for new personal accounts, Google's closed testing requirement before production access. The build itself also deserves a proper test pass on a real Android device, since most Rork users design and test on iPhones. I handle the upload, the listing and the testing if you want both stores live at once.
## Should I export my Rork app to GitHub?
Yes, as soon as the app matters to you, because a developer cannot properly run, test or fix code they cannot check out.
Code export needs a paid Rork plan. Once GitHub is connected, the sync works both ways: I make changes in the repository, and you import them back into Rork and keep prompting. The one habit to keep is telling me before you prompt changes in an area I am working on, such as auth or the database, so the AI does not quietly undo a fix. My article on how to hand off an AI-built app to a developer explains what else to prepare.
## How long does it take and what does it cost?
Most Rork fixes take two to ten days, depending on how many separate problems there are and whether you need one store or both.
My fix packages:
- Quick Fix, from $60, about 2 days: one bug, such as a crash when opening the camera.
- Fix Plus Features, from $200, about 5 days: up to three fixes plus one small feature, for example securing the database, fixing an Android layout issue and adding account deletion.
- Finish and Launch, from $600, about 10 days: for apps whose core features already work, covering device testing, backend security, store preparation and submission.
If the app is mostly screens and still needs its core workflow built, I will quote from my SaaS MVP packages instead after reading the code. Apple and Google developer account fees are separate and paid by you.
## The bottom line
Rork gets you a working mobile app quickly, and its React Native and Expo projects are a solid foundation. The last stretch is native: real device testing, permission strings, secure backend rules, account deletion and store review. Sync the project to GitHub, test with two accounts on two phones, and fix security first. If you want help with that, send me the repo and I will tell you what it needs.`,
  },
  {
    slug: 'emergent',
    tool: 'Emergent',
    h1: 'Fix and launch the app you built with Emergent',
    metaTitle: 'Emergent Developer: Fix, Finish & Deploy Your Emergent App | Thomas Osayi',
    description: 'Built an app with Emergent and stuck in a debugging loop, burning credits or unsure how to host it yourself? I fix the code, secure the backend and ship it.',
    whatItBuilds: 'Emergent is an agent-based AI app builder that generates full-stack apps, typically a React frontend with a Python API backend and a MongoDB database, with built-in hosting on a live URL and GitHub integration on paid plans.',
    problems: [
      { title: 'Debugging loops that burn credits', text: 'Reviewers consistently describe debugging as the biggest credit cost on Emergent. Each attempt changes more code and the original bug is still there.' },
      { title: 'API endpoints without authorization', text: 'Python endpoints that accept a record id and return or update it without checking who is asking. Anyone who finds the URL can read data belonging to other users.' },
      { title: 'MongoDB data with no structure', text: 'Collections that grew prompt by prompt, with inconsistent fields, no indexes and duplicate records that make pages slow and queries unreliable.' },
      { title: 'Hosting that costs credits every month', text: 'Keeping an app live on Emergent hosting uses credits on top of development. Some owners want to move it to infrastructure they control.' },
      { title: 'Secrets in the wrong place', text: 'Stripe, email or AI keys written into code or exposed to the React frontend instead of living in backend environment variables.' },
    ],
    process: ['Push the project to a GitHub repository you own', 'Run frontend and backend locally and list every issue', 'Fix authorization, secrets and data problems first', 'Deploy on Emergent or move to your own hosting and database', 'Test real user flows and hand over a write-up'],
    faqs: [
      { q: 'Can I get my code out of Emergent?', a: 'Yes. Emergent can save the project to a GitHub repository, which reviewers report is available from the Standard plan, and from there it can be run locally or deployed elsewhere.' },
      { q: 'Should I keep hosting on Emergent?', a: 'If the app is small and you want everything in one place, it can be fine. If you want predictable bills or more control, it can move to your own hosting and database.' },
      { q: 'Do I need to rewrite the Python backend?', a: 'Usually not. Most problems are missing checks, configuration and data structure, which can be fixed without a rewrite.' },
      { q: 'Do you need my Emergent login?', a: 'No. Access to the GitHub repository plus the database and hosting accounts is enough.' },
      { q: 'What does it cost to fix an Emergent app?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and launches an app whose core already works from $600.' },
    ],
    guide: `## What does Emergent actually generate?
A full-stack app built by a team of AI agents: typically a React frontend, a Python API backend and a MongoDB database, hosted by Emergent on a live URL.
That is a different shape from builders like Lovable or Bolt, which lean on Supabase and run most logic in the browser. With Emergent there is a real backend server between your users and your data. That is good: secrets can stay on the server and business rules can be enforced in one place. It also means the backend has to be written carefully, because every endpoint decides on its own whether a request is allowed.
Emergent also handles hosting, environment configuration and SSL for you, and paid plans add GitHub integration so the code can leave the platform. Reviewers report that keeping an app live costs credits each month on top of development, which becomes relevant once you start thinking about running the app for real.
## Why do Emergent debugging loops burn so many credits?
Because each attempt to fix a bug is a full agent run that reads, changes and retests code, and when the agent misreads the cause, it changes the wrong code and tries again.
Independent reviews of Emergent describe debugging as the real credit sink, with fixes to AI-introduced bugs sometimes costing more than the original build. The pattern I see behind loops like this is almost always the same: the bug lives in a place the agent cannot see well, such as an environment variable, a data shape in MongoDB that differs from what the code expects, or two parts of the app that each assume the other handles something.
Signs you are in a loop:
- The same error comes back after three or four fix attempts.
- Fixes in one feature keep breaking a different feature.
- The agent says the problem is fixed, and it is not.
- You are spending more on credits debugging than you did building.
At that point a person reading the code and the logs directly is cheaper. My article on Lovable credits running out was written about Lovable, but the advice on when to stop prompting applies to Emergent just as well.
## Is my Emergent app's backend secure?
Check every endpoint for authorization, because a Python backend that works is not the same as one that only lets each user see their own data.
The common problem is an endpoint like one that fetches an order by its id. The agent writes code that looks up the order and returns it. What it often does not write is a check that the order belongs to the user making the request. Anyone signed in, or sometimes anyone at all, who changes the id in the request can read other people's orders. I go through every route, add a dependency or middleware that identifies the user from their session or token, and filter every database query by that user.
The other things I check:
- Secrets. Stripe secret keys, email provider keys and AI keys belong in backend environment variables, never in the React code where any visitor can read them. My article on API keys exposed in your frontend explains which keys are safe to ship and which are not.
- CORS. The backend should accept requests only from your real domains, not from everywhere.
- Input validation on the server, so a malformed request cannot write junk into the database.
> Open your app's network tab in the browser, copy one API request and change the id to one you do not own. If you get data back, that endpoint needs fixing before launch.
## What goes wrong with MongoDB in Emergent apps?
Data structure drifts as the app grows prompt by prompt, and MongoDB does not stop it.
MongoDB does not enforce a schema by default, which makes it fast to build with and easy to make a mess in. After a few dozen prompts, the same collection can hold documents with different field names for the same thing, dates stored as strings in some records and real dates in others, and duplicate users created by a sign-up flow that ran twice. Pages slow down because nothing is indexed, and queries miss records because the field they filter on is spelled differently in half the documents.
I fix this in three steps: write down the shape each collection should have, add validation in the backend models so new data follows it, and run a careful one-time cleanup of existing records with a backup taken first. Then I add indexes for the queries the app actually runs. My article on how to back up your Supabase or Firebase database covers the backup habit; the same principle applies to MongoDB.
## Should I keep hosting on Emergent or move it?
Keep it on Emergent if the app is small and you value having everything in one place; move it if you want predictable costs, your own database or more control over deploys.
Moving is a normal job, not a rewrite. The React frontend can go to a host such as Vercel or Netlify. The Python backend runs on any platform that supports Python services, such as Cloud Run, Render or Railway. MongoDB can move to MongoDB Atlas under your own account. The work is in recreating every environment variable, pointing the frontend at the new API address, setting CORS for the new domain and migrating the data with a tested restore. Once the code lives in GitHub, deploys happen on every push and you can still work in Emergent if you want to.
## What should I prepare for a developer?
The GitHub repository, access to the database, and a short list of what is broken or must work before launch.
Use Emergent's GitHub integration to save the project to a private repository and add me as a collaborator. Share database access through the provider's own team invites, never by pasting connection strings into chat. For the list, one sentence per problem with steps to reproduce it, plus a two minute screen recording of the main workflow, is more useful than a long description. My article on what to send a web developer before your project starts has more detail.
## How long does it take and what does it cost?
Most Emergent fixes take two to ten days, and the price depends on how many separate problems there are.
My fix packages:
- Quick Fix, from $60, about 2 days: one bug, often the one the agent has been looping on.
- Fix Plus Features, from $200, about 5 days: up to three fixes plus one small feature, for example securing endpoints, moving secrets to the backend and adding an admin page.
- Finish and Launch, from $600, about 10 days: for apps whose core already works, covering security, data cleanup, deploy on your domain or your own hosting, and real user testing.
If most of the product still needs building, I will quote from my SaaS MVP packages after reading the code instead. My article on whether to fix or rebuild an AI-built app explains how I decide.
## The bottom line
Emergent gives you a real full-stack app with a Python backend and MongoDB, which is a strong starting point. When debugging starts eating credits, stop prompting and get the code into GitHub. Check every endpoint for authorization, move secrets to the backend, give your MongoDB data a defined shape, and decide deliberately where the app should live. Send me the repo if you want a second pair of eyes on it.`,
  },
  {
    slug: 'codex',
    tool: 'OpenAI Codex',
    h1: 'Finish and launch the app you built with OpenAI Codex',
    metaTitle: 'OpenAI Codex Project Help: Review, Fix & Deploy Your App | Thomas Osayi',
    description: 'Built your app with OpenAI Codex tasks or the Codex CLI and now need someone to review it, fix what is broken and get it live? I take over the repo and ship it.',
    whatItBuilds: 'OpenAI Codex is a software engineering agent that works in your own repository on any stack, through the Codex CLI, an IDE extension, the ChatGPT desktop app and Codex Cloud, where tasks run in isolated containers and changes come back for review as diffs and pull requests.',
    problems: [
      { title: 'Cloud tasks that never ran your real setup', text: 'In Codex Cloud the agent phase runs offline by default and secrets are removed after setup. Tests that need the network or real keys get skipped, mocked or quietly weakened.' },
      { title: 'Many parallel tasks, one tangled codebase', text: 'Codex makes it easy to run several tasks at once. Merged one after another, they leave conflicting patterns and duplicated logic.' },
      { title: 'No AGENTS.md, so every task guesses', text: 'Without project instructions, each task picks its own conventions for auth, data access and file layout.' },
      { title: 'Security nobody read', text: 'API routes without ownership checks, permissive database rules and secrets in the repository are easy to miss in a large diff.' },
      { title: 'Production was never part of a task', text: 'Environment variables, migrations, webhooks, domains and monitoring were set up for local runs only, or not at all.' },
    ],
    process: ['Get access to the repository and hosting accounts', 'Review the critical paths and list risks by severity', 'Fix security, payments and broken flows first', 'Add AGENTS.md, tests and CI so future Codex tasks stay on track', 'Set up production config, deploy and hand over notes'],
    faqs: [
      { q: 'Is code written by Codex safe to ship?', a: 'Only after a person has reviewed the parts that touch auth, payments and user data. Codex is fast, but the review is still your responsibility.' },
      { q: 'Can I keep using Codex after you fix the app?', a: 'Yes. An AGENTS.md file, a working test suite and CI make Codex tasks more reliable, because the agent knows the rules and can check its own work.' },
      { q: 'Why did my Codex Cloud task skip the tests?', a: 'By default the agent phase runs without internet access and secrets are only available during setup, so tests that need either cannot run unless the environment is configured for them.' },
      { q: 'Do you need my ChatGPT account?', a: 'No. Access to the GitHub repository plus your hosting and database accounts is enough.' },
      { q: 'What does it cost to fix a Codex-built app?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and gets an app whose core already works launched from $600.' },
    ],
    guide: `## What is OpenAI Codex today?
Codex is OpenAI's software engineering agent, and it works on your own repository through several surfaces: the Codex CLI in your terminal, an IDE extension, the ChatGPT desktop app and Codex Cloud.
Locally, the CLI and IDE extension edit files and run commands inside an operating system sandbox, asking for approval depending on the mode you choose. In Codex Cloud, tasks run in isolated containers managed by OpenAI, and the result comes back as a diff you can review and turn into a pull request. At OpenAI's DevDay in late September 2026, Codex gained reusable cloud environments that work across devices, a refreshed CLI with a view for tracking several delegated tasks, code review inside the ChatGPT desktop app and automatic reviews, plus Codex Security Cloud for scanning GitHub repositories.
Unlike app builders such as Lovable or Emergent, Codex does not choose your stack or host your app. Whatever you built, Next.js, a Python API, a mobile app, it lives in a normal repository you control. That makes it easier to fix, and it also means nothing about production was set up unless someone asked for it.
## Why do Codex Cloud tasks pass but the app still breaks?
Because the cloud agent usually works without the network and without your secrets, so it cannot run the parts of your app that need them.
OpenAI's documentation is specific about this. A cloud environment has a setup phase that can reach the network to install dependencies, and an agent phase that runs offline by default unless you enable internet access for that environment. Secrets configured for the environment are available only during setup and are removed before the agent phase starts.
In practice that means:
- Tests that call a real database, Stripe or an email provider cannot run, so the agent may skip them, mock them or change them until they pass.
- Code that reads an environment variable at runtime has never been executed with a real value.
- Package installs attempted during the agent phase fail, and the agent may work around a missing library in strange ways.
None of this is a flaw in Codex. It is a sensible security default. It just means a green task is not proof the feature works. I run the changes against a real local or staging setup before trusting them.
> When a Codex task touches tests, read the test diff first. If assertions were removed or loosened, the agent may have made the test pass instead of making the code correct.
## What goes wrong when you build a whole app with Codex?
Volume and inconsistency: many tasks, each locally sensible, that together produce a codebase nobody fully understands.
### Parallel tasks that collide
Codex makes it easy to fire off five tasks and come back later. When several of them touch the same feature, you get three ways of fetching the current user, two date helpers and competing error handling. Each pull request looks fine on its own.
### Authorization that was never specified
A task that says "let users edit their projects" gets an edit endpoint. Whether it checks that the project belongs to the signed-in user depends on whether the prompt or the project instructions said so.
### Production setup left out
Environment variables on the host, database migrations, webhook endpoints, domains and error monitoring are rarely the subject of a task, so they are often missing entirely.
## What should an AGENTS.md file contain?
The rules you want every Codex task to follow: how the project is laid out, how auth and data access work, how to run the build and tests, and what never to touch.
Codex reads AGENTS.md files before doing any work. It merges a global file in your home directory with project files from the repository root down to the folder it is working in, and files closer to the work take priority. That makes AGENTS.md the cheapest way to stop each task from inventing its own conventions. A useful one is short and specific:
- Where things live, for example API routes in one folder and database access only through one module.
- How every server route checks the current user and what they own.
- The exact commands for installing, building, type checking and testing.
- Rules such as never committing secrets, never editing migration files that already ran, and never weakening a test to make it pass.
I write or rewrite this file as part of a fix, because it keeps paying off long after I hand the project back.
## How should I review Codex changes before merging?
Read the diff for anything outside the task, check auth and data access by hand, and run it yourself with real configuration.
My checklist for any agent change:
- Did it change files unrelated to the task? Ask why before merging.
- Does every new route verify the user and filter data by ownership?
- Are secrets read from environment variables only?
- Did tests get stronger, or did assertions disappear?
- Does the full app still build, not just the part that changed?
Codex's own review features and automatic reviews are helpful as a first pass, and Codex Security Cloud can scan a repository for issues. Treat them as a second reviewer, not the only one. My article on how to review AI-generated code has the full checklist.
## What does it take to get a Codex-built app into production?
A host, real environment variables, a migrated database, working webhooks and a domain, all set up deliberately rather than by a task.
I start with a production build on a clean machine, which catches the errors the agent never saw. Then I set up the host, usually Vercel for Next.js or Cloud Run for other services, with separate preview and production environments, every secret configured on the host and none in the repository. Database changes go through migrations, payments get a verified webhook, and the domain, email sending and error monitoring get connected. My articles on environment variables being undefined on Vercel and on the Stripe test mode to live mode checklist cover two of the most common traps.
## How long does it take and what does it cost?
Most Codex-built apps take two to ten days to review, fix and launch, depending on how many separate problems there are.
My fix packages:
- Quick Fix, from $60, about 2 days: one bug, found and fixed with an explanation.
- Fix Plus Features, from $200, about 5 days: up to three fixes plus one small feature, for example authorization checks, an AGENTS.md with CI, and one missing screen.
- Finish and Launch, from $600, about 10 days: for apps whose core features already work, covering review of the critical paths, security, production setup, deploy and handover.
If the core workflow still needs building, I will say so and quote from my SaaS MVP packages instead.
## The bottom line
Codex can write a lot of good code quickly, but a passing cloud task ran offline and without your secrets, so it is not proof the app works. Give Codex an AGENTS.md, review every change touching auth and data, run the app with real configuration, and set up production on purpose. Add me to the repo and I will tell you what it needs to launch.`,
  },
];
