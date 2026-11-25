// AI-tool fix pages, generated batch 3 (Nov 25 2026).
import type { ToolFix } from '../landing';

export const toolFixesGen3: ToolFix[] = [
  {
    slug: 'anything',
    tool: 'Anything',
    h1: 'Fix your Anything app and get it live on the web and the App Store',
    metaTitle: 'Anything (Create.xyz) App Developer: Fix & Launch Your App | Thomas Osayi',
    description: 'Built an app in Anything (formerly Create.xyz) that loops on errors, breaks sign-in or stalls before the App Store? I fix the code, secure the backend and launch it.',
    whatItBuilds: 'Anything, formerly Create.xyz, is an AI app builder for web and mobile apps. Its FAQ says web apps use React and Next.js, its docs say mobile apps are Expo (React Native), and each project gets development and production PostgreSQL databases on Neon, serverless functions, built-in user accounts, and publishing to a created.app address, a custom domain or the App Store.',
    problems: [
      { title: 'Each fix breaks something else', text: 'Some reviewers describe credits spent on fixes that broke working parts of the app. I read the code directly, find the real cause and fix it once.' },
      { title: 'Google or Facebook sign-in fails after publishing', text: 'Anything\'s docs say these logins need a custom domain and matching callback URLs and credentials. I set up the domain, the OAuth apps and the redirects so they match exactly.' },
      { title: 'Functions anyone can call', text: 'Anything\'s docs say functions are public by default. I add auth checks so each function only returns the data the signed-in user is allowed to see.' },
      { title: 'The mobile build will not reach the App Store', text: 'Apple account status, agreements and signing errors like "Team and Provider must match" stop a submission. I work through them with you until the build is in review.' },
      { title: 'Features the agent says are done but are not', text: 'Emails that never send, scheduled jobs that never run and payments that never update the account. I test each flow end to end and finish what is missing.' },
    ],
    process: ['Get access to the project and download the code from the Code tab', 'Reproduce every issue on the web preview and a real phone', 'Fix security and sign-in first, then data, payments and the remaining bugs', 'Publish to your custom domain and submit the mobile build if needed', 'Hand over the code, notes on what changed and how to keep building'],
    faqs: [
      { q: 'Is Anything the same as Create.xyz?', a: 'Yes. Create.xyz relaunched as Anything in 2025, and its docs and pricing now live under the Anything name.' },
      { q: 'What code does Anything generate?', a: 'Anything\'s FAQ says web apps use React and Next.js, and its mobile docs say mobile apps are generated as Expo (React Native) code, with PostgreSQL on Neon for the database.' },
      { q: 'Can I export my code from Anything?', a: 'Yes. Anything\'s docs say you can open the Code tab and click Download Project to get a zip, and at the time of writing GitHub sync is listed as coming soon.' },
      { q: 'Do I need a paid Anything plan to keep building?', a: 'At the time of writing, Anything\'s docs say building requires a paid plan, with Pro starting at $19 a month billed annually or $24 billed monthly.' },
      { q: 'Can a developer fix my app without me leaving Anything?', a: 'Often yes. Many fixes can be made in the project itself, and when a problem needs more control, the downloaded code can be moved to your own repo and host.' },
      { q: 'What does it cost to fix an Anything app?', a: 'Thomas Osayi fixes one bug from $60, handles up to three fixes plus a small feature from $200, and takes an Anything app whose core already works to launch from $600.' },
    ],
    guide: `## What does Anything actually build?
Anything builds full-stack web and mobile apps from prompts: React and Next.js on the web, Expo (React Native) on mobile, with a PostgreSQL database, functions and user accounts wired in.
Anything is the product formerly called Create.xyz. It relaunched under the new name in 2025, and its docs now describe what each project contains. Its FAQ says web apps use React and Next.js. Its mobile docs say mobile apps are Expo (React Native) code, previewed on a phone through Expo Go, and that web and mobile share the same backend. Every project gets a development and a production database on PostgreSQL through Neon, and publishing pushes the schema to production while keeping the data separate.
On top of that sit serverless functions for backend logic, built-in user accounts with email and password sign-in, secrets stored in project settings, and, on the Pro plan, payments through Stripe and RevenueCat. Apps publish to a created.app address by default, to a custom domain on a paid plan, or to the App Store.
That is a lot of real infrastructure, which is good news when something breaks: there is actual code and an actual database to fix, not a black box.
## Why does my Anything app keep breaking when I ask it to fix something?
Because the agent changes code it cannot fully see the consequences of, so a fix in one place often breaks something that was working somewhere else.
This is the most common reason people look for help with any AI builder, and Anything is no exception. Some reviewers on Trustpilot and Product Hunt describe spending credits on repeated fixes, working parts of an app breaking while another issue was fixed, and trouble getting admin dashboards and logins right. When The Register tested the 1.0 release in August 2025, its sample app did not work out of the box.
Once you are in that loop, more prompting usually costs more than it saves. What works is reading the actual error. Open the browser console on the published app, check the function logs, and find the first error, not the last one. Most loops come from one root cause: a database column the code expects but the schema does not have, a function that assumes a user is signed in, or a piece of state that is undefined on first load.
> Before you send another fix prompt, write down exactly what you clicked and what you expected. If you cannot describe the bug in two sentences, the agent cannot fix it either.
## Why does Google or Facebook sign-in fail on my published Anything app?
Usually because the app is still on the default created.app domain, or the callback URL, domain and credentials do not match exactly.
Anything's docs say Google and Facebook sign-in require a custom domain on the published app, which in turn requires a paid plan, and that you supply your own client credentials from Google and Meta. The docs list common causes for "Access Blocked: This app's request is not valid": a wrong client ID or secret, a domain that is not listed as an authorized JavaScript origin, or a URL missing https or the www prefix. Google's "App not verified" warning is expected while you are testing and goes away only after Google verifies the app.
There is also a mobile catch. At the time of writing, Anything's docs list Sign in with Apple as coming soon and advise against adding Google or Facebook sign-in to iOS builds until it is available. If your plan depends on social login on iPhone, decide that before you submit.
## Are my Anything functions and data secure?
Not automatically, because Anything's docs say functions are public by default, so each one needs its own check of who is calling it.
A function that returns "all orders" or "this user's profile" will answer anyone who knows its URL unless the code checks the signed-in user first. This is the first thing I audit on any Anything project. For each function I ask three questions: does it require a signed-in user, does it only return rows that belong to that user, and does it validate what it is sent.
The second thing is secrets. Anything stores them in project settings rather than in code, which is right, but I still search the code for keys pasted in directly during a long prompting session. The third is the two databases. Because publishing pushes the schema but not the data, test accounts created in development will not exist in production, which surprises a lot of people on launch day.
## Why is my Anything mobile app stuck before the App Store?
Most often because the Apple Developer account, agreements or signing setup is not ready, not because the app itself is broken.
Anything's docs list what Apple needs: an active Apple Developer membership (new accounts can take days and may need ID verification), Admin or Account Holder access, active agreements, and the Paid Apps Agreement with banking and tax details if you plan to charge. A common error is "Team and Provider must match", which means the team that signed the build is not the provider in App Store Connect. Builds go through TestFlight before review.
Google Play publishing is in beta at the time of writing, and Anything uploads to the internal testing track as a draft. Google also requires a privacy policy, a data safety form and a content rating. On the testing side, camera, location and other device features do not work in the web preview, so test those on a real phone through Expo Go, signed in to the same Expo account as the builder.
## Can I take my code out of Anything?
Yes, Anything's docs say you can download your project's source code from the Code tab as a zip, and its FAQ says you own the code and content you generate.
At the time of writing, GitHub sync is listed as coming soon, so the docs suggest downloading the code and pushing it to a GitHub repository yourself. The database can be exported separately as a zip of SQL dumps. That gives you two real options. You can keep building in Anything and let a developer make targeted fixes there, or you can move the app to your own repo and host when you need things Anything does not support well, such as custom libraries or native modules, which one reviewer said could not be installed.
Moving out is a real project, not a button. The exported code expects Anything's environment, so environment variables, auth, file storage and function hosting all need to be set up again. I only recommend it when staying costs more than leaving.
## What does Anything cost, and when is a developer cheaper?
At the time of writing, Anything's docs say building requires a paid plan, with Pro at $19 a month billed annually or $24 monthly for 20k credits, and Max tiers from $199 a month billed annually.
Monthly credits refill on your billing date and expire at the end of the cycle, while top-off credits do not expire, according to the docs. Credits are spent on every building message, so a long fix loop has a direct cost. If you have been sending prompts at the same bug for days, a developer usually comes out cheaper. A single bug fixed in the code is often a Quick Fix, and an app with working core features and a handful of broken flows is the kind of job Finish and Launch is for.
## The bottom line
Anything gives you real React, Next.js and Expo code on top of a real PostgreSQL database, which means a stuck project is usually fixable. Find the first error, secure every function, set up your custom domain and sign-in carefully, get the Apple account ready early, and keep a downloaded copy of your code. If you would rather hand it over, the fix your Lovable app page explains how I approach AI-built projects, and the same process applies here.`,
  },
  {
    slug: 'gemini-cli',
    tool: 'Gemini CLI',
    h1: 'Fix the code Gemini CLI wrote and finish your project',
    metaTitle: 'Gemini CLI Code Fix: Finish & Ship Your Project | Thomas Osayi',
    description: 'Project built with Gemini CLI that half works, broke after a yolo run or stalled when Google moved users to Antigravity CLI? I review the code, fix it and ship it.',
    whatItBuilds: 'Gemini CLI is Google\'s open source AI agent for the terminal, released under the Apache 2.0 license. It reads and edits files in your project, runs shell commands, can search the web with Google Search grounding, connects to MCP servers and takes project instructions from GEMINI.md files. It writes code in whatever stack your project uses, so the result is your own repo rather than a hosted app.',
    problems: [
      { title: 'A refactor that stopped halfway', text: 'The agent renamed or moved code in some files but not others, so the build fails with missing imports. I trace every reference and finish the change consistently.' },
      { title: 'Damage from auto-approved runs', text: 'With the yolo approval mode, every file edit and shell command runs without asking. I recover what I can from git and checkpoints and repair the rest.' },
      { title: 'A stale or conflicting GEMINI.md', text: 'Instructions in a global or parent GEMINI.md file point the agent at the wrong stack or conventions. I clean up the context files and the code that followed them.' },
      { title: 'Quality dropped mid-session', text: 'Some users have reported sessions switching from a Pro model to a Flash model after hitting quota. I review the code written after the switch with extra care.' },
      { title: 'Access changed under you', text: 'Google moved free and Google AI Pro and Ultra users from Gemini CLI to Antigravity CLI on June 18, 2026. Your code is still yours, and I can finish it either way.' },
    ],
    process: ['Get access to the repo and any GEMINI.md and settings files', 'Run the build and tests and list everything that is broken', 'Fix the build, then security and data handling, then the remaining bugs', 'Deploy to your host and test the real user flows', 'Hand over a clean repo, an updated GEMINI.md and notes on what changed'],
    faqs: [
      { q: 'Is Gemini CLI still available?', a: 'For some users. Google says that on June 18, 2026 it stopped serving free Code Assist for individuals and Google AI Pro and Ultra users, while organizations with Code Assist Standard or Enterprise and people using paid Gemini API keys keep access.' },
      { q: 'Is Gemini CLI open source?', a: 'Yes. Gemini CLI launched in June 2025 under the Apache 2.0 license, and Google has said the repository remains available to the community under that license.' },
      { q: 'What is GEMINI.md?', a: 'GEMINI.md is a context file Gemini CLI reads from your home folder and your project folders, and its contents are sent to the model with every prompt as standing instructions.' },
      { q: 'Can I undo changes Gemini CLI made?', a: 'If checkpointing was enabled in settings, the /restore command can roll files back to before a tool ran. Otherwise git history is your main way back, which is why committing before each session matters.' },
      { q: 'Should I switch to Antigravity CLI?', a: 'If you lost Gemini CLI access, it is Google\'s suggested path, but Google says there is no one to one feature parity at launch, so test your context files and tools after moving.' },
      { q: 'What does it cost to fix a project built with Gemini CLI?', a: 'Thomas Osayi fixes one bug from $60, handles up to three fixes plus a small feature from $200, and takes a project whose core already works to launch from $600.' },
    ],
    guide: `## What is Gemini CLI, and can I still use it?
Gemini CLI is Google's open source AI coding agent for the terminal, and since June 18, 2026 it is only available to some users.
Google launched Gemini CLI on June 25, 2025 under the Apache 2.0 license. At launch, signing in with a personal Google account gave a free allowance of 60 model requests per minute and 1,000 per day. It runs in your terminal, reads and edits files in your project, runs shell commands, can ground answers with Google Search and connects to MCP servers.
On May 19, 2026 Google announced it was transitioning Gemini CLI to a new tool, Antigravity CLI. According to Google's developer blog, from June 18, 2026 Gemini CLI stopped serving requests for Google AI Pro and Ultra subscribers and for people using Gemini Code Assist for individuals at no charge. Organizations with a Gemini Code Assist Standard or Enterprise license keep access, and Gemini CLI remains usable with paid Gemini API keys. Gemini CLI's own quota page, at the time of writing, says unpaid tier and Google One users were moved to Antigravity CLI on that date. The open source repository stays available under Apache 2.0.
None of that touches the code already in your repo. Whatever Gemini CLI wrote is ordinary code in your project, and it can be fixed and finished with any tool or by hand.
## What is Gemini CLI good at, and where does it struggle?
It is good at reading a whole codebase and making broad changes quickly, and it struggles with knowing when a change is actually finished and correct.
The strengths are real. A large context window means it can take in many files at once, explain unfamiliar code and draft features across several layers. It can run your build and tests and react to the output, and in non-interactive mode it can be scripted.
The weak spots are the ones every terminal agent shares. It only knows what is in its context and what its tools return, so it can confidently edit a file based on a wrong assumption about another one. It tends to declare success after a build passes, even when no test covers the behavior you asked for. And because it acts directly on your files, a mistake lands in your project, not in a sandbox, unless you set one up.
## What problems show up most in code Gemini CLI wrote?
The problems I look for first are half-finished changes, logic that compiles but is wrong, and security shortcuts taken to make an error go away.
When I review a project built with a terminal agent, these are the patterns I check:
- Refactors that touched some files and not others, leaving broken imports or two versions of the same helper.
- New dependencies added to fix one error, sometimes duplicating a library already in the project.
- Tests changed to match broken behavior instead of fixing the code.
- Validation or auth checks removed or loosened because they were causing a failing request.
- Secrets or API keys written into code or config files during debugging.
- Error handling that swallows exceptions, so failures disappear silently.
None of these are unique to Gemini CLI, but they are easy to miss because the code looks tidy and the build is green.
## How does GEMINI.md shape the code it writes?
GEMINI.md files are standing instructions that Gemini CLI sends to the model with every prompt, so a wrong line in one of them steers every change.
According to the Gemini CLI docs, it reads a global file at ~/.gemini/GEMINI.md that applies to all your projects, searches your workspace folders and their parent folders for GEMINI.md files, and loads files in subfolders when a tool touches those folders. It concatenates everything it finds and sends it with each prompt. The /memory show command displays the combined result, and /init can generate a starting GEMINI.md for a project.
That is powerful and easy to forget. A global file written for a Python project can push Python habits into a TypeScript app. A parent folder's file can impose conventions from a different repo. When code keeps coming out in a style you did not ask for, run /memory show before anything else.
> Keep the project GEMINI.md short and factual: the stack, the commands to build and test, folders not to touch and the rules you actually care about. Long essays get ignored.
## Why did my session switch models or get worse partway through?
Usually because a quota was reached and the session moved to a different model, or because the conversation grew too long.
The model flag defaults to auto. Some users on Google's developer forum reported in October 2025 that their sessions switched from Gemini 2.5 Pro to a Flash model after only a handful of prompts because of quota, and that sessions then failed with errors. If code quality dropped suddenly in your history, check which model was in use. The /stats command shows session and model usage, and /model lets you set the model explicitly. Long sessions also degrade, and /compress replaces the chat history with a summary to save tokens. Starting a fresh session for each task is often cleaner than compressing.
## How do I recover after an auto-approved run went wrong?
Start with git, then checkpoints, and only then try to repair by hand.
Gemini CLI's approval modes are default, auto_edit, yolo and plan, and the older yolo flag is marked deprecated in favor of the approval mode setting. In yolo mode every action is approved automatically, including shell commands. The sandbox option is off by default. If checkpointing was enabled in your settings, /restore can roll project files back to before a specific tool call; the docs note it is only available when checkpointing is configured. If neither was set up, git history is your safety net, which is why I commit before every agent session.
## Should I move to Antigravity CLI or get the project finished another way?
If you lost access and want to keep working with an agent, Antigravity CLI is Google's suggested path, but test it before trusting it on a project in progress.
Google says Antigravity CLI carries over agent skills, hooks, subagents and extensions, now called plugins, without one to one feature parity at launch. Check that your context files, custom commands and MCP servers behave the same after the move. If the project is close to done and you mostly need it working, it may be faster to have a developer finish it directly. A single broken flow is often a Quick Fix, and a project whose core features work but still needs cleanup, security fixes and a real deployment fits Finish and Launch.
## The bottom line
Gemini CLI writes real code into your own repo, so changes in Google's plans do not strand your project. Check your GEMINI.md files, look for half-finished changes and loosened security, use git before every session, and decide on Antigravity CLI with a test run rather than a leap. If you want another set of eyes, the fix your Lovable app page explains how I review AI-built code before launch.`,
  },
];
