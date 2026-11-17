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
    faqs: [
      { q: 'Can I keep using Windsurf after you fix it?', a: 'Yes. A cleaner codebase actually makes the agent more reliable, because it has one clear place to change each thing.' },
      { q: 'Do you need my Windsurf account?', a: 'No. Access to the Git repository and the hosting and database accounts is enough.' },
      { q: 'What does a fix cost?', a: 'Single fixes start at $60, several fixes plus a feature at $200, and taking a stuck app to launch at $600.' },
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
    faqs: [
      { q: 'Will you rewrite what the agent built?', a: 'No. I keep what works and fix what does not. Most agent-built code is a good starting point.' },
      { q: 'Can you set it up so I keep using Claude Code safely?', a: 'Yes. Clear project instructions, tests around critical flows and a preview deploy for every change make agent work much safer.' },
      { q: 'Which stacks do you work with?', a: 'Mainly Next.js, React, TypeScript, Firebase, Supabase and Postgres, plus Stripe for payments.' },
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
    faqs: [
      { q: 'Do I have to leave Base44?', a: 'No. Many apps only need fixes and better rules. Migration makes sense when you need code ownership or features the platform cannot support.' },
      { q: 'What do you migrate to?', a: 'Usually Next.js with Firebase or Postgres, hosted on your own accounts.' },
      { q: 'Will my users lose their data?', a: 'No. A migration includes moving records and accounts, and testing before anyone is switched over.' },
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
    faqs: [
      { q: 'My code is spread across chat threads. Can you still help?', a: 'Yes. Send what you have and I put it together into one working repository first.' },
      { q: 'Should I start over?', a: 'Usually not. Most of the logic can be kept once the project is organized properly.' },
      { q: 'How long does it take?', a: 'Small apps are usually running and deployed within a few days.' },
    ],
  },
];
