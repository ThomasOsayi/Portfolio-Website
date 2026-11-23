// Generated case studies (Nov 22 2026): FieldOps, NOM, THG Brain.
import type { CaseStudy } from '../seo';

export const caseStudiesGenB: CaseStudy[] = [
  {
    slug: 'fieldops',
    name: 'FieldOps',
    kind: 'SaaS · Field operations',
    metaTitle: 'FieldOps Case Study: Job Scheduling with Outlook Calendar Sync',
    description: 'FieldOps is a job scheduling app for field teams: jobs sync to Outlook Calendar, documents stay organized and a contact directory builds itself from each job.',
    image: '/work/fieldops.jpg',
    url: 'https://fieldopapp.com',
    stack: ['Next.js', 'Firebase Auth', 'Firestore', 'Vercel', 'Outlook Calendar sync'],
    service: 'saas-mvp-development',
    body: `## The problem
A field team lives in two places at once. The office plans the work, and the people doing it are out at a site, reading their calendar on a phone between jobs. When the schedule sits in one tool and the calendar sits in another, someone has to copy every job across by hand, and the copy is where things go wrong. A job gets moved in the planner and not in the calendar, an address is typed twice and differently, and the paperwork for the job lives in an email thread nobody can find.
FieldOps is my answer to that. It is a job scheduling app for field teams, and the line on its sign-in page says what it is for: manage your field operations in one place. Jobs are scheduled in FieldOps, synced to Outlook Calendar, and the contacts and documents that belong to each job sit next to it in a single dashboard.
This case study sticks to what the app does and the decisions those features imply. The app sits behind a sign-in, so I am not going to put numbers on it that a visitor cannot check.
## What a field team needs from a scheduling tool
Before writing any code I listed the jobs the tool has to do, because a scheduler that covers four of them sends the team back to a spreadsheet for the fifth.
- A place to create and schedule jobs
- A calendar the crew already checks, kept in step with that schedule
- Somewhere for the documents that belong to each job
- A directory of the people and companies the team works with
- A sign-in that does not become its own support problem
The second item decided the rest. Most teams that would use FieldOps already run their day out of Outlook. Asking them to check a second calendar would fail, so the calendar had to stay where it was and FieldOps had to feed it.
## How I approached it
The job is the center of the data model. Everything else in FieldOps hangs off a job: the calendar event it creates, the documents attached to it and the contacts named on it.
That choice is what lets the app do work for the team instead of asking the team to do work for the app. If the job record holds the date, the place and the people, then the calendar event and the contact entry can be produced from it, rather than typed in again somewhere else. The rule I worked to was simple: the team enters a fact once, on the job, and every other view reads it from there.
![The FieldOps sign-in page, listing its three core features: Outlook sync, documents and contacts.](/shots/fieldops-login.jpg)
## What I built
### Job scheduling
Jobs are created and scheduled from one dashboard. The schedule is the source of truth for the rest of the app, which is why the other features below are described in terms of what happens when a job is saved.
### Outlook Calendar sync
The sign-in page puts it plainly: jobs auto-create calendar events. When a job is scheduled, FieldOps creates the matching event in Outlook Calendar, so the crew sees the job in the calendar they already use, on whatever device they already use it on.
The design question with any calendar sync is which side owns the data. In FieldOps the job owns it. The calendar event is a copy produced from the job, not a second record that someone edits separately. That direction matters, because two systems that both think they are the original will eventually disagree, and the person who finds out is the one standing at the wrong address.
### Documents
Field work comes with paperwork. FieldOps lets the team upload, view and organize field documents inside the app, so the file for a job is found from the job and not from an inbox search.
### Contacts that build themselves
The contacts feature is the one I like most, because it removes a chore instead of adding a screen. FieldOps auto builds the team's directory from its jobs. The people and companies named on jobs become entries in the directory, so the contact list grows as a side effect of scheduling work, without anyone maintaining it as a separate task.
### Sign-in
Users sign in with Google or with an email and password, and the email path has a password reset. Offering Google sign-in means a team member can get in with an account they already have, which is one less password for a crew lead to forget on a job site.
## Technical decisions and why
I confirmed the stack from the public sign-in page itself, not from memory.
- Next.js on Vercel. The app is a Next.js project served from Vercel. One project holds the pages and the server code, and the server side is where anything that talks to another company's calendar belongs, because the keys for that connection should never reach the browser.
- Firebase Auth. Sign-in runs on Firebase Authentication, with its Google provider for the Google button and email and password for everyone else. Authentication is a solved problem, and building my own would add risk without adding anything a user would notice.
- Firestore. The app data lives in Cloud Firestore. Jobs, documents and contacts are a good fit for a document database, and Firestore security rules let access be enforced where the data lives rather than only in the interface.
- One direction of sync. The job creates the calendar event, not the other way round. Keeping the flow one way is what keeps the two sides from fighting over which version is correct.
## What the visible features say about the product
Every feature on that sign-in page is the same idea applied to a different chore. The calendar event comes from the job. The directory comes from the job. The documents are found from the job. None of them asks the team for a new habit. They take something the team was already doing by hand and do it as a result of scheduling the work.
That is the test I would apply to any feature request for a tool like this. If a feature needs the team to type something they have already typed somewhere else, it is probably a copy waiting to go out of date.
## What I would tell someone planning a similar tool
Find the calendar your users already live in and feed it. Do not ask a field crew to adopt a new one.
Pick one owner for every piece of data. When two systems both hold the schedule, decide which one is the original and make the other a copy.
Look for chores that can become side effects. A directory that fills itself from jobs is worth more than a directory screen nobody keeps up to date.
Keep third party connections on the server. Calendar access is sensitive, and the browser is the wrong place for it.
If you are planning a tool like this, a first version of one workflow is the place to start, and the SaaS MVP development page explains how I scope that.
## The bottom line
FieldOps puts a field team's jobs, calendar, documents and contacts behind one sign-in, and it does it by treating the job as the single source that everything else is built from. Jobs create their own Outlook events, contacts collect themselves from the work, and the team enters each fact once.`,
  },
  {
    slug: 'nom',
    name: 'NOM',
    kind: 'Mobile app · LMU Tech & Digital Ventures',
    metaTitle: 'NOM Case Study: A Food Discovery App in React Native and Expo',
    description: 'NOM is a food discovery app I built in React Native, Expo and Firebase at LMU Tech & Digital Ventures, with photo reviews, ratings and comments in a social feed.',
    image: '/work/nom-poster.jpg',
    stack: ['React Native', 'Expo', 'Firebase'],
    service: 'saas-mvp-development',
    body: `## The problem
Finding something good to eat usually means reading reviews written for nobody in particular. Star ratings from strangers average out every opinion until a taco stand and a tasting menu look the same, and a long text review tells you a lot about a visit and very little about the dish you are actually deciding on.
NOM starts from a different place. The unit of a review is a dish, not a restaurant, and it comes with a photo taken by someone you might actually know. I built NOM at LMU Tech & Digital Ventures, end to end, in React Native, Expo and Firebase. It is a food discovery app where people share restaurant reviews with photos, ratings and comments in a social feed.
## What the app needed
The brief was a mobile app that makes posting about food as quick as taking the photo, and makes browsing other people's posts feel like a feed rather than a directory.
- A first run that sets a new user up properly before they see the feed
- Posting straight from the camera
- A review format built around one dish: a photo, a rating, the restaurant and a few words
- A social feed to browse, with a way to see only people you follow
- Comments, so a post can turn into a conversation
- A profile that collects your own posts and the places you have been
## How I approached it
Design the posting flow first, because a social app without posts is an empty room. Everything about NOM depends on people posting, so the path from opening the camera to a published review had to be short. Browsing, profiles and saved lists are all views of those posts, and they only matter once the posts exist.
The second principle was to make the review small. A dish name, a restaurant, a photo, a rating and a sentence or two is enough to be useful, and small enough that people actually finish writing it.
@video(/work/nom.mp4|/work/nom-poster.jpg|NOM demo: a screen recording of the app, from the explore feed to a dish review and a profile with saved NOMs and restaurants, built in React Native, Expo and Firebase.)
## What I built
### An 11-screen onboarding flow
New users go through an 11-screen onboarding flow before they reach the feed. A social app needs a few things settled up front, and a single long form is the fastest way to lose someone on their first launch. Splitting it into short screens means each one asks for one thing, the user always knows how far along they are, and the app can collect what it needs without feeling like paperwork.
### Camera uploads
Posting starts from the camera, which sits in the middle of the bottom navigation next to home, search, notifications and the profile. Food photos are taken in the moment, at the table, so the camera had to be one tap away rather than buried in a menu. The photo is uploaded with the post, so it shows up in the feed for everyone else.
### Dish reviews
In the demo, each post is called a NOM. It shows the dish name, the restaurant, the author and a short review, with a rating shown as a number inside a heart on each card. Below a post, a "More NOMs" row keeps the browsing going instead of sending the user back to the start.
### A social feed
The explore feed is a two column grid of photo cards, each labelled with the dish and the restaurant. Tabs at the top switch between all posts and posts from people you follow, which is the difference between discovering new places and checking what your friends have been eating. Posts carry comments, so a review can pick up questions and replies.
### Profiles, saved NOMs and restaurants
A user profile collects that user's own NOMs in a grid, with further tabs for other views of their activity. Saved items are split into NOMs and restaurants, and the restaurant list shows how many NOMs you have from each place and when you last visited. Over time a profile becomes a personal food diary, which is a reason to keep posting that has nothing to do with likes.
## Technical decisions and why
- React Native and Expo. NOM is a phone app, and React Native lets one codebase run on both iOS and Android. Expo handles the device features a food app leans on, the camera above all, and it makes it easy to get the app onto a real phone for testing while it is being built.
- Firebase. A social feed needs sign-in, a database that updates as people post and somewhere to keep photos. Firebase offers all three as managed services on one platform, without a separate server to run. When someone posts or comments, the change can reach other users without them refreshing.
- Onboarding as separate screens. Breaking the first run into 11 screens kept each step simple to build and test on its own, and made it easy to change the order or wording of one step without touching the rest.
- Photos as the primary content. Every card in the feed leads with the image. That shapes the data too: a post is a photo plus a small amount of text, not a text review with an optional picture.
## What building NOM taught me
Mobile is less forgiving than the web. On a website a slow page is annoying. On a phone, at a table, with the food going cold, a slow camera or a stuck upload means the post never happens. The parts of NOM that took the most care were the ones that stood between a user and a published post.
Onboarding is product, not paperwork. The first few screens decide whether someone ever sees the feed, so they deserve the same attention as the feed itself.
A feed needs a reason to come back. The following tab, comments and the restaurant history on a profile all give people something to return for after their first post.
## What I would tell someone planning a similar app
Build the posting flow before anything else and test it on a real phone, in a real restaurant, early.
Keep the post format small. The smaller the post, the more of them you get.
Use a managed mobile toolchain like Expo for a first version. It removes a lot of native setup so the time goes into the product.
If you have a mobile idea and want a working first version of one workflow, the SaaS MVP development page lays out how I scope it.
## The bottom line
NOM is a food discovery app built end to end in React Native, Expo and Firebase, with an 11-screen onboarding flow, camera uploads and dish reviews with photos, ratings and comments in a social feed. The whole design follows one decision: make posting as quick as taking the photo, and everything else in the app is a way of browsing those posts.`,
  },
  {
    slug: 'thg-brain',
    name: 'THG Brain',
    kind: 'Internal data platform',
    metaTitle: 'THG Brain Case Study: An Internal Data Platform Queried from Claude',
    description: "THG Brain puts The Hoop Gang's sales, email, ads, support inbox and creator portal data in one place, synced, searchable and queryable from the team's own Claude.",
    image: '/work/thgbrain.jpg',
    stack: ['Model Context Protocol', 'Claude', 'Shopify', 'Klaviyo', 'Gmail', 'Meta Ads', 'Google Ads', 'GA4'],
    service: 'saas-mvp-development',
    body: `## The problem
A growing brand runs on numbers that live in different places. Sales are in the store. Email results are in the email platform. Ad spend and results are split across ad accounts. Customer questions arrive in a support inbox, and creator activity sits in the creator portal. Each tool has its own dashboard, and each one answers its own questions well. The questions a team actually asks cross those lines: did that email push sales, which creators are worth another round of gear, what are customers writing in about this week.
I work as a software engineer at The Hoop Gang, a basketball streetwear brand, and I built THG Brain to close that gap. It is an internal data platform that puts every number THG runs on in one place: sales, email, ads, support inbox and the creator portal, synced and searchable, and queryable straight from the team's own Claude.
## What the team needed
- One place that holds the data from every system the business runs on
- Data that stays current without someone exporting spreadsheets
- Search across all of it, not one source at a time
- A way to ask questions in plain language instead of building a report for each one
- Access limited to the people who should have it, with no way to change the source data by accident
## How I approached it
Bring the data to one place first, then decide how people ask about it. A question that spans sales and email cannot be answered while the two sit in separate tools, so the foundation of THG Brain is the sync: each source is pulled into one platform where records from different systems can be searched and compared side by side.
Only after that did the question of the interface come up, and the answer was to not build a dashboard for every question. The team already uses Claude. The most useful interface was the one they had open anyway.
![The THG Brain sign-in: Every number THG runs on, in one place, with its connected sources listed.](/work/thgbrain.jpg)
## What I built
### Synced sources
The sign-in screen lists the sources THG Brain brings together: Shopify, Klaviyo, Gmail, Meta Ads, Google Ads, GA4 and the creator portal. Between them they cover the store's sales, email marketing, the support inbox, paid ads on two platforms, website traffic and the brand's creator program.
Syncing means the platform keeps its own copy of the records from each source and keeps it current. That copy is what makes cross source questions possible, and it means a question does not depend on every outside service answering in the moment.
### Search across everything
Once the records sit in one place, they can be searched together. A search for a product, a customer issue or a creator can return what each system knows about it, instead of the team opening seven tabs and piecing the story together.
### Queryable from Claude
This is the part that changes how the team works. THG Brain is set up so that the team's own Claude can query it directly. Someone on the team asks a question in plain language, and Claude looks up the answer in THG Brain's data rather than guessing.
### An admin portal
There is also a web admin portal. The sign-in page marks it as admins only, with read-only data.
## How the Claude access works, conceptually
The connection follows the Model Context Protocol pattern, an open standard for giving an AI assistant access to outside tools and data. Here is the idea in plain terms.
- The platform exposes a set of tools. Each tool is a narrow, well described action, such as searching records or pulling performance data for a source over a date range.
- Claude is connected to those tools. When a question comes in, Claude decides which tools to call and with what inputs.
- The tools run against THG Brain's data and return results. Claude reads those results and writes the answer, grounded in the data it just retrieved.
The important part is that Claude is not remembering numbers or making them up. It is calling a tool and reading what comes back, so the answer is only as good as the data the platform holds, which is why the sync came first.
## Technical decisions and why
- Sync instead of live calls only. Pulling each source into one platform lets records from different systems be searched and compared together, which live calls to separate services make hard.
- Read-only by design. The sign-in page states read-only data. A platform built to answer questions has no reason to change orders, emails or ad campaigns, so it does not. That removes a whole category of risk from letting an assistant query business data.
- Admins only. The data covers sales, customers and ad spend, so access is limited to admin accounts.
- Narrow tools over a raw database connection. Giving an assistant a small set of clearly described tools keeps its questions inside what the platform is meant to answer, and makes its answers easier to check.
- Use the interface the team already has. Building a chart for every question would never keep up with the questions. Making the data queryable from Claude lets a new question be asked the moment someone thinks of it.
## What I would tell a business planning something similar
Get the data into one place before you add AI. An assistant connected to scattered, stale data gives confident answers that are wrong.
Start read-only. You can always add actions later, once you trust the answers. Removing them after a mistake is harder.
Keep the tools narrow and well described. The quality of an assistant's answers depends heavily on how clearly each tool says what it does.
Keep access tight. Business data is sensitive, and the fact that it is easy to ask about makes access control more important, not less.
If you want a first version of a platform like this for your own business, the SaaS MVP development page explains how I scope the first workflow.
## The bottom line
THG Brain brings The Hoop Gang's sales, email, ads, support inbox and creator portal data into one synced, searchable, read-only platform, and lets the team ask about all of it from their own Claude. The sync is the foundation, and the Claude connection is what turns that data into answers the team can get by simply asking.`,
  },
];
