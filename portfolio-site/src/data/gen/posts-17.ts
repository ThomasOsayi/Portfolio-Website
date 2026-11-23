// Generated articles, batch 17 (Nov 23 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-23';

export const postsGen17: Post[] = [
  {
    slug: 'lovable-vs-cursor',
    title: 'Lovable vs Cursor: which one should you build your app in?',
    description: 'Lovable vs Cursor for founders and semi-technical builders: what each tool is, current plan prices, how to move from one to the other, and when to hire help.',
    date: d,
    keywords: ['Lovable vs Cursor', 'Lovable or Cursor for beginners', 'move Lovable project to Cursor', 'Lovable GitHub sync Cursor', 'AI app builder vs AI code editor'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Lovable is a browser app builder that writes and hosts the whole app from chat, so it suits non-technical founders getting a first version working. Cursor is an AI code editor that works on code on your own computer, so it suits people who can read code and want control. Many builders start in Lovable, sync the project to GitHub, and continue in Cursor once the app needs careful changes.',
    takeaways: [
      'Lovable builds and publishes a full app from chat in the browser, while Cursor edits code you own in a desktop editor.',
      'At the time of writing, Lovable Pro is $25 per month and Cursor plans for new customers run from $8 to $200 per month.',
      'Lovable syncs one branch to GitHub in both directions, which is what makes the start in Lovable, finish in Cursor path possible.',
      'Switching tools does not fix unclear requirements, missing security rules or a broken data model.',
      'If you cannot read the code Cursor shows you, a developer for the hard parts is usually cheaper than months of trial and error.',
    ],
    faqs: [
      { q: 'Is Lovable or Cursor better for someone who cannot code?', a: 'Lovable is easier for someone who cannot code, because it runs in the browser, previews the app as it builds and publishes it without any setup.' },
      { q: 'Can I move a Lovable project into Cursor?', a: 'Yes. Connect the Lovable project to GitHub, clone the repository to your computer and open the folder in Cursor; changes pushed to the synced branch flow back into Lovable.' },
      { q: 'Can I use Lovable and Cursor on the same project at the same time?', a: 'You can, but only one branch syncs, so agree which tool is working at any moment and avoid rewriting history on the synced branch.' },
      { q: 'Does Cursor host my app like Lovable does?', a: 'No. Cursor edits code, so you still need hosting such as Vercel or Lovable publishing, plus your own database and environment variables.' },
      { q: 'What does it cost to have Thomas Osayi finish a Lovable app instead?', a: 'Thomas Osayi fixes a single bug from $60 in about 2 days, handles up to three fixes plus one small feature from $200 in about 5 days, and finishes and launches an app whose core features already work from $600 in about 10 days.' },
    ],
    sources: [
      { title: 'Pricing', publisher: 'Lovable', url: 'https://lovable.dev/pricing' },
      { title: 'Subscription plans', publisher: 'Lovable Documentation', url: 'https://docs.lovable.dev/introduction/subscription-plans' },
      { title: 'Git sync overview', publisher: 'Lovable Documentation', url: 'https://docs.lovable.dev/integrations/git-sync-overview' },
      { title: 'Pricing', publisher: 'Cursor', url: 'https://cursor.com/pricing' },
      { title: 'Pricing and plans', publisher: 'Cursor Help', url: 'https://cursor.com/help/account-and-billing/pricing' },
    ],
    body: `Lovable and Cursor both use AI to write code, which is why people compare them, but they are not the same kind of tool. One builds and hosts an entire app from a chat box in your browser. The other is a code editor that sits on your computer and helps you change code you already have. Picking between them is really picking how close to the code you want to be.
I fix and finish apps that founders started in tools like these, so I see where each one shines and where projects get stuck. This post compares the two directly, explains the popular combination of starting in Lovable and continuing in Cursor, and is honest about when neither is the right next step. If you are still choosing between browser builders, "Lovable vs Bolt vs v0 for a startup MVP" covers that. If you already work in code and are choosing an editor or agent, "Cursor vs Claude Code vs Windsurf for finishing an AI-built app" covers that. This one sits between the two.
## What is the difference between Lovable and Cursor?
Lovable is an app builder you use in the browser, and Cursor is a code editor you install on your computer.
In Lovable you describe what you want, it writes the code, shows a live preview and can publish the app on a lovable.app address or your own domain. It also sets up a backend for you, so sign-in, a database and file storage can exist without you touching a terminal. You can work for weeks without ever opening a file.
In Cursor you open a folder of code. The AI can read that code, propose changes across many files, run commands and explain what something does. Nothing is hosted for you. You choose where the app runs, you manage the database, and you decide when changes go live. Cursor assumes you are willing to look at the code, even if the AI writes most of it.
That difference shapes everything else:
- Lovable hides the code by default, which is fast but makes it hard to see why something broke.
- Cursor shows you the code by default, which is slower to start but gives you real control.
- Lovable bundles hosting and backend. Cursor bundles nothing but the editor and its AI.
## Who is each tool really built for?
Lovable is built for people who want a working product without becoming developers, and Cursor is built for people who write or at least read code.
A non-technical founder validating an idea is Lovable's natural user. You can get a clickable, data-backed first version in front of customers quickly, and the preview makes feedback easy. The trade-off shows up later, when a change in one place breaks something in another and the only tool you have is another prompt. "Lovable credits running out? Why bugs burn them and what to do next" goes into that loop.
Cursor's natural user is a semi-technical builder or developer. If you can follow a file tree, read an error message, run the app locally and use git, Cursor lets you make precise changes, review exactly what the AI changed, and test before anything ships. If none of that is familiar, Cursor will feel like being handed a cockpit.
There is a middle group: people who can read a little code and learn quickly. For them, the combination of the two tools often works best, because Lovable gets the first 70 percent of the screens done and Cursor handles the careful work afterwards.
## What are your options, and what does each cost?
There are four realistic paths: Lovable alone, Cursor alone, both in sequence, or handing the app to a developer. Prices below are the published plans at the time of writing.
### Lovable on its own
Best for: non-technical founders who need a first version fast.
Cost range: free to start; Pro is $25 per month (or $250 a year) with 100 monthly credits plus 5 daily credits, and Business is $50 per month, at the time of writing. The free plan gives 5 daily credits capped at 30 a month.
Pros: no setup, live preview, hosting and backend included, GitHub sync available.
Cons: you cannot easily see or control what changed, bug loops cost credits, and security rules are easy to get wrong without noticing.
### Cursor on its own
Best for: builders who can read code and want control from day one.
Cost range: at the time of writing, Cursor plans for new customers are Free, Plus at $8 per month (Grok models only), Premium at $30, Super at $100 and Ultra at $200, with Teams from $30 per seat. Existing subscribers can stay on the older Pro and Pro+ plans.
Pros: precise edits, full access to your code, works with any stack and host.
Cons: you set up the project, database, hosting and environment variables yourself.
### Both: start in Lovable, continue in Cursor
Best for: founders who want a quick start but expect the app to get serious.
Cost range: roughly $25 plus $8 to $30 per month for the two subscriptions, plus hosting if you move off Lovable.
Pros: fast first version, then real control; Lovable keeps working on the same repository.
Cons: two tools touching one branch can step on each other, and you still need to understand what Cursor changes.
### Handing it to a developer
Best for: apps with real users or payments where a mistake is expensive.
Cost range: my packages run from $60 for one bug, $200 for up to three fixes plus a small feature, and $600 to finish and launch an app whose core already works.
Pros: someone accountable reviews security, data and deployment.
Cons: you pay up front and need to explain the app clearly.
## How does moving from Lovable to Cursor actually work?
You connect the Lovable project to GitHub, clone that repository to your computer, and open the folder in Cursor.
Lovable's git sync works in both directions: edits made in Lovable are committed to the linked repository, and commits you push to the synced branch show up back in the Lovable project. A few details from Lovable's documentation matter a lot in practice:
- Only one branch syncs at a time, usually main. Work on other branches does not reach Lovable until it is merged.
- If both sides have commits the other lacks, Lovable pushes its changes to a separate branch called lovable-sync instead of the synced branch.
- Do not force-push, rebase or squash commits already on the synced branch.
- Pushing code does not publish it. The live site changes only when you publish from Lovable, or when you deploy somewhere else yourself.
- Changed edge functions and new migration files are not deployed automatically when your commits sync, so backend changes made in Cursor need deploying separately.
- Anything prefixed VITE_ ends up in the browser, so secrets never belong in those variables.
> Before the first Cursor session, write a short project rules file that says which folders matter, how data is stored and which files the AI must not touch. Both tools read instructions, and the same rules keep them from undoing each other.
If you plan to leave Lovable hosting entirely, "How to move a Lovable app to Vercel and your own domain" walks through that part.
## What goes wrong when you switch tools mid-project?
The most common problem is that switching tools changes who makes mistakes, not whether they get made.
When founders move to Cursor because Lovable keeps breaking things, the underlying causes usually come along. A data model that was never planned, security rules that let any signed-in user read every row, or a feature built three different ways in three screens. Cursor will happily make the fourth version if you ask it to.
Other things I check for when a project has moved between tools:
- Two sources of truth. Someone edits in Lovable while someone else pushes from Cursor, and the lovable-sync branch quietly fills up with changes nobody merged.
- Environment variables that existed in Lovable's hosting but not on the new host, so the app builds and then fails at runtime. "Environment variables undefined on Vercel? Every cause and fix" covers that one.
- Database changes made by hand in the dashboard instead of in migrations, so local and production drift apart.
- No way back. If nobody commits a known good state before a big AI change, undoing it is painful. "How to undo broken AI changes with git (and Lovable or Bolt history)" is worth reading before you start.
None of these are reasons to avoid the combination. They are reasons to set it up deliberately: one branch, one person or tool editing at a time, commits before big changes, and migrations for every database change.
## Which should you choose?
Choose based on how much code you can read and how costly a mistake would be, not on which tool is more popular.
### If you are a non-technical founder
Start in Lovable. Keep the first version small, one core workflow, and connect GitHub early so the code is yours from day one. When real users or payments arrive, get the security and data rules reviewed before you go further. Cursor is unlikely to help you much until you can read what it proposes.
### If you are semi-technical
Start in Lovable for speed, then move the serious work to Cursor once the screens exist. Make small, reviewable changes in Cursor, run the app locally, and push to the synced branch only when it works. This is where the combination earns its keep.
### If you already write code
Cursor, or a similar editor, from the start. You lose the instant preview but gain control over structure, testing and hosting, and you will not spend credits fighting a builder.
### If the app already has customers
Whichever tool you use, have someone accountable review authentication, row level security, payments and deployment. An outage or data leak costs more than any subscription.
## A worked example
Here is an illustration with a made-up business. A personal trainer builds a client check-in app in Lovable: clients sign in, log workouts and see a weekly summary. It works, and twenty clients start using it.
Then she wants Stripe subscriptions and a coach dashboard. Each attempt in Lovable fixes one screen and breaks another, and the credit balance drops quickly. A friend who knows some JavaScript suggests Cursor. They connect GitHub, clone the project and open it in Cursor.
In Cursor, the friend notices that the workouts table lets any signed-in user read every client's data, and that the summary is calculated in three different components. They fix the access rules first, then pull the summary into one function, commit, and push to main. The change syncs back to Lovable, where the trainer keeps editing copy and layout.
Stripe is where they stop. Webhooks, test and live keys and failed payments are new to both of them, so they hand that piece to a developer and keep the rest in-house. That split, builder for the visible parts, editor for careful changes, developer for the risky integration, is a sensible way to use all three.
## When should you stop and hire help?
Hire help when the same bug survives several attempts in either tool, when you are about to take payments, or when real user data is at risk.
The signs are usually obvious in hindsight. You have spent a week on one bug. You are not sure whether users can see each other's data. A change works in the preview and fails in production. Or you have moved to Cursor and realised you cannot judge whether its changes are safe.
At that point, the cheapest option is usually a short, well-defined job rather than more experimenting. My Quick Fix starts at $60 for one bug in about 2 days, Fix Plus Features starts at $200 for up to three fixes and one small feature in about 5 days, and Finish and Launch starts at $600 in about 10 days for apps whose core features already work. Before you hand anything over, "How to hand off your AI-built app to a developer" lists what to send so the work starts quickly, and the "fix your Lovable app" page explains how I approach these projects.
## The bottom line
Lovable and Cursor solve different problems. Lovable gets a non-technical founder to a working, hosted first version quickly. Cursor gives someone who can read code precise control over a codebase they own. For many projects the best path is both: start in Lovable, connect GitHub, and move careful changes to Cursor once the app matters. Whatever you choose, keep one branch as the source of truth, commit before big changes, and get security, data rules and payments reviewed before real users depend on them. If you are stuck, a small paid fix usually costs less than another month of prompts.`,
  },
  {
    slug: 'supabase-storage-upload-not-working',
    title: 'Supabase storage upload not working? Fix RLS, bucket, size and file type errors',
    description: 'Why Supabase storage uploads fail: storage.objects RLS policies, upsert, public vs private buckets, signed URLs, size limits, MIME types and CORS, with fixes.',
    date: d,
    keywords: ['Supabase storage upload not working', 'new row violates row-level security policy storage', 'Supabase storage RLS policy', 'Supabase signed URL', 'Supabase file size limit'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Most Supabase storage uploads fail because there is no INSERT policy on storage.objects for that bucket, or because the upload uses upsert without matching SELECT and UPDATE policies, which returns "new row violates row-level security policy". The rest are usually a bucket that is private when the code expects public URLs, a file over the size limit, or a file type the bucket does not allow.',
    takeaways: [
      'Supabase Storage blocks uploads to any bucket until you add an INSERT policy on storage.objects.',
      'Uploading with upsert set to true also needs SELECT and UPDATE policies, or the upload fails with a 403 row-level security error.',
      'A public bucket only makes reading open; uploads, deletes and moves still go through your policies.',
      'Free projects have a 50 MB global file size limit, and each bucket can set a lower limit and allowed MIME types.',
      'A CORS error on an upload is usually a symptom of another failed request, not a CORS setting you need to change.',
    ],
    faqs: [
      { q: 'Why does my Supabase upload say new row violates row-level security policy?', a: 'Because no policy on storage.objects allows this user to insert that file, or because the upload uses upsert and there is no SELECT policy letting the user read the row back.' },
      { q: 'Do public Supabase buckets need RLS policies?', a: 'Yes for writing. A public bucket lets anyone read files by URL, but uploading, deleting, moving and copying are still checked against your policies.' },
      { q: 'What is the maximum file size for Supabase storage?', a: 'On the Free plan the global limit cannot exceed 50 MB at the time of writing, while paid plans can raise it much higher, and each bucket can set its own lower limit.' },
      { q: 'How long do Supabase signed URLs last?', a: 'A signed download URL lasts for the number of seconds you pass in expiresIn, and a signed upload URL is valid for two hours.' },
      { q: 'Should I use the service role key to fix upload errors?', a: 'Not in the browser. The service role key bypasses all policies, so exposing it lets anyone read, overwrite or delete every file in your project.' },
    ],
    sources: [
      { title: 'Storage access control', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/storage/security/access-control' },
      { title: "Storage error: 403 Forbidden: 'new row violates row-level security policy' on upload", publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/troubleshooting/storage-error-403-forbidden-new-row-violates-row-level-security-policy-on-upload-a94384' },
      { title: 'Storage buckets fundamentals', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/storage/buckets/fundamentals' },
      { title: 'File limits', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/storage/uploads/file-limits' },
      { title: 'Storage error codes', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/storage/debugging/error-codes' },
    ],
    body: `File uploads are one of the first features that break when an AI-built app meets real users. The upload button works for the person who built it, then a customer tries to add a profile photo or a PDF and gets a red error, or nothing at all. In Supabase the cause is almost always one of a short list: policies, bucket settings, size, file type, or a request that fails for a different reason and looks like CORS.
This post goes through each one with the exact error text, the setting to check and the fix. It assumes the files live in Supabase Storage. If your problem is reading or writing normal database rows, "Is your Lovable or Bolt app leaking data? Check Supabase row level security" is the better starting point, and edge function failures are covered in "Supabase edge function errors: CORS, 401 Invalid JWT, missing secrets and timeouts".
## Why does my Supabase storage upload fail?
Your upload fails because Supabase checked the request against your storage rules and something did not match: the policy, the bucket, the size, the type, or the user's session.
Every file in Supabase Storage is a row in a table called storage.objects, in the storage schema. When your app uploads a file, Supabase tries to insert a row there, and row level security on that table decides whether the signed-in user is allowed to. Bucket settings then add their own checks for size and file type.
So first read the actual error. Open the browser's developer tools, go to the Network tab, retry the upload and click the failed request to the storage endpoint. The status code tells you where to look:
- 403 with "new row violates row-level security policy" or AccessDenied: a policy problem.
- 400 "Asset Already Exists": the path is taken and upsert is off.
- 400 InvalidMimeType: the bucket does not accept that file type.
- 413 EntityTooLarge: the file is over a limit.
- 404 NoSuchBucket: the bucket name in your code is wrong.
- 401 InvalidJWT: the user's session is missing or expired.
## What does "new row violates row-level security policy" mean for storage?
It means no policy on storage.objects allows this user to create, or read back, the row for the file they are uploading.
Supabase's documentation is direct about the default: Storage does not allow any uploads to buckets without RLS policies. A brand new bucket, public or private, accepts nothing from your app until you write an INSERT policy for it. AI tools often create the bucket and the upload code but skip the policy, or write a policy for a different bucket name.
There is a second, sneakier cause. Supabase's troubleshooting guide explains that when an upload uses upsert set to true, Storage runs an insert that also returns the row. If no SELECT policy covers that object, the database cannot return it, and the whole upload fails with the same 403, even though the INSERT policy would have allowed it.
So check two things:
- Is there an INSERT policy on storage.objects for this bucket, for the role the user has (usually authenticated)?
- Does the upload code set upsert to true? If so, is there a SELECT policy, and an UPDATE policy for overwriting?
If you do not need to overwrite files, the simplest fix is to drop upsert and upload each file to a new path.
## Which storage policies do you actually need?
You need an INSERT policy to upload, SELECT to read or list in a private bucket, UPDATE to overwrite, and DELETE to remove files.
Policies are written in the SQL editor or the Storage policies screen in the dashboard. A common, safe pattern from Supabase's examples is a folder per user. The upload path starts with the user's ID, for example the user ID, then a slash, then the file name. The INSERT policy then checks two things: the bucket_id is the bucket you expect, and the first folder in the path, which you get with the helper storage.foldername(name), equals the signed-in user's ID from auth.jwt().
Described in words, a typical set for a user files bucket looks like this:
- Insert, for authenticated users, only when the bucket matches and the first folder equals their user ID.
- Select, for authenticated users, only for objects in their own folder (or where owner_id matches them).
- Update, same rule as select, only if you overwrite files.
- Delete, same rule, only if users can remove their own files.
> Write the policy for the bucket by its exact ID. Bucket names are matched exactly, so a policy for "Avatars" does nothing for a bucket called "avatars".
Avoid policies that simply say true for every authenticated user. They let any user read or overwrite anyone's files.
## Public or private bucket: which one is your app using?
A public bucket lets anyone read a file by its URL, while a private bucket checks policies on every operation, including reads.
This trips up a lot of generated code. The AI creates a private bucket, which is the default, then saves a public URL into the database and shows it in an image tag. The upload works, but every image is broken, because a private bucket does not serve files through public URLs. The reverse also happens: someone makes the bucket public to fix broken images and accidentally publishes every invoice or ID document in it.
Two facts from Supabase's bucket documentation settle most of these cases. Buckets are private by default. And making a bucket public only opens reading: uploading, deleting, moving and copying are still controlled by your policies, so a public bucket does not fix an upload 403.
### Signed URLs for private files
For private files, create a signed URL with createSignedUrl when you need to show or download the file. The expiresIn value is in seconds, so 60 means the link stops working after one minute. Storing a signed URL in the database is a mistake, because it expires. Store the file path and create a fresh signed URL when the page loads.
There are also signed upload URLs, created with createSignedUploadUrl, which let a client upload to one specific path without further authentication. They are valid for two hours, and they are useful when your server decides where a file may go.
## What are the file size limits?
On the Free plan, files cannot exceed 50 MB at the time of writing, and any bucket can set a lower limit of its own.
Supabase has a global file size limit, set in your project's Storage settings, which applies to all buckets. Free projects cannot raise it above 50 MB; paid plans can go much higher, up to 500 GB on Pro and Team according to the docs at the time of writing. Each bucket can then set a smaller maximum, for example 1 MB for avatars, but never more than the global limit. A file over either limit is rejected with a 413 EntityTooLarge error.
Size also affects how you should upload. Supabase describes standard uploads as ideal for files up to about 6 MB and recommends resumable uploads for anything larger, for reliability on slow or mobile connections. An app that sends a 40 MB video through a standard upload on phone data may fail intermittently even though it is under the limit.
Practical fixes:
- Check the global limit and the bucket's limit before blaming the code.
- Resize or compress images in the browser before upload. Phone photos are often several megabytes.
- Show the limit in the interface, and check the size before sending, so users get a clear message instead of a failed request.
## Why is my upload rejected for its file type?
Your bucket probably restricts allowed MIME types, and the file's type, as Supabase sees it, is not on the list.
When a bucket is created you can pass allowedMimeTypes, for example image wildcard to accept any image, plus a fileSizeLimit. A file that does not match is rejected with 400 InvalidMimeType. The detail that catches people is how the type is decided: if your code does not pass contentType, Supabase infers it from the file extension. A file with no extension, or a wrong one, can be stored as a generic type and fail the check, or succeed and then display as a download instead of an image.
Things to check:
- The bucket's allowed types in the dashboard, under the bucket's settings.
- That the upload passes contentType from the file object, for example image/jpeg.
- Formats your users actually have. iPhone photos may be HEIC rather than JPEG, so either allow that type or convert before upload.
- That the file input's accept attribute matches the bucket rules, so users cannot pick files that will be refused.
## Is it really a CORS error?
Usually not. When an upload fails in the browser and the console says CORS, the request almost always failed for another reason first.
Browsers report CORS errors when a response is missing the headers they expect, and an error response from a misconfigured endpoint often lacks them. The Network tab tells you more than the console. If you see a real status code like 400, 403 or 413, fix that and the CORS message disappears.
The cases where CORS is the real problem tend to involve something between the browser and Supabase:
- The app sends the file to your own API route or an edge function, which then forwards it, and that function does not answer the preflight OPTIONS request with the right headers.
- The Supabase URL in your environment variables is wrong, for example a typo or a project you deleted, so the browser is talking to something that is not Supabase.
- A custom header added to the upload triggers a preflight your proxy does not handle.
If your own function is in the path, "How to fix a CORS error on a Next.js API route" and the edge function post cover the headers it must return.
## What mistakes does AI-generated upload code make?
The same handful of mistakes show up again and again in uploads written by AI tools.
- The service role key in the frontend to make errors go away. It bypasses all policies, so anyone can read or delete every file. "API key exposed in your frontend? Which keys are safe and how to fix the rest" explains how to rotate it.
- Upsert set to true on every upload, without SELECT and UPDATE policies.
- File paths that do not start with the user's ID, so the folder based policy never matches.
- A bucket name in code that differs from the real bucket in case or spelling, which returns 404 NoSuchBucket.
- Public URLs saved for files in a private bucket, or signed URLs saved permanently.
- Uploading before the session has loaded, so the request goes out as anonymous and fails with 401 or 403.
## A worked example
Here is an illustration with a made-up app. A dog grooming booking tool, built in Lovable, lets customers upload a photo of their dog. In testing it works. After launch, customers report that the upload spins and then fails.
The Network tab shows a 403 with "new row violates row-level security policy". The bucket, pet-photos, is private and has an INSERT policy for authenticated users. The upload code, though, sets upsert to true, and there is no SELECT policy. The builder had been testing while signed in as the project owner through a different path, which hid the problem.
The fix takes three changes. Upload paths now start with the user's ID plus a random file name, so upsert is no longer needed and is removed. A SELECT policy lets users read files in their own folder. And the gallery, which was showing public URLs that never worked for a private bucket, now stores the path and creates a signed URL for 60 minutes when the page loads. The bucket also gets a 10 MB limit and an image only MIME rule, with a matching check in the form.
If you would rather hand this to someone, a single upload bug like this fits my Quick Fix, from $60 in about 2 days. If uploads are one of several broken features, Fix Plus Features starts at $200 for up to three fixes and one small feature.
## The bottom line
When a Supabase storage upload is not working, read the failed request in the Network tab before changing anything. A 403 row-level security error means a missing INSERT policy, or upsert without SELECT and UPDATE policies. Broken images usually mean public URLs on a private bucket, and the fix is storing paths and creating signed URLs. 413 and InvalidMimeType point to size and type rules on the bucket or the project. CORS messages are usually a symptom. Write policies tied to the user's folder, keep the service role key on the server, and your uploads will behave the same for customers as they do for you.`,
  },
  {
    slug: 'too-many-redirects-nextjs',
    title: 'Too many redirects in Next.js (ERR_TOO_MANY_REDIRECTS): find the loop and fix it',
    description: 'How to fix ERR_TOO_MANY_REDIRECTS in Next.js: auth loops in proxy.ts or middleware, missing cookies, www vs apex on Vercel, trailing slashes and Cloudflare SSL.',
    date: d,
    keywords: ['too many redirects Next.js', 'ERR_TOO_MANY_REDIRECTS Next.js', 'Next.js middleware redirect loop', 'Vercel too many redirects', 'Cloudflare Flexible SSL redirect loop'],
    service: 'fix-ai-built-app',
    shortAnswer: 'ERR_TOO_MANY_REDIRECTS in Next.js means two rules keep sending the browser back and forth, most often an auth check in proxy.ts (formerly middleware.ts) that also runs on the login page, a session cookie that never gets set, or conflicting www and apex redirects. If the site sits behind Cloudflare, Flexible SSL mode is a common cause, fixed by switching to Full (strict).',
    takeaways: [
      'A redirect loop always has two sides, so trace the Location headers to see which rules are bouncing the request.',
      'Since Next.js 16 the middleware file is called proxy.ts, and an auth check that matches the login page itself is the classic loop.',
      'If the loop only starts after signing in, the session cookie is usually not being set or not being read where the check runs.',
      'Vercel domain redirects, registrar forwarding and next.config redirects can contradict each other on www and apex domains.',
      'Cloudflare Flexible SSL talks to Vercel over HTTP, Vercel redirects to HTTPS, and the request loops until you choose Full (strict).',
    ],
    faqs: [
      { q: 'What causes ERR_TOO_MANY_REDIRECTS on a Next.js site?', a: 'Two redirect rules that undo each other, such as an auth check that redirects to a login page it also protects, or a www rule and an apex rule pointing in opposite directions.' },
      { q: 'Is Next.js middleware still called middleware?', a: 'From Next.js 16 the middleware file convention is deprecated and renamed to proxy, so new projects use proxy.ts exporting a function named proxy.' },
      { q: 'Why does clearing cookies fix the redirect loop temporarily?', a: 'Because the loop depends on a stale or broken session cookie, and the fix is making sure the cookie is set and read consistently rather than clearing it every time.' },
      { q: 'How do I fix too many redirects with Cloudflare and Vercel?', a: 'In Cloudflare, open SSL/TLS settings for the domain and change the encryption mode from Flexible to Full (strict), then check for any remaining conflicting redirect rules.' },
      { q: 'Can Thomas Osayi fix a redirect loop on my AI-built app?', a: 'Yes, a single redirect loop fits the Quick Fix package, which starts at $60 and usually takes about 2 days.' },
    ],
    sources: [
      { title: 'proxy.js file convention', publisher: 'Next.js Docs', url: 'https://nextjs.org/docs/app/api-reference/file-conventions/proxy' },
      { title: 'trailingSlash', publisher: 'Next.js Docs', url: 'https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash' },
      { title: 'Deploying and redirecting domains', publisher: 'Vercel Docs', url: 'https://vercel.com/docs/domains/deploying-and-redirecting' },
      { title: 'How do I resolve err_too_many_redirects when using a Cloudflare proxy with Vercel?', publisher: 'Vercel', url: 'https://vercel.com/kb/guide/resolve-err-too-many-redirects-when-using-cloudflare-proxy-with-vercel' },
      { title: 'ERR_TOO_MANY_REDIRECTS', publisher: 'Cloudflare Docs', url: 'https://developers.cloudflare.com/ssl/troubleshooting/too-many-redirects/' },
    ],
    body: `"This page isn't working. example.com redirected you too many times." That message, with ERR_TOO_MANY_REDIRECTS underneath, is one of the most frustrating errors a founder can hit, because the site does not crash and the logs often look normal. The browser simply gives up after being bounced between URLs.
The good news is that a redirect loop always has a cause you can see if you look at the right thing. Two rules are disagreeing, and your job is to find both of them. This post covers the causes I check in a Next.js app, in the order I check them, with concrete steps for each. If your auth provider is Supabase and the problem is the redirect after email sign-in rather than a loop, "Supabase auth redirect URL not working?" is the closer match.
## What does ERR_TOO_MANY_REDIRECTS mean in a Next.js app?
It means the browser followed a chain of redirects that never reached a real page, usually because two rules send the request back and forth.
A redirect is a response with a 3xx status and a Location header that says "go here instead". Browsers follow these automatically, but they stop after a limit and show the error. In a Next.js app on Vercel, redirects can come from several places, and they run in a specific order:
- Cloudflare or another proxy in front of your site, if you use one.
- Vercel's domain settings, such as redirecting www to the apex domain or the reverse.
- redirects in next.config.js, which Next.js runs before your proxy.
- Your proxy.ts file (middleware.ts in older projects).
- Code in pages, layouts and server actions that calls redirect.
- Client code that pushes the user to another route after checking a session.
A loop needs two of these pointing at each other. An auth check sends signed out users to /login, and something on /login sends them back. Or Vercel sends www to apex and a DNS forward sends apex to www. Fixing one side without finding the other just moves the loop.
## How do you find which redirect is looping?
Trace the chain of Location headers, either in the browser's Network tab or with a single curl command.
In Chrome or Edge, open developer tools, go to Network, tick Preserve log, and load the page. You will see a list of requests with 307, 308 or 301 statuses. Click each one and read two things: the request URL and the Location response header. The pattern usually jumps out, for example /dashboard to /login to /dashboard, or https://www to https://apex to https://www.
From a terminal, curl -sIL followed by your URL prints every response's headers in order. Look for Location lines repeating, and for headers that reveal who sent the redirect. A response with a server header from Cloudflare, or one that arrives before any Next.js headers, tells you the redirect did not come from your code.
Then test variations:
- A private window, with no cookies. If the loop disappears, it involves a session cookie.
- The vercel.app URL of the deployment instead of your domain. If that works, the loop lives in domain or DNS settings.
- Local development. If it loops locally too, it is in your code.
Those three tests narrow the cause to one area within minutes.
## Is your proxy (formerly middleware) causing an auth loop?
Very often, yes. An auth check that runs on every route, including the login page, will redirect signed out users to login forever.
In Next.js 16, the middleware file convention was deprecated and renamed to proxy. New projects have a proxy.ts file in the project root (or in src) exporting a function called proxy; older projects still have middleware.ts. Next.js provides a codemod to rename it. Either way, the file runs before your routes render, and the docs warn that without a matcher it runs on every request, including static files and images.
The classic loop looks like this: the proxy checks for a session, finds none, and redirects to /login. The request for /login also goes through the proxy, which finds no session and redirects to /login again. The fixes:
- Add a matcher so the proxy only runs on protected paths, for example /dashboard and /account and their sub-paths.
- Or, if it must run broadly, return early for public routes such as /login, /signup, /auth/callback and /reset-password.
- Exclude _next/static, _next/image and files like favicon.ico, so assets are not redirected.
The opposite loop also happens: a signed in user visiting /login is redirected to /dashboard, and the dashboard's own server check thinks they are signed out and sends them back. That points to the next cause.
> When you add a redirect in the proxy, add a header or log line with the reason. One line of logging saves an hour of guessing which branch fired.
## Why does the loop only start after signing in?
Because the session cookie is either not being set or not being read in the place that makes the redirect decision.
In this pattern, the sign-in succeeds, the app redirects to the dashboard, and something on the server does not see a session, so it sends the user to login, which sees a session in the browser and sends them back. Common reasons:
- The cookie is set in client code, but the server check reads a different cookie, or a cookie that only the server can set.
- The cookie is set on a response that is then thrown away. In a proxy, cookies must be set on the response you actually return, for example the NextResponse.next() or redirect object, not a new one created later.
- The cookie has the Secure flag and you are testing on plain http, so the browser never stores it.
- The cookie's domain is set for the apex domain, but the user is on www, or the reverse.
- The auth library refreshes tokens in the proxy, but the refreshed cookies are not copied to the response, so the next request carries an expired session.
Check in developer tools under Application, then Cookies. After signing in, the session cookie should exist for the exact domain you are on. Then check that the proxy and your server code read it the same way. If your app uses Firebase Authentication with server checks, "Firebase Authentication in the Next.js App Router: how to do it properly" goes deeper into that setup.
![The creator sign-in screen on TheHoopGang portal. Sign-in pages are exactly where an auth check that runs on every route can turn into a redirect loop.](/shots/hoopgang-login.jpg)
## Can www and apex domain redirects loop on Vercel?
Yes, when the redirect between www and the bare domain is set in two places that disagree.
Vercel lets you add a redirect between domains in Project Settings, under Domains: you edit the domain you want to redirect from and choose the target in the Redirect to dropdown. Vercel's docs recommend www as the primary domain with the apex redirecting to it, though apex as primary also works. The problem starts when another layer has its own opinion:
- Your registrar's domain forwarding sends example.com to www.example.com while Vercel redirects www to example.com.
- A redirect in next.config.js or vercel.json forces one host while the Vercel domain setting forces the other.
- Proxy code that rewrites the host based on an environment variable, such as NEXT_PUBLIC_SITE_URL, set to the version Vercel redirects away from.
Pick one primary domain, set the redirect once in Vercel, and remove registrar forwarding and code level host redirects that contradict it. Then make sure your site URL variable, auth callback URLs and canonical tags all use the primary domain. "How to connect a GoDaddy domain to Vercel" covers the DNS side if forwarding was set up at the registrar.
## Could trailingSlash settings be the cause?
They can, when Next.js removes a trailing slash and another rule adds it back.
By default, Next.js redirects URLs with a trailing slash to the version without, so /about/ goes to /about. With trailingSlash set to true in next.config.js, it does the opposite and /about goes to /about/, except for files with extensions and paths under .well-known. A loop appears when something else disagrees:
- A redirect in next.config.js or vercel.json that adds or removes slashes in the opposite direction.
- Proxy code that normalises paths its own way.
- A CDN or proxy rule in front of Vercel that rewrites slashes.
- Links and canonical URLs written one way while the config prefers the other. That causes extra redirects, not usually a loop, but it wastes a hop on every visit.
Choose one style and let Next.js enforce it. If you truly need different behaviour for different paths, Next.js has a skipTrailingSlashRedirect option that turns off its automatic handling so your proxy can decide, but that is an advanced setting and easy to get wrong.
## Is Cloudflare SSL Flexible mode the culprit?
If your domain's DNS is proxied through Cloudflare and the loop started when you turned the orange cloud on, it almost certainly is.
In Flexible mode, the browser talks to Cloudflare over HTTPS, but Cloudflare talks to your origin, here Vercel, over plain HTTP. Vercel always redirects HTTP to HTTPS, and Vercel's guide notes that this redirect cannot be turned off. So Vercel sends a redirect to HTTPS, Cloudflare passes it to the browser, the browser asks Cloudflare for HTTPS again, Cloudflare asks Vercel over HTTP again, and the loop never ends.
The fix is in the Cloudflare dashboard: open SSL/TLS for the domain and change the encryption mode from Flexible to Full (strict). Full (strict) needs a valid certificate on the origin, which Vercel issues for domains it has verified. Cloudflare's own troubleshooting page also lists Always Use HTTPS combined with an origin that redirects back to HTTP, and HSTS settings, as other causes worth checking.
If you do not need Cloudflare's proxy, setting the records to DNS only is the simplest option, and avoids two layers of redirects on every request.
## A worked example
Here is an illustration with a made-up business. A tutoring company's booking app, built with an AI tool on Next.js and deployed to Vercel, starts showing ERR_TOO_MANY_REDIRECTS right after launch, but only for some visitors.
A private window loads the homepage fine but loops on /dashboard after sign-in. The Network tab shows /dashboard to /login to /dashboard, with no Cloudflare headers, so the loop is in the app. The proxy file checks for a session cookie and redirects to /login if it is missing. The login page has a client check that redirects signed in users to /dashboard.
Under Application, then Cookies, the session cookie exists for www.example.com, but the proxy is redirecting to the apex domain, because NEXT_PUBLIC_SITE_URL was set without www and the redirect uses it to build absolute URLs. On the apex domain the cookie does not exist, so the proxy sends the user to login, where Vercel's domain redirect sends them back to www, where the client check sends them to the dashboard.
The fix is to build redirects from the incoming request URL rather than a hardcoded site URL, set NEXT_PUBLIC_SITE_URL to the www version, and add a matcher so the proxy only runs on /dashboard and /account. Ten minutes of tracing, one small change.
## When should you get help?
Get help when you have traced the chain and still cannot find the second rule, or when the loop involves authentication you do not fully understand.
Redirect loops are usually small fixes once found, which makes them a good fit for my Quick Fix, from $60 in about 2 days. If the loop is one of several launch problems, such as environment variables, auth callbacks and domains all misbehaving together, Fix Plus Features starts at $200 for up to three fixes plus one small feature. "Your Lovable or Bolt app works locally. Here is what breaks at launch." covers the wider launch checklist.
## The bottom line
ERR_TOO_MANY_REDIRECTS in Next.js always means two rules disagree. Trace the Location headers in the Network tab or with curl, then test in a private window, on the vercel.app URL and locally to narrow it down. The usual causes are a proxy.ts (or middleware.ts) auth check that also runs on the login page, a session cookie that is not set or read where the decision is made, conflicting www and apex redirects, trailing slash rules fighting each other, and Cloudflare in Flexible SSL mode. Fix the rule that should not exist, keep one source of truth for each redirect, and the loop is gone for good.`,
  },
  {
    slug: 'too-many-database-connections-serverless',
    title: 'Too many connections in Postgres on serverless: why it happens and how to fix it',
    description: 'Why Vercel functions exhaust Postgres connections with Prisma, Supabase or Neon, what "too many clients already" means, and how poolers and pool sizes fix it.',
    date: d,
    keywords: ['too many connections Postgres serverless', 'sorry, too many clients already', 'remaining connection slots are reserved', 'Supabase transaction pooler 6543', 'Prisma serverless connection pool'],
    service: 'fix-ai-built-app',
    shortAnswer: 'Serverless functions on Vercel can run many instances at once, and each instance opens its own database connections, so a traffic spike quickly uses up the Postgres connection limit and new requests fail with "sorry, too many clients already" or "remaining connection slots are reserved". The fix is to connect through a pooler, such as Supabase transaction mode on port 6543 or a Neon pooled connection string, and keep each instance\'s pool small.',
    takeaways: [
      'Every serverless instance has its own connection pool, so connections multiply with traffic rather than staying fixed.',
      'Postgres defaults to about 100 connections, and small hosted databases allow far fewer direct connections than a busy serverless app can open.',
      'Supabase transaction mode on port 6543 and Neon pooled strings with -pooler in the hostname are built for serverless traffic.',
      'Transaction mode poolers do not support every session feature, so prepared statements and session settings need care.',
      'Run migrations over a direct or session connection, and keep the app runtime on the pooled one.',
    ],
    faqs: [
      { q: 'What does sorry, too many clients already mean in Postgres?', a: 'It means every connection slot allowed by max_connections is in use, so Postgres refused the new connection.' },
      { q: 'Which Supabase port should a Vercel app use?', a: 'Use the transaction pooler on port 6543 for serverless runtime traffic, and the session pooler or direct connection on port 5432 for migrations.' },
      { q: 'How do I get a pooled connection string on Neon?', a: 'In the Neon Console, click Connect and turn on Connection pooling, which gives a hostname ending in -pooler that routes through PgBouncer.' },
      { q: 'Should I call disconnect after every Prisma query in a serverless function?', a: 'No. Create the client once outside the handler and reuse it, because reconnecting on every invocation is slow and does not fix the underlying limit.' },
      { q: 'Can Thomas Osayi fix connection errors in my app?', a: 'Yes, Thomas Osayi works with Next.js, Prisma and Postgres, and a connection limit problem usually fits the Quick Fix package from $60 in about 2 days.' },
    ],
    sources: [
      { title: 'Connect to your database', publisher: 'Supabase Docs', url: 'https://supabase.com/docs/guides/database/connecting-to-postgres' },
      { title: 'Connection pooling', publisher: 'Neon Docs', url: 'https://neon.com/docs/connect/connection-pooling' },
      { title: 'Database connections', publisher: 'Prisma Docs', url: 'https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/databases-connections' },
      { title: 'Connections and authentication', publisher: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/current/runtime-config-connection.html' },
      { title: 'Efficiently manage database connection pools with Fluid compute', publisher: 'Vercel', url: 'https://vercel.com/kb/guide/efficiently-manage-database-connection-pools-with-fluid-compute' },
    ],
    body: `An app that worked perfectly with ten test users can fall over the first time real traffic arrives, and the error is not about slow code at all. Requests start failing with "sorry, too many clients already" or "remaining connection slots are reserved", the database dashboard shows a wall of connections, and then, a few minutes later, everything recovers as if nothing happened.
That pattern is the classic serverless connection problem. My day job at The Hoop Gang is Next.js, TypeScript, Prisma and Postgres, so how connections are opened and shared is something I think about whenever I touch database code. This post explains why serverless functions exhaust Postgres connections, what the errors mean, and the specific settings that fix it on Supabase, Neon and Prisma, verified against their docs at the time of writing.
## Why do serverless functions run out of Postgres connections?
Because each serverless instance opens its own connections, and under load the platform runs many instances at once, so the total quickly passes the database's limit.
A traditional server is one long running process with one connection pool, say ten connections, shared by every request. On Vercel, your API routes and server code run as functions. When traffic rises, the platform starts more instances to handle it. Each instance loads your code, creates its own database client and opens its own pool. Ten instances with a pool of ten each is a hundred connections, and Postgres starts refusing new ones.
Several things make it worse:
- A database client created inside the request handler, so every invocation opens a fresh connection.
- Default pool sizes meant for long running servers. The Prisma docs list a default pool size of 10 for the pg driver adapter.
- Connections that stay open while an instance sits idle, holding slots nobody is using.
- Other clients sharing the same limit: the database dashboard, migrations, background jobs, analytics tools.
- In development, hot reloading creating a new client on every file save.
The fix is not a bigger database first. It is putting a pooler between your functions and Postgres, and keeping each instance's own pool small.
## What do the error messages mean?
They all mean Postgres has run out of connection slots for your user, at slightly different points.
Postgres has a setting called max_connections, which the PostgreSQL documentation says is typically 100 by default. A few of those slots are held back: superuser_reserved_connections defaults to 3, and newer versions add reserved_connections for roles with special privileges. The errors you will see:
- "FATAL: sorry, too many clients already" means every slot is in use.
- "FATAL: remaining connection slots are reserved for non-replication superuser connections" is the older wording for the case where only reserved slots are left, so a normal app user is refused.
- "remaining connection slots are reserved for roles with the SUPERUSER attribute" and "remaining connection slots are reserved for roles with privileges of pg_use_reserved_connections" are the same situation in newer Postgres versions.
Your ORM wraps these in its own error, so look for the underlying Postgres text in the function logs. If you see timeouts acquiring a connection instead, your app's local pool is the bottleneck rather than the database, which points to pool size and slow queries holding connections too long.
## How many connections does your database actually allow?
Fewer than most people expect, especially on small hosted plans, so check the real number before tuning anything.
At the time of writing, Supabase lists 60 direct connections and 200 pooler clients for its Nano and Micro compute sizes, 90 and 400 for Small, and 120 and 600 for Medium. Neon sizes max_connections by compute: 112 at 0.25 compute units, 450 at 1, rising with larger computes. A self-hosted Postgres uses whatever max_connections is set to, often the default of about 100.
You can check from any SQL client:
- show max_connections; returns the configured limit.
- select count(*) from pg_stat_activity; returns how many connections exist right now.
- Grouping pg_stat_activity by application_name, usename or state shows who is holding them and how many are idle.
If most connections are idle and belong to your app, you have a pooling problem. If a migration tool or a reporting dashboard is holding a large share, that is worth fixing too. Note the numbers during a traffic spike, not at 3am, because the problem only exists under load.
## How do you fix it on Supabase?
Point your app's runtime connection at the Supavisor transaction pooler on port 6543, and keep port 5432 for migrations.
Supabase offers three ways to connect. The direct connection uses port 5432 on the db.your-project-ref.supabase.co host. The shared pooler, Supavisor, runs session mode on port 5432 and transaction mode on port 6543 on a pooler.supabase.com host. Supabase's docs describe transaction mode as the one for serverless and edge functions, which open many short lived connections. Copy the exact strings from the Connect dialog in the dashboard rather than building them by hand.
Two details catch people out:
- The shared pooler does not support prepared statements in transaction mode. For Prisma, Supabase's guide says to add pgbouncer=true to the transaction pooler string, which turns prepared statements off.
- Direct connections use IPv6 on Free and Pro plans unless you buy the IPv4 add-on, while the shared pooler is IPv4. Some hosts cannot reach IPv6, which is another reason serverless apps should use the pooler.
For Prisma, Supabase's setup uses DATABASE_URL for the transaction pooler on 6543 and DIRECT_URL for a session or direct connection used by migrations. If you change your schema in Supabase, "How to change your Supabase database safely with migrations" covers the migration side.
## How do you fix it on Neon?
Use the pooled connection string, which has -pooler in the hostname, for your app, and the direct string for migrations and admin work.
In the Neon Console, click Connect and turn on the Connection pooling toggle. The hostname changes from something like ep-name-123456 to ep-name-123456-pooler, and connections go through PgBouncer. Neon's docs say PgBouncer accepts up to 10,000 client connections, which is far more than a busy serverless app needs, while it keeps the real Postgres connections within the compute's limit.
Neon runs PgBouncer in transaction mode, so a connection is returned to the pool after each transaction. That means some session features do not work on pooled connections:
- SET and RESET for session settings, which could leak to other clients.
- LISTEN and NOTIFY.
- SQL level PREPARE and DEALLOCATE, though protocol level prepared statements through your driver are supported.
- Session level advisory locks and some temporary table behaviour.
Neon recommends pooled connections for serverless functions and web apps, and direct connections for schema migrations, pg_dump and pg_restore, and long running admin or analytics sessions.
## How should Prisma be configured for serverless?
Create one Prisma client per instance outside the request handler, keep its pool small, and connect it to a pooled URL.
The Prisma docs give clear serverless guidance: instantiate PrismaClient at module scope so warm invocations reuse it, configure a small pool, do not call disconnect after every invocation, and keep the number of concurrent function instances below what the database can serve. In Next.js development, store the client on globalThis when NODE_ENV is not production, so hot reloading does not create a new client on every save.
How you set the pool size depends on your Prisma version:
- In Prisma ORM 6 and earlier, pool size is a connection_limit parameter on the connection URL, and serverless setups often set it very low.
- In Prisma ORM 7, the docs say pool settings live on the driver adapter, with no connection URL parameters for them. With @prisma/adapter-pg, that is the max option, whose default is 10, plus timeouts such as connectionTimeoutMillis.
For migrations, Prisma's CLI reads the URL from prisma.config.ts, which in a pooled setup should point at DIRECT_URL.
![TheHoopGang creator portal homepage. The Hoop Gang's stack is Next.js, TypeScript, Prisma and Postgres, the same combination this post is about.](/shots/hoopgang-home.jpg)
## What about Vercel Fluid compute?
Fluid compute lets one function instance handle several requests, which helps, but you still need to close idle connections and use a pooler.
Vercel's guide recommends creating your pool in global scope so concurrent requests on the same warm instance share it, releasing each client after use, and keeping idle timeouts short, around 5 seconds. It also provides attachDatabasePool from the @vercel/functions package, which closes idle connections before an instance suspends so they do not linger and hold slots.
> Write down every place that connects to your database: the app, migrations, cron jobs, the dashboard, BI tools. Then decide which ones use the pooler and which use direct connections. Most connection problems are really "nobody knew that thing was connecting".
## A worked example
Here is an illustration with a made-up business. A meal prep company runs its ordering app on Vercel with Prisma and a small Supabase project. On a normal day it is fine. On the Sunday a promotion email goes out, orders fail for ten minutes with "remaining connection slots are reserved".
Looking at the setup, DATABASE_URL points at the direct connection on port 5432, the Prisma client is created inside a helper that every API route calls fresh, and the pool size is the default. During the spike, dozens of instances each open several connections, and the 60 direct connections on the small compute run out.
The fix is three changes. DATABASE_URL moves to the transaction pooler on port 6543 with pgbouncer=true, and a DIRECT_URL on 5432 is added for migrations. The Prisma client moves to a single module scope instance with the globalThis pattern for development. The adapter's max pool size is set low, so one instance cannot hog the pooler. The next promotion goes out without errors, and the database dashboard shows far fewer connections at the peak.
## When should you get help?
Get help if errors continue after moving to a pooler, if you see prepared statement errors you cannot explain, or if migrations start failing after the change.
These problems are usually configuration rather than code, which makes them a reasonable fit for my Quick Fix, from $60 in about 2 days. If connection errors are part of a wider set of launch problems, Fix Plus Features starts at $200 for up to three fixes and one small feature, and Finish and Launch starts at $600 in about 10 days for apps whose core features already work. For apps that are slow rather than failing, "Why is my Lovable app slow? How to find and fix it" covers the other half of database performance, and "What does it cost to run an AI-built app per month? A real budget" helps decide whether a bigger database tier is worth it.
## The bottom line
Too many connections on serverless Postgres is a multiplication problem: many function instances, each with its own pool, against a fixed limit. Read the actual Postgres error, check max_connections and pg_stat_activity under load, then route your app through a pooler: Supabase transaction mode on port 6543 or a Neon -pooler hostname. Keep one small Prisma client per instance, set the pool size on the driver adapter in Prisma 7 or with connection_limit in older versions, and use direct connections only for migrations and admin work. Most apps never need a bigger database after that. They needed fewer, better shared connections.`,
  },
];
