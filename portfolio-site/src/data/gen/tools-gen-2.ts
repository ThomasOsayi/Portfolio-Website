// AI-tool fix pages, generated batch 2 (Nov 23 2026).
import type { ToolFix } from '../landing';

export const toolFixesGen2: ToolFix[] = [
  {
    slug: 'figma-make',
    tool: 'Figma Make',
    h1: 'Fix your Figma Make app and take it to a real repo and host',
    metaTitle: 'Figma Make Developer: Fix, Export & Deploy Your App | Thomas Osayi',
    description: 'Built something in Figma Make that will not run locally, shows a blank page or needs real auth? I move it to GitHub, fix the code, add a backend and deploy it on your domain.',
    whatItBuilds: 'Figma Make is a prompt to app tool that turns prompts and Figma designs into functional prototypes and web apps. It generates React code you can edit in a built in code editor, publishes to a figma.site address or a custom domain, can push code one way to GitHub or download it as a zip, and can connect to Supabase for a backend.',
    problems: [
      { title: 'The downloaded code will not run locally', text: 'Some users on Figma\'s forum have reported zip downloads without a package.json or build config. I rebuild the project setup around the code so it installs, builds and runs on any machine.' },
      { title: 'The published site shows a blank page', text: 'A runtime error, a missing secret or a failed backend call can stop a React app from rendering at all. I read the browser console and network requests, then fix the actual cause.' },
      { title: 'Credits run out mid fix', text: 'Figma AI credits are monthly per seat and do not roll over, so a long prompt loop can stall a project until the reset. Fixing the code directly stops the burn.' },
      { title: 'There is no real backend or login', text: 'The app looks finished but saves nothing, or every visitor sees the same data. I add proper auth, a database schema and access rules, on Supabase or another backend.' },
      { title: 'GitHub edits get overwritten', text: 'The GitHub push from Make is one way, so changes made in the repo are replaced by the next push. I set up a clear workflow so nobody loses work.' },
    ],
    process: ['Get the code out of Make through the GitHub push or the Download code zip', 'Add the missing project setup and get a clean local build', 'Fix the blank page, data and login issues and lock down the backend', 'Deploy to Vercel or your preferred host on your domain', 'Hand over the repo with notes on how to keep working'],
    faqs: [
      { q: 'What code does Figma Make generate?', a: 'Figma Make generates React code, and Figma says it is compatible with frameworks including Next.js, Remix and Vite.' },
      { q: 'Can I export my Figma Make code?', a: 'Yes. People with a Full or Dev seat can choose Download code from File actions in the Files tab to get a zip, or push the project to a GitHub repository.' },
      { q: 'Can I keep editing in Figma Make after a developer works on the code?', a: 'Be careful. The GitHub push is one way, so the next push from Make overwrites changes made in the repo. Pick one place to edit from once a developer is involved.' },
      { q: 'Does Figma Make support a real database?', a: 'It can connect to Supabase, but Figma\'s help center says Make currently uses key value stores rather than setting up a full SQL database, which is often what needs upgrading for a real product.' },
      { q: 'Can I use my own domain?', a: 'Yes. Published Make apps get a figma.site address, and you can assign a custom domain within your plan\'s limits, or move the code to your own host.' },
      { q: 'What does it cost to fix a Figma Make app?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and takes a Make app whose core already works to a real launch from $600.' },
    ],
    guide: `## What does Figma Make actually build?
Figma Make builds a React web app from your prompts and Figma designs, with code you can open and edit inside Make.
That is the most useful fact to know if you are stuck. A Make project is not a picture of an app, it is real front end code. Figma's help center describes Make as a prompt to app tool that turns ideas and designs into functional prototypes and web apps, and its React generator page says the generated code is compatible with frameworks including Next.js, Remix and Vite. Inside Make, the Files tab lets people with a Full seat explore and edit the code, and a guidelines.md file can steer how the AI writes it.
What Make gives you, then, is a strong front end: screens that match your design, components, navigation and some interactivity. What it does not automatically give you is everything behind the screens: a properly designed database, sign in that protects data, server logic for payments or email, tests, and a deployment you control. Those gaps are what usually bring people to me.
## Why does my published Figma Make app show a blank page?
A blank page almost always means the React app hit an error before it could render, usually from a runtime error, a missing secret or a backend call that failed.
When a React app crashes during its first render, the browser shows nothing at all, which looks like a publishing problem but is a code problem. The browser developer console tells you which. Common causes I look for:
- A component that expects data from Supabase and crashes when the response is empty or an error.
- A secret or key that exists in one environment but not in the published one.
- An import that worked in Make's preview but fails in a real build.
- A route that only works when you start from the home page.
Also check that you actually updated the published version. Figma's help center says edits in Make only go live after you open the Publish modal and click Update, so the live site can lag behind what you see in the editor.
> Open the published URL, press F12 and read the first red error in the Console tab before you write another prompt. It usually names the file and the line.
## Why can I not run my Figma Make code locally?
Usually because the download is missing the project setup a normal React app needs, such as package.json and the build configuration.
Figma's help center says Download code, under File actions in the Files tab, gives you a zip of all the files in your Make file, and that viewing and downloading code needs a Full or Dev seat. Some users on Figma's community forum have reported that their zip had no package.json, tsconfig.json or vite.config file, which means npm install has nothing to install and there is no command to start the app. Whether your download includes them can depend on when and how you exported, so check first.
The fix is not complicated, but it is fiddly: create a fresh Vite or Next.js project, move the source files in, install the exact libraries the code imports, set up Tailwind or whatever styling it relies on, and fix the import paths until the build passes. That is often the first thing I do on a Make project, because nothing else can be fixed reliably until the code builds outside Make.
## Should I use the GitHub push or the zip download?
Use the GitHub push if you plan to keep editing in Make for a while, and the zip if you are moving off Make for good, but know that the GitHub push is one way.
Figma's help center describes pushing from Make to GitHub as a one way push. The first push creates a repository, later pushes update the default branch, and edits made directly in GitHub do not come back into Make and are overwritten by the next push. That is fine while you are still designing in Make. It becomes a problem the moment a developer starts fixing code in the repo, because one more push from Make can wipe those fixes.
My usual recommendation is to do a final push or download, then treat the repository as the source of truth. If you want to keep exploring designs in Make, use it for new screens and have the developer bring them across on purpose.
## Does Figma Make give me a real backend and login?
It can connect to Supabase for a backend, but what it sets up is usually a starting point, not a production data model with proper access rules.
Figma's help center says Supabase provides compute, secret storage and a Postgres database for Make files, and also that Make currently uses key value stores rather than setting up a full SQL database. Supabase's own announcement says Make can wire up email and password, magic link and social logins and use Edge Functions. That is enough for a working prototype. For a real product you typically need proper tables with relationships, row level security so each user only sees their own records, and server side checks for anything involving money or private data.
When I take over a Make app, I design the tables around what the app actually does, migrate any data worth keeping out of the key value store, write and test access policies as different users, and move secrets to the right place. My post "Is your Lovable or Bolt app leaking data? Check Supabase row level security" covers the same checks, and they apply here too.
## How do Figma Make credits affect fixing bugs?
Credits are a monthly allowance per seat that does not roll over, so a long prompt loop on one bug can use up your month before the bug is gone.
At the time of writing, Figma's help center lists monthly AI credits per Full seat of 500 on Starter, 3,000 on Professional, 3,500 on Organization and 4,250 on Enterprise, with a daily limit of 150 credits for Starter users and View seats. Credits are shared across Figma's AI features and reset monthly. When they run out, paid AI actions stop until the reset or until an admin buys more.
That changes the maths on stubborn bugs. If the same problem has survived three or four prompts, it is usually cheaper to have someone read the code than to keep spending credits on it.
## How do you take a Figma Make app to a real repo and host?
I get the code into a GitHub repository you own, make it build cleanly, fix the backend and security, then deploy it to a host like Vercel on your domain.
The steps:
- Push to GitHub or download the zip, and agree that the repo is now the source of truth.
- Add the missing project setup and get a clean production build.
- Fix the blank page and data issues, add proper auth and access rules.
- Set environment variables on the host, connect your domain and test real sign ups.
- Hand over a short write up of what changed and how to keep working.
Make's own publishing to figma.site or a custom domain is fine for a prototype. A real host gives you preview deployments, logs and server functions, which you need once the app handles payments or private data.
## The bottom line
Figma Make is very good at turning designs into a working React front end, and a weaker fit for the database, security and deployment a real product needs. Get the code into GitHub, make it build outside Make, then fix the backend and deploy it properly. Quick Fix starts from $60, Fix Plus Features from $200, and Finish and Launch from $600 for apps whose core already works. If the prototype is mostly screens, I will say so and quote from my SaaS MVP packages instead.`,
  },
  {
    slug: 'kiro',
    tool: 'Kiro',
    h1: 'Fix, finish and deploy your Kiro project',
    metaTitle: 'Kiro Developer: Fix, Review & Deploy Your Kiro App | Thomas Osayi',
    description: 'Built an app with Kiro\'s specs and agent but stuck before launch? I review the specs against the code, fix failing tasks and security gaps, and deploy it to production.',
    whatItBuilds: 'Kiro is an agentic IDE from AWS, built on Code OSS, that plans work as specs (requirements.md, design.md and tasks.md), then has an agent implement the tasks. Steering files in .kiro/steering give it project context and hooks in .kiro/hooks run commands or prompts on events like a file save. The output is a normal code repository in whatever stack you chose.',
    problems: [
      { title: 'Tasks marked done that do not really work', text: 'The task list says complete, but the feature fails with real data or real users. I test each requirement against its acceptance criteria and fix what does not pass.' },
      { title: 'Specs and code drifted apart', text: 'After many iterations the design.md no longer matches what was built. I reconcile the two so the next spec or developer starts from the truth.' },
      { title: 'Security left for later', text: 'Auth, authorization, input validation and secrets are easy to skip in a feature by feature plan. I review them across the whole app, not one task at a time.' },
      { title: 'It runs locally but has never been deployed', text: 'No production environment variables, database migrations or build pipeline. I set those up and deploy to AWS, Vercel or another host.' },
      { title: 'Credits disappearing on one stubborn bug', text: 'Kiro plans come with a monthly credit allowance. When the same bug survives repeated attempts, reading the code directly is cheaper.' },
    ],
    process: ['Get access to the repository, including the .kiro folder with specs, steering and hooks', 'Run the app and test each requirement against its acceptance criteria', 'Fix failing behavior, security gaps and drift between specs and code', 'Set up production config and deploy to your host on your domain', 'Update the specs and steering files so Kiro keeps working well afterwards'],
    faqs: [
      { q: 'What is Kiro?', a: 'Kiro is an agentic IDE from AWS, built on Code OSS so VS Code settings carry over, that plans features as specs and has an AI agent implement them.' },
      { q: 'Can I keep using Kiro after a developer fixes my project?', a: 'Yes. The code stays in your repository and I update the specs and steering files to match the fixes, so Kiro has accurate context for the next feature.' },
      { q: 'Do you need my Kiro account?', a: 'No. Access to the Git repository and any hosting or database accounts is enough. The specs, steering and hooks live in the .kiro folder in the repo.' },
      { q: 'Does Kiro deploy my app for me?', a: 'Kiro is an editor and agent, not a hosting platform, so deployment depends on the stack and host you chose. That last step is often where projects stall.' },
      { q: 'How much does Kiro cost?', a: 'At the time of writing, Kiro lists a free plan with 50 credits a month and paid plans from $20 a month for Pro with 1,000 credits, up to $200 a month for Power with 10,000 credits.' },
      { q: 'What does it cost to fix a Kiro project?', a: 'Thomas Osayi fixes one bug from $60, up to three fixes plus a small feature from $200, and takes a project whose core already works to launch from $600.' },
    ],
    guide: `## What is Kiro and how does it build apps?
Kiro is an agentic IDE from AWS that plans each feature as a written spec, then has an AI agent implement the tasks in that spec.
Kiro is built on Code OSS, the open source base of VS Code, so it feels like a familiar editor and can use your VS Code settings and Open VSX compatible extensions. The difference is the workflow. Instead of prompting for code directly, you describe a feature and Kiro produces a spec, then works through it. According to Kiro's documentation, every spec has three files:
- requirements.md (or bugfix.md for a bugfix spec): user stories with acceptance criteria. Kiro's launch post says these use EARS notation, short for Easy Approach to Requirements Syntax.
- design.md: the technical architecture, sequence diagrams and implementation considerations.
- tasks.md: a list of discrete, trackable implementation tasks.
Specs can start from requirements or from a technical design. The result is a normal repository in the stack you chose, with a .kiro folder holding the specs and other configuration. That matters, because any developer can read both the plan and the code.
## What are Kiro steering files and hooks?
Steering files are markdown files that give Kiro lasting context about your project, and hooks are automations that run a command or a prompt when something happens in a session.
Kiro's docs say workspace steering lives in .kiro/steering, with a global version in your home folder, and that the default files are product.md (purpose, users, features), tech.md (frameworks, libraries, constraints) and structure.md (file layout, naming, architecture). Each file can be included always, only for matching files, manually or automatically when a request matches its description.
Hooks are JSON files in .kiro/hooks. Each one defines a trigger, such as after a file is saved or before or after a tool is used, and an action that either runs a shell command or injects a prompt. A typical example from the docs runs a linter on TypeScript files after every save.
For me as the developer taking over, these files are a gift and a risk. They explain what you intended, but if they are out of date they also mislead the agent every time it runs.
## What problems show up in apps built with Kiro?
The usual suspects are tasks that are marked complete but do not hold up with real data, specs that have drifted from the code, and security and deployment work that no single task owned.
Specs make Kiro more structured than prompt by prompt tools, but they do not remove the usual gaps in AI written software. The issues I look for:
- Acceptance criteria that were never actually tested, only implemented.
- A design.md that describes one data model while the code uses another.
- Authorization handled per feature, so one endpoint checks ownership and the next one does not.
- Secrets in a committed .env file, or hard coded in a config file.
- No migrations, seed data or production configuration, because the app only ever ran on one laptop.
- A steering file still describing a framework or folder structure you replaced weeks ago.
None of these mean Kiro did a bad job. They are the parts of software that are easy to miss when work is split into small tasks.
## How do you review a Kiro project?
I review it requirement by requirement, checking each acceptance criterion against the running app, then look across the whole codebase for the things no task owned.
The first pass is mechanical. I clone the repo, install it, run it and read the specs. For each requirement, I try the behavior its acceptance criteria describe, including the edge cases, and note what passes and what does not. That gives a factual list of what is broken instead of a vague sense that the app is shaky.
The second pass is cross cutting: authentication and authorization on every route, input validation, error handling, secrets, database indexes and migrations, and what happens when two users act at once. Kiro organizes work by feature. Security and reliability problems usually live between features, so they need someone reading the whole app.
> Before handing a Kiro project to anyone, open tasks.md and add one line under each completed task saying whether you tested it yourself. It saves hours of guessing.
## How do you fix a Kiro app without breaking the specs?
I fix the code first, then update the matching spec, design and steering files so Kiro and any future developer start from an accurate picture.
If I change the data model, design.md gets updated. If a requirement turns out to be wrong or incomplete, I rewrite its acceptance criteria so they describe what the app now does. If the project structure changed, structure.md changes with it. Where it helps, I add hooks that run the test suite or linter after edits, so regressions show up immediately instead of at launch.
The aim is that you can keep using Kiro after I leave. A fixed app with stale specs will slowly drift back into the same problems the next time the agent works from them.
## How do you deploy a Kiro project?
I deploy it like any other codebase: production environment variables, a database with migrations, a build pipeline from GitHub and a host that suits the stack, then your domain.
Kiro is an editor, not a hosting platform, so there is no single publish button that takes your app live. That last mile is where many projects stall. Depending on what was built, I deploy a Next.js or React front end to Vercel, or use AWS services when the project was designed around them, and set up preview deployments so changes can be tested before they reach users. Then I test real sign ups, payments and emails on the production domain.
## How much do Kiro credits and a fix cost?
At the time of writing, Kiro lists a free plan with 50 credits a month and paid plans of Pro at $20 with 1,000 credits, Pro+ at $40 with 2,000, Pro Max at $100 with 5,000 and Power at $200 with 10,000, with add on credits at $0.04 each.
Those credits go quickly when the agent keeps retrying the same failing task. My packages are fixed starting prices:
- Quick Fix, from $60, about 2 days: one bug, such as a failing login or a task that never really worked.
- Fix Plus Features, from $200, about 5 days: up to three fixes plus one small feature.
- Finish and Launch, from $600, about 10 days: for apps whose core already works, covering review, fixes, security, deployment and updated specs.
If the specs describe much more than the code delivers, I will tell you and quote from my SaaS MVP packages instead.
## The bottom line
Kiro's specs, steering and hooks give an AI built app more structure than most tools, but tasks marked done still need testing, specs drift from code and nobody owns security or deployment unless someone does. Give me the repository with its .kiro folder and I will test it against its own requirements, fix what fails, deploy it on your domain and leave the specs accurate so you can keep building.`,
  },
];
