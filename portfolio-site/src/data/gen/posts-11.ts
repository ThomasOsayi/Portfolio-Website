// Generated articles, batch 11 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen11: Post[] = [
  {
    slug: 'how-to-scope-an-mvp',
    title: 'How to scope an MVP: one workflow, three lists and the cuts that matter',
    description: 'A practical way to scope an MVP: pick one core workflow, sort features into must, should and later, write user stories a developer can build from, and cut safely.',
    date: d,
    keywords: ['how to scope an MVP', 'MVP scope', 'MVP feature list', 'MoSCoW prioritization MVP', 'user stories for MVP'],
    service: 'saas-mvp-development',
    shortAnswer: 'Scope an MVP by choosing the one workflow your customer cannot get done anywhere else, building only what that workflow needs end to end, and parking everything else on a written later list. Write each piece as a user story with acceptance criteria so the developer, the budget and the timeline all point at the same thing.',
    takeaways: [
      'An MVP is one complete workflow, not a thin slice of every feature you plan to build.',
      'Sort every idea into must, should and later, and keep the must list small enough to finish with room to spare.',
      'User stories with acceptance criteria turn a vague feature list into something a developer can estimate and test.',
      'Cut polish, settings and edge-case features freely, but never cut access rules, the data model or payment correctness.',
      'A well-scoped first version of one workflow can ship in days or weeks instead of months.',
    ],
    faqs: [
      { q: 'What is the difference between an MVP and a prototype?', a: 'A prototype shows how a product might work, while an MVP is a working product real users can sign up for and use to get one job done.' },
      { q: 'How many features should an MVP have?', a: 'An MVP should have as many features as one core workflow needs to work end to end, which is usually far fewer than founders expect.' },
      { q: 'Should an MVP include payments?', a: 'Include payments if charging is part of what you are testing, and skip them for a free pilot where you only need to prove that people use the workflow.' },
      { q: 'What is MoSCoW prioritization?', a: 'MoSCoW sorts requirements into must have, should have, could have and will not have this time, so a team agrees in advance what gets cut if time runs short.' },
      { q: 'How much does a tightly scoped MVP cost?', a: 'Thomas Osayi builds a working first version of one workflow from $250 in about 7 days, and a launchable SaaS MVP with auth, dashboard, database and payments from $1,200.' },
    ],
    sources: [
      { title: 'MoSCoW Prioritisation', publisher: 'Agile Business Consortium', url: 'https://www.agilebusiness.org/dsdm-project-framework/moscow-prioririsation.html' },
      { title: 'User stories with examples and a template', publisher: 'Atlassian', url: 'https://www.atlassian.com/agile/project-management/user-stories' },
    ],
    body: `Most MVPs that go over budget were never really scoped. They were described. A founder writes a page of features, a developer estimates the page, and three weeks in everyone discovers that "user accounts" meant teams, invitations, roles and billing, while "reports" meant six charts and a CSV export.
Scoping is the step that prevents that. It is not about building less for the sake of it. It is about deciding which single job the first version must do perfectly, and writing it down so precisely that nobody can quietly add to it. Here is the process I use, with a worked example and the cuts I will and will not make.
## What does it actually mean to scope an MVP?
Scoping an MVP means choosing one workflow, defining exactly what done looks like for it, and agreeing in writing what is out.
The word MVP gets stretched to cover everything from a clickable mockup to a half-built version of the full product. Neither is useful. A mockup cannot prove anyone will use the product, and a thin slice of ten features usually means ten things that half work. The version that teaches you something is a product where one complete path works from start to finish for a real user: they sign up, they do the thing, they get the result.
That path is the scope. Everything outside it goes on a list with a name, so it is parked rather than forgotten. A good scope document is short. It names the user, the workflow, the screens the workflow touches, the data it creates, and the conditions under which you will call it finished. If you cannot fit it on two pages, you are probably still describing the whole product.
## How do I find the one core workflow?
The core workflow is the one that produces the answer or outcome your customer cannot get anywhere else.
A useful test: if this workflow worked perfectly and nothing else existed, would at least a few customers still use it, or pay for it? If yes, that is your core. If they would also need three other features before it is worth anything, you have picked something too small, or something that is not really the point.
When I built SQWAD, the first version did one thing: let a brand see which creator drove a sale. Applications, shipping, content review, competitions and payouts are all real jobs in a creator program, and SQWAD does them now. But a brand can limp along on spreadsheets for those. What a spreadsheet cannot tell them is which creator's video sold product. So attribution came first, and the operational features were added around it one workflow at a time.
![SQWAD's revenue attribution page: every Meta ad traced back to the creator and video behind it, the workflow SQWAD's first version was built around.](/shots/sqwad-creator-revenue-attribution.jpg)
To find yours, write down the moment your customer gets value. Then walk backwards: what did they have to do just before that, and before that, until you reach sign-up. That chain is the workflow.
## How do I sort features into must, should and later?
Put every idea on one of three lists: must (the workflow breaks without it), should (painful to lose but there is a workaround) and later (everything else).
This is a simplified version of MoSCoW, the prioritization method from the Agile Business Consortium. Their guidance is that must have work should stay at or below about 60 percent of the total effort, with around 20 percent held as could have contingency. For an MVP that ratio is a good sanity check: if your must list already fills the whole budget, nothing can go wrong without the launch slipping.
### Must
Only what the core workflow needs end to end. Sign-in, the screens in the chain you mapped, the data those screens create, and whatever makes the outcome trustworthy.
### Should
Things users will ask for in week one but can survive without: a nicer empty state, editing a record after saving it, an email notification instead of checking the dashboard. These are the first things you add after launch, and the first things you drop if time is short.
### Later
Settings pages, team invites, integrations, dark mode, admin analytics, a mobile app. Writing them down matters, because a parked idea stops coming back as a mid-build request.
> When you are unsure where a feature belongs, ask what a user would do without it. If the answer is "email you" or "use a spreadsheet for now," it is not a must.
## How do I write user stories a developer can build from?
Write each must item as a user story in the form "As a [user], I want to [action], so that [outcome]," and attach acceptance criteria that say exactly when it is done.
Atlassian's guide describes the same template and treats the acceptance criteria as the confirmation step, the part that makes a story testable. That is the part founders skip and the part that saves money. "Users can upload files" is not buildable. This is:
- As a salon manager, I want to upload a price list as a PDF, so that clients see current prices on the booking page.
- Done when: PDFs up to 10 MB upload from desktop and phone, other file types show a clear error, the newest upload replaces the old one, and only managers of that salon can upload.
Notice what the criteria quietly decide: file size, file type, who can do it, and what happens to the old file. Each of those is a question a developer would otherwise answer on their own, and every answer costs time. Ten to twenty stories like this usually describe an MVP completely. If you have fifty, go back to the three lists.
## What can I safely cut, and what should I never cut?
Cut anything a user can work around; never cut the things that are expensive or dangerous to fix after real data exists.
### Safe to cut
- Polish: animations, custom illustrations, a marketing site beyond one page.
- Self-serve settings: you can change a customer's plan or name by hand for the first twenty customers.
- Admin dashboards: a database console and a few saved queries will do at first.
- Edge cases that have not happened yet, as long as the app fails clearly rather than silently.
### Never cut
- Access rules. Who can read and change which record has to be enforced where the data lives from day one. I covered this in "Roles and permissions in a SaaS app: a practical guide for founders."
- The data model. If the product will have teams later, design an organization concept now, even if every organization has one person in it.
- Payment correctness. If you charge, the webhook that activates a plan must be reliable. A missed webhook means a customer paid and got nothing.
- Backups. Losing a pilot customer's data ends the pilot.
## Worked example: scoping a booking tool for a grooming business
Here is an illustration with a made-up business: Paws on Pico, a dog grooming business with three groomers that takes bookings by text and loses track of them.
The owner's wish list had 22 items, including a client app, loyalty points, SMS reminders, groomer payroll and an inventory tracker. The moment of value was simple: a client books a slot that is actually free, and the groomer sees it. Walking backwards gave the core workflow: client picks a service, picks a groomer and time, enters contact and dog details, confirms; the groomer sees the booking on a day view; the owner can cancel or move it.
- Must: service list, availability per groomer, booking form, confirmation email, groomer day view, owner cancel and move, sign-in for staff only.
- Should: reminder email the day before, client rebooking link, blocking off holidays.
- Later: loyalty points, SMS, payroll, inventory, client accounts, a native app.
That is about twelve user stories. It fits a short build, and within a month the owner knows whether clients actually book online, which is the only question that mattered. If you are weighing a ready-made tool against a custom build for this kind of job, "Online booking for your website: embed a tool or build it custom?" walks through that decision.
## How much does a well-scoped MVP cost and how long does it take?
A single, tightly scoped workflow can be built in about a week, and a launchable SaaS MVP with accounts, a dashboard, a database and payments takes around three weeks.
Those are the shapes of my own packages: the MVP Starter from $250 over about 7 days covers a working first version of one workflow, the SaaS MVP from $1,200 over about 21 days adds auth, a dashboard, a database and payments, and the Full SaaS Platform from $3,000 over about 45 days is for multiple roles, admin tools and integrations. Agencies and other developers price differently, but the pattern holds everywhere: cost follows the number of workflows and roles, not the number of screens.
Scope is the lever you control. Moving four items from must to later often moves a project down a whole tier. Adding a second user type, for example clients and staff who each need their own view, often moves it up one. For a fuller breakdown of what drives price, see "How much does an MVP cost? SaaS MVP prices and what drives them."
## What scoping mistakes push MVPs over budget?
The expensive mistakes are vague nouns, hidden roles and late additions, not the size of the original list.
- Vague nouns. "Reports," "notifications" and "profiles" can each mean a day or a month. Every noun needs acceptance criteria.
- Hidden roles. If someone other than the main user needs to log in, such as an admin, a client or a reviewer, that is a second product surface. Count it.
- Integrations treated as checkboxes. "Connect to QuickBooks" involves auth, data mapping and failure handling. Put integrations on the later list unless the workflow is impossible without one.
- Designing for scale you do not have. Ten users do not need caching layers or microservices.
- Mid-build additions. Each one feels small. Keep a "later" doc open during the build and put every new idea there, then review it after launch.
- Skipping the end-to-end test. Each screen working alone is not the workflow working. Test the whole path with a real account before you call it done.
## When should I bring in a developer for scoping?
Bring a developer in before you commit to a budget, because the hidden costs in a scope are usually technical and a short review finds them.
A founder can do most of the work above alone: the workflow, the three lists and the stories. What a developer adds is spotting the items that look small and are not, such as real-time updates, file processing, calendar sync or anything involving money moving between people, and suggesting cheaper ways to get the same outcome. They will also tell you which items must be designed in now because they are painful to add later, like organizations and roles.
If you already built a prototype in Lovable, Bolt or a similar tool, the prototype is a great scoping document, because it shows the workflow you imagine. Bring it along. "What to send a web developer before your project starts" lists the other things that make a first conversation productive.
## The bottom line
Pick the one workflow your customer cannot get done anywhere else, build exactly what it needs from sign-up to result, and write everything else on a later list. Turn each must item into a user story with acceptance criteria, cut polish and settings freely, and never cut access rules, the data model or payment correctness. SQWAD started as attribution and nothing else. A first version that does one job well teaches you more than one that does ten jobs halfway, and it costs a fraction as much.`,
  },
  {
    slug: 'multi-tenant-saas-with-firestore',
    title: 'Multi-tenant SaaS with Firestore: data layout, security rules and custom claims',
    description: 'How to build a multi-tenant SaaS on Firestore: orgs collection vs tenantId field, per-tenant security rules, custom claims and the query mistakes that leak or block data.',
    date: d,
    keywords: ['multi-tenant SaaS Firestore', 'Firestore multi-tenancy', 'Firestore security rules per tenant', 'Firebase custom claims tenant', 'Firestore data model SaaS'],
    service: 'saas-mvp-development',
    shortAnswer: 'For most multi-tenant SaaS apps on Firestore, store each customer under a top-level orgs collection with subcollections, keep membership in a members subcollection, and write security rules that check the signed-in user belongs to that org. Use custom claims only for small, stable facts like an org ID or role, because they are capped at 1000 bytes and only refresh when a new ID token is issued.',
    takeaways: [
      'Tenant isolation must be enforced in Firestore security rules, not only in your app code, because the client talks to the database directly.',
      'An orgs/{orgId} layout with subcollections makes per-tenant rules short and readable, which is why I default to it.',
      'Rules that look up a membership document cost a billed read and count toward a limit of 10 document access calls per single-document or query request.',
      'Custom claims are fast and free to check in rules, but they are limited to 1000 bytes and only change when the user gets a new ID token.',
      'Rules are not filters: every query must include the same tenant condition the rules check, or Firestore rejects the whole query.',
    ],
    faqs: [
      { q: 'Should each customer get their own Firebase project?', a: 'Usually not, because one project per tenant multiplies deploys, indexes and billing; it only makes sense when a contract requires physical separation.' },
      { q: 'Can a user belong to more than one organization in Firestore?', a: 'Yes, store a membership document per org and let the user pick an active org, rather than putting every org ID into custom claims.' },
      { q: 'Why do I get Missing or insufficient permissions on a list query?', a: 'Usually because the query does not include the tenant filter the rules require, so Firestore cannot prove every possible result is allowed and rejects it.' },
      { q: 'Do I need Identity Platform multi-tenancy for a B2B SaaS?', a: 'Only if each customer needs its own separate user pool or identity provider, such as their own SAML single sign-on; most MVPs do fine with one user pool and org membership.' },
      { q: 'Can someone review my Firestore rules for tenant leaks?', a: 'Thomas Osayi builds multi-role SaaS platforms with tenant isolation and admin tools from $3,000, and fixes a single security rule problem in an existing app from $60.' },
    ],
    sources: [
      { title: 'Control access with custom claims and security rules', publisher: 'Firebase', url: 'https://firebase.google.com/docs/auth/admin/custom-claims' },
      { title: 'Writing conditions for Cloud Firestore Security Rules', publisher: 'Firebase', url: 'https://firebase.google.com/docs/firestore/security/rules-conditions' },
      { title: 'Securely query data', publisher: 'Firebase', url: 'https://firebase.google.com/docs/firestore/security/rules-query' },
      { title: 'Managing Identity Platform tenants programmatically', publisher: 'Google Cloud', url: 'https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-managing-tenants' },
    ],
    body: `In a multi-tenant SaaS, every customer shares one database and none of them may ever see another's data. On a traditional backend you enforce that in server code. On Firestore, the browser and the phone talk to the database directly, so the only thing standing between customer A and customer B's records is your security rules.
That changes how you design the data. I built SQWAD on Firebase with brands, their team members and creators separated and each brand's data isolated, and the lesson I took from it is the same one I would give anyone starting out: decide the tenant layout on day one, because moving it later means migrating every document. Here is how I choose a layout, write the rules and use custom claims without hitting their limits.
## What does multi-tenant mean in a Firestore app?
It means one Firebase project and one Firestore database serve many customer organizations, and every read and write is checked against the organization the user belongs to.
The tenant is whatever your customer is: a company, a brand, a clinic, a team. Users belong to one or more tenants, and almost every document in the product belongs to exactly one. The app shows the user their tenant's data, but that is presentation. The real boundary is a rule like "allow this read only if the requester is a member of the org that owns this document."
Three things have to agree for that to work: where the tenant ID lives on each document (or in its path), where membership is recorded, and how the rules connect the two. Get those right and the rest of the app is ordinary Firestore work.
![SQWAD's feature grid, including a branded portal for each brand. Each brand on SQWAD has its own creators and data, kept isolated from every other brand.](/shots/sqwad-home-s3.jpg)
## Should tenants be a top-level orgs collection or a tenantId field?
For most SaaS products I put each tenant under orgs/{orgId} with subcollections, and I use a flat collection with a tenantId field only when I need frequent queries across all tenants.
### Option A: orgs/{orgId} with subcollections
Best for: B2B tools where users work inside one organization at a time.
Layout: orgs/{orgId}, orgs/{orgId}/members/{uid}, orgs/{orgId}/projects/{projectId}, orgs/{orgId}/invoices/{invoiceId}.
Pros: the tenant is in the path, so a single rule block covers everything under an org. Queries are naturally scoped. Deleting or exporting one customer is easy to reason about.
Cons: deleting an org document does not delete its subcollections, so offboarding needs a server function that walks them. Cross-tenant reporting needs collection group queries.
### Option B: flat collections with a tenantId field
Best for: products where an internal admin view constantly queries across tenants, or where documents move between tenants.
Layout: projects/{projectId} with a tenantId field, invoices/{invoiceId} with a tenantId field.
Pros: simple cross-tenant queries for your own back office.
Cons: every rule must compare resource.data.tenantId, every create must validate request.resource.data.tenantId, and every client query must filter on it. Forget once and you have a leak or a broken screen.
### Option C: one Firebase project per tenant
Best for: contracts that require physical separation. It multiplies deploys, indexes, keys and billing accounts, so I avoid it for an MVP.
## How do I write security rules per tenant?
Check that the signed-in user has a membership document in the org they are trying to read, and check their role in that membership before any write.
With Option A, the core is a helper function and one match block. In plain text, the rule reads like this:
function isMember(orgId) returns exists(/databases/$(database)/documents/orgs/$(orgId)/members/$(request.auth.uid))
match /orgs/{orgId}/projects/{projectId} allows read if isMember(orgId), and allows write if isMember(orgId) and that member document has role equal to admin or editor.
Two details from the Firebase rules documentation matter here. First, every get() or exists() call in a rule performs a document read that you are billed for, even when the request is denied. Second, there is a limit of 10 such document access calls for single-document requests and queries, and 20 for multi-document reads, transactions and batched writes. Exceed it and the request fails with a permission error. A rule that looks up the org, then the member, then a plan document, then a project owner is already at four, so keep lookups shallow.
Also lock down the membership documents themselves. If a user can write their own members/{uid} document, they can add themselves to any org. Create memberships only from a Cloud Function or an invite flow that the rules verify.
## When should I use custom claims for tenant access?
Use custom claims for small, stable facts such as a user's single org ID or a platform admin flag, and keep anything that changes often or grows with the user in Firestore.
Custom claims are set with the Admin SDK and travel inside the user's ID token, so rules can read them as request.auth.token.orgId without a billed read and without using one of the 10 document access calls. That makes them attractive. The Firebase documentation lists the catches:
- The claims payload must not exceed 1000 bytes. A user who belongs to forty orgs will not fit.
- Claims reach the client only when a new ID token is issued. If you remove someone from an org, their old token still carries the claim until it refreshes, so revoke tokens or force a refresh with getIdToken(true) after changes.
- Claims are for access control, not profile data.
My usual pattern combines both: a claim for a platform-wide role like superAdmin, and membership documents for org access and org roles. If your product truly has one org per user, putting orgId in a claim is fine and makes rules faster and cheaper.
> After setting or changing a claim in a Cloud Function, write a small flag document the client listens to, and have the client call getIdToken(true) when it changes. Otherwise users see permission errors until their token refreshes on its own.
## Why do my queries fail even when the rules look right?
Because Firestore rules are not filters: a query must include the same tenant condition the rules check, or Firestore rejects the entire query.
Firestore evaluates a query against its possible results, not the documents it would actually return. If your rule says a project is readable only when resource.data.tenantId matches the user's org, a query for all projects fails with "Missing or insufficient permissions," even if every project in the database happens to belong to that org. Add where tenantId equals the active org ID and the same query succeeds. With Option A the path does this for you, which is one more reason I prefer it.
This is also the most common symptom when someone adds tenancy to an existing app. I wrote a separate guide, "Firestore "Missing or insufficient permissions": what triggers it and how to fix it," that walks through the other causes. Use the Rules Playground in the Firebase console to test a read as a specific user in a specific org before you deploy.
## Do I need Identity Platform multi-tenancy?
Only if each customer needs its own separate user pool or identity provider; most SaaS MVPs should use one user pool and record org membership in Firestore.
Google Cloud Identity Platform supports multi-tenancy at the authentication layer, where each tenant has its own identity providers, settings and set of users, managed from the parent project with the Admin SDK tenant manager. That is useful when an enterprise customer wants their own SAML single sign-on and their own isolated accounts. It is not the same as data isolation: you still need Firestore rules that keep tenants apart. For an early product it adds setup and a sign-in flow that has to pick a tenant first, so I add it when a contract asks for it, not before.
## Worked example: a field team tool with three roles
Here is an illustration with a made-up product: CrewBoard, a scheduling tool sold to small landscaping companies. Each company is a tenant with owners, dispatchers and crew members.
- Layout: orgs/{orgId} holds the company name and plan. orgs/{orgId}/members/{uid} holds role and display name. orgs/{orgId}/jobs/{jobId} holds jobs, each with an assignedTo list of user IDs.
- Rules: any member can read jobs in their org. Dispatchers and owners can create and edit jobs. Crew members can update only the status field of jobs assigned to them, checked by comparing request.resource.data against resource.data so no other field changes.
- Claims: a single superAdmin claim for the founder's support account. Org access stays in membership documents, because one landscaper works for two companies.
- Server code: a Cloud Function accepts invites and creates membership documents. Clients can never write to members.
That design uses at most two document lookups per request, keeps queries scoped by path, and handles the person who works for two companies without a single custom claim per org.
## What mistakes leak data between tenants?
The leaks I look for first are open membership writes, missing tenant checks on create, and admin screens that query without rules.
- Letting clients write membership or role documents, so anyone can promote themselves.
- Checking tenantId on read but not validating request.resource.data.tenantId on create, so a user can write into another org.
- Storage buckets left out of the plan. Files need the same tenant path and matching Storage rules.
- An internal admin page built with the client SDK and a temporary "allow read: if true," which ships to production.
- Putting a growing list of org IDs into custom claims until token minting fails at the size limit.
Before launch, run through "Firebase best practices before launch: the security rules checklist" with two test users in two different orgs.
## When should I get help, and what does it cost?
Get help before your first paying customer if you are unsure whether rules enforce isolation, because a cross-tenant leak is very hard to recover from.
Tenant isolation is part of every multi-role build I do. My SaaS MVP package from $1,200 over about 21 days covers auth, a dashboard, the database and payments for a focused product, and the Full SaaS Platform from $3,000 over about 45 days is the tier for multiple roles, admin tools and integrations, which is where most multi-tenant B2B products land. If you already have an app and only need the rules reviewed and fixed, a Quick Fix starts at $60 for one issue and Fix Plus Features at $200 covers up to three.
## The bottom line
Put each customer under orgs/{orgId}, record membership in a subcollection that only server code can write, and write rules that check membership and role before every read and write. Use custom claims for small, stable facts and remember the 1000 byte limit and the token refresh delay. Make every query carry the tenant condition, because rules are not filters. Decide all of this on day one, test with two users in two orgs, and multi-tenancy on Firestore stays boring, which is exactly what you want.`,
  },
  {
    slug: 'web-app-vs-mobile-app-for-mvp',
    title: 'Web app vs mobile app for your MVP: which to build first',
    description: 'Web app vs mobile app for an MVP: cost and time for a web app, a React Native and Expo app or both, the features that truly need native, and app store setup time.',
    date: d,
    keywords: ['web app vs mobile app for MVP', 'should my MVP be a mobile app', 'React Native MVP', 'Expo app MVP cost', 'web app first'],
    service: 'saas-mvp-development',
    shortAnswer: 'Build a web app first unless your core workflow depends on something only a phone app does well, such as frequent camera capture, reliable push notifications or background location. A responsive web app ships faster, costs less, updates instantly and needs no app store review, while a React Native and Expo app makes sense when daily mobile habit is the product.',
    takeaways: [
      'Most B2B and dashboard-heavy MVPs should start as a responsive web app, because users already work in a browser.',
      'Choose a React Native and Expo app when the core workflow happens on the phone, several times a day, with the camera or notifications.',
      'Building both at once roughly doubles the surfaces to test, so ship one first and add the second when users ask for it.',
      'App stores add accounts, fees and review time: Apple charges 99 USD a year, Google charges a one-time 25 USD fee, and new personal Google Play accounts must run a closed test first.',
      'A shared backend such as Firebase lets a web app and a later mobile app use the same data and auth.',
    ],
    faqs: [
      { q: 'Is a web app cheaper than a mobile app for an MVP?', a: 'Usually yes, because a web app has one build, no store review and instant updates, while a mobile app adds device testing, store setup and review cycles.' },
      { q: 'Can a web app use the phone camera?', a: 'Yes, a web app can take photos and upload them through the browser, although a native app gives you more control over the camera experience.' },
      { q: 'Does React Native let me build iOS and Android at the same time?', a: 'Yes, React Native with Expo builds iOS and Android apps from one codebase, though each platform still needs its own testing and store submission.' },
      { q: 'Will Apple reject an app that is just my website in a wrapper?', a: 'It can, because App Store guideline 4.2 says an app should include features, content and UI that go beyond a repackaged website.' },
      { q: 'What does a web app MVP cost?', a: 'Thomas Osayi builds a first version of one workflow from $250 in about 7 days and a launchable SaaS MVP with auth, dashboard, database and payments from $1,200 in about 21 days.' },
    ],
    sources: [
      { title: 'Program enrollment (Apple Developer Program fee)', publisher: 'Apple', url: 'https://developer.apple.com/support/enrollment/' },
      { title: 'Get started with Play Console (registration fee)', publisher: 'Google', url: 'https://support.google.com/googleplay/android-developer/answer/6112435?hl=en' },
      { title: 'App testing requirements for new personal developer accounts', publisher: 'Google', url: 'https://support.google.com/googleplay/android-developer/answer/14151465?hl=en' },
      { title: 'App Review Guidelines', publisher: 'Apple', url: 'https://developer.apple.com/app-store/review/guidelines/' },
      { title: 'EAS Build introduction', publisher: 'Expo', url: 'https://docs.expo.dev/build/introduction/' },
    ],
    body: `"Should it be an app?" is often the first question a founder asks me, and the honest answer is usually "not yet." It is not that mobile apps are bad. I built NOM, a food discovery app, in React Native, Expo and Firebase, and for that product a phone app was the right call. It is that a mobile app is a more expensive way to test an idea, and most ideas do not need to be in someone's pocket to be tested.
This comparison covers the three real options for a first version: a web app, a React Native app built with Expo, or both. For each one I give the costs, timelines and trade-offs, then a recommendation for different kinds of founders.
## Should my MVP be a web app or a mobile app?
Start with a web app unless the core workflow happens on a phone, frequently, and depends on the camera, push notifications or location.
The question to ask is where and how often your user does the main job. A landlord reviewing applications, a brand checking which creator drove sales, a clinic managing appointments: these happen at a desk or on a laptop, a few times a day at most, and a responsive web app works on phones too. A diner snapping a dish and posting a review, a runner logging a route, a driver scanning packages: these happen on the phone, in the moment, many times a day. That second group is where a mobile app earns its extra cost.
There is also a distribution question. A web app is one link away from every user. A mobile app asks people to visit a store, download and sign in before they see anything, which is a real hurdle when nobody has heard of you yet.
## What are the three options?
The three options are a responsive web app, a cross-platform mobile app in React Native with Expo, or both sharing one backend.
### Web app (responsive, works on phones)
Best for: B2B tools, dashboards, marketplaces, booking and ordering, anything people use from a laptop at least some of the time.
Cost range: from $250 for a first version of one workflow, from $1,200 for a launchable SaaS MVP with auth, dashboard, database and payments, based on my packages.
Pros: one codebase, instant updates, no store review, shareable links, easy SEO for public pages.
Cons: weaker push notifications on iPhone unless users add it to the Home Screen, no presence in app stores, less control over camera and background tasks.
### React Native app with Expo
Best for: consumer products used several times a day on the phone, with camera, notifications or location at the center.
Cost range: in my estimate, plan for meaningfully more than the equivalent web app, often well above the $1,200 SaaS MVP tier for the same scope, because of device testing, native permissions, store assets and review cycles.
Pros: one codebase for iOS and Android, real native screens, good camera and notification support, an icon on the Home Screen.
Cons: store accounts and fees, review delays on every release, more devices to test, and harder for new users to try.
### Both, sharing one backend
Best for: products that already have traction on one platform and real demand for the other.
Cost range: close to the sum of both, though a shared backend such as Firebase and shared TypeScript types reduce the second build.
Pros: meets users wherever they are.
Cons: two surfaces to test and keep in sync. For an unproven idea, it splits a small budget in half.
## How much does each option cost, and how long does it take?
A focused web app MVP takes about one to three weeks; a comparable mobile app usually takes longer because of devices, permissions and store review.
For a web app my packages are the guide: an MVP Starter from $250 over about 7 days, a SaaS MVP from $1,200 over about 21 days, and a Full SaaS Platform from $3,000 over about 45 days for multiple roles, admin tools and integrations. Those timelines end with the app live, because deploying a web app is a matter of minutes.
A mobile app has the same core work plus a list that web apps skip: app icons and splash screens in every size, permission prompts with clear explanations, testing on small and large phones on both platforms, store listings with screenshots and a privacy section, and review. Expo's EAS Build service compiles the iOS and Android binaries from one project in the cloud, which removes a lot of local setup, but it does not remove review. If you want ballpark numbers for the web side, "How much does an MVP cost? SaaS MVP prices and what drives them" breaks them down further.
## Which features actually need a native app?
Very few features strictly require native, but a handful work much better there: frequent camera capture, dependable push notifications, background location and offline-first use.
- Camera: a web app can open the camera and upload a photo. A native app gives you a custom capture screen, faster uploads and access to the photo library in one flow, which matters if posting photos is the product.
- Push notifications: native apps get them on both platforms. On iPhone, web apps can receive push only after the user adds them to the Home Screen, which I cover in "PWA vs native app."
- Background location and sensors: native only, in practice.
- Offline-first: possible on the web with service workers, simpler to make reliable in a native app.
- App store discovery: matters for some consumer categories, rarely for B2B.
If none of these is in your core workflow, the native app is solving a problem you do not have yet.
## What do app stores add to the timeline?
App stores add paid developer accounts, store listings, review on every release and, for new personal Google Play accounts, a mandatory closed test.
At the time of writing, Apple's Developer Program costs 99 USD a year, and Google Play charges a one-time 25 USD registration fee. Google also requires personal developer accounts created after November 13, 2023 to run a closed test with at least 12 testers who stay opted in for 14 continuous days before applying for production access. Plan for that two-week wait, because it often surprises first-time founders.
Apple reviews every submission. Its App Review Guidelines say, in guideline 4.2, that an app should include features, content and UI that elevate it beyond a repackaged website, so wrapping your web app in a shell is not a reliable shortcut. Approval times vary, and a rejection means a fix and another wait. None of this exists for a web app: you deploy, and every user has the new version on their next visit.
> If you build mobile, register the Apple and Google developer accounts in week one. Organization accounts can need business verification, and it is frustrating to finish the app and then wait on paperwork.
## What did building NOM teach me about mobile MVPs?
NOM showed me that a mobile app is worth it when the core action is a phone action, and that the onboarding and media work take longer than the main screens.
NOM is a food discovery app I built at LMU Tech & Digital Ventures in React Native, Expo and Firebase. People share restaurant reviews with photos, ratings and comments in a social feed. Taking a photo of a plate and posting it in seconds is the whole product, so a phone app was the right choice from the start.
@video(/work/nom.mp4|/work/nom-poster.jpg|NOM, a food discovery app I built in React Native, Expo and Firebase: a screen recording of the review feed.)
Two things took more effort than the feed itself. The onboarding flow runs 11 screens, and each one needed to feel right on small and large phones. Camera uploads needed permission prompts, image handling and upload progress that behaved on slow connections. Firebase helped because auth, the database and file storage share one SDK and one set of security rules, which also means a web version could use the same backend later.
## Worked example: one idea, two first versions
Here is an illustration with a made-up startup: ShiftSwap, an app where hourly workers at a restaurant group trade shifts with manager approval.
- As a mobile app: workers get a push notification when a shift opens and accept it with one tap. Managers approve from their phones. Push is central, so React Native with Expo fits, but expect store setup, the Google closed test and review before the first restaurant can use it.
- As a web app: workers get an email or text with a link, tap it, sign in and accept. Managers approve in a dashboard. It ships in a few weeks, works on every phone, and tells the founder whether restaurants adopt shift trading at all.
I would build the web version first, run it at two restaurants, and measure how often a shift goes unclaimed because a link was missed. If that number is high, the case for the native app writes itself, and the same backend carries over.
## Which should you choose?
Choose by where your users do the core job and how much uncertainty is left in the idea.
- B2B or operations tool: web app. Your users are at desks, and you need to iterate weekly.
- Marketplace or booking product: web app first, since both sides arrive through links and search.
- Consumer habit app built on camera, location or notifications: React Native with Expo from the start.
- Proven web product whose users keep asking for an app: add a React Native app on the same backend.
- Unsure: web app. It is the cheaper way to find out, and nothing you learn is wasted when you add mobile later.
## The bottom line
Build a web app first unless the core workflow happens on the phone, often, and depends on the camera, push notifications or location. A web app is faster to ship, cheaper to change and one link away from every user. When mobile is the product, as it was for NOM, React Native with Expo gives you iOS and Android from one codebase, but budget for store fees, the Google closed test and review cycles. Keep the backend shared, and adding the second platform later stays a build, not a rewrite.`,
  },
  {
    slug: 'pwa-vs-native-app',
    title: 'PWA vs native app in 2026: what a web app can do on iPhone now',
    description: 'PWA vs native app vs React Native: what progressive web apps can do on iPhone at the time of writing, including web push since iOS 16.4, with costs and trade-offs.',
    date: d,
    keywords: ['PWA vs native app', 'progressive web app vs native app', 'PWA on iPhone', 'iOS web push PWA', 'PWA vs React Native'],
    service: 'saas-mvp-development',
    shortAnswer: 'A PWA is a web app that can be installed, work offline and, on iPhone since iOS 16.4, receive push notifications once the user adds it to the Home Screen. Choose a PWA when reach, speed and one codebase matter most, and choose a native or React Native app when you need app store presence, deep device access or dependable background features.',
    takeaways: [
      'Since iOS and iPadOS 16.4, web apps added to the Home Screen can receive push notifications and set app icon badges.',
      'On iPhone, users still have to add a PWA to the Home Screen themselves through the Share menu before push works.',
      'In iOS 26, every site added to the Home Screen opens as a web app by default, according to WebKit.',
      'React Native is the middle path: native screens and store presence from one codebase, at a higher cost than a PWA.',
      'A PWA built on a solid backend can later gain a native app without rebuilding the data layer.',
    ],
    faqs: [
      { q: 'Do PWAs work on iPhone?', a: 'Yes, PWAs run in Safari and can be added to the Home Screen, where they open in their own window and, since iOS 16.4, can receive push notifications.' },
      { q: 'Can a PWA send push notifications on iOS?', a: 'Yes, since iOS and iPadOS 16.4 a web app added to the Home Screen can request permission in response to a user action, such as tapping a subscribe button, and receive web push.' },
      { q: 'Can I put a PWA in the App Store?', a: 'Not directly; you would need to wrap it in a native app, and Apple guideline 4.2 says an app should offer more than a repackaged website.' },
      { q: 'Is a PWA cheaper than a native app?', a: 'Generally yes, because a PWA is one web codebase with no store accounts, fees or review cycles, while native apps add per-platform builds and testing.' },
      { q: 'What does it cost to build a PWA-style web app MVP?', a: 'Thomas Osayi builds a launchable SaaS MVP web app with auth, dashboard, database and payments from $1,200 in about 21 days.' },
    ],
    sources: [
      { title: 'Web Push for Web Apps on iOS and iPadOS', publisher: 'WebKit', url: 'https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/' },
      { title: 'News from WWDC25: web technology coming this fall in Safari 26 beta', publisher: 'WebKit', url: 'https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/' },
      { title: 'Meet Declarative Web Push', publisher: 'WebKit', url: 'https://webkit.org/blog/16535/meet-declarative-web-push/' },
      { title: 'Progressive web apps', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps' },
      { title: 'App Review Guidelines', publisher: 'Apple', url: 'https://developer.apple.com/app-store/review/guidelines/' },
    ],
    body: `For years the answer to "PWA or native?" came down to one sentence: iPhones do not do web push. That stopped being true in 2023, and the gap has kept narrowing since. Plenty of advice online still reflects the old situation, so founders pay for native apps to get features a web app now has, or ship a PWA expecting features iOS still does not give it.
Here is where things stand at the time of writing, what each option costs, and how I would choose between a PWA, a fully native app and React Native for a first version.
## What is the difference between a PWA and a native app?
A PWA is a website built so it can be installed and behave like an app, while a native app is compiled for iOS or Android and distributed through their stores.
MDN describes a progressive web app as an app built with web platform technologies that provides a user experience like a platform-specific app. Like a website, it runs from one codebase on any device. Like an app, it can be installed, launched from the Home Screen in its own window, work offline through service workers, and use APIs for notifications and app icon badges.
A native app is written for the platform, in Swift for iOS or Kotlin for Android, or in a cross-platform framework like React Native that produces native screens. It goes through App Store or Google Play review, lives in the store, and gets the deepest access to the device: background tasks, sensors, Bluetooth, widgets and the rest.
The practical difference for a founder is distribution and control. A PWA is a link anyone can open right now. A native app is a download behind a store listing, with more power once it is installed.
## What can a PWA do on iPhone right now?
At the time of writing, an iPhone PWA added to the Home Screen can open in its own window, work offline, receive push notifications and set an icon badge.
The big change came with iOS and iPadOS 16.4. WebKit's announcement set out the rules, and they still shape how you build:
- Push works only for web apps added to the Home Screen, not for sites open in a Safari tab.
- The permission request must come from a direct user interaction, such as tapping a subscribe button. Asking on page load does not work.
- The Badging API lets the app set or clear a number on its icon.
- From 16.4, third-party browsers on iOS can also offer Add to Home Screen from their Share menu.
Since then, WebKit introduced Declarative Web Push, which lets a site show notifications without a service worker and which it said could be tested on iOS 18.4. And with iOS 26 and Safari 26, WebKit says every site added to the Home Screen opens as a web app by default, where previously that depended on the site's manifest settings. Users can still switch the Open as Web App toggle off.
What has not changed is the install step itself. On iPhone, the user adds the app through the Share menu. There is no automatic install banner, so your app has to explain the steps, ideally with a short screen showing where to tap.
> Ask for notification permission only after the user has added the app and done something that makes notifications obviously useful, such as booking an appointment. A cold permission prompt is the fastest way to get a permanent no.
## What are the three options?
The three realistic options are a PWA, a fully native app per platform, or a React Native app that covers both.
### PWA
Best for: booking, ordering, dashboards, internal tools, marketplaces, and any product where people arrive from a link or search.
Cost range: the same as a web app MVP plus a little for the manifest, icons, service worker and install guidance; based on my packages, from $250 for one workflow or from $1,200 for a launchable SaaS MVP.
Pros: one codebase, no store fees or review, instant updates, shareable URLs, search engines can index public pages.
Cons: manual install on iPhone, push only after install, limited background work, no store presence.
### Fully native (Swift and Kotlin)
Best for: products that live on deep device features, heavy graphics or platform-specific experiences, usually with a team to maintain two codebases.
Cost range: the highest of the three, because iOS and Android are built and maintained separately.
Pros: best performance and full device access from day one.
Cons: two codebases, two sets of bugs, slowest to change. Rarely the right first version for a startup.
### React Native (with Expo)
Best for: consumer apps used daily on the phone, where the camera, notifications or location sit at the core.
Cost range: in my estimate, noticeably more than a PWA with the same features, because of device testing, store listings and review cycles, but well below two native builds.
Pros: native screens and store presence on both platforms from one TypeScript codebase.
Cons: store accounts and review, and some native modules still need platform-specific work.
## How do costs and timelines compare?
A PWA usually ships fastest and cheapest, React Native sits in the middle, and two native apps cost the most and take the longest.
For a PWA the timeline is the web app timeline: a focused first workflow in about a week, a SaaS MVP with accounts and payments in about three weeks, a multi-role platform in about six. Launch is a deploy.
React Native adds store setup to the end. At the time of writing, Apple's Developer Program costs 99 USD a year, and new personal Google Play accounts must run a closed test with at least 12 testers for 14 days before going to production. Apple's review also applies to every update, and its guideline 4.2 says an app should go beyond a repackaged website, so a thin wrapper around your PWA is a risky way to get into the App Store.
Running costs are similar for all three, since they can share the same backend. "What does it cost to run an AI-built app per month? A real budget" covers hosting and database costs in more detail.
## When does a PWA fall short?
A PWA falls short when you need store discovery, dependable background work, or device features the browser does not expose.
- Store presence. If your customers expect to search the App Store for you, or your category depends on store rankings, you need a store app.
- Background tasks. Tracking location in the background, syncing large files while the app is closed, or reacting to Bluetooth devices are native territory.
- Low-friction push on iPhone. Push works, but only after a manual install. If notifications drive your entire retention and most users are on iPhone, that install step will cost you users.
- Browser differences. Not every API MDN lists works in every browser, so check support for each one you depend on before you promise a feature.
- Camera-heavy capture. Web apps can take and upload photos, but a custom camera experience with filters and quick retakes is smoother in a native app.
## Can I start with a PWA and go native later?
Yes, and it is often the smartest order, as long as the backend is designed so a second client can use it.
The expensive part of any app is the data model, the access rules and the business logic. If those live in a backend such as Firebase or a Postgres database behind an API, a PWA and a later React Native app can share them completely. The mobile app becomes a new set of screens, not a new product. Teams that put business logic inside page components end up copying it, which is where the second build gets expensive.
Two habits make the later move easy: keep data access in one shared module with typed functions, and enforce permissions in database rules or server code, never only in the interface.
## Worked example: a studio deciding between PWA and app
Here is an illustration with a made-up business: a pilates studio with two locations that wants clients to book classes, buy class packs and get a reminder before class.
The owner's first instinct was a native app. Walking through the needs changed that. Booking and buying packs happen once or twice a week, often from an Instagram link. Reminders matter, but a confirmation email plus a reminder email covers most of the value, and clients who install the PWA from the booking confirmation screen can also get web push on iPhone. Nothing needs background location or Bluetooth.
So the plan became a PWA with online booking, class packs, email reminders and optional push for installed users, built on a backend a React Native app could share later. If, after six months, the studio sees most bookings coming from repeat clients who want an app, the native version is a contained project. The comparison in "Online booking for your website: embed a tool or build it custom?" is worth reading before a project like this.
## What do I recommend for each type of business?
Match the option to how often users open the product and how much they depend on device features.
- Local service businesses, restaurants and studios: a PWA or plain responsive site with booking or ordering.
- B2B SaaS and internal tools: a web app, optionally installable as a PWA for quick access.
- Marketplaces: web first, since both sides arrive through links and search.
- Daily-habit consumer apps built on camera, location or notifications: React Native with Expo.
- Products needing deep hardware access or top performance, with a team to maintain them: native.
For a broader look at the first-version decision, "Web app vs mobile app for your MVP: which to build first" covers the same ground from the MVP side.
## The bottom line
PWAs can do far more on iPhone than they could a few years ago: since iOS 16.4 they can receive push notifications and set badges once added to the Home Screen, and in iOS 26 Home Screen sites open as web apps by default. They still depend on users installing them manually, and they cannot match native apps for store presence or background work. Start with a PWA when reach and speed matter, choose React Native when the phone is the product, and keep your backend shared so the choice is never permanent.`,
  },
  {
    slug: 'how-to-build-a-marketplace-mvp',
    title: 'How to build a marketplace MVP: solve the chicken-and-egg problem first',
    description: 'How to build a marketplace MVP: pick one side and one niche, run matching by hand first, build only what both sides need, plan payments, and earn trust with real reviews.',
    date: d,
    keywords: ['marketplace MVP', 'how to build a marketplace MVP', 'two-sided marketplace', 'marketplace chicken and egg problem', 'marketplace payments and reviews'],
    service: 'saas-mvp-development',
    shortAnswer: 'Build a marketplace MVP by narrowing to one niche and one area, recruiting the harder side first, and running matching and payments by hand until you see real transactions. Then build the smallest product that lets both sides find each other, transact and leave honest reviews, with payments handled by a provider built for platforms.',
    takeaways: [
      'A marketplace has two products to launch at once, so narrow the niche and area until a small group of sellers and buyers can reach each other.',
      'Recruit the harder side first, which is usually supply, and bring demand to them yourself in the early weeks.',
      'Run matching, scheduling and even payment collection manually before you automate them, so you only build workflows you have proven.',
      'Marketplace payments carry real obligations, such as onboarding and verifying sellers and covering refunds, so use a platform payments product instead of building your own.',
      'Reviews only build trust if they are genuine; the FTC rule on consumer reviews bans fake reviews and reviews bought on condition of a positive sentiment.',
    ],
    faqs: [
      { q: 'What is the chicken-and-egg problem in a marketplace?', a: 'Buyers will not come without sellers and sellers will not come without buyers, so a new marketplace has to create value for one side before the other arrives.' },
      { q: 'Which side of a marketplace should I build for first?', a: 'Usually the supply side, because sellers or providers are harder to recruit and their listings are what bring buyers.' },
      { q: 'Do I need payments in a marketplace MVP?', a: 'Not always on day one; many marketplaces start by invoicing manually or taking payment off platform, then add platform payments once transactions repeat.' },
      { q: 'Can I seed a new marketplace with reviews?', a: 'You can ask real customers for honest reviews, but writing fake reviews or paying only for positive ones is banned under the FTC rule on consumer reviews and testimonials.' },
      { q: 'How much does a marketplace MVP cost to build?', a: 'Thomas Osayi builds launchable SaaS MVPs with auth, dashboard, database and payments from $1,200, and multi-role platforms with admin tools and integrations from $3,000.' },
    ],
    sources: [
      { title: 'Introduction to SaaS platforms and marketplaces with Connect', publisher: 'Stripe', url: 'https://docs.stripe.com/connect/saas-platforms-and-marketplaces' },
      { title: 'Federal Trade Commission announces final rule banning fake reviews and testimonials', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials' },
      { title: 'Trade Regulation Rule on the Use of Consumer Reviews and Testimonials', publisher: 'Federal Register', url: 'https://www.federalregister.gov/documents/2024/08/22/2024-18519/trade-regulation-rule-on-the-use-of-consumer-reviews-and-testimonials' },
    ],
    body: `A marketplace looks like one product and behaves like two. You need sellers before buyers will come and buyers before sellers will stay, and you need both to trust each other and you enough to hand over money. That is why so many marketplace builds stall: the founder spends months on listings, search, messaging, payouts and reviews, launches to an empty site, and discovers that the software was never the hard part.
This guide is about doing it in the opposite order. Prove that matching works with as little code as possible, then build only what real transactions showed you need. I will cover the chicken-and-egg problem, what to run manually, the smallest product worth building, payments, trust and what it costs.
## What makes a marketplace MVP different from other MVPs?
A marketplace MVP has to create value for two groups at once, so its first job is liquidity, meaning buyers can find a seller and sellers get buyers, before any feature matters.
In a regular SaaS, one customer gets value the day they sign up. In a marketplace, the first seller gets nothing until a buyer shows up, and the first buyer sees an empty page. The product is the match. Software helps matches happen faster and more safely, but it cannot create them from nothing.
That changes how you scope. Instead of asking "what features do users need?", ask "what is the smallest group of sellers and buyers that could transact with each other every week?" Then build for them. Everything I wrote in "How to scope an MVP: one workflow, three lists and the cuts that matter" still applies, but the core workflow runs across two people: one lists, one finds, they agree, money moves, both are satisfied.
SQWAD is not a classic marketplace, but it has a two-sided piece: a brand directory where creators discover brands and apply to their programs. That directory only became worth having once there were brands, starting with TheHoopGang, whose programs creators wanted to join.
![SQWAD's brand directory, where creators browse brands such as TheHoopGang and apply to their creator programs.](/shots/sqwad-brands.jpg)
## How do I solve the chicken-and-egg problem?
Narrow to one niche and one area, recruit the harder side first, and personally bring the other side to them until the market moves on its own.
- Go narrow. "Freelance services" is not a market you can fill. "Spanish tutors for high school students on LA's Westside" is. A small market fills fast, and a full small market beats an empty big one.
- Start with supply. Sellers, providers or hosts are usually harder to recruit, and their listings are what buyers come for. Sign up the first 10 to 30 by hand, by phone or in person.
- Give supply a reason to join before demand exists. A free listing page they can share, a booking calendar, a simple way to take requests. That gives them a tool to use even before you bring a single buyer.
- Bring demand yourself. In the early weeks, find buyers through communities, local groups and direct outreach, and route them to your sellers.
- Measure the match rate. Track what share of buyer requests end in a completed job. That number tells you whether to widen the niche or fix the product.
## What should I run manually before writing code?
Run matching, scheduling and, if needed, payment collection by hand until you have seen the same transaction happen many times.
Manual operations are not a lack of ambition. They are the cheapest research you can do. When you match a buyer to a seller yourself, you learn which details matter (price, distance, availability, credentials), which questions buyers ask before committing, where deals fall apart, and what sellers complain about. Every one of those lessons becomes a field, a filter or a rule in the product, instead of a guess.
A typical manual setup:
- A simple landing page with a request form for buyers and an application form for sellers.
- A spreadsheet or a database table with sellers, their details and availability.
- You reading each request and introducing the buyer to one or two sellers by email or text.
- Payment by invoice, or directly between the two parties at first.
- A follow-up message after each job asking both sides how it went.
When you are matching more requests than you can handle in an hour a day, and the matches follow a pattern, it is time to build.
> Keep a log of every match you make by hand, including the ones that failed and why. That log becomes your product requirements and your first set of test cases.
## What is the smallest marketplace product worth building?
The smallest real marketplace product covers seller onboarding, listings, a way to request or book, notifications to both sides and an admin view for you.
### Must
- Seller sign-up and profile with the fields your manual matching showed buyers care about.
- Listings or profiles buyers can browse, with one or two filters, not twelve.
- A request or booking flow, with confirmation emails to both sides.
- An admin view where you can approve sellers, see every request and step in when something goes wrong.
- Access rules so each seller sees only their own requests and buyers see only theirs. "Roles and permissions in a SaaS app: a practical guide for founders" covers how to set that up.
### Later
In-app messaging (email works at first), advanced search, seller analytics, mobile apps, referral programs and dynamic pricing. Each one is real, and none of them helps you prove the first match.
## How should payments work in a marketplace MVP?
Start with the simplest payment setup your market accepts, and when money needs to move through your platform to sellers, use a payments product built for platforms rather than collecting and paying out yourself.
Marketplace payments are harder than a store checkout. You take money from a buyer, keep a fee, and pay a seller, which means onboarding and verifying sellers, handling refunds and disputes, and dealing with payouts. Stripe's Connect documentation describes the typical marketplace model: the platform processes payments for its connected accounts, controls the flow of funds to them, collects a per-payment fee, and is usually the merchant of record, legally responsible for the transactions. In that model the platform is also responsible for covering connected accounts' negative balances, for example after a refund once the seller has been paid.
That is a meaningful set of obligations, which is why I treat it as a design decision rather than a feature. For an MVP the options in order of effort are: payment off platform with an invoice for your fee, the buyer paying the platform and you paying sellers manually on a schedule (fine for a handful of sellers, but check the rules that apply to holding funds), and full platform payments with automatic splits and payouts. I cover the Connect setup in detail in a separate guide. If your marketplace also sells subscriptions to sellers, "Setting up Stripe subscriptions for a SaaS MVP: what you actually need" covers that side. This is general information, not legal or financial advice, so check your obligations with a professional before you hold or move other people's money.
## How do I build trust and reviews from day one?
Verify sellers before they go live, show real information about them, collect honest reviews after every completed transaction, and never fake or filter them.
Trust is what makes a stranger pay another stranger, and in an empty marketplace you have none of the usual signals. Build them deliberately:
- Approve every seller by hand at first. Check identity, licenses where relevant, and examples of their work.
- Show real details: photos of real work, response times, how long they have been on the platform.
- Ask for a review only after a completed transaction, from both sides if it helps, and let either side review without seeing the other's review first so neither retaliates.
- Have a visible way to report a problem, and answer reports quickly.
Be careful with how you seed reviews. The FTC's final rule on consumer reviews and testimonials, announced in August 2024, bans fake reviews, buying reviews conditioned on positive or negative sentiment, undisclosed reviews from company insiders, and suppressing negative reviews while implying you show all of them. Asking every real customer for an honest review is fine. Writing reviews for your first sellers is not. This is general information, not legal advice. "How to get more Google reviews (without breaking Google's rules)" covers the same honesty principles for your own business profile.
## Worked example: a tutoring marketplace on the Westside
Here is an illustration with a made-up startup: TutorBlock, which connects high school students on LA's Westside with college students who tutor math and Spanish.
- Weeks 1 to 4, manual: the founder recruits 15 tutors from two campuses, builds a one-page site with a request form, and matches each request by text. Parents pay tutors directly, and TutorBlock invoices tutors a fee each month.
- What the log showed: parents cared most about subject, availability after 4pm and whether the tutor had taught a specific course before. Half of failed matches were scheduling.
- Build: tutor profiles with course history, a weekly availability grid, a booking request flow with email confirmations, double-blind reviews after each session, and an admin page to approve tutors and see every booking. Payments stay off platform for now.
- Next: once bookings repeat weekly and manual fee invoicing becomes painful, add platform payments with automatic tutor payouts.
## How much does a marketplace MVP cost?
A focused marketplace MVP is usually a multi-role build, so it tends to sit between my SaaS MVP and Full SaaS Platform tiers depending on payments and admin needs.
Based on my packages: the MVP Starter from $250 over about 7 days can cover one piece, such as a seller application and admin approval flow, while you keep matching by hand. The SaaS MVP from $1,200 over about 21 days covers auth, a dashboard, the database and payments for a focused product. A full two-sided marketplace with separate buyer and seller roles, an admin panel, platform payments with payouts, and reviews usually fits the Full SaaS Platform from $3,000 over about 45 days. Payment providers also charge their own processing and platform fees, so check their current pricing pages when you plan your margins.
## What mistakes kill marketplace MVPs?
The common failures are launching too broad, building before matching by hand, and spending on features that do not create matches.
- Launching in every city or category at once, so every search returns two results.
- Building search, messaging and payouts before a single manual match has happened.
- Treating supply and demand as one audience with one message.
- Skipping seller verification to grow faster, then losing buyers after one bad experience.
- Faking activity with made-up listings or reviews, which breaks trust and, for reviews, the FTC rule.
- Building payment splits by hand instead of using a platform payments product.
## The bottom line
A marketplace MVP succeeds or fails on liquidity, not features. Narrow to one niche and one area, recruit the harder side first, and run matching and payments by hand until you understand what makes a good match. Then build only what both sides need to find each other, transact and trust each other: profiles, requests, notifications, admin tools and honest reviews. Bring in platform payments when transactions repeat, and treat the obligations that come with holding other people's money as seriously as the code.`,
  },
];
