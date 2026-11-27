// Generated articles, batch 23 (Nov 27 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-27';

export const postsGen23: Post[] = [
  {
    slug: 'github-actions-failing-after-ai-changes',
    title: 'GitHub Actions failing after an AI tool changed your code? How to read the log and fix it',
    description: 'GitHub Actions failing after Lovable, Bolt or Cursor edited your code? Read the failing step, fix lockfile drift, Node versions, missing secrets, type errors and tests.',
    date: d,
    keywords: ['GitHub Actions failing', 'npm ci lockfile out of sync', 'GitHub Actions Node version', 'GitHub Actions secrets empty', 'CI failing after AI changes'],
    service: 'fix-ai-built-app',
    shortAnswer: "Open the failed run, expand the first red step and read the last 30 lines above Process completed with exit code 1. After an AI tool edits code, the cause is almost always one of five things: a package.json and package-lock.json that no longer match, a different Node version on the runner, a secret the workflow cannot see, type or lint errors the preview never checked, or a test the change broke.",
    takeaways: [
      "The useful error is in the first failed step, usually a few lines above the exit code line, not in the summary at the top of the run.",
      "npm ci refuses to install when package.json and package-lock.json disagree, which is the most common failure after an AI tool adds a package without updating the lockfile.",
      "If a workflow does not set a Node version, the runner uses its default, which may not match the version the app was built and tested with.",
      "A secret that is not set evaluates to an empty string in GitHub Actions, so a missing secret often shows up later as a confusing build or API error.",
      "AI tool previews usually run a dev server that skips type checking, so the first strict tsc or lint run happens in CI.",
    ],
    faqs: [
      { q: 'Why does my app work in the Lovable or Bolt preview but fail in GitHub Actions?', a: 'The preview runs a development server that is forgiving about type errors and unused code, while CI runs a clean install and a production build, often with type checking and lint, on a fresh Linux machine.' },
      { q: 'Should I just delete package-lock.json to make npm ci pass?', a: 'No, regenerate it with npm install on your machine, commit the updated lockfile, and keep npm ci in the workflow so CI installs exactly what you tested.' },
      { q: 'Why are my secrets empty in a pull request workflow?', a: 'GitHub does not pass repository secrets to workflows triggered from a forked repository, except GITHUB_TOKEN, and any secret name that is not set evaluates to an empty string.' },
      { q: 'Can I turn off the failing check so I can merge?', a: 'You can, but the check is usually catching a real problem that will break the production build later, so fix the cause or at least confirm it is harmless before you skip it.' },
      { q: 'Can Thomas Osayi fix a failing GitHub Actions workflow for me?', a: 'Yes, a single failing workflow fits the Quick Fix package from $60 with about 2 days of turnaround, and a red pipeline with several separate causes fits Fix Plus Features from $200.' },
    ],
    sources: [
      { title: 'Building and testing Node.js', publisher: 'GitHub Docs', url: 'https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs' },
      { title: 'Using secrets in GitHub Actions', publisher: 'GitHub Docs', url: 'https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets' },
      { title: 'npm ci', publisher: 'npm Docs', url: 'https://docs.npmjs.com/cli/v11/commands/npm-ci' },
    ],
    body: `A red X on a commit is one of the most common things I see after someone lets an AI tool loose on a repository. Lovable, Bolt, Cursor or Claude Code made a change, the preview looked fine, the change synced to GitHub, and then the checks failed with an email that says almost nothing. The good news is that the failure is nearly always mechanical, and the log tells you exactly where to look if you know how to read it.

This post walks through how I read a failing GitHub Actions run and the five causes I check first, with the actual error messages so you can match yours. If the same commit also fails on Vercel, read this alongside "Vercel build failed? The most common Next.js deploy errors and fixes", because the root cause is often shared.

## How do I find the real error in a failed GitHub Actions run?
Open the run, click the failed job, expand the first step with a red icon, and read upward from the line that says Process completed with exit code 1.

From the commit, the red X links to the checks. Click Details next to the failing one, and you land on the job view. Each step in the workflow file (checkout, setup Node, install, lint, build, test) appears as its own collapsible section. Only one step actually failed. Everything after it was skipped, so ignore those.

Inside the failed step, scroll to the bottom. The last line is almost always Process completed with exit code 1 (or another non-zero number). That line is GitHub telling you the command failed. It is not the cause. The cause is usually 5 to 40 lines above it, where npm, tsc, ESLint, Vite, Next.js or your test runner printed its own error.

- Look for words like error, ERR!, failed, Cannot find module, or a file path with a line number.
- Ignore warnings that appear before the error unless they mention the same file.
- If the log is long, use the search box at the top of the job log and search for error.

> Copy the full error block, not just the last line, before you ask an AI tool to fix it. A tool that only sees "exit code 1" will guess, and guessing is how one failure turns into three.

## Why does npm ci fail when npm install works on my machine?
Because npm ci installs exactly what package-lock.json records and refuses to run if that file does not match package.json, while npm install quietly updates the lockfile for you.

The npm documentation is direct about this: if dependencies in the package lock do not match those in package.json, npm ci will exit with an error. It also never writes to package.json or the lockfile. That strictness is the point. CI should install the exact versions you tested.

The error usually starts with npm ci can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync. AI tools cause this constantly. The tool adds a dependency to package.json in its editor, but the lockfile in the repository is never regenerated, or two tools touch the project and one uses a different package manager.

The fix:
- Pull the latest code to your machine.
- Run npm install once. This updates package-lock.json to match.
- Commit both files together and push.

Related failures in the same step: ERESOLVE unable to resolve dependency tree means two packages want incompatible versions of a shared peer (often React), and setup-node's cache option can fail with a message that the dependencies lock file is not found if there is no lockfile at all. If you see a pnpm-lock.yaml or bun.lockb next to package-lock.json, pick one package manager, delete the other lockfile, and make the workflow match.

## Is the Node version on the runner different from mine?
Often, yes, because a workflow that does not set a Node version uses whatever default the runner image ships with, and that can differ from the version you or the AI tool used.

GitHub's Node.js guide says that if you do not specify a version, GitHub uses the environment's default Node.js version. The recommended setup is the setup-node action with a node-version input, such as 20.x to track the latest release in that major line. Its examples use actions/checkout@v6 and actions/setup-node@v7 at the time of writing.

Symptoms of a version mismatch:
- SyntaxError on modern syntax in a dependency, meaning the runner's Node is older than the package expects.
- npm warn EBADENGINE, meaning a package's engines field asks for a different Node.
- A build tool that refuses to start and names a minimum Node version in its error.

The fix is to pick one version and pin it everywhere. Check what you run locally with node -v, set the same major version in the workflow's setup-node step, and add an engines field to package.json so the mismatch is visible next time. If your hosting provider has its own Node setting (Vercel and Netlify both do), set it to the same major version so CI and production agree.

## Why are my secrets empty in the workflow?
A secret that has not been set evaluates to an empty string, and secrets are not passed at all to workflows triggered from a forked repository, so the workflow runs without the value and fails somewhere downstream.

This one is sneaky because the error rarely says "missing secret". Instead you see a build that crashes on undefined, an API returning 401 Unauthorized, or a Supabase or Firebase client complaining about an invalid URL or key. The workflow found nothing, substituted an empty value, and carried on.

What I check:
- Settings, Secrets and variables, Actions in the repository. Is the secret actually there, with the exact name the workflow uses? Names are case sensitive.
- Is it a repository secret or an environment secret? Environment secrets only appear to a job that declares that environment.
- Was the run triggered by a pull request from a fork, or by Dependabot? GitHub's docs say secrets other than GITHUB_TOKEN are not passed to the runner in those cases.
- Is the secret used in an if condition? The docs say secrets cannot be referenced directly in if conditionals. Map it to a job level environment variable first.

AI tools often add a new environment variable to the app code (say, a new STRIPE_SECRET_KEY) without telling you it also has to exist in GitHub and in your host. "Environment variables undefined on Vercel? Every cause and fix" covers the hosting side of the same problem.

## Why do type and lint errors only show up in CI?
Because most AI tool previews run a development server that compiles each file quickly without a full type check, while CI runs tsc, ESLint or a production build that checks every file.

A Vite dev server, which is what Lovable and Bolt projects typically use, strips TypeScript types and serves the result. It does not stop on a type error. Many Vite React templates run tsc before vite build in the build script, so the first full type check happens when CI runs npm run build. The same is true for unused imports flagged by a strict ESLint config.

Common messages:
- error TS2322: Type 'string | undefined' is not assignable to type 'string'. The AI added a value that might be missing and passed it to something that requires it.
- error TS2307: Cannot find module '@/components/Thing'. The import path or alias does not resolve, often after a file was renamed.
- Module not found with a file that clearly exists. Linux runners are case sensitive, so Header.tsx and header.tsx are different files there but not on a default macOS setup.

Fix these properly rather than sprinkling any or ts-ignore over them. A type error is often an honest warning that a value can be undefined at runtime, which is the same bug your users will hit.

## What if the tests are what is failing?
Then the AI change most likely broke behavior a test was protecting, or the test depends on something the runner does not have, like a network service, a time zone or a seed database.

Read the test output for the test name and the assertion that failed: expected this, received that. Run that single test locally. If it fails locally too, the change broke it, and you need to decide whether the code or the test is wrong. AI tools sometimes "fix" a failing test by changing the expected value to match the new output, which hides the bug instead of fixing it. Check that diff carefully.

If the test passes locally but fails in CI, look for environment differences:
- Tests that call a real API need either a secret in CI or a mock.
- Date and time tests can fail because runners default to UTC.
- Tests that rely on order or shared state can pass alone and fail together.

If the project has no tests at all and the workflow still fails at a test step, the AI may have added a test script that points at nothing. "How to add tests to an AI-generated app, and what to test first" explains which few tests are worth having before launch.

## How do I reproduce the CI failure on my own machine?
Run the same commands the workflow runs, in the same order, from a clean install, and you will see the same error in a few minutes.

Open the workflow file in .github/workflows and copy the run lines. For a typical Node project that means deleting node_modules, running npm ci, then npm run lint, npm run build and npm test. Make sure your local Node major version matches the workflow's node-version. If the failure involves secrets, create a local .env with the same names but never commit it.

Here is an illustration, a made-up project rather than a client. A founder's Bolt app for a dog walking service synced to GitHub, and every push failed. The failed step was npm ci, with the in sync error. Bolt had added a date picker library to package.json, but the lockfile was from the week before. Running npm install locally and committing the lockfile fixed install. The next run failed at build with TS2322 in BookingForm.tsx, because the new picker could return null. A three line null check fixed it. Total time was under an hour, and both errors were in the log the whole time.

## When should I stop and get help?
Get help when you have fixed the first error and a new, unrelated one appears each time, or when the failure is in a step you do not understand, like a deploy job, a database migration or signing credentials.

A chain of new errors is normal for one or two rounds. Fixing the install error lets the build run for the first time, which reveals the type errors that were always there. But if you are on round five, the AI tool may be making changes that cause new failures faster than you can fix them. At that point, stop asking it for fixes, roll back to the last green commit (the post "How to undo broken AI changes with git (and Lovable or Bolt history)" covers how), and work forward one change at a time.

For pricing context, one failing workflow with a single cause fits my Quick Fix package from $60 with about 2 days of turnaround. A pipeline with several independent problems (lockfile, Node version, type errors and a missing secret) fits Fix Plus Features from $200 over about 5 days. If the app also needs to be finished and launched, that is the Finish and Launch package from $600.

## The bottom line
A failing GitHub Actions run after AI changes looks scary, but the log almost always names the problem. Find the first failed step, read just above the exit code line, and match it against the usual suspects: a lockfile out of sync with package.json, a different Node version, a secret that is not set or not passed, type and lint errors that the preview skipped, or a broken test.

Fix the cause rather than the symptom. Regenerate the lockfile instead of deleting it, pin Node instead of hoping, add the secret instead of hardcoding it, and fix the type error instead of silencing it. Once the pipeline is green, keep it green by asking your AI tool to run the same build and test commands before you accept a change.`,
  },
  {
    slug: 'nextjs-server-actions-not-working',
    title: 'Next.js Server Actions not working? Causes and fixes for Next.js 16',
    description: 'Next.js Server Actions not working? Fix missing use server, client calls, stale pages after revalidateTag, the 1MB body limit, redirect in try/catch and auth checks.',
    date: d,
    keywords: ['Next.js Server Actions not working', 'use server not working', 'revalidatePath not working', 'Server Action body exceeded 1mb', 'redirect inside try catch Next.js'],
    service: 'fix-ai-built-app',
    shortAnswer: "Most broken Server Actions come down to a missing or misplaced 'use server' directive, an action called from a client component the wrong way, a cache update that does not trigger a re-render (revalidateTag with a stale-while-revalidate profile), the default 1MB request body limit, or redirect called inside a try block. Check those in that order and you will usually find it.",
    takeaways: [
      "A Server Action needs the 'use server' directive at the top of its file or the top of the function, and client components can only import actions from a separate file marked 'use server'.",
      "In Next.js 16, revalidateTag with a stale-while-revalidate profile does not re-render the page in the action response, so use updateTag, revalidatePath or refresh when the user must see their change immediately.",
      "Server Action requests are capped at 1MB by default, and larger uploads need experimental.serverActions.bodySizeLimit or a different upload path.",
      "redirect works by throwing, so calling it inside a try block lets your catch swallow it.",
      "Every Server Action is a public POST endpoint, so check authentication and ownership inside the action itself.",
    ],
    faqs: [
      { q: 'Why does my Server Action run but the page does not update?', a: 'The action probably did not invalidate the cached data the page reads, or it used revalidateTag with a stale-while-revalidate profile, so call updateTag, revalidatePath or refresh after the mutation.' },
      { q: 'What does "Failed to find Server Action" mean?', a: "It usually means a browser still running an older deployment called an action ID that the new deployment no longer has, and a page refresh fixes it for that user." },
      { q: 'Can I define a Server Action inside a client component?', a: "No, a client component has to import the action from a separate file that starts with 'use server', or receive it as a prop from a server component." },
      { q: 'How do I upload files larger than 1MB with a Server Action?', a: 'Raise experimental.serverActions.bodySizeLimit in next.config.js for moderate sizes, or upload large files directly from the browser to storage with a signed URL and send only the file path to the action.' },
      { q: 'Can Thomas Osayi fix broken Server Actions in my AI-built Next.js app?', a: 'Yes, one broken action is a Quick Fix from $60 with about 2 days of turnaround, and several broken forms plus an auth review fits Fix Plus Features from $200.' },
    ],
    sources: [
      { title: 'Server Actions and Mutations', publisher: 'Next.js', url: 'https://nextjs.org/docs/app/guides/server-actions' },
      { title: 'use server directive', publisher: 'Next.js', url: 'https://nextjs.org/docs/app/api-reference/directives/use-server' },
      { title: 'redirect', publisher: 'Next.js', url: 'https://nextjs.org/docs/app/api-reference/functions/redirect' },
    ],
    body: `Server Actions are one of the nicest parts of the Next.js App Router: write an async function, mark it as server only, pass it to a form, and the mutation, the cache update and the re-rendered page all come back in one request. They are also one of the places where AI-generated Next.js code breaks most quietly. The button does nothing, the form submits but the list does not change, or production throws an error that never appeared locally.

I checked everything below against the current Next.js documentation (the version 16 docs, which also call middleware Proxy now). I have grouped the fixes by symptom, because "not working" usually means one of five different things.

## Is the 'use server' directive missing or in the wrong place?
If an action does nothing or throws an error about passing functions to client components, check that 'use server' is the very first line of the actions file, or the first line inside the function body.

The Next.js docs describe two placements. At the top of a file, it marks every exported function in that file as a Server Function. Inline, at the top of an async function, it marks just that function. It has to be the first statement. An import above it, or the directive written after a comment block that contains code, means the compiler does not treat the file as server code.

Things AI tools get wrong here:
- Putting 'use server' in a file that also exports constants, types or non-async helpers. Keep the actions file to async functions only.
- Writing 'use client' and 'use server' in the same file.
- Defining an inline action with 'use server' inside a component file that starts with 'use client'. That is not allowed. The inline form only works inside server components.
- Assuming 'use server' makes a file private. It does the opposite. It creates an endpoint the browser can call.

A quick test is to add a console.log as the first line of the action. If the log appears in your terminal, not the browser console, the action is running on the server and the problem is further along.

## Am I calling the action from a client component correctly?
A client component must import the action from a separate file that starts with 'use server', then call it through a form action, a button formAction, or inside startTransition from an event handler.

The Next.js docs say that to use Server Functions in client components, you create them in a dedicated file with the directive at the top, and import them. The alternative is a server component that defines the action and passes it down as a prop.

How you invoke it matters too. A form with action set to the function is the simplest, and works even before JavaScript loads. From an onClick handler, wrap the call in startTransition (or use useActionState) so React tracks the pending state and applies the returned UI.

Two more client side traps:
- Next.js dispatches Server Actions one at a time per client. The docs warn not to rely on Promise.all to run several actions in parallel from the browser. If you need parallel work, do it inside one action.
- Arguments must be serializable. Passing a class instance, a function or a DOM event to an action fails. Pass plain values or FormData.

If your AI tool generated a fetch call to an API route next to a Server Action that does the same thing, pick one. Two paths for the same mutation is how bugs hide.

## Why does the page not update after the action runs?
Because the action changed the data but did not tell Next.js which cached data or route to refresh, or it used revalidateTag in a way that deliberately does not re-render right away.

The Server Actions guide is precise here. The response includes a fresh render of the current route when the action calls updateTag, revalidatePath, refresh, sets or deletes a cookie, calls redirect, or calls revalidateTag with a profile that expires immediately. An action that does none of these returns only its value, and the current route is not re-rendered.

The catch that trips people up is revalidateTag. In Next.js 16, revalidateTag takes a cache life profile such as 'max'. With a stale-while-revalidate profile, it marks the tag for a background refresh. Subsequent reads get the stale value while fresh data loads, and the action response does not include a re-render. Your data did save. The user just does not see it until a later read.

### Which one should I use?
- updateTag: the user needs to see their own change immediately (read your own writes). Server Actions only.
- revalidatePath: one route is affected and tags are overkill.
- revalidateTag with a profile: background freshness for content other people will see later.
- refresh: the page depends on state outside the cache, and you just changed it.

If an AI tool upgraded you from an older Next.js version, check for revalidateTag calls with a single argument. That older pattern does not express the same behavior under the new API.

## Why do I get "Body exceeded 1mb limit"?
Server Action requests are capped at 1MB by default, so a form that sends a photo, a PDF or a large JSON payload fails before your code runs.

The Next.js docs list this as one of the framework protections: action requests are capped at 1MB by default, configurable with experimental.serverActions.bodySizeLimit in next.config.js. Their example raises it to 2mb. The configuration API under experimental.serverActions is still marked experimental, even though Server Actions themselves have been stable since Next.js 14.

Raising the limit is fine for modest uploads, like a profile photo resized in the browser first. For anything larger, I do not push files through a Server Action at all. The pattern I use is to upload the file straight from the browser to storage (Supabase Storage, Firebase Storage or S3) with a signed or rule-protected upload, then call the action with only the resulting file path. That keeps the action small and fast, and it avoids hitting your host's own request size limits on top of the Next.js one. If uploads are failing on Supabase in particular, "Supabase storage upload not working? Fix RLS, bucket, size and file type errors" covers the storage side.

> Your host may have a request size limit of its own that is separate from the Next.js setting. Raising bodySizeLimit does not change it, so test large uploads on a real preview deployment, not only on localhost.

## Why does redirect not work inside my try/catch?
Because redirect works by throwing a special NEXT_REDIRECT error, and a catch block that catches everything swallows it, so the redirect never happens.

The redirect reference says it plainly: in Server Actions and Route Handlers, redirect should be called outside the try block when using try/catch. AI generated actions very often wrap the whole function body in try/catch, with a redirect at the end of the try, and a catch that returns an error message. The result is a form that saves the data, shows "Something went wrong", and stays on the same page.

The fix is structural:
- Do the work that can fail inside try.
- Return an error state from catch.
- Call redirect after the try/catch block, once you know it succeeded.

Order matters too. The Server Actions guide notes that because redirect throws, any code after it does not run. Put revalidatePath or updateTag before redirect if the destination needs fresh data.

A related symptom is a redirect that goes to the right page but shows stale data, which is exactly that ordering problem. If the redirect bounces back and forth, the cause is more likely a Proxy or auth rule, and "Too many redirects in Next.js (ERR_TOO_MANY_REDIRECTS): find the loop and fix it" is the better guide.

## Are environment variables or auth checks failing inside the action?
Often, yes: the action runs on the server, so it needs server side environment variables to exist in your host, and it needs to read the user's session from cookies itself.

Environment variables first. Actions can read secrets like DATABASE_URL or STRIPE_SECRET_KEY, which is the point. But if the variable is only in your local .env file and not in the hosting provider's settings for that environment, the action fails in production with an undefined value. A variable prefixed NEXT_PUBLIC_ is inlined at build time, so changing it requires a rebuild. "Environment variables undefined on Vercel? Every cause and fix" goes through each case.

Auth second. The Next.js docs are emphatic that every Server Action should be treated as an untrusted entry point. It runs as a POST request, and anyone who can send that POST can call it. Hiding the form on a logged in page is not a security boundary. Inside each action:
- Read the session from cookies or headers, not from an argument the client passes.
- Check the user owns the record they are changing, by querying with both the record ID and the user ID.
- Validate inputs, and return only what the UI needs.

AI tools often generate actions that accept a whole object from the client, including its ID and owner. That is the unsafe pattern the docs warn about.

## What does "Failed to find Server Action" mean in production?
It means a browser running an older build called an action ID that the newest deployment no longer recognizes, which happens right after you deploy.

The docs explain that each action is identified by an ID that is part of the build, and new deployments typically generate new IDs (Next.js rotates them at most every 14 days even if the code does not change). A user who loaded the page before your deploy and submits a form after it sends the old ID.

What helps:
- Show a friendly retry message when an action fails, so a refresh recovers the user.
- On self hosted or multi instance setups, set NEXT_SERVER_ACTIONS_ENCRYPTION_KEY to a stable value shared across instances, as the docs recommend.
- Avoid deploying in the middle of heavy use if your host does not offer skew protection.

If you see this error constantly, not just after deploys, something else is wrong, such as two different builds being served at once.

## How do I debug a Server Action step by step?
Confirm the action runs, confirm the data changed, then confirm the page was told to refresh, in that order.

Here is an illustration with a made-up app. A tutoring studio's booking dashboard, built in v0 and finished in Cursor, had a "Mark lesson complete" button that did nothing visible. A log at the top of the action showed it ran. The database showed the row did update. The action called revalidateTag('lessons', 'max'), which is a background refresh, so the page kept showing the old status until a later visit. Switching to updateTag('lessons') fixed the display. While in there, I also noticed the action accepted a lessonId with no ownership check, so any signed in tutor could mark any lesson complete. Adding a session lookup and a where clause on both the lesson and the tutor closed that.

That sequence (runs, saves, refreshes, secured) catches nearly every case. One broken action like this is a Quick Fix from $60 with about 2 days of turnaround. Several broken forms plus an auth pass across all actions fits Fix Plus Features from $200 over about 5 days.

## The bottom line
When Next.js Server Actions are not working, the symptom tells you where to look. Nothing happens: check 'use server' placement and how the client calls the action. Data saves but the page is stale: use updateTag, revalidatePath or refresh rather than a stale-while-revalidate revalidateTag. Large forms fail: you hit the 1MB default body limit. The redirect never fires: move redirect out of the try block. Production only failures: check server environment variables and stale action IDs after a deploy.

And whatever the symptom, check auth inside every action. A Server Action is a public endpoint with a friendly syntax, and the framework cannot know who is allowed to change what.`,
  },
  {
    slug: 'expo-eas-build-failed',
    title: 'EAS build failed? How to read Expo build logs and fix the usual causes',
    description: 'EAS build failed for your Expo or React Native app? Read the logs, then fix credentials, native packages, config plugins, SDK mismatches, app config and Firebase files.',
    date: d,
    keywords: ['EAS build failed', 'Expo build error', 'EAS build logs', 'expo-doctor', 'google-services.json EAS build'],
    service: 'fix-ai-built-app',
    shortAnswer: "Open the build page on expo.dev, expand the earliest failed phase and read its first real error, because later phases often fail as a side effect. Then run npx expo-doctor and npx expo export locally. Most EAS build failures come from dependency versions that do not match the Expo SDK, a config plugin or native module problem, missing credentials, a broken app config, or a Firebase file that is git ignored and never uploaded.",
    takeaways: [
      "The earliest failed phase in the EAS build log usually holds the useful error, and lines marked stderr are often just warnings.",
      "npx expo-doctor checks that your dependencies match your Expo SDK version, which catches many failures before you spend a build.",
      "If a release build fails locally with npx expo run:android --variant release or npx expo run:ios --configuration Release, it will also fail on EAS.",
      "Files listed in .gitignore are not uploaded to EAS, so a git ignored google-services.json needs to be provided as a file environment variable.",
      "Upgrade the Expo SDK one version at a time and run npx expo install --fix after each step.",
    ],
    faqs: [
      { q: 'Why does my app work in Expo Go but the EAS build fails?', a: 'Expo Go ships with a fixed set of native modules, while an EAS build compiles your own native project, so native dependencies, config plugins and signing only get tested for real when you build.' },
      { q: 'Do I need a paid Apple Developer account for an iOS EAS build?', a: 'To generate the distribution certificate and provisioning profile that EAS manages for you, Expo says you need to sign in with an Apple Developer Program membership.' },
      { q: 'How do I see what changed between a working build and a failed one?', a: 'The build page on expo.dev has a Compare option that diffs a failed build against an earlier successful one, which is often the fastest way to spot a new dependency or config change.' },
      { q: 'What does "Gradle build daemon disappeared unexpectedly" mean?', a: "Expo's troubleshooting guide says it can point to an out of memory problem, often from an oversized bundle, and suggests inspecting the bundle or using a larger resource class in eas.json." },
      { q: 'Can Thomas Osayi fix a failing EAS build?', a: 'Yes, he built NOM in React Native, Expo and Firebase, and a single build failure fits the Quick Fix package from $60 with about 2 days of turnaround.' },
    ],
    sources: [
      { title: 'Troubleshoot build errors and crashes', publisher: 'Expo Documentation', url: 'https://docs.expo.dev/build-reference/troubleshooting' },
      { title: 'Environment variables in EAS: FAQ', publisher: 'Expo Documentation', url: 'https://docs.expo.dev/eas/environment-variables/faq/' },
      { title: 'Managed credentials', publisher: 'Expo Documentation', url: 'https://docs.expo.dev/app-signing/managed-credentials/' },
      { title: 'Upgrading Expo SDK walkthrough', publisher: 'Expo Documentation', url: 'https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough' },
    ],
    body: `"Build failed" on expo.dev is a frustrating message, especially when the app runs perfectly in Expo Go on your phone. It is even more common with apps generated by AI tools, which tend to add packages freely and test only in the fastest preview available. The build is the first time anything checks whether all those native pieces actually fit together.

I built NOM, a food discovery app in React Native, Expo and Firebase with an 11-screen onboarding flow and camera uploads, so I have spent my share of time in EAS build logs. This post is the process I follow, checked against Expo's own documentation at the time of writing.

@video(/work/nom.mp4|/work/nom-poster.jpg|NOM, a food discovery app I built in React Native, Expo and Firebase, with an onboarding flow and camera uploads.)

## Where is the actual error in an EAS build log?
Open the failed build on expo.dev, expand the failed phases, and start with the earliest one that shows an error, because later failures often cascade from it.

The build page splits the log into phases: setting up the environment, installing dependencies, generating the native project, compiling for Android or iOS, and so on. Expo's troubleshooting guide says the earliest phase with errors will often contain the most useful information. A failed install step makes the compile step fail too, but the compile error is just noise.

Two more reading tips from the same guide:
- Lines prefixed with stderr are common for warnings and do not necessarily mean errors. Do not stop at the first scary looking line.
- Decide whether the error is JavaScript or native. A JavaScript failure usually looks like a Metro error, such as Unable to resolve module. A native failure shows Gradle or Xcode output, and is more likely caused by a config plugin or a dependency.

There is also a Compare button on the build page that diffs a failed build against an earlier successful one. When a build that worked last week fails today, this is the first thing I click. It shows the dependency or configuration change that broke it.

## Can I reproduce the failure without waiting for another build?
Yes, and you should, because local checks take minutes while each EAS build means another wait in the queue and another full compile.

Expo's guide lists several local checks:
- npx expo-doctor checks that your dependency versions are compatible with your Expo SDK version.
- npx expo export bundles the JavaScript and surfaces bundling errors quickly.
- npx expo run:android --variant release or npx expo run:ios --configuration Release builds a release version locally. The docs say that if this fails locally, it will also fail on EAS.
- eas build --local runs the EAS build process on your own machine.

If everything passes locally but fails on EAS, the guide points to mismatches between your machine and the build server: Node, npm or Yarn versions, Xcode or Java versions, environment variables, and the files that actually get uploaded. A fresh git clone of the repository into a new folder is a good way to see the project exactly as EAS sees it.

> Run npx expo-doctor and npx expo export before every build after an AI tool touches your dependencies. Together they catch a large share of failures in under a minute.

## Are my dependencies out of line with the Expo SDK?
This is the most common cause I see in AI-built Expo apps: a package was installed with plain npm install at its latest version, which is newer or older than the version your Expo SDK expects.

Each Expo SDK is tested against specific versions of React Native and of the Expo and community native modules. When an AI tool adds react-native-reanimated, a camera library or a maps package at whatever version npm serves today, the native code may not compile against your SDK's React Native version.

Symptoms:
- expo-doctor warns that certain packages should be updated to a specific version.
- The install phase fails with ERESOLVE unable to resolve dependency tree.
- The compile phase fails inside one specific library's native code.

The fix is to let Expo choose versions. Use npx expo install package-name instead of npm install for anything native, and run npx expo install --fix to bring existing packages in line with your installed SDK. Commit the updated lockfile. If the AI tool also changed package managers along the way (a yarn.lock next to a package-lock.json), remove one so the build server installs what you tested.

## How do I fix config plugin and native module errors?
Find which plugin or library the native error names, check that it supports your Expo SDK and is listed correctly in the plugins array of your app config, and make sure the app is built as a development build, not tested only in Expo Go.

Expo Go includes a fixed set of native modules. Anything outside that set, like a payments SDK, React Native Firebase, or certain camera and media libraries, only works in a build that compiles your own native project. AI tools often add such a library and test in a web preview or Expo Go, where it either silently does nothing or crashes, and the first real compile happens on EAS.

Config plugins are the bridge. They modify the generated android and ios projects during the prebuild step: adding permissions, writing config files, editing Gradle or Podfile settings. When one breaks, the error often names the plugin, or appears during the prebuild phase.

What to check:
- Is the plugin listed in the plugins array in app.json or app.config.js, with the options its docs require?
- Does the library's documentation say it supports your Expo SDK version?
- If you committed android and ios folders earlier, are they stale? With Continuous Native Generation, Expo's upgrade guide says to delete them if you generated them for a previous SDK version, so they regenerate cleanly.

Camera uploads are a good example from NOM's kind of app: the camera library needs its permission strings, and missing iOS usage descriptions are a classic reason a build or App Store submission fails.

## Is it a credentials problem?
If the failure happens in the signing step, or the build stops to ask about certificates, keystores or provisioning profiles, it is credentials.

Expo's managed credentials docs say EAS can generate and store your signing credentials. On iOS that means the distribution certificate, the provisioning profile and the push key, and generating them requires signing in with an Apple Developer Program membership. On Android, EAS can generate and keep the keystore that signs your app.

Common credential failures:
- No paid Apple Developer membership, or an Apple account without the right role on the team.
- A bundle identifier in app config that does not match the one registered with Apple.
- A provisioning profile that does not include a capability you just added, such as push notifications.
- A non interactive build (for example from CI) that cannot prompt you to create missing credentials.

Run eas credentials to see what is configured and to remove or regenerate anything broken. One warning: never let a tool regenerate the Android keystore for an app that is already on Google Play unless you know you are using Play App Signing. The keystore identifies your app, and losing it is a real problem.

## Why does my app config or Firebase file break the build?
Because the build server only sees files that are committed, so a git ignored google-services.json or GoogleService-Info.plist, or a config that reads a missing environment variable, fails on EAS even though it works on your machine.

Expo's troubleshooting guide calls out the error None of these files exist: files listed in .gitignore are not uploaded, so imports of them fail. The Firebase config files are often git ignored on purpose, and then the build breaks when app config points to them.

The fix from Expo's environment variable docs is to upload the file as a file type environment variable in EAS, then read its path in app.config.js. Their example sets android.googleServicesFile to process.env.GOOGLE_SERVICES_JSON with a fallback to the local path. The same idea works for the iOS file.

Whether you need these files at all depends on which Firebase SDK you use. React Native Firebase uses native modules and needs them. The Firebase JavaScript SDK configures itself in code and does not. AI tools sometimes mix the two.

Other app config problems:
- Invalid JSON in app.json, often a trailing comma.
- app.config.js that throws because an environment variable is undefined on the build server.
- EXPO_PUBLIC_ variables used for secrets. They are bundled into the app's JavaScript, so Expo advises against secret visibility for them.

## How do I upgrade the Expo SDK without breaking the build?
Upgrade one SDK version at a time, run npx expo install --fix and npx expo-doctor after each step, regenerate the native folders, and read the release notes before building.

Expo's upgrade walkthrough recommends upgrading incrementally, one version at a time, and lists SDK 58 as current at the time of writing. The steps are: install the new expo package, run npx expo install --fix so other packages match, run npx expo-doctor, then delete the android and ios folders if you use Continuous Native Generation (or update them by hand if you do not), and check the changelog for breaking changes.

Here is an illustration, a made-up app rather than a client. A founder's Rork generated habit tracker sat two SDK versions behind and failed on EAS with a Kotlin compile error in a notifications library. Jumping straight to the newest SDK produced a dozen new errors. Going one version at a time, running the fix command after each, and replacing one abandoned library with a maintained alternative got the build green in two steps, with each step small enough to test.

## When should I get help with a failing EAS build?
Get help when the error is deep in native Gradle or Xcode output you cannot map to a package, when credentials are tangled across Apple or Google accounts, or when every fix produces a new failure.

A few rounds of fixes are normal, because solving the first error lets the build reach the next phase. But native build failures are where AI tools struggle most, because the error is far from the code they wrote. If you are deciding whether the app should even be native, "Web app vs mobile app for your MVP: which to build first" and "PWA vs native app in 2026: what a web app can do on iPhone now" are worth reading first.

For pricing context, a single build failure fits my Quick Fix package from $60 with about 2 days of turnaround. A build that needs an SDK upgrade, a couple of dependency swaps and a credentials cleanup fits Fix Plus Features from $200 over about 5 days. An app that works in development but needs to get all the way to the stores fits Finish and Launch from $600.

## The bottom line
An EAS build failure is rarely mysterious once you read the right part of the log. Start with the earliest failed phase, ignore stderr warnings, and decide whether it is a JavaScript or native error. Then reproduce it locally with npx expo-doctor, npx expo export and a local release build before spending another EAS build.

The usual fixes are predictable: let npx expo install choose native package versions, check config plugins against your SDK, sort out credentials with eas credentials, upload git ignored Firebase files as EAS file variables, and upgrade the SDK one version at a time. Do that, and the build log goes from scary to useful.`,
  },
  {
    slug: 'netlify-vs-vercel',
    title: 'Netlify vs Vercel for an AI-built app: pricing, limits and which to pick',
    description: 'Netlify vs Vercel for hosting a Lovable, Bolt, Vite or Next.js app: free and paid plans at the time of writing, credits vs usage, commercial use rules and which to pick.',
    date: d,
    keywords: ['Netlify vs Vercel', 'Netlify pricing credits', 'Vercel Hobby commercial use', 'host Lovable app', 'Netlify or Vercel for Next.js'],
    service: 'fix-ai-built-app',
    shortAnswer: "Both host a Vite or Next.js app well. Pick Vercel if your app is Next.js and you want the platform built by the Next.js team, but note its free Hobby plan is for personal or non-commercial use only. Pick Netlify if you want a free or $9 per month plan you can use for a small commercial project, and you are fine with a credit system where usage like deploys and bandwidth draws from a monthly allowance.",
    takeaways: [
      "At the time of writing, Netlify plans are Free (300 credits), Personal at $9 per month (1,000 credits) and Pro at $20 per month (3,000 credits), with usage such as production deploys and bandwidth spending credits.",
      "At the time of writing, Vercel Hobby is free and Pro is $20 per month per developer seat with $20 of included usage credit.",
      "Vercel's terms limit the Hobby plan to personal or non-commercial use, so a business app belongs on Pro.",
      "Netlify's Next.js support runs through its OpenNext adapter and lists full support for the App Router and Server Actions, with a few documented limitations.",
      "When a free Netlify project runs out of credits it pauses until the next billing cycle, so a launch day traffic spike is worth planning for on either host.",
    ],
    faqs: [
      { q: 'Is Netlify or Vercel cheaper for a small business app?', a: "For a small commercial app, Netlify's $9 Personal plan can be cheaper than Vercel Pro at $20 per seat, but compare your expected deploys and bandwidth against each plan's allowance at the time you sign up." },
      { q: 'Can I use Vercel Hobby for a business website?', a: "Vercel's terms say the Hobby plan is only for personal or non-commercial use, so a business site or paid app should be on Pro." },
      { q: 'Does Netlify support Next.js Server Actions?', a: "Yes, Netlify's Next.js docs list Server Actions, the App Router, ISR and middleware as fully supported through its OpenNext adapter, with some documented limitations." },
      { q: 'Can I host a Lovable or Bolt app on either one?', a: 'Yes, both host a Vite single page app from a GitHub repository, as long as you add the rewrite that sends unknown paths to index.html so refreshes do not 404.' },
      { q: 'Can Thomas Osayi move my AI-built app to Netlify or Vercel?', a: 'Yes, moving an app that already works to either host with a custom domain usually fits the Quick Fix package from $60, and an app that still needs work before launch fits Finish and Launch from $600.' },
    ],
    sources: [
      { title: 'Netlify pricing', publisher: 'Netlify', url: 'https://netlify.com/pricing' },
      { title: 'Personal vs Free', publisher: 'Netlify', url: 'https://www.netlify.com/pricing/personal-vs-free' },
      { title: 'Next.js on Netlify', publisher: 'Netlify Docs', url: 'https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/' },
      { title: 'Vercel pricing', publisher: 'Vercel', url: 'https://vercel.com/pricing' },
      { title: 'Terms of Service', publisher: 'Vercel', url: 'https://vercel.com/terms' },
    ],
    body: `Once an app built in Lovable, Bolt, v0 or Cursor is on GitHub, the next question is where it should live. Netlify and Vercel are the two names that come up most, and for good reason. Both connect to a repository, build on every push, give you preview links for branches, and put the result on a global network with HTTPS. For a lot of apps, either one is a fine answer.

The differences are in pricing models, the rules about commercial use on free plans, and how each handles Next.js. I checked both pricing pages and the relevant docs on the day of writing. Prices and limits change, so treat the numbers as a snapshot and check them again before you sign up.

This post is specifically Netlify against Vercel. If you are weighing Google's option for a Next.js app, read "Firebase App Hosting vs Vercel for a Next.js app: cost, features and regions". If your app needs always-on servers, workers or a bundled database, "Vercel vs Railway vs Render for hosting a SaaS: servers, workers, databases and cost" is the better comparison.

## What is the short answer?
For a Next.js app run as a business, I lean Vercel Pro; for a Vite single page app from Lovable or Bolt on a tight budget, Netlify is a strong choice, especially because its low cost plans allow commercial projects.

Vercel builds Next.js, so new features tend to work there first, with the least configuration. Netlify supports Next.js through an open source adapter and lists most features as fully supported, but it is a second implementation, and its docs list a handful of limitations.

For a plain Vite app, which is what Lovable and Bolt usually produce, the framework question mostly disappears. Both serve static files from a CDN, and the choice comes down to price, plan rules and which dashboard you prefer.

## How do the plans and prices compare at the time of writing?
At the time of writing, Netlify charges $0, $9 or $20 per month for credit based plans, and Vercel charges $0 for Hobby or $20 per developer seat per month for Pro with included usage credit.

### Netlify
- Best for: Vite and static apps, small commercial projects on a budget, and teams that want unlimited members on one plan.
- Cost range: Free at $0 with 300 credits per month, Personal at $9 per month with 1,000 credits, Pro at $20 per month with 3,000 credits and unlimited members, and custom Enterprise pricing.
- How credits are spent: the pricing page lists 15 credits per production deploy, 20 credits per GB of bandwidth, 10 credits per GB-hour of compute and 2 credits per 10,000 web requests. A Pro credit pack is $10 for 1,500 credits.
- Pros: one simple meter for everything, a low cost paid tier for a single developer, auto recharge on Personal, and Netlify's own form handling and edge features.
- Cons: frequent production deploys spend credits, so an AI tool that pushes on every small change can burn through a Free allowance quickly, and Next.js runs through an adapter rather than first party.

### Vercel
- Best for: Next.js apps, especially ones using the newest App Router features, and teams that want strong preview deployment workflows.
- Cost range: Hobby at $0, Pro at $20 per month per developer seat with $20 of included usage credit, viewer seats free, and custom Enterprise pricing.
- Hobby includes: 100 GB of fast data transfer, 1 million CDN requests, 1 million function invocations and 4 hours of active CPU per month, with usage caps and no option to buy more.
- Pro adds: pay as you go usage beyond the credit (function invocations at $0.60 per million, for example) with a $200 default on demand budget you can change, and alerts.
- Pros: first party Next.js support, excellent preview deployments, and fine grained usage controls on Pro.
- Cons: Hobby cannot be used commercially, the bill grows per developer seat, and usage based pricing takes some attention to forecast.

## Can I run a business app on the free plan?
On Vercel, no: its terms of service say you shall only use the Hobby plan for personal or non-commercial use, while Netlify's pricing page does not draw the same line for its Free plan.

This is the single most important difference for a small business owner. A booking site for a salon, a paid SaaS, or an ordering page for a restaurant is commercial use, so on Vercel it belongs on Pro at $20 per month per developer seat. That is still inexpensive, but it is not free.

On Netlify, the Free plan is a real option for a small commercial site, within its 300 monthly credits. The catch is what happens when you run out. Netlify's comparison page says Free projects pause until the next billing cycle, with notifications at 50, 75 and 100 percent usage. Personal at $9 per month adds auto recharge, so the site keeps running and you pay for the extra credits.

Vercel Hobby has a similar wall: you cannot buy more usage on Hobby. Either way, a free plan is fine for a prototype, and a paid plan is the safer place for something customers rely on.

> Before you launch, check your host's usage page after a normal week, not just on day one. That tells you whether the free allowance will survive a busy month.

## Which works better for a Lovable, Bolt or Vite app?
Both work well, so the deciding factors are cost, the commercial use rules, and getting one rewrite right.

A Vite single page app builds into static HTML, JavaScript and CSS. Both hosts detect Vite, run npm run build, and publish the dist folder. Neither needs serverless functions for this unless you add them.

The one thing almost every AI generated Vite app gets wrong on first deploy is client side routing. Visiting a page like /dashboard directly, or refreshing it, returns a 404 because there is no dashboard file on the server. You need a rewrite that sends unknown paths to index.html. On Netlify that is a redirects rule. On Vercel it is a rewrite in vercel.json. "Why your React app shows 404 on refresh on Vercel, and how to fix it" walks through the Vercel version, and the idea is identical on Netlify.

Environment variables are the other trap. A Vite app only exposes variables prefixed VITE_ to the browser, and they are baked in at build time. Set them in the host's dashboard, then redeploy. Remember that anything in the browser bundle is public. "API key exposed in your frontend? Which keys are safe and how to fix the rest" explains which keys are fine there.

For the full move, "How to move a Lovable app to Vercel and your own domain" covers the steps on Vercel, and nearly all of them carry over to Netlify.

## Which works better for a Next.js app?
Vercel is the safest choice for Next.js, though Netlify's adapter supports the features most apps use, including the App Router and Server Actions.

Netlify's docs say its OpenNext adapter supports Next.js 13.5 and later, and they list full support for the App Router, server side rendering, ISR, React Server Components, Server Actions, streaming, middleware (implemented with Edge Functions), Route Handlers, image optimization and more.

The same page lists limitations at the time of writing:
- Pages set to the edge runtime run in your functions region on Node.js rather than at edge locations.
- Rewrites in Next.js config cannot point to static files in the public folder.
- Headers and redirects are evaluated after middleware, which differs from standalone Next.js.
- Node.js middleware cannot use the filesystem or C++ addons.

None of those affect most AI-built Next.js apps. They matter if your app leans on exact middleware ordering or brand new Next.js features on release day. If you are fixing a Next.js deploy that already fails on Vercel, "Vercel build failed? The most common Next.js deploy errors and fixes" helps before you blame the host.

## What does each cost for a realistic small app?
A small business app usually costs $0 to $9 a month on Netlify and $20 a month per developer on Vercel Pro, as long as traffic and deploys stay modest.

Here is an illustration, not a quote. Picture a made-up mobile pet grooming business with a Lovable built booking site, around 4 GB of bandwidth a month and about 20 production deploys while it is being polished.

On Netlify, using the per unit rates on the pricing page, 20 deploys at 15 credits is 300 credits, and 4 GB of bandwidth at 20 credits per GB is 80 credits, plus a small amount for web requests. That is roughly 380 credits, over the Free allowance of 300 and comfortably inside Personal's 1,000 for $9. In a quieter month with five deploys, it fits on Free.

On Vercel, it is a commercial site, so it belongs on Pro at $20 for one developer seat. Traffic this small fits easily inside the included usage credit.

The lesson: on Netlify, deploy frequency matters. Batch your changes instead of letting an AI tool push 40 tiny commits a day. On Vercel, the seat count matters more than traffic for a small app. "What does it cost to run an AI-built app per month? A real budget" puts hosting next to the database, email and AI costs.

## Which should I pick for my situation?
Match the host to your app type and budget, because both are good platforms and the wrong choice is rarely a disaster.

- A Vite app from Lovable or Bolt for a small business, on a tight budget: Netlify Free or Personal.
- A Next.js app that is your product or a client's business: Vercel Pro.
- A personal project, portfolio or hobby experiment: either free plan, with Vercel Hobby especially easy for Next.js.
- A team with several collaborators and modest traffic: Netlify Pro's unlimited members can beat paying per developer seat on Vercel.
- An app with long running jobs or a background worker: neither is ideal on its own, and the Railway and Render comparison above is the better guide.

Switching later is not painful for a static app. It is a new project connected to the same repository, the same environment variables, and a DNS change.

## When should I get help?
Get help when the move involves a custom domain with existing email, a Next.js feature that behaves differently on the new host, or a build that fails on one platform and not the other.

DNS is where most self moves go wrong. Pointing a domain at a new host is easy, but deleting the wrong record can take down business email. If your domain is at GoDaddy, "How to connect a GoDaddy domain to Vercel" shows which records to touch, and the Netlify process is similar.

For pricing context, moving a working app to either host with a custom domain usually fits my Quick Fix package from $60 with about 2 days of turnaround. An app that needs fixes before it is ready to launch fits Finish and Launch from $600 over about 10 days.

## The bottom line
Netlify and Vercel are both excellent places to host an AI-built app, and both are honest about their pricing. The real differences are the billing model (Netlify's credits versus Vercel's seats plus usage), the free plan rules (Vercel Hobby is personal or non-commercial only), and Next.js support (first party on Vercel, a capable adapter on Netlify).

For a Vite app from Lovable or Bolt on a small budget, start on Netlify. For a Next.js app that is a real business, use Vercel Pro. Whichever you choose, check the pricing page on the day you sign up, add the single page app rewrite, set your environment variables in the dashboard, and watch the usage page after your first busy week.`,
  },
];
