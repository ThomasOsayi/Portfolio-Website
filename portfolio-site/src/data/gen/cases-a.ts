import type { CaseStudy } from '../seo';

export const caseStudiesGenA: CaseStudy[] = [
  {
    slug: 'pacific-harbor-medical-group',
    name: 'Pacific Harbor Medical Group',
    kind: 'Medical group website',
    metaTitle: 'Pacific Harbor Medical Group Case Study: Executive Physical Website',
    description: 'A one-page Next.js site for physician-led executive physicals in Torrance and the South Bay, built around who the program serves and what a visit includes.',
    image: '/work/phmg.jpg',
    url: 'https://phmg-executive-physical.vercel.app',
    stack: ['Next.js', 'React', 'Vercel'],
    service: 'nextjs-website-development',
    body: `## The problem
An executive physical is hard to explain on a website. It is not urgent care and it is not a routine checkup. It is a long, physician-led assessment with a lot of testing behind it, and the people it is meant for are busy, skeptical of anything that sounds like a sales pitch, and used to deciding quickly whether something is worth their time.
Pacific Harbor Medical Group offers physician-led executive physicals in Torrance and the South Bay of Los Angeles. The site had to do three things for that reader. Make the case that their own health deserves the same planning they give their business or family. Show what the program actually includes, in enough clinical detail to be credible. And give them one calm, private way to ask for a consultation.
There was also a tension to manage. The word "executive" can make a program sound like it is only for people in corner offices. The practice wanted to speak to contractors, café owners, chefs, brokers and athletes as well, anyone other people depend on.
## What I built
A single-page Next.js site with a short top navigation (The Program, What's Included, How It Works) and an Inquire button that stays in the header. Every section on the page answers one question a visitor has, in the order they tend to ask it.
### A hero that leads with the reader, not the clinic
The page opens on a full-bleed video with the line "You are your biggest investment." Under it, one sentence describes the service: comprehensive, physician-led executive physicals for the people others count on. There are two actions, Request a Consultation and Explore the program, and a line that places the practice in the South Bay.
I kept the hero to a headline, one sentence and two buttons. Someone who lands here from a search or a referral should know what this is before they scroll.
![The Pacific Harbor Medical Group homepage hero: "You are your biggest investment."](/shots/phmg-home.jpg)
### Mission and location
The next section states the mission in the practice's own words: your family depends on you, your team counts on you, and your future deserves the same commitment. It names the two physicians and then explains where the practice sits, with a list of the South Bay cities it serves, from Manhattan Beach and Hermosa Beach to Redondo Beach, Torrance and Palos Verdes.
For a local medical practice, naming the neighborhoods matters twice. A visitor checks that the practice is close enough to visit, and search engines get plain text that ties the page to those places.
![The mission statement section of the Pacific Harbor site.](/shots/phmg-home-s1.jpg)
### "Leadership is not defined by a corner office"
This is the section that widens the audience. It is a set of profile cards: The Provider, The Owner, The Broker, The Chef, The Athlete and The Executive, each with a one-line reason that person cares about their health. A contractor in Torrance wants to be there for his kids' milestones. A café owner in Redondo Beach has twelve paychecks running through her door.
The footer states that patient stories on the page are illustrative. I think that disclosure belongs on any healthcare site that uses personas, and putting it in the footer copy keeps the cards readable while still being honest about what they are.
![The "Leadership is not defined by a corner office" section with profile cards for different kinds of patients.](/shots/phmg-home-s2.jpg)
### What's included, in clinical detail
The program section is titled "A more complete picture of your health" and splits the physical into four cards: the comprehensive examination, cardiovascular risk, cancer screening and lifestyle medicine. Each card names the actual tests. The examination card lists history and physical, chest X-ray, ECG, exercise treadmill, spirometry, audiometry, vision, grip strength, body composition and core labs. The heart health card names ApoB, lipoprotein(a) and hs-CRP, with coronary calcium scoring or CCTA when the physician finds it appropriate.
That level of detail was a deliberate choice. The reader for this service tends to research before they book. Vague promises like "advanced testing" do nothing for them, while a named test list shows the program is real and gives them something to compare.
![The "A more complete picture of your health" section listing what the executive physical includes.](/shots/phmg-home-s4.jpg)
Every card also has a "Request details" link that jumps to the inquiry form, so a visitor who is interested in one specific part of the program never has to hunt for the next step.
![The cardiovascular risk testing card on the Pacific Harbor site.](/shots/phmg-home-s5.jpg)
### How it works and what the visit feels like
After the clinical detail comes the process: intake questionnaire, laboratory testing, an optional advanced cancer screening, the physician-led history and exam, a personalized risk assessment, the functional testing, and a results discussion with a prevention plan. Then a short section on the experience itself: a private suite, a single care coordinator, and results explained in plain language face to face.
Those three experience points answer the unspoken worry of a busy person: will this waste my day. Putting them right after the process list means the reader sees the effort involved and the reassurance together.
### A short, private inquiry form
The page ends with "Request a private consultation": first name, last name, email and phone, and one button. Under the button is a note asking visitors not to include medical information. The form shows a sending state and then a thank-you message saying a care coordinator will reach out within one business day.
## Technical decisions and why
- Next.js. The page is prerendered and served as static HTML, which I confirmed from the response headers on the live site. A long single page with a video hero still needs to show its headline immediately on a phone, and prerendering gets the text there before any JavaScript runs.
- Hand-written CSS instead of a utility framework. The site uses its own class names for the hero, the cards and the form. For a one-page brand site with an editorial look, a small set of named styles was easier to tune than a long chain of utilities.
- Self-hosted fonts and optimized images. Fonts load from the site itself through Next.js, and photos go through the Next.js image pipeline. That avoids layout shift while fonts and images arrive, which matters on a page that is mostly large type and photography.
- Structured data. The page includes schema.org markup describing a medical clinic, with its address, the South Bay areas it serves and its medical specialties. That gives search engines the same facts a visitor reads, in a format they can use directly.
- Anchor navigation. Because the whole program fits on one page, the navigation links scroll to sections instead of loading new pages. A visitor can jump from the header to the test list and back without losing their place.
- Vercel. The site is deployed on Vercel, so each change gets its own preview link before it goes live.
- Careful disclaimers. The footer carries plain-language limits: screening cannot guarantee detection of every condition, multi-cancer tests are adjunctive and can produce false results, and a calcium score of zero does not exclude all plaque. Medical marketing that only shows the upside reads as a sales page, and this reader can tell.
## What I would tell someone planning something similar
Decide who the site is for before anything is designed. For this practice, that meant naming several kinds of people on the page, not only executives.
Name the tests. If your service is clinical, the specifics are your best marketing. A list of what is included builds more trust than any adjective.
Keep the form short and keep health details out of it. A website inquiry should collect what the practice needs to call someone back and nothing else. Clinical information belongs in the practice's own records system, and anywhere a form does send data should be chosen with health privacy rules in mind. That is general guidance, not legal advice.
Label illustrative content as illustrative. Persona cards and sample stories are a good way to show who a service is for, but say what they are.
Put the next step everywhere. A header button, a hero button and a link on every program card all point to the same form, so a visitor who decides partway down the page can act right there.
If you are weighing a one-page site against a multi-page one for a single service, a single long page with clear sections is often enough. The Business Site package on my services page covers this kind of build, and the website cost calculator gives a quick estimate for your own scope.`,
  },
  {
    slug: 'scopro-creators',
    name: 'SCOPRO Creators',
    kind: 'Creator program portal',
    metaTitle: 'SCOPRO Creators Case Study: Creator Portal for a Coaching Board Brand',
    description: 'A creator portal for SCOPRO coaching boards: coaches apply, buy a board, post one video, get refunded in full and earn a commission on every sale it drives.',
    image: '/work/scopro.jpg',
    url: 'https://www.scoprocreatorportal.com',
    stack: ['Next.js', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Tailwind CSS', 'Vercel'],
    service: 'saas-mvp-development',
    body: `## The problem
SCOPRO makes dual-sided, magnetic, dry-erase coaching boards for soccer, basketball, lacrosse, hockey, futsal and flag football. The people who show those boards best are coaches using them at real practices and games. The brand wanted a steady stream of those videos, and a fair way to reward the coaches who make them.
Gifting free product to anyone who asks has a known weakness: a lot of the gear never turns into a video. Paying creators a flat fee up front has a different one: the brand pays whether or not the content ever sells anything. The program SCOPRO wanted sits between those. A coach buys the board like any customer, posts one video, gets the full order refunded once the video is approved, and then earns a commission on every sale that video drives when SCOPRO runs it as an ad.
That model only works if the coach can see every step. Paying first is a leap of faith, so the portal has to make the refund feel certain and the earnings feel visible.
It is the same program model I worked with at TheHoopGang, where creators get gear, post a video, get refunded and earn on sales. The SCOPRO portal footer reads "Powered by SQWAD", the creator program software I build.
## What I built
A public landing page that sells the program, a four-step application, a sign-in page, and a creator area behind it for earnings, payouts and video tracking.
### A landing page that explains the money first
The hero says the whole deal in three lines: "Coach on camera. Get your board back. Earn on every sale." Under it, one paragraph spells out the mechanics, and two buttons offer Apply now or How the refund works. A row of numbers sits under the hero: a 100 percent sample refund after one approved video, a 10 percent commission, six sports covered, one video to get refunded and shipping in 24 to 48 hours.
I put those numbers right under the headline because they are the questions a coach has before they read anything else. How much do I get back, how much do I earn, and how much work is it.
![The SCOPRO Creators homepage hero: "Coach on camera. Get your board back. Earn on every sale."](/shots/scopro-home.jpg)
### Four steps from sideline to payout
The how it works section breaks the program into four numbered cards: apply, buy your sample, post one video, get refunded and then earn. Each card carries a small tag with the commitment involved, like "2 min form" or "1 video · 14 days", so a coach can judge the effort at a glance.
![The four steps section: apply, buy your sample, post one video, get refunded and earn.](/shots/scopro-home-s1.jpg)
### Making the refund feel certain
The refundable sample section is where the design does the most work. It explains why the coach pays first (it keeps the program for people who will actually film with the board) and then walks through a sample timeline for a Basketball Bundle: the order goes out, the board is delivered, the video is submitted, the refund is issued, and the cost of the bundle ends at zero.
Next to that are the rules, stated plainly. One approved video triggers the refund, with no view count or follower minimum. The full order goes back to the original payment method within three to five business days of approval. If no video is submitted within 14 days of delivery, the order stays a normal purchase and the coach keeps the board.
Writing the failure case on the page was important to me. A program that only explains the happy path leaves people guessing about what happens if life gets in the way, and guessing is what stops someone from applying.
### Earnings tracked per video
After the refund, the page shows what the creator area looks like: total earned, available balance, the refunded sample, and a list of videos with views and earnings for each. The figures in that preview are illustrative. Around it, the copy explains that sales are tracked back to each video, that creators can cash out to PayPal, Venmo or Zelle once they have 50 dollars available, and that monthly retainers and coach cohorts exist for creators who keep posting.
![The earnings section showing refund status and per-video earnings tracking, with illustrative figures.](/shots/scopro-home-s2.jpg)
### FAQ in the coach's own words
The FAQ is titled "Questions coaches ask" and covers the objections in the order they come up: why pay for a refunded sample, when the money comes back, whether views matter, what happens without a video, how much a sale pays and whether a big following is needed. Each question is a closed accordion, so the whole list fits on one screen and a coach opens only what they care about.
![The SCOPRO Creators FAQ section.](/shots/scopro-home-s4.jpg)
### A four-step application with real accounts
The apply page restates the deal and sets expectations: four steps, about five minutes, and it works whether a coach posts on TikTok, Instagram or both. Step one creates an account with full name, email and password, and the portal emails a link to confirm the address. Existing creators sign in with email and password on a separate login page.
![The SCOPRO creator application start screen.](/shots/scopro-apply.jpg)
## Technical decisions and why
- Next.js. The public pages and the signed-in creator area run in one Next.js app, deployed on Vercel. The live site's response headers and assets confirm both. One project means the landing page and the portal share the same components and styling.
- Firebase Authentication. The public bundle connects to a dedicated Firebase project for the portal and uses Firebase sign-in. Email and password accounts with email confirmation are a good fit here: coaches are not developers, and a familiar sign-up keeps the application short.
- Firestore and Firebase Storage. The portal uses Firestore as its database and includes the Storage client for files. A creator program is mostly status that changes over time (applied, approved, ordered, delivered, video submitted, refunded), and a document database with live updates suits that shape: the creator and the brand can read the same status without anyone refreshing a page.
- Server routes for anything involving money. The bundle calls the app's own server endpoints for creator earnings, payouts, profile data and tracking, plus admin routes for analytics and insights. Keeping earnings and payouts behind server routes means balances are not trusted from the browser, because a number a creator can change in their own tab is not a number you can pay out against.
- Tailwind CSS. The landing page and the portal share one set of utility styles, which kept the marketing page and the signed-in screens visually consistent.
- Vercel Analytics. Page-level traffic is measured with Vercel's own analytics script, which needs no extra setup on a Vercel deployment.
## What I would tell someone planning something similar
Write the rules before the screens. When does the refund trigger, what counts as an approved video, what happens after 14 days with nothing posted, and when can a creator cash out. Every screen in a creator program is a view of those rules.
Show the failure case. "No video, no refund, you keep the board" is one line, and it answers the question that keeps people from applying.
Make status visible to the creator. Most messages in a creator program are someone asking where things stand. A dashboard that shows the order, the video and the refund status answers them before they are sent.
Keep money calculations on the server. Commission, balances and payouts should never depend on data the browser sends.
Decide whether you need custom software at all. Applications, sample orders, video tracking and payouts are the same jobs from one brand to the next, which is why SQWAD exists. A fully custom build makes sense when your rewards or approvals are unusual. For a first working version of one workflow, the MVP Starter on my SaaS MVP page is the smallest place to begin.`,
  },
  {
    slug: 'serenity-institute',
    name: 'Serenity Institute',
    kind: 'Training program website',
    metaTitle: 'Serenity Institute Case Study: Waitlist Site for a Live Certification Program',
    description: 'A Next.js site for Serenity Institute, a live Zoom training program for intervention professionals, with a nine-module curriculum and a founding cohort waitlist.',
    image: '/work/serenity.jpg',
    url: 'https://serenityintervention.com',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    service: 'nextjs-website-development',
    body: `## The problem
Serenity Institute is a live, instructor-led training program for people who want to become intervention professionals, the people families call when someone they love needs to enter treatment for addiction. The course is taught over Zoom, aligned to the Certified Intervention Professional (CIP) pathway, and capped at 12 seats for its founding cohort.
The site had a specific job. The program was not yet open for enrollment, and pricing and the start date were still being finalized. So the page could not sell a course in the usual way. It had to explain a serious professional program to the right people, earn their trust, and collect a waitlist of qualified, interested applicants the instructor could contact personally.
The audience is also unusually mixed. Some readers come from personal recovery, some from counseling or social work, some are changing careers. Many are approaching a topic that is personal to them. The tone had to be calm and credible, never salesy, and honest about what the program does and does not provide.
The footer identifies Serenity Institute as a division of HNO Consulting, the consultancy I freelance through.
## What I built
A single-page Next.js site with sections for the program pillars, the curriculum, the instructor, the format, a detailed waitlist form and an FAQ.
### A hero with a clear promise and a clear limit
The hero reads "Become a Certified Intervention Professional", with a short line about live, instructor-led training on Zoom and a small tag above it: founding cohort, 12 seats only. Two buttons lead to the waitlist or the curriculum. Under them, three short markers summarize the program: live instructor-led Zoom, CIP pathway aligned, and based in Southern California.
The scarcity is real (the cohort is small by design), so it belongs in the hero. It tells a visitor this is a cohort with a start, not an on-demand video library.
![The Serenity Institute homepage hero: "Become a Certified Intervention Professional".](/shots/serenity-home.jpg)
### Four program pillars
"A serious program for serious practitioners" introduces four cards: real instruction in live sessions with a working interventionist, a credential pathway aligned to the CIP standard, a small cohort community that can become a referral network, and training on the business side of the work, such as pricing, contracts and insurance navigation.
Each pillar answers a doubt a careful buyer has about online training: is it just recorded videos, does it lead anywhere, will I be alone, and can I actually make a living from it.
![The program pillars section of the Serenity Institute site.](/shots/serenity-home-s1.jpg)
### A curriculum you can actually read
The curriculum lists nine modules, each with a number, a title and a short description: foundations of addiction, family systems, the Johnson model, ARISE and invitational models, CRAFT, conducting the intervention, treatment matching, ethics and the law, and building a practice.
I gave the curriculum its own full section instead of a bullet list in a sidebar. For a professional program, the syllabus is the product. A prospective student reading "EKRA, the Anti-Kickback Statute, California SB 1228, and the AIS Code of Ethics" in the ethics module learns more about the course's seriousness than any headline could tell them.
![The nine curriculum modules on the Serenity Institute site.](/shots/serenity-home-s2.jpg)
### Instructor and format
The instructor section describes a Licensed Advanced Alcohol and Drug Counselor (LAADC) with more than 30 years as a working interventionist and addiction studies instructor, and notes that the full bio is shared directly with enrolled students. Below it, four short facts set expectations: live Zoom, evenings and weekends, 12 seats maximum, and a Southern California base.
### A waitlist form built for a personal follow-up
The waitlist form is the core of the site. Beyond name, email, phone and zip code, it asks whether the person is in personal recovery (with ranges and a prefer not to say option), their current background, which class times work for them, how they heard about the program and, optionally, why they want to become an interventionist.
Each of those questions exists for a reason. Recovery time matters because many credentialing boards expect a minimum period of sobriety, which the FAQ explains. Background and preferred times help the instructor plan the cohort and its schedule. The referral question shows which channels are working, with options like a flyer at a meeting or a friend's referral. The open question is optional so it never blocks someone from joining.
![The format details and the start of the founding cohort waitlist form.](/shots/serenity-home-s3.jpg)
Under the button, a note says the information is confidential, that joining the waitlist is not a commitment to enroll, and that the CIP credential is issued by the Pennsylvania Certification Board, not by the program. When the form is sent, it is replaced by a "You're on the list" message explaining that program details, schedule and pricing will come before public enrollment opens.
### An FAQ that is honest about credentials
The FAQ answers the questions a careful applicant asks: will I get the CIP from this course, what it costs, whether I need to be in recovery, when the first cohort starts, whether it is fully online and what happens after graduation. The credential answer is direct. The course prepares students for the CIP pathway, and the credential itself requires meeting the Pennsylvania Certification Board's own requirements.
![The Serenity Institute FAQ section.](/shots/serenity-home-s5.jpg)
## Technical decisions and why
- Next.js. The page is prerendered and served as static HTML, which the live site's response headers confirm. Text appears immediately, and search engines see the full curriculum and FAQ as plain content.
- A server route for the waitlist. The form posts its data as JSON to the site's own API route instead of a third-party form widget. The browser checks that the required fields are filled before sending, and the server response decides whether the visitor sees the confirmation or an error message they can act on. Keeping submission on the site's own route means applicant details go where the program decides, and the form looks like the rest of the page.
- Clear error and success states. If the request fails, the form shows the message and keeps everything the person typed. For a form this long, losing answers to a network hiccup would cost a sign-up.
- Tailwind CSS. The site's warm palette (forest greens, sand and earth tones) is defined once as theme tokens and used through utility classes, which kept spacing and colors consistent across the cards, form fields and FAQ.
- Web fonts chosen for tone. DM Serif Display for headings and DM Sans for body text, loaded from Google Fonts. A serif headline reads calm and established, which suits a program asking people for trust.
- Vercel. The site is deployed on Vercel, so copy changes can be checked on a preview link before they go live. That matters on a site where wording around credentials has to be exact.
## What I would tell someone planning something similar
If you are not ready to take payments, build a waitlist page, not a sales page. A waitlist lets you launch before pricing and dates are final, and it gives you a list of people to talk to personally.
Ask the questions that help you plan, and make the personal ones optional or give a prefer not to say option. Every field should earn its place.
Publish the full curriculum. For professional training, the syllabus does more selling than any tagline.
Be precise about credentials. If a third party issues the certification, say so in the form note, the FAQ and the footer. Overstating what a course grants is the fastest way to lose a serious applicant's trust, and wording around credentials is worth having the instructor check line by line. This is general guidance, not legal advice.
Handle form failures gracefully. Show a clear message and never clear what the person typed.
A one-page site with a working waitlist form fits the Business Site package on my services page, and the website cost calculator gives a quick estimate for a different scope.`,
  },
];
