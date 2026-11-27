// Generated articles, batch 24 (Nov 27 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-27';

export const postsGen24: Post[] = [
  {
    slug: 'feature-flags-for-saas-mvp',
    title: 'Feature flags for a SaaS MVP: env flags, database flags, plan entitlements and kill switches',
    description: 'Feature flags for SaaS, sized for an MVP: when you need them, env and database flags vs a service, per-plan entitlements, kill switches and beta rollouts.',
    date: d,
    keywords: ['feature flags for SaaS', 'feature flags for MVP', 'SaaS plan entitlements', 'kill switch feature flag', 'PostHog vs LaunchDarkly feature flags'],
    service: 'saas-mvp-development',
    shortAnswer: "Most SaaS MVPs need two kinds of flags on day one: plan entitlements that decide what each customer has paid for, and a kill switch for anything risky. Both fit in a small database table checked on the server. Pay for a flag service like PostHog, LaunchDarkly or Vercel Flags once you need percentage rollouts, targeting rules and experiments managed by people who do not touch code.",
    takeaways: [
      "A feature flag is a runtime switch, so you can change what users see without a new deploy.",
      "Plan entitlements are flags too, and they should be derived from the subscription your billing webhooks record, never from the client.",
      "An environment variable flag is fine for one global switch, but it needs a redeploy to change and cannot target one customer.",
      "A two-table setup (global flags plus per-organization overrides) covers kill switches, beta lists and entitlements for most MVPs.",
      "Every flag needs an owner and a removal date, or the codebase fills up with branches nobody dares to delete.",
    ],
    faqs: [
      { q: 'Do I need a feature flag service for my MVP?', a: 'Usually not at launch, because a small flags table in your own database handles kill switches, beta lists and plan entitlements, and you can move to a service when non-developers need to manage rollouts.' },
      { q: 'Is PostHog free for feature flags?', a: 'At the time of writing PostHog includes 1,000,000 feature flag requests per month free, with paid requests starting at $0.0001 each beyond that.' },
      { q: 'Should feature flags be checked on the client or the server?', a: 'Check on the server for anything that protects data, money or limits, and use client checks only to hide or show interface elements that the server also enforces.' },
      { q: 'What is the difference between a feature flag and an entitlement?', a: 'A feature flag controls whether a feature is turned on at all, while an entitlement records whether a specific customer is allowed to use it based on their plan or a deal you made.' },
      { q: 'Can Thomas Osayi add plan-based feature gating to my app?', a: 'Yes, plan entitlements and kill switches are part of the billing and dashboard work in the SaaS MVP package from $1,200 over about 21 days.' },
    ],
    sources: [
      { title: 'Feature flags pricing', publisher: 'PostHog', url: 'https://posthog.com/feature-flags/pricing' },
      { title: 'LaunchDarkly pricing', publisher: 'LaunchDarkly', url: 'https://launchdarkly.com/pricing' },
      { title: 'Limits and Pricing for Vercel Flags', publisher: 'Vercel', url: 'https://vercel.com/docs/flags/vercel-flags/limits-and-pricing' },
    ],
    body: `Feature flags sound like something big companies use to run thousands of experiments. In a SaaS MVP they do a more modest job, and it is an important one: they let you turn something off at 2 a.m. without a deploy, give one customer early access to a feature, and make sure the Starter plan does not quietly get everything the Pro plan pays for.
I build SaaS MVPs, and the flag setup I reach for first is small and lives in the app's own database. This post covers what kinds of flags a SaaS actually needs, when an environment variable is enough, how to build database flags and per-plan entitlements, how to roll out to beta users and build a kill switch, and when a service like PostHog, LaunchDarkly or Vercel Flags is worth paying for. Vendor prices were checked on November 27, 2026.
## What is a feature flag, and does an MVP need one?
A feature flag is a value your code reads at runtime to decide whether a feature is on, and most MVPs need a few of them from the first paying customer.
The point of a flag is that changing it does not require changing code. Instead of deleting a half-finished export feature before launch, you ship it behind a flag set to off. Instead of shipping a new pricing page to everyone at once, you show it to your own team first. Instead of reverting a commit when a third-party API starts failing, you flip a switch and the feature stops calling it.
An MVP does not need an experimentation platform. It does need three things that are flags under the hood: a way to keep unfinished work hidden in production, a way to stop a broken feature fast, and a way to give different plans different features. If you only have one plan and no risky integrations, you can skip this until you do. The moment you add a second plan or your first external API, you have a flag problem whether you call it that or not.
## What kinds of flags does a SaaS app actually use?
A SaaS app uses four kinds of flags, and keeping them separate in your head prevents most of the mess.
- Release flags hide work in progress. They are temporary and should be deleted once the feature is fully on.
- Kill switches turn off a feature or integration that is misbehaving. They are permanent, default to on, and should be checked on the server.
- Entitlements decide what a customer can use based on their plan, an add-on or a custom deal. They are permanent and tied to billing.
- Beta or targeting flags turn a feature on for a list of organizations or a percentage of them. They usually become release flags that get removed.
The mistake I see in AI-built apps is one boolean column per idea scattered across the users table, with no record of which kind each one is. Naming helps: prefix flags by type, such as release_new_editor, kill_ai_summaries and plan_csv_export, so anyone reading the code knows what they are touching.
## When is an environment variable flag enough?
An environment variable is enough for a global switch that changes rarely and does not need to target anyone.
Something like ENABLE_AI_SUMMARIES=false in your hosting dashboard is the simplest flag there is. It is read on the server, it costs nothing and it is easy to understand. It is the right tool for turning off a feature in production while it stays on in preview deployments, or for disabling a payment method until the paperwork is done.
The limits are real, though. On most hosts, including Vercel, a changed environment variable only takes effect after a new deployment, so it is a poor kill switch when you need something off in thirty seconds. It is the same value for every customer, so it cannot express "on for these three beta organizations". And if the variable is prefixed for the browser, such as NEXT_PUBLIC_ENABLE_BETA, it is baked into the client bundle at build time and anyone can read it, which is fine for hiding a button and useless for protecting anything. The moment you want a per-customer or instant switch, move to the database.
## How do I build database flags without a vendor?
Two small tables, one for global flags and one for per-organization overrides, cover most MVPs.
Here is the shape I use, described in plain terms rather than as a schema file:
- feature_flags: key (text, unique), enabled (boolean), description, owner, created_at and remove_by (a date, for release flags).
- flag_overrides: flag_key, organization_id, enabled, reason and created_by, with a unique constraint on the flag and organization pair.
Evaluation is one function on the server, something like isEnabled(flagKey, orgId). It checks for an override for that organization first, then falls back to the global value, then falls back to a default written in code if the row is missing. That last fallback matters: if someone deletes a row, the app should behave predictably, not crash.
Read the flags once per request and pass the result down, rather than querying the table in every component. A short in-memory cache of 30 to 60 seconds is fine for most flags. For a kill switch, keep the cache short or skip it, because the whole point is that a change takes effect quickly. Give your admin dashboard a page that lists flags and lets staff flip them, and record each change in your audit log. "SaaS admin dashboard features: what to build first and what to lock down" and "Audit logs for a SaaS app" cover those two pieces in more depth.
> Put a remove_by date on every release flag when you create it. A flag with no end date is how a codebase ends up with forty branches nobody understands.
## How should per-plan entitlements work?
Entitlements should come from a map of plan to features in your code, applied to the subscription your billing webhooks recorded, and checked on the server.
The plan itself, Starter or Pro, is a fact you store when Stripe tells you about it, as covered in "Setting up Stripe subscriptions for a SaaS MVP: what you actually need". The features each plan unlocks are a product decision, and I keep them in one file, a plain object that says Starter gets three seats and no CSV export, Pro gets ten seats and CSV export, and so on. A function like can(org, 'csv_export') reads the organization's plan, looks up the map, then checks flag_overrides for any custom deal.
Plan comparison tables on a pricing page are entitlements written for humans, and they should match the code exactly. On SQWAD, my own SaaS, the plan comparison table lists what each tier includes feature by feature.
![The SQWAD plan comparison table, listing which features each plan includes.](/shots/sqwad-home-s5.jpg)
Two rules keep this safe. First, enforce every entitlement in the server route or server action, not only by hiding the button, because anyone can call your API directly. Second, decide what happens on downgrade before it happens. If a Pro customer with eight seats drops to Starter, do you block new invites, lock the extra seats or keep them until renewal? Write the answer down and code it, because the default behavior of most apps is to do nothing, which means the downgrade costs you money.
## How do I roll a feature out to beta users?
Start with an explicit list of organizations, then move to a stable percentage based on a hash of the organization ID.
For a young SaaS, a beta list is just rows in flag_overrides with a reason such as "asked for it on a call". It is precise, easy to undo and easy to explain to the customer. Tell beta customers they are on a beta so a rough edge does not feel like a bug in a finished product.
When you want a percentage rollout, do not use a random number per request, because a user will see the feature, reload and lose it. Hash the organization ID together with the flag key into a number from 0 to 99 and turn the feature on when that number is below your rollout percentage. The same organization always lands in the same bucket, and moving from 10 to 25 percent keeps everyone who already had it. Roll out by organization rather than by user in a B2B app, so two people on the same team do not see different products.
As an illustration, picture a made-up scheduling tool for dog groomers shipping a new calendar view. Week one: on for the founder's own test organization. Week two: on for five friendly customers through overrides. Week three: 25 percent by hash. Week four: 100 percent, then the flag and the old calendar code are deleted in the same pull request.
## What does a kill switch look like?
A kill switch is a server-side flag that defaults to on and wraps a risky call so that turning it off fails gracefully.
Good candidates are anything that depends on a third party or costs money per call: AI features, outbound email and SMS, a sync with an external calendar, a webhook to a partner. The check sits right before the call. If kill_ai_summaries is off, the route returns a friendly "summaries are paused" message instead of calling the model, and background jobs skip the work instead of retrying it forever.
Three details make a kill switch actually useful. It must take effect quickly, so read it fresh or with a very short cache. It must fail closed for spend and open for core features, meaning a broken flag lookup should stop the expensive AI call but should not lock customers out of their data. And it should be something a non-developer on your team knows how to flip, which is why it belongs on the admin page and not in an environment variable.
## When should I pay for PostHog, LaunchDarkly or Vercel Flags?
Pay for a service when people who do not write code need to manage targeting, or when you want experiments and analytics tied to flags.
### PostHog
Best for teams already using PostHog for product analytics who want flags and experiments in the same place. At the time of writing, PostHog includes 1,000,000 feature flag requests a month free, with no credit card required for the free plan, and charges from $0.0001 per request beyond that, falling with volume. The upside is that flag exposure and analytics share one tool. The downside is that request counts depend on how your app evaluates flags, so read PostHog's own advice on cutting flag costs before you scale.
### LaunchDarkly
Best for larger teams with many services and strict release processes. At the time of writing, the free Developer plan includes 5 service connections and 1,000 client-side monthly active users, with 1 project and 3 environments, and the Foundation plan charges $12 per extra service connection and $10 per 1,000 client-side MAU billed monthly, a little less billed yearly. It is the most complete option and more than an MVP usually needs.
### Vercel Flags
Best for Next.js apps already on Vercel that want flags evaluated close to the edge. At the time of writing, Hobby includes up to 10,000 flag requests per billing cycle and 100 flags, and Pro is billed at $0.03 per 1,000 flag requests. It fits naturally into a Vercel project, and it ties your flags to your host.
If you are choosing an analytics tool at the same time, "Product analytics for an MVP: PostHog vs Mixpanel vs GA4 vs Amplitude, and what to track" is the companion read.
## What mistakes make feature flags a mess?
Most flag problems come from flags that never get removed, flags checked only in the browser, and entitlements mixed up with release switches.
- Leaving release flags in place after launch. Every flag doubles the paths through that code. Delete the flag and the dead branch together.
- Checking entitlements only on the client. A hidden button is not a permission. The server route must check too.
- Evaluating flags in many places with different defaults. One server function, one default per flag.
- Using flags for configuration. Prices, limits and copy belong in config or the database, not in boolean flags.
- No audit trail, so nobody can say who flipped what and when.
## The bottom line
Feature flags for SaaS do not have to be a platform decision. For an MVP, use an environment variable for rare global switches, a small feature_flags and flag_overrides pair in your database for kill switches and beta lists, and a plan-to-features map checked on the server for entitlements. Hash organization IDs for stable percentage rollouts, give every release flag a removal date and log every change. Move to PostHog, LaunchDarkly or Vercel Flags when non-developers need to run rollouts or you want experiments, and check their pricing pages when you do, because request-based pricing depends on how your app evaluates flags.`,
  },
  {
    slug: 'sso-saml-for-b2b-saas',
    title: 'SSO and SAML for B2B SaaS: when buyers ask, SAML vs OIDC, SCIM and what to build or buy',
    description: 'SSO SAML for B2B SaaS explained: when enterprise buyers ask, SAML vs OIDC, how the login works, SCIM, and WorkOS or Clerk pricing at the time of writing.',
    date: d,
    keywords: ['SSO SAML for B2B SaaS', 'SAML vs OIDC', 'enterprise SSO for SaaS', 'SCIM provisioning', 'WorkOS vs Clerk SSO'],
    service: 'saas-mvp-development',
    shortAnswer: "Add SAML SSO when a real buyer's IT or security team asks for it, not before. Buy it from an auth provider like WorkOS, Clerk or Auth0 rather than building a SAML implementation yourself, because the per-connection cost is small next to an enterprise contract and the edge cases are many. Plan your organizations, domains and roles first, since SSO plugs into them.",
    takeaways: [
      "SSO usually becomes a requirement when you sell to companies with an IT team that manages logins centrally through an identity provider.",
      "SAML is the older XML-based standard most enterprise identity providers support, and OIDC is the newer JSON and OAuth-based standard.",
      "WorkOS charges per SSO connection, $125 a month for the first 15 at the time of writing, and Clerk includes one connection on its Pro plan.",
      "SCIM is a separate standard for creating and removing users automatically, and buyers who ask for SSO often ask for it next.",
      "SSO belongs to the organization, so your data model needs organizations, verified domains and roles before SSO makes sense.",
    ],
    faqs: [
      { q: 'What is the difference between SAML and OIDC?', a: 'SAML exchanges signed XML assertions through the browser and is the long-standing enterprise standard, while OIDC is an identity layer on OAuth 2.0 that uses JSON tokens and is simpler to implement.' },
      { q: 'How much does enterprise SSO cost for a SaaS?', a: 'At the time of writing WorkOS charges $125 per SSO connection for the first 15 connections, and Clerk includes one SSO connection on Pro with extra connections from $75 a month each.' },
      { q: 'Do I need SCIM if I already have SSO?', a: 'Not always, but SSO only handles sign-in, so without SCIM a person removed from the customer\'s identity provider may keep an active account and session in your app until someone removes them by hand.' },
      { q: 'Should I build SAML support myself?', a: 'For almost every early SaaS the answer is no, because SAML has many security-sensitive details and a per-connection fee is cheaper than the time to build and maintain it.' },
      { q: 'Can Thomas Osayi add SSO to an existing SaaS?', a: 'Yes, connecting an auth provider\'s SSO to organizations, domains and roles fits the Full SaaS Platform package from $3,000, which covers multi-role apps, admin tools and integrations over about 45 days.' },
    ],
    sources: [
      { title: 'WorkOS pricing', publisher: 'WorkOS', url: 'https://workos.com/pricing' },
      { title: 'Clerk pricing', publisher: 'Clerk', url: 'https://clerk.com/pricing' },
      { title: 'OpenID Connect Core 1.0', publisher: 'OpenID Foundation', url: 'https://openid.net/specs/openid-connect-core-1_0.html' },
      { title: 'RFC 7644: System for Cross-domain Identity Management: Protocol', publisher: 'RFC Editor', url: 'https://rfc-editor.org/rfc/rfc7644' },
    ],
    body: `At some point in a B2B SaaS, a promising sales call ends with a short message from the buyer's IT team: "Do you support SAML SSO?" Followed, often, by "and SCIM?" If the answer is no, the deal can stall, not because the buyer dislikes your product but because their policy says every app their staff use must log in through their identity provider.
I build SaaS apps with multiple roles and organizations, and this is the post I wish founders read before that call. It covers when SSO becomes a real requirement, what SAML and OIDC actually are, how a SAML login works inside your app, whether to build or buy, the main providers and their pricing at the time of writing (checked November 27, 2026), what SCIM adds, and the problems that show up in the first rollouts. None of this is security or legal advice for your specific contract. It is how the pieces fit.
## When do B2B SaaS buyers start asking for SSO?
Buyers start asking for SSO when the person signing the contract works at a company whose IT team manages logins centrally, which usually means larger customers and regulated industries.
Small teams sign up with Google or email and never think about it. A company with an identity provider such as Okta, Microsoft Entra ID or Google Workspace wants every app to go through it, so that one place controls who has access, enforces multi-factor authentication and removes access the day someone leaves. Your app is one more line on their list.
The practical trigger is simple: build SSO when a real deal needs it, not as a speculative feature. Before that, it is configuration you cannot test with a real customer, and you will guess wrong about details like which identity provider they use. When the request comes, ask a few questions right away: which identity provider, whether they need SAML or OIDC, whether they need SCIM provisioning, and whether SSO must be enforced for everyone on their domain or just offered. Those answers shape the work more than anything in this post.
## What is the difference between SAML and OIDC?
SAML and OIDC both let a customer's identity provider vouch for a user, but SAML does it with signed XML documents and OIDC does it with JSON tokens on top of OAuth 2.0.
### SAML
SAML 2.0 is the long-standing enterprise standard. The identity provider sends the user's browser to your app with a signed XML assertion that says who the user is. Your app checks the signature against the customer's certificate and signs the user in. Nearly every enterprise identity provider supports it, which is why buyers ask for it by name.
### OIDC
OpenID Connect is an identity layer on top of OAuth 2.0. Your app redirects to the provider, gets back a code, exchanges it for an ID token (a signed JSON Web Token) and reads the user's identity from it. It is the same family of technology as "Sign in with Google", easier to work with and the default for newer systems.
For a SaaS, you rarely get to choose. You support what the customer's identity provider and IT policy prefer, which is still often SAML. That is one of the strongest arguments for buying: a good provider supports both behind one integration in your code.
## How does a SAML login actually work in a SaaS app?
A SAML login sends the user to their company's identity provider, which posts a signed assertion back to your app's assertion consumer service URL, where you verify it and create a session.
The setup for each customer, called a connection, exchanges a few values. Your side gives them an entity ID (a unique name for your app) and an ACS URL, the endpoint that receives assertions. Their side gives you their identity provider's entity ID, sign-in URL and signing certificate, usually as one metadata file.
The login itself, in the common service-provider-initiated flow:
- The user types their work email on your sign-in page.
- Your app sees the domain, say acme.com, finds the organization with that verified domain and its SSO connection, and redirects to Acme's identity provider.
- The user signs in there, with whatever multi-factor policy Acme enforces.
- The identity provider posts a signed assertion back to your ACS URL.
- Your app verifies the signature, the audience, the timestamps and that the assertion has not been used before, then finds or creates the user and starts a session.
Some customers also start logins from their identity provider's app dashboard, called IdP-initiated. It works, but it skips the request your app started, so it needs extra care. Every one of those verification steps is somewhere a homegrown implementation can go wrong, which leads to the next question.
## Should I build SAML myself or buy it?
Buy it, unless identity is your product.
SAML looks like a weekend project and is not. You need correct XML signature validation, protection against replayed and altered assertions, clock skew handling, certificate rotation, metadata parsing, support for each identity provider's quirks and a way for customers to set up connections without emailing you certificates. Each of those is a place where a mistake means someone can sign in as someone else.
The cost comparison is also lopsided. A provider charges per connection per month, and the customer asking for SSO is usually on a contract large enough to cover that many times over. Building yourself saves that fee and costs weeks of development, ongoing maintenance and a permanent security responsibility.
Buying does not mean no work. You still connect SSO to your organizations, verified domains, roles and sessions, which is the part only you can build. In my experience that integration is where the real effort goes, and it is the same whichever provider you choose.
> Ask the buyer for a test account in their identity provider, or set up a free developer tenant with a major provider, and test a full login before you tell them SSO is ready.
## What are the options for adding enterprise SSO?
The realistic options are a dedicated enterprise auth provider, your existing auth provider's SSO add-on, or an open-source library you run yourself.
### WorkOS
Best for B2B SaaS that wants SSO, SCIM and an admin portal from one vendor, whatever handles regular sign-in. Cost range at the time of writing: AuthKit user management is free up to 1 million monthly active users, SSO is $125 per connection for 1 to 15 connections, dropping to $100, $80 and $65 at higher volumes, and Directory Sync (SCIM) uses the same per-connection tiers. The Admin Portal, where a customer's IT team configures their own connection, is included. Pros: built for exactly this, strong admin portal. Cons: per-connection cost is high if you sell SSO to many small customers.
### Clerk
Best for apps already on Clerk. At the time of writing, Pro is $20 a month billed annually or $25 billed monthly, includes one enterprise SSO connection per app with SAML or OIDC, and charges $75 a month each for connections 2 to 15. Directory sync includes one connection on Pro and Business, with billing for extra connections starting January 1, 2027. Pros: one vendor for all auth. Cons: you are tied to Clerk's model for organizations. "Clerk vs Supabase Auth vs Firebase Auth for a SaaS MVP" compares Clerk's wider trade-offs.
### Auth0 and other identity platforms
Best for teams that need very broad identity features or already use Okta's tools. Check current enterprise connection pricing on their site, since it depends on plan. Pros: mature and complete. Cons: can be more platform than an early SaaS needs.
### An open-source SAML library
Best for teams with security experience and a reason to avoid vendors. Cost: no license fee, real engineering time. Pros: full control. Cons: all the risk from the previous section is yours.
## What is SCIM and do I need it too?
SCIM is a standard API that lets the customer's identity provider create, update and deactivate users in your app automatically, and buyers who require SSO often require it soon after.
SSO only handles the moment of sign-in. If Acme removes an employee from Okta, that person cannot sign in through SSO anymore, but their account in your app still exists, any existing session may still be valid and they may still hold a seat Acme is paying for. SCIM, defined in RFC 7643 and RFC 7644, closes that gap. The identity provider calls endpoints like /Users and /Groups on your app to create users, change their attributes and deactivate them.
For your app, SCIM means three things. Deactivation must end sessions and revoke API tokens, not just set a flag. Groups often map to your roles, so a customer can put people in an "Admins" group and have them become admins in your app. And seat counts change without anyone in your app clicking anything, so your billing logic needs to handle that. WorkOS and Clerk both offer directory sync so you receive clean events instead of implementing the SCIM server yourself.
## How does SSO fit with organizations and roles in my data model?
SSO belongs to an organization, so you need organizations, verified domains and roles in place before SSO can work properly.
The pieces I add to a typical multi-tenant schema:
- An organizations table with the SSO connection ID from your provider and an sso_enforced setting.
- A verified_domains table, so you only route acme.com logins to Acme's connection after Acme proves it owns acme.com, usually through a DNS record or the provider's verification.
- A default role for users created through SSO, and optionally a mapping from identity provider groups to your roles.
- A rule for existing accounts: if someone already signed up with jane@acme.com using a password before Acme turned on SSO, decide whether to link the account or require SSO from now on.
If your roles are still a single is_admin column, fix that first. "Roles and permissions in a SaaS app: a practical guide for founders" and "Team accounts and invites in a SaaS app" cover the model that SSO plugs into. Record SSO configuration changes and sign-ins in your audit log too, since the same buyers usually ask about it.
## What breaks in the first SSO rollouts?
The first rollouts usually break on account linking, locked-out admins, certificate changes and users whose email changes.
- Account linking. A user exists with a password and now arrives through SSO. Without a clear rule you get duplicate accounts or, worse, a takeover path if you link on an unverified email.
- No break-glass access. If SSO is enforced and the customer's identity provider has an outage or a misconfiguration, nobody can sign in. Keep a documented way for your support team to help, and log its use.
- Certificate rotation. Identity provider signing certificates expire. A provider that monitors and handles rotation saves you a surprise outage.
- Email changes. People change names and emails. Key users on the identity provider's stable user ID, not on the email address.
- Clock skew. Assertions have short validity windows, and a server clock that drifts can reject valid logins.
- Testing only one provider. Okta and Entra ID send attributes differently. Test with the one your customer uses.
As an illustration, picture a made-up inspection software company closing its first enterprise deal. The buyer uses Entra ID and wants SAML enforced for their domain. The founder adds verified domains and a role mapping, connects WorkOS, tests with an Entra developer tenant, and keeps one support-only recovery path, logged. The SSO part takes days, and most of that time goes on the data model, not the protocol.
## The bottom line
SSO SAML for B2B SaaS is a sales requirement first and a technical feature second. Build it when a real buyer asks, and ask them which identity provider and whether they need SCIM. Buy the protocol from a provider such as WorkOS, Clerk or Auth0, at per-connection prices that at the time of writing start around $75 to $125 a month, and spend your own effort on organizations, verified domains, roles, account linking and session revocation. Add SCIM when customers need automatic deprovisioning, and test with the customer's actual identity provider before you call it done.`,
  },
  {
    slug: 'stripe-usage-based-billing',
    title: 'Stripe usage-based billing: meters, meter events, metered prices and the edge cases',
    description: 'How to implement Stripe usage-based billing now: Billing Meters, meter events, metered prices, reporting usage from your app, idempotency and invoice previews.',
    date: d,
    keywords: ['Stripe usage-based billing', 'Stripe Billing Meters', 'Stripe meter events', 'Stripe metered billing', 'report usage to Stripe'],
    service: 'saas-mvp-development',
    shortAnswer: "Stripe usage-based billing now runs on meters: you create a meter, attach it to a metered price, subscribe the customer, and your app sends meter events that Stripe aggregates and bills at the end of each period. The old usage records API was removed in API version 2025-03-31.basil. Stripe now recommends Metronome for new integrations, while fully supporting Billing Meters for existing ones.",
    takeaways: [
      "A Stripe meter defines an event name and how to aggregate it (sum, count or last), and a metered price must reference a meter.",
      "Record usage in your own database first, then send it to Stripe from a background job with a unique identifier per event.",
      "Stripe accepts meter events with timestamps up to 35 days in the past, but usage reported after an invoice finalizes will not change that invoice.",
      "Meter event adjustments can cancel events only within 24 hours of sending them, so catch bad data early.",
      "Stripe's docs now point new usage-based integrations to Metronome, and Billing Meters remains supported for basic pay-as-you-go and overage models.",
    ],
    faqs: [
      { q: 'Does Stripe still support usage records?', a: 'No, API version 2025-03-31.basil removed legacy usage records, and metered prices must now reference a Billing Meter, though older integrations can still call the legacy API with a pinned pre-Basil version.' },
      { q: 'How often should I send meter events to Stripe?', a: 'Either as usage happens or in batches, and for most MVPs a background job that sends aggregated usage every few minutes is simpler and stays well inside Stripe\'s live mode limit of 1,000 meter event calls per second.' },
      { q: 'How do I stop usage from being billed twice?', a: 'Give every meter event a unique identifier derived from your own usage record ID, so a retry of the same event is recognized as a duplicate instead of counted again.' },
      { q: 'Should I use Metronome or Billing Meters?', a: 'Stripe\'s docs recommend Metronome for new integrations and for prepaid credits, commits or real-time usage, while Billing Meters covers pay-as-you-go and flat fee plus overage and stays fully supported.' },
      { q: 'Can Thomas Osayi set up usage-based billing in my SaaS?', a: 'Yes, Stripe billing with webhooks is part of the SaaS MVP package from $1,200 over about 21 days, and usage reporting jobs can be scoped into it.' },
    ],
    sources: [
      { title: 'Record usage for billing with the API', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage-api' },
      { title: 'Create and configure a meter', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/usage-based/meters/configure' },
      { title: 'How usage-based billing works', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/usage-based/how-it-works' },
      { title: 'Compare basic usage-based billing and Metronome', publisher: 'Stripe', url: 'https://docs.stripe.com/billing/subscriptions/usage-based/compare-metronome' },
      { title: 'Removes legacy usage-based billing', publisher: 'Stripe', url: 'https://docs.stripe.com/changelog/basil/2025-03-31/deprecate-legacy-usage-based-billing' },
    ],
    body: `If you learned Stripe metered billing a couple of years ago, a lot of what you learned is gone. The usage records API, where you posted a quantity to a subscription item, was removed in the 2025-03-31.basil API version. Metered prices now have to point at a Billing Meter, and your app reports usage as meter events. On top of that, Stripe's own docs now describe Metronome as its primary usage-based billing platform for new integrations.
This post is about implementing usage-based billing, not choosing it. If you are still deciding between flat, per-seat, tiered and usage pricing, read "SaaS pricing models compared: flat, per-seat, tiered, usage-based and revenue-based" first. Here I cover how meters work now, when Metronome makes more sense, how to set up the meter and price, how to report usage from your app without double-billing, what happens with late or wrong data, invoice previews and the edge cases to test. Everything was checked against docs.stripe.com on November 27, 2026.
## How does Stripe usage-based billing work now?
Your app sends meter events, a meter aggregates them over the billing period, a metered price turns that total into money, and the subscription produces an invoice at the end of the period.
The pieces, in Stripe's own terms:
- A meter defines an event name, such as api_calls, and an aggregation formula. It is the thing that counts.
- A meter event is one report of usage: the event name, the customer, a numeric value, an optional timestamp and an optional unique identifier.
- A metered price is a recurring price with a usage type of metered that references the meter. It sets the rate, for example a per-unit or tiered price.
- A subscription ties the customer to the price. Usage is billed in arrears, on the invoice at the end of each period.
- Meter event summaries let you read a customer's aggregated usage for a time range.
The change from the old model matters for your code. Previously you reported a quantity against a subscription item. Now you report an event against a customer and an event name, and Stripe works out which subscription and price it belongs to. Since 2025-03-31.basil you cannot create a metered price without a meter, and the aggregate_usage and billing_thresholds parameters were removed from those endpoints. If you are maintaining an older integration, Stripe documents a migration guide and a way to keep calling the legacy API with a pinned older version, but new work should not start there.
## Should I use Billing Meters or Metronome?
Use Billing Meters for straightforward pay-as-you-go or flat fee plus overage pricing, and look at Metronome if you need prepaid credits that burn down in real time, enterprise commits or live usage visibility.
Stripe's comparison page is direct about it: Metronome is the recommended starting point for all new integrations, and existing basic usage-based billing integrations do not need to migrate and remain fully supported. The differences that matter for a typical SaaS:
- Billing Meters reconciles usage at invoice time. Customers and your team cannot see live balances from Stripe mid-cycle.
- Credits on Billing Meters are reconciled at invoice time, so customers can exceed a balance during the cycle. Metronome burns credits down as usage happens.
- Metronome supports commits, minimums, ramp schedules and dimensional pricing. Billing Meters does not.
- At the time of writing, Stripe's table lists Connect, Adaptive Pricing, Workflows and the Stripe Dashboard as supported with Billing Meters but not with Metronome, and Checkout as limited with Metronome.
My honest read for an MVP: if your model is "a base fee plus a per-unit charge above an allowance", Billing Meters is well documented, works with Checkout and the Dashboard, and is enough. If you are selling prepaid AI credits that must stop at zero, or negotiating enterprise contracts with commits, talk to Stripe about Metronome before you build. The rest of this post covers Billing Meters.
## How do I set up a meter and a metered price?
Create a meter with an event name, an aggregation formula and the payload keys for the customer and value, then create a recurring price with usage type metered that references it.
In the Dashboard, the Meters page has a Create meter button. Through the API, you post to /v1/billing/meters with a display name, an event_name, a default_aggregation formula, a customer_mapping and value_settings. The aggregation choices are:
- Sum: add up the values, for things like tokens, minutes or gigabytes.
- Count: count the events, for things like API calls or documents processed.
- Last: bill the most recent value in the period, for things like active seats or stored records.
By default the payload uses stripe_customer_id for the customer and value for the number, and you can override both keys. There is also an ingestion setting: raw treats every event separately, while pre-aggregated keeps only the latest event per hour or day window. Choose carefully, because after you configure a meter you cannot change anything except its display name. An event name can only belong to one meter.
For a flat fee plus overage, the subscription gets two prices: a regular recurring price for the base fee and a metered price with tiers, where the first tier up to the included allowance costs zero. Test the invoice math in a sandbox before any real customer sees it.
## How should my app report usage to Stripe?
Write every billable action to your own database first, then send it to Stripe from a background job, either per event or aggregated.
I never call Stripe inline in the request that does the work. If Stripe is slow or returns an error, the customer's action should still succeed, and you should still have a record of it. A usage_events table with an ID, organization, Stripe customer ID, event name, value, occurred_at and a sent_at column is enough. A job then picks up unsent rows, sends them and marks them sent. "Cron jobs and background jobs in Next.js on Vercel" covers how to run that job.
Sending per event is simplest to reason about. Sending aggregated totals, for example one event per customer every five minutes, reduces calls. Stripe's limits at the time of writing: in live mode, the meter event endpoint allows 1,000 calls per second per account on its own limit, and one concurrent call per customer per meter. In a sandbox those calls count toward your normal rate limit. For much higher volumes, the v2 meter event streams accept up to 10,000 events per second in live mode, using short-lived session tokens that expire after 15 minutes. Most MVPs never get near that.
Handle 429 responses with retries and exponential backoff, and keep the row unsent until Stripe accepts it.
> Keep your own usage table as the source of truth. When a customer disputes an invoice, you want to show them every event, not just Stripe's total.
## How do I avoid double-billing with idempotency?
Set the meter event identifier to a value derived from your own usage record, so a retried event is treated as a duplicate rather than new usage.
Every meter event has an identifier. If you do not send one, Stripe generates one, which means a retry after a timeout looks like a brand new event and gets billed again. The fix is to send your own: the usage_events row ID, or for aggregated reports, something like the organization ID plus the window start time. Stripe's docs recommend idempotency keys for the same reason.
This matters more than it sounds. Background jobs retry. Serverless functions time out after the request succeeded on Stripe's side. A deploy can restart a worker mid-batch. With deterministic identifiers, all of those become harmless.
## What happens with late or wrong usage?
Stripe accepts events up to 35 days in the past and 5 minutes in the future, but only usage received before an invoice finalizes appears on that invoice, and cancellations are limited to 24 hours.
The details from the docs are worth knowing precisely:
- Timestamps must be within the past 35 calendar days and no more than 5 minutes in the future, the latter to allow for clock drift.
- The 35-day window decides whether Stripe accepts the event. It does not guarantee the usage lands on an invoice. Stripe may accept an event after finalization and include it in summaries without updating the finalized invoice or adding it to the next one.
- Meter events are processed asynchronously. Errors arrive as events such as v1.billing.meter.error_report_triggered and v1.billing.meter.no_meter_found, with codes like meter_event_customer_not_found and timestamp_too_far_in_past. Subscribe to them, using the thin payload style Stripe requires for these.
- To fix bad data, a meter event adjustment can cancel an event by its identifier, but only for events sent within the last 24 hours. You can also send negative values, and if total usage for a cycle goes negative the invoice shows zero.
The practical rule: get usage to Stripe quickly, alert on error events, and run your sending job well before period end.
## How do I show customers their usage and upcoming invoice?
Show usage from your own database for live numbers, and use the Create Preview Invoice API when you need Stripe's calculated amount.
Because meter events are processed asynchronously, meter event summaries and upcoming invoice totals may lag behind recent events. For a usage page that updates as the customer works, read your own usage_events table. For "your next invoice will be about this much", call the Create Preview Invoice API, which replaced the old upcoming invoice methods in the same Basil release. Show it as an estimate, and say when the period ends.
Pricing pages that charge on volume need the same clarity. SQWAD, my own SaaS, publishes Starter at $99 a month, Pro at $399 and Scale at $999 a month plus 1%, so a customer on Scale can see that part of the price follows volume.
![SQWAD pricing tiers: Starter $99/month, Pro $399/month and Scale $999/month plus 1%, first month free.](/shots/sqwad-home-s4.jpg)
Usage alerts help as well. Billing Meters supports usage alerts and thresholds, so you can notify a customer before a surprise bill rather than after.
## What edge cases should I test before launch?
Test plan changes, cancellations, trials, missing customers and period boundaries, because those are where usage invoices go wrong.
- Upgrades and downgrades mid-cycle. Decide how base fees prorate and confirm usage stays on the right invoice.
- Cancellation. If a subscription ends at period end, usage up to then still needs to arrive before the final invoice finalizes.
- Trials. Decide whether usage during a trial is free, capped or billed, and code it explicitly.
- Customers without a Stripe customer ID yet. Hold their usage until the customer exists instead of sending events that fail with meter_event_customer_not_found.
- Time zones. Store occurred_at in UTC. Pre-aggregated windows use UTC hour and day boundaries.
- Volume spikes. Make sure aggregation keeps you under one concurrent call per customer per meter.
Use test clocks in a sandbox to move a subscription through a full period without waiting a month. As an illustration, picture a made-up document-processing API charging $49 a month including 1,000 documents, then a per-document rate above that. Its meter uses count, the subscription has a base price and a tiered metered price with a free first tier of 1,000, and a job sends events every few minutes with identifiers equal to the document IDs. Before launch, its test clock runs a month with an upgrade on day 12 and a cancellation on day 28, and the founder checks both invoices by hand. Webhooks still matter here too, so "Stripe payment went through but your app did not update? Fix the webhook" is worth a read.
## The bottom line
Stripe usage-based billing today means meters, meter events and metered prices that reference a meter. The legacy usage records API is gone in 2025-03-31.basil, and Stripe recommends Metronome for new integrations that need real-time credits, commits or complex pricing, while Billing Meters stays fully supported for pay-as-you-go and overage. Record usage in your own table first, send it from a background job with deterministic identifiers, report well before invoices finalize, watch the meter error events, and use previews as estimates. Test the edge cases on a test clock before your first real customer receives a usage invoice.`,
  },
  {
    slug: 'prisma-vs-drizzle',
    title: 'Prisma vs Drizzle for a SaaS MVP: versions, migrations, serverless and which to pick',
    description: 'Prisma vs Drizzle for a SaaS MVP: what Prisma 7 and the Prisma 8 release candidate changed, where Drizzle v1 stands, migrations, serverless and who should pick which.',
    date: d,
    keywords: ['Prisma vs Drizzle', 'Prisma 7', 'Drizzle ORM v1', 'best ORM for Next.js', 'Prisma or Drizzle for SaaS'],
    service: 'saas-mvp-development',
    shortAnswer: "Pick Prisma if you want a schema file, generated types, guided migrations and the most beginner-friendly path, which is why I use it with Postgres at The Hoop Gang. Pick Drizzle if you think in SQL, want a thin TypeScript layer with schema defined in code and care about a small runtime. Both are free and both work well with Postgres in Next.js, so the choice is about how your team likes to write queries.",
    takeaways: [
      "Prisma ORM 7, announced November 19, 2025, replaced the Rust query engine with a TypeScript client and generates the client into your source code.",
      "Prisma 8 was in release candidates when I checked, and Prisma says Prisma 7 gets bug fixes and security updates for 12 months.",
      "Drizzle's v1 line is in release candidates, with v1.0.0-rc.6 listed on November 20, 2026, while the stable npm line is still 0.x.",
      "Prisma suits teams who want a schema file and guided migrations, and Drizzle suits teams who want SQL-shaped queries and schema in TypeScript.",
      "Raw SQL or a query builder is still a valid choice for a small, SQL-fluent team, with more manual work on types and migrations.",
    ],
    faqs: [
      { q: 'Is Drizzle faster than Prisma?', a: 'Drizzle is a thin layer that generates SQL directly, and Prisma 7 removed its Rust engine and claims up to 3x faster queries, so for a typical MVP both are fast enough and the database and query design matter far more.' },
      { q: 'Does Prisma still use a Rust engine?', a: 'Not by default since Prisma ORM 7, which moved to a TypeScript client, and Prisma 8 goes further with an extensible architecture where database support is an extension.' },
      { q: 'Is Drizzle v1 stable?', a: 'At the time of writing Drizzle v1 is in release candidates, with rc.6 published November 20, 2026, and the latest stable release on the project\'s GitHub is in the 0.45 line.' },
      { q: 'Can I switch from Prisma to Drizzle later?', a: 'Yes, because both sit on the same Postgres database, you can introspect the existing schema into the other tool and move queries over gradually, though it takes real time on a large codebase.' },
      { q: 'Which ORM does Thomas Osayi use for a SaaS MVP?', a: 'Thomas Osayi uses Prisma with Postgres at The Hoop Gang and picks per project, and the database setup is part of the SaaS MVP package from $1,200 over about 21 days.' },
    ],
    sources: [
      { title: 'Announcing Prisma ORM 7.0.0', publisher: 'Prisma', url: 'https://www.prisma.io/blog/announcing-prisma-orm-7-0-0' },
      { title: 'Is Prisma 8 ready for long-lived production apps?', publisher: 'Prisma', url: 'https://www.prisma.io/blog/is-prisma-8-ready-for-long-lived-production-apps' },
      { title: 'Prisma changelog', publisher: 'Prisma', url: 'https://www.prisma.io/changelog' },
      { title: 'Latest releases', publisher: 'Drizzle ORM', url: 'https://orm.drizzle.team/docs/latest-releases' },
      { title: 'Releases: drizzle-team/drizzle-orm', publisher: 'GitHub', url: 'https://github.com/drizzle-team/drizzle-orm/releases' },
    ],
    body: `Prisma vs Drizzle is one of the most argued-about choices in the TypeScript world, and a lot of what gets said online is out of date. Prisma rebuilt its client without Rust in version 7 and is now shipping release candidates for version 8. Drizzle has spent most of 2026 in v1 betas and release candidates. If you read a comparison from 2024, several of its main points no longer apply.
I write TypeScript against Postgres every week. At The Hoop Gang I work in Next.js, TypeScript, Prisma and Postgres, and for client SaaS MVPs I choose per project. This post covers what actually differs between the two, what changed recently (checked November 27, 2026), each option including raw SQL with its best fit, cost, pros and cons, how migrations and serverless compare, and an honest pick for different kinds of teams.
## What is the real difference between Prisma and Drizzle?
Prisma has you describe your data in a schema file and gives you a generated client with its own query API, while Drizzle has you describe tables in TypeScript and write queries that look like SQL.
With Prisma, you write models in schema.prisma, such as a User with an email and a list of Projects, then run a generate step. You query with calls like prisma.project.findMany with a where object and an include for related records. You rarely think about joins. Prisma figures them out.
With Drizzle, you define tables in a TypeScript file using functions like pgTable, and query with a builder that reads like SQL: select from projects, inner join users, where the owner ID equals this value. It also has a relational query API for nested reads, but the core idea is that if you know SQL, you can predict exactly what Drizzle sends to the database.
Everything else flows from that. Prisma optimizes for not having to think in SQL. Drizzle optimizes for not hiding it. Neither is better in the abstract. They suit different people.
## What changed in Prisma 7 and Prisma 8?
Prisma 7 replaced the Rust query engine with a TypeScript client, and Prisma 8, in release candidates when I checked, rebuilds the ORM as an extensible framework with SQL-first migrations.
Prisma announced ORM 7 on November 19, 2025. The headline changes from Prisma's announcement:
- The client was rebuilt in TypeScript instead of Rust, enabled with the prisma-client generator.
- Prisma claims about 90 percent smaller bundle output and up to 3x faster query execution, with lower CPU and memory use. Those are Prisma's figures, not mine.
- The generated client and types now go into your project's source code instead of node_modules.
- A new TypeScript config file holds the schema location, seed script and database URL, and the minimum Node and TypeScript versions went up.
Prisma's changelog lists 7.7.0 on April 7, 2026 as the latest numbered 7.x release. Then came Prisma 8. Prisma's September 9, 2026 post on whether Prisma 8 is ready for production says it was a release candidate, with 8.0.0 expected a few weeks later, and the changelog still referred to release candidates in October. Prisma 8 treats Postgres and MongoDB support as extensions, stores each migration as an ops.json file whose Postgres operations are literal SQL meant to be reviewed, and can run alongside Prisma 7 against the same database so you can move queries over one at a time. Prisma says 7 gets bug fixes and security updates for 12 months.
## Where is Drizzle right now?
Drizzle's v1 is in release candidates, while the latest stable release on GitHub is still in the 0.45 line.
At the time of writing, Drizzle's latest releases page lists v1.0.0-rc.6 on November 20, 2026, with breaking changes to codecs and migrations and PostgreSQL driver improvements, after rc.5 in October and rc.4 in June. The project's GitHub releases mark 0.45.2 as the latest stable release. Drizzle publishes an "upgrade to v1" guide and a guide for moving from relational queries v1 to v2.
What this means in practice: if you start on 0.x today, plan for a v1 upgrade with some breaking changes. If you start on a v1 release candidate, expect changes between candidates, as rc.6 itself shows. Neither is a reason to avoid Drizzle. It is a reason to pin exact versions and read release notes before upgrading.
> Whichever ORM you choose, pin exact versions in package.json and upgrade on purpose. Both projects are in the middle of major version changes.
## How do Prisma, Drizzle and raw SQL compare for a SaaS MVP?
All three are free, so the real cost is development time and how easy it is for the next developer to work in the codebase.
### Prisma
Best for founders and small teams who want the most guided path, readable models and generated types, and for AI-built apps that already use it. Cost range: the ORM is free and open source under Apache 2.0, and Prisma sells hosted Postgres and other services separately, which you do not need. Pros: schema.prisma is easy to read, migrations are generated from schema changes, types for nested results come for free, the docs are thorough and Prisma Studio lets you browse data. Cons: complex queries sometimes need raw SQL anyway, the generate step is one more thing to forget, and the 7 to 8 transition adds change in the near term.
### Drizzle
Best for developers comfortable with SQL who want schema in TypeScript and a thin runtime, especially on serverless and edge platforms. Cost range: free and open source. Pros: queries map closely to SQL, there is no generate step for types, it is small, and drizzle-kit generates SQL migrations you can read. Cons: you need to understand SQL to use it well, the v1 transition means breaking changes, and nested reads take more thought than in Prisma.
### Raw SQL or a query builder
Best for a small, SQL-fluent team, or a project with heavy reporting queries. You write SQL directly through a Postgres driver, or use a typed query builder such as Kysely. Cost range: free, with more of your own time. Pros: full control, no abstraction to fight, easy to tune. Cons: you hand-write types or generate them separately, you manage migrations with a separate tool, and it is easier to leave a query open to injection if anyone ever builds SQL by concatenating strings. Always use parameterized queries.
## How do migrations differ between Prisma and Drizzle?
Prisma generates migrations from changes to schema.prisma, and Drizzle generates SQL migrations from changes to your TypeScript schema, and in both cases you should read the SQL before it runs.
With Prisma 7, you edit the schema, run prisma migrate dev, and Prisma writes a SQL migration file and applies it to your development database. In production you run prisma migrate deploy. Prisma 8 changes the format to ops.json files and asks before dropping a model or field, letting you answer with a rename that keeps the existing rows, which addresses one of the classic ways to lose data.
With Drizzle, you edit the TypeScript schema and run drizzle-kit generate to produce SQL files, then apply them with drizzle-kit migrate or your own process. There is also drizzle-kit push, which syncs the schema straight to a database without migration files. It is handy for prototypes and risky for production.
The rule is the same in both: migrations are code. Review them in pull requests, test them on a copy of production data and never let a tool rename a column by dropping and recreating it. "How to change your Supabase database safely with migrations" walks through that discipline in more detail.
## Which one works better on serverless and edge?
Both work on serverless platforms like Vercel now, and the bigger issue on serverless is database connections, not the ORM.
The old argument against Prisma on serverless was the Rust engine binary: larger deploys and slower cold starts. Prisma 7's TypeScript client removed most of that argument. Drizzle has always been light because it is a thin layer over a JavaScript driver, which makes it a natural fit for edge runtimes.
What actually breaks serverless apps is connection count. Each function instance can open its own connection, and Postgres has a limit. Whichever ORM you use, connect through a pooler such as the one your database provider offers, reuse one client per instance instead of creating one per request, and keep the pool small. "Too many connections in Postgres on serverless" covers the errors and fixes. If you are still choosing the database itself, "Neon vs Supabase for a SaaS MVP" is the earlier decision.
## Why do I use Prisma at The Hoop Gang?
I use Prisma with Postgres at The Hoop Gang because readable models and generated types make a growing codebase easier to change safely.
The Hoop Gang's work includes a creator portal that manages 50+ creators, alongside the brand's other systems, in Next.js and TypeScript. In that kind of codebase, the schema file works as documentation. Anyone can open it and see how creators, orders and payouts relate. When a field is renamed, TypeScript errors point at every query that needs to change. That safety is worth more to me than the last bit of query control.
Where Prisma's API gets in the way, usually a reporting query with several aggregates, I write that one query in SQL through Prisma's raw query support with parameters, and keep everything else in the client. That mix is normal, and it is fine.
## Which should you pick?
Pick based on who will maintain the code and how they like to think about data, not on benchmarks.
- A non-technical founder handing the app to developers later: Prisma. The schema is the easiest thing for a new developer to read.
- An AI-built app that already uses one of them: keep it. Switching ORMs is rarely the fix for an app's real problems.
- A developer who knows SQL well and wants a light runtime: Drizzle.
- An app on edge runtimes or with very tight bundle limits: Drizzle has the edge, though Prisma 7 narrowed the gap.
- A reporting-heavy internal tool built by a SQL-fluent team: raw SQL or a query builder, with a separate migration tool.
- Starting today and nervous about churn: Prisma 7 or Drizzle 0.x with pinned versions, then upgrade deliberately once Prisma 8 and Drizzle v1 settle.
"The best tech stack for a SaaS MVP in 2026, and when to choose what" puts this choice in context with the rest of the stack.
## How hard is it to switch later?
Switching is very possible, because both sit on the same Postgres database, but it takes real time in a large app.
Your data does not move. You introspect the existing database into the other tool's schema format, which both support, then rewrite queries file by file. The tables stay the same, so you can run both ORMs side by side during the change, and Prisma explicitly supports running 7 and 8 together for the same reason. The cost is the rewriting and testing, which grows with the number of queries. For an MVP with a few dozen queries it is days. For a mature app it is a project.
## The bottom line
Prisma vs Drizzle comes down to style. Prisma gives you a readable schema file, generated types and guided migrations, and since version 7 it no longer ships a Rust engine. Drizzle gives you SQL-shaped queries, schema in TypeScript and a very thin runtime. Both are free, both work well with Postgres in Next.js, and both are mid-transition, with Prisma 8 and Drizzle v1 in release candidates at the time of writing. I use Prisma at The Hoop Gang for its readability. Pick the one your team will read most easily, pin versions, review every migration and put a pooler in front of Postgres either way.`,
  },
  {
    slug: 'retool-vs-custom-admin-dashboard',
    title: 'Retool vs a custom admin dashboard: cost, control and which one fits your team',
    description: 'Retool vs custom admin dashboard: Retool pricing at the time of writing, Appsmith, a custom Next.js admin and an AI-queryable data layer, with picks per team.',
    date: d,
    keywords: ['Retool vs custom admin dashboard', 'Retool pricing', 'Retool alternatives', 'custom Next.js admin panel', 'internal tool builder vs custom code'],
    service: 'saas-mvp-development',
    shortAnswer: "Use Retool when you need internal screens over an existing database quickly and your team of builders and users is small enough for per-seat pricing. Build a custom Next.js admin when the admin is part of your product, needs your own roles and audit logs, or will be used by many people. If the team mostly asks questions of data rather than editing it, a read-only data layer they can query from an AI assistant can replace many dashboards.",
    takeaways: [
      "At the time of writing Retool's Team plan lists $10 per builder and $5 per internal user per month, and Business lists $50 and $15, under annual billing.",
      "Retool's free plan allows up to 5 users, and self-hosting is only on Enterprise.",
      "Appsmith is an open-source alternative you can host on your own servers, with a free community edition.",
      "A custom admin costs more up front but has no per-seat fee and uses the same roles, permissions and audit logs as your app.",
      "For read-heavy teams, THG Brain shows a third path: sync the data into one place and let the team query it from their own Claude.",
    ],
    faqs: [
      { q: 'How much does Retool cost?', a: 'At the time of writing Retool is free for up to 5 users, Team lists $10 per builder and $5 per internal user per month, Business lists $50 and $15, and Enterprise is custom, under annual billing.' },
      { q: 'Is Retool cheaper than building a custom admin?', a: 'For a few users and simple screens it usually is at first, but per-seat fees add up as the team grows, while a custom admin is mostly a one-time build cost plus maintenance.' },
      { q: 'Can I self-host Retool?', a: 'At the time of writing Retool lists self-hosted and air-gapped deployment only on its Enterprise plan, while lower plans run on Retool Cloud.' },
      { q: 'Is it safe to connect Retool to my production database?', a: 'It can be, if you connect with a dedicated database user that has only the permissions the tools need, ideally read-only or against a read replica, and limit who can build apps.' },
      { q: 'Can Thomas Osayi build a custom admin dashboard?', a: 'Yes, admin tools are part of the Full SaaS Platform package from $3,000 over about 45 days, and a single focused internal workflow can start with the MVP Starter from $250.' },
    ],
    sources: [
      { title: 'Retool pricing', publisher: 'Retool', url: 'https://retool.com/pricing' },
      { title: '3 Best Open Source Low-Code Platforms for Your Organization', publisher: 'Appsmith', url: 'https://www.appsmith.com/blog/open-source-low-code-platforms' },
    ],
    body: `Every SaaS and every growing brand eventually needs screens nobody outside the company sees: look up a customer, refund an order, approve an application, fix a record that a bug broke. The question is whether to assemble those screens in an internal tool builder like Retool or to build them as part of your own app.
I have built both kinds of internal software. At The Hoop Gang I built THG Brain, an internal data platform that brings sales, email, ads, the support inbox and the creator portal into one place, queryable from the team's own Claude. This post compares Retool, Appsmith, a custom Next.js admin and that third path, with cost at the time of writing (Retool pricing checked November 27, 2026), pros, cons and a pick per team. It is not a list of admin features. "SaaS admin dashboard features: what to build first and what to lock down" covers that, and "Building an internal dashboard for an ecommerce brand" covers what to put on the screens.
## When should a team use Retool instead of building a custom admin?
Use Retool when you need working internal screens over data you already have, this week, for a small group of staff, and the screens are not part of what you sell.
Retool connects to your database and APIs and lets a builder drag tables, forms and buttons onto a page and wire them to queries. A competent builder can produce a useful customer lookup and refund tool in an afternoon. For an operations team that lives in spreadsheets and SQL clients, that is a real improvement.
It fits best when:
- The data already lives in a database or API Retool can connect to.
- The users are internal staff, not your customers.
- The workflows change often and you want to adjust them without a deploy.
- The number of builders and users is small enough that per-seat pricing stays modest.
It fits poorly when the admin needs your app's exact permission rules, when customers' own admins will use it, when you need it to work offline or on unusual devices, or when the number of users is large and growing. In those cases you are paying per seat for something that has become part of your product.
## What does Retool cost at the time of writing?
At the time of writing, Retool is free for up to 5 users, and its paid plans charge separately for builders and internal users.
From Retool's pricing page, under the annual billing label:
- Free: $0, up to 5 users, 250 AI credits a month, Retool Cloud only.
- Team: $10 per builder and $5 per internal user per month, 1,000 AI credits.
- Business: $50 per builder and $15 per internal user per month, 3,000 AI credits, with metered external users.
- Enterprise: custom pricing, with Retool Cloud, self-hosted or air-gapped deployment.
Retool defines a builder as someone who created or edited an app or workflow in the billing cycle, and an internal user as an employee who uses the apps. Self-hosting is listed only on Enterprise. The page shows prices with annual billing, so check the monthly rate if you plan to pay month to month.
As an illustration, picture a made-up subscription box company with 2 people building tools and 10 support and operations staff using them. On Team, that is 2 times $10 plus 10 times $5, about $70 a month. On Business it is 2 times $50 plus 10 times $15, about $250 a month. Those are modest numbers. They grow linearly with headcount, and they never stop.
## How do Retool, Appsmith and a custom admin compare?
Retool is the fastest to start, Appsmith trades some polish for open source and self-hosting, and a custom Next.js admin costs more up front but fits your app exactly.
### Retool
Best for operations and support teams who need internal tools over existing data quickly. Cost range: free up to 5 users, then per builder and per internal user as above. Pros: very fast to build, many data connectors, workflows and AI features, no deploys for screen changes. Cons: per-seat costs grow with headcount, app definitions live in Retool so leaving means rebuilding, self-hosting needs Enterprise, and permission logic lives in a second place alongside your app.
### Appsmith
Best for teams that like the internal tool builder model but want to host it themselves or prefer open source. Appsmith describes itself as an open-source low-code platform that you can host on your own servers, with a free community edition. Cost range: free community edition, with paid plans for business features, so check their current pricing. Pros: open source, self-hostable, similar drag-and-drop approach. Cons: you run and update it yourself if you self-host, and it is the same lock-in to a builder's app format.
### A custom Next.js admin
Best for SaaS products where the admin is part of the product, customer admins will use it, or many staff need access. Cost range, using my packages: a single focused internal workflow can start with the MVP Starter from $250 over about 7 days, and a full multi-role platform with admin tools and integrations is the Full SaaS Platform from $3,000 over about 45 days. Pros: no per-seat fees, the same auth, roles and audit logs as your app, full control of design and behavior, the code is yours. Cons: higher up-front cost, every change is a deploy, and someone has to maintain it.
### A read-only data layer queried from an AI assistant
Best for teams whose main need is answers rather than editing. Covered in the THG Brain section below. Cost range: a build project scoped like a custom integration. Pros: fewer screens to build, questions in plain language. Cons: needs clean, synced data, and it is not for actions like refunds.
## What does a custom Next.js admin actually involve?
A custom admin is a set of protected routes in your app that reuse your auth and data layer, with server-side role checks, audit logging and careful handling of destructive actions.
In a Next.js App Router project I usually put it under an /admin route group with its own layout. The pieces:
- Auth reuse. Staff sign in through the same auth as customers, with a staff role. No second login system.
- Server-side checks. Every server action and route handler checks the role, not just the layout. A hidden link is not protection.
- Read views first. Search, customer detail and order or subscription detail cover most support work.
- Narrow actions. Instead of a generic "edit any field" form, build specific actions like "extend trial by 7 days" or "resend invite", each with confirmation.
- Audit logs. Every staff action records who did what to which record. "Audit logs for a SaaS app" covers the schema.
- Impersonation, if you need it, as a logged, time-limited, read-only view.
This is more work than dragging a table onto a Retool page. In exchange, the admin follows the same rules as the rest of the app, which matters a lot when the rules are "this support agent can see this organization but not that one". "Roles and permissions in a SaaS app: a practical guide for founders" covers how to model those rules.
## What did I build for The Hoop Gang instead of dashboards?
For The Hoop Gang I built THG Brain, which syncs the brand's data into one platform and lets the team query it from their own Claude instead of building a dashboard for every question.
The problem was spread-out data. Sales live in the store, email results in the email platform, ad results across ad accounts, customer questions in a support inbox and creator activity in the creator portal. Each tool has its own dashboard. The questions the team asks cross those lines.
THG Brain pulls those sources into one place, keeps them current and makes them searchable together. The interface is the team's own Claude, connected through the Model Context Protocol, so someone asks a question in plain language and Claude calls THG Brain's tools and answers from the data. There is also a web admin portal, marked admins only with read-only data.
Two decisions apply to any internal tool choice. It is read-only by design, because a system built to answer questions has no reason to change orders or campaigns. And access is limited to admins. A Retool app with write access to production deserves the same thinking. "How to connect Claude to your business data with MCP" explains the pattern.
> Before choosing a tool, list the internal tasks your team does each week and mark each one as "look something up" or "change something". If most are lookups, you may need fewer screens than you think.
## How do security and data access differ between the options?
With Retool or Appsmith you hand a second system credentials to your data, while a custom admin keeps access inside your app's existing security model.
An internal tool builder connects with a database user or API key you provide. Anyone who can build apps there can potentially write queries against whatever that credential allows. Reduce the risk by creating a dedicated database user with the minimum permissions, using a read replica for read-only tools, limiting who has builder access, and turning on the builder's own audit logging where your plan includes it.
A custom admin uses your app's server code and its normal database connection, with access checks in the same place as everything else. There is no second credential to leak and no second permission system to keep in sync. Either way, staff accounts should use multi-factor authentication, and every action that changes data should be logged.
## What hidden costs show up later?
The hidden costs of an internal tool builder are seat growth and lock-in, and the hidden cost of custom code is maintenance.
For Retool and similar tools, the bill grows with every new hire who needs the tools, and moving from Team to Business for a feature multiplies the per-seat rate. The apps you build exist in the builder's format, so leaving means rebuilding them. And when your app's data model changes, the internal tools break quietly until someone notices.
For a custom admin, the cost is that every change goes through development and every dependency needs updates. The admin also tends to grow without a plan unless someone owns it. In both cases, the tools need an owner.
## Which should you pick?
Pick by who uses the tools, how many of them there are and whether the admin is part of your product.
- A small ops or support team on an existing database who needs tools now: Retool, starting on the free plan.
- A team that wants the builder model but self-hosted or open source: Appsmith.
- A SaaS where customer admins or many staff will use the admin, or where permissions are complex: a custom Next.js admin.
- A team that mostly asks questions across several systems: a synced, read-only data layer like THG Brain, with a small custom admin for the few actions that change data.
- An early MVP with a handful of internal tasks: a few protected pages in your own app often beat any tool.
## The bottom line
Retool vs custom admin dashboard is a trade between speed and fit. At the time of writing Retool is free for up to 5 users, Team lists $10 per builder and $5 per internal user per month and Business lists $50 and $15, which is a good deal for a small internal team and a growing cost for a large one. Appsmith offers the same model with open source and self-hosting. A custom Next.js admin costs more up front but has no seat fees and shares your app's roles and audit logs. And if most of the work is asking questions, sync the data into one read-only place and let the team ask an assistant, as THG Brain does at The Hoop Gang.`,
  },
];
