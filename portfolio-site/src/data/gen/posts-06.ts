// Generated troubleshooting posts, batch 06 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen06: Post[] = [
  {
    slug: 'supabase-auth-redirect-url-not-working',
    title: 'Supabase auth redirect URL not working? Fix localhost, preview and production redirects',
    description: 'Supabase confirmation or magic links sending users to localhost:3000 or the wrong page? Fix the Site URL, the Redirect URLs allow list, wildcards and emailRedirectTo.',
    date: d,
    keywords: ['Supabase auth redirect URL not working', 'Supabase redirect to localhost', 'Supabase emailRedirectTo', 'Supabase Redirect URLs wildcard', 'Supabase Site URL'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Supabase only honors a redirectTo or emailRedirectTo value that matches an entry in the Redirect URLs allow list under Authentication, URL Configuration; anything else falls back to the Site URL, which is often still http://localhost:3000. Set the Site URL to your production domain, add exact or wildcard entries for production, previews and local development, and make your email templates use the redirect value.',
    takeaways: [
      'If users land on localhost after clicking a Supabase email link, the Site URL is still set to localhost or the redirect you passed is not on the allow list.',
      'The Redirect URLs allow list supports wildcards, where a single asterisk stops at dots and slashes and two asterisks match anything.',
      'Passing emailRedirectTo or redirectTo in code does nothing unless the exact URL, or a matching wildcard pattern, is saved in the dashboard.',
      'Email templates that hard-code the Site URL ignore your redirect value, so switch them to the RedirectTo variable when you send users elsewhere.',
      'Vercel preview deployments need their own wildcard entry because every commit gets a new URL.',
    ],
    faqs: [
      { q: 'Why does my Supabase confirmation email redirect to localhost:3000?', a: 'Because the Site URL in Authentication, URL Configuration is still http://localhost:3000, and Supabase uses the Site URL whenever no allowed redirect is supplied.' },
      { q: 'Do Supabase Redirect URLs support wildcards?', a: 'Yes, a single asterisk matches characters up to the next dot or slash, and a double asterisk matches any sequence, including nested paths.' },
      { q: 'What is the difference between Site URL and Redirect URLs in Supabase?', a: 'The Site URL is the default destination and the base for email template links, while Redirect URLs is the allow list of other places your code may send users after sign-in.' },
      { q: 'Where do I set redirect URLs for local Supabase development?', a: 'When you run Supabase locally with the CLI, set site_url and additional_redirect_urls under the auth section of supabase/config.toml and restart the local stack.' },
      { q: 'Can someone fix my Supabase auth redirects for me?', a: 'Thomas Osayi fixes a single bug like a broken auth redirect from $60 in about two days, and handles up to three fixes plus a small feature from $200.' },
    ],
    sources: [
      { title: 'Redirect URLs', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/auth/redirect-urls' },
      { title: 'Why am I being redirected to the wrong url when using auth redirectTo option?', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/troubleshooting/why-am-i-being-redirected-to-the-wrong-url-when-using-auth-redirectto-option-_vqIeO' },
      { title: 'Email Templates', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/auth/auth-email-templates' },
      { title: 'JavaScript: Create a new user (signUp)', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/reference/javascript/auth-signup' },
    ],
    body: `The symptom usually looks like this. A user signs up on your live site, opens the confirmation email, clicks the link, and the browser shows "This site can't be reached. localhost refused to connect." Or the magic link works but drops them on the homepage instead of the dashboard. Or Google sign-in works on your laptop and quietly sends people back to the preview URL in production. The code says redirectTo or emailRedirectTo with the right address, and Supabase seems to ignore it.
It is not ignoring you at random. Supabase Auth checks every redirect against a list you control in the dashboard, and when the check fails it falls back to a default. This is one of the most common issues I see in apps built with Lovable, Bolt or Cursor on top of Supabase, and it is almost always fixed in the dashboard in ten minutes. Here is how it works and how to fix each version of it.
## Why is my Supabase auth redirect URL not working?
In most cases the URL you pass in code is not on the Redirect URLs allow list, so Supabase sends the user to the Site URL instead.
Supabase keeps two settings under Authentication, then URL Configuration, in the dashboard. The Site URL is the default destination after sign-in and the base used to build links in your auth emails. The Redirect URLs list is every other address your app is allowed to send users to. When your code calls signUp with options.emailRedirectTo, or signInWithOAuth or signInWithOtp with options.redirectTo, Supabase compares that value against the list. Supabase's own troubleshooting article on being redirected to the wrong URL puts it plainly: you must set the exact URL in the Redirect URLs setting.
Here are the causes, ranked by how often I find them:
- The Site URL is still http://localhost:3000, the default from when the project was created.
- The redirect URL in code is not on the allow list, or differs by protocol, port, trailing path or www.
- The email template builds its link from the SiteURL variable, so your redirect value never reaches the email.
- Preview deployments use a new URL per commit and there is no wildcard entry for them.
- The app reads the redirect base from an environment variable that is undefined in production, so the redirect becomes a relative path or "undefined/auth/callback".
## How do I stop Supabase redirecting to localhost?
Change the Site URL to your real production address and save, then send yourself a fresh email, because links already sitting in inboxes were built with the old value.
Open your project in the Supabase dashboard, go to Authentication, then URL Configuration, and set Site URL to the exact origin users visit, for example https://www.yourbrand.com. Pick the version you actually serve. If your domain redirects the apex to www, use the www version, because a redirect hop can strip the session fragment from the URL on some setups.
Then trigger a new signup or password reset and check the link inside the email before clicking it. Hover over the button or copy the link address. It should contain your production domain in the redirect_to parameter. If it still says localhost, either the save did not stick, you are looking at an old email, or your template overrides the link, which I cover below.
> Do not delete localhost entirely. Move it from the Site URL into the Redirect URLs list so local development keeps working without becoming the default for real users.
## How do the Redirect URLs allow list and wildcards work?
Each entry is a pattern, and Supabase lets you use wildcards so one entry can cover many paths or subdomains.
According to the Supabase Redirect URLs guide, the matching rules are:
- A single asterisk matches any run of characters except the separators, and the separators are the dot and the forward slash.
- A double asterisk (two asterisks in a row) matches any sequence of characters, separators included.
- A question mark matches one non-separator character.
That separator rule trips people up. The docs give the example that http://localhost:3000/ followed by a single asterisk matches /foo but not /foo/bar and not /foo/ with a trailing slash. If your callback lives at /auth/callback, a single-asterisk pattern on the root will not match it. Use the double asterisk at the end of the path for local development so every nested route is covered.
For production, the Supabase docs recommend listing the exact redirect path rather than a wildcard, for example https://www.yourbrand.com/auth/callback. An exact entry is easier to reason about and cannot be abused to send a session somewhere you did not intend.
A practical list for a typical app:
- https://www.yourbrand.com/auth/callback (exact, production)
- http://localhost:3000/ followed by a double asterisk (local development)
- https://, then a single asterisk, then -your-team-slug.vercel.app/ followed by a double asterisk (Vercel previews)
## How do I set emailRedirectTo and redirectTo correctly?
Pass a full absolute URL that matches an allow list entry, and build it from a variable that exists in every environment.
For email and password signups, the option is emailRedirectTo inside the options object of supabase.auth.signUp. The Supabase JavaScript reference shows it as options: { emailRedirectTo: 'https://example.com/welcome' }. For OAuth providers such as Google, the option is redirectTo inside the options of signInWithOAuth. For magic links it is emailRedirectTo inside signInWithOtp, and for password resets it is redirectTo in resetPasswordForEmail.
The mistakes I see most:
- A relative path like "/dashboard". It has to be absolute, including https://.
- window.location.origin used in server code, where window does not exist.
- An environment variable such as NEXT_PUBLIC_SITE_URL that is set locally in .env.local but never added on Vercel, so the redirect becomes "undefined/auth/callback". My post "Environment variables undefined on Vercel? Every cause and fix" walks through that one.
- A trailing slash mismatch. If the allow list says /auth/callback and the code sends /auth/callback/ with a slash, an exact entry will not match.
The safe pattern is a small helper that returns the production URL from NEXT_PUBLIC_SITE_URL in production, the Vercel preview URL in previews, and http://localhost:3000 locally, then appends your callback path.
## Why do my email links still use the Site URL?
Because the email template builds the link itself, and a hand-edited template that uses the SiteURL variable will ignore whatever redirect you passed.
Supabase email templates, under Authentication, then Emails, have variables. ConfirmationURL is the full link Supabase builds, including the token and your redirect target. SiteURL is just your Site URL. RedirectTo is the redirect value you passed to signUp, signInWithOtp or inviteUserByEmail, and the Supabase Email Templates docs note it must be on the allow list. TokenHash lets you build your own link.
If your template was customized to something like the SiteURL variable followed by /auth/confirm?token_hash=, every email goes to the Site URL no matter what your code sends. The Redirect URLs guide says that when you use redirectTo, you should replace SiteURL with RedirectTo in your templates.
There is a second email problem that looks like a redirect bug. Some corporate email scanners open links before the user does. The Email Templates docs describe Microsoft Defender's Safe Links consuming the confirmation link, so the user then sees "Token has expired or is invalid." The fix there is an OTP code or a landing page with a button, not a redirect change.
## How do I handle localhost, Vercel previews and production together?
Use one exact production entry, one wildcard for previews, one wildcard for localhost, and make your code pick the right base URL per environment.
Vercel gives every commit a unique URL in the form project-name, a hash, then your team slug, followed by .vercel.app. The Supabase docs suggest adding a wildcard that matches any subdomain ending in your team or account slug on vercel.app, followed by a double asterisk, and reading the deployment URL at runtime. Vercel exposes it as NEXT_PUBLIC_VERCEL_URL for Next.js apps, without the https:// prefix, so add it yourself.
For Netlify, the docs show a similar pattern using the double-hyphen preview format. For Lovable previews, add the preview domain your project actually uses. If you are moving off the builder's hosting, my guide "How to move a Lovable app to Vercel and your own domain" covers the full checklist.
For local development with the Supabase CLI, the dashboard settings do not apply. Set site_url and additional_redirect_urls under the auth section of supabase/config.toml, then restart the local stack so the change loads.
## What about Google sign-in and the PKCE callback?
OAuth adds a second allow list on the provider side, and a missing callback route in your app produces errors that look like redirect problems.
For Google, the Authorized redirect URI in your Google Cloud OAuth client must be your Supabase project's callback, https://your-project-ref.supabase.co/auth/v1/callback, not your own site. If that is wrong, Google shows "Error 400: redirect_uri_mismatch" before Supabase is even involved.
After Google hands the user back, Supabase redirects to your redirectTo URL with a code. In a Next.js App Router app using the server-side flow, that URL should hit a route such as app/auth/callback/route.ts that calls exchangeCodeForSession with the code, sets the session cookies, then redirects to the dashboard. If that file does not exist, users land on a 404 or a page that thinks they are signed out. For email confirmation with server-side auth, a route such as app/auth/confirm/route.ts reads token_hash and type and calls verifyOtp.
If authentication fails, Supabase still redirects to your URL and puts error details in the URL fragment. Check the address bar for error and error_description before assuming the redirect itself is broken.
## A worked example: a booking app stuck on localhost
Here is an illustration with a made-up business. A dog grooming studio builds a booking app in Lovable with Supabase auth, moves it to Vercel on groomstudio.com, and new customers report that the confirmation link "goes nowhere."
The checks, in order:
- The email link contains redirect_to=http://localhost:3000. The Site URL was never changed. I set it to https://www.groomstudio.com.
- The code calls signUp with emailRedirectTo built from window.location.origin plus /welcome. That is fine in the browser, but /welcome is not on the allow list. I add https://www.groomstudio.com/welcome as an exact entry.
- The confirmation template was customized to use SiteURL. I switch it back to ConfirmationURL.
- Previews break for the owner when testing. I add the vercel.app wildcard for the team slug.
- Local development still works because localhost with a double asterisk sits in the allow list.
Total time is under an hour, most of it testing with fresh emails. Nothing in the app code needed rewriting.
## When should I get help?
Get help when the dashboard settings are correct and fresh emails still misbehave, because then the problem lives in your callback routes, cookies or middleware.
Typical signs: the session appears for a moment and then disappears, sign-in works on Chrome but not Safari, or the app loops between the login page and the dashboard. Those come from how the session is stored and refreshed, not from the allow list. They often sit next to other launch issues, which I list in "Your Lovable or Bolt app works locally. Here is what breaks at launch." If you are not sure your tables are protected once users can sign in, read "Is your Lovable or Bolt app leaking data? Check Supabase row level security" before you open signups.
A single redirect bug fits my Quick Fix from $60, delivered in about two days. If auth is one of several launch blockers, Fix Plus Features from $200 covers up to three fixes plus one small feature.
## The bottom line
When a Supabase auth redirect is not working, start in the dashboard, not the code. Set the Site URL to your production domain, put localhost and preview patterns in the Redirect URLs list, use exact entries for production paths, and remember that a single asterisk stops at dots and slashes. Then check that your email templates use the redirect value and that the URL you pass in emailRedirectTo or redirectTo is absolute and built from a variable that exists in production. Test every change with a brand new email, never an old one.`,
  },
  {
    slug: 'environment-variables-undefined-on-vercel',
    title: 'Environment variables undefined on Vercel? Every cause and fix',
    description: 'Works locally, undefined on Vercel? Fix missing NEXT_PUBLIC_ and VITE_ prefixes, wrong Production or Preview scope, the missing redeploy and build-time vs runtime mixups.',
    date: d,
    keywords: ['environment variables undefined Vercel', 'NEXT_PUBLIC_ undefined', 'Vite env variables undefined', 'Vercel env not working', 'process.env undefined production'],
    service: 'fix-ai-built-app',
    shortAnswer: 'An environment variable is usually undefined on Vercel because it only exists in your local .env file, it is not scoped to the environment you deployed (Production or Preview), the deployment was built before you added it, or browser code reads it without the NEXT_PUBLIC_ prefix in Next.js or the VITE_ prefix in Vite. Add it under Project Settings, Environment Variables, tick the right environments, use the correct prefix and full name, then redeploy.',
    takeaways: [
      'Your .env.local file is ignored by Git, so Vercel never sees it and every variable must be added in Project Settings.',
      'Vercel applies variable changes only to new deployments, so a dashboard edit does nothing until you redeploy.',
      'Browser code only sees variables with the framework prefix: NEXT_PUBLIC_ for Next.js and VITE_ for Vite.',
      'Public variables are baked into the JavaScript at build time, and dynamic lookups like process.env[name] are not replaced.',
      'A variable ticked only for Production will be undefined on Preview deployments, and the reverse is also true.',
    ],
    faqs: [
      { q: 'Why is my environment variable undefined on Vercel but works locally?', a: 'Most often the variable lives only in your local .env.local file, which is not committed to Git, so you need to add it in the Vercel dashboard and redeploy.' },
      { q: 'Do I need to redeploy after changing environment variables on Vercel?', a: 'Yes, Vercel only applies environment variable changes to new deployments, so the running deployment keeps its old values until you redeploy.' },
      { q: 'Why is my NEXT_PUBLIC_ variable undefined in the browser?', a: 'Next.js inlines NEXT_PUBLIC_ values at build time, so the variable must exist when the build runs and must be referenced by its full literal name, not through a dynamic lookup.' },
      { q: 'What prefix does a Vite or Lovable app need for environment variables?', a: 'Vite only exposes variables that start with VITE_ to client code, read through import.meta.env, so a Supabase URL should be named VITE_SUPABASE_URL.' },
      { q: 'Should secret keys use the NEXT_PUBLIC_ or VITE_ prefix?', a: 'No, anything with those prefixes is shipped to every visitor in the JavaScript bundle, so secret keys must stay unprefixed and be read only in server code.' },
      { q: 'How much does it cost to fix environment variable problems in a deployed app?', a: 'Thomas Osayi fixes a single deploy bug like this from $60, and gets apps whose core features already work launched from $600.' },
    ],
    sources: [
      { title: 'Environment variables', publisher: 'Vercel Docs', url: 'https://vercel.com/docs/projects/environment-variables' },
      { title: 'How to use environment variables in Next.js', publisher: 'Next.js Docs', url: 'https://nextjs.org/docs/app/guides/environment-variables' },
      { title: 'Env Variables and Modes', publisher: 'Vite', url: 'https://vite.dev/guide/env-and-mode' },
    ],
    body: `You deploy to Vercel, open the site, and the console says "Error: supabaseUrl is required." or "FirebaseError: Firebase: Error (auth/invalid-api-key)." Or a fetch goes to "undefined/api/orders". Everything worked a minute ago on localhost. The variable is right there in your .env file.
This is the single most common reason an AI-built app that works locally breaks on its first real deploy. The good news is that there are only five or six causes, and you can check them all in about fifteen minutes. I will go through them in the order I find them, with the exact screens, prefixes and files involved.
## Why are my environment variables undefined on Vercel?
Because Vercel builds your app from your Git repository and its own dashboard settings, not from the .env files on your laptop.
Ranked by how often I see them:
- The variable only exists in .env.local, which is listed in .gitignore, so Vercel never received it.
- It is set in Vercel but only for Production, and you are looking at a Preview deployment, or the other way round.
- It was added or changed after the last build, and nobody redeployed.
- Browser code reads a variable without the framework prefix: NEXT_PUBLIC_ in Next.js, VITE_ in Vite.
- The code reads it dynamically, for example process.env[key] or a destructured copy of process.env, so the build never replaces it.
- The name has a typo, a different case, or the pasted value includes quotes or a trailing space.
Each one produces the same symptom, an undefined value, so the trick is to check them in order instead of guessing.
## Did I actually add the variable in Vercel?
Check Project Settings, then Environment Variables, because if a variable is not listed there, Vercel does not have it.
The default Next.js template adds .env files to .gitignore, and the Next.js docs warn that you almost never want to commit them. Lovable, Bolt and Cursor projects usually follow the same pattern. That is correct for security, but it means the values on your machine never reach Vercel.
To add them, open your project on vercel.com, go to Settings, then Environment Variables. You can add them one by one, or paste the whole contents of a .env file into the Key field, which the Vercel docs say creates one variable per line. There is also an Import .env button. Before saving, review each variable's type and which environments it applies to.
Two details matter here. First, if you use a src folder in Next.js, the docs note that .env files are loaded only from the project root, not from inside src. Second, if your repository is a monorepo and the Vercel project's Root Directory points at a subfolder, the variables belong to that Vercel project, so add them there.
> Paste values without surrounding quotes. A value saved as "https://abc.supabase.co" with the quote marks included will look fine in the dashboard and fail in the client.
## Is the variable set for the right environment?
Each variable applies only to the environments you tick, so a value set for Production alone is undefined on every Preview deployment.
Vercel has three standard environments, per its environment variables docs. Production applies to deployments from your production branch, usually main, or from vercel --prod. Preview applies to deployments from any other branch. Development is used when you run vercel dev locally and is what vercel env pull downloads into .env.local.
Preview variables can also be scoped to a single Git branch, and a branch-specific value overrides the general Preview value with the same name. That is handy for a staging database, and also a common source of confusion when one branch reads different values from every other.
The Vercel docs list a related trap in their troubleshooting table: if your code branches on VERCEL_ENV and you use a custom environment, VERCEL_ENV reports preview there. Read VERCEL_TARGET_ENV if you need the custom environment's name.
When I audit a project, I open the variable list and look at the environment badges on each row. A Supabase URL ticked for Production but not Preview explains why "the preview link is broken but the live site works" in seconds.
## Did I redeploy after changing it?
Probably not, and you need to, because Vercel only applies variable changes to new deployments.
The Vercel docs are explicit: changes to environment variables are not applied to previous deployments, they only apply to new ones. The running deployment keeps the values it was built with. Their troubleshooting table lists "a change in the dashboard has no effect" as a symptom and "redeploy" as the fix.
To redeploy without a new commit, open the Deployments tab, find the latest deployment for the environment you changed, open its menu and choose Redeploy. For Production you can also push any commit to main. Then hard refresh the browser so you are not served cached JavaScript.
This matters even more for public variables. Next.js replaces every reference to a NEXT_PUBLIC_ variable with its literal value during next build. The Next.js docs say that after being built, your app will no longer respond to changes to these variables, and that they are frozen with the value evaluated at build time. So the build has to happen after the value exists.
## Why is my NEXT_PUBLIC_ variable undefined in the browser?
Either it lacks the prefix, it is read through a dynamic lookup, or it did not exist when the build ran.
In Next.js, non-prefixed variables are only available on the server. That is deliberate. A STRIPE_SECRET_KEY read inside a client component will always be undefined in the browser, and it should be. If a value truly needs to be public, such as a Supabase URL and anon key, a Firebase web config or an analytics ID, rename it with NEXT_PUBLIC_ in both Vercel and your code.
The second cause is subtle. The Next.js docs show that dynamic lookups are not inlined. These patterns fail in client code:
- const name = "NEXT_PUBLIC_API_URL" followed by process.env[name]
- const env = process.env followed by env.NEXT_PUBLIC_API_URL
- A config helper that loops over a list of keys and reads each from process.env
Write process.env.NEXT_PUBLIC_API_URL literally, every time, wherever the browser needs it. A small config file that exports each value by its full literal name is fine, because the build can see and replace those references.
## Why are my Vite or Lovable variables undefined?
Vite only exposes variables that start with VITE_, and you read them through import.meta.env, not process.env.
Lovable and Bolt projects are usually Vite apps under the hood. The Vite docs say that only variables prefixed with VITE_ are exposed to client code, and others, like a DB_PASSWORD in their example, stay undefined in the browser. So the variable must be named VITE_SUPABASE_URL in Vercel and read as import.meta.env.VITE_SUPABASE_URL in code.
Common mistakes when a Lovable app moves to Vercel:
- The variable is added in Vercel as SUPABASE_URL without the prefix.
- The code was edited to process.env.VITE_SUPABASE_URL, which Vite does not populate in the browser.
- The project was set up with a custom envPrefix in vite.config, so the expected prefix is different from VITE_.
Like Next.js, Vite replaces these values statically at build time, so the same redeploy rule applies. The Vite docs also warn that VITE_ variables should not contain sensitive information, because they ship in the bundle. My guide "How to move a Lovable app to Vercel and your own domain" covers the rest of that migration.
## What is the difference between build-time and runtime variables?
Public variables are baked into the JavaScript during the build, while server-only variables are read when a function runs.
In Next.js, a NEXT_PUBLIC_ value is decided once, when Vercel runs next build. A server-only value read inside a route handler, a server action, or a page that renders dynamically is read from the environment at request time. The Next.js docs show reading a value after calling connection() from next/server so the page renders dynamically and the variable is evaluated at runtime.
This has practical consequences:
- A page that is statically generated reads server variables at build time too, so a missing variable can break the build itself. My post "Vercel build failed? The most common Next.js deploy errors and fixes" covers those errors.
- If you need a value that changes without rebuilding, serve it from an API route instead of a NEXT_PUBLIC_ variable.
- Edge runtime functions and middleware have a 5 KB limit per variable at the time of writing, against a 64 KB total per deployment for Node.js and other runtimes, per the Vercel docs. Large certificates or service account JSON belong in Node.js functions.
## How do I debug which variable is missing?
Make the app tell you, instead of guessing, by checking for each required variable at startup and failing with a clear message.
My routine:
- Run vercel env ls to list variables per environment, or read the dashboard list row by row.
- Run vercel env pull to download the Development values into .env.local and compare names with your code.
- Search the codebase for process.env and import.meta.env and write down every name used.
- Add a tiny check in a server route that logs whether each required variable is present, as true or false, never the value itself.
- Read the build logs in the Deployments tab. Many SDKs print the missing variable's name during the build.
Never log secret values, even temporarily. Vercel runtime logs are visible to everyone on the team.
## A worked example: a quote app with three missing variables
Here is an illustration with a made-up business. A print shop builds a quote request app in Bolt, connects Supabase and Stripe, and deploys to Vercel. The live site shows a blank page and the console says "supabaseUrl is required."
What I find:
- The repo is a Vite app reading import.meta.env.VITE_SUPABASE_URL, but Vercel has SUPABASE_URL. I rename it.
- VITE_SUPABASE_ANON_KEY is ticked for Production only. Preview links fail. I tick Preview too.
- STRIPE_SECRET_KEY was given a VITE_ prefix "to make it work," which exposed it in the bundle. I remove the prefix, move the Stripe call into a server function, and the owner rotates the key in the Stripe dashboard.
- Nobody redeployed after the first two changes, so I redeploy Production and push a commit for Preview.
Thirty minutes of work, plus a key rotation that mattered far more than the blank page.
## The bottom line
When environment variables are undefined on Vercel, check in this order: is the variable in Project Settings at all, is it ticked for the environment you are viewing, did you redeploy after adding it, does browser code use the NEXT_PUBLIC_ or VITE_ prefix, and is every reference written as a literal name. Keep secrets unprefixed and on the server. If you have been through the list and it still fails, the problem is usually in how the app builds rather than in the variables, and that is a quick fix for a developer. My Quick Fix starts at $60 for one bug in about two days, and Finish and Launch from $600 covers apps that need several launch problems solved at once.`,
  },
  {
    slug: 'fix-cors-error-nextjs-api-route',
    title: 'How to fix a CORS error on a Next.js API route',
    description: 'Blocked by CORS policy calling your Next.js API? Read the exact error, handle the OPTIONS preflight, set headers in route handlers or next.config, or proxy instead.',
    date: d,
    keywords: ['CORS error Next.js API route', 'Next.js CORS headers', 'blocked by CORS policy Next.js', 'Next.js OPTIONS preflight', 'Access-Control-Allow-Origin Next.js'],
    service: 'fix-ai-built-app',
    shortAnswer: 'A CORS error on a Next.js API route means the browser called your route from a different origin and the response, or the OPTIONS preflight before it, did not include an Access-Control-Allow-Origin header that matches the calling site. Return the CORS headers from the route handler, including an OPTIONS handler, or set them for every API path in next.config or proxy.ts, or avoid CORS entirely by proxying the request through the same origin.',
    takeaways: [
      'CORS only applies when the page and the API are on different origins, and www versus no www counts as different.',
      'For anything other than a simple request, the browser sends an OPTIONS preflight first, and that response needs the CORS headers too.',
      'A server error or a redirect on the API route often shows up in the console as a CORS error.',
      'A wildcard Access-Control-Allow-Origin cannot be combined with credentials such as cookies.',
      'Rewriting requests through your own domain removes the need for CORS headers altogether.',
    ],
    faqs: [
      { q: 'Why do I get a CORS error calling my own Next.js API route?', a: 'Usually the page and the API are on different origins, such as a Vite frontend calling a Next.js backend, or www calling the bare domain, and the API does not return a matching Access-Control-Allow-Origin header.' },
      { q: 'How do I handle the OPTIONS preflight in a Next.js route handler?', a: 'Export an OPTIONS function from the same route.ts file that returns a 204 response with Access-Control-Allow-Origin, Access-Control-Allow-Methods and Access-Control-Allow-Headers.' },
      { q: 'Can I set CORS headers for all API routes at once in Next.js?', a: 'Yes, the Next.js docs point to the headers function in next.config.js or to proxy.ts, which was called middleware.ts before Next.js 16.' },
      { q: 'Is it safe to use a wildcard Access-Control-Allow-Origin?', a: 'Only for public data with no cookies or auth headers, because browsers reject a wildcard origin when credentials are included.' },
      { q: 'Does a CORS error happen with server-side requests?', a: 'No, CORS is enforced by browsers, so server components, server actions and server-to-server fetches are not affected.' },
    ],
    sources: [
      { title: 'route.js (Route Handlers), CORS', publisher: 'Next.js Docs', url: 'https://nextjs.org/docs/app/building-your-application/routing/route-handlers' },
      { title: 'How can I enable CORS on Vercel?', publisher: 'Vercel', url: 'https://vercel.com/kb/guide/how-to-enable-cors' },
      { title: "Reason: CORS header 'Access-Control-Allow-Origin' missing", publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin' },
      { title: 'Proxy', publisher: 'Next.js Docs', url: 'https://nextjs.org/docs/app/getting-started/proxy' },
    ],
    body: `In Chrome the error usually reads: "Access to fetch at 'https://api.yourapp.com/api/orders' from origin 'https://www.yourapp.com' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource." In Firefox it is "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at ... (Reason: CORS header 'Access-Control-Allow-Origin' missing)."
Either way, the request may have reached your server, but the browser refused to hand the response to your code. CORS errors look scary because the console message is long, but the fix is a small set of headers in the right place. Here is how to find which case you are in and what to change.
## What does a CORS error on a Next.js API route actually mean?
It means a page on one origin called your API on another origin, and the response did not include headers telling the browser that this origin is allowed to read it.
An origin is the protocol, domain and port together. https://www.yourapp.com and https://yourapp.com are different origins. So are http://localhost:5173 and http://localhost:3000. If your Next.js app calls its own API routes from its own pages on the same domain, there is no CORS at all, which is why this error often appears only after you split the frontend and backend, or start calling the API from a second app.
CORS is enforced by the browser, not the server. A curl request or a server-side fetch from another backend will succeed, which confuses people. MDN explains that the response must include Access-Control-Allow-Origin with the requesting site's origin, or the browser blocks the read.
The common setups that trigger it:
- A Lovable or Bolt frontend (Vite) on one domain calling a Next.js API on another.
- A mobile web view or browser extension calling your API.
- Your marketing site on www calling an app on app.yourdomain.com.
- Your own pages calling an absolute URL that points at a different host than the one the user is on.
## What is the preflight OPTIONS request and why does it fail?
Before many cross-origin requests, the browser sends an OPTIONS request to ask permission, and if that response lacks the CORS headers, the real request never runs.
The Vercel CORS guide notes that browsers send a preflight before methods other than GET, HEAD or POST, and before requests with custom headers. In practice, a POST with Content-Type: application/json, or any request with an Authorization header, triggers one. That covers almost every API call an app makes.
The Next.js route.js reference says that if you do not define OPTIONS in a route handler, Next.js implements it automatically and sets the Allow header based on the other methods you defined. That automatic response does not include your CORS headers. So the preflight returns 204 or 200 with no Access-Control-Allow-Origin, and the browser stops there. That is the exact "Response to preflight request doesn't pass access control check" message.
In the Network tab of DevTools you will see two rows for the same URL: one OPTIONS and one POST. If the OPTIONS row is red or the POST row never appears, the preflight is the problem.
## How do I add CORS headers in a Next.js route handler?
Return the headers from every method in the route, and export an OPTIONS function that returns them too.
The Next.js docs show the basic shape: return a new Response with headers for Access-Control-Allow-Origin, Access-Control-Allow-Methods (for example GET, POST, PUT, DELETE, OPTIONS) and Access-Control-Allow-Headers (for example Content-Type, Authorization). Their sample uses a wildcard origin, which is fine for a fully public API and wrong for most apps.
What I put in a real app/api/orders/route.ts:
- A list of allowed origins, read from an environment variable such as ALLOWED_ORIGINS, so production, preview and local development each work.
- A helper that reads the Origin header from the request, checks it against the list, and returns the CORS headers with that exact origin echoed back.
- Vary: Origin in those headers, so a CDN never serves one origin's response to another.
- An exported OPTIONS function that returns status 204 with the CORS headers and Access-Control-Max-Age, so the browser can cache the preflight.
- The same headers added to the GET and POST responses, including error responses.
That last point is the one people miss. If your POST throws and returns a 500 without CORS headers, the browser reports a CORS error rather than the 500, and you go hunting in the wrong place.
> Add the CORS headers to your error responses too. Otherwise a crash in your route looks like a CORS problem in the console, and you will debug headers when the real bug is a null value.
## Can I set CORS headers for every API route at once?
Yes, using the headers function in next.config or the proxy.ts file, and the Next.js docs recommend those when more than one route handler needs CORS.
### next.config headers
In next.config.js or next.config.ts, an async headers function returns a list of rules. A rule with source set to /api/:path* and a headers array of key and value pairs applies those headers to every matching response, including the automatic OPTIONS response. The Vercel guide notes this is static: you can allow one origin, but you cannot check the request against a list.
Best for: one known frontend origin and no per-request logic.
### proxy.ts
Starting with Next.js 16, Middleware is called Proxy, and the file is proxy.ts at the project root or inside src, next to the app folder. The functionality is the same as the old middleware.ts. A proxy with a matcher on /api/:path* can read the Origin header, check an allowlist, answer OPTIONS requests directly with a 204, and add headers to everything else.
Best for: several allowed origins, preview URLs, or credentials.
## What are the other causes of CORS errors in Next.js?
Redirects, credentials with a wildcard, deployment protection and server errors cause a large share of the CORS errors I see, even when headers are set.
Ranked roughly by how often they catch people:
- A redirect on the API URL. Calling yourapp.com when Vercel redirects to www.yourapp.com, or a trailing slash redirect, sends a 308 to the preflight. Chrome reports "Redirect is not allowed for a preflight request." Call the final URL directly.
- Credentials with a wildcard. If your fetch uses credentials: "include" for cookies, the browser rejects a wildcard origin with "The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'." Echo the exact origin and add Access-Control-Allow-Credentials: true.
- A missing header in Access-Control-Allow-Headers. If the request sends Authorization or a custom header like x-api-key that is not listed, the preflight fails.
- Vercel Deployment Protection on preview URLs. The Vercel guide notes it can return 401 to unauthenticated preflights before your code runs, and that the OPTIONS Allowlist setting fixes it for paths such as /api.
- A crash in the handler that returns a response without CORS headers.
## Should I proxy the request instead of enabling CORS?
Often yes, because if the browser only ever talks to its own origin, there is no CORS to configure.
### Rewrites in the frontend app
If the frontend is a Next.js app, a rewrites rule in its next.config can map /api/:path* to https://api.yourapp.com/:path*. The browser calls /api/orders on its own domain, the Next.js server forwards it, and the response comes back as same-origin. The Vercel CORS guide describes the same approach in vercel.json, noting the browser sees a same-origin response and sends no preflight.
### The Vite dev server proxy
For a Vite frontend in development, the server.proxy option in vite.config does the same thing locally. It does not exist in production, so pair it with a rewrite on your host.
### Server components and server actions
If you control both sides and they are both Next.js, the simplest fix is to stop calling the API from the browser. Server components and server actions run on the server, where CORS does not apply.
## A worked example: a Lovable frontend calling a Next.js API
Here is an illustration with a made-up business. A tutoring company has a Lovable booking frontend on book.tutorco.com and a Next.js API on api.tutorco.com that creates Stripe checkout sessions. Booking fails with the preflight error above.
What I find and change:
- The route handler has POST only, so the automatic OPTIONS response has no CORS headers. I add an OPTIONS export returning 204 with the headers.
- The frontend sends Authorization with a Supabase token, which is not in Access-Control-Allow-Headers. I add it.
- The frontend calls tutorco.com/api, which redirects to api.tutorco.com. I point it at the final URL.
- Previews fail with 401 on OPTIONS. I check the OPTIONS Allowlist in Deployment Protection settings.
- I move the allowed origins into an environment variable so production and previews both pass.
I verify with curl -i -X OPTIONS against the endpoint, checking for a 2xx status and the Access-Control-Allow-Origin header, which is the check the Vercel guide recommends.
## How do I test a CORS fix without guessing?
Test the preflight and the real request separately, from the command line and from the browser, before you redeploy anything else.
Browsers cache preflight results for as long as Access-Control-Max-Age allows, and CDNs can cache responses too, so a fix can look like it failed when you are really seeing an old answer. I use this sequence:
- Send the preflight by hand with curl -i -X OPTIONS, adding an Origin header with your frontend's origin and an Access-Control-Request-Method header of POST. The response should be a 2xx with Access-Control-Allow-Origin set to that exact origin.
- Send the real request with curl -i, the same Origin header and your normal body, and check that the CORS headers appear on that response too, including when it errors.
- In Chrome DevTools, open the Network tab, tick Disable cache, and reload. Click the OPTIONS row and read the response headers, not just the status.
- Try once from an origin that should be refused, so you know the allowlist actually restricts something.
If curl shows the right headers and the browser still complains, look for a redirect, Deployment Protection, or a service worker answering the request before it reaches your code.
## When should I get help with CORS?
Get help when the headers look correct in curl and the browser still blocks the request, because that usually points to redirects, caching or auth in front of your code.
If the API also handles payments, check the related flow in "Stripe payment went through but your app did not update? Fix the webhook," since webhooks are server-to-server and never need CORS. A single CORS fix fits my Quick Fix from $60. If the frontend and backend need to be consolidated into one Next.js app, that is a bigger change and fits Fix Plus Features from $200 or Finish and Launch from $600, depending on scope.
## The bottom line
A CORS error on a Next.js API route means the browser did not get permission headers it trusts. Confirm the page and API really are on different origins, then make sure both the OPTIONS preflight and the real response return Access-Control-Allow-Origin with the exact calling origin, the methods you use and every header you send. Use next.config headers for one static origin, proxy.ts for allowlists and credentials, and rewrites or server components when you can avoid cross-origin calls entirely. Rule out redirects and server errors before touching headers again.`,
  },
  {
    slug: 'firestore-missing-or-insufficient-permissions',
    title: 'Firestore "Missing or insufficient permissions": what triggers it and how to fix it',
    description: 'Seeing FirebaseError: Missing or insufficient permissions in Firestore? Causes ranked, how to debug rules in the Rules Playground and emulator, and queries that match.',
    date: d,
    keywords: ['Missing or insufficient permissions Firestore', 'Firestore permission-denied', 'Firestore security rules debugging', 'Firestore rules are not filters', 'Firebase emulator rules'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Firestore throws "Missing or insufficient permissions" (code permission-denied) when your security rules do not allow the exact read or write the client attempted. The usual causes are expired test mode rules, a request sent before the user is signed in, a query that could return documents the rules forbid, or rules that never cover the path or subcollection you are using.',
    takeaways: [
      'The error means your rules denied the request, not that Firebase is broken, so the fix is always in firestore.rules or in the query.',
      'Security rules are not filters: a query fails entirely if it could return even one document the user is not allowed to read.',
      'Queries must include the same constraints as the rules, for example a where clause on the owner field that the rule checks.',
      'Test mode rules expire, which is why an app can work for weeks and then fail everywhere on the same day.',
      'The Rules Playground and the local emulator show exactly which rule allowed or denied a request.',
    ],
    faqs: [
      { q: 'What does Missing or insufficient permissions mean in Firestore?', a: 'It means the Cloud Firestore security rules evaluated the request and did not allow it, and the SDK reports it with the error code permission-denied.' },
      { q: 'Why did my Firestore app suddenly stop working with permission errors?', a: 'The most common reason is that the database was created in test mode, whose rules allow access only until a fixed date and then deny everything.' },
      { q: 'Why does my Firestore query fail when every document belongs to the user?', a: 'Because rules judge the query by what it could return, so the query must include the same constraint the rule checks, such as a where clause on the owner field.' },
      { q: 'Why does the Admin SDK work but the client gets permission denied?', a: 'The Firebase Admin SDK on a server bypasses security rules entirely, while client SDKs in the browser or app are always checked against them.' },
      { q: 'How do I test Firestore security rules safely?', a: 'Use the Rules Playground in the Firebase console for quick checks and the Firebase Local Emulator Suite to run automated rules tests without touching production data.' },
    ],
    sources: [
      { title: 'Securely query data', publisher: 'Firebase Docs', url: 'https://firebase.google.com/docs/firestore/security/rules-query' },
      { title: 'Quickly validate Firebase Security Rules', publisher: 'Firebase Docs', url: 'https://firebase.google.com/docs/rules/simulator' },
      { title: 'Writing conditions for Cloud Firestore Security Rules', publisher: 'Firebase Docs', url: 'https://firebase.google.com/docs/firestore/security/rules-conditions' },
    ],
    body: `The console says "FirebaseError: Missing or insufficient permissions." In some SDKs it shows as "PERMISSION_DENIED: Missing or insufficient permissions." with the code permission-denied. The screen is empty, or a save button spins forever, and the same code worked yesterday.
This error is Firestore doing its job. Every read and write from a client SDK is checked against your security rules, and this is what you get when the rules say no. The fix is always one of two things: change the rules so they allow what should be allowed, or change the request so it matches what the rules allow. Here is how to work out which, in the order I check things when someone brings me a Firebase app built with an AI tool.
## What triggers "Missing or insufficient permissions" in Firestore?
Any client read or write that your rules do not explicitly allow, because Firestore denies everything by default.
Ranked by how often I find them:
- Test mode rules expired. The database was created with temporary open rules that allow access only until a fixed date.
- The request ran before Firebase Auth finished restoring the user, so request.auth was null when the rule checked it.
- A query does not include the constraint the rule relies on, so Firestore refuses the whole query.
- The rules do not cover the path at all, often a subcollection or a collection renamed by a later prompt.
- A write fails a field check, such as a rule that compares request.resource.data to the user ID.
- The rules in the console are not the rules in your repo, because firestore.rules was edited locally and never deployed, or was deployed to a different Firebase project.
The error message is the same for all of them, so the job is to narrow it down, not to loosen everything until it goes away.
## Why did my app work for weeks and then stop?
Almost certainly because the database was started in test mode, and test mode rules include an expiry date.
When you create a Firestore database in the Firebase console, you choose production mode or test mode. Test mode writes rules that allow all reads and writes as long as request.time is earlier than a timestamp a few weeks in the future. On that date every request starts failing at once, for every user, with this exact error.
Open the Firebase console, go to Firestore Database, then the Rules tab, and look for a line comparing request.time to timestamp.date. If it is there and the date has passed, that is your answer.
Do not fix it by moving the date forward or by writing allow read, write: if true. That puts your users' data on the open internet for anyone who finds your project ID, which is in your public JavaScript. Write real rules instead. My checklist in "Firebase best practices before launch: the security rules checklist" walks through the patterns for owner-only data, shared data and admin-only data.
## Why do I get permission denied right after sign-in?
Because the Firestore request fired before Firebase Auth had restored the signed-in user, so the rule saw no user.
Firebase Auth restores the session asynchronously when the page loads. If a component runs a query on mount, the first request often goes out with no user attached. Any rule that checks request.auth != null or request.auth.uid then fails.
The fix is in the client:
- Wait for onAuthStateChanged to report a user before subscribing to protected queries.
- In React, keep an auth loading state and render nothing, or a spinner, until it resolves.
- Do not pass a user ID from local storage into a query. Use the uid from the current auth user.
In a Next.js App Router project, the same issue appears when server code tries to use the client SDK without a signed-in user. I covered that setup in "Firebase Authentication in the Next.js App Router: how to do it properly."
> Log auth.currentUser right before the failing call. If it prints null, your rules are probably fine and the timing is wrong.
## Why does my query fail even though the user owns every document?
Because Firestore rules are not filters, and a query is rejected if it could possibly return a document the rules would deny.
The Firebase docs on securely querying data are direct about this: security rules are not filters, queries are all or nothing, and if a query could potentially return documents the client does not have permission to read, the entire request fails. Firestore checks the query's constraints against the rule, not each result.
Say your rule on the orders collection allows read if resource.data.ownerId == request.auth.uid. A query for every document in orders will fail, even if this user happens to own all of them today. The query has to say where ownerId equals the current uid. Then Firestore can prove every result passes the rule, and allows it.
The same logic applies elsewhere in the docs:
- A rule that requires resource.data.published == true needs a query with where published equals true.
- Rules for get apply to single documents, and rules for list apply to queries, so a rule that only defines get blocks all queries.
- A list rule can check request.query.limit, so a query without a limit fails when the rule requires one.
AI builders often write queries first and rules later, so the two drift apart. Line them up field by field.
## Why are my subcollections denied when the parent is allowed?
Because a match block applies only to the documents it names, and rules do not cascade down into subcollections.
A rule for match /users/{userId} covers the user documents, not /users/{userId}/orders/{orderId}. That subcollection needs its own nested match block, or a recursive wildcard, which in the rules language is a document variable followed by an equals sign and two asterisks inside the braces. Recursive wildcards are powerful and easy to get wrong, so I prefer explicit nested blocks for each subcollection the app uses.
Two related traps:
- Collection group queries need a rule that matches the collection group across all parents, written with the recursive wildcard at the top level of the database path.
- A later prompt renamed a collection, say from bookings to appointments, and the rules still only mention bookings.
Search your code for every collection and doc path string, list them, and confirm each has a match block.
## How do I debug Firestore rules step by step?
Reproduce the failing request in the Rules Playground or the emulator, where you can see which line allowed or denied it.
### The Rules Playground
In the Firebase console, open Firestore Database, then Rules, then click Rules Playground. The Firebase docs describe the settings: choose the simulation type (for example get, list, create or update), enter the document path, turn on Authenticated and enter a user ID, and optionally supply document data for writes. Click Run and a banner above the editor says whether access was allowed or denied.
### The Local Emulator Suite
For anything beyond a quick check, run the Firestore emulator locally with firebase emulators:start, point your app at it with connectFirestoreEmulator, and reproduce the bug. The Emulator Suite UI lets you inspect the requests your app made against the local database while you reproduce the problem. The Firebase docs recommend the emulator for fuller validation, including automated unit tests of your rules with the rules unit testing library.
### Check what is actually deployed
Compare the Rules tab in the console with firestore.rules in your repo, and check the Firebase project ID in your config. Deploy with firebase deploy --only firestore:rules to the correct project.
## Why does it work in my server code but not in the browser?
Because the Firebase Admin SDK bypasses security rules, while client SDKs are always checked against them.
If a Cloud Function or a Next.js route handler using firebase-admin can read the data, but the same read from the browser fails, the rules are doing exactly what they should. Do not copy the service account key into the client to "fix" it. Either write a rule that allows the client read, or keep the read on the server and return only what the user should see.
LACEUP, a basketball apparel storefront I built with a Firebase admin dashboard, is a good example of the split this kind of app needs: shoppers browse the catalog, and only admins should be able to change it.
![The LACEUP shop page I built: a basketball apparel storefront with category filters, backed by a Firebase admin dashboard](/shots/laceup-shop.jpg)
## A worked example: a booking app that broke on a Monday
Here is an illustration with a made-up business. A personal trainer's booking app, built in an AI tool on Firebase, works for five weeks and then every page shows "Missing or insufficient permissions."
What I find:
- Test mode rules with a date from last Sunday. I replace them with real rules.
- Clients should read only their own bookings, so the rule checks resource.data.clientId against request.auth.uid. The dashboard query read the whole bookings collection. I add where clientId equals the current uid.
- The trainer needs to see all bookings. I add a role check using a custom claim on the trainer's account rather than a role field users could edit themselves.
- The sessions subcollection under each booking had no rules. I add a nested match.
- The dashboard queried on mount before auth restored. I gate it on onAuthStateChanged.
I test every case in the emulator, then deploy the rules. About half a day of work.
## When should I get help with Firestore rules?
Get help when you cannot describe, in one sentence per collection, who should be able to read and write it, because then the problem is the data model, not a single rule.
Rules are only as clean as the structure underneath them. If user data sits in one shared collection with no owner field, or roles are stored in a field that users can edit on their own profile document, no rule can make it safe without changing the data first. That is a bigger job than fixing one denied query, and it is worth doing before launch rather than after a stranger reads your customer list.
Signs it is time for a second pair of eyes:
- You fixed the error by loosening a rule and are not sure what else that opened.
- Some screens work only for the account you built the app with.
- Admin features rely on hiding buttons rather than on rules or custom claims.
- Nobody has ever run the rules against the emulator with a second test user.
If you are deciding whether the app is worth fixing at all, my post "Fix or rebuild your AI-built app? How to decide before you spend more" lays out how I make that call.
## The bottom line
"Missing or insufficient permissions" means your Firestore rules said no. Check for expired test mode rules first, then confirm the user is signed in before the request runs, then make sure each query includes the same constraints as its rule, and that every collection and subcollection path has a match block. Use the Rules Playground and the emulator to see exactly which rule denies the request, and never fix it by opening the database to everyone. A single rules bug fits my Quick Fix from $60, and a full rules rewrite with tests usually fits Fix Plus Features from $200.`,
  },
  {
    slug: 'firebase-auth-unauthorized-domain',
    title: 'Firebase auth/unauthorized-domain: how to fix it on Vercel, previews and custom domains',
    description: 'Getting Firebase: Error (auth/unauthorized-domain) on Google sign-in? Add the right authorized domains, handle Vercel preview URLs and custom domains, and set authDomain.',
    date: d,
    keywords: ['auth/unauthorized-domain Firebase', 'Firebase authorized domains', 'Firebase unauthorized domain Vercel', 'Firebase authDomain custom domain', 'Firebase Google sign-in domain error'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Firebase throws auth/unauthorized-domain when your page runs on a hostname that is not in the Authorized domains list under Authentication, Settings in the Firebase console. Add the exact hostname, without https:// or a path, for production, www, your custom domain and any Vercel preview or branch URL you sign in from, and keep authDomain pointed at a domain that serves the Firebase auth handler.',
    takeaways: [
      'The error is about the domain in the browser address bar, not your code, so the fix starts in Authentication, Settings, Authorized domains.',
      'Enter hostnames only, such as www.yourapp.com, with no protocol, path or port.',
      'Firebase projects created after April 28, 2025 no longer include localhost by default, so local development may need it added.',
      'Every Vercel commit gets a new URL, so authorize the stable branch URL or a custom preview domain instead of each deployment.',
      'Changing authDomain to your own domain also requires serving the auth handler there and adding it as an OAuth redirect URI.',
    ],
    faqs: [
      { q: 'What causes auth/unauthorized-domain in Firebase?', a: 'The page calling signInWithPopup or signInWithRedirect is on a hostname that is not listed in Authorized domains under Authentication, Settings in the Firebase console.' },
      { q: 'How do I add an authorized domain in Firebase?', a: 'Open the Firebase console, go to Authentication, then Settings, then Authorized domains, click Add domain and enter the hostname only, such as www.yourapp.com.' },
      { q: 'Why does Firebase sign-in fail on Vercel preview deployments?', a: 'Each Vercel commit deployment has a unique URL, and Firebase requires full domain names, so you need to authorize a stable branch URL or a custom preview domain.' },
      { q: 'Do I need to add both www and the root domain to Firebase?', a: 'Yes, if users can reach the app on both, because Firebase treats www.yourapp.com and yourapp.com as separate domains.' },
      { q: 'Should I change authDomain to my custom domain?', a: 'Only if you also serve the Firebase auth handler on that domain through Firebase Hosting or a proxy and add its handler URL to your OAuth provider, otherwise keep the default firebaseapp.com value.' },
      { q: 'Who can fix Firebase sign-in on my live domain?', a: 'Thomas Osayi fixes one bug like this from $60 in about two days, including authorized domains, OAuth settings and testing on production and previews.' },
    ],
    sources: [
      { title: 'Authentication FAQ and troubleshooting', publisher: 'Firebase Docs', url: 'https://firebase.google.com/docs/auth/faq-and-troubleshooting' },
      { title: 'Best practices for using signInWithRedirect on browsers that block third-party storage access', publisher: 'Firebase Docs', url: 'https://firebase.google.com/docs/auth/web/redirect-best-practices' },
      { title: "Set a web app's OAuth redirect domains", publisher: 'Firebase Help', url: 'https://support.google.com/firebase/answer/6400741' },
      { title: 'Accessing Deployments through Generated URLs', publisher: 'Vercel Docs', url: 'https://vercel.com/docs/deployments/generated-urls' },
    ],
    body: `You click "Continue with Google" on your newly deployed app and nothing happens, or a popup flashes and closes. The console shows "FirebaseError: Firebase: Error (auth/unauthorized-domain)." Often there is also an earlier info message: "The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain to the OAuth redirect domains list in the Firebase console."
It worked on localhost. It worked on the builder's preview. It fails on the live site, or on a Vercel preview link you sent to a client. The cause is nearly always a missing entry in one settings list, and the fix takes a few minutes once you know which hostname to add. The harder cases involve preview URLs and custom authDomain setups, so I cover those too.
## What does auth/unauthorized-domain mean in Firebase?
It means the hostname your app is running on is not in your Firebase project's list of authorized domains, so Firebase refuses to run the OAuth sign-in.
Firebase Authentication only completes OAuth flows, such as Google, Apple, GitHub or Microsoft sign-in, for domains you have approved. Firebase's help page on OAuth redirect domains says you must authorize the domains Firebase can redirect to after sign-in, that localhost and your project's hosting domain are authorized by default, and that you must add the full domain names of any other hosts. Once a domain is on the list, any URL and port on it is allowed.
The Firebase Auth troubleshooting page shows the related message "This domain YOUR_REDIRECT_DOMAIN is not authorized to run this operation," and lists the likely cause as the domain not being an authorized domain, or an invalid API key.
Email and password sign-in does not go through this check, which is why some apps work for password users and fail only on the Google button.
## Why does it work on localhost but fail in production?
Because localhost was on the list and your production domain was not, which is exactly how a new project starts.
Ranked by how often I find them:
- The production domain was never added. The app moved from a builder's preview to Vercel or a custom domain and nobody updated Firebase.
- Only one of www and the bare domain was added. Firebase treats them as separate hostnames.
- The user is on a Vercel deployment URL that changes every commit.
- The domain was entered with https:// or a trailing path, so it does not match the hostname.
- The app is pointing at a different Firebase project than the one you edited, usually because NEXT_PUBLIC_FIREBASE_PROJECT_ID or VITE_FIREBASE_AUTH_DOMAIN differs between environments.
There is also a newer twist. The Firebase troubleshooting page notes that for projects created after April 28, 2025, Firebase Authentication no longer includes localhost as an authorized domain by default. If your project is newer than that, you may see this error locally too, and need to add localhost yourself for development.
## How do I add my domain to the authorized domains list?
Open the Firebase console, go to Authentication, then the Settings tab, then Authorized domains, and add each hostname users sign in from.
Step by step:
- Go to the Firebase console and select the project your app actually uses. Check the projectId in your Firebase config to be sure.
- Open Authentication from the left menu, then the Settings tab.
- Choose Authorized domains and click Add domain.
- Enter the hostname only: www.yourapp.com, not https://www.yourapp.com/login.
- Add the bare domain as a separate entry if it also serves the app.
- Save, then hard refresh the app and try sign-in again.
The change usually takes effect within moments. If it still fails, open DevTools and confirm the exact hostname in the address bar. Typos, a hyphen in the wrong place, or a regional subdomain are common.
> Remove domains you no longer use. The Firebase troubleshooting page suggests removing localhost from production projects to limit misuse, and old preview domains deserve the same cleanup.
## How do I handle Vercel preview deployments?
Authorize a stable hostname for previews, because every Vercel commit gets its own URL and Firebase needs full domain names.
According to the Vercel docs on generated URLs, each commit deployment gets a URL made of the project name, a random hash and your team slug on vercel.app. That changes on every push, so authorizing one is pointless. Firebase's help page asks for full domain names, so you cannot rely on a wildcard covering them.
Your options:
- Use the branch URL. Vercel also creates a URL in the form project-name, then -git-, then the branch name, then your team slug, on vercel.app. It points to the latest deployment on that branch and stays the same across commits. Authorize the branch URL for staging or a long-lived feature branch, and share that link instead of the commit link.
- Use a custom domain for previews. Assign something like staging.yourapp.com to your preview branch in Vercel and authorize that once.
- Use a separate Firebase project for previews. Point Preview environment variables at a staging Firebase project, which also keeps test users out of production. My post "Environment variables undefined on Vercel? Every cause and fix" explains how to scope variables per environment.
LACEUP, the basketball apparel storefront I built, runs on a vercel.app domain with a Firebase admin, which is the kind of setup where the deployed hostname has to be on this list before any admin can sign in.
![The LACEUP storefront hero, "Built for the run," on its vercel.app domain](/shots/laceup-home.jpg)
## What do I need to do for a custom domain?
Add both the apex and www hostnames to Authorized domains, and decide whether authDomain should stay on firebaseapp.com or move to your domain.
For most apps, the only change needed is the authorized domains list. Your Firebase config keeps authDomain as your-project-id.firebaseapp.com, sign-in popups open on that domain, and everything works.
Some redirect flows need more. The Firebase guide on redirect best practices explains that browsers blocking third-party storage access can break signInWithRedirect when the app and authDomain are on different domains. Apps on Firebase Hosting under the default firebaseapp.com subdomain are not affected. For everything else, the guide lists options, including:
- Switching to signInWithPopup, which avoids the redirect flow, with the caveat that popups are sometimes blocked, especially on mobile.
- Setting authDomain to your own app domain, when that domain is served by Firebase Hosting in the same project.
- Proxying requests for the /__/auth/ path on your domain to your project's firebaseapp.com domain. The guide warns this must be transparent forwarding, not a 302 redirect. On Vercel or Next.js this is a rewrite rule.
- Self-hosting the auth helper files, which the guide says does not work for Apple sign-in or SAML.
## What happens if I change authDomain?
You also have to add your domain's auth handler URL to your OAuth provider, or you trade one error for another.
When authDomain points at your own domain, the OAuth provider redirects back to https://yourdomain.com/__/auth/handler. The Firebase guide stresses that the trailing /__/auth/handler part is important. For Google sign-in, add that exact URL to Authorized redirect URIs on the OAuth client in Google Cloud, or Google shows "Error 400: redirect_uri_mismatch." Confirm the domain is also in Firebase Authorized domains.
Two more checks:
- Make sure the authDomain environment variable is set in every Vercel environment. An undefined authDomain produces confusing errors that look unrelated.
- If you use Firebase Hosting, redeploy so /__/firebase/init.json matches your current config, as the guide notes.
## How do I check which Firebase project and authDomain my app is actually using?
Read the config the deployed app is really running with, because editing the right list in the wrong Firebase project is one of the most common reasons the error survives a fix.
AI builders often create a new Firebase project during setup, and later prompts or a teammate create another. The Firebase console shows whichever project you last opened, not the one your live site uses. So before changing settings, confirm the target:
- Open your deployed site, open DevTools, and in the Sources or Network tab search the loaded JavaScript for firebaseapp.com. The value you find is the authDomain the build is using, and its first part is usually the project ID.
- Compare it with the project ID shown under Project settings in the Firebase console.
- Check your environment variables in Vercel for each environment. A Preview environment pointing at one project and Production at another is fine, as long as each project has its own authorized domains.
- Remember that public Firebase values are baked into the build, so after changing them you must redeploy before the live site picks them up.
If the authDomain in the bundle reads undefined, the error you see may not be about domains at all. Fix the missing variable first, then retest sign-in.
## Does this error affect email link sign-in and other auth methods?
It affects OAuth popup and redirect flows directly, and email link sign-in has a similar domain check on the link it sends users back to.
Email and password sign-in does not open an OAuth flow, so it keeps working while Google sign-in fails. Email link (passwordless) sign-in is different: the continue URL you pass in the action code settings must be on an authorized domain as well, so the same missing entry can break magic links on a new domain. Password reset and email verification links that send users back to your app follow the same idea. When you add a domain for Google sign-in, test the email flows on that domain too.
## A worked example: a studio's member portal on a new domain
Here is an illustration with a made-up business. A yoga studio's member portal, built with an AI tool on Firebase, moves from the builder's preview to Vercel on yogastudio.com. Google sign-in fails with auth/unauthorized-domain.
What I check and change:
- Authorized domains lists localhost and the firebaseapp.com domain only. I add yogastudio.com and www.yogastudio.com.
- The owner tests on Vercel commit URLs. I add a staging branch, assign staging.yogastudio.com to it, and authorize that.
- Safari users on the redirect flow get bounced back signed out. Rather than proxy the auth path, I switch desktop sign-in to signInWithPopup and keep authDomain on firebaseapp.com.
- The Vercel Preview environment used the production Firebase config. I point it at a staging Firebase project.
Under two hours including testing on Chrome, Safari and a phone.
## The bottom line
Firebase auth/unauthorized-domain means the hostname in the address bar is not on your authorized list. Add every production hostname, both www and the bare domain, under Authentication, Settings, Authorized domains, using hostnames only. For Vercel previews, authorize a stable branch URL or a custom preview domain rather than commit URLs. Leave authDomain on firebaseapp.com unless you need the redirect flow on browsers that block third-party storage, and if you change it, add the /__/auth/handler URL to your OAuth provider. If sign-in still fails after that, the problem is usually in your Firebase config or environment variables, which I cover in "Firebase Authentication in the Next.js App Router: how to do it properly," and which my Quick Fix from $60 is built for.`,
  },
];
