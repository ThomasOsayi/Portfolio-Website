// Generated articles, batch 09 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen09: Post[] = [
  {
    slug: 'add-tests-to-ai-generated-app',
    title: 'How to add tests to an AI-generated app, and what to test first',
    description: 'A practical plan for adding tests to a Lovable, Bolt, v0 or Cursor app: Vitest and Playwright basics, testing auth, permissions and payments first, and CI on GitHub.',
    date: d,
    keywords: ['add tests to AI generated app', 'testing vibe coded app', 'Vitest Playwright setup', 'GitHub Actions tests', 'test Supabase RLS'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Start with a handful of end-to-end Playwright tests for sign-in, data access between two users and payments, then add Vitest unit tests for the business rules those flows depend on. Run both on every push with GitHub Actions so a new prompt or commit cannot quietly break what already works.',
    takeaways: [
      'You do not need full coverage, you need tests on the few flows that lose money or leak data when they break.',
      'Playwright tests that click through the real app catch the regressions AI builders cause most often.',
      'A two-user permissions test is the single most valuable test in an app built on Supabase or Firebase.',
      'Tests only protect you if they run automatically, so wire them into GitHub Actions on day one.',
    ],
    faqs: [
      { q: 'Do AI-built apps come with tests?', a: 'Usually not, because tools like Lovable and Bolt focus on generating working screens and rarely write or run automated tests unless you ask for them.' },
      { q: 'Should I use Vitest or Jest for a new test setup?', a: 'For a Vite or Next.js app started today, Vitest is the simpler choice because it shares Vite configuration and needs very little setup.' },
      { q: 'What is the difference between unit tests and end-to-end tests?', a: 'Unit tests check one function in isolation in milliseconds, while end-to-end tests drive a real browser through the app the way a user would.' },
      { q: 'Can I run tests against my production database?', a: 'No, run them against a local Supabase instance or a separate staging project, because tests create and delete data.' },
      { q: 'How much does it cost to add tests to an AI-built app?', a: 'Thomas Osayi can add a first set of tests around one risky flow from $200 with his Fix Plus Features package, or as part of a from $600 Finish and Launch engagement.' },
    ],
    body: `Most apps built with Lovable, Bolt, v0 or Cursor arrive with zero tests. That is fine while you are the only user and you click through everything yourself after each change. It stops being fine the day a prompt to "make the dashboard nicer" also rewrites the query that decides which records a user can see, and nobody notices for a week.
Tests are how you notice in minutes instead. You do not need hundreds of them. You need the right ten, running automatically on every change. Here is the order I add them in, the tools I use, and how to get them running in CI without turning it into a month long project.
## Why do AI-generated apps need tests more than hand-written ones?
Because AI builders change more code per request than a human would, and they do not remember what they changed last time.
When you ask a builder for a small feature, it often regenerates whole files. A component that used to filter by the signed-in user can come back without the filter. A webhook handler can lose the line that checks the signature. The screen still renders, so the preview looks fine, and the bug only shows up when real data or a second user is involved.
A human developer would usually catch this in review. In a prompt-driven workflow there is no review step, so automated tests become the review. They are also the thing that makes a handoff safe: if you later bring in a developer, as I describe in "How to hand off your AI-built app to a developer," a test suite tells them what the app is supposed to do in a form they can run.
The goal is not perfect coverage. The goal is a safety net under the flows where a silent break costs you money, customers or trust.
## What should I test first in an AI-built app?
Test the three things that hurt most when they fail silently: authentication, permissions and payments, in that order.
### Authentication
Can a new user sign up, confirm, sign in, sign out and reset a password on the real domain? Redirect URLs that still point at a preview domain are one of the most common launch bugs I see, and a single end-to-end test catches them.
### Permissions
Can user A see, edit or delete anything that belongs to user B? This is the test most AI-built apps fail. Supabase row level security policies and Firebase rules are easy to get wrong, and the app looks perfect from inside one account.
### Payments
Does a successful checkout actually change the user's plan in your database? Does a cancelled subscription remove access? Does a webhook that arrives twice create two orders?
After those three, test whatever your app's core promise is: the booking that must not double book, the invoice total that must be right, the export that must include every row.
> Write the list of "this must never break" flows on paper before you write any test. If a flow is not on that list, it can wait.
## What tools should I use: Vitest, Playwright or both?
Use both, because they answer different questions: Vitest checks your logic quickly, and Playwright checks the app works in a real browser.
### Vitest for unit and integration tests
Vitest is a test runner built on Vite, which is what Lovable and Bolt projects already use, and it works well in Next.js projects too. You install it with npm install -D vitest, add a "test" script that runs vitest, and name files with .test. or .spec. in them, for example pricing.test.ts. At the time of writing the current major version needs Node.js 22.12 or newer, so check your Node version before you start. Use Vitest for pure business rules: what a plan allows, how a total is calculated, whether a date range overlaps another booking.
### Playwright for end-to-end tests
Playwright drives Chromium, Firefox and WebKit through your actual app. Running npm init playwright@latest creates playwright.config.ts, a starter test at tests/example.spec.ts, and offers to add a GitHub Actions workflow. You run everything with npx playwright test, and npx playwright test --ui opens a visual mode with time travel debugging that is very helpful when a test fails and you cannot see why.
If you only have time for one, start with Playwright. A few end-to-end tests catch more of the regressions AI builders cause than a pile of unit tests.
## How do I write a permissions test that actually catches leaks?
Create two test users, sign in as one, and assert that the other user's data never appears, both in the interface and through the database API directly.
The interface check is a Playwright test: user A creates a record called something unique, signs out, user B signs in, and the test asserts that text is not on the page. That is useful, but it is not enough, because a leaky app often hides other users' rows in the interface while still returning them from the API.
The stronger check goes straight to the data layer. In a Vitest test, create a Supabase client with the public anon key, sign in as user B, and query the table that holds user A's records. The test passes only if the result is empty. Then try an update and a delete against A's row and assert they fail. This mirrors exactly what an attacker with your public key could do from a browser console.
For Firebase, the equivalent is the rules unit testing library against the local emulator, which lets you assert that a read as one user is denied on another user's document.
Run these against a local Supabase stack started with the Supabase CLI or a separate staging project, never production. If you want background on why these policies fail so often, my post "Is your Lovable or Bolt app leaking data? Check Supabase row level security" covers the usual mistakes.
## How do I test payments without charging real cards?
Use Stripe test mode with test card numbers for the checkout flow, and the Stripe CLI to send webhook events to your local server for the part that updates your database.
Checkout itself is Stripe's job and you should not try to automate their hosted page heavily. What you own, and what breaks, is the code that runs after payment. So the most valuable tests are around your webhook handler:
- Run stripe listen with --forward-to pointed at your local webhook route, then stripe trigger checkout.session.completed and assert the user's plan column changed.
- Send the same event twice and assert you still have one order, not two.
- Send an event with a bad signature and assert the handler rejects it.
- Trigger a subscription cancellation and assert access is removed.
You can also unit test the pure function that maps a Stripe price ID to a plan in your app. That mapping is a common source of "paid but still on free" bugs. If you are already seeing that symptom, "Stripe payment went through but your app did not update? Fix the webhook" walks through the fixes.
## How do I run tests automatically with GitHub Actions?
Add a workflow file under .github/workflows that installs dependencies, runs Vitest, installs Playwright browsers and runs Playwright on every push and pull request.
If you accepted the option during npm init playwright@latest, you already have .github/workflows/playwright.yml. At the time of writing it triggers on pushes and pull requests to main or master, runs npm ci, runs npx playwright install --with-deps, runs npx playwright test, and uploads the playwright-report folder as an artifact you can download when something fails.
Add one step before the Playwright step that runs npx vitest run, which runs once instead of watching. Put the URL and anon key of your staging Supabase project, plus Stripe test keys, into GitHub repository secrets and expose them to the workflow as environment variables. Never commit them.
Then turn on branch protection for main so a pull request cannot merge while tests fail. If you still edit in Lovable or Bolt, their commits land in the same GitHub repo, so the same checks run against changes the AI makes. That is the real payoff: every prompt now gets reviewed by your test suite.
## What does this look like for a real app? A worked example
Here is an illustration with a made-up business: a dog grooming studio that built a booking app in Lovable with Supabase and Stripe deposits.
The owner's "must never break" list had five items: customers can sign in, customers only see their own bookings, staff see all bookings, a paid deposit confirms the booking, and two customers cannot book the same slot.
The first pass looked like this:
- Three Playwright tests: sign up and sign in on the staging domain, book a slot and pay a deposit with a test card, and a staff login that sees every booking.
- Two Vitest permission tests using the anon key: a customer cannot read or update another customer's booking, and a customer cannot read the staff notes table at all.
- One Vitest test for the slot overlap function, with edge cases at the start and end of a slot.
- A webhook test that sends the payment event twice and asserts one confirmed booking.
The permission test failed on the first run. The bookings policy allowed any signed-in user to read every row. That one test justified the whole exercise. The fix took an hour, and the test now guards it permanently. All of this ran in GitHub Actions in a few minutes per push.
## How long does adding tests take, and what does it cost?
A first useful suite around auth, permissions and one payment flow is usually a few days of work, not weeks, if the app already works.
The time goes into three places: setting up test users and a staging database, writing the tests themselves, and fixing the real bugs the tests uncover, which is the part people forget to budget for. In my experience the bugs found are the valuable part.
On my side, adding a focused set of tests around one risky flow fits the Fix Plus Features package from $200 over five days, which covers up to three fixes plus one small feature. If the app is close to launch and needs tests, security fixes and deployment sorted together, that is the Finish and Launch package from $600 over ten days. If you only have one known bug, the Quick Fix from $60 covers it, though I would still recommend at least the permissions test.
Doing it yourself is realistic if you are comfortable in a terminal. Budget a weekend to get the first Playwright test green and CI running, then add tests one flow at a time.
## The bottom line
You do not need to become a testing expert to protect an AI-built app. Write down the flows that must never break, cover sign-in, cross-user permissions and payments first, and run everything in GitHub Actions on every push. Ten good tests that run automatically beat a hundred that nobody runs. If you would rather have someone set it up and fix what the tests uncover, my fix your AI-built app service covers exactly that.`,
    sources: [
      { title: 'Getting Started', publisher: 'Vitest', url: 'https://vitest.dev/guide/' },
      { title: 'Installation', publisher: 'Playwright', url: 'https://playwright.dev/docs/intro' },
      { title: 'Setting up CI', publisher: 'Playwright', url: 'https://playwright.dev/docs/ci-intro' },
    ],
  },
  {
    slug: 'speed-up-a-slow-ai-built-app',
    title: 'Why is my Lovable app slow? How to find and fix it',
    description: 'A slow Lovable or Bolt app usually comes down to five causes: N+1 queries, missing indexes, huge bundles, raw images and re-renders. How to measure each and fix it.',
    date: d,
    keywords: ['slow Lovable app', 'speed up AI built app', 'Supabase slow queries', 'React re-renders performance', 'Vite bundle size'],
    service: 'fix-ai-built-app',
    shortAnswer: 'A slow Lovable app is almost always slow for one of five reasons: it makes one database request per item (N+1 queries), its tables lack indexes on the columns it filters by, its JavaScript bundle is huge, it serves full-size photos, or components re-render in loops. Measure with Lighthouse, the browser network tab, the React Profiler and the Supabase query performance tools before changing anything.',
    takeaways: [
      'Measure first, because the slow part is rarely the part that looks slow.',
      'Counting network requests on one page load often reveals N+1 queries in under a minute.',
      'Postgres does not index foreign keys automatically, so filters on user_id or project_id often scan whole tables.',
      'Uploaded phone photos served at full size are one of the cheapest big wins to fix.',
      'Most speed fixes in AI-built apps are a few targeted changes, not a rewrite.',
    ],
    faqs: [
      { q: 'Why is my Lovable app fast in the preview but slow for users?', a: 'The preview usually runs with a few test rows, while real users bring hundreds or thousands of rows, slower phones and slower networks, which exposes missing indexes and oversized pages.' },
      { q: 'Is Supabase slow?', a: 'Supabase runs on Postgres, which is fast when queries use indexes and fetch only what they need, so slowness usually comes from how the app queries it.' },
      { q: 'What Lighthouse score should my app aim for?', a: 'Treat the score as a guide rather than a target and focus on the specific opportunities it lists, such as large images, unused JavaScript and long main thread tasks.' },
      { q: 'Will upgrading my Supabase or hosting plan fix a slow app?', a: 'Rarely on its own, because more compute does not fix a query that scans a whole table or a page that downloads several megabytes of JavaScript.' },
      { q: 'How much does it cost to speed up an AI-built app?', a: 'Thomas Osayi fixes one specific performance bug from $60, and handles up to three fixes plus a small feature from $200 over five days.' },
    ],
    body: `A slow app feels like one big problem, but it almost never is. When someone sends me a Lovable or Bolt app that takes six seconds to show a dashboard, the cause is usually one or two specific things stacked together: a page that makes forty database calls, a table with no index, and three megabytes of JavaScript for a screen with a list on it.
The good news is that each of those is findable and fixable without rebuilding anything. Here is how I track them down, in the order I check them.
## Why is my Lovable app so slow?
Usually because the AI wrote code that works perfectly with ten rows of test data and badly with a thousand rows of real data.
Lovable generates a React app built with Vite, usually backed by Supabase. That stack is fast by default. What makes it slow is the code generated on top of it, which optimizes for "it works" rather than "it works at scale." The patterns I see most often:
- N+1 queries: one request for a list, then one more request for each item in it.
- Missing indexes: queries that filter by a column Postgres has to scan row by row.
- Huge bundles: every page, chart library and icon set shipped in one JavaScript file.
- Raw images: full-resolution phone photos displayed as thumbnails.
- Re-renders: components that refetch or recalculate on every keystroke or in an infinite loop.
Bolt, v0 and Cursor apps show the same patterns. The rest of this post is how to tell which ones you have.
## How do I measure what is actually slow?
Use four tools, each for a different layer: Lighthouse for the page, the network tab for requests, the React Profiler for rendering, and Supabase's query tools for the database.
### Lighthouse
Open your live app in a Chrome incognito window, open DevTools, go to the Lighthouse tab and run a performance audit. It works on signed-in pages too. Ignore the overall score at first and read the list of opportunities: large images, unused JavaScript, render-blocking resources. You can also run it from PageSpeed Insights for public pages.
### The network tab
Reload the slow page with the Network tab open and filter by Fetch/XHR. Count the requests to your Supabase URL. A dashboard that needs 5 requests is healthy. One that makes 60 has an N+1 problem. Sort by size to find heavy downloads.
### React Profiler
Install React Developer Tools, open the Profiler tab, record while you interact with the slow screen, and look for components that render dozens of times or take a long time per render.
### Supabase query performance
In the Supabase dashboard, the Query Performance report and the Performance Advisor show your slowest and most frequent queries, and the advisor can suggest indexes using the index_advisor extension.
> Test on a real phone over mobile data, or throttle the CPU and network in DevTools. A laptop on office wifi hides most of these problems.
## What are N+1 queries and how do I fix them?
An N+1 query is when the app fetches a list with one request and then makes another request for every item in that list, so 50 items means 51 round trips.
In AI-built React apps it usually looks like a list component that maps over projects and renders a card, where each card has its own effect that fetches that project's owner, task count or latest comment. Each request might take 80 milliseconds, but 50 of them in parallel still crowd the network, and on a phone they queue up.
The fix is to fetch related data in one query. Supabase's client lets you embed related tables in a single select, for example selecting projects along with their owner's name and their tasks in one call, as long as a foreign key links the tables. For counts and totals, a Postgres view or a database function that returns one row per project is usually cleaner than counting in the browser.
Two related patterns to look for while you are in there:
- Selecting every column with select star when the page shows three fields. Ask for only what you display.
- Fetching every row and filtering in JavaScript. Filter and paginate in the query instead, with a range or limit, so the database sends 20 rows rather than 2,000.
## Do missing indexes make an app slow, and how do I add them?
Yes, and they are the most common cause of an app that was fast at launch and gets slower every week as data grows.
Without an index, Postgres answers "give me all tasks where project_id equals X" by reading every row in the table. With ten thousand rows that becomes noticeable, with a million it becomes painful. Postgres creates indexes for primary keys and unique constraints, but it does not automatically index foreign key columns, and AI builders rarely add indexes on their own.
Columns that almost always need an index in a typical app:
- Foreign keys you filter or join on, such as user_id, project_id or organization_id.
- Columns used in row level security policies, because the policy runs on every query. A policy that checks user_id against the signed-in user needs user_id indexed.
- Columns you sort by on big lists, such as created_at.
Add indexes through a migration so they are recorded in your project history, and check the Supabase Performance Advisor afterwards, which also flags unindexed foreign keys. Supabase's own guidance notes that building an index locks the table against writes, so on large tables build it at a quiet time or use the concurrent option. My post on changing a Supabase database safely covers how to ship that kind of change without surprises.
## Is my JavaScript bundle too big?
If the Vite build warns that some chunks are larger than 500 kB after minification, or Lighthouse flags lots of unused JavaScript, then yes.
AI builders tend to import libraries generously and route every page through one bundle. A user loading the sign-in page downloads the code for the admin dashboard, the chart library and the rich text editor too. On a mid-range phone, parsing that JavaScript can take longer than downloading it.
Fixes, in order of payoff:
- Split by route. Wrap page components in React.lazy with Suspense so each page loads its own code when visited.
- Lazy load heavy widgets. Charts, maps, editors and PDF viewers can load only when they scroll into view or a tab opens.
- Replace oversized libraries. Full date libraries, whole utility libraries and entire icon packs imported at once are common culprits.
- Remove dead code. Generated apps often keep components and dependencies from abandoned prompts.
A bundle visualizer plugin for Vite shows you exactly which packages take up the space, which turns guessing into a short list.
## How do images slow down an AI-built app?
Images are often the heaviest thing on the page, and AI-built apps usually display whatever the user uploaded, at whatever size it was uploaded.
A photo from a modern phone can be several megabytes. Show twenty of them as small thumbnails in a grid and the page downloads tens of megabytes it does not need. This hits storefronts, listing pages, profile galleries and any app with user uploads.
A shop page like the LACEUP storefront I built, with a grid of product photos, is exactly where image handling decides how fast the page feels.
![The LACEUP shop page I built, a product grid with category filters where image size drives load time](/shots/laceup-shop.jpg)
What to do:
- Resize and compress on upload, storing a thumbnail and a display size in modern formats such as WebP.
- Set explicit width and height on images so the layout does not jump while they load.
- Add loading="lazy" to images below the fold, and keep the main hero image eager.
- If you move to Next.js, its image component handles resizing and formats for you, with the configuration covered in my post on the next/image hostname error.
## Why does my app re-render so much, and does it matter?
It matters when renders are expensive or endless, and the usual cause in generated code is state or effects wired so that one change triggers a cascade.
Patterns I see repeatedly:
- An effect that fetches data and sets state, with a missing or wrong dependency list, so it refetches on every render. In the network tab this looks like the same request firing over and over.
- One giant context provider holding user, settings, cart and filters, so typing in a search box re-renders the whole app.
- Expensive calculations, like sorting a big list, done inline on every render.
- New objects or functions created on every render and passed to memoized children, which defeats the memoization.
The React Profiler shows which components render and how long each takes. Fix the loops first, since an effect that refetches endlessly also burns through your Supabase request quota. Then split large contexts, move filtering into the query, and use useMemo for genuinely expensive work. Do not wrap everything in memo by default; measure, then fix the few components that matter.
## What does a typical speed fix look like? A worked example
Here is an illustration with a made-up app: a client portal for a small accounting firm, built in Lovable, where the documents page took about seven seconds to load for clients with a long history.
Measuring showed three problems. The network tab had 48 requests to Supabase on one page load, because each document row fetched its uploader's name separately. The Query Performance report showed the documents query scanning the whole table, because client_id had no index and the RLS policy filtered on it. Lighthouse flagged 2.4 MB of JavaScript, mostly a PDF viewer and a chart library loaded on every page.
The fixes: one query that embedded the uploader name, an index on client_id added by migration, pagination at 25 documents, and lazy loading for the PDF viewer and charts. The page went from 48 requests to 2 and became fast on a phone. None of it required touching the design. Work of that size fits my Fix Plus Features package from $200, and a single clear cause, like one missing index, fits a Quick Fix from $60.
## The bottom line
A slow Lovable app is a measurement problem before it is a coding problem. Count the requests, read the Lighthouse opportunities, profile the renders and check the slowest queries, and you will usually find one to three specific causes. Fix those, verify with the same tools, and leave the rest alone. If you would rather hand it off, my fix your Lovable app page explains how I take on exactly this kind of work, and "Core Web Vitals explained for small business owners" covers what the speed numbers mean for search.`,
    sources: [
      { title: 'Introduction to Lighthouse', publisher: 'Chrome for Developers', url: 'https://developer.chrome.com/docs/lighthouse/overview' },
      { title: '<Profiler>', publisher: 'React', url: 'https://react.dev/reference/react/Profiler' },
      { title: 'Steps to improve query performance with indexes', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/troubleshooting/steps-to-improve-query-performance-with-indexes-q8PoC9' },
    ],
  },
  {
    slug: 'change-supabase-database-safely',
    title: 'How to change your Supabase database safely with migrations',
    description: 'How to change a live Supabase schema without breaking your app: backups first, migrations with the Supabase CLI, a staging project, safe change patterns and RLS checks.',
    date: d,
    keywords: ['Supabase database migrations', 'supabase db push', 'supabase db diff', 'Supabase staging environment', 'change Supabase schema safely'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Take a backup, capture your current schema as a migration with the Supabase CLI, make the change locally as a new migration file, test it on a separate staging project, then push it to production with supabase db push. After any schema change, check row level security, policies and grants on every new or changed table before users touch it.',
    takeaways: [
      'Editing tables directly in the production dashboard skips migration history and makes later pushes fail.',
      'A backup you have checked you can restore is the first step, not an optional extra.',
      'Additive changes are safe to ship in one step, while renames and drops should be split across two deploys.',
      'New tables need row level security, policies and, on Supabase today, explicit grants before the app can safely use them.',
    ],
    faqs: [
      { q: 'What is a database migration in Supabase?', a: 'A migration is a timestamped SQL file in the supabase/migrations folder that describes one change to your schema, so every environment can replay the same changes in order.' },
      { q: 'Can I keep using the Supabase Table Editor?', a: 'You can use it on your local or staging project and then generate a migration with supabase db diff, but avoid editing production tables directly.' },
      { q: 'Does the Supabase free plan include backups?', a: 'Supabase documents automatic daily backups for Pro, Team and Enterprise projects and recommends that free projects regularly export their own data.' },
      { q: 'Do I need a separate Supabase project for staging?', a: 'For any app with real users, yes, because a staging project lets you run migrations against realistic data without risking production.' },
      { q: 'Can someone set up migrations for my existing AI-built app?', a: 'Yes, Thomas Osayi can baseline an existing Supabase schema into migrations and ship a pending change as part of his Fix Plus Features package from $200.' },
    ],
    body: `Changing a database that real people are using is the moment most AI-built apps go wrong. Someone renames a column in the Supabase dashboard, the app keeps asking for the old name, and every page that depends on it breaks. Or a new table goes live with no row level security, and anyone with the public key can read it.
None of this is hard to avoid. It takes a habit: every change goes into a migration file, gets tested somewhere that is not production, and gets checked for security before it ships. Here is the workflow I use, with the actual commands from the Supabase CLI documentation.
## Why can't I just edit tables in the Supabase dashboard?
You can, but every edit made directly on production is invisible to your migration history, so you lose the ability to repeat, review or undo changes.
Supabase's own migration guide warns that making schema changes on the remote database through the SQL editor or Table Editor bypasses migration history and causes supabase db push to fail later with sync errors. In practice that means your local project, your staging project and production slowly drift apart until nobody knows what the real schema is.
There is also no review step. A change made by clicking happens instantly, to every user, with no test run first. If it breaks the app, you are fixing it live.
Migrations fix both problems. Each change becomes a timestamped SQL file in supabase/migrations, committed to Git, applied in order everywhere. Your schema becomes part of your code, which is also what makes a handoff possible, as I explain in "How to hand off your AI-built app to a developer."
If your app came from Lovable or a similar builder, check the GitHub repo for a supabase/migrations folder. Builders often write migration files as they go, which gives you a head start.
## What should I do before changing anything?
Take a backup you know you can restore, and write down exactly what the change is and which parts of the app read the affected tables.
According to Supabase's backup documentation at the time of writing, Pro projects can access the last 7 days of daily backups, Team projects 14 days and Enterprise projects up to 30 days, and point in time recovery is available as a paid add-on on those plans. Free projects are told to export their data regularly themselves.
So, before a risky change:
- On a paid plan, confirm a recent daily backup exists in the dashboard. For a big change, consider point in time recovery.
- On any plan, take your own dump with supabase db dump, once for the schema and once with the data-only option, and store it outside Supabase.
- Search the codebase for every table and column name you plan to touch. That list tells you what to test.
> A backup you have never restored is a hope, not a backup. Restore your dump into a local or staging project once so you know the process works before you need it.
## How do I set up Supabase migrations for an existing project?
Install the CLI, link it to your project, and pull the current remote schema into a first migration that becomes your baseline.
The sequence looks like this:
- Run supabase init in your repo if there is no supabase folder yet.
- Run supabase login, then supabase link and choose your project.
- Run supabase db pull to create a migration that captures the current remote schema.
- Run supabase migration list to confirm local and remote agree.
- Run supabase start to boot a local Supabase stack in Docker, and supabase db reset to rebuild it from your migrations and seed.sql.
One version note: the CLI reference currently says flags like --linked and --db-url still work in v3 but are deprecated and will be removed in v4 in favour of --remote, and the migration guide now writes commands such as supabase db push --remote. Check supabase --version and use the flags your version documents.
From here, the local database is your sandbox. You can break it as often as you like and rebuild it in seconds with supabase db reset.
## How do I make a schema change with supabase db diff or a new migration?
Either write the SQL yourself in a new migration file, or make the change in local Studio and let supabase db diff generate the SQL for you.
### Writing it by hand
Run supabase migration new add_status_to_orders. This creates an empty timestamped file in supabase/migrations. Write your SQL there, such as an alter table that adds a column with a default.
### Generating it with db diff
If you prefer clicking, make the change in your local Supabase Studio, then run supabase db diff -f add_status_to_orders. The CLI compares your local database to your migrations and writes the difference as a new migration file. Always read the generated SQL before committing it, because diff tools can express a rename as a drop and an add, which deletes data.
Either way, finish with supabase db reset to replay every migration from scratch and confirm the full history still applies cleanly. Then run the app locally against it and click through every screen that touches the changed tables.
## Do I need a staging Supabase project?
For any app with paying or real users, yes: a second Supabase project that mirrors production is where you find out whether a migration works on realistic data.
Local testing catches syntax errors and broken flows. It does not catch problems that only appear with real data: a NOT NULL constraint that fails because 300 old rows have empty values, a unique index that fails because of duplicates, an index build that takes minutes on a big table.
A simple setup:
- Create a second project named something like myapp-staging.
- Apply your migrations to it, and load either anonymized production data or a realistic seed.
- Point a preview deployment of your frontend at it, using separate environment variables.
- Push every migration to staging first, test, and only then push to production.
Supabase also offers Branching, and its migration guide suggests a CI pipeline that runs supabase db push on merge to main. Both are good once the basic habit is in place. Start with a plain staging project if you are new to this.
## How do I push migrations to production safely?
Preview the push with the dry run option, push during a quiet period, and have your backup and rollback plan ready before you press enter.
The steps:
- Run supabase migration list against production to see exactly which migrations are pending.
- Run supabase db push with --dry-run to print what would be applied without applying it.
- Run the real push. The CLI asks for confirmation on hosted targets, and non-interactive runs such as CI need --yes.
- Immediately test the critical flows on the live app.
Ship changes in an order that never breaks the running app:
- Additive changes are safe in one step: new tables, new nullable columns, new indexes.
- To add a required column, add it as nullable, backfill it, deploy code that writes it, then add the NOT NULL constraint.
- To rename a column, add the new one, copy data, deploy code that uses it, and drop the old one in a later migration.
- Never drop a column or table the currently deployed frontend still reads.
If a push goes wrong, write a new migration that reverses it rather than editing old files. The supabase migration repair command only changes the history table and does not run SQL, so it is for fixing history mismatches, not for undoing changes.
## What do I need to check about RLS after a schema change?
Check that every new table has row level security enabled with correct policies and grants, and that new columns on existing tables do not expose data through existing policies.
This is the step people skip, and it is where data leaks come from. After every migration, check:
- New tables: enable row level security with an alter table statement, then add policies for select, insert, update and delete as needed. Supabase's documentation warns that a table in an exposed schema without RLS is readable and writable by any role with a grant on it.
- Grants: Supabase announced that new tables in the public schema are no longer exposed to the Data API automatically, a change that reached existing projects on October 30, 2026. Without an explicit GRANT, a role cannot reach the table, so a feature can mysteriously return nothing. Supabase recommends putting the grants, the RLS statement and the policies in the same migration as the table.
- New columns: a sensitive column added to a table, say internal notes on a bookings table, is readable by anyone the existing select policy allows. Move sensitive data to its own table with stricter policies.
- Views and functions: views can bypass RLS unless created with security_invoker, and security definer functions run with elevated rights.
Then rerun your cross-user permission tests. My post "Is your Lovable or Bolt app leaking data? Check Supabase row level security" goes deeper on policies.
## What does a safe change look like in practice? A worked example
Here is an illustration with a made-up app: a catering order tool on Supabase that needed orders to move from a simple paid flag to a status column with values like pending, confirmed and delivered.
The safe sequence ran over two deploys. First, a backup and a local baseline with supabase db pull. Then one migration that added a nullable status column, backfilled it from the old paid flag, and added an index on status. That went to staging, where the backfill revealed 40 old test orders with odd data, which were cleaned up in the same migration. After pushing to production, the frontend was updated to read and write status.
A week later, once nothing read the paid flag anymore, a second migration set status to NOT NULL and dropped the old column. At no point did the live app break. I use the same discipline with Prisma migrations on the Postgres-backed codebase I work on at The Hoop Gang; the tool differs, the rules do not.
![The TheHoopGang creator portal homepage, part of a Next.js, Prisma and Postgres codebase I work on](/shots/hoopgang-home.jpg)
Setting up migrations for an existing app and shipping one change like this usually fits my Fix Plus Features package from $200. If the change is one part of getting an app ready to launch, it sits inside Finish and Launch from $600.
## The bottom line
Safe Supabase changes come from a short routine: back up, baseline your schema into migrations, make each change as a migration file, test it locally and on staging, push with a dry run first, and recheck RLS, policies and grants afterwards. It feels slower the first time. It is much faster than restoring a broken production database on a Friday night.`,
    sources: [
      { title: 'Database Migrations', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/deployment/database-migrations' },
      { title: 'supabase db diff (CLI reference)', publisher: 'Supabase', url: 'https://supabase.com/docs/reference/cli/supabase-db-diff' },
      { title: 'Database Backups', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/platform/backups' },
      { title: 'Breaking change: tables not exposed to Data and GraphQL API automatically', publisher: 'Supabase', url: 'https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically' },
      { title: 'Row Level Security', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/database/postgres/row-level-security' },
    ],
  },
  {
    slug: 'vercel-function-timeout',
    title: 'Vercel function timeout (FUNCTION_INVOCATION_TIMEOUT): causes and fixes',
    description: 'What the Vercel FUNCTION_INVOCATION_TIMEOUT 504 error means, the current maxDuration limits per plan, and how to fix it with config, streaming or background jobs.',
    date: d,
    keywords: ['Vercel function timeout', 'FUNCTION_INVOCATION_TIMEOUT', 'Vercel maxDuration', 'Vercel 504 gateway timeout', 'Vercel background jobs'],
    service: 'fix-ai-built-app',
    shortAnswer: 'FUNCTION_INVOCATION_TIMEOUT is a 504 error Vercel returns when a function runs past its maximum duration. Fix it by making sure every code path returns a response, speeding up or limiting slow calls, raising maxDuration within your plan limit, streaming long responses, or moving long work into a background job.',
    takeaways: [
      'The error means your function ran too long or never returned a response, not that Vercel is down.',
      'With fluid compute, which is on by default, functions default to 300 seconds on every plan at the time of writing.',
      'Hobby cannot go past 300 seconds, while Pro and Enterprise can set up to 800 seconds, or longer in a beta.',
      'Raising maxDuration hides slow code; streaming and background jobs actually fix long work.',
    ],
    faqs: [
      { q: 'What does FUNCTION_INVOCATION_TIMEOUT mean on Vercel?', a: 'It means a Vercel Function took longer than its allowed maximum duration, so Vercel stopped it and returned a 504 Gateway Timeout.' },
      { q: 'How do I increase the timeout of a Next.js route on Vercel?', a: 'In the App Router, export a maxDuration constant in seconds from the route file, staying within the maximum your plan allows.' },
      { q: 'Does upgrading to Vercel Pro fix timeouts?', a: 'It raises the ceiling from 300 to 800 seconds at the time of writing, but a function that hangs or never returns will still time out.' },
      { q: 'Does streaming stop a function from timing out?', a: 'Streaming gets the first bytes to the user quickly and keeps connections from looking idle, but the function is still bound by its maximum duration.' },
      { q: 'Can someone fix Vercel timeouts in my AI-built app?', a: 'Yes, Thomas Osayi fixes a single timeout bug from $60 with his Quick Fix package, or moves long work into background jobs as part of Fix Plus Features from $200.' },
    ],
    body: `The app works on your machine. You deploy to Vercel, click the button that generates a report or calls an AI model, wait, and get a page that says 504: GATEWAY_TIMEOUT with the code FUNCTION_INVOCATION_TIMEOUT underneath.
This one is common in AI-built apps because they lean on slow outside calls: language models, PDF generation, imports, scraping, bulk emails. Here is what the error actually means, the current limits, and the fixes in the order I try them.
## What does FUNCTION_INVOCATION_TIMEOUT mean?
It means one of your Vercel Functions ran longer than its maximum allowed duration, so Vercel terminated it and returned an HTTP 504.
Every API route, server action and server-rendered page on Vercel runs as a function with a time limit. When the limit passes, Vercel stops the function, whatever it was doing, and the user gets the error page. Any work not finished is lost unless you designed for that.
Vercel's error documentation lists five causes, and in my experience they show up in roughly this order in AI-built apps:
- The function takes too long, usually waiting on an external API or a slow database query.
- The function never returns a response. Some code path finishes without returning anything, so the request hangs until the limit.
- Upstream errors. An external API or database is failing or hanging and the code waits forever.
- Unhandled exceptions that leave the request without a response.
- An infinite loop.
Note the second one. A route that times out only in certain cases is often not slow at all. It just forgot to return in one branch, such as an early exit for a missing parameter.
## What are the current Vercel function time limits?
At the time of writing, with fluid compute enabled, which is the default, functions get a default of 300 seconds on every plan, Hobby can go no higher than 300 seconds, and Pro and Enterprise can raise it to 800 seconds.
Vercel's duration documentation, current at the time of writing, sets these limits:
- Hobby: 300 seconds default, 300 seconds maximum.
- Pro: 300 seconds default, 800 seconds maximum, and up to 1,800 seconds (30 minutes) in an extended duration beta.
- Enterprise: same as Pro.
The 30 minute beta applies to supported Node.js, Bun and Python runtimes, and during the beta anything above 800 seconds must be set per function, not as a project default. For work with no time limit at all, Vercel points to its Workflows product.
Two caveats. Older projects that still have fluid compute turned off run with much lower limits, so check Settings, then Functions, in your project before assuming the numbers above apply. And limits change, so confirm against the documentation in the sources below if you are reading this months later.
> To see the real limit a deployment is running with, run vercel inspect with your deployment URL and the --json flag. Each function's max duration shows up as timeout.
## How do I set maxDuration in Next.js?
In the App Router, export a constant named maxDuration from the route file, in seconds; for a project-wide default, use the dashboard or vercel.json.
The three ways:
- Per route in the App Router: add export const maxDuration = 60 at the top of app/api/report/route.ts or a page file.
- Per route in the Pages Router: export a config object with maxDuration set from the API route file.
- Project-wide: set Default Max Duration under Settings, Functions, or add a functions entry in vercel.json with a glob like app/api/ followed by a wildcard and a maxDuration value.
If your project uses the src directory, the vercel.json paths need the src prefix or they will not match.
Raising the limit is the right fix when the work is legitimately long but bounded, for example a report that reliably takes 90 seconds. It is the wrong fix when the function hangs. A function that never returns will hang for 800 seconds just as happily as for 300, and you pay for the compute while it waits.
## How do I find out why my function is slow?
Read the runtime logs for the failing request, then time each step inside the function so you know which call eats the time.
In the Vercel dashboard, open the project, go to Logs, and filter by the failing route. Look for errors logged just before the timeout, and for the duration of each request. Then add simple timing logs around each step: the database query, each external API call, any loop over many items. Deploy and trigger it again.
The usual findings:
- An AI model call generating a long response without streaming, taking 40 to 120 seconds.
- A loop that calls an API once per row, such as sending 500 emails one at a time.
- A database connection that waits because the pool is exhausted. Serverless functions open many connections, so use your database's pooled connection string; Supabase provides one for exactly this.
- A fetch to an external API with no timeout, which waits for a server that never answers. Add an AbortSignal timeout so it fails fast with a clear error.
- A slow query missing an index, which my post on speeding up a slow Lovable app covers in detail.
## How does streaming help with timeouts?
Streaming sends the response in pieces as it is produced, so users see output within a second or two and long-running connections do not sit idle, but it does not lift the duration limit.
For AI features this is the most important fix. Instead of waiting for a model to finish a 2,000 word answer and then returning it, stream tokens to the browser as they arrive. Libraries like the Vercel AI SDK make this a few lines: the route returns a streaming response and the client renders text as it comes in. The user experience changes from a frozen spinner to text appearing immediately.
Streaming also helps with intermediaries. Vercel's documentation notes that HTTP/1.1 clients and network layers may close idle connections, and recommends streaming progress or heartbeat data while work runs.
What streaming does not do is let a function run forever. The stream still has to finish within maxDuration. If a single model call can take longer than your limit, you need a background job instead.
## When should I move work into a background job?
Move work into the background whenever it does not need to finish before the user sees a response, or when it can take longer than your plan's limit.
Vercel's background workers guide lists the main options:
- waitUntil from the Vercel functions package, or after() in Next.js 15.1 and later, runs a short task after the response is sent. It stays within the function's max duration and has no retries, so a failed task is lost. Good for logging or a single follow-up call.
- Cron Jobs run a function on a schedule defined in vercel.json, in production only. At the time of writing Hobby supports one run per day per cron job, while Pro and Enterprise allow intervals as short as one minute. Make cron jobs safe to run twice, since delivery can be missed or duplicated.
- Queues give you retries and at least once delivery, so consumers must be idempotent.
- Workflows split work into steps that can pause, retry and resume, with each step limited by the function max duration but the whole run unlimited.
The usual pattern: the route saves a job row with status pending, returns immediately, and the background process does the work and updates the row. The interface polls or subscribes and shows progress.
When I think about features like SQWAD's revenue attribution, which ties Meta ads back to the creator and video behind them, that is the kind of bulk data work I would never try to squeeze into a single user request.
![SQWAD's revenue attribution page, which traces every Meta ad to the creator and video behind it](/shots/sqwad-creator-revenue-attribution.jpg)
## How do I stop timeouts from coming back?
Give every slow operation an explicit budget, watch durations in your logs, and test with realistic data sizes before each release.
Timeouts tend to return quietly as data grows. A route that handled 50 records in 20 seconds at launch handles 500 records a few months later and starts failing. A few habits keep that from surprising you:
- Set your own timeouts on outside calls, shorter than maxDuration, so a hanging API fails with a clear error you can log and retry, instead of taking the whole function down with it.
- Cap batch sizes in code. If a route processes items in a loop, limit it to a number you know finishes comfortably, and hand the rest to a background job.
- Watch function durations in the Vercel dashboard. A route creeping from 10 seconds toward the limit is a warning you can act on early.
- Keep a staging copy with production-sized data, so a slow path shows up before users see it.
- Return a useful error message to the interface, so users see "this is taking longer than expected" rather than a raw 504 page.
## What does a typical fix look like? A worked example
Here is an illustration with a made-up app: a property management tool built in Bolt, deployed on a Hobby Vercel plan, with a "generate monthly owner reports" button that timed out for larger clients.
The logs showed the route looping over every property, calling an AI model to write a summary for each, then building a PDF, all inside one request. Small clients with five properties finished in a minute. A client with 40 properties needed about eight minutes and hit the limit every time.
The fix had three parts. The button now creates a report job and returns at once. A background workflow processes one property per step, so no single step comes close to the limit. The AI summary calls stream when a user previews one report interactively, and the final PDF is built once all steps finish. The interface shows a progress bar and emails the owner when the report is ready. Nothing needed a plan upgrade.
A single cause, like a missing return or an unpooled connection, fits my Quick Fix from $60. Restructuring a long task into a background job usually fits Fix Plus Features from $200.
## The bottom line
FUNCTION_INVOCATION_TIMEOUT is Vercel telling you a function ran past its limit or never answered. Check that every code path returns, find the slow step with logs and timing, then pick the right fix: a higher maxDuration for bounded work, streaming for AI responses, and background jobs for anything long or bulk. If you are seeing other deploy errors too, "Vercel build failed? The most common Next.js deploy errors and fixes" covers the build side.`,
    sources: [
      { title: 'FUNCTION_INVOCATION_TIMEOUT', publisher: 'Vercel', url: 'https://vercel.com/docs/errors/FUNCTION_INVOCATION_TIMEOUT' },
      { title: 'Configuring Maximum Duration for Vercel Functions', publisher: 'Vercel', url: 'https://vercel.com/docs/functions/configuring-functions/duration' },
      { title: 'Running background workers on Vercel', publisher: 'Vercel', url: 'https://vercel.com/kb/guide/background-workers-on-vercel' },
    ],
  },
  {
    slug: 'nextjs-image-hostname-not-configured',
    title: 'Fix the next/image "hostname is not configured" error in Next.js',
    description: 'Fix the next/image error that says a hostname is not configured under images in next.config.js, with remotePatterns examples for Supabase Storage and Firebase Storage.',
    date: d,
    keywords: ['next/image hostname not configured', 'Next.js remotePatterns', 'next.config images remotePatterns', 'Supabase storage next/image', 'Firebase storage next/image'],
    service: 'fix-ai-built-app',
    shortAnswer: 'The error means an image URL passed to next/image uses a hostname that is not allowed in images.remotePatterns in next.config.js. Add a remotePatterns entry with the exact protocol, hostname, port and pathname of your image host, such as your project.supabase.co or firebasestorage.googleapis.com, then restart the dev server or redeploy.',
    takeaways: [
      'Next.js only optimizes remote images from hosts you explicitly allow in images.remotePatterns.',
      'Matching is exact: protocol, hostname, port, pathname and query string all have to fit the pattern.',
      'Signed Supabase URLs and Firebase download URLs carry query strings, so use the object form of remotePatterns without a search key.',
      'Avoid allowing every hostname, because it lets anyone use your app to optimize images you never intended to serve.',
    ],
    faqs: [
      { q: 'Why does next/image say my hostname is not configured?', a: 'Because the image URL points to a host that does not match any entry in images.remotePatterns in next.config.js, so Next.js refuses to optimize it.' },
      { q: 'Should I use images.domains or remotePatterns?', a: 'Use remotePatterns, because the Next.js documentation marks images.domains as deprecated since Next.js 14 in favour of stricter remote patterns.' },
      { q: 'Why does the image work locally but return 400 in production?', a: 'Production returns 400 Bad Request for unmatched images, often because the production URL differs from the local one in protocol, hostname or query string, or the config change was never redeployed.' },
      { q: 'Can I just add the unoptimized prop to make the error go away?', a: 'Yes, unoptimized serves the image as is without the allowlist check, but you lose resizing and modern formats, so it suits only a few special cases.' },
      { q: 'Can someone fix image errors in my AI-built Next.js app?', a: 'Yes, Thomas Osayi fixes a single bug like this from $60 with his Quick Fix package, usually within two days.' },
    ],
    body: `You add a profile photo or product image from Supabase Storage or Firebase to a Next.js page, and instead of the image you get a red error overlay. In development it reads something like: Error: Invalid src prop (https://abcd1234.supabase.co/storage/v1/object/public/avatars/me.png) on next/image, hostname "abcd1234.supabase.co" is not configured under images in your next.config.js. In production the image simply fails with a 400.
The fix is a few lines in next.config.js. Getting those lines exactly right is the part that trips people up, especially in apps generated by v0, Cursor or Bolt, which often use the Image component without touching the config. Here is how it works and the patterns I use for the common hosts.
## What does "hostname is not configured under images" mean?
It means you passed a remote URL to the next/image component, and that URL's host is not in the allowlist Next.js uses to decide which external images it will optimize.
The Image component does more than render an img tag. It sends the source through Next.js's image optimizer, which downloads the original, resizes it for the visitor's screen and converts it to a modern format. Because that optimizer fetches whatever URL it is given, an open optimizer could be abused to process arbitrary images on your server's dime. So Next.js refuses any remote image that does not match a pattern you explicitly allowed.
That allowlist lives in images.remotePatterns in next.config.js, or next.config.ts or next.config.mjs, depending on your project. Locally a mismatch shows the error overlay. In production, the Next.js docs state that any unmatched protocol, hostname, port or path responds with 400 Bad Request.
Local images in the public folder are not affected. This error is only about URLs that start with http or https.
## How do I fix it with remotePatterns?
Add an entry to images.remotePatterns that matches the protocol, hostname, port and pathname of your image URLs, then restart the dev server.
There are two ways to write an entry.
### The object form
This works in every recent Next.js version and is the one I recommend for storage providers. Inside images, add remotePatterns with an object containing protocol: 'https', hostname: 'assets.example.com', port: '' and a pathname such as '/account123/' followed by the two-asterisk wildcard, which Next.js reads as any number of path segments.
### The URL form
Since Next.js 15.3 you can pass new URL() with the full pattern, for example the address of your bucket followed by the wildcard. It is shorter, but there is a catch covered below: when the URL has no search part, query strings are not allowed at all.
After editing the config, stop and restart next dev, because config changes are not hot reloaded. On Vercel, the change only takes effect after a new deployment.
> Copy the failing URL from the error message itself and build your pattern from that exact string. Guessing the host from memory is how people end up allowing www.example.com when the images come from cdn.example.com.
## Why does it still fail after I added the hostname?
Because matching is exact and case-sensitive across every part of the URL, so a single mismatched piece still fails the check.
The Next.js error documentation lists the usual suspects, and I see all of them:
- Protocol mismatch: the pattern says http and the URL is https, or the reverse.
- Subdomains: example.com does not match www.example.com or assets.example.com.
- Ports: in local development, a URL like localhost:3000 needs the port in the pattern.
- Pathname too narrow: a pattern of /images/ with no wildcard does not cover /images/2026/photo.jpg.
- Query strings: with the URL form and no search part, any URL with a query string is rejected.
- Wrong file: editing next.config.js when the project actually loads next.config.ts or next.config.mjs.
- No restart or no redeploy after the change.
Wildcards can help with subdomains. Per the docs, a single asterisk matches one subdomain or path segment, and a double asterisk matches any number of subdomains at the beginning or path segments at the end, but not in the middle. So a hostname pattern of '*.supabase.co' covers any one project subdomain.
When none of that explains it, debug the match directly. Log the exact src value your component receives in the browser console, because generated code often builds URLs from environment variables, and a missing variable in production can produce a host like undefined or a relative path that suddenly looks remote. Compare that logged value piece by piece with your pattern: protocol, then hostname, then port, then the start of the path, then whether a query string is present. It feels tedious, but it usually takes two minutes and ends the guessing. If several environments use different storage projects, such as a staging Supabase project and a production one, each hostname needs its own entry.
## What is the remotePatterns config for Supabase Storage?
Allow https, your project's hostname at supabase.co, and a pathname starting with /storage/v1/object/ so both public and signed URLs work.
Supabase documents the public URL format as your project ID at supabase.co, then /storage/v1/object/public/, then the bucket and file name. So the pattern is:
- protocol: 'https'
- hostname: 'abcd1234.supabase.co', using your own project reference
- port: ''
- pathname: '/storage/v1/object/public/' followed by the two-asterisk wildcard
If you use private buckets with signed URLs, those use a different segment after object and carry a token as a query string. Widen the pathname to '/storage/v1/object/' plus the wildcard, and use the object form without a search key so any query string is allowed.
Two Supabase-specific mistakes I run into:
- A custom domain for Supabase changes the hostname, so the pattern must use the custom domain, not the supabase.co one.
- Using a single asterisk subdomain pattern across all of supabase.co lets any Supabase project's public files through your optimizer. Pin your own project reference instead.
## What is the remotePatterns config for Firebase Storage?
Allow https and the hostname firebasestorage.googleapis.com, with a pathname starting with /v0/b/ followed by your bucket name.
Download URLs returned by getDownloadURL in the Firebase web SDK point at firebasestorage.googleapis.com, with the bucket and the percent-encoded object path in the path, and a query string such as alt=media plus an access token. That query string is why the URL form of remotePatterns breaks here. Use the object form:
- protocol: 'https'
- hostname: 'firebasestorage.googleapis.com'
- port: ''
- pathname: '/v0/b/your-bucket-name/o/' followed by the wildcard
Leave out the search key so the token is accepted. Pinning the bucket name in the path matters for the same reason as with Supabase: firebasestorage.googleapis.com serves files for every Firebase project, and you only want yours.
Other hosts that show up in apps with social sign-in:
- Google profile photos from Google sign-in usually come from lh3.googleusercontent.com.
- Public Google Cloud Storage objects come from storage.googleapis.com.
- Image CDNs like Cloudinary or Imgix each have their own hostname to add.
If you are wiring up Firebase sign-in in a Next.js app, "Firebase Authentication in the Next.js App Router: how to do it properly" covers the auth side.
## Should I use unoptimized or allow all hostnames instead?
Use unoptimized only for specific images that should not go through the optimizer, and do not allow all hostnames in a real app.
The unoptimized prop serves the original file as is and skips the allowlist. The Next.js docs suggest it for images that require authentication, and SVGs are served unoptimized automatically when the source ends in .svg. It is a fine choice for a handful of special cases. It is a poor default, because you give up resizing and modern formats, which is the whole point of the component, and your pages get heavier. My post "Core Web Vitals explained for small business owners" explains why that matters for search.
Allowing every hostname with a double wildcard pattern makes the error disappear, and you will find it in a lot of AI-generated configs. The Next.js documentation warns against omitting parts of the pattern because it may allow malicious actors to optimize URLs you did not intend. On Vercel, image optimization usage counts toward your plan, so an open optimizer can also cost money.
The images.domains option you may see in old tutorials is deprecated since Next.js 14 and cannot restrict protocol, port or path. Replace it with remotePatterns when you touch the config.
## What other next/image errors show up next?
Once the hostname is fixed, the next issues are usually missing dimensions, quality values or images on private networks.
- Missing width and height: remote images need width and height props, or the fill prop inside a positioned parent, so Next.js can reserve space.
- Quality values: Next.js 16 requires the qualities list in config, and a quality not in the list is coerced to the closest allowed value, with a warning in development.
- Priority: in Next.js 16, the priority prop is deprecated in favour of preload or loading="eager" for above-the-fold images.
- Local IPs: when self-hosting on a private network, images from local IP addresses are blocked by default, and dangerouslyAllowLocalIP exists for that rare case, with a real security trade-off.
If the error appears only after deploying, my post "Vercel build failed? The most common Next.js deploy errors and fixes" covers the build and environment issues that often travel with it.
## What does the fix look like in a real project? A worked example
Here is an illustration with a made-up app: a gym's member portal generated in v0 and Cursor, with profile photos in a public Supabase bucket called avatars and class photos uploaded by staff through Firebase Storage from an older system.
The pages showed the hostname error for both. The config had an old images.domains entry for a stock photo site and nothing else. The fix was one remotePatterns array with two object entries: one for the project's supabase.co hostname with the /storage/v1/object/ pathname, and one for firebasestorage.googleapis.com pinned to the gym's bucket path, with no search key so Firebase tokens pass. The old domains entry became a third pattern. After a restart locally and a redeploy, both image types loaded, resized and in modern formats.
It took under an hour, including testing on the Vercel preview deployment. A fix like this fits my Quick Fix package from $60.
## The bottom line
The next/image hostname error is Next.js protecting its image optimizer. Copy the exact failing URL, add a remotePatterns entry that matches its protocol, hostname, port and path, use the object form when URLs carry tokens, pin your own Supabase project or Firebase bucket, and restart or redeploy. Avoid allowing every host. If this is one of several things breaking in an AI-built Next.js app, my fix your AI-built app service is built for exactly that list.`,
    sources: [
      { title: 'next/image Un-configured Host', publisher: 'Next.js', url: 'https://nextjs.org/docs/messages/next-image-unconfigured-host' },
      { title: 'Image Component', publisher: 'Next.js', url: 'https://nextjs.org/docs/app/api-reference/components/image' },
      { title: 'Serving assets from Storage', publisher: 'Supabase', url: 'https://supabase.com/docs/guides/storage/serving/downloads' },
      { title: 'Download files with Cloud Storage on Web', publisher: 'Firebase', url: 'https://firebase.google.com/docs/storage/web/download-files' },
    ],
  },
];
